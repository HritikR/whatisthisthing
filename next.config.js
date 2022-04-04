/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['preview.redd.it', 'i.redd.it', 'imgur.com'],
  },
}

module.exports = nextConfig
