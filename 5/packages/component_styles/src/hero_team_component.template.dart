// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'hero_team_component.dart';
export 'hero_team_component.dart';
import 'package:angular/angular.dart';
import 'hero.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'hero.template.dart' as _ref0;
import 'package:angular/angular.template.dart' as _ref1;
import 'package:component_styles/src/hero_team_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'hero_team_component.dart' as import2;
import 'dart:html' as import3;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_for.dart' as import5;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import7;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import9;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/template_ref.dart';
import 'dart:core';

const List<dynamic> styles$HeroTeamComponent = const [import0.styles];

class ViewHeroTeamComponent0 extends AppView<import2.HeroTeamComponent> {
  import3.Element _el_0;
  import3.UListElement _el_2;
  ViewContainer _appEl_3;
  import5.NgFor _NgFor_3_9;
  var _expr_0;
  static RenderComponentType _renderType;
  ViewHeroTeamComponent0(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import3.document.createElement('hero-team');
    _renderType ??= import9.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$HeroTeamComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.HeroTeamComponent> build() {
    final _rootEl = rootEl;
    final import3.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import3.document;
    _el_0 = createAndAppend(doc, 'h3', parentRenderNode);
    addShimE(_el_0);
    import3.Text _text_1 = new import3.Text('Team');
    _el_0.append(_text_1);
    _el_2 = createAndAppend(doc, 'ul', parentRenderNode);
    addShimC(_el_2);
    var _anchor_3 = ngAnchor.clone(false);
    _el_2.append(_anchor_3);
    _appEl_3 = new ViewContainer(3, 2, this, _anchor_3);
    TemplateRef _TemplateRef_3_8 = new TemplateRef(_appEl_3, viewFactory_HeroTeamComponent1);
    _NgFor_3_9 = new import5.NgFor(_appEl_3, _TemplateRef_3_8);
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.HeroTeamComponent _ctx = ctx;
    final currVal_0 = _ctx.hero.team;
    if (!identical(_expr_0, currVal_0)) {
      _NgFor_3_9.ngForOf = currVal_0;
      _expr_0 = currVal_0;
    }
    _NgFor_3_9.ngDoCheck();
    _appEl_3.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_3?.destroyNestedViews();
  }
}

AppView<import2.HeroTeamComponent> viewFactory_HeroTeamComponent0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewHeroTeamComponent0(parentView, parentIndex);
}

class _ViewHeroTeamComponent1 extends AppView<import2.HeroTeamComponent> {
  import3.Element _el_0;
  import3.Text _text_1;
  var _expr_0;
  _ViewHeroTeamComponent1(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.EMBEDDED, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewHeroTeamComponent0._renderType;
  }
  @override
  ComponentRef<import2.HeroTeamComponent> build() {
    var doc = import3.document;
    _el_0 = doc.createElement('li');
    addShimE(_el_0);
    _text_1 = new import3.Text('');
    _el_0.append(_text_1);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final String local_member = locals['\$implicit'];
    final currVal_0 = import9.interpolate0(local_member);
    if (!identical(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import2.HeroTeamComponent> viewFactory_HeroTeamComponent1(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewHeroTeamComponent1(parentView, parentIndex);
}

const List<dynamic> styles$HeroTeamComponentHost = const [];

class _ViewHeroTeamComponentHost0 extends AppView<dynamic> {
  ViewHeroTeamComponent0 _compView_0;
  import2.HeroTeamComponent _HeroTeamComponent_0_5;
  _ViewHeroTeamComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewHeroTeamComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _HeroTeamComponent_0_5 = new import2.HeroTeamComponent();
    _compView_0.create(_HeroTeamComponent_0_5, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import2.HeroTeamComponent>(0, this, rootEl, _HeroTeamComponent_0_5);
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

AppView viewFactory_HeroTeamComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewHeroTeamComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.HeroTeamComponent> HeroTeamComponentNgFactory = const ComponentFactory<import2.HeroTeamComponent>('hero-team', viewFactory_HeroTeamComponentHost0, _HeroTeamComponentMetadata);
const _HeroTeamComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(HeroTeamComponent, HeroTeamComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
}
