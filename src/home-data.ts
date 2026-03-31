export type Service = {
  title: string
  description: string
}

export type Stat = {
  label: string
  value: string
}

export const services: Service[] = [
  {
    title: 'Web & mobile apps',
    description: 'Clear UX, solid engineering, ready for real users and real traffic.',
  },
  {
    title: 'AI & automation',
    description: 'Fewer manual steps—document handling, assistants, and workflow bots your team controls.',
  },
  {
    title: 'SaaS products',
    description: 'Subscriptions, accounts, and analytics laid out so you can grow without a rewrite.',
  },
  {
    title: 'Integrations & APIs',
    description: 'Connect CRMs, payments, and internal tools with reliable data flow.',
  },
]

export const stats: Stat[] = [
  { label: 'Projects Delivered', value: '180+' },
  { label: 'Client Satisfaction', value: '98%' },
  { label: 'Avg. Efficiency Gain', value: '35%' },
  { label: 'Countries Supported', value: '12' },
]

export const testimonials = [
  {
    quote:
      'Dotsel delivered a high-end product experience end-to-end. The app feels premium and performs flawlessly.',
    author: 'Aarav Mehta',
    role: 'Founder, Nexa Solutions',
  },
  {
    quote:
      'We replaced manual work with AI automation. Their implementation was fast, reliable, and easy for our team to run.',
    author: 'Nina Roy',
    role: 'Operations Lead, Horizon Systems',
  },
  {
    quote:
      'The codebase, DevOps, and dashboards are clean and future-proof. Dotsel is a serious engineering partner.',
    author: 'Sami Khan',
    role: 'COO, Vertex Digital',
  },
]

export const industries = ['Startups', 'E-commerce', 'Healthcare', 'FinTech', 'Education'] as const

export type IndustryName = (typeof industries)[number]

export const industryPageContent: Record<
  IndustryName,
  { headline: string; summary: string; focus: string[] }
> = {
  Startups: {
    headline: 'Ship fast without cutting corners',
    summary:
      'From early MVP to growth-stage product: we pair rapid delivery with architecture you will not regret when load and features multiply.',
    focus: [
      'Investor- and user-ready UX with performance budgets',
      'Auth, billing-ready foundations, and clean TypeScript',
      'AI only where it removes real work—not novelty layers',
    ],
  },
  'E-commerce': {
    headline: 'Conversion, catalog, and operations in one layer',
    summary:
      'Storefronts, admin tools, and automation across inventory, support, and fulfillment—with observability when campaigns spike traffic.',
    focus: ['Checkout and payments reliability', 'Ops dashboards and integrations', 'Personalization and support deflection'],
  },
  Healthcare: {
    headline: 'Compliant workflows teams actually use',
    summary:
      'Patient and provider experiences with audit-friendly patterns, role-based access, and automation for documents and scheduling.',
    focus: ['Privacy-minded design and access control', 'Structured data and integrations', 'Human-in-the-loop AI where required'],
  },
  FinTech: {
    headline: 'Trust, precision, and defensible systems',
    summary:
      'Internal tools and customer-facing flows where accuracy, traceability, and integration quality matter more than flashy UI alone.',
    focus: ['Secure APIs and event-driven patterns', 'Reconciliation and reporting surfaces', 'Guardrails around AI and automation'],
  },
  Education: {
    headline: 'Learning products that scale with enrollment',
    summary:
      'Portals, content delivery, and admin backends for institutions and edtech teams—built for accessibility and operational clarity.',
    focus: ['Multi-role experiences and permissions', 'Content and assessment workflows', 'Analytics that guide curriculum and ops'],
  },
}

export const faqs = [
  {
    question: 'How long until we go live?',
    answer: 'Often about 4–10 weeks, depending on how many systems and workflows are involved.',
  },
  {
    question: 'Can you work with our existing software?',
    answer: 'Yes. We plug into the tools you already use—CRMs, spreadsheets, chat, payments, and your own APIs.',
  },
  {
    question: 'What happens after launch?',
    answer: 'We can stay on for fixes, monitoring, security updates, and new features as you grow.',
  },
]

export const trustMarks = ['Secure by Design', 'Performance First', 'Clean Architecture', 'Fast Delivery']

export const caseStudies = [
  {
    title: 'Customer Portal + Admin Suite',
    impact: '-62% support load',
    summary: 'Built a self-serve portal with role-based access, reporting, and a premium UI.',
  },
  {
    title: 'AI Document Automation',
    impact: '-70% manual work',
    summary: 'Automated extraction, validation, and routing with a human-in-the-loop workflow.',
  },
  {
    title: 'Mobile App + Payments',
    impact: '+34% conversion',
    summary: 'Shipped an app with fast onboarding, payments, and analytics-driven optimization.',
  },
]

export const innovationPillars = [
  {
    title: 'Plain language',
    description: 'No jargon overload—you always know what we are building and why.',
  },
  {
    title: 'Smart automation',
    description: 'AI where it saves time; humans stay in charge where it matters.',
  },
  {
    title: 'Built to last',
    description: 'Code and infrastructure you can extend, not throw away in six months.',
  },
]

export const outcomes = [
  { label: 'Cycle Time Reduced', value: 52 },
  { label: 'Manual Work Eliminated', value: 44 },
  { label: 'Page Speed Improvement', value: 38 },
  { label: 'Automation Coverage', value: 61 },
]

export const integrationTiles = [
  { title: 'APIs & Webhooks', detail: 'Secure integrations, event-driven workflows, and reliable retries.', wide: true },
  { title: 'Auth & Roles', detail: 'JWT/OAuth, SSO patterns, RBAC, and permission-aware UIs.' },
  { title: 'Payments', detail: 'Subscription and one-time payments with clean billing flows.' },
  { title: 'Databases', detail: 'Postgres, search, caching, and analytics-friendly schemas.' },
  { title: 'AI pipelines', detail: 'RAG, tool calling, evaluation, and safe automation patterns.' },
  { title: 'DevOps', detail: 'CI/CD, monitoring, error tracking, and performance budgets.' },
]

export const engineeringHighlights = [
  'Discovery workshops with stakeholders and real users.',
  'Design systems + UX flows that feel premium and consistent.',
  'Strict TypeScript, clean architecture, and reviewable PRs.',
  'Performance budgets, monitoring, and error tracking from day one.',
  'Post-launch iteration cycles and product roadmap support.',
]

export const blueprintGoals = [
  'Ship faster',
  'Automate operations',
  'Improve conversion',
  'Reduce support load',
  'AI enablement',
] as const

export const mainNavLinks = [
  { label: 'Solutions', to: '/solutions' },
  { label: 'Industries', to: '/industries' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
] as const

export const socialLinks = {
  facebook: 'https://www.facebook.com/share/1HhJeBHqZb/',
  instagram: 'https://www.instagram.com/dotsel_automation_and_ventures/',
} as const
