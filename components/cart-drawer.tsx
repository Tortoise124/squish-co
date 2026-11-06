'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Leaf, Minus, Plus, X } from 'lucide-react'
import { useCart } from '@/components/cart-provider'
import { formatPrice } from '@/lib/products'
import { Button } from '@/components/ui/button'

const FREE_SHIPPING_AT = 40

export function CartDrawer() {
  const { lines, subtotal, isOpen, setOpen, setQuantity, clear } = useCart()
  const [ordered, setOrdered] = useState(false)

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, setOpen])

  if (!isOpen) return null

  const remaining = Math.max(0, FREE_SHIPPING_AT - subtotal)

  const close = () => {
    setOpen(false)
    setOrdered(false)
  }

  return (
    <div className="fixed inset-0 z-50">
      <button
        type="button"
        aria-label="Close basket"
        className="absolute inset-0 bg-foreground/30 backdrop-blur-sm animate-in fade-in"
        onClick={close}
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-title"
        className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-background shadow-2xl animate-in slide-in-from-right"
      >
        <div className="flex items-center justify-between border-b border-border px-6 py-4">
          <h2 id="cart-title" className="text-2xl font-semibold">
            Your basket
          </h2>
          <button type="button" onClick={close} className="rounded-full p-2 hover:bg-secondary" aria-label="Close basket">
            <X className="size-5" aria-hidden="true" />
          </button>
        </div>

        {ordered ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-8 text-center">
            <div className="pearl-green flex size-20 items-center justify-center rounded-full">
              <Leaf className="size-9 text-primary-foreground" aria-hidden="true" />
            </div>
            <h3 className="text-2xl font-semibold">Thank you, squish friend!</h3>
            <p className="text-pretty text-muted-foreground">
              Your order is being lovingly handmade and will arrive in a compostable box. A share of your purchase
              will help protect our beaches and wildlife.
            </p>
            <Button onClick={close} className="rounded-full px-6">
              Keep exploring
            </Button>
          </div>
        ) : lines.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 px-8 text-center">
            <p className="text-lg font-semibold">Your basket is empty</p>
            <p className="text-muted-foreground">Pick a squish to start your calm, plastic-free collection.</p>
          </div>
        ) : (
          <>
            <div className="border-b border-border bg-secondary/60 px-6 py-3 text-sm">
              {remaining > 0
                ? `You're ${formatPrice(remaining)} away from free carbon-neutral shipping.`
                : 'Yay! You get free carbon-neutral shipping.'}
            </div>
            <ul className="flex-1 divide-y divide-border overflow-y-auto px-6">
              {lines.map(({ product, quantity }) => (
                <li key={product.id} className="flex items-center gap-4 py-4">
                  <Image
                    src={product.image || '/placeholder.svg'}
                    alt=""
                    width={72}
                    height={72}
                    className="size-18 rounded-xl object-cover"
                  />
                  <div className="flex-1">
                    <p className="font-bold">{product.name}</p>
                    <p className="text-sm text-muted-foreground">{formatPrice(product.price)} each</p>
                    <div className="mt-2 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setQuantity(product.id, quantity - 1)}
                        className="rounded-full border border-border p-1 hover:bg-secondary"
                        aria-label={`Remove one ${product.name}`}
                      >
                        <Minus className="size-3.5" aria-hidden="true" />
                      </button>
                      <span className="w-6 text-center text-sm font-bold" aria-live="polite">
                        {quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => setQuantity(product.id, quantity + 1)}
                        className="rounded-full border border-border p-1 hover:bg-secondary"
                        aria-label={`Add one more ${product.name}`}
                      >
                        <Plus className="size-3.5" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                  <p className="font-bold">{formatPrice(product.price * quantity)}</p>
                </li>
              ))}
            </ul>
            <div className="border-t border-border px-6 py-5">
              <div className="mb-4 flex items-center justify-between text-lg font-bold">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <Button
                size="lg"
                className="h-12 w-full rounded-full text-base"
                onClick={() => {
                  clear()
                  setOrdered(true)
                }}
              >
                Checkout
              </Button>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                Demo checkout for our Shark Tank pitch. No real payment is taken.
              </p>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}
