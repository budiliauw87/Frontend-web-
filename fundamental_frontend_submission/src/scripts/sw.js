/* eslint-disable no-undef */
const PRECACHE = 'precache-v1';
const RUNTIME = 'runtime-v1';
const IMAGES = 'images-v1';

const PRECACHE_URLS = [
  './', // Alias for index.html
  'styles/main.css',
  'scripts/main.js',
  '/offline.html'
];

// The install handler takes care of precaching the resources we always need.
self.addEventListener('install', event => {
  event.waitUntil(caches
      .open(PRECACHE)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(self.skipWaiting())
      .catch(err => {
        console.log("error precaching resources", err);
      }));
});

// The activate handler takes care of cleaning up old caches.
self.addEventListener('activate', event => {
  const currentCaches = [PRECACHE, RUNTIME, IMAGES];
  event.waitUntil(
    caches.keys()
    .then(cacheNames => {
      return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
    })
    .then(cachesToDelete => {
      return Promise.all(cachesToDelete.map(cacheToDelete => {
        return caches.delete(cacheToDelete);
      }));
    })
    .then(() => self.clients.claim())
    .catch(err => {
      console.log('error removing old caches', err);
    })
  );
});

self.addEventListener('fetch', event => {
  if (request.headers.get('Accept').includes('html')) {
    event.respondWith(() => {
      caches.match(event.request)
      .then(response => {
        // Fall back to network
        return response || fetch(event.request);
      })
          .then(response => {
            return caches.open('RUNTIME')
              .then(cache => {
                cache.put(event.request, response.clone());
                return response;
              });
          })
      .catch(() => {
        return caches.match('/offline.html');
      }); // closes catch
    }); // closes respondWith
  } // closes if

  if (request.headers.get('Accept').includes('image')) {
    event.respondWith(() => {
      caches.match(event.request)
      .then(response => {
        return response || fetch(evennt.request);
      })
        .then(reponse => {
          return caches.open('IMAGES');
        })
          .then(cache => {
            cache.put(event.request, response.clone());
            return response;
          })
      .catch(() => {
        return new Response(
          '<svg role="img" aria-labelledby="offline-title" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><title id="offline-title">Offline</title><g fill="none" fill-rule="evenodd"><path fill="#D8D8D8" d="M0 0h400v300H0z"/><text fill="#9B9B9B" font-family="Helvetica Neue,Arial,Helvetica,sans-serif" font-size="72" font-weight="bold"><tspan x="93" y="172">offline</tspan></text></g></svg>',
          {
            headers: {
              "Content-Type": "image/svg+xml",
              "Cache-Control": "no-store"
            }
          }
        );
      });
    });
  }// closes if

  if (request.headers.get('Accept').include('video')) {
    event.respondWith(() => {
      fetch(event.request);
    })
    .catch(() => {
      return new Response(
        '<svg role="img" aria-labelledby="offline-title" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><title id="offline-title">Offline</title><g fill="none" fill-rule="evenodd"><path fill="#D8D8D8" d="M0 0h400v300H0z"/><text fill="#9B9B9B" font-family="Helvetica Neue,Arial,Helvetica,sans-serif" font-size="72" font-weight="bold"><tspan x="93" y="172">offline</tspan></text></g></svg>',
        {
          headers: {
            "Content-Type": "image/svg+xml",
            "Cache-Control": "no-store"
          }
        }
      );
    });
  }// closes if

  // If the request doesn't match our special cases then use default
  event.respondWith(() => {
    caches.match(event.request).then(response => {
      // Fall back to network
      return response || fetch(event.request);
    })
    .then(response => {
      return caches.open('RUNTIME')
      .then(cache => {
        cache.put(event.request, response.clone());
        return response;
      })
      .catch(() => {
        return caches.match('/offline.html');
      }); // closes catch
    });
  }); // Closes respondWith
}); // closes fetch