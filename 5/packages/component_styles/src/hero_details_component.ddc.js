define(['dart_sdk', 'packages/component_styles/src/hero'], function(dart_sdk, hero) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__hero = hero.src__hero;
  const _root = Object.create(null);
  const src__hero_details_component = Object.create(_root);
  src__hero_details_component.HeroDetailsComponent = class HeroDetailsComponent extends core.Object {
    get hero() {
      return this[hero$];
    }
    set hero(value) {
      this[hero$] = value;
    }
  };
  (src__hero_details_component.HeroDetailsComponent.new = function() {
    this[hero$] = null;
  }).prototype = src__hero_details_component.HeroDetailsComponent.prototype;
  dart.addTypeTests(src__hero_details_component.HeroDetailsComponent);
  const hero$ = Symbol("HeroDetailsComponent.hero");
  dart.setFieldSignature(src__hero_details_component.HeroDetailsComponent, () => ({
    __proto__: dart.getFields(src__hero_details_component.HeroDetailsComponent.__proto__),
    hero: dart.fieldType(src__hero.Hero)
  }));
  dart.trackLibraries("packages/component_styles/src/hero_details_component.ddc", {
    "package:component_styles/src/hero_details_component.dart": src__hero_details_component
  }, '{"version":3,"sourceRoot":"","sources":["hero_details_component.dart"],"names":[],"mappings":";;;;;;;;;IAcO;;;;;;;;eAAI;EACX","file":"hero_details_component.ddc.js"}');
  // Exports:
  return {
    src__hero_details_component: src__hero_details_component
  };
});

//# sourceMappingURL=hero_details_component.ddc.js.map
