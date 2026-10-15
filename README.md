# Amitesh P — Developer Portfolio

A modern, responsive personal portfolio for **Amitesh P**, built with React, TypeScript, Vite and Tailwind CSS. The visual language (warm paper background, editorial display type, monospaced labels, grid textures, subtle motion and a floating bottom navigation dock) is inspired by `https://www.ajinkya.site/`, with original content and artwork for Amitesh.

## Tech stack

- **React 18** + **TypeScript**
- **Vite 5**
- **Tailwind CSS 3** (CSS-variable design tokens)
- **React Router 6** (section anchors + project detail routes)
- **Lucide React** icons

Motion is handled with CSS transitions/animations plus an `IntersectionObserver` reveal system, which keeps the production bundle at ~75 KB gzipped. All motion respects the operating system's "reduce motion" setting.

## Getting started

```bash
npm install
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # type-check + production build into dist/
npm run preview  # preview the production build
```

## Project structure

```
src/
  App.tsx                 # router + global chrome (Nav dock, Footer)
  index.css               # design tokens, base styles, utilities
  data/
    site.ts               # name, links, email, resume  ← edit personal info here
    projects.ts           # all project content           ← edit projects here
    skills.ts             # skill groups
    certifications.ts     # certifications
  components/             # Hero, About, Skills, Projects, ProjectArt, Certifications, Contact, Nav, Footer …
  pages/
    Home.tsx              # one-page sections
    ProjectDetail.tsx     # /projects/:slug detail pages
public/
  favicon.svg
  og-image.png            # 1200×630 Open Graph card
  robots.txt
vercel.json               # Vercel build + SPA fallback rewrite
```

## Editing content

### Personal info, email and resume — `src/data/site.ts`

```ts
email: "",            // add your address → the Email buttons appear automatically
resumeUrl: null,      // set to "/resume.pdf" → the Resume download button activates
resumeName: "Amitesh_P_Resume.pdf",
```

**Adding your resume**

1. Drop `Amitesh_P_Resume.pdf` into the `public/` folder.
2. In `src/data/site.ts`, set `resumeUrl: "/resume.pdf"` (the file path must match the filename you used).

Until then the Resume button renders in a clearly-labelled disabled state instead of pretending to download.

**Adding your email**

Set `email: "you@example.com"` in `src/data/site.ts`. The contact section and dock update automatically, and any previously hidden `mailto:` buttons appear. No fake contact form is used — only real, direct links.

### Projects — `src/data/projects.ts`

Each project has `title`, `short`, `category`, `status`, `overview`, `highlights`, `stack`, `stackGroups`, `repo`, `demo`, `visual` and optional `problem`, `approach`, `blocks`, `architecture`, `modules` used on the detail page.

**Attaching a repository link** — set `repo` to the real URL, e.g.:

```ts
repo: "https://github.com/Amitesh4/GhostAP",
```

While `repo` is `null`, the card shows *"Repository not published yet"* and the detail page links to the GitHub profile instead of inventing a URL. Only add a `demo` URL when a live deployment actually exists.

The two featured projects (**GhostAP** and the **AI-Powered Autonomous Zero Trust Self-Healing Network**) are marked `featured: true` and are prioritised in the Work section.

### Certifications — `src/data/certifications.ts`

Set `verifyUrl` (and optionally `credentialId`) only when you have the real values. Otherwise the card shows *"Verification link not added yet"* rather than a fabricated one.

## Deployment

The app uses a `BrowserRouter`, so the host must serve `index.html` for unknown paths (SPA fallback).

- **Vercel** — a `vercel.json` is already included. It sets the Vite framework preset and adds the SPA fallback rewrite `/(.*) → /index.html` (Vercel serves real files first, so assets are unaffected). Two ways to deploy:
  1. **Dashboard:** push the repo to GitHub, then *Add New → Project* on Vercel, import the repo and Deploy. Vercel auto-detects Vite (build `npm run build`, output `dist`).
  2. **CLI:** `npm i -g vercel` then run `vercel` (preview) or `vercel --prod` from the project root.
  For a custom domain, add it under *Project → Settings → Domains*.
- **Netlify** — build command `npm run build`, publish directory `dist`. Add a redirect rule `/*  /index.html  200` (or a `public/_redirects` file with that line).
- **GitHub Pages** — set `base` in `vite.config.ts` to `"/<repo-name>/"` and add a `public/404.html` that redirects to `index.html`. (The current config uses `base: "/"` for root-domain hosting.)

Day-to-day: after the first deploy, Vercel rebuilds automatically on every push to the connected branch. Update the canonical URL and Open Graph image URL in `index.html` to your real domain (e.g. `https://<project>.vercel.app/`) before going live.

## Notes on accuracy

All project descriptions are based on the supplied presentations and real repositories. Proposed systems are labelled *"Proposed"* and clearly distinguish design from implementation. No accuracy numbers, recovery times, awards, experience or repository links have been invented.
