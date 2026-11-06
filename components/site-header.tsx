'use client'

import Link from 'next/link'
import { ShoppingBag } from 'lucide-react'
import { useCart } from '@/components/cart-provider'
import { CartDrawer } from '@/components/cart-drawer'
import { Logo } from '@/components/logo'

const nav = [
  { href: '/#shop', label: 'Shop' },
  { href: '/#why', label: 'Why Squish' },
  { href: '/#impact', label: 'Our Impact' },
  { href: '/blog', label: 'Blog' },
]

export function SiteHeader() {
  const { count, setOpen } = useCart()

  return (
    <>
      <div className="bg-primary px-4 py-2 text-center text-sm text-primary-foreground">
        Handmade in Australia · 100% biodegradable · Plastic-free packaging
      </div>
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <Link href="/" aria-label="Little Squish Co. home">
            <Logo />
          </Link>
          <nav aria-label="Main" className="hidden md:block">
            <ul className="flex items-center gap-8 text-sm font-semibold">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-primary">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="relative flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-bold transition-colors hover:bg-accent"
          >
            <ShoppingBag className="size-4" aria-hidden="true" />
            <span>Basket</span>
            <span className="sr-only">, {count} items</span>
            {count > 0 && (
              <span
                aria-hidden="true"
                className="flex size-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground"
              >
                {count}
              </span>
            )}
          </button>
        </div>
        <nav aria-label="Mobile" className="border-t border-border/70 md:hidden">
          <ul className="flex justify-around px-2 py-2 text-sm font-semibold">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="px-2 py-1 hover:text-primary">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <CartDrawer />
    </>
  )
}
