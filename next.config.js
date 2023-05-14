/** @type {import('next').NextConfig} */
const redirects = () => {
  return [
    process.env.MAINTENANCE_MODE === "1"
      ? { source: "/((?!maintenance).*)", destination: "/maintenance.html", permanent: false }
      : null,
  ].filter(Boolean);
};

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true
  },
  redirects: redirects(),
};

module.exports = nextConfig;
