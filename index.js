function Betamax(project) {
  this.name = 'ember-cli-betamax';
  this.project = project;
}

Betamax.prototype.contentFor = function(type, config) {
  if (type === 'test-head-footer') {
    return '<h1>Insert betamax code here... I think</h1>';
  }
};

Betamax.prototype.included = function(app) {
  app.import('./bower_components/sinon/index.js');
  app.import('./vendor/sinon-shim.js', {
    exports: {
      'sinon': ['default']
    }
  });
};

module.exports = Betamax;
