# Project CISPOLY - Agent Guide

This document provides an overview of the CISPOLY project and guidelines for AI agents working on it.

## 1. Project Overview
CISPOLY is a React-based web application focused on presenting clinical research and product information for methylation-based cancer triage (CISCER, CISENDO, CISOVA). The application serves as an interactive, data-driven narrative website.

## 2. Tech Stack
- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS (loaded via CDN in `index.html`)
- **UI Components**: 
  - Icons: `lucide-react`
  - Charts: `recharts`
  - Animations: `framer-motion`
- **State Management**: React Context (`LanguageContext`) + Local State

## 3. Project Structure
```
CISPOLY/
├── components/          # Reusable UI components
│   ├── pages/           # Full page components (e.g., HomePage, CiscerPage)
│   └── ...              # Shared components (e.g., Navigation, Hero)
├── contexts/            # React Context providers (LanguageContext)
├── App.tsx              # Main application layout and routing logic
├── constants.ts         # Static data (Studies, Guidelines)
├── types.ts             # TypeScript interfaces and types
├── index.html           # Entry point with Tailwind CDN config
└── vite.config.ts       # Vite configuration
```

## 4. Domain Concepts
- **Products**:
  - **CISCER**: Cervical cancer triage (PAX1/JAM3 methylation).
  - **CISENDO**: Endometrial cancer detection.
  - **CISOVA**: Ovarian cancer detection.
- **Data Models**:
  - **Studies**: Clinical study data defined in `constants.ts`.
  - **Guidelines**: Clinical guidelines defined in `constants.ts`.

## 5. Development Guidelines

### Styling
- **Tailwind CSS**: The project uses Tailwind CSS via CDN.
- **Theme**: Custom colors (`rose`, `teal`, `slate`) and fonts (`Inter`, `Playfair Display`) are configured in the `script` tag within `index.html`.
- **Recommendation**: Continue using Tailwind utility classes for all styling needs.

### Components
- **Functional Components**: Use React functional components with Hooks.
- **Navigation**: The app uses a simple state-based navigation (`activeProduct` state in `App.tsx`) rather than `react-router`.
- **Localization**: All text should ideally use the `useLanguage` hook to support bilingual (English/Chinese) content.

### Data Management
- **Static Data**: Modifications to study data or guidelines should be made in `constants.ts`.
- **Types**: Ensure all new data structures are typed in `types.ts`.

### Assets
- **Icons**: Use `lucide-react` for iconography.
- **Images**: Ensure images are placed in `public/` or imported correctly.

## 6. Key Files
- `index.html`: Contains global styles and Tailwind config.
- `App.tsx`: Handles main layout and "routing".
- `constants.ts`: Central repository for content/data.
