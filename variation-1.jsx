// Variation 1 — "Full 90s HTML"
// The real deal. Tables for layout. <marquee>. Tiled bg. Blinking text.
// "Under construction" bar. Hit counter as odometer. Webring. Guestbook.
// "Best viewed in Netscape Navigator 4.0". Geocities neighborhood. The works.
// Warm cream palette keeps it from being totally hostile.

function Variation1({ onBack, backHref }) {
  const C = window.SITE;
  const [visits, setVisits] = React.useState(12847);
  const [guestbook, setGuestbook] = React.useState(C.guestbook);
  const [name, setName] = React.useState("");
  const [msg, setMsg] = React.useState("");

  const firstName = C.name.split(" ")[0];
  const githubLink = (C.links.find(l => l.label === "GitHub") || {});
  const linkedinLink = (C.links.find(l => l.label === "LinkedIn") || {});

  React.useEffect(() => {
    const t = setInterval(() => setVisits((v) => v + 1), 6000);
    return () => clearInterval(t);
  }, []);

  const sign = (e) => {
    e.preventDefault();
    if (!name.trim() || !msg.trim()) return;
    const now = new Date();
    const d = `${String(now.getMonth() + 1).padStart(2, "0")}/${String(now.getDate()).padStart(2, "0")}/${now.getFullYear()}`;
    setGuestbook([{ name, date: d, msg }, ...guestbook]);
    setName(""); setMsg("");
  };

  // 7-digit odometer counter
  const counterDigits = String(visits).padStart(7, "0").split("");

  return (
    <div className="v1-page">
      <style>{v1Css}</style>

      {/* Visible "back to the present" banner */}
      <div className="v1-timebar">
        <span className="v1-timebar-tag">★ 1996 EDITION ★</span>
        <span className="v1-timebar-text">You've travelled back to the original homepage.</span>
        {onBack ? (
          <button type="button" className="v1-timebar-link" onClick={onBack}>
            » Return to the current site (2026)
          </button>
        ) : (
          <a href={backHref || "index.html"} className="v1-timebar-link">
            » Return to the current site (2026)
          </a>
        )}
      </div>

      {/* Top "under construction" ribbon */}
      <div className="v1-construction">
        <span className="v1-cone">🚧</span>
        <marquee scrollamount="5" behavior="scroll" direction="left" style={{ flex: 1 }}>
          ★★★ UNDER ETERNAL CONSTRUCTION ★★★ thanks for visiting ★★★ please sign my guestbook ★★★ last updated 04/21/2026 ★★★ best viewed in Netscape Navigator 4.0 at 800x600 ★★★
        </marquee>
        <span className="v1-cone">🚧</span>
      </div>

      {/* Header table (tables for layout, as the gods intended) */}
      <table width="100%" cellPadding="0" cellSpacing="0" border="0" className="v1-headertbl">
        <tbody>
          <tr>
            <td align="center">
              <h1 className="v1-h1">
                <span className="v1-h1-shadow">
                  {firstName}'s Home Page
                </span>
              </h1>
              <p className="v1-tagline">
                <i>~*~ a humble corner of the world wide web ~*~</i><br/>
                <b>engineering manager</b> &bull; <b>occasional writer</b> &bull; <b>est. 2026</b>
              </p>
              <hr className="v1-hr-fancy" />
              {/* Navigation */}
              <p className="v1-nav">
                [ <a href="#about" className="v1-link">About Me</a> ]
                &nbsp;[ <a href="#now" className="v1-link">What's New</a> ]
                &nbsp;[ <a href="#writing" className="v1-link">My Writings</a> ]
                &nbsp;[ <a href="#favorites" className="v1-link">Favorites</a> ]
                &nbsp;[ <a href="#guestbook" className="v1-link">Guestbook</a> ]
                &nbsp;[ <a href="#contact" className="v1-link">Contact</a> ]
              </p>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Main content 2-column table */}
      <table width="100%" cellPadding="0" cellSpacing="0" border="0" className="v1-maintbl">
        <tbody>
          <tr>
            {/* LEFT SIDEBAR */}
            <td valign="top" width="180" className="v1-sidebar">
              <div className="v1-sidebox">
                <div className="v1-sidebox-title">◆ Navigation ◆</div>
                <ul className="v1-sidelist">
                  <li><a href="#about" className="v1-link">» About Me</a></li>
                  <li><a href="#now" className="v1-link">» What's New</a></li>
                  <li><a href="#writing" className="v1-link">» My Writings</a></li>
                  <li><a href="#favorites" className="v1-link">» Favorites</a></li>
                  <li><a href="#guestbook" className="v1-link">» Guestbook</a></li>
                  <li><a href="#contact" className="v1-link">» Contact</a></li>
                </ul>
              </div>

              <div className="v1-sidebox">
                <div className="v1-sidebox-title">◆ Visitors ◆</div>
                <div className="v1-counter">
                  {counterDigits.map((d, i) => (
                    <span key={i} className="v1-digit">{d}</span>
                  ))}
                </div>
                <div className="v1-counter-label">visitors since<br/>january 01, 2026</div>
              </div>

              <div className="v1-sidebox">
                <div className="v1-sidebox-title">◆ Now Playing ◆</div>
                <div className="v1-nowplaying">
                  ♪ ♫ ♪<br/>
                  <b>{C.nowPlaying.artist}</b><br/>
                  <i>{C.nowPlaying.album}</i><br/>
                  <span className="v1-eq">▂▃▅▂▇▃▅▂</span>
                </div>
              </div>

              <div className="v1-sidebox">
                <div className="v1-sidebox-title">◆ Webring ◆</div>
                <div className="v1-webring">
                  <b>&laquo; Eng. Managers &raquo;</b><br/>
                  <a href="#" className="v1-link">‹ prev</a>
                  &nbsp;·&nbsp;
                  <a href="#" className="v1-link">random</a>
                  &nbsp;·&nbsp;
                  <a href="#" className="v1-link">next ›</a>
                  <br/><br/>
                  <a href="#" className="v1-link">[join]</a>
                </div>
              </div>

              <div className="v1-badges">
                <div className="v1-badge v1-badge-ns"><b>Best viewed in</b><br/><span className="v1-badge-ns-big">NETSCAPE</span></div>
                <div className="v1-badge v1-badge-html"><b>HTML</b><br/>hand coded</div>
                <div className="v1-badge v1-badge-1024"><b>800×600</b><br/>optimized</div>
                <div className="v1-badge v1-badge-notai"><b>NO AI</b><br/>no trackers</div>
                <div className="v1-badge v1-badge-w3c"><b>W3C</b><br/>valid HTML</div>
                <div className="v1-badge v1-badge-year"><b>MMXXVI</b><br/>anno domini</div>
              </div>
            </td>

            {/* MAIN CONTENT */}
            <td valign="top" className="v1-main">
              {/* About */}
              <a id="about"></a>
              <table width="100%" cellPadding="0" cellSpacing="0" border="0" className="v1-section">
                <tbody>
                  <tr><td className="v1-section-bar">◆ About Me ◆</td></tr>
                  <tr><td className="v1-section-body">
                    <table width="100%" cellPadding="0" cellSpacing="0" border="0"><tbody><tr>
                      <td valign="top" width="100" className="v1-avatar-cell">
                        {/* ASCII-portrait placeholder */}
                        <div className="v1-avatar">
                          <pre>{`
   .-"""-.
  /       \\
 |  o   o  |
 |    >    |
  \\  \\_/  /
   '-----'
`}</pre>
                          <div className="v1-avatar-caption">[ me, 2026 ]</div>
                        </div>
                      </td>
                      <td valign="top" className="v1-about-text">
                        <p>
                          <font size="4"><b>Hi! My name is {firstName}.</b></font> Welcome to my homepage!
                        </p>
                        {C.about.map((para, i) => (
                          <p key={i} dangerouslySetInnerHTML={{ __html: para }} />
                        ))}
                        <p className="v1-sig">
                          ~ {firstName}<br/>
                          <font size="1"><i>webmaster &amp; sole resident</i></font>
                        </p>
                      </td>
                    </tr></tbody></table>
                  </td></tr>
                </tbody>
              </table>

              {/* Now */}
              <a id="now"></a>
              <table width="100%" cellPadding="0" cellSpacing="0" border="0" className="v1-section">
                <tbody>
                  <tr><td className="v1-section-bar">◆ What's New ◆</td></tr>
                  <tr><td className="v1-section-body">
                    <p><font size="2"><i>last updated: april 21, 2026</i></font></p>
                    <dl className="v1-whatsnew">
                      {C.whatsNew.map((item, i) => (
                        <React.Fragment key={i}>
                          <dt><b>&raquo; {item.label}</b></dt>
                          <dd dangerouslySetInnerHTML={{ __html: item.text }} />
                        </React.Fragment>
                      ))}
                    </dl>
                  </td></tr>
                </tbody>
              </table>

              {/* Writing */}
              <a id="writing"></a>
              <table width="100%" cellPadding="0" cellSpacing="0" border="0" className="v1-section">
                <tbody>
                  <tr><td className="v1-section-bar">◆ My Writings ◆</td></tr>
                  <tr><td className="v1-section-body">
                    <p><font size="2"><i>a collection of essays and notes. no schedule, no RSS. sorry!</i></font></p>

                    {C.posts.map((p, i) => (
                      <PostCard key={i} num={p.num} date={p.date} title={p.title}>
                        {p.body}
                      </PostCard>
                    ))}

                    <p align="center"><a href="#" className="v1-link"><b>[ view all posts &raquo; ]</b></a></p>
                  </td></tr>
                </tbody>
              </table>

              {/* Favorites */}
              <a id="favorites"></a>
              <table width="100%" cellPadding="0" cellSpacing="0" border="0" className="v1-section">
                <tbody>
                  <tr><td className="v1-section-bar">◆ A Few Of My Favorite Things ◆</td></tr>
                  <tr><td className="v1-section-body">
                    <table width="100%" cellPadding="6" cellSpacing="0" border="1" className="v1-favtable">
                      <tbody>
                        <tr className="v1-favhead">
                          <th>Category</th><th>Thing</th><th>Why</th>
                        </tr>
                        {C.favorites.map((f, i) => (
                          <tr key={i}>
                            <td><b>{f.category}</b></td>
                            <td dangerouslySetInnerHTML={{ __html: f.thing }} />
                            <td>{f.why}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </td></tr>
                </tbody>
              </table>

              {/* Guestbook */}
              <a id="guestbook"></a>
              <table width="100%" cellPadding="0" cellSpacing="0" border="0" className="v1-section">
                <tbody>
                  <tr><td className="v1-section-bar">◆ Sign My Guestbook! ◆</td></tr>
                  <tr><td className="v1-section-body">
                    <p align="center" className="v1-gb-hero">
                      <span className="v1-mailicon">✉</span>
                      <b>&nbsp;Leave a note! I read every one.&nbsp;</b>
                      <span className="v1-mailicon">✉</span>
                    </p>

                    <form onSubmit={sign} className="v1-gbform">
                      <table cellPadding="4" cellSpacing="0" border="0" width="100%">
                        <tbody>
                          <tr>
                            <td width="80"><b>Name:</b></td>
                            <td><input type="text" value={name} onChange={(e) => setName(e.target.value)} className="v1-input" maxLength={30} /></td>
                          </tr>
                          <tr>
                            <td valign="top"><b>Message:</b></td>
                            <td><textarea value={msg} onChange={(e) => setMsg(e.target.value)} className="v1-textarea" rows={3} maxLength={200}></textarea></td>
                          </tr>
                          <tr>
                            <td></td>
                            <td><button type="submit" className="v1-button">[ Sign Guestbook! ]</button></td>
                          </tr>
                        </tbody>
                      </table>
                    </form>

                    <hr className="v1-hr-fancy" />

                    <div className="v1-gb-entries">
                      {guestbook.map((g, i) => (
                        <div key={i} className="v1-gb-entry">
                          <div className="v1-gb-entry-head">
                            <b>{g.name}</b> wrote on <i>{g.date}</i>:
                          </div>
                          <div className="v1-gb-entry-body">
                            "{g.msg}"
                          </div>
                        </div>
                      ))}
                    </div>
                  </td></tr>
                </tbody>
              </table>

              {/* Contact */}
              <a id="contact"></a>
              <table width="100%" cellPadding="0" cellSpacing="0" border="0" className="v1-section">
                <tbody>
                  <tr><td className="v1-section-bar">◆ Contact Me ◆</td></tr>
                  <tr><td className="v1-section-body">
                    <p><font size="3">The best way to reach me is <b>email</b>. I read all of it. I reply to most of it.</font></p>
                    <table cellPadding="6" cellSpacing="0" border="0" className="v1-contact">
                      <tbody>
                        <tr>
                          <td><span className="v1-icon">✉</span></td>
                          <td><b>E-Mail:</b></td>
                          <td><a href={"mailto:" + C.email} className="v1-link">{C.email}</a></td>
                        </tr>
                        <tr>
                          <td><span className="v1-icon">◈</span></td>
                          <td><b>GitHub:</b></td>
                          <td><a href={githubLink.href || "#"} className="v1-link">{githubLink.value}</a></td>
                        </tr>
                        <tr>
                          <td><span className="v1-icon">◆</span></td>
                          <td><b>LinkedIn:</b></td>
                          <td><a href={linkedinLink.href || "#"} className="v1-link">{linkedinLink.value}</a></td>
                        </tr>
                      </tbody>
                    </table>
                  </td></tr>
                </tbody>
              </table>

            </td>
          </tr>
        </tbody>
      </table>

      {/* Footer */}
      <hr className="v1-hr-fancy" />
      <div className="v1-footer">
        <p>
          <font size="2">
            <b>© MMXXVI {C.name}</b> &nbsp;·&nbsp; hand-coded HTML &nbsp;·&nbsp; no cookies &nbsp;·&nbsp; no trackers &nbsp;·&nbsp; no AI
          </font>
        </p>
        <p>
          <font size="1">
            this page was last updated on <b>april 21, 2026</b> · it weighs about 12kb · thanks for stopping by!
          </font>
        </p>
        <p className="v1-ring">
          <marquee scrollamount="3" behavior="alternate" direction="left" width="60%">
            ♥ thank you for visiting {firstName.toLowerCase()}'s home page ♥ come back soon ♥
          </marquee>
        </p>
      </div>
    </div>
  );
}

function PostCard({ num, date, title, children }) {
  return (
    <table width="100%" cellPadding="8" cellSpacing="0" border="0" className="v1-post">
      <tbody>
        <tr>
          <td width="60" valign="top" align="center" className="v1-post-num">
            <div className="v1-post-num-box">#{num}</div>
            <div className="v1-post-num-date">{date}</div>
          </td>
          <td valign="top" className="v1-post-body">
            <h3 className="v1-post-title">
              <a href="#" className="v1-link">{title}</a>
              &nbsp;<sup className="v1-new">NEW!</sup>
            </h3>
            <p>{children}</p>
            <p><a href="#" className="v1-link"><font size="2">[ read more » ]</font></a></p>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

const v1Css = `
.v1-page {
  /* Dark "midnight Geocities" palette — the retro sibling of the
     graphite modern site: deep slate base, navy gradient wash,
     warm parchment ink, gold + period-blue accents. */
  --v1-bg: #0c0d11;
  --v1-bg-2: #131419;       /* header / sidebar / footer */
  --v1-panel: #181a20;      /* sideboxes / sections */
  --v1-panel-2: #1d1f27;    /* posts / table rows */
  --v1-ink: #e9e3d4;        /* warm parchment, echoes modern cream ink */
  --v1-ink-dim: #9c968a;
  --v1-navy: #2a4a6a;       /* modern accent — used sparingly now */
  --v1-navy-mid: #34546f;
  --v1-navy-lit: #6fa8dc;   /* bright period link-blue */
  --v1-gold: #e6c168;       /* warm accent + period gold */
  --v1-border: #2c2f38;
  --v1-border-lt: #3a3e49;
  --v1-deep: #060709;       /* darkest — counters / avatar */
  --v1-green: #7fff7f;

  background: var(--v1-bg);
  background-image:
    radial-gradient(circle at 1px 1px, rgba(150, 160, 175, 0.05) 1px, transparent 0),
    radial-gradient(circle at 18% 0%, rgba(42, 74, 106, 0.08), transparent 50%),
    radial-gradient(circle at 100% 100%, rgba(42, 74, 106, 0.06), transparent 55%);
  background-size: 8px 8px, 100% 100%, 100% 100%;
  color: var(--v1-ink);
  min-height: 100%;
  font-family: "Times New Roman", Times, serif;
  font-size: 15px;
  line-height: 1.45;
  padding: 0;
}

.v1-page .v1-blink { animation: v1-blink 1s steps(2) infinite; }
@keyframes v1-blink { 50% { opacity: 0.2; } }

.v1-page pre, .v1-page code, .v1-page input, .v1-page textarea, .v1-page button, .v1-page .v1-counter, .v1-page .v1-eq {
  font-family: "Courier New", Courier, monospace;
}

/* ========== TIME-TRAVEL BANNER ========== */
.v1-timebar {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 6px 14px;
  background: linear-gradient(180deg, #20232b 0%, #14161b 100%);
  border-bottom: 2px solid var(--v1-gold);
  padding: 9px 16px;
  font-family: "Courier New", Courier, monospace;
  font-size: 13px;
  color: var(--v1-ink);
}
.v1-timebar-tag {
  color: var(--v1-gold);
  font-weight: bold;
  letter-spacing: 1px;
}
.v1-timebar-text { color: var(--v1-ink-dim); }
.v1-timebar-link {
  font-family: "Courier New", Courier, monospace;
  font-size: 13px;
  font-weight: bold;
  color: var(--v1-navy-lit);
  background: transparent;
  border: 1px solid var(--v1-navy);
  padding: 3px 12px;
  cursor: pointer;
  text-decoration: none;
  transition: background .12s, color .12s;
}
.v1-timebar-link:hover {
  background: var(--v1-navy-lit);
  color: var(--v1-deep);
}

/* ========== CONSTRUCTION BAR ========== */
.v1-construction {
  display: flex;
  align-items: center;
  gap: 12px;
  background: repeating-linear-gradient(135deg, var(--v1-gold) 0 14px, var(--v1-deep) 14px 28px);
  padding: 8px 12px;
  color: var(--v1-ink);
  font-family: "Courier New", Courier, monospace;
  font-weight: bold;
  font-size: 13px;
  border-bottom: 3px double var(--v1-navy-mid);
}
.v1-construction marquee {
  background: var(--v1-panel);
  color: var(--v1-ink);
  padding: 4px 0;
  border: 1px solid var(--v1-navy);
}
.v1-cone { font-size: 20px; }

/* ========== HEADER ========== */
.v1-headertbl {
  background: var(--v1-bg-2);
  border-bottom: 3px double var(--v1-navy-mid);
  padding: 28px 0 20px;
}
.v1-h1 {
  margin: 0 0 10px;
  font-family: "Times New Roman", Times, serif;
  font-size: 52px;
  font-weight: 700;
  color: var(--v1-gold);
  text-shadow:
    2px 2px 0 var(--v1-navy-mid),
    4px 4px 0 var(--v1-navy),
    5px 5px 8px rgba(0, 0, 0, 0.55);
  letter-spacing: -1px;
}
.v1-tagline {
  font-size: 15px;
  color: var(--v1-ink-dim);
  margin: 0 0 14px;
}

.v1-hr-fancy {
  border: none;
  height: 4px;
  margin: 14px auto;
  max-width: 90%;
  background:
    linear-gradient(90deg, transparent 0, var(--v1-navy-mid) 10%, var(--v1-navy-mid) 90%, transparent 100%);
  position: relative;
}

.v1-nav {
  font-family: "Courier New", monospace;
  font-size: 13px;
  margin: 8px 0 0;
  color: var(--v1-ink-dim);
}

/* ========== MAIN TABLE ========== */
.v1-maintbl { background: var(--v1-bg); }

.v1-sidebar {
  padding: 20px 14px;
  background: var(--v1-bg-2);
  border-right: 2px solid var(--v1-navy);
}

.v1-sidebox {
  margin-bottom: 20px;
  background: var(--v1-panel);
  border: 2px outset var(--v1-border-lt);
  padding: 0;
  overflow: hidden;
}
.v1-sidebox-title {
  background: linear-gradient(180deg, #20232b 0%, #14161b 100%);
  color: var(--v1-gold);
  padding: 4px 8px;
  font-family: "Courier New", monospace;
  font-size: 11px;
  font-weight: bold;
  text-align: center;
  letter-spacing: 1px;
  border-bottom: 2px solid var(--v1-navy);
}
.v1-sidelist {
  list-style: none;
  padding: 10px 12px;
  margin: 0;
  font-size: 13px;
  line-height: 1.9;
}

/* Odometer counter */
.v1-counter {
  display: flex;
  justify-content: center;
  gap: 2px;
  padding: 10px 8px 4px;
  background: var(--v1-deep);
  margin: 6px;
}
.v1-digit {
  background: #06120a;
  color: var(--v1-green);
  font-family: "Courier New", monospace;
  font-weight: bold;
  font-size: 16px;
  padding: 2px 4px;
  border: 1px solid #3a6a3a;
  box-shadow: inset 0 0 4px rgba(127, 255, 127, 0.3);
  min-width: 12px;
  text-align: center;
}
.v1-counter-label {
  text-align: center;
  font-size: 10px;
  padding: 4px 6px 10px;
  color: var(--v1-ink-dim);
  font-family: "Courier New", monospace;
  line-height: 1.3;
}

.v1-nowplaying {
  padding: 10px;
  font-size: 12px;
  text-align: center;
  line-height: 1.5;
}
.v1-eq {
  color: var(--v1-gold);
  font-size: 14px;
  letter-spacing: 2px;
  animation: v1-eq 0.6s steps(4) infinite alternate;
}
@keyframes v1-eq {
  0% { letter-spacing: 1px; }
  100% { letter-spacing: 3px; }
}

.v1-webring {
  padding: 10px;
  font-size: 12px;
  text-align: center;
  line-height: 1.6;
}

/* 88×31 Netscape-era button badges */
.v1-badges {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px;
  margin-top: 12px;
}
.v1-badge {
  height: 31px;
  padding: 2px 4px;
  font-family: "Courier New", monospace;
  font-size: 8px;
  text-align: center;
  line-height: 1.1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid var(--v1-deep);
  letter-spacing: 0.3px;
}
.v1-badge b { font-size: 9px; }
.v1-badge-ns { background: var(--v1-deep); color: var(--v1-ink); }
.v1-badge-ns-big {
  font-weight: bold;
  font-size: 11px;
  color: var(--v1-gold);
  letter-spacing: 1px;
}
.v1-badge-html { background: var(--v1-gold); color: var(--v1-deep); }
.v1-badge-1024 { background: #20232b; color: var(--v1-ink); }
.v1-badge-notai { background: #1d3a2e; color: var(--v1-ink); }
.v1-badge-w3c { background: var(--v1-ink); color: var(--v1-deep); }
.v1-badge-year { background: #16181e; color: var(--v1-ink); }

/* ========== MAIN ========== */
.v1-main { padding: 20px 28px 20px; background: var(--v1-bg); }

.v1-section {
  background: var(--v1-panel);
  border: 2px outset var(--v1-border-lt);
  margin-bottom: 20px;
}
.v1-section-bar {
  background: linear-gradient(180deg, #20232b 0%, #14161b 100%);
  color: var(--v1-gold);
  padding: 6px 14px;
  font-family: "Courier New", monospace;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  border-bottom: 2px solid var(--v1-navy);
}
.v1-section-body { padding: 16px 20px; }
.v1-section-body p { margin: 0 0 12px; }
.v1-section-body p:last-child { margin-bottom: 0; }

/* ABOUT */
.v1-avatar-cell { padding-right: 14px; }
.v1-avatar {
  background: var(--v1-deep);
  color: var(--v1-green);
  padding: 6px 4px 2px;
  border: 2px inset var(--v1-navy);
  font-family: "Courier New", monospace;
  text-align: center;
}
.v1-avatar pre {
  margin: 0;
  font-size: 10px;
  line-height: 1.15;
  color: var(--v1-green);
}
.v1-avatar-caption {
  background: #20232b;
  color: var(--v1-green);
  font-size: 9px;
  padding: 2px;
  margin-top: 3px;
  letter-spacing: 0.5px;
}
.v1-about-text p { margin: 0 0 10px; }
.v1-sig { font-family: "Comic Sans MS", "Marker Felt", cursive; color: var(--v1-gold); margin-top: 14px !important; }

/* WHAT'S NEW */
.v1-whatsnew { margin: 0; }
.v1-whatsnew dt { margin-top: 10px; color: var(--v1-gold); }
.v1-whatsnew dt:first-child { margin-top: 0; }
.v1-whatsnew dd { margin-left: 20px; margin-bottom: 4px; }

/* POSTS */
.v1-post {
  background: var(--v1-panel-2);
  border: 1px solid var(--v1-border);
  margin-bottom: 10px;
}
.v1-post-num-box {
  background: #14161b;
  color: var(--v1-gold);
  font-family: "Courier New", monospace;
  font-weight: bold;
  font-size: 14px;
  padding: 4px 6px;
  border: 2px outset var(--v1-border-lt);
}
.v1-post-num-date {
  font-family: "Courier New", monospace;
  font-size: 9px;
  color: var(--v1-ink-dim);
  margin-top: 4px;
  letter-spacing: 0.3px;
}
.v1-post-title {
  margin: 0 0 6px;
  font-size: 17px;
  font-weight: bold;
  color: var(--v1-gold);
}
.v1-post-body p { margin: 0 0 6px; font-size: 14px; }
.v1-new {
  background: var(--v1-gold);
  color: var(--v1-deep);
  font-family: "Courier New", monospace;
  font-size: 9px;
  font-weight: bold;
  padding: 1px 4px;
  border: 1px solid var(--v1-navy);
  letter-spacing: 0.5px;
  animation: v1-blink 1.2s steps(2) infinite;
  vertical-align: middle;
}

/* FAVORITES TABLE */
.v1-favtable {
  border-collapse: collapse;
  background: var(--v1-panel-2);
  font-size: 13px;
  border: 2px outset var(--v1-border-lt);
}
.v1-favtable th, .v1-favtable td {
  border: 1px solid var(--v1-border-lt);
  padding: 5px 8px;
  text-align: left;
}
.v1-favhead th {
  background: #20232b;
  color: var(--v1-gold);
  font-family: "Courier New", monospace;
  font-size: 11px;
  letter-spacing: 0.5px;
}
.v1-favtable tr:nth-child(even) { background: var(--v1-bg-2); }
.v1-favtable code {
  background: var(--v1-deep);
  color: var(--v1-green);
  padding: 1px 4px;
  font-size: 12px;
}

/* GUESTBOOK */
.v1-gb-hero {
  background: #1d2a24;
  border: 2px dashed var(--v1-gold);
  padding: 10px;
  font-size: 16px;
  color: var(--v1-gold);
}
.v1-mailicon {
  display: inline-block;
  font-size: 20px;
  color: var(--v1-gold);
  animation: v1-wiggle 1s ease-in-out infinite;
}
@keyframes v1-wiggle {
  0%, 100% { transform: rotate(-8deg); }
  50% { transform: rotate(8deg); }
}
.v1-gbform {
  background: var(--v1-bg-2);
  padding: 10px;
  border: 2px inset var(--v1-border);
  margin: 10px 0;
}
.v1-input, .v1-textarea {
  width: 100%;
  padding: 4px;
  font-family: "Courier New", monospace;
  font-size: 13px;
  background: var(--v1-panel);
  border: 2px inset var(--v1-border);
  color: var(--v1-ink);
}
.v1-textarea { resize: vertical; }
.v1-button {
  background: var(--v1-gold);
  border: 2px outset #b8923f;
  padding: 4px 14px;
  font-family: "Courier New", monospace;
  font-size: 13px;
  font-weight: bold;
  color: var(--v1-deep);
  cursor: pointer;
}
.v1-button:active { border-style: inset; }
.v1-button:hover { background: #f0d488; }

.v1-gb-entries { margin-top: 14px; }
.v1-gb-entry {
  background: var(--v1-panel-2);
  border: 1px solid var(--v1-border);
  border-left: 4px solid var(--v1-gold);
  padding: 8px 12px;
  margin-bottom: 8px;
  font-size: 13px;
}
.v1-gb-entry-head { color: var(--v1-ink-dim); margin-bottom: 4px; font-size: 12px; }
.v1-gb-entry-body { color: var(--v1-ink); font-style: italic; }

/* CONTACT */
.v1-contact { font-size: 14px; }
.v1-contact td { padding: 4px 8px; }
.v1-icon { color: var(--v1-gold); font-size: 18px; }

/* LINKS */
.v1-link {
  color: var(--accent-v1-link, var(--v1-navy-lit));
  text-decoration: underline;
  font-weight: normal;
  transition: color .1s, background .1s;
}
.v1-link:visited { color: #b794d6; }
.v1-link:hover {
  color: var(--accent-v1-link-hover, var(--v1-gold));
  background: var(--accent-v1-hover-bg, var(--v1-navy));
}
.v1-link:active { color: var(--v1-gold); }

/* FOOTER */
.v1-footer {
  text-align: center;
  padding: 16px 20px 28px;
  background: var(--v1-bg-2);
  border-top: 3px double var(--v1-navy-mid);
}
.v1-footer p { margin: 6px 0; }
.v1-ring { margin-top: 12px !important; }
`;

window.Variation1 = Variation1;
