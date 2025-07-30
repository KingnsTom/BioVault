import { createClient, groq } from "next-sanity";
import { Post } from "./types";

const client = createClient({
  projectId: "4yh8v1vf",
  dataset: "production",
  apiVersion: "2023-07-22",
  useCdn: true,
});

// Get all posts (for homepage or blog list)
export async function getPosts(): Promise<Post[]> {
  return await client.fetch(
    groq`*[_type == "post"] | order(publishedAt desc){
      _id,
      title,
      "slug": slug.current,
      "mainImage": mainImage.asset->url,
      excerpt,
      publishedAt
    }`
  );
}

// Get a single post by slug (for dynamic blog/[slug] route)
export async function getPostBySlug(slug: string): Promise<Post | null> {
  return await client.fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
      _id,
      title,
      "slug": slug.current,
      "mainImage": mainImage.asset->url,
      excerpt,
      body,
      publishedAt
    }`,
    { slug }
  );
}
