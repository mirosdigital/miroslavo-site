# Miroslavo — Creative Brand Site

A custom Next.js site for [miroslavo.com](https://www.miroslavo.com) — contemporary art, design, and creative portfolio.

Built on the same foundation as [miros-digital](https://github.com/miroslavo/miros-digital): Next.js, Tailwind, next-intl, and shared UI patterns.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

If port 3000 is taken (e.g. miros-digital is running):

```bash
npm run dev -- -p 3001
```

## Project structure

```
app/[locale]/     → Pages (homepage for now)
components/       → Site sections + shared UI
lib/data/         → Static content (featured work, etc.)
messages/         → i18n copy
```

## Roadmap

- [x] Foundation + homepage
- [ ] About, portfolio, and art pages
- [ ] Contact form
- [ ] Czech & Spanish locales
- [ ] Shop or inquiry flow
