'use client'

import { useMemo, useState } from 'react'
import slugify from 'slugify'

type Heading = {
  text: string
  level: 'h2' | 'h3'
}

type TableOfContentsProps = {
  headings: Heading[]
}

export function TableOfContents({ headings }: TableOfContentsProps) {
  const [isOpen, setIsOpen] = useState(false)

  const tocItems = useMemo(() => {
    const items: (Heading & { children: Heading[] })[] = []
    headings.forEach(heading => {
      if (heading.level === 'h2') {
        items.push({ ...heading, children: [] })
      } else if (heading.level === 'h3') {
        if (items.length === 0) {
          items.push({ text: 'Misc', level: 'h2', children: [] })
        }
        items[items.length - 1].children.push(heading)
      }
    })
    return items
  }, [headings])

  return (
    <nav className="table-of-contents" aria-label="Table of contents">
      <button
        id="toggle-toc"
        className="md:hidden mb-4"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="toc-list"
      >
        {isOpen ? 'Hide' : 'Show'} Table of Contents
      </button>

      <div id="toc-list" className={`${!isOpen ? 'hidden' : ''} md:block`}>
        <h2 className="hidden md:block text-lg font-semibold mb-3">Table of Contents</h2>
        <ul>
          {tocItems.map(item => {
            const id = slugify(item.text, { lower: true, strict: true })
            return (
              <li key={id} className="mb-2">
                <a href={`#${id}`} className="font-medium text-[#017f7c] hover:underline">
                  {item.text}
                </a>
                {item.children.length > 0 && (
                  <ul className="ml-4 mt-1">
                    {item.children.map(child => {
                      const childId = slugify(child.text, { lower: true, strict: true })
                      return (
                        <li key={childId} className="mb-1">
                          <a
                            href={`#${childId}`}
                            className="text-sm text-[#017f7c] hover:underline"
                          >
                            {child.text}
                          </a>
                        </li>
                      )
                    })}
                  </ul>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
