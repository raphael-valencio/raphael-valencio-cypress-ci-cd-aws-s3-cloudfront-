const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "kwnpsj",
  e2e: {
    baseUrl:"http://localhost:3000",
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: true,
    json: false,
    timestamp: 'mmddyyyy_HHMMSS'
  },

});
