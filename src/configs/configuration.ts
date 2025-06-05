export default () => ({
  app: {
    port: parseInt(process.env.APP_PORT, 10) || 3000,
    host: process.env.APP_HOST,
  },
});
