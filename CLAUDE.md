# CLAUDE.md

## Commands
- **Dev Server**: `npm run dev` (Runs Vite)
- **Build**: `npm run build` (Builds for production)
- **Preview**: `npm run preview` (Preview production build)

## Tech Stack
- **Frontend**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS (CDN-based in `index.html`)
- **Routing**: React Router DOM v7
- **State**: Context API (`LanguageContext`)
- **Charts**: Recharts, ECharts

## Code Style Guidelines
- **Components**: Functional components with hooks.
- **Typing**: Strict TypeScript usage. Define interfaces in `src/types.ts` or component-specific files.
- **Naming**: PascalCase for components, camelCase for functions/variables.
- **File Structure**: Group related components. Pages in `src/components/pages`.
- **Routing**: Use `react-router-dom` hooks (`useLocation`, `useNavigate`, etc.).
- **Localization**: Use `useLanguage` hook for text content.
- **Imports**: Use relative imports.
- **Styling**: Use Tailwind utility classes. Avoid inline styles where possible.

## Project Structure
- `src/components/pages`: Route components (lazy loaded).
- `src/contexts`: Context providers.
- `src/constants.ts`: Static data configuration.
- `public/blog`: Markdown blog content.
