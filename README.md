# Saisrujan Mishra - Business Analyst and Technical Portfolio

A responsive portfolio showing how I move from requirements and process questions to working software. It combines business and product analysis with full-stack development, machine-learning research, and cloud fundamentals.

**Live site:** [buisness-analyst-mu.vercel.app](https://buisness-analyst-mu.vercel.app/)

## Project catalog

The catalog separates published work from system concepts. A **Concept** entry documents planned architecture and is not presented as a completed build.

| Project | Description | Stack | Status | Links |
|---|---|---|---|---|
| **AI Task Manager** | Full-stack task dashboard with authentication, persistent Supabase-backed data, and AI-assisted suggestions. | React, TypeScript, Supabase, Tailwind CSS, shadcn/ui | Live | [Demo](https://taskmanager-ai.netlify.app) / [Source](https://github.com/SaisrujanMishra/Task-manager) |
| **Crop Recommendation ML** | Random Forest decision-support project using soil nutrients and environmental inputs, with predictions exposed through Flask. | Python, Jupyter, scikit-learn, Pandas, Flask | Repository | [Source](https://github.com/SaisrujanMishra/AI-Corp-Recomendation/tree/main) |
| **VibeChat** | MERN and Socket.io chat app with JWT authentication, live messaging, presence indicators, and Zustand state. | MongoDB, Express, React, Node.js, Socket.io, Zustand | Live | [Demo](https://mychat-x58s.onrender.com/login) / [Source](https://github.com/SaisrujanMishra/VibeChat) |
| **Business Analyst Portfolio** | This responsive React site, with project filtering, clear delivery statuses, resume access, SEO, and automated checks. | React, TypeScript, Vite, React Router, Vercel | Live | [Demo](https://buisness-analyst-mu.vercel.app/) / [Source](https://github.com/SaisrujanMishra/BuisnessAnalyst) |
| **Real-Time Flight Tracking** | Architecture for ingesting flight telemetry and distributing low-latency updates with caching and durable storage. | Node.js, WebSockets, Redis, PostgreSQL, Docker | Concept | - |
| **URL Shortener Service** | API design for short links, custom aliases, expiration, authentication, rate limiting, and click analytics. | Java, Spring Boot, Redis, PostgreSQL, Docker | Concept | - |
| **Resume-to-JD Matcher** | Product design for comparing resumes with job descriptions through similarity search and structured gap analysis. | Python, FastAPI, Next.js, Gemini API, PostgreSQL | Concept | - |
| **E-Commerce REST API** | API architecture for catalog, cart, order, access-control, documentation, and payment workflows. | Node.js, Express, MongoDB, JWT, Docker | Concept | - |

## Portfolio features

- Searchable and category-filtered project catalog
- Compact, expandable project cards with problem, role, approach, and stack
- Explicit Live, Repository, and Concept status labels
- Responsive navigation, light and dark themes, and reduced-motion support
- Resume preview and PDF download
- SEO metadata, sitemap, social preview, and structured data
- Automated lint, content, asset, and production-build checks

## Technology

- React 18 and TypeScript
- Vite
- React Router
- Lucide icons
- CSS design system with responsive layouts and accessible motion
- GitHub Actions
- Vercel deployment

## Local development

```bash
npm install
npm run dev
```

The development server is available at `http://127.0.0.1:5173` by default.

Run the full validation suite:

```bash
npm run check
```

This command runs ESLint, validates project content and public assets, and creates a production build.

## Main files

```text
src/data/portfolio.ts               Project descriptions, links, and statuses
src/pages/MainPage.tsx              Homepage content and primary journey
src/components/ProjectsGallery.tsx  Project search and category filtering
src/components/ProjectCard.tsx      Expandable project presentation
src/index.css                       Responsive design system and motion
scripts/check-portfolio.mjs         Content and asset validation
PROJECTS_AND_INTERNSHIPS_ROADMAP.md Future analytics project roadmap
```

## Contact

- [GitHub](https://github.com/SaisrujanMishra)
- [LinkedIn](https://linkedin.com/in/saisrujan-mishra)
- [Email](mailto:saisrujanmishra@gmail.com)
