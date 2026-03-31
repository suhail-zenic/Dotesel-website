import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { SiteHeader } from '../components/SiteHeader'
import { innovationPillars, stats } from '../home-data'

export default function AboutPage() {
  useEffect(() => {
    document.title = 'About Us | Dotsel Automation'
  }, [])

  return (
    <>
      <div className="relative z-20 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md">
        <SiteHeader variant="minimal" />
      </div>

      <main className="mx-auto min-w-0 w-full max-w-7xl px-6 py-16 lg:px-10">
        <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">About Dotsel</p>
        <h1 className="mt-3 text-4xl font-semibold leading-tight text-white sm:text-5xl">
          We build software you can explain to your board—and your customers.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">
          Small, senior-led team. Clear plans. Web, mobile, and automation shipped with quality you can feel.
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 px-5 py-6 text-center"
            >
              <p className="text-2xl font-semibold text-cyan-200">{item.value}</p>
              <p className="mt-1 text-sm text-slate-400">{item.label}</p>
            </div>
          ))}
        </div>

        <section className="mt-20 grid gap-10 rounded-3xl border border-slate-800 bg-slate-900/70 p-8 sm:p-10 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">How we work</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
              We run tight discovery, clear architecture, and iterative delivery. You get transparent
              communication, measurable milestones, and code you can hand to any strong engineer without
              surprises.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
              Whether you are validating an MVP or modernizing a critical workflow, we align engineering
              decisions to KPIs—cycle time, conversion, support load, and operational risk—not vanity features.
            </p>
          </div>
          <ul className="space-y-4 text-sm text-slate-300 sm:text-base">
            <li className="flex gap-3">
              <span className="mt-1 text-cyan-300" aria-hidden>
                ●
              </span>
              <span>Product-first UX and performance budgets from day one.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 text-cyan-300" aria-hidden>
                ●
              </span>
              <span>Secure integrations, observability, and maintainable TypeScript codebases.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 text-cyan-300" aria-hidden>
                ●
              </span>
              <span>AI and automation where they reduce work—not where they add noise.</span>
            </li>
          </ul>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">What we stand for</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {innovationPillars.map((pillar) => (
              <article
                key={pillar.title}
                className="lift-card rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition hover:border-cyan-400/35"
              >
                <h3 className="text-lg font-medium text-cyan-100">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">{pillar.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="cta-glow mt-16 rounded-3xl border border-cyan-300/25 bg-gradient-to-r from-cyan-400/10 via-blue-400/10 to-violet-400/10 p-8 sm:p-10">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">Tell us what you are building</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Share context on your product, timeline, and constraints—we will respond with an honest view on fit
            and next steps.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="rounded-full bg-cyan-300 px-7 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
            >
              Contact us
            </Link>
            <Link
              to="/"
              className="rounded-full border border-slate-600 px-7 py-3 text-sm font-semibold text-white transition hover:border-cyan-200 hover:text-cyan-200"
            >
              Back to home
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
