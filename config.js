SystemJS.config({
    map: {
      "src": "src",
      "main": "src/main",
      "resources": "src/resources",
      "app": "src/app",

      'plugin-babel': 'node_modules/systemjs-plugin-babel/plugin-babel.js',
      'systemjs-babel-build': 'node_modules/systemjs-plugin-babel/systemjs-babel-browser.js',
      "text": "node_modules/systemjs-plugin-text/text.js",

      "aurelia-binding":"node_modules/aurelia-binding/dist/system/aurelia-binding",
      "aurelia-bootstrapper":"../node_modules/aurelia-bootstrapper/dist/system/aurelia-bootstrapper",
      "aurelia-dependency-injection":"node_modules/aurelia-dependency-injection/dist/system/aurelia-dependency-injection",
      "aurelia-event-aggregator":"node_modules/aurelia-event-aggregator/dist/system/aurelia-event-aggregator",
      "aurelia-framework":"node_modules/aurelia-framework/dist/system/aurelia-framework",
      "aurelia-history":"node_modules/aurelia-history/dist/system/aurelia-history",
      "aurelia-history-browser":"node_modules/aurelia-history-browser/dist/system/aurelia-history-browser",
      "aurelia-loader":"node_modules/aurelia-loader/dist/system/aurelia-loader",
      "aurelia-loader-default":"node_modules/aurelia-loader-default/dist/system/aurelia-loader-default",
      "aurelia-logging":"node_modules/aurelia-logging/dist/system/aurelia-logging",
      "aurelia-logging-console":"node_modules/aurelia-logging-console/dist/system/aurelia-logging-console",
      "aurelia-metadata":"node_modules/aurelia-metadata/dist/system/aurelia-metadata",
      "aurelia-pal":"node_modules/aurelia-pal/dist/system/aurelia-pal",
      "aurelia-pal-browser":"node_modules/aurelia-pal-browser/dist/system/aurelia-pal-browser",
      "aurelia-path":"node_modules/aurelia-path/dist/system/aurelia-path",
      "aurelia-polyfills":"node_modules/aurelia-polyfills/dist/system/aurelia-polyfills",
      "aurelia-route-recognizer":"node_modules/aurelia-route-recognizer/dist/system/aurelia-route-recognizer",
      "aurelia-router":"node_modules/aurelia-router/dist/system/aurelia-router",
      "aurelia-task-queue":"node_modules/aurelia-task-queue/dist/system/aurelia-task-queue",
      "aurelia-templating":"node_modules/aurelia-templating/dist/system/aurelia-templating",
      "aurelia-templating-binding":"node_modules/aurelia-templating-binding/dist/system/aurelia-templating-binding",
      
      "aurelia-templating-resources":"node_modules/aurelia-templating-resources/dist/system/aurelia-templating-resources",
      "aurelia-templating-resources/":"node_modules/aurelia-templating-resources/dist/system/",
      "aurelia-templating-router":"node_modules/aurelia-templating-router/dist/system/aurelia-templating-router",
      "aurelia-templating-router/":"node_modules/aurelia-templating-router/dist/system/",
      "aurelia-testing":"node_modules/aurelia-testing/dist/system/aurelia-testing",
      "aurelia-testing/":"node_modules/aurelia-testing/dist/system/"
    },
    transpiler: 'plugin-babel',
    packages: {
      '/': {
        defaultExtension: 'js'
      }
    },
    meta: {
      "**/*.html": {
        loader: "text"
      }
    }
  });