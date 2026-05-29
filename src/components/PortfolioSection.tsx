import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { portfolioCategories, type PortfolioCategory } from '../home-data'
import { StorePreview } from './StorePreview'

type PortfolioSectionProps = {
  showViewAll?: boolean
  compact?: boolean
}

function PortfolioCard({
  name,
  url,
  displayUrl,
  previewImage,
  index,
}: {
  name: string
  url: string
  displayUrl: string
  previewImage?: string
  index: number
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="portfolio-card glow-border group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-surface-elevated/90"
      style={{ animationDelay: `${index * 0.07}s` }}
    >
      <StorePreview
        url={url}
        name={name}
        previewImage={previewImage}
        variant="card"
        className="w-full shrink-0"
      />

      <div className="relative flex items-center justify-between gap-3 border-t border-line/80 bg-surface-elevated/95 p-4 sm:p-5">
        <div className="min-w-0">
          <h3 className="truncate text-base font-semibold text-ink transition-colors group-hover:text-brand sm:text-lg">
            {name}
          </h3>
          <p className="mt-0.5 truncate text-sm text-muted">{displayUrl}</p>
        </div>
        <span
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line bg-canvas text-muted transition-all duration-300 group-hover:border-brand group-hover:bg-brand group-hover:text-canvas group-hover:shadow-[0_0_20px_var(--color-brand-glow)]"
          aria-hidden
        >
          ↗
        </span>
      </div>
    </a>
  )
}

export function PortfolioSection({ showViewAll = true, compact = false }: PortfolioSectionProps) {
  const [activeId, setActiveId] = useState(portfolioCategories[0]?.id ?? 'clothing')
  const [panelKey, setPanelKey] = useState(0)
  const tabsRef = useRef<HTMLDivElement>(null)

  const activeCategory: PortfolioCategory =
    portfolioCategories.find((c) => c.id === activeId) ?? portfolioCategories[0]

  const selectCategory = (id: string) => {
    if (id === activeId) return
    setActiveId(id)
    setPanelKey((k) => k + 1)
  }

  useEffect(() => {
    const el = tabsRef.current?.querySelector<HTMLButtonElement>(`[data-tab="${activeId}"]`)
    el?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
  }, [activeId])

  return (
    <section id="portfolio" className={compact ? '' : 'scroll-mt-24'}>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="section-label">🌐 Portfolio &amp; previous works</p>
          <h2
            className={`mt-2 font-bold tracking-tight text-ink ${compact ? 'text-2xl sm:text-3xl' : 'text-3xl sm:text-4xl'}`}
          >
            Live Shopify stores we&apos;ve built
          </h2>
          {!compact ? (
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
              Real storefront previews—click any card to visit the live site.
            </p>
          ) : null}
        </div>
        {showViewAll ? (
          <Link to="/case-studies" className="btn-secondary shrink-0 px-5 py-2.5 text-sm">
            View full portfolio
          </Link>
        ) : null}
      </div>

      <div
        ref={tabsRef}
        className="mt-8 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        role="tablist"
        aria-label="Portfolio categories"
      >
        {portfolioCategories.map((cat) => {
          const isActive = cat.id === activeId
          return (
            <button
              key={cat.id}
              type="button"
              role="tab"
              data-tab={cat.id}
              aria-selected={isActive}
              onClick={() => selectCategory(cat.id)}
              className={`flex shrink-0 items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${
                isActive
                  ? 'border-brand bg-brand text-canvas shadow-lg shadow-brand/25'
                  : 'border-line bg-surface-elevated text-muted hover:border-brand/40 hover:text-ink'
              }`}
            >
              <span aria-hidden>{cat.emoji}</span>
              {cat.label}
              <span
                className={`rounded-full px-1.5 py-0.5 text-[10px] font-bold ${
                  isActive ? 'bg-canvas/20 text-canvas' : 'bg-line text-muted'
                }`}
              >
                {cat.projects.length}
              </span>
            </button>
          )
        })}
      </div>

      <div
        key={panelKey}
        role="tabpanel"
        className={`portfolio-panel mt-6 grid gap-5 sm:grid-cols-2 ${
          activeCategory.projects.length === 1 ? 'lg:grid-cols-1 lg:max-w-xl' : 'lg:grid-cols-2'
        }`}
        aria-live="polite"
      >
        {activeCategory.projects.map((proj, index) => (
          <PortfolioCard
            key={proj.url}
            name={proj.name}
            url={proj.url}
            displayUrl={proj.displayUrl}
            previewImage={proj.previewImage}
            index={index}
          />
        ))}
      </div>

      <p className="mt-6 text-center text-sm text-muted">
        {portfolioCategories.reduce((n, c) => n + c.projects.length, 0)} live stores · previews load on
        scroll
      </p>
    </section>
  )
}
