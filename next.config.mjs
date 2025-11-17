/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Set basePath if your repository name is not the root domain
  // For example, if your repo is 'thesis', uncomment the line below:
  // basePath: '/thesis',
  // trailingSlash: true,
};

export default nextConfig;
