(self["webpackChunkjiffy_upgraded"] = self["webpackChunkjiffy_upgraded"] || []).push([[9277],{

/***/ 49277:
/*!*******************************************************************!*\
  !*** ./src/app/links-module/add-nominee/add-nominee.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddNomineeComponent: () => (/* binding */ AddNomineeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _add_nominee_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-nominee.component.html?ngResource */ 42623);
/* harmony import */ var _add_nominee_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-nominee.component.scss?ngResource */ 7995);
/* harmony import */ var _add_nominee_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_add_nominee_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 17705);




let AddNomineeComponent = class AddNomineeComponent {
  constructor() {}
  ngOnInit() {}
  static {
    this.ctorParameters = () => [];
  }
};
AddNomineeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-add-nominee',
  template: _add_nominee_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  styles: [(_add_nominee_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [])], AddNomineeComponent);


/***/ }),

/***/ 7995:
/*!********************************************************************************!*\
  !*** ./src/app/links-module/add-nominee/add-nominee.component.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ 8564);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 98557);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.add-nominee {
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  top: 0;
  position: fixed;
  left: 0;
  z-index: 9999999;
  overflow: auto;
}
.add-nominee:target {
  visibility: visible;
  opacity: 1;
}
.add-nominee .popup {
  margin: 70px auto;
  padding: 20px;
  background: #fff;
  border-radius: 5px;
  width: 40%;
  position: relative;
}
.add-nominee .popup .close {
  position: absolute;
  top: 20px;
  right: 30px;
  transition: all 2s;
  text-decoration: none;
  opacity: 1;
}
.add-nominee .popup .content {
  max-height: 40%;
  overflow: auto;
  text-align: center;
  padding: 3rem 1rem 1rem 1rem;
}
.add-nominee .popup .content h2 {
  padding-top: 2rem;
  padding-bottom: 1.125rem;
  font-size: 24px;
  color: #333333;
  font-weight: bold;
  font-family: "SF Pro Display" !important;
}
.add-nominee .popup .content p {
  font-size: 20px;
  color: #797979;
  letter-spacing: 0;
  font-weight: 500;
  font-family: "SF Pro Display" !important;
}
@media screen and (max-width: 767px) {
  .add-nominee .popup .content p br {
    display: none;
  }
}
.add-nominee .popup .content .nominee-btn {
  padding-top: 3rem;
}
.add-nominee .popup .content .nominee-btn .btn-gradient {
  font-size: 16px;
  padding: 1rem 4.75rem;
}
.add-nominee .popup .content .nominee-btn .how-add {
  display: block;
  padding: 1.25rem 0;
  text-decoration: underline;
  font-size: 16px;
  color: #004393;
  font-weight: 500;
}
@media screen and (max-width: 767px) {
  .add-nominee .popup {
    width: 90%;
  }
}`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 42623:
/*!********************************************************************************!*\
  !*** ./src/app/links-module/add-nominee/add-nominee.component.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = " <div class=\"add-nominee\">\r\n  <div class=\"popup\">\r\n    <a class=\"close\" href=\"#\">\r\n      <img src=\"assets/images/add-nominee/close.svg\" alt=\"\">\r\n    </a>\r\n    <div class=\"content\">\r\n      <img src=\"assets/images/add-nominee/add-nominee.png\" alt=\"\">\r\n      <h2>Your demat account may get locked.</h2>\r\n      <p>Add or Opt-Out Nominee before <br/><span>31st March 2023</span></p>\r\n      <div class=\"nominee-btn\">\r\n        <button class=\"btn  btn-gradient\" title=\"\">Hurry, Add Now</button>\r\n        <a href=\"javascript:void(0)\" class=\"how-add\">How to add nominee?</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>";

/***/ })

}]);