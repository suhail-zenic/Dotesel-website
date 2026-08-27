export type Service = {
  title: string
  description: string
}

export type ProcessStep = {
  step: string
  title: string
  body: string
}

export type WhyDotselItem = {
  title: string
  description: string
}

export type TechnologyTile = {
  title: string
  detail: string
}

export const companyName = 'Dotsel Automation & Venture Pvt. Ltd.'

export const heroHeadline = [
  'BEYOND SOFTWARE.',
  'BUILT FOR LONG-TERM',
  'PARTNERSHIPS.',
] as const

export const siteTagline =
  'From the first idea to ongoing growth, we stand beside your business every step of the way.'

export const contactPhone = '+91 7902531846'
export const contactPhoneTel = '917902531846'
export const siteUrl = 'dotselautomation.com'

export const whoWeAre = [
  'Dotsel Automation & Venture Pvt. Ltd. is a software development and technology service company founded in 2023, currently operating from Adimali, Idukki, Kerala.',
  'We collaborate with brands as their technology and software development partner, providing reliable, stress-free software services tailored to their business needs. Rather than simply delivering a project and moving on, we work closely with our clients throughout their journey—from understanding their ideas and requirements to developing, launching, maintaining, and improving their software solutions.',
  'We believe the best technology partnerships are built on trust, clear communication, and long-term collaboration. Our goal is to work and grow together with brands that are looking for a dependable software development partner they can rely on for the long term.',
] as const

export const beliefs = [
  'Committed to delivering reliable, high-standard solutions',
  'Always striving to improve, innovate, and deliver better.',
  'Dedicated to supporting our clients beyond delivery.',
  'We grow together with the brands we work with.',
] as const

export const services: Service[] = [
  {
    title: 'Custom Software Development',
    description:
      'Business-focused software built around your unique processes, requirements, and goals.',
  },
  {
    title: 'Mobile App Development',
    description:
      'Modern Android & iOS applications designed for performance, usability, and scalability.',
  },
  {
    title: 'Web & Business Platforms',
    description:
      'Professional websites, web applications, portals, and platforms that strengthen your digital presence.',
  },
  {
    title: 'AI-Powered Solutions',
    description:
      'Practical AI tools, intelligent assistants, and automation designed to improve productivity and decision-making.',
  },
  {
    title: 'UI/UX & Product Design',
    description:
      'Clean, intuitive, and user-focused experiences that make your software simple and effective.',
  },
  {
    title: 'CRM & ERP Solutions',
    description:
      'Centralize your operations, customers, sales, finance, and business workflows in one powerful system.',
  },
]

export const processSteps: ProcessStep[] = [
  {
    step: '1',
    title: 'Understand',
    body: 'We first understand your business, challenges, goals, and users before recommending a solution.',
  },
  {
    step: '2',
    title: 'Plan',
    body: 'We define the right features, technology, timeline, and development strategy to create a clear roadmap.',
  },
  {
    step: '3',
    title: 'Build',
    body: 'Our team develops with a focus on quality, performance, security, scalability, and user experience.',
  },
  {
    step: '4',
    title: 'Deliver',
    body: 'We ensure proper testing, smooth deployment, and a reliable handover with everything your business needs.',
  },
  {
    step: '5',
    title: 'Support',
    body: "Our relationship doesn't end after delivery. We provide ongoing support, maintenance, improvements, and guidance as your business grows.",
  },
]

export const faqs = [
  {
    question: 'How do you charge for a project?',
    answer:
      "We don't follow a one-size-fits-all pricing model. We first understand your business, target audience, and requirements, then define the necessary modules and features. The project cost is calculated based on the scope, complexity, and modules involved, ensuring you pay for what your business actually needs.",
  },
  {
    question: 'Do you provide support after the project is completed?',
    answer:
      'Yes. We provide support and maintenance options for bug fixes, updates, improvements, server management, and ongoing technical assistance.',
  },
  {
    question: 'Do you work with clients for the long term?',
    answer:
      'Yes. We aim to build long-term partnerships rather than simply completing a project. As your business evolves, we can continue to improve and support your technology.',
  },
  {
    question: 'How involved do we need to be during development?',
    answer:
      'We keep communication simple and structured. We discuss requirements, share progress, collect feedback, and keep you informed throughout the development process.',
  },
  {
    question: 'Can you improve or maintain our existing application?',
    answer:
      'Yes. We can work with existing software, understand the current system, fix issues, add new features, improve performance, and continue development.',
  },
  {
    question: 'Can the software grow with our business?',
    answer:
      'Yes. We plan the architecture and modules with future growth in mind, allowing new features, users, integrations, and business requirements to be added over time.',
  },
]

export const whyDotsel: WhyDotselItem[] = [
  {
    title: 'Business-First Approach',
    description: 'We understand your business before recommending technology',
  },
  {
    title: 'Solutions Built For You',
    description: 'Every solution is planned around your requirements, workflows, and audience.',
  },
  {
    title: 'Transparent Communication',
    description: 'Clear scope, regular updates, and no unnecessary complexity.',
  },
  {
    title: 'Quality That Lasts',
    description: 'We focus on reliable, scalable, and maintainable software.',
  },
  {
    title: 'Long-Term Partnership',
    description:
      'We stay with you beyond launch through support, maintenance, and improvements.',
  },
  {
    title: 'Ready To Grow',
    description: 'Your software is built to adapt as your business and requirements evolve.',
  },
]

export const technologies: TechnologyTile[] = [
  {
    title: 'Mobile App Development',
    detail: 'Flutter · Android · iOS · Cross-Platform Applications',
  },
  {
    title: 'Backend Development',
    detail: 'Node.js · PHP · REST APIs · FastApi · Authentication · Database Systems',
  },
  {
    title: 'AI & Automation',
    detail: 'AI Assistants · AI Chatbots · Voice AI · AI APIs · Business Automation',
  },
  {
    title: 'Static Website Development',
    detail: 'Flutter · Android · iOS · Cross-Platform Applications',
  },
  {
    title: 'Database & Storage',
    detail: 'MySQL · MongoDB · Firebase · Cloud Storage',
  },
  {
    title: 'UI/UX & Design',
    detail: 'Responsive Design · User Interfaces · Prototyping · Design Systems',
  },
  {
    title: 'Static Website Development',
    detail: 'PHP · Node.js · React · MySQL · MongoDB · REST APIs',
  },
  {
    title: 'Cloud & Server',
    detail: 'Cloud Hosting · VPS · Server Management · Deployment · SSL',
  },
  {
    title: 'Security & Authentication',
    detail: 'User Authentication · Role Management · API Security · Data Protection',
  },
]

export const ctaClosingLines = [
  "Let's discuss your idea.",
  "Let's build the solution.",
  "Let's grow together.",
] as const

export const ctaTagline = 'Your Idea • Our Expertise • One Long-Term Partnership'

export const mainNavLinks = [
  { label: 'Services', to: '/solutions' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
] as const

export const socialLinks = {
  facebook: 'https://www.facebook.com/share/1HhJeBHqZb/',
  instagram: 'https://www.instagram.com/dotsel_automation_and_ventures/',
} as const

export const whatsappUrl =
  'https://wa.me/917902531846?text=Hi%20Dotsel%2C%20I%27d%20like%20to%20discuss%20a%20project%20with%20you.'

/** @deprecated kept for portfolio page */
export type PortfolioProject = {
  name: string
  url: string
  displayUrl: string
  previewImage?: string
}

/** @deprecated kept for portfolio page */
export type PortfolioCategory = {
  id: string
  emoji: string
  label: string
  projects: PortfolioProject[]
}

function normalizePortfolioUrl(raw: string): string {
  const trimmed = raw.trim().replace(/^https?:\/\//i, '')
  return `https://${trimmed.replace(/\/$/, '')}`
}

function displayHost(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, '')
  } catch {
    return url
  }
}

function project(name: string, rawUrl: string): PortfolioProject {
  const url = normalizePortfolioUrl(rawUrl)
  return { name, url, displayUrl: displayHost(url) }
}

/** @deprecated kept for portfolio page */
export const portfolioCategories: PortfolioCategory[] = [
  {
    id: 'clothing',
    emoji: '👗',
    label: 'Clothing',
    projects: [
      project('Taruni', 'www.taruni.in'),
      project('Malika Clothing', 'www.malikaclothing.qa'),
      project('Naari by Draknair', 'www.naaribyardraknair.com'),
      project('Fly Hoch', 'www.flyhoch.com'),
    ],
  },
  {
    id: 'food',
    emoji: '🍔',
    label: 'Food & Beverages',
    projects: [
      project('GOCS', 'https://gocs.shop/'),
      project('Domnom', 'www.domnom.in'),
    ],
  },
  {
    id: 'home',
    emoji: '🏠',
    label: 'Curtains & Home Decor',
    projects: [project('Sreeyang', 'https://www.sreeyang.com/')],
  },
]

/** @deprecated kept for legacy pages */
export const innovationPillars = whyDotsel.map((item) => ({
  title: item.title,
  description: item.description,
}))

/** @deprecated kept for legacy pages */
export const shopifyStack = technologies

/** @deprecated kept for legacy pages */
export const storeTypes = [
  'Fashion & apparel',
  'Beauty & wellness',
  'Food & beverage',
  'B2B wholesale',
  'DTC brands',
] as const

/** @deprecated kept for legacy pages */
export const storeTypeContent: Record<
  (typeof storeTypes)[number],
  { headline: string; summary: string; focus: string[] }
> = {
  'Fashion & apparel': {
    headline: 'Lookbooks, variants, and size guides that convert',
    summary: 'We build merchandising flows, collection filters, and mobile-first PDPs for fashion brands.',
    focus: ['Swatches, bundles, and smart collection rules', 'International sizing and multi-currency', 'UGC, reviews, and retention integrations'],
  },
  'Beauty & wellness': {
    headline: 'Subscriptions and compliance-friendly storefronts',
    summary: 'Recharge-style subscriptions, ingredient transparency, and trust signals baked into the theme.',
    focus: ['Subscribe & save and replenishment flows', 'Regulatory copy and variant labeling', 'Quiz funnels and personalized recommendations'],
  },
  'Food & beverage': {
    headline: 'Delivery zones, freshness, and repeat orders',
    summary: 'Local delivery rules, inventory per location, and subscription boxes for food brands.',
    focus: ['Location-based shipping and pickup', 'Expiry-aware merchandising where needed', 'Loyalty and email capture at checkout'],
  },
  'B2B wholesale': {
    headline: 'Net terms, catalogs, and buyer portals',
    summary: 'Shopify Plus B2B, custom pricing, and approval workflows for wholesale teams.',
    focus: ['Company accounts and price lists', 'Quick order forms and CSV reorder', 'ERP and inventory sync patterns'],
  },
  'DTC brands': {
    headline: 'Launch fast, scale without replatforming',
    summary: 'From first SKU to seven-figure revenue—we architect stores that grow with you.',
    focus: ['Launch playbooks and theme systems', 'Paid media landing pages and A/B tests', 'Headless or Hydrogen when the roadmap calls for it'],
  },
}

/** @deprecated kept for legacy pages */
export const caseStudies = [
  {
    title: 'Fashion brand theme rebuild',
    impact: '+32% conversion',
    summary: 'Custom OS 2.0 theme, improved PDP, and faster mobile checkout for a mid-market apparel label.',
  },
  {
    title: 'Magento → Shopify Plus migration',
    impact: '6-week go-live',
    summary: '12k SKUs, B2B price lists, and ERP sync with zero extended downtime during cutover.',
  },
  {
    title: 'Wholesale pricing app',
    impact: '-40% manual orders',
    summary: 'Private app for tiered pricing and quick reorder—integrated with existing buyer accounts.',
  },
]

/** @deprecated kept for legacy pages */
export const industries = storeTypes

/** @deprecated kept for legacy pages */
export const industryPageContent = storeTypeContent

/** @deprecated kept for legacy pages */
export const integrationTiles = technologies

/** @deprecated kept for legacy pages */
export const engineeringHighlights = processSteps.map((s) => `${s.title}: ${s.body}`)

/** @deprecated kept for legacy pages */
export const blueprintGoals = ['Launch store', 'Migrate platform', 'Custom theme', 'Build an app', 'Improve conversion'] as const
