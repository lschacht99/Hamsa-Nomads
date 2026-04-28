export default {
  async fetch(request, env, ctx) {
    return new Response(
      JSON.stringify({
        success: true,
        message: "Hamsa Nomads Instagram Worker is live."
      }),
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "https://www.hamsanomads.com"
        }
      }
    );
  }
};
