const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");

if (toggle && links) {
  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const input = document.getElementById("prompt");
const saveBtn = document.getElementById("saveBtn");
const savedOut = document.getElementById("savedOut");

const KEY = "freedom_sentence";

function renderSaved() {
  const saved = localStorage.getItem(KEY);
  if (savedOut) savedOut.textContent = saved ? `Saved: “${saved}”` : "";
}
renderSaved();

if (saveBtn && input) {
  saveBtn.addEventListener("click", () => {
    const value = input.value.trim();
    if (!value) {
      if (savedOut)
        savedOut.textContent = "Type something first (e.g., Freedom is...).";
      return;
    }
    localStorage.setItem(KEY, value);
    input.value = "";
    renderSaved();
  });
}

const year = document.getElementById("year");
if (year) year.textContent = String(new Date().getFullYear());
