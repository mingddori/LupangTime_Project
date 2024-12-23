/** @type {import('next').NextConfig} */

const nextConfig = {
    // Webpack 관련 (polling 등)    // 배포 비활성
    webpackDevMiddleware: config => {
        config.watchOptions = {
            poll: 800,
            aggregateTimeout: 300,
        }
        return config
    },
};

export default nextConfig;
