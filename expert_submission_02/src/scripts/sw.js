import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper';
const assetsToCache = [
  './',
  './images/icon/apple-touch-icon.png',
  './images/icon/restaurant_iconx48.png',
  './images/icon/restaurant_iconx71.png',
  './images/icon/restaurant_iconx96.png',
  './images/icon/restaurant_iconx128.png',
  './images/icon/restaurant_iconx144.png',
  './images/icon/restaurant_iconx192.png',
  './images/icon/restaurant_iconx384.png',
  './images/icon/restaurant_iconx512.png',
  './index.html',
  './favicon.ico',
  './app.bundle.js',
  './app.webmanifest',
  './sw.bundle.js',
];

self.addEventListener('install', (event) => {
  event.waitUntil(CacheHelper.cachingApp([...assetsToCache]));
  console.log('Service worker installed');
});
self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteCache());
  console.log('Service worker activated');
});
self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
});
