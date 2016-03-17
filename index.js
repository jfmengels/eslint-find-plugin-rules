var pluginLoader = require('eslint/lib/config/plugins');

module.exports = function findRules(pluginNames) {
  return pluginNames.map(function (pluginName) {
    pluginLoader.load(pluginName);
    var rules = pluginLoader.get(pluginName).rules;
    return Object.keys(rules).map(function (key) {
      return pluginName + '/' + key;
    });
  }).reduce(function (res, current) {
    return res.concat(current);
  }, []);
};
