(self["webpackChunkjiffy_upgraded"] = self["webpackChunkjiffy_upgraded"] || []).push([[6725],{

/***/ 36725:
/*!******************************************************************!*\
  !*** ./src/app/common-module/error-page/error-page.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorPageComponent: () => (/* binding */ ErrorPageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _error_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error-page.component.html?ngResource */ 26287);
/* harmony import */ var _error_page_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error-page.component.scss?ngResource */ 26009);
/* harmony import */ var _error_page_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_error_page_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/shared-data/shared-data.service */ 46013);





/**
 * Component for 404 Error Page
 */
let ErrorPageComponent = class ErrorPageComponent {
  /**
   * Constructor for Object Initialization
   */
  constructor(shared) {
    this.shared = shared;
    this.pageUrl = location.pathname;
  }
  /**
   * Life Cycle Hook
   */
  ngOnInit() {}
  static {
    this.ctorParameters = () => [{
      type: _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_2__.SharedDataService
    }];
  }
};
ErrorPageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-error-page',
  template: _error_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  imports: [],
  styles: [(_error_page_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_2__.SharedDataService])], ErrorPageComponent);


/***/ }),

/***/ 26009:
/*!*******************************************************************************!*\
  !*** ./src/app/common-module/error-page/error-page.component.scss?ngResource ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ 8564);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 98557);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 26287:
/*!*******************************************************************************!*\
  !*** ./src/app/common-module/error-page/error-page.component.html?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "@if (pageUrl=='/404') {\r\n  <div class=\"error-section\">\r\n    <img class=\"error-img\" src=\"assets/images/404.png\">\r\n    <h3 class=\"error-heading\">Error 404</h3>\r\n    <p class=\"error-text\">Sorry the page is currently not available</p>\r\n  </div>\r\n}\r\n@if (pageUrl=='/system-down') {\r\n  <div class=\"error-section\">\r\n    <img class=\"error-img\" src=\"{{shared.serverImageUrl +'images/system-down.png'}}\">\r\n    <h3 class=\"error-heading\">SYSTEM DOWN</h3>\r\n    <p class=\"error-text\">Server Down. This rarely happens! We’ll bounce back.</p>\r\n  </div>\r\n}";

/***/ })

}]);