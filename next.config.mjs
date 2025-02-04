/** @type {import('next').NextConfig} */
const staticbuild = {
  distDir: 'build',
  output: 'export',
  trailingSlash: true,
}

const nextConfig = {
  // Comment the line to run locally or uncomment to create a static build of the project
  // ...staticbuild,

  images: {
    domains: [
      "lh3.googleusercontent.com",
      "avatars.githubusercontent.com",
      'iili.io'
    ],
  },
};

export default nextConfig;
