import { notFound } from 'next/navigation'
import { groq } from 'next-sanity'
import Image from 'next/image'
import Link from 'next/link'
import { createClient } from 'next-sanity'
import { PortableText, type PortableTextComponents } from '@portabletext/react'

import Footer from '@/components/Footer'
import { extractHeadings } from '@/lib/extractHeadings'
import TocToggle from '@/components/TocToggle'
import Cta from '@/components/Cta'
import Faq from '@/components/FAQ'

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
    ctaBlock,
    "slug": slug.current,
    "mainImage": mainImage.asset->url,
    faq,
    faqHeading
  }
`

const allPostsQuery = groq`
  *[_type == "post"] | order(publishedAt asc) {
    title,
    "slug": slug.current
  }
`

export async function generateStaticParams() {
  const posts = await client.fetch<{ slug: { current: string } }[]>(
    groq`*[_type == "post" && defined(slug.current)][]{ slug }`
  )
  return posts.map(post => ({ slug: post.slug.current }))
}
export async function generateMetadata(
  context: { params: { slug: string } }
) {
  const { params } = context; // First, awaitable context
  const { slug } = params;   // Safe to destructure now

  const post = await client.fetch(postQuery, { slug });

  if (!post) return {};

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
  };
}


const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }) =>
      value?.asset?.url && (
        <div className="my-6 overflow-hidden rounded-2xl shadow-md">
          <Image
            src={value.asset.url}
            alt={value.alt || 'Image'}
            width={1200}
            height={800}
            className="w-full h-auto object-cover"
          />
        </div>
      ),
  },
  block: {
    h1: ({ children }) => <h1 className="text-3xl font-bold mt-8 mb-4 text-[#05b9b5]">{children}</h1>,
    h2: ({ children }) => <h2 className="text-2xl font-semibold mt-6 mb-3 text-[#05b9b5]">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl font-semibold mt-6 mb-2 text-[#05b9b5]">{children}</h3>,
    normal: ({ children }) => <p className="mb-5 leading-relaxed text-base">{children}</p>,
  },
  marks: {
    link: ({ children, value }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#05b9b5] underline hover:text-black transition"
      >
        {children}
      </a>
    ),
    strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc ml-6 mb-4 space-y-2">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal ml-6 mb-4 space-y-2">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="text-base leading-snug">{children}</li>,
    number: ({ children }) => <li className="text-base leading-snug">{children}</li>,
  },
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const post = await client.fetch(postQuery, { slug })
  if (!post) return notFound()

  const allPosts = await client.fetch(allPostsQuery)
  const currentIndex = allPosts.findIndex(p => p.slug === slug)
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null

  const headings = extractHeadings(post.body || [])

  return (
    <>
      <article className="blog-post max-w-4xl mx-auto py-12 px-4 text-black">
        {/* Title & Date */}
        <h1 className="text-4xl font-bold mb-4 text-[#05b9b5]">{post.title}</h1>
        <p className="text-sm text-gray-500 mb-4">
          {new Date(post.publishedAt).toLocaleDateString()}
        </p>

        {/* Featured Image */}
        {post.mainImage && (
          <div className="mb-10">
            <Image
              src={post.mainImage}
              alt={post.title}
              width={1200}
              height={600}
              className="rounded-2xl shadow-md w-full object-cover"
            />
          </div>
        )}

        {/* Table of Contents */}
        {headings.length > 0 && (
          <div className="my-5">
            <TocToggle headings={headings} />
          </div>
        )}

        {/* Body Content */}
        <div className="blog-post">
          <PortableText value={post.body} components={portableTextComponents} />
        </div>

        {/* Call To Action */}
        {post.ctaBlock && <Cta block={post.ctaBlock} index={0} />}

        {/* FAQ Section */}
        {post.faq?.length > 0 && (
          <Faq
            faqs={post.faq}
            heading={post.faqHeading ?? 'Frequently Asked Questions'}
          />
        )}

        {/* Pagination */}
        <nav className="mt-5 mb-5" aria-label="Blog post navigation">
          <ul className="pagination justify-content-center">
            <li className={`page-item ${!prevPost ? 'disabled' : ''}`} aria-disabled={!prevPost}>
              {prevPost ? (
                <Link
                  href={`/blog/${prevPost.slug}`}
                  className="page-link brand-page-link"
                  rel="prev"
                >
                  ← Previous
                </Link>
              ) : (
                <span className="page-link brand-page-link">← Previous</span>
              )}
            </li>
            <li className="page-item disabled" aria-disabled="true">
              <span className="page-link brand-page-link">{currentIndex + 1}</span>
            </li>
            <li className={`page-item ${!nextPost ? 'disabled' : ''}`} aria-disabled={!nextPost}>
              {nextPost ? (
                <Link
                  href={`/blog/${nextPost.slug}`}
                  className="page-link brand-page-link"
                  rel="next"
                >
                  Next →
                </Link>
              ) : (
                <span className="page-link brand-page-link">Next →</span>
              )}
            </li>
          </ul>
        </nav>
      </article>

      <Footer />
    </>
  )
}
