'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { useCart } from '@/components/cart-provider'
import { ProductGallery } from '@/components/home/product-gallery'
import { formatPrice, getSize, sizes, type Product, type SizeId } from '@/lib/products'
import { cn } from '@/lib/utils'

export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart()
  const [sizeId, setSizeId] = useState<SizeId>('medium')
  const size = getSize(sizeId)

  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg">
      <ProductGallery product={product} />
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-center gap-2">
          <span className={cn(product.swatch, 'size-4 rounded-full ring-1 ring-border')} aria-hidden="true" />
          <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{product.tagline}</p>
        </div>
        <h3 className="text-xl font-semibold">{product.name}</h3>
        <p className="flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">{product.description}</p>

        <fieldset className="flex flex-col gap-2 pt-1">
          <legend className="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">Size</legend>
          <div className="grid grid-cols-2 gap-2">
            {sizes.map((s) => (
              <label
                key={s.id}
                className={cn(
                  'flex cursor-pointer flex-col items-center rounded-2xl border-2 px-3 py-2 text-center transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ring',
                  s.id === sizeId
                    ? 'border-primary bg-secondary text-foreground'
                    : 'border-border text-muted-foreground hover:border-primary/50',
                )}
              >
                <input
                  type="radio"
                  name={`size-${product.id}`}
                  value={s.id}
                  checked={s.id === sizeId}
                  onChange={() => setSizeId(s.id)}
                  className="sr-only"
                />
                <span className="text-sm font-bold">{s.label}</span>
                <span className="text-xs">{formatPrice(s.price)}</span>
              </label>
            ))}
          </div>
          <p className="text-xs text-muted-foreground">{size.detail}</p>
        </fieldset>

        <div className="flex items-center justify-between pt-2">
          <p className="text-lg font-bold">{formatPrice(size.price)}</p>
          <button
            type="button"
            onClick={() => add(product.id, sizeId)}
            className="flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Plus className="size-4" aria-hidden="true" />
            Add<span className="sr-only"> {size.label} {product.name} to basket</span>
          </button>
        </div>
      </div>
    </article>
  )
}
