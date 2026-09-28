import { useEffect } from 'react'
import { X } from 'lucide-react'

const TAGMANGO_URL = 'https://learn.coachnamitagupta.com/l/2e3363fc9d'

export default function ReservationModal({ isOpen, onClose }) {
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [isOpen])

    useEffect(() => {
        const handleKey = (e) => { if (e.key === 'Escape') onClose() }
        if (isOpen) window.addEventListener('keydown', handleKey)
        return () => window.removeEventListener('keydown', handleKey)
    }, [isOpen, onClose])

    if (!isOpen) return null

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="reservation-modal-title"
        >
            <div className="absolute inset-0 bg-ink/80 backdrop-blur-sm" onClick={onClose} />

            <div className="relative w-full max-w-md rounded-2xl border border-white/15 bg-ink p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)]">
                <button
                    type="button"
                    onClick={onClose}
                    aria-label="Close"
                    className="absolute right-4 top-4 rounded-full p-1.5 text-cream/70 transition-colors hover:bg-white/10 hover:text-cream"
                >
                    <X className="h-5 w-5" />
                </button>

                <h2 id="reservation-modal-title" className="font-display text-2xl text-cream">
                    Reserve your seat
                </h2>
                <p className="mt-2 text-sm text-amethyst-pale/90 font-body">
                    Wednesday, 7th Oct · 11:00 AM · LIVE on Zoom
                </p>
                <p className="mt-4 text-sm text-cream/70 font-body">
                    You'll be taken to our secure registration page to enter your details.
                </p>
                <a
                    href={TAGMANGO_URL}
                    className="mt-6 block w-full rounded-full bg-gold px-8 py-3.5 text-center font-body text-base font-semibold text-ink transition-all hover:scale-[1.01] hover:bg-gold-soft"
                >
                    Continue to Reserve My Seat
                </a>
            </div>
        </div >
    )
}