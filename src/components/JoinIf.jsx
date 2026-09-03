import { useState } from 'react'
import { Check, ArrowRight } from 'lucide-react'
import { joinIfPoints, ctaLabel } from '../data/content'
import ReservationModal from './ReservationModal'

export default function JoinIf() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="bg-lilac py-24">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <h2 className="max-w-xl font-display text-3xl md:text-4xl text-plum-deep balance">
          Join the masterclass if you're ready to&hellip;
        </h2>

        <ul className="mt-12 grid gap-x-10 gap-y-7 sm:grid-cols-2">
          {joinIfPoints.map((point) => (
            <li key={point} className="flex items-start gap-3.5">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amethyst/15">
                <Check className="h-3.5 w-3.5 text-amethyst" strokeWidth={2.5} />
              </span>
              <span className="text-plum-deep/90 leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="group mt-14 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 font-body text-base font-semibold text-ink shadow-[0_10px_30px_-8px_rgba(217,164,65,0.5)] transition-all hover:scale-[1.02] hover:bg-gold-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream"
        >
          {ctaLabel}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
        </button>
      </div>

      <ReservationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={() => setIsModalOpen(false)}
      />
    </section>
  )
}