import { iconMap } from './icons'
import { differentPoints } from '../data/content'

export default function WhyDifferent() {
  return (
    <section className="bg-cream py-24">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <h2 className="max-w-lg font-display text-3xl md:text-4xl text-plum-deep balance">
          Why Own Your Worth is different
        </h2>

        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2">
          {differentPoints.map((item) => {
            const Icon = iconMap[item.icon]
            return (
              <div key={item.title} className="border-t border-amethyst-pale pt-6">
                <Icon className="h-6 w-6 text-amethyst" strokeWidth={1.6} />
                <h3 className="mt-4 font-display text-lg text-plum-deep">
                  {item.title}
                </h3>
                <p className="mt-2 text-plum-deep/75 leading-relaxed">{item.body}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
