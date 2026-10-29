# Leyang Li’s personal website

A static Astro website for my research, education, projects, and interests.

## Development

```sh
bun install
bun run dev
```

## Validation

```sh
bun run check
bun run build
bun run preview
```

## Content

- `src/pages/index.astro`: research overview, publications, education, experience, honors, and skills.
- `src/pages/projects/index.astro`: research, personal, and course projects.
- `src/pages/about/index.astro`: background, paintings, and hiking.
- `src/site.config.ts`: site metadata and navigation.
- `src/assets/styles/app.css`: shared layout and styles.
- `public/Leyang_CV.pdf`: downloadable CV.

The site uses Astro and the Astro Pure integration. The original theme license is retained in `LICENSE`. GitHub Actions builds and deploys the site to GitHub Pages when changes are pushed to `main`.
