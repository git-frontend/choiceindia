(self["webpackChunkjiffy_upgraded"] = self["webpackChunkjiffy_upgraded"] || []).push([[6359],{

/***/ 26359:
/*!*************************************************************************************!*\
  !*** ./src/app/tools-module/brokerage-calculator/brokerage-calculator.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrokerageCalculatorComponent: () => (/* binding */ BrokerageCalculatorComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _brokerage_calculator_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./brokerage-calculator.component.html?ngResource */ 26161);
/* harmony import */ var _brokerage_calculator_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./brokerage-calculator.component.scss?ngResource */ 60245);
/* harmony import */ var _brokerage_calculator_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_brokerage_calculator_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _services_rest_tool_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/rest/tool.service */ 91387);
/* harmony import */ var _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/seo/seo.service */ 44897);
/* harmony import */ var _services_sockets_broadcaster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/sockets/broadcaster */ 28510);
/* harmony import */ var _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/utils/utils.service */ 89893);
/* harmony import */ var _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../services/shared-data/shared-data.service */ 46013);
/* harmony import */ var _pipes_value_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/value.pipe */ 50615);
/* harmony import */ var _pipes_condense_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pipes/condense.pipe */ 82203);
/* harmony import */ var _directives_input_restrict2_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../directives/input-restrict2.directive */ 5833);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 89417);














let BrokerageCalculatorComponent = class BrokerageCalculatorComponent {
  constructor(utils, zone, rest, seo, router, broadcaster, shared) {
    this.utils = utils;
    this.zone = zone;
    this.rest = rest;
    this.seo = seo;
    this.router = router;
    this.broadcaster = broadcaster;
    this.shared = shared;
    /**
     * Collapse variable
     */
    this.collapseOpen = false;
    /** Variable for states */
    this.stateArray = [];
    /** show search Focus */
    this.searchFocus = false;
    this.stateArray = [{
      name: "TELANGANA",
      value: 0,
      cashIntraday: 0.01,
      cashDelivery: 0.01,
      fut: 0.01,
      opt: 0.01,
      currency: 0.01,
      commodity: 0.002,
      commodityFut: 0.002,
      commodityOpt: 0.003,
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
      commodityFut: 0.002,
      commodityOpt: 0.003,
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
      commodityFut: 0.002,
      commodityOpt: 0.003,
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
      commodityFut: 0.002,
      commodityOpt: 0.003,
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
      commodityFut: 0.002,
      commodityOpt: 0.003,
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
      commodityFut: 0.002,
      commodityOpt: 0.003,
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
      commodityFut: 0.002,
      commodityOpt: 0.003,
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
      commodityFut: 0.002,
      commodityOpt: 0.003,
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
      commodityFut: 0.002,
      commodityOpt: 0.003,
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
      commodityFut: 0.002,
      commodityOpt: 0.003,
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
      commodityFut: 0.002,
      commodityOpt: 0.003,
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
      commodityFut: 0.002,
      commodityOpt: 0.003,
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
      commodityFut: 0.002,
      commodityOpt: 0.003,
      max: ""
    }];
    this.brokerageObj = {};
    this.newBrokerageObj = {};
    this.brokerageObj.searchInput = "";
    this.brokerageObj.startPos = 0;
    this.brokerageObj.limit = 10;
    this.brokerageObj.tableValue = [];
    this.brokerageObj.selectedScrip = {
      Token: 532540,
      SegmentId: 3,
      SecDesc: "TATA CONSULTANCY SERVICES",
      SecName: "TCS",
      MarketLot: 1,
      ExchangeSegment: "BSE"
    };
    this.brokerageObj.multiTouchlineData = {};
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
    this.brokerageObj.state = 6;
    this.brokerageObj.stateStampDuty = 0;
    if (!this.utils.getUserId() || this.utils.getUserId() == "guest") {
      this.utils.generateGuestToken();
    }
    this.getScriptDetail(this.brokerageObj.selectedScrip);
  }
  ngOnInit() {
    this.seo.setMeta("brokerage-calculator");
  }
  /**
   * on input key press search api call
   * @param event event of input
   */
  onInputPress(event) {
    this.brokerageObj.tableValue = [];
    this.zone.run(() => {
      if (this.brokerageObj.searchInput.length == 0) {
        this.brokerageObj.startPos = 0;
        this.brokerageObj.tableValue = [];
      } else if (this.brokerageObj.searchInput.length === 1 || this.brokerageObj.searchInput.length === 2) {
        this.brokerageObj.startPos = 0;
        this.brokerageObj.tableValue = [];
      } else if ((this.brokerageObj.searchInput || "").trim().length >= 3) {
        let data = {
          strScripName: this.brokerageObj.searchInput,
          StartPos: this.brokerageObj.startPos,
          NoOfRecords: this.brokerageObj.limit
        };
        this.rest.getSearchData(data).subscribe(res => {
          if (res.Status === "Success" && res.Response) {
            this.brokerageObj.datalength = res.Response.length;
            this.brokerageObj.tableValue = res.Response;
          } else if (res.Status === "Fail") {
            this.brokerageObj.tableValue = [];
          } else {
            this.brokerageObj.tableValue = [];
          }
        });
      }
    });
  }
  /** on focus of input of search */
  onFocus() {
    this.searchFocus = true;
  }
  /** focus out event of search input*/
  focusOut() {
    this.searchFocus = false;
  }
  /** On state change by dropdown */
  onStateChange() {
    this.brokerageObj.brokerage = this.BrokerageCal(this.brokerageObj.selectedScrip);
    //this.newBrokerageObj=JSON.parse(JSON.stringify(this.brokerageObj))
  }
  resetValues() {
    this.brokerageObj.quantity = 1;
    this.brokerageObj.buyPrice = "";
    this.brokerageObj.sellPrice = "";
    this.brokerageObj.tableValue = [];
    this.brokerageObj.brokerage = 0;
    this.brokerageObj.turnOver = 0;
    this.brokerageObj.orderType = false;
    this.brokerageObj.stt = 0;
    this.brokerageObj.transactionCharge = 0;
    this.brokerageObj.clearance = 0;
    this.brokerageObj.GST = 0;
    this.brokerageObj.sebi = 0;
    this.brokerageObj.stateStampDuty = 0;
    //  this.newBrokerageObj=JSON.parse(JSON.stringify(this.brokerageObj))
  }
  getDefaultBrokerageRate(scrip) {
    let rate = 0;
    if (scrip.isPrice) {
      rate = 20;
    } else if (!scrip.isPrice) {
      rate = scrip.SegmentId == 1 || scrip.SegmentId == 3 ? this.brokerageObj.orderType ? 0.0 : 0.03 : 0.03;
    }
    return rate;
  }
  /**
   * On selection Scrip
   * @param item scrip Selected
   */
  onSelectionScrip(item) {
    this.brokerageObj.selectedScrip = item;
    this.brokerageObj.selectedScrip.isPrice = item.OptionType == "CE" || item.OptionType == "PE";
    this.brokerageObj.searchInput = (item.SegmentId == 1 || item.SegmentId == 3 ? item.SecDesc : item.SecName) + " " + item.ExchangeSegment;
    this.brokerageObj.brokerageRate = this.getDefaultBrokerageRate(this.brokerageObj.selectedScrip);
    this.resetValues();
    let userId = this.utils.getUserId();
    let payload = {
      UserId: !userId || userId == "guest" ? "guest" : userId,
      SessionId: this.utils.getSessionId() || "",
      MultipleTokens: item.SegmentId + "@" + item.Token
    };
    this.utils.commonGetMultipleTouchLineCall(payload, true).subscribe(res => {
      // common multitouchlineV2 (26/02/2021)
      if (res.Status == "Success" && res.Response && res.Response.lMT && res.Response.lMT.length) {
        console.log("brokerageObj multitouchline18 ", JSON.parse(JSON.stringify(this.brokerageObj)));
        this.brokerageObj.buyPrice = (res.Response.lMT[0].BBP || res.Response.lMT[0].LTP) / res.Response.lMT[0].PriceDivisor;
        this.brokerageObj.sellPrice = (res.Response.lMT[0].BSP || res.Response.lMT[0].LTP) / res.Response.lMT[0].PriceDivisor;
        this.brokerageObj.buyPrice = this.utils.decimalConversion(item.SegmentId, this.brokerageObj.buyPrice);
        this.brokerageObj.sellPrice = this.utils.decimalConversion(item.SegmentId, this.brokerageObj.sellPrice);
        this.brokerageObj.normalizingFactor = (this.scripDetail.PriceNum / this.scripDetail.PriceDen || 1) * (this.scripDetail.GenNum / this.scripDetail.GenDen || 1);
        this.brokerageObj.sellValue = this.brokerageObj.quantity * this.brokerageObj.sellPrice * (res.Response.lMT[0].MarketLot || 1) * this.brokerageObj.normalizingFactor;
        this.brokerageObj.buyValue = this.brokerageObj.quantity * this.brokerageObj.buyPrice * (res.Response.lMT[0].MarketLot || 1) * this.brokerageObj.normalizingFactor;
        this.brokerageObj.turnOver = this.brokerageObj.sellValue + this.brokerageObj.buyValue;
        this.brokerageObj.brokerage = this.BrokerageCal(item);
        this.brokerageObj.GST = 18 * (this.brokerageObj.brokerage + this.brokerageObj.transactionCharge + this.brokerageObj.clearance) / 100;
        // this.newBrokerageObj=JSON.parse(JSON.stringify(this.brokerageObj))
        this.getBrokerage();
      }
    });
  }
  /**
   * event from ul scroll
   * @param event
   */
  onUlScroll(event) {
    if (this.brokerageObj.searchInput && this.brokerageObj.searchInput.length >= 3 && event && event.path) {
      let scrollTop = event.path[0].scrollTop;
      let scrollHeight = event.path[0].scrollHeight;
      let scrollBottom = event.path[0].scrollTop + this.brokerageUl.nativeElement.offsetHeight;
      this.zone.run(() => {
        if (scrollHeight <= Math.ceil(scrollBottom) && this.brokerageObj.datalength == 10) {
          this.brokerageObj.startPos = this.brokerageObj.startPos + 10;
          let data = {
            strScripName: this.brokerageObj.searchInput,
            StartPos: this.brokerageObj.startPos,
            NoOfRecords: 10
          };
          this.rest.getSearchData(data).subscribe(res => {
            if (res.Status === "Success" && res.Response) {
              this.brokerageObj.datalength = res.Response.length;
              res.Response.forEach(element => {
                this.brokerageObj.tableValue.push(element);
              });
            } else if (res.Status === "Fail") {
              this.brokerageObj.tableValue = [];
            } else {
              this.brokerageObj.tableValue = [];
            }
          });
        }
      });
    }
  }
  /**
   * calculate Brokearge
   * @param scrip selected scrip
   */
  BrokerageCal(scrip) {
    let brokerage;
    let turnover = this.brokerageObj.turnOver;
    let qty = Math.floor(turnover / 10000000);
    this.brokerageObj.sebi = qty * 15;
    let selectedState = this.stateArray.filter(obj => {
      return obj.value == this.brokerageObj.state;
    })[0];
    let brokerageChargeFactor = (Number(this.brokerageObj.brokerageRate) || 0) / (this.brokerageObj.selectedScrip.isPrice ? 1 : 100);
    switch (scrip.SegmentId) {
      case 1:
        // NSE
        brokerage = this.brokerageObj.orderType ? brokerageChargeFactor * turnover : brokerageChargeFactor * turnover;
        this.brokerageObj.stt = (this.brokerageObj.orderType ? 0.1 * turnover : 0.025 * this.brokerageObj.sellValue) / 100;
        this.brokerageObj.transactionCharge = 0.00325 * turnover / 100;
        this.brokerageObj.clearance = 0.01;
        this.brokerageObj.stateStampDuty = (this.brokerageObj.orderType ? selectedState.cashDelivery * this.brokerageObj.buyValue : selectedState.cashIntraday * this.brokerageObj.buyValue) / 100;
        break;
      case 3:
        // BSE
        brokerage = this.brokerageObj.orderType ? brokerageChargeFactor * turnover : brokerageChargeFactor * turnover;
        this.brokerageObj.stt = (this.brokerageObj.orderType ? 0.1 * turnover : 0.025 * this.brokerageObj.sellValue) / 100;
        this.brokerageObj.transactionCharge = 0.00325 * turnover / 100;
        this.brokerageObj.clearance = 0.01;
        this.brokerageObj.stateStampDuty = (this.brokerageObj.orderType ? selectedState.cashDelivery * this.brokerageObj.buyValue : selectedState.cashIntraday * this.brokerageObj.buyValue) / 100;
        break;
      case 2:
        // NSEFO
        if (scrip.OptionType === "XX") {
          brokerage = brokerageChargeFactor * turnover;
          this.brokerageObj.stt = 0.01 * this.brokerageObj.sellValue / 100;
          this.brokerageObj.transactionCharge = 0.0019 * turnover / 100;
          this.brokerageObj.clearance = 0.0005 * turnover / 100;
          this.brokerageObj.stateStampDuty = (this.brokerageObj.orderType ? selectedState.fut * this.brokerageObj.buyValue : selectedState.fut * this.brokerageObj.buyValue) / 100;
        } else if (scrip.OptionType === "CE" || scrip.OptionType === "PE") {
          brokerage = brokerageChargeFactor * this.brokerageObj.quantity * (this.brokerageObj.sellValue && this.brokerageObj.buyValue ? 2 : 1);
          this.brokerageObj.stt = 0.05 * this.brokerageObj.sellValue / 100;
          this.brokerageObj.transactionCharge = 0.05 * turnover / 100;
          this.brokerageObj.clearance = 0.002 * turnover / 100;
          this.brokerageObj.stateStampDuty = (this.brokerageObj.orderType ? selectedState.opt * this.brokerageObj.buyValue : selectedState.opt * this.brokerageObj.buyValue) / 100;
        }
        break;
      case 4:
        // NSEFO
        if (scrip.OptionType === "XX") {
          brokerage = brokerageChargeFactor * turnover;
          this.brokerageObj.stt = 0.01 * this.brokerageObj.sellValue / 100;
          this.brokerageObj.transactionCharge = 0.0019 * turnover / 100;
          this.brokerageObj.clearance = 0.0005 * turnover / 100;
          this.brokerageObj.stateStampDuty = (this.brokerageObj.orderType ? selectedState.fut * this.brokerageObj.buyValue : selectedState.fut * this.brokerageObj.buyValue) / 100;
        } else if (scrip.OptionType === "CE" || scrip.OptionType === "PE") {
          brokerage = brokerageChargeFactor * this.brokerageObj.quantity * (this.brokerageObj.sellValue && this.brokerageObj.buyValue ? 2 : 1);
          this.brokerageObj.stt = 0.05 * this.brokerageObj.sellValue / 100;
          this.brokerageObj.transactionCharge = 0.05 * turnover / 100;
          this.brokerageObj.clearance = 0.002 * turnover / 100;
          this.brokerageObj.stateStampDuty = (this.brokerageObj.orderType ? selectedState.opt * this.brokerageObj.buyValue : selectedState.opt * this.brokerageObj.buyValue) / 100;
        }
        break;
      case 4:
        // BSEFO
        if (scrip.OptionType === "XX") {
          brokerage = brokerageChargeFactor * turnover;
          this.brokerageObj.stt = 0.01 * this.brokerageObj.sellValue / 100;
          this.brokerageObj.transactionCharge = 0.0019 * turnover / 100;
          this.brokerageObj.clearance = 0.0005 * turnover / 100;
          this.brokerageObj.stateStampDuty = (this.brokerageObj.orderType ? selectedState.fut * this.brokerageObj.buyValue : selectedState.fut * this.brokerageObj.buyValue) / 100;
        } else if (scrip.OptionType === "CE" || scrip.OptionType === "PE") {
          brokerage = brokerageChargeFactor * this.brokerageObj.quantity * (this.brokerageObj.sellValue && this.brokerageObj.buyValue ? 2 : 1);
          this.brokerageObj.stt = 0.05 * this.brokerageObj.sellValue / 100;
          this.brokerageObj.transactionCharge = 0.05 * turnover / 100;
          this.brokerageObj.clearance = 0.002 * turnover / 100;
          this.brokerageObj.stateStampDuty = (this.brokerageObj.orderType ? selectedState.opt * this.brokerageObj.buyValue : selectedState.opt * this.brokerageObj.buyValue) / 100;
        }
        break;
      case 5:
        //MCX
        // this.brokerageObj.stateStampDuty = ((this.brokerageObj.orderType) ? (selectedState.commodity * turnover) : (selectedState.commodity * turnover)) / 100;
        if (scrip.OptionType === "XX") {
          this.brokerageObj.stateStampDuty = selectedState.commodityFut * this.brokerageObj.buyValue / 100;
          brokerage = brokerageChargeFactor * turnover;
          this.brokerageObj.stt = 0.01 * this.brokerageObj.sellValue / 100;
          this.brokerageObj.transactionCharge = (0.0026 * this.brokerageObj.buyValue + 0.0025 * this.brokerageObj.sellValue) / 100;
          this.brokerageObj.clearance = 0.0003 * turnover / 100;
        } else if (scrip.OptionType === "CE" || scrip.OptionType === "PE") {
          this.brokerageObj.stateStampDuty = selectedState.commodityOpt * this.brokerageObj.buyValue / 100;
          brokerage = brokerageChargeFactor * this.brokerageObj.quantity * (this.brokerageObj.sellValue && this.brokerageObj.buyValue ? 2 : 1);
          this.brokerageObj.stt = 0.05 * this.brokerageObj.sellValue / 100;
          this.brokerageObj.transactionCharge = 0.05 * turnover / 100;
          this.brokerageObj.clearance = 0.02 * turnover / 100;
        }
        break;
      case 7:
        //NCDEX
        if (scrip.OptionType === "XX") {
          // FUT
          this.brokerageObj.stateStampDuty = selectedState.commodityFut * this.brokerageObj.buyValue / 100;
          brokerage = brokerageChargeFactor * turnover;
          this.brokerageObj.stt = 0.01 * this.brokerageObj.sellValue / 100;
          this.brokerageObj.transactionCharge = 0.004 * turnover / 100;
          this.brokerageObj.clearance = 0.0003 * turnover / 100;
        } else if (scrip.OptionType === "CE" || scrip.OptionType === "PE") {
          // Call/PUT
          this.brokerageObj.stateStampDuty = selectedState.commodityOpt * this.brokerageObj.buyValue / 100;
          brokerage = brokerageChargeFactor * this.brokerageObj.quantity * (this.brokerageObj.sellValue && this.brokerageObj.buyValue ? 2 : 1);
          this.brokerageObj.stt = 0.05 * this.brokerageObj.sellValue / 100;
          this.brokerageObj.transactionCharge = 0.05 * turnover / 100;
          this.brokerageObj.clearance = 0.02 * turnover / 100;
        }
        break;
      case 13:
        //NSECDS
        this.brokerageObj.stateStampDuty = selectedState.currency * this.brokerageObj.buyValue / 100;
        if (scrip.OptionType === "XX") {
          brokerage = brokerageChargeFactor * turnover;
          this.brokerageObj.stt = 0;
          this.brokerageObj.transactionCharge = 0.0009 * turnover / 100;
          this.brokerageObj.clearance = 0.0005 * turnover / 100;
        } else if (scrip.OptionType === "CE" || scrip.OptionType === "PE") {
          brokerage = brokerageChargeFactor * this.brokerageObj.quantity * (this.brokerageObj.sellValue && this.brokerageObj.buyValue ? 2 : 1);
          this.brokerageObj.stt = 0;
          this.brokerageObj.transactionCharge = 0.035 * turnover / 100;
          this.brokerageObj.clearance = 0.002 * turnover / 100;
        }
        break;
      default:
        break;
    }
    return brokerage;
  }
  /** On OrderTye Toggle change */
  onOrderTypeChange() {
    this.brokerageObj.brokerage = this.BrokerageCal(this.brokerageObj.selectedScrip);
    this.brokerageObj.GST = 18 * (this.brokerageObj.brokerage + this.brokerageObj.transactionCharge + this.brokerageObj.clearance) / 100;
    // this.newBrokerageObj=JSON.parse(JSON.stringify(this.brokerageObj))
  }
  /** On change of Quantity  buyPrice SellPrice*/
  onQuantityChange() {
    this.brokerageObj.normalizingFactor = (this.scripDetail.PriceNum / this.scripDetail.PriceDen || 1) * (this.scripDetail.GenNum / this.scripDetail.GenDen || 1);
    this.brokerageObj.sellValue = this.brokerageObj.quantity * this.brokerageObj.sellPrice * (this.brokerageObj.selectedScrip.MarketLot || 1) * this.brokerageObj.normalizingFactor;
    this.brokerageObj.buyValue = this.brokerageObj.quantity * this.brokerageObj.buyPrice * (this.brokerageObj.selectedScrip.MarketLot || 1) * this.brokerageObj.normalizingFactor;
    this.brokerageObj.turnOver = this.brokerageObj.sellValue + this.brokerageObj.buyValue;
    this.brokerageObj.brokerage = this.BrokerageCal(this.brokerageObj.selectedScrip);
    this.brokerageObj.GST = 18 * (this.brokerageObj.brokerage + this.brokerageObj.transactionCharge + this.brokerageObj.clearance) / 100;
    // this.newBrokerageObj=JSON.parse(JSON.stringify(this.brokerageObj))
  }
  /* routerLink="/onboarding/onboardwalkthrough" */
  goToSignup() {
    let userId = this.utils.getUserId();
    userId && userId != "guest" ? this.broadcaster.broadcast("openSearch") : this.router.navigate(["/onboarding/onboardwalkthrough"]);
  }
  onBrokerageRateChange() {
    this.brokerageObj.brokerage = this.BrokerageCal(this.brokerageObj.selectedScrip);
    this.brokerageObj.GST = 18 * (this.brokerageObj.brokerage + this.brokerageObj.transactionCharge + this.brokerageObj.clearance) / 100;
    //  this.newBrokerageObj=JSON.parse(JSON.stringify(this.brokerageObj))
  }
  /**
   * KeyPress event allowing only digits
   * @param event Key press Event
   */
  allowOnlyDigits(event) {
    let key = event.keyCode || event.charCode;
    return [8, 0, 46].indexOf(key) == -1 && key < 48 || key > 57 ? false : true;
  }
  /**
   * get script detail of selected scrip
   * @param data data of selected scrip
   */
  getScriptDetail(data) {
    let currentUserId = this.utils.getUserId();
    let userId = !currentUserId || currentUserId == "guest" ? "" : currentUserId;
    let payload = {
      nMarketSegmentId: Number(data.SegmentId),
      nToken: Number(data.Token),
      UserId: userId
    };
    this.rest.getScripDetails(payload).subscribe(res => {
      if (res.Status == "Success" && res.Response) {
        this.onSelectionScrip(data);
        this.scripDetail = res.Response;
      } else {
        this.utils.error("Error", "Something went wrong");
      }
    });
  }
  navigateToFreeAccountSignup(type) {
    let url = type == "sign_up" ? `${this.utils.getChoiceindiaBaseURL()}/open-free-demat-account?utm_source=choice-finx-web&utm_medium=sign_up_button&utm_campaign=choice_finx_sign_up_button` : `${this.utils.getChoiceindiaBaseURL()}/open-free-demat-account?utm_source=choice-finx-web&utm_medium=main_menu_button&utm_campaign=choice_finx_open_account_button`;
    window.open(url, "_self");
  }
  getBrokerage() {
    let payload = {
      segment: this.brokerageObj.selectedScrip.SegmentId,
      token: this.brokerageObj.selectedScrip.Token,
      symbol: this.brokerageObj.selectedScrip.SecName,
      product: this.brokerageObj.orderType ? "d" : "m",
      isFuture: this.brokerageObj.selectedScrip.OptionType == "XX",
      clientId: this.utils.getUserId(),
      isBrokerageCalculator: true
    };
    this.shared.isServiceHit = true;
    this.rest.getScripBrokerageURL(payload, true).subscribe(res => {
      this.shared.isServiceHit = false;
      this.newBrokerageObj = JSON.parse(JSON.stringify(this.brokerageObj));
      if (res.Status == "Success" && res.Response) {
        let buyBrokerage = res.Response.buyBrokerage;
        let sellBrokerage = res.Response.sellBrokerage;
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
        //this.newBrokerageObj.
        // this.newBrokerageObj.brokerageRate = 0;
        // this.newBrokerageObj.brokerage = 0;
        this.newBrokerageObj.stt = 0;
        this.newBrokerageObj.transactionCharge = 0;
        this.newBrokerageObj.clearance = 0;
        this.newBrokerageObj.GST = 0;
        this.newBrokerageObj.sebi = 0;
        this.newBrokerageObj.stateStampDuty = 0;
        this.brokerageObj.brokerage = this.BrokerageCal(this.brokerageObj.selectedScrip);
        // this.brokerageObj.sellValue
        // this.brokerageObj.buyValue
        //this.brokerageObj.turnOver
        if (this.brokerageObj.sellValue) {
          // this.newBrokerageObj.brokerageRate=sellBrokerage.brokerage;
          // if(this.brokerageObj.selectedScrip.OptionType === 'CE' || this.brokerageObj.selectedScrip.OptionType === 'PE'){
          //   this.newBrokerageObj.brokerage = this.brokerageObj.quantity*this.newBrokerageObj.brokerageRate;
          // }else{
          //   this.newBrokerageObj.brokerage =  this.brokerageObj.sellValue*(this.newBrokerageObj.brokerageRate/100)
          // }
          this.newBrokerageObj.stt = this.brokerageObj.sellValue * sellBrokerage.stt;
          this.newBrokerageObj.transactionCharge = this.brokerageObj.sellValue * sellBrokerage.transactionCharges;
          this.newBrokerageObj.stateStampDuty = this.brokerageObj.sellValue * sellBrokerage.stampDuty;
          this.newBrokerageObj.sebi = this.brokerageObj.sellValue * sellBrokerage.turnoverFees;
          if (this.brokerageObj.selectedScrip.SegmentId == 1 || this.brokerageObj.selectedScrip.SegmentId == 3) {
            this.newBrokerageObj.clearance = 0.01;
          } else {
            this.newBrokerageObj.clearance = this.brokerageObj.sellValue * sellBrokerage.clearingCharges;
          }
          this.newBrokerageObj.GST = (this.newBrokerageObj.brokerage + this.newBrokerageObj.transactionCharge + this.newBrokerageObj.clearance) * sellBrokerage.gst;
        }
        if (this.brokerageObj.buyValue) {
          // this.newBrokerageObj.brokerageRate=buyBrokerage.brokerage;
          // if(this.brokerageObj.selectedScrip.OptionType === 'CE' || this.brokerageObj.selectedScrip.OptionType === 'PE'){
          //   this.newBrokerageObj.brokerage = this.newBrokerageObj.brokerage + (this.brokerageObj.quantity*this.newBrokerageObj.brokerageRate);
          // }else{
          //   this.newBrokerageObj.brokerage =   this.newBrokerageObj.brokerage+ (this.brokerageObj.buyValue*(this.newBrokerageObj.brokerageRate/100))
          // }
          this.newBrokerageObj.stt = this.newBrokerageObj.stt + this.brokerageObj.buyValue * buyBrokerage.stt;
          this.newBrokerageObj.transactionCharge = this.newBrokerageObj.transactionCharge + this.brokerageObj.buyValue * buyBrokerage.transactionCharges;
          this.newBrokerageObj.stateStampDuty = this.newBrokerageObj.stateStampDuty + this.brokerageObj.buyValue * buyBrokerage.stampDuty;
          this.newBrokerageObj.sebi = this.newBrokerageObj.sebi + this.brokerageObj.buyValue * buyBrokerage.turnoverFees;
          if (this.brokerageObj.selectedScrip.SegmentId == 1 || this.brokerageObj.selectedScrip.SegmentId == 3) {
            this.newBrokerageObj.clearance = this.newBrokerageObj.clearance + 0.01;
          } else {
            this.newBrokerageObj.clearance = this.newBrokerageObj.clearance + this.brokerageObj.buyValue * buyBrokerage.clearingCharges;
          }
          this.newBrokerageObj.GST = (this.newBrokerageObj.brokerage + this.newBrokerageObj.transactionCharge + this.newBrokerageObj.clearance) * buyBrokerage.gst;
        }
        console.log(JSON.parse(JSON.stringify(this.newBrokerageObj)), " this.newBrokerageObj", JSON.parse(JSON.stringify(this.brokerageObj)));
        Object.assign(this.brokerageObj, this.newBrokerageObj);
        Object.assign(this.newBrokerageObj, this.brokerageObj);
        //       console.log( " this.newBrokerageObj2" ,JSON.parse(JSON.stringify(this.newBrokerageObj)))
        // mBrokerageRate = (mChargesRsp?.brokerage?.toDouble() ?: 0.01)
        // mBrokerage = if(mScripInfo.isOption()){
        //     (mQty * (mBrokerageRate))
        // }else{
        //     (mAmount * (mBrokerageRate/100))
        // }
        // mStt = (mAmount * (mChargesRsp?.stt ?: 0.01))
        // mTransactionCharges = (mAmount * (mChargesRsp?.transactionCharges ?: 0.01))
        // mClearingCharges = if(mScripInfo.isCash()){
        //     defaultClearanceChargeCash
        // }else{
        //     (mAmount * (mChargesRsp?.clearingCharges ?: 0.01))
        // }
        //   mStampDuty = (mAmount * (mChargesRsp?.stampDuty ?: 0.01))
        // mSebiFees = (mAmount * (mChargesRsp?.turnoverFees ?: 0.01))
        // mGst = ((mBrokerage + mTransactionCharges + mClearingCharges) * 0.18)
        // mTotalCharges = (mBrokerage + mStt + mTransactionCharges + mClearingCharges + mStampDuty
        //         + mSebiFees + mGst)
      } else {
        this.utils.error("Error", res.Reason || "Something went wrong");
      }
    }, err => {
      this.shared.isServiceHit = false;
    });
  }
  static {
    this.ctorParameters = () => [{
      type: _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_5__.UtilsService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.NgZone
    }, {
      type: _services_rest_tool_service__WEBPACK_IMPORTED_MODULE_2__.ToolService
    }, {
      type: _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_3__.SeoService
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router
    }, {
      type: _services_sockets_broadcaster__WEBPACK_IMPORTED_MODULE_4__.Broadcaster
    }, {
      type: _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_6__.SharedDataService
    }];
  }
  static {
    this.propDecorators = {
      brokerageUl: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild,
        args: ["brokerageUl", {
          static: false
        }]
      }]
    };
  }
};
BrokerageCalculatorComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: "app-brokerage-calculator",
  template: _brokerage_calculator_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _directives_input_restrict2_directive__WEBPACK_IMPORTED_MODULE_9__.InputRestrict2Directive, _pipes_condense_pipe__WEBPACK_IMPORTED_MODULE_8__.CondensePipe, _pipes_value_pipe__WEBPACK_IMPORTED_MODULE_7__.ValuePipe],
  styles: [(_brokerage_calculator_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__metadata)("design:paramtypes", [_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_5__.UtilsService, _angular_core__WEBPACK_IMPORTED_MODULE_10__.NgZone, _services_rest_tool_service__WEBPACK_IMPORTED_MODULE_2__.ToolService, _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_3__.SeoService, _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router, _services_sockets_broadcaster__WEBPACK_IMPORTED_MODULE_4__.Broadcaster, _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_6__.SharedDataService])], BrokerageCalculatorComponent);


/***/ }),

/***/ 60245:
/*!**************************************************************************************************!*\
  !*** ./src/app/tools-module/brokerage-calculator/brokerage-calculator.component.scss?ngResource ***!
  \**************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ 8564);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 98557);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@charset "UTF-8";
/*Bootstrap Override*/
/*Custom variables*/
/*Icons Variables*/
/*Responsive screen width*/
.wrap-card {
  position: fixed;
  left: 0;
  right: 0;
  top: 60px;
  bottom: 60px;
  padding-bottom: 10px;
  z-index: 9;
  overflow: auto;
  margin-bottom: 0;
  background: #fafbfd;
}
.wrap-card.theme-2 {
  position: static;
  margin-bottom: 60px;
  background: none;
  box-shadow: none;
}
.wrap-card.theme-2 .left-section {
  background: none;
}
@media (min-width: 1550px) {
  .wrap-card {
    bottom: 45px;
  }
}
@media (max-width: 990px) {
  .wrap-card {
    display: block;
  }
}
@media (min-width: 1550px) {
  .wrap-card {
    top: 80px;
  }
}
@media (max-width: 990px) {
  .wrap-card {
    top: 40px;
  }
}
@media (max-width: 767px) {
  .wrap-card {
    top: 60px;
    bottom: 80px;
  }
}
@media (max-width: 767px) and (orientation: landscape) {
  .wrap-card {
    bottom: 45px;
  }
}

.switch-wrap {
  margin-top: 0;
  margin-bottom: 40px;
}

.expandcharges {
  display: flex;
  justify-content: space-between;
}
.expandcharges span {
  font-weight: bold;
}
.expandcharges + .expandcharges {
  margin-top: 5px;
  font-size: 15px;
}

.left-section {
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1100px;
  padding: 50px;
  background: #fafbfd;
  margin: 0 auto;
}
@media (max-width: 990px) {
  .left-section {
    width: 100%;
  }
}
@media (max-width: 1550px) {
  .left-section {
    padding: 40px 0;
  }
}
@media (max-width: 767px) {
  .left-section {
    padding: 15px;
  }
}
.left-section .wrapper {
  width: 100%;
}
.left-section .title {
  font-weight: bold;
  margin-bottom: 10px;
  margin-top: 0;
  font-size: 24px;
}
.left-section .sub-title {
  font-size: 16px;
  line-height: 24px;
  color: #797979;
}
.left-section .brockrage-res-text {
  margin-left: 0;
}
.left-section .select-region {
  margin: 20px 0;
  display: block;
}
.left-section .select-region span {
  line-height: 2.5;
  font-size: 18px;
  color: #000000;
  display: inline-block;
  vertical-align: middle;
}
.left-section .select-region .custom-select {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  min-width: 170px;
  background: transparent;
}
.left-section .select-region .brockrage-cal-leftpad select {
  padding-left: 10px;
}
.left-section .select-region .region-text {
  margin-right: 6px;
}
.left-section .nav-tabs {
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.16);
  border-bottom: 0;
}
.left-section .nav-tabs li a {
  padding: 15px 25px;
  font-weight: 600;
}
@media (max-width: 480px) {
  .left-section .nav-tabs li a {
    padding: 15px 18px;
  }
}
.left-section .nav-tabs.inside-tab {
  margin-bottom: 0;
  box-shadow: none;
}
.left-section .nav-tabs.inside-tab li a {
  background: transparent;
}
.left-section .nav-tabs.inside-tab li.active a, .left-section .nav-tabs.inside-tab li:hover a {
  background: #ffffff;
  color: #EE404A !important;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.16);
}
.left-section .inside-tab-content {
  background: #ffffff;
  padding: 40px;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.16);
  z-index: 9;
  position: relative;
}
@media (max-width: 1550px) {
  .left-section .inside-tab-content {
    padding: 20px;
  }
}

.right-section {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to right, #ffc174 0%, #fe616e 100%);
  color: #ffffff;
  width: 40%;
  padding: 50px;
  font-size: 24px;
  text-align: center;
}
@media (max-width: 990px) {
  .right-section {
    width: 100%;
    padding: 40px;
    margin-bottom: 40px;
  }
}
@media (max-width: 1550px) {
  .right-section {
    padding: 25px;
    font-size: 18px;
  }
}
@media (max-width: 1200px) {
  .right-section {
    padding: 20px;
    font-size: 16px;
  }
}
@media (max-width: 767px) {
  .right-section {
    padding: 15px;
  }
}
@media (max-width: 480px) {
  .right-section {
    margin-bottom: 70px;
  }
}
.right-section input {
  font-weight: bold;
}
.right-section h3 {
  font-size: 24px;
  text-transform: uppercase;
  margin-bottom: 70px;
  margin-top: 0;
}
@media (max-width: 1550px) {
  .right-section h3 {
    font-size: 18px;
    margin-bottom: 30px;
  }
}
.right-section .percentage-input {
  background: transparent;
  border: none;
  outline: none;
  box-shadow: none;
  border-bottom: 1px solid #ffffff;
  width: 50px;
  text-align: center;
}
.right-section .btn {
  font-size: 18px;
  font-weight: bold;
  border-radius: 10px;
  box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.16);
  padding: 15px 22px;
  background-image: linear-gradient(to bottom, #ffc174 0%, #fe616e 100%);
}

/**Form Group*/
.form-group {
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
@media (max-width: 767px) {
  .form-group {
    margin-bottom: 10px;
  }
}
.form-group label {
  font-size: 16px;
  color: #797979;
  font-weight: normal;
  margin-bottom: 0px;
  width: 50%;
}
@media (max-width: 1550px) {
  .form-group label {
    margin-bottom: 5px;
  }
}
@media (max-width: 1200px) {
  .form-group label {
    font-size: 14px;
  }
}
.form-group .form-control {
  color: #000000;
  border: none;
  border-bottom: 1px solid #F4F3F8;
  box-shadow: none;
  outline: none;
  font-weight: 600;
  font-size: 18px;
  width: 50%;
}
@media (max-width: 1200px) {
  .form-group .form-control {
    font-size: 16px;
  }
}
.form-group .form-control:focus {
  outline: none;
}
.form-group .input-wrap input {
  width: 100%;
}
.form-group .input-wrap p {
  margin-top: 5px;
  margin-bottom: 0;
}
@media (max-width: 767px) {
  .form-group .input-wrap .brockrage-quantity {
    margin-left: 30px;
    width: 83%;
  }
}
.form-group .price {
  position: relative;
  width: 50%;
}
.form-group .price .form-control {
  padding-left: 25px;
  width: 100%;
}
.form-group .price:before {
  content: "₹";
  position: absolute;
  left: 0;
  font-weight: normal;
  font-size: 20px;
  top: 2px;
}
@media (max-width: 1200px) {
  .form-group .price:before {
    font-size: 18px;
  }
}
.form-group .percentage {
  position: relative;
  width: 50%;
}
.form-group .percentage .form-control {
  padding-right: 25px;
  width: 100%;
}
.form-group .percentage:after {
  content: "%";
  position: absolute;
  right: 0;
  font-weight: normal;
  font-size: 20px;
  top: 2px;
}
@media (max-width: 1200px) {
  .form-group .percentage:after {
    font-size: 18px;
  }
}

.dark-card {
  background-image: linear-gradient(to right, #ffc174 0, #fe616e 100%);
}

.mb-0 {
  margin-bottom: 0px !important;
}

.checkbox-wrap {
  margin: 40px 0;
  display: flex;
  align-items: center;
}
@media (max-width: 1550px) {
  .checkbox-wrap {
    margin: 20px 0;
  }
}
.checkbox-wrap .checkbox-button + .checkbox-button {
  margin-left: 40px;
}

.flex-div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #F4F3F8;
}
.flex-div label {
  margin-bottom: 0;
  min-width: 50%;
  padding-right: 15px;
}
.flex-div .form-control {
  border-bottom: 0;
}

.pink-color label {
  color: #EE404A;
}
.pink-color .form-control {
  color: #EE404A;
}
.pink-color .price:before {
  color: #EE404A;
}

/*Checkbox*/
.checkbox-button {
  cursor: pointer;
  margin-bottom: 18px;
}
.checkbox-button input[type=radio] {
  font-size: 16px;
  line-height: 1.5;
  padding: 11px 23px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0;
  outline: 0;
  padding: 0;
  background-color: transparent;
  opacity: 0;
  position: absolute;
  width: auto;
}
.checkbox-button input[type=radio]:checked + .checkbox-button__control:after {
  content: "";
  display: block;
  position: absolute;
  top: 3px;
  left: 3px;
  width: 15px;
  border-radius: 2px;
  height: 15px;
  background-image: linear-gradient(to right, #ffc174 0%, #fe616e 100%);
}
.checkbox-button .checkbox-button__control {
  position: relative;
  display: inline-block;
  width: 25px;
  border-radius: 2px;
  height: 25px;
  padding: 0.4rem;
  margin-right: 8px;
  vertical-align: top;
  background-color: inherit;
  border: 2px solid #F4F3F8;
  vertical-align: middle;
}
.checkbox-button .checkbox-button__label {
  display: inline-block;
  vertical-align: middle;
  font-size: 14px;
  color: #797979;
}
.checkbox-button .checkbox-button__label.selected {
  color: #EE404A;
}

.brokerage-charges-row {
  color: #ffffff;
}
.brokerage-charges-row .hrline-cnote {
  margin-top: 20px;
  margin-bottom: 20px;
}
.brokerage-charges-row span {
  font-weight: bold;
}

.brokerage-summary-row {
  color: #ffffff;
}
.brokerage-summary-row .brokerage-summary-col1,
.brokerage-summary-row .brokerage-summary-col2 {
  font-size: 13px;
}
.brokerage-summary-row .brokerage-summary-col1 p,
.brokerage-summary-row .brokerage-summary-col2 p {
  margin: 0 0 5px;
  color: #ffffff;
}
.brokerage-summary-row .brokerage-summary-col1 span,
.brokerage-summary-row .brokerage-summary-col2 span {
  float: right;
  text-align: left;
  font-weight: bold;
}
.brokerage-summary-row .brokerage-summary-col2 {
  font-size: 14px;
  margin-top: 10px;
}

.summarytotal {
  margin-bottom: 30px;
}

.showcharges-section {
  padding: 0 15px;
}
.showcharges-section a {
  display: inline-block;
  color: #ffffff;
  font-weight: bold;
  text-decoration: none;
}
.showcharges-section a i {
  display: inline-block;
  vertical-align: middle;
  font-size: 25px;
  margin-right: 8px;
}
.showcharges-section a span {
  display: inline-block;
  vertical-align: middle;
}

.collapse {
  height: 0px;
  transition: 0.5s ease;
  transition-delay: 0.5s;
  visibility: hidden;
}
.collapse.in {
  height: auto;
  visibility: visible;
}

.brokerage-search-input {
  width: 100%;
  border: none;
  border-bottom: 1px solid #F4F3F8;
  height: 40px;
  padding: 15px;
  font-size: 16px;
}

.broke-res-input {
  border-bottom: none;
}
@media (max-width: 767px) {
  .broke-res-input {
    font-size: 13px;
  }
}

.brokerage-search-result {
  list-style: none;
  padding-left: 0;
  position: absolute;
  top: 100%;
  z-index: 9;
  background: #ffffff;
  width: 100%;
  padding: 0;
  border: 1px solid #F4F3F8;
  max-height: 250px;
  overflow: auto;
}
.brokerage-search-result li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #F4F3F8;
  cursor: pointer;
  font-size: 1.1rem;
}
.brokerage-search-result li:hover {
  background: #ebebeb;
}
.brokerage-search-result li:last-child {
  border-bottom: 0px;
}
.brokerage-search-result li span.symbol {
  width: 30%;
  font-weight: bold;
  padding: 10px 5px;
  text-align: left;
}
@media (max-width: 560px) {
  .brokerage-search-result li span.symbol {
    display: none;
  }
}
.brokerage-search-result li span.exchange {
  width: 15%;
  font-size: 80%;
  text-align: center;
  padding: 10px 5px;
  text-align: right;
}
.brokerage-search-result li span.name {
  width: 55%;
  padding: 10px 5px;
}

.brokerage-search {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  margin-bottom: 45px;
}
.brokerage-search input {
  outline: none;
}
.brokerage-search i {
  font-size: 20px;
}

.card-wrapper {
  display: flex;
  align-items: center;
  position: relative;
}
@media (max-width: 767px) {
  .card-wrapper {
    display: block;
  }
}
.card-wrapper .card {
  width: 60%;
  margin-bottom: 0px;
}
@media (max-width: 767px) {
  .card-wrapper .card {
    width: 100%;
  }
}
.card-wrapper .card.left-card {
  padding-top: 45px;
  padding-bottom: 45px;
}
@media (min-width: 1550px) {
  .card-wrapper .card.left-card {
    padding-top: 30px;
    padding-bottom: 30px;
  }
}
.card-wrapper .card.dark-card {
  width: 41%;
  position: relative;
}
@media (max-width: 767px) {
  .card-wrapper .card.dark-card {
    width: 100%;
  }
}
.card-wrapper .card.dark-card:before {
  content: "";
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 15px 0 0 15px;
  border-color: transparent transparent transparent #3E4152;
  position: absolute;
  left: 0;
  top: -15px;
}
@media (max-width: 767px) {
  .card-wrapper .card.dark-card:before {
    display: none;
  }
}
.card-wrapper .card.dark-card:after {
  content: "";
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 15px 15px 0 0;
  border-color: #3E4152 transparent transparent transparent;
  position: absolute;
  left: 0;
  bottom: -15px;
}
@media (max-width: 767px) {
  .card-wrapper .card.dark-card:after {
    display: none;
  }
}
.card-wrapper .card.dark-card .card-block {
  padding: 37px 45px;
  background: #3E4152;
}
@media (max-width: 990px) {
  .card-wrapper .card.dark-card .card-block {
    padding: 37px 20px;
  }
}

html {
  font-size: 14px;
}
@media (max-width: 1399px) {
  html {
    font-size: 14px;
  }
}
@media (max-width: 991px) {
  html {
    font-size: 13px;
  }
}
@media (max-width: 599px) {
  html {
    font-size: 12px;
  }
}
html body {
  font-size: 1rem;
}

@media (max-width: 767px) {
  .brokerage-res-cal {
    margin-bottom: 15px;
  }
}

@media (max-width: 767px) {
  .seo-section-res {
    margin-bottom: 46px;
  }
}
.seo-section-res p {
  color: #797979;
}

.brokerage-btn {
  display: flex;
  place-content: space-evenly;
}`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 26161:
/*!**************************************************************************************************!*\
  !*** ./src/app/tools-module/brokerage-calculator/brokerage-calculator.component.html?ngResource ***!
  \**************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "@if (shared?.isServiceHit) {\r\n  <img class=\"loader jhjh\" src=\"assets/images/loader.gif\" />\r\n}\r\n<div class=\"card wrap-card flex-ht padding0 theme-2\">\r\n  <div class=\"left-section\">\r\n    <div class=\"wrapper\">\r\n      <!--Middle-->\r\n      <h1 class=\" title\">Brokerage Calculator</h1>\r\n      <p class=\"sub-title brockrage-res-text\">Use the brokerage calculator to calculate exactly how much you will pay in brokerage and your\r\n      breakeven.</p>\r\n      <div class=\"select-region\" style=\"display: none;\">\r\n        <span class=\"region-text\">Calculating tax rates applicable in</span>\r\n        <div class=\"custom-select brockrage-cal-leftpad \">\r\n          <select class=\"form-control\" aria-label=\"State Name\" [(ngModel)]=\"brokerageObj.state\"\r\n            (change)=\"onStateChange()\">\r\n            @for (item of stateArray; track item) {\r\n              <option value=\"{{item.value}}\">{{item.name}}</option>\r\n            }\r\n            <!-- <option>Maharashtra</option>\r\n            <option>Maharashtra</option>\r\n            <option>Maharashtra</option>\r\n            <option>Maharashtra</option> -->\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-wrapper\">\r\n        <div class=\"card left-card mb-0\">\r\n          <div class=\"card-block\">\r\n            <form>\r\n              <div class=\"text-center switch-wrap m-auto brokerage-res-cal\">\r\n                <label class=\"control-label mr-10\" for=\"orderType\" [class.selected]=\"!brokerageObj.orderType\">\r\n                  <span>Intraday</span>\r\n                </label>\r\n                <label class=\"switch\">\r\n                  <input name=\"orderType\" id=\"orderType\" type=\"checkbox\" [(ngModel)]=\"brokerageObj.orderType\"\r\n                    (change)=\"onOrderTypeChange()\">\r\n                    <div class=\"slider round\"></div>\r\n                  </label>\r\n                  <label class=\"control-label ml-10\" for=\"orderType\" [class.selected]=\"brokerageObj.orderType\">\r\n                    <span>Delivery</span>\r\n                  </label>\r\n                </div>\r\n              </form>\r\n              <form novalidate=\"\" class=\"ng-untouched ng-pristine ng-valid\" autocomplete=\"off\">\r\n                <div class=\"col-xs-12\">\r\n                  <div class=\"brokerage-search\">\r\n                    <input class=\"brokerage-search-input broke-res-input\" placeholder=\"Search for scrips by entering minimum 3 letters\"\r\n                      name=\"brokerageSearchInput\" type=\"text\" (input)=\"onInputPress($event)\" (focus)=\"onFocus()\"\r\n                      aria-label=\"Brokerage search\" (focusout)=\"focusOut()\" [(ngModel)]=\"brokerageObj.searchInput\"\r\n                      #searchInput=\"ngModel\" autocomplete=\"off\"\r\n                      inputRestrict=\"alphanumeric\" (paste)=\"false\">\r\n                      <i class=\"icon-search\"></i>\r\n                      <ul #brokerageUl class=\"brokerage-search-result\" (scroll)=\"onUlScroll($event)\">\r\n                        @if (brokerageObj.tableValue.length === 0 && searchFocus && brokerageObj.searchInput && (brokerageObj.searchInput?.length >0 || brokerageObj.searchInput?.length <= 2) && searchInput?.dirty) {\r\n                          <li\r\n                            >\r\n                          No Record Found</li>\r\n                        }\r\n                        @for (item of brokerageObj.tableValue; track item) {\r\n                          <li (click)=\"getScriptDetail(item)\">\r\n                            <span class=\"symbol\">{{item?.SecName}}</span>\r\n                            <span class=\"name\">{{item?.SecDesc}}</span>\r\n                            <span class=\"exchange\">{{item?.ExchangeSegment}}</span>\r\n                          </li>\r\n                          }\r\n                        </ul>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-xs-12\">\r\n                      <div class=\"col-sm-12\">\r\n                        <div class=\"form-group\">\r\n                          <label>{{(brokerageObj.selectedScrip.SegmentId == 2 || brokerageObj.selectedScrip.SegmentId == 4 || brokerageObj.selectedScrip.SegmentId == 5 ||\r\n                            brokerageObj.selectedScrip.SegmentId\r\n                            == 7 || brokerageObj.selectedScrip.SegmentId == 13 || brokerageObj.selectedScrip.SegmentId == 38 || brokerageObj?.selectedScrip?.MarketLot >\r\n                          1)?'Lot(s)':'Quantity'}}</label>\r\n                          <div class=\"input-wrap\">\r\n                            <input name=\"quantity\" class=\"form-control brockrage-quantity\" [(ngModel)]=\"brokerageObj.quantity\"\r\n                              aria-label=\"quantity\" inputRestrict=\"unsignedInteger\" type=\"text\" (input)=\"onQuantityChange()\"\r\n                              maxlength=\"6\">\r\n                              @if (brokerageObj.selectedScrip.SegmentId == 2 || brokerageObj.selectedScrip.SegmentId == 4 || brokerageObj.selectedScrip.SegmentId == 5 || brokerageObj.selectedScrip.SegmentId == 7 || brokerageObj.selectedScrip.SegmentId == 13 || brokerageObj.selectedScrip.SegmentId == 38 || brokerageObj?.selectedScrip?.MarketLot > 1) {\r\n                                <p\r\n                                  >\r\n                                1 lot = {{brokerageObj.selectedScrip.MarketLot}}</p>\r\n                              }\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"col-sm-12\">\r\n                          <div class=\"form-group\">\r\n                            <label>Buy Price</label>\r\n                            <div class=\"price\">\r\n                              <input name=\"buyPrice\" class=\"form-control\" [(ngModel)]=\"brokerageObj.buyPrice\" type=\"text\"\r\n                                aria-label=\"buyprice\" (input)=\"onQuantityChange()\" maxlength=\"10\"\r\n                                (keypress)=\"allowOnlyDigits($event)\" autocomplete=\"off\">\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-xs-12 \">\r\n                            <div class=\"form-group\">\r\n                              <label>Sell Price</label>\r\n                              <div class=\"price\">\r\n                                <input name=\"sellPrice\" class=\"form-control\" type=\"text\" [(ngModel)]=\"brokerageObj.sellPrice\"\r\n                                  aria-label=\"Sellprice\" (input)=\"onQuantityChange()\" maxlength=\"10\"\r\n                                  (keypress)=\"allowOnlyDigits($event)\" autocomplete=\"off\">\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-xs-12 \">\r\n                              <div class=\"form-group\">\r\n                                <label>Brokerage Rate</label>\r\n                                <div [class.price]=\"brokerageObj?.selectedScrip?.isPrice\"\r\n                                  [class.percentage]=\"!brokerageObj?.selectedScrip?.isPrice\">\r\n                                  <input name=\"brokerageRate\" class=\"form-control\" type=\"text\" aria-label=\"brokeragelate\"\r\n                                    [(ngModel)]=\"brokerageObj.brokerageRate\" (input)=\"onBrokerageRateChange()\" maxlength=\"10\"\r\n                                    (keypress)=\"allowOnlyDigits($event)\"\r\n                                    [placeholder]=\"'Rate per '+(brokerageObj?.selectedScrip?.MarketLot > 1?'Lot':'Qty')\"\r\n                                    autocomplete=\"off\">\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </form>\r\n                          <div class=\"clearfix\"></div>\r\n                          <div class=\"brokerage-btn\">\r\n                            <button class=\"btn-buy btn buy\" (click)=\"getBrokerage()\"> Calculate Brokerage </button>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"card dark-card \">\r\n                        <div class=\"card-block\">\r\n                          <div class=\"brokerage-charges-row\">\r\n                            <div class=\"expandcharges\">\r\n                              <div>Turnover</div>\r\n                              <span>₹&nbsp;\r\n                                <span>{{newBrokerageObj?.turnOver | condense}}</span>\r\n                              </span>\r\n                            </div>\r\n                            <div class=\"expandcharges\">\r\n                              <div>Brokerage</div>\r\n                              <span>₹&nbsp;\r\n                                <span>{{newBrokerageObj?.brokerage | condense}}</span>\r\n                              </span>\r\n                            </div>\r\n                            <!-- <div class=\"expandcharges\">\r\n                            <div>Breakeven</div>\r\n                            <span>₹&nbsp;\r\n                              <span>4.61</span>\r\n                            </span>\r\n                          </div> -->\r\n                          <div class=\"expandcharges\">\r\n                            <div>Net P&L</div>\r\n                            <span>₹&nbsp;\r\n                              <span>{{((newBrokerageObj?.sellValue)-(newBrokerageObj?.buyValue)-((newBrokerageObj?.brokerage)+(newBrokerageObj?.stt)+(newBrokerageObj?.transactionCharge)+(newBrokerageObj?.clearance)+(newBrokerageObj?.GST)+(newBrokerageObj?.sebi)))|condense}}</span>\r\n                            </span>\r\n                          </div>\r\n                          <div class=\"clearfix\"></div>\r\n                          <div>\r\n                            <hr class=\"hrline-cnote\">\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"brokerage-summary-row collapse in\" dataid=\"showChargesCollapse\">\r\n                          <div class=\"brokerage-summary\">\r\n                            <div class=\"brokerage-summary-col1\">\r\n                              <p>Brokerage\r\n                                <span>₹&nbsp;\r\n                                  <span>{{newBrokerageObj?.brokerage | condense}}</span>\r\n                                </span>\r\n                              </p>\r\n                              <p>STT/CTT\r\n                                <span>₹&nbsp;\r\n                                  <span>{{newBrokerageObj?.stt | condense}}</span>\r\n                                </span>\r\n                              </p>\r\n                              <p>Transaction Charges\r\n                                <span>₹&nbsp;\r\n                                  <span>{{newBrokerageObj?.transactionCharge | condense}}</span>\r\n                                </span>\r\n                              </p>\r\n                              <p>Clearing Charges\r\n                                <span>₹&nbsp;\r\n                                  <span>{{newBrokerageObj?.clearance | condense}}</span>\r\n                                </span>\r\n                              </p>\r\n                              <p>GST\r\n                                <span>₹&nbsp;\r\n                                  <span>{{newBrokerageObj?.GST | condense}}</span>\r\n                                </span>\r\n                              </p>\r\n                              <p>State Stamp Duty\r\n                                <span>₹&nbsp;\r\n                                  <span>{{newBrokerageObj?.stateStampDuty | value:'1.2-2'}}</span>\r\n                                </span>\r\n                              </p>\r\n                              <p>SEBI Turnover Fees\r\n                                <span>₹&nbsp;\r\n                                  <span>{{newBrokerageObj?.sebi | value:'1.2-2'}}</span>\r\n                                </span>\r\n                              </p>\r\n                              <p class=\"summarytotal\">TOTAL TAXES AND CHARGES\r\n\r\n\r\n                                <span>₹&nbsp;\r\n                                  <span>{{((newBrokerageObj?.brokerage)+(newBrokerageObj?.stt)+(newBrokerageObj?.transactionCharge)+(newBrokerageObj?.clearance)+(newBrokerageObj?.stateStampDuty)+(newBrokerageObj?.GST)+(newBrokerageObj?.sebi))\r\n                                  | condense}}</span>\r\n                                </span>\r\n                              </p>\r\n                            </div>\r\n                            <div class=\"brokerage-summary-col2\">\r\n                              <p>Net Buy Value\r\n                                <span>₹&nbsp;\r\n                                  <span>{{(newBrokerageObj?.buyValue) | condense}}</span>\r\n                                </span>\r\n                              </p>\r\n                              <p>Net Sell Value\r\n                                <span>₹&nbsp;\r\n                                  <span>{{newBrokerageObj?.sellValue | condense}}</span>\r\n                                </span>\r\n                              </p>\r\n                              <!-- <p>Breakeven\r\n                              <span class=\"totalval\">₹&nbsp;\r\n                                <span>4.61</span>\r\n                              </span>\r\n                            </p> -->\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"clearfix\"></div>\r\n                      </div>\r\n                      <!-- <div class=\"showcharges-section\">\r\n                      <a class=\"collapsed\" (click)=\"collapseOpen = !collapseOpen\">\r\n                        <i class=\"icon-angle-down\"></i>\r\n                        <span *ngIf=\"!collapseOpen\">SHOW CHARGES BREAKUP</span>\r\n                        <span *ngIf=\"collapseOpen\">HIDE CHARGES BREAKUP</span>\r\n                      </a>\r\n                    </div> -->\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!--RIGHT SECTION-->\r\n          <!-- <div class=\"right-section\">\r\n          <div>\r\n            <h3>Calculate How Much Brokergae You Save?</h3>\r\n            <div class=\"calculate-text\">\r\n              The average brokerage charge is\r\n              <input type=\"text\" class=\"percentage-input\"> % of your turnover, which amounts to Rs\r\n              <strong>21345/-</strong>\r\n              <br>\r\n                <strong>At Choice FinX, it is Re. 1/- per day, per segment.</strong>\r\n                <br>\r\n                  <br> You Save Rs\r\n                    <strong>122343/-</strong>\r\n                    <br> per transaction, per day.\r\n                      <br>\r\n                        <br>\r\n                          <button (click)=\"goToSignup()\" class=\"btn btn-gradient\">START INVESTING</button>\r\n                        </div>\r\n                      </div>\r\n                    </div> -->\r\n\r\n                    <!-- Advert Banner :: Start -->\r\n                    @if ((!shared.userId || shared.userId == 'guest')) {\r\n                      <section>\r\n                        <div class=\"container\" (click)=\"navigateToFreeAccountSignup()\">\r\n                          <div class=\"row add_banner_sub red-theme\">\r\n                            <div class=\"col-md-6 add-left-text\">\r\n                              <div class=\"add-left-sub\">\r\n                                <h2>Wait! <span class=\"small-font\">Before You Go</span></h2>\r\n                                <h4>OPEN A FREE</h4>\r\n                                <h3>DEMAT ACCOUNT</h3>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-md-6 add-right-text\">\r\n                              <div class=\"add-right-sub\">\r\n                                <ul>\r\n                                  <li><span>+</span> Zero Account Opening Fee </li>\r\n                                  <li><span>+</span> Free First Year AMC </li>\r\n                                  <li><span>+</span> Zero Square Off Charges </li>\r\n                                  <li><span>+</span> Zero Call for Trade Charges</li>\r\n                                </ul>\r\n                                <a class=\"add-btn\">OPEN MY ACCOUNT</a>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </section>\r\n                    }\r\n                    <!-- Advert Banner :: Start -->\r\n\r\n                    <!-- added open an account banner (12/05/2021) -->\r\n                    <!-- <section class=\"seo-section clearfix\" *ngIf=\"(!shared.userId || shared.userId == 'guest')\">\r\n                    <div class=\"col-md-12\">\r\n                      <div class=\"card mb-0\">\r\n                        <div class=\"card-block\">\r\n                          <img src=\"../../../assets/images/Open-Free-Account1.png\" alt=\"Online Stock Trading Platform\" class=\"img-responsive\" (click)=\"utils.navigateToOpenAccount()\"/>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </section> -->\r\n\r\n                  <section class=\"seo-section seo-section-res\">\r\n                    <div class=\"container\">\r\n                      <h2>Online Brokerage Calculator</h2>\r\n                      <p>Use our easy Brokerage Calculator to calculate your entire brokerage costs and other transaction costs even\r\n                        before you execute your trades. Choice Broking aims to provide complete transparency in terms of trading fees\r\n                        and\r\n                        charges even before you place your trading order with us. Find accurate costs of Intraday Trading and Delivery\r\n                      with our Equity Brokerage Calculator.</p>\r\n                      <p>Apart from delivery brokerage or intraday brokerage other trading expenses such as STT, State-wise Stamp Duty,\r\n                        Exchange Transaction Charges can also be directly seen with the Brokerage Calculator. It also gives a detailed\r\n                        breakdown of other charges like transaction charges, STT, Stamp Duty for each State, SEBI turnover charges, GST\r\n                        &\r\n                        Transaction Charges. You can also see how much you need to break even. Just provide your Buy & Sell details &\r\n                        you\r\n                      are all done.</p>\r\n                      <p>It is flexible enough for you to calculate brokerage for all asset classes like Equity Intraday, Equity\r\n                        Delivery,\r\n                      Equity Futures, Equity Options, Currency Futures, Currency Options & Commodity.</p>\r\n                      <p>It is a helpful tool provided to our investors to get a clear picture of the amount you will be paying for on\r\n                        your investments.\r\n                      </p>\r\n                      <!-- routerLink=\"/onboarding/onboardwalkthrough\" -->\r\n                      <button class=\"btn btn-gradient \" (click)=\"navigateToFreeAccountSignup('sign_up')\">Start Trading</button>\r\n                    </div>\r\n                  </section>\r\n                </div>";

/***/ })

}]);