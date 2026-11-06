export type SizeId = 'small' | 'medium'

export type Size = {
  id: SizeId
  label: string
  detail: string
  price: number
}

export const sizes: Size[] = [
  { id: 'small', label: 'Small', detail: 'About 5cm, perfect for little hands and pencil cases', price: 10 },
  { id: 'medium', label: 'Medium', detail: 'About 7cm, a full palm-sized squeeze', price: 14 },
]

export const getSize = (id: SizeId) => sizes.find((s) => s.id === id) ?? sizes[0]

export type Product = {
  id: string
  name: string
  tagline: string
  description: string
  image: string
  swatch: 'pearl-green' | 'pearl-gold' | 'pearl-cream'
  badge?: string
}

export const products: Product[] = [
  {
    id: 'seafoam',
    name: 'Seafoam Green',
    tagline: 'Calm as a rockpool',
    description: 'A soft sage squish with a gentle pearly shimmer, inspired by sea grass swaying in the shallows.',
    image: '/images/seafoam.png',
    swatch: 'pearl-green',
    badge: 'Most loved',
  },
  {
    id: 'golden-sand',
    name: 'Golden Sand',
    tagline: 'Warm like the afternoon sun',
    description: 'A glowing golden squish that feels like scooping up a handful of warm beach sand.',
    image: '/images/golden-sand.png',
    swatch: 'pearl-gold',
  },
  {
    id: 'pearl',
    name: 'Pearl Cream',
    tagline: 'Soft as a seashell',
    description: 'Creamy white with an iridescent sheen, just like the inside of a shell. Our gentlest squish.',
    image: '/images/pearl.png',
    swatch: 'pearl-cream',
  },
]

export const formatPrice = (value: number) =>
  new Intl.NumberFormat('en-AU', { style: 'currency', currency: 'AUD' }).format(value)
