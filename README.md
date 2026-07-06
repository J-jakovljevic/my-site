# Jovana Jakovljević - Personal Portfolio

My personal portfolio site, built to reflect the same engineering principles I apply to production software: maintainable architecture, thoughtful UX, performance and attention to detail.

Key features:

- **Animated hero** - a custom Three.js/react-three-fiber particle field that morphs between a grid, a network and an abstract form, lazy-loaded and wrapped in an error boundary so a WebGL failure never breaks the page
- **Responsive navigation** - full nav above 1024px, animated hamburger menu below it; the logo's letter-hop hover animation also replays on tap on screens without real hover
- **Experience timeline** - a line that fills in as you scroll through past roles, plus continuously pulsing timeline dots
- **Filterable projects** - projects page filterable by domain/category
- **Testimonials** - a client recommendation pulled from LinkedIn
- **Contact page** - live current time in my timezone, plus email/LinkedIn/GitHub/phone cards
- **Reduced-motion support** - decorative animations respect `prefers-reduced-motion`
- Scroll progress bar, scroll-to-top on route change and a scroll-down cue on first load

Responsive down to 320px.

## Tech stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Three Fiber / Three.js
- React Router
- react-error-boundary
- usehooks-ts
- ESLint + Prettier
- Vitest + Testing Library
- Husky + lint-staged
- GitHub Actions

## Prerequisites

- Node.js 20 or newer
- npm 10 or newer

## Setup

1. Clone the repository:
   ```
   git clone https://github.com/J-jakovljevic/my-site.git
   cd my-site
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```
4. Open the app in your browser:
   ```
   http://localhost:5173
   ```
5. Build for production:
   ```
   npm run build
   ```
6. Run linting and formatting checks:
   ```
   npm run lint
   npm run format:check
   ```
7. Run tests:
   ```
   npm test
   ```
8. Run all checks at once (lint, typecheck, tests and build):
   ```
   npm run check
   ```

## CI

This repository includes a GitHub Actions workflow that runs on every push and pull request, on all branches. The CI steps are:

- `npm run lint`
- `npm test`
- `npm run build` (which runs `tsc` before building, so this also covers typechecking)

## Application structure

```
src/
├── assets/       - Fonts, images and other static assets
├── components/   - Shared, reusable UI: layout, animation wrappers, error boundaries
├── pages/        - Route-level pages, with page-specific sub-components grouped in matching folders (e.g. pages/home, pages/contact)
├── hooks/        - Reusable stateful logic - media queries, scroll behavior, current time, particle field state
├── data/         - Content for each page (profile, experience, projects, home), decoupled from JSX
├── models/       - Shared TypeScript types for the data files
├── utils/        - Icons, routes, theme constants and small stateless helpers
└── test/         - Vitest setup
```

Key architectural decisions:

- **Path aliases** (`@components`, `@pages`, `@data`, `@hooks`, `@models`, `@utils`, `@assets`) configured in `vite.config.ts` and `tsconfig.json` for cleaner imports.
- **Lazy-loaded, isolated 3D visual** - the hero's Three.js scene is lazy-loaded and wrapped in its own error boundary (`react-error-boundary`), so a WebGL failure or slow chunk never blocks the rest of the page.
- **Reduced-motion aware** - decorative animations (particle field, timeline pulse) check `prefers-reduced-motion` and fall back to a static state.
- **CSS vs JS-driven animation** - the timeline's pulsing dots run on plain CSS `@keyframes` (compositor thread) rather than Framer Motion, so they don't jank when competing with scroll-driven animations on the main thread.

## Hero particle field

The hero background is a custom Three.js scene (via `@react-three/fiber`) that morphs a field of particles through a grid, a network and an abstract form on a loop, with subtle auto-rotation and mouse-driven tilt on larger screens. Particle count and device pixel ratio are tuned separately for mobile so the animation stays smooth without sacrificing sharpness on retina phone screens. The camera framing is tuned so the largest shape never clips against the viewport edges.

## Experience timeline

The timeline's connecting line fills in with an accent color as you scroll through past roles, driven by Framer Motion's scroll progress rather than a spring (springs keep re-simulating on the main thread while catching up to a new scroll position, which competed with the pulsing dots for frame time). The dots themselves pulse via a plain CSS animation so they stay smooth regardless of what else is happening on the main thread during scroll.

## Accessibility

Interactive elements are keyboard-navigable. Purely decorative elements (the particle field, pulsing dots, letter-animation duplicates) are marked `aria-hidden`, with real text provided for screen readers where content is otherwise split into individual animated characters. Animations respect `prefers-reduced-motion` and fall back to a static equivalent.

## Error handling

The 3D hero scene is wrapped in a dedicated error boundary (`react-error-boundary`). Since the particle field is purely decorative, a render error there falls back to rendering nothing rather than a visible error message, keeping the rest of the page fully usable.
