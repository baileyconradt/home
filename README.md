# baileyconradt.com

Personal site for Bailey Conradt — rebuilt as a React single-page app
(Vite + React + TypeScript + Tailwind CSS v4 + React Router). Deployed on
Firebase Hosting at **baileyconradt.com**.

## Develop

```bash
npm install      # first time only
npm run dev      # local dev server at http://localhost:5173
npm run build    # type-check + production build into dist/
npm run preview  # preview the production build locally
```

## Where to edit content

Almost all copy and links live in `src/data/` — no component edits needed:

| File                   | What it controls                                            |
| ---------------------- | ---------------------------------------------------------- |
| `src/data/site.ts`     | Name, role, tagline, bio, email, résumé path, social links |
| `src/data/projects.ts` | Project cards (client sites, web apps, mobile)             |
| `src/data/music.ts`    | Local tracks + optional streaming embeds                   |
| `src/data/experience.ts` | Experience timeline on the About page                    |

Search the codebase for `TODO` to find every spot that needs your input
(demo URLs, NoCap App Store link, updated bio, etc.).

### Adding a project

Add an object to the `projects` array in `src/data/projects.ts`. Set
`featured: true` to surface it on the home page. If you don't provide an
`image`, the card renders a colored gradient with the project's first letter —
set `gradient: ["#hex", "#hex"]` to pick the colors. Images go in
`public/images/` and are referenced as `/images/yourfile.png`.

### Adding music

- **Local files:** drop audio into `public/songs/` and add a `Track` to the
  `tracks` array in `src/data/music.ts`.
- **Streaming embeds:** paste Spotify / YouTube / SoundCloud links into the
  `embeds` array in the same file — they render above the local tracks.

### Contact form

The contact form composes a `mailto:` link (no backend). To accept messages
without the visitor needing a mail client, create a free
[Formspree](https://formspree.io) form and change the form in
`src/pages/Contact.tsx` to POST to your endpoint.

## Static assets & legacy pages

Files in `public/` are served verbatim at the site root. The old static site's
blog and podcast pages are intentionally **buried** (not in the nav) but still
reachable so old links don't break:

- `/blog.html`
- `/podcast.html`

They're linked under "Archive" in the footer. The full pre-React site is
preserved in `legacy-site/` (gitignored; also in git history).

## Deploy (Firebase Hosting)

`firebase.json` is configured to serve the `dist/` build with SPA rewrites.

```bash
npm run build
firebase deploy --only hosting
# or the shortcut:
npm run deploy
```

You'll need the Firebase CLI (`npm i -g firebase-tools`) and to be logged in
(`firebase login`) to the `personal-site-e4f88` project.
