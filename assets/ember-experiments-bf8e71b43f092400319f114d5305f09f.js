"use strict";define("ember-experiments/acceptance-tests/main",["exports","ember-cli-sri/acceptance-tests/main"],function(e,t){e["default"]=t["default"]}),define("ember-experiments/adapters/application",["exports","ember","emberfire/adapters/firebase"],function(e,t,r){var n=t["default"].inject;e["default"]=r["default"].extend({firebase:n.service()})}),define("ember-experiments/app",["exports","ember","ember/resolver","ember/load-initializers","ember-experiments/config/environment"],function(e,t,r,n,i){var a;t["default"].MODEL_FACTORY_INJECTIONS=!0,a=t["default"].Application.extend({modulePrefix:i["default"].modulePrefix,podModulePrefix:i["default"].podModulePrefix,Resolver:r["default"]}),n["default"](a,i["default"].modulePrefix),e["default"]=a}),define("ember-experiments/components/app-version",["exports","ember-cli-app-version/components/app-version","ember-experiments/config/environment"],function(e,t,r){var n=r["default"].APP.name,i=r["default"].APP.version;e["default"]=t["default"].extend({version:i,name:n})}),define("ember-experiments/controllers/array",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("ember-experiments/controllers/object",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("ember-experiments/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","ember-experiments/config/environment"],function(e,t,r){e["default"]={name:"App Version",initialize:t["default"](r["default"].APP.name,r["default"].APP.version)}}),define("ember-experiments/initializers/emberfire",["exports","emberfire/initializers/emberfire"],function(e,t){e["default"]=t["default"]}),define("ember-experiments/initializers/export-application-global",["exports","ember","ember-experiments/config/environment"],function(e,t,r){function n(){var e=arguments[1]||arguments[0];if(r["default"].exportApplicationGlobal!==!1){var n,i=r["default"].exportApplicationGlobal;n="string"==typeof i?i:t["default"].String.classify(r["default"].modulePrefix),window[n]||(window[n]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[n]}}))}}e.initialize=n,e["default"]={name:"export-application-global",initialize:n}}),define("ember-experiments/router",["exports","ember","ember-experiments/config/environment"],function(e,t,r){var n=t["default"].Router.extend({location:r["default"].locationType});n.map(function(){}),e["default"]=n}),define("ember-experiments/services/firebase",["exports","emberfire/services/firebase","ember-experiments/config/environment"],function(e,t,r){t["default"].config=r["default"],e["default"]=t["default"]}),define("ember-experiments/templates/application",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@2.0.1",loc:{source:null,start:{line:1,column:0},end:{line:1,column:46}},moduleName:"ember-experiments/templates/application.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),r=e.createElement("h2");e.setAttribute(r,"id","title");var n=e.createTextNode("Welcome to Ember");e.appendChild(r,n),e.appendChild(t,r);var r=e.createComment("");return e.appendChild(t,r),t},buildRenderNodes:function(e,t,r){var n=new Array(1);return n[0]=e.createMorphAt(t,1,1,r),e.insertBoundary(t,null),n},statements:[["content","outlet",["loc",[null,[1,36],[1,46]]]]],locals:[],templates:[]}}())}),define("ember-experiments/torii-providers/firebase",["exports","emberfire/torii-providers/firebase"],function(e,t){e["default"]=t["default"]}),define("ember-experiments/config/environment",["ember"],function(e){var t="ember-experiments";try{var r=t+"/config/environment",n=e["default"].$('meta[name="'+r+'"]').attr("content"),i=JSON.parse(unescape(n));return{"default":i}}catch(a){throw new Error('Could not read config from meta tag with name "'+r+'".')}}),runningTests?require("ember-experiments/tests/test-helper"):require("ember-experiments/app")["default"].create({name:"ember-experiments",version:"0.0.0+fb2ad053"});