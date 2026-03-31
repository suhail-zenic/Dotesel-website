import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { SiteHeader } from '../components/SiteHeader'
import { caseStudies } from '../home-data'

export default function CaseStudiesPage() {
  useEffect(() => {
    document.title = 'Case Studies | Dotsel Automation'
  }, [])

  return (
    <>
      <div className="relative z-20 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md">
        <SiteHeader variant="minimal" />
      </div>

      <main className="mx-auto min-w-0 w-full max-w-7xl px-6 py-16 lg:px-10">
        <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">Case Studies</p>
        <h1 className="mt-3 text-4xl font-semibold leading-tight text-white sm:text-5xl">
          Real projects. Clear results.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">
          Short summaries of work we’ve shipped—what changed for the client and by how much.
        </p>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <article
              key={study.title}
              className="lift-card flex flex-col rounded-3xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8 transition hover:border-cyan-400/35"
            >
              <p className="text-xs uppercase tracking-[0.12em] text-emerald-300/90">{study.impact}</p>
              <h2 className="mt-3 text-xl font-semibold text-white sm:text-2xl">{study.title}</h2>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-300 sm:text-base">{study.summary}</p>
              <Link
                to="/contact"
                className="mt-6 inline-flex text-sm font-semibold text-cyan-200 transition hover:text-cyan-100"
              >
                Talk about a similar build →
              </Link>
            </article>
          ))}
        </div>

        <section className="mt-16 rounded-3xl border border-slate-800 bg-slate-900/70 p-8 sm:p-10">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">How we measure success</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Before we write code, we agree on signals: support volume, cycle time, conversion, or manual steps
            removed. That keeps delivery tied to business results—not feature counts.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              'Baseline metrics and targets captured in discovery',
              'Instrumentation and dashboards where product owners need visibility',
              'Iteration windows after launch to refine based on real usage',
            ].map((line) => (
              <li key={line} className="flex gap-3 text-sm text-slate-300 sm:text-base">
                <span className="mt-1 text-cyan-300" aria-hidden>
                  ●
                </span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="cta-glow mt-16 rounded-3xl border border-cyan-300/25 bg-gradient-to-r from-cyan-400/10 via-blue-400/10 to-violet-400/10 p-8 sm:p-10">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">Want a case study for your use case?</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Send a short brief—we will tell you honestly if we are the right fit and what a first phase could look
            like.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="rounded-full bg-cyan-300 px-7 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
            >
              Get in touch
            </Link>
            <Link
              to="/solutions"
              className="rounded-full border border-slate-600 px-7 py-3 text-sm font-semibold text-white transition hover:border-cyan-200 hover:text-cyan-200"
            >
              View capabilities
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
