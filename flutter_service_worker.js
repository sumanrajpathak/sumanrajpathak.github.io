'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "888483df48293866f9f41d3d9274a779",
"assets/FontManifest.json": "e3320abc28e12a2d893ef12d4db03280",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Regular-400.otf": "b2703f18eee8303425a5342dba6958db",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Brands-Regular-400.otf": "55a0c920a85529c46b3e7884b5b19c1f",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Solid-900.otf": "5b8d20acec3e57711717f61417c1be44",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/assets/resume/suman_raj_pathak_cv.pdf": "abdb110709e002e14fe7af6feaed49be",
"assets/assets/images/projects/eventmx/logo.png": "4112f75a54fef36822de0df817c61daf",
"assets/assets/images/projects/eventmx/shot2.jpg": "d66f262d7ce28517a3fccb879c131026",
"assets/assets/images/projects/eventmx/shot1.jpg": "b24a4788a50fed10dc47282bc393af91",
"assets/assets/images/projects/eventmx/shot4.jpg": "94e9afc1cdb4e19cbeabf4a2505aba9b",
"assets/assets/images/projects/eventmx/shot3.jpg": "5e31e12755090e21d3e09b3b90f7c693",
"assets/assets/images/projects/hallo/logo.png": "3b17b61923328d0f04f327cd49818210",
"assets/assets/images/projects/hallo/shot2.jpg": "a6a4d9c5e12c42b8ade2012409f4f633",
"assets/assets/images/projects/hallo/shot1.jpg": "4770b53a50c8c24e4b7eab18c661af12",
"assets/assets/images/projects/hallo/shot4.jpg": "f0ace77bde556a581e00f221ec8c1460",
"assets/assets/images/projects/hallo/shot3.jpg": "b576019da583a0d52c41e4ba6d4b7fc0",
"assets/assets/images/projects/buddha-air/logo.png": "58f2cd5cfe0d95f9d734944eae62ff26",
"assets/assets/images/projects/buddha-air/shot2.jpg": "04abdc73d7e371c9339e47bee0d2e317",
"assets/assets/images/projects/buddha-air/shot1.jpg": "33f325d4438ca827a188688bb647f07f",
"assets/assets/images/projects/buddha-air/shot4.jpg": "e35813cabab332b36e475304cf3c9666",
"assets/assets/images/projects/buddha-air/shot3.jpg": "eb80a0a8c4b1b60b4ee03a45949ae333",
"assets/assets/images/projects/namaste-pay/logo.png": "928a7a9166600a9e95b445f21485808c",
"assets/assets/images/projects/namaste-pay/shot2.jpg": "8039e23127bc1b39cbfe95ac4e7b6de6",
"assets/assets/images/projects/namaste-pay/shot1.jpg": "91ce352478f9bd557a337cdaa2a3ed35",
"assets/assets/images/projects/namaste-pay/shot4.jpg": "7c30a2e3490b24d7cb71fbea29cca35f",
"assets/assets/images/projects/namaste-pay/shot3.jpg": "50dd2ed9e9197c3f5d698fa3fa563bfd",
"assets/assets/images/projects/nepal-telecom/logo.png": "ada48b301caf1b9433ba984ab96771f0",
"assets/assets/images/projects/nepal-telecom/shot2.jpg": "cda728446ad91aa0f050ffa3aa0278fb",
"assets/assets/images/projects/nepal-telecom/shot1.jpg": "456b932e0d4d62cbad014a1b6fdef3bb",
"assets/assets/images/projects/nepal-telecom/shot4.jpg": "999d21d69478c7e4f2ecc72560d23ce6",
"assets/assets/images/projects/nepal-telecom/shot3.jpg": "097a4ac9963e942a5e5331e976801e80",
"assets/assets/images/projects/smartdoko/logo.png": "9366706cdb71ac4b4ab3ef545009fc3f",
"assets/assets/images/projects/smartdoko/shot2.jpg": "5bd943c24f6171de3aeb5307b0a9edbd",
"assets/assets/images/projects/smartdoko/shot1.jpg": "f5ae358e30e359f91c5c499c0f33399e",
"assets/assets/images/projects/smartdoko/shot4.jpg": "9ce9a06500ced70dcd9ddf2e4d3831e8",
"assets/assets/images/projects/smartdoko/shot3.jpg": "6c9e48427cc7ed6ab35aa5cd7d2e50ac",
"assets/assets/images/projects/fit4friends/logo.png": "3954a96771b0b5569104f51cefdc413a",
"assets/assets/images/projects/fit4friends/shot2.jpg": "dedb51af843810e2e0c8eeed25a4b290",
"assets/assets/images/projects/fit4friends/shot1.jpg": "61f8769d342d32c68239dd039721c09f",
"assets/assets/images/projects/fit4friends/shot4.jpg": "b2717b0d2b1e62ae8ffa7d2b43d0f6ac",
"assets/assets/images/projects/fit4friends/shot3.jpg": "e4ca447ae8c0d5638c75e6a112fac317",
"assets/assets/images/projects/indetail-voting/logo.png": "4e2d9a7cf95e737dde25c3b38282a405",
"assets/assets/images/projects/indetail-voting/shot2.jpg": "e0040362cd3ce61f853fd6f3bb4dccad",
"assets/assets/images/projects/indetail-voting/shot1.jpg": "1eb169807a7913b79af6b7d6a09c6653",
"assets/assets/images/projects/indetail-voting/shot4.jpg": "6efc278341e80f7b77bd20991afc5ab8",
"assets/assets/images/projects/indetail-voting/shot3.jpg": "7256fa377e80452123d32bb5c6dae5df",
"assets/assets/images/projects/sitedeck/logo.png": "c53d2df497b233bd429d887086d7e840",
"assets/assets/images/projects/sitedeck/shot2.jpg": "97fe7edfde20001793dd5ff2f68510b3",
"assets/assets/images/projects/sitedeck/shot1.jpg": "b214f472b95e3a861217dd659aa86f6a",
"assets/assets/images/projects/sitedeck/shot4.jpg": "79e94a1f0a1c302e3bdea90ef84720fa",
"assets/assets/images/projects/sitedeck/shot3.jpg": "fa3381619f795bbb2e558d73540e01e0",
"assets/assets/images/projects/just-notarized-ca/logo.png": "cfde3bca45347662e1cd983356b0dedc",
"assets/assets/fonts/Inter/OFL.txt": "5e95cb23ed621124015c5d23224ba2d3",
"assets/assets/fonts/Inter/Inter-VariableFont.ttf": "bff0f6e3b9e2259a28313168a907054f",
"assets/AssetManifest.bin.json": "51e8c34792359a86e856afe3f159e13a",
"assets/fonts/MaterialIcons-Regular.otf": "7edf7f09ee4f5fa8aa9f7b5577fb0567",
"assets/AssetManifest.bin": "3d54bfc6ed2b4ce2b2a39c5142855496",
"assets/NOTICES": "dae745a0e353b82b8d91f5df73ff028e",
"assets/AssetManifest.json": "951b12226859e8d55bff46961fe985e3",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"main.dart.mjs": "b2f15c699bcb6f28e5af95d458cdb6a1",
"flutter_bootstrap.js": "1a46d7b4561499d89fa3a9a3ffb7a4de",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"main.dart.wasm": "e8ecca63dd9e4fbaa184972ec31a446e",
"index.html": "bab80a2ec863db6d6ef4e0226ae71a7e",
"/": "bab80a2ec863db6d6ef4e0226ae71a7e",
"main.dart.js": "1dec0d6886cb50d54471dd3beaaea600",
"favicon.png": "e5e106adf3525d05efadf350f698bd63",
"manifest.json": "6ce1357d43dd816202b63fab35abf128",
"version.json": "a5eaabd03d10bf52ef8a56268611063d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"main.dart.wasm",
"main.dart.mjs",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
