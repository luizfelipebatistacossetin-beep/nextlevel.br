// Formulário de contato: valida no navegador e abre o WhatsApp com a mensagem pronta.
import { waLink } from "../config.js";

function setFieldError(input, message) {
  const err = document.getElementById(input.getAttribute("aria-describedby"));
  input.setAttribute("aria-invalid", message ? "true" : "false");
  if (err) err.textContent = message;
}

function validateContact(form) {
  const nome = form.elements.nome;
  const whats = form.elements.whatsapp;
  const seg = form.elements.segmento;
  const invalid = [];

  const nomeOk = nome.value.trim().length >= 2;
  setFieldError(nome, nomeOk ? "" : "Informe seu nome.");
  if (!nomeOk) invalid.push(nome);

  const digits = whats.value.replace(/\D/g, "").replace(/^55(?=\d{10,11}$)/, "");
  const whatsOk = digits.length === 10 || digits.length === 11;
  setFieldError(whats, whatsOk ? "" : "Informe o WhatsApp com DDD, ex.: (94) 9 0000-0000.");
  if (!whatsOk) invalid.push(whats);

  const segOk = seg.value !== "";
  setFieldError(seg, segOk ? "" : "Escolha o segmento da sua empresa.");
  if (!segOk) invalid.push(seg);

  return invalid;
}

export function initForm() {
  const form = document.getElementById("form-contato");
  if (!form) return;
  const status = document.getElementById("form-status");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const invalid = validateContact(form);
    if (invalid.length) {
      status.textContent = "Confira os campos destacados.";
      invalid[0].focus();
      return;
    }
    const f = form.elements;
    const linhas = [
      "Olá, Next Level! Vim pelo site.",
      "",
      `*Nome:* ${f.nome.value.trim()}`,
      f.empresa.value.trim() ? `*Empresa:* ${f.empresa.value.trim()}` : null,
      `*WhatsApp:* ${f.whatsapp.value.trim()}`,
      `*Segmento:* ${f.segmento.value}`,
      f.mensagem.value.trim() ? `*O que quero melhorar:* ${f.mensagem.value.trim()}` : null,
    ].filter((l) => l !== null);

    window.open(waLink(linhas.join("\n")), "_blank", "noopener");
    status.textContent = "Sua mensagem abriu no WhatsApp. Toque em enviar para concluir.";
  });

  // Limpa o erro assim que o campo é corrigido.
  form.addEventListener("input", (e) => {
    if (e.target.getAttribute("aria-invalid") === "true") setFieldError(e.target, "");
  });
}
