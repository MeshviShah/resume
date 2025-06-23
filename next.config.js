// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Static export mode
  trailingSlash: true, // Recommended for GitHub Pages
  images: {
    unoptimized: true // Required for static exports
  },
  // Add this if you use next/font
  experimental: {
    fontLoaders: [
      { loader: '@next/font/web', options: { subsets: ['latin'] } }
    ]
  }
}

module.exports = nextConfig
