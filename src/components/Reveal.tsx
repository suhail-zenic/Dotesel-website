import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'

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

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setVisible(true)
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' },
    )
    obs.observe(el)
    return () => obs.disconnect()
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
