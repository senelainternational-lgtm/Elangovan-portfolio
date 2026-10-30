# Elangovan Rengasamy – Portfolio (React + Vite, JavaScript)
## Run
`npm install` then `npm run dev` (build: `npm run build`).
## Replace assets (put files in `public/assets/`)
- `portrait.jpg` hero portrait (4:5). `about-1.jpg`, `about-2.jpg` biography images (3:4).
- `award-1.mp4` … `award-4.mp4` plus optional `award-N.jpg` posters. Media thumbnails are in `public/assets/images/`.
- Missing files show tidy placeholders. Signature is a cursive font in `Hero.jsx` (swap for an image if desired).
## Edit content
- All text (EN + Tamil): `src/data/translations.js`. Award/media files and links: `src/data/awards.js`, `src/data/media.js`.
- Social, email and mobile links: `social` array and contact `<li>` elements in `src/components/Footer.jsx`.
- Tamil biography sections 2–6 body text currently falls back to English: add `paras` to each Tamil section in `translations.js`.
