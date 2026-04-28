export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: corsHeaders()
      });
    }

    if (url.pathname !== "/instagram-feed") {
      return jsonResponse(
        { error: "Not found. Use /instagram-feed" },
        404
      );
    }

    return getInstagramFeed(env);
  }
};

const ALLOWED_ORIGINS = [
  "https://www.hamsanomads.com",
  "https://hamsanomads.com",
  "http://localhost:3000",
  "http://127.0.0.1:5500"
];

function corsHeaders(origin = "") {
  const allowedOrigin = ALLOWED_ORIGINS.includes(origin)
    ? origin
    : "https://www.hamsanomads.com";

  return {
    "Access-Control-Allow-Origin": allowedOrigin,
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400"
  };
}

function jsonResponse(data, status = 200, origin = "") {
  return new Response(JSON.stringify(data, null, 2), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=900",
      ...corsHeaders(origin)
    }
  });
}

async function getInstagramFeed(env) {
  const token = env.INSTAGRAM_ACCESS_TOKEN;

  if (!token) {
    return jsonResponse(
      {
        error: "Missing Instagram token",
        fix: "Add INSTAGRAM_ACCESS_TOKEN as a Cloudflare Worker secret."
      },
      500
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

  const endpoint =
    "https://graph.instagram.com/me/media" +
    `?fields=${encodeURIComponent(fields)}` +
    "&limit=12" +
    `&access_token=${encodeURIComponent(token)}`;

  try {
    const response = await fetch(endpoint);
    const rawText = await response.text();

    let data;
    try {
      data = JSON.parse(rawText);
    } catch {
      data = { raw: rawText };
    }

    if (!response.ok) {
      return jsonResponse(
        {
          error: "Instagram API request failed",
          status: response.status,
          details: data
        },
        response.status
      );
    }

    const posts = (data.data || []).map((post) => ({
      id: post.id,
      caption: post.caption || "",
      type: post.media_type,
      image:
        post.media_type === "VIDEO"
          ? post.thumbnail_url || post.media_url
          : post.media_url,
      video: post.media_type === "VIDEO" ? post.media_url : null,
      url: post.permalink,
      timestamp: post.timestamp
    }));

    return jsonResponse({
      username: "hamsanomads",
      profileUrl: "https://www.instagram.com/hamsanomads/",
      count: posts.length,
      posts
    });
  } catch (error) {
    return jsonResponse(
      {
        error: "Worker crashed while fetching Instagram feed",
        details: error.message
      },
      500
    );
  }
}
