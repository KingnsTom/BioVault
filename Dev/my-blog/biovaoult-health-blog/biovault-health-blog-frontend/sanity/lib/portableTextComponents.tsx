import type { PortableTextComponents } from '@portabletext/react'
import Image from 'next/image'
import Link from 'next/link'

export const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?.url) return null
      return (
        <div className="my-4">
          <Image
            src={value.asset.url}
            alt={value.alt || 'Blog image'}
            width={800}
            height={500}
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>
      )
    }
  },
  marks: {
    link: ({ children, value }) => {
      const rel = value.href.startsWith('http') ? 'noopener noreferrer' : undefined
      return (
        <Link
          href={value.href}
          rel={rel}
          target={value.href.startsWith('http') ? '_blank' : '_self'}
          className="underline text-primary hover:text-secondary transition-colors"
        >
          {children}
        </Link>
      )
    }
  },
  block: {
    h1: ({ children }) => <h1 className="text-3xl font-bold mt-6 mb-2">{children}</h1>,
    h2: ({ children }) => <h2 className="text-2xl font-semibold mt-5 mb-2">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl font-semibold mt-4 mb-2">{children}</h3>,
    normal: ({ children }) => <p className="text-base leading-relaxed mb-4">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-400 pl-4 italic text-gray-600 my-4">
        {children}
      </blockquote>
    )
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc ml-6 mb-4">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal ml-6 mb-4">{children}</ol>
  },
  listItem: {
    bullet: ({ children }) => <li className="mb-1">{children}</li>,
    number: ({ children }) => <li className="mb-1">{children}</li>
  }
}
