import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "carsguide-res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "www.megautos.com",
      },
      {
        protocol: "https",
        hostname: "static0.carbuzzimages.com",
      },
      {
        protocol: "https",
        hostname: "www.hdcarwallpapers.com",
      },
    ],
  },
};

export default nextConfig;
