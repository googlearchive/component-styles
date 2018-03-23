define(['dart_sdk', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/component_styles/src/hero_controls_component', 'packages/angular/src/di/reflector', 'packages/component_styles/src/hero.template', 'packages/angular/angular.template'], function(dart_sdk, view_type, constants, view, app_view_utils, app_view, hero_controls_component, reflector, hero, angular) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const src__hero_controls_component = hero_controls_component.src__hero_controls_component;
  const src__di__reflector = reflector.src__di__reflector;
  const src__hero$46template = hero.src__hero$46template;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const src__hero_controls_component$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $addEventListener = dartx.addEventListener;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfHeroControlsComponent = () => (AppViewOfHeroControlsComponent = dart.constFn(src__core__linker__app_view.AppView$(src__hero_controls_component.HeroControlsComponent)))();
  let AppViewAndintToAppViewOfHeroControlsComponent = () => (AppViewAndintToAppViewOfHeroControlsComponent = dart.constFn(dart.fnType(AppViewOfHeroControlsComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfHeroControlsComponent = () => (ComponentRefOfHeroControlsComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__hero_controls_component.HeroControlsComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfHeroControlsComponent = () => (ComponentFactoryOfHeroControlsComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__hero_controls_component.HeroControlsComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__hero_controls_component$46template, {
    /*src__hero_controls_component$46template.styles$HeroControlsComponent*/get styles$HeroControlsComponent() {
      return dart.constList(['button._ngcontent-%COMP% { background-color:white; border:1px solid #777; }'], dart.dynamic);
    }
  });
  const _el_0 = Symbol('_el_0');
  const _el_2 = Symbol('_el_2');
  let const$;
  src__hero_controls_component$46template.ViewHeroControlsComponent0 = class ViewHeroControlsComponent0 extends src__core__linker__app_view.AppView$(src__hero_controls_component.HeroControlsComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createAndAppend(doc, 'h3', parentRenderNode);
      this.addShimE(this[_el_0]);
      let _text_1 = html.Text.new('Controls');
      this[_el_0][$append](_text_1);
      this[_el_2] = html.ButtonElement._check(src__core__linker__app_view.createAndAppend(doc, 'button', parentRenderNode));
      this.addShimC(this[_el_2]);
      let _text_3 = html.Text.new('Activate');
      this[_el_2][$append](_text_3);
      this[_el_2][$addEventListener]('click', this.eventHandler0(html.Event, dart.bind(this.ctx, 'activate')));
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
  };
  (src__hero_controls_component$46template.ViewHeroControlsComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_2] = null;
    src__hero_controls_component$46template.ViewHeroControlsComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('hero-controls'));
    let t = src__hero_controls_component$46template.ViewHeroControlsComponent0._renderType;
    t == null ? src__hero_controls_component$46template.ViewHeroControlsComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, src__hero_controls_component$46template.styles$HeroControlsComponent) : t;
    this.setupComponentType(src__hero_controls_component$46template.ViewHeroControlsComponent0._renderType);
  }).prototype = src__hero_controls_component$46template.ViewHeroControlsComponent0.prototype;
  dart.addTypeTests(src__hero_controls_component$46template.ViewHeroControlsComponent0);
  dart.setMethodSignature(src__hero_controls_component$46template.ViewHeroControlsComponent0, () => ({
    __proto__: dart.getMethods(src__hero_controls_component$46template.ViewHeroControlsComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__hero_controls_component.HeroControlsComponent), [])
  }));
  dart.setFieldSignature(src__hero_controls_component$46template.ViewHeroControlsComponent0, () => ({
    __proto__: dart.getFields(src__hero_controls_component$46template.ViewHeroControlsComponent0.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_el_2]: dart.fieldType(html.ButtonElement)
  }));
  dart.defineLazy(src__hero_controls_component$46template.ViewHeroControlsComponent0, {
    /*src__hero_controls_component$46template.ViewHeroControlsComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__hero_controls_component$46template.viewFactory_HeroControlsComponent0 = function(parentView, parentIndex) {
    return new src__hero_controls_component$46template.ViewHeroControlsComponent0.new(parentView, parentIndex);
  };
  dart.fn(src__hero_controls_component$46template.viewFactory_HeroControlsComponent0, AppViewAndintToAppViewOfHeroControlsComponent());
  dart.defineLazy(src__hero_controls_component$46template, {
    /*src__hero_controls_component$46template.styles$HeroControlsComponentHost*/get styles$HeroControlsComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _HeroControlsComponent_0_5 = Symbol('_HeroControlsComponent_0_5');
  src__hero_controls_component$46template._ViewHeroControlsComponentHost0 = class _ViewHeroControlsComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new src__hero_controls_component$46template.ViewHeroControlsComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_HeroControlsComponent_0_5] = new src__hero_controls_component.HeroControlsComponent.new();
      this[_compView_0].create(this[_HeroControlsComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfHeroControlsComponent()).new(0, this, this.rootEl, this[_HeroControlsComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (src__hero_controls_component$46template._ViewHeroControlsComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_HeroControlsComponent_0_5] = null;
    src__hero_controls_component$46template._ViewHeroControlsComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__hero_controls_component$46template._ViewHeroControlsComponentHost0.prototype;
  dart.addTypeTests(src__hero_controls_component$46template._ViewHeroControlsComponentHost0);
  dart.setMethodSignature(src__hero_controls_component$46template._ViewHeroControlsComponentHost0, () => ({
    __proto__: dart.getMethods(src__hero_controls_component$46template._ViewHeroControlsComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__hero_controls_component$46template._ViewHeroControlsComponentHost0, () => ({
    __proto__: dart.getFields(src__hero_controls_component$46template._ViewHeroControlsComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__hero_controls_component$46template.ViewHeroControlsComponent0),
    [_HeroControlsComponent_0_5]: dart.fieldType(src__hero_controls_component.HeroControlsComponent)
  }));
  src__hero_controls_component$46template.viewFactory_HeroControlsComponentHost0 = function(parentView, parentIndex) {
    return new src__hero_controls_component$46template._ViewHeroControlsComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(src__hero_controls_component$46template.viewFactory_HeroControlsComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(src__hero_controls_component$46template, {
    /*src__hero_controls_component$46template.HeroControlsComponentNgFactory*/get HeroControlsComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfHeroControlsComponent()).new('hero-controls', src__hero_controls_component$46template.viewFactory_HeroControlsComponentHost0, src__hero_controls_component$46template._HeroControlsComponentMetadata));
    },
    /*src__hero_controls_component$46template._HeroControlsComponentMetadata*/get _HeroControlsComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*src__hero_controls_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__hero_controls_component$46template.initReflector = function() {
    if (dart.test(src__hero_controls_component$46template._visited)) {
      return;
    }
    src__hero_controls_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__hero_controls_component.HeroControlsComponent), src__hero_controls_component$46template.HeroControlsComponentNgFactory);
    src__hero$46template.initReflector();
    angular$46template.initReflector();
  };
  dart.fn(src__hero_controls_component$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/component_styles/src/hero_controls_component.template.ddc", {
    "package:component_styles/src/hero_controls_component.template.dart": src__hero_controls_component$46template
  }, '{"version":3,"sourceRoot":"","sources":["hero_controls_component.template.dart"],"names":[],"mappings":";;;;QAoCc,IAAO;;;;;;QAPD,iCAAO;;;;;;;;;;;;;;;;;;;;MARP,oEAA4B;YAAG,iBAAO;;;;;;;;AAatD,UAAM,UAAU,WAAM;AACtB,UAA0B,mBAAmB,iBAAY,CAAC,OAAO;AACjE,UAAI,MAAM,AAAQ,IAAD,SAAS;AAC1B,iBAAK,GAAG,2CAAe,CAAC,GAAG,EAAE,MAAM,gBAAgB;AACnD,mBAAQ,CAAC,WAAK;AACd,UAAa,UAHH,AAGa,AAAI,IAHV,SAGsB,CAAC;AACxC,iBAAK,SAAO,CAAC,OAAO;AACpB,iBAAK,GALK,AAKF,IALS,sBAKT,2CAAe,CAAC,GAAG,EAAE,UAAU,gBAAgB;AACvD,mBAAQ,CAAC,WAAK;AACd,UAAa,UAPH,AAOa,AAAI,IAPV,SAOsB,CAAC;AACxC,iBAAK,SAAO,CAAC,OAAO;AACpB,iBAAK,mBAAiB,CAAC,SAAS,kBAAa,CATnC,IAAO,kBAS6B,QAAG;AACjD,eAAI,CAAC,uDAAU;AACf,YAAO;IACT;;qFArB2B,UAA2B,EAAE,WAAe;IAHvD,WAAK;IACC,WAAK;AAEgD,gGAAM,qCAAgB,UAAU,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AAC3K,eAAM,GAAG,AAQC,IAAO,oBARR,AAAQ,AAQP,IAAO,SARQ,gBAAc,CAAC;AACxC,0FAAW;gBAAX,8EAAW,GAAK,AAAA,AAAQ,iCAAD,aAAa,iBAAiB,CAAC,IAAI,2CAAiB,SAAS,EAAE,oEAA4B;AAClH,2BAAkB,CAAC,8EAAW;EAChC;;;;;;;;4BAKY,IAAO;4BAAP,IAAO;;;MAVQ,8EAAW;;;;;wFAyBkC,UAA2B,EAAE,WAAe;AACpH,UAAO,KAAI,sEAA0B,CAAC,UAAU,EAAE,WAAW;EAC/D;;;MAEoB,wEAAgC;YAAG;;;;;;;AAQnD,uBAAW,GAAG,IAAI,sEAA0B,CAAC,MAAM;AACnD,iBAAM,GAAG,iBAAW,OAAO;AAC3B,sCAA0B,GAAG,IAAI,sDAA6B;AAC9D,uBAAW,OAAO,CAAC,gCAA0B,EAAE,qBAAgB;AAC/D,gBAAK,CAAC,WAAM;AACZ,YAAO,KAAI,2CAA2C,CAAC,GAAG,MAAM,WAAM,EAAE,gCAA0B;IACpG;;AAIE,uBAAW,cAAc;IAC3B;;AAIE,+BAAW;;IACb;;0FAnBgC,UAA2B,EAAE,WAAe;IAFjD,iBAAW;IACR,gCAA0B;AACwB,qGAAM,qCAAgB,KAAK,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;EAAC;;;;;;;;;;;;;4FAsBjI,UAA2B,EAAE,WAAe;AACzF,UAAO,KAAI,2EAA+B,CAAC,UAAU,EAAE,WAAW;EACpE;;;MAEsD,sEAA8B;YAAG,gBAAM,+CAA+C,CAAC,iBAAiB,8EAAsC,EAAE,sEAA8B;;MAC9N,sEAA8B;YAAG;;MACnC,gDAAQ;YAAG;;;;;AAEb,kBAAI,gDAAQ,GAAE;AACZ;;AAEF,uDAAW;AAEX,IAAO,oCAAiB,CAAC,iEAAqB,EAAE,sEAA8B;AAC9E,IAAM,kCAAa;AACnB,IAAM,gCAAa;EACrB","file":"hero_controls_component.template.ddc.js"}');
  // Exports:
  return {
    src__hero_controls_component$46template: src__hero_controls_component$46template
  };
});

//# sourceMappingURL=hero_controls_component.template.ddc.js.map
