// lib/queries.ts
import { groq } from 'next-sanity';
import { sanityClient } from './sanity';
import { Post } from './types';

export async function getPosts(): Promise<Post[]> {
  return sanityClient.fetch(
    groq`*[_type == "post"] | order(publishedAt desc){
      _id,
      title,
      "slug": slug.current,
      "mainImage": mainImage.asset->url,
      excerpt
    }`
  );
}

export async function getPostSlugs(): Promise<{ slug: string }[]> {
  return sanityClient.fetch(
    groq`*[_type == "post" && defined(slug.current)]{
      "slug": slug.current
    }`
  );
}

export async function getPostBySlug(slug: string): Promise<Post> {
  return sanityClient.fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
      _id,
      title,
      body,
      "slug": slug.current,
      "mainImage": mainImage.asset->url,
      excerpt,
      publishedAt
    }`,
    { slug }
  );
}
