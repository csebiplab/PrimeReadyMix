/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "media-content.angi.com",
      "img1.wsimg.com",
      // Add any other domains your application uses for images
    ],
  },
};


module.exports = nextConfig
