/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: ["dvago-assets.s3.ap-southeast-1.amazonaws.com"],
  },
};

module.exports = nextConfig;
