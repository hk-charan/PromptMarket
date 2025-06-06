/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['lh3.googleusercontent.com'], // or other domains you need
  },

  serverExternalPackages: ['some-package'], // ✅ updated key

  // remove or empty the experimental object if no longer needed
  experimental: {}, 
};

export default nextConfig;
