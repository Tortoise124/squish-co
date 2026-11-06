import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Play } from 'lucide-react'
import { formatDate, posts } from '@/lib/posts'
import { buttonVariants } from '@/components/ui/button'

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)
  return post ? { title: `${post.title} | Little Squish Co.`, description: post.excerpt } : {}
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)
  if (!post) notFound()

  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <Link href="/blog" className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline">
        <ArrowLeft className="size-4" aria-hidden="true" /> All posts
      </Link>
      <p className="mb-3 text-sm font-bold uppercase tracking-wider text-primary">{post.category}</p>
      <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">{post.title}</h1>
      <p className="mt-4 text-sm font-semibold text-muted-foreground">
        {formatDate(post.date)} · {post.readTime}
      </p>

      <div className="relative mt-8 overflow-hidden rounded-[2rem]">
        <Image
          src={post.image || '/placeholder.svg'}
          alt={post.isVideo ? 'Video preview: hands shaping a squishy' : ''}
          width={1200}
          height={800}
          className="aspect-video w-full object-cover"
        />
        {post.isVideo && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-foreground/30 text-background">
            <span className="flex size-20 items-center justify-center rounded-full bg-card/90 text-primary shadow-lg">
              <Play className="ml-1 size-9 fill-current" aria-hidden="true" />
            </span>
            <p className="rounded-full bg-foreground/60 px-4 py-1 text-sm font-bold">Video premiering soon</p>
          </div>
        )}
      </div>

      <div className="mt-10 flex flex-col gap-6 text-lg leading-relaxed">
        {post.body.map((block, i) => (
          <section key={i} className="flex flex-col gap-2">
            {block.heading && <h2 className="text-2xl font-semibold">{block.heading}</h2>}
            <p className="text-pretty text-muted-foreground">{block.text}</p>
          </section>
        ))}
      </div>

      <div className="mt-14 flex flex-col items-center gap-4 rounded-3xl bg-secondary p-8 text-center">
        <h2 className="text-2xl font-semibold">Ready for your own little squish?</h2>
        <Link href="/#shop" className={buttonVariants({ size: 'lg', className: 'h-11 rounded-full px-7' })}>
          Shop the collection
        </Link>
      </div>
    </main>
  )
}
