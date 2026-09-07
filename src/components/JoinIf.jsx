import { HeartHandshake, ShieldCheck, Sparkles, Wallet, Heart, Sprout, ArrowRight } from 'lucide-react'
import { ctaLabel } from '../data/content'
import img1 from './Assets/img1.png'
import img2 from './Assets/img2.png'
import img3 from './Assets/img3.png'
import img4 from './Assets/img4.png'
import img5 from './Assets/img5.png'
import img6 from './Assets/img6.jpeg'

const benefits = [
  {
    icon: HeartHandshake,
    title: 'Inner Peace',
    description: 'Feel more peaceful, fulfilled & connected with yourself.',
    image: img1,
  },
  {
    icon: ShieldCheck,
    title: 'Self-Trust',
    description: 'Trust your abilities, choices & decisions again.',
    image: img2,
  },
  {
    icon: Sparkles,
    title: 'Purpose',
    description: 'Rediscover what excites you and create something meaningful of your own.',
    image: img3,
  },
  {
    icon: Wallet,
    title: 'Financial Independence',
    description: 'Use your strengths & skills to create your own income and greater freedom.',
    image: img4,
  },
  {
    icon: Heart,
    title: 'Role Model',
    description: 'Show your children what it means to believe in yourself and follow your dreams.',
    image: img5,
  },
  {
    icon: Sprout,
    title: 'Personal Growth',
    description: 'Grow beyond your roles and become the woman you\u2019re capable of becoming.',
    image: img6,
  },
]

export default function JoinIf({ onReserve }) {
  return (
    <section className="bg-lilac py-24">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <h2 className="animate-rise max-w-xl font-display text-3xl md:text-4xl text-plum-deep balance">
          Why owning your worth can change everything for a mother
        </h2>

        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map(({ icon: Icon, title, description, image }, i) => (
            <li
              key={title}
              className="animate-rise overflow-hidden rounded-3xl bg-cream/60 shadow-[0_16px_40px_-20px_rgba(76,29,89,0.35)]"
              style={{ animationDelay: `${0.12 + i * 0.1}s` }}
            >
              <div className="relative h-64 w-full overflow-hidden md:h-72">
                <img
                  src={image}
                  alt={title}
                  className="h-full w-full object-cover"
                />
                <span className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-full bg-cream shadow-md">
                  <Icon className="h-5 w-5 text-amethyst" strokeWidth={2} />
                </span>
              </div>

              <div className="p-6">
                <p className="font-body font-semibold text-plum-deep">{title}</p>
                <p className="mt-1.5 text-plum-deep/80 leading-relaxed">{description}</p>
              </div>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={onReserve}
          className="animate-rise group mt-14 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 font-body text-base font-semibold text-ink shadow-[0_10px_30px_-8px_rgba(217,164,65,0.5)] transition-all hover:scale-[1.02] hover:bg-gold-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream"
          style={{ animationDelay: `${0.12 + benefits.length * 0.1 + 0.1}s` }}
        >
          {ctaLabel}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
        </button>
      </div>
    </section>
  )
}