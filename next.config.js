/** @type {import('next').NextConfig} */
const nextConfig = {
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
    config.module.exprContextCritical = false;

    // This is to solve a build error with Genkit, which uses Handlebars.
    if (!isServer) {
        config.externals.push('handlebars');
    }
    
    // This existing rule tells webpack to ignore dtrace-provider.js.
    config.module.rules.push({
      test: /dtrace-provider\.js$/,
      use: 'ignore-loader',
    });
    
    // This new rule tells Webpack what 'ignore-loader' is, fixing the "Module not found" error.
    config.module.rules.push({
      test: /ignore-loader/,
      use: 'ignore-loader',
    });
    
    return config;
  },
};

module.exports = nextConfig;
