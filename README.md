# eslint-find-plugin-rules

Discovers rules in eslint plugins.

### CLI
To find the list of rules in `eslint-plugin-ava` for instance, type:

```shell
node bin.js ava
```

### API

```js
var findRules = require('findRules');

findRules('ava');
// => [ ava/max-asserts, ava/no-cb-test, ... ]
```
