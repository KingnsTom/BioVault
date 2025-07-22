// lib/queries.ts
export const allPostsQuery = `*[_type == "post"] | order(_createdAt desc) {
  _id,
  title,
  slug,
  publishedAt,
  "authorName": author->name,
  mainImage {
    asset->{
      url
    }
  },
  body
}`

export const singlePostQuery = (slug: string) => `
  *[_type == "post" && slug.current == "${slug}"][0]{
    title,
    slug,
    publishedAt,
    "authorName": author->name,
    mainImage {
      asset->{
        url
      }
    },
    body
  }
`
