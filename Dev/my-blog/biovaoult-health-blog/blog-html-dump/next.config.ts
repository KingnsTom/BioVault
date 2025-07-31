import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "biovaulthealth.com",
        pathname: "/**", // allow all image paths
      },
    ],
  },
  env: {
    SC_DISABLE_SPEEDY: "false",
  },
}

export default nextConfig
