# SPC Pay

SPC Pay is a B2B payment enablement website for companies bringing payment devices, POS software, retail SaaS, and self-service systems into the Australian market.

The site is built with Astro, TypeScript, and Tailwind CSS. It is fully static and suitable for Cloudflare Pages deployment.

## Commands

| Command           | Purpose                             |
| ----------------- | ----------------------------------- |
| `npm run dev`     | Start local dev server              |
| `npm run build`   | Build static production output      |
| `npm run preview` | Preview the production build        |
| `npm run check`   | Run Astro, ESLint, and Prettier     |
| `npm run fix`     | Auto-fix ESLint and Prettier issues |

## Deployment

Use Cloudflare Pages with:

- Build command: `npm run build`
- Output directory: `dist`
- Node.js: `>=22.12.0`

## Notes

The contact form is static in this version. Wire the form action to your preferred backend, CRM, email route, or Cloudflare Pages Function when ready.
