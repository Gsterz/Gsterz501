const CACHE_NAME = 'pwa-cache-v1';
const urlsToCache = [
  '/Gsterz500/',
  '/Gsterz500/index.html',
  '/Gsterz500/script.js',
  '/Gsterz500/manifest.json',
  '/Gsterz500/icon-192.jpg',
  '/Gsterz500/icon-512.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});