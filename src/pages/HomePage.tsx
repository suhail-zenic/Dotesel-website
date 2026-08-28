import { useEffect } from 'react'
import { BrochureHero } from '../components/BrochureHero'
import { BrochureContours } from '../components/BrochureContours'
import { Reveal } from '../components/Reveal'
import {
  beliefs,
  contactPhone,
  contactPhoneTel,
  ctaClosingLines,
  ctaTagline,
  faqs,
  processSteps,
  services,
  technologies,
  whyDotsel,
} from '../home-data'

export default function HomePage() {
  useEffect(() => {
    document.title = 'Dotsel Automation & Venture Pvt. Ltd.'
  }, [])

  return (
    <>
      <BrochureHero />

      <main className="relative z-[21] mx-auto min-w-0 w-full max-w-7xl space-y-24 px-6 pt-6 pb-20 sm:py-20 lg:space-y-28 lg:px-10 lg:py-20">
        <section className="who-we-are-section relative -mx-6 px-6 pt-4 pb-16 sm:py-16 lg:-mx-10 lg:px-10 lg:py-20">
          <BrochureContours />
          <div className="relative z-10 grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <h2 className="who-we-are-heading">Who We Are</h2>
                <div className="mt-6 space-y-5 text-sm leading-relaxed text-white/90 sm:text-base sm:leading-relaxed">
                  <p>
                    <strong className="font-bold text-white">Dotsel Automation & Venture Pvt. Ltd.</strong> is a
                    software development and technology service company founded in{' '}
                    <strong className="font-bold text-white">2023</strong>, currently operating from{' '}
                    <strong className="font-bold text-white">Adimali, Idukki, Kerala.</strong>
                  </p>
                  <p>
                    We collaborate with brands as their{' '}
                    <strong className="font-bold text-white">technology and software development partner</strong>,
                    providing reliable, stress-free software services tailored to their business needs. Rather than
                    simply delivering a project and moving on, we work closely with our clients throughout their
                    journey—from understanding their ideas and requirements to developing, launching, maintaining, and
                    improving their software solutions.
                  </p>
                  <p>
                    We believe the best technology partnerships are built on{' '}
                    <strong className="font-bold text-white">
                      trust, clear communication, and long-term collaboration.
                    </strong>{' '}
                    Our goal is to work and grow together with brands that are looking for a dependable software
                    development partner they can rely on for the long term.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="who-we-are-heading">What We Believe</h2>
                <ul className="mt-6 space-y-3">
                  {beliefs.map((belief) => (
                    <li key={belief} className="who-belief-card">
                      <span className="font-bold text-white">{belief}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

        <section id="services" className="what-we-do-section relative -mx-6 px-6 py-16 lg:-mx-10 lg:px-10 lg:py-20">
          <BrochureContours />
          <div className="relative z-10 max-w-3xl">
            <h2 className="what-we-do-heading">What We Do</h2>
            <p className="mt-3 text-base text-white/90 sm:text-lg">
              Digital Solutions Built Around Your Business
            </p>
          </div>
          <div className="relative z-10 mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {services.map((service, i) => (
              <article key={service.title} className="what-we-do-card">
                <div className="relative z-10 flex items-start gap-3">
                  <span className="what-we-do-badge" aria-hidden>
                    {i + 1}
                  </span>
                  <h3 className="flex-1 pt-0.5 text-sm font-bold uppercase leading-snug text-white sm:text-[0.95rem]">
                    {service.title}
                  </h3>
                </div>
                <p className="relative z-10 mt-4 text-sm leading-relaxed text-white/85">{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <Reveal>
          <section className="our-approach-section relative -mx-6 px-6 py-16 lg:-mx-10 lg:px-10 lg:py-20">
            <BrochureContours />
            <div className="relative z-10 max-w-3xl">
              <h2 className="our-approach-heading">Our Approach</h2>
              <p className="mt-3 text-base text-white/90 sm:text-lg">
                From Understanding to Long-Term Growth
              </p>
            </div>
            <ol className="approach-timeline relative z-10 mt-10 max-w-2xl">
              {processSteps.map((row) => (
                <li key={row.step} className="approach-timeline-item">
                  <div className="approach-timeline-marker">
                    <span className="approach-hex">
                      <span className="approach-hex-label">{row.step}</span>
                    </span>
                  </div>
                  <div className="approach-timeline-content">
                    <h3 className="text-sm font-bold uppercase tracking-wide text-white sm:text-base">
                      {row.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/85">{row.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        </Reveal>

        <Reveal>
          <section className="faq-section relative -mx-6 px-6 py-16 lg:-mx-10 lg:px-10 lg:py-20">
            <BrochureContours />
            <div className="relative z-10 max-w-3xl">
              <h2 className="faq-heading">FAQ</h2>
              <p className="mt-3 text-base text-white/90 sm:text-lg">Everything You May Want to Know</p>
            </div>
            <div className="relative z-10 mt-10 grid gap-8 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-10">
              {faqs.map((faq) => (
                <article key={faq.question} className="faq-card">
                  <div className="flex items-start gap-3">
                    <span className="faq-q-icon" aria-hidden>
                      ?
                    </span>
                    <h3 className="flex-1 text-sm font-bold uppercase leading-snug tracking-wide text-white sm:text-[0.95rem]">
                      {faq.question}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-white/85 sm:text-[0.9375rem]">{faq.answer}</p>
                </article>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="why-dotsel-section relative -mx-6 px-6 py-16 lg:-mx-10 lg:px-10 lg:py-20">
            <BrochureContours />
            <div className="relative z-10 max-w-3xl">
              <h2 className="why-dotsel-heading">Why Dotsel?</h2>
              <p className="mt-3 text-base text-white/90 sm:text-lg">
                More Than a Software Team. Your Technology Partner.
              </p>
            </div>
            <div className="relative z-10 mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
              {whyDotsel.map((item) => (
                <article key={item.title} className="why-dotsel-card">
                  <h3 className="relative z-10 text-sm font-bold uppercase leading-snug text-white sm:text-[0.95rem]">
                    {item.title}
                  </h3>
                  <p className="relative z-10 mt-3 text-sm leading-relaxed text-white/85">{item.description}</p>
                </article>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="technologies-section relative -mx-6 px-6 py-16 lg:-mx-10 lg:px-10 lg:py-20">
            <BrochureContours />
            <div className="relative z-10 max-w-3xl">
              <h2 className="technologies-heading">Technologies We Use</h2>
              <p className="mt-3 text-base text-white/90 sm:text-lg">
                The Right Technology for the Right Solution
              </p>
            </div>
            <div className="relative z-10 mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-8">
              {technologies.map((tile, index) => (
                <article key={`${tile.title}-${index}`} className="tech-tile">
                  <div className="tech-tile-header">
                    <h3 className="text-xs font-bold uppercase leading-snug tracking-wide text-white sm:text-[0.8125rem]">
                      {tile.title}
                    </h3>
                  </div>
                  <div className="tech-tile-detail">
                    <p className="text-sm leading-relaxed text-white/85">{tile.detail}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="lets-build-section relative -mx-6 px-6 py-16 lg:-mx-10 lg:px-10 lg:py-20">
            <BrochureContours />
            <div className="relative z-10 max-w-3xl">
              <h2 className="lets-build-heading">Let&apos;s Build Together</h2>
              <p className="mt-3 text-base text-white/90 sm:text-lg">
                Have an Idea? Let&apos;s Turn It Into Something Real.
              </p>
              <p className="mt-6 text-sm leading-relaxed text-white/85 sm:text-base">
                Whether you&apos;re starting a new business, improving an existing process, or looking to build
                your next digital product, Dotsel is ready to help.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-white/85 sm:text-base">
                From strategy and design to development, deployment, and long-term support, we work with you
                to create technology that solves real business problems and grows with you.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-white/90 sm:text-base">
                {ctaClosingLines.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              <p className="mt-8 text-sm font-bold text-white sm:text-base">Start Your Project With Dotsel</p>
              <p className="mt-3 text-sm font-bold text-white sm:text-base">
                {ctaTagline.replace(/ • /g, ' · ')}
              </p>
            </div>
            <div className="relative z-10 mt-12 flex justify-end">
              <a
                href={`tel:${contactPhoneTel}`}
                className="text-sm font-semibold text-white transition hover:text-[#3ecf8e] sm:text-base"
              >
                {contactPhone}
              </a>
            </div>
          </section>
        </Reveal>
      </main>
    </>
  )
}
