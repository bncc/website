# website

Luca's personal homepage. **Two-page** site at `lucapuccini.eu`:

- `index.html` — the **modern** site (dark graphite + navy accent, JetBrains Mono / Newsreader). This is what visitors see by default.
- `1996.html` — the **retro 1996 edition** (the original early-web pastiche). Linked from the modern page's footer easter egg; links back via a visible top banner.

Both pages read all their text from a single shared file (`content.js`), so editing once updates both. See `README.md` for the design rationale and editing notes.

## Single source of truth: `content.js`

`content.js` exposes a global `window.SITE` object. **All copy lives here** — name, email, links, hero text, stats, expertise, projects, references, plus the retro-only sections (about, what's-new, posts, favorites, guestbook, nowPlaying).

Both `index.html` and `1996.html` load `content.js` first, then their respective JSX file (`variation-3.jsx` for modern, `variation-1.jsx` for retro). Changing a field in `content.js` updates both pages with no rebuild.

Headlines may contain inline `<em>`, `<b>`, `<i>`, `<code>` — intentional, renders as accent formatting on the modern site, plain on the retro. Keep tags balanced.

## Aesthetic — do not modernize the retro page

`1996.html` / `variation-1.jsx` are a deliberate early-web pastiche: Times New Roman, `<table>` layout, hit counter, "Now Playing", webring, guestbook, marquee, beige paper texture. **On purpose.** Don't propose semantic cleanup, accessibility refactors, responsive breakpoints, or a static-site generator *for the retro page*. The modern page is the place for normal modern-web practices.

## Hosting

- **Repo:** `bncc/website` on GitHub (public).
- **Host:** Cloudflare, deployed from Git as a **Worker with static assets** (URL is `website.luca-puccini.workers.dev`, custom domain `lucapuccini.eu`). Account subdomain: `luca-puccini`. Auto-deploys from `main`, no build step.
- **Runtime:** Both pages load React 18 + Babel standalone from `unpkg.com` and transpile JSX in the browser. Simple, no build pipeline, but CDN-dependent and slightly slower first paint. README outlines a precompile path (Vite or ahead-of-time Babel) if needed later.
- **Email:** `me@lucapuccini.eu` via **Cloudflare Email Routing** (forwards to Luca's Gmail). MX = `route1/2/3.mx.cloudflare.net`.

Local preview:

```
python3 -m http.server 8000
# open http://localhost:8000 (modern) or http://localhost:8000/1996.html (retro)
```

`file://` blocks the JSX loads in some browsers; serve over HTTP.

## Planned next phase: persistence

The retro page's hit counter and guestbook are still browser-memory only — they reset on every load. Plan: small **Worker script + Cloudflare D1** (SQLite, free tier):

- The Worker handles `/counter` and `/guestbook` (GET reads, POST writes) and falls through to static assets for everything else.
- Bind a D1 database to the Worker; tables: `counter`, `guestbook`.

The retro page's JS will be swapped from in-memory arrays to `fetch("/counter")` / `fetch("/guestbook")` calls.

**Do not propose** Express, Node, Postgres, or a separate backend service for this. That path was considered and dropped in favor of staying entirely inside Cloudflare's free tier.

## What lives where

```
index.html        — modern site shell, loads content.js + variation-3.jsx
1996.html         — retro site shell, loads content.js + variation-1.jsx
content.js        — single source of truth: window.SITE object with all copy
variation-3.jsx   — modern markup + styles (reads window.SITE)
variation-1.jsx   — retro markup + styles (reads window.SITE)
README.md         — public project doc (architecture, editing, deploy notes)
.gitignore        — node_modules, .env, .DS_Store
CLAUDE.md         — this file
```

No build step. Keep it that way.
