const CACHE='karyakit-v1';
const CORE=['./','./index.html','./manifest.webmanifest','./icon.svg'];
const LIBS=[
 'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js',
 'https://cdnjs.cloudflare.com/ajax/libs/pdf-lib/1.17.1/pdf-lib.min.js',
 'https://cdnjs.cloudflare.com/ajax/libs/jsQR/1.4.0/jsQR.js'
];
self.addEventListener('install',event=>{event.waitUntil((async()=>{const c=await caches.open(CACHE);await c.addAll(CORE);for(const u of LIBS){try{const r=await fetch(u,{mode:'cors'});if(r.ok)await c.put(u,r)}catch(e){}}await self.skipWaiting()})())});
self.addEventListener('activate',event=>event.waitUntil((async()=>{for(const k of await caches.keys())if(k!==CACHE)await caches.delete(k);await self.clients.claim()})()));
self.addEventListener('fetch',event=>{const u=new URL(event.request.url);if(event.request.method!=='GET')return;
 event.respondWith((async()=>{const cached=await caches.match(event.request);if(cached)return cached;try{const response=await fetch(event.request);if(response.ok&&(u.origin===location.origin||LIBS.includes(event.request.url))){const c=await caches.open(CACHE);c.put(event.request,response.clone())}return response}catch(e){if(event.request.mode==='navigate')return caches.match('./index.html');throw e}})())
});