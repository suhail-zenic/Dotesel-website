import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { SiteHeader } from '../components/SiteHeader'
import { outcomes, services, shopifyStack } from '../home-data'

export default function SolutionsPage() {
  useEffect(() => {
    document.title = 'Services | Dotsel Shopify Developers'
  }, [])

  return (
    <>
      <div className="relative z-20 border-b border-line bg-surface">
        <SiteHeader variant="minimal" />
      </div>

      <main className="mx-auto min-w-0 w-full max-w-7xl px-6 py-16 lg:px-10">
        <p className="section-label">Services</p>
        <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
          Shopify development services from a dedicated team.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">
          Themes, apps, migrations, and growth work—scoped clearly so you know what ships and when.
        </p>

        <section className="mt-14">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">Core services</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {services.map((item) => (
              <article key={item.title} className="card lift-card p-6">
                <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">Shopify stack we work in</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            Typical projects combine several of these—we align the stack to your roadmap, not trends.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {shopifyStack.map((tile) => (
              <article
                key={tile.title}
                className={`card p-5 ${tile.wide ? 'sm:col-span-2 lg:col-span-2' : ''}`}
              >
                <h3 className="text-sm font-semibold text-ink">{tile.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{tile.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-2xl border border-line bg-surface p-8 sm:p-10">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">Outcomes we optimize for</h2>
          <p className="mt-3 max-w-2xl text-sm text-muted sm:text-base">
            Representative ranges from Shopify client work—your results depend on scope and baseline.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {outcomes.map((row) => (
              <li key={row.label} className="rounded-xl border border-line bg-canvas px-4 py-5 text-center">
                <p className="text-3xl font-bold text-brand">{row.value}%</p>
                <p className="mt-1 text-sm text-muted">{row.label}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="cta-panel mt-16 rounded-2xl p-8 sm:p-10">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">Ready to scope your Shopify build?</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            Tell us about your store, catalog, and integrations—we&apos;ll suggest an approach and timeline.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link to="/contact" className="btn-primary px-7 py-3 text-sm">
              Contact us
            </Link>
            <Link to="/case-studies" className="btn-secondary px-7 py-3 text-sm">
              View portfolio
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
