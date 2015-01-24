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

* in a QUnit test click on the "Record API Queries" checkbox (typically you should do it on the global test route)
* when the tests are finished a file will automatically be downloaded
* replace the current cassette.js in tests/helpers with the new cassette.js


## How it works

* When record is set to true, every ajax response is monitored and saved to an array.
* Within one recording session responses are cached, so you will only hit the same endpoint once.
* At the end of the session a "cassette" is saved in the format that Sinon Fake server expects.
* If record is not true, Sinon Fake server is pre-loaded with your already recorded cassette.
* If something has not been recorded, it will be downloaded at the end of a test run. The new cassette can be manually merged.
