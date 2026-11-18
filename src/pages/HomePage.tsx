import { useEffect, type CSSProperties, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { FaqItem } from '../components/FaqAccordion'
import { Icon } from '../components/Icon'
import { PartnershipOrbit } from '../components/PartnershipOrbit'
import { Reveal } from '../components/Reveal'
import { SiteHeader } from '../components/SiteHeader'
import {
  beliefs,
  companyFacts,
  companyName,
  contactPhone,
  contactPhoneHref,
  faqs,
  marqueeItems,
  processSteps,
  services,
  siteTagline,
  techStack,
  whoWeAre,
  whyDotsel,
} from '../home-data'

const TOTAL_SECTIONS = 6

function SectionIntro({
  index,
  label,
  title,
  className = '',
}: {
  index: number
  label: string
  title: ReactNode
  className?: string
}) {
  return (
    <div className={className}>
      <div className="flex items-center gap-4">
        <p className="section-label">{label}</p>
        <span className="font-serif-accent text-sm text-muted">
          {String(index).padStart(2, '0')} / {String(TOTAL_SECTIONS).padStart(2, '0')}
        </span>
      </div>
      <h2 className="mt-5 text-balance text-4xl font-bold leading-[1.02] tracking-tight text-ink sm:text-5xl lg:text-6xl">
        {title}
      </h2>
    </div>
  )
}

function ArrowUpRight({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path d="M7 17L17 7M8 7h9v9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function SpinBadge() {
  return (
    <Link
      to="/contact"
      className="group relative flex h-36 w-36 items-center justify-center sm:h-40 sm:w-40"
      aria-label="Start your project"
    >
      <svg viewBox="0 0 200 200" className="spin-badge absolute inset-0 h-full w-full" aria-hidden>
        <defs>
          <path id="badge-circle" d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0" />
        </defs>
        <circle cx="100" cy="100" r="99" fill="#d4ff3f" />
        <text fontSize="15.5" fontWeight="700" letterSpacing="2.6" fill="#0f0e13" fontFamily="Inter, sans-serif">
          <textPath href="#badge-circle" textLength="462">
            YOUR IDEA • OUR EXPERTISE • ONE PARTNERSHIP •
          </textPath>
        </text>
      </svg>
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-night text-lime transition-transform duration-500 group-hover:rotate-45">
        <ArrowUpRight className="h-6 w-6" />
      </span>
    </Link>
  )
}

function MarqueeBand({ items, className, reverse = false }: { items: string[]; className: string; reverse?: boolean }) {
  return (
    <div className={`band ${className}`} aria-hidden>
      <div className={`marquee-track flex min-w-max items-center gap-8 ${reverse ? 'marquee-track-reverse' : ''}`}>
        {items.concat(items).map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex shrink-0 items-center gap-8 font-display text-2xl font-bold uppercase tracking-tight sm:text-4xl"
          >
            {item}
            <span className="text-xl sm:text-2xl">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}

const bentoLayout: { span: string; tone: string; big?: boolean }[] = [
  { span: 'lg:col-span-7', tone: 'theme-brand', big: true },
  { span: 'lg:col-span-5', tone: 'tile-paper' },
  { span: 'lg:col-span-4', tone: 'theme-lime' },
  { span: 'lg:col-span-4', tone: 'theme-night' },
  { span: 'lg:col-span-4', tone: 'tile-paper' },
  { span: 'lg:col-span-12', tone: 'theme-night', big: true },
]

export default function HomePage() {
  useEffect(() => {
    document.title = 'Dotsel | Software Development & Technology Partner'
  }, [])

  return (
    <>
      {/* —— Hero —— */}
      <div className="relative">
        <SiteHeader variant="hero" />

        <section className="relative mx-auto w-full max-w-7xl px-6 pt-14 lg:px-10 lg:pt-20">
          <div className="hero-stagger flex flex-wrap items-center justify-between gap-4">
            <span className="shopify-badge">
              <span className="badge-dot inline-block h-2 w-2 rounded-full bg-brand" aria-hidden />
              {companyName}
            </span>
            <span className="hidden text-xs font-semibold uppercase tracking-[0.2em] text-muted sm:block">
              Software · Apps · AI · CRM &amp; ERP
            </span>
          </div>

          <div className="relative">
            <h1 className="hero-title mt-8 font-display text-ink">
              <span className="line-mask">
                <span>Beyond software.</span>
              </span>
              <span className="line-mask">
                <span>
                  Built for <span className="font-serif-accent text-brand">long-term</span>
                </span>
              </span>
              <span className="line-mask">
                <span>
                  partnerships<span className="text-brand">.</span>
                </span>
              </span>
            </h1>
            <div className="absolute bottom-0 right-0 hidden lg:block">
              <SpinBadge />
            </div>
          </div>
        </section>

        <section className="mx-auto grid w-full max-w-7xl gap-4 px-6 pb-8 pt-12 lg:grid-cols-12 lg:px-10 lg:pt-16">
          <Reveal className="bento-tile tile-paper flex flex-col justify-between gap-10 p-7 sm:p-9 lg:col-span-5">
            <p className="font-display text-2xl font-semibold leading-snug tracking-tight text-ink sm:text-3xl">
              {siteTagline}
            </p>
            <div>
              <div className="flex flex-wrap gap-3">
                <Link to="/contact" className="btn-primary px-6 py-3.5 text-sm">
                  Start your project <ArrowUpRight className="h-4 w-4" />
                </Link>
                <a href={contactPhoneHref} className="btn-secondary px-6 py-3.5 text-sm">
                  {contactPhone}
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal className="bento-tile theme-night flex items-center justify-center p-3 sm:p-5 lg:col-span-4">
            <PartnershipOrbit />
          </Reveal>

          <Reveal className="bento-tile theme-lime flex flex-col justify-between gap-8 p-7 sm:p-9 lg:col-span-3">
            <div className="flex items-start justify-between">
              <span className="text-xs font-bold uppercase tracking-[0.2em]">Est.</span>
              <span className="lg:hidden">
                <ArrowUpRight />
              </span>
            </div>
            <div>
              <p className="font-display text-7xl font-extrabold leading-none tracking-tighter sm:text-8xl">2023</p>
              <p className="mt-4 text-sm font-semibold">Adimali, Idukki, Kerala</p>
            </div>
          </Reveal>
        </section>
      </div>

      {/* —— Crossing bands —— */}
      <div className="bands">
        <MarqueeBand items={marqueeItems} className="band-a" />
        <MarqueeBand items={processSteps.map((s) => s.title)} className="band-b" reverse />
      </div>

      {/* —— 01 Who we are —— */}
      <section id="about" className="mx-auto w-full max-w-7xl scroll-mt-24 px-6 py-20 lg:px-10 lg:py-28">
        <Reveal className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <div className="flex items-center gap-4">
              <p className="section-label">Who We Are</p>
              <span className="font-serif-accent text-sm text-muted">01 / 06</span>
            </div>
          </div>
          <p className="statement font-display text-3xl font-semibold leading-[1.12] tracking-tight text-ink sm:text-5xl lg:col-span-9">
            We believe the best technology partnerships are built on <span className="highlight">trust</span>,{' '}
            <em className="text-brand">clear communication</em>, and{' '}
            <span className="highlight">long-term collaboration</span>.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-12">
          <Reveal className="space-y-5 text-base leading-relaxed text-muted sm:text-lg lg:col-span-6 lg:col-start-4">
            {whoWeAre.map((para, i) => (
              <p key={i} className={i === 0 ? 'text-ink' : undefined}>
                {para}
              </p>
            ))}
          </Reveal>
          <Reveal stagger className="grid grid-cols-2 gap-3 self-start lg:col-span-3">
            {companyFacts.map((fact) => (
              <div key={fact.label} className="fact-tile border border-line bg-surface-elevated px-4 py-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted">{fact.label}</p>
                <p className="mt-2 font-display text-lg font-bold leading-tight text-ink">{fact.value}</p>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal className="mt-16">
          <div className="belief-panel relative overflow-hidden p-7 sm:p-10">
            <p className="section-label">What We Believe</p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {beliefs.map((belief, i) => (
                <li
                  key={belief}
                  className="belief-item rounded-2xl border border-line bg-surface p-6"
                  style={{ transitionDelay: `${i * 90}ms` }}
                >
                  <span className="font-serif-accent text-5xl leading-none text-brand">{i + 1}</span>
                  <p className="mt-6 text-base font-medium leading-relaxed text-ink">{belief}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      {/* —— 02 What we do —— */}
      <section id="services" className="mx-auto w-full max-w-7xl scroll-mt-24 px-6 pb-24 lg:px-10 lg:pb-32">
        <Reveal className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionIntro
            index={2}
            label="What We Do"
            title={
              <>
                Digital solutions built around <span className="text-gradient">your business</span>.
              </>
            }
            className="max-w-3xl"
          />
          <Link to="/solutions" className="btn-secondary shrink-0 self-start px-6 py-3 text-sm lg:self-auto">
            All services <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Reveal>

        <Reveal className="mt-14">
          {services.map((service, i) => (
            <article
              key={service.title}
              className="service-row grid grid-cols-[1fr_auto] items-center gap-5 px-2 py-7 sm:px-5 md:grid-cols-[4.5rem_1.1fr_1fr_auto] md:gap-8 md:py-9"
            >
              <span className="font-serif-accent hidden text-4xl opacity-60 md:block">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="flex items-center gap-4">
                <span className="service-row-icon flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-muted text-brand">
                  <Icon name={service.icon} />
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold tracking-tight sm:text-3xl">{service.title}</h3>
                  <p className="service-row-muted mt-2 text-sm leading-relaxed text-muted md:hidden">
                    {service.description}
                  </p>
                </div>
              </div>
              <p className="service-row-muted hidden text-base leading-relaxed text-muted md:block">
                {service.description}
              </p>
              <span className="service-row-arrow flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-current sm:h-12 sm:w-12">
                <ArrowUpRight />
              </span>
            </article>
          ))}
        </Reveal>
      </section>

      {/* —— 03 Approach —— */}
      <section id="approach" className="theme-night mx-3 scroll-mt-24 rounded-[2.5rem] px-6 py-20 sm:mx-4 lg:px-10 lg:py-28">
        <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionIntro
              index={3}
              label="Our Approach"
              title={
                <>
                  From understanding to <span className="text-gradient">long-term growth</span>.
                </>
              }
            />
            <ol className="mt-10 hidden flex-wrap gap-2 lg:flex">
              {processSteps.map((step) => (
                <li key={step.step} className="rounded-full border border-line px-4 py-2 text-sm font-medium text-muted">
                  {step.step} · {step.title}
                </li>
              ))}
            </ol>
          </div>

          <ol className="space-y-5">
            {processSteps.map((step, i) => {
              const last = i === processSteps.length - 1
              return (
                <li key={step.step} className="stack-card" style={{ '--i': i } as CSSProperties}>
                  <div
                    className={`rounded-[1.75rem] p-7 shadow-[0_-12px_40px_rgba(0,0,0,0.35)] sm:p-9 ${
                      last ? 'theme-lime' : 'border border-line bg-surface-elevated'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-6">
                      <span className="stack-num text-6xl text-brand sm:text-7xl">{step.step}</span>
                      {last ? (
                        <span className="rounded-full bg-night px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-lime">
                          Ongoing
                        </span>
                      ) : null}
                    </div>
                    <h3 className="mt-8 text-3xl font-bold tracking-tight text-ink sm:text-4xl">{step.title}</h3>
                    <p className="mt-3 max-w-lg text-base leading-relaxed text-muted">{step.body}</p>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
      </section>

      {/* —— 04 Why Dotsel —— */}
      <section id="why" className="mx-auto w-full max-w-7xl scroll-mt-24 px-6 py-24 lg:px-10 lg:py-32">
        <Reveal>
          <SectionIntro
            index={4}
            label="Why Dotsel?"
            title={
              <>
                More than a software team. <span className="text-gradient">Your technology partner.</span>
              </>
            }
            className="max-w-4xl"
          />
        </Reveal>

        <Reveal stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-12">
          {whyDotsel.map((item, i) => {
            const layout = bentoLayout[i]
            const wide = i === whyDotsel.length - 1
            return (
              <article
                key={item.title}
                className={`bento-tile ${layout.tone} ${layout.span} flex min-h-[15rem] flex-col p-7 sm:p-8 ${
                  wide ? 'sm:col-span-2 lg:flex-row lg:items-end lg:justify-between lg:gap-10' : ''
                } ${i === 0 ? 'sm:col-span-2 lg:col-span-7' : ''}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-line">
                    <Icon name={item.icon} className="h-5 w-5" />
                  </span>
                  {!wide ? (
                    <span className="font-serif-accent text-3xl text-muted">{String(i + 1).padStart(2, '0')}</span>
                  ) : null}
                </div>
                <div className={wide ? 'mt-10 lg:mt-0 lg:flex lg:flex-1 lg:items-end lg:justify-between lg:gap-10' : 'mt-auto pt-12'}>
                  <h3
                    className={`font-bold tracking-tight text-ink ${
                      layout.big ? 'text-3xl sm:text-5xl' : 'text-2xl'
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p className={`mt-3 text-base leading-relaxed text-muted ${wide ? 'lg:mt-0 lg:max-w-md lg:text-right' : ''}`}>
                    {item.description}
                  </p>
                </div>
              </article>
            )
          })}
        </Reveal>
      </section>

      {/* —— 05 Technologies —— */}
      <section id="technologies" className="mx-auto w-full max-w-7xl scroll-mt-24 px-6 pb-24 lg:px-10 lg:pb-32">
        <Reveal>
          <SectionIntro
            index={5}
            label="Technologies We Use"
            title={
              <>
                The right technology for <span className="text-gradient">the right solution</span>.
              </>
            }
            className="max-w-4xl"
          />
        </Reveal>

        <Reveal className="mt-14 border-t-2 border-ink">
          {techStack.map((group) => (
            <div
              key={group.title}
              className="spec-row grid gap-4 border-b border-line px-2 py-6 sm:px-4 md:grid-cols-[3rem_17rem_1fr] md:items-center md:gap-6"
            >
              <span className="hidden h-11 w-11 items-center justify-center rounded-xl bg-night text-lime md:flex">
                <Icon name={group.icon} className="h-5 w-5" />
              </span>
              <h3 className="font-display text-lg font-bold tracking-tight text-ink sm:text-xl">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((tech) => (
                  <span key={tech} className="tech-chip rounded-full border border-line bg-surface-elevated px-3.5 py-1.5 text-sm text-muted">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </Reveal>
      </section>

      {/* —— 06 FAQ —— */}
      <section id="faq" className="mx-auto grid w-full max-w-7xl scroll-mt-24 gap-12 px-6 pb-24 lg:grid-cols-[1fr_1.3fr] lg:gap-16 lg:px-10 lg:pb-32">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionIntro index={6} label="FAQ" title="Everything you may want to know." />
          <div className="theme-lime mt-10 rounded-3xl p-6">
            <p className="text-sm font-semibold">Still curious?</p>
            <a href={contactPhoneHref} className="mt-1 inline-flex items-center gap-2 font-display text-2xl font-bold tracking-tight">
              {contactPhone} <ArrowUpRight />
            </a>
          </div>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <FaqItem key={faq.question} question={faq.question} answer={faq.answer} defaultOpen={index === 0} />
          ))}
        </div>
      </section>

      {/* —— CTA —— */}
      <section className="cta-panel mx-3 mb-3 rounded-[2.5rem] px-6 py-20 sm:mx-4 sm:mb-4 lg:px-10 lg:py-28">
        <div className="relative mx-auto w-full max-w-7xl">
          <Reveal>
            <p className="section-label">Let&apos;s Build Together</p>
            <h2 className="mt-6 max-w-4xl text-balance text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl">
              Have an idea? Let&apos;s turn it into something <span className="text-gradient">real.</span>
            </h2>
            <div className="mt-8 grid max-w-5xl gap-6 text-base leading-relaxed text-muted sm:text-lg md:grid-cols-2">
              <p>
                Whether you&apos;re starting a new business, improving an existing process, or looking to build your
                next digital product, Dotsel is ready to help.
              </p>
              <p>
                From strategy and design to development, deployment, and long-term support, we work with you to create
                technology that solves real business problems and grows with you.
              </p>
            </div>
          </Reveal>

          <Reveal className="cta-giant mt-16 font-display font-extrabold text-ink">
            <p className="opacity-45">Let&apos;s discuss your idea.</p>
            <p className="opacity-70">Let&apos;s build the solution.</p>
            <p>
              Let&apos;s <span className="text-gradient">grow together.</span>
            </p>
          </Reveal>

          <div className="mt-16 flex flex-col gap-10 border-t border-line pt-10 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
                Your Idea · Our Expertise · One Long-Term Partnership
              </p>
              <a href={contactPhoneHref} className="cta-phone mt-3 inline-block font-display text-4xl font-bold tracking-tight text-ink sm:text-6xl">
                {contactPhone}
              </a>
            </div>
            <Link
              to="/contact"
              className="cta-circle flex h-40 w-40 shrink-0 flex-col items-center justify-center rounded-full bg-lime text-center text-night shadow-2xl sm:h-44 sm:w-44"
            >
              <ArrowUpRight className="h-8 w-8" />
              <span className="mt-2 px-4 text-sm font-bold leading-tight">Start Your Project With Dotsel</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
