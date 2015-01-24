# Ember-cli-betamax


## Installation

* npm install simplereach/ember-cli-betamax --save-dev
* ember generate  ember-cli-betamax
* this *should* add the following to your tests/test-helper file:

```
import cassette from './helpers/cassette';
import insertCassette from './helpers/insert-cassette';

insertCassette(cassette);
```

## Creating a recording

* in /tests add the parameter "record=true" eg /tests?record=true
* when the tests are finished a file will automatically be downloaded
* replace the current cassette.js in tests/helpers with the new cassette.js

