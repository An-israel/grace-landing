import Image from "next/image";
import { Cta } from "@/components/Cta";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { program, proof, site, testimonials } from "@/site.config";

const naira = (n: number) => "₦" + n.toLocaleString("en-NG");

const enrolLink = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(site.enrolMessage)}`;

const pains = [
  "You've watched hundreds of “make money online” videos and still haven't made your first ₦1.",
  "You don't know which skill to pick, so you keep jumping from one thing to the next.",
  "You're scared of showing your face, or you think you need an expensive camera and laptop.",
  "You tried YouTube before, got 12 views, and gave up.",
];

const pillars = [
  { n: "01", t: "Channel Setup", d: "Pick a profitable niche and set up your channel the right way from day one." },
  { n: "02", t: "AI Content Creation", d: "Use AI to write scripts, generate voiceovers and build videos, even without showing your face." },
  { n: "03", t: "Thumbnails That Get Clicks", d: "Design thumbnails people can't scroll past, straight from your phone." },
  { n: "04", t: "Copyright, Simplified", d: "Know exactly what you can and can't use, so your channel doesn't get strikes." },
  { n: "05", t: "YouTube Monetization", d: "The clear path to the YouTube Partner Program and your first dollar payout." },
  { n: "06", t: "Facebook & TikTok Money", d: "Repurpose your content and get paid on more than one platform." },
  { n: "07", t: "AI Automation", d: "Let AI tools do the heavy lifting so you can create more in less time." },
];

const forYou = [
  "You're a beginner and you want someone to show you step by step",
  "You have a phone or laptop and a few hours a week",
  "You want a real skill, not a quick-money scheme",
  "You'll take action, not just watch",
];
const notForYou = [
  "You want to get rich overnight without doing any work",
  "You won't follow instructions or post consistently",
  "You're looking for someone to do everything for you",
];

const steps = [
  { t: "Join the free WhatsApp group", d: "One click. You'll get free lessons, tips and updates straight on WhatsApp." },
  { t: "Learn the basics for free", d: "See how YouTube automation works and get clear on the path before you spend a kobo." },
  { t: "Go all in with the Blueprint", d: "When you're ready, get the full step-by-step training plus one-on-one support." },
];

const faqs = [
  { q: "Is the WhatsApp group really free?", a: "Yes. It's 100% free to join. You'll get free tips, lessons and updates. The paid program is optional, for people who want the full step-by-step system and one-on-one support." },
  { q: "I'm a complete beginner. Can I do this?", a: "Yes. This was built for beginners. Everything is broken down step by step, and you can ask questions whenever you get stuck." },
  { q: "Do I need to show my face?", a: "No. YouTube automation uses AI for scripts, voiceovers and visuals, so you can build a channel without ever appearing on camera." },
  { q: "Can I do this with just my phone?", a: "Yes. A smartphone and data are enough to start. A laptop helps, but it isn't required." },
  { q: "How fast will I make money?", a: "Honestly, it depends on you. YouTube rewards consistency. Some people monetize in a few months, while others take longer. This is a real skill, not a get-rich-quick scheme, and anyone who promises you guaranteed income is lying." },
  { q: "What if I get stuck?", a: "That's what the one-on-one support is for. You're not left alone with videos. You can ask Grace directly." },
];

function Stars() {
  return <span className="stars" aria-label="5 stars">★★★★★</span>;
}

export default function Home() {
  return (
    <main>
      {/* ── Announcement bar ───────────────────────────── */}
      <a className="topbar" href={site.whatsappGroup} target="_blank" rel="noopener noreferrer">
        <span className="pulse" aria-hidden="true" /> FREE community is open. Tap here to join on WhatsApp →
      </a>

      {/* ── Hero ───────────────────────────────────────── */}
      <header className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">{site.brand} · {site.topic}</p>
            <h1>
              Turn Your Phone Into a <span className="hl">YouTube Income Skill</span>, Using AI.
            </h1>
            <p className="lead">
              No face on camera. No expensive gear. No experience needed. I'll show you step by step how to
              build and monetize a YouTube channel with AI, even if you're starting from zero.
            </p>
            <Cta />
          </div>

          <div className="hero-visual">
            <div className="portrait">
              {site.photo ? (
                <Image src={site.photo} alt={`${site.brand}`} fill priority sizes="(max-width: 860px) 80vw, 420px" />
              ) : (
                <div className="monogram" aria-hidden="true">G</div>
              )}
            </div>
            <div className="float-card">
              <span className="float-label">One video earned</span>
              <strong>$7,654.40</strong>
              <span className="float-sub">395,940 views · YouTube Studio</span>
            </div>
          </div>
        </div>

        {/* Proof strip */}
        <div className="container">
          <ul className="stats">
            <li><strong>$7,654</strong><span>from a single video</span></li>
            <li><strong>$3,082</strong><span>earned in one month</span></li>
            <li><strong>7,395</strong><span>subscribers on a student channel now in the YouTube Partner Program</span></li>
            <li><strong>2 yrs</strong><span>teaching digital skills</span></li>
          </ul>
        </div>
      </header>

      {/* ── Problem ────────────────────────────────────── */}
      <section className="section">
        <div className="container narrow">
          <p className="kicker">Be honest with yourself…</p>
          <h2>You're Not Lazy. <span className="hl">You're Confused.</span></h2>
          <ul className="pains">
            {pains.map((p) => (
              <li key={p}><span className="x" aria-hidden="true">✕</span>{p}</li>
            ))}
          </ul>
          <p className="big-line">
            The problem isn't you. It's that nobody ever gave you a <em>clear, step-by-step path</em>.
            <br />That's exactly what I do.
          </p>
        </div>
      </section>

      {/* ── What you'll learn ─────────────────────────── */}
      <section className="section alt">
        <div className="container">
          <p className="kicker center">The skill stack</p>
          <h2 className="center">Everything You Need to Go From <span className="hl">Zero to Monetized</span></h2>
          <div className="pillars">
            {pillars.map((p) => (
              <article key={p.n} className="pillar">
                <span className="pillar-n">{p.n}</span>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </article>
            ))}
          </div>
          <Cta label="Start Free on WhatsApp" />
        </div>
      </section>

      {/* ── Proof wall ─────────────────────────────────── */}
      <section className="section" id="results">
        <div className="container">
          <p className="kicker center">Receipts, not promises</p>
          <h2 className="center">Real Screenshots. <span className="hl">Real Money.</span></h2>
          <p className="section-lead center">Straight from YouTube Studio. No edits, no stock photos.</p>
          <div className="proof-grid">
            {proof.map((p) => (
              <figure key={p.src} className={`proof ${p.wide ? "wide" : ""}`}>
                <div className="proof-img">
                  <Image src={p.src} alt={p.alt} fill sizes="(max-width: 860px) 100vw, 50vw" />
                </div>
                <figcaption>
                  <strong>{p.headline}</strong>
                  <span>{p.caption}</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="disclaimer-inline">
            Results shown are not typical and are not a promise of earnings. Your results depend on your effort,
            consistency and niche.
          </p>
        </div>
      </section>

      {/* ── Testimonials (hidden until real ones are added) ── */}
      {testimonials.length > 0 && (
        <section className="section alt">
          <div className="container">
            <p className="kicker center">From the students</p>
            <h2 className="center">What My Students <span className="hl">Say</span></h2>
            <div className="testimonials">
              {testimonials.map((t) => (
                <blockquote key={t.name + t.quote} className="testimonial">
                  <Stars />
                  <p>“{t.quote}”</p>
                  <footer>
                    <strong>{t.name}</strong>
                    {t.location && <span> · {t.location}</span>}
                    {t.result && <span className="result">{t.result}</span>}
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── For / not for ──────────────────────────────── */}
      <section className="section alt">
        <div className="container">
          <h2 className="center">This Is <span className="hl">NOT</span> for Everyone</h2>
          <div className="fit">
            <div className="fit-col yes">
              <h3>✓ This is for you if…</h3>
              <ul>{forYou.map((x) => <li key={x}>{x}</li>)}</ul>
            </div>
            <div className="fit-col no">
              <h3>✕ Please don't join if…</h3>
              <ul>{notForYou.map((x) => <li key={x}>{x}</li>)}</ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── How it works ───────────────────────────────── */}
      <section className="section">
        <div className="container">
          <p className="kicker center">Simple</p>
          <h2 className="center">How It Works</h2>
          <ol className="steps">
            {steps.map((s, i) => (
              <li key={s.t}>
                <span className="step-n">{i + 1}</span>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </li>
            ))}
          </ol>
          <Cta label="Take Step 1: Join Free" />
        </div>
      </section>

      {/* ── Offer ──────────────────────────────────────── */}
      <section className="section offer-section" id="program">
        <div className="container narrow">
          <p className="kicker center">When you're ready to go all in</p>
          <h2 className="center">The <span className="hl">{program.name}</span></h2>
          <div className="offer">
            <p className="offer-head">Here's everything you get:</p>
            <ul className="stack">
              {program.stack.map((s) => (
                <li key={s.item}>
                  <span className="check" aria-hidden="true">✓</span>
                  <span className="stack-item">{s.item}</span>
                  {s.worth !== null && <span className="worth">{naira(s.worth)}</span>}
                </li>
              ))}
            </ul>

            <div className="price-box">
              {program.price !== null ? (
                <>
                  {program.valuePrice !== null && (
                    <p className="value">Total value: <s>{naira(program.valuePrice)}</s></p>
                  )}
                  <p className="today">Today: <strong>{naira(program.price)}</strong></p>
                </>
              ) : (
                <p className="today small">Message me on WhatsApp for today's price</p>
              )}
              <a className="cta cta-gold-outline" href={enrolLink} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon />
                <span>I Want In: Message Grace</span>
              </a>
            </div>

            <div className="guarantee">
              <div className="seal" aria-hidden="true">
                <span>100%</span>
                <small>Support</small>
              </div>
              <div>
                <h3>{program.guarantee.title}</h3>
                <p>{program.guarantee.body}</p>
              </div>
            </div>
          </div>
          <p className="center muted not-ready">
            Not ready yet? No problem. <a href={site.whatsappGroup} target="_blank" rel="noopener noreferrer">Join the free group first →</a>
          </p>
        </div>
      </section>

      {/* ── About ──────────────────────────────────────── */}
      <section className="section alt">
        <div className="container about">
          <div className="about-photo">
            {site.photo ? (
              <Image src={site.photo} alt={site.brand} fill sizes="300px" />
            ) : (
              <div className="monogram small" aria-hidden="true">G</div>
            )}
          </div>
          <div>
            <p className="kicker">Who's teaching you?</p>
            <h2>Hi, I'm <span className="hl">Grace</span>.</h2>
            <p>
              I'm a YouTube educator, affiliate marketer and content marketer. For the past 2 years I've been
              teaching students, beginners and aspiring online entrepreneurs how to use digital skills and AI to
              create real income opportunities online.
            </p>
            <p>
              My main focus is YouTube automation and monetization: using AI to create content, growing a
              channel, making thumbnails, understanding copyright and getting monetized. I also teach Facebook
              and TikTok monetization, AI automation and AI content creation.
            </p>
            <p className="big-line left">
              My goal is simple: to move you from <em>consuming</em> content to <em>building</em> a skill that
              pays you.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────── */}
      <section className="section">
        <div className="container narrow">
          <h2 className="center">Questions? <span className="hl">Answered.</span></h2>
          <div className="faq">
            {faqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ──────────────────────────────────── */}
      <section className="final">
        <div className="container narrow center">
          <h2>
            A Year From Now, You'll Wish You <span className="hl">Started Today.</span>
          </h2>
          <p className="lead center">
            It's free to join. The only thing it costs you to wait is time.
          </p>
          <Cta label="Join the FREE WhatsApp Group Now" />
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p className="footer-brand">{site.brand}</p>
          <p className="muted">{site.tagline}</p>
          <p className="footer-links">
            <a href={site.whatsappGroup} target="_blank" rel="noopener noreferrer">WhatsApp Community</a>
            <a href={site.tiktok} target="_blank" rel="noopener noreferrer">TikTok</a>
          </p>
          <p className="disclaimer">
            Earnings disclaimer: the screenshots on this page show real results, but they are not typical and are
            not a guarantee of income. YouTube automation is a skill, and results depend on your effort,
            consistency, niche and many factors outside anyone's control. This site is not affiliated with
            YouTube, Google, Meta or TikTok.
          </p>
          <p className="muted small">© {new Date().getFullYear()} {site.brand}. All rights reserved.</p>
        </div>
      </footer>

      {/* ── Floating WhatsApp button ───────────────────── */}
      <a
        className="wa-float"
        href={site.whatsappGroup}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Join the free WhatsApp group"
      >
        <WhatsAppIcon size={30} />
      </a>
    </main>
  );
}
