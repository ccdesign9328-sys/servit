import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "framerusercontent.com",
        pathname: "/images/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/servithome",
      },
    ];
  },
};

export default nextConfig;
