import { useEffect, useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { iconMap } from './icons'
import { lessons, ctaLabel } from '../data/content'

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

export default function Lessons({ onReserve }) {
  return (
    <section className="bg-cream py-24">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <FadeIn>
          <h2 className="font-display text-3xl capitalize md:text-4xl text-plum-deep balance">
            What you'll learn in the masterclass
          </h2>
        </FadeIn>

        <div className="relative mt-16">
          <div className="space-y-14">
            {lessons.map((lesson, i) => {
              const Icon = iconMap[lesson.icon]
              return (
                <FadeIn key={lesson.title} delay={i * 100}>
                  <div className="relative flex gap-6 sm:pl-0">
                    <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-amethyst/10 ring-1 ring-amethyst-pale">
                      <Icon className="h-6 w-6 text-amethyst" strokeWidth={1.6} />
                    </span>
                    <div className="pt-1.5">
                      <h3 className="font-display text-xl text-plum-deep">
                        {lesson.title}
                      </h3>
                      <p className="mt-2 max-w-prose text-plum-deep/80 leading-relaxed">
                        {lesson.body}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </div>

        <FadeIn delay={lessons.length * 100}>
          <button
            type="button"
            onClick={onReserve}
            className="group mt-16 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 font-body text-base font-semibold text-ink shadow-[0_10px_30px_-8px_rgba(217,164,65,0.5)] transition-all hover:scale-[1.02] hover:bg-gold-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream"
          >
            {ctaLabel}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
          </button>
        </FadeIn>
      </div>
    </section>
  )
} 