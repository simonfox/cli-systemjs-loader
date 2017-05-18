var path = require("path");
var Builder = require('systemjs-builder');

// optional constructor options
// sets the baseURL and loads the configuration file
var builder = new Builder('/', 'config.js');

builder
.bundle("(lib/main.js + lib/app.js + lib/resources/index.js) - node_modules/*", 'scripts/systemjs-app-bundle.js')
.then(function() {
  console.log('App Build complete');
})
.catch(function(err) {
  console.log('Build error');
  console.log(err);
});


builder
.bundle("node_modules/systemjs-plugin-text/text.js + node_modules/aurelia-binding/dist/system/aurelia-binding + node_modules/aurelia-bootstrapper/dist/system/aurelia-bootstrapper + aurelia-dependency-injection + aurelia-event-aggregator + aurelia-framework + aurelia-history + aurelia-history-browser + aurelia-loader + aurelia-loader-default + aurelia-logging + aurelia-logging-console + aurelia-metadata + aurelia-pal + aurelia-pal-browser + aurelia-path + aurelia-polyfills + aurelia-route-recognizer + aurelia-router + aurelia-task-queue + aurelia-templating + aurelia-templating-binding + aurelia-templating-resources + aurelia-templating-router + aurelia-testing", 'scripts/systemjs-vendor-bundle.js')
.then(function() {
  console.log('Vendor Build complete');
})
.catch(function(err) {
  console.log('Build error');
  console.log(err);
});