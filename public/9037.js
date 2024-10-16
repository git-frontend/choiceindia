(self["webpackChunkjiffy_upgraded"] = self["webpackChunkjiffy_upgraded"] || []).push([[9037],{

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

/***/ 72569:
/*!**************************************************************************!*\
  !*** ./src/app/research-report/option-detail/option-detail.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OptionDetailComponent: () => (/* binding */ OptionDetailComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _option_detail_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./option-detail.component.html?ngResource */ 83147);
/* harmony import */ var _option_detail_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./option-detail.component.scss?ngResource */ 34729);
/* harmony import */ var _option_detail_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_option_detail_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 27468);
/* harmony import */ var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/analytics/analytics.service */ 50213);
/* harmony import */ var src_app_services_cryptography_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/cryptography.service */ 67224);
/* harmony import */ var src_app_services_rest_post_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/rest/post-login.service */ 4135);
/* harmony import */ var src_app_services_rest_tool_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/rest/tool.service */ 91387);
/* harmony import */ var src_app_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/shared-data/shared-data.service */ 46013);
/* harmony import */ var src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/utils/utils.service */ 89893);
/* harmony import */ var _pipes_value_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pipes/value.pipe */ 50615);
/* harmony import */ var _pipes_condense_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../pipes/condense.pipe */ 82203);
/* harmony import */ var _pipes_segment_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../pipes/segment.pipe */ 39995);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 60177);

















let OptionDetailComponent = class OptionDetailComponent {
  /**
   * Initialize
   * @param utils
   * @param renderer
   * @param postService
   * @param shared
   * @param route
   * @param toolsService
   */
  constructor(utils, cryptography, zone, renderer, analytics, postService, shared, route, toolsService) {
    this.utils = utils;
    this.cryptography = cryptography;
    this.zone = zone;
    this.renderer = renderer;
    this.analytics = analytics;
    this.postService = postService;
    this.shared = shared;
    this.route = route;
    this.toolsService = toolsService;
    /** margin loader flag */
    this.marginLoader = false;
    /** margin loader flag */
    this.ChargesLoader = false;
    /** margin available loader flag */
    this.marginAvailableLoader = false;
    /**NRI */
    this.isNRI = false;
    /** Variable for states */
    this.stateArray = [];
    /** show search Focus */
    this.searchFocus = false;
    this.brokerageOrderType = 'PL';
    //BROKERAGE CALCULATION
    this.title = "mouse-hover";
    this.subscriptionList = [];
    this.lotValue = 1;
    this.indez = 1;
    this.tradeDetails = new _angular_core__WEBPACK_IMPORTED_MODULE_11__.EventEmitter();
    this.orderRequest = {};
    this.scrip = {};
    this.brokerageObj = {};
    this.normalizingFactor = 0;
    this.stateArray = [{
      name: "TELANGANA",
      value: 0,
      cashIntraday: 0.01,
      cashDelivery: 0.01,
      fut: 0.01,
      opt: 0.01,
      currency: 0.01,
      commodity: 0.002,
      max: ""
    }, {
      name: "Karnataka",
      value: 1,
      cashIntraday: 0.003,
      cashDelivery: 0.003,
      fut: 0.003,
      opt: 0.003,
      currency: 0.003,
      commodity: 0.003,
      max: ""
    }, {
      name: "ODISHA",
      value: 2,
      cashIntraday: 0.005,
      cashDelivery: 0.005,
      fut: 0.005,
      opt: 0.005,
      currency: 0.005,
      commodity: 0.005,
      max: ""
    }, {
      name: "Tamil Nadu",
      value: 2,
      cashIntraday: 0.006,
      cashDelivery: 0.006,
      fut: 0.006,
      opt: 0.006,
      currency: 0.006,
      commodity: 0.5,
      max: ""
    }, {
      name: "West Bengal",
      value: 3,
      cashIntraday: 0.002,
      cashDelivery: 0.01,
      fut: 0.002,
      opt: 0.002,
      currency: 0.002,
      commodity: 0.01,
      max: ""
    }, {
      name: "Rajasthan",
      value: 4,
      cashIntraday: 0.003,
      cashDelivery: 0.012,
      fut: 0.0012,
      opt: 0.0024,
      currency: 0.0012,
      commodity: 0.0012,
      max: ""
    }, {
      name: "DADRA & NAGAR HAVELI",
      value: 5,
      cashIntraday: 0.01,
      cashDelivery: 0.01,
      fut: 0.01,
      opt: 0.01,
      currency: 0.01,
      commodity: 0.01,
      max: ""
    }, {
      name: "Maharashtra",
      value: 6,
      cashIntraday: 0.002,
      cashDelivery: 0.01,
      fut: 0.002,
      opt: 0.002,
      currency: 0.002,
      commodity: 0.001,
      max: ""
    }, {
      name: "Madhya Pradesh",
      value: 7,
      cashIntraday: 0.002,
      cashDelivery: 0.01,
      fut: 0.002,
      opt: 0.002,
      currency: 0.002,
      commodity: 0.002,
      max: ""
    }, {
      name: "Jammu & Kashmir",
      value: 8,
      cashIntraday: 0.01,
      cashDelivery: 0.01,
      fut: 0.01,
      opt: 0.01,
      currency: 0.01,
      commodity: 0.01,
      max: ""
    }, {
      name: "Gujarat",
      value: 9,
      cashIntraday: 0.002,
      cashDelivery: 0.01,
      fut: 0.002,
      opt: 0.002,
      currency: 0.002,
      commodity: 0.001,
      max: ""
    }, {
      name: "Delhi",
      value: 10,
      cashIntraday: 0.002,
      cashDelivery: 0.01,
      fut: 0.002,
      opt: 0.002,
      currency: 0.002,
      commodity: 0.001,
      max: ""
    }, {
      name: "Other States",
      value: 11,
      cashIntraday: 0.002,
      cashDelivery: 0.01,
      fut: 0.002,
      opt: 0.002,
      currency: 0.002,
      commodity: 0.001,
      max: ""
    }];
    this.brokerageObj = {};
    // this.brokerageObj.searchInput = '';
    // this.brokerageObj.startPos = 0;
    // this.brokerageObj.limit = 10;
    // this.brokerageObj.tableValue = [];
    // this.brokerageObj.selectedScrip = { 'Token': 532540, 'SegmentId': 3, 'SecDesc': "TATA CONSULTANCY SERVICES", 'SecName': "TCS", 'MarketLot': 1, 'ExchangeSegment': "BSE" };
    // this.brokerageObj.multiTouchlineData = {};
    this.brokerageObj.buyPrice = "";
    this.brokerageObj.sellPrice = "";
    this.brokerageObj.quantity = 1;
    this.brokerageObj.brokerage = 0;
    this.brokerageObj.turnOver = 0;
    this.brokerageObj.orderType = false;
    this.brokerageObj.stt = 0;
    this.brokerageObj.transactionCharge = 0;
    this.brokerageObj.clearance = 0;
    this.brokerageObj.GST = 0;
    this.brokerageObj.sebi = 0;
    // this.brokerageObj.state = 6;
    this.brokerageObj.stateStampDuty = 0;
    // this.brokerageObj.option_calls = {}
  }
  ngOnInit() {
    this.userAccountStatus = this.utils.getUserAccountStatus();
    this.getMarginAvailable();
    this.subscriptionList.push(this.utils.broadcastObservable("payinStatus2").subscribe(data => {
      // console.log(data,"PAYIN STATUS")
      if (data.state == "SUCCESS") {
        //         if(data.res.Amount&&data.res.Amount>0)
        // {
        //   this.marginAvailable= this.marginAvailable+data.res.Amount
        // }
        this.marginAvailableLoader = true;
        // setInterval(()=>{
        this.getMarginAvailable();
        //    },6000)
      }
    }));
  }
  ngOnChanges(changes) {
    if (changes["data"] && changes["data"].currentValue) {
      this.data = changes["data"].currentValue;
      this.optionCalls = this.data["option_calls"];
      // this.optionCalls[0].lot_quantity = "1";
      //  this.initBrok();
      this.initialiseBrokerage();
      // console.log("this.datathis.data",this.data)
    }
    if (changes["isOpenTradeDetail"] && changes["isOpenTradeDetail"].currentValue) {
      this.isOpenTradeDetail = changes["isOpenTradeDetail"].currentValue;
      setTimeout(() => {
        if (this.data.isSellPresent && !this.data.min_inv_saved) this.fetchMinInvestment(this.data);
        // this.getMultiTouchLineData()
      }, 400);
    }
  }
  openCharges() {
    this.showBrokerageCharges = !this.showBrokerageCharges;
  }
  /**
   * Get MultiTouchLine Data
   */
  getMultiTouchLineData() {
    //&& this.isSegmentAllowed == 'Y'//Commented
    // if ((this.utils.isAuthorized() && this.isSegmentAllowed == 'Y') || ((!this.shared.userId || this.shared.userId == 'guest'))) {
    if (this.utils.isAuthorized() || !this.shared.userId || this.shared.userId == "guest") {
      const userId = this.utils.getUserId();
      let datapoints = [];
      if (this.data) {
        if (this.data.symbol_segment_id && this.data.symbol_token) datapoints.push({
          SegmentId: this.data.symbol_segment_id,
          Token: this.data.symbol_token
        });
        // if(this.data.option_calls&&this.data.option_calls.length){
        //   this.data.option_calls.forEach(ele=>{
        //     if(ele.scrip_segment_id&&ele.scrip_token)
        //     datapoints.push({ SegmentId: ele.scrip_segment_id, Token: ele.scrip_token })
        //   })
        // }
      }
      //console.log("payload2",this.futureData)
      const tokens = this.utils.generateTokens(datapoints, "SegmentId", "Token");
      //console.log(this.futureData,"payload2 tokens",tokens)
      const payload = {
        UserId: !userId || userId == "guest" ? "guest" : userId,
        SessionId: this.utils.getSessionId() || "",
        MultipleTokens: tokens
      };
      //console.log("payload2",payload)
      this.utils.commonGetMultipleTouchLineCall(payload).subscribe(data => {
        // common multitouchlineV2 (26/02/2021)
        if (data.Status == "Success" && data.Response && data.Response.lMT && data.Response.lMT.length) {
          const multitouchLineResponse = data.Response.lMT;
          //  console.log("futureData multitouchline2 ",JSON.parse(JSON.stringify(this.futureData)))
          //    console.log("payload2 multitouchLineResponse",JSON.parse(JSON.stringify(multitouchLineResponse)))
          multitouchLineResponse.forEach((element, index) => {
            if (this.data) {
              if (this.data.symbol_segment_id == element["SegmentId"] && element["Token"] == this.data.symbol_token) {
                Object.assign(element, this.data);
                let isSame = element["LTP"] == element["Change"];
                //  //console.log("payload SegmentId",element['SegmentId'] )
                element["prevChange"] = 0;
                element["PrvClose"] = element["LTP"] - element["Change"];
                element["PrvClose"] = element["PrvClose"] / element["PriceDivisor"];
                element["LTP"] = Number(element["LTP"] / element["PriceDivisor"]);
                element["Change"] = isSame ? 0 : element["Change"] / element["PriceDivisor"];
                //console.log("obj.Change2",element['Change'])
                element["ChangePer"] = element["Change"] / element["PrvClose"] * 100;
                element.class = element["Change"] < 0 ? "down" : element["Change"] > 0 ? "up" : "";
                element["Change"] = element["Change"];
                element["ChangePer"] = element["ChangePer"];
                element.companyURL = (element.scrip_name || element.symbol || "").trim().toLowerCase().replace(/\s/g, "-").replace(/\//g, "").replace(/(-)+/g, "-");
                //this.data=element
                Object.assign(this.data, element);
              }
            }
            // //     if(element.status == "Booked Part Profit"){
            // //       //console.log("OBJOBJpriceData", element)
            // //         element.priceData['ltp_price_percentage'] = ((Number(element.matched_price) - Number(element.priceData['stop_loss'].value)) / (Number(element.priceData['target'].value) - Number(element.priceData['stop_loss'].value))) * 85
            // //     }else{
            // //         element.priceData['ltp_price_percentage'] = ((Number(element.LTP) - Number(element.priceData['stop_loss'].value)) / (Number(element.priceData['target'].value) - Number(element.priceData['stop_loss'].value))) * 85
            // //     }
            // //     // ele.priceData['part_profit_percentage'] =  ((Number(res.matched_price) - Number(ele.priceData['stop_loss'].value)) / (Number(ele.priceData['target'].value) - Number(ele.priceData['stop_loss'].value))) * 85
            // //     // //console.log("llll",res.matched_price)
            // // }
            //   this.futureData[index] = Object.assign(this.futureData[index], ...element);
            // }
          });
          // this.futureData = [...this.futureData];
        }
        this.utils.unSubscribeMultitouchline(datapoints);
        this.getSocketResponse();
        this.utils.subscribeMultitouchline(datapoints);
      }, err => {
        this.utils.unSubscribeMultitouchline(datapoints);
        this.getSocketResponse();
        this.utils.subscribeMultitouchline(datapoints);
      });
    }
  }
  calculateMinInv() {}
  /**
   * Calculate Payoff
   */
  calculatePayoff() {
    if (this.data.option_calls && this.data.option_calls.length) {
      let payoff = 0;
      let margin = 0;
      this.data.option_calls.forEach(ele => {
        //(ifBuySide(LTP-EP)*Lot Size + ifSellSide(EP-LTP)*lot Size) * Lot Mulitplier (by default Lot Multiplier need to-be consider 1)
        if (ele.LTP && ele.entry_price && ele.market_lot) {
          margin = margin + ele.LTP * ele.market_lot * Number(ele.lot_quantity || "1");
          if (ele.call_category == "buy") {
            payoff = payoff + ((ele.LTP || 0) - (ele.entry_price || 0)) * ele.market_lot * Number(ele.lot_quantity || "1");
          }
          if (ele.call_category == "sell") {
            payoff = payoff + ((ele.entry_price || 0) - (ele.LTP || 0)) * ele.market_lot * Number(ele.lot_quantity || "1");
          }
        }
      });
      this.data.marginRequired2 = margin;
      this.data.payoff = payoff;
    }
  }
  ngOnDestroy() {
    this.subscriptionList.forEach(subscription => {
      if (subscription) subscription.unsubscribe();
    });
    // if (this.watchSubs) this.watchSubs.unsubscribe();
    // if(this.data){
    //   let datapoints=[];
    //   if(this.data.symbol_segment_id&&this.data.symbol_token)
    //   datapoints.push({ SegmentId: this.data.symbol_segment_id, Token: this.data.symbol_token })
    //   if(this.data.option_calls&&this.data.option_calls.length){
    //     this.data.option_calls.forEach(ele=>{
    //       if(ele.scrip_segment_id&&ele.scrip_token)
    //       datapoints.push({ SegmentId: ele.scrip_segment_id, Token: ele.scrip_token })
    //     })
    //   }
    //   this.utils.unSubscribeMultitouchline(datapoints);
    // }
  }
  /**
   * Get Socket Response
   */
  getSocketResponse() {
    this.watchSubs = this.utils.broadcastObservable("watchlist").subscribe(res => {
      let scrip;
      //  let scrip = this.data.option_calls.filter((obj, index) => {
      //    return res[0]['1'] == obj.scrip_segment_id && obj.scrip_token == res[0]["7"];
      //  })
      if (res[0]["1"] == this.data.symbol_segment_id && this.data.symbol_token == res[0]["7"]) {
        scrip = [this.data];
      }
      if (scrip.length > 0 && this.utils.isUpdatedData(scrip[0], res[0])) {
        let obj = scrip[0];
        let priceDivisor = this.utils.getDefaultPriceDivisor(res[0]["1"], res[0]["7"]);
        obj.Volume = Number(res[0][79]) || obj.Volume || 0;
        obj.prevChange = (Number(res[0]["8"]) / priceDivisor || 0) - (obj.LTP || 0);
        obj["PrvClose"] = res[0]["76"] / priceDivisor;
        obj.LTP = Number(res[0]["8"]) == 0 ? obj["PrvClose"] / (priceDivisor || 1) : (res[0]["8"] || 0) / priceDivisor; // if LTP == 0 then show prevClose (10/05/2021)
        obj.Change = ((res[0]["8"] == 0 ? obj["PrvClose"] : Number(res[0]["8"] || 0)) - Number(res[0]["76"])) / priceDivisor || obj.Change; // (res[0]['8'] - obj['PrvClose']) / (res[0]['399'] || 1);//
        obj["ChangePer"] = obj["Change"] / (res[0]["76"] / priceDivisor) * 100 || obj["ChangePer"];
        // obj.LTP = res[0]["8"] / res[0]["399"];
        obj.class = obj["Change"] < 0 ? "down" : obj["Change"] > 0 ? "up" : "";
        obj.Change = obj.Change;
        obj.ChangePer = obj.ChangePer;
        //  this.calculatePayoff()
      }
    });
  }
  ngAfterViewInit() {
    setTimeout(() => {
      if (this.data.isSellPresent && !this.data.min_inv_saved) this.fetchMinInvestment(this.data);
    }, 100);
    setTimeout(() => {
      if (this.isOpenTradeDetail && document.getElementById("strategy-detail") && document.getElementById("trade-strategy")) {
        document.getElementById("trade-strategy").addEventListener("click", event => {
          let target = document.querySelector("#strategy-detail");
          //  console.log("closeSearch222222")
          const withinBoundaries = event.composedPath().includes(target);
          if (withinBoundaries) {} else {
            if (this.isOpenTradeDetail) this.closeSec();
          }
        });
      }
    }, 500);
  }
  openLink() {
    if (localStorage.getItem("onb_url")) {
      let url = atob(localStorage.getItem("onb_url"));
      window.open(url, "_self");
    }
  }
  navigateToSupport() {
    this.route.navigate(["/links/support"]);
  }
  navigateToModificationFlow() {
    let userId = "";
    let url = this.postService.getOnboardingModificationURL(btoa(this.utils.getUserId()), encodeURIComponent(this.cryptography.encryptText(this.utils.getUserId())), "undefined");
    url = url.replace("&sid=undefined", "");
    url = url + "&type=dormant";
    window.open(url, "_blank");
  }
  /** get margin available (07/05/2021) */
  getMarginAvailable() {
    let userAccountStatus = this.utils.getUserAccountStatus();
    if (!(!userAccountStatus || !userAccountStatus.onboardStatus || userAccountStatus.onboardStatus == 'C')) {
      return;
    }
    //this.marginAvailable = 0;
    let usrCode = (localStorage.getItem("ng2-webstorage|usercode") || "").replace(/\"/g, "");
    let request = {
      UserId: this.isOSClientFromApp ? this.OSAppClientId : this.utils.getUserId(),
      SessionId: this.isOSClientFromApp ? this.OSAppSessionId : this.utils.getSessionId() || "",
      type: 2,
      accessToken: this.OSAppAccessToken ? this.OSAppAccessToken : this.utils.getTwoFAAccessToken()
    };
    this.marginAvailableLoader = true;
    this.postService.getFundsEquityData(request).subscribe(data => {
      if (data.Status === "Success" && data.Response && data.Response.lFundsViewDataNew) {
        this.zone.run(() => {
          setTimeout(() => {
            this.marginAvailableLoader = false;
          }, 1300);
        });
        //  this.marginAvailable = data.Response.lFundsViewDataEquity.MarginAvailable + data.Response.lFundsViewDataEquity.MarginUsed;
        this.marginAvailable = data.Response.lFundsViewDataNew.FundsAvailable || 0;
        // this.marginAvailable = data.Response.lFundsViewDataEquity.MarginAvailable + data.Response.lFundsViewDataEquity.MarginUsed;
        // } else if (this.utils.isSessionExpired(data.Reason)) {
        // if(this.shared.isSSO){
        //   this.utils.sessionExpireHandling()
        //   return
        // }
        //   this.utils.postFeatureCount();
        //   this.utils.clearLoginDetails();
        //   this.shared.userId = null;
        //   this.route.navigate(["auth/login"]);
      }
    }, err => {
      this.utils.error("Error", "Something went wrong");
      this.marginAvailableLoader = false;
      this.marginAvailable = null;
    });
  }
  /** navigate to funds  */
  navigateToFunds() {
    this.route.navigate(["client/funds"]);
  }
  /**
   * Close trade section
   */
  closeTrade() {
    this.isOpenTradeDetail = false;
  }
  /**
   * Close
   */
  closeSec() {
    this.tradeDetails.emit({
      success: "undefined",
      tradeCompleted: false
    });
  }
  /**
   * Create token string
   * @param scripArray
   * @returns
   */
  createTokenQtyString(scripArray) {
    let tokenQty = "";
    scripArray.forEach((element, index) => {
      tokenQty = tokenQty + element.scrip_token + "%7C" + (element.call_category == "sell" ? "-" + Number(element.market_lot || 0) * Number(element.lot_quantity || "1") : Number(element.market_lot || 0) * Number(element.lot_quantity || "1")) + (scripArray.length - 1 > index ? "~" : "");
    });
    return tokenQty;
  }
  /**
   * Calculate amount
   */
  calculateAmount() {
    if (!this.lotValue || this.lotValue <= 1) {
      this.lotValue = 1;
      document.getElementById("strategyID")["value"] = 1;
      this.calculateBrokerage();
    }
  }
  /**
   * Prevent decimal Point and MaxLength to be exceeded
   * @param event Key press event
   * @param maxLength Max length Allowed
   * @param model Model for field
   */
  preventDecimalAndMax(event) {
    // let value = model == 'Qty' ? 1 : 0
    let data = this.lotValue || event.target.value;
    //console.log("eventevent",data)
    let key = event.keyCode || event.charCode;
    return data <= 9999 && key >= 48 && key <= 57;
  }
  onPaste(event) {
    let clipboardData = event.clipboardData || window["clipboardData"];
    let pastedText = clipboardData.getData("text");
    //    console.log("pastedText",pastedText)
    if (!/^-?\d+$/.test(pastedText)) {
      return false;
    } else {
      let num = Number(pastedText);
      if (num > 99999) {
        return false;
      }
    }
  }
  /**Subtract Lot */
  subtractLot() {
    if (!this.lotValue || this.lotValue <= 1) {
      this.lotValue = 1;
      this.calculateBrokerage();
    } else {
      this.lotValue--;
      this.calculateBrokerage();
    }
  }
  /**
   * Add a lot
   */
  addLot() {
    if (this.lotValue < 99999) {
      this.lotValue++;
      this.calculateBrokerage();
    }
  }
  /**
   * Fetch Minimum Investment
   * @param ele
   */
  fetchMinInvestment(ele) {
    this.marginLoader = true;
    this.ChargesLoader = true;
    if (ele.option_calls && ele.option_calls.length) {
      let request = {
        SegmentId: ele.option_calls[0].scrip_segment_id,
        token_qty: this.createTokenQtyString(ele.option_calls) //this.createTokenQtyString([ele])
      };
      this.toolsService.getMarginCalculatorData(request.SegmentId, request.token_qty).subscribe(res => {
        this.marginLoader = false;
        setTimeout(() => {
          this.ChargesLoader = false;
        }, 1000);
        if (res.Status == "Success" && res.Response && res.Response.Span_Summary) {
          ele.min_inv_saved = true;
          ele.min_inv = res.Response.Span_Summary.TotalMgn || 0;
          ele.marginRequired = res.Response.Span_Summary.TotalMgn;
          // if (this.marginRequired < 1) { // if option type scrip and action is buy and if margin < 1 then margin = price * qty. if calculated margin < 1 then show NA (27/04/2021)
          //   let optionType = this.scrip.OptionType || this.scrip.type || this.scrip.OT;
          //   let secName = this.scrip.SecName ? this.scrip.SecName : this.scrip.secName ? this.scrip.secName : '';
          //   if ((['PE', 'CE'].indexOf(optionType) > -1 || (secName && (secName.indexOf('CE') > -1 || secName.indexOf('PE') > -1))) && this.action == 1) {
          //     this.marginRequired = Number(this.orderRequest.Price) * quantity;
          //   }
          // }
        } else {
          //this.marginRequired = 0;
        }
      }, err => {
        //  this.marginRequired = 0;
        this.marginLoader = false;
        setTimeout(() => {
          this.ChargesLoader = false;
        }, 1000);
      });
    }
  }
  /**
   * Place Order
   * @param addFund
   */
  placeOrder(addFund) {
    if (addFund) {
      this.openFundDrawer();
    } else {
      let allOrders = [];
      let buyOrders = [];
      let sellOrders = [];
      this.data.option_calls.forEach(ele => {
        if (ele.call_category == "buy") {
          buyOrders.push(ele);
        }
        if (ele.call_category == "sell") {
          sellOrders.push(ele);
        }
      });
      allOrders = buyOrders.concat(sellOrders);
      this.utils.setTrackMoeEvent("placedOrder", {
        User_ID: this.utils.getUserId() || "guest",
        IP: this.shared.IPAddress,
        orderType: "SmResearchOptionStrategy",
        orderReqType: "New",
        apiReq: allOrders
      });
      this.analytics.emitEvent("SmResearchOptionStrategy", this.utils.getUserId() || "guest", JSON.stringify({
        IP: this.shared.IPAddress
      }), 1);
      let i = -1;
      this.placeOrderInSequence(allOrders, i);
      //   allOrders.forEach((order, index) => {
      // })
    }
  }
  placeOrderInSequence(allOrders, i) {
    i = i + 1;
    let order = allOrders[i];
    // console.log(order,"order",this.lotValue)
    let request = {
      SegmentId: order.scrip_segment_id,
      SessionId: this.utils.getSessionId(),
      Token: order.scrip_token,
      UserId: this.utils.getUserId(),
      clientId: this.utils.getUserId(),
      gtdFormatted: null,
      Time: this.utils.getCurrentDateFormat("DD-MMM-YYYY HH:mm:ss").toUpperCase(),
      dayIOCFlag: 1,
      IsEDISReq: true,
      ClientOrderNo: "",
      //(this.utils.get('maxClientOrderNoUsed') + 1) || 1,
      OrderType: "RL_MKT",
      BS: order.call_category == "buy" ? 1 : 2,
      //1 for buy 2 for sell
      // "Qty": order.MarketLot ? order.Qty * order.MarketLot : order.Qty,
      Qty: order.lot_quantity * (order.market_lot || 1) * (this.lotValue || 1),
      //(this.lotValue && [1, 2, 3, 7].indexOf(order.scrip_segment_id) > -1) ? order.market_lot * this.lotValue : order.market_lot,
      DisclosedQty: 0,
      Price: 0,
      TriggerPrice: 0,
      Validity: 1,
      ProductType: order.research_type == "intra_day" ? "M" : "D",
      //WHICH POSITION & Intraday
      RequestType: 1,
      //1 for entry, 2 for modification,3 for cancellation
      MktProtectionPercent: 0,
      GTDDays: 0,
      ExchangeOrderNo: 0,
      ExchangeOrderTime: 0,
      GatewayOrderNo: 0,
      Remarks: "",
      "accessToken": this.utils.getTwoFAAccessToken()
    };
    request["ip"] = this.utils.get("address") || "";
    request["mode"] = 11;
    request["deviceId"] = this.utils.get("fingerprint") || "";
    request["deviceType"] = "W";
    let isLastOrder = i == allOrders.length - 1;
    this.postService.sendOrder(request).subscribe(data => {
      this.utils.put("maxClientOrderNoUsed", request.ClientOrderNo);
      if (data.Status === "Success" && data.Response) {
        let orderInfo = JSON.stringify(request);
        if (isLastOrder) {
          this.tradeDetails.emit({
            success: "undefined",
            tradeCompleted: true
          });
        } else {
          this.placeOrderInSequence(allOrders, i);
        }
      } else if (this.utils.isSessionExpired(data.Reason)) {
        this.tradeDetails.emit({
          success: "undefined",
          tradeCompleted: true
        });
        // if(this.shared.isSSO){
        //   this.utils.sessionExpireHandling()
        //   return
        // }
        //   // }
        //   this.utils.postFeatureCount();
        //   this.utils.clearLoginDetails();
        //   this.shared.userId = null;
        //   this.route.navigate(["auth/login"]);
        //   let orderInfo = JSON.stringify(request);
        // this.analytics.emitEvent("placedExitAllOrder", this.utils.getUserId() || 'guest',
        //   JSON.stringify({ selectedPositions: selectedPositions }), 1);
        // this.utils.setTrackMoeEvent("placedExitAllOrder", { "info": { selectedPositions: selectedPositions } });
      } else {
        if (isLastOrder) {
          let orderInfo = JSON.stringify(request);
          // this.analytics.emitEvent("placedExitAllOrder", this.utils.getUserId() || 'guest', JSON.stringify({ selectedPositions: selectedPositions }), 1);
          //   this.utils.setTrackMoeEvent("placedExitAllOrder", { "info": { selectedPositions: selectedPositions } });
          this.tradeDetails.emit({
            success: "undefined",
            tradeCompleted: true
          });
        } else {
          this.placeOrderInSequence(allOrders, i);
        }
      }
    }, err => {
      if (isLastOrder) {
        let orderInfo = JSON.stringify(request);
        this.tradeDetails.emit({
          success: "undefined",
          tradeCompleted: true
        });
        //  this.analytics.emitEvent("placedExitAllOrder", this.utils.getUserId() || 'guest', JSON.stringify({ selectedPositions: selectedPositions }), 1);
        //this.utils.setTrackMoeEvent("placedExitAllOrder", { "info": { selectedPositions: selectedPositions } });
      } else {
        this.placeOrderInSequence(allOrders, i);
      }
    });
  }
  /**
   * Open Drawer
   * @returns
   */
  openFundDrawer() {
    if (this.isOSClientFromApp ? this.OSProfileDetails["NRIStatus"] : this.utils.getProfileData("NRIStatus")) {
      this.showNoBankActive(true);
      return;
    }
    let action = 1;
    let bankData = ((this.isOSClientFromApp ? this.OSProfileDetails || {} : this.utils.getProfileData() || {}).BankDetails || []).filter(bank => {
      return bank.IsDefault == "Yes";
    });
    if (bankData.length) {
      // this.fundDrawer.open();
      this.getFundsDetails();
      let eventName = action == 1 ? "Pay In Button Clicked" : "Payout Button Clicked";
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
   * Get Funds Details
   */
  getFundsDetails() {
    let userAccountStatus = this.utils.getUserAccountStatus();
    if (!(!userAccountStatus || !userAccountStatus.onboardStatus || userAccountStatus.onboardStatus == 'C')) {
      return;
    }
    let request = {
      UserId: this.isOSClientFromApp ? this.OSAppClientId : this.utils.getUserId() || "",
      SessionId: this.isOSClientFromApp ? this.OSAppSessionId : this.utils.getSessionId() || "",
      GroupId: this.utils.get("groupId") || "HO",
      accessToken: this.OSAppAccessToken ? this.OSAppAccessToken : this.utils.getTwoFAAccessToken()
    };
    this.postService.getFundsEquityData(request).subscribe(data => {
      if (data.Status === "Success" && data.Response) {
        let fundsData = {
          lFundsViewDataEquity: {}
        };
        fundsData.lFundsViewDataEquity = data.Response.lFundsViewDataNew;
        fundsData = JSON.parse(JSON.stringify(fundsData));
        if (this.isOSClientFromApp) {
          this.shared.appClientId = this.OSAppClientId;
          this.utils.broadcast("openPayinPayoutDrawer", {
            source: "scheme-secure-products",
            action: 1,
            detail: fundsData,
            profile: this.OSProfileDetails,
            isClientFromApp: this.isOSClientFromApp,
            appClientId: this.OSAppClientId,
            appSessionId: this.OSAppSessionId,
            appAccessToken: this.OSAppAccessToken
          });
        } else {
          this.utils.broadcast("openPayinPayoutDrawer", {
            source: "option-strategy-detail",
            action: 1,
            detail: fundsData,
            profile: this.utils.getProfile(),
            isClientFromApp: false
          });
        }
        //   } else if (this.utils.isSessionExpired(data.Reason)) {
        // if(this.shared.isSSO){
        //   this.utils.sessionExpireHandling()
        //   return
        // }
        //     this.utils.postFeatureCount();
        //     this.utils.clearLoginDetails();
        //     this.shared.userId = null;
        //     this.route.navigate(["auth/login"]);
      }
    }, err => {
      this.utils.error("Error", "Something went wrong");
    }).add(() => {
      // this.loaders.applyLoader = false;
    });
  }
  /**
   *  On click company name,  goes to company page
   * @param item company details
   */
  gotoCompanyPage(item, isParent) {
    // const expiryDate = item.scrip_s_expiry;
    // let today = new moment().format('YYYY-MM-DD');
    // if (isParent || (expiryDate >= today || expiryDate == false || expiryDate == "0000-00-00")) {
    //   const segmentId = item.scrip_segment_id || item.symbol_segment_id;
    //   const token = item.scrip_token || item.symbol_token;
    //   const companyName =( item['scrip_sec_name']||item['scrip_symbol']||item['symbol']||"NA").replace(/[\s|\&|\%]/g, '').toLowerCase();
    //   let url = companyName + '/' + segmentId + '/' +token;
    //   if ((segmentId == 1 || segmentId == 2 || segmentId == 3)) {
    //     url = 'equity/' + url;
    //   } else if (segmentId == 5 || segmentId == 7) {
    //     url = 'commodity/' + url;
    //   } else if (segmentId == 13 || segmentId == 14) {
    //     url = 'currency/' + url;
    //   }
    //   this.route.navigate(['instrument/' + url]);
    // } else {
    //   this.utils.error('Error', 'Script Expired');
    // }
    // console.log("setTrackMoeEvent9")
  }
  const() {
    this.showData = false;
  }
  checkMobileData() {
    if (this.utils.isMobileDevice()) {
      this.showData = !this.showData;
      setTimeout(() => {
        let element = document.getElementById("mobileData");
        if (element) {
          element.scrollIntoView();
        }
      }, 100);
    }
  }
  // initBrok() {
  //   this.brokerageObj = {};
  //   this.brokerageObj.searchInput = '';
  //   this.brokerageObj.startPos = 0;
  //   this.brokerageObj.limit = 10;
  //   this.brokerageObj.tableValue = [];
  //   this.brokerageObj.selectedScrip = { 'Token': 532540, 'SegmentId': 3, 'SecDesc': "TATA CONSULTANCY SERVICES", 'SecName': "TCS", 'MarketLot': 1, 'ExchangeSegment': "BSE" };
  //   this.brokerageObj.multiTouchlineData = {};
  //   this.brokerageObj.buyPrice = '';
  //   this.brokerageObj.sellPrice = '';
  //   this.brokerageObj.quantity = 1;
  //   this.brokerageObj.brokerage = 0;
  //   this.brokerageObj.turnOver = 0;
  //   this.brokerageObj.orderType = true;
  //   this.brokerageObj.stt = 0;
  //   this.brokerageObj.transactionCharge = 0;
  //   this.brokerageObj.clearance = 0;
  //   this.brokerageObj.GST = 0;
  //   this.brokerageObj.sebi = 0;
  //   this.brokerageObj.state = 6;
  //   this.brokerageObj.stateStampDuty = 0;
  //   this.brokerageObj.option_calls = {};
  //   if (this.data && this.data.option_calls && this.data.option_calls.length) {
  //     this.data.option_calls.forEach(ele => {
  //       ele.OptionType = ele.scrip_option_type
  //       this.brokerageObj.option_calls[ele.scrip_token] = {
  //         selectedScrip: ele,
  //         buyPrice: ele.call_category == 'sell' ? 0 : ele.LTP,
  //         sellPrice: ele.call_category == 'buy' ? 0 : ele.LTP,
  //         sellValue: (this.lotValue * (ele.call_category == 'buy' ? 0 : ele.LTP) * (Number(ele.market_lot) || 1)),
  //         buyValue: (this.lotValue * (ele.call_category == 'sell' ? 0 : ele.LTP) * (Number(ele.market_lot) || 1)),
  //         quantity: 0,
  //         brokerage: 0,
  //         turnOver: 0,
  //         orderType: true,
  //         stt: 0,
  //         transactionCharge: 0,
  //         clearance: 0,
  //         GST: 0,
  //         sebi: 0,
  //         state: 0,
  //         stateStampDuty: 0,
  //       }
  //     })
  //     Object.keys(this.brokerageObj.option_calls).forEach(key => {
  //       let element = this.brokerageObj.option_calls[key]
  //       element.brokerage = this.BrokerageCal(element)
  //       element.GST = (18 * (element.brokerage + element.transactionCharge + element.clearance)) / 100;
  //     });
  //     
  //   }
  // }
  /**
   * calculate Brokearge
   * @param scrip selected scrip
   */
  // BrokerageCal(scrip) {
  //   let newScrip = JSON.parse(JSON.stringify(this.data));
  //   let brokerage = 0;
  //   let turnover = Number(scrip.turnOver);
  //   let qty = Math.floor(turnover / 10000000);
  //   scrip.sebi = qty * 15;
  //   let selectedState = this.stateArray.filter((obj) => { return obj.value == scrip.state; })[0];
  //   //orderType true delivery
  //   //action toggle true sell
  //   let charges = this.utils.getBrokerageData();
  //   let brokerageChargeFactor //= (Number(scrip.brokerageRate) || 0) / (scrip.selectedScrip.isPrice ? 1 : 100);
  //   let price = 100
  //   if (charges) {
  //     switch (scrip.SegmentId) {
  //       case 1:// NSE
  //         console.log(turnover, "brokerageObj", scrip)
  //         scrip.brokerageRate = scrip.orderType ? charges['CASH'].Delivery.percentage : charges['CASH'].Intraday.percentage;
  //         price = scrip.orderType ? charges['CASH'].Delivery.price.mul : charges['CASH'].Intraday.price.mul
  //         brokerageChargeFactor = (Number(scrip.brokerageRate) || 0) / 100;
  //         scrip.per = scrip.brokerageRate
  //         brokerage = (scrip.orderType) ? brokerageChargeFactor * turnover : brokerageChargeFactor * turnover;
  //         scrip.stt = ((scrip.orderType) ? (0.1 * turnover) : (0.025 * scrip.sellValue)) / 100;
  //         scrip.transactionCharge = (0.00345 * turnover) / 100;
  //         scrip.clearance = 0.01;
  //         scrip.stateStampDuty = scrip.call_category == 'sell' ? 0 : ((scrip.orderType) ? (selectedState.cashDelivery * turnover) : (selectedState.cashIntraday * turnover)) / 100;
  //         break;
  //       case 3:// BSE
  //         console.log(turnover, "brokerageObj", scrip)
  //         scrip.brokerageRate = scrip.orderType ? charges['CASH'].Delivery.percentage : charges['CASH'].Intraday.percentage;
  //         price = scrip.orderType ? charges['CASH'].Delivery.price.mul : charges['CASH'].Intraday.price.mul
  //         brokerageChargeFactor = (Number(scrip.brokerageRate) || 0) / 100;
  //         scrip.per = scrip.brokerageRate
  //         brokerage = (scrip.orderType) ? brokerageChargeFactor * turnover : brokerageChargeFactor * turnover;
  //         scrip.stt = ((scrip.orderType) ? (0.1 * turnover) : (0.025 * scrip.sellValue)) / 100;
  //         scrip.transactionCharge = (0.00345 * turnover) / 100;
  //         scrip.clearance = 0.01;
  //         scrip.stateStampDuty = scrip.call_category == 'sell' ? 0 : ((scrip.orderType) ? (selectedState.cashDelivery * turnover) : (selectedState.cashIntraday * turnover)) / 100;
  //         break;
  //       case 2:// NSEFO
  //         if (scrip.OptionType === 'XX') {
  //           scrip.brokerageRate = charges['DERV'].Future.percentage;
  //           price = charges['DERV'].Future.price.mul
  //           brokerageChargeFactor = (Number(scrip.brokerageRate) || 0) / 100;
  //           scrip.per = scrip.brokerageRate
  //           brokerage = brokerageChargeFactor * turnover;
  //           scrip.stt = (0.01 * scrip.sellValue) / 100;
  //           scrip.transactionCharge = (0.0020 * turnover) / 100;
  //           scrip.clearance = (0.0005 * turnover) / 100;
  //           scrip.stateStampDuty = ((scrip.orderType) ? (selectedState.fut * turnover) : (selectedState.fut * turnover)) / 100;
  //         } else if (scrip.OptionType === 'CE' || scrip.OptionType === 'PE') {
  //           // scrip.brokerageRate=charges['DERV'].Future.percentage;
  //           price = charges['DERV'].Option.rupees
  //           brokerageChargeFactor = price //(Number(scrip.brokerageRate) || 0) / (scrip.selectedScrip.isPrice ? 1 : 100);
  //           scrip.res = brokerageChargeFactor
  //           brokerage = brokerageChargeFactor * scrip.quantity * 1;;
  //           scrip.stt = (!(scrip.call_category == 'sell') ? (0.125 * scrip.buyValue) : (0.05 * scrip.sellValue)) / 100;
  //           scrip.transactionCharge = (0.05 * turnover) / 100;
  //           scrip.clearance = (0.002 * turnover) / 100;
  //           scrip.stateStampDuty = scrip.call_category == 'sell' ? 0 : ((scrip.orderType) ? (selectedState.opt * turnover) : (selectedState.opt * turnover)) / 100;
  //         }
  //         break;
  //       case 5://MCX
  //         scrip.stateStampDuty = scrip.call_category == 'sell' ? 0 : ((scrip.orderType) ? (selectedState.currency * turnover) : (selectedState.currency * turnover)) / 100;
  //         if (scrip.OptionType === 'XX') {
  //           scrip.brokerageRate = charges['COMM'].Future.percentage;
  //           price = charges['COMM'].Future.price.mul
  //           brokerageChargeFactor = (Number(scrip.brokerageRate) || 0) / 100;
  //           scrip.per = scrip.brokerageRate
  //           brokerage = brokerageChargeFactor * turnover;
  //           scrip.stt = (0.01 * scrip.sellValue) / 100;
  //           scrip.transactionCharge = ((scrip.call_category == 'sell') ? (0.0025 * scrip.sellValue) : (0.0026 * scrip.buyValue)) / 100;
  //           scrip.clearance = (0.0003 * turnover) / 100;
  //         } else if (scrip.OptionType === 'CE' || scrip.OptionType === 'PE') {
  //           price = charges['COMM'].Option.rupees
  //           brokerageChargeFactor = price//(Number(scrip.brokerageRate) || 0) / (scrip.selectedScrip.isPrice ? 1 : 100);
  //           scrip.res = brokerageChargeFactor
  //           brokerage = brokerageChargeFactor * scrip.quantity * 1;
  //           scrip.stt = (0.05 * scrip.sellValue) / 100;
  //           scrip.transactionCharge = 0;
  //           scrip.clearance = 0;
  //         }
  //         break;
  //       case 7://NCDEX
  //         scrip.stateStampDuty = scrip.call_category == 'sell' ? 0 : ((scrip.orderType) ? (selectedState.commodity * turnover) : (selectedState.commodity * turnover)) / 100;
  //         if (scrip.OptionType === 'XX') { // FUT
  //           scrip.brokerageRate = charges['COMM'].Future.percentage;
  //           price = charges['COMM'].Future.price.mul
  //           brokerageChargeFactor = (Number(scrip.brokerageRate) || 0) / 100;
  //           scrip.per = scrip.brokerageRate
  //           brokerage = brokerageChargeFactor * turnover;
  //           scrip.stt = (0.01 * scrip.sellValue) / 100;
  //           scrip.transactionCharge = (0.0040 * turnover) / 100;
  //           scrip.clearance = (0.0003 * turnover) / 100;
  //         } else if (scrip.OptionType === 'CE' || scrip.OptionType === 'PE') { // Call/PUT
  //           price = charges['COMM'].Option.rupees
  //           brokerageChargeFactor = price//(Number(scrip.brokerageRate) || 0) / (scrip.selectedScrip.isPrice ? 1 : 100);
  //           scrip.res = brokerageChargeFactor
  //           brokerage = brokerageChargeFactor * scrip.quantity * 1;
  //           scrip.stt = (0.05 * scrip.sellValue) / 100;
  //           scrip.transactionCharge = 0;
  //           scrip.clearance = 0;
  //         }
  //         break;
  //       case 13: //NSECDS
  //         if (scrip.OptionType === 'XX') {
  //           scrip.brokerageRate = charges['CURR'].Future.percentage;
  //           price = charges['CURR'].Future.price.mul
  //           brokerageChargeFactor = (Number(scrip.brokerageRate) || 0) / 100;
  //           scrip.per = scrip.brokerageRate
  //           brokerage = brokerageChargeFactor * turnover;
  //           scrip.stt = 0;
  //           scrip.transactionCharge = (0.0009 * turnover) / 100;
  //           scrip.clearance = 0;
  //         } else if (scrip.OptionType === 'CE' || scrip.OptionType === 'PE') {
  //           price = charges['CURR'].Option.rupees
  //           brokerageChargeFactor = price//(Number(scrip.brokerageRate) || 0) / (scrip.selectedScrip.isPrice ? 1 : 100);
  //           scrip.res = brokerageChargeFactor
  //           brokerage = brokerageChargeFactor * scrip.quantity * 1;;
  //           scrip.stt = 0;
  //           scrip.transactionCharge = (0.04 * turnover) / 100;
  //           scrip.clearance = 0;
  //         }
  //         break;
  //       default:
  //         break;
  //     }
  //   }
  //   return brokerage
  // }
  initialiseBrokerage() {
    this.isTradingAllowed = true;
    this.brokerageLoader = true;
    let forkJoinList = [];
    let data = this.optionCalls.find(ele => {
      return !ele.SegmentId && !ele.Token;
    });
    if (data && this.indez < 10) {
      setTimeout(() => {
        this.indez++;
        this.initialiseBrokerage();
      }, 2000);
      return;
    }
    this.optionCalls.forEach((item, i) => {
      this.isTradingAllowed = this.isOSClientFromApp ? this.allowedSegmentList.includes(item.scrip_segment_id) : this.isTradingAllowed ? this.utils.isSegmentAllowed(item.scrip_segment_id) : this.isTradingAllowed;
      forkJoinList.push(this.toolsService.getScripBrokerageURL({
        segment: Number(item.SegmentId),
        token: Number(item.Token),
        clientId: this.isOSClientFromApp ? this.OSAppClientId : this.utils.getUserId() || "guest",
        symbol: item.scrip_symbol,
        isBrokerageCalculator: true,
        isFuture: !(item.scrip_option_type == "CE" || item.scrip_option_type == "PE"),
        product: item.research_type == "intra_day" ? "m" : "d"
      }, true));
    });
    (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.forkJoin)(forkJoinList).subscribe(res => {
      (res || []).forEach((resitem, index) => {
        this.optionCalls[index].scripDetail = {};
        if (resitem.Status == "Success" && resitem.Response) {
          Object.assign(this.optionCalls[index].scripDetail, resitem.Response);
        } else {
          this.brokerageLoader = false;
        }
      });
    }).add(() => {
      this.calculateBrokerage();
      this.brokerageLoader = false;
    });
  }
  calculateBrokerage() {
    this.optionCalls.forEach((item, i) => {
      item.currentbrokerage = item.call_category == "buy" ? item.scripDetail.buyBrokerage : item.scripDetail.sellBrokerage;
      item.brokerageObj = {
        quantity: 1,
        normalizingFactor: 0,
        buyPrice: 0,
        sellPrice: 0,
        sellValue: 0,
        buyValue: 0,
        brokerage: 0,
        turnOver: 0,
        orderType: false,
        stt: 0,
        transactionCharge: 0,
        clearance: 0,
        GST: 0,
        sebi: 0,
        state: 6,
        stateStampDuty: 0
      };
      if (!item.currentbrokerage) {
        this.brokerageLoader = false;
        return;
      }
      item.scripDetail.isPrice = item.scripDetail.OT == "CE" || item.scripDetail.OT == "PE";
      item.scripDetail.orderType = false;
      item.brokerageObj.isPrice = item.scripDetail.OT == "CE" || item.scripDetail.OT == "PE";
      item.brokerageObj.brokerageRate = item.currentbrokerage.brokerage; //this.getDefaultBrokerageRate(item.scripDetail);
      item.brokerageObj.normalizingFactor = (item.scripDetail.PriceNum / item.scripDetail.PriceDen || 1) * (item.scripDetail.GenNum / item.scripDetail.GenDen || 1);
      item.brokerageObj.buyPrice = item.call_category == "sell" ? 0 : item.LTP;
      item.brokerageObj.buyPrice = Number(this.utils.decimalConversion(item.scripDetail.SegmentId, item.brokerageObj.buyPrice));
      item.brokerageObj.sellPrice = item.call_category == "buy" ? 0 : item.LTP, item.brokerageObj.sellPrice = Number(this.utils.decimalConversion(item.scripDetail.SegmentId, item.brokerageObj.sellPrice));
      item.brokerageObj.sellValue = Number(item.lot_quantity) * this.lotValue * item.brokerageObj.sellPrice * Number(item.MarketLot || 1) * item.brokerageObj.normalizingFactor;
      item.brokerageObj.buyValue = Number(item.lot_quantity) * this.lotValue * item.brokerageObj.buyPrice * Number(item.MarketLot || 1) * item.brokerageObj.normalizingFactor;
      item.brokerageObj.turnOver = item.call_category == "sell" ? item.brokerageObj.sellValue : item.brokerageObj.buyValue;
      let buyBrokerage = item.scripDetail.buyBrokerage;
      let sellBrokerage = item.scripDetail.sellBrokerage;
      let newBrokerageObj = {
        brokerageRate: 0,
        brokerage: 0,
        stt: 0,
        transactionCharge: 0,
        clearance: 0,
        GST: 0,
        sebi: 0,
        stateStampDuty: 0
      };
      //   {
      //     "brokerage": 0.01,
      //     "clearingCharges": 0.01,
      //     "defaultDeveloperCharges": 0.001,
      //     "gst": 0.18,
      //     "stampDuty": 0,
      //     "stt": 0.00025,
      //     "transactionCharges": 0.0000325,
      //     "turnoverFees": 0.0000015
      // }
      //newBrokerageObj.
      // this.brokerageObj.sellValue
      // this.brokerageObj.buyValue
      //this.brokerageObj.turnOver
      if (item.call_category == "sell") {
        //SELL
        newBrokerageObj.brokerageRate = sellBrokerage.brokerage;
        this.brokerageOrderType = sellBrokerage.orderType || "PL";
        if (this.brokerageOrderType == "PO") {
          newBrokerageObj.brokerage = newBrokerageObj.brokerageRate;
        } else {
          if (item.scrip_option_type == "CE" || item.scrip_option_type == "PE") {
            newBrokerageObj.brokerage = Number(item.lot_quantity) * this.lotValue * newBrokerageObj.brokerageRate;
          } else {
            newBrokerageObj.brokerage = item.brokerageObj.sellValue * (newBrokerageObj.brokerageRate / 100);
          }
        }
        newBrokerageObj.stt = item.brokerageObj.sellValue * sellBrokerage.stt;
        newBrokerageObj.transactionCharge = item.brokerageObj.sellValue * sellBrokerage.transactionCharges;
        newBrokerageObj.stateStampDuty = item.brokerageObj.sellValue * sellBrokerage.stampDuty;
        newBrokerageObj.sebi = item.brokerageObj.sellValue * sellBrokerage.turnoverFees;
        if (item.SegmentId == 1 || item.SegmentId == 3) {
          newBrokerageObj.clearance = 0.01;
        } else {
          newBrokerageObj.clearance = item.brokerageObj.sellValue * sellBrokerage.clearingCharges;
        }
        newBrokerageObj.GST = (newBrokerageObj.brokerage + newBrokerageObj.transactionCharge + newBrokerageObj.clearance) * sellBrokerage.gst;
      }
      if (item.call_category != "sell") {
        //BUY
        newBrokerageObj.brokerageRate = buyBrokerage.brokerage;
        this.brokerageOrderType = sellBrokerage.orderType || "PL";
        if (this.brokerageOrderType == "PO") {
          newBrokerageObj.brokerage = newBrokerageObj.brokerageRate;
        } else {
          if (item.scrip_option_type == "CE" || item.scrip_option_type == "PE") {
            newBrokerageObj.brokerage = newBrokerageObj.brokerage + Number(item.lot_quantity) * this.lotValue * newBrokerageObj.brokerageRate;
          } else {
            newBrokerageObj.brokerage = newBrokerageObj.brokerage + item.brokerageObj.buyValue * (newBrokerageObj.brokerageRate / 100);
          }
        }
        newBrokerageObj.stt = newBrokerageObj.stt + item.brokerageObj.buyValue * buyBrokerage.stt;
        newBrokerageObj.transactionCharge = newBrokerageObj.transactionCharge + item.brokerageObj.buyValue * buyBrokerage.transactionCharges;
        newBrokerageObj.stateStampDuty = newBrokerageObj.stateStampDuty + item.brokerageObj.buyValue * buyBrokerage.stampDuty;
        newBrokerageObj.sebi = newBrokerageObj.sebi + item.brokerageObj.buyValue * buyBrokerage.turnoverFees;
        if (item.SegmentId == 1 || item.SegmentId == 3) {
          newBrokerageObj.clearance = newBrokerageObj.clearance + 0.01;
        } else {
          newBrokerageObj.clearance = newBrokerageObj.clearance + item.brokerageObj.buyValue * buyBrokerage.clearingCharges;
        }
        newBrokerageObj.GST = newBrokerageObj.GST + (newBrokerageObj.brokerage + newBrokerageObj.transactionCharge + newBrokerageObj.clearance) * buyBrokerage.gst;
      }
      Object.assign(item.brokerageObj, newBrokerageObj);
      //     item.brokerageObj.brokerage = this.fetchBrokerage(item.brokerageObj, item.scripDetail, item.call_category == 'sell' ? true : false, ((Number(item.lot_quantity) * this.lotValue)), item.currentbrokerage.brokerage);
      //  item.brokerageObj.GST = (18 * (item.brokerageObj.brokerage + item.brokerageObj.transactionCharge + item.brokerageObj.clearance)) / 100;
    });
    this.brokerageObj = {};
    this.brokerageObj.tradeValue = 0;
    this.brokerageObj.brokerageRate = 0;
    this.brokerageObj.brokerageType = "";
    this.brokerageObj.buyPrice = "";
    this.brokerageObj.sellPrice = "";
    this.brokerageObj.quantity = 1;
    this.brokerageObj.turnOver = 0;
    this.brokerageObj.orderType = false;
    this.brokerageObj.brokerage = 0;
    this.brokerageObj.stt = 0;
    this.brokerageObj.transactionCharge = 0;
    this.brokerageObj.clearance = 0;
    this.brokerageObj.GST = 0;
    this.brokerageObj.stateStampDuty = 0;
    this.brokerageObj.sebi = 0;
    this.optionCalls.forEach((item, i) => {
      if (!item.currentbrokerage) {
        this.brokerageLoader = false;
        return;
      }
      this.brokerageObj.tradeValue = this.brokerageObj.tradeValue + (item.brokerageObj.buyValue + item.brokerageObj.sellValue);
      if (item.scrip_option_type == "CE" || item.scrip_option_type == "PE") {
        this.brokerageObj.brokerageType = "rupee";
        this.brokerageObj.brokerageRate = Number(item.currentbrokerage.brokerage);
      } else {
        this.brokerageObj.brokerageType = "per";
        this.brokerageObj.brokerageRate = Number(item.currentbrokerage.brokerage);
      }
      this.brokerageObj.brokerage = this.brokerageObj.brokerage + item.brokerageObj.brokerage;
      this.brokerageObj.stt = this.brokerageObj.stt + item.brokerageObj.stt;
      this.brokerageObj.transactionCharge = this.brokerageObj.transactionCharge + item.brokerageObj.transactionCharge;
      this.brokerageObj.clearance = this.brokerageObj.clearance + item.brokerageObj.clearance;
      this.brokerageObj.GST = this.brokerageObj.GST + item.brokerageObj.GST;
      this.brokerageObj.stateStampDuty = this.brokerageObj.stateStampDuty + item.brokerageObj.stateStampDuty;
      this.brokerageObj.sebi = this.brokerageObj.sebi + item.brokerageObj.sebi;
    });
  }
  /**
   * calculate Brokearge
   * @param scrip selected scrip
   */
  fetchBrokerage(brokerageObj, scrip, actionToggle, OSQty, currentbrokerage) {
    let brokerage;
    let turnover = Number(brokerageObj.turnOver);
    // let qty = Math.floor(turnover / 10000000);
    // brokerageObj.sebi = qty * 15;
    brokerageObj.sebi = turnover * 0.00015 / 100;
    let selectedState = {
      name: "Maharashtra",
      value: 6,
      cashIntraday: 0.002,
      cashDelivery: 0.01,
      fut: 0.002,
      opt: 0.002,
      currency: 0.0001,
      commodity: 0.001,
      commodityFut: 0.002,
      commodityOpt: 0.003,
      max: ""
    };
    // let brokerageChargeFactor = (Number(brokerageObj.brokerageRate) || 0) / (brokerageObj.isPrice ? 1 : 100);
    let charges = this.utils.getBrokerageData();
    let brokerageChargeFactor;
    let price = 100;
    switch (scrip.SegmentId) {
      case 1:
        // NSE
        // brokerage = (brokerageObj.orderType) ? brokerageChargeFactor * turnover : brokerageChargeFactor * turnover;
        // brokerageObj.stt = ((brokerageObj.orderType) ? (0.1 * turnover) : (0.025 * brokerageObj.sellValue)) / 100;
        // brokerageObj.transactionCharge = (0.00345 * turnover) / 100;
        // brokerageObj.clearance = 0.01;
        // brokerageObj.stateStampDuty = ((brokerageObj.orderType) ? (selectedState.cashDelivery * brokerageObj.buyValue) : (selectedState.cashIntraday * brokerageObj.buyValue)) / 100;
        if (charges["CASH"]) {
          brokerageObj.brokerageRate = currentbrokerage.brokerage; //brokerageObj.orderType ? charges['CASH'].Delivery.percentage : charges['CASH'].Intraday.percentage;
          price = brokerageObj.orderType ? charges["CASH"].Delivery.price.mul : charges["CASH"].Intraday.price.mul;
          brokerageChargeFactor = (Number(brokerageObj.brokerageRate) || 0) / 100;
          scrip.per = brokerageObj.brokerageRate;
          brokerage = brokerageObj.orderType ? brokerageChargeFactor * turnover : brokerageChargeFactor * turnover;
          brokerageObj.stt = (brokerageObj.orderType ? 0.1 * turnover : 0.025 * brokerageObj.sellValue) / 100;
          brokerageObj.transactionCharge = 0.00345 * turnover / 100;
          brokerageObj.clearance = 0.01;
          brokerageObj.stateStampDuty = actionToggle ? 0 : (brokerageObj.orderType ? selectedState.cashDelivery * turnover : selectedState.cashIntraday * turnover) / 100;
        }
        break;
      case 3:
        // BSE
        // brokerage = (brokerageObj.orderType) ? brokerageChargeFactor * turnover : brokerageChargeFactor * turnover;
        // brokerageObj.stt = ((brokerageObj.orderType) ? (0.1 * turnover) : (0.025 * brokerageObj.sellValue)) / 100;
        // brokerageObj.transactionCharge = (0.00345 * turnover) / 100;
        // brokerageObj.clearance = 0.01;
        // brokerageObj.stateStampDuty = ((brokerageObj.orderType) ? (selectedState.cashDelivery * brokerageObj.buyValue) : (selectedState.cashIntraday * brokerageObj.buyValue)) / 100;
        if (charges["CASH"]) {
          brokerageObj.brokerageRate = currentbrokerage.brokerage;
          price = brokerageObj.orderType ? charges["CASH"].Delivery.price.mul : charges["CASH"].Intraday.price.mul;
          brokerageChargeFactor = (Number(brokerageObj.brokerageRate) || 0) / 100;
          scrip.per = brokerageObj.brokerageRate;
          brokerage = brokerageObj.orderType ? brokerageChargeFactor * turnover : brokerageChargeFactor * turnover;
          brokerageObj.stt = (brokerageObj.orderType ? 0.1 * turnover : 0.025 * brokerageObj.sellValue) / 100;
          brokerageObj.transactionCharge = 0.00345 * turnover / 100;
          brokerageObj.clearance = 0.01;
          brokerageObj.stateStampDuty = actionToggle ? 0 : (brokerageObj.orderType ? selectedState.cashDelivery * turnover : selectedState.cashIntraday * turnover) / 100;
        }
        break;
      case 2:
        // NSEFO
        // if (scrip.OT === 'XX') {
        //   brokerage = brokerageChargeFactor * turnover;
        //   brokerageObj.stt = (0.01 * brokerageObj.sellValue) / 100;
        //   brokerageObj.transactionCharge = (0.002 * turnover) / 100;
        //   brokerageObj.clearance = (0.0005 * turnover) / 100;
        //   brokerageObj.stateStampDuty = ((brokerageObj.orderType) ? (selectedState.fut * brokerageObj.buyValue) : (selectedState.fut * brokerageObj.buyValue)) / 100;
        // } else if (scrip.OT === 'CE' || scrip.OT === 'PE') {
        //   brokerage = brokerageChargeFactor * brokerageObj.quantity * (brokerageObj.sellValue && brokerageObj.buyValue ? 2 : 1);;
        //   brokerageObj.stt = (0.05 * brokerageObj.sellValue) / 100;
        //   brokerageObj.transactionCharge = (0.05 * turnover) / 100;
        //   brokerageObj.clearance = (0.002 * turnover) / 100;
        //   brokerageObj.stateStampDuty = ((brokerageObj.orderType) ? (selectedState.opt * brokerageObj.buyValue) : (selectedState.opt * brokerageObj.buyValue)) / 100;
        // }
        if (charges["DERV"]) {
          if (scrip.OT === "XX") {
            brokerageObj.brokerageRate = currentbrokerage.brokerage;
            price = currentbrokerage.brokerage;
            brokerageChargeFactor = (Number(brokerageObj.brokerageRate) || 0) / 100;
            scrip.per = brokerageObj.brokerageRate;
            brokerage = brokerageChargeFactor * turnover;
            brokerageObj.stt = 0.01 * brokerageObj.sellValue / 100;
            brokerageObj.transactionCharge = 0.002 * turnover / 100;
            brokerageObj.clearance = 0.0005 * turnover / 100;
            brokerageObj.stateStampDuty = actionToggle ? 0 : (brokerageObj.orderType ? selectedState.fut * turnover : selectedState.fut * turnover) / 100;
          } else if (scrip.OT === "CE" || scrip.OT === "PE") {
            // brokerageObj.brokerageRate=charges['DERV'].Future.percentage;
            price = currentbrokerage.brokerage;
            brokerageChargeFactor = price; //(Number(brokerageObj.brokerageRate) || 0) / (brokerageObj.selectedScrip.isPrice ? 1 : 100);
            scrip.res = brokerageChargeFactor;
            brokerage = brokerageChargeFactor * OSQty * 1;
            brokerageObj.stt = (!actionToggle ? 0.125 * brokerageObj.buyValue : 0.05 * brokerageObj.sellValue) / 100;
            brokerageObj.transactionCharge = 0.05 * turnover / 100;
            brokerageObj.clearance = 0.002 * turnover / 100;
            brokerageObj.stateStampDuty = actionToggle ? 0 : (brokerageObj.orderType ? selectedState.opt * turnover : selectedState.opt * turnover) / 100;
          }
        }
        break;
      case 5:
        //MCX
        // if (scrip.OT === 'XX') {
        //   brokerageObj.stateStampDuty = (selectedState.commodityFut * brokerageObj.buyValue) / 100;
        //   brokerage = brokerageChargeFactor * turnover;
        //   brokerageObj.stt = (0.01 * brokerageObj.sellValue) / 100;
        //   brokerageObj.transactionCharge = ((0.0026 * brokerageObj.buyValue) + (0.0025 * brokerageObj.sellValue)) / 100;
        //   brokerageObj.clearance = (0.0003 * turnover) / 100;
        // } else if (scrip.OT === 'CE' || scrip.OT === 'PE') {
        //   brokerageObj.stateStampDuty = (selectedState.commodityOpt * brokerageObj.buyValue) / 100;
        //   brokerage = brokerageChargeFactor * brokerageObj.quantity * (brokerageObj.sellValue && brokerageObj.buyValue ? 2 : 1);
        //   brokerageObj.stt = (0.05 * brokerageObj.sellValue) / 100;
        //   brokerageObj.transactionCharge = (0.05 * turnover) / 100;
        //   brokerageObj.clearance = (0.02 * turnover) / 100;
        // }
        if (charges["COMM"]) {
          if (scrip.OT === "XX") {
            brokerageObj.stateStampDuty = actionToggle ? 0 : selectedState.commodityFut * turnover / 100;
            brokerageObj.brokerageRate = currentbrokerage.brokerage;
            price = currentbrokerage.brokerage;
            brokerageChargeFactor = (Number(brokerageObj.brokerageRate) || 0) / 100;
            scrip.per = brokerageObj.brokerageRate;
            brokerage = brokerageChargeFactor * turnover;
            brokerageObj.stt = actionToggle ? 0.01 * brokerageObj.sellValue / 100 : 0;
            brokerageObj.transactionCharge = (actionToggle ? 0.0026 * brokerageObj.sellValue : 0.0026 * brokerageObj.buyValue) / 100;
            brokerageObj.clearance = 0.0003 * turnover / 100;
          } else if (scrip.OT === "CE" || scrip.OT === "PE") {
            brokerageObj.stateStampDuty = actionToggle ? 0 : selectedState.commodityOpt * turnover / 100;
            price = currentbrokerage.brokerage;
            brokerageChargeFactor = price;
            scrip.res = brokerageChargeFactor;
            brokerage = brokerageChargeFactor * OSQty * 1;
            brokerageObj.stt = actionToggle ? 0.05 * brokerageObj.sellValue / 100 : 0.0001 * brokerageObj.buyValue / 100;
            brokerageObj.transactionCharge = (actionToggle ? 0.05 * brokerageObj.sellValue : 0.05 * brokerageObj.buyValue) / 100;
            brokerageObj.clearance = 0.02 * turnover / 100;
          }
        }
        break;
      case 7:
        //NCDEX
        // if (scrip.OT === 'XX') { // FUT
        //   brokerageObj.stateStampDuty = (selectedState.commodityFut * brokerageObj.buyValue) / 100;
        //   brokerage = brokerageChargeFactor * turnover;
        //   brokerageObj.stt = (0.01 * brokerageObj.sellValue) / 100;
        //   brokerageObj.transactionCharge = (0.0040 * turnover) / 100;
        //   brokerageObj.clearance = (0.0003 * turnover) / 100;
        // } else if (scrip.OT === 'CE' || scrip.OT === 'PE') { // Call/PUT
        //   brokerageObj.stateStampDuty = (selectedState.commodityOpt * brokerageObj.buyValue) / 100;
        //   brokerage = brokerageChargeFactor * brokerageObj.quantity * (brokerageObj.sellValue && brokerageObj.buyValue ? 2 : 1);
        //   brokerageObj.stt = (0.05 * brokerageObj.sellValue) / 100;
        //   brokerageObj.transactionCharge = (0.05 * turnover) / 100;
        //   brokerageObj.clearance = (0.02 * turnover) / 100;
        // }
        if (charges["COMM"]) {
          if (scrip.OT === "XX") {
            // FUT
            brokerageObj.stateStampDuty = selectedState.commodityFut * turnover / 100;
            brokerageObj.brokerageRate = currentbrokerage.brokerage;
            price = charges["COMM"].Future.price.mul;
            brokerageChargeFactor = (Number(brokerageObj.brokerageRate) || 0) / 100;
            scrip.per = brokerageObj.brokerageRate;
            brokerage = brokerageChargeFactor * turnover;
            brokerageObj.stt = actionToggle ? 0.01 * brokerageObj.sellValue / 100 : 0;
            brokerageObj.transactionCharge = 0.004 * turnover / 100;
            brokerageObj.clearance = 0.0003 * turnover / 100;
          } else if (scrip.OT === "CE" || scrip.OT === "PE") {
            brokerageObj.stateStampDuty = actionToggle ? 0 : selectedState.commodityOpt * turnover / 100;
            price = charges["COMM"].Option.rupees;
            brokerageChargeFactor = price;
            scrip.res = brokerageChargeFactor;
            brokerage = brokerageChargeFactor * OSQty * 1;
            brokerageObj.stt = actionToggle ? 0.05 * brokerageObj.sellValue / 100 : 0.0001 * brokerageObj.buyValue / 100;
            brokerageObj.transactionCharge = (actionToggle ? 0.05 * brokerageObj.sellValue : 0.05 * brokerageObj.buyValue) / 100;
            brokerageObj.clearance = 0.02 * turnover / 100;
          }
        }
        break;
      case 13:
        //NSECDS
        // brokerageObj.stateStampDuty = (selectedState.currency * brokerageObj.buyValue) / 100;
        // if (scrip.OT === 'XX') {
        //   brokerage = brokerageChargeFactor * turnover;
        //   brokerageObj.stt = 0;
        //   brokerageObj.transactionCharge = (0.0009 * turnover) / 100;
        //   brokerageObj.clearance = (0.0005 * turnover) / 100;
        // } else if (scrip.OT === 'CE' || scrip.OT === 'PE') {
        //   brokerage = brokerageChargeFactor * brokerageObj.quantity * (brokerageObj.sellValue && brokerageObj.buyValue ? 2 : 1);;
        //   brokerageObj.stt = 0;
        //   brokerageObj.transactionCharge = (0.035 * turnover) / 100;
        //   brokerageObj.clearance = (0.002 * turnover) / 100;
        // }
        if (charges["CURR"]) {
          brokerageObj.stateStampDuty = actionToggle ? 0 : selectedState.currency * turnover / 100;
          if (scrip.OT === "XX") {
            brokerageObj.brokerageRate = charges["CURR"].Future.percentage;
            price = charges["CURR"].Future.price.mul;
            brokerageChargeFactor = (Number(brokerageObj.brokerageRate) || 0) / 100;
            scrip.per = brokerageObj.brokerageRate;
            brokerage = brokerageChargeFactor * turnover;
            brokerageObj.stt = 0;
            brokerageObj.transactionCharge = 0.0009 * turnover / 100;
            brokerageObj.clearance = 0.0005 * turnover / 100;
          } else if (scrip.OT === "CE" || scrip.OT === "PE") {
            price = charges["CURR"].Option.rupees;
            brokerageChargeFactor = price;
            scrip.res = brokerageChargeFactor;
            brokerage = brokerageChargeFactor * OSQty * 1;
            brokerageObj.stt = 0;
            brokerageObj.transactionCharge = 0.035 * turnover / 100;
            brokerageObj.clearance = 0.002 * turnover / 100;
          }
        }
        break;
      default:
        break;
    }
    return brokerage;
  }
  getDefaultBrokerageRate(scrip) {
    let rate = 0;
    if (scrip.isPrice) {
      rate = 20;
    } else if (!scrip.isPrice) {
      rate = scrip.SegmentId == 1 || scrip.SegmentId == 3 ? scrip.orderType ? 0.0 : 0.03 : 0.03;
    }
    return rate;
  }
  static {
    this.ctorParameters = () => [{
      type: src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_7__.UtilsService
    }, {
      type: src_app_services_cryptography_service__WEBPACK_IMPORTED_MODULE_3__.CryptographyService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.NgZone
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Renderer2
    }, {
      type: src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_2__.AnalyticsService
    }, {
      type: src_app_services_rest_post_login_service__WEBPACK_IMPORTED_MODULE_4__.PostLoginService
    }, {
      type: src_app_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_6__.SharedDataService
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.Router
    }, {
      type: src_app_services_rest_tool_service__WEBPACK_IMPORTED_MODULE_5__.ToolService
    }];
  }
  static {
    this.propDecorators = {
      tradeDetails: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Output
      }],
      isOpenTradeDetail: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input,
        args: ["isOpenTradeDetail"]
      }],
      data: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input,
        args: ["data"]
      }],
      OSAppAccessToken: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input,
        args: ["OSAppAccessToken"]
      }],
      isOSClientFromApp: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input,
        args: ["isOSClientFromApp"]
      }],
      OSAppClientId: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input,
        args: ["OSAppClientId"]
      }],
      OSAppSessionId: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input,
        args: ["OSAppSessionId"]
      }],
      OSProfileDetails: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input,
        args: ["OSProfileDetails"]
      }],
      isOSSegmentAllowed: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input,
        args: ["isOSSegmentAllowed"]
      }],
      allowedSegmentList: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input,
        args: ["allowedSegmentList"]
      }]
    };
  }
};
OptionDetailComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: "app-option-detail",
  template: _option_detail_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_15__.DecimalPipe, _pipes_segment_pipe__WEBPACK_IMPORTED_MODULE_10__.SegmentPipe, _pipes_condense_pipe__WEBPACK_IMPORTED_MODULE_9__.CondensePipe, _pipes_value_pipe__WEBPACK_IMPORTED_MODULE_8__.ValuePipe],
  styles: [(_option_detail_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__metadata)("design:paramtypes", [src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_7__.UtilsService, src_app_services_cryptography_service__WEBPACK_IMPORTED_MODULE_3__.CryptographyService, _angular_core__WEBPACK_IMPORTED_MODULE_11__.NgZone, _angular_core__WEBPACK_IMPORTED_MODULE_11__.Renderer2, src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_2__.AnalyticsService, src_app_services_rest_post_login_service__WEBPACK_IMPORTED_MODULE_4__.PostLoginService, src_app_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_6__.SharedDataService, _angular_router__WEBPACK_IMPORTED_MODULE_13__.Router, src_app_services_rest_tool_service__WEBPACK_IMPORTED_MODULE_5__.ToolService])], OptionDetailComponent);


/***/ }),

/***/ 59833:
/*!**********************************************************************************************!*\
  !*** ./src/app/research-report/research-report-section/research-report-section.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResearchReportSectionComponent: () => (/* binding */ ResearchReportSectionComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _research_report_section_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./research-report-section.component.html?ngResource */ 15867);
/* harmony import */ var _research_report_section_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./research-report-section.component.scss?ngResource */ 83473);
/* harmony import */ var _research_report_section_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_research_report_section_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs */ 18530);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs/operators */ 70152);
/* harmony import */ var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/analytics/analytics.service */ 50213);
/* harmony import */ var src_app_services_cryptography_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/cryptography.service */ 67224);
/* harmony import */ var src_app_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/firestore/firestore.service */ 49125);
/* harmony import */ var src_app_services_rest_post_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/rest/post-login.service */ 4135);
/* harmony import */ var src_app_services_rest_tool_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/rest/tool.service */ 91387);
/* harmony import */ var src_app_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/shared-data/shared-data.service */ 46013);
/* harmony import */ var src_app_services_sockets_broadcaster__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/sockets/broadcaster */ 28510);
/* harmony import */ var src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/utils/utils.service */ 89893);
/* harmony import */ var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ngx-bootstrap/popover */ 69966);
/* harmony import */ var _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../assets/libs/esm-moment.min.js */ 29483);
/* harmony import */ var _directives_dropdown_dropdown_not_closable_zone_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../directives/dropdown/dropdown-not-closable-zone.directive */ 11846);
/* harmony import */ var _directives_dropdown_dropdown_open_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../directives/dropdown/dropdown-open.directive */ 55720);
/* harmony import */ var _directives_dropdown_dropdown_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../directives/dropdown/dropdown.directive */ 51429);
/* harmony import */ var _directives_input_restrict2_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../directives/input-restrict2.directive */ 5833);
/* harmony import */ var _directives_show_focus_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../directives/show-focus.directive */ 57862);
/* harmony import */ var _pipes_condense_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../pipes/condense.pipe */ 82203);
/* harmony import */ var _pipes_segment_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../pipes/segment.pipe */ 39995);
/* harmony import */ var _pipes_value_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../pipes/value.pipe */ 50615);
/* harmony import */ var _services_pager_pager_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../services/pager/pager.service */ 20641);
/* harmony import */ var _tooltip_module_tooltip_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../tooltip-module/tooltip.directive */ 45153);
/* harmony import */ var _option_detail_option_detail_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../option-detail/option-detail.component */ 72569);

















/** Import Moment JS Library*/













let ResearchReportSectionComponent = class ResearchReportSectionComponent {
  /**
   *
   * @param route
   * @param location
   *
   */
  constructor(cryptography, route, broadcaster, firebaseService, pagerService, location, router, shared, renderer, toolsService, utils, rest, analytics) {
    this.cryptography = cryptography;
    this.route = route;
    this.broadcaster = broadcaster;
    this.firebaseService = firebaseService;
    this.pagerService = pagerService;
    this.location = location;
    this.router = router;
    this.shared = shared;
    this.renderer = renderer;
    this.toolsService = toolsService;
    this.utils = utils;
    this.rest = rest;
    this.analytics = analytics;
    /** Price divisor */
    this.priceDivisor = 100;
    /**
     * pager object
     */
    this.pager = {};
    this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_22__.Subject();
    this.researchTerm = {
      "Good to Enter": "You can still buy/sell",
      "Book Part Profit": "If you have invested, then close the position partially and take the gains",
      "Booked Part Profit": "If you have invested, then close the position partially and take the gains",
      "Book Full Profit": "If you have invested, then close the position completely and take the gains",
      "Booked Full Profit": "If you have invested, then close the position completely and take the gains",
      "Stop Loss Hit": "The recommended stock or derivative has touched its stop loss price.",
      "Exit": "You can exit from the trade."
    };
    // this.isNonEqUser
    this.renderer.listen("window", "online", event => {
      //  this.utils.info("You are Online", "Internet Connected!! ");
      window.location.reload();
    });
    this.isServiceHit = false;
    this.popoverMessages = {
      performance: "Performance is calculated based on your selected filters for the last 90 days and 5 years for Long term calls"
    };
    this.all_optionsCalls = [];
    this.detail = {};
    this.currentMenu = {};
    this.tradeSuccessConf = {
      success: false,
      tradeCompleted: false
    };
    this.progressNumber = {
      number: 0,
      class: "success-green",
      classParent: "box-perfp-green",
      classBars: "greenbar"
    };
    this.filterConfig = {
      experts: {},
      signals: {
        FiveMinPVBreakout: "intra_spurt",
        intra_spurt: "FiveMinPVBreakout",
        FifteenMinPVBreakout: "dark_horse",
        dark_horse: "FifteenMinPVBreakout",
        CQuant: "c_quant",
        c_quant: "CQuant",
        FiveMinSTBreakout: "future_trade_simplifier_intraday",
        future_trade_simplifier_intraday: "FiveMinSTBreakout",
        FifteenMinSTBreakout: "future_trade_simplifier_position",
        future_trade_simplifier_position: "FifteenMinSTBreakout"
      }
    };
    let userAccountStatus = this.utils.getUserAccountStatus();
    this.isNonEqUser = !(!userAccountStatus || !userAccountStatus.onboardStatus || userAccountStatus.onboardStatus == 'C');
    this.config = {
      filter: {
        type: "experts"
      },
      duration: this.isNonEqUser ? "month" : shared.userId && shared.userId != "guest" ? "week" : "year",
      desc: {
        60: "Performance is calculated based on your selected filters for the last 90 days and 5yrs for Long term calls.",
        2: "Technical research calls given by our expert Sumeet Bagadia.",
        3: "Trading strategy based on data-driven research using quantitative mathematical models for T+5 trading horizons."
      }
    };
    this.percentageData = {
      positive: 0,
      negative: 0,
      success: 0,
      active: 0
    };
    this.researchList = {};
    this.data = {
      offset: 0,
      limit: 10
    };
    this.offset = 0;
    this.total_Count = 0;
    this.cssClasses = {
      sortAscending: "icon-angle-down",
      sortDescending: "icon-angle-up",
      pagerLeftArrow: "icon-angle-left",
      pagerRightArrow: "icon-angle-right",
      pagerPrevious: "icon-angle-left",
      pagerNext: "icon-angle-right"
    };
    this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.UntypedFormGroup({
      is_expert: new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.UntypedFormControl("0"),
      status: new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.UntypedFormControl(shared.userId && shared.userId != "guest" ? "all" : "target_achieved"),
      research_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.UntypedFormControl("all")
    });
    this.signalFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.UntypedFormGroup({
      type: new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.UntypedFormControl("EQ"),
      status: new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.UntypedFormControl(shared.userId && shared.userId != "guest" ? "all" : "T1")
    });
    this.todaysDate = new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_10__["default"]().format("YYYY-MM-DD");
    this.keyPressSubscription = this.utils.broadcastObservable("escapeKeyPressed").subscribe(() => {
      if (this.showPreLogin) {
        this.closePreLogin();
      }
    });
    this.popupCloseSubscription = this.utils.broadcastObservable("closePopups").subscribe(data => {
      if (this.showPreLogin) {
        this.closePreLogin();
      }
    });
    this.isMobileDeviceCheck = false;
  }
  /**
   *
   * @param controlName
   * @param value
   */
  setRadio(controlName, value) {
    if (this.config.filter.type === "experts" || this.config.filter.type === "fundamental") {
      if (value && this.userForm.get(controlName).value == value) {
        //  this.userForm.controls[controlName].reset();
      }
    } else {
      if (value && this.signalFilter.get(controlName).value == value) {
        // this.signalFilter.controls[controlName].reset();
      }
    }
  }
  goToLogin() {
    if (!this.isGoingToDetail) this.utils.setFromURL();
    this.isGoingToDetail = false;
    this.router.navigate(["auth/login"]);
  }
  /**
   *
   * @param item
   */
  goToDetails(item) {
    this.displayDetailPage = !this.displayDetailPage;
    // let categoryId = this.utils.getSlugOrId('category', item.category_id);
    // let subCategoryId = this.utils.getSlugOrId(item.category_id, item.subcategory_id);
    // let companyURL = (item.scrip_name || "").trim().toLowerCase().replace(/\s/g, '-').replace(/\//g, '').replace(/(-)+/g, '-');
    // let id = item.id ? item.id : '';
    // let url = categoryId + '/' + subCategoryId + '/' + (companyURL) + '/' + item.report_id;
    // if (id) {
    //   url = categoryId + '/' + subCategoryId + '/' + (companyURL) + '/' + item.report_id + '/' + id;
    // }
    // let request = {
    //   // end_date: date.end_date,
    //   is_expert: this.data.is_expert,
    //   research_type: this.data.research_type == 'all' ? '' : this.data.research_type,
    //   limit: 10,
    //   offset: this.data.offset || 0,
    //   segment: this.config.filter.trade || 'EQ',
    //   // start_date: date.start_date,
    //   status: this.data.status == 'all' ? '' : this.data.status,
    //   subcategory_id: subCategoryId,
    //   search: this.data.search || '',
    //   user_id: this.utils.getUserId()
    // };
    // this.shared.getNewResearchPayload(item);
    // localStorage.setItem("newResearchReportDetails",JSON.stringify(item));
    // ,{ queryParams: { newResearch: 'true' }}
    // this.router.navigate(['/research-report/' + url]);
  }
  ngOnInit() {
    // this.placeOrder()
    //this.openTradeStrategy({})
    // this.utils.setTrackMoeEvent('visitedResearchBSDF', { "User_ID": this.utils.getUserId() || 'guest', "IP": this.shared.IPAddress });
    // this.analytics.emitEvent('visitedResearchBSDF', this.utils.getUserId() || 'guest', JSON.stringify({"IP": this.shared.IPAddress}), 1);
    this.isMobile = this.utils.isMobileDevice();
    this.researchDetailSubscription = this.utils.broadcastObservable("researchDetailClose").subscribe(data => {
      if (data) {
        this.data.id = "";
        let state = "/research-report/research/" + this.config.filter.type + "/" + this.config.filter.trade;
        //let state = '/research-report/research/' + this.config.filter.trade + '/' + this.config.filter.type
        this.location.replaceState(state);
        this.clearFilter();
      }
    });
    if (!this.shared.userId || this.shared.userId == "guest") {
      let ele = document.getElementById("main-container");
      if (ele) {
        ele.classList.add("full-width-container");
      }
      let ele2 = document.getElementById("rrp-new-top-sub");
      if (ele2) {
        ele2.classList.add("full-width-container-padded");
      }
      document.body.classList.add("single-content");
    }
    this.watchlistNames = this.utils.getWatchListName(-1) || {};
    this.route.params.subscribe(params => {
      this.isGoingToDetail = false;
      this.pager = {};
      this.total_Count = 0;
      this.currentPage = 1;
      this.data.search = "";
      this.data.id = "";
      this.data.offset = 0;
      this.pager.currentPage = 1;
      this.percentageData = {
        positive: 0,
        negative: 0,
        success: 0,
        active: 0
      };
      this.config.filter = JSON.parse(JSON.stringify(params));
      this.shared.userId && this.shared.userId != "guest" || !this.isNonEqUser ? "week" : "year";
      // this.config.duration =this.config.filter.type == 'experts' && this.config.filter.trade=='FO' ?'today':(this.shared.userId && this.shared.userId != 'guest') ? 'week' : 'year';
      let segmentId = this.config.filter.type == "option_strategy" ? 2 : this.config.filter.trade == "EQ" ? 1 : this.config.filter.trade == "FO" ? 2 : this.config.filter.trade == "COM" ? 5 : this.config.filter.trade == "CDS" ? 7 : "";
      this.route.queryParams.subscribe(qparams => {
        if (qparams["clientId"] && qparams["sessionId"] && qparams["isSegmentAllowed"] && qparams["socketURL"] && qparams["allowedSegmentList"]) {
          this.isOSClientFromApp = true;
          this.shared.routeConfig.watchlist = false;
          document.body.classList.add("single-content", "app-strategy-cont");
          if (document.getElementById('main-container')) {
            document.getElementById('main-container').classList.add('no-mt');
          }
          this.shared.routeConfig.header = false;
          this.shared.routeConfig.footer = false;
          this.shared.routeConfig.betaFooter = false;
          this.OSAppClientId = atob(qparams["clientId"]);
          if (this.OSAppClientId) {
            this.shared.isClientFromApp = true;
          }
          this.OSAppSessionId = atob(qparams["sessionId"]);
          this.OSAppAccessToken = qparams["accessToken"] ? atob(qparams["accessToken"]) : null;
          this.isOSSegmentAllowed = atob(qparams["isSegmentAllowed"]);
          this.isOSSocketURL = atob(qparams["socketURL"]);
          this.isMobileDeviceCheck = this.utils.isMobileDeviceCheck();
          let allowedSegList = atob(qparams["allowedSegmentList"]);
          this.allowedSegmentList = allowedSegList.split(",");
        }
      });
      this.isSegmentAllowed = this.isOSClientFromApp ? this.isOSSegmentAllowed === "true" ? "Y" : "N" : !this.shared.userId || this.shared.userId == "guest" ? "Y" : this.utils.isSegmentAllowed(segmentId) ? "Y" : "N";
      if (this.config.filter.report_uuid) {
        this.data.id = this.config.filter.report_uuid; //uncomment
        // this.data.search = this.config.filter.report_uuid //uncomment
      }
      if (this.config.filter.type == "experts") {
        this.data.is_expert = "";
        this.data.status = "";
        this.data.research_type = "";
        this.userForm.get("is_expert").setValue(this.config.filter.report_type ? this.config.filter.report_type == "all" ? "0" : "1" : "0");
        this.userForm.get("status").setValue(this.shared.userId && this.shared.userId != "guest" || !this.isNonEqUser ? "all" : "target_achieved");
        this.userForm.get("research_type").setValue("all");
        this.fetchSuccessRatio();
        this.onFormSubmit();
      } else if (this.config.filter.type == "fundamental") {
        this.data.is_expert = "";
        this.data.status = "";
        this.data.research_type = "Medium To Long Term";
        this.userForm.get("is_expert").setValue("0");
        this.userForm.get("status").setValue(this.shared.userId && this.shared.userId != "guest" || !this.isNonEqUser ? "all" : "target_achieved");
        this.userForm.get("research_type").setValue("Medium To Long Term");
        this.fetchSuccessRatio("fundamental");
        this.onFormSubmit();
      } else if (this.config.filter.type == "option_strategy") {
        this.data.is_expert = "";
        this.data.status = "";
        this.data.research_type = "all";
        // this.userForm.get('is_expert').setValue('0');
        this.userForm.get("status").setValue(this.isOSClientFromApp ? "all" : this.shared.userId && this.shared.userId != "guest" || !this.isNonEqUser ? "all" : "target_achieved");
        this.userForm.get("research_type").setValue("all");
        // this.fetchSuccessRatio('fundamental')
        if (this.isOSClientFromApp) {
          this.getProfileDetails();
          this.getBrokerage();
        }
        this.onFormSubmit();
      } else {
        this.data.status = "";
        this.signalFilter.get("status").setValue(this.shared.userId && this.shared.userId != "guest" || !this.isNonEqUser ? "all" : "T1");
        if (params && (params.alertId || this.data.id)) {
          this.signalFilter.get("type").patchValue(this.config.filter.trade);
          // this.fetchSignalSuccessRatio()
          this.onFormSubmit(false, params.alertId || this.data.id);
        } else {
          this.signalFilter.get("type").patchValue(this.config.filter.report_type && this.filterConfig.signals[this.config.filter.report_type] ? this.filterConfig.signals[this.config.filter.report_type] : this.config.filter.trade);
          // this.fetchSignalSuccessRatio()
          this.onFormSubmit();
        }
      }
      // this.config.filter.trade == 'EQ' ? 1 : this.config.filter.trade == 'FO' ? 2 : this.config.filter.trade == 'COM' ? 5 : this.config.filter.trade == 'CDS' ? 7 : ''
      //  console.log("setTrackMoeEvent2")
      this.utils.setTrackMoeEvent("visitedResearch" + (this.config.filter.type == "experts" ? "Expert" : this.config.filter.type == "fundamental" ? "Fundamental" : this.config.filter.type == "option_strategy" ? "Option Strategy" : "Signal") + (this.config.filter.trade == "EQ" ? "Equity" : this.config.filter.trade == "FO" ? "Derivative" : this.config.filter.trade == "COM" ? "Commodity" : this.config.filter.trade == "CDS" ? "Currency" : ""), {
        User_ID: this.utils.getUserId() || "guest",
        IP: this.shared.IPAddress
      });
      this.analytics.emitEvent("visitedResearch" + (this.config.filter.type == "experts" ? "Expert" : this.config.filter.type == "fundamental" ? "Fundamental" : this.config.filter.type == "option_strategy" ? "Option Strategy" : "Signal") + (this.config.filter.trade == "EQ" ? "Equity" : this.config.filter.trade == "FO" ? "Derivative" : this.config.filter.trade == "COM" ? "Commodity" : this.config.filter.trade == "CDS" ? "Currency" : ""), this.utils.getUserId() || "guest", JSON.stringify({
        IP: this.shared.IPAddress
      }), 1);
      this.utils.pushDataLayerEvent({
        'event': 'visitedResearch',
        'platform': this.isMobile ? 'mobileweb' : 'desktopweb',
        'userId': this.utils.generateSHA256Hash(this.utils.getProfileData("MobileNo") || ""),
        'page_path': window.location.pathname,
        'page_url': window.location.href
      });
    });
    this.multiLineSubscription = this.utils.broadcastObservable("checkUnsubscription").subscribe(data => {
      if (data && data.source != "research-report" && this.researchList && this.researchList.length) {
        let datapoints = [];
        this.researchList.forEach(item => {
          datapoints.push({
            SegmentId: item.segment_id,
            Token: item.token
          });
        });
        this.utils.subscribeMultitouchline(datapoints);
      }
    });
    this.watchlistNameSubscription = this.utils.broadcastObservable("watchlistRenamed").subscribe(data => {
      this.watchlistNames = data;
    });
    this.scripAddSubscription = this.utils.broadcastObservable("ScripAdded").subscribe(data => {
      let scrip = this.researchList.filter(item => {
        return data.Token == item.token;
      });
      if (scrip.length) {
        scrip[0].isAdded = true;
        this.isButtonDisabled = false;
        scrip[0].scripData = {
          ProfileId: data.ProfileId,
          scrip: data,
          scripIndex: data.scripIndex
        };
      }
      this.isButtonDisabled = false;
    });
    this.scripRemoveSubscription = this.utils.broadcastObservable("ScripRemoved").subscribe(data => {
      let scrip = this.researchList.filter(item => {
        return data.Token == item.token;
      });
      if (scrip.length) {
        scrip[0].isAdded = false;
      }
      this.isButtonDisabled = false;
    });
    this.getConfig();
    this.subject.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_24__.debounceTime)(500)).subscribe(() => {
      this.setPage(1);
    });
    // let userAccountStatus=this.utils.getUserAccountStatus()
    let userAccountStatus = this.utils.getUserAccountStatus();
    if (!userAccountStatus || !userAccountStatus.onboardStatus || userAccountStatus.onboardStatus == 'C' || this.utils.isAuthorized()) {
      let scriptEle = document.createElement("script");
      scriptEle.setAttribute("src", "https://wchat.freshchat.com/js/widget.js");
      scriptEle.setAttribute("type", "text/javascript");
      document.body.appendChild(scriptEle);
      // success event
      scriptEle.addEventListener("load", () => {
        //   
        this.utils.freshChatUserInitializtion();
      });
      // error event
      scriptEle.addEventListener("error", ev => {
        // 
      });
    }
    this.getFirebaseConfig();
  }
  ngAfterViewInit() {
    setTimeout(() => {
      if (!localStorage.getItem("option-strategy-walkthrough") && this.utils.getUserId() && this.utils.getUserId() != "guest") {
        this.showWalkthrough();
        localStorage.setItem("option-strategy-walkthrough", "1");
      } else {
        this.shared.showWalkThrough["showWalkThrough"] = false;
      }
    }, 1000);
  }
  showWalkthrough() {
    let id = "optionStrategyMenu";
    let viewName = document.getElementById(id);
    if (viewName) {
      //  let coordinate = viewName.getBoundingClientRect();
      this.shared.showWalkThrough["showFirstPopup"] = false;
      this.shared.showWalkThrough["showWalkThrough"] = true;
      this.shared.showWalkThrough["feature"] = "researchOptionStrategy";
      // this.shared.showWalkThrough['right'] = 150 ;
      //   this.shared.showWalkThrough['top'] = 250 ;
      // this.shared.showWalkThrough['left'] = coordinate.left + window.scrollX;
      // this.shared.showWalkThrough['top'] = coordinate['top'] + window.scrollY + 40;
      this.shared.showWalkThrough["count"] = 0;
      let presetObj = this.utils.walkthrgConfig["researchOptionStrategy"][0];
      presetObj.id = id;
      this.utils.walkthrgConfig["researchOptionStrategy"][0] = presetObj;
      this.shared.showWalkThrough["presentObj"] = this.utils.walkthrgConfig["researchOptionStrategy"][0];
      this.broadcaster.broadcast("watchlistWalkthrgh", this.utils.walkthrgConfig["researchOptionStrategy"][0]);
    } else {
      this.shared.showWalkThrough["showWalkThrough"] = false;
    }
  }
  getFirebaseConfig() {
    // this.fetchingEvent = true
    this.firebaseService.getRemoteConfig("menu_show_hide", value => {
      let menu = JSON.parse(value);
      if (menu.research) this.currentMenu = menu.research;else this.currentMenu = {};
      // console.log("menu",menu)
      // if (menu && videoJSON.videos) {
      //   let ids = videoJSON.videos.join(',')
      //   this.getYoutubeVideoDetails(ids)
      // } else {
      //   this.fetchingEvent = false
      // }
    });
  }
  /** Unsubscribe Multi touchline subscription on Ng destroy */
  ngOnDestroy() {
    if (this.watchSubs) this.watchSubs.unsubscribe();
    if (!this.shared.userId || this.shared.userId == "guest") {
      let ele = document.getElementById("main-container");
      if (ele) {
        ele.classList.remove("full-width-container");
      }
      let ele2 = document.getElementById("rrp-new-top-sub");
      if (ele2) {
        ele2.classList.remove("full-width-container-padded");
      }
    }
    if (this.watchlistNameSubscription) this.watchlistNameSubscription.unsubscribe();
    if (this.scripAddSubscription) this.scripAddSubscription.unsubscribe();
    if (this.scripRemoveSubscription) this.scripRemoveSubscription.unsubscribe();
    if (this.multiLineSubscription) {
      this.multiLineSubscription.unsubscribe;
    }
    if (this.keyPressSubscription) this.keyPressSubscription.unsubscribe();
    if (this.researchDetailSubscription) this.researchDetailSubscription.unsubscribe();
    if (this.popupCloseSubscription) this.popupCloseSubscription.unsubscribe();
  }
  /**
   * Filter Form Submit
   */
  onFormSubmit(flag, alertId, isUserClick) {
    if (flag) {
      this.pager = {};
      this.total_Count = 0;
      this.currentPage = 1;
      this.data.offset = 0;
      this.pager.currentPage = 1;
    } // this.resetFields();
    if (this.config.filter.type === "experts") {
      this.data.is_expert = this.userForm.get("is_expert").value || "";
      this.data.status = this.userForm.get("status").value || "";
      this.data.research_type = this.userForm.get("research_type").value || "";
      this.researchList = [];
      this.fetchResearchReport();
    } else if (this.config.filter.type === "fundamental") {
      this.data.is_expert = this.userForm.get("is_expert").value || "";
      this.data.status = this.userForm.get("status").value || "";
      this.data.research_type = "Medium To Long Term" || 0;
      this.researchList = [];
      this.fetchResearchReport();
    } else if (this.config.filter.type === "option_strategy") {
      // this.data.is_expert = this.userForm.get('is_expert').value || '';
      this.data.status = this.userForm.get("status").value || "";
      this.data.research_type = this.userForm.get("research_type").value || "";
      // console.log("this.data",this.data)
      this.researchList = [];
      this.fetchStrategyReport();
    } else if (this.config.filter.type === "signals") {
      this.data.status = (this.signalFilter.get("status").value || "").replace("_", " ");
      this.data.type = (this.signalFilter.get("type").value || "").replace("_", " ");
      this.researchList = [];
      this.fetchSignalSuccessRatio();
      this.fetchSignalResearchReport(alertId);
    }
    if (isUserClick) {
      //console.log("setTrackMoeEvent3")
      this.utils.setTrackMoeEvent("research" + (this.config.filter.type == "experts" ? "Expert" : this.config.filter.type == "fundamental" ? "Fundamental" : this.config.filter.type == "option_strategy" ? "Option Strategy" : "Signal") + (this.config.filter.trade == "EQ" ? "Equity" : this.config.filter.trade == "FO" ? "Derivative" : this.config.filter.trade == "COM" ? "Commodity" : this.config.filter.trade == "CDS" ? "Currency" : "") + "FilterApplied", {
        User_ID: this.utils.getUserId() || "guest",
        Type: this.config.filter.type === "signals" ? this.data.type : this.data.is_expert === 0 ? "All" : "Sumeet Bagadia’s Desk",
        Status: this.data.status,
        CallDuration: this.config.filter.type === "experts" ? this.data.research_type : "",
        IP: this.shared.IPAddress
      });
      this.analytics.emitEvent("research" + (this.config.filter.type == "experts" ? "Expert" : this.config.filter.type == "fundamental" ? "Fundamental" : this.config.filter.type == "option_strategy" ? "Option Strategy" : "Signal") + (this.config.filter.trade == "EQ" ? "Equity" : this.config.filter.trade == "FO" ? "Derivative" : this.config.filter.trade == "COM" ? "Commodity" : this.config.filter.trade == "CDS" ? "Currency" : "") + "FilterApplied", this.utils.getUserId() || "guest", JSON.stringify({
        Type: this.config.filter.type === "signals" ? this.data.type : this.data.is_expert === 0 ? "All" : "Sumeet Bagadia’s Desk",
        Status: this.data.status,
        CallDuration: this.config.filter.type === "experts" ? this.data.research_type : "",
        IP: this.shared.IPAddress
      }), 1);
    }
  }
  /**Clears All Filter */
  clearFilter() {
    this.pager = {};
    this.total_Count = 0;
    this.config.filter.report_uuid = null;
    this.currentPage = 1;
    this.pager.currentPage = 1;
    if (this.config.filter.type === "experts") {
      this.data.is_expert = "";
      this.data.status = "";
      this.data.research_type = "";
      this.userForm.get("is_expert").setValue("0");
      this.userForm.get("status").setValue("all");
      this.userForm.get("research_type").setValue("all");
    } else if (this.config.filter.type === "fundamental") {
      this.data.is_expert = "";
      this.data.status = "";
      this.data.research_type = "Medium To Long Term";
      this.userForm.get("is_expert").setValue("0");
      this.userForm.get("status").setValue("all");
      this.userForm.get("research_type").setValue("Medium To Long Term");
    } else if (this.config.filter.type === "signals") {
      if (this.config.filter.alertId) {
        let state = "/research-report/research/" + this.config.filter.type + "/" + this.config.filter.trade;
        //let state = '/research-report/research/' + this.config.filter.trade + '/' + this.config.filter.type
        this.location.replaceState(state);
      }
      // this.data.type = '';
      this.data.status = "";
      this.signalFilter.get("type").setValue(this.config.filter.trade);
      this.signalFilter.get("status").setValue("all");
    } else if (this.config.filter.type === "option_strategy") {
      // this.data.type = '';
      this.data.status = "all";
      this.userForm.get("status").setValue("all");
      this.data.research_type = "all";
      this.userForm.get("research_type").setValue("all");
    }
    this.setPage(1);
  }
  /** to reset form fields */
  resetFields() {
    // if (['20','29','18','45','15','11',20,29,18,45,15,11].indexOf(this.userForm.get('subcategory').value) > -1) {
    //   if (this.userForm.get('subcategory').value != 20) this.userForm.get('is_expert').setValue(null);
    //   this.userForm.get('Status').setValue(null);
    //   this.userForm.get('research_type').setValue(null);
    // }
  }
  /**
   * open buy drawer , when user click buy button for the selected scrip
   * @param event open buy  drawer
   */
  OpenDrawer(rowData, isFromResearch) {
    // console.log("setTrackMoeEvent4")
    this.analytics.emitEvent("visitedResearch" + (this.config.filter.type == "experts" ? "Expert" : this.config.filter.type == "fundamental" ? "Fundamental" : this.config.filter.type == "option_strategy" ? "Option Strategy" : "Signal") + (this.config.filter.trade == "EQ" ? "Equity" : this.config.filter.trade == "FO" ? "Derivative" : this.config.filter.trade == "COM" ? "Commodity" : this.config.filter.trade == "CDS" ? "Currency" : "") + "BSDF", this.utils.getUserId() || "guest", JSON.stringify({
      IP: this.shared.IPAddress
    }), 1);
    this.utils.setTrackMoeEvent("visitedResearch" + (this.config.filter.type == "experts" ? "Expert" : this.config.filter.type == "fundamental" ? "Fundamental" : this.config.filter.type == "option_strategy" ? "Option Strategy" : "Signal") + (this.config.filter.trade == "EQ" ? "Equity" : this.config.filter.trade == "FO" ? "Derivative" : this.config.filter.trade == "COM" ? "Commodity" : this.config.filter.trade == "CDS" ? "Currency" : "") + "BSDF", {
      User_ID: this.utils.getUserId() || "guest",
      IP: this.shared.IPAddress
    });
    let userAccountStatus = this.utils.getUserAccountStatus();
    let isCreated = !userAccountStatus || !userAccountStatus.onboardStatus || userAccountStatus.onboardStatus == 'C';
    if (this.utils.isAuthorized() || !isCreated) {
      let data = JSON.parse(JSON.stringify(rowData));
      let action = data.call_type.toLowerCase();
      if (rowData.isExpired && this.config.filter.type != "fundamental") {
        data && action.indexOf("subscribe") > -1 ? this.utils.error("Attention!!", data.message) : this.utils.error("Error", "Script Expired");
        return;
      }
      data.ExchangeSegment = this.utils.getSegmentDetail(data.SegmentId, "SegmentName");
      data["SecName"] = data.scrip_name;
      if (data) {
        data.isFromExpertResearch = this.config.filter.type == "experts" ? true : false;
        data.isFromResearch = isFromResearch;
        data.research_trade = this.config.filter.trade;
        data.research_type = this.config.filter.type;
        data.isFromNotification = this.config.filter.report_uuid;
        data.isHold = action.indexOf("hold") > -1 || action.indexOf("avoid") > -1;
        /*    data.estimated_profit = this.config.filter.type
           data.estimated_loss = this.config.filter.type */
        if (action.indexOf("buy") > -1 || data.isHold && isFromResearch) {
          // 
          // this.utils.setTrackMoeEvent((data.isHold && isFromResearch) ? 'clickedResearchDetailPage' : 'clickedResearchBuy', { "User_ID": this.utils.getUserId() || 'guest', "IP": this.shared.IPAddress });
          if (this.config.filter.type == "experts") {
            this.analytics.emitEvent("ResearchExpertCallInitiated", this.utils.getUserId() || "guest", JSON.stringify({
              IP: this.shared.IPAddress,
              btnType: "buy"
            }), 1);
          }
          this.utils.broadcast(isFromResearch ? "openBuySellDrawerOld" : "openBuySellDrawer", {
            scrip: data,
            action: 1
          });
          event ? event.stopPropagation : "";
        } else if (action.indexOf("sell") > -1) {
          // 
          // this.utils.setTrackMoeEvent('clickedResearchSell', { "User_ID": this.utils.getUserId() || 'guest', "IP": this.shared.IPAddress });
          if (this.config.filter.type == "experts") {
            this.analytics.emitEvent("ResearchExpertCallInitiated", this.utils.getUserId() || "guest", JSON.stringify({
              IP: this.shared.IPAddress,
              btnType: "sell"
            }), 1);
          }
          this.utils.broadcast(isFromResearch ? "openBuySellDrawerOld" : "openBuySellDrawer", {
            scrip: data,
            action: 2
          });
          event ? event.stopPropagation : "";
        } /*  else if (action.indexOf('subscribe') > -1) {
          !data.message ? this.utils.broadcast('openIPOSubscribe', this.ipoData[data.symbol]) : this.utils.error('Attention!!', data.message);
          } */
      }
    } else {
      this.showPreLogin = true;
      this.renderer.setStyle(document.body, "overflow", "hidden");
    }
  }
  /**
   * check to whether to add or remove scrip from watchlist
   * @param profileId token of scrip
   */
  addRemoveWatchList(item, profileId) {
    const expiryDate = item.scrip_expiry;
    let today = new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_10__["default"]().format("YYYY-MM-DD");
    if (expiryDate >= today || expiryDate == false || expiryDate == "0000-00-00") {
      if (!profileId) {
        item.segmentTokenString.scripIndex = item.scripData.scripIndex;
      }
      item.segmentTokenString.ProfileId = profileId ? profileId : item.scripData.ProfileId;
      item.segmentTokenString.action = item.isAdded;
      this.isButtonDisabled = true;
      this.utils.broadcast("addRemoveWatchList", item.segmentTokenString);
    } else {
      this.utils.error("Error", "Script Expired");
    }
    if (profileId) {
      // console.log("setTrackMoeEvent5")
      this.utils.setTrackMoeEvent("clickedResearchAddWatchlist", {
        User_ID: this.utils.getUserId() || "guest",
        IP: this.shared.IPAddress
      });
      this.analytics.emitEvent("clickedResearchAddWatchlist", this.utils.getUserId() || "guest", JSON.stringify({
        IP: this.shared.IPAddress
      }), 1);
    } else {
      // console.log("setTrackMoeEvent6")
      this.utils.setTrackMoeEvent("clickedResearchRemoveWatchlist", {
        User_ID: this.utils.getUserId() || "guest",
        IP: this.shared.IPAddress
      });
      this.analytics.emitEvent("clickedResearchRemoveWatchlist", this.utils.getUserId() || "guest", JSON.stringify({
        IP: this.shared.IPAddress
      }), 1);
    }
  }
  /**
   * to add and remove scrip to watchlist
   * @param segmentId segmentId of selected scrip
   * @param token token of selected scrip
   */
  toggleAddRemove(item) {
    item.scripData = this.utils.checkFromWatchlist(item.segment_id, item.token);
    item.segmentTokenString = {
      SegmentId: item.segment_id,
      Token: item.token
    };
    item.isAdded = item.scripData && item.scripData.ProfileId;
  }
  /**
   * Open a popup when there is guest user for buy , sell and watchlist button
   */
  openPreLogin() {
    let userAccountStatus = this.utils.getUserAccountStatus();
    let isCreated = !userAccountStatus || !userAccountStatus.onboardStatus || userAccountStatus.onboardStatus == 'C';
    if (!this.utils.isAuthorized() || !isCreated) {
      this.utils.broadcast('generateSubs', {});
    }
  }
  /**
   * close preLogin popup for guest user on click of close button on prelogin popup
   */
  closePreLogin() {
    this.redirectForSignal = false;
    this.showPreLogin = false;
    this.renderer.setStyle(document.body, "overflow", "auto");
  }
  onSwitchClick() {
    // if (!this.utils.isAuthorized()) {
    //   this.showPreLogin = true;
    //   this.redirectForSignal = true;
    //   this.config.filter.type = 'experts';
    //   this.renderer.setStyle(document.body, 'overflow', 'hidden');
    // }
  }
  /**
   * Toggle change
   * @param event
   */
  toggleChange(type) {
    // if (this.utils.isAuthorized() || (!this.utils.isAuthorized() && !event.target.checked)) {
    this.data.offset = 0;
    this.pager = {};
    this.total_Count = 0;
    this.currentPage = 1;
    this.pager.currentPage = 1;
    this.config.filter.type = type;
    //this.setPage(1);
    this.config.filter.trade = "EQ";
    this.config.duration = this.isNonEqUser ? "month" : this.shared.userId && this.shared.userId != "guest" ? "week" : "year";
    // this.config.duration =this.config.filter.type == 'experts' && this.config.filter.trade=='FO' ?'today':(this.shared.userId && this.shared.userId != 'guest') ? 'week' : 'year';
    this.data.search = "";
    this.data.id = "";
    let segmentId = this.config.filter.type == "option_strategy" ? 2 : this.config.filter.trade == "EQ" ? 1 : this.config.filter.trade == "FO" ? 2 : this.config.filter.trade == "COM" ? 5 : this.config.filter.trade == "CDS" ? 7 : "";
    this.isSegmentAllowed = this.isOSClientFromApp ? this.isOSSegmentAllowed : !this.shared.userId || this.shared.userId == "guest" ? "Y" : this.utils.isSegmentAllowed(segmentId) ? "Y" : "N";
    let state = "/research-report/research/" + this.config.filter.type + "/" + this.config.filter.trade;
    //let state = '/research-report/research/' + this.config.filter.trade + '/' + this.config.filter.type
    if (!this.isOSClientFromApp) this.location.replaceState(state);
    if (this.config.filter.type == "experts") {
      this.userForm.get("research_type").setValue("all");
      this.fetchSuccessRatio();
      this.onFormSubmit();
    } else if (this.config.filter.type == "fundamental") {
      this.userForm.get("is_expert").setValue("0");
      this.userForm.get("status").setValue(this.shared.userId && this.shared.userId != "guest" || !this.isNonEqUser ? "all" : "target_achieved");
      //this.userForm.get('research_type').setValue('all');
      this.fetchSuccessRatio();
      this.onFormSubmit();
    } else if (this.config.filter.type == "option_strategy") {
      //      this.utils.setTrackMoeEvent('ResearchOptionStrategy', { "User_ID": this.utils.getUserId() || 'guest', "IP": this.shared.IPAddress });
      this.utils.setTrackMoeEvent("clickedOn", {
        User_ID: this.utils.getUserId() || "guest",
        IP: this.shared.IPAddress,
        buttonName: "SmResearchOptionStrategy"
      });
      this.analytics.emitEvent("SmResearchOptionStrategy", this.utils.getUserId() || "guest", JSON.stringify({
        IP: this.shared.IPAddress
      }), 1);
      this.userForm.get("is_expert").setValue("0");
      this.userForm.get("status").setValue(this.isOSClientFromApp ? "all" : this.shared.userId && this.shared.userId != "guest" || !this.isNonEqUser ? "all" : "target_achieved");
      this.userForm.get("research_type").setValue("all");
      // this.fetchSuccessRatio()
      this.onFormSubmit();
    } else {
      this.signalFilter.get("type").patchValue(this.config.filter.trade);
      this.onFormSubmit();
    }
    // } else {
    //   event.preventDefault();
    //   this.showPreLogin = true;
    //   this.config.filter.type = 'experts';
    //   this.setPage(1);
    //   this.renderer.setStyle(document.body, 'overflow', 'hidden');
    // }
    //console.log("setTrackMoeEvent7")
    this.utils.setTrackMoeEvent("visitedResearch" + (this.config.filter.type == "experts" ? "Expert" : this.config.filter.type == "fundamental" ? "Fundamental" : this.config.filter.type == "option_strategy" ? "Option Strategy" : "Signal") + (this.config.filter.trade == "EQ" ? "Equity" : this.config.filter.trade == "FO" ? "Derivative" : this.config.filter.trade == "COM" ? "Commodity" : this.config.filter.trade == "CDS" ? "Currency" : ""), {
      User_ID: this.utils.getUserId() || "guest",
      IP: this.shared.IPAddress
    });
    this.analytics.emitEvent("visitedResearch" + (this.config.filter.type == "experts" ? "Expert" : this.config.filter.type == "fundamental" ? "Fundamental" : this.config.filter.type == "option_strategy" ? "Option Strategy" : "Signal") + (this.config.filter.trade == "EQ" ? "Equity" : this.config.filter.trade == "FO" ? "Derivative" : this.config.filter.trade == "COM" ? "Commodity" : this.config.filter.trade == "CDS" ? "Currency" : ""), this.utils.getUserId() || "guest", JSON.stringify({
      IP: this.shared.IPAddress
    }), 1);
    this.utils.pushDataLayerEvent({
      'event': 'visitedResearch',
      'platform': this.isMobile ? 'mobileweb' : 'desktopweb',
      'userId': this.utils.generateSHA256Hash(this.utils.getProfileData("MobileNo") || ""),
      'page_path': window.location.pathname,
      'page_url': window.location.href
    });
  }
  /**
   * Duration Change
   * @param val
   */
  durationChange(val) {
    this.config.duration = val;
    this.data.offset = 0;
    this.pager = {};
    this.total_Count = 0;
    this.currentPage = 1;
    this.pager.currentPage = 1;
    //this.refetchData()
    this.setPage(1);
    // console.log("setTrackMoeEvent8")
    this.utils.setTrackMoeEvent("research" + (this.config.filter.type == "experts" ? "Expert" : this.config.filter.type == "fundamental" ? "Fundamental" : this.config.filter.type == "option_strategy" ? "Option Strategy" : "Signal") + (this.config.filter.trade == "EQ" ? "Equity" : this.config.filter.trade == "FO" ? "Derivative" : this.config.filter.trade == "COM" ? "Commodity" : this.config.filter.trade == "CDS" ? "Currency" : "") + "DurationFilterApplied", {
      User_ID: this.utils.getUserId() || "guest",
      Duration: this.config.duration,
      IP: this.shared.IPAddress
    });
    this.analytics.emitEvent("research" + (this.config.filter.type == "experts" ? "Expert" : this.config.filter.type == "fundamental" ? "Fundamental" : this.config.filter.type == "option_strategy" ? "Option Strategy" : "Signal") + (this.config.filter.trade == "EQ" ? "Equity" : this.config.filter.trade == "FO" ? "Derivative" : this.config.filter.trade == "COM" ? "Commodity" : this.config.filter.trade == "CDS" ? "Currency" : "") + "DurationFilterApplied", this.utils.getUserId() || "guest", JSON.stringify({
      IP: this.shared.IPAddress
    }), 1);
  }
  /**
   * Fetch Data
   */
  refetchData() {
    this.researchList = [];
    if (this.config.filter.type == "experts" || this.config.filter.type == "fundamental") {
      this.onFormSubmit();
    } else if (this.config.filter.type == "option_strategy") {
      this.onFormSubmit();
    } else {
      this.fetchSignalResearchReport();
    }
  }
  /**
   * Fetch Success Ratio
   */
  fetchSuccessRatio(isFundamental) {
    let userAccountStatus = this.utils.getUserAccountStatus();
    let isAuth = this.utils.isAuthorized();
    let isAllowed = this.isSegmentAllowed;
    let isCreated = !userAccountStatus || !userAccountStatus.onboardStatus || userAccountStatus.onboardStatus == 'C';
    if (isAuth && isAllowed == "Y" || !isCreated || !this.shared.userId || this.shared.userId == "guest") {
      this.percentageData = {
        positive: 0,
        negative: 0,
        success: 0,
        active: 0
      };
      const request = {
        end_date: "",
        is_expert: 0,
        research_type: this.config.filter.type == "fundamental" ? "Medium To Long Term" : "",
        segment: this.config.filter.type == "fundamental" ? "EQ" : this.config.filter.trade || "EQ",
        start_date: "",
        status: "",
        user_id: this.utils.getUserId()
      };
      this.progressNumber = {
        number: 0,
        class: "success-green",
        classParent: "box-perfp-green",
        classBars: "greenbar"
      };
      this.toolsService.fetchSuccessRatio(request, this.config.filter.type == "fundamental").subscribe(res => {
        if (res.status_code === 200 && res.message == "Success" && res.response) {
          this.percentageData = {
            positive: res.response.positive_calls,
            negative: res.response.negative_calls,
            success: Math.floor(this.config.filter.type == "fundamental" ? res.response.return_percentage || 0 : res.response.success_ratio_percentage),
            active: res.response.active_calls || 0
          };
          // this.progressNumber={number:Math.floor(res.response.success_ratio_percentage),class:'success-red'}
          this.progressNumber = {
            number: this.percentageData.success || 0,
            class: this.percentageData.success <= 50 ? "success-red" : this.percentageData.success < 60 && this.percentageData.success > 50 ? "success-orange" : "success-green",
            classParent: this.percentageData.success <= 50 ? "box-perfp-red" : this.percentageData.success < 60 && this.percentageData.success > 50 ? "box-perfp-orange" : "box-perfp-green",
            classBars: this.percentageData.success <= 50 ? "redbar" : this.percentageData.success < 60 && this.percentageData.success > 50 ? "orangebar" : "greenbar"
          };
          //   } else if (this.utils.isSessionExpired(res.Reason)) {
          // if(this.shared.isSSO){
          //   this.utils.sessionExpireHandling()
          //   return
          // }
          //     this.utils.postFeatureCount();
          //     this.utils.clearLoginDetails();
          //     this.shared.userId = null;
          //     this.router.navigate(["auth/login"]);
        } else {
          this.utils.error("Error", "Something went wrong");
        }
        this.refreshPercentages();
      }, err => {
        this.refreshPercentages();
      });
    }
  }
  /**
   * Fetch Research report
   */
  fetchResearchReport() {
    let userAccountStatus = this.utils.getUserAccountStatus();
    let isAuth = this.utils.isAuthorized();
    let isAllowed = this.isSegmentAllowed;
    let isCreated = !userAccountStatus || !userAccountStatus.onboardStatus || userAccountStatus.onboardStatus == 'C';
    if (isAuth && isAllowed == "Y" || !isCreated || !this.shared.userId || this.shared.userId == "guest") {
      let state = "/research-report/research/" + this.config.filter.type + "/" + this.config.filter.trade + (this.userForm.get("is_expert").value == "0" || this.config.filter.type === "fundamental" ? "" : "/sumit-bagadia");
      //let state = '/research-report/research/' + this.config.filter.trade + '/' + this.config.filter.type
      if (!this.data.id) this.location.replaceState(state);
      this.isServiceHit = true;
      let dates = {
        today: {
          count: 0,
          duration: "days"
        },
        week: {
          count: 7,
          duration: "days"
        },
        month: {
          count: 1,
          duration: "months"
        },
        quarter: {
          count: 3,
          duration: "months"
        },
        year: {
          count: 1,
          duration: "years"
        }
      };
      let date = {
        start_date: new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_10__["default"]().subtract(dates[this.config.duration || "today"].count, dates[this.config.duration || "today"].duration).format("YYYY-MM-DD"),
        end_date: new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_10__["default"]().format("YYYY-MM-DD")
      };
      const request = {
        end_date: this.config.filter.type === "fundamental" || this.data.id ? "" : date.end_date,
        is_expert: Number(this.data.is_expert),
        research_type: this.data.research_type == "all" || this.config.filter.type === "fundamental" ? "" : this.data.research_type,
        limit: 10,
        offset: this.data.offset || 0,
        segment: this.config.filter.trade || "EQ",
        start_date: this.config.filter.type === "fundamental" || this.data.id ? "" : date.start_date,
        status: !(!userAccountStatus || !userAccountStatus.onboardStatus || userAccountStatus.onboardStatus == 'C') ? 'target_achieved' : this.data.status == "all" ? "" : this.data.status,
        subcategory_id: this.config.filter.type === "fundamental" ? 19 : "",
        search: this.data.search || "",
        id: this.data.id || "",
        user_id: this.utils.getUserId() == "guest" ? "" : this.utils.getUserId(),
        timeline_enabled: 1,
        category_id: this.config.filter.type === "fundamental" ? 1 : 2
      };
      this.researchList = [];
      this.toolsService.fetchResearchReport(request).subscribe(res => {
        this.isServiceHit = false;
        if (res.status_code === 200 && res.message == "Success") {
          this.total_Count = res.response.total_count || 0;
          this.initializeCategoryConfig();
          // get pager object from service
          this.pager = this.pagerService.getPager(this.total_Count, this.currentPage);
          this.researchList = res.response.research;
          this.researchList = this.researchList.map(ele => {
            const userId = this.utils.getUserId();
            ele.subcategory_name = ele.subcategory_name == "EQUITY RESEARCH REPORT" ? "Equity Research Report" : ele.subcategory_name;
            ele.published_date = ele.published_date ? (0,_assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_10__["default"])(ele.published_date).format("Do MMM'YY hh:mm:ss A") : "";
            ele.updated_date = ele.updated_datetime ? (0,_assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_10__["default"])(ele.updated_datetime).format("Do MMM'YY hh:mm:ss A") : "";
            ele.reco_date = ele.reco_date ? (0,_assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_10__["default"])(ele.reco_date).format("Do MMM'YY hh:mm:ss A") : "";
            ele.report_expiry = ele.report_expiry ? (0,_assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_10__["default"])(ele.report_expiry).format("Do MMM'YY") : "";
            //console.log(ele, "ssasas")
            if (ele.scrip_expiry >= this.todaysDate || ele.scrip_expiry == false || ele.scrip_expiry == "0000-00-00") {
              ele["isExpired"] = false;
            } else {
              ele["isExpired"] = true;
            }
            if (userId && userId != "guest") {
              ele["isAllowed"] = !this.shared.userId || this.shared.userId == "guest" ? "Y" : this.utils.isSegmentAllowed(ele.segment_id);
            } else {
              ele["isAllowed"] = true;
            }
            //ele.isNonScrip=true
            ele.scripData = this.utils.checkFromWatchlist(ele.segment_id, ele.token);
            ele.segmentTokenString = {
              SegmentId: ele.segment_id,
              Token: ele.token
            };
            ele.isAdded = ele.scripData && ele.scripData.ProfileId;
            ele.title1 = this.category_typeConf[ele.subcategory_name] ? this.category_typeConf[ele.subcategory_name].title : "";
            ele.desc = this.category_typeConf[ele.subcategory_name] ? this.category_typeConf[ele.subcategory_name].desc : "";
            if (ele.datapoints && ele.datapoints.length) {
              ele.priceData = {};
              ele.datapoints.forEach(sub => {
                sub.key = sub.key == "cmp" ? "entry_price" : sub.key;
                ele.priceData[sub.key] = sub;
              });
            }
            ele.segmentName = this.utils.getSegmentDetail(ele.segment_id, "SegmentName") + (ele.series && this.config.filter.trade == "EQ" ? " (" + ele.series + ")" : "");
            ele.expertTag = ele.tag && (ele.tag === "stock_of_the_month" ? "Stock of the month" : ele.tag === "hot_pick_for_today" ? "Hot Pick for today" : ele.tag === "momentum_pick" ? "Momentum Pick" : ele.tag === "hero_ya_zero" ? "Hero Ya Zero" : null);
            ele.expertTagClass = ele.tag && (ele.tag === "stock_of_the_month" ? "st-of-month" : ele.tag === "hot_pick_for_today" ? "hot-pick" : ele.tag === "momentum_pick" ? "moment-pick" : ele.tag === "hero_ya_zero" ? "hero-zero" : null);
            return ele;
          });
          this.getSocketData();
          this.getMultiTouchLineData();
          if ((this.config.filter.report_uuid || this.data.id) && (!this.researchList || this.researchList.length == 0)) {
            this.isGoingToDetail = true;
            this.utils.setFromURL(window.location.pathname);
          }
          setTimeout(() => {
            if (this.config.filter.report_uuid && this.researchList && this.researchList[0]) {
              this.OpenDrawer(this.researchList[0], true);
            }
          }, 1000);
          // } else if (this.utils.isSessionExpired(res.Reason)) {
          // if(this.shared.isSSO){
          //   this.utils.sessionExpireHandling()
          //   return
          // }
          //   this.utils.postFeatureCount();
          //   this.utils.clearLoginDetails();
          //   this.shared.userId = null;
          //   this.router.navigate(["auth/login"]);
        } else {
          this.utils.error("Error", "Something went wrong");
        }
        if (this.researchList.length == 0) {
          if (this.data.id) {
            this.data.id = "";
            //this.utils.error('Error', err.error&&err.error.message?err.error.message:"Something went wrong");
            this.fetchResearchReport();
          }
        }
      }, err => {
        this.isServiceHit = false;
        this.researchList = [];
        if (this.data.id) {
          this.data.id = "";
          //this.utils.error('Error', err.error&&err.error.message?err.error.message:"Something went wrong");
          this.fetchResearchReport();
        }
      });
    }
  }
  getSignalMatchedPice(item) {
    let matched_price = "";
    /* 6,26,56 - Exit case */ /* 7,27,57 Book Profit */ /* 8,28 Book Part Profit */
    if (item.TACode == 6 || item.TACode == 26 || item.TACode == 56 || item.TACode == 8 || item.TACode == 28 || item.TACode == 7 || item.TACode == 27 || item.TACode == 57) {
      if (item.TACode == 6 || item.TACode == 26 || item.TACode == 56) {
        if (item.exitPrice != null && item.exitPrice > 0) {
          matched_price = item.exitPrice;
        } else {
          matched_price = "";
        }
      } else if (item.TACode == 8 || item.TACode == 28) {
        if (item.targetPrice0 != null && item.targetPrice0 > 0) {
          matched_price = item.targetPrice0;
        } else {
          matched_price = "";
        }
      } else {
        if (item.miniTarget != null && item.miniTarget > 0.0) {
          matched_price = item.miniTarget;
          /*  vd.tvStatus.text =
               "${activity.resources.getString(item.signalTypeEnum.signalTypeObj.name)} @ $
               {
                   item.scripInfo?.cf(
                       item.miniTarget
                   )
               } */
        } else {
          matched_price = "";
          /*  vd.tvStatus.text =
               activity.resources.getString(item.signalTypeEnum.signalTypeObj.name) */
        }
      }
    }
    return matched_price;
  }
  /**
   * Calculate Payoff
   */
  calculatePayoff() {
    this.researchList.forEach(thisdata => {
      if (thisdata.option_calls && thisdata.option_calls.length) {
        let payoff = 0;
        let margin = 0;
        thisdata.option_calls.forEach(ele => {
          //(ifBuySide(LTP-EP)*Lot Size + ifSellSide(EP-LTP)*lot Size) * Lot Mulitplier (by default Lot Multiplier need to-be consider 1)
          if (ele.LTP && ele.entry_price && ele.market_lot) {
            margin = margin + ele.LTP * ele.market_lot * Number(ele.lot_quantity || "1");
            if (ele.call_category == "buy") {
              payoff = payoff + ((ele.LTP || 0) - (ele.entry_price || 0)) * ele.market_lot * Number(ele.lot_quantity || "1");
            }
            if (ele.call_category == "sell") {
              payoff = payoff + ((ele.entry_price || 0) - (ele.LTP || 0)) * ele.market_lot * Number(ele.lot_quantity || "1");
            }
          }
        });
        thisdata.marginRequired2 = margin;
        thisdata.payoff = payoff;
      }
    });
  }
  /**
   * Get MultiTouchLine Data
   */
  getMultiTouchLineDataStrategy(datapoints) {
    //&& this.isSegmentAllowed == 'Y'//Commented
    // if ((this.utils.isAuthorized() && this.isSegmentAllowed == 'Y') || ((!this.shared.userId || this.shared.userId == 'guest'))) {
    let userAccountStatus = this.utils.getUserAccountStatus();
    let isAuth = this.utils.isAuthorized();
    let isAllowed = this.isSegmentAllowed;
    let isCreated = !userAccountStatus || !userAccountStatus.onboardStatus || userAccountStatus.onboardStatus == 'C';
    if (isAuth || !isCreated || !this.shared.userId || this.shared.userId == "guest" || this.isOSClientFromApp) {
      const userId = this.isOSClientFromApp ? this.OSAppClientId : this.utils.getUserId();
      //console.log("payload2",this.futureData)
      const tokens = this.utils.generateTokens(datapoints, "SegmentId", "Token");
      //console.log(this.futureData,"payload2 tokens",tokens)
      const payload = {
        UserId: this.isOSClientFromApp ? this.OSAppClientId : !userId || userId == "guest" ? "guest" : userId,
        SessionId: this.isOSClientFromApp ? this.OSAppSessionId : this.utils.getSessionId() || "",
        MultipleTokens: tokens
      };
      //console.log("payload2",payload)
      let w2 = payload.UserId == "guest" || !payload.SessionId ? true : false;
      this.utils.commonGetMultipleTouchLineCall(payload, w2).subscribe(data => {
        // common multitouchlineV2 (26/02/2021)
        if (data.Status == "Success" && data.Response && data.Response.lMT && data.Response.lMT.length) {
          const multitouchLineResponse = data.Response.lMT;
          //  console.log("futureData multitouchline2 ",JSON.parse(JSON.stringify(this.futureData)))
          //    console.log("payload2 multitouchLineResponse",JSON.parse(JSON.stringify(multitouchLineResponse)))
          let addedObj = {};
          multitouchLineResponse.forEach((element_upper, index) => {
            let recs = this.all_optionsCalls.filter(ele => {
              return !addedObj[element_upper["Token"]] && (ele.symbol_segment_id == element_upper["SegmentId"] && element_upper["Token"] == ele.symbol_token || ele.scrip_segment_id == element_upper["SegmentId"] && element_upper["Token"] == ele.scrip_token);
            });
            // console.log("recsrecsrecs",JSON.parse(JSON.stringify(recs)))
            recs.forEach(thisdata => {
              addedObj[element_upper["Token"]] = true;
              if (thisdata) {
                let element = JSON.parse(JSON.stringify(element_upper));
                // if(thisdata.option_calls&&thisdata.option_calls.length){
                // let payoff=0
                //   thisdata.option_calls.forEach(ele=>{
                //  if((ele.scrip_segment_id==element['SegmentId'])&&(element['Token'] == ele.scrip_token)){
                // console.log(thisdata,index+" payload SegmentId1",JSON.parse(JSON.stringify(element)) )
                Object.assign(element, thisdata);
                //   console.log(thisdata,index+" payload SegmentId2",JSON.parse(JSON.stringify(element)) )
                let isSame = element["LTP"] == element["Change"];
                element["prevChange"] = 0;
                element["PrvClose"] = element["LTP"] - element["Change"];
                element["PrvClose"] = element["PrvClose"] / element["PriceDivisor"];
                element["LTP"] = Number(element["LTP"] / element["PriceDivisor"]);
                element["Change"] = isSame ? 0 : element["Change"] / element["PriceDivisor"];
                //console.log(thisdata,index+" payload SegmentId2.2",JSON.parse(JSON.stringify(element)) )
                //console.log("obj.Change2",element['Change'])
                element["ChangePer"] = element["Change"] / element["PrvClose"] * 100;
                element.class = element["Change"] < 0 ? "down" : element["Change"] > 0 ? "up" : "";
                element["Change"] = element["Change"];
                element["ChangePer"] = element["ChangePer"];
                //   element.companyURL = (element.scrip_name||element.scrip_symbol || "").trim().toLowerCase().replace(/\s/g, '-').replace(/\//g, '').replace(/(-)+/g, '-');
                //ele=element
                Object.assign(thisdata, element);
                //  console.log( this.all_optionsCalls,index+" payload SegmentId",JSON.parse(JSON.stringify(element)) )
                // }
                // datapoints.push({ SegmentId: ele.scrip_segment_id, Token: ele.scrip_token })
                // if(!this.data.isSellPresent){
                //   this.calculateMinInv()
                // }
                //  })
                // }
              }
            });
            // //     if(element.status == "Booked Part Profit"){
            // //       //console.log("OBJOBJpriceData", element)
            // //         element.priceData['ltp_price_percentage'] = ((Number(element.matched_price) - Number(element.priceData['stop_loss'].value)) / (Number(element.priceData['target'].value) - Number(element.priceData['stop_loss'].value))) * 85
            // //     }else{
            // //         element.priceData['ltp_price_percentage'] = ((Number(element.LTP) - Number(element.priceData['stop_loss'].value)) / (Number(element.priceData['target'].value) - Number(element.priceData['stop_loss'].value))) * 85
            // //     }
            // //     // ele.priceData['part_profit_percentage'] =  ((Number(res.matched_price) - Number(ele.priceData['stop_loss'].value)) / (Number(ele.priceData['target'].value) - Number(ele.priceData['stop_loss'].value))) * 85
            // //     // //console.log("llll",res.matched_price)
            // // }
            //   this.futureData[index] = Object.assign(this.futureData[index], ...element);
            // }
            //  this.calculatePayoff()
          });
          // this.futureData = [...this.futureData];
        }
        this.calculatePayoff();
        this.getSocketResponse();
        this.utils.subscribeMultitouchline(datapoints);
      }, err => {
        this.calculatePayoff();
        this.getSocketResponse();
        this.utils.subscribeMultitouchline(datapoints);
      });
    }
  }
  /**
   * Get Socket Response
   */
  getSocketResponse() {
    this.watchSubs = this.utils.broadcastObservable("watchlist").subscribe(res => {
      //   //console.log("getSocketResponse res",res)
      let scrip2 = this.all_optionsCalls.filter((obj, index) => {
        return res[0]["1"] == obj.scrip_segment_id && obj.scrip_token == res[0]["7"] || res[0]["1"] == obj.symbol_segment_id && obj.symbol_token == res[0]["7"];
      });
      //  if((res[0]['1'] ==this.data.symbol_segment_id)&&(this.data.symbol_token== res[0]["7"])){
      //   scrip=[this.data]
      //  }
      //console.log("getSocketResponse watchlist",res)
      if (scrip2.length > 0) {
        scrip2.forEach(obj => {
          let priceDivisor = this.utils.getDefaultPriceDivisor(res[0][1], res[0][7]);
          if (this.utils.isUpdatedData(obj, res[0])) {
            obj.Volume = Number(res[0][79]) || obj.Volume || 0;
            obj.prevChange = (Number(res[0]["8"]) / priceDivisor || 0) - (obj.LTP || 0);
            obj["PrvClose"] = res[0]["76"] / priceDivisor;
            obj.LTP = Number(res[0]["8"]) == 0 ? obj["PrvClose"] / priceDivisor : (res[0]["8"] || 0) / priceDivisor; // if LTP == 0 then show prevClose (10/05/2021)
            obj.Change = ((res[0]["8"] == 0 ? obj["PrvClose"] : Number(res[0]["8"] || 0)) - Number(res[0]["76"])) / priceDivisor || obj.Change; // (res[0]['8'] - obj['PrvClose']) / (res[0]['399'] || 1);//
            obj["ChangePer"] = obj["Change"] / (res[0]["76"] / (priceDivisor || 1)) * 100 || obj["ChangePer"];
            // obj.LTP = res[0]["8"] / res[0]["399"];
            obj.class = obj["Change"] < 0 ? "down" : obj["Change"] > 0 ? "up" : "";
            obj.Change = obj.Change;
            obj.ChangePer = obj.ChangePer;
          }
        });
        // //console.log("getSocketResponse res",res)
        // this.calculatePayoff()
      }
      this.calculatePayoff();
    });
  }
  fetchStrategyReport() {
    let userAccountStatus = this.utils.getUserAccountStatus();
    let isAuth = this.utils.isAuthorized();
    let isAllowed = this.isSegmentAllowed;
    let isCreated = !userAccountStatus || !userAccountStatus.onboardStatus || userAccountStatus.onboardStatus == 'C';
    if (this.utils.isAuthorized() || !isCreated || !this.shared.userId || this.shared.userId == "guest" || this.isOSClientFromApp) {
      let state = "/research-report/research/" + this.config.filter.type + "/" + "report";
      //let state = '/research-report/research/' + this.config.filter.trade + '/' + this.config.filter.type
      // if (!this.data.id)
      //   this.location.replaceState(state);
      this.isServiceHit = true;
      let dates = {
        today: {
          count: 0,
          duration: "days"
        },
        week: {
          count: 7,
          duration: "days"
        },
        month: {
          count: 1,
          duration: "months"
        },
        quarter: {
          count: 3,
          duration: "months"
        },
        year: {
          count: 1,
          duration: "years"
        }
      };
      let date = {
        start_date: new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_10__["default"]().subtract(dates[this.config.duration || "today"].count, dates[this.config.duration || "today"].duration).format("YYYY-MM-DD"),
        end_date: new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_10__["default"]().format("YYYY-MM-DD")
      };
      const request = {
        // end_date:  date.end_date,
        limit: 10,
        offset: this.data.offset || 0,
        //  start_date:  date.start_date,
        status: !(!userAccountStatus || !userAccountStatus.onboardStatus || userAccountStatus.onboardStatus == 'C') ? 'target_achieved' : this.data.status == "all" ? "" : this.data.status,
        search: this.data.search || "",
        research_type: this.data.research_type == "all" ? "" : this.data.research_type
      };
      this.researchList = [];
      this.toolsService.fetchStrategyReport(request).subscribe(res => {
        this.isServiceHit = false;
        if (res.status_code === 200 && res.message == "Success") {
          this.all_optionsCalls = [];
          this.total_Count = res.response.total_count || 0;
          this.researchList = res.response.strategy_list || [];
          // this.initializeCategoryConfig();
          // // get pager object from service
          this.pager = this.pagerService.getPager(this.total_Count, this.currentPage);
          let datapoints = [];
          // this.researchList = res.response.research;
          let active_calls = [];
          this.researchList = this.researchList.map((ele, ii) => {
            //  const userId = this.utils.getUserId();
            if (ele.expiry_date >= this.todaysDate || ele.expiry_date == false || ele.expiry_date == "0000-00-00") {
              ele["isExpired"] = false;
            } else {
              ele["isExpired"] = true;
            }
            //   ele.subcategory_name = ele.subcategory_name == 'EQUITY RESEARCH REPORT' ? 'Equity Research Report' : ele.subcategory_name
            ele.published_date = ele.published_at ? (0,_assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_10__["default"])(ele.published_at).format("Do MMM'YY hh:mm:ss A") : "";
            /*      if(ele.status=='pending'){
            active_calls.push(ele)
            } */
            if (ele.option_calls && ele.option_calls.length) {
              ele.isSellPresent = false;
              ele.option_calls.forEach(element => {
                if (element.call_category == "sell") {
                  ele.isSellPresent = true;
                }
              });
              if (ele.isSellPresent) {
                this.fetchMinInvestment(ele);
              } else {}
            }
            if (ele.option_calls && ele.option_calls.length) {
              if (ele.symbol_segment_id && ele.symbol_token) {
                datapoints.push({
                  SegmentId: ele.symbol_segment_id,
                  Token: ele.symbol_token
                });
                this.all_optionsCalls.push(ele);
              }
              ele.option_calls.forEach(sub => {
                if (sub.scrip_segment_id && sub.scrip_token) datapoints.push({
                  SegmentId: sub.scrip_segment_id,
                  Token: sub.scrip_token
                });
                this.all_optionsCalls.push(sub);
              });
            }
            // ele.updated_date = ele.updated_datetime ? moment(ele.updated_datetime).format("Do MMM'YY hh:mm:ss A") : ''
            // ele.reco_date = ele.reco_date ? moment(ele.reco_date).format("Do MMM'YY hh:mm:ss A") : ''
            // ele.report_expiry = ele.report_expiry ? moment(ele.report_expiry).format("Do MMM'YY") : ''
            // console.log(ele, "ssasas")
            // if (ele.scrip_expiry >= this.todaysDate || ele.scrip_expiry == false || ele.scrip_expiry == "0000-00-00") {
            //   ele['isExpired'] = false;
            // } else {
            //   ele['isExpired'] = true;
            // }
            // if (userId && userId != 'guest') {
            //   ele['isAllowed'] = (!this.shared.userId || this.shared.userId == 'guest') ? 'Y' : this.utils.isSegmentAllowed(ele.segment_id);
            // } else {
            //   ele['isAllowed'] = true
            // }
            // //ele.isNonScrip=true
            // ele.scripData = this.utils.checkFromWatchlist(ele.segment_id, ele.token);
            // ele.segmentTokenString = { 'SegmentId': ele.segment_id, 'Token': ele.token };
            // ele.isAdded = ele.scripData && ele.scripData.ProfileId;
            // ele.title1 = this.category_typeConf[ele.subcategory_name] ? this.category_typeConf[ele.subcategory_name].title : '';
            // ele.desc = this.category_typeConf[ele.subcategory_name] ? this.category_typeConf[ele.subcategory_name].desc : '';
            // // if (ele.datapoints && ele.datapoints.length) {
            // //   ele.priceData = {}
            // //   ele.datapoints.forEach(sub => {
            // //     sub.key = (sub.key == 'cmp') ? 'entry_price' : sub.key;
            // //     ele.priceData[sub.key] = sub
            // //   })
            // // }
            // ele.segmentName = this.utils.getSegmentDetail(ele.segment_id, 'SegmentName') + ((ele.series && this.config.filter.trade == 'EQ') ? (" (" + ele.series + ")") : "");
            ele.pnlValue = 0;
            if (ele.option_calls && ele.option_calls.length) {
              ele.option_calls.forEach(element => {
                if (element.match_price && element.entry_price) {
                  if (element.call_category === "buy") ele.pnlValue = (Number(element.match_price) - Number(element.entry_price)) * Number(element.lot_quantity || 0) * Number(element.market_lot || 1) + Number(ele.pnlValue);else ele.pnlValue = (Number(element.entry_price) - Number(element.match_price)) * Number(element.lot_quantity || 0) * Number(element.market_lot || 1) + Number(ele.pnlValue);
                }
              });
            }
            return ele;
          });
          this.utils.unSubscribeMultitouchline(datapoints);
          this.getMultiTouchLineDataStrategy(datapoints);
          // this.getSocketData();
          // this.getMultiTouchLineData();
          // if((this.config.filter.report_uuid||this.data.id) &&(!this.researchList || this.researchList.length==0)){
          //   this.isGoingToDetail=true
          //   this.utils.setFromURL(window.location.pathname)
          // }
          // setTimeout(() => {
          //   if (this.config.filter.report_uuid && this.researchList && this.researchList[0]) {
          //     this.OpenDrawer(this.researchList[0], true)
          //   }
          // }, 1000);
          // } else if (this.utils.isSessionExpired(res.Reason)) {
          // if(this.shared.isSSO){
          //   this.utils.sessionExpireHandling()
          //   return
          // }
          //   this.utils.postFeatureCount();
          //   this.utils.clearLoginDetails();
          //   this.shared.userId = null;
          //   this.router.navigate(["auth/login"]);
        } else {
          this.utils.error("Error", "Something went wrong");
        }
        // if (this.researchList.length == 0) {
        //   if (this.data.id) {
        //     this.data.id = ""
        //     //this.utils.error('Error', err.error&&err.error.message?err.error.message:"Something went wrong");
        //     this.fetchResearchReport()
        //   }
        // }
      }, err => {
        this.isServiceHit = false;
        //   this.researchList =[
        //     {
        //         "uuid": "36d10a91-e23f-4dcd-935c-6e1e5d91c5ef",
        //         "strategy_name": "Strategy TESTING V2",
        //         "published_at": "2022-11-14 19:36:05",
        //         "description": "",
        //         "expiry_date": "2022-11-13",
        //         "max_profit": "255",
        //         "max_loss": 100,
        //         "risk_reward": "1.50",
        //         "net_premium": "150",
        //         "matched_price_date": "",
        //         "status": "pending",
        //         "created_by": "shripad.mayekar@choicetechlab.com",
        //         "updated_by": "",
        //         "created_at": "2022-12-02 15:06:21",
        //         "updated_at": "",
        //         "deleted_at": "",
        //                   "symbol_token":26000,
        //         "symbol_segment_id":1,
        //         "average_profit_percentage": 0,
        //         "symbol": "test",
        //         "strategy_duration":'intra_day',
        //         "total_profit": 0,
        //         "option_calls": [
        //             {
        //                 "uuid": "0c1550da-ec39-4218-8e39-55b759c2710e",
        //                 "strategy_uuid": "36d10a91-e23f-4dcd-935c-6e1e5d91c5ef",
        //                 "total_initial_price": "430942.5",
        //                 "total_match_price": "",
        //                 "lot_quantity": "25",
        //                 "scrip_exchange_segment": "NSEFO",
        //                 "scrip_segment_id": "2",
        //                 "scrip_token": "53394",
        //                 "scrip_sec_name": "BANKNIFTY|24NOV22",
        //                 "scrip_sec_desc": "BANKNIFTY22NOVFUT",
        //                 "scrip_expiry": "2022-11-24",
        //                 "scrip_symbol": "BANKNIFTY",
        //                 "series": "EQ",
        //                 "price_tick": "5",
        //                 "price_divisor": "100",
        //                 "multiplier": "1",
        //                 "matched_price_date": "",
        //                 "match_price": "",
        //                 "market_lot": "25",
        //                 "scrip_strike_price": "-1",
        //                 "scrip_s_expiry": "24NOV22",
        //                 "scrip_option_type": "XX",
        //                 "call_type_uuid": "b10b712e-8ed1-444e-b5ad-f22300259f02",
        //                 "call_category": "sell",
        //                 "call_type_name": "Sell",
        //                 "entry_price": "17237.7",
        //                 "research_type": "positional",
        //                 "profit_percentage": "",
        //                 "status_json": "",
        //                 "expiry_date": "",
        //                 "created_by": "shripad.mayekar@choicetechlab.com",
        //                 "updated_by": "",
        //                 "deleted_by": "",
        //                 "created_at": "2022-12-02 15:06:21",
        //                 "updated_at": "2022-12-02 15:06:21",
        //                 "deleted_at": ""
        //             }
        //         ]
        //     },
        //     {
        //         "uuid": "5bbf6811-949b-4eca-8cdc-f018b578a8c1",
        //         "strategy_name": "TEST Strategy 2001",
        //         "published_at": "2022-11-28 14:48:15",
        //         "description": "",
        //         "expiry_date": "2022-11-28",
        //         "max_profit": "800",
        //         "max_loss": 100,
        //         "risk_reward": "1.25",
        //         "net_premium": "198",
        //         "matched_price_date": "2022-11-28 15:08:57",
        //         "status": "pending",
        //         "created_by": "siddhi.punamiya@choicetechlab.com",
        //         "updated_by": "",
        //         "created_at": "2022-11-28 14:49:11",
        //         "updated_at": "",
        //         "deleted_at": "",
        //                   "symbol_token":26000,
        //         "symbol_segment_id":1,
        //         "average_profit_percentage": -100,
        //         "symbol": "TATACOMM",
        //         "strategy_duration":'intra_day',
        //         "total_profit": -3008,
        //         "option_calls": [
        //             {
        //                 "uuid": "65019f1b-89fc-41f8-8a45-42ffc3c15e5b",
        //                 "strategy_uuid": "5bbf6811-949b-4eca-8cdc-f018b578a8c1",
        //                 "total_initial_price": "2008",
        //                 "total_match_price": "0",
        //                 "lot_quantity": "4",
        //                 "scrip_exchange_segment": "NSEFO",
        //                 "scrip_segment_id": "2",
        //                 "scrip_token": "55283",
        //                 "scrip_sec_name": "TATACOMM|25JAN23",
        //                 "scrip_sec_desc": "TATACOMM23JANFUT",
        //                 "scrip_expiry": "2023-01-25",
        //                 "scrip_symbol": "TATACOMM",
        //                 "series": "XX",
        //                 "price_tick": "5",
        //                 "price_divisor": "100",
        //                 "multiplier": "1",
        //                 "matched_price_date": "2022-11-28 15:08:56",
        //                 "match_price": "0",
        //                 "market_lot": "500",
        //                 "scrip_strike_price": "-1",
        //                 "scrip_s_expiry": "25JAN23",
        //                 "scrip_option_type": "XX",
        //                 "call_type_uuid": "f5ed329f-cf72-4e56-a9e4-374612f5f678",
        //                 "call_category": "buy",
        //                 "call_type_name": "Buy",
        //                 "entry_price": "502",
        //                 "research_type": "intra_day",
        //                 "profit_percentage": "-100",
        //                 "status_json": "",
        //                 "expiry_date": "",
        //                 "created_by": "siddhi.punamiya@choicetechlab.com",
        //                 "updated_by": "",
        //                 "deleted_by": "",
        //                 "created_at": "2022-11-28 14:49:11",
        //                 "updated_at": "2022-11-28 15:08:56",
        //                 "deleted_at": ""
        //             },
        //             {
        //                 "uuid": "bbccf565-03c0-4632-8d04-4fec59f15a49",
        //                 "strategy_uuid": "5bbf6811-949b-4eca-8cdc-f018b578a8c1",
        //                 "total_initial_price": "1000",
        //                 "total_match_price": "0",
        //                 "lot_quantity": "5",
        //                 "scrip_exchange_segment": "NSEFO",
        //                 "scrip_segment_id": "2",
        //                 "scrip_token": "63987",
        //                 "scrip_sec_name": "HDFC|29DEC22",
        //                 "scrip_sec_desc": "HDFC22DECFUT",
        //                 "scrip_expiry": "2022-12-29",
        //                 "scrip_symbol": "HDFC",
        //                 "series": "XX",
        //                 "price_tick": "5",
        //                 "price_divisor": "100",
        //                 "multiplier": "1",
        //                 "matched_price_date": "2022-11-28 15:08:57",
        //                 "match_price": "0",
        //                 "market_lot": "300",
        //                 "scrip_strike_price": "-1",
        //                 "scrip_s_expiry": "29DEC22",
        //                 "scrip_option_type": "XX",
        //                 "call_type_uuid": "b10b712e-8ed1-444e-b5ad-f22300259f02",
        //                 "call_category": "sell",
        //                 "call_type_name": "Sell",
        //                 "entry_price": "200",
        //                 "research_type": "positional",
        //                 "profit_percentage": "-100",
        //                 "status_json": "",
        //                 "expiry_date": "",
        //                 "created_by": "siddhi.punamiya@choicetechlab.com",
        //                 "updated_by": "",
        //                 "deleted_by": "",
        //                 "created_at": "2022-11-28 14:49:11",
        //                 "updated_at": "2022-11-28 15:08:57",
        //                 "deleted_at": ""
        //             }
        //         ]
        //     },
        //     {
        //         "uuid": "b1ea3a20-9a72-44fb-91db-9f7e9675c77c",
        //         "strategy_name": "DEV Strategy Test",
        //         "published_at": "2022-11-24 15:44:35",
        //         "description": "",
        //         "expiry_date": "2022-11-24",
        //         "max_profit": "3444",
        //         "max_loss": 31,
        //         "risk_reward": "76.23",
        //         "net_premium": "6767",
        //         "matched_price_date": "2022-11-28 13:20:14",
        //         "status": "pending",
        //         "created_by": "siddhi.punamiya@choicetechlab.com",
        //         "updated_by": "",
        //         "created_at": "2022-11-24 15:45:28",
        //         "updated_at": "",
        //         "deleted_at": "",
        //                   "symbol_token":26000,
        //         "symbol_segment_id":1,
        //         "average_profit_percentage": 87.29,
        //         "symbol": "NIFTY",
        //         "strategy_duration":'positional',
        //         "total_profit": 344943.6,
        //         "option_calls": [
        //             {
        //                 "uuid": "81ade8a0-21d7-4efd-9a64-62e9eb1e5463",
        //                 "strategy_uuid": "b1ea3a20-9a72-44fb-91db-9f7e9675c77c",
        //                 "total_initial_price": "130000",
        //                 "total_match_price": "486943.6",
        //                 "lot_quantity": "26",
        //                 "scrip_exchange_segment": "NSEFO",
        //                 "scrip_segment_id": "2",
        //                 "scrip_token": "62809",
        //                 "scrip_sec_name": "NIFTY|29DEC22",
        //                 "scrip_sec_desc": "NIFTY22DECFUT",
        //                 "scrip_expiry": "2022-12-29",
        //                 "scrip_symbol": "NIFTY",
        //                 "series": "XX",
        //                 "price_tick": "5",
        //                 "price_divisor": "100",
        //                 "multiplier": "1",
        //                 "matched_price_date": "2022-11-28 13:20:14",
        //                 "match_price": "18728.6",
        //                 "market_lot": "50",
        //                 "scrip_strike_price": "-1",
        //                 "scrip_s_expiry": "29DEC22",
        //                 "scrip_option_type": "XX",
        //                 "call_type_uuid": "f5ed329f-cf72-4e56-a9e4-374612f5f678",
        //                 "call_category": "buy",
        //                 "call_type_name": "Buy",
        //                 "entry_price": "5000",
        //                 "research_type": "intra_day",
        //                 "profit_percentage": "274.57",
        //                 "status_json": "",
        //                 "expiry_date": "",
        //                 "created_by": "siddhi.punamiya@choicetechlab.com",
        //                 "updated_by": "",
        //                 "deleted_by": "",
        //                 "created_at": "2022-11-24 15:45:28",
        //                 "updated_at": "2022-11-28 13:20:14",
        //                 "deleted_at": ""
        //             },
        //             {
        //                 "uuid": "f75283ac-3560-4ecc-a9e1-74d66ab2d245",
        //                 "strategy_uuid": "b1ea3a20-9a72-44fb-91db-9f7e9675c77c",
        //                 "total_initial_price": "12000",
        //                 "total_match_price": "0",
        //                 "lot_quantity": "2",
        //                 "scrip_exchange_segment": "NSEFO",
        //                 "scrip_segment_id": "2",
        //                 "scrip_token": "86050",
        //                 "scrip_sec_name": "NIFTY|24NOV22 PE 13800.00",
        //                 "scrip_sec_desc": "NIFTY22NOV13800PE",
        //                 "scrip_expiry": "2022-11-24",
        //                 "scrip_symbol": "NIFTY",
        //                 "series": "XX",
        //                 "price_tick": "5",
        //                 "price_divisor": "100",
        //                 "multiplier": "1",
        //                 "matched_price_date": "2022-11-28 13:20:14",
        //                 "match_price": "0",
        //                 "market_lot": "50",
        //                 "scrip_strike_price": "1380000",
        //                 "scrip_s_expiry": "24NOV22",
        //                 "scrip_option_type": "PE",
        //                 "call_type_uuid": "b10b712e-8ed1-444e-b5ad-f22300259f02",
        //                 "call_category": "sell",
        //                 "call_type_name": "Sell",
        //                 "entry_price": "6000",
        //                 "research_type": "positional",
        //                 "profit_percentage": "-100",
        //                 "status_json": "",
        //                 "expiry_date": "",
        //                 "created_by": "siddhi.punamiya@choicetechlab.com",
        //                 "updated_by": "",
        //                 "deleted_by": "",
        //                 "created_at": "2022-11-24 15:45:28",
        //                 "updated_at": "2022-11-28 13:20:14",
        //                 "deleted_at": ""
        //             }
        //         ]
        //     },
        //     {
        //         "uuid": "f27bdee8-ad59-4610-941b-a1d9e272c736",
        //         "strategy_name": "TEST STRATEGY NEW",
        //         "published_at": "2022-11-24 15:05:37",
        //         "description": "",
        //         "expiry_date": "2022-12-21",
        //         "max_profit": "5000",
        //         "max_loss": 4222,
        //         "risk_reward": "1.66",
        //         "net_premium": "225",
        //         "matched_price_date": "",
        //         "status": "pending",
        //         "created_by": "siddhi.punamiya@choicetechlab.com",
        //         "updated_by": "",
        //         "created_at": "2022-11-24 15:06:30",
        //         "updated_at": "",
        //         "deleted_at": "",
        //                   "symbol_token":26000,
        //         "symbol_segment_id":1,
        //         "average_profit_percentage": 0,
        //         "symbol": "TATACHEM",
        //         "strategy_duration":'intra_day',
        //         "total_profit": 0,
        //         "option_calls": [
        //             {
        //                 "uuid": "e4e44625-0660-4d43-af91-16d915be2b8f",
        //                 "strategy_uuid": "f27bdee8-ad59-4610-941b-a1d9e272c736",
        //                 "total_initial_price": "250",
        //                 "total_match_price": "",
        //                 "lot_quantity": "5",
        //                 "scrip_exchange_segment": "NSEFO",
        //                 "scrip_segment_id": "2",
        //                 "scrip_token": "68773",
        //                 "scrip_sec_name": "TATACHEM|29DEC22",
        //                 "scrip_sec_desc": "TATACHEM22DECFUT",
        //                 "scrip_expiry": "2022-12-29",
        //                 "scrip_symbol": "TATACHEM",
        //                 "series": "XX",
        //                 "price_tick": "5",
        //                 "price_divisor": "100",
        //                 "multiplier": "1",
        //                 "matched_price_date": "",
        //                 "match_price": "",
        //                 "market_lot": "500",
        //                 "scrip_strike_price": "-1",
        //                 "scrip_s_expiry": "29DEC22",
        //                 "scrip_option_type": "XX",
        //                 "call_type_uuid": "f5ed329f-cf72-4e56-a9e4-374612f5f678",
        //                 "call_category": "buy",
        //                 "call_type_name": "Buy",
        //                 "entry_price": "50",
        //                 "research_type": "intra_day",
        //                 "profit_percentage": "",
        //                 "status_json": "",
        //                 "expiry_date": "",
        //                 "created_by": "siddhi.punamiya@choicetechlab.com",
        //                 "updated_by": "",
        //                 "deleted_by": "",
        //                 "created_at": "2022-11-24 15:06:30",
        //                 "updated_at": "2022-11-24 15:06:30",
        //                 "deleted_at": ""
        //             }
        //         ]
        //     },
        //     {
        //         "uuid": "28140964-3753-458e-97a2-02e0e863774e",
        //         "strategy_name": "TEST NEW STRAT",
        //         "published_at": "2022-11-24 14:41:46",
        //         "description": "",
        //         "expiry_date": "2022-11-24",
        //         "max_profit": "17",
        //         "max_loss": 54,
        //         "risk_reward": "1.5",
        //         "net_premium": "8855",
        //         "matched_price_date": "2022-11-25 15:12:01",
        //         "status": "pending",
        //         "created_by": "siddhi.punamiya@choicetechlab.com",
        //         "updated_by": "",
        //         "created_at": "2022-11-24 14:42:41",
        //         "updated_at": "",
        //         "deleted_at": "",
        //                   "symbol_token":26000,
        //         "symbol_segment_id":1,
        //         "average_profit_percentage": 25.87,
        //         "symbol": "TATACHEM",
        //         "strategy_duration":'positional',
        //         "total_profit": 3467,
        //         "option_calls": [
        //             {
        //                 "uuid": "3e171e80-b534-4a03-89c6-32b5944baf96",
        //                 "strategy_uuid": "28140964-3753-458e-97a2-02e0e863774e",
        //                 "total_initial_price": "10000",
        //                 "total_match_price": "15798",
        //                 "lot_quantity": "2",
        //                 "scrip_exchange_segment": "NSEFO",
        //                 "scrip_segment_id": "2",
        //                 "scrip_token": "53941",
        //                 "scrip_sec_name": "TATACHEM|24NOV22",
        //                 "scrip_sec_desc": "TATACHEM22NOVFUT",
        //                 "scrip_expiry": "2022-11-24",
        //                 "scrip_symbol": "TATACHEM",
        //                 "series": "XX",
        //                 "price_tick": "5",
        //                 "price_divisor": "100",
        //                 "multiplier": "1",
        //                 "matched_price_date": "2022-11-25 15:12:01",
        //                 "match_price": "7899",
        //                 "market_lot": "500",
        //                 "scrip_strike_price": "-1",
        //                 "scrip_s_expiry": "24NOV22",
        //                 "scrip_option_type": "XX",
        //                 "call_type_uuid": "b10b712e-8ed1-444e-b5ad-f22300259f02",
        //                 "call_category": "sell",
        //                 "call_type_name": "Sell",
        //                 "entry_price": "5000",
        //                 "research_type": "intra_day",
        //                 "profit_percentage": "57.98",
        //                 "status_json": "",
        //                 "expiry_date": "",
        //                 "created_by": "siddhi.punamiya@choicetechlab.com",
        //                 "updated_by": "",
        //                 "deleted_by": "",
        //                 "created_at": "2022-11-24 14:42:41",
        //                 "updated_at": "2022-11-25 15:12:01",
        //                 "deleted_at": ""
        //             },
        //             {
        //                 "uuid": "ba7ee285-2688-48ba-ab00-4441cc559f39",
        //                 "strategy_uuid": "28140964-3753-458e-97a2-02e0e863774e",
        //                 "total_initial_price": "37331",
        //                 "total_match_price": "35000",
        //                 "lot_quantity": "7",
        //                 "scrip_exchange_segment": "NSEFO",
        //                 "scrip_segment_id": "2",
        //                 "scrip_token": "86049",
        //                 "scrip_sec_name": "NIFTY|24NOV22 CE 13800.00",
        //                 "scrip_sec_desc": "NIFTY22NOV13800CE",
        //                 "scrip_expiry": "2022-11-24",
        //                 "scrip_symbol": "NIFTY",
        //                 "series": "XX",
        //                 "price_tick": "5",
        //                 "price_divisor": "100",
        //                 "multiplier": "1",
        //                 "matched_price_date": "2022-11-25 15:12:01",
        //                 "match_price": "5000",
        //                 "market_lot": "50",
        //                 "scrip_strike_price": "1380000",
        //                 "scrip_s_expiry": "24NOV22",
        //                 "scrip_option_type": "CE",
        //                 "call_type_uuid": "f5ed329f-cf72-4e56-a9e4-374612f5f678",
        //                 "call_category": "buy",
        //                 "call_type_name": "Buy",
        //                 "entry_price": "5333",
        //                 "research_type": "positional",
        //                 "profit_percentage": "-6.24",
        //                 "status_json": "",
        //                 "expiry_date": "",
        //                 "created_by": "siddhi.punamiya@choicetechlab.com",
        //                 "updated_by": "",
        //                 "deleted_by": "",
        //                 "created_at": "2022-11-24 14:42:41",
        //                 "updated_at": "2022-11-25 15:12:01",
        //                 "deleted_at": ""
        //             }
        //         ]
        //     },
        //     {
        //         "uuid": "af651aa5-b62c-4db0-ad03-55a6e8cc87d3",
        //         "strategy_name": "Strategy TESTING V2",
        //         "published_at": "2022-11-14 19:36:05",
        //         "description": "",
        //         "expiry_date": "2022-11-13",
        //         "max_profit": "255",
        //         "max_loss": 100,
        //         "risk_reward": "1.50",
        //         "net_premium": "150",
        //         "matched_price_date": "2022-11-24 15:47:13",
        //         "status": "pending",
        //         "created_by": "shripad.mayekar@choicetechlab.com",
        //         "updated_by": "",
        //         "created_at": "2022-11-21 12:47:09",
        //         "updated_at": "",
        //         "deleted_at": "",
        //                   "symbol_token":26000,
        //         "symbol_segment_id":1,
        //         "average_profit_percentage": 80.37,
        //         "symbol": "BANKNIFTY",
        //         "strategy_duration":'intra_day',
        //         "total_profit": 670024.05,
        //         "option_calls": [
        //             {
        //                 "uuid": "7016654b-8a00-4964-a101-d6b7797631d2",
        //                 "strategy_uuid": "af651aa5-b62c-4db0-ad03-55a6e8cc87d3",
        //                 "total_initial_price": "17237.7",
        //                 "total_match_price": "18181.75",
        //                 "lot_quantity": "1",
        //                 "scrip_exchange_segment": "NSEFO",
        //                 "scrip_segment_id": "2",
        //                 "scrip_token": "53395",
        //                 "scrip_sec_name": "NIFTY|24NOV22",
        //                 "scrip_sec_desc": "NIFTY22NOVFUT",
        //                 "scrip_expiry": "2022-11-24",
        //                 "scrip_symbol": "NIFTY",
        //                 "series": "EQ",
        //                 "price_tick": "5",
        //                 "price_divisor": "100",
        //                 "multiplier": "1",
        //                 "matched_price_date": "2022-11-24 15:47:13",
        //                 "match_price": "18181.75",
        //                 "market_lot": "5",
        //                 "scrip_strike_price": "-1",
        //                 "scrip_s_expiry": "24NOV22",
        //                 "scrip_option_type": "XX",
        //                 "call_type_uuid": "f5ed329f-cf72-4e56-a9e4-374612f5f678",
        //                 "call_category": "buy",
        //                 "call_type_name": "Buy",
        //                 "entry_price": "17237.7",
        //                 "research_type": "positional",
        //                 "profit_percentage": "5.48",
        //                 "status_json": "",
        //                 "expiry_date": "",
        //                 "created_by": "shripad.mayekar@choicetechlab.com",
        //                 "updated_by": "",
        //                 "deleted_by": "",
        //                 "created_at": "2022-11-15 15:03:52",
        //                 "updated_at": "2022-11-24 15:47:13",
        //                 "deleted_at": ""
        //             },
        //             {
        //                 "uuid": "90859fa8-49e8-4a5d-bf67-73c851bd1737",
        //                 "strategy_uuid": "af651aa5-b62c-4db0-ad03-55a6e8cc87d3",
        //                 "total_initial_price": "430942.5",
        //                 "total_match_price": "1100022.5",
        //                 "lot_quantity": "25",
        //                 "scrip_exchange_segment": "NSEFO",
        //                 "scrip_segment_id": "2",
        //                 "scrip_token": "53394",
        //                 "scrip_sec_name": "BANKNIFTY|24NOV22",
        //                 "scrip_sec_desc": "BANKNIFTY22NOVFUT",
        //                 "scrip_expiry": "2022-11-24",
        //                 "scrip_symbol": "BANKNIFTY",
        //                 "series": "EQ",
        //                 "price_tick": "5",
        //                 "price_divisor": "100",
        //                 "multiplier": "1",
        //                 "matched_price_date": "2022-11-24 15:47:13",
        //                 "match_price": "44000.9",
        //                 "market_lot": "25",
        //                 "scrip_strike_price": "-1",
        //                 "scrip_s_expiry": "24NOV22",
        //                 "scrip_option_type": "XX",
        //                 "call_type_uuid": "b10b712e-8ed1-444e-b5ad-f22300259f02",
        //                 "call_category": "sell",
        //                 "call_type_name": "Sell",
        //                 "entry_price": "17237.7",
        //                 "research_type": "positional",
        //                 "profit_percentage": "155.26",
        //                 "status_json": "",
        //                 "expiry_date": "",
        //                 "created_by": "shripad.mayekar@choicetechlab.com",
        //                 "updated_by": "",
        //                 "deleted_by": "",
        //                 "created_at": "2022-11-21 12:47:09",
        //                 "updated_at": "2022-11-24 15:47:13",
        //                 "deleted_at": ""
        //             }
        //         ]
        //     },
        //     {
        //         "uuid": "903ba640-042a-4f7b-8d7c-e3907b5cf76e",
        //         "strategy_name": "Very First Strategy",
        //         "published_at": "2022-11-14 19:36:05",
        //         "description": "",
        //         "expiry_date": "2022-11-13",
        //         "max_profit": "0",
        //         "max_loss": 10,
        //         "risk_reward": "100",
        //         "net_premium": "10.50",
        //         "matched_price_date": "2022-11-24 12:22:15",
        //         "status": "pending",
        //         "created_by": "shripad.mayekar@choicetechlab.com",
        //         "updated_by": "",
        //         "created_at": "2022-11-15 14:58:58",
        //         "updated_at": "",
        //         "deleted_at": "",
        //                   "symbol_token":26000,
        //         "symbol_segment_id":1,
        //         "average_profit_percentage": 6.64,
        //         "symbol": "NIFTY",
        //         "strategy_duration":'intra_day',
        //         "total_profit": 1143.85,
        //         "option_calls": [
        //             {
        //                 "uuid": "df6c93f4-c151-42b1-9fee-4f1408c18632",
        //                 "strategy_uuid": "903ba640-042a-4f7b-8d7c-e3907b5cf76e",
        //                 "total_initial_price": "17237.7",
        //                 "total_match_price": "18381.55",
        //                 "lot_quantity": "1",
        //                 "scrip_exchange_segment": "NSEFO",
        //                 "scrip_segment_id": "2",
        //                 "scrip_token": "53395",
        //                 "scrip_sec_name": "NIFTY|24NOV22",
        //                 "scrip_sec_desc": "NIFTY22NOVFUT",
        //                 "scrip_expiry": "2022-11-24",
        //                 "scrip_symbol": "NIFTY",
        //                 "series": "EQ",
        //                 "price_tick": "5",
        //                 "price_divisor": "100",
        //                 "multiplier": "1",
        //                 "matched_price_date": "2022-11-24 12:22:15",
        //                 "match_price": "18381.55",
        //                 "market_lot": "5",
        //                 "scrip_strike_price": "-1",
        //                 "scrip_s_expiry": "24NOV22",
        //                 "scrip_option_type": "XX",
        //                 "call_type_uuid": "f5ed329f-cf72-4e56-a9e4-374612f5f678",
        //                 "call_category": "buy",
        //                 "call_type_name": "Buy",
        //                 "entry_price": "17237.7",
        //                 "research_type": "positional",
        //                 "profit_percentage": "6.64",
        //                 "status_json": "",
        //                 "expiry_date": "",
        //                 "created_by": "shripad.mayekar@choicetechlab.com",
        //                 "updated_by": "",
        //                 "deleted_by": "",
        //                 "created_at": "2022-11-15 14:58:58",
        //                 "updated_at": "2022-11-24 12:22:15",
        //                 "deleted_at": ""
        //             }
        //         ]
        //     }
        // ]
        // this.total_Count = 7 || 0;
        // // this.initializeCategoryConfig();
        // // // get pager object from service
        //  this.pager = this.pagerService.getPager(this.total_Count, this.currentPage);
        // // this.researchList = res.response.research;
        // this.researchList = this.researchList.map(ele => {
        //  ele.published_date = ele.published_at ? moment(ele.published_at).format("Do MMM'YY hh:mm:ss A") : '';
        //     if(ele.status=='pending'){
        //       this.fetchMinInvestment(ele)
        //     }
        //    return ele
        //   })
        let active_calls = [];
        this.researchList = [];
        //     this.researchList = this.researchList.map(ele => {
        //     //  const userId = this.utils.getUserId();
        //    //   ele.subcategory_name = ele.subcategory_name == 'EQUITY RESEARCH REPORT' ? 'Equity Research Report' : ele.subcategory_name
        //       ele.published_date = ele.published_at ? moment(ele.published_at).format("Do MMM'YY hh:mm:ss A") : '';
        //  /*      if(ele.status=='pending'){
        //         active_calls.push(ele)
        //       } */
        //       if(ele.status=='pending'){
        //         this.fetchMinInvestment(ele)
        //       }
        //       // ele.updated_date = ele.updated_datetime ? moment(ele.updated_datetime).format("Do MMM'YY hh:mm:ss A") : ''
        //       // ele.reco_date = ele.reco_date ? moment(ele.reco_date).format("Do MMM'YY hh:mm:ss A") : ''
        //       // ele.report_expiry = ele.report_expiry ? moment(ele.report_expiry).format("Do MMM'YY") : ''
        //       // console.log(ele, "ssasas")
        //       // if (ele.scrip_expiry >= this.todaysDate || ele.scrip_expiry == false || ele.scrip_expiry == "0000-00-00") {
        //       //   ele['isExpired'] = false;
        //       // } else {
        //       //   ele['isExpired'] = true;
        //       // }
        //       // if (userId && userId != 'guest') {
        //       //   ele['isAllowed'] = (!this.shared.userId || this.shared.userId == 'guest') ? 'Y' : this.utils.isSegmentAllowed(ele.segment_id);
        //       // } else {
        //       //   ele['isAllowed'] = true
        //       // }
        //       // //ele.isNonScrip=true
        //       // ele.scripData = this.utils.checkFromWatchlist(ele.segment_id, ele.token);
        //       // ele.segmentTokenString = { 'SegmentId': ele.segment_id, 'Token': ele.token };
        //       // ele.isAdded = ele.scripData && ele.scripData.ProfileId;
        //       // ele.title1 = this.category_typeConf[ele.subcategory_name] ? this.category_typeConf[ele.subcategory_name].title : '';
        //       // ele.desc = this.category_typeConf[ele.subcategory_name] ? this.category_typeConf[ele.subcategory_name].desc : '';
        //       // // if (ele.datapoints && ele.datapoints.length) {
        //       // //   ele.priceData = {}
        //       // //   ele.datapoints.forEach(sub => {
        //       // //     sub.key = (sub.key == 'cmp') ? 'entry_price' : sub.key;
        //       // //     ele.priceData[sub.key] = sub
        //       // //   })
        //       // // }
        //       // ele.segmentName = this.utils.getSegmentDetail(ele.segment_id, 'SegmentName') + ((ele.series && this.config.filter.trade == 'EQ') ? (" (" + ele.series + ")") : "");
        //       return ele
        //     })
        if (this.data.id) {
          this.data.id = "";
          //this.utils.error('Error', err.error&&err.error.message?err.error.message:"Something went wrong");
          //this.fetchResearchReport()
        }
      });
    }
  }
  createTokenQtyString(scripArray) {
    let tokenQty = "";
    scripArray.forEach((element, index) => {
      tokenQty = tokenQty + element.scrip_token + "%7C" + (element.call_category == "sell" ? "-" + Number(element.market_lot || 0) * Number(element.lot_quantity || "1") : Number(element.market_lot || 0) * Number(element.lot_quantity || "1")) + (scripArray.length - 1 > index ? "~" : "");
    });
    return tokenQty;
  }
  fetchMinInvestment(ele) {
    if (ele.option_calls && ele.option_calls.length) {
      let request = {
        SegmentId: ele.option_calls[0].scrip_segment_id,
        token_qty: this.createTokenQtyString(ele.option_calls) //this.createTokenQtyString([ele])
      };
      this.toolsService.getMarginCalculatorData(request.SegmentId, request.token_qty).subscribe(res => {
        //  this.marginLoader = false;
        if (res.Status == "Success" && res.Response && res.Response.Span_Summary) {
          ele.min_inv = res.Response.Span_Summary.TotalMgn || 0;
          // this.marginRequired = res.Response.margins[0].InitialMargin + res.Response.margins[0].ExpMgn;
          // if (this.marginRequired < 1) { // if option type scrip and action is buy and if margin < 1 then margin = price * qty. if calculated margin < 1 then show NA (27/04/2021)
          //   let optionType = this.scrip.OptionType || this.scrip.type || this.scrip.OT;
          //   let secName = this.scrip.SecName ? this.scrip.SecName : this.scrip.secName ? this.scrip.secName : '';
          //   if ((['PE', 'CE'].indexOf(optionType) > -1 || (secName && (secName.indexOf('CE') > -1 || secName.indexOf('PE') > -1))) && this.action == 1) {
          //     this.marginRequired = Number(this.orderRequest.Price) * quantity;
          //   }
          // }
        } else {
          //this.marginRequired = 0;
        }
      }, err => {
        //  this.marginRequired = 0;
        //this.marginLoader = false;
      });
    }
  }
  /**
   * Sets current page
   * @param page Gets current page number
   */
  setPage(page, isPageChange) {
    this.researchList = [];
    if (page < 1 || page > this.pager.totalPages) {
      const data = {
        offset: 0
      };
      this.changePage(data, isPageChange);
      return;
    }
    // get pager object from service
    this.pager = this.pagerService.getPager(this.total_Count | 0, page);
    /**get current page of items */
    const data = {
      offset: this.pager.currentPage - 1
    };
    this.changePage(data, isPageChange);
    this.currentPage = this.pager.currentPage;
  }
  /**
   * Server side pagination function
   * @param event Gets the Current Offset on Pagination Change
   */
  changePage(event, isPageChange) {
    /* if(document.getElementById("tab-cont"))
    document.getElementById("tab-cont").scrollIntoView(); */
    if (isPageChange && document.getElementById("filter-srch-bar-scroll")) {
      /* const id = 'filter-srch-bar-scroll';
      const yOffset = -10;
      const element = document.getElementById(id);
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({top: y, behavior: 'smooth'}); */
      document.getElementById("filter-srch-bar-scroll").scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
    this.data.offset = event.offset * this.data.limit;
    this.researchList = [];
    if (this.config.filter.type === "experts" || this.config.filter.type === "fundamental") {
      this.fetchResearchReport();
    }
    if (this.config.filter.type === "option_strategy") {
      this.fetchStrategyReport();
    } else if (this.config.filter.type === "signals") {
      this.fetchSignalResearchReport();
    }
    // this.getSubcategoryData();
  }
  /**
   * Socket Connection Function
   */
  getSocketData() {
    if (this.multiLineSubscription) {
      this.multiLineSubscription.unsubscribe;
    }
    this.multiLineSubscription = this.utils.broadcastObservable("watchlist").subscribe(res => {
      let scrip = this.researchList.filter((obj, index) => {
        return res[0]["1"] == obj.SegmentId && obj.token == res[0]["7"];
      });
      if (scrip.length > 0 && this.utils.isUpdatedData(scrip[0], res[0])) {
        let obj = scrip[0];
        let priceDivisor = this.utils.getDefaultPriceDivisor(res[0]["1"], res[0]["7"]);
        obj.prevChange = (Number(res[0]["8"]) / priceDivisor || 0) - (obj.LTP || 0);
        obj["PrvClose"] = obj.PrevClose || res[0]["76"] / priceDivisor;
        obj.LTP = Number(res[0]["8"]) == 0 ? obj["PrvClose"] / priceDivisor : (res[0]["8"] || 0) / priceDivisor; // if LTP == 0 then show prevClose (10/05/2021)
        obj.Change = ((res[0]["8"] == 0 ? obj["PrvClose"] : res[0]["8"] || 0) - obj["PrvClose"]) / priceDivisor;
        obj["ChangePer"] = obj["Change"] / (obj["PrvClose"] / priceDivisor) * 100;
        // obj.LTP = res[0]["8"] / res[0]["399"];
        obj.class = obj["Change"] < 0 ? "down" : obj["Change"] > 0 ? "up" : "";
        obj.Change = obj.Change;
        obj.ChangePer = obj.ChangePer;
      }
    });
    this.researchList = this.researchList ? [...this.researchList] : [];
  }
  /**
   * Get MultiTouchLine Data
   */
  getMultiTouchLineData() {
    let userAccountStatus = this.utils.getUserAccountStatus();
    let isAuth = this.utils.isAuthorized();
    let isAllowed = this.isSegmentAllowed;
    let isCreated = !userAccountStatus || !userAccountStatus.onboardStatus || userAccountStatus.onboardStatus == 'C';
    if ((this.utils.isAuthorized() || !isCreated) && this.isSegmentAllowed == "Y" || !this.shared.userId || this.shared.userId == "guest") {
      const userId = this.utils.getUserId();
      if (userId && userId != "guest" && this.researchList && this.researchList.length) {
        let datapoints = [];
        this.researchList.forEach(item => {
          datapoints.push({
            SegmentId: item.segment_id,
            Token: item.token
          });
        });
        // this.toggleAddRemove(item);
        this.utils.subscribeMultitouchline(datapoints);
        // this.utils.subscribeMultitouchline(this.researchList);
      }
      const tokens = this.utils.generateTokens(this.researchList, "segment_id", "token");
      const payload = {
        UserId: !userId || userId == "guest" ? "guest" : userId,
        SessionId: this.utils.getSessionId() || "",
        MultipleTokens: tokens
      };
      let w2 = payload.UserId == "guest" || !payload.SessionId ? true : false;
      this.utils.commonGetMultipleTouchLineCall(payload, w2).subscribe(data => {
        // common multitouchlineV2 (26/02/2021)
        if (data.Status == "Success" && data.Response && data.Response.lMT && data.Response.lMT.length) {
          const multitouchLineResponse = data.Response.lMT;
          //    console.log("researchList multitouchline17 ",JSON.parse(JSON.stringify(this.researchList)))
          multitouchLineResponse.forEach((element, index) => {
            if (this.researchList && this.researchList[index] && element["SegmentId"] == this.researchList[index].segment_id && element["Token"] == this.researchList[index].token) {
              element["prevChange"] = 0;
              element["PrvClose"] = element["LTP"] - element["Change"];
              element["PrvClose"] = element["PrvClose"] / element["PriceDivisor"];
              element["LTP"] = element["LTP"] / element["PriceDivisor"];
              element["Change"] = element["Change"] / element["PriceDivisor"];
              element["ChangePer"] = element["Change"] / element["PrvClose"] * 100;
              element.class = element["Change"] < 0 ? "down" : element["Change"] > 0 ? "up" : "";
              element["Change"] = element["Change"];
              element["ChangePer"] = element["ChangePer"];
              element.companyURL = (this.researchList[index].scrip_name || "").trim().toLowerCase().replace(/\s/g, "-").replace(/\//g, "").replace(/(-)+/g, "-");
              this.researchList[index] = Object.assign(this.researchList[index], element);
            }
          });
          this.researchList = [...this.researchList];
        }
      });
    }
  }
  /**
   *  On click company name,  goes to company page
   * @param item company details
   */
  gotoCompanyPage(item) {
    const expiryDate = item.scrip_expiry;
    let today = new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_10__["default"]().format("YYYY-MM-DD");
    if (expiryDate >= today || expiryDate == false || expiryDate == "0000-00-00") {
      const segmentId = item.segment_id;
      const companyName = item["scrip_name"].replace(/[\s|\&|\%]/g, "").toLowerCase();
      let url = companyName + "/" + segmentId + "/" + item.token;
      if (segmentId == 1 || segmentId == 2 || segmentId == 4 || segmentId == 3) {
        url = "equity/" + url;
      } else if (segmentId == 5 || segmentId == 7) {
        url = "commodity/" + url;
      } else if (segmentId == 13 || segmentId == 38 || segmentId == 14) {
        url = "currency/" + url;
      }
      const segmentToken = item.SegmentId + "&" + item.Token;
      localStorage.setItem("presentToken", JSON.stringify(segmentToken));
      this.router.navigate(["instrument/" + url]);
    } else {
      this.utils.error("Error", "Script Expired");
    }
    //  console.log("setTrackMoeEvent9")
    this.utils.setTrackMoeEvent("clickedResearchCompanyPage", {
      User_ID: this.utils.getUserId() || "guest",
      IP: this.shared.IPAddress
    });
    this.analytics.emitEvent("clickedResearchCompanyPage", this.utils.getUserId() || "guest", JSON.stringify({
      IP: this.shared.IPAddress
    }), 1);
  }
  /**
   * Add price Alert for given report
   * @param report Instance of selected report
   */
  addPriceAlert(report) {
    let userAccountStatus = this.utils.getUserAccountStatus();
    let isAuth = this.utils.isAuthorized();
    let isAllowed = this.isSegmentAllowed;
    let isCreated = !userAccountStatus || !userAccountStatus.onboardStatus || userAccountStatus.onboardStatus == 'C';
    if (this.utils.isAuthorized() || !isCreated) {
      if (report.isExpired) {
        this.utils.error("Error", "Scrip is Expired");
        return;
      }
      let request = {
        config: null,
        requestType: 1,
        data: {
          SegmentId: report.segment_id,
          Token: report.token
        }
      };
      this.utils.broadcast("openPriceAlert", request);
      //console.log("setTrackMoeEvent10")
      this.utils.setTrackMoeEvent("clickedResearchSetAlert", {
        User_ID: this.utils.getUserId() || "guest",
        IP: this.shared.IPAddress
      });
      this.analytics.emitEvent("clickedResearchSetAlert", this.utils.getUserId() || "guest", JSON.stringify({
        IP: this.shared.IPAddress
      }), 1);
    } else {
      this.showPreLogin = true;
      this.renderer.setStyle(document.body, "overflow", "hidden");
    }
  }
  /**
   * Fetch Success Ratio
   */
  fetchSignalSuccessRatio() {
    let userAccountStatus = this.utils.getUserAccountStatus();
    let isCreated = !userAccountStatus || !userAccountStatus.onboardStatus || userAccountStatus.onboardStatus == 'C';
    if ((this.utils.isAuthorized() || !isCreated) && this.isSegmentAllowed == "Y" || !this.shared.userId || this.shared.userId == "guest") {
      this.percentageData = {
        positive: 0,
        negative: 0,
        success: 0,
        active: 0
      };
      const request = {
        count: 0,
        endDate: new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_10__["default"]().format("DD-MM-YYYY"),
        // research_type: "",
        sessionId: this.utils.getSessionId(),
        start: 0,
        startDate: new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_10__["default"]().subtract(3, "months").format("DD-MM-YYYY"),
        type: this.data.type === this.config.filter.trade ? this.config.filter.trade || "EQ" : this.data.type,
        userId: this.utils.getUserId()
      };
      this.progressNumber = {
        number: 0,
        class: "success-green",
        classParent: "box-perfp-green",
        classBars: "greenbar"
      };
      this.toolsService.fetchSignalSuccessRatio(request).subscribe(res => {
        if (res.Status == "SUCCESS" && res.Response) {
          if (this.data.type === this.config.filter.trade) this.percentageData = {
            positive: res.Response[this.config.filter.trade || "EQ"].Pos,
            negative: res.Response[this.config.filter.trade || "EQ"].Neg,
            success: Math.floor(res.Response[this.config.filter.trade || "EQ"].SR),
            active: res.Response[this.config.filter.trade || "EQ"].Active
          };else {
            //   this.data.status = (this.signalFilter.get('status').value || '').replace('_',' ');
            // this.data.type = (this.signalFilter.get('type').value || '').replace('_',' ');
            this.percentageData = {
              positive: res.Response[this.data.type].Pos,
              negative: res.Response[this.data.type].Neg,
              success: Math.floor(res.Response[this.data.type].SR),
              active: res.Response[this.data.type].Active
            };
          }
          this.progressNumber = {
            number: this.percentageData.success || 0,
            class: this.percentageData.success <= 50 ? "success-red" : this.percentageData.success < 60 && this.percentageData.success > 50 ? "success-orange" : "success-green",
            classParent: this.percentageData.success <= 50 ? "box-perfp-red" : this.percentageData.success < 60 && this.percentageData.success > 50 ? "box-perfp-orange" : "box-perfp-green",
            classBars: this.percentageData.success <= 50 ? "redbar" : this.percentageData.success < 60 && this.percentageData.success > 50 ? "orangebar" : "greenbar"
          };
          this.refreshPercentages();
          // } else if (this.utils.isSessionExpired(res.Reason)) {
          // if(this.shared.isSSO){
          //   this.utils.sessionExpireHandling()
          //   return
          // }
          //   this.utils.postFeatureCount();
          //   this.utils.clearLoginDetails();
          //   this.shared.userId = null;
          //   this.router.navigate(["auth/login"]);
        } else {
          this.utils.error("Error", "Something went wrong");
        }
        // if (res.Status != 'SUCCESS' || !res.Response) return;
        // if (res && res.Response && res.Response[this.config.filter.trade])
        //   this.percentageData = { positive: res.Response[this.config.filter.trade].Pos, negative: res.Response[this.config.filter.trade].Neg, success: Math.floor(res.Response[this.config.filter.trade].SR), active: res.Response[this.config.filter.trade].Active }
        // else {
        //   //   this.data.status = (this.signalFilter.get('status').value || '').replace('_',' ');
        //   // this.data.type = (this.signalFilter.get('type').value || '').replace('_',' ');
        //   this.percentageData = { positive: res.Response[this.data.type].Pos, negative: res.Response[this.data.type].Neg, success: Math.floor(res.Response[this.data.type].SR), active : res.Response[this.data.type].Active }
        // }
        this.refreshPercentages();
      }, err => {
        this.refreshPercentages();
      });
    }
  }
  /**
   * Refresh Percentages
   */
  refreshPercentages() {
    setTimeout(() => {
      var totalProgress, progress;
      const circles = document.querySelectorAll(".progress-n");
      if (circles) {
        for (var i = 0; i < circles.length; i++) {
          totalProgress = circles[i].querySelector("circle").getAttribute("stroke-dasharray");
          progress = circles[i].parentElement.getAttribute("data-percent");
          let ele = circles[i].querySelector("." + this.progressNumber.classBars);
          let progressNumber = totalProgress * progress / 100;
          //ele.style.stroke=this.percentageData.success<=50?'red':(this.percentageData.success<=60&&this.percentageData.success>50?'orange':'green')
          if (ele) ele.style["stroke-dashoffset"] = progressNumber < 14 ? progressNumber == 0 ? 0 : 14 : progressNumber;
        }
      }
    }, 200);
  }
  /**
   * Fetch Signal Research report
   */
  fetchSignalResearchReport(alertId) {
    let userAccountStatus = this.utils.getUserAccountStatus();
    let isCreated = !userAccountStatus || !userAccountStatus.onboardStatus || userAccountStatus.onboardStatus == 'C';
    if ((this.utils.isAuthorized() || !isCreated) && this.isSegmentAllowed == "Y" || !this.shared.userId || this.shared.userId == "guest") {
      let state = "/research-report/research/" + this.config.filter.type + "/" + this.config.filter.trade + (["FO", "EQ"].indexOf(this.signalFilter.controls.type.value) == -1 && this.filterConfig.signals[this.signalFilter.controls.type.value] ? "/" + (this.filterConfig.signals[this.signalFilter.controls.type.value] || "EQ") : "");
      //let state = '/research-report/research/' + this.config.filter.trade + '/' + this.config.filter.type
      if (!this.data.id) this.location.replaceState(state);
      let dates = {
        today: {
          count: 0,
          duration: "days"
        },
        week: {
          count: 7,
          duration: "days"
        },
        month: {
          count: 1,
          duration: "months"
        },
        quarter: {
          count: 3,
          duration: "months"
        },
        year: {
          count: 1,
          duration: "years"
        }
      };
      this.researchList = [];
      this.isServiceHit = true;
      let date = {
        start_date: new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_10__["default"]().subtract(dates[this.config.duration || "today"].count, dates[this.config.duration || "today"].duration).format("DD-MM-YYYY"),
        end_date: new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_10__["default"]().format("DD-MM-YYYY")
      };
      let request = {
        Count: 10,
        endDate: this.data.id ? "" : date.end_date,
        SessionId: this.utils.getSessionId(),
        Start: this.data.offset,
        startDate: this.data.id ? "" : date.start_date,
        status: this.data.status === "all" ? "" : this.data.status,
        type: this.data.type || "EQ",
        UserId: this.utils.getUserId(),
        search: this.data.search || ""
        /*    Id:this.data.id||"" */
        // this.data.status = (this.signalFilter.get('status').value || '').replace('_',' ');
        // this.data.type
      };
      if (!alertId && (this.config.filter.alertId || this.data.id)) {
        this.config.filter.alertId = null;
        this.data.id = "";
        let state = "/research-report/research/" + this.config.filter.type + "/" + this.config.filter.trade;
        //let state = '/research-report/research/' + this.config.filter.trade + '/' + this.config.filter.type
        this.location.replaceState(state);
      }
      this.toolsService.fetchSignalResearchReport(request, alertId).subscribe(res => {
        this.isServiceHit = false;
        if (res.Status == "SUCCESS" && res.Response) {
          let response = alertId ? {
            Data: [res.Response]
          } : res.Response;
          response.Data.forEach((ele, index) => {
            this.researchList[index] = this.getFormattedResearch(ele);
            const userId = this.utils.getUserId();
            if (userId && userId != "guest") {
              this.researchList[index]["isAllowed"] = !this.shared.userId || this.shared.userId == "guest" ? "Y" : this.utils.isSegmentAllowed(this.researchList[index].segment_id);
            } else {
              this.researchList[index]["isAllowed"] = true;
            }
            //this.researchList[index].isNonScrip=true
            this.researchList[index].scripData = this.utils.checkFromWatchlist(this.researchList[index].segment_id, this.researchList[index].token);
            this.researchList[index].segmentTokenString = {
              SegmentId: this.researchList[index].segment_id,
              Token: this.researchList[index].token
            };
            this.researchList[index].isAdded = this.researchList[index].scripData && this.researchList[index].scripData.ProfileId;
          });
          if (this.researchList.length) {
            this.total_Count = response.Count;
            // this.total_Count + (this.researchList.length < 10 ? 0 : 11);
            this.pager = this.pagerService.getPager(this.total_Count, this.currentPage);
          } else {
            if (alertId) {
              this.data.id = "";
              this.config.filter.alertId = null;
              //this.utils.error('Error', err.error&&err.error.message?err.error.message:"Something went wrong");
              this.fetchSignalResearchReport();
            }
          }
          // else {
          //   this.percentageData = { positive: 0, negative: 0, success: 0, active: 0 }
          // }
          if ((this.data.id || this.config.filter.report_uuid) && (!this.researchList || this.researchList.length == 0)) {
            this.isGoingToDetail = true;
            this.utils.setFromURL(window.location.pathname);
          }
          setTimeout(() => {
            this.getSocketData();
            this.getMultiTouchLineData();
            if (this.data.id && this.researchList && this.researchList[0]) {
              this.OpenDrawer(this.researchList[0], true);
            }
          }, 1000);
          // } else if (this.utils.isSessionExpired(res.Reason)) {
          // if(this.shared.isSSO){
          //   this.utils.sessionExpireHandling()
          //   return
          // }
          //   this.utils.postFeatureCount();
          //   this.utils.clearLoginDetails();
          //   this.shared.userId = null;
          //   this.router.navigate(["auth/login"]);
        } else {
          this.utils.error("Error", "Something went wrong");
          if (alertId) {
            this.data.id = "";
            this.config.filter.alertId = null;
            //this.utils.error('Error', err.error&&err.error.message?err.error.message:"Something went wrong");
            this.fetchSignalResearchReport();
          }
        }
        // if (res.Status != 'SUCCESS' || !res.Response) return;
      }, err => {
        this.isServiceHit = false;
        this.researchList = [];
        if (alertId) {
          this.data.id = "";
          this.config.filter.alertId = null;
          //this.utils.error('Error', err.error&&err.error.message?err.error.message:"Something went wrong");
          this.fetchSignalResearchReport();
        }
      });
    }
  }
  /**
   * On serach filter function
   * @param event Gets the search Input data
   */
  updateFilter(event) {
    // this.searchInput = event;
    // if (event.length >= 3) {
    //   this.data.search = event;
    //   this.data.offset = 0;
    //   this.setPage(1);
    //   // this.fetchResearchReport();
    // } else if (event.length === 0) {
    //   this.data.search = '';
    //   this.data.offset = 0;
    //   this.setPage(1);
    //   // this.fetchResearchReport();
    // }
    if (this.utils.validateUserInput(event)) {
      this.pager = {};
      this.total_Count = 0;
      this.currentPage = 1;
      this.data.search = "";
      this.data.id = "";
      this.data.offset = 0;
      this.pager.currentPage = 1;
      this.data.search = event;
      this.data.offset = 0;
      this.subject.next(event);
    }
  }
  /**
   * Research formatted data
   * @param element
   * @returns
   */
  getFormattedResearch(element) {
    let call_type_buy = element.HLType ? element.HLType == "High" ? "buy" : element.HLType == "sell" || element.HLType == "Low" ? "SELL" : "" : element.Side ? ["B", "BUY", "Buy"].indexOf(element.Side) > -1 ? "buy" : ["S", "SELL", "Sell"].indexOf(element.Side) > -1 ? "sell" : "" : "";
    let signalConfigPre = {
      1: {
        slug: "active",
        label: "Active",
        class: "balance",
        iStatusType: 1
      },
      2: {
        slug: "target1",
        label: "Target 1 Achieved",
        class: "up",
        iStatusType: 2
      },
      3: {
        slug: "target2",
        label: "Target 2 Achieved",
        class: "up",
        iStatusType: 2
      },
      4: {
        slug: "sl",
        label: "Stop Loss Triggered",
        class: "down-m",
        iStatusType: 3
      },
      5: {
        slug: "target3",
        label: "Target 3 Achieved",
        class: "up",
        iStatusType: 2
      },
      6: {
        slug: "exit",
        label: "Exit",
        ignoreIncrement: true,
        class: call_type_buy ? element.EP < element.ExitP ? "up" : "down-m" : element.EP > element.ExitP ? "up" : "down-m",
        iStatusType: 4
      },
      7: {
        slug: "bookProfit",
        label: "Book Profit",
        class: "up",
        iStatusType: 5
      },
      //
      8: {
        slug: "bookProfit",
        label: "Book Part Profit",
        class: "up",
        iStatusType: 6
      },
      10: {
        slug: "indexGenerated",
        label: "Index Generated",
        ignoreIncrement: true,
        class: "up",
        iStatusType: 0
      },
      11: {
        slug: "active",
        label: "Active",
        class: "balance",
        iStatusType: 1
      },
      12: {
        slug: "target1",
        label: "Target 1 Achieved",
        class: "up",
        iStatusType: 2
      },
      13: {
        slug: "target2",
        label: "Target 2 Achieved",
        class: "up",
        iStatusType: 2
      },
      14: {
        slug: "sl",
        label: "Stop Loss Triggered",
        class: "down-m",
        iStatusType: 3
      },
      15: {
        slug: "exit",
        label: "Exit",
        ignoreIncrement: true,
        class: call_type_buy ? element.EP < element.ExitP ? "up" : "down-m" : element.EP > element.ExitP ? "up" : "down-m",
        iStatusType: 4
      },
      21: {
        slug: "active",
        label: "Active",
        class: "balance",
        iStatusType: 1
      },
      22: {
        slug: "target1",
        label: "Target 1 Achieved",
        class: "up",
        iStatusType: 2
      },
      23: {
        slug: "target2",
        label: "Target 2 Achieved",
        class: "up",
        iStatusType: 2
      },
      24: {
        slug: "sl",
        label: "Stop Loss Triggered",
        class: "down-m",
        iStatusType: 3
      },
      26: {
        slug: "exit",
        label: "Exit",
        ignoreIncrement: true,
        class: call_type_buy ? element.EP < element.ExitP ? "up" : "down-m" : element.EP > element.ExitP ? "up" : "down-m",
        iStatusType: 4
      },
      27: {
        slug: "bookProfit",
        label: "Book Profit",
        class: "up",
        iStatusType: 5
      },
      28: {
        slug: "bookProfit",
        label: "Book Part Profit",
        class: "up",
        iStatusType: 6
      },
      31: {
        slug: "active",
        label: "Active",
        class: "balance",
        iStatusType: 1
      },
      32: {
        slug: "target1",
        label: "Target 1 Achieved",
        class: "up",
        iStatusType: 2
      },
      33: {
        slug: "target2",
        label: "Target 2 Achieved",
        class: "up",
        iStatusType: 2
      },
      34: {
        slug: "sl",
        label: "Stop Loss Triggered",
        class: "down-m",
        iStatusType: 3
      },
      35: {
        slug: "target3",
        label: "Target 3 Achieved",
        class: "up",
        iStatusType: 2
      },
      51: {
        slug: "active",
        label: "Active",
        class: "balance",
        iStatusType: 1
      },
      52: {
        slug: "target1",
        label: "Target 1 Achieved",
        class: "up",
        iStatusType: 2
      },
      54: {
        slug: "sl",
        label: "Stop Loss Triggered",
        class: "down-m",
        iStatusType: 3
      },
      56: {
        slug: "exit",
        label: "Exit",
        ignoreIncrement: true,
        class: call_type_buy ? element.EP < element.ExitP ? "up" : "down-m" : element.EP > element.ExitP ? "up" : "down-m",
        iStatusType: 4
      },
      57: {
        slug: "bookProfit",
        label: "Book Profit",
        class: "up",
        iStatusType: 5
      }
    };
    let dateData = element.ATime;
    if (dateData) {
      let len = dateData.split(" ");
      if (len.length) {
        element.date = len[0];
        element.time = len[1];
      }
    }
    let updatedDateData = element.TATime;
    if (updatedDateData) {
      let len = updatedDateData.split(" ");
      if (len.length) {
        element.updatedDate = len[0];
        element.updatedTime = len[1];
      }
    }
    let category_typeConf = {
      FiveMinPVBreakout: {
        subcategory_name: "Intra Spurt",
        research_type: "Intraday"
      },
      FifteenMinPVBreakout: {
        subcategory_name: "Dark Horse",
        research_type: "Positional"
      },
      IntradayOISpurts: {
        subcategory_name: "Intraday OI Spurts",
        research_type: "Intraday"
      },
      FiveMinSTBreakout: {
        subcategory_name: "Future Trade Simplifier Intraday",
        research_type: "Intraday"
      },
      FifteenMinSTBreakout: {
        subcategory_name: "Future Trade Simplifier Positional",
        research_type: "Positional"
      },
      CQuant: {
        subcategory_name: "CQuant",
        research_type: "Intraday"
      },
      "Intra Day": {
        subcategory_name: "C-Quant" || 0,
        research_type: "Intraday"
      },
      Positional: {
        subcategory_name: "C-Quant" || 0,
        research_type: "Positional"
      },
      "Short Term": {
        subcategory_name: "C-Quant" || 0,
        research_type: "Short Term"
      },
      "Long Term": {
        subcategory_name: "C-Quant" || 0,
        research_type: "Long Term"
      }
    };
    this.initializeCategoryConfig();
    let data = {
      call_type: element.HLType ? element.HLType == "High" ? "buy" : element.HLType == "sell" || element.HLType == "Low" ? "SELL" : "" : element.Side ? ["B", "BUY", "Buy"].indexOf(element.Side) > -1 ? "buy" : ["S", "SELL", "Sell"].indexOf(element.Side) > -1 ? "sell" : "" : "",
      category_id: "",
      category_name: "",
      category_slug: "",
      matched_price: null,
      option_type: "",
      priceData: {
        entry_price: {
          key: "entry_price",
          label: "Entry Price",
          value: element.EP / this.priceDivisor
        },
        stop_loss: {
          key: "stop_loss",
          label: "Stop Loss",
          value: element.SL / this.priceDivisor
        },
        target: {
          key: "target",
          label: "Target",
          value: element.TP1 / this.priceDivisor
        },
        target2: {
          key: "target2",
          label: "2nd Target",
          value: element.TP2 / this.priceDivisor
        },
        target3: {
          key: "target3",
          label: "3rd Target",
          value: element.TP3 / this.priceDivisor
        }
      },
      // published_date: element.date ? new Date(element.date.split('-')[2], element.date.split('-')[1], element.date.split('-')[0], element.time.split(':')[0], element.time.split(':')[1], element.time.split(':')[2]) : "",
      // updated_date: element.updatedDate ? new Date(element.updatedDate.split('-')[2], element.updatedDate.split('-')[1], element.updatedDate.split('-')[0], element.updatedTime.split(':')[0], element.updatedTime.split(':')[1], element.updatedTime.split(':')[2]) : "",
      published_date: element.date ? (0,_assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_10__["default"])(new Date(element.date.split("-")[2], element.date.split("-")[1] - 1, element.date.split("-")[0], element.time.split(":")[0], element.time.split(":")[1], element.time.split(":")[2])).format("Do MMM'YY hh:mm:ss A") : "",
      updated_date: element.updatedDate ? (0,_assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_10__["default"])(new Date(element.updatedDate.split("-")[2], element.updatedDate.split("-")[1] - 1, element.updatedDate.split("-")[0], element.updatedTime.split(":")[0], element.updatedTime.split(":")[1], element.updatedTime.split(":")[2])).format("Do MMM'YY hh:mm:ss A") : "",
      //new Date(element.date.split('-')[2], element.date.split('-')[1], element.date.split('-')[0], element.time.split(':')[0], element.time.split(':')[1], element.time.split(':')[2])
      //new Date(element.updatedDate.split('-')[2], element.updatedDate.split('-')[1], element.updatedDate.split('-')[0], element.updatedTime.split(':')[0], element.updatedTime.split(':')[1], element.updatedTime.split(':')[2])
      id: element.Id,
      scrip_name: element.Sym,
      scrip_expiry: element.IsExpired,
      isExpired: element.IsExpired,
      scrip_sec_desc: element.Name,
      scrip_symbol: element.Sym,
      sec_name: element.Sym,
      segment_id: element.Seg,
      series: "",
      status_flag: "",
      title: "",
      token: element.Tok,
      LTP: element.LTP / this.priceDivisor,
      status: element.TACode && signalConfigPre[element.TACode] && signalConfigPre[element.TACode].label ? signalConfigPre[element.TACode].label : "",
      //this.config.signalConfig&&element.AType&&this.config.signalConfig[element.AType]&&element.TACode&&this.config.signalConfig[element.AType].statusCodes&&this.config.signalConfig[element.AType].statusCodes[element.TACode]&&this.config.signalConfig[element.AType].statusCodes[element.TACode].label?this.config.signalConfig[element.AType].statusCodes[element.TACode].label:"",
      statusClass: element.TACode && signalConfigPre[element.TACode] && signalConfigPre[element.TACode].label ? signalConfigPre[element.TACode].class : "",
      //this.config.signalConfig&&element.AType&&this.config.signalConfig[element.AType]&&element.TACode&&this.config.signalConfig[element.AType].statusCodes&&this.config.signalConfig[element.AType].statusCodes[element.TACode]&&this.config.signalConfig[element.AType].statusCodes[element.TACode].label?this.config.signalConfig[element.AType].statusCodes[element.TACode].label:"",
      subcategory_name: this.category_typeConf[element.AType] ? this.category_typeConf[element.AType].subcategory_name : "",
      subcategory_id: "",
      research_type: this.category_typeConf[element.AType] ? this.category_typeConf[element.AType].research_type : "",
      profitPercentage: 0,
      calculatedQty: (element.MarketLot || 1) * 1,
      iStatusType: element.TACode && signalConfigPre[element.TACode] && signalConfigPre[element.TACode].iStatusType ? signalConfigPre[element.TACode].iStatusType : 0,
      bookedProfitPriceInPaise: 0,
      title1: this.category_typeConf[element.AType] ? this.category_typeConf[element.AType].title : "",
      desc: this.category_typeConf[element.AType] ? this.category_typeConf[element.AType].desc : "",
      segmentName: this.utils.getSegmentDetail(element.Seg, "SegmentName"),
      TACode: element.TACode,
      exitPrice: element.ExitP,
      miniTarget: element.MT,
      targetPrice0: element.TP0
    };
    data.matched_price = element.MP || 0; // this.getSignalMatchedPice(data)
    data.bookedProfitPriceInPaise = element.MT || 0;
    data.profitPercentage = this.getProfitPercentage(data.call_type == "buy", element.EP, element.MP);
    if (element.Sym == "LTI") {}
    return data;
  }
  /**
   * Get profit percentages
   * @param isBuy
   * @param iStatusType
   * @param targetPrice1InPaise
   * @param stopLossInPaise
   * @param exitPriceInPaise
   * @param bookedProfitPriceInPaise
   * @param entryPriceInPaise
   * @param calculatedQty
   * @returns
   */
  getProfitPercentage(isBuy, entryPriceInPaise, matchedPriceInPaise) {
    let profitPercentage = 0;
    try {
      if (isBuy) {
        if (matchedPriceInPaise > 1) {
          profitPercentage = (matchedPriceInPaise - entryPriceInPaise) / entryPriceInPaise;
          profitPercentage = profitPercentage * 100;
        } else {
          profitPercentage = 0;
        }
        // switch (iStatusType) {
        //   case 2: {
        //     profitPercentage =
        //       (((targetPrice1InPaise - entryPriceInPaise) * calculatedQty) / entryPriceInPaise)
        //     profitPercentage = (profitPercentage * 100)
        //     break;
        //   }
        //   case 3: {
        //     profitPercentage =
        //       (((stopLossInPaise - entryPriceInPaise) * calculatedQty) / entryPriceInPaise)
        //     profitPercentage = (profitPercentage * 100)
        //     break;
        //   }
        //   case 4: {
        //     if (exitPriceInPaise) {
        //       profitPercentage =
        //         (((exitPriceInPaise - entryPriceInPaise) * calculatedQty) / entryPriceInPaise)
        //       profitPercentage = (profitPercentage * 100)
        //     } else {
        //       profitPercentage = 0;
        //     }
        //     break;
        //   }
        //   case 5: {
        //     profitPercentage =
        //       (((bookedProfitPriceInPaise - entryPriceInPaise) * calculatedQty) / entryPriceInPaise)
        //     profitPercentage = (profitPercentage * 100)
        //     break;
        //   }
        //   case 6: {
        //     profitPercentage =
        //       (((targetPrice0InPaise - entryPriceInPaise) * calculatedQty) / entryPriceInPaise)
        //     profitPercentage = (profitPercentage * 100)
        //     break;
        //   }
        //   default: {
        //     profitPercentage = 0
        //     break;
        //   }
        // }
      } else {
        if (matchedPriceInPaise > 1) {
          profitPercentage = (entryPriceInPaise - matchedPriceInPaise) / entryPriceInPaise;
          profitPercentage = profitPercentage * 100;
        } else {
          profitPercentage = 0;
        }
        // switch (iStatusType) {
        //   case 2: {
        //     profitPercentage =
        //       (((entryPriceInPaise - targetPrice1InPaise) * calculatedQty) / entryPriceInPaise)
        //     profitPercentage = (profitPercentage * 100)
        //     break;
        //   }
        //   case 3: {
        //     profitPercentage =
        //       (((entryPriceInPaise - stopLossInPaise) * calculatedQty) / entryPriceInPaise)
        //     profitPercentage = (profitPercentage * 100)
        //     break;
        //   }
        //   case 4: {
        //     if (exitPriceInPaise) {
        //       profitPercentage =
        //         (((entryPriceInPaise - exitPriceInPaise) * calculatedQty) / entryPriceInPaise)
        //       profitPercentage = (profitPercentage * 100)
        //     } else {
        //       profitPercentage = 0;
        //     }
        //     break;
        //   }
        //   case 5: {
        //     profitPercentage =
        //       (((entryPriceInPaise - bookedProfitPriceInPaise) * calculatedQty) / entryPriceInPaise)
        //     profitPercentage = (profitPercentage * 100)
        //     break;
        //   }
        //   case 6: {
        //     profitPercentage =
        //       (((entryPriceInPaise - targetPrice0InPaise) * calculatedQty) / entryPriceInPaise)
        //     profitPercentage = (profitPercentage * 100)
        //     break;
        //   }
        //   default: {
        //     profitPercentage = 0
        //     break;
        //   }
        // }
      }
    } catch (e) {
      //  e.printStackTrace()
    }
    return profitPercentage;
  }
  /**
   * Sets the config
   */
  getConfig() {
    this.config.signalConfigPre = {
      1: {
        slug: "active",
        label: "Active",
        class: "up",
        iStatusType: 1
      },
      2: {
        slug: "target1",
        label: "Target 1 Achieved",
        class: "up",
        iStatusType: 2
      },
      3: {
        slug: "target2",
        label: "Target 2 Achieved",
        class: "up",
        iStatusType: 2
      },
      4: {
        slug: "sl",
        label: "Stop Loss Triggered",
        class: "down-m",
        iStatusType: 3
      },
      5: {
        slug: "target3",
        label: "Target 3 Achieved",
        class: "up",
        iStatusType: 2
      },
      6: {
        slug: "exit",
        label: "Exit",
        ignoreIncrement: true,
        class: "balance",
        iStatusType: 4
      },
      7: {
        slug: "bookProfit",
        label: "Book Profit",
        class: "up",
        iStatusType: 5
      },
      //
      8: {
        slug: "bookProfit",
        label: "Book Part Profit",
        class: "up",
        iStatusType: 6
      },
      10: {
        slug: "indexGenerated",
        label: "Index Generated",
        ignoreIncrement: true,
        class: "up",
        iStatusType: 0
      },
      11: {
        slug: "active",
        label: "Active",
        class: "up",
        iStatusType: 0
      },
      12: {
        slug: "target1",
        label: "Target 1 Achieved",
        class: "up",
        iStatusType: 0
      },
      13: {
        slug: "target2",
        label: "Target 2 Achieved",
        class: "up",
        iStatusType: 0
      },
      14: {
        slug: "sl",
        label: "Stop Loss Triggered",
        class: "down-m",
        iStatusType: 0
      },
      15: {
        slug: "exit",
        label: "Exit",
        ignoreIncrement: true,
        class: "balance",
        iStatusType: 0
      },
      21: {
        slug: "active",
        label: "Active",
        class: "up",
        iStatusType: 1
      },
      22: {
        slug: "target1",
        label: "Target 1 Achieved",
        class: "up",
        iStatusType: 2
      },
      23: {
        slug: "target2",
        label: "Target 2 Achieved",
        class: "up",
        iStatusType: 2
      },
      24: {
        slug: "sl",
        label: "Stop Loss Triggered",
        class: "down-m",
        iStatusType: 3
      },
      26: {
        slug: "exit",
        label: "Exit",
        ignoreIncrement: true,
        class: "balance",
        iStatusType: 4
      },
      27: {
        slug: "bookProfit",
        label: "Book Profit",
        class: "up",
        iStatusType: 5
      },
      28: {
        slug: "bookProfit",
        label: "Book Part Profit",
        class: "up",
        iStatusType: 6
      },
      31: {
        slug: "active",
        label: "Active",
        class: "up",
        iStatusType: 1
      },
      32: {
        slug: "target1",
        label: "Target 1 Achieved",
        class: "up",
        iStatusType: 2
      },
      33: {
        slug: "target2",
        label: "Target 2 Achieved",
        class: "up",
        iStatusType: 2
      },
      34: {
        slug: "sl",
        label: "Stop Loss Triggered",
        class: "down-m",
        iStatusType: 3
      },
      35: {
        slug: "target3",
        label: "Target 3 Achieved",
        class: "up",
        iStatusType: 2
      },
      51: {
        slug: "active",
        label: "Active",
        class: "up",
        iStatusType: 1
      },
      52: {
        slug: "target1",
        label: "Target 1 Achieved",
        class: "up",
        iStatusType: 2
      },
      54: {
        slug: "sl",
        label: "Stop Loss Triggered",
        class: "down-m",
        iStatusType: 3
      },
      56: {
        slug: "exit",
        label: "Exit",
        ignoreIncrement: true,
        class: "balance",
        iStatusType: 4
      },
      57: {
        slug: "bookProfit",
        label: "Book Profit",
        class: "up",
        iStatusType: 5
      }
    };
    this.config.signalConfig = {
      FiveMinPVBreakout: {
        statusCodes: {
          1: {
            slug: "active",
            label: "Active"
          },
          2: {
            slug: "target1",
            label: "Target 1 Achieved"
          },
          3: {
            slug: "target2",
            label: "Target 2 Achieved"
          },
          4: {
            slug: "sl",
            label: "Stop Loss Triggered"
          },
          5: {
            slug: "target3",
            label: "Target 3 Achieved"
          },
          6: {
            slug: "exit",
            label: "Exit",
            ignoreIncrement: true
          }
        }
      },
      FifteenMinPVBreakout: {
        statusCodes: {
          1: {
            slug: "active",
            label: "Active"
          },
          2: {
            slug: "target1",
            label: "Target 1 Achieved"
          },
          3: {
            slug: "target2",
            label: "Target 2 Achieved"
          },
          4: {
            slug: "sl",
            label: "Stop Loss Triggered"
          },
          5: {
            slug: "target3",
            label: "Target 3 Achieved"
          },
          6: {
            slug: "exit",
            label: "Exit",
            ignoreIncrement: true
          }
        }
      },
      FiveMinBTSTPVBreakout: {
        statusCodes: {
          1: {
            slug: "active",
            label: "Active"
          },
          2: {
            slug: "target1",
            label: "Target 1 Achieved"
          },
          3: {
            slug: "target2",
            label: "Target 2 Achieved"
          },
          4: {
            slug: "sl",
            label: "Stop Loss Triggered"
          },
          5: {
            slug: "target3",
            label: "Target 3 Achieved"
          },
          6: {
            slug: "exit",
            label: "Exit",
            ignoreIncrement: true
          },
          31: {
            slug: "active",
            label: "Active"
          },
          32: {
            slug: "target1",
            label: "Target 1 Achieved"
          },
          33: {
            slug: "target2",
            label: "Target 2 Achieved"
          },
          34: {
            slug: "sl",
            label: "Stop Loss Triggered"
          },
          35: {
            slug: "target3",
            label: "Target 3 Achieved"
          },
          21: {
            slug: "active",
            label: "Active"
          },
          22: {
            slug: "target1",
            label: "Target 1 Achieved"
          },
          23: {
            slug: "target2",
            label: "Target 2 Achieved"
          },
          24: {
            slug: "sl",
            label: "Stop Loss Triggered"
          },
          26: {
            slug: "exit",
            label: "Exit",
            ignoreIncrement: true
          },
          27: {
            slug: "bookProfit",
            label: "Book Profit"
          }
        }
      },
      IndexBreakout: {
        statusCodes: {
          10: {
            slug: "indexGenerated",
            label: "Index Generated",
            ignoreIncrement: true
          },
          11: {
            slug: "active",
            label: "Active"
          },
          12: {
            slug: "target1",
            label: "Target 1 Achieved"
          },
          13: {
            slug: "target2",
            label: "Target 2 Achieved"
          },
          14: {
            slug: "sl",
            label: "Stop Loss Triggered"
          },
          15: {
            slug: "exit",
            label: "Exit",
            ignoreIncrement: true
          }
        }
      },
      IntradayOISpurts: {
        statusCodes: {
          31: {
            slug: "active",
            label: "Active"
          },
          32: {
            slug: "target1",
            label: "Target 1 Achieved"
          },
          33: {
            slug: "target2",
            label: "Target 2 Achieved"
          },
          34: {
            slug: "sl",
            label: "Stop Loss Triggered"
          },
          35: {
            slug: "target3",
            label: "Target 3 Achieved"
          }
        }
      },
      FifteenMinSTBreakout: {
        statusCodes: {
          21: {
            slug: "active",
            label: "Active"
          },
          22: {
            slug: "target1",
            label: "Target 1 Achieved"
          },
          23: {
            slug: "target2",
            label: "Target 2 Achieved"
          },
          24: {
            slug: "sl",
            label: "Stop Loss Triggered"
          },
          26: {
            slug: "exit",
            label: "Exit",
            ignoreIncrement: true
          },
          27: {
            slug: "bookProfit",
            label: "Book Profit"
          }
        }
      },
      FiveMinSTBreakout: {
        statusCodes: {
          21: {
            slug: "active",
            label: "Active"
          },
          22: {
            slug: "target1",
            label: "Target 1 Achieved"
          },
          23: {
            slug: "target2",
            label: "Target 2 Achieved"
          },
          24: {
            slug: "sl",
            label: "Stop Loss Triggered"
          },
          26: {
            slug: "exit",
            label: "Exit",
            ignoreIncrement: true
          },
          27: {
            slug: "bookProfit",
            label: "Book Profit"
          }
        }
      }
    };
  }
  navigateToModificationPortal() {
    this.utils.setTrackMoeEvent("onProfileModification", {
      userId: this.utils.getUserId()
    });
    let userId = this.cryptography.decryptText(this.utils.get("userId"));
    let sessionId = this.cryptography.decryptText(this.utils.get("sessionId"));
    let url = this.rest.getOnboardingModificationURL(btoa(this.utils.getUserId()), encodeURIComponent(this.cryptography.encryptText(userId)), encodeURIComponent(this.cryptography.encryptText(sessionId)));
    window.open(url, "_blank"); // open window in current window (28/05/2021)
  }
  initializeCategoryConfig() {
    this.category_typeConf = {
      FiveMinPVBreakout: {
        subcategory_name: "Intra Spurt",
        research_type: "Intraday",
        title: "Intra Spurt",
        desc: "Intraday calls based on Multi-time frame Breakout Strategy"
      },
      FifteenMinPVBreakout: {
        subcategory_name: "Dark Horse",
        research_type: "Positional",
        title: "Dark Horse Strategy",
        desc: "Positional calls based on Price and Volume breakout"
      },
      IntradayOISpurts: {
        subcategory_name: "Intraday OI Spurts",
        research_type: "Intraday"
      },
      FiveMinSTBreakout: {
        subcategory_name: "Future Trade Simplifier",
        research_type: "Intraday",
        title: "Future Trade Simplifier",
        desc: "Intraday calls in Future counters based on the Open Interest & Price movement"
      },
      FifteenMinSTBreakout: {
        subcategory_name: "Future Trade Simplifier",
        research_type: "Positional",
        title: "Future Trade Simplifier Positional",
        desc: "Positional calls in Future counters based on the Open Interest & Pricemovement"
      },
      CQuant: {
        subcategory_name: "C-Quant",
        research_type: "Intraday",
        title: "C-Quant",
        desc: "Trading strategy based on data-driven research using quantitative mathematical models for T+5 trading horizons"
      },
      "Intra Day": {
        subcategory_name: "C-Quant",
        research_type: "Intraday",
        title: "C-Quant",
        desc: "Trading strategy based on data-driven research using quantitative mathematical models for T+5 trading horizons"
      },
      Positional: {
        subcategory_name: "C-Quant",
        research_type: "Positional",
        title: "C-Quant",
        desc: "Trading strategy based on data-driven research using quantitative mathematical models for T+5 trading horizons"
      },
      "Short Term": {
        subcategory_name: "C-Quant",
        research_type: "Short Term",
        title: "C-Quant",
        desc: "Trading strategy based on data-driven research using quantitative mathematical models for T+5 trading horizons"
      },
      "Long Term": {
        subcategory_name: "C-Quant",
        research_type: "Long Term",
        title: "C-Quant",
        desc: "Trading strategy based on data-driven research using quantitative mathematical models for T+5 trading horizons"
      },
      "EQUITY RESEARCH REPORT": {
        subcategory_name: "EQUITY RESEARCH REPORT",
        title: "",
        desc: ""
      },
      "Sumeet Bagadia’s Desk": {
        subcategory_name: "Sumeet Bagadia’s",
        title: "Sumeet Bagadia’s",
        desc: "Technical research calls given by our expert Sumeet Bagadia"
      }
    };
  }
  /**
   * Redirect to login page , when user clicks on login button of prelogin popup
   */
  login() {
    if (!this.isGoingToDetail) this.utils.setFromURL(this.redirectForSignal ? "/research-report/research/signals/EQ" : false);
    this.isGoingToDetail = false;
    this.redirectForSignal = false;
    this.router.navigate(["auth/login"]);
  }
  filterBtnClick() {
    // console.log("setTrackMoeEvent1")
    this.analytics.emitEvent("visitedResearch" + (this.config.filter.type == "experts" ? "Expert" : this.config.filter.type == "fundamental" ? "Fundamental" : this.config.filter.type == "option_strategy" ? "Option Strategy" : "Signal") + (this.config.filter.trade == "EQ" ? "Equity" : this.config.filter.trade == "FO" ? "Derivative" : this.config.filter.trade == "COM" ? "Commodity" : this.config.filter.trade == "CDS" ? "Currency" : "") + "FilterBSDF", this.utils.getUserId() || "guest", JSON.stringify({
      IP: this.shared.IPAddress
    }), 1);
    this.utils.setTrackMoeEvent("visitedResearch" + (this.config.filter.type == "experts" ? "Expert" : this.config.filter.type == "fundamental" ? "Fundamental" : this.config.filter.type == "option_strategy" ? "Option Strategy" : "Signal") + (this.config.filter.trade == "EQ" ? "Equity" : this.config.filter.trade == "FO" ? "Derivative" : this.config.filter.trade == "COM" ? "Commodity" : this.config.filter.trade == "CDS" ? "Currency" : "") + "FilterBSDF", {
      User_ID: this.utils.getUserId() || "guest",
      IP: this.shared.IPAddress
    });
    this.utils.pushDataLayerEvent({
      'event': 'visitedResearch',
      'platform': this.isMobile ? 'mobileweb' : 'desktopweb',
      'userId': this.utils.generateSHA256Hash(this.utils.getProfileData("MobileNo") || ""),
      'page_path': window.location.pathname,
      'page_url': window.location.href
    });
  }
  /**
   * Open Detail
   * @param data
   * @param isDetail
   */
  openTradeStrategy(data, isDetail) {
    if (data) {
      if (isDetail) {
        // this.utils.setTrackMoeEvent('ResearchOptionStrategyDetail', { "User_ID": this.utils.getUserId() || 'guest', "IP": this.shared.IPAddress });
        this.utils.setTrackMoeEvent("clickedOn", {
          User_ID: this.utils.getUserId() || "guest",
          IP: this.shared.IPAddress,
          buttonName: "SmResearchOptionStrategyDetails"
        });
        this.analytics.emitEvent("SmResearchOptionStrategyDetails", this.utils.getUserId() || "guest", JSON.stringify({
          IP: this.shared.IPAddress
        }), 1);
      } else {
        //    this.utils.setTrackMoeEvent('ResearchOptionStrategyTrade', { "User_ID": this.utils.getUserId() || 'guest', "IP": this.shared.IPAddress });
        this.utils.setTrackMoeEvent("clickedOn", {
          User_ID: this.utils.getUserId() || "guest",
          IP: this.shared.IPAddress,
          buttonName: "SmResearchOptionStrategyTrade"
        });
        this.analytics.emitEvent("SmResearchOptionStrategyTrade", this.utils.getUserId() || "guest", JSON.stringify({
          IP: this.shared.IPAddress
        }), 1);
      }
      this.renderer.setStyle(document.body, "overflow", "hidden");
      this.openTrade = false;
      this.openTrade = true;
      this.detail = data;
      this.isOpenTradeDetail = isDetail;
    }
  }
  /**
   * Close Detail
   */
  closeTradeStrategy() {
    this.renderer.setStyle(document.body, "overflow", "auto");
    this.openTrade = false;
    this.detail = {};
    // setTimeout(() => {
    //   if(this.draEle){
    //     this.draEle.destroy()
    //   }
    // }, 100);
  }
  /**Trade details */
  tradeDetails(data) {
    this.openTrade = false;
    this.tradeSuccess(data);
    this.renderer.setStyle(document.body, "overflow", "auto");
  }
  /**
   * Show PopUP
   * @param data
   */
  tradeSuccess(data) {
    this.closeTradeStrategy();
    this.tradeSuccessConf = data;
  }
  /**Close POPup */
  closeTradeSuccess() {
    this.renderer.setStyle(document.body, "overflow", "auto");
    this.tradeSuccessConf.tradeCompleted = false;
  }
  /**
   * Fetch User Profile in case of Successfull login
   */
  getProfileDetails() {
    this.isServiceHit = true;
    let request = {
      userId: this.OSAppClientId,
      sessionId: this.OSAppSessionId,
      GroupId: "HO"
    };
    this.rest.getProfile(request).subscribe(data => {
      if (data.Status === "Success" && data.Response) {
        this.OSProfileDetails = data.Response;
        this.utils.setUserAttributes(data.Response, false, true);
      } else {
        this.OSProfileDetails = {};
      }
    }, err => {
      this.OSProfileDetails = {};
    }).add(() => {
      this.isServiceHit = false;
    });
  }
  getBrokerage() {
    let userid;
    if (this.isOSClientFromApp) {
      userid = this.OSAppClientId;
    }
    this.rest.getBrokerage(userid).subscribe(data => {
      if (data.Status != "Success" || !data.Response || data.Response && !data.Response.length) return;
      let brokerageConfig = [{
        grp: "CASH",
        seg: "Equity",
        data: [{
          label: "Intraday",
          value: "",
          ch: 0,
          price: {
            val: 100,
            mul: 100,
            info: " for trade value of 10 Thousand"
          },
          rate: {
            mul: "",
            info: " for trade value of 10 Thousand"
          }
        }, {
          label: "Delivery",
          value: "",
          ch: 0,
          price: {
            val: 100,
            mul: 100,
            info: " for trade value of 10 Thousand"
          },
          rate: {
            mul: "",
            info: " for trade value of 10 Thousand"
          }
        }]
      }, {
        grp: "DERV",
        seg: "Derivatives",
        data: [{
          label: "Future",
          value: "",
          ch: 0,
          price: {
            val: 100,
            mul: 1000,
            info: " for trade value of 1 Lakh"
          },
          rate: {
            mul: "",
            info: " per LOT"
          }
        }, {
          label: "Option",
          value: "",
          ch: 0,
          price: {
            val: 100,
            mul: 1000,
            info: " for trade value of 1 Lakh"
          },
          rate: {
            mul: "",
            info: " per LOT"
          }
        }]
      }, {
        grp: "COMM",
        seg: "Commodity",
        data: [{
          label: "Future",
          value: "",
          ch: 0,
          price: {
            val: 100,
            mul: 1000,
            info: " for trade value of 1 Lakh"
          },
          rate: {
            mul: "",
            info: " per LOT"
          }
        }, {
          label: "Option",
          value: "",
          ch: 0,
          price: {
            val: 100,
            mul: 1000,
            info: " for trade value of 1 Lakh"
          },
          rate: {
            mul: "",
            info: " per LOT"
          }
        }]
      }, {
        grp: "CURR",
        seg: "Currency",
        data: [{
          label: "Future",
          value: "",
          ch: 0,
          price: {
            val: 100,
            mul: 1000,
            info: " for trade value of 1 Lakh"
          },
          rate: {
            mul: "",
            info: " per LOT"
          }
        }, {
          label: "Option",
          value: "",
          ch: 0,
          price: {
            val: 100,
            mul: 1000,
            info: " for trade value of 1 Lakh"
          },
          rate: {
            mul: "",
            info: " per LOT"
          }
        }]
      }, {
        grp: "ICEX",
        seg: "ICEX",
        data: [{
          label: "Future",
          value: "",
          ch: 0,
          price: {
            val: 100,
            mul: 1000,
            info: " for trade value of 1 Lakh"
          },
          rate: {
            mul: "",
            info: " per LOT"
          }
        }, {
          label: "Option",
          value: "",
          ch: 0,
          price: {
            val: 100,
            mul: 1000,
            info: " for trade value of 1 Lakh"
          },
          rate: {
            mul: "",
            info: " per LOT"
          }
        }]
      }];
      let brokdata = {};
      let brokerageData = [];
      data.Response.forEach(el => {
        let seg = brokerageConfig.filter(item => {
          return item.grp == el.SEG;
        });
        for (let i = 0; i <= 1; i++) {
          if (el["TYP"].split(",")[i] == "P") {
            seg[0].data[i].value = "₹" + (seg[0].data[i].price.mul ? (parseFloat(el["VAL"].split(",")[i] || 0) * seg[0].data[i].price.mul).toString() : parseFloat(el["VAL"].split(",")[i] || 0)) + seg[0].data[i].price.info;
            seg[0].data[i]["percentage"] = parseFloat(el["VAL"].split(",")[i] || 0);
          } else if (el["TYP"].split(",")[i] == "R") {
            seg[0].data[i].value = "₹" + parseFloat(el["VAL"].split(",")[i] || 0) + seg[0].data[i].rate.info;
            seg[0].data[i]["rupees"] = parseFloat(el["VAL"].split(",")[i] || 0);
          }
        }
        if (seg[0]) {
          brokerageData.push(seg[0]);
        }
      });
      brokerageData.forEach(ele => {
        brokdata[ele.grp] = {};
        ele.data.forEach(e => {
          brokdata[ele.grp][e.label] = e;
        });
      });
      this.utils.updateBrokerageData(brokdata);
    }, err => {});
  }
  mobileSuccessRedirection() {
    window.open(location.origin + "/open.html?target=option_strategy", "_self");
  }
  static {
    this.ctorParameters = () => [{
      type: src_app_services_cryptography_service__WEBPACK_IMPORTED_MODULE_3__.CryptographyService
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_25__.ActivatedRoute
    }, {
      type: src_app_services_sockets_broadcaster__WEBPACK_IMPORTED_MODULE_8__.Broadcaster
    }, {
      type: src_app_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_4__.FirestoreService
    }, {
      type: _services_pager_pager_service__WEBPACK_IMPORTED_MODULE_19__.PagerService
    }, {
      type: _angular_common__WEBPACK_IMPORTED_MODULE_26__.Location
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_25__.Router
    }, {
      type: src_app_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_7__.SharedDataService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_27__.Renderer2
    }, {
      type: src_app_services_rest_tool_service__WEBPACK_IMPORTED_MODULE_6__.ToolService
    }, {
      type: src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_9__.UtilsService
    }, {
      type: src_app_services_rest_post_login_service__WEBPACK_IMPORTED_MODULE_5__.PostLoginService
    }, {
      type: src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_2__.AnalyticsService
    }];
  }
};
ResearchReportSectionComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_28__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_27__.Component)({
  selector: "app-research-report-section",
  template: _research_report_section_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_25__.RouterLink, ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_29__.PopoverModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule, _directives_input_restrict2_directive__WEBPACK_IMPORTED_MODULE_14__.InputRestrict2Directive, _directives_dropdown_dropdown_directive__WEBPACK_IMPORTED_MODULE_13__.Dropdown, _directives_dropdown_dropdown_open_directive__WEBPACK_IMPORTED_MODULE_12__.DropdownOpen, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.ReactiveFormsModule, _directives_dropdown_dropdown_not_closable_zone_directive__WEBPACK_IMPORTED_MODULE_11__.DropdownNotClosableZone, _tooltip_module_tooltip_directive__WEBPACK_IMPORTED_MODULE_20__.TooltipDirective, _angular_common__WEBPACK_IMPORTED_MODULE_26__.NgClass, _directives_show_focus_directive__WEBPACK_IMPORTED_MODULE_15__.ShowFocusDirective, _option_detail_option_detail_component__WEBPACK_IMPORTED_MODULE_21__.OptionDetailComponent, _angular_common__WEBPACK_IMPORTED_MODULE_26__.LowerCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_26__.DecimalPipe, _pipes_segment_pipe__WEBPACK_IMPORTED_MODULE_17__.SegmentPipe, _pipes_condense_pipe__WEBPACK_IMPORTED_MODULE_16__.CondensePipe, _pipes_value_pipe__WEBPACK_IMPORTED_MODULE_18__.ValuePipe],
  providers: [_services_pager_pager_service__WEBPACK_IMPORTED_MODULE_19__.PagerService],
  styles: [(_research_report_section_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_28__.__metadata)("design:paramtypes", [src_app_services_cryptography_service__WEBPACK_IMPORTED_MODULE_3__.CryptographyService, _angular_router__WEBPACK_IMPORTED_MODULE_25__.ActivatedRoute, src_app_services_sockets_broadcaster__WEBPACK_IMPORTED_MODULE_8__.Broadcaster, src_app_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_4__.FirestoreService, _services_pager_pager_service__WEBPACK_IMPORTED_MODULE_19__.PagerService, _angular_common__WEBPACK_IMPORTED_MODULE_26__.Location, _angular_router__WEBPACK_IMPORTED_MODULE_25__.Router, src_app_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_7__.SharedDataService, _angular_core__WEBPACK_IMPORTED_MODULE_27__.Renderer2, src_app_services_rest_tool_service__WEBPACK_IMPORTED_MODULE_6__.ToolService, src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_9__.UtilsService, src_app_services_rest_post_login_service__WEBPACK_IMPORTED_MODULE_5__.PostLoginService, src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_2__.AnalyticsService])], ResearchReportSectionComponent);


/***/ }),

/***/ 79037:
/*!************************************************************!*\
  !*** ./src/app/research-report/research-report.routing.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResearchRoutes: () => (/* binding */ ResearchRoutes)
/* harmony export */ });
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../guards/auth.guard */ 61620);
/* harmony import */ var _research_report_section_research_report_section_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./research-report-section/research-report-section.component */ 59833);


/** fixed config for postlogin pages */
const routeConfig = {
  header: true,
  footer: true,
  indices: false,
  betaFooter: false,
  ticker: true,
  watchlist: false,
  freshChat: true
};
const ResearchRoutes = [{
  path: 'research/:type/:trade',
  component: _research_report_section_research_report_section_component__WEBPACK_IMPORTED_MODULE_1__.ResearchReportSectionComponent,
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  data: {
    config: routeConfig
  }
}, {
  path: 'research/:type/:trade/:report_type',
  component: _research_report_section_research_report_section_component__WEBPACK_IMPORTED_MODULE_1__.ResearchReportSectionComponent,
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  data: {
    config: routeConfig
  }
}, {
  path: 'research/:type/:trade/:report_type/:report_uuid',
  component: _research_report_section_research_report_section_component__WEBPACK_IMPORTED_MODULE_1__.ResearchReportSectionComponent,
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  data: {
    config: routeConfig
  }
}];

/***/ }),

/***/ 20641:
/*!*************************************************!*\
  !*** ./src/app/services/pager/pager.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PagerService: () => (/* binding */ PagerService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);


/**Pager Services */
let PagerService = class PagerService {
  /**
   * Calculate pages Count
   */
  getPager(totalItems, currentPage = 1, pageSize = 10) {
    /**calculate total pages */
    const totalPages = Math.ceil(totalItems / pageSize);
    /** Startpage and Endpage Declaration*/
    let startPage, endPage;
    if (totalPages <= 5) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= 3) {
        startPage = 1;
        endPage = 5;
      } else if (currentPage + 1 >= totalPages) {
        startPage = totalPages - 4;
        endPage = totalPages;
      } else {
        if (totalPages - (currentPage - 2) == 5) {
          startPage = currentPage - 1;
          endPage = currentPage + 3;
        } else {
          startPage = currentPage - 2;
          endPage = currentPage + 2;
        }
      }
    }
    /**calculate start and end item indexes */
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
    /**create an array of pages to ng-repeat in the pager control */
    const pages = this.range(startPage, endPage + 1, 1);
    /** return object with all pager properties required by the view */
    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages
    };
  }
  /**Calculates Range */
  range(start, stop, step) {
    if (stop == null) {
      stop = start || 0;
      start = 0;
    }
    step = step || 1;
    let length = Math.max(Math.ceil((stop - start) / step), 0);
    let range = Array(length);
    for (let idx = 0; idx < length; idx++, start += step) {
      range[idx] = start;
    }
    return range;
  }
};
PagerService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)()], PagerService);


/***/ }),

/***/ 34729:
/*!***************************************************************************************!*\
  !*** ./src/app/research-report/option-detail/option-detail.component.scss?ngResource ***!
  \***************************************************************************************/
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
.option-str-details {
  position: fixed;
  z-index: 9999999;
  width: 100%;
  left: 0;
  top: 0;
  height: 100%;
  background: rgba(0, 0, 0, 0.16);
}
.option-str-details .str-details-fixed {
  width: 550px;
  background: #ffffff;
  position: fixed;
  right: 0;
  top: 0;
  height: 100%;
  transform: translateX(100%);
  transition: transform 0.4s;
}
.option-str-details .str-details-fixed .str-details-header {
  padding: 30px;
  padding-bottom: 0;
}
.option-str-details .str-details-fixed .str-details-header .str-head-top {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}
.option-str-details .str-details-fixed .str-details-header .str-head-top .top-det-left {
  display: flex;
  align-items: center;
}
.option-str-details .str-details-fixed .str-details-header .str-head-top .top-det-left .c-menu__close {
  padding: 0;
  margin: 0;
  outline: none;
  box-shadow: inherit;
  border: 0;
  color: #004393;
  font-size: 14px;
  background: transparent;
}
.option-str-details .str-details-fixed .str-details-header .str-head-top .top-det-left h4 {
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #004393;
  font-weight: 500;
  margin: 0;
  letter-spacing: 0.19px;
  margin-left: 10px;
}
.option-str-details .str-details-fixed .str-details-header .str-head-top .top-det-left h4 .ic-txt {
  font-size: 12px;
  position: relative;
  letter-spacing: 0.14px;
  display: flex;
  align-items: center;
  font-family: "SFProText-Regular";
  margin: 0;
  margin-left: 10px;
  padding-left: 10px;
}
.option-str-details .str-details-fixed .str-details-header .str-head-top .top-det-left h4 .ic-txt .svg-img {
  margin-right: 5px;
}
.option-str-details .str-details-fixed .str-details-header .str-head-top .top-det-left h4 .ic-txt.active-lbl {
  color: #F6B900;
}
.option-str-details .str-details-fixed .str-details-header .str-head-top .top-det-left h4 .ic-txt.active-lbl .svg-img path {
  fill: #F6B900;
}
.option-str-details .str-details-fixed .str-details-header .str-head-top .top-det-left h4 .ic-txt::before {
  content: "";
  width: 1.5px;
  height: 10px;
  display: block;
  background: #333333;
  position: absolute;
  left: 0;
  top: 5px;
}
@media (max-width: 768px) {
  .option-str-details .str-details-fixed .str-details-header .str-head-top .top-det-left h4 {
    font-size: 14px;
  }
}
@media (max-width: 768px) {
  .option-str-details .str-details-fixed .str-details-header .str-head-top {
    background: #F4F8FF;
    position: fixed;
    padding: 20px 15px;
    left: 0;
    top: 0;
    width: 100%;
  }
}
.option-str-details .str-details-fixed .str-details-header .str-head-bottom {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  border-bottom: 1px solid rgba(112, 112, 112, 0.1607843137);
  padding: 30px 0 15px 0;
}
.option-str-details .str-details-fixed .str-details-header .str-head-bottom .script-ttl {
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  font-family: "SFProText-Semibold";
}
@media (max-width: 768px) {
  .option-str-details .str-details-fixed .str-details-header .str-head-bottom .script-ttl {
    font-size: 16px;
  }
}
.option-str-details .str-details-fixed .str-details-header .str-head-bottom .head-bot-left {
  width: 60%;
}
.option-str-details .str-details-fixed .str-details-header .str-head-bottom .head-bot-left .script-ttl {
  letter-spacing: 0.22px;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  display: block;
  white-space: nowrap;
}
.option-str-details .str-details-fixed .str-details-header .str-head-bottom .head-bot-left .pub-date-ttl {
  color: #797979;
  font-weight: 400;
  letter-spacing: 0.14px;
  font-family: "SFProText-Regular";
}
.option-str-details .str-details-fixed .str-details-header .str-head-bottom .head-bot-right {
  width: 35%;
  text-align: right;
}
.option-str-details .str-details-fixed .str-details-header .str-head-bottom .head-bot-right .txt-mn {
  letter-spacing: 0.14px;
  font-family: "SFProText-Regular";
}
@media (max-width: 768px) {
  .option-str-details .str-details-fixed .str-details-header .str-head-bottom {
    padding: 15px;
    padding-bottom: 5px;
    border-radius: 8px 8px 0 0;
    background: #FFFFFF;
    margin-top: 65px;
  }
}
@media (max-width: 768px) {
  .option-str-details .str-details-fixed .str-details-header {
    padding: 0;
  }
}
.option-str-details .str-details-fixed .str-details-middle-cont {
  height: 100%;
}
.option-str-details .str-details-fixed .str-details-middle-cont .str-market-count {
  height: calc(100% - 266px);
  overflow: auto;
  padding: 0 30px;
}
.option-str-details .str-details-fixed .str-details-middle-cont .str-market-count .market-count-list {
  padding: 20px 0 30px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
}
.option-str-details .str-details-fixed .str-details-middle-cont .str-market-count .market-count-list .count-list-item {
  width: 23%;
  border-right: 1px solid rgba(112, 112, 112, 0.1607843137);
}
.option-str-details .str-details-fixed .str-details-middle-cont .str-market-count .market-count-list .count-list-item h6 {
  color: #888888;
  font-weight: 400;
  font-family: "SFProText-Regular";
  margin-top: 0;
  line-height: 16px;
  letter-spacing: 0.14px;
}
.option-str-details .str-details-fixed .str-details-middle-cont .str-market-count .market-count-list .count-list-item h5 {
  margin-bottom: 0;
  font-family: "SFProText-Semibold";
  letter-spacing: 0;
}
.option-str-details .str-details-fixed .str-details-middle-cont .str-market-count .market-count-list .count-list-item:last-child {
  border-right: 0;
}
@media (max-width: 768px) {
  .option-str-details .str-details-fixed .str-details-middle-cont .str-market-count .market-count-list {
    padding: 15px;
    background: #ffffff;
    border-radius: 0 0 8px 8px;
    overflow: hidden;
  }
}
@media (max-width: 768px) {
  .option-str-details .str-details-fixed .str-details-middle-cont .str-market-count {
    padding: 0;
  }
}
.option-str-details .str-details-fixed .str-details-middle-cont .str-market-details .str-d-flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.option-str-details .str-details-fixed .str-details-middle-cont .str-market-details .str-d-flex .pub-date-ttl {
  color: #797979;
  letter-spacing: 0.12px;
}
@media (max-width: 768px) {
  .option-str-details .str-details-fixed .str-details-middle-cont .str-market-details .str-d-flex .pub-date-ttl {
    color: #191919;
  }
}
@media (max-width: 768px) {
  .option-str-details .str-details-fixed .str-details-middle-cont .str-market-details .str-d-flex {
    margin-top: 15px;
    padding: 0 5px;
  }
  .option-str-details .str-details-fixed .str-details-middle-cont .str-market-details .str-d-flex h4 {
    font-size: 14px;
  }
}
.option-str-details .str-details-fixed .str-details-middle-cont .str-market-details .market-details-data {
  margin-top: 20px;
}
.option-str-details .str-details-fixed .str-details-middle-cont .str-market-details .market-details-data .details-data-table {
  width: 100%;
}
.option-str-details .str-details-fixed .str-details-middle-cont .str-market-details .market-details-data .details-data-table thead tr th {
  color: #888888;
  font-family: "SFProText-Regular";
  font-weight: 400;
  letter-spacing: 0;
}
@media (max-width: 768px) {
  .option-str-details .str-details-fixed .str-details-middle-cont .str-market-details .market-details-data .details-data-table thead tr th.hide-mob {
    display: none;
  }
}
.option-str-details .str-details-fixed .str-details-middle-cont .str-market-details .market-details-data .details-data-table tbody tr {
  border-bottom: 1px solid rgba(112, 112, 112, 0.1607843137);
}
.option-str-details .str-details-fixed .str-details-middle-cont .str-market-details .market-details-data .details-data-table tbody tr td {
  padding: 16px 0;
}
.option-str-details .str-details-fixed .str-details-middle-cont .str-market-details .market-details-data .details-data-table tbody tr td h4 {
  font-size: 14px;
  color: #333333;
  font-weight: 500;
  letter-spacing: 0;
}
@media (max-width: 768px) {
  .option-str-details .str-details-fixed .str-details-middle-cont .str-market-details .market-details-data .details-data-table tbody tr td h4 {
    font-size: 13px;
  }
}
.option-str-details .str-details-fixed .str-details-middle-cont .str-market-details .market-details-data .details-data-table tbody tr td .lot-price-mobile {
  display: none;
  font-size: 12px;
  color: #666666;
  letter-spacing: 0;
  margin-top: 5px;
  margin-bottom: 0;
}
@media (max-width: 768px) {
  .option-str-details .str-details-fixed .str-details-middle-cont .str-market-details .market-details-data .details-data-table tbody tr td .lot-price-mobile {
    display: block;
  }
}
.option-str-details .str-details-fixed .str-details-middle-cont .str-market-details .market-details-data .details-data-table tbody tr td .btn-comn {
  width: 22px;
  height: 22px;
  padding: 0;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  outline: none;
  box-shadow: none;
  font-weight: 500;
  text-transform: uppercase;
  border-radius: 2px;
}
.option-str-details .str-details-fixed .str-details-middle-cont .str-market-details .market-details-data .details-data-table tbody tr td .btn-comn.btn-buy {
  color: #004393;
  background: rgba(0, 67, 147, 0.1019607843);
}
.option-str-details .str-details-fixed .str-details-middle-cont .str-market-details .market-details-data .details-data-table tbody tr td .btn-comn.btn-sell {
  color: #EE404A;
  background: rgba(238, 64, 74, 0.1019607843);
}
@media (max-width: 768px) {
  .option-str-details .str-details-fixed .str-details-middle-cont .str-market-details .market-details-data .details-data-table tbody tr td .btn-comn {
    font-size: 14px;
  }
}
@media (max-width: 768px) {
  .option-str-details .str-details-fixed .str-details-middle-cont .str-market-details .market-details-data .details-data-table tbody tr td {
    vertical-align: top;
    padding: 12px 0;
  }
}
@media (max-width: 768px) {
  .option-str-details .str-details-fixed .str-details-middle-cont .str-market-details .market-details-data .details-data-table tbody tr td.hide-mob {
    display: none;
  }
}
.option-str-details .str-details-fixed .str-details-middle-cont .str-market-details .market-details-data .details-data-table tbody tr:last-child {
  border: 0;
}
@media (max-width: 768px) {
  .option-str-details .str-details-fixed .str-details-middle-cont .str-market-details .market-details-data {
    padding: 15px;
    margin-top: 5px;
    background: #ffffff;
    border-radius: 8px;
  }
}
.option-str-details .str-details-fixed .str-details-middle-cont .str-details-footer {
  position: fixed;
  width: 100%;
  left: 0;
  padding: 15px 30px 25px;
  bottom: 0;
  background: #ffffff;
  z-index: 9999;
}
.option-str-details .str-details-fixed .str-details-middle-cont .str-details-footer .det-funds-det {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.option-str-details .str-details-fixed .str-details-middle-cont .str-details-footer .det-funds-det h4 {
  font-size: 12px;
  color: #797979;
  font-family: "SFProText-Regular";
  font-weight: 400;
  letter-spacing: 0;
}
.option-str-details .str-details-fixed .str-details-middle-cont .str-details-footer .det-funds-det h4 .amnt-ttl {
  font-size: 14px;
  font-family: "SFProText-Semibold";
  font-weight: 600;
  color: #333333;
}
@media (max-width: 768px) {
  .option-str-details .str-details-fixed .str-details-middle-cont .str-details-footer .det-funds-det h4 .amnt-ttl {
    display: block;
    margin-top: 5px;
  }
}
.option-str-details .str-details-fixed .str-details-middle-cont .str-details-footer .det-funds-det h4:last-child {
  text-align: right;
}
@media (max-width: 768px) {
  .option-str-details .str-details-fixed .str-details-middle-cont .str-details-footer .det-funds-det h4 .hide-m {
    display: none;
  }
}
.option-str-details .str-details-fixed .str-details-middle-cont .str-details-footer .det-funds-det h4 .show-tl-mob {
  display: inline-block;
}
@media (max-width: 768px) {
  .option-str-details .str-details-fixed .str-details-middle-cont .str-details-footer .det-funds-det h4 .show-tl-mob {
    display: inline-block;
  }
}
.option-str-details .str-details-fixed .str-details-middle-cont .str-details-footer .det-funds-det h4 .show-tl-mob .charg-btn {
  font-style: normal;
  color: #004393;
  text-decoration: underline;
}
.option-str-details .str-details-fixed .str-details-middle-cont .str-details-footer .det-funds-det h4 .show-tl-mob .charg-btn.charg-btn-mobile {
  display: none;
}
@media (max-width: 768px) {
  .option-str-details .str-details-fixed .str-details-middle-cont .str-details-footer .det-funds-det {
    background: #F4F8FF;
    padding: 16px;
  }
}
.option-str-details .str-details-fixed .str-details-middle-cont .str-details-footer .buy-sell-btn {
  width: 100%;
  background: #004393;
  padding: 10px 0;
  color: #fff;
  font-size: 16px;
  border-radius: 4px;
  margin-top: 20px;
}
@media (max-width: 768px) {
  .option-str-details .str-details-fixed .str-details-middle-cont .str-details-footer .buy-sell-btn {
    width: calc(100% - 30px);
    margin: 12px 15px;
    display: block;
  }
}
@media (max-width: 768px) {
  .option-str-details .str-details-fixed .str-details-middle-cont .str-details-footer {
    padding: 0 0 16px 0;
    background: #FAFBFD;
  }
}
@media (max-width: 768px) {
  .option-str-details .str-details-fixed {
    width: 100%;
    padding: 8px;
    background: #EFEFF3;
  }
}
.option-str-details.open-mdl .str-details-fixed {
  transform: translateX(0);
}

.str-details-order-confirm {
  position: fixed;
  z-index: 9999999;
  width: 100%;
  left: 0;
  top: 0;
  height: 100%;
  background: rgba(0, 0, 0, 0.16);
  display: flex;
  align-items: center;
  padding: 0 15px;
}
.str-details-order-confirm .order-confirm-sub-box {
  width: 838px;
  background: #ffffff;
  margin: 0 auto;
  display: block;
  margin-top: 5%;
  border-radius: 8px;
  position: relative;
}
.str-details-order-confirm .order-confirm-sub-box .sub-box-header {
  padding: 24px;
  border-bottom: 1px solid rgba(112, 112, 112, 0.1607843137);
  position: relative;
}
.str-details-order-confirm .order-confirm-sub-box .sub-box-header h5 {
  color: #004393;
  font-weight: 500;
  letter-spacing: 0.14px;
  margin-top: 0;
  display: flex;
  align-items: center;
  font-size: 12px;
}
.str-details-order-confirm .order-confirm-sub-box .sub-box-header h5 span {
  color: #333333;
  margin-left: 5px;
  position: relative;
  margin-left: 10px;
  padding-left: 10px;
  letter-spacing: 0.14px;
}
.str-details-order-confirm .order-confirm-sub-box .sub-box-header h5 span.st-labl {
  padding-right: 10px;
}
.str-details-order-confirm .order-confirm-sub-box .sub-box-header h5 span.st-labl::before {
  content: "";
  width: 1.5px;
  height: 9px;
  display: block;
  background: #333333;
  position: absolute;
  left: 0;
  top: 2px;
}
.str-details-order-confirm .order-confirm-sub-box .sub-box-header h5 span.st-labl::after {
  content: "";
  width: 1.5px;
  height: 9px;
  display: block;
  background: #333333;
  position: absolute;
  right: 0;
  top: 2px;
}
.str-details-order-confirm .order-confirm-sub-box .sub-box-header h5 .ic-txt {
  font-size: 12px;
  position: relative;
  letter-spacing: 0.14px;
  display: flex;
  align-items: center;
  font-family: "SFProText-Regular";
  margin: 0;
  margin-left: 0;
  padding-left: 10px;
}
.str-details-order-confirm .order-confirm-sub-box .sub-box-header h5 .ic-txt .svg-img {
  margin-right: 5px;
}
.str-details-order-confirm .order-confirm-sub-box .sub-box-header h5 .ic-txt.active-lbl {
  color: #F6B900;
}
.str-details-order-confirm .order-confirm-sub-box .sub-box-header h5 .ic-txt.active-lbl .svg-img path {
  fill: #F6B900;
}
.str-details-order-confirm .order-confirm-sub-box .sub-box-header .script-ttl {
  color: #333333;
  font-weight: 500;
  letter-spacing: 0.22px;
}
.str-details-order-confirm .order-confirm-sub-box .sub-box-header .script-ttl small {
  font-size: 12px;
  font-family: "SFProText-Regular";
}
.str-details-order-confirm .order-confirm-sub-box .sub-box-header .close-modl {
  position: absolute;
  right: 24px;
  top: 24px;
  cursor: pointer;
}
@media (max-width: 768px) {
  .str-details-order-confirm .order-confirm-sub-box .sub-box-header {
    display: none;
  }
}
.str-details-order-confirm .order-confirm-sub-box .order-conf-data {
  height: 332px;
  overflow: auto;
}
@media (max-width: 768px) {
  .str-details-order-confirm .order-confirm-sub-box .order-conf-data .trade-charges-details {
    padding: 0;
    position: relative;
    left: inherit;
    top: inherit;
    bottom: inherit;
    background: transparent;
    margin-top: 25px;
    box-shadow: none;
    z-index: 0;
    width: 100%;
    margin-bottom: 80px;
  }
}
.str-details-order-confirm .order-confirm-sub-box .order-conf-data .ttl-con {
  margin-bottom: 0;
  padding: 24px;
  padding-bottom: 0;
}
@media (max-width: 768px) {
  .str-details-order-confirm .order-confirm-sub-box .order-conf-data .ttl-con {
    padding: 10px;
    font-size: 14px;
  }
}
.str-details-order-confirm .order-confirm-sub-box .order-conf-data .conf-data-table {
  padding: 15px 24px;
  height: 272px;
  overflow: auto;
}
.str-details-order-confirm .order-confirm-sub-box .order-conf-data .conf-data-table .details-data-table {
  width: 90%;
}
.str-details-order-confirm .order-confirm-sub-box .order-conf-data .conf-data-table .details-data-table thead tr th {
  color: #888888;
  font-family: "SFProText-Regular";
  font-weight: 400;
  letter-spacing: 0;
  font-size: 14px;
  min-width: 100px;
}
@media (max-width: 1366px) {
  .str-details-order-confirm .order-confirm-sub-box .order-conf-data .conf-data-table .details-data-table thead tr th {
    font-size: 12px;
  }
}
@media (max-width: 768px) {
  .str-details-order-confirm .order-confirm-sub-box .order-conf-data .conf-data-table .details-data-table thead tr th {
    font-size: 10px;
    min-width: inherit;
  }
}
.str-details-order-confirm .order-confirm-sub-box .order-conf-data .conf-data-table .details-data-table tbody tr td {
  padding: 10px 0 10px 0;
}
.str-details-order-confirm .order-confirm-sub-box .order-conf-data .conf-data-table .details-data-table tbody tr td h4 {
  font-size: 16px;
  color: #333333;
  font-weight: 500;
  letter-spacing: 0;
}
@media (max-width: 1366px) {
  .str-details-order-confirm .order-confirm-sub-box .order-conf-data .conf-data-table .details-data-table tbody tr td h4 {
    font-size: 14px;
  }
}
@media (max-width: 768px) {
  .str-details-order-confirm .order-confirm-sub-box .order-conf-data .conf-data-table .details-data-table tbody tr td h4 {
    font-size: 12px;
  }
}
.str-details-order-confirm .order-confirm-sub-box .order-conf-data .conf-data-table .details-data-table tbody tr td .btn-comn {
  width: 22px;
  height: 22px;
  padding: 0;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  outline: none;
  box-shadow: none;
  font-weight: 500;
  text-transform: uppercase;
  border-radius: 2px;
}
.str-details-order-confirm .order-confirm-sub-box .order-conf-data .conf-data-table .details-data-table tbody tr td .btn-comn.btn-buy {
  color: #004393;
  background: rgba(0, 67, 147, 0.1019607843);
}
.str-details-order-confirm .order-confirm-sub-box .order-conf-data .conf-data-table .details-data-table tbody tr td .btn-comn.btn-sell {
  color: #EE404A;
  background: rgba(238, 64, 74, 0.1019607843);
}
.str-details-order-confirm .order-confirm-sub-box .order-conf-data .conf-data-table .details-data-table tbody tr:last-child {
  border: 0;
}
@media (max-width: 768px) {
  .str-details-order-confirm .order-confirm-sub-box .order-conf-data .conf-data-table .details-data-table {
    width: 100%;
  }
}
@media (max-width: 768px) {
  .str-details-order-confirm .order-confirm-sub-box .order-conf-data .conf-data-table {
    padding: 0;
    height: inherit;
    max-height: 272px;
  }
}
@media (max-width: 768px) {
  .str-details-order-confirm .order-confirm-sub-box .order-conf-data .conf-data-sub {
    background: #fff;
    margin-top: 15px;
    border-radius: 8px;
    padding: 16px;
  }
}
@media (max-width: 768px) {
  .str-details-order-confirm .order-confirm-sub-box .order-conf-data {
    margin-top: 15px;
    height: calc(100vh - 305px);
  }
}
.str-details-order-confirm .order-confirm-sub-box .order-conf-footer-sub {
  position: relative;
}
.str-details-order-confirm .order-confirm-sub-box .order-conf-footer-sub .bottom-sec {
  align-items: center;
  display: flex;
}
.str-details-order-confirm .order-confirm-sub-box .order-conf-footer-sub .bottom-sec .error-tag {
  float: left;
  margin-right: auto;
  padding: 20px 25px;
  display: flex;
  align-items: center;
  color: #DA534D;
  font-size: 14px;
  position: absolute;
  background: #fff;
  left: 0;
  top: -60px;
  width: 100%;
}
.str-details-order-confirm .order-confirm-sub-box .order-conf-footer-sub .bottom-sec .error-tag .dang-ico {
  margin-right: 10px;
}
@media (max-width: 768px) {
  .str-details-order-confirm .order-confirm-sub-box .order-conf-footer-sub .bottom-sec .error-tag {
    background: #F4F8FF;
    padding: 10px;
    font-size: 12px;
    width: 100%;
    position: relative;
    top: inherit;
  }
}
.str-details-order-confirm .order-confirm-sub-box .order-conf-footer-sub .bottom-sec .brok-charges {
  margin-left: auto;
  float: right;
  padding: 20px;
}
.str-details-order-confirm .order-confirm-sub-box .order-conf-footer-sub .bottom-sec .brok-charges a {
  font-size: 12px;
  text-decoration: underline;
  font-weight: 600;
}
.str-details-order-confirm .order-confirm-sub-box .order-conf-footer-sub .order-conf-footer {
  display: flex;
  padding: 24px;
  border-top: 1px solid rgba(112, 112, 112, 0.1607843137);
  flex-wrap: wrap;
  justify-content: space-between;
}
.str-details-order-confirm .order-confirm-sub-box .order-conf-footer-sub .order-conf-footer .conf-footer-left {
  display: flex;
  align-items: flex-start;
  width: 52%;
  justify-content: space-between;
}
.str-details-order-confirm .order-confirm-sub-box .order-conf-footer-sub .order-conf-footer .conf-footer-left .conf-cont .ttl-con {
  font-size: 18px;
  color: #797979;
  font-family: "SFProText-Regular";
  margin-top: 0;
  letter-spacing: 0px;
}
@media (max-width: 768px) {
  .str-details-order-confirm .order-confirm-sub-box .order-conf-footer-sub .order-conf-footer .conf-footer-left .conf-cont .ttl-con {
    font-size: 13px;
  }
}
@media (max-width: 768px) {
  .str-details-order-confirm .order-confirm-sub-box .order-conf-footer-sub .order-conf-footer .conf-footer-left .conf-cont .ttl-con .hide-m {
    display: none;
  }
}
.str-details-order-confirm .order-confirm-sub-box .order-conf-footer-sub .order-conf-footer .conf-footer-left .conf-cont .ttl-con .show-tl-mob {
  display: inline-block;
}
@media (max-width: 768px) {
  .str-details-order-confirm .order-confirm-sub-box .order-conf-footer-sub .order-conf-footer .conf-footer-left .conf-cont .ttl-con .show-tl-mob {
    display: inline-block;
  }
}
.str-details-order-confirm .order-confirm-sub-box .order-conf-footer-sub .order-conf-footer .conf-footer-left .conf-cont .ttl-con .show-tl-mob .charg-btn {
  font-style: normal;
  color: #004393;
  cursor: pointer;
}
.str-details-order-confirm .order-confirm-sub-box .order-conf-footer-sub .order-conf-footer .conf-footer-left .conf-cont .ttl-con .show-tl-mob .charg-btn.charg-btn-mobile {
  display: none;
}
@media (max-width: 768px) {
  .str-details-order-confirm .order-confirm-sub-box .order-conf-footer-sub .order-conf-footer .conf-footer-left .conf-cont .ttl-con .show-tl-mob .charg-btn.charg-btn-mobile {
    display: inline-block;
  }
}
@media (max-width: 768px) {
  .str-details-order-confirm .order-confirm-sub-box .order-conf-footer-sub .order-conf-footer .conf-footer-left .conf-cont .ttl-con .show-tl-mob .charg-btn {
    display: none;
  }
}
.str-details-order-confirm .order-confirm-sub-box .order-conf-footer-sub .order-conf-footer .conf-footer-left .conf-cont h4 {
  font-family: "SFProText-Semibold";
  letter-spacing: 0px;
}
.str-details-order-confirm .order-confirm-sub-box .order-conf-footer-sub .order-conf-footer .conf-footer-left .conf-cont h4 .refresh-btn {
  padding: 0 10px;
}
@media (max-width: 768px) {
  .str-details-order-confirm .order-confirm-sub-box .order-conf-footer-sub .order-conf-footer .conf-footer-left .conf-cont h4 .refresh-btn {
    font-size: 12px;
    padding: 0 4px 0 2px;
  }
}
@media (max-width: 768px) {
  .str-details-order-confirm .order-confirm-sub-box .order-conf-footer-sub .order-conf-footer .conf-footer-left .conf-cont h4 {
    font-size: 14px;
  }
}
@media (max-width: 768px) {
  .str-details-order-confirm .order-confirm-sub-box .order-conf-footer-sub .order-conf-footer .conf-footer-left .conf-cont h4 .hide-m {
    display: none;
  }
}
.str-details-order-confirm .order-confirm-sub-box .order-conf-footer-sub .order-conf-footer .conf-footer-left .conf-cont:last-child {
  text-align: right;
}
@media (max-width: 768px) {
  .str-details-order-confirm .order-confirm-sub-box .order-conf-footer-sub .order-conf-footer .conf-footer-left {
    width: 100%;
    padding: 12px 15px;
    background: #F4F8FF;
  }
}
.str-details-order-confirm .order-confirm-sub-box .order-conf-footer-sub .order-conf-footer .conf-footer-right {
  display: flex;
  width: 40%;
  align-items: center;
  justify-content: space-between;
}
.str-details-order-confirm .order-confirm-sub-box .order-conf-footer-sub .order-conf-footer .conf-footer-right .totl-cal .ttl-con {
  font-size: 18px;
  margin-top: 0;
  color: #797979;
  font-family: "SFProText-Regular";
  letter-spacing: 0px;
}
@media (max-width: 768px) {
  .str-details-order-confirm .order-confirm-sub-box .order-conf-footer-sub .order-conf-footer .conf-footer-right .totl-cal {
    display: none;
  }
}
.str-details-order-confirm .order-confirm-sub-box .order-conf-footer-sub .order-conf-footer .conf-footer-right .buy-sell-btn {
  background: #004393;
  padding: 10px 20px;
  color: #fff;
  font-size: 16px;
  border-radius: 4px;
  margin-top: 0;
}
@media (max-width: 768px) {
  .str-details-order-confirm .order-confirm-sub-box .order-conf-footer-sub .order-conf-footer .conf-footer-right .buy-sell-btn {
    width: 100%;
  }
}
@media (max-width: 768px) {
  .str-details-order-confirm .order-confirm-sub-box .order-conf-footer-sub .order-conf-footer .conf-footer-right {
    width: 100%;
    flex-wrap: wrap;
    padding: 12px 15px;
    background: #FAFBFD;
    border-top: 1px solid rgba(0, 0, 0, 0.0784313725);
  }
}
@media (max-width: 768px) {
  .str-details-order-confirm .order-confirm-sub-box .order-conf-footer-sub .order-conf-footer {
    padding: 0;
    background: #F4F8FF;
    border: 0;
  }
}
@media (max-width: 768px) {
  .str-details-order-confirm .order-confirm-sub-box .order-conf-footer-sub {
    position: fixed;
    width: 100%;
    left: 0;
    bottom: 0;
    background: #FAFBFD;
    padding: 0;
    padding-bottom: 0;
  }
}
@media (max-width: 768px) {
  .str-details-order-confirm .order-confirm-sub-box {
    height: 100%;
    border-radius: 0;
    margin: 0;
    background: #EFEFF3;
    padding: 8px;
  }
}
.str-details-order-confirm .str-details-header {
  padding: 30px;
  padding-bottom: 0;
  display: none;
}
.str-details-order-confirm .str-details-header .str-head-top {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}
.str-details-order-confirm .str-details-header .str-head-top .top-det-left {
  display: flex;
  align-items: center;
}
.str-details-order-confirm .str-details-header .str-head-top .top-det-left .c-menu__close {
  padding: 0;
  margin: 0;
  outline: none;
  box-shadow: inherit;
  border: 0;
  color: #004393;
  font-size: 14px;
  background: transparent;
}
.str-details-order-confirm .str-details-header .str-head-top .top-det-left h4 {
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #004393;
  font-weight: 500;
  margin: 0;
  letter-spacing: 0.19px;
  margin-left: 10px;
}
.str-details-order-confirm .str-details-header .str-head-top .top-det-left h4 .ic-txt {
  font-size: 12px;
  position: relative;
  letter-spacing: 0.14px;
  display: flex;
  align-items: center;
  font-family: "SFProText-Regular";
  margin: 0;
  margin-left: 10px;
  padding-left: 10px;
}
.str-details-order-confirm .str-details-header .str-head-top .top-det-left h4 .ic-txt .svg-img {
  margin-right: 5px;
}
.str-details-order-confirm .str-details-header .str-head-top .top-det-left h4 .ic-txt.active-lbl {
  color: #F6B900;
}
.str-details-order-confirm .str-details-header .str-head-top .top-det-left h4 .ic-txt.active-lbl .svg-img path {
  fill: #F6B900;
}
.str-details-order-confirm .str-details-header .str-head-top .top-det-left h4 .ic-txt::before {
  content: "";
  width: 1.5px;
  height: 10px;
  display: block;
  background: #333333;
  position: absolute;
  left: 0;
  top: 5px;
}
@media (max-width: 768px) {
  .str-details-order-confirm .str-details-header .str-head-top .top-det-left h4 {
    font-size: 14px;
  }
}
@media (max-width: 768px) {
  .str-details-order-confirm .str-details-header .str-head-top {
    background: #F4F8FF;
    position: fixed;
    padding: 20px 15px;
    left: 0;
    top: 0;
    width: 100%;
  }
}
.str-details-order-confirm .str-details-header .str-head-bottom {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  border-bottom: 1px solid rgba(112, 112, 112, 0.1607843137);
  padding: 30px 0 15px 0;
}
.str-details-order-confirm .str-details-header .str-head-bottom .script-ttl {
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  font-family: "SFProText-Semibold";
}
@media (max-width: 768px) {
  .str-details-order-confirm .str-details-header .str-head-bottom .script-ttl {
    font-size: 16px;
  }
}
.str-details-order-confirm .str-details-header .str-head-bottom .head-bot-left {
  width: 60%;
}
.str-details-order-confirm .str-details-header .str-head-bottom .head-bot-left .script-ttl {
  letter-spacing: 0.22px;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  display: block;
  white-space: nowrap;
}
.str-details-order-confirm .str-details-header .str-head-bottom .head-bot-left .pub-date-ttl {
  color: #797979;
  font-weight: 400;
  letter-spacing: 0.14px;
  font-family: "SFProText-Regular";
}
.str-details-order-confirm .str-details-header .str-head-bottom .head-bot-right {
  width: 35%;
  text-align: right;
}
.str-details-order-confirm .str-details-header .str-head-bottom .head-bot-right .txt-mn {
  letter-spacing: 0.14px;
  font-family: "SFProText-Regular";
}
@media (max-width: 768px) {
  .str-details-order-confirm .str-details-header .str-head-bottom {
    padding: 15px;
    padding-bottom: 5px;
    border-radius: 8px;
    background: #FFFFFF;
    margin-top: 65px;
  }
}
@media (max-width: 768px) {
  .str-details-order-confirm .str-details-header {
    padding: 0;
    display: block;
  }
}
@media (max-width: 768px) {
  .str-details-order-confirm {
    padding: 0;
  }
}

.quantity {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0;
}

.quantity__minus,
.quantity__plus {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  width: 26px;
  height: 28px;
  margin: 0;
  background: #ffffff;
  text-decoration: none;
  text-align: center;
  line-height: 25px;
  font-size: 20px;
  font-weight: 500;
  color: #004393;
  border: 0.5px solid #797979;
}

.quantity__minus {
  border-radius: 3px 0 0 3px;
}

.quantity__plus {
  border-radius: 0 3px 3px 0;
}

.quantity__input {
  width: 56px;
  height: 28px;
  margin: 0;
  padding: 0;
  text-align: center;
  border-top: 2px solid #dee0ee;
  border-bottom: 2px solid #dee0ee;
  border-left: 1px solid #dee0ee;
  border-right: 2px solid #dee0ee;
  background: #fff;
  color: #004393;
  font-size: 20px;
  outline: none;
  box-shadow: none;
  font-weight: 500;
  border: 0.5px solid #797979;
}

.up {
  color: #009933;
}

.up-m {
  color: #009933;
}

.up-t {
  color: #0ab20a;
}

.balance {
  color: #F6B900;
}

.balance-m {
  color: #F6B900;
}

.balance-t {
  color: #F6B900;
}

.primary-m {
  color: #004393;
}

.down-m {
  color: #EE404A;
}

.down {
  color: #EE404A;
}

.down-t {
  color: #EE404A;
}

/* Chrome, Safari, Edge, Opera */
#strategyID::-webkit-outer-spin-button,
#strategyID::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
#strategyID {
  -moz-appearance: textfield;
}

.refresh-btn {
  color: #EE404A;
  background: transparent;
  cursor: pointer;
}
.refresh-btn.moving {
  animation: lds-dual-ring 0.8s linear infinite;
}

.up2 {
  color: #009933 !important;
}
.up2 svg path {
  fill: #009933 !important;
}

.balance2 {
  color: #F6B900 !important;
}
.balance2 svg path {
  fill: #F6B900 !important;
}

.down-m2 {
  color: #EE404A !important;
}
.down-m2 svg path {
  fill: #EE404A !important;
}

.primary-m2 {
  color: #004393 !important;
}
.primary-m2 svg path {
  fill: #1B1464 !important;
}

.achieved-img {
  /* display: block; */
  /* max-width: 100%; */
  /* height: auto; */
  height: 17px;
  margin-right: 5px;
}

.brokerage-section {
  position: absolute;
  /* left: -368px; */
  right: 413px;
  /* left: 0px; */
  bottom: 42px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  background: #f8fcfc;
  padding: 16px;
  border-radius: 8px;
  width: 371px;
  height: 332px;
}
.brokerage-section .brokerage-header {
  border-bottom: 1px solid #E4E4E4;
  padding-bottom: 12px;
}
.brokerage-section .brokerage-header .brokerage-label-header {
  font-size: 16px;
  font-weight: 600;
  padding-bottom: 12px;
}
.brokerage-section .brokerage-header .brokerage-label-header-sec {
  display: flex;
  justify-content: space-between;
}
.brokerage-section .brokerage-header .brokerage-label-header-sec .brokerage-label {
  display: grid;
  font-size: 14px;
  font-weight: 600;
}
.brokerage-section .brokerage-header .brokerage-label-header-sec .brokerage-label .brokerage-sub-label {
  font-size: 12px;
  color: #888888;
  font-weight: 500;
}
.brokerage-section .brokerage-header .brokerage-label-header-sec .brokerage-value {
  font-size: 14px;
  font-weight: 600;
  color: #004393;
}
.brokerage-section .brokerage-middle {
  padding-top: 12px;
  padding-bottom: 12px;
}
.brokerage-section .brokerage-middle ul {
  padding: 0px;
  line-height: 24px;
  font-weight: 500;
  margin-bottom: 0px;
}
.brokerage-section .brokerage-middle ul li {
  font-size: 12px;
  text-decoration: none;
  display: flex;
  justify-content: space-between;
}
.brokerage-section .brokerage-middle ul li .brokerage-label {
  color: #333333;
}
.brokerage-section .brokerage-middle ul li .brokerage-label .brokerage-sub-label {
  font-size: 12px;
  color: #888888;
}
.brokerage-section .brokerage-middle ul li .brokerage-value {
  color: #333333;
}
.brokerage-section .brokerage-footer {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 600;
}
.brokerage-section .brokerage-footer .brokerage-label {
  color: #000000;
}
.brokerage-section .brokerage-footer .brokerage-value {
  color: #004393;
}

.disabled-btn {
  opacity: 0.7;
  cursor: not-allowed;
}

.order-conf-data .conf-data-sub .totl-cal.totl-cal-mobile {
  display: none;
}
@media (max-width: 768px) {
  .order-conf-data .conf-data-sub .totl-cal.totl-cal-mobile {
    display: block;
    padding: 5px 11px;
    text-align: center;
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.1019607843);
    margin-top: 15px;
  }
  .order-conf-data .conf-data-sub .totl-cal.totl-cal-mobile .ttl-con {
    padding: 0;
    margin: 0;
    color: #999999;
    font-size: 12px;
  }
}
.order-conf-data .conf-data-sub .totl-cal .incr-decr-input .quantity {
  justify-content: space-between;
  align-items: flex-start;
}
.order-conf-data .conf-data-sub .totl-cal .incr-decr-input .quantity .quantity__minus {
  width: 20px;
  height: 20px;
  border-radius: 50%;
}
@media (max-width: 768px) {
  .order-conf-data .conf-data-sub .totl-cal .incr-decr-input .quantity .quantity__minus {
    border: 0;
    top: -6px;
  }
}
.order-conf-data .conf-data-sub .totl-cal .incr-decr-input .quantity .quantity__plus {
  width: 20px;
  height: 20px;
  border-radius: 50%;
}
@media (max-width: 768px) {
  .order-conf-data .conf-data-sub .totl-cal .incr-decr-input .quantity .quantity__plus {
    border: 0;
    top: -6px;
  }
}
.order-conf-data .conf-data-sub .totl-cal .incr-decr-input .quantity .quantity__input {
  border: 0;
  font-size: 14px;
  color: #000000;
}
@media (max-width: 768px) {
  .order-conf-data .conf-data-sub .totl-cal .incr-decr-input .quantity .quantity__input {
    height: 20px;
  }
}

.trade-charges-details {
  box-shadow: 0px 3px 12px rgba(0, 0, 0, 0.2392156863);
  position: absolute;
  left: 20px;
  bottom: 90px;
  z-index: 9999;
  padding: 15px;
  border-radius: 8px;
  background: #ffffff;
  width: 354px;
}
@media (max-width: 768px) {
  .trade-charges-details h4 {
    font-size: 14px;
  }
}
.trade-charges-details .charg-details-sub {
  background: #ffffff;
  margin: 0;
  border-radius: 8px;
}
.trade-charges-details .charg-details-sub .sub-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;
  border-bottom: 1px solid #EFEFEF;
}
.trade-charges-details .charg-details-sub .sub-top .trd-value {
  line-height: 1.5;
  margin: 0;
  color: #000000;
  font-weight: 500;
}
.trade-charges-details .charg-details-sub .sub-top .trd-value span {
  display: block;
  color: #888888;
  font-weight: 400;
  font-size: 14px;
}
@media (max-width: 768px) {
  .trade-charges-details .charg-details-sub .sub-top .trd-value {
    font-size: 14px;
  }
}
.trade-charges-details .charg-details-sub .sub-top .ttl-price {
  margin: 0;
  color: #004393;
  font-weight: 600;
}
@media (max-width: 768px) {
  .trade-charges-details .charg-details-sub .sub-top .ttl-price {
    font-size: 14px;
  }
}
.trade-charges-details .charg-details-sub .details-list {
  padding: 15px 0 0 0;
}
.trade-charges-details .charg-details-sub .details-list .list-items {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}
.trade-charges-details .charg-details-sub .details-list .list-items .ttl-itm, .trade-charges-details .charg-details-sub .details-list .list-items .ttl-amnt {
  margin: 0;
}
.trade-charges-details .charg-details-sub .details-list .list-items .ttl-itm span, .trade-charges-details .charg-details-sub .details-list .list-items .ttl-amnt span {
  color: #888888;
}
@media (max-width: 768px) {
  .trade-charges-details .charg-details-sub .details-list .list-items .ttl-itm, .trade-charges-details .charg-details-sub .details-list .list-items .ttl-amnt {
    font-size: 12px;
  }
}
.trade-charges-details .charg-details-sub .details-list .list-items .ttl-itm {
  font-weight: 400;
}
.trade-charges-details .charg-details-sub .details-list .list-items .ttl-amnt {
  font-weight: 500;
}
.trade-charges-details .charg-details-sub .details-list .list-items.lst-itm {
  margin-top: 5px;
  margin-bottom: 0;
}
.trade-charges-details .charg-details-sub .details-list .list-items.lst-itm .ttl-itm {
  font-weight: 600;
}
@media (max-width: 768px) {
  .trade-charges-details .charg-details-sub .details-list .list-items.lst-itm .ttl-itm {
    font-size: 14px;
  }
}
.trade-charges-details .charg-details-sub .details-list .list-items.lst-itm .ttl-amnt {
  font-weight: 600;
  color: #004393;
}
@media (max-width: 768px) {
  .trade-charges-details .charg-details-sub .details-list .list-items.lst-itm .ttl-amnt {
    font-size: 14px;
  }
}
@media (max-width: 768px) {
  .trade-charges-details .charg-details-sub {
    box-shadow: none;
    display: block;
    padding: 15px;
    padding-top: 0;
    margin-top: 15px;
  }
}

.show-tl-mob:hover + .trade-charges-details {
  display: block !important;
}

.error-message {
  color: red;
  font-size: 14px;
}

.error-message {
  color: red;
  font-size: 14px;
}

.justify-end {
  justify-content: flex-end !important;
}

.segment-error {
  text-align: center;
  border: 1px solid #f49c9c !important;
  background-color: #fffaeb !important;
  width: auto;
  border-radius: 4px;
  margin: 0 16px 10px;
}
.segment-error span {
  color: #004393 !important;
  padding: 1px;
  cursor: pointer;
  text-decoration: underline;
}

.amo-note {
  padding: 8px 15px;
  background: #f5f5f5;
  letter-spacing: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.amo-note p {
  margin: 0;
  font-size: 11px;
  color: #EE404A;
  letter-spacing: 0;
  opacity: 1;
  font-family: "SF Pro Display";
}
@media (max-width: 767px) {
  .amo-note p {
    font-size: 10px;
  }
}
@media (max-width: 767px) {
  .amo-note {
    position: fixed;
    left: 0;
    width: 100%;
    bottom: 109px;
    margin: 0;
    border-radius: 0;
  }
}`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 83473:
/*!***********************************************************************************************************!*\
  !*** ./src/app/research-report/research-report-section/research-report-section.component.scss?ngResource ***!
  \***********************************************************************************************************/
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
.pos-rel {
  position: relative;
}

.ptb-10 {
  padding-top: 20px;
  padding-bottom: 20px;
}

@media (max-width: 992px) {
  .rrp-new {
    overflow: hidden;
  }
}
.rrp-new .rrp-new-top {
  background: #ffffff;
  border-radius: 8px;
}
.rrp-new .rrp-new-top .rrp-new-top-sub {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #ccc;
  flex-wrap: wrap;
}
.rrp-new .rrp-new-top .rrp-new-top-sub .rrp-tab {
  width: 500px;
}
@media (max-width: 1366px) {
  .rrp-new .rrp-new-top .rrp-new-top-sub .rrp-tab {
    width: 400px;
  }
}
@media (max-width: 992px) {
  .rrp-new .rrp-new-top .rrp-new-top-sub .rrp-tab {
    width: 100%;
  }
}
.rrp-new .rrp-new-top .rrp-new-top-sub .rrp-tab ul {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
}
.rrp-new .rrp-new-top .rrp-new-top-sub .rrp-tab ul li {
  width: 25%;
  text-align: center;
}
.rrp-new .rrp-new-top .rrp-new-top-sub .rrp-tab ul li a {
  font-size: 14px;
  text-transform: capitalize;
  display: block;
  padding: 15px 0;
  font-weight: 500;
  text-decoration: none;
  color: #797979;
  position: relative;
}
.rrp-new .rrp-new-top .rrp-new-top-sub .rrp-tab ul li a.active-tb {
  color: #004393;
  font-weight: 600;
}
.rrp-new .rrp-new-top .rrp-new-top-sub .rrp-tab ul li a.active-tb::before {
  content: "";
  width: 100%;
  height: 2px;
  display: block;
  background: #004393;
  position: absolute;
  left: 0;
  bottom: -2px;
}
@media (max-width: 992px) {
  .rrp-new .rrp-new-top .rrp-new-top-sub .rrp-tab ul li a.active-tb::before {
    bottom: 0;
  }
}
.rrp-new .rrp-new-top .rrp-new-top-sub .rrp-tab ul li a::before {
  content: "";
  width: 0;
  height: 2px;
  display: block;
  background: #004393;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  bottom: -2px;
  transition-duration: 0.5s;
}
@media (max-width: 992px) {
  .rrp-new .rrp-new-top .rrp-new-top-sub .rrp-tab ul li a::before {
    bottom: 0;
  }
}
.rrp-new .rrp-new-top .rrp-new-top-sub .rrp-tab ul li a:hover {
  color: #004393;
}
.rrp-new .rrp-new-top .rrp-new-top-sub .rrp-tab ul li a:hover::before {
  width: 100%;
}
@media (max-width: 767px) {
  .rrp-new .rrp-new-top .rrp-new-top-sub .rrp-tab ul li {
    width: auto;
    padding: 0 10px;
  }
}
@media (max-width: 992px) {
  .rrp-new .rrp-new-top .rrp-new-top-sub .rrp-tab ul {
    flex-wrap: nowrap;
    overflow-y: hidden;
    overflow-x: auto;
  }
}
.rrp-new .rrp-new-top .rrp-new-top-sub .rrp-taggle {
  padding: 0 30px;
}
.rrp-new .rrp-new-top .rrp-new-top-sub .rrp-taggle .switch-wrap {
  padding: 0;
  margin: 0;
}
.rrp-new .rrp-new-top .rrp-new-top-sub .rrp-taggle .switch-wrap .switch {
  width: 52px;
  height: 26px;
}
.rrp-new .rrp-new-top .rrp-new-top-sub .rrp-taggle .switch-wrap .switch .slider::before {
  height: 21px;
  width: 21px;
  bottom: 1.5px;
}
.rrp-new .rrp-new-top .rrp-new-top-sub .rrp-taggle .switch-wrap .switch input:checked + .slider::before {
  transform: translateX(22px);
}
.rrp-new .rrp-new-top .rrp-new-top-sub.newSticky {
  position: fixed;
  top: 85px;
  width: calc(100% - 431px);
  z-index: 999;
  right: 30px;
  background: #ffffff;
}
@media screen and (min-width: 1537px) and (max-width: 3000px) {
  .rrp-new .rrp-new-top .rrp-new-top-sub.newSticky {
    width: calc(100% - 500px);
  }
}
@media (max-width: 1366px) {
  .rrp-new .rrp-new-top .rrp-new-top-sub.newSticky {
    width: calc(100% - 430px);
  }
}
@media (max-width: 1280px) {
  .rrp-new .rrp-new-top .rrp-new-top-sub.newSticky {
    width: calc(100% - 389px);
  }
}
@media (max-width: 992px) {
  .rrp-new .rrp-new-top .rrp-new-top-sub.newSticky {
    width: 96%;
    top: 74px;
    right: 0;
    left: 0;
    display: block;
    margin: 0 auto;
  }
}
@media (max-width: 767px) {
  .rrp-new .rrp-new-top .rrp-new-top-sub.newSticky {
    width: 91%;
  }
}
@media (max-width: 1366px) {
  .rrp-new .rrp-new-top .rrp-new-top-sub .scroll-mobile {
    padding: 10px 20px;
  }
}
@media (max-width: 992px) {
  .rrp-new .rrp-new-top .rrp-new-top-sub .scroll-mobile {
    display: flex;
    justify-content: center;
    width: 100%;
  }
}
@media (max-width: 767px) {
  .rrp-new .rrp-new-top .rrp-new-top-sub .scroll-mobile {
    overflow-x: auto;
    display: flex;
    padding: 0;
    justify-content: flex-start;
  }
}
.rrp-new .rrp-new-top .tab-cont {
  padding: 25px;
}
.rrp-new .rrp-new-top .tab-cont .equity-cont .performnnce-tab h5 {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}
@media (max-width: 767px) {
  .rrp-new .rrp-new-top .tab-cont .equity-cont .performnnce-tab h5 {
    text-align: center;
    justify-content: center;
  }
}
.rrp-new .rrp-new-top .tab-cont .equity-cont .performnnce-tab h5 .help-desc {
  margin-left: 10px;
}
.rrp-new .rrp-new-top.newSticky {
  position: sticky;
  top: 85px;
  background: #ffffff;
  z-index: 999;
}
@media (max-width: 992px) {
  .rrp-new .rrp-new-top.newSticky {
    width: 96%;
    position: fixed;
  }
}
@media (max-width: 767px) {
  .rrp-new .rrp-new-top.newSticky {
    width: 90%;
    overflow-x: auto;
    padding: 0;
    margin-top: 0;
  }
}

.last-performce-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
@media (max-width: 767px) {
  .last-performce-list {
    justify-content: center;
  }
}
.last-performce-list .box-perfp-orange {
  background-color: #FEF8E6 !important;
}
.last-performce-list .box-perfp-green {
  background-color: rgba(0, 153, 51, 0.1607843137) !important;
}
.last-performce-list .box-perfp-red {
  background-color: #FFE7E7 !important;
}
.last-performce-list .box-perfp {
  width: 22%;
  background: #F4F3F8;
  padding: 15px 25px;
  border-radius: 8px;
  display: flex;
  align-items: center;
}
@media (max-width: 1366px) {
  .last-performce-list .box-perfp {
    padding: 15px 15px;
  }
}
@media (max-width: 992px) {
  .last-performce-list .box-perfp {
    margin-bottom: 30px;
  }
}
@media (max-width: 767px) {
  .last-performce-list .box-perfp {
    width: 100%;
    margin-bottom: 10px;
  }
}
.last-performce-list .box-perfp .progress {
  width: 50px;
  height: 50px;
  font-size: 16px;
  color: #009933;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  background: rgba(0, 153, 51, 0.1607843137);
  text-align: center;
  line-height: 50px;
  margin: 0;
}
.last-performce-list .box-perfp .progress::after {
  content: "%";
}
.last-performce-list .box-perfp .progress .title {
  position: relative;
  z-index: 100;
}
.last-performce-list .box-perfp .progress .overlay {
  width: 50%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}
.last-performce-list .box-perfp .progress .left,
.last-performce-list .box-perfp .progress .right {
  width: 50%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border: 3px solid #009933;
  border-radius: 100px 0px 0px 100px;
  border-right: 0;
  transform-origin: right;
}
.last-performce-list .box-perfp .progress .left {
  animation: load1 1s linear forwards;
}
.last-performce-list .box-perfp .progress:nth-of-type(2) .right,
.last-performce-list .box-perfp .progress:nth-of-type(3) .right {
  animation: load2 0.5s linear forwards 1s;
}
.last-performce-list .box-perfp .progress:last-of-type .right,
.last-performce-list .box-perfp .progress:first-of-type .right {
  animation: load3 0.8s linear forwards 1s;
}
@keyframes load1 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(180deg);
  }
}
@keyframes load2 {
  0% {
    z-index: 100;
    transform: rotate(180deg);
  }
  100% {
    z-index: 100;
    transform: rotate(270deg);
  }
}
@keyframes load3 {
  0% {
    z-index: 100;
    transform: rotate(180deg);
  }
  100% {
    z-index: 100;
    transform: rotate(315deg);
  }
}
.last-performce-list .box-perfp .circle {
  width: 41px;
  height: 41px;
  border-radius: 50%;
  position: relative;
}
.last-performce-list .box-perfp .circle .icon-set {
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.last-performce-list .box-perfp .perfp-des {
  margin-left: 20px;
}
@media (max-width: 1366px) {
  .last-performce-list .box-perfp .perfp-des {
    margin-left: 10px;
  }
}
.last-performce-list .box-perfp .perfp-des h3 {
  margin: 0;
  font-weight: bold;
  font-size: 20px;
}
@media (max-width: 992px) {
  .last-performce-list .box-perfp .perfp-des h3 {
    font-size: 16px;
  }
}
.last-performce-list .box-perfp .perfp-des h6 {
  margin-top: 5px;
  margin-bottom: 0;
  color: #666666;
}
.last-performce-list .box-perfp.success {
  background: rgba(0, 153, 51, 0.1607843137);
}
.last-performce-list .box-perfp.success h3 {
  color: #009933;
  font-size: 16px !important;
}
.last-performce-list .box-perfp.negative .circle {
  background: rgba(238, 64, 74, 0.1019607843);
}
.last-performce-list .box-perfp.negative h3 {
  color: #EE404A;
}
.last-performce-list .box-perfp.positive .circle {
  background: rgba(0, 153, 51, 0.1019607843);
}
.last-performce-list .box-perfp.positive h3 {
  color: #009933;
}
.last-performce-list .box-perfp.active .circle {
  background: rgba(45, 119, 244, 0.1019607843);
}
.last-performce-list .box-perfp.active h3 {
  color: #004393;
}

.rrp-new-bottom-cont {
  position: relative;
}
.rrp-new-bottom-cont .filter-srch-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
}
@media (max-width: 767px) {
  .rrp-new-bottom-cont .filter-srch-bar {
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: column-reverse;
    margin: 10px 0;
  }
}
.rrp-new-bottom-cont .filter-srch-bar .months-wise .tab-list {
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
}
@media (max-width: 767px) {
  .rrp-new-bottom-cont .filter-srch-bar .months-wise .tab-list {
    margin-bottom: 10px;
  }
}
.rrp-new-bottom-cont .filter-srch-bar .months-wise .tab-list li {
  margin-right: 15px;
}
.rrp-new-bottom-cont .filter-srch-bar .months-wise .tab-list li a {
  font-size: 14px;
  font-weight: 600;
  color: #989898;
  padding: 8px 2px;
  width: 82px;
  text-align: center;
  text-decoration: none;
  display: block;
  border: 1px solid #989898;
  border-radius: 4px;
}
@media (max-width: 1280px) {
  .rrp-new-bottom-cont .filter-srch-bar .months-wise .tab-list li a {
    font-size: 12px;
    width: 72px;
  }
}
.rrp-new-bottom-cont .filter-srch-bar .months-wise .tab-list li a.activ-mnt {
  color: #004393;
  border: 1px solid #004393;
}
.rrp-new-bottom-cont .filter-srch-bar .months-wise .tab-list li a:hover {
  color: #004393;
  border: 1px solid #004393;
}
@media (max-width: 1280px) {
  .rrp-new-bottom-cont .filter-srch-bar .months-wise .tab-list li a {
    font-size: 12px;
    width: 75px;
  }
}
@media (max-width: 1366px) {
  .rrp-new-bottom-cont .filter-srch-bar .months-wise .tab-list li {
    margin-right: 8px;
  }
}
@media (max-width: 767px) {
  .rrp-new-bottom-cont .filter-srch-bar .months-wise {
    overflow: auto;
    width: 100%;
    margin-top: 15px;
  }
}
.rrp-new-bottom-cont .filter-srch-bar .srch-filter-cont {
  display: flex;
  align-items: center;
}
.rrp-new-bottom-cont .filter-srch-bar .srch-filter-cont .search-wrap {
  width: 256px;
  border: 1px solid #989898;
  border-radius: 4px;
  height: 36px;
  display: flex;
  align-items: center;
}
.rrp-new-bottom-cont .filter-srch-bar .srch-filter-cont .search-wrap i {
  font-size: 12px;
  color: #000000;
  margin: 0 0 0 10px;
}
.rrp-new-bottom-cont .filter-srch-bar .srch-filter-cont .search-wrap .srch {
  font-size: 13px;
  color: #333333;
  background: transparent;
  border: 0;
  display: inline-block;
  width: 100%;
  height: 100%;
  outline: none;
  padding: 0 10px;
  padding-left: 15px;
}
@media (max-width: 768px) {
  .rrp-new-bottom-cont .filter-srch-bar .srch-filter-cont .search-wrap .srch {
    font-size: 12px;
    padding-left: 10px;
  }
}
.rrp-new-bottom-cont .filter-srch-bar .srch-filter-cont .search-wrap label {
  font-family: "SF Pro Display";
  font-weight: 500;
  color: #797979;
}
@media (max-width: 992px) {
  .rrp-new-bottom-cont .filter-srch-bar .srch-filter-cont .search-wrap {
    width: 186px;
  }
}
.rrp-new-bottom-cont .filter-srch-bar .srch-filter-cont .btn-filter {
  background: #004393;
  color: #ffffff;
  border-radius: 4px;
  margin-left: 15px;
  width: 38px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
}
@media (max-width: 1366px) {
  .rrp-new-bottom-cont .filter-srch-bar .srch-filter-cont .btn-filter {
    margin-left: 8px;
  }
}
@media (max-width: 1280px) {
  .rrp-new-bottom-cont .filter-srch-bar .srch-filter-cont .btn-filter {
    width: 34px;
    height: 34px;
  }
}
.rrp-new-bottom-cont .filter-srch-bar .srch-filter-cont .btnrepeatnew {
  border-radius: 4px;
  margin-left: 15px;
  width: 38px;
  height: 36px;
  line-height: 36px;
  padding: 0 !important;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(51, 51, 51, 0.1019607843) !important;
}
@media (max-width: 1366px) {
  .rrp-new-bottom-cont .filter-srch-bar .srch-filter-cont .btnrepeatnew {
    margin-right: 8px;
  }
}
@media (max-width: 767px) {
  .rrp-new-bottom-cont .filter-srch-bar .srch-filter-cont {
    width: 100%;
    justify-content: center;
  }
}
.rrp-new-bottom-cont .filter-srch-bar.newSticky {
  position: sticky;
  top: 136px;
  width: 100%;
  z-index: 999;
  background: #ffffff;
  padding: 10px 5px;
}
@media (max-width: 1366px) {
  .rrp-new-bottom-cont .filter-srch-bar.newSticky {
    top: 139px;
  }
}
@media (max-width: 1280px) {
  .rrp-new-bottom-cont .filter-srch-bar.newSticky {
    top: 140px;
  }
}
@media (max-width: 992px) {
  .rrp-new-bottom-cont .filter-srch-bar.newSticky {
    width: 96%;
    top: 201px;
    position: fixed;
    margin: 0;
  }
}
@media (max-width: 767px) {
  .rrp-new-bottom-cont .filter-srch-bar.newSticky {
    top: 101px;
    width: 90%;
    overflow-x: initial;
    padding: 10px 15px;
    margin-top: 77px;
  }
}

.read-mor-less {
  position: relative;
  top: -15px;
}
@media (max-width: 767px) {
  .read-mor-less p {
    text-align: center;
  }
}
.read-mor-less .moretext {
  display: none;
}
.read-mor-less .article a {
  color: #1B1464;
}

.grids-section {
  min-height: 50vh;
}
.grids-section .grid-list {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  margin-left: -1%;
}
@media (max-width: 767px) {
  .grids-section .grid-list {
    margin-top: 10px;
  }
}
.grids-section .grid-list > li {
  background: #ffffff;
  border-radius: 8px;
  list-style: none;
  position: relative;
  width: 49%;
  margin-left: 1%;
  padding: 25px;
  margin-bottom: 15px;
}
@media (max-width: 767px) {
  .grids-section .grid-list > li {
    padding: 15px;
  }
}
.grids-section .grid-list > li .top-section {
  display: flex;
  padding-bottom: 15px;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
}
.grids-section .grid-list > li .top-section .top-s-left span {
  font-weight: 500;
}
.grids-section .grid-list > li .top-section .top-s-left .ic-txt {
  display: flex;
  align-items: center;
  margin: 0;
}
.grids-section .grid-list > li .top-section .top-s-left .ic-txt svg {
  margin-right: 5px;
}
.grids-section .grid-list > li .top-section .top-s-left .date-top {
  color: #797979;
  margin-bottom: 0;
  margin-top: 8px;
}
@media (max-width: 768px) {
  .grids-section .grid-list > li .top-section .top-s-left .date-top .hide-m {
    display: none;
  }
}
.grids-section .grid-list > li .top-section .top-s-right {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
}
.grids-section .grid-list > li .top-section .top-s-right .btn-first {
  display: flex;
  align-items: center;
  transition-duration: 0.5s;
  opacity: 0;
  position: relative;
  top: 0 !important;
  visibility: hidden;
  z-index: 0;
  right: 0;
}
.grids-section .grid-list > li .top-section .top-s-right .btn-first .rounded-btn {
  background: #F4F3F8;
  color: #1B1464;
  font-size: 18px;
  padding: 0;
  width: 36px;
  height: 36px;
  text-align: center;
  line-height: 36px;
  border-radius: 4px;
  border: 0;
  margin-right: 10px;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
}
.grids-section .grid-list > li .top-section .top-s-right .btn-buy {
  width: fit-content;
  min-width: 67px;
  padding-left: 10px;
  padding-right: 10px;
}
@media (min-width: 1200px) {
  .grids-section .grid-list > li .top-section .top-s-right .btn-buy {
    font-size: 13px;
  }
}
@media (min-width: 1550px) {
  .grids-section .grid-list > li .top-section .top-s-right .btn-buy {
    font-size: 14px;
  }
}
.grids-section .grid-list > li .top-section .top-s-right .btn-buy.sell {
  color: #ffffff;
  background: #EE404A !important;
  border-color: #EE404A !important;
}
.grids-section .grid-list > li .top-section .top-s-right .btn-buy.inactiveSell {
  opacity: 0.5;
  color: #ffffff;
  background: #EE404A !important;
}
.grids-section .grid-list > li .top-section .top-s-right .btn-buy.inactiveBuy {
  color: #ffffff;
  background: #6A97D7;
}
.grids-section .grid-list > li .top-section .top-s-right .btn-buy.grey {
  background: rgb(196, 189, 189);
}
@media (max-width: 600px) {
  .grids-section .grid-list > li .top-section .top-s-right {
    flex-wrap: wrap;
    align-items: flex-end;
    flex-direction: column-reverse;
  }
}
.grids-section .grid-list > li .middle-sec {
  border-top: 1px solid #efefef;
  border-bottom: 0;
  padding: 15px 0;
}
.grids-section .grid-list > li .middle-sec .se-left-top {
  display: flex;
  align-items: flex-start;
  margin-bottom: 15px;
  justify-content: space-between;
}
.grids-section .grid-list > li .middle-sec .se-left-top .cust-details {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.grids-section .grid-list > li .middle-sec .se-left-top .cust-details .cust-name {
  color: #004393;
  background: rgba(24, 98, 242, 0.2);
  padding: 3px 5px;
  border-radius: 2px;
  margin: 0;
}
.grids-section .grid-list > li .middle-sec .se-left-top .cust-details .cust-post {
  color: #797979;
  margin: 0;
  margin-left: 20px;
}
.grids-section .grid-list > li .middle-sec .se-left-top .cust-details .help-desc {
  margin-left: 10px;
}
.grids-section .grid-list > li .middle-sec .se-left-top .middle-se-right .profit {
  margin: 0;
}
.grids-section .grid-list > li .middle-sec .se-left-bottom {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.grids-section .grid-list > li .middle-sec .se-left-bottom .comp-name .small {
  font-size: 10px;
  display: block;
  margin-top: 10px;
}
.grids-section .grid-list > li .middle-sec .se-left-bottom .price.Buy {
  text-align: right;
}
.grids-section .grid-list > li .middle-sec .se-left-bottom .price.Buy .bold {
  font-family: "\$font-family-primary" !important;
  font-weight: 500;
}
.grids-section .grid-list > li .middle-sec .se-left-bottom .price.Buy .bolder {
  font-weight: 600;
}
.grids-section .grid-list > li .middle-sec .se-left-bottom .price .mgb-zero {
  margin-bottom: 0;
}
.grids-section .grid-list > li .middle-sec .se-left-bottom .profit small {
  font-size: 10px;
  display: block;
  margin-top: 8px;
}
.grids-section .grid-list > li:hover .top-section .top-s-right .btn-first {
  opacity: 1;
  visibility: visible;
  top: 0;
  z-index: 9;
}
@media (max-width: 600px) {
  .grids-section .grid-list > li:hover .top-section .top-s-right .btn-first {
    margin-top: 10px;
    margin-right: -10px;
  }
}
.grids-section .grid-list > li .report-pricing-buy {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0 0px 0;
  border-top: 1px solid #efefef;
  flex-wrap: wrap;
}
@media (max-width: 767px) {
  .grids-section .grid-list > li .report-pricing-buy {
    justify-content: flex-start;
    gap: 5px;
  }
}
.grids-section .grid-list > li .report-pricing-buy .prc-buy-desc {
  padding-left: 5px;
}
@media (max-width: 767px) {
  .grids-section .grid-list > li .report-pricing-buy .prc-buy-desc {
    width: 31%;
  }
}
.grids-section .grid-list > li .report-pricing-buy .prc-buy-desc h6 {
  margin: 0;
  margin-bottom: 4px;
  color: #797979;
}
.grids-section .grid-list > li .report-pricing-buy .prc-buy-desc.loss-tr {
  border-left: 2px solid #EE404A;
}
.grids-section .grid-list > li .report-pricing-buy .prc-buy-desc.ent-prize {
  border-left: 2px solid #797979;
}
.grids-section .grid-list > li .report-pricing-buy .prc-buy-desc.trgt-price {
  border-left: 2px solid #009933;
}
.grids-section .grid-list > li .report-pricing-buy .prc-buy-desc h4 {
  font-size: 16px;
}
@media (max-width: 767px) {
  .grids-section .grid-list > li .report-pricing-buy .prc-buy-desc h4 {
    font-size: 14px;
  }
}
.grids-section .grid-list > li .report-pricing-buy .prc-buy-desc h4 em {
  color: #EE404A;
}
.grids-section .grid-list > li .report-pricing-buy.report-pricing-buy-scnd-row {
  justify-content: flex-start;
}
.grids-section .grid-list > li .report-pricing-buy.report-pricing-buy-scnd-row .prc-buy-desc {
  width: 44%;
}
.grids-section .grid-list > li .report-pricing-buy.report-pricing-bottom-date {
  padding-bottom: 10px;
}
.grids-section .grid-list > li .report-pricing-buy.report-pricing-bottom-date .date-top {
  color: #797979;
  margin-bottom: 0;
  margin-top: 8px;
}
.grids-section .grid-list > li .targt-btn {
  font-size: 10px;
  color: #009933;
  background: #e5f5e9;
  padding: 6px 7px;
  border-radius: 4px;
  position: relative;
  top: -9px;
  font-weight: 500;
}
.grids-section .grid-list > li.up .top-section .top-s-left .ic-txt {
  color: #009933;
}
.grids-section .grid-list > li.up .top-section .top-s-left .ic-txt svg path {
  fill: #009933;
}
.grids-section .grid-list > li.balance .top-section .top-s-left .ic-txt {
  color: #F6B900;
}
.grids-section .grid-list > li.balance .top-section .top-s-left .ic-txt svg path {
  fill: #F6B900;
}
.grids-section .grid-list > li.down-m .top-section .top-s-left .ic-txt {
  color: #EE404A;
}
.grids-section .grid-list > li.down-m .top-section .top-s-left .ic-txt svg path {
  fill: #EE404A;
}
.grids-section .grid-list > li.primary-m .top-section .top-s-left .ic-txt {
  color: #004393;
}
.grids-section .grid-list > li.primary-m .top-section .top-s-left .ic-txt svg path {
  fill: #1B1464;
}
@media (max-width: 992px) {
  .grids-section .grid-list > li {
    width: 100%;
  }
}

.grn-text {
  color: #009933 !important;
}

.red-txt {
  color: #EE404A !important;
}

.up-t {
  color: #0ab20a;
}

.down-t {
  color: rgba(255, 0, 0, 0.8);
}

.ml25 {
  margin-left: 25px;
}

.progress-n {
  display: block;
  margin: 0 auto;
  overflow: hidden;
  transform: rotate(-90deg) rotateX(180deg);
}

.progress-n circle {
  stroke-dashoffset: 0;
  transition: stroke-dashoffset 1s ease;
  stroke: #009933;
  stroke-width: 5px;
}

.progress-n .greenbar {
  stroke: #D0EDD9;
  stroke-width: 7px;
}

.progress-n .redbar {
  stroke: #FFD4D4;
  stroke-width: 7px;
}

.progress-n .orangebar {
  stroke: #FCEAB3;
  stroke-width: 7px;
}

.progressdiv {
  position: relative;
}

.progressdiv:after {
  position: absolute;
  top: 13px;
  left: 12px;
  font-size: 17px;
  transform: inherit;
  content: attr(data-percent) "";
  font-weight: bold;
  letter-spacing: 0;
  color: #009933;
}

.progressdiv::before {
  content: "%";
  top: 17px;
  left: 35px;
  z-index: 99;
  position: absolute;
  display: block;
  font-size: 9px;
  color: #009933;
}

.pagination {
  margin: 10px auto;
  display: block;
  text-align: center;
  margin-top: 15px;
}
.pagination li {
  display: inline-block;
}
.pagination a {
  background: transparent;
  color: #000000;
  padding: 4px 10px;
  border: none;
  font-size: 16px;
}
.pagination .disabled {
  cursor: not-allowed;
}
.pagination .disabled a {
  pointer-events: none;
}
.pagination .active a {
  background: #f5f5f5;
  font-weight: 700;
  color: #004393;
}

.formwrap {
  list-style: none;
  padding-left: 0px;
  margin-bottom: 0px;
}

.apply-btn {
  text-align: center;
  margin: 15px;
}
.apply-btn .btn-gradient {
  background-image: linear-gradient(to right, #ffc174 0%, #fe616e 100%);
  padding: 10px 25px;
  color: #ffffff;
  font-size: 16px;
  border: none;
  background: #004393;
  border-radius: 8px;
}

.btn-outline {
  padding: 9px 10px;
  border-radius: 0;
  border: #ff8889 solid 1px;
  color: #fe7f7d;
  font-size: 16px;
  background-color: #ffffff;
  margin-left: 15px;
  margin-right: 14px;
  border: #004393 solid 1px;
  color: #004393;
  border-radius: 8px;
}

.filter-options {
  list-style-type: none;
  padding: 15px 20px 0;
}
@media (max-width: 1240px) {
  .filter-options {
    padding: 10px 10px 0;
  }
}
@media (max-width: 340px) {
  .filter-options {
    padding: 10px;
  }
}
.filter-options .radio-titles {
  font-size: 12px;
  font-weight: 600;
  color: #fe646e;
  color: #004393;
  margin-top: 0;
}
.filter-options .radio-wrapper {
  border-bottom: 1px solid #f5f5f5;
}
.filter-options .radio-wrapper span {
  display: inline-block;
  margin-bottom: 10px;
  margin-right: 30px;
}
@media (max-width: 560px) {
  .filter-options .radio-wrapper span {
    margin-right: 15px;
  }
}

.btn-group .btn {
  background: transparent;
  font-size: 30px;
  padding: 0;
  line-height: 1;
  box-shadow: none;
}
.btn-group .btn i {
  background-image: linear-gradient(to right, #ffc174 0%, #fe616e 100%);
  background-image: linear-gradient(to right, #007AFF 0%, #007AFF 100%);
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
}
.btn-group .dropdown-menu {
  border-radius: 0;
  left: auto;
  right: 0;
  width: 350px;
  border: 0;
  margin-top: 25px;
  padding: 0;
}
@media (max-width: 1280px) {
  .btn-group .dropdown-menu .formwrap {
    max-height: 200px;
    overflow: auto;
  }
}
@media (max-width: 560px) {
  .btn-group .dropdown-menu {
    width: 250px;
  }
}
@media (max-width: 340px) {
  .btn-group .dropdown-menu {
    right: -16px;
    width: 275px;
  }
}
.btn-group .dropdown-menu:before {
  content: "";
  position: absolute;
  bottom: 100%;
  right: 4px;
  width: 0;
  height: 0;
  border: 0 solid transparent;
  border-right-width: 15px;
  border-left-width: 15px;
  border-bottom: 15px solid #fe646e;
  border-bottom: 15px solid #004393;
}
.btn-group .dropdown-menu .clear-filter {
  margin-top: 5px;
  text-align: right;
}
.btn-group .dropdown-menu .clear-filter:hover {
  background: transparent;
}
.btn-group .dropdown-menu .clear-filter a {
  color: #fe616e;
  font-weight: 500;
}
.btn-group .dropdown-menu .filter-title {
  font-size: 14px;
  padding: 15px;
  text-align: center;
  text-align: center;
  background: #fe616e;
  text-transform: uppercase;
  color: #ffffff;
  background: #004393;
  margin: 0;
}

/*Raddio Stylings*/
.radio-wrapper [type=radio]:checked,
.radio-wrapper [type=radio]:not(:checked) {
  position: absolute;
  left: -9999px;
}
.radio-wrapper [type=radio]:checked + label,
.radio-wrapper [type=radio]:not(:checked) + label {
  position: relative;
  padding-left: 28px;
  cursor: pointer;
  line-height: 20px;
  display: inline-block;
  color: #666;
  font-size: 12px;
  font-weight: normal;
}
.radio-wrapper [type=radio]:checked + label:before,
.radio-wrapper [type=radio]:not(:checked) + label:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 18px;
  height: 18px;
  border: 1px solid #F4F3F8;
  border-radius: 100%;
  background: #ffffff;
}
.radio-wrapper [type=radio]:checked + label:after,
.radio-wrapper [type=radio]:not(:checked) + label:after {
  content: "";
  width: 12px;
  height: 12px;
  background-image: linear-gradient(to right, #ffc174 0%, #fe616e 100%);
  position: absolute;
  top: 3px;
  left: 3px;
  border-radius: 100%;
  transition: all 0.2s ease;
  background: #6A97D7;
}
.radio-wrapper [type=radio]:not(:checked) + label:after {
  opacity: 0;
  transform: scale(0);
}
.radio-wrapper [type=radio]:checked + label:after {
  opacity: 1;
  transform: scale(1);
}

.icon-filter {
  color: #ffffff !important;
  font-size: 18px;
}

.btn-buy {
  height: 36px;
  line-height: 36px;
  padding: 0;
  text-transform: uppercase;
  width: 67px;
  margin: 0;
}
.btn-buy.subscribe, .btn-buy.dips {
  color: #ffffff;
  background: #004393;
}
.btn-buy.sell {
  color: #ffffff;
  background: #EE404A !important;
  border-color: #EE404A !important;
}
.btn-buy.inactiveSell {
  opacity: 0.5;
  color: #ffffff;
  background: #EE404A !important;
}
.btn-buy.inactiveBuy {
  color: #ffffff;
  background: #6A97D7;
}
.btn-buy.grey {
  background: rgb(196, 189, 189);
}

.alignment {
  flex-direction: column;
  padding: 20%;
  text-align: center;
}

.font-ui {
  font-size: 1.5rem;
}

.border-bottom-none {
  border-bottom: none;
}

.success-red::after {
  color: #EE404A !important;
}

.success-red::before {
  color: #EE404A !important;
}

.success-red h3 {
  color: #EE404A !important;
}

.success-red circle {
  stroke: #EE404A;
  stroke-dashoffset: 0;
  transition: stroke-dashoffset 1s ease;
  stroke-width: 5px;
  fill: #FFD4D4;
}

.success-green::after {
  color: #009933 !important;
}

.success-green::before {
  color: #009933 !important;
}

.success-green h3 {
  color: #009933 !important;
}

.success-green circle {
  stroke: #009933;
  stroke-dashoffset: 0;
  transition: stroke-dashoffset 1s ease;
  stroke-width: 6px;
  fill: #D0EDD9;
}

.success-orange::after {
  color: #F6B900 !important;
}

.success-orange::before {
  color: #F6B900 !important;
}

.success-orange h3 {
  color: #F6B900 !important;
}

.success-orange circle {
  stroke: #F6B900;
  stroke-dashoffset: 0;
  transition: stroke-dashoffset 1s ease;
  stroke-width: 5px;
  fill: #FCEAB3;
}

.border-zero {
  border-bottom: 0 !important;
}

.profit-label {
  font-size: 95%;
  font-weight: normal;
  /* line-height: 1; */
  color: #777777;
}

.d-inline {
  display: inline !important;
}

.trgt-price2 {
  margin-left: 12px;
  margin-right: 16px;
}

.report-pricing-buy2 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0px 13px 0;
  border-bottom: none;
}

.ml-a {
  margin-left: auto;
  font-size: 12px;
  /* text-transform: uppercase; */
  display: block;
  /* padding: 15px 0; */
  font-weight: 600;
  text-decoration: none;
  color: #797979;
  position: relative;
}

.detail-page-sidebar {
  width: 438px;
  display: block;
  padding: 0;
  box-shadow: 0 0 10px #ccc;
  margin: 0 auto;
  position: fixed;
  right: 0;
  height: 100%;
  z-index: 99999;
  top: 0;
  background: #ffffff;
}
.detail-page-sidebar h4 {
  font-size: 18px;
}
.detail-page-sidebar .fixed-sidebar-header {
  padding: 30px;
  display: flex;
  padding-bottom: 0;
  align-items: center;
}
.detail-page-sidebar .fixed-sidebar-header .bck-prev {
  text-decoration: none;
  border: 0;
  color: #1B1464;
  margin-right: 20px;
}
.detail-page-sidebar .sidebar-mid-content {
  padding: 30px;
  height: calc(100vh - 160px);
  overflow: auto;
}
.detail-page-sidebar .sidebar-mid-content .mid-content-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.detail-page-sidebar .sidebar-mid-content .mid-content-top.mid-content-mrg {
  margin-top: 10px;
  margin-bottom: 25px;
}
.detail-page-sidebar .sidebar-mid-content .mid-content-top .align-items-end {
  align-items: flex-end;
}
.detail-page-sidebar .sidebar-mid-content .content-top-right .ic-txt {
  color: #F6B900;
  display: inline-flex;
  align-items: center;
  margin: 0;
}
.detail-page-sidebar .sidebar-mid-content .content-top-right .ic-txt svg {
  margin-right: 5px;
}
.detail-page-sidebar .sidebar-mid-content .content-top-right .ic-txt svg path {
  fill: #F6B900;
}
.detail-page-sidebar .sidebar-mid-content .mid-icon-list {
  display: flex;
  align-items: flex-start;
  margin: 20px 0;
}
.detail-page-sidebar .sidebar-mid-content .mid-icon-list .icon-list-item {
  width: 33.33%;
  text-align: center;
}
.detail-page-sidebar .sidebar-mid-content .mid-icon-list .icon-list-item .icon-cirlce {
  width: 52px;
  height: 52px;
  display: block;
  position: relative;
  border-radius: 50%;
  border: 1px solid #9D9D9D;
  margin: 0 auto;
  margin-bottom: 10px;
}
.detail-page-sidebar .sidebar-mid-content .mid-icon-list .icon-list-item h5 {
  color: #868686;
  text-align: center;
  font-family: "SF Pro Display";
  font-weight: 300;
}
.detail-page-sidebar .sidebar-mid-content .mid-prize-list {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.detail-page-sidebar .sidebar-mid-content .sidebar-desc p {
  font-size: 16px;
  color: #797979;
  opacity: 1;
}
.detail-page-sidebar .sidebar-mid-content .sidebar-desc p strong {
  color: #333333;
}
.detail-page-sidebar .sidebar-mid-content .loss-profit-input {
  display: flex;
  margin: 26px 0;
  flex-wrap: wrap;
  border: 1px solid rgba(0, 0, 0, 0.1019607843);
  border-radius: 4px;
  background: #ffffff;
}
.detail-page-sidebar .sidebar-mid-content .loss-profit-input .loss-profit-item {
  width: 33.33%;
  padding: 16px 10px;
  text-align: left;
}
.detail-page-sidebar .sidebar-mid-content .loss-profit-input .loss-profit-item h6 {
  margin: 0;
  margin-bottom: 8px;
  color: #666666;
}
.detail-page-sidebar .sidebar-mid-content .loss-profit-input .loss-profit-item.loss-est {
  background: rgba(218, 83, 77, 0.1019607843);
}
.detail-page-sidebar .sidebar-mid-content .loss-profit-input .loss-profit-item.loss-est h4 {
  color: #DA534D;
}
.detail-page-sidebar .sidebar-mid-content .loss-profit-input .loss-profit-item.profit-est {
  background: rgba(0, 179, 158, 0.1019607843);
}
.detail-page-sidebar .sidebar-mid-content .loss-profit-input .loss-profit-item.profit-est h4 {
  color: #00B09C;
}
.detail-page-sidebar .sidebar-mid-content .loss-profit-input .loss-profit-item.qun-est {
  text-align: center;
}
.detail-page-sidebar .sidebar-mid-content .loss-profit-input .loss-profit-item.qun-est h6 {
  display: block;
}
.detail-page-sidebar .sidebar-mid-content .loss-profit-input .loss-profit-item.qun-est .input-fld {
  font-size: 16px;
  color: #060842;
  display: inline-block;
  border: 0;
  border-bottom: 1px solid #060842;
  padding: 0 5px;
  text-align: center;
  max-width: 32%;
  outline: none;
}
.detail-page-sidebar h6.chng-clr {
  color: #868686;
}
.detail-page-sidebar h6.grn-clr {
  color: #009933;
}
.detail-page-sidebar h6.mrg {
  margin: 0;
  margin-left: 10px;
}
.detail-page-sidebar .fixed-sidebar-footer {
  background: #F4F8FF;
  padding: 10px 30px 20px 30px;
  border-radius: 16px 16px 0px 0px;
}
.detail-page-sidebar .fixed-sidebar-footer .sidebar-footer-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.detail-page-sidebar .fixed-sidebar-footer .sidebar-footer-top .dwld-report {
  color: #333333;
  font-size: 16px;
  text-decoration: none;
  font-weight: 500;
}
.detail-page-sidebar .fixed-sidebar-footer .sidebar-footer-top h6 {
  color: #333333;
  margin: 0;
  font-size: 16px;
  display: flex;
  align-items: center;
}
.detail-page-sidebar .fixed-sidebar-footer .sidebar-footer-top h6 .icon-eye {
  color: #868686;
  margin-right: 10px;
}
.detail-page-sidebar .fixed-sidebar-footer .but-buy-foot {
  width: 100%;
  margin-top: 15px;
  float: none;
  padding: 0 18px;
}

.toggle {
  padding-top: 10px;
  padding-bottom: 30px;
}

.recommendation {
  font-weight: 500;
}

.roundbtn {
  border-radius: 25px;
  font-size: 13px;
  text-transform: capitalize;
  display: block;
  font-weight: 500;
  position: relative;
  padding: 8px 15px;
}
@media (max-width: 1280px) {
  .roundbtn {
    padding: 8px 8px;
    font-size: 12px;
    border: none;
  }
}

.m0 {
  margin: 0px;
}

.mb-25 {
  margin-bottom: 25px;
}

.pdl0 {
  padding-left: 0px;
  padding-bottom: 0px;
  padding-top: 0px;
}
@media (max-width: 992px) {
  .pdl0 {
    padding-left: 5px;
    padding-bottom: 10px;
    padding-top: 10px;
  }
}

.hidden-item:hover {
  background: transparent !important;
  border: none !important;
  cursor: default !important;
  color: transparent !important;
  text-decoration: none !important;
}

.hidden-item::before {
  background: transparent !important;
  border: none !important;
  cursor: default !important;
  color: transparent !important;
}

#filter-srch-bar-scroll {
  position: absolute;
  top: -135px;
  left: 0;
}

.no-line .prc-buy-desc {
  border: none !important;
}

.margin-left-auto {
  margin-left: auto;
}

.text-v-center {
  display: flex;
  height: 100%;
  align-items: center;
}

.no-top-border {
  border-top: none !important;
  padding-top: 0px !important;
}

.pb0 {
  padding-bottom: 0px !important;
}

.primary-col {
  color: #1B1464;
}

.fa-beat {
  animation: fa-beat 4s ease;
}

@keyframes fa-beat {
  0% {
    transform: scale(1);
    background: #ffffff;
    box-shadow: 0 0 3px #ffffff;
    border-radius: 10px;
  }
  5% {
    transform: scale(1.25);
  }
  20% {
    transform: scale(1);
    background: #ffffff;
    box-shadow: 0 0 8px #ffffff;
    border-radius: 10px;
  }
  30% {
    transform: scale(1);
  }
  35% {
    transform: scale(1.25);
    background: #ffffff;
    box-shadow: 0 0 2px #ffffff;
    border-radius: 10px;
  }
  50% {
    transform: scale(1);
  }
  55% {
    transform: scale(1.25);
  }
  70% {
    transform: scale(1);
  }
}
.achieved-img {
  /* display: block; */
  /* max-width: 100%; */
  /* height: auto; */
  height: 20px;
  margin-right: 5px;
}

.option-chain-popup {
  line-height: 15px;
  position: absolute;
  position: fixed;
  border-radius: 8px;
  background: #ffffff;
  z-index: 999;
  position: fixed;
  z-index: 99999;
  width: 100%;
  left: 0;
  top: 0;
  height: 100%;
  background: rgba(0, 0, 0, 0.16);
  display: flex !important;
  align-items: center;
}
.option-chain-popup .sleekbox-popup {
  box-sizing: border-box;
  background: #ffffff;
  padding: 1rem 0;
  max-width: 450px;
  margin: 0 auto;
  border-radius: 8px;
  margin: 1rem auto;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.75);
  height: auto;
  z-index: 9999;
  padding: 0px;
  margin: 0px;
  width: 500px;
  padding-bottom: 10px;
  padding-top: 10px;
  /* margin: auto; */
  width: 838px;
  background: #ffffff;
  margin: 0 auto;
  display: block;
  border-radius: 8px;
}
@media (max-width: 767px) {
  .option-chain-popup .sleekbox-popup {
    margin: 1rem 1rem;
  }
}
.option-chain-popup .sleekbox-popup .companyname {
  display: flex;
  justify-content: space-between;
  padding: 0 1rem 10px;
}
.option-chain-popup .sleekbox-popup .companyname .company {
  color: #333333;
  font-size: 14px;
  line-height: 22px;
  font-weight: 600;
}
.option-chain-popup .sleekbox-popup .companyname .date {
  color: #797979;
  font-size: 14px;
  line-height: 22px;
  font-weight: 500;
}
.option-chain-popup .sleekbox-popup .companyname .companynumber {
  color: #333333;
  font-size: 16px;
  line-height: 22px;
  font-weight: 600;
}
.option-chain-popup .sleekbox-popup .rate {
  display: flex;
  justify-content: space-between;
  padding: 0 1rem 10px;
}
.option-chain-popup .sleekbox-popup .rate .number {
  float: right;
  font-size: 14px;
  line-height: 22px;
  font-weight: 600;
}
.option-chain-popup .sleekbox-popup .rate .oichange {
  color: #797979;
  font-size: 14px;
  line-height: 22px;
  font-weight: 500;
}
.option-chain-popup .sleekbox-popup .rate .percentage {
  font-size: 14px;
  line-height: 22px;
  font-weight: 600;
}
.option-chain-popup .sleekbox-popup .range {
  display: flex;
  justify-content: space-around;
  padding: 0 1rem 10px;
  align-items: flex-end;
}
.option-chain-popup .sleekbox-popup .range .callput {
  width: 33.33%;
}
.option-chain-popup .sleekbox-popup .range .callput ul {
  display: flex;
  padding-left: 0;
  margin: 0;
}
.option-chain-popup .sleekbox-popup .range .callput ul li {
  list-style: none;
  cursor: pointer;
  padding: 4px 12px;
  border: 1px solid #989898;
}
.option-chain-popup .sleekbox-popup .range .callput ul li:first-child {
  border-radius: 5px 0 0 5px;
}
.option-chain-popup .sleekbox-popup .range .callput ul li:last-child {
  border-radius: 0 5px 5px 0;
}
.option-chain-popup .sleekbox-popup .range .callput ul li.active {
  background-color: #004393;
  color: #ffffff;
}
.option-chain-popup .sleekbox-popup .range .buildup {
  width: 33.33%;
  text-align: center;
  font-size: 14px;
  line-height: 22px;
  font-weight: 600;
}
.option-chain-popup .sleekbox-popup .range .ranging {
  width: 33.33%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.option-chain-popup .sleekbox-popup .range .ranging .prev {
  padding: 3px;
  border: 1px solid #989898;
  border-radius: 5px 0 0 5px;
  cursor: pointer;
}
.option-chain-popup .sleekbox-popup .range .ranging .prev img {
  height: 13px;
}
.option-chain-popup .sleekbox-popup .range .ranging .numbers {
  padding: 3px;
  border: 1px solid #989898;
  font-size: 12px;
  padding-left: 10px;
  padding-right: 10px;
}
.option-chain-popup .sleekbox-popup .range .ranging .next {
  padding: 3px;
  border: 1px solid #989898;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
}
.option-chain-popup .sleekbox-popup .range .ranging .next img {
  height: 13px;
}
.option-chain-popup .sleekbox-popup hr {
  margin: 0px !important;
  border: 1px solid #D0D0D0;
  opacity: 30%;
}
.option-chain-popup .sleekbox-popup .textwrap {
  display: flex;
  padding: 0.5rem 1rem;
  justify-content: space-between;
}
.option-chain-popup .sleekbox-popup .textwrap .innerwrap {
  /* &:last-child{
  	text-align: right;
  } */
}
.option-chain-popup .sleekbox-popup .textwrap .innerwrap .head {
  color: #797979;
  font-size: 14px;
  line-height: 19px;
  font-weight: 500;
  padding-bottom: 4px;
  margin: 0;
}
.option-chain-popup .sleekbox-popup .textwrap .innerwrap .subtext {
  margin: 0;
  color: #000000;
  font-weight: bold;
  font-size: 14px;
  text-align: center;
  opacity: 1;
}
.option-chain-popup .sleekbox-popup .tableheading {
  color: #333333;
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  text-align: center;
  margin: 10px 0;
}
.option-chain-popup .sleekbox-popup .tablewrap {
  display: flex;
}
.option-chain-popup .sleekbox-popup .tablewrap .bid {
  width: 100%;
  padding: 0 0 0.5rem;
  border-right: 1px solid #D0D0D0;
  display: flex;
  justify-content: center;
}
.option-chain-popup .sleekbox-popup .tablewrap .bid table {
  width: 100%;
}
.option-chain-popup .sleekbox-popup .tablewrap .bid table th {
  padding: 6px 0;
  text-align: center;
  color: #797979;
  font-size: 14px;
  font-weight: 500;
}
.option-chain-popup .sleekbox-popup .tablewrap .bid table td {
  text-align: center;
  padding: 6px 0;
  color: #333333;
  font-size: 13px;
  font-weight: 500;
}
.option-chain-popup .sleekbox-popup .tablewrap .bid table td.bluecolor {
  color: #004393;
}
.option-chain-popup .sleekbox-popup .tablewrap .bid table td.redcolor {
  color: #EE404A;
}
.option-chain-popup .sleekbox-popup .tablewrap .order {
  width: 100%;
  padding: 0 0 0.5rem;
  display: flex;
  justify-content: center;
}
.option-chain-popup .sleekbox-popup .tablewrap .order table {
  width: 100%;
}
.option-chain-popup .sleekbox-popup .tablewrap .order table th {
  text-align: center;
  padding: 6px 0;
  color: #797979;
  font-size: 14px;
  font-weight: 500;
}
.option-chain-popup .sleekbox-popup .tablewrap .order table td {
  text-align: center;
  padding: 6px 0;
  color: #333333;
  font-size: 13px;
  font-weight: 500;
}
.option-chain-popup .sleekbox-popup .tablewrap .order table td.bluecolor {
  color: #004393;
}
.option-chain-popup .sleekbox-popup .tablewrap .order table td.redcolor {
  color: #EE404A;
}
.option-chain-popup .sleekbox-popup .btnwrap {
  margin-top: 14px;
  display: flex;
  justify-content: flex-end;
  padding: 0 0.5rem;
}
.option-chain-popup .sleekbox-popup .btnwrap .btn {
  margin: 0 0.5rem;
  border-radius: 5px;
  font-size: 15px;
  padding: 4px 12px;
}
.option-chain-popup .sleekbox-popup .btnwrap .btn-info-2 {
  border: 1px solid #004393;
  color: #004393;
  background: transparent;
}
.option-chain-popup .sleekbox-popup .btnwrap .btn-buy-2 {
  border: 1px solid #004393;
  color: #ffffff;
  background: #004393;
}
.option-chain-popup .sleekbox-popup .btnwrap .btn-sell-2 {
  border: 1px solid #EE404A;
  color: #ffffff;
  background: #EE404A;
}
.option-chain-popup.sleekbox-popup-active {
  display: block;
}

.float-left {
  float: left;
}

.text-success {
  color: #00B16B !important;
}

.text-failed {
  color: #EE404A !important;
}

.text-undefined {
  color: #ffcc33 !important;
}

.text-gray {
  color: #a2a2a2;
}

.float-right {
  float: right;
}

.justify-content-center {
  justify-content: center !important;
  padding: 13px !important;
}

.close-sec {
  display: list-item;
  padding-right: 10px;
  text-decoration: none;
  list-style: none;
}

#draggable-detail {
  width: 800px !important;
  max-width: 800px !important;
}

.padding-10 {
  padding: 12px;
}

.padding-sec {
  padding: 12px;
  padding-top: 20px;
  padding-bottom: 55px;
}
@media (max-width: 767px) {
  .padding-sec {
    padding: 15px;
  }
}

.padding-bottom-10 {
  padding-bottom: 10px;
}

.w800 {
  width: 800px !important;
  max-width: 600px !important;
}

.big-ico {
  font-weight: 1000;
  border: 1px solid #00B16B;
  border-radius: 66px;
  padding: 23px;
  font-size: 41px;
  text-align: center;
  background: #00B16B;
  color: #ffffff;
}

.img-ico-strt {
  margin-bottom: 17px;
  width: 13%;
}

.big-btn {
  margin: 0 0.5rem;
  border-radius: 5px;
  font-size: 16px !important;
  padding: 7px 13px !important;
}

.close {
  opacity: 1;
  position: absolute;
  margin-left: 94%;
}

.text-blue-2 {
  color: #004393;
  font-weight: 600;
}

.strategy-sec .rounded-btn {
  background: #F4F3F8;
  color: #1B1464;
  font-size: 18px;
  padding: 0;
  width: 36px;
  height: 36px;
  text-align: center;
  line-height: 36px;
  border-radius: 4px;
  border: 0;
  margin-right: 10px;
  outline: none;
  display: inline;
  align-items: center;
  justify-content: center;
}

.close-modl {
  position: revert;
  right: 30px;
  top: 30px;
  cursor: pointer;
  float: none;
  margin-left: 96%;
}
.close-modl img {
  width: 15px;
}

.mt-0 {
  margin-top: 0 !important;
}

.disabled-btn {
  opacity: 0.7;
  cursor: not-allowed;
}

.tag-top {
  font-size: 13px;
  color: #333333;
  background: #D6F3E7;
  border-radius: 0px 14px 14px 0px;
  display: inline-block;
  position: relative;
  left: -25px;
  padding: 5px 20px 5px 23px;
  margin-bottom: 10px;
  letter-spacing: 0.14px;
  font-weight: 500;
}
.tag-top em {
  font-style: normal;
  font-size: 14px;
}
.tag-top.hot-pick {
  background: #FDE0E2;
}
.tag-top.hero-zero {
  background: rgba(246, 185, 37, 0.1607843137);
}
.tag-top.moment-pick {
  background: rgba(102, 102, 102, 0.1607843137);
}

.grids-section .strategy-sec > li .report-pricing-buy {
  justify-content: space-between;
}
.grids-section .strategy-sec > li .report-pricing-buy .prc-buy-desc {
  width: auto;
}

.ostitle {
  color: #333333;
  font-size: 24px;
  line-height: 29px;
  font-family: "SFProText";
  font-weight: 600;
  padding-left: 25px;
  letter-spacing: 0.29px;
}

@media (max-width: 1024px) {
  .app-strategy-cont {
    padding-top: 0 !important;
  }
}

.ml-4px {
  margin-left: 4px;
}`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 83147:
/*!***************************************************************************************!*\
  !*** ./src/app/research-report/option-detail/option-detail.component.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div>\r\n  @if (isOpenTradeDetail) {\r\n    <div class=\"option-str-details open-mdl\" id=\"trade-strategy\">\r\n      <div class=\"str-details-fixed\" id=\"strategy-detail\">\r\n        <div class=\"str-details-header\">\r\n          <div class=\"str-head-top\">\r\n            <div class=\"top-det-left\">\r\n              <button class=\"c-menu__close clear\"  aria-label=\"Close\"  (click)=\"closeSec()\">\r\n                <i aria-hidden=\"true\" class=\"icon-back-arrow\"></i>\r\n              </button>\r\n              <h4>{{data?.strategy_name}}\r\n                <span\r\n                  class=\"{{ 'ic-txt active-lbl '+  (((data?.status=='exit')||(data?.status=='exit_at_cost')  ||(data?.status=='sl_triggered')||(data?.status=='stopped_out'))?'down-m2':((data?.status=='book_profit')||(data?.status=='book_full_profit')||(data?.status=='book_part_profit')||(data?.status=='book_part_profit_with_trail_sl_to_cost'))?'primary-m2':(data?.status=='active' || data?.status=='pending')?'balance2':(data?.status=='target_achieved')?'up2':'balance2')}}\">\r\n                  <!---->\r\n                  @if (!(data?.status=='target_achieved')) {\r\n                    <svg height=\"20\" viewBox=\"0 0 7.5 14\" width=\"7.5\"\r\n                      xmlns=\"http://www.w3.org/2000/svg\" class=\"svg-img\">\r\n                      <path d=\"M12.75,5l-4.5,8.5h3.14V19l4.36-8.5h-3Z\" data-name=\"Path 26641\" fill=\"#093\" id=\"Path_26641\"\r\n                      transform=\"translate(-8.25 -5)\"></path>\r\n                    </svg>\r\n                  }\r\n                  @if ((data?.status=='target_achieved')) {\r\n                    <img src=\"../../../assets/images/blue-theme/achieve.png\"\r\n                      class=\"achieved-img\">\r\n                  }\r\n                  <!----> {{data?.status==\"pending\"?\"Active\":data?.status|value:'replace-underscore-4'}}\r\n                </span>\r\n              </h4>\r\n            </div>\r\n          </div>\r\n          <div class=\"str-head-bottom\">\r\n            <div class=\"head-bot-left\">\r\n              <h3 class=\"script-ttl  text-uppercase\" (click)=\"gotoCompanyPage(data,true)\">{{(data?.symbol ) || 'NA'}}</h3>\r\n              <h6>\r\n                {{data?.strategy_duration=='intra_day'?'Intraday':data?.strategy_duration=='positional'?'Positional':'NA'}}\r\n              </h6>\r\n            </div>\r\n            <div class=\"head-bot-right\">\r\n              <h4 class=\"script-ttl\">{{(data?.LTP | segment : (data?.symbol_segment_id||1)) || 'NA'}}</h4>\r\n              <h6 class=\"txt-mn {{data?.class}}\"> {{(data?.Change||0) | segment : (data?.symbol_segment_id||1)}}\r\n                ({{data?.ChangePer | value :\r\n              '1.2-2'}} %)</h6>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"str-details-middle-cont\">\r\n          <div class=\"str-market-count\">\r\n            <div class=\"market-count-list\">\r\n              <div class=\"count-list-item\">\r\n                <h6>Break <br>Even</h6>\r\n                <h5>{{(data?.break_even||0)}}</h5>\r\n              </div>\r\n              <div class=\"count-list-item\">\r\n                <h6>Max <br>Loss</h6>\r\n                <h5 class=\"text-red\">{{(((data?.max_loss||data?.max_loss===0)?(data?.max_loss| number:\r\n                '1.2-2'):'Unlimited') )}}</h5>\r\n              </div>\r\n              <div class=\"count-list-item\">\r\n                <h6>Max <br>profit</h6>\r\n                <h5 class=\"text-green\">{{(((data?.max_profit||data?.max_profit===0)?(data?.max_profit| number:\r\n                '1.2-2'):'Unlimited') )}}</h5>\r\n              </div>\r\n              <div class=\"count-list-item\">\r\n                <h6>Current<br> Payoff</h6>\r\n                <h5>₹ {{((data?.payoff||0) | number: '1.2-2')}}</h5>\r\n              </div>\r\n            </div>\r\n            <div class=\"str-market-details\">\r\n              <div class=\"str-d-flex\">\r\n                <h4>Details</h4>\r\n                <h6 class=\"pub-date-ttl\">Published at {{(data?.published_date ) || 'NA'}}</h6>\r\n              </div>\r\n              <div class=\"market-details-data\">\r\n                <table class=\"details-data-table\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th>Action</th>\r\n                      <th>Scrip Name</th>\r\n                      <th class=\"text-right\">LTP</th>\r\n                      <th class=\"text-right hide-mob\">Entry Price</th>\r\n                      <th class=\"text-right hide-mob\" width=\"50\">Lot</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    @for (call of (data?.option_calls||[]); track call) {\r\n                      <tr>\r\n                        <td>\r\n                          <button class=\"btn-comn {{call?.call_category=='sell'?'btn-sell':'btn-buy'}} \">\r\n                          {{call?.call_category=='sell'?'S':'B'}} </button>\r\n                        </td>\r\n                        <td>\r\n                          <h4 (click)=\"gotoCompanyPage(call,false)\"> {{call?.scrip_sec_name| value:'replace-underscore'}}\r\n                          </h4>\r\n                          <h5 class=\"lot-price-mobile\">{{call?.lot_quantity}} Lot &#64; ₹ {{call?.entry_price}}</h5>\r\n                        </td>\r\n                        <td class=\"text-right\">\r\n                          <h4> {{call?.LTP| segment : (data?.scrip_segment_id||1)}}</h4>\r\n                        </td>\r\n                        <td class=\"text-right hide-mob\">\r\n                          <h4> {{call?.entry_price}}</h4>\r\n                        </td>\r\n                        <td class=\"text-right hide-mob\">\r\n                          <h4> {{call?.lot_quantity}}</h4>\r\n                        </td>\r\n                      </tr>\r\n                    }\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"str-details-footer\">\r\n            @if ((!userAccountStatus||!userAccountStatus?.onboardStatus || userAccountStatus?.onboardStatus=='C')  && !isTradingAllowed) {\r\n              <p class=\"error-message\">Trading for this segment is not active for you. Please visit user profile to make the segment active.</p>\r\n            }\r\n            @if (userAccountStatus&&userAccountStatus?.onboardStatus && userAccountStatus?.onboardStatus=='N') {\r\n              <div class=\"amo-note segment-error\">\r\n                <p>Complete your account setup to begin your Joy of Earning\r\n                  <span (click)=\"openLink()\" >Continue</span>\r\n                </p>\r\n              </div>\r\n            }\r\n            @if (userAccountStatus&&userAccountStatus?.onboardStatus && userAccountStatus?.onboardStatus=='YR') {\r\n              <div class=\"amo-note segment-error\">\r\n                <p>Account Activation Failed due to issue with the account details\r\n                  <span (click)=\"openLink()\" >Proceed</span>\r\n                </p>\r\n              </div>\r\n            }\r\n            @if (userAccountStatus&&userAccountStatus?.onboardStatus && userAccountStatus?.onboardStatus=='Y') {\r\n              <div class=\"amo-note segment-error\">\r\n                <p>Account Activation in Progress\r\n                </p>\r\n              </div>\r\n            }\r\n            @if (userAccountStatus&&userAccountStatus?.onboardStatus && userAccountStatus?.onboardStatus=='inactive') {\r\n              <div class=\"amo-note segment-error\">\r\n                <p>Account is inactive due to no trade activity. Please complete Re-KYC to reactivate\r\n                  <span (click)=\"navigateToModificationFlow()\" >Proceed</span>\r\n                </p>\r\n              </div>\r\n            }\r\n            @if (userAccountStatus&&userAccountStatus?.onboardStatus && userAccountStatus?.onboardStatus=='suspended') {\r\n              <div class=\"amo-note segment-error\">\r\n                <p>Account is suspended. For assistance, kindly reach out to our support team.\r\n                  <span (click)=\"navigateToSupport()\" >Contact Support</span>\r\n                </p>\r\n              </div>\r\n            }\r\n            @if (userAccountStatus&&userAccountStatus?.onboardStatus && userAccountStatus?.onboardStatus=='MF') {\r\n              <div class=\"amo-note segment-error\">\r\n                <p>Your Equity Account isn't activated Yet!\r\n                  <span (click)=\"openLink()\" >Continue</span>            </p>\r\n                </div>\r\n              }\r\n              <div class=\"det-funds-det  \">\r\n                <h4>Required <span class=\"show-tl-mob\">₹</span>\r\n                @if (marginLoader) {\r\n                  <span class=\"amnt-ttl\"> Calculating...</span>\r\n                }\r\n                @if (!marginLoader) {\r\n                  <span>\r\n                    <span class=\"amnt-ttl\"> {{(data?.isSellPresent?(data?.marginRequired):(data?.marginRequired2) )|\r\n                    value:'1.2-2'}}</span>\r\n                  </span>\r\n                }\r\n                <!--  <span>₹ 24,954</span > -->\r\n              </h4>\r\n              @if (marginAvailable != null) {\r\n                <h4>Available <span class=\"show-tl-mob\">₹</span>\r\n                @if (marginAvailableLoader) {\r\n                  <span class=\"amnt-ttl\"> Calculating...</span>\r\n                }\r\n                @if (!marginAvailableLoader) {\r\n                  <span>\r\n                    @if (marginAvailable > 0) {\r\n                      <span class=\"amnt-ttl \"> {{marginAvailable | value:'1.2-2'}}</span>\r\n                    }\r\n                    @if (marginAvailable < 1) {\r\n                      <span class=\"amnt-ttl \"> {{marginAvailable | value:'1.2-2'}}</span>\r\n                    }\r\n                  </span>\r\n                }\r\n                <!--  <span>₹ 24,954</span > -->\r\n              </h4>\r\n            }\r\n            <!--  <h4>Margin Required <span class=\"amnt-ttl\">₹ {{(data?.isSellPresent?(data?.marginRequired):(data?.marginRequired2) )| value:'1.2-2'}}</span></h4> -->\r\n          </div>\r\n          <button class=\"btn buy-sell-btn\" [ngClass]=\"{ 'disabled-btn': data?.isExpired}\"\r\n          (click)=\"!data?.isExpired?closeTrade():''\">Trade</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n}\r\n\r\n\r\n@if (!isOpenTradeDetail) {\r\n  <div class=\"str-details-order-confirm\">\r\n    <div class=\"order-confirm-sub-box\">\r\n      <div class=\"str-details-header\">\r\n        <div class=\"str-head-top\">\r\n          <div class=\"top-det-left\">\r\n            <button class=\"c-menu__close clear\"  aria-label=\"Close\" (click)=\"closeSec()\">\r\n              <i aria-hidden=\"true\" class=\"icon-back-arrow\"></i>\r\n            </button>\r\n            <h4>{{data?.strategy_name}} <span class=\"ic-txt active-lbl balance2\">\r\n              <!---->\r\n              @if (!(data?.status=='target_achieved')) {\r\n                <svg height=\"20\" viewBox=\"0 0 7.5 14\" width=\"7.5\"\r\n                  xmlns=\"http://www.w3.org/2000/svg\" class=\"svg-img\">\r\n                  <path d=\"M12.75,5l-4.5,8.5h3.14V19l4.36-8.5h-3Z\" data-name=\"Path 26641\" fill=\"#093\" id=\"Path_26641\"\r\n                  transform=\"translate(-8.25 -5)\"></path>\r\n                </svg>\r\n              }\r\n              @if ((data?.status=='target_achieved')) {\r\n                <img src=\"../../../assets/images/blue-theme/achieve.png\" class=\"achieved-img\">\r\n              }\r\n              {{data?.status==\"pending\"?\"Active\":data?.status|value:'replace-underscore-4'}}\r\n            </span>\r\n          </h4>\r\n        </div>\r\n      </div>\r\n      <div class=\"str-head-bottom\">\r\n        <div class=\"head-bot-left\">\r\n          <h3 class=\"script-ttl  text-uppercase\">{{(data?.symbol ) || 'NA'}}</h3>\r\n          <h6> {{data?.strategy_duration=='intra_day'?'Intraday':data?.strategy_duration=='positional'?'Positional':'NA'}} </h6>\r\n        </div>\r\n        <div class=\"head-bot-right\">\r\n          <h4 class=\"script-ttl\">{{(data?.LTP | segment : (data?.symbol_segment_id||1)) || 'NA'}}</h4>\r\n          <h6 class=\"txt-mn up\"> {{(data?.Change||0) | segment : (data?.symbol_segment_id||1)}} ({{data?.ChangePer | value :\r\n          '1.2-2'}} %)</h6>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"sub-box-header\">\r\n      <h5>{{data?.strategy_name}}\r\n        <span\r\n        class=\"st-labl\">{{data?.strategy_duration=='intra_day'?'Intraday':data?.strategy_duration=='positional'?'Positional':'NA'}}</span>\r\n        <span\r\n          class=\"{{ 'ic-txt active-lbl '+  (((data?.status=='exit')||(data?.status=='exit_at_cost')  ||(data?.status=='sl_triggered')||(data?.status=='stopped_out'))?'down-m2':((data?.status=='book_profit')||(data?.status=='book_full_profit')||(data?.status=='book_part_profit')||(data?.status=='book_part_profit_with_trail_sl_to_cost'))?'primary-m2':(data?.status=='active' || data?.status=='pending')?'balance2':(data?.status=='target_achieved')?'up2':'balance2')}}\">\r\n          <!---->\r\n          @if (!(data?.status=='target_achieved')) {\r\n            <svg height=\"20\" viewBox=\"0 0 7.5 14\" width=\"7.5\"\r\n              xmlns=\"http://www.w3.org/2000/svg\" class=\"svg-img\">\r\n              <path d=\"M12.75,5l-4.5,8.5h3.14V19l4.36-8.5h-3Z\" data-name=\"Path 26641\" fill=\"#093\" id=\"Path_26641\"\r\n              transform=\"translate(-8.25 -5)\"></path>\r\n            </svg>\r\n          }\r\n          @if ((data?.status=='target_achieved')) {\r\n            <img src=\"../../../assets/images/blue-theme/achieve.png\"\r\n              class=\"achieved-img\">\r\n          }\r\n          <!----> {{data?.status==\"pending\"?\"Active\":data?.status|value:'replace-underscore-4'}}\r\n        </span>\r\n      </h5>\r\n      <h4 class=\"script-ttl text-uppercase\" (click)=\"gotoCompanyPage(data,true)\">{{(data?.symbol ) || 'NA'}}\r\n        {{(data?.LTP | segment : (data?.symbol_segment_id||1)) || 'NA'}} <small class=\"{{data?.class}}\">\r\n        {{(data?.Change||0) | segment : (data?.symbol_segment_id||1)}} ({{data?.ChangePer | value :\r\n      '1.2-2'}} %)</small></h4>\r\n      <span class=\"close-modl\" (click)=\"closeSec()\">\r\n        <img src=\"assets/icons/close-ico.svg\">\r\n        <!--   <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\" viewBox=\"0 0 14 14\">\r\n        <path id=\"Path_1\" data-name=\"Path 1\" d=\"M19,6.41,17.59,5,12,10.59,6.41,5,5,6.41,10.59,12,5,17.59,6.41,19,12,13.41,17.59,19,19,17.59,13.41,12Z\" transform=\"translate(-5 -5)\" fill=\"rgba(0,0,0,0.7)\"/>\r\n      </svg> -->\r\n    </span>\r\n  </div>\r\n  <div class=\"order-conf-data\">\r\n    <h4 class=\"ttl-con\">Order Confirmation</h4>\r\n    <div class=\"conf-data-sub\">\r\n      <div class=\"conf-data-table\">\r\n        <table class=\"details-data-table\">\r\n          <thead>\r\n            <tr>\r\n              <th>Action</th>\r\n              <th>Scrip Name</th>\r\n              <th>LTP</th>\r\n              <th>Lot</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            @for (call of (data?.option_calls||[]); track call) {\r\n              <tr>\r\n                <td>\r\n                  <button class=\"btn-comn {{call?.call_category=='sell'?'btn-sell':'btn-buy'}} \">\r\n                  {{call?.call_category=='sell'?'S':'B'}} </button>\r\n                </td>\r\n                <td>\r\n                  <h4 (click)=\"gotoCompanyPage(call,false)\">{{call?.scrip_sec_name | value:'replace-underscore'}}</h4>\r\n                </td>\r\n                <td>\r\n                  <h4> {{call?.LTP| segment : (data?.scrip_segment_id||1)}}</h4>\r\n                </td>\r\n                <td>\r\n                  <h4> {{call?.lot_quantity*(lotValue||1)}}</h4>\r\n                </td>\r\n              </tr>\r\n            }\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      <div class=\"totl-cal totl-cal-mobile\">\r\n        <h5 class=\"ttl-con\">Lot Multiplier</h5>\r\n        <div class=\"incr-decr-input\">\r\n          <div class=\"quantity\">\r\n            <button class=\"quantity__minus\" (click)=\"subtractLot()\">\r\n              <!-- <svg height=\"10px\" id=\"Layer_1\" class=\"svg-icos\" style=\"enable-background:new 0 0 512 512;\"\r\n              version=\"1.1\" viewBox=\"0 0 512 512\" width=\"10px\" fill=\"#004393\" xml:space=\"preserve\"\r\n              xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n              <rect height=\"64\" width=\"384\" x=\"64\" y=\"224\" />\r\n            </svg> -->\r\n            <img class=\"loader\" src=\"assets/icons/mb-minus.svg\" />\r\n          </button>\r\n          <input name=\"quantity\" type=\"number\" pattern=\"[1-9][0-9]*\" id=\"strategyID\" (paste)=\"onPaste($event)\"\r\n            (keypress)=\"preventDecimalAndMax($event)\" (focusout)=\"calculateAmount()\" class=\"quantity__input\"\r\n            min=\"1\" max=\"99999\" maxlength=\"5\" [(ngModel)]=\"lotValue\" (ngModelChange)=\"calculateBrokerage()\">\r\n            <button class=\"quantity__plus\" (click)=\"addLot()\">\r\n              <!-- <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"#004393\"\r\n              class=\"bi bi-plus svg-icos\" viewBox=\"0 0 16 16\">\r\n              <path\r\n                d=\"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z\">\r\n              </path>\r\n            </svg> -->\r\n            <img class=\"loader\" src=\"assets/icons/mb-plus.svg\" />\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  @if (showData ) {\r\n    <div class=\"trade-charges-details\">\r\n      <h4>Charges</h4>\r\n      @if (brokerageLoader) {\r\n        <div>Loading...</div>\r\n      }\r\n      @if (!brokerageLoader) {\r\n        <div class=\"charg-details-sub\">\r\n          <div class=\"sub-top\">\r\n            <!-- <span>(10 Quantity x ₹ 3328.00)</span> -->\r\n            <h5 class=\"trd-value\">Trade value</h5>\r\n            <h5 class=\"ttl-price\">₹ {{brokerageObj?.tradeValue | condense:'1.2-2'}}</h5>\r\n          </div>\r\n          <div class=\"details-list\">\r\n            <div class=\"list-items\">\r\n              <h5 class=\"ttl-itm\">Brokerage <span>(Rate- {{(brokerageOrderType==\"PO\"?('(₹'+(brokerageObj?.brokerageRate| condense)+'/ Order)'):((brokerageObj?.brokerageType==='rupee'?'₹':'')+brokerageObj?.brokerageRate + (brokerageObj?.brokerageType==='per'?'%':' /Lot')))}})</span></h5>\r\n              <h5 class=\"ttl-amnt\">₹ {{brokerageObj?.brokerage | condense:'1.2-2'}}</h5>\r\n            </div>\r\n            <div class=\"list-items\">\r\n              <h5 class=\"ttl-itm\">STT/CTT</h5>\r\n              <h5 class=\"ttl-amnt\">₹ {{brokerageObj?.stt | condense:'1.2-2'}}</h5>\r\n            </div>\r\n            <div class=\"list-items\">\r\n              <h5 class=\"ttl-itm\">Transaction Charges</h5>\r\n              <h5 class=\"ttl-amnt\">₹ {{brokerageObj?.transactionCharge | condense:'1.2-2'}}</h5>\r\n            </div>\r\n            <div class=\"list-items\">\r\n              <h5 class=\"ttl-itm\">Clearing Charges</h5>\r\n              <h5 class=\"ttl-amnt\">₹ {{brokerageObj?.clearance | condense:'1.2-2'}}</h5>\r\n            </div>\r\n            <div class=\"list-items\">\r\n              <h5 class=\"ttl-itm\">State Stamp Duty</h5>\r\n              <h5 class=\"ttl-amnt\">₹ {{brokerageObj?.stateStampDuty | condense:'1.2-2'}}</h5>\r\n            </div>\r\n            <div class=\"list-items\">\r\n              <h5 class=\"ttl-itm\">SEBI Turnover Fees</h5>\r\n              <h5 class=\"ttl-amnt\">₹ {{brokerageObj?.sebi | value:'1.2-2'}}</h5>\r\n            </div>\r\n            <div class=\"list-items\">\r\n              <h5 class=\"ttl-itm\">GST</h5>\r\n              <h5 class=\"ttl-amnt\">₹ {{brokerageObj?.GST | condense:'1.2-2'}}</h5>\r\n            </div>\r\n            <div class=\"list-items lst-itm\" id=\"mobileData\">\r\n              <h5 class=\"ttl-itm\">Total Charges</h5>\r\n              <h5 class=\"ttl-amnt\">₹ {{((brokerageObj?.brokerage)+(brokerageObj?.stt)+(brokerageObj?.stateStampDuty)+(brokerageObj?.transactionCharge)+(brokerageObj?.clearance)+(brokerageObj?.GST)+(brokerageObj?.sebi))\r\n              | condense:'1.2-2'}}</h5>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      }\r\n    </div>\r\n  }\r\n  @if (showBrokerageCharges) {\r\n    <div class=\"brokerage-section\">\r\n      <div class=\"brokerage-header\">\r\n        <div class=\"brokerage-label-header\">\r\n          Charges\r\n        </div>\r\n        <div class=\"brokerage-label-header-sec\">\r\n          <div class=\"brokerage-label\">Trade Value <span class=\"brokerage-sub-label\">( {{(orderRequest.Qty||1) *\r\n            (scrip?.MarketLot&&(brokerageObj?.selectedScrip?.OptionType === 'XX')?(normalizingFactor *\r\n            scrip?.MarketLot):1)}} {{brokerageObj?.selectedScrip?.res?'Lot':'Qty'}}\r\n          x ₹ {{(orderRequest?.Price)| condense}})</span></div>\r\n          <div class=\"brokerage-value\"> ₹ {{(orderRequest.Qty||0)*(orderRequest.Price||0)*\r\n          (scrip?.MarketLot?(normalizingFactor * scrip?.MarketLot):1) | condense}}</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"brokerage-middle\">\r\n        <ul>\r\n          <li>\r\n            <div class=\"brokerage-label\">Brokerage<span class=\"brokerage-sub-label\">\r\n              {{brokerageObj?.selectedScrip?.res?('(₹'+(brokerageObj?.selectedScrip?.res| condense)+'/ Lot)') :\r\n            ('(Rate-'+ (this.brokerageObj?.selectedScrip?.per| condense :'1.2-2')+'%)')}} </span></div>\r\n            <div class=\"brokerage-value\"> ₹ {{brokerageObj?.brokerage | condense:'1.2-2'}}</div>\r\n          </li>\r\n          <li>\r\n            <div class=\"brokerage-label\">STT/CTT </div>\r\n            <div class=\"brokerage-value\">₹ {{brokerageObj?.stt | condense:'1.2-2'}}</div>\r\n          </li>\r\n          <li>\r\n            <div class=\"brokerage-label\">Transaction Charges</div>\r\n            <div class=\"brokerage-value\">₹ {{brokerageObj?.transactionCharge | condense:'1.2-2'}}</div>\r\n          </li>\r\n          <li>\r\n            <div class=\"brokerage-label\">Clearing Charges</div>\r\n            <div class=\"brokerage-value\">₹ {{brokerageObj?.clearance | condense:'1.2-2'}}</div>\r\n          </li>\r\n          <li>\r\n            <div class=\"brokerage-label\">State Stamp Duty</div>\r\n            <div class=\"brokerage-value\">₹ {{brokerageObj?.stateStampDuty | value:'1.2-2'}}</div>\r\n          </li>\r\n          <li>\r\n            <div class=\"brokerage-label\">SEBI Turnover Fees</div>\r\n            <div class=\"brokerage-value\">₹ {{brokerageObj?.sebi | value:'1.2-2'}}</div>\r\n          </li>\r\n          <li>\r\n            <div class=\"brokerage-label\">GST</div>\r\n            <div class=\"brokerage-value\">₹ {{brokerageObj?.GST | condense:'1.2-2'}}</div>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <div class=\"brokerage-footer\">\r\n        <div class=\"brokerage-label\">Total Charges</div>\r\n        <div class=\"brokerage-value\">₹\r\n          {{((brokerageObj?.brokerage)+(brokerageObj?.stt)+(brokerageObj?.transactionCharge)+(brokerageObj?.clearance)+(brokerageObj?.stateStampDuty)+(brokerageObj?.GST)+(brokerageObj?.sebi))\r\n        | condense:'1.2-2'}}</div>\r\n      </div>\r\n    </div>\r\n  }\r\n</div>\r\n<div class=\"order-conf-footer-sub\">\r\n  <div class=\"bottom-sec\">\r\n    @if (isTradingAllowed&& (marginAvailable<((data?.isSellPresent?(data?.marginRequired):(data?.marginRequired2) )*(lotValue||0)))) {\r\n      <div class=\"error-tag\"\r\n        >\r\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" class=\"dang-ico\">\r\n          <g id=\"Group_97742\" data-name=\"Group 97742\" transform=\"translate(227 -3119)\">\r\n            <circle id=\"Ellipse_1886\" data-name=\"Ellipse 1886\" cx=\"8\" cy=\"8\" r=\"8\" transform=\"translate(-227 3119)\"\r\n              fill=\"#da534d\" />\r\n              <path id=\"xmark-solid_1_\" data-name=\"xmark-solid (1)\"\r\n                d=\"M6.9,101.873a.711.711,0,1,1-1,1l-2.342-2.34-2.341,2.34a.711.711,0,0,1-1.006-1.005L2.55,99.53.208,97.189a.711.711,0,0,1,1.005-1.006l2.341,2.343L5.9,96.184A.711.711,0,0,1,6.9,97.19L4.561,99.532Z\"\r\n                transform=\"translate(-222.556 3027.469)\" fill=\"#fff\" />\r\n              </g>\r\n            </svg>\r\n            You don't have enough balance to proceed this order\r\n          </div>\r\n        }\r\n        @if (!isTradingAllowed) {\r\n          <div class=\"error-tag\"\r\n            >\r\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" class=\"dang-ico\">\r\n              <g id=\"Group_97742\" data-name=\"Group 97742\" transform=\"translate(227 -3119)\">\r\n                <circle id=\"Ellipse_1886\" data-name=\"Ellipse 1886\" cx=\"8\" cy=\"8\" r=\"8\" transform=\"translate(-227 3119)\"\r\n                  fill=\"#da534d\" />\r\n                  <path id=\"xmark-solid_1_\" data-name=\"xmark-solid (1)\"\r\n                    d=\"M6.9,101.873a.711.711,0,1,1-1,1l-2.342-2.34-2.341,2.34a.711.711,0,0,1-1.006-1.005L2.55,99.53.208,97.189a.711.711,0,0,1,1.005-1.006l2.341,2.343L5.9,96.184A.711.711,0,0,1,6.9,97.19L4.561,99.532Z\"\r\n                    transform=\"translate(-222.556 3027.469)\" fill=\"#fff\" />\r\n                  </g>\r\n                </svg>\r\n                Trading for this segment is not active for you. Please visit user profile to make the segment active.\r\n              </div>\r\n            }\r\n            <!--   <div class=\"brok-charges\"><a >\r\n            <small (click)=\"openCharges()\" class=\"\">Charges\r\n            </small>\r\n          </a></div> -->\r\n        </div>\r\n        <div class=\"order-conf-footer\">\r\n          <div class=\"conf-footer-left\">\r\n            <div class=\"conf-cont\">\r\n              @if (optionCalls&&optionCalls.length && ((optionCalls[0] && optionCalls[0].SegmentId && optionCalls[0].Token)&&(optionCalls[optionCalls?.length-1] && optionCalls[optionCalls?.length-1].SegmentId && optionCalls[optionCalls?.length-1].Token)) && (data?.isSellPresent?(data?.marginRequired):(data?.marginRequired2)\r\n                ) && !ChargesLoader) {\r\n                <h5 class=\"ttl-con\">Required <span class=\"show-tl-mob\">₹ + <em class=\"charg-btn\" (mouseover)=\"showData=true\" (mouseout)=\"showData=false\" (click)=\"checkMobileData()\">Charges</em> <em class=\"charg-btn charg-btn-mobile\" (click)=\"checkMobileData()\">Charges</em></span></h5>\r\n              }\r\n              @if (!(optionCalls&&optionCalls.length && ((optionCalls[0] && optionCalls[0].SegmentId && optionCalls[0].Token)&&(optionCalls[optionCalls?.length-1] && optionCalls[optionCalls?.length-1].SegmentId && optionCalls[optionCalls?.length-1].Token)) && (data?.isSellPresent?(data?.marginRequired):(data?.marginRequired2)\r\n                ) && !ChargesLoader)) {\r\n                <h5 class=\"ttl-con\">&nbsp;</h5>\r\n              }\r\n              <h4>\r\n                @if (marginLoader) {\r\n                  <span class=\"amnt-ttl\"> Calculating...</span>\r\n                }\r\n                @if (!marginLoader) {\r\n                  <span>\r\n                    <span class=\"amnt-ttl \"><span class=\"hide-m\">₹</span>{{((data?.isSellPresent?(data?.marginRequired):(data?.marginRequired2)\r\n                  )*(lotValue||0)) | condense:'1.2-2':'CR'}}</span>\r\n                </span>\r\n              }\r\n            </h4>\r\n            <!--  <h4></h4> -->\r\n          </div>\r\n          <div class=\"conf-cont \">\r\n            <h5 class=\"ttl-con\"> Available <span class=\"show-tl-mob\">₹</span></h5>\r\n            <h4>\r\n              @if (marginAvailableLoader) {\r\n                <span class=\"amnt-ttl\"> Calculating...</span>\r\n              }\r\n              @if (!marginAvailableLoader) {\r\n                <span>\r\n                  @if (marginAvailable > 0) {\r\n                    <span class=\"amnt-ttl \">₹{{marginAvailable | value:'1.2-2'}}</span>\r\n                  }\r\n                  @if (!marginAvailable || (marginAvailable < 0)) {\r\n                    <span class=\"amnt-ttl \">₹{{marginAvailable |\r\n                    value:'1.2-2'}}</span>\r\n                  }\r\n                </span>\r\n              }\r\n              <button type=\"button\" (click)=\"getMarginAvailable()\" class=\"btn refresh-btn\"\r\n                [class.moving]=\"marginAvailableLoader\"><i class=\"icon-repeat\"></i></button>\r\n                <!--  <span>₹ 24,954</span> -->\r\n              </h4>\r\n            </div>\r\n          </div>\r\n          <div class=\"conf-footer-right {{isTradingAllowed?'':'justify-end'}}\" >\r\n            <div class=\"totl-cal\">\r\n              <h5 class=\"ttl-con\">Lot Multiplier</h5>\r\n              <div class=\"incr-decr-input\">\r\n                <div class=\"quantity\">\r\n                  <button class=\"quantity__minus\" (click)=\"subtractLot()\">\r\n                    <svg height=\"10px\" id=\"Layer_1\" class=\"svg-icos\" style=\"enable-background:new 0 0 512 512;\"\r\n                      version=\"1.1\" viewBox=\"0 0 512 512\" width=\"10px\" fill=\"#004393\" xml:space=\"preserve\"\r\n                      xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n                      <rect height=\"64\" width=\"384\" x=\"64\" y=\"224\" />\r\n                    </svg>\r\n                  </button>\r\n                  <input name=\"quantity\" type=\"number\" pattern=\"[1-9][0-9]*\" id=\"strategyID\" (paste)=\"onPaste($event)\"\r\n                    (keypress)=\"preventDecimalAndMax($event)\" (focusout)=\"calculateAmount()\" class=\"quantity__input\"\r\n                    min=\"1\" max=\"99999\" maxlength=\"5\" [(ngModel)]=\"lotValue\" (ngModelChange)=\"calculateBrokerage()\">\r\n                    <button class=\"quantity__plus\" (click)=\"addLot()\">\r\n                      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"#004393\"\r\n                        class=\"bi bi-plus svg-icos\" viewBox=\"0 0 16 16\">\r\n                        <path\r\n                          d=\"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z\">\r\n                        </path>\r\n                      </svg>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              @if (isTradingAllowed) {\r\n                <button class=\"btn buy-sell-btn {{marginAvailableLoader?'disabled-btn':''}}\"  [disabled]=\"!lotValue || marginAvailableLoader\"\r\n                  (click)=\"placeOrder(((marginAvailable||0)<((data?.isSellPresent?(data?.marginRequired):(data?.marginRequired2) )*(lotValue||0))))\">{{((marginAvailable||0)\r\n                  <((data?.isSellPresent?(data?.marginRequired):(data?.marginRequired2) )*(lotValue||0)))?'Add Funds':'Place\r\n                at market'}}</button>\r\n              }\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  }\r\n</div>\r\n\r\n\r\n@if (noBankActive) {\r\n  <div class=\"dialog\">\r\n    <div class=\"dialog-content\">\r\n      <div class=\"dialog-header clearfix\">\r\n        <div class=\"col-md-12\">\r\n          <h4>Attention</h4>\r\n        </div>\r\n      </div>\r\n      <div class=\"dialog-section\">\r\n        <p>None of your Registered Bank Account is Active, Please Contact Support </p>\r\n      </div>\r\n      <div class=\"dialog-footer clearfix\">\r\n        <button class=\"btn sell\" (click)=\"closeNoBankActive()\">Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n}\r\n\r\n@if (isNRI) {\r\n  <div class=\"dialog\">\r\n    <div class=\"dialog-content\" style=\"max-width: 80rem\">\r\n      <div class=\"dialog-header clearfix\">\r\n        <div class=\"col-md-12\">\r\n          <h4>NRI Payin/Payout Process</h4>\r\n        </div>\r\n      </div>\r\n      <div class=\"dialog-section\" style=\"text-align: center;\">\r\n        <p>Since you are NRI customer, your fund transfer is required to be routed through your PIS account only.</p>\r\n        <p>For more query, you may contact to your RM or call <a href=\"tel:+918824242424\">(+918824242424)</a> our customer\r\n        care or <br> email <a href=\"mailto:care@choiceindia.com\">(care&#64;choiceindia.com)</a> us.</p>\r\n      </div>\r\n      <div class=\"dialog-footer clearfix\">\r\n        <button class=\"btn sell\" (click)=\"closeNoBankActive(true)\">Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n}";

/***/ }),

/***/ 15867:
/*!***********************************************************************************************************!*\
  !*** ./src/app/research-report/research-report-section/research-report-section.component.html?ngResource ***!
  \***********************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"rrp-new col-md-12\">\r\n  <div class=\"rrp-new-top\">\r\n    <div class=\"rrp-new-top-sub\" id=\"rrp-new-top-sub\">\r\n      @if (isOSClientFromApp) {\r\n        <h1 class=\"ostitle\">Option Strategy</h1>\r\n      }\r\n      @if (!isOSClientFromApp) {\r\n        <div class=\"rrp-tab\">\r\n          <ul>\r\n            @if (config?.filter?.type=='experts' || config?.filter?.type=='signals') {\r\n              <li>\r\n                <a routerLink=\"/research-report/research/{{config?.filter?.type}}/EQ\"\r\n                [class.active-tb]=\"config?.filter?.trade=='EQ'\">Equity</a>\r\n              </li>\r\n            }\r\n            @if (config?.filter?.type=='experts'|| config?.filter?.type=='signals') {\r\n              <li>\r\n                <a routerLink=\"/research-report/research/{{config?.filter?.type}}/FO\"\r\n                  [class.active-tb]=\"config?.filter?.trade=='FO'\">\r\n                  @if (config?.filter?.type=='experts') {\r\n                    <!-- F&amp;O -->Derivative\r\n                  } @else {\r\n                    Derivative\r\n                  }\r\n                  <ng-template #content>Derivative</ng-template>\r\n                </a>\r\n              </li>\r\n            }\r\n            @if (config?.filter?.type=='experts') {\r\n              <li>\r\n                <a routerLink=\"/research-report/research/{{config?.filter?.type}}/COM\"\r\n                [class.active-tb]=\"config?.filter?.trade=='COM'\">Commodity</a>\r\n              </li>\r\n            }\r\n            @if (config?.filter?.type=='experts') {\r\n              <li>\r\n                <a routerLink=\"/research-report/research/{{config?.filter?.type}}/CDS\"\r\n                [class.active-tb]=\"config?.filter?.trade=='CDS'\">Currency</a>\r\n              </li>\r\n            }\r\n            @if (config?.filter?.type=='fundamental'||config?.filter?.type=='option_strategy') {\r\n              <li><a class=\"hidden-item\">&nbsp;</a></li>\r\n            }\r\n          </ul>\r\n        </div>\r\n      }\r\n\r\n\r\n      @if ((!shared?.userId || shared?.userId == 'guest') && !isOSClientFromApp) {\r\n        <div class=\"ml-a\">\r\n          To view our all Active Calls &nbsp;<button class=\"btn  btn-gradient p8\" (click)=\"goToLogin()\"\r\n        title=\"Sign In/Sign Up to view\">Sign In / Sign Up</button>\r\n      </div>\r\n    }\r\n\r\n    <div [class.ml25]=\"(!shared?.userId || shared?.userId == 'guest') && !isOSClientFromApp\" class=\"scroll-mobile\">\r\n      @if (!isOSClientFromApp) {\r\n        <div class=\"text-center switch-wrap pull-left toggle pdl0 m0\">\r\n          <button scrollTo class=\"btn roundbtn\" (click)=\"toggleChange('experts');\"\r\n          [class.btn-gradient]=\"config?.filter?.type=='experts'\">Experts</button>\r\n        </div>\r\n      }\r\n\r\n      @if (!isOSClientFromApp) {\r\n        <div class=\"text-center switch-wrap pull-left toggle pdl0 m0\" id=\"optionStrategyMenu\">\r\n          <button scrollTo class=\"btn roundbtn\"  (click)=\"toggleChange('option_strategy');\"\r\n          [class.btn-gradient]=\"config?.filter?.type=='option_strategy'\">Option Strategy</button>\r\n        </div>\r\n      }\r\n      <!--  <div class=\"text-center switch-wrap pull-left toggle pdl0 m0\" *ngIf=\"!isOSClientFromApp\">\r\n      <button scrollTo class=\"btn roundbtn\" (click)=\"toggleChange('signals');\"\r\n      [class.btn-gradient]=\"config?.filter?.type=='signals'\">Signals</button>\r\n    </div> -->\r\n    @if (!isOSClientFromApp) {\r\n      <div class=\"text-center switch-wrap pull-left toggle pdl0 m0\">\r\n        <button scrollTo class=\"btn roundbtn\" (click)=\"toggleChange('fundamental');\"\r\n        [class.btn-gradient]=\"config?.filter?.type=='fundamental'\">Fundamental</button>\r\n      </div>\r\n    }\r\n  </div>\r\n  <!-- <div class=\"rrp-taggle\">\r\n  <div _ngcontent-c17=\"\" class=\"switch-wrap\">\r\n    <label _ngcontent-c17=\"\" class=\"control-label mr-10 \" [class.selected]=\"config?.filter?.type=='experts'\" for=\"researchToggle\">EXPERTS</label>\r\n    <label _ngcontent-c17=\"\" class=\"switch\">\r\n      <input _ngcontent-c17=\"\" name=\"switchToggleGainer\" id=\"researchToggle\" type=\"checkbox\" class=\"ng-untouched ng-valid ng-dirty\" [checked]=\"config?.filter?.type=='signals'\" (change)=\"toggleChange($event)\">\r\n      <div _ngcontent-c17=\"\"  class=\"slider round\" (click)=\"onSwitchClick()\"></div>\r\n      </label><label for=\"researchToggle\" _ngcontent-c17=\"\" class=\"control-label ml-10\" [class.selected]=\"config?.filter?.type=='signals'\" (click)=\"onSwitchClick()\">SIGNALS</label></div>\r\n    </div> -->\r\n    <!-- <div class=\"rrp-new-top-sub\">\r\n    <div class=\"rrp-tab\">\r\n      <ul >\r\n\r\n        <li ><a  class=\"active-tb\" routerLink=\"/research-report/research-ui/fundamental\" >FUNDAMENTAL</a></li>\r\n      </ul>\r\n    </div>\r\n  </div> -->\r\n</div>\r\n<!-- getCounters -->\r\n@if ( (isSegmentAllowed == 'Y' && utils?.isAuthorized()) || ( !utils?.isAuthorized())) {\r\n  <div class=\"tab-cont\" id=\"tab-cont\" [class.pb0]=\"config?.filter.type == 'fundamental' ||config?.filter.type == 'option_strategy'\"\r\n    >\r\n    <div class=\"equity-cont\">\r\n      <div class=\"read-mor-less\">\r\n        <div class=\"article\">\r\n          @if (config?.filter?.type=='experts') {\r\n            <p>\r\n              All the research calls in Experts segment are given by the financial experts.\r\n            </p>\r\n          }\r\n          @if (config?.filter?.type=='signals') {\r\n            <p>\r\n              All the research calls in Signal segment are generated by automated calls based on Quantitative logic.\r\n            </p>\r\n          }\r\n          @if (config?.filter?.type=='fundamental') {\r\n            <p>\r\n              All the research calls in Fundamental segment are given by the financial experts.\r\n            </p>\r\n          }\r\n          @if (config?.filter?.type=='option_strategy' ) {\r\n            <p>\r\n              Option strategies by our Experts with their algorithmic trading ideas.\r\n            </p>\r\n          }\r\n          <!--   <p>It's Mutli time frame Breakout Strategy in which you will get noble recommendation based on the breakout. This strategy anal.\r\n          <span class=\"moretext\">\r\n            Brisket ball tip cow sirloin. Chuck porchetta kielbasa pork chop doner sirloin, bacon beef brisket ball tip short ribs.\r\n            </span> &nbsp;<a class=\"moreless-button\" href=\"javascript:void(0)\">Read more</a>\r\n          </p> -->\r\n        </div>\r\n      </div>\r\n      @if (config?.filter.type !== 'fundamental' && config?.filter.type !== 'option_strategy') {\r\n        <div class=\"performnnce-tab\">\r\n          <!-- <h5>Performance of last 90 days <span class=\"help-desc\"><img src=\"assets/images/research-report/baseline-help_outline-24px.svg\"\r\n        alt=\"Active\" class=\"img-responsive icon-set\"></span></h5> -->\r\n        <!-- <h5>Performance of last 90 days <span class=\"help-desc\">\r\n        <i class=\"fa fa-question-circle pl-2\"  popoverTitle=\"Performance\"  outsideClick=\"true\" placement=\"right\"   popover=\"Performance is calculated based on your selected filters for the last 90 days and 5yrs for Long term calls\"></i>\r\n      </span></h5> -->\r\n      <!--   <h1>{{config?.filter.type}}</h1> -->\r\n      <h5>{{config?.filter?.type=='fundamental'?'Performance of the Fundamental calls':'Performance of last 90 days'\r\n        }}<span class=\"help-desc\">\r\n        <img src=\"assets/images/research-report/tooltip-ico.svg\" alt=\"\" class=\"img-responsive icon-set\"\r\n          popoverTitle=\"Performance\" triggers=\"mouseenter:mouseleave\" outsideClick=\"true\" placement=\"right\"\r\n          [popover]=\"popoverMessages?.performance\" width=\"16\" height=\"16\">\r\n        </span></h5>\r\n        <!-- <pre>{{progressNumber|json}}</pre> -->\r\n        <div class=\"last-performce-list\">\r\n          <div class=\"box-perfp {{progressNumber?.classParent}} \">\r\n            <div class=\"progressdiv  {{progressNumber?.class}}\" [attr.data-percent]=\"percentageData?.success\">\r\n              <svg class=\"progress-n \" width=\"50\" height=\"50\" viewport=\"0 0 100 100\" version=\"1.1\"\r\n                xmlns=\"http://www.w3.org/2000/svg\">\r\n                <circle r=\"22\" cx=\"25\" cy=\"25\" fill=\"transparent\" stroke-dasharray=\"150.4\" stroke-dashoffset=\"0\">\r\n                </circle>\r\n                <circle [attr.class]=\"progressNumber?.classBars\" r=\"22\" cx=\"25\" cy=\"25\" fill=\"transparent\"\r\n                stroke-dasharray=\"150.4\" stroke-dashoffset=\"0\"></circle>\r\n              </svg>\r\n            </div>\r\n            <div class=\"perfp-des {{progressNumber?.class}}\">\r\n              <h3>{{config?.filter.type !== 'fundamental'?'Success':'Returns'}}</h3>\r\n            </div>\r\n          </div>\r\n          @if (config?.filter.type !== 'fundamental') {\r\n            <div class=\"box-perfp positive\">\r\n              <div class=\"circle\">\r\n                <img src=\"assets/images/research-report/positive.svg\" alt=\"Target Hit\" class=\"img-responsive icon-set\" width=\"15\" height=\"16\">\r\n              </div>\r\n              <div class=\"perfp-des\">\r\n                <h3>{{percentageData?.positive}}</h3>\r\n                <h6>Target Hit</h6>\r\n              </div>\r\n            </div>\r\n          }\r\n          @if (config?.filter.type !== 'fundamental') {\r\n            <div class=\"box-perfp negative\">\r\n              <div class=\"circle\">\r\n                <img src=\"assets/images/research-report/negative.svg\" alt=\"Stop Loss Hit\"\r\n                  class=\"img-responsive icon-set\" width=\"15\" height=\"16\">\r\n                </div>\r\n                <div class=\"perfp-des\">\r\n                  <h3>{{percentageData?.negative}}</h3>\r\n                  <h6>Stop Loss Hit</h6>\r\n                </div>\r\n              </div>\r\n            }\r\n            @if (config?.filter.type !== 'fundamental') {\r\n              <div class=\"box-perfp active\">\r\n                <div class=\"circle\">\r\n                  <img src=\"assets/images/research-report/active.svg\" alt=\"Active\" class=\"img-responsive icon-set\" width=\"15\" height=\"8\">\r\n                </div>\r\n                <div class=\"perfp-des\">\r\n                  <h3>{{percentageData?.active}}</h3>\r\n                  <h6>Good to Enter</h6>\r\n                </div>\r\n              </div>\r\n            }\r\n          </div>\r\n        </div>\r\n      }\r\n    </div>\r\n  </div>\r\n}\r\n</div>\r\n\r\n<div class=\"rrp-new-bottom-cont\">\r\n  <div id=\"filter-srch-bar-scroll\"></div>\r\n  <!-- All filters -->\r\n  @if ( !isNonEqUser && (isSegmentAllowed == 'Y' && (utils?.isAuthorized() || isOSClientFromApp)) ) {\r\n    <div class=\"filter-srch-bar\" id=\"filter-srch-bar\"\r\n      >\r\n      @if (((shared?.userId && shared?.userId != 'guest'||!this.isNonEqUser) && (config?.filter?.type!=='fundamental') && (config?.filter?.type!=='option_strategy'))) {\r\n        <div class=\"months-wise\"\r\n          >\r\n          <ul class=\"tab-list\">\r\n            <li>\r\n              <a (click)=\"durationChange('today')\" [class.activ-mnt]=\"config?.duration=='today'\">TODAY</a>\r\n            </li>\r\n            <li>\r\n              <a (click)=\"durationChange('week')\"\r\n              [class.activ-mnt]=\"config?.duration=='week' && !config?.filter?.alertId\">WEEK</a>\r\n            </li>\r\n            <li>\r\n              <a (click)=\"durationChange('month')\" [class.activ-mnt]=\"config?.duration=='month'\">MONTH</a>\r\n            </li>\r\n            <li>\r\n              <a (click)=\"durationChange('quarter')\" [class.activ-mnt]=\"config?.duration=='quarter'\">QUARTER</a>\r\n            </li>\r\n            <li>\r\n              <a (click)=\"durationChange('year')\" [class.activ-mnt]=\"config?.duration=='year'\">YEAR</a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      }\r\n      @if (((shared?.userId && shared?.userId != 'guest'||!this.isNonEqUser)) || isOSClientFromApp) {\r\n        <div class=\"srch-filter-cont\"\r\n          [class.margin-left-auto]=\"(config?.filter?.type=='fundamental'||config?.filter?.type=='option_strategy')\">\r\n          <div class=\"search-wrap\" id=\"report-search\">\r\n            <i class=\"icon-search\"></i>\r\n            <input aria-label=\"search-company\" placeholder=\"{{config?.filter.type === 'option_strategy'?'Search Strategy, Scrip Here':'Search Company Here'}}\" [(ngModel)]=\"data.search\"\r\n              (input)=\"updateFilter($event.target.value)\" type=\"text\" class=\"srch\" inputRestrict=\"alphanumeric\" (paste)=\"false\">\r\n            </div>\r\n            @if (config?.filter.type !== 'fundamental') {\r\n              <div class=\"btn-group\" id=\"report-filter\" dropdown>\r\n                <button dropdown-open class=\"btn btn btn-filter dropdown-toggle\" (click)=\"filterBtnClick()\"><i\r\n                class=\"icon-filter\"></i></button>\r\n                @if (config?.filter.type === 'experts' || config?.filter.type === 'fundamental') {\r\n                  <form\r\n                    [formGroup]=\"userForm\" id=\"dropdown-basic\" class=\"dropdown-menu\">\r\n                    <h3 class=\"filter-title\">\r\n                      Filter\r\n                    </h3>\r\n                    <ul class=\"formwrap reset\" dropdown-not-closable-zone>\r\n\r\n                      <!-- <li class=\"clear-filter\">\r\n                      <a href=\"javascript:void(0)\" (click)=\"clearFilter()\">Clear Filter </a>\r\n                    </li> -->\r\n                    <li class=\"filter-options\">\r\n                      <h5 class=\"radio-titles\">Expert Type </h5>\r\n                      <div class=\"radio-wrapper\">\r\n                        <span>\r\n                          <input type=\"radio\" id=\"all\" value=\"0\" name=\"is_expert\" formControlName=\"is_expert\"\r\n                            (click)=\"setRadio('is_expert', 0)\" />\r\n                            <label for=\"all\">All</label>\r\n                          </span>\r\n                          @if ((shared?.userId && shared?.userId != 'guest'||!this.isNonEqUser)) {\r\n                            <span>\r\n                              <input type=\"radio\" id=\"Sumeet\" value=\"1\" name=\"is_expert\" formControlName=\"is_expert\"\r\n                                (click)=\"setRadio('is_expert', 1)\" />\r\n                                <label for=\"Sumeet\">Sumeet Bagadia’s Desk</label>\r\n                              </span>\r\n                            }\r\n                          </div>\r\n                        </li>\r\n                        @if (config?.filter?.type!='fundamental') {\r\n                          <li class=\"filter-options\">\r\n                            <h5 class=\"radio-titles\">Call Duration\r\n                            </h5>\r\n                            <div class=\"radio-wrapper\">\r\n                              <span>\r\n                                <input type=\"radio\" id=\"all_research_type\" value=\"all\" name=\"research_type\"\r\n                                  formControlName=\"research_type\" (click)=\"setRadio('research_type', 'all')\" />\r\n                                  <label for=\"all_research_type\">All </label>\r\n                                </span>\r\n                                <span>\r\n                                  <input type=\"radio\" id=\"Positional\" value=\"Positional\" name=\"research_type\"\r\n                                    formControlName=\"research_type\" (click)=\"setRadio('research_type', 'Positional')\" />\r\n                                    <label for=\"Positional\">Positional </label>\r\n                                  </span>\r\n                                  <span>\r\n                                    <input type=\"radio\" id=\"Intraday\" value=\"Intraday\" name=\"research_type\"\r\n                                      formControlName=\"research_type\" (click)=\"setRadio('research_type', 'Intraday')\" />\r\n                                      <label for=\"Intraday\">Intraday </label>\r\n                                    </span>\r\n                                    <!--\r\n                                    <span *ngIf=\"config?.filter?.trade!='FO'\">\r\n                                      <input type=\"radio\" id=\"Medium To Long Term\" value=\"Medium To Long Term\" name=\"research_type\" formControlName=\"research_type\"\r\n                                        (click)=\"setRadio('research_type', 'Medium To Long Term')\" />\r\n                                        <label for=\"Medium To Long Term\">Long Term </label>\r\n                                      </span> -->\r\n                                    </div>\r\n                                  </li>\r\n                                }\r\n                                <li class=\"filter-options\">\r\n                                  <h5 class=\"radio-titles\">Status</h5>\r\n                                  <div class=\"radio-wrapper\">\r\n                                    <span>\r\n                                      <input type=\"radio\" id=\"all_status\" value=\"all\" name=\"status\" formControlName=\"status\"\r\n                                        (click)=\"setRadio('status', 'all')\" />\r\n                                        <label for=\"all_status\">All </label>\r\n                                      </span>\r\n                                      <span>\r\n                                        <input type=\"radio\" id=\"active\" value=\"active\" name=\"status\" formControlName=\"status\"\r\n                                          (click)=\"setRadio('status', 'active')\" />\r\n                                          <label for=\"active\">Good to Enter</label>\r\n                                        </span>\r\n                                        <span>\r\n                                          <input type=\"radio\" id=\"target_achieved\" value=\"target_achieved\" name=\"status\"\r\n                                            formControlName=\"status\" (click)=\"setRadio('status', 'target_achieved')\" />\r\n                                            <label for=\"target_achieved\">Target Achieved </label>\r\n                                          </span>\r\n                                          <span>\r\n                                            <input type=\"radio\" id=\"book_profit\" value=\"book_profit\" name=\"status\" formControlName=\"status\"\r\n                                              (click)=\"setRadio('status', 'book_profit')\" />\r\n                                              <label for=\"book_profit\">Book Profit</label>\r\n                                            </span>\r\n                                            <span>\r\n                                              <input type=\"radio\" id=\"sl_triggered\" value=\"sl_triggered\" name=\"status\" formControlName=\"status\"\r\n                                                (click)=\"setRadio('status', 'sl_triggered')\" />\r\n                                                <label for=\"sl_triggered\">Stop Loss Hit</label>\r\n                                              </span>\r\n                                              <span>\r\n                                                <input type=\"radio\" id=\"exit\" value=\"exit\" name=\"status\" formControlName=\"status\"\r\n                                                  (click)=\"setRadio('status', 'exit')\" />\r\n                                                  <label for=\"exit\">Exit</label>\r\n                                                </span>\r\n                                              </div>\r\n                                            </li>\r\n                                          </ul>\r\n                                          <li class=\"apply-btn\">\r\n                                            <button class=\"btn-gradient\" (click)=\"onFormSubmit(true,false,true)\">Apply</button>\r\n                                            <button class=\"btn-outline\" (click)=\"clearFilter()\">\r\n                                              Clear Filters\r\n                                            </button>\r\n                                          </li>\r\n                                        </form>\r\n                                      }\r\n                                      @if (config?.filter.type === 'option_strategy') {\r\n                                        <form\r\n                                          [formGroup]=\"userForm\" id=\"dropdown-basic\" class=\"dropdown-menu\">\r\n                                          <h3 class=\"filter-title\">\r\n                                            Filter\r\n                                          </h3>\r\n                                          <ul class=\"formwrap\" dropdown-not-closable-zone>\r\n                                            <!-- <li class=\"clear-filter\">\r\n                                            <a href=\"javascript:void(0)\" (click)=\"clearFilter()\">Clear Filter </a>\r\n                                          </li> -->\r\n                                          @if (config?.filter?.type!='fundamental') {\r\n                                            <li class=\"filter-options\">\r\n                                              <h5 class=\"radio-titles\">Call Duration\r\n                                              </h5>\r\n                                              <div class=\"radio-wrapper\">\r\n                                                <span>\r\n                                                  <input type=\"radio\" id=\"all_research_type\" value=\"all\" name=\"research_type\"\r\n                                                    formControlName=\"research_type\" (click)=\"setRadio('research_type', 'all')\" />\r\n                                                    <label for=\"all_research_type\">All </label>\r\n                                                  </span>\r\n                                                  <span>\r\n                                                    <input type=\"radio\" id=\"Positional\" value=\"positional\" name=\"research_type\"\r\n                                                      formControlName=\"research_type\" (click)=\"setRadio('research_type', 'positional')\" />\r\n                                                      <label for=\"Positional\">Positional </label>\r\n                                                    </span>\r\n                                                    <span>\r\n                                                      <input type=\"radio\" id=\"Intraday\" value=\"intra_day\" name=\"research_type\"\r\n                                                        formControlName=\"research_type\" (click)=\"setRadio('research_type', 'intra_day')\" />\r\n                                                        <label for=\"Intraday\">Intraday </label>\r\n                                                      </span>\r\n                                                      <!--\r\n                                                      <span *ngIf=\"config?.filter?.trade!='FO'\">\r\n                                                        <input type=\"radio\" id=\"Medium To Long Term\" value=\"Medium To Long Term\" name=\"research_type\" formControlName=\"research_type\"\r\n                                                          (click)=\"setRadio('research_type', 'Medium To Long Term')\" />\r\n                                                          <label for=\"Medium To Long Term\">Long Term </label>\r\n                                                        </span> -->\r\n                                                      </div>\r\n                                                    </li>\r\n                                                  }\r\n                                                  <li class=\"filter-options\">\r\n                                                    <h5 class=\"radio-titles\">Status</h5>\r\n                                                    <div class=\"radio-wrapper\">\r\n                                                      <span>\r\n                                                        <input type=\"radio\" id=\"all_status\" value=\"all\" name=\"status\" formControlName=\"status\"\r\n                                                          (click)=\"setRadio('status', 'all')\" />\r\n                                                          <label for=\"all_status\">All </label>\r\n                                                        </span>\r\n                                                        <!-- <span>\r\n                                                        <input type=\"radio\" id=\"target_achieved\" value=\"target_achieved\" name=\"status\" formControlName=\"status\"\r\n                                                          (click)=\"setRadio('status', 'target_achieved')\" />\r\n                                                          <label for=\"target_achieved\">Target Achieved</label>\r\n                                                        </span>\r\n                                                        <span>\r\n                                                          <input type=\"radio\" id=\"pending\" value=\"pending\" name=\"status\" formControlName=\"status\"\r\n                                                            (click)=\"setRadio('status', 'pending')\" />\r\n                                                            <label for=\"pending\">Active</label>\r\n                                                          </span>\r\n                                                          <span>\r\n                                                            <input type=\"radio\" id=\"book_profit\" value=\"book_profit\" name=\"status\" formControlName=\"status\"\r\n                                                              (click)=\"setRadio('status', 'book_profit')\" />\r\n                                                              <label for=\"book_profit\">Book Profit</label>\r\n                                                            </span>\r\n                                                            <span>\r\n                                                              <input type=\"radio\" id=\"book_part_profit\" value=\"book_part_profit\" name=\"status\" formControlName=\"status\"\r\n                                                                (click)=\"setRadio('status', 'book_part_profit')\" />\r\n                                                                <label for=\"book_part_profit\">Book Part Profit</label>\r\n                                                              </span>\r\n                                                              <span>\r\n                                                                <input type=\"radio\" id=\"book_full_profit\" value=\"book_full_profit\" name=\"status\" formControlName=\"status\"\r\n                                                                  (click)=\"setRadio('status', 'book_full_profit')\" />\r\n                                                                  <label for=\"book_full_profit\">Book Full Profit</label>\r\n                                                                </span>\r\n                                                                <span>\r\n                                                                  <input type=\"radio\" id=\"book_part_profit_with_trail_sl_to_cost\" value=\"book_part_profit_with_trail_sl_to_cost\" name=\"status\" formControlName=\"status\"\r\n                                                                    (click)=\"setRadio('status', 'book_part_profit_with_trail_sl_to_cost')\" />\r\n                                                                    <label for=\"book_part_profit_with_trail_sl_to_cost\">Book Part Profit & Trail SL to Cost</label>\r\n                                                                  </span>\r\n                                                                  <span>\r\n                                                                    <input type=\"radio\" id=\"exit\" value=\"exit\" name=\"status\" formControlName=\"status\"\r\n                                                                      (click)=\"setRadio('status', 'exit')\" />\r\n                                                                      <label for=\"exit\">Exit</label>\r\n                                                                    </span>\r\n                                                                    <span>\r\n                                                                      <input type=\"radio\" id=\"stopped_out\" value=\"stopped_out\" name=\"status\" formControlName=\"status\"\r\n                                                                        (click)=\"setRadio('status', 'stopped_out')\" />\r\n                                                                        <label for=\"stopped_out\">Stopped Out</label>\r\n                                                                      </span>\r\n                                                                      <span>\r\n                                                                        <input type=\"radio\" id=\"exit_at_cost\" value=\"exit_at_cost\" name=\"status\" formControlName=\"status\"\r\n                                                                          (click)=\"setRadio('status', 'exit_at_cost')\" />\r\n                                                                          <label for=\"exit_at_cost\">Exit at Cost</label>\r\n                                                                        </span>\r\n                                                                        -->\r\n                                                                        <span>\r\n                                                                          <input type=\"radio\" id=\"active\" value=\"active\" name=\"status\" formControlName=\"status\"\r\n                                                                            (click)=\"setRadio('status', 'active')\" />\r\n                                                                            <label for=\"active\">Good to Enter</label>\r\n                                                                          </span>\r\n                                                                          <span>\r\n                                                                            <input type=\"radio\" id=\"target_achieved\" value=\"target_achieved\" name=\"status\"\r\n                                                                              formControlName=\"status\" (click)=\"setRadio('status', 'target_achieved')\" />\r\n                                                                              <label for=\"target_achieved\">Target Achieved </label>\r\n                                                                            </span>\r\n                                                                            <span>\r\n                                                                              <input type=\"radio\" id=\"book_profit\" value=\"book_profit\" name=\"status\" formControlName=\"status\"\r\n                                                                                (click)=\"setRadio('status', 'book_profit')\" />\r\n                                                                                <label for=\"book_profit\">Book Profit</label>\r\n                                                                              </span>\r\n                                                                              <span>\r\n                                                                                <input type=\"radio\" id=\"sl_triggered\" value=\"sl_triggered\" name=\"status\" formControlName=\"status\"\r\n                                                                                  (click)=\"setRadio('status', 'sl_triggered')\" />\r\n                                                                                  <label for=\"sl_triggered\">Stop Loss Hit</label>\r\n                                                                                </span>\r\n                                                                                <span>\r\n                                                                                  <input type=\"radio\" id=\"exit\" value=\"exit\" name=\"status\" formControlName=\"status\"\r\n                                                                                    (click)=\"setRadio('status', 'exit')\" />\r\n                                                                                    <label for=\"exit\">Exit</label>\r\n                                                                                  </span>\r\n                                                                                </div>\r\n                                                                              </li>\r\n                                                                            </ul>\r\n                                                                            <li class=\"apply-btn\">\r\n                                                                              <button class=\"btn-gradient\" (click)=\"onFormSubmit(true,false,true)\">Apply</button>\r\n                                                                              <button class=\"btn-outline\" (click)=\"clearFilter()\">\r\n                                                                                Clear Filters\r\n                                                                              </button>\r\n                                                                            </li>\r\n                                                                          </form>\r\n                                                                        }\r\n                                                                        @if (config?.filter.type === 'signals') {\r\n                                                                          <form [formGroup]=\"signalFilter\" id=\"dropdown-basic\"\r\n                                                                            class=\"dropdown-menu\">\r\n                                                                            <h3 class=\"filter-title\">\r\n                                                                              Filter\r\n                                                                            </h3>\r\n                                                                            <ul class=\"formwrap\" dropdown-not-closable-zone>\r\n                                                                              <!-- <li class=\"clear-filter\">\r\n                                                                              <a href=\"javascript:void(0)\" (click)=\"clearFilter()\">Clear Filter </a>\r\n                                                                            </li> -->\r\n                                                                            @if (config?.filter.trade==='EQ') {\r\n                                                                              <li class=\"filter-options\">\r\n                                                                                <h5 class=\"radio-titles\">Signal Type </h5>\r\n                                                                                <div class=\"radio-wrapper\">\r\n                                                                                  <span>\r\n                                                                                    <input type=\"radio\" id=\"EQ\" value=\"EQ\" name=\"type\" formControlName=\"type\"\r\n                                                                                      (click)=\"setRadio('type', 'EQ')\" />\r\n                                                                                      <label for=\"EQ\">All</label>\r\n                                                                                    </span>\r\n                                                                                    <span>\r\n                                                                                      <input type=\"radio\" id=\"FiveMinPVBreakout\" value=\"FiveMinPVBreakout\" name=\"type\"\r\n                                                                                        formControlName=\"type\" (click)=\"setRadio('type', 'FiveMinPVBreakout')\" />\r\n                                                                                        <label for=\"FiveMinPVBreakout\">Intra Spurt</label>\r\n                                                                                      </span>\r\n                                                                                      <span>\r\n                                                                                        <input type=\"radio\" id=\"FifteenMinPVBreakout\" value=\"FifteenMinPVBreakout\" name=\"type\"\r\n                                                                                          formControlName=\"type\" (click)=\"setRadio('type', 'FifteenMinPVBreakout')\" />\r\n                                                                                          <label for=\"FifteenMinPVBreakout\">Dark Horse</label>\r\n                                                                                        </span>\r\n                                                                                        <span>\r\n                                                                                          <input type=\"radio\" id=\"CQuant\" value=\"CQuant\" name=\"type\" formControlName=\"type\"\r\n                                                                                            (click)=\"setRadio('type', 'CQuant')\" />\r\n                                                                                            <label for=\"CQuant\">C-Quant</label>\r\n                                                                                          </span>\r\n                                                                                        </div>\r\n                                                                                      </li>\r\n                                                                                    }\r\n                                                                                    @if (config?.filter.trade==='FO') {\r\n                                                                                      <li class=\"filter-options\">\r\n                                                                                        <h5 class=\"radio-titles\">Signal Type </h5>\r\n                                                                                        <div class=\"radio-wrapper\">\r\n                                                                                          <span>\r\n                                                                                            <input type=\"radio\" id=\"FO\" value=\"FO\" name=\"type\" formControlName=\"type\"\r\n                                                                                              (click)=\"setRadio('type', 'FO')\" />\r\n                                                                                              <label for=\"FO\">All</label>\r\n                                                                                            </span>\r\n                                                                                            <span>\r\n                                                                                              <input type=\"radio\" id=\"FiveMinSTBreakout\" value=\"FiveMinSTBreakout\" name=\"type\"\r\n                                                                                                formControlName=\"type\" (click)=\"setRadio('type', 'FiveMinSTBreakout')\" />\r\n                                                                                                <label for=\"FiveMinSTBreakout\">Future Trade Simplifier Intraday</label>\r\n                                                                                              </span>\r\n                                                                                              <span>\r\n                                                                                                <input type=\"radio\" id=\"FifteenMinSTBreakout\" value=\"FifteenMinSTBreakout\" name=\"type\"\r\n                                                                                                  formControlName=\"type\" (click)=\"setRadio('type', 'FifteenMinSTBreakout')\" />\r\n                                                                                                  <label for=\"FifteenMinSTBreakout\">Future Trade Simplifier Position</label>\r\n                                                                                                </span>\r\n                                                                                              </div>\r\n                                                                                            </li>\r\n                                                                                          }\r\n                                                                                          <li class=\"filter-options\">\r\n                                                                                            <h5 class=\"radio-titles\">Status</h5>\r\n                                                                                            <div class=\"radio-wrapper\">\r\n                                                                                              <span>\r\n                                                                                                <input type=\"radio\" id=\"all\" value=\"all\" name=\"status\" formControlName=\"status\"\r\n                                                                                                  (click)=\"setRadio('status', 'all')\" />\r\n                                                                                                  <label for=\"all\">All </label>\r\n                                                                                                </span>\r\n                                                                                                <span>\r\n                                                                                                  <input type=\"radio\" id=\"Open\" value=\"Open\" name=\"status\" formControlName=\"status\"\r\n                                                                                                    (click)=\"setRadio('status', 'Open')\" />\r\n                                                                                                    <label for=\"Open\">Good to Enter</label>\r\n                                                                                                  </span>\r\n                                                                                                  <span>\r\n                                                                                                    <input type=\"radio\" id=\"T1\" value=\"T1\" name=\"status\" formControlName=\"status\"\r\n                                                                                                      (click)=\"setRadio('status', 'T1')\" />\r\n                                                                                                      <label for=\"T1\">Target 1</label>\r\n                                                                                                    </span>\r\n                                                                                                    <span>\r\n                                                                                                      <input type=\"radio\" id=\"T2\" value=\"T2\" name=\"status\" formControlName=\"status\"\r\n                                                                                                        (click)=\"setRadio('status', 'T2')\" />\r\n                                                                                                        <label for=\"T2\">Target 2</label>\r\n                                                                                                      </span>\r\n                                                                                                      @if (config?.filter.trade==='EQ') {\r\n                                                                                                        <span>\r\n                                                                                                          <input type=\"radio\" id=\"T3\" value=\"T3\" name=\"status\" formControlName=\"status\"\r\n                                                                                                            (click)=\"setRadio('status', 'T3')\" />\r\n                                                                                                            <label for=\"T3\">Target 3</label>\r\n                                                                                                          </span>\r\n                                                                                                        }\r\n                                                                                                        <span>\r\n                                                                                                          <input type=\"radio\" id=\"Book_Profit\" value=\"Book_Profit\" name=\"status\" formControlName=\"status\"\r\n                                                                                                            (click)=\"setRadio('status', 'Book_Profit')\" />\r\n                                                                                                            <label for=\"Book_Profit\">Book Profit</label>\r\n                                                                                                          </span>\r\n                                                                                                          <span>\r\n                                                                                                            <input type=\"radio\" id=\"SL\" value=\"SL\" name=\"status\" formControlName=\"status\"\r\n                                                                                                              (click)=\"setRadio('status', 'SL')\" />\r\n                                                                                                              <label for=\"SL\">Stop Loss Hit</label>\r\n                                                                                                            </span>\r\n                                                                                                            <span>\r\n                                                                                                              <input type=\"radio\" id=\"Exit\" value=\"Exit\" name=\"status\" formControlName=\"status\"\r\n                                                                                                                (click)=\"setRadio('status', 'Exit')\" />\r\n                                                                                                                <label for=\"Exit\">Exit</label>\r\n                                                                                                              </span>\r\n                                                                                                            </div>\r\n                                                                                                          </li>\r\n                                                                                                        </ul>\r\n                                                                                                        <li class=\"apply-btn\">\r\n                                                                                                          <button class=\"btn-gradient\" (click)=\"onFormSubmit(false,false,true)\" type=\"submit\">Apply</button>\r\n                                                                                                          <button class=\"btn-outline\" (click)=\"clearFilter()\">\r\n                                                                                                            Clear Filters\r\n                                                                                                          </button>\r\n                                                                                                        </li>\r\n                                                                                                      </form>\r\n                                                                                                    }\r\n                                                                                                  </div>\r\n                                                                                                }\r\n                                                                                                <button class=\"btn btn-gradient pull-right mr7 btn-repeat btnrepeatnew\" (click)=\"refetchData()\"\r\n                                                                                                  aria-label=\"repeat\">\r\n                                                                                                  <!-- <img src=\"../assets/images/repeat.png\"> -->\r\n                                                                                                  <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\">\r\n                                                                                                    <path id=\"arrows-rotate-solid\" d=\"M30.933,16a1.066,1.066,0,0,0-1.067,1.067v2.47a7.232,7.232,0,0,0-12.747,2,1.067,1.067,0,0,0,2.03.656,5.1,5.1,0,0,1,9-1.4h-1.48a1.067,1.067,0,0,0,0,2.133h4.267A1.066,1.066,0,0,0,32,21.867v-4.8A1.066,1.066,0,0,0,30.933,16Zm-.74,9.12a1.066,1.066,0,0,0-1.343.686,5.1,5.1,0,0,1-9,1.394h1.48a1.067,1.067,0,1,0,0-2.133H17.067A1.066,1.066,0,0,0,16,26.133v4.8a1.067,1.067,0,0,0,2.133,0v-2.47a7.207,7.207,0,0,0,12.717-2A1.012,1.012,0,0,0,30.193,25.12Z\" transform=\"translate(-16 -16)\" fill=\"#1B1464\"/>\r\n                                                                                                  </svg>\r\n                                                                                                </button>\r\n                                                                                              </div>\r\n                                                                                            }\r\n                                                                                          </div>\r\n                                                                                        } @else {\r\n                                                                                          <div class=\"pdt-10\">\r\n                                                                                          </div>\r\n                                                                                        }\r\n\r\n\r\n                                                                                        <div class=\"grids-section\">\r\n                                                                                          @if (config?.filter?.type=='option_strategy'|| (isSegmentAllowed == 'Y' && utils?.isAuthorized()) || ( !utils?.isAuthorized())) {\r\n                                                                                            <div class=\"pos-rel\">\r\n                                                                                              <div class=\"no-result-wrapper\" [hidden]=\"researchList?.length > 0 || isServiceHit\">\r\n                                                                                                <img src=\"../../../assets/images/no-order-message.png\" alt=\"No-Order-message\">\r\n                                                                                                <p class=\"no-result-title\">No Data Found</p>\r\n                                                                                              </div>\r\n                                                                                              <div class=\"\">\r\n                                                                                                @if (isServiceHit) {\r\n                                                                                                  <img class=\"loader\" src=\"../../../assets/images/loader.gif\" alt=\"Loading..\" />\r\n                                                                                                }\r\n                                                                                              </div>\r\n                                                                                            </div>\r\n                                                                                          }\r\n\r\n\r\n\r\n                                                                                          @if (config?.filter?.type!='option_strategy' &&((isSegmentAllowed == 'Y' && utils?.isAuthorized()) || ( !utils?.isAuthorized()))) {\r\n                                                                                            <ul class=\"grid-list\">\r\n                                                                                              @for (data of researchList; track data) {\r\n                                                                                                <!--   *ngIf=\"(config?.filter?.type=='experts') || (config?.filter?.type=='signals')\"  -->\r\n                                                                                                <li\r\n                                                                                                  class=\"{{(config?.filter?.type=='experts')?(((data?.status_flag=='6')||(data?.status_flag=='0'))?'down-m':((data?.status_flag=='3'||data?.status_flag=='4'))?'primary-m':(data?.status_flag=='7')?'balance':(data?.status_flag=='1')?'up':'balance'):(data?.statusClass?(data?.statusClass):'')}}\">\r\n                                                                                                  <!-- <div id=\"tag-container\" style=\"display: none;\"> -->\r\n                                                                                                  <!-- <span class=\"tag-top st-of-month\"><em>🤑</em> Stock of the month</span> -->\r\n                                                                                                  <span id=\"tag-container\" style=\"display: none;\">\r\n                                                                                                    @if (config?.filter?.type=='experts' && data?.expertTag) {\r\n                                                                                                      <span\r\n                                                                                                        class=\"tag-top {{data?.expertTagClass}}\"><em>{{data?.tag==='stock_of_the_month'?'🤑':data?.tag==='hot_pick_for_today'?'🔥':data?.tag==='momentum_pick'?'🤯':data?.tag==='hero_ya_zero'?'😎':''}}</em>\r\n                                                                                                      {{data?.expertTag}}</span>\r\n                                                                                                    }\r\n                                                                                                  </span>\r\n                                                                                                <!-- </div> -->\r\n                                                                                                <div class=\"top-section\">\r\n                                                                                                  <div class=\"top-s-left\">\r\n                                                                                                    @if ((config?.filter?.type=='experts') || (config?.filter?.type=='signals')) {\r\n                                                                                                      <h6 class=\"ic-txt\" >\r\n                                                                                                        @if (data?.status!=='Achieved') {\r\n                                                                                                          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"7.5\" height=\"20\"\r\n                                                                                                            viewBox=\"0 0 7.5 14\">\r\n                                                                                                            <path id=\"Path_26641\" data-name=\"Path 26641\" d=\"M12.75,5l-4.5,8.5h3.14V19l4.36-8.5h-3Z\"\r\n                                                                                                              transform=\"translate(-8.25 -5)\" fill=\"#093\" />\r\n                                                                                                            </svg>\r\n                                                                                                          }\r\n                                                                                                          @if (data?.status=='Achieved') {\r\n                                                                                                            <img src=\"../../../assets/images/blue-theme/achieve.png\"\r\n                                                                                                              class=\"achieved-img\" width=\"20p\" height=\"20\">\r\n                                                                                                          }\r\n                                                                                                          <!--  <pre>{{data|json}}</pre> -->\r\n                                                                                                          <span>\r\n                                                                                                            {{(data?.status=='Pending'?'Good to Enter':data?.status=='Achieved'?'Target\r\n                                                                                                            Achieved':data?.status=='Stopped out'?'Stop Loss Hit':data?.status)||''}}{{\r\n                                                                                                            (config?.filter?.type != 'experts' && data?.matched_price)?(\" @ \"+((data?.matched_price/100)\r\n                                                                                                            |condense:'1.2-2')): ((data?.matched_price && config?.filter?.type == 'experts'&&\r\n                                                                                                            data?.status_flag!='6'&& data?.status_flag!='1')?(' @\r\n                                                                                                            '+((data?.status_flag=='4'&&(config?.filter?.trade=='CDS'))?(data?.matched_price\r\n                                                                                                            |condense:'1.4-4'):(data?.matched_price |condense:'1.2-2'))):(config?.filter?.type ==\r\n                                                                                                            'experts'&&data?.bookedProfitPriceInPaise && data?.status_flag!='6'&& data?.status_flag!='1')?(' @\r\n                                                                                                            '+((data?.bookedProfitPriceInPaise/100) |condense:'1.2-2')):'')}}\r\n                                                                                                          </span>\r\n                    <i ngx-tooltip tooltipTitle=\"{{(researchTerm[((data?.status=='Pending'?'Good to Enter':data?.status=='Achieved'?'Target\r\n                    Achieved':data?.status=='Stopped out'?'Stop Loss Hit':data?.status))])?(researchTerm[((data?.status=='Pending'?'Good to Enter':data?.status=='Achieved'?'Target\r\n                    Achieved':data?.status=='Stopped out'?'Stop Loss Hit':data?.status))]):((data?.status=='Pending'?'Good to Enter':data?.status=='Achieved'?'Target\r\n                    Achieved':data?.status=='Stopped out'?'Stop Loss Hit':data?.status))}}\"\r\n                                                                                                          tooltipPlacement=\"top\" tooltipType=\"tooltip\" class=\"fa fa-info-circle ml-4px\" aria-hidden=\"true\"></i>\r\n                                                                                                        </h6>\r\n                                                                                                        <!--  <h6 class=\"date-top\" *ngIf=\"config?.filter?.type=='experts'\">Published at {{data?.published_date}}</h6> -->\r\n                                                                                                        @if ( (data?.status=='Pending' || data?.status=='Active')) {\r\n                                                                                                          <h6 class=\"date-top\">Published at\r\n                                                                                                          {{(data?.published_date ) || 'NA'}}</h6>\r\n                                                                                                        }\r\n                                                                                                        @if ( (data?.status!='Pending' && data?.status!='Active') && (data?.updated_date||data?.updated_datetime)) {\r\n                                                                                                          <h6\r\n                                                                                                            class=\"date-top\">Updated at\r\n                                                                                                          {{(data?.updated_date||data?.updated_datetime) || 'NA'}}</h6>\r\n                                                                                                        }\r\n                                                                                                        <!-- <h6 class=\"date-top\" *ngIf=\"config?.filter?.type=='signals'\">Published At {{(data?.published_date | date:'medium') || 'NA'}}</h6>\r\n                                                                                                        <h6 class=\"date-top\" *ngIf=\"config?.filter?.type=='signals'\">Updated At\r\n                                                                                                        {{(data?.updated_date | date:'medium') || 'NA'}}</h6> -->\r\n                                                                                                      }\r\n                                                                                                      @if ((config?.filter?.type=='fundamental')) {\r\n                                                                                                        <!--                       <pre>{{data|json}}</pre> -->\r\n                                                                                                        <!-- <span> {{(data?.LTP )&& data?.initial_cmp ? (((((data?.LTP ) - data?.initial_cmp)/data?.initial_cmp)*100 | value: \"1.2-2\" ) + '%'):'-'}} returns since initiated</span>  -->\r\n                                                                                                        <div class=\"text-v-center\">\r\n                                                                                                          @if ((data?.LTP )) {\r\n                                                                                                            <span\r\n                                                                                                              [class]=\" (((data?.LTP ) - data?.initial_cmp)/data?.initial_cmp)>0?'up-t':(((data?.LTP ) - data?.initial_cmp)/data?.initial_cmp)<0?'down-t':''\">\r\n                                                                                                              {{ (((((data?.LTP ) - data?.initial_cmp)/data?.initial_cmp)*100 | value: \"1.2-2\" ) + '%')}}\r\n                                                                                                            returns since initiated</span>\r\n                                                                                                          }\r\n                                                                                                        </div>\r\n                                                                                                        <!--  {{(data?.LTP | segment: data.segment_id)&& data?.priceData?.entry_price?.value ? (((data?.priceData?.target?.value - data?.priceData?.entry_price?.value)/data?.priceData?.entry_price?.value)*100 | value: \"1.2-2\"}} %):'-' -->\r\n                                                                                                      }\r\n                                                                                                    </div>\r\n                                                                                                    <div class=\"top-s-right\">\r\n                                                                                                      <div class=\"btn-first\">\r\n                                                                                                        @if (!data.isNonScrip) {\r\n                                                                                                          <div class=\"padding-0 clearfix add-remove-section\">\r\n                                                                                                            @if (!data?.isAdded) {\r\n                                                                                                              <div dropdown>\r\n                                                                                                                <button dropdown-open class=\"rounded-btn btn add\" ngx-tooltip tooltipTitle=\"Add to Watchlist\"\r\n                                                                                                                  tooltipPlacement=\"top\" tooltipType=\"tooltip\" (click)=\"openPreLogin()\">\r\n                                                                                                                  <!-- <i class=\"icon-Watchlist\"></i> -->\r\n                                                                                                                  <svg _ngcontent-wbu-c17=\"\" class=\"ico-set\" height=\"17.244\" id=\"watchlist\" viewBox=\"0 0 18.716 17.244\" width=\"18.716\" xmlns=\"http://www.w3.org/2000/svg\"><g _ngcontent-wbu-c17=\"\" data-name=\"watchlist\" fill=\"none\" id=\"watchlist-2\" stroke-linecap=\"round\" transform=\"translate(-10365.284 -14323.498)\"><path _ngcontent-wbu-c17=\"\" d=\"M10374.717,14327l4.643-3.5,4.641,3.5v5.71l-9.283,8.032-9.433-8.032V14327l4.716-3.5Z\" stroke=\"none\"></path><path _ngcontent-wbu-c17=\"\" d=\"M 10370 14325.3662109375 L 10366.7841796875 14327.7548828125 L 10366.7841796875 14332.017578125 L 10374.708984375 14338.765625 L 10382.5 14332.0244140625 L 10382.5 14327.7470703125 L 10379.359375 14325.376953125 L 10374.7236328125 14328.873046875 L 10370 14325.3662109375 M 10370 14323.498046875 L 10374.716796875 14327 L 10379.359375 14323.498046875 L 10384 14327 L 10384 14332.7099609375 L 10374.716796875 14340.7421875 L 10365.2841796875 14332.7099609375 L 10365.2841796875 14327 L 10370 14323.498046875 Z\" fill=\"#1B1464\" stroke=\"none\"></path></g></svg>\r\n                                                                                                                </button>\r\n                                                                                                                @if ((shared?.userId && shared?.userId != 'guest' && !this.isNonEqUser)) {\r\n                                                                                                                  <ul class=\"dropdown-menu\" role=\"menu\">\r\n                                                                                                                    <li (click)=\"addRemoveWatchList(data, 1)\">\r\n                                                                                                                      <a class=\"animate\">{{\r\n                                                                                                                        watchlistNames[1] && watchlistNames[1] != 1\r\n                                                                                                                        ? watchlistNames[1] + \"(1)\"\r\n                                                                                                                        : \"Watchlist 1\"\r\n                                                                                                                      }}</a>\r\n                                                                                                                    </li>\r\n                                                                                                                    <li (click)=\"addRemoveWatchList(data, 2)\">\r\n                                                                                                                      <a class=\"animate\">{{\r\n                                                                                                                        watchlistNames[2] && watchlistNames[2] != 2\r\n                                                                                                                        ? watchlistNames[2] + \"(2)\"\r\n                                                                                                                        : \"Watchlist 2\"\r\n                                                                                                                      }}</a>\r\n                                                                                                                    </li>\r\n                                                                                                                    <li (click)=\"addRemoveWatchList(data, 3)\">\r\n                                                                                                                      <a class=\"animate\">{{\r\n                                                                                                                        watchlistNames[3] && watchlistNames[3] != 3\r\n                                                                                                                        ? watchlistNames[3] + \"(3)\"\r\n                                                                                                                        : \"Watchlist 3\"\r\n                                                                                                                      }}</a>\r\n                                                                                                                    </li>\r\n                                                                                                                    <li (click)=\"addRemoveWatchList(data, 4)\">\r\n                                                                                                                      <a class=\"animate\">{{\r\n                                                                                                                        watchlistNames[4] && watchlistNames[4] != 4\r\n                                                                                                                        ? watchlistNames[4] + \"(4)\"\r\n                                                                                                                        : \"Watchlist 4\"\r\n                                                                                                                      }}</a>\r\n                                                                                                                    </li>\r\n                                                                                                                    <li (click)=\"addRemoveWatchList(data, 5)\">\r\n                                                                                                                      <a class=\"animate\">{{\r\n                                                                                                                        watchlistNames[5] && watchlistNames[5] != 5\r\n                                                                                                                        ? watchlistNames[5] + \"(5)\"\r\n                                                                                                                        : \"Watchlist 5\"\r\n                                                                                                                      }}</a>\r\n                                                                                                                    </li>\r\n                                                                                                                  </ul>\r\n                                                                                                                }\r\n                                                                                                              </div>\r\n                                                                                                            }\r\n                                                                                                            @if (data?.isAdded) {\r\n                                                                                                              <button [disabled]=\"isButtonDisabled\"\r\n                                                                                                                class=\"btn-gradient rounded-btn btn add-remove\" (click)=\"addRemoveWatchList(data)\"\r\n                                                                                                                [class.bg-green]=\"isAdded\" ngx-tooltip tooltipTitle=\"Remove from Watchlist\" tooltipPlacement=\"top\"\r\n                                                                                                                tooltipType=\"tooltip\">\r\n                                                                                                                <span>{{ data?.scripData?.ProfileId }}</span>\r\n                                                                                                              </button>\r\n                                                                                                            }\r\n                                                                                                          </div>\r\n                                                                                                        }\r\n                                                                                                        @if (!data?.isNonScrip) {\r\n                                                                                                          <button class=\"rounded-btn\" ngx-tooltip tooltipTitle=\"Go To Company Page\"\r\n                                                                                                            (click)=\"gotoCompanyPage(data)\" tooltipPlacement=\"top\"\r\n                                                                                                            tooltipType=\"tooltip\"><i class=\"icon-info\"></i></button>\r\n                                                                                                          }\r\n                                                                                                          <!-- <button class=\"rounded-btn\"  ngx-tooltip tooltipTitle=\"Go To Detail Page\" (click)=\"goToDetails(data)\" *ngIf=\"false && config?.filter?.type=='experts'\"\r\n                                                                                                          tooltipPlacement=\"top\" tooltipType=\"tooltip\"><i class=\"icon-Details\"></i></button> -->\r\n                                                                                                          <button class=\"rounded-btn filter_btn1\" ngx-tooltip tooltipTitle=\"Go To Detail Page\"\r\n                                                                                                            (click)=\"OpenDrawer(data,true)\" tooltipPlacement=\"top\" tooltipType=\"tooltip\"><i\r\n                                                                                                          class=\"icon-Details\"></i></button>\r\n                                                                                                          @if (!data?.isNonScrip) {\r\n                                                                                                            <button class=\"rounded-btn\" ngx-tooltip tooltipTitle=\"Set Alert\" (click)=\"addPriceAlert(data)\"\r\n                                                                                                              tooltipPlacement=\"top\" tooltipType=\"tooltip\">\r\n                                                                                                              <!-- <i\r\n                                                                                                            class=\"icon-Price-Alert\"></i> -->\r\n                                                                                                            <svg _ngcontent-sdu-c13=\"\" class=\"ico-set\" data-name=\"price alert\" height=\"19\" id=\"price_alert\" viewBox=\"0 0 19 19\" width=\"19\" xmlns=\"http://www.w3.org/2000/svg\"><path _ngcontent-sdu-c13=\"\" d=\"M0,0H19V19H0Z\" data-name=\"Path 59583\" fill=\"none\" id=\"Path_59583\"></path><path _ngcontent-sdu-c13=\"\" d=\"M8.75,4.583a1.583,1.583,0,1,1,3.167,0,5.542,5.542,0,0,1,3.167,4.75v2.375a3.167,3.167,0,0,0,1.583,2.375H4a3.167,3.167,0,0,0,1.583-2.375V9.333A5.542,5.542,0,0,1,8.75,4.583\" data-name=\"Path 59584\" fill=\"none\" id=\"Path_59584\" stroke=\"#1B1464\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" transform=\"translate(-0.833 -0.625)\"></path><path _ngcontent-sdu-c13=\"\" d=\"M9,17v.792a2.375,2.375,0,0,0,4.75,0V17\" data-name=\"Path 59585\" fill=\"none\" id=\"Path_59585\" stroke=\"#1B1464\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" transform=\"translate(-1.875 -3.542)\"></path><path _ngcontent-sdu-c13=\"\" d=\"M20.418,5.951A8.748,8.748,0,0,0,18.206,3\" data-name=\"Path 59586\" fill=\"none\" id=\"Path_59586\" stroke=\"#1B1464\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" transform=\"translate(-3.793 -0.625)\"></path><path _ngcontent-sdu-c13=\"\" d=\"M3,5.951A8.748,8.748,0,0,1,5.21,3\" data-name=\"Path 59587\" fill=\"none\" id=\"Path_59587\" stroke=\"#1B1464\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" transform=\"translate(-0.625 -0.625)\"></path></svg>\r\n                                                                                                          </button>\r\n                                                                                                        }\r\n                                                                                                      </div>\r\n                                                                                                      <div class=\"\">\r\n                                                                                                        <!--  (data?.call_type=='buy'?'buy':data?.call_type=='sell'?'sell':'grey') -->\r\n                                                                                                        <!-- <button class=\"btn-buy btn {{config?.filter?.type=='experts'?((data?.status_flag != null && ((data?.call_type | lowercase).indexOf('buy')>-1 || (data?.call_type | lowercase).indexOf('subscribe')>-1)) ? 'inactiveBuy' : ((data?.status_flag != null) && (data?.call_type | lowercase).indexOf('sell')>-1) ? 'inactiveSell': ((data?.call_type | lowercase).indexOf('buy')>-1 || (data?.call_type | lowercase).indexOf('subscribe')>-1)?'buy':(data?.call_type | lowercase).indexOf('sell')>-1?'sell':'grey'):(data?.call_type=='buy'?'buy':data?.call_type=='sell'?'sell':'grey')}}\"  -->\r\n                                                                                                        @if (data?.call_type) {\r\n                                                                                                          <button\r\n                                                                                                            class=\"btn-buy btn  {{(((data?.call_type | lowercase)=='buy'||(data?.call_type | lowercase)=='buy, add on dips'||(data?.call_type | lowercase)=='buy on dips'||(data?.call_type | lowercase)=='subscribe' || (data?.call_type | lowercase)=='re-iterate buy')?'buy':((data?.call_type | lowercase)=='sell'||(data?.call_type | lowercase)=='avoid')?'sell':'grey')}}\"\r\n                                                                                                            (click)=\"OpenDrawer(data)\"  [ngClass]=\"{ 'disabled-btn': (!data?.isAllowed||data?.isExpired)}\" [disabled]=\"(!data?.isAllowed||data?.isExpired)\">\r\n                                                                                                            {{ data?.call_type }}\r\n                                                                                                          </button>\r\n                                                                                                        }\r\n                                                                                                      </div>\r\n                                                                                                    </div>\r\n                                                                                                  </div>\r\n                                                                                                  <div class=\"{{(config?.filter?.type=='fundamental')?'middle-sec':'middle-sec'}}\">\r\n                                                                                                    <div class=\"middle-se-top\">\r\n                                                                                                      @if ((config?.filter?.type=='fundamental')) {\r\n                                                                                                        <div class=\"se-left-bottom mb-25\">\r\n                                                                                                          <h4 class=\"comp-name\">\r\n                                                                                                            <small>\r\n                                                                                                              <h6 class=\"mt-0\">Reco Date</h6>\r\n                                                                                                            </small>\r\n                                                                                                            <h6>{{(data?.reco_date ) || 'NA'}}</h6>\r\n                                                                                                            <!--    <span class=\"small \">  </span> -->\r\n                                                                                                          </h4>\r\n                                                                                                          @if (data?.status!='Achieved') {\r\n                                                                                                            <h4 class=\"price Buy\">\r\n                                                                                                              <small>\r\n                                                                                                                <h6 class=\"mt-0\">Potential Returns</h6>\r\n                                                                                                              </small>\r\n                                                                                                              <!--   <pre>{{data?.priceData |json}}</pre> -->\r\n                                                                                                              <span > {{data?.priceData?.target?.value&& ( data?.LTP ) ?\r\n                                                                                                                ((((data?.priceData?.target?.value - ( data?.LTP ))/( data?.LTP ))*100 | value: \"1.2-2\" ) +\r\n                                                                                                              '%'):'-'}}</span>\r\n                                                                                                            </h4>\r\n                                                                                                          }\r\n                                                                                                          @if (data?.status=='Achieved') {\r\n                                                                                                            <h4 class=\"price Buy\">\r\n                                                                                                              <small>\r\n                                                                                                                <h6 class=\"mt-0\">{{data?.priceData?.target?.value&& ( data?.priceData?.entry_price?.value ) ?\r\n                                                                                                                  ((((data?.priceData?.target?.value - ( data?.priceData?.entry_price?.value ))/(\r\n                                                                                                                data?.priceData?.entry_price?.value ))*100 | value: \"1.2-2\" ) + '%'):'-'}} returns</h6>\r\n                                                                                                              </small>\r\n                                                                                                              <!--   <pre>{{data?.priceData |json}}</pre> -->\r\n                                                                                                              <h5 class=\"primary-col d-flex\">\r\n                                                                                                                <img src=\"../../../assets/images/blue-theme/achieve.png\" class=\"achieved-img\" width=\"20\" height=\"20\">\r\n                                                                                                                <!--       <img class=\"fa-beat\" src=\"assets/icons/medal2.svg\"  style=\"width: 18px;\"\r\n                                                                                                                alt=\"\" >  -->\r\n                                                                                                                Target Achieved\r\n                                                                                                              </h5>\r\n                                                                                                            </h4>\r\n                                                                                                          }\r\n                                                                                                        </div>\r\n                                                                                                      }\r\n                                                                                                      @if ((config?.filter?.type!='fundamental')) {\r\n                                                                                                        <div class=\"se-left-top\">\r\n                                                                                                          <div class=\"cust-details\">\r\n                                                                                                            <h6 class=\"cust-name\">{{(data?.subcategory_name )||''}}</h6>\r\n                                                                                                            <!--  {{data|json}} -->\r\n                                                                                                            <!-- <span class=\"help-desc\"><img src=\"assets/images/research-report/baseline-help_outline-24px.svg\"\r\n                                                                                                          alt=\"Active\" class=\"img-responsive icon-set\"></span> -->\r\n                                                                                                          @if (data?.title1) {\r\n                                                                                                            <span class=\"help-desc\">\r\n                                                                                                              <!-- <i class=\"fa fa-question-circle pl-2\"  popoverTitle=\"{{data?.title1}}\"  outsideClick=\"true\" placement=\"right\"   popover=\"{{data?.desc}}\"></i> -->\r\n                                                                                                              <img src=\"assets/images/research-report/tooltip-ico.svg\" alt=\"\" class=\"img-responsive icon-set\"\r\n                                                                                                                popoverTitle=\"{{data?.title1}}\" triggers=\"mouseenter:mouseleave\" outsideClick=\"true\"\r\n                                                                                                                placement=\"right\" [popover]=\"data?.desc\" width=\"16\" height=\"16\">\r\n                                                                                                              </span>\r\n                                                                                                            }\r\n                                                                                                            <!--   {{data|json}} -->\r\n                                                                                                            @if (config?.filter?.type=='experts') {\r\n                                                                                                              <h6 class=\"cust-post\">\r\n                                                                                                                {{data?.research_type&&data?.research_type=='Medium To Long Term'?'Long\r\n                                                                                                              Term':data?.research_type}}</h6>\r\n                                                                                                            }\r\n                                                                                                            @if (config?.filter?.type!='experts') {\r\n                                                                                                              <h6 class=\"cust-post\">{{data?.research_type}}</h6>\r\n                                                                                                            }\r\n                                                                                                          </div>\r\n                                                                                                          <div class=\"middle-se-right\">\r\n                                                                                                            @if (config?.filter?.type=='experts') {\r\n                                                                                                              <h6 class=\"profit\">\r\n                                                                                                                @if (data?.matched_price && data?.priceData?.entry_price?.value) {\r\n                                                                                                                  <span\r\n                                                                                                                    class=\"{{((data?.call_type | lowercase)=='buy'||(data?.call_type | lowercase)=='subscribe')?((((data?.matched_price-data?.priceData?.entry_price?.value)/data?.priceData?.entry_price?.value)*100)>0?'grn-text':'red-txt'):((((data?.priceData?.entry_price?.value-data?.matched_price)/data?.priceData?.entry_price?.value)*100)>0?'grn-text':'red-txt')}}\"\r\n                                                                                                                    >\r\n                                                                                                                    {{((data?.call_type | lowercase)=='buy'||(data?.call_type |\r\n                                                                                                                    lowercase)=='subscribe')?((((data?.matched_price-data?.priceData?.entry_price?.value)/data?.priceData?.entry_price?.value)*100)\r\n                                                                                                                    | number:\r\n                                                                                                                    '1.2-2'):((((data?.priceData?.entry_price?.value-data?.matched_price)/data?.priceData?.entry_price?.value)*100)|\r\n                                                                                                                    number: '1.2-2')}}%\r\n                                                                                                                  </span>\r\n                                                                                                                  } @if (data?.matched_price && data?.priceData?.entry_price?.value) {\r\n                                                                                                                  <span class=\"profit-label\"\r\n                                                                                                                    > {{((data?.call_type |\r\n                                                                                                                    lowercase)=='buy'||(data?.call_type |\r\n                                                                                                                  lowercase)=='subscribe')?((((data?.matched_price-data?.priceData?.entry_price?.value)/data?.priceData?.entry_price?.value)*100)>0?'Profit':'Loss'):((((data?.priceData?.entry_price?.value-data?.matched_price)/data?.priceData?.entry_price?.value)*100)>0?'Profit':'Loss')}}</span>\r\n                                                                                                                }\r\n                                                                                                              </h6>\r\n                                                                                                            }\r\n                                                                                                            <!-- <h6 class=\"profit\"  *ngIf=\"config?.filter?.type=='experts' &&  data?.call_type=='Sell'\">\r\n                                                                                                            <span class=\"{{((0>(data?.matched_price-data?.priceData?.entry_price?.value)/data?.priceData?.entry_price?.value)*100)?'grn-text':'red-txt'}}\" *ngIf=\"data?.matched_price && data?.priceData?.entry_price?.value\">\r\n                                                                                                              {{(((data?.matched_price-data?.priceData?.entry_price?.value)/data?.priceData?.entry_price?.value)*100)  | value:'minus-plus' | number: '1.2-2'}}%\r\n                                                                                                            </span>\r\n                                                                                                            <span class=\"profit-label\" *ngIf=\"data?.matched_price && data?.priceData?.entry_price?.value\"> {{0>(((data?.matched_price-data?.priceData?.entry_price?.value)/data?.priceData?.entry_price?.value)*100)?'Profit':'Loss'}}</span>\r\n                                                                                                          </h6> -->\r\n                                                                                                          @if (config?.filter?.type=='signals' && (data?.iStatusType!=1)) {\r\n                                                                                                            <h6 class=\"profit\">\r\n                                                                                                              @if (data?.profitPercentage) {\r\n                                                                                                                <span class=\"{{(data?.profitPercentage)>0?'grn-text':'red-txt'}}\">\r\n                                                                                                                  {{(data?.profitPercentage) | number: '1.2-2'}}%\r\n                                                                                                                </span>\r\n                                                                                                                } @if ((data?.profitPercentage)) {\r\n                                                                                                                <span class=\"profit-label\">\r\n                                                                                                                {{(data?.profitPercentage)>0?'Profit':'Loss'}}</span>\r\n                                                                                                              }\r\n                                                                                                            </h6>\r\n                                                                                                          }\r\n                                                                                                        </div>\r\n                                                                                                      </div>\r\n                                                                                                    }\r\n                                                                                                    <div class=\"se-left-bottom\">\r\n                                                                                                      <h4 class=\"comp-name\">\r\n                                                                                                        @if (config?.filter.trade != 'FO' || config?.filter?.type != 'experts') {\r\n                                                                                                          <span> {{data?.scrip_name\r\n                                                                                                            | value:'replace-underscore'}} <span class=\"small d-inline\">{{data?.segmentName}}</span></span>\r\n                                                                                                          }\r\n                                                                                                          @if (config?.filter.trade == 'FO' && config?.filter?.type == 'experts') {\r\n                                                                                                            <span> {{data?.scrip_name\r\n                                                                                                              | value:'replace-underscore-2'}} <span class=\"small d-inline\">{{data?.segmentName}}</span></span>\r\n                                                                                                            }\r\n                                                                                                            @if (config?.filter.trade != 'FO' || config?.filter?.type != 'experts') {\r\n                                                                                                              <span class=\"small\">\r\n                                                                                                              {{data?.scrip_sec_desc}}</span>\r\n                                                                                                            }\r\n                                                                                                            @if (config?.filter.trade == 'FO' && config?.filter?.type == 'experts') {\r\n                                                                                                              <span class=\"small\">\r\n                                                                                                              {{data?.scrip_name | value:'replace-underscore-3'}}</span>\r\n                                                                                                            }\r\n                                                                                                            <!--   <span class=\"small\" *ngIf=\"config?.filter.trade != 'EQ'\">   {{data?.scrip_name | value:'replace-underscore-date'}}</span> -->\r\n                                                                                                          </h4>\r\n                                                                                                          @if (!data.isNonScrip && !data?.isExpired || config?.filter?.type=='fundamental') {\r\n                                                                                                            <h4 class=\"profit\" class=\"price text-right {{ data.call_type }}\"\r\n                                                                                                              >\r\n                                                                                                              <span  [class.bg-up]=\"data?.prevChange > 0\" [class.bg-down]=\"data?.prevChange < 0\">{{\r\n                                                                                                              data?.LTP | segment: data.segment_id }}</span>\r\n                                                                                                              <small> <h6 class=\"mgb-zero {{ data.class+'-t' }}\">{{\r\n                                                                                                                ((config?.filter?.trade=='CDS')?(data.Change | value: \"1.4-4\"):(data.Change | value: \"1.2-2\"))\r\n                                                                                                                }}\r\n                                                                                                                ({{\r\n                                                                                                                data.ChangePer | value: \"1.2-2\"\r\n                                                                                                                }}\r\n                                                                                                                @if (data?.ChangePer) {\r\n                                                                                                                  %\r\n                                                                                                                  })\r\n                                                                                                                </h6></small>\r\n                                                                                                              </h4>\r\n                                                                                                            }\r\n                                                                                                            @if (data?.isExpired && !config?.filter?.type=='fundamental') {\r\n                                                                                                              <h4 class=\"profit\" class=\"price\">\r\n                                                                                                                <small> Expired </small>\r\n                                                                                                              </h4>\r\n                                                                                                            }\r\n                                                                                                          </div>\r\n                                                                                                        </div>\r\n                                                                                                      </div>\r\n                                                                                                      <div class=\"report-pricing-buy \" [class.no-line]=\"config?.filter?.type=='fundamental'\">\r\n                                                                                                        @if (data?.priceData?.stop_loss) {\r\n                                                                                                          <div class=\"prc-buy-desc loss-tr\">\r\n                                                                                                            <h6>Stop Loss</h6>\r\n                                                                                                            <h4>{{(config?.filter?.trade=='CDS')?((data?.priceData?.stop_loss?.value||0) | number:\r\n                                                                                                              '1.4-4'):((data?.priceData?.stop_loss?.value||0) | number: '1.2-2')}}\r\n                                                                                                              <!-- <small class=\"red-txt\"> 5.65<em>*</em></small> -->\r\n                                                                                                            </h4>\r\n                                                                                                          </div>\r\n                                                                                                        }\r\n                                                                                                        @if (data?.priceData?.cmp) {\r\n                                                                                                          <div class=\"prc-buy-desc ent-prize\">\r\n                                                                                                            <h6>Entry Price</h6>\r\n                                                                                                            <h4>{{(config?.filter?.trade=='CDS')?(((data?.priceData?.cmp?.value||0) | number:\r\n                                                                                                              '1.4-4')):((data?.priceData?.cmp?.value||0) | number: '1.2-2')}}\r\n                                                                                                              <!-- <small>-5.65<em>*</em></small> -->\r\n                                                                                                            </h4>\r\n                                                                                                          </div>\r\n                                                                                                        }\r\n                                                                                                        @if (data?.priceData?.entry_price) {\r\n                                                                                                          <div class=\"prc-buy-desc ent-prize\">\r\n                                                                                                            <h6>Entry Price</h6>\r\n                                                                                                            <h4>{{(config?.filter?.trade=='CDS')?(((data?.priceData?.entry_price?.value||0) | number:\r\n                                                                                                              '1.4-4')):((data?.priceData?.entry_price?.value||0) | number: '1.2-2')}}\r\n                                                                                                              <!-- <small>-5.65<em>*</em></small> -->\r\n                                                                                                            </h4>\r\n                                                                                                          </div>\r\n                                                                                                        }\r\n                                                                                                        @if (data?.priceData?.target) {\r\n                                                                                                          <div class=\"prc-buy-desc trgt-price\">\r\n                                                                                                            <h6> {{(config?.filter?.type=='fundamental')?'Potential':'Target Price' }}\r\n                                                                                                              <!--  <i class=\"icon-Details pl-2\"  *ngIf=\"config?.filter.type === 'signals'\" outsideClick=\"true\" placement=\"right\"  [popover]=\"popTemplate\" ></i> -->\r\n                                                                                                            </h6>\r\n                                                                                                            <h4>{{(config?.filter?.trade=='CDS')?(((data?.priceData?.target?.value||0) | number:\r\n                                                                                                              '1.4-4')):((data?.priceData?.target?.value||0) | number: '1.2-2')}}\r\n                                                                                                              <!-- <small class=\"grn-text\">-5.65<em>*</em></small> -->\r\n                                                                                                            </h4>\r\n                                                                                                            <ng-template #popTemplate>\r\n                                                                                                              <div class=\" report-pricing-buy-scnd-row border-bottom-none report-pricing-buy2\">\r\n                                                                                                                <div class=\"prc-buy-desc trgt-price trgt-price2\">\r\n                                                                                                                  <h6>2nd Target</h6>\r\n                                                                                                                  <h4>{{(data?.priceData?.target2?.value)?((data?.priceData?.target2?.value||0) | number:\r\n                                                                                                                  '1.2-2'):'-'}}</h4>\r\n                                                                                                                </div>\r\n                                                                                                                <div class=\"prc-buy-desc trgt-price trgt-price2\">\r\n                                                                                                                  <h6>3rd Target</h6>\r\n                                                                                                                  <h4>{{(data?.priceData?.target3?.value)?((data?.priceData?.target3?.value||0) | number:\r\n                                                                                                                  '1.2-2'):'-'}}</h4>\r\n                                                                                                                </div>\r\n                                                                                                              </div>\r\n                                                                                                            </ng-template>\r\n                                                                                                          </div>\r\n                                                                                                        }\r\n                                                                                                        @if (config?.filter.type === 'signals') {\r\n                                                                                                          <div class=\"prc-buy-desc trgt-price\">\r\n                                                                                                            <h6>2nd Target</h6>\r\n                                                                                                            <h4>{{(data?.priceData?.target2?.value)?((data?.priceData?.target2?.value||0) | number: '1.2-2'):'-'}}\r\n                                                                                                            </h4>\r\n                                                                                                          </div>\r\n                                                                                                        }\r\n                                                                                                        @if (config?.filter.type === 'signals') {\r\n                                                                                                          <div class=\"prc-buy-desc trgt-price\">\r\n                                                                                                            <h6>3rd Target</h6>\r\n                                                                                                            <h4>{{(data?.priceData?.target3?.value)?((data?.priceData?.target3?.value||0) | number: '1.2-2'):'-'}}\r\n                                                                                                            </h4>\r\n                                                                                                          </div>\r\n                                                                                                        }\r\n                                                                                                        @if (data?.priceData?.holding_period && config?.filter.type !== 'fundamental') {\r\n                                                                                                          <div class=\"prc-buy-desc trgt-price\"\r\n                                                                                                            >\r\n                                                                                                            <h6>Holding Period</h6>\r\n                                                                                                            <h4>{{(data?.priceData?.holding_period?.value||\"\")}}\r\n                                                                                                              <!-- <small class=\"grn-text\">-5.65<em>*</em></small> -->\r\n                                                                                                            </h4>\r\n                                                                                                          </div>\r\n                                                                                                        }\r\n                                                                                                        @if (data?.report_expiry && config?.filter.type == 'fundamental') {\r\n                                                                                                          <div class=\"prc-buy-desc trgt-price\">\r\n                                                                                                            <h6>Expected By</h6>\r\n                                                                                                            <h4>{{(data?.report_expiry ||\"\")}}\r\n                                                                                                              <!-- <small class=\"grn-text\">-5.65<em>*</em></small> -->\r\n                                                                                                            </h4>\r\n                                                                                                          </div>\r\n                                                                                                        }\r\n                                                                                                      </div>\r\n                                                                                                    </li>\r\n                                                                                                  }\r\n                                                                                                </ul>\r\n                                                                                              }\r\n\r\n                                                                                              @if (config?.filter?.type=='option_strategy'  && (isOSClientFromApp ? (isSegmentAllowed == 'Y') : ((isSegmentAllowed == 'Y' && utils?.isAuthorized()) || ( !utils?.isAuthorized())))) {\r\n                                                                                                <ul class=\"grid-list strategy-sec\">\r\n                                                                                                  @for (data of researchList; track data) {\r\n                                                                                                    <!--   *ngIf=\"(config?.filter?.type=='experts') || (config?.filter?.type=='signals')\"  -->\r\n                                                                                                    <li\r\n                                                                                                      class=\"{{(((data?.status=='exit')||(data?.status=='exit_at_cost')  ||(data?.status=='sl_triggered')||(data?.status=='stopped_out'))?'down-m':((data?.status=='book_profit')||(data?.status=='book_full_profit')||(data?.status=='book_part_profit')||(data?.status=='book_part_profit_with_trail_sl_to_cost'))?'primary-m':(data?.status=='active' || data?.status=='pending')?'balance':(data?.status=='target_achieved')?'up':'balance')}}\">\r\n                                                                                                      <div class=\"top-section\">\r\n                                                                                                        <div class=\"top-s-left\">\r\n                                                                                                          <ng-container >\r\n                                                                                                            <h6 class=\"ic-txt\" >\r\n                                                                                                              @if (data?.status!=='target_achieved') {\r\n                                                                                                                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"7.5\" height=\"20\"\r\n                                                                                                                  viewBox=\"0 0 7.5 14\">\r\n                                                                                                                  <path id=\"Path_26641\" data-name=\"Path 26641\" d=\"M12.75,5l-4.5,8.5h3.14V19l4.36-8.5h-3Z\"\r\n                                                                                                                    transform=\"translate(-8.25 -5)\" fill=\"#093\" />\r\n                                                                                                                  </svg>\r\n                                                                                                                }\r\n                                                                                                                @if (data?.status=='target_achieved') {\r\n                                                                                                                  <img src=\"../../../assets/images/blue-theme/achieve.png\"\r\n                                                                                                                    class=\"achieved-img\" height=\"20\" width=\"20\">\r\n                                                                                                                }\r\n                                                                                                                <span>\r\n                                                                                                                  {{data?.status==\"pending\"?\"Good to Enter\":(data?.status=='Stopped Out'||data?.status=='stopped_out')?'Stop Loss Hit':data?.status|value:'replace-underscore-4'}}\r\n                                                                                                                </span>\r\n                    <i ngx-tooltip tooltipTitle=\"{{researchTerm[(data?.status=='pending'?'Good to Enter':(data?.status=='Stopped Out'||data?.status=='stopped_out')?'Stop Loss Hit':data?.status|value:'replace-underscore-4')]\r\n                      ? researchTerm[(data?.status=='pending'?'Good to Enter':(data?.status=='Stopped Out'||data?.status=='stopped_out')?'Stop Loss Hit':data?.status|value:'replace-underscore-4')]\r\n                      : (data?.status=='pending'?'Good to Enter':(data?.status=='Stopped Out'||data?.status=='stopped_out')?'Stop Loss Hit':data?.status|value:'replace-underscore-4')}}\"\r\n                                                                                                                tooltipPlacement=\"top\" tooltipType=\"tooltip\" class=\"fa fa-info-circle ml-4px\" aria-hidden=\"true\"></i>\r\n                                                                                                              </h6>\r\n                                                                                                              <!--  <h6 class=\"date-top\" *ngIf=\"config?.filter?.type=='experts'\">Published at {{data?.published_date}}</h6> -->\r\n                                                                                                              <h6 class=\"date-top\"><span class=\"hide-m\">Published at</span>\r\n                                                                                                            {{(data?.published_date ) || 'NA'}}</h6>\r\n                                                                                                            <!--  <h6\r\n                                                                                                            *ngIf=\" (data?.status!='Pending' && data?.status!='Active') && (data?.updated_date||data?.updated_datetime)\"\r\n                                                                                                            class=\"date-top\">Updated at\r\n                                                                                                          {{(data?.updated_date||data?.updated_datetime) || 'NA'}}</h6> -->\r\n                                                                                                          <!-- <h6 class=\"date-top\" *ngIf=\"config?.filter?.type=='signals'\">Published At {{(data?.published_date | date:'medium') || 'NA'}}</h6>\r\n                                                                                                          <h6 class=\"date-top\" *ngIf=\"config?.filter?.type=='signals'\">Updated At\r\n                                                                                                          {{(data?.updated_date | date:'medium') || 'NA'}}</h6> -->\r\n                                                                                                        </ng-container>\r\n                                                                                                      </div>\r\n                                                                                                      <div class=\"top-s-right\">\r\n                                                                                                        <div class=\"\">\r\n                                                                                                          <!--  (data?.call_type=='buy'?'buy':data?.call_type=='sell'?'sell':'grey') -->\r\n                                                                                                          <!-- <button class=\"btn-buy btn {{config?.filter?.type=='experts'?((data?.status_flag != null && ((data?.call_type | lowercase).indexOf('buy')>-1 || (data?.call_type | lowercase).indexOf('subscribe')>-1)) ? 'inactiveBuy' : ((data?.status_flag != null) && (data?.call_type | lowercase).indexOf('sell')>-1) ? 'inactiveSell': ((data?.call_type | lowercase).indexOf('buy')>-1 || (data?.call_type | lowercase).indexOf('subscribe')>-1)?'buy':(data?.call_type | lowercase).indexOf('sell')>-1?'sell':'grey'):(data?.call_type=='buy'?'buy':data?.call_type=='sell'?'sell':'grey')}}\"  -->\r\n                                                                                                          <button class=\"rounded-btn filter_btn1\" ngx-tooltip tooltipTitle=\"Go To Detail Page\"\r\n                                                                                                            (click)=\"openTradeStrategy(data,true)\" tooltipPlacement=\"top\" tooltipType=\"tooltip\"><i\r\n                                                                                                          class=\"icon-Details\"></i></button>\r\n                                                                                                          <button\r\n                                                                                                            [ngClass]=\"{ 'disabled-btn': data?.isExpired}\"\r\n                                                                                                            class=\"btn-buy btn  buy\"\r\n                                                                                                            (click)=\"!data?.isExpired?openTradeStrategy(data,false):''\" >   <!-- (click)=\"openTradeStrategy(data)\" -->\r\n                                                                                                            Trade\r\n                                                                                                            <!--   {{ data?.call_type }} -->\r\n                                                                                                          </button>\r\n                                                                                                        </div>\r\n                                                                                                      </div>\r\n                                                                                                    </div>\r\n                                                                                                    <div class=\"middle-sec\">\r\n                                                                                                      <div class=\"middle-se-top\">\r\n                                                                                                        <div class=\"se-left-bottom\" >\r\n                                                                                                          <h4 class=\"comp-name\">\r\n                                                                                                            <small>\r\n                                                                                                              <h6 class=\"text-blue-2 mt-0\"> {{(data?.strategy_name ) || 'NA'}}</h6>\r\n                                                                                                            </small>\r\n                                                                                                            <h4 class=\"bolder text-uppercase\">{{(data?.symbol ) || 'NA'}}</h4>\r\n                                                                                                            <!--    <span class=\"small \">  </span> -->\r\n                                                                                                          </h4>\r\n                                                                                                          <h4 class=\"price Buy\" >\r\n                                                                                                            <small>\r\n                                                                                                              @if (!data?.pnlValue) {\r\n                                                                                                                <h6 class=\"mt-0 bold-2\">Break Even</h6>\r\n                                                                                                              }\r\n                                                                                                              @if (data?.pnlValue) {\r\n                                                                                                                <h6 class=\"profit mt-0 bold-2\">\r\n                                                                                                                  @if (data?.pnlValue) {\r\n                                                                                                                    <span class=\"{{data?.pnlValue>0?'grn-text':'red-txt'}}\"\r\n                                                                                                                    >₹ {{data?.pnlValue | number:'1.2-2'}}</span>\r\n                                                                                                                    } @if (data?.pnlValue) {\r\n                                                                                                                    <span class=\"profit-label\"> {{data?.pnlValue>0?'Profit':'Loss'}}</span>\r\n                                                                                                                  }\r\n                                                                                                                </h6>\r\n                                                                                                              }\r\n                                                                                                            </small>\r\n                                                                                                            @if (!data?.pnlValue) {\r\n                                                                                                              <span class=\"\"> {{(data?.break_even||0)}}</span>\r\n                                                                                                            }\r\n                                                                                                          </h4>\r\n                                                                                                        </div>\r\n                                                                                                      </div>\r\n                                                                                                    </div>\r\n                                                                                                    <div class=\"report-pricing-buy\" >\r\n                                                                                                      <div class=\"prc-buy-desc loss-tr\">\r\n                                                                                                        <h6>Max Loss</h6>\r\n                                                                                                        <h4>{{((data?.max_loss||data?.max_loss===0) ?(data?.max_loss| number: '1.2-2'):'Unlimited')}}\r\n                                                                                                          <!-- <small class=\"red-txt\"> 5.65<em>*</em></small> -->\r\n                                                                                                        </h4>\r\n                                                                                                      </div>\r\n                                                                                                      <div class=\"prc-buy-desc ent-prize\" >\r\n                                                                                                        <h6>Margin Required</h6>\r\n                                                                                                        <h4>{{data.status=='pending'?(data?.isSellPresent? (data?.min_inv?(data?.min_inv | number: '1.2-2'):\"-\"):( (data?.marginRequired2||0)| number: '1.2-2')):'-'}}\r\n                                                                                                          <!-- <small>-5.65<em>*</em></small> -->\r\n                                                                                                        </h4>\r\n                                                                                                      </div>\r\n                                                                                                      <div class=\"prc-buy-desc trgt-price\"\r\n                                                                                                        >\r\n                                                                                                        <h6>Max Profit</h6>\r\n                                                                                                        <h4>{{(((data?.max_profit||data?.max_profit===0)?(data?.max_profit| number: '1.2-2'):'Unlimited') )}}\r\n                                                                                                          <!-- <small class=\"grn-text\">-5.65<em>*</em></small> -->\r\n                                                                                                        </h4>\r\n                                                                                                      </div>\r\n                                                                                                    </div>\r\n                                                                                                  </li>\r\n                                                                                                }\r\n                                                                                              </ul>\r\n                                                                                            }\r\n\r\n\r\n                                                                                            @if ( ((shared?.userId && shared?.userId!='guest') && isSegmentAllowed == 'N' && utils?.isAuthorized()) || (isSegmentAllowed == 'N' && isOSClientFromApp)) {\r\n                                                                                              <ul class=\"alignment\"\r\n                                                                                                >\r\n                                                                                                <p class=\"font-ui\"> Trading for this segment is not active for you</p>\r\n                                                                                                <button class=\"btn btn-gradient\" (click)=\"navigateToModificationPortal()\">\r\n                                                                                                  Modify Profile\r\n                                                                                                </button>\r\n                                                                                              </ul>\r\n                                                                                            }\r\n                                                                                            <!--             <ul class=\"alignment\" *ngIf=\"(!shared?.userId || shared?.userId=='guest') && !utils?.isAuthorized() && config?.filter.trade != 'EQ'\">\r\n                                                                                            <p class=\"font-ui\"> Please login to check out our research recommendations.</p>\r\n                                                                                            <button class=\"btn btn-gradient\" [showFocus]=\"showPreLogin\" (click)=\"login()\">\r\n                                                                                              Login\r\n                                                                                            </button>\r\n                                                                                          </ul> -->\r\n\r\n                                                                                          <!--             <pre>\r\n                                                                                          {{(shared?.userId && shared?.userId != 'guest'||!this.isNonEqUser) && pager.pages && pager.pages?.length && researchList?.length && (config?.filter?.type=='option_strategy'|| isSegmentAllowed == 'Y') && utils?.isAuthorized() |json}}\r\n                                                                                        </pre> -->\r\n                                                                                        @if ( (!(((shared?.userId && shared?.userId!='guest') && isSegmentAllowed == 'N' && utils?.isAuthorized()) || (isSegmentAllowed == 'N' && isOSClientFromApp))) &&   (shared?.userId && shared?.userId != 'guest'||!this.isNonEqUser) && pager.pages && pager.pages?.length && researchList?.length && (config?.filter?.type=='option_strategy'|| isSegmentAllowed == 'Y') && (utils?.isAuthorized() || isOSClientFromApp)) {\r\n                                                                                          <ul\r\n                                                                                            class=\"pagination\">\r\n                                                                                            <ng-container>\r\n                                                                                              <li [ngClass]=\"{ disabled: pager.currentPage === 1 }\">\r\n                                                                                                <a (click)=\"setPage(1,true)\"><i class=\"fa fa-angle-double-left\"></i></a>\r\n                                                                                              </li>\r\n                                                                                            </ng-container>\r\n                                                                                            <li [ngClass]=\"{ disabled: pager.currentPage === 1 }\">\r\n                                                                                              <a (click)=\"setPage(pager.currentPage - 1,true)\"><i class=\"icon-angle-left\"></i></a>\r\n                                                                                            </li>\r\n                                                                                            <ng-container>\r\n                                                                                              @for (page of pager.pages; track page) {\r\n                                                                                                <li [ngClass]=\"{ active: pager.currentPage === page }\">\r\n                                                                                                  <a (click)=\"setPage(page,true)\">{{ page }}</a>\r\n                                                                                                </li>\r\n                                                                                              }\r\n                                                                                              @if (pager.totalPages - pager.startPage > 5) {\r\n                                                                                                <li>\r\n                                                                                                  <a (click)=\"setPage(pager.startPage + 5,true)\">...</a>\r\n                                                                                                </li>\r\n                                                                                              }\r\n                                                                                              @if (pager.totalPages - pager.startPage > 5) {\r\n                                                                                                <li>\r\n                                                                                                  <a (click)=\"setPage(pager.totalPages,true)\">{{ pager.totalPages }}</a>\r\n                                                                                                </li>\r\n                                                                                              }\r\n                                                                                            </ng-container>\r\n                                                                                            <!--<li *ngIf=\"(pager.startPage  + 5) <= pager.totalPages\">-->\r\n                                                                                            <!--    <a (click)=\"setPage(pager.currentPage + 5)\">...</a>-->\r\n                                                                                          <!--</li>-->\r\n                                                                                          <!-- <li *ngIf=\"(pager.startPage  + 5) <= pager.totalPages\" >-->\r\n                                                                                          <!--    <a (click)=\"setPage(pager.totalPages)\">{{pager.totalPages}}</a>-->\r\n                                                                                        <!--</li>-->\r\n                                                                                        <li [ngClass]=\"{ disabled: pager.currentPage === pager.totalPages }\">\r\n                                                                                          <a (click)=\"setPage(pager.currentPage + 1,true)\"><i class=\"icon-angle-right\"></i></a>\r\n                                                                                        </li>\r\n                                                                                        <ng-container>\r\n                                                                                          <li [ngClass]=\"{ disabled: pager.currentPage === pager.totalPages }\">\r\n                                                                                            <a (click)=\"setPage(pager.totalPages,true)\"><i class=\"fa fa-angle-double-right\"></i></a>\r\n                                                                                          </li>\r\n                                                                                        </ng-container>\r\n                                                                                      </ul>\r\n                                                                                    }\r\n                                                                                  </div>\r\n                                                                                </div>\r\n\r\n                                                                              </div>\r\n\r\n                                                                              @if (showPreLogin) {\r\n                                                                                <div class=\"dialog\">\r\n                                                                                  <div class=\"dialog-content\">\r\n                                                                                    <div class=\"dialog-header clearfix \">\r\n                                                                                      <div class=\"col-md-12\">\r\n                                                                                        <h4 class=\"popup-title\">Please login to check out our research recommendations. </h4>\r\n                                                                                      </div>\r\n                                                                                    </div>\r\n                                                                                    <div class=\"dialog-footer clearfix\">\r\n                                                                                      <button class=\"btn sell\" (click)=\"closePreLogin()\">Close</button>\r\n                                                                                      <button class=\"btn buy\" [showFocus]=\"showPreLogin\" (click)=\"login()\">Login</button>\r\n                                                                                    </div>\r\n                                                                                  </div>\r\n                                                                                </div>\r\n                                                                              }\r\n\r\n                                                                              <!-- <section class=\"detail-page-sidebar\" *ngIf=\"displayDetailPage\">\r\n                                                                              <div class=\"fixed-sidebar-header\">\r\n                                                                                <a href=\"javascript:void(0)\" (click)=\"goToDetails(null)\" class=\"bck-prev\">\r\n                                                                                  <i aria-hidden=\"true\" class=\"icon-back-arrow\"></i>\r\n                                                                                </a>\r\n                                                                                <h4>Detail Page</h4>\r\n                                                                              </div>\r\n                                                                              <div class=\"sidebar-mid-content\">\r\n                                                                                <div class=\"mid-content-top\">\r\n                                                                                  <div class=\"content-top-left\">\r\n                                                                                    <h4>Tata Motors</h4>\r\n                                                                                    <h6 class=\"chng-clr\">NSE</h6>\r\n                                                                                  </div>\r\n                                                                                  <div class=\"content-top-right text-right\">\r\n                                                                                    <h6 class=\"ic-txt\">\r\n                                                                                      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"7.5\" height=\"14\" viewBox=\"0 0 7.5 14\">\r\n                                                                                        <path id=\"Path_26641\" data-name=\"Path 26641\" d=\"M12.75,5l-4.5,8.5h3.14V19l4.36-8.5h-3Z\" transform=\"translate(-8.25 -5)\" fill=\"#093\"/>\r\n                                                                                      </svg>\r\n                                                                                      Exit @ 763.90\r\n                                                                                    </h6>\r\n                                                                                    <h6 class=\"chng-clr\">EXP. APR 8, 2022</h6>\r\n                                                                                  </div>\r\n                                                                                </div>\r\n                                                                                <div class=\"mid-content-top mid-content-mrg\">\r\n                                                                                  <div class=\"content-top-left\">\r\n                                                                                    <div class=\"d-flex align-items-end\">\r\n                                                                                      <h4>3,010</h4>\r\n                                                                                      <h6 class=\"mrg grn-clr\">4.35 (5.50%)</h6>\r\n                                                                                    </div>\r\n                                                                                  </div>\r\n                                                                                  <div class=\"content-top-right text-right\">\r\n                                                                                    <h6 class=\"chng-clr\">MAR 29, 2022 9:35:38</h6>\r\n                                                                                  </div>\r\n                                                                                </div>\r\n                                                                                <div class=\"mid-icon-list\" *ngIf=\"researchConfig?.research_type !== 'fundamental'\">\r\n                                                                                  <div class=\"icon-list-item\">\r\n                                                                                    <span class=\"icon-cirlce\" (click)=\"gotoCompanyPage()\">\r\n                                                                                    </span>\r\n                                                                                    <h5>Scrip Info</h5>\r\n                                                                                  </div>\r\n                                                                                  <div class=\"icon-list-item\">\r\n                                                                                    <span class=\"icon-cirlce\">\r\n                                                                                    </span>\r\n                                                                                    <h5>Chart</h5>\r\n                                                                                  </div>\r\n                                                                                  <div class=\"icon-list-item\">\r\n                                                                                    <span class=\"icon-cirlce\">\r\n                                                                                    </span>\r\n                                                                                    <h5>Watchlist</h5>\r\n                                                                                  </div>\r\n                                                                                </div>\r\n                                                                                <div class=\"mid-prize-list\">\r\n                                                                                  <div class=\"prize-list-item\">\r\n                                                                                    <h6 class=\"chng-clr\">Buy Price</h6>\r\n                                                                                    <h4>3,100</h4>\r\n                                                                                  </div>\r\n                                                                                  <div class=\"prize-list-item\">\r\n                                                                                    <h6 class=\"chng-clr\">Target Price</h6>\r\n                                                                                    <h4>3,000</h4>\r\n                                                                                  </div>\r\n                                                                                  <div class=\"prize-list-item\">\r\n                                                                                    <h6 class=\"chng-clr\">Holding period</h6>\r\n                                                                                    <h4>12 -18 Months</h4>\r\n                                                                                  </div>\r\n                                                                                </div>\r\n                                                                                <div class=\"loss-profit-input\">\r\n                                                                                  <div class=\"loss-profit-item loss-est\">\r\n                                                                                    <h6>Estimated Loss</h6>\r\n                                                                                    <h4>5.65</h4>\r\n                                                                                  </div>\r\n                                                                                  <div class=\"loss-profit-item qun-est\">\r\n                                                                                    <h6>Quantity</h6>\r\n                                                                                    <form class=\"\">\r\n                                                                                      <input type=\"text\" class=\"input-fld\" placeholder=\"1\"/>\r\n                                                                                    </form>\r\n                                                                                  </div>\r\n                                                                                  <div class=\"loss-profit-item profit-est\">\r\n                                                                                    <h6>Estimated Profit</h6>\r\n                                                                                    <h4>20.45</h4>\r\n                                                                                  </div>\r\n                                                                                </div>\r\n                                                                                <div class=\"sidebar-desc\">\r\n                                                                                  <p><strong>Low provisioning and contained OPEX drive profitability in Q3FY22 : -</strong> NII grew by a slower pace at 6.5% YoY as compared to 17% YoY in the previous quarter. Despite the recovery in advances growth, NII growth slowed down due to low YoA which stood at 7.6% in Q3FY22 v/s 8.2% in the same quarter of previous fiscal., Low CoD of 3.8% while helped to keep NIM at last quarter level of 3.1%. Domestic NIM stood at 3.35% in the quarter under review v/s 3.3% in Q2FY22 and same at 3.3% in Q3FY21. Other income declined by -6% YoY due to treasury income which declined by -46% YoY. OPEX remained contained at 0.5% YoY driving an improvement in C/I to 52.9% in Q3FY22 as compared to last 6 quarter avg. of 54.0%. Provisioning declined by -32.6% YoY on account of lower slippages. SBI reported 62.3% YoY & 10.6% QoQ growth in PAT during Q3FY22. Credit growth picks up : - Advances grew by 8.5% YoY/5.5% QoQ, above the past quarterly trend. Retail segment continue to dominant the space growing at 14.6% YoY led by home loans (11.2% YoY) and other retail products (24.2% YoY). Corporate credit picked up 3.5% sequentially on the back of improved utilization. Deposits grew by 8.8% YoY/QoQ with CASA ratio stood at 45.7% as of the quarter.</p>\r\n                                                                                </div>\r\n\r\n                                                                              </div>\r\n                                                                              <div class=\"fixed-sidebar-footer\">\r\n                                                                                <div class=\"sidebar-footer-top\">\r\n                                                                                  <h6><i aria-hidden=\"true\" class=\"icon-eye\" id=\"iconEye\"></i> 5</h6>\r\n                                                                                  <a href=\"javascript:void(0)\" class=\"dwld-report\">Download Report</a>\r\n                                                                                </div>\r\n                                                                                <a href=\"javascript:void(0)\" class=\"btn-buy btn buy but-buy-foot\">buy</a>\r\n                                                                              </div>\r\n                                                                            </section> -->\r\n\r\n                                                                            <!-- <div class=\"option-chain-popup sleekbox-popup-active\"  *ngIf=\"openTrade\">\r\n\r\n                                                                            <div class=\"sleekbox-popup\" id=\"draggable-detail\" >\r\n\r\n                                                                              <div class=\"popup-sub-row\">\r\n\r\n                                                                                <hr>\r\n                                                                                  <div class=\"btnwrap\">\r\n\r\n                                                                                    <button class=\"btn btn-info-2 big-btn\"  (click)=\"closeTradeStrategy()\">Cancel</button>\r\n                                                                                    <button class=\"btn btn-buy-2 big-btn\" (click)=\"placeOrder()\">Place Order</button>\r\n                                                                                  </div>\r\n                                                                                </div>\r\n                                                                              </div>\r\n\r\n                                                                            </div> -->\r\n\r\n\r\n                                                                            @if (tradeSuccessConf?.tradeCompleted) {\r\n                                                                              <div class=\"option-chain-popup sleekbox-popup-active\"  >\r\n                                                                                <div class=\"sleekbox-popup w800\"  >\r\n                                                                                  <div class=\"close-sec\">\r\n                                                                                    <button class=\"close close-modl\" (click)=\"closeTradeSuccess()\">\r\n                                                                                      <img src=\"assets/images/icons/cross.svg\" alt=\"X\" class=\"\">\r\n                                                                                    </button>\r\n                                                                                  </div>\r\n                                                                                  <div class=\"popup-sub-row\">\r\n                                                                                    <div class=\"text-center padding-sec\">\r\n                                                                                      @if (tradeSuccessConf?.success=='success') {\r\n                                                                                        <img src=\"assets/images/icons/success.svg\" alt=\"Success\" class=\"img-ico-strt\">\r\n                                                                                        <h3 class=\"text-center text-success padding-bottom-10\">Order placed in the strategy successfully!</h3>\r\n                                                                                        <h4 class=\"text-center padding-bottom-10 text-gray\">You can check the details in orderbook.</h4>\r\n                                                                                      }\r\n                                                                                      @if (tradeSuccessConf?.success=='fail') {\r\n                                                                                        <img src=\"assets/images/icons/error.svg\" alt=\"Failure\" class=\"img-ico-strt\">\r\n                                                                                        <h3 class=\"text-center text-failed padding-bottom-10\">Orders failed</h3>\r\n                                                                                        <h4 class=\"text-center padding-bottom-10 text-gray\">You can check the details in orderbook.</h4>\r\n                                                                                      }\r\n                                                                                      @if (tradeSuccessConf?.success=='undefined') {\r\n                                                                                        <!--   <img src=\"assets/images/icons/unknown.svg\" alt=\"\" class=\"img-ico-strt\">\r\n                                                                                        <h3 class=\"text-center  text-undefined padding-bottom-10\">Request submitted.</h3>\r\n                                                                                        <h4 class=\"text-center padding-bottom-10 text-gray\">You can check the details in orderbook.</h4> -->\r\n                                                                                        <img src=\"assets/images/icons/success.svg\" alt=\"Success\" class=\"img-ico-strt\">\r\n                                                                                        <h3 class=\"text-center text-success padding-bottom-10\">Request submitted.</h3>\r\n                                                                                        <h4 class=\"text-center padding-bottom-10 text-gray\">You can check the details in orderbook.</h4>\r\n                                                                                      }\r\n                                                                                    </div>\r\n                                                                                    <hr>\r\n                                                                                      <!-- <div class=\"btnwrap justify-content-center\" *ngIf=\"!isOSClientFromApp\">\r\n                                                                                      <button class=\"btn btn-info-2 big-btn\"  routerLink=\"/client/portfolio/net-position\">View Positions</button>\r\n                                                                                      <button class=\"btn btn-buy-2 big-btn\" routerLink=\"/client/orderBook\">View Orders</button>\r\n                                                                                    </div> -->\r\n                                                                                    @if ((isOSClientFromApp && isMobileDeviceCheck)) {\r\n                                                                                      <div class=\"btnwrap justify-content-center\">\r\n                                                                                        <button class=\"btn btn-info-2 big-btn\" (click)=\"mobileSuccessRedirection()\">View Trades</button>\r\n                                                                                      </div>\r\n                                                                                    } @else {\r\n                                                                                      <div class=\"btnwrap justify-content-center\">\r\n                                                                                        <button class=\"btn btn-info-2 big-btn\" routerLink=\"/post/portfolio/net-position\">View Positions</button>\r\n                                                                                        <button class=\"btn btn-buy-2 big-btn\" routerLink=\"/client/orderBook\">View Orders</button>\r\n                                                                                      </div>\r\n                                                                                    }\r\n                                                                                  </div>\r\n                                                                                </div>\r\n                                                                              </div>\r\n                                                                            }\r\n                                                                            \r\n                                                                            @defer(when openTrade) {\r\n                                                                              @if (openTrade) {\r\n                                                                                <app-option-detail  [isOpenTradeDetail]=\"isOpenTradeDetail\" [isOSClientFromApp]=\"isOSClientFromApp\" [OSAppClientId]=\"OSAppClientId\" [OSAppAccessToken]=\"OSAppAccessToken\"  [OSAppSessionId]=\"OSAppSessionId\" [OSProfileDetails]=\"OSProfileDetails\" [isOSSegmentAllowed]=\"isOSSegmentAllowed\" [allowedSegmentList]=\"allowedSegmentList\" (tradeDetails)=\"tradeDetails($event)\" [data]=\"detail\"></app-option-detail>\r\n                                                                              }\r\n                                                                            }\r\n\r\n\r\n";

/***/ })

}]);