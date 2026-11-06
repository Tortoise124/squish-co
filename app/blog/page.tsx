import type { Metadata } from 'next'
import { posts } from '@/lib/posts'
import { PostCard } from '@/components/blog/post-card'

export const metadata: Metadata = {
  title: 'Blog | Little Squish Co.',
  description: 'Handmade videos, squishy care tips and news about our B Corp journey and environmental giving.',
}

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <div className="mb-12 max-w-2xl">
        <p className="mb-2 text-sm font-bold uppercase tracking-wider text-primary">The Little Squish blog</p>
        <h1 className="text-5xl font-semibold tracking-tight">Stories from our workshop</h1>
        <p className="mt-4 text-pretty text-lg text-muted-foreground">
          Handmade videos, care tips to keep your squish happy, and updates on how we are giving back to the planet.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </main>
  )
}
