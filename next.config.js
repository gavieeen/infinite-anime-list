/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
  generateStaticParams: async () => {
    // Routes
    return [
      { path: '/', static: true },
      // Potential other routes as needed
    ];
  },
};

module.exports = nextConfig;
