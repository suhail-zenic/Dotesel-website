import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { mainNavLinks } from '../home-data'
import { useSiteScroll } from '../context/SiteScrollContext'

type SiteHeaderProps = {
  variant?: 'hero' | 'minimal'
}

export function SiteHeader({ variant = 'minimal' }: SiteHeaderProps) {
  const { headerElevated, menuOpen, setMenuOpen } = useSiteScroll()
  const location = useLocation()
  const elevated = variant === 'minimal' || headerElevated

  const activePath = location.pathname

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname, location.hash, setMenuOpen])

  return (
    <>
      <header
        className={`relative z-20 mx-auto flex w-full max-w-7xl items-center justify-between px-6 pt-4 pb-2 transition-all duration-300 lg:px-10 ${
          elevated ? 'rounded-b-2xl bg-slate-950/75 shadow-lg shadow-slate-950/40 backdrop-blur-md' : ''
        }`}
      >
        <Link to="/" className="inline-flex items-center">
          <img
            src="/Dotsel.png"
            alt="Dotsel Automation"
            className="h-24 w-auto object-contain sm:h-28 md:h-32 lg:h-36"
            loading="eager"
            decoding="async"
          />
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-slate-200/90 md:flex" aria-label="Primary">
          {mainNavLinks.map((link) => {
            const isActive = activePath === link.to
            return (
              <Link
                key={link.label}
                to={link.to}
                aria-current={isActive ? 'page' : undefined}
                className={`transition hover:text-cyan-200 ${isActive ? 'text-cyan-200' : ''}`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <Link
          to="/contact"
          className="hidden rounded-full bg-cyan-400 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 md:inline-flex"
        >
          Book a Call
        </Link>

        <button
          type="button"
          aria-expanded={menuOpen}
          aria-label="Open navigation menu"
          className="inline-flex rounded-lg border border-slate-700/70 px-3 py-2 text-sm md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          Menu
        </button>
      </header>

      {menuOpen ? (
        <div className="relative mx-6 rounded-xl border border-slate-800/80 bg-slate-900/95 p-4 md:hidden">
          <div className="flex flex-col gap-3">
            {mainNavLinks.map((link) => {
              const isActive = activePath === link.to
              return (
                <Link
                  key={link.label}
                  to={link.to}
                  aria-current={isActive ? 'page' : undefined}
                  className={`rounded-md px-2 py-2 text-sm hover:bg-slate-800 ${isActive ? 'bg-slate-800/70 text-cyan-200' : ''}`}
                >
                  {link.label}
                </Link>
              )
            })}
            <Link
              to="/contact"
              className="mt-2 rounded-full bg-cyan-400 px-4 py-2 text-center text-sm font-semibold text-slate-950"
            >
              Book a Call
            </Link>
          </div>
        </div>
      ) : null}
    </>
  )
}
