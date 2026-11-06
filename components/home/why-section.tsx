import { Hand, HeartHandshake, Leaf, Recycle, ShieldCheck, Sun } from 'lucide-react'

const features = [
  {
    icon: Recycle,
    title: '100% biodegradable',
    text: 'When it has been well loved, pop your squish in the compost. It breaks down naturally and leaves nothing behind.',
  },
  {
    icon: ShieldCheck,
    title: 'Non-toxic for little hands',
    text: 'Plant-based ingredients and natural colours. No PVC, no phthalates, no microplastics, nothing nasty.',
  },
  {
    icon: Hand,
    title: 'Handmade in Australia',
    text: 'Made in small batches by local makers, so every squish is crafted with care and travels a shorter distance to you.',
  },
  {
    icon: Sun,
    title: 'Calm, screen-free play',
    text: 'A slow, satisfying squeeze helps kids fidget, focus and relax, a real-world break from screens and games.',
  },
]

export function WhySection() {
  return (
    <section id="why" aria-labelledby="why-title" className="scroll-mt-28 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-2 text-sm font-bold uppercase tracking-wider text-primary">Why Little Squish</p>
          <h2 id="why-title" className="text-4xl font-semibold tracking-tight md:text-5xl">
            Small toy, gentle footprint
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex flex-col gap-3 rounded-3xl bg-secondary/70 p-6">
              <span className="flex size-12 items-center justify-center rounded-2xl bg-card text-primary">
                <Icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid items-center gap-10 overflow-hidden rounded-[2.5rem] bg-primary p-8 text-primary-foreground md:grid-cols-[1.2fr_1fr] md:p-14">
          <div className="flex flex-col gap-5">
            <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-accent">
              <HeartHandshake className="size-4" aria-hidden="true" />
              For parents
            </p>
            <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
              Peace of mind in a world full of plastic and screens.
            </h2>
            <p className="text-pretty leading-relaxed text-primary-foreground/85">
              Most fidget toys are made of plastic that lasts for hundreds of years and can shed tiny microplastics.
              With Little Squish, you can feel good knowing your child is playing with something safe, simple and
              kind to the earth. No batteries. No screens. Just a calm moment in their hand.
            </p>
          </div>
          <dl className="grid grid-cols-2 gap-4">
            {[
              { value: '0g', label: 'plastic used' },
              { value: '100%', label: 'home compostable' },
              { value: 'AU', label: 'made locally' },
              { value: '1 in 1', label: 'handmade by people' },
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl bg-primary-foreground/10 p-5">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-serif text-3xl font-semibold text-accent">{stat.value}</dd>
                <dd className="text-sm text-primary-foreground/80">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-8">
            <p className="mb-4 flex items-center gap-2 font-bold text-muted-foreground">Typical plastic fidget toy</p>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <li>Made from oil-based plastics</li>
              <li>Can take hundreds of years to break down</li>
              <li>Mass-produced overseas</li>
              <li>Wrapped in single-use plastic</li>
            </ul>
          </div>
          <div className="rounded-3xl border-2 border-primary bg-secondary/50 p-8">
            <p className="mb-4 flex items-center gap-2 font-bold text-primary">
              <Leaf className="size-4" aria-hidden="true" /> A Little Squish
            </p>
            <ul className="flex flex-col gap-2 text-sm">
              <li>Made from plant-based, non-toxic ingredients</li>
              <li>Breaks down naturally in compost</li>
              <li>Handmade in small batches in Australia</li>
              <li>Packed in recycled paper and a compostable box</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
