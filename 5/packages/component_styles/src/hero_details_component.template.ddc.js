define(['dart_sdk', 'packages/component_styles/src/hero_details_component.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/component_styles/src/hero_team_component.template', 'packages/component_styles/src/hero_team_component', 'packages/component_styles/src/hero_details_component', 'packages/angular/src/di/reflector', 'packages/component_styles/src/hero.template', 'packages/angular/angular.template'], function(dart_sdk, hero_details_component$46css, view_type, constants, view, app_view_utils, app_view, hero_team_component, hero_team_component$, hero_details_component, reflector, hero, angular) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__hero_details_component$46css$46shim = hero_details_component$46css.src__hero_details_component$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const src__hero_team_component$46template = hero_team_component.src__hero_team_component$46template;
  const src__hero_team_component = hero_team_component$.src__hero_team_component;
  const src__hero_details_component = hero_details_component.src__hero_details_component;
  const src__di__reflector = reflector.src__di__reflector;
  const src__hero$46template = hero.src__hero$46template;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const src__hero_details_component$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $text = dartx.text;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfHeroDetailsComponent = () => (AppViewOfHeroDetailsComponent = dart.constFn(src__core__linker__app_view.AppView$(src__hero_details_component.HeroDetailsComponent)))();
  let AppViewAndintToAppViewOfHeroDetailsComponent = () => (AppViewAndintToAppViewOfHeroDetailsComponent = dart.constFn(dart.fnType(AppViewOfHeroDetailsComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfHeroDetailsComponent = () => (ComponentRefOfHeroDetailsComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__hero_details_component.HeroDetailsComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfHeroDetailsComponent = () => (ComponentFactoryOfHeroDetailsComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__hero_details_component.HeroDetailsComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__hero_details_component$46template, {
    /*src__hero_details_component$46template.styles$HeroDetailsComponent*/get styles$HeroDetailsComponent() {
      return dart.constList([src__hero_details_component$46css$46shim.styles], dart.dynamic);
    }
  });
  const _el_0 = Symbol('_el_0');
  const _text_1 = Symbol('_text_1');
  const _el_2 = Symbol('_el_2');
  const _compView_2 = Symbol('_compView_2');
  const _HeroTeamComponent_2_5 = Symbol('_HeroTeamComponent_2_5');
  const _expr_0 = Symbol('_expr_0');
  const _expr_1 = Symbol('_expr_1');
  let const$;
  src__hero_details_component$46template.ViewHeroDetailsComponent0 = class ViewHeroDetailsComponent0 extends src__core__linker__app_view.AppView$(src__hero_details_component.HeroDetailsComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createAndAppend(doc, 'h2', parentRenderNode);
      this.addShimE(this[_el_0]);
      this[_text_1] = html.Text.new('');
      this[_el_0][$append](this[_text_1]);
      this[_compView_2] = new src__hero_team_component$46template.ViewHeroTeamComponent0.new(this, 2);
      this[_el_2] = this[_compView_2].rootEl;
      parentRenderNode[$append](this[_el_2]);
      this.addShimC(html.HtmlElement._check(this[_el_2]));
      this[_HeroTeamComponent_2_5] = new src__hero_team_component.HeroTeamComponent.new();
      this[_compView_2].create(this[_HeroTeamComponent_2_5], []);
      this.project(parentRenderNode, 0);
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_1 = _ctx.hero;
      if (!core.identical(this[_expr_1], currVal_1)) {
        this[_HeroTeamComponent_2_5].hero = currVal_1;
        this[_expr_1] = currVal_1;
      }
      let currVal_0 = src__core__linker__app_view_utils.interpolate0(_ctx.hero.name);
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_text_1][$text] = core.String._check(currVal_0);
        this[_expr_0] = currVal_0;
      }
      this[_compView_2].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_2];
      t == null ? null : t.destroy();
    }
  };
  (src__hero_details_component$46template.ViewHeroDetailsComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_1] = null;
    this[_el_2] = null;
    this[_compView_2] = null;
    this[_HeroTeamComponent_2_5] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    src__hero_details_component$46template.ViewHeroDetailsComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('hero-details'));
    let t = src__hero_details_component$46template.ViewHeroDetailsComponent0._renderType;
    t == null ? src__hero_details_component$46template.ViewHeroDetailsComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, src__hero_details_component$46template.styles$HeroDetailsComponent) : t;
    this.setupComponentType(src__hero_details_component$46template.ViewHeroDetailsComponent0._renderType);
  }).prototype = src__hero_details_component$46template.ViewHeroDetailsComponent0.prototype;
  dart.addTypeTests(src__hero_details_component$46template.ViewHeroDetailsComponent0);
  dart.setMethodSignature(src__hero_details_component$46template.ViewHeroDetailsComponent0, () => ({
    __proto__: dart.getMethods(src__hero_details_component$46template.ViewHeroDetailsComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__hero_details_component.HeroDetailsComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__hero_details_component$46template.ViewHeroDetailsComponent0, () => ({
    __proto__: dart.getFields(src__hero_details_component$46template.ViewHeroDetailsComponent0.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_text_1]: dart.fieldType(html.Text),
    [_el_2]: dart.fieldType(html.Element),
    [_compView_2]: dart.fieldType(src__hero_team_component$46template.ViewHeroTeamComponent0),
    [_HeroTeamComponent_2_5]: dart.fieldType(src__hero_team_component.HeroTeamComponent),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(src__hero_details_component$46template.ViewHeroDetailsComponent0, {
    /*src__hero_details_component$46template.ViewHeroDetailsComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__hero_details_component$46template.viewFactory_HeroDetailsComponent0 = function(parentView, parentIndex) {
    return new src__hero_details_component$46template.ViewHeroDetailsComponent0.new(parentView, parentIndex);
  };
  dart.fn(src__hero_details_component$46template.viewFactory_HeroDetailsComponent0, AppViewAndintToAppViewOfHeroDetailsComponent());
  dart.defineLazy(src__hero_details_component$46template, {
    /*src__hero_details_component$46template.styles$HeroDetailsComponentHost*/get styles$HeroDetailsComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _HeroDetailsComponent_0_5 = Symbol('_HeroDetailsComponent_0_5');
  src__hero_details_component$46template._ViewHeroDetailsComponentHost0 = class _ViewHeroDetailsComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new src__hero_details_component$46template.ViewHeroDetailsComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_HeroDetailsComponent_0_5] = new src__hero_details_component.HeroDetailsComponent.new();
      this[_compView_0].create(this[_HeroDetailsComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfHeroDetailsComponent()).new(0, this, this.rootEl, this[_HeroDetailsComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (src__hero_details_component$46template._ViewHeroDetailsComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_HeroDetailsComponent_0_5] = null;
    src__hero_details_component$46template._ViewHeroDetailsComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__hero_details_component$46template._ViewHeroDetailsComponentHost0.prototype;
  dart.addTypeTests(src__hero_details_component$46template._ViewHeroDetailsComponentHost0);
  dart.setMethodSignature(src__hero_details_component$46template._ViewHeroDetailsComponentHost0, () => ({
    __proto__: dart.getMethods(src__hero_details_component$46template._ViewHeroDetailsComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__hero_details_component$46template._ViewHeroDetailsComponentHost0, () => ({
    __proto__: dart.getFields(src__hero_details_component$46template._ViewHeroDetailsComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__hero_details_component$46template.ViewHeroDetailsComponent0),
    [_HeroDetailsComponent_0_5]: dart.fieldType(src__hero_details_component.HeroDetailsComponent)
  }));
  src__hero_details_component$46template.viewFactory_HeroDetailsComponentHost0 = function(parentView, parentIndex) {
    return new src__hero_details_component$46template._ViewHeroDetailsComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(src__hero_details_component$46template.viewFactory_HeroDetailsComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(src__hero_details_component$46template, {
    /*src__hero_details_component$46template.HeroDetailsComponentNgFactory*/get HeroDetailsComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfHeroDetailsComponent()).new('hero-details', src__hero_details_component$46template.viewFactory_HeroDetailsComponentHost0, src__hero_details_component$46template._HeroDetailsComponentMetadata));
    },
    /*src__hero_details_component$46template._HeroDetailsComponentMetadata*/get _HeroDetailsComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*src__hero_details_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__hero_details_component$46template.initReflector = function() {
    if (dart.test(src__hero_details_component$46template._visited)) {
      return;
    }
    src__hero_details_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__hero_details_component.HeroDetailsComponent), src__hero_details_component$46template.HeroDetailsComponentNgFactory);
    src__hero$46template.initReflector();
    src__hero_team_component$46template.initReflector();
    angular$46template.initReflector();
  };
  dart.fn(src__hero_details_component$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/component_styles/src/hero_details_component.template.ddc", {
    "package:component_styles/src/hero_details_component.template.dart": src__hero_details_component$46template
  }, '{"version":3,"sourceRoot":"","sources":["hero_details_component.template.dart"],"names":[],"mappings":"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","file":"hero_details_component.template.ddc.js"}');
  // Exports:
  return {
    src__hero_details_component$46template: src__hero_details_component$46template
  };
});

//# sourceMappingURL=hero_details_component.template.ddc.js.map
