const BASE_CACHE_FILES = [
  '/',
  '/js/jquery-3.3.1.min.js',
  '/404.html',
  '/offline',
  '/css/medium.css',
  '/css/bootstrap.min.css',
  '/css/additional.css',
  '/css/custom.css',
  '/manifest.json',
  '/images/logo.png',
  '/images/jumbotron.jpg',
  '/js/mediumish.js',
  '/blog',
  '/blog/2017-08-17_upcoming-talks/',
  '/static/about',
  '/privacy'
];

const OFFLINE_CACHE_FILES = [
  '/offline/'
];

const NOT_FOUND_CACHE_FILES = [
  '/404.html'
];

const OFFLINE_PAGE = '/offline/';
const NOT_FOUND_PAGE = '/404.html';

const CACHE_VERSION = 1;
const CACHE_VERSIONS = {
  assets: 'assets-v' + CACHE_VERSION,
  content: 'content-v' + CACHE_VERSION,
  offline: 'offline-v' + CACHE_VERSION,
  notFound: '404-v' + CACHE_VERSION,
};

// Define MAX_TTL's in SECONDS for specific file extensions
const MAX_TTL = {
  '/': 3600,
  html: 43200,
  json: 43200,
  js: 86400,
  css: 86400,
};

const CACHE_BLACKLIST = [
  (str) => !str.startsWith('https://bernardtm.github.io')
];

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('video-store').then(function(cache) {
      return cache.addAll([
        '/index.html'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});