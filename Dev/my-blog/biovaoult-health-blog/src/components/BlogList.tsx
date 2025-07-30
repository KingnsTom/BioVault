// components/BlogList.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { getPosts, Post } from '@/lib/sanityUtils'

export default function BlogList() {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    getPosts().then(setPosts).catch(console.error)
  }, [])

  return (
    <div className="space-y-10">
      {posts.map((post) => (
        <div key={post._id} className="border-b pb-4">
          {post.mainImage?.asset?.url && (
            <Image
              src={post.mainImage.asset.url}
              alt={post.title}
              width={800}
              height={400}
              className="rounded-lg mb-4"
            />
          )}
          <h2 className="text-2xl font-bold">
            <Link href={`/blog/${post.slug.current}`}>{post.title}</Link>
          </h2>
          <p className="text-sm text-gray-500">
            {new Date(post.publishedAt).toLocaleDateString()}
          </p>
          <p className="mt-2 text-gray-700">{post.excerpt}</p>
        </div>
      ))}
    </div>
  )
}
