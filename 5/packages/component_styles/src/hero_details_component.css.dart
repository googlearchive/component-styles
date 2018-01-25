library asset_component_styles_lib_src_hero_details_component.css.dart;


import 'hero_details_box.css.dart' as import0;
const List<dynamic> styles = const [
  '\n\n:host {\n  display: block;\n  border: 1px solid black;\n}\n\n/* #docregion host-function */\n:host(.active) {\n  border-width: 3px;\n}\n/* #enddocregion host-function */\n\n/* #docregion host-context */\n:host-context(.theme-light) h2 {\n  background-color: #eef;\n}\n/* #enddocregion host-context */\n\n:host ::ng-deep h3 {\n  font-style: italic;\n}\n',
  import0.styles
]
;
