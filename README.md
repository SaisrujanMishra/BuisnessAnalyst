# Analyst and MBA Portfolio

> An attempt to customize a software-development portfolio for analyst roles and future MBA applications. The website redesign is complete; the core analytics projects listed below are still left to build.

## Purpose

This portfolio documents my transition from a Computer Science and full-stack development background toward:

- Business Analyst and Technical Business Analyst roles
- Product and Data Analyst roles
- Product operations and strategy roles
- MBA applications supported by measurable project and leadership evidence

The goal is not to replace my development background. It is to show that I can combine technical execution with structured problem-solving, requirements analysis, process improvement, and business communication.

## Current status

### Completed

- [x] Repositioned the website around an analyst-builder profile
- [x] Added responsive navigation and light/dark themes
- [x] Added searchable and filterable project case studies
- [x] Added expandable problem, approach, and evidence sections
- [x] Added accessible resume viewing and downloading
- [x] Added SEO, social-preview metadata, sitemap, and structured data
- [x] Added automated checks for placeholders, missing assets, lint errors, and production-build failures
- [x] Documented an eight-week project and internship roadmap

### Existing software projects

These are real projects already represented in the portfolio:

1. **AI Task Manager** — product workflow, authentication, persistent task state, and AI-assisted task breakdown.
2. **VibeChat** — JWT authentication, real-time messaging, online status, and client-state management.
3. **Portfolio System** — responsive case-study presentation, centralized content, accessibility, and automated quality checks.

They demonstrate implementation ability, but they do not yet provide enough evidence for a strong Business Analyst, Product Analyst, or MBA-oriented portfolio.

## Projects left to complete

| Priority | Project | Evidence to produce | Status |
|---|---|---|---|
| 1 | **Revenue Operations BI Case Study** | SQL model, Power BI/Tableau dashboard, data dictionary, QA report, and executive decision memo | Not started |
| 2 | **Product Funnel and A/B Test Lab** | Event taxonomy, funnel analysis, experiment design, confidence intervals, and Streamlit scenario tool | Not started |
| 3 | **Process Improvement and Automation Case Study** | As-is/to-be process maps, BRD, user stories, traceability matrix, workflow automation, and benefits model | Not started |
| 4 | **Web3 Protocol Health Dashboard** | Public Dune queries, protocol KPI definitions, anomaly investigation, and product recommendation | Optional differentiator |

Detailed specifications and the recommended build order are available in [PROJECTS_AND_INTERNSHIPS_ROADMAP.md](./PROJECTS_AND_INTERNSHIPS_ROADMAP.md).

## What each future case study must show

Every analytics or MBA-oriented project should answer six questions:

1. **Context:** What organization, user, or simulated business situation is being analyzed?
2. **Problem:** What decision or operational problem needs to be solved?
3. **Method:** What data, stakeholder input, framework, or process was used?
4. **Analysis:** How were assumptions tested and alternatives compared?
5. **Recommendation:** What should the decision-maker do next?
6. **Evidence:** Which calculations, queries, documents, or tests support the conclusion?

Results must be measured from reproducible data or labelled clearly as scenario estimates. Planned work must never be presented as completed client experience.

## MBA-oriented evidence still needed

The technical and analytical projects should eventually be supported by:

- [ ] One leadership example with a documented challenge, action, and outcome
- [ ] One stakeholder-management or cross-functional collaboration example
- [ ] One process-improvement example with before-and-after measures
- [ ] One initiative demonstrating ownership beyond assigned coursework
- [ ] A concise career narrative connecting Computer Science, analytics, business impact, and the MBA goal
- [ ] A record of community, mentoring, volunteering, or organizational contribution

The MBA narrative should emerge from real evidence rather than generic leadership language.

## Recommended completion order

```text
Revenue BI case study
        ↓
Product funnel and experiment lab
        ↓
Process improvement and automation
        ↓
Resume and portfolio evidence update
        ↓
Web3 analytics differentiator
```

Do not add the future projects to the public project gallery until their repositories, screenshots, calculations, and conclusions are ready to verify.

## Technology

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Lucide icons
- GitHub Actions
- Cloudflare-compatible static worker entrypoint

## Local development

```bash
npm install
npm run dev
```

Run all portfolio checks:

```bash
npm run check
```

The check command runs linting, validates portfolio content and public assets, and creates a production build.

## Main project files

```text
src/data/portfolio.ts               Portfolio content and project evidence
src/pages/MainPage.tsx              Homepage positioning and recruiter journey
src/components/ProjectsGallery.tsx  Project search and filtering
src/components/ProjectCard.tsx      Expandable case-study presentation
scripts/check-portfolio.mjs         Automated content and asset validation
PROJECTS_AND_INTERNSHIPS_ROADMAP.md Project specifications and opportunity plan
```

## Contact

- [GitHub](https://github.com/saisrujanmishra)
- [LinkedIn](https://linkedin.com/in/saisrujan-mishra)
- Email: saisrujanmishra@gmail.com

