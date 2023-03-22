const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    "reportDir": "cypress/reports",
    "charts": true,
    "reportPageTitle": "Casumo-Cypress",
    "reportFilename": "Devowelizer_Report",
    "embeddedScreenshots": true,
    "inlineAssets": true,
    "saveAllAttempts": true,
  },

  video: false,

  e2e: {
    component: {
      devServer: {
        framework: 'next',
        bundler: 'webpack',
      },
    },

    baseUrl: 'http://localhost:8080',
    
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      const webpackPreprocessor = require('@cypress/webpack-preprocessor')
      const options = {
        // send in the options from your webpack.config.js, so it works the same
        // as your app's code
        webpackOptions: require('./webpack.config'),
        watchOptions: {},
      }      
      // implement node event listeners here
      on('file:preprocessor', webpackPreprocessor(options))
      
      on("task", {
      })
    },
  },

});
