"use client";

import { useState } from "react";
import { site } from "@/site.config";

type Status = "idle" | "sending" | "redirecting";

function whatsappLink(data: FormData) {
  const field = (k: string) => String(data.get(k) ?? "").trim();
  const lines = [
    "Hi Grace, I just filled the form on the Grace Digital Academy website and I'd like the class details.",
    "",
    `Name: ${field("name")}`,
    `Phone: ${field("phone")}`,
    `Email: ${field("email")}`,
  ];
  if (field("goal")) lines.push(`I'd like to learn: ${field("goal")}`);
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(lines.join("\n"))}`;
}

/** Sends a backup copy to Formspree (if configured) without ever blocking the redirect for long. */
async function sendBackup(data: FormData) {
  if (!site.formEndpoint) return;
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 4000);
  try {
    await fetch(site.formEndpoint, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
      signal: controller.signal,
    });
  } catch {
    // The WhatsApp message carries the same details, so a failed backup is fine.
  } finally {
    clearTimeout(timer);
  }
}

export function JoinForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [link, setLink] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const url = whatsappLink(data);
    setStatus("sending");
    await sendBackup(data);
    setLink(url);
    setStatus("redirecting");
    window.location.href = url;
  }

  if (status === "redirecting") {
    return (
      <div className="form-done" role="status">
        <h3>Thank you! Opening WhatsApp…</h3>
        <p>Your details are ready to send to Grace. Just tap send in WhatsApp.</p>
        <a className="btn btn-primary btn-block" href={link}>
          Didn't open? Tap here
        </a>
      </div>
    );
  }

  return (
    <form className="join-form" onSubmit={onSubmit}>
      <input type="hidden" name="_subject" value="New class sign-up: Grace Digital Academy" />
      <div className="field">
        <label htmlFor="name">Full name</label>
        <input id="name" name="name" type="text" autoComplete="name" required />
      </div>
      <div className="field-row">
        <div className="field">
          <label htmlFor="phone">Phone number</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" required />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" autoComplete="email" required />
        </div>
      </div>
      <div className="field">
        <label htmlFor="goal">
          What would you like to learn? <span className="optional">(optional)</span>
        </label>
        <textarea id="goal" name="goal" rows={3} />
      </div>
      <label className="consent">
        <input type="checkbox" name="consent" value="yes" required />
        <span>
          I'm 18 or older and I agree to be contacted about Grace Digital Academy classes. I've read the{" "}
          <a href="/privacy/">privacy policy</a>.
        </span>
      </label>
      <button className="btn btn-primary btn-block" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "One moment…" : "Get the class details"}
      </button>
    </form>
  );
}
