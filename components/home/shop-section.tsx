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
            Each squish is about the size of a small egg, made to fit perfectly in a child&apos;s palm. Every one is
            shaped by hand, so yours will be totally unique.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
