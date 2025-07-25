import { notFound } from 'next/navigation'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import { groq } from 'next-sanity'
import { createClient } from 'next-sanity'
import PortableTextBlock from '@/components/PortableText'

const client = createClient({
  projectId: '4yh8v1vf',
  dataset: 'production',
  apiVersion: '2023-07-22',
  useCdn: true,
})

const postQuery = groq`
  *[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    publishedAt,
    excerpt,
    body,
    "slug": slug.current,
    "mainImage": mainImage.asset->url
  }
`

export async function generateStaticParams() {
  const posts = await client.fetch<{ slug: { current: string } }[]>(
    groq`*[_type == "post" && defined(slug.current)][]{ slug }`
  )

  return posts.map(post => ({
    slug: post.slug.current,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await client.fetch(postQuery, { slug })

  if (!post) return {}

  return {
    title: `${post.title} | BioVault Health`,
    description: post.excerpt || 'Read this wellness post from BioVault Health.',
    openGraph: {
      title: post.title,
      description: post.excerpt || '',
      url: `https://biovaulthealth.com/blog/${slug}`,
      images: post.mainImage ? [post.mainImage] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt || '',
      images: post.mainImage ? [post.mainImage] : [],
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await client.fetch(postQuery, { slug })

  if (!post) return notFound()

  return (
    <article className="max-w-4xl mx-auto py-12 px-4 text-[#000]">
      <h1 className="text-4xl font-bold mb-4 text-[#05b9b5]">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-6">
        {new Date(post.publishedAt).toLocaleDateString()}
      </p>

      {post.mainImage && (
        <div className="mb-8">
          <Image
            src={post.mainImage}
            alt={post.title}
            width={1200}
            height={600}
            className="rounded-2xl shadow-md w-full object-cover"
          />
        </div>
      )}

      <div className="prose max-w-none prose-lg prose-slate">
        <PortableText value={post.body} />
      </div>
    </article>
  )
}
