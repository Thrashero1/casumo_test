const { defineConfig } = require("cypress");

module.exports = defineConfig({

  e2e: {
    component: {
      devServer: {
        framework: 'next',
        bundler: 'webpack',
      },
    },

    baseUrl: 'http://localhost:8080',
    
    setupNodeEvents(on, config) {
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
