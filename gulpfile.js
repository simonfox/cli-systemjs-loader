var path = require('path');
var gulp = require('gulp');
var Builder = require('systemjs-builder');

gulp.task('default', function(done) {
    var builder = new Builder('./scripts/', 'config.js');

builder
.bundle([
        "../node_modules/aurelia-binding/dist/system/aurelia-binding.js",
        "../node_modules/aurelia-bootstrapper/dist/system/aurelia-bootstrapper.js",
        "../node_modules/aurelia-dependency-injection/dist/system/aurelia-dependency-injection.js",
        "../node_modules/aurelia-event-aggregator/dist/system/aurelia-event-aggregator.js",
        "../node_modules/aurelia-framework/dist/system/aurelia-framework.js",
        "../node_modules/aurelia-history/dist/system/aurelia-history.js",
        "../node_modules/aurelia-history-browser/dist/system/aurelia-history-browser.js",
        "../node_modules/aurelia-loader/dist/system/aurelia-loader.js",
        "../node_modules/aurelia-loader-default/dist/system/aurelia-loader-default.js",
        "../node_modules/aurelia-logging/dist/system/aurelia-logging.js",
        "../node_modules/aurelia-logging-console/dist/system/aurelia-logging-console.js",
        "../node_modules/aurelia-metadata/dist/system/aurelia-metadata.js",
        "../node_modules/aurelia-pal/dist/system/aurelia-pal.js",
        "../node_modules/aurelia-pal-browser/dist/system/aurelia-pal-browser.js",
        "../node_modules/aurelia-path/dist/system/aurelia-path.js",
        "../node_modules/aurelia-polyfills/dist/system/aurelia-polyfills.js",
        "../node_modules/aurelia-route-recognizer/dist/system/aurelia-route-recognizer.js",
        "../node_modules/aurelia-router/dist/system/aurelia-router.js",
        "../node_modules/aurelia-task-queue/dist/system/aurelia-task-queue.js",
        "../node_modules/aurelia-templating/dist/system/aurelia-templating.js",
        "../node_modules/aurelia-templating-binding/dist/system/aurelia-templating-binding.js",

        "../node_modules/aurelia-templating-resources/dist/system/abstract-repeater.js",
        "../node_modules/aurelia-templating-resources/dist/system/analyze-view-factory.js",
        "../node_modules/aurelia-templating-resources/dist/system/array-repeat-strategy.js",
        "../node_modules/aurelia-templating-resources/dist/system/attr-binding-behavior.js",
        "../node_modules/aurelia-templating-resources/dist/system/aurelia-hide-style.js",
        "../node_modules/aurelia-templating-resources/dist/system/aurelia-templating-resources.js",
        "../node_modules/aurelia-templating-resources/dist/system/binding-mode-behaviors.js",
        "../node_modules/aurelia-templating-resources/dist/system/binding-signaler.js",
        "../node_modules/aurelia-templating-resources/dist/system/compose.js",
        "../node_modules/aurelia-templating-resources/dist/system/css-resource.js",
        "../node_modules/aurelia-templating-resources/dist/system/debounce-binding-behavior.js",
        "../node_modules/aurelia-templating-resources/dist/system/dynamic-element.js",
        "../node_modules/aurelia-templating-resources/dist/system/focus.js",
        "../node_modules/aurelia-templating-resources/dist/system/hide.js",
        "../node_modules/aurelia-templating-resources/dist/system/html-resource-plugin.js",
        "../node_modules/aurelia-templating-resources/dist/system/html-sanitizer.js",
        "../node_modules/aurelia-templating-resources/dist/system/if.js",
        "../node_modules/aurelia-templating-resources/dist/system/map-repeat-strategy.js",
        "../node_modules/aurelia-templating-resources/dist/system/null-repeat-strategy.js",
        "../node_modules/aurelia-templating-resources/dist/system/number-repeat-strategy.js",
        "../node_modules/aurelia-templating-resources/dist/system/repeat-strategy-locator.js",
        "../node_modules/aurelia-templating-resources/dist/system/repeat-utilities.js",
        "../node_modules/aurelia-templating-resources/dist/system/repeat.js",
        "../node_modules/aurelia-templating-resources/dist/system/replaceable.js",
        "../node_modules/aurelia-templating-resources/dist/system/sanitize-html.js",
        "../node_modules/aurelia-templating-resources/dist/system/self-binding-behavior.js",
        "../node_modules/aurelia-templating-resources/dist/system/set-repeat-strategy.js",
        "../node_modules/aurelia-templating-resources/dist/system/show.js",
        "../node_modules/aurelia-templating-resources/dist/system/signal-binding-behavior.js",
        "../node_modules/aurelia-templating-resources/dist/system/throttle-binding-behavior.js",
        "../node_modules/aurelia-templating-resources/dist/system/update-trigger-binding-behavior.js",
        "../node_modules/aurelia-templating-resources/dist/system/with.js",
        "../node_modules/aurelia-templating-router/dist/system/aurelia-templating-router.js",
        "../node_modules/aurelia-templating-router/dist/system/route-href.js",
        "../node_modules/aurelia-templating-router/dist/system/route-loader.js",
        "../node_modules/aurelia-templating-router/dist/system/router-view.js",
      ], "scripts/app-bundle.js")
.then(function() {
  console.log('Build complete');
  done();
})
.catch(function(err) {
  console.log('Build error');
  console.log(err);
  done();
});
});


