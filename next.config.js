/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['react-tilt'],
  async redirects() {
    return [
      {
        source: '/project',
        destination: '/#projects',
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig
