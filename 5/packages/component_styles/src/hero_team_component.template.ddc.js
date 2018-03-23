define(['dart_sdk', 'packages/component_styles/src/hero_team_component.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/angular/src/common/directives/ng_for', 'packages/component_styles/src/hero_team_component', 'packages/angular/src/di/reflector', 'packages/component_styles/src/hero.template', 'packages/angular/angular.template'], function(dart_sdk, hero_team_component$46css, view_type, constants, view, app_view_utils, app_view, ng_for, hero_team_component, reflector, hero, angular) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__hero_team_component$46css$46shim = hero_team_component$46css.src__hero_team_component$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__view_container = app_view.src__core__linker__view_container;
  const src__core__linker__template_ref = app_view.src__core__linker__template_ref;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const src__common__directives__ng_for = ng_for.src__common__directives__ng_for;
  const src__hero_team_component = hero_team_component.src__hero_team_component;
  const src__di__reflector = reflector.src__di__reflector;
  const src__hero$46template = hero.src__hero$46template;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const src__hero_team_component$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $clone = dartx.clone;
  const $_get = dartx._get;
  const $text = dartx.text;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfHeroTeamComponent = () => (AppViewOfHeroTeamComponent = dart.constFn(src__core__linker__app_view.AppView$(src__hero_team_component.HeroTeamComponent)))();
  let AppViewAndintToAppViewOfHeroTeamComponent = () => (AppViewAndintToAppViewOfHeroTeamComponent = dart.constFn(dart.fnType(AppViewOfHeroTeamComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfHeroTeamComponent = () => (ComponentRefOfHeroTeamComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__hero_team_component.HeroTeamComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfHeroTeamComponent = () => (ComponentFactoryOfHeroTeamComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__hero_team_component.HeroTeamComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__hero_team_component$46template, {
    /*src__hero_team_component$46template.styles$HeroTeamComponent*/get styles$HeroTeamComponent() {
      return dart.constList([src__hero_team_component$46css$46shim.styles], dart.dynamic);
    }
  });
  const _el_0 = Symbol('_el_0');
  const _el_2 = Symbol('_el_2');
  const _appEl_3 = Symbol('_appEl_3');
  const _NgFor_3_9 = Symbol('_NgFor_3_9');
  const _expr_0 = Symbol('_expr_0');
  let const$;
  src__hero_team_component$46template.ViewHeroTeamComponent0 = class ViewHeroTeamComponent0 extends src__core__linker__app_view.AppView$(src__hero_team_component.HeroTeamComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createAndAppend(doc, 'h3', parentRenderNode);
      this.addShimE(this[_el_0]);
      let _text_1 = html.Text.new('Team');
      this[_el_0][$append](_text_1);
      this[_el_2] = html.UListElement._check(src__core__linker__app_view.createAndAppend(doc, 'ul', parentRenderNode));
      this.addShimC(this[_el_2]);
      let _anchor_3 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_2][$append](_anchor_3);
      this[_appEl_3] = new src__core__linker__view_container.ViewContainer.new(3, 2, this, _anchor_3);
      let _TemplateRef_3_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_3], src__hero_team_component$46template.viewFactory_HeroTeamComponent1);
      this[_NgFor_3_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_3], _TemplateRef_3_8);
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.hero.team;
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_NgFor_3_9].ngForOf = currVal_0;
        this[_expr_0] = currVal_0;
      }
      this[_NgFor_3_9].ngDoCheck();
      this[_appEl_3].detectChangesInNestedViews();
    }
    destroyInternal() {
      let t = this[_appEl_3];
      t == null ? null : t.destroyNestedViews();
    }
  };
  (src__hero_team_component$46template.ViewHeroTeamComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_2] = null;
    this[_appEl_3] = null;
    this[_NgFor_3_9] = null;
    this[_expr_0] = null;
    src__hero_team_component$46template.ViewHeroTeamComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('hero-team'));
    let t = src__hero_team_component$46template.ViewHeroTeamComponent0._renderType;
    t == null ? src__hero_team_component$46template.ViewHeroTeamComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, src__hero_team_component$46template.styles$HeroTeamComponent) : t;
    this.setupComponentType(src__hero_team_component$46template.ViewHeroTeamComponent0._renderType);
  }).prototype = src__hero_team_component$46template.ViewHeroTeamComponent0.prototype;
  dart.addTypeTests(src__hero_team_component$46template.ViewHeroTeamComponent0);
  dart.setMethodSignature(src__hero_team_component$46template.ViewHeroTeamComponent0, () => ({
    __proto__: dart.getMethods(src__hero_team_component$46template.ViewHeroTeamComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__hero_team_component.HeroTeamComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__hero_team_component$46template.ViewHeroTeamComponent0, () => ({
    __proto__: dart.getFields(src__hero_team_component$46template.ViewHeroTeamComponent0.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_el_2]: dart.fieldType(html.UListElement),
    [_appEl_3]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_3_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(src__hero_team_component$46template.ViewHeroTeamComponent0, {
    /*src__hero_team_component$46template.ViewHeroTeamComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__hero_team_component$46template.viewFactory_HeroTeamComponent0 = function(parentView, parentIndex) {
    return new src__hero_team_component$46template.ViewHeroTeamComponent0.new(parentView, parentIndex);
  };
  dart.fn(src__hero_team_component$46template.viewFactory_HeroTeamComponent0, AppViewAndintToAppViewOfHeroTeamComponent());
  const _text_1 = Symbol('_text_1');
  src__hero_team_component$46template._ViewHeroTeamComponent1 = class _ViewHeroTeamComponent1 extends src__core__linker__app_view.AppView$(src__hero_team_component.HeroTeamComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = doc[$createElement]('li');
      this.addShimE(this[_el_0]);
      this[_text_1] = html.Text.new('');
      this[_el_0][$append](this[_text_1]);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let local_member = core.String._check(this.locals[$_get]('$implicit'));
      let currVal_0 = src__core__linker__app_view_utils.interpolate0(local_member);
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_text_1][$text] = core.String._check(currVal_0);
        this[_expr_0] = currVal_0;
      }
    }
  };
  (src__hero_team_component$46template._ViewHeroTeamComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_1] = null;
    this[_expr_0] = null;
    src__hero_team_component$46template._ViewHeroTeamComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).from(['$implicit', null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__hero_team_component$46template.ViewHeroTeamComponent0._renderType;
  }).prototype = src__hero_team_component$46template._ViewHeroTeamComponent1.prototype;
  dart.addTypeTests(src__hero_team_component$46template._ViewHeroTeamComponent1);
  dart.setMethodSignature(src__hero_team_component$46template._ViewHeroTeamComponent1, () => ({
    __proto__: dart.getMethods(src__hero_team_component$46template._ViewHeroTeamComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__hero_team_component.HeroTeamComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__hero_team_component$46template._ViewHeroTeamComponent1, () => ({
    __proto__: dart.getFields(src__hero_team_component$46template._ViewHeroTeamComponent1.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_text_1]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  src__hero_team_component$46template.viewFactory_HeroTeamComponent1 = function(parentView, parentIndex) {
    return new src__hero_team_component$46template._ViewHeroTeamComponent1.new(parentView, parentIndex);
  };
  dart.fn(src__hero_team_component$46template.viewFactory_HeroTeamComponent1, AppViewAndintToAppViewOfHeroTeamComponent());
  dart.defineLazy(src__hero_team_component$46template, {
    /*src__hero_team_component$46template.styles$HeroTeamComponentHost*/get styles$HeroTeamComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _HeroTeamComponent_0_5 = Symbol('_HeroTeamComponent_0_5');
  src__hero_team_component$46template._ViewHeroTeamComponentHost0 = class _ViewHeroTeamComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new src__hero_team_component$46template.ViewHeroTeamComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_HeroTeamComponent_0_5] = new src__hero_team_component.HeroTeamComponent.new();
      this[_compView_0].create(this[_HeroTeamComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfHeroTeamComponent()).new(0, this, this.rootEl, this[_HeroTeamComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (src__hero_team_component$46template._ViewHeroTeamComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_HeroTeamComponent_0_5] = null;
    src__hero_team_component$46template._ViewHeroTeamComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__hero_team_component$46template._ViewHeroTeamComponentHost0.prototype;
  dart.addTypeTests(src__hero_team_component$46template._ViewHeroTeamComponentHost0);
  dart.setMethodSignature(src__hero_team_component$46template._ViewHeroTeamComponentHost0, () => ({
    __proto__: dart.getMethods(src__hero_team_component$46template._ViewHeroTeamComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__hero_team_component$46template._ViewHeroTeamComponentHost0, () => ({
    __proto__: dart.getFields(src__hero_team_component$46template._ViewHeroTeamComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__hero_team_component$46template.ViewHeroTeamComponent0),
    [_HeroTeamComponent_0_5]: dart.fieldType(src__hero_team_component.HeroTeamComponent)
  }));
  src__hero_team_component$46template.viewFactory_HeroTeamComponentHost0 = function(parentView, parentIndex) {
    return new src__hero_team_component$46template._ViewHeroTeamComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(src__hero_team_component$46template.viewFactory_HeroTeamComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(src__hero_team_component$46template, {
    /*src__hero_team_component$46template.HeroTeamComponentNgFactory*/get HeroTeamComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfHeroTeamComponent()).new('hero-team', src__hero_team_component$46template.viewFactory_HeroTeamComponentHost0, src__hero_team_component$46template._HeroTeamComponentMetadata));
    },
    /*src__hero_team_component$46template._HeroTeamComponentMetadata*/get _HeroTeamComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*src__hero_team_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__hero_team_component$46template.initReflector = function() {
    if (dart.test(src__hero_team_component$46template._visited)) {
      return;
    }
    src__hero_team_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__hero_team_component.HeroTeamComponent), src__hero_team_component$46template.HeroTeamComponentNgFactory);
    src__hero$46template.initReflector();
    angular$46template.initReflector();
  };
  dart.fn(src__hero_team_component$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/component_styles/src/hero_team_component.template.ddc", {
    "package:component_styles/src/hero_team_component.template.dart": src__hero_team_component$46template
  }, '{"version":3,"sourceRoot":"","sources":["hero_team_component.template.dart"],"names":[],"mappings":"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","file":"hero_team_component.template.ddc.js"}');
  // Exports:
  return {
    src__hero_team_component$46template: src__hero_team_component$46template
  };
});

//# sourceMappingURL=hero_team_component.template.ddc.js.map
