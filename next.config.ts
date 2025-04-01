import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output:"export",
  images: {
    unoptimized: true, // Disable Next.js Image Optimization for static export
  },
};

export default nextConfig;
