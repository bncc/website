# Luca Puccini — personal website

Two linked pages that share one content file:

| File | What it is |
|------|-----------|
| `index.html` | The modern site (dark graphite, navy accent). |
| `1996.html` | The "1996 edition" — a retro homepage. Linked from the modern site's footer easter egg, and links back. |
| `content.js` | **Single source of truth.** All text lives here — edit once, both pages update. |
| `variation-3.jsx` | The modern page's markup + styles (reads from `content.js`). |
| `variation-1.jsx` | The retro page's markup + styles (reads from `content.js`). |

---

## Editing content

Open **`content.js`** and edit the `window.SITE` object. Everything is there:
name, email, links, the hero line, stats, expertise, projects, references,
plus the retro-only bits (about, what's-new, posts, favorites, guestbook).

- Both pages read the same fields, so changing your email / projects / references
  once updates the modern site **and** the 1996 edition.
- In a few headline/body strings you'll see inline HTML like `<em>…</em>`,
  `<b>…</b>`, `<i>…</i>`, `<code>…</code>`. That's intentional and renders as
  formatting. Keep the tags balanced.

No build step is needed to edit — just save and refresh.

---

## Running locally

Because the pages load `.jsx` and `content.js` over `file://` can be blocked by
some browsers, serve the folder over HTTP:

```bash
cd personal-site
python3 -m http.server 8000
# then open http://localhost:8000
```

(Any static server works — `npx serve`, etc.)

---

## Deploying

These are plain static files. Drop the whole `personal-site/` folder into any
static host (GitHub Pages, Netlify, Vercel, Cloudflare Pages, S3, …) and point
the root at `index.html`. No server code, no database, no tracking.

### A note on the build (optional, for production)

The pages compile JSX **in the browser** via Babel standalone (loaded from a CDN).
That's simple and works anywhere, but it's slower on first paint and depends on
the CDN. For a production deploy you may want to precompile instead. A developer
(or Claude Code) can convert this to a tiny build step without changing the
design:

- Move `variation-1.jsx` / `variation-3.jsx` into a Vite (or similar) React app,
  keep `content.js` as the data module (`export const SITE = …`), and build to
  static HTML/JS.
- Or precompile the two `.jsx` files with Babel ahead of time and reference the
  compiled `.js`, dropping the in-browser Babel `<script>`.

Everything you need is here and self-contained — the design won't change, only
how the files are served.

---

## How the two pages link

- Modern → retro: the **last footer item** ("No analytics, no AI") is a disguised
  link. Hover reveals a ⌘ glyph; click goes to `1996.html`.
- Retro → modern: a visible banner at the very top ("1996 EDITION · Return to the
  current site") links back to `index.html`.
