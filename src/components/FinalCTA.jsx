import { useEffect, useState } from 'react'
import { ArrowRight, Clock3 } from 'lucide-react'
import { event, ctaLabel } from '../data/content'

function useCountdown(minutes = 15) {
  const [secondsLeft, setSecondsLeft] = useState(minutes * 60)
  useEffect(() => {
    const id = setInterval(() => {
      setSecondsLeft((s) => (s > 0 ? s - 1 : 0))
    }, 1000)
    return () => clearInterval(id)
  }, [])
  const mins = String(Math.floor(secondsLeft / 60)).padStart(2, '0')
  const secs = String(secondsLeft % 60).padStart(2, '0')
  return { mins, secs, secondsLeft }
}

export default function FinalCTA({ onReserve }) {
  const { mins, secs, secondsLeft } = useCountdown(15)

  return (
    <>
      <section className="relative overflow-hidden bg-ink py-24 md:py-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 right-0 h-[24rem] w-[24rem] rounded-full bg-amethyst/30 blur-[110px]"
        />

        <div className="relative mx-auto max-w-2xl px-6 text-center md:px-10">
          <h2 className="animate-rise font-display text-3xl md:text-5xl text-cream balance">
            The life you want isn't selfish.
          </h2>

          <p className="animate-rise mt-6 text-cream/75 leading-relaxed" style={{ animationDelay: '0.12s' }}>
            Your children are watching you become the woman you choose to be.
            They don't need a perfect mother. They need to see a mother who
            believes in herself, follows her dreams, chooses growth, and knows
            her worth.
          </p>

          <p className="animate-rise mt-6 font-display text-xl text-gold-soft" style={{ animationDelay: '0.24s' }}>
            You don't have to choose between being a great mother and becoming
            the woman you want to be. You can have both.
          </p>

          <p className="animate-rise mt-4 text-cream/60" style={{ animationDelay: '0.34s' }}>
            Your journey to Own Your Worth starts here.
          </p>

          <div className="animate-rise mt-10" style={{ animationDelay: '0.44s' }}>
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

      {/* Sticky countdown bar — pinned to the viewport bottom, hides once time runs out */}
      {secondsLeft > 0 && (
        <div
          className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-ink/95 px-4 py-3 backdrop-blur sm:px-6"
          style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
        >
          <div className="mx-auto flex max-w-5xl flex-col items-stretch gap-2.5 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
            <div className="flex items-center justify-center gap-2 sm:justify-start sm:gap-2.5">
              <Clock3 className="h-4 w-4 shrink-0 text-gold-soft" strokeWidth={1.75} />
              <p className="font-body text-xs text-cream/85 sm:text-sm">
                Seats reserved for{' '}
                <span className="font-mono font-semibold tabular-nums text-gold-soft">
                  {mins}:{secs}
                </span>
              </p>
            </div>

            <button
              type="button"
              onClick={onReserve}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-5 py-2.5 font-body text-sm font-semibold text-ink shadow-[0_8px_24px_-10px_rgba(217,164,65,0.6)] transition-all hover:scale-[1.02] hover:bg-gold-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream sm:w-auto"
            >
              {ctaLabel}
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
            </button>
          </div>
        </div>
      )}
    </>
  )
}