/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {

  var isProd = EmberApp.env() === 'production';
  var app = new EmberApp(defaults, {
    storeConfigInMeta: false,
    minifyCSS: {
      enabled: isProd
    },
    minifyJS: {
      // Will be minified by wro4j-maven-plugin for performance
      enabled: false,
    },
    fingerprint: {
      enabled: false
    },
    sourcemaps: {
      enabled: !isProd
    }
  });

  return app.toTree();
};
