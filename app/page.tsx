import Image from "next/image";
import { JoinForm } from "@/components/JoinForm";
import { Logo } from "@/components/Logo";
import { site } from "@/site.config";

const struggles = [
  "You keep seeing flashy posts about online marketing, but nobody explains how it really works.",
  "You don't know where to start, which platform to use, or who to trust.",
  "You've followed “gurus” who promised a lot and taught very little.",
];

const lessons = [
  { t: "How affiliate marketing works", d: "What it is, how affiliate programs and links work, and how to choose products you genuinely believe in." },
  { t: "Content creation", d: "Plan and make simple, useful content for platforms like TikTok, using just your phone." },
  { t: "Selling online, honestly", d: "How to recommend products truthfully, disclose your affiliate links and build trust." },
  { t: "Understanding your audience", d: "Learn who you're talking to, what they need and how your content can help them." },
  { t: "Learning from real mistakes", d: "Real examples of what worked, what didn't, and why, so you don't repeat them." },
  { t: "Building steady habits", d: "A simple, realistic routine for practising and improving week by week." },
];

const steps = [
  { t: "Fill in the form", d: "Tell Grace a little about yourself and what you'd like to learn." },
  { t: "Get the class details", d: "Grace contacts you with everything: what's covered, how classes run and the cost." },
  { t: "Start learning", d: "If it's right for you, join the class and learn step by step." },
];

const faqs = [
  { q: "Do I need any experience?", a: "No. The lessons are made for complete beginners and start from the basics." },
  { q: "What do I need to get started?", a: "A smartphone, an internet connection and a few hours each week to learn and practise." },
  { q: "How much does the class cost?", a: "Grace shares the full class details, including the cost, when she contacts you. You can decide then, with no pressure." },
  {
    q: "Can you promise results?",
    a: "No, and nobody honestly can. Grace Digital Academy teaches skills. Any results you get depend on your effort, your niche, your audience and many factors outside anyone's control.",
  },
  { q: "Is this a network marketing or recruiting scheme?", a: "No. There's nothing to recruit and no one to sign up under you. It's education: courses and tools that teach marketing skills." },
  { q: "How will Grace contact me?", a: "By phone or email, using the details you give in the form. Your details are only used for this." },
];

export default function Home() {
  return (
    <>
      <header className="nav">
        <div className="container nav-inner">
          <a href="#top" className="nav-logo" aria-label={`${site.name}, home`}>
            <Logo />
          </a>
          <a href="#join" className="btn btn-primary btn-sm">Join the class</a>
        </div>
      </header>

      <main id="top">
        {/* ── Hero ───────────────────────────────────────── */}
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">{site.name} · {site.tagline}</p>
              <h1>Learn affiliate marketing <em>the honest way.</em></h1>
              <p className="lead">
                Practical, beginner-friendly lessons on how affiliate marketing actually works: creating content,
                selling online and understanding your audience. No hype. No shortcuts. Just the real process.
              </p>
              <div className="hero-actions">
                <a href="#join" className="btn btn-primary">Join the class</a>
                <a href="#about" className="btn btn-ghost">Meet Grace</a>
              </div>
              <p className="hero-note">For beginners aged 18+ in Nigeria and across Africa.</p>
            </div>
            <div className="hero-photo">
              <Image
                src={site.photo}
                alt={`${site.ownerShort}, founder of ${site.name}`}
                fill
                priority
                sizes="(max-width: 860px) 80vw, 440px"
              />
            </div>
          </div>
        </section>

        {/* ── Struggles ──────────────────────────────────── */}
        <section className="section tint">
          <div className="container narrow center">
            <p className="kicker">Sound familiar?</p>
            <h2>Learning online marketing shouldn't feel this confusing.</h2>
            <ul className="struggles">
              {struggles.map((s) => <li key={s}>{s}</li>)}
            </ul>
            <p className="pull">
              Grace Digital Academy was built for you: clear lessons, real examples and honest answers.
            </p>
          </div>
        </section>

        {/* ── About ──────────────────────────────────────── */}
        <section className="section" id="about">
          <div className="container about">
            <div className="about-photo">
              <Image src={site.photo} alt={site.ownerShort} fill sizes="(max-width: 860px) 60vw, 360px" />
            </div>
            <div>
              <p className="kicker">About</p>
              <h2>Hi, I'm Grace.</h2>
              <p>
                I'm {site.owner}, known as Grace, a digital marketer and the founder of {site.name}. I teach
                beginners how affiliate marketing actually works.
              </p>
              <p>
                I started about two years ago because I saw too many beginners getting burned by flashy promises.
                So I do things differently: I tell it like it is. I show the work, the mistakes and the process,
                so you can learn without being fooled.
              </p>
              <p>
                I share what I learn on TikTok (<a href={site.tiktokUrl} target="_blank" rel="noopener noreferrer">{site.tiktokHandle}</a>)
                and create digital courses and tools that help people build real marketing skills.
              </p>
              <blockquote className="quote">“No hype, no shortcuts, just honest, practical lessons.”</blockquote>
            </div>
          </div>
        </section>

        {/* ── What you'll learn ─────────────────────────── */}
        <section className="section tint" id="learn">
          <div className="container">
            <div className="center narrow">
              <p className="kicker">The lessons</p>
              <h2>What you'll learn</h2>
            </div>
            <div className="cards">
              {lessons.map((l, i) => (
                <article key={l.t} className="card">
                  <span className="card-n">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{l.t}</h3>
                  <p>{l.d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── The honest picture ─────────────────────────── */}
        <section className="section" id="honest">
          <div className="container narrow">
            <div className="center">
              <p className="kicker">Before you join</p>
              <h2>The honest picture</h2>
            </div>
            <div className="honest">
              <article>
                <h3>How affiliate marketing works</h3>
                <p>
                  You recommend another company's product using a special link. If someone buys through your link,
                  that company may pay you a commission. There's no magic to it. It's a skill, and it takes practice.
                </p>
              </article>
              <article>
                <h3>What it takes</h3>
                <ul>
                  <li>Time to learn the basics and practise them</li>
                  <li>Creating content consistently, often for many months</li>
                  <li>Patience: many beginners make few or no sales at first</li>
                  <li>Following each platform's rules and disclosing your affiliate links</li>
                </ul>
              </article>
              <article>
                <h3>What this is not</h3>
                <ul>
                  <li>Not a job offer or an investment</li>
                  <li>Not a shortcut or a “quick results” programme</li>
                  <li>Not network marketing: there's no one to recruit</li>
                  <li>No income or results are promised</li>
                </ul>
              </article>
              <article>
                <h3>How Grace Digital Academy works</h3>
                <p>
                  We sell digital courses and learning tools. You're paying for education and guidance, and the
                  skills you build are yours to use however you choose.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* ── Who it's for ───────────────────────────────── */}
        <section className="section tint">
          <div className="container">
            <div className="center narrow">
              <p className="kicker">Is this for you?</p>
              <h2>Made for curious beginners</h2>
            </div>
            <div className="fit">
              <div className="fit-col">
                <h3>A good fit if you…</h3>
                <ul>
                  <li>Are a student, young professional, or learning alongside work or school</li>
                  <li>Want to understand digital marketing and affiliate selling from the ground up</li>
                  <li>Prefer honest, step-by-step teaching over hype</li>
                  <li>Are ready to practise what you learn</li>
                </ul>
              </div>
              <div className="fit-col muted-col">
                <h3>Probably not for you if you…</h3>
                <ul>
                  <li>Are looking for quick results without learning</li>
                  <li>Don't have time to practise each week</li>
                  <li>Want someone to do the work for you</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── How joining works ──────────────────────────── */}
        <section className="section">
          <div className="container">
            <div className="center narrow">
              <p className="kicker">Simple</p>
              <h2>How joining works</h2>
            </div>
            <ol className="steps">
              {steps.map((s, i) => (
                <li key={s.t}>
                  <span className="step-n">{i + 1}</span>
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── FAQ ────────────────────────────────────────── */}
        <section className="section tint">
          <div className="container narrow">
            <div className="center">
              <p className="kicker">Questions</p>
              <h2>Frequently asked</h2>
            </div>
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

        {/* ── Join ───────────────────────────────────────── */}
        <section className="section join" id="join">
          <div className="container join-grid">
            <div>
              <p className="kicker light">Ready when you are</p>
              <h2>Join the class</h2>
              <p>
                Leave your details and Grace will get in touch with everything you need to know about the next class.
                No pressure, and no obligation.
              </p>
              <p className="join-small">Prefer email? Write to <a href={`mailto:${site.email}`}>{site.email}</a></p>
            </div>
            <div className="form-card">
              <JoinForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <Logo />
            <p className="footer-tag">{site.tagline}.</p>
          </div>
          <div className="footer-links">
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={site.tiktokUrl} target="_blank" rel="noopener noreferrer">TikTok {site.tiktokHandle}</a>
            <a href="/privacy/">Privacy policy</a>
          </div>
        </div>
        <div className="container">
          <p className="disclaimer">
            {site.name} provides education only. It is not a job offer, an investment or a business opportunity,
            and it does not promise any income or results. Results from applying what you learn vary from person to
            person.
          </p>
          <p className="footer-bottom">
            © {new Date().getFullYear()} {site.name} · {site.owner} · {site.location}
          </p>
        </div>
      </footer>
    </>
  );
}
