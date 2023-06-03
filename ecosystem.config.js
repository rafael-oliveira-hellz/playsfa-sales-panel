module.exports = {
  apps: [
    {
      name: "playsfa-nextjs-app",
      cwd: "./",
      script: "node_modules/.bin/next",
      args: "dev",
      env: {
        NODE_ENV: "development",
        PORT: 3000
      },
    },
  ],
};
