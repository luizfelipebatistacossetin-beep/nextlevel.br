// Anima os números da seção "Números" quando ficam visíveis.
export function initCounters() {
  const els = document.querySelectorAll("[data-count]");
  if (!els.length) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const fmt = new Intl.NumberFormat("pt-BR");

  const run = (el) => {
    const target = Number(el.dataset.count) || 0;
    if (reduce) {
      el.textContent = fmt.format(target);
      return;
    }
    const dur = 1400;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = fmt.format(Math.round(target * eased));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  if (!("IntersectionObserver" in window)) {
    els.forEach(run);
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          run(e.target);
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.5 }
  );
  els.forEach((el) => io.observe(el));
}
