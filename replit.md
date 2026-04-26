# pw-eleventy-starter

A starter template for Eleventy (11ty) static site projects using Handlebars as the templating engine.

## Tech Stack

- **Static Site Generator:** Eleventy (11ty) v3.x
- **Templating:** Handlebars (via `@11ty/eleventy-plugin-handlebars`)
- **Styling:** Plain CSS
- **Scripting:** Plain JavaScript
- **Package Manager:** npm

## Project Structure

- `build/` — Source directory (Eleventy input)
  - `index.hbs` — Main landing page
  - `style.css` — Global styles
  - `script.js` — Client-side JavaScript
  - `_includes/` — Layouts and partials
    - `layout.hbs` — Base HTML layout
    - `head.hbs` — `<head>` partial
- `dist/` — Output directory (generated, not committed)
- `.eleventy.js` — Eleventy configuration

## Development

- **Start dev server:** `npm start` (runs on port 5000, host 0.0.0.0)
- **Build:** `npm run build` (outputs to `dist/`)

## Deployment

Configured as a static site deployment:
- **Build command:** `npm run build`
- **Public directory:** `dist/`
