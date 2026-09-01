import Nav from './components/Nav'
import Hero from './components/Hero'
import JoinIf from './components/JoinIf'
import Lessons from './components/Lessons'
import Testimonials from './components/Testimonials'
import Coach from './components/Coach'
import NotForYou from './components/NotForYou'
import WhyDifferent from './components/WhyDifferent'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

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
        <NotForYou />
        <WhyDifferent />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
