/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cmh.api.aitrc.com.np",
      },
    ],
  },
  webpack: (config) => {
    config.resolve.alias.canvas = false;

    return config;
  },
  devIndicators: {
    buildActivity: false,
  },
};

module.exports = nextConfig;
