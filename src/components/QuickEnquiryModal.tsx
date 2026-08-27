import { useCallback, useEffect, useRef, useState, type FormEvent } from 'react'

const DISMISS_KEY = 'dotsel-quick-enquiry-dismissed'

/** Scroll distance that counts as “started reading” (fraction of page, capped). */
function scrollEngagementThresholdPx(): number {
  const doc = document.documentElement
  const max = Math.max(doc.scrollHeight - doc.clientHeight, 1)
  return Math.min(max, Math.min(420, Math.max(120, Math.floor(max * 0.12))))
}

export function QuickEnquiryModal() {
  const [open, setOpen] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success'>('idle')
  const dialogRef = useRef<HTMLDivElement | null>(null)
  const scrollRafRef = useRef<number | null>(null)
  const hasTriggeredRef = useRef(false)

  const dismiss = useCallback(() => {
    sessionStorage.setItem(DISMISS_KEY, '1')
    setOpen(false)
  }, [])

  useEffect(() => {
    if (sessionStorage.getItem(DISMISS_KEY)) return

    const tryOpen = () => {
      if (hasTriggeredRef.current) return
      const y = window.scrollY
      if (y >= scrollEngagementThresholdPx()) {
        hasTriggeredRef.current = true
        setOpen(true)
      }
    }

    const onScroll = () => {
      if (scrollRafRef.current != null) return
      scrollRafRef.current = window.requestAnimationFrame(() => {
        scrollRafRef.current = null
        tryOpen()
      })
    }

    tryOpen()
    window.addEventListener('scroll', onScroll, { passive: true })

    const onResize = () => {
      onScroll()
    }
    window.addEventListener('resize', onResize, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      if (scrollRafRef.current != null) {
        window.cancelAnimationFrame(scrollRafRef.current)
        scrollRafRef.current = null
      }
    }
  }, [])

  useEffect(() => {
    if (!open) return

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = prevOverflow
    }
  }, [open])

  useEffect(() => {
    if (!open) return

    const root = dialogRef.current
    if (!root) return

    const focusable = root.querySelectorAll<HTMLElement>(
      'button:not([disabled]), [href], input:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
    )
    const list = Array.from(focusable)
    const first = list[0]
    const last = list[list.length - 1]

    const t = window.setTimeout(() => first?.focus(), 0)

    const onKeyDown = (e: Event) => {
      if (!(e instanceof KeyboardEvent)) return
      if (e.key === 'Escape') {
        e.preventDefault()
        dismiss()
        return
      }
      if (e.key !== 'Tab' || list.length === 0) return

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault()
          last?.focus()
        }
      } else if (document.activeElement === last) {
        e.preventDefault()
        first?.focus()
      }
    }

    root.addEventListener('keydown', onKeyDown)
    return () => {
      window.clearTimeout(t)
      root.removeEventListener('keydown', onKeyDown)
    }
  }, [open, dismiss])

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('success')
    sessionStorage.setItem(DISMISS_KEY, '1')
    window.setTimeout(() => {
      setOpen(false)
      setStatus('idle')
    }, 2200)
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center p-4 sm:items-center sm:p-6" role="presentation">
      <button
        type="button"
        className="absolute inset-0 bg-ink/50 backdrop-blur-sm transition-opacity"
        aria-label="Close enquiry form"
        onClick={dismiss}
      />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="quick-enquiry-title"
        className="quick-enquiry-panel relative z-10 w-full max-w-md rounded-2xl border border-line bg-surface shadow-2xl sm:max-w-lg"
      >
        <button
          type="button"
          className="absolute right-3 top-3 z-10 rounded-lg border border-line bg-canvas px-2.5 py-1 text-xs font-medium text-muted transition hover:border-brand hover:text-brand"
          onClick={dismiss}
        >
          Close
        </button>

        <div className="border-b border-line px-5 pb-4 pt-5 sm:px-6 sm:pt-6">
          <p className="section-label">Quick enquiry</p>
          <h2 id="quick-enquiry-title" className="mt-2 text-xl font-bold text-ink sm:text-2xl">
            Start Your Project With Dotsel
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Leave your details—we will follow up about your project.
          </p>
        </div>

        {status === 'success' ? (
          <div className="px-5 py-10 text-center sm:px-6">
            <p className="text-sm font-medium text-brand" role="status">
              Thanks — we have your details. We will be in touch shortly.
            </p>
          </div>
        ) : (
          <form className="space-y-4 px-5 py-5 sm:px-6 sm:pb-6" onSubmit={onSubmit}>
            <label className="block">
              <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-muted">Name</span>
              <input
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder="Your name"
                className="w-full rounded-lg border border-line bg-canvas px-3 py-2.5 text-sm text-ink outline-none ring-brand/30 transition focus:ring-2"
              />
            </label>
            <label className="block">
              <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-muted">Email</span>
              <input
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@brand.com"
                className="w-full rounded-lg border border-line bg-canvas px-3 py-2.5 text-sm text-ink outline-none ring-brand/30 transition focus:ring-2"
              />
            </label>
            <label className="block">
              <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-muted">Phone</span>
              <input
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                inputMode="tel"
                placeholder="+91 …"
                className="w-full rounded-lg border border-line bg-canvas px-3 py-2.5 text-sm text-ink outline-none ring-brand/30 transition focus:ring-2"
              />
            </label>
            <button type="submit" className="btn-primary w-full py-3 text-sm">
              Send enquiry
            </button>
            <p className="text-center text-xs text-muted">Demo form — connect to your backend when ready.</p>
          </form>
        )}
      </div>
    </div>
  )
}
