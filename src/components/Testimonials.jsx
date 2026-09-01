import { testimonials } from '../data/content'

export default function Testimonials() {
  return (
    <section className="bg-lilac py-24">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <div className="max-w-lg">
          <h2 className="font-display text-3xl md:text-4xl text-plum-deep balance">
            Real women. Real transformations.
          </h2>
          <p className="mt-4 text-plum-deep/75 leading-relaxed">
            You don't have to take our word for it. Here's what women who have
            walked this journey have to say.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={t.name + i}
              className="flex flex-col justify-between rounded-3xl bg-cream p-8 shadow-[0_20px_45px_-30px_rgba(42,23,64,0.45)]"
              style={{ transform: i === 1 ? 'translateY(-0.75rem)' : undefined }}
            >
              <span className="font-display text-5xl leading-none text-amethyst-pale">
                &ldquo;
              </span>
              <blockquote className="mt-2 flex-1 text-plum-deep/90 leading-relaxed">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-amethyst-pale/60 pt-4 text-sm">
                <span className="block font-semibold text-plum-deep">{t.name}</span>
                <span className="text-plum-deep/60">{t.detail}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
