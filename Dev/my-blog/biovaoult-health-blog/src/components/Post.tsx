'use client'

import Image from 'next/image'
import Link from 'next/link'
import { PortableText } from '@portabletext/react'

type PostProps = {
  post: {
    title: string
    publishedAt: string
    author?: { name: string }
    mainImage?: string
    body: any[]
    slug: string
  }
  prevPost?: { title: string; slug: string }
  nextPost?: { title: string; slug: string }
  index: number
}

export default function Post({ post, prevPost, nextPost, index }: PostProps) {
  return (
    <article className="blog-post">
      {/* Title */}
      <h1>{post.title}</h1>

      {/* Meta */}
      <div className="text-muted mb-4 small">
        {post.author?.name && <p>By {post.author.name}</p>}
        <time dateTime={post.publishedAt}>
          {new Date(post.publishedAt).toLocaleDateString()}
        </time>
      </div>

      {/* Main Image */}
      {post.mainImage && (
        <div className="mb-4">
          <Image
            src={post.mainImage}
            alt={post.title}
            width={1200}
            height={600}
            className="img-fluid rounded-3 shadow-sm"
          />
        </div>
      )}

      {/* Post Body Content */}
      <div>
        <PortableText value={post.body} components={{}} />
      </div>

      {/* Pagination */}
      {(prevPost || nextPost) && (
        <nav
          aria-label="Blog post navigation"
          className="d-flex justify-content-between align-items-center mt-5 pt-4 border-top small text-info"
        >
          <div>
            {prevPost && (
              <Link href={`/blog/${prevPost.slug}`} className="text-decoration-none" rel="prev">
                ← {prevPost.title}
              </Link>
            )}
          </div>
          <span className="text-muted">[{index + 1}]</span>
          <div>
            {nextPost && (
              <Link href={`/blog/${nextPost.slug}`} className="text-decoration-none" rel="next">
                {nextPost.title} →
              </Link>
            )}
          </div>
        </nav>
      )}
    </article>
  )
}
