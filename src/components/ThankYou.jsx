import { CalendarDays, Clock3, Radio, CheckCircle2, ArrowRight, MessageCircle } from 'lucide-react'
import { event } from '../data/content'

// Replace with your real WhatsApp group invite link
const WHATSAPP_GROUP_LINK = 'https://chat.whatsapp.com/JUMpqQUF19SLpL09hiCLFi?s=cl&p=i&mlu=4&ilr=4'

export default function ThankYou({ onBackToHome }) {
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
                    Check your email for your confirmation and the Zoom link. Watch this
                    quick video while you're here, then join the WhatsApp community
                    below to connect with the other women joining you, get reminders,
                    and be the first to know if anything changes.
                </p>

                <div
                    className="animate-rise mt-10 w-full"
                    style={{ animationDelay: '0.45s' }}
                >
                    <div className="relative aspect-video w-full max-w-lg mx-auto overflow-hidden rounded-2xl border border-white/15 bg-black/40 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)]">
                        <iframe
                            src="https://player.vimeo.com/video/1223689460?title=0&byline=0&portrait=0&dnt=1"
                            className="absolute inset-0 h-full w-full"
                            style={{ border: 0 }}
                            title="Own Your Worth — a message for you"
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                            allowFullScreen
                        />
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