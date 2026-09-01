import { CalendarDays, Clock3, Radio, ArrowRight } from 'lucide-react'
import { event, ctaLabel } from '../data/content'

// Each entry is what's shown on one visual line. The final promise is
// split into two matched lines on purpose — not left to wrap on its own,
// which is what caused "Independence." to orphan at wide viewports.
const headline = [
  { lines: ['Feel Visible.'], size: 'text-3xl sm:text-4xl md:text-5xl', weight: 'font-medium' },
  { lines: ['Feel Valued.'], size: 'text-3xl sm:text-4xl md:text-5xl', weight: 'font-medium' },
  { lines: ['Rebuild Your Confidence.'], size: 'text-3xl sm:text-4xl md:text-5xl', weight: 'font-medium' },
  { lines: ['Reclaim Your Purpose.'], size: 'text-3xl sm:text-4xl md:text-5xl', weight: 'font-medium' },
  {
    lines: ['Create Your Financial', 'Independence.'],
    size: 'text-4xl sm:text-5xl md:text-6xl',
    weight: 'font-semibold',
  },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink pt-32 pb-24 md:pt-40 md:pb-32">
      {/* signature moment: two soft drifting fields of colour behind the type */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-24 h-[30rem] w-[30rem] rounded-full bg-amethyst/40 blur-[110px] animate-drift"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -right-16 h-[26rem] w-[26rem] rounded-full bg-gold/25 blur-[120px] animate-drift"
        style={{ animationDelay: '3s' }}
      />

      <div className="relative mx-auto max-w-5xl px-6 md:px-10">
        <div className="animate-rise inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-amethyst-pale">
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          Masterclass for Mothers
        </div>

        <h1 className="mt-8 font-display text-cream">
          {headline.map((group, i) => (
            <span
              key={group.lines[0]}
              className="animate-rise block"
              style={{
                animationDelay: `${0.12 * (i + 1)}s`,
                marginLeft: `min(${i * 0.75}rem, 6vw)`,
                marginTop: i === 0 ? 0 : '0.2em',
              }}
            >
              {group.lines.map((text) => (
                <span
                  key={text}
                  className={`block ${group.size} ${group.weight} leading-[1.15] whitespace-nowrap`}
                >
                  {text}
                </span>
              ))}
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
          <div className="inline-flex flex-wrap items-center gap-x-6 gap-y-3 rounded-2xl border border-dashed border-white/20 px-5 py-4 text-sm text-cream/90">
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