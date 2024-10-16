(self["webpackChunkjiffy_upgraded"] = self["webpackChunkjiffy_upgraded"] || []).push([[1640],{

/***/ 11846:
/*!*****************************************************************************!*\
  !*** ./src/app/directives/dropdown/dropdown-not-closable-zone.directive.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DropdownNotClosableZone: () => (/* binding */ DropdownNotClosableZone)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 17705);


/**
 * Refer @link https://github.com/pleerock/ngx-dropdown/blob/master/src/DropdownNotClosableZone.ts
 */
let DropdownNotClosableZone = class DropdownNotClosableZone {
  constructor(elementRef) {
    this.elementRef = elementRef;
  }
  contains(element) {
    if (this.dropdownNotClosabledZone === false) return false;
    const thisElement = this.elementRef.nativeElement;
    return thisElement.contains(element);
  }
  static {
    this.ctorParameters = () => [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }];
  }
  static {
    this.propDecorators = {
      dropdownNotClosabledZone: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
        args: ["dropdown-not-closable-zone"]
      }]
    };
  }
};
DropdownNotClosableZone = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({
  selector: "[dropdown-not-closable-zone]",
  standalone: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef])], DropdownNotClosableZone);


/***/ }),

/***/ 55720:
/*!****************************************************************!*\
  !*** ./src/app/directives/dropdown/dropdown-open.directive.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DropdownOpen: () => (/* binding */ DropdownOpen)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _dropdown_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown.directive */ 51429);



/**
 * Refer @link https://github.com/pleerock/ngx-dropdown/blob/master/src/DropdownOpen.ts
 */
let DropdownOpen = class DropdownOpen {
  // -------------------------------------------------------------------------
  // Constructor
  // -------------------------------------------------------------------------
  constructor(dropdown, elementRef) {
    this.dropdown = dropdown;
    this.elementRef = elementRef;
    // -------------------------------------------------------------------------
    // Private Properties
    // -------------------------------------------------------------------------
    /**
     * This hack is needed for dropdown not to open and instantly closed
     */
    this.openedByFocus = false;
    const _this = this;
    this.closeDropdownOnOutsideClick = function closeDropdownOnOutsideClick(event) {
      _this.closeIfInClosableZone(event);
    };
  }
  // -------------------------------------------------------------------------
  // Public Methods
  // -------------------------------------------------------------------------
  toggle() {
    if (this.dropdown.isOpened()) {
      this.close();
    } else {
      this.open();
    }
  }
  open() {
    if (this.dropdown.isOpened()) return;
    this.dropdown.open();
    document.addEventListener("click", this.closeDropdownOnOutsideClick, true);
  }
  close() {
    if (!this.dropdown.isOpened()) return;
    this.dropdown.close();
    document.removeEventListener("click", this.closeDropdownOnOutsideClick, true);
  }
  openDropdown() {
    if (this.dropdown.activateOnFocus && this.openedByFocus) {
      this.openedByFocus = false;
      return;
    }
    if (this.dropdown.isOpened() && this.dropdown.toggleClick) {
      this.close();
    } else {
      this.open();
    }
  }
  dropdownKeydown(event) {
    if (event.keyCode === 40) {
      // down
      this.openDropdown();
    }
  }
  onFocus() {
    if (!this.dropdown.activateOnFocus) return;
    this.openedByFocus = true;
    this.dropdown.open();
    document.addEventListener("click", this.closeDropdownOnOutsideClick, true);
  }
  onBlur(event) {
    if (!this.dropdown.activateOnFocus) return;
    if (event.relatedTarget && !this.dropdown.isInClosableZone(event.relatedTarget) && event.relatedTarget !== this.elementRef.nativeElement) {
      this.dropdown.close();
      document.removeEventListener("click", this.closeDropdownOnOutsideClick, true);
    }
  }
  // -------------------------------------------------------------------------
  // Lifecycle Methods
  // -------------------------------------------------------------------------
  ngOnDestroy() {
    document.removeEventListener("click", this.closeDropdownOnOutsideClick, true);
  }
  // -------------------------------------------------------------------------
  // Private Methods
  // -------------------------------------------------------------------------
  closeIfInClosableZone(event) {
    if (!this.dropdown.isInClosableZone(event.target) && event.target !== this.elementRef.nativeElement && !this.elementRef.nativeElement.contains(event.target)) {
      this.dropdown.close();
      document.removeEventListener("click", this.closeDropdownOnOutsideClick, true);
    }
  }
  static {
    this.ctorParameters = () => [{
      type: _dropdown_directive__WEBPACK_IMPORTED_MODULE_0__.Dropdown,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Host
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }];
  }
  static {
    this.propDecorators = {
      openDropdown: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
        args: ["click"]
      }],
      dropdownKeydown: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
        args: ["keydown", ["$event"]]
      }],
      onFocus: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
        args: ["focus"]
      }],
      onBlur: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
        args: ["blur", ["$event"]]
      }]
    };
  }
};
DropdownOpen = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive)({
  selector: "[dropdown-open]",
  exportAs: "dropdownOpen",
  standalone: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [_dropdown_directive__WEBPACK_IMPORTED_MODULE_0__.Dropdown, _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef])], DropdownOpen);


/***/ }),

/***/ 51429:
/*!***********************************************************!*\
  !*** ./src/app/directives/dropdown/dropdown.directive.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dropdown: () => (/* binding */ Dropdown)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _dropdown_not_closable_zone_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown-not-closable-zone.directive */ 11846);



/**
 * Refer @link https://github.com/pleerock/ngx-dropdown/blob/master/src/Dropdown.ts
 */
let Dropdown = class Dropdown {
  // -------------------------------------------------------------------------
  // Constructor
  // -------------------------------------------------------------------------
  constructor(elementRef) {
    this.elementRef = elementRef;
    this.toggleClick = true;
    this.activateOnFocus = false;
    this.onOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }
  // -------------------------------------------------------------------------
  // Public Methods
  // -------------------------------------------------------------------------
  open() {
    const element = this.elementRef.nativeElement;
    element.classList.add("open");
    this.onOpen.emit(undefined);
  }
  close() {
    const element = this.elementRef.nativeElement;
    element.classList.remove("open");
    this.onClose.emit(undefined);
  }
  isOpened() {
    const element = this.elementRef.nativeElement;
    return element.classList.contains("open");
  }
  isInClosableZone(element) {
    if (!this.notClosableZone) return false;
    return this.notClosableZone.contains(element);
  }
  static {
    this.ctorParameters = () => [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }];
  }
  static {
    this.propDecorators = {
      toggleClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
        args: ["dropdownToggle"]
      }],
      activateOnFocus: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
        args: ["dropdownFocusActivate"]
      }],
      onOpen: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
      }],
      onClose: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
      }],
      notClosableZone: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChild,
        args: [_dropdown_not_closable_zone_directive__WEBPACK_IMPORTED_MODULE_0__.DropdownNotClosableZone]
      }]
    };
  }
};
Dropdown = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive)({
  selector: "[dropdown]",
  exportAs: "dropdown",
  standalone: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef])], Dropdown);


/***/ }),

/***/ 71640:
/*!******************************************************************************!*\
  !*** ./src/app/post-login-module/reports/tax-report/tax-report.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TaxReportComponent: () => (/* binding */ TaxReportComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _tax_report_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tax-report.component.html?ngResource */ 53008);
/* harmony import */ var _tax_report_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tax-report.component.scss?ngResource */ 65034);
/* harmony import */ var _tax_report_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tax_report_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 70980);
/* harmony import */ var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/analytics/analytics.service */ 50213);
/* harmony import */ var src_app_services_rest_reports_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/rest/reports.service */ 86452);
/* harmony import */ var src_app_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/shared-data/shared-data.service */ 46013);
/* harmony import */ var src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/utils/utils.service */ 89893);
/* harmony import */ var _directives_dropdown_dropdown_open_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../directives/dropdown/dropdown-open.directive */ 55720);
/* harmony import */ var _directives_dropdown_dropdown_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../directives/dropdown/dropdown.directive */ 51429);
/* harmony import */ var _common_module_non_eq_sso_non_eq_sso_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common-module/non-eq-sso/non-eq-sso.component */ 67761);












let TaxReportComponent = class TaxReportComponent {
  // public downloadServiceHit: boolean;
  constructor(shared, utils, rest, analytics) {
    this.shared = shared;
    this.utils = utils;
    this.rest = rest;
    this.analytics = analytics;
    let currentYear = new Date().getFullYear();
    this.userAccountStatus = {};
    let month = new Date().getMonth();
    this.taxReportData = [];
    if (month > 2) {
      this.taxReportData = [{
        year: currentYear + '-' + (currentYear + 1),
        loader: false
      }, {
        year: currentYear - 1 + '-' + currentYear,
        loader: false
      }, {
        year: currentYear - 2 + '-' + (currentYear - 1),
        loader: false
      }];
    } else {
      this.taxReportData = [{
        year: currentYear - 1 + '-' + currentYear,
        loader: false
      }, {
        year: currentYear - 2 + '-' + (currentYear - 1),
        loader: false
      }, {
        year: currentYear - 3 + '-' + (currentYear - 2),
        loader: false
      }];
    }
  }
  ngOnInit() {
    this.utils.setTrackMoeEvent('visitedTaxReportBSDF', {
      "User_ID": this.utils.getUserId() || 'guest',
      "IP": this.shared.IPAddress
    });
    this.analytics.emitEvent('visitedTaxReportBSDF', this.utils.getUserId() || 'guest', JSON.stringify({
      "IP": this.shared.IPAddress
    }), 1);
  }
  downloadTaxReport(requestType, fileFormat, item) {
    item.loader = true;
    let payload = {
      ClientId: this.utils.getUserId() || '',
      SessionId: this.utils.getSessionId() || '',
      FinYear: item.year,
      RequestFor: requestType,
      FileFormat: fileFormat || 1
    };
    this.taxReportSubscription = this.rest.getTaxReportDetails(payload).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.finalize)(() => {
      item.loader = false;
    })).subscribe(res => {
      if (res && res.Status === "Success" && res.Response) {
        this.utils.setTrackMoeEvent(requestType === 2 ? 'TaxReportDownloadedPDF' : 'TaxReportSentMail', {
          "User_ID": this.utils.getUserId() || 'guest',
          "Selected Year": item.year,
          "Format": fileFormat ? "Excel" : "PDF",
          "IP": this.shared.IPAddress
        });
        this.analytics.emitEvent(requestType === 2 ? 'TaxReportDownloadedPDF' : 'TaxReportSentMail', this.utils.getUserId() || 'guest', JSON.stringify({
          "IP": this.shared.IPAddress
        }), 1);
        let profile = this.utils.getProfile();
        if (requestType === 2) {
          // var a = window.document.createElement('a');
          // a.href = res.Response;
          // a.target = '_blank';
          // a.download = 'TaxReport_' + this.utils.getUserId() || '';
          // document.body.appendChild(a);
          // a.click();
          // document.body.removeChild(a);
          // let fileName = 'TaxReport_' + this.utils.getUserId() || '';
          //Set the File URL.
          let url = res.Response;
          let filePathArr = url.split('/');
          let fileName = filePathArr[filePathArr.length - 1];
          //Create XMLHTTP Request.
          var req = new XMLHttpRequest();
          req.open("GET", url, true);
          req.responseType = "blob";
          req.onload = function () {
            //Convert the Byte Data to BLOB object.
            var blob = new Blob([req.response], {
              type: "application/octetstream"
            });
            //Check the Browser type and download the File.
            var isIE =  false || !!document['documentMode'];
            if (isIE) {
              window.navigator['msSaveBlob'](blob, fileName);
            } else {
              let url = window.URL;
              let link = url.createObjectURL(blob);
              var a = document.createElement("a");
              a.setAttribute("download", fileName);
              a.setAttribute("href", link);
              document.body.appendChild(a);
              a.click();
              document.body.removeChild(a);
            }
          };
          req.send();
        }
        this.utils.success('Success', requestType === 2 ? 'Download started, Files will be available in system download folder' : res.Response ? res.Response : 'Tax Report mail sent successfully to ' + (profile.EmailID || 'client'));
      } else {
        this.utils.error('Error', 'Data not found');
      }
    }, error => {
      this.utils.error('Error', requestType === 2 ? 'Something went wrong while downloading files' : 'Something went wrong while sending mail');
    });
  }
  /** Lifecycle Hook for Unsubscribing Observable listeners when Component unloads */
  ngOnDestroy() {
    if (this.taxReportSubscription) {
      this.taxReportSubscription.unsubscribe();
    }
  }
  userOutput(event) {
    this.userAccountStatus = event;
    // console.log("userOutput",event)
  }
  static {
    this.ctorParameters = () => [{
      type: src_app_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__.SharedDataService
    }, {
      type: src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_5__.UtilsService
    }, {
      type: src_app_services_rest_reports_service__WEBPACK_IMPORTED_MODULE_3__.ReportsService
    }, {
      type: src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_2__.AnalyticsService
    }];
  }
};
TaxReportComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-tax-report',
  template: _tax_report_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  imports: [_common_module_non_eq_sso_non_eq_sso_component__WEBPACK_IMPORTED_MODULE_8__.NonEqSsoComponent, _directives_dropdown_dropdown_directive__WEBPACK_IMPORTED_MODULE_7__.Dropdown, _directives_dropdown_dropdown_open_directive__WEBPACK_IMPORTED_MODULE_6__.DropdownOpen],
  styles: [(_tax_report_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__metadata)("design:paramtypes", [src_app_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__.SharedDataService, src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_5__.UtilsService, src_app_services_rest_reports_service__WEBPACK_IMPORTED_MODULE_3__.ReportsService, src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_2__.AnalyticsService])], TaxReportComponent);


/***/ }),

/***/ 65034:
/*!*******************************************************************************************!*\
  !*** ./src/app/post-login-module/reports/tax-report/tax-report.component.scss?ngResource ***!
  \*******************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ 8564);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 98557);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*Bootstrap Override*/
/*Custom variables*/
/*Icons Variables*/
/*Responsive screen width*/
.loader-new {
  display: inline-block;
  border: 4px solid #F4F3F8;
  border-radius: 50%;
  border-top: 4px solid #004393;
  width: 30px;
  height: 30px;
  /* Safari */
  animation: spin 2s linear infinite;
}

.btn-outlined-primary {
  background: transparent;
  border: 1px solid #004393;
  color: #004393;
}
@media (max-width: 560px) {
  .btn-outlined-primary {
    font-size: 0px;
    min-width: auto;
    padding: 7px 20px;
    margin: 10px;
  }
}
@media (max-width: 560px) {
  .btn-outlined-primary i {
    font-size: 18px;
    margin-right: 0;
  }
}
.btn-outlined-primary:hover {
  color: #ffffff;
  background: #2D77F4 !important;
}

.btn-group {
  float: none !important;
}
.btn-group.has-dropdown {
  padding: 0px;
  position: relative;
}
.btn-group.has-dropdown > a {
  display: inline-block;
  padding: 9px 18px 8px;
  text-align: center;
  text-decoration: none;
  color: #004393;
}
@media (max-width: 767px) {
  .btn-group.has-dropdown > a {
    padding: 7px 12px;
  }
}
.btn-group.has-dropdown > a .caret {
  border-top: 8px dashed;
  border-top: 8px solid \\9 ;
  border-right: 8px solid transparent;
  border-left: 8px solid transparent;
}
.btn-group.has-dropdown.open > a .caret {
  border-top: 0;
  border-bottom: 8px dashed;
  border-bottom: 8px solid \\9 ;
}
.btn-group.has-dropdown > .dropdown-menu {
  right: 0;
  left: auto;
  padding: 0;
  margin: 0.5rem -0.25rem 0 0;
}
.btn-group.has-dropdown > .dropdown-menu > li > button {
  border: 0;
  overflow: 0;
  padding: 6px 12px;
  background: none;
  display: inline-block;
  text-align: left;
  width: 100%;
  font-size: 1.2rem;
  line-height: 1.5;
}
.btn-group.has-dropdown > .dropdown-menu > li > button:hover {
  background: rgba(138, 151, 160, 0.2);
}
@media (max-width: 767px) {
  .btn-group.sell {
    margin-right: 5px;
    margin-left: 5px;
  }
}

@media (max-width: 992px) {
  .card-block {
    margin-top: 10px;
  }
}
.card-block .page-title {
  margin-bottom: 0px;
}

.no-data-container h3 {
  color: #797979;
  font-size: 16px;
  font-weight: bold;
}

.table-bordered {
  border: 1px solid #F4F3F8;
  width: 100%;
  max-width: 100%;
}

.table-hover > tbody > tr:hover {
  background-color: #f5f5f5;
}

.table-bordered > thead > tr > th, .table-bordered > tbody > tr > td {
  border: 1px solid #F4F3F8;
}`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 53008:
/*!*******************************************************************************************!*\
  !*** ./src/app/post-login-module/reports/tax-report/tax-report.component.html?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\r\n<div class=\"clearfix\"></div>\r\n<section class=\"m-tb20 clearfix\">\r\n  <div class=\"col-md-12 m-tb20\">\r\n    <app-non-eq-sso (userOutput)=\"userOutput($event)\"></app-non-eq-sso>\r\n    <div class=\"card\">\r\n      <div class=\"card-block\">\r\n        <h4 class=\"page-title\">Tax Report</h4>\r\n      </div>\r\n    </div>\r\n    <div class=\"card\">\r\n      <div class=\"card-block content-box\">\r\n        <div class=\"parentHorizontalTab\">\r\n          <div class=\"resp-tabs-container hor_1\">\r\n            <img class=\"loader\" src=\"assets/images/loader.gif\"\r\n              [hidden]=\"taxReportData.length>0 || !shared.isServiceHit\" />\r\n              @if ((!shared.isServiceHit && (taxReportData.length==0)) || !((!userAccountStatus||!userAccountStatus?.onboardStatus || userAccountStatus?.onboardStatus=='C' || userAccountStatus?.onboardStatus=='inactive' || userAccountStatus?.onboardStatus=='suspended'))) {\r\n                <div class=\"text-center no-data-container\">\r\n                  <img src=\"{{shared.serverImageUrl + 'order-no-result.png'}}\"  width=\"150\" height=\"108\">\r\n                  <h3>No Entries in Tax Report</h3>\r\n                </div>\r\n              }\r\n              @if (((!userAccountStatus||!userAccountStatus?.onboardStatus || userAccountStatus?.onboardStatus=='C' || userAccountStatus?.onboardStatus=='inactive' ||  userAccountStatus?.onboardStatus=='suspended'))) {\r\n                <div class=\"table-responsive table-custom\">\r\n                  @if (taxReportData.length) {\r\n                    <table class=\"table table-hover text-uppercase table-bordered\">\r\n                      <thead>\r\n                        <tr>\r\n                          <th class=\"text-center\">Sr. No</th>\r\n                          <th class=\"text-center\">Financial Year</th>\r\n                          <th class=\"text-center\">Action</th>\r\n                        </tr>\r\n                      </thead>\r\n                      <tbody>\r\n                        @for (item of taxReportData; track item; let i = $index) {\r\n                          <tr>\r\n                            <td class=\"text-center\">{{i+1}}</td>\r\n                            <td class=\"text-center\">{{item.year}}</td>\r\n                            <td class=\"text-center\">\r\n                              @if (item.loader) {\r\n                                <div class=\"loader-new\"></div>\r\n                              }\r\n                              @if (!item.loader) {\r\n                                <div dropdown class=\"btn sell btn-group has-dropdown\">\r\n                                  <a class=\"animate\" dropdown-open title=\"Download PDF/Excel\"><i class=\"icon-download\"></i></a>\r\n                                  <ul class=\"dropdown-menu \" role=\"menu\">\r\n                                    <li data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"><button\r\n                                    class=\"dropdown-item\" type=\"button\" (click)=\"downloadTaxReport(2,1,item)\">PDF</button>\r\n                                  </li>\r\n                                  <li data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"><button\r\n                                  class=\"dropdown-item\" type=\"button\" (click)=\"downloadTaxReport(2,2,item)\">Excel</button>\r\n                                </li>\r\n                              </ul>\r\n                            </div>\r\n                          }\r\n                          @if (!item.loader) {\r\n                            <div dropdown class=\"btn sell btn-group has-dropdown\">\r\n                              <a class=\"animate\" dropdown-open title=\"Email PDF/Excel\"><i class=\"fa icon-email-id\"></i></a>\r\n                              <ul class=\"dropdown-menu \" role=\"menu\">\r\n                                <li data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"><button\r\n                                class=\"dropdown-item\" type=\"button\" (click)=\"downloadTaxReport(1,1,item)\">PDF</button>\r\n                              </li>\r\n                              <li data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"><button\r\n                              class=\"dropdown-item\" type=\"button\" (click)=\"downloadTaxReport(1,2,item)\">Excel</button>\r\n                            </li>\r\n                          </ul>\r\n                        </div>\r\n                      }\r\n                      <!-- <button *ngIf=\"!item.loader\" class=\"btn btn-outlined-primary btn-space\" title=\"Download as PDF\" type=\"button\" (click)=\"downloadTaxReport(1,1,item)\"><i class=\"icon-download\"></i></button>\r\n                      <button *ngIf=\"!item.loader\" class=\"btn btn-outlined-primary\" title=\"Send PDF on Mail\" type=\"button\" (click)=\"downloadTaxReport(2,1,item)\"><i class=\"fa icon-email-id\"></i></button>\r\n                      <button *ngIf=\"!item.loader\" class=\"btn btn-outlined-primary btn-space\" title=\"Download as Excel\" type=\"button\" (click)=\"downloadTaxReport(1,2,item)\"><i class=\"icon-download\"></i></button>\r\n                      <button *ngIf=\"!item.loader\" class=\"btn btn-outlined-primary\" title=\"Send Excel on Mail\" type=\"button\" (click)=\"downloadTaxReport(2,2,item)\"><i class=\"fa icon-email-id\"></i></button> -->\r\n                      <!-- <button *ngIf=\"!item.loader\" class=\"btn btn-sm btn-gradient btn-space\" (click)=\"downloadTaxReport(2,item)\">Download as\r\n                    PDF</button>\r\n                    <button *ngIf=\"!item.loader\" class=\"btn btn-sm btn-gradient\" (click)=\"downloadTaxReport(1,item)\">Send PDF on\r\n                    Mail</button> -->\r\n                  </td>\r\n                </tr>\r\n              }\r\n            </tbody>\r\n          </table>\r\n        }\r\n      </div>\r\n    }\r\n  </div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n</section>";

/***/ })

}]);