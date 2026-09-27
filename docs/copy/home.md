# Home page copy

Use this text exactly. Lines in *italics* are layout notes, not page text. Anything marked `TODO(confirm)` is waiting on Fahad: leave that element out of the build and list it in your PR description.

---

## Meta

- **Page title:** Fahad Tahir · Finance and business performance, Dubai
- **Meta description:** Finance professional in Dubai with 10 years across Canon, Pearl Initiative and LSN. I build the tools that make reporting and cash forecasting faster.
- **Open Graph image:** `assets/images/fahad-walking.png`, cropped to 1200 × 630, with "Fahad Tahir" in Geist 600 on the plain wall area.

## Navigation

FT Fahad Tahir · Work · Experience · About · **Download CV** (primary button)

*On phones, show only the monogram and the Download CV button.*

*Download CV opens a small menu or modal with two options:*
- FP&A CV → `assets/cv/fahad-tahir-cv-fpa.pdf`
- Accounting CV → `assets/cv/fahad-tahir-cv-accounting.pdf`

---

## 1. Hero

*Two columns. Text on the left, `fahad-walking.png` on the right at 4:5. On phones, photo on top at 4:3.*

**Eyebrow:** Finance and business performance · Dubai

**Headline (h1):** 10 years closing the books. Now I build the tools that close them faster.

**Body:** I'm Fahad. I've run month-end closes, audits and cash forecasts at Canon, Pearl Initiative and LSN. These days I also automate the slow parts, so the numbers are ready sooner and people spend their time on the decisions.

**Buttons:** Download CV (primary) · See what I've built (secondary, scrolls to #work)

**Small line under buttons:** Two versions, FP&A and accounting. PDF, no sign-up.

## 2. Proof strip

*Directly under the hero. Numbers in Geist Mono.*

**Label:** Where I've worked: Canon · Pearl Initiative · LSN Signs

| Number | Label |
| --- | --- |
| 30h → 3h | monthly commission reporting prep at Canon |
| 3 of 3 | audits closed on time with no findings |
| 26% | material cost overrun caught and traced at LSN |

*Render "30h" in navy-400 with a strikethrough and "3h" on a champagne-300 highlight. Only one highlight in this strip.*

---

## 3. What I've built (id="work")

**Heading:** What I've built

**Intro:** Each of these started as a piece of finance work I used to do by hand.

### Featured: Working Capital Agent

*Full-width featured block above the two cards.*

**Eyebrow:** Built in one day · n8n × K2 Horizon hackathon, Dubai

**Headline:** AED 85k in the bank on Friday. AED 55k by Wednesday.

**Body:**

At LSN, I keep the rolling cash forecast the CEO uses to decide who to chase and who to pay first. Today's balance is rarely the worry. The worry is the week a big payment leaves before a customer pays.

At the hackathon, I built a workflow that finds that week. It reads the cash movements, forecasts the next 30 days with fixed rules, and asks K2 Horizon to weigh the fixes. A second step checks the AI's answer. Then the workflow pauses in Slack until a finance manager approves, and only then drafts the email.

**Proof row:**

| Number | Label |
| --- | --- |
| 30 days | of cash forecast ahead |
| 4 options | weighed before anyone is asked |
| 0 emails | sent without a yes |

**Visual:** `assets/images/n8n-workflow.jpg`. Caption: The whole thing in n8n: four data sources in, one approved draft out.

*Before using this image, the placeholder notes under the "Your Prompt" and "K2 Horizon" steps must be removed or blurred. Flag this in the PR if the image still shows them.*

**Link:** Walk through the demo → (goes to `/working-capital-agent`)

### Card: Nodes

- **Badge:** In build (dashed style from the brand guide)
- **Title:** Nodes
- **Summary:** A reconciliation copilot for finance and accounting teams. It comes from 10 years of doing reconciliations by hand, and it's the tool I wish I'd had at every month-end.
- **Chips:** Reconciliation · AI agents
- *No link yet.* `TODO(confirm): one line on what Nodes does today, and whether it gets its own page.`

### Card: LSN GTM agent

- **Badge:** In use at LSN `TODO(confirm)`. *Until confirmed, use "In build".*
- **Title:** LSN GTM agent
- **Summary:** Finds F&B operators in Dubai who may need signage, researches each one and drafts the first message. A person reads every draft before it goes out.
- **Chips:** AI agents · Outbound

### Smaller builds line

*Small text under the cards.*

Also at LSN: a quotation generator that replaced hand-editing quotes in Canva, and an AI lead form on the company's Webflow site.

---

## 4. Finance results

**Heading:** The finance work behind the tools

**Intro:** The tools only work because I know the job they're doing. Here's that job.

*Three result cards, same structure: number, headline, one line.*

| Card | Number | Headline | Line |
| --- | --- | --- | --- |
| Canon | 30h → 3h | Commission reporting, moved into Power BI | A five-day manual cycle covering USD 2.5m in monthly sales across four commission tiers now updates in near real time. Finance checks still happen before every payout. |
| Pearl Initiative | 3 of 3 | Audits closed with no findings | I prepared the statements, schedules and reconciliations and worked directly with the auditors. Every audit finished on time. |
| LSN Signs | 26% | Cost overrun caught mid-project | I traced it to supplier price rises and shipping delays. We now revalidate supplier prices and limit how long a quote stays valid. |

## 5. Experience (id="experience")

**Heading:** Experience

*Use the experience row component: dates on the left in Geist Mono, content on the right.*

**Senior Business Associate, Finance and Business Operations** · LSN Signs · Dubai · Jan 2025 to present
- I build rolling cash forecasts and advise the CEO on liquidity, collections and funding.
- I review the P&L, balance sheet and reconciliations before they reach leadership, and chase down anything that looks off.
- I introduced an IFRS 15 cost-to-cost revenue schedule for fit-out projects.

**Senior Business Services Associate** · Pearl Initiative · Dubai · Oct 2021 to Dec 2024
- I owned the monthly and annual financial statements in QuickBooks.
- I ran the audit process end to end. All three audits closed on time with no findings.
- When one governance programme fell behind, I helped re-plan it so six months of work landed in the grant's final three months.

**Financial Analyst** · Canon · Dubai · Aug 2016 to Sep 2021
- I supported the monthly close and handled customer, vendor, bank and intercompany reconciliations.
- I moved commission reporting into Power BI, cutting monthly prep from 30 hours to about 3.
- I tested account mappings and migrated balances during the Orion ERP cloud move, and trained the team supporting Canon's Saudi finance operations.

**Link:** Download the full CV → (opens the same CV choice)

---

## 6. Skills

**Heading:** What I work with

| Close and reporting | Planning and analysis | Systems and automation |
| --- | --- | --- |
| Month-end close | Cash-flow forecasting | Advanced Excel |
| P&L, balance sheet and trial balance review | Budget vs actual and variance analysis | Power BI |
| Reconciliations | Project costing and margin analysis | QuickBooks, SAP Finance, Orion ERP |
| Accruals, prepayments, fixed assets | Working capital | Salesforce |
| IFRS 15 revenue recognition | Management reporting | n8n and AI agents |
| Audit preparation | Financial modelling | Claude Code, K2 Horizon |

## 7. Credentials

**Heading:** Credentials

| Credential | Where | Year |
| --- | --- | --- |
| Bachelor of Commerce, Accounting and Finance | University of Wollongong, Australia | 2015 |
| Master's certification, Digital Product Management | Nuclio Digital School, Spain | 2023 |
| ACCA, papers F1 to F9 completed | ACCA | |
| Financial Modeling and Valuation Analyst (FMVA) | Corporate Finance Institute | |

**Languages:** English (fluent) · Arabic (intermediate, certified)

## 8. About (id="about")

*The real headshot in a circle, left of the text. `TODO(confirm): replace fahad-headshot-LOWRES-replace.jpg with the original high-resolution headshot.`*

**Heading:** A bit about me

**Body:**

I've spent my career in Dubai: five years at a multinational, three at a non-profit, and now a growing SME. Every one of those finance teams had the same problem at a different size. Too much of the month went on getting the numbers right, and too little on using them.

That's why I started building. When a report eats a day, I want to know why, and then I want to fix it. I'd rather show you a working tool than a slide about one.

`TODO(confirm): Fahad may want to add "I was born and raised in Dubai" to the first sentence.`

---

## 9. Questions you might have

*Accordion. First item open, the rest closed.*

**Are you moving into tech?**
No. I'm looking for finance roles in FP&A, financial reporting or finance systems. Building tools is how I make finance work faster, and it's part of what I'd bring to your team.

**Which CV should I download?**
The FP&A version if the role is about forecasting, budgeting and reporting to leadership. The accounting version if it's about the close, controls and audit. If you're not sure, take both. Neither is longer than two pages.

**Where are you open to working?** `TODO(confirm)`
Dubai first. I'm also open to Riyadh, Dublin and Singapore for the right role.

**When could you start?** `TODO(confirm): notice period`

**Did you build these projects yourself?** `TODO(confirm): short answer on solo vs team work`

*Leave out any question still marked TODO.*

## 10. Closing

**Heading:** Hiring for FP&A, reporting or finance systems?

**Body:** Send me the role. I'll tell you honestly whether I'm a good fit. `TODO(confirm): add "usually within a day" if Fahad can commit to it.`

**Buttons:** Download CV (primary) · Copy email (ghost button, copies to clipboard, shows the toast "Email copied")

**Email shown as text:** itsfahadtahir@gmail.com

## Footer

Fahad Tahir · Dubai · LinkedIn (https://www.linkedin.com/in/fahadtahiruae/) · © 2026
