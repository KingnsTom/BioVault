// lib/live.ts
import { defineLive } from 'next-sanity';
import { client } from './client';
import { token } from './token'; // Make sure this is secure and not exposed client-side

export const { sanityFetch, SanityLive } = defineLive({
  client,
  serverToken: token,
  browserToken: token, // Required only for standalone previews and live refresh
});
