Package.describe({
  name: 'blaze-dynamic-import',
  summary: "Dynamically import Blaze when it's needed",
  version: '0.0.1',
  git: 'https://github.com/meteor/blaze.git'
});

Package.onUse(function(api) {
  api.use([
    'ecmascript',
    'dynamic-import',
    // blaze-html-templates is the main meta package for including blaze in your app
  ]);
  api.use('blaze-html-templates', { unordered: true })
  api.imply('templating-compiler');
  api.mainModule('blaze-dynamic-import.js', 'client', {lazy: true});
});
