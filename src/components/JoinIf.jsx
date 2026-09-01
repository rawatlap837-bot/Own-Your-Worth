import { Check } from 'lucide-react'
import { joinIfPoints, ctaLabel } from '../data/content'

export default function JoinIf() {
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

        <a
          href="#reserve-form"
          className="mt-14 inline-flex items-center justify-center rounded-full bg-plum px-8 py-4 font-body text-base font-semibold text-cream transition-colors hover:bg-plum-deep"
        >
          {ctaLabel}
        </a>
      </div>
    </section>
  )
}
