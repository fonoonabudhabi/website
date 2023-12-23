/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "localhost",
                port: "8055",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "cms.fonoon.ae",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "cms.fonoon.ae",
                pathname: "/**",
            },
        ],
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;
