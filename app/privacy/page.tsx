import type { Metadata } from "next";
import { Logo } from "@/components/Logo";
import { site } from "@/site.config";

export const metadata: Metadata = {
  title: `Privacy policy | ${site.name}`,
  description: `How ${site.name} collects and uses your information.`,
};

export default function Privacy() {
  return (
    <>
      <header className="nav">
        <div className="container nav-inner">
          <a href="/" className="nav-logo" aria-label={`${site.name}, home`}>
            <Logo />
          </a>
          <a href="/" className="btn btn-ghost btn-sm">Back to home</a>
        </div>
      </header>
      <main className="section">
        <article className="container narrow legal">
          <h1>Privacy policy</h1>
          <p className="muted">Last updated: October 2026</p>

          <p>
            This policy explains how {site.name} (“we”, “us”), run by {site.owner} in {site.location}, collects
            and uses your information when you use this website.
          </p>

          <h2>What we collect</h2>
          <p>
            When you fill in the sign-up form, we collect your name, phone number, email address and anything you
            choose to write about what you'd like to learn. We don't collect payment details on this website.
          </p>

          <h2>How we use it</h2>
          <ul>
            <li>To contact you with details about our classes, courses and learning tools</li>
            <li>To answer your questions</li>
          </ul>
          <p>We don't sell your information or share it with anyone for their own marketing.</p>

          <h2>How it's stored</h2>
          <p>
            Form entries are delivered to us through a form-processing service (Formspree) and kept only as long as
            we need them to stay in touch with you about classes.
          </p>

          <h2>Your choices</h2>
          <p>
            You can ask us at any time to stop contacting you, or to see, correct or delete your information, by
            emailing <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>

          <h2>Age</h2>
          <p>This website and our classes are intended for people aged 18 and over.</p>

          <h2>Contact</h2>
          <p>
            Questions about this policy? Email <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        </article>
      </main>
      <footer className="footer">
        <div className="container">
          <p className="footer-bottom">
            © {new Date().getFullYear()} {site.name} · {site.location}
            <span className="credit">
              Built by <a href={site.credit.url} target="_blank" rel="noopener noreferrer">{site.credit.label}</a>
            </span>
          </p>
        </div>
      </footer>
    </>
  );
}
