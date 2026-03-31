import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { SiteHeader } from '../components/SiteHeader'
import { integrationTiles, outcomes, services } from '../home-data'

export default function SolutionsPage() {
  useEffect(() => {
    document.title = 'Solutions | Dotsel Automation'
  }, [])

  return (
    <>
      <div className="relative z-20 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md">
        <SiteHeader variant="minimal" />
      </div>

      <main className="mx-auto min-w-0 w-full max-w-7xl px-6 py-16 lg:px-10">
        <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">Solutions</p>
        <h1 className="mt-3 text-4xl font-semibold leading-tight text-white sm:text-5xl">
          What we actually build for you.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">
          Apps, automation, and integrations—scoped so you know what ships when, and what it does for the business.
        </p>

        <section className="mt-14">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">Core capabilities</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {services.map((item) => (
              <article
                key={item.title}
                className="lift-card rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition hover:border-cyan-400/35"
              >
                <h3 className="text-lg font-medium text-cyan-100">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">Platform & integration building blocks</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Typical engagements combine several of these areas—we align the stack to your constraints, not the
            other way around.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {integrationTiles.map((tile) => (
              <article
                key={tile.title}
                className={`rounded-2xl border border-slate-800 bg-slate-900/60 p-5 ${tile.wide ? 'sm:col-span-2 lg:col-span-2' : ''}`}
              >
                <h3 className="text-sm font-semibold text-white">{tile.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{tile.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-3xl border border-slate-800 bg-slate-900/70 p-8 sm:p-10">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">Outcomes we optimize for</h2>
          <p className="mt-3 max-w-2xl text-sm text-slate-300 sm:text-base">
            Representative ranges from client engagements—your mileage depends on scope and baseline.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {outcomes.map((row) => (
              <li key={row.label} className="rounded-xl border border-slate-800/80 bg-slate-950/50 px-4 py-5 text-center">
                <p className="text-3xl font-semibold text-cyan-200">{row.value}%</p>
                <p className="mt-1 text-sm text-slate-400">{row.label}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="cta-glow mt-16 rounded-3xl border border-cyan-300/25 bg-gradient-to-r from-cyan-400/10 via-blue-400/10 to-violet-400/10 p-8 sm:p-10">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">Ready to scope a solution?</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Tell us about users, integrations, and deadlines—we will suggest an architecture and delivery plan.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="rounded-full bg-cyan-300 px-7 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
            >
              Contact us
            </Link>
            <Link
              to="/case-studies"
              className="rounded-full border border-slate-600 px-7 py-3 text-sm font-semibold text-white transition hover:border-cyan-200 hover:text-cyan-200"
            >
              View case studies
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
