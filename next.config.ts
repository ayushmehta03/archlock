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
  eslint: {
    ignoreDuringBuilds: true,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self';",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://cdn.jsdelivr.net https://storage.googleapis.com https://tfhub.dev;",
              "connect-src 'self' https://storage.googleapis.com https://tfhub.dev;",
              "style-src 'self' 'unsafe-inline';",
              "img-src * blob: data:;",
              "font-src 'self';",
            ].join(" "),
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
