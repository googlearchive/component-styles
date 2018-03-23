// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'hero_controls_component.dart';
export 'hero_controls_component.dart';
import 'package:angular/angular.dart';
import 'hero.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'hero.template.dart' as _ref0;
import 'package:angular/angular.template.dart' as _ref1;
import 'package:angular/src/core/linker/app_view.dart';
import 'hero_controls_component.dart' as import1;
import 'dart:html' as import2;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import4;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import6;
import 'package:angular/angular.dart';

const List<dynamic> styles$HeroControlsComponent = const ['button._ngcontent-%COMP% { background-color:white; border:1px solid #777; }'];

class ViewHeroControlsComponent0 extends AppView<import1.HeroControlsComponent> {
  import2.Element _el_0;
  import2.ButtonElement _el_2;
  static RenderComponentType _renderType;
  ViewHeroControlsComponent0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import2.document.createElement('hero-controls');
    _renderType ??= import6.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$HeroControlsComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.HeroControlsComponent> build() {
    final _rootEl = rootEl;
    final import2.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import2.document;
    _el_0 = createAndAppend(doc, 'h3', parentRenderNode);
    addShimE(_el_0);
    import2.Text _text_1 = new import2.Text('Controls');
    _el_0.append(_text_1);
    _el_2 = createAndAppend(doc, 'button', parentRenderNode);
    addShimC(_el_2);
    import2.Text _text_3 = new import2.Text('Activate');
    _el_2.append(_text_3);
    _el_2.addEventListener('click', eventHandler0(ctx.activate));
    init(const [], null);
    return null;
  }
}

AppView<import1.HeroControlsComponent> viewFactory_HeroControlsComponent0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewHeroControlsComponent0(parentView, parentIndex);
}

const List<dynamic> styles$HeroControlsComponentHost = const [];

class _ViewHeroControlsComponentHost0 extends AppView<dynamic> {
  ViewHeroControlsComponent0 _compView_0;
  import1.HeroControlsComponent _HeroControlsComponent_0_5;
  _ViewHeroControlsComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewHeroControlsComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _HeroControlsComponent_0_5 = new import1.HeroControlsComponent();
    _compView_0.create(_HeroControlsComponent_0_5, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import1.HeroControlsComponent>(0, this, rootEl, _HeroControlsComponent_0_5);
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

AppView viewFactory_HeroControlsComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewHeroControlsComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.HeroControlsComponent> HeroControlsComponentNgFactory = const ComponentFactory<import1.HeroControlsComponent>('hero-controls', viewFactory_HeroControlsComponentHost0, _HeroControlsComponentMetadata);
const _HeroControlsComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(HeroControlsComponent, HeroControlsComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
}
