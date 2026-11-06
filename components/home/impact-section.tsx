import Link from 'next/link'
import { Award, Fish, TreePine, Waves } from 'lucide-react'

const causes = [
  { icon: Waves, title: 'Beach clean-ups', text: 'Clearing plastic from Australian coastlines.' },
  { icon: Fish, title: 'Ocean and reef life', text: 'Protecting turtles, fish and coral.' },
  { icon: TreePine, title: 'Native planting', text: 'Growing homes for local wildlife.' },
]

export function ImpactSection() {
  return (
    <section id="impact" aria-labelledby="impact-title" className="scroll-mt-28 py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-2">
        <div className="flex flex-col gap-5">
          <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary">
            <Award className="size-4" aria-hidden="true" />
            Our impact
          </p>
          <h2 id="impact-title" className="text-4xl font-semibold tracking-tight md:text-5xl">
            Every squish gives back to nature
          </h2>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            We are working towards becoming a certified <strong className="text-foreground">B Corp</strong>, a
            business that meets high standards for people and the planet. A share of the profit from every squish
            will go to an environmental charity.
          </p>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            We have not chosen our charity yet, and we would love your help. Here are the causes we are looking at:
          </p>
          <Link href="/blog/our-b-corp-journey" className="w-fit font-bold text-primary underline-offset-4 hover:underline">
            Read about our B Corp journey
          </Link>
        </div>
        <ul className="flex flex-col gap-4">
          {causes.map(({ icon: Icon, title, text }, i) => (
            <li key={title} className="flex items-center gap-5 rounded-3xl border border-border bg-card p-6 shadow-sm">
              <span
                className={`${['pearl-green', 'pearl-gold', 'pearl-cream'][i]} flex size-14 shrink-0 items-center justify-center rounded-full text-foreground`}
              >
                <Icon className="size-6" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-sm text-muted-foreground">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
