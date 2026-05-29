import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { PortfolioSection } from '../components/PortfolioSection'
import { Reveal } from '../components/Reveal'
import { SiteHeader } from '../components/SiteHeader'
import { caseStudies, portfolioCategories } from '../home-data'

export default function CaseStudiesPage() {
  useEffect(() => {
    document.title = 'Portfolio | Dotsel Shopify Developers'
  }, [])

  const totalStores = portfolioCategories.reduce((n, c) => n + c.projects.length, 0)

  return (
    <>
      <div className="relative z-20 overflow-hidden border-b border-line bg-surface">
        <div className="hero-grid-pattern pointer-events-none absolute inset-0 opacity-60" aria-hidden />
        <div className="hero-glow -right-20 top-0 h-64 w-64 bg-brand/15" aria-hidden />
        <SiteHeader variant="minimal" />
        <div className="relative mx-auto max-w-7xl px-6 pb-14 pt-4 lg:px-10">
          <p className="section-label">🌐 Portfolio &amp; previous works</p>
          <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
            Stores we&apos;ve built for brands that sell.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">
            {totalStores} live Shopify stores across clothing, food &amp; beverage, and home decor—each
            link opens the real site in a new tab.
          </p>
        </div>
      </div>

      <main className="mx-auto min-w-0 w-full max-w-7xl space-y-20 px-6 py-16 lg:space-y-24 lg:px-10">
        <Reveal>
          <div className="glow-border rounded-2xl border border-line bg-surface/60 p-6 backdrop-blur-sm sm:p-4">
            <PortfolioSection showViewAll={false} />
          </div>
        </Reveal>

        <section>
          <p className="section-label">Highlights</p>
          <h2 className="mt-2 text-2xl font-bold text-ink sm:text-3xl">Project snapshots</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <article key={study.title} className="card lift-card flex flex-col p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand">{study.impact}</p>
                <h3 className="mt-3 text-xl font-bold text-ink sm:text-2xl">{study.title}</h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted sm:text-base">{study.summary}</p>
                <Link
                  to="/contact"
                  className="mt-6 inline-flex text-sm font-semibold text-brand transition hover:text-brand-hover"
                >
                  Discuss a similar build →
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-line bg-surface-elevated p-8 sm:p-10">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">How we measure success</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            Before we write Liquid or ship an app, we agree on signals: conversion, speed, support load,
            or manual steps removed.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              'Baseline metrics captured in discovery',
              'Staging reviews before every major milestone',
              'Post-launch iteration based on real store data',
            ].map((line) => (
              <li key={line} className="flex gap-3 text-sm text-muted sm:text-base">
                <span className="mt-1 text-brand" aria-hidden>
                  ●
                </span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="cta-panel rounded-2xl p-8 sm:p-10">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">Want your store in our portfolio?</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            Tell us about your brand—we&apos;ll scope a Shopify build and share an honest timeline.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link to="/contact" className="btn-primary px-7 py-3 text-sm">
              Get in touch
            </Link>
            <Link to="/solutions" className="btn-secondary px-7 py-3 text-sm">
              View services
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
