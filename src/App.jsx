import { useState } from 'react'
import Hero from './components/Hero'
import JoinIf from './components/JoinIf'
import Secrets from './components/Secrets'
import Coach from './components/Coach'
import FinalCTA from './components/FinalCTA'
import Faq from './components/Faq'
import Testimonials from './components/TestimonialSection'
import ReservationModal from './components/ReservationModal'
import ThankYou from './components/ThankYou'

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [hasReserved, setHasReserved] = useState(false)

  const openReserveModal = () => setIsModalOpen(true)
  const closeReserveModal = () => setIsModalOpen(false)

  const handleReservationSuccess = () => {
    setIsModalOpen(false)
    setHasReserved(true)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  const backToHome = () => setHasReserved(false)

  if (hasReserved) {
    return <ThankYou onBackToHome={backToHome} />
  }

  return (
    <div className="min-h-screen bg-cream">
      <main>
        <Hero onReserve={openReserveModal} />
        <Secrets onReserve={openReserveModal} />
        <JoinIf onReserve={openReserveModal} />
        <Testimonials onReserve={openReserveModal} />
        <Coach />
        <Faq onReserve={openReserveModal} />
        <FinalCTA onReserve={openReserveModal} />
      </main>
      <ReservationModal
        isOpen={isModalOpen}
        onClose={closeReserveModal}
        onSuccess={handleReservationSuccess}
      />
    </div>
  )
}