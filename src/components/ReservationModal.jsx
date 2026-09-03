import { useEffect, useState } from 'react'
import { X } from 'lucide-react'

// Paste your Apps Script Web App deployment URL here
// (Deploy → New deployment → Web app → copy the /exec URL)
const GOOGLE_SHEETS_ENDPOINT = 'https://script.google.com/macros/s/AKfycbwBaYwsp2U2nF_YoZ3dm46-HGcybd9WEpDxvbwp82080Fb_sGdGXmoZndJncVvFk89f/exec'

export default function ReservationModal({ isOpen, onClose, onSuccess }) {
    const [name, setName] = useState('')
    const [emailAddr, setEmailAddr] = useState('')
    const [phone, setPhone] = useState('')
    const [status, setStatus] = useState('idle') // idle | sending | error

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

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus('sending')
        try {
            // Apps Script web apps don't return CORS headers for fetch reads,
            // so we use no-cors and treat the request as fire-and-forget.
            // The data still lands in the sheet; we just can't read the response body.
            await fetch(GOOGLE_SHEETS_ENDPOINT, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'text/plain' },
                body: JSON.stringify({ name, email: emailAddr, phone }),
            })

            setStatus('idle')
            setName('')
            setEmailAddr('')
            setPhone('')
            onSuccess()
        } catch (err) {
            console.error(err)
            setStatus('error')
        }
    }

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
                    Wednesday, 24th Sep · 11:00 AM · LIVE on Zoom
                </p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <div>
                        <label htmlFor="name" className="mb-1 block text-sm text-cream/80">Name</label>
                        <input
                            id="name"
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-cream placeholder:text-cream/40 focus:border-gold focus:outline-none"
                            placeholder="Your name"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="mb-1 block text-sm text-cream/80">Email</label>
                        <input
                            id="email"
                            type="email"
                            required
                            value={emailAddr}
                            onChange={(e) => setEmailAddr(e.target.value)}
                            className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-cream placeholder:text-cream/40 focus:border-gold focus:outline-none"
                            placeholder="you@example.com"
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className="mb-1 block text-sm text-cream/80">Mobile number</label>
                        <input
                            id="phone"
                            type="tel"
                            required
                            inputMode="tel"
                            autoComplete="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-cream placeholder:text-cream/40 focus:border-gold focus:outline-none"
                            placeholder="+91 98765 43210"
                        />
                    </div>

                    {status === 'error' && (
                        <p className="text-sm text-red-400">Something went wrong — please try again.</p>
                    )}

                    <button
                        type="submit"
                        disabled={status === 'sending'}
                        className="w-full rounded-full bg-gold px-8 py-3.5 font-body text-base font-semibold text-ink transition-all hover:scale-[1.01] hover:bg-gold-soft disabled:opacity-60"
                    >
                        {status === 'sending' ? 'Reserving…' : 'Reserve My Seat'}
                    </button>
                </form>
            </div>
        </div>
    )
}