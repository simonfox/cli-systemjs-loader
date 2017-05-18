SystemJS.config({
    map: {
      "text": 'node_modules/systemjs-plugin-text/text.js',
      "app-bundle": "scripts/app-bundle.js"
    },
    bundles: {
      "app-bundle": ["app", "main", "environment", "resources/index"]
    }
  });