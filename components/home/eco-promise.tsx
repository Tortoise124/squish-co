import { ChevronDown, Hand, Package, Sprout, Wheat } from 'lucide-react'

const lifecycle = [
  {
    icon: Wheat,
    step: '01',
    title: 'Grown, not drilled',
    text: 'We start with plant-based ingredients and natural, food-safe colours instead of oil-based plastic.',
  },
  {
    icon: Hand,
    step: '02',
    title: 'Handmade in Australia',
    text: 'Each squish is shaped by hand in small local batches, so it travels a short distance to your home.',
  },
  {
    icon: Package,
    step: '03',
    title: 'Squished and loved',
    text: 'It arrives plastic-free in a cotton pouch and compostable box, ready for months of calm play.',
  },
  {
    icon: Sprout,
    step: '04',
    title: 'Back to the earth',
    text: 'When it is worn out, pop it in the home compost. It breaks down naturally, leaving nothing behind.',
  },
]

const faqs = [
  {
    q: 'What is a Little Squish made of?',
    a: 'Plant-based, non-toxic ingredients with natural colours. There is no PVC, no phthalates, no foam plastic and no glitter, so nothing harmful touches little hands or ends up in our oceans.',
  },
  {
    q: 'How long does it take to break down?',
    a: 'In a healthy home compost, a Little Squish breaks down within a few months. Plastic squishies can last hundreds of years and shed microplastics along the way.',
  },
  {
    q: 'Is it safe for my child?',
    a: 'Yes. Our squishies are designed for children aged 3 and up. As with any small toy, we recommend supervising younger children and keeping it out of mouths.',
  },
  {
    q: 'What about the packaging?',
    a: 'Every squish ships in a reusable cotton pouch inside a recycled cardboard box. No plastic bags, bubble wrap or tape, ever.',
  },
]

export function EcoPromise() {
  return (
    <section id="eco" aria-labelledby="eco-title" className="scroll-mt-28 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-bold text-primary">
            <Sprout className="size-4" aria-hidden="true" />
            Our earth-first promise
          </p>
          <h2 id="eco-title" className="text-balance text-4xl font-semibold tracking-tight md:text-5xl">
            From the earth, <span className="italic text-primary">back to the earth.</span>
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
            Dear parents and carers: we know it can feel impossible to avoid plastic toys. A Little Squish is a simple
            swap you can feel completely good about. Here is the whole life of every squish we make.
          </p>
        </div>

        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {lifecycle.map(({ icon: Icon, step, title, text }) => (
            <li key={step} className="relative flex flex-col gap-4 rounded-3xl border border-border bg-card p-6">
              <div className="flex items-center justify-between">
                <span className="pearl-green flex size-12 items-center justify-center rounded-full text-primary-foreground">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <span className="font-serif text-3xl font-semibold text-accent" aria-hidden="true">
                  {step}
                </span>
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{text}</p>
            </li>
          ))}
        </ol>

        <div className="mt-16 grid gap-10 md:grid-cols-[1fr_1.3fr]">
          <div className="flex flex-col gap-4">
            <p className="text-sm font-bold uppercase tracking-wider text-primary">Questions from parents</p>
            <h3 className="text-3xl font-semibold leading-tight">Peace of mind, in plain words.</h3>
            <p className="text-pretty leading-relaxed text-muted-foreground">
              We think you deserve to know exactly what goes into your child&apos;s toys and exactly where they end
              up. No greenwashing, just honest answers.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            {faqs.map(({ q, a }) => (
              <details
                key={q}
                className="group rounded-2xl border border-border bg-card px-5 py-4 open:bg-secondary/50"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold [&::-webkit-details-marker]:hidden">
                  {q}
                  <ChevronDown
                    className="size-5 shrink-0 text-primary transition-transform group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
