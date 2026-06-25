import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    reactStrictMode: true,

    // Image optimization for better performance
    images: {
        formats: ['image/avif', 'image/webp'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        minimumCacheTTL: 60,
    },

    // Compiler optimizations
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
    },

    // Experimental features for better performance
    experimental: {
        optimizePackageImports: ['lucide-react', 'framer-motion', 'gsap'],
        optimizeCss: true,
    },

    // Performance optimizations
    poweredByHeader: false,
    compress: true,

    // Webpack optimizations
    webpack: (config, { dev, isServer }) => {
        // Production optimizations
        if (!dev && !isServer) {
            config.optimization = {
                ...config.optimization,
                moduleIds: 'deterministic',
                runtimeChunk: 'single',
                splitChunks: {
                    chunks: 'all',
                    cacheGroups: {
                        default: false,
                        vendors: false,
                        framework: {
                            name: 'framework',
                            chunks: 'all',
                            test: /[\\/]node_modules[\\/](react|react-dom|scheduler|prop-types)[\\/]/,
                            priority: 40,
                            enforce: true,
                        },
                        lib: {
                            test: /[\\/]node_modules[\\/]/,
                            name(module: any) {
                                const packageName = module.context.match(
                                    /[\\/]node_modules[\\/](.*?)([\\/]|$)/
                                )?.[1];
                                return `npm.${packageName?.replace('@', '')}`;
                            },
                            priority: 30,
                            minChunks: 1,
                            reuseExistingChunk: true,
                        },
                    },
                },
            };
        }

        return config;
    },
};

export default nextConfig;
