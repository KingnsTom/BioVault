// sanity.ts
import { createClient } from 'next-sanity'

export const sanityClient = createClient({
  projectId: 'xq1ttmr8',  // ⬅️ Replace with your actual ID
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: true,
})
