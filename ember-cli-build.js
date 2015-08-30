/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var Funnel = require('broccoli-funnel');
var Vulcanize = require('broccoli-vulcanize');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
    sassOptions: {
      includePaths: [
        'bower_components/bootstrap/scss'
      ]
    },
    inlineContent: {
      'fonts': 'vendor/fonts.js'
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  webfontloader = new Funnel('bower_components/webfontloader', {
    destDir: '/vendor/webfontloader',
    include: ['webfontloader.js']
  });

  webcomponents = new Funnel('bower_components/webcomponentsjs', {
    destDir: '/vendor/webcomponentsjs',
    include: ['webcomponents.js']
  });

  vulcanized = Vulcanize('app', {
    input: 'elements.html',
    output: 'assets/vulcanized.html',
    stripExcludes: false,
    stripComments: false,
    inlineScripts: false,
    inlineCss: true,
    implicitStrip: false,
    excludes: [/^data:/, /^http[s]?:/]
  });

  return app.toTree([
    webfontloader,
    webcomponents,
    vulcanized
  ]);
};
