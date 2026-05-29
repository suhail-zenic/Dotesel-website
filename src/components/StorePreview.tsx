import { useEffect, useMemo, useRef, useState } from 'react'
import { getStorePreviewSources } from '../lib/storePreview'

type StorePreviewProps = {
  url: string
  name: string
  /** Optional local image e.g. /portfolio/taruni.webp */
  previewImage?: string
  variant?: 'card' | 'thumb' | 'hero'
  className?: string
}

const aspectClass = {
  card: 'aspect-[16/10]',
  thumb: 'aspect-[4/3]',
  hero: 'aspect-[4/3]',
} as const

export function StorePreview({
  url,
  name,
  previewImage,
  variant = 'card',
  className = '',
}: StorePreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [shouldLoad, setShouldLoad] = useState(false)
  const [sourceIndex, setSourceIndex] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(false)

  const remoteSources = useMemo(() => getStorePreviewSources(url), [url])
  const sources = useMemo(
    () => (previewImage ? [previewImage, ...remoteSources] : remoteSources),
    [previewImage, remoteSources],
  )

  const activeSrc = sources[sourceIndex] ?? ''

  useEffect(() => {
    setSourceIndex(0)
    setLoaded(false)
    setFailed(false)
  }, [url, previewImage])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShouldLoad(true)
          observer.disconnect()
        }
      },
      { rootMargin: '160px', threshold: 0.01 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const handleError = () => {
    if (sourceIndex < sources.length - 1) {
      setSourceIndex((i) => i + 1)
      setLoaded(false)
    } else {
      setFailed(true)
    }
  }

  const initial = name.charAt(0).toUpperCase()

  return (
    <div
      ref={containerRef}
      className={`store-preview ${aspectClass[variant]} ${className}`.trim()}
    >
      <div className="store-preview-frame">
        {!loaded && !failed ? <div className="store-preview-shimmer" aria-hidden /> : null}

        {failed || sources.length === 0 ? (
          <div className="store-preview-fallback">
            <span className="store-preview-fallback-letter" aria-hidden>
              {initial}
            </span>
            <p className="store-preview-fallback-name">{name}</p>
          </div>
        ) : shouldLoad && activeSrc ? (
          <img
            key={activeSrc}
            src={activeSrc}
            alt={`Screenshot preview of ${name}`}
            className={`store-preview-image ${loaded ? 'store-preview-image--loaded' : ''}`}
            loading="lazy"
            decoding="async"
            onLoad={() => setLoaded(true)}
            onError={handleError}
          />
        ) : null}

        <div className="store-preview-overlay" aria-hidden>
          <span className="store-preview-live">
            <span className="store-preview-live-dot" />
            Live store
          </span>
        </div>
      </div>
    </div>
  )
}
