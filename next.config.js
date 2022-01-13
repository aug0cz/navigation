const path = require('path')

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@pages': path.resolve(__dirname, './pages'),
      '@styles': path.resolve(__dirname, './styles')
    }

    return config
  }
}
