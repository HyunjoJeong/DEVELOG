/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: {
      // https://nextjs.org/docs/architecture/nextjs-compiler#styled-components
      ssr: false, // https://styled-components.com/docs/tooling#server-side-rendering
    },
    removeConsole: process.env.NODE_ENV === "production" && {
      exclude: ["error", "warn"],
    },
  },
};

export default nextConfig;
