import { products } from '@/lib/products'
import { ProductCard } from '@/components/home/product-card'

export function ShopSection() {
  return (
    <section id="shop" aria-labelledby="shop-title" className="scroll-mt-28 bg-card/60 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-primary">The collection</p>
            <h2 id="shop-title" className="text-4xl font-semibold tracking-tight md:text-5xl">
              Choose your squish
            </h2>
          </div>
          <p className="max-w-md text-pretty text-muted-foreground">
            Three pearly colours, two palm-friendly sizes. Every squish is shaped by hand from plant-based,
            compostable ingredients, so yours will be totally unique and gentle on the planet.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Free carbon-neutral shipping Australia-wide on orders over $40. Every squish comes in a cotton pouch and
          compostable box.
        </p>
      </div>
    </section>
  )
}
