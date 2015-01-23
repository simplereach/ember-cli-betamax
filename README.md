# Ember-cli-betamax


## Installation

* (when published) npm install --save-dev ember-cli-betamax
* ember generate  ember-cli-betamax
* add the following to your tests/test-helper file:
```
import cassette from './helpers/cassette';
import insertCassette from 'ember-cli-betamax/addon/utils/insert-cassette';

insertCassette(cassette);
```



Collaborating on this Ember addon.

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
