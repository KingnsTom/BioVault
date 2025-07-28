import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "", // leave blank unless you're using a non-standard port
        pathname: "/images/**", // covers all Sanity project image paths
      },
    ],
  },
};

export default nextConfig;
