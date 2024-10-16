(self["webpackChunkjiffy_upgraded"] = self["webpackChunkjiffy_upgraded"] || []).push([[3965],{

/***/ 93965:
/*!***************************************************************************!*\
  !*** ./src/app/links-module/mf-consent-page/mf-consent-page.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MfConsentPageComponent: () => (/* binding */ MfConsentPageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _mf_consent_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mf-consent-page.component.html?ngResource */ 60167);
/* harmony import */ var _mf_consent_page_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mf-consent-page.component.scss?ngResource */ 75507);
/* harmony import */ var _mf_consent_page_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mf_consent_page_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 17705);




let MfConsentPageComponent = class MfConsentPageComponent {
  constructor() {}
  ngOnInit() {}
  static {
    this.ctorParameters = () => [];
  }
};
MfConsentPageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-mf-consent-page',
  template: _mf_consent_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  styles: [(_mf_consent_page_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [])], MfConsentPageComponent);


/***/ }),

/***/ 75507:
/*!****************************************************************************************!*\
  !*** ./src/app/links-module/mf-consent-page/mf-consent-page.component.scss?ngResource ***!
  \****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ 8564);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 98557);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*Bootstrap Override*/
/*Custom variables*/
/*Icons Variables*/
/*Responsive screen width*/
@font-face {
  font-display: swap;
  font-family: "SF Pro Display";
  src: url('SFProDisplay-Regular.eot');
  src: url('SFProDisplay-Regular.eot?#iefix') format("embedded-opentype"), url('SFProDisplay-Regular.woff2') format("woff2"), url('SFProDisplay-Regular.woff') format("woff"), url('SFProDisplay-Regular.ttf') format("truetype"), url('SFProDisplay-Regular.svg#SFProDisplay-Regular') format("svg");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
.sleekbox-overlay {
  z-index: 1000;
  font-size: 16px;
  display: flex;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  visibility: hidden;
  z-index: 0;
  background: rgba(62, 64, 79, 0.3019607843);
}
.sleekbox-overlay .sleekbox-popup {
  box-sizing: border-box;
  background: #fff;
  max-width: 834px;
  margin: 0 auto;
  border-radius: 8px;
  margin: 1rem auto;
  height: auto;
}
@media (max-width: 767px) {
  .sleekbox-overlay .sleekbox-popup {
    margin: 1rem 1rem;
  }
}
.sleekbox-overlay .sleekbox-popup .popup-sub-row {
  padding: 52px;
  text-align: center;
  display: flex;
}
@media (max-width: 767px) {
  .sleekbox-overlay .sleekbox-popup .popup-sub-row {
    padding: 20px;
    flex-direction: column;
  }
}
.sleekbox-overlay .sleekbox-popup .popup-sub-row .left-side-wrap {
  background-color: rgba(0, 176, 156, 0.0509803922);
  border-radius: 8px;
  border: 1px solid rgba(0, 176, 156, 0.3019607843);
  width: 45%;
  padding: 28px;
}
@media (max-width: 767px) {
  .sleekbox-overlay .sleekbox-popup .popup-sub-row .left-side-wrap {
    width: 100%;
  }
}
.sleekbox-overlay .sleekbox-popup .popup-sub-row .left-side-wrap .text {
  margin-top: 42px;
}
.sleekbox-overlay .sleekbox-popup .popup-sub-row .left-side-wrap .text .texthead {
  color: #333333;
  font-weight: 700;
  font-size: 18px;
  line-height: 16px;
  font-family: "SF Pro Display";
  padding-bottom: 10px;
}
.sleekbox-overlay .sleekbox-popup .popup-sub-row .left-side-wrap .text .subtxt {
  color: #333333;
  font-size: 14px;
  line-height: 20px;
  font-family: "SF Pro Display";
  font-weight: 500;
  letter-spacing: 0.17px;
}
.sleekbox-overlay .sleekbox-popup .popup-sub-row .right-side-wrap {
  width: 55%;
  margin-left: 50px;
}
@media (max-width: 767px) {
  .sleekbox-overlay .sleekbox-popup .popup-sub-row .right-side-wrap {
    width: 100%;
    margin-left: 0px;
    margin-top: 3rem;
  }
}
.sleekbox-overlay .sleekbox-popup .popup-sub-row .right-side-wrap .right-heading {
  color: #333333;
  font-size: 16px;
  line-height: 19px;
  font-family: "SF Pro Display";
  font-weight: 700;
  text-align: left;
}
.sleekbox-overlay .sleekbox-popup .popup-sub-row .right-side-wrap ul {
  list-style: none;
  text-align: left;
  padding-left: 0;
}
.sleekbox-overlay .sleekbox-popup .popup-sub-row .right-side-wrap ul li {
  font-size: 14px;
  color: #333333;
  line-height: 16px;
  font-family: "SF Pro Display";
  font-weight: 500;
  padding-bottom: 18px;
  display: flex;
  align-items: center;
}
@media (max-width: 767px) {
  .sleekbox-overlay .sleekbox-popup .popup-sub-row .right-side-wrap ul li {
    display: flex;
  }
}
.sleekbox-overlay .sleekbox-popup .popup-sub-row .right-side-wrap ul li span {
  background-color: #F1F3F4;
  border-radius: 10px;
  padding: 7px;
  margin-right: 14px;
}
.sleekbox-overlay .sleekbox-popup .popup-sub-row .right-side-wrap .proceed-btn {
  background-color: #2D77F4;
  border-radius: 4px;
  color: #FFFFFF;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  font-weight: 600;
  font-family: "SFProText" !important;
  border: none;
  width: 100%;
  padding: 15px 0;
}
.sleekbox-overlay .sleekbox-popup .popup-sub-row .right-side-wrap .explore-btn {
  background-color: transparent;
  color: #2D77F4;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  font-weight: 600;
  font-family: "SFProText" !important;
  border: none;
  width: 100%;
  padding: 15px 0;
}
.sleekbox-overlay.sleekbox-popup-active {
  opacity: 1;
  visibility: visible;
  z-index: 9999;
}`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 60167:
/*!****************************************************************************************!*\
  !*** ./src/app/links-module/mf-consent-page/mf-consent-page.component.html?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"sleekbox-overlay sleekbox-popup-active\">\r\n  <div class=\"sleekbox-popup\">\r\n    <div class=\"popup-sub-row\">\r\n\r\n      <div class=\"left-side-wrap\">\r\n        <img src=\"../../../assets/images/consent-page/mutual-fund.png\">\r\n        <div class=\"text\">\r\n            <p class=\"texthead\">Set up Mutual Funds account</p>\r\n            <p class=\"subtxt\">Hey there, we would be carry forwarding your existing data further to open Mutual funds account.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"right-side-wrap\">\r\n        <p class=\"right-heading\">Benefits</p>\r\n          <ul>\r\n            <li><span><img src=\"../../../assets/images/consent-page/one-click.png\"></span>One click account opening at no additional cost</li>\r\n            <li><span><img src=\"../../../assets/images/consent-page/basket.png\"></span>Basket for every Financial Goals</li>\r\n            <li><span><img src=\"../../../assets/images/consent-page/recommendation.png\"></span>Recommendations for Best performing schemes</li>\r\n            <li><span><img src=\"../../../assets/images/consent-page/goal.png\"></span>Custom Goal planner for your custom needs</li>\r\n            <li><span><img src=\"../../../assets/images/consent-page/fund.png\"></span>ELSS funds for Tax saving</li>\r\n          </ul>\r\n\r\n          \r\n          <button class=\"proceed-btn\">Proceed</button>\r\n          <button class=\"explore-btn mt-3\">Explore</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>";

/***/ })

}]);