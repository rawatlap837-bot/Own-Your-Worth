import { useEffect, useRef, useState } from 'react'
import secret1 from './Assets/1st.jpeg'
import secret2 from './Assets/2nd.jpeg'
import secret3 from './Assets/3rd.jpeg'

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

export default function Secrets() {
  return (
    <section className="bg-ink py-24">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <FadeIn>
          <h2 className="max-w-2xl font-display text-3xl md:text-4xl text-cream balance">
            3 secrets you'll discover before you leave
          </h2>
        </FadeIn>

        <div className="mt-16 space-y-20">

          {/* Secret 1 */}
          <div className="grid items-center gap-10 md:grid-cols-2">
            <FadeIn className="order-2 md:order-1" delay={100}>
              <p className="font-body text-sm font-semibold uppercase tracking-wide text-amethyst-pale">
                Secret 1
              </p>
              <h3 className="mt-2 font-display text-2xl text-cream">
                How to find yourself again
              </h3>
              <ul className="mt-5 space-y-3 text-amethyst-pale/90">
                <li>
                  Rediscover <span className="font-semibold text-cream">who you are beyond being a mother, wife & caregiver</span>
                </li>
                <li>
                  Reconnect with your <span className="font-semibold text-cream">strengths, dreams & desires</span>
                </li>
                <li>
                  Give yourself permission to <span className="font-semibold text-cream">want more without guilt</span>
                </li>
              </ul>
            </FadeIn>
            <FadeIn className="order-1 overflow-hidden rounded-3xl md:order-2" delay={0}>
              <img
                src={secret1}
                alt="A woman rediscovering herself beyond her roles"
                className="h-72 w-full object-cover md:h-80"
              />
            </FadeIn>
          </div>

          {/* Secret 2 */}
          <div className="grid items-center gap-10 md:grid-cols-2">
            <FadeIn className="overflow-hidden rounded-3xl">
              <img
                src={secret2}
                alt="A woman rebuilding her self-trust and confidence"
                className="h-72 w-full object-cover md:h-80"
              />
            </FadeIn>
            <FadeIn delay={100}>
              <p className="font-body text-sm font-semibold uppercase tracking-wide text-amethyst-pale">
                Secret 2
              </p>
              <h3 className="mt-2 font-display text-2xl text-cream">
                How to start believing in yourself again
              </h3>
              <ul className="mt-5 space-y-3 text-amethyst-pale/90">
                <li>
                  Identify the <span className="font-semibold text-cream">self-doubt, fear & limiting beliefs</span> holding you back
                </li>
                <li>
                  Rebuild your <span className="font-semibold text-cream">self-trust & confidence</span>
                </li>
                <li>
                  Learn to make decisions <span className="font-semibold text-cream">without constantly seeking approval</span>
                </li>
              </ul>
            </FadeIn>
          </div>

          {/* Secret 3 */}
          <div className="grid items-center gap-10 md:grid-cols-2">
            <FadeIn className="order-2 md:order-1" delay={100}>
              <p className="font-body text-sm font-semibold uppercase tracking-wide text-amethyst-pale">
                Secret 3
              </p>
              <h3 className="mt-2 font-display text-2xl text-cream">
                How to create a life that has both
              </h3>
              <ul className="mt-5 space-y-3 text-amethyst-pale/90">
                <li>
                  Get clear on your <span className="font-semibold text-cream">purpose & what you truly want</span>
                </li>
                <li>
                  Take confident steps towards <span className="font-semibold text-cream">career growth & financial independence</span>
                </li>
                <li>
                  Create a fulfilling life <span className="font-semibold text-cream">without choosing between your family and your dreams</span>
                </li>
              </ul>
            </FadeIn>
            <FadeIn className="order-1 overflow-hidden rounded-3xl md:order-2" delay={0}>
              <img
                src={secret3}
                alt="A woman building a life that holds both family and ambition"
                className="h-72 w-full object-cover md:h-80"
              />
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  )
}