import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | application');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
    assert.ok($('[data-test-selector="foo-bar-component"]').length > 0, 'foo-bar component is rendered with data-test-selector');
  });
});
