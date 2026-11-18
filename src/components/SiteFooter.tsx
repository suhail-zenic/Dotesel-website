import { Link } from 'react-router-dom'
import { companyName, contactPhone, contactPhoneHref, mainNavLinks, socialLinks, whatsappUrl } from '../home-data'
import { Logo } from './Logo'

const socials = [
  {
    label: 'WhatsApp',
    href: whatsappUrl,
    path: 'M20.52 3.48A11.86 11.86 0 0 0 12.02 0C5.45 0 .1 5.35.1 11.92c0 2.1.55 4.16 1.6 5.97L0 24l6.3-1.65a11.86 11.86 0 0 0 5.72 1.46h.01c6.57 0 11.92-5.35 11.92-11.92 0-3.18-1.24-6.17-3.43-8.41ZM12.02 21.4h-.01a9.9 9.9 0 0 1-5.06-1.39l-.36-.21-3.74.98 1-3.65-.24-.38a9.88 9.88 0 0 1-1.52-5.29c0-5.47 4.45-9.92 9.93-9.92a9.86 9.86 0 0 1 7.02 2.9 9.86 9.86 0 0 1 2.9 7.02c0 5.47-4.45 9.92-9.92 9.92Zm5.77-7.41c-.31-.16-1.82-.9-2.1-1-.28-.1-.49-.16-.7.16-.21.31-.8 1-.98 1.2-.18.21-.36.23-.67.08-.31-.16-1.29-.48-2.46-1.53-.91-.81-1.53-1.82-1.71-2.13-.18-.31-.02-.48.14-.64.14-.14.31-.36.47-.54.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.54-.08-.16-.7-1.68-.95-2.3-.25-.6-.5-.52-.7-.53h-.6c-.21 0-.54.08-.82.39-.28.31-1.08 1.05-1.08 2.56s1.1 2.97 1.25 3.18c.16.21 2.16 3.3 5.24 4.63.73.31 1.3.5 1.75.64.74.24 1.42.21 1.95.13.6-.09 1.82-.74 2.07-1.45.26-.7.26-1.31.18-1.45-.08-.13-.28-.21-.6-.36Z',
  },
  {
    label: 'Facebook',
    href: socialLinks.facebook,
    path: 'M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07c0 6.02 4.39 11.01 10.12 11.93v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.79-4.69 4.54-4.69 1.31 0 2.68.24 2.68.24v2.96h-1.51c-1.49 0-1.95.93-1.95 1.88v2.26h3.32l-.53 3.49h-2.79V24C19.61 23.08 24 18.09 24 12.07Z',
  },
  {
    label: 'Instagram',
    href: socialLinks.instagram,
    path: 'M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm6.25-2.55a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z',
  },
]

export function SiteFooter() {
  return (
    <footer className="theme-night relative overflow-hidden px-6 pt-20 lg:px-10">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.8fr_1fr]">
          <div>
            <Logo tone="paper" />
            <p className="mt-6 max-w-md font-display text-2xl font-semibold leading-snug tracking-tight text-ink">
              Beyond software. Built for <span className="text-gradient">long-term</span> partnerships.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['Custom software', 'Mobile apps', 'AI solutions', 'CRM & ERP'].map((chip) => (
                <span key={chip} className="rounded-full border border-line px-3 py-1.5 text-xs font-medium text-muted">
                  {chip}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="section-label">Explore</p>
            <ul className="mt-5 space-y-3 text-base text-muted">
              <li>
                <Link className="footer-link transition hover:text-ink" to="/">
                  Home
                </Link>
              </li>
              {mainNavLinks.map((link) => (
                <li key={link.to}>
                  <Link className="footer-link transition hover:text-ink" to={link.to}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="section-label">Say hello</p>
            <a href={contactPhoneHref} className="mt-5 block w-fit font-display text-3xl font-bold tracking-tight text-ink transition hover:text-brand">
              {contactPhone}
            </a>
            <address className="mt-4 not-italic text-sm leading-relaxed text-muted">
              Adimali, opposite to Union Bank
              <br />
              Idukki, Kerala – 685561
            </address>
            <div className="mt-6 flex flex-wrap gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink transition hover:border-brand hover:bg-brand hover:text-night"
                  aria-label={`Dotsel on ${s.label}`}
                  title={s.label}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {companyName}
          </p>
          <p>Your Idea · Our Expertise · One Long-Term Partnership</p>
        </div>
      </div>

      <p className="footer-wordmark mt-8 select-none text-center font-display font-extrabold" aria-hidden>
        DOTSEL
      </p>
    </footer>
  )
}
