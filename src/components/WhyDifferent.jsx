import { ArrowRight } from 'lucide-react'
import { iconMap } from './icons'
import { differentPoints, ctaLabel } from '../data/content'

export default function WhyDifferent({ onReserve }) {
  return (
    <section className="bg-cream py-24">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <h2 className="max-w-lg font-display text-3xl md:text-4xl text-plum-deep balance">
          Why Own Your Worth is different
        </h2>

        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2">
          {differentPoints.map((item) => {
            const Icon = iconMap[item.icon]
            return (
              <div key={item.title} className="border-t border-amethyst-pale pt-6">
                <Icon className="h-6 w-6 text-amethyst" strokeWidth={1.6} />
                <h3 className="mt-4 font-display text-lg text-plum-deep">
                  {item.title}
                </h3>
                <p className="mt-2 text-plum-deep/75 leading-relaxed">{item.body}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-16 flex justify-center sm:mt-20">
          <button
            type="button"
            onClick={onReserve}
            className="group inline-flex items-center gap-2 rounded-full bg-[#c9a15a] px-8 py-4 font-sans text-base font-semibold text-[#1a0f2e] shadow-[0_10px_30px_-8px_rgba(201,161,90,0.5)] transition-all hover:scale-[1.02] hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            {ctaLabel}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
          </button>
        </div>
      </div>
    </section>
  )
}