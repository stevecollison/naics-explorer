self.addEventListener("install", e => {
    e.waitUntil(
      caches.open("naics-cache").then(cache => {
        return cache.addAll([
          "/index.html",
          "/naics_scian_2022_structure_v1_eng.xml",
          "/icon-192.png",
          "/manifest.json"
        ]);
      })
    );
  });
  
  self.addEventListener("fetch", e => {
    e.respondWith(
      caches.match(e.request).then(response => response || fetch(e.request))
    );
  });
  