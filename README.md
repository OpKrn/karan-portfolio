# Karan — Developer & Creative Technologist

A single-page portfolio built with React, Vite, Tailwind CSS, GSAP, and Lucide.

## Run locally

```sh
npm install
npm run dev
```

Create and preview a production build:

```sh
npm run build
npm run preview
```

## Update portfolio content

Edit [`src/data/portfolio.js`](./src/data/portfolio.js) to update the profile, skills, projects, experience, principles, and current learning topics. Project artwork is original CSS composition in [`src/components/ProjectArtwork.jsx`](./src/components/ProjectArtwork.jsx); it is illustration, not a screenshot of a finished product.

The contact section uses `profile.email` to open a pre-addressed Gmail compose window; update `profile.links` to change social URLs. Empty social links are shown as pending rather than linking to invented destinations. Add each hosted project URL to its `demoUrl` to make its artwork, title, and live-demo action open the project; `repositoryUrl` controls its GitHub action. AI Controller, Truth or Dare, and Flappy Meme Game currently link to hosted pages. Replace the experience descriptions and dates with verified details.

The theme is switchable from the navigation and saved in the browser. The header music player starts with the lo-fi radio stream selected and attempts playback on page load; browser autoplay restrictions may require the visitor to press play. The radio list appears before the bundled browser-compatible MP3 library in `src/assets/music-mp3/`, and the YouTube playlist opens on YouTube. GSAP reveals, parallax, and the orbiting hero ideas/contact rings respect reduced-motion preferences.

## Deploy

For Vercel, import this directory as the project root and use `npm run build` with `dist` as the output directory. For GitHub Pages, publish the generated `dist` directory from a workflow or static-site action. Relative asset paths support project-site URLs as well as root domains.
