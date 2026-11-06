'use client'

import { createContext, useContext, useMemo, useState } from 'react'
import { products, sizes, type Product, type Size, type SizeId } from '@/lib/products'

type CartLine = { key: string; product: Product; size: Size; quantity: number }

type CartContextValue = {
  lines: CartLine[]
  count: number
  subtotal: number
  isOpen: boolean
  setOpen: (open: boolean) => void
  add: (id: string, size: SizeId) => void
  setQuantity: (key: string, quantity: number) => void
  clear: () => void
}

const CartContext = createContext<CartContextValue | null>(null)

const MAX_PER_ITEM = 10

const lineKey = (id: string, size: SizeId) => `${id}:${size}`

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [quantities, setQuantities] = useState<Record<string, number>>({})
  const [isOpen, setOpen] = useState(false)

  const value = useMemo<CartContextValue>(() => {
    const lines = products.flatMap((product) =>
      sizes
        .map((size) => ({ key: lineKey(product.id, size.id), product, size }))
        .filter(({ key }) => (quantities[key] ?? 0) > 0)
        .map((line) => ({ ...line, quantity: quantities[line.key] })),
    )
    return {
      lines,
      count: lines.reduce((sum, l) => sum + l.quantity, 0),
      subtotal: lines.reduce((sum, l) => sum + l.quantity * l.size.price, 0),
      isOpen,
      setOpen,
      add: (id, size) => {
        const key = lineKey(id, size)
        setQuantities((q) => ({ ...q, [key]: Math.min((q[key] ?? 0) + 1, MAX_PER_ITEM) }))
        setOpen(true)
      },
      setQuantity: (key, quantity) =>
        setQuantities((q) => ({ ...q, [key]: Math.max(0, Math.min(quantity, MAX_PER_ITEM)) })),
      clear: () => setQuantities({}),
    }
  }, [quantities, isOpen])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
