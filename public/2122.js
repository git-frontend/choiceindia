(self["webpackChunkjiffy_upgraded"] = self["webpackChunkjiffy_upgraded"] || []).push([[2122],{

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

/***/ 42122:
/*!*************************************************************************************!*\
  !*** ./src/app/market/secure-products/secure-products/secure-products.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SecureProductsComponent: () => (/* binding */ SecureProductsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _secure_products_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./secure-products.component.html?ngResource */ 88650);
/* harmony import */ var _secure_products_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./secure-products.component.scss?ngResource */ 69674);
/* harmony import */ var _secure_products_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_secure_products_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 70980);
/* harmony import */ var src_app_post_login_module_funds_pay_in_out_pay_in_out_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/post-login-module/funds/pay-in-out/pay-in-out.component */ 48149);
/* harmony import */ var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/analytics/analytics.service */ 50213);
/* harmony import */ var src_app_services_cryptography_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/cryptography.service */ 67224);
/* harmony import */ var src_app_services_rest_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/rest/login.service */ 60954);
/* harmony import */ var src_app_services_rest_scheme_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/rest/scheme.service */ 25034);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var src_app_directives_dropdown_dropdown_open_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/directives/dropdown/dropdown-open.directive */ 55720);
/* harmony import */ var src_app_directives_dropdown_dropdown_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/directives/dropdown/dropdown.directive */ 51429);
/* harmony import */ var _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../assets/libs/esm-moment.min.js */ 29483);
/* harmony import */ var _directives_input_restrict2_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../directives/input-restrict2.directive */ 5833);
/* harmony import */ var _directives_show_focus_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../directives/show-focus.directive */ 57862);
/* harmony import */ var _services_rest_post_login_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../services/rest/post-login.service */ 4135);
/* harmony import */ var _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../services/seo/seo.service */ 44897);
/* harmony import */ var _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../services/shared-data/shared-data.service */ 46013);
/* harmony import */ var _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../services/utils/utils.service */ 89893);







// var moment: any = require('../../../assets/libs/esm-moment.min.js');


// import { PayInOutComponent } from '../../../post-login-module/pay-in-out/pay-in-out.component';


// import { element } from '@angular/core/src/render3';











//var moment: any = require();
// import { SecureProductsTransactionComponent } from '../secure-products-transaction/secure-products-transaction.component';
let SecureProductsComponent = class SecureProductsComponent {
  constructor(activatedRoute, utils, cryptographyService, rest, shared, route, schemeService, renderer, seo, analytics, loginservice) {
    this.activatedRoute = activatedRoute;
    this.utils = utils;
    this.cryptographyService = cryptographyService;
    this.rest = rest;
    this.shared = shared;
    this.route = route;
    this.schemeService = schemeService;
    this.renderer = renderer;
    this.seo = seo;
    this.analytics = analytics;
    this.loginservice = loginservice;
    // @ViewChild(SecureProductsTransactionComponent) transaction: SecureProductsTransactionComponent;
    this.isNRI = false;
    this.config = {
      today: new Date(),
      name: this.utils.getProfile().Name,
      tbills: {
        header: 'Treasury Bills',
        abbreviation: 'T-Bills',
        series: 'TB',
        summary: 'Treasury bills, also called T-bills, are short term government securities with a maturity period of less than one year issued by the central government of India.',
        benefits: [{
          imgurl: 'risk-free.svg',
          title: 'Risk Free',
          content: 'G Secs are safest of all investments as they are issued by central government of India'
        }, {
          imgurl: 'liquidity.svg',
          title: 'Guaranteed Returns',
          content: 'Assured Periodic Returns regular stream of income every six months in form of coupon'
        }, {
          imgurl: 'competitive-return.svg',
          title: 'Competitive Returns',
          content: 'Get better returns compared to fixed deposits (FDs) for long dated securities'
        }, {
          imgurl: 'maturity.svg',
          title: 'Available across the maturities',
          content: 'One can plan for their life goals till ten years maturity'
        }],
        apply: [{
          step: 'Step 1',
          imgurl: 'stepone.svg',
          content: 'Check out the latest open Government Securities details and click on Apply.'
        }, {
          step: 'Step 2',
          imgurl: 'steptwo.svg',
          content: 'Enter the required quantity & check out the funds required. Maintain the required funds in your trading account.'
        }, {
          step: 'Step 3',
          imgurl: 'stepthree.svg',
          content: 'You have successfully applied for the Government Securities.'
        }],
        faq: [],
        faqId: '22000178390',
        needHelp: true,
        ongoing: {
          tableStructure: [{
            "key": "name",
            "label": "Security Name",
            cell: row => `${row.name || "-"}`
          }, {
            "key": "biddingEndDate",
            "label": "Bid Close Date",
            cell: row => `${row.biddingEndDate ? new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_9__["default"](new Date(row.biddingEndDate.split('-')[2], row.biddingEndDate.split('-')[1] - 1, row.biddingEndDate.split('-')[0])).format("Do MMM 'YY") : "-"}`
          }, {
            "key": "biddingEndTime",
            "label": "Bid Timing",
            cell: row => `${row.dailyStartTime && row.dailyEndTime ? new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_9__["default"](new Date(new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_9__["default"]().format("MMM DD YYYY") + " " + row.dailyStartTime + " GMT+0530")).format("hh:mmA") + " - " + new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_9__["default"](new Date(new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_9__["default"]().format("MMM DD YYYY") + " " + row.dailyEndTime + " GMT+0530")).format("hh:mmA") : "-"}`
          }, {
            "key": "maturityPeriod",
            "label": "Maturity Period",
            cell: row => `${row.maturityPeriod || "-"}`
          }, {
            "key": "couponRate",
            "label": "Coupon Rate",
            cell: row => `${row.couponRate || "-"}`
          },
          // {
          //   "key": "minBidQuantity", "label": "Min-Max (Units)", cell: (row: any) => `${(row.minBidQuantity && row.maxQuantity) ? ((row.minBidQuantity / 100).toLocaleString('en-IN') + "-" + (row.maxQuantity / 100).toLocaleString('en-IN')) : "-"}`
          // },
          // {
          //   "key": "lotSize", "label": "Min Lot Size (Units)", cell: (row: any) => `${row.lotSize ? (row.lotSize / 100).toLocaleString('en-IN') : "-"}`
          // },
          // {
          //   "key": "faceValue", "label": "Face Value", cell: (row: any) => `${row.faceValue ? row.faceValue.toLocaleString('en-IN') : "-"}`
          // },
          {
            "key": "minamount",
            "label": "Min Inv Amount",
            cell: row => `${row.minBidQuantity && row.cutoffPrice ? '₹ ' + (row.minBidQuantity / 100 * row.cutoffPrice).toLocaleString('en-IN') : "-"}`
          }, {
            "key": "orderStatus",
            "label": "Status",
            cell: row => `${row.orderStatus && row.orderStatus === 'ES' ? 'Applied Sucessfully' : row.orderStatus && row.orderStatus === 'EF' ? 'Failed' : row.orderStatus && row.orderStatus === 'CS' ? 'Cancelled Sucessfully' : row.orderStatus && row.orderStatus === 'CF' ? 'Cancel Failed' : ''}`,
            orderstatus: row => `${row.orderStatus || ''}`
          }]
        }
      },
      gsec: {
        header: 'Government Securities',
        abbreviation: 'G-Sec',
        series: 'GS',
        summary: 'Safer than bank FDs, guaranteed by the Govt. of India.',
        benefits: [{
          imgurl: 'risk-free.svg',
          title: 'Risk Free',
          content: 'G Secs are safest of all investments as they are issued by central government of India'
        }, {
          imgurl: 'liquidity.svg',
          title: 'Guaranteed Returns',
          content: 'Assured Periodic Returns regular stream of income every six months in form of coupon'
        }, {
          imgurl: 'competitive-return.svg',
          title: 'Competitive Returns',
          content: 'Get better returns compared to fixed deposits (FDs) for long dated securities'
        }, {
          imgurl: 'maturity.svg',
          title: 'Available across the maturities',
          content: 'One can plan for their life goals till ten years maturity'
        }],
        apply: [{
          step: 'Step 1',
          imgurl: 'stepone.svg',
          content: 'Check out the latest open Government Securities details and click on Apply.'
        }, {
          step: 'Step 2',
          imgurl: 'steptwo.svg',
          content: 'Enter the required quantity & check out the funds required. Maintain the required funds in your trading account.'
        }, {
          step: 'Step 3',
          imgurl: 'stepthree.svg',
          content: 'You have successfully applied for the Government Securities.'
        }],
        faq: [],
        faqId: '22000178390',
        needHelp: true,
        ongoing: {
          tableStructure: [{
            "key": "name",
            "label": "Security Name",
            cell: row => `${row.name || "-"}`
          }, {
            "key": "biddingEndDate",
            "label": "Bid Close Date",
            cell: row => `${row.biddingEndDate ? new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_9__["default"](new Date(row.biddingEndDate.split('-')[2], row.biddingEndDate.split('-')[1] - 1, row.biddingEndDate.split('-')[0])).format("Do MMM 'YY") : "-"}`
          }, {
            "key": "biddingEndTime",
            "label": "Bid Timing",
            cell: row => `${row.dailyStartTime && row.dailyEndTime ? new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_9__["default"](new Date(new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_9__["default"]().format("MMM DD YYYY") + " " + row.dailyStartTime + " GMT+0530")).format("hh:mmA") + " - " + new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_9__["default"](new Date(new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_9__["default"]().format("MMM DD YYYY") + " " + row.dailyEndTime + " GMT+0530")).format("hh:mmA") : "-"}`
          }, {
            "key": "maturityPeriod",
            "label": "Maturity Period",
            cell: row => `${row.maturityPeriod || "-"}`
          }, {
            "key": "couponRate",
            "label": "Coupon Rate",
            cell: row => `${row.couponRate || "-"}`
          },
          // {
          //   "key": "minBidQuantity", "label": "Min-Max (Units)", cell: (row: any) => `${(row.minBidQuantity && row.maxQuantity) ? ((row.minBidQuantity / 100).toLocaleString('en-IN') + "-" + (row.maxQuantity / 100).toLocaleString('en-IN')) : "-"}`
          // },
          // {
          //   "key": "lotSize", "label": "Min Lot Size (Units)", cell: (row: any) => `${row.lotSize ? (row.lotSize / 100).toLocaleString('en-IN') : "-"}`
          // },
          // {
          //   "key": "faceValue", "label": "Face Value", cell: (row: any) => `${row.faceValue ? row.faceValue.toLocaleString('en-IN') : "-"}`
          // },
          {
            "key": "minamount",
            "label": "Min Inv Amount",
            cell: row => `${row.minBidQuantity && row.cutoffPrice ? '₹ ' + (row.minBidQuantity / 100 * row.cutoffPrice).toLocaleString('en-IN') : "-"}`
          }, {
            "key": "orderStatus",
            "label": "Status",
            cell: row => `${row.orderStatus && row.orderStatus === 'ES' ? 'Applied Sucessfully' : row.orderStatus && row.orderStatus === 'EF' ? 'Failed' : row.orderStatus && row.orderStatus === 'CS' ? 'Cancelled Sucessfully' : row.orderStatus && row.orderStatus === 'CF' ? 'Cancel Failed' : ''}`,
            orderstatus: row => `${row.orderStatus || ''}`
          }]
        }
      },
      sdl: {
        header: 'State Development Loans',
        abbreviation: 'SDL',
        series: 'SG',
        summary: 'State Development Loans (SDL) are securities issued through RBI on behalf of State Governments to meet their borrowing requirements and form part of the government securities market.',
        benefits: [{
          imgurl: 'risk-free.svg',
          title: 'Risk Free',
          content: 'G Secs are safest of all investments as they are issued by central government of India'
        }, {
          imgurl: 'liquidity.svg',
          title: 'Guaranteed Returns',
          content: 'Assured Periodic Returns regular stream of income every six months in form of coupon'
        }, {
          imgurl: 'competitive-return.svg',
          title: 'Competitive Returns',
          content: 'Get better returns compared to fixed deposits (FDs) for long dated securities'
        }, {
          imgurl: 'maturity.svg',
          title: 'Available across the maturities',
          content: 'One can plan for their life goals till ten years maturity'
        }],
        apply: [{
          step: 'Step 1',
          imgurl: 'stepone.svg',
          content: 'Check out the latest open Government Securities details and click on Apply.'
        }, {
          step: 'Step 2',
          imgurl: 'steptwo.svg',
          content: 'Enter the required quantity & check out the funds required. Maintain the required funds in your trading account.'
        }, {
          step: 'Step 3',
          imgurl: 'stepthree.svg',
          content: 'You have successfully applied for the Government Securities.'
        }],
        faq: [],
        faqId: '22000178390',
        needHelp: true,
        ongoing: {
          tableStructure: [{
            "key": "name",
            "label": "Security Name",
            cell: row => `${row.name || "-"}`
          }, {
            "key": "biddingEndDate",
            "label": "Bid Close Date",
            cell: row => `${row.biddingEndDate ? new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_9__["default"](new Date(row.biddingEndDate.split('-')[2], row.biddingEndDate.split('-')[1] - 1, row.biddingEndDate.split('-')[0])).format("Do MMM 'YY") : "-"}`
          }, {
            "key": "biddingEndTime",
            "label": "Bid Timing",
            cell: row => `${row.dailyStartTime && row.dailyEndTime ? new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_9__["default"](new Date(new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_9__["default"]().format("MMM DD YYYY") + " " + row.dailyStartTime + " GMT+0530")).format("hh:mmA") + " - " + new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_9__["default"](new Date(new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_9__["default"]().format("MMM DD YYYY") + " " + row.dailyEndTime + " GMT+0530")).format("hh:mmA") : "-"}`
          }, {
            "key": "maturityPeriod",
            "label": "Maturity Period",
            cell: row => `${row.maturityPeriod || "-"}`
          }, {
            "key": "couponRate",
            "label": "Coupon Rate",
            cell: row => `${row.couponRate || "-"}`
          },
          // {
          //   "key": "minBidQuantity", "label": "Min-Max (Units)", cell: (row: any) => `${(row.minBidQuantity && row.maxQuantity) ? ((row.minBidQuantity / 100).toLocaleString('en-IN') + "-" + (row.maxQuantity / 100).toLocaleString('en-IN')) : "-"}`
          // },
          // {
          //   "key": "lotSize", "label": "Min Lot Size (Units)", cell: (row: any) => `${row.lotSize ? (row.lotSize / 100).toLocaleString('en-IN') : "-"}`
          // },
          // {
          //   "key": "faceValue", "label": "Face Value", cell: (row: any) => `${row.faceValue ? row.faceValue.toLocaleString('en-IN') : "-"}`
          // },
          {
            "key": "minamount",
            "label": "Min Inv Amount",
            cell: row => `${row.minBidQuantity && row.cutoffPrice ? '₹ ' + (row.minBidQuantity / 100 * row.cutoffPrice).toLocaleString('en-IN') : "-"}`
          }, {
            "key": "orderStatus",
            "label": "Status",
            cell: row => `${row.orderStatus && row.orderStatus === 'ES' ? 'Applied Sucessfully' : row.orderStatus && row.orderStatus === 'EF' ? 'Failed' : row.orderStatus && row.orderStatus === 'CS' ? 'Cancelled Sucessfully' : row.orderStatus && row.orderStatus === 'CF' ? 'Cancel Failed' : ''}`,
            orderstatus: row => `${row.orderStatus || ''}`
          }]
        }
      },
      sgb: {
        header: 'Sovereign Gold Bonds',
        abbreviation: 'SGB',
        summary: 'The Government of India issues Sovereign Gold Bonds every year. The bond bears a fixed interest per annum which is paid twice a year.',
        benefits: [{
          imgurl: 'fixed-income.svg',
          title: 'Fixed Income',
          content: 'Interest rate @ 2.5% on the initial investment amount.'
        }, {
          imgurl: 'risk-free.svg',
          title: 'Risk Free',
          content: 'Ownership of gold without any physical possession (No risks and no cost of storage).'
        }, {
          imgurl: 'tax-benefit.svg',
          title: 'Tax Benefit',
          content: 'Exemption from capital gains tax, if bonds are held till maturity.'
        }, {
          imgurl: 'liquidity.svg',
          title: 'Liquidity',
          content: 'SGB will be tradable on stock exchanges within a fortnight of the issuance on a date as notified by the RBI.'
        }],
        apply: [{
          step: 'Step 1',
          imgurl: 'stepone.svg',
          content: 'Check out the latest open SGB series details and click on Apply.'
        }, {
          step: 'Step 2',
          imgurl: 'steptwo.svg',
          content: 'Enter the required quantity in grams & check out the funds required. Maintain the required funds in your trading account. And click on save.'
        }, {
          step: 'Step 3',
          imgurl: 'stepthree.svg',
          content: 'You have successfully applied for the SGB. You can edit or delete the order within the time period SGB series is open.'
        }],
        faq: [{
          question: 'What is Sovereign Gold Bonds (SGB)? Who is the issuer?',
          ans: '<p>SGBs are Government Securities denominated in grams of gold. They are substitutes for holding physical gold. The Bond is issued by the Reserve Bank on behalf of the Government of India.</p>'
        }, {
          question: 'What is the minimum and maximum limit for investment?',
          ans: '<p>The Bonds are issued in denominations of one gram of gold and in multiples thereof. Minimum investment in the bond shall be one gram with a maximum buying limit maximum limit of subscription shall be of 4 kg for individuals, 4 kg for Hindu Undivided Family (HUF) and 20 kg for trusts and similar entities per fiscal year as notified by the government from time to time provided that</p><ol type="a"><li>Annual ceiling will include bonds subscribed under different tranches during initial issuance by Government and those purchased from the secondary market</li><li>The ceiling on investment will not include the holdings as collateral by banks and other Financial Institutions.</li></ol>'
        }, {
          question: 'Who is eligible to invest in the SGBs?',
          ans: '<p>The bonds will be restricted for sale to resident Indian entities including individuals, HUFs, Trusts, Universities and Charitable institutions.</p>'
        }, {
          question: 'Can I buy 4Kg in the name of each of my family members?',
          ans: '<p>Yes, each family member can hold the bond if they satisfy the eligibility criteria for investing in Sovereign Gold Bond.</p>'
        }, {
          question: 'What will be the tenor of the Sovereign Gold Bond?',
          ans: '<p>The tenor of the bond will be for a period of 8 years with exit option  after 5th ,6th and 7th year.</p>'
        }, {
          question: 'Can I encash the bond anytime I want? Is premature redemption allowed?',
          ans: '<p>Though the tenor of the bond is 8 years, early encashment/redemption of the bond is allowed after fifth year from the date of issue on coupon payment dates. The bond will be tradable on Exchanges, if held in demat form. It can also be transferred to any other eligible investor.</p>'
        }],
        faqId: '22000178069',
        needHelp: true,
        ongoing: {
          tableStructure: [{
            "key": "name",
            "label": "Tranche",
            cell: row => `${row.name || "-"}`
          }, {
            "key": "endDate",
            "label": "Offer closes on",
            cell: row => `${row.endDate ? new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_9__["default"](row.endDate).format("Do MMM 'YY, h:mm a") : ""}`
          }, {
            "key": "issuePrice",
            "label": "Price",
            cell: row => `${row.issuePrice ? "₹ " + row.issuePrice + " /gm" : "-"}`
          }, {
            "key": "annualInterest",
            "label": "Annual Interest",
            cell: row => `${row.annualInterest ? "₹ " + row.annualInterest + " /gm" : "-"}`,
            ratecell: row => `${row.interestRate ? row.interestRate + "%" : "2.50%"}`
          }, {
            "key": "allotmentDate",
            "label": "Issuance Date",
            cell: row => `${row.allotmentDate ? new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_9__["default"](row.allotmentDate).format("Do MMM 'YY") : "-"}`
          }, {
            "key": "status",
            "label": "Status",
            cell: row => `${row.status || ""}`,
            statusreasoncell: row => `${row.status === 'Rejected' ? row.reason || "-" : row.date ? new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_9__["default"](row.date).format("Do MMM 'YY") : "-"}`
          }]
        },
        upcoming: {
          tableStructure: [{
            "key": "name",
            "label": "Tranche",
            cell: row => `${row.name || ""}`
          }, {
            "key": "startDate_endDate",
            "label": "Application Dates",
            cell: row => `${(row.startDate ? new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_9__["default"](row.startDate).format("Do MMM 'YY") : "") + " - " + (row.endDate ? new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_9__["default"](row.endDate).format("Do MMM 'YY") : "")}`
          }, {
            "key": "issueDate",
            "label": "Issuance Date",
            cell: row => `${row.issueDate ? new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_9__["default"](row.issueDate).format("Do MMM 'YY") : ""}`
          }]
        },
        detail: [{
          "key": "name",
          "label": "Tranche",
          cell: row => `${row.name || "Not Available"}`
        }, {
          "key": "endDate",
          "label": "Open Date - Close Date",
          cell: row => `${(row.startDate ? new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_9__["default"](row.startDate).format("Do MMM 'YY, h:mm a") : "Not Available") + " - " + (row.endDate ? new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_9__["default"](row.endDate).format("Do MMM 'YY, h:mm a") : "Not Available")}`
        }, {
          "key": "issuePrice",
          "label": "Price",
          cell: row => `${row.issuePrice ? "₹ " + row.issuePrice + " /gm" : "Not Available"}`
        }, {
          "key": "annualInterest",
          "label": "Annual Interest",
          cell: row => `${row.annualInterest ? "₹ " + row.annualInterest + " /gm" : "Not Available"}`
        }, {
          "key": "qty",
          "label": "Order Quantity",
          cell: row => `${row.qty || "Not Available"}`
        }, {
          "key": "amount",
          "label": "Order Amount",
          cell: row => `${row.amount || "Not Available"}`
        }, {
          "key": "status",
          "label": "Status",
          cell: row => `${row.status || "Not Available"}`
        }, {
          "key": "date",
          "label": "Applied Date",
          cell: row => `${row.date ? new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_9__["default"](row.date).format("Do MMM 'YY") : "Not Available"}`
        }]
      }
    };
    this.showSecureProductAuthorizationPopup = false;
    this.applySchemeControl = {
      // schemeName: '',
      // qty: 1,
      // amount: 0,
      // price: 0,
      // balance: 0
    };
    this.ongoinInList = [];
    this.clientBalance = 0;
    this.showApplyPopup = false;
    this.showConfirmPopup = false;
    this.showDeleteWarningPopup = false;
    this.showSocialPopup = false;
    this.isListingServiceHit = false;
    this.isStatusServiceHit = false;
    this.showDetailPopup = false;
    this.faqData = [];
    this.loaders = {
      applyLoader: false
    };
    this.ongoingData = [];
    this.upcomingData = [];
    this.profileDetails = {};
    this.userAccountStatus = {};
  }
  ngOnInit() {
    this.userAccountStatus = this.utils.getUserAccountStatus();
    this.routeParamsSubscription = this.activatedRoute.params.subscribe(params => {
      this.selectedScheme = params['type'];
      this.seo.getMetaData(this.seo.metaObj[this.selectedScheme].title, this.seo.metaObj[this.selectedScheme].content);
      this.selectedSchemeConfig = this.config[this.selectedScheme];
      this.applySchemeControl = {};
      // this.profileDetails = {};
      this.ongoinInList = [];
      this.ongoingData = [];
      this.upcomingData = [];
      this.clientBalance = 0;
      this.showApplyPopup = false;
      this.showConfirmPopup = false;
      this.showDeleteWarningPopup = false;
      this.showSocialPopup = false;
      this.isListingServiceHit = false;
      this.isStatusServiceHit = false;
      this.showDetailPopup = false;
      this.routeQueryParamsSubscription = this.activatedRoute.queryParams.subscribe(qparams => {
        if (qparams['clientId'] && qparams['sessionId']) {
          this.appClientId = atob(qparams['clientId']);
          this.appSessionId = atob(qparams['sessionId']);
          this.appIsOnboard = qparams['obStatus'] || 'N'; //atob();
          if (this.userAccountStatus) {
            this.userAccountStatus = {
              onboardStatus: this.appIsOnboard
            };
          }
          this.utils.storeSessionId(this.appSessionId);
          this.utils.storeUserId(this.appClientId);
          this.isClientFromApp = true;
          this.shared.isClientFromApp = true;
          if (this.isClientFromApp) {
            this.shared.routeConfig.watchlist = false;
            // document.body.classList.add("single-content", "app-strategy-cont");
            if (document.getElementById('main-container')) {
              document.getElementById('main-container').classList.add('no-mt');
              document.getElementById('main-container').classList.add('no-pm');
            }
            if (document.getElementById("section-body-data")) {
              document.getElementById("section-body-data").classList.add('no-pt');
            }
            this.shared.routeConfig.header = false;
            this.shared.routeConfig.footer = false;
            this.shared.routeConfig.betaFooter = false;
          }
          this.shared.appClientId = this.appClientId;
          this.isLoggedIn = this.appIsOnboard == "C";
          if (!Object.keys(this.profileDetails).length && this.appIsOnboard == 'C') {
            this.getProfileDetails();
          }
        }
      });
      if (this.utils.isAuthorized() || this.isClientFromApp && this.appIsOnboard == "C") {
        this.isLoggedIn = true;
        this.getFunds();
      } else {
        this.isLoggedIn = false;
      }
      // if(this.isClientFromApp){
      //   this.isLoggedIn = true;
      // }
      this.faqData = [];
      this.getFAQs();
      this.fundsSubscription = this.utils.broadcastObservable('openPayinPayoutSuccess').subscribe(data => {
        this.getFunds();
      });
      this.fundsSubscription = this.utils.broadcastObservable('openPayinPayoutFail').subscribe(data => {
        // this.getFunds();
        this.utils.error('Error', 'Failed to add funds');
      });
      this.selectedScheme === 'sgb' ? this.getSchemeListing() : this.getNCBListing();
      this.analytics.emitEvent(this.selectedScheme === 'tbills' ? 'visitedTBills' : this.selectedScheme === 'gsec' ? 'visitedGSec' : this.selectedScheme === 'sdl' ? 'visitedSDL' : 'visitedSGB', this.isClientFromApp ? this.appClientId : this.utils.getUserId() || 'guest', this.selectedScheme === 'tbills' ? 'TBills' : this.selectedScheme === 'gsec' ? 'GSec' : this.selectedScheme === 'sdl' ? 'SDL' : 'SGB', 1);
      this.utils.setTrackMoeEvent('pageVisited', {
        "UserId": this.isClientFromApp ? this.appClientId : this.utils.getUserId() || 'guest',
        "pageName": this.selectedScheme === 'tbills' ? 'SpTBills' : this.selectedScheme === 'gsec' ? 'SpGSec' : this.selectedScheme === 'sdl' ? 'SpSdl' : 'SpSgb'
      });
    });
  }
  ontabSelect(type) {
    // this.selectedScheme = type;
    // this.route.navigate(['/market/scheme/' + type]);
    // secure-products/scheme/tbills
    // secure-products/scheme/gsec
    // secure-products/scheme/sdl
    // secure-products/scheme/sgb
    if (this.isClientFromApp) {
      this.route.navigate(['/market/scheme/' + type], {
        queryParams: {
          clientId: btoa(this.appClientId),
          sessionId: btoa(this.appSessionId),
          obStatus: this.appIsOnboard
        }
      });
    } else {
      this.route.navigate(['/market/scheme/' + type]);
    }
  }
  // redirectToTransaction() {
  //   this.route.navigate(['/market/secure-products-transaction']);
  // }
  applyScheme(schemeData, index, isReApply) {
    if (this.isLoggedIn) {
      this.applySchemeControl = JSON.parse(JSON.stringify(schemeData));
      if (this.selectedScheme === 'sgb') {
        this.applySchemeControl.amount = isReApply ? Number(schemeData.issuePrice) : this.applySchemeControl.amount ? this.applySchemeControl.amount : Number(schemeData.issuePrice);
        // this.applySchemeControl.source='Choice FinX';
        this.applySchemeControl.qty = isReApply ? 1 : this.applySchemeControl.qty ? this.applySchemeControl.qty : 1;
        this.applySchemeControl.applicationNo = isReApply ? 0 : this.applySchemeControl.applicationNo;
      } else {
        // new moment(schemeData.biddingEndDate).format("Do MMM 'YY")
        this.applySchemeControl.bidCloseDate = new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_9__["default"](new Date(schemeData.biddingEndDate.split('-')[2], schemeData.biddingEndDate.split('-')[1] - 1, schemeData.biddingEndDate.split('-')[0])).format("Do MMM 'YY");
        this.applySchemeControl.qty = schemeData.minBidQuantity / 100;
        this.applySchemeControl.lotSize = schemeData.lotSize / 100;
        this.applySchemeControl.minQty = schemeData.minBidQuantity / 100;
        this.applySchemeControl.maxQty = schemeData.maxQuantity / 100;
        this.applySchemeControl.amount = this.applySchemeControl.qty / 100 * (this.applySchemeControl.minQty * schemeData.cutoffPrice || 1);
        this.applySchemeControl.units = '(' + this.applySchemeControl.minQty.toLocaleString('en-IN') + ' - ' + this.applySchemeControl.maxQty.toLocaleString('en-IN') + ')';
        this.applySchemeControl.maxLength = this.applySchemeControl.maxQty.toString().length;
      }
      this.applySchemeControl.listindex = index;
      this.analytics.emitEvent(this.selectedScheme === 'tbills' ? 'TBillsApplyClicked' : this.selectedScheme === 'gsec' ? 'GSecApplyClicked' : this.selectedScheme === 'sdl' ? 'SDLApplyClicked' : 'SGBApplyClicked', this.isClientFromApp ? this.appClientId : this.utils.getUserId() || '', this.selectedScheme === 'tbills' ? 'TBills' : this.selectedScheme === 'gsec' ? 'GSec' : this.selectedScheme === 'sdl' ? 'SDL' : 'SGB', 1);
      this.utils.setTrackMoeEvent('clickedOn', {
        "UserId": this.isClientFromApp ? this.appClientId : this.utils.getUserId() || '',
        "buttonName": this.selectedScheme === 'tbills' ? 'SpTBillsApply' : this.selectedScheme === 'gsec' ? 'SpGSecApply' : this.selectedScheme === 'sdl' ? 'SpSdlApply' : 'SpSgbApply'
      });
      this.checkAuthorization();
    } else {
      // this.showPreLogin = true;
      // this.renderer.setStyle(document.body, 'overflow', 'hidden');
      if (this.appIsOnboard) {
        window.open("https://finx.choiceindia.com/start-onboarding", "_self");
        // this.showPreLogin = true;
        // this.utils.broadcast('generateSubs',{})
      } else {
        this.applySchemeControl = JSON.parse(JSON.stringify(schemeData));
        if (this.selectedScheme === 'sgb') {
          this.applySchemeControl.amount = isReApply ? Number(schemeData.issuePrice) : this.applySchemeControl.amount ? this.applySchemeControl.amount : Number(schemeData.issuePrice);
          // this.applySchemeControl.source='Choice FinX';
          this.applySchemeControl.qty = isReApply ? 1 : this.applySchemeControl.qty ? this.applySchemeControl.qty : 1;
          this.applySchemeControl.applicationNo = isReApply ? 0 : this.applySchemeControl.applicationNo;
        } else {
          // new moment(schemeData.biddingEndDate).format("Do MMM 'YY")
          this.applySchemeControl.bidCloseDate = new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_9__["default"](new Date(schemeData.biddingEndDate.split('-')[2], schemeData.biddingEndDate.split('-')[1] - 1, schemeData.biddingEndDate.split('-')[0])).format("Do MMM 'YY");
          this.applySchemeControl.qty = schemeData.minBidQuantity / 100;
          this.applySchemeControl.lotSize = schemeData.lotSize / 100;
          this.applySchemeControl.minQty = schemeData.minBidQuantity / 100;
          this.applySchemeControl.maxQty = schemeData.maxQuantity / 100;
          this.applySchemeControl.amount = this.applySchemeControl.qty / 100 * (this.applySchemeControl.minQty * schemeData.cutoffPrice || 1);
          this.applySchemeControl.units = '(' + this.applySchemeControl.minQty.toLocaleString('en-IN') + ' - ' + this.applySchemeControl.maxQty.toLocaleString('en-IN') + ')';
          this.applySchemeControl.maxLength = this.applySchemeControl.maxQty.toString().length;
        }
        this.applySchemeControl.listindex = index;
        this.analytics.emitEvent(this.selectedScheme === 'tbills' ? 'TBillsApplyClicked' : this.selectedScheme === 'gsec' ? 'GSecApplyClicked' : this.selectedScheme === 'sdl' ? 'SDLApplyClicked' : 'SGBApplyClicked', this.isClientFromApp ? this.appClientId : this.utils.getUserId() || '', this.selectedScheme === 'tbills' ? 'TBills' : this.selectedScheme === 'gsec' ? 'GSec' : this.selectedScheme === 'sdl' ? 'SDL' : 'SGB', 1);
        this.utils.setTrackMoeEvent('clickedOn', {
          "UserId": this.isClientFromApp ? this.appClientId : this.utils.getUserId() || '',
          "buttonName": this.selectedScheme === 'tbills' ? 'SpTBillsApply' : this.selectedScheme === 'gsec' ? 'SpGSecApply' : this.selectedScheme === 'sdl' ? 'SpSdlApply' : 'SpSgbApply'
        });
        this.checkAuthorization();
        // this.utils.broadcast('generateSubs',{})
      }
    }
  }
  /**
  * Redirect to login page , when user clicks on login button of prelogin popup
  */
  login() {
    this.utils.setFromURL();
    this.route.navigate(['/auth/login']);
  }
  openSchemeDetailPopup(schemeData) {
    this.showDetailPopup = true;
    this.schemeForDeleteUpdate = schemeData;
  }
  shareScheme() {
    this.showSocialPopup = true;
    this.renderer.setStyle(document.body, 'overflow', 'hidden');
  }
  showDeleteSchemePopup(schemeData, index) {
    this.showDeleteWarningPopup = true;
    this.schemeForDeleteUpdate = schemeData;
    this.schemeForDeleteUpdate.listindex = index;
  }
  confirmScheme() {
    if (!this.applySchemeControl.isQtyInvalid && !this.applySchemeControl.isQtyNotInRange && this.applySchemeControl.amount <= this.clientBalance) {
      this.loaders.applyLoader = true;
      if (this.selectedScheme === 'sgb') {
        let userProfile = this.isClientFromApp ? this.profileDetails : this.utils.getProfileData();
        let request = {
          clientId: this.isClientFromApp ? this.appClientId : this.utils.getUserId() || '',
          sessionId: this.isClientFromApp ? this.appSessionId : this.utils.getSessionId() || '',
          source: "Jiffy",
          applicationNo: this.applySchemeControl.applicationNo ? this.applySchemeControl.applicationNo : 0,
          pan: userProfile.PanCard || "",
          isin: (this.applySchemeControl.isin || '').toUpperCase(),
          sgbName: this.applySchemeControl.name,
          symbol: this.applySchemeControl.symbol,
          qty: this.applySchemeControl.qty,
          amount: this.applySchemeControl.amount,
          category: "Individual",
          isCancel: false
          // "nomineeName": "Vivek",
          // "relation": "father",
          // "DOB": "02-12-1989",
          // "category": "Indivisual"
        };
        this.schemeStatusSubscription = this.schemeService.addUpdateSchemeOrder(this.selectedScheme, request).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_16__.finalize)(() => {
          this.loaders.applyLoader = false;
        })).subscribe(res => {
          if (res.status === "Success" && res.response.sgbOrders) {
            this.showApplyPopup = false;
            this.showConfirmPopup = true;
            this.renderer.setStyle(document.body, 'overflow', 'hidden');
            this.ongoingData[this.applySchemeControl.listindex] = Object.assign(this.ongoingData[this.applySchemeControl.listindex], {
              "status": res.response.sgbOrders[0].status,
              "reason": res.response.sgbOrders[0].reason,
              "date": res.response.sgbOrders[0].date,
              "qty": res.response.sgbOrders[0].qty,
              "amount": res.response.sgbOrders[0].amount,
              "applicationNo": res.response.sgbOrders[0].applicationNo
            });
            this.getSchemeListing();
            // this.getSchemeINList();
            // this.getClientSchemeStatusOrder();
            // Object.assign(item, { "status": null, "reason": null, "date": null, "qty": 0, "amount": 0, "applicationNo" : 0 });
            this.analytics.emitEvent('SGBOrderPlaced', this.isClientFromApp ? this.appClientId : this.utils.getUserId() || '', 'SGB', 1);
            this.utils.setTrackMoeEvent('placedOrder', {
              "UserId": this.isClientFromApp ? this.appClientId : this.utils.getUserId() || '',
              "orderType": "SpSgbNew",
              "orderReqType": "New",
              "apiReq": request
            });
            //   } else if (this.utils.isSessionExpired(res.reason)) {
            //         if(this.shared.isSSO){
            //   this.utils.sessionExpireHandling()
            //   return
            // }
            //     this.utils.error('Session Expired', 'Please Login Again.');
            //     this.utils.postFeatureCount();
            //     this.utils.clearLoginDetails();
            //     this.shared.userId = null;
            //     this.route.navigate(['auth/login']);
          } else {
            this.showApplyPopup = false;
            this.renderer.setStyle(document.body, 'overflow', 'auto');
            this.utils.error('Error', 'Failed to place order');
          }
        }, err => {
          this.showApplyPopup = false;
          this.renderer.setStyle(document.body, 'overflow', 'auto');
          this.utils.error('Error', 'Something went wrong');
        });
      } else {
        let userProfile = this.isClientFromApp ? this.profileDetails : this.utils.getProfileData();
        let request = {
          "clientRefNumber": "",
          "applicationNumber": '0',
          "orderNumber": 0,
          "activityType": "N",
          "clientBenId": userProfile.BOCode,
          "depository": userProfile.Depository,
          "dpId": userProfile.DPCode,
          "investmentValue": this.applySchemeControl.amount,
          "pan": userProfile.PanCard || '',
          "physicalDematFlag": "D",
          "price": this.applySchemeControl.cutoffPrice,
          "symbol": this.applySchemeControl.symbol,
          "quantity": this.applySchemeControl.qty
        };
        this.schemeStatusSubscription = this.schemeService.addUpdateNCBOrder(request, this.isClientFromApp ? this.appSessionId : this.utils.getSessionId() || '', this.isClientFromApp ? this.appClientId : this.utils.getUserId() || '').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_16__.finalize)(() => {
          this.loaders.applyLoader = false;
        })).subscribe(res => {
          if (res.status === 200 && res.body && !res.body.reason) {
            this.showApplyPopup = false;
            this.showConfirmPopup = true;
            this.renderer.setStyle(document.body, 'overflow', 'hidden');
            // this.ongoingData[this.applySchemeControl.listindex] = Object.assign(this.ongoingData[this.applySchemeControl.listindex], { "status": res.response.sgbOrders[0].status, "reason": res.response.sgbOrders[0].reason, "date": res.response.sgbOrders[0].date, "qty": res.response.sgbOrders[0].qty, "amount": res.response.sgbOrders[0].amount, "applicationNo": res.response.sgbOrders[0].applicationNo });
            this.getNCBListing();
            this.analytics.emitEvent(this.selectedScheme === 'tbills' ? 'TBillsOrderPlaced' : this.selectedScheme === 'gsec' ? 'GSecOrderPlaced' : 'SDLOrderPlaced', this.isClientFromApp ? this.appClientId : this.utils.getUserId() || '', this.selectedScheme === 'tbills' ? 'TBills' : this.selectedScheme === 'gsec' ? 'GSec' : 'SDL', 1);
            this.utils.setTrackMoeEvent('placedOrder', {
              "UserId": this.isClientFromApp ? this.appClientId : this.utils.getUserId() || '',
              "orderType": this.selectedScheme === 'tbills' ? 'SpTBillsNew' : this.selectedScheme === 'gsec' ? 'SpGsecNew' : 'SpSdlNew',
              "orderReqType": "New",
              "apiReq": request
            });
            // } else if (this.utils.isSessionExpired(res.body.reason)) {
            //   if(this.shared.isSSO){
            //     this.utils.sessionExpireHandling()
            //     return
            //   }
            //   this.utils.error('Session Expired', 'Please Login Again.');
            //   this.utils.postFeatureCount();
            //   this.utils.clearLoginDetails();
            //   this.shared.userId = null;
            //   this.route.navigate(['auth/login']);
          } else {
            this.showApplyPopup = false;
            this.renderer.setStyle(document.body, 'overflow', 'auto');
            this.utils.error('Error', res.body && res.body.reason ? res.body.reason : 'Failed to place order');
          }
        }, err => {
          this.showApplyPopup = false;
          this.renderer.setStyle(document.body, 'overflow', 'auto');
          this.utils.error('Error', 'Something went wrong');
        });
      }
    } else {
      // if (!this.isClientFromApp)
      this.openFundDrawer();
    }
  }
  closePopup(type) {
    if (type === 'apply') {
      this.showApplyPopup = false;
    } else if (type === 'confirm') {
      this.showConfirmPopup = false;
    } else if (type === 'delete') {
      this.showDeleteWarningPopup = false;
    } else if (type === 'social') {
      this.showSocialPopup = false;
    } else if (type === 'detail') {
      this.showDetailPopup = false;
    }
    this.renderer.setStyle(document.body, 'overflow', 'auto');
  }
  /**
  * Get Funds Data for Commodity and Equity
  */
  getFunds() {
    let request = {
      "UserId": this.isClientFromApp ? this.appClientId : this.utils.getUserId(),
      "SessionId": this.isClientFromApp ? this.appSessionId : this.utils.getSessionId() || '',
      "GroupId": this.utils.get('groupId') || 'HO',
      "Amount": 0,
      "ProductType": 1,
      "BankAccNo": ""
    };
    let userAccountStatus = this.utils.getUserAccountStatus();
    if (!(!userAccountStatus || !userAccountStatus.onboardStatus || userAccountStatus.onboardStatus == 'C')) {
      return;
    }
    this.rest.getPayoutBalanceDetails(request, 'V3').subscribe(res => {
      if (res.Status == "Success" && res.Response) {
        this.clientBalance = res.Response.PayoutBalance || 0;
        // } else if (this.utils.isSessionExpired(res.Reason)) {
        //       if(this.shared.isSSO){
        //     this.utils.sessionExpireHandling()
        //     return
        //   }
        //   this.utils.error('Session Expired', 'Please Login Again.');
        //   this.utils.postFeatureCount();
        //   this.utils.clearLoginDetails();
        //   this.shared.userId = null;
        //   this.route.navigate(['auth/login']);
      } else {
        this.utils.error('Error', "Something Went Wrong");
        this.clientBalance = 0;
      }
    }, err => {
      this.utils.error('Error', 'Something went wrong');
      this.clientBalance = 0;
    });
  }
  shareOnSocialMedia(social) {
    let isMobileDevice = this.utils.isMobileDevice();
    let isOS = this.utils.getMobileOperatingSystem();
    switch (social) {
      case 'whatsapp':
        if (this.selectedScheme === 'sgb') {
          if (isMobileDevice && isOS.toLowerCase().indexOf('ios') > -1) {
            window.open('https://wa.me?text=Apply for the Sovereign Gold Bond (SGB) using the Choice FinX Website. Link - ' + location.href, "_self");
          } else {
            window.open('https://wa.me?text=Apply for the Sovereign Gold Bond (SGB) using the Choice FinX Website. Link - ' + location.href);
          }
        }
        break;
      case 'facebook':
        if (this.selectedScheme === 'sgb') {
          if (isMobileDevice && isOS.toLowerCase().indexOf('ios') > -1) {
            window.open('https://www.facebook.com/sharer.php?u=' + location.href + '&quote=Apply for the Sovereign Gold Bond (SGB) using the Choice FinX Website.', "_self");
          } else {
            window.open('https://www.facebook.com/sharer.php?u=' + location.href + '&quote=Apply for the Sovereign Gold Bond (SGB) using the Choice FinX Website.');
          }
          // const title = 'SGB';
          // const url = 'https://www.facebook.com/';
          // const text = 'https://www.facebook.com/sharer.php?u=' + location.href + '&quote=Apply for the Sovereign Gold Bond (SGB) using the Choice FinX Website.';
          // if (navigator.share) {
          //   navigator
          //     .share({ title: `${title}`, url: `${url}`, text: `${text}` })
          //     .then(() => {
          //     })
          //     .catch(console.error);
          // } else {
          //   window.open('https://www.facebook.com/sharer.php?u=' + location.href + '&quote=Apply for the Sovereign Gold Bond (SGB) using the Choice FinX Website.');
          // }
        }
        break;
      case 'twitter':
        if (this.selectedScheme === 'sgb') {
          if (isMobileDevice && isOS.toLowerCase().indexOf('ios') > -1) {
            window.open('https://twitter.com/share?text=Apply for the Sovereign Gold Bond (SGB) using the Choice FinX Website. Link - &url=' + location.href, "_self");
          } else {
            window.open('https://twitter.com/share?text=Apply for the Sovereign Gold Bond (SGB) using the Choice FinX Website. Link - &url=' + location.href);
          }
        }
        break;
    }
  }
  increaseQuantity() {
    if (this.selectedScheme === 'sgb') {
      if (this.applySchemeControl.isQtyInvalid || this.applySchemeControl.isQtyNotInRange) this.applySchemeControl.qty = 1;else this.applySchemeControl.qty = Number(this.applySchemeControl.qty) + 1;
      this.applySchemeControl.amount = Number(this.applySchemeControl.issuePrice) * Number(this.applySchemeControl.qty);
    } else {
      if (this.applySchemeControl.isQtyInvalid || this.applySchemeControl.isQtyNotInRange) this.applySchemeControl.qty = this.applySchemeControl.lotSize;else this.applySchemeControl.qty = Number(this.applySchemeControl.qty) + this.applySchemeControl.lotSize;
      this.applySchemeControl.amount = this.applySchemeControl.qty / 100 * (this.applySchemeControl.minQty * this.applySchemeControl.cutoffPrice || 1);
    }
    this.applySchemeControl.isQtyInvalid = false;
    this.applySchemeControl.isQtyNotInRange = false;
  }
  decreaseQuantity() {
    if (this.selectedScheme === 'sgb') {
      if (this.applySchemeControl.isQtyInvalid || this.applySchemeControl.isQtyNotInRange) this.applySchemeControl.qty = 1;else this.applySchemeControl.qty = Number(this.applySchemeControl.qty) - 1;
      this.applySchemeControl.amount = Number(this.applySchemeControl.issuePrice) * Number(this.applySchemeControl.qty);
    } else {
      if (this.applySchemeControl.isQtyInvalid || this.applySchemeControl.isQtyNotInRange) this.applySchemeControl.qty = this.applySchemeControl.lotSize;else this.applySchemeControl.qty = Number(this.applySchemeControl.qty) - this.applySchemeControl.lotSize;
      this.applySchemeControl.amount = this.applySchemeControl.qty / 100 * (this.applySchemeControl.minQty * this.applySchemeControl.cutoffPrice || 1);
    }
    this.applySchemeControl.isQtyInvalid = false;
    this.applySchemeControl.isQtyNotInRange = false;
  }
  quantityChange(event) {
    if (this.selectedScheme === 'sgb') {
      if (Number(event) >= 1 && Number(event) <= 4000) {
        this.applySchemeControl.isQtyInvalid = false;
        this.applySchemeControl.amount = Number(this.applySchemeControl.issuePrice) * Number(this.applySchemeControl.qty);
      } else {
        this.applySchemeControl.isQtyInvalid = true;
        this.applySchemeControl.amount = 0;
      }
    } else {
      if (Number(event) >= this.applySchemeControl.minQty && Number(event) <= this.applySchemeControl.maxQty && event % 100 === 0) {
        this.applySchemeControl.isQtyInvalid = false;
        this.applySchemeControl.isQtyNotInRange = false;
        this.applySchemeControl.amount = this.applySchemeControl.qty / 100 * (this.applySchemeControl.minQty * this.applySchemeControl.cutoffPrice || 1);
      } else {
        if (Number(event) > this.applySchemeControl.maxQty || Number(event) < this.applySchemeControl.minQty) {
          this.applySchemeControl.isQtyNotInRange = true;
          this.applySchemeControl.isQtyInvalid = false;
          this.applySchemeControl.amount = 0;
        } else {
          this.applySchemeControl.isQtyInvalid = true;
          this.applySchemeControl.isQtyNotInRange = false;
          this.applySchemeControl.amount = 0;
        }
      }
    }
  }
  getSchemeListing() {
    this.isListingServiceHit = true;
    let request = {
      clientId: this.isClientFromApp ? this.appClientId : this.utils.getUserId() || '',
      sessionId: this.isClientFromApp ? this.appSessionId : this.utils.getSessionId() || ''
    };
    this.schemeListingSubscription = this.schemeService.getSchemeListing(this.selectedScheme, request).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_16__.finalize)(() => {
      this.isListingServiceHit = false;
    })).subscribe(res => {
      if (res.status === 'Success') {
        this.ongoingData = res.response.openSGB;
        this.upcomingData = res.response.upcomingSGB;
        if (this.isLoggedIn) {
          this.getSchemeINList();
          this.getClientSchemeStatusOrder();
        }
      } else {
        this.ongoingData = [];
        this.upcomingData = [];
      }
    }, err => {
      this.ongoingData = [];
      this.upcomingData = [];
      // this.getSchemeINList();
      // this.getClientSchemeStatusOrder();
    });
  }
  getSchemeINList() {
    this.ongoinInList = this.ongoingData.map(item => (item.isin || '').toUpperCase());
  }
  getClientSchemeStatusOrder() {
    this.isStatusServiceHit = true;
    if (this.ongoinInList.length) {
      let request = {
        clientId: this.isClientFromApp ? this.appClientId : this.utils.getUserId() || '',
        sessionId: this.isClientFromApp ? this.appSessionId : this.utils.getSessionId() || '',
        isin: this.ongoinInList.join()
      };
      this.schemeStatusSubscription = this.schemeService.getSchemeOrderStatus(this.selectedScheme, request).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_16__.finalize)(() => {
        this.isStatusServiceHit = false;
      })).subscribe(res => {
        if (res.status === 'Success') {
          this.orderStatusData = res.response;
          this.ongoingData.forEach(item => {
            let isStatusPresent = this.orderStatusData.find(element => element.isin === item.isin);
            if (isStatusPresent) {
              Object.assign(item, isStatusPresent);
            } else {
              Object.assign(item, {
                "status": null,
                "reason": null,
                "date": null,
                "qty": 0,
                "amount": 0,
                "applicationNo": 0
              });
            }
          });
          // } else if (this.utils.isSessionExpired(res.reason)) {
          //       if(this.shared.isSSO){
          //   this.utils.sessionExpireHandling()
          //   return
          // }
          //   this.utils.error('Session Expired', 'Please Login Again.');
          //   this.utils.postFeatureCount();
          //   this.utils.clearLoginDetails();
          //   this.shared.userId = null;
          //   this.route.navigate(['auth/login']);
        } else {
          this.utils.error('Error', 'Something went wrong');
        }
      }, err => {
        this.ongoingData.forEach(item => {
          Object.assign(item, {
            "status": null,
            "reason": null,
            "date": null,
            "qty": 0,
            "amount": 0,
            "applicationNo": 0
          });
        });
      });
    }
  }
  deleteSchemeOrder() {
    let payload = {
      applicationNo: this.schemeForDeleteUpdate.applicationNo,
      isCancel: true,
      qty: 0,
      amount: 0,
      source: "Jiffy",
      clientId: this.isClientFromApp ? this.appClientId : this.utils.getUserId() || '',
      sessionId: this.isClientFromApp ? this.appSessionId : this.utils.getSessionId() || '',
      ISIN: this.schemeForDeleteUpdate.isin || ''
    };
    this.schemeStatusSubscription = this.schemeService.addUpdateSchemeOrder(this.selectedScheme, payload).subscribe(res => {
      // if (res.sgbOrders) {
      //   this.showDeleteWarningPopup = false;
      //   this.getSchemeINList();
      //   this.getClientSchemeStatusOrder();
      // } else {
      //   this.showDeleteWarningPopup = false;
      // }
      if (res.status === "Success" && res.response.sgbOrders) {
        this.showDeleteWarningPopup = false;
        // this.schemeForDeleteUpdate.listindex
        this.ongoingData[this.schemeForDeleteUpdate.listindex] = Object.assign(this.ongoingData[this.schemeForDeleteUpdate.listindex], {
          "status": res.response.sgbOrders[0].status,
          "reason": res.response.sgbOrders[0].reason,
          "date": res.response.sgbOrders[0].date,
          "qty": res.response.sgbOrders[0].qty,
          "amount": res.response.sgbOrders[0].amount,
          "applicationNo": res.response.sgbOrders[0].applicationNo
        });
        this.getSchemeListing();
        // this.getSchemeINList();
        // this.getClientSchemeStatusOrder();
        // Object.assign(item, { "status": null, "reason": null, "date": null, "qty": 0, "amount": 0, "applicationNo" : 0 });
        // } else if (this.utils.isSessionExpired(res.reason)) {
        //       if(this.shared.isSSO){
        //     this.utils.sessionExpireHandling()
        //     return
        //   }
        //   this.utils.error('Session Expired', 'Please Login Again.');
        //   this.utils.postFeatureCount();
        //   this.utils.clearLoginDetails();
        //   this.shared.userId = null;
        //   this.route.navigate(['auth/login']);
      } else {
        this.showDeleteWarningPopup = false;
        this.utils.error('Error', 'Failed to cancel order');
      }
    }, err => {
      this.showDeleteWarningPopup = false;
      this.utils.error('Error', 'Something went wrong');
    });
  }
  refreshScheme() {
    this.selectedScheme === 'sgb' ? this.getSchemeListing() : this.getNCBListing();
  }
  copySchemeLink() {
    navigator['clipboard'].writeText(window.location.href).then(() => {
      this.utils.success('Success', 'Link copied to clipboard');
      this.showSocialPopup = false;
      this.renderer.setStyle(document.body, 'overflow', 'auto');
    }, err => {
      this.utils.error('Error', 'Failed to copy link');
    });
  }
  redirectToTransaction() {
    // if (this.selectedScheme === 'sgb') {
    // this.transaction.master = this.ongoingData;
    this.shared.storeSecureProductsList(this.ongoingData);
    if (this.isClientFromApp) {
      this.route.navigate(['/market/scheme/' + this.selectedScheme + '/scheme-transaction'], {
        queryParams: {
          clientId: btoa(this.appClientId),
          sessionId: btoa(this.appSessionId),
          obStatus: this.appIsOnboard
        }
      });
    } else this.route.navigate(['/market/scheme/' + this.selectedScheme + '/scheme-transaction']);
    // }
  }
  redirectToSupport() {
    this.route.navigate(['/links/support'], {
      queryParams: {
        supportType: this.selectedSchemeConfig.abbreviation
      }
    });
  }
  /** Lifecycle Hook for Unsubscribing Observable listeners when Component unloads */
  ngOnDestroy() {
    if (this.routeParamsSubscription) {
      this.routeParamsSubscription.unsubscribe();
    }
    if (this.routeQueryParamsSubscription) {
      this.routeQueryParamsSubscription.unsubscribe();
    }
    if (this.schemeListingSubscription) {
      this.schemeListingSubscription.unsubscribe();
    }
    if (this.schemeStatusSubscription) {
      this.schemeStatusSubscription.unsubscribe();
    }
    if (this.fundsSubscription) {
      this.fundsSubscription.unsubscribe();
    }
  }
  getNCBListing() {
    this.isListingServiceHit = true;
    this.schemeListingSubscription = this.schemeService.getSchemeListing(this.selectedScheme, this.selectedSchemeConfig.series).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_16__.finalize)(() => {
      this.isListingServiceHit = false;
    })).subscribe(res => {
      if (res && res.status === 200 && res.body) {
        this.ongoingData = res.body.data.data;
        if (this.isLoggedIn) {
          this.getNCBStatusOrder();
        }
      } else {
        this.ongoingData = [];
      }
    }, err => {
      this.ongoingData = [];
    });
  }
  getNCBStatusOrder() {
    this.isStatusServiceHit = true;
    if (this.ongoingData.length) {
      let request = {
        "SessionId": this.isClientFromApp ? this.appSessionId : this.utils.getSessionId() || '',
        "userid": this.isClientFromApp ? this.appClientId : this.utils.getUserId() || '',
        "orderId": 0,
        "clientRefNumber": "",
        "pageNo": 1,
        "pageSize": 10000
      };
      this.schemeStatusSubscription = this.schemeService.getNCBOrderStatus(request).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_16__.finalize)(() => {
        this.isStatusServiceHit = false;
      })).subscribe(res => {
        if (res && res.body && res.body.data) {
          this.orderStatusData = res.body.data;
          this.ongoingData.forEach(item => {
            let isStatusPresent = this.orderStatusData.find(element => element.symbol === item.symbol);
            if (isStatusPresent) {
              Object.assign(item, isStatusPresent);
            } else {
              Object.assign(item, {
                "status": null,
                "orderStatus": null,
                "reason": null,
                "date": null,
                "qty": 0,
                "amount": 0,
                "applicationNo": 0
              });
            }
          });
          // } else if (this.utils.isSessionExpired(res.body.reason)) {
          //       if(this.shared.isSSO){
          //   this.utils.sessionExpireHandling()
          //   return
          // }
          //   this.utils.error('Session Expired', 'Please Login Again.');
          //   this.utils.postFeatureCount();
          //   this.utils.clearLoginDetails();
          //   this.shared.userId = null;
          //   this.route.navigate(['auth/login']);
        } else {
          this.utils.error('Error', 'Something went wrong');
        }
      }, err => {
        this.ongoingData.forEach(item => {
          Object.assign(item, {
            "status": null,
            "orderStatus": null,
            "reason": null,
            "date": null,
            "qty": 0,
            "amount": 0,
            "applicationNo": 0
          });
        });
      });
    }
  }
  /**
  * close preLogin popup for guest user on click of close button on prelogin popup
  */
  closePreLogin() {
    this.showPreLogin = false;
    this.renderer.setStyle(document.body, 'overflow', 'auto');
  }
  getFAQs() {
    let request = {
      type: 'article',
      category_linkage: this.selectedSchemeConfig.faqId,
      term: ""
    };
    let faqClientId = this.isClientFromApp ? this.appClientId : this.utils.getUserId() || '';
    this.schemeService.getFAQs(request, faqClientId).subscribe(res => {
      if (res && res.Body && res.Body.length) {
        this.faqData = res.Body;
      } else {
        this.faqData = [];
      }
    }, error => {
      this.faqData = [];
    });
  }
  openFundDrawer() {
    if (this.isClientFromApp ? this.profileDetails['NRIStatus'] : this.utils.getProfileData('NRIStatus')) {
      this.showNoBankActive(true);
      return;
    }
    let action = 1;
    let bankData = ((this.isClientFromApp ? this.profileDetails || {} : this.utils.getProfileData() || {}).BankDetails || []).filter(bank => {
      return bank.IsDefault == "Yes";
    });
    if (bankData.length) {
      // this.fundDrawer.open();
      this.getFundsDetails();
      let eventName = action == 1 ? 'Pay In Button Clicked' : 'Payout Button Clicked';
      // this.analytics.fundpageActivity(eventName);
    } else {
      // this.analytics.emitEvent(action === 1 ? 'visitedDeposit' : 'visitedWithdraw', this.utils.getUserId() || 'guest', JSON.stringify({ "IP": this.shared.IPAddress }), 1);
      this.showNoBankActive();
    }
    // this.utils.setTrackMoeEvent(action === 1 ? 'visitedDeposit' : 'visitedWithdraw', { "User_ID": this.utils.getUserId() || 'guest', "IP": this.shared.IPAddress });
    // this.analytics.emitEvent(action === 1 ? 'visitedDeposit' : 'visitedWithdraw', this.utils.getUserId() || 'guest', JSON.stringify({ "IP": this.shared.IPAddress }), 1);
  }
  /** show popup
  * @param isNRIUser flag to indicate show dialog box of NRI
  */
  showNoBankActive(isNRIUser) {
    this.renderer.setStyle(document.body, 'overflow', 'hidden');
    if (isNRIUser) {
      this.isNRI = true;
      return;
    }
    this.noBankActive = true;
  }
  /** close popup
   * @param isNRIUser flag to indicate close dialog box of NRI
  */
  closeNoBankActive(isNRIUser) {
    this.renderer.setStyle(document.body, 'overflow', 'auto');
    if (isNRIUser) {
      this.isNRI = false;
      return;
    }
    this.noBankActive = false;
  }
  getFundsDetails() {
    // this.loaders.applyLoader = true;
    let request = {
      type: 2,
      "UserId": this.isClientFromApp ? this.appClientId : this.utils.getUserId() || '',
      "SessionId": this.isClientFromApp ? this.appSessionId : this.utils.getSessionId() || '',
      "GroupId": this.utils.get('groupId') || 'HO',
      accessToken: this.utils.getTwoFAAccessToken()
    };
    this.rest.getFundsEquityData(request).subscribe(data => {
      if (data.Status === "Success" && data.Response) {
        let fundsData = {
          lFundsViewDataEquity: {}
        };
        fundsData.lFundsViewDataEquity = data.Response.lFundsViewDataNew;
        fundsData = JSON.parse(JSON.stringify(fundsData));
        if (this.isClientFromApp) {
          this.utils.broadcast('openPayinPayoutDrawer', {
            source: 'scheme-secure-products',
            action: 1,
            detail: fundsData,
            profile: this.profileDetails,
            isClientFromApp: this.isClientFromApp,
            appClientId: this.appClientId,
            appSessionId: this.appSessionId
          });
        } else {
          this.utils.broadcast('openPayinPayoutDrawer', {
            source: 'scheme-secure-products',
            action: 1,
            detail: fundsData,
            profile: this.profileDetails,
            isClientFromApp: this.isClientFromApp
          });
        }
        // } else if (this.utils.isSessionExpired(data.Reason)) {
        //       if(this.shared.isSSO){
        //     this.utils.sessionExpireHandling()
        //     return
        //   }
        //   this.utils.error('Session Expired', 'Please Login Again.');
        //   this.utils.postFeatureCount();
        //   this.utils.clearLoginDetails();
        //   this.shared.userId = null;
        //   this.route.navigate(['auth/login']);
      }
    }, err => {
      this.utils.error('Error', 'Something went wrong');
    }).add(() => {
      // this.loaders.applyLoader = false;
    });
  }
  /**
  * Fetch User Profile in case of Successfull login
  */
  getProfileDetails() {
    this.isListingServiceHit = true;
    let request = {
      "userId": this.isClientFromApp ? this.appClientId : this.utils.getUserId(),
      "sessionId": this.isClientFromApp ? this.appSessionId : this.utils.getSessionId(),
      "GroupId": 'HO'
    };
    this.rest.getProfile(request).subscribe(data => {
      if (data.Status === "Success" && data.Response) {
        this.profileDetails = data.Response;
        if (this.isClientFromApp) {
          this.utils.setUserAttributes(data.Response, false, true);
          this.getFeatureCount(this.profileDetails.MobileNo);
        }
      } else {
        this.profileDetails = {};
      }
    }, err => {
      this.profileDetails = {};
    }).add(() => {
      this.isListingServiceHit = false;
    });
  }
  updateAuthorization() {
    let feature = this.utils.getWalkThrgh(this.isClientFromApp ? true : false, this.isClientFromApp ? this.appClientId : this.utils.getUserId());
    this.utils.updateWalkthrough(Object.assign(feature, {
      ['isSecureProductPageVisited']: '1'
    }), this.isClientFromApp ? true : false, this.isClientFromApp ? this.appClientId : this.utils.getUserId());
    this.utils.postFeatureCount(this.isClientFromApp ? true : false, this.isClientFromApp ? this.appClientId : this.utils.getUserId(), this.isClientFromApp ? true : this.profileDetails.MobileNo);
    this.analytics.emitEvent('Government securities terms and condition', this.isClientFromApp ? this.appClientId : this.utils.getUserId() || '', this.selectedScheme === 'tbills' ? 'TBills' : this.selectedScheme === 'gsec' ? 'GSec' : this.selectedScheme === 'sdl' ? 'SDL' : 'SGB', 1);
    this.utils.setTrackMoeEvent('clickedOn', {
      "UserId": this.isClientFromApp ? this.appClientId : this.utils.getUserId() || '',
      "buttonName": 'Government securities terms and condition'
    });
    this.showSecureProductAuthorizationPopup = false;
    this.getFunds();
    this.showApplyPopup = true;
    this.renderer.setStyle(document.body, 'overflow', 'hidden');
  }
  checkAuthorization() {
    let feature = this.utils.getWalkThrgh(this.isClientFromApp ? true : false, this.isClientFromApp ? this.appClientId : this.utils.getUserId());
    // if (this.isLoggedIn) {
    if (!feature['isSecureProductPageVisited']) {
      this.showSecureProductAuthorizationPopup = true;
      this.renderer.setStyle(document.body, 'overflow', 'hidden');
    } else {
      this.showSecureProductAuthorizationPopup = false;
      this.getFunds();
      this.showApplyPopup = true;
      this.renderer.setStyle(document.body, 'overflow', 'hidden');
    }
    // } else {
    //   // this.showPreLogin = true;
    //   // this.renderer.setStyle(document.body, 'overflow', 'hidden');
    //   this.utils.broadcast('generateSubs',{})
    // }
  }
  getFeatureCount(mobile_no) {
    let request = {
      'user_id': this.isClientFromApp ? this.appClientId : this.utils.getUserId(),
      'platform': 'web',
      'mobile_no': mobile_no || '9876543210'
    };
    this.loginservice.getFeatureCount(request).subscribe(data => {
      if (data.status_code == 200 && data.response) {
        this.utils.updateFeatureCount(data.response.data, this.isClientFromApp ? true : false, this.isClientFromApp ? this.appClientId : this.utils.getUserId());
      }
    });
  }
  openLink() {
    if (this.isClientFromApp) {
      // this.route.navigate(["/start-onboarding"]);
      window.open("https://finx.choiceindia.com/start-onboarding", "_self");
    } else {
      if (localStorage.getItem("onb_url")) {
        let url = atob(localStorage.getItem("onb_url"));
        window.open(url, "_self");
      }
    }
  }
  navigateToSupport() {
    if (this.isClientFromApp) {
      // this.route.navigate(["/start-onboarding"]);
      window.open("https://finx.choiceindia.com/start-onboarding", "_self");
    } else {
      this.route.navigate(["/links/support"]);
    }
  }
  navigateToModificationFlow() {
    if (this.isClientFromApp) {
      this.route.navigate(["/start-onboarding"]);
    } else {
      let userId = "";
      let url = this.rest.getOnboardingModificationURL(btoa(this.utils.getUserId()), encodeURIComponent(this.cryptographyService.encryptText(this.utils.getUserId())), "undefined");
      url = url.replace("&sid=undefined", "");
      url = url + "&type=dormant";
      window.open(url, "_blank");
    }
  }
  static {
    this.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_17__.ActivatedRoute
    }, {
      type: _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_15__.UtilsService
    }, {
      type: src_app_services_cryptography_service__WEBPACK_IMPORTED_MODULE_4__.CryptographyService
    }, {
      type: _services_rest_post_login_service__WEBPACK_IMPORTED_MODULE_12__.PostLoginService
    }, {
      type: _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_14__.SharedDataService
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_17__.Router
    }, {
      type: src_app_services_rest_scheme_service__WEBPACK_IMPORTED_MODULE_6__.SchemeService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_18__.Renderer2
    }, {
      type: _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_13__.SeoService
    }, {
      type: src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_3__.AnalyticsService
    }, {
      type: src_app_services_rest_login_service__WEBPACK_IMPORTED_MODULE_5__.LoginService
    }];
  }
  static {
    this.propDecorators = {
      fundDrawer: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_18__.ViewChild,
        args: [src_app_post_login_module_funds_pay_in_out_pay_in_out_component__WEBPACK_IMPORTED_MODULE_2__.PayInOutComponent, {
          static: false
        }]
      }]
    };
  }
};
SecureProductsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_18__.Component)({
  selector: 'app-secure-products',
  template: _secure_products_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormsModule, _directives_input_restrict2_directive__WEBPACK_IMPORTED_MODULE_10__.InputRestrict2Directive, _directives_show_focus_directive__WEBPACK_IMPORTED_MODULE_11__.ShowFocusDirective, _angular_common__WEBPACK_IMPORTED_MODULE_20__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_20__.DatePipe, src_app_directives_dropdown_dropdown_open_directive__WEBPACK_IMPORTED_MODULE_7__.DropdownOpen, src_app_directives_dropdown_dropdown_directive__WEBPACK_IMPORTED_MODULE_8__.Dropdown],
  styles: [(_secure_products_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_17__.ActivatedRoute, _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_15__.UtilsService, src_app_services_cryptography_service__WEBPACK_IMPORTED_MODULE_4__.CryptographyService, _services_rest_post_login_service__WEBPACK_IMPORTED_MODULE_12__.PostLoginService, _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_14__.SharedDataService, _angular_router__WEBPACK_IMPORTED_MODULE_17__.Router, src_app_services_rest_scheme_service__WEBPACK_IMPORTED_MODULE_6__.SchemeService, _angular_core__WEBPACK_IMPORTED_MODULE_18__.Renderer2, _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_13__.SeoService, src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_3__.AnalyticsService, src_app_services_rest_login_service__WEBPACK_IMPORTED_MODULE_5__.LoginService])], SecureProductsComponent);


/***/ }),

/***/ 69674:
/*!**************************************************************************************************!*\
  !*** ./src/app/market/secure-products/secure-products/secure-products.component.scss?ngResource ***!
  \**************************************************************************************************/
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
.maincontainer {
  padding: 0 !important;
}

.producttabsection {
  background-color: #ffffff;
}
.producttabsection .cards {
  position: relative;
}
.producttabsection .cards .card-block {
  padding: 0;
}
.producttabsection .cards .card-block h1 {
  color: #333333;
  font-size: 24px;
  line-height: 29px;
  font-family: "SFProText";
  font-weight: 600;
  padding-bottom: 20px;
  letter-spacing: 0.29px;
}
@media (max-width: 767px) {
  .producttabsection .cards .card-block h1 {
    font-size: 18px;
    line-height: 24px;
  }
}
.producttabsection .cards .card-block .tabwrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
@media (max-width: 767px) {
  .producttabsection .cards .card-block .tabwrap {
    flex-direction: column;
    flex-direction: column-reverse;
  }
}
.producttabsection .cards .card-block .tabwrap .nav-tabs {
  margin-bottom: 0;
  border: none;
}
.producttabsection .cards .card-block .tabwrap .nav-tabs li a {
  padding: 8px 0 !important;
  margin-right: 72px;
  color: #797979;
  font-size: 16px;
  line-height: 19px;
  font-family: "SF Pro Display";
  text-transform: capitalize;
}
@media (max-width: 767px) {
  .producttabsection .cards .card-block .tabwrap .nav-tabs li a {
    margin-right: 30px;
    font-size: 14px;
  }
}
.producttabsection .cards .card-block .tabwrap .nav-tabs li a:hover {
  color: #004393 !important;
  border-bottom: 2px solid #004393;
}
.producttabsection .cards .card-block .tabwrap .nav-tabs li a.active {
  color: #004393 !important;
  border-bottom: 2px solid #004393;
}
.producttabsection .cards .card-block .tabwrap .transaction-btn {
  border: 1px solid #004393;
  padding: 7px 24px;
  border-radius: 20px;
  color: #004393;
  background: transparent;
  text-align: center;
  font-size: 14px;
  bottom: 12px;
  display: block;
}
@media (max-width: 767px) {
  .producttabsection .cards .card-block .tabwrap .transaction-btn {
    margin-top: 0;
    padding: 5px 14px;
  }
  .producttabsection .cards .card-block .tabwrap .transaction-btn.refresh-btn {
    position: absolute;
    top: 0;
    right: 0;
    height: 32px;
    padding: 0;
    margin: 0;
    width: 46px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .producttabsection .cards .card-block .tabwrap .transaction-btn.refresh-btn img {
    width: 15px;
  }
}

.tab-content > .tab-pane {
  display: inherit !important;
}

.wrapper {
  padding: 20px;
}
@media (max-width: 767px) {
  .wrapper {
    padding: 20px 0px;
  }
}
.wrapper .headtxt {
  color: #797979;
  font-size: 16px;
  line-height: 24px;
  font-family: "SF Pro Display";
}
.wrapper .secure-product-table {
  margin-top: 32px;
  border-radius: 4px;
}
.wrapper .secure-product-table table {
  width: 100%;
}
@media (max-width: 992px) {
  .wrapper .secure-product-table table {
    overflow-y: scroll;
    width: 100%;
    display: block;
    border-radius: 5px;
  }
}
.wrapper .secure-product-table table thead {
  background-color: #F9F9FB;
  border-radius: 4px;
}
.wrapper .secure-product-table table thead th {
  padding: 16px 24px;
  color: #797979;
  font-size: 16px;
  line-height: 19px;
  font-family: "SF Pro Display";
  font-weight: 400;
}
.wrapper .secure-product-table table thead th.w25 {
  width: 23% !important;
}
@media (max-width: 767px) {
  .wrapper .secure-product-table table thead {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
}
.wrapper .secure-product-table table tbody {
  background-color: #ffffff;
  border-radius: 4px;
}
.wrapper .secure-product-table table tbody tr {
  border-bottom: 1px solid #F4F3F8;
}
.wrapper .secure-product-table table tbody tr:last-child {
  border: 0;
}
@media (max-width: 767px) {
  .wrapper .secure-product-table table tbody tr {
    display: block;
    border-bottom: 20px solid #F4F3F8;
  }
}
.wrapper .secure-product-table table tbody td {
  padding: 16px 24px;
  color: #333333;
  font-size: 16px;
  line-height: 21px;
  font-family: "SF Pro Display";
}
.wrapper .secure-product-table table tbody td:first-child {
  font-weight: 600;
}
@media (max-width: 767px) {
  .wrapper .secure-product-table table tbody td {
    border: 0;
    display: block;
    font-size: 14px;
    text-align: left;
    background: #ffffff;
    width: 100%;
  }
  .wrapper .secure-product-table table tbody td::before {
    content: attr(data-label);
    float: none;
    display: block;
    font-weight: 400;
    margin-bottom: 5px;
  }
}
.wrapper .secure-product-table table tbody td .dis-block {
  display: block;
}
.wrapper .secure-product-table table tbody td.lst-tad {
  position: absolute;
  right: 22px;
  top: 45%;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: transparent;
  transform: translate(0, -50%);
}
@media (min-width: 767px) and (max-width: 768px) {
  .wrapper .secure-product-table table tbody td.lst-tad {
    padding: 10px 0;
    right: 20px;
    transform: inherit;
    top: 20px;
  }
}
@media screen and (max-width: 992px) {
  .wrapper .secure-product-table table tbody td.lst-tad {
    transform: inherit;
    top: 20px;
    padding-bottom: 0;
  }
}
@media screen and (max-width: 768px) {
  .wrapper .secure-product-table table tbody td.lst-tad {
    top: 0px;
    right: 0;
  }
}
.wrapper .secure-product-table table tbody .line {
  padding: 0 24px;
}
.wrapper .secure-product-table table tbody .line td {
  padding: 0 24px;
}
.wrapper .secure-product-table table tbody .line hr {
  margin: 0;
}
.wrapper .secure-product-table table tbody .securityname {
  color: #333333;
  font-size: 16px;
  line-height: 21px;
  font-weight: 600;
  font-family: "SFProText";
}
.wrapper .secure-product-table table tbody .bluetxt {
  color: #2D77F4;
  font-size: 16px;
  line-height: 21px;
  font-weight: 600;
  font-family: "SFProText";
}
.wrapper .secure-product-table table tbody .btn-aply {
  font-family: "SF Pro Display" !important;
  font-weight: 400;
  width: auto;
}
@media screen and (max-width: 768px) {
  .wrapper .secure-product-table table tbody .btn-aply {
    width: auto;
  }
}
.wrapper .secure-product-table table tbody .redtxt {
  display: block;
  color: #EE404A;
  margin-top: 0.3rem;
  font-size: 14px;
  text-align: center;
}
.wrapper .secure-product-table table tbody .blue {
  display: block;
  color: #2D77F4;
  margin-top: 0.3rem;
  font-size: 14px;
  text-align: center;
}
.wrapper .secure-product-table table tbody .green {
  display: block;
  color: #00B16B;
  margin-top: 0.3rem;
  font-size: 14px;
  text-align: center;
}
@media (max-width: 767px) {
  .wrapper .secure-product-table table tbody {
    display: block;
  }
}

.benefits {
  padding: 100px 0;
}
.benefits .title {
  color: #333333;
  font-size: 28px;
  line-height: 34px;
  text-align: center;
  padding-bottom: 48px;
  font-family: "SFProText";
  font-weight: 600;
}
@media (max-width: 767px) {
  .benefits .title {
    font-size: 22px;
    line-height: 30px;
  }
}
.benefits .wrapbox {
  background-color: #ffffff;
  border-radius: 8px;
  padding: 24px;
  height: 100%;
}
.benefits .wrapbox .img {
  width: 75px;
  height: 75px;
  display: block;
  border-radius: 8px;
  background-color: #EFEFF3;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
}
.benefits .wrapbox .img img {
  width: 45px;
}
.benefits .wrapbox h5 {
  font-size: 18px;
  line-height: 21px;
  font-weight: 600;
  color: #333333;
  padding-bottom: 16px;
  margin-bottom: 0;
  font-family: "SFProText";
  letter-spacing: 0.22px;
}
.benefits .wrapbox p {
  font-size: 16px;
  line-height: 24px;
  color: #797979;
  font-family: "SF Pro Display";
  font-weight: 500;
  letter-spacing: 0.19px;
  margin: 0;
}
@media (max-width: 767px) {
  .benefits {
    padding: 40px 0;
  }
}

.steps .bluewrapper {
  background: #004393;
  border-radius: 16px;
  padding: 120px 20px;
}
@media (max-width: 767px) {
  .steps .bluewrapper {
    padding: 120px 20px;
  }
}
.steps .bluewrapper .title {
  font-size: 28px;
  line-height: 34px;
  font-weight: 500;
  color: #ffffff;
  text-align: center;
  padding-bottom: 50px;
  font-family: "SFProText";
  font-weight: 600;
}
@media (max-width: 767px) {
  .steps .bluewrapper .title {
    font-size: 24px;
  }
}
.steps .bluewrapper .wrapperimg {
  position: relative;
  display: flex;
}
.steps .bluewrapper .wrapperimg:before {
  content: "";
  display: block;
  top: 22px;
  left: 0;
  position: absolute;
  height: 20rem;
  width: 100%;
  background-image: url('dashimg.svg');
  background-repeat: no-repeat;
  background-size: contain;
}
@media (max-width: 767px) {
  .steps .bluewrapper .wrapperimg:before {
    display: none;
  }
}
.steps .bluewrapper .wrapperimg .imgcolumn {
  position: relative;
}
@media (max-width: 767px) {
  .steps .bluewrapper .wrapperimg .imgcolumn .step-item {
    margin-bottom: 5rem;
  }
}
.steps .bluewrapper .wrapperimg .imgcolumn .step-item .lst-count {
  display: flex;
  justify-content: center;
  margin-bottom: 35px;
}
.steps .bluewrapper .wrapperimg .imgcolumn .step-item .lst-info h6 {
  color: #ffffff;
  font-size: 18px;
  line-height: 21px;
  font-weight: 500;
  text-align: center;
  padding-bottom: 10px;
  font-family: "SFProText";
  font-weight: 600;
  letter-spacing: 0.22px;
}
.steps .bluewrapper .wrapperimg .imgcolumn .step-item .lst-info p {
  color: #ffffff;
  font-size: 16px;
  line-height: 24px;
  opacity: 80%;
  text-align: center;
  font-family: "SF Pro Display";
  letter-spacing: 0.19px;
  width: 80%;
  display: block;
  margin: 0 auto;
}

.faq {
  padding: 120px 0;
}
.faq .title {
  color: #333333;
  font-size: 28px;
  line-height: 34px;
  font-weight: 500;
  padding-bottom: 37px;
  margin-bottom: 0;
  font-family: "SFProText";
  font-weight: 600;
}
@media (max-width: 767px) {
  .faq .moneyimg {
    display: none;
  }
}
.faq .faq-wrapper .tab label {
  border: none !important;
  padding-right: 35px !important;
  position: relative;
  display: block;
  cursor: pointer;
  font-size: 16px;
  color: #2D77F4;
  font-weight: 500;
  margin-bottom: 0;
  font-family: "SFProText";
  font-weight: 600;
}
.faq .faq-wrapper .tab input[type=radio] + label::after {
  content: "";
  right: 0;
  font-size: 25px;
  position: absolute;
  top: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transform: translateY(-51%);
  background-image: url('plus.svg');
  background-repeat: no-repeat;
  background-size: contain;
}
@media screen and (max-width: 768px) {
  .faq .faq-wrapper .tab input[type=radio] + label::after {
    width: 26px;
    height: 26px;
  }
}
.faq .faq-wrapper .tab input[type=radio]:checked + label::after {
  background-image: url('minus.svg');
}
.faq .faq-wrapper .tab input[type=radio]:checked + label h4 {
  color: #004393;
}
.faq .sgb-faqs {
  background: #EFEFF3;
  padding: 85px 0;
}
.faq .sgb-faqs h3 {
  font-weight: bold;
  margin-bottom: 40px;
}
@media screen and (max-width: 768px) {
  .faq .sgb-faqs h3 {
    margin-bottom: 20px;
  }
}
@media screen and (max-width: 768px) {
  .faq .sgb-faqs {
    padding: 45px 0;
  }
}
.faq .faq-wrapper .tab input {
  position: absolute;
  opacity: 0;
  z-index: -1;
}
.faq .faq-wrapper .tab label {
  background: 0 0;
  padding: 10px 0;
}
.faq .faq-wrapper .tab {
  border-radius: 0;
  padding: 15px 0;
  border-bottom: 1px solid rgba(51, 51, 51, 0.2784313725);
}
.faq .faq-wrapper .tab h4 {
  font-size: 16px;
  font-weight: 500;
  color: #333333;
  display: flex;
  letter-spacing: 0.22px;
}
.faq .faq-wrapper .tab h4 span {
  display: inline-block;
  margin-right: 10px;
}
@media screen and (max-width: 768px) {
  .faq .faq-wrapper .tab h4 {
    font-size: 14px;
    line-height: 19px;
  }
}
.faq .faq-wrapper .tab input[type=radio]:checked {
  border: none;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1607843137);
}
.faq .faq-wrapper .tab input[type=radio]:checked + label h3 {
  color: #070a0c;
}
.faq .faq-wrapper .tab .tab-content {
  color: #797979;
  font-size: 16px;
  line-height: 24px;
  max-height: 0;
  overflow: hidden;
  transition: all 0.35s;
  padding-left: 36px;
  width: 90%;
  font-family: "SF Pro Display";
  letter-spacing: 0.19px;
}
.faq .faq-wrapper .tab input:checked ~ .tab-content {
  max-height: 100vh;
}

@media (max-width: 767px) {
  .mb2 {
    margin-bottom: 2rem;
  }
}

.main-modal {
  text-align: center;
  overflow: hidden;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  /* z-index: 1050; */
  -webkit-overflow-scrolling: touch;
  outline: 0;
  opacity: 0;
  transition: opacity 0.15s linear, z-index 0.15;
  z-index: -1;
  overflow-x: hidden;
  overflow-y: auto;
}

.model-open {
  z-index: 9999999;
  opacity: 1;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.custom-model-inner {
  transform: translate(0, -25%);
  transition: transform 0.3s ease-out;
  display: inline-block;
  vertical-align: middle;
  width: 655px;
  margin: 0 auto;
  max-width: 97%;
  padding-bottom: 0;
  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);
  background: #ffffff;
  border-radius: 8px;
  overflow: hidden;
}

.custom-model-wrap {
  display: block;
  width: 100%;
  position: relative;
  background-color: #ffffff;
  border-bottom: 1px solid #F4F3F8;
  border-radius: 0;
  background-clip: padding-box;
  outline: 0;
  text-align: left;
  padding: 0;
  box-sizing: border-box;
  max-height: calc(100vh - 70px);
  overflow-y: auto;
}

.model-open .custom-model-inner {
  transform: translate(0, 0);
  position: relative;
  z-index: 999;
}

.model-open .bg-overlay {
  background: rgba(0, 0, 0, 0.6);
  z-index: 99;
}

.bg-overlay {
  background: rgba(0, 0, 0, 0);
  height: 100vh;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  transition: background 0.15s linear;
}

.close-btn {
  position: absolute;
  right: 2px;
  top: 5px;
  cursor: pointer;
  z-index: 99;
  padding: 4px 12px;
  font-size: 16px;
  margin-right: 0;
  height: 30px;
  margin-bottom: 0;
  border-radius: 0;
  border: 0;
  color: #004393;
}

@media screen and (min-width: 800px) {
  .custom-model-main:before {
    content: "";
    display: inline-block;
    height: auto;
    vertical-align: middle;
    margin-right: 0px;
    height: 100%;
  }
}
@media screen and (max-width: 799px) {
  .custom-model-inner {
    margin-top: 45px;
  }
}
.pop-up-content-wrap {
  padding: 40px;
}
.pop-up-content-wrap h4 {
  font-weight: bold;
  color: #333333;
  font-size: 24px;
  line-height: 29px;
  padding-bottom: 20px;
  border-bottom: 1px solid #F4F3F8;
}
@media screen and (max-width: 768px) {
  .pop-up-content-wrap h4 {
    font-size: 16px;
    line-height: 20px;
    padding-right: 10px;
  }
}
.pop-up-content-wrap .price-amt-list {
  display: flex;
  justify-content: space-between;
  margin: 20px 0 40px 0;
  flex-wrap: wrap;
}
.pop-up-content-wrap .price-amt-list p {
  font-size: 14px;
  color: #797979;
}
.pop-up-content-wrap .price-amt-list h5 {
  font-size: 16px;
  font-weight: bold;
  color: #333333;
}
.pop-up-content-wrap .price-amt-list .plus-minus .field1 {
  display: flex;
  align-items: center;
}
.pop-up-content-wrap .price-amt-list .plus-minus .field1 .add-plus {
  border: 0;
  background: #F4F3F8;
  width: 24px;
  height: 24px;
  font-size: 21px;
  line-height: 24px;
  color: #004393;
}
.pop-up-content-wrap .price-amt-list .plus-minus .field1 .add-plus:disabled {
  cursor: not-allowed;
}
.pop-up-content-wrap .price-amt-list .plus-minus .field1 .input-number {
  color: #333333;
  font-size: 16px;
  font-weight: bold;
  border: 0;
  width: auto;
  text-align: center;
  outline: none;
}
@media screen and (max-width: 640px) {
  .pop-up-content-wrap .price-amt-list .plus-minus {
    width: 100%;
    margin-bottom: 20px;
  }
}
.pop-up-content-wrap .succ-bar {
  font-size: 14px;
  color: #797979;
  border-radius: 4px;
  background: #F4F3F8;
  padding: 12px 15px;
  display: block;
}
.pop-up-content-wrap .avl-balance {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 13px;
}
.pop-up-content-wrap .avl-balance .balance-tex {
  width: 42%;
}
.pop-up-content-wrap .avl-balance .balance-tex h6 {
  color: #797979;
  margin-top: 0;
}
.pop-up-content-wrap .avl-balance .balance-tex h5 {
  font-weight: bold;
}
@media screen and (max-width: 640px) {
  .pop-up-content-wrap .avl-balance .balance-tex {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
.pop-up-content-wrap .avl-balance .confirm-btn {
  width: 58%;
  padding: 12px 15px;
}
@media screen and (max-width: 640px) {
  .pop-up-content-wrap .avl-balance .confirm-btn {
    width: 100%;
  }
}
.pop-up-content-wrap .avl-balance a.confirm-btn[disabled] {
  cursor: not-allowed;
  pointer-events: none;
}
@media screen and (max-width: 640px) {
  .pop-up-content-wrap .avl-balance {
    display: block;
  }
}

.loader-new {
  border: 4px solid #F4F3F8;
  border-radius: 50%;
  border-top: 4px solid #2D77F4;
  width: 30px;
  height: 30px;
  /* Safari */
  animation: spin 2s linear infinite;
}

.loader-btn {
  border: 4px solid #F4F3F8;
  border-radius: 50%;
  border-top: 4px solid #2D77F4;
  width: 30px;
  height: 30px;
  /* Safari */
  animation: spin 2s linear infinite;
  display: block;
  margin: 0 auto;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
p.error {
  color: #EE404A !important;
  font-size: 1rem !important;
}

.red-text {
  color: #EE404A !important;
  font-weight: 500 !important;
}
.red-text.txt-nm {
  margin-right: 10px;
}

.grn-text {
  color: #00B16B !important;
  font-weight: 500 !important;
}

.bl-text {
  color: #2D77F4 !important;
  font-weight: 500 !important;
}

.drop-menu-sgb {
  position: relative;
}
@media screen and (max-width: 767px) {
  .drop-menu-sgb {
    top: 0px;
  }
}
.drop-menu-sgb .drp-menu {
  display: block;
}
.drop-menu-sgb .drp-menu .dots-mn {
  display: block;
  width: 4px;
  margin: 2px 0;
  height: 4px;
  border-radius: 50%;
  background: #9D9D9D;
}
.drop-menu-sgb .dropdown-menu {
  min-width: 109px;
  border: 0;
  left: inherit;
  right: 0;
}
.drop-menu-sgb .dropdown-menu > li > a {
  color: #797979;
  padding: 6px 15px;
  display: flex;
  align-items: center;
}
.drop-menu-sgb .dropdown-menu > li > a .icon-menu {
  margin-right: 8px;
  display: inline-block;
  font-size: 20px;
}
.drop-menu-sgb.open {
  z-index: 999;
}

.custom-model-social {
  display: flex;
  align-items: center;
}
.custom-model-social .custom-model-inner {
  width: 203px;
}
.custom-model-social .custom-model-inner .pop-up-content-wrap h4 {
  border: 0;
}
.custom-model-social .custom-model-inner .pop-up-content-wrap ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.custom-model-social .custom-model-inner .pop-up-content-wrap ul li {
  margin-bottom: 15px;
}
.custom-model-social .custom-model-inner .pop-up-content-wrap ul li a {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #797979;
  text-decoration: none;
}
.custom-model-social .custom-model-inner .pop-up-content-wrap ul li a .icon-menu {
  padding: 5px;
  background: #F4F3F8;
  margin-right: 10px;
}
.custom-model-social .custom-model-inner .pop-up-content-wrap ul li:last-child {
  margin-bottom: 0;
}
@media screen and (max-width: 640px) {
  .custom-model-social .custom-model-inner .pop-up-content-wrap {
    padding: 30px 25px;
  }
}

.custom-model-confirm .custom-model-inner {
  width: 536px;
}
.custom-model-confirm .custom-model-inner .pop-up-content-wrap {
  width: 90%;
  margin: 0 auto;
  text-align: center;
}
.custom-model-confirm .custom-model-inner .pop-up-content-wrap h4 {
  border: 0;
  text-align: center;
}
.custom-model-confirm .custom-model-inner .pop-up-content-wrap h4 span {
  display: block;
}
.custom-model-confirm .custom-model-inner .pop-up-content-wrap p {
  color: #333333;
  margin-bottom: 20px;
  opacity: 1;
}
.custom-model-confirm .custom-model-inner .pop-up-content-wrap .confirm-btn {
  width: 47%;
  margin: 0 0.5rem;
  padding: 13px 15px;
}
.custom-model-confirm .custom-model-inner .pop-up-content-wrap .confirm-btn .viewtransaction {
  background-color: transparent;
  color: #2D77F4;
  border: 1px solid #2D77F4;
}

.mt1 {
  margin-top: 1rem;
}

.mr-2 {
  margin-right: 1rem !important;
}

.overflowclass {
  overflow: visible !important;
}

.dflex {
  display: flex;
}

.mt-3 {
  margin-top: 2rem;
}

.viewtransaction {
  width: 50%;
  padding: 12px 15px;
  border: 1px solid #2D77F4;
  color: #2D77F4;
  border-radius: 5px;
  font-size: 14px;
  text-decoration: none;
}

.blockClick {
  pointer-events: none;
  cursor: not-allowed;
}

.text-center {
  text-align: center;
}

.flex-nowrap {
  flex-wrap: nowrap !important;
}

.sleekbox-overlay-sgb {
  z-index: 1000;
  font-size: 16px;
  display: none;
  position: fixed;
  left: 0;
  top: 5rem;
  width: 100%;
  height: 100%;
  background: rgba(62, 64, 79, 0.3019607843);
}
.sleekbox-overlay-sgb .sleekbox-popup {
  box-sizing: border-box;
  background: #ffffff;
  max-width: 650px;
  margin: 0 auto;
  border-radius: 8px;
  margin: 4rem auto;
  height: auto;
}
@media (max-width: 767px) {
  .sleekbox-overlay-sgb .sleekbox-popup {
    margin: 1rem 1rem;
  }
}
.sleekbox-overlay-sgb .sleekbox-popup .popup-sub-row {
  padding: 5px 30px 20px;
  text-align: center;
  position: relative;
}
@media (max-width: 767px) {
  .sleekbox-overlay-sgb .sleekbox-popup .popup-sub-row {
    padding: 20px;
  }
}
.sleekbox-overlay-sgb .sleekbox-popup .popup-sub-row .closewrap {
  float: right;
  margin-top: 0.5rem;
  position: absolute;
  right: 5px;
}
.sleekbox-overlay-sgb .sleekbox-popup .popup-sub-row .closewrap .close-icon {
  font-size: 2rem;
  cursor: pointer;
}
.sleekbox-overlay-sgb .sleekbox-popup .popup-sub-row .applicationwrap {
  margin-top: 3rem;
}
.sleekbox-overlay-sgb .sleekbox-popup .popup-sub-row .applicationwrap .heading {
  font-size: 16px;
  color: #000000;
  font-family: "SF Pro Display";
  font-weight: 600;
  margin: 0;
}
.sleekbox-overlay-sgb .sleekbox-popup .popup-sub-row .applicationwrap .namedate {
  display: flex;
  justify-content: space-between;
  margin: 2rem 0 1rem;
  font-size: 14px;
  color: #000000;
  font-family: "SF Pro Display";
}
.sleekbox-overlay-sgb .sleekbox-popup .popup-sub-row .applicationwrap .namedate .name {
  text-align: left;
}
.sleekbox-overlay-sgb .sleekbox-popup .popup-sub-row .applicationwrap .des {
  text-align: left;
  max-height: 30vh;
  overflow-y: scroll;
  margin-bottom: 1rem;
}
.sleekbox-overlay-sgb .sleekbox-popup .popup-sub-row .applicationwrap .des p {
  margin: 10px 0 10px;
}
.sleekbox-overlay-sgb .sleekbox-popup .popup-sub-row .applicationwrap .des .text {
  font-size: 14px;
  color: #000000;
  font-family: "SF Pro Display";
}
.sleekbox-overlay-sgb .sleekbox-popup .popup-sub-row .applicationwrap .tc {
  margin-top: 1rem;
  text-align: left;
  font-size: 14px;
  color: #000000;
  font-family: "SF Pro Display";
  display: flex;
  align-items: center;
}
.sleekbox-overlay-sgb .sleekbox-popup .popup-sub-row .applicationwrap .tc input {
  margin-top: 0;
  margin-right: 10px;
  pointer-events: none;
}
.sleekbox-overlay-sgb .sleekbox-popup .popup-sub-row .applicationwrap .okbtnwrap {
  margin-top: 1.5rem;
  text-align: left;
}
.sleekbox-overlay-sgb .sleekbox-popup .popup-sub-row .applicationwrap .okbtnwrap .okbtn {
  font-size: 14px;
  padding: 0.3rem 1rem;
}
.sleekbox-overlay-sgb.sleekbox-popup-active {
  display: block;
}

.mb2 {
  margin-bottom: 2rem;
}

.m0 {
  margin: 0 !important;
}

.disabled-btn {
  background: rgba(0, 0, 0, 0.1607843137) !important;
  color: rgba(0, 0, 0, 0.3019607843) !important;
}

.dialog-footer-2 {
  background: #ffffff;
  color: #000000;
  padding: 14px 0px;
  margin-top: 15px;
  height: 1px;
  width: 100%;
  border-top: 1px solid #F4F3F8;
  text-align: right;
  display: flex;
  justify-content: space-between;
}
.dialog-footer-2 .btn {
  padding: 0px 15px;
  font-size: 14px;
  margin-right: 0px;
  height: 34px;
  line-height: 34px;
  width: auto;
  margin-bottom: 0px;
}
@media (max-width: 420) {
  .dialog-footer-2 .btn {
    font-size: 12px;
  }
}
.dialog-footer-2 .btn + .btn {
  margin-right: 15px;
}

.account-status {
  font-size: 12px;
  color: #000000;
  opacity: 1;
}

.dialog-footer-2 {
  text-align: left;
}
.dialog-footer-2 .account-status {
  width: 61%;
  margin-top: 0px;
}`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 88650:
/*!**************************************************************************************************!*\
  !*** ./src/app/market/secure-products/secure-products/secure-products.component.html?ngResource ***!
  \**************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"secureproductwrap\">\r\n  <section class=\"producttabsection\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"cards\">\r\n            <div class=\"card-block\">\r\n              <h1>\r\n                Secured Products\r\n              </h1>\r\n\r\n              <div class=\"tabwrap\">\r\n                <ul class=\"nav nav-tabs reset\" role=\"tablist\">\r\n                  <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" [class.active]=\"selectedScheme==='tbills'\" role=\"tab\" data-toggle=\"tab\"\r\n                      (click)=\"ontabSelect('tbills')\">@if (selectedScheme==='tbills') {\r\n                      <span>Treasury Bills\r\n                      (T-Bills)</span>\r\n                      }@if (selectedScheme!=='tbills') {\r\n                      <span>T-Bills</span>\r\n                    }</a>\r\n                  </li>\r\n                  <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" [class.active]=\"selectedScheme==='gsec'\" role=\"tab\" data-toggle=\"tab\"\r\n                      (click)=\"ontabSelect('gsec')\">@if (selectedScheme==='gsec') {\r\n                      <span>Government Securities\r\n                      (G-Sec)</span>\r\n                      }@if (selectedScheme!=='gsec') {\r\n                      <span>G-Sec</span>\r\n                    }</a>\r\n                  </li>\r\n                  <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" [class.active]=\"selectedScheme==='sdl'\" role=\"tab\" data-toggle=\"tab\"\r\n                      (click)=\"ontabSelect('sdl')\">@if (selectedScheme==='sdl') {\r\n                      <span>State Development Loans\r\n                      (SDL)</span>\r\n                      }@if (selectedScheme!=='sdl') {\r\n                      <span>SDL</span>\r\n                    }</a>\r\n                  </li>\r\n                  <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" [class.active]=\"selectedScheme==='sgb'\" role=\"tab\" data-toggle=\"tab\"\r\n                      (click)=\"ontabSelect('sgb')\">@if (selectedScheme==='sgb') {\r\n                      <span>Sovereign Gold Bond\r\n                      (SGB)</span>\r\n                      }@if (selectedScheme!=='sgb') {\r\n                      <span>SGB</span>\r\n                    }</a>\r\n                  </li>\r\n\r\n                </ul>\r\n                @if ((!userAccountStatus||!userAccountStatus?.onboardStatus || userAccountStatus?.onboardStatus=='C')) {\r\n                  <div class=\"d-flex flex-nowrap\">\r\n                    @if (isLoggedIn) {\r\n                      <button class=\"transaction-btn mr-2\" (click)=\"redirectToTransaction()\">View\r\n                      Transactions</button>\r\n                    }\r\n                    <button class=\"transaction-btn refresh-btn\" (click)=\"refreshScheme()\"><img\r\n                    src=\"../assets/images/repeat.png\" width=\"18\" height=\"18\" alt=\"Repeat\"></button>\r\n                  </div>\r\n                }\r\n\r\n              </div>\r\n              <!-- Tab panes -->\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n  <section>\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"tab-content\">\r\n\r\n          <div role=\"tabpanel\" class=\"tab-pane\">\r\n            <div class=\"wrapper\">\r\n              <p class=\"headtxt\">{{selectedSchemeConfig?.summary || ''}}</p>\r\n\r\n              <div class=\"secure-product-table\">\r\n                <table class=\"cust-table-data\">\r\n                  <thead>\r\n                    <tr>\r\n                      @for (item of selectedSchemeConfig?.ongoing?.tableStructure; track item; let i = $index) {\r\n                        <th scope=\"col\" class=\"text-center\">\r\n                          {{item?.label}}@if (i===0 && selectedScheme === 'sgb') {\r\n                          <span> - <small\r\n                          class=\" grn-text\">Ongoing</small> </span>\r\n                        }</th>\r\n                      }\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    @if (!isListingServiceHit) {\r\n                      @for (item of ongoingData; track item; let listindex = $index) {\r\n                        @if ((selectedScheme === 'sgb')?(item?.isPublished):'true') {\r\n                          <tr>\r\n                            @for (label of selectedSchemeConfig?.ongoing?.tableStructure; track label; let i = $index) {\r\n                              <td class=\"text-center\" [attr.data-label]=\"(label?.label)+((i===0 && selectedScheme === 'sgb')?' (Ongoing)':'')\"\r\n                                >\r\n                                @if (label.key!=='annualInterest' && label.key!=='status') {\r\n                                  <span [ngClass]=\"{'red-text txt-nm': (selectedScheme!=='sgb' && label.key==='orderStatus' && (label?.orderstatus(item)==='EF' || label?.orderstatus(item)==='CF')), 'bl-text' : (selectedScheme!=='sgb' && label.key==='orderStatus' && (label?.orderstatus(item)==='ES' || label?.orderstatus(item)==='CS')), 'dis-block': (selectedScheme!=='sgb' && label.key==='orderStatus')}\">{{(label?.cell(item))\r\n                                    ||\r\n                                  ''}}</span>\r\n                                }\r\n                                @if (label.key==='annualInterest') {\r\n                                  {{(label?.cell(item)) ||\r\n                                  ''}}<br><span>{{(label?.ratecell(item)) ||\r\n                                ''}} of issue price</span>\r\n                              }\r\n                              @if (selectedScheme==='sgb' && label.key==='status') {\r\n                                @if (isStatusServiceHit) {\r\n                                  <div class=\"loader-new\"></div>\r\n                                }\r\n                                @if ((!(label?.cell(item)) || !isLoggedIn) && !isStatusServiceHit) {\r\n                                  <div\r\n                                    class=\"btn btn-gradient btn btn-aply Click-here\" (click)=\"applyScheme(item,listindex)\">\r\n                                    APPLY\r\n                                  </div>\r\n                                }\r\n                                @if (((label?.cell(item)) === 'Rejected') && !isStatusServiceHit) {\r\n                                  Rejected\r\n                                  <span class=\"txt-red blk-com blk-com-sub\">{{(label?.statusreasoncell(item)) ||\r\n                                  ''}}</span>\r\n                                }\r\n                                <!--        <ng-container *ngIf=\"((label?.cell(item)) === 'Requested') && !isStatusServiceHit\">Requested\r\n                              </ng-container> -->\r\n                              @if ((label?.cell(item) && (label?.cell(item))==='Cancelled') && !isStatusServiceHit) {\r\n                                <div class=\"btn btn-gradient btn btn-aply Click-here\"\r\n                                  (click)=\"applyScheme(item,listindex,true)\">APPLY\r\n                                </div>\r\n                              }\r\n                              @if ((label?.cell(item) && (label?.cell(item))!=='Rejected') && !isStatusServiceHit) {\r\n                                <span class=\"blk-com bld-text redtxt text-center\"\r\n                                  [ngClass]=\"{'txt-red': (label?.cell(item))==='Cancelled','bl-text': (label?.cell(item))!=='Cancelled'}\">\r\n                                {{(label?.cell(item)) || ''}}</span>@if ((label?.cell(item))!=='Cancelled') {\r\n                                <span\r\n                                  >{{(label?.statusreasoncell(item)) ||\r\n                                ''}}</span>\r\n                              }\r\n                            }\r\n                          }\r\n                          @if (selectedScheme!=='sgb' && label.key==='orderStatus') {\r\n                            @if (isStatusServiceHit) {\r\n                              <div class=\"loader-new\"></div>\r\n                            }\r\n                            @if ((!(label?.cell(item)) || !isLoggedIn || (label?.orderstatus(item))==='EF' || (label?.orderstatus(item))==='CS') && !isStatusServiceHit) {\r\n                              <div class=\"btn btn-gradient btn btn-aply Click-here\"\r\n                                (click)=\"applyScheme(item,listindex)\">\r\n                                APPLY\r\n                              </div>\r\n                            }\r\n                          }\r\n                        </td>\r\n                      }\r\n                    </tr>\r\n                  }\r\n                }\r\n              }\r\n              @if (ongoingData?.length == 0 && !isListingServiceHit) {\r\n                <tr class=\"text-center\">\r\n                  <td [attr.colspan]=\"selectedSchemeConfig?.ongoing?.tableStructure?.length\"\r\n                    class=\"no-data-section\">\r\n                    {{(selectedScheme === 'sgb') ? 'No\r\n                  ongoing SGB right now!' : selectedScheme==='tbills'?'TBill are available usually on Monday and Tuesday.':selectedScheme==='gsec'?'GSec are available usually from Tuesday to Thursday.':selectedScheme==='sdl'?'SDL are available usually on Monday.':'No Data Available'}}</td>\r\n                </tr>\r\n              }\r\n              @if (isListingServiceHit) {\r\n                <tr>\r\n                  <td [attr.colspan]=\"selectedSchemeConfig?.ongoing?.tableStructure?.length\">\r\n                    <img class=\"loader\" src=\"../../../assets/images/loader.gif\" />\r\n                  </td>\r\n                </tr>\r\n              }\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n\r\n        @if (upcomingData && upcomingData.length) {\r\n          <div class=\"secure-product-table overflowclass\">\r\n            <table>\r\n              <thead>\r\n                <tr>\r\n                  @for (item of selectedSchemeConfig?.upcoming?.tableStructure; track item; let i = $index) {\r\n                    <th scope=\"col\">\r\n                      {{item?.label}}@if (i===0) {\r\n                      <span> - <small class=\"bl-text\">Upcoming</small> </span>\r\n                    }</th>\r\n                  }\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                @if (!isListingServiceHit) {\r\n                  @for (item of upcomingData; track item) {\r\n                    @if (item.isPublished) {\r\n                      <tr>\r\n                        @for (label of selectedSchemeConfig?.upcoming?.tableStructure; track label; let i = $index) {\r\n                          <td [attr.data-label]=\"(label.label)+(i===0?' (Upcoming)':'')\"\r\n                            >\r\n                            {{(label?.cell(item))\r\n                          || ''}}</td>\r\n                        }\r\n                        <td class=\"user-dropdown drop-menu-sgb lst-tad\" dropdown=\"\">\r\n                          <a class=\"animate drp-menu\" dropdown-open=\"\">\r\n                            <span class=\"dots-mn\"></span>\r\n                            <span class=\"dots-mn\"></span>\r\n                            <span class=\"dots-mn\"></span>\r\n                          </a>\r\n                          <ul class=\"dropdown-menu\" role=\"menu\">\r\n                            <li data-target=\"#bs-example-navbar-collapse-5\" data-toggle=\"collapse\">\r\n                              <a class=\"animate Click-here1\" (click)=\"shareScheme()\">\r\n                                <img src=\"assets/images/icons/baseline-share-24px.svg\" alt=\"\"\r\n                                  class=\"icon-menu icon-share img-responsive\">\r\n                                  Share\r\n                                </a>\r\n                              </li>\r\n                            </ul>\r\n                          </td>\r\n                        </tr>\r\n                      }\r\n                    }\r\n                  }\r\n                  @if (upcomingData?.length == 0 && !isListingServiceHit) {\r\n                    <tr class=\"text-center\">\r\n                      <td [attr.colspan]=\"selectedSchemeConfig?.upcoming?.tableStructure?.length\"\r\n                        class=\"no-data-section\">No\r\n                        Data Available\r\n                      </td>\r\n                    </tr>\r\n                  }\r\n                  @if (isListingServiceHit) {\r\n                    <tr>\r\n                      <td [attr.colspan]=\"selectedSchemeConfig?.upcoming?.tableStructure?.length\">\r\n                        <img class=\"loader\" src=\"../../../assets/images/loader.gif\" />\r\n                      </td>\r\n                    </tr>\r\n                  }\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          }\r\n        </div>\r\n\r\n\r\n        <section class=\"benefits\">\r\n          <div class=\"container\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12\">\r\n                <h2 class=\"title\">Benefits of Secured Products</h2>\r\n              </div>\r\n            </div>\r\n            <div class=\"row d-flex\">\r\n\r\n              @for (benefit of selectedSchemeConfig?.benefits; track benefit; let i = $index) {\r\n                <div class=\"col-md-3 col-sm-3 mb2\"\r\n                  >\r\n                  <div class=\"wrapbox\">\r\n                    <span class=\"img\">\r\n                      <img src=\"../../../assets/images/sgb/{{benefit?.imgurl}}\" class=\"img-fluid\" height=\"45\" width=\"45\" alt=\"Benefits of Secured Products\"/>\r\n                    </span>\r\n                    <h5>{{benefit?.title}}</h5>\r\n                    <p>{{benefit.content}}</p>\r\n                  </div>\r\n                </div>\r\n              }\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n\r\n        <section class=\"steps\">\r\n          <div class=\"container\">\r\n            <div class=\"bluewrapper\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                  <h3 class=\"title\">\r\n                    How to Apply for Secured Products\r\n                  </h3>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"wrapperimg\">\r\n                  @for (step of selectedSchemeConfig?.apply; track step; let i = $index) {\r\n                    <div class=\"col-md-4 col-sm-4 imgcolumn\">\r\n                      <div class=\"step-item\">\r\n                        <div class=\"lst-count\">\r\n                          <img src=\"../../../assets/images/sgb/{{step?.imgurl}}\" height=\"124\" width=\"124\" alt=\"Apply of Secured Products\">\r\n                        </div>\r\n                        <div class=\"lst-info\">\r\n                          <h6>Step {{i+1}}</h6>\r\n                          <p>{{step.content}}</p>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  }\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </section>\r\n\r\n        @if (faqData.length) {\r\n          <section class=\"faq\">\r\n            <div class=\"container\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                  <h2 class=\"title\">FAQ's</h2>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-8 col-sm-8\">\r\n                  <div class=\"faq-wrapper\">\r\n                    @for (item of faqData; track item; let i = $index) {\r\n                      <div class=\"tab\">\r\n                        <input name=\"tabs\" type=\"radio\" id=\"tab-{{i}}\" [checked]=\"i===0\">\r\n                        <label for=\"tab-{{i}}\">\r\n                          <h4><span>{{i+1}}</span>{{item?.title}}</h4>\r\n                        </label>\r\n                        <div class=\"tab-content\">\r\n                          <div>\r\n                            <p>{{item?.description_text}}</p>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    }\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-4 col-sm-4\">\r\n                  <img src=\"../../../assets/images/sgb/money.svg\" class=\"img-fluid moneyimg\" width=\"251\" height=\"296\" alt=\"Treasury Bills\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </section>\r\n        }\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</section>\r\n\r\n<!-- apply form popup -->\r\n@if (showApplyPopup) {\r\n  <div class=\"main-modal custom-model-main\" [class.model-open]=\"showApplyPopup\">\r\n    <div class=\"custom-model-inner\">\r\n      <div class=\"close-btn\" (click)=\"closePopup('apply')\">&#10006;</div>\r\n      <div class=\"custom-model-wrap\">\r\n        <div class=\"pop-up-content-wrap\">\r\n          <!-- <h4>Sovereign Gold Bonds Scheme 2021-22 – Series IX</h4> -->\r\n          <h4>{{applySchemeControl?.name}}</h4>\r\n          <div class=\"price-amt-list\">\r\n            @if (selectedScheme === 'sgb') {\r\n              <div class=\"plus-minus\">\r\n                <p>Qty in gms</p>\r\n                <div class=\"field1\">\r\n                  <button type=\"button\" id=\"sub\" class=\"sub add-plus\" (click)=\"decreaseQuantity()\"\r\n                  [disabled]=\"applySchemeControl.qty<=1\">-</button>\r\n                  <input type=\"tel\" autocomplete=\"off\" maxlength=\"4\" inputRestrict=\"unsignedInteger\"\r\n                    class=\"input-number\" [(ngModel)]=\"applySchemeControl.qty\"\r\n                    (input)=\"quantityChange($event.target.value)\" />\r\n                    <button type=\"button\" id=\"add\" class=\"add add-plus\" (click)=\"increaseQuantity()\"\r\n                    [disabled]=\"applySchemeControl.qty>=4000\">+</button>\r\n                  </div>\r\n                  @if (applySchemeControl.isQtyInvalid) {\r\n                    <p class=\"error\">Qty should be between 1 to 4000</p>\r\n                  }\r\n                </div>\r\n                <div class=\"mn-price\">\r\n                  <p>Price</p>\r\n                  <h5>{{applySchemeControl.issuePrice}} / gm</h5>\r\n                </div>\r\n              }\r\n              @if (selectedScheme !== 'sgb') {\r\n                <div class=\"mn-price\">\r\n                  <p>Bid Close Date</p>\r\n                  <h5>{{applySchemeControl.bidCloseDate}}</h5>\r\n                </div>\r\n                <div class=\"plus-minus\">\r\n                  <p>Units to Buy {{applySchemeControl?.units}}</p>\r\n                  <div class=\"field1\">\r\n                    <button type=\"button\" id=\"sub\" class=\"sub add-plus\" (click)=\"decreaseQuantity()\"\r\n                    [disabled]=\"applySchemeControl.qty<=applySchemeControl.minQty\">-</button>\r\n                    <input type=\"tel\" autocomplete=\"off\" inputRestrict=\"unsignedInteger\" class=\"input-number\" [maxlength]=\"applySchemeControl?.maxLength\"\r\n                      [(ngModel)]=\"applySchemeControl.qty\" (input)=\"quantityChange($event.target.value)\" />\r\n                      <button type=\"button\" id=\"add\" class=\"add add-plus\" (click)=\"increaseQuantity()\"\r\n                      [disabled]=\"applySchemeControl.qty>=applySchemeControl.maxQty\">+</button>\r\n                    </div>\r\n                    <!-- <p class=\"error\" *ngIf=\"applySchemeControl.isQtyInvalid\">Qty should be between {{applySchemeControl.minQty}} to {{applySchemeControl.maxQty}}</p> -->\r\n                    @if (applySchemeControl.isQtyInvalid) {\r\n                      <p class=\"error\">Please enter value in multiple of lot size only\r\n                      </p>\r\n                    }\r\n                    @if (applySchemeControl.isQtyNotInRange) {\r\n                      <p class=\"error\">Enter quantities within Min and Max limit\r\n                      </p>\r\n                    }\r\n                  </div>\r\n                }\r\n                <!--\r\n                <ng-container *ngIf=\"selectedScheme !== 'sgb'\">\r\n                  <div class=\"mn-price\">\r\n                    <p>Bid Timing</p>\r\n                    <h5>{{applySchemeControl.dailyStartTime&&applySchemeControl.dailyEndTime?(((applySchemeControl.bidCloseDate+\" \"+applySchemeControl.dailyStartTime)|date:'h:mm a')+'-'+((applySchemeControl.bidCloseDate+\" \"+applySchemeControl.dailyEndTime)|date:'h:mm a')):'-'}}</h5>\r\n                  </div>\r\n                </ng-container> -->\r\n                <div class=\"mn-amount\">\r\n                  <p>Amount</p>\r\n                  <h5>₹ {{applySchemeControl.amount | number}}</h5>\r\n                </div>\r\n              </div>\r\n              <!-- <div class=\"succ-bar\">\r\n              After successful application, allotment will take up to 7 days\r\n            </div> -->\r\n            <div class=\"avl-balance\">\r\n              @if ((applySchemeControl.amount > clientBalance) && (!userAccountStatus||!userAccountStatus?.onboardStatus || userAccountStatus?.onboardStatus=='C')) {\r\n                <p class=\"error\">There is\r\n                insufficient balance in your account. Please maintain adequate amount</p>\r\n              }\r\n              <div class=\"balance-tex\">\r\n                <h6>Available balance</h6>\r\n                <h5>₹ {{clientBalance | number}}</h5>\r\n              </div>\r\n              <!--  (isClientFromApp?(applySchemeControl.isQtyInvalid || applySchemeControl.amount >\r\n              clientBalance):false)\r\n              applySchemeControl.amount > clientBalance -->\r\n              <a href=\"javascript:void(0)\" class=\"Click-here3 btn btn-gradient btn confirm-btn\" [class.disabled-btn]=\"!(!userAccountStatus||!userAccountStatus?.onboardStatus || userAccountStatus?.onboardStatus=='C')\" (click)=\"confirmScheme()\" [attr.disabled]=\"((!(!userAccountStatus||!userAccountStatus?.onboardStatus || userAccountStatus?.onboardStatus=='C')) || applySchemeControl.isQtyInvalid || applySchemeControl.isQtyNotInRange || loaders?.applyLoader)?'':null\" [class.blockClick]=\"loaders?.applyLoader\">\r\n                @if (loaders?.applyLoader) {\r\n                  <span class=\"loader-btn\"></span>\r\n                }\r\n                <!-- && !isClientFromApp -->\r\n                @if (!loaders?.applyLoader) {\r\n                  <span\r\n                    >{{(applySchemeControl.amount >\r\n                  clientBalance)?'ADD FUNDS':'CONFIRM'}}</span>\r\n                }\r\n              </a>\r\n            </div>\r\n            <!-- text-center mb-15  -->\r\n            @if ((!userAccountStatus||!userAccountStatus?.onboardStatus || userAccountStatus?.onboardStatus=='C')) {\r\n              <div class=\"mt-20 noteform\"><strong>Note: </strong>Please maintain sufficient balance in your demat account.\r\n            </div>\r\n          }\r\n          <div class=\"dialog-footer-2\">\r\n            @if (userAccountStatus&&userAccountStatus?.onboardStatus && userAccountStatus?.onboardStatus=='N') {\r\n              <p class=\"account-status error-status\"> Complete your account setup to begin your Joy of Earning</p>\r\n              <button  (click)=\"openLink()\"\r\n              type=\"submit\" class=\"btn buy\">Continue</button>\r\n            }\r\n            @if (userAccountStatus&&userAccountStatus?.onboardStatus && userAccountStatus?.onboardStatus=='YR') {\r\n              <p class=\"account-status error-status\"> Account Activation Failed due to issue with the account details</p>\r\n              <button  (click)=\"openLink()\"\r\n              type=\"submit\" class=\"btn buy\">Proceed</button>\r\n            }\r\n            @if (userAccountStatus&&userAccountStatus?.onboardStatus && userAccountStatus?.onboardStatus=='Y') {\r\n              <p class=\"account-status error-status\">Account Activation in Progress</p>\r\n            }\r\n            @if (userAccountStatus&&userAccountStatus?.onboardStatus && userAccountStatus?.onboardStatus=='inactive') {\r\n              <p class=\"account-status error-status\"> Account is inactive due to no trade activity. Please complete Re-KYC to reactivate</p>\r\n              <button  (click)=\"navigateToModificationFlow()\"\r\n              type=\"submit\" class=\"btn buy\">Proceed</button>\r\n            }\r\n            @if (userAccountStatus&&userAccountStatus?.onboardStatus && userAccountStatus?.onboardStatus=='suspended') {\r\n              <p class=\"account-status error-status\">Account is suspended. For assistance, kindly reach out to our support team.</p>\r\n              <button  (click)=\"navigateToSupport()\"\r\n              type=\"submit\" class=\"btn buy\">Contact Support</button>\r\n            }\r\n            @if (userAccountStatus&&userAccountStatus?.onboardStatus && userAccountStatus?.onboardStatus=='MF') {\r\n              <p class=\"account-status error-status\"> Your Equity Account isn't activated Yet!</p>\r\n              <button  (click)=\"openLink()\"\r\n              type=\"submit\" class=\"btn buy\">Continue</button>\r\n            }\r\n          </div></div>\r\n        </div>\r\n      </div>\r\n      <div class=\"bg-overlay\"></div>\r\n    </div>\r\n  }\r\n\r\n  <!-- Confirm popup -->\r\n  @if (showConfirmPopup) {\r\n    <div class=\"main-modal custom-model-confirm\" [class.model-open]=\"showConfirmPopup\">\r\n      <div class=\"custom-model-inner\">\r\n        <div class=\"close-btn close-btn1\" (click)=\"closePopup('confirm')\">&#10006;</div>\r\n        <div class=\"custom-model-wrap\">\r\n          <div class=\"pop-up-content-wrap\">\r\n            <h4>{{selectedSchemeConfig?.header}} <span>{{applySchemeControl.name}}</span> </h4>\r\n            <p>Your order successfully placed</p>\r\n            <div class=\"succ-bar\">\r\n              After successful application, allotment will take up to 7 days\r\n            </div>\r\n            <div class=\"dflex mt-3\">\r\n              @if (isLoggedIn) {\r\n                <a href=\"javascript:void(0)\" class=\"close-btn1  viewtransaction\"\r\n                  (click)=\"closePopup('confirm');redirectToTransaction()\">\r\n                  View Transactions\r\n                </a>\r\n              }\r\n              <a href=\"javascript:void(0)\" class=\"close-btn1 btn btn-gradient btn confirm-btn mt1\"\r\n                (click)=\"closePopup('confirm')\">\r\n                DONE\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"bg-overlay\"></div>\r\n    </div>\r\n  }\r\n\r\n  <!-- Social popup -->\r\n  @if (showSocialPopup) {\r\n    <div class=\"main-modal custom-model-social\" [class.model-open]=\"showSocialPopup\">\r\n      <div class=\"custom-model-inner\">\r\n        <div class=\"close-btn\" (click)=\"closePopup('social')\">&#10006;</div>\r\n        <div class=\"custom-model-wrap\">\r\n          <div class=\"pop-up-content-wrap\">\r\n            <h4>Share via</h4>\r\n            <ul class=\"social\">\r\n              <li>\r\n                <a href=\"javascript:void(0)\" (click)=\"shareOnSocialMedia('whatsapp')\">\r\n                  <img src=\"assets/images/icons/whatsapp.svg\" alt=\"\" class=\"icon-menu icon-share img-responsive\">\r\n                  WhatsApp\r\n                </a>\r\n              </li>\r\n              <li>\r\n                <a href=\"javascript:void(0)\" (click)=\"shareOnSocialMedia('facebook')\">\r\n                  <img src=\"assets/images/icons/Facebook.svg\" alt=\"\" class=\"icon-menu icon-share img-responsive\">\r\n                  Facebook\r\n                </a>\r\n              </li>\r\n              <li>\r\n                <a href=\"javascript:void(0)\" (click)=\"shareOnSocialMedia('twitter')\">\r\n                  <img src=\"assets/images/icons/Twitter.svg\" alt=\"\" class=\"icon-menu icon-share img-responsive\">\r\n                  Twitter\r\n                </a>\r\n              </li>\r\n              <li>\r\n                <a href=\"javascript:void(0)\" (click)=\"copySchemeLink()\">\r\n                  <i class=\"icon-menu icon-copy img-responsive icon-eye\"></i>\r\n                  Copy link\r\n                </a>\r\n              </li>\r\n              <!-- <i class=\"icon-menu icon-share img-responsive icon-eye\"></i> -->\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"bg-overlay\"></div>\r\n    </div>\r\n  }\r\n\r\n</div>\r\n\r\n@if (showPreLogin) {\r\n  <div class=\"dialog\">\r\n    <div class=\"dialog-content\">\r\n      <div class=\"dialog-header clearfix \">\r\n        <div class=\"col-md-12\">\r\n          <h4 class=\"popup-title\">Oops,Looks like you are not logged in. Please Login for Moving further. </h4>\r\n        </div>\r\n      </div>\r\n      <div class=\"dialog-footer clearfix\">\r\n        <button class=\"btn sell\" (click)=\"closePreLogin()\">Close</button>\r\n        <button class=\"btn buy\" [showFocus]=\"showPreLogin\" (click)=\"login()\">Login</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n}\r\n\r\n@if (noBankActive) {\r\n  <div class=\"dialog\">\r\n    <div class=\"dialog-content\">\r\n      <div class=\"dialog-header clearfix\">\r\n        <div class=\"col-md-12\">\r\n          <h4>Attention</h4>\r\n        </div>\r\n      </div>\r\n      <div class=\"dialog-section\">\r\n        <p>None of your Registered Bank Account is Active, Please Contact Support </p>\r\n      </div>\r\n      <div class=\"dialog-footer clearfix\">\r\n        <button class=\"btn sell\" (click)=\"closeNoBankActive()\">Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n}\r\n\r\n@if (isNRI) {\r\n  <div class=\"dialog\">\r\n    <div class=\"dialog-content\" style=\"max-width: 80rem\">\r\n      <div class=\"dialog-header clearfix\">\r\n        <div class=\"col-md-12\">\r\n          <h4>NRI Payin/Payout Process</h4>\r\n        </div>\r\n      </div>\r\n      <div class=\"dialog-section\" style=\"text-align: center;\">\r\n        <p>Since you are NRI customer, your fund transfer is required to be routed through your PIS account only.</p>\r\n        <p>For more query, you may contact to your RM or call <a href=\"tel:+918824242424\">(+918824242424)</a> our customer\r\n        care or <br> email <a href=\"mailto:care@choiceindia.com\">(care&#64;choiceindia.com)</a> us.</p>\r\n      </div>\r\n      <div class=\"dialog-footer clearfix\">\r\n        <button class=\"btn sell\" (click)=\"closeNoBankActive(true)\">Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n}\r\n\r\n\r\n\r\n@if (showSecureProductAuthorizationPopup) {\r\n  <div class=\"sleekbox-overlay-sgb sleekbox-popup-active\">\r\n    <div class=\"sleekbox-popup\">\r\n      <div class=\"popup-sub-row\">\r\n        <div class=\"applicationwrap\">\r\n          <p class=\"heading\">Undertaking for Participation on e-Gsec Platform </p>\r\n          <div class=\"namedate\">\r\n            <div class=\"name\">\r\n              <span>\r\n                To,<br>\r\n                Choice Equity Broking Pvt. Ltd\r\n              </span><br><br>\r\n              Sir/Madam,\r\n            </div>\r\n            <div class=\"date float-right\">\r\n              <span>Date:</span><span>{{config.today | date}}</span>\r\n            </div>\r\n          </div>\r\n          <div class=\"des\">\r\n            <p class=\"text mb2\">Sub: Participation on e-Gsec Platform</p>\r\n            <p class=\"text\">I/We, <span>{{config.name}}</span>, am/are interested to participate on the e-Gsec Platform of\r\n            National Stock Exchange of India Ltd. (Exchange) through Choice Equity Broking Pvt. Ltd for the purpose of non- competitive auction of\r\n            Government of India Dated Securities and Treasury Bills and any other securities as specified from time to\r\n          time.</p>\r\n          <p class=\"text\">I/ We shall abide by the Terms and Conditions of the e-Gsec Platform and authorize the trading\r\n            member to put the bid on behalf of me/us.\r\n          </p>\r\n          <p class=\"text\">\r\n            I/we shall submit the Know Your Client details for the purpose of participation on e-Gsec Platform.\r\n          </p>\r\n          <p class=\"text\">I/We am/are willing to abide by the operating guideline, terms and conditions as mentioned in\r\n            the circular no. NSE/IPO/37593 dated April 23, 2018 and as may be specified by Exchange from time to time in\r\n          this regard.</p>\r\n          <p class=\"text\">I/We shall ensure compliance with the requirements as may be specified from time to time by\r\n            the Government of India (GOI), the Securities and Exchange Board of India (SEBI), the Reserve Bank of India\r\n          (RBI), and/or any other relevant authority.</p>\r\n          <p class=\"text\">I/We undertake that I/we am/are eligible to participate in the scheme of non-competitive\r\n          bidding in auction of government securities as notified by RBI/GOI from time to time.</p>\r\n          <p class=\"text\">I/We am/are aware that I/we am/ are allowed to make only a single bid for the auction, and\r\n            therefore, I/We hereby undertake that I/We shall abide by the same.\r\n          </p>\r\n          <p class=\"text\">I/We shall read and understand the contents of the Notification/Press Release, Circular and/or\r\n            any other guidelines, Information Memorandum, issued by GOI, RBI, SEBI, the Exchange and/or any other\r\n            relevant authority, from time to time, regarding bidding on the Platform with respect to which I/we choose\r\n          to participate. I/We further agree to abide by the terms and conditions, rules and regulations.</p>\r\n          <p class=\"text\">Thanking you,</p>\r\n          <p class=\"text\">Yours faithfully</p>\r\n          <p class=\"text m0\">{{config.name}}</p>\r\n        </div>\r\n        <div class=\"tc\">\r\n          <input type=\"checkbox\" name=\"tc\" value=\"1\" checked readonly> I agree to above terms and conditions.\r\n        </div>\r\n        <div class=\"okbtnwrap\">\r\n          <button class=\"btn btn-gradient okbtn\" (click)=\"updateAuthorization()\">Accept</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n}\r\n\r\n<!-- <app-secured-product-popup ></app-secured-product-popup> -->\r\n";

/***/ })

}]);