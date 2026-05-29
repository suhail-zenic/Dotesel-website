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
    title: 'Custom Shopify themes',
    description:
      'Online Store 2.0 themes tailored to your brand—fast, accessible, and built for conversion.',
  },
  {
    title: 'Shopify app development',
    description:
      'Private and public apps that extend checkout, operations, and customer experience.',
  },
  {
    title: 'Store setup & migration',
    description:
      'Launch new stores or move from WooCommerce, Magento, or another platform without losing SEO.',
  },
  {
    title: 'Speed, CRO & integrations',
    description:
      'Core Web Vitals, payment flows, ERP/3PL, and marketing tools wired in cleanly.',
  },
]

export const stats: Stat[] = [
  { label: 'Shopify stores delivered', value: '120+' },
  { label: 'Client satisfaction', value: '98%' },
  { label: 'Avg. conversion lift', value: '28%' },
  { label: 'Countries served', value: '14' },
]

export const testimonials = [
  {
    quote:
      'Dotsel rebuilt our theme and checkout flow. Page speed improved and our conversion rate followed within weeks.',
    author: 'Priya Nair',
    role: 'Founder, Lumen Skincare',
  },
  {
    quote:
      'They migrated us to Shopify Plus without downtime. Catalog, redirects, and subscriptions were handled properly.',
    author: 'James Cole',
    role: 'E-commerce Director, Northline Goods',
  },
  {
    quote:
      'Our custom app for wholesale pricing went live on schedule. Clear communication and solid Liquid + React work.',
    author: 'Elena Vasquez',
    role: 'COO, Forge Supply Co.',
  },
]

export const storeTypes = [
  'Fashion & apparel',
  'Beauty & wellness',
  'Food & beverage',
  'B2B wholesale',
  'DTC brands',
] as const

export type StoreTypeName = (typeof storeTypes)[number]

export const storeTypeContent: Record<
  StoreTypeName,
  { headline: string; summary: string; focus: string[] }
> = {
  'Fashion & apparel': {
    headline: 'Lookbooks, variants, and size guides that convert',
    summary:
      'We build merchandising flows, collection filters, and mobile-first PDPs for fashion brands on Shopify.',
    focus: [
      'Swatches, bundles, and smart collection rules',
      'International sizing and multi-currency',
      'UGC, reviews, and retention integrations',
    ],
  },
  'Beauty & wellness': {
    headline: 'Subscriptions and compliance-friendly storefronts',
    summary:
      'Recharge-style subscriptions, ingredient transparency, and trust signals baked into the theme.',
    focus: [
      'Subscribe & save and replenishment flows',
      'Regulatory copy and variant labeling',
      'Quiz funnels and personalized recommendations',
    ],
  },
  'Food & beverage': {
    headline: 'Delivery zones, freshness, and repeat orders',
    summary:
      'Local delivery rules, inventory per location, and subscription boxes for food brands.',
    focus: [
      'Location-based shipping and pickup',
      'Expiry-aware merchandising where needed',
      'Loyalty and email capture at checkout',
    ],
  },
  'B2B wholesale': {
    headline: 'Net terms, catalogs, and buyer portals',
    summary:
      'Shopify Plus B2B, custom pricing, and approval workflows for wholesale teams.',
    focus: [
      'Company accounts and price lists',
      'Quick order forms and CSV reorder',
      'ERP and inventory sync patterns',
    ],
  },
  'DTC brands': {
    headline: 'Launch fast, scale without replatforming',
    summary:
      'From first SKU to seven-figure revenue—we architect Shopify stores that grow with you.',
    focus: [
      'Launch playbooks and theme systems',
      'Paid media landing pages and A/B tests',
      'Headless or Hydrogen when the roadmap calls for it',
    ],
  },
}

export const faqs = [
  {
    question: 'Are you certified Shopify developers?',
    answer:
      'Yes. We are a dedicated team of Shopify developers—theme, app, and store specialists. We work in Liquid, Shopify APIs, and the modern app stack daily.',
  },
  {
    question: 'How long does a typical Shopify project take?',
    answer:
      'Theme builds often run 4–8 weeks. Migrations and custom apps vary with catalog size and integrations—we give a clear timeline after discovery.',
  },
  {
    question: 'Can you migrate our existing store to Shopify?',
    answer:
      'Absolutely. We handle products, customers, orders history where supported, URL redirects, and SEO preservation.',
  },
  {
    question: 'Do you support Shopify Plus?',
    answer:
      'Yes—checkout extensibility, B2B, launchpad, and Plus-specific workflows are part of our toolkit.',
  },
]

export const trustMarks = [
  'Shopify-first team',
  'Conversion-focused builds',
  'Clean, maintainable code',
  'Post-launch support',
]

export const caseStudies = [
  {
    title: 'Fashion brand theme rebuild',
    impact: '+32% conversion',
    summary:
      'Custom OS 2.0 theme, improved PDP, and faster mobile checkout for a mid-market apparel label.',
  },
  {
    title: 'Magento → Shopify Plus migration',
    impact: '6-week go-live',
    summary:
      '12k SKUs, B2B price lists, and ERP sync with zero extended downtime during cutover.',
  },
  {
    title: 'Wholesale pricing app',
    impact: '-40% manual orders',
    summary:
      'Private app for tiered pricing and quick reorder—integrated with existing buyer accounts.',
  },
]

export const innovationPillars = [
  {
    title: 'Shopify-native craft',
    description: 'We build the way Shopify intends—themes, apps, and admin that stay upgrade-friendly.',
  },
  {
    title: 'Revenue over vanity',
    description: 'Every decision ties to conversion, speed, and operations your team runs daily.',
  },
  {
    title: 'Partners, not vendors',
    description: 'Plain updates, honest timelines, and developers you can reach after launch.',
  },
]

export const outcomes = [
  { label: 'Faster page loads', value: 45 },
  { label: 'Checkout friction reduced', value: 38 },
  { label: 'Manual ops time saved', value: 52 },
  { label: 'Mobile conversion uplift', value: 29 },
]

export const shopifyStack = [
  { title: 'Liquid & OS 2.0', detail: 'Sections, metafields, and theme architecture that merchants can manage.', wide: true },
  { title: 'Shopify Functions', detail: 'Discounts, delivery, and payment customizations at checkout.' },
  { title: 'Storefront API', detail: 'Headless and Hydrogen when you need custom frontends.' },
  { title: 'Admin & Flow', detail: 'Automations, webhooks, and operational tooling in admin.' },
  { title: 'Apps & extensions', detail: 'React Router apps, checkout UI extensions, and embedded admin.' },
  { title: 'Integrations', detail: 'Klaviyo, Recharge, ERP, 3PL, and analytics wired correctly.' },
]

export const processSteps = [
  {
    step: '01',
    title: 'Discover',
    body: 'Goals, catalog, integrations, and success metrics—aligned before design starts.',
  },
  {
    step: '02',
    title: 'Build',
    body: 'Theme, app, or migration in milestones with staging previews you can share.',
  },
  {
    step: '03',
    title: 'Launch & grow',
    body: 'Go-live support, monitoring, and iteration as your store scales.',
  },
]

export type PortfolioProject = {
  name: string
  url: string
  displayUrl: string
  /** Optional local screenshot in /public e.g. /portfolio/taruni.webp */
  previewImage?: string
}

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

export const mainNavLinks = [
  { label: 'Services', to: '/solutions' },
  { label: 'Portfolio', to: '/case-studies' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
] as const

export const socialLinks = {
  facebook: 'https://www.facebook.com/share/1HhJeBHqZb/',
  instagram: 'https://www.instagram.com/dotsel_automation_and_ventures/',
} as const

export const siteTagline = 'A team of Shopify developers building stores that sell.'

export const whatsappUrl =
  'https://wa.me/918848260744?text=Hi%20Dotsel%2C%20we%27re%20looking%20for%20Shopify%20developers%20for%20our%20store.'

/** @deprecated use storeTypes */
export const industries = storeTypes

/** @deprecated use storeTypeContent */
export const industryPageContent = storeTypeContent

export const integrationTiles = shopifyStack

export const engineeringHighlights = processSteps.map((s) => `${s.title}: ${s.body}`)

export const blueprintGoals = ['Launch store', 'Migrate platform', 'Custom theme', 'Build an app', 'Improve conversion'] as const
