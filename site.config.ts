// ─────────────────────────────────────────────────────────────────────────────
// EDIT THIS FILE to change the page. Everything Grace will want to update
// (links, prices, photo, testimonials) lives here — no need to touch the design.
// ─────────────────────────────────────────────────────────────────────────────

export const site = {
  brand: "Grace The Marketer",
  topic: "YouTube & AI Automation",
  tagline: "Learn Digital Skills. Use AI. Build Your Income Online.",

  // Main call to action: the FREE WhatsApp community.
  whatsappGroup: "https://chat.whatsapp.com/E6BeB80yxm1IkArmAHCd7L",

  // Direct chat, used only for the paid program ("I want to enrol").
  whatsappNumber: "2347049709807",
  enrolMessage: "Hi Grace, I saw your page and I want to join the YouTube Automation program.",

  tiktok: "https://www.tiktok.com/@grace.the.markete0",

  // Grace's photo (public/grace.webp). Set to null to show a monogram instead.
  photo: "/grace.webp" as string | null,

  // AI-generated hero background. Save the image as public/hero-bg.webp (or .jpg)
  // and set this to its path, e.g. "/hero-bg.webp". While null, a red glow is used.
  heroBackground: "/hero-bg.webp" as string | null,

  // Scarcity line shown in the top bar, under the hero button and on the offer.
  slotsMessage: "Limited 1-on-1 slots available",

  credit: { label: "SwiftCreator", url: "https://swiftcreator.vercel.app/" },
};

export const program = {
  name: "YouTube Automation Blueprint",

  // Prices in Naira. Leave as null to show "Message Grace for today's price".
  // Example: price: 25000, valuePrice: 150000
  price: null as number | null,
  valuePrice: null as number | null,

  // The value stack. Set `worth` (in Naira) to show a crossed-out value per item.
  stack: [
    { item: "Step-by-step YouTube Automation training — channel setup to monetization", worth: null as number | null },
    { item: "AI content system — scripts, voiceovers and videos without showing your face", worth: null as number | null },
    { item: "Thumbnail training — make thumbnails people actually click", worth: null as number | null },
    { item: "Copyright made simple — avoid strikes and protect your channel", worth: null as number | null },
    { item: "Facebook & TikTok monetization — get paid on more than one platform", worth: null as number | null },
    { item: "One-on-one support — ask questions and get unstuck, fast", worth: null as number | null },
  ],

  guarantee: {
    title: "The “I Won't Leave You” Guarantee",
    body:
      "Follow every step, do every task, and post consistently. If your channel still isn't set up, publishing and on the road to monetization, I'll keep coaching you — free — until it is. You don't pay again. I don't give up on you.",
  },
};

// Proof screenshots in public/proof/. Captions describe only what the
// screenshot itself shows.
export const proof = [
  {
    src: "/proof/viral-video.webp",
    alt: "YouTube Studio: one video with 395,940 views, 208.2K watch hours and $7,654.40 estimated revenue",
    headline: "$7,654.40 from ONE video",
    caption: "395,940 views · 208.2K watch hours · +2.7K subscribers",
    wide: true,
  },
  {
    src: "/proof/revenue-april.webp",
    alt: "YouTube Studio: $3,082.22 estimated revenue in April and $480.66 in the last 28 days",
    headline: "$3,082.22 in April",
    caption: "99.5% from Watch Page ads",
  },
  {
    src: "/proof/revenue-july.webp",
    alt: "YouTube Studio: $631.42 estimated revenue in July",
    headline: "$631.42 in July",
    caption: "Consistent daily earnings",
  },
  {
    src: "/proof/student-partner.webp",
    alt: "WhatsApp chat: a student's channel accepted into the YouTube Partner Program with 7,395 subscribers",
    headline: "Student: “You're a YouTube Partner”",
    caption: "7,395 subscribers · 67.6K views in 28 days",
  },
];

// Written testimonials. Add real ones like:
// { name: "Chioma A.", location: "Lagos", result: "Monetized in 3 months", quote: "..." }
// The section stays hidden until at least one is added.
export const testimonials: { name: string; location?: string; result?: string; quote: string }[] = [];
