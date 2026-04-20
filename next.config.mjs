/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/PaperReelDemo_0420',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
