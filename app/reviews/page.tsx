import type { Metadata } from 'next'
import { ChevronDown, Leaf, MapPin, Star, ThumbsUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Reviews | Little Squish Co.',
  description: 'Read what families love about Little Squish Co. biodegradable, handmade squishies.',
}

const reviews = [
  {
    name: 'Sophie M.',
    initials: 'SM',
    color: 'bg-sky-100 text-sky-800',
    time: '2 weeks ago',
    title: 'Our new calm-down favourite',
    text: 'My daughter takes her Seafoam Green squish everywhere. It is lovely to have a screen-free fidget that feels gentle and is made with thoughtful ingredients. The little compostable box was a very sweet touch, too.',
    product: 'Seafoam Green',
    helpful: 12,
  },
  {
    name: 'Daniel R.',
    initials: 'DR',
    color: 'bg-amber-100 text-amber-800',
    time: '1 month ago',
    title: 'A thoughtful little gift',
    text: 'Bought the Rockpool Swirl for my niece and she was straight into squishing it. You can tell it is handmade — the colours are beautiful and no two swirls are quite the same. Love the Australian-made, plastic-free packaging.',
    product: 'Rockpool Swirl',
    helpful: 8,
  },
  {
    name: 'Priya K.',
    initials: 'PK',
    color: 'bg-violet-100 text-violet-800',
    time: '1 month ago',
    title: 'Lovely for busy hands',
    text: 'I keep a Pearl Cream squish on my desk for when I need a little fidget break. It is soft, calming, and much nicer than another plastic gadget. The care tips were helpful for keeping it in good shape.',
    product: 'Pearl Cream',
    helpful: 6,
  },
  {
    name: 'Emily T.',
    initials: 'ET',
    color: 'bg-rose-100 text-rose-800',
    time: '2 months ago',
    title: 'A small toy with a big heart',
    text: 'My son loves the warm colour of Golden Sand, and I love the story behind it. A handmade toy that is plant-based and designed to go back to the compost when it is well loved feels like a win for everyone.',
    product: 'Golden Sand',
    helpful: 4,
  },
]

function RatingStars({ size = 'size-5' }: { size?: string }) {
  return (
    <span className="flex items-center gap-0.5 text-[#fbbc04]" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }, (_, index) => (
        <Star key={index} className={`${size} fill-current`} aria-hidden="true" />
      ))}
    </span>
  )
}

export default function ReviewsPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 md:py-16">
      <div className="mb-8">
        <p className="mb-2 text-sm font-bold uppercase tracking-wider text-primary">Kind words, little moments</p>
        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">Reviews</h1>
      </div>

      <section aria-labelledby="business-name" className="rounded-3xl border border-border bg-card p-6 shadow-sm md:p-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold text-muted-foreground">Google-style reviews</p>
            <h2 id="business-name" className="text-2xl font-semibold">
              Little Squish Co.
            </h2>
            <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="size-4" aria-hidden="true" />
              Handmade in Australia
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-5xl font-semibold tracking-tight">5.0</span>
            <div className="flex flex-col gap-1">
              <RatingStars />
              <span className="text-sm text-muted-foreground">4 sample reviews</span>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2 border-t border-border pt-5">
          <span className="rounded-full bg-secondary px-4 py-2 text-sm font-semibold">All reviews</span>
          <span className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground">For little hands</span>
          <span className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground">Handmade</span>
          <span className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground">Planet-friendly</span>
        </div>
      </section>

      <aside className="mt-5 flex gap-3 rounded-2xl border border-primary/20 bg-secondary/60 p-4 text-sm leading-relaxed">
        <Leaf className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
        <p>
          <strong>School project sample:</strong> These fictional reviews are example content for our school project.
          They are not real customer testimonials and were not posted on or collected by Google.
        </p>
      </aside>

      <div className="mt-8 flex items-center justify-between gap-4">
        <h2 className="text-2xl font-semibold">What people are saying</h2>
        <span className="inline-flex items-center gap-1 text-sm font-semibold text-muted-foreground">
          Most relevant <ChevronDown className="size-4" aria-hidden="true" />
        </span>
      </div>

      <div className="mt-4 divide-y divide-border rounded-3xl border border-border bg-card px-5 shadow-sm md:px-8">
        {reviews.map((review) => (
          <article key={review.name} className="py-6">
            <div className="flex items-start gap-3">
              <span className={`flex size-11 shrink-0 items-center justify-center rounded-full text-sm font-bold ${review.color}`}>
                {review.initials}
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <h3 className="font-bold">{review.name}</h3>
                  <span className="rounded-full bg-secondary px-2 py-0.5 text-xs font-semibold text-muted-foreground">
                    Sample
                  </span>
                  <span className="text-sm text-muted-foreground">{review.time}</span>
                </div>
                <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1">
                  <RatingStars size="size-4" />
                  <h4 className="font-bold">{review.title}</h4>
                </div>
                <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{review.text}</p>
                <p className="mt-3 text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Favourite:</span> {review.product}
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                  <ThumbsUp className="size-4" aria-hidden="true" />
                  <span>{review.helpful} found this helpful</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}
