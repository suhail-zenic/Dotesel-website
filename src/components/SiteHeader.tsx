import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { contactPhone, contactPhoneTel, mainNavLinks } from '../home-data'
import { useSiteScroll } from '../context/SiteScrollContext'

type SiteHeaderProps = {
  variant?: 'hero' | 'minimal'
}

export function SiteHeader({ variant = 'minimal' }: SiteHeaderProps) {
  const { headerElevated, menuOpen, setMenuOpen } = useSiteScroll()
  const location = useLocation()
  const useGlass = variant === 'minimal' || headerElevated || variant === 'hero'

  const activePath = location.pathname

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname, location.hash, setMenuOpen])

  return (
    <>
      <header
        className={`relative z-20 mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-6 py-3 transition-all duration-300 motion-reduce:transition-none sm:py-4 lg:px-10 ${
          useGlass ? 'glass-nav mt-3 rounded-2xl' : 'mt-3'
        }`}
      >
        <nav className="hidden flex-1 items-center justify-center gap-8 text-sm font-medium md:flex" aria-label="Primary">
          {mainNavLinks.map((link) => {
            const isActive = activePath === link.to
            return (
              <Link
                key={link.label}
                to={link.to}
                aria-current={isActive ? 'page' : undefined}
                className={`nav-link transition-colors duration-200 hover:text-brand ${
                  isActive ? 'nav-link-active text-brand' : 'text-muted'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <a href={`tel:${contactPhoneTel}`} className="btn-primary hidden shrink-0 px-5 py-2 text-sm md:inline-flex">
          {contactPhone}
        </a>

        <button
          type="button"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          className="inline-flex rounded-xl border border-line bg-surface-elevated/80 px-3 py-2 text-sm text-ink backdrop-blur md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>
      </header>

      {menuOpen ? (
        <div className="mobile-menu-enter relative z-20 mx-6 mt-2 rounded-2xl border border-line glass-card p-4 shadow-2xl md:hidden">
          <div className="flex flex-col gap-1">
            {mainNavLinks.map((link) => {
              const isActive = activePath === link.to
              return (
                <Link
                  key={link.label}
                  to={link.to}
                  aria-current={isActive ? 'page' : undefined}
                  className={`rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                    isActive ? 'bg-brand-muted text-brand' : 'text-ink hover:bg-surface-elevated'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
            <a href={`tel:${contactPhoneTel}`} className="btn-primary mt-2 py-3 text-center text-sm">
              {contactPhone}
            </a>
          </div>
        </div>
      ) : null}
    </>
  )
}
