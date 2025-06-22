module.exports = {
  reactStrictMode: true,
  output: 'export',
  distDir: 'out', // Explicitly set output directory
  // Add these if you have images
  images: {
    unoptimized: true, // Required for static export
  }
  // Add if deploying to project site (username.github.io/repo)
  basePath: '/resume',
  assetPrefix: '/resume/'
}
