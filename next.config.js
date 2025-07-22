/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
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

    // Add a rule to ignore the 'handlebars' module
    config.module.rules.push({
      test: /handlebars\/lib\/index\.js$/,
      use: 'ignore-loader',
    });

    return config;
  },
};

module.exports = nextConfig;
