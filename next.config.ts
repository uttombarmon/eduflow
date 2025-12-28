import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.freepik.com",
      },
      {
        protocol: "https",
        hostname: "**.w3schools.com",
      },
    ],
  },
};

export default nextConfig;
