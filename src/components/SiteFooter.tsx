import { Link } from 'react-router-dom'
import { socialLinks } from '../home-data'

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/95 px-6 py-12 lg:px-10">
      <div className="footer-shell mx-auto w-full max-w-7xl rounded-3xl border border-slate-800 bg-slate-900/70 p-6 sm:p-10">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.9fr_0.9fr]">
          <div>
            <div className="flex items-center gap-4">
              <Link to="/">
                <img
                  src="/Dotsel.png"
                  alt="Dotsel Automation"
                  className="h-24 w-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </Link>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-300">
              High-end software development for speed, reliability, and measurable impact. We build products,
              apps, and AI automations into one premium operating layer for your business.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="footer-chip rounded-full border border-slate-700 bg-slate-950/40 px-4 py-2 text-xs text-slate-300">
                Web Apps
              </span>
              <span className="footer-chip rounded-full border border-slate-700 bg-slate-950/40 px-4 py-2 text-xs text-slate-300">
                Mobile Apps
              </span>
              <span className="footer-chip rounded-full border border-slate-700 bg-slate-950/40 px-4 py-2 text-xs text-slate-300">
                AI Automation
              </span>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">Quick links</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>
                <Link className="footer-link transition hover:text-cyan-200" to="/solutions">
                  Solutions
                </Link>
              </li>
              <li>
                <Link className="footer-link transition hover:text-cyan-200" to="/industries">
                  Industries
                </Link>
              </li>
              <li>
                <Link className="footer-link transition hover:text-cyan-200" to="/case-studies">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link className="footer-link transition hover:text-cyan-200" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="footer-link transition hover:text-cyan-200" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">Contact</p>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              Want a proposal or a quick consult? Start a WhatsApp chat and we’ll respond fast.
            </p>
            <address className="mt-4 not-italic text-sm leading-relaxed text-slate-400">
              Adimali, opposite to Union Bank
              <br />
              Idukki – 685561
            </address>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="https://wa.me/918848260744?text=Hi%20Dotsel%20Automation%2C%20I%20want%20to%20discuss%20an%20automation%20project."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-950/40 p-3 text-slate-200 transition hover:border-cyan-300/50 hover:bg-cyan-400/10 hover:text-cyan-200"
                aria-label="WhatsApp"
                title="WhatsApp"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.52 3.48A11.86 11.86 0 0 0 12.02 0C5.45 0 .1 5.35.1 11.92c0 2.1.55 4.16 1.6 5.97L0 24l6.3-1.65a11.86 11.86 0 0 0 5.72 1.46h.01c6.57 0 11.92-5.35 11.92-11.92 0-3.18-1.24-6.17-3.43-8.41ZM12.02 21.4h-.01a9.9 9.9 0 0 1-5.06-1.39l-.36-.21-3.74.98 1-3.65-.24-.38a9.88 9.88 0 0 1-1.52-5.29c0-5.47 4.45-9.92 9.93-9.92a9.86 9.86 0 0 1 7.02 2.9 9.86 9.86 0 0 1 2.9 7.02c0 5.47-4.45 9.92-9.92 9.92Zm5.77-7.41c-.31-.16-1.82-.9-2.1-1-.28-.1-.49-.16-.7.16-.21.31-.8 1-.98 1.2-.18.21-.36.23-.67.08-.31-.16-1.29-.48-2.46-1.53-.91-.81-1.53-1.82-1.71-2.13-.18-.31-.02-.48.14-.64.14-.14.31-.36.47-.54.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.54-.08-.16-.7-1.68-.95-2.3-.25-.6-.5-.52-.7-.53h-.6c-.21 0-.54.08-.82.39-.28.31-1.08 1.05-1.08 2.56s1.1 2.97 1.25 3.18c.16.21 2.16 3.3 5.24 4.63.73.31 1.3.5 1.75.64.74.24 1.42.21 1.95.13.6-.09 1.82-.74 2.07-1.45.26-.7.26-1.31.18-1.45-.08-.13-.28-.21-.6-.36Z" />
                </svg>
              </a>

              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-950/40 p-3 text-slate-200 transition hover:border-cyan-300/50 hover:bg-cyan-400/10 hover:text-cyan-200"
                aria-label="Dotsel Automation on Facebook"
                title="Dotsel Automation on Facebook"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07c0 6.02 4.39 11.01 10.12 11.93v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.79-4.69 4.54-4.69 1.31 0 2.68.24 2.68.24v2.96h-1.51c-1.49 0-1.95.93-1.95 1.88v2.26h3.32l-.53 3.49h-2.79V24C19.61 23.08 24 18.09 24 12.07Z" />
                </svg>
              </a>

              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-950/40 p-3 text-slate-200 transition hover:border-cyan-300/50 hover:bg-cyan-400/10 hover:text-cyan-200"
                aria-label="Dotsel Automation on Instagram"
                title="Dotsel Automation on Instagram"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm6.25-2.55a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-slate-800/80 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-400">© {new Date().getFullYear()} Dotsel Automation. All rights reserved.</p>
          <div className="flex flex-wrap gap-4 text-xs text-slate-400">
            <a className="footer-link transition hover:text-cyan-200" href="#">
              Privacy
            </a>
            <a className="footer-link transition hover:text-cyan-200" href="#">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
