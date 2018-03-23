define(['dart_sdk', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/component_styles/src/quest_summary_component.template', 'packages/component_styles/src/quest_summary_component', 'packages/component_styles/src/hero_details_component.template', 'packages/component_styles/src/hero_details_component', 'packages/component_styles/src/hero_controls_component.template', 'packages/component_styles/src/hero_controls_component', 'packages/component_styles/src/hero_app_main_component', 'packages/angular/src/core/linker/app_view', 'packages/angular/src/di/reflector', 'packages/component_styles/src/hero.template', 'packages/angular/angular.template'], function(dart_sdk, view_type, constants, view, app_view_utils, quest_summary_component, quest_summary_component$, hero_details_component, hero_details_component$, hero_controls_component, hero_controls_component$, hero_app_main_component, app_view, reflector, hero, angular) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const src__quest_summary_component$46template = quest_summary_component.src__quest_summary_component$46template;
  const src__quest_summary_component = quest_summary_component$.src__quest_summary_component;
  const src__hero_details_component$46template = hero_details_component.src__hero_details_component$46template;
  const src__hero_details_component = hero_details_component$.src__hero_details_component;
  const src__hero_controls_component$46template = hero_controls_component.src__hero_controls_component$46template;
  const src__hero_controls_component = hero_controls_component$.src__hero_controls_component;
  const src__hero_app_main_component = hero_app_main_component.src__hero_app_main_component;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const src__di__reflector = reflector.src__di__reflector;
  const src__hero$46template = hero.src__hero$46template;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const src__hero_app_main_component$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let JSArrayOfElement = () => (JSArrayOfElement = dart.constFn(_interceptors.JSArray$(html.Element)))();
  let AppViewOfHeroAppMainComponent = () => (AppViewOfHeroAppMainComponent = dart.constFn(src__core__linker__app_view.AppView$(src__hero_app_main_component.HeroAppMainComponent)))();
  let AppViewAndintToAppViewOfHeroAppMainComponent = () => (AppViewAndintToAppViewOfHeroAppMainComponent = dart.constFn(dart.fnType(AppViewOfHeroAppMainComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfHeroAppMainComponent = () => (ComponentRefOfHeroAppMainComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__hero_app_main_component.HeroAppMainComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfHeroAppMainComponent = () => (ComponentFactoryOfHeroAppMainComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__hero_app_main_component.HeroAppMainComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__hero_app_main_component$46template, {
    /*src__hero_app_main_component$46template.styles$HeroAppMainComponent*/get styles$HeroAppMainComponent() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _el_0 = Symbol('_el_0');
  const _compView_0 = Symbol('_compView_0');
  const _QuestSummaryComponent_0_5 = Symbol('_QuestSummaryComponent_0_5');
  const _el_1 = Symbol('_el_1');
  const _compView_1 = Symbol('_compView_1');
  const _HeroDetailsComponent_1_5 = Symbol('_HeroDetailsComponent_1_5');
  const _el_2 = Symbol('_el_2');
  const _compView_2 = Symbol('_compView_2');
  const _HeroControlsComponent_2_5 = Symbol('_HeroControlsComponent_2_5');
  const _expr_0 = Symbol('_expr_0');
  const _expr_1 = Symbol('_expr_1');
  const _expr_2 = Symbol('_expr_2');
  let const$;
  src__hero_app_main_component$46template.ViewHeroAppMainComponent0 = class ViewHeroAppMainComponent0 extends src__core__linker__app_view.AppView$(src__hero_app_main_component.HeroAppMainComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      this[_compView_0] = new src__quest_summary_component$46template.ViewQuestSummaryComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      parentRenderNode[$append](this[_el_0]);
      this[_QuestSummaryComponent_0_5] = new src__quest_summary_component.QuestSummaryComponent.new();
      this[_compView_0].create(this[_QuestSummaryComponent_0_5], []);
      this[_compView_1] = new src__hero_details_component$46template.ViewHeroDetailsComponent0.new(this, 1);
      this[_el_1] = this[_compView_1].rootEl;
      parentRenderNode[$append](this[_el_1]);
      this[_HeroDetailsComponent_1_5] = new src__hero_details_component.HeroDetailsComponent.new();
      this[_compView_2] = new src__hero_controls_component$46template.ViewHeroControlsComponent0.new(this, 2);
      this[_el_2] = this[_compView_2].rootEl;
      this[_HeroControlsComponent_2_5] = new src__hero_controls_component.HeroControlsComponent.new();
      this[_compView_2].create(this[_HeroControlsComponent_2_5], []);
      this[_compView_1].create(this[_HeroDetailsComponent_1_5], [JSArrayOfElement().of([this[_el_2]])]);
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_1 = _ctx.hero;
      if (!core.identical(this[_expr_1], currVal_1)) {
        this[_HeroDetailsComponent_1_5].hero = currVal_1;
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.hero;
      if (!core.identical(this[_expr_2], currVal_2)) {
        this[_HeroControlsComponent_2_5].hero = currVal_2;
        this[_expr_2] = currVal_2;
      }
      let currVal_0 = _ctx.hero.active;
      if (!(this[_expr_0] == currVal_0)) {
        this.updateElemClass(this[_el_1], 'active', currVal_0);
        this[_expr_0] = currVal_0;
      }
      this[_compView_0].detectChanges();
      this[_compView_1].detectChanges();
      this[_compView_2].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
      let t$ = this[_compView_1];
      t$ == null ? null : t$.destroy();
      let t$0 = this[_compView_2];
      t$0 == null ? null : t$0.destroy();
    }
  };
  (src__hero_app_main_component$46template.ViewHeroAppMainComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_QuestSummaryComponent_0_5] = null;
    this[_el_1] = null;
    this[_compView_1] = null;
    this[_HeroDetailsComponent_1_5] = null;
    this[_el_2] = null;
    this[_compView_2] = null;
    this[_HeroControlsComponent_2_5] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    src__hero_app_main_component$46template.ViewHeroAppMainComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('hero-app-main'));
    let t = src__hero_app_main_component$46template.ViewHeroAppMainComponent0._renderType;
    t == null ? src__hero_app_main_component$46template.ViewHeroAppMainComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.None, src__hero_app_main_component$46template.styles$HeroAppMainComponent) : t;
    this.setupComponentType(src__hero_app_main_component$46template.ViewHeroAppMainComponent0._renderType);
  }).prototype = src__hero_app_main_component$46template.ViewHeroAppMainComponent0.prototype;
  dart.addTypeTests(src__hero_app_main_component$46template.ViewHeroAppMainComponent0);
  dart.setMethodSignature(src__hero_app_main_component$46template.ViewHeroAppMainComponent0, () => ({
    __proto__: dart.getMethods(src__hero_app_main_component$46template.ViewHeroAppMainComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__hero_app_main_component.HeroAppMainComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__hero_app_main_component$46template.ViewHeroAppMainComponent0, () => ({
    __proto__: dart.getFields(src__hero_app_main_component$46template.ViewHeroAppMainComponent0.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(src__quest_summary_component$46template.ViewQuestSummaryComponent0),
    [_QuestSummaryComponent_0_5]: dart.fieldType(src__quest_summary_component.QuestSummaryComponent),
    [_el_1]: dart.fieldType(html.Element),
    [_compView_1]: dart.fieldType(src__hero_details_component$46template.ViewHeroDetailsComponent0),
    [_HeroDetailsComponent_1_5]: dart.fieldType(src__hero_details_component.HeroDetailsComponent),
    [_el_2]: dart.fieldType(html.Element),
    [_compView_2]: dart.fieldType(src__hero_controls_component$46template.ViewHeroControlsComponent0),
    [_HeroControlsComponent_2_5]: dart.fieldType(src__hero_controls_component.HeroControlsComponent),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(src__hero_app_main_component$46template.ViewHeroAppMainComponent0, {
    /*src__hero_app_main_component$46template.ViewHeroAppMainComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__hero_app_main_component$46template.viewFactory_HeroAppMainComponent0 = function(parentView, parentIndex) {
    return new src__hero_app_main_component$46template.ViewHeroAppMainComponent0.new(parentView, parentIndex);
  };
  dart.fn(src__hero_app_main_component$46template.viewFactory_HeroAppMainComponent0, AppViewAndintToAppViewOfHeroAppMainComponent());
  dart.defineLazy(src__hero_app_main_component$46template, {
    /*src__hero_app_main_component$46template.styles$HeroAppMainComponentHost*/get styles$HeroAppMainComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _HeroAppMainComponent_0_5 = Symbol('_HeroAppMainComponent_0_5');
  src__hero_app_main_component$46template._ViewHeroAppMainComponentHost0 = class _ViewHeroAppMainComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new src__hero_app_main_component$46template.ViewHeroAppMainComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_HeroAppMainComponent_0_5] = new src__hero_app_main_component.HeroAppMainComponent.new();
      this[_compView_0].create(this[_HeroAppMainComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfHeroAppMainComponent()).new(0, this, this.rootEl, this[_HeroAppMainComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (src__hero_app_main_component$46template._ViewHeroAppMainComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_HeroAppMainComponent_0_5] = null;
    src__hero_app_main_component$46template._ViewHeroAppMainComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__hero_app_main_component$46template._ViewHeroAppMainComponentHost0.prototype;
  dart.addTypeTests(src__hero_app_main_component$46template._ViewHeroAppMainComponentHost0);
  dart.setMethodSignature(src__hero_app_main_component$46template._ViewHeroAppMainComponentHost0, () => ({
    __proto__: dart.getMethods(src__hero_app_main_component$46template._ViewHeroAppMainComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__hero_app_main_component$46template._ViewHeroAppMainComponentHost0, () => ({
    __proto__: dart.getFields(src__hero_app_main_component$46template._ViewHeroAppMainComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__hero_app_main_component$46template.ViewHeroAppMainComponent0),
    [_HeroAppMainComponent_0_5]: dart.fieldType(src__hero_app_main_component.HeroAppMainComponent)
  }));
  src__hero_app_main_component$46template.viewFactory_HeroAppMainComponentHost0 = function(parentView, parentIndex) {
    return new src__hero_app_main_component$46template._ViewHeroAppMainComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(src__hero_app_main_component$46template.viewFactory_HeroAppMainComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(src__hero_app_main_component$46template, {
    /*src__hero_app_main_component$46template.HeroAppMainComponentNgFactory*/get HeroAppMainComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfHeroAppMainComponent()).new('hero-app-main', src__hero_app_main_component$46template.viewFactory_HeroAppMainComponentHost0, src__hero_app_main_component$46template._HeroAppMainComponentMetadata));
    },
    /*src__hero_app_main_component$46template._HeroAppMainComponentMetadata*/get _HeroAppMainComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*src__hero_app_main_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__hero_app_main_component$46template.initReflector = function() {
    if (dart.test(src__hero_app_main_component$46template._visited)) {
      return;
    }
    src__hero_app_main_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__hero_app_main_component.HeroAppMainComponent), src__hero_app_main_component$46template.HeroAppMainComponentNgFactory);
    src__hero$46template.initReflector();
    src__hero_controls_component$46template.initReflector();
    src__hero_details_component$46template.initReflector();
    angular$46template.initReflector();
    src__quest_summary_component$46template.initReflector();
  };
  dart.fn(src__hero_app_main_component$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/component_styles/src/hero_app_main_component.template.ddc", {
    "package:component_styles/src/hero_app_main_component.template.dart": src__hero_app_main_component$46template
  }, '{"version":3,"sourceRoot":"","sources":["hero_app_main_component.template.dart"],"names":[],"mappings":"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","file":"hero_app_main_component.template.ddc.js"}');
  // Exports:
  return {
    src__hero_app_main_component$46template: src__hero_app_main_component$46template
  };
});

//# sourceMappingURL=hero_app_main_component.template.ddc.js.map
