(self["webpackChunkjiffy_upgraded"] = self["webpackChunkjiffy_upgraded"] || []).push([[8643],{

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

/***/ 38437:
/*!****************************************************************************!*\
  !*** ./src/app/post-login-module/funds/fund-block/fund-block.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FundBlockComponent: () => (/* binding */ FundBlockComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _fund_block_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fund-block.component.html?ngResource */ 80496);
/* harmony import */ var _fund_block_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fund-block.component.scss?ngResource */ 62625);
/* harmony import */ var _fund_block_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fund_block_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/accordion */ 14580);
/* harmony import */ var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/popover */ 69966);
/* harmony import */ var _pipes_value_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../pipes/value.pipe */ 50615);
/* harmony import */ var _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/shared-data/shared-data.service */ 46013);
/* harmony import */ var _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/utils/utils.service */ 89893);










/**
 * Component to Display funds Available in Equity or Commodity
 */
let FundBlockComponent = class FundBlockComponent {
  /**
   * Constructor for Object Initialization
   */
  constructor(utils, sharedDataService) {
    this.utils = utils;
    this.sharedDataService = sharedDataService;
    // accordionStore: any
    this.ledger_accordion = false;
    this.mtf_accordion = false;
    // this.accordionStore = {
    //   mtf_accordion : false,
    //   ledger_accordion: true
    // }
    this.popupMessages = {
      margin_utilized: "M2M + Booked Loss + Margin required for open positions + Margin required for pending orders + Today’s Transaction Charges",
      available_trading: "Ledger Balance + Margin Against Assets - Margin Utilised",
      early_payin: "80% of sell value of your holdings given on T+1 day",
      margin_against_holding: "Margin received on pledging of stocks, MF, etc",
      cfs: "Credit For Sell i.e Today’s holding Sell benefit",
      unsettled: "Unsettled Bill Amount",
      payLaterFunding: "Amount used for the MTF Orders",
      margin_against_assests: "This amount contains sum of today's holding sell benefit and margin received on pledging of stocks, MF, etc"
    };
  }
  /**
   * Life Cycle Hook for Initialization
   */
  ngOnInit() {}
  /**
   * Life Cycle Hook for Input Changes
   * @param changes SimpleChanges instance for incoming Changes
   */
  ngOnChanges(changes) {
    if (changes['title'] && changes['title'].currentValue) {
      this.title = changes['title'].currentValue;
    }
    if (changes['data'] && changes['data'].currentValue) {
      this.data = changes['data'].currentValue;
      this.data.AbsMarginUsed = Math.abs(this.data.MarginUsed || 0);
      this.payLaterMarginUtilized = Math.abs(this.data.T5HaircutHoldingValue || 0) + Math.abs(this.data.ManualCollateral || 0);
      this.normalMarginUtilized = Math.abs(this.data.MarginUtilized || 0) - (this.payLaterMarginUtilized || 0);
      this.payLaterFunding = Math.abs(this.data?.DepositNotion || 0) - Math.abs(this.data?.MTFFunded || 0);
    }
  }
  toggleAccordion(event, type) {
    if (type === 'ledger') {
      if (event) {
        // Close the 'mtf' accordion if it is open
        this.mtf_accordion = false;
      }
      // Open the 'ledger' accordion
      this.ledger_accordion = event;
    } else {
      if (event) {
        // Close the 'ledger' accordion if it is open
        this.ledger_accordion = false;
      }
      // Open the 'mtf' accordion
      this.mtf_accordion = event;
    }
  }
  static {
    this.ctorParameters = () => [{
      type: _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_4__.UtilsService
    }, {
      type: _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__.SharedDataService
    }];
  }
  static {
    this.propDecorators = {
      title: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input,
        args: ['title']
      }],
      data: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input,
        args: ['data']
      }]
    };
  }
};
FundBlockComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-fund-block',
  template: _fund_block_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  imports: [ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_7__.PopoverModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkActive, ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_9__.AccordionModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _pipes_value_pipe__WEBPACK_IMPORTED_MODULE_2__.ValuePipe],
  styles: [(_fund_block_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_4__.UtilsService, _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__.SharedDataService])], FundBlockComponent);


/***/ }),

/***/ 59717:
/*!****************************************************************!*\
  !*** ./src/app/post-login-module/funds/fund/fund.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FundComponent: () => (/* binding */ FundComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _fund_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fund.component.html?ngResource */ 34163);
/* harmony import */ var _fund_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fund.component.scss?ngResource */ 79225);
/* harmony import */ var _fund_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fund_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 1807);
/* harmony import */ var _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../assets/libs/esm-moment.min.js */ 29483);
/* harmony import */ var _services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/analytics/analytics.service */ 50213);
/* harmony import */ var _pay_in_out_pay_in_out_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pay-in-out/pay-in-out.component */ 48149);
/* harmony import */ var _services_rest_post_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../services/rest/post-login.service */ 4135);
/* harmony import */ var _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../services/shared-data/shared-data.service */ 46013);
/* harmony import */ var _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../services/utils/utils.service */ 89893);
/* harmony import */ var _pipes_value_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../pipes/value.pipe */ 50615);
/* harmony import */ var _fund_block_fund_block_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../fund-block/fund-block.component */ 38437);
/* harmony import */ var _directives_dropdown_dropdown_open_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../directives/dropdown/dropdown-open.directive */ 55720);
/* harmony import */ var _directives_dropdown_dropdown_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../directives/dropdown/dropdown.directive */ 51429);






/** Import Moment JS Library*/


//import { OrderBuysellComponent } from '../order-buysell/order-buysell.component';








/**

 * Component for User Available Funds

 */
let FundComponent = class FundComponent {
  /**
      * Constructor for Object Initialization
      * @param route Router Module Instance
      * @param renderer Renderer2 instance
      * @param rest PostLoginService instance for HTTP Requests
      * @param shared SharedDataService instance
      * @param utils UtilsService instance
      */
  constructor(analytics, route, renderer, rest, shared, utils, activatedRoute) {
    this.analytics = analytics;
    this.route = route;
    this.renderer = renderer;
    this.rest = rest;
    this.shared = shared;
    this.utils = utils;
    this.activatedRoute = activatedRoute;
    /** boolean to show Payout response*/
    this.showThankyou = false;
    /** Pay in Response*/
    this.payinData = "";
    /** is NRI user flag*/
    this.isNRI = false;
    this.fundsData = {};
    this.fundsDataNew = {};
    this.getFunds();
    this.subscriptionList = [];
    this.payInStatusCheck = null;
    // this.getFundsNew();
    this.showThankyou = location.pathname === "/client/funds/payin/response" ? true : false;
    if (this.showThankyou) this.getTransactionDetail();
    let bankData = ((this.utils.getProfileData() || {}).BankDetails || []).filter(bank => {
      return bank.IsDefault == "Yes";
    });
    let userAccountStatus = this.utils.getUserAccountStatus();
    // if(){
    // }
    if ((!userAccountStatus || !userAccountStatus.onboardStatus || userAccountStatus.onboardStatus == 'C') && !((this.utils.getProfileData() || {}).BankDetails || []).length) {
      this.getProfileData();
    }
    this.pledgeConfig = {};
  }
  /**
      * Life Cycle Hook for Initialization
      */
  ngOnInit() {
    this.utils.setTrackMoeEvent("visitedFunds", {
      User_ID: this.utils.getUserId() || "guest",
      IP: this.shared.IPAddress
    });
    this.isMobile = this.utils.isMobileDevice();
    this.utils.pushDataLayerEvent({
      'event': 'visitedFund',
      'platform': this.isMobile ? 'mobileweb' : 'desktopweb',
      'userId': this.utils.generateSHA256Hash(this.utils.getProfileData("MobileNo") || ""),
      'page_path': window.location.pathname,
      'page_url': window.location.href
    });
    this.analytics.emitEvent("visitedFunds", this.utils.getUserId() || "guest", JSON.stringify({
      IP: this.shared.IPAddress
    }), 1);
    this.subscriptionList.push(this.utils.broadcastObservable("fundsViewUpdate").subscribe(data => {
      if (data) {
        this.getFunds();
        // this.getFundsNew();
      }
    }));
    this.subscriptionList.push(this.utils.broadcastObservable("payinStatus").subscribe(data => {
      if (data && (data.state == "SUCCESS" || data.state == "FAILURE")) {
        //this.payInStatusCheck = null;
        this.payinData = data.message + (data.state == "FAILURE" ? " Due to " + data.res.ResponseCodeDescription : "");
        window.localStorage.removeItem("pgTransactionId");
        let eventName = data.state == "SUCCESS" ? "FundDepositSuccess" : "FundDepositFailure";
        let currentDate = new Date();
        if (eventName == "FundDepositSuccess") {
          this.utils.setTrackMoeEvent(eventName, {
            UserId: this.shared.isClientFromApp ? this.shared.appClientId : this.utils.getUserId() || "guest",
            transactionId: data.res.TransactionId,
            amount: data.res.Amount,
            hour: currentDate.getHours(),
            min: currentDate.getMinutes()
          });
          this.utils.pushDataLayerEvent({
            'event': 'FundDepositSuccess',
            'platform': this.isMobile ? 'mobileweb' : 'desktopweb',
            'userId': this.utils.generateSHA256Hash(this.utils.getProfileData("MobileNo") || ""),
            'page_path': window.location.pathname,
            'page_url': window.location.href
          });
        }
        if (this.timeoutSubscription) this.timeoutSubscription.unsubscribe();
      }
    }));
    this.subscriptionList.push(this.utils.broadcastObservable("payInSubmitted").subscribe(data => {
      if (data) {
        /**Event publish when payin clicked */
        this.utils.pushDataLayerEvent({
          'event': 'clickedOn',
          'buttonName': 'fundsDepositSubmit',
          'platform': this.isMobile ? 'mobileweb' : 'desktopweb',
          'userId': this.utils.generateSHA256Hash(this.utils.getProfileData("MobileNo") || ""),
          'page_path': window.location.pathname,
          'page_url': window.location.href
        });
        this.payInStatusCheck = data;
        this.payInStatusCheck.timer = 300;
        this.payInStatusCheck.time = new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_2__["default"]().startOf("day").seconds(this.payInStatusCheck.timer).format("mm:ss");
        this.setTimeoutSubscription();
      }
    }));
    this.activatedRoute.queryParams.subscribe(params => {
      if (params["open"]) {
        if (params["open"] === "deposit") {
          this.openFundDrawer(1);
        }
      }
    });
  }
  reloadLocation() {
    this.getFunds();
    // this.getFundsNew();
    this.payInStatusCheck = null;
    this.payinData = null;
  }
  /**
      * Life Cycle Hook for destruction
      */
  ngOnDestroy() {
    this.subscriptionList.forEach(subscription => {
      if (subscription) subscription.unsubscribe();
    });
  }
  setTimeoutSubscription() {
    this.timeoutSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.timer)(1000, 1000).subscribe(value => {
      if (this.payInStatusCheck.timer >= 1) {
        this.payInStatusCheck.timer--;
        this.payInStatusCheck.time = new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_2__["default"]().startOf("day").seconds(this.payInStatusCheck.timer).format("mm:ss");
      } else if (!this.payInStatusCheck.timer) {
        this.payinData = "Sorry your Transaction has been timed out.";
        window.localStorage.removeItem("pgTransactionId");
        this.timeoutSubscription.unsubscribe();
        this.utils.broadcast("payinTimedOut", true);
      }
    });
  }
  /**
      * Get Funds Data for Commodity and Equity
      */
  getFunds() {
    let usrCode = (localStorage.getItem("ng2-webstorage|usercode") || "").replace(/\"/g, "");
    let request = {
      UserId: this.utils.getUserId(),
      SessionId: this.utils.getSessionId() || "",
      type: 2,
      accessToken: this.utils.getTwoFAAccessToken()
    };
    let userAccountStatus = this.utils.getUserAccountStatus();
    if (!(!userAccountStatus || !userAccountStatus.onboardStatus || userAccountStatus.onboardStatus == 'C')) {
      return;
    }
    this.rest.getFundsEquityData(request).subscribe(data => {
      if (data.Status === "Success" && data.Response) {
        this.fundsData.lFundsViewDataEquity = data.Response.lFundsViewDataNew;
        this.fundsData = JSON.parse(JSON.stringify(this.fundsData));
        // } else if (this.utils.isSessionExpired(data.Reason)) {
        //   if(this.shared.isSSO){
        //     this.utils.sessionExpireHandling()
        //     return
        //   }
        //   this.utils.error("Session Expired", "Please Login Again.");
        //   this.utils.postFeatureCount();
        //   this.utils.clearLoginDetails();
        //   this.shared.userId = null;
        //   this.route.navigate(["auth/login"]);
      }
    }, err => {
      this.utils.error("Error", "Something went wrong");
    });
    // commented below code because we are using combined API to show funds balance. (08/03/2021)
    // this.rest.getFundsCommodityData(request).subscribe((data) => {
    //   if (data.Status === "Success" && data.Response) {
    //     this.fundsData.lFundsViewDataCommodity = data.Response.lFundsViewDataCommodity;
    //     this.fundsData = JSON.parse(JSON.stringify(this.fundsData));
    //   } else if (this.utils.isSessionExpired(data.Reason)) {
    //     this.utils.error('Session Expired', 'Please Login Again.');
    //     this.utils.postFeatureCount();
    //     this.utils.clearLoginDetails();
    //     this.shared.userId = null;
    //     this.route.navigate(['auth/login']);
    //   }
    // }, (err) => {
    //   this.utils.error('Error', 'Something went wrong');
    // });
  }
  // /**
  //  * Get Funds Data for Commodity and Equity
  //  */
  // public getFundsNew(): void {
  //   let request = { "UserId": this.utils.get('userId'), "SessionId": this.utils.getSessionId() || '', "GroupId": this.utils.get('groupId') }
  //   this.rest.getNewFundsData(request).subscribe((data) => {
  //     if (data.Status === "Success" && data.Response) {
  //       this.fundsDataNew.lFundsViewDataEquity = data.Response.lFundsViewDataEquity;
  //       this.fundsDataNew.lFundsViewDataCommodity = data.Response.lFundsViewDataCommodity;
  //       this.fundsDataNew = JSON.parse(JSON.stringify(this.fundsDataNew));
  //     } else if (this.utils.isSessionExpired(data.Reason)) {
  //       this.utils.error('Session Expired', 'Please Login Again.');
  //       this.utils.postFeatureCount();
  //       this.utils.clearLoginDetails();
  //       this.shared.userId = null;
  //       this.route.navigate(['auth/login']);
  //     }
  //   }, (err) => {
  //     this.utils.error('Error', 'Something went wrong');
  //   });
  //   this.rest.getFundsEquityDataNew(request).subscribe((data) => {
  //     if (data.Status === "Success" && data.Response) {
  //       this.fundsDataNew.lFundsViewDataEquity = data.Response.lFundsViewDataEquity;
  //       this.fundsDataNew = JSON.parse(JSON.stringify(this.fundsDataNew));
  //     } else if (this.utils.isSessionExpired(data.Reason)) {
  //       this.utils.error('Session Expired', 'Please Login Again.');
  //       this.utils.postFeatureCount();
  //       this.utils.clearLoginDetails();
  //       this.shared.userId = null;
  //       this.route.navigate(['auth/login']);
  //     }
  //   }, (err) => {
  //     this.utils.error('Error', 'Something went wrong');
  //   });
  //   this.rest.getFundsCommodityDataNew(request).subscribe((data) => {
  //     if (data.Status === "Success" && data.Response) {
  //       this.fundsDataNew.lFundsViewDataCommodity = data.Response.lFundsViewDataCommodity;
  //       this.fundsDataNew = JSON.parse(JSON.stringify(this.fundsDataNew));
  //     } else if (this.utils.isSessionExpired(data.Reason)) {
  //       this.utils.error('Session Expired', 'Please Login Again.');
  //       this.utils.postFeatureCount();
  //       this.utils.clearLoginDetails();
  //       this.shared.userId = null;
  //       this.route.navigate(['auth/login']);
  //     }
  //   }, (err) => {
  //     this.utils.error('Error', 'Something went wrong');
  //   });
  // }
  /**
      * Open Payin/Payout Drawer
      * @param action Payin=1, PayOut=0
      */
  openFundDrawer(action) {
    let userAccountStatus = this.utils.getUserAccountStatus();
    // if(){
    // }
    if ((!userAccountStatus || !userAccountStatus.onboardStatus || userAccountStatus.onboardStatus == 'C') && this.utils.getProfileData("NRIStatus")) {
      // to check whether user is NRI or not. if yes then show alert (26/04/2021)
      this.showNoBankActive(true);
      return;
    }
    this.action = action;
    let bankData = ((this.utils.getProfileData() || {}).BankDetails || []).filter(bank => {
      return bank.IsDefault == "Yes";
    });
    if (bankData.length || !(!userAccountStatus || !userAccountStatus.onboardStatus || userAccountStatus.onboardStatus == 'C')) {
      this.fundsData = JSON.parse(JSON.stringify(this.fundsData));
      this.fundDrawer.open();
      let eventName = action == 1 ? "Pay In Button Clicked" : "Payout Button Clicked";
      // this.analytics.fundpageActivity(eventName);
    } else {
      this.analytics.emitEvent(action === 1 ? "visitedDeposit" : "visitedWithdraw", this.utils.getUserId() || "guest", JSON.stringify({
        IP: this.shared.IPAddress
      }), 1);
      if (action && action === 1) {
        this.utils.pushDataLayerEvent({
          'event': 'visitedDeposit',
          'platform': this.isMobile ? 'mobileweb' : 'desktopweb',
          'userId': this.utils.generateSHA256Hash(this.utils.getProfileData("MobileNo") || ""),
          'page_path': window.location.pathname,
          'page_url': window.location.href
        });
      }
      if (!userAccountStatus || !userAccountStatus.onboardStatus || userAccountStatus.onboardStatus == 'C') {
        this.showNoBankActive();
      }
    }
    this.utils.setTrackMoeEvent(action === 1 ? "visitedDeposit" : "visitedWithdraw", {
      User_ID: this.utils.getUserId() || "guest",
      IP: this.shared.IPAddress
    });
    this.analytics.emitEvent(action === 1 ? "visitedDeposit" : "visitedWithdraw", this.utils.getUserId() || "guest", JSON.stringify({
      IP: this.shared.IPAddress
    }), 1);
    if (action && action === 1) {
      this.utils.pushDataLayerEvent({
        'event': 'visitedDeposit',
        'platform': this.isMobile ? 'mobileweb' : 'desktopweb',
        'userId': this.utils.generateSHA256Hash(this.utils.getProfileData("MobileNo") || ""),
        'page_path': window.location.pathname,
        'page_url': window.location.href
      });
    }
  }
  /**
      * Get User Profile if Not Found in LocalStorage
      */
  getProfileData() {
    let request = {
      UserId: this.utils.getUserId(),
      SessionId: this.utils.getSessionId() || "",
      GroupId: this.utils.get("groupId")
    };
    this.rest.getProfile(request).subscribe(data => {
      if (data.Status === "Success" && data.Response) {
        let profile = data.Response || {};
        if (profile.Name) {
          let initials = profile.Name.match(/\b\w/g) || [];
          profile.initials = ((initials.shift() || "") + (initials.pop() || "")).toUpperCase();
        }
        if (profile.MobileNo) {
          profile.formattedMobileNo = profile.MobileNo.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
        }
        if (profile.AadharNo) {
          profile.formattedAadharNo = profile.AadharNo.replace(/(\d{4})(\d{4})(\d{4})/, "$1 $2 $3");
        }
        let bank = profile.BankDetails.find(bank => {
          return bank.IsDefault == "Yes";
        });
        profile = {
          ...profile,
          ...(bank || {})
        };
        this.utils.saveProfile(profile);
        this.utils.setUserAttributes(data.Response); // to set moengage user attribute (21/06/2021)
      } else {
        this.utils.error("Error", data.Reason);
      }
    }, err => {});
  }
  /** show popup
      * @param isNRIUser flag to indicate show dialog box of NRI
      */
  showNoBankActive(isNRIUser) {
    this.renderer.setStyle(document.body, "overflow", "hidden");
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
    this.renderer.setStyle(document.body, "overflow", "auto");
    if (isNRIUser) {
      this.isNRI = false;
      return;
    }
    this.noBankActive = false;
  }
  /**
      * Close Payout request Payout
      */
  closeThankYou() {
    this.showThankyou = false;
    this.renderer.setStyle(document.body, "overflow", "auto");
    this.renderer.removeClass(document.body, "modal_open");
    this.route.navigate(["/client/funds"]);
  }
  /**
      * Get Transaction Details after PayIn Response
      */
  getTransactionDetail() {
    if (JSON.parse(localStorage.getItem("pgTransactionId"))) {
      let payload = {
        UserId: this.utils.getUserId(),
        TransactionId: JSON.parse(localStorage.getItem("pgTransactionId"))
      };
      this.rest.getpaymentGatewayResponse(payload).subscribe(res => {
        this.renderer.setStyle(document.body, "overflow", "hidden");
        if (res.Status == "Success" && res.Response) {
          window.localStorage.removeItem("pgTransactionId");
          if (res.Response.Status == "SUCCESS") {
            this.payinData = "Thank You, Your Transaction is Complete.";
            this.analytics.submitPayInPayOut("Payin Response From Atom-Success", payload);
            let eventName = res.Response.Status == "SUCCESS" ? "FundDepositSuccess" : "FundDepositFailure";
            let currentDate = new Date();
            if (eventName == "FundDepositSuccess") {
              this.utils.setTrackMoeEvent(eventName, {
                UserId: this.shared.isClientFromApp ? this.shared.appClientId : this.utils.getUserId() || "guest",
                transactionId: res.Response.TransactionId,
                amount: res.Response.Amount,
                hour: currentDate.getHours(),
                min: currentDate.getMinutes()
              });
              this.utils.pushDataLayerEvent({
                'event': 'FundDepositSuccess',
                'platform': this.isMobile ? 'mobileweb' : 'desktopweb',
                'userId': this.utils.generateSHA256Hash(this.utils.getProfileData("MobileNo") || ""),
                'page_path': window.location.pathname,
                'page_url': window.location.href
              });
            }
          } else if (res.Response.Status == "FAILURE") {
            this.payinData = "Sorry, Your Transaction Failed.";
            this.analytics.submitPayInPayOut("Payin Response From Atom-Failure", payload);
          }
        } else if (res.Reason == "Data not found.") {
          this.payinData = "Sorry, Your Transaction is Incomplete.";
          this.analytics.submitPayInPayOut("Payin Response From Atom-Incomplete", payload);
        }
      });
    } else {
      this.closeThankYou();
    }
  }
  authorizePledge() {
    let userProfile = this.utils.getProfile();
    this.pledgeConfig.depository = userProfile.Depository;
    this.pledgeConfig.url = this.pledgeConfig.depository == "CDSL" ? "https://www.cdslindia.com/MarginPledge/OTP.aspx" : "https://eservices.nsdl.com/SecureWeb/HomeLogin.jsp?loginpg=1&image=ideas";
    this.openPledgeModal();
  }
  openPledgeModal() {
    this.pledgeConfig.pledgeModal = true;
    this.renderer.setStyle(document.body, "overflow", "hidden");
  }
  closePledgeModal() {
    this.pledgeConfig.pledgeModal = false;
    this.renderer.setStyle(document.body, "overflow", "auto");
  }
  redirectToPortal() {
    let newWindow = window.open(this.pledgeConfig.url, "_blank");
    if (this.utils.checkIfPopupsEnableOrNot(newWindow)) window.open(this.pledgeConfig.url, "_self"); // if popups not enable then open window in current window (28/05/2021)
    this.closePledgeModal();
  }
  clickedPledgeUnpledgeMenu(type) {
    if (type) {
      this.utils.setTrackMoeEvent("visitedMarginAgainstHolding", {
        User_ID: this.utils.getUserId() || "guest",
        IP: this.shared.IPAddress
      });
      this.analytics.emitEvent("visitedMarginAgainstHolding", this.utils.getUserId() || "guest", JSON.stringify({
        IP: this.shared.IPAddress
      }), 1);
    } else {
      this.utils.setTrackMoeEvent("visitedUnpledge", {
        User_ID: this.utils.getUserId() || "guest",
        IP: this.shared.IPAddress
      });
      this.analytics.emitEvent("visitedUnpledge", this.utils.getUserId() || "guest", JSON.stringify({
        IP: this.shared.IPAddress
      }), 1);
    }
  }
  pledgeHandling(flag) {
    let userAccountStatus = this.utils.getUserAccountStatus();
    // if(){
    // }
    if (!userAccountStatus || !userAccountStatus.onboardStatus || userAccountStatus.onboardStatus == 'C') {
      this.clickedPledgeUnpledgeMenu(flag);
      this.utils.goToPledgeUnpledge(flag);
    } else {
      this.utils.broadcast('generateSubs', {});
    }
  }
  static {
    this.ctorParameters = () => [{
      type: _services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_3__.AnalyticsService
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.Router
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Renderer2
    }, {
      type: _services_rest_post_login_service__WEBPACK_IMPORTED_MODULE_5__.PostLoginService
    }, {
      type: _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_6__.SharedDataService
    }, {
      type: _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_7__.UtilsService
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute
    }];
  }
  static {
    this.propDecorators = {
      fundDrawer: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild,
        args: [_pay_in_out_pay_in_out_component__WEBPACK_IMPORTED_MODULE_4__.PayInOutComponent, {
          static: false
        }]
      }]
    };
  }
};
FundComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
  selector: "app-fund",
  template: _fund_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  imports: [_directives_dropdown_dropdown_directive__WEBPACK_IMPORTED_MODULE_11__.Dropdown, _directives_dropdown_dropdown_open_directive__WEBPACK_IMPORTED_MODULE_10__.DropdownOpen, _fund_block_fund_block_component__WEBPACK_IMPORTED_MODULE_9__.FundBlockComponent, _pay_in_out_pay_in_out_component__WEBPACK_IMPORTED_MODULE_4__.PayInOutComponent, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterLink, _pipes_value_pipe__WEBPACK_IMPORTED_MODULE_8__.ValuePipe],
  styles: [(_fund_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__metadata)("design:paramtypes", [_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_3__.AnalyticsService, _angular_router__WEBPACK_IMPORTED_MODULE_13__.Router, _angular_core__WEBPACK_IMPORTED_MODULE_14__.Renderer2, _services_rest_post_login_service__WEBPACK_IMPORTED_MODULE_5__.PostLoginService, _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_6__.SharedDataService, _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_7__.UtilsService, _angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute])], FundComponent);


/***/ }),

/***/ 38643:
/*!**********************************************************!*\
  !*** ./src/app/post-login-module/funds/funds.routing.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FundsRoutes: () => (/* binding */ FundsRoutes)
/* harmony export */ });
/* harmony import */ var src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/guards/auth.guard */ 61620);
/* harmony import */ var _fund_fund_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fund/fund.component */ 59717);


const routeConfig = {
  header: true,
  footer: true,
  indices: false,
  betaFooter: false,
  ticker: true,
  watchlist: false,
  freshChat: false
};
const FundsRoutes = [{
  path: "",
  pathMatch: "full",
  component: _fund_fund_component__WEBPACK_IMPORTED_MODULE_1__.FundComponent,
  canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  data: {
    config: routeConfig
  }
}, {
  path: "payin/response",
  component: _fund_fund_component__WEBPACK_IMPORTED_MODULE_1__.FundComponent,
  canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  data: {
    config: routeConfig
  }
}];

/***/ }),

/***/ 62625:
/*!*****************************************************************************************!*\
  !*** ./src/app/post-login-module/funds/fund-block/fund-block.component.scss?ngResource ***!
  \*****************************************************************************************/
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
.common-style, div.fund-section .flex-div .chart-card.titlered, div.fund-section .flex-div .chart-card.titlegreen, div.fund-section .flex-div .chart-card.titlepurple, div.fund-section .flex-div .chart-card.titleyellow, div.fund-section .flex-div .chart-card.titledarkblue, div.fund-section .flex-div .chart-card.titleblue {
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
}

.brdb {
  border-bottom: #ebebeb solid 1px;
}

.brdright {
  border-right: #e9e9e9 solid 1px;
}

.flex-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

div.fund-section {
  font-weight: 600;
}
div.fund-section h4 {
  font-size: 15px;
  margin-bottom: 15px;
}
@media (min-width: 1550px) {
  div.fund-section h4 {
    font-size: 14px;
  }
}
div.fund-section h5 {
  font-size: 14px;
  margin-top: 15px;
  margin-bottom: 15px;
}
div.fund-section h5 > span {
  color: #ff6d6e;
}
@media (min-width: 1550px) {
  div.fund-section h5 {
    font-size: 14px;
  }
}
div.fund-section .flex-div .chart-card {
  padding: 10px 24px 10px 24px;
  line-height: 28px;
  margin-bottom: 0;
  border-left: 2px solid #cccccc;
}
@media (max-width: 1550px) and (min-width: 1200px) {
  div.fund-section .flex-div .chart-card {
    padding: 8px;
  }
}
@media (max-width: 1550px) and (min-width: 1200px) {
  div.fund-section .flex-div .chart-card > div {
    font-size: 10px;
    line-height: 1.8;
  }
}
div.fund-section .flex-div .chart-card.titleblue {
  color: #79b7ee;
}
div.fund-section .flex-div .chart-card.titledarkblue {
  color: #538ded;
}
div.fund-section .flex-div .chart-card.titleyellow {
  color: #fec35c;
}
div.fund-section .flex-div .chart-card.titlepurple {
  color: #9d81ee;
}
div.fund-section .flex-div .chart-card.titlegreen {
  color: #62dfd6;
}
div.fund-section .flex-div .chart-card.titlered {
  color: #ff7c7c;
}
div.fund-section .flex-div .chart-card.blue-border {
  border-color: #79b7ee;
}
div.fund-section .flex-div .chart-card.darkblue-border {
  border-color: #538ded;
}
div.fund-section .flex-div .chart-card.yellow-border {
  border-color: #fec35c;
}
div.fund-section .flex-div .chart-card.purple-border {
  border-color: #9d81ee;
}
div.fund-section .flex-div .chart-card.green-border {
  border-color: #62dfd6;
}
div.fund-section .flex-div .chart-card.red-border {
  border-color: #ff7c7c;
}
div.fund-section .flex-div .chart-card .values {
  font-weight: normal;
  font-size: 22px;
  color: #000000;
}
@media (max-width: 1550px) and (min-width: 1024px) {
  div.fund-section .flex-div .chart-card .values {
    font-size: 15px;
    line-height: 1.8;
    margin: 0;
  }
}
div.fund-section .flex-div .chart-card .rupee {
  font-weight: normal;
  font-size: 18px;
}
@media (max-width: 1550px) and (min-width: 1024px) {
  div.fund-section .flex-div .chart-card .rupee {
    font-size: 14px;
    line-height: 1.5;
  }
}
div.fund-section .flex-div .chart-card .icon-info {
  border-color: #ff7c7c !important;
  color: #ff7c7c !important;
}
div.fund-section .shft-rght {
  border-left: 2px solid #ccc;
  padding: 5px 0px 0 6px;
  padding-bottom: 0px;
  margin: 0;
  margin-left: 5px;
}
div.fund-section .shft-rght br {
  display: none;
}
@media (min-width: 1200px) and (max-width: 1380px) {
  div.fund-section .shft-rght br {
    display: block;
  }
}
@media (max-width: 767px) {
  div.fund-section .shft-rght br {
    display: block;
  }
}
div.fund-section .shft-rght.mrg-btm {
  margin-bottom: 5px;
  padding-bottom: 5px;
}
div.fund-section .panel-body {
  min-height: 20rem;
  padding: 7px 10px;
}
@media (max-width: 1300px) {
  div.fund-section .panel-body {
    min-height: 20rem;
  }
}
div.fund-section .amnt-trade {
  font-size: 30px;
}
@media (max-width: 1300px) {
  div.fund-section .amnt-trade {
    font-size: 20px;
  }
}
@media (max-width: 992px) {
  div.fund-section .amnt-trade {
    font-size: 30px;
  }
}

@media (max-width: 1200px) {
  .pl-0 {
    padding-left: 15px;
  }
}
@media (max-width: 1200px) and (max-width: 767px) {
  .pl-0 {
    padding-left: 8px;
  }
}
@media (max-width: 1200px) {
  .pr-0 {
    padding-right: 15px;
  }
  .padding-0 {
    padding: 0px 15px;
  }
}
@media (max-width: 1200px) and (max-width: 1024px) {
  .padding-0 {
    padding: 0px;
  }
}
@media (max-width: 1200px) {
  .card .clearfix {
    padding: 15px;
  }
  div.fund-section h5 {
    font-size: 14px;
  }
}
@media (max-width: 560px) {
  .card .col-xs-12 {
    padding: 0px;
  }
  .card .col-xs-12 .col-xs-6 {
    width: 100%;
    text-align: left;
  }
  hr {
    margin-top: 10px;
    margin-bottom: 10px;
  }
}
.equity-w .flex-ht {
  height: calc(100% - 0px);
}

.active-data {
  color: #004393;
}

.bb-none {
  border-bottom: none;
}

.float-right {
  float: right;
}

.pl-2 {
  padding-left: 2px;
}

.mt0 {
  margin-top: 0px;
}

.mr0 {
  margin-right: 0px;
}

.panel-heading,
p {
  opacity: 1;
  font-size: 14px;
  font-weight: 400;
  margin-left: 0;
  margin-right: 0;
  letter-spacing: 0;
  font-family: "SF Pro Display";
}
@media (max-width: 1399px) {
  .panel-heading,
  p {
    font-size: 13px;
  }
}
@media (max-width: 1300px) {
  .panel-heading,
  p {
    font-size: 11px;
  }
}

.panel-heading {
  font-weight: 600;
  background-color: #fff;
  border-bottom: none;
  padding: 10px;
  letter-spacing: 0;
}

.p-1rem {
  padding: 1.5rem;
}

.flex {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.w-6rem {
  /* gap: 12rem !important; */
  /* display: grid !important; */
  width: 6rem;
  height: 6rem;
  background: white;
  border-radius: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-stable {
  gap: 0.5rem !important;
  display: grid !important;
  width: 80%;
  margin: 0 auto;
}
@media (min-width: 768px) and (max-width: 992px) {
  .btn-stable {
    width: 35%;
  }
}
@media (max-width: 767px) {
  .btn-stable {
    width: 65%;
  }
}

.border-radius-4x {
  border-radius: 4px;
}
@media (max-width: 767px) {
  .border-radius-4x {
    margin-bottom: 20px;
  }
}

.padding-10 {
  padding: 10px;
  padding-top: 37px;
  padding-bottom: 36px;
}
@media (max-width: 992px) {
  .padding-10 {
    margin-bottom: 20px;
  }
}
.padding-10 .icon-ques {
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 8px;
  font-size: 16px;
  font-weight: 400;
  font-family: "SF Pro Display" !important;
  color: #333333;
  margin: 2rem 0;
}
@media (max-width: 1300px) {
  .padding-10 .icon-ques {
    font-size: 11px;
  }
}
@media (max-width: 992px) {
  .padding-10 .icon-ques {
    font-size: 16px;
  }
}

.center-div {
  display: flex;
  align-items: center;
  justify-content: center;
}

.margin-bottom-1 {
  margin-bottom: 1.5rem;
}

.bg-blue-light {
  background: rgba(0, 67, 147, 0.1882352941);
}

.btn-block {
  width: 90%;
  margin: 11px;
  /* padding: 2px; */
}

.pr0-n {
  padding-right: 0 !important;
}
@media (max-width: 768px) {
  .pr0-n {
    padding-right: 8px !important;
  }
}

@media (max-width: 1300px) {
  .fund-section .btn {
    font-size: 12px;
  }
}
@media (max-width: 992px) {
  .fund-section .btn {
    font-size: 14px;
  }
}
@media (max-width: 992px) {
  .fund-section .panel {
    margin-top: 0;
  }
}
.fund-section .panel .panel-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
@media (max-width: 992px) {
  .fund-section .panel .panel-heading {
    font-size: 14px;
  }
}
.fund-section .panel .panel-heading .icon-q {
  display: flex;
  align-items: center;
  column-gap: 8px;
  font-family: "SF Pro Display" !important;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0;
}
@media (max-width: 1300px) {
  .fund-section .panel .panel-heading .icon-q {
    font-size: 11px;
  }
}
@media (max-width: 992px) {
  .fund-section .panel .panel-heading .icon-q {
    font-size: 14px;
  }
}
@media (max-width: 992px) {
  .fund-section .panel .panel-body {
    min-height: auto;
  }
}
.fund-section .panel .panel-body .flex .icon-q {
  display: flex;
  align-items: center;
  column-gap: 8px;
  font-family: "SF Pro Display" !important;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0;
}
@media (max-width: 1300px) {
  .fund-section .panel .panel-body .flex .icon-q {
    font-size: 11px;
  }
}
@media (max-width: 992px) {
  .fund-section .panel .panel-body .flex .icon-q {
    font-size: 14px;
  }
}
@media (max-width: 992px) {
  .fund-section .panel .panel-body .flex p {
    font-size: 14px;
  }
}
.fund-section .panel.adoptive-height .panel-body {
  min-height: inherit;
}

/* Change the accordion heading label color */
.accordion-header .accordion-details .fa-chevron-custom:before {
  content: "\\f078";
}
.accordion-header .accordion-details.panel-open .fa-chevron-custom:before {
  content: "\\f077" !important;
}

.mtf-acc-head {
  border-radius: 0;
  overflow: hidden;
  border: 0;
  margin-bottom: 0 !important;
}
.mtf-acc-head .mtf-acc-grp {
  border-radius: 0;
  height: fit-content;
  border: 0;
}

.panel-border {
  border: 0;
  border-radius: 8px;
}

.panel-inner {
  border-radius: 8px;
  padding: 20px;
}

.mtf-acc-div accordion {
  border: 0 !important;
}
.mtf-acc-div accordion .panel-body {
  width: 30.6rem;
  border-top: 0;
  font-size: 16px;
  height: 10rem !important;
  overflow: hidden;
}
.mtf-acc-div .mtf-pan-body {
  border: 0 !important;
  padding: 0 1rem !important;
  color: #8a979f;
}

.ledger-card accordion {
  border: 0 !important;
}

.ml-icon {
  margin-left: 1rem;
}

.mr-value {
  margin-right: 2rem;
}`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 79225:
/*!*****************************************************************************!*\
  !*** ./src/app/post-login-module/funds/fund/fund.component.scss?ngResource ***!
  \*****************************************************************************/
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
@media (max-width: 991px) and (min-width: 769px) {
  .col-lg-6.col-md-6.col-sm-12.col-xs-12.eq {
    margin-bottom: 50px;
  }
}
.company-page-wrap .heading {
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  color: #3E404F;
}
@media (max-width: 767px) {
  .company-page-wrap {
    margin-top: 3rem;
  }
}

.page-title {
  color: #797979;
  margin-top: 0.5rem;
  font-weight: 400;
}

.btn {
  margin-right: 0px;
  margin-left: 15px;
}

.transaction-btn {
  border: 1px solid #8a979f;
  padding: 10px 40px;
  border-radius: 25px;
  color: #8a979f;
  background: transparent;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  margin: 15px auto;
  display: block;
}
@media (max-width: 767px) {
  .transaction-btn {
    font-size: 14px;
    padding: 5px 15px;
  }
}
.transaction-btn:hover {
  color: #fe646e;
  border: 1px solid #fe646e;
  background: transparent;
  color: #004393;
  border: 1px solid #004393;
}

@media (max-width: 1200px) {
  .pl-0 {
    padding-left: 15px;
  }
  .pr-0 {
    padding-right: 15px;
  }
}
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .col-lg-6.col-md-6.col-sm-12.col-xs-12.eq {
    margin-bottom: 50px;
  }
  .section-one > .col-md-12 {
    padding-left: 15px;
  }
}
@media (max-width: 767px) {
  .col-lg-6.col-md-6.col-sm-12.col-xs-12.eq {
    margin-bottom: 50px;
  }
  .pay-btns {
    position: fixed;
    top: 86px;
    z-index: 99;
    width: 100%;
    padding: 10px;
    left: 0;
    background: white;
    border-top: 1px solid #E5E5E5;
  }
  .pay-btns .btn-yellow-bg {
    width: 50%;
    float: left;
    margin: 0px;
    padding: 15px 30px;
  }
  .pay-btns .btn {
    width: 28%;
    margin: 0px auto;
    margin-right: 17px;
  }
}
@media (min-width: 1200px) {
  .company-page-wrap {
    padding-left: 0px;
    padding-right: 0px;
  }
}
@media (max-width: 1200px) {
  .company-page-wrap {
    padding-top: 1rem;
  }
}

.brdr {
  border-right: #e6e6e7 solid 1px;
}
@media (min-width: 1023px) and (max-width: 1024px) {
  .brdr {
    border-right: #ffffff solid 1px;
  }
}

.pay-btns {
  padding-right: 15px;
  padding-right: 0;
}

.payin-transaction {
  text-align: center;
}
.payin-transaction h3 {
  color: #fe595d;
  margin-top: 0px;
}
.payin-transaction .timer {
  margin: 15px 0;
  color: #000000;
}
.payin-transaction p {
  margin: 10px 0;
}

.link {
  margin-left: 10px;
}
.link a {
  color: #ff6d6e;
  font-weight: bold;
  text-decoration: none;
  display: inline-block;
}

.pledge-link {
  color: #ff6d6e;
  font-weight: bold;
  text-decoration: none;
  display: inline-block;
}
@media (max-width: 360px) {
  .pledge-link {
    margin-bottom: 15px;
  }
}
.pledge-link i {
  margin-right: 8px;
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
  color: #fe7f7d;
  color: #004393;
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
  font-size: 15px;
  line-height: 1.5;
}
.btn-group.has-dropdown > .dropdown-menu > li > button:hover {
  background: rgba(249, 235, 33, 0.2);
}

.buy1 {
  color: #ffffff !important;
  background: #004393 !important;
}

.btn-group.has-dropdown > a {
  padding: 8px 10px;
}`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 80496:
/*!*****************************************************************************************!*\
  !*** ./src/app/post-login-module/funds/fund-block/fund-block.component.html?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"fund-section \">\r\n  <!--   <div class=\"row \">\r\n    <div class=\"col-xs-12\">\r\n      <h4 class=\"page-title mb35\">{{title}}</h4>\r\n\r\n    </div>\r\n  </div> -->\r\n\r\n\r\n\r\n  <div class=\"row flex\">\r\n    <div class=\"col-md-3 col-xs-12 pr0-n\">\r\n\r\n      <div class=\" bg-blue-light border-radius-4x\">\r\n        <div class=\"padding-10 \">\r\n\r\n          <div class=\"center-div\">\r\n            <div class=\"w-6rem margin-bottom-1\">\r\n              <img src=\"../../assets/images/wallet_blue.png\" class=\"img-responsive\" alt=\"wallet\" height=\"36\" width=\"36\">\r\n            </div>\r\n          </div>\r\n          <h3 class=\" text-center active-data mt0 amnt-trade\"><i class=\"fa fa-inr\" aria-hidden=\"true\"></i> {{(data?.FundsAvailable|\r\n            value:'1.2-2')||0.00}}</h3>\r\n          <!--     <h5 class=\" mb35 text-center\">Available for trading <i class=\"fa fa-question-circle pl-2\"  ngx-tooltip tooltipTitle=\"EDIT WATCHLIST NAME\" tooltipPlacement=\"right\" ></i></h5>\r\n       -->\r\n\r\n          <p class=\"icon-ques\">Available For Trading \r\n            <img src=\"assets/images/research-report/tootip-question.svg\" alt=\"\" class=\"img-responsive\"\r\n            popoverTitle=\"Available for Trading\" [popover]=\"popupMessages?.available_trading\"\r\n            outsideClick=\"true\" container=\"body\" width=\"12\" height=\"12\">\r\n          </p>\r\n          <div class=\"btn-stable\">\r\n            <button class=\"btn sell mr0\" [routerLink]=\"['/client/reports/payInOut']\" routerLinkActive=\"active\"\r\n              (click)=\"utils.setTrackMoeEvent('visitedTransactionhistory', { 'User_ID': this.utils.getUserId() || 'guest', 'IP': this.sharedDataService.IPAddress });\">Transaction History</button>\r\n          </div>\r\n\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-9 col-xs-12\">\r\n        <div class=\"row\">\r\n\r\n          <div class=\"col-md-12 col-xs-12\">\r\n            <div class=\"panel ledger-card\">\r\n              <accordion class=\"accordion-header\"  >\r\n                <accordion-group class=\"accordion-details\" (isOpenChange)=\"toggleAccordion($event,'ledger')\" [isOpen]=\"ledger_accordion\">\r\n                  <div class=\"panel-heading\" accordion-heading>Ledger Balance\r\n                    <span class=\"float-right\"><i class=\"fa fa-inr\"\r\n                    aria-hidden=\"true\"></i> {{(data?.LedgerBalance| value:'1.2-2')||0.00}}<span class=\"float-right pull-right ml-icon\"><i class=\"fa fa-chevron-custom\" aria-hidden=\"true\"></i></span></span>\r\n                  </div>\r\n    \r\n                  <div class=\"panel\">\r\n                    <div class=\"panel-body\">\r\n                      <div class=\"flex\">\r\n                        <p>Today's Balance</p>\r\n                        <p><span class=\"float-right\"><i class=\"fa fa-inr\" aria-hidden=\"true\"></i>\r\n                          {{(data?.TodaysBalance| value:'1.2-2')||0.00}}</span></p>\r\n                      </div>\r\n                      <div class=\"flex\">\r\n                        <p>Today's Pay-in</p>\r\n                        <p><span class=\"float-right\"><i class=\"fa fa-inr\" aria-hidden=\"true\"></i>\r\n                          {{(data?.TodaysPayIn| value:'1.2-2')||0.00}}</span></p>\r\n                      </div>\r\n                      <div class=\"flex\">\r\n                        <p>Today's Payout</p>\r\n                        <p><span class=\"float-right\"><i class=\"fa fa-inr\" aria-hidden=\"true\"></i>\r\n                          {{(data?.TodaysPayOut| value:'1.2-2')||0.00}}</span></p>\r\n                      </div>\r\n                      <div class=\"flex\">\r\n                        <p class=\"icon-q\">\r\n                          Charges\r\n                          <ng-template #chargesTemplate><strong>Delayed Payment Charges</strong> - Penalty on late\r\n                            payment<br /><br /><strong>DP Charges</strong> - Demat account transactions charges along with AMC\r\n                            charges</ng-template>\r\n                            <img src=\"assets/images/research-report/tootip-question.svg\" alt=\"\" class=\"img-responsive\"\r\n                            popoverTitle=\"Charges\" outsideClick=\"true\" placement=\"left\"\r\n                            [popover]=\"chargesTemplate\" width=\"12\" height=\"12\">\r\n                        </p>\r\n                        <p><span class=\"float-right\"><i class=\"fa fa-inr\" aria-hidden=\"true\"></i> {{(data?.DPCharges|\r\n                          value:'1.2-2')||0.00}}\r\n                        </span></p>\r\n                      </div>\r\n                      <div class=\"flex\">\r\n                        <p class=\"shft-rght\">Delayed Payment <br/> Charges</p>\r\n                        <p><span class=\"float-right\"><i class=\"fa fa-inr\"\r\n                          aria-hidden=\"true\"></i> {{(data?.DPC| value:'1.2-2')||0.00}}</span></p>\r\n                      </div>\r\n                      <div class=\"flex\">\r\n                        <p class=\"shft-rght mrg-btm\">DP Charges</p>\r\n                        <p><span class=\"float-right\"><i class=\"fa fa-inr\"\r\n                          aria-hidden=\"true\"></i> {{(data?.DPBill| value:'1.2-2')||0.00}}</span></p>\r\n                      </div>\r\n          \r\n                    </div>\r\n                  </div>\r\n                </accordion-group>\r\n    \r\n              </accordion>\r\n              <div class=\"panel-custom\">\r\n                <div class=\"panel\">\r\n                  <div class=\"panel-heading bb-none\">\r\n                    <span class=\"icon-q\">Margin Against Assets\r\n                      <img src=\"assets/images/research-report/tootip-question.svg\" class=\"img-responsive\"\r\n                       container=\"body\" outsideClick=\"true\" popoverTitle=\"Margin Against Assets\" [popover]=\"popupMessages?.margin_against_assests\" width=\"12\" height=\"12\">\r\n                    </span>\r\n                    <span class=\"float-right mr-value\"><i class=\"fa fa-inr\"\r\n                        aria-hidden=\"true\"></i> {{(data?.MarginAgainstAssets| value:'1.2-2')||0.00}}</span></div>\r\n                </div>\r\n              </div>\r\n              <div class=\"panel-custom\">\r\n                <div class=\"panel\">\r\n                  <div class=\"panel-heading bb-none\">\r\n                    <span class=\"icon-q\">Margin Utilised\r\n                      <img src=\"assets/images/research-report/tootip-question.svg\" class=\"img-responsive\"\r\n                       container=\"body\" outsideClick=\"true\" popoverTitle=\"Future Bill Cr./ Dr.\" [popover]=\"popupMessages?.margin_utilized\" width=\"12\" height=\"12\">\r\n                    </span>\r\n                    <span class=\"float-right mr-value\"><i class=\"fa fa-inr\" aria-hidden=\"true\"></i>{{(data?.MarginUtilized| value:'1.2-2')||0.00}} </span></div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- MTF Funding New -->\r\n          <div class=\"col-md-12 col-xs-12 mtf-acc-div\">\r\n            <div class=\"ledger-card\">\r\n              <accordion class=\"accordion-header mtf-acc-head\" >\r\n                <accordion-group class=\"accordion-details mtf-acc-grp\" (isOpenChange)=\"toggleAccordion($event,'mtf')\" [isOpen]=\"mtf_accordion\">\r\n                  <div class=\"panel-heading\" accordion-heading>\r\n                    <span class=\"icon-q\">MTF Funding\r\n                      <img src=\"assets/images/research-report/tootip-question.svg\" class=\"img-responsive\"\r\n                       container=\"body\" outsideClick=\"true\" popoverTitle=\"MTF Funding\" [popover]=\"popupMessages?.payLaterFunding\" width=\"12\" height=\"12\">\r\n                    </span>\r\n                    <span class=\"float-right\"><i class=\"fa fa-inr\"aria-hidden=\"true\"> \r\n                      </i> {{(payLaterFunding | value:'1.2-2')||0.00}}\r\n                      <span class=\"float-right pull-right ml-icon\"><i class=\"fa fa-chevron-custom\" aria-hidden=\"true\"></i></span>\r\n                    </span>\r\n                  </div>\r\n                  <div class=\"mtf-pan-body\">\r\n                    <div class=\"flex\">\r\n                      <p>Today's Balance</p>\r\n                      <p><span class=\"float-right\"><i class=\"fa fa-inr\" aria-hidden=\"true\"></i>\r\n                        {{(data?.TodaysBalance| value:'1.2-2')||0.00}}</span></p>\r\n                    </div>\r\n                    <div class=\"flex\">\r\n                      <p>Today's Pay-in</p>\r\n                      <p><span class=\"float-right\"><i class=\"fa fa-inr\" aria-hidden=\"true\"></i>\r\n                        {{(data?.TodaysPayIn| value:'1.2-2')||0.00}}</span></p>\r\n                    </div>\r\n                  </div>\r\n    \r\n                </accordion-group>\r\n              </accordion>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Future Bill Cr New-->\r\n          <div class=\"col-md-12 col-xs-12\">\r\n            <div class=\"panel panel-border\">\r\n              <div class=\"panel-heading bb-none panel-inner\">\r\n                <span class=\"icon-q\">Future Bill Cr. / Dr.\r\n                  <img src=\"assets/images/research-report/tootip-question.svg\" class=\"img-responsive\"\r\n                   container=\"body\" outsideClick=\"true\" popoverTitle=\"Future Bill Cr./ Dr.\" [popover]=\"popupMessages?.unsettled\" width=\"12\" height=\"12\">\r\n                </span>\r\n                <span class=\"float-right mr-value\"><i class=\"fa fa-inr\"\r\n                    aria-hidden=\"true\"></i> {{(data?.FutureBillCrDr| value:'1.2-2')||0.00}}</span></div>\r\n              <!--  <div class=\"panel-body\">\r\n                  Panel content\r\n                </div> -->\r\n            </div>\r\n          </div>\r\n\r\n          \r\n\r\n\r\n\r\n          <div style=\"display: none;\" class=\"col-md-6 col-xs-12 pr0-n\">\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">Ledger Balance <span class=\"float-right\"><i class=\"fa fa-inr\"\r\n                    aria-hidden=\"true\"></i> {{(data?.LedgerBalance| value:'1.2-2')||0.00}}</span></div>\r\n              <div class=\"panel-body\">\r\n                <div class=\"flex\">\r\n                  <p>Today's Balance</p>\r\n                  <p><span class=\"float-right\"><i class=\"fa fa-inr\" aria-hidden=\"true\"></i>\r\n                    {{(data?.TodaysBalance| value:'1.2-2')||0.00}}</span></p>\r\n                </div>\r\n                <div class=\"flex\">\r\n                  <p>Today's Pay-in</p>\r\n                  <p><span class=\"float-right\"><i class=\"fa fa-inr\" aria-hidden=\"true\"></i>\r\n                    {{(data?.TodaysPayIn| value:'1.2-2')||0.00}}</span></p>\r\n                </div>\r\n                <div class=\"flex\">\r\n                  <p>Today's Payout</p>\r\n                  <p><span class=\"float-right\"><i class=\"fa fa-inr\" aria-hidden=\"true\"></i>\r\n                    {{(data?.TodaysPayOut| value:'1.2-2')||0.00}}</span></p>\r\n                </div>\r\n                <div class=\"flex\">\r\n                  <p class=\"icon-q\">\r\n                    Charges\r\n                    <ng-template #chargesTemplate><strong>Delayed Payment Charges</strong> - Penalty on late\r\n                      payment<br /><br /><strong>DP Charges</strong> - Demat account transactions charges along with AMC\r\n                      charges</ng-template>\r\n                      <img src=\"assets/images/research-report/tootip-question.svg\" alt=\"\" class=\"img-responsive\"\r\n                      popoverTitle=\"Charges\" outsideClick=\"true\" placement=\"left\"\r\n                      [popover]=\"chargesTemplate\" width=\"12\" height=\"12\">\r\n                  </p>\r\n                  <p><span class=\"float-right\"><i class=\"fa fa-inr\" aria-hidden=\"true\"></i> {{(data?.DPCharges|\r\n                    value:'1.2-2')||0.00}}\r\n                  </span></p>\r\n                </div>\r\n                <div class=\"flex\">\r\n                  <p class=\"shft-rght\">Delayed Payment <br/> Charges</p>\r\n                  <p><span class=\"float-right\"><i class=\"fa fa-inr\"\r\n                    aria-hidden=\"true\"></i> {{(data?.DPC| value:'1.2-2')||0.00}}</span></p>\r\n                </div>\r\n                <div class=\"flex\">\r\n                  <p class=\"shft-rght mrg-btm\">DP Charges</p>\r\n                  <p><span class=\"float-right\"><i class=\"fa fa-inr\"\r\n                    aria-hidden=\"true\"></i> {{(data?.DPBill| value:'1.2-2')||0.00}}</span></p>\r\n                </div>\r\n    \r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div style=\"display: none;\" class=\"col-md-6 col-xs-12\">\r\n            <div class=\"panel panel-default margin-againts\">\r\n              <div class=\"panel-heading\">Margin Against Assets <span class=\"float-right\"><i class=\"fa fa-inr\"\r\n                    aria-hidden=\"true\"></i> {{(data?.MarginAgainstAssets| value:'1.2-2')||0.00}}</span></div>\r\n              <div class=\"panel-body\">\r\n              <!--   <div class=\"flex\">\r\n                  <p>Early Payin</p>\r\n                  <p><span class=\"float-right\">\r\n                    <i class=\"fa fa-inr\" aria-hidden=\"true\"></i>\r\n                    {{(data?.EarlyPayIn| value:'1.2-2')||0.00}}\r\n                    <i class=\"fa fa-question-circle pl-2\" popoverTitle=\"Early Payin\" outsideClick=\"true\" placement=\"left\"\r\n                      [popover]=\"popupMessages?.early_payin\"></i></span></p>\r\n                </div> -->\r\n                <div class=\"flex\">\r\n                  <p class=\"icon-q\">\r\n                    Margin Against Holdings\r\n                    <img src=\"assets/images/research-report/tootip-question.svg\" alt=\"\" class=\"img-responsive\"\r\n                    popoverTitle=\"Margin Against Holdings\" outsideClick=\"true\"\r\n                    placement=\"left\" [popover]=\"popupMessages?.margin_against_holding\" width=\"12\" height=\"12\">\r\n                </p>\r\n                  <p>\r\n                    <span class=\"float-right\">\r\n                      <i class=\"fa fa-inr\" aria-hidden=\"true\"></i>\r\n                      {{(data?.PledgeValue| value:'1.2-2')||0.00}}</span>\r\n                  </p>\r\n                </div>\r\n                <div class=\"flex\">\r\n                  <p class=\"icon-q\">CFS\r\n                    <img src=\"assets/images/research-report/tootip-question.svg\" alt=\"\" class=\"img-responsive\"\r\n                    popoverTitle=\"CFS\" outsideClick=\"true\" placement=\"left\"\r\n                    [popover]=\"popupMessages?.cfs\" width=\"12\" height=\"12\">\r\n                  </p>\r\n                  <p><span class=\"float-right\"><i class=\"fa fa-inr\" aria-hidden=\"true\"></i> {{(data?.DpCFS|\r\n                    value:'1.2-2')||0.00}}\r\n                  </span></p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div style=\"display: none;\" class=\"col-md-6 col-xs-12 pr0-n\">\r\n            <div class=\"panel panel-default adoptive-height\">\r\n              <div class=\"panel-heading\">\r\n                <span class=\"icon-q\">\r\n                  MTF Funding\r\n                  <img src=\"assets/images/research-report/tootip-question.svg\" alt=\"\" class=\"img-responsive\"\r\n                popoverTitle=\"MTF Funding\" outsideClick=\"true\" placement=\"left\"\r\n                [popover]=\"popupMessages?.payLaterFunding\" width=\"12\" height=\"12\">\r\n                </span>\r\n                <span class=\"float-right\"><i class=\"fa fa-inr\"\r\n                    aria-hidden=\"true\"></i> {{(payLaterFunding | value:'1.2-2')||0.00}}</span></div>\r\n                <div class=\"panel-body\">\r\n                  <div class=\"flex\">\r\n                    <p>My Funds</p>\r\n                    <p><span class=\"float-right\"><i class=\"fa fa-inr\" aria-hidden=\"true\"></i>\r\n                      {{(data?.DepositNotion | value:'1.2-2')||0.00}}</span></p>\r\n                  </div>\r\n                  <div class=\"flex\">\r\n                    <p>Choice Funds</p>\r\n                    <p><span class=\"float-right\"><i class=\"fa fa-inr\" aria-hidden=\"true\"></i>\r\n                      {{(data?.MTFFunded | value:'1.2-2')||0.00}}</span></p>\r\n                  </div>\r\n                </div>\r\n            </div>\r\n          </div>\r\n          <div style=\"display: none;\" class=\"col-md-6 col-xs-12\">\r\n            <div class=\"panel panel-default adoptive-height\">\r\n              <div class=\"panel-heading bb-none\">\r\n                <span class=\"icon-q\">\r\n                  Margin Utilised\r\n                  <img src=\"assets/images/research-report/tootip-question.svg\" alt=\"\" class=\"img-responsive\"\r\n                popoverTitle=\"Margin Utilised\" outsideClick=\"true\" placement=\"left\"\r\n                [popover]=\"popupMessages?.margin_utilized\" width=\"12\" height=\"12\">\r\n                </span>\r\n                <span class=\"float-right\"><i class=\"fa fa-inr\"\r\n                aria-hidden=\"true\"></i> {{(data?.MarginUtilized| value:'1.2-2')||0.00}}\r\n              </span>\r\n          </div>\r\n              <div class=\"panel-body\">\r\n                <div class=\"flex\">\r\n                  <p>Normal Margin Utilised</p>\r\n                  <p><span class=\"float-right\"><i class=\"fa fa-inr\" aria-hidden=\"true\"></i>\r\n                    {{(normalMarginUtilized| value:'1.2-2')||0.00}}</span></p>\r\n                </div>\r\n                <div class=\"flex\">\r\n                  <p>MTF Margin Utilised</p>\r\n                  <p><span class=\"float-right\"><i class=\"fa fa-inr\" aria-hidden=\"true\"></i>\r\n                    {{(payLaterMarginUtilized| value:'1.2-2')||0.00}}</span></p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div style=\"display: none;\" class=\"col-md-12 col-xs-12\">\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading bb-none\">\r\n                <span class=\"icon-q\">Future Bill Cr. / Dr.\r\n                  <img src=\"assets/images/research-report/tootip-question.svg\" class=\"img-responsive\"\r\n                   container=\"body\" outsideClick=\"true\" popoverTitle=\"Future Bill Cr./ Dr.\" [popover]=\"popupMessages?.unsettled\" width=\"12\" height=\"12\">\r\n                </span>\r\n                <span class=\"float-right\"><i class=\"fa fa-inr\"\r\n                    aria-hidden=\"true\"></i> {{(data?.FutureBillCrDr| value:'1.2-2')||0.00}}</span></div>\r\n              <!--  <div class=\"panel-body\">\r\n                  Panel content\r\n                </div> -->\r\n            </div>\r\n          </div>\r\n\r\n          \r\n          <!-- <div class=\"col-md-6 col-xs-12\">\r\n            <div class=\"panel panel-default left-panel\">\r\n              <div class=\"panel-heading bb-none\">Margin Utilised <span class=\"float-right\"><i class=\"fa fa-inr\"\r\n                    aria-hidden=\"true\"></i> {{(data?.MarginUtilized| value:'1.2-2')||0.00}} <i\r\n                    class=\"fa fa-question-circle pl-2\" popoverTitle=\"Margin Utilised\" outsideClick=\"true\" placement=\"left\"\r\n                    [popover]=\"popupMessages?.margin_utilized\"></i></span>\r\n              </div>\r\n               <div class=\"panel-body\">\r\n                  Panel content\r\n                </div> \r\n            </div>\r\n          </div> -->\r\n        </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n\r\n  <!--   <div class=\"row equity-w\">\r\n    <div class=\"flex-div flexwrap\">\r\n      <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12 mb-15\">\r\n        <div class=\"card chart-card text-center blue-border titleblue flex-ht\" [class.up]=\"data?.MarginAvailable>0\"\r\n          [class.down]=\"data?.MarginAvailable<0\">\r\n          <div class=\"text-left\">Net Margin Available</div>\r\n          <h5 class=\"values text-left\"><i class=\"fa fa-inr\" aria-hidden=\"true\"></i>\r\n            {{(data?.MarginAvailable + (data?.MarginUsed||0)) | value:'1.2-2'}}</h5>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12 mb-15\">\r\n        <div class=\"card chart-card text-center yellow-border titleyellow flex-ht\" [class.up]=\"data?.Deposit>0\"\r\n          [class.down]=\"data?.Deposit<0\">\r\n          <div class=\"text-left\">Account Balance</div>\r\n          <h5 class=\"values text-left\"><i class=\"fa fa-inr\" aria-hidden=\"true\"></i> {{data?.Deposit | value:'1.2-2'}}\r\n          </h5>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12 mb-15\">\r\n        <div class=\"card chart-card text-center purple-border titlepurple flex-ht\">\r\n          <div class=\"text-left\"><span ngx-tooltip tooltipTitle=\"Stock Value after Choice Haircut\" placement=\"top\"\r\n            tooltipType=\"tooltip\">Collateral&nbsp;<span class=\"icon-info\"></span></span></div>\r\n          <h5 class=\"values text-left\"><i class=\"icon-angle-ienr\" aria-hidden=\"true\"></i>\r\n            {{data?.Collateral | value:'1.2-2'}}</h5>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div> -->\r\n  <!--   <div class=\"row \">\r\n    <div class=\"col-xs-12\">\r\n      <div class=\"card clearfix\">\r\n        <div class=\"card-block clearfix\">\r\n          <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12 br-right padding-0\">\r\n            <div class=\"flex-wrap col-lg-12 col-md-12 col-sm-12 col-xs-12 padding-0 brdb\">\r\n              <div class=\"text-uppercase  text-left padding-0\">\r\n                <h5 class=\"montserrat\">Today's Payin</h5>\r\n              </div>\r\n              <div class=\"text-uppercase text-right padding-0 \">\r\n                <h5 class=\"amount\"><i class=\"fa fa-inr\" aria-hidden=\"true\"></i> {{data?.PayIn | value:'1.2-2'}}</h5>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\" style=\"padding-right:0;\">\r\n            <div class=\"flex-wrap col-lg-12 col-md-12 col-sm-12 col-xs-12 padding-0 brdb\">\r\n              <div class=\"text-uppercase text-left padding-0\">\r\n                <h5 class=\"montserrat\">Today's Withdrawn/Allocation</h5>\r\n              </div>\r\n              <div class=\"text-uppercase text-right padding-0\">\r\n                <h5 class=\"amount\"><i class=\"fa fa-inr\" aria-hidden=\"true\"></i> {{data?.Withdrawn | value:'1.2-2'}}\r\n                </h5>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12 br-right padding-0\">\r\n            <div class=\"flex-wrap col-lg-12 col-md-12 col-sm-12 col-xs-12 padding-0 brdb\">\r\n              <div class=\"text-uppercase  text-left padding-0\">\r\n                <h5 class=\"montserrat\">Limit Utilization</h5>\r\n              </div>\r\n              <div class=\"text-uppercase text-right padding-0\">\r\n                <h5 class=\"amount\"><i class=\"fa fa-inr\" aria-hidden=\"true\"></i> {{data?.MarginUsed | value:'1.2-2'}}\r\n                </h5>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\" style=\"padding-right:0;\">\r\n            <div class=\"flex-wrap col-lg-12 col-md-12 col-sm-12 col-xs-12 padding-0 brdb\">\r\n            <div class=\"text-uppercase text-left padding-0\">\r\n              <h5 class=\"montserrat\">Total Margin Available</h5>\r\n            </div>\r\n            <div class=\"text-uppercase text-right padding-0\">\r\n              <h5 class=\"amount\"><i class=\"fa fa-inr\" aria-hidden=\"true\"></i> {{data?.MarginAvailable | value:'1.2-2'}}\r\n              </h5>\r\n            </div>\r\n          </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div> -->\r\n</div>";

/***/ }),

/***/ 34163:
/*!*****************************************************************************!*\
  !*** ./src/app/post-login-module/funds/fund/fund.component.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<section class=\"clearfix\">\r\n  <div class=\"col-xs-12 company-page-wrap\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-5\">\r\n          <h4 class=\"heading\">Funds</h4>\r\n          <h5 class=\"page-title \">All (Equity, Commodity, Currency, ICEX)</h5>\r\n          <!--  <p></p> -->\r\n        </div>\r\n        <div class=\"col-sm-7\">\r\n          <div class=\"text-right pay-btns\">\r\n            <!-- <button class=\"btn sell funds\" (click)=\"utils.goToPledgeUnpledge(true)\">Get Margin Against Holdings</button> -->\r\n            <!-- <button class=\"btn sell\" (click)=\"authorizePledge()\">Authorize Pledge</button> -->\r\n            <div dropdown class=\"btn sell btn-group has-dropdown\">\r\n              <a class=\"animate\"\r\n                (click)=\"utils.setTrackMoeEvent('clickedPledge', { 'User_ID': utils.getUserId() || 'guest', 'IP': this.shared.IPAddress });utils.emitEvent('clickedPledge', utils.getUserId() || 'guest', '', 1);\"\r\n                dropdown-open>Pledge <span class=\"[ caret ]\"></span></a>\r\n                <ul class=\"dropdown-menu \" role=\"menu\">\r\n                  <!-- <li><button class=\"dropdown-item\" (click)=\"authorizePledge()\">Authorize Pledge</button></li> -->\r\n                  <li data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"\r\n                    (click)=\"pledgeHandling(true)\"><button class=\"dropdown-item\"\r\n                  type=\"button\">Margin Against Holdings</button></li>\r\n                  <li data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"\r\n                    (click)=\"pledgeHandling(false)\"><button class=\"dropdown-item\"\r\n                  type=\"button\">Unpledge Shares</button></li>\r\n                </ul>\r\n              </div>\r\n              <button class=\"btn sell buy1\" (click)=\"openFundDrawer(1)\">Deposit</button>\r\n              <button class=\"btn sell\" (click)=\"openFundDrawer(0)\">Withdraw</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <section class=\"section-one mb-60\">\r\n        <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 eq\">\r\n\r\n          <app-fund-block title=\"\" [data]=\"fundsData?.lFundsViewDataEquity\"></app-fund-block>\r\n        </div>\r\n        <!-- <div class=\"col-lg-6 col-md-12 col-sm-12 col-xs-12 pr-0\">\r\n        <app-fund-block title=\"COMMODITY\" [data]=\"fundsData?.lFundsViewDataCommodity\"></app-fund-block>\r\n      </div> -->\r\n    </section>\r\n    <!-- <div class=\"clearfix\">\r\n    <button class=\"transaction-btn\" [routerLink]=\"['/client/reports/payInOut']\" routerLinkActive=\"active\">View Pay In\r\n    / Out Transaction</button>\r\n  </div> -->\r\n\r\n</div>\r\n<app-pay-in-out [action]=\"action\" [config]=\"fundsData\"></app-pay-in-out>\r\n</section>\r\n\r\n<!-- <section class=\"clearfix\">\r\n<div class=\"col-xs-12 company-page-wrap\">\r\n  <div class=\"col-sm-12\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-5\">\r\n        <h4 class=\"heading\">Funds</h4>\r\n      </div>\r\n      <div class=\"col-sm-7\">\r\n        <div class=\"text-right pay-btns\">\r\n          <button class=\"btn buy\" (click)=\"openFundDrawer(1)\">Deposit</button>\r\n          <button class=\"btn sell\" (click)=\"openFundDrawer(0)\">Withdraw</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <section class=\"section-one mb-60\">\r\n    <div class=\"col-lg-6 col-md-12 col-sm-12 col-xs-12 eq brdr\">\r\n      <app-fund-block title=\"EQUITY\" [data]=\"fundsDataNew?.lFundsViewDataEquity\"></app-fund-block>\r\n    </div>\r\n    <div class=\"col-lg-6 col-md-12 col-sm-12 col-xs-12 pr-0\">\r\n      <app-fund-block title=\"COMMODITY\" [data]=\"fundsDataNew?.lFundsViewDataCommodity\"></app-fund-block>\r\n    </div>\r\n  </section>\r\n</div>\r\n</section> -->\r\n\r\n@if (showThankyou) {\r\n  <div class=\"dialog\">\r\n    <div class=\"dialog-content\">\r\n      <div class=\"dialog-header clearfix\">\r\n        <div class=\"col-md-12\">\r\n          <h4>Transaction Status</h4>\r\n        </div>\r\n      </div>\r\n      <div class=\"dialog-section\">\r\n        <p>{{payinData}} </p>\r\n      </div>\r\n      <div class=\"dialog-footer clearfix\">\r\n        <button class=\"btn sell\" (click)=\"closeThankYou()\">Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n}\r\n\r\n@if (noBankActive) {\r\n  <div class=\"dialog\">\r\n    <div class=\"dialog-content\">\r\n      <div class=\"dialog-header clearfix\">\r\n        <div class=\"col-md-12\">\r\n          <h4>Attention</h4>\r\n        </div>\r\n      </div>\r\n      <div class=\"dialog-section\">\r\n        <p>None of your Registered Bank Account is Active, Please Contact Support </p>\r\n      </div>\r\n      <div class=\"dialog-footer clearfix\">\r\n        <button class=\"btn sell\" (click)=\"closeNoBankActive()\">Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n}\r\n\r\n<div class=\"dialog\" [hidden]=\"!payInStatusCheck\">\r\n  <div class=\"dialog-content\">\r\n    <div class=\"dialog-header clearfix\">\r\n      <div class=\"col-md-12\">\r\n        <h4>Pay In Amount</h4>\r\n      </div>\r\n    </div>\r\n    <div class=\"dialog-section\">\r\n      @if (!payinData) {\r\n        <div class=\"payin-transaction\">\r\n          <h3>&#8377; {{payInStatusCheck?.Amount|value:'1.2-2'}}</h3>\r\n          <p>Click on notification recieved on your UPI App and Enter your UPI PIN. </p>\r\n          <h4 class=\"timer\">{{payInStatusCheck?.time}}</h4>\r\n          <p>Note: You will be Notified, once your payment is processed. </p>\r\n          <p>Do not close this page or refresh</p>\r\n        </div>\r\n      }\r\n      @if (payinData) {\r\n        <p>{{payinData}}</p>\r\n      }\r\n    </div>\r\n    @if (payinData) {\r\n      <div class=\"dialog-footer clearfix\">\r\n        <button class=\"btn sell\" (click)=\"reloadLocation()\">OK</button>\r\n      </div>\r\n    }\r\n  </div>\r\n</div>\r\n\r\n<div class=\"dialog\" [hidden]=\"!pledgeConfig.pledgeModal\">\r\n  <div class=\"dialog-content\">\r\n    <div class=\"dialog-header clearfix\">\r\n      <div class=\"col-md-12\">\r\n        <h4>Authorize Pledge</h4>\r\n      </div>\r\n    </div>\r\n    <div class=\"dialog-section\">\r\n      @if (!payinData) {\r\n        <div class=\"payin-transaction\">\r\n          <p>You will be redirected to {{pledgeConfig.depository}} portal in a new window for authorizing the pledge</p>\r\n          <p>To know more about this, <a [routerLink]=\"['/links/collateral-margin-against-shares']\" class=\"pledge-link\"\r\n          routerLinkActive=\"router-link-active\">Click here</a>.</p>\r\n        </div>\r\n      }\r\n    </div>\r\n    <div class=\"dialog-footer clearfix\">\r\n      <button class=\"btn sell\" (click)=\"closePledgeModal()\">CANCEL</button>\r\n      <button class=\"btn buy\" (click)=\"redirectToPortal()\">CONTINUE</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- to show NRI alert box (26/04/2021) -->\r\n@if (isNRI) {\r\n  <div class=\"dialog\">\r\n    <div class=\"dialog-content\" style=\"max-width: 80rem\">\r\n      <div class=\"dialog-header clearfix\">\r\n        <div class=\"col-md-12\">\r\n          <h4>NRI Payin/Payout Process</h4>\r\n        </div>\r\n      </div>\r\n      <div class=\"dialog-section\" style=\"text-align: center;\">\r\n        <p>Since you are NRI customer, your fund transfer is required to be routed through your PIS account only.</p>\r\n        <p>For more query, you may contact to your RM or call <a href=\"tel:+918824242424\">(+918824242424)</a> our customer\r\n        care or <br> email <a href=\"mailto:care@choiceindia.com\">(care&#64;choiceindia.com)</a> us.</p>\r\n      </div>\r\n      <div class=\"dialog-footer clearfix\">\r\n        <button class=\"btn sell\" (click)=\"closeNoBankActive(true)\">Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n}";

/***/ })

}]);