// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Add external domains if you host images elsewhere later
    remotePatterns: []
  },
  experimental: {
    // Opt into future features as needed
  }
};
export default nextConfig;