import { useState, useEffect, useRef } from 'react'
import { ArrowRight, Star, Sparkles, Check } from 'lucide-react'
import NamitaMam from './Assets/NamitaMam.jpeg'

const highlight = 'font-semibold text-cream underline decoration-gold/60 underline-offset-2'

const coach = {
  name: 'Namita Gupta',
  title: 'Life Transformation Coach for Mothers',
  rating: 5,
  badge: '100+ Women Empowered Towards Financial Independence',
  quote: '“Every mother deserves the tools to rebuild her own identity — not just care for everyone else’s.”',
  credentialsHeading: 'Why Mothers Trust Namita',
  credentials: [
    <>
      <span className={highlight}>Principal & Educator</span> at India-Bhutan Friendship School
    </>,
    <>
      <span className={highlight}>Women Empowerment Programme</span> — College of Defence Management,
      Osmania University
    </>,
    <>
      <span className={highlight}>Certified Life Coach</span> | Parenting Coach | NLP | EFT | Energy Coach
    </>,
    <>
      <span className={highlight}>Founder</span> — Energypreneur Hub
    </>,
    <>
      <span className={highlight}>5+ Years of Experience</span> in coaching & personal transformation
    </>,
    <>
      Women's <span className={highlight}>Empowerment Speaker & Mentor</span>
    </>,
    <>
      <span className={highlight}>Mother of Two Boys</span>
    </>,
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
    <section className="relative overflow-hidden bg-plum-deep pb-20 pt-16 sm:pb-16 sm:pt-20 md:pb-16 md:pt-24">
      {/* Ambient background accents */}
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-amethyst/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-5xl gap-10 px-6 sm:gap-12 md:grid-cols-[minmax(0,19rem)_1fr] md:gap-16 md:px-10">
        <FadeIn className="mx-auto md:mx-0 md:sticky md:top-24 md:self-start">
          <div className="relative mx-auto w-fit">
            {/* Decorative ring glow */}
            <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-gold/30 via-amethyst/20 to-transparent blur-md" />

            {photoFailed ? (
              <div className="relative flex h-48 w-48 items-center justify-center rounded-full bg-amethyst/25 font-display text-4xl text-cream ring-2 ring-gold/40 sm:h-60 sm:w-60 sm:text-5xl md:h-80 md:w-80">
                {initials}
              </div>
            ) : (
              <img
                src={NamitaMam}
                alt={coach.name}
                onError={() => setPhotoFailed(true)}
                className="relative h-48 w-48 rounded-full object-cover object-top ring-2 ring-gold/40 sm:h-60 sm:w-60 md:h-80 md:w-80"
              />
            )}

            {/* Floating rating badge on the photo */}
            {coach.rating && (
              <div className="absolute -bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full bg-cream px-3 py-1.5 shadow-lg ring-1 ring-black/5">
                {Array.from({ length: coach.rating }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" strokeWidth={0} />
                ))}
              </div>
            )}
          </div>
        </FadeIn>

        <FadeIn delay={100} className="text-center md:text-left">
          <span className="text-xs uppercase tracking-widest text-amethyst-pale/70 sm:text-sm">
            Meet your coach
          </span>
          <h2 className="mt-2 font-display capitalize text-2xl text-cream sm:text-3xl md:text-4xl">
            {coach.name}
          </h2>

          {coach.title && (
            <p className="mt-1 capitalize text-base font-medium text-amethyst-pale/90 sm:text-lg">
              {coach.title}
            </p>
          )}

          {coach.badge && (
            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-gold/10 px-4 py-1.5 ring-1 ring-gold/30">
              <Sparkles className="h-3.5 w-3.5 text-gold" />
              <span className="text-sm font-semibold text-cream/90">{coach.badge}</span>
            </div>
          )}

          {coach.quote && (
            <p className="mt-6 mx-auto max-w-xl border-l-2 border-gold/50 pl-4 text-left font-display text-lg italic leading-relaxed text-cream/85 md:mx-0">
              {coach.quote}
            </p>
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
            <div className="mt-8 mx-auto max-w-md text-left md:mx-0 md:max-w-2xl">
              {coach.credentialsHeading && (
                <h3 className="mb-4 text-center font-display capitalize text-lg text-cream md:text-left">
                  {coach.credentialsHeading}
                </h3>
              )}
              <ul className="grid items-start gap-3">
                {coach.credentials.map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-2.5 rounded-xl bg-white/5 px-3 py-2.5 text-sm text-cream/80 leading-relaxed ring-1 ring-white/10 transition-colors hover:bg-white/[0.07] sm:text-[0.925rem]"
                  >
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" strokeWidth={2.5} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {onReserve && (
            <div className="mt-9 flex justify-center md:justify-start">
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