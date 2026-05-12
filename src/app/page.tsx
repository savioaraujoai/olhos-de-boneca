import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import ScrollStorytelling from '@/components/ScrollStorytelling'
import Services from '@/components/Services'
import AboutBrand from '@/components/AboutBrand'
import Academy from '@/components/Academy'
import FormacaoProfissional from '@/components/FormacaoProfissional'
import Certificacoes from '@/components/Certificacoes'
import Testimonials from '@/components/Testimonials'
import FinalCTA from '@/components/FinalCTA'
import LocationMap from '@/components/LocationMap'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-deep-black overflow-hidden">
      <Hero />
      <Marquee />
      <ScrollStorytelling />
      <Services />
      <AboutBrand />
      <Academy />
      <FormacaoProfissional />
      <Certificacoes />
      <Testimonials />
      <FinalCTA />
      <LocationMap />
      <Footer />
    </main>
  )
}
