// next.config.js
const {withContentlayer} = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    css: [
        '@/styles/main.css',
    ]
}

module.exports = withContentlayer(nextConfig)