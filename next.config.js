/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  // Required for GitHub Pages (Project Pages)
  basePath: "/portfolio-website",

  // CRITICAL: ensures index.html generation
  trailingSlash: true,

  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
