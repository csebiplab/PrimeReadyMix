/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images:[
        {
            remotePatterns: [
                {
                  protocol: "https",
                  hostname: "media-content.angi.com",
                  port: "",
                },
                {
                  protocol: "https",
                  hostname: "img1.wsimg.com",
                  port: "",
                },
            ]
        }
    ]
}

module.exports = nextConfig
