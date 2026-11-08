# RadiusAds (radiusads.biz)

Location-verified brand research and measurement, powered by Measured Reporting.

Astro static site. Deploy: GitHub to Vercel (framework preset: Astro, build `npm run build`, output `dist`).

## Run locally
npm install
npm run dev

## Structure
- `src/data/products.js`: all four study pages and the add-ons are generated from this file. Edit copy and pricing here.
- `src/pages/products/[slug].astro`: product page template
- `src/pages/`: home, agencies, how-it-works, example, privacy, contact
- `src/components/Logo.astro`, `public/favicon.svg`: logo and social/favicon mark
- `src/styles/global.css`: colours (green #1D9E75, orange #E8621A) and shared styles

## Placeholders to replace before launch
- Pricing: `price` fields in `src/data/products.js`, wholesale and referral notes in `src/pages/agencies.astro`
- Tally form: comment block in `src/pages/contact.astro`
- Contact email: `hello@radiusads.biz` in `src/pages/contact.astro`
- Example figures (+X.X%): `src/pages/example.astro`, `src/components/HeroVisual.astro`
- Privacy policy and contest rules links: `src/pages/privacy.astro`
- GA4 tag: comment in `src/layouts/Layout.astro`
