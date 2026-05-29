/* ════════════════════════════════════════════════════════════════
   content.js — SINGLE SOURCE OF TRUTH for both sites.

   Both the modern site (index.html → variation-3.jsx) and the 1996
   edition (1996.html → variation-1.jsx) read everything from the
   SITE object below. Edit here once and both sites update.

   Anything wrapped in <em>…</em> in a headline renders as the
   italic accent colour on the modern site (ignored on the retro one).
   ════════════════════════════════════════════════════════════════ */

window.SITE = {
  /* ---- Identity (shared everywhere) ---- */
  name: "Luca Puccini",
  initials: "LP",
  roleShort: "Engineering Manager",
  location: "Hamburg, DE",
  locationShort: "Hamburg · CET",
  email: "me@lucapuccini.eu",
  domain: "lucapuccini.eu",
  availability: "Open for advisory · Q3 2026",

  /* Contact / social links (shared) */
  links: [
    { label: "Email",    value: "me@lucapuccini.eu",           href: "mailto:me@lucapuccini.eu" },
    { label: "GitHub",   value: "github.com/bncc",             href: "https://github.com/bncc" },
    { label: "LinkedIn", value: "linkedin.com/in/luca-puccini", href: "https://linkedin.com/in/luca-puccini" },
    { label: "Signal",   value: "On request",                  href: null },
    { label: "Location", value: "Berlin, DE · Open to remote", href: null },
  ],

  /* ════ MODERN SITE ════ */
  hero: {
    headline: "Engineering manager building <em>calm,</em> dependable platform teams.",
    lede: "I help engineering orgs ship faster without burning out — by fixing the boring middle of the system: deploys, observability, and the human protocols around them.",
  },

  stats: [
    { n: "12",  label: "Years in engineering" },
    { n: "6",   label: "Years leading teams" },
    { n: "40+", label: "Engineers managed" },
    { n: "3",   label: "0→1 platforms shipped" },
  ],

  /* Expertise — shown as tiles (modern) and summarised (retro about) */
  expertise: [
    {
      num: "A",
      title: "Platform engineering",
      body: "Deploys, CI/CD, observability, and the developer-experience layer. The infrastructure that makes every other team faster — when it works, nobody notices.",
      tags: ["Kubernetes", "Terraform", "Datadog", "GitHub Actions", "Postgres"],
    },
    {
      num: "B",
      title: "Engineering management",
      body: "Leading teams of 5–15. Hiring, structure, performance, and the meetings that actually move a roadmap. I optimize for trust first, throughput second — they compound.",
      tags: ["Hiring", "1:1s", "Roadmapping", "Performance", "Org design"],
    },
    {
      num: "C",
      title: "Technical strategy",
      body: "Translating product ambition into a system that can hold it. RFCs, migration plans, and the brave 'no' that saves a quarter.",
      tags: ["Architecture", "RFCs", "Migrations", "Cost", "Vendor calls"],
    },
    {
      num: "D",
      title: "Incident response",
      body: "Calm in the room when the graphs go red. Postmortems that change the system, not just fill a wiki. On-call rotations that don't burn people out.",
      tags: ["On-call", "SRE", "Postmortems", "Severity", "Runbooks"],
    },
  ],

  /* Selected work / projects (shared — shown as cards on both) */
  projects: [
    {
      n: "01",
      year: "2025 — Now",
      role: "Platform Lead",
      org: "Halftone Labs",
      title: "Rebuilt the deploy pipeline from scratch",
      body: "Cut median deploy time from 38 minutes to 6. Eliminated 80% of failed deploys through better preview environments and a stricter merge gate.",
      metric: "38 → 6 min",
      metricLabel: "median deploy",
    },
    {
      n: "02",
      year: "2024",
      role: "Engineering Manager",
      org: "Halftone Labs",
      title: "Scaled the platform team 3 → 9",
      body: "Hired, structured, and onboarded six engineers across two timezones. Maintained on-call sanity throughout. Zero regretted hires; zero attrition at twelve months.",
      metric: "0%",
      metricLabel: "attrition · 12mo",
    },
    {
      n: "03",
      year: "2023",
      role: "Tech Lead",
      org: "Forma Inc.",
      title: "Observability consolidation",
      body: "Replaced four overlapping logging and APM tools with a single coherent stack. Cut tool spend, halved alert noise, and improved median time-to-resolution fourfold.",
      metric: "4×",
      metricLabel: "faster MTTR",
    },
    {
      n: "04",
      year: "2022",
      role: "Senior Engineer",
      org: "Open Source",
      title: "dotmark — a markdown linter for engineering docs",
      body: "A small CLI tool that became the de-facto linter for internal docs across forty teams. Now used by a handful of companies in production.",
      metric: "1.2k ★",
      metricLabel: "GitHub stars",
    },
  ],

  /* References / testimonials (shared) */
  references: [
    {
      text: "Luca is the rare engineering leader who can hold the technical depth and the human picture at the same time. Our deploy infrastructure and our team morale both improved on his watch.",
      name: "Anya Sokolov",
      role: "VP Engineering, Halftone Labs",
      relation: "Manager · 2023 — present",
    },
    {
      text: "If I had to pick one EM I'd trust to walk into a chaotic team and leave it calmer in six months, it would be Luca. Every time, without hesitation.",
      name: "Marcus Chen",
      role: "CTO, Frame.io",
      relation: "Skip-level · 2024",
    },
    {
      text: "The clearest writer I've worked with in engineering. RFCs from his team are short, decided, and unambiguous — which is most of the job, frankly.",
      name: "Sofía Restrepo",
      role: "Director of Engineering, Stripe",
      relation: "Peer · 2021 — 2023",
    },
  ],

  /* ════ 1996 EDITION extras ════ */
  about: [
    "I'm an <b>engineering manager</b> by trade, which mostly means I write documents, ask questions, and try to keep the room calm when things are on fire. I've been doing this for about six years. Before that, I was a software engineer for about a decade. Before <i>that</i>, I was a teenager who spent too much time on Usenet. Some of that is clearly still visible here.",
    "I made this page because I remembered how fun the web used to be. There is no call-to-action, no newsletter, nothing to buy. It's just a page about me. Make yourself at home.",
  ],

  whatsNew: [
    { label: "Work",     text: "Leading a platform team of seven. We're rebuilding our deployment pipeline. It's going surprisingly well!" },
    { label: "Reading",  text: "<i>The Making of a Manager</i> — second time through. Different book on the second pass." },
    { label: "Cooking",  text: "On attempt #14 of making a proper focaccia. Still too salty. I will not be stopped." },
    { label: "Walking",  text: "10,000 steps a day. Nothing else, just that." },
    { label: "New Rule", text: "No meetings before 10am on Wednesdays. It is <b>life-changing</b>." },
  ],

  posts: [
    { num: "04", date: "04/12/2026", title: "On being the 'calm' in a calmer crisis", body: "A crisis room doesn't need more energy. It needs someone who's already been through one. Notes from a recent incident and what I learned (again) about pacing." },
    { num: "03", date: "03/28/2026", title: "Why I stopped running 1:1s as status updates", body: "For a long time I used 1:1s to sync on what people were working on. Then I stopped. Here's what happened, and the three questions I ask now instead." },
    { num: "02", date: "02/14/2026", title: "Writing a good weekly update (template inside)", body: "I write one every Friday. It's the single highest-leverage thing I do. Structure: what moved, what's stuck, what I need from you. That's it." },
    { num: "01", date: "01/03/2026", title: "The things I got wrong in my first year as an EM", body: "I over-indexed on process. I under-indexed on trust. I thought being liked and being effective were the same problem. They are not." },
  ],

  favorites: [
    { category: "book",    thing: "<i>High Output Management</i>",   why: "the manager's bible, still" },
    { category: "film",    thing: "<i>The Apartment</i> (1960)",     why: "perfect screenplay, perfect ending" },
    { category: "song",    thing: "<i>Avril 14th</i> — Aphex Twin",  why: "2 minutes of pure feeling" },
    { category: "food",    thing: "focaccia, eventually",            why: "attempt #14 pending" },
    { category: "city",    thing: "Berlin in september",            why: "exactly the right weather" },
    { category: "command", thing: "<code>git stash</code>",          why: "for when you need a minute" },
    { category: "editor",  thing: "vim, still",                      why: "muscle memory is forever" },
  ],

  guestbook: [
    { name: "Marco_1998",            date: "04/18/2026", msg: "cool page!! added to my bookmarks :) keep up the good work" },
    { name: "webmaster@geocities",   date: "04/15/2026", msg: "love the retro vibes. reminds me of the old days!!" },
    { name: "Anonymous",             date: "04/09/2026", msg: "first tyme visitor, long tyme lurker. nice site." },
    { name: "CoolDude42",            date: "03/28/2026", msg: "hey luca, found your page thru the engineering webring. great stuff!!" },
  ],

  nowPlaying: { artist: "Aphex Twin", album: "Selected Ambient Works 85-92" },
};
