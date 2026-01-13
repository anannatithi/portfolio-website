/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  basePath: '/portfolio-website',
  assetPrefix: '/portfolio-website/',
  trailingSlash: true,
}

export default nextConfig
