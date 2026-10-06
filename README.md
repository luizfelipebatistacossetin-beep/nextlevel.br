# Next Level – site institucional

Site one-page da **Next Level** (Marketing & Vendas, IA, CRM, Gestão e Estratégia – Xinguara/PA), feito com **Vite + JavaScript puro**, sem framework e sem dependências além do próprio Vite.

## Como rodar

```bash
npm install
npm run dev      # servidor local em http://localhost:5173
npm run build    # gera a versão final em dist/
npm run preview  # testa a versão de dist/ localmente
```

Requer Node.js 18 ou superior.

## Onde editar o conteúdo

| O quê | Arquivo |
|---|---|
| WhatsApp, Instagram, horário de atendimento, domínio, busca do mapa | `src/config.js` |
| Cards "Sua empresa se reconhece aqui?" | `src/data/pains.js` |
| Serviços | `src/data/services.js` |
| Etapas do Método | `src/data/steps.js` |
| Números (contadores) | `src/data/stats.js` |
| Depoimentos | `src/data/testimonials.js` |
| Perguntas frequentes | `src/data/faq.js` |
| Ícones | `src/data/icons.js` |
| Textos fixos (hero, sobre, CTA) | `index.html` |
| Cores e fontes | `src/styles/tokens.css` |

## Antes de publicar

- [ ] Domínio: troque `[SEU-DOMINIO]` em `src/config.js` (`siteUrl`), `index.html` (canonical, Open Graph), `public/robots.txt` e `public/sitemap.xml`.

Contatos, números e depoimentos já estão preenchidos. Para mudar, edite `src/config.js`, `src/data/stats.js` e `src/data/testimonials.js`.

## Como funciona

- Seções repetitivas são montadas por `src/modules/render.js` a partir de `src/data/`.
- O formulário valida os campos no navegador e abre `wa.me` com a mensagem montada (não precisa de backend).
- Os dados estruturados de SEO local (JSON-LD `ProfessionalService`) são gerados a partir de `src/config.js`, então ficam sempre sincronizados com os contatos.
- Animações respeitam `prefers-reduced-motion`.

## Publicar

**Vercel:** importe o repositório, framework "Vite", comando `npm run build`, pasta de saída `dist`.
**Netlify:** comando de build `npm run build`, pasta de publicação `dist`.

Depois de publicar, aponte o domínio e atualize `siteUrl` e `[SEU-DOMINIO]`.

## Estrutura

```
next-level/
├── index.html
├── public/        favicon.svg, logo-mark.svg, logo-nextlevel.png, og-image.png, robots.txt, sitemap.xml
└── src/
    ├── main.js
    ├── config.js
    ├── data/      conteúdo editável
    ├── modules/   menu, header, reveal, counters, faq, form, links, render
    └── styles/    tokens, base, layout, components, sections
```
