// Header ganha fundo sólido depois que a página rola.
export function initHeader() {
  const header = document.querySelector(".site-header");
  if (!header) return;
  const update = () => header.classList.toggle("is-scrolled", window.scrollY > 12);
  update();
  window.addEventListener("scroll", update, { passive: true });
}
