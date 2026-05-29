import { useEffect, useMemo, useRef, useState, type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { AnimatedStatValue } from '../components/AnimatedStatValue'
import { FaqItem } from '../components/FaqAccordion'
import { HeroShowcase } from '../components/HeroShowcase'
import { Reveal } from '../components/Reveal'
import { SiteHeader } from '../components/SiteHeader'
import {
  faqs,
  innovationPillars,
  outcomes,
  processSteps,
  services,
  siteTagline,
  stats,
  storeTypes,
  testimonials,
  trustMarks,
} from '../home-data'

const marqueeItems = [
  'Custom themes',
  'Shopify Plus',
  'Liquid',
  'Storefront API',
  'App development',
  'Migrations',
  'Checkout extensions',
  'CRO & speed',
]

const trustIcons = ['⚡', '🛡️', '◆', '🚀']

export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [startSnapshotCount, setStartSnapshotCount] = useState(false)
  const snapshotRef = useRef<HTMLDivElement | null>(null)

  const currentTestimonial = useMemo(
    () => testimonials[activeTestimonial],
    [activeTestimonial],
  )

  useEffect(() => {
    document.title = 'Dotsel | Shopify Developers'
  }, [])

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
    let testimonialId: ReturnType<typeof window.setInterval> | undefined

    const start = () => {
      if (testimonialId == null) {
        testimonialId = window.setInterval(() => {
          setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
        }, 6500)
      }
    }

    const stop = () => {
      if (testimonialId != null) {
        window.clearInterval(testimonialId)
        testimonialId = undefined
      }
    }

    const onVisibility = () => {
      if (document.hidden) stop()
      else start()
    }

    start()
    document.addEventListener('visibilitychange', onVisibility)
    return () => {
      document.removeEventListener('visibilitychange', onVisibility)
      stop()
    }
  }, [])

  return (
    <>
      <div className="relative overflow-hidden border-b border-line/60">
        <div className="hero-grid-pattern pointer-events-none absolute inset-0" aria-hidden />
        <div className="hero-glow -right-32 -top-32 h-[28rem] w-[28rem] bg-brand/25" aria-hidden />
        <div className="hero-glow bottom-0 left-1/4 h-80 w-80 bg-teal-500/10" aria-hidden />

        <SiteHeader variant="hero" />

        <section className="relative mx-auto grid w-full max-w-7xl gap-14 px-6 pb-24 pt-6 lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-10 lg:pb-32 lg:pt-10">
          <div className="hero-stagger">
            <span className="shopify-badge">
              <span className="badge-dot inline-block h-2 w-2 rounded-full bg-brand" aria-hidden />
              Shopify developers
            </span>
            <h1 className="mt-6 text-balance text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]">
              We&apos;re a team of{' '}
              <span className="text-gradient">Shopify developers</span> building stores that sell.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">{siteTagline}</p>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-muted/90">
              Custom themes, apps, migrations, and Shopify Plus—crafted by specialists who live in the
              ecosystem.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary px-7 py-3.5 text-sm">
                Start your project
              </Link>
              <Link to="/case-studies" className="btn-secondary px-7 py-3.5 text-sm">
                View portfolio
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-line/60 pt-8">
              <div>
                <p className="text-2xl font-bold text-brand">120+</p>
                <p className="text-xs font-medium text-muted">stores launched</p>
              </div>
              <div className="h-8 w-px bg-line" aria-hidden />
              <div>
                <p className="text-2xl font-bold text-brand">98%</p>
                <p className="text-xs font-medium text-muted">client satisfaction</p>
              </div>
            </div>
          </div>

          <div className="relative lg:pl-4">
            <HeroShowcase />
          </div>
        </section>
      </div>

      <main className="relative mx-auto min-w-0 w-full max-w-7xl space-y-24 px-6 py-20 lg:space-y-28 lg:px-10">
        <Reveal stagger className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {trustMarks.map((mark, i) => (
            <article
              key={mark}
              className="trust-pill card flex items-center gap-3 px-4 py-4"
            >
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-muted text-lg"
                aria-hidden
              >
                {trustIcons[i % trustIcons.length]}
              </span>
              <span className="text-sm font-semibold text-ink">{mark}</span>
            </article>
          ))}
        </Reveal>

        <section className="marquee-wrap relative overflow-hidden rounded-2xl border border-line bg-surface/50 py-5">
          <div className="marquee-track flex min-w-max items-center gap-4 px-4 text-sm font-medium">
            {marqueeItems.concat(marqueeItems).map((item, index) => (
              <span
                key={`${item}-${index}`}
                className="shrink-0 rounded-full border border-line/80 bg-surface-elevated px-5 py-2.5 text-ink shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        <div ref={snapshotRef} className="stat-band relative rounded-2xl px-6 py-12 sm:px-10">
          <p className="relative text-center text-xs font-semibold uppercase tracking-[0.22em] text-white/75">
            At a glance
          </p>
          <div className="relative mt-10 grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat) => (
              <article key={stat.label} className="text-center">
                <p className="text-3xl font-extrabold sm:text-4xl">
                  <AnimatedStatValue value={stat.value} start={startSnapshotCount} />
                </p>
                <p className="mt-2 text-sm text-white/80">{stat.label}</p>
              </article>
            ))}
          </div>
        </div>

        <Reveal>
          <section>
            <p className="section-label">Why Dotsel</p>
            <h2 className="mt-2 max-w-2xl text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Shopify specialists—not generalists dabbling in e-commerce.
            </h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {innovationPillars.map((pillar) => (
                <article key={pillar.title} className="card lift-card glow-border p-6">
                  <div className="mb-4 h-1 w-12 rounded-full bg-gradient-to-r from-brand to-teal-300" />
                  <h3 className="text-lg font-semibold text-ink">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{pillar.description}</p>
                </article>
              ))}
            </div>
          </section>
        </Reveal>

        <section id="services">
          <div className="mb-10 max-w-3xl">
            <p className="section-label">Services</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Everything your Shopify store needs.
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted">
              One team for theme, app, migration, and growth work—aligned to your roadmap.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {services.map((service, i) => (
              <article
                key={service.title}
                className="card lift-card glow-border p-6"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <h3 className="text-lg font-semibold text-ink">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">{service.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <Link
              to="/solutions"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand transition hover:gap-3 hover:text-brand-hover"
            >
              Full services overview <span aria-hidden>→</span>
            </Link>
          </div>
        </section>

        <Reveal>
          <section className="glass-card rounded-2xl border border-line p-6 sm:p-10">
            <p className="section-label">How we work</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Clear process. Predictable delivery.
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {processSteps.map((row) => (
                <div
                  key={row.step}
                  className="group rounded-xl border border-line bg-canvas/50 p-6 transition-colors duration-300 hover:border-brand/30 hover:bg-brand-muted/30"
                >
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand">{row.step}</span>
                  <h3 className="mt-3 text-lg font-semibold text-ink">{row.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{row.body}</p>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section
            id="store-types"
            className="relative overflow-hidden rounded-2xl border border-brand/20 bg-gradient-to-br from-brand-muted/40 via-surface to-canvas p-6 sm:p-10"
          >
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-brand/10 blur-3xl"
              aria-hidden
            />
            <p className="section-label relative">Store types</p>
            <h2 className="relative mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Built for brands like yours.
            </h2>
            <p className="relative mt-3 max-w-2xl text-base text-muted">
              Fashion, beauty, food, B2B, and DTC—we adapt Shopify to how you sell.
            </p>
            <div className="relative mt-8 flex flex-wrap gap-3">
              {storeTypes.map((name) => (
                <span
                  key={name}
                  className="rounded-full border border-line/80 bg-surface/80 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-ink backdrop-blur transition hover:border-brand/40 hover:text-brand"
                >
                  {name}
                </span>
              ))}
            </div>
            <Link to="/industries" className="btn-primary relative mt-8 px-6 py-2.5 text-sm">
              See store types
            </Link>
          </section>
        </Reveal>

        <Reveal>
          <section className="glass-card rounded-2xl border border-line p-6 sm:p-10">
            <p className="section-label">Typical results</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Outcomes we optimize for.
            </h2>
            <p className="mt-3 max-w-xl text-base text-muted">
              Ranges from past Shopify engagements—your results depend on scope and starting point.
            </p>
            <div className="mt-10 space-y-7">
              {outcomes.map((item, index) => (
                <div key={item.label}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="font-medium text-ink">{item.label}</span>
                    <span className="font-bold text-brand">{item.value}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-line/80">
                    <div
                      className="progress-fill h-full rounded-full"
                      style={
                        {
                          '--target-width': `${item.value}%`,
                          '--delay': `${index * 0.12}s`,
                        } as CSSProperties
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        <section className="glass-card rounded-2xl border border-line p-6 sm:p-10">
          <p className="section-label">Client stories</p>
          <div key={activeTestimonial} className="testimonial-fade">
            <blockquote className="mt-4 max-w-3xl text-xl font-medium leading-relaxed text-ink sm:text-2xl">
              &ldquo;{currentTestimonial.quote}&rdquo;
            </blockquote>
            <div className="mt-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-muted text-lg font-bold text-brand">
                {currentTestimonial.author.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-brand">{currentTestimonial.author}</p>
                <p className="text-sm text-muted">{currentTestimonial.role}</p>
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Show testimonial ${index + 1}`}
                onClick={() => setActiveTestimonial(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeTestimonial === index ? 'w-10 bg-brand shadow-[0_0_12px_var(--color-brand-glow)]' : 'w-6 bg-line hover:bg-brand/40'
                }`}
              />
            ))}
          </div>
        </section>

        <section className="glass-card rounded-2xl border border-line p-6 sm:p-10">
          <p className="section-label">FAQ</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">Common questions.</h2>
          <div className="mt-8 space-y-3">
            {faqs.map((faq, index) => (
              <FaqItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                defaultOpen={index === 0}
              />
            ))}
          </div>
        </section>

        <Reveal>
          <section className="cta-panel relative rounded-2xl p-8 sm:p-12">
            <h2 className="relative text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Ready to build on Shopify?
            </h2>
            <p className="relative mt-4 max-w-xl text-base leading-relaxed text-muted">
              Tell us about your store, timeline, and goals—we&apos;ll reply with honest next steps from
              our Shopify team.
            </p>
            <div className="relative mt-8 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary px-8 py-3.5 text-sm">
                Get in touch
              </Link>
              <Link to="/case-studies" className="btn-secondary px-8 py-3.5 text-sm">
                View portfolio
              </Link>
            </div>
          </section>
        </Reveal>
      </main>
    </>
  )
}
