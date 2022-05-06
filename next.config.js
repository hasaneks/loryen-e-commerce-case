const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

const nextConfig = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER

  return {
    env: {
      V1_API_URL: isDev ? 'http://localhost:3000/api/v1/' : 'https://loryen-e-commerce-case.vercel.app/api/v1/',
    },
    reactStrictMode: true,
  }
}

module.exports = (phase) => (nextConfig(phase))
