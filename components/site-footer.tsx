import Link from 'next/link'
import { Logo } from '@/components/logo'

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-foreground text-background">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-[2fr_1fr_1fr]">
        <div className="flex flex-col gap-4">
          <div className="w-fit rounded-full bg-background px-4 py-2 text-foreground">
            <Logo />
          </div>
          <p className="max-w-sm text-pretty text-background/75">
            Biodegradable, non-toxic squishies, handmade with care in Australia. Little hands, big hearts, a healthier
            planet.
          </p>
        </div>
        <div>
          <h2 className="mb-3 font-sans text-sm font-bold uppercase tracking-wider text-accent">Explore</h2>
          <ul className="flex flex-col gap-2 text-background/80">
            <li><Link href="/#shop" className="hover:text-background">Shop squishies</Link></li>
            <li><Link href="/#why" className="hover:text-background">Why biodegradable</Link></li>
            <li><Link href="/#impact" className="hover:text-background">Our impact</Link></li>
            <li><Link href="/blog" className="hover:text-background">Blog</Link></li>
            <li><Link href="/reviews" className="hover:text-background">Reviews</Link></li>
            <li><Link href="/about" className="hover:text-background">About us</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="mb-3 font-sans text-sm font-bold uppercase tracking-wider text-accent">Our promise</h2>
          <ul className="flex flex-col gap-2 text-background/80">
            <li>Handmade locally</li>
            <li>Home compostable</li>
            <li>Plastic-free packaging</li>
            <li>Profits support the planet</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-background/15 px-4 py-5 text-center text-sm text-background/60">
        © 2026 Little Squish Co. A student Shark Tank project. We acknowledge the Traditional Custodians of the land
        and sea where our squishies are made.
      </div>
    </footer>
  )
}
