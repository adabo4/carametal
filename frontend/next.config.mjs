/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        typedRoutes: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
    },
    async redirects() {
        return [
            {
                source: '/služby',
                destination: '/sluzby',
                permanent: true,
            },
            {
                source: '/o-nás',
                destination: '/o-nas',
                permanent: true,
            },
        ]
    },
};

export default nextConfig;