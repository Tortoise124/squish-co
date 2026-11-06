import Link from 'next/link'
import { posts } from '@/lib/posts'
import { PostCard } from '@/components/blog/post-card'

export function BlogPreview() {
  return (
    <section aria-labelledby="blog-title" className="bg-secondary/50 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-primary">From the workshop</p>
            <h2 id="blog-title" className="text-4xl font-semibold tracking-tight md:text-5xl">
              Squish stories
            </h2>
          </div>
          <Link href="/blog" className="font-bold text-primary underline-offset-4 hover:underline">
            See all posts
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
}
