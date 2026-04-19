# Swanky Home Services

A modern, responsive business website built for **Swanky Home Services**, a home services company based in Cypress, Orange County, CA specializing in solar panel cleaning, window cleaning, gutter maintenance, and holiday lighting.

## Live Site
> _https://swankyhomeservices.com/_

---

## Overview

This project is a full redesign and migration of an existing React website to a refined, dark-themed design system. The site serves as the company's primary web presence — driving leads through an integrated booking system and showcasing real customer reviews.

---

## Tech Stack

- **React** — component-based UI
- **Vite** — fast dev server and build tooling
- **Tailwind CSS** — utility-first styling with custom CSS design tokens
- **Lucide React** — icon library
- **Google Fonts** — Playfair Display (display) + Inter (body)

---

## Features

- Fully responsive design across mobile, tablet, and desktop
- Custom CSS variable design system (colors, typography, spacing)
- Smooth scroll navigation with per-section offset handling
- Hero section with full-viewport background image and CTA buttons
- Services grid with hover interactions
- Before & After section showcasing real cleaning results
- Testimonials grid pulling from real Google reviews, linked to Google Maps
- Integrated booking via **Jobber** client hub (estimate request flow)
- Click-to-call button (`tel:` link) in navbar and hero
- Mobile hamburger menu with animated open/close

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

---

## Project Structure

```
src/
├── assets/          # Images, logo, icons
├── components/      # Navbar, Hero, Services, About, Reviews, Contact, Footer
├── constants/       # Nav link definitions
├── style.js         # Shared Tailwind utility class strings
├── App.jsx          # Root layout
└── index.css        # Global styles, CSS variables, Tailwind directives
```

---

## Acknowledgements

Built for a small detailing and cleaning business. Designed to convert visitors into booked clients through clear CTAs, trust signals (5.0 ★ Google rating), and a clean professional aesthetic.
