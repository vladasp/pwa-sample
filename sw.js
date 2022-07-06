'use strict';
// importScripts('sw-toolbox.js'); 
// toolbox.precache(["index.html","style/style.css"]); 
// toolbox.router.get('/images/*', toolbox.cacheFirst); 
// toolbox.router.get('/*', toolbox.networkFirst, { networkTimeoutSeconds: 5});

// This code executes in its own worker or thread
self.addEventListener("install", event => {
    console.log("Service worker installed from sw");
 });
 self.addEventListener("activate", event => {
    console.log("Service worker activated from sw");
 });