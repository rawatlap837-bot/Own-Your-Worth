import { useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import JoinIf from './components/JoinIf'
import Lessons from './components/Lessons'
import Coach from './components/Coach'
import NotForYou from './components/NotForYou'
import WhyDifferent from './components/WhyDifferent'
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
      <Nav onReserve={openReserveModal} />
      <main>
        <Hero onReserve={openReserveModal} />
        <JoinIf onReserve={openReserveModal} />
        <Lessons onReserve={openReserveModal} />
        <Testimonials onReserve={openReserveModal} />
        <Coach />
        <Faq onReserve={openReserveModal} />
        <NotForYou onReserve={openReserveModal} />
        <WhyDifferent onReserve={openReserveModal} />
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