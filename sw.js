const CACHE =
"eclipse-v1";

const ASSETS = [

"/",

"/assets/logo/logo.png",

"/assets/backgrounds/crimson.png",

"/assets/browsericons/browser.png",

"/assets/browsericons/files.png",

"/assets/browsericons/store.png",
  
"/assets/browsericons/games.png",
  
"/assets/browsericons/launch.png",
  
"/assets/browsericons/movies.png",
  
"/assets/browsericons/phoenix.png",
  
"/assets/browsericons/settings.png",
  
  "/assets/backgrounds/CoolSunset.jpeg",
   "/assets/backgrounds/cyber.png",
   "/assets/backgrounds/forest.png",
   "/assets/backgrounds/gray.png",
   "/assets/backgrounds/lavendar.png",
   "/assets/backgrounds/midnight.png",
   "/assets/backgrounds/neon.png",
   "/assets/backgrounds/ocean.png",
   "/assets/backgrounds/purplerain.png"


];

self.addEventListener(
"install",
event=>{

event.waitUntil(
caches.open(CACHE)
.then(cache=>
cache.addAll(ASSETS)
)
);

});

self.addEventListener(
"fetch",
event=>{

event.respondWith(

caches.match(
event.request
)

.then(response=>
response ||
fetch(
event.request
)
)

);

});
