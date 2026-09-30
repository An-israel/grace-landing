/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: `npm run build` produces a plain `out/` folder that can be
  // hosted free on Netlify, Vercel, GitHub Pages or any static host.
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
