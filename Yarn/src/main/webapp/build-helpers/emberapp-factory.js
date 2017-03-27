/*jshint node:true*/
/* global require, module */

var Funnel = require("broccoli-funnel");
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var MergeTrees = require('broccoli-merge-trees');

module.exports = function(EmberApp, defaults, options, inputNodes) {
  var isProd = EmberApp.env() === 'production',
      app,
      appOptions = {
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
      };

  inputNodes = inputNodes || [];

  if(options) {
    Object.assign(appOptions, options);
  }

  app = new EmberApp(defaults, appOptions);

  inputNodes.push(new Funnel('config', {
     srcDir: '/',
     include: ['*.env'],
     destDir: '/config'
  }));

  return app.toTree(new MergeTrees(inputNodes));
};
