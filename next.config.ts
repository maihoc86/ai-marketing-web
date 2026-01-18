import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tienphongcds.com",
      },
      {
        protocol: "https",
        hostname: "media.newweb.vn",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
