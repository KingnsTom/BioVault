// lib/types.ts

export type Author = {
  firstName: string;
  lastName: string;
  picture?: {
    asset: {
      _ref: string;
    };
  };
};

export type Post = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  coverImage?: any;
  date?: string;
  status?: 'draft' | 'published';
  author?: Author;
  content?: any; // You can type this further if needed
};
