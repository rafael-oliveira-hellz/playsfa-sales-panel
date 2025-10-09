# Copilot Instructions for AI Agents

## Project Overview
- This is a Next.js (React) web application for a sales panel, using TypeScript, Tailwind CSS, and styled-components.
- The app is organized by feature-based folders under `components/`, with additional logic in `hooks/` and `contexts/`.
- API integrations are handled via Axios instances in `hooks/api.ts`.
- Payment and user flows are split into multi-step forms and specialized components (see `components/MultiStepForm/`, `components/CreditCardPayment/`, `components/PixPayment/`).

## Key Workflows
- **Development:** Start with `npm run dev` or `yarn dev` (see `README.md`).
- **API Routes:** Place under `pages/api/` (e.g., `pages/api/hello.ts`).
- **Styling:** Use Tailwind CSS (see `tailwind.config.js`, `postcss.config.js`) and styled-components (see `components/*/styles.ts`).
- **Global Styles:** Defined in `styles/globals.css` and imported in `pages/_app.tsx`.
- **Analytics:** Vercel Analytics is enabled in `pages/_app.tsx`.
- **Maintenance Mode:** Controlled via `MAINTENANCE_MODE` env variable in `next.config.js` (redirects to `/maintenance.html`).

## Project Conventions
- **Component Structure:** Each feature/component has its own folder with `index.tsx` and `styles.ts`.
- **Type Definitions:** Centralized in `types/` (e.g., `User.ts`, `Plan.ts`, `Error.ts`).
- **API Clients:** Use the exported Axios instances from `hooks/api.ts` for external requests.
- **Responsive Design:** Use Tailwind and media queries in styled-components for mobile support.
- **Assets:** Static images and icons are in `public/` and `pages/assets/`.
- **Custom Hooks:** Place in `components/Hooks/` or `hooks/`.

## Integration Points
- **External APIs:**
  - User API: `https://rafael1963.c37.integrator.host`
  - Pix Payment API: `https://paypixapp.store`
- **Analytics:** Vercel Analytics via `@vercel/analytics/react`.

## Examples
- To add a new payment method, follow the structure in `components/CreditCardPayment/` and `components/PixPayment/`.
- For new API integrations, add a new Axios instance in `hooks/api.ts` and use it in your components.
- For new types, add to `types/` and import as needed.

## Special Notes
- Do not modify files in `pages/api/` unless adding or updating API endpoints.
- Use the provided styled-components patterns for all new custom styles.
- Always update type definitions in `types/` when adding new data models.

Refer to `README.md` for basic setup and Next.js documentation links.