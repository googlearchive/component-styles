define(['dart_sdk', 'packages/component_styles/src/hero'], function(dart_sdk, hero) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__hero = hero.src__hero;
  const _root = Object.create(null);
  const src__hero_team_component = Object.create(_root);
  src__hero_team_component.HeroTeamComponent = class HeroTeamComponent extends core.Object {
    get hero() {
      return this[hero$];
    }
    set hero(value) {
      this[hero$] = value;
    }
  };
  (src__hero_team_component.HeroTeamComponent.new = function() {
    this[hero$] = null;
  }).prototype = src__hero_team_component.HeroTeamComponent.prototype;
  dart.addTypeTests(src__hero_team_component.HeroTeamComponent);
  const hero$ = Symbol("HeroTeamComponent.hero");
  dart.setFieldSignature(src__hero_team_component.HeroTeamComponent, () => ({
    __proto__: dart.getFields(src__hero_team_component.HeroTeamComponent.__proto__),
    hero: dart.fieldType(src__hero.Hero)
  }));
  dart.trackLibraries("packages/component_styles/src/hero_team_component.ddc", {
    "package:component_styles/src/hero_team_component.dart": src__hero_team_component
  }, '{"version":3,"sourceRoot":"","sources":["hero_team_component.dart"],"names":[],"mappings":";;;;;;;;;IAiBO;;;;;;;;eAAI;EACX","file":"hero_team_component.ddc.js"}');
  // Exports:
  return {
    src__hero_team_component: src__hero_team_component
  };
});

//# sourceMappingURL=hero_team_component.ddc.js.map
