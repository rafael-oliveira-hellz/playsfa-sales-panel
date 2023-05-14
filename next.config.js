const redirects = process.env.MAINTENANCE_MODE === "1"
  ? [{ source: "/((?!maintenance).*)", destination: "/maintenance.html", permanent: false }]
  : [];

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true
  },
  redirects,
};
