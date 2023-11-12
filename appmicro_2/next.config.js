/** @type {import('next').NextConfig} */
const { NextFederationPlugin } = require('@module-federation/nextjs-mf')

const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "appmicro_1",
        filename: "static/chunks/remoteEntry.js",
        remotes: {
          appmicro_1: "appmicro_1@http://localhost:3000/_next/static/chunks/remoteEntry.js"
        },
        exposes: []
      })
    )

    return config
  }
}

module.exports = nextConfig
