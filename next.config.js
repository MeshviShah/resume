module.exports = {
  reactStrictMode: true,
  output: 'export',
  distDir: 'out', // Explicitly set output directory
  basePath: process.env.NODE_ENV === 'production' ? '/resume' : '',
  // Add these if you have images
  images: {
    unoptimized: true, // Required for static export
  }
 
}
