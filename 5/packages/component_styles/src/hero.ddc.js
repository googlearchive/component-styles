define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__hero = Object.create(_root);
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  src__hero.Hero = class Hero extends core.Object {
    get active() {
      return this[active];
    }
    set active(value) {
      this[active] = value;
    }
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    get team() {
      return this[team$];
    }
    set team(value) {
      super.team = value;
    }
  };
  (src__hero.Hero.new = function(name, team) {
    this[active] = false;
    this[name$] = name;
    this[team$] = team;
  }).prototype = src__hero.Hero.prototype;
  dart.addTypeTests(src__hero.Hero);
  const active = Symbol("Hero.active");
  const name$ = Symbol("Hero.name");
  const team$ = Symbol("Hero.team");
  dart.setFieldSignature(src__hero.Hero, () => ({
    __proto__: dart.getFields(src__hero.Hero.__proto__),
    active: dart.fieldType(core.bool),
    name: dart.finalFieldType(core.String),
    team: dart.finalFieldType(ListOfString())
  }));
  dart.trackLibraries("packages/component_styles/src/hero.ddc", {
    "package:component_styles/src/hero.dart": src__hero
  }, '{"version":3,"sourceRoot":"","sources":["hero.dart"],"names":[],"mappings":";;;;;;;;;IACO;;;;;;IAEQ;;;;;;IACM;;;;;;;iCAEd,IAAS,EAAE,IAAS;IALpB,YAAM,GAAG;IAKJ,WAAI,GAAJ,IAAI;IAAO,WAAI,GAAJ,IAAI;EAAC","file":"hero.ddc.js"}');
  // Exports:
  return {
    src__hero: src__hero
  };
});

//# sourceMappingURL=hero.ddc.js.map
