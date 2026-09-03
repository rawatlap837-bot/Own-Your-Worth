import { ArrowRight } from 'lucide-react'
import { event, ctaLabel } from '../data/content'

export default function FinalCTA({ onReserve }) {
  return (
    <section className="relative overflow-hidden bg-ink py-24 md:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 h-[24rem] w-[24rem] rounded-full bg-amethyst/30 blur-[110px]"
      />

      <div className="relative mx-auto max-w-2xl px-6 text-center md:px-10">
        <h2 className="font-display text-3xl md:text-5xl text-cream balance">
          The life you want isn't selfish.
        </h2>

        <p className="mt-6 text-cream/75 leading-relaxed">
          Your children are watching you become the woman you choose to be.
          They don't need a perfect mother. They need to see a mother who
          believes in herself, follows her dreams, chooses growth, and knows
          her worth.
        </p>

        <p className="mt-6 font-display text-xl text-gold-soft">
          You don't have to choose between being a great mother and becoming
          the woman you want to be. You can have both.
        </p>

        <p className="mt-4 text-cream/60">
          Your journey to Own Your Worth starts here.
        </p>

        <div className="mt-10">
          <button
            type="button"
            onClick={onReserve}
            className="group inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 font-body text-base font-semibold text-ink shadow-[0_10px_30px_-8px_rgba(217,164,65,0.5)] transition-all hover:scale-[1.02] hover:bg-gold-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream"
          >
            {ctaLabel}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
          </button>
        </div>
      </div>
    </section>
  )
}