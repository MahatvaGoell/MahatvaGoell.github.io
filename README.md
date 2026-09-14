# Mahatva Goel — Portfolio

A responsive editorial portfolio built with React, Vite, Tailwind CSS, GSAP and Lenis.

## Run locally

```sh
npm install
npm run dev
```

## Production

```sh
npm run build
npm run preview
```

Vercel settings: framework **Vite**, build command **npm run build**, output directory **dist**. No backend, environment variables or rewrites are required.

## Update content

- Project descriptions, verified repository links, skills and recognition: `src/data/portfolio.js`.
- Page sections and animation setup: `src/App.jsx`.
- Theme, spacing and responsive behavior: `src/index.css`.
- Project visuals and detail view: `src/components/ProjectVisual.jsx` and `ProjectDetail.jsx`.
- Metadata: `index.html`; favicon: `public/favicon.svg`.

The source of truth for Sentinels and Gait Analysis is their public README content as reviewed on September 14, 2026. Pneumonia Detection is explicitly in progress. The project diagrams are illustrative placeholders, not screenshots or measured results. The portrait space and resume remain pending user assets.

The previously supplied abstract signal artwork is retained in `src/assets/` for future use; it is not rendered on the landing page.

## Interaction behavior

Desktop project spreads pin below the navigation at widths of at least 1000px and heights of at least 700px. On smaller screens, short windows, and reduced-motion settings, projects appear vertically. Project navigation also supports buttons and keyboard focus. Details open in a native modal dialog with Escape dismissal and focus restoration. The technology marquee has a pause button.

## Asset replacement

Use a vertical 4:5 portrait for the About section and landscape 16:10 screenshots or plots for the project visuals. Place the resume PDF under `public/` and replace the two unavailable Resume labels with links when ready. No external project demo URL is assumed.
