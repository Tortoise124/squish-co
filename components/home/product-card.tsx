'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Plus } from 'lucide-react'
import { useCart } from '@/components/cart-provider'
import { formatPrice, type Product } from '@/lib/products'
import { cn } from '@/lib/utils'

export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart()
  const [squishing, setSquishing] = useState(false)

  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg">
      <button
        type="button"
        onClick={() => setSquishing(true)}
        onAnimationEnd={() => setSquishing(false)}
        aria-label={`Give ${product.name} a squish`}
        className="relative block overflow-hidden bg-muted"
      >
        <Image
          src={product.image || '/placeholder.svg'}
          alt={`${product.name} squishy`}
          width={600}
          height={600}
          className={cn('aspect-square w-full object-cover transition-transform group-hover:scale-105', squishing && 'animate-squish')}
        />
        {product.badge && (
          <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
            {product.badge}
          </span>
        )}
        <span className="absolute bottom-3 right-3 rounded-full bg-card/90 px-3 py-1 text-xs font-semibold opacity-0 transition-opacity group-hover:opacity-100">
          Tap to squish!
        </span>
      </button>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-center gap-2">
          <span className={cn(product.swatch, 'size-4 rounded-full ring-1 ring-border')} aria-hidden="true" />
          <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{product.tagline}</p>
        </div>
        <h3 className="text-xl font-semibold">{product.name}</h3>
        <p className="flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">{product.description}</p>
        <div className="flex items-center justify-between pt-2">
          <p className="text-lg font-bold">{formatPrice(product.price)}</p>
          <button
            type="button"
            onClick={() => add(product.id)}
            className="flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Plus className="size-4" aria-hidden="true" />
            Add<span className="sr-only"> {product.name} to basket</span>
          </button>
        </div>
      </div>
    </article>
  )
}
