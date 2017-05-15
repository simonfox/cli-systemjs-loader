SystemJS.config({
    baseURL: "scripts",
    map: {
      "text": "./node_modules/systemjs-plugin-text/text.js",
      "aurelia-binding":"./node_modules/aurelia-binding/dist/system/aurelia-binding",
      "aurelia-bootstrapper":"./node_modules/aurelia-bootstrapper/dist/system/aurelia-bootstrapper",
      "aurelia-dependency-injection":"./node_modules/aurelia-dependency-injection/dist/system/aurelia-dependency-injection",
      "aurelia-event-aggregator":"./node_modules/aurelia-event-aggregator/dist/system/aurelia-event-aggregator",
      "aurelia-framework":"./node_modules/aurelia-framework/dist/system/aurelia-framework",
      "aurelia-history":"./node_modules/aurelia-history/dist/system/aurelia-history",
      "aurelia-history-browser":"./node_modules/aurelia-history-browser/dist/system/aurelia-history-browser",
      "aurelia-loader":"./node_modules/aurelia-loader/dist/system/aurelia-loader",
      "aurelia-loader-default":"./node_modules/aurelia-loader-default/dist/system/aurelia-loader-default",
      "aurelia-logging":"./node_modules/aurelia-logging/dist/system/aurelia-logging",
      "aurelia-logging-console":"./node_modules/aurelia-logging-console/dist/system/aurelia-logging-console",
      "aurelia-metadata":"./node_modules/aurelia-metadata/dist/system/aurelia-metadata",
      "aurelia-pal":"./node_modules/aurelia-pal/dist/system/aurelia-pal",
      "aurelia-pal-browser":"./node_modules/aurelia-pal-browser/dist/system/aurelia-pal-browser",
      "aurelia-path":"./node_modules/aurelia-path/dist/system/aurelia-path",
      "aurelia-polyfills":"./node_modules/aurelia-polyfills/dist/system/aurelia-polyfills",
      "aurelia-route-recognizer":"./node_modules/aurelia-route-recognizer/dist/system/aurelia-route-recognizer",
      "aurelia-router":"./node_modules/aurelia-router/dist/system/aurelia-router",
      "aurelia-task-queue":"./node_modules/aurelia-task-queue/dist/system/aurelia-task-queue",
      "aurelia-templating":"./node_modules/aurelia-templating/dist/system/aurelia-templating",
      "aurelia-templating-binding":"./node_modules/aurelia-templating-binding/dist/system/aurelia-templating-binding"
    },
    packages: {
      '.': {},
      defaultExtension: 'js'
    },
    meta: {
      "**/*.html": {
        loader: "text"
      }
    },
    "bundles": {
      "app-bundle.js": [
        "app.html",
        "app.js",
        "environment.js",
        "main.js"
      ],
      "vendor-bundle.js":[
        "aurelia-binding/dist/system/aurelia-binding.js",
        "aurelia-bootstrapper/dist/system/aurelia-bootstrapper.js",
        "aurelia-dependency-injection/dist/system/aurelia-dependency-injection.js",
        "aurelia-event-aggregator/dist/system/aurelia-event-aggregator.js",
        "aurelia-framework/dist/system/aurelia-framework.js",
        "aurelia-history/dist/system/aurelia-history.js",
        "aurelia-history-browser/dist/system/aurelia-history-browser.js",
        "aurelia-loader/dist/system/aurelia-loader.js",
        "aurelia-loader-default/dist/system/aurelia-loader-default.js",
        "aurelia-logging/dist/system/aurelia-logging.js",
        "aurelia-logging-console/dist/system/aurelia-logging-console.js",
        "aurelia-metadata/dist/system/aurelia-metadata.js",
        "aurelia-pal/dist/system/aurelia-pal.js",
        "aurelia-pal-browser/dist/system/aurelia-pal-browser.js",
        "aurelia-path/dist/system/aurelia-path.js",
        "aurelia-polyfills/dist/system/aurelia-polyfills.js",
        "aurelia-route-recognizer/dist/system/aurelia-route-recognizer.js",
        "aurelia-router/dist/system/aurelia-router.js",
        "aurelia-task-queue/dist/system/aurelia-task-queue.js",
        "aurelia-templating/dist/system/aurelia-templating.js",
        "aurelia-templating-binding/dist/system/aurelia-templating-binding.js"
      ]
    }
  });