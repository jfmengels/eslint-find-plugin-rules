'use strict';

var findRules = require('./');

var pluginNames = process.argv.slice(2);
var rulesList = findRules(pluginNames);
console.log('rules:', rulesList.join(', '));
