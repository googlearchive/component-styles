define(['dart_sdk', 'packages/component_styles/src/hero'], function(dart_sdk, hero) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__hero = hero.src__hero;
  const _root = Object.create(null);
  const src__hero_controls_component = Object.create(_root);
  src__hero_controls_component.HeroControlsComponent = class HeroControlsComponent extends core.Object {
    get hero() {
      return this[hero$];
    }
    set hero(value) {
      this[hero$] = value;
    }
    activate() {
      this.hero.active = true;
    }
  };
  (src__hero_controls_component.HeroControlsComponent.new = function() {
    this[hero$] = null;
  }).prototype = src__hero_controls_component.HeroControlsComponent.prototype;
  dart.addTypeTests(src__hero_controls_component.HeroControlsComponent);
  const hero$ = Symbol("HeroControlsComponent.hero");
  dart.setMethodSignature(src__hero_controls_component.HeroControlsComponent, () => ({
    __proto__: dart.getMethods(src__hero_controls_component.HeroControlsComponent.__proto__),
    activate: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__hero_controls_component.HeroControlsComponent, () => ({
    __proto__: dart.getFields(src__hero_controls_component.HeroControlsComponent.__proto__),
    hero: dart.fieldType(src__hero.Hero)
  }));
  dart.trackLibraries("packages/component_styles/src/hero_controls_component.ddc", {
    "package:component_styles/src/hero_controls_component.dart": src__hero_controls_component
  }, '{"version":3,"sourceRoot":"","sources":["hero_controls_component.dart"],"names":[],"mappings":";;;;;;;;;IAcO;;;;;;;AAGH,eAAI,OAAO,GAAG;IAChB;;;IAJK,WAAI;EAKX","file":"hero_controls_component.ddc.js"}');
  // Exports:
  return {
    src__hero_controls_component: src__hero_controls_component
  };
});

//# sourceMappingURL=hero_controls_component.ddc.js.map
