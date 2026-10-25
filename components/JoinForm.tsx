"use client";

import { useState } from "react";
import { site } from "@/site.config";

type Status = "idle" | "sending" | "sent" | "error";

export function JoinForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!site.formEndpoint) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(site.formEndpoint, {
        method: "POST",
        body: new FormData(e.currentTarget),
        headers: { Accept: "application/json" },
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="form-done" role="status">
        <h3>Thank you, you're on the list.</h3>
        <p>Grace will reach out to you with the class details soon. Keep learning!</p>
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
        {status === "sending" ? "Sending…" : "Get the class details"}
      </button>
      {status === "error" && (
        <p className="form-error" role="alert">
          Sorry, that didn't go through. Please try again, or email{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      )}
    </form>
  );
}
