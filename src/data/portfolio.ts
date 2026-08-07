export type ProjectCategory = 'Product' | 'Full stack' | 'Real-time' | 'Data / ML' | 'Backend' | 'Portfolio';

export type ProjectIcon = 'tasks' | 'brain' | 'chat' | 'portfolio' | 'flight' | 'link' | 'resume' | 'commerce';

export interface PortfolioProject {
  id: string;
  title: string;
  kicker: string;
  summary: string;
  image?: string;
  imageAlt?: string;
  visualLabel?: string;
  icon: ProjectIcon;
  categories: ProjectCategory[];
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
  problem: string;
  approach: string[];
  highlights: string[];
  role: string;
  status: 'Live' | 'Repository' | 'Concept';
  featured: boolean;
  accent: 'lime' | 'blue' | 'coral';
}

export const contact = {
  email: 'saisrujanmishra@gmail.com',
  github: 'https://github.com/SaisrujanMishra',
  linkedin: 'https://linkedin.com/in/saisrujan-mishra',
  resume: '/SaisrujanResume.pdf',
};

export const projects: PortfolioProject[] = [
  {
    id: 'ai-task-manager',
    title: 'AI Task Manager',
    kicker: 'Task planning product',
    summary:
      'A full-stack task dashboard with authentication, persistent data, and AI-assisted task suggestions.',
    image: '/TaskManager.webp',
    imageAlt: 'AI Task Manager landing page introducing its task-planning features',
    icon: 'tasks',
    categories: ['Product', 'Full stack'],
    stack: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS', 'shadcn/ui'],
    liveUrl: 'https://taskmanager-ai.netlify.app',
    githubUrl: 'https://github.com/SaisrujanMishra/Task-manager',
    problem:
      'Broad tasks are difficult to prioritize and often leave users without a clear next action.',
    approach: [
      'Mapped the flow from task entry to suggested subtasks and progress tracking.',
      'Used Supabase authentication and storage for persistent task state.',
      'Designed an AI-assisted suggestion flow within the task-planning interface.',
    ],
    highlights: ['Working deployment', 'Supabase integration', 'AI suggestion interface'],
    role: 'Product design and full-stack development',
    status: 'Live',
    featured: true,
    accent: 'lime',
  },
  {
    id: 'cash-crop-recommendation',
    title: 'Crop Recommendation ML',
    kicker: 'Machine-learning decision support',
    summary:
      'A Random Forest model that recommends crops from soil nutrients and environmental conditions.',
    image: '/CropRecomendation.webp',
    imageAlt: 'Crop recommendation interface with soil and climate input fields',
    icon: 'brain',
    categories: ['Data / ML', 'Product'],
    stack: ['Python', 'Jupyter', 'Scikit-learn', 'Pandas', 'Flask'],
    githubUrl: 'https://github.com/SaisrujanMishra/AI-Corp-Recomendation/tree/main',
    problem:
      'Crop selection depends on several interacting soil and climate variables that are difficult to compare manually.',
    approach: [
      'Prepared soil and environmental inputs including N, P, K, temperature, humidity, pH, and rainfall.',
      'Compared classification approaches and used Random Forest for the recommendation workflow.',
      'Exposed model predictions through a Flask API and a focused input interface.',
    ],
    highlights: ['Seven input variables', 'Random Forest classifier', 'Flask API'],
    role: 'Machine-learning research and API development',
    status: 'Repository',
    featured: true,
    accent: 'blue',
  },
  {
    id: 'vibechat',
    title: 'VibeChat',
    kicker: 'Real-time messaging',
    summary:
      'A MERN chat application with secure sessions, live messaging, and online-status updates.',
    image: '/VibeChat.webp',
    imageAlt: 'VibeChat interface with contacts and a conversation workspace',
    icon: 'chat',
    categories: ['Real-time', 'Full stack'],
    stack: ['MongoDB', 'Express', 'React', 'Node.js', 'Socket.io', 'Zustand'],
    liveUrl: 'https://mychat-x58s.onrender.com/login',
    githubUrl: 'https://github.com/SaisrujanMishra/VibeChat',
    problem:
      'A messaging product needs immediate delivery feedback, secure sessions, and clear presence information.',
    approach: [
      'Implemented JWT authentication and protected client-server flows.',
      'Used Socket.io for two-way messaging and live online-status updates.',
      'Managed shared interface state with Zustand across responsive layouts.',
    ],
    highlights: ['Working deployment', 'JWT authentication', 'Socket.io messaging'],
    role: 'Full-stack development',
    status: 'Live',
    featured: true,
    accent: 'coral',
  },
  {
    id: 'business-analyst-portfolio',
    title: 'Business Analyst Portfolio',
    kicker: 'Portfolio and content system',
    summary:
      'This responsive site organizes projects by problem, role, approach, stack, and delivery status.',
    image: '/Portfolio.webp',
    imageAlt: 'An earlier version of the Saisrujan Mishra portfolio',
    icon: 'portfolio',
    categories: ['Portfolio', 'Product', 'Full stack'],
    stack: ['React', 'TypeScript', 'Vite', 'React Router', 'Vercel'],
    liveUrl: 'https://buisness-analyst-mu.vercel.app',
    githubUrl: 'https://github.com/SaisrujanMishra/BuisnessAnalyst',
    problem:
      'A general developer gallery did not explain role fit or distinguish working projects from early concepts.',
    approach: [
      'Reorganized the content around recruiter questions and direct project descriptions.',
      'Centralized project data so descriptions, links, and statuses stay consistent.',
      'Added responsive navigation, accessible interactions, automated checks, and Vercel deployment.',
    ],
    highlights: ['Responsive interface', 'Search and filters', 'Automated quality checks'],
    role: 'Content strategy, UX, and frontend development',
    status: 'Live',
    featured: false,
    accent: 'lime',
  },
  {
    id: 'flight-tracking',
    title: 'Real-Time Flight Tracking',
    kicker: 'Backend architecture concept',
    summary:
      'A system design for ingesting flight telemetry and distributing live updates at low latency.',
    visualLabel: 'Streaming architecture',
    icon: 'flight',
    categories: ['Backend', 'Real-time'],
    stack: ['Node.js', 'WebSockets', 'Redis', 'PostgreSQL', 'Docker'],
    problem:
      'Flight telemetry arrives continuously and needs to reach many clients without overloading the primary database.',
    approach: [
      'Plan an ingestion service that validates and normalizes telemetry events.',
      'Use Redis for fast access to recent position data and PostgreSQL for durable records.',
      'Push updates to subscribed clients over WebSockets and package services with Docker.',
    ],
    highlights: ['Telemetry ingestion design', 'Redis caching plan', 'WebSocket delivery'],
    role: 'System design concept',
    status: 'Concept',
    featured: false,
    accent: 'blue',
  },
  {
    id: 'url-shortener',
    title: 'URL Shortener Service',
    kicker: 'Service architecture concept',
    summary:
      'A Spring Boot API design for short links, custom aliases, expiration, and click analytics.',
    visualLabel: 'API architecture',
    icon: 'link',
    categories: ['Backend'],
    stack: ['Java', 'Spring Boot', 'Redis', 'PostgreSQL', 'Docker'],
    problem:
      'A link service must generate reliable aliases, handle traffic spikes, and record usage without slowing redirects.',
    approach: [
      'Define short-link, ownership, expiration, and analytics data models.',
      'Use Redis for redirect lookup and PostgreSQL for durable metadata.',
      'Plan JWT authentication, token-bucket rate limiting, and containerized deployment.',
    ],
    highlights: ['Custom alias design', 'Rate-limiting plan', 'Click analytics model'],
    role: 'System design concept',
    status: 'Concept',
    featured: false,
    accent: 'coral',
  },
  {
    id: 'resume-jd-matcher',
    title: 'Resume-to-JD Matcher',
    kicker: 'RAG product concept',
    summary:
      'A product design for comparing a resume with a job description and returning a structured gap analysis.',
    visualLabel: 'Matching workflow',
    icon: 'resume',
    categories: ['Product', 'Data / ML', 'Full stack'],
    stack: ['Python', 'FastAPI', 'Next.js', 'Gemini API', 'PostgreSQL'],
    problem:
      'Candidates need a consistent way to compare their evidence with the requirements of a specific role.',
    approach: [
      'Parse resume and job-description content into comparable sections.',
      'Plan semantic similarity scoring and retrieval of the most relevant evidence.',
      'Return structured gaps and explanations through a web interface.',
    ],
    highlights: ['Similarity-search plan', 'Structured gap output', 'Full-stack workflow'],
    role: 'Product and system design concept',
    status: 'Concept',
    featured: false,
    accent: 'lime',
  },
  {
    id: 'ecommerce-api',
    title: 'E-Commerce REST API',
    kicker: 'Backend product concept',
    summary:
      'An API architecture for catalog, cart, order, access-control, and payment workflows.',
    visualLabel: 'Commerce architecture',
    icon: 'commerce',
    categories: ['Backend', 'Full stack'],
    stack: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Docker'],
    problem:
      'Commerce services need consistent state across product, cart, order, user, and payment operations.',
    approach: [
      'Define resources, permissions, validation rules, and API contracts.',
      'Plan role-based access control and JWT-authenticated operations.',
      'Document Stripe payment and webhook handling with OpenAPI specifications.',
    ],
    highlights: ['RBAC design', 'Payment workflow plan', 'OpenAPI documentation'],
    role: 'System design concept',
    status: 'Concept',
    featured: false,
    accent: 'blue',
  },
];

export const skillGroups = [
  {
    id: 'analysis',
    label: 'Analysis',
    description: 'Turning questions into structured evidence and decisions.',
    skills: ['SQL', 'PostgreSQL', 'Excel / Power Query', 'Python', 'Tableau', 'Power BI'],
  },
  {
    id: 'product',
    label: 'Product',
    description: 'Defining the problem, journey, requirements, and success signals.',
    skills: ['Requirements', 'User stories', 'Acceptance criteria', 'Process mapping', 'Jira', 'Agile'],
  },
  {
    id: 'build',
    label: 'Build',
    description: 'Building the interface and the systems behind it.',
    skills: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Supabase'],
  },
  {
    id: 'platform',
    label: 'Platform',
    description: 'Deploying, versioning, and extending technical products.',
    skills: ['Git / GitHub', 'AWS', 'Azure', 'Linux', 'Solidity', 'Web3'],
  },
] as const;
