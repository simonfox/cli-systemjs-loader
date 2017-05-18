SystemJS.config({
    map: {
      "app-bundle": "scripts/app-bundle.js"
    },
    bundles: {
      "app-bundle": ["app", "main", "environment", "resources/index"]
    }
  });