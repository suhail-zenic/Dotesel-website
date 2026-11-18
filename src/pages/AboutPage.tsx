import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '../components/Icon'
import { Reveal } from '../components/Reveal'
import { SiteHeader } from '../components/SiteHeader'
import { beliefs, companyFacts, processSteps, whoWeAre, whyDotsel } from '../home-data'

export default function AboutPage() {
  useEffect(() => {
    document.title = 'About | Dotsel Automation & Venture'
  }, [])

  return (
    <>
      <div className="relative z-20 border-b border-line bg-surface">
        <SiteHeader variant="minimal" />
      </div>

      <main className="mx-auto min-w-0 w-full max-w-7xl px-6 py-16 lg:px-10">
        <p className="section-label section-label-line">Who We Are</p>
        <h1 className="mt-4 max-w-4xl text-balance text-4xl font-extrabold leading-tight tracking-tight text-ink sm:text-6xl">
          Beyond software. <span className="text-gradient">Built for long-term partnerships.</span>
        </h1>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:gap-14">
          <div className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
            {whoWeAre.map((para, i) => (
              <p key={i} className={i === 0 ? 'text-ink' : undefined}>
                {para}
              </p>
            ))}
          </div>
          <dl className="grid grid-cols-2 gap-3 self-start">
            {companyFacts.map((fact) => (
              <div key={fact.label} className="fact-tile rounded-2xl border border-line bg-surface/70 px-5 py-6">
                <dt className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">{fact.label}</dt>
                <dd className="mt-2 font-display text-2xl font-bold text-brand">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <Reveal className="mt-20">
          <section className="belief-panel relative overflow-hidden rounded-3xl p-8 sm:p-12">
            <p className="section-label relative">What We Believe</p>
            <ul className="relative mt-8 grid gap-4 sm:grid-cols-2">
              {beliefs.map((belief, i) => (
                <li
                  key={belief}
                  className="belief-item flex items-start gap-4 rounded-2xl border border-white/5 bg-canvas/40 p-5"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand font-display text-sm font-extrabold text-canvas">
                    {i + 1}
                  </span>
                  <span className="pt-1 text-base font-medium text-ink">{belief}</span>
                </li>
              ))}
            </ul>
          </section>
        </Reveal>

        <section className="mt-20">
          <p className="section-label section-label-line">Our Approach</p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            From understanding to long-term growth.
          </h2>
          <ol className="mt-10 grid gap-4 md:grid-cols-5">
            {processSteps.map((step) => (
              <li key={step.step} className="rounded-2xl border border-line bg-surface/70 p-5">
                <span className="font-display text-sm font-extrabold text-brand">{step.step}</span>
                <h3 className="mt-2 text-lg font-bold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-20">
          <p className="section-label section-label-line">Why Dotsel?</p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            More than a software team. Your technology partner.
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyDotsel.map((item) => (
              <article key={item.title} className="card lift-card p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-muted text-brand">
                  <Icon name={item.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="cta-panel mt-20 rounded-3xl p-8 sm:p-12">
          <h2 className="relative text-2xl font-extrabold text-ink sm:text-4xl">Have an idea? Let&apos;s turn it into something real.</h2>
          <p className="relative mt-4 max-w-2xl text-base leading-relaxed text-muted">
            Let&apos;s discuss your idea. Let&apos;s build the solution. Let&apos;s grow together.
          </p>
          <div className="relative mt-8 flex flex-wrap gap-4">
            <Link to="/contact" className="btn-primary px-7 py-3 text-sm">
              Start your project
            </Link>
            <Link to="/solutions" className="btn-secondary px-7 py-3 text-sm">
              Explore services
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
