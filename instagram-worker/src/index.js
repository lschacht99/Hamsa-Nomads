export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (request.method === "OPTIONS") {
      return handleCors();
    }

    if (url.pathname === "/instagram-feed") {
      return getInstagramFeed(request, env);
    }

    return jsonResponse(
      { error: "Not found" },
      404,
      request
    );
  },

  async scheduled(event, env, ctx) {
    ctx.waitUntil(refreshInstagramToken(env));
  }
};

const ALLOWED_ORIGIN = "https://www.hamsanomads.com";

function handleCors() {
  return new Response(null, {
    status: 204,
    headers: corsHeaders()
  });
}

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400"
  };
}

function jsonResponse(data, status = 200, request) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=1800",
      ...corsHeaders()
    }
  });
}

async function getInstagramFeed(request, env) {
  try {
    const token = await getStoredInstagramToken(env);

    if (!token) {
      return jsonResponse(
        { error: "Missing Instagram access token" },
        500,
        request
      );
    }

    const fields = [
      "id",
      "caption",
      "media_type",
      "media_url",
      "permalink",
      "thumbnail_url",
      "timestamp"
    ].join(",");

    const apiUrl =
      `https://graph.instagram.com/me/media` +
      `?fields=${encodeURIComponent(fields)}` +
      `&limit=18` +
      `&access_token=${encodeURIComponent(token)}`;

    const response = await fetch(apiUrl);

    if (!response.ok) {
      const errorText = await response.text();

      return jsonResponse(
        {
          error: "Instagram API request failed",
          details: errorText
        },
        response.status,
        request
      );
    }

    const data = await response.json();

    const posts = (data.data || [])
      .filter((item) => {
        return ["IMAGE", "VIDEO", "CAROUSEL_ALBUM"].includes(item.media_type);
      })
      .map((item) => {
        return {
          id: item.id,
          caption: item.caption || "",
          type: item.media_type,
          image:
            item.media_type === "VIDEO"
              ? item.thumbnail_url || item.media_url
              : item.media_url,
          video:
            item.media_type === "VIDEO"
              ? item.media_url
              : null,
          url: item.permalink,
          timestamp: item.timestamp
        };
      });

    return jsonResponse(
      {
        username: "hamsanomads",
        profileUrl: "https://www.instagram.com/hamsanomads/",
        posts
      },
      200,
      request
    );
  } catch (error) {
    return jsonResponse(
      {
        error: "Worker error",
        details: error.message
      },
      500,
      request
    );
  }
}

async function getStoredInstagramToken(env) {
  if (env.IG_KV) {
    const kvToken = await env.IG_KV.get("INSTAGRAM_ACCESS_TOKEN");

    if (kvToken) {
      return kvToken;
    }
  }

  return env.INSTAGRAM_ACCESS_TOKEN;
}

async function refreshInstagramToken(env) {
  const currentToken = await getStoredInstagramToken(env);

  if (!currentToken || !env.IG_KV) {
    return;
  }

  const refreshUrl =
    `https://graph.instagram.com/refresh_access_token` +
    `?grant_type=ig_refresh_token` +
    `&access_token=${encodeURIComponent(currentToken)}`;

  const response = await fetch(refreshUrl);

  if (!response.ok) {
    return;
  }

  const data = await response.json();

  if (data.access_token) {
    await env.IG_KV.put("INSTAGRAM_ACCESS_TOKEN", data.access_token);
    await env.IG_KV.put("INSTAGRAM_TOKEN_REFRESHED_AT", new Date().toISOString());
  }
}
