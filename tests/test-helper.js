import resolver from './helpers/resolver';
import {
  setResolver
} from 'ember-qunit';
import {
  startServer,
  stopServer,
  setupServer
} from './helpers/fake-server';
import cassette from './helpers/cassette';
import recorder from './helpers/betamax-recorder';

setResolver(resolver);

document.write('<div id="ember-testing-container"><div id="ember-testing"></div></div>');

QUnit.config.urlConfig.push({ id: 'nocontainer', label: 'Hide container' });
var containerVisibility = QUnit.urlParams.nocontainer ? 'hidden' : 'visible';
document.getElementById('ember-testing-container').style.visibility = containerVisibility;


QUnit.done(function(){
  stopServer();
  //if we are not in testem, download new casettes.
  if(QUnit.urlParams && QUnit.urlParams.record){
    recorder.download();
  }
});

QUnit.begin(function(){
  startServer();
  //if record is not selected, use recordings
  if(!(QUnit.urlParams && QUnit.urlParams.record)){
    setupServer(cassette);
  }
  recorder.setup();
});
