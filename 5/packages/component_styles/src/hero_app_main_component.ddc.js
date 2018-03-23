define(['dart_sdk', 'packages/component_styles/src/hero'], function(dart_sdk, hero) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__hero = hero.src__hero;
  const _root = Object.create(null);
  const src__hero_app_main_component = Object.create(_root);
  src__hero_app_main_component.HeroAppMainComponent = class HeroAppMainComponent extends core.Object {
    get hero() {
      return this[hero$];
    }
    set hero(value) {
      this[hero$] = value;
    }
  };
  (src__hero_app_main_component.HeroAppMainComponent.new = function() {
    this[hero$] = null;
  }).prototype = src__hero_app_main_component.HeroAppMainComponent.prototype;
  dart.addTypeTests(src__hero_app_main_component.HeroAppMainComponent);
  const hero$ = Symbol("HeroAppMainComponent.hero");
  dart.setFieldSignature(src__hero_app_main_component.HeroAppMainComponent, () => ({
    __proto__: dart.getFields(src__hero_app_main_component.HeroAppMainComponent.__proto__),
    hero: dart.fieldType(src__hero.Hero)
  }));
  dart.trackLibraries("packages/component_styles/src/hero_app_main_component.ddc", {
    "package:component_styles/src/hero_app_main_component.dart": src__hero_app_main_component
  }, '{"version":3,"sourceRoot":"","sources":["hero_app_main_component.dart"],"names":[],"mappings":";;;;;;;;;IAkBO;;;;;;;;eAAI;EACX","file":"hero_app_main_component.ddc.js"}');
  // Exports:
  return {
    src__hero_app_main_component: src__hero_app_main_component
  };
});

//# sourceMappingURL=hero_app_main_component.ddc.js.map
