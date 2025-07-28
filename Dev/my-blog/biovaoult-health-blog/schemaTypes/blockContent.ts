import {defineType, defineArrayMember} from 'sanity'

export default defineType({
  name: 'blockContent',
  title: 'Block Content',
  type: 'array',
  of: [
    // 🧱 Standard block
    defineArrayMember({
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'Quote', value: 'blockquote'}
      ],
      lists: [
        {title: 'Bullet', value: 'bullet'},
        {title: 'Numbered', value: 'number'}
      ],
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
          {title: 'Inline Code', value: 'code'}
        ],
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'External Link',
            fields: [
              {name: 'href', type: 'url', title: 'URL'},
              {name: 'blank', type: 'boolean', title: 'Open in new tab'}
            ]
          },
          {
            name: 'internalLink',
            type: 'object',
            title: 'Internal Link',
            fields: [
              {
                name: 'reference',
                type: 'reference',
                to: [{type: 'post'}, {type: 'page'}] // Adjust types
              }
            ]
          }
        ]
      }
    }),

    // 🖼️ Image
    defineArrayMember({
      type: 'image',
      options: {hotspot: true},
      fields: [{name: 'alt', type: 'string', title: 'Alt Text'}]
    }),

    // 📹 YouTube / Embed
    defineArrayMember({
      name: 'embed',
      title: 'Video Embed',
      type: 'object',
      fields: [
        {
          name: 'url',
          type: 'url',
          title: 'Embed URL',
          validation: Rule => Rule.uri({scheme: ['https']})
        }
      ],
      preview: {
        select: {url: 'url'},
        prepare({url}) {
          return {title: 'Video Embed', subtitle: url}
        }
      }
    }),

    // 💬 Quote Block
    defineArrayMember({
      name: 'quoteBlock',
      title: 'Quote',
      type: 'object',
      fields: [
        {name: 'quote', type: 'text', title: 'Quote'},
        {name: 'author', type: 'string', title: 'Author'},
        {name: 'role', type: 'string', title: 'Author Role (Optional)'}
      ],
      preview: {
        select: {quote: 'quote', author: 'author'},
        prepare({quote, author}) {
          return {
            title: `"${quote}"`,
            subtitle: author ? `— ${author}` : ''
          }
        }
      }
    }),

    // 🧱 Callout
    defineArrayMember({
      name: 'callout',
      title: 'Callout',
      type: 'object',
      fields: [
        {name: 'emoji', type: 'string', title: 'Emoji (e.g. 💡)'},
        {name: 'text', type: 'text', title: 'Text'},
        {
          name: 'tone',
          type: 'string',
          title: 'Tone',
          options: {
            list: [
              {title: 'Info', value: 'info'},
              {title: 'Success', value: 'success'},
              {title: 'Warning', value: 'warning'},
              {title: 'Error', value: 'error'}
            ],
            layout: 'radio'
          }
        }
      ],
      preview: {
        select: {text: 'text', tone: 'tone'},
        prepare({text, tone}) {
          return {
            title: `${tone?.toUpperCase() || 'INFO'} Callout`,
            subtitle: text
          }
        }
      }
    }),

    // 📊 Table
    defineArrayMember({
      name: 'table',
      title: 'Table',
      type: 'object',
      fields: [
        {
          name: 'rows',
          title: 'Rows',
          type: 'array',
          of: [
            defineArrayMember({
              name: 'row',
              type: 'object',
              fields: [
                {
                  name: 'cells',
                  title: 'Cells',
                  type: 'array',
                  of: [{type: 'string'}]
                }
              ],
              preview: {
                select: {cells: 'cells'},
                prepare({cells}) {
                  return {
                    title: `Row: ${cells?.join(' | ') || 'Empty'}`
                  }
                }
              }
            })
          ]
        }
      ],
      preview: {
        select: {rows: 'rows'},
        prepare({rows}) {
          return {
            title: 'Table',
            subtitle: `${rows?.length || 0} row${rows?.length === 1 ? '' : 's'}`
          }
        }
      }
    }),

    // 🧲 Lead Magnet
    defineArrayMember({
      name: 'leadMagnet',
      title: 'Lead Magnet',
      type: 'object',
      fields: [
        {name: 'headline', type: 'string', title: 'Headline'},
        {name: 'description', type: 'text', title: 'Description'},
        {name: 'buttonText', type: 'string', title: 'Button Text'},
        {name: 'buttonLink', type: 'url', title: 'Button URL'}
      ],
      preview: {
        select: {headline: 'headline'},
        prepare({headline}) {
          return {
            title: `Lead Magnet: ${headline}`
          }
        }
      }
    }),

    // 💻 Code Block
    defineArrayMember({
      type: 'code',
      options: {
        language: 'javascript',
        theme: 'github',
        withFilename: true
      }
    }),

    // 🔽 Collapsible
    defineArrayMember({
      name: 'collapsible',
      title: 'Collapsible Section',
      type: 'object',
      fields: [
        {name: 'summary', type: 'string', title: 'Summary'},
        {
          name: 'details',
          type: 'array',
          title: 'Details',
          of: [
            {type: 'block'},
            {type: 'image'},
            {type: 'callout'},
            {type: 'table'}
          ]
        }
      ],
      preview: {
        select: {summary: 'summary'},
        prepare({summary}) {
          return {
            title: `Collapsible: ${summary}`
          }
        }
      }
    }) 
  ]
})

