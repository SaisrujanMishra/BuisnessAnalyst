# Projects and Internships Roadmap

Last reviewed: **22 July 2026**

This roadmap is tailored to the current portfolio and resume. The goal is to make you credible for **Business Analyst, Product Analyst, Technical Analyst, Data Analyst, and product-minded developer** roles without presenting planned work as completed work.

## 1. The biggest portfolio gap

Your resume currently proves full-stack development, cloud fundamentals, and Computer Science education. It does **not yet prove business analysis with source data and decision-ready artifacts**.

The next version of the portfolio should therefore add evidence in this order:

1. One end-to-end SQL + BI case study.
2. One product funnel or experimentation case study.
3. One process-improvement case study with BA documentation.
4. One distinctive Web3/on-chain analysis project only after the first three are complete.

Do not publish estimated revenue gains, churn reductions, user counts, or performance results as facts unless the repository contains the data and calculation that supports them. For simulated projects, label results as **scenario estimates**.

## 2. Projects to build

### Priority 1: Revenue Operations BI Case Study

**Portfolio title:** Revenue Command Center: From Raw Orders to Executive Decisions

**Question:** Which products, channels, regions, and customer cohorts are creating or destroying profitable growth?

**Recommended stack:** PostgreSQL, Excel/Power Query, Power BI or Tableau, Python for data cleaning.

**Public deliverables:**

- A cleaned dataset or reproducible data-generation script.
- SQL schema plus queries using CTEs, window functions, cohort analysis, and customer lifetime value.
- An interactive dashboard with revenue, gross margin, repeat rate, average order value, refund rate, and funnel conversion.
- A one-page executive memo with three findings, two actions, and explicit limitations.
- A data dictionary and metric-definition file.
- A short screen recording that explains one decision supported by the dashboard.

**Automation to include:**

- A Python ingestion script that validates columns, types, duplicates, and nulls.
- A refresh command that rebuilds analysis tables and exports a QA summary.
- Automated checks that reconcile dashboard totals to source totals.

**Definition of done:** A recruiter can clone the repository, follow the README, reproduce the cleaned data, inspect the SQL, and understand the recommended business action in under five minutes.

### Priority 2: Product Funnel and A/B Test Lab

**Portfolio title:** Activation Lab: Funnel Diagnosis and Experiment Decision

**Question:** Where do new users fail to activate, which segment is most affected, and should a proposed onboarding change be shipped?

**Recommended stack:** SQL, Python/Pandas, SciPy or Statsmodels, Streamlit, Plotly.

**Public deliverables:**

- A clearly defined event taxonomy: signup, onboarding start, onboarding complete, first key action, and retained user.
- Funnel conversion by device, channel, geography, and cohort.
- A sample-size calculation and experiment guardrails.
- A/B test analysis with confidence intervals, practical significance, and a ship/iterate/stop recommendation.
- A Streamlit scenario tool where a reviewer can change traffic, baseline conversion, uplift, and average value.

**Automation to include:**

- Unit tests for metric calculations.
- A data-quality report that flags missing events and impossible event sequences.
- A single command that refreshes the notebook output and Streamlit-ready data.

**Definition of done:** The project explains not only whether a result is statistically significant, but whether it is worth shipping and what risk remains.

### Priority 3: Process Improvement and Automation Case Study

**Portfolio title:** Support Operations Redesign: From Manual Queue to Measurable Workflow

**Question:** How can a manual support or approval process be redesigned to reduce waiting time and improve visibility?

**Recommended stack:** BPMN or swimlane diagram, Jira, Excel, Power Automate/Make/Zapier or a small Node/Python automation.

**Public deliverables:**

- Current-state and future-state process maps.
- Stakeholder map and short interview guide.
- Business Requirements Document (BRD).
- User stories with acceptance criteria and a requirements traceability matrix.
- Baseline measures: cycle time, handoffs, rework rate, backlog age, and SLA compliance.
- A lightweight automation that routes requests, sends reminders, and records status changes.
- A benefits model separating measured results from scenario assumptions.

**Automation to include:**

- SLA reminders for requests approaching their deadline.
- Automatic owner assignment using simple business rules.
- Weekly backlog and cycle-time summary.

**Definition of done:** The repository connects every requirement to a workflow step, test case, and measurable outcome.

### Priority 4: Web3 Protocol Health Dashboard

**Portfolio title:** Protocol Pulse: On-Chain Adoption, Revenue, and Reliability

**Question:** Is a selected Solana or EVM protocol growing sustainably, and what operational behavior explains the change?

**Recommended stack:** Dune SQL, protocol documentation, Python API, Tableau/Power BI or a small React dashboard.

**Public deliverables:**

- Public Dune queries for active wallets, new/returning wallets, transaction volume, fees, retention, and concentration.
- A metric-definition page explaining wallet-level limitations and bot behavior.
- One anomaly investigation tied to a verifiable on-chain event.
- A short memo for a product or ecosystem team.

**Automation to include:**

- Scheduled export of query results.
- A threshold-based anomaly flag for volume, failures, or latency.
- A changelog that records metric-definition changes.

**Definition of done:** Every chart links to its query and every conclusion distinguishes observation from inference.

## 3. Eight-week build order

| Week | Main outcome | Publishable proof |
|---|---|---|
| 1 | Choose a public dataset and define business questions | Project brief, metric tree, data dictionary |
| 2 | Complete SQL model and QA checks | Schema, queries, QA report |
| 3 | Build the BI dashboard and decision memo | Live dashboard, README, executive memo |
| 4 | Build the product event model and funnel | Event taxonomy, SQL/Python analysis |
| 5 | Complete the experiment lab | Streamlit tool, test results, recommendation |
| 6 | Map and redesign one operational process | As-is/to-be maps, BRD, user stories |
| 7 | Automate the redesigned workflow | Working automation, test cases, benefits model |
| 8 | Polish repositories and apply consistently | Demo videos, pinned GitHub repos, tailored applications |

Recommended weekly split: **60% building evidence, 25% applications/networking, 15% interview practice**.

## 4. Opportunities to prioritize now

Program dates change, so re-check the linked official page immediately before applying.

| Priority | Opportunity | Status on 22 July 2026 | Why it fits | Next action |
|---|---|---|---|---|
| 1 | [LFX Mentorship](https://www.linuxfoundation.org/about/mentorship-programs/) | Fall mentorships are generally listed from mid-July and applications are typically open for about four weeks | Strong match for open source, cloud, blockchain, and technical-analysis proof | Browse current Fall projects now; shortlist three and make a small contribution before applying |
| 1 | [MLH Fellowship - Software Engineering](https://fellowship.mlh.com/programs/software-engineering) | Fall 2026 is listed for 14 Sep-4 Dec, 20 hours/week; applications are rolling | Remote, structured collaboration, code review, and real project experience | Apply now with AI Task Manager or VibeChat as the main code sample |
| 1 | [Superteam Earn](https://earn.superteam.fun/s/superteamin/) and [Superteam Talent](https://talent.superteam.fun/) | Ongoing bounties, projects, and Solana roles | Best direct path for combining Web3, analytics, development, and public proof of work | Complete one small bounty before targeting a larger project or role |
| 2 | [Outreachy](https://www.outreachy.org/docs/applicant/) | May 2026 is complete; the general end-of-year cycle opens around late August with contributions around October | Remote open-source work can include programming, data science, documentation, UX, and research | Check eligibility first, then identify communities before the next initial-application window |
| 2 | Startup analyst/developer internships via [Wellfound](https://wellfound.com/jobs), [LinkedIn Jobs](https://www.linkedin.com/jobs/), [Internshala](https://internshala.com/), and [Unstop](https://unstop.com/) | Ongoing | Best source of immediate Business Analyst, Product Analyst, Operations Analyst, and technical-intern roles in India | Create alerts using the search titles below and apply to roles posted in the last seven days |
| 3 | [Google Summer of Code](https://developers.google.com/open-source/gsoc/timeline) | 2026 contributor applications closed on 31 March; coding began 25 May | Valuable long-term open-source signal, but not an immediate 2026 application | Prepare for the next cycle by contributing from October onward rather than waiting for the organization list |
| 3 | [Summer of Bitcoin](https://www.summerofbitcoin.org/apply) | 2026 applications are closed | Good fit for the blockchain specialization and open-source development | Track the next cohort and contribute to one listed organization before applications open |
| 3 | [Digital India Internship Scheme](https://intern.meity.gov.in/schedules) | 2026 applications closed on 29 April; the internship runs 1 June-31 July | Relevant government technology experience, but this year's intake is complete | Track the portal for the next published schedule |

### Search titles to use

- Business Analyst Intern / Graduate Business Analyst
- Product Analyst Intern / Product Operations Intern
- Data Analyst Intern / BI Analyst Intern
- Technical Business Analyst / Implementation Analyst
- Operations Analyst / Revenue Operations Analyst
- Product Management Intern
- Full-Stack Developer Intern / Solutions Engineering Intern
- Web3 Data Analyst / Protocol Analyst / Ecosystem Analyst

Useful search string:

```text
("business analyst" OR "product analyst" OR "data analyst" OR "technical analyst")
(intern OR graduate OR entry-level) (remote OR Mumbai OR Bengaluru OR Pune)
```

## 5. Application automation

Use one spreadsheet or database as the source of truth with these columns:

```text
Company | Role | Source URL | Location | Posted date | Applied date | Status |
Resume version | Contact | Follow-up date | Interview date | Notes | Rejection reason
```

Set up the following routine:

1. Create daily alerts on LinkedIn, Wellfound, Internshala, and Unstop for the search titles above.
2. Review alerts once per day; do not repeatedly browse throughout the day.
3. Save only roles that match at least 60% of the required skills.
4. Tailor the top third of the resume and the first two project bullets to the job description.
5. Schedule a follow-up seven days after applying when a recruiter or hiring manager is identifiable.
6. Review the tracker every Sunday: applications, responses, interviews, and the most common missing skill.

Suggested weekly targets:

- 15 high-fit applications, not 100 generic applications.
- 5 thoughtful messages to alumni, founders, analysts, or maintainers.
- 2 public progress updates showing a query, chart, workflow, or learning.
- 1 measurable portfolio improvement.

## 6. Portfolio publishing checklist

Before adding any new project to the site:

- [ ] Live link works without requiring the reviewer to request access.
- [ ] Repository has a concise README and setup instructions.
- [ ] Screenshot matches the actual project.
- [ ] Problem, user, constraints, and your role are explicit.
- [ ] Data source and metric definitions are documented.
- [ ] Result is measured, or clearly labelled as a scenario estimate.
- [ ] At least one limitation or trade-off is stated.
- [ ] No placeholder link, invented testimonial, or unsupported impact number is present.
- [ ] Resume and portfolio use the same project title, dates, and technology names.

## 7. Immediate next three actions

1. Start the Revenue Operations BI case study and publish the project brief plus data dictionary within seven days.
2. Apply to current LFX Fall projects and the MLH Fall 2026 Fellowship while those windows are relevant.
3. Update the resume summary after the first analytics case study is complete; do not claim completed analyst work before the evidence is public.
