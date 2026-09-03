import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { coach, ctaLabel } from '../data/content'
import NamitaMam from './Assets/NamitaMam.jpeg'

export default function Coach({ onReserve }) {
  const [photoFailed, setPhotoFailed] = useState(false)
  const initials = coach.name
    .split(' ')
    .map((w) => w[0])
    .join('')

  return (
    <section className="bg-plum-deep py-24">
      <div className="mx-auto grid max-w-5xl gap-12 px-6 md:grid-cols-[minmax(0,18rem)_1fr] md:px-10 md:gap-16">
        <div className="mx-auto md:mx-0">
          {photoFailed ? (
            <div className="flex h-64 w-64 items-center justify-center rounded-full bg-amethyst/25 font-display text-4xl text-cream ring-1 ring-white/15">
              {initials}
            </div>
          ) : (
            <img
              src={NamitaMam}
              alt={coach.name}
              onError={() => setPhotoFailed(true)}
              className="h-64 w-64 rounded-full object-cover object-top ring-1 ring-white/15"
            />
          )}
        </div>

        <div>
          <span className="text-sm uppercase tracking-wide text-amethyst-pale/70">
            Meet your coach
          </span>
          <h2 className="mt-2 font-display text-3xl md:text-4xl text-cream">
            {coach.name}
          </h2>
          <div className="mt-6 space-y-4 max-w-2xl">
            {coach.bio.map((para, i) => (
              <p key={i} className="text-cream/80 leading-relaxed">
                {para}
              </p>
            ))}
          </div>

          {onReserve && (
            <button
              type="button"
              onClick={onReserve}
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 font-body text-base font-semibold text-ink shadow-[0_10px_30px_-8px_rgba(217,164,65,0.5)] transition-all hover:scale-[1.02] hover:bg-gold-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream"
            >
              {ctaLabel}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
            </button>
          )}
        </div>
      </div>
    </section>
  )
}