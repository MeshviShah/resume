/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  distDir: 'out', // Explicitly set output directory
  // Add these if you have images
  images: {
    unoptimized: true, // Required for static export
  }
}

module.exports = nextConfig
