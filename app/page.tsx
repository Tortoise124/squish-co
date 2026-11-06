import { Hero } from '@/components/home/hero'
import { ShopSection } from '@/components/home/shop-section'
import { WhySection } from '@/components/home/why-section'
import { EcoPromise } from '@/components/home/eco-promise'
import { ImpactSection } from '@/components/home/impact-section'
import { BlogPreview } from '@/components/home/blog-preview'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <EcoPromise />
      <ShopSection />
      <WhySection />
      <ImpactSection />
      <BlogPreview />
    </main>
  )
}
