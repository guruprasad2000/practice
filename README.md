# SignScope — Premium Branding & Signage Website

A modern, responsive static website for **SignScope**, a company specializing in signage solutions, branding, printing, exhibitions, and interior/exterior works.

Built with **React + Vite + Tailwind CSS**.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm (comes with Node.js)

### Installation & Run

```bash
# 1. Navigate into the project folder
cd signscope

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The site will be available at **http://localhost:5173/**

### Build for Production

```bash
cd signscope
npm run build
```

The output will be in the `signscope/dist/` folder, ready to deploy to any static hosting service.

### Preview Production Build

```bash
cd signscope
npm run preview
```

---

## Project Structure

```
signscope/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── Navbar.jsx        # Sticky navbar with mobile menu
│   │   ├── Footer.jsx        # Site footer
│   │   ├── SectionHeading.jsx # Animated section headings
│   │   └── ScrollToTop.jsx    # Scroll reset on navigation
│   ├── pages/            # Route pages
│   │   ├── Home.jsx          # Landing page with hero, services, projects
│   │   ├── About.jsx         # Company info, vision, mission, timeline
│   │   ├── Services.jsx      # Detailed service listings
│   │   ├── Projects.jsx      # Filterable project gallery
│   │   ├── Quote.jsx         # Multi-step quote form
│   │   └── Contact.jsx       # Contact form and info
│   ├── hooks/
│   │   └── useScrollAnimation.js  # Scroll-triggered animation hook
│   ├── App.jsx           # Root component with routing
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles & Tailwind config
├── index.html
├── vite.config.js
└── package.json
```

---

## Pages Overview

| Page       | Route       | Description                                      |
|------------|-------------|--------------------------------------------------|
| Home       | `/`         | Hero, services preview, featured projects, CTA   |
| About      | `/about`    | Company story, vision/mission, timeline           |
| Services   | `/services` | 6 detailed service cards with features            |
| Projects   | `/projects` | Filterable gallery (Signage/Interior/Exhibition)  |
| Quote      | `/quote`    | 5-step interactive quote estimator                |
| Contact    | `/contact`  | Contact form, info cards, map placeholder         |

---

## Tech Stack

- **React 19** — UI framework
- **Vite** — Build tool
- **Tailwind CSS 4** — Utility-first styling
- **React Router** — Client-side routing
- **Lucide React** — Icon library

---

## Design

- **Primary Color:** Orange (`#ff6b00`)
- **Secondary Color:** Dark Blue (`#0f172a`)
- **Font:** Poppins (Google Fonts)
- **Features:** Scroll animations, hover effects, glassmorphism, mobile-first responsive design
