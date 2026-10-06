// Preenche links de WhatsApp, dados de contato, ano e dados estruturados (SEO).
import { CONFIG, waLink, isPlaceholder, formatPhone } from "../config.js";
import { ICONS } from "../data/icons.js";

export function initLinks() {
  document.querySelectorAll("[data-wa]").forEach((a) => {
    a.href = waLink(a.dataset.wa || undefined);
    a.target = "_blank";
    a.rel = "noopener";
  });

  const set = (key, fn) => document.querySelectorAll(`[data-config="${key}"]`).forEach(fn);

  set("whatsapp-label", (a) => {
    a.textContent = isPlaceholder(CONFIG.whatsapp) ? CONFIG.whatsapp : formatPhone(CONFIG.whatsapp);
  });
  set("instagram", (a) => {
    a.textContent = isPlaceholder(CONFIG.instagram)
      ? CONFIG.instagram
      : "@" + CONFIG.instagram.replace(/\/$/, "").split("/").pop();
    if (!isPlaceholder(CONFIG.instagram)) a.href = CONFIG.instagram;
  });
  set("instagram-icon", (a) => {
    a.innerHTML = ICONS.instagram;
    if (!isPlaceholder(CONFIG.instagram)) a.href = CONFIG.instagram;
  });
  set("horario", (el) => (el.textContent = CONFIG.horario));
  set("mapa", (iframe) => {
    iframe.src = `https://www.google.com/maps?q=${encodeURIComponent(CONFIG.mapaBusca)}&output=embed`;
  });

  const ano = document.getElementById("ano");
  if (ano) ano.textContent = new Date().getFullYear();

  injectSchema();
}

function injectSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: CONFIG.nome,
    description: "Marketing, vendas, inteligência artificial, CRM, gestão comercial e estratégia para empresas.",
    url: CONFIG.siteUrl,
    image: `${CONFIG.siteUrl}/og-image.png`,
    logo: `${CONFIG.siteUrl}/logo-nextlevel.png`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Xinguara",
      addressRegion: "PA",
      addressCountry: "BR",
    },
    areaServed: [
      { "@type": "City", name: "Xinguara" },
      { "@type": "AdministrativeArea", name: "Sul e sudeste do Pará" },
    ],
    knowsAbout: ["Marketing digital", "Vendas", "Inteligência artificial", "CRM", "Gestão comercial", "Estratégia"],
  };
  if (!isPlaceholder(CONFIG.whatsapp)) data.telephone = "+" + String(CONFIG.whatsapp).replace(/\D/g, "");
  if (!isPlaceholder(CONFIG.instagram)) data.sameAs = [CONFIG.instagram];

  const tag = document.createElement("script");
  tag.type = "application/ld+json";
  tag.textContent = JSON.stringify(data);
  document.head.appendChild(tag);
}
