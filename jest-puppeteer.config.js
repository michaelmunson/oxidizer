export default {
  launch: {
    dumpio: true,
    headless: false,
  },
  server: {
    command: "npm run start-test-app",
    port: 1234,
    launchTimeout: 10000,
    debug: true,
  },
}