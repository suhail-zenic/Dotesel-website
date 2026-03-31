import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { SiteHeader } from '../components/SiteHeader'

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'success'>('idle')

  useEffect(() => {
    document.title = 'Contact | Dotsel Automation'
  }, [])

  return (
    <>
      <div className="relative z-20 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md">
        <SiteHeader variant="minimal" />
      </div>

      <main className="mx-auto min-w-0 w-full max-w-7xl px-6 py-16 lg:px-10">
        <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">Contact</p>
        <h1 className="mt-3 text-4xl font-semibold leading-tight text-white sm:text-5xl">
          Say hello—tell us what you need.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">
          Drop a note below or WhatsApp us. We reply with sensible questions and next steps—no pressure.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          <form
            className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8"
            onSubmit={(e) => {
              e.preventDefault()
              setStatus('success')
            }}
          >
            <div className="space-y-5">
              <label className="block">
                <span className="mb-1 block text-xs uppercase tracking-[0.12em] text-slate-400">Name</span>
                <input
                  type="text"
                  name="name"
                  required
                  autoComplete="name"
                  placeholder="Your full name"
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white outline-none ring-cyan-300/50 transition focus:ring-2"
                />
              </label>
              <label className="block">
                <span className="mb-1 block text-xs uppercase tracking-[0.12em] text-slate-400">Work email</span>
                <input
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  placeholder="you@company.com"
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white outline-none ring-cyan-300/50 transition focus:ring-2"
                />
              </label>
              <label className="block">
                <span className="mb-1 block text-xs uppercase tracking-[0.12em] text-slate-400">Company (optional)</span>
                <input
                  type="text"
                  name="company"
                  autoComplete="organization"
                  placeholder="Company or team name"
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white outline-none ring-cyan-300/50 transition focus:ring-2"
                />
              </label>
              <label className="block">
                <span className="mb-1 block text-xs uppercase tracking-[0.12em] text-slate-400">Project summary</span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="What are you building, what should automation solve, and any deadlines?"
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white outline-none ring-cyan-300/50 transition focus:ring-2"
                />
              </label>
              <button
                type="submit"
                className="w-full rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Send message
              </button>
              {status === 'success' ? (
                <p className="text-sm text-emerald-200" role="status">
                  Thanks — your message is noted. We will follow up shortly. (Demo form; connect to your backend
                  when ready.)
                </p>
              ) : (
                <p className="text-xs text-slate-500">We typically reply within one business day.</p>
              )}
            </div>
          </form>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <h2 className="text-sm font-semibold text-white">WhatsApp</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                Prefer chat? Start a conversation — ideal for quick scoping and scheduling.
              </p>
              <a
                href="https://wa.me/918848260744?text=Hi%20Dotsel%20Automation%2C%20I%20want%20to%20discuss%20an%20automation%20project."
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex rounded-full border border-cyan-300/40 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-400/20"
              >
                Open WhatsApp
              </a>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <h2 className="text-sm font-semibold text-white">What to include</h2>
              <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-slate-300">
                <li>Product type (web, mobile, internal tool, SaaS)</li>
                <li>Integrations or data sources involved</li>
                <li>AI / automation goals if any</li>
                <li>Target launch or milestone dates</li>
              </ul>
            </div>

            <Link
              to="/about"
              className="block rounded-2xl border border-slate-800 bg-slate-950/60 p-6 text-sm text-slate-300 transition hover:border-cyan-300/30"
            >
              <span className="font-medium text-cyan-200">About our team →</span>
              <span className="mt-2 block leading-relaxed">How we deliver and what we optimize for.</span>
            </Link>
          </aside>
        </div>
      </main>
    </>
  )
}
