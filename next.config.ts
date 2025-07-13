/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.clerk.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
    ],
  },

  serverActions: {
    bodySizeLimit: "10mb",
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
