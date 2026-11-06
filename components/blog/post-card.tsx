import Image from 'next/image'
import Link from 'next/link'
import { Play } from 'lucide-react'
import { formatDate, type Post } from '@/lib/posts'

export function PostCard({ post }: { post: Post }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg">
      <Link href={`/blog/${post.slug}`} className="relative block overflow-hidden">
        <Image
          src={post.image || '/placeholder.svg'}
          alt=""
          width={800}
          height={600}
          className="aspect-[4/3] w-full object-cover transition-transform group-hover:scale-105"
        />
        {post.isVideo && (
          <span className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
            <span className="flex size-16 items-center justify-center rounded-full bg-card/90 text-primary shadow-lg">
              <Play className="ml-1 size-7 fill-current" />
            </span>
          </span>
        )}
        <span className="absolute left-4 top-4 rounded-full bg-card/90 px-3 py-1 text-xs font-bold">{post.category}</span>
      </Link>
      <div className="flex flex-1 flex-col gap-2 p-6">
        <p className="text-xs font-semibold text-muted-foreground">
          {formatDate(post.date)} · {post.readTime}
        </p>
        <h3 className="text-xl font-semibold leading-snug">
          <Link href={`/blog/${post.slug}`} className="hover:text-primary">
            {post.title}
          </Link>
        </h3>
        <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
      </div>
    </article>
  )
}
