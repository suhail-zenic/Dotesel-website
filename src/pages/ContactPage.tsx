import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { SiteHeader } from '../components/SiteHeader'
import { whatsappUrl } from '../home-data'

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'success'>('idle')

  useEffect(() => {
    document.title = 'Contact | Dotsel Shopify Developers'
  }, [])

  return (
    <>
      <div className="relative z-20 border-b border-line bg-surface">
        <SiteHeader variant="minimal" />
      </div>

      <main className="mx-auto min-w-0 w-full max-w-7xl px-6 py-16 lg:px-10">
        <p className="section-label">Contact</p>
        <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
          Talk to our Shopify developers.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">
          Share your store goals below or message us on WhatsApp—we&apos;ll reply with sensible questions
          and next steps.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          <form
            className="card p-6 sm:p-8"
            onSubmit={(e) => {
              e.preventDefault()
              setStatus('success')
            }}
          >
            <div className="space-y-5">
              <label className="block">
                <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-muted">Name</span>
                <input
                  type="text"
                  name="name"
                  required
                  autoComplete="name"
                  placeholder="Your full name"
                  className="w-full rounded-lg border border-line bg-canvas px-3 py-2 text-sm text-ink outline-none ring-brand/30 transition focus:ring-2"
                />
              </label>
              <label className="block">
                <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-muted">
                  Work email
                </span>
                <input
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  placeholder="you@brand.com"
                  className="w-full rounded-lg border border-line bg-canvas px-3 py-2 text-sm text-ink outline-none ring-brand/30 transition focus:ring-2"
                />
              </label>
              <label className="block">
                <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-muted">
                  Store URL (optional)
                </span>
                <input
                  type="url"
                  name="store"
                  placeholder="https://yourstore.com"
                  className="w-full rounded-lg border border-line bg-canvas px-3 py-2 text-sm text-ink outline-none ring-brand/30 transition focus:ring-2"
                />
              </label>
              <label className="block">
                <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-muted">
                  Project summary
                </span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Theme, migration, app, or Shopify Plus—what do you need and when?"
                  className="w-full rounded-lg border border-line bg-canvas px-3 py-2 text-sm text-ink outline-none ring-brand/30 transition focus:ring-2"
                />
              </label>
              <button type="submit" className="btn-primary w-full py-3 text-sm">
                Send message
              </button>
              {status === 'success' ? (
                <p className="text-sm text-brand" role="status">
                  Thanks — your message is noted. We will follow up shortly. (Demo form; connect to your
                  backend when ready.)
                </p>
              ) : (
                <p className="text-xs text-muted">We typically reply within one business day.</p>
              )}
            </div>
          </form>

          <aside className="space-y-6">
            <div className="card p-6">
              <h2 className="text-sm font-semibold text-ink">WhatsApp</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Prefer chat? Message our Shopify team—ideal for quick scoping.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary mt-4 px-5 py-2.5 text-sm"
              >
                Open WhatsApp
              </a>
            </div>

            <div className="card p-6">
              <h2 className="text-sm font-semibold text-ink">What to include</h2>
              <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-muted">
                <li>Current platform (Shopify, WooCommerce, etc.)</li>
                <li>Theme, app, migration, or Plus needs</li>
                <li>Catalog size and key integrations</li>
                <li>Target launch date</li>
              </ul>
            </div>

            <Link
              to="/about"
              className="card block p-6 text-sm text-muted transition hover:border-brand"
            >
              <span className="font-semibold text-brand">About our team →</span>
              <span className="mt-2 block leading-relaxed">Meet the Shopify developers behind Dotsel.</span>
            </Link>
          </aside>
        </div>
      </main>
    </>
  )
}
