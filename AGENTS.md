# Project CISPOLY - Agent Guide

This document provides an overview of the CISPOLY project and guidelines for AI agents working on it.

## 1. Project Overview
CISPOLY is a React-based web application focused on presenting clinical research and product information for methylation-based cancer triage (CISCER, CISENDO, CISOVA). The application serves as an interactive, data-driven narrative website with blog functionality.

## 2. Tech Stack
- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite
- **Routing**: React Router DOM (v7)
- **Styling**: Tailwind CSS (currently loaded via CDN in `index.html`, though local config exists)
- **UI Components**: 
  - Icons: `lucide-react`
  - Charts: `recharts`, `echarts`, `echarts-for-react`
  - Animations: `framer-motion`
- **State Management**: React Context (`LanguageContext`)
- **SEO**: `react-helmet-async`
- **Content**: Markdown-based blog system (`react-markdown`, `remark-gfm`, `front-matter`)

## 3. Project Structure
```
CISPOLY/
├── public/              # Static assets (images, favicon, blog posts)
│   ├── blog/            # Markdown blog posts
│   └── ...
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── pages/       # Full page components (lazy loaded)
│   │   ├── map/         # Map related components
│   │   └── ...          # Shared components (Navigation, Hero, etc.)
│   ├── contexts/        # React Context providers (LanguageContext)
│   ├── services/        # Data services (e.g., blogService)
│   ├── types/           # TypeScript definitions
│   ├── utils/           # Utility functions (markdownParser)
│   ├── App.tsx          # Main application layout and routing
│   ├── main.tsx         # Entry point
│   └── constants.ts     # Static data (Studies, Guidelines)
├── index.html           # Entry point with Tailwind CDN config
├── vite.config.ts       # Vite configuration
└── package.json         # Dependencies and scripts
```

## 4. Domain Concepts
- **Products**:
  - **CISCER**: Cervical cancer triage (PAX1/JAM3 methylation).
  - **CISENDO**: Endometrial cancer detection.
  - **CISOVA**: Ovarian cancer detection.
- **Data Models**:
  - **Studies**: Clinical study data defined in `constants.ts`.
  - **Guidelines**: Clinical guidelines defined in `constants.ts`.
  - **Blog Posts**: Markdown files in `public/blog/` with front-matter metadata.

## 5. Development Guidelines

### Styling
- **Tailwind CSS**: The project currently uses Tailwind CSS via CDN defined in `index.html`.
- **Theme**: Custom colors (`rose`, `teal`, `slate`) and fonts (`Inter`, `Playfair Display`) are configured in the `script` tag within `index.html`.
- **Classes**: Use Tailwind utility classes for all styling needs.

### Components
- **Functional Components**: Use React functional components with Hooks.
- **Routing**: Use `react-router-dom` for navigation. Pages are lazy-loaded in `App.tsx`.
- **Localization**: All text should use the `useLanguage` hook to support bilingual (English/Chinese) content.

### Data Management
- **Static Data**: Modifications to study data or guidelines should be made in `constants.ts`.
- **Blog Content**: New blog posts should be added as directories in `public/blog/` with `index.md` (and optional localized versions).
- **Types**: Ensure all new data structures are typed in `src/types.ts` or `src/types/`.

### Assets
- **Icons**: Use `lucide-react` for iconography.
- **Images**: Place images in `public/`.

## 6. Key Files
- `index.html`: Global styles, Tailwind CDN config, meta tags.
- `src/App.tsx`: Routing configuration and main layout.
- `src/constants.ts`: Central repository for static content/data.
- `src/services/blogService.ts`: Logic for fetching and parsing blog posts.
