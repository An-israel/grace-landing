# Grace Digital Academy: website

A clean, minimal one-page site for **Grace Digital Academy**, which teaches beginners affiliate marketing, plus a privacy policy page. Built with Next.js and exported as a static site.

## How the sign-up form works

When a visitor submits the form, WhatsApp opens with a chat to Grace (`whatsappNumber` in `site.config.ts`), and their name, phone, email and learning goal are already typed into the message. The page itself shows no WhatsApp links.

Optional: to also receive every sign-up by email, create a free form at https://formspree.io and paste its endpoint into `formEndpoint` in `site.config.ts`.

## Edit the content

Contact details, the TikTok handle and the photo are in **`site.config.ts`**. Page text is in `app/page.tsx`, and the privacy policy is in `app/privacy/page.tsx`.

The page is written to pass TikTok ad review. When editing, keep to the rules listed at the top of `site.config.ts`: no income claims or earnings screenshots, no guarantees, no fake urgency, no visible WhatsApp/Telegram links on the page and no other brands' logos.

## Run it

```bash
npm install
npm run dev     # preview at http://localhost:3000
npm run build   # creates the static site in out/
```

## Host it (free)

Connect this repo to Vercel or Netlify. The build command is `npm run build` and the output folder is `out`.
