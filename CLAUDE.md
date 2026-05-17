# website

Luca's personal homepage. Single HTML file (`index.html`) wrapped in a tiny Express server so it can be hosted on Railway.

## Aesthetic — do not modernize

`index.html` is a deliberate early-web pastiche: Times New Roman, `<table>` layout, hit counter, "Now Playing", webring, guestbook, "under construction" marquee, beige paper texture. **This is on purpose.** Do not suggest Tailwind, React, semantic HTML cleanup, accessibility refactors, responsive breakpoints, or a static-site generator. If something feels jank, that is probably the point — confirm with Luca before touching the visual style.

## Deployment

- **Repo:** `bncc/website` on GitHub (public).
- **Host:** Railway, auto-deploy from `main`.
- **Domain:** `lucapuccini.eu` (Namecheap, `.eu` TLD) points at the Railway service. Namecheap doesn't offer ALIAS on `.eu`, so the apex uses an A record to Railway's anycast IP; `www` is a CNAME.
- **Server:** `server.js` is Express. It serves the directory as static files and exposes `/healthz`. Listens on `process.env.PORT` (Railway sets this) or `3000` locally.

Local dev:

```
npm install
npm start
# → http://localhost:3000
```

## Planned next phase: persistence

The counter and guestbook in `index.html` are currently browser-memory only — they reset on every page load. The plan is to add a Railway Postgres service and extend `server.js` with four routes:

- `GET  /counter`   → `{ count: N }`
- `POST /counter`   → increments, returns new count
- `GET  /guestbook` → list of `{ name, message, at }`
- `POST /guestbook` → appends

The frontend JS in `index.html` will be swapped from in-memory arrays to `fetch` calls. **Express was chosen over a static-only server (`serve`) specifically to make this additive** — no rewrite needed when phase 2 lands. Don't re-litigate the storage choice (Postgres vs. JSON-on-volume vs. external KV) — that conversation already happened.

## What lives where

```
index.html      — the whole site (HTML + CSS + JS, all inline)
server.js       — Express, ~10 lines, serves the directory
package.json    — one dependency: express
.gitignore      — node_modules, .env
CLAUDE.md       — this file
```

No build step. No bundler. No framework. Keep it that way.
