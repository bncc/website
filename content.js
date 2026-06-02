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
  locationShort: "Hamburg",
  email: "me@lucapuccini.eu",
  domain: "lucapuccini.eu",
  photo: null, // set to "img/profile.jpg" once you've dropped the picture in img/
  /* Contact / social links (shared) */
  links: [
    { label: "Email",    value: "me@lucapuccini.eu",           href: "mailto:me@lucapuccini.eu" },
    { label: "GitHub",   value: "github.com/bncc",             href: "https://github.com/bncc" },
    { label: "LinkedIn", value: "linkedin.com/in/luca-puccini", href: "https://linkedin.com/in/luca-puccini" },
    { label: "Signal",   value: "On request",                  href: null },
    { label: "Location", value: "Hamburg, DE · Open to remote", href: null },
  ],

  /* ════ MODERN SITE ════ */
  hero: {
    headline: "The teams I've seen do their best work all had the right <em>environment.</em> My job is to build it.",
    lede: "Engineering manager with a solid technical base. Ten years leading diverse, multicultural teams in Hamburg and remote — across e-commerce, digitalization, and media. Focused on people development and the conditions that let engineers do their best work.",
  },

  stats: [
    { n: "20",  label: "Years in engineering" },
    { n: "10",  label: "Years leading teams" },
    { n: "30+", label: "Engineers managed" },
    { n: "7",   label: "Parallel teams led" },
  ],

  /* Expertise — shown as tiles (modern) and summarised (retro about) */
  expertise: [
    {
      num: "A",
      title: "People development",
      body: "Developing individuals, hiring, performance, and growth. Clarity, honest feedback, and psychological safety aren't nice-to-haves — they're what makes delivery possible.",
      tags: ["1:1s", "Hiring", "Performance", "Growth", "Feedback"],
    },
    {
      num: "B",
      title: "Team leadership",
      body: "Building and running cross-functional teams across cultures — Hamburg, remote, hybrid. From 5 up to 35 engineers, across 7 parallel teams at peak. Focused on team health, structure, and delivery.",
      tags: ["Cross-functional", "Multicultural", "Hybrid", "Team health", "Delivery"],
    },
    {
      num: "C",
      title: "Technical strategy",
      body: "Translating product ambition into systems and organizations that can carry it. Roadmaps, technical direction, agile rollouts, vendor and partner decisions — and the brave 'no' that saves a quarter.",
      tags: ["Roadmaps", "Architecture", "Agile", "Vendors", "Org design"],
    },
    {
      num: "D",
      title: "Engineering background",
      body: "Started as a backend developer and grew through tech leadership. Full-stack platform work, CI/CD, Docker, observability, monolith-to-services migrations. The base that shapes how I lead today.",
      tags: ["Backend", "Full-stack", "CI/CD", "Docker", "Observability"],
    },
  ],

  /* Selected work / projects (shared — shown as cards on both) */
  projects: [
    {
      n: "01",
      year: "2026 — Now",
      role: "Engineering Manager",
      org: "Bitmovin",
      title: "Engineering Manager, VOD team",
      body: "Responsible for team health, people development, and delivery on the Video-on-Demand team.",
      metric: "VOD",
      metricLabel: "team focus",
    },
    {
      n: "02",
      year: "2022 — 2025",
      role: "Head of Engineering",
      org: "SDA SE Open Industry Solutions",
      title: "7 cross-functional teams, 20–35 engineers",
      body: "Led engineering across 7 flat, cross-functional teams building enterprise software for the insurance sector. Owned team structure, hiring, and delivery. Navigated significant organizational change while keeping teams focused and shipping.",
      metric: "7",
      metricLabel: "parallel teams",
    },
    {
      n: "03",
      year: "2019 — 2021",
      role: "Tech Leader",
      org: "E-Farm",
      title: "Built and scaled the platform, 2 → 10 engineers",
      body: "Grew the team and laid the foundations of a wider IT organization for the agricultural marketplace. Modernized the delivery stack — CI/CD, Docker, observability — and introduced agile from scratch. The core data system from that period is still in production today with minimal maintenance.",
      metric: "2 → 10",
      metricLabel: "team grown",
    },
    {
      n: "04",
      year: "2015 — 2019",
      role: "Team Leader → Senior SWE",
      org: "BorderGuru",
      title: "Monolith to distributed services",
      body: "Led a cross-functional team of 6 engineers through the migration of an unstable monolithic core into autonomous, scalable services. Raised test coverage to shrink dev and bugfix cycles, and removed legacy components that were blocking the system's evolution.",
      metric: "6",
      metricLabel: "engineers led",
    },
  ],

  /* References / testimonials (shared) */
  references: [
    {
      text: "— quote pending —",
      name: "Reference #1",
      role: "Manager",
      relation: "—",
    },
    {
      text: "— quote pending —",
      name: "Reference #2",
      role: "Peer",
      relation: "—",
    },
    {
      text: "— quote pending —",
      name: "Reference #3",
      role: "Report",
      relation: "—",
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
