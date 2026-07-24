export type ProjectCategory = 'Product' | 'Full stack' | 'Real-time' | 'Data / ML' | 'Portfolio';

export interface PortfolioProject {
  id: string;
  title: string;
  kicker: string;
  summary: string;
  image: string;
  imageAlt: string;
  categories: ProjectCategory[];
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
  problem: string;
  approach: string[];
  evidence: string[];
  role: string;
  status: 'Live' | 'Case study' | 'Prototype';
  featured: boolean;
  accent: 'lime' | 'blue' | 'coral';
}

export const contact = {
  email: 'saisrujanmishra@gmail.com',
  github: 'https://github.com/saisrujanmishra',
  linkedin: 'https://linkedin.com/in/saisrujan-mishra',
  resume: '/SaisrujanResume.pdf',
};

export const projects: PortfolioProject[] = [
  {
    id: 'ai-task-manager',
    title: 'AI Task Manager',
    kicker: 'Product workflow + automation',
    summary:
      'A task-planning product that turns broad goals into clearer next actions while keeping work synchronized in real time.',
    image: '/TaskManager.png',
    imageAlt: 'AI Task Manager landing page showing task planning features',
    categories: ['Product', 'Full stack'],
    stack: ['React', 'TypeScript', 'Supabase', 'Gemini API', 'Tailwind CSS'],
    liveUrl: 'https://taskmanager-ai.netlify.app',
    githubUrl: 'https://github.com/saisrujanmishra',
    problem:
      'Large, loosely defined tasks create planning friction and make it harder for users to decide what to do next.',
    approach: [
      'Mapped the core journey from goal entry to suggested subtasks and progress tracking.',
      'Connected authenticated user data to PostgreSQL through Supabase for persistent task state.',
      'Used an AI-assisted workflow to return contextual task suggestions through serverless functions.',
    ],
    evidence: ['Working deployment', 'Authenticated workflow', 'AI-assisted task breakdown'],
    role: 'Product design + full-stack development',
    status: 'Live',
    featured: true,
    accent: 'lime',
  },
  {
    id: 'vibechat',
    title: 'VibeChat',
    kicker: 'Real-time collaboration',
    summary:
      'A full-stack messaging experience with secure sessions, presence indicators, and live one-to-one communication.',
    image: '/VibeChat.png',
    imageAlt: 'VibeChat dark interface with contacts and conversation workspace',
    categories: ['Real-time', 'Full stack'],
    stack: ['MongoDB', 'Express', 'React', 'Node.js', 'Socket.io', 'Zustand'],
    liveUrl: 'https://mychat-x58s.onrender.com/login',
    githubUrl: 'https://github.com/saisrujanmishra',
    problem:
      'Messaging products need immediate feedback, reliable session handling, and simple visibility into who is available.',
    approach: [
      'Implemented JWT-based authentication and protected client-server flows.',
      'Used Socket.io for two-way messaging and live online-status updates.',
      'Kept shared interface state predictable with Zustand and responsive layouts.',
    ],
    evidence: ['Working deployment', 'JWT authentication', 'WebSocket messaging'],
    role: 'Full-stack development',
    status: 'Live',
    featured: true,
    accent: 'blue',
  },
  {
    id: 'portfolio-system',
    title: 'Portfolio System',
    kicker: 'Personal brand + content system',
    summary:
      'A responsive portfolio designed to make project evidence easy to scan, maintain, and verify across devices.',
    image: '/Portfolio.png',
    imageAlt: 'Previous version of the Saisrujan Mishra portfolio homepage',
    categories: ['Portfolio', 'Product'],
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'GitHub Actions'],
    liveUrl: 'https://saisrujan.netlify.app',
    githubUrl: 'https://github.com/SaisrujanMishra/BuisnessAnalyst',
    problem:
      'A general project gallery does not quickly communicate role fit, decision-making ability, or the evidence behind each build.',
    approach: [
      'Reframed the information architecture around recruiter questions and verifiable project evidence.',
      'Centralized portfolio content so new case studies can be added without rewriting components.',
      'Added automated checks for placeholders, missing assets, lint errors, and production build failures.',
    ],
    evidence: ['Responsive case studies', 'Accessible interaction states', 'Automated quality checks'],
    role: 'Strategy, UX + frontend development',
    status: 'Case study',
    featured: true,
    accent: 'coral',
  },
  {
    id: 'cash-crop-recommendation',
    title: 'Cash Crop Recommendation',
    kicker: 'Data-informed decision support',
    summary:
      'A recommendation interface that turns soil nutrients and environmental conditions into a clearer crop-selection decision.',
    image: '/CropRecomendation.png',
    imageAlt: 'Cash Crop Recommendation System with soil and climate input fields',
    categories: ['Data / ML', 'Product'],
    stack: ['Machine learning', 'Decision support', 'Data inputs', 'Responsive UI'],
    problem:
      'Crop selection depends on several interacting soil and climate signals, making manual comparison difficult and inconsistent.',
    approach: [
      'Structured seven decision inputs covering nitrogen, phosphorus, potassium, temperature, humidity, pH, and rainfall.',
      'Designed a single-task interface that keeps the recommendation flow easy to understand.',
      'Presented the model as a practical decision-support tool rather than exposing implementation complexity.',
    ],
    evidence: ['7-variable input model', 'Task-focused interface', 'Decision-support prototype'],
    role: 'Data workflow + interface design',
    status: 'Prototype',
    featured: false,
    accent: 'lime',
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
    description: 'Shipping the interface and the systems behind it.',
    skills: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Supabase'],
  },
  {
    id: 'platform',
    label: 'Platform',
    description: 'Deploying, versioning, and extending technical products.',
    skills: ['Git / GitHub', 'AWS', 'Azure', 'Linux', 'Solidity', 'Web3'],
  },
] as const;
