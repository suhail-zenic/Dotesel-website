import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '../components/Icon'
import { SiteHeader } from '../components/SiteHeader'
import { services, techStack } from '../home-data'

export default function SolutionsPage() {
  useEffect(() => {
    document.title = 'Services | Dotsel Automation & Venture'
  }, [])

  return (
    <>
      <div className="relative z-20 border-b border-line bg-surface">
        <SiteHeader variant="minimal" />
      </div>

      <main className="mx-auto min-w-0 w-full max-w-7xl px-6 py-16 lg:px-10">
        <p className="section-label section-label-line">What We Do</p>
        <h1 className="mt-4 max-w-4xl text-balance text-4xl font-extrabold leading-tight tracking-tight text-ink sm:text-6xl">
          Digital solutions built around <span className="text-gradient">your business</span>.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">
          From the first idea to ongoing growth, we stand beside your business every step of the way.
        </p>

        <section className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((item, i) => (
            <article
              key={item.title}
              className="spotlight service-card group relative overflow-hidden rounded-3xl border border-line bg-surface/80 p-7"
            >
              <span className="service-number" aria-hidden>
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-brand/25 bg-brand-muted text-brand">
                <Icon name={item.icon} />
              </span>
              <h2 className="relative mt-6 text-xl font-bold text-ink">{item.title}</h2>
              <p className="relative mt-3 text-sm leading-relaxed text-muted sm:text-base">{item.description}</p>
            </article>
          ))}
        </section>

        <section className="mt-20">
          <p className="section-label section-label-line">Technologies We Use</p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            The right technology for the right solution.
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {techStack.map((group) => (
              <article key={group.title} className="tech-card spotlight relative rounded-2xl border border-line bg-surface/80 p-6">
                <div className="flex items-center gap-3">
                  <span className="text-brand">
                    <Icon name={group.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-ink">{group.title}</h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((tech) => (
                    <span key={tech} className="tech-chip rounded-full border border-line bg-canvas/60 px-3 py-1 text-xs font-medium text-muted">
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="cta-panel mt-20 rounded-3xl p-8 sm:p-12">
          <h2 className="relative text-2xl font-extrabold text-ink sm:text-4xl">Start your project with Dotsel</h2>
          <p className="relative mt-4 max-w-2xl text-base leading-relaxed text-muted">
            Your Idea · Our Expertise · One Long-Term Partnership
          </p>
          <div className="relative mt-8 flex flex-wrap gap-4">
            <Link to="/contact" className="btn-primary px-7 py-3 text-sm">
              Contact us
            </Link>
            <Link to="/about" className="btn-secondary px-7 py-3 text-sm">
              About Dotsel
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
