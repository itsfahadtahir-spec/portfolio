# Working Capital Agent page copy

Route: `/working-capital-agent`. Use this text exactly. Lines in *italics* are layout notes. Anything marked `TODO(confirm)` is waiting on Fahad: leave that element out and list it in your PR description.

---

## Meta

- **Page title:** Working Capital Agent · Fahad Tahir
- **Meta description:** A one-day n8n and K2 Horizon build that spots a cash shortfall before it happens and waits for a finance manager's approval before acting.

## 1. Header

**Eyebrow:** Hackathon build · n8n × K2 Horizon · Dubai, 25 Sep 2026

**Title (h1):** Working Capital Agent

**Subhead:** It sees a cash shortfall coming, works out how to avoid it, and waits for a finance manager's approval before anything goes out.

**Details row:**

| Label | Value |
| --- | --- |
| Built in | One day |
| Tools | n8n, K2 Horizon, Google Sheets, Slack, Gmail |
| Workflow | 14 steps, started on demand |
| Status | Working demo on sample data |

*`TODO(confirm)`: add a "My role" row (solo or team) once confirmed.*

**Buttons:** Download CV (primary). *`TODO(confirm)`: add "Watch the demo" (secondary) only if a video link is provided.*

**Trust line (small, Geist Mono):** Rules do the maths · AI explains the options · A person approves every action

## 2. The short version

- **The problem:** a business can look healthy today and still run short of cash next week.
- **What I built:** an n8n workflow that forecasts 30 days of cash, spots the day it dips below a safety line, weighs four responses and sends the best one to Slack for approval.
- **What happens after the yes:** it drafts the email in Gmail for a person to review and send. If the answer is no, the workflow stops.

## 3. The problem

**Heading:** Profitable on paper. Short on cash by Wednesday.

Cash problems rarely look like cash problems at first. Invoices are out, customers will pay eventually, and the P&L looks fine. Then payroll and a supplier payment land in the same week, before the money comes in.

At LSN, I catch that gap by rebuilding the cash forecast by hand. I pull in receivables, supplier commitments, VAT and payroll, find the bad week, then test fixes one at a time in a spreadsheet. It works, but it's slow, and a late warning leaves fewer options.

I wanted to see how much of that I could hand to a workflow without handing over the decision.

## 4. The scenario

**Heading:** One company. Five days. AED 20k short.

It's Friday, 25 September. The business has AED 85k in the bank, AED 10k above the AED 75k it never wants to drop below. Nothing looks wrong.

The agent runs the next 30 days and finds the problem. By Wednesday, 30 September, cash falls to AED 55k, which is AED 20k under the safety line.

**Scenario card (Geist Mono):**

| | |
| --- | --- |
| Cash today | AED 85k |
| Safety line | AED 75k |
| Lowest point | AED 55k |
| When | 30 Sep, in 5 days |

*Chart: a cash line (navy-900) that dips under a dotted safety line (navy-400) on 30 Sep, with the low point labelled "AED 55k" on a champagne-300 tag. It can animate in once; keep it static with reduced motion. Values: 25 Sep AED 85k, 30 Sep AED 55k. `TODO(confirm)`: the full daily series from Fahad's sheet. Until then, draw only these two points and the safety line.*

## 5. What the agent does

**Heading:** It catches the problem, then helps you fix it.

1. **Pulls in the numbers.** It reads four Google Sheets at once: cash movements, settings like the safety line, the scenarios, and the actions behind each scenario.
2. **Spots the breach.** A fixed-rules engine in n8n forecasts every day for the next 30 days and flags the first day cash drops below the safety line.
3. **Weighs the options.** It models doing nothing, chasing a customer early, delaying a supplier, or doing both.
4. **Explains the trade-offs.** K2 Horizon reads the results and writes a plain-English recommendation: what caused the gap, which option fixes it and what each one costs.
5. **Checks the AI's answer.** A validation step tests K2's output before any person sees it.
6. **Waits for a person.** The recommendation goes to Slack, and the workflow stops there until a finance manager approves or declines.
7. **Drafts the email.** On approval, n8n creates a Gmail draft for a person to review and send. On a no, nothing happens.

## 6. The options

**Heading:** Four ways to handle Wednesday.

| Option | What changes | Lowest cash in 30 days | Result |
| --- | --- | --- | --- |
| Do nothing | Nothing | AED 55k | Drops below the line |
| Chase Bluewave early | Collect AED 37k sooner | AED 92k | Stays above the line |
| Delay Supplier Alpha | Pay AED 40k seven days later | AED 95k | Stays above the line |

*`TODO(confirm)`: a fourth row "Do both" (AED 115k in Fahad's notes, but the simple sum is AED 132k). Add it only once Fahad confirms the figure.*

*Show each option as a card. Clicking a card redraws the chart's lowest point for that option.*

*`TODO(confirm)`: "The agent's pick" block, showing the recommendation from the real demo run.*

## 7. The approval

**Heading:** The agent recommends. You decide.

I didn't want an AI anywhere near a payment button. In every finance team I've worked in, the person who signs off is accountable for the decision, so the agent does the legwork and stops short of the choice.

*Slack message mock, styled as a simple card (not Slack's branding):*

> **Working capital alert**
> Cash is forecast to drop below your AED 75k safety line on 30 Sep.
> Lowest point if nothing changes: AED 55k
> Recommended: `TODO(confirm)`
> Result: no breach in the next 30 days
> [Approve] [Review analysis]

*Until the recommendation is confirmed, leave out the "Recommended" line.*

## 8. After the yes

**Heading:** One click, and the work is ready.

*Vertical sequence that fills in step by step on scroll, starting from a visible state.*

1. The workflow waits in Slack
2. A finance manager clicks Approve
3. n8n checks the answer
4. Email drafted in Gmail, ready for a person to review and send
5. A "no" stops the workflow and nothing goes out

**Line under it:** The email stays a draft. A person reads it and presses send.

## 9. How it's built

**Heading:** Rules for the maths. AI for the judgement. A person for the decision.

| Job | Handled by | Why |
| --- | --- | --- |
| The numbers | A fixed-rules engine in n8n | Dates, balances, breaches and scenario sums have one right answer. A language model shouldn't be doing the arithmetic. |
| The explanation | K2 Horizon | Working out what caused the gap and comparing trade-offs takes judgement, and that's where a reasoning model helps. |
| The check | A validation step in n8n | The AI's answer is tested before a person sees it. |
| The workflow | n8n | It reads the sheets, merges the data, branches on the approval and creates the draft. |
| The decision | A finance manager | They're accountable, so they approve. |

**Workflow strip:** Start → 4 Google Sheets → Merge → Fixed-rules finance engine → K2 Horizon → Validate output → Slack approval (waits) → Approved? → Gmail draft

**Image:** `assets/images/n8n-workflow.jpg`, caption "The full workflow in n8n." *Same rule as the home page: the placeholder notes must be removed first.*

## 10. What it won't do

**Heading:** The guardrails a CFO would ask about

- It never makes a payment.
- It never writes or changes a balance. Every number comes from the rules.
- The AI's answer is checked before a person sees it.
- Nothing leaves the business without a person's approval, and even then it's a draft.

## 11. Why I built it

**Heading:** The forecast I already build, with the slow parts automated.

This is the same rolling cash forecast I keep for LSN's CEO. I handed the workflow the parts I'd give a good analyst: pulling the data, doing the sums and drafting the email. The decision stayed with a person, which is where it belongs.

## 12. What's next

- Log every decision and re-run the forecast after approval, so the page can show the gap closing.
- Run it on a schedule instead of a manual start.
- Connect it to live accounting data, such as QuickBooks or Xero, instead of a Google Sheet.
- Time a full run, trigger to approved draft, and publish the real number.

## 13. Closing

**Heading:** Hiring for FP&A or finance systems?

I've spent 10 years in the numbers, and now I build the tools around them. If that would help your team, I'd like to hear from you.

**Buttons:** Download CV (primary) · Copy email (ghost)

**Email shown as text:** itsfahadtahir@gmail.com

**Back link:** ← Back to all work
