// Monta as seções repetitivas a partir de src/data/.
import { ICONS } from "../data/icons.js";
import { PAINS } from "../data/pains.js";
import { SERVICES } from "../data/services.js";
import { STEPS } from "../data/steps.js";
import { STATS } from "../data/stats.js";
import { TESTIMONIALS } from "../data/testimonials.js";
import { FAQ } from "../data/faq.js";

const HERO_TAGS = [
  { icon: "ia", nome: "Inteligência artificial" },
  { icon: "crm", nome: "CRM" },
  { icon: "gestao", nome: "Gestão" },
  { icon: "vendas", nome: "Vendas" },
  { icon: "estrategia", nome: "Estratégia" },
];

function fillList(selector, html) {
  const el = document.querySelector(selector);
  if (el) el.innerHTML = html;
}

export function renderContent() {
  fillList("#hero-tags", HERO_TAGS.map((t) => `<li><span class="tag-icon">${ICONS[t.icon]}</span>${t.nome}</li>`).join(""));

  fillList(
    "#lista-dores",
    PAINS.map(
      (p) => `<li class="pain">
        <span class="pain-icon">${ICONS[p.icon]}</span>
        <h3>${p.titulo}</h3>
        <p>${p.texto}</p>
      </li>`
    ).join("")
  );

  fillList(
    "#lista-servicos",
    SERVICES.map(
      (s) => `<li class="service">
        <span class="service-icon">${ICONS[s.icon]}</span>
        <h3>${s.titulo}</h3>
        <p>${s.texto}</p>
        <ul class="service-list">${s.entregas.map((e) => `<li>${e}</li>`).join("")}</ul>
      </li>`
    ).join("")
  );

  fillList(
    "#lista-etapas",
    STEPS.map(
      (s, i) => `<li class="step step-${i + 1}">
        <span class="step-num" aria-hidden="true">${String(i + 1).padStart(2, "0")}</span>
        <h3>${s.titulo}</h3>
        <p>${s.texto}</p>
      </li>`
    ).join("")
  );

  fillList(
    "#lista-numeros",
    STATS.map((s) => {
      const vazio = s.valor === null || s.valor === undefined || s.valor === "";
      const valor = vazio
        ? `<span class="stat-placeholder">[XX]${s.sufixo}</span>`
        : `${s.prefixo}<span data-count="${Number(s.valor)}">0</span>${s.sufixo}`;
      return `<li class="stat"><strong class="stat-value">${valor}</strong><span class="stat-label">${s.rotulo}</span></li>`;
    }).join("")
  );

  fillList(
    "#lista-depoimentos",
    TESTIMONIALS.map(
      (t) => `<li class="testimonial${t.exemplo ? " is-example" : ""}">
        ${t.exemplo ? '<span class="example-badge">Depoimento de exemplo</span>' : ""}
        <blockquote><p>${t.texto}</p></blockquote>
        <p class="testimonial-author"><strong>${t.nome}</strong><span>${t.empresa}</span></p>
      </li>`
    ).join("")
  );

  fillList(
    "#lista-faq",
    FAQ.map(
      (f, i) => `<div class="faq-item">
        <h3 class="faq-q">
          <button type="button" class="faq-btn" id="faq-q-${i}" aria-expanded="false" aria-controls="faq-a-${i}">
            <span>${f.pergunta}</span><span class="faq-icon" aria-hidden="true"></span>
          </button>
        </h3>
        <div class="faq-a" id="faq-a-${i}" role="region" aria-labelledby="faq-q-${i}" hidden>
          <p>${f.resposta}</p>
        </div>
      </div>`
    ).join("")
  );

  document.querySelectorAll("[data-icon]").forEach((el) => {
    el.innerHTML = ICONS[el.dataset.icon] || "";
  });
  document.querySelectorAll("[data-icon-link]").forEach((el) => {
    el.innerHTML = ICONS[el.dataset.iconLink] || "";
  });
}
