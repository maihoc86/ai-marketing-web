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
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "api.mapbox.com",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
