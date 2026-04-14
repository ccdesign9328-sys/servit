import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
