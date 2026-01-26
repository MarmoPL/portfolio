# Marcin Czembrowski - Portfolio

A modern, animated portfolio website showcasing my projects and skills.

## Tech Stack

- **Framework:** Next.js 15 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **i18n:** next-intl (English & Polish)
- **Icons:** Lucide React
- **Deployment:** GitHub Pages

## Features

- Dark theme with orange/amber accent colors
- Smooth scroll animations and micro-interactions
- Responsive design (mobile-first)
- Bilingual support (EN/PL) with language switcher
- Dedicated project pages with timelines
- Static export for GitHub Pages hosting

## Project Structure

```
src/
├── app/
│   ├── [locale]/           # Locale-based routing
│   │   ├── page.tsx        # Home page
│   │   └── projects/
│   │       └── marmo-edu/  # Marmo EDU dedicated page
│   └── globals.css
├── components/
│   ├── layout/             # Navbar, Footer, LanguageSwitcher
│   ├── sections/           # Hero, About, Skills, Projects, Contact
│   ├── projects/           # Timeline, AwardShowcase
│   └── ui/                 # Reusable components
├── i18n/                   # Translations (en.json, pl.json)
└── lib/                    # Utilities
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
npm run build
```

Static files will be generated in the `out/` directory.

## Deployment

This site is configured for automatic deployment to GitHub Pages via GitHub Actions.

1. Push to the `main` branch
2. GitHub Actions will build and deploy automatically
3. Site will be available at `https://<username>.github.io/portfolio/`

## Customization

### Adding Images

Replace placeholder images in `public/images/`:
- Project screenshots
- Profile photo
- Award certificates

### Updating Content

Edit translation files in `src/i18n/`:
- `en.json` - English content
- `pl.json` - Polish content

### Updating Social Links

Edit `src/components/sections/Contact.tsx` to update:
- GitHub URL
- LinkedIn URL
- Email address

## License

MIT
