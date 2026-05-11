import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Programs from './components/Programs'
import Services from './components/Services'
import Transformations from './components/Transformations'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'
import BackgroundEffects from './components/BackgroundEffects'

export default function Home() {
  return (
    <main className="relative overflow-hidden">

      <BackgroundEffects />
      <Navbar />

      <Hero />
      <About />
      <Programs />
      <Services />
      <Transformations />
      <Testimonials />
      <CTA />
      <Footer />

    </main>
  )
}