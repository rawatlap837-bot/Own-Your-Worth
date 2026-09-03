import { X, ArrowRight } from 'lucide-react'
import { notForYouPoints, ctaLabel } from '../data/content'

export default function NotForYou({ onReserve }) {
  return (
    <section className="bg-ink py-24">
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <h2 className="font-display text-3xl md:text-4xl text-cream balance">
          This masterclass is not for you if&hellip;
        </h2>

        <ul className="mt-12 space-y-6">
          {notForYouPoints.map((point) => (
            <li key={point} className="flex items-start gap-4 border-b border-white/10 pb-6">
              <X className="mt-1 h-4 w-4 shrink-0 text-gold-deep" strokeWidth={2.5} />
              <span className="text-cream/75 leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={onReserve}
            className="group inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 font-body text-base font-semibold text-ink shadow-[0_10px_30px_-8px_rgba(217,164,65,0.5)] transition-all hover:scale-[1.02] hover:bg-gold-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream"
          >
            {ctaLabel}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
          </button>
        </div>
      </div>
    </section>
  )
}