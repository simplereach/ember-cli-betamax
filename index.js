/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-betamax',
  contentFor: function(type, config) {
    if (type === 'test-head-footer') {
      return "<script>console.log('betamax was here');</script>";
    }
  },

  included: function(app) {
    if (app.tests) {
      app.import('bower_components/sinon/index.js', {
        type: 'test'
      });
    }
  }
};
