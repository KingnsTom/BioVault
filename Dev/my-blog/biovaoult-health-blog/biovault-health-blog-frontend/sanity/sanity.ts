// /lib/sanity.ts

import { createClient, type SanityClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import type { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

/**
 * Sanity client configuration
 */
export const config = {
  projectId: '4yh8v1vf',
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: true, // Faster but potentially stale data
}

/**
 * Sanity client instance
 */
export const sanityClient: SanityClient = createClient(config)

/**
 * Image URL builder instance
 */
const builder: ImageUrlBuilder = imageUrlBuilder(sanityClient)

/**
 * Get a Sanity image URL
 */
export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}
