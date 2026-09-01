import { X } from 'lucide-react'
import { notForYouPoints } from '../data/content'

export default function NotForYou() {
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
      </div>
    </section>
  )
}
