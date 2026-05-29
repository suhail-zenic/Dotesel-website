import { portfolioCategories } from '../home-data'
import { StorePreview } from './StorePreview'

const metrics = [
  { id: 'conversion', label: 'Conversion', value: '+32%', delay: '0s' },
  { id: 'speed', label: 'Page speed', value: '98', delay: '0.35s' },
  { id: 'stores', label: 'Stores live', value: '7+', delay: '0.7s' },
] as const

export function HeroShowcase() {
  const previewStores = portfolioCategories.flatMap((c) => c.projects).slice(0, 4)

  return (
    <div className="hero-showcase relative mx-auto w-full max-w-lg lg:max-w-none">
      <div className="showcase-ring pointer-events-none absolute inset-3 rounded-[2rem] opacity-50 sm:inset-4" aria-hidden />

      {/* Corner badges — sit in padding, not over the browser */}
      <div
        className="showcase-pill showcase-pill-tl glass-card pointer-events-none absolute left-0 top-0 z-20 rounded-full border border-brand/30 bg-brand-muted px-2.5 py-1 text-[10px] font-semibold text-brand shadow-lg backdrop-blur-md sm:px-3.5 sm:py-1.5 sm:text-xs"
        style={{ animationDelay: '0.2s' }}
      >
        Shopify OS 2.0
      </div>

      <div
        className="showcase-pill showcase-pill-tr glass-card pointer-events-none absolute right-0 top-0 z-20 rounded-xl border border-line/70 px-2.5 py-1.5 shadow-lg backdrop-blur-md sm:px-3 sm:py-2"
        style={{ animationDelay: metrics[0].delay }}
      >
        <p className="text-[9px] font-medium uppercase tracking-wider text-muted sm:text-[10px]">
          {metrics[0].label}
        </p>
        <p className="text-xs font-bold text-brand sm:text-sm">{metrics[0].value}</p>
      </div>

      <div
        className="showcase-pill showcase-pill-bl glass-card pointer-events-none absolute bottom-0 left-0 z-20 rounded-xl border border-line/70 px-2.5 py-1.5 shadow-lg backdrop-blur-md sm:px-3 sm:py-2"
        style={{ animationDelay: metrics[1].delay }}
      >
        <p className="text-[9px] font-medium uppercase tracking-wider text-muted sm:text-[10px]">
          {metrics[1].label}
        </p>
        <p className="text-xs font-bold text-brand sm:text-sm">{metrics[1].value}</p>
      </div>

      <div
        className="showcase-pill showcase-pill-br glass-card pointer-events-none absolute bottom-0 right-0 z-20 rounded-xl border border-line/70 px-2.5 py-1.5 shadow-lg backdrop-blur-md sm:px-3 sm:py-2"
        style={{ animationDelay: metrics[2].delay }}
      >
        <p className="text-[9px] font-medium uppercase tracking-wider text-muted sm:text-[10px]">
          {metrics[2].label}
        </p>
        <p className="text-xs font-bold text-brand sm:text-sm">{metrics[2].value}</p>
      </div>

      {/* Browser mock — inset so corner pills stay clear */}
      <div className="showcase-browser glass-card relative z-10 mx-7 mt-9 mb-9 overflow-hidden rounded-2xl border border-line/80 shadow-2xl sm:mx-9 sm:mt-10 sm:mb-10 lg:mx-10">
        <div className="flex items-center gap-2 border-b border-line/80 bg-canvas/80 px-4 py-3 backdrop-blur-md">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-brand/80" />
          <span className="ml-2 flex-1 truncate rounded-md bg-surface-elevated px-3 py-1 text-[10px] text-muted sm:text-xs">
            yourbrand.myshopify.com
          </span>
        </div>

        <div className="relative bg-gradient-to-b from-surface-elevated to-canvas p-4 sm:p-5">
          <div className="mb-4 flex items-center justify-between gap-2">
            <div className="h-2 w-16 rounded-full bg-line" />
            <div className="flex gap-1.5">
              <div className="h-2 w-8 rounded-full bg-brand/40" />
              <div className="h-2 w-8 rounded-full bg-line" />
              <div className="h-2 w-8 rounded-full bg-line" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            {previewStores.map((store, i) => (
              <a
                key={store.url}
                href={store.url}
                target="_blank"
                rel="noopener noreferrer"
                className="showcase-tile group/tile block overflow-hidden rounded-xl border border-line/60 bg-surface/80 transition-all duration-500 hover:border-brand/40 hover:shadow-lg hover:shadow-brand/10"
                style={{ animationDelay: `${i * 0.12}s` }}
              >
                <StorePreview
                  url={store.url}
                  name={store.name}
                  previewImage={store.previewImage}
                  variant="thumb"
                  className="rounded-none"
                />
                <div className="px-2.5 py-2 sm:px-3 sm:py-2.5">
                  <p className="truncate text-[10px] font-semibold text-ink sm:text-xs">{store.name}</p>
                  <p className="truncate text-[9px] text-muted">{store.displayUrl}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-4 flex gap-2">
            <div className="h-8 flex-1 rounded-lg bg-brand/20" />
            <div className="h-8 w-20 rounded-lg bg-line/80" />
          </div>
        </div>
      </div>
    </div>
  )
}
