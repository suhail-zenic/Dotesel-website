import { Link, useLocation } from 'react-router-dom'
import { useSiteScroll } from '../context/SiteScrollContext'
import { contactPhone, contactPhoneTel, whatsappUrl } from '../home-data'
import { AmbientBackground } from './AmbientBackground'
import { AnimatedOutlet } from './AnimatedOutlet'

export function SiteLayout() {
  const { showBackTop, showStickyCta } = useSiteScroll()
  const location = useLocation()
  const showBackHomeBottom = location.pathname !== '/'

  return (
    <div className="relative min-w-0 overflow-x-clip bg-canvas text-ink selection:bg-brand selection:text-canvas">
      <AmbientBackground />
      <div className="scroll-progress fixed left-0 top-0 z-[60] h-[2px] w-full bg-transparent" aria-hidden>
        <div
          className="scroll-progress-bar h-full"
          style={{ transform: 'scaleX(var(--scroll-progress))' }}
        />
      </div>

      <AnimatedOutlet />

      <button
        type="button"
        className={`back-top fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-line bg-surface text-lg font-semibold text-brand shadow-lg transition hover:border-brand hover:bg-brand-muted ${
          showBackTop ? 'back-top-visible' : ''
        }`}
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        ↑
      </button>

      <div
        className={`sticky-cta fixed inset-x-0 bottom-0 z-40 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-3 md:hidden ${
          showStickyCta ? 'sticky-cta-visible' : ''
        }`}
        aria-hidden={!showStickyCta}
      >
        <div className="glass-card mx-auto flex w-full max-w-md items-center gap-3 rounded-2xl border border-line p-3 shadow-xl">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary inline-flex flex-1 py-3 text-sm"
          >
            WhatsApp
          </a>
          <a href={`tel:${contactPhoneTel}`} className="btn-primary inline-flex flex-1 py-3 text-sm">
            {contactPhone}
          </a>
        </div>
      </div>

      {showBackHomeBottom ? (
        <div className="mx-auto w-full max-w-7xl px-6 py-8 lg:px-10">
          <Link
            to="/"
            className="btn-secondary inline-flex items-center gap-2 px-5 py-2.5 text-sm"
          >
            <span aria-hidden>←</span>
            Back to home
          </Link>
        </div>
      ) : null}
    </div>
  )
}
