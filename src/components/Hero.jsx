import { CalendarDays, Clock3, Radio, ArrowRight } from 'lucide-react'
import { event, ctaLabel } from '../data/content'

const headline = [
  { text: 'Feel Visible.', size: 'text-3xl sm:text-5xl', weight: 'font-medium' },
  { text: 'Feel Valued.', size: 'text-3xl sm:text-5xl', weight: 'font-medium' },
  { text: 'Rebuild Your Confidence.', size: 'text-2xl sm:text-4xl', weight: 'font-medium' },
  { text: 'Reclaim Your Purpose.', size: 'text-2xl sm:text-4xl', weight: 'font-medium' },
  { text: 'Create Your Financial Independence.', size: 'text-2xl sm:text-4xl', weight: 'font-semibold' },
]

export default function Hero({ onReserve }) {
  return (
    <section className="relative overflow-hidden bg-ink pt-32 pb-24 md:pt-40 md:pb-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 left-1/4 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amethyst/30 blur-[130px] animate-drift"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -right-16 h-[26rem] w-[26rem] rounded-full bg-gold/20 blur-[120px] animate-drift"
        style={{ animationDelay: '3s' }}
      />

      <div className="relative mx-auto grid max-w-6xl items-start gap-14 px-6 md:grid-cols-2 md:px-10 lg:gap-20">
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
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
            className="animate-rise mt-8 max-w-lg text-amethyst-pale/90 font-body"
            style={{ animationDelay: '0.8s' }}
          >
            {event.seatsNote}
          </p>

          <button
            type="button"
            onClick={onReserve}
            className="animate-rise group mt-10 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 font-body text-base font-semibold text-ink shadow-[0_10px_30px_-8px_rgba(217,164,65,0.5)] transition-all hover:scale-[1.02] hover:bg-gold-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream"
            style={{ animationDelay: '1.1s' }}
          >
            {ctaLabel}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
          </button>
        </div>

        <div
          className="animate-rise w-full md:mt-16 md:max-w-md lg:max-w-lg"
          style={{ animationDelay: '0.5s' }}
        >
          <div className="relative aspect-video w-full max-w-md mx-auto overflow-hidden rounded-2xl border border-white/15 bg-black/40 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)] md:max-w-none">
            <iframe
              src="https://player.vimeo.com/video/1223628917?h=85ee6e665e&title=0&byline=0&portrait=0&dnt=1"
              className="absolute inset-0 h-full w-full"
              style={{ border: 0 }}
              title="Own Your Worth — watch the message from Namita"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              allowFullScreen
            />
          </div>

          <div className="animate-rise mt-6 flex justify-center" style={{ animationDelay: '0.7s' }}>
            <div className="inline-flex flex-wrap items-center justify-center gap-x-6 gap-y-3 rounded-2xl border border-dashed border-white/20 px-5 py-4 text-sm text-cream/90">
              <span className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-gold" strokeWidth={1.75} />
                Wednesday, 24th Sep
              </span>
              <span className="flex items-center gap-2">
                <Clock3 className="h-4 w-4 text-gold" strokeWidth={1.75} />
                11:00 AM
              </span>
              <span className="flex items-center gap-2">
                <Radio className="h-4 w-4 text-gold" strokeWidth={1.75} />
                LIVE on Zoom
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}