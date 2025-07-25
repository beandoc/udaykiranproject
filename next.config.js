
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
    // The warning is: "Critical dependency: the request of a dependency is an expression"
    config.module.exprContextCritical = false;

    // This is to solve a build error with Genkit, which uses Handlebars.
    // It prevents Webpack from trying to bundle this server-side module on the client.
    if (!isServer) {
        config.externals.push('handlebars');
    }
    
    // This is to solve the "Module not found: Can't resolve 'ignore-loader'" error
    // from a Genkit sub-dependency.
    config.module.rules.push({
      test: /dtrace-provider\.js$/,
      use: 'ignore-loader',
    });
    
    return config;
  },
};

module.exports = nextConfig;
