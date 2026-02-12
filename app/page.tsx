import { GridBackground } from '@/components/GridBackground'
import { ScrollIndicator } from '@/components/ScrollIndicator'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { StatsBar } from '@/components/StatsBar'
import { ValueProps } from '@/components/ValueProps'
import { HowItWorks } from '@/components/HowItWorks'
import { BookingSection } from '@/components/BookingSection'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-glow">
      <GridBackground />
      <ScrollIndicator />
      <Header />
      <Hero />
      <StatsBar />
      <ValueProps />
      <HowItWorks />
      <BookingSection />
      <Footer />
    </main>
  )
}
