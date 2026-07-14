# Import Portfolio Landing Page — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the `create-next-app` starter page with the existing `index.html` portfolio as the Next.js landing page.

**Architecture:** Three-file change — `layout.js` gets Inter/DM Mono fonts + updated metadata, `globals.css` gets the full portfolio stylesheet, `page.js` gets the HTML body converted to JSX. Two files deleted.

**Tech Stack:** Next.js 16.2.10, React 19.2.4, `next/font/google`

## Global Constraints

- All CSS from `index.html`'s `<style>` block moves verbatim into `globals.css`
- All HTML body content converts to JSX: `class` → `className`, self-closing tags (`<br>`, `<img>`) → `<br />`, `<img ... />`
- External links (`target="_blank"`) get `rel="noopener noreferrer"`
- No additional npm dependencies
- Build must succeed with `npm run build`

---

### Task 1: CSS & Layout (globals.css + layout.js)

**Files:**
- Modify: `src/app/layout.js` (entire file)
- Modify: `src/app/globals.css` (entire file)

- [ ] **Step 1: Replace `globals.css` with portfolio styles**

Replace entire content of `src/app/globals.css` with the CSS from `index.html` lines 11–435 (the `:root` block through the `@media` query).

Key changes from the original:
- Remove the `<style>` wrapper tags
- Keep everything else exactly as-is

- [ ] **Step 2: Update `layout.js` — swap fonts and metadata**

Replace `src/app/layout.js`:

```js
import { Inter, DM_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata = {
  title: "Smit Modi — Senior Shopify Developer",
  description:
    "10 years of agency-side Shopify work — custom themes, checkout extensions, platform migrations, and API integrations for international brands.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${dmMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
```

- [ ] **Step 3: Build to verify**

```bash
npm run build
```

Expected: Build succeeds with no errors. (Page will show the old content since `page.js` hasn't been updated yet, but layout + CSS should compile.)

- [ ] **Step 4: Commit**

```bash
git add src/app/layout.js src/app/globals.css
git commit -m "feat: swap to Inter/DM Mono fonts and portfolio CSS"
```

---

### Task 2: Page Content (page.js)

**Files:**
- Modify: `src/app/page.js` (entire file)

- [ ] **Step 1: Replace `page.js` with portfolio JSX**

Replace the entire content of `src/app/page.js` with the body content of `index.html` converted to JSX.

Conversion rules:
- `class="..."` → `className="..."`
- `<br>` → `<br />`
- `<a href="..." target="_blank">` → `<a href="..." target="_blank" rel="noopener noreferrer">`
- Remove Google Fonts `<link>` tags (fonts handled by `next/font/google` in layout)
- Remove the inline `<style>` block (now in `globals.css`)
- All other structure stays identical

Content to include:
- `<nav>` (lines 439–447)
- `<main>` (lines 449–766) containing all sections: `#hero`, `#work`, `#timeline`, `#stack`, `#contact`
- `<footer>` (lines 768–771)

- [ ] **Step 2: Build to verify**

```bash
npm run build
```

Expected: Build succeeds. Page renders the full portfolio.

- [ ] **Step 3: Commit**

```bash
git add src/app/page.js
git commit -m "feat: add portfolio page content"
```

---

### Task 3: Cleanup

**Files:**
- Delete: `src/app/page.module.css`
- Delete: `index.html`

- [ ] **Step 1: Delete unused files**

```bash
git rm src/app/page.module.css
git rm index.html
```

- [ ] **Step 2: Build to verify**

```bash
npm run build
```

Expected: Build succeeds with no warnings about missing modules.

- [ ] **Step 3: Commit**

```bash
git commit -m "chore: remove unused boilerplate files"
```
