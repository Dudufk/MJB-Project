import HeroBanner from '@/components/HeroBanner'
import ServicesSection from '@/components/ServicesSection'
import AboutSection from '@/components/AboutSection'
import StatsSection from '@/components/StatsSection'

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <ServicesSection />
      <AboutSection image="team" isButton />
      <StatsSection />
    </main>
  )
}
