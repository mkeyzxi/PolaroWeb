const CACHE_NAME = "polaroweb-cache-v1";
const STATIC_ASSETS = [
	"/",
	"/index.html",
	"/manifest.webmanifest",
	"/pwa-192x192.png",
	"/pwa-512x512.png"
];

self.addEventListener("install", (event) => {
	self.skipWaiting();
	event.waitUntil(
		caches.open(CACHE_NAME).then((cache) => {
			return cache.addAll(STATIC_ASSETS);
		})
	);
});

self.addEventListener("activate", (event) => {
	event.waitUntil(
		caches.keys().then((keys) =>
			Promise.all(
				keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
			)
		)
	);
	self.clients.claim();
});

self.addEventListener("fetch", (event) => {
	event.respondWith(
		caches.match(event.request).then((cached) => {
			return cached || fetch(event.request);
		})
	);
});
