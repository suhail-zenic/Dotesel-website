import { useState } from 'react'
import type { ReactNode } from 'react'

type FaqItemProps = {
  question: string
  answer: ReactNode
  defaultOpen?: boolean
}

export function FaqItem({ question, answer, defaultOpen = false }: FaqItemProps) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <article className="faq-item overflow-hidden rounded-xl border border-line bg-canvas/50 transition-colors duration-300 hover:border-brand/30">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="text-sm font-medium text-ink sm:text-base">{question}</span>
        <span
          className={`faq-icon flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line bg-surface-elevated text-brand transition-transform duration-300 ${open ? 'faq-icon-open' : ''}`}
          aria-hidden
        >
          +
        </span>
      </button>
      <div className={`faq-body ${open ? 'faq-body-open' : ''}`}>
        <div className="faq-body-inner border-t border-line/80 px-5 pb-4 pt-0 text-sm leading-relaxed text-muted sm:text-base">
          <div className="pt-4">{answer}</div>
        </div>
      </div>
    </article>
  )
}
