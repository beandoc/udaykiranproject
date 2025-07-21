/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
   webpack: (config, { isServer }) => {
    // This is a workaround for a warning in the opentelemetry-js library.
    // The warning is: "Critical dependency: the request of a dependency is an expression"
    config.module.exprContextCritical = false;
    return config;
  },
};

module.exports = nextConfig;
