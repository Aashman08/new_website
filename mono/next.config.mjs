/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pbs.twimg.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'assets.aceternity.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  
  // Compiler optimizations
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Experimental optimizations
  experimental: {
    // Optimize package imports (tree-shaking)
    optimizePackageImports: [
      '@tabler/icons-react',
      'lucide-react',
      'react-icons',
      'framer-motion',
      '@radix-ui/react-icons',
    ],
  },
  
  // Production optimizations
  poweredByHeader: false, // Remove X-Powered-By header
  reactStrictMode: true,
};

export default nextConfig;
