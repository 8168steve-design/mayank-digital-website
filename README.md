# MAYANK DIGITAL — 3D Digital Marketing Website

A five-page React + Vite website with a 3D hero, animated service cards, floating WhatsApp and Instagram buttons, and GitHub Pages deployment workflow.

## Before publishing
1. Edit `src/config.ts`.
2. Replace `whatsappNumber` with your WhatsApp number including country code, digits only (India: start with `91`, no `+`).
3. Replace `instagramUrl` with your real Instagram profile.
4. Optionally change email and other social URLs.
5. Do not publish placeholders as your actual contact information.

## Run locally
Install Node.js 20 or newer, then run:
```bash
npm install
npm run dev
```

Test production build:
```bash
npm run build
npm run preview
```

## Upload to GitHub
Create a repository named `mayank-digital-website`. Upload the contents of this folder, including the hidden `.github` folder. The workflow must be at `.github/workflows/deploy.yml`.

## Enable GitHub Pages
Repository → Settings → Pages → Build and deployment → Source: **GitHub Actions**.
Push to the `main` branch. In the Actions tab, wait for the deploy workflow to succeed.

## Custom domain: webmayank.site
This project includes `public/CNAME` containing `webmayank.site`.
In repository Settings → Pages, set the custom domain to `webmayank.site`.
At your DNS provider, configure the apex A records listed in GitHub's official Pages documentation. To use `www`, add a CNAME pointing to `YOUR-GITHUB-USERNAME.github.io`.
Keep email/MX records intact. DNS may take time to update. Enable HTTPS in Pages settings once available.

## Notes
- Routing uses HashRouter, so internal pages work on GitHub Pages.
- WhatsApp opens a prefilled message; the visitor must send it.
- The SEO request and contact forms open WhatsApp; no server/database is included.
- Instagram is a profile link only. Live inbox or analytics requires authorized API integration.
- This project uses free/open-source dependencies. Google Fonts requires an internet connection; fallback fonts are included.
