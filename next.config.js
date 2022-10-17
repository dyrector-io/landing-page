/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate')

const nextConfig = {
  ...nextTranslate(),
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    dirs: ['src'],
  },
}

module.exports = nextConfig
