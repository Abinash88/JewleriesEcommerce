/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "cmh.api.aitrc.com.np", "img.freepik.com"
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
