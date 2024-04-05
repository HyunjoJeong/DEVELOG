/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true, // https://nextjs.org/docs/architecture/nextjs-compiler#styled-components
    removeConsole: process.env.NODE_ENV === "production" && {
      exclude: ["error", "warn"],
    },
  },
};

export default nextConfig;
