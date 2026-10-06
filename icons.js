// Ícones SVG inline (traço usa currentColor, então herdam a cor do texto).
const svg = (body) =>
  `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${body}</svg>`;

export const ICONS = {
  ia: svg('<rect x="4" y="7" width="16" height="12" rx="3"/><path d="M12 3v4M9 12h.01M15 12h.01M9.5 15.5h5M2 12v3M22 12v3"/>'),
  crm: svg('<rect x="3" y="4" width="5" height="16" rx="1.2"/><rect x="10" y="4" width="5" height="11" rx="1.2"/><rect x="17" y="4" width="4" height="7" rx="1.2"/>'),
  gestao: svg('<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>'),
  vendas: svg('<path d="M3 17l6-6 4 4 8-8"/><path d="M15 7h6v6"/>'),
  estrategia: svg('<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><path d="M12 12l7-7M16 5h3v3"/>'),
  marketing: svg('<path d="M4 10v4h3l6 4V6L7 10H4z"/><path d="M17 9a4 4 0 0 1 0 6M19.5 6.5a7.5 7.5 0 0 1 0 11"/>'),
  treino: svg('<circle cx="9" cy="7" r="3"/><path d="M3 20a6 6 0 0 1 12 0M16 11l2 2 4-4"/>'),
  sumiu: svg('<path d="M21 12a8.5 8.5 0 0 1-12.6 7.4L3 21l1.6-5.4A8.5 8.5 0 1 1 21 12z"/><path d="M9 12h6"/>'),
  dono: svg('<circle cx="12" cy="7" r="3.5"/><path d="M5 21a7 7 0 0 1 14 0"/><path d="M19 3l2 2M21 3l-2 2"/>'),
  dinheiro: svg('<rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2.5"/><path d="M6 10v4M18 10v4"/>'),
  dados: svg('<path d="M3 3v18h18"/><path d="M7 15h.01M11 11h.01M15 13h.01M19 7h.01"/>'),
  instagram: svg('<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/>'),
  whatsapp:
    '<svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" d="M3.6 20.4l1.2-4.2A8.6 8.6 0 1 1 8 19.3z"/><path fill="currentColor" d="M9.2 7.6c.3-.1.6 0 .7.3l.7 1.6c.1.3 0 .6-.2.8l-.6.6c.6 1.2 1.6 2.2 2.8 2.8l.6-.6c.2-.2.5-.3.8-.2l1.6.7c.3.1.4.4.3.7l-.3 1c-.2.6-.8 1-1.4.9-3.3-.4-5.9-3-6.3-6.3-.1-.6.3-1.2.9-1.4z"/></svg>',
};
