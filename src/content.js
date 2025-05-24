document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector('input[name="q"]'); // for Google
  if (!input) return;

  const form = input.closest('form');
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // 🔥 prevent the form from submitting
    const query = input.value;

    console.log("Search blocked. Query:", query);

    // You can send it to the background script or your local API here
    chrome.runtime.sendMessage({ type: "query-blocked", query });
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // 🔥 also block enter key just in case
    }
  });
});