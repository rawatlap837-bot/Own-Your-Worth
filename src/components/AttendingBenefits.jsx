import { ArrowRight } from 'lucide-react'
import { ctaLabel } from '../data/content'

const benefits = [
  {
    image: '/IMG_7203.webp',
    title: 'Emotional Healing',
    description: 'Release years of emotional baggage, guilt and limiting beliefs.',
  },
  {
    image: '/IMG_7204.webp',
    title: 'Inner Peace',
    description: 'Feel calmer and more grounded and connected to yourself.',
  },
  {
    image: '/IMG_7206.webp',
    title: 'Inner Confidence',
    description: 'Trust yourself, feel secure in your decisions and believe in your ability to create change.',
  },
  {
    image: '/IMG_7208.webp',
    title: 'Mental Clarity',
    description: 'Clear the mental clutter, think more clearly, and feel lighter.',
  },
  {
    image: '/IMG_7209.webp',
    title: 'Balanced Energy',
    description: 'Restore consistent energy, reduce stress and ease overthinking.',
  },
  {
    image: '/IMG_7210.webp',
    title: 'Freedom from Overwhelm',
    description: 'Learn to pause, prioritise your needs and respond to life with greater calm.',
  },
  {
    image: '/IMG_7211.webp',
    title: 'Stronger Relationships',
    description: 'Communicate your needs with confidence and nurture more meaningful connections.',
  },
  {
    image: '/IMG_7212.webp',
    title: 'Renewed Purpose',
    description: 'Reconnect with your dreams and strengths, and take meaningful steps towards a more fulfilling life.',
  },
]

export default function AttendingBenefits({ onReserve }) {
  return (
    <section className="bg-[#fff8f4] px-5 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#a3813f] sm:text-sm">
            Your next chapter starts here
          </p>
          <h2 className="mt-3 font-display text-3xl text-[#6f1238] sm:text-4xl md:text-5xl">
            Benefits of Attending
          </h2>
          <div className="mx-auto mt-5 h-px w-32 bg-gradient-to-r from-transparent via-gold to-transparent" />
        </div>

        <ul className="mt-9 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {benefits.map(({ image, title }) => (
            <li key={title} className="overflow-hidden rounded-2xl shadow-[0_10px_25px_-20px_rgba(111,18,56,0.55)]">
              <img
                src={image}
                alt={title}
                className="block h-auto w-full"
                loading="lazy"
                decoding="async"
              />
            </li>
          ))}
        </ul>

        <div className="mt-9 flex justify-center sm:mt-12">
          <button
            type="button"
            onClick={onReserve}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 font-body text-base font-semibold text-ink shadow-[0_10px_30px_-8px_rgba(217,164,65,0.5)] transition-colors hover:bg-gold-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6f1238] sm:w-auto sm:px-8"
          >
            {ctaLabel}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
          </button>
        </div>
      </div>
    </section>
  )
}
