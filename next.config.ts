import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // static export for Cloudflare Pages
  images: {
    unoptimized: true, // required for static export
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "prium.github.io" },
    ],
  },
};

export default nextConfig;
