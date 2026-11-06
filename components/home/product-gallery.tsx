'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { Product } from '@/lib/products'
import { cn } from '@/lib/utils'

export function ProductGallery({ product }: { product: Product }) {
  const [index, setIndex] = useState(0)
  const [squishing, setSquishing] = useState(false)
  const slides = product.gallery
  const total = slides.length
  const go = (next: number) => setIndex((next + total) % total)

  return (
    <div
      className="relative overflow-hidden bg-muted"
      role="region"
      aria-roledescription="carousel"
      aria-label={`${product.name} photos`}
    >
      <button
        type="button"
        onClick={() => setSquishing(true)}
        onAnimationEnd={() => setSquishing(false)}
        aria-label={`Give ${product.name} a squish`}
        className="block w-full"
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div
              key={slide.src}
              className="w-full shrink-0"
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${total}`}
              aria-hidden={i !== index}
            >
              <Image
                src={slide.src || '/placeholder.svg'}
                alt={slide.alt}
                width={600}
                height={600}
                className={cn(
                  'aspect-square w-full object-cover',
                  squishing && i === index && 'animate-squish',
                )}
              />
            </div>
          ))}
        </div>
      </button>

      {product.badge && (
        <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
          {product.badge}
        </span>
      )}

      <button
        type="button"
        onClick={() => go(index - 1)}
        aria-label="Previous photo"
        className="absolute left-3 top-1/2 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-card/90 text-foreground shadow-sm transition hover:bg-card focus-visible:ring-2 focus-visible:ring-ring"
      >
        <ChevronLeft className="size-5" aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={() => go(index + 1)}
        aria-label="Next photo"
        className="absolute right-3 top-1/2 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-card/90 text-foreground shadow-sm transition hover:bg-card focus-visible:ring-2 focus-visible:ring-ring"
      >
        <ChevronRight className="size-5" aria-hidden="true" />
      </button>

      <div className="absolute inset-x-0 bottom-3 flex justify-center gap-2">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => go(i)}
            aria-label={`Show photo ${i + 1}`}
            aria-current={i === index}
            className={cn(
              'h-2 rounded-full bg-card/80 shadow-sm transition-all',
              i === index ? 'w-6 bg-card' : 'w-2 hover:bg-card',
            )}
          />
        ))}
      </div>
    </div>
  )
}
