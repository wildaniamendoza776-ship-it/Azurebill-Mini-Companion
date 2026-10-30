
const V="azu-v10"; 
self.addEventListener("install",e=>{self.skipWaiting();});
self.addEventListener("activate",e=>e.waitUntil(
  caches.keys().then(k=>Promise.all(k.map(x=>caches.delete(x)))).then(()=>self.clients.claim())));
self.addEventListener("fetch",e=>{
  const u=new URL(e.request.url);
  if(e.request.method!=="GET"||u.origin!==location.origin) return;
  if(/assets-(fondos|media)/.test(u.pathname)) return;
  e.respondWith(fetch(e.request).then(n=>{const c=n.clone();caches.open(V).then(x=>x.put(e.request,c));return n})
    .catch(()=>caches.match(e.request)));
});
