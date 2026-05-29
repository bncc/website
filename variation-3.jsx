// Variation 3 — Modern personal website with vintage hints
//
// Brief from user:
//   - Modern personal site (not a blog)
//   - Holds contacts + references
//   - States what they're expert in
//   - A little vintage, but not the main thing
//
// System:
//   - Bone-cream background, near-black ink, single accent
//   - Newsreader (serif) for display, JetBrains Mono for labels/numerals
//   - Section numbers (§ 01), mono kickers, small caps — vintage hints
//   - Modern grid: hero · expertise · selected work · references · contact

function Variation3({ onWarp, retroHref }) {
  const C = window.SITE;
  return (
    <div className="m3-page">
      <style>{m3_css}</style>

      {/* ──────────── NAV ──────────── */}
      <nav className="m3-nav">
        <a href="#top" className="m3-mark">
          <span className="m3-mark-glyph">{C.initials}</span>
          <span className="m3-mark-name">{C.name}</span>
        </a>
        <div className="m3-nav-links">
          <a href="#expertise">Expertise</a>
          <a href="#work">Work</a>
          <a href="#references">References</a>
          <a href="#contact">Contact</a>
        </div>
        <a href={"mailto:" + C.email} className="m3-nav-cta">
          {C.email}
          <span className="m3-nav-cta-arr">↗</span>
        </a>
      </nav>

      <main className="m3-main" id="top">

        {/* ──────────── HERO ──────────── */}
        <section className="m3-hero">
          <div className="m3-availability">
            <span className="m3-dot" />
            <span>{C.availability}</span>
            <span className="m3-availability-sep">/</span>
            <span>{C.locationShort}</span>
          </div>

          <h1 className="m3-h1" dangerouslySetInnerHTML={{ __html: C.hero.headline }} />

          <p className="m3-lede">{C.hero.lede}</p>

          <div className="m3-hero-actions">
            <a href="#work" className="m3-btn">
              See selected work
              <span className="m3-btn-arr">→</span>
            </a>
            <a href={"mailto:" + C.email} className="m3-btn m3-btn-ghost">
              Get in touch
            </a>
          </div>

          <div className="m3-hero-stats">
            {C.stats.map((s, i) => <Stat key={i} n={s.n} label={s.label} />)}
          </div>
        </section>

        {/* ──────────── EXPERTISE ──────────── */}
        <Sec id="expertise" num="01" label="Expertise">
          <div className="m3-sec-grid">
            <h2 className="m3-h2">What I'm <em>good at.</em></h2>
            <p className="m3-sec-blurb">
              Twelve years of doing this gives you a shape. Mine is here — the work I take on, and the work I send elsewhere.
            </p>
          </div>

          <div className="m3-skills">
            {C.expertise.map((s, i) => (
              <Skill key={i} num={s.num} title={s.title} body={s.body} tags={s.tags} />
            ))}
          </div>
        </Sec>

        {/* ──────────── SELECTED WORK ──────────── */}
        <Sec id="work" num="02" label="Selected Work">
          <div className="m3-sec-grid">
            <h2 className="m3-h2">Things I've <em>shipped.</em></h2>
            <p className="m3-sec-blurb">
              A short selection of the work I'm most proud of. Full résumé on request — most of what matters is here.
            </p>
          </div>

          <div className="m3-projects">
            {C.projects.map((p, i) => (
              <Project key={i} n={p.n} year={p.year} role={p.role} org={p.org}
                title={p.title} body={p.body} metric={p.metric} metricLabel={p.metricLabel} />
            ))}
          </div>
        </Sec>

        {/* ──────────── REFERENCES ──────────── */}
        <Sec id="references" num="03" label="References">
          <div className="m3-sec-grid">
            <h2 className="m3-h2">What people <em>say.</em></h2>
            <p className="m3-sec-blurb">
              Published with permission. Direct introductions available on request — I keep an active list of references for any role I'm considered for.
            </p>
          </div>

          <div className="m3-quotes">
            {C.references.map((q, i) => (
              <Quote key={i} text={q.text} name={q.name} role={q.role} relation={q.relation} />
            ))}
          </div>

          <p className="m3-ref-foot">
            For a longer list of references, including peers and direct reports, please <a href={"mailto:" + C.email} className="m3-inline-link">reach out by email</a>.
          </p>
        </Sec>

        {/* ──────────── CONTACT ──────────── */}
        <Sec id="contact" num="04" label="Contact">
          <div className="m3-contact">
            <div className="m3-contact-left">
              <h2 className="m3-h2">Let's <em>talk.</em></h2>
              <p className="m3-contact-blurb">
                Email is best — I read everything, and reply to most things within a week. I'm currently open to advisory work, fractional engineering leadership, and the occasional speaking engagement.
              </p>
              <a href={"mailto:" + C.email} className="m3-btn m3-btn-large">
                {C.email}
                <span className="m3-btn-arr">↗</span>
              </a>
            </div>

            <dl className="m3-contact-list">
              {C.links.map((l, i) => (
                <ContactRow key={i} label={l.label} value={l.value} href={l.href} />
              ))}
            </dl>
          </div>
        </Sec>

      </main>

      {/* ──────────── FOOTER ──────────── */}
      <footer className="m3-foot">
        <div className="m3-foot-inner">
          <div className="m3-foot-mark">
            <span className="m3-foot-glyph">{C.initials}</span>
            <span>{C.name}</span>
          </div>
          <div className="m3-foot-meta">
            <span>© MMXXVI</span>
            <span className="m3-foot-sep">·</span>
            <span>Made in Berlin</span>
            <span className="m3-foot-sep">·</span>
            {retroHref ? (
              <a
                href={retroHref}
                className="m3-foot-egg"
                title="est. 1996"
                aria-label="View the 1996 edition of this site"
              >
                No analytics, no AI
                <span className="m3-foot-egg-glyph">⌘</span>
              </a>
            ) : (
              <button
                type="button"
                className="m3-foot-egg"
                onClick={onWarp}
                title="est. 1996"
                aria-label="View the 1996 edition of this site"
              >
                No analytics, no AI
                <span className="m3-foot-egg-glyph">⌘</span>
              </button>
            )}
          </div>
          <a href="#top" className="m3-foot-top">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────
function Sec({ id, num, label, children }) {
  return (
    <section id={id} className="m3-section">
      <div className="m3-sec-head">
        <span className="m3-sec-num">§ {num}</span>
        <span className="m3-sec-label">{label}</span>
        <span className="m3-sec-rule" />
      </div>
      {children}
    </section>
  );
}

function Stat({ n, label }) {
  return (
    <div className="m3-stat">
      <div className="m3-stat-n">{n}</div>
      <div className="m3-stat-label">{label}</div>
    </div>
  );
}

function Skill({ num, title, body, tags }) {
  return (
    <div className="m3-skill">
      <div className="m3-skill-head">
        <span className="m3-skill-num">{num}</span>
        <h3 className="m3-skill-title">{title}</h3>
      </div>
      <p className="m3-skill-body">{body}</p>
      <div className="m3-skill-tags">
        {tags.map(t => <span key={t} className="m3-tag">{t}</span>)}
      </div>
    </div>
  );
}

function Project({ n, year, role, org, title, body, metric, metricLabel }) {
  return (
    <a href="#" className="m3-project">
      <div className="m3-project-meta">
        <span className="m3-project-n">№ {n}</span>
        <span className="m3-project-year">{year}</span>
      </div>
      <div className="m3-project-body">
        <div className="m3-project-role">{role} · {org}</div>
        <h3 className="m3-project-title">{title}</h3>
        <p className="m3-project-text">{body}</p>
        <span className="m3-project-arrow">Read case study →</span>
      </div>
      <div className="m3-project-metric">
        <div className="m3-metric-n">{metric}</div>
        <div className="m3-metric-label">{metricLabel}</div>
      </div>
    </a>
  );
}

function Quote({ text, name, role, relation }) {
  return (
    <figure className="m3-quote">
      <div className="m3-quote-mark">“</div>
      <blockquote className="m3-quote-text">{text}</blockquote>
      <figcaption className="m3-quote-cap">
        <div className="m3-quote-name">{name}</div>
        <div className="m3-quote-role">{role}</div>
        <div className="m3-quote-rel">{relation}</div>
      </figcaption>
    </figure>
  );
}

function ContactRow({ label, value, href }) {
  return (
    <div className="m3-contact-row">
      <dt>{label}</dt>
      <dd>
        {href ? <a href={href}>{value}</a> : <span>{value}</span>}
      </dd>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────
const m3_css = `
:root {
  --m3-bg: #f1ece1;
  --m3-bg-2: #e9e2d2;
  --m3-card: #f6f2e8;
  --m3-ink: #1c1a14;
  --m3-ink-2: #4a4536;
  --m3-ink-3: #8a8472;
  --m3-rule: #c8bfa6;
  --m3-rule-soft: #d8d0b8;
  --m3-accent: var(--accent-v2-accent, #2a4a6a);
  --m3-accent-soft: color-mix(in oklab, var(--m3-accent) 12%, var(--m3-bg));
}

.m3-page {
  background: var(--m3-bg);
  color: var(--m3-ink);
  font-family: "Newsreader", "Cormorant Garamond", Georgia, serif;
  font-size: 17px;
  line-height: 1.55;
  min-height: 100%;
  --mono: "JetBrains Mono", "IBM Plex Mono", ui-monospace, Menlo, monospace;
  background-image:
    radial-gradient(circle at 0% 0%, rgba(60, 50, 30, 0.04), transparent 40%),
    radial-gradient(circle at 100% 100%, rgba(60, 50, 30, 0.05), transparent 50%);
}

/* ════════════ DARK MODE ════════════
   Aged-paper-by-lamplight: warm deep espresso, not flat black.
   Activated via body[data-mode="dark"] from the Tweaks panel. */
body[data-mode="dark"] .m3-page {
  --m3-bg: #131009;
  --m3-bg-2: #1b1610;
  --m3-card: #1d1812;
  --m3-ink: #ede4cb;
  --m3-ink-2: #b8ac8b;
  --m3-ink-3: #7c7359;
  --m3-rule: #3a3324;
  --m3-rule-soft: #2a2416;
  --m3-accent-soft: color-mix(in oklab, var(--m3-accent) 22%, var(--m3-bg));
  background-image:
    radial-gradient(circle at 0% 0%, rgba(200, 170, 110, 0.05), transparent 45%),
    radial-gradient(circle at 100% 100%, rgba(200, 170, 110, 0.04), transparent 55%);
}
/* Brighten the navy accent so it actually reads on dark paper */
body[data-mode="dark"] .m3-page {
  --m3-accent-lit: color-mix(in oklab, var(--m3-accent) 50%, #ede4cb);
}

/* ── Dark TINT variants (cooler, less brown) ──
   Set body[data-tint="..."]; default (unset) stays espresso. */

/* Slate — cool blue-gray, soft and calm */
body[data-mode="dark"][data-tint="__slate_removed"] .m3-page {
  --m3-bg: #11151b;
  --m3-bg-2: #161b23;
  --m3-card: #181e27;
  --m3-ink: #e6ebf2;
  --m3-ink-2: #9aa6b6;
  --m3-ink-3: #5f6b7a;
  --m3-rule: #2c343f;
  --m3-rule-soft: #20262f;
  --m3-accent-lit: color-mix(in oklab, var(--m3-accent) 45%, #e6ebf2);
  background-image:
    radial-gradient(circle at 0% 0%, rgba(120, 160, 210, 0.05), transparent 45%),
    radial-gradient(circle at 100% 100%, rgba(120, 160, 210, 0.04), transparent 55%);
}
body[data-mode="dark"][data-tint="slate"] .m3-tag { background: #10151c; }

/* Graphite — warm-leaning charcoal, faint mushroom cast */
body[data-mode="dark"][data-tint="graphite"] .m3-page {
  --m3-bg: #15130f;
  --m3-bg-2: #1c1915;
  --m3-card: #1f1c17;
  --m3-ink: #efece5;
  --m3-ink-2: #aaa49a;
  --m3-ink-3: #6e6a61;
  --m3-rule: #38342d;
  --m3-rule-soft: #28251f;
  --m3-accent-lit: color-mix(in oklab, var(--m3-accent) 48%, #efece5);
  background-image:
    radial-gradient(circle at 0% 0%, rgba(235, 215, 180, 0.03), transparent 45%),
    radial-gradient(circle at 100% 100%, rgba(235, 215, 180, 0.025), transparent 55%);
}
body[data-mode="dark"][data-tint="graphite"] .m3-tag { background: #131210; }

/* Midnight — deep ink-navy, richer and moodier */
body[data-mode="dark"][data-tint="midnight"] .m3-page {
  --m3-bg: #0b1018;
  --m3-bg-2: #101725;
  --m3-card: #121a2a;
  --m3-ink: #e4eaf4;
  --m3-ink-2: #96a3bd;
  --m3-ink-3: #5a6783;
  --m3-rule: #283449;
  --m3-rule-soft: #1c2638;
  --m3-accent-lit: color-mix(in oklab, var(--m3-accent) 42%, #e4eaf4);
  background-image:
    radial-gradient(circle at 0% 0%, rgba(90, 130, 210, 0.07), transparent 48%),
    radial-gradient(circle at 100% 100%, rgba(90, 130, 210, 0.05), transparent 55%);
}
body[data-mode="dark"][data-tint="midnight"] .m3-tag { background: #0a0f18; }
body[data-mode="dark"] .m3-page em,
body[data-mode="dark"] .m3-quote-mark,
body[data-mode="dark"] .m3-metric-n,
body[data-mode="dark"] .m3-skill-num,
body[data-mode="dark"] .m3-sec-num,
body[data-mode="dark"] .m3-project-n,
body[data-mode="dark"] .m3-inline-link {
  color: var(--m3-accent-lit);
}

/* Inverted chips/buttons need their fills flipped so cream sits on dark */
body[data-mode="dark"] .m3-mark-glyph,
body[data-mode="dark"] .m3-foot-glyph {
  background: var(--m3-ink);
  color: var(--m3-bg);
}
body[data-mode="dark"] .m3-nav-cta,
body[data-mode="dark"] .m3-btn {
  background: var(--m3-ink);
  color: var(--m3-bg);
  border-color: var(--m3-ink);
}
body[data-mode="dark"] .m3-nav-cta:hover,
body[data-mode="dark"] .m3-btn:hover {
  background: var(--m3-accent-lit);
  border-color: var(--m3-accent-lit);
  color: var(--m3-bg);
}
body[data-mode="dark"] .m3-btn-ghost {
  background: transparent;
  color: var(--m3-ink);
}
body[data-mode="dark"] .m3-btn-ghost:hover {
  background: var(--m3-ink);
  color: var(--m3-bg);
  border-color: var(--m3-ink);
}
body[data-mode="dark"] .m3-tag {
  background: #15110a;
  border-color: var(--m3-rule);
  color: var(--m3-ink-2);
}
body[data-mode="dark"] .m3-nav-links a::after {
  background: var(--m3-accent-lit);
}
body[data-mode="dark"] .m3-project:hover {
  background: linear-gradient(90deg, var(--m3-accent-soft), transparent 70%);
}
body[data-mode="dark"] .m3-project:hover .m3-project-arrow,
body[data-mode="dark"] .m3-contact-row dd a:hover,
body[data-mode="dark"] .m3-foot-top:hover {
  color: var(--m3-accent-lit);
  border-color: var(--m3-accent-lit);
}
body[data-mode="dark"] .m3-quote:hover {
  border-color: var(--m3-accent-lit);
}

.m3-page em {
  font-style: italic;
  font-family: "Newsreader", Georgia, serif;
  color: var(--m3-accent);
  font-weight: 500;
}

/* ════════════ NAV ════════════ */
.m3-nav {
  position: sticky;
  top: 0;
  z-index: 40;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 32px;
  padding: 18px 56px;
  background: color-mix(in oklab, var(--m3-bg) 88%, transparent);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--m3-rule);
}

.m3-mark {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--m3-ink);
  text-decoration: none;
}
.m3-mark-glyph {
  display: inline-grid;
  place-items: center;
  width: 32px;
  height: 32px;
  background: var(--m3-ink);
  color: var(--m3-bg);
  font-family: var(--mono);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.5px;
}
.m3-mark-name {
  font-family: "Newsreader", serif;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.1px;
}

.m3-nav-links {
  justify-self: center;
  display: flex;
  gap: 28px;
}
.m3-nav-links a {
  font-family: var(--mono);
  font-size: 12px;
  letter-spacing: 0.4px;
  color: var(--m3-ink-2);
  text-decoration: none;
  padding: 6px 0;
  position: relative;
  transition: color .15s;
}
.m3-nav-links a::after {
  content: "";
  position: absolute;
  left: 0; right: 100%;
  bottom: 2px;
  height: 1px;
  background: var(--m3-accent);
  transition: right .2s ease;
}
.m3-nav-links a:hover { color: var(--m3-ink); }
.m3-nav-links a:hover::after { right: 0; }

.m3-nav-cta {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  background: var(--m3-ink);
  color: var(--m3-bg);
  text-decoration: none;
  font-family: var(--mono);
  font-size: 12px;
  letter-spacing: 0.3px;
  border: 1px solid var(--m3-ink);
  transition: background .15s, color .15s, transform .15s;
}
.m3-nav-cta:hover { background: var(--m3-accent); border-color: var(--m3-accent); transform: translateY(-1px); }
.m3-nav-cta-arr { transition: transform .15s; }
.m3-nav-cta:hover .m3-nav-cta-arr { transform: translate(2px, -2px); }

/* ════════════ LAYOUT ════════════ */
.m3-main {
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 56px;
}

/* ════════════ HERO ════════════ */
.m3-hero {
  padding: 96px 0 80px;
  border-bottom: 1px solid var(--m3-rule-soft);
}
.m3-availability {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 6px 14px;
  border: 1px solid var(--m3-rule);
  background: var(--m3-card);
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.5px;
  color: var(--m3-ink-2);
  text-transform: uppercase;
  margin-bottom: 40px;
}
.m3-availability-sep { color: var(--m3-rule); }
.m3-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #4a8a4a;
  box-shadow: 0 0 0 3px rgba(74,138,74,0.18);
  animation: m3-pulse 2.4s ease-in-out infinite;
}
@keyframes m3-pulse { 50% { opacity: 0.45; } }

.m3-h1 {
  font-family: "Newsreader", serif;
  font-weight: 500;
  font-size: 76px;
  line-height: 1.02;
  letter-spacing: -2.2px;
  margin: 0 0 32px;
  max-width: 14ch;
}

.m3-lede {
  font-family: "Newsreader", serif;
  font-size: 22px;
  line-height: 1.45;
  color: var(--m3-ink-2);
  max-width: 56ch;
  margin: 0 0 40px;
  letter-spacing: -0.2px;
}

.m3-hero-actions {
  display: flex;
  gap: 12px;
  margin-bottom: 72px;
}

.m3-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 20px;
  background: var(--m3-ink);
  color: var(--m3-bg);
  text-decoration: none;
  font-family: var(--mono);
  font-size: 13px;
  letter-spacing: 0.3px;
  border: 1px solid var(--m3-ink);
  transition: background .15s, color .15s, transform .15s, border-color .15s;
}
.m3-btn-arr { transition: transform .18s; }
.m3-btn:hover { background: var(--m3-accent); border-color: var(--m3-accent); }
.m3-btn:hover .m3-btn-arr { transform: translateX(3px); }

.m3-btn-ghost {
  background: transparent;
  color: var(--m3-ink);
}
.m3-btn-ghost:hover {
  background: var(--m3-ink);
  color: var(--m3-bg);
  border-color: var(--m3-ink);
}

.m3-btn-large {
  padding: 16px 24px;
  font-size: 14px;
}

.m3-hero-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  padding-top: 32px;
  border-top: 1px solid var(--m3-rule-soft);
}
.m3-stat-n {
  font-family: "Newsreader", serif;
  font-size: 44px;
  font-weight: 500;
  letter-spacing: -1.5px;
  line-height: 1;
  color: var(--m3-ink);
  margin-bottom: 8px;
}
.m3-stat-label {
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: var(--m3-ink-3);
}

/* ════════════ SECTION ════════════ */
.m3-section {
  padding: 88px 0;
  border-bottom: 1px solid var(--m3-rule-soft);
  scroll-margin-top: 80px;
}
.m3-sec-head {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 56px;
}
.m3-sec-num {
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 1px;
  color: var(--m3-accent);
  text-transform: uppercase;
}
.m3-sec-label {
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 1.5px;
  color: var(--m3-ink-3);
  text-transform: uppercase;
}
.m3-sec-rule {
  flex: 1;
  height: 1px;
  background: var(--m3-rule);
}

.m3-sec-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 48px;
  align-items: end;
  margin-bottom: 56px;
}
.m3-sec-blurb {
  font-family: "Newsreader", serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--m3-ink-2);
  margin: 0;
  padding-bottom: 8px;
  max-width: 42ch;
}

.m3-h2 {
  font-family: "Newsreader", serif;
  font-weight: 500;
  font-size: 56px;
  line-height: 1.05;
  letter-spacing: -1.5px;
  margin: 0;
  color: var(--m3-ink);
}

/* ════════════ EXPERTISE ════════════ */
.m3-skills {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1px;
  background: var(--m3-rule-soft);
  border: 1px solid var(--m3-rule-soft);
}
.m3-skill {
  background: var(--m3-card);
  padding: 36px 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: background .2s;
}
.m3-skill:hover { background: var(--m3-bg); }
.m3-skill-head {
  display: flex;
  align-items: baseline;
  gap: 14px;
}
.m3-skill-num {
  font-family: var(--mono);
  font-size: 12px;
  letter-spacing: 1px;
  color: var(--m3-accent);
}
.m3-skill-title {
  font-family: "Newsreader", serif;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: -0.5px;
  margin: 0;
  line-height: 1.2;
}
.m3-skill-body {
  font-family: "Newsreader", serif;
  font-size: 15.5px;
  line-height: 1.55;
  color: var(--m3-ink-2);
  margin: 0;
  flex: 1;
}
.m3-skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding-top: 12px;
  border-top: 1px dashed var(--m3-rule);
}
.m3-tag {
  font-family: var(--mono);
  font-size: 10.5px;
  letter-spacing: 0.4px;
  color: var(--m3-ink-2);
  padding: 4px 8px;
  background: var(--m3-bg-2);
  border: 1px solid var(--m3-rule-soft);
}

/* ════════════ PROJECTS ════════════ */
.m3-projects {
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--m3-rule);
}
.m3-project {
  display: grid;
  grid-template-columns: 140px 1fr 140px;
  gap: 32px;
  padding: 32px 0;
  border-bottom: 1px solid var(--m3-rule);
  text-decoration: none;
  color: inherit;
  transition: background .15s, padding .15s;
  align-items: start;
}
.m3-project:hover {
  background: linear-gradient(90deg, var(--m3-accent-soft), transparent 70%);
  padding-left: 16px;
  padding-right: 16px;
}
.m3-project:hover .m3-project-arrow {
  color: var(--m3-accent);
  transform: translateX(4px);
}

.m3-project-meta {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding-top: 6px;
}
.m3-project-n {
  font-family: var(--mono);
  font-size: 12px;
  letter-spacing: 1px;
  color: var(--m3-accent);
  font-weight: 600;
}
.m3-project-year {
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.4px;
  color: var(--m3-ink-3);
}

.m3-project-body { display: flex; flex-direction: column; gap: 10px; }
.m3-project-role {
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  color: var(--m3-ink-3);
}
.m3-project-title {
  font-family: "Newsreader", serif;
  font-size: 26px;
  font-weight: 500;
  letter-spacing: -0.5px;
  line-height: 1.2;
  margin: 0;
  color: var(--m3-ink);
}
.m3-project-text {
  font-family: "Newsreader", serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--m3-ink-2);
  margin: 0;
  max-width: 60ch;
}
.m3-project-arrow {
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  color: var(--m3-ink-3);
  margin-top: 6px;
  transition: color .15s, transform .15s;
}

.m3-project-metric {
  text-align: right;
  padding-top: 4px;
}
.m3-metric-n {
  font-family: "Newsreader", serif;
  font-size: 36px;
  font-weight: 500;
  letter-spacing: -1.2px;
  color: var(--m3-accent);
  line-height: 1;
  margin-bottom: 6px;
}
.m3-metric-label {
  font-family: var(--mono);
  font-size: 10.5px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: var(--m3-ink-3);
}

/* ════════════ QUOTES ════════════ */
.m3-quotes {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.m3-quote {
  margin: 0;
  background: var(--m3-card);
  border: 1px solid var(--m3-rule-soft);
  padding: 32px 28px 28px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  position: relative;
  transition: transform .2s, border-color .2s;
}
.m3-quote:hover {
  transform: translateY(-3px);
  border-color: var(--m3-accent);
}
.m3-quote-mark {
  font-family: "Newsreader", serif;
  font-size: 72px;
  line-height: 0.5;
  color: var(--m3-accent);
  height: 24px;
  font-weight: 500;
}
.m3-quote-text {
  font-family: "Newsreader", serif;
  font-style: italic;
  font-size: 17px;
  line-height: 1.5;
  color: var(--m3-ink);
  margin: 0;
  letter-spacing: -0.1px;
  flex: 1;
}
.m3-quote-cap {
  padding-top: 16px;
  border-top: 1px solid var(--m3-rule-soft);
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.m3-quote-name {
  font-family: "Newsreader", serif;
  font-size: 15px;
  font-weight: 600;
  color: var(--m3-ink);
}
.m3-quote-role {
  font-family: var(--mono);
  font-size: 11px;
  color: var(--m3-ink-2);
  letter-spacing: 0.3px;
}
.m3-quote-rel {
  font-family: var(--mono);
  font-size: 10px;
  color: var(--m3-ink-3);
  letter-spacing: 0.4px;
  margin-top: 4px;
  text-transform: uppercase;
}

.m3-ref-foot {
  margin: 32px 0 0;
  font-family: "Newsreader", serif;
  font-size: 15px;
  color: var(--m3-ink-2);
  text-align: center;
}
.m3-inline-link {
  color: var(--m3-accent);
  border-bottom: 1px solid currentColor;
  text-decoration: none;
  transition: background .15s;
}
.m3-inline-link:hover {
  background: var(--m3-accent-soft);
}

/* ════════════ CONTACT ════════════ */
.m3-contact {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 64px;
  align-items: start;
}
.m3-contact-left { display: flex; flex-direction: column; gap: 28px; align-items: flex-start; }
.m3-contact-blurb {
  font-family: "Newsreader", serif;
  font-size: 18px;
  line-height: 1.55;
  color: var(--m3-ink-2);
  margin: 0;
  max-width: 44ch;
}

.m3-contact-list {
  margin: 0;
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--m3-rule);
}
.m3-contact-row {
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 16px;
  padding: 16px 0;
  border-bottom: 1px solid var(--m3-rule);
  align-items: baseline;
}
.m3-contact-row dt {
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  color: var(--m3-ink-3);
  margin: 0;
}
.m3-contact-row dd {
  margin: 0;
  font-family: "Newsreader", serif;
  font-size: 17px;
  color: var(--m3-ink);
}
.m3-contact-row dd a {
  color: var(--m3-ink);
  text-decoration: none;
  border-bottom: 1px solid var(--m3-rule);
  transition: color .15s, border-color .15s;
}
.m3-contact-row dd a:hover {
  color: var(--m3-accent);
  border-color: var(--m3-accent);
}

/* ════════════ FOOTER ════════════ */
.m3-foot {
  background: var(--m3-bg-2);
  border-top: 1px solid var(--m3-rule);
  padding: 32px 0;
  margin-top: 48px;
}
.m3-foot-inner {
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 56px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 32px;
  align-items: center;
}
.m3-foot-mark {
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: "Newsreader", serif;
  font-size: 15px;
  color: var(--m3-ink-2);
}
.m3-foot-glyph {
  display: inline-grid;
  place-items: center;
  width: 28px;
  height: 28px;
  background: var(--m3-ink);
  color: var(--m3-bg);
  font-family: var(--mono);
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.5px;
}
.m3-foot-meta {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.4px;
  color: var(--m3-ink-3);
  text-transform: uppercase;
}
.m3-foot-sep { color: var(--m3-rule); }

/* Easter egg — disguised as the last footer meta item.
   Blends in until hover, when a faint glyph + accent reveal it. */
.m3-foot-egg {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border: none;
  background: transparent;
  padding: 0;
  margin: 0;
  cursor: default;
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  color: var(--m3-ink-3);
  transition: color .18s;
}
.m3-foot-egg-glyph {
  opacity: 0;
  transform: translateX(-4px);
  font-size: 12px;
  transition: opacity .18s, transform .18s;
}
.m3-foot-egg:hover {
  color: var(--m3-accent-lit, var(--m3-accent));
  cursor: pointer;
}
.m3-foot-egg:hover .m3-foot-egg-glyph {
  opacity: 1;
  transform: translateX(0);
}
.m3-foot-top {
  justify-self: end;
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  color: var(--m3-ink-2);
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: color .15s, border-color .15s;
}
.m3-foot-top:hover {
  color: var(--m3-accent);
  border-color: var(--m3-accent);
}
`;

window.Variation3 = Variation3;
