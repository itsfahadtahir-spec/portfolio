# Build brief: Fahad Tahir portfolio

You're building a two-page static portfolio site for Fahad Tahir, a Dubai finance professional who also builds finance automation. Recruiters and hiring managers will open it from a LinkedIn or WhatsApp link, usually on a phone, and spend under a minute on it. The site's one job is to get them to download his CV or email him.

## What to build

1. `index.html`: the home page. Copy in `docs/copy/home.md`.
2. `working-capital-agent/index.html`: the project page. Copy in `docs/copy/working-capital-agent.md`.
3. One shared `styles.css` and, if needed, one small `main.js`.

Plain HTML, CSS and vanilla JavaScript. No framework, no build step, no component library. It deploys to GitHub Pages from the `main` branch root.

## Sources of truth, in this order

1. `docs/copy/*.md` for every word on the page. Don't rewrite, shorten or add copy. If something reads wrong, flag it in the PR instead of changing it.
2. `docs/brand-guidelines.md` for colours, type, spacing, radius, shadows, motion, components and voice rules. Copy its `:root` token block into `styles.css` unchanged and style everything through those tokens.
3. `docs/brand-guidelines.html` is the visual reference. Open it in a browser to see how each component should look.

## Rules that matter most

- **Colour:** navy `#1C2233` for text and primary buttons, page background `#F3F3F1`, white cards, and champagne `#E6DAC3` as the only accent. Champagne is a highlight fill behind one key number per view, and nothing else. No other colours, no gradients.
- **Type:** Geist for text, Geist Mono for every number, date, currency and percentage, with `font-variant-numeric: tabular-nums`. Load both from Google Fonts as shown in the guide.
- **One primary button per view:** Download CV. Everything else is secondary or ghost.
- **Photos:** `fahad-walking.png` is the hero, on the right, so he faces the headline. The headshot appears only in the About section, in a circle. Never place text or a highlight over a photo.
- **TODO(confirm):** anything marked this way is waiting on Fahad. Leave that element out of the build and list every one in the PR description.
- **Motion:** subtle only, using the guide's duration and easing tokens. Content must be visible without JavaScript and without scrolling (no sections that start at opacity 0). Respect `prefers-reduced-motion`.
- **No dashes as punctuation** in any text you add, such as alt text or aria labels. Use full stops or commas.

## Assets

| File | Use |
| --- | --- |
| `assets/images/fahad-walking.png` | Hero photo, Open Graph image (crop to 1200 × 630) |
| `assets/images/fahad-headshot-LOWRES-replace.jpg` | About section. Low resolution placeholder, to be replaced with the original |
| `assets/images/n8n-workflow.jpg` | Working Capital Agent visual. It shows placeholder notes under two steps. Don't publish it until those are cleaned, and flag it in the PR |
| `assets/cv/fahad-tahir-cv-fpa.pdf` | FP&A CV download |
| `assets/cv/fahad-tahir-cv-accounting.pdf` | Accounting CV download |

Export photos as WebP (with a JPG fallback) at no more than 1600px on the long edge, and lazy-load everything below the hero.

## Done means

- Both pages match the copy files word for word.
- Lighthouse on mobile scores 90+ for performance, accessibility, best practices and SEO.
- No horizontal scroll at 360px wide. The hero headline, body and Download CV button are all visible on a 390 × 844 phone screen without scrolling.
- Download CV offers both PDFs. Copy email copies `itsfahadtahir@gmail.com` and shows the toast "Email copied", with the address also shown as selectable text.
- Page title, meta description and Open Graph tags are set on both pages, so a shared link shows a proper preview card.
- Keyboard focus is visible on every interactive element. Every image has alt text.
- The PR description lists every `TODO(confirm)` item you left out.
