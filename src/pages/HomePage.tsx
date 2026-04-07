import { useEffect, useMemo, useRef, useState, type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { AnimatedStatValue } from '../components/AnimatedStatValue'
import { HeroTechSlideBackdrop } from '../components/HeroTechSlideBackdrop'
import { Reveal } from '../components/Reveal'
import { SiteHeader } from '../components/SiteHeader'
import {
  faqs,
  industries,
  innovationPillars,
  outcomes,
  services,
  stats,
  testimonials,
  trustMarks,
} from '../home-data'

const marqueeItems = [
  'Web apps',
  'Mobile apps',
  'AI workflows',
  'Dashboards',
  'Integrations',
  'Secure delivery',
]

type HeroSlide =
  | {
      id: string
      kind: 'photo'
      src: string
      srcSet: string
      fallback: string
      kicker: string
      headline: string
      body: string
    }
  | {
      id: string
      kind: 'tech'
      kicker: string
      headline: string
      body: string
    }

const heroSlides: HeroSlide[] = [
  {
    id: 'hero-app',
    kind: 'photo',
    src: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=3200&q=90&fm=jpg',
    srcSet:
      'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1600&q=85&fm=jpg 1600w, https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=2400&q=85&fm=jpg 2400w, https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=3200&q=90&fm=jpg 3200w',
    fallback: '/hero-slide-app.svg',
    kicker: 'Apps · UX · Engineering',
    headline: 'Software your team and customers will actually love using.',
    body: 'We plan, build, and launch web and mobile products—explained simply, delivered properly.',
  },
  {
    id: 'hero-automation',
    kind: 'photo',
    src: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=3200&q=90&fm=jpg',
    srcSet:
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1600&q=85&fm=jpg 1600w, https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=2400&q=85&fm=jpg 2400w, https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=3200&q=90&fm=jpg 3200w',
    fallback: '/hero-slide-automation.svg',
    kicker: 'Automation · AI · Integrations',
    headline: 'Automations that save hours—without losing control.',
    body: 'We map your workflow, automate the repetitive parts, and keep human approvals where risk matters.',
  },
  {
    id: 'hero-visibility',
    kind: 'tech',
    kicker: 'Dashboards · Data · Live ops',
    headline: 'See what’s happening—in real time.',
    body: 'We build dashboards and reporting that turn messy operations into clear, daily decisions.',
  },
]

export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [startSnapshotCount, setStartSnapshotCount] = useState(false)
  const [activeHeroSlide, setActiveHeroSlide] = useState(0)
  const snapshotRef = useRef<HTMLDivElement | null>(null)

  const currentTestimonial = useMemo(
    () => testimonials[activeTestimonial],
    [activeTestimonial],
  )

  useEffect(() => {
    document.title = 'Dotsel Automation | Software, Apps & AI Automation'
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
    const id = window.setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => window.clearInterval(id)
  }, [])

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveHeroSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => window.clearInterval(id)
  }, [])

  return (
    <>
      <div className="hero-aurora hero-cinematic relative overflow-hidden">
        <div className="hero-aurora-blob hero-aurora-blob-a" aria-hidden />
        <div className="hero-aurora-blob hero-aurora-blob-b" aria-hidden />
        <div className="spotlight-layer" aria-hidden />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.18),transparent_40%),radial-gradient(circle_at_85%_15%,rgba(59,130,246,0.15),transparent_38%),radial-gradient(circle_at_50%_90%,rgba(139,92,246,0.14),transparent_42%)]"
          aria-hidden
        />
        <div className="orb orb-cyan" />
        <div className="orb orb-blue" />

        <SiteHeader variant="hero" />

        <section className="relative mx-auto w-full max-w-7xl px-6 pb-20 pt-10 lg:px-10 lg:pb-24">
          <div className="relative left-1/2 w-[96vw] max-w-[1900px] -translate-x-1/2 px-0">
            <div className="hero-slider hero-slider-frame relative overflow-hidden rounded-[2.5rem] border border-cyan-400/20 bg-slate-900/60 shadow-2xl shadow-slate-950/70 ring-1 ring-white/10 backdrop-blur-md sm:rounded-3xl">
              <div className="relative aspect-[5/4] w-full sm:aspect-[2/1] lg:aspect-[16/7]">
                {heroSlides.map((slide, index) =>
                  slide.kind === 'photo' ? (
                    <img
                      key={slide.id}
                      src={slide.src}
                      srcSet={slide.srcSet}
                      sizes="(min-width: 1024px) 96vw, 96vw"
                      alt={slide.headline}
                      className={`hero-slide-image absolute inset-0 h-full w-full object-cover ${
                        activeHeroSlide === index ? 'hero-slide-active' : ''
                      }`}
                      loading={index === 0 ? 'eager' : 'lazy'}
                      decoding="async"
                      onError={(e) => {
                        const img = e.currentTarget
                        if (img.dataset.fallbackApplied === '1') return
                        img.dataset.fallbackApplied = '1'
                        img.src = slide.fallback
                      }}
                    />
                  ) : (
                    <HeroTechSlideBackdrop
                      key={slide.id}
                      className={`hero-slide-tech ${
                        activeHeroSlide === index ? 'hero-slide-active' : ''
                      }`}
                    />
                  ),
                )}
                <div className="hero-slider-overlay hero-slider-center absolute inset-0 px-5 py-10 sm:px-10">
                  <div className="hero-stagger mx-auto w-full max-w-3xl text-center">
                    <p className="mx-auto mb-5 inline-flex rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-cyan-200">
                      {heroSlides[activeHeroSlide].kicker}
                    </p>
                    <h1 className="headline-shine text-balance text-4xl font-semibold leading-[1.12] text-white sm:text-5xl lg:text-[3.35rem]">
                      {heroSlides[activeHeroSlide].headline}
                    </h1>
                    <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-200/90 sm:text-lg">
                      {heroSlides[activeHeroSlide].body}
                    </p>
                    <div className="mt-9 flex flex-wrap justify-center gap-4">
                      <Link
                        to="/contact"
                        className="btn-pulse magnetic-btn cta-super inline-flex rounded-full bg-cyan-400 px-7 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                      >
                        Start a conversation
                      </Link>
                      <Link
                        to="/solutions"
                        className="secondary-cta inline-flex rounded-full border border-slate-400/80 px-7 py-3 text-sm font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-200"
                      >
                        See what we do
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute inset-x-0 top-3 flex items-center justify-between px-3">
                <button
                  type="button"
                  aria-label="Previous hero slide"
                  className="hero-slider-arrow rounded-full border border-slate-500/70 bg-slate-950/65 px-2.5 py-1.5 text-sm text-slate-100 transition hover:border-cyan-300/60 hover:text-cyan-200"
                  onClick={() =>
                    setActiveHeroSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
                  }
                >
                  ←
                </button>
                <button
                  type="button"
                  aria-label="Next hero slide"
                  className="hero-slider-arrow rounded-full border border-slate-500/70 bg-slate-950/65 px-2.5 py-1.5 text-sm text-slate-100 transition hover:border-cyan-300/60 hover:text-cyan-200"
                  onClick={() => setActiveHeroSlide((prev) => (prev + 1) % heroSlides.length)}
                >
                  →
                </button>
              </div>

              <div className="absolute inset-x-0 bottom-3 flex justify-center gap-2">
                {heroSlides.map((slide, index) => (
                  <button
                    key={slide.id}
                    type="button"
                    aria-label={`Show ${slide.headline}`}
                    onClick={() => setActiveHeroSlide(index)}
                    className={`h-2 rounded-full transition-all ${
                      activeHeroSlide === index ? 'w-8 bg-cyan-300' : 'w-3 bg-slate-300/55 hover:bg-cyan-200/70'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div
            ref={snapshotRef}
            className="lift-card simple-glass-panel mx-auto mt-10 max-w-3xl rounded-3xl border border-cyan-400/20 bg-slate-900/50 p-6 shadow-2xl shadow-slate-950/70 ring-1 ring-white/10 backdrop-blur-md sm:p-8"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">At a glance</p>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4">
              {stats.map((stat) => (
                <article
                  key={stat.label}
                  className="stats-pop rounded-2xl border border-slate-700/60 bg-slate-950/50 p-4 backdrop-blur-sm transition hover:border-cyan-400/35 sm:p-5"
                >
                  <p className="text-2xl font-semibold text-cyan-200 sm:text-3xl">
                    <AnimatedStatValue value={stat.value} start={startSnapshotCount} />
                  </p>
                  <p className="mt-1 text-xs text-slate-400 sm:text-sm">{stat.label}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>

      <main className="mx-auto min-w-0 w-full max-w-7xl space-y-20 px-6 py-16 lg:space-y-24 lg:px-10">
        <section className="stagger-fade-in grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustMarks.map((mark) => (
            <article
              key={mark}
              className="border-shimmer rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-center text-sm font-medium text-slate-200"
            >
              {mark}
            </article>
          ))}
        </section>

        <section className="relative overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-900/40 py-4">
          <div className="marquee-track flex min-w-max items-center gap-6 px-4 text-sm text-slate-300">
            {marqueeItems.concat(marqueeItems).map((item, index) => (
              <span
                key={`${item}-${index}`}
                className="shrink-0 rounded-full border border-slate-700/80 bg-slate-950/50 px-4 py-2 backdrop-blur"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        <Reveal>
          <section>
            <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">Why Dotsel</p>
            <h2 className="mt-2 max-w-2xl text-3xl font-semibold text-white sm:text-4xl">
              Three promises—no buzzword soup.
            </h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {innovationPillars.map((pillar) => (
                <article
                  key={pillar.title}
                  className="lift-card wow-card group rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/80 to-slate-950/90 p-6"
                >
                  <div className="mb-4 h-1 w-12 rounded-full bg-gradient-to-r from-cyan-400 to-violet-400 transition-[width] duration-500 group-hover:w-20" />
                  <h3 className="text-lg font-semibold text-cyan-100">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">{pillar.description}</p>
                </article>
              ))}
            </div>
          </section>
        </Reveal>

        <section id="solutions">
          <div className="mb-8 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">What we build</p>
            <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">Everything in one partner.</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">
              Pick the pieces you need; we align them into one clear roadmap.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.title}
                className="lift-card wow-card rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition hover:border-cyan-400/25"
              >
                <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400 sm:text-base">{service.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 text-center sm:text-left">
            <Link
              to="/solutions"
              className="inline-flex rounded-full border border-slate-600 px-6 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              Full solutions overview →
            </Link>
          </div>
        </section>

        <Reveal>
          <section className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 sm:p-10">
            <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">How it works</p>
            <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">Simple process. Steady progress.</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                { step: '01', title: 'Discover', body: 'We learn your goals, tools, and constraints in plain English.' },
                { step: '02', title: 'Design & build', body: 'UX, engineering, and testing in focused milestones you can see.' },
                { step: '03', title: 'Launch & improve', body: 'Go live with confidence, then refine based on real usage.' },
              ].map((row) => (
                <div key={row.step} className="simple-step-card wow-card relative rounded-2xl border border-slate-800 bg-slate-950/50 p-6">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">{row.step}</span>
                  <h3 className="mt-3 text-lg font-semibold text-white">{row.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{row.body}</p>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section id="industries" className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900/90 via-slate-950 to-slate-900/90 p-6 sm:p-10">
            <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">Industries</p>
            <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">We adapt to your world.</h2>
            <p className="mt-3 max-w-2xl text-sm text-slate-400 sm:text-base">
              Same craft across sectors—tailored where regulation, buyers, or ops demand it.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {industries.map((name) => (
                <span
                  key={name}
                  className="industry-chip rounded-full border border-slate-700/80 bg-slate-950/60 px-4 py-2 text-xs font-medium uppercase tracking-wider text-slate-300"
                >
                  {name}
                </span>
              ))}
            </div>
            <Link
              to="/industries"
              className="mt-8 inline-flex rounded-full bg-cyan-400 px-6 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Industry details
            </Link>
          </section>
        </Reveal>

        <Reveal>
          <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 sm:p-10">
            <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">Typical impact</p>
            <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">Numbers teams care about.</h2>
            <p className="mt-3 max-w-xl text-sm text-slate-400 sm:text-base">
              Ranges from past work—your results depend on starting point and scope.
            </p>
            <div className="mt-10 space-y-6">
              {outcomes.map((item, index) => (
                <div key={item.label}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="text-slate-300">{item.label}</span>
                    <span className="font-semibold text-cyan-200">{item.value}%</span>
                  </div>
                  <div className="h-2.5 overflow-hidden rounded-full bg-slate-800">
                    <div
                      className="progress-fill h-full rounded-full bg-gradient-to-r from-cyan-300 to-violet-400"
                      style={
                        {
                          '--target-width': `${item.value}%`,
                          '--delay': `${index * 0.15}s`,
                        } as CSSProperties
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        <section className="glass-shift overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 p-6 sm:p-10">
          <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">Clients say</p>
          <div key={activeTestimonial} className="testimonial-fade">
            <blockquote className="mt-4 max-w-3xl text-lg font-medium leading-relaxed text-white sm:text-2xl">
              “{currentTestimonial.quote}”
            </blockquote>
            <div className="mt-6">
              <p className="font-medium text-cyan-200">{currentTestimonial.author}</p>
              <p className="text-sm text-slate-400">{currentTestimonial.role}</p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Show testimonial ${index + 1}`}
                onClick={() => setActiveTestimonial(index)}
                className={`h-2 rounded-full transition-all ${
                  activeTestimonial === index ? 'w-10 bg-cyan-300' : 'w-6 bg-slate-600 hover:bg-slate-500'
                }`}
              />
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 sm:p-10">
          <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">FAQ</p>
          <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">Straight answers.</h2>
          <div className="mt-8 space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index
              return (
                <article key={faq.question} className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/60">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between px-5 py-4 text-left"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                  >
                    <span className="text-sm font-medium text-white sm:text-base">{faq.question}</span>
                    <span className="text-cyan-300" aria-hidden>
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  {isOpen ? (
                    <div className="border-t border-slate-800/80 px-5 py-4 text-sm leading-relaxed text-slate-400 sm:text-base">
                      {faq.answer}
                    </div>
                  ) : null}
                </article>
              )
            })}
          </div>
        </section>

        <Reveal>
          <section className="cta-glow finale-cta rounded-3xl border border-cyan-300/20 bg-gradient-to-r from-cyan-400/10 via-blue-500/10 to-violet-500/10 p-8 sm:p-12">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Ready when you are.</h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
              Share where you are stuck—we’ll reply with an honest view and next steps.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="rounded-full bg-cyan-300 px-8 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
              >
                Get in touch
              </Link>
              <Link
                to="/case-studies"
                className="rounded-full border border-slate-500 px-8 py-3.5 text-sm font-semibold text-white transition hover:border-cyan-200 hover:text-cyan-200"
              >
                Example outcomes
              </Link>
            </div>
          </section>
        </Reveal>
      </main>
    </>
  )
}
