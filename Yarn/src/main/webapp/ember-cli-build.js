/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var emberAppFactory = require('./build-helpers/emberapp-factory.js');

module.exports = function(defaults) {
  return emberAppFactory(EmberApp, defaults);
};
