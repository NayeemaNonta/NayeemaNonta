# Nayeema Nonta

**Personal homepage:** [nayeemanonta.github.io/NayeemaNonta](https://nayeemanonta.github.io/NayeemaNonta/)

Next.js, TypeScript, and Tailwind CSS portfolio site for Nayeema Nonta.

## Run locally

```bash
npm install
npm run dev
```

The local site runs at `http://localhost:3000`.

## Verify

```bash
npm run typecheck
npm run lint
npm run build
```

For GitHub Pages static export under `/NayeemaNonta`:

```bash
npm run build:github
```

## Edit content

- Profile, hero text, and social links: `data/profile.ts`
- Research themes and featured research cards: `data/research.ts`
- Publications, links, and BibTeX: `data/publications.ts`
- Projects, thumbnails, reports, and code links: `data/projects.ts`
- News and media items: `data/news.ts`
- Teaching/service content is preserved but hidden in `data/teaching.ts` and `app/_teaching/page.tsx`
- CV education, experience, skills, and awards: `data/cv.ts`
- Public assets: `public/`

The GitHub Actions workflow in `.github/workflows/deploy.yml` builds and deploys the static export to GitHub Pages.
