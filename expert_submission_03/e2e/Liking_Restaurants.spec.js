const assert = require('assert');

Feature('Liking Restaurants');
Before(({I}) => {
  I.amOnPage('/#/favorite');
});
Scenario('showing empty liked movies', ({I}) => {
  I.seeElement('.wrapper-catalog');
  I.see('Favorite Empty !', '.title-error');
});

Scenario('Adding favorite restaurant', async ({I}) => {
  I.see('Favorite Empty !', '.title-error');
  I.amOnPage('/');
  I.seeElement('.catalog-item a');
  const firstItem = locate('.catalog-item a').first();
  const firstItemTitle = await I.grabTextFrom(firstItem);

  I.click(firstItem);
  I.seeElement('.address-wrapper h2');
  I.seeElement('#btnfavorite');
  I.click('#btnfavorite');

  // go to favorite pages
  I.amOnPage('/#/favorite');
  I.seeElement('.catalog-item a');
  const itemFavorite = locate('.catalog-item a').first();
  const ItemFavoriteTitle = await I.grabTextFrom(itemFavorite);
  assert.strictEqual(firstItemTitle, ItemFavoriteTitle);
});

Scenario('removing favorite restaurant', async ({I}) => {
  // go to detail pages
  I.see('Favorite Empty !', '.title-error');
  I.amOnPage('/');
  I.seeElement('.catalog-item a');
  const firstItem = locate('.catalog-item a').first();

  I.click(firstItem);
  I.seeElement('.address-wrapper h2');
  I.seeElement('#btnfavorite');
  I.click('#btnfavorite');

  // go to favorite pages
  I.amOnPage('/#/favorite');
  I.seeElement('.catalog-item a');
  const itemFavorite = locate('.catalog-item a').first();
  I.click(itemFavorite);

  I.seeElement('.address-wrapper h2');
  I.seeElement('#btnfavorite');
  I.click('#btnfavorite');

  I.amOnPage('/#/favorite');
  I.see('Favorite Empty !', '.title-error');
});

