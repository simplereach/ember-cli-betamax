import resolver from './helpers/resolver';
import {
  setResolver
} from 'ember-qunit';
import cassette from './helpers/cassette';
import insertCassette from 'ember-cli-betamax/utils/insert-cassette';

setResolver(resolver);

document.write('<div id="ember-testing-container"><div id="ember-testing"></div></div>');

QUnit.config.urlConfig.push({ id: 'nocontainer', label: 'Hide container' });
var containerVisibility = QUnit.urlParams.nocontainer ? 'hidden' : 'visible';
document.getElementById('ember-testing-container').style.visibility = containerVisibility;

insertCassette(cassette);

