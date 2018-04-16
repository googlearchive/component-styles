// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'hero_app_main_component.dart';
export 'hero_app_main_component.dart';
import 'package:angular/angular.dart';
import 'hero.dart';
import 'hero_details_component.dart';
import 'hero_controls_component.dart';
import 'quest_summary_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'hero.template.dart' as _ref0;
import 'hero_controls_component.template.dart' as _ref1;
import 'hero_details_component.template.dart' as _ref2;
import 'package:angular/angular.template.dart' as _ref3;
import 'quest_summary_component.template.dart' as _ref4;
import 'package:angular/src/core/linker/app_view.dart';
import 'hero_app_main_component.dart' as import1;
import 'dart:html' as import2;
import 'quest_summary_component.template.dart' as import3;
import 'quest_summary_component.dart' as import4;
import 'hero_details_component.template.dart' as import5;
import 'hero_details_component.dart' as import6;
import 'hero_controls_component.template.dart' as import7;
import 'hero_controls_component.dart' as import8;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import10;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import12;
import 'package:angular/angular.dart';

const List<dynamic> styles$HeroAppMainComponent = const [];

class ViewHeroAppMainComponent0 extends AppView<import1.HeroAppMainComponent> {
  import2.Element _el_0;
  import3.ViewQuestSummaryComponent0 _compView_0;
  import4.QuestSummaryComponent _QuestSummaryComponent_0_5;
  import2.Element _el_1;
  import5.ViewHeroDetailsComponent0 _compView_1;
  import6.HeroDetailsComponent _HeroDetailsComponent_1_5;
  import2.Element _el_2;
  import7.ViewHeroControlsComponent0 _compView_2;
  import8.HeroControlsComponent _HeroControlsComponent_2_5;
  bool _expr_0;
  var _expr_1;
  var _expr_2;
  static RenderComponentType _renderType;
  ViewHeroAppMainComponent0(AppView<dynamic> parentView, int parentIndex) : super(import10.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import2.document.createElement('hero-app-main');
    _renderType ??= import12.appViewUtils.createRenderType('', ViewEncapsulation.None, styles$HeroAppMainComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.HeroAppMainComponent> build() {
    final _rootEl = rootEl;
    final import2.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    _compView_0 = new import3.ViewQuestSummaryComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    parentRenderNode.append(_el_0);
    _QuestSummaryComponent_0_5 = new import4.QuestSummaryComponent();
    _compView_0.create(_QuestSummaryComponent_0_5, []);
    _compView_1 = new import5.ViewHeroDetailsComponent0(this, 1);
    _el_1 = _compView_1.rootEl;
    parentRenderNode.append(_el_1);
    _HeroDetailsComponent_1_5 = new import6.HeroDetailsComponent();
    _compView_2 = new import7.ViewHeroControlsComponent0(this, 2);
    _el_2 = _compView_2.rootEl;
    _HeroControlsComponent_2_5 = new import8.HeroControlsComponent();
    _compView_2.create(_HeroControlsComponent_2_5, []);
    _compView_1.create(_HeroDetailsComponent_1_5, [
      [_el_2]
    ]);
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import1.HeroAppMainComponent _ctx = ctx;
    final currVal_1 = _ctx.hero;
    if (!identical(_expr_1, currVal_1)) {
      _HeroDetailsComponent_1_5.hero = currVal_1;
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.hero;
    if (!identical(_expr_2, currVal_2)) {
      _HeroControlsComponent_2_5.hero = currVal_2;
      _expr_2 = currVal_2;
    }
    final currVal_0 = _ctx.hero.active;
    if (!identical(_expr_0, currVal_0)) {
      updateElemClass(_el_1, 'active', currVal_0);
      _expr_0 = currVal_0;
    }
    _compView_0.detectChanges();
    _compView_1.detectChanges();
    _compView_2.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
    _compView_1?.destroy();
    _compView_2?.destroy();
  }
}

AppView<import1.HeroAppMainComponent> viewFactory_HeroAppMainComponent0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewHeroAppMainComponent0(parentView, parentIndex);
}

const List<dynamic> styles$HeroAppMainComponentHost = const [];

class _ViewHeroAppMainComponentHost0 extends AppView<dynamic> {
  ViewHeroAppMainComponent0 _compView_0;
  import1.HeroAppMainComponent _HeroAppMainComponent_0_5;
  _ViewHeroAppMainComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import10.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewHeroAppMainComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _HeroAppMainComponent_0_5 = new import1.HeroAppMainComponent();
    _compView_0.create(_HeroAppMainComponent_0_5, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import1.HeroAppMainComponent>(0, this, rootEl, _HeroAppMainComponent_0_5);
  }

  @override
  void detectChangesInternal() {
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView viewFactory_HeroAppMainComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewHeroAppMainComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.HeroAppMainComponent> HeroAppMainComponentNgFactory = const ComponentFactory<import1.HeroAppMainComponent>('hero-app-main', viewFactory_HeroAppMainComponentHost0, _HeroAppMainComponentMetadata);
const _HeroAppMainComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(HeroAppMainComponent, HeroAppMainComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
}
