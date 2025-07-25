// lib/types.ts
export interface Post {
  _id: string;
  title: string;
  slug: string;
  mainImage?: string;
  excerpt?: string;
  body?: any;
  publishedAt?: string;
}
