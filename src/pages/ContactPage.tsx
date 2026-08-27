import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { SiteHeader } from '../components/SiteHeader'
import {
  companyName,
  contactPhone,
  contactPhoneTel,
  ctaClosingLines,
  ctaTagline,
  siteUrl,
  whatsappUrl,
} from '../home-data'

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'success'>('idle')

  useEffect(() => {
    document.title = 'Contact | Dotsel Automation & Venture Pvt. Ltd.'
  }, [])

  return (
    <>
      <div className="relative z-20 border-b border-line bg-surface">
        <SiteHeader variant="minimal" />
      </div>

      <main className="mx-auto min-w-0 w-full max-w-7xl px-6 py-16 lg:px-10">
        <p className="section-label">Let&apos;s Build Together</p>
        <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
          Have an Idea? Let&apos;s Turn It Into Something Real.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">
          Whether you&apos;re starting a new business, improving an existing process, or looking to build
          your next digital product, Dotsel is ready to help.
        </p>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">
          From strategy and design to development, deployment, and long-term support, we work with you to
          create technology that solves real business problems and grows with you.
        </p>
        <ul className="mt-6 space-y-2 text-base font-medium text-ink">
          {ctaClosingLines.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
        <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-brand">{ctaTagline}</p>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          <form
            className="card p-6 sm:p-8"
            onSubmit={(e) => {
              e.preventDefault()
              setStatus('success')
            }}
          >
            <h2 className="text-lg font-semibold text-ink">Start Your Project With Dotsel</h2>
            <div className="mt-5 space-y-5">
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
                  Phone
                </span>
                <input
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  placeholder="+91 …"
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
                  placeholder="Tell us about your idea, requirements, and goals."
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
              <h2 className="text-sm font-semibold text-ink">{companyName}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Adimali, Idukki, Kerala
                <br />
                Adimali, opposite to Union Bank
                <br />
                Idukki – 685561
              </p>
              <div className="mt-4 space-y-2 text-sm text-muted">
                <a href={`https://${siteUrl}`} className="block transition hover:text-brand">
                  {siteUrl}
                </a>
                <a href={`tel:${contactPhoneTel}`} className="block transition hover:text-brand">
                  {contactPhone}
                </a>
              </div>
            </div>

            <div className="card p-6">
              <h2 className="text-sm font-semibold text-ink">WhatsApp</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Prefer chat? Message us on WhatsApp.
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

            <Link
              to="/about"
              className="card block p-6 text-sm text-muted transition hover:border-brand"
            >
              <span className="font-semibold text-brand">About us →</span>
              <span className="mt-2 block leading-relaxed">Learn more about {companyName}.</span>
            </Link>
          </aside>
        </div>
      </main>
    </>
  )
}
