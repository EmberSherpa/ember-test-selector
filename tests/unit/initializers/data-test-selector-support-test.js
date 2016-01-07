import Ember from 'ember';
import DataTestSelectorSupportInitializer from '../../../initializers/data-test-selector-support';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | data test selector support', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  DataTestSelectorSupportInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
