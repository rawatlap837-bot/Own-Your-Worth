import { CalendarDays, Clock3, Radio } from 'lucide-react'
import { event } from '../data/content'
import ReserveForm from './ReserveForm'

export default function FinalCTA() {
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

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-cream/80">
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

        <div className="mt-10">
          <ReserveForm />
        </div>
      </div>
    </section>
  )
}
