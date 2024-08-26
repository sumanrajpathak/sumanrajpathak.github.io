'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "b7eba3804906908529ea0ecff71a40bb",
"version.json": "9a36536ace9a7abc49bc9b2a14b0b0b7",
"index.html": "2da4c7ff9ae6135713dafeebd233fef1",
"/": "2da4c7ff9ae6135713dafeebd233fef1",
"main.dart.js": "3570866d006ba93c696564ed2ce9bee6",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5b09b18871b9c8abe6fd0ae510b8d683",
"icons/Icon-192.png": "8013ca07122f5cc3a522e922135bca8c",
"icons/Icon-maskable-192.png": "8013ca07122f5cc3a522e922135bca8c",
"icons/Icon-maskable-512.png": "8808c85aea0f0dbdf36d3072a3883536",
"icons/Icon-512.png": "8808c85aea0f0dbdf36d3072a3883536",
"manifest.json": "529f5cdd8dcb484fcabe46cff70d1ba9",
".git/config": "18eb69f6cbbf000b8ded102444d89efe",
".git/objects/59/645ee189e5c1bac4a856a0f81f0f8255980074": "766847b32f70d45ccf4fc83ef07caf51",
".git/objects/57/a1c0512502ac6e602cb4d2dbbd07f8f1733e39": "a1428b8116ef956bdefa4fdc4c8084f3",
".git/objects/3b/6a3258d1c22f00e434e0f41cfdbd623761c093": "9f40c2fda5ed72431e9a2010c47ce934",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/9b/c91e1a4f8ec8b484f02cd0f595a686494fef36": "7e49127087bf7ae16ca9e3dbbd9bbd9c",
".git/objects/35/1c41da91c82166c74ef55553873bba68796da0": "e81933b87cd9fd5c506d8b316460f2c6",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/35/fce79113fe7f502713f48b2f3521c8134e38a7": "47bc6c503c81e22f01b2e13c0f3366dc",
".git/objects/3c/37e873ff472659c16082fa6210862949745ce5": "83c5ee146d920b6141738a3ad0f6f1a5",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/0b/593e970fb5d8d158ae30c0344c6781e7f9e0de": "84abe752a2f6f091332d6072f7215030",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/5f/26fd6dbf530c2311010df35f7eaa3e2aee0c3b": "6765c8488cd45b58f52024d0239a03ac",
".git/objects/05/f1b0585267e99edb7ace65d9c72d6e0ee5f57d": "32da914d6fdb8886f7ee636ff2e60150",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/d9/a23eaae469a3864bff9facdb80aa091d04c668": "5f6b97d10b52ea5fe6381fce370be9ff",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/b4/d3e887c305232cc2b9264c181e449b51682e3e": "f7d7def74ad3ca131f6d519f1c6e4d92",
".git/objects/d6/0c21129e7c978e42409486f26c658989929b1b": "1b0ac5d80ec799a11bb426a7725b64ac",
".git/objects/bc/530a7b4d2e401a19d7f725ed703d9d7c1c52be": "df7d8ee8bca3900e4aaf70d8f3cff38c",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/f2/4609fc5bfc55c1b2b57488da8214c06867eef3": "cd92ec40979bdf0b48db312e82d48c42",
".git/objects/4b/c3d6d6323e10a427c1eab5838c2bf65eb2fa05": "13d2f5fe11c5b0b82c4da4d562f486ef",
".git/objects/7c/86b8e3ddc92222edbd5e7b6fc31e5c39f3c03c": "6457fa29fe54a52e7775f771a839f629",
".git/objects/7c/6fc80de4360928ac79bfca8fb221443e702428": "c88308e027eb01e9e76d59f7c5c0a94a",
".git/objects/42/9d0d2b705ae8b23f11de63b0312fbdd9be8ba6": "a14551fcd7f986785475c0222aaf38b9",
".git/objects/45/75bd6e97d653e3c01498db97790fc8c2c25071": "bf2cb8eba08a9c201c99844de110b1e3",
".git/objects/8f/25defb4b64ae4da0a555848088e65628542f7d": "a765e1ad0a489859ad42532447e39b33",
".git/objects/19/6817c3c68a9336564d35a440ec24e543a4fbc6": "49d4b11883f9531cb0c8253f7e4f0ba1",
".git/objects/86/bee61dee788db1b4c29928cb77342ee4cf78d7": "67c722fb5f9304c97271c20ddbea3eb1",
".git/objects/88/d0bbb96db2eaece90083fb6a5e88c9d8302a76": "a63cafe58b4223ebdc08237b492a8929",
".git/objects/88/0bf2d7c4156eb722d3fe1eb1ff1447fb004c70": "4845604f4200ffb27e07dfc757bb888e",
".git/objects/07/288a0749d08abde4bd348937abb20611c9e8f9": "3d6890644de25b32dd6ea0c5880a8af8",
".git/objects/9a/c812dec517a11a2cbc98d5f90a5a36c226fc27": "16f716bbeb89d928c61d62644522995d",
".git/objects/09/c6078b2fff0cf24c08ab758a3703b1070b4875": "94ad367082982b8de0461b2a8422ad79",
".git/objects/91/e74ba28a87488e5680af5f34ca5f6ed491bab4": "87a0d9b5f907034e2e617e812111c092",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/5e/6fb715a5515f7d29279acdf8829da98d5ef872": "b64eb255a4820a295479e296524ee6ba",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/39/deb2e7b5de843c5aa177c4acbf21671c9de84a": "fef06a3050e8fec45ee99c1a31bcf3d4",
".git/objects/63/5b1a089efcd42adfcd544b78e122b9d7430211": "52c9aedcf74b1c591fec21ba16cd8b18",
".git/objects/64/b28ef4d585b305d99988fb0805918599d6acac": "9d74f4a074cef027b9d9e725792b62ba",
".git/objects/bf/c8b1eb5e66f583b40bea4230124fee54aceb88": "63a79af94b43d35bdf14fa2ffbd2791a",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/25095f4cc40a7b8b58170b311b5e5f54002105": "a498ab3f64695c40cbeec86a728b4027",
".git/objects/db/54a787579d7ce20b0db3e4554f1924c7c2ecc3": "168abd827f8612e716a84a31e3258d20",
".git/objects/b0/5f7e131d0d920297934ff716eaf397db20fe55": "28c3b94e58a9a036854c8c2641bda715",
".git/objects/cd/3171aa62d06302b3d4ec32951803e835975db2": "f1a6474127e0912f10af5b3f4e484bcc",
".git/objects/e6/cc4fcdf56b366d187f1af59149fba6df1a5c41": "8fa58fe80a3ba3153221cd223a073344",
".git/objects/e6/c9087e1a65e24a480b9eb187a9289b3bb16798": "be773ff450cffe7fc0daa9b41f39f9c3",
".git/objects/f6/f6ad6a7898e01db1e3e6ae115f65326a7af457": "dcbc64f0114e2d35f37e0fee117d0f54",
".git/objects/e9/730e9dc0f3f4618c2526127d5d929ee266c14f": "9ff0306334334383e3a8bfe78924542d",
".git/objects/cb/5e5c3f9e02aef3d34cb45ae5bebbf77e238a96": "999e9a18fd12c109fbe3d588d80d58fe",
".git/objects/2d/9c4dfd9910a2d9844664c43294f7ce6a7120d2": "5c977ab5345018cc6e76210910c72e0a",
".git/objects/77/994057bc051b0eec4794baffb364f7f05bf4f8": "483155db50bcd8ad2d40a4cf33721969",
".git/objects/48/f40bac8e96e4312e45cc1e94fe8a9faa42d3ac": "49858fa46060ecf34dfb62909b0b67d2",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/23/c68972a539b5ce436487ba08b6f051ce8008db": "e1abe4fe0558e75a455b5cb7a3f465ae",
".git/objects/85/1cab288961e5c9692f0f3337e1f6d68bc89dd3": "8f81740527caa44c507bfe8a1bf87899",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/82/9af65ec2933d7c1d6b6d87f66e749c007671b1": "22ac645380394b7013f6ef306ad7c680",
".git/objects/49/f590ea4ba47de138ace6ee3782e820eb131810": "d8843915d2200b91489bcf1075118213",
".git/objects/2e/a98e23b618fe344e9d3a8ef7e1e44f18cd5d7a": "79e2cf549f1403148fb7da18722fa025",
".git/objects/2b/94f71310b7bc84e40de9fff3898b27f4ad2ed8": "b814568b5161c97ae7df14b679b85d0d",
".git/objects/8b/ef68a05e75c5e198e09c78bf826f2b217706c0": "094472ec7e2ae4c31aa9e789bb471b9c",
".git/objects/7a/38756d2f30331f534ce08c3d4739eb14baadad": "0833cef762d7e87992baa3b487bd0ab6",
".git/objects/7a/58a85997e98ffbe3334f33a10653b47307603d": "57bb26d0dffeef99c82ebdb8aa347bd9",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/25/5921d1338f3b9344170a86e5c3b64596e51852": "742de1efadbb271ae98287ce52f50004",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c450c68ffb50d3fdc42a43efa60ea41f",
".git/logs/refs/heads/main": "c450c68ffb50d3fdc42a43efa60ea41f",
".git/logs/refs/remotes/origin/main": "067a12e2fd01a81173d4c5c5466f5acd",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "4ed9d5dbc117f6869a45ca7ec66427cf",
".git/refs/remotes/origin/main": "4ed9d5dbc117f6869a45ca7ec66427cf",
".git/index": "7fc69b667e6e624ffeca6b01c238691d",
".git/COMMIT_EDITMSG": "32ea928a9c669f80b8d5475ec4779402",
"assets/AssetManifest.json": "62d223b350b1c01059d72e88042987fb",
"assets/NOTICES": "58124c9dd626209d494a9c5973e989c8",
"assets/FontManifest.json": "cab905cb3aac16cd8f8b52a8d504c382",
"assets/AssetManifest.bin.json": "8e4105f32994c5d1eeaef80524be743b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ecb78a6a1588cde93a64f5240ab03bc6",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "dd955a76d75af23521bb7957d5596117",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b920880bf7b04115944cc784c00cb8a3",
"assets/packages/feather_icons/fonts/feather.ttf": "0d0d92d310cc68e53796bf15c36838c2",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "c7067a48e363bbd1251664a466394219",
"assets/fonts/MaterialIcons-Regular.otf": "6ab2fe15d84089b2a892eb618511923e",
"assets/assets/images/dev_aboutme1.png": "597f4baef169b00ed99dcd8ef81a4257",
"assets/assets/images/portfolio_01.jpg": "39d6accb540257c4afa4809950ef7329",
"assets/assets/images/blob_bean_ash.png": "bc902ac538eedf1abc48457bbf064fd1",
"assets/assets/images/blob_femur_ash.png": "b899f92250a0f7220db5c45bea2080c8",
"assets/assets/images/portfolio_03.jpg": "efed6e8a74607f4c9f9d7835d908ab65",
"assets/assets/images/portfolio_02.jpg": "c922dbae8fb17f2941e9c394ef19147c",
"assets/assets/images/icon_box.jpg": "7a18b9b091db5fe0fc16c76a3ffd5db2",
"assets/assets/images/portfolio_06.jpg": "8f8b9b796bcc24601092b8c9a8ac4846",
"assets/assets/images/app_icon.png": "cead2401e2827f718d07b927562eecab",
"assets/assets/images/portfolio_05.jpg": "c718dc4b9dbde6c94d781afc5fef9329",
"assets/assets/images/portfolio_04.jpg": "a5996d97c5c50714b6cb2d684e71bd9b",
"assets/assets/images/blob_ash.png": "f76b87a8dd8bb4ad017b441854541a2b",
"assets/assets/images/dev_aboutme.png": "c814f7246455d1c732652874cf4ca5e3",
"assets/assets/images/box_cover_dark.png": "34f90bdba46732221c608605016c40d5",
"assets/assets/images/logo_dark.png": "e61dc6e9452ab84d13d7adf2421d8e86",
"assets/assets/images/dots_globe_yellow.png": "d908b032e1a46382b6e6c2baf92e188c",
"assets/assets/images/box_cover_gold.png": "a58f0270c1fd04d7eae1217c7e5645b9",
"assets/assets/images/dev_header.png": "b559344e7125a19e33e809cdee0240ba",
"assets/assets/images/dots_globe_grey.png": "bb16bba932c2e98f3dbe3e6b1b6a864b",
"assets/assets/images/logo_light.png": "e61dc6e9452ab84d13d7adf2421d8e86",
"assets/assets/images/blob_small_bean_ash.png": "411605e065607a48e110cedc91bebd82",
"assets/assets/images/blob_black.png": "14198d608b7f0980998d329cd353e290",
"assets/assets/images/dev_award.png": "cead2401e2827f718d07b927562eecab",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
