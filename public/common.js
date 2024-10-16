(self["webpackChunkjiffy_upgraded"] = self["webpackChunkjiffy_upgraded"] || []).push([[2076],{

/***/ 67761:
/*!******************************************************************!*\
  !*** ./src/app/common-module/non-eq-sso/non-eq-sso.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NonEqSsoComponent: () => (/* binding */ NonEqSsoComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _non_eq_sso_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./non-eq-sso.component.html?ngResource */ 18299);
/* harmony import */ var _non_eq_sso_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./non-eq-sso.component.scss?ngResource */ 4065);
/* harmony import */ var _non_eq_sso_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_non_eq_sso_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-oauth2-oidc */ 1244);
/* harmony import */ var src_app_services_cryptography_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/cryptography.service */ 67224);
/* harmony import */ var src_app_services_rest_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/rest/common.service */ 18056);
/* harmony import */ var src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/utils/utils.service */ 89893);









let NonEqSsoComponent = class NonEqSsoComponent {
  constructor(route, utils, rest, oauthService, cryptography) {
    this.route = route;
    this.utils = utils;
    this.rest = rest;
    this.oauthService = oauthService;
    this.cryptography = cryptography;
    this.userOutput = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.userAccountStatus = {};
  }
  ngOnInit() {
    this.userAccountStatus = this.utils.getUserAccountStatus();
    this.userOutput.emit(this.userAccountStatus);
  }
  openLink() {
    if (localStorage.getItem("onb_url")) {
      let url = atob(localStorage.getItem("onb_url"));
      window.open(url, "_self");
    } else {
      if (!(!this.userAccountStatus || !this.userAccountStatus.onboardStatus || this.userAccountStatus.onboardStatus == 'C' || this.userAccountStatus.onboardStatus == 'Y')) this.getAccountStatus();
    }
  }
  navigateToSupport() {
    this.route.navigate(["/links/support"]);
  }
  navigateToModificationFlow() {
    let userId = "";
    let url = this.rest.getOnboardingModificationURL(btoa(this.utils.getUserId()), encodeURIComponent(this.cryptography.encryptText(this.utils.getUserId())), "undefined");
    url = url.replace("&sid=undefined", "");
    url = url + "&type=dormant";
    window.open(url, "_blank");
  }
  getAccountStatus() {
    // let twoFaToken = this.utils.getTwoFAAccessToken();
    // if (!twoFaToken) {
    let payloadReq = {
      requestType: "mobileNumber",
      businessUnit: "ALL",
      //MAKE IT BOTH
      requestIdentifier: this.utils.getMobId()
    };
    this.rest.getJFMFAccountStatus(payloadReq).subscribe(data => {
      if (data.StatusCode == 200) {
        if (data.Body && data.Body.JF) {
          let tok = this.oauthService.getAccessToken();
          let url = data.Body.JF.url || data.Body.JF.redirectionUrl;
          url = (url.indexOf("?") > -1 ? "&" : "?") + ("accessToken=" + tok);
          localStorage.setItem("onb_url", btoa(url));
          window.open(url, "_self");
          let onboardFlag = data.Body.JF.isOnboardFlag;
          if (onboardFlag == "N" || onboardFlag == "" || onboardFlag == "NI") {
            localStorage.setItem("onb_url", btoa(url));
            let preAccStatuus = this.utils.getUserAccountStatus();
            if (preAccStatuus && preAccStatuus.onboardStatus && preAccStatuus.onboardStatus == 'MF') {
              this.utils.setUserAccountStatus({
                onboardStatus: 'N'
              });
            } else {
              this.utils.setUserAccountStatus({
                onboardStatus: 'MF'
              });
            }
            window.open(url, "_self");
          } else if (onboardFlag == "Y" && !(data.Body.JF.url || data.Body.JF.redirectionUrl)) {
            this.utils.setUserAccountStatus({
              onboardStatus: 'Y'
            });
          } else if (onboardFlag == "Y" && (data.Body.JF.url || data.Body.JF.redirectionUrl)) {
            this.utils.setUserAccountStatus({
              onboardStatus: 'YR'
            });
            localStorage.setItem("onb_url", btoa(url));
            window.open(url, "_self");
          }
        }
      } else {
        this.utils.error("Error", data.Message);
      }
    }, err => {});
    // }
  }
  static {
    this.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
    }, {
      type: src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_4__.UtilsService
    }, {
      type: src_app_services_rest_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService
    }, {
      type: angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_7__.OAuthService
    }, {
      type: src_app_services_cryptography_service__WEBPACK_IMPORTED_MODULE_2__.CryptographyService
    }];
  }
  static {
    this.propDecorators = {
      userOutput: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output
      }]
    };
  }
};
NonEqSsoComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-non-eq-sso',
  template: _non_eq_sso_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  imports: [],
  styles: [(_non_eq_sso_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router, src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_4__.UtilsService, src_app_services_rest_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService, angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_7__.OAuthService, src_app_services_cryptography_service__WEBPACK_IMPORTED_MODULE_2__.CryptographyService])], NonEqSsoComponent);


/***/ }),

/***/ 13661:
/*!******************************************************************************!*\
  !*** ./src/app/common-module/select-completer/select-completer.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelectCompleterComponent: () => (/* binding */ SelectCompleterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _select_completer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select-completer.component.html?ngResource */ 17903);
/* harmony import */ var _select_completer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select-completer.component.scss?ngResource */ 75345);
/* harmony import */ var _select_completer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_select_completer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/utils/utils.service */ 89893);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 89417);







/** Component for AutoComplete Dropdown*/
let SelectCompleterComponent = class SelectCompleterComponent {
  /**
   * Constructor for Object Initialization
   * @param elementRef reference of component
   */
  constructor(elementRef, utils) {
    this.elementRef = elementRef;
    this.utils = utils;
    /** Index of Selected Item in dropdown*/
    this.selectedIndex = 0;
    this.selectedClick = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
  }
  /**
   * Life cycle Hook
   */
  ngOnInit() {}
  /**
   * Life Cycle Hook for Input Changes
   * @param changes SimpleChanges instance for incoming Changes
   */
  ngOnChanges(changes) {
    if (changes['itemList'] && changes['itemList'].currentValue && changes['itemList'].currentValue.length) {
      this.itemList = changes['itemList'].currentValue;
      this.selectedIndex = -1;
      if (this.selected) {
        // let indexName = (this.selected.companyName || this.selected.IndexName || this.selected.Symbol||"").toLowerCase();
        this.itemList.filter((obj, index) => {
          if (obj.SegmentId == this.selected.segment && obj.Token == this.selected.token) {
            this.selectedIndex = index;
          }
          return true;
        });
        this.selectFromDropdown(this.selectedIndex);
      }
    }
    if (changes['selected'] && changes['selected'].currentValue) {
      this.selected = changes['selected'].currentValue;
      this.selectedIndex = -1;
      // let indexName = (this.selected.companyName || this.selected.IndexName || this.selected.Symbol||"").toLowerCase();
      this.itemList.filter((obj, index) => {
        if (obj.SegmentId == this.selected.segment && obj.Token == this.selected.token) {
          this.selectedIndex = index;
        }
        return true;
      });
      this.selectFromDropdown(this.selectedIndex);
    }
  }
  /**
   * Event Callback for focus on dropdown
   * @param event Event Object
   * @param el Element
   */
  dropDownFocus(event, el) {
    this.selectActive = true;
    setTimeout(() => {
      this.scrollToElement();
    }, 200);
    setTimeout(() => {
      el.focus();
    }, 1000);
  }
  /**
   * Event Callback for blur on dropdown
   * @param el Element
   */
  dropdownFocusOut(el) {
    setTimeout(() => {
      this.selectActive = false;
      this.searchQuery = '';
    }, 200);
  }
  /**
   * Event Callback for selecting item from dropdown
   * @param index index of selected item
   */
  selectFromDropdown(index) {
    this.selectedIndex = index;
    if (this.selectedIndex > -1) {
      this.selected = this.itemList[this.selectedIndex];
      this.selectedClick.emit(this.selected.Token);
    }
  }
  /**
   * Filter List on keypress
   * @param event Event
   */
  filterList(event) {
    if (event.keyCode == 38 || event.keyCode == 40) {
      if (event.keyCode == 38) {
        this.selectedIndex = this.selectedIndex > 0 ? --this.selectedIndex : 0;
      } else {
        this.selectedIndex = this.selectedIndex < this.itemList.length - 1 ? ++this.selectedIndex : this.itemList.length - 1;
      }
      this.scrollToElement();
    } else if (event.keyCode == 13) {
      this.selectFromDropdown(this.selectedIndex);
      this.dropdownFocusOut('searchInput');
    } else if (event.keyCode == 27) {
      this.dropdownFocusOut('searchInput');
    } else {
      if (this.searchQuery) {
        let re = new RegExp('^' + this.searchQuery.toLowerCase());
        this.selectedIndex = this.itemList.findIndex(item => re.test(item.IndexName.toLowerCase()));
        if (this.selectedIndex > -1) {
          this.scrollToElement();
        }
      }
    }
  }
  /**
   * Scroll to Element in dropdown
   */
  scrollToElement() {
    this.elementRef.nativeElement.querySelector('.list-wrapper').scrollTop = this.selectedIndex * 30;
  }
  static {
    this.ctorParameters = () => [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef
    }, {
      type: src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_2__.UtilsService
    }];
  }
  static {
    this.propDecorators = {
      itemList: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
        args: ['itemList']
      }],
      selected: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
        args: ['selected']
      }],
      selectedClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
      }]
    };
  }
};
SelectCompleterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-select-completer',
  template: _select_completer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass],
  styles: [(_select_completer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef, src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_2__.UtilsService])], SelectCompleterComponent);


/***/ }),

/***/ 63536:
/*!***********************************************!*\
  !*** ./src/app/pipes/custom-order-by.pipe.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomOrderByPipe: () => (/* binding */ CustomOrderByPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);
var CustomOrderByPipe_1;


let CustomOrderByPipe = CustomOrderByPipe_1 = class CustomOrderByPipe {
  // Comparator method
  static comparator(a, b) {
    if (a === null || typeof a === 'undefined') a = 0;
    if (b === null || typeof b === 'undefined') b = 0;
    if (isNaN(parseFloat(a)) || !isFinite(a) || isNaN(parseFloat(b)) || !isFinite(b)) {
      // lowercase strings
      if (a.toLowerCase() > b.toLowerCase()) return -1;
      if (a.toLowerCase() < b.toLowerCase()) return 1;
    } else {
      // ensure number values
      if (parseFloat(a) > parseFloat(b)) return -1;
      if (parseFloat(a) < parseFloat(b)) return 1;
    }
    return 0; // values are equal
  }
  // Actual value transformation
  transform(value, property) {
    return value.sort(function (a, b) {
      let aValue = a[property];
      let bValue = b[property];
      let comparison = CustomOrderByPipe_1.comparator(aValue, bValue);
      return comparison;
    });
  }
};
CustomOrderByPipe = CustomOrderByPipe_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
  name: 'customOrderBy',
  standalone: true
})], CustomOrderByPipe);


/***/ }),

/***/ 4065:
/*!*******************************************************************************!*\
  !*** ./src/app/common-module/non-eq-sso/non-eq-sso.component.scss?ngResource ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ 8564);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 98557);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.onboardStatus .icon-img {
  width: 110px;
}`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 75345:
/*!*******************************************************************************************!*\
  !*** ./src/app/common-module/select-completer/select-completer.component.scss?ngResource ***!
  \*******************************************************************************************/
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
.custom-select-completer {
  position: relative;
  clear: both;
  display: flex;
}
.custom-select-completer .custom-select {
  text-transform: uppercase;
  border: 1px solid #fe595d;
  border: 1px solid #004393;
  font-weight: bold;
  border-radius: 0;
  text-align: left;
  height: 50px;
  font-size: 15px;
  padding: 14px 40px 10px 10px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  z-index: 9;
  position: relative;
  background: transparent;
  width: 100%;
}
.custom-select-completer .custom-select:after {
  display: none;
}
.custom-select-completer:after {
  background-color: #fe595d;
  color: #ffffff;
  padding: 10px 12px;
  content: "\\f107";
  font-family: "icomoon" !important;
  font-size: 25px;
  line-height: 30px;
  position: absolute;
  bottom: 0;
  left: auto;
  right: 0;
  z-index: 1;
  background-color: #004393;
}
.custom-select-completer .completer-wrapper {
  position: absolute;
  z-index: 100;
  width: 100%;
  border-top: 0px;
  top: 0;
}
.custom-select-completer .completer-wrapper .form-control {
  box-shadow: none;
  outline: none;
  border-radius: 0px;
  border: none;
  border: 1px solid #fe595d;
  border: 1px solid #2D77F4;
  border-right: none;
  height: 50px;
  width: 83%;
}
@media (min-width: 1280px) {
  .custom-select-completer .completer-wrapper .form-control {
    width: 73%;
  }
}
.custom-select-completer .completer-wrapper ul {
  max-height: 200px;
  padding: 0;
  list-style: none;
  overflow-y: scroll;
  margin-bottom: 0px;
  border: 1px solid #cccccc;
  background-color: #ffffff;
  border-top: none;
}
.custom-select-completer .completer-wrapper ul li {
  padding: 5px 10px;
  cursor: pointer;
  line-height: 1.428571429;
}
.custom-select-completer .completer-wrapper ul li:hover {
  background-color: rgba(249, 235, 33, 0.2);
  color: #004393;
}
.custom-select-completer .completer-wrapper ul li.active {
  background-color: rgba(249, 235, 33, 0.2);
  color: #004393;
}`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 18299:
/*!*******************************************************************************!*\
  !*** ./src/app/common-module/non-eq-sso/non-eq-sso.component.html?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!-- Onboarding pending user-->\r\n@if (userAccountStatus&&userAccountStatus?.onboardStatus && userAccountStatus?.onboardStatus=='N') {\r\n  <div class=\"pending-user border-primary onboardStatus\" > <!-- Onboarding Not started User-->\r\n    <div class=\"validation-details\">\r\n      <img\r\n        src=\"../../../assets/icons/zero-amc.gif\"\r\n        class=\"icon-img\"\r\n        alt=\"Few Step Away\"\r\n        />\r\n        <p><span>Activate your Account & unlock exclusive access</span></p>\r\n      </div>\r\n      <div class=\"btn-banr\">\r\n        <button (click)=\"openLink()\" class=\"btn-cntine btn buy\">Setup FREE Account Now</button>\r\n      </div>\r\n    </div>\r\n  }\r\n  <!--   <div class=\"pending-user border-primary\"  *ngIf=\"userAccountStatus&&userAccountStatus?.onboardStatus && userAccountStatus?.onboardStatus=='N'\">\r\n  <div class=\"validation-details\">\r\n    <img\r\n      src=\"../../../assets/images/jiffy-dashboard/onboarding-pending-user-gif.gif\"\r\n      class=\"icon-img\"\r\n      alt=\"Few Step Away\"\r\n      />\r\n      <p><span>Few Steps Away!</span> Complete your account setup to begin your <span>Joy of Earning.</span></p>\r\n    </div>\r\n    <div class=\"btn-banr\">\r\n      <button (click)=\"openLink()\" class=\"btn-cntine btn buy\">Continue</button>\r\n    </div>\r\n  </div> -->\r\n\r\n  @if (userAccountStatus&&userAccountStatus?.onboardStatus && userAccountStatus?.onboardStatus=='MF') {\r\n    <div class=\"pending-user raise-issue\" >\r\n      <div class=\"validation-details\">\r\n        <img\r\n          src=\"../../../assets/images/jiffy-dashboard/inactive-ico.svg\"\r\n          class=\"icon-img2\"\r\n          alt=\"Few Step Away\"\r\n          />\r\n          <div>\r\n            <h6>Your Equity Account isn’t activated yet!</h6>\r\n            <p>Please create your equity account now.</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"btn-banr\">\r\n          <button (click)=\"openLink()\" class=\"btn-cntine btn buy\">Continue</button>\r\n        </div>\r\n      </div>\r\n    }\r\n\r\n\r\n\r\n    <!-- Onboarding not started user -->\r\n    @if (false) {\r\n      <div class=\"pending-user\">\r\n        <div class=\"validation-details\">\r\n          <img\r\n            src=\"../../../assets/images/jiffy-dashboard/onboarding-not-started-user.gif\"\r\n            class=\"icon-img2\"\r\n            alt=\"Few Step Away\"\r\n            />\r\n            <p><span>Setup your Account Now</span> to Begin the <span>Joy of Earning</span></p>\r\n          </div>\r\n          <div class=\"btn-banr\">\r\n            <button class=\"btn-cntine btn buy\">Get Started</button>\r\n          </div>\r\n        </div>\r\n      }\r\n      <!-- Onboarding Complete User -->\r\n      @if (userAccountStatus&&userAccountStatus?.onboardStatus && userAccountStatus?.onboardStatus=='Y') {\r\n        <div class=\"pending-user\">\r\n          <div class=\"validation-details\">\r\n            <img\r\n              src=\"../../../assets/images/jiffy-dashboard/complete-onboard-user.svg\"\r\n              class=\"icon-img2\"\r\n              alt=\"Few Step Away\"\r\n              />\r\n              <div>\r\n                <h6>Account Activation in Progress</h6>\r\n                <p>Navigate through our features while we get things ready for you!</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        }\r\n        <!-- onboarding complete/Pending with Raise issue -->\r\n        @if (userAccountStatus&&userAccountStatus?.onboardStatus && userAccountStatus?.onboardStatus=='YR') {\r\n          <div class=\"pending-user raise-issue\">\r\n            <div class=\"validation-details\">\r\n              <img\r\n                src=\"../../../assets/images/jiffy-dashboard/raise-issue.svg\"\r\n                class=\"icon-img2\"\r\n                alt=\"Few Step Away\"\r\n                />\r\n                <div>\r\n                  <h6>Account Activation is Failed</h6>\r\n                  <p>There’s an issue with the <strong>account details</strong> you provided. Please review and resubmit.</p>\r\n                </div>\r\n              </div>\r\n              <div class=\"btn-banr\">\r\n                <button  (click)=\"openLink()\" class=\"btn-cntine btn buy\">Proceed</button>\r\n              </div>\r\n            </div>\r\n          }\r\n";

/***/ }),

/***/ 17903:
/*!*******************************************************************************************!*\
  !*** ./src/app/common-module/select-completer/select-completer.component.html?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"custom-select-completer\">\r\n  <span class=\"custom-select btn btn-secondary form-control ui-select-toggle\"\r\n  (click)=\"dropDownFocus($event, searchInput)\">{{selected?.companyName || selected?.IndexDesc}}</span>\r\n  <div class=\"completer-wrapper\" [hidden]=\"!selectActive\">\r\n    <input type=\"text\" inputRestrict=\"alphanumeric\"  #searchInput class=\"form-control\" [(ngModel)]=\"searchQuery\"\r\n      (keypress)=\"this.utils.validateKeyPress($event)\"\r\n      (keyup)=\"filterList($event)\" (focusout)=\"dropdownFocusOut(searchInput)\">\r\n      <ul class=\"list-wrapper\">\r\n        @for (item of itemList; track item; let index = $index) {\r\n          <li\r\n            [ngClass]=\"{'active':index == selectedIndex && index >= 0}\" (click)=\"selectFromDropdown(index)\"\r\n          value=\"{{item.Token}}\" title=\"{{item.IndexDesc}}\" class=\"class-{{index}}\">{{item.IndexDesc}}</li>\r\n        }\r\n      </ul>\r\n    </div>\r\n  </div>";

/***/ })

}]);