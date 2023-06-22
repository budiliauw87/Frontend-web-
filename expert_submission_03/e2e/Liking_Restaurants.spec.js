const assert = require('assert');

Feature('Liking Restaurants');
Before(({I}) => {
  I.amOnPage('/#/favorite');
});
Scenario('showing empty liked movies', ({I}) => {
  I.seeElement('.wrapper-catalog');
  I.see('Favorite Empty !', '.title-error');
});

Scenario('Adding favorite restaurant', ({I}) => {
  I.see('Favorite Empty !', '.title-error');
  I.amOnPage('/');
  pause();
});

