/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.clerk.com",
        pathname: "/**", // Clerk images
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**", // Cloudinary uploads
      },
    ],
  },
};

module.exports = nextConfig;
