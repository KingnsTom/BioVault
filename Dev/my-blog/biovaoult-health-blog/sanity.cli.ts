// lib/sanity.client.ts
import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: '4yh8v1vf',        // <- your actual project ID
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: true,                 // `false` if you want fresh data always
})
