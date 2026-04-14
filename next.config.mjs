/** @type {import("next").NextConfig} */
const nextConfig = {
  generateBuildId: async () => {
    // Force unique build ID every time - prevents Vercel from serving cached pages
    return `build-${Date.now()}`;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};
export default nextConfig;