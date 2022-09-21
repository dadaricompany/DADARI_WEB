/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true
  },
  images: {
    domains: ['52.79.72.35','dadari-api.com'],
  },
}

module.exports = nextConfig
