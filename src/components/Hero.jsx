import { CalendarDays, Clock3, Radio, ArrowRight } from 'lucide-react'
import { event, ctaLabel } from '../data/content'

const headline = [
  { text: 'Feel Visible.', size: 'text-3xl sm:text-4xl md:text-5xl', weight: 'font-medium' },
  { text: 'Feel Valued.', size: 'text-3xl sm:text-4xl md:text-5xl', weight: 'font-medium' },
  { text: 'Rebuild Your Confidence.', size: 'text-3xl sm:text-4xl md:text-5xl', weight: 'font-medium' },
  { text: 'Reclaim Your Purpose.', size: 'text-3xl sm:text-4xl md:text-5xl', weight: 'font-medium' },
  { text: 'Create Your Financial Independence.', size: 'text-4xl sm:text-5xl md:text-6xl', weight: 'font-semibold' },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink pt-32 pb-24 md:pt-40 md:pb-32">
      {/* signature moment: two soft drifting fields of colour behind the type */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amethyst/30 blur-[130px] animate-drift"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -right-16 h-[26rem] w-[26rem] rounded-full bg-gold/20 blur-[120px] animate-drift"
        style={{ animationDelay: '3s' }}
      />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 text-center md:px-10">
        <div className="animate-rise inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-amethyst-pale">
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          Masterclass for Mothers
        </div>

        <h1 className="mt-8 font-display text-cream">
          {headline.map((line, i) => (
            <span
              key={line.text}
              className={`animate-rise block ${line.size} ${line.weight} leading-[1.2] balance`}
              style={{
                animationDelay: `${0.12 * (i + 1)}s`,
                marginTop: i === 0 ? 0 : '0.15em',
              }}
            >
              {line.text}
            </span>
          ))}
        </h1>

        <p
          className="animate-rise mt-10 max-w-lg text-amethyst-pale/90 font-body"
          style={{ animationDelay: '0.8s' }}
        >
          {event.seatsNote}
        </p>

        <div className="animate-rise mt-8" style={{ animationDelay: '0.95s' }}>
          <div className="inline-flex flex-wrap items-center justify-center gap-x-6 gap-y-3 rounded-2xl border border-dashed border-white/20 px-5 py-4 text-sm text-cream/90">
            <span className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4 text-gold" strokeWidth={1.75} />
              {event.day}, {event.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock3 className="h-4 w-4 text-gold" strokeWidth={1.75} />
              {event.time}
            </span>
            <span className="flex items-center gap-2">
              <Radio className="h-4 w-4 text-gold" strokeWidth={1.75} />
              {event.format}
            </span>
          </div>
        </div>

        <a
          id="reserve"
          href="#reserve-form"
          className="animate-rise group mt-10 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 font-body text-base font-semibold text-ink shadow-[0_10px_30px_-8px_rgba(217,164,65,0.5)] transition-all hover:scale-[1.02] hover:bg-gold-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream"
          style={{ animationDelay: '1.1s' }}
        >
          {ctaLabel}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
        </a>
      </div>
    </section>
  )
}