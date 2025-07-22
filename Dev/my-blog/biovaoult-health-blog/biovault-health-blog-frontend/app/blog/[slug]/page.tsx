import sanityClient from '@/lib/sanity'
import { notFound } from 'next/navigation'
import { groq } from 'next-sanity'
import { PortableText } from '@portabletext/react'

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  publishedAt,
  body,
  slug,
  mainImage,
  excerpt
}`

export async function generateStaticParams() {
  const slugs = await sanityClient.fetch<{ slug: { current: string } }[]>(
    groq`*[_type == "post" && defined(slug.current)][]{ slug }`
  )

  return slugs.map((post) => ({
    slug: post.slug.current,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await sanityClient.fetch(query, { slug: params.slug })

  if (!post) return {}

  return {
    title: `${post.title} | BioVault Health`,
    description: post.excerpt || 'Read this post on BioVault Health blog',
    openGraph: {
      title: post.title,
      description: post.excerpt || '',
      url: `https://biovaulthealth/blog/${params.slug}`,
    },
    twitter: {
      card: 'summary',
      title: post.title,
      description: post.excerpt || '',
    },
  }
}


export default async function BlogPostPage({
  params,
}: {
  params: { slug: string }
}) {
  const post = await sanityClient.fetch(query, { slug: params.slug })

  if (!post) return notFound()

  return (
    <article className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-6">
        {new Date(post.publishedAt).toDateString()}
      </p>
      <PortableText value={post.body} />
    </article>
  )
}
