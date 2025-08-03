import type { NextConfig } from 'next'

const DEPLOYMENT_REPO = '/zaki-amin.github.io'
const path = process.env.NODE_ENV === 'production' ? DEPLOYMENT_REPO : ''

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: `${path}`,
  assetPrefix: `${path}/`,
}

export default nextConfig
