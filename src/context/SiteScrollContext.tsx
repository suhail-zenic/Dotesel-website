import { createContext, useContext, useEffect, useRef, useState, type ReactNode, type SetStateAction } from 'react'

type SiteScrollContextValue = {
  headerElevated: boolean
  menuOpen: boolean
  setMenuOpen: (value: SetStateAction<boolean>) => void
  showBackTop: boolean
  showStickyCta: boolean
}

const SiteScrollContext = createContext<SiteScrollContextValue | null>(null)

export function SiteScrollProvider({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [headerElevated, setHeaderElevated] = useState(false)
  const [showBackTop, setShowBackTop] = useState(false)
  const [showStickyCta, setShowStickyCta] = useState(false)
  const scrollRafRef = useRef<number | null>(null)
  const lastHeaderElevatedRef = useRef(false)
  const lastShowBackTopRef = useRef(false)
  const lastShowStickyCtaRef = useRef(false)

  useEffect(() => {
    const onScroll = () => {
      if (scrollRafRef.current != null) return
      scrollRafRef.current = window.requestAnimationFrame(() => {
        scrollRafRef.current = null

        const y = window.scrollY
        const nextHeaderElevated = y > 20
        const nextShowBackTop = y > 420
        const nextShowStickyCta = y > 280

        if (lastHeaderElevatedRef.current !== nextHeaderElevated) {
          lastHeaderElevatedRef.current = nextHeaderElevated
          setHeaderElevated(nextHeaderElevated)
        }

        if (lastShowBackTopRef.current !== nextShowBackTop) {
          lastShowBackTopRef.current = nextShowBackTop
          setShowBackTop(nextShowBackTop)
        }

        if (lastShowStickyCtaRef.current !== nextShowStickyCta) {
          lastShowStickyCtaRef.current = nextShowStickyCta
          setShowStickyCta(nextShowStickyCta)
        }

        const doc = document.documentElement
        const max = Math.max(doc.scrollHeight - doc.clientHeight, 1)
        const progress = Math.min(y / max, 1)
        doc.style.setProperty('--scroll-progress', progress.toString())
        doc.style.setProperty('--scroll-progress-pct', `${Math.round(progress * 100)}`)
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (scrollRafRef.current != null) window.cancelAnimationFrame(scrollRafRef.current)
    }
  }, [])

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 100
      const y = (event.clientY / window.innerHeight) * 100
      document.documentElement.style.setProperty('--cx', `${x}%`)
      document.documentElement.style.setProperty('--cy', `${y}%`)
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <SiteScrollContext.Provider value={{ headerElevated, menuOpen, setMenuOpen, showBackTop, showStickyCta }}>
      {children}
    </SiteScrollContext.Provider>
  )
}

export function useSiteScroll() {
  const ctx = useContext(SiteScrollContext)
  if (!ctx) throw new Error('useSiteScroll must be used within SiteScrollProvider')
  return ctx
}
