# Posh — Hotel Portfolio Landing Page

A modern, luxury hotel portfolio landing page built with **Next.js 16**, **React 19**, **Tailwind CSS v4**, and **Framer Motion**. Designed to showcase a premium hotel brand with smooth animations, responsive layouts, and a sophisticated aesthetic.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16.2.9 |
| UI Library | React 19.2.4 |
| Styling | Tailwind CSS v4 + PostCSS |
| Animation | Framer Motion 12.42 |
| Typography | Google Fonts (Playfair Display, Montserrat) |
| Icons | Font Awesome 6.5 |
| Maps | Google Maps Embed |
| Language | TypeScript |
| Linter | ESLint (Next.js config) |

## Features

- **Full-screen Hero** — Parallax-zoom background image with staggered fade-up text animations and dual CTA buttons
- **Sticky Navbar** — Shrinks on scroll, mobile overlay menu with framer-motion transitions
- **Booking Widget** — Inline date picker and guest count form with "Check Availability" CTA
- **Hotel Introduction** — Two-column layout with address, contact, and hover-zoom image
- **Parallax Image Section** — Full-viewport background image that moves on scroll using `useScroll` / `useTransform`
- **Feature Grid** — Responsive card grid with background images, gradient overlays, hover effects, and scroll-triggered staggered animations
- **Partner Logos** — Grayscale logo strip that fades to full opacity on hover
- **Contact & Map** — Split panel with social links and an embedded Google Maps iframe
- **Utility Bar** — Top bar with address, phone, directions link, and "Book My Stay" button (visible on large screens)
- **Footer** — Dark bar with copyright, social links, and credit

## Sections

| # | Component | Description |
|---|-----------|-------------|
| 1 | `UtilityBar` | Top contact bar (address, phone, directions, Book My Stay) |
| 2 | `Navbar` | Sticky nav with scroll-shrink, mobile hamburger overlay |
| 3 | `Hero` | Full-screen intro with parallax background and CTAs |
| 4 | `BookingForm` | Check-in / Check-out / Guests form |
| 5 | `HotelIntroduction` | About the hotel with image and contact info |
| 6 | `FullWidthImage` | Scroll-driven parallax full-viewport image |
| 7 | `FeatureGrid` | 5-card feature showcase with hover animations |
| 8 | `PartnerLogos` | Client/partner logo strip |
| 9 | `ContactMap` | Social links + Google Maps embed |
| 10 | `Footer` | Copyright, socials, credits |

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Lint
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── public/                  # Static assets
├── src/
│   ├── app/
│   │   ├── globals.css      # Tailwind imports + global styles
│   │   ├── layout.tsx       # Root layout (fonts, metadata, Font Awesome)
│   │   └── page.tsx         # Home page composing all sections
│   └── components/
│       ├── BookingForm.tsx
│       ├── ContactMap.tsx
│       ├── FeatureGrid.tsx
│       ├── Footer.tsx
│       ├── FullWidthImage.tsx
│       ├── Hero.tsx
│       ├── HotelIntroduction.tsx
│       ├── Navbar.tsx
│       ├── PartnerLogos.tsx
│       └── UtilityBar.tsx
├── next.config.ts           # Next.js config (image remote patterns)
├── package.json
├── tsconfig.json
└── tailwind.config.ts       # Tailwind configuration
```

## Configuration

**Image domains** are whitelisted in `next.config.ts`:

```ts
images: {
  remotePatterns: [
    { protocol: "https", hostname: "images.unsplash.com" },
    { protocol: "https", hostname: "prium.github.io" },
  ],
}
```

**Fonts** are loaded via Next.js built-in font optimization:

- **Playfair Display** — serif headings (`--font-heading`)
- **Montserrat** — sans-serif body (`--font-body`)

## Animations

All scroll-triggered animations use **Framer Motion**:

- `useScroll` + `useTransform` for parallax effects
- `motion.section` with `whileInView` for staggered fade-ups
- `motion.button` / `motion.a` with `whileHover` for interactive scale/glow
- Overlay menu uses `AnimatePresence` for enter/exit transitions

## Deploy

This site is configured for **static export** (`output: "export"` in `next.config.ts`). The production build writes to `out/` and deploys as-is to Cloudflare Pages, Netlify, or any static host.

---

Built by [Girish Lade](https://github.com/girishlade111) — part of [LadeStack](https://ladestack.in)
