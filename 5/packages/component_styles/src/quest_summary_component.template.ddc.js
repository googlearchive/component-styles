define(['dart_sdk', 'packages/component_styles/src/quest_summary_component.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/component_styles/src/quest_summary_component', 'packages/angular/src/di/reflector', 'packages/angular/angular.template'], function(dart_sdk, quest_summary_component$46css, view_type, constants, view, app_view_utils, app_view, quest_summary_component, reflector, angular) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__quest_summary_component$46css$46shim = quest_summary_component$46css.src__quest_summary_component$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const src__quest_summary_component = quest_summary_component.src__quest_summary_component;
  const src__di__reflector = reflector.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const src__quest_summary_component$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfQuestSummaryComponent = () => (AppViewOfQuestSummaryComponent = dart.constFn(src__core__linker__app_view.AppView$(src__quest_summary_component.QuestSummaryComponent)))();
  let AppViewAndintToAppViewOfQuestSummaryComponent = () => (AppViewAndintToAppViewOfQuestSummaryComponent = dart.constFn(dart.fnType(AppViewOfQuestSummaryComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfQuestSummaryComponent = () => (ComponentRefOfQuestSummaryComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__quest_summary_component.QuestSummaryComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfQuestSummaryComponent = () => (ComponentFactoryOfQuestSummaryComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__quest_summary_component.QuestSummaryComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__quest_summary_component$46template, {
    /*src__quest_summary_component$46template.styles$QuestSummaryComponent*/get styles$QuestSummaryComponent() {
      return dart.constList([src__quest_summary_component$46css$46shim.styles], dart.dynamic);
    }
  });
  const _el_0 = Symbol('_el_0');
  let const$;
  src__quest_summary_component$46template.ViewQuestSummaryComponent0 = class ViewQuestSummaryComponent0 extends src__core__linker__app_view.AppView$(src__quest_summary_component.QuestSummaryComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createAndAppend(doc, 'p', parentRenderNode);
      this.addShimE(this[_el_0]);
      let _text_1 = html.Text.new('No quests in progress');
      this[_el_0][$append](_text_1);
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
  };
  (src__quest_summary_component$46template.ViewQuestSummaryComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    src__quest_summary_component$46template.ViewQuestSummaryComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('quest-summary'));
    let t = src__quest_summary_component$46template.ViewQuestSummaryComponent0._renderType;
    t == null ? src__quest_summary_component$46template.ViewQuestSummaryComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, src__quest_summary_component$46template.styles$QuestSummaryComponent) : t;
    this.setupComponentType(src__quest_summary_component$46template.ViewQuestSummaryComponent0._renderType);
  }).prototype = src__quest_summary_component$46template.ViewQuestSummaryComponent0.prototype;
  dart.addTypeTests(src__quest_summary_component$46template.ViewQuestSummaryComponent0);
  dart.setMethodSignature(src__quest_summary_component$46template.ViewQuestSummaryComponent0, () => ({
    __proto__: dart.getMethods(src__quest_summary_component$46template.ViewQuestSummaryComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__quest_summary_component.QuestSummaryComponent), [])
  }));
  dart.setFieldSignature(src__quest_summary_component$46template.ViewQuestSummaryComponent0, () => ({
    __proto__: dart.getFields(src__quest_summary_component$46template.ViewQuestSummaryComponent0.__proto__),
    [_el_0]: dart.fieldType(html.Element)
  }));
  dart.defineLazy(src__quest_summary_component$46template.ViewQuestSummaryComponent0, {
    /*src__quest_summary_component$46template.ViewQuestSummaryComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__quest_summary_component$46template.viewFactory_QuestSummaryComponent0 = function(parentView, parentIndex) {
    return new src__quest_summary_component$46template.ViewQuestSummaryComponent0.new(parentView, parentIndex);
  };
  dart.fn(src__quest_summary_component$46template.viewFactory_QuestSummaryComponent0, AppViewAndintToAppViewOfQuestSummaryComponent());
  dart.defineLazy(src__quest_summary_component$46template, {
    /*src__quest_summary_component$46template.styles$QuestSummaryComponentHost*/get styles$QuestSummaryComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _QuestSummaryComponent_0_5 = Symbol('_QuestSummaryComponent_0_5');
  src__quest_summary_component$46template._ViewQuestSummaryComponentHost0 = class _ViewQuestSummaryComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new src__quest_summary_component$46template.ViewQuestSummaryComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_QuestSummaryComponent_0_5] = new src__quest_summary_component.QuestSummaryComponent.new();
      this[_compView_0].create(this[_QuestSummaryComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfQuestSummaryComponent()).new(0, this, this.rootEl, this[_QuestSummaryComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (src__quest_summary_component$46template._ViewQuestSummaryComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_QuestSummaryComponent_0_5] = null;
    src__quest_summary_component$46template._ViewQuestSummaryComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__quest_summary_component$46template._ViewQuestSummaryComponentHost0.prototype;
  dart.addTypeTests(src__quest_summary_component$46template._ViewQuestSummaryComponentHost0);
  dart.setMethodSignature(src__quest_summary_component$46template._ViewQuestSummaryComponentHost0, () => ({
    __proto__: dart.getMethods(src__quest_summary_component$46template._ViewQuestSummaryComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__quest_summary_component$46template._ViewQuestSummaryComponentHost0, () => ({
    __proto__: dart.getFields(src__quest_summary_component$46template._ViewQuestSummaryComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__quest_summary_component$46template.ViewQuestSummaryComponent0),
    [_QuestSummaryComponent_0_5]: dart.fieldType(src__quest_summary_component.QuestSummaryComponent)
  }));
  src__quest_summary_component$46template.viewFactory_QuestSummaryComponentHost0 = function(parentView, parentIndex) {
    return new src__quest_summary_component$46template._ViewQuestSummaryComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(src__quest_summary_component$46template.viewFactory_QuestSummaryComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(src__quest_summary_component$46template, {
    /*src__quest_summary_component$46template.QuestSummaryComponentNgFactory*/get QuestSummaryComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfQuestSummaryComponent()).new('quest-summary', src__quest_summary_component$46template.viewFactory_QuestSummaryComponentHost0, src__quest_summary_component$46template._QuestSummaryComponentMetadata));
    },
    /*src__quest_summary_component$46template._QuestSummaryComponentMetadata*/get _QuestSummaryComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*src__quest_summary_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__quest_summary_component$46template.initReflector = function() {
    if (dart.test(src__quest_summary_component$46template._visited)) {
      return;
    }
    src__quest_summary_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__quest_summary_component.QuestSummaryComponent), src__quest_summary_component$46template.QuestSummaryComponentNgFactory);
    angular$46template.initReflector();
  };
  dart.fn(src__quest_summary_component$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/component_styles/src/quest_summary_component.template.ddc", {
    "package:component_styles/src/quest_summary_component.template.dart": src__quest_summary_component$46template
  }, '{"version":3,"sourceRoot":"","sources":["quest_summary_component.template.dart"],"names":[],"mappings":";;;;QAkCc,IAAO;;;QAdqC,yCAAO;;;;QAO7C,iCAAO;;;;;;;;;;;;;;;;;;MAPP,oEAA4B;YAAG,iBAAO,AAAQ,yCAAD,OAAO;;;;;;;AAYpE,UAAM,UAAU,WAAM;AACtB,UAA0B,mBAAmB,iBAAY,CAAC,OAAO;AACjE,UAAI,MAAM,AAAQ,IAAD,SAAS;AAC1B,iBAAK,GAAG,2CAAe,CAAC,GAAG,EAAE,KAAK,gBAAgB;AAClD,mBAAQ,CAAC,WAAK;AACd,UAAa,UAHH,AAGa,AAAI,IAHV,SAGsB,CAAC;AACxC,iBAAK,SAAO,CAAC,OAAO;AACpB,eAAI,CAAC,uDAAU;AACf,YAAO;IACT;;qFAhB2B,UAA2B,EAAE,WAAe;IAFvD,WAAK;AAEsD,gGAAM,qCAAgB,UAAU,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AAC3K,eAAM,GAAG,AAQC,IAAO,oBARR,AAAQ,AAQP,IAAO,SARQ,gBAAc,CAAC;AACxC,0FAAW;gBAAX,8EAAW,GAAK,AAAA,AAAQ,iCAAD,aAAa,iBAAiB,CAAC,IAAI,2CAAiB,SAAS,EAAE,oEAA4B;AAClH,2BAAkB,CAAC,8EAAW;EAChC;;;;;;;;4BAKY,IAAO;;;MAVQ,8EAAW;;;;;wFAoBkC,UAA2B,EAAE,WAAe;AACpH,UAAO,KAAI,sEAA0B,CAAC,UAAU,EAAE,WAAW;EAC/D;;;MAEoB,wEAAgC;YAAG;;;;;;;AAQnD,uBAAW,GAAG,IAAI,sEAA0B,CAAC,MAAM;AACnD,iBAAM,GAAG,iBAAW,OAAO;AAC3B,sCAA0B,GAAG,IAAI,sDAA6B;AAC9D,uBAAW,OAAO,CAAC,gCAA0B,EAAE,qBAAgB;AAC/D,gBAAK,CAAC,WAAM;AACZ,YAAO,KAAI,2CAA2C,CAAC,GAAG,MAAM,WAAM,EAAE,gCAA0B;IACpG;;AAIE,uBAAW,cAAc;IAC3B;;AAIE,+BAAW;;IACb;;0FAnBgC,UAA2B,EAAE,WAAe;IAFjD,iBAAW;IACR,gCAA0B;AACwB,qGAAM,qCAAgB,KAAK,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;EAAC;;;;;;;;;;;;;4FAsBjI,UAA2B,EAAE,WAAe;AACzF,UAAO,KAAI,2EAA+B,CAAC,UAAU,EAAE,WAAW;EACpE;;;MAEsD,sEAA8B;YAAG,gBAAM,+CAA+C,CAAC,iBAAiB,8EAAsC,EAAE,sEAA8B;;MAC9N,sEAA8B;YAAG;;MACnC,gDAAQ;YAAG;;;;;AAEb,kBAAI,gDAAQ,GAAE;AACZ;;AAEF,uDAAW;AAEX,IAAO,oCAAiB,CAAC,iEAAqB,EAAE,sEAA8B;AAC9E,IAAM,gCAAa;EACrB","file":"quest_summary_component.template.ddc.js"}');
  // Exports:
  return {
    src__quest_summary_component$46template: src__quest_summary_component$46template
  };
});

//# sourceMappingURL=quest_summary_component.template.ddc.js.map
