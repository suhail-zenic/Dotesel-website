import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { SiteHeader } from '../components/SiteHeader'
import { processSteps, services, technologies } from '../home-data'

export default function SolutionsPage() {
  useEffect(() => {
    document.title = 'Services | Dotsel Automation & Venture Pvt. Ltd.'
  }, [])

  return (
    <>
      <div className="relative z-20 border-b border-line bg-surface">
        <SiteHeader variant="minimal" />
      </div>

      <main className="mx-auto min-w-0 w-full max-w-7xl px-6 py-16 lg:px-10">
        <p className="section-label">What We Do</p>
        <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
          Digital Solutions Built Around Your Business
        </h1>

        <section className="mt-14">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((item, i) => (
              <article key={item.title} className="card lift-card p-6">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand">{i + 1}</span>
                <h3 className="mt-3 text-lg font-semibold uppercase text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <p className="section-label">Our Approach</p>
          <h2 className="mt-2 text-2xl font-bold text-ink sm:text-3xl">
            From Understanding to Long-Term Growth
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((row) => (
              <article key={row.step} className="card p-5">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand">{row.step}</span>
                <h3 className="mt-3 text-lg font-semibold uppercase text-ink">{row.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{row.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <p className="section-label">Technologies We Use</p>
          <h2 className="mt-2 text-2xl font-bold text-ink sm:text-3xl">
            The Right Technology for the Right Solution
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {technologies.map((tile) => (
              <article key={tile.title} className="card p-5">
                <h3 className="text-sm font-semibold uppercase text-ink">{tile.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{tile.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="cta-panel mt-16 rounded-2xl p-8 sm:p-10">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">Start Your Project With Dotsel</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            Your Idea • Our Expertise • One Long-Term Partnership
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link to="/contact" className="btn-primary px-7 py-3 text-sm">
              Contact us
            </Link>
            <Link to="/about" className="btn-secondary px-7 py-3 text-sm">
              About us
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
