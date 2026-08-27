import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'
import { observeReveal, unobserveReveal } from '../utils/revealObserver'

export function Reveal({
  children,
  className = '',
  stagger = false,
  style,
}: {
  children: ReactNode
  className?: string
  stagger?: boolean
  style?: CSSProperties
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    observeReveal(el, () => setVisible(true))
    return () => unobserveReveal(el)
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'reveal-visible' : ''} ${stagger ? 'stagger-children' : ''} ${className}`.trim()}
      style={style}
    >
      {children}
    </div>
  )
}
