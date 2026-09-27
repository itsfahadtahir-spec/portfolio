# Fahad Tahir brand guidelines

Personal brand system for Fahad Tahir's portfolio site and LinkedIn cover. Fahad is a Dubai-based finance professional who automates finance work. **Version 1.1 (27 Sep 2026).** Direction: navy and champagne.

---

## 1. Positioning

- Fahad is a finance professional first. Automation is his edge.
- The site should read like a finance CV that proves he also builds tools. It should not read like a developer portfolio.
- The audience is finance recruiters and hiring managers, mainly in Dubai, then Riyadh, Dublin and Singapore. Target roles are FP&A, financial reporting, senior accountant and finance systems.
- Hero line: "10 years closing the books. Now I build the tools that close them faster."

## 2. Personality

Calm, practical, curious, trustworthy, warm.

| We are | We are not |
|---|---|
| Steady and specific | Flashy or vague |
| A finance professional who builds tools | A developer who once worked in finance |
| Interested in new tools | Hyped about AI for its own sake |
| Approachable and first person | Stiff, third-person corporate |
| Quiet, with one highlight per view | Colourful, busy or decorated |

References: Monzo for personality (first-person copy, real photos, one confident accent). Ramp for restraint (white space, tight headlines, no decoration).

## 3. Logo

- There is no symbol. The wordmark is "Fahad Tahir" in Geist 600, tracking `-0.03em`.
- The monogram is "FT" in Geist Mono 500, set at 35% of the diameter, inside an Navy 900 circle with Navy 100 letters. The inverse version has an Navy 100 circle with Navy 900 letters.
- Clear space equals the monogram height divided by 3, which is 14px at the default 40px.
- Minimum sizes: monogram 24px, full lockup 120px wide, favicon 32px (monogram only).
- Don't fill the monogram with Champagne, stretch the name, swap the typeface, or place the logo on mid-grey or a busy photo.

## 4. Colour

Navy comes from Fahad's suit and champagne from his tie in the hero photo. The page stays cool and neutral so his photos bring the warmth. The site is light mode only.

### Brand colours

| Name | Token | Hex | Use |
|---|---|---|---|
| Navy | `--navy-900` | `#1C2233` | Text, primary buttons, monogram |
| Slate | `--navy-600` | `#5E6470` | Secondary text, metadata |
| Mist | `--navy-100` | `#F3F3F1` | Page background |
| White | `--navy-0` | `#FFFFFF` | Cards |
| Champagne | `--champ-300` | `#E6DAC3` | The one accent: highlight fill behind key numbers |

### Navy scale

| Token | Hex | Use |
|---|---|---|
| `--navy-0` | `#FFFFFF` | Card surface |
| `--navy-50` | `#F8F8F7` | Subtle fill, code, chips |
| `--navy-100` | `#F3F3F1` | Page background (Mist) |
| `--navy-200` | `#E4E5E7` | Borders, dividers |
| `--navy-300` | `#CDD0D5` | Strong borders, "before" bar |
| `--navy-400` | `#A3A7AE` | Placeholder, "before" figure |
| `--navy-500` | `#80858F` | Muted labels, axis text (large text only, 3.33:1) |
| `--navy-600` | `#5E6470` | Secondary text (5.35:1 on Mist, lightest allowed for body) |
| `--navy-700` | `#434A57` | Body text on cards |
| `--navy-800` | `#2B3242` | Primary button hover |
| `--navy-900` | `#1C2233` | Text, primary buttons (14.25:1 on Mist) |

### Champagne scale

| Token | Hex | Use |
|---|---|---|
| `--champ-50` | `#FAF6EE` | Tag background |
| `--champ-100` | `#F3ECDD` | "In use" badge fill |
| `--champ-200` | `#EDE3CF` | Tag hover |
| `--champ-300` | `#E6DAC3` | Brand accent, highlight fill, focus ring |
| `--champ-400` | `#D6C3A0` | Link underline |
| `--champ-500` | `#BFA67B` | Decorative dots |
| `--champ-600` | `#A08659` | Badge dot, guide lines |
| `--champ-700` | `#7F6843` | Accent text (4.77:1 on Mist, the only champagne shade allowed as text) |
| `--champ-800` | `#5C4B30` | Text on champagne fills |
| `--champ-900` | `#3D3220` | Text on Champagne 300 |

### Semantic colours (forms and toasts only)

| Token | Hex | Use |
|---|---|---|
| `--success-700` / `--success-50` | `#2F6B4F` / `#EAF2ED` | "Message sent" |
| `--warning-700` / `--warning-50` | `#8A6414` / `#F6F0E1` | "Large file" |
| `--error-700` / `--error-50` | `#A2352C` / `#F8EAE8` | "Enter a valid email address." |

### Colour roles

- **Interactive** is navy. Links are Navy 900 with a 2px Champagne 400 underline, offset 4px.
- **Emphasis** is a Champagne 300 highlight fill behind one key number or word per view.
- **Before and after**: "before" is Navy 400 with a strikethrough, and "after" is Navy 900 on a Champagne 300 highlight.
- **Project status** uses navy and champagne shades only. "Live" is not "success".
- **Semantic colours** appear in form feedback only, never on data. The site has no profit or loss data, so red and green have no job there.
- **Collision:** Champagne 300 is close to the sunlit wall in the hero photo. Never place a highlight on top of a photo.

## 5. Typography

- Sans: **Geist** (400, 500, 600). Fallback: `ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif`.
- Mono: **Geist Mono** (400, 500). Fallback: `ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace`.
- Every number, date, currency, percentage and ID is set in Geist Mono with `font-variant-numeric: tabular-nums`.

| Token | Size / line height | Weight | Tracking | Use |
|---|---|---|---|---|
| `--text-4xl` | 64 / 1.0 | 600 | -0.035em | Hero name |
| `--text-3xl` | 48 / 1.05 | 600 | -0.035em | Page titles |
| `--text-2xl` | 36 / 1.1 | 600 | -0.02em | Section titles |
| `--text-xl` | 28 / 1.2 | 600 | -0.02em | Section titles on mobile, role titles |
| `--text-lg` | 22 / 1.3 | 500 | -0.01em | Subheads, tagline |
| `--text-md` | 18 / 1.6 | 400 | 0 | Lede paragraphs |
| `--text-base` | 16 / 1.6 | 400 | 0 | Body |
| `--text-sm` | 14 / 1.5 | 400 or 500 | 0 | Secondary copy, labels |
| `--text-xs` | 12 / 1.5 | 400 (mono) | 0 | Dates, captions |
| label | 11 | 500 (mono) | +0.08em, uppercase | Eyebrows |

| Tracking token | Value |
|---|---|
| `--tracking-display` | `-0.035em` |
| `--tracking-heading` | `-0.02em` |
| `--tracking-body` | `0em` |
| `--tracking-label` | `0.08em` |

| Leading token | Value |
|---|---|
| `--leading-tight` | `1.1` |
| `--leading-snug` | `1.3` |
| `--leading-body` | `1.6` |

Text blocks max out at 65 characters. Headings use `text-wrap: balance`.

## 6. Spacing and layout

4px grid.

| Token | Value | Use |
|---|---|---|
| `--space-1` | 4px | Icon gaps |
| `--space-2` | 8px | Chip gaps |
| `--space-3` | 12px | Inline groups |
| `--space-4` | 16px | Card grid gap, phone side padding |
| `--space-5` | 24px | Card padding, desktop side padding |
| `--space-6` | 32px | Block spacing |
| `--space-7` | 48px | Sub-section spacing |
| `--space-8` | 64px | Section spacing on mobile |
| `--space-9` | 96px | Section spacing on desktop |
| `--space-10` | 128px | Page end |

- 12-column grid, 24px gutters, 1120px max content width.
- Breakpoints: 640, 900, 1200.

| Radius token | Value | Use |
|---|---|---|
| `--radius-sm` | 4px | Chips, highlight |
| `--radius-md` | 8px | Inputs, alerts, menus |
| `--radius-lg` | 12px | Cards |
| `--radius-xl` | 20px | Modal |
| `--radius-full` | 999px | Buttons, badges, photos |

| Shadow token | Value | Use |
|---|---|---|
| `--shadow-sm` | `0 1px 2px rgba(28,34,51,.06)` | Tabs, toggle knob |
| `--shadow-md` | `0 4px 16px -4px rgba(28,34,51,.10)` | Card hover, dropdown |
| `--shadow-lg` | `0 16px 40px -12px rgba(28,34,51,.18)` | Modal, toast |

Cards rest flat with a 1px Navy 200 border. A shadow only appears on hover or on floating elements.

## 7. Motion

Motion confirms a response. Nothing moves unless the reader acts, apart from one section fade on scroll.

| Token | Value | Use |
|---|---|---|
| `--dur-fast` | 120ms | Hover, press, link underline |
| `--dur-base` | 200ms | Card lift, toggles, tabs |
| `--dur-slow` | 320ms | Modal open, dropdown |
| `--dur-reveal` | 480ms | Section fade on scroll |
| `--ease-out` | `cubic-bezier(.2,.7,.2,1)` | Anything entering or responding |
| `--ease-in-out` | `cubic-bezier(.65,0,.35,1)` | Things moving across the screen |
| `--ease-in` | `cubic-bezier(.4,0,1,1)` | Exits, at 70% of entry time |

- Section reveal: opacity from 0.001 to 1 and translateY from 12px to 0 over `--dur-reveal` with `--ease-out`. Content must be visible at rest.
- Card hover: translateY(-2px), border to Navy 300, `--shadow-md`, `--dur-base`.
- Button press: scale(0.98), `--dur-fast`.
- `prefers-reduced-motion: reduce` disables all animation and transitions.

## 8. Components

### Buttons
- Pill shape (`--radius-full`). Height 44px (default) or 34px (small). Padding 0 20px (small 0 14px). Geist 500, 15px (small 13px).
- **Primary:** Navy 900 fill with Navy 100 text. Hover Navy 800.
- **Secondary:** white fill, 1px Navy 300 border, Navy 900 text. Hover border Navy 900.
- **Ghost:** transparent. Hover Navy 200 fill.
- **Focus:** 2px Navy 900 outline, 3px offset.
- **Disabled:** Navy 200 fill, Navy 500 text. Avoid where possible.
- **Loading:** 14px spinner in `currentColor`, label changes to "Sending" or "Loading".
- Only one primary button per view. The CV download button can show its file size in mono, for example "PDF · 92 KB".

### Project card
- Structure: 16:9 visual showing the workflow (never stock art), then status badge and date, title (18px, 600), one-sentence summary (14px, Slate), and tool chips pinned to the bottom.
- White background, 1px Navy 200 border, `--radius-lg`, padding 24px.

### Status badges
Height 24px, pill, 12px Geist 500, with a 6px dot.

| Status | Fill | Text | Dot |
|---|---|---|---|
| Live | Navy 900 | Navy 100 | Champagne 300 |
| In use at LSN | Champagne 100 | Champagne 800 | Champagne 600 |
| In build | White, 1px dashed Navy 400 | Navy 700 | Navy 500 |
| Hackathon build | Navy 200 | Navy 800 | Navy 800 |

Tool chips: 26px tall, `--radius-sm`, Navy 50 fill, 1px Navy 200 border, Geist Mono 12px, Navy 700.

### Result metric
Mono 36px, tracking -0.03em. Show the "before" figure in Navy 400 with a strikethrough at 28px, then an Navy 400 arrow, then the "after" figure in a `.hl` highlight. Put a 14px Slate label underneath. Example: `30h → 3h`, "Monthly commission reporting prep, Canon".

### Experience row
Two columns: dates (150px, mono 12px, Slate) and content (role in 16px 600, organisation in 14px Slate, bullets in 14px Navy 700). A 1px Navy 200 divider sits between rows. The layout stacks on phones.

### Forms
- Input and select: 44px tall, `--radius-md`, 1px Navy 300 border, white fill, 15px text, Navy 400 placeholder.
- Hover: border Navy 500. Focus: border Navy 900 plus a `0 0 0 3px` Champagne 300 ring. Error: border Error 700 plus a 3px Error 50 ring, with 12px Error 700 text below.
- Labels are 14px, weight 500, 6px above the field.
- Toggle: 40 × 24px track, Navy 300 off and Navy 900 on, white 18px knob, `--dur-base`.
- Checkbox: 18px, 1.5px Navy 500 border, `--radius-sm`, Navy 900 when checked.
- Placeholders show a real example, such as "sara@company.ae".

### Alerts, toast, modal
- Alert: `--radius-md`, 14px 16px padding, 14px text, with a round 18px icon in the semantic 700 colour. Info alerts use Navy 50 and Navy 800.
- Toast: Navy 900 fill, Navy 100 text, action in Champagne 300, `--radius-md`, `--shadow-lg`. Example: "Email copied · Undo".
- Modal: white, `--radius-xl`, padding 32px, max width 460px, `--shadow-lg`, over an `rgba(28,34,51,.45)` scrim.

### Dropdown, tabs, search, navigation
- Menu: white, 1px Navy 200 border, `--radius-md`, `--shadow-md`, 6px padding. Items 14px with 8px 10px padding, Navy 100 on hover.
- Tabs: segmented pill on an Navy 200 track. The selected tab is white with `--shadow-sm`.
- Search: input with a 14px icon on the left and a `/` keyboard hint on the right.
- Top nav: sticky, Mist at 86% opacity, 1px Navy 200 border, with the monogram and name, links (active link on a white pill) and a small primary "Download CV" button. On phones, only the monogram and CV button stay.

### Table
Rows are 44px with 1px Navy 200 dividers and no zebra stripes. Headers are 12px Slate with a 1px Navy 300 bottom border. Numbers are right-aligned in mono.

## 9. Patterns

- **Hero:** eyebrow (role and city), headline, one paragraph, then "Download CV" (primary) and "See what I've built" (secondary). The walking photo sits on the right at 4:5 on desktop and on top at 4:3 on phones. Fahad faces left, so the headline goes on the left. The CV button is always in the first screen.
- **Photography:** the walking photo is the hero. The real studio headshot, in a circle, appears in About, the contact block and on LinkedIn so recruiters recognise him. Hackathon and work shots must be real photos; generated images are for mood only. Never place text or a highlight over a photo.
- **Case study:** Problem, Build, Result, Status, always in that order, for the builds and for finance wins alike.
- **Loading:** skeletons shaped like the card they replace, with an Navy 200 to Navy 100 shimmer at 1.4s.
- **Empty:** a dashed Navy 300 border on Navy 50 that says what's coming and gives a link back. Never "Nothing here yet".
- **CV choice:** two versions (FP&A and business performance, and Senior accountant), offered as a dropdown or modal.

## 10. LinkedIn cover

- Canvas 1584 × 396 px, PNG under 8 MB, Mist background.
- Keep the left third clear, because the profile photo overlaps it on desktop. Keep text inside the centre 60% for the mobile crop.
- Content: headline ("Finance professional. Builds the tools that close the books faster."), one skills line in Slate, and the site URL in an Navy 900 pill with a Champagne 300 dot.
- An optional faint Navy 200 grid on the right edge, faded out with a mask.

## 11. Data visuals

- There is one chart type: a horizontal before-and-after bar.
- The "before" bar is Navy 300 and the "after" bar is Navy 900, with its value on a Champagne 300 tag. There are no other series colours.
- Axis labels are Geist Mono 11px in Navy 500. The baseline is Navy 200 and gridlines are dotted Navy 200. Bars start at zero.
- No tooltips. Label values directly on the bars and give the source underneath.

## 12. Voice and content

| Item | Rule | Example |
|---|---|---|
| Person | First person on the site | "I built…" |
| Currency | ISO code, space, figure. Lowercase m and k | `USD 2.5m`, `AED 45k` |
| Percentages | No space before % | `26%` |
| Time saved | Short units and an arrow, rounded conservatively | `30h → 3h` |
| Dates | Three-letter month and year, "to" in ranges, never a dash | `Aug 2016 to Sep 2021`, `Jan 2025 to present` |
| Decimals | One decimal for millions. None for % or hours, unless under 10 | `USD 2.5m`, `2.5h` |
| Buttons | Verb first, 2 to 3 words, sentence case, no full stop | "Download CV", "Copy email" |
| Errors | What's wrong and how to fix it, with no apology | "Enter a valid email address." |
| Tools | Official spelling | n8n, K2 Horizon, Power BI, QuickBooks |
| Punctuation | No em dashes. Serial comma on | "Canon, Pearl Initiative, and LSN" |

**Credentials, always worded exactly like this:**
- Bachelor of Commerce, Accounting and Finance, University of Wollongong, Australia (2015)
- Master's certification, Digital Product Management, Nuclio Digital School, Spain (2023)
- ACCA, papers F1 to F9 completed
- Financial Modeling and Valuation Analyst (FMVA), Corporate Finance Institute

**Verified figures from the CV:**
- Canon: commission reporting prep went from 30h to 2.5–3h (shown as `30h → 3h`), covering about USD 2.5m in monthly sales across four tiers.
- LSN: found a 26% material cost variance and introduced an IFRS 15 cost-to-cost revenue schedule.
- Pearl Initiative: three audits completed on time with no findings, and six months of programme activity delivered in the final three months of a grant.

**Words to avoid:** leverage, synergy, cutting-edge, passionate, results-driven, game changer, revolutionize, seamless, unlock, harness.

## 13. Rules

- ✅ Highlight one number per view with Champagne 300. ❌ Don't highlight several things in one view.
- ✅ Use one Navy 900 primary button per view. ❌ Don't fill buttons with Champagne or semantic colours.
- ✅ Set every figure in Geist Mono with tabular numbers. ❌ Don't mix currency formats or spell numbers out.
- ✅ Use Champagne 700 for any accent text. ❌ Don't use Champagne 300–500 as text, because it fails contrast.
- ✅ Label unfinished work "In build". ❌ Don't call a prototype "Live".
- ✅ Match the CV word for word. ❌ Don't round up or reword credentials.
- ✅ Keep section content visible at rest. ❌ Don't start sections at opacity 0.

## 14. Developer setup

Stack: one static `index.html` plus `styles.css` on GitHub Pages. No framework and no component library.

### Fonts

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500&display=swap">
```

### Tokens

```css
:root {
  --navy-0:#FFFFFF; --navy-50:#F8F8F7; --navy-100:#F3F3F1; --navy-200:#E4E5E7; --navy-300:#CDD0D5; --navy-400:#A3A7AE;
  --navy-500:#80858F; --navy-600:#5E6470; --navy-700:#434A57; --navy-800:#2B3242; --navy-900:#1C2233;
  --champ-50:#FAF6EE; --champ-100:#F3ECDD; --champ-200:#EDE3CF; --champ-300:#E6DAC3; --champ-400:#D6C3A0;
  --champ-500:#BFA67B; --champ-600:#A08659; --champ-700:#7F6843; --champ-800:#5C4B30; --champ-900:#3D3220;
  --success-700:#2F6B4F; --success-50:#EAF2ED; --warning-700:#8A6414; --warning-50:#F6F0E1; --error-700:#A2352C; --error-50:#F8EAE8;

  --bg-page:var(--navy-100); --bg-surface:var(--navy-0); --bg-subtle:var(--navy-50); --bg-inverse:var(--navy-900);
  --text-primary:var(--navy-900); --text-secondary:var(--navy-600); --text-muted:var(--navy-500); --text-inverse:var(--navy-100);
  --text-accent:var(--champ-700); --highlight:var(--champ-300); --highlight-soft:var(--champ-100);
  --border:var(--navy-200); --border-strong:var(--navy-300); --focus:var(--navy-900);

  --font-sans:"Geist", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
  --font-mono:"Geist Mono", ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace;
  --text-xs:12px; --text-sm:14px; --text-base:16px; --text-md:18px; --text-lg:22px; --text-xl:28px; --text-2xl:36px; --text-3xl:48px; --text-4xl:64px;
  --tracking-display:-0.035em; --tracking-heading:-0.02em; --tracking-body:0em; --tracking-label:0.08em;
  --leading-tight:1.1; --leading-snug:1.3; --leading-body:1.6;

  --space-1:4px; --space-2:8px; --space-3:12px; --space-4:16px; --space-5:24px; --space-6:32px; --space-7:48px; --space-8:64px; --space-9:96px; --space-10:128px;
  --radius-none:0; --radius-sm:4px; --radius-md:8px; --radius-lg:12px; --radius-xl:20px; --radius-full:999px;
  --shadow-sm:0 1px 2px rgba(28,34,51,.06); --shadow-md:0 4px 16px -4px rgba(28,34,51,.10); --shadow-lg:0 16px 40px -12px rgba(28,34,51,.18);

  --dur-fast:120ms; --dur-base:200ms; --dur-slow:320ms; --dur-reveal:480ms;
  --ease-out:cubic-bezier(.2,.7,.2,1); --ease-in-out:cubic-bezier(.65,0,.35,1); --ease-in:cubic-bezier(.4,0,1,1);
}
body { background:var(--bg-page); color:var(--text-primary); font-family:var(--font-sans); font-size:var(--text-base); line-height:var(--leading-body); }
.hl { background:var(--highlight); padding:1px 6px; border-radius:var(--radius-sm); font-family:var(--font-mono); font-variant-numeric:tabular-nums; }
```

### Deploy

```bash
git init fahad-portfolio && cd fahad-portfolio
# add index.html, styles.css, assets/ (photos, both CV PDFs)
git add . && git commit -m "First version of portfolio"
git branch -M main
git remote add origin https://github.com/<fahad-username>/fahad-portfolio.git
git push -u origin main
# GitHub: Settings → Pages → Deploy from branch → main / root
```

### Tailwind (optional)

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        navy:  { 0:'#FFFFFF',50:'#F8F8F7',100:'#F3F3F1',200:'#E4E5E7',300:'#CDD0D5',400:'#A3A7AE',500:'#80858F',600:'#5E6470',700:'#434A57',800:'#2B3242',900:'#1C2233' },
        champ: { 50:'#FAF6EE',100:'#F3ECDD',200:'#EDE3CF',300:'#E6DAC3',400:'#D6C3A0',500:'#BFA67B',600:'#A08659',700:'#7F6843',800:'#5C4B30',900:'#3D3220' },
      },
      fontFamily: { sans: ['Geist','ui-sans-serif','system-ui'], mono: ['Geist Mono','ui-monospace','Menlo'] },
      letterSpacing: { display:'-0.035em', heading:'-0.02em', label:'0.08em' },
      borderRadius: { sm:'4px', md:'8px', lg:'12px', xl:'20px' },
      transitionTimingFunction: { out:'cubic-bezier(.2,.7,.2,1)', 'in-out':'cubic-bezier(.65,0,.35,1)' },
    },
  },
};
```

## 15. Component mapping

No component library is used. Classes match the HTML guide.

| Component | Class | Used in |
|---|---|---|
| Button | `.btn .btn-primary / .btn-secondary / .btn-ghost / .btn-sm` | Hero, nav, contact |
| Link | `.link` | Body copy |
| Project card | `.pcard` | What I've built |
| Status badge | `.badge .b-live / .b-use / .b-build / .b-hack` | Project cards, case studies |
| Tool chip | `.chip-t` | Project cards |
| Result metric | `.metric` | Case studies, experience |
| Experience row | `.xp` | Experience |
| Highlight | `.hl` | One key figure per view |
| Field | `.field .input .select` | Contact form |
| Toggle / checkbox | `.toggle` / `.check` | Contact form |
| Alert | `.alert .a-info / .a-ok / .a-warn / .a-err` | Form feedback |
| Toast | `.toast` | Copy email |
| Modal | `.modal` in `.scrim` | CV version choice |
| Menu | `.menu` | CV download dropdown |
| Tabs | `.tabs` | Work filter |
| Top nav | `.topnav` | Site header |
