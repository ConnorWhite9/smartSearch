(function () {
  try {
    document.body.style.background="pink";
    const params = new URLSearchParams(window.location.search);
    const query = params.get("q");

    if (query) {
      // Example optimization: lowercase and trim
      const optimizedQuery = query.trim().toLowerCase();

      // Redirect to your optimized URL (replace with your real endpoint)
      const redirectUrl = `https://example.com/search?q=${encodeURIComponent(optimizedQuery)}`;

      // Redirect as early as possible
      console.log("redirectUrl", redirectUrl);
      //window.location.replace(redirectUrl);
    }
  } catch (err) {
    console.error("Search redirect failed:", err);
  }
})();
