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
        {
          type: 'image',
          options: { hotspot: true },
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
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'author.name',
      media: 'mainImage',
    },
  },
})
