/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "wherebnb-review-photos.s3.ap-northeast-2.amazonaws.com",
      "avatars.githubusercontent.com",
      "lh3.googleusercontent.com",
    ],
  },
};

module.exports = nextConfig;
