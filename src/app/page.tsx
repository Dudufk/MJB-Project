import HeroBanner from '@/components/HeroBanner'
import Services from '@/components/Services'
import About from './about/page'

export default function Home() {
  return (
    <main className="">
      <HeroBanner />
      <Services />
      <About />
    </main>
  )
}
