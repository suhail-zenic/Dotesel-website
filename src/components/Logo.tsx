import { Link } from 'react-router-dom'

/** Cropped logo mark + typeset wordmark. The source PNG has a lot of padding, so the mark is scaled inside a clip box. */
export function Logo({ tone = 'ink' }: { tone?: 'ink' | 'paper' }) {
  return (
    <Link to="/" className="group inline-flex shrink-0 items-center gap-2.5" aria-label="Dotsel Automation & Venture — home">
      <span
        className={`relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl transition-transform duration-500 group-hover:-rotate-6 ${
          tone === 'paper' ? 'bg-paper' : 'bg-white ring-1 ring-line'
        }`}
      >
        <img src="/dotsel-logo.webp" alt="" width={320} height={320} className="h-full w-full scale-[1.85] object-contain" decoding="async" />
      </span>
      <span className="leading-none">
        <span className={`block font-display text-lg font-bold tracking-tight ${tone === 'paper' ? 'text-paper' : 'text-ink'}`}>
          Dotsel
        </span>
        <span
          className={`mt-0.5 block text-[9px] font-semibold uppercase tracking-[0.2em] ${
            tone === 'paper' ? 'text-paper/60' : 'text-muted'
          }`}
        >
          Automation &amp; Venture
        </span>
      </span>
    </Link>
  )
}
