// Filename: main.js

// Require.js allows us to configure shortcut alias
require.config({
  // ====== Remove before production ======
  urlArgs: "ts="+new Date().getTime(),
  // ======================================
  baseUrl: 'js/',
  paths: {
    backbone: 'bower_components/backbone/backbone',
    jquery: 'bower_components/jquery/dist/jquery.min',
    react: 'bower_components/react/react-with-addons',
    JSXTransformer: 'bower_components/react/JSXTransformer',
    underscore: 'bower_components/underscore/underscore-min',
  },
  shim: {
    JSXTransformer: {
      exports: "JSXTransformer"
    }
  }
});

require([
  // Load our app module and pass it to our definition function
  'app',
], function(App){
  // The "app" dependency is passed in as "App"
  App.initialize();
});