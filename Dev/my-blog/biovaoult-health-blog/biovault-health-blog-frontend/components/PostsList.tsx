import React from 'react';

const posts = [
  {
    _id: "1",
    title: "5‑Minute Mindfulness: Mental Reset Techniques for the Workplace",
    excerpt: "Discover simple, effective techniques to reduce stress and refocus in just minutes—perfect for busy professionals.",
    mainImage: {
      src: "/Mindfulness-in-the-Workplace.webp",
      className: "w-full h-48 object-cover rounded-t"
    }
  },
  {
    _id: "2",
    title: "The Gut‑Brain Connection: How Digestion Impacts Mental Clarity",
    excerpt: "Did you know your gut health affects your mood and focus? Here’s how to reset your digestion naturally.",
    mainImage: {
      src: "/gut-brain-connection-concept.webp",
      className: "w-full h-48 object-cover rounded-t"
    }
  },
  // Add more posts with this structure...
];

function PostsList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {posts.map((post) => (
        <div
          key={post._id}
          className="bg-white shadow-md rounded overflow-hidden flex flex-col h-full"
        >
          <div className="relative">
            <img
              src={post.mainImage.src}
              alt={post.title}
              className={post.mainImage.className}
            />
          </div>
          <div className="p-4 flex flex-col flex-grow">
            <h2 className="text-lg font-semibold mb-2">{post.title}</h2>
            <p className="text-sm text-gray-700 flex-grow">{post.excerpt}</p>
            <a
              href={`/blog/${post._id}`}
              className="mt-3 text-teal-600 font-medium hover:underline"
            >
              Read More »
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostsList;
