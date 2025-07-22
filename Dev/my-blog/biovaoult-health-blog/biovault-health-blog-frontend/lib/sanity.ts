// /lib/sanity.ts (or /sanity/lib/sanity.ts depending on your structure)
import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

// ✅ Replace these with your own project details
const config = {
  projectId: '4yh8v1vf',       // e.g., 'abc123'
  dataset: 'production',              // or whatever dataset you're using
  apiVersion: '2023-01-01',           // use a fixed date for consistency
  useCdn: true,                       // `true` for public data; `false` for draft mode
}

// 👉 Client instance
export const sanityClient = createClient(config)

// 👉 For fetching images
const builder = imageUrlBuilder(sanityClient)
export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}
