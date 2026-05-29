import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { SiteHeader } from '../components/SiteHeader'
import { innovationPillars, siteTagline, stats } from '../home-data'

export default function AboutPage() {
  useEffect(() => {
    document.title = 'About | Dotsel Shopify Developers'
  }, [])

  return (
    <>
      <div className="relative z-20 border-b border-line bg-surface">
        <SiteHeader variant="minimal" />
      </div>

      <main className="mx-auto min-w-0 w-full max-w-7xl px-6 py-16 lg:px-10">
        <p className="section-label">About Dotsel</p>
        <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
          We are a team of Shopify developers.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">{siteTagline}</p>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">
          No generalist agency overhead—just Shopify specialists who understand themes, apps,
          checkout, and what it takes to run a store day to day.
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="card px-5 py-6 text-center">
              <p className="text-2xl font-bold text-brand">{item.value}</p>
              <p className="mt-1 text-sm text-muted">{item.label}</p>
            </div>
          ))}
        </div>

        <section className="mt-20 grid gap-10 rounded-2xl border border-line bg-surface p-8 sm:p-10 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <h2 className="text-2xl font-bold text-ink sm:text-3xl">How we work</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              Discovery on your catalog, integrations, and goals—then theme, app, or migration work
              in visible milestones with staging stores you can review.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              We communicate in plain language, document decisions, and leave you with Shopify
              assets your team can maintain or hand to any strong Shopify partner.
            </p>
          </div>
          <ul className="space-y-4 text-sm text-muted sm:text-base">
            <li className="flex gap-3">
              <span className="mt-1 text-brand" aria-hidden>
                ●
              </span>
              <span>Online Store 2.0 themes built for speed and conversion.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 text-brand" aria-hidden>
                ●
              </span>
              <span>Apps and checkout extensions using Shopify&apos;s current APIs.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 text-brand" aria-hidden>
                ●
              </span>
              <span>Migrations with SEO, redirects, and data integrity handled properly.</span>
            </li>
          </ul>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">What we stand for</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {innovationPillars.map((pillar) => (
              <article key={pillar.title} className="card lift-card p-6">
                <h3 className="text-lg font-semibold text-ink">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{pillar.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="cta-panel mt-16 rounded-2xl p-8 sm:p-10">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">Tell us about your Shopify project</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            Share your store URL, timeline, and what you need—we&apos;ll reply with an honest view on
            fit and next steps.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link to="/contact" className="btn-primary px-7 py-3 text-sm">
              Contact us
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
