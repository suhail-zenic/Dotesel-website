import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { SiteHeader } from '../components/SiteHeader'
import { storeTypeContent, storeTypes } from '../home-data'

export default function IndustriesPage() {
  useEffect(() => {
    document.title = 'Store Types | Dotsel Shopify Developers'
  }, [])

  return (
    <>
      <div className="relative z-20 border-b border-line bg-surface">
        <SiteHeader variant="minimal" />
      </div>

      <main className="mx-auto min-w-0 w-full max-w-7xl px-6 py-16 lg:px-10">
        <p className="section-label">Store types</p>
        <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
          Shopify stores tailored to how you sell.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">
          Same Shopify expertise—adapted for your catalog, buyers, and operations.
        </p>

        <div className="mt-14 grid gap-6 lg:gap-8">
          {storeTypes.map((name) => {
            const content = storeTypeContent[name]
            return (
              <article
                key={name}
                id={name.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}
                className="scroll-mt-28 rounded-2xl border border-line bg-surface p-6 sm:p-8 lg:grid lg:grid-cols-[minmax(0,240px)_1fr] lg:gap-10"
              >
                <div>
                  <h2 className="text-2xl font-bold text-brand sm:text-3xl">{name}</h2>
                  <p className="mt-2 text-sm font-medium text-muted">{content.headline}</p>
                </div>
                <div>
                  <p className="text-sm leading-relaxed text-muted sm:text-base">{content.summary}</p>
                  <ul className="mt-5 space-y-2 text-sm text-muted sm:text-base">
                    {content.focus.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-1.5 shrink-0 text-brand" aria-hidden>
                          ●
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            )
          })}
        </div>

        <section className="cta-panel mt-16 rounded-2xl p-8 sm:p-10">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">Discuss your store type</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            Share your niche and constraints—we&apos;ll map a Shopify approach that fits your roadmap
            and budget.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link to="/contact" className="btn-primary px-7 py-3 text-sm">
              Book a call
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
