'use client'

import { useState } from 'react'
import { TableOfContents } from './TableOfContents'

type Heading = {
  text: string
  level: 'h2' | 'h3'
}

type TocToggleProps = {
  headings: Heading[]
}

export default function TocToggle({ headings }: TocToggleProps) {
  const [tocOpen, setTocOpen] = useState(false)

  return (
    <div className="mb-6">
      <button
        onClick={() => setTocOpen(!tocOpen)}
        className="md:hidden bg-[#05b9b5] text-white px-4 py-2 rounded mb-4 font-medium"
        aria-expanded={tocOpen}
        aria-controls="toc-list"
      >
        {tocOpen ? 'Hide' : 'Show'} Table of Contents
      </button>

      <div className={`${tocOpen ? 'block' : 'hidden'} md:block`}>
        <TableOfContents headings={headings} />
      </div>
    </div>
  )
}
