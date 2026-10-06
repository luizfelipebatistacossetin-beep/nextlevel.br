// Accordion acessível do FAQ (um aberto por vez).
export function initFaq() {
  const buttons = document.querySelectorAll(".faq-btn");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const open = btn.getAttribute("aria-expanded") === "true";
      buttons.forEach((other) => {
        other.setAttribute("aria-expanded", "false");
        document.getElementById(other.getAttribute("aria-controls")).hidden = true;
      });
      if (!open) {
        btn.setAttribute("aria-expanded", "true");
        document.getElementById(btn.getAttribute("aria-controls")).hidden = false;
      }
    });
  });
}
