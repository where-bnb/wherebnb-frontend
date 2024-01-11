/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: true,
    pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
    // app 폴더 내의 pages 디렉토리 사용 설정
}

module.exports = nextConfig;