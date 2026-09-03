import Nav from './components/Nav'
import Hero from './components/Hero'
import JoinIf from './components/JoinIf'
import Lessons from './components/Lessons'
import Coach from './components/Coach'
import NotForYou from './components/NotForYou'
import WhyDifferent from './components/WhyDifferent'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import Faq from './components/Faq'
import Testimonials from './components/TestimonialSection'

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Nav />
      <main>
        <Hero />
        <JoinIf />
        <Lessons />
        <Testimonials />
        <Coach />
        <Faq />
        <NotForYou />
        <WhyDifferent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
