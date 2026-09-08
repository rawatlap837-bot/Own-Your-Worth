import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { ArrowRight, Clock3 } from 'lucide-react'
import { event, ctaLabel } from '../data/content'

const highlight = 'font-semibold text-cream underline decoration-gold/60 underline-offset-2'

function useCountdown(minutes = 15) {
  const [secondsLeft, setSecondsLeft] = useState(minutes * 60)
  useEffect(() => {
    const id = setInterval(() => {
      setSecondsLeft((s) => (s > 0 ? s - 1 : 0))
    }, 1000)
    return () => clearInterval(id)
  }, [])
  const mins = String(Math.floor(secondsLeft / 60)).padStart(2, '0')
  const secs = String(secondsLeft % 60).padStart(2, '0')
  return { mins, secs, secondsLeft }
}

// Small reusable "live" pulse dot — a ping ring behind a solid core.
function PulseDot({ className = '', size = 'h-1.5 w-1.5' }) {
  return (
    <span className={`relative inline-flex ${size} shrink-0 ${className}`}>
      <span className={`absolute inline-flex ${size} animate-ping rounded-full bg-red-400 opacity-75`} />
      <span className={`relative inline-flex ${size} rounded-full bg-red-400`} />
    </span>
  )
}

// Seats remaining — decrements slowly over the session to add urgency without
// being unrealistic. Starts fixed per page load so it doesn't jump on re-renders.
function useSeatsLeft(start = 27, min = 6, intervalMs = 40000) {
  const [seatsLeft, setSeatsLeft] = useState(start)
  useEffect(() => {
    const id = setInterval(() => {
      setSeatsLeft((s) => (s > min ? s - 1 : s))
    }, intervalMs)
    return () => clearInterval(id)
  }, [intervalMs, min])
  return seatsLeft
}

// The sticky bar as its own component so it can be portaled straight to
// document.body — if this render is nested inside any ancestor with a
// transform/filter/will-change (page-transition wrappers, motion.div, etc.),
// `position: fixed` stops anchoring to the real viewport and anchors to that
// ancestor instead. Portaling sidesteps that entirely.
//
// It also reports its own rendered height via onHeightChange so the page can
// reserve matching space and the bar never overlaps the content behind it.
function StickyCountdownBar({ mins, secs, seatsLeft, onReserve, onHeightChange }) {
  const barRef = useRef(null)

  useLayoutEffect(() => {
    const el = barRef.current
    if (!el || typeof ResizeObserver === 'undefined') return
    const report = () => onHeightChange(el.offsetHeight)
    report()
    const observer = new ResizeObserver(report)
    observer.observe(el)
    return () => observer.disconnect()
  }, [onHeightChange])

  if (typeof document === 'undefined') return null

  return createPortal(
    <div
      ref={barRef}
      className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-ink/95 px-4 py-3 backdrop-blur sm:px-6"
      style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
    >
      <div className="mx-auto flex max-w-5xl flex-col items-stretch gap-2.5 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
        <div className="flex flex-col items-center gap-1 sm:items-start">
          <div className="flex items-center gap-1.5">
            <PulseDot />
            <p className="font-body text-[11px] font-semibold uppercase tracking-wide text-red-300 sm:text-xs">
              Only {seatsLeft} seats left
            </p>
          </div>
          <div className="flex items-center gap-2 sm:gap-2.5">
            <Clock3 className="h-4 w-4 shrink-0 text-gold-soft" strokeWidth={1.75} />
            <p className="font-body text-xs text-cream/85 sm:text-sm">
              Seats reserved for{' '}
              <span className="font-mono font-semibold tabular-nums text-gold-soft">
                {mins}:{secs}
              </span>
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={onReserve}
          className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-5 py-2.5 font-body text-sm font-semibold text-ink shadow-[0_8px_24px_-10px_rgba(217,164,65,0.6)] transition-all hover:scale-[1.02] hover:bg-gold-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream sm:w-auto"
        >
          {ctaLabel}
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
        </button>
      </div>
    </div>,
    document.body
  )
}

export default function FinalCTA({ onReserve }) {
  const { mins, secs, secondsLeft } = useCountdown(15)
  const seatsLeft = useSeatsLeft(27, 6)
  const [barHeight, setBarHeight] = useState(0)
  const barVisible = secondsLeft > 0

  return (
    <>
      <section className="relative overflow-hidden bg-ink pt-20 pb-8 md:pt-32 md:pb-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 right-0 h-[24rem] w-[24rem] rounded-full bg-amethyst/30 blur-[110px]"
        />

        <div className="relative mx-auto max-w-2xl px-6 text-center md:px-10">
          <h2 className="animate-rise font-display capitalize text-3xl text-cream balance md:text-5xl">
            The life you want isn't selfish.
          </h2>

          <p className="animate-rise mt-6 text-cream/75 leading-relaxed" style={{ animationDelay: '0.12s' }}>
            Your children are watching you become the woman you choose to be. They don't need a perfect
            mother. They need to see a mother who{' '}
            <span className={highlight}>believes in herself, follows her dreams, chooses growth</span>, and
            knows her worth.
          </p>

          <p className="animate-rise mt-6 font-display text-xl text-gold-soft" style={{ animationDelay: '0.24s' }}>
            You don't have to choose between being a great mother and becoming the woman you want to be.{' '}
            <span className="font-semibold text-cream underline decoration-cream/50 underline-offset-2">
              You can have both.
            </span>
          </p>

          <p className="animate-rise mt-4 text-cream/60" style={{ animationDelay: '0.34s' }}>
            Your journey to <span className="font-semibold text-cream">Own Your Worth</span> starts here.
          </p>

          <div className="animate-rise mt-10" style={{ animationDelay: '0.44s' }}>
            <button
              type="button"
              onClick={onReserve}
              className="group inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 font-body text-base font-semibold text-ink shadow-[0_10px_30px_-8px_rgba(217,164,65,0.5)] transition-all hover:scale-[1.02] hover:bg-gold-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream"
            >
              {ctaLabel}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
            </button>
          </div>
        </div>
      </section>

      {/* Reserves real space equal to the bar's height so it never covers the
          button above — collapses to 0 the moment the bar hides. */}
      <div
        aria-hidden="true"
        style={{ height: barVisible ? barHeight : 0 }}
        className="transition-[height] duration-200"
      />

      {/* Sticky countdown bar — portaled to <body>, hides once time runs out */}
      {barVisible && (
        <StickyCountdownBar
          mins={mins}
          secs={secs}
          seatsLeft={seatsLeft}
          onReserve={onReserve}
          onHeightChange={setBarHeight}
        />
      )}
    </>
  )
}