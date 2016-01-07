import Ember from 'ember';
import DataTestSelectorSupportMixin from 'ember-test-selector/mixins/data-test-selector-support';

export function initialize(/* application */) {
  if (Ember.testing) {
    Ember.Component.reopen(DataTestSelectorSupportMixin);
  }
}

export default {
  name: 'data-test-selector-support',
  initialize
};
