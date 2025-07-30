/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: "/images/**",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: "/blog/:slug.html",
        destination: "/blog/:slug",
        permanent: true,
      },
    ];
  },

  async rewrites() {
    return [
      {
        source: "/blog/:path*",
        destination: "https://biovault-health-blog.vercel.app/blog/:path*",
      },
    ];
  },
};

export default nextConfig;
