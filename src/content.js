// This runs automatically on every page
document.body.style.backgroundColor = "pink";

// Or replace all images:
document.querySelectorAll("img").forEach(img => {
  img.src = "https://placekitten.com/300/300";
});