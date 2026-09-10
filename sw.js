self.addEventListener('install', e => {
  e.waitUntil(caches.open('pwa-v10').then(c => c.add('./')));
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
