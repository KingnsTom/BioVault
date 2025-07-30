// lib/sanityUtils.ts
import { groq } from 'next-sanity'
import client from './sanity'

export type Post = {
  _id: string
  title: string
  slug: { current: string }
  publishedAt: string
  excerpt?: string
  mainImage?: {
    asset: {
      url: string
    }
  }
}

export async function getPosts(): Promise<Post[]> {
  return await client.fetch(
    groq`*[_type == "post"]{
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      mainImage {
        asset->{
          url
        }
      }
    } | order(publishedAt desc)`
  )
}
