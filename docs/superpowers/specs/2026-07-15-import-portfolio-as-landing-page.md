# Import `index.html` as Next.js Landing Page

## Goal

Replace the `create-next-app` starter page with the existing `index.html` portfolio — a single-page personal site for Smit Modi (Senior Shopify Developer) — while preserving the Next.js App Router layout wrapper.

## Design Decisions

- **Merge layouts**: Keep `layout.js` as the root wrapper; replace its content to match the portfolio.
- **Fonts**: Replace `next/font/google` Geist/Geist Mono with Inter (body) and DM Mono (code/accents).
- **No component splitting**: All sections stay inline in `page.js` (single-page portfolio, no other pages planned).
- **CSS**: Move the inline `<style>` block from `index.html` into `globals.css` (replaces existing content).
- **Metadata**: Update `layout.js` metadata to "Smit Modi — Senior Shopify Developer".

## Files Changed

| File | Action |
|------|--------|
| `src/app/layout.js` | Replace Geist → Inter + DM Mono via `next/font/google`. Update metadata. Keep `<html>`/`<body>` structure. |
| `src/app/globals.css` | Replace with full CSS from `index.html`'s `<style>` block. |
| `src/app/page.js` | Replace boilerplate JSX with portfolio sections (nav, hero, work grid, timeline, stack table, contact, footer). |
| `src/app/page.module.css` | Delete (unused after replacement). |
| `index.html` | Delete (source material, no longer needed). |

## Page Structure (in `page.js`)

- `<nav>` — logo `.nav-logo`, links `.nav-links` (Work, Experience, Stack, Contact)
- `<main>` containing:
  - `#hero` — tagline, h1, subtitle, stat bar, action buttons
  - `#work.section` — `.work-grid` with 6 `.work-card` items
  - `#timeline.section` — `.timeline` with 7 `.timeline-item` entries
  - `#stack.section` — `.stack-table` with 5 `.stack-row` (Shopify, Frontend, APIs, Themes, Tooling)
  - `#contact` — `.contact-grid` with copy + `.contact-links`
- `<footer>` — copyright + tagline

## Conventions

- `class` → `className`
- Self-closing tags → `<br />`, `<img ... />`
- External links → `target="_blank" rel="noopener noreferrer"`
- CSS variables remain unchanged (`:root` vars in `globals.css`)
- No additional dependencies

## Out of Scope

- Adding new pages/routes
- Converting sections to separate components
- Migrating to TypeScript
- Changing the design or content
