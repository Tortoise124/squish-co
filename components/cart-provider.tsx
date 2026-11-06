'use client'

import { createContext, useContext, useMemo, useState } from 'react'
import { products, type Product } from '@/lib/products'

type CartLine = { product: Product; quantity: number }

type CartContextValue = {
  lines: CartLine[]
  count: number
  subtotal: number
  isOpen: boolean
  setOpen: (open: boolean) => void
  add: (id: string) => void
  setQuantity: (id: string, quantity: number) => void
  clear: () => void
}

const CartContext = createContext<CartContextValue | null>(null)

const MAX_PER_ITEM = 10

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [quantities, setQuantities] = useState<Record<string, number>>({})
  const [isOpen, setOpen] = useState(false)

  const value = useMemo<CartContextValue>(() => {
    const lines = products
      .filter((p) => (quantities[p.id] ?? 0) > 0)
      .map((product) => ({ product, quantity: quantities[product.id] }))
    return {
      lines,
      count: lines.reduce((sum, l) => sum + l.quantity, 0),
      subtotal: lines.reduce((sum, l) => sum + l.quantity * l.product.price, 0),
      isOpen,
      setOpen,
      add: (id) => {
        setQuantities((q) => ({ ...q, [id]: Math.min((q[id] ?? 0) + 1, MAX_PER_ITEM) }))
        setOpen(true)
      },
      setQuantity: (id, quantity) =>
        setQuantities((q) => ({ ...q, [id]: Math.max(0, Math.min(quantity, MAX_PER_ITEM)) })),
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
