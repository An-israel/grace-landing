# Grace The Marketer: landing page

A one-page, Hormozi-style sales page for **YouTube & AI Automation**, built with Next.js and exported as a static site.

## Edit the content

Everything you'll want to change is in **`site.config.ts`**:

- WhatsApp group link and phone number
- Program name, price and value price (in ₦)
- Guarantee wording
- Written testimonials (the section appears once you add one)
- Photo: `public/grace.webp`
- Hero background: save the AI image as `public/hero-bg.webp` (or `.jpg`), then set `heroBackground: "/hero-bg.webp"`
- Scarcity line (`slotsMessage`) and the footer credit

## Run it

```bash
npm install
npm run dev     # preview at http://localhost:3000
npm run build   # creates the static site in out/
```

## Host it (free)

Upload the `out/` folder to Netlify Drop, or connect this repo to Vercel or Netlify. The build command is `npm run build` and the output folder is `out`.
