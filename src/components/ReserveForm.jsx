import { useState } from 'react'
import { registrationEndpoint, ctaLabel } from '../data/content'

export default function ReserveForm() {
  const [status, setStatus] = useState('idle') // idle | sending | done
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    if (!name.trim() || !email.trim()) return

    if (registrationEndpoint) {
      setStatus('sending')
      try {
        await fetch(registrationEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email }),
        })
      } catch {
        // Swallow network errors here; replace with real error handling
        // once registrationEndpoint is a live URL.
      }
    }
    setStatus('done')
  }

  if (status === 'done') {
    return (
      <div
        id="reserve-form"
        className="rounded-3xl border border-white/15 bg-white/5 p-8 text-center"
      >
        <p className="font-display text-xl text-cream">You're on the list.</p>
        <p className="mt-2 text-cream/70">
          Check your inbox for the Zoom link and calendar invite.
        </p>
      </div>
    )
  }

  return (
    <form
      id="reserve-form"
      onSubmit={handleSubmit}
      className="rounded-3xl border border-white/15 bg-white/5 p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-left">
          <span className="mb-1.5 block text-sm text-cream/70">Your name</span>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl border border-white/20 bg-ink/40 px-4 py-3 text-cream placeholder:text-cream/30 focus:border-gold focus:outline-none"
            placeholder="Jane Doe"
          />
        </label>
        <label className="text-left">
          <span className="mb-1.5 block text-sm text-cream/70">Email address</span>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-white/20 bg-ink/40 px-4 py-3 text-cream placeholder:text-cream/30 focus:border-gold focus:outline-none"
            placeholder="jane@email.com"
          />
        </label>
      </div>
      <button
        type="submit"
        disabled={status === 'sending'}
        className="mt-6 w-full rounded-full bg-gold px-8 py-4 font-body text-base font-semibold text-ink transition-colors hover:bg-gold-soft disabled:opacity-60 sm:w-auto"
      >
        {status === 'sending' ? 'Reserving your seat…' : ctaLabel}
      </button>
    </form>
  )
}
