/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ember-experiments',
    podModulePrefix: 'ember-experiments/pods',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    firebase: 'https://rx-ember-experiments.firebaseio.com/',
    torii: {
      sessionServiceName: 'session'
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.contentSecurityPolicy = {
      'connect-src': "'self' https://auth.firebase.com wss://*.firebaseio.com",
      'script-src': "'self' 'unsafe-inline'",
      'font-src': "'self' http://fonts.gstatic.com https://maxcdn.bootstrapcdn.com",
      'style-src': "'self' 'unsafe-inline' http://fonts.googleapis.com https://maxcdn.bootstrapcdn.com"
    };
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.baseURL = '/ember-experiments';
    ENV.locationType = 'hash';
    ENV.googleAnalytics = {
      webPropertyId: 'UA-19631381-7'
    };
  }

  return ENV;
};
