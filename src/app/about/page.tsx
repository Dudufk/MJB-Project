import AboutSection from '@/components/AboutSection'
import AboutTop from '@/components/AboutTop'
import ExpertiseAreas from '@/components/ExpertiseAreas'
import FounderSection from '@/components/FounderSection'

export default function About() {
  return (
    <div>
      <AboutTop />
      <AboutSection image="team2" />
      <FounderSection />
      <ExpertiseAreas />
    </div>
  )
}
