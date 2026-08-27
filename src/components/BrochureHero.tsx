import { companyName, heroHeadline, siteTagline } from '../home-data'
import { BrochureContours } from './BrochureContours'

export function BrochureHero() {
  return (
    <section className="brochure-hero relative z-20 min-h-[100dvh] bg-transparent text-white">
      <BrochureContours priority />
      <div className="relative z-10 mx-auto flex min-h-[100dvh] w-full max-w-[1400px] flex-col px-8 pb-10 pt-10 sm:px-12 sm:pb-12 sm:pt-12 lg:px-16 lg:pb-14 lg:pt-14">
        <div className="flex items-center gap-4 sm:gap-5">
          <img
            src="/Dotsel.png"
            alt=""
            className="h-16 w-16 shrink-0 object-contain sm:h-20 sm:w-20"
            width={80}
            height={80}
          />
          <p className="max-w-md text-base font-bold leading-snug text-white sm:text-lg lg:text-xl">
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

        <div className="flex-1" aria-hidden />
      </div>
    </section>
  )
}
