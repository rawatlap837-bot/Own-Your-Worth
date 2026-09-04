import { useEffect, useRef, useState } from 'react'
import { CheckCircle2, ArrowRight, MessageCircle, Play, Pause, Volume2, VolumeX, RotateCcw, AlertCircle } from 'lucide-react'

const WHATSAPP_GROUP_LINK =
    'https://chat.whatsapp.com/JUMpqQUF19SLpL09hiCLFi?s=cl&p=i&mlu=4&ilr=4'

const VIMEO_VIDEO_ID = '1223689460'

export default function ThankYou({ onBackToHome }) {
    const iframeRef = useRef(null)
    const playerRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [isMuted, setIsMuted] = useState(true)
    const [ready, setReady] = useState(false)
    const [ended, setEnded] = useState(false)
    const [embedError, setEmbedError] = useState(false)

    useEffect(() => {
        let cancelled = false

        function initPlayer() {
            if (cancelled || !iframeRef.current || !window.Vimeo) return
            const player = new window.Vimeo.Player(iframeRef.current)
            playerRef.current = player

            player.ready()
                .then(() => {
                    if (cancelled) return
                    setReady(true)
                })
                .catch((err) => {
                    // This fires when the video's privacy settings don't allow this domain
                    console.warn('Vimeo player failed to connect — check the video\'s embed privacy settings on vimeo.com (Settings → Privacy → Where can this be embedded).', err)
                    setEmbedError(true)
                })

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
                script.addEventListener('error', () => setEmbedError(true))
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
        if (isPlaying) {
            playerRef.current.pause().catch((err) => console.warn('Pause failed:', err))
        } else {
            playerRef.current.play().catch((err) => {
                console.warn('Play failed — likely an embed privacy restriction:', err)
                setEmbedError(true)
            })
        }
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

    const vimeoSrc =
        `https://player.vimeo.com/video/${VIMEO_VIDEO_ID}` +
        `?controls=0&muted=1&autopause=0&title=0&byline=0&portrait=0` +
        `&dnt=1&transparent=0&keyboard=0&pip=0&playsinline=1`

    return (
        <section className="relative min-h-screen overflow-hidden bg-ink pt-32 pb-24 md:pt-40 md:pb-32">

            <div
                aria-hidden="true"
                className="pointer-events-none absolute top-1/4 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amethyst/30 blur-[130px] animate-drift"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-40 -right-16 h-[26rem] w-[26rem] rounded-full bg-gold/20 blur-[120px] animate-drift"
                style={{ animationDelay: '3s' }}
            />

            <div className="relative mx-auto flex max-w-2xl flex-col items-center px-6 text-center md:px-10">

                <div className="animate-rise inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-amethyst-pale">
                    <CheckCircle2 className="h-4 w-4 text-gold" strokeWidth={1.75} />
                    Your seat is reserved
                </div>

                <h1
                    className="animate-rise mt-8 font-display text-4xl font-medium leading-[1.2] text-cream sm:text-5xl"
                    style={{ animationDelay: '0.12s' }}
                >
                    You're in.
                </h1>

                <p
                    className="animate-rise mt-6 max-w-md text-amethyst-pale/90 font-body"
                    style={{ animationDelay: '0.3s' }}
                >
                    Check your email for your confirmation and the Zoom link.
                    Watch this quick video while you're here, then join the
                    WhatsApp community below to connect with the other women
                    joining you, get reminders, and be the first to know if
                    anything changes.
                </p>

                <div className="animate-rise mt-10 w-full" style={{ animationDelay: '0.45s' }}>
                    <div className="relative mx-auto aspect-video w-full max-w-lg overflow-hidden rounded-2xl border border-white/15 bg-black/40 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)]">

                        <iframe
                            ref={iframeRef}
                            src={vimeoSrc}
                            className="absolute left-1/2 top-1/2 h-[108%] w-[108%] -translate-x-1/2 -translate-y-1/2"
                            style={{ border: 0 }}
                            title="Thank you — watch this quick video"
                            allow="autoplay; fullscreen"
                        />

                        {/* Embed-restricted warning — only shows if the player never connected */}
                        {embedError && (
                            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-3 bg-ink px-6 text-center">
                                <AlertCircle className="h-8 w-8 text-gold" strokeWidth={1.75} />
                                <p className="font-body text-sm text-cream/90">
                                    This video can't be controlled from this page yet.
                                </p>
                                <p className="font-body text-xs text-amethyst-pale/70">
                                    On vimeo.com, open this video's Settings → Privacy → "Where can this be embedded" and set it to Anywhere (or add this domain).
                                </p>
                            </div>
                        )}

                        {!embedError && ended && (
                            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 bg-ink">
                                <button
                                    type="button"
                                    onClick={replay}
                                    aria-label="Replay video"
                                    className="flex h-16 w-16 items-center justify-center rounded-full bg-gold text-ink shadow-[0_10px_30px_-8px_rgba(217,164,65,0.6)] transition hover:scale-105 hover:bg-gold-soft"
                                >
                                    <RotateCcw className="h-6 w-6" strokeWidth={2} />
                                </button>
                                <span className="font-body text-sm text-cream/90">Watch again</span>

                                <button
                                    type="button"
                                    onClick={toggleMute}
                                    aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                                    className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-cream backdrop-blur transition hover:bg-black/80"
                                >
                                    {isMuted ? <VolumeX className="h-5 w-5" strokeWidth={2} /> : <Volume2 className="h-5 w-5" strokeWidth={2} />}
                                </button>
                            </div>
                        )}

                        {!embedError && !ended && (
                            <div className="absolute inset-0 z-10 flex items-end justify-between p-4">
                                <button
                                    type="button"
                                    onClick={togglePlay}
                                    disabled={!ready}
                                    aria-label={isPlaying ? 'Pause video' : 'Play video'}
                                    className="flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-cream backdrop-blur transition hover:bg-black/80 disabled:opacity-50"
                                >
                                    {isPlaying ? <Pause className="h-5 w-5" strokeWidth={2} /> : <Play className="h-5 w-5 translate-x-[1px]" strokeWidth={2} />}
                                </button>

                                <button
                                    type="button"
                                    onClick={toggleMute}
                                    disabled={!ready}
                                    aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                                    className="flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-cream backdrop-blur transition hover:bg-black/80 disabled:opacity-50"
                                >
                                    {isMuted ? <VolumeX className="h-5 w-5" strokeWidth={2} /> : <Volume2 className="h-5 w-5" strokeWidth={2} />}
                                </button>
                            </div>
                        )}
                    </div>
                </div>
                <a
                
                    href={WHATSAPP_GROUP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="animate-rise group mt-10 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-8 py-4 font-body text-base font-semibold text-ink shadow-[0_10px_30px_-8px_rgba(37,211,102,0.5)] transition-all hover:scale-[1.02] hover:bg-[#22c15e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream"
                    style={{ animationDelay: '0.6s' }}
                >
                    <MessageCircle className="h-5 w-5" strokeWidth={2} />
                    Join the WhatsApp Group
                </a>

                <button
                    type="button"
                    onClick={onBackToHome}
                    className="animate-rise group mt-6 inline-flex items-center gap-1.5 text-sm text-amethyst-pale/80 underline-offset-4 transition-colors hover:text-cream hover:underline"
                    style={{ animationDelay: '0.72s' }}
                >
                    Back to home
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
                </button>

            </div>
        </section>
    )
}