// This runs automatically on every page
document.body.style.backgroundColor = "pink";

// Or replace all images:
document.querySelectorAll("img").forEach(img => {
  img.src = "https://placekitten.com/300/300";
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const active = document.activeElement;
    console.log("Blocking search query");
    // Check if the focused element is the Google search input
    if (active && active.name === "q") {
      e.preventDefault();
      console.log("Blocked Enter key for Google search bar");

      const query = active.value;
      chrome.runtime.sendMessage({ type: "query-blocked", query });
    }
  }
});