import { useState, useEffect, useRef } from 'react'
import { ArrowRight, Star } from 'lucide-react'
import NamitaMam from './Assets/NamitaMam.jpeg'

const coach = {
  name: 'Namita Gupta',
  title: 'Life Transformation Coach for Mothers',
  rating: 5,
  badge: '100+ Women Empowered Towards Financial Independence',
  credentialsHeading: 'Why Mothers Trust Namita',
  credentials: [
    'Principal & Educator at India-Bhutan Friendship School',
    'Women Empowerment Programme — College of Defence Management, Osmania University',
    'Certified Life Coach | Parenting Coach | NLP | EFT | Energy Coach',
    'Founder — Energypreneur Hub',
    '4+ Years of Experience in coaching & personal transformation',
    'Women\u2019s Empowerment Speaker & Mentor',
    'Mother of Two Boys',
  ],
  bio: [],
}

const ctaLabel = 'Reserve Your Seat'

function FadeIn({ children, className = '', delay = 0 }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </div>
  )
}

export default function Coach({ onReserve }) {
  const [photoFailed, setPhotoFailed] = useState(false)
  const initials = coach.name
    .split(' ')
    .map((w) => w[0])
    .join('')

  return (
    <section className="bg-plum-deep py-16 sm:py-20 md:py-24">
      <div className="mx-auto grid max-w-5xl gap-8 px-6 sm:gap-10 md:grid-cols-[minmax(0,18rem)_1fr] md:gap-16 md:px-10">
        <FadeIn className="mx-auto md:mx-0">
          {photoFailed ? (
            <div className="flex h-40 w-40 items-center justify-center rounded-full bg-amethyst/25 font-display text-3xl text-cream ring-1 ring-white/15 sm:h-48 sm:w-48 sm:text-4xl md:h-64 md:w-64">
              {initials}
            </div>
          ) : (
            <img
              src={NamitaMam}
              alt={coach.name}
              onError={() => setPhotoFailed(true)}
              className="h-40 w-40 rounded-full object-cover object-top ring-1 ring-white/15 sm:h-48 sm:w-48 md:h-64 md:w-64"
            />
          )}
        </FadeIn>

        <FadeIn delay={100} className="text-center md:text-left">
          <span className="text-xs uppercase tracking-wide text-amethyst-pale/70 sm:text-sm">
            Meet your coach
          </span>
          <h2 className="mt-2 font-display text-2xl text-cream sm:text-3xl md:text-4xl">
            {coach.name}
          </h2>

          {coach.title && (
            <p className="mt-1 text-base text-amethyst-pale/90 font-medium sm:text-lg">
              {coach.title}
            </p>
          )}

          {coach.rating && (
            <div className="mt-3 flex flex-wrap items-center justify-center gap-x-2 gap-y-1.5 md:justify-start">
              <div className="flex items-center gap-1">
                {Array.from({ length: coach.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" strokeWidth={0} />
                ))}
              </div>
              {coach.badge && (
                <span className="text-sm font-semibold text-cream/90">
                  {coach.badge}
                </span>
              )}
            </div>
          )}

          {coach.bio?.length > 0 && (
            <div className="mt-6 space-y-4 mx-auto max-w-2xl md:mx-0">
              {coach.bio.map((para, i) => (
                <p key={i} className="text-cream/80 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          )}

          {coach.credentials?.length > 0 && (
            <div className="mt-6 mx-auto max-w-md text-left md:mx-0 md:max-w-2xl">
              {coach.credentialsHeading && (
                <h3 className="font-display text-lg text-cream mb-3 text-center md:text-left">
                  {coach.credentialsHeading}
                </h3>
              )}
              <ul className="space-y-2">
                {coach.credentials.map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm text-cream/80 leading-relaxed sm:text-base">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {onReserve && (
            <div className="mt-8 flex justify-center md:justify-start">
              <button
                type="button"
                onClick={onReserve}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-8 py-3.5 font-body text-base font-semibold text-ink shadow-[0_10px_30px_-8px_rgba(217,164,65,0.5)] transition-all hover:scale-[1.02] hover:bg-gold-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream sm:w-auto"
              >
                {ctaLabel}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
              </button>
            </div>
          )}
        </FadeIn>
      </div>
    </section>
  )
}