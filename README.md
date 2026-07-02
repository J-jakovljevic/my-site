# React + TypeScript + Vite

A minimal React + TypeScript setup powered by Vite, with ESLint (flat config), Prettier, and Vitest.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — typecheck and build for production
- `npm run typecheck` — run `tsc` without emitting
- `npm run lint` — run ESLint
- `npm run format` — format the codebase with Prettier
- `npm run format:check` — check formatting without writing
- `npm test` — run tests with Vitest
- `npm run check` — lint, typecheck, test, and build in sequence
- `npm run preview` — preview the production build locally

## ESLint

Configuration lives in `eslint.config.ts` (ESLint 9 flat config) using `typescript-eslint` and `eslint-plugin-react` with the React 18 automatic JSX runtime.

## CI

`.github/workflows/ci.yml` runs lint, test, and build on push and pull requests for all branches.
