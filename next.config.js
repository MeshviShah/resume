/** @type {import('next').NextConfig} */
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // ← Add this for static export
  basePath: process.env.NODE_ENV === 'production' ? '/resume' : '',
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
