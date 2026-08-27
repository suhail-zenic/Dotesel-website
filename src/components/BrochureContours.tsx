import { useEffect, useRef, useState } from 'react'
import { ContourWave } from './ContourWave'

type BrochureContoursProps = {
  priority?: boolean
}

export function BrochureContours({ priority = false }: BrochureContoursProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(priority)
  const [active, setActive] = useState(priority)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (priority) {
      setMounted(true)
      setActive(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMounted(true)
          setActive(true)
        } else {
          setActive(false)
        }
      },
      { rootMargin: '160px 0px', threshold: 0 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [priority])

  return (
    <div
      ref={ref}
      className={`brochure-contours pointer-events-none absolute inset-0${active ? ' brochure-contours--active' : ''}`}
      aria-hidden
    >
      {mounted ? (
        <>
          <ContourWave className="brochure-contour brochure-contour--top-right absolute" />
          <ContourWave className="brochure-contour brochure-contour--bottom-left absolute" />
        </>
      ) : null}
    </div>
  )
}
