# Grace Digital Academy: website

A clean, minimal one-page site for **Grace Digital Academy**, which teaches beginners affiliate marketing, plus a privacy policy page. Built with Next.js and exported as a static site.

## Before going live: connect the sign-up form

1. Create a free account at https://formspree.io with Grace's email, then create a new form.
2. Copy the form endpoint, e.g. `https://formspree.io/f/abcdwxyz`.
3. Paste it into `formEndpoint` in `site.config.ts`.

Until this is done, the form shows a "didn't go through" message with Grace's email address.

## Edit the content

Contact details, the TikTok handle and the photo are in **`site.config.ts`**. Page text is in `app/page.tsx`, and the privacy policy is in `app/privacy/page.tsx`.

The page is written to pass TikTok ad review. When editing, keep to the rules listed at the top of `site.config.ts`: no income claims or earnings screenshots, no guarantees, no fake urgency, no WhatsApp/Telegram links and no other brands' logos.

## Run it

```bash
npm install
npm run dev     # preview at http://localhost:3000
npm run build   # creates the static site in out/
```

## Host it (free)

Connect this repo to Vercel or Netlify. The build command is `npm run build` and the output folder is `out`.
