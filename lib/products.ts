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
  gallery: { src: string; alt: string }[]
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
    gallery: [
      { src: '/images/seafoam.png', alt: 'Seafoam Green squishy' },
      { src: '/images/seafoam-enjoy.png', alt: 'A child on the beach happily squishing a Seafoam Green squishy' },
      { src: '/images/seafoam-hand.png', alt: 'A Seafoam Green squishy resting in a child’s open palm' },
    ],
    swatch: 'pearl-green',
    badge: 'Most loved',
  },
  {
    id: 'golden-sand',
    name: 'Golden Sand',
    tagline: 'Warm like the afternoon sun',
    description: 'A glowing golden squish that feels like scooping up a handful of warm beach sand.',
    image: '/images/golden-sand.png',
    gallery: [
      { src: '/images/golden-sand.png', alt: 'Golden Sand squishy' },
      { src: '/images/golden-sand-enjoy.png', alt: 'A child laughing on a picnic blanket while squishing a Golden Sand squishy' },
      { src: '/images/golden-sand-hand.png', alt: 'A Golden Sand squishy held gently in a child’s hand' },
    ],
    swatch: 'pearl-gold',
  },
  {
    id: 'pearl',
    name: 'Pearl Cream',
    tagline: 'Soft as a seashell',
    description: 'Creamy white with an iridescent sheen, just like the inside of a shell. Our gentlest squish.',
    image: '/images/pearl.png',
    gallery: [
      { src: '/images/pearl.png', alt: 'Pearl Cream squishy' },
      { src: '/images/pearl-enjoy.png', alt: 'A calm child by a sunny window squeezing a Pearl Cream squishy' },
      { src: '/images/pearl-hand.png', alt: 'A Pearl Cream squishy cupped in a child’s hands' },
    ],
    swatch: 'pearl-cream',
  },
]

export const formatPrice = (value: number) =>
  new Intl.NumberFormat('en-AU', { style: 'currency', currency: 'AUD' }).format(value)
