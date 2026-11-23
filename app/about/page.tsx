import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | Little Squish Co.',
  description: 'Meet Marie BH and Isla P, the founders of Little Squish Co.',
}

const founders = [
  {
    name: 'Marie BH',
    image: '/mb_founder.jpg',
    imageAlt: 'Marie BH smiling in her craft apron',
    message:
      'Good morning/afternoon people! My name is Marie and I really hope that I can make this business work out. Something you should know about me is I love making squishies, and you should try it at home too! On this app we have made a video to show you how to make an amazing squishy! Thanks!',
  },
  {
    name: 'Isla P',
    image: '/ip_founder.jpg',
    imageAlt: 'Isla P smiling in her craft apron',
    message:
      'Hi, my name is Isla and I love squishies. I have loved squishies since I was a little girl. I have a big sister. Her name is Olivia. I love to collect squishies and make squishy. It is fun so why not make a business.',
  },
]

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <header className="mx-auto mb-12 max-w-2xl text-center">
        <p className="mb-2 text-sm font-bold uppercase tracking-wider text-primary">Meet the founders</p>
        <h1 className="text-5xl font-semibold tracking-tight">A little about us</h1>
        <p className="mt-4 text-pretty text-lg text-muted-foreground">
          We love making squishies, and we started Little Squish Co. to share that joy with you.
        </p>
      </header>
      <div className="grid gap-8 md:grid-cols-2">
        {founders.map((founder) => (
          <article
            key={founder.name}
            className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm"
          >
            <Image
              src={founder.image}
              alt={founder.imageAlt}
              width={706}
              height={768}
              className="aspect-[4/3] w-full object-cover object-top"
            />
            <div className="p-6 md:p-8">
              <h2 className="text-3xl font-semibold">{founder.name}</h2>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">{founder.message}</p>
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}
