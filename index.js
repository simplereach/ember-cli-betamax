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
  if (app.tests) {
    app.import('bower_components/sinon/index.js', {
      type: 'test'
    });
  }
};

module.exports = Betamax;
