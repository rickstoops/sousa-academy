var C='sousa-academy-v1',BESTANDEN=['./','./index.html','./manifest.json','./icon.svg'];
self.addEventListener('install',function(e){self.skipWaiting();e.waitUntil(caches.open(C).then(function(c){return c.addAll(BESTANDEN)}))});
self.addEventListener('activate',function(e){e.waitUntil(caches.keys().then(function(ks){return Promise.all(ks.filter(function(k){return k!==C}).map(function(k){return caches.delete(k)}))}).then(function(){return self.clients.claim()}))});
self.addEventListener('fetch',function(e){e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(function(m){
  var net=fetch(e.request).then(function(r){if(r&&r.ok){var cl=r.clone();caches.open(C).then(function(c){c.put(e.request,cl)})}return r}).catch(function(){return m});
  return m||net}))});