'use strict';

var flatMap = require('lodash.flatmap');
var pluginLoader = require('eslint/lib/config/plugins');

function rename(pluginName) {
  return function (ruleName) {
    return pluginName + '/' + ruleName;
  };
}

function loadRules(pluginName) {
  pluginLoader.load(pluginName);
  var plugin = pluginLoader.get(pluginName);
  return Object.keys(plugin.rules)
    .map(rename(pluginName));
}

module.exports = function findRules(pluginNames) {
  return flatMap(pluginNames, loadRules);
};
