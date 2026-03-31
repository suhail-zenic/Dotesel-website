import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { SiteHeader } from '../components/SiteHeader'
import { industries, industryPageContent } from '../home-data'

export default function IndustriesPage() {
  useEffect(() => {
    document.title = 'Industries | Dotsel Automation'
  }, [])

  return (
    <>
      <div className="relative z-20 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md">
        <SiteHeader variant="minimal" />
      </div>

      <main className="mx-auto min-w-0 w-full max-w-7xl px-6 py-16 lg:px-10">
        <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">Industries</p>
        <h1 className="mt-3 text-4xl font-semibold leading-tight text-white sm:text-5xl">
          Same craft. Tailored to your industry.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">
          Rules and buyers differ—we adjust UX, data, and automation without confusing your team.
        </p>

        <div className="mt-14 grid gap-6 lg:gap-8">
          {industries.map((name) => {
            const content = industryPageContent[name]
            return (
              <article
                key={name}
                id={name.toLowerCase().replace(/\s+/g, '-')}
                className="scroll-mt-28 rounded-3xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8 lg:grid lg:grid-cols-[minmax(0,240px)_1fr] lg:gap-10"
              >
                <div>
                  <h2 className="text-2xl font-semibold text-cyan-100 sm:text-3xl">{name}</h2>
                  <p className="mt-2 text-sm font-medium text-slate-400">{content.headline}</p>
                </div>
                <div>
                  <p className="text-sm leading-relaxed text-slate-300 sm:text-base">{content.summary}</p>
                  <ul className="mt-5 space-y-2 text-sm text-slate-300 sm:text-base">
                    {content.focus.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-1.5 shrink-0 text-cyan-300" aria-hidden>
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

        <section className="cta-glow mt-16 rounded-3xl border border-cyan-300/25 bg-gradient-to-r from-cyan-400/10 via-blue-400/10 to-violet-400/10 p-8 sm:p-10">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">Discuss your sector</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Share your constraints and stakeholders—we will map an approach that fits regulation, roadmap, and
            budget.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="rounded-full bg-cyan-300 px-7 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
            >
              Book a call
            </Link>
            <Link
              to="/solutions"
              className="rounded-full border border-slate-600 px-7 py-3 text-sm font-semibold text-white transition hover:border-cyan-200 hover:text-cyan-200"
            >
              Explore solutions
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
