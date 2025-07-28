import { PortableText, type PortableTextComponents } from '@portabletext/react' 
import Image from 'next/image'
import Link from 'next/link'
import slugify from 'slugify'

const toneStyles = {
  info: { emoji: 'ℹ️', bg: 'bg-info bg-opacity-10', border: 'border-info' },
  warning: { emoji: '⚠️', bg: 'bg-warning bg-opacity-10', border: 'border-warning' },
  success: { emoji: '✅', bg: 'bg-success bg-opacity-10', border: 'border-success' },
}

const components: PortableTextComponents = {
  types: {
 image: ({ value }) => {
  const url = value?.asset?.url;
  if (!url) return null;
  return (
    <Image
      src={url}
      alt={value.alt || 'Blog image'}
      className="img-fluid full-img w-100"
      style={{ display: 'block' }}
      priority
    />
  );
},



    quoteBlock: ({ value }) => (
      <div
        className="alert alert-info border-0 shadow-sm px-4 py-3 mb-4 fst-italic"
        style={{ backgroundColor: '#05b9b5' }}
      >
        <strong className="d-block fs-5 mb-1">“{value.quote}”</strong>
        {value.author && (
          <p className="mb-0">
            <span className="fw-bold">
              — {value.author}
              {value.role && `, ${value.role}`}
            </span>
          </p>
        )}
      </div>
    ),

    callout: ({ value }) => {
      const { emoji, bg, border } = toneStyles[value.tone] || toneStyles.info
      return (
        <div className={`border-start border-4 ${border} ${bg} p-3 my-4 rounded`}>
          <div className="d-flex align-items-start gap-2">
            <span className="fs-4">{emoji}</span>
            <div>
              <h4 className="fw-semibold mb-1">{value.title}</h4>
              <p className="small text-secondary">{value.body}</p>
            </div>
          </div>
        </div>
      )
    },

    table: ({ value }) => (
      <div className="table-responsive my-4 border rounded border-secondary">
        <table className="table table-sm text-center align-middle mb-0">
          <thead className="table-light text-primary fw-semibold">
            {value.headings && (
              <tr>
                {value.headings.map((heading: string, i: number) => (
                  <th key={i} className="px-3 py-2 text-nowrap">
                    {heading}
                  </th>
                ))}
              </tr>
            )}
          </thead>
          <tbody>
            {value.rows?.map((row: any, i: number) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-light'}>
                {row.cells?.map((cell: string, j: number) => (
                  <td key={j} className="px-3 py-2" style={{ whiteSpace: 'pre-line' }}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ),



    leadMagnet: ({ value }) => (
      <div className="my-5 border border-primary rounded p-4 bg-primary bg-opacity-10 shadow">
        <div className="d-flex flex-column flex-md-row align-items-center gap-3">
          {value.image?.asset?.url && (
            <Image
              src={value.image.asset.url}
              alt={value.image.alt || 'Product'}
              width={150}
              height={150}
              className="rounded shadow-sm"
            />
          )}
          <div>
            <h3 className="fs-4 fw-bold mb-2">{value.headline}</h3>
            <p className="mb-3 text-secondary">{value.description}</p>
            <a
              href={value.buttonLink}
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              {value.buttonText}
            </a>
          </div>
        </div>
      </div>
    ),

    collapsible: ({ value }) => (
      <details className="my-4 border border-secondary rounded p-3 bg-white shadow-sm">
        <summary className="fw-semibold cursor-pointer fs-5 text-dark d-flex align-items-center gap-2">
          <span className="text-primary">➕</span> {value.summary}
        </summary>
        <div className="mt-3 text-secondary">
          <PortableText value={value.details} components={components} />
        </div>
      </details>
    ),

    embed: ({ value }) => (
      <div className="my-5 ratio ratio-16x9">
        <iframe
          src={value.url}
          title={value.title || 'Embedded content'}
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="w-100 h-100 border-0 rounded"
        />
      </div>
    ),

    code: ({ value }) => (
      <pre className="bg-dark text-white rounded p-3 my-4 overflow-auto">
        <code>{value.code}</code>
      </pre>
    ),
  },

  marks: {
    link: ({ children, value }) => {
      const isExternal = value.href?.startsWith('http')
      return (
        <Link
          href={value.href}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          target={isExternal ? '_blank' : '_self'}
          className="text-primary text-decoration-underline"
        >
          {children}
        </Link>
      )
    },
    strong: ({ children }) => <strong className="fw-bold">{children}</strong>,
    em: ({ children }) => <em className="fst-italic">{children}</em>,
    code: ({ children }) => (
      <code className="bg-light text-danger px-1 rounded">{children}</code>
    ),
  },

  block: {
    h1: ({ children }) => (
      <h1 className="display-4 fw-extrabold mt-5 mb-4 scroll-mt-5">
        {children}
      </h1>
    ),
    h2: ({ children }) => {
      let text = ''
      if (typeof children[0] === 'string') {
        text = children[0]
      } else if (Array.isArray(children[0]) && typeof children[0][0] === 'string') {
        text = children[0][0]
      } else {
        text = 'section'
      }
      const id = slugify(text, { lower: true, strict: true })
      return (
        <h2
          id={id}
          className="fs-2 fw-bold mt-5 mb-4 d-flex align-items-center gap-2 text-primary scroll-mt-5"
        >
          <span className="fs-4">📘</span>
          {children}
        </h2>
      )
    },
   h3: ({ children }) => {
  let text = ''
  if (typeof children[0] === 'string') {
    text = children[0]
  } else if (Array.isArray(children[0]) && typeof children[0][0] === 'string') {
    text = children[0][0]
  } else {
    text = 'subsection'
  }
  const id = slugify(text, { lower: true, strict: true })
  return (
    <h3
      id={id}
      className="fs-3 fw-semibold mt-4 mb-3 scroll-mt-5 text-secondary"
    >
      {children}
    </h3>
  )
},

    h4: ({ children }) => (
      <h4 className="fs-4 fw-medium mt-3 mb-2">{children}</h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-start border-4 border-primary ps-3 fst-italic text-secondary my-4">
        {children}
      </blockquote>
    ),
    normal: ({ children }) => (
      <p className="fs-6 lh-lg text-secondary mb-3">{children}</p>
    ),
  },

  list: {
    bullet: ({ children }) => (
      <ul className="list-disc ps-4 mb-4 fs-6 text-secondary">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal ps-4 mb-4 fs-6 text-secondary">{children}</ol>
    ),
  },

  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },
}

type Props = {
  value: any
}

export default function PortableTextBlock({ value }: Props) {
  return (
    <div className="mx-auto px-3" style={{ maxWidth: '900px' }}>
      <PortableText value={value} components={components} />
    </div>
  )
}
