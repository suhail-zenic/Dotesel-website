import { useEffect, useMemo, useRef, useState, type CSSProperties, type MouseEvent as ReactMouseEvent } from 'react'
import { Link } from 'react-router-dom'
import { AnimatedStatValue } from '../components/AnimatedStatValue'
import { Reveal } from '../components/Reveal'
import { SiteHeader } from '../components/SiteHeader'
import {
  blueprintGoals,
  caseStudies,
  engineeringHighlights,
  faqs,
  industries,
  type IndustryName,
  innovationPillars,
  integrationTiles,
  outcomes,
  services,
  stats,
  testimonials,
  trustMarks,
} from '../home-data'

export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [activeIndustry, setActiveIndustry] = useState<IndustryName>(industries[0])
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [startSnapshotCount, setStartSnapshotCount] = useState(false)
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'success'>('idle')
  const [blueprintGoal, setBlueprintGoal] = useState<(typeof blueprintGoals)[number]>(blueprintGoals[0])
  const [blueprintStep, setBlueprintStep] = useState<1 | 2 | 3>(1)
  const snapshotRef = useRef<HTMLDivElement | null>(null)

  const currentTestimonial = useMemo(
    () => testimonials[activeTestimonial],
    [activeTestimonial],
  )

  const [studioUseCase, setStudioUseCase] = useState<'AI Support' | 'Lead Pipeline' | 'Document AI' | 'E-commerce Ops'>(
    'AI Support',
  )

  useEffect(() => {
    const element = snapshotRef.current
    if (!element || startSnapshotCount) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartSnapshotCount(true)
          observer.disconnect()
        }
      },
      { threshold: 0.35 },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [startSnapshotCount])

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => window.clearInterval(id)
  }, [])

  const onBentoMove = (event: ReactMouseEvent<HTMLElement>) => {
    const el = event.currentTarget
    const rect = el.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width) * 100
    const y = ((event.clientY - rect.top) / rect.height) * 100
    el.style.setProperty('--mx', `${x}%`)
    el.style.setProperty('--my', `${y}%`)
  }

  return (
    <>
      <div className="relative overflow-hidden">
        <div className="spotlight-layer" aria-hidden />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.22),transparent_36%),radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.2),transparent_32%),radial-gradient(circle_at_55%_85%,rgba(139,92,246,0.2),transparent_35%)]" />
        <div className="orb orb-cyan" />
        <div className="orb orb-blue" />

        <SiteHeader variant="hero" />

        <section className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-6 pb-20 pt-10 lg:grid-cols-2 lg:px-10 lg:pb-24">
          <div className="hero-stagger">
            <p className="mb-5 inline-flex rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-cyan-200">
              Software • Apps • AI Automation
            </p>
            <h1 className="text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              High-end software, apps, and AI automations for modern businesses.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Dotsel Automation designs and builds premium digital products — web apps, mobile apps,
              and AI automations — engineered for speed, reliability, and measurable ROI.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <button
                type="button"
                className="btn-pulse magnetic-btn rounded-full bg-cyan-400 px-7 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Start Your Transformation
              </button>
              <Link
                to="/case-studies"
                className="rounded-full border border-slate-600 px-7 py-3 text-sm font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-200"
              >
                View Case Studies
              </Link>
            </div>
          </div>

          <div
            ref={snapshotRef}
            className="lift-card rounded-3xl border border-slate-800/80 bg-gradient-to-b from-slate-900 to-slate-950 p-6 shadow-2xl shadow-slate-950/70 ring-1 ring-white/5 sm:p-8"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Live Performance Snapshot</p>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4">
              {stats.map((stat) => (
                <article
                  key={stat.label}
                  className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-400/40"
                >
                  <p className="text-2xl font-semibold text-cyan-200">
                    <AnimatedStatValue value={stat.value} start={startSnapshotCount} />
                  </p>
                  <p className="mt-1 text-sm text-slate-300">{stat.label}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>

      <main className="mx-auto min-w-0 w-full max-w-7xl space-y-22 px-6 py-16 lg:px-10">
        <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {trustMarks.map((mark) => (
            <article
              key={mark}
              className="border-shimmer rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-center text-sm text-slate-200"
            >
              {mark}
            </article>
          ))}
        </section>

        <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 px-4 py-5 sm:px-6">
          <div className="marquee-track flex min-w-max items-center gap-8 text-sm text-slate-300">
            {[
              'Product Design',
              'Web Apps',
              'Mobile Apps',
              'AI Automations',
              'API Integrations',
              'Dashboards',
              'DevOps',
              'Security',
              'Analytics',
            ]
              .concat([
                'Product Design',
                'Web Apps',
                'Mobile Apps',
                'AI Automations',
                'API Integrations',
                'Dashboards',
              ])
              .map((item, index) => (
                <span key={`${item}-${index}`} className="rounded-full border border-slate-700 px-4 py-2">
                  {item}
                </span>
              ))}
          </div>
        </section>

        <Reveal>
          <section>
            <div className="mb-8">
              <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">Why Dotsel</p>
              <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">
                A premium software partner, not just a vendor
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {innovationPillars.map((pillar) => (
                <article
                  key={pillar.title}
                  className="lift-card rounded-2xl border border-slate-800 bg-slate-900/70 p-6"
                >
                  <h3 className="text-xl font-medium text-cyan-100">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                    {pillar.description}
                  </p>
                </article>
              ))}
            </div>
          </section>
        </Reveal>

        <section id="solutions">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">Capabilities</p>
              <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">
                Built for complexity, crafted for clarity.
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
              We combine product thinking with modern engineering to deliver software that is secure,
              measurable, and easy to scale.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.title}
                className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-slate-900"
              >
                <h3 className="text-xl font-medium text-white transition group-hover:text-cyan-200">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="case-studies" className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">Featured Results</p>
              <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">
                Transformations with measurable outcomes
              </h2>
            </div>
            <button
              type="button"
              className="rounded-full border border-slate-700 px-5 py-2 text-sm text-slate-200 transition hover:border-cyan-300/50 hover:text-cyan-200"
            >
              Explore Full Portfolio
            </button>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <article
                key={study.title}
                className="lift-card rounded-2xl border border-slate-800 bg-slate-950/70 p-5"
              >
                <p className="text-xs uppercase tracking-[0.12em] text-slate-400">Case Study</p>
                <h3 className="mt-2 text-xl font-semibold text-white">{study.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{study.summary}</p>
                <p className="mt-6 text-lg font-semibold text-cyan-200">{study.impact}</p>
              </article>
            ))}
          </div>
        </section>

        <Reveal>
          <section className="mesh-section relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8">
            <div className="mesh-bg pointer-events-none" aria-hidden />
            <p className="relative text-xs uppercase tracking-[0.18em] text-cyan-300">Connectivity lab</p>
            <h2 className="relative mt-2 text-3xl font-semibold text-white sm:text-4xl">
              Integration surfaces we design every day
            </h2>
            <p className="relative mt-3 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
              A modular map of how your product connects users, data, and systems — without brittle one-off
              scripts.
            </p>
            <div className="relative mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {integrationTiles.map((tile) => (
                <article
                  key={tile.title}
                  className={`bento-tile rounded-2xl border border-slate-700/80 bg-slate-950/50 p-5 transition hover:border-cyan-400/35 ${
                    tile.wide ? 'md:col-span-2' : ''
                  }`}
                  onMouseMove={onBentoMove}
                >
                  <h3 className="text-lg font-semibold text-white">{tile.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{tile.detail}</p>
                </article>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 px-4 py-6 sm:px-6">
            <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">Signal reel</p>
            <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">
              A high-end feel, without heavy libraries
            </h2>
            <div className="mt-7 overflow-hidden">
              <div className="reel-track flex min-w-max gap-4">
                {[
                  'Live KPI Dashboards',
                  'Secure Edge Gateways',
                  'Digital Workflows',
                  'Vision + QA AI',
                  'AI Workflow Orchestration',
                  'Role-Based Access',
                  'Analytics & Insights',
                  'Secure Integrations',
                ]
                  .concat(['Live KPI Dashboards', 'Secure Edge Gateways', 'Digital Workflows', 'Vision + QA AI'])
                  .map((label, index) => (
                    <article
                      key={`${label}-${index}`}
                      className="reel-card rounded-2xl border border-slate-800 bg-slate-950/60 px-5 py-4 text-sm text-slate-200"
                    >
                      <span className="text-cyan-200">●</span> {label}
                    </article>
                  ))}
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">Blueprint Generator</p>
            <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">
              Build a tailored automation roadmap in 30 seconds
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
              Pick your industry and priority. We’ll generate a premium, phase-wise plan with the right
              modules and rollout order.
            </p>

            <div className="mt-7 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-white">Step {blueprintStep} of 3</p>
                  <div className="flex gap-2">
                    {[1, 2, 3].map((n) => (
                      <span
                        key={n}
                        className={`h-2.5 rounded-full transition ${
                          blueprintStep === n ? 'w-10 bg-cyan-300' : 'w-6 bg-slate-700'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="mt-5 space-y-5">
                  <div>
                    <p className="text-xs uppercase tracking-[0.12em] text-slate-400">Industry</p>
                    <div className="mt-3 flex flex-wrap gap-3">
                      {industries.map((industry) => (
                        <button
                          key={`bp-${industry}`}
                          type="button"
                          onClick={() => {
                            setActiveIndustry(industry)
                            setBlueprintStep(2)
                          }}
                          className={`rounded-full px-4 py-2 text-xs uppercase tracking-[0.08em] transition ${
                            activeIndustry === industry
                              ? 'bg-cyan-300 text-slate-950'
                              : 'border border-slate-700 text-slate-200 hover:border-cyan-300/40'
                          }`}
                        >
                          {industry}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.12em] text-slate-400">Primary goal</p>
                    <div className="mt-3 flex flex-wrap gap-3">
                      {blueprintGoals.map((goal) => (
                        <button
                          key={goal}
                          type="button"
                          onClick={() => {
                            setBlueprintGoal(goal)
                            setBlueprintStep(3)
                          }}
                          className={`rounded-full px-4 py-2 text-xs uppercase tracking-[0.08em] transition ${
                            blueprintGoal === goal
                              ? 'bg-cyan-300 text-slate-950'
                              : 'border border-slate-700 text-slate-200 hover:border-cyan-300/40'
                          }`}
                        >
                          {goal}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <button
                      type="button"
                      className="magnetic-btn rounded-full bg-cyan-300 px-6 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
                      onClick={() => setBlueprintStep(3)}
                    >
                      Generate plan
                    </button>
                    <button
                      type="button"
                      className="rounded-full border border-slate-700 px-6 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-300/40 hover:text-cyan-200"
                      onClick={() => setBlueprintStep(1)}
                    >
                      Reset
                    </button>
                  </div>
                </div>
              </div>

              <aside className="relative overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-5">
                <div className="scanline" />
                <p className="text-xs uppercase tracking-[0.12em] text-slate-400">Generated roadmap</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">{activeIndustry} blueprint</h3>
                <p className="mt-2 text-sm text-slate-300">
                  Priority: <span className="text-cyan-200">{blueprintGoal}</span>
                </p>

                <div className="mt-6 space-y-4">
                  {[
                    { title: 'Phase 1', body: 'Discovery + product blueprint (users, flows, data model, architecture).' },
                    { title: 'Phase 2', body: 'Build + integration (web/mobile app, APIs, auth, dashboards, automation).' },
                    { title: 'Phase 3', body: 'AI enablement + optimization (agents, workflows, monitoring, iteration).' },
                  ].map((row, index) => (
                    <div
                      key={row.title}
                      className="highlight-row rounded-xl border border-slate-800/80 bg-slate-950/45 px-4 py-3"
                      style={{ '--row-delay': `${index * 90}ms` } as CSSProperties}
                    >
                      <p className="text-sm font-semibold text-cyan-200">{row.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-slate-300">{row.body}</p>
                    </div>
                  ))}
                </div>
              </aside>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900/90 to-slate-950 p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">Delivery promise</p>
            <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">
              Engineering rigor at every milestone
            </h2>
            <ul className="mt-8 space-y-4">
              {engineeringHighlights.map((line, index) => (
                <li
                  key={line}
                  className="highlight-row flex gap-4 rounded-xl border border-slate-800/80 bg-slate-950/40 px-4 py-3"
                  style={{ '--row-delay': `${index * 80}ms` } as CSSProperties}
                >
                  <span
                    className="check-orbit mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 text-sm text-cyan-200"
                    aria-hidden
                  >
                    ✓
                  </span>
                  <span className="text-sm leading-relaxed text-slate-300 sm:text-base">{line}</span>
                </li>
              ))}
            </ul>
          </section>
        </Reveal>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          <article className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">Impact Visualizer</p>
            <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">
              Performance uplift you can see instantly
            </h2>
            <div className="mt-7 space-y-5">
              {outcomes.map((item, index) => (
                <div key={item.label}>
                  <div className="mb-2 flex items-center justify-between text-sm text-slate-200">
                    <span>{item.label}</span>
                    <span className="text-cyan-200">{item.value}%</span>
                  </div>
                  <div className="h-2.5 overflow-hidden rounded-full bg-slate-800">
                    <div
                      className="progress-fill h-full rounded-full bg-gradient-to-r from-cyan-300 to-blue-400"
                      style={
                        {
                          '--target-width': `${item.value}%`,
                          '--delay': `${index * 0.2}s`,
                        } as CSSProperties
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
          </article>

          <aside className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-6 sm:p-8">
            <div className="scanline" />
            <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">Live Command Center</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">System heartbeat preview</h3>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="float-tile rounded-2xl border border-slate-700 bg-slate-900/80 p-4">
                <p className="text-xs text-slate-400">Connected Devices</p>
                <p className="mt-2 text-2xl font-semibold text-cyan-200">1,248</p>
              </div>
              <div className="float-tile delay-1 rounded-2xl border border-slate-700 bg-slate-900/80 p-4">
                <p className="text-xs text-slate-400">Alerts Resolved</p>
                <p className="mt-2 text-2xl font-semibold text-cyan-200">97%</p>
              </div>
              <div className="float-tile delay-2 rounded-2xl border border-slate-700 bg-slate-900/80 p-4">
                <p className="text-xs text-slate-400">Latency</p>
                <p className="mt-2 text-2xl font-semibold text-cyan-200">42ms</p>
              </div>
              <div className="float-tile delay-3 rounded-2xl border border-slate-700 bg-slate-900/80 p-4">
                <p className="text-xs text-slate-400">Lines Optimized</p>
                <p className="mt-2 text-2xl font-semibold text-cyan-200">32</p>
              </div>
            </div>
          </aside>
        </section>

        <Reveal>
          <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8">
            <div className="scanline" />
            <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">AI Automation Studio</p>
            <div className="mt-2 flex flex-wrap items-end justify-between gap-4">
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                See what we automate — instantly
              </h2>
              <p className="max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
                Pick a use case and preview a production-ready workflow: triggers, AI steps, human approvals,
                and integrations.
              </p>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <p className="text-xs uppercase tracking-[0.12em] text-slate-400">Use cases</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {(['AI Support', 'Lead Pipeline', 'Document AI', 'E-commerce Ops'] as const).map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setStudioUseCase(item)}
                      className={`rounded-full px-4 py-2 text-xs uppercase tracking-[0.08em] transition ${
                        studioUseCase === item
                          ? 'bg-cyan-300 text-slate-950'
                          : 'border border-slate-700 text-slate-200 hover:border-cyan-300/40'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-950/55 p-4">
                  <p className="text-xs uppercase tracking-[0.12em] text-slate-400">Trigger</p>
                  <p className="mt-2 text-sm text-slate-200">
                    {studioUseCase === 'AI Support' && 'New support ticket arrives (email / chat / form).'}
                    {studioUseCase === 'Lead Pipeline' && 'A lead is captured from ads / website / WhatsApp.'}
                    {studioUseCase === 'Document AI' && 'A PDF is uploaded (invoice / KYC / contract).'}
                    {studioUseCase === 'E-commerce Ops' && 'A new order is created (Shopify / WooCommerce).'}
                  </p>
                </div>
              </div>

              <aside className="relative overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-5">
                <p className="text-xs uppercase tracking-[0.12em] text-slate-400">Workflow preview</p>
                <div className="mt-5 space-y-3">
                  {(
                    studioUseCase === 'AI Support'
                      ? [
                          'Classify intent + priority (AI)',
                          'Draft response with knowledge base (AI)',
                          'Human review for high-risk tickets',
                          'Sync status to CRM + notify Slack',
                        ]
                      : studioUseCase === 'Lead Pipeline'
                        ? [
                            'Enrich lead from public signals (AI)',
                            'Route to correct sales owner',
                            'Auto-follow-up via WhatsApp/email',
                            'Update pipeline stage + dashboard',
                          ]
                        : studioUseCase === 'Document AI'
                          ? [
                              'Extract fields + validate (AI)',
                              'Detect anomalies + missing data',
                              'Human approval for exceptions',
                              'Push to database + generate report',
                            ]
                          : [
                              'Fraud/risk check signals (AI)',
                              'Create packing + delivery tasks',
                              'Auto customer updates',
                              'Ops dashboard + exception alerts',
                            ]
                  ).map((step, index) => (
                    <div
                      key={step}
                      className="highlight-row rounded-xl border border-slate-800/80 bg-slate-950/45 px-4 py-3"
                      style={{ '--row-delay': `${index * 90}ms` } as CSSProperties}
                    >
                      <p className="text-sm text-slate-200">
                        <span className="mr-2 text-cyan-200">●</span>
                        {step}
                      </p>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  className="magnetic-btn mt-6 w-full rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
                >
                  Build this automation for me
                </button>
              </aside>
            </div>
          </section>
        </Reveal>

        <section id="industries" className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <article className="lift-card rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">Interactive Experience</p>
            <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">Product Orbit</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
              A living architecture model showing how users, data, and AI move through your product.
            </p>

            <div className="relative mt-8 grid place-items-center overflow-hidden py-6">
              <div className="orbit-ring h-64 w-64 rounded-full border border-cyan-300/30 sm:h-72 sm:w-72" />
              <div className="orbit-ring absolute h-48 w-48 rounded-full border border-indigo-300/30" />
              <div className="orbit-center absolute rounded-full border border-cyan-300/40 bg-cyan-400/15 px-4 py-2 text-xs uppercase tracking-[0.12em] text-cyan-100">
                Dotsel Core
              </div>
              {['Users', 'APIs', 'Cloud', 'AI'].map((node, index) => (
                <div
                  key={node}
                  className={`orbit-node orbit-delay-${index} absolute rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs text-slate-200`}
                >
                  {node}
                </div>
              ))}
            </div>
          </article>

          <aside className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">Industries</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">Solutions by sector</h3>
            <div className="mt-5 flex flex-wrap gap-3">
              {industries.map((industry) => (
                <button
                  key={industry}
                  type="button"
                  onClick={() => setActiveIndustry(industry)}
                  className={`rounded-full px-4 py-2 text-xs uppercase tracking-[0.08em] transition ${
                    activeIndustry === industry
                      ? 'bg-cyan-300 text-slate-950'
                      : 'border border-slate-700 text-slate-200 hover:border-cyan-300/40'
                  }`}
                >
                  {industry}
                </button>
              ))}
            </div>
            <p className="mt-6 text-sm leading-relaxed text-slate-300 sm:text-base">
              {activeIndustry} workflows are tailored with compliance-first architecture, real-time
              control visibility, and phase-wise deployment to avoid production interruption.
            </p>
          </aside>
        </section>

        <section className="grid gap-6 rounded-3xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">Methodology</p>
            <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">
              A clear 4-step delivery framework
            </h2>
            <div className="mt-6 space-y-5">
              {[
                'Discovery & Systems Audit',
                'Architecture & Workflow Design',
                'Deployment & Integration',
                'Optimization & Continuous Support',
              ].map((step, index) => (
                <div key={step} className="flex gap-4">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-cyan-300/40 bg-cyan-400/10 text-sm text-cyan-100">
                    {index + 1}
                  </div>
                  <p className="text-sm text-slate-200 sm:text-base">{step}</p>
                </div>
              ))}
            </div>
          </div>
          <aside className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5 sm:p-6">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Impact Focus</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-300 sm:text-base">
              <li>Lower operational costs through automation intelligence</li>
              <li>Improve production consistency and safety compliance</li>
              <li>Enable real-time monitoring and decision dashboards</li>
              <li>Scale faster with modular, future-ready systems</li>
            </ul>
          </aside>
        </section>

        <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">Project Timeline</p>
          <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">From idea to measurable impact</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              {
                title: 'Week 1-2',
                detail: 'Audit systems, gather baseline metrics, and map integration constraints.',
              },
              {
                title: 'Week 3-6',
                detail: 'Deploy automation modules, set up dashboards, and test line safety logic.',
              },
              {
                title: 'Week 7+',
                detail: 'Optimize through continuous data learning and KPI-driven iteration.',
              },
            ].map((phase) => (
              <article
                key={phase.title}
                className="lift-card rounded-2xl border border-slate-800 bg-slate-950/70 p-5"
              >
                <p className="text-sm font-semibold text-cyan-200">{phase.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{phase.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">Transformation Story</p>
          <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">
            Before vs after Dotsel deployment
          </h2>
          <div className="mt-7 grid gap-5 md:grid-cols-2">
            <article className="group rounded-2xl border border-rose-300/20 bg-rose-400/5 p-5 transition hover:-translate-y-1">
              <p className="text-xs uppercase tracking-[0.12em] text-rose-200">Before</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li>Manual handoffs and slow workflows</li>
                <li>Data silos across tools and teams</li>
                <li>Unclear ownership and delayed decisions</li>
              </ul>
            </article>
            <article className="group rounded-2xl border border-emerald-300/20 bg-emerald-400/5 p-5 transition hover:-translate-y-1">
              <p className="text-xs uppercase tracking-[0.12em] text-emerald-200">After</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li>AI automations with human-in-the-loop controls</li>
                <li>Unified visibility with dashboards and reporting</li>
                <li>Faster execution with stable product quality</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-900 to-slate-950 p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">Client Voice</p>
          <div key={activeTestimonial} className="testimonial-fade">
            <blockquote className="mt-4 text-lg leading-relaxed text-white sm:text-2xl">
              "{currentTestimonial.quote}"
            </blockquote>
            <div className="mt-5">
              <p className="font-medium text-cyan-200">{currentTestimonial.author}</p>
              <p className="text-sm text-slate-300">{currentTestimonial.role}</p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.author}
                type="button"
                aria-label={`Show testimonial ${index + 1}`}
                onClick={() => setActiveTestimonial(index)}
                className={`h-2.5 rounded-full transition ${
                  activeTestimonial === index
                    ? 'w-10 bg-cyan-300'
                    : 'w-6 bg-slate-600 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">FAQ</p>
          <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">Answers for decision makers</h2>
          <div className="mt-6 space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index
              return (
                <article
                  key={faq.question}
                  className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/70"
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between px-5 py-4 text-left"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                  >
                    <span className="text-sm font-medium text-white sm:text-base">{faq.question}</span>
                    <span className="text-cyan-300">{isOpen ? '−' : '+'}</span>
                  </button>
                  {isOpen ? (
                    <div className="px-5 pb-4 text-sm leading-relaxed text-slate-300 sm:text-base">{faq.answer}</div>
                  ) : null}
                </article>
              )
            })}
          </div>
        </section>

        <Reveal>
          <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">Newsletter</p>
                <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">
                  Automation insights, once a month
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
                  No spam. Practical playbooks, architecture patterns, and KPI frameworks.
                </p>
              </div>
              <form
                className="w-full max-w-xl rounded-2xl border border-slate-800 bg-slate-950/60 p-4 sm:p-5"
                onSubmit={(e) => {
                  e.preventDefault()
                  setNewsletterStatus('success')
                }}
              >
                <div className="flex flex-col gap-3 sm:flex-row">
                  <input
                    type="email"
                    required
                    placeholder="you@company.com"
                    className="w-full rounded-full border border-slate-700 bg-slate-950 px-4 py-2.5 text-sm text-white outline-none ring-cyan-300/50 transition focus:ring-2"
                  />
                  <button
                    type="submit"
                    className="rounded-full bg-cyan-300 px-6 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
                  >
                    Subscribe
                  </button>
                </div>
                {newsletterStatus === 'success' ? (
                  <p className="mt-3 text-sm text-emerald-200">Subscribed. Welcome to Dotsel insights.</p>
                ) : (
                  <p className="mt-3 text-xs text-slate-400">You can unsubscribe any time.</p>
                )}
              </form>
            </div>
          </section>
        </Reveal>

        <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 px-4 py-5 sm:px-6">
          <div className="marquee-track-reverse flex min-w-max items-center gap-8 text-sm text-slate-300">
            {[
              'Vision Systems',
              'Edge Compute',
              'MES Integration',
              'Quality AI',
              'Predictive Analytics',
              'Secure APIs',
              'Digital Work Instructions',
              'Machine Learning Ops',
              'Energy Intelligence',
              'Remote Diagnostics',
            ]
              .concat([
                'Vision Systems',
                'Edge Compute',
                'MES Integration',
                'Quality AI',
                'Predictive Analytics',
                'Secure APIs',
              ])
              .map((item, index) => (
                <span
                  key={`${item}-rev-${index}`}
                  className="rounded-full border border-slate-700 bg-slate-950/60 px-4 py-2"
                >
                  {item}
                </span>
              ))}
          </div>
        </section>
      </main>

      <section className="border-t border-slate-800/80 bg-slate-950/90">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-16 lg:grid-cols-[1.4fr_1fr] lg:px-10">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">Ready to scale?</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              Let us engineer your next intelligent operation.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
              Share your use case and our team will provide a strategic roadmap with architecture,
              timeline, and implementation plan tailored to your business goals.
            </p>
          </div>

          <form className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 sm:p-6">
            <div className="space-y-4">
              <label className="block">
                <span className="mb-1 block text-xs uppercase tracking-[0.12em] text-slate-400">Name</span>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white outline-none ring-cyan-300/50 transition focus:ring-2"
                />
              </label>
              <label className="block">
                <span className="mb-1 block text-xs uppercase tracking-[0.12em] text-slate-400">Work Email</span>
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white outline-none ring-cyan-300/50 transition focus:ring-2"
                />
              </label>
              <label className="block">
                <span className="mb-1 block text-xs uppercase tracking-[0.12em] text-slate-400">Project Goals</span>
                <textarea
                  rows={4}
                  placeholder="Tell us what you want to automate..."
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white outline-none ring-cyan-300/50 transition focus:ring-2"
                />
              </label>
              <button
                type="button"
                className="w-full rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Request Proposal
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="px-6 pb-20 pt-8 lg:px-10">
        <div className="cta-glow mx-auto w-full max-w-7xl rounded-3xl border border-cyan-300/25 bg-gradient-to-r from-cyan-400/10 via-blue-400/10 to-violet-400/10 p-8 sm:p-10">
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">Final Call</p>
          <h2 className="gradient-title mt-3 text-3xl font-semibold sm:text-5xl">
            Build the automation experience competitors cannot copy.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
            From strategy to execution, Dotsel Automation delivers high-performance systems that
            impress teams, customers, and stakeholders from day one.
          </p>
          <div className="mt-7 flex flex-wrap gap-4">
            <button
              type="button"
              className="rounded-full bg-cyan-300 px-7 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
            >
              Schedule Executive Demo
            </button>
            <button
              type="button"
              className="rounded-full border border-slate-600 px-7 py-3 text-sm font-semibold text-white transition hover:border-cyan-200 hover:text-cyan-200"
            >
              Download Capability Deck
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
