// Name and version of the cache. Update the version when making changes to cached files.
const CACHE_NAME = 'native-plants-cache-v1';

// List of resources to cache for offline use.
const urlsToCache = [
  '/', // The root of your app (home page)
  '/index.html', // Main HTML file
  '/styles.css', // CSS file
  '/script.js', // Main JavaScript file
  '/images/default-placeholder.jpg', // Placeholder image for plants
];

// Install event: runs when the service worker is first registered.
// This is where you cache all the files listed above.
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Opened cache');
      return cache.addAll(urlsToCache); // Add all specified files to the cache
    })
  );
});

// Fetch event: intercepts network requests.
// If a request matches a cached file, it serves that file from the cache.
// Otherwise, it fetches the file from the network.
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Return the cached file or fetch it from the network if not in cache.
      return response || fetch(event.request);
    })
  );
});

// Activate event: cleans up old caches when a new version is activated.
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cache) => {
          // Delete caches that don't match the current version.
          if (cache !== CACHE_NAME) {
            console.log('Deleting old cache:', cache);
            return caches.delete(cache);
          }
        })
      )
    )
  );
});
