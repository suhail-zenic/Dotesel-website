import { Link, Outlet, useLocation } from 'react-router-dom'
import { useSiteScroll } from '../context/SiteScrollContext'
import { QuickEnquiryModal } from './QuickEnquiryModal'
import { SiteFooter } from './SiteFooter'

export function SiteLayout() {
  const { showBackTop, showStickyCta } = useSiteScroll()
  const location = useLocation()
  const showBackHomeBottom = location.pathname !== '/'

  return (
    <div className="min-w-0 overflow-x-clip bg-slate-950 text-slate-100 selection:bg-cyan-400 selection:text-slate-900">
      <div className="scroll-progress fixed left-0 top-0 z-[60] h-[2px] w-full bg-transparent" aria-hidden>
        <div
          className="scroll-progress-bar h-full bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400"
          style={{ transform: 'scaleX(var(--scroll-progress))' }}
        />
      </div>

      <Outlet />

      <button
        type="button"
        className={`back-top scroll-assist fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-cyan-400/40 bg-slate-900/90 text-lg text-cyan-200 shadow-lg backdrop-blur transition hover:bg-cyan-400/15 ${
          showBackTop ? 'back-top-visible' : ''
        }`}
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <span className="scroll-assist-ring" aria-hidden>
          <svg viewBox="0 0 44 44" className="scroll-assist-svg">
            <defs>
              <linearGradient id="scrollAssistGradient" x1="0" y1="0" x2="44" y2="44">
                <stop offset="0%" stopColor="#67e8f9" />
                <stop offset="45%" stopColor="#60a5fa" />
                <stop offset="100%" stopColor="#a78bfa" />
              </linearGradient>
            </defs>
            <circle className="scroll-assist-track" cx="22" cy="22" r="18" />
            <circle className="scroll-assist-progress" cx="22" cy="22" r="18" />
          </svg>
        </span>
        <span className="scroll-assist-icon" aria-hidden>
          ↑
        </span>
        <span className="scroll-assist-label">Top</span>
      </button>

      <div
        className={`sticky-cta fixed inset-x-0 bottom-0 z-40 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-3 md:hidden ${
          showStickyCta ? 'sticky-cta-visible' : ''
        }`}
        aria-hidden={!showStickyCta}
      >
        <div className="mx-auto flex w-full max-w-md items-center gap-3 rounded-2xl border border-slate-800/80 bg-slate-950/80 p-3 shadow-2xl shadow-slate-950/60 backdrop-blur">
          <a
            href="https://wa.me/918848260744?text=Hi%20Dotsel%20Automation%2C%20I%20want%20to%20discuss%20an%20automation%20project."
            target="_blank"
            rel="noreferrer"
            className="inline-flex flex-1 items-center justify-center rounded-full border border-slate-700 bg-slate-900/70 px-4 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/40 hover:text-cyan-200"
          >
            WhatsApp
          </a>
          <a
            href="/contact"
            className="inline-flex flex-1 items-center justify-center rounded-full bg-cyan-300 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            Book a Call
          </a>
        </div>
      </div>

      <QuickEnquiryModal />

      {showBackHomeBottom ? (
        <div className="mx-auto w-full max-w-7xl px-6 py-8 lg:px-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-5 py-2.5 text-sm font-medium text-slate-200 transition hover:border-cyan-300/50 hover:text-cyan-200"
          >
            <span aria-hidden>←</span>
            Back to home
          </Link>
        </div>
      ) : null}

      <SiteFooter />
    </div>
  )
}
