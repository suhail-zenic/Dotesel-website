import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { SiteHeader } from '../components/SiteHeader'
import { beliefs, companyName, ctaClosingLines, ctaTagline, whoWeAre, whyDotsel } from '../home-data'

export default function AboutPage() {
  useEffect(() => {
    document.title = 'About | Dotsel Automation & Venture Pvt. Ltd.'
  }, [])

  return (
    <>
      <div className="relative z-20 border-b border-line bg-surface">
        <SiteHeader variant="minimal" />
      </div>

      <main className="mx-auto min-w-0 w-full max-w-7xl px-6 py-16 lg:px-10">
        <p className="section-label">Who We Are</p>
        <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
          {companyName}
        </h1>
        <div className="mt-6 max-w-3xl space-y-4 text-lg leading-relaxed text-muted">
          {whoWeAre.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>

        <section className="mt-16">
          <p className="section-label">What We Believe</p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {beliefs.map((belief) => (
              <li key={belief} className="card flex gap-3 p-5 text-sm leading-relaxed text-muted sm:text-base">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                {belief}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-16">
          <p className="section-label">Why Dotsel?</p>
          <h2 className="mt-2 text-2xl font-bold text-ink sm:text-3xl">
            More Than a Software Team. Your Technology Partner.
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {whyDotsel.map((item) => (
              <article key={item.title} className="card lift-card p-6">
                <h3 className="text-lg font-semibold uppercase text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="cta-panel mt-16 rounded-2xl p-8 sm:p-10">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">Let&apos;s Build Together</h2>
          <ul className="mt-4 space-y-2 text-base font-medium text-ink">
            {ctaClosingLines.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-brand">{ctaTagline}</p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link to="/contact" className="btn-primary px-7 py-3 text-sm">
              Start Your Project With Dotsel
            </Link>
            <Link to="/" className="btn-secondary px-7 py-3 text-sm">
              Back to home
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
