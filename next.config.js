/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  output: 'export',
  basePath: isGithubPages ? '/citywalk' : '',
  assetPrefix: isGithubPages ? '/citywalk' : '',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
