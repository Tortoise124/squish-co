export type PostCategory = 'Handmade Videos' | 'Care Tips' | 'Our Impact'

export type Post = {
  slug: string
  title: string
  excerpt: string
  category: PostCategory
  date: string
  readTime: string
  image: string
  isVideo?: boolean
  body: { heading?: string; text: string }[]
}

export const posts: Post[] = [
  {
    slug: 'how-we-make-a-squish',
    title: 'Watch: how we hand-make every squish',
    excerpt: 'From mixing our plant-based dough to the final gentle press, follow one squishy from start to finish.',
    category: 'Handmade Videos',
    date: '2026-10-28',
    readTime: '4 min watch',
    image: '/images/blog-handmade.png',
    isVideo: true,
    body: [
      {
        text: 'Every Little Squish starts as a small ball of plant-based mix, made in small batches right here in Australia. In this video we show you each step, from measuring to mixing to shaping by hand.',
      },
      {
        heading: 'Mixing the base',
        text: 'We use natural, non-toxic ingredients and colours made from plants and minerals, so there are no harsh chemicals and nothing nasty for little hands.',
      },
      {
        heading: 'Shaping by hand',
        text: 'Each squish is rolled and pressed into its egg-like shape by hand. That is why every single one is slightly different, a little bit like a pebble you find at the beach.',
      },
      {
        heading: 'Resting and packing',
        text: 'Once shaped, our squishies rest and set before being wrapped in recycled paper and packed into compostable boxes. No plastic, ever.',
      },
    ],
  },
  {
    slug: 'caring-for-your-squish',
    title: '5 simple ways to keep your squish happy',
    excerpt: 'Keep your squishy soft, clean and squishable for longer with these easy tips for kids and parents.',
    category: 'Care Tips',
    date: '2026-10-14',
    readTime: '3 min read',
    image: '/images/blog-care.png',
    body: [
      { heading: '1. Keep it out of the hot sun', text: 'Like us at the beach, your squish likes some shade. Store it somewhere cool and dry.' },
      { heading: '2. Wash your hands first', text: 'Clean hands mean a clean squish. If it gets grubby, gently wipe it with a damp cloth.' },
      { heading: '3. Keep it in its pouch', text: 'Your cotton pouch keeps fluff and dust away when you are not squishing.' },
      { heading: '4. Squish gently', text: 'Squishies love a slow, calm squeeze. Big pulls or sharp objects can cause tears.' },
      {
        heading: '5. When it is time to say goodbye',
        text: 'When your squish has been well loved, pop it in your home compost or garden bed. It will break down naturally and return to the earth.',
      },
    ],
  },
  {
    slug: 'our-b-corp-journey',
    title: 'Our B Corp journey and choosing our charity',
    excerpt: 'Why we are working towards B Corp certification, and how part of every sale will help protect our environment.',
    category: 'Our Impact',
    date: '2026-09-30',
    readTime: '5 min read',
    image: '/images/blog-impact.png',
    body: [
      {
        text: 'From day one, we wanted Little Squish Co. to be a business that does good, not just one that sells things. That is why we are working towards becoming a certified B Corporation.',
      },
      {
        heading: 'What is a B Corp?',
        text: 'B Corps are businesses that meet high standards for how they treat people and the planet. It means being open and honest about how we make our toys, who we work with and where our money goes.',
      },
      {
        heading: 'Where our profits go',
        text: 'We have promised that a share of every squish sold will go to an environmental charity. We have not picked one yet, and we want our community to help us choose!',
      },
      {
        heading: 'The causes we are looking at',
        text: 'We are looking at charities that clean up Australian beaches, protect ocean and reef life, and plant native trees for wildlife. Keep an eye on this blog, we will share our choice soon.',
      },
    ],
  },
]

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })
