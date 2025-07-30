import React from 'react'
import { PortableText } from '@portabletext/react'
import Image from 'next/image' // or use regular <img> if not using Next.js

// Helper to get Sanity image URLs (replace with your helper if you have one)
const urlFor = (source) => {
  // Import and configure @sanity/image-url in your project for real use
  return source?.asset?._ref
    ? `https://cdn.sanity.io/images/YOUR_PROJECT_ID/YOUR_DATASET/${source.asset._ref.replace(
        'image-',
        ''
      ).replace('-jpg', '.jpg').replace('-png', '.png')}`
    : ''
}

// Custom components for Portable Text
const components = {
  types: {
    image: ({ value }) => (
      <figure className="my-6">
        <Image
          src={urlFor(value)}
          alt={value.alt || 'Blog post image'}
          width={800}
          height={450}
          className="rounded-lg object-cover"
        />
        {value.caption && (
          <figcaption className="mt-2 text-sm text-gray-500">{value.caption}</figcaption>
        )}
      </figure>
    ),
    youtube: ({ value }) => {
      if (!value.url) return null
      // Extract video ID (basic)
      const videoId = value.url.split('v=')[1]?.split('&')[0]
      return videoId ? (
        <div className="my-8 aspect-w-16 aspect-h-9">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            frameBorder="0"
            allowFullScreen
            title="YouTube video"
            className="w-full h-full rounded-lg"
          />
        </div>
      ) : null
    },
    callout: ({ value }) => {
      const tones = {
        info: 'bg-blue-100 border-blue-400 text-blue-700',
        success: 'bg-green-100 border-green-400 text-green-700',
        warning: 'bg-yellow-100 border-yellow-400 text-yellow-700',
      }
      const toneClass = tones[value.tone] || tones.info

      return (
        <div
          className={`my-6 p-4 border-l-4 rounded ${toneClass} prose prose-sm max-w-none`}
          role="alert"
        >
          {value.title && <h4 className="font-semibold mb-1">{value.title}</h4>}
          <p>{value.body}</p>
        </div>
      )
    },
    leadMagnet: ({ value }) => (
      <div className="my-8 p-6 bg-gray-100 rounded-lg text-center prose prose-sm max-w-none">
        {value.headline && <h3 className="font-bold mb-2">{value.headline}</h3>}
        {value.description && <p className="mb-4">{value.description}</p>}
        {value.buttonText && value.buttonLink && (
          <a
            href={value.buttonLink}
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            {value.buttonText}
          </a>
        )}
      </div>
    ),
    code: ({ value }) => (
      <pre className="my-6 p-4 bg-gray-900 text-green-400 rounded overflow-x-auto prose-sm max-w-none">
        <code>{value.code}</code>
      </pre>
    ),
  },
  block: {
    // Customize block styles if you want
    h1: ({ children }) => <h1 className="text-3xl font-bold my-6">{children}</h1>,
    h2: ({ children }) => <h2 className="text-2xl font-semibold my-5">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl font-semibold my-4">{children}</h3>,
    normal: ({ children }) => <p className="my-3 leading-relaxed">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-400 pl-4 italic my-6">{children}</blockquote>
    ),
  },
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href?.startsWith('/') ? 'noopener noreferrer' : undefined
      return (
        <a
          href={value.href}
          rel={rel}
          target={value.href?.startsWith('http') ? '_blank' : undefined}
          className="text-blue-600 hover:underline"
        >
          {children}
        </a>
      )
    },
  },
}

const PostBody = ({ content }) => {
  return (
    <article className="prose prose-lg max-w-none mx-auto">
      <PortableText value={content} components={components} />
    </article>
  )
}

export default PostBody
