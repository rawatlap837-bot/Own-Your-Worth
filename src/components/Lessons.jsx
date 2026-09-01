import { iconMap } from './icons'
import { lessons } from '../data/content'

export default function Lessons() {
  return (
    <section className="bg-cream py-24">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <h2 className="font-display text-3xl md:text-4xl text-plum-deep balance">
          What you'll learn in the masterclass
        </h2>

        <div className="relative mt-16">
          <div
            aria-hidden="true"
            className="absolute left-7 top-2 bottom-2 hidden w-px bg-amethyst-pale sm:block"
          />
          <div className="space-y-14">
            {lessons.map((lesson) => {
              const Icon = iconMap[lesson.icon]
              return (
                <div key={lesson.title} className="relative flex gap-6 sm:pl-0">
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
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
