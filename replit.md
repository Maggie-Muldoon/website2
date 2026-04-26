# Clara Woods Art — Live Event Artist Website

A mobile-friendly one-pager for a live art business, built with Eleventy (11ty) and Handlebars templates.

## Tech Stack

- **Static Site Generator:** Eleventy (11ty) v3.x
- **Templating:** Handlebars (via `@11ty/eleventy-plugin-handlebars`)
- **Styling:** Plain CSS + Tailwind CSS (via Play CDN)
- **Icons:** Lucide (via unpkg CDN)
- **Fonts:** Playfair Display (via Google Fonts)
- **Scripting:** Vanilla JavaScript
- **Package Manager:** npm

## Project Structure

- `build/` — Source directory (Eleventy input)
  - `index.hbs` — Main one-pager (hero, portfolio, services, footer/contact)
  - `style.css` — Custom CSS (animations, hero shape, portfolio cards, service cards)
  - `script.js` — Mobile portfolio slider (vanilla JS)
  - `images/` — AI-generated photos (hero, portfolio paintings, face painting)
  - `favicon.png` — Site favicon
  - `_includes/` — Layouts and partials
    - `layout.hbs` — Base HTML layout (Tailwind CDN, Google Fonts, Lucide CDN)
    - `head.hbs` — `<head>` partial (meta tags, SEO)
- `dist/` — Output directory (generated, not committed)
- `.eleventy.js` — Eleventy configuration
- `artifacts/mockup-sandbox/` — React/Vite mockup sandbox (design exploration only)

## Page Sections

1. **Sticky Header** — Artist name, nav links (Portfolio, Services, Contact), Book Now CTA
2. **Hero** — Tagline, intro text, golden-hour artist photo (two-column on desktop)
3. **Fine Art Portfolio** — Swipeable slider on mobile, 3-column grid with hover reveals on desktop
4. **Live Art Services** — Four cards: Weddings, Guest Portraits, Landscape Painting, Face Painting
5. **Footer / Contact** — Dark CTA section with email, location, social handle, booking button

## Color Palette

- Cream `#faf8f5` — Page background
- Copper `#a67c52` — Brand accent / buttons
- Espresso `#2b2623` — Footer background / headings
- Sand `#e6d5c3`, Linen `#f0e6d8` — Secondary backgrounds

## Development

- **Start dev server:** `npm start` (runs on port 5000, host 0.0.0.0)
- **Build:** `npm run build` (outputs to `dist/`)

## Deployment

Configured as a static site deployment:
- **Build command:** `npm run build`
- **Public directory:** `dist/`
