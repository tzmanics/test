module.exports = (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */

  const nextConfig = {
    reactStrictMode: true,
    env: {
      GRAPHQL_SERVER_BASE_URI: "http://localhost:3000",
    },
  };

  return nextConfig;
};
