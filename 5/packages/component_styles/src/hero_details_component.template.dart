// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: TemplateGenerator
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'hero_details_component.dart';
export 'hero_details_component.dart';
import 'package:angular/angular.dart';
import 'hero.dart';
import 'hero_team_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'hero.template.dart' as _ref0;
import 'hero_team_component.template.dart' as _ref1;
import 'package:angular/angular.template.dart' as _ref2;
import 'package:component_styles/src/hero_details_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'hero_details_component.dart' as import2;
import 'dart:html' as import3;
import 'hero_team_component.template.dart' as import4;
import 'hero_team_component.dart' as import5;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import7;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import9;
import 'package:angular/angular.dart';

const List<dynamic> styles$HeroDetailsComponent = const [import0.styles];

class ViewHeroDetailsComponent0 extends AppView<import2.HeroDetailsComponent> {
  import3.Element _el_0;
  import3.Text _text_1;
  import3.Element _el_2;
  import4.ViewHeroTeamComponent0 _compView_2;
  import5.HeroTeamComponent _HeroTeamComponent_2_4;
  var _expr_0;
  var _expr_1;
  static RenderComponentType _renderType;
  ViewHeroDetailsComponent0(AppView<dynamic> parentView, num parentIndex) : super(import7.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import3.document.createElement('hero-details');
    _renderType ??= import9.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$HeroDetailsComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.HeroDetailsComponent> build() {
    final import3.HtmlElement parentRenderNode = initViewRoot(rootEl);
    var doc = import3.document;
    _el_0 = createAndAppend(doc, 'h2', parentRenderNode);
    addShimE(_el_0);
    _text_1 = new import3.Text('');
    _el_0.append(_text_1);
    _compView_2 = new import4.ViewHeroTeamComponent0(this, 2);
    _el_2 = _compView_2.rootEl;
    parentRenderNode.append(_el_2);
    addShimC(_el_2);
    _HeroTeamComponent_2_4 = new import5.HeroTeamComponent();
    _compView_2.create(_HeroTeamComponent_2_4, []);
    project(parentRenderNode, 0);
    init(const [], null);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import5.HeroTeamComponent) && (2 == nodeIndex))) {
      return _HeroTeamComponent_2_4;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.HeroDetailsComponent _ctx = ctx;
    final currVal_1 = _ctx.hero;
    if (!identical(_expr_1, currVal_1)) {
      _HeroTeamComponent_2_4.hero = currVal_1;
      _expr_1 = currVal_1;
    }
    final currVal_0 = import9.interpolate0(_ctx.hero.name);
    if (!identical(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
    _compView_2.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_2?.destroy();
  }
}

AppView<import2.HeroDetailsComponent> viewFactory_HeroDetailsComponent0(AppView<dynamic> parentView, num parentIndex) {
  return new ViewHeroDetailsComponent0(parentView, parentIndex);
}

const List<dynamic> styles$HeroDetailsComponentHost = const [];

class _ViewHeroDetailsComponentHost0 extends AppView<dynamic> {
  ViewHeroDetailsComponent0 _compView_0;
  import2.HeroDetailsComponent _HeroDetailsComponent_0_4;
  _ViewHeroDetailsComponentHost0(AppView<dynamic> parentView, num parentIndex) : super(import7.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewHeroDetailsComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _HeroDetailsComponent_0_4 = new import2.HeroDetailsComponent();
    _compView_0.create(_HeroDetailsComponent_0_4, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import2.HeroDetailsComponent>(0, this, rootEl, _HeroDetailsComponent_0_4);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import2.HeroDetailsComponent) && (0 == nodeIndex))) {
      return _HeroDetailsComponent_0_4;
    }
    return notFoundResult;
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

AppView viewFactory_HeroDetailsComponentHost0(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewHeroDetailsComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.HeroDetailsComponent> HeroDetailsComponentNgFactory = const ComponentFactory<import2.HeroDetailsComponent>('hero-details', viewFactory_HeroDetailsComponentHost0, _HeroDetailsComponentMetadata);
const _HeroDetailsComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(HeroDetailsComponent, HeroDetailsComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
}
