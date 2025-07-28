// schemas/blocks/table.ts
export default {
  title: 'Comparison Table',
  name: 'table',
  type: 'object',
  fields: [
    {
      name: 'headings',
      title: 'Table Headings',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.min(2),
    },
    {
      name: 'rows',
      title: 'Table Rows',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'row',
          fields: [
            {
              name: 'cells',
              title: 'Row Cells',
              type: 'array',
              of: [{ type: 'string' }],
              validation: (Rule) => Rule.min(2),
            },
          ],
        },
      ],
    },
  ],
}
