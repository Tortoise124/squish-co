export type Product = {
  id: string
  name: string
  tagline: string
  description: string
  price: number
  image: string
  swatch: 'pearl-green' | 'pearl-gold' | 'pearl-cream' | 'pearl-swirl'
  badge?: string
}

export const products: Product[] = [
  {
    id: 'seafoam',
    name: 'Seafoam Green',
    tagline: 'Calm as a rockpool',
    description: 'A soft sage squish with a gentle pearly shimmer, inspired by sea grass swaying in the shallows.',
    price: 14,
    image: '/images/seafoam.png',
    swatch: 'pearl-green',
    badge: 'Most loved',
  },
  {
    id: 'golden-sand',
    name: 'Golden Sand',
    tagline: 'Warm like the afternoon sun',
    description: 'A glowing golden squish that feels like scooping up a handful of warm beach sand.',
    price: 14,
    image: '/images/golden-sand.png',
    swatch: 'pearl-gold',
  },
  {
    id: 'pearl',
    name: 'Pearl Cream',
    tagline: 'Soft as a seashell',
    description: 'Creamy white with an iridescent sheen, just like the inside of a shell. Our gentlest squish.',
    price: 14,
    image: '/images/pearl.png',
    swatch: 'pearl-cream',
  },
  {
    id: 'rockpool',
    name: 'Rockpool Swirl',
    tagline: 'All three, swirled by hand',
    description: 'Every swirl is one-of-a-kind, marbled by hand with green, gold and cream. No two are the same!',
    price: 16,
    image: '/images/rockpool.png',
    swatch: 'pearl-swirl',
    badge: 'Limited batch',
  },
]

export const formatPrice = (value: number) =>
  new Intl.NumberFormat('en-AU', { style: 'currency', currency: 'AUD' }).format(value)
