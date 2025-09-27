'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "888483df48293866f9f41d3d9274a779",
"assets/assets/images/logo.svg": "3f7d135e502eca16d96ef4adb81fbc74",
"assets/assets/images/network_error.png": "b88c27847b14e9ab38bd74180e5c0129",
"assets/assets/images/user.jpg": "bfc916bcf03d18276b3cdc72936d7b77",
"assets/assets/images/login/profile_female_selected_icon.png": "55248657e0432c804602e19d83bf08ea",
"assets/assets/images/login/profile_title_logo.png": "bb5d30db75bee610d325b371b5d23c01",
"assets/assets/images/login/back_icon.png": "38141487b44306e518ee49b01461eed5",
"assets/assets/images/login/profile_male_unselected_icon.png": "12854d099d52c0c194818b4b9647185a",
"assets/assets/images/login/profile_background.png": "d24dd1b1ad64980d2b4304511f033a46",
"assets/assets/images/login/profile_upload_avatar_icon.png": "0c00a4f6d763b0f069c6eb118421aa81",
"assets/assets/images/login/profile_female_unselected_icon.png": "5dcf172404b927167613029fe4f4b108",
"assets/assets/images/login/background.png": "891f08ce1ef162da45453dac24d906df",
"assets/assets/images/login/profile_male_selected_icon.png": "8086187ecc14e61db34a175d13ec5103",
"assets/assets/data/activities.json": "e4b26bc4fc4e8645aecff289b83dd54b",
"assets/assets/data/destinations.json": "93121e3b19f8278dda6c6fd4bda12baa",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin": "7ba9e859eb269fe777a0167f648cc263",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/NOTICES": "aad61df2817a417ef48b73b2a8853b28",
"assets/AssetManifest.json": "2b1ee5261e94e67736de6484f63e1e52",
"assets/AssetManifest.bin.json": "ae4af502c61a702cefb654eac22fccb6",
"assets/logo/logo-128.png": "d71c03b71fc98bf63f42f078a2fa658b",
"assets/logo/logo.png": "c785f8932297af4acd5f5ccb7630f01c",
"assets/logo/logo-512.png": "e6363700939faab6e51934754ea4c839",
"assets/logo/dart.png": "735531cda11c098d9eed28ead619ab41",
"assets/logo/logo_vertical_dark.png": "0bdc069af57528e88f6c6b891ad57b8d",
"assets/logo/tray-logo.ico": "174ac1a1010d320bdf2f9a6071e1c816",
"assets/logo/logo-32.png": "ce639f9b50d0fbfac2dfd42f78d23bc3",
"assets/logo/logo_vertical.png": "ba4b1a14585b212fa1fcb6fce41e647c",
"assets/logo/dart_dark.png": "bbe3eec92e8132c1fe26422c853b913a",
"assets/logo/logo-256.png": "1c9b894f9fa04259bd4b7bcafcd9356e",
"assets/logo/tray-logo.png": "dfe2c93d1536ae02f085cc63faa3430e",
"assets/logo/android12splash.png": "1b156e18a51eec7a6c707e7f32f323fb",
"assets/fonts/MaterialIcons-Regular.otf": "838027b2a1b64ea16f1838f11c0b2349",
"_redirects": "5f52dbefcf63c9f677ace09fcf8bc7d8",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"flutter_bootstrap.js": "bd912bb1bdcecfdb5358f22dbdac67f8",
"splash/img/light-2x.png": "9c53a71940a252613274673d2dbb0fa1",
"splash/img/dark-2x.png": "e3edd49d8bbd9881b96ebb9611a97c4b",
"splash/img/branding-4x.png": "e5fa84001bddb9d665be9d496f883e8b",
"splash/img/dark-1x.png": "5dabd2148eede37e334c2d24ac4960bb",
"splash/img/branding-dark-1x.png": "43706ebc891a2239ffe0dceda6124b3d",
"splash/img/branding-1x.png": "d097e46480ad566bc5e9f2c9dea71ced",
"splash/img/light-4x.png": "464ef68a5698bf82b424f207a5838db3",
"splash/img/dark-4x.png": "1fce142bb7a66f1442c0332a76547f5d",
"splash/img/dark-3x.png": "bd06ae517a634d2b5c2ae493a7e09e12",
"splash/img/branding-dark-4x.png": "2af94f13bdda5079ff112b669b5a6db2",
"splash/img/light-1x.png": "41c3c5450f5c6489ee675564bc38cad2",
"splash/img/branding-dark-3x.png": "1344c83ffe4e44191c38bf8c3a9e0ead",
"splash/img/light-3x.png": "c9b8550795530636a303a34ba3e57e11",
"splash/img/branding-dark-2x.png": "d5804fa0b6493ce6a75fa55b07e98518",
"splash/img/branding-3x.png": "b196e75281d10cbc446b21ab9f11e031",
"splash/img/branding-2x.png": "ab2dc7190520a7391b45b697400b167a",
"version.json": "fbbe183a949d5a7cb89e17059a688710",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"index.html": "e3b030d010474c0e08e8b7eb1f6847c1",
"/": "e3b030d010474c0e08e8b7eb1f6847c1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js": "cce985864438b60937f59eeafebf1de6",
"manifest.json": "7ed8c54d1b8551d0e225bb3c6a07c0a6"};
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
