const CACHE_NAME = 'hamsa-nomads-app-v3';
const CORE_ASSETS = [
  './',
  './index.html',
  './home.html',
  './guides.html',
  './city.html',
  './trips.html',
  './experience.html',
  './community.html',
  './profile.html',
  './login.html',
  './signup.html',
  './activities.html',
  './activity.html',
  './animation.html',
  './offline.html',
  './app.css',
  './app.js',
  './app.config.js',
  './manifest.webmanifest',
  './data/cities.json',
  './data/experiences.json',
  './data/activities.json',
  './data/community.json',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(CORE_ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))))
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;
  event.respondWith(
    fetch(request)
      .then(response => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
        return response;
      })
      .catch(() => caches.match(request).then(match => match || caches.match('./offline.html')))
  );
});
