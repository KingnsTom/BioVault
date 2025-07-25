// lib/getPosts.ts
import { groq } from 'next-sanity'
import { sanityClient } from './sanity'
import { Post } from './types'

export async function getPosts(): Promise<Post[]> {
  return await sanityClient.fetch(
    groq`*[_type == "post"] | order(publishedAt desc){
      _id,
      title,
      "slug": slug.current,
      "mainImage": mainImage.asset->url,
      excerpt
    }`
  )
}
