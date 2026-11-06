import Image from 'next/image'
import Link from 'next/link'
import { Leaf, MapPin, Sprout } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 pt-12 md:grid-cols-2 md:pt-20">
        <div className="flex flex-col items-start gap-6">
          <p className="flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-bold text-primary">
            <Sprout className="size-4" aria-hidden="true" />
            Squishies that return to the earth
          </p>
          <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            A little squish for <span className="italic text-primary">calm hands</span> and a happy planet.
          </h1>
          <p className="max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
            Palm-sized, pearly-soft squishies made by hand in Australia from non-toxic, fully biodegradable
            ingredients. Real, tactile play for kids, with no plastic left behind.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="#shop" className={buttonVariants({ size: 'lg', className: 'h-12 rounded-full px-7 text-base' })}>
              Shop the squishies
            </Link>
            <Link
              href="#why"
              className={buttonVariants({
                size: 'lg',
                variant: 'outline',
                className: 'h-12 rounded-full bg-transparent px-7 text-base',
              })}
            >
              Why biodegradable?
            </Link>
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-sm font-semibold text-muted-foreground">
            <li className="flex items-center gap-1.5">
              <MapPin className="size-4 text-primary" aria-hidden="true" /> Handmade in Australia
            </li>
            <li className="flex items-center gap-1.5">
              <Leaf className="size-4 text-primary" aria-hidden="true" /> Non-toxic and compostable
            </li>
          </ul>
        </div>
        <div className="relative">
          <div className="pearl-gold absolute -right-10 -top-10 size-40 rounded-full opacity-40 blur-3xl" aria-hidden="true" />
          <div className="pearl-green absolute -bottom-10 -left-10 size-48 rounded-full opacity-40 blur-3xl" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-[2.5rem] shadow-xl ring-8 ring-card">
            <Image
              src="/images/hero.png"
              alt="Three pearly squishies in green, gold and cream resting on beach sand beside small seashells"
              width={1408}
              height={768}
              priority
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 left-6 rounded-2xl bg-card px-5 py-3 shadow-lg">
            <p className="text-sm font-bold">0g plastic</p>
            <p className="text-xs text-muted-foreground">in every squish and box</p>
          </div>
        </div>
      </div>
    </section>
  )
}
