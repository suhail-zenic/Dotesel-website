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
  const lastProgressRef = useRef<number>(-1)
  const lastProgressPctRef = useRef<number>(-1)
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
        const progressRounded = Math.round(progress * 1000) / 1000
        const progressPct = Math.round(progress * 100)

        // Avoid forcing style recalculation on every frame.
        if (lastProgressRef.current !== progressRounded) {
          lastProgressRef.current = progressRounded
          doc.style.setProperty('--scroll-progress', progressRounded.toString())
        }
        if (lastProgressPctRef.current !== progressPct) {
          lastProgressPctRef.current = progressPct
          doc.style.setProperty('--scroll-progress-pct', `${progressPct}`)
        }
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
    let mouseRaf: number | null = null
    let pending: { x: number; y: number } | null = null
    let lastX = -1
    let lastY = -1
    let lastWriteAt = 0
    const canTrackPointer = window.matchMedia('(pointer: fine)').matches
    const onMove = (event: MouseEvent) => {
      if (!canTrackPointer) return
      pending = { x: event.clientX, y: event.clientY }
      if (mouseRaf != null) return
      mouseRaf = window.requestAnimationFrame(() => {
        mouseRaf = null
        const p = pending
        if (!p) return
        // Spotlight vars are only used in/around hero visuals.
        if (window.scrollY > window.innerHeight * 1.5) return
        const now = performance.now()
        if (now - lastWriteAt < 80) return
        lastWriteAt = now
        const x = (p.x / window.innerWidth) * 100
        const y = (p.y / window.innerHeight) * 100
        const xRounded = Math.round(x)
        const yRounded = Math.round(y)
        if (xRounded === lastX && yRounded === lastY) return
        lastX = xRounded
        lastY = yRounded
        document.documentElement.style.setProperty('--cx', `${xRounded}%`)
        document.documentElement.style.setProperty('--cy', `${yRounded}%`)
      })
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', onMove)
      if (mouseRaf != null) window.cancelAnimationFrame(mouseRaf)
    }
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
