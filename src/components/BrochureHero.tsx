import { companyName, heroHeadline, siteTagline } from '../home-data'
import { BrochureContours } from './BrochureContours'

export function BrochureHero() {
  return (
    <section className="brochure-hero relative z-20 bg-transparent text-white sm:min-h-[100dvh]">
      <BrochureContours priority />
      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-col px-8 pb-8 pt-10 sm:min-h-[100dvh] sm:px-12 sm:pb-12 sm:pt-12 lg:px-16 lg:pb-14 lg:pt-14">
        <div className="flex items-center gap-4 sm:gap-5">
          <img
            src="/Dotsel.png"
            alt=""
            className="h-20 w-20 shrink-0 object-contain sm:h-20 sm:w-20"
            width={80}
            height={80}
          />
          <p className="min-w-0 shrink text-[clamp(0.6875rem,3.1vw,1.0625rem)] font-bold leading-none text-white whitespace-nowrap sm:max-w-md sm:text-xl sm:leading-snug lg:text-2xl">
            {companyName}
          </p>
        </div>

        <div className="mt-16 max-w-4xl sm:mt-20 lg:mt-24">
          <h1 className="text-[clamp(2.25rem,6.5vw,5rem)] font-extrabold uppercase leading-[1.02] tracking-tight text-white">
            {heroHeadline.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-6 max-w-sm text-xs leading-relaxed text-white sm:mt-8 sm:max-w-md sm:text-sm lg:text-[0.95rem]">
            {siteTagline}
          </p>
        </div>

        <div className="hidden flex-1 sm:block" aria-hidden />
      </div>
    </section>
  )
}
