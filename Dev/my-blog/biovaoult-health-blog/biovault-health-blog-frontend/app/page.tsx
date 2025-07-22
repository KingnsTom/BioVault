// app/page.tsx
import { getPosts } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const posts = await getPosts();

  return (
    <>
      {/* SEO + Meta */}
      <head>
        <title>BioVault Health Blog | Natural Wellness Guides & Tips</title>
        <meta name="description" content="BioVault Health Blog provides expert-backed wellness tips, supplement reviews, and holistic health strategies to help you thrive." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://biovault-health.vercel.app/blog" />
      </head>

      <main className="bg-[#eae8e5] min-h-screen text-[#000]">
        {/* Hero Section */}
        <section className="text-center py-14 px-4 md:px-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#05b9b5]">BioVault Health Blog</h1>
          <p className="text-lg md:text-xl text-gray-700">
            Backed by science, inspired by nature — your weekly dose of wellness breakthroughs 🌿
          </p>
        </section>

        {/* Posts Grid */}
        <section className="max-w-6xl mx-auto px-4 pb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post) => (
            <Link key={post._id} href={`/posts/${post.slug}`} className="group block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="relative w-full h-60">
                <Image
                  src={post.mainImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5 space-y-2">
                <span className="text-sm uppercase font-semibold text-[#05b9b5] tracking-wide">Wellness</span>
                <h2 className="text-xl font-bold group-hover:text-[#05b9b5] transition-colors">{post.title}</h2>
                <p className="text-sm text-gray-700 line-clamp-3">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </section>
      </main>
    </>
  );
}
