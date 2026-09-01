import { ctaLabel } from '../data/content'

export default function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-ink/70 border-b border-white/10">
      <div className="mx-auto max-w-6xl px-6 md:px-10 h-16 flex items-center justify-between">
        <span className="font-display text-lg text-cream tracking-tight">
          Own Your Worth
        </span>
        <a
          href="#reserve"
          className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2 text-sm font-semibold text-ink hover:bg-gold-soft transition-colors"
        >
          {ctaLabel}
        </a>
      </div>
    </header>
  )
}
