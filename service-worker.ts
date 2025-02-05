const cacheName = 'v1';
const cacheAssets: string[] = [
  'index.html',
  'css/style.css',
  'js/app.js',
  'images/logo.png', // Ajouter toutes les ressources à mettre en cache
];

// Install Event - Cache les assets spécifiés
self.addEventListener('install', (e: any) => {
  console.log('Service Worker: Installed');
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      console.log('Service Worker: Caching Files');
      cache.addAll(cacheAssets);
    })
  );
});

// Activate Event - Supprime les anciens caches
self.addEventListener('activate', (e: any) => {
  console.log('Service Worker: Activated');
  e.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== cacheName) {
            console.log('Service Worker: Clearing Old Cache');
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Fetch Event - Intercepte les requêtes réseau et retourne la réponse depuis le cache
self.addEventListener('fetch', (e: any) => {
  console.log('Service Worker: Fetching');
  e.respondWith(
    caches.match(e.request).then((cacheRes) => {
      return cacheRes || fetch(e.request);
    })
  );
});
