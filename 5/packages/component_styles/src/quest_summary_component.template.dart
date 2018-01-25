// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: TemplateGenerator
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'quest_summary_component.dart';
export 'quest_summary_component.dart';
import 'package:angular/angular.dart';
// Required for initReflector().
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;

import 'package:component_styles/src/quest_summary_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'quest_summary_component.dart' as import2;
import 'dart:html' as import3;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import5;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import7;
import 'package:angular/angular.dart';

const List<dynamic> styles$QuestSummaryComponent = const [import0.styles];

class ViewQuestSummaryComponent0 extends AppView<import2.QuestSummaryComponent> {
  import3.Element _el_0;
  static RenderComponentType _renderType;
  ViewQuestSummaryComponent0(AppView<dynamic> parentView, num parentIndex) : super(import5.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import3.document.createElement('quest-summary');
    _renderType ??= import7.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$QuestSummaryComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.QuestSummaryComponent> build() {
    final import3.HtmlElement parentRenderNode = initViewRoot(rootEl);
    var doc = import3.document;
    _el_0 = createAndAppend(doc, 'p', parentRenderNode);
    addShimE(_el_0);
    import3.Text _text_1 = new import3.Text('No quests in progress');
    _el_0.append(_text_1);
    init(const [], null);
    return null;
  }
}

AppView<import2.QuestSummaryComponent> viewFactory_QuestSummaryComponent0(AppView<dynamic> parentView, num parentIndex) {
  return new ViewQuestSummaryComponent0(parentView, parentIndex);
}

const List<dynamic> styles$QuestSummaryComponentHost = const [];

class _ViewQuestSummaryComponentHost0 extends AppView<dynamic> {
  ViewQuestSummaryComponent0 _compView_0;
  import2.QuestSummaryComponent _QuestSummaryComponent_0_4;
  _ViewQuestSummaryComponentHost0(AppView<dynamic> parentView, num parentIndex) : super(import5.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewQuestSummaryComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _QuestSummaryComponent_0_4 = new import2.QuestSummaryComponent();
    _compView_0.create(_QuestSummaryComponent_0_4, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import2.QuestSummaryComponent>(0, this, rootEl, _QuestSummaryComponent_0_4);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import2.QuestSummaryComponent) && (0 == nodeIndex))) {
      return _QuestSummaryComponent_0_4;
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

AppView viewFactory_QuestSummaryComponentHost0(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewQuestSummaryComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.QuestSummaryComponent> QuestSummaryComponentNgFactory = const ComponentFactory<import2.QuestSummaryComponent>('quest-summary', viewFactory_QuestSummaryComponentHost0, _QuestSummaryComponentMetadata);
const _QuestSummaryComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;
  _ref0.initReflector();
  _ngRef.registerComponent(
    QuestSummaryComponent,
    QuestSummaryComponentNgFactory,
  );
}
