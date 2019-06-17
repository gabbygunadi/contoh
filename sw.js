self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('first-app').then(function(cache) {
      return cache.addAll([
      '/Mobweb/UAS/index.html',
      '/Mobweb/UAS/offline.html',
      '/Mobweb/UAS/nomer2.js',
      '/Mobweb/UAS/hitung_worker.js',
      '/Mobweb/UAS/src/js/app.js',
      '/Mobweb/UAS/src/img/logo.png',
      'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js',
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    // Try the cache
    caches.match(event.request).then(function(response) {
      // Fall back to network
      return response || fetch(event.request);
    }).catch(function() {
      // If both fail, show a generic fallback:
      return caches.match('/Mobweb/UAS/offline.html');
      // However, in reality you'd have many different
      // fallbacks, depending on URL & headers.
      // Eg, a fallback silhouette image for avatars.
    })
  );
});
