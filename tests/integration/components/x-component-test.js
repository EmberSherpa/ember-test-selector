import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { initialize } from 'ember-test-selector/initializers/data-test-selector-support';

moduleForComponent('x-component', 'Integration | Component | x component', {
  integration: true
});

test('without intializer', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.register('component:x-component', Ember.Component.extend({
    classNames: 'x-component'
  }));

  this.render(hbs`{{x-component}}`);

  // check that rendering component without data-test-selector should be bound visible by default
  assert.equal(this.$('.x-component').attr('data-test-selector'), undefined, 'when data-test-selector unspecified attribute is undefined');

  this.render(hbs`{{x-component data-test-selector="foo"}}`);
  assert.equal(this.$('.x-component').attr('data-test-selector'), undefined, 'data-test-selector is undefined because initializer is not applied');

});

test('with intializer', function(assert){
  initialize();
  
  this.register('component:x-component', Ember.Component.extend({
    classNames: 'x-component'
  }));
  
  this.render(hbs`{{x-component data-test-selector="foo"}}`);
  assert.equal(this.$('.x-component').attr('data-test-selector'), 'foo', 'data-test-selector is foo after data-test-selector support was added');
});