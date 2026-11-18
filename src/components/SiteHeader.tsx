import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { contactPhoneHref, mainNavLinks } from '../home-data'
import { useSiteScroll } from '../context/SiteScrollContext'
import { Logo } from './Logo'

type SiteHeaderProps = {
  variant?: 'hero' | 'minimal'
}

export function SiteHeader(_props: SiteHeaderProps) {
  const { menuOpen, setMenuOpen } = useSiteScroll()
  const location = useLocation()
  const activePath = location.pathname

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname, location.hash, setMenuOpen])

  return (
    <>
      <header className="glass-nav relative z-20 mx-4 mt-4 flex items-center justify-between gap-4 rounded-full py-2 pl-3 pr-2 sm:mx-6 lg:mx-auto lg:max-w-6xl">
        <div className="pl-1">
          <Logo />
        </div>

        <nav className="hidden items-center gap-1 text-sm font-medium md:flex" aria-label="Primary">
          {mainNavLinks.map((link) => {
            const isActive = activePath === link.to
            return (
              <Link
                key={link.label}
                to={link.to}
                aria-current={isActive ? 'page' : undefined}
                className={`nav-link ${isActive ? 'nav-link-active' : 'text-ink'}`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="hidden md:block">
          <a href={contactPhoneHref} className="btn-dark px-5 py-2.5 text-sm">
            <span className="h-2 w-2 rounded-full bg-lime" aria-hidden />
            Let&apos;s talk
          </a>
        </div>

        <button
          type="button"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-night text-paper md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
            {menuOpen ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 8h16M4 16h10" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </header>

      {menuOpen ? (
        <div className="mobile-menu-enter theme-night relative z-20 mx-4 mt-2 rounded-3xl p-3 shadow-2xl sm:mx-6 md:hidden">
          <div className="flex flex-col gap-1">
            {mainNavLinks.map((link) => {
              const isActive = activePath === link.to
              return (
                <Link
                  key={link.label}
                  to={link.to}
                  aria-current={isActive ? 'page' : undefined}
                  className={`rounded-2xl px-4 py-3.5 font-display text-xl font-semibold transition-colors ${
                    isActive ? 'bg-lime text-night' : 'text-ink hover:bg-surface-elevated'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
            <a href={contactPhoneHref} className="btn-primary mt-2 py-3.5 text-sm">
              Call now
            </a>
          </div>
        </div>
      ) : null}
    </>
  )
}
