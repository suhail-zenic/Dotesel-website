/** Decorative “live systems” visuals for the third hero slide (no photo). */
export function HeroTechSlideBackdrop({ className = '' }: { className?: string }) {
  return (
    <div
      className={`hero-tech-backdrop absolute inset-0 overflow-hidden bg-[#050b14] ${className}`}
      aria-hidden
    >
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34, 211, 238, 0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 211, 238, 0.07) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_30%_20%,rgba(34,211,238,0.2),transparent),radial-gradient(ellipse_70%_50%_at_85%_75%,rgba(139,92,246,0.18),transparent)]" />

      <svg
        className="hero-tech-nodes pointer-events-none absolute -right-[8%] top-[6%] h-[78%] w-[70%] text-cyan-400/35 sm:right-0"
        viewBox="0 0 520 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path
          d="M40 200 Q120 80 220 140 T400 100 L480 60"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeDasharray="6 10"
          className="hero-tech-line"
        />
        <path
          d="M60 280 Q180 220 260 260 T420 240 L500 280"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.65"
          strokeDasharray="4 8"
          className="hero-tech-line-delayed"
        />
        <circle cx="220" cy="140" r="5" fill="rgba(34,211,238,0.9)" className="hero-tech-pulse-dot" />
        <circle cx="400" cy="100" r="4" fill="rgba(167,139,250,0.85)" className="hero-tech-pulse-dot" />
        <circle cx="260" cy="260" r="4" fill="rgba(34,211,238,0.75)" className="hero-tech-pulse-dot-delayed" />
        <rect
          x="320"
          y="40"
          width="120"
          height="56"
          rx="10"
          stroke="currentColor"
          strokeWidth="1"
          fill="rgba(15,23,42,0.45)"
          opacity="0.9"
        />
        <path d="M336 72h88M336 56h44" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
      </svg>

      <div className="absolute left-[5%] top-[14%] w-[min(92%,420px)] rounded-2xl border border-cyan-400/25 bg-slate-950/80 shadow-[0_0_40px_rgba(34,211,238,0.12)] ring-1 ring-white/5 backdrop-blur-sm sm:left-[7%] sm:top-[18%]">
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
          <span className="font-mono text-[10px] font-medium uppercase tracking-wider text-slate-400 sm:text-[11px]">
            pipeline · prod-west
          </span>
        </div>
        <pre className="hero-tech-terminal-scroll max-h-[min(28vw,200px)] overflow-hidden px-4 py-3 font-mono text-[9px] leading-relaxed text-cyan-100/90 sm:max-h-[200px] sm:text-[11px] sm:leading-relaxed">
          <span className="text-emerald-400/90">$</span> dotctl sync --watch
          {'\n'}
          <span className="text-slate-500">→</span> webhooks<span className="text-cyan-300">.validated</span> 214ms
          {'\n'}
          <span className="text-slate-500">→</span> etl<span className="text-cyan-300">.batch</span> ok · 12.4k rows
          {'\n'}
          <span className="text-slate-500">→</span> api<span className="text-violet-300">.latency</span> p95 118ms
          {'\n'}
          <span className="text-emerald-400/90">$</span> dotctl metrics --live
          {'\n'}
          <span className="animate-pulse text-cyan-200/80">█</span> streaming…
        </pre>
      </div>

      <div className="absolute bottom-[12%] right-[6%] flex flex-col items-end gap-3 sm:bottom-[16%] sm:right-[8%]">
        <div className="rounded-xl border border-white/10 bg-slate-950/75 px-4 py-3 font-mono shadow-lg ring-1 ring-cyan-400/15 backdrop-blur-sm">
          <p className="text-[9px] uppercase tracking-[0.2em] text-slate-500 sm:text-[10px]">Throughput</p>
          <p className="mt-1 text-lg font-semibold tabular-nums text-cyan-200 sm:text-xl">
            4.2k<span className="text-sm font-medium text-slate-400">/min</span>
          </p>
          <div className="mt-2 flex h-8 w-36 items-end gap-0.5 sm:w-44">
            {[40, 65, 45, 80, 55, 90, 70, 95, 75, 88].map((h, i) => (
              <span
                key={i}
                className="hero-tech-bar flex-1 rounded-t-sm bg-gradient-to-t from-cyan-500/20 to-cyan-300/90"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-wrap justify-end gap-2 font-mono text-[9px] text-slate-300 sm:text-[10px]">
          <span className="rounded-full border border-emerald-500/35 bg-emerald-500/10 px-2.5 py-1 text-emerald-200/90">
            LIVE
          </span>
          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-1 text-cyan-100/90">
            API EDGE
          </span>
          <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-2.5 py-1 text-violet-100/85">
            99.95% SLO
          </span>
        </div>
      </div>
    </div>
  )
}
