import { groq } from 'next-sanity';
import { sanityClient } from './sanity';
import { Post } from './types';

// 🧩 Reusable GROQ fragments
const postFields = groq`
  _id,
  "status": select(_originalId in path("drafts.**") => "draft", "published"),
  "title": coalesce(title, "Untitled"),
  "slug": slug.current,
  excerpt,
  coverImage,
  "date": coalesce(date, _updatedAt),
  "author": author->{firstName, lastName, picture},
`;

const linkReference = groq`
  _type == "link" => {
    "page": page->slug.current,
    "post": post->slug.current
  }
`;

const linkFields = groq`
  link {
    ...,
    ${linkReference}
  }
`;

// 🧵 Queries
const allPostsQuery = groq`
  *[_type == "post" && defined(slug.current)] | order(date desc, _updatedAt desc) {
    ${postFields}
  }
`;

const morePostsQuery = groq`
  *[_type == "post" && _id != $skip && defined(slug.current)] | order(date desc, _updatedAt desc)[0...$limit] {
    ${postFields}
  }
`;

const postQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    content[] {
      ...,
      markDefs[] {
        ...,
        ${linkReference}
      }
    },
    ${postFields}
  }
`;

const postSlugsQuery = groq`
  *[_type == "post" && defined(slug.current)] {
    "slug": slug.current
  }
`;

const pagesSlugsQuery = groq`
  *[_type == "page" && defined(slug.current)] {
    "slug": slug.current
  }
`;

const getPageQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    _id,
    _type,
    name,
    slug,
    heading,
    subheading,
    "pageBuilder": pageBuilder[] {
      ...,
      _type == "callToAction" => {
        ${linkFields}
      },
      _type == "infoSection" => {
        content[] {
          ...,
          markDefs[] {
            ...,
            ${linkReference}
          }
        }
      }
    }
  }
`;

const sitemapQuery = groq`
  *[_type == "page" || _type == "post" && defined(slug.current)] | order(_type asc) {
    "slug": slug.current,
    _type,
    _updatedAt,
  }
`;

const settingsQuery = groq`
  *[_type == "settings"][0]
`;

// 🧠 Fetch functions

export async function getPosts(): Promise<Post[]> {
  return sanityClient.fetch(allPostsQuery);
}

export async function getMorePosts(skip: string, limit: number): Promise<Post[]> {
  return sanityClient.fetch(morePostsQuery, { skip, limit });
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  return sanityClient.fetch(postQuery, { slug });
}

export async function getPostSlugs(): Promise<{ slug: string }[]> {
  return sanityClient.fetch(postSlugsQuery);
}

export async function getPagesSlugs(): Promise<{ slug: string }[]> {
  return sanityClient.fetch(pagesSlugsQuery);
}

export async function getPageBySlug(slug: string): Promise<any> {
  return sanityClient.fetch(getPageQuery, { slug });
}

export async function getSitemap(): Promise<any[]> {
  return sanityClient.fetch(sitemapQuery);
}

export async function getSettings(): Promise<any> {
  return sanityClient.fetch(settingsQuery);
}
