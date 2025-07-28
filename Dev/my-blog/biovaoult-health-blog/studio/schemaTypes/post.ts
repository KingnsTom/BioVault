// schemas/post.ts
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required().min(10).max(120),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      description: 'Short summary for SEO and preview cards.',
      validation: Rule => Rule.required().max(160),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'author' }],
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'category' }] }],
    }),
    defineField({
      name: 'affiliateUrl',
      title: 'Affiliate URL',
      type: 'url',
      description: 'Optional link to your affiliate product',
      validation: Rule => Rule.uri({ scheme: ['http', 'https'] }),
    }),
    defineField({
      name: 'body',
      title: 'Body Content',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'image', options: { hotspot: true } },
        {
          name: 'youtube',
          title: 'YouTube Video',
          type: 'object',
          fields: [
            {
              name: 'url',
              title: 'YouTube URL',
              type: 'url',
              validation: Rule => Rule.uri({ scheme: ['https'] }),
            },
          ],
          preview: {
            select: {
              url: 'url',
            },
            prepare(selection) {
              return {
                title: `YouTube Video`,
                subtitle: selection.url,
              }
            },
          },
        },
        {
          name: 'callout',
          title: 'Callout Box',
          type: 'object',
          fields: [
            { name: 'title', type: 'string', title: 'Title' },
            {
              name: 'tone',
              type: 'string',
              title: 'Tone',
              options: {
                list: [
                  { title: 'Info', value: 'info' },
                  { title: 'Success', value: 'success' },
                  { title: 'Warning', value: 'warning' },
                ],
                layout: 'radio',
              },
              initialValue: 'info',
            },
            { name: 'body', type: 'text', title: 'Body' },
          ],
        },
        {
          name: 'leadMagnet',
          title: 'Lead Magnet',
          type: 'object',
          fields: [
            { name: 'headline', type: 'string', title: 'Headline' },
            { name: 'description', type: 'text', title: 'Description' },
            { name: 'buttonText', type: 'string', title: 'Button Text' },
            { name: 'buttonLink', type: 'url', title: 'Button Link' },
          ],
        },
        {
          name: 'code',
          title: 'Code Block',
          type: 'object',
          fields: [
            { name: 'language', type: 'string', title: 'Language' },
            { name: 'code', type: 'text', title: 'Code' },
          ],
        },
      ],
      validation: Rule => Rule.required().min(1),
    }),
    defineField({
      name: 'seo',
      title: 'SEO Meta Tags',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Meta Title',
          type: 'string',
          validation: Rule => Rule.max(60),
        }),
        defineField({
          name: 'description',
          title: 'Meta Description',
          type: 'text',
          validation: Rule => Rule.max(160),
        }),
      ],
    }),

    // ===== Add FAQ Fields Here =====
    defineField({
      name: 'faqHeading',
      title: 'FAQ Heading',
      type: 'string',
      description: 'Title for the FAQ section (e.g., Frequently Asked Questions)',
    }),

    defineField({
      name: 'faq',
      title: 'FAQ Items',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'faqItem',
          type: 'object',
          title: 'FAQ Item',
          fields: [
            defineField({
              name: 'question',
              type: 'string',
              title: 'Question',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'answer',
              type: 'text',
              title: 'Answer',
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
      ],
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .error('At least one FAQ item is required')
          .custom((faqs) => {
            if (!faqs) return true;
            const qs = faqs.map((f) => f.question?.trim());
            const duplicates = qs.filter((q, i) => q && qs.indexOf(q) !== i);
            return duplicates.length > 0
              ? 'Duplicate question found'
              : true;
          }),
    }),
  ],


  preview: {
    select: {
      title: 'title',
      subtitle: 'author.name',
      media: 'mainImage',
    },
  },
})
