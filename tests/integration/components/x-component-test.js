import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('x-component', 'Integration | Component | x component', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.register('component:x-component', Ember.Component.extend({
    classNames: 'x-component'
  }));

  this.render(hbs`{{x-component}}`);

  // check that rendering component without data-test-selector should be bound visible by default
  assert.equal(this.$('.x-component').attr('data-test-selector'), undefined, 'when data-test-selector unspecified attribute is undefined');

  this.render(hbs`{{x-component data-test-selector="foo"}}`);
  assert.equal(this.$('.x-component').attr('data-test-selector'), 'foo', 'data-test-selector is used when specified');
});
