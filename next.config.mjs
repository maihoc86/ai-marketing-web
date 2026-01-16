const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year cache for immutable images
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'admin.dsp.one',
      },
      {
        protocol: 'https',
        hostname: 'tienphongcds.com',
      },
      {
        protocol: 'https',
        hostname: 'media.newweb.vn',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
      },
      {
        protocol: 'https',
        hostname: 'amis.misa.vn',
      },
      {
        protocol: 'https',
        hostname: 'aimaketing.s3.ap-southeast-1.amazonaws.com',
      },
    ],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons', 'react-hook-form'],
  },
  turbopack: {}, // Add empty turbopack config to silence Next.js 16 warning
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Reduce bundle size by splitting vendor code
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            default: false,
            vendors: false,
            // Vendor chunk
            vendor: {
              name: 'vendor',
              chunks: 'all',
              test: /node_modules/,
              priority: 20,
            },
            // Common chunk
            common: {
              name: 'common',
              minChunks: 2,
              chunks: 'all',
              priority: 10,
              reuseExistingChunk: true,
              enforce: true,
            },
          },
        },
        runtimeChunk: {
          name: 'runtime',
        },
      };
    }
    return config;
  },
  productionBrowserSourceMaps: false,
  poweredByHeader: false,
  compress: true,
}

export default nextConfig
