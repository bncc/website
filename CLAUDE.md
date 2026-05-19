# website

Luca's personal homepage. A single HTML file (`index.html`) served as a pure static site on Cloudflare.

## Aesthetic — do not modernize

`index.html` is a deliberate early-web pastiche: Times New Roman, `<table>` layout, hit counter, "Now Playing", webring, guestbook, "under construction" marquee, beige paper texture. **This is on purpose.** Do not suggest Tailwind, React, semantic HTML cleanup, accessibility refactors, responsive breakpoints, or a static-site generator. If something feels jank, that is probably the point — confirm with Luca before touching the visual style.

## Hosting

- **Repo:** `bncc/website` on GitHub (public).
- **Host:** Cloudflare, deployed from Git as a **Worker with static assets** (not a classic Pages project — the URL is `*.workers.dev`, not `*.pages.dev`). Account subdomain: `luca-puccini`. Auto-deploys from `main`, no build step — the repo root is served as static files.
- **Domain:** `lucapuccini.eu` (Namecheap, `.eu` TLD).

Local preview (no install):

```
npx serve .
# → http://localhost:3000
```

Or just open `index.html` directly in a browser — there is no server-side code in phase 1.

## Planned next phase: persistence

The counter and guestbook are currently browser-memory only — they reset on every load. The plan is to add a small **Worker script + Cloudflare D1** (SQLite), all on the free tier:

- The Worker handles `/counter` and `/guestbook` (GET reads, POST writes) and falls through to static assets for everything else.
- Bind a D1 database to the Worker; tables: `counter`, `guestbook`.

The frontend JS in `index.html` will be swapped from in-memory arrays to `fetch("/counter")` / `fetch("/guestbook")` calls.

**Do not propose** Express, Node, Postgres, or a separate backend service for this. That path was considered and dropped in favor of staying entirely inside Cloudflare's free tier.

## What lives where

```
index.html      — the whole site (HTML + CSS + JS, all inline)
.gitignore      — .env, .DS_Store, miscellaneous junk
CLAUDE.md       — this file
```

No build step. No bundler. No framework. No server. Keep it that way.
