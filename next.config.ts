import type { NextConfig } from 'next'

const repoName = 'zaki-amin.github.io'; // Set this to your repo name

const nextConfig: NextConfig = {
  output: 'export',
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
}

module.exports = nextConfig

export default nextConfig
