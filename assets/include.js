async function includeHTML() {
  const elements = document.querySelectorAll('[data-include]');
  for (const el of elements) {
    const file = el.getAttribute('data-include');
    try {
      const response = await fetch(file);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      el.innerHTML = await response.text();
    } catch (err) {
      el.innerHTML = `<p style="color:red;">Include failed: ${file}</p>`;
      console.error(err);
    }
  }
}

document.addEventListener("DOMContentLoaded", includeHTML);

