// Menu hambúrguer acessível (mobile).
export function initMenu() {
  const btn = document.querySelector(".nav-toggle");
  const nav = document.getElementById("menu-principal");
  if (!btn || !nav) return;
  const label = btn.querySelector(".sr-only");

  const setOpen = (open) => {
    btn.setAttribute("aria-expanded", String(open));
    nav.classList.toggle("is-open", open);
    document.body.classList.toggle("menu-aberto", open);
    if (label) label.textContent = open ? "Fechar menu" : "Abrir menu";
  };

  btn.addEventListener("click", () => {
    const open = btn.getAttribute("aria-expanded") !== "true";
    setOpen(open);
    if (open) nav.querySelector("a")?.focus();
  });
  nav.addEventListener("click", (e) => {
    if (e.target.closest("a")) setOpen(false);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && btn.getAttribute("aria-expanded") === "true") {
      setOpen(false);
      btn.focus();
    }
  });
  window.matchMedia("(min-width: 960px)").addEventListener("change", (e) => {
    if (e.matches) setOpen(false);
  });
}
