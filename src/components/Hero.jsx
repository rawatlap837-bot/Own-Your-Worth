import { useEffect, useRef, useState } from 'react'
import {
  CalendarDays,
  Clock3,
  Radio,
  Languages,
  ArrowRight,
  Play,
  Pause,
  Volume2,
  VolumeX,
  RotateCcw,
  CheckCircle2,
  Sparkles,
  Star,
} from 'lucide-react'
import { event, ctaLabel } from '../data/content'

// Move these into data/content.js once you're happy with the copy —
// kept local for now since they're new to this layout.
const discoverPoints = [
  'After years of putting everyone\u2019s needs first, rediscover the woman behind the roles of mother, wife & caregiver.',
  'Break free from self-doubt, guilt & limiting beliefs that have been keeping you stuck.',
  'Rebuild your self-trust & confidence so you can start believing in yourself and taking action again.',
  'Overcome the fear of restarting after a long career break and gain the confidence to pursue your career, growth or something of your own.',
  'Rediscover your dreams, strengths & purpose and give yourself permission to want more \u2014 without feeling guilty for choosing yourself.',
  'Take your first step towards emotional & financial freedom while being present for your family \u2014 because you don\u2019t have to choose.',
]

const coach = {
  name: 'Namita Gupta',
  title: 'Life Transformation Coach for Mothers',
  rating: 4.9,
  proof: 'Helped 100+ women become financially independent',
}

// Small reusable "live" pulse dot — a ping ring behind a solid core.
function PulseDot({ className = '', size = 'h-2 w-2' }) {
  return (
    <span className={`relative inline-flex ${size} shrink-0 ${className}`}>
      <span className={`absolute inline-flex ${size} animate-ping rounded-full bg-[#B8863A] opacity-75`} />
      <span className={`relative inline-flex ${size} rounded-full bg-[#B8863A]`} />
    </span>
  )
}

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
  return { mins, secs }
}

export default function Hero({ onReserve }) {
  const iframeRef = useRef(null)
  const playerRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [ready, setReady] = useState(false)
  const [ended, setEnded] = useState(false)
  const { mins, secs } = useCountdown(15)

  useEffect(() => {
    let cancelled = false

    function initPlayer() {
      if (cancelled || !iframeRef.current || !window.Vimeo) return
      const player = new window.Vimeo.Player(iframeRef.current)
      playerRef.current = player

      player.setVolume(0).catch(() => {})
      player.on('play', () => {
        setIsPlaying(true)
        setEnded(false)
      })
      player.on('pause', () => setIsPlaying(false))
      player.on('ended', () => {
        setIsPlaying(false)
        setEnded(true)
      })

      setReady(true)
    }

    if (window.Vimeo && window.Vimeo.Player) {
      initPlayer()
    } else {
      const existing = document.querySelector('script[src="https://player.vimeo.com/api/player.js"]')
      if (existing) {
        existing.addEventListener('load', initPlayer)
      } else {
        const script = document.createElement('script')
        script.src = 'https://player.vimeo.com/api/player.js'
        script.async = true
        script.addEventListener('load', initPlayer)
        document.body.appendChild(script)
      }
    }

    return () => {
      cancelled = true
      if (playerRef.current) {
        playerRef.current.unload().catch(() => {})
      }
    }
  }, [])

  const togglePlay = () => {
    if (!playerRef.current) return
    isPlaying ? playerRef.current.pause() : playerRef.current.play()
  }

  const toggleMute = () => {
    if (!playerRef.current) return
    const nextMuted = !isMuted
    playerRef.current.setVolume(nextMuted ? 0 : 1).catch(() => {})
    setIsMuted(nextMuted)
  }

  const replay = async () => {
    if (!playerRef.current) return
    try {
      await playerRef.current.setCurrentTime(0)
      await playerRef.current.setVolume(isMuted ? 0 : 1)
      await playerRef.current.play()
      setEnded(false)
    } catch (e) {
      setEnded(false)
    }
  }

  return (
    <section className="relative overflow-hidden bg-[#F7F5FA] pb-16 pt-5 sm:pb-32 sm:pt-12 md:pb-12 md:pt-12">
      {/* one restrained accent wash, not scattered glow orbs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[36rem] w-[60rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6E4E93]/[0.06] blur-3xl"
      />

      <div className="relative mx-auto max-w-5xl px-6 md:px-10">
        {/* Eyebrow — live pulse dot */}
        <div className="animate-rise flex items-center justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#B8863A]/40 bg-[#B8863A]/[0.08] px-4 py-1.5 font-body text-xs font-medium tracking-wide text-[#8A6A2F] sm:text-sm">
            <PulseDot />
            Free live masterclass "for mothers"
          </span>
        </div>

        {/* Headline + subtext, centered */}
        <div className="mt-7 text-center">
          <h1
            className="animate-rise mx-auto max-w-3xl font-display text-3xl font-bold leading-[1.2] tracking-tight text-[#241B36] sm:text-[50px]"
            style={{ animationDelay: '0.12s' }}
          >
            What if you could <span className="text-[#6E4E93]">find yourself again</span>, without giving up the
            life and family you love?
          </h1>

          <p
            className="animate-rise mx-auto mt-6 max-w-2xl font-body text-[#5B5570] sm:text-lg"
            style={{ animationDelay: '0.24s' }}
          >
            Feel visible. Feel valued. Rebuild your confidence. Reclaim your purpose. Create your financial
            independence.
          </p>

          <button
            type="button"
            onClick={onReserve}
            className="animate-rise group mt-8 inline-flex w-full ring-4 items-center justify-center gap-2 rounded-full bg-[#241B36] px-6 py-3.5 font-body text-base font-semibold text-white shadow-[0_12px_28px_-12px_rgba(36,27,54,0.45)] transition-all hover:bg-[#332A48] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#241B36] sm:w-auto sm:px-8 sm:py-4"
            style={{ animationDelay: '0.36s' }}
          >
            {ctaLabel}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
          </button>
        </div>

        {/* Divider */}
        <div className="animate-rise mx-auto mt-8 h-px w-16 bg-[#E4DEEF] sm:mt-10" style={{ animationDelay: '0.42s' }} />

        {/* Video + discover checklist */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-start md:gap-5">
          <div className="animate-rise min-w-0" style={{ animationDelay: '0.5s' }}>
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl border-2 border-[#B8863A]/25 bg-[#1B1526] shadow-[0_20px_45px_-25px_rgba(36,27,54,0.35)]">
              <iframe
                ref={iframeRef}
                src="https://player.vimeo.com/video/1224533584?controls=0&muted=1&autopause=0"
                className="absolute inset-0 h-full w-full"
                style={{ border: 0 }}
                title="Own Your Worth — watch the message from Namita"
                allow="autoplay; fullscreen"
              />

              {ended && (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 bg-[#1B1526]">
                  <button
                    type="button"
                    onClick={replay}
                    aria-label="Replay video"
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-[#B8863A] text-white shadow-[0_10px_30px_-8px_rgba(184,134,58,0.6)] transition hover:scale-105"
                  >
                    <RotateCcw className="h-6 w-6" strokeWidth={2} />
                  </button>
                  <span className="font-body text-sm text-white/90">Watch again</span>

                  <button
                    type="button"
                    onClick={toggleMute}
                    aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                    className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur transition hover:bg-black/70"
                  >
                    {isMuted ? <VolumeX className="h-5 w-5" strokeWidth={2} /> : <Volume2 className="h-5 w-5" strokeWidth={2} />}
                  </button>
                </div>
              )}

              {!ended && (
                <div className="absolute inset-0 flex items-end justify-between p-4">
                  <button
                    type="button"
                    onClick={togglePlay}
                    disabled={!ready}
                    aria-label={isPlaying ? 'Pause video' : 'Play video'}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur transition hover:bg-black/70 disabled:opacity-50"
                  >
                    {isPlaying ? (
                      <Pause className="h-5 w-5" strokeWidth={2} />
                    ) : (
                      <Play className="h-5 w-5 translate-x-[1px]" strokeWidth={2} />
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={toggleMute}
                    disabled={!ready}
                    aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur transition hover:bg-black/70 disabled:opacity-50"
                  >
                    {isMuted ? <VolumeX className="h-5 w-5" strokeWidth={2} /> : <Volume2 className="h-5 w-5" strokeWidth={2} />}
                  </button>
                </div>
              )}
            </div>

            {/* Coach card */}
            <div className="mt-5 flex min-w-0 flex-wrap items-center gap-4 rounded-2xl border-2 border-[#B8863A]/25 bg-white px-5 py-4 shadow-[0_12px_30px_-20px_rgba(36,27,54,0.3)]">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#6E4E93]/10 font-display text-lg font-medium text-[#6E4E93]">
                {coach.name.split(' ').map((n) => n[0]).join('')}
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-body text-sm font-semibold text-[#241B36]">{coach.name}</p>
                <p className="truncate font-body text-xs text-[#5B5570]">{coach.title}</p>
              </div>
              <div className="ml-auto flex shrink-0 flex-col items-end gap-1">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-3.5 w-3.5 ${i < Math.round(coach.rating) ? 'fill-[#B8863A] text-[#B8863A]' : 'text-[#E4DEEF]'}`}
                      strokeWidth={0}
                    />
                  ))}
                </div>
                <span className="font-body text-xs text-[#5B5570]">{coach.rating}/5</span>
              </div>
            </div>
            <p className="mt-3 text-center font-body text-xs text-[#8A6A2F] md:text-left">{coach.proof}</p>

            {/* Date / time / live / language — sits under the video/coach card */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              {[
                { icon: CalendarDays, label: 'Date', value: 'Wed, 24 Sep', live: false },
                { icon: Clock3, label: 'Time', value: '11:00 AM', live: false },
                { icon: Radio, label: 'Live', value: 'On Zoom', live: true },
                { icon: Languages, label: 'Language', value: 'Hindi + English', live: false },
              ].map(({ icon: Icon, label, value, live }) => (
                <div key={label} className="rounded-xl border-2 border-[#B8863A]/25 bg-white px-4 py-3.5">
                  <div className="flex items-center gap-2 text-[#8A6A2F]">
                    <Icon className="h-4 w-4 shrink-0" strokeWidth={1.75} />
                    <span className="inline-flex items-center gap-1.5 font-body text-xs leading-none">
                      {label}
                    </span>
                  </div>
                  <p className="mt-1 font-body text-sm font-medium text-[#241B36]">{value}</p>
                </div>
              ))}
            </div>

            {/* Bonus formula */}
            <div className="mt-6 rounded-xl border border-dashed border-[#B8863A]/50 bg-[#B8863A]/[0.06] p-5">
              <div className="flex items-center gap-2 text-[#8A6A2F]">
                <Sparkles className="h-4 w-4" strokeWidth={1.75} />
                <span className="font-body text-sm font-semibold">Plus, discover a proven 4-step formula</span>
              </div>
              <p className="mt-2 font-body text-sm text-[#5B5570]">
                A simple, practical framework to get clear on what you truly want, strengthen your belief in
                yourself, take confident action and move towards the life you've always wanted.
              </p>
            </div>

            <p className="mt-6 text-center font-display text-base italic text-[#6E4E93] md:text-left">
              Because you are worthy of having it all.
            </p>
          </div>

          <div
            className="animate-rise min-w-0 rounded-2xl border-2 border-[#B8863A]/25 bg-white p-6 shadow-[0_12px_30px_-20px_rgba(36,27,54,0.3)] sm:p-8"
            style={{ animationDelay: '0.6s' }}
          >
            <h2 className="font-display text-xl font-bold text-[#241B36] sm:text-2xl">
              What you'll discover in this masterclass
            </h2>
            <p className="mt-2 font-body text-sm text-[#5B5570]">
              In this powerful 2-hour masterclass, you will discover how to:
            </p>
            <ul className="mt-5 space-y-4">
              {discoverPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#B8863A]" strokeWidth={1.75} />
                  <span className="font-body text-sm text-[#3F3A52] sm:text-base">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}