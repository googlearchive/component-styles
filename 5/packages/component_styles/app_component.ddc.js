define(['dart_sdk', 'packages/component_styles/src/hero'], function(dart_sdk, hero) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__hero = hero.src__hero;
  const _root = Object.create(null);
  const app_component = Object.create(_root);
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  app_component.AppComponent = class AppComponent extends core.Object {
    get hero() {
      return this[hero$];
    }
    set hero(value) {
      this[hero$] = value;
    }
    get themeClass() {
      return 'theme-light';
    }
  };
  (app_component.AppComponent.new = function() {
    this[hero$] = new src__hero.Hero.new('Human Torch', JSArrayOfString().of(['Mister Fantastic', 'Invisible Woman', 'Thing']));
  }).prototype = app_component.AppComponent.prototype;
  dart.addTypeTests(app_component.AppComponent);
  const hero$ = Symbol("AppComponent.hero");
  dart.setGetterSignature(app_component.AppComponent, () => ({
    __proto__: dart.getGetters(app_component.AppComponent.__proto__),
    themeClass: dart.fnType(core.String, [])
  }));
  dart.setFieldSignature(app_component.AppComponent, () => ({
    __proto__: dart.getFields(app_component.AppComponent.__proto__),
    hero: dart.fieldType(src__hero.Hero)
  }));
  dart.trackLibraries("packages/component_styles/app_component.ddc", {
    "package:component_styles/app_component.dart": app_component
  }, '{"version":3,"sourceRoot":"","sources":["app_component.dart"],"names":[],"mappings":";;;;;;;;;;;IAYO;;;;;;;YAIoB;IAAa;;;IAJjC,WAAI,GACL,IAAI,kBAAI,CAAC,eAAe,sBAAC,oBAAoB,mBAAmB;EAItE","file":"app_component.ddc.js"}');
  // Exports:
  return {
    app_component: app_component
  };
});

//# sourceMappingURL=app_component.ddc.js.map
