(self["webpackChunkjiffy_upgraded"] = self["webpackChunkjiffy_upgraded"] || []).push([[3742],{

/***/ 52467:
/*!*****************************************************************************!*\
  !*** ./src/app/company-module/advance-decline/advance-decline.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdvanceDeclineComponent: () => (/* binding */ AdvanceDeclineComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _advance_decline_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./advance-decline.component.html?ngResource */ 58173);
/* harmony import */ var _advance_decline_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./advance-decline.component.scss?ngResource */ 60705);
/* harmony import */ var _advance_decline_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_advance_decline_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var src_app_services_rest_company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/rest/company.service */ 12744);
/* harmony import */ var src_app_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/shared-data/shared-data.service */ 46013);
/* harmony import */ var src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/utils/utils.service */ 89893);
/* harmony import */ var _pipes_condense_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pipes/condense.pipe */ 82203);
/* harmony import */ var _pipes_value_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pipes/value.pipe */ 50615);









let AdvanceDeclineComponent = class AdvanceDeclineComponent {
  constructor(rest, utils, shared) {
    this.rest = rest;
    this.utils = utils;
    this.shared = shared;
    this.advancesDeclinesData = {};
  }
  ngOnChanges(changes) {
    if (changes['scripInfo'] && changes['scripInfo'].currentValue) {
      this.scripInfo = changes['scripInfo'].currentValue;
      if (this.scripInfo.SegmentId && this.scripInfo.Token && [1, 3].indexOf(Number(this.scripInfo.SegmentId)) > -1) {
        let request = {
          "nMarketSegmentId": Number(this.scripInfo.SegmentId),
          "nToken": Number(this.scripInfo.Token)
        };
        this.getAdvanceDeclines(this.scripInfo.SegmentId, '0');
        this.getAdvanceDeclines(this.scripInfo.SegmentId, this.scripInfo.Token);
      }
    }
  }
  ngOnInit() {}
  getAdvanceDeclines(segmentId, token) {
    this.rest.getAdvanceDeclines(segmentId, token).subscribe(res => {
      if (res.Status == "Success" && res.Response) {
        this.advancesDeclinesData[segmentId + '@' + token] = res.Response;
        this.advancesDeclinesData.Date = this.utils.changeCurrentDateFormat(res.Response.LastADSTxTime, 'YYYY-MM-DD HH:mm:ss', 'DD-MMM-YYYY HH:mm:ss');
        this.advancesDeclinesData[segmentId + '@' + token].LastADSTxTime = this.utils.changeCurrentDateFormat(res.Response.LastADSTxTime, 'YYYY-MM-DD HH:mm:ss', 'HH:mm:ss');
      }
    }, err => {});
  }
  static {
    this.ctorParameters = () => [{
      type: src_app_services_rest_company_service__WEBPACK_IMPORTED_MODULE_2__.CompanyService
    }, {
      type: src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_4__.UtilsService
    }, {
      type: src_app_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__.SharedDataService
    }];
  }
  static {
    this.propDecorators = {
      scripInfo: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input,
        args: ['scripInfo']
      }],
      secName: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input,
        args: ['secName']
      }]
    };
  }
};
AdvanceDeclineComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-advance-decline',
  template: _advance_decline_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  imports: [_pipes_condense_pipe__WEBPACK_IMPORTED_MODULE_5__.CondensePipe, _pipes_value_pipe__WEBPACK_IMPORTED_MODULE_6__.ValuePipe],
  styles: [(_advance_decline_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__metadata)("design:paramtypes", [src_app_services_rest_company_service__WEBPACK_IMPORTED_MODULE_2__.CompanyService, src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_4__.UtilsService, src_app_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__.SharedDataService])], AdvanceDeclineComponent);


/***/ }),

/***/ 12935:
/*!*****************************************************************!*\
  !*** ./src/app/company-module/best-five/best-five.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BestFiveComponent: () => (/* binding */ BestFiveComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _best_five_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./best-five.component.html?ngResource */ 29129);
/* harmony import */ var _best_five_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./best-five.component.scss?ngResource */ 68141);
/* harmony import */ var _best_five_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_best_five_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_sockets_socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/sockets/socket.service */ 6312);
/* harmony import */ var _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/utils/utils.service */ 89893);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/shared-data/shared-data.service */ 46013);
/* harmony import */ var _pipes_value_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pipes/value.pipe */ 50615);
/* harmony import */ var _pipes_segment_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pipes/segment.pipe */ 39995);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 60177);










/** Componet of bestfive, html,scss*/
let BestFiveComponent = class BestFiveComponent {
  /**
   * dependency injection and intialization of variable
   * @param utilsService for common processing of data
   * @param socketService for socket processing
   * @param sharedDataService for data to be shared between two components
   */
  constructor(utilsService, socketService, sharedDataService) {
    this.utilsService = utilsService;
    this.socketService = socketService;
    this.sharedDataService = sharedDataService;
    /**
     * bestfive bids array
    */
    this.best5Buy = [];
    /**
     * best Five offer array
    */
    this.best5sell = [];
    /**
     * lut from api
    */
    this.apiLut = 0;
    /**
     * lut from socket
    */
    this.serverLut = 0;
    this.best5Buy = [{
      "price": 0,
      "qty": 0
    }, {
      "price": 0,
      "qty": 0
    }, {
      "price": 0,
      "qty": 0
    }, {
      "price": 0,
      "qty": 0
    }, {
      "price": 0,
      "qty": 0
    }];
    this.best5sell = [{
      "price": 0,
      "qty": 0
    }, {
      "price": 0,
      "qty": 0
    }, {
      "price": 0,
      "qty": 0
    }, {
      "price": 0,
      "qty": 0
    }, {
      "price": 0,
      "qty": 0
    }];
  }
  /**
  * call getSocketResponse function
  */
  ngOnInit() {
    this.getSocketResponse();
  }
  /**
   * listen to keyInfo(prelogin)/best five and scripDetails response emitted from segmentToken,Accordingly process bestFive data
   * @param changes keyInfo(prelogin)/best five and scripDetails response emitted from segmentToken
   */
  ngOnChanges(changes) {
    if (changes['best5Response'] && changes['best5Response'].currentValue) {
      this.best5Response = JSON.parse(JSON.stringify(changes['best5Response'].currentValue));
      if (!this.sharedDataService.userId || this.sharedDataService.userId == 'guest') {
        this.best5Buy = [{
          "price": this.best5Response.BBP / this.best5Response["PriceDivisor"],
          "qty": this.best5Response.BBQ,
          order: this.best5Response.BBO
        }];
        this.best5sell = [{
          "price": this.best5Response.BSP / this.best5Response["PriceDivisor"],
          "qty": this.best5Response.BSQ,
          order: this.best5Response.BSO
        }];
      } else {
        if (this.best5Response.strB5Response.indexOf('19=') > 1) {
          this.best5Buy = [{
            "price": 0,
            "qty": 0
          }, {
            "price": 0,
            "qty": 0
          }, {
            "price": 0,
            "qty": 0
          }, {
            "price": 0,
            "qty": 0
          }, {
            "price": 0,
            "qty": 0
          }];
          this.best5sell = [{
            "price": 0,
            "qty": 0
          }, {
            "price": 0,
            "qty": 0
          }, {
            "price": 0,
            "qty": 0
          }, {
            "price": 0,
            "qty": 0
          }, {
            "price": 0,
            "qty": 0
          }];
        } else {
          let bestFiveResponseString = this.best5Response.strB5Response;
          this.splitData = [];
          this.best5Response.strB5Response = this.best5Response.strB5Response.replace(/\$/g, "|");
          this.splitData = this.utilsService.pipeToObject(this.best5Response.strB5Response);
          this.totalBuyQty = Number(this.splitData[0]["81"]);
          this.totalSellQty = Number(this.splitData[0]["82"]);
          this.LTT = this.utilsService.changeCurrentDateFormat(this.splitData[0][73], 'YYYY-MM-DD HHmmss', 'DD-MM-YYYY HH:mm:ss');
          this.LUT = this.utilsService.changeCurrentDateFormat(this.splitData[0][74], 'YYYY-MM-DD HHmmss', 'DD-MM-YYYY HH:mm:ss');
          this.volume = Number(this.splitData[0][79] || 0);
          this.best5Buy = [];
          this.best5sell = [];
          let buyDataString = bestFiveResponseString.substring(bestFiveResponseString.lastIndexOf("11=1|"), bestFiveResponseString.lastIndexOf("|11=2|"));
          let sellDataString = bestFiveResponseString.substring(bestFiveResponseString.lastIndexOf("11=2|"), bestFiveResponseString.lastIndexOf(""));
          this.priceDivisor = this.utilsService.getDefaultPriceDivisor(this.splitData[0]["1"], this.splitData[0]["7"]);
          let buyitems = [];
          let sellitems = [];
          let buyPrice = [];
          let sellPrice = [];
          buyDataString.split('|').forEach(x => {
            //var arr = x.split('=');
            if ((x || '').indexOf('12=') == 0) {
              let arr = x.split('$');
              let price = Number((arr[1] || '').split('=')[1]) || 0;
              let qty = (arr[0] || '').split('=')[1] || 0;
              let order = (arr[2] || '').split('=')[1] || 0;
              buyitems.push({
                "price": price / this.priceDivisor,
                "qty": qty,
                order: order
              });
              // if (arr[0] === "12") {
              //   let lastBuyItem = arr[1].split('$');
              //   let lastBuyPrice = arr[2].split('$');
              //   let lastBuyPricePriceDiv = (parseInt(lastBuyPrice[0]));
              //   buyitems.push((parseInt(lastBuyItem[0])));
              //   buyPrice.push(lastBuyPricePriceDiv)
            }
          });
          sellDataString.split('|').forEach(x => {
            //var arr = x.split('=');
            if ((x || '').indexOf('12=') == 0) {
              let arr = x.split('$');
              let price = Number((arr[1] || '').split('=')[1]) || 0;
              let qty = (arr[0] || '').split('=')[1] || 0;
              let order = (arr[2] || '').split('=')[1] || 0;
              sellitems.push({
                "price": price / this.priceDivisor,
                "qty": qty,
                order: order
              });
              // if (arr[0] === "12") {
              //   let lastSellItem = arr[1].split('$');
              //   let lasSellPrice = arr[2].split('$');
              //   let lastSellPriceDiv = (parseInt(lasSellPrice[0]));
              //   sellitems.push(lastSellItem[0]);
              //   sellPrice.push(lastSellPriceDiv);
            }
          });
          this.best5Buy = buyitems;
          this.best5sell = sellitems;
          // for (var i = 0; i < buyPrice.length; i++) {
          //   let newBuyObj = {};
          //   newBuyObj["qty"] = buyitems[i];
          //   newBuyObj["price"] = (buyPrice[i] / this.priceDivisor);
          //   this.best5Buy.push(newBuyObj);
          // }
          // for (var i = 0; i < sellPrice.length; i++) {
          //   let newSellObj = {};
          //   newSellObj["qty"] = sellitems[i];
          //   newSellObj["price"] = (sellPrice[i] / this.priceDivisor);
          //   this.best5sell.push(newSellObj);
          // }
        }
      }
    }
    if (changes['scripInfo'] && changes['scripInfo'].currentValue) {
      this.scripInfo = changes['scripInfo'].currentValue;
    }
  }
  /**
  * listen to socket subscribed in segmentToken component
  */
  getSocketResponse() {
    this.socketService.broadcaster.on('best5').subscribe(res => {
      let socketResponseString = res;
      res = res.replace(/\$/g, "|");
      let responseObject = this.utilsService.pipeToObject(res);
      this.serverLut = this.utilsService.dateFormat(responseObject[0]["74"]);
      let previousData = {
        LTT: this.LTT,
        LUT: this.LUT,
        Volume: this.volume
      };
      if (this.utilsService.isUpdatedData(previousData, responseObject[0])) {
        // if (this.scripInfo && responseObject[0]["64"] == "209" && this.scripInfo["SegmentId"] == responseObject[0]["1"] && this.scripInfo["Token"] == responseObject[0]["7"]) {
        //   this.best5Buy = [{ "price": responseObject[0][3] / responseObject[0][399], "qty": responseObject[0][2] }];
        //   this.best5sell = [{ "price": responseObject[0][6] / responseObject[0][399], "qty": responseObject[0][5] }];
        //   this.totalBuyQty = responseObject[0]["81"];
        //   this.totalSellQty = responseObject[0]["82"];
        // }
        if (this.scripInfo && responseObject[0]["64"] == "128" && this.scripInfo["SegmentId"] == responseObject[0]["1"] && this.scripInfo["Token"] == responseObject[0]["7"]) {
          this.totalBuyQty = Number(responseObject[0]["81"]);
          this.totalSellQty = Number(responseObject[0]["82"]);
          this.best5Buy.length = 0;
          this.best5sell.length = 0;
          let buyDataString = socketResponseString.substring(socketResponseString.lastIndexOf("11=1|"), socketResponseString.lastIndexOf("|11=2|"));
          let sellDataString = socketResponseString.substring(socketResponseString.lastIndexOf("11=2|"), socketResponseString.lastIndexOf(""));
          this.priceDivisor = this.utilsService.getDefaultPriceDivisor(responseObject[0]["1"], responseObject[0]["7"]);
          //responseObject[0]["399"];
          let buyitems = [];
          let sellitems = [];
          let buyPrice = [];
          let sellPrice = [];
          buyDataString.split('|').forEach(x => {
            // var arr = x.split('=');
            if ((x || '').indexOf('12=') == 0) {
              let arr = x.split('$');
              let price = Number((arr[1] || '').split('=')[1]) || 0;
              let qty = (arr[0] || '').split('=')[1] || 0;
              let order = (arr[2] || '').split('=')[1] || 0;
              buyitems.push({
                "price": price / this.priceDivisor,
                "qty": qty,
                order: order
              });
              // let lastBuyItem = arr[1].split('$');
              // let lastBuyPrice = arr[2].split('$');
              // let lastBuyPricePriceDiv = (parseInt(lastBuyPrice[0]));
              // buyitems.push((parseInt(lastBuyItem[0])));
              // buyPrice.push(lastBuyPricePriceDiv);
            }
          });
          sellDataString.split('|').forEach(x => {
            //var arr = x.split('=');
            if ((x || '').indexOf('12=') == 0) {
              let arr = x.split('$');
              let price = Number((arr[1] || '').split('=')[1]) || 0;
              let qty = (arr[0] || '').split('=')[1] || 0;
              let order = (arr[2] || '').split('=')[1] || 0;
              sellitems.push({
                "price": price / this.priceDivisor,
                "qty": qty,
                order: order
              });
              // let lastSellItem = arr[1].split('$');
              // let lasSellPrice = arr[2].split('$');
              // let lastSellPriceDiv = (parseInt(lasSellPrice[0]));
              // sellitems.push(lastSellItem[0]);
              // sellPrice.push(lastSellPriceDiv);
            }
          });
          this.best5Buy = buyitems;
          this.best5sell = sellitems;
          // for (var i = 0; i < buyPrice.length; i++) {
          //   let newBuyObj = {};
          //   newBuyObj["qty"] = buyitems[i];
          //   newBuyObj["price"] = (buyPrice[i] / this.priceDivisor)
          //   this.best5Buy.push(newBuyObj);
          // }
          // for (var i = 0; i < sellPrice.length; i++) {
          //   let newSellObj = {};
          //   newSellObj["qty"] = sellitems[i];
          //   newSellObj["price"] = (sellPrice[i] / this.priceDivisor)
          //   this.best5sell.push(newSellObj);
          // }
        }
      }
    });
  }
  static {
    this.ctorParameters = () => [{
      type: _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_3__.UtilsService
    }, {
      type: _services_sockets_socket_service__WEBPACK_IMPORTED_MODULE_2__.SocketService
    }, {
      type: _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__.SharedDataService
    }];
  }
  static {
    this.propDecorators = {
      best5Response: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input,
        args: ['best5Response']
      }],
      scripInfo: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input,
        args: ['scripInfo']
      }]
    };
  }
};
BestFiveComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-best-five',
  template: _best_five_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DecimalPipe, _pipes_segment_pipe__WEBPACK_IMPORTED_MODULE_6__.SegmentPipe, _pipes_value_pipe__WEBPACK_IMPORTED_MODULE_5__.ValuePipe],
  styles: [(_best_five_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})
/**Best Five Component class */, (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__metadata)("design:paramtypes", [_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_3__.UtilsService, _services_sockets_socket_service__WEBPACK_IMPORTED_MODULE_2__.SocketService, _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__.SharedDataService])], BestFiveComponent);


/***/ }),

/***/ 92247:
/*!***************************************************************************!*\
  !*** ./src/app/company-module/chartiq-simple/chartiq-simple.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChartiqSimpleComponent: () => (/* binding */ ChartiqSimpleComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _chartiq_simple_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chartiq-simple.component.html?ngResource */ 58089);
/* harmony import */ var _chartiq_simple_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chartiq-simple.component.scss?ngResource */ 19205);
/* harmony import */ var _chartiq_simple_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chartiq_simple_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 1807);
/* harmony import */ var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/analytics/analytics.service */ 50213);
/* harmony import */ var src_app_services_rest_post_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/rest/post-login.service */ 4135);
/* harmony import */ var src_app_services_rest_tool_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/rest/tool.service */ 91387);
/* harmony import */ var _assets_chartiq_js_chartiq__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../assets/chartiq/js/chartiq */ 89405);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _tools_module_components_advanced_chart_wrapper_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../tools-module/components/advanced-chart-wrapper.component */ 56612);
/* harmony import */ var _tools_module_tv_chart_exp_tv_chart_exp_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../tools-module/tv-chart-exp/tv-chart-exp.component */ 59607);
/* harmony import */ var _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../assets/libs/esm-moment.min.js */ 29483);
/* harmony import */ var _services_rest_company_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../services/rest/company.service */ 12744);
/* harmony import */ var _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../services/shared-data/shared-data.service */ 46013);
/* harmony import */ var _services_sockets_socket_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../services/sockets/socket.service */ 6312);
/* harmony import */ var _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../../services/utils/utils.service */ 89893);










/** Import ChartIQ Library*/
// var CIQ: any;
/** Import Moment JS Library*/









// var moment: any = require();
/** Import $$$ from ChartIQ Library*/
var $$$ = (__webpack_require__(/*! ./../../../assets/chartiq/js/chartiq */ 89405).$$$);
/** Import addOns from ChartIQ Library*/
var addOn;
/** Component for Showing Charts of Scrip */
let ChartiqSimpleComponent = class ChartiqSimpleComponent {
  /**
   * Constructor for Object Initialization
   * @param socket SocketService instance
   * @param rests CompanyService instance for HTTP Request
   * @param utils UtilsService instance
   * @param shared SharedDataService instance
   * @param router Router Module Instance
   */
  constructor(renderer, rests, cdRef, zone, socket, rest, utils, shared, router, toolsService, analytics) {
    this.renderer = renderer;
    this.rests = rests;
    this.cdRef = cdRef;
    this.zone = zone;
    this.socket = socket;
    this.rest = rest;
    this.utils = utils;
    this.shared = shared;
    this.router = router;
    this.toolsService = toolsService;
    this.analytics = analytics;
    /**
     * preLogin Variable
     */
    this.showPreLogin = false;
    this.scripName = "No Title";
    this.stxx = {};
    this.isTradingChart = this.utils.getUserId() ? this.utils.getPreferences('ChartType') == "TRADING_VIEW" || localStorage.getItem('chartType') == 'true' : localStorage.getItem('chartType') == 'true' || false;
    this.fullB5data = {};
    this.responseData = [];
    this.symCon = {};
    this.token = null;
    this.segmentId = null;
    this.chart = {
      time: '1',
      type: 'candle',
      interval: '15'
    };
    this.headsUp = {};
    this.socketData = {};
    this.chartTypes = [{
      value: "colored_bar",
      label: "BAR"
    }, {
      value: "candle",
      label: "CANDLE",
      intradayHidden: true
    }, {
      value: "hollow_candle",
      label: "HOLLOW CANDLES",
      intradayHidden: true
    }, {
      value: "volume_candle",
      label: "VOL. CANDLE",
      intradayHidden: true
    }, {
      value: "colored_line",
      label: "COLORED LINE",
      intradayHidden: true
    }, {
      value: "mountain",
      label: "AREA"
    }, {
      value: "line",
      label: "LINE"
    }, {
      value: "colored_wave",
      label: "WAVE",
      intradayHidden: true
    }, {
      value: "heikinashi",
      label: "Heikin-Ashi",
      aggregationEdit: true,
      intradayHidden: true
    }, {
      value: "linebreak",
      label: "LINE BREAK",
      aggregationEdit: true,
      intradayHidden: true
    }, {
      value: "renko",
      label: "RENKO",
      aggregationEdit: true,
      intradayHidden: true
    }, {
      value: "baseline_delta",
      label: "BASELINE"
    }, {
      value: "kagi",
      label: "KAGI",
      aggregationEdit: true,
      intradayHidden: true
    }, {
      value: "pandf",
      label: "POINT & FIGURE",
      aggregationEdit: true,
      intradayHidden: true
    }];
    this.tvChartTypes = [{
      "value": 0,
      label: "BARS"
    }, {
      "value": 1,
      label: "CANDLES"
    }, {
      "value": 9,
      label: "HOLLOW CANDLES"
    }, {
      "value": 2,
      label: "LINE"
    }, {
      "value": 10,
      label: "Baseline"
    }, {
      "value": 3,
      label: "AREA"
    }
    /* { "value" : 8, label:"HEIKEN AISHI"}, */];
    this.tvIntervals = [{
      value: "1",
      label: "1 min",
      multiplier: 1,
      base: "today",
      startOf: "minute",
      periodicity: 1,
      timeUnit: 'minute',
      index: 0
    }, {
      value: "3",
      label: "3 min",
      multiplier: 1,
      base: "today",
      startOf: "minute",
      periodicity: 3,
      timeUnit: 'minute',
      index: 1
    }, {
      value: "5",
      label: "5 min",
      multiplier: 1,
      base: "today",
      startOf: "minute",
      periodicity: 5,
      timeUnit: 'minute',
      index: 2
    }, {
      value: "10",
      label: "10 min",
      multiplier: 1,
      base: "today",
      startOf: "minute",
      periodicity: 10,
      timeUnit: 'minute',
      index: 3
    }, {
      value: "15",
      label: "15 min",
      multiplier: 1,
      base: "today",
      startOf: "minute",
      periodicity: 15,
      timeUnit: 'minute',
      index: 4
    }, {
      value: "30",
      label: "30 min",
      multiplier: 1,
      base: "today",
      startOf: "minute",
      periodicity: 30,
      timeUnit: 'minute',
      index: 5
    }, {
      value: "45",
      label: "45 min",
      multiplier: 1,
      base: "today",
      startOf: "minute",
      periodicity: 30,
      timeUnit: 'minute',
      index: 5
    }, {
      value: "60",
      label: "Hourly",
      multiplier: 1,
      base: "today",
      startOf: "hour",
      periodicity: 60,
      timeUnit: 'minute',
      index: 6
    }, {
      value: "D",
      label: "Daily",
      multiplier: 1,
      base: "today",
      startOf: "day",
      periodicity: 1,
      timeUnit: 'day',
      index: 7
    }, {
      value: "W",
      label: "Weekly",
      multiplier: 1,
      base: "week",
      startOf: "week",
      periodicity: 1,
      timeUnit: 'week',
      index: 8
    }, {
      value: "M",
      label: "Monthly",
      multiplier: 1,
      base: "month",
      startOf: "month",
      periodicity: 1,
      timeUnit: 'month',
      index: 9
    }];
    this.tvChart = {
      type: 1,
      interval: "15"
    };
    this.intervals = [{
      value: "1",
      label: "1 min",
      multiplier: 1,
      base: "today",
      startOf: "minute",
      periodicity: 1,
      timeUnit: 'minute',
      index: 0
    }, {
      value: "3",
      label: "3 min",
      multiplier: 1,
      base: "today",
      startOf: "minute",
      periodicity: 3,
      timeUnit: 'minute',
      index: 1
    }, {
      value: "5",
      label: "5 min",
      multiplier: 1,
      base: "today",
      startOf: "minute",
      periodicity: 5,
      timeUnit: 'minute',
      index: 2
    }, {
      value: "10",
      label: "10 min",
      multiplier: 1,
      base: "today",
      startOf: "minute",
      periodicity: 10,
      timeUnit: 'minute',
      index: 3
    }, {
      value: "15",
      label: "15 min",
      multiplier: 1,
      base: "today",
      startOf: "minute",
      periodicity: 15,
      timeUnit: 'minute',
      index: 4
    }, {
      value: "30",
      label: "30 min",
      multiplier: 1,
      base: "today",
      startOf: "minute",
      periodicity: 30,
      timeUnit: 'minute',
      index: 5
    }, {
      value: "60",
      label: "Hourly",
      multiplier: 1,
      base: "today",
      startOf: "hour",
      periodicity: 60,
      timeUnit: 'minute',
      index: 6
    }, {
      value: "D",
      label: "Daily",
      multiplier: 1,
      base: "today",
      startOf: "day",
      periodicity: 1,
      timeUnit: 'day',
      index: 7
    }, {
      value: "W",
      label: "Weekly",
      multiplier: 1,
      base: "week",
      startOf: "week",
      periodicity: 1,
      timeUnit: 'week',
      index: 8
    }, {
      value: "M",
      label: "Monthly",
      multiplier: 1,
      base: "month",
      startOf: "month",
      periodicity: 1,
      timeUnit: 'month',
      index: 9
    }, {
      value: "Q",
      label: "Quarterly",
      multiplier: 3,
      base: "month",
      startOf: "quarter",
      periodicity: 1,
      timeUnit: 'month',
      index: 10
    }, {
      value: "H",
      label: "Half-Yearly",
      multiplier: 6,
      base: "month",
      startOf: "year",
      periodicity: 1,
      timeUnit: 'month',
      index: 11
    }, {
      value: "Y",
      label: "Yearly",
      multiplier: 1,
      base: "year",
      startOf: "year",
      periodicity: 1,
      timeUnit: 'month',
      index: 12
    }];
    this.durations = [{
      value: "D",
      label: "Today",
      multiplier: 1,
      base: "today",
      startOf: "day",
      periodicity: 1,
      timeUnit: 'day',
      index: 7
    }, {
      value: "W",
      label: "1 Week",
      multiplier: 1,
      base: "week",
      startOf: "week",
      periodicity: 1,
      timeUnit: 'week',
      index: 8
    }, {
      value: "M",
      label: "1 Month",
      multiplier: 1,
      base: "month",
      startOf: "month",
      periodicity: 1,
      timeUnit: 'month',
      index: 9
    }, {
      value: "Y",
      label: "1 Year",
      multiplier: 1,
      base: "year",
      startOf: "year",
      periodicity: 1,
      timeUnit: 'year',
      index: 11
    }, {
      value: "T",
      label: "3 Year",
      multiplier: 3,
      base: "year",
      startOf: "year",
      periodicity: 1,
      timeUnit: 'year',
      index: 13
    }, {
      value: "F",
      label: "Max",
      multiplier: 5,
      base: "year",
      startOf: "year",
      periodicity: 1,
      timeUnit: 'year',
      index: 13
    }];
    this.theme = {
      "Candle/Bar": {
        "up": {
          "color": "rgba(0,176,97,1)",
          "wick": "rgba(140,193,118,1)",
          "border": "rgba(0,176,97,1)"
        },
        "down": {
          "color": "rgba(255,48,49,1)",
          "wick": "rgba(184,44,12,1)",
          "border": "rgba(255,48,49,1)"
        }
      },
      "Line": {
        "color": "#17CD96"
      },
      "Mountain": {
        "color": "#17CD96"
      }
    };
  }
  /**
   * Life Cycle Hook for Initialization
   */
  ngOnInit() {
    localStorage.removeItem('currentChartType');
    //  this.isTradingChart = localStorage.getItem('chartType') == 'true';
  }
  changeTVChartType() {
    console.log("1currentChartType", this.tvChart);
  }
  changeTvChartDuration() {
    console.log("2currentChartType", this.tvChart);
  }
  ngAfterViewInit() {
    // setTimeout(() => {
    //   this.tvChart={type:1,interval:15}
    //   this.chart = { time: '1', type: 'candle', interval: '15' };
    // }, 50);
    this.cdRef.detectChanges();
  }
  /**
   * Life Cycle Hook for destruction
   */
  ngOnDestroy() {
    this.clearIntervalData();
  }
  /**
   * Life Cycle Hook for Input Changes
   * @param changes SimpleChanges instance for incoming Changes
   */
  ngOnChanges(changes) {
    if (changes['segmentId']) {
      this.segmentId = changes['segmentId'].currentValue;
      this.symCon.SegmentId = this.segmentId;
    }
    if (changes['scripName']) {
      this.scripName = changes['scripName'].currentValue;
      this.symCon.SecDesc = this.scripName;
    }
    if (changes['scripDescRev']) {
      this.scripDescRev = changes['scripDescRev'].currentValue;
      this.symCon.SecDesc = this.scripDescRev;
    }
    if (changes['gettingScriptDetail']) {
      this.gettingScriptDetail = changes['gettingScriptDetail'].currentValue;
      //this.symCon.SecDesc=this.scripDescRev
    }
    if (changes['token']) {
      this.token = changes['token'].currentValue;
      let tokk = changes['token'].currentValue;
      this.symCon.Token = null;
      setTimeout(() => {
        this.symCon.Token = tokk;
        //  this.showChart()
      }, 500);
    }
    if (changes['b5Data'] && changes['b5Data'].currentValue) {
      this.b5Data = this.utils.pipeToObject(changes['b5Data'].currentValue.strB5Response);
      this.previousClose = Number(this.b5Data[0][76]) / Number(this.b5Data[0][399]);
      this.headsUp.Close = this.previousClose;
      this.headsUp.Open = Number(this.b5Data[0][8]) == 0 ? this.previousClose : Number(this.b5Data[0][75]) / Number(this.b5Data[0][399]); //if ltp = 0 then show prevclose (24/05/2021)
      this.headsUp.High = Number(this.b5Data[0][8]) == 0 ? this.previousClose : Number(this.b5Data[0][77]) / Number(this.b5Data[0][399]); //if ltp = 0 then show prevclose (24/05/2021)
      this.headsUp.Low = Number(this.b5Data[0][8]) == 0 ? this.previousClose : Number(this.b5Data[0][78]) / Number(this.b5Data[0][399]); //if ltp = 0 then show prevclose (24/05/2021)
      this.headsUp.Volume = Number(this.b5Data[0][79]);
      let time = new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_8__["default"](new Date(this.b5Data[0][74]), 'YYYY-MM-DD HHmmss').valueOf();
      //  
      let dataFormated = {
        time,
        low: this.headsUp.Low,
        high: this.headsUp.High,
        open: this.headsUp.Open,
        close: this.headsUp.Close,
        volume: this.headsUp.Volume
      };
      this.fullB5data = dataFormated;
      this.zone.run(() => this.fullB5data = dataFormated);
      this.cdRef.markForCheck();
    }
    if (changes['token'] && this.token && this.segmentId) {
      this.clearIntervalData();
      this.tvChart = {
        type: 1,
        interval: 15
      };
      this.chart = {
        time: 'D',
        type: 'candle',
        selectedDuration: this.durations[0],
        selectedType: this.chartTypes[10],
        selectedInterval: this.intervals[4],
        interval: '15'
      };
      this.marketStatus = this.utils.getMarketStatus(this.segmentId);
      // this.request = {
      //   "UserId": this.utils.getUserId() || 'guest',
      //   "SegmentId": Number(this.segmentId),
      //   "Token": Number(this.token),
      //   "StartDate": (new moment(new moment().format('YYYY-MM-DD')) - new moment('1980-01-01')) / 1000,
      //   "NoOfDays": 5,
      //   "Duration": 1
      // };
      //Uncomment here
      // setTimeout(() => {
      //   if (!this.chartIQ) {
      //     console.log("updateChartData"," initialize")
      //     this.utils.subscribeMultitouchline([{ SegmentId: this.segmentId, Token: Number(this.token) }]);
      //     this.initializeChart();
      //   }
      //   this.chartIQ.setChartType(this.chart.type);
      //   // this.makeIntradayRequest(true);
      //   this.getChartHistory(true);
      // }, 500);
    }
  }
  showChart() {
    this.hideData = true;
    setTimeout(() => {
      this.hideData = false;
    }, 1000);
  }
  /**
   * Initialize Chart Container
   */
  initializeChart() {
    // CIQ = window['CIQ'];
    // $$$ = window['$$$'];
    this.chartIQ = new _assets_chartiq_js_chartiq__WEBPACK_IMPORTED_MODULE_5__.CIQ.ChartEngine({
      container: document.querySelector(".chartContainer"),
      allowScroll: true,
      allowScrollPast: true,
      allowScrollFuture: true,
      allowSideswipe: true,
      layout: {
        "chartType": this.chart.type,
        "crosshair": true,
        "periodicity": 15,
        "interval": 'minute'
      },
      preferences: {
        "currentPriceLine": true,
        "whitespace": 0,
        "horizontalCrosshairField": "Close"
      }
    });
    this.chartIQ.chart.yAxis.initialMarginBottom = 10;
    this.chartIQ.chart.yAxis.decimalPlaces = this.segmentId == '13' || this.segmentId == '14' ? 4 : 2;
    this.chartIQ.chart.yAxis.noDraw = false;
    this.chartIQ.chart.yAxis.drawCurrentPriceLabel = true;
    this.chartIQ.chart.yAxis.width = 60;
    this.chartIQ.chart.yAxis.minimumPriceTick = 50;
    this.chartIQ.chart.xAxis.noDraw = false;
    this.chartIQ.displayAll();
    console.log("updateChartData  this.chartIQ", this.chartIQ);
    //this.chartIQ.controls.styles.display = "none";
    // this.chartIQ.displayAll();
    console.log("setPeriodicity2", {
      period: 15,
      timeUnit: 'minute'
    });
    this.chartIQ.setPeriodicity({
      interval: 15,
      period: 1,
      timeUnit: 'minute'
    });
    //new CIQ.Tooltip({ stx: this.chartIQ, ohl: true, volume: true, series: false, studies: false });
    // let helper = new CIQ.ThemeHelper({ stx: this.chartIQ });
    // helper.settings.chartTypes = this.theme;
    // helper.update();
    this.isError = false;
    this.chartIQ.callbackListeners.move = data => {
      console.log("callbackListeners data", data);
      if (this.chartIQ.masterData && data.stx.chart.scroll >= this.chartIQ.masterData.length && data.grab && !this.shared.isServiceHit) {
        // if (this.isDailyDuration()) {
        //   let startTime = new Date(new moment(this.request.StartDate * 1000).subtract(this.request.NoOfDays, 'days').toDate()).valueOf() / 1000;
        //   this.request.Duration = this.chart.interval;
        //   this.request.StartDate = startTime;
        //   this.makeIntradayRequest(false);
        // }
        // this.request.Duration = this.chart.interval;
        // this.makeIntradayRequest(false);
        if (this.isDailyDuration()) this.getChartHistory(false, true);
      } else {}
    };
  }
  /**
   *  Add prototype Events for Showing OHLC
   * @param self ChartiqSimpleComponent self Instance
   */
  addPrototypes(self) {
    _assets_chartiq_js_chartiq__WEBPACK_IMPORTED_MODULE_5__.CIQ.ChartEngine.prototype.prepend("headsUpHR", function () {
      let format = self.chart.time === 'Daily' ? 'HH:mm' : 'DD MMM YY';
      let chartiq = this;
      let tick = this["barFromPixel"](this["cx"]);
      let prices = this.chart.xaxis[tick];
      if (prices) {
        if (prices.data && prices.data.Volume) {
          prices = JSON.parse(JSON.stringify(prices));
          self.headsUp.Volume = Number(prices.data.Volume);
          self.headsUp.DT = (0,_assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_8__["default"])(prices.DT).format(format);
        }
      }
    });
  }
  /**
   * Fetch Intraday Chart Data
   * @param isInit is to Clear Previous Data
   */
  // public makeIntradayRequest(isInit: boolean): void {
  //   let datapoints = [];
  //   if (isInit)
  //     this.chartIQ.loadChart(this.scripName, null);
  //   this.request.SessionId = this.utils.getSessionId() || ''; // add session id in request of getIntradayHistory API (01/06/2021)
  //   this.rests.getIntradayHistory(this.request).subscribe((data) => {
  //     if (data.Status === "Success" && data.Response && data.Response.lstMiniIntraday && data.Response.lstMiniIntraday.length > 0) {
  //       this.isError = false;
  //       
  //       let response = data.Response.lstMiniIntraday || [];
  //       let priceDivisor = this.utils.getSegmentDetail(this.segmentId, 'PriceDivisor') || 100;
  //       let mappedData = [];
  //       let formData = JSON.parse(JSON.stringify(response));
  //       
  //       for (let i = 0; i < response.length; i++) {
  //         const time = moment(formData[i].LastUpdateTime, 'DD-MM-YYYY HHmmss').valueOf();
  //         // 
  //         mappedData.push(
  //           {
  //             time,
  //             open: formData[i].OpenPrice / priceDivisor,
  //             close: formData[i].ClosePrice / priceDivisor,
  //             low: formData[i].LoPrice / priceDivisor,
  //             high: formData[i].HiPrice / priceDivisor,
  //             /*   amount: formData[i].ClosePrice */
  //             /* count: formData[i].LastTradedQty */
  //             volume: formData[i].LastTradedQty,
  //           })
  //         datapoints.push({
  //           "DT": moment(response[i].LastUpdateTime, 'DD-MM-YYYY HH:mm:ss').toDate(),
  //           "Close": response[i].ClosePrice / priceDivisor, "Open": response[i].OpenPrice / priceDivisor, "Low": response[i].LoPrice / priceDivisor, "High": response[i].HiPrice / priceDivisor, "Volume": response[i].LastTradedQty
  //         })
  //       }
  //       this.responseData = [];
  //       
  //       this.zone.run(() => this.responseData = mappedData);
  //       this.cdRef.markForCheck();
  //       if (isInit) {
  //         this.chartIQ.loadChart(this.scripName, datapoints
  //           , null, () => {
  //             CIQ.Studies.quickAddStudy(this.chartIQ, "vol undr", {},
  //               { "Up Volume": "#17CD96", "Down Volume": "#E23934", "Up Border": "#18ce97", "Down Border": "#E23934" }
  //             );
  //           });
  //         this.chartIQ.controls.chartControls.style.display = "none";
  //         this.chartIQ.setPeriodicity({ period: this.chart.selectedInterval.periodicity, timeUnit: this.chart.selectedInterval.timeUnit });
  //         //this.chartIQ.home();
  //         this.setStyles();
  //         this.clearIntervalData();
  //         this.getSocketData();
  //         this.utils.subscribeMultitouchline([{ SegmentId: this.segmentId, Token: Number(this.token) }]);
  //       } else if (this.chartIQ && response.length > 0) {
  //         this.chartIQ.appendMasterData(datapoints, null, { fillGaps: true });
  //       }
  //       // if (this.chartIQ.chart.dataSet.length > 0)
  //       //   this.chartIQ.setRange({
  //       //     dtLeft: this.chartIQ.chart.dataSet[0].DT,
  //       //     dtRight: this.chartIQ.chart.dataSet[this.chartIQ.chart.dataSet.length - 1].DT
  //       //   });
  //       // let item = this.intervals.filter((obj) => { return obj.value === this.chart.time; })[0];
  //       // this.chartIQ.setSpan({ multiplier: 1, base: "all", periodicity: { period: item.multiplier, interval: item.base } });
  //     } else if (isInit) {
  //       this.isError = true;
  //     }
  //   }, (err) => {
  //     this.isError = true;
  //   })
  // }
  /**
   * Listener for Socket Response Packets
   */
  getSocketData() {
    this.socketSubscription = this.socket.broadcaster.on('watchlist').subscribe(data => {
      // 
      this.marketStatus = this.utils.getMarketStatus(this.segmentId);
      //   
      if (this.marketStatus && this.marketStatus.status && !this.marketStatus.status[1]) {
        return false;
      }
      if (data[0][1] == this.segmentId && data[0][7] == this.token && this.chartIQ.chart.dataSet && this.chartIQ.chart.dataSet.length) {
        let LTT = new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_8__["default"](this.chartIQ.chart.dataSet[this.chartIQ.chart.dataSet.length - 1].DT).format('DD-MM-YYYY HH:mm:ss');
        let previousData = {
          LTT: LTT,
          LUT: LTT,
          Volume: this.chartIQ.chart.dataSet[this.chartIQ.chart.dataSet.length - 1].Volume
        };
        if (!this.utils.isUpdatedData(previousData, data[0])) return;
        this.previousClose = Number(data[0][76]) / Number(data[0][399]);
        let ltp = Number(data[0][8] == 0) ? this.previousClose : Number(data[0][8]) / Number(data[0][399]);
        this.headsUp.Open = Number(data[0][8]) == 0 ? this.previousClose : Number(data[0][75]) / Number(data[0][399]); //if ltp = 0 then show prevclose (24/05/2021)
        this.headsUp.High = Number(data[0][8]) == 0 ? this.previousClose : Number(data[0][77]) / Number(data[0][399]); //if ltp = 0 then show prevclose (24/05/2021)
        this.headsUp.Low = Number(data[0][8]) == 0 ? this.previousClose : Number(data[0][78]) / Number(data[0][399]); //if ltp = 0 then show prevclose (24/05/2021)
        this.headsUp.Close = this.previousClose;
        let vol = Number(data[0][79]) - (this.headsUp.Volume || 0);
        this.headsUp.Volume = Number(data[0][79]);
        this.socketData = {
          "DT": new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_8__["default"](data[0][74], 'YYYY-MM-DD HHmmss'),
          "Close": ltp,
          "Open": this.headsUp.Open,
          "Low": this.headsUp.Low,
          "High": this.headsUp.High,
          "Volume": vol
        };
        console.log(" this.socketData", this.socketData);
        this.processSocketData();
      }
    });
  }
  processSocketData() {
    if (this.chartIQ.chart.dataSet && this.chartIQ.chart.dataSet.length && this.socketData) {
      let datapoint = {
        "DT": new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_8__["default"](this.socketData.DT).toDate(),
        "Close": this.socketData.Close,
        "Open": this.socketData.Open,
        "Low": this.socketData.Low,
        "High": this.socketData.High,
        "Volume": this.socketData.Volume
      };
      let lastDataPoint = this.chartIQ.chart.dataSet[this.chartIQ.chart.dataSet.length - 1];
      if (this.isTimeEqual(this.socketData.DT, lastDataPoint.DT)) {
        datapoint.Close = datapoint.Close;
        datapoint.Open = lastDataPoint.Open;
        datapoint.High = lastDataPoint.High > datapoint.Close ? lastDataPoint.High : datapoint.Close;
        datapoint.Low = lastDataPoint.Low < datapoint.Close ? lastDataPoint.Low : datapoint.Close;
        datapoint.Volume = lastDataPoint.Volume + datapoint.Volume;
        datapoint.DT = lastDataPoint.DT;
      } else {
        datapoint.Close = datapoint.Close;
        datapoint.Open = datapoint.Close;
        datapoint.High = datapoint.Close;
        datapoint.Low = datapoint.Close;
        datapoint.Volume = datapoint.Volume;
      }
      let time = new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_8__["default"](datapoint.DT || this.socketData.DT).valueOf();
      let dataFormated = {
        time,
        low: datapoint.Low,
        high: datapoint.High,
        open: datapoint.Open,
        close: datapoint.Close,
        volume: datapoint.Volume
      };
      this.zone.run(() => this.fullB5data = dataFormated);
      this.cdRef.markForCheck();
      this.chartIQ.updateChartData(datapoint, null, {
        fillGaps: true
      });
      this.setStyles();
    }
  }
  /**
   * Fetch Historical Charts of Scrip
   */
  makeHistoricRequest() {
    let datapoints = [];
    let request = {
      "MarketSegmentId": this.segmentId,
      "Token": this.token.toString(),
      "Duration": this.chart.time,
      "Interval": this.chart.interval,
      "GraphType": 0,
      "UserId": this.utils.getUserId() || 'guest',
      "SessionId": this.utils.getSessionId() || ''
    };
    //{ "MarketSegmentId": this.segmentId, "Token": this.token.toString(), "Duration": this.chart.time, "GraphType": 0 };
    this.rest.getHistoricOHLC(request).subscribe(data => {
      if (data.Status === "Success" && data.Response && data.Response.GraphDataNew && data.Response.GraphDataNew.length) {
        this.isError = false;
        let response = data.Response.GraphDataNew;
        for (let i = 0; i < response.length; i++) {
          datapoints.push({
            "DT": new Date(response[i].PriceDate),
            "Close": Number(response[i].PriceClose),
            "Open": Number(response[i].PriceOpen),
            "Low": Number(response[i].PriceLow),
            "High": Number(response[i].PriceHigh),
            "Volume": response[i].VolumeTraded
          });
        }
        console.log("updateChartData2 ", "loadChart", this.chartIQ);
        this.chartIQ.loadChart(this.scripName, datapoints, null, () => {
          _assets_chartiq_js_chartiq__WEBPACK_IMPORTED_MODULE_5__.CIQ.Studies.addStudy(this.chartIQ, "vol undr", {}, {
            "Up Volume": "#17CD96",
            "Down Volume": "#E23934",
            "Up Border": "#18ce97",
            "Down Border": "#E23934"
          });
        });
        this.chartIQ.home();
        this.chartIQ.setRange({
          dtLeft: this.chartIQ.chart.dataSet[0].DT,
          dtRight: this.chartIQ.chart.dataSet[this.chartIQ.chart.dataSet.length - 1].DT
        });
        let item = this.durations.filter(obj => {
          return obj.value === this.chart.time;
        })[0];
        this.chartIQ.setSpan({
          multiplier: 1,
          base: "all",
          periodicity: {
            period: item.multiplier,
            interval: item.base
          }
        });
        this.setStyles();
        this.clearIntervalData();
        this.getSocketData();
        this.utils.subscribeMultitouchline([{
          SegmentId: this.segmentId,
          Token: Number(this.token)
        }]);
      } else {
        this.isError = true;
      }
    }, err => {
      this.isError = true;
    });
  }
  changeChart(event) {
    //  this.zone.run(() => {
    //this.cdRef.detectChanges();
    this.isTradingChart = event.target.value == 'true';
    // this.zone.run(() =>  ;
    this.cdRef.markForCheck();
    // })
    localStorage.setItem("chartType", this.isTradingChart ? 'true' : 'false');
    let userId = this.utils.getUserId();
    if (userId && userId != 'guest') {
      this.utils.updatePreference('ChartType', this.isTradingChart ? "TRADING_VIEW" : "CHART_IQ");
      this.savePreferencetoAPI();
    }
    this.utils.setTrackMoeEvent(this.isTradingChart ? 'clickedCompanyPivotPointTradingView' : 'clickedCompanyPivotPointChartIQ', {
      "User_ID": this.utils.getUserId() || 'guest',
      "IP": this.shared.IPAddress
    });
    this.analytics.emitEvent(this.isTradingChart ? 'clickedCompanyPivotPointTradingView' : 'clickedCompanyPivotPointChartIQ', this.utils.getUserId() || 'guest', JSON.stringify({
      "IP": this.shared.IPAddress
    }), 1);
  }
  /** to save user preferences */
  savePreferencetoAPI() {
    let request = {
      "preference_name": "ChartType",
      "preference_type": "ChartType",
      "client_id": this.utils.getUserId(),
      "config": this.isTradingChart ? "TRADING_VIEW" : "CHART_IQ",
      "platform": "Web"
    };
    let userAccountStatus = this.utils.getUserAccountStatus();
    if (!(!userAccountStatus || !userAccountStatus.onboardStatus || userAccountStatus.onboardStatus == 'C')) {
      return;
    }
    this.rests.saveUserPreference(request, true).subscribe(res => {
      if (res.status_code && res.status_code == 200) {}
    }, err => {});
  }
  /**
   * Change Chart Duration from Drop down
   */
  changeChartDuration(isDuration) {
    this.isError = false;
    if (isDuration) {
      this.chart.selectedDuration = this.durations.filter(duration => {
        return duration.value == this.chart.time;
      })[0];
      // if (this.chart.time == 'D' && isNaN(this.chart.interval)) {
      //   this.chart.interval = '1';
      //   this.chart.selectedInterval = this.intervals[0];
      // } else if (this.chart.time != 'D' && !isNaN(this.chart.interval)) {
      //   this.chart.interval = 'D';
      //   this.chart.selectedInterval = this.intervals[7];
      // }
      if (this.chart.selectedDuration.index <= this.chart.selectedInterval.index) {
        this.chart.selectedInterval = this.intervals[this.chart.selectedDuration.index - 1];
        this.chart.interval = this.chart.selectedInterval.value;
      }
    } else {
      this.chart.selectedInterval = this.intervals.filter(duration => {
        return duration.value == this.chart.interval;
      })[0];
    }
    // if (this.isDailyDuration()) {
    //   // this.request.Duration = this.chart.interval;
    //   // this.request.NoOfDays = this.chart.duration == 'D' || this.chart.duration == 'W' ? 5 : 30;
    //   // this.request.StartDate = (new moment(new moment().format('YYYY-MM-DD')) - new moment('1980-01-01')) / 1000;
    //   this.makeIntradayRequest(true);
    //   this.getChartHistory(true);
    //   // this.chartIQ.setPeriodicity({ period: this.chart.selectedDuration.periodicity, timeUnit: this.chart.selectedDuration.timeUnit });
    // } else {
    //   this.chartIQ.loadChart(this.scripName, []);
    //   this.makeHistoricRequest();
    // }
    // this.getChartHistory(true);
    let p = {
      interval: this.chart.selectedInterval.periodicity,
      period: 1,
      timeUnit: this.chart.selectedInterval.timeUnit
    };
    console.log("setPeriodicity", p);
    this.stxx.setPeriodicity(p);
    this.utils.setTrackMoeEvent('clickedCompanyPivotPointDuration', {
      "User_ID": this.utils.getUserId() || 'guest',
      "IP": this.shared.IPAddress
    });
    this.analytics.emitEvent('clickedCompanyPivotPointDuration', this.utils.getUserId() || 'guest', JSON.stringify({
      "IP": this.shared.IPAddress
    }), 1);
  }
  getStx(stx) {
    this.stxx = stx;
    let period = this.stxx.getPeriodicity();
    if (this.stxx.layout.chartType) {
      /*   let chartType = this.chartTypes.filter((chart) => {
          return chart.value == this.stxx.layout.chartType
        })[0]; */
      if (this.stxx.layout.chartType) {
        console.log("this.stxx.layout", this.stxx.layout);
        this.chart.type = this.stxx.layout.aggregationType == 'ohlc' ? this.stxx.layout.chartType : this.stxx.layout.aggregationType;
      }
    }
    // if((!(location.pathname.indexOf('advanced-multi-charts')>-1) ) && !(location.pathname.indexOf('advanced-charts')>-1)){
    // //  stx.layout.studies={}
    //   for (var p in stx.layout.studies) {
    //     if (stx.layout.studies[p].name == "chart") continue;
    //     stx.layout.studies[p].disabled = true;
    //   }
    //   stx.adjustPanelPositions();
    //   stx.calculateYAxisPositions();
    //   stx.draw();
    // }else{
    //   for (var p in stx.layout.studies) {
    //     if (stx.layout.studies[p].name == "chart") continue;
    //     stx.layout.studies[p].disabled = false;
    //   }
    //   stx.adjustPanelPositions();
    //   stx.calculateYAxisPositions();
    //   stx.draw();
    // }
    //	console.log("stxstxstx",period)
    // if(this.stxx)
    // this.stxx.clearDrawings();
    if (period) {
      let selectedInterval = this.intervals.filter(ele => {
        return ele.periodicity == period.interval && ele.timeUnit == period.timeUnit;
      });
      if (selectedInterval && selectedInterval[0]) {
        console.log(selectedInterval, "eeeee");
        this.chart.interval = selectedInterval[0]['value'] || 1;
      }
      console.log("stxx Period", selectedInterval);
      if (selectedInterval && selectedInterval.length) {
        let v = {
          interval: selectedInterval[0].periodicity,
          period: 1,
          timeUnit: selectedInterval[0].timeUnit
        };
        console.log("vvvvvvv", v);
        this.stxx.setPeriodicity(v);
      }
      // if(period.timeUnit!='minute' || period.interval!=1){
      //  = period.interval
      // //	this.stxx.setPeriodicity({ period: 1, timeUnit: 'minute' })
      // }
    }
    //console.log("getStxsssssssss",stx)
  }
  /**
   * Change Chart Type from Drop down
   */
  changeChartType() {
    let chartType = this.chartTypes.filter(chart => {
      return chart.value == this.chart.type;
    })[0];
    console.log("chartType", chartType);
    if (chartType.aggregationEdit && this.stxx.layout.aggregationType != chartType.value) {
      /* let root = document.body;
      var stxx = new CIQ.ChartEngine({
        container: root.querySelector('.chartContainer'),
        preferences: {
        }
      });
      console.log("CIQCIQCIQCIQ",stxx)
      let layout=this.chartService.getChartLayout() */
      this.stxx.setChartType('candle');
      this.stxx.setAggregationType(chartType.value);
    } else {
      this.stxx.setChartType(chartType.value);
    }
    this.chart.selectedType = chartType;
    this.utils.setTrackMoeEvent('clickedCompanyPivotPointChartIQType', {
      "User_ID": this.utils.getUserId() || 'guest',
      "IP": this.shared.IPAddress
    });
    this.analytics.emitEvent('clickedCompanyPivotPointChartIQType', this.utils.getUserId() || 'guest', JSON.stringify({
      "IP": this.shared.IPAddress
    }), 1);
  }
  /**
   * Clear the Interval Subscription
   */
  clearIntervalData() {
    if (this.simulationSubscription) this.simulationSubscription.unsubscribe();
    if (this.socketSubscription) this.socketSubscription.unsubscribe();
  }
  /**
   * Start Adding Chart Points to Container at an fixed interval from Socket response Packet
   */
  startSimulation() {
    this.simulationSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.timer)(60000, 60000).subscribe(() => {
      let lastLUT = this.chartIQ.chart.masterData[this.chartIQ.chart.masterData.length - 1].DT;
      this.request.LUT = new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_8__["default"](lastLUT).format('DD/MM/YYYY HH:mm:ss');
      if (this.socketData && new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_8__["default"](lastLUT).isBefore(this.socketData.DT)) {
        let datapoint = {
          "DT": new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_8__["default"](this.socketData.DT).toDate(),
          "Close": this.socketData.Close,
          "Open": this.socketData.Open,
          "Low": this.socketData.Low,
          "High": this.socketData.High,
          "Volume": this.socketData.Volume
        };
        this.chartIQ.updateChartData([datapoint], null, {
          fillGaps: true
        });
      }
    });
  }
  /**
   * Set Chart Datapoint color based on point Values
   */
  setStyles() {
    if (this.chartIQ.chart.dataSet.length > 0) {
      //   var helper = new CIQ.ThemeHelper({ stx: this.chartIQ });
      let closePrice = this.isDailyDuration() && this.previousClose ? this.previousClose : !this.isDailyDuration() && this.chartIQ.chart.dataSet && this.chartIQ.chart.dataSet.length > 0 ? this.chartIQ.chart.dataSet[0].Close : 0;
      let color = closePrice < this.chartIQ.chart.dataSet[this.chartIQ.chart.dataSet.length - 1].Close ? '#00b061' : '#ff3031';
      this.theme.Mountain.color = color;
      this.theme.Line.color = color;
      // helper.settings.chartTypes = this.theme;
      // helper.update();
    }
  }
  /**
   * Expand Chart to navigate to chart Study
   */
  expandChart() {
    // if (this.utils.isAuthorized()) {
    let scripName = (this.scripName || "").toLowerCase().replace(/[\s|\&|\%]/g, '').trim();
    this.isTradingChart = this.utils.getUserId() ? this.utils.getPreferences('ChartType') == "TRADING_VIEW" || localStorage.getItem('chartType') == 'true' : localStorage.getItem('chartType') == 'true' || false;
    localStorage.setItem("prevPath", window.location.pathname);
    if (this.isTradingChart) {
      //this.router.navigate(['/trading-view-charts/' + (this.scripDescRev||scripName) + '/' + this.segmentId + '/' + this.token],{queryParams:{scripDesc:this.scripName}});
      window.open('/tv/trading-view-charts/' + (this.scripDescRev || scripName) + '/' + this.segmentId + '/' + this.token + "?scripDesc=" + this.scripName);
    } else window.open('/cq/advanced-charts/' + (this.scripDescRev || scripName) + '/' + this.segmentId + '/' + this.token);
    //      this.router.navigate(['/advanced-charts/' + (scripName||this.scripDescRev) + '/' + this.segmentId + '/' + this.token]);
    // } else {
    //   this.showPreLogin = true;
    //   this.renderer.setStyle(document.body, 'overflow', 'hidden');
    // }
    this.utils.setTrackMoeEvent('visitedChart', {
      "User_ID": this.utils.getUserId() || 'guest',
      "IP": this.shared.IPAddress
    });
    this.analytics.emitEvent('visitedChart', this.utils.getUserId() || 'guest', JSON.stringify({
      "IP": this.shared.IPAddress
    }), 1);
  }
  isDailyDuration() {
    let duration = this.chart.interval;
    return ['D', 'W', 'M'].indexOf(this.chart.time) > -1 && (duration == 1 || duration == 3 || duration == 5 || duration == 10 || duration == 15 || duration == 30 || duration == 60);
  }
  isTimeEqual(newData, lastData) {
    let duration = this.chart.selectedInterval;
    let newTime = new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_8__["default"](newData).startOf(duration.startOf);
    let lastTime = new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_8__["default"](lastData).startOf(duration.startOf);
    return _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_8__["default"].duration(newTime.diff(lastTime)).as(duration.startOf) < Number(duration.periodicity);
  }
  /**
  * close preLogin popup for guest user on click of close button on prelogin popup
  */
  closePreLogin() {
    this.showPreLogin = false;
    this.renderer.setStyle(document.body, 'overflow', 'auto');
  }
  /**
  * Redirect to login page , when user clicks on login button of prelogin popup
  */
  login() {
    this.utils.setFromURL();
    this.router.navigate(['auth/login']);
  }
  /**
    * Fetch Chart Data (added by reshmaC on 04/02/2021)
    * @param isInit is to Clear Previous Data
    * @param isCalledPrevData flag to change startTime and Todate on scroll of chart
    */
  getChartHistory(isInit, isCalledPrevData) {
    let lastYearDate = ((new Date(new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_8__["default"]().subtract(6, 'months')).valueOf() - new Date("1980-01-01").valueOf()) / 1000).toFixed(0);
    let startTime = isCalledPrevData ? (new Date(new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_8__["default"](this.request.FromDate * 1000).subtract(5, 'days').toDate()).valueOf() / 1000).toFixed(0) : this.isDailyDuration() ? ((new Date(new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_8__["default"]().subtract(5, 'd')).valueOf() - new Date("1980-01-01").valueOf()) / 1000).toFixed(0) : 0;
    let toDate = isCalledPrevData ? this.request.FromDate : ((new Date(new Date()).valueOf() - new Date("1980-01-01").valueOf()) / 1000).toFixed(0);
    this.request = {
      "UserId": this.utils.getUserId() || 'guest',
      "SessionId": this.utils.getSessionId() || '',
      "SegmentId": Number(this.segmentId),
      "Token": Number(this.token),
      "FromDate": this.isTradingChart ? lastYearDate : startTime,
      "ToDate": toDate,
      "Interval": this.chart.interval
    };
    let datapoints = [];
    // if (isInit){
    //   console.log("updateChartData3 ","loadChart")
    //   this.chartIQ.loadChart(this.scripName, null);
    //   }
    this.toolsService.getChartHistory(this.request).subscribe(data => {
      if (data.Status === "Success" && data.Response && data.Response.lstChartHistory && data.Response.lstChartHistory.length) {
        this.isError = false;
        let response = data.Response.lstChartHistory || [];
        let priceDivisor = this.utils.getSegmentDetail(this.segmentId, 'PriceDivisor') || 100;
        let formData = JSON.parse(JSON.stringify(response));
        let mappedData = [];
        for (let i = 0; i < response.length; i++) {
          var dataSplit = response[i].split(",");
          var internDate = new Date("1980-01-01").setSeconds(dataSplit[0]);
          var offset = 1000 * (60 * -330);
          if (Number(dataSplit[1]) && Number(dataSplit[2]) && Number(dataSplit[3]) && Number(dataSplit[4])) {
            const time = (0,_assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_8__["default"])(new Date(internDate + offset)).valueOf();
            // 
            mappedData.push({
              time,
              open: dataSplit[1] / priceDivisor,
              close: dataSplit[4] / priceDivisor,
              low: dataSplit[3] / priceDivisor,
              high: dataSplit[2] / priceDivisor,
              /*   amount: formData[i].ClosePrice */
              /* count: formData[i].LastTradedQty */
              volume: Number(dataSplit[5] ? dataSplit[5] : '0')
            });
            datapoints.push({
              "DT": new Date(internDate + offset),
              "Open": dataSplit[1] / priceDivisor,
              "High": dataSplit[2] / priceDivisor,
              "Low": dataSplit[3] / priceDivisor,
              "Close": dataSplit[4] / priceDivisor,
              "Volume": dataSplit[5],
              "OI": dataSplit[6]
            });
          }
        }
        this.responseData = [];
        this.zone.run(() => this.responseData = mappedData);
        this.cdRef.markForCheck();
        if (isInit) {
          console.log("updateChartData1 ", this.stxx, "loadChart");
          this.stxx.loadChart(this.scripName, datapoints, null, () => {
            _assets_chartiq_js_chartiq__WEBPACK_IMPORTED_MODULE_5__.CIQ.Studies.addStudy(this.stxx, "vol undr", {}, {
              "Up Volume": "#17CD96",
              "Down Volume": "#E23934",
              "Up Border": "#18ce97",
              "Down Border": "#E23934"
            });
          });
          if (this.isDailyDuration()) {
            //this.stxx.controls.chartControls.style.display = "none";
            console.log("setPeriodicity1", {
              period: this.chart.selectedInterval.periodicity,
              timeUnit: this.chart.selectedInterval.timeUnit
            });
            this.stxx.setPeriodicity({
              interval: this.chart.selectedInterval.periodicity,
              period: 1,
              timeUnit: this.chart.selectedInterval.timeUnit
            });
          } else {
            this.stxx.home();
            this.stxx.setRange({
              dtLeft: this.stxx.chart.dataSet[0].DT,
              dtRight: this.stxx.chart.dataSet[this.stxx.chart.dataSet.length - 1].DT
            });
            let item = this.durations.filter(obj => {
              return obj.value === this.chart.time;
            })[0];
            this.stxx.setSpan({
              multiplier: 1,
              base: "all",
              periodicity: {
                period: item.multiplier,
                interval: item.base
              }
            });
          }
          this.setStyles();
          this.clearIntervalData();
          this.getSocketData();
          this.utils.subscribeMultitouchline([{
            SegmentId: this.segmentId,
            Token: Number(this.token)
          }]);
        } else if (this.stxx && response.length) {
          console.log("updateChartData 2", this.stxx);
          this.stxx.updateChartData(datapoints, null, {
            fillGaps: true
          });
        }
      } else if (isInit) {
        this.isError = true;
      }
    }, err => {
      this.isError = true;
    });
  }
  onLabelToggleChange(value) {
    this.isTradingChart = value;
    // if(!this.isTradingChart){
    //   setTimeout(() => {
    //   /*   if (!this.chartIQ) { */
    //       this.utils.subscribeMultitouchline([{ SegmentId: this.segmentId, Token: Number(this.token) }]);
    //       this.initializeChart();
    //     /* } */
    //     this.chartIQ.setChartType(this.chart.type);
    //     // this.makeIntradayRequest(true);
    //     this.getChartHistory(true);
    //   }, 500);
    // }
    localStorage.setItem("chartType", this.isTradingChart ? 'true' : 'false');
    let userId = this.utils.getUserId();
    if (userId && userId != 'guest') {
      this.utils.updatePreference('ChartType', this.isTradingChart ? "TRADING_VIEW" : "CHART_IQ");
      this.savePreferencetoAPI();
    }
  }
  onChange(value) {
    console.log("tvChart", this.tvChart);
    this.isTradingChart = value;
    // if(this.isTradingChart){
    //   let val=JSON.parse(JSON.stringify(this.tvChart ))
    //   if(val)
    //   this.tvChart=val
    // }
    // if(!this.isTradingChart){
    //   setTimeout(() => {
    //   /*   if (!this.chartIQ) { */
    //       this.utils.subscribeMultitouchline([{ SegmentId: this.segmentId, Token: Number(this.token) }]);
    //       this.initializeChart();
    //    /*  } */
    //     this.chartIQ.setChartType(this.chart.type);
    //     // this.makeIntradayRequest(true);
    //     this.getChartHistory(true);
    //   }, 500);
    // }
    window.Moengage.add_user_attribute("chartType", this.isTradingChart ? "TRADING_VIEW" : "CHART_IQ");
    let userId = this.utils.getUserId();
    if (userId && userId != 'guest') this.utils.updatePreference('ChartType', this.isTradingChart ? "TRADING_VIEW" : "CHART_IQ");
    localStorage.setItem("chartType", this.isTradingChart ? 'true' : 'false');
    if (userId && userId != 'guest') {
      this.savePreferencetoAPI();
    }
    this.showChart();
  }
  static {
    this.ctorParameters = () => [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Renderer2
    }, {
      type: src_app_services_rest_post_login_service__WEBPACK_IMPORTED_MODULE_3__.PostLoginService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.NgZone
    }, {
      type: _services_sockets_socket_service__WEBPACK_IMPORTED_MODULE_11__.SocketService
    }, {
      type: _services_rest_company_service__WEBPACK_IMPORTED_MODULE_9__.CompanyService
    }, {
      type: _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_12__.UtilsService
    }, {
      type: _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_10__.SharedDataService
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_15__.Router
    }, {
      type: src_app_services_rest_tool_service__WEBPACK_IMPORTED_MODULE_4__.ToolService
    }, {
      type: src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_2__.AnalyticsService
    }];
  }
  static {
    this.propDecorators = {
      scripName: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Input,
        args: ['scripName']
      }],
      scripDescRev: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Input,
        args: ['scripDescRev']
      }],
      token: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Input,
        args: ['token']
      }],
      segmentId: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Input,
        args: ['segmentId']
      }],
      b5Data: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Input,
        args: ['b5Data']
      }],
      gettingScriptDetail: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Input,
        args: ['gettingScriptDetail']
      }]
    };
  }
};
ChartiqSimpleComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
  selector: 'app-chartiq-simple',
  template: _chartiq_simple_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgClass, _tools_module_components_advanced_chart_wrapper_component__WEBPACK_IMPORTED_MODULE_6__.AdvancedChartWrapperComponent, _tools_module_tv_chart_exp_tv_chart_exp_component__WEBPACK_IMPORTED_MODULE_7__.TvChartExpComponent],
  styles: [(_chartiq_simple_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__metadata)("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_14__.Renderer2, src_app_services_rest_post_login_service__WEBPACK_IMPORTED_MODULE_3__.PostLoginService, _angular_core__WEBPACK_IMPORTED_MODULE_14__.ChangeDetectorRef, _angular_core__WEBPACK_IMPORTED_MODULE_14__.NgZone, _services_sockets_socket_service__WEBPACK_IMPORTED_MODULE_11__.SocketService, _services_rest_company_service__WEBPACK_IMPORTED_MODULE_9__.CompanyService, _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_12__.UtilsService, _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_10__.SharedDataService, _angular_router__WEBPACK_IMPORTED_MODULE_15__.Router, src_app_services_rest_tool_service__WEBPACK_IMPORTED_MODULE_4__.ToolService, src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_2__.AnalyticsService])], ChartiqSimpleComponent);


/***/ }),

/***/ 40607:
/*!*****************************************************************************!*\
  !*** ./src/app/company-module/company-details/company-details.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CompanyDetailsComponent: () => (/* binding */ CompanyDetailsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _company_details_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./company-details.component.html?ngResource */ 97081);
/* harmony import */ var _company_details_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./company-details.component.scss?ngResource */ 54221);
/* harmony import */ var _company_details_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_company_details_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/shared-data/shared-data.service */ 46013);
/* harmony import */ var _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/utils/utils.service */ 89893);
/* harmony import */ var _services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/analytics/analytics.service */ 50213);
/* harmony import */ var _services_rest_company_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/rest/company.service */ 12744);










/** Component declaration of company details */
let CompanyDetailsComponent = class CompanyDetailsComponent {
  /**
   * Dependency injection and variable intailization
   * @param restService rest service for api call
   * @param shared data shared between two component
   * @param utilsService data processing
   * @param activeRoute to know the active route
   * @param router to navigate to different url
   * @param AnalyticsService for analytics (ga)
   */
  constructor(restService, shared, utilsService, activeRoute, analyticsService, router) {
    this.restService = restService;
    this.shared = shared;
    this.utilsService = utilsService;
    this.activeRoute = activeRoute;
    this.analyticsService = analyticsService;
    this.router = router;
    /**
     * office address array
     */
    this.officeAddressData = [];
    /**
     * management data array
     */
    this.managementData = [];
    /**
     * is office data empty or not
     */
    this.officeData = true;
    /**
     * is management data is empty or not
     */
    this.manageData = true;
    /**
     * present active tab
     */
    this.activeFilter = 0;
    /**
     * profile data present data or not
     */
    this.profileData = true;
    /** for analytics */
    this.analyticData = {};
    this.companyProfile = [];
  }
  /**
  * change in url is checked, accordigly various parameters are changed
  */
  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      this.officeAddressData = [];
      this.managementData = [];
      this.companyProfile = [];
      this.profileData = true;
      this.officeData = true;
      this.manageData = true;
      this.analyticData = {};
      this.analyticData["secName"] = params['companyName'];
      this.analyticData["segmentId"] = params['segment'];
      this.analyticData["Token"] = params['token'];
    });
  }
  /**
   * listen to scripDetails response emitted from segmentToken and call officeDetail Api
   * @param changes scripDetails response emitted from segmentToken
   */
  ngOnChanges(changes) {
    if (changes['scripInfo']) {
      this.scripInfo = changes['scripInfo'].currentValue;
      if (this.scripInfo) {
        this.activeFilter = this.scripInfo.CompanyOfficeDetails ? 0 : this.scripInfo.CompanyManagement ? 1 : this.scripInfo.CompanyInfo ? 2 : 0;
        if (this.activeFilter == 0 && (this.scripInfo["SegmentId"] == 1 || this.scripInfo["SegmentId"] == 3) && this.officeAddressData.length == 0 && this.scripInfo.CompanyOfficeDetails) {
          this.getOfficeAddress(this.scripInfo["Token"], this.scripInfo["SegmentId"]);
        }
        if (this.activeFilter == 1 && (this.scripInfo["SegmentId"] == 1 || this.scripInfo["SegmentId"] == 3) && this.managementData.length == 0 && this.scripInfo.CompanyManagement) {
          this.getManagementData(this.scripInfo["Token"], this.scripInfo["SegmentId"]);
        }
        if (this.activeFilter == 2 && (this.scripInfo["SegmentId"] == 1 || this.scripInfo["SegmentId"] == 3) && this.companyProfile.length == 0 && this.scripInfo.CompanyInfo) {
          this.getProfile(this.scripInfo["Token"], this.scripInfo["SegmentId"]);
        }
      }
    }
  }
  /**
   * officeDetail api called and response is processed
   * @param token token of selected scrip
   * @param segmentId segmentid of selected scrip
   */
  getOfficeAddress(token, segmentId) {
    let data = {
      "nMarketSegmentId": segmentId,
      "nToken": token
    };
    this.restService.getCompanyOfficeData(data).subscribe(res => {
      if (res.Status === "Success" && res.Response) {
        this.officeData = true;
        this.officeAddressData = [];
        let officeType = ["Registered Address", "Registrars"];
        var i = 0;
        for (let key in res.Response) {
          if (res.Response[key].AgencyName == "In House") {
            break;
          } else {
            res.Response[key]["type"] = officeType[i];
            this.officeAddressData.push(res.Response[key]);
            i++;
          }
        }
      } else if (res.Reason == 'Data not found.') {
        this.officeData = false;
        // }
        // else if (this.utilsService.isSessionExpired(res.Reason)) {
        //   if(this.shared.isSSO){
        //     this.utilsService.sessionExpireHandling()
        //     return
        //   }
        //   this.utilsService.error('Session Expired', "Please Login Again");
        //   this.utilsService.postFeatureCount();
        //   this.utilsService.clearLoginDetails();
        //   this.shared.userId = null;
        //   this.router.navigate(['auth/login']);
      } else {
        this.utilsService.error('Error', "Something went wrong");
      }
    });
  }
  /**
   * ManagementDetail api called and response is processed
   * @param token token of selected scrip
   * @param segmentId segmentid of selected scrip
   */
  getManagementData(token, segmentId) {
    let data = {
      "nMarketSegmentId": segmentId,
      "nToken": token
    };
    this.restService.getCompanyManagementDetail(data).subscribe(res => {
      this.manageData = true;
      this.managementData = [];
      if (res.Status === "Success" && res.Response) {
        for (var key in res.Response.lDictMgmt) {
          this.managementData.push(res.Response.lDictMgmt[key]);
        }
      } else if (res.Reason == 'Data not found.') {
        this.manageData = false;
        // }
        // else if (this.utilsService.isSessionExpired(res.Reason)) {
        //   if(this.shared.isSSO){
        //     this.utilsService.sessionExpireHandling()
        //     return
        //   }
        //   this.utilsService.error('Session Expired', "Please Login Again");
        //   this.utilsService.postFeatureCount();
        //   this.utilsService.clearLoginDetails();
        //   this.shared.userId = null;
        //   this.router.navigate(['auth/login']);
      } else {
        this.utilsService.error('Error', "Something went wrong");
      }
    });
  }
  /**
   * OfficeProfileDetail api called and response is processed
   * @param token token of selected scrip
   * @param segmentId segmentid of selected scrip
   */
  getProfile(token, segmentId) {
    let data = {
      "nMarketSegmentId": Number(segmentId),
      "nToken": Number(token)
    };
    this.restService.getCompanyProfile(data).subscribe(res => {
      if (res.Status === "Success" && res.Response) {
        this.companyProfile = [];
        this.companyProfile = res.Response.Notes;
        this.profileData = true;
      } else if (res.Reason == 'Data not found.') {
        this.companyProfile = [];
        this.profileData = false;
        // }
        // else if (this.utilsService.isSessionExpired(res.Reason)) {
        //   if(this.shared.isSSO){
        //     this.utilsService.sessionExpireHandling()
        //     return
        //   }
        //   this.utilsService.error('Session Expired', "Please Login Again");
        //   this.utilsService.postFeatureCount();
        //   this.utilsService.clearLoginDetails();
        //   this.shared.userId = null;
        //   this.router.navigate(['auth/login']);
      } else {
        this.utilsService.error('Error', "Something went Wrong");
      }
    });
  }
  /**
   * onchange of tab, api called and handled accordingly
   * @param count Present Tab
   * @param keyName tabs name
   */
  activateFilter(count, keyName) {
    this.activeFilter = count;
    this.analyticData['tabName'] = this.activeFilter == 1 ? 'Details' : this.activeFilter == 2 ? 'management' : 'profile';
    this.analyticsService.companyDetailTabChange(this.analyticData);
    if (this[keyName] && this[keyName].length == 0 || !this[keyName]) {
      keyName == 'officeAddressData' ? this.getOfficeAddress(this.scripInfo["Token"], this.scripInfo["SegmentId"]) : keyName == 'managementData' ? this.getManagementData(this.scripInfo["Token"], this.scripInfo["SegmentId"]) : keyName == 'companyProfile' ? this.getProfile(this.scripInfo["Token"], this.scripInfo["SegmentId"]) : '';
    }
  }
  static {
    this.ctorParameters = () => [{
      type: _services_rest_company_service__WEBPACK_IMPORTED_MODULE_5__.CompanyService
    }, {
      type: _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_2__.SharedDataService
    }, {
      type: _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_3__.UtilsService
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute
    }, {
      type: _services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_4__.AnalyticsService
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
    }];
  }
  static {
    this.propDecorators = {
      scripInfo: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input,
        args: ['scripInfo']
      }]
    };
  }
};
CompanyDetailsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-company-details',
  template: _company_details_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.SlicePipe],
  styles: [(_company_details_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})
/** CompanyDetails component class */, (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__metadata)("design:paramtypes", [_services_rest_company_service__WEBPACK_IMPORTED_MODULE_5__.CompanyService, _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_2__.SharedDataService, _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_3__.UtilsService, _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute, _services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_4__.AnalyticsService, _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router])], CompanyDetailsComponent);


/***/ }),

/***/ 16079:
/*!*****************************************************!*\
  !*** ./src/app/company-module/company.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CompanyComponent: () => (/* binding */ CompanyComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _company_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./company.component.html?ngResource */ 45273);
/* harmony import */ var _company_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./company.component.scss?ngResource */ 77633);
/* harmony import */ var _company_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_company_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_rest_company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/rest/company.service */ 12744);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/shared-data/shared-data.service */ 46013);
/* harmony import */ var _services_sockets_broadcaster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../services/sockets/broadcaster */ 28510);
/* harmony import */ var _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/utils/utils.service */ 89893);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _services_sockets_socket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/sockets/socket.service */ 6312);
/* harmony import */ var _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/seo/seo.service */ 44897);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! rxjs */ 1807);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/platform-browser */ 345);
/* harmony import */ var _services_sockets_interactive_socket_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/sockets/interactive-socket.service */ 33687);
/* harmony import */ var _services_rest_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/rest/common.service */ 18056);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 33380);
/* harmony import */ var _common_module_select_completer_select_completer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common-module/select-completer/select-completer.component */ 13661);
/* harmony import */ var _directives_dropdown_dropdown_open_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../directives/dropdown/dropdown-open.directive */ 55720);
/* harmony import */ var _directives_dropdown_dropdown_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../directives/dropdown/dropdown.directive */ 51429);
/* harmony import */ var _directives_show_focus_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../directives/show-focus.directive */ 57862);
/* harmony import */ var _pipes_condense_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../pipes/condense.pipe */ 82203);
/* harmony import */ var _pipes_custom_filter_by_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../pipes/custom-filter-by.pipe */ 43560);
/* harmony import */ var _pipes_segment_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../pipes/segment.pipe */ 39995);
/* harmony import */ var _pipes_value_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../pipes/value.pipe */ 50615);
/* harmony import */ var _services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../services/analytics/analytics.service */ 50213);
/* harmony import */ var _advance_decline_advance_decline_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./advance-decline/advance-decline.component */ 52467);
/* harmony import */ var _best_five_best_five_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./best-five/best-five.component */ 12935);
/* harmony import */ var _chartiq_simple_chartiq_simple_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./chartiq-simple/chartiq-simple.component */ 92247);
/* harmony import */ var _company_details_company_details_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./company-details/company-details.component */ 40607);
/* harmony import */ var _fut_option_fut_option_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./fut-option/fut-option.component */ 23399);
/* harmony import */ var _key_info_key_info_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./key-info/key-info.component */ 22069);
/* harmony import */ var _news_announcement_news_announcement_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./news-announcement/news-announcement.component */ 3971);
/* harmony import */ var _overview_navbar_overview_navbar_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./overview-navbar/overview-navbar.component */ 63119);
/* harmony import */ var _peer_comparision_peer_comparision_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./peer-comparision/peer-comparision.component */ 23383);
/* harmony import */ var _pivot_pivot_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pivot/pivot.component */ 52219);
/* harmony import */ var _reports_reports_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./reports/reports.component */ 36460);
/* harmony import */ var _segment_token_segment_token_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./segment-token/segment-token.component */ 29967);







































// var Draggable = require("./../../assets/libs/draggable/dist/esm-draggable.js");
/** company component view and scss linking */
let CompanyComponent = class CompanyComponent {
  /**
      * Dependency injection and varaible intialization
      * @param activatedRoute for getting the present Route
      * @param utilsService for data manipulation
      * @param location for url change without component reload
      * @param route for navigating to different component
      * @param shared for sharing data between two compnent
      * @param socketService for socket service
      * @param restService for api call
      * @param zone for delay
      * @param renderer for popup
      * @param Seo for seo title and content
      * @param broadcaster for subscription
      */
  constructor(activatedRoute, utilsService, location, route, interactiveSocket, shared, socketService, restService, zone, renderer, rest, sanitizer, seo, broadcaster, analytics) {
    this.activatedRoute = activatedRoute;
    this.utilsService = utilsService;
    this.location = location;
    this.route = route;
    this.interactiveSocket = interactiveSocket;
    this.shared = shared;
    this.socketService = socketService;
    this.restService = restService;
    this.zone = zone;
    this.renderer = renderer;
    this.rest = rest;
    this.sanitizer = sanitizer;
    this.seo = seo;
    this.broadcaster = broadcaster;
    this.analytics = analytics;
    /**
            * index list array
            */
    this.indexList = [];
    /**
            * b5 response in array
            */
    this.splitData = [];
    /**
            * api response of indexDetail api
            */
    this.indexdetail = [];
    /**
            * prelogin varialbe
            */
    this.showPreLogin = false;
    this.EventRef = {
      isEventAvailable: true
    };
    this.userAccountStatus = {};
    this.scripInfo = {};
    this.futScripInfo = {};
    this.selectedYear = "";
    this.selectedSegment = "";
    this.eventData = [];
    this.selectedSegmentDefault = "";
    this.futureExpiryArray = [];
    this.optionExpiryArray = [];
    this.historyData = {};
    this.lastSavedFutureData = [];
    this.routeParams = {};
    this.reportListing = [];
    this.futureData = [];
    this.qualityData = [{
      key: "Price"
    }, {
      key: "Growth"
    }, {
      key: "Quality"
    }, {
      key: "Management"
    }];
    this.seo.getMetaData(this.seo.metaObj.home.title, this.seo.metaObj.home.content);
    this.cssClasses = {
      sortAscending: "icon-angle-down",
      sortDescending: "icon-angle-up",
      pagerLeftArrow: "icon-angle-left",
      pagerRightArrow: "icon-angle-right",
      pagerPrevious: "icon-angle-left",
      pagerNext: "icon-angle-right"
    };
    this.keyInfoData = {};
    this.scripItaDetail = {
      analysis: {}
    };
    this.getMarketStatus();
  }
  /**
      * change in url is checked whether it is indices or not , if indices than show different view for indices
      *
      * Call indexlist api for list of index other than spot(segment id = 6,8,14)
      */
  ngOnInit() {
    this.userAccountStatus = this.utilsService.getUserAccountStatus();
    // this.userAccountStatus=this.utils.getUserAccountStatus()
    this.watchlistNames = this.utilsService.getWatchListName(-1);
    this.routeParamsSubscription = this.activatedRoute.params.subscribe(params => {
      this.routeParams = params;
      let userId = this.utilsService.getUserId();
      if (params["segment"] == 5 && (!userId || userId == "guest")) {
        this.showPreLoginModal = true;
      }
      this.selectedTab = false;
      this.arrowClick = true;
      let companyData = {
        companyName: params["companyName"],
        Token: params["token"],
        SegmentId: params["segment"]
      };
      // this.getITAScripDetail(params['token'],params['segment'])
      /* if(params['type'] !='indices') */
      // this.getFutureData(params['token'],params['segment'])
      var lastVisitedData = {};
      this.scripInfo = null;
      this.futScripInfo = null;
      let user = this.utilsService.getUserId();
      const userSearchDataString = localStorage.getItem("lastVisitedCompany");
      if (userSearchDataString) {
        lastVisitedData = JSON.parse(userSearchDataString);
      }
      if (!lastVisitedData[user] || lastVisitedData[user].length === 0) {
        lastVisitedData[user] = [companyData];
      } else {
        let lastVisit = [];
        if (lastVisitedData[user]) {
          lastVisit = lastVisitedData[user].filter(obj => {
            return obj.Token == companyData.Token;
          });
        }
        if (lastVisit.length > 0) {
          lastVisitedData[user].splice(lastVisitedData[user].indexOf(lastVisit[0]), 1);
          lastVisitedData[user].splice(0, 0, companyData);
        } else {
          lastVisitedData[user].splice(0, 0, companyData);
        }
        lastVisitedData[user] = lastVisitedData[user].slice(0, 5);
      }
      localStorage.setItem("lastVisitedCompany", JSON.stringify(lastVisitedData));
      this.exchangeType = params["type"];
      if (this.segmentId) {
        if (this.scripAddSubscription) this.scripAddSubscription.unsubscribe();
        if (this.scripRemoveSubscription) this.scripRemoveSubscription.unsubscribe();
        if (this.socketStatusSubscription) this.socketStatusSubscription.unsubscribe();
        if (this.segmentId) this.utilsService.unSubscribeBestFive([{
          SegmentId: this.segmentId,
          Token: this.token
        }]);
        if (this.bestFiveSubscription) this.bestFiveSubscription.unsubscribe();
        if (this.watchSubs) this.watchSubs.unsubscribe();
        if (this.routeReuseSubscription) this.routeReuseSubscription.unsubscribe();
        if (this.watchlistNameSubscription) this.watchlistNameSubscription.unsubscribe();
        if (this.windowActiveSubscription) this.windowActiveSubscription.unsubscribe();
        if (this.preLoginIndices) this.preLoginIndices.unsubscribe();
        this.segmentId = 0;
        this.token = 0;
      }
      // if (this.exchangeType != 'indices') {
      //     this.getCompanyFAQs();
      // }
      if (this.exchangeType == "indices") {
        this.scripInfo = null;
        this.futScripInfo = null;
        this.scripData = null;
        this.segmentId = params["segment"];
        let userAccountStatus = this.utilsService.getUserAccountStatus();
        if (!userAccountStatus || !userAccountStatus.onboardStatus || userAccountStatus.onboardStatus == 'C') this.getMarketStatusFromAPI();
        this.token = params["token"];
        this.companyName = params["companyName"];
        let localStorageToken = JSON.parse(localStorage.getItem("presentToken"));
        let segmentToken = params["segment"] + "&" + params["token"];
        if (localStorageToken != segmentToken) {
          localStorage.setItem("presentToken", JSON.stringify(segmentToken));
        }
        let data = {
          StartPosition: 0,
          NoOfRecords: 200
        };
        this.selectedIndices = this.token;
        this.selectedIndicesData = JSON.parse(JSON.stringify(params));
        this.toggleAddRemove(this.segmentId, this.token);
        this.restService.getIndicesList(data).subscribe(res => {
          if (res.Status == "Success" && res.Response["lstIndices"]) {
            this.indexList = [];
            this.indexList = res.Response["lstIndices"];
            this.indexList.sort((indice1, indice2) => {
              return indice1.IndexName > indice2.IndexName ? 1 : -1;
            });
            this.getScriptDetail(this.segmentId, this.token);
            this.getBest5(this.segmentId, this.token);
            this.getIndexDetail(this.segmentId, this.token);
            //this.onIndexChange(this.token);
            // this.getSocketData({SegmentId:this.segmentId,Token:this.token})
          }
        });
        this.indicesData = {};
        this.indicesData["Token"] = this.token;
        this.indicesData["SegmentId"] = this.segmentId;
        this.scripAddSubscription = this.utilsService.broadcastObservable("ScripAdded").subscribe(data => {
          this.isButtonDisabled = false;
          if (this.segmentTokenString.Token == data.Token) {
            this.isAdded = true;
            this.isButtonDisabled = false;
            this.scripData = {
              ProfileId: data.ProfileId,
              scrip: data,
              scripIndex: data.scripIndex
            };
          }
        });
        this.scripRemoveSubscription = this.utilsService.broadcastObservable("ScripRemoved").subscribe(data => {
          this.isButtonDisabled = false;
          if (this.segmentTokenString.Token == data.Token) {
            this.isButtonDisabled = false;
            this.isAdded = false;
          }
        });
        this.watchlistNameSubscription = this.utilsService.broadcastObservable("watchlistRenamed").subscribe(data => {
          this.watchlistNames = data;
        });
        this.routeReuseSubscription = this.utilsService.broadcastObservable("routeResuse").subscribe(data => {
          if (data.IsIndex == 1 && this.exchangeType == "indices") {
            this.selectedIndices = data.Token;
            data.token = data.Token;
            data.segment = data.SegmentId;
            this.selectedIndicesData = JSON.parse(JSON.stringify(data));
            this.toggleAddRemove(data.SegmentId, data.Token);
            this.onIndexChange(this.selectedIndices);
          }
        });
        this.windowActiveSubscription = this.utilsService.broadcastObservable("windowActive").subscribe(res => {
          if (res && (!this.shared.userId || this.shared.userId == "guest") && document.hasFocus()) {
            if (this.preLoginIndices) this.getPreLoginIndicesInterval();
            if (this.preLoginIndices) this.preLoginIndices.unsubscribe();
            this.preLoginIndices = (0,rxjs__WEBPACK_IMPORTED_MODULE_31__.timer)(60000, 60000).subscribe(() => {
              this.getPreLoginIndicesInterval();
            });
          } else if (!res) {
            if (this.preLoginIndices) this.preLoginIndices.unsubscribe();
          }
        });
        this.getSocketResponse();
        this.shared.setActiveSubscription = [this.token, this.segmentId];
        this.utilsService.subscribeBest5([{
          Token: this.token,
          SegmentId: this.segmentId
        }]);
        this.socketStatusSubscription = this.broadcaster.on("internetConnectionStatus").subscribe(isConnected => {
          //  console.debug('reconnect socket request broadcast received company');
          this.shared.setActiveSubscription = [this.token, this.segmentId];
          this.utilsService.subscribeBest5([{
            SegmentId: this.segmentId,
            Token: this.token
          }]);
        });
      }
      this.utilsService.setTrackMoeEvent("visitedCompanyDetail", {
        User_ID: this.utilsService.getUserId() || "guest",
        IP: this.shared.IPAddress,
        segment: this.segmentId
      });
      this.analytics.emitEvent("visitedCompanyDetail", this.utilsService.getUserId() || "guest", JSON.stringify({
        IP: this.shared.IPAddress
      }), 1);
    });
    window.addEventListener("scroll", () => {
      this.zone.run(() => {
        if ((document.body.scrollTop || document.documentElement.scrollTop) > 100) {
          this.isScroll = true;
          this.arrowClick = false;
        } else {
          this.isScroll = false;
        }
      });
    });
  }
  refreshChart() {
    this.loadChart = true;
    setTimeout(() => {
      this.loadChart = false;
    }, 100);
  }
  ngOnChanges() {}
  getMarketStatus() {
    this.marketStatusSubscription = this.interactiveSocket.broadcaster.on("marketStatus").subscribe(data => {
      // this.getMarketStatusFromAPI();
    });
  }
  // private getCompanyFAQs() {
  //     this.faqs = [];
  //     this.restService.getCompanyFAQ().subscribe((data: any) => {
  //         if (data && data.data && data.data.length) {
  //             this.faqs = (data.data || []).filter((item) => item.status == 'published')
  //             //window['company'] = this;
  //             if (this.scripInfo && this.mappedTokens)
  //                 this.summarizeFAQ();
  //         }
  //     }, (err) => {
  //     })
  // }
  /**
      * selected Tab from overView navbar
      * @param event tab selected from overview navbar
      */
  getSelectedTab(event) {
    this.selectedTab = JSON.parse(JSON.stringify(event));
  }
  /**
      * bestFive Response from segmentToken Component
      * @param event bestFive from segmentToken
      */
  getBest5data(event) {
    this.best5Response = JSON.parse(JSON.stringify(event));
  }
  /**
      * Scrip Details Response from segmentToken Component
      * @param event scrip detail from segmentToken
      */
  getscripInfo(event) {
    this.refreshSection = true;
    this.reportListing = [];
    this.futureData = [];
    this.mappedTokens = [];
    //  console.log("getscripInfo getMappedTokens")
    this.scripInfo = JSON.parse(JSON.stringify(event));
    //  //
    // (window as any).Moengage.add_user_attribute(
    //   "Segment",
    //   this.scripInfo.SegmentId
    // );
    this.setMojoURL();
    this.getITAScripDetail(this.scripInfo.Token, this.scripInfo.SegmentId);
    setTimeout(() => {
      this.refreshSection = false;
    }, 1000);
    this.refreshChart();
    //   this.getITAScripDetail()
    //this.summarizeFAQ();
  }
  //   this.getFutureData(this.scripInfo.Token, this.scripInfo.SegmentId);
  /**
      * get future data api for expiry of future
      * @param token token of present  card selected in segmentToken
      * @param segmentId SegmentId of present  card selected in segmentToken
      */
  getFutureData(token, segmentId) {
    //  //console.log("getFutureData called")
    let futurePayload = {
      UserId: this.utilsService.getUserId(),
      SessionId: this.utilsService.getSessionId() || "",
      Token: Number(token),
      SegmentId: Number(segmentId),
      MktDataRequired: false
    };
    this.restService.getFutureData(futurePayload).subscribe(res => {
      //   this.futureExpiryArray.length = 0;
      //   this.optionExpiryArray.length = 0;
      if (res.Status === "Success" && res.Response) {
        this.futureData = res.Response;
        this.lastSavedFutureData = res.Response || [];
        // //console.log("getFutureData called 2", this.futureData)
        this.getMultiTouchLineData();
        // this.futureDataEvent.emit({ futureData: this.futureData });
        // } else if (this.utilsService.isSessionExpired(res.Reason)) {
        //   if(this.shared.isSSO){
        //     this.utilsService.sessionExpireHandling()
        //     return
        //   }
        //   this.utilsService.error("Session Expired", "Please Login Again");
        //   this.utilsService.postFeatureCount();
        //   this.utilsService.clearLoginDetails();
        //   this.shared.userId = null;
        //   this.route.navigate(["auth/login"]);
      } else {
        this.utilsService.error("Error", "Something went wrong");
      }
    });
  }
  /**
      * Scrip Details Response from segmentToken Component
      * @param event scrip detail from segmentToken
      */
  getFutscripInfo(event) {
    this.futScripInfo = JSON.parse(JSON.stringify(event));
    //this.summarizeFAQ();
  }
  //     private summarizeFAQ() {
  //         setTimeout(() => {
  //             let seoJSONEntity = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [] };
  //             let scrip = (this.mappedTokens || []).find((item) => item.SegmentId == this.scripInfo.SegmentId && this.scripInfo.Token == item.Token) || {};
  //             (this.faqs || []).forEach((item, index) => {
  //                 item.faq_question = (item.faq_question || '').replace(/{Company_Name}/g, this.scripInfo.Symbol);
  //                 item.faq_answer = (item.faq_answer || '').replace(/{Company_Name}/g, this.scripInfo.Symbol)
  //                     .replace(/{LifeTimeLow}/g, (this.scripInfo.LowPriceRange / this.scripInfo.LowPriceRange))
  //                     .replace(/{LifeTimeHigh}/g, (this.scripInfo.HighPriceRange / this.scripInfo.LowPriceRange))
  //                     .replace(/{LTP}/g, scrip.LTP)
  //                     .replace(/{}/g, this.scripInfo.MarketCap);
  //                 seoJSONEntity.mainEntity.push({
  //                     "@type": "Question",
  //                     "name": item.faq_question,
  //                     "acceptedAnswer": {
  //                         "@type": "Answer",
  //                         "text": item.faq_answer
  //                     }
  //                 })
  //
  //             }, 1200)
  //             /*
  //             {
  //   "@context": "https://schema.org",
  //   "@type": "FAQPage",
  //   "mainEntity": [{
  //     "@type": "Question",
  //     "name": "What is {Company_Name} share price?",
  //     "acceptedAnswer": {
  //       "@type": "Answer",
  //       "text": "{Company_Name} share price is ________"
  //     }
  //   },{
  //     "@type": "Question",
  //     "name": "What is {Company_Name} dividend per share?",
  //     "acceptedAnswer": {
  //       "@type": "Answer",
  //       "text": "{Company_Name} per share dividend is _____"
  //     }
  //   },{
  //     "@type": "Question",
  //     "name": "What is {Company_Name} 52 week high low?",
  //     "acceptedAnswer": {
  //       "@type": "Answer",
  //       "text": "{Company_Name} 52 week high low is ___________"
  //     }
  //   },{
  //     "@type": "Question",
  //     "name": "What is {Company_Name} stock split ratio?",
  //     "acceptedAnswer": {
  //       "@type": "Answer",
  //       "text": "{Company_Name} stock split ratio is ______"
  //     }
  //   },{
  //     "@type": "Question",
  //     "name": "Latest share news for {Company_Name}?",
  //     "acceptedAnswer": {
  //       "@type": "Answer",
  //       "text": "Latest share news for {Company_Name} is ______"
  //     }
  //   },{
  //     "@type": "Question",
  //     "name": "What is {Company_Name} book value per share?",
  //     "acceptedAnswer": {
  //       "@type": "Answer",
  //       "text": "{Company_Name} book value per share is _______"
  //     }
  //   },{
  //     "@type": "Question",
  //     "name": "What are {Company_Name} results for last quarter?",
  //     "acceptedAnswer": {
  //       "@type": "Answer",
  //       "text": "{Company_Name} results for last quarter ______"
  //     }
  //   },{
  //     "@type": "Question",
  //     "name": "When is {Company_Name} next board meeting?",
  //     "acceptedAnswer": {
  //       "@type": "Answer",
  //       "text": "{Company_Name} next board meeting is on _______"
  //     }
  //   },{
  //     "@type": "Question",
  //     "name": "What is PE ratio of {Company_Name}?",
  //     "acceptedAnswer": {
  //       "@type": "Answer",
  //       "text": "PE ratio of {Company_Name} is ______"
  //     }
  //   },{
  //     "@type": "Question",
  //     "name": "What is shareholding pattern of {Company_Name}?",
  //     "acceptedAnswer": {
  //       "@type": "Answer",
  //       "text": "Shareholding pattern of {Company_Name} is _______"
  //     }
  //   },{
  //     "@type": "Question",
  //     "name": "What is profit and loss account of {Company_Name}?",
  //     "acceptedAnswer": {
  //       "@type": "Answer",
  //       "text": "Profit and Loss account of {Company_Name} is ___"
  //     }
  //   },{
  //     "@type": "Question",
  //     "name": "What is {Company_Name} balance sheet for 2018-19?",
  //     "acceptedAnswer": {
  //       "@type": "Answer",
  //       "text": "{Company_Name} balance sheet for 2018-19 is ______"
  //     }
  //   }]
  // }
  //             */
  //         })
  //     }
  /**
      * option future changes from fut-option component
      * @param event future option from futoption component
      */
  getchangeOptFut(event) {
    this.changeOptFut = JSON.parse(JSON.stringify(event));
    //console.log("this.changeOptFut",this.changeOptFut)
  }
  /**
      * option future changes from fut-option component//NOT IN USE
      * @param event future option from futoption component
      */
  //  public futureDataEvent(event: any): void {
  //    let data = JSON.parse(JSON.stringify(event))||{};
  //    this.futureData=data.futureData||[]
  //    if(this.futureData&&this.futureData.length){
  //     this.getMultiTouchLineData();
  //    }
  //     //console.log("this.futureData",this.futureData)
  // }
  /**
      * Get MultiTouchLine Data
      */
  getMultiTouchLineData() {
    let userAccountStatus = this.utilsService.getUserAccountStatus();
    //&& this.isSegmentAllowed == 'Y'//Commented
    // if ((this.utilsService.isAuthorized() && this.isSegmentAllowed == 'Y') || ((!this.shared.userId || this.shared.userId == 'guest'))) {
    // if (
    //   (!userAccountStatus || !userAccountStatus.onboardStatus || (userAccountStatus.onboardStatus=='C')) ||
    //   this.utilsService.isAuthorized() ||
    //   !this.shared.userId ||
    //   this.shared.userId == "guest"
    // ) {
    const userId = this.utilsService.getUserId();
    let datapoints = [];
    if (this.futureData && this.futureData.length) {
      this.futureData.forEach(item => {
        item.SegmentId = item.lExchangeScrip.SegmentId;
        item.Token = item.lExchangeScrip.Token;
        datapoints.push({
          SegmentId: item.SegmentId,
          Token: item.Token
        });
      });
      // this.toggleAddRemove(item);
      // this.utilsService.subscribeMultitouchline(this.futureData);
    }
    //console.log("payload2",this.futureData)
    const tokens = this.utilsService.generateTokens(this.futureData, "SegmentId", "Token");
    //console.log(this.futureData,"payload2 tokens",tokens)
    const payload = {
      UserId: !userId || userId == "guest" ? "guest" : userId,
      SessionId: this.utilsService.getSessionId() || "",
      MultipleTokens: tokens
    };
    //console.log("payload2",payload)
    this.utilsService.commonGetMultipleTouchLineCall(payload).subscribe(data => {
      // common multitouchlineV2 (26/02/2021)
      if (data.Status == "Success" && data.Response && data.Response.lMT && data.Response.lMT.length) {
        const multitouchLineResponse = data.Response.lMT;
        console.log("futureData multitouchline2 ", JSON.parse(JSON.stringify(this.futureData)));
        //    console.log("payload2 multitouchLineResponse",JSON.parse(JSON.stringify(multitouchLineResponse)))
        multitouchLineResponse.forEach((element, index) => {
          //console.log(this.futureData[index].SegmentId, "payload SegmentId2",element )
          if (element["SegmentId"] == this.futureData[index].SegmentId && element["Token"] == this.futureData[index].Token) {
            Object.assign(element, Object.assign(this.futureData[index], element));
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
            element.companyURL = (this.futureData[index].scrip_name || "").trim().toLowerCase().replace(/\s/g, "-").replace(/\//g, "").replace(/(-)+/g, "-");
            //   if (element.LTP &&  element.priceData&& element.priceData['stop_loss'] && element.priceData['target']) {
            //     if(element.status == "Booked Part Profit"){
            //       //console.log("OBJOBJpriceData", element)
            //         element.priceData['ltp_price_percentage'] = ((Number(element.matched_price) - Number(element.priceData['stop_loss'].value)) / (Number(element.priceData['target'].value) - Number(element.priceData['stop_loss'].value))) * 85
            //     }else{
            //         element.priceData['ltp_price_percentage'] = ((Number(element.LTP) - Number(element.priceData['stop_loss'].value)) / (Number(element.priceData['target'].value) - Number(element.priceData['stop_loss'].value))) * 85
            //     }
            //     // ele.priceData['part_profit_percentage'] =  ((Number(res.matched_price) - Number(ele.priceData['stop_loss'].value)) / (Number(ele.priceData['target'].value) - Number(ele.priceData['stop_loss'].value))) * 85
            //     // //console.log("llll",res.matched_price)
            // }
            this.futureData[index] = Object.assign(this.futureData[index], element);
          }
        });
        this.futureData = [...this.futureData];
      }
      this.getFutureSocketRes();
      this.utilsService.subscribeMultitouchline(datapoints);
    }, err => {
      this.getFutureSocketRes();
      this.utilsService.subscribeMultitouchline(datapoints);
    });
    // }
  }
  /**
      * scrip detail api defination for indices
      * @param segmentId segmentId of scrip
      * @param token token of scrip
      */
  getScriptDetail(segmentId, token) {
    this.gettingScriptDetail = true;
    let currentUserId = this.utilsService.getUserId();
    let userId = !currentUserId || currentUserId == "guest" ? "" : currentUserId;
    let data = {
      nMarketSegmentId: segmentId,
      nToken: token,
      UserId: userId
    };
    this.restService.getScripDetails(data).subscribe(res => {
      if (res.Status === "Success" && res.Response) {
        let user = this.utilsService.getUserId() || "guest";
        let lastVisitedData = JSON.parse(localStorage.getItem("lastVisitedCompany"));
        let lastVisit = (lastVisitedData[user] || []).filter(obj => {
          return obj.Token == res.Response.Token;
        });
        if (lastVisit.length > 0) {
          res.Response.IsIndex = 1;
          console.log(res.Response, "lastVisit[0], ...res.Response", lastVisit[0]);
          lastVisit[0] = Object.assign(lastVisit[0], res.Response);
          lastVisitedData[user] = lastVisitedData[user].slice(0, 5);
          localStorage.setItem("lastVisitedCompany", JSON.stringify(lastVisitedData));
        }
        this.indicesData["Token"] = token;
        this.indicesData["SegmentId"] = segmentId;
        this.indicesData["exchangeType"] = res.Response.ExchangeSegment;
        this.indicesData["PriceDivisor"] = res.Response.PriceDivisor;
        this.indicesData["secDesc"] = res.Response.SecDesc;
        this.indicesData["exchangeSegment"] = this.utilsService.getSegmentDetail(res.Response.SegmentId);
        this.indicesData = {
          ...{},
          ...this.indicesData
        };
        this.setTitleAndMeta(this.indicesData);
        this.gettingScriptDetail = false;
      } else {
        this.gettingScriptDetail = false;
      }
    }, err => {
      this.gettingScriptDetail = false;
    });
  }
  setTitleAndMeta(indice) {
    let data = {
      IndiceName: indice["secDesc"],
      exchange: this.utilsService.getSegmentDetail(indice["SegmentId"], "SegmentName")
    };
    this.seo.setDynamicMeta("indices", data);
  }
  /**
      * best five api defination for indices
      * @param segmentId segmentId of scrip
      * @param token token of scrip
      */
  getBest5(segmentId, token) {
    if (this.shared.userId == "guest") {
      let string;
      let keyInfoPayload = {
        UserId: this.utilsService.getUserId(),
        SessionId: this.utilsService.getSessionId() || "",
        Token: token,
        SegmentId: segmentId
      };
      this.restService.getKeyInfo(keyInfoPayload).subscribe(res => {
        if (res.Status === "Success" && res.Response) {
          this.best5Response = null;
          this.changeOptFut = null;
          let keyInfo = res.Response;
          let newB5 = {};
          newB5["MarketLot"] = keyInfo.MarketLot;
          newB5["PrevClose"] = keyInfo.PrevClose;
          let LUT = this.utilsService.changeCurrentDateFormat(keyInfo.LUT, "DD-MM-YYYY HH:mm:ss", "YYYY-MM-DD HH:mm:ss");
          let LTT = this.utilsService.changeCurrentDateFormat(keyInfo.LTT, "DD-MM-YYYY HH:mm:ss", "YYYY-MM-DD HH:mm:ss");
          string = "|1=" + segmentId + "|74=" + LUT + "|73=" + LTT + "|7=" + token + "|8=" + keyInfo.LTP + "|9=" + keyInfo.LTQ + "|399=" + keyInfo.PriceDivisor + "|75=" + keyInfo.OpenPrice + "|76=" + keyInfo.ClosePrice + "|77=" + keyInfo.HighPrice + "|78=" + keyInfo.LowPrice + "|93=" + keyInfo.LifeTimeHigh + "|94=" + keyInfo.LifeTimeLow + "|88=" + keyInfo.OpenInterest + "|80=" + keyInfo.ATP + "|79=" + keyInfo.Volume + "|";
          newB5["MktCap"] = keyInfo.MktCap;
          newB5["LTP"] = keyInfo.LTP == 0 ? newB5["PrevClose"] : keyInfo.LTP; // if LTP == 0 then show prevClose (10/05/2021)
          newB5["strB5Response"] = string;
          this.b5Data = newB5;
          this.best5Response = this.b5Data;
          this.processB5String(string);
        }
      });
    } else if (this.shared.userId && this.shared.userId != "guest") {
      let data = {
        UserId: this.utilsService.getUserId() || "",
        SessionId: this.utilsService.getSessionId() || "",
        Token: Number(token),
        SegmentId: Number(segmentId)
      };
      this.restService.getBestFive(data).subscribe(res => {
        if (res.Status === "Success" && res.Response) {
          this.b5Data = [];
          this.splitData = [];
          this.b5Data = res.Response;
          this.best5Response = null;
          this.changeOptFut = null;
          this.processB5String(res.Response.strB5Response);
          let priceDivisor = this.utilsService.getDefaultPriceDivisor(this.splitData[0][1], this.splitData[0][7]);
          res.Response.LTP = this.indicesData["LTP"] * priceDivisor;
          this.best5Response = res.Response;
          // } else if (this.utilsService.isSessionExpired(res.Reason)) {
          //   if(this.shared.isSSO){
          //     this.utilsService.sessionExpireHandling()
          //     return
          //   }
          //   this.utilsService.error("Session Expired", "Please Login Again.");
          //   this.utilsService.postFeatureCount();
          //   this.utilsService.clearLoginDetails();
          //   this.shared.userId = null;
          //   this.route.navigate(["auth/login"]);
        }
      });
    }
  }
  /**
      * process b5 /keyInfo string to get ltp,lut,ltt
      * @param b5String b5 string
      */
  processB5String(b5String) {
    b5String = b5String.replace(/\$/g, "|");
    this.splitData = this.utilsService.pipeToObject(b5String);
    let priceDivisor = this.utilsService.getDefaultPriceDivisor(this.splitData[0][1], this.splitData[0][7]);
    this.indicesData["LUT"] = this.utilsService.changeCurrentDateFormat(this.splitData[0]["74"], "YYYY-MM-DD HH:mm:ss", "DD-MM-YYYY HH:mm:ss");
    this.indicesData["LTT"] = this.utilsService.changeCurrentDateFormat(this.splitData[0]["73"], "YYYY-MM-DD HH:mm:ss", "DD-MM-YYYY HH:mm:ss");
    this.indicesData["LUTime"] = this.utilsService.changeCurrentDateFormat(this.splitData[0]["74"], "YYYY-MM-DD HH:mm:ss", "DD-MMM-YY HH:mm:ss");
    this.indicesData["LTTime"] = this.utilsService.changeCurrentDateFormat(this.splitData[0]["73"], "YYYY-MM-DD HH:mm:ss", "DD-MMM-YY HH:mm:ss");
    this.indicesData["PrevClose"] = this.b5Data.PrevClose;
    this.indicesData["LTP"] = this.splitData[0]["8"] == 0 ? this.b5Data.PrevClose : this.splitData[0]["8"] / priceDivisor || 0; // if LTP == 0 then show prevClose (10/05/2021)
    this.indicesData["diff"] = this.indicesData["LTP"] - this.indicesData["PrevClose"] / priceDivisor;
    this.indicesData["percentage"] = this.indicesData["diff"] / (this.indicesData["LTP"] - this.indicesData["diff"]) * 100 || 0;
    this.indicesData["change"] = Math.abs(this.indicesData["diff"]);
    this.indicesData["changePercent"] = Math.abs(this.indicesData["percentage"]).toFixed(2);
    if (this.indicesData["diff"] < 0) {
      this.indicesData["color"] = "text-pink";
      this.indicesData["arrow"] = "icon-long-arrow-down";
    } else if (this.indicesData["diff"] === 0) {
      this.indicesData["color"] = "";
      this.indicesData["arrow"] = "";
    } else if (this.indicesData["diff"] > 0) {
      this.indicesData["color"] = "text-green";
      this.indicesData["arrow"] = "icon-long-arrow-up";
    }
    this.indicesData["open"] = this.splitData[0]["75"] / priceDivisor;
    this.indicesData["close"] = this.splitData[0]["76"] / priceDivisor;
    this.indicesData["wKHigh"] = this.splitData[0]["93"] / priceDivisor;
    this.indicesData["WkLow"] = this.splitData[0]["94"] / priceDivisor;
    this.indicesData["volume"] = parseInt(this.splitData[0]["79"]);
    this.indicesData["high"] = this.splitData[0]["8"] == 0 ? this.indicesData["close"] : this.splitData[0]["77"] / priceDivisor; // if ltp == 0 then show prevClose in high (24/05/2021)
    this.indicesData["low"] = this.splitData[0]["8"] == 0 ? this.indicesData["close"] : this.splitData[0]["78"] / priceDivisor; // if ltp == 0 then show prevClose in low (24/05/2021)
  }
  /**
      * index detail api defination for number of company listed in that particular index
      * @param segmentId segmentId of scrip
      * @param token token of scrip
      */
  getIndexDetail(segmentId, token) {
    if (segmentId == 1 || segmentId == 3) {
      let payload = {
        UserId: this.utilsService.getUserId() || "",
        SessionId: this.utilsService.getSessionId() || "",
        SegmentId: Number(segmentId),
        Token: Number(token),
        IndexDataType: "8"
      };
      this.restService.getprofileMktIndex(payload).subscribe(res => {
        if (res.Status === "Success" && res.Response && res.Response.IndexConstituents && res.Response.IndexConstituents.lIndexConsituentDict) {
          this.indexdetail = [];
          let responeDetail = res.Response.IndexConstituents.lIndexConsituentDict;
          for (var key in responeDetail) {
            if (res.Response.IndexConstituents.lIndexConsituentDict[key].SecDesc) {
              res.Response.IndexConstituents.lIndexConsituentDict[key].MktCap = res.Response.IndexConstituents.lIndexConsituentDict[key].Price / res.Response.IndexConstituents.lIndexConsituentDict[key].PriceDivisor * res.Response.IndexConstituents.lIndexConsituentDict[key].NoOfShares;
              this.indexdetail.push(res.Response.IndexConstituents.lIndexConsituentDict[key]);
            }
          }
          // } else if (this.utilsService.isSessionExpired(res.Reason)) {
          //   if(this.shared.isSSO){
          //     this.utilsService.sessionExpireHandling()
          //     return
          //   }
          //   this.utilsService.error("Session Expired", "Please Login Again.");
          //   this.utilsService.postFeatureCount();
          //   this.utilsService.clearLoginDetails();
          //   this.shared.userId = null;
          //   this.route.navigate(["auth/login"]);
        }
      });
    }
  }
  /**
      * get future data api for expiry of future
      * @param token token of present  card selected in segmentToken
      * @param segmentId SegmentId of present  card selected in segmentToken
      */
  //    getFutureData(token: string | Number, segmentId: string | Number): void {
  //     let futurePayload = {
  //       "UserId": this.utilsService.getUserId(),
  //       "SessionId": this.utilsService.getSessionId() || '',
  //       "Token": Number(token),
  //       "SegmentId": Number(segmentId),
  //       "MktDataRequired": false
  //     }
  //     this.restService.getFutureData(futurePayload).subscribe((res) => {
  //       this.futureExpiryArray = [];
  //       this.optionExpiryArray = [];
  //       if (res.Status === "Success" && res.Response) {
  //         this.futureData = res.Response;
  //         res.Response.forEach((element, index) => {
  //           this.futureExpiryArray.push(res.Response[index].lExchangeScrip.sExpiry);
  //         });
  //         //console.log("futureExpiryArray",this.futureExpiryArray)
  //       }
  //       else if (this.utilsService.isSessionExpired(res.Reason)) {
  //         this.utilsService.error('Session Expired', "Please Login Again");
  //         this.utilsService.postFeatureCount();
  //         this.utilsService.clearLoginDetails();
  //         this.shared.userId = null;
  //         this.route.navigate(['auth/login']);
  //       }
  //       else {
  //         this.utilsService.error('Error', "Something went wrong");
  //       }
  //     })
  //   }
  /**
      * on index change, best5 and script details and indexDetails called to change data with respect to selected index
      * @param value selected indices from indexList dropdown
      */
  onIndexChange(value) {
    if (value != this.token) {
      let newNseArray = this.indexList.filter(obj => {
        return obj.Token == value;
      });
      if (newNseArray.length > 0 && this.token != newNseArray[0].Token) {
        this.utilsService.unSubscribeBestFive([{
          SegmentId: this.segmentId,
          Token: this.token
        }]);
        this.segmentId = newNseArray[0].SegmentId;
        // this.getMarketStatusFromAPI();
        this.token = newNseArray[0].Token;
        this.getScriptDetail(this.segmentId, this.token);
        this.getBest5(this.segmentId, this.token);
        this.getIndexDetail(this.segmentId, this.token);
        this.location.replaceState("instrument/indices/" + newNseArray[0].IndexName + "/" + this.segmentId + "/" + this.token);
        this.getITAScripDetail(this.token, this.segmentId);
        this.routeParams["segment"] = this.segmentId;
        this.routeParams["token"] = this.token;
        this.toggleAddRemove(this.segmentId, this.token);
        this.shared.setActiveSubscription = [this.token, this.segmentId];
        this.utilsService.subscribeBest5([{
          Token: this.token,
          SegmentId: this.segmentId
        }]);
        this.indicesData = {};
      }
    }
  }
  openCompany(item) {
    this.route.navigate(["instrument/equity/" + item.lExchangeScrip.Symbol + "/" + (item.SegmentId || item.lExchangeScrip.SegmentId) + "/" + (item.Token || item.lExchangeScrip.Token)]);
    // this.location.replaceState('instrument/equity/' + this.companyName + '/' + item.SegmentId + '/' + item.Token);
  }
  openQualitySection(data, index) {
    this.utilsService.broadcast("openQualityDrawer", {
      header: data,
      index: index,
      sections: this.qualityData
    });
  }
  reportList(event) {
    this.reportListing = event;
  }
  getFutureSocketRes() {
    this.watchSubs = this.utilsService.broadcastObservable("watchlist").subscribe(res => {
      //   //console.log("getSocketResponse res",res)
      let scrip = this.futureData.filter((obj, index) => {
        return res[0]["1"] == obj.SegmentId && obj.Token == res[0]["7"];
      });
      let priceDivisor = this.utilsService.getDefaultPriceDivisor(res[0][1], res[0][7]);
      //console.log("getFutureSocketRes watchlist",res)
      if (scrip.length > 0 && this.utilsService.isUpdatedData(scrip[0], res[0])) {
        // //console.log("getSocketResponse res",res)
        let obj = scrip[0];
        obj.Volume = Number(res[0][79]) || obj.Volume || 0;
        //   console.log(" multitouchLineResponse obj.Volume obj.Volume", obj.Volume)
        obj.prevChange = (Number(res[0]["8"]) / priceDivisor || 0) - (obj.LTP || 0);
        obj["PrvClose"] = res[0]["76"] / priceDivisor;
        obj.LTP = Number(res[0]["8"]) == 0 ? obj["PrvClose"] / priceDivisor : (res[0]["8"] || 0) / priceDivisor; // if LTP == 0 then show prevClose (10/05/2021)
        obj.Change = ((res[0]["8"] == 0 ? obj["PrvClose"] : Number(res[0]["8"] || 0)) - Number(res[0]["76"])) / priceDivisor || obj.Change; // (res[0]['8'] - obj['PrvClose']) / (res[0]['399'] || 1);//
        //console.log("obj.Change1",obj.Change)
        // //console.log("(res[0]['8'] == 0 ? obj['PrvClose'] : Number(res[0]['8'] || 0))",(res[0]['8'] == 0 ? obj['PrvClose'] : Number(res[0]['8'] || 0)))
        ////console.log(obj['PrvClose'],"(res[0]['8'] == 0 ? obj['PrvClose'] : (res[0]['8'] || 0))",(res[0]['8'] == 0 ? obj['PrvClose'] : (res[0]['8'] || 0)),"----",obj['PrvClose'],"------",(res[0]['8'] || 0))
        obj["ChangePer"] = obj["Change"] / (res[0]["76"] / priceDivisor) * 100 || obj["ChangePer"];
        // obj.LTP = res[0]["8"] / res[0]["399"];
        obj.class = obj["Change"] < 0 ? "down" : obj["Change"] > 0 ? "up" : "";
        obj.Change = obj.Change;
        obj.ChangePer = obj.ChangePer;
        //console.log("getSocketResponse objobjobj: ",obj)
      }
      //console.log("this.indicesData",this.indicesData)
    });
  }
  /**
      * Get socket response for selection index
      */
  getSocketResponse() {
    this.bestFiveSubscription = this.socketService.broadcaster.on("best5").subscribe(res => {
      res = res.replace(/\$/g, "|");
      let responseObject = this.utilsService.pipeToObject(res);
      let priceDivisor = this.utilsService.getDefaultPriceDivisor(responseObject[0]["1"], responseObject[0]["7"]);
      if (responseObject[0][7] == this.token && responseObject[0][1] == this.segmentId && this.utilsService.isUpdatedData(this.indicesData, responseObject[0])) {
        this.indicesData.prevChange = (Number(responseObject[0][8]) / priceDivisor || 0) - (this.indicesData.prevLTP || 0);
        this.indicesData["LUT"] = this.utilsService.changeCurrentDateFormat(responseObject[0]["74"], "YYYY-MM-DD HH:mm:ss", "DD-MM-YYYY HH:mm:ss");
        this.indicesData["LTT"] = this.utilsService.changeCurrentDateFormat(responseObject[0]["73"], "YYYY-MM-DD HH:mm:ss", "DD-MM-YYYY HH:mm:ss");
        this.indicesData["LUTime"] = this.utilsService.changeCurrentDateFormat(responseObject[0]["74"], "YYYY-MM-DD HH:mm:ss", "DD-MMM-YY HH:mm:ss");
        this.indicesData["LTTime"] = this.utilsService.changeCurrentDateFormat(responseObject[0]["73"], "YYYY-MM-DD HH:mm:ss", "DD-MMM-YY HH:mm:ss");
        this.b5Data.PrevClose = this.b5Data.PrevClose || responseObject[0]["76"];
        this.indicesData["LTP"] = responseObject[0]["8"] == 0 ? this.b5Data.PrevClose : responseObject[0]["8"] / priceDivisor || 0; // if LTP == 0 then show prevClose (10/05/2021)
        this.indicesData["prevLTP"] = this.indicesData["LTP"];
        this.indicesData["diff"] = this.indicesData["LTP"] - this.b5Data.PrevClose / priceDivisor;
        this.indicesData["percentage"] = this.indicesData["diff"] / (this.indicesData["LTP"] - this.indicesData["diff"]) * 100 || 0;
        this.indicesData["change"] = Math.abs(this.indicesData["diff"]);
        this.indicesData["changePercent"] = Math.abs(this.indicesData["percentage"]).toFixed(2);
        if (this.indicesData["diff"] < 0) {
          this.indicesData["color"] = "text-pink";
          this.indicesData["arrow"] = "icon-long-arrow-down";
        } else if (this.indicesData["diff"] === 0) {
          this.indicesData["color"] = "";
          this.indicesData["arrow"] = "";
        } else if (this.indicesData["diff"] > 0) {
          this.indicesData["color"] = "text-green";
          this.indicesData["arrow"] = "icon-long-arrow-up";
        }
        this.indicesData["open"] = responseObject[0]["75"] / priceDivisor;
        this.indicesData["close"] = responseObject[0]["76"] / priceDivisor;
        this.indicesData["wKHigh"] = responseObject[0]["93"] / priceDivisor;
        this.indicesData["WkLow"] = responseObject[0]["94"] / priceDivisor;
        this.indicesData["high"] = responseObject[0]["77"] / priceDivisor; // if ltp == 0 then show prevClose in high (24/05/2021)
        this.indicesData["low"] = responseObject[0]["78"] / priceDivisor; // if ltp == 0 then show prevClose in low (24/05/2021)
      }
    });
  }
  /**
      * on scroll button click , goto top of page
      */
  gotoOverView() {
    this.selectedTab = false;
    this.arrowClick = true;
    document.documentElement.scrollTop = 0;
  }
  /**
      * add or remove  indices to watchlist
      * @param segmentId segmentId of selected scrip
      * @param token token of selected scrip
      */
  toggleAddRemove(segmentId, token) {
    this.scripData = this.utilsService.checkFromWatchlist(segmentId, token);
    this.segmentTokenString = {
      SegmentId: segmentId,
      Token: token
    };
    if (this.scripData && this.scripData.ProfileId) {
      this.isAdded = true;
    } else {
      this.isAdded = false;
    }
  }
  /**
      * Whether to add or remove  indices to watchlist
      * @param profileId token of selected scrip
      */
  addRemoveWatchList(profileId) {
    let userAccountStatus = this.utilsService.getUserAccountStatus();
    if (!(!userAccountStatus || !userAccountStatus.onboardStatus || userAccountStatus.onboardStatus == 'C')) {
      this.utilsService.broadcast('generateSubs', {});
    } else {
      if (!profileId) {
        this.segmentTokenString.scripIndex = this.scripData.scripIndex;
      }
      this.segmentTokenString.ProfileId = profileId ? profileId : this.scripData.ProfileId;
      this.segmentTokenString.action = this.isAdded;
      this.isButtonDisabled = true;
      this.broadcaster.broadcast("addRemoveWatchList", this.segmentTokenString);
    }
  }
  /**
      * on kill of this component unsubscribe socket and all other subscription
      */
  ngOnDestroy() {
    if (this.token && this.segmentId) this.utilsService.unSubscribeBestFive([{
      SegmentId: this.segmentId,
      Token: this.token
    }]);
    if (this.scripAddSubscription) this.scripAddSubscription.unsubscribe();
    if (this.scripRemoveSubscription) this.scripRemoveSubscription.unsubscribe();
    if (this.routeParamsSubscription) this.routeParamsSubscription.unsubscribe();
    if (this.watchlistNameSubscription) this.watchlistNameSubscription.unsubscribe();
    if (this.bestFiveSubscription) this.bestFiveSubscription.unsubscribe();
    if (this.routeReuseSubscription) this.routeReuseSubscription.unsubscribe();
    if (this.windowActiveSubscription) this.windowActiveSubscription.unsubscribe();
    if (this.marketStatusSubscription) this.marketStatusSubscription.unsubscribe();
    if (this.watchSubs) this.watchSubs.unsubscribe();
    if (this.preLoginIndices) this.preLoginIndices.unsubscribe();
    this.renderer.setStyle(document.body, "overflow", "auto");
    this.shared.clearActiveSub();
    let datapoints = [];
    this.futureData.forEach(item => {
      item.SegmentId = item.lExchangeScrip.SegmentId;
      item.Token = item.lExchangeScrip.Token;
      datapoints.push({
        SegmentId: item.SegmentId,
        Token: item.Token
      });
    });
    // this.toggleAddRemove(item);
    this.utilsService.unSubscribeMultitouchline(datapoints);
  }
  /**
      * go to company page, from company list under that index
      * @param item company detail of selected scrip
      */
  gotoCompanyPage(item) {
    let companyName = item["SecDesc"].replace(/[\s|\&|\%]/g, '').toLowerCase();
    let url = companyName + '/' + item.SegmentId + '/' + item.Token;
    if (item.SegmentId == 1 || item.SegmentId == 2 || item.SegmentId == 4 || item.SegmentId == 3) {
      url = "equity/" + url;
    } else if (item.SegmentId == 5 || item.SegmentId == 7) {
      url = "commodity/" + url;
    } else if (item.SegmentId == 13 || item.SegmentId == 38 || item.SegmentId == 14 || item.SegmentId == 39) {
      url = "currency/" + url;
    }
    this.route.navigate(["instrument/" + url]);
    let segmentToken = item.SegmentId + "&" + item.Token;
    localStorage.setItem("presentToken", JSON.stringify(segmentToken));
  }
  ngAfterViewInit() {
    this.realtimeMessage = localStorage.getItem("realtimeMessage") != "1";
    if (this.realtimeMessage) {
      setTimeout(() => {
        if (document.getElementById('delayed-message')) document.getElementById('delayed-message').classList.add("msg-active");
      }, 1500);
    }
    setTimeout(() => {
      let userId = this.utilsService.getUserId();
      //if(params['segment']==5&&(!userId||userId=='guest')){
      if (!(location.pathname.indexOf("/indices/") > -1) && !(!userId || userId == "guest")) {
        if (!localStorage.getItem("company-walkthrough")) {
          this.showWalkthrough();
          localStorage.setItem("company-walkthrough", "1");
        } else {
          this.shared.showWalkThrough["showWalkThrough"] = false;
        }
      }
    }, 3000);
    // setTimeout(() => {
    //   var element = document.getElementById("chart-section-draggable");
    //   if (element) {
    //     let op = {
    //       setCursor: true,
    //     };
    //     this.draEle = new Draggable(element, op);
    //   }
    // }, 100);
  }
  showWalkthrough() {
    let index = 0;
    let id = "company-events";
    let viewName = document.getElementById(id);
    if (!viewName) {
      id = "company-reports";
      viewName = document.getElementById(id);
      index = 1;
    }
    if (!viewName) {
      id = "company-key-metrics";
      viewName = document.getElementById(id);
      index = 2;
    }
    let coordinate = viewName.getBoundingClientRect();
    if (viewName) {
      this.renderer.setStyle(document.body, "overflow", "hidden");
      this.shared.showWalkThrough["showFirstPopup"] = false;
      this.shared.showWalkThrough["showWalkThrough"] = true;
      this.shared.showWalkThrough["feature"] = "companyPageSection";
      // this.shared.showWalkThrough['right'] = 150 ;
      //   this.shared.showWalkThrough['top'] = 250 ;
      this.shared.showWalkThrough["left"] = coordinate.left + window.scrollX;
      this.shared.showWalkThrough["top"] = coordinate["top"] + window.scrollY + 40;
      this.shared.showWalkThrough["count"] = index;
      let presetObj = this.utilsService.walkthrgConfig["companyPageSection"][index];
      presetObj.id = id;
      this.utilsService.walkthrgConfig["companyPageSection"][index] = presetObj;
      this.shared.showWalkThrough["presentObj"] = this.utilsService.walkthrgConfig["companyPageSection"][index];
      this.broadcaster.broadcast("companyWalkthrough", this.utilsService.walkthrgConfig["companyPageSection"][index]);
      document.getElementById(this.shared.showWalkThrough["presentObj"].id).scrollIntoView({
        block: "center"
      });
      setTimeout(() => {
        let viewName = document.getElementById(this.shared.showWalkThrough["presentObj"].id);
        if (viewName) {
          let coordinate = viewName.getBoundingClientRect();
          this.shared.showWalkThrough["left"] = coordinate.left + window.scrollX;
          this.shared.showWalkThrough["top"] = coordinate["top"] + window.scrollY + 40;
        }
      }, 100);
    } else {
      this.renderer.setStyle(document.body, "overflow", "auto");
      this.shared.showWalkThrough["showWalkThrough"] = false;
    }
  }
  /**
      * when the user is not logged in,  if user clicks on watchlist button , popup opens
      */
  openPreLogin() {
    let userAccountStatus = this.utilsService.getUserAccountStatus();
    if (!(!userAccountStatus || !userAccountStatus.onboardStatus || userAccountStatus.onboardStatus == 'C')) {
      this.utilsService.broadcast('generateSubs', {});
    } else {
      if (!this.utilsService.isAuthorized()) {
        this.showPreLogin = true;
        this.renderer.setStyle(document.body, "overflow", "hidden");
      }
    }
  }
  closePreLoginModal() {
    this.showPreLoginModal = false;
    this.route.navigate(["/"]);
  }
  /**
      * close prelogin Popup
      */
  closePreLogin() {
    this.showPreLogin = false;
    this.showPreLoginModal = false;
    this.renderer.setStyle(document.body, "overflow", "auto");
  }
  /**
      * go to login page when user clicks on login button in prelogin popup
      */
  login() {
    this.utilsService.setFromURL();
    this.route.navigate(["auth/login"]);
  }
  /** call prelogin data (keyinfo) after 1 min */
  getPreLoginIndicesInterval() {
    this.getBest5(this.segmentId, this.token);
  }
  /** */
  getMappedTokens(mappedTokens) {
    // console.log("getMappedTokens2",this.mappedTokens)
    if (mappedTokens && mappedTokens.length) {
      this.mappedTokens = JSON.parse(JSON.stringify(mappedTokens));
      //   console.log("getMappedTokens",this.mappedTokens)
      let futData = this.mappedTokens.filter(ele => {
        return ele.type == "FUT";
      });
      if (futData && futData.length) {
        //console.log("this.mappedTokens",futData)
        if (this.lastToken != futData[0].Token) {
          this.futureData = [];
          this.getFutureData(futData[0].Token, futData[0].SegmentId);
        } else {
          this.futureData = this.lastSavedFutureData;
        }
        this.lastToken = futData[0].Token;
      } else {
        this.futureData = [];
      }
      //this.summarizeFAQ()
    }
  }
  setEventData(data) {
    this.eventData = data;
  }
  addPriceAlert() {
    if (this.utilsService.isAuthorized()) {
      let request = {
        config: null,
        requestType: 1,
        data: this.indicesData
      };
      this.utilsService.broadcast("openPriceAlert", request);
    } else {
      this.showPreLogin = true;
      this.renderer.setStyle(document.body, "overflow", "hidden");
    }
  }
  /** navigate to option chain */
  openOptionChain() {
    let url = "/option-chain/";
    if (this.indicesData.SegmentId == 1 || this.indicesData.SegmentId == 3) {
      url += 'derivatives?segmentId=1&token=' + this.indicesData.Token + "&seg=" + this.indicesData.SegmentId + "&priceDiviser=" + this.indicesData.PriceDivisor;
    } else if (this.indicesData.SegmentId == 2 || this.indicesData.SegmentId == 4) {
      url += 'derivatives?segmentId=1&token=' + (this.indicesData.AssetToken || this.indicesData.Token) + "&seg=" + this.indicesData.SegmentId + "&priceDiviser=" + this.indicesData.PriceDivisor;
    } else if (this.indicesData.SegmentId == 5 || this.indicesData.SegmentId == 7 || this.indicesData.SegmentId == 13 || this.indicesData.SegmentId == 38) {
      url += (this.indicesData.SegmentId > 7 ? 'currencies' : 'commodities') + '?segmentId=' + (this.indicesData.SegmentId + 1) + '&token=' + (this.indicesData.AssetToken || this.indicesData.Token) + "&seg=" + this.indicesData.SegmentId + "&priceDiviser=" + this.indicesData.PriceDivisor;
    } else if ([6, 8, 14, 39].indexOf(Number(this.indicesData.SegmentId)) > -1) {
      url += (this.indicesData.SegmentId == 14 || this.indicesData.SegmentId == 39 ? 'currencies' : 'commodities') + '?segmentId=' + this.indicesData.SegmentId + '&token=' + this.indicesData.Token + "&seg=" + this.indicesData.SegmentId + "&priceDiviser=" + this.indicesData.PriceDivisor;
    }
    console.log(url, "this.indicesData", this.indicesData);
    this.route.navigateByUrl(url + "&symbol=" + this.indicesData.secDesc);
  }
  setMojoURL() {
    this.mojoAnalysisURL = "";
    let sid = this.scripInfo.SegmentId == 1 ? this.scripInfo.Symbol.toLowerCase() : this.scripInfo.Token;
    let segment = this.scripInfo.SegmentId == 1 ? "NSE" : "BSE";
    this.mojoAnalysisURL = this.sanitizer.bypassSecurityTrustResourceUrl("https://market.choiceindia.com/choice/stocks?sid=" + sid + "&exchange=" + segment + "&utm_source=choice_finx_web&utm_medium=choicefinx&utm_campaign=choice_finx_mojo_analysis");
  }
  /**
      * Get Market Status from API in case not found in localstorage
      */
  getMarketStatusFromAPI() {
    //   let request = { "UserId": this.utilsService.getUserId(), "SessionId": this.utilsService.getSessionId() || '' }
    //   this.rest.getMarketStatus(request).subscribe((data) => {
    //     if (data.Status === "Success" && data.Response) {
    //       this.utilsService.saveMarketStatus(data.Response.MktStatusResp);
    //     }
    //   }, (err) => {
    //   });
  }
  getITAScripDetail(token, segmentId) {
    this.qualityData = [{
      key: "Price"
    }, {
      key: "Growth"
    }, {
      key: "Quality"
    }, {
      key: "Management"
    }];
    this.scripItaDetail = {
      analysis: {}
    };
    this.historyData = {};
    //console.log("segmentId",segmentId,token)
    this.restService.getITAScripDetail(segmentId, token).subscribe(data => {
      if (data && !data.Response) {
        //console.log("getITAScripDetail ",data)
        this.scripItaDetail = data || {
          analysis: {}
        };
        /*               console.log("this.scripItaDetail.history",this.scripItaDetail.history)
                 if(this.scripItaDetail&&this.scripItaDetail.history&&this.scripItaDetail.history.length){
                     this.scripItaDetail.history =   this.scripItaDetail.history.slice(this.scripItaDetail.history.length>5?this.scripItaDetail.history.length-5:0,this.scripItaDetail.overview.length)
                 } */
        let classObject = {
          Attractive: "dark-grn-txt",
          Expensive: "red-txt",
          Good: "grn-txt",
          Moderate: "blue-txt",
          Poor: "yellow-txt",
          AVG: "orng-txt",
          else: "grey-text"
        };
        this.qualityData = [{
          key: "Price",
          value: (this.scripItaDetail.analysis["price"] || {}).result || "-",
          class: classObject[(this.scripItaDetail.analysis["price"] || {}).result || "Good"] || "grey-txt",
          sectionData: this.scripItaDetail.analysis["price"] || {}
        }, {
          key: "Growth",
          value: (this.scripItaDetail.analysis["growth"] || {}).result || "-",
          class: classObject[(this.scripItaDetail.analysis["growth"] || {}).result || "Good"] || "grey-txt",
          sectionData: this.scripItaDetail.analysis["growth"] || {}
        }, {
          key: "Quality",
          value: (this.scripItaDetail.analysis["quality"] || {}).result || "-",
          class: classObject[(this.scripItaDetail.analysis["quality"] || {}).result || "Good"] || "grey-txt",
          sectionData: this.scripItaDetail.analysis["quality"] || {}
        }, {
          key: "Management",
          value: (this.scripItaDetail.analysis["mgmt"] || {}).result || "-",
          class: classObject[(this.scripItaDetail.analysis["mgmt"] || {}).result || "Good"] || "grey-txt",
          sectionData: this.scripItaDetail.analysis["mgmt"] || {}
        }];
        //QUALITY
        /*  this.qualityData=[{key:"Price", value:((this.scripItaDetail.analysis['price']||{}).result||'-'), class:'grn-txt' , sectionData:this.scripItaDetail.analysis['price']||{}},
               {key:"Growth", value:((this.scripItaDetail.analysis['growth']||{}).result||'-'), class:'orng-txt', sectionData:this.scripItaDetail.analysis['growth']||{}},
               {key:"Quality", value:((this.scripItaDetail.analysis['quality']||{}).result||'-'), class:'yellow-txt', sectionData:this.scripItaDetail.analysis['quality']||{}},
               {key:'Management', value:((this.scripItaDetail.analysis['mgmt']||{}).result||'-'), class:'red-txt', sectionData:this.scripItaDetail.analysis['mgmt']||{}}] */
        //console.log("getITAScripDetail",this.scripItaDetail)
        let monthJSON = {
          "01": "JAN",
          "02": "FEB",
          "03": "MAR",
          "04": "APR",
          "05": "MAY",
          "06": "JUN",
          "07": "JUL",
          "08": "AUG",
          "09": "SEP",
          "10": "OCT",
          "11": "NOV",
          "12": "DEC"
        };
        //HISTORY
        this.scripItaDetail.history.forEach((ele, index) => {
          ele.historyDetails.forEach((subEle, i) => {
            let year = (subEle.year || "").toString().substring(0, 4) + "-" + (Number((subEle.year || "").toString().substring(2, 4)) + 1);
            let subData = {
              monthNum: (subEle.year || "").toString().substring(4, 6),
              monthKey: monthJSON[(subEle.year || "").toString().substring(4, 6)] + " '" + (subEle.year || "").toString().substring(2, 4),
              ...subEle
            };
            if (this.historyData[year]) {
              if (this.historyData[year][ele.catName]) {
                //  Object.assign(subData,subEle)
                this.historyData[year][ele.catName].push(subData);
              } else {
                this.historyData[year][ele.catName] = [];
                this.historyData[year][ele.catName].push(subData);
              }
            } else {
              this.historyData[year] = {};
              this.historyData[year][ele.catName] = [];
              this.historyData[year][ele.catName].push(subData);
            }
            let data = [];
            console.log(this.historyData[year][ele.catName], "this.historyData[year][ele.catName]");
            data = this.historyData[year][ele.catName].sort((ele1, ele2) => {
              return Number(ele1.monthNum) - Number(ele2.monthNum);
            });
            this.historyData[year][ele.catName] = data;
          });
          if (index == 0) {
            this.selectedYear = (ele.historyDetails[ele.historyDetails.length - 1].year || "").toString().substring(0, 4) + "-" + (Number((ele.historyDetails[ele.historyDetails.length - 1].year || "").toString().substring(2, 4)) + 1);
            if (this.historyData) {
              let keys = Object.keys(this.historyData);
              keys = keys.sort();
              let selected = keys.slice(keys.indexOf(this.selectedYear) - 1, keys.indexOf(this.selectedYear));
              if (selected && selected.length) {
                this.prevyear = this.selectedYear.split("-")[0].substring(0, 2) + (Number(this.selectedYear.split("-")[0].substring(2, 4)) - 1) + "-" + (Number(this.selectedYear.split("-")[1]) - 1); //selected[0]
              } else {
                this.prevyear = "";
              }
              // console.log(this.selectedYear,"this.prevyear",this.prevyear)
            }
            this.selectedSegment = ele.catName;
            this.selectedSegmentDefault = ele.catName;
            // //console.log("this.selectedYear",this.selectedSegment)
          }
          // this.historyData[year]={
          //   console.log(ele,"datadatadata")
          // }
        });
        //console.log("historyData",this.historyData)
      } else {
        this.qualityData = [{
          key: "Price"
        }, {
          key: "Growth"
        }, {
          key: "Quality"
        }, {
          key: "Management"
        }];
        this.scripItaDetail = {
          analysis: {},
          noData: true
        };
        this.historyData = {};
      }
    }, err => {
      this.qualityData = [{
        key: "Price"
      }, {
        key: "Growth"
      }, {
        key: "Quality"
      }, {
        key: "Management"
      }];
      this.scripItaDetail = {
        analysis: {}
      };
      this.historyData = {};
    });
  }
  selectSegment(val) {
    this.selectedSegment = val;
  }
  selectYear(year) {
    // this.setValues=true
    this.selectedYear = year;
    if (this.historyData) {
      let keys = Object.keys(this.historyData);
      keys = keys.sort();
      let selected = keys.slice(keys.indexOf(this.selectedYear) - 1, keys.indexOf(this.selectedYear));
      if (selected && selected.length) {
        this.prevyear = this.selectedYear.split("-")[0].substring(0, 2) + (Number(this.selectedYear.split("-")[0].substring(2, 4)) - 1) + "-" + (Number(this.selectedYear.split("-")[1]) - 1); //selected[0]
      }
      //console.log(this.selectedYear,"this.prevyear",this.prevyear)
    }
    this.selectedSegment = this.selectedSegmentDefault;
    // this.setValues=false
  }
  initiateFocusOnEvents() {
    document.getElementById('fund-interest').scrollIntoView({
      block: 'end',
      behavior: 'smooth'
    });
    this.newsComponent.activateFilter(3, 'eventsData');
  }
  closeRealtimeMessage() {
    this.realtimeMessage = false;
    localStorage.setItem("realtimeMessage", "1");
  }
  static {
    this.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_32__.ActivatedRoute
    }, {
      type: _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_5__.UtilsService
    }, {
      type: _angular_common__WEBPACK_IMPORTED_MODULE_33__.Location
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_32__.Router
    }, {
      type: _services_sockets_interactive_socket_service__WEBPACK_IMPORTED_MODULE_8__.InteractiveSocketService
    }, {
      type: _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__.SharedDataService
    }, {
      type: _services_sockets_socket_service__WEBPACK_IMPORTED_MODULE_6__.SocketService
    }, {
      type: _services_rest_company_service__WEBPACK_IMPORTED_MODULE_2__.CompanyService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_34__.NgZone
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_34__.Renderer2
    }, {
      type: _services_rest_common_service__WEBPACK_IMPORTED_MODULE_9__.CommonService
    }, {
      type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_35__.DomSanitizer
    }, {
      type: _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_7__.SeoService
    }, {
      type: _services_sockets_broadcaster__WEBPACK_IMPORTED_MODULE_4__.Broadcaster
    }, {
      type: _services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_18__.AnalyticsService
    }];
  }
  static {
    this.propDecorators = {
      newsComponent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_34__.ViewChild,
        args: [_news_announcement_news_announcement_component__WEBPACK_IMPORTED_MODULE_25__.NewsAnnouncementComponent]
      }]
    };
  }
};
CompanyComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_36__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_34__.Component)({
  selector: "app-company",
  template: _company_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  imports: [_segment_token_segment_token_component__WEBPACK_IMPORTED_MODULE_30__.SegmentTokenComponent, _overview_navbar_overview_navbar_component__WEBPACK_IMPORTED_MODULE_26__.OverviewNavbarComponent, _fut_option_fut_option_component__WEBPACK_IMPORTED_MODULE_23__.FutOptionComponent, _chartiq_simple_chartiq_simple_component__WEBPACK_IMPORTED_MODULE_21__.ChartiqSimpleComponent, _key_info_key_info_component__WEBPACK_IMPORTED_MODULE_24__.KeyInfoComponent, _best_five_best_five_component__WEBPACK_IMPORTED_MODULE_20__.BestFiveComponent, _pivot_pivot_component__WEBPACK_IMPORTED_MODULE_28__.PivotComponent, _reports_reports_component__WEBPACK_IMPORTED_MODULE_29__.ReportsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_33__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_33__.NgStyle, _peer_comparision_peer_comparision_component__WEBPACK_IMPORTED_MODULE_27__.PeerComparisionComponent, _news_announcement_news_announcement_component__WEBPACK_IMPORTED_MODULE_25__.NewsAnnouncementComponent, _company_details_company_details_component__WEBPACK_IMPORTED_MODULE_22__.CompanyDetailsComponent, _common_module_select_completer_select_completer_component__WEBPACK_IMPORTED_MODULE_10__.SelectCompleterComponent, _directives_dropdown_dropdown_directive__WEBPACK_IMPORTED_MODULE_12__.Dropdown, _directives_dropdown_dropdown_open_directive__WEBPACK_IMPORTED_MODULE_11__.DropdownOpen, _advance_decline_advance_decline_component__WEBPACK_IMPORTED_MODULE_19__.AdvanceDeclineComponent, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_37__.NgxDatatableModule, _directives_show_focus_directive__WEBPACK_IMPORTED_MODULE_13__.ShowFocusDirective, _angular_common__WEBPACK_IMPORTED_MODULE_33__.KeyValuePipe, _pipes_segment_pipe__WEBPACK_IMPORTED_MODULE_16__.SegmentPipe, _pipes_condense_pipe__WEBPACK_IMPORTED_MODULE_14__.CondensePipe, _pipes_value_pipe__WEBPACK_IMPORTED_MODULE_17__.ValuePipe, _pipes_custom_filter_by_pipe__WEBPACK_IMPORTED_MODULE_15__.CustomFilterByPipe],
  styles: [(_company_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_36__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_32__.ActivatedRoute, _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_5__.UtilsService, _angular_common__WEBPACK_IMPORTED_MODULE_33__.Location, _angular_router__WEBPACK_IMPORTED_MODULE_32__.Router, _services_sockets_interactive_socket_service__WEBPACK_IMPORTED_MODULE_8__.InteractiveSocketService, _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__.SharedDataService, _services_sockets_socket_service__WEBPACK_IMPORTED_MODULE_6__.SocketService, _services_rest_company_service__WEBPACK_IMPORTED_MODULE_2__.CompanyService, _angular_core__WEBPACK_IMPORTED_MODULE_34__.NgZone, _angular_core__WEBPACK_IMPORTED_MODULE_34__.Renderer2, _services_rest_common_service__WEBPACK_IMPORTED_MODULE_9__.CommonService, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_35__.DomSanitizer, _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_7__.SeoService, _services_sockets_broadcaster__WEBPACK_IMPORTED_MODULE_4__.Broadcaster, _services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_18__.AnalyticsService])], CompanyComponent);


/***/ }),

/***/ 33742:
/*!**************************************************!*\
  !*** ./src/app/company-module/company.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CompanyModule: () => (/* binding */ CompanyModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _guards_basic_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../guards/basic.guard */ 72972);
/* harmony import */ var _services_rest_company_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/rest/company.service */ 12744);
/* harmony import */ var _company_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./company.component */ 16079);






/** fixed config for company page */
const routeConfig = {
  header: true,
  footer: true,
  indices: false,
  betaFooter: false,
  ticker: true,
  watchlist: false,
  freshChat: false
};
const CompanyRoutes = [{
  path: ':type/:companyName/:segment/:token',
  component: _company_component__WEBPACK_IMPORTED_MODULE_2__.CompanyComponent,
  canActivate: [_guards_basic_guard__WEBPACK_IMPORTED_MODULE_0__.BasicGuard],
  data: {
    config: routeConfig,
    style: ['assets/chartiq/css/stx-chart.css'],
    script: ['assets/chartiq/js/chartiq.js']
  }
}];
let CompanyModule = class CompanyModule {};
CompanyModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(CompanyRoutes)],
  providers: [_services_rest_company_service__WEBPACK_IMPORTED_MODULE_1__.CompanyService]
})], CompanyModule);


/***/ }),

/***/ 23399:
/*!*******************************************************************!*\
  !*** ./src/app/company-module/fut-option/fut-option.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FutOptionComponent: () => (/* binding */ FutOptionComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _fut_option_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fut-option.component.html?ngResource */ 57161);
/* harmony import */ var _fut_option_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fut-option.component.scss?ngResource */ 22473);
/* harmony import */ var _fut_option_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fut_option_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _pipes_segment_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pipes/segment.pipe */ 39995);
/* harmony import */ var _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../assets/libs/esm-moment.min.js */ 29483);
/* harmony import */ var _services_rest_company_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/rest/company.service */ 12744);
/* harmony import */ var _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/shared-data/shared-data.service */ 46013);
/* harmony import */ var _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../services/utils/utils.service */ 89893);






/** Import Moment JS Library*/
// var moment: any = require();






/** Future Option component view and scss linking*/
let FutOptionComponent = class FutOptionComponent {
  /**
   * Dependency injection and varaible intialization
   * @param formBuilder Form defination
   * @param utilsService for processing of data
   * @param companyService for api call
   * @param sharedDataService for sharing data between two component
   * @param router for navigation between two component
   */
  constructor(formBuilder, utilsService, companyService, sharedDataService, router) {
    this.formBuilder = formBuilder;
    this.utilsService = utilsService;
    this.companyService = companyService;
    this.sharedDataService = sharedDataService;
    this.router = router;
    /**
     * array to toggle show hide dropdown
    */
    this.showHideArray = [false, false, false, false, false];
    /**
     * array of instrument
    */
    this.instrumentArray = ['Options'];
    this.onchangeFutOpt = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    this.futureDataEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    //form intialization
    this.optionFutureFilterForm = this.formBuilder.group({
      instrument: [this.instrument, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
      futExpiryDate: [this.futExpiryDate, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
      optExpiryDate: [this.optExpiryDate, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
      optionType: [this.optionType, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
      strikePrice: [this.strikePrice, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]
    });
    this.futureExpiryArray = [];
    this.optionExpiryArray = [];
    this.optionTypeArray = [];
    this.strikePriceArray = [];
    this.futureData = [];
  }
  /**
  * ondestroy close  subscription
  */
  ngOnDestory() {
    if (this.routeReuseSubscription) this.routeReuseSubscription.unsubscribe();
  }
  /**
   * change in url is checked, route reuse strategy is implemented
   */
  ngOnInit() {
    // this.mappedTokens.filter((obj, index) => {
    //   obj["selectedSegment"] = false;
    //   if (obj.type == 'CE') {
    //     obj["selectedSegment"] = true;
    //     this.getScripDetail(obj.Token, obj.SegmentId, obj);
    //     this.activeSegment.push(obj);
    //     this.utilsService.subscribeBest5([{ 'Token': obj.Token, 'SegmentId': obj.SegmentId }]);
    //   }
    //   return true;
    // });
    this.routeReuseSubscription = this.utilsService.broadcastObservable('routeResuse').subscribe(data => {
      if (this.scripInfo && data && (data.SegmentId == 2 || data.SegmentId == 4 || data.SegmentId == 38 || data.SegmentId == 5 || data.SegmentId == 7 || data.SegmentId == 13)) {
        this.scripInfo.Token = data.Token;
        this.scripInfo.SecDesc = data.SecDesc;
        this.scripInfo.SecName = data.SecName;
        if (data["OptionType"] == "XX") {
          this.instrument = 'Future';
          this.scripInfo.OT = "XX";
          this.futExpiryDate = data.sExpiry;
        } else if (data["OptionType"] == "CE" || data["OptionType"] == "PE") {
          this.instrument = 'Options';
          this.optionType = data["OptionType"];
          this.optExpiryDate = data.sExpiry;
          this.strikePrice = data["StrikePrice"];
          this.scripInfo.ExpiryDate = this.optExpiryDate;
          this.scripInfo.StrikePrice = this.strikePrice;
          this.scripInfo.OT = data["OptionType"];
        }
        this.onchangeFutOpt.emit({
          label: this.scripInfo
        });
      }
    });
  }
  /**
   * listen to scripDetails response emitted from segmentToken, check whether future or option , accordingly call respective api
   * @param changes scripDetails response emitted from segmentToken
   */
  ngOnChanges(changes) {
    if (changes['scripInfo'] && changes['scripInfo'].currentValue) {
      this.scripInfo = changes['scripInfo'].currentValue;
      if (this.scripInfo.SegmentId != 1 || this.scripInfo.SegmentId != 3) {
        this.optionTypeArray = [];
        this.optionExpiryArray = [];
        this.strikePriceArray = [];
        this.futureExpiryArray = [];
        this.strikePrice = [];
        if (this.scripInfo["OT"] == "XX") {
          //conditional validation
          this.optionFutureFilterForm.get('futExpiryDate').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]);
          this.optionFutureFilterForm.get('futExpiryDate').updateValueAndValidity();
          this.optionFutureFilterForm.get('optExpiryDate').setValidators(null);
          this.optionFutureFilterForm.get('optExpiryDate').updateValueAndValidity();
          this.optionFutureFilterForm.get('optionType').setValidators(null);
          this.optionFutureFilterForm.get('optionType').updateValueAndValidity();
          this.optionFutureFilterForm.get('strikePrice').setValidators(null);
          this.optionFutureFilterForm.get('strikePrice').updateValueAndValidity();
          this.instrument = 'Future';
          this.futExpiryDate = this.scripInfo.ExpiryDate;
          this.getFutureData(this.scripInfo.Token, this.scripInfo.SegmentId);
        } else if (this.scripInfo["OT"] == "CE" || this.scripInfo["OT"] == "PE") {
          //conditional validation
          this.optionFutureFilterForm.get('futExpiryDate').setValidators(null);
          this.optionFutureFilterForm.get('futExpiryDate').updateValueAndValidity();
          this.optionFutureFilterForm.get('optExpiryDate').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]);
          this.optionFutureFilterForm.get('optExpiryDate').updateValueAndValidity();
          this.optionFutureFilterForm.get('optionType').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]);
          this.optionFutureFilterForm.get('optionType').updateValueAndValidity();
          this.optionFutureFilterForm.get('strikePrice').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]);
          this.optionFutureFilterForm.get('strikePrice').updateValueAndValidity();
          this.instrument = 'Options';
          this.optionType = this.scripInfo["OT"] == "CE" ? 'CE' : 'PE';
          this.optExpiryDate = this.scripInfo.ExpiryDate;
          let str = this.scripInfo["SecName"].split("|");
          let subStr = str[1].split(" ");
          this.strikePrice = this.scripInfo["StrikePrice"];
          this.getOptionData(this.scripInfo.Token, this.scripInfo.SegmentId);
        }
      }
    }
  }
  /**
   * get future data api for expiry of future
   * @param token token of present  card selected in segmentToken
   * @param segmentId SegmentId of present  card selected in segmentToken
   */
  getFutureData(token, segmentId) {
    let futurePayload = {
      "UserId": this.utilsService.getUserId(),
      "SessionId": this.utilsService.getSessionId() || '',
      "Token": Number(token),
      "SegmentId": Number(segmentId),
      "MktDataRequired": false
    };
    this.companyService.getFutureData(futurePayload).subscribe(res => {
      this.futureExpiryArray.length = 0;
      this.optionExpiryArray.length = 0;
      if (res.Status === "Success" && res.Response) {
        this.futureData = res.Response;
        res.Response.forEach((element, index) => {
          this.futureExpiryArray.push(res.Response[index].lExchangeScrip.sExpiry);
        });
        this.futureDataEvent.emit({
          futureData: this.futureData
        });
      }
      // else if (this.utilsService.isSessionExpired(res.Reason)) {
      //   if(this.sharedDataService.isSSO){
      //     this.utilsService.sessionExpireHandling()
      //     return
      //   }
      //   this.utilsService.error('Session Expired', "Please Login Again");
      //   this.utilsService.postFeatureCount();
      //   this.utilsService.clearLoginDetails();
      //   this.sharedDataService.userId = null;
      //   this.router.navigate(['auth/login']);
      // }
      else {
        this.utilsService.error('Error', "Something went wrong");
      }
    });
  }
  /**
   * Option data api for expiry and strikeprice List
   * @param token token of present  card selected in segmentToken
   * @param segmentId SegmentId of present  card selected in segmentToken
   */
  getOptionData(token, segmentId) {
    let optionPayload = {
      "nMarketSegmentId": Number(segmentId),
      "nToken": Number(token)
    };
    this.companyService.getOptionContractsData(optionPayload).subscribe(res => {
      if (res.Status == "Success" && res.Response) {
        this.optionTypeArray = ['CE', 'PE'];
        this.optionContractData = res.Response.lDictExpiryData;
        this.optionExpiryArray = Object.keys(res.Response.lDictExpiryData);
        this.optionExpiryArray.sort((date1, date2) => {
          if ((0,_assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date1, 'DDMMMYY').valueOf() > (0,_assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date2, 'DDMMMYY').valueOf()) return 1;else if ((0,_assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date1, 'DDMMMYY').isBefore((0,_assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date2, 'DDMMMYY'))) return -1;else return 0;
        });
        this.updateStrikePrice(this.optionType, this.optExpiryDate, this.strikePrice);
      } else if (res.Reason == 'Data not found.') {
        this.utilsService.error('Sorry', "Option does not exist for this scrip");
      } else {
        this.utilsService.error('Error', "Something went wrong");
      }
    });
  }
  /**
   * strike price list changes on option(ce/pe) and expiry changes
   * @param type option type
   * @param expiry Expiry date
   * @param price strike price
   */
  updateStrikePrice(type, expiry, price) {
    let selectedArray = this.optionContractData[expiry];
    this.strikePriceArray = [];
    if (type && expiry) {
      type == 'CE' ? this.strikePriceArray = Object.keys(selectedArray.lstCEList) : this.strikePriceArray = Object.keys(selectedArray.lstPEList);
      this.strikePriceArray.sort((item1, item2) => {
        return Number(item2) - Number(item1);
      });
    } else if (type) {
      this.optionExpiryArray = Object.keys(this.optionContractData);
      this.optionExpiryArray.sort((date1, date2) => {
        if ((0,_assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date1, 'DDMMMYY').valueOf() > (0,_assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date2, 'DDMMMYY').valueOf()) return 1;else if ((0,_assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date1, 'DDMMMYY').isBefore((0,_assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date2, 'DDMMMYY'))) return -1;else return 0;
      });
    }
  }
  /**
  * on option (ce/pe) change , other dropdown reset
  */
  onOptionChange() {
    this.strikePrice = '';
    this.optExpiryDate = '';
    this.strikePriceArray = [];
    this.optionExpiryArray = [];
    this.updateStrikePrice(this.optionType, this.optExpiryDate, this.strikePrice);
  }
  /**
  * on expiry of option changes, reset dropdown
  */
  onOptionExpiryChange() {
    this.strikePrice = '';
    this.updateStrikePrice(this.optionType, this.optExpiryDate, this.strikePrice);
  }
  /**
  *on instrument change (option/future) , show default card selection for future and options
  */
  onInstrumentchange() {
    if (this.scripInfo['SegmentId'] == 2) {
      this.onchangeFutOpt.emit({
        label: this.instrument
      });
    } else {
      if (this.instrument == "Options") {
        this.scripInfo.OT = 'CE';
        this.optExpiryDate = '';
        this.optionType = '';
        this.strikePrice = '';
        this.optionTypeArray = [];
        this.optionExpiryArray = [];
        this.strikePriceArray = [];
        this.optionFutureFilterForm.get('futExpiryDate').setValidators(null);
        this.optionFutureFilterForm.get('futExpiryDate').updateValueAndValidity();
        this.optionFutureFilterForm.get('optExpiryDate').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]);
        this.optionFutureFilterForm.get('optExpiryDate').updateValueAndValidity();
        this.optionFutureFilterForm.get('optionType').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]);
        this.optionFutureFilterForm.get('optionType').updateValueAndValidity();
        this.optionFutureFilterForm.get('strikePrice').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]);
        this.optionFutureFilterForm.get('strikePrice').updateValueAndValidity();
        this.getOptionData(this.scripInfo.Token, this.scripInfo.SegmentId);
      } else if (this.instrument == "Future") {
        this.scripInfo.OT = 'XX';
        this.futExpiryDate = '';
        this.getFutureData(this.scripInfo.Token, this.scripInfo.SegmentId);
        this.optionFutureFilterForm.get('futExpiryDate').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]);
        this.optionFutureFilterForm.get('futExpiryDate').updateValueAndValidity();
        this.optionFutureFilterForm.get('optExpiryDate').setValidators(null);
        this.optionFutureFilterForm.get('optExpiryDate').updateValueAndValidity();
        this.optionFutureFilterForm.get('optionType').setValidators(null);
        this.optionFutureFilterForm.get('optionType').updateValueAndValidity();
        this.optionFutureFilterForm.get('strikePrice').setValidators(null);
        this.optionFutureFilterForm.get('strikePrice').updateValueAndValidity();
      }
    }
  }
  /**
   *send changes on click button to segemnet token for changing LTP in selected card
   */
  onSubmit() {
    if (this.scripInfo.OT == "XX") {
      this.scripInfo.ExpiryDate = this.futExpiryDate;
      let newObj = this.futureData.filter(element => {
        return element.lExchangeScrip.sExpiry == this.futExpiryDate;
      });
      if (newObj.length > 0) {
        this.scripInfo.Token = newObj[0].lExchangeScrip.Token;
        this.scripInfo.SecDesc = newObj[0].lExchangeScrip.SecDesc;
        this.scripInfo.SecName = newObj[0].lExchangeScrip.SecName;
      }
    } else if (this.scripInfo.OT == "CE" || this.scripInfo.OT == "PE") {
      let type = this.optionType == 'CE' ? 'lstCEList' : 'lstPEList';
      let newOptObj = this.optionContractData[this.optExpiryDate][type][this.strikePrice];
      this.scripInfo.ExpiryDate = this.optExpiryDate;
      this.scripInfo.StrikePrice = this.strikePrice;
      this.scripInfo.Token = newOptObj.Token;
      this.scripInfo.SecDesc = newOptObj.SecDesc || this.scripInfo.SecDesc;
      this.scripInfo.SecName = newOptObj.SecName || this.scripInfo.SecName;
      this.scripInfo.OT = this.optionType == 'CE' ? 'CE' : 'PE';
    }
    this.onchangeFutOpt.emit({
      label: this.scripInfo
    });
  }
  /**
  * Updated dropdown selected index
  */
  selectCompleterUpdateSelectedIndex() {
    if (this.instrumentArray) {
      let index = this.instrumentArray.indexOf(this.instrument);
      this.instrumentIndex = index == -1 ? 0 : index;
    }
    if (this.futureExpiryArray) {
      let index = this.futureExpiryArray.indexOf(this.futExpiryDate);
      this.futExpiryDateIndex = index == -1 ? 0 : index;
    }
    if (this.optionTypeArray) {
      let index = this.optionTypeArray.indexOf(this.optionType);
      this.optionTypeIndex = index == -1 ? 0 : index;
    }
    if (this.optionExpiryArray) {
      let index = this.optionExpiryArray.indexOf(this.optExpiryDate);
      this.optExpiryDateIndex = index == -1 ? 0 : index;
    }
    if (this.strikePriceArray) {
      let tempStrike = (this.strikePrice || "").toString();
      let index = this.strikePriceArray.indexOf(tempStrike);
      this.strikePriceIndex = index == -1 ? 0 : index;
    }
  }
  /**
  * Event Callback for focus on dropdown
  * @param index dropdown index
  * @param el Element
  * @param selectedIndex selected option index
  * @param event Event Object
  */
  selectCompleterDropDownFocus(index, el, selectedIndex, event) {
    this.showHideArray[index] = true;
    setTimeout(() => {
      el.focus();
      setTimeout(() => {
        this.selectCompleterScrollToElement(selectedIndex || this.strikePriceIndex, event);
      }, 200);
    }, 200);
    this.selectCompleterUpdateSelectedIndex();
  }
  /**
  * Event Callback for blur on dropdown
  * @param index dropdown index
  * @param searchInput Element
  */
  selectCompleterDropDownFocusOut(index, searchInput) {
    setTimeout(() => {
      searchInput.value = '';
      this.showHideArray[index] = false;
    }, 200);
  }
  /**
  * Event Callback for selecting item from dropdown
  * @param index dropdown index
  * @param selectedIndex index of selected item
  * @param value value of selected item
  */
  selectCompleterSelectFromDropdown(index, selectedIndex, value) {
    if (selectedIndex > -1) {
      if (index == 0) {
        this.instrument = value;
        this.onInstrumentchange();
      } else if (index == 1) {
        this.futExpiryDate = value;
      } else if (index == 2) {
        this.optionType = value;
        this.onOptionChange();
      } else if (index == 3) {
        this.optExpiryDate = value;
        this.onOptionExpiryChange();
      } else if (index == 4) {
        this.strikePriceIndex = selectedIndex;
        this.strikePrice = value;
      }
    }
  }
  /**
  * Scroll to Element in dropdown
  * @param selectedIndex index of selected item
  * @param event Event Object
  */
  selectCompleterScrollToElement(selectedIndex, event) {
    let parentElement = event.target.parentElement;
    selectedIndex ? parentElement.querySelector('.list-wrapper').scrollTop = 30 * selectedIndex : parentElement.querySelector('.list-wrapper').scrollTop = 0;
  }
  /**
  * Filter List on keyup
  * @param event Event Object
  * @param index index of dropdown
  * @param selectedIndex index of selected item
  * @param filterArray selected dropdown array
  * @param searchInput input element
  */
  selectCompleterKeyupFilter(event, index, selectedIndex, filterArray, searchInput) {
    let searchVal = event.target.value;
    if (event.keyCode == 38 || event.keyCode == 40) {
      if (event.keyCode == 38) {
        selectedIndex = selectedIndex > 0 ? --selectedIndex : 0;
      } else {
        selectedIndex = selectedIndex < filterArray.length - 1 ? ++selectedIndex : filterArray.length - 1;
      }
    } else if (event.keyCode == 13) {
      this.selectCompleterSelectFromDropdown(index, selectedIndex, filterArray[selectedIndex]);
      this.selectCompleterDropDownFocusOut(index, searchInput);
    } else if (event.keyCode == 27) {
      this.selectCompleterDropDownFocusOut(index, searchInput);
    } else {
      if (searchVal) {
        let re = new RegExp('^' + searchVal.toLowerCase());
        selectedIndex = filterArray.findIndex(item => re.test(item.toLowerCase()));
      }
    }
    this.selectCompleterScrollToElement(selectedIndex, event);
    if (index == 0) {
      this.instrumentIndex = selectedIndex;
    } else if (index == 1) {
      this.futExpiryDateIndex = selectedIndex;
    } else if (index == 2) {
      this.optionTypeIndex = selectedIndex;
    } else if (index == 3) {
      this.optExpiryDateIndex = selectedIndex;
    } else if (index == 4) {
      this.strikePriceIndex = selectedIndex;
    }
  }
  static {
    this.ctorParameters = () => [{
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormBuilder
    }, {
      type: _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_6__.UtilsService
    }, {
      type: _services_rest_company_service__WEBPACK_IMPORTED_MODULE_4__.CompanyService
    }, {
      type: _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__.SharedDataService
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
    }];
  }
  static {
    this.propDecorators = {
      scripInfo: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input,
        args: ['scripInfo']
      }],
      mappedTokens: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input,
        args: ['mappedTokens']
      }],
      onchangeFutOpt: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
      }],
      futureDataEvent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
      }]
    };
  }
};
FutOptionComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-fut-option',
  template: _fut_option_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _pipes_segment_pipe__WEBPACK_IMPORTED_MODULE_2__.SegmentPipe],
  styles: [(_fut_option_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})
/** Fut option component class */, (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__metadata)("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormBuilder, _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_6__.UtilsService, _services_rest_company_service__WEBPACK_IMPORTED_MODULE_4__.CompanyService, _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__.SharedDataService, _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router])], FutOptionComponent);


/***/ }),

/***/ 22069:
/*!***************************************************************!*\
  !*** ./src/app/company-module/key-info/key-info.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KeyInfoComponent: () => (/* binding */ KeyInfoComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _key_info_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./key-info.component.html?ngResource */ 38695);
/* harmony import */ var _key_info_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./key-info.component.scss?ngResource */ 14179);
/* harmony import */ var _key_info_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_key_info_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var src_app_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/shared-data/shared-data.service */ 46013);
/* harmony import */ var _services_sockets_socket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/sockets/socket.service */ 6312);
/* harmony import */ var _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/utils/utils.service */ 89893);
/* harmony import */ var _pipes_value_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pipes/value.pipe */ 50615);
/* harmony import */ var _pipes_condense_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pipes/condense.pipe */ 82203);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _pipes_segment_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/segment.pipe */ 39995);











/** KeyInfo view and scss linking */
let KeyInfoComponent = class KeyInfoComponent {
  /**
   
      * Dependency injection and varaible intialization
   
      * @param utilsService for processing of data
   
      * @param socketService for socket subscription
   
      */
  constructor(utilsService, socketService, shared) {
    this.utilsService = utilsService;
    this.socketService = socketService;
    this.shared = shared;
    this.splitResponse = [];
    this.keyInfoData = {};
    this.scripInfo = {};
    this.b5Data = {};
  }
  /** on page load */
  ngOnInit() {}
  /**
   
      * listen to scripDetails response and best five/keyInfo emitted from segmentToken,process data for keyinfo(ohlc)
   
      * @param changes scripDetails response and best five/keyInfo emitted from segmentToken
   
      */
  ngOnChanges(changes) {
    if (changes["best5Response"] && changes["best5Response"].currentValue) {
      this.best5Response = changes["best5Response"].currentValue;
      if (this.best5Response) {
        this.splitResponse = [];
        let string = this.best5Response.strB5Response.replace(/\$/g, "|");
        this.splitResponse = this.utilsService.pipeToObject(string);
        let priceDivisor = this.utilsService.getDefaultPriceDivisor(this.splitResponse[0][1], this.splitResponse[0][7]);
        this.keyInfoData.SegmentId = this.splitResponse[0][1];
        this.keyInfoData.Token = this.splitResponse[0][7];
        this.scripInfo = this.scripInfo ? this.scripInfo : {};
        this.b5Data = this.scripInfo;
        this.keyInfoData.SegmentId == 1 || this.keyInfoData.SegmentId == 3 ? this.keyInfoData.isContractInfo = false : this.keyInfoData.isContractInfo = true;
        this.keyInfoData.mCap = this.scripInfo["MarketCap"] * (this.splitResponse[0]["8"] / priceDivisor);
        this.keyInfoData.oic = this.splitResponse[0]["88"] - this.scripInfo["PrevOI"];
        let prevClose = (this.best5Response.PrevClose || this.splitResponse[0]["76"]) / priceDivisor;
        this.keyInfoData.openPrice = this.splitResponse[0]["8"] == 0 ? prevClose : this.splitResponse[0]["75"] / priceDivisor; // if ltp == 0 then show prevClose in open (24/05/2021)
        this.keyInfoData.closePrice = (this.best5Response.PrevClose || this.splitResponse[0]["76"]) / priceDivisor; // added this.splitResponse[0]["76"] to solve prevCLose zero issue in prelogin (07/04/2021)
        this.keyInfoData.high = this.splitResponse[0]["8"] == 0 ? prevClose : this.splitResponse[0]["77"] / priceDivisor; // if ltp == 0 then show prevClose in high (24/05/2021)
        this.keyInfoData.low = this.splitResponse[0]["8"] == 0 ? prevClose : this.splitResponse[0]["78"] / priceDivisor; // if ltp == 0 then show prevClose in low (24/05/2021)
        this.keyInfoData.wKHigh = this.splitResponse[0]["93"] / priceDivisor;
        this.keyInfoData.apiWkHigh = this.keyInfoData.wKHigh;
        this.keyInfoData.WkLow = this.splitResponse[0]["94"] / priceDivisor;
        this.keyInfoData.apiWkLow = this.keyInfoData.WkLow;
        this.keyInfoData.oi = this.splitResponse[0][88];
        this.keyInfoData.oicPercent = Number(this.keyInfoData.oic) / Number(this.scripInfo["PrevOI"] || 1) * 100;
        this.keyInfoData.LTQ = this.splitResponse[0]["9"];
        this.keyInfoData.LTP = this.splitResponse[0]["8"] == 0 ? prevClose : this.splitResponse[0]["8"] / priceDivisor; // if LTP == 0 then show prevClose (10/05/2021)
        this.keyInfoData.atp = this.splitResponse[0][80] / priceDivisor;
        this.keyInfoData.LTT = this.utilsService.changeCurrentDateFormat(this.splitResponse[0][73], "YYYY-MM-DD HHmmss", "DD-MM-YYYY HH:mm:ss");
        this.keyInfoData.LUT = this.utilsService.changeCurrentDateFormat(this.splitResponse[0][74], "YYYY-MM-DD HHmmss", "DD-MM-YYYY HH:mm:ss");
        this.keyInfoData.volume = parseInt(this.splitResponse[0]["79"]);
        this.keyInfoData.value = this.keyInfoData.atp * this.keyInfoData.volume;
        if (this.keyInfoData.SegmentId == 13 || this.keyInfoData.SegmentId == 38) {
          this.keyInfoData.value = this.keyInfoData.value * (this.scripInfo["MarketLot"] || 1);
        } else if (this.keyInfoData.SegmentId == 5) {
          this.keyInfoData.value = this.keyInfoData.value * (this.scripInfo["MarketLot"] || 1) * (this.scripInfo["PriceNum"] / this.scripInfo["PriceDen"]) * (this.scripInfo["GenNum"] / this.scripInfo["GenDen"]);
        } else if (this.keyInfoData.SegmentId == 7) {
          this.keyInfoData.value = this.keyInfoData.value * (this.scripInfo["PriceNum"] / this.scripInfo["PriceDen"]);
        }
        this.getSocketResponse();
      }
    }
    if (changes["scripInfo"] && changes["scripInfo"].currentValue) {
      // console.log("changes['scripInfo'].currentValue",changes['scripInfo'].currentValue)
      this.scripInfo = changes["scripInfo"].currentValue;
      this.b5Data = this.scripInfo;
      //this.keyInfoData.oic = this.splitResponse[0]["88"] - this.scripInfo["PrevOI"];
      this.keyInfoData.oicPercent = Number(this.keyInfoData.oic) / Number(this.scripInfo["PrevOI"] || 1) * 100;
      this.keyInfoData.value = this.keyInfoData.atp * this.keyInfoData.volume;
      if (this.keyInfoData.SegmentId == 13 || this.keyInfoData.SegmentId == 38) {
        this.keyInfoData.value = this.keyInfoData.value * (this.scripInfo["MarketLot"] || 1);
      } else if (this.keyInfoData.SegmentId == 5) {
        this.keyInfoData.value = this.keyInfoData.value * (this.scripInfo["MarketLot"] || 1) * (this.scripInfo["PriceNum"] / this.scripInfo["PriceDen"]) * (this.scripInfo["GenNum"] / this.scripInfo["GenDen"]);
      } else if (this.keyInfoData.SegmentId == 7) {
        this.keyInfoData.value = this.keyInfoData.value * (this.scripInfo["PriceNum"] / this.scripInfo["PriceDen"]);
      }
    }
    if (this.scripInfo && this.scripInfo.ContractEndDate && this.scripInfo.ContractStartDate) {
      this.keyInfoData.contractStart = new Date(this.scripInfo.ContractStartDate);
      this.keyInfoData.contractEnd = new Date(this.scripInfo.ContractEndDate);
    }
    if (this.scripInfo && this.scripInfo.DeliveryStartDate && this.scripInfo.DeliveryEndDate) {
      this.keyInfoData.DeliveryStartDate = new Date(this.scripInfo.DeliveryStartDate);
      this.keyInfoData.DeliveryEndDate = new Date(this.scripInfo.DeliveryEndDate);
    }
    if (this.scripInfo && this.scripInfo.MaturityDate) {
      this.keyInfoData.MaturityDate = new Date(this.scripInfo.MaturityDate);
    }
  }
  /**
   
   * Listen to Socket subscribed in segment token for bestFive
   
   */
  getSocketResponse() {
    this.socketService.broadcaster.on("best5").subscribe(res => {
      res = res.replace(/\$/g, "|");
      let responseObject = this.utilsService.pipeToObject(res);
      let priceDivisor = this.utilsService.getDefaultPriceDivisor(responseObject[0][1], responseObject[0][7]);
      if (this.scripInfo && this.keyInfoData && this.scripInfo["Token"] == responseObject[0]["7"] && this.utilsService.isUpdatedData(this.keyInfoData, responseObject[0])) {
        let dpr = responseObject[0]["380"];
        if (dpr) {
          let splitDpr = dpr.split("-");
          if (Number(splitDpr[0])) this.best5Response['LowPriceRange'] = Number(splitDpr[0]);
          if (Number(splitDpr[1])) this.best5Response['HighPriceRange'] = Number(splitDpr[1]);
        }
        this.keyInfoData.SegmentId = responseObject[0][1];
        this.b5Data = this.utilsService.processBest5(res, this.scripInfo);
        // console.log(this.b5Data,"b5Datab5Data")
        this.keyInfoData.Token = responseObject[0][7];
        this.keyInfoData.mCap = this.scripInfo["MarketCap"] * (responseObject[0]["8"] / priceDivisor);
        this.scripInfo = this.scripInfo ? this.scripInfo : {};
        this.keyInfoData.SegmentId == 1 || this.keyInfoData.SegmentId == 3 ? this.keyInfoData.isContractInfo = false : this.keyInfoData.isContractInfo = true;
        if (this.keyInfoData.SegmentId == 13 || this.keyInfoData.SegmentId == 38) {
          this.keyInfoData.value = this.keyInfoData.volume * this.keyInfoData.atp * (this.scripInfo["MarketLot"] || 1);
        } else if (this.keyInfoData.SegmentId == 5) {
          this.keyInfoData.value = this.keyInfoData.volume * this.keyInfoData.atp * (this.scripInfo["MarketLot"] || 1) * (this.scripInfo["PriceNum"] / this.scripInfo["PriceDen"]) * (this.scripInfo["GenNum"] / this.scripInfo["GenDen"]);
        } else if (this.keyInfoData.SegmentId == 7) {
          this.keyInfoData.value = this.keyInfoData.volume * this.keyInfoData.atp * (this.scripInfo["PriceNum"] / this.scripInfo["PriceDen"]);
        } else {
          this.keyInfoData.value = this.keyInfoData.volume * this.keyInfoData.atp;
        }
        this.keyInfoData.oic = responseObject[0]["88"] - this.scripInfo["PrevOI"];
        let prevClose = (this.best5Response.PrevClose || responseObject[0]["76"]) / priceDivisor;
        this.keyInfoData.openPrice = responseObject[0]["8"] == 0 ? prevClose : responseObject[0]["75"] / priceDivisor; //if ltp = 0 then show prevclose (24/05/2021)
        this.keyInfoData.closePrice = (this.best5Response.PrevClose || responseObject[0]["76"]) / priceDivisor; // added this.splitResponse[0]["76"] to solve prevCLose zero issue in prelogin (07/04/2021)
        this.keyInfoData.wKHigh = responseObject[0]["77"] / priceDivisor == responseObject[0]["93"] / priceDivisor && responseObject[0]["93"] / priceDivisor > this.keyInfoData.apiWkHigh ? responseObject[0]["93"] / priceDivisor : this.keyInfoData.apiWkHigh;
        this.keyInfoData.WkLow = responseObject[0]["78"] / priceDivisor == responseObject[0]["94"] / priceDivisor && responseObject[0]["94"] / priceDivisor < this.keyInfoData.apiWkLow ? responseObject[0]["94"] / priceDivisor : this.keyInfoData.apiWkLow;
        this.keyInfoData.high = responseObject[0]["8"] == 0 ? prevClose : responseObject[0]["77"] / priceDivisor; //if ltp = 0 then show prevclose (24/05/2021)
        this.keyInfoData.low = responseObject[0]["8"] == 0 ? prevClose : responseObject[0]["78"] / priceDivisor; //if ltp = 0 then show prevclose (24/05/2021)
        this.keyInfoData.oi = responseObject[0][88];
        this.keyInfoData.oicPercent = Number(this.keyInfoData.oic) / Number(this.scripInfo["PrevOI"]) * 100;
        this.keyInfoData.LTQ = responseObject[0]["9"];
        this.keyInfoData.LTP = responseObject[0]["8"] == 0 ? (this.best5Response.PrevClose || responseObject[0]["76"]) / priceDivisor : responseObject[0]["8"] / priceDivisor; // if LTP == 0 then show prevClose (10/05/2021)
        this.keyInfoData.LTT = this.utilsService.changeCurrentDateFormat(responseObject[0][73], "YYYY-MM-DD HHmmss", "DD-MM-YYYY HH:mm:ss");
        this.keyInfoData.LUT = this.utilsService.changeCurrentDateFormat(responseObject[0][74], "YYYY-MM-DD HHmmss", "DD-MM-YYYY HH:mm:ss");
        this.keyInfoData.atp = responseObject[0][80] / priceDivisor;
        this.keyInfoData.volume = parseInt(responseObject[0]["79"]);
      }
    });
  }
  static {
    this.ctorParameters = () => [{
      type: _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_4__.UtilsService
    }, {
      type: _services_sockets_socket_service__WEBPACK_IMPORTED_MODULE_3__.SocketService
    }, {
      type: src_app_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_2__.SharedDataService
    }];
  }
  static {
    this.propDecorators = {
      best5Response: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input,
        args: ["best5Response"]
      }],
      scripInfo: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input,
        args: ["scripInfo"]
      }]
    };
  }
};
KeyInfoComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: "app-key-info",
  template: _key_info_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe, _pipes_segment_pipe__WEBPACK_IMPORTED_MODULE_7__.SegmentPipe, _pipes_condense_pipe__WEBPACK_IMPORTED_MODULE_6__.CondensePipe, _pipes_value_pipe__WEBPACK_IMPORTED_MODULE_5__.ValuePipe],
  styles: [(_key_info_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})
/** keyinfo component class */, (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:paramtypes", [_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_4__.UtilsService, _services_sockets_socket_service__WEBPACK_IMPORTED_MODULE_3__.SocketService, src_app_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_2__.SharedDataService])], KeyInfoComponent);


/***/ }),

/***/ 3971:
/*!*********************************************************************************!*\
  !*** ./src/app/company-module/news-announcement/news-announcement.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NewsAnnouncementComponent: () => (/* binding */ NewsAnnouncementComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _news_announcement_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./news-announcement.component.html?ngResource */ 62749);
/* harmony import */ var _news_announcement_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./news-announcement.component.scss?ngResource */ 11745);
/* harmony import */ var _news_announcement_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_news_announcement_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/libs/esm-moment.min.js */ 29483);
/* harmony import */ var _directives_show_focus_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../directives/show-focus.directive */ 57862);
/* harmony import */ var _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/shared-data/shared-data.service */ 46013);
/* harmony import */ var _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/utils/utils.service */ 89893);
/* harmony import */ var _services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../services/analytics/analytics.service */ 50213);
/* harmony import */ var _services_rest_company_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../services/rest/company.service */ 12744);





/** Import Moment JS Library*/
// var moment: any = require();






/** news and announcemengt Component view and scss linking  */
let NewsAnnouncementComponent = class NewsAnnouncementComponent {
  /**
   * Dependency injection and varaible intialization
   * @param restService for api call
   * @param shared for data shared between two components
   * @param utilsService for data manipulation
   * @param renderer for popup
   * @param activeRoute for getting the present Route
   * @param router for navigating to different component
   * @param AnalyticsService for analytics (ga)
   */
  constructor(restService, shared, utilsService, renderer, activeRoute, analyticsService, router) {
    this.restService = restService;
    this.shared = shared;
    this.utilsService = utilsService;
    this.renderer = renderer;
    this.activeRoute = activeRoute;
    this.analyticsService = analyticsService;
    this.router = router;
    /**
     * api response of news
     */
    this.newsData = [];
    /**
     * api response of announcement api
     */
    this.announcementData = [];
    /**
     * present tab
     */
    this.activeTab = 1;
    /**
     * shows news popup
     */
    this.showNewsDetail = false;
    /** for analytics */
    this.analyticData = {};
    /**
       * api response of events api
       */
    this.eventsData = [];
    this.eventData = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
    this.newsModal = {};
  }
  /**
   * change in url is checked, accordingly various parameters are changed
   */
  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      this.newsData = [];
      this.announcementData = [];
      this.newsModal = {};
      this.analyticData = {};
      this.analyticData["secName"] = params['companyName'];
      this.analyticData["segmentId"] = params['segment'];
      this.analyticData["Token"] = params['token'];
    });
    this.keyPressSubscription = this.utilsService.broadcastObservable('escapeKeyPressed').subscribe(() => {
      if (this.showNewsDetail) {
        this.closeDetailNews();
      }
    });
  }
  /**
   * Life Cycle Hook for Destruction
   */
  ngOnDestroy() {
    if (this.keyPressSubscription) this.keyPressSubscription.unsubscribe();
  }
  /**
   * listen to scripDetails response emitted from segmentToken and call News Api
   * @param changes scripDetails response emitted from segmentToken
   */
  ngOnChanges(changes) {
    if (changes['scripInfo'] && changes['scripInfo'].currentValue) {
      this.scripInfo = changes['scripInfo'].currentValue;
      if ((this.scripInfo["SegmentId"] == 1 || this.scripInfo["SegmentId"] == 3) && this.newsData.length == 0) {
        //console.log("THISC ALLED")
        this.activeTab == 1 ? this.getNews(this.scripInfo["Token"], this.scripInfo["SegmentId"], true) : this.getAnnouncement(this.scripInfo["Token"], this.scripInfo["SegmentId"], true);
      }
    }
  }
  /**
   * News Api, Process the Response
   * @param token token of present card selected in segmentToken
   * @param segment segmentToken of present card selected in segmentToken
   */
  getNews(token, segment, flag) {
    if (flag) {
      this.getEventsData(token, segment);
    }
    // let data = {
    //   "nMarketSegmentId": segment,
    //   "nToken": token,
    //   "StartPos": 0,
    //   "NoOfRecords": 50
    // }
    let data = {
      "userId": this.utilsService.getUserId() || '',
      "tokenseg": segment + '@' + token,
      "pageno": 1,
      "pagesize": 50,
      "sessionid": this.utilsService.getSessionId() || ''
    };
    this.restService.getScripNews(data).subscribe(res => {
      // if (res.Status === "Success" && res.Response) {
      //   this.newsData = [];
      //   for (var i = 0; i < res.Response.length; i++) {
      //     res.Response[i]["NewsDate"] = this.utilsService.changeCurrentDateFormat(res.Response[i]["NewsDate"], 'DD/MM/YYYY hh:mm:ss A', 'DD MMM YYYY HH:mm:ss');
      //     this.newsData.push(res.Response[i]);
      //   }
      // }
      // if (res.Reason == 'Data not found.') {
      //   this.newsData = [];
      // }
      // else if (this.utilsService.isSessionExpired(res.Reason)) {
      //   this.utilsService.error('Session Expired', "Please Login Again");
      //   this.utilsService.postFeatureCount();
      //   this.utilsService.clearLoginDetails();
      //   this.shared.userId = null;
      //   this.router.navigate(['auth/login']);
      // }
      if (res && res.newsDetails && res.newsDetails[segment + '@' + token]) {
        this.newsData = res.newsDetails[segment + '@' + token];
      }
      if (res.Reason == 'Data not found.') {
        this.newsData = [];
      }
      // else if (this.utilsService.isSessionExpired(res.Reason)) {
      //   if(this.shared.isSSO){
      //     this.utilsService.sessionExpireHandling()
      //     return
      //   }
      //   this.utilsService.error('Session Expired', "Please Login Again");
      //   this.utilsService.postFeatureCount();
      //   this.utilsService.clearLoginDetails();
      //   this.shared.userId = null;
      //   this.router.navigate(['auth/login']);
      // }
    });
  }
  /**
   * Announcement Api, Process the Response
   * @param token token of present card selected in segmentToken
   * @param segment segmentToken of present card selected in segmentToken
   */
  getAnnouncement(token, segment, flag) {
    if (flag) {
      this.getEventsData(token, segment);
    }
    let data = {
      "nMarketSegmentId": segment,
      "nToken": token,
      "StartPos": 0,
      "NoOfRecords": 50
    };
    this.restService.getScripAnnouncements(data).subscribe(res => {
      if (res.Status === "Success" && res.Response) {
        for (var i = 0; i < res.Response.length; i++) {
          res.Response[i]["NewsDate"] = this.utilsService.changeCurrentDateFormat(res.Response[i]["NewsDate"], 'DD/MM/YYYY hh:mm:ss A', 'DD MMM YYYY HH:mm:ss');
          this.announcementData.push(res.Response[i]);
        }
      } else if (res.Reason == 'Data not found.') {
        this.announcementData = [];
        // } else if (this.utilsService.isSessionExpired(res.Reason)) {
        //   if(this.shared.isSSO){
        //     this.utilsService.sessionExpireHandling()
        //     return
        //   }
        //   this.utilsService.error('Session Expired', "Please Login Again");
        //   this.utilsService.postFeatureCount();
        //   this.utilsService.clearLoginDetails();
        //   this.shared.userId = null;
        //   this.router.navigate(['auth/login']);
      }
    });
  }
  getEventsData(token, segment) {
    console.log("");
    let categories = [{
      key: 'lBoardMeetings',
      value: 'Board Meeting',
      dateKey: 'StartDate',
      checked: true
    }, {
      key: 'lAGMEGM',
      value: 'AGM/EGM',
      dateKey: 'Date',
      checked: true
    }, {
      key: 'lBonus',
      value: 'Bonus',
      dateKey: 'ExBonus',
      checked: true
    }, {
      key: 'lDividend',
      value: 'Dividends',
      dateKey: 'ExDividendDate',
      checked: true
    }, {
      key: 'lRights',
      value: 'Rights',
      dateKey: 'ExRightsDate',
      checked: true
    }, {
      key: 'lSplits',
      value: 'Splits',
      dateKey: 'SplitDate',
      checked: true
    }];
    let request = {
      "SegmentID": segment,
      "Token": token,
      "MonthYear": "",
      "Purpose": "",
      "FromDate": new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_2__["default"]().subtract(7, 'days'),
      "ToDate": new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_2__["default"]().add(7, 'days')
    };
    let dateRange = {
      min: new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_2__["default"]().subtract(7, 'days'),
      max: new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_2__["default"]().add(7, 'days')
    };
    this.eventsData = [];
    this.restService.getEventCalendar(request).subscribe(res => {
      if (res.Status === "Success" && res.Response) {
        res.Response.forEach((event, index) => {
          if (new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_2__["default"](event.EventDate).isSameOrAfter(dateRange.min) && new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_2__["default"](event.EventDate).isSameOrBefore(dateRange.max) || event.lDividend && new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_2__["default"]((event.lDividend || {}).ExDividendDate).isSameOrAfter(dateRange.min) && new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_2__["default"]((event.lDividend || {}).ExDividendDate).isSameOrBefore(dateRange.max) || event.lAGMEGM && new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_2__["default"]((event.lAGMEGM || {}).Date).isSameOrAfter(dateRange.min) && new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_2__["default"]((event.lAGMEGM || {}).Date).isSameOrBefore(dateRange.max) || event.lSplits && new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_2__["default"]((event.lSplits || {}).SplitDate).isSameOrAfter(dateRange.min) && new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_2__["default"]((event.lSplits || {}).SplitDate).isSameOrBefore(dateRange.max) || event.lBonus && new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_2__["default"]((event.lBonus || {}).ExBonus).isSameOrAfter(dateRange.min) && new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_2__["default"]((event.lBonus || {}).ExBonus).isSameOrBefore(dateRange.max)) {
            categories.forEach((eventType, eventIndex) => {
              if (event[eventType.key]) {
                let finalEvent = {
                  ...event,
                  ...event[eventType.key]
                };
                finalEvent.momentDate = new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_2__["default"](finalEvent[eventType.dateKey]);
                finalEvent[eventType.dateKey] = finalEvent.momentDate.format('DD-MMM-YYYY');
                finalEvent.EventDate = new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_2__["default"](finalEvent.EventDate).format('DD-MMM-YYYY');
                finalEvent.RecordDate ? finalEvent.RecordDate = new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_2__["default"](finalEvent.RecordDate).format('DD-MMM-YYYY') : '';
                finalEvent.AnnouncementDate ? finalEvent.AnnouncementDate = new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_2__["default"](finalEvent.AnnouncementDate).format('DD-MMM-YYYY') : '';
                delete finalEvent[eventType.key];
                finalEvent.eventType = eventType.value;
                this.eventsData.push(finalEvent);
              }
            });
          }
        });
        this.eventsData.sort((item1, item2) => {
          return item2.momentDate.valueOf() - item1.momentDate.valueOf();
        });
        this.eventRef.isEventAvailable = this.eventsData.length > 0;
        this.eventData.emit(this.eventsData);
      }
    }, err => {});
  }
  /**
   * api call on tab change handled
   * @param count present tab number
   * @param keyName active tab mapping name
   */
  activateFilter(count, keyName) {
    this.activeTab = count;
    this.analyticData['tabName'] = this.activeTab == 1 ? 'news' : 'Announcement';
    this.analyticsService.newsAnnoucementTabChange(this.analyticData);
    if (this[keyName] && this[keyName].length == 0 || !this[keyName]) {
      //  console.log("THISC ALLED 2")
      keyName == 'newsData' ? this.getNews(this.scripInfo["Token"], this.scripInfo["SegmentId"]) : keyName == 'eventsData' ? this.getEventsData(this.scripInfo["Token"], this.scripInfo["SegmentId"]) : this.getAnnouncement(this.scripInfo["Token"], this.scripInfo["SegmentId"]);
    }
  }
  /**
   * opens news popup to show detail news
   * @param news news details
   */
  OpenDetailNews(news) {
    // this.newsModal = news;
    // this.showNewsDetail = true;
    // this.renderer.setStyle(document.body, 'overflow', 'hidden');
    //this.renderer.addClass(document.body,'modal_open');
    if (news.url) window.open(news.url);
  }
  openAnnouncementNews(news) {
    this.newsModal = news;
    this.showNewsDetail = true;
    this.renderer.setStyle(document.body, 'overflow', 'hidden');
    this.renderer.addClass(document.body, 'modal_open');
  }
  /**
  * close news popup
  */
  closeDetailNews() {
    this.showNewsDetail = false;
    this.renderer.setStyle(document.body, 'overflow', 'auto');
    //this.renderer.removeClass(document.body,'modal_open');
  }
  static {
    this.ctorParameters = () => [{
      type: _services_rest_company_service__WEBPACK_IMPORTED_MODULE_7__.CompanyService
    }, {
      type: _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__.SharedDataService
    }, {
      type: _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_5__.UtilsService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Renderer2
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute
    }, {
      type: _services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_6__.AnalyticsService
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
    }];
  }
  static {
    this.propDecorators = {
      eventData: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Output,
        args: ["eventData"]
      }],
      scripInfo: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input,
        args: ['scripInfo']
      }],
      eventRef: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input,
        args: ['IsEventAvailable']
      }]
    };
  }
};
NewsAnnouncementComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-news-announcement',
  template: _news_announcement_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  imports: [_directives_show_focus_directive__WEBPACK_IMPORTED_MODULE_3__.ShowFocusDirective],
  styles: [(_news_announcement_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})
/**News Announcement component class */, (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__metadata)("design:paramtypes", [_services_rest_company_service__WEBPACK_IMPORTED_MODULE_7__.CompanyService, _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__.SharedDataService, _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_5__.UtilsService, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Renderer2, _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute, _services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_6__.AnalyticsService, _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router])], NewsAnnouncementComponent);


/***/ }),

/***/ 63119:
/*!*****************************************************************************!*\
  !*** ./src/app/company-module/overview-navbar/overview-navbar.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OverviewNavbarComponent: () => (/* binding */ OverviewNavbarComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _overview_navbar_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./overview-navbar.component.html?ngResource */ 2729);
/* harmony import */ var _overview_navbar_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./overview-navbar.component.scss?ngResource */ 5389);
/* harmony import */ var _overview_navbar_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_overview_navbar_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 1807);
/* harmony import */ var src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/utils/utils.service */ 89893);
/* harmony import */ var _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../assets/libs/esm-moment.min.js */ 29483);
/* harmony import */ var _services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/analytics/analytics.service */ 50213);
/* harmony import */ var _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/shared-data/shared-data.service */ 46013);
/* harmony import */ var _directives_scroll_to_element_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../directives/scroll-to-element.directive */ 41202);







/** Import Moment JS Library*/
// var moment: any = require();




/** navbar view and scss linking */
let OverviewNavbarComponent = class OverviewNavbarComponent {
  /** Dependency injection and varaible intialization */
  constructor(activatedRoute, utils, analyticsService, shared) {
    this.activatedRoute = activatedRoute;
    this.utils = utils;
    this.analyticsService = analyticsService;
    this.shared = shared;
    /**
     * analytics data for tab selection
     */
    this.analyticData = {};
    this.selectedTab = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    /**  isShowNewIcon for mojo analysis */
    this.isShowNewIcon = false;
    this.activeTab = 1;
    this.mojoAnalysisURL = "";
    this.selectedTab.emit(false);
  }
  /** on page load */
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.analyticData = {};
      this.analyticData["secName"] = params['companyName'];
      this.analyticData["segmentId"] = params['segment'];
      this.analyticData["Token"] = params['token'];
      this.activeTab = 1;
      this.selectedTab.emit(false);
      this.setMojoURL();
    });
    this.newTagDateLogic();
  }
  /**
   * On tab change add class to clicked tab
   * @param index presnt tab selected number
   */
  activateFilter(index) {
    this.activeTab = index;
    let tabName = this.activeTab == 1 ? 'OverView' : this.activeTab == 2 ? 'technical' : this.activeTab == 3 ? 'ratio' : this.activeTab == 4 ? 'peer' : this.activeTab == 5 ? 'fundIntrest' : this.activeTab == 6 ? 'financial' : this.activeTab == 7 ? 'details' : 'Mojo Analysis';
    this.analyticData["activeTab"] = tabName;
    this.analyticsService.tabSelectionCompanyPage(this.analyticData);
    if (this.activeTab != 1) {
      this.selectedTab.emit(true);
    } else {
      this.selectedTab.emit(false);
    }
    if (this.activeTab == 8) {
      // market mojo (25/08/2021)
      let sid = this.scripInfo.SegmentId == 1 ? this.scripInfo.Symbol.toLowerCase() : this.scripInfo.Token;
      let segment = this.scripInfo.SegmentId == 1 ? 'NSE' : 'BSE';
      let url = 'https://market.choiceindia.com/choice/stocks?sid=' + sid + '&exchange=' + segment + '&utm_source=choice_finx_web&utm_medium=choicefinx&utm_campaign=choice_finx_mojo_analysis';
      // ga('send', 'event', 'visitedMarketMojo', 'click', 'Markets Mojo', this.scripInfo.SegmentId);
      this.analyticsService.emitEvent("visitedMarketMojo", this.utils.getUserId() || 'guest', 'Stock Analysis', 1);
      this.utils.setTrackMoeEvent("visitedMarketMojo", {
        "SegmentId": this.scripInfo.SegmentId,
        "source": "Web"
      });
      this.mojoWindow = window.open(url, '_blank');
      if (this.utils.checkIfPopupsEnableOrNot(this.mojoWindow)) {
        this.mojoWindow = window.open(url, "_self");
      }
      this.setMojoTimer();
    }
    this.utils.setTrackMoeEvent(index === 1 ? 'visitedCompanyDetail' : index === 2 ? 'visitedTechnical' : index === 4 ? 'visitedPeers' : index === 5 ? 'visitedNewsAndUpdates' : index === 7 ? 'visitedDetails' : index === 8 ? 'visitedMarketMojo' : 'visitedCompanyDetailTab', {
      "User_ID": this.utils.getUserId() || 'guest',
      "IP": this.shared.IPAddress,
      "segment": this.scripInfo.SegmentId
    });
    this.analyticsService.emitEvent(index === 1 ? 'visitedCompanyDetail' : index === 2 ? 'visitedTechnical' : index === 4 ? 'visitedPeers' : index === 5 ? 'visitedNewsAndUpdates' : index === 7 ? 'visitedDetails' : index === 8 ? 'visitedMarketMojo' : 'visitedCompanyDetailTab', this.utils.getUserId() || 'guest', JSON.stringify({
      "IP": this.shared.IPAddress
    }), 1);
  }
  /** to listen return url from CDSL portal (Added by reshmaC on 25/01/2021) */
  setMojoTimer() {
    let mojoSub;
    // 
    mojoSub = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.timer)(1000, 1000).subscribe(event => {
      try {
        if (!this.mojoWindow || this.mojoWindow.closed) {
          mojoSub.unsubscribe();
          this.mojoWindow = null;
        } else if (this.mojoWindow && this.mojoWindow.document.URL.indexOf('assets/success.html') > -1) {
          mojoSub.unsubscribe();
          this.mojoWindow.close();
          this.mojoWindow = null;
          this.utils.broadcast('broadcastBuySell', 1);
        }
      } catch (error) {
        mojoSub.unsubscribe();
        this.setMojoTimer();
      }
    });
  }
  setMojoURL() {
    this.mojoAnalysisURL = "";
    let sid = this.scripInfo.SegmentId == 1 ? this.scripInfo.Symbol.toLowerCase() : this.scripInfo.Token;
    let segment = this.scripInfo.SegmentId == 1 ? 'NSE' : 'BSE';
    this.mojoAnalysisURL = 'https://market.choiceindia.com/choice/stocks?sid=' + sid + '&exchange=' + segment + '&utm_source=choice_finx_web&utm_medium=choicefinx&utm_campaign=choice_finx_mojo_analysis';
  }
  /**
   * listen to scripDetails response emitted from segmentToken and arrowClicked variable from parent component(company)
   * @param changes scripDetails response emitted from segmentToken
   */
  ngOnChanges(changes) {
    if (changes['arrowClick'] && changes['arrowClick'].currentValue) {
      this.arrowClick = changes['arrowClick'].currentValue;
      if (this.arrowClick) {
        this.activeTab = 1;
      }
    }
    if (changes['reportListing'] && changes['reportListing'].currentValue) {
      this.reportListing = changes['reportListing'].currentValue;
    }
    if (changes['scripInfo'] && changes['scripInfo'].currentValue) {
      this.scripInfo = changes['scripInfo'].currentValue;
      // (window as any).Moengage.add_user_attribute("Segment", this.scripInfo.SegmentId);
    }
  }
  /** new tag date comparison logic (22/07/2021) */
  newTagDateLogic() {
    this.isShowNewIcon = false;
    let date = localStorage.getItem('newTagDateForMojo');
    if (!date) {
      let storeDate = new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_3__["default"]().add(30, 'days');
      localStorage.setItem('newTagDateForMojo', storeDate);
    }
    date = localStorage.getItem('newTagDateForMojo');
    if (date) {
      let today = new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
      if (today <= new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_3__["default"](date)) {
        this.isShowNewIcon = true;
      }
    }
  }
  static {
    this.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute
    }, {
      type: src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_2__.UtilsService
    }, {
      type: _services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_4__.AnalyticsService
    }, {
      type: _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__.SharedDataService
    }];
  }
  static {
    this.propDecorators = {
      selectedTab: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output,
        args: ['selectedTab']
      }],
      arrowClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input,
        args: ['arrowClick']
      }],
      reportListing: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input,
        args: ['reportListing']
      }],
      scripInfo: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input,
        args: ['scripInfo']
      }]
    };
  }
};
OverviewNavbarComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-overview-navbar',
  template: _overview_navbar_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  imports: [_directives_scroll_to_element_directive__WEBPACK_IMPORTED_MODULE_6__.ScrollToElementDirective],
  styles: [(_overview_navbar_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})
/**
 * OverviewNavbarComponent class defination
 */, (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute, src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_2__.UtilsService, _services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_4__.AnalyticsService, _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__.SharedDataService])], OverviewNavbarComponent);


/***/ }),

/***/ 23383:
/*!*******************************************************************************!*\
  !*** ./src/app/company-module/peer-comparision/peer-comparision.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PeerComparisionComponent: () => (/* binding */ PeerComparisionComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _peer_comparision_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./peer-comparision.component.html?ngResource */ 93577);
/* harmony import */ var _peer_comparision_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./peer-comparision.component.scss?ngResource */ 52845);
/* harmony import */ var _peer_comparision_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_peer_comparision_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var src_app_services_sockets_socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/sockets/socket.service */ 6312);
/* harmony import */ var _pipes_segment_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pipes/segment.pipe */ 39995);
/* harmony import */ var _pipes_value_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pipes/value.pipe */ 50615);
/* harmony import */ var _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/shared-data/shared-data.service */ 46013);
/* harmony import */ var _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/utils/utils.service */ 89893);
/* harmony import */ var _services_rest_company_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../services/rest/company.service */ 12744);











/** peerComparision view and scss linking  */
let PeerComparisionComponent = class PeerComparisionComponent {
  /**
   * Dependency injection and varaible intialization
   * @param activeRoute for getting the present Route
   * @param restService for api call
   * @param shared for data shared between two components
   * @param utilsService for data manipulation
   * @param router for navigating to different component
   */
  constructor(activeRoute, restService, shared, utilsService, socketService, router) {
    this.activeRoute = activeRoute;
    this.restService = restService;
    this.shared = shared;
    this.utilsService = utilsService;
    this.socketService = socketService;
    this.router = router;
    /**
     * peerComparision api response
     */
    this.peerComparisionData = [];
    /**
     * peerComparision api response null
     */
    this.isScripPeer = false;
    this.indicesData = {};
  }
  /**
  * change in url is checked, accordigly various parameters are reset
  */
  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      this.peerComparisionData = [];
    });
  }
  ngAfterViewInit() {
    let slider;
    slider = document.querySelector('.dragscroll');
    let isDown = false;
    let startX;
    let scrollLeft;
    slider.addEventListener('mousedown', e => {
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener('mouseleave', () => {
      isDown = false;
      slider.classList.remove('active');
    });
    slider.addEventListener('mouseup', () => {
      isDown = false;
      slider.classList.remove('active');
    });
    slider.addEventListener('mousemove', e => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = x - startX; //(x - startX) * 2 : scroll-fast
      slider.scrollLeft = scrollLeft - walk;
      //  
    });
  }
  /**
   * listen to scripDetails response emitted from segmentToken and call scripPeer Api and process its response
   * @param changes scripDetails response emitted from segmentToken
   */
  ngOnChanges(changes) {
    if (changes['scripInfo'] && changes['scripInfo'].currentValue) {
      this.scripInfo = changes['scripInfo'].currentValue;
      this.searchScrip = this.scripInfo["SecName"];
      if (this.scripInfo["SegmentId"] == 1 || this.scripInfo["SegmentId"] == 3) {
        let userId = this.utilsService.getUserId() || "guest";
        let data = {
          "UserId": userId == 'guest' ? '' : userId,
          "SessionId": this.utilsService.getSessionId() || '',
          "nSegmentId": Number(this.scripInfo.SegmentId),
          "nToken": Number(this.scripInfo.Token)
        };
        this.isServiceHit = true;
        this.restService.getScripPeers(data).subscribe(res => {
          if (res.Status === "Success" && res.Response) {
            this.peerComparisionData = [];
            res.Response.forEach((element, index) => {
              if (element.SecName) {
                this.peerComparisionData.push(element);
              }
            });
            let tokenList = [];
            this.peerComparisionData.forEach(element => {
              this.indicesData[element.nSegmentId + "@" + element.nToken];
              tokenList.push({
                'SegmentId': element.nSegmentId,
                'Token': element.nToken
              });
            });
            this.utilsService.subscribeMultitouchline(tokenList);
            //  console.log("best5 token: ",tokenList)
            this.getSocketResponse();
            this.getMultiTouchLineData();
            //  console.log("this.peerComparisionData",this.peerComparisionData)
            this.isBank = res.Response[0]['IsBanking'];
            this.isScripPeer = false;
          } else if (res.Reason == 'Data not found.') {
            this.isScripPeer = true;
            this.peerComparisionData = [];
            // } else if (this.utilsService.isSessionExpired(res.Reason)) {
            //   if(this.shared.isSSO){
            //     this.utilsService.sessionExpireHandling()
            //     return
            //   }
            //   this.utilsService.error('Session Expired', "Please Login Again");
            //   this.utilsService.postFeatureCount();
            //   this.utilsService.clearLoginDetails();
            //   this.shared.userId = null;
            //   this.router.navigate(['auth/login']);
          } else {
            this.utilsService.error('Error', "Something went wrong");
          }
          this.isServiceHit = false;
        }, err => {
          this.isServiceHit = false;
        });
      }
    }
  }
  /**
  * Get MultiTouchLine Data
  */
  getMultiTouchLineData() {
    let userAccountStatus = this.utilsService.getUserAccountStatus();
    //&& this.isSegmentAllowed == 'Y'//Commented
    // if ((this.utilsService.isAuthorized() && this.isSegmentAllowed == 'Y') || ((!this.shared.userId || this.shared.userId == 'guest'))) {
    // if ((!userAccountStatus || !userAccountStatus.onboardStatus || (userAccountStatus.onboardStatus=='C')) ||(this.utilsService.isAuthorized() ) || ((!this.shared.userId || this.shared.userId == 'guest'))) {
    const userId = this.utilsService.getUserId();
    if (userId && userId != 'guest' && this.peerComparisionData && this.peerComparisionData.length) {
      let datapoints = [];
      this.peerComparisionData.forEach(item => {
        datapoints.push({
          SegmentId: item.nSegmentId,
          Token: item.nToken
        });
      });
      // this.toggleAddRemove(item);
      this.utilsService.subscribeMultitouchline(datapoints);
      // this.utilsService.subscribeMultitouchline(this.peerComparisionData);
    }
    const tokens = this.utilsService.generateTokens(this.peerComparisionData, 'nSegmentId', 'nToken');
    const payload = {
      'UserId': !userId || userId == 'guest' ? 'guest' : userId,
      'SessionId': this.utilsService.getSessionId() || '',
      'MultipleTokens': tokens
    };
    //  console.log("payload",payload)
    this.utilsService.commonGetMultipleTouchLineCall(payload).subscribe(data => {
      if (data.Status == 'Success' && data.Response && data.Response.lMT && data.Response.lMT.length) {
        const multitouchLineResponse = data.Response.lMT;
        console.log("peerComparisionData multitouchline3 ", JSON.parse(JSON.stringify(this.peerComparisionData)));
        //    console.log("payload multitouchLineResponse",multitouchLineResponse)
        multitouchLineResponse.forEach((element, index) => {
          //    console.log(this.peerComparisionData[index].nSegmentId, "payload SegmentId2",element['SegmentId'] )
          if (element['SegmentId'] == this.peerComparisionData[index].nSegmentId && element['Token'] == this.peerComparisionData[index].nToken) {
            Object.assign(element, Object.assign(this.peerComparisionData[index], element));
            //     console.log("payload SegmentId",element['SegmentId'] )
            element['prevChange'] = 0;
            element['PrvClose'] = element['LTP'] - element['Change'];
            element['PrvClose'] = element['PrvClose'] / element['PriceDivisor'];
            element['LTP'] = Number(element['LTP'] / element['PriceDivisor']);
            element['Change'] = element['Change'] ? element['Change'] / element['PriceDivisor'] : element['Change'];
            element['ChangePer'] = element['Change'] ? element['Change'] / element['PrvClose'] * 100 : element['ChangePer'];
            element.class = element['Change'] < 0 ? 'text-red' : element['Change'] > 0 ? 'text-green' : '';
            element['Change'] = element['Change'];
            element['ChangePer'] = element['ChangePer'];
            element.companyURL = (this.peerComparisionData[index].scrip_name || "").trim().toLowerCase().replace(/\s/g, '-').replace(/\//g, '').replace(/(-)+/g, '-');
            this.peerComparisionData[index] = Object.assign(this.peerComparisionData[index], element);
          }
        });
        this.peerComparisionData = [...this.peerComparisionData];
      }
    });
    // }
  }
  ngOnDestroy() {
    let tokenList = [];
    this.peerComparisionData.forEach(element => {
      tokenList.push({
        'SegmentId': element.nSegmentId,
        'Token': element.nToken
      });
    });
    this.utilsService.unSubscribeMultitouchline(tokenList);
    if (this.bestFiveSubscription) this.bestFiveSubscription.unsubscribe();
  }
  /**
  * Get socket response for selection index
  */
  getSocketResponse() {
    this.bestFiveSubscription = this.utilsService.broadcastObservable('watchlist').subscribe(res => {
      //   console.log("getSocketResponse res",res)
      let scrip = this.peerComparisionData.filter((obj, index) => {
        return res[0]['1'] == obj.nSegmentId && obj.nToken == res[0]["7"];
      });
      if (scrip.length > 0 && this.utilsService.isUpdatedData(scrip[0], res[0])) {
        let priceDivisor = this.utilsService.getDefaultPriceDivisor(res[0]["1"], res[0]["7"]);
        // console.log("getSocketResponse res",res)
        let obj = scrip[0];
        obj.prevChange = (Number(res[0]['8']) / priceDivisor || 0) - (obj.LTP || 0);
        obj['PrvClose'] = res[0]['76'] / priceDivisor;
        obj.LTP = Number(res[0]["8"]) == 0 ? obj['PrvClose'] / priceDivisor : (res[0]["8"] || 0) / priceDivisor; // if LTP == 0 then show prevClose (10/05/2021)
        obj.Change = ((res[0]['8'] == 0 ? obj['PrvClose'] : Number(res[0]['8'] || 0)) - Number(res[0]['76'])) / priceDivisor || obj['Change']; // (res[0]['8'] - obj['PrvClose']) / (res[0]['399'] || 1);//
        // console.log("(res[0]['8'] == 0 ? obj['PrvClose'] : Number(res[0]['8'] || 0))",(res[0]['8'] == 0 ? obj['PrvClose'] : Number(res[0]['8'] || 0)))
        //console.log(obj['PrvClose'],"(res[0]['8'] == 0 ? obj['PrvClose'] : (res[0]['8'] || 0))",(res[0]['8'] == 0 ? obj['PrvClose'] : (res[0]['8'] || 0)),"----",obj['PrvClose'],"------",(res[0]['8'] || 0))
        obj['ChangePer'] = obj['Change'] ? obj['Change'] / (res[0]['76'] / priceDivisor) * 100 : obj['ChangePer'];
        // obj.LTP = res[0]["8"] / res[0]["399"];
        obj.class = obj['Change'] < 0 ? 'text-red' : obj['Change'] > 0 ? 'text-green' : '';
        obj.Change = obj.Change;
        obj.ChangePer = obj.ChangePer;
        //  console.log("getSocketResponse objobjobj: ",obj)
      }
      // console.log("best5",res)
      //   res = res.replace(/\$/g, "|");
      //   let responseObject = this.utilsService.pipeToObject(res);
      //   if (this.indicesData[responseObject[0][1]+"@"+responseObject[0][7]][responseObject[0][1]+"@"+responseObject[0][7]]) {
      //       this.indicesData[responseObject[0][1]+"@"+responseObject[0][7]].prevChange = ((Number(responseObject[0][8]) / responseObject[0]["399"]) || 0) - (this.indicesData[responseObject[0][1]+"@"+responseObject[0][7]].prevLTP || 0);
      //       this.indicesData[responseObject[0][1]+"@"+responseObject[0][7]]["LUT"] = this.utilsService.changeCurrentDateFormat(responseObject[0]["74"], 'YYYY-MM-DD HH:mm:ss', 'DD-MM-YYYY HH:mm:ss');
      //       this.indicesData[responseObject[0][1]+"@"+responseObject[0][7]]["LTT"] = this.utilsService.changeCurrentDateFormat(responseObject[0]["73"], 'YYYY-MM-DD HH:mm:ss', 'DD-MM-YYYY HH:mm:ss');
      //       this.indicesData[responseObject[0][1]+"@"+responseObject[0][7]]["LUTime"] = this.utilsService.changeCurrentDateFormat(responseObject[0]["74"], 'YYYY-MM-DD HH:mm:ss', 'DD-MMM-YY HH:mm:ss');
      //       this.indicesData[responseObject[0][1]+"@"+responseObject[0][7]]["LTTime"] = this.utilsService.changeCurrentDateFormat(responseObject[0]["73"], 'YYYY-MM-DD HH:mm:ss', 'DD-MMM-YY HH:mm:ss');
      //       this.indicesData[responseObject[0][1]+"@"+responseObject[0][7]].PrevClose = this.indicesData[responseObject[0][1]+"@"+responseObject[0][7]].PrevClose || responseObject[0]["76"];
      //       this.indicesData[responseObject[0][1]+"@"+responseObject[0][7]]["LTP"] = (responseObject[0]["8"] == 0) ? (this.indicesData[responseObject[0][1]+"@"+responseObject[0][7]].PrevClose) : (responseObject[0]["8"] / responseObject[0]["399"]) || 0; // if LTP == 0 then show prevClose (10/05/2021)
      //       this.indicesData[responseObject[0][1]+"@"+responseObject[0][7]]["prevLTP"] = this.indicesData[responseObject[0][1]+"@"+responseObject[0][7]]["LTP"];
      //       this.indicesData[responseObject[0][1]+"@"+responseObject[0][7]]["diff"] = this.indicesData[responseObject[0][1]+"@"+responseObject[0][7]]["LTP"] - (this.indicesData[responseObject[0][1]+"@"+responseObject[0][7]].PrevClose / responseObject[0]["399"]);
      //       this.indicesData[responseObject[0][1]+"@"+responseObject[0][7]]["percentage"] = (((this.indicesData[responseObject[0][1]+"@"+responseObject[0][7]]["diff"]) / ((this.indicesData[responseObject[0][1]+"@"+responseObject[0][7]]["LTP"]) - this.indicesData[responseObject[0][1]+"@"+responseObject[0][7]]["diff"])) * 100) || 0;
      //       this.indicesData[responseObject[0][1]+"@"+responseObject[0][7]]["change"] = Math.abs(this.indicesData[responseObject[0][1]+"@"+responseObject[0][7]]["diff"]);
      //       this.indicesData[responseObject[0][1]+"@"+responseObject[0][7]]["changePercent"] = Math.abs(this.indicesData[responseObject[0][1]+"@"+responseObject[0][7]]["percentage"]).toFixed(2);
      //       if (this.indicesData[responseObject[0][1]+"@"+responseObject[0][7]]["diff"] < 0) {
      //           this.indicesData[responseObject[0][1]+"@"+responseObject[0][7]]["color"] = "text-pink";
      //           this.indicesData[responseObject[0][1]+"@"+responseObject[0][7]]["arrow"] = "icon-long-arrow-down"
      //       }
      //       else if (this.indicesData[responseObject[0][1]+"@"+responseObject[0][7]]["diff"] === 0) {
      //           this.indicesData[responseObject[0][1]+"@"+responseObject[0][7]]["color"] = "";
      //           this.indicesData[responseObject[0][1]+"@"+responseObject[0][7]]["arrow"] = ""
      //       }
      //       else if (this.indicesData[responseObject[0][1]+"@"+responseObject[0][7]]["diff"] > 0) {
      //           this.indicesData[responseObject[0][1]+"@"+responseObject[0][7]]["color"] = "text-green";
      //           this.indicesData[responseObject[0][1]+"@"+responseObject[0][7]]["arrow"] = "icon-long-arrow-up"
      //       }
      //       this.indicesData[responseObject[0][1]+"@"+responseObject[0][7]]["open"] = (responseObject[0]["75"] / responseObject[0]["399"]);
      //       this.indicesData[responseObject[0][1]+"@"+responseObject[0][7]]["close"] = (responseObject[0]["76"] / responseObject[0]["399"]);
      //       this.indicesData[responseObject[0][1]+"@"+responseObject[0][7]]["wKHigh"] = (responseObject[0]["93"] / responseObject[0]["399"]);
      //       this.indicesData[responseObject[0][1]+"@"+responseObject[0][7]]["WkLow"] = (responseObject[0]["94"] / responseObject[0]["399"]);
      //       this.indicesData[responseObject[0][1]+"@"+responseObject[0][7]]["high"] = (responseObject[0]["77"]) / (responseObject[0]["399"]); // if ltp == 0 then show prevClose in high (24/05/2021)
      //       this.indicesData[responseObject[0][1]+"@"+responseObject[0][7]]["low"] = (responseObject[0]["78"]) / (responseObject[0]["399"]); // if ltp == 0 then show prevClose in low (24/05/2021)
      //   }
      // console.log("this.indicesData",this.indicesData)
    });
  }
  /**
   * On click of company, goto company page of respective scrip
   * @param item company details
   */
  gotoCompany(item) {
    let segmentToken = item.SegmentId + '&' + item.Token;
    localStorage.setItem('presentToken', JSON.stringify(segmentToken));
    let url = item.SecName.replace(/[\s|\&|\%]/g, '').toLowerCase() + '/' + item.nSegmentId + '/' + item.nToken;
    this.router.navigate(['instrument/equity/' + url]);
  }
  static {
    this.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute
    }, {
      type: _services_rest_company_service__WEBPACK_IMPORTED_MODULE_7__.CompanyService
    }, {
      type: _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__.SharedDataService
    }, {
      type: _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_6__.UtilsService
    }, {
      type: src_app_services_sockets_socket_service__WEBPACK_IMPORTED_MODULE_2__.SocketService
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
    }];
  }
  static {
    this.propDecorators = {
      scripInfo: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input,
        args: ['scripInfo']
      }]
    };
  }
};
PeerComparisionComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-peer-comparision',
  template: _peer_comparision_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  imports: [_pipes_segment_pipe__WEBPACK_IMPORTED_MODULE_3__.SegmentPipe, _pipes_value_pipe__WEBPACK_IMPORTED_MODULE_4__.ValuePipe],
  styles: [(_peer_comparision_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute, _services_rest_company_service__WEBPACK_IMPORTED_MODULE_7__.CompanyService, _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__.SharedDataService, _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_6__.UtilsService, src_app_services_sockets_socket_service__WEBPACK_IMPORTED_MODULE_2__.SocketService, _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router])], PeerComparisionComponent);


/***/ }),

/***/ 52219:
/*!*********************************************************!*\
  !*** ./src/app/company-module/pivot/pivot.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PivotComponent: () => (/* binding */ PivotComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _pivot_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pivot.component.html?ngResource */ 12997);
/* harmony import */ var _pivot_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pivot.component.scss?ngResource */ 83345);
/* harmony import */ var _pivot_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pivot_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 40605);
/* harmony import */ var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/analytics/analytics.service */ 50213);
/* harmony import */ var _pipes_segment_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pipes/segment.pipe */ 39995);
/* harmony import */ var _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/shared-data/shared-data.service */ 46013);
/* harmony import */ var _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/utils/utils.service */ 89893);
/* harmony import */ var _services_rest_company_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../services/rest/company.service */ 12744);











let PivotComponent = class PivotComponent {
  constructor(rest, util, shared, analytics) {
    this.rest = rest;
    this.util = util;
    this.shared = shared;
    this.analytics = analytics;
    /** loader for pivot point data */
    this.pivotLoader = false;
    this.scripInfo = {};
    this.pivotPointsData = {};
    this.selectedDuration = 5;
    // this.onActionChange(this.pivotToggle);
    // this.subscription = this.util.broadcastObservable('watchlist').subscribe((data) => {
    //   if (this.scripInfo && data[0][7] == this.scripInfo.Token && data[0][1] == this.scripInfo.SegmentId) {
    //  let LTP = Number(data[0][8]) / (this.scripInfo.PriceDivisor || Number(data[0]["399"]));
    //     this.scripInfo.LTP = LTP;
    //   }
    // })
  }
  ngOnInit() {}
  ngOnChanges(changes) {
    if (changes['scripInfo'] && changes['scripInfo'].currentValue) {
      this.scripInfo = changes['scripInfo'].currentValue;
      if (this.scripInfo.SegmentId && this.scripInfo.Token) {
        // let request = {
        //   "nMarketSegmentId": Number(this.scripInfo.SegmentId),
        //   "nToken": Number(this.scripInfo.Token),
        //   "DurationType": this.selectedDuration
        // }
        this.getPivotPoints();
      }
    }
    // if (changes['best5Response'] && changes['best5Response'].currentValue) {
    //   this.scripInfo = (this.scripInfo || {});
    //   this.scripInfo.LTP = changes['best5Response'].currentValue.LTP;
    //   if (Object.keys(this.pivotPointsData).length > 1) {
    //     this.calculateMove(this.scripInfo.LTP);
    //     this.moveBar();
    //   }
    // }
  }
  /** to get pivot point data based on duration */
  getPivotPoints() {
    let request = {
      "nMarketSegmentId": Number(this.scripInfo.SegmentId),
      "nToken": Number(this.scripInfo.Token),
      "DurationType": Number(this.selectedDuration),
      "UserId": this.util.getUserId() || 'guest',
      "SessionId": this.util.getSessionId() || ''
    };
    this.pivotPointsData = {};
    this.pivotLoader = true;
    this.rest.getPivotPoints(request).subscribe(res => {
      this.pivotLoader = false;
      if (res.Status === 'Success' && res.Response && res.Response.oDictDurationToPivotPoints && res.Response.oDictDurationToPivotPoints[this.selectedDuration]) {
        // this.pivotPointsData = res.Response.oDictDurationToPivotPoints;
        this.pivotPointsData[this.selectedDuration] = res.Response.oDictDurationToPivotPoints[this.selectedDuration] || {};
        // let keys = Object.keys(this.pivotPointsData);
        // keys.forEach((key, index) => {.
        //   this.pivotPointsData[key]['dStandardRotateFactor'] =
        //     164 / (this.pivotPointsData[key].dStandardResistanceR3 - this.pivotPointsData[key].dStandardSupportS3);
        //   this.pivotPointsData[key]['dFibonacciRotateFactor'] =
        //     164 / (this.pivotPointsData[key].dFibonacciResistanceR3 - this.pivotPointsData[key].dFibonacciSupportS3);
        // });
        // this.calculateMove(this.scripInfo.LTP);
        // this.moveBar();
        // this.setTimer();
      } else {
        this.pivotPointsData[this.selectedDuration] = {};
      }
    }, err => {
      this.pivotLoader = false;
      this.util.error('Error', 'Something went wrong');
      this.pivotPointsData[this.selectedDuration] = {};
      // this.getStandarPivotList(request);
      // this.getFibonacciPivotList(request);
    });
    this.util.setTrackMoeEvent('clickedCompanyPivotPointDuration', {
      "User_ID": this.util.getUserId() || 'guest',
      "IP": this.shared.IPAddress
    });
    this.analytics.emitEvent('clickedCompanyPivotPointDuration', this.util.getUserId() || 'guest', JSON.stringify({
      "IP": this.shared.IPAddress
    }), 1);
  }
  setTimer() {
    if (this.timerSubscription) this.timerSubscription.unsubscribe();
    this.timerSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.interval)(60000).subscribe(() => {
      if (this.scripInfo && this.scripInfo.LTP) {
        this.calculateMove(this.scripInfo.LTP, true);
        this.moveBar();
      }
    });
  }
  ngOnDestroy() {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if (this.timerSubscription) this.timerSubscription.unsubscribe();
    if (this.subscription) this.subscription.unsubscribe();
  }
  calculateMove(LTP, isSocket) {
    LTP = this.util.getUserId() != 'guest' ? LTP : LTP / this.scripInfo.PriceDivisor;
    if (!isSocket) {
      let keys = Object.keys(this.pivotPointsData);
      keys.forEach((key, index) => {
        this.pivotPointsData[key]['dStandardMove'] = this.pivotPointsData[key]['dStandardRotateFactor'] * (LTP - this.pivotPointsData[key]['dStandardSupportS3']) - 82;
        this.pivotPointsData[key]['dFibonacciMove'] = this.pivotPointsData[key]['dFibonacciRotateFactor'] * (LTP - this.pivotPointsData[key]['dFibonacciSupportS3']) - 82;
        this.pivotPointsData[key]['dStandardMove'] = this.pivotPointsData[key]['dStandardMove'] < -82 ? -85 : this.pivotPointsData[key]['dStandardMove'] > 82 ? 85 : this.pivotPointsData[key]['dStandardMove'];
        this.pivotPointsData[key]['dFibonacciMove'] = this.pivotPointsData[key]['dFibonacciMove'] < -82 ? -85 : this.pivotPointsData[key]['dFibonacciMove'] > 82 ? 85 : this.pivotPointsData[key]['dFibonacciMove'];
      });
    } else {
      let factor = this.pivotPointsData[this.selectedDuration][this.resKey + 'RotateFactor'];
      this.pivotPointsData[this.selectedDuration][this.resKey + 'Move'] = factor * (LTP - this.pivotPointsData[this.selectedDuration][this.resKey + 'SupportS3']) - 82;
      this.pivotPointsData[this.selectedDuration][this.resKey + 'Move'] = this.pivotPointsData[this.selectedDuration][this.resKey + 'Move'] < -82 ? -85 : this.pivotPointsData[this.selectedDuration][this.resKey + 'Move'] > 82 ? 85 : this.pivotPointsData[this.selectedDuration][this.resKey + 'Move'];
    }
  }
  /**
   * Function to get Standard Pivot data
   * @param request request object containing segment and token id of the scrip
    */
  // getStandarPivotList(request: any) {
  //   this.rest.getStandardPivotData(request).subscribe((res) => {
  //     if (res.Status === 'Success' && res.Response) {
  //       this.pivotPointsData[5].dStandardResistanceR3 = res.Response.dResistanceR3;
  //       this.pivotPointsData[5].dStandardResistanceR2 = res.Response.dResistanceR2;
  //       this.pivotPointsData[5].dStandardResistanceR1 = res.Response.dResistanceR1;
  //       this.pivotPointsData[5].dStandardPivot = res.Response.dPivot;
  //       this.pivotPointsData[5].dStandardSupportS1 = res.Response.dSupportS1;
  //       this.pivotPointsData[5].dStandardSupportS2 = res.Response.dSupportS2;
  //       this.pivotPointsData[5].dStandardSupportS3 = res.Response.dSupportS3;
  //     } else {
  //       this.util.error('Error', 'data not found');
  //     }
  //   }, (err) => {
  //     this.util.error('Error', 'Something went wrong');
  //   });
  // }
  /**
   * Function to get Fibonacci Pivot data
   * @param request request object containing segment and token id of the scrip
   */
  // getFibonacciPivotList(request: any) {
  //   this.rest.getFibonacciPivotData(request).subscribe((res) => {
  //     if (res.Status === 'Success') {
  //       this.pivotPointsData[5].dFibonacciResistanceR3 = res.Response.dResistanceR3;
  //       this.pivotPointsData[5].dFibonacciResistanceR2 = res.Response.dResistanceR2;
  //       this.pivotPointsData[5].dFibonacciResistanceR1 = res.Response.dResistanceR1;
  //       this.pivotPointsData[5].dFibonacciPivot = res.Response.dPivot;
  //       this.pivotPointsData[5].dFibonacciSupportS1 = res.Response.dSupportS1;
  //       this.pivotPointsData[5].dFibonacciSupportS2 = res.Response.dSupportS2;
  //       this.pivotPointsData[5].dFibonacciSupportS3 = res.Response.dSupportS3;
  //     } else {
  //       this.util.error('Error', 'data not found');
  //     }
  //   }, (err) => {
  //     this.util.error('Error', 'Something went wrong');
  //   });
  // }
  /** Toggle between Buy and Sell */
  onActionChange(actionToggle) {
    this.resKey = actionToggle ? 'dFibonacci' : 'dStandard';
    if (this.scripInfo && this.scripInfo.LTP) {
      this.calculateMove(this.scripInfo.LTP, true);
      this.moveBar();
    }
  }
  moveBar() {
    let element = document.getElementById('speedometerBar');
    element ? element.style.transform = 'rotate(' + this.pivotPointsData[this.selectedDuration][this.resKey + 'Move'] + 'deg)' : '';
  }
  static {
    this.ctorParameters = () => [{
      type: _services_rest_company_service__WEBPACK_IMPORTED_MODULE_6__.CompanyService
    }, {
      type: _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_5__.UtilsService
    }, {
      type: _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__.SharedDataService
    }, {
      type: src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_2__.AnalyticsService
    }];
  }
  static {
    this.propDecorators = {
      scripInfo: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input,
        args: ['scripInfo']
      }],
      best5Response: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input,
        args: ['best5Response']
      }]
    };
  }
};
PivotComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-pivot',
  template: _pivot_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _pipes_segment_pipe__WEBPACK_IMPORTED_MODULE_3__.SegmentPipe],
  styles: [(_pivot_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:paramtypes", [_services_rest_company_service__WEBPACK_IMPORTED_MODULE_6__.CompanyService, _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_5__.UtilsService, _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__.SharedDataService, src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_2__.AnalyticsService])], PivotComponent);


/***/ }),

/***/ 36460:
/*!*************************************************************!*\
  !*** ./src/app/company-module/reports/reports.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReportsComponent: () => (/* binding */ ReportsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _reports_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reports.component.html?ngResource */ 52313);
/* harmony import */ var _reports_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reports.component.scss?ngResource */ 74725);
/* harmony import */ var _reports_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reports_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var src_app_services_rest_company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/rest/company.service */ 12744);
/* harmony import */ var src_app_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/shared-data/shared-data.service */ 46013);
/* harmony import */ var src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/utils/utils.service */ 89893);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/libs/esm-moment.min.js */ 29483);
/* harmony import */ var _directives_show_focus_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../directives/show-focus.directive */ 57862);
/* harmony import */ var _pipes_condense_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/condense.pipe */ 82203);








/** Import Moment JS Library*/
// var moment: any = require();




let ReportsComponent = class ReportsComponent {
  constructor(companyService, renderer, router, utils, shared, activatedRoute) {
    this.companyService = companyService;
    this.renderer = renderer;
    this.router = router;
    this.utils = utils;
    this.shared = shared;
    this.activatedRoute = activatedRoute;
    this.config = {};
    this.changeOptFut = {
      label: ''
    };
    this.abs = Math.abs;
    this.reportList = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
    this.total_Count = 0;
    this.cssClasses = {
      sortAscending: 'icon-angle-down',
      sortDescending: 'icon-angle-up',
      pagerLeftArrow: 'icon-angle-left',
      pagerRightArrow: 'icon-angle-right',
      pagerPrevious: 'icon-angle-left',
      pagerNext: 'icon-angle-right'
    };
    this.todaysDate = new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_5__["default"]().format('YYYY-MM-DD');
  }
  ngOnInit() {
    this.isServiceHit = true;
    this.routeParamsSubscription = this.activatedRoute.params.subscribe(params => {
      this.companyName = params['companyName'];
    });
    this.activeTab = 1;
  }
  ngOnChanges(changes) {
    if (changes['mappedTokens'] && changes['mappedTokens'].currentValue) {
      this.mappedTokens = JSON.parse(JSON.stringify(changes['mappedTokens'].currentValue));
      this.getCompanyReports(this.mappedTokens);
      console.log("this.mappedTokens", this.mappedTokens);
    }
  }
  /**
   * On change of tab , show different data
   * @param i present tab
   */
  activateFilter(i) {
    this.activeTab = i;
  }
  initializeCategoryConfig() {
    this.category_typeConf = {
      FiveMinPVBreakout: {
        subcategory_name: 'Intra Spurt',
        research_type: 'Intraday',
        title: 'Intra Spurt',
        desc: 'Intraday calls based on Multi-time frame Breakout Strategy'
      },
      FifteenMinPVBreakout: {
        subcategory_name: 'Dark Horse',
        research_type: 'Positional',
        title: 'Dark Horse Strategy',
        desc: 'Positional calls based on Price and Volume breakout'
      },
      IntradayOISpurts: {
        subcategory_name: 'Intraday OI Spurts',
        research_type: 'Intraday'
      },
      FiveMinSTBreakout: {
        subcategory_name: 'Future Trade Simplifier',
        research_type: 'Intraday',
        title: 'Future Trade Simplifier',
        desc: 'Intraday calls in Future counters based on the Open Interest & Price movement'
      },
      FifteenMinSTBreakout: {
        subcategory_name: 'Future Trade Simplifier',
        research_type: 'Positional',
        title: 'Future Trade Simplifier Positional',
        desc: 'Positional calls in Future counters based on the Open Interest & Pricemovement'
      },
      CQuant: {
        subcategory_name: 'C-Quant',
        research_type: 'Intraday',
        title: 'C-Quant',
        desc: 'Trading strategy based on data-driven research using quantitative mathematical models for T+5 trading horizons'
      },
      'Intra Day': {
        subcategory_name: 'C-Quant',
        research_type: 'Intraday',
        title: 'C-Quant',
        desc: 'Trading strategy based on data-driven research using quantitative mathematical models for T+5 trading horizons'
      },
      Positional: {
        subcategory_name: 'C-Quant',
        research_type: 'Positional',
        title: 'C-Quant',
        desc: 'Trading strategy based on data-driven research using quantitative mathematical models for T+5 trading horizons'
      },
      'Short Term': {
        subcategory_name: 'C-Quant',
        research_type: 'Short Term',
        title: 'C-Quant',
        desc: 'Trading strategy based on data-driven research using quantitative mathematical models for T+5 trading horizons'
      },
      'Long Term': {
        subcategory_name: 'C-Quant',
        research_type: 'Long Term',
        title: 'C-Quant',
        desc: 'Trading strategy based on data-driven research using quantitative mathematical models for T+5 trading horizons'
      },
      'EQUITY RESEARCH REPORT': {
        subcategory_name: 'EQUITY RESEARCH REPORT',
        title: '',
        desc: ''
      },
      'Sumeet Bagadia’s Desk': {
        subcategory_name: 'Sumeet Bagadia’s',
        title: 'Sumeet Bagadia’s',
        desc: 'Technical research calls given by our expert Sumeet Bagadia'
      }
    };
  }
  /**
   * Get Companies Research Report
   * @param data Gets Mapped tokes array
   */
  getCompanyReports(data) {
    console.log("getCompanyReports", data);
    let tokens = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i]['Token'] && data[i]['SegmentId']) {
        let para = {
          'token': data[i]['Token'],
          'segment_id': data[i]['SegmentId']
        };
        tokens.push(para);
      }
    }
    /*    let dummy=[
         {
           "token": 6994,
           "segment_id": 1
       },
       {
           "token": 532540,
           "segment_id": 3
       }
     ] */
    this.companyService.getCompanyReports(tokens).subscribe(res => {
      this.isServiceHit = true;
      //    console.log("res",res)
      if (res.status_code == 200 && res.message == "Success" && res.response) {
        //  this.reports = res.response;
        //  if (res.status_code === 200 && res.message == "success") {
        this.total_Count = res.response.total_count || 0;
        this.initializeCategoryConfig();
        // get pager object from service
        //  this.pager = this.pagerService.getPager(this.total_Count, this.currentPage);
        this.reports = res.response.research;
        this.reports = this.reports.map(ele => {
          const userId = this.utils.getUserId();
          ele.subcategory_name = ele.subcategory_name == 'EQUITY RESEARCH REPORT' ? 'Equity Research Report' : ele.subcategory_name;
          ele.published_date = ele.published_date ? (0,_assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_5__["default"])(ele.published_date).format("Do MMM'YY") : '';
          ele.updated_date = ele.updated_datetime ? (0,_assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_5__["default"])(ele.updated_datetime).format("Do MMM'YY") : '';
          ele.reco_date = ele.reco_date ? (0,_assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_5__["default"])(ele.reco_date).format("Do MMM'YY") : '';
          ele.report_expiry = ele.report_expiry ? (0,_assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_5__["default"])(ele.report_expiry).format("Do MMM'YY") : '';
          if (ele.scrip_expiry >= this.todaysDate || ele.scrip_expiry == false || ele.scrip_expiry == "0000-00-00") {
            ele['isExpired'] = false;
          } else {
            ele['isExpired'] = true;
          }
          if (userId && userId != 'guest') {
            ele['isAllowed'] = !this.shared.userId || this.shared.userId == 'guest' ? 'Y' : this.utils.isSegmentAllowed(ele.segment_id);
          } else {
            ele['isAllowed'] = true;
          }
          //ele.isNonScrip=true
          ele.scripData = this.utils.checkFromWatchlist(ele.segment_id, ele.token);
          ele.segmentTokenString = {
            'SegmentId': ele.segment_id,
            'Token': ele.token
          };
          ele.isAdded = ele.scripData && ele.scripData.ProfileId;
          ele.title1 = this.category_typeConf[ele.subcategory_name] ? this.category_typeConf[ele.subcategory_name].title : '';
          ele.desc = this.category_typeConf[ele.subcategory_name] ? this.category_typeConf[ele.subcategory_name].desc : '';
          if (ele.datapoints && ele.datapoints.length) {
            ele.priceData = {};
            ele.datapoints.forEach(sub => {
              sub.key = sub.key == 'cmp' ? 'entry_price' : sub.key;
              if (!isNaN(Number(sub.value))) sub.value = Number(sub.value);
              ele.priceData[sub.key] = sub;
            });
          }
          ele.segmentName = this.utils.getSegmentDetail(ele.segment_id, 'SegmentName') + (ele.series ? " (" + ele.series + ")" : "");
          return ele;
        });
        this.reportList.emit(this.reports);
        this.reports = this.reports.filter(ele => {
          return ele.status == 'Achieved';
        });
        this.getSocketData();
        this.getMultiTouchLineData();
        // setTimeout(() => {
        //   if (this.config.filter.report_uuid && this.reports && this.reports[0]) {
        //     this.OpenDrawer(this.reports[0], true)
        //   }
        // }, 1000);
        //  }
        // this.fundamental = this.reports.filter(x => {
        //   if (this.shared.userId && this.shared.userId == 'guest') {
        //     return (new moment(x.published_date, 'YYYY-MM-DD') < new moment(this.utils.getCurrentDate(), 'YYYY-MM-DD')) && x.category_id == 1; // logic to remove today's report i.e. dont show today's reports for guest users added by reshmaC on 09/02/2021
        //   } else {
        //     return x.category_id == 1;
        //   }
        // });
        // this.technical = this.reports.filter(x => {
        //   if (this.shared.userId && this.shared.userId == 'guest') {
        //     return (new moment(x.published_date, 'YYYY-MM-DD') < new moment(this.utils.getCurrentDate(), 'YYYY-MM-DD')) && x.category_id == 2; // logic to remove today's report i.e. dont show today's reports for guest users added by reshmaC on 09/02/2021
        //   } else {
        //     return x.category_id == 2;
        //   }
        // });
        // this.activeTab = this.fundamental.length > 0 ? 1 : 2;
        // this.isServiceHit = false;
        // this.reports.forEach((x, index) => {
        //   if (!this.utils.removeTodaysReports(x)) { // logic to remove today's report i.e. dont show today's reports for guest users added by reshmaC on 09/02/2021
        //     this.reports.splice(index, 1);
        //   } else {
        //     let Price = x.matched_price || x.matched_price == 0 ? x.matched_price : x.datapoints[1].value || 0;
        //     let EntryPrice = Number(x.datapoints[0].value || 0);
        //     let isBuy = x.call_type == 'Buy' || x.call_type == 'Hold' ? true : false;
        //     x['achievedPer'] = this.utils.perCalculationOfAchievedReport(EntryPrice, Price, isBuy);
        //   }
        // });
      } else {
        this.reports = [];
        this.isServiceHit = false;
      }
    }, error => {
      // if(error.error.text){
      //   console.log(error.error.text)
      //   let res=JSON.parse(error.error.text)
      //   console.log(res)
      //   if (res.status_code == 200 && res.message == "success") {
      //     //  this.reports = res.response;
      //     //  if (res.status_code === 200 && res.message == "success") {
      //         this.total_Count = res.total_count || 0;
      //         this.initializeCategoryConfig();
      //         // get pager object from service
      //       //  this.pager = this.pagerService.getPager(this.total_Count, this.currentPage);
      //         this.reports = res.response;
      //         this.reports = this.reports.map(ele => {
      //           const userId = this.utils.getUserId();
      //           ele.subcategory_name = ele.subcategory_name == 'EQUITY RESEARCH REPORT' ? 'Equity Research Report' : ele.subcategory_name
      //           ele.published_date = ele.published_date ? moment(ele.published_date).format("Do MMM'YY") : ''
      //           ele.updated_date = ele.updated_datetime ? moment(ele.updated_datetime).format("Do MMM'YY") : ''
      //           ele.reco_date = ele.reco_date ? moment(ele.reco_date).format("Do MMM'YY") : ''
      //           ele.report_expiry = ele.report_expiry ? moment(ele.report_expiry).format("Do MMM'YY") : ''
      //           if (ele.scrip_expiry >= this.todaysDate || ele.scrip_expiry == false || ele.scrip_expiry == "0000-00-00") {
      //             ele['isExpired'] = false;
      //           } else {
      //             ele['isExpired'] = true;
      //           }
      //           if (userId && userId != 'guest') {
      //             ele['isAllowed'] = (!this.shared.userId || this.shared.userId == 'guest') ? 'Y' : this.utils.isSegmentAllowed(ele.segment_id);
      //           } else {
      //             ele['isAllowed'] = true
      //           }
      //           //ele.isNonScrip=true
      //           ele.scripData = this.utils.checkFromWatchlist(ele.segment_id, ele.token);
      //           ele.segmentTokenString = { 'SegmentId': ele.segment_id, 'Token': ele.token };
      //           ele.isAdded = ele.scripData && ele.scripData.ProfileId;
      //           ele.title1 = this.category_typeConf[ele.subcategory_name] ? this.category_typeConf[ele.subcategory_name].title : '';
      //           ele.desc = this.category_typeConf[ele.subcategory_name] ? this.category_typeConf[ele.subcategory_name].desc : '';
      //           if (ele.datapoints && ele.datapoints.length) {
      //             ele.priceData = {}
      //             ele.datapoints.forEach(sub => {
      //               sub.key = (sub.key == 'cmp') ? 'entry_price' : sub.key;
      //               if(Number(sub.value)!=NaN)
      //               sub.value = Number(sub.value);
      //               ele.priceData[sub.key] = sub
      //             })
      //           }
      //           ele.segmentName = this.utils.getSegmentDetail(ele.segment_id, 'SegmentName') + ((ele.series) ? (" (" + ele.series + ")") : "");
      //           return ele
      //         })
      //         this.reportList.emit(this.reports)
      //         this.getSocketData();
      //         this.getMultiTouchLineData();
      //         // setTimeout(() => {
      //         //   if (this.config.filter.report_uuid && this.reports && this.reports[0]) {
      //         //     this.OpenDrawer(this.reports[0], true)
      //         //   }
      //         // }, 1000);
      //     //  }
      //       // this.fundamental = this.reports.filter(x => {
      //       //   if (this.shared.userId && this.shared.userId == 'guest') {
      //       //     return (new moment(x.published_date, 'YYYY-MM-DD') < new moment(this.utils.getCurrentDate(), 'YYYY-MM-DD')) && x.category_id == 1; // logic to remove today's report i.e. dont show today's reports for guest users added by reshmaC on 09/02/2021
      //       //   } else {
      //       //     return x.category_id == 1;
      //       //   }
      //       // });
      //       // this.technical = this.reports.filter(x => {
      //       //   if (this.shared.userId && this.shared.userId == 'guest') {
      //       //     return (new moment(x.published_date, 'YYYY-MM-DD') < new moment(this.utils.getCurrentDate(), 'YYYY-MM-DD')) && x.category_id == 2; // logic to remove today's report i.e. dont show today's reports for guest users added by reshmaC on 09/02/2021
      //       //   } else {
      //       //     return x.category_id == 2;
      //       //   }
      //       // });
      //       // this.activeTab = this.fundamental.length > 0 ? 1 : 2;
      //       // this.isServiceHit = false;
      //       // this.reports.forEach((x, index) => {
      //       //   if (!this.utils.removeTodaysReports(x)) { // logic to remove today's report i.e. dont show today's reports for guest users added by reshmaC on 09/02/2021
      //       //     this.reports.splice(index, 1);
      //       //   } else {
      //       //     let Price = x.matched_price || x.matched_price == 0 ? x.matched_price : x.datapoints[1].value || 0;
      //       //     let EntryPrice = Number(x.datapoints[0].value || 0);
      //       //     let isBuy = x.call_type == 'Buy' || x.call_type == 'Hold' ? true : false;
      //       //     x['achievedPer'] = this.utils.perCalculationOfAchievedReport(EntryPrice, Price, isBuy);
      //       //   }
      //       // });
      //     } else {
      //       this.reports = [];
      //       this.isServiceHit = false;
      //     }
      // }
      console.log("Something Went Wrong", error.error.text);
      this.utils.error('Error', 'Something Went Wrong');
      this.isServiceHit = false;
    });
  }
  /**
  * open buy drawer , when user click buy button for the selected scrip
  * @param event open buy  drawer
  */
  OpenDrawer(rowData, isFromResearch) {
    // this.analytics.emitEvent('visitedResearch' + (this.config.filter.type == 'experts' ? 'Expert' : this.config.filter.type == 'fundamental' ? 'Fundamental' : 'Signal') + (this.config.filter.trade == 'EQ' ? 'Equity' : this.config.filter.trade == 'FO' ? 'Derivative' : this.config.filter.trade == 'COM' ? 'Commodity' : this.config.filter.trade == 'CDS' ? 'Currency' : '') + 'BSDF', this.utils.getUserId() || 'guest', JSON.stringify({ "IP": this.shared.IPAddress }), 1);
    //  this.utils.setTrackMoeEvent('visitedResearch' + (this.config.filter.type == 'experts' ? 'Expert' : this.config.filter.type == 'fundamental' ? 'Fundamental' : 'Signal') + (this.config.filter.trade == 'EQ' ? 'Equity' : this.config.filter.trade == 'FO' ? 'Derivative' : this.config.filter.trade == 'COM' ? 'Commodity' : this.config.filter.trade == 'CDS' ? 'Currency' : '') + 'BSDF', { "User_ID": this.utils.getUserId() || 'guest', "IP": this.shared.IPAddress });
    // if (this.utils.isAuthorized()) {
    let data = JSON.parse(JSON.stringify(rowData));
    let action = data.call_type.toLowerCase();
    if (rowData.isExpired && data.category_name != 'Fundamental') {
      data && action.indexOf('subscribe') > -1 ? this.utils.error('Attention!!', data.message) : this.utils.error('Error', 'Script Expired');
      return;
    }
    data.ExchangeSegment = this.utils.getSegmentDetail(data.SegmentId, 'SegmentName');
    data['SecName'] = data.scrip_name;
    if (data) {
      //  data.isFromResearch = isFromResearch;
      // data.research_trade = this.config.filter.trade
      //  data.research_type = this.config.filter.type
      //data.isFromNotification = this.config.filter.report_uuid
      data.isHold = action.indexOf('hold') > -1;
      /*    data.estimated_profit = this.config.filter.type
         data.estimated_loss = this.config.filter.type */
      if (action.indexOf('buy') > -1 || data.isHold && isFromResearch) {
        // 
        // this.utils.setTrackMoeEvent((data.isHold && isFromResearch) ? 'clickedResearchDetailPage' : 'clickedResearchBuy', { "User_ID": this.utils.getUserId() || 'guest', "IP": this.shared.IPAddress });
        this.utils.broadcast('openBuySellDrawer', {
          'scrip': data,
          'action': 1
        });
        event ? event.stopPropagation : '';
      } else if (action.indexOf('sell') > -1) {
        // 
        // this.utils.setTrackMoeEvent('clickedResearchSell', { "User_ID": this.utils.getUserId() || 'guest', "IP": this.shared.IPAddress });
        this.utils.broadcast('openBuySellDrawer', {
          'scrip': data,
          'action': 2
        });
        event ? event.stopPropagation : '';
      } /*  else if (action.indexOf('subscribe') > -1) {
        !data.message ? this.utils.broadcast('openIPOSubscribe', this.ipoData[data.symbol]) : this.utils.error('Attention!!', data.message);
        } */
    }
    // } else {
    //   this.showPreLogin = true;
    //   this.renderer.setStyle(document.body, 'overflow', 'hidden');
    // }
  }
  /**
  * Socket Connection Function
  */
  getSocketData() {
    if (this.multiLineSubscription) {
      this.multiLineSubscription.unsubscribe;
    }
    this.multiLineSubscription = this.utils.broadcastObservable('watchlist').subscribe(res => {
      let scrip = this.reports.filter((obj, index) => {
        return res[0]['1'] == obj.SegmentId && obj.token == res[0]["7"];
      });
      scrip.forEach(ele => {
        if (scrip.length > 0 && this.utils.isUpdatedData(ele, res[0])) {
          let priceDivisor = this.utils.getDefaultPriceDivisor(res[0]["1"], res[0]["7"]);
          let obj = ele;
          obj.prevChange = (Number(res[0]['8']) / priceDivisor || 0) - (obj.LTP || 0);
          obj['PrvClose'] = obj.PrevClose || res[0]['76'] / priceDivisor;
          obj.LTP = Number(res[0]["8"]) == 0 ? obj['PrvClose'] / priceDivisor : (res[0]["8"] || 0) / priceDivisor; // if LTP == 0 then show prevClose (10/05/2021)
          //console.log(ele.Token, "watchlist').subsc obj.SegmentId",ele.SegmentId , obj.LTP )
          // console.log("watchlist').subsc", res[0]["8"]) 
          obj.Change = ((res[0]['8'] == 0 ? obj['PrvClose'] : res[0]['8'] || 0) - obj['PrvClose']) / priceDivisor;
          obj['ChangePer'] = obj['Change'] / (obj['PrvClose'] / priceDivisor) * 100;
          // obj.LTP = res[0]["8"] / res[0]["399"];
          obj.class = obj['Change'] < 0 ? 'down' : obj['Change'] > 0 ? 'up' : '';
          obj.Change = obj.Change;
          obj.ChangePer = obj.ChangePer;
          //  console.log("watchlist').subsc",obj.LTP )
          if (obj.LTP && obj.priceData['stop_loss'] && obj.priceData['target']) {
            console.log(obj, "obj.priceData");
            if (obj.status == "Booked Part Profit" || obj.status == "Booked Profit" || obj.status == "Exit") {
              //   obj.priceData['ltp_price_percentage'] = ((Number(obj.matched_price) - Number(obj.priceData['stop_loss'].value)) / (Number(obj.priceData['target'].value) - Number(obj.priceData['stop_loss'].value))) * 90 - 3
              obj.priceData['ltp_price_percentage'] = Number(obj.priceData['stop_loss'].value) == 0 ? ((Number(obj.priceData['target'].value) + Number(obj.LTP)) / Number(obj.priceData['target'].value) - 1) * 90 : (Number(obj.matched_price) - Number(obj.priceData['stop_loss'].value)) / (Number(obj.priceData['target'].value) - Number(obj.priceData['stop_loss'].value)) * 90 - 3;
              if (obj.priceData['entry_price'] || obj.priceData['cmp']) obj.priceData['entry_price_percentage'] = Number(obj.matched_price) / (Number(obj.priceData['entry_price'].value) || Number(obj.priceData['cmp'].value)) * 90 - 3;
              console.log(obj.priceData['entry_price_percentage'], "obj.priceData['entry_price_percentage']1");
            } else {
              //  obj.priceData['ltp_price_percentage'] = ((Number(obj.LTP) - Number(obj.priceData['stop_loss'].value)) / (Number(obj.priceData['target'].value) - Number(obj.priceData['stop_loss'].value))) * 90 - 3
              obj.priceData['ltp_price_percentage'] = Number(obj.priceData['stop_loss'].value) == 0 ? ((Number(obj.priceData['target'].value) + Number(obj.LTP)) / Number(obj.priceData['target'].value) - 1) * 90 : (Number(obj.LTP) - Number(obj.priceData['stop_loss'].value)) / (Number(obj.priceData['target'].value) - Number(obj.priceData['stop_loss'].value)) * 90 - 3;
              console.log("ltp_price_percentage2", obj.priceData['ltp_price_percentage']);
              if (obj.priceData['entry_price'] || obj.priceData['cmp']) obj.priceData['entry_price_percentage'] = Number(obj.LTP) / (Number(obj.priceData['entry_price'].value) || Number(obj.priceData['cmp'].value)) * 90 - 3;
              console.log(obj.priceData['entry_price_percentage'], "obj.priceData['entry_price_percentage']1");
            }
            // console.log("-RESEARCH-",obj)
            // ele.priceData['part_profit_percentage'] =  ((Number(res.matched_price) - Number(ele.priceData['stop_loss'].value)) / (Number(ele.priceData['target'].value) - Number(ele.priceData['stop_loss'].value))) * 85
            // console.log("llll",res.matched_price)
          }
        }
      });
    });
    this.reports = this.reports ? [...this.reports] : [];
  }
  /**
   * Get MultiTouchLine Data
   */
  getMultiTouchLineData() {
    // if ((this.utils.isAuthorized() && this.isSegmentAllowed == 'Y') || ((!this.shared.userId || this.shared.userId == 'guest'))) {
    if (this.utils.isAuthorized() || !this.shared.userId || this.shared.userId == 'guest') {
      const userId = this.utils.getUserId();
      if (userId && userId != 'guest' && this.reports && this.reports.length) {
        let datapoints = [];
        this.reports.forEach(item => {
          datapoints.push({
            SegmentId: item.segment_id,
            Token: item.token
          });
        });
        // this.toggleAddRemove(item);
        this.utils.subscribeMultitouchline(datapoints);
        // this.utils.subscribeMultitouchline(this.reports);
      }
      const tokens = this.utils.generateTokens(this.reports, 'segment_id', 'token');
      const payload = {
        'UserId': !userId || userId == 'guest' ? 'guest' : userId,
        'SessionId': this.utils.getSessionId() || '',
        'MultipleTokens': tokens
      };
      this.utils.commonGetMultipleTouchLineCall(payload).subscribe(data => {
        if (data.Status == 'Success' && data.Response && data.Response.lMT && data.Response.lMT.length) {
          const multitouchLineResponse = data.Response.lMT;
          console.log("reports multitouchline4 ", JSON.parse(JSON.stringify(this.reports)));
          //  console.log("payload multitouchLineResponse",multitouchLineResponse)
          multitouchLineResponse.forEach((element, index) => {
            //  console.log(this.reports[index].segment_id, "payload SegmentId2",element['SegmentId'] )
            if (element['SegmentId'] == this.reports[index].segment_id && element['Token'] == this.reports[index].token) {
              Object.assign(element, Object.assign(this.reports[index], element));
              //  console.log("payload SegmentId",element['SegmentId'] )
              element['prevChange'] = 0;
              element['PrvClose'] = element['LTP'] - element['Change'];
              element['PrvClose'] = element['PrvClose'] / element['PriceDivisor'];
              element['LTP'] = Number(element['LTP'] / element['PriceDivisor']);
              element['Change'] = element['Change'] / element['PriceDivisor'];
              element['ChangePer'] = element['Change'] / element['PrvClose'] * 100;
              element.class = element['Change'] < 0 ? 'down' : element['Change'] > 0 ? 'up' : '';
              element['Change'] = element['Change'];
              element['ChangePer'] = element['ChangePer'];
              element.companyURL = (this.reports[index].scrip_name || "").trim().toLowerCase().replace(/\s/g, '-').replace(/\//g, '').replace(/(-)+/g, '-');
              if (element.LTP && element.priceData && element.priceData['stop_loss'] && element.priceData['target']) {
                if (element.status == "Booked Part Profit" || element.status == "Booked Profit") {
                  //   element.priceData['ltp_price_percentage'] = ((Number(element.matched_price) - Number(element.priceData['stop_loss'].value)) / (Number(element.priceData['target'].value) - Number(element.priceData['stop_loss'].value))) * 90
                  element.priceData['ltp_price_percentage'] = Number(element.priceData['stop_loss'].value) == 0 ? ((Number(element.priceData['target'].value) + Number(element.LTP)) / Number(element.priceData['target'].value) - 1) * 90 : (Number(element.matched_price) - Number(element.priceData['stop_loss'].value)) / (Number(element.priceData['target'].value) - Number(element.priceData['stop_loss'].value)) * 90 - 3;
                  if (element.priceData['entry_price'] || element.priceData['cmp']) element.priceData['entry_price_percentage'] = Number(element.matched_price) / (Number(element.priceData['entry_price'].value) || Number(element.priceData['cmp'].value)) * 90 - 3;
                  console.log(element.priceData['entry_price_percentage'], "obj.priceData['entry_price_percentage']111");
                } else {
                  //     element.priceData['ltp_price_percentage'] = ((Number(element.LTP) - Number(element.priceData['stop_loss'].value)) / (Number(element.priceData['target'].value) - Number(element.priceData['stop_loss'].value))) * 90
                  element.priceData['ltp_price_percentage'] = Number(element.priceData['stop_loss'].value) == 0 ? ((Number(element.priceData['target'].value) + Number(element.LTP)) / Number(element.priceData['target'].value) - 1) * 90 : (Number(element.LTP) - Number(element.priceData['stop_loss'].value)) / (Number(element.priceData['target'].value) - Number(element.priceData['stop_loss'].value)) * 90 - 3;
                  console.log("ltp_price_percentage", element.priceData['ltp_price_percentage']);
                  if (element.priceData['entry_price'] || element.priceData['cmp']) element.priceData['entry_price_percentage'] = Number(element.LTP) / (Number(element.priceData['entry_price'].value) || Number(element.priceData['cmp'].value)) * 90 - 3;
                  console.log(element.priceData['entry_price_percentage'], "obj.priceData['entry_price_percentage']111");
                }
                // ele.priceData['part_profit_percentage'] =  ((Number(res.matched_price) - Number(ele.priceData['stop_loss'].value)) / (Number(ele.priceData['target'].value) - Number(ele.priceData['stop_loss'].value))) * 85
                // console.log("llll",res.matched_price)
              }
              this.reports[index] = Object.assign(this.reports[index], element);
            }
          });
          this.reports = [...this.reports];
        }
      });
    }
  }
  gotoReports(rowData) {
    let isFromResearch = true;
    if (this.utils.isAuthorized()) {
      let data = JSON.parse(JSON.stringify(rowData));
      let action = data.call_type.toLowerCase();
      if (rowData.isExpired) {
        data && action.indexOf('subscribe') > -1 ? this.utils.error('Attention!!', data.message) : this.utils.error('Error', 'Script Expired');
        return;
      }
      data.ExchangeSegment = this.utils.getSegmentDetail(data.SegmentId, 'SegmentName');
      data['SecName'] = data.scrip_name;
      if (data) {
        data.isFromResearch = isFromResearch;
        data.research_trade = "EQ";
        data.research_type = 'fundamental';
        //  data.isFromNotification = this.config.filter.report_uuid
        data.isHold = action.indexOf('hold') > -1;
        /*    data.estimated_profit = this.config.filter.type
           data.estimated_loss = this.config.filter.type */
        if (action.indexOf('buy') > -1 || data.isHold && isFromResearch) {
          // 
          // this.utils.setTrackMoeEvent((data.isHold && isFromResearch) ? 'clickedResearchDetailPage' : 'clickedResearchBuy', { "User_ID": this.utils.getUserId() || 'guest', "IP": this.shared.IPAddress });
          this.utils.broadcast('openBuySellDrawer', {
            'scrip': data,
            'action': 1
          });
          event ? event.stopPropagation : '';
        } else if (action.indexOf('sell') > -1) {
          // 
          // this.utils.setTrackMoeEvent('clickedResearchSell', { "User_ID": this.utils.getUserId() || 'guest', "IP": this.shared.IPAddress });
          this.utils.broadcast('openBuySellDrawer', {
            'scrip': data,
            'action': 2
          });
          event ? event.stopPropagation : '';
        } /*  else if (action.indexOf('subscribe') > -1) {
          !data.message ? this.utils.broadcast('openIPOSubscribe', this.ipoData[data.symbol]) : this.utils.error('Attention!!', data.message);
          } */
      }
    } else {
      // this.showPreLogin = true;
      // this.renderer.setStyle(document.body, 'overflow', 'hidden');
    }
    // let categoryId = this.utils.getSlugOrId('category', item.category_id);
    // let subCategoryId = this.utils.getSlugOrId(item.category_id, item.subcategory_id);
    // let companyURL = (item.scrip_name || "").trim().toLowerCase().replace(/\s/g, '-').replace(/\//g, '').replace(/(-)+/g, '-');
    // let url = categoryId + '/' + subCategoryId + '/' + (companyURL || this.companyName) + '/' + item.report_id;
    // if (item.id) {
    //   url += '/' + item.id;
    // }
    // this.router.navigate(['/research-report/' + url]);
  }
  /** Unsubscribe Multi touchline subscription on Ng destroy */
  ngOnDestroy() {
    if (this.watchlistNameSubscription) this.watchlistNameSubscription.unsubscribe();
    if (this.scripAddSubscription) this.scripAddSubscription.unsubscribe();
    if (this.scripRemoveSubscription) this.scripRemoveSubscription.unsubscribe();
    if (this.multiLineSubscription) {
      this.multiLineSubscription.unsubscribe;
    }
  }
  static {
    this.ctorParameters = () => [{
      type: src_app_services_rest_company_service__WEBPACK_IMPORTED_MODULE_2__.CompanyService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Renderer2
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
    }, {
      type: src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_4__.UtilsService
    }, {
      type: src_app_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__.SharedDataService
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute
    }];
  }
  static {
    this.propDecorators = {
      mappedTokens: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input,
        args: ['mappedTokens']
      }],
      changeOptFut: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input,
        args: ['changeOptFut']
      }],
      reportList: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Output,
        args: ['reportList']
      }]
    };
  }
};
ReportsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-reports',
  template: _reports_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgStyle, _directives_show_focus_directive__WEBPACK_IMPORTED_MODULE_6__.ShowFocusDirective, _angular_common__WEBPACK_IMPORTED_MODULE_11__.LowerCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DecimalPipe, _pipes_condense_pipe__WEBPACK_IMPORTED_MODULE_7__.CondensePipe],
  styles: [(_reports_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__metadata)("design:paramtypes", [src_app_services_rest_company_service__WEBPACK_IMPORTED_MODULE_2__.CompanyService, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Renderer2, _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router, src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_4__.UtilsService, src_app_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__.SharedDataService, _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute])], ReportsComponent);


/***/ }),

/***/ 29967:
/*!*************************************************************************!*\
  !*** ./src/app/company-module/segment-token/segment-token.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SegmentTokenComponent: () => (/* binding */ SegmentTokenComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _segment_token_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./segment-token.component.html?ngResource */ 68241);
/* harmony import */ var _segment_token_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./segment-token.component.scss?ngResource */ 71613);
/* harmony import */ var _segment_token_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_segment_token_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _ngu_carousel__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngu/carousel */ 77494);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 1807);
/* harmony import */ var _directives_dropdown_dropdown_open_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../directives/dropdown/dropdown-open.directive */ 55720);
/* harmony import */ var _directives_dropdown_dropdown_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../directives/dropdown/dropdown.directive */ 51429);
/* harmony import */ var _directives_scroll_to_element_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../directives/scroll-to-element.directive */ 41202);
/* harmony import */ var _directives_show_focus_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../directives/show-focus.directive */ 57862);
/* harmony import */ var _pipes_segment_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pipes/segment.pipe */ 39995);
/* harmony import */ var _pipes_value_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/value.pipe */ 50615);
/* harmony import */ var _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/seo/seo.service */ 44897);
/* harmony import */ var _services_sockets_broadcaster__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/sockets/broadcaster */ 28510);
/* harmony import */ var _services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../services/analytics/analytics.service */ 50213);
/* harmony import */ var _services_rest_company_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../services/rest/company.service */ 12744);
/* harmony import */ var _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../../services/shared-data/shared-data.service */ 46013);
/* harmony import */ var _services_sockets_socket_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../../services/sockets/socket.service */ 6312);
/* harmony import */ var _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./../../services/utils/utils.service */ 89893);





















/**segment Token view and html linking */
let SegmentTokenComponent = class SegmentTokenComponent {
  /**
   * scripDetail emitted
   */
  // @Output('IsEventAvailable') IsEventAvailable: EventEmitter<any> = new EventEmitter<any>();
  /**
   * Dependency injection and varaible intialization
   * @param activatedRoute for getting the present Route
   * @param companyService for api call
   * @param utilsService for data manipulation
   * @param router for navigating to different component
   * @param location for url change without reloading the component
   * @param sharedDataService for data shared between two components
   * @param renderer for popup
   * @param zone for delaying
   * @param socketService for socket
   * @param seo SeoService instance
   * @param broadcaster for broadcating changes
   * @param googleAnalyticsEventsService for analytics(gtm)
   */
  constructor(activatedRoute, companyService, utilsService, router, location, sharedDataService, renderer, zone, seo, socketService, broadcaster, googleAnalyticsEventsService) {
    this.activatedRoute = activatedRoute;
    this.companyService = companyService;
    this.utilsService = utilsService;
    this.router = router;
    this.location = location;
    this.sharedDataService = sharedDataService;
    this.renderer = renderer;
    this.zone = zone;
    this.seo = seo;
    this.socketService = socketService;
    this.broadcaster = broadcaster;
    this.googleAnalyticsEventsService = googleAnalyticsEventsService;
    /**
     * preLogin Variable
     */
    this.showPreLogin = false;
    /**
     * config for maptoken array
     */
    this.tokenArray = [{
      key: "NSEToken",
      segment: "NSE",
      optionType: "NSE",
      segmentId: 1,
      secNameKey: "NSEScripName"
    }, {
      key: "BSEToken",
      segment: "BSE",
      optionType: "BSE",
      segmentId: 3,
      secNameKey: "BSEScripName"
    }, {
      key: "NSEFUTToken",
      segment: "NSEFO",
      optionType: "FUT",
      segmentId: 2,
      secNameKey: "NSEFOScripName"
    }, {
      key: "NSEOptCEToken",
      segment: "NSEFO",
      optionType: "CE",
      segmentId: 2,
      secNameKey: "NSEOptionCEName"
    }, {
      key: "NSEOptPEToken",
      segment: "NSEFO",
      optionType: "PE",
      segmentId: 2,
      secNameKey: "NSEOptionPEName"
    }];
    /**
     * showDummy card variable
     */
    this.showDummyObj = true;
    /**
     * showScrip/congtract Info variable
     */
    this.showScripInfo = false;
    this.best5 = new _angular_core__WEBPACK_IMPORTED_MODULE_15__.EventEmitter();
    this.scripDetail = new _angular_core__WEBPACK_IMPORTED_MODULE_15__.EventEmitter();
    this.focusEvents = new _angular_core__WEBPACK_IMPORTED_MODULE_15__.EventEmitter();
    this.mappedTokens = new _angular_core__WEBPACK_IMPORTED_MODULE_15__.EventEmitter();
    this.changeOptFut = {
      label: ""
    };
    this.searchInput = [];
    this.dummyObj = {};
    this.scripInfo = {};
    this.cardInfo = {};
    this.splitResponse = [];
    this.activeSegment = [];
    this.userAccountStatus = {};
    this.tokens = [];
    this.watchlistNames = this.utilsService.getWatchListName(-1) || {};
    this.scripAddSubscription = this.utilsService.broadcastObservable("ScripAdded").subscribe(data => {
      this.isButtonDisabled = false;
      if (this.segmentTokenString.Token == data.Token) {
        this.isAdded = true;
        this.isButtonDisabled = false;
        this.scripData = {
          ProfileId: data.ProfileId,
          scrip: data,
          scripIndex: data.scripIndex
        };
      }
    });
    this.scripRemoveSubscription = this.utilsService.broadcastObservable("ScripRemoved").subscribe(data => {
      if (this.segmentTokenString.Token == data.Token) {
        this.isAdded = false;
        this.isButtonDisabled = false;
      }
    });
    this.watchlistNameSubscription = this.utilsService.broadcastObservable("watchlistRenamed").subscribe(data => {
      this.watchlistNames = data;
    });
    this.buySellSubscription = this.utilsService.broadcastObservable("broadcastBuySell").subscribe(action => {
      if (action == 1) {
        this.buyItem();
      } else {
        this.sellItem();
      }
    });
    this.routeReuseSubscription = this.utilsService.broadcastObservable("routeResuse").subscribe(data => {
      if ([1, 2, 3, 5, 6, 7, 8, 13, 14, 4, 38, 39].indexOf(Number(data.SegmentId)) > -1 && this.exchangeType != "indices") {}
      if ((data.SegmentId == 1 || data.SegmentId == 3 || data.SegmentId == 2 || data.SegmentId == 4) && this.exchangeType != "indices") {
        let item = this.mapTokenArray.filter(obj => {
          return obj.Token == data.Token;
        });
        if (item && item.length > 0) {
          //
          this.gotoKeyInfo(item[0]);
        }
      }
    });
    this.multiTouchlineSubscription = this.broadcaster.on("checkUnsubscription").subscribe(data => {
      if (data.source != "company" && data.data && data.data.length > 0 && this.mapTokenArray.length > 0) {
        let tokenList = [];
        let dataTokens = this.utilsService.generateTokens(data.data).split(",");
        let watchTokens = this.utilsService.generateTokens(this.mapTokenArray).split(",");
        let commonToken = watchTokens.filter(token => {
          return dataTokens.indexOf(token) > -1;
        });
        commonToken.forEach(element => {
          let tokenSegment = element.split("@");
          tokenList.push({
            SegmentId: tokenSegment[0],
            Token: tokenSegment[1]
          });
        });
        this.utilsService.subscribeMultitouchline(tokenList);
      }
    });
    this.socketStatusSubscription = this.broadcaster.on("internetConnectionStatus").subscribe(isConnected => {
      // console.debug('reconnect socket request broadcast received segment');
      this.utilsService.subscribeMultitouchline(this.mapTokenArray);
      this.sharedDataService.setActiveSubscription = [this.token, this.segmentId];
      this.utilsService.subscribeBest5(this.activeSegment);
    });
    this.keyPressSubscription = this.utilsService.broadcastObservable("escapeKeyPressed").subscribe(() => {
      if (this.showScripInfo) {
        this.closeSecurityInfo();
      } else if (this.showPreLogin) {
        this.closePreLogin();
      }
    });
    this.popupCloseSubscription = this.utilsService.broadcastObservable("closePopups").subscribe(data => {
      if (this.showScripInfo) {
        this.closeSecurityInfo();
      } else if (this.showPreLogin) {
        this.closePreLogin();
      }
    });
    this.carouselTile = {
      grid: {
        xs: 1,
        sm: 2,
        md: 2,
        lg: 5,
        all: 0
      },
      speed: 1000,
      slide: 2,
      point: {
        visible: true
      },
      touch: true
    };
    this.isEventToday = false;
  }
  mouseover(event) {
    if (event && event.target && event.target.parentElement && event.target.parentElement.parentElement && event.target.parentElement.parentElement.className == "meeting-cart" && this.eventRef.isEventAvailable && this.eventData && this.eventData.length) {
      this.utilsService.setTrackMoeEvent("SmCompanyEvent", {
        User_ID: this.utilsService.getUserId() || "guest",
        CompanyName: this.scripInfo.SecNameNew,
        IP: this.sharedDataService.IPAddress
      });
      this.googleAnalyticsEventsService.emitEvent("SmCompanyEvent", this.utilsService.getUserId() || "guest", JSON.stringify({
        IP: this.sharedDataService.IPAddress,
        CompanyName: this.scripInfo.SecNameNew
      }), 1);
    }
  }
  /**
   * change in url is checked, accordigly various function is called on basis of url parameters.
   */
  ngOnInit() {
    // this.initVoiceInput();
    this.userAccountStatus = this.utilsService.getUserAccountStatus();
    this.watchListData = this.utilsService.getWatchListCache(-1);
    this.watchlistNames = this.utilsService.getWatchListName(-1) || {};
    this.routeParamsSubscription = this.activatedRoute.params.subscribe(params => {
      if (Number(params["token"]) && Number(params["segment"])) {
        let localStorageToken = JSON.parse(localStorage.getItem("presentToken"));
        let segmentToken = params["segment"] + "&" + params["token"];
        if (localStorageToken != segmentToken) {
          localStorage.setItem("presentToken", JSON.stringify(segmentToken));
        }
        let companyData = {
          companyName: params["companyName"],
          Token: params["token"],
          SegmentId: params["segment"]
        };
        var lastVisitedData = {};
        let user = this.utilsService.getUserId() || "guest";
        const userSearchDataString = localStorage.getItem("lastVisitedCompany");
        if (userSearchDataString) {
          lastVisitedData = JSON.parse(userSearchDataString);
        }
        if (!lastVisitedData[user] || lastVisitedData[user].length === 0) {
          lastVisitedData[user] = [companyData];
        } else {
          let lastVisit = lastVisitedData[user].filter(obj => {
            return obj.Token == companyData.Token;
          });
          if (lastVisit.length > 0) {
            lastVisitedData[user].splice(lastVisitedData[user].indexOf(lastVisit[0]), 1);
            lastVisitedData[user].splice(0, 0, companyData);
          } else {
            lastVisitedData[user].splice(0, 0, companyData);
          }
          lastVisitedData[user] = lastVisitedData[user].slice(0, 5);
        }
        localStorage.setItem("lastVisitedCompany", JSON.stringify(lastVisitedData));
        if (this.activeSegment.length > 0) {
          this.utilsService.unSubscribeBestFive(this.activeSegment);
          this.utilsService.unSubscribeMultitouchline(this.mapTokenArray, "company");
        }
        this.mapTokenArray = [];
        this.splitResponse = [];
        this.dummyObj = {
          SegmentId: this.segmentId,
          Token: this.token
        };
        this.scripInfo = {};
        this.cardInfo = {};
        this.expiryScrip = null;
        this.exchangeType = params["type"];
        if (this.exchangeType != "indices") {
          this.segmentId = params["segment"];
          this.token = params["token"];
          this.companyName = params["companyName"];
          this.activeSegment = [{
            Token: this.token,
            SegmentId: this.segmentId
          }];
          this.getScripDetail(this.token, this.segmentId, this.dummyObj);
          this.toggleAddRemove(this.segmentId, this.token);
          this.sharedDataService.setActiveSubscription = [this.token, this.segmentId];
          this.utilsService.subscribeBest5([{
            Token: this.token,
            SegmentId: this.segmentId
          }]);
          this.showDummyObj = true;
          if ([1, 2, 3, 5, 6, 7, 8, 13, 14, 4, 38, 39].indexOf(Number(this.segmentId)) > -1 && this.exchangeType != "indices") {
            this.getMappedTokenResponse(this.token, this.segmentId);
          } else {
            this.mappedTokens.emit(this.activeSegment);
            this.getBestFive(this.token, this.segmentId, this.dummyObj);
          }
          // if ((this.segmentId == 1 || this.segmentId == 2 || this.segmentId == 3) && this.exchangeType != 'indices') {
          //   this.getMappedTokenResponse(this.token, this.segmentId);
          // } else {
          //   this.mappedTokens.emit(this.activeSegment)
          // }
        }
      }
    });
    this.getMapTokenSocket();
    this.getBestFiveSocket();
    window.addEventListener("scroll", () => {
      this.zone.run(() => {
        if ((document.body.scrollTop || document.documentElement.scrollTop) > 0) {
          this.isScroll = true;
        } else {
          this.isScroll = false;
        }
      });
    });
    let walkThrghObj = this.utilsService.getWalkThrgh() || {};
    //
    if (walkThrghObj.walkthrough && !walkThrghObj.walkthrough["companyPage"] && !this.sharedDataService.isMobileScreen && this.sharedDataService.userId && this.sharedDataService.userId != "guest") {
      setTimeout(() => {
        let viewName = document.getElementById("button-add-remove-watchlist");
        //
        if (viewName) {
          this.renderer.setStyle(document.body, "overflow", "hidden");
          this.sharedDataService.showWalkThrough["showWalkThrough"] = true;
          this.sharedDataService.showWalkThrough["feature"] = "companyPage";
          this.sharedDataService.showWalkThrough["count"] = 0;
          this.sharedDataService.showWalkThrough["presentObj"] = this.utilsService.walkthrgConfig["companyPage"][0];
          let coordinate = viewName.getBoundingClientRect();
          this.sharedDataService.showWalkThrough["left"] = coordinate.left + window.scrollX - 20; //coordinate['left'] + 205;
          this.sharedDataService.showWalkThrough["top"] = coordinate["top"] + window.scrollY + 40; //coordinate['bottom'] + 20;
        }
      }, 300);
    }
    this.walkThroughSubscription = this.broadcaster.on("companyPageWalkthrgh").subscribe(res => {
      let string = res["id"];
      if (walkThrghObj.walkthrough && !walkThrghObj.walkthrough["companyPage"] && !this.sharedDataService.isMobileScreen && this.sharedDataService.userId && this.sharedDataService.userId != "guest") {
        if (this.activeSegment[0].SegmentId == 1 || this.activeSegment[0].SegmentId == 3 || this.activeSegment[0].SegmentId == 4 || this.activeSegment[0].SegmentId == 2) {
          if (res["id"] == "toggleCard") {
            let viewName = document.getElementById("toggleCard");
            let coordinate = viewName.getBoundingClientRect();
            this.sharedDataService.showWalkThrough["left"] = coordinate.left + window.scrollX - 20; //coordinate['x'];
            this.sharedDataService.showWalkThrough["top"] = coordinate["top"] + window.scrollY + 40; //coordinate['x'];
          } else if (res["id"] == "graphHistory") {
            let viewName = document.getElementById("graphHistory");
            let coordinate = viewName.getBoundingClientRect();
            this.sharedDataService.showWalkThrough["left"] = coordinate.left + window.scrollX - 20; //coordinate['left'] - 120;
            this.sharedDataService.showWalkThrough["top"] = coordinate["top"] + window.scrollY + 40; //coordinate['top'] - 220;
          } else if (res["id"] == "button-add-remove-watchlist") {
            let viewName = document.getElementById("button-add-remove-watchlist");
            if (viewName) {
              let coordinate = viewName.getBoundingClientRect();
              this.sharedDataService.showWalkThrough["left"] = coordinate.left + window.scrollX - 20; //coordinate['left'] + 205;
              this.sharedDataService.showWalkThrough["top"] = coordinate["top"] + window.scrollY + 40; //coordinate['bottom'] + 20;
            }
          }
        } else {
          this.sharedDataService.showWalkThrough["count"] = this.sharedDataService.showWalkThrough["count"] + 1;
        }
      }
    });
    this.windowActiveSubscription = this.utilsService.broadcastObservable("windowActive").subscribe(res => {
      if (res && (!this.sharedDataService.userId || this.sharedDataService.userId == "guest") && document.hasFocus()) {
        if (this.preLoginSubscription) this.getPreLoginInterval();
        if (this.preLoginSubscription) this.preLoginSubscription.unsubscribe();
        this.preLoginSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.timer)(60000, 60000).subscribe(() => {
          this.getPreLoginInterval();
        });
      } else if (!res) {
        if (this.preLoginSubscription) this.preLoginSubscription.unsubscribe();
      }
    });
  }
  /**
   * Set Dynamic Meta for Given Scrip
   * @param scripInfo Details of scrip to be set
   */
  setDynamicMeta(scripInfo) {
    let key = scripInfo.SegmentId == 1 || scripInfo.SegmentId == 2 || scripInfo.SegmentId == 4 || scripInfo.SegmentId == 3 ? "equity-segment" : scripInfo.SegmentId == 5 || scripInfo.SegmentId == 7 || scripInfo.SegmentId == 6 || scripInfo.SegmentId == 8 ? "commodity-segment" : "currency-segment";
    let companyName = scripInfo.SegmentId == 1 || scripInfo.SegmentId == 3 ? scripInfo.SecDesc : scripInfo.SecName;
    companyName = companyName.indexOf("|") > -1 ? companyName.substring(0, scripInfo.SecName.indexOf("|")) : companyName;
    let expiry = scripInfo.SegmentId == 1 || scripInfo.SegmentId == 3 ? "" : scripInfo.SecName.indexOf("|") > -1 ? scripInfo.SecName.substring(scripInfo.SecName.indexOf("|") + 1) : "";
    let optionType = (scripInfo.OT || "").trim() == "XX" ? " FUT" : " " + (scripInfo.OT || "").trim();
    let strikePrice = scripInfo.StrikePrice && scripInfo.StrikePrice > 0 ? " " + this.utilsService.segmentTransform((scripInfo.StrikePrice || 0) / (scripInfo.PriceDivisor || 100), scripInfo.SegmentId, true) : "";
    expiry = expiry ? "(" + this.utilsService.changeCurrentDateFormat(expiry, "DDMMMYY", "DD-MMM-YY") + ")" : "";
    // let data = {
    //   'CompanyName': companyName + optionType + strikePrice + expiry + '|' + scripInfo.ExchangeSegment,
    //   'year': this.utilsService.getCurrentDateFormat('YYYY'),
    //   'ExchangeSegment': scripInfo.ExchangeSegment
    // };
    let data = {
      CompanyName: companyName + optionType + strikePrice + expiry,
      year: this.utilsService.getCurrentDateFormat("YYYY"),
      ExchangeSegment: scripInfo.ExchangeSegment
    };
    this.seo.setDynamicMeta(key, data);
  }
  /**
   * scripDetail api is called
   * @param token token of card selected
   * @param segmentId segmentId of card selected
   * @param obj DummyObj or card selected object
   */
  getScripDetail(token, segmentId, obj) {
    let currentUserId = this.utilsService.getUserId();
    let userId = !currentUserId || currentUserId == "guest" ? "" : currentUserId;
    let payload = {
      nMarketSegmentId: Number(segmentId),
      nToken: Number(token),
      UserId: userId
    };
    this.scripDetailsApi = this.companyService.getScripDetails(payload).subscribe(res => {
      if (res.Status == "Success" && res.Response) {
        //for last visited
        let user = this.utilsService.getUserId() || "guest";
        let lastVisitedData = JSON.parse(localStorage.getItem("lastVisitedCompany")) || {};
        let lastVisit = lastVisitedData[user] ? lastVisitedData[user].filter(obj => {
          return obj.Token == res.Response.Token;
        }) : [];
        if (lastVisit.length > 0) {
          res.Response.IsIndex = 0;
          lastVisit[0] = Object.assign(lastVisit[0], res.Response);
          localStorage.setItem("lastVisitedCompany", JSON.stringify(lastVisitedData));
        }
        let scripRes = JSON.parse(JSON.stringify(res.Response));
        this.scripDetail.emit(scripRes);
        this.setDynamicMeta(scripRes);
        this.scripInfo = Object.assign(this.scripInfo, res.Response);
        if (this.expiryScrip == true) {
          this.expiryScrip = false;
          this.mapTokenArray = this.utilsService.expiryCard(res.Response, this.mapTokenArray);
          //
          let newExpiryObj = this.mapTokenArray.filter(obj => {
            return obj["selectedSegment"] == true;
          });
          newExpiryObj.length > 0 ? this.activeSegment.push(newExpiryObj[0]) : this.activeSegment.push(this.scripInfo);
          this.utilsService.subscribeMultitouchline(this.mapTokenArray);
        } else {
          //
        }
        this.mappedTokens.emit(this.mapTokenArray);
        this.cardInfo["ScripDetail"] = this.scripInfo["SecDesc"];
        this.scripInfo["ContractStartDate"] = this.utilsService.changeCurrentDateFormat(this.scripInfo["ContractStartDate"], "DDMMMMYYYY HH:mm:ss", "DD-MMM-YY HH:mm:ss");
        this.scripInfo["ContractEndDate"] = this.utilsService.changeCurrentDateFormat(this.scripInfo["ContractEndDate"], "DDMMMMYYYY HH:mm:ss", "DD-MMM-YY HH:mm:ss");
        this.scripInfo["TenderEndDate"] = this.utilsService.changeCurrentDateFormat(this.scripInfo["TenderEndDate"], "DDMMMMYYYY HH:mm:ss", "DD-MMM-YY HH:mm:ss");
        this.scripInfo["TenderStartDate"] = this.utilsService.changeCurrentDateFormat(this.scripInfo["TenderStartDate"], "DDMMMMYYYY HH:mm:ss", "DD-MMM-YY HH:mm:ss");
        this.scripInfo["DeliveryStartDate"] = this.utilsService.changeCurrentDateFormat(this.scripInfo["DeliveryStartDate"], "DDMMMMYYYY HH:mm:ss", "DD-MMM-YY HH:mm:ss");
        this.scripInfo["DeliveryEndDate"] = this.utilsService.changeCurrentDateFormat(this.scripInfo["DeliveryEndDate"], "DDMMMMYYYY HH:mm:ss", "DD-MMM-YY HH:mm:ss");
        this.scripInfo["MaturityDate"] = this.utilsService.changeCurrentDateFormat(this.scripInfo["MaturityDate"], "DDMMMMYYYY HH:mm:ss", "DD-MMM-YY HH:mm:ss");
        obj["Token"] = res.Response["Token"];
        obj["SegmentId"] = res.Response["SegmentId"];
        obj["SecName"] = res.Response["SecName"];
        let str = this.scripInfo["SecName"].split("|");
        if ([1, 3, 6, 8, 14, 39].indexOf(Number(segmentId)) > -1) {
          this.scripInfo["ExchangeSegment"] = segmentId == 14 ? "NSECDS SPOT" : segmentId == 39 ? "BSECDS SPOT" : this.scripInfo["ExchangeSegment"];
          obj["segmentName"] = res.Response.ExchangeSegment;
          this.exchangeType = this.scripInfo["ExchangeSegment"];
          this.activeIndex = segmentId == 1 ? 0 : 1;
        } else if (res.Response.OT == "XX" && [6, 8, 14, 39].indexOf(Number(segmentId)) == -1) {
          obj["segmentName"] = res.Response.ExpiryDate + " FUT";
          obj["SecName"] = obj["SecName"].indexOf("FUT") == -1 ? obj["SecName"] + " FUT" : obj["SecName"];
          obj["expiryDate"] = res.Response["ExpiryDate"];
          this.exchangeType = this.scripInfo["ExchangeSegment"] + "-" + (str[1] || "") + " FUT";
          this.activeIndex = this.mapTokenArray.findIndex(item => item.expiryDate == res.Response["ExpiryDate"]);
        } else if (res.Response.OT == "CE") {
          obj["segmentName"] = str[1];
          obj["expiryDate"] = res.Response["ExpiryDate"];
          this.exchangeType = this.scripInfo["ExchangeSegment"] + "-" + str[1];
          obj["strikePrice"] = this.scripInfo["StrikePrice"];
          this.activeIndex = this.mapTokenArray.findIndex(item => item.type == "CE");
        } else if (res.Response.OT == "PE") {
          obj["segmentName"] = str[1];
          obj["expiryDate"] = res.Response["ExpiryDate"];
          this.exchangeType = this.scripInfo["ExchangeSegment"] + "-" + str[1];
          obj["strikePrice"] = this.scripInfo["StrikePrice"];
          this.activeIndex = this.mapTokenArray.findIndex(item => item.type == "PE");
        }
        let clickPresent = this.utilsService.getBuySellClick() || "";
        if (clickPresent) {
          setTimeout(() => {
            this.utilsService.broadcast("broadcastBuySell", clickPresent === "buy" ? 1 : 2);
            this.utilsService.clear("companyClick");
          }, 500);
        }
        // } else if (this.utilsService.isSessionExpired(res.Reason)) {
        //   if(this.sharedDataService.isSSO){
        //     this.utilsService.sessionExpireHandling()
        //     return
        //   }
        //   this.utilsService.error("Session Expired", "Please Login Again");
        //   this.utilsService.postFeatureCount();
        //   this.utilsService.clearLoginDetails();
        //   this.sharedDataService.userId = null;
        //   this.router.navigate(["auth/login"]);
      } else {
        this.utilsService.error("Error", "Something went wrong");
      }
    });
  }
  /**
   * if it is guest user than keyInfo api is called otherwise bestFive api is called bestFive Api is called,bestFive Response is assigned to dummy card
   * api Response is assigned to dummy card
   * @param token token of card selected
   * @param segment segmentId of card selected
   * @param obj DummyObj or card selected object
   */
  getBestFive(token, segment, obj) {
    if (!this.sharedDataService.userId || this.sharedDataService.userId == "guest") {
      let string;
      let userId = this.utilsService.getUserId() || "guest";
      let keyInfoPayload = {
        UserId: userId ? userId : "",
        SessionId: this.utilsService.getSessionId() || "",
        Token: token,
        SegmentId: segment
      };
      this.keyInfoApi = this.companyService.getKeyInfo(keyInfoPayload).subscribe(res => {
        if (res.Status === "Success" && res.Response) {
          let newB5 = {};
          let keyInfoData = res.Response;
          let LUT = this.utilsService.changeCurrentDateFormat(keyInfoData.LUT, "DD-MM-YYYY HH:mm:ss", "DD-MMM-YY HH:mm:ss");
          let LTT = this.utilsService.changeCurrentDateFormat(keyInfoData.LTT, "DD-MM-YYYY HH:mm:ss", "DD-MMM-YY HH:mm:ss");
          string = "|1=" + segment + "|88=" + keyInfoData.OpenInterest + "|80=" + keyInfoData.ATP + "|75=" + keyInfoData.OpenPrice + "|76=" + keyInfoData.ClosePrice + "|77=" + keyInfoData.HighPrice + "|78=" + keyInfoData.LowPrice + "|93=" + keyInfoData.LifeTimeHigh + "|94=" + keyInfoData.LifeTimeLow + "|79=" + keyInfoData.Volume + "|74=" + LUT + "|73=" + LTT + "|7=" + token + "|8=" + keyInfoData.LTP + "|9=" + keyInfoData.LTQ + "|399=" + keyInfoData.PriceDivisor + "|";
          newB5["MarketLot"] = keyInfoData.MarketLot;
          newB5["MktCap"] = keyInfoData.MktCap;
          newB5["strB5Response"] = string;
          newB5["BBP"] = keyInfoData.BBP;
          newB5["BBQ"] = keyInfoData.BBQ;
          newB5["BSP"] = keyInfoData.BSP;
          newB5["BSQ"] = keyInfoData.BSQ;
          //
          newB5["PriceDivisor"] = keyInfoData.PriceDivisor;
          newB5["LTP"] = keyInfoData.LTP == 0 ? keyInfoData.PrevClose : keyInfoData.LTP; // if LTP == 0 then show prevClose (11/05/2021)
          this.scripInfo["LUT"] = LUT;
          this.scripInfo["LTT"] = LTT;
          obj["PrevClose"] = keyInfoData.PrevClose;
          obj["LUT"] = LUT;
          obj["LTT"] = LTT;
          obj["prevChange"] = 0; //((Number(keyInfoData.LTP) / keyInfoData.PriceDivisor) || 0) - (obj["LTP"] || 0);
          obj["LTP"] = keyInfoData.LTP == 0 ? keyInfoData.PrevClose : keyInfoData.LTP; // if LTP == 0 then show prevClose (11/05/2021)
          obj["Change"] = keyInfoData.Change;
          obj["PriceDivisor"] = keyInfoData.PriceDivisor;
          obj["open"] = keyInfoData.OpenPrice / keyInfoData.PriceDivisor;
          // this.dummyObj["close"] = (this.splitResponse[0]["76"] / this.splitResponse[0]["399"]);
          obj["close"] = keyInfoData.ClosePrice / keyInfoData.PriceDivisor;
          obj["high"] = keyInfoData.HighPrice / keyInfoData.PriceDivisor;
          obj["low"] = keyInfoData.LowPrice / keyInfoData.PriceDivisor;
          this.best5.emit(newB5);
          this.utilsService.ltpCalculation(obj);
          this.activeSegment[0] = obj;
          this.dummyObj = obj;
          //this.activeSegment[0] = (this.activeSegment[0] && this.activeSegment[0].Token == obj["Token"] && this.activeSegment[0].SegmentId == obj["SegmentId"]) ? { ...this.utilsService.ltpCalcFromBestFive(obj), ...this.activeSegment[0] } : this.activeSegment[0];
          //setTimeout((obj)=>{obj.prevChange=0;},200,obj);
          if (this.segmentId == 1 || this.segmentId == 2 || this.segmentId == 4 || this.segmentId == 3) {
            let foundObj = this.mapTokenArray.find(element => element.SegmentId == this.dummyObj.SegmentId && element.Token == this.dummyObj.Token);
            for (var i = 0; i < this.mapTokenArray.length; i++) {
              if (this.mapTokenArray[i].SegmentId == this.dummyObj.SegmentId && this.mapTokenArray[i].Token == this.dummyObj.Token) {
                this.mapTokenArray[i] = {
                  ...this.utilsService.ltpCalcFromBestFive(obj),
                  ...this.mapTokenArray[i]
                };
              }
            }
          }
        }
      });
    } else if (this.sharedDataService.userId && this.sharedDataService.userId != "guest") {
      let B5Payload = {
        UserId: this.utilsService.getUserId(),
        SessionId: this.utilsService.getSessionId() || "",
        Token: Number(token),
        SegmentId: Number(segment)
      };
      this.bestFiveApi = this.companyService.getBestFive(B5Payload).subscribe(res => {
        if (res.Status === "Success" && res.Response) {
          let b5Data = JSON.parse(JSON.stringify(res.Response));
          this.splitResponse = [];
          if (res.Response.strB5Response.indexOf("19=") > 1) {
            this.utilsService.error("Error", "Something went wrong");
          } else {
            res.Response.strB5Response = res.Response.strB5Response.replace(/\$/g, "|");
            this.splitResponse = this.utilsService.pipeToObject(res.Response.strB5Response);
            this.scripInfo["LUT"] = this.utilsService.changeCurrentDateFormat(this.splitResponse[0]["74"], "YYYY-MM-DD HH:mm:ss", "DD-MMM-YY HH:mm:ss");
            this.scripInfo["LTT"] = this.utilsService.changeCurrentDateFormat(this.splitResponse[0]["73"], "YYYY-MM-DD HH:mm:ss", "DD-MMM-YY HH:mm:ss");
            let priceDivisor = this.utilsService.getDefaultPriceDivisor(this.splitResponse[0][1], this.splitResponse[0][7]);
            if (this.splitResponse[0][499]) {
              this.isTr = true;
              this.scripInfo.lowTradeRange = Number(this.splitResponse[0][499].split("-")[0].trim());
              this.scripInfo.highTradeRange = Number(this.splitResponse[0][499].split("-")[1].trim());
            } else this.isTr = false;
            obj["prevChange"] = 0;
            obj["PrevClose"] = b5Data.PrevClose || this.splitResponse[0][76];
            let pd = priceDivisor;
            obj["LTP"] = (this.splitResponse[0]["8"] == 0 ? obj["PrevClose"] : this.splitResponse[0]["8"]) / pd; // if LTP == 0 then show prevClose (11/05/2021)
            // obj["PrevClose"] = b5Data.PrevClose || this.splitResponse[0][76];
            obj["Change"] = obj["LTP"] - b5Data.PrevClose / pd;
            obj["PriceDivisor"] = priceDivisor;
            obj["LUT"] = this.utilsService.changeCurrentDateFormat(this.splitResponse[0]["74"], "YYYY-MM-DD HH:mm:ss", "DD-MM-YYYY HH:mm:ss");
            obj["LTT"] = this.utilsService.changeCurrentDateFormat(this.splitResponse[0]["73"], "YYYY-MM-DD HH:mm:ss", "DD-MM-YYYY HH:mm:ss");
            this.activeSegment[0]["LUT"] = obj["LUT"];
            this.activeSegment[0]["LTT"] = obj["LTT"];
            // this.utilsService.ltpCalculation(obj);
            b5Data["LTP"] = obj["LTP"];
            b5Data["HighPriceRange"] = b5Data["HighPriceRange"] / priceDivisor;
            b5Data["LowPriceRange"] = b5Data["LowPriceRange"] / priceDivisor;
            this.best5.emit(b5Data);
            if (this.segmentId == 1 || this.segmentId == 2 || this.segmentId == 4 || this.segmentId == 3) {
              for (var i = 0; i < this.mapTokenArray.length; i++) {
                if (this.mapTokenArray[i]["selectedSegment"] == true) {
                  this.mapTokenArray[i] = {
                    ...this.mapTokenArray[i],
                    ...obj
                  };
                }
              }
            }
            this.dummyObj["open"] = this.splitResponse[0]["75"] / priceDivisor;
            // this.dummyObj["close"] = (this.splitResponse[0]["76"] / this.splitResponse[0]["399"]);
            this.dummyObj["close"] = (b5Data.PrevClose || this.splitResponse[0]["76"]) / priceDivisor;
            this.dummyObj["high"] = this.splitResponse[0]["8"] == 0 ? this.dummyObj["close"] : this.splitResponse[0]["77"] / priceDivisor;
            this.dummyObj["low"] = this.splitResponse[0]["8"] == 0 ? this.dummyObj["close"] : this.splitResponse[0]["78"] / priceDivisor;
          }
        } else if (res.Reason == "Data not found.") {
          obj = {};
          obj["LTP"] = 0;
          obj["difference"] = 0.0;
          obj["percent"] = 0.0;
          obj["color"] = "";
          obj["arrow"] = "";
          obj["class"] = "";
          // } else if (this.utilsService.isSessionExpired(res.Reason)) {
          //   if(this.sharedDataService.isSSO){
          //     this.utilsService.sessionExpireHandling()
          //     return
          //   }
          //   this.utilsService.error("Session Expired", "Please Login Again");
          //   this.utilsService.postFeatureCount();
          //   this.utilsService.clearLoginDetails();
          //   this.sharedDataService.userId = null;
          //   this.router.navigate(["auth/login"]);
        } else {
          this.utilsService.error("Error", "Something went wrong");
        }
      });
    }
  }
  /**
   * maptoken api is called,  data is manipulated to make cards and assign different value to them
   * @param token token of searched scrip
   * @param segmentId segmentId of searched scrip
   */
  getMappedTokenResponse(token, segmentId) {
    let userId = this.utilsService.getUserId() || "guest";
    let payload = {
      UserId: userId == "guest" ? "" : userId,
      SessionId: this.utilsService.getSessionId() || "",
      Token: Number(token),
      SegmentId: Number(segmentId),
      MktDataRequired: false
    };
    //this.isGettingFetched= true;
    this.eventRef.isEventAvailable = false;
    // if ([1, 2, 3].indexOf(Number(segmentId)) > -1) {
    //   this.mappedTokenAPI = this.companyService.getMappedTokens(payload).subscribe((res) => {
    //     if (res.Status === 'Success' && res.Response) {
    //       this.mapTokenArray = [];
    //       this.activeSegment = [];
    //       this.cardInfo["MarketCapType"] = res.Response.MarketCapType
    //       let newTokenObj = this.utilsService.rearrangeMaptokenArray(res.Response.lMultipleTouchlineResponse.lstMultipleTouchline);
    //       this.tokenArray.forEach((element, index) => {
    //         let token = res.Response[element.key];
    //         if (token) {
    //           if (!newTokenObj[token]) {
    //             newTokenObj[token] = { 'Token': token, 'PriceDivisor': this.utilsService.getSegmentDetail(Number(segmentId), 'PriceDivisor'), 'Change': 0, 'LTP': 0 };
    //           }
    //           if (token == token)
    //             newTokenObj[token].ExchangeSegment = element.segment;
    //           newTokenObj[token].SegmentId = element.segmentId;
    //           newTokenObj[token].type = element.optionType;
    //           newTokenObj[token].segmentName = element.segment;
    //           newTokenObj[token].selectedSegment = false;
    //           newTokenObj[token].SecName = (element.segmentId == 1) ? res.Response['NSEScripName'] : (element.segmentId == 3) ? res.Response['BSEScripName'] : element.optionType == "FUT" ? res.Response['NSEFOScripName'] : (element.optionType == "CE") ? res.Response['NSEOptionCEName'] : res.Response['NSEOptionPEName'];
    //           if (element.segmentId == 2) {
    //             let scripName = element.optionType == "FUT" ? res.Response.NSEFOScripName : element.optionType == 'CE' ? res.Response.NSEOptionCEName : res.Response.NSEOptionPEName;
    //             let str = scripName.split(element.optionType != "FUT" ? '|' : ' ');
    //             let innerStr = element.optionType != "FUT" ? str[1].split(' ') : '';
    //             let futStr = (res.Response['NSEOptionPEName']) ? res.Response['NSEOptionPEName'].split('|') : '';
    //             element.optionType == "FUT" ? newTokenObj[token].SecName = futStr[0] + '|' + res.Response['NSEFOScripName'] : newTokenObj[token].SecName = newTokenObj[token].SecName;
    //             newTokenObj[token].segmentName = element.optionType == "FUT" ? res.Response["NSEFOScripName"] : (str[1]);
    //             newTokenObj[token].strikePrice = element.optionType != "FUT" ? innerStr[2] : null;
    //             newTokenObj[token].expiryDate = element.optionType == "FUT" ? str[0] : innerStr[0];
    //             newTokenObj[token].segmentName = (newTokenObj[token].segmentName.indexOf('FUT') == -1) && element.optionType == "FUT" ? newTokenObj[token].segmentName + ' FUT' : newTokenObj[token].segmentName;
    //             newTokenObj[token].SecName = futStr[0] + '|' + newTokenObj[token].segmentName;
    //           }
    //           this.utilsService.ltpCalculation(newTokenObj[token]);
    //           this.token == token ? newTokenObj[token].selectedSegment = true : newTokenObj[token].selectedSegment = false;
    //           newTokenObj[token].selectedSegment
    //           if (element.segmentId == 2 || ((element.segmentId == 1 || element.segmentId == 3) && !res.Response["IsIndex"])) {
    //             this.mapTokenArray.push(newTokenObj[token]);
    //           }
    //         }
    //       });
    //       //for expiry scrips not present in maptoken array
    //       this.mapTokenArray.forEach((element, index) => {
    //         if (element.Token == token) {
    //           this.expiryScrip = false;
    //           this.activeSegment.push(this.mapTokenArray[index]);
    //           this.utilsService.subscribeMultitouchline(this.mapTokenArray);
    //         }
    //       });
    //       this.mappedTokens.emit(this.mapTokenArray);
    //       //this.carousel.moveTo(this.activeIndex,false);
    //       this.expiryScrip = (this.expiryScrip == false) ? false : true;
    //       if (this.expiryScrip) {
    //         this.gotoExpiry();
    //       }
    //       this.showDummyObj = false;
    //       this.getBestFive(this.token, this.segmentId, this.dummyObj);
    //     }
    //     else if (this.utilsService.isSessionExpired(res.Reason)) {
    //       this.utilsService.error('Session Expired', "Please Login Again");
    //       this.utilsService.postFeatureCount();
    //       this.utilsService.clearLoginDetails();
    //       this.sharedDataService.userId = null;
    //       this.router.navigate(['auth/login']);
    //     } else { this.utilsService.error('Error', "Something went wrong"); }
    //   })
    // }
    // else if ([5, 6, 7, 8, 13, 14].indexOf(Number(segmentId)) > -1) {
    this.mappedTokenAPI = this.companyService.getnonEquityMappedTokens(payload).subscribe(res => {
      if (res.Status === "Success" && res.Response && res.Response.SecNames) {
        this.mapTokenArray = [];
        this.activeSegment = [];
        this.eventRef.isEventAvailable = res.Response.IsEventAvailable;
        let secNames = res.Response.SecNames.split(",");
        let segmentDetail = this.utilsService.getSegmentDetail(Number(segmentId));
        let touchlineResponse = res.Response.lMultipleTouchlineResponse.lstMultipleTouchline || [];
        touchlineResponse.forEach((item, index) => {
          if ([6, 8, 14, 39].indexOf(item.SegmentId) == -1) {
            item.ExchangeSegment = this.utilsService.getSegmentDetail(Number(item.SegmentId));
            item.SecName = secNames[index];
            item.segment = segmentDetail;
            item.type = secNames[index].indexOf("FUT") > -1 ? "FUT" : secNames[index].indexOf("CE") > -1 ? "CE" : secNames[index].indexOf("PE") > -1 ? "PE" : "";
            item.segmentName = [1, 2, 3, 4].indexOf(item.SegmentId) > -1 ? this.utilsService.getSegmentDetail(Number(item.SegmentId)) : secNames[index].indexOf("|") > -1 ? secNames[index].split("|")[1] : secNames[index];
            item.selectedSegment = this.token == item.Token;
            if (item.SegmentId == 2) {
              let scripName = item.SecName;
              let str = scripName.split(item.type != "FUT" ? "|" : " ");
              let innerStr = item.type != "FUT" ? str[1].split(" ") : "";
              let futStr = secNames[index].indexOf(" PE") > -1 ? scripName.split("|") : "";
              item.SecName = item.type == "FUT" ? (secNames[0].indexOf("-") > -1 ? secNames[0].split("-")[0] : secNames[0]) + "|" + item.SecName : item.SecName;
              item.segmentName = item.type == "FUT" ? secNames[index] : str[1];
              item.strikePrice = item.type != "FUT" ? innerStr[2] : null;
              item.expiryDate = item.type == "FUT" ? str[0] : innerStr[0];
              item.segmentName = item.segmentName.indexOf("FUT") == -1 && item.type == "FUT" ? item.segmentName + " FUT" : item.segmentName;
              item.SecName = futStr[0] + "|" + item.segmentName;
            }
            if (item.SegmentId == 4) {
              let scripName = item.SecName;
              let str = scripName.split(item.type != "FUT" ? "|" : " ");
              let innerStr = item.type != "FUT" ? str[1].split(" ") : "";
              let futStr = secNames[index].indexOf(" PE") > -1 ? scripName.split("|") : "";
              item.SecName = item.type == "FUT" ? (secNames[0].indexOf("-") > -1 ? secNames[0].split("-")[0] : secNames[0]) + "|" + item.SecName : item.SecName;
              item.segmentName = item.type == "FUT" ? secNames[index] : str[1];
              item.strikePrice = item.type != "FUT" ? innerStr[2] : null;
              item.expiryDate = item.type == "FUT" ? str[0] : innerStr[0];
              item.segmentName = item.segmentName.indexOf("FUT") == -1 && item.type == "FUT" ? item.segmentName + " FUT" : item.segmentName;
              item.SecName = futStr[0] + "|" + item.segmentName;
            }
            this.utilsService.ltpCalculation(item);
            this.mapTokenArray.push(item);
            if (this.token == item.Token) {
              this.activeSegment.push(item);
            }
          }
        });
        if ([1, 2, 3, 4].indexOf(Number(segmentId)) > -1) {
          this.mappedTokens.emit(this.mapTokenArray);
          //    this.eventRef.isEventAvailable.emit(res.Response)
        }
        this.getBestFive(this.token, this.segmentId, this.dummyObj);
        if ([5, 7, 13, 38].indexOf(Number(this.segmentId)) > -1) {
          this.gotoExpiry();
        }
        this.utilsService.subscribeMultitouchline(this.mapTokenArray);
        this.showDummyObj = false;
        let selectedIndex;
        selectedIndex = this.mapTokenArray.findIndex(item => item.Token == this.activeSegment[0].Token);
        setTimeout(() => {
          this.carousel.moveTo(selectedIndex);
        }, 100);
        // this.isGettingFetched= false;
        // console.log("isGettingFetched",this.isGettingFetched)
        // } else if (this.utilsService.isSessionExpired(res.Reason)) {
        //   if(this.sharedDataService.isSSO){
        //     this.utilsService.sessionExpireHandling()
        //     return
        //   }
        //   this.utilsService.error("Session Expired", "Please Login Again");
        //   this.utilsService.postFeatureCount();
        //   this.utilsService.clearLoginDetails();
        //   this.sharedDataService.userId = null;
        //   this.router.navigate(["auth/login"]);
        // this.isGettingFetched= false;
        // console.log("isGettingFetched",this.isGettingFetched)
      } else {
        // this.isGettingFetched= false;
        // console.log("isGettingFetched",this.isGettingFetched)
        this.utilsService.error("Error", "Something went wrong");
      }
    }, err => {
      // this.isGettingFetched= false;
      // console.log("isGettingFetched",this.isGettingFetched)
    });
    // }
  }
  /**
   * Open security/contract info popup onclik of security/contract info button
   */
  OpenSecurityInfo() {
    this.showScripInfo = true;
    this.googleAnalyticsEventsService.securityInfoClicked(this.activeSegment[0]);
    this.renderer.setStyle(document.body, "overflow", "hidden");
    //this.renderer.addClass(document.body,'modal_open');
  }
  openOptionChain() {
    let url = "/option-chain/";
    if (this.scripInfo.SegmentId == 1 || this.scripInfo.SegmentId == 3) {
      url += "derivatives?segmentId=1&token=" + this.mapTokenArray[0].Token;
    } else if (this.scripInfo.SegmentId == 2 || this.scripInfo.SegmentId == 4) {
      url += "derivatives?segmentId=4&token=" + (this.scripInfo.AssetToken || this.scripInfo.Token);
    } else if (this.scripInfo.SegmentId == 5 || this.scripInfo.SegmentId == 7 || this.scripInfo.SegmentId == 13 || this.scripInfo.SegmentId == 38) {
      url += (this.scripInfo.SegmentId > 7 ? "currencies" : "commodities") + "?segmentId=" + (this.scripInfo.SegmentId + 1) + "&token=" + (this.scripInfo.AssetToken || this.scripInfo.Token);
    } else if ([6, 8, 14, 39].indexOf(Number(this.scripInfo.SegmentId)) > -1) {
      url += (this.scripInfo.SegmentId == 14 || this.scripInfo.SegmentId == 39 ? "currencies" : "commodities") + "?segmentId=" + this.scripInfo.SegmentId + "&token=" + this.scripInfo.Token;
    }
    this.router.navigateByUrl(url + "&symbol=" + (this.scripInfo.Symbol == "BSXOPT" ? "SENSEX" : this.scripInfo.Symbol));
  }
  /**
   * close security/contract info popup onclik of close button
   */
  closeSecurityInfo() {
    this.showScripInfo = false;
    this.renderer.setStyle(document.body, "overflow", "auto");
    //this.renderer.removeClass(document.body,'modal_open');
  }
  /**
   * For expiry token ,replace token and data of maptoken array with expiry token and data
   */
  gotoExpiry() {
    if (this.expiryScrip == true && this.token == this.scripInfo["Token"]) {
      let newExpiryArray = this.utilsService.expiryCard(this.scripInfo, this.mapTokenArray);
      if (newExpiryArray.length > 0) {
        this.expiryScrip = false;
        this.mapTokenArray = newExpiryArray;
        let newExpiryObj = this.mapTokenArray.filter(obj => {
          return obj["selectedSegment"] == true;
        });
        let str = this.scripInfo["SecName"].split("|");
        newExpiryObj[0].segmentName = newExpiryObj[0].type == "FUT" ? str[1] + " " + newExpiryObj[0].type : str[1] || "";
        newExpiryObj.length != 0 ? this.activeSegment.push(newExpiryObj[0]) : this.activeSegment.push(this.scripInfo);
        this.utilsService.subscribeMultitouchline(this.mapTokenArray);
      }
    }
  }
  /**
   * on card change, bestFive api and scrip detil api is called and previous best5 socket is unsubscribed.
   * @param item selected card details
   */
  gotoKeyInfo(item) {
    this.unsubOfAPIs();
    if (this.activeSegment[0] && this.activeSegment[0]["Token"] != item["Token"]) {
      this.getScripDetail(item.Token, item.SegmentId, item);
      this.toggleAddRemove(item.SegmentId, item.Token);
      this.utilsService.unSubscribeBestFive(this.activeSegment);
      this.token = item.Token;
      this.segmentId = item.SegmentId;
      this.activeSegment = [item];
      this.dummyObj = item;
      this.sharedDataService.setActiveSubscription = [this.token, this.segmentId];
      this.utilsService.subscribeBest5(this.activeSegment);
      this.mapTokenArray.filter((obj, index) => {
        obj["selectedSegment"] = false;
        if (obj.Token === item.Token) {
          obj["selectedSegment"] = true;
          this.getBestFive(item.Token, item.SegmentId, obj);
        }
        return true;
      });
      // this.googleAnalyticsEventsService.mappedTokenCardChanged(item);
      this.location.replaceState("instrument/equity/" + this.companyName + "/" + item.SegmentId + "/" + item.Token);
      this.utilsService.checkforFeatureAndUpdate("cardChanged");
      this.utilsService.setTrackMoeEvent("clickedCompanyMapToken", {
        User_ID: this.utilsService.getUserId() || "guest",
        CompanyName: this.companyName,
        SegmentId: item.SegmentId,
        Token: item.Token,
        IP: this.sharedDataService.IPAddress
      });
      this.googleAnalyticsEventsService.emitEvent("clickedCompanyPivotPointDuration", this.utilsService.getUserId() || "guest", JSON.stringify({
        IP: this.sharedDataService.IPAddress
      }), 1);
    }
  }
  /**
   * socket response multitouchline
   */
  getMapTokenSocket() {
    this.mapTokenSubscription = this.socketService.broadcaster.on("watchlist").subscribe(res => {
      //
      let scrip = this.mapTokenArray.filter((obj, index) => {
        return res[0]["1"] == obj.SegmentId && obj.Token == res[0]["7"];
      });
      let priceDivisor = this.utilsService.getDefaultPriceDivisor(res[0][1], res[0][7]);
      if (scrip.length > 0 && this.utilsService.isUpdatedData(scrip[0], res[0])) {
        let obj = scrip[0];
        obj.prevChange = (Number(res[0][8]) / priceDivisor || 0) - (obj.LTP || 0);
        obj.LTP = res[0]["8"] == 0 ? scrip[0].PrevClose || res[0]["76"] : res[0]["8"] || 0; // if LTP == 0 then show prevClose (11/05/2021)
        obj.PrevClose = scrip[0].PrevClose || res[0]["76"];
        obj.Change = res[0][8] - scrip[0].PrevClose;
        obj.PriceDivisor = priceDivisor;
        this.utilsService.ltpCalculation(obj);
        obj.Volume = Number(res[0][79]);
        obj.LTT = this.utilsService.changeCurrentDateFormat(res[0][73], "YYYY-MM-DD HHmmss", "DD-MM-YYYY HH:mm:ss");
        obj.LUT = this.utilsService.changeCurrentDateFormat(res[0][74], "YYYY-MM-DD HHmmss", "DD-MM-YYYY HH:mm:ss");
        obj.BBP = Number(res[0][3] / obj.PriceDivisor) || obj.LTP / obj.PriceDivisor;
        obj.BBQ = Number(res[0][2]) || 0;
        obj.BSP = Number(res[0][6] / obj.PriceDivisor) || obj.LTP / obj.PriceDivisor;
        obj.BSQ = Number(res[0][5]) || 0;
      }
    });
  }
  /**
   * socket response from best five
   */
  getBestFiveSocket() {
    this.bestFiveSubscription = this.socketService.broadcaster.on("best5").subscribe(res => {
      let responseObject = this.utilsService.pipeToObject(res);
      if (responseObject[0][64] != 209 && this.activeSegment[0] && responseObject[0][1] == this.activeSegment[0].SegmentId && responseObject[0][7] == this.activeSegment[0].Token && this.utilsService.isUpdatedData(this.activeSegment[0], responseObject[0])) {
        let priceDivisor = this.utilsService.getDefaultPriceDivisor(this.activeSegment[0].SegmentId, this.activeSegment[0].Token);
        let b5Data = this.utilsService.processBest5(res);
        res = res.replace(/\$/g, "|");
        this.scripInfo["LUT"] = this.utilsService.changeCurrentDateFormat(responseObject[0]["74"], "YYYY-MM-DD HH:mm:ss", "DD-MMM-YY HH:mm:ss");
        this.scripInfo["LTT"] = this.utilsService.changeCurrentDateFormat(responseObject[0]["73"], "YYYY-MM-DD HH:mm:ss", "DD-MMM-YY HH:mm:ss");
        this.dummyObj.prevChange = (Number(responseObject[0][8]) / priceDivisor || 0) - (this.dummyObj.LTP || 0);
        this.dummyObj.LTP = responseObject[0][8] == 0 ? this.activeSegment[0].PrevClose || this.dummyObj.PrevClose : responseObject[0][8]; // if LTP == 0 then show prevClose (11/05/2021)
        this.dummyObj.PrevClose = this.activeSegment[0].PrevClose || this.dummyObj.PrevClose;
        this.dummyObj.Change = responseObject[0][8] - this.dummyObj.PrevClose;
        this.dummyObj.PriceDivisor = priceDivisor;
        this.utilsService.ltpCalculation(this.dummyObj);
        this.activeSegment[0].Volume = Number(res[0][79]);
        this.activeSegment[0].LTT = this.utilsService.changeCurrentDateFormat(responseObject[0][73], "YYYY-MM-DD HHmmss", "DD-MM-YYYY HH:mm:ss");
        this.activeSegment[0].LUT = this.utilsService.changeCurrentDateFormat(responseObject[0][74], "YYYY-MM-DD HHmmss", "DD-MM-YYYY HH:mm:ss");
        let bestBP = b5Data["bids"][0] ? b5Data["bids"][0][1] : responseObject[0][3] / priceDivisor;
        let bestBQ = b5Data["bids"][0] ? b5Data["bids"][0][0] : responseObject[0][2];
        let bestSP = b5Data["offers"][0] ? b5Data["offers"][0][1] : responseObject[0][6] / priceDivisor;
        let bestSQ = b5Data["offers"][0] ? b5Data["offers"][0][0] : responseObject[0][5];
        this.activeSegment[0].BBP = Number(bestBP) || this.dummyObj.LTP;
        this.activeSegment[0].BBQ = Number(bestBQ) || 0;
        this.activeSegment[0].BSP = Number(bestSP) || this.dummyObj.LTP;
        this.activeSegment[0].BSQ = Number(bestSQ) || 0;
        this.dummyObj.LTT = this.activeSegment[0].LTT;
        this.dummyObj.LUT = this.activeSegment[0].LUT;
        this.dummyObj.BBP = this.activeSegment[0].BBP;
        this.dummyObj.BBQ = this.activeSegment[0].BBQ;
        this.dummyObj.BSP = this.activeSegment[0].BSP;
        this.dummyObj.BSQ = this.activeSegment[0].BSQ;
        this.mapTokenArray.forEach((item, index) => {
          if (item.Token == responseObject[0][7]) {
            this.mapTokenArray[index].percent = this.dummyObj.percent;
          }
        });
        let dpr = responseObject[0]["380"];
        let splitDpr = dpr.split("-");
        this.scripInfo["PriceDivisor"] = priceDivisor;
        this.scripInfo["LowPriceRange"] = Number(splitDpr[0]) ? splitDpr[0] * priceDivisor : this.scripInfo["LowPriceRange"];
        this.scripInfo["HighPriceRange"] = Number(splitDpr[1]) ? splitDpr[1] * priceDivisor : this.scripInfo["HighPriceRange"];
        this.dummyObj["open"] = responseObject[0]["75"] / priceDivisor;
        this.dummyObj["close"] = (this.dummyObj.PrevClose || responseObject[0]["76"]) / priceDivisor;
        this.dummyObj["high"] = responseObject[0]["77"] / priceDivisor;
        this.dummyObj["low"] = responseObject[0]["78"] / priceDivisor;
      }
    });
    this.socketService.broadcaster.on("tradeExecutionRange").subscribe(data => {
      let dataObj = this.utilsService.pipeToObject(data);
      if (this.activeSegment[0] && dataObj[0][1] == this.activeSegment[0].SegmentId && dataObj[0][7] == this.activeSegment[0]["Token"]) {
        this.isTr = true;
        this.scripInfo.lowTradeRange = Number(dataObj[0][499].split("-")[0].trim());
        this.scripInfo.highTradeRange = Number(dataObj[0][499].split("-")[1].trim());
      } else this.isTr = false;
    });
  }
  /**
   * This function is called when option and future , optiontype, expiry and strikeprice dropdown changes in futureOption
   * All the data are changed accordingly in the dummy card as well as mapptoken array
   * @param changes changes from futOpt component
   */
  ngOnChanges(changes) {
    if (changes["changeOptFut"] && changes["changeOptFut"].currentValue) {
      this.changeOptFut = changes["changeOptFut"].currentValue;
      if (this.changeOptFut.label === "Options") {
        this.utilsService.unSubscribeBestFive(this.activeSegment);
        this.activeSegment.length = 0;
        this.mapTokenArray.filter((obj, index) => {
          obj["selectedSegment"] = false;
          if (obj.type == "CE") {
            obj["selectedSegment"] = true;
            this.getBestFive(obj.Token, obj.SegmentId, obj);
            this.getScripDetail(obj.Token, obj.SegmentId, obj);
            this.activeSegment.push(obj);
            this.sharedDataService.setActiveSubscription = [this.token, this.segmentId];
            this.utilsService.subscribeBest5([{
              Token: obj.Token,
              SegmentId: obj.SegmentId
            }]);
          }
          return true;
        });
      } else if (this.changeOptFut.label === "Future") {
        this.utilsService.unSubscribeBestFive(this.activeSegment);
        this.activeSegment.length = 0;
        let activeIndex = 2;
        let scrip = this.mapTokenArray.find((item, index) => {
          if (item.type == "FUT" && item.SecName.indexOf(this.changeOptFut.label["ExpiryDate"]) > -1) {
            activeIndex = index;
            return true;
          }
          return false;
        });
        activeIndex = !scrip && this.segmentId > 3 ? 3 : activeIndex;
        this.mapTokenArray.filter((obj, index) => {
          obj["selectedSegment"] = false;
          if (obj.type == "FUT" && index == activeIndex && [1, 2, 3, 4].indexOf(Number(this.segmentId)) == -1 || obj.type == "FUT" && [1, 2, 3, 4].indexOf(Number(this.segmentId)) > -1) {
            // FUT dropdown issue (04/05/2021)
            obj["selectedSegment"] = true;
            this.getBestFive(obj.Token, obj.SegmentId, obj);
            this.getScripDetail(obj.Token, obj.SegmentId, obj);
            this.activeSegment.push(obj);
            this.sharedDataService.setActiveSubscription = [this.token, this.segmentId];
            this.utilsService.subscribeBest5([{
              Token: this.token,
              SegmentId: this.segmentId
            }]);
          }
          return true;
        });
      } else {
        this.utilsService.unSubscribeBestFive(this.activeSegment);
        if ([2, 5, 7, 13, 38, 4].indexOf(Number(this.changeOptFut.label["SegmentId"])) > -1) this.utilsService.unSubscribeMultitouchline(this.mapTokenArray, "company");
        this.activeSegment.length = 0;
        let newFutObj = [];
        if (this.changeOptFut.label["OT"] == "XX" && [6, 7, 14, 39].indexOf(Number(this.changeOptFut.label["SegmentId"])) == -1) {
          let activeIndex = 2;
          let scrip = this.mapTokenArray.find((item, index) => {
            if (item.type == "FUT" && item.SecName.indexOf(this.changeOptFut.label["ExpiryDate"]) > -1) {
              activeIndex = index;
              return true;
            }
            return false;
          });
          activeIndex = !scrip && this.segmentId > 3 ? 2 : activeIndex;
          this.mapTokenArray.filter((obj, index) => {
            obj["selectedSegment"] = false;
            if (obj.type == "FUT" && index == activeIndex && [1, 2, 3, 4].indexOf(Number(this.segmentId)) == -1 || obj.type == "FUT" && [1, 2, 3, 4].indexOf(Number(this.segmentId)) > -1) {
              // FUT dropdown issue (04/05/2021)
              obj["selectedSegment"] = true;
            }
            return true;
          });
          let newFutObj = [2, 5, 7, 13, 4, 38].indexOf(Number(this.changeOptFut.label["SegmentId"])) > -1 ? this.mapTokenArray.filter(obj => {
            return obj.selectedSegment == true;
          }) : [this.dummyObj];
          if (newFutObj.length > 0) {
            newFutObj[0]["segmentName"] = this.changeOptFut.label["ExpiryDate"] + " FUT";
            newFutObj[0]["expiryDate"] = this.changeOptFut.label["ExpiryDate"];
            newFutObj[0]["Token"] = this.changeOptFut.label["Token"];
            this.activeSegment.push(newFutObj[0]);
            this.getBestFive(this.changeOptFut.label["Token"], this.changeOptFut.label["SegmentId"], newFutObj[0]);
            this.getScripDetail(this.changeOptFut.label["Token"], this.changeOptFut.label["SegmentId"], newFutObj[0]);
            this.toggleAddRemove(this.changeOptFut.label["SegmentId"], this.changeOptFut.label["Token"]);
            this.sharedDataService.setActiveSubscription = [this.token, this.segmentId];
            this.utilsService.subscribeBest5([{
              Token: this.changeOptFut.label["Token"],
              SegmentId: this.changeOptFut.label["SegmentId"]
            }]);
            this.googleAnalyticsEventsService.futureExpiryChanges({
              Token: this.changeOptFut.label["Token"],
              SegmentId: this.changeOptFut.label["SegmentId"]
            }, this.companyName);
          }
        } else {
          if (this.changeOptFut.label["OT"] == "CE" && [2, 5, 7, 13, 4, 38].indexOf(Number(this.changeOptFut.label["SegmentId"])) > -1) {
            this.mapTokenArray.filter((obj, index) => {
              obj["selectedSegment"] = false;
              if (obj.type == "CE") {
                obj["selectedSegment"] = true;
              }
              return true;
            });
          } else if (this.changeOptFut.label["OT"] == "PE" && [2, 5, 7, 13, 4, 38].indexOf(Number(this.changeOptFut.label["SegmentId"])) > -1) {
            this.mapTokenArray.filter((obj, index) => {
              obj["selectedSegment"] = false;
              if (obj.type == "PE") {
                obj["selectedSegment"] = true;
              }
              return true;
            });
          }
          let newOpt = [2, 5, 7, 13, 4, 38].indexOf(Number(this.changeOptFut.label["SegmentId"])) > -1 ? this.mapTokenArray.filter(obj => {
            return obj.selectedSegment == true;
          }) : [this.dummyObj];
          if (newOpt.length > 0) {
            let strikePrice = this.changeOptFut.label["StrikePrice"] / this.changeOptFut.label["PriceDivisor"];
            strikePrice = [2, 5, 7, 13, 4, 38].indexOf(Number(this.changeOptFut.label["SegmentId"])) > -1 || this.changeOptFut.label["SegmentId"] == 5 || this.changeOptFut.label["SegmentId"] == 7 ? strikePrice.toFixed(2) : strikePrice.toFixed(4);
            newOpt[0]["segmentName"] = this.changeOptFut.label["OT"] == "CE" ? this.changeOptFut.label["ExpiryDate"] + " CE " + strikePrice : this.changeOptFut.label["ExpiryDate"] + " PE " + strikePrice;
            newOpt[0]["expiryDate"] = this.changeOptFut.label["ExpiryDate"];
            newOpt[0]["strikePrice"] = this.changeOptFut.label["StrikePrice"];
            newOpt[0]["Token"] = this.changeOptFut.label["Token"];
            this.activeSegment.push(newOpt[0]);
            this.getBestFive(this.changeOptFut.label["Token"], this.changeOptFut.label["SegmentId"], newOpt[0]);
            this.getScripDetail(this.changeOptFut.label["Token"], this.changeOptFut.label["SegmentId"], newOpt[0]);
            this.sharedDataService.setActiveSubscription = [this.token, this.segmentId];
            this.utilsService.subscribeBest5([{
              Token: this.changeOptFut.label["Token"],
              SegmentId: this.changeOptFut.label["SegmentId"]
            }]);
            let gaOptionType = this.changeOptFut.label["OT"] == "CE" ? "CE expiry & strikeprice changes" : "PE expiry & strikeprice changes";
            this.googleAnalyticsEventsService.optionExpiryChanges({
              Token: this.changeOptFut.label["Token"],
              SegmentId: this.changeOptFut.label["SegmentId"]
            }, this.companyName, gaOptionType);
          }
        }
        if ([2, 5, 7, 13, 4, 38].indexOf(Number(this.changeOptFut.label["SegmentId"])) > -1) this.utilsService.subscribeMultitouchline(this.mapTokenArray);
        this.location.replaceState("instrument/equity/" + this.companyName + "/" + this.changeOptFut.label["SegmentId"] + "/" + this.changeOptFut.label["Token"]);
        history.pushState("", document.title, "instrument/equity/" + this.companyName + "/" + this.changeOptFut.label["SegmentId"] + "/" + this.changeOptFut.label["Token"]);
        this.toggleAddRemove(this.changeOptFut.label["SegmentId"], this.changeOptFut.label["Token"]);
      }
      if ([1, 2, 3, 5, 6, 7, 8, 13, 14, 4, 38, 39].indexOf(Number(this.segmentId)) > -1) {
        this.mappedTokens.emit(this.mapTokenArray);
      } else {
        this.mappedTokens.emit(this.activeSegment);
      }
      this.carousel.moveTo(this.activeIndex);
    }
    if (changes["eventData"] && changes["eventData"].currentValue) {
      this.isGettingFetched = changes["eventData"].currentValue.length;
      this.eventData = changes["eventData"].currentValue;
      if (this.eventData && this.eventData.length) {
        this.isEventToday = this.eventData.some(event => event?.momentDate.isSame(new Date().toISOString(), 'day'));
      }
    }
  }
  /**
   * to add and remove scrip to watchlist
   * @param segmentId segmentId of selected scrip
   * @param token token of selected scrip
   */
  toggleAddRemove(segmentId, token) {
    this.scripData = this.utilsService.checkFromWatchlist(segmentId, token);
    this.segmentTokenString = {
      SegmentId: segmentId,
      Token: token
    };
    if (this.scripData && this.scripData.ProfileId) {
      this.isAdded = true;
    } else {
      this.isAdded = false;
    }
  }
  /**
   * check to whether to add or remove scrip from watchlist
   * @param profileId token of scrip
   */
  addRemoveWatchList(profileId) {
    let userAccountStatus = this.utilsService.getUserAccountStatus();
    if (!(!userAccountStatus || !userAccountStatus.onboardStatus || userAccountStatus.onboardStatus == "C")) {
      this.utilsService.broadcast("generateSubs", {});
    } else {
      if (!profileId) {
        this.segmentTokenString.scripIndex = this.scripData.scripIndex;
      }
      this.segmentTokenString.ProfileId = profileId ? profileId : this.scripData.ProfileId;
      this.segmentTokenString.action = this.isAdded;
      if (this.isAdded == true) {
        this.googleAnalyticsEventsService.removeScripFromCompanyPage(this.activeSegment[0]);
      } else {
        this.googleAnalyticsEventsService.AddScripFromCompanyPage(this.activeSegment[0]);
      }
      this.isButtonDisabled = true;
      //
      this.broadcaster.broadcast("addRemoveWatchList", this.segmentTokenString);
    }
  }
  /**
   * Open a popup when there is guest user for buy , sell and watchlist button
   */
  openPreLogin() {
    let userAccountStatus = this.utilsService.getUserAccountStatus();
    if (!(!userAccountStatus || !userAccountStatus.onboardStatus || userAccountStatus.onboardStatus == "C")) {
      this.utilsService.broadcast("generateSubs", {});
    } else {
      if (!this.utilsService.isAuthorized()) {
        this.showPreLogin = true;
        this.renderer.setStyle(document.body, "overflow", "hidden");
      }
    }
  }
  /**
   * open buy drawer , when user click buy button for the selected scrip
   * @param event open buy  drawer
   */
  buyItem(event, orderDuration, finalOrderType) {
    if (this.scripInfo.SegmentId != 6 && this.scripInfo.SegmentId != 8 && this.scripInfo.SegmentId != 39 && this.scripInfo.SegmentId != 14) {
      let userAccountStatus = this.utilsService.getUserAccountStatus();
      if (!(!userAccountStatus || !userAccountStatus.onboardStatus || userAccountStatus.onboardStatus == "C") || this.utilsService.isAuthorized()) {
        this.googleAnalyticsEventsService.buyClickedFromCompany({
          SegmentId: (this.activeSegment?.[0] || this.scripInfo)?.SegmentId || "",
          Token: (this.activeSegment?.[0] || this.scripInfo)?.Token || "",
          SecName: (this.activeSegment?.[0] || this.scripInfo)?.SecName || ""
        });
        let watchlist = this.scripInfo.SegmentId == 1 || this.scripInfo.SegmentId == 2 || this.scripInfo.SegmentId == 4 || this.scripInfo.SegmentId == 3 ? this.mapTokenArray.filter(obj => {
          return obj.selectedSegment == true;
        }) : [this.scripInfo];
        watchlist = JSON.parse(JSON.stringify(watchlist));
        if (watchlist && watchlist[0]) {
          watchlist[0].IsBannedScrip = this.scripInfo.IsBannedScrip;
          watchlist[0].SecDesc = this.scripInfo.SecDesc;
          watchlist[0].ISIN = this.scripInfo.ISIN;
          watchlist[0].LTP = watchlist[0].LTP;
          watchlist[0].PriceTick = this.scripInfo.PriceTick;
          if (watchlist[0].SecName) {
            watchlist[0].SecName = watchlist[0].SecName.indexOf("|") > -1 ? watchlist[0].SecName.substring(0, watchlist[0].SecName.indexOf("|") + 1) + watchlist[0].segmentName : watchlist[0].SecName;
          }
          watchlist[0].IsMthExpiryNear = this.scripInfo.IsMthExpiryNear;
          watchlist[0].QtyUnit = this.scripInfo.QtyUnit;
          watchlist[0].IntradayMargin = this.scripInfo.IntradayMargin || 1;
          watchlist[0].DeliveryMargin = this.scripInfo.DeliveryMargin || 1;
          if (watchlist[0].SecName.indexOf("undefined") > -1) {
            watchlist[0].SecName = this.scripInfo.SecName;
          }
          this.utilsService.broadcast("openBuySellDrawer", {
            scrip: watchlist[0],
            action: 1,
            command: {
              productType: orderDuration
            }
          });
          event ? event.stopPropagation() : "";
        }
      } else {
        this.utilsService.setBtnClickFromURL("buy");
        this.showPreLogin = true;
        this.renderer.setStyle(document.body, "overflow", "hidden");
      }
    }
  }
  /** */
  addPriceAlert() {
    let userAccountStatus = this.utilsService.getUserAccountStatus();
    if (!(!userAccountStatus || !userAccountStatus.onboardStatus || userAccountStatus.onboardStatus == "C") || this.utilsService.isAuthorized()) {
      let watchlist = this.scripInfo.SegmentId == 1 || this.scripInfo.SegmentId == 2 || this.scripInfo.SegmentId == 4 || this.scripInfo.SegmentId == 3 ? this.mapTokenArray.filter(obj => {
        return obj.selectedSegment == true;
      }) : [this.dummyObj];
      watchlist = JSON.parse(JSON.stringify(watchlist));
      if (watchlist && watchlist[0]) {
        this.googleAnalyticsEventsService.addPriceAlertFromCompanyPage(watchlist[0]);
        let request = {
          config: null,
          requestType: 1,
          data: watchlist[0]
        };
        this.utilsService.broadcast("openPriceAlert", request);
      }
    } else {
      this.showPreLogin = true;
      this.renderer.setStyle(document.body, "overflow", "hidden");
    }
  }
  /**
   * open sell drawer , when user click buy sell for the selected scrip
   * @param event open sell  drawer
   */
  sellItem(event, orderDuration, finalOrderType) {
    if (this.scripInfo.SegmentId != 6 && this.scripInfo.SegmentId != 8 && this.scripInfo.SegmentId != 39 && this.scripInfo.SegmentId != 14) {
      let userAccountStatus = this.utilsService.getUserAccountStatus();
      if (!(!userAccountStatus || !userAccountStatus.onboardStatus || userAccountStatus.onboardStatus == "C") || this.utilsService.isAuthorized()) {
        this.googleAnalyticsEventsService.sellClickedFromCompany({
          SegmentId: (this.activeSegment?.[0] || this.scripInfo)?.SegmentId || "",
          Token: (this.activeSegment?.[0] || this.scripInfo)?.Token || "",
          SecName: (this.activeSegment?.[0] || this.scripInfo)?.SecName || ""
        });
        let watchlist = this.scripInfo.SegmentId == 1 || this.scripInfo.SegmentId == 2 || this.scripInfo.SegmentId == 4 || this.scripInfo.SegmentId == 3 ? this.mapTokenArray.filter(obj => {
          return obj.selectedSegment == true;
        }) : [this.dummyObj];
        watchlist = JSON.parse(JSON.stringify(watchlist));
        if (watchlist && watchlist[0]) {
          watchlist[0].IsBannedScrip = this.scripInfo.IsBannedScrip;
          watchlist[0].ISIN = this.scripInfo.ISIN;
          watchlist[0].LTP = watchlist[0].LTP;
          watchlist[0].PriceTick = this.scripInfo.PriceTick;
          watchlist[0].QtyUnit = this.scripInfo.QtyUnit.trim();
          watchlist[0].IntradayMargin = this.scripInfo.IntradayMargin || 1;
          watchlist[0].DeliveryMargin = this.scripInfo.DeliveryMargin || 1;
          this.utilsService.broadcast("openBuySellDrawer", {
            scrip: watchlist[0],
            action: 2,
            command: {
              productType: orderDuration,
              finalOrderType: finalOrderType
            }
          });
          event ? event.stopPropagation() : "";
        }
      } else {
        this.utilsService.setBtnClickFromURL("sell");
        this.showPreLogin = true;
        this.renderer.setStyle(document.body, "overflow", "hidden");
      }
    }
  }
  /**
   * ondestroy close socket and all other subscription
   */
  ngOnDestroy() {
    this.utilsService.unSubscribeBestFive(this.activeSegment);
    if (this.keyPressSubscription) this.keyPressSubscription.unsubscribe();
    if (this.buySellSubscription) this.buySellSubscription.unsubscribe();
    if (this.scripAddSubscription) this.scripAddSubscription.unsubscribe();
    if (this.scripRemoveSubscription) this.scripRemoveSubscription.unsubscribe();
    if (this.multiTouchlineSubscription) this.multiTouchlineSubscription.unsubscribe();
    if (this.routeParamsSubscription) this.routeParamsSubscription.unsubscribe();
    if (this.watchlistNameSubscription) this.watchlistNameSubscription.unsubscribe();
    if (this.socketStatusSubscription) this.socketStatusSubscription.unsubscribe();
    if (this.mapTokenSubscription) this.mapTokenSubscription.unsubscribe();
    if (this.bestFiveSubscription) this.bestFiveSubscription.unsubscribe();
    if (this.routeReuseSubscription) this.routeReuseSubscription.unsubscribe();
    if (this.walkThroughSubscription) this.walkThroughSubscription.unsubscribe();
    if (this.windowActiveSubscription) this.windowActiveSubscription.unsubscribe();
    if (this.preLoginSubscription) this.preLoginSubscription.unsubscribe();
    if (this.popupCloseSubscription) this.popupCloseSubscription.unsubscribe();
    this.dummyObj = {};
    this.utilsService.unSubscribeMultitouchline(this.mapTokenArray, "company");
    this.showScripInfo = false;
    this.unsubOfAPIs(true);
  }
  /**
   * close preLogin popup for guest user on click of close button on prelogin popup
   */
  closePreLogin() {
    this.showPreLogin = false;
    this.renderer.setStyle(document.body, "overflow", "auto");
  }
  /**
   * Redirect to login page , when user clicks on login button of prelogin popup
   */
  login() {
    this.utilsService.setFromURL();
    this.router.navigate(["auth/login"]);
  }
  getPreLoginInterval() {
    let presentSegmentId = this.activeSegment.length > 0 ? this.activeSegment[0]["SegmentId"] : 0;
    presentSegmentId ? this.getBestFive(this.activeSegment[0].Token, this.activeSegment[0].SegmentId, this.activeSegment[0]) : "";
    presentSegmentId && [1, 2, 3, 5, 6, 7, 8, 13, 14, 4, 38, 39].indexOf(Number(presentSegmentId)) > -1 ? this.getMultitouchine() : ""; // to called multitouchline (06/05/2021)
    // (presentSegmentId && ([1, 2, 3, 5, 6, 7, 8, 13, 14].indexOf(Number(presentSegmentId)) > -1)) ? this.getMappedTokenResponse(this.activeSegment[0].Token, this.activeSegment[0].SegmentId) : ''; // dont called mappedtoken which is not required (06/05/2021)
  }
  /** api unsubscription */
  unsubOfAPIs(isUnsubMappedToken) {
    if (this.bestFiveApi) {
      this.bestFiveApi.unsubscribe();
      this.bestFiveApi = null;
    }
    if (this.scripDetailsApi) {
      this.scripDetailsApi.unsubscribe();
      this.scripDetailsApi = null;
    }
    if (this.keyInfoApi) {
      this.keyInfoApi.unsubscribe();
      this.keyInfoApi = null;
    }
    if (this.mappedTokenAPI && isUnsubMappedToken) {
      this.mappedTokenAPI.unsubscribe();
      this.mappedTokenAPI = null;
    }
  }
  /** get multitouchline data */
  getMultitouchine() {
    const tokens = this.utilsService.generateTokens(this.mapTokenArray);
    let userId = this.utilsService.getUserId();
    const payload = {
      UserId: !userId || userId == "guest" ? "guest" : userId,
      SessionId: this.utilsService.getSessionId() || "",
      MultipleTokens: tokens
    };
    this.utilsService.commonGetMultipleTouchLineCall(payload).subscribe(data => {
      // common multitouchlineV2 (26/02/2021)
      if (data.Status == "Success" && data.Response && data.Response.lMT && data.Response.lMT.length) {
        // console.log(
        //   "mapTokenArray multitouchline5 ",
        //   JSON.parse(JSON.stringify(this.mapTokenArray))
        // );
        data.Response.lMT.forEach(element => {
          this.mapTokenArray.forEach((item, index) => {
            if (element.Token == item.Token) {
              this.utilsService.ltpCalculation(element);
              this.mapTokenArray[index] = {
                ...this.mapTokenArray[index],
                ...element
              };
            }
          });
        });
      }
    }, err => {});
  }
  focusOnEvents() {
    this.focusEvents.emit(true);
    this.utilsService.setTrackMoeEvent('clickedOn', {
      buttonName: "CompanyEventsIcon",
      UserId: this.utilsService?.getUserId() || ""
    });
  }
  static {
    this.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_17__.ActivatedRoute
    }, {
      type: _services_rest_company_service__WEBPACK_IMPORTED_MODULE_11__.CompanyService
    }, {
      type: _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_14__.UtilsService
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_17__.Router
    }, {
      type: _angular_common__WEBPACK_IMPORTED_MODULE_18__.Location
    }, {
      type: _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_12__.SharedDataService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.Renderer2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.NgZone
    }, {
      type: _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_8__.SeoService
    }, {
      type: _services_sockets_socket_service__WEBPACK_IMPORTED_MODULE_13__.SocketService
    }, {
      type: _services_sockets_broadcaster__WEBPACK_IMPORTED_MODULE_9__.Broadcaster
    }, {
      type: _services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_10__.AnalyticsService
    }];
  }
  static {
    this.propDecorators = {
      carousel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.ViewChild,
        args: ["carousel", {
          static: false
        }]
      }],
      best5: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.Output,
        args: ["best5"]
      }],
      scripDetail: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.Output,
        args: ["scripDetail"]
      }],
      focusEvents: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.Output,
        args: ["focusEvents"]
      }],
      mappedTokens: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.Output,
        args: ["mappedTokens"]
      }],
      changeOptFut: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.Input,
        args: ["changeOptFut"]
      }],
      qualityData: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.Input,
        args: ["qualityData"]
      }],
      eventData: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.Input,
        args: ["eventData"]
      }],
      eventRef: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.Input,
        args: ['IsEventAvailable']
      }],
      mouseover: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.HostListener,
        args: ["document:mouseover", ["$event"]]
      }]
    };
  }
};
SegmentTokenComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
  selector: "app-segment-token",
  template: _segment_token_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.NgClass, _directives_scroll_to_element_directive__WEBPACK_IMPORTED_MODULE_4__.ScrollToElementDirective, _directives_dropdown_dropdown_directive__WEBPACK_IMPORTED_MODULE_3__.Dropdown, _directives_dropdown_dropdown_open_directive__WEBPACK_IMPORTED_MODULE_2__.DropdownOpen, _ngu_carousel__WEBPACK_IMPORTED_MODULE_20__.NguCarousel, _ngu_carousel__WEBPACK_IMPORTED_MODULE_20__.NguCarouselDefDirective, _ngu_carousel__WEBPACK_IMPORTED_MODULE_20__.NguCarouselPrevDirective, _ngu_carousel__WEBPACK_IMPORTED_MODULE_20__.NguCarouselNextDirective, _directives_show_focus_directive__WEBPACK_IMPORTED_MODULE_5__.ShowFocusDirective, _pipes_segment_pipe__WEBPACK_IMPORTED_MODULE_6__.SegmentPipe, _pipes_value_pipe__WEBPACK_IMPORTED_MODULE_7__.ValuePipe],
  styles: [(_segment_token_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_17__.ActivatedRoute, _services_rest_company_service__WEBPACK_IMPORTED_MODULE_11__.CompanyService, _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_14__.UtilsService, _angular_router__WEBPACK_IMPORTED_MODULE_17__.Router, _angular_common__WEBPACK_IMPORTED_MODULE_18__.Location, _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_12__.SharedDataService, _angular_core__WEBPACK_IMPORTED_MODULE_15__.Renderer2, _angular_core__WEBPACK_IMPORTED_MODULE_15__.NgZone, _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_8__.SeoService, _services_sockets_socket_service__WEBPACK_IMPORTED_MODULE_13__.SocketService, _services_sockets_broadcaster__WEBPACK_IMPORTED_MODULE_9__.Broadcaster, _services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_10__.AnalyticsService])], SegmentTokenComponent);


/***/ }),

/***/ 41202:
/*!***********************************************************!*\
  !*** ./src/app/directives/scroll-to-element.directive.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScrollToElementDirective: () => (/* binding */ ScrollToElementDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 17705);


let ScrollToElementDirective = class ScrollToElementDirective {
  constructor() {
    this.ngxScrollToOffset = 0;
    this.ngxScrollToDuration = 300;
  }
  onClick() {
    this.scrollToElement();
  }
  scrollToElement() {
    const targetElement = document.querySelector(this.ngxScrollTo);
    if (targetElement) {
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset + this.ngxScrollToOffset - 110;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      let startTime = null;
      const animateScroll = currentTime => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = this.ease(timeElapsed, startPosition, distance, this.ngxScrollToDuration);
        window.scrollTo(0, run);
        if (timeElapsed < this.ngxScrollToDuration) requestAnimationFrame(animateScroll);
      };
      requestAnimationFrame(animateScroll);
    }
  }
  ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }
  static {
    this.propDecorators = {
      ngxScrollTo: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
      }],
      ngxScrollToOffset: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
      }],
      ngxScrollToDuration: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
      }],
      onClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
        args: ['click']
      }]
    };
  }
};
ScrollToElementDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({
  selector: '[appScrollToElement]',
  standalone: true
})], ScrollToElementDirective);


/***/ }),

/***/ 43560:
/*!************************************************!*\
  !*** ./src/app/pipes/custom-filter-by.pipe.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomFilterByPipe: () => (/* binding */ CustomFilterByPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);


let CustomFilterByPipe = class CustomFilterByPipe {
  // Actual value transformation
  transform(value, property) {
    if (!value || !value.length) return value;
    value = value.slice(value.length > property ? value.length - property : 0, value.length);
    return value;
  }
};
CustomFilterByPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
  name: 'customFilterBy',
  standalone: true
})], CustomFilterByPipe);


/***/ }),

/***/ 60705:
/*!******************************************************************************************!*\
  !*** ./src/app/company-module/advance-decline/advance-decline.component.scss?ngResource ***!
  \******************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ 8564);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 98557);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.page-title {
  display: inline-block;
}`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 68141:
/*!******************************************************************************!*\
  !*** ./src/app/company-module/best-five/best-five.component.scss?ngResource ***!
  \******************************************************************************/
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
.bestfivewrap {
  padding: 0x;
  height: 100%;
}
@media (max-width: 767px) {
  .bestfivewrap {
    padding: 0px;
  }
}
.bestfivewrap .col-md-6 {
  padding: 0px 8px;
}
@media (max-width: 767px) {
  .bestfivewrap .card {
    width: 100%;
  }
}

.card {
  padding: 15px 18px;
}
@media (max-width: 767px) {
  .card {
    overflow-x: auto;
    display: block;
    width: 90%;
  }
}
.card .bids-offer-table {
  width: 100%;
  table-layout: fixed;
  font-size: 14px;
  font-family: Montserrat;
  line-height: 1.2;
}
@media (max-width: 767px) {
  .card .bids-offer-table {
    display: block;
  }
}
@media (max-width: 1550px) {
  .card .bids-offer-table {
    font-size: 12px;
  }
}
.card .bids-offer-table tr td,
.card .bids-offer-table tr th {
  padding: 7px 0px;
  font-family: "SF Pro Display";
  text-align: center;
  font-weight: 400;
  font-size: 14px;
}
@media (max-width: 767px) {
  .card .bids-offer-table tr td,
  .card .bids-offer-table tr th {
    padding: 6px 4px;
  }
}
.card .bids-offer-table tr td:first-child,
.card .bids-offer-table tr th:first-child {
  text-align: left;
  border-right: 1px solid #efefef;
  border-right: 0;
}
.card .bids-offer-table tr td:last-child,
.card .bids-offer-table tr th:last-child {
  text-align: right;
  border-left: 1px solid #efefef;
  border-left: 0;
}
.card .bids-offer-table tr td .highlight,
.card .bids-offer-table tr th .highlight {
  color: #fe616e;
  font-weight: 500;
}
.card .bids-offer-table th {
  font-weight: 500 !important;
  color: #000000;
}

.new-market-depth .bids-offer-table thead th {
  font-weight: bold;
}
.new-market-depth .bids-offer-table .brdr-right {
  border-right: 1px solid #cccccc;
}
.new-market-depth .bids-offer-table .txt-red {
  color: #EE404A;
}
.new-market-depth .bids-offer-table .txt-green {
  color: #009933;
}

.card-progress-bar .progress-bar-sub {
  display: flex;
  align-items: flex-end;
  margin-top: 5px;
  justify-content: space-between;
  position: relative;
}
.card-progress-bar .progress-bar-sub .bar-sub-cont h4 {
  font-size: 14px;
  color: #797979;
}
.card-progress-bar .progress-bar-sub .bar-sub-cont h3 {
  font-size: 16px;
  color: #3E404F;
  margin-top: 10px;
  font-weight: 600;
}

.card-progress-bar .progress {
  padding: 0;
  width: 68%;
  height: 4px;
  overflow: hidden;
  background: #EE404A;
  border-radius: 6px;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  bottom: 17px;
}
@media (max-width: 767px) {
  .card-progress-bar .progress {
    width: 60%;
    right: 10px;
  }
}
.card-progress-bar .bar {
  position: relative;
  float: left;
  min-width: 1%;
  height: 100%;
  background: #004393;
}

.text-blue {
  color: #004393;
}`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 19205:
/*!****************************************************************************************!*\
  !*** ./src/app/company-module/chartiq-simple/chartiq-simple.component.scss?ngResource ***!
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
@media (max-width: 1550px) {
  .font16 {
    font-size: 11px;
  }
}

.h20rem {
  height: 31rem !important;
}

.pmb0 {
  margin-bottom: 0px;
  padding-bottom: 0px;
}

.btn i {
  vertical-align: middle;
}

.expand-btn {
  position: absolute;
  right: 8px;
  top: 8px;
  z-index: 9;
  font-size: 20px;
  background: transparent;
  color: #1B1464;
  padding: 0;
}
@media (max-width: 767px) {
  .expand-btn {
    top: 45px;
  }
}

div.card {
  float: left;
  width: 100%;
  padding: 20px;
  padding-top: 10px;
  position: relative;
}
div.card div.controls {
  padding-bottom: 15px;
}
@media (min-width: 1550px) {
  div.card div.controls {
    padding: 37px;
    padding-bottom: 25px;
  }
}
div.card div.controls .mtop15 {
  max-width: 200px;
}
div.card div.controls div.changeUp {
  padding: 0;
}
div.card div.controls div.changeUp select,
div.card div.controls div.changeUp select:focus {
  outline: 0;
}
@media screen and (max-width: 560px) {
  div.card div.controls div.changeUp {
    width: 100%;
  }
}
div.card div.controls div.headsUp {
  padding: 0;
}
div.card div.controls div.headsUp > div {
  width: 20%;
  padding: 0px 15px;
}
div.card div.controls div.headsUp > div:first-child {
  padding-left: 0px;
}
div.card div.controls div.headsUp > div p {
  display: inline;
}
div.card div.controls div.headsUp > div:last-child {
  padding-right: 0px;
  border-right: 0;
}
@media screen and (max-width: 767px) {
  div.card div.controls div.headsUp > div {
    width: 33.33%;
    margin-bottom: 15px;
  }
}
@media screen and (max-width: 560px) {
  div.card div.controls div.headsUp > div {
    width: 50%;
  }
}
@media screen and (max-width: 560px) {
  div.card div.controls div.headsUp > div {
    width: 50%;
    margin-bottom: 15px;
  }
}
@media screen and (max-width: 767px) {
  div.card div.controls div.headsUp > div:nth-child(3n) {
    border-right: 0px;
  }
}
@media screen and (max-width: 560px) {
  div.card div.controls div.headsUp > div:nth-child(n) {
    border-right: 1px solid #cccccc;
  }
}
@media screen and (max-width: 767px) {
  div.card div.controls div.headsUp > div:nth-child(3n+1) {
    padding-left: 0px;
  }
}
@media screen and (max-width: 560px) {
  div.card div.controls div.headsUp > div:nth-child(3n+1) {
    padding-left: 10px;
  }
}
@media screen and (max-width: 560px) {
  div.card div.controls div.headsUp > div:nth-child(2n) {
    border-right: 0px;
  }
}
@media screen and (max-width: 560px) {
  div.card div.controls div.headsUp > div:nth-child(2n+1) {
    padding-left: 0px;
  }
}
div.card div.controls div.headsUp > div span {
  display: inline-block;
  width: 100%;
}
div.card div.controls div.headsUp > div span:nth-child(odd) {
  font-weight: bold;
  text-transform: uppercase;
}
div.card div.controls div.headsUp > div span:nth-child(even) {
  font-size: 14px;
}
div.card .card-block {
  padding: 0;
  position: relative;
}
@media (max-width: 767px) {
  div.card .card-block {
    margin-top: 7rem;
  }
}
div.card .card-block .chartContainer {
  width: 100%;
  border: 1px solid #ccc;
  position: absolute !important;
}
div.card .card-block .embed-responsive-16by9 {
  height: 339px;
  padding-bottom: 0;
  width: 100%;
}
div.card .card-block div.error-section {
  color: #ccc;
  font-size: 25px;
  position: absolute;
  width: 100%;
  top: 50%;
  z-index: 21;
  transform: translateY(-50%);
}
div.card .card-block div.error-section p {
  font-size: 25px;
}
div.card .card-block div.error-section button.popup-btn {
  box-shadow: none;
  background: transparent;
  color: #ff7c7c;
  color: #004393;
  letter-spacing: 2em;
  font-size: 18px;
  font-family: "Montserrat";
  border: none;
  letter-spacing: 0.1em;
  padding: 0;
}
div.card .stx-panel-control.stx-show {
  display: none !important;
}

label {
  /* display: inline-block; */
  max-width: 100%;
  margin-bottom: 5px;
  font-weight: bold;
}

.none-display {
  display: none;
}

.chart-switch {
  position: absolute;
  top: 10px;
  z-index: 9;
  font-size: 20px;
  background: transparent;
  padding: 0;
  right: 28px;
}
@media (max-width: 767px) {
  .chart-switch {
    top: 45px;
    left: 10px;
    position: absolute;
  }
}
.chart-switch .switch-wrap label {
  color: #797979 !important;
  margin-bottom: 0;
}
.chart-switch .switch-wrap label.selected {
  color: #004393 !important;
  font-weight: bold !important;
}

/* cq-chart-title{
  display: inline-grid !important;
} */
.chart-loading {
  position: relative;
  height: 200px;
  background: #ffffff;
  padding: 20px;
  margin: 20px;
  height: 31rem !important;
}

.duration-dropdown {
  width: auto;
  float: none;
  left: -10px;
}`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 54221:
/*!******************************************************************************************!*\
  !*** ./src/app/company-module/company-details/company-details.component.scss?ngResource ***!
  \******************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ 8564);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 98557);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.nodata {
  color: #a5a2a2;
  font-size: 16px;
  font-weight: bold;
}

.addreswrp {
  display: flex;
  height: 100%;
}

div#company-details {
  width: 100%;
  float: left;
  position: relative;
  min-height: 300px;
}

.nav-tabs {
  margin-bottom: 35px !important;
  display: flex;
}
@media (max-width: 1024px) {
  .nav-tabs {
    margin-bottom: 15px !important;
  }
}

.white-card {
  float: left;
  background: #ffffff;
  padding: 19px 33px;
  box-shadow: 0px 0px 50px 0px rgba(169, 172, 189, 0.15);
}
@media screen and (min-width: 1023px) and (max-width: 1024px) {
  .white-card {
    padding: 14px 14px;
  }
}

.company-details-wrap {
  padding: 27px 21px;
  box-shadow: 0px 0px 50px 0px rgba(169, 172, 189, 0.15);
  background-color: #ffffff;
}

.registerbox {
  background-color: #79b7ee;
  padding: 30px 27px 15px 27px;
  display: inline-block;
  height: 100%;
}
@media screen and (min-width: 1023px) and (max-width: 1024px) {
  .registerbox {
    display: none;
  }
}
@media (max-width: 990px) {
  .registerbox {
    display: none;
  }
}

.text-gray1 {
  margin-top: 3px;
}

.fa-6 {
  font-size: 6em;
}

.fnt12 {
  font-size: 12px;
}

.pl0 {
  padding-left: 0;
}

.textblue {
  color: #9fcbf3;
}

.flex-container {
  display: flex;
}
@media screen and (max-width: 560px) {
  .flex-container {
    flex-direction: column;
  }
}
.flex-container .white-card {
  height: 100%;
}
@media screen and (max-width: 560px) {
  .flex-container .white-card {
    margin-bottom: 15px;
  }
}
@media screen and (min-width: 1025px) and (max-width: 1920px) {
  .flex-container .white-card h6 {
    display: none;
  }
}

#profile p.note {
  text-align: justify;
  font-size: 12px;
  line-height: 2.2rem;
  background: #f6f8f9;
  padding: 16px;
}

@media screen and (max-width: 560px) {
  .pl-0 {
    padding-right: 0px;
  }
}`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 77633:
/*!******************************************************************!*\
  !*** ./src/app/company-module/company.component.scss?ngResource ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ 8564);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 98557);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*Bootstrap Override*/
/*Custom variables*/
/*Icons Variables*/
/*Responsive screen width*/
iframe {
  display: block;
  /* iframes are inline by default */
  background: #000000;
  border: none;
  /* Reset default border */
  height: 100vh;
  /* Viewport-relative units */
  /* width: 100vw; */
  width: 100%;
}

.flexwrap {
  display: flex;
  flex-wrap: wrap;
}
@media (max-width: 767px) {
  .flexwrap {
    overflow-x: hidden;
  }
}

.flexbox {
  display: flex;
  flex-direction: column;
}

.flexauto {
  flex: 1 0 auto;
}

@media screen and (max-width: 767px) {
  .col-sm-7.pr-0 {
    padding-right: 15px;
  }
}
.market-indices .grow .inside-grow-content .card_name {
  text-transform: uppercase;
  font-weight: 500;
  font-size: 12px;
  white-space: nowrap;
  display: none;
}
.market-indices .grow .inside-grow-content .card_value {
  font-size: 20px;
  font-weight: bold;
  line-height: 30px;
  display: inline-block;
}
.market-indices .grow .inside-grow-content .card_smallfont {
  font-size: 12px;
}
.market-indices .custom-select {
  width: 100%;
  position: relative;
}
.market-indices .custom-select:after {
  content: "\\f107";
  position: absolute;
  top: 0;
  font-family: "icomoon" !important;
  font-style: normal;
  font-weight: normal;
  line-height: 1;
  left: auto;
  right: 0;
  height: 100%;
  font-size: 25px;
  padding: 12px 12px;
  background: #fe595d;
  color: #ffffff;
  pointer-events: none;
}
@media screen and (max-width: 990px) {
  .market-indices .custom-select:after {
    padding: 12px 5px;
  }
}
.market-indices .custom-select select {
  padding-left: 10px;
  padding-right: 30px;
  -webkit-appearance: none;
  border-radius: 0px;
  outline: none;
  box-shadow: none;
  font-weight: 500;
  text-transform: uppercase;
  width: 100%;
  height: 48px;
  font-size: 14px;
  font-weight: bold;
  border: 1px solid #fe595d !important;
}
.market-indices .custom-select select option {
  font-size: 14px;
  font-weight: normal;
}
@media screen and (min-width: 991px) and (max-width: 1088px) {
  .market-indices .custom-select select {
    padding-left: 10px;
    padding-right: 25px;
  }
}
@media screen and (max-width: 990px) {
  .market-indices .custom-select select {
    padding-left: 10px;
    padding-right: 25px;
    font-size: 14px;
  }
}
.market-indices .key-info {
  display: flex;
  align-items: center;
  justify-content: center;
}
.market-indices .key-info > div {
  padding: 0px 5px;
}
.market-indices .key-info .text-center {
  text-align: center;
  color: #535353;
  font-size: 11px;
}
.market-indices .key-info .bold {
  color: #282828;
}
.market-indices .key-info .margin-7 {
  margin: 6px 0;
}
.market-indices .key-info {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
@media screen and (max-width: 767px) {
  .market-indices .key-info {
    text-align: left;
    justify-content: left;
  }
}
@media screen and (max-width: 560px) {
  .market-indices .key-info {
    display: block;
    font-size: 10px;
  }
}
@media screen and (max-width: 1024px) {
  .market-indices .key-info {
    font-size: 12px;
  }
}
.market-indices .key-info > div {
  padding: 0px 15px;
  border-right: 1px solid #cccccc;
}
@media screen and (max-width: 767px) {
  .market-indices .key-info > div {
    margin-bottom: 15px;
    padding: 0px 15px;
  }
}
@media screen and (max-width: 480px) {
  .market-indices .key-info > div {
    width: 50%;
    float: left;
    clear: none;
  }
}
.market-indices .key-info > div .pb-10 {
  padding-bottom: 10px !important;
}
.market-indices .key-info > div:first-child {
  padding-left: 0px;
}
@media screen and (max-width: 767px) {
  .market-indices .key-info > div:nth-child(3n) {
    border-right: 0px;
  }
}
@media screen and (max-width: 560px) {
  .market-indices .key-info > div:nth-child(3n) {
    border-right: 1px solid #cccccc;
  }
}
@media screen and (max-width: 767px) {
  .market-indices .key-info > div:nth-child(3n+1) {
    padding-left: 0px;
  }
}
@media screen and (max-width: 560px) {
  .market-indices .key-info > div:nth-child(3n+1) {
    padding-left: 10px;
  }
}
@media screen and (max-width: 560px) {
  .market-indices .key-info > div:nth-child(2n) {
    border-right: 0px;
  }
}
@media screen and (max-width: 560px) {
  .market-indices .key-info > div:nth-child(2n+1) {
    padding-left: 0px;
  }
}
.market-indices .key-info > div:last-child {
  padding-right: 0px;
  border-right: 0;
}
.market-indices .key-info .text-center {
  text-align: center;
  color: #535353;
}
@media screen and (max-width: 767px) {
  .market-indices .key-info .text-center {
    text-align: left;
  }
}
.market-indices .key-info .bold {
  color: #282828;
}
.market-indices .key-info .margin-7 {
  margin: 6px 0;
}
.market-indices .table > tbody > tr > td {
  text-align: left;
}
.market-indices .table > tbody > tr > td:first-child {
  text-align: left;
}
.market-indices .table > tbody > tr > td {
  padding: 8px;
  line-height: 1.42857143;
  vertical-align: top;
  border-top: 1px solid #ffffff;
}
@media (max-width: 767px) {
  .market-indices .grow {
    margin: 15px 0px;
  }
  .market-indices .pl-0 {
    padding-left: 15px;
  }
  .market-indices .key-info {
    padding: 0px 7px;
  }
}
.market-indices table {
  margin-bottom: 0px;
}
@media screen and (max-width: 1550px) {
  .market-indices table {
    font-size: 13px;
  }
}
.market-indices tbody {
  display: block;
  height: 400px;
  overflow-y: auto;
  overflow-x: hidden;
}
@media (max-width: 1024px) {
  .market-indices tbody {
    font-size: 12px;
  }
}
@media screen and (min-width: 767px) and (max-width: 990px) {
  .market-indices tbody {
    height: 215px;
  }
}
@media screen and (max-width: 767px) {
  .market-indices tbody {
    width: 150%;
  }
}
@media screen and (max-width: 560px) {
  .market-indices tbody {
    width: 200%;
  }
}
.market-indices tbody tr td {
  white-space: pre-wrap;
}
.market-indices thead,
.market-indices tbody tr {
  display: table;
  width: 100%;
  table-layout: fixed;
}
.market-indices thead {
  width: calc(100% - 5px);
}
@media screen and (max-width: 767px) {
  .market-indices thead {
    width: calc(150% - 5px);
  }
}
@media screen and (max-width: 560px) {
  .market-indices thead {
    width: calc(200% - 5px);
  }
}
@media screen and (min-width: 768px) and (max-width: 990px) {
  .market-indices .font11 {
    font-size: 9px;
  }
  .market-indices .key-info .bold {
    font-size: 12px;
  }
}
.market-indices .btn {
  text-align: center;
  padding: 0 !important;
  border-radius: 0;
  font-size: 26px;
  width: 75px;
  height: 48px;
  border-radius: 5px;
}
@media (max-width: 1550px) {
  .market-indices .btn {
    padding: 0 !important;
    font-size: 22px;
    width: 60px;
    height: 43px;
  }
}
.market-indices .btn.add {
  background: #faecef;
  border-color: #faecef;
  background: #f4f3f8;
  border-color: #f4f3f8;
}
.market-indices .btn.add i {
  background-image: linear-gradient(to right, #ffc174 0%, #fe616e 100%);
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  color: #1B1464;
}
.market-indices .btn.btn-gradient {
  padding: 5px 32px;
}
@media (max-width: 1550px) {
  .market-indices .btn.btn-gradient {
    padding: 5px 20px;
    font-size: 24px;
  }
}
.market-indices .add-remove-section {
  position: relative;
  display: flex;
  align-items: center;
}
.market-indices .add-remove-section .dropdown-menu {
  left: auto;
  right: 0;
  margin: 10px 0 0 0;
  border: 0;
}
.market-indices .add-remove-section .dropdown-menu li a {
  padding: 6px 20px;
}
.market-indices .add-remove-section .dropdown-menu li a:hover {
  background: #fe595d;
  color: #ffffff;
}

.nodata {
  color: #a5a2a2 !important;
  font-size: 16px !important;
  font-weight: bold !important;
  text-align: center !important;
}

.popup-btn {
  box-shadow: none;
  background: transparent;
  letter-spacing: 2em;
  font-size: 14px;
  font-family: "SF Pro Display";
  border: none;
  letter-spacing: 0.1em;
  padding: 0;
  color: #1B1464;
  font-weight: 500;
}
.popup-btn i {
  margin-right: 10px;
}

.info-icon {
  width: 20px;
  height: 20px;
  border: 1px solid #1B1464;
  display: inline-block;
  letter-spacing: 0;
  border-radius: 100%;
  font-size: 14px;
  line-height: 20px;
}

.line-height-css {
  line-height: 1.7rem !important;
}

.border-right-none {
  border-right: none !important;
}

.ohlc-container {
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 10px;
  flex-wrap: nowrap;
}

.stripe-4 {
  color: #ffffff;
  background: repeating-linear-gradient(-55deg, #222, #222 10px, #333 10px, #333 20px);
}

.ohlc-container {
  display: flex;
  justify-content: flex-end;
  position: relative;
  bottom: 0;
  margin-top: 15px;
}
.ohlc-container .border-right-none {
  padding: 0 20px;
  border: 1px solid #CCCCCC;
  border-top: 0;
  width: 120px;
  border-bottom: 0;
}
.ohlc-container .border-right-none:last-child {
  border-right: 0;
}
.ohlc-container .border-right-none:first-child {
  border-left: 0;
  padding-right: 0;
}

.added-watchlist {
  font-size: 20px;
  color: #004393;
  font-weight: 600;
}

.position-relative {
  position: relative;
  float: right;
}

/* .m-r-18{
  margin-right: 18px;
} */
.btn-sets {
  float: right;
  width: 50px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(221, 221, 221, 0.2980392157);
  border: 0;
  border-radius: 4px;
  margin-right: 10px;
}

.cust-block {
  width: 100%;
  padding: 18px;
  padding-bottom: 10px;
}

.chart-loading {
  position: relative;
  height: 200px;
  background: #ffffff;
  padding: 20px;
  margin: 20px;
  height: 31rem !important;
}`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 22473:
/*!********************************************************************************!*\
  !*** ./src/app/company-module/fut-option/fut-option.component.scss?ngResource ***!
  \********************************************************************************/
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
.optionfuture label {
  width: 100%;
}
.optionfuture label.custom-select {
  position: relative;
  display: inline-block;
  width: 100%;
}

.optfutwrap {
  padding: 9px;
  margin-bottom: 20px;
}
@media (max-width: 767px) {
  .optfutwrap {
    clear: both;
  }
}

@media screen and (max-width: 1200px) {
  .optionfuture form .col-sm-3 {
    margin-bottom: 15px;
  }
}
@media screen and (max-width: 460px) {
  .optionfuture form .col-sm-3 {
    width: 100%;
  }
}
.optionfuture form .col-sm-3:last-child {
  margin-bottom: 0px;
}

.custom-select-completer {
  position: relative;
}
.custom-select-completer .custom-select {
  border-radius: 0;
  text-align: left;
  border-bottom: 1px solid #fe7f7d;
  border-bottom: 1px solid #666666;
  box-shadow: none;
}
.custom-select-completer .completer-wrapper {
  position: absolute;
  z-index: 90;
  width: 100%;
  border-top: 0px;
  top: 0;
}
.custom-select-completer .completer-wrapper .form-control {
  box-shadow: none;
  outline: none;
  border-radius: 0px;
  border: none;
  border-bottom: 1px solid #fe7f7d;
  width: 84%;
}
.custom-select-completer .completer-wrapper ul {
  height: auto;
  max-height: 200px;
  padding: 0;
  list-style: none;
  overflow-y: scroll;
  margin-bottom: 0px;
  background-color: #ffffff;
  border: 1px solid #ccc;
  border-top: none;
}
.custom-select-completer .completer-wrapper ul li {
  padding: 5px 10px;
  cursor: pointer;
}
.custom-select-completer .completer-wrapper ul li:hover {
  background-color: #e2e2e2;
}
.custom-select-completer .completer-wrapper ul li.active {
  background-color: #e2e2e2;
}`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 14179:
/*!****************************************************************************!*\
  !*** ./src/app/company-module/key-info/key-info.component.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ 8564);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 98557);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@media (max-width: 1440px) {
  .font14 {
    font-size: 13px;
  }
}

.key-info {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.key-info > div {
  padding: 10px 20px;
  width: 50%;
  border-right: 1px solid #cccccc;
}
@media (max-width: 1550px) {
  .key-info > div {
    padding: 8px 10px;
  }
}
@media screen and (min-width: 991px) and (max-width: 1200px) {
  .key-info > div {
    width: 100%;
    padding-left: 0;
    border-right: 0;
    font-size: 12px;
  }
}
@media screen and (min-width: 768px) and (max-width: 990px) {
  .key-info > div {
    width: 100%;
    padding-left: 0;
    border-right: 0;
    font-size: 12px;
  }
}
@media screen and (max-width: 767px) {
  .key-info > div {
    width: 50%;
    padding: 0px 20px;
  }
}
@media screen and (max-width: 560px) {
  .key-info > div {
    width: 100%;
    padding-left: 0;
    border-right: 0;
  }
}
.key-info > div .text-left {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.key-info > div span {
  display: block;
  line-height: 25px;
}
.key-info > div:nth-child(2n+1) {
  padding-left: 0px;
}
@media (min-width: 560px) and (max-width: 767px) {
  .key-info > div:nth-child(2n+1) {
    padding-left: 20px;
  }
}
.key-info > div:nth-child(2n) {
  border-right: 0px;
}
@media (min-width: 560px) and (max-width: 767px) {
  .key-info > div:nth-child(2n) {
    border-right: 1px solid #cccccc;
  }
}
@media screen and (max-width: 560px) {
  .key-info > div:nth-child(3n+1) {
    padding-left: 0px;
  }
}
@media (max-width: 1200px) {
  .key-info > div:nth-child(2n) {
    border-right: 0px;
  }
}
@media screen and (min-width: 560px) and (max-width: 767px) {
  .key-info > div:nth-child(2n+1) {
    padding-left: 0px;
  }
}

.text-end {
  text-align: end;
}

.font14 {
  font-size: 13px;
}`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 11745:
/*!**********************************************************************************************!*\
  !*** ./src/app/company-module/news-announcement/news-announcement.component.scss?ngResource ***!
  \**********************************************************************************************/
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
a:hover {
  text-decoration: none;
}

.btn-gradient {
  margin-top: 30px;
}
@media (max-width: 1550px) {
  .btn-gradient {
    margin-top: 20px;
  }
}

.intial-text {
  height: 20px;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: justify;
  color: #797979;
  font-family: "Montserrat";
  font-family: "SF Pro Display";
}

.resp-tabs-container .tabs-data {
  height: 303px;
  overflow-y: auto;
  overflow-x: hidden;
  padding-right: 5px;
  padding-right: hidden;
  width: 100%;
}
.resp-tabs-container .tabs-data > div {
  border-top: 1px solid #F4F3F8;
}
.resp-tabs-container .tabs-data > div:first-child {
  border-top: 0px;
}
.resp-tabs-container .tabs-data > div:last-child {
  margin-bottom: 0px;
}

.mt-5 {
  margin-top: 5px !important;
}

.date {
  display: block;
  font-size: 12px;
  color: #797979;
  font-family: "Montserrat";
  line-height: 18px;
  margin-bottom: 5px;
}
@media (max-width: 1550px) {
  .date {
    font-size: 10px;
    margin-bottom: 2px;
    line-height: 1.2;
  }
}

.nav-tabs {
  border-bottom: 1px solid rgba(0, 0, 0, 0.2196078431);
  margin-bottom: 10px;
}

.headline a {
  color: #797979;
  font-size: 14px;
  font-family: "Montserrat";
  font-family: "SF Pro Display";
  margin-top: 5px;
  cursor: pointer;
  display: block;
}
@media (max-width: 1550px) {
  .headline a {
    font-size: 13px;
    margin-top: 2px;
    line-height: 1.2;
  }
}
.headline a:hover {
  color: #1862F2;
  text-decoration: none;
}

.outer {
  background-color: #e3f0fb;
  width: 20px;
  height: 20px;
  position: relative;
  border-radius: 50%;
  margin-right: 20px;
}

.flex-wrap {
  display: flex;
  align-items: center;
}

.inner {
  background-color: #6A97D7;
  top: 25%;
  left: 25%;
  width: 50%;
  height: 50%;
  position: relative;
  border-radius: 50%;
}

.pbt-10 {
  padding-top: 15px !important;
  padding-bottom: 15px !important;
}

@media screen and (max-width: 767px) {
  .pl-0 {
    padding-left: 15px;
  }
}
.nodata {
  color: #a5a2a2;
  font-size: 16px;
  font-weight: bold;
}

.mb-10 {
  margin-bottom: 10px !important;
}`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 5389:
/*!******************************************************************************************!*\
  !*** ./src/app/company-module/overview-navbar/overview-navbar.component.scss?ngResource ***!
  \******************************************************************************************/
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
.company-page-listing-wrap {
  list-style: none;
  margin: 0px;
  width: 100%;
  float: left;
  display: flex;
  flex-wrap: wrap;
  padding: 0px;
  background-color: #ffffff;
  border-radius: 3px;
  box-shadow: 0px 0px 50px 0px rgba(169, 172, 189, 0.15);
}
.company-page-listing-wrap li {
  color: #8a97a0;
  font-size: 13px;
  font-family: "Montserrat";
  text-transform: capitalize;
  letter-spacing: 0.1em;
}
.company-page-listing-wrap li a {
  padding: 8px 40px;
  display: inline-block;
  color: #8a97a0;
  text-decoration: none;
  font-family: "Montserrat";
  font-family: "SF Pro Display";
  font-weight: 500;
  letter-spacing: 0.8px;
  display: block;
  white-space: nowrap;
  width: 100%;
  text-align: center;
  border-bottom: 2px solid #bfbfbf;
  font-size: 14px;
  color: #797979;
}
@media (max-width: 1280px) {
  .company-page-listing-wrap li a {
    padding: 8px 31px;
  }
}
@media (min-width: 991px) and (max-width: 1084px) {
  .company-page-listing-wrap li a {
    padding: 10px 15px;
  }
}
@media (min-width: 768px) and (max-width: 990px) {
  .company-page-listing-wrap li a {
    padding: 19px 20px;
  }
}
.company-page-listing-wrap li a.selectedTab {
  border-bottom: 2px solid #004393;
  font-weight: 600;
}
.company-page-listing-wrap a {
  text-decoration: none;
  color: #000;
}

li a:hover,
.company-page-listing-wrap li a:focus {
  background-image: linear-gradient(to left, #ffc174 0%, #fe616e 100%);
  color: #fff !important;
  background: transparent !important;
  color: #1B1464 !important;
  border-bottom: 2px solid #1B1464;
}

.padding-0 {
  padding: 0px;
}

.selectedTab {
  background-image: linear-gradient(to left, #ffc174 0%, #fe616e 100%);
  color: #fff !important;
  background: transparent !important;
  color: #004393 !important;
  border-bottom: 2px solid #004393;
  font-weight: bold;
}

.mb-20 {
  margin-bottom: 20px;
}

.new-tag {
  background: #E92929;
  color: white;
  padding: 2px 3px;
  border-radius: 2px;
  position: relative;
  top: -5px;
  font-size: 8px !important;
  cursor: pointer;
  font-weight: 500;
}`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 52845:
/*!********************************************************************************************!*\
  !*** ./src/app/company-module/peer-comparision/peer-comparision.component.scss?ngResource ***!
  \********************************************************************************************/
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
.heading {
  text-align: left;
  color: #8a97a0;
  font-weight: bold;
  font-family: "Montserrat";
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0px;
  color: #3E404F;
}

.subheading {
  margin-bottom: 8px;
}

#peer-comparison .company-block {
  min-height: 300px;
}

table th {
  text-align: right !important;
  font-size: 13px;
  white-space: nowrap;
  color: #333333;
  font-weight: 500;
}
@media screen and (max-width: 1550px) {
  table th {
    font-size: 13px;
  }
}
table th:first-child {
  text-align: left !important;
}
table td {
  text-align: right !important;
  font-size: 12px;
  font-family: "Montserrat";
  padding: 5px 8px 5px 8px;
  color: #333;
  font-family: "SF Pro Display";
  font-weight: 400;
  border-top: 0;
  border-bottom: transparent solid 1px;
}
@media (max-width: 990px) {
  table td {
    font-size: 10px;
  }
}
table td:first-child {
  text-align: left !important;
}
table .bold .clicklink {
  color: #1862F2;
  font-weight: 600;
}
table .bold td {
  font-weight: 600;
}

.nodata {
  color: #a5a2a2;
  font-size: 16px;
  font-weight: bold;
}

.clicklink {
  color: #5bb2ff;
  cursor: pointer;
}
.clicklink:hover {
  color: #1862F2;
  cursor: pointer;
  text-decoration: underline;
}

table.table > thead:first-child tr:first-child th {
  vertical-align: top;
  padding: 10px 3px 10px;
  font-weight: 500;
  border: 0;
}`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 83345:
/*!**********************************************************************!*\
  !*** ./src/app/company-module/pivot/pivot.component.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ 8564);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 98557);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `table {
  font-size: 12px;
}
table th {
  padding: 8px;
}

.page-title {
  display: inline-block;
}

.switch-wrap {
  height: auto !important;
}

select#basic2 {
  display: inline;
  width: auto;
  margin-left: 5px;
  font-size: 12px;
  letter-spacing: 0.8px;
  width: 115px;
  font-weight: 500;
}

.pivot-svg {
  overflow: visible;
}

@media (max-width: 1200px) {
  .portfolio-dropdown label {
    display: none;
  }
}

.financials-wrap {
  height: calc(100% - 30px);
}
.financials-wrap .card {
  height: 100%;
}
.financials-wrap .card .company-block {
  height: 100%;
}
.financials-wrap div.text-center {
  height: calc(100% - 40px);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: #cccccc;
}
.financials-wrap #speedometerBar {
  transform-origin: bottom center;
}

.table > thead > tr > th,
.table > thead > tr > td,
.table > tbody > tr > th,
.table > tbody > tr > td,
.table > tfoot > tr > th,
.table > tfoot > tr > td {
  border-top: 0;
}`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 74725:
/*!**************************************************************************!*\
  !*** ./src/app/company-module/reports/reports.component.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ 8564);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 98557);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.clicklink {
  color: #5bb2ff;
  cursor: pointer;
  text-transform: uppercase;
}

.hit,
.failed {
  color: #ff1a1a;
}

.achieved {
  color: #009933;
}

.category {
  text-transform: uppercase;
}

table {
  font-size: 14px;
}
@media (max-width: 1550px) {
  table {
    font-size: 13px;
  }
}
table tbody tr {
  cursor: pointer;
}
table tbody tr:hover {
  background: #e5e5e5;
}
table tr td,
table th td {
  vertical-align: middle;
}

small {
  font-size: 80%;
}

.nav-tabs {
  margin-bottom: 10px;
}

.btn {
  padding: 2px 15px;
  color: #ffffff;
  background: #a4a4a4;
}
.btn.btn-buy, .btn.btn-add {
  background: #febf74;
}
.btn.btn-sell {
  background: #f8606c;
}

.mobile-table .call-type {
  text-transform: uppercase;
  font-weight: bold;
}
.mobile-table .call-type.buy, .mobile-table .call-type.dips {
  color: #febf74;
}
.mobile-table .call-type.sell {
  color: #f8606c;
}

.pnl.red {
  color: #ff1a1a;
}
.pnl.green {
  color: #009933;
}

.reports-status > div {
  margin: 0px;
  display: inline-block;
  vertical-align: middle;
}

.sbdesk-tab-cont .sbdesk-tab-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 20px;
}
.sbdesk-tab-cont .sbdesk-tab-list .sbdesk-tab-itm {
  margin-bottom: 35px;
  width: 48%;
  padding: 5px;
  position: relative;
}
@media (max-width: 767px) {
  .sbdesk-tab-cont .sbdesk-tab-list .sbdesk-tab-itm {
    width: 100%;
  }
}
.sbdesk-tab-cont .sbdesk-tab-list .sbdesk-tab-itm .tab-itm-top {
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
}
.sbdesk-tab-cont .sbdesk-tab-list .sbdesk-tab-itm .tab-itm-top .itm-top-ttl .ttl-mn {
  font-size: 16px;
  font-weight: 600;
  color: #3E404F;
  margin-top: 6px;
}
.sbdesk-tab-cont .sbdesk-tab-list .sbdesk-tab-itm .tab-itm-top .itm-top-ttl .ttl-mn .psn {
  font-weight: 400;
  color: #868686;
}
.sbdesk-tab-cont .sbdesk-tab-list .sbdesk-tab-itm .tab-itm-top .itm-top-ttl .ttl-sm {
  font-size: 14px;
  font-weight: 500;
  color: #797979;
}
.sbdesk-tab-cont .sbdesk-tab-list .sbdesk-tab-itm .tab-itm-top .itm-top-ttl .ttl-sm .red-txt {
  color: #ff1a1a !important;
}
.sbdesk-tab-cont .sbdesk-tab-list .sbdesk-tab-itm .tab-itm-top .itm-top-ttl .ttl-sm .grn-txt {
  color: #00b26b !important;
}
.sbdesk-tab-cont .sbdesk-tab-list .sbdesk-tab-itm .tab-itm-top .itm-top-ttl .ttl-sm .balance-txt {
  color: #F6B900;
}
.sbdesk-tab-cont .sbdesk-tab-list .sbdesk-tab-itm .tab-itm-top .itm-top-ttl .ttl-sm .bal-txt {
  color: #F6B900;
}
.sbdesk-tab-cont .sbdesk-tab-list .sbdesk-tab-itm .tab-itm-top .itm-top-ttl .ttl-sm .pri-txt {
  color: #004393;
}
.sbdesk-tab-cont .sbdesk-tab-list .sbdesk-tab-itm .tab-itm-top .itm-date-btn {
  text-align: right;
}
.sbdesk-tab-cont .sbdesk-tab-list .sbdesk-tab-itm .tab-itm-top .itm-date-btn .date-post {
  font-size: 14px;
  font-weight: 500;
  color: #797979;
}
.sbdesk-tab-cont .sbdesk-tab-list .sbdesk-tab-itm .tab-itm-top .itm-date-btn .btn-sm {
  border-radius: 16px;
  background: rgba(46, 119, 245, 0.1019607843);
  border: 0;
  font-size: 14px;
  color: #004393;
  display: inline-block;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 4px 15px;
  padding-left: 25px;
  font-weight: 500;
  position: relative;
}
.sbdesk-tab-cont .sbdesk-tab-list .sbdesk-tab-itm .tab-itm-top .itm-date-btn .btn-sm::before {
  content: "";
  width: 6px;
  height: 6px;
  display: block;
  background: #004393;
  border-radius: 50%;
  position: absolute;
  left: 13px;
  top: 11px;
}
.sbdesk-tab-cont .sbdesk-tab-list .sbdesk-tab-itm .tab-itm-bottom {
  overflow: hidden;
}
.sbdesk-tab-cont .sbdesk-tab-list .sbdesk-tab-itm .tab-itm-bottom .tab-itm-baar {
  overflow: hidden;
  padding-bottom: 60px;
  padding-top: 38px;
  position: relative;
}
.sbdesk-tab-cont .sbdesk-tab-list .sbdesk-tab-itm .tab-itm-bottom .tab-itm-baar .itm-baar-line-holding::before {
  background: #0066b3 !important;
}
.sbdesk-tab-cont .sbdesk-tab-list .sbdesk-tab-itm .tab-itm-bottom .tab-itm-baar .itm-baar-line {
  background: #d7deef;
  border-radius: 8px;
  display: block;
  height: 5px;
  position: relative;
  width: 100%;
}
.sbdesk-tab-cont .sbdesk-tab-list .sbdesk-tab-itm .tab-itm-bottom .tab-itm-baar .itm-baar-line::before {
  background: #ef404a;
  border-radius: 4px;
  content: "";
  display: block;
  height: 5px;
  left: 0;
  position: absolute;
  top: 0;
  width: 14px;
}
.sbdesk-tab-cont .sbdesk-tab-list .sbdesk-tab-itm .tab-itm-bottom .tab-itm-baar .itm-baar-line::after {
  background: #00b26b;
  border-radius: 4px;
  content: "";
  display: block;
  height: 5px;
  position: absolute;
  right: 0;
  top: 0;
  width: 14px;
}
.sbdesk-tab-cont .sbdesk-tab-list .sbdesk-tab-itm .tab-itm-bottom .tab-itm-baar .stp-loss {
  bottom: 0;
  left: 0;
  position: absolute;
}
.sbdesk-tab-cont .sbdesk-tab-list .sbdesk-tab-itm .tab-itm-bottom .tab-itm-baar .targt-prize {
  bottom: 0;
  position: absolute;
  right: 0;
  text-align: right;
}
.sbdesk-tab-cont .sbdesk-tab-list .sbdesk-tab-itm .tab-itm-bottom .tab-itm-baar .entry-prize {
  background: #fff;
  bottom: 0;
  position: absolute;
  right: inherit;
  text-align: left;
}
.sbdesk-tab-cont .sbdesk-tab-list .sbdesk-tab-itm .tab-itm-bottom .tab-itm-baar .entry-prize::before {
  background: #0066b3;
  border-radius: 5px;
  content: "";
  display: block;
  height: 10px;
  left: 12px;
  margin: 0 auto;
  position: absolute;
  right: inherit;
  top: -14px;
  width: 2px;
}
.sbdesk-tab-cont .sbdesk-tab-list .sbdesk-tab-itm .tab-itm-bottom .tab-itm-baar .curnt-mrk-price {
  bottom: inherit;
  position: absolute;
  top: 10px;
}
.sbdesk-tab-cont .sbdesk-tab-list .sbdesk-tab-itm .tab-itm-bottom .tab-itm-baar .curnt-mrk-price::before {
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-top: 10px solid #3E404F;
  bottom: -14px;
  content: "";
  height: 0;
  left: 0;
  margin: 0 auto;
  position: absolute;
  right: 1px;
  width: 0;
}
.sbdesk-tab-cont .sbdesk-tab-list .sbdesk-tab-itm .tab-itm-bottom .tab-itm-baar .curnt-mrk-price.red-txt::before {
  border-top-color: #ef404a;
}
.sbdesk-tab-cont .sbdesk-tab-list .sbdesk-tab-itm .tab-itm-bottom .tab-itm-baar .curnt-mrk-price.grn-txt::before {
  border-top-color: #00b26b;
}
.sbdesk-tab-cont .sbdesk-tab-list .sbdesk-tab-itm .tab-itm-bottom .tab-itm-baar .curnt-mrk-price.valueset {
  right: 0;
  left: inherit !important;
}
.sbdesk-tab-cont .sbdesk-tab-list .sbdesk-tab-itm .tab-itm-bottom .tab-itm-baar .curnt-mrk-price.valueset::before {
  right: 0;
  left: inherit;
}
.sbdesk-tab-cont .sbdesk-tab-list .sbdesk-tab-itm .tab-itm-bottom .tab-itm-baar .curnt-mrk-price.leftvalueset {
  right: inherit !important;
  left: 0 !important;
}
.sbdesk-tab-cont .sbdesk-tab-list .sbdesk-tab-itm .tab-itm-bottom .tab-itm-baar .curnt-mrk-price.leftvalueset::before {
  left: 0;
  right: inherit;
}
.sbdesk-tab-cont .sbdesk-tab-list .sbdesk-tab-itm .tab-itm-bottom .tab-itm-baar .curnt-mrk-price h4 {
  color: #868686;
  font-size: 14px;
}
.sbdesk-tab-cont .sbdesk-tab-list .sbdesk-tab-itm .tab-itm-bottom .tab-itm-baar .itm-cont-des h4 {
  font-size: 16px;
  color: #3E404F;
  font-weight: 600;
}
.sbdesk-tab-cont .sbdesk-tab-list .sbdesk-tab-itm .tab-itm-bottom .tab-itm-baar .itm-cont-des h5 {
  color: #797979;
}
.sbdesk-tab-cont .sbdesk-tab-list .sbdesk-tab-itm::before {
  content: "";
  width: 1px;
  height: 100%;
  display: block;
  background: rgba(221, 221, 221, 0.6901960784);
  position: absolute;
  left: -20px;
  top: 0;
}
.sbdesk-tab-cont .sbdesk-tab-list .sbdesk-tab-itm:first-child::before {
  display: none;
}

.red-btn {
  background: #ffe1e6 !important;
  color: #ff1a1a !important;
}

.red-btn::before {
  background: #ff1a1a !important;
}

.m-auto {
  margin: auto;
}`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 71613:
/*!**************************************************************************************!*\
  !*** ./src/app/company-module/segment-token/segment-token.component.scss?ngResource ***!
  \**************************************************************************************/
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
.ngxcarouselPoint {
  list-style-type: none;
  text-align: center;
  padding: 12px;
  margin: 0;
  white-space: nowrap;
  overflow: auto;
  position: absolute;
  width: 100%;
  left: 0;
  box-sizing: border-box;
}

.ngxcarouselPoint li {
  display: inline-block;
  border-radius: 999px;
  background: #ccc;
  padding: 5px;
  margin: 0 3px;
  transition: 0.4s ease all;
}

.ngxcarouselPoint li.active {
  background: #aaa;
  width: 10px;
}

@media (min-width: 1300px) {
  .ngxcarouselPoint {
    display: none !important;
  }
}
.item-wrapper {
  margin-right: 27px;
  float: left;
  width: 30%;
  cursor: pointer;
}
@media (max-width: 1550px) {
  .item-wrapper {
    font-size: 11px;
  }
}
@media (max-width: 767px) {
  .item-wrapper {
    width: 100%;
    margin: 0;
  }
}
.item-wrapper:last-child {
  margin-right: 0px;
}

ngu-carousel .item-wrapper {
  width: 100%;
}
@media (min-width: 1300px) {
  ngu-carousel div.ngxcarouselPointDefault {
    display: none !important;
  }
}

.card-lists {
  display: flex;
  align-items: center;
}

.slider-btn {
  background: #ffffff;
  margin-top: -20px;
  padding: 0px;
}
.slider-btn.leftRs {
  top: 70%;
  transform: translateY(-50%);
  left: -10px;
}
.slider-btn.rightRs {
  top: 70%;
  transform: translateY(-50%);
  right: -10px;
}

.grow {
  padding: 20px 15px;
  padding-bottom: 10px;
  transition: height 0.4s;
  letter-spacing: 0.1em;
  -webkit-transition: height 0.4s;
  background-color: #ffffff;
  box-shadow: 0px 0px 50px 0px rgba(169, 172, 189, 0.15);
  border-radius: 3px;
}
@media (max-width: 1280px) {
  .grow {
    padding: 20px 14px;
  }
}
@media (max-width: 767px) {
  .grow {
    padding: 25px;
  }
}
.grow .inside-grow-content {
  min-height: 65px;
}
.grow .inside-grow-content .card_name {
  text-transform: uppercase;
  font-weight: bold;
  color: #8a97a0;
  font-size: 12px;
  font-family: "SF Pro Display";
  color: #797979;
  font-weight: 600;
}
@media (max-width: 1366px) {
  .grow .inside-grow-content .card_name {
    font-size: 11px;
  }
}
.grow .inside-grow-content .card_value {
  font-size: 20px;
  font-weight: 600;
  font-size: 14px;
  line-height: 14px;
  font-family: "SF Pro Display";
  color: #333333;
  display: inline-block;
}
@media (max-width: 1366px) {
  .grow .inside-grow-content .card_value {
    font-size: 10px;
  }
}
.grow .inside-grow-content .card_smallfont {
  font-size: 14px;
  line-height: 16px;
  text-align: right;
  font-weight: 600;
  font-family: "SFProText" !important;
}
@media (max-width: 1440px) {
  .grow .inside-grow-content .card_smallfont {
    font-size: 12px;
  }
}
.grow:hover {
  height: auto;
  background: linear-gradient(to right, #004393 0%, #004393 100%) left bottom #ffffff no-repeat;
  background-size: 100% 5px;
}
.grow.selected {
  position: relative;
  height: auto;
  background: linear-gradient(to right, #004393 0%, #004393 100%) left bottom #ffffff no-repeat;
  background-size: 100% 5px;
}
.grow.selected:before {
  content: "";
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 12px 10px 0 10px;
  border-color: #fd9173 transparent transparent transparent;
  border-color: #004393 transparent transparent transparent;
  position: absolute;
  bottom: -11px;
  left: 50%;
  transform: translate(-50%, 0);
}

.add-remove-section {
  position: relative;
  float: right;
  display: flex;
  align-items: center;
}
@media (max-width: 767px) {
  .add-remove-section {
    position: fixed;
    top: 70px;
    right: 8px;
  }
}
.add-remove-section .dropdown-menu {
  left: auto;
  right: 0;
  margin: 10px 0 0 0;
  border: 0;
}
.add-remove-section .dropdown-menu li a {
  padding: 6px 20px;
}
.add-remove-section .dropdown-menu li a:hover {
  background: #fe595d;
  color: #ffffff;
  background: #2d77f4;
}
.add-remove-section .btn {
  text-align: center;
  padding: 0 !important;
  border-radius: 0;
  font-size: 26px;
  width: 75px;
  height: 48px;
  font-size: 18px;
  width: 60px !important;
  height: 34px !important;
  line-height: 34px;
}
@media (max-width: 1550px) {
  .add-remove-section .btn {
    padding: 0 !important;
    font-size: 20px;
    width: 60px;
    height: 43px;
  }
}
@media (max-width: 1440px) {
  .add-remove-section .btn {
    font-size: 16px;
    width: 50px !important;
    height: 30px !important;
    line-height: 30px;
  }
}
.add-remove-section .btn.add {
  background: #faecef;
  border-color: #faecef;
  background: #f4f3f8;
  border-color: #f4f3f8;
}
.add-remove-section .btn.add i {
  background-image: linear-gradient(to right, #2d77f4 0%, #2d77f4 100%);
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
}
.add-remove-section .btn.btn-gradient {
  padding: 5px 32px;
}
@media (max-width: 1550px) {
  .add-remove-section .btn.btn-gradient {
    padding: 5px 20px;
    font-size: 24px;
  }
}

.popup-btn {
  box-shadow: none;
  background: transparent;
  color: #ff7c7c;
  color: #2d77f4;
  letter-spacing: 2em;
  font-size: 14px;
  font-family: "Montserrat";
  border: none;
  font-weight: 500;
  letter-spacing: 0;
  padding: 0;
}
.popup-btn i {
  margin-right: 10px;
}

@media (min-width: 1023px) and (max-width: 1024px) {
  .width100 {
    width: 100%;
  }
  .pt20 {
    padding-top: 20px;
  }
}
@media (max-width: 767px) {
  .pt20 {
    padding-top: 20px;
  }
}
.company-header {
  position: static;
  transition: all 0.5s ease;
  top: 87px;
  right: 0;
  padding: 10px 0;
  z-index: 99;
  background: #fff;
  border: 1px solid #F4F3F8;
  border-left: 0px;
  box-shadow: 0px 0px 50px 0px rgba(169, 172, 189, 0.15);
  margin: 0px;
  border-radius: 3px;
  overflow: hidden;
}
.company-header.scroll-fixed {
  position: fixed;
  width: calc(100% - 310px);
  width: calc(100% - 0px);
}
@media (min-width: 990px) {
  .company-header.scroll-fixed {
    width: calc(100% - 310px);
  }
}
@media (min-width: 1550px) {
  .company-header.scroll-fixed {
    width: calc(100% - 420px);
  }
}
.company-header.pre-login {
  width: 100%;
  left: 0;
  padding: 15px 10px;
}
@media (min-width: 1200px) {
  .company-header.pre-login {
    padding: 15px 100px;
    width: calc(100% - 420px);
    padding: 15px 0px;
    width: calc(100% - 0px);
  }
}
@media (min-width: 1550px) {
  .company-header.pre-login {
    padding: 15px 9%;
    padding: 15px 0%;
  }
}
@media (min-width: 1550px) {
  .company-header {
    top: 89px;
    width: calc(100% - 420px);
    right: 0;
    padding: 10px;
    box-shadow: 0px 0px 50px 0px rgba(169, 172, 189, 0.15);
    width: calc(100% - 0px);
    left: 420px;
  }
}
@media (max-width: 990px) {
  .company-header {
    width: 100%;
    left: 0;
    top: 40px;
    box-shadow: 0px 0px 50px 0px rgba(169, 172, 189, 0.15);
  }
}
@media (max-width: 767px) {
  .company-header {
    top: 60px;
    padding: 10px 5px;
    box-shadow: 0px 0px 50px 0px rgba(169, 172, 189, 0.15);
  }
}
.company-header h1 {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin: 0;
  font-family: "SFProText" !important;
  font-size: 16px;
}
@media (max-width: 767px) {
  .company-header h1 {
    padding-right: 135px;
    font-size: 16px;
  }
}
.company-header h1 small {
  display: block;
  transition: all 0.5s ease;
  color: #8a97a0;
  text-transform: uppercase;
  line-height: 22px;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-family: "SF Pro Display";
  overflow: hidden;
  font-size: 14px;
  margin-top: 2px;
}
@media (max-width: 767px) {
  .company-header h1 small {
    line-height: 2.1;
  }
}
.company-header .show-fixed {
  display: none;
}
@media (max-width: 767px) {
  .company-header .show-fixed {
    line-height: 1.1;
  }
}
.company-header .show-fixed strong {
  font-size: 20px;
}
.company-header .btn {
  border-radius: 5px;
}
@media (max-width: 767px) {
  .company-header .btn.sell {
    position: fixed;
    bottom: 20px;
    width: 50% !important;
    margin: 0px;
    right: 0;
    z-index: 99;
  }
  .company-header .btn.buy {
    position: fixed;
    bottom: 20px;
    width: 50% !important;
    margin: 0px;
    left: 0;
    border: #ff8889 solid 1px;
    border: #2d77f4 solid 1px;
    z-index: 99;
  }
}
.company-header.company-header-new {
  overflow: inherit;
  position: sticky;
  z-index: 999;
}

.company-header-note {
  top: 140px !important;
}
@media (min-width: 1550px) {
  .company-header-note {
    top: 140px !important;
  }
}

.main-cards {
  margin-top: 100px;
  margin-top: 0px;
}
@media (min-width: 1550px) {
  .main-cards {
    margin-top: 120px;
    margin-top: 0;
  }
}
@media (max-width: 990px) {
  .main-cards {
    margin-top: 90px;
    margin-top: 0px;
  }
}
@media (max-width: 767px) {
  .main-cards {
    margin-top: 60px;
    margin-top: 0px;
  }
}

.scroll-fixed .show-fixed {
  display: block;
}
.scroll-fixed .show-fixed > div.ltp-change {
  display: inline-block;
  margin: 0 5px;
}
.scroll-fixed h1 {
  font-size: 16px;
}
.scroll-fixed h1 small {
  display: inline-block;
  margin-left: 5px;
  line-height: 20px;
  vertical-align: middle;
}
.scroll-fixed .hidden-fixed {
  display: none;
}

@media (max-width: 767px) {
  .hidden-fixed {
    display: none;
  }
}
@media (max-width: 1200px) {
  .hidden-fixed span + span {
    display: block;
  }
}

.card-value {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 10px;
}
.card-value .card_smallfont {
  width: 40%;
}
@media (max-width: 1550px) {
  .card-value .card_smallfont {
    width: auto;
  }
}
.card-value .card_smallfont i {
  margin-left: 5px;
}
.card-value .change {
  display: block;
  font-size: 10px;
  font-family: "SF Pro Display";
  font-weight: 400;
  margin-top: 3px;
}

.info-icon {
  width: 20px;
  height: 20px;
  border: 1px solid #ff9898;
  border: 1px solid #2d77f4;
  display: inline-block;
  letter-spacing: 0;
  border-radius: 100%;
  font-size: 14px;
  line-height: 20px;
}

.ohlc-container {
  display: flex;
  justify-content: flex-end;
  position: relative;
  bottom: 0;
  margin-top: 15px;
}
@media (max-width: 767px) {
  .ohlc-container {
    justify-content: space-between;
    width: 100%;
  }
}
.ohlc-container .border-right-none {
  padding: 0 20px;
  border: 1px solid #CCCCCC;
  border-top: 0;
  width: 120px;
  border-bottom: 0;
}
@media (max-width: 767px) {
  .ohlc-container .border-right-none {
    padding: 10px 0;
    width: 34%;
    border: 0;
  }
}
.ohlc-container .border-right-none:last-child {
  border-right: 0;
}
.ohlc-container .border-right-none:first-child {
  border-left: 0;
  padding-right: 0;
}

.font-n-22 {
  font-size: 22px;
  margin-right: 10px;
}

.font11 {
  font-size: 11px;
}

.sell-color-btn {
  background: #EE404A !important;
  background: #FF8F00;
  color: white;
  border-color: #EE404A;
}

.left-funda-details .text-black .meeting-cart {
  cursor: pointer;
  position: relative;
}
.left-funda-details .text-black .meeting-cart .cart-des {
  position: absolute;
  top: -5px;
  border-radius: 4px;
  right: -225px;
  background: #3E404F;
  width: 225px;
  padding: 10px;
  opacity: 0;
  visibility: hidden;
  z-index: -1;
}
.left-funda-details .text-black .meeting-cart .cart-des .reset {
  list-style: none;
  padding: 0;
  margin: 0;
}
.left-funda-details .text-black .meeting-cart .cart-des .reset > li {
  margin-bottom: 10px;
  margin-bottom: 15px;
}
.left-funda-details .text-black .meeting-cart .cart-des .reset > li h4 {
  font-size: 12px;
  color: #ffffff;
  white-space: pre-wrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.left-funda-details .text-black .meeting-cart .cart-des .reset > li h5 {
  font-size: 10px;
  opacity: 0.8;
  margin-top: 5px;
  color: #ffffff;
  margin-bottom: 0;
  font-weight: 300;
}
.left-funda-details .text-black .meeting-cart .cart-des .reset > li:last-child {
  margin-bottom: 0;
}
.left-funda-details .text-black .meeting-cart .cart-des::before {
  content: "";
  width: 0;
  height: 0;
  border-top: 4px solid transparent;
  border-right: 6px solid #3E404F;
  border-bottom: 4px solid transparent;
  display: block;
  position: absolute;
  left: -6px;
  top: 15px;
}
.left-funda-details .text-black .meeting-cart:hover .cart-des {
  opacity: 1;
  visibility: visible;
  z-index: 9;
}
.left-funda-details .text-black .meeting-cart svg.eventBeat {
  animation-name: zoom-in-out;
  animation-iteration-count: infinite;
  animation-duration: 1.2s;
}
@keyframes zoom-in-out {
  0% {
    transform: scaleX(1);
  }
  15% {
    transform: scaleX(1);
  }
  30% {
    transform: scaleX(1);
  }
  50% {
    transform: scale3d(1.2, 1.2, 1.2);
  }
  to {
    transform: scaleX(1);
  }
}
.left-funda-details .name-spp {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin: 0;
  font-family: "SFProText" !important;
  font-size: 16px;
  margin-right: 5px;
}
@media (max-width: 1280px) {
  .left-funda-details .name-spp {
    font-size: 14px;
  }
}
.left-funda-details .funda-secnd {
  display: flex;
  align-items: center;
}
.left-funda-details .funda-secnd .name-spp {
  color: #8a97a0;
  text-transform: uppercase;
  line-height: 22px;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-family: "SF Pro Display";
  overflow: hidden;
  font-size: 14px;
  margin-right: 10px;
}
.left-funda-details .funda-secnd .spl-points .spl-points-list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
}
.left-funda-details .funda-secnd .spl-points .spl-points-list > li {
  position: relative;
  margin-right: 10px;
}
.left-funda-details .funda-secnd .spl-points .spl-points-list > li .sm-dot {
  width: 12px;
  height: 12px;
  display: block;
  border-radius: 50%;
}
.left-funda-details .funda-secnd .spl-points .spl-points-list > li .sm-dot.spl-price {
  background: #00B09C;
}
.left-funda-details .funda-secnd .spl-points .spl-points-list > li .sm-dot.spl-growth {
  background: #F17539;
}
.left-funda-details .funda-secnd .spl-points .spl-points-list > li .sm-dot.spl-qlt {
  background: #F6B925;
}
.left-funda-details .funda-secnd .spl-points .spl-points-list > li .sm-dot.spl-mangmnt {
  background: #DA534D;
}
.left-funda-details .funda-secnd .spl-points .spl-points-list > li .sm-dot.grn-txt-1 {
  background: #00B16B;
}
.left-funda-details .funda-secnd .spl-points .spl-points-list > li .sm-dot.orng-txt-1 {
  background: #F17539;
}
.left-funda-details .funda-secnd .spl-points .spl-points-list > li .sm-dot.yellow-txt-1 {
  background: #F6B925;
}
.left-funda-details .funda-secnd .spl-points .spl-points-list > li .sm-dot.red-txt-1 {
  background: #DA534D;
}
.left-funda-details .funda-secnd .spl-points .spl-points-list > li .sm-dot.dark-grn-txt-1 {
  background: #05655a;
}
.left-funda-details .funda-secnd .spl-points .spl-points-list > li .sm-dot.grey-txt-1 {
  background: #8b8b8b;
}
.left-funda-details .funda-secnd .spl-points .spl-points-list > li .sm-dot.blue-txt-1 {
  background: #2d77f4;
}
.left-funda-details .funda-secnd .spl-points .spl-points-list > li .show-cont {
  position: absolute;
  min-width: 135px;
  visibility: hidden;
  opacity: 0;
  z-index: -9;
  border: 1px solid #2D77F4;
  font-size: 12px;
  top: -36px;
  background: #F4F8FF;
  text-align: center;
  padding: 5px 5px;
  border-radius: 4px;
  left: 50%;
  transform: translate(-50%, 0);
}
.left-funda-details .funda-secnd .spl-points .spl-points-list > li .show-cont em {
  font-style: normal;
}
.left-funda-details .funda-secnd .spl-points .spl-points-list > li .show-cont em.grn-txt {
  color: #00B16B;
}
.left-funda-details .funda-secnd .spl-points .spl-points-list > li .show-cont em.orng-txt {
  color: #F17539;
}
.left-funda-details .funda-secnd .spl-points .spl-points-list > li .show-cont em.yellow-txt {
  color: #F6B925;
}
.left-funda-details .funda-secnd .spl-points .spl-points-list > li .show-cont em.red-txt {
  color: #DA534D;
}
.left-funda-details .funda-secnd .spl-points .spl-points-list > li .show-cont em.dark-grn-txt {
  color: #05655a;
}
.left-funda-details .funda-secnd .spl-points .spl-points-list > li .show-cont em.grey-txt {
  color: #8b8b8b;
}
.left-funda-details .funda-secnd .spl-points .spl-points-list > li .show-cont em.blue-txt {
  color: #004393;
}
.left-funda-details .funda-secnd .spl-points .spl-points-list > li .show-cont::before {
  content: "";
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 3px 3px 0 3px;
  border-color: #F4F8FF transparent transparent transparent;
  position: absolute;
  bottom: -3px;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 1;
}
.left-funda-details .funda-secnd .spl-points .spl-points-list > li .show-cont::after {
  content: "";
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 3px 3px 0 3px;
  border-color: #2D77F4 transparent transparent transparent;
  position: absolute;
  bottom: -4px;
  left: 50%;
  transform: translate(-50%, 0);
}
.left-funda-details .funda-secnd .spl-points .spl-points-list > li:hover .show-cont {
  opacity: 1;
  visibility: visible;
  z-index: 99;
}

.company-header-new .btn-sets {
  float: right;
  width: 50px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(221, 221, 221, 0.2980392157);
  border: 0;
  border-radius: 4px;
  margin-right: 10px;
}

.position-relative {
  position: relative;
  float: right;
}

.added-watchlist {
  font-size: 20px;
  color: #004393;
  font-weight: 600;
}

.buySellMic {
  position: absolute;
  background: aliceblue;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
}
.buySellMic .segment-page-wrap .item-wrapper {
  margin-top: 10px;
  margin-bottom: 10px;
}

.buySellMic:hover {
  border: 1px solid blueviolet;
}

.segment-slide .item {
  padding: 10px;
}`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 58173:
/*!******************************************************************************************!*\
  !*** ./src/app/company-module/advance-decline/advance-decline.component.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container-fluid padding-0 financials-wrap\">\r\n  <div class=\"card\">\r\n    <div class=\"company-block\">\r\n      <h4 class=\"page-title text-uppercase\">Advance/Declines</h4>\r\n      <div class=\"pull-right portfolio-dropdown\">\r\n        <div class=\"pr-0\">Last Updated: {{advancesDeclinesData.Date||'NA'}}</div>\r\n      </div>\r\n\r\n      <!--   <img class=\"loader\" src=\"assets/images/loader.gif\" [hidden]=\"!shared.isServiceHit\" /> -->\r\n      @if (advancesDeclinesData && !shared.isServiceHit) {\r\n        <table class=\"table table-striped\">\r\n          <thead>\r\n            <th width=\"20%\">Indice</th>\r\n            <th width=\"18%\" class=\"text-right\">Advances</th>\r\n            <th width=\"18%\" class=\"text-right\">Declines</th>\r\n            <th width=\"18%\" class=\"text-right\">Unchanged</th>\r\n            <th width=\"23%\" class=\"text-right\">Turnover</th>\r\n          </thead>\r\n          <tbody>\r\n            @if (advancesDeclinesData[scripInfo.SegmentId+'@0']) {\r\n              <tr>\r\n                <td><strong>{{scripInfo.SegmentId==1?'NSE':'BSE'}}</strong></td>\r\n                <td class=\"text-right text-green\">{{advancesDeclinesData[scripInfo.SegmentId+'@0']?.Advances|value:'1.0-0'}}\r\n                </td>\r\n                <td class=\"text-right text-pink\">{{advancesDeclinesData[scripInfo.SegmentId+'@0']?.Declines|value:'1.0-0'}}\r\n                </td>\r\n                <td class=\"text-right\">{{advancesDeclinesData[scripInfo.SegmentId+'@0']?.Same|value:'1.0-0'}}</td>\r\n                <td class=\"text-right\">{{advancesDeclinesData[scripInfo.SegmentId+'@0']?.Turnover|condense}}</td>\r\n              </tr>\r\n            }\r\n            @if (advancesDeclinesData[scripInfo.SegmentId+'@'+scripInfo.Token]) {\r\n              <tr>\r\n                <td><strong>{{secName}}</strong></td>\r\n                <td class=\"text-right text-green\">\r\n                  {{advancesDeclinesData[scripInfo.SegmentId+'@'+scripInfo.Token]?.Advances|value:'1.0-0'}}\r\n                </td>\r\n                <td class=\"text-right text-pink\">\r\n                  {{advancesDeclinesData[scripInfo.SegmentId+'@'+scripInfo.Token]?.Declines|value:'1.0-0'}}\r\n                </td>\r\n                <td class=\"text-right\">{{advancesDeclinesData[scripInfo.SegmentId+'@'+scripInfo.Token]?.Same|value:'1.0-0'}}\r\n                </td>\r\n                <td class=\"text-right\">\r\n                {{advancesDeclinesData[scripInfo.SegmentId+'@'+scripInfo.Token]?.Turnover|condense}}</td>\r\n              </tr>\r\n            }\r\n          </tbody>\r\n        </table>\r\n      }\r\n\r\n      <!-- <table class=\"table table-striped\" *ngIf=\"advancesDeclinesData && !shared.isServiceHit\">\r\n      <thead>\r\n        <th width=\"25%\"></th>\r\n        <th width=\"33%\" class=\"text-right\">{{scripInfo.SegmentId==1?'NSE':'BSE'}}</th>\r\n        <th width=\"33%\" class=\"text-right\">{{secName}}</th>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <th>Advances</th>\r\n          <td class=\"text-right text-green\">{{advancesDeclinesData[scripInfo.SegmentId+'@0']?.Advances|value:'1.0-0'}}\r\n          </td>\r\n          <td class=\"text-right text-green\">\r\n            {{advancesDeclinesData[scripInfo.SegmentId+'@'+scripInfo.Token]?.Advances|value:'1.0-0'}}\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <th>Declines</th>\r\n          <td class=\"text-right text-pink\">{{advancesDeclinesData[scripInfo.SegmentId+'@0']?.Declines|value:'1.0-0'}}\r\n          </td>\r\n          <td class=\"text-right text-pink\">\r\n            {{advancesDeclinesData[scripInfo.SegmentId+'@'+scripInfo.Token]?.Declines|value:'1.0-0'}}\r\n          </td>\r\n        </tr>\r\n\r\n        <tr>\r\n          <th>Unchanged</th>\r\n          <td class=\"text-right\">{{advancesDeclinesData[scripInfo.SegmentId+'@0']?.Same|value:'1.0-0'}}\r\n          </td>\r\n          <td class=\"text-right\">\r\n            {{advancesDeclinesData[scripInfo.SegmentId+'@'+scripInfo.Token]?.Same|value:'1.0-0'}}\r\n          </td>\r\n        </tr>\r\n\r\n        <tr>\r\n          <th>Total</th>\r\n          <td class=\"text-right\">{{advancesDeclinesData[scripInfo.SegmentId+'@0']?.Total|value:'1.0-0'}}\r\n          </td>\r\n          <td class=\"text-right\">\r\n            {{advancesDeclinesData[scripInfo.SegmentId+'@'+scripInfo.Token]?.Total|value:'1.0-0'}}\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <th>Last Updated</th>\r\n          <td class=\"text-right\">{{advancesDeclinesData[scripInfo.SegmentId+'@0']?.LastADSTxTime}}\r\n          </td>\r\n          <td class=\"text-right\">\r\n            {{advancesDeclinesData[scripInfo.SegmentId+'@'+scripInfo.Token]?.LastADSTxTime}}\r\n          </td>\r\n        </tr>\r\n\r\n      </tbody>\r\n    </table> -->\r\n    @if (!shared.isServiceHit && !advancesDeclinesData) {\r\n      <div class=\"text-center\">\r\n        <p>No Data Available</p>\r\n      </div>\r\n    }\r\n  </div>\r\n</div>\r\n</div>";

/***/ }),

/***/ 29129:
/*!******************************************************************************!*\
  !*** ./src/app/company-module/best-five/best-five.component.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"bestfivewrap flexwrap pad-r-zero flex-ht new-market-depth\">\r\n  <div class=\"card\">\r\n    <h4 class=\"page-title\">MARKET DEPTH</h4>\r\n    <div class=\"table-scrollable\">\r\n      <table class=\"bids-offer-table\">\r\n        <thead>\r\n\r\n\r\n          <tr>\r\n            <th width=\"33%\">Orders</th>\r\n            <th width=\"33%\">Qty.</th>\r\n            <th width=\"33%\" class=\"brdr-right\"> Bid</th>\r\n            <th width=\"33%\"> Ask</th>\r\n            <th width=\"33%\"> Qty.</th>\r\n            <th width=\"33%\"> Orders</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n\r\n          @for (best5 of best5Buy; track best5; let i = $index) {\r\n            <tr>\r\n              <td >{{best5.order | value:'1.0-0'}}</td>\r\n              <td >{{best5.qty | value:'1.0-0'}}</td>\r\n              <td   class=\"brdr-right\"><span class=\"text-blue\">{{best5.price>=0? ((best5.price || 0) | segment : scripInfo?.SegmentId):'-'}}</span></td>\r\n              <td ><span class=\"text-red\">{{best5sell[i].price>=0? ((best5sell[i].price || 0) | segment : scripInfo?.SegmentId):'-'}}</span></td>\r\n              <td >{{best5sell[i].qty | value:'1.0-0'}}</td>\r\n              <td >{{best5sell[i].order | value:'1.0-0'}}</td>\r\n            </tr>\r\n          }\r\n\r\n          <tr>\r\n            <td><span class=\"highlight\"></span></td>\r\n            <td><strong>{{totalBuyQty |value:'1.0-0' || 'NA'}}</strong></td>\r\n            <td colspan=\"2\"><strong>TOTAL QTY</strong></td>\r\n            <td><strong>{{totalSellQty |value:'1.0-0' || 'NA'}}</strong></td>\r\n            <td><span class=\"highlight\"></span></td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <div class=\"card-progress-bar\">\r\n      <div class=\"progress-bar-sub\">\r\n        <div class=\"bar-sub-cont\">\r\n          <h4>Buy Order Qty</h4>\r\n          <h3>{{((totalBuyQty/(totalBuyQty+totalSellQty))*100 || 0)  | number : '1.2-2'  }}%</h3>\r\n        </div>\r\n        <div class=\"progress\">\r\n          <div class=\"bar\"  [ngStyle]=\"{'width':(!totalBuyQty&& !totalSellQty?'50%':(((totalBuyQty/(totalBuyQty+totalSellQty))*100 | number : '1.2-2'))+'%')}\">\r\n          </div>\r\n        </div>\r\n        <div class=\"bar-sub-cont text-right\">\r\n          <h4>Sell Order Qty</h4>\r\n          <h3>{{((totalSellQty/(totalBuyQty+totalSellQty))*100 || 0) | number : '1.2-2'  }}%</h3>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- <div class=\"bestfivewrap flexwrap row pad-r-zero flex-ht\">\r\n<div class=\"col-md-6 col-sm-6 col-xs-12 \">\r\n  <div class=\"card h-100\">\r\n    <h4 class=\"page-title\">BID</h4>\r\n    <div>\r\n      <table class=\"bids-offer-table\">\r\n        <thead>\r\n          <tr>\r\n            <th width=\"33%\">Qty</th>\r\n            <th width=\"33%\">Orders</th>\r\n            <th width=\"33%\"> Price</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let best5 of best5Buy\">\r\n            <td>{{best5.qty | value:'1.0-0'}}</td>\r\n            <td>{{best5.order | value:'1.0-0'}}</td>\r\n            <td>{{best5.price>=0? ((best5.price || 0) | segment : scripInfo?.SegmentId):'-'}}</td>\r\n          </tr>\r\n          <tr [hidden]=\"!sharedDataService.userId || sharedDataService.userId=='guest'\">\r\n            <td><span class=\"highlight\">{{totalBuyQty |value:'1.0-0' || 'NA'}}</span></td>\r\n            <td></td>\r\n            <td>TOTAL</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"col-md-6 col-sm-6 col-xs-12 pad-r-zero\">\r\n  <div class=\"card h-100\">\r\n    <h4 class=\"page-title\">OFFER</h4>\r\n    <div>\r\n      <table class=\"bids-offer-table\">\r\n        <thead>\r\n          <tr>\r\n            <th width=\"33%\">Price</th>\r\n            <th width=\"33%\">Orders</th>\r\n            <th width=\"33%\">Qty</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let item of best5sell\">\r\n            <td>{{item.price>=0? ((item.price || 0) | segment : scripInfo?.SegmentId):'-'}}</td>\r\n            <td>{{item.order | value:'1.0-0'}}</td>\r\n            <td>{{item.qty | value:'1.0-0'}}</td>\r\n          </tr>\r\n          <tr [hidden]=\"!sharedDataService.userId || sharedDataService.userId=='guest'\">\r\n            <td>TOTAL</td>\r\n            <td></td>\r\n            <td><span class=\"highlight\">{{totalSellQty |value:'1.0-0' || 'NA'}}</span></td>\r\n          </tr>\r\n\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div> -->";

/***/ }),

/***/ 58089:
/*!****************************************************************************************!*\
  !*** ./src/app/company-module/chartiq-simple/chartiq-simple.component.html?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"card flex-ht padding0\">\r\n  <img class=\"loader\" src=\"assets/images/loader.gif\" [hidden]=\"!shared.isServiceHit || chartIQ?.masterData?.length\" />\r\n  <!--   <div class=\"loader-wrapper-min\" *ngIf=\"!(!shared.isServiceHit || chartIQ?.masterData?.length)\">\r\n  <div class=\"circle\">\r\n    <div class=\"circle-min\"></div>\r\n  </div>\r\n</div> -->\r\n<div class=\"expand-btn chart-switch\">\r\n  <div class=\"  switch-wrap\">\r\n    <label class=\"control-label mr-10\" [class.selected]=\"!isTradingChart\"\r\n    (click)=\"onLabelToggleChange(false)\">ChartIQ</label>\r\n    <label class=\"switch\">\r\n      <input type=\"checkbox\" name=\"isTradingChart\" [(ngModel)]=\"isTradingChart\" (change)=\"onChange(isTradingChart)\" />\r\n      <div class=\"slider round\"></div>\r\n    </label>\r\n    <label class=\"control-label ml-10\" [class.selected]=\"isTradingChart\"\r\n    (click)=\"onLabelToggleChange(true)\">TradingView</label>\r\n  </div>\r\n</div>\r\n<button id=\"graphHistory\" class=\"btn btn-gradient expand-btn\" aria-label=\"expand button\" (click)=\"expandChart()\"><i\r\nclass=\"icon-expand\"></i></button>\r\n <div class=\"row\">\r\n<div class=\"col-xs-12 controls\">\r\n  <!-- <div class=\"col-xs-12 headsUp\">\r\n  <div class=\"col-xs-2\">\r\n    <p class=\"font16 greycolor\">V :</p>\r\n    <p class=\"roboto bold font16\">{{headsUp?.Volume | condense}}</p>\r\n\r\n  </div>\r\n  <div class=\"col-xs-2\">\r\n    <p class=\"font16 greycolor\">O :</p>\r\n    <p class=\"roboto bold font16\">{{headsUp?.Open | segment:segmentId}}</p>\r\n  </div>\r\n  <div class=\"col-xs-2\">\r\n    <p class=\"font16 greycolor\">H :</p>\r\n    <p class=\"roboto bold font16\">{{headsUp?.High | segment:segmentId}}</p>\r\n  </div>\r\n  <div class=\"col-xs-2\">\r\n    <p class=\"font16 greycolor\">L :</p>\r\n    <p class=\"roboto bold font16\">{{headsUp?.Low | segment:segmentId}}</p>\r\n  </div>\r\n  <div class=\"col-xs-2\">\r\n    <p class=\"font16 greycolor\">C :</p>\r\n    <p class=\"roboto bold font16\" *ngIf=\"!(marketStatus?.status||{})[1]\">{{headsUp?.Close | segment:segmentId}}</p>\r\n    <p class=\"roboto bold font16\" *ngIf=\"(marketStatus?.status||{})[1]\">-</p>\r\n  </div>\r\n</div> -->\r\n<div class=\"row\">\r\n  @if (false) {\r\n    <div class=\"col-md-3 col-xs-6\">\r\n      <div class=\"custom-select\">\r\n        <select class=\"form-control\" text-center [(ngModel)]=\"isTradingChart\" (change)=\"changeChart($event)\">\r\n          <option value=\"false\">\r\n          ChartIQ</option>\r\n          <option value=\"true\">\r\n          TradingView</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n  }\r\n  <div class=\"col-md-4 col-xs-6\" [ngClass]=\"{ 'none-display': isTradingChart }\">\r\n    <div class=\"custom-select \">\r\n      <select [(ngModel)]=\"chart.type\" class=\"form-control\" (ngModelChange)=\"changeChartType()\"\r\n        aria-label=\"chart type\">\r\n        @for (type of chartTypes; track type) {\r\n          <option [value]=\"type.value\">{{type.label}}</option>\r\n        }\r\n      </select>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-3 col-xs-6\" [ngClass]=\"{ 'none-display': isTradingChart }\">\r\n    <div class=\"custom-select custom-select-sec duration-dropdown\">\r\n      <select [(ngModel)]=\"chart.interval\" class=\"form-control\" text-center\r\n        (ngModelChange)=\"changeChartDuration(false)\" aria-label=\"Duration of interval\">\r\n        @for (duration of intervals; track duration) {\r\n          <option [value]=\"duration.value\">\r\n          {{duration.label}}</option>\r\n        }\r\n      </select>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"col-xs-4 col-md-4\" [ngClass]=\"{ 'none-display': !isTradingChart }\">\r\n    <div class=\"custom-select \">\r\n      <select [(ngModel)]=\"tvChart.type\" class=\"form-control\" (ngModelChange)=\"changeTVChartType()\"\r\n        aria-label=\"chart type\">\r\n        @for (type of tvChartTypes; track type) {\r\n          <option [value]=\"type.value\">{{type.label}}</option>\r\n        }\r\n      </select>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-xs-3 col-md-3\" [ngClass]=\"{ 'none-display': !isTradingChart }\">\r\n    <div class=\"custom-select custom-select-sec duration-dropdown\">\r\n      <select [(ngModel)]=\"tvChart.interval\" class=\"form-control\" text-center\r\n        (ngModelChange)=\"changeTvChartDuration()\" aria-label=\"Duration of interval\">\r\n        @for (duration of tvIntervals; track duration) {\r\n          <option [value]=\"duration.value\">\r\n          {{duration.label}}</option>\r\n        }\r\n      </select>\r\n    </div>\r\n  </div>\r\n      \r\n  <!--      <div class=\"col-xs-2\" [ngClass]=\"{ 'none-display': !isTradingChart }\">\r\n  <div class=\"custom-select\">\r\n    <select class=\"form-control\" text-center aria-label=\"Duration of interval\">\r\n      <option>\r\n      1 MIN</option>\r\n    </select>\r\n  </div>\r\n</div> -->\r\n\r\n<!-- commeted below code as its not required - suggested by dushynt sir -->\r\n<!-- <div class=\"col-xs-4 mtop15\">\r\n<div class=\"custom-select \">\r\n  <select [(ngModel)]=\"chart.time\" class=\"form-control\" text-center (ngModelChange)=\"changeChartDuration(true)\"\r\n    aria-label=\"Duration of furations\">\r\n    <option *ngFor=\"let duration of durations\" [value]=\"duration.value\"\r\n      [hidden]=\"(segmentId=='2' || segmentId=='5' || segmentId=='6' || segmentId=='7' || segmentId=='8' || segmentId=='13' || segmentId=='14') && (duration.value=='H' || duration.value=='Y' || duration.value=='T' || duration.value=='F')\">\r\n    {{duration.label}}</option>\r\n  </select>\r\n</div>\r\n</div> -->\r\n</div>\r\n\r\n\r\n  </div>\r\n  <div    [ngClass]=\"{ 'pmb0': isTradingChart, 'card-block': true }\"   >\r\n  @if (!isTradingChart) {\r\n    <div class=\"embed-responsive embed-responsive-16by9\" [ngClass]=\"{ 'none-display': isTradingChart }\"\r\n      >\r\n      @if (symCon.Token && symCon.SegmentId  ) {\r\n        <cq-advanced-chart-wrapper chartId=\"chart0\" [symbol]=\"scripName\"\r\n        [symbolInfo]=\"symCon\" isOnCompany=\"true\" (getStx2)=\"getStx($event)\"  [changeChartType]=\"changeChartType\"></cq-advanced-chart-wrapper>\r\n      }\r\n      <!--   <div class=\"chartContainer embed-responsive-item\" id=\"chartContainer\">\r\n      <div *ngIf=\"isError && !shared.isServiceHit\" class=\"text-center error-section\">\r\n        <p><i class=\"fa fa-area-chart\" aria-hidden=\"true\"></i></p>\r\n        <p>Unable to load Charts</p>\r\n        <button class=\"popup-btn\" (click)=\"changeChartDuration()\">Retry</button>\r\n      </div>\r\n    </div> -->\r\n  </div>\r\n}\r\n@if (isTradingChart && !hideData) {\r\n  <div [ngClass]=\"{ 'none-display': !isTradingChart, 'embed-responsive embed-responsive-16by9 h20rem': true }\"\r\n    >\r\n    <!-- <app-tv-chart-container\r\n    [segmentId]=\"segmentId\"\r\n    [token]=\"token\"\r\n    [scripName]=\"scripName\"\r\n    [b5Data]=\"fullB5data\"\r\n    [responseData]=\"responseData\"\r\n    [disableFeatures]=\"true\"\r\n    [theme]=\"'Light'\"\r\n    [fullscreen]=\"true\"\r\n    [details]=\"true\"\r\n  ></app-tv-chart-container> -->\r\n  <app-tv-chart-exp [scripName]=\"scripName\" [token]=\"token\" [segmentId]=\"segmentId\" [disableFeatures]=\"true\" isOnCompany=\"true\"\r\n    [theme]=\"'Light'\" [fullscreen]=\"true\" [details]=\"true\" [isEle]=\"true\" [b5DataFetched]=\"fullB5data\" [chartIntervalSet]=\"tvChart.interval\" [chartTypeSet]=\"tvChart.type\"\r\n  [responseDataFetched]=\"responseData\"></app-tv-chart-exp>\r\n</div>\r\n}\r\n@if (hideData) {\r\n  <div class=\"chart-loading\">\r\n    <img class=\"loader\" src=\"assets/images/loader.gif\" />\r\n    <!--  <div class=\"loader-wrapper-min\" >\r\n    <div class=\"circle\">\r\n      <div class=\"circle-min\"></div>\r\n    </div>\r\n  </div> -->\r\n</div>\r\n}\r\n\r\n</div>\r\n</div>\r\n\r\n@if (showPreLogin) {\r\n  <div class=\"dialog\">\r\n    <div class=\"dialog-content\">\r\n      <div class=\"dialog-header clearfix \">\r\n        <div class=\"col-md-12\">\r\n          <h4 class=\"popup-title\">Oops,Looks like you are not logged in. Please Login for Moving further. </h4>\r\n        </div>\r\n      </div>\r\n      <div class=\"dialog-footer clearfix\">\r\n        <button class=\"btn sell\" (click)=\"closePreLogin()\">Close</button>\r\n        <button class=\"btn buy\" (click)=\"login()\">Login</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n}";

/***/ }),

/***/ 97081:
/*!******************************************************************************************!*\
  !*** ./src/app/company-module/company-details/company-details.component.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"card company-block clearfix\" id=\"company-details\">\r\n\r\n\r\n  <h4 class=\"page-title text-uppercase \">Company Details</h4>\r\n  <img class=\"loader\" src=\"assets/images/loader.gif\" [hidden]=\"!shared.isServiceHit\" />\r\n  <ul id=\"myTab\" class=\"nav nav-tabs reset\">\r\n    @if (scripInfo?.CompanyOfficeDetails) {\r\n      <li [class.active]=\"activeFilter==0\" (click)=\"activateFilter(0,'officeAddressData')\"\r\n        >\r\n        <a>Details</a>\r\n      </li>\r\n    }\r\n    @if (scripInfo?.CompanyManagement) {\r\n      <li [class.active]=\"activeFilter==1\" (click)=\"activateFilter(1,'managementData')\"\r\n        >\r\n        <a>Management</a>\r\n      </li>\r\n    }\r\n    @if (scripInfo?.CompanyInfo) {\r\n      <li [class.active]=\"activeFilter==2\" (click)=\"activateFilter(2,'companyProfile')\"\r\n        >\r\n        <a>Profile</a>\r\n      </li>\r\n    }\r\n  </ul>\r\n  <div id=\"myTabContent\" class=\"tab-content\">\r\n    @if (activeFilter==0) {\r\n      <div class=\"tab-pane fade in active\" id=\"details\">\r\n        @if (officeData) {\r\n          <div class=\"col-md-12 row flex-container\">\r\n            <h1></h1>\r\n            @for (item of officeAddressData ; track item) {\r\n              <div class=\"col-sm-4 col-md-6 pl-0\"\r\n                [hidden]=\"!item || !(item?.Address1 && item?.City)\">\r\n                <div class=\"addreswrp\">\r\n                  <div class=\"registerbox\">\r\n                    <img class=\"img-responsive\" alt=\"Office-address\"\r\n                      src=\"{{shared.serverImageUrl+'office-icon.png'}}\" height=\"62\" width=\"82\">\r\n                      <h6 class=\"font14 text-white text-uppercase text-left wdt100\">{{item.type}}</h6>\r\n                    </div>\r\n                    <div class=\"white-card\">\r\n                      <h6 class=\"font14 textblue text-uppercase text-left\">\r\n                        <div class=\"col-md-1 col-sm-1 col-xs-2 padding-0\">\r\n                          <i class=\"fa fa-building-o textblue\" aria-hidden=\"true\"></i>\r\n                        </div>{{item.type}}\r\n                      </h6>\r\n\t\t\t\t\t\t\t        <div class=\"row\">\r\n\t                      <div class=\"col-md-1 col-sm-1 col-xs-2 padding-0\">\r\n\t                        <span class=\"icon-location\">\r\n\t                        </span>\r\n\t                      </div>\r\n\t                      <div class=\"col-md-11 col-sm-11 col-xs-10 padding-0\">\r\n\t                        <div class=\"font12 text-gray1 pb-18\">\r\n\t                          {{item.Address1}} {{item.Address2}} {{item.Address3}} {{item.Address4}}\r\n\t                          {{item.City}}-{{item.PinCode}}\r\n\t                        </div>\r\n\t                      </div>\r\n\t\t\t\t\t\t\t        </div>\r\n\t\t\t\t\t\t\t        <div class=\"row\">\r\n\t                      <div class=\"col-md-1 col-sm-1 col-xs-2 padding-0\">\r\n\t                        <span class=\"icon-Phone\"></span>\r\n\t                      </div>\r\n\t                      <div class=\"col-md-11 col-sm-11 col-xs-10 padding-0\">\r\n\t                        <div class=\"font12 text-gray1 pb-18\">\r\n\t                          {{item.Phone1}}\r\n\t                        </div>\r\n\t                      </div>\r\n\t\t\t\t\t\t\t          </div>\r\n\t\t\t\t\t\t\t          <div class=\"row\">\r\n\t                      <div class=\"col-md-1 col-sm-1 col-xs-2 padding-0\">\r\n\t                        <span class=\"icon-email-id\"></span>\r\n\t                      </div>\r\n\t                      <div class=\"col-md-11 col-sm-11 col-xs-10 padding-0\">\r\n\t                        <div class=\"font12 text-gray1 \">\r\n\t                          <a href=\"mailto:{{item.Email}}\">{{item.Email}}</a>\r\n\t                        </div>\r\n\t                      </div>\r\n\t\t\t\t\t\t\t        </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              }\r\n            </div>\r\n          }\r\n          @if (!officeData && !shared.isServiceHit) {\r\n            <div>No Record</div>\r\n          }\r\n        </div>\r\n      }\r\n      @if (activeFilter==1) {\r\n        <div id=\"management\" class=\"row\">\r\n          @if (manageData && managementData.length) {\r\n            <div class=\"col-md-6 col-sm-6 col-xs-12\">\r\n              <div class=\"table-responsive table-custom\">\r\n                <table class=\"table\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th>Name</th>\r\n                      <th style=\"text-align:left;\">Designation</th>\r\n                    </tr>\r\n                    @for (item of managementData| slice:0:5; track item) {\r\n                      <tr>\r\n                        <td data-header=\"Name\" class=\"fnt12\">{{item.Name}}</td>\r\n                        <td data-header=\"Designation\" class=\"fnt12\">{{item.Designation}}</td>\r\n                      </tr>\r\n                    }\r\n                  </thead>\r\n                </table>\r\n              </div>\r\n            </div>\r\n          }\r\n          @if (manageData && managementData.length >=6) {\r\n            <div class=\"col-md-6 col-sm-6 col-xs-12\">\r\n              <div class=\"table-responsive table-custom\">\r\n                <table class=\"table\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th>Name</th>\r\n                      <th style=\"text-align:left;\">Designation</th>\r\n                    </tr>\r\n                    @for (item of managementData| slice:5:10; track item) {\r\n                      <tr>\r\n                        <td class=\"fnt12\">{{item.Name}}</td>\r\n                        <td class=\"fnt12\">{{item.Designation}}</td>\r\n                      </tr>\r\n                    }\r\n                  </thead>\r\n                </table>\r\n              </div>\r\n            </div>\r\n          }\r\n          @if (!manageData && !shared.isServiceHit) {\r\n            <div class=\"nodata text-center\">No data Available</div>\r\n          }\r\n        </div>\r\n      }\r\n      @if (activeFilter==2) {\r\n        <div id=\"profile\">\r\n          @if (companyProfile) {\r\n            <div class=\"col-md-12 profile padding-0\">\r\n              <p class=\"note\">{{companyProfile}}</p>\r\n            </div>\r\n          }\r\n          @if (!profileData && !shared.isServiceHit) {\r\n            <div class=\"nodata text-center\">No data Available </div>\r\n          }\r\n        </div>\r\n      }\r\n    </div>\r\n\r\n\r\n  </div>";

/***/ }),

/***/ 45273:
/*!******************************************************************!*\
  !*** ./src/app/company-module/company.component.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "@if (exchangeType != 'indices') {\r\n  <section class=\"m-tb20\">\r\n    @if (selectedTab || isScroll) {\r\n      <div\r\n        (click)=\"gotoOverView()\"\r\n        class=\"top-arrow\"\r\n        >\r\n        <span class=\"icon-angle-up\"></span>\r\n      </div>\r\n    }\r\n    <div class=\"col-md-12 company-page-wrap\">\r\n      @if (\r\n        realtimeMessage &&\r\n        !(\r\n        !userAccountStatus ||\r\n        !userAccountStatus?.onboardStatus ||\r\n        userAccountStatus?.onboardStatus == 'C'\r\n        )\r\n        ) {\r\n        <div\r\n          class=\"delayed-msg\"\r\n          id=\"delayed-message\"\r\n          >\r\n          <div class=\"msg-details\">\r\n            <img\r\n              src=\"../assets/images/jiffy-dashboard/activation-icon.svg\"\r\n              height=\"16\"\r\n              width=\"16\"\r\n              class=\"img-responsive\"\r\n              alt=\"Activatation Message\"\r\n              />\r\n              <p>Real-time data will be available once the account is activated.</p>\r\n            </div>\r\n            <span class=\"close-icon\" (click)=\"closeRealtimeMessage()\">\r\n              <svg\r\n                height=\"18.459\"\r\n                viewBox=\"0 0 18.459 18.459\"\r\n                width=\"18.459\"\r\n                xmlns=\"http://www.w3.org/2000/svg\"\r\n                >\r\n                <path\r\n                  d=\"M18.052,12.459H12.459v5.594H10.594V12.459H5V10.594h5.594V5h1.865v5.594h5.594Z\"\r\n                  data-name=\"Path 117751\"\r\n                  fill=\"rgba(51, 51, 51, 1)\"\r\n                  id=\"Path_117751\"\r\n                  transform=\"translate(9.229 -7.071) rotate(45)\"\r\n                ></path>\r\n              </svg>\r\n            </span>\r\n          </div>\r\n        }\r\n        <section class=\"section-one\">\r\n          <div class=\"container-fluid clearfix padding-0\" id=\"overview\">\r\n            <!--  (futScripDetail)=\"getFutscripInfo($event)\"  -->\r\n            <app-segment-token\r\n              (mappedTokens)=\"getMappedTokens($event)\"\r\n              [IsEventAvailable]=\"EventRef\"\r\n              (focusEvents)=\"initiateFocusOnEvents()\"\r\n              (best5)=\"getBest5data($event)\"\r\n              (focusEvents)=\"initiateFocusOnEvents()\"\r\n              (scripDetail)=\"getscripInfo($event)\"\r\n              [changeOptFut]=\"changeOptFut\"\r\n              [qualityData]=\"qualityData\"\r\n              [eventData]=\"eventData\"\r\n            ></app-segment-token>\r\n            @if (!shared.isMobileScreen) {\r\n              <div\r\n                class=\"container-fluid clearfix padding-0\"\r\n                >\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-12\" style=\"padding-top: 0\">\r\n                    @if (scripInfo?.SegmentId == 1 || scripInfo?.SegmentId == 3) {\r\n                      <app-overview-navbar\r\n                        [scripInfo]=\"scripInfo\"\r\n                        (selectedTab)=\"getSelectedTab($event)\"\r\n                        [reportListing]=\"reportListing\"\r\n                        [arrowClick]=\"arrowClick\"\r\n                        (navbarOutput)=\"getSelectedTab($event)\"\r\n                      ></app-overview-navbar>\r\n                    }\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            }\r\n            @defer(when scripInfo?.SegmentId != 1 && scripInfo?.SegmentId != 3) {\r\n              @if (scripInfo?.SegmentId != 1 && scripInfo?.SegmentId != 3) {\r\n                <app-fut-option\r\n                  [scripInfo]=\"scripInfo\"\r\n                  (onchangeFutOpt)=\"getchangeOptFut($event)\"\r\n                ></app-fut-option>\r\n              }\r\n            }\r\n            <div class=\"container-fluid clearfix padding-0\">\r\n              <div class=\"container-fluid padding-0\">\r\n                <div class=\"row flexwrap\">\r\n                  <div class=\"col-lg-7 col-md-12 col-sm-12 col-xs-12 pr-0\">\r\n                    @if (!loadChart) {\r\n                      <app-chartiq-simple\r\n                        [segmentId]=\"scripInfo?.SegmentId\"\r\n                        [token]=\"scripInfo?.Token\"\r\n                        [scripName]=\"scripInfo?.SecDesc\"\r\n                        [scripDescRev]=\"scripInfo?.Symbol\"\r\n                        [b5Data]=\"best5Response\"\r\n                        >\r\n                      </app-chartiq-simple>\r\n                    }\r\n                  </div>\r\n                  <div class=\"col-lg-5 col-sm-6 col-md-12\">\r\n                    <app-key-info\r\n                      (lut)=\"getLut($event)\"\r\n                      [best5Response]=\"best5Response\"\r\n                      [scripInfo]=\"scripInfo\"\r\n                      >\r\n                    </app-key-info>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row flexwrap clearfix padding-0\" id=\"technical\">\r\n              <div class=\"col-lg-7 col-md-12 col-sm-6 col-xs-12 pr-0\">\r\n                <app-best-five\r\n                  [best5Response]=\"best5Response\"\r\n                  [scripInfo]=\"scripInfo\"\r\n                ></app-best-five>\r\n              </div>\r\n              <div class=\"col-lg-5 col-sm-6 col-md-12\">\r\n                @if (best5Response) {\r\n                  <app-pivot\r\n                    [scripInfo]=\"scripInfo\"\r\n                    [best5Response]=\"best5Response\"\r\n                  ></app-pivot>\r\n                }\r\n              </div>\r\n            </div>\r\n            <div class=\"row flexwrap clearfix padding-0\" id=\"mindtree-futures\">\r\n              <div class=\"col-lg-12 col-sm-12 col-md-12\">\r\n                @if (futureData && futureData?.length) {\r\n                  <div\r\n                    class=\"mindtree-futures\"\r\n                    >\r\n                    <div class=\"card\">\r\n                      <h4 class=\"page-title\">\r\n                        {{ futureData[0].lExchangeScrip?.Symbol }} FUTURES\r\n                      </h4>\r\n                      <div class=\"futures-list\">\r\n                        @for (fut of futureData; track fut) {\r\n                          <div\r\n                            class=\"list-itm\"\r\n                            (click)=\"openCompany(fut)\"\r\n                            >\r\n                            <div class=\"d-flex\">\r\n                              <h4 class=\"bl-txt\">{{ fut?.lExchangeScrip?.sExpiry }}</h4>\r\n                              <h4>{{ fut?.LTP | segment : fut?.SegmentId }}</h4>\r\n                            </div>\r\n                            <div class=\"d-flex\">\r\n                              <h4>\r\n                                <span class=\"clr-chnge\">Vol.</span>\r\n                                {{ fut?.Volume || 0 }}\r\n                              </h4>\r\n                              <h4\r\n                                class=\"nrml-txt\"\r\n                                [class.text-pink]=\"fut?.Change < 0\"\r\n                                [class.text-green]=\"fut?.Change > 0\"\r\n                                >\r\n                                {{\r\n                                (fut?.Change | segment : fut?.SegmentId) +\r\n                                \" (\" +\r\n                                (fut?.ChangePer || 0 | value : \"1.2-2\") +\r\n                                \"%)\"\r\n                                }}\r\n                              </h4>\r\n                            </div>\r\n                          </div>\r\n                        }\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                }\r\n              </div>\r\n            </div>\r\n            @if (!refreshSection) {\r\n              <app-reports\r\n                [mappedTokens]=\"mappedTokens\"\r\n                (reportList)=\"reportList($event)\"\r\n                id=\"Research-report\"\r\n                >\r\n                <img class=\"loader\" src=\"assets/images/loader.gif\" />\r\n              </app-reports>\r\n            }\r\n            <!-- KEY METRICS -->\r\n            @if (\r\n              (!routeParams?.segment ||\r\n              routeParams?.segment == 1 || routeParams?.segment == 3) &&\r\n              !scripItaDetail?.noData\r\n              ) {\r\n              <div\r\n                class=\"row flexwrap clearfix padding-0\"\r\n                id=\"key-metrics\"\r\n                >\r\n                <div class=\"col-lg-5 col-sm-6 col-md-5 pr-0\">\r\n                  <div class=\"key-metrics\" id=\"company-key-metrics\">\r\n                    <div class=\"card\">\r\n                      <h4 class=\"page-title\">\r\n                        KEY METRICS\r\n                        <span class=\"ttl-tooltip\">\r\n                          <img\r\n                            src=\"../../../assets/images/company-page/tooltip-ico.svg\"\r\n                            height=\"16\"\r\n                            width=\"16\"\r\n                            alt=\"Tooltip\"\r\n                            />\r\n                            <div class=\"tooltip-txt\">\r\n                              <p>\r\n                                <b> P/E Ratio</b> - PE is the ratio of the share price\r\n                                of a stock to its earnings per share (EPS).\r\n                              </p>\r\n                              <p>\r\n                                <b>P/B Ratio</b> - The PB ratio is the share price per\r\n                                stock divided by the book value per share. The market\r\n                                price per share is simply the stock price.\r\n                              </p>\r\n                              <p>\r\n                                <b>Dividend Yield</b> - The dividend yield of a share is\r\n                                the dividend per share, divided by the price per share.\r\n                              </p>\r\n                              <p>\r\n                                <b>Sector P/E</b> - Sector PE is the average\r\n                                price-to-earning ratio of a particular sector or\r\n                                industry. It’s used as a benchmark to compare the PE of\r\n                                a stock to the PE of an entire industry.\r\n                              </p>\r\n                              <p>\r\n                                <b>Sector P/B</b> - Sector PB ratio is calculated as\r\n                                market capitalisation of the sector divided by gross\r\n                                book value of the sector.\r\n                              </p>\r\n                              <p>\r\n                                <b>Sector Dividend Yield</b> - Dividend Yield by sector\r\n                                is the annualised gross regular cash dividend per share\r\n                                of each constituent within that sector, divided by its\r\n                                price.\r\n                              </p>\r\n                            </div>\r\n                          </span>\r\n                        </h4>\r\n                        <ul class=\"reset\">\r\n                          <li>\r\n                            <h5>\r\n                              P/E Ratio\r\n                              <!--           <span class=\"ttl-tooltip\">\r\n                              <img src=\"../../../assets/images/company-page/tooltip-ico.svg\">\r\n                              <div class=\"tooltip-txt\">\r\n                                <p>  PE is the ratio of the share price of a stock to its earnings per share (EPS).</p>\r\n                              </div>\r\n                            </span> -->\r\n                          </h5>\r\n                          <h4>{{ scripItaDetail?.keymetrics?.peratio || \"0.00\" }}</h4>\r\n                        </li>\r\n                        <li>\r\n                          <h5>\r\n                            Sector P/E\r\n                            <!--            <span class=\"ttl-tooltip\">\r\n                            <img src=\"../../../assets/images/company-page/tooltip-ico.svg\">\r\n                            <div class=\"tooltip-txt\">\r\n                              <p>  Sector PE is the average price-to-earning ratio of a particular sector or industry. It’s used as a benchmark to compare the PE of a stock to the PE of an entire industry.</p>\r\n                            </div>\r\n                          </span> -->\r\n                        </h5>\r\n                        <h4>{{ scripItaDetail?.keymetrics?.secpe || \"0.00\" }}</h4>\r\n                      </li>\r\n                      <li>\r\n                        <h5>\r\n                          P/B Ratio\r\n                          <!--            <span class=\"ttl-tooltip\">\r\n                          <img src=\"../../../assets/images/company-page/tooltip-ico.svg\">\r\n                          <div class=\"tooltip-txt\">\r\n                            <p>  The PB ratio is the share price per stock divided by the book value per share. The market price per share is simply the stock price. </p>\r\n                          </div>\r\n                        </span> -->\r\n                      </h5>\r\n                      <h4>{{ scripItaDetail?.keymetrics?.pbratio || \"0.00\" }}</h4>\r\n                    </li>\r\n                    <li>\r\n                      <h5>\r\n                        Sector P/B\r\n                        <!--                <span class=\"ttl-tooltip\">\r\n                        <img src=\"../../../assets/images/company-page/tooltip-ico.svg\">\r\n                        <div class=\"tooltip-txt\">\r\n                          <p> Sector PB ratio is calculated as market capitalisation of the sector divided by gross book value of the sector. </p>\r\n                        </div>\r\n                      </span> -->\r\n                    </h5>\r\n                    <h4>{{ scripItaDetail?.keymetrics?.secpb || \"0.00\" }}</h4>\r\n                  </li>\r\n                  <li>\r\n                    <h5>\r\n                      Div. Yield\r\n                      <!--                <span class=\"ttl-tooltip\">\r\n                      <img src=\"../../../assets/images/company-page/tooltip-ico.svg\">\r\n                      <div class=\"tooltip-txt\">\r\n                        <p> The dividend yield of a share is the dividend per share, divided by the price per share.</p>\r\n                      </div>\r\n                    </span> -->\r\n                  </h5>\r\n                  <h4>\r\n                    {{ scripItaDetail?.keymetrics?.divyield || \"0.00\" }}\r\n                  </h4>\r\n                </li>\r\n                <li>\r\n                  <h5>\r\n                    Sec. Div. Yield\r\n                    <!--       <span class=\"ttl-tooltip\">\r\n                    <img src=\"../../../assets/images/company-page/tooltip-ico.svg\">\r\n                    <div class=\"tooltip-txt\">\r\n                      <p>  Dividend Yield by sector is the annualised gross regular cash dividend per share of each constituent within that sector, divided by its price.</p>\r\n                    </div>\r\n                  </span> -->\r\n                </h5>\r\n                <h4>\r\n                  {{ scripItaDetail?.keymetrics?.secdivyield || \"0.00\" }}\r\n                </h4>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-7 col-sm-6 col-md-7\" id=\"Quality-Scrore\">\r\n        <div class=\"quality-score-card\">\r\n          <div class=\"card\">\r\n            <div class=\"card-top\">\r\n              <h4 class=\"page-title\">QUALITY SCORE CARD</h4>\r\n              <!--   <a  class=\"btn-more\">Know More</a> -->\r\n            </div>\r\n            <div class=\"score-card-list\">\r\n              <div class=\"card-list-itm\">\r\n                <!-- (click)=\"openQualitySection('Price',0)\" -->\r\n                <a class=\"card-list-itm-sub ipocard-res\">\r\n                  <div class=\"list-itm-left\">\r\n                    <svg\r\n                      xmlns=\"http://www.w3.org/2000/svg\"\r\n                      width=\"32\"\r\n                      height=\"28\"\r\n                      viewBox=\"0 0 32 28\"\r\n                      >\r\n                      <path\r\n                        id=\"hand-holding-dollar-solid_1_\"\r\n                        data-name=\"hand-holding-dollar-solid (1)\"\r\n                        d=\"M31.573,18.391a2.24,2.24,0,0,0-3.108-.463L21.814,22.75h-6.7a.846.846,0,0,1-.839-.874A.879.879,0,0,1,15.112,21H19.46a1.883,1.883,0,0,0,1.854-1.456A1.762,1.762,0,0,0,19.558,17.5H10.619A6.711,6.711,0,0,0,6.5,18.936L3.916,21,.839,20.951A.928.928,0,0,0,0,21.875v5.249A.877.877,0,0,0,.839,28H20.071A5.886,5.886,0,0,0,23.5,26.891l7.507-5.443A2.106,2.106,0,0,0,31.573,18.391ZM15.52,9.57a8.534,8.534,0,0,1-1.467-.432l-.272-.093a1.313,1.313,0,0,0-1.7.749,1.328,1.328,0,0,0,.811,1.676l.259.091a13.905,13.905,0,0,0,1.522.455v.672a1.333,1.333,0,0,0,2.666,0v-.569a3.018,3.018,0,0,0,2.562-2.5c.483-2.737-2.161-3.481-3.58-3.88l-.294-.1c-1.461-.408-1.378-.584-1.339-.809.064-.37.85-.55,1.79-.4a6.781,6.781,0,0,1,1.092.3,1.34,1.34,0,0,0,1.7-.812,1.309,1.309,0,0,0-.825-1.67,10.7,10.7,0,0,0-1.1-.313V1.313a1.333,1.333,0,0,0-2.666,0v.575a3.249,3.249,0,0,0-2.664,2.494c-.428,2.705,2.256,3.482,3.267,3.777l.361.1c1.759.5,1.731.65,1.686.91C17.259,9.543,16.475,9.723,15.52,9.57Z\"\r\n                        fill=\"#1B1464\"\r\n                        />\r\n                      </svg>\r\n                    </div>\r\n                    <div class=\"list-itm-right ipocarditem-res\">\r\n                      <h5>Price</h5>\r\n                      <h3\r\n                          class=\"{{\r\n\r\n                            qualityData ? qualityData[0]?.class || '-' : ''\r\n\r\n                          }}\"\r\n                        >\r\n                        {{\r\n                        qualityData[0]?.value == \"AVG\"\r\n                        ? \"Average\"\r\n                        : qualityData[0]?.value || \"-\"\r\n                        }}\r\n                      </h3>\r\n                    </div>\r\n                    <!--  <span class=\"exp-more\">\r\n                    <i class=\"icon-back-arrow\"></i>\r\n                  </span> -->\r\n                </a>\r\n              </div>\r\n              <div class=\"card-list-itm\">\r\n                <!-- (click)=\"openQualitySection('Growth',1)\" -->\r\n                <a class=\"card-list-itm-sub ipocard-res\">\r\n                  <div class=\"list-itm-left\">\r\n                    <svg\r\n                      xmlns=\"http://www.w3.org/2000/svg\"\r\n                      width=\"32\"\r\n                      height=\"28\"\r\n                      viewBox=\"0 0 32 28\"\r\n                      >\r\n                      <path\r\n                        id=\"chart-line-solid_3_\"\r\n                        data-name=\"chart-line-solid (3)\"\r\n                        d=\"M4,55a1,1,0,0,0,1,1H30a2,2,0,0,1,0,4H5a5,5,0,0,1-5-5V34a2,2,0,0,1,4,0Zm17.412-7.588a2,2,0,0,1-2.825,0L15,43.831,9.413,49.413a2,2,0,0,1-2.825-2.825l7-7a2,2,0,0,1,2.825,0L20,43.169l6.587-6.581a2,2,0,0,1,2.825,2.825Z\"\r\n                        transform=\"translate(0 -32)\"\r\n                        fill=\"#1B1464\"\r\n                        />\r\n                      </svg>\r\n                    </div>\r\n                    <div class=\"list-itm-right ipocarditem-res\">\r\n                      <h5>Growth</h5>\r\n                      <h3\r\n                          class=\"{{\r\n\r\n                            qualityData ? qualityData[1]?.class || '-' : ''\r\n\r\n                          }}\"\r\n                        >\r\n                        {{\r\n                        qualityData[1]?.value == \"AVG\"\r\n                        ? \"Average\"\r\n                        : qualityData[1]?.value || \"-\"\r\n                        }}\r\n                      </h3>\r\n                    </div>\r\n                    <!--   <span class=\"exp-more\">\r\n                    <i class=\"icon-back-arrow\"></i>\r\n                  </span> -->\r\n                </a>\r\n              </div>\r\n              <div class=\"card-list-itm\">\r\n                <!-- (click)=\"openQualitySection('Quality',2)\" -->\r\n                <a class=\"card-list-itm-sub ipocard-res\">\r\n                  <div class=\"list-itm-left\">\r\n                    <svg\r\n                      xmlns=\"http://www.w3.org/2000/svg\"\r\n                      width=\"28\"\r\n                      height=\"28\"\r\n                      viewBox=\"0 0 28 28\"\r\n                      >\r\n                      <path\r\n                        id=\"circle-check-solid_2_\"\r\n                        data-name=\"circle-check-solid (2)\"\r\n                        d=\"M0,14A14,14,0,1,1,14,28,14,14,0,0,1,0,14Zm20.333-2.417a1.531,1.531,0,0,0-2.166-2.166L12.25,15.334,9.833,12.917a1.531,1.531,0,0,0-2.166,2.166l3.5,3.5a1.535,1.535,0,0,0,2.166,0Z\"\r\n                        fill=\"#1B1464\"\r\n                        />\r\n                      </svg>\r\n                    </div>\r\n                    <div class=\"list-itm-right ipocarditem-res\">\r\n                      <h5>Quality</h5>\r\n                      <h3\r\n                          class=\"{{\r\n\r\n                            qualityData ? qualityData[2]?.class || '-' : ''\r\n\r\n                          }}\"\r\n                        >\r\n                        {{\r\n                        qualityData[2]?.value == \"AVG\"\r\n                        ? \"Average\"\r\n                        : qualityData[2]?.value || \"-\"\r\n                        }}\r\n                      </h3>\r\n                    </div>\r\n                    <!--  <span class=\"exp-more\">\r\n                    <i class=\"icon-back-arrow\"></i>\r\n                  </span> -->\r\n                </a>\r\n              </div>\r\n              <div class=\"card-list-itm\">\r\n                <!-- (click)=\"openQualitySection('Management',3)\" -->\r\n                <a class=\"card-list-itm-sub ipocard-res\">\r\n                  <div class=\"list-itm-left\">\r\n                    <svg\r\n                      xmlns=\"http://www.w3.org/2000/svg\"\r\n                      width=\"34.999\"\r\n                      height=\"28\"\r\n                      viewBox=\"0 0 34.999 28\"\r\n                      >\r\n                      <path\r\n                        id=\"user-gear-solid\"\r\n                        d=\"M23.248,26.392q-.189-.1-.372-.215l-.428.246a2.144,2.144,0,0,1-1.08.293,2.184,2.184,0,0,1-1.584-.7,10.079,10.079,0,0,1-2.2-3.823,2.114,2.114,0,0,1,.975-2.474L19,19.466q-.005-.215,0-.43l-.419-.244A2.119,2.119,0,0,1,17.5,16.967a9.408,9.408,0,0,0-2.482-.342H9.477A9.483,9.483,0,0,0,0,26.108,1.894,1.894,0,0,0,1.9,28H22.6a1.85,1.85,0,0,0,.856-.229,2.106,2.106,0,0,1-.211-.878ZM12.25,14a7,7,0,1,0-7-7A7,7,0,0,0,12.25,14Zm21.137,6.415a6.326,6.326,0,0,0,0-2.324l1.408-.82a.394.394,0,0,0,.185-.465,8.306,8.306,0,0,0-1.818-3.138.394.394,0,0,0-.492-.075l-1.408.814a6.4,6.4,0,0,0-2.017-1.162V11.61a.4.4,0,0,0-.314-.383,8.2,8.2,0,0,0-3.623,0A.389.389,0,0,0,25,11.61v1.634a6.4,6.4,0,0,0-2.017,1.162l-1.413-.816a.4.4,0,0,0-.492.075A8.206,8.206,0,0,0,19.265,16.8a.4.4,0,0,0,.178.465l1.408.82a6.636,6.636,0,0,0,0,2.324l-1.408.82a.391.391,0,0,0-.178.465,8.256,8.256,0,0,0,1.812,3.138.4.4,0,0,0,.492.075l1.415-.814A6.4,6.4,0,0,0,25,25.259v1.634a.389.389,0,0,0,.308.383,8.2,8.2,0,0,0,3.623,0,.4.4,0,0,0,.314-.383V25.259A6.4,6.4,0,0,0,31.263,24.1l1.408.814a.4.4,0,0,0,.492-.075A8.306,8.306,0,0,0,34.982,21.7a.394.394,0,0,0-.185-.465ZM27.125,21.9a2.652,2.652,0,1,1,2.652-2.652A2.655,2.655,0,0,1,27.125,21.9Z\"\r\n                        fill=\"#1B1464\"\r\n                        />\r\n                      </svg>\r\n                    </div>\r\n                    <div class=\"list-itm-right ipocarditem-res\">\r\n                      <h5>Management</h5>\r\n                      <h3\r\n                          class=\"{{\r\n\r\n                            qualityData ? qualityData[3]?.class || '-' : ''\r\n\r\n                          }}\"\r\n                        >\r\n                        {{\r\n                        qualityData[3]?.value == \"AVG\"\r\n                        ? \"Average\"\r\n                        : qualityData[3]?.value || \"-\"\r\n                        }}\r\n                      </h3>\r\n                    </div>\r\n                    <!--  <span class=\"exp-more\">\r\n                    <i class=\"icon-back-arrow\"></i>\r\n                  </span> -->\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  }\r\n  <!-- SHAREHOLDING INFO -->\r\n  <!--  <pre>{{routeParams|json}}</pre> -->\r\n  <div class=\"sharehold-scrollhidden\">\r\n    @if (\r\n      (!routeParams?.segment ||\r\n      routeParams?.segment == 1 || routeParams?.segment == 3) &&\r\n      !scripItaDetail?.noData &&\r\n      selectedYear &&\r\n      selectedSegment &&\r\n      scripItaDetail?.overview &&\r\n      scripItaDetail?.overview?.length\r\n      ) {\r\n      <div\r\n        class=\"row flexwrap clearfix padding-0\"\r\n        >\r\n        <div class=\"col-lg-12 col-sm-12 col-md-12\">\r\n          <div class=\"shareholding-info\">\r\n            <div class=\"card\">\r\n              <h4 class=\"page-title\">SHAREHOLDING INFO</h4>\r\n              <div class=\"info-content-data\">\r\n                <div class=\"info-chart-date\">\r\n                  <ul class=\"tabs-num\">\r\n                    @for (\r\n                      year of historyData\r\n                      | keyvalue\r\n                      | customFilterBy : 5; track\r\n                      year; let i = $index) {\r\n                      <li\r\n                        (click)=\"selectYear(year?.key)\"\r\n                          [ngClass]=\"{\r\n\r\n                            'active-year': selectedYear == year?.key\r\n\r\n                          }\"\r\n                          id=\"{{\r\n\r\n                            i ==\r\n\r\n                            (historyData | keyvalue | customFilterBy : 5 || [])\r\n\r\n                              .length -\r\n\r\n                              1\r\n\r\n                              ? 'shareholding-info'\r\n\r\n                              : ''\r\n\r\n                          }}\"\r\n                        >\r\n                        {{ year?.key }}\r\n                      </li>\r\n                    }\r\n                    <!--   <li class=\"active-year\">\r\n                    2017-18\r\n                  </li> -->\r\n                </ul>\r\n              </div>\r\n              <div class=\"info-chart-cont ipo-info-chart\">\r\n                <div class=\"nx-chart\">\r\n                  <div class=\"chart\">\r\n                    <!--  <span  *ngFor=\"let block of (historyData[selectedYear]||{})|keyvalue; let i=index\" class=\"block cat-{{i+1}}\" title=\"{{block?.key}}\" [ngStyle]=\"{'width': (block.value[block.value.length-1].per||0)+'%'}\"> -->\r\n                    @for (\r\n                      block of scripItaDetail?.overview || []; track\r\n                      block; let i = $index) {\r\n                      <span\r\n                            class=\"block {{\r\n\r\n                              ' ' +\r\n\r\n                                (block?.catName == selectedSegment\r\n\r\n                                  ? 'stripe-cat-' + (i + 1)\r\n\r\n                                  : 'cat-' + (i + 1))\r\n\r\n                            }} \"\r\n                        title=\"{{ block?.catName }}\"\r\n                            [ngStyle]=\"{\r\n\r\n                              width:\r\n\r\n                                (historyData[selectedYear][block?.catName][\r\n\r\n                                  historyData[selectedYear][block?.catName]\r\n\r\n                                    .length - 1\r\n\r\n                                ].per\r\n\r\n                                  ? historyData[selectedYear][block?.catName][\r\n\r\n                                      historyData[selectedYear][block?.catName]\r\n\r\n                                        .length - 1\r\n\r\n                                    ].per - 0.03\r\n\r\n                                  : 0) + '%'\r\n\r\n                            }\"\r\n                        >\r\n                        <!--  {{((historyData[selectedYear][block?.catName][historyData[selectedYear][block?.catName].length-1].per-0.03)||0)}} -->\r\n                        <!--  <pre>{{historyData[selectedYear][block?.catName][historyData[selectedYear][block?.catName].length-1]|json}}</pre> -->\r\n                      </span>\r\n                    }\r\n                    <!-- <span class=\"block cat-2\" title=\"Category B\" style=\"width: 26%;\">\r\n                  </span>\r\n                  <span class=\"block cat-3\" title=\"Category C\" style=\"width: 5%;\">\r\n                  </span>\r\n                  <span class=\"block cat-4\" title=\"Category D\" style=\"width: 40%;\">\r\n                  </span>\r\n                  <span class=\"block cat-5\" title=\"Category E\" style=\"width: 12%;\">\r\n                  </span>\r\n                  <span class=\"block cat-6\" title=\"Category F\" style=\"width: 4%;\">\r\n                  </span> -->\r\n                </div>\r\n                <h5>Total Promoters</h5>\r\n              </div>\r\n              <div class=\"segment-percent\">\r\n                <div class=\"seg-percnt-list\">\r\n                  <div class=\"percnt-list-itm list-itm-top\">\r\n                    <div class=\"itm-lft\">\r\n                      <h5>Segment</h5>\r\n                    </div>\r\n                    <div class=\"itm-right\">\r\n                      <h5>Percent</h5>\r\n                    </div>\r\n                  </div>\r\n                  <!--  <div class=\"percnt-list-itm {{block?.key==selectedSegment?' percnt-list-itm-active':''}}\"   (click)=\"selectSegment(block?.key)\" *ngFor=\"let block of (historyData[selectedYear]||{})|keyvalue; let i=index\"> -->\r\n                  @for (\r\n                    block of scripItaDetail.overview; track\r\n                    block; let i = $index) {\r\n                    <div\r\n                            class=\"percnt-list-itm {{\r\n\r\n                              block?.catName == selectedSegment\r\n\r\n                                ? ' percnt-list-itm-active'\r\n\r\n                                : ''\r\n\r\n                            }}\"\r\n                      (click)=\"selectSegment(block?.catName)\"\r\n                      >\r\n                      <div class=\"itm-lft\">\r\n                        <span class=\"clr-bg clr{{ i + 1 }}\"></span>\r\n                        <h4>{{ block?.catName }}</h4>\r\n                      </div>\r\n                      <div class=\"itm-right\">\r\n                        <h4>\r\n                          {{\r\n                          ((historyData &&\r\n                          historyData[selectedYear] &&\r\n                          historyData[selectedYear][block?.catName] &&\r\n                          historyData[selectedYear][block?.catName]\r\n                          .length &&\r\n                          historyData[selectedYear][block?.catName][\r\n                          historyData[selectedYear][block?.catName]\r\n                          .length - 1\r\n                          ].per\r\n                          ? historyData[selectedYear][block?.catName][\r\n                          historyData[selectedYear][\r\n                          block?.catName\r\n                          ].length - 1\r\n                          ].per\r\n                          : 0) || 0) + \"%\"\r\n                          }}\r\n                        </h4>\r\n                      </div>\r\n                    </div>\r\n                  }\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"info-promotors ipo-info-promotors\">\r\n              <h5>{{ selectedSegment }}</h5>\r\n              <div class=\"promotors-list\">\r\n                @for (\r\n                  item of prevyear &&\r\n                  historyData &&\r\n                  historyData[prevyear] &&\r\n                  historyData[prevyear][selectedSegment]\r\n                  ? historyData[prevyear][selectedSegment]\r\n                  : []\r\n                  ; track\r\n                  item) {\r\n                  @if ((item?.monthKey).indexOf('DEC') > -1) {\r\n                    <div\r\n                      class=\"promotors-list-itm\"\r\n                      >\r\n                      <div class=\"prm-left-sec\">\r\n                        <h5 class=\"date-sm\">{{ item?.monthKey }}</h5>\r\n                        <div class=\"progress-promotors\">\r\n                          <div\r\n                            class=\"bar\"\r\n                            [ngStyle]=\"{ width: item?.per + '%' }\"\r\n                          ></div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"prm-percent\">\r\n                        <h5>{{ item?.per }}%</h5>\r\n                      </div>\r\n                    </div>\r\n                  }\r\n                }\r\n                @for (\r\n                  item of historyData &&\r\n                  historyData[selectedYear] &&\r\n                  historyData[selectedYear][selectedSegment]\r\n                  ? historyData[selectedYear][selectedSegment]\r\n                  : []\r\n                  ; track\r\n                  item) {\r\n                  @if ((item?.monthKey).indexOf('DEC') == -1) {\r\n                    <div\r\n                      class=\"promotors-list-itm\"\r\n                      >\r\n                      <div class=\"prm-left-sec\">\r\n                        <h5 class=\"date-sm\">{{ item?.monthKey }}</h5>\r\n                        <div class=\"progress-promotors\">\r\n                          <div\r\n                            class=\"bar\"\r\n                            [ngStyle]=\"{ width: item?.per + '%' }\"\r\n                          ></div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"prm-percent\">\r\n                        <h5>{{ item?.per }}%</h5>\r\n                      </div>\r\n                    </div>\r\n                  }\r\n                }\r\n                <!--        <div class=\"promotors-list-itm\">\r\n                <div class=\"prm-left-sec\">\r\n                  <h5 class=\"date-sm\">JUN '21</h5>\r\n                  <div class=\"progress-promotors\">\r\n                    <div class=\"bar\" style=\"width:12%\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"prm-percent\">\r\n                  <h5>12 %</h5>\r\n                </div>\r\n              </div>\r\n              <div class=\"promotors-list-itm\">\r\n                <div class=\"prm-left-sec\">\r\n                  <h5 class=\"date-sm\">SEP '21</h5>\r\n                  <div class=\"progress-promotors\">\r\n                    <div class=\"bar\" style=\"width:13%\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"prm-percent\">\r\n                  <h5>13 %</h5>\r\n                </div>\r\n              </div>\r\n              <div class=\"promotors-list-itm\">\r\n                <div class=\"prm-left-sec\">\r\n                  <h5 class=\"date-sm\">DEC '21</h5>\r\n                  <div class=\"progress-promotors\">\r\n                    <div class=\"bar\" style=\"width:30%\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"prm-percent\">\r\n                  <h5>30 %</h5>\r\n                </div>\r\n              </div>\r\n              <div class=\"promotors-list-itm\">\r\n                <div class=\"prm-left-sec\">\r\n                  <h5 class=\"date-sm\">MAR '22</h5>\r\n                  <div class=\"progress-promotors\">\r\n                    <div class=\"bar\" style=\"width:13%\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"prm-percent\">\r\n                  <h5>13 %</h5>\r\n                </div>\r\n              </div> -->\r\n            </div>\r\n          </div>\r\n        </div>\r\n        @if (\r\n          !(\r\n          selectedYear &&\r\n          selectedSegment &&\r\n          scripItaDetail?.overview &&\r\n          scripItaDetail?.overview?.length\r\n          )\r\n          ) {\r\n          <div\r\n            class=\"info-content-data\"\r\n            >\r\n            <div class=\"info-chart-no-cont\">\r\n              <h4 class=\"text-center\">No Data Found</h4>\r\n            </div>\r\n          </div>\r\n        }\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n}\r\n</div>\r\n<!-- RELATED COMPANY -->\r\n@defer(when !refreshSection &&\r\n!shared.isMobileScreen &&\r\n(scripInfo?.SegmentId == 1 || scripInfo?.SegmentId == 3) &&\r\nscripInfo?.Peers) {\r\n  @if (\r\n    !refreshSection &&\r\n    !shared.isMobileScreen &&\r\n    (scripInfo?.SegmentId == 1 || scripInfo?.SegmentId == 3) &&\r\n    scripInfo?.Peers\r\n    ) {\r\n    <app-peer-comparision\r\n      [scripInfo]=\"scripInfo\"\r\n    ></app-peer-comparision>\r\n  }\r\n}\r\n@if (\r\n  !shared.isMobileScreen &&\r\n  (scripInfo?.SegmentId == 1 || scripInfo?.SegmentId == 3)\r\n  ) {\r\n  <div\r\n    class=\"container-fluid padding-0 key-ratio-wrap\"\r\n    >\r\n    <div class=\"row flexwrap\">\r\n      <!-- <div *ngIf=\"scripInfo?.RatioData\" class=\"col-lg-8 col-md-12 col-sm-12 col-xs-12\" id=\"ratio\">\r\n      <app-key-ratio [scripInfo]=\"scripInfo\"></app-key-ratio>\r\n    </div> -->\r\n    @defer(when !shared.isMobileScreen &&\r\n  (scripInfo?.SegmentId == 1 || scripInfo?.SegmentId == 3)) {\r\n      @if (!refreshSection) {\r\n        <div\r\n          class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\"\r\n          id=\"fund-interest\"\r\n          >\r\n          <app-news-announcement\r\n            [scripInfo]=\"scripInfo\"\r\n            (eventData)=\"setEventData($event)\"\r\n            [IsEventAvailable]=\"EventRef\"\r\n          ></app-news-announcement>\r\n        </div>\r\n      }\r\n    }\r\n    <!-- <div *ngIf=\"scripInfo?.ShareHoldingData\" class=\"col-lg-4 col-sm-12 col-md-12 col-xs-12\">\r\n    <app-share-holding [scripInfo]=\"scripInfo\"></app-share-holding>\r\n  </div> -->\r\n</div>\r\n</div>\r\n}\r\n<!-- <div *ngIf=\"!shared.isMobileScreen && ((scripInfo?.SegmentId == 1) || (scripInfo?.SegmentId == 3))\"\r\nclass=\"container-fluid fund-interest-wrap padding-0\" id=\"fund-interest\">\r\n<div class=\"row flexwrap\"> -->\r\n  <!-- <div class=\"col-sm-8 col-xs-12\">\r\n  <app-fund-intrest [scripInfo]=\"scripInfo\" [best5Response]=\"best5Response\"></app-fund-intrest>\r\n</div> -->\r\n<!--\r\n</div>\r\n</div> -->\r\n<!-- <app-financial [scripInfo]=\"scripInfo\"\r\n*ngIf=\"!shared.isMobileScreen && ((scripInfo?.SegmentId == 1) || (scripInfo?.SegmentId == 3)) && scripInfo?.FinancialData\">\r\n</app-financial> -->\r\n@defer(when !refreshSection &&\r\n!shared.isMobileScreen &&\r\n(scripInfo?.SegmentId == 1 || scripInfo?.SegmentId == 3) &&\r\n(scripInfo?.CompanyOfficeDetails ||\r\nscripInfo?.CompanyManagement ||\r\nscripInfo?.CompanyInfo)) {\r\n  @if (\r\n    !refreshSection &&\r\n    !shared.isMobileScreen &&\r\n    (scripInfo?.SegmentId == 1 || scripInfo?.SegmentId == 3) &&\r\n    (scripInfo?.CompanyOfficeDetails ||\r\n    scripInfo?.CompanyManagement ||\r\n    scripInfo?.CompanyInfo)\r\n    ) {\r\n    <app-company-details\r\n      [scripInfo]=\"scripInfo\"\r\n      >\r\n    </app-company-details>\r\n  }\r\n}\r\n<!-- <div class=\"card company-block clearfix\" id=\"company-faqs\" *ngIf=\"faqs?.length\">\r\n<h4 class=\"page-title text-uppercase \">FAQs</h4>\r\n<img class=\"loader\" src=\"{{shared.serverImageUrl + 'loader.gif'}}\" [hidden]=\"!shared.isServiceHit\" />\r\n<div class=\"resp-tabs-container hor_1\">\r\n  <div>\r\n    <div class=\"tabs-data scrollbar\" id=\"style-7\">\r\n      <div *ngFor=\"let item of faqs||[];let i = index\" class=\"col-md-12 padding-0  pbt-10 clearfix\">\r\n        <div class=\"flex-wrap\">\r\n          <div class=\"\">\r\n            <div class=\"outer\">\r\n              <div class=\"inner\">&nbsp;</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"\">\r\n            <div class=\"date\">{{item.faq_question}} </div>\r\n            <div class=\"headline\">\r\n              <a>{{item?.faq_answer}}</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div> -->\r\n<!--    <div >\r\n<iframe id=\"mojo-analysis\" *ngIf=\"mojoAnalysisURL\" [src]=\"mojoAnalysisURL\" title=\"Mojo Analysis\"></iframe>\r\n</div> -->\r\n</div>\r\n</section>\r\n</div>\r\n<!-- <app-mobile-app></app-mobile-app> -->\r\n</section>\r\n}\r\n\r\n\r\n\r\n<!--market indices  -->\r\n\r\n<div class=\"clearfix\"></div>\r\n\r\n@if (exchangeType == 'indices') {\r\n  <section\r\n    class=\"m-tb20 market-indices clearfix\"\r\n    >\r\n    <div class=\"col-xs-12 company-page-wrap\">\r\n      <div>\r\n        <div\r\n          class=\"card nifty-sticky\"\r\n        [ngClass]=\"{\r\n\r\n          'nifty-sticky-note':\r\n\r\n            shared?.kraStatusDisclaimerVisible &&\r\n\r\n            shared?.kraStatusConfig &&\r\n\r\n            shared?.kraStatusConfig?.show &&\r\n\r\n            shared?.kraStatusConfig?.msg?.title\r\n\r\n        }\"\r\n          >\r\n          <div class=\"card-block cust-block\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-3 col-md-6 col-lg-3\">\r\n                <app-select-completer\r\n                  [itemList]=\"indexList\"\r\n                  [selected]=\"selectedIndicesData\"\r\n                  (selectedClick)=\"onIndexChange($event)\"\r\n                ></app-select-completer>\r\n                <!-- <label class=\"custom-select\">\r\n                <select id=\"categories\" class=\"form-control\" ng-model=\"type\" [(ngModel)]=\"selectedIndices\" (change)=\"onIndexChange(selectedIndices)\">\r\n                  <option *ngFor=\"let item of indexList\" value=\"{{item.Token}}\">{{item.IndexName}}</option>\r\n                </select>\r\n              </label> -->\r\n            </div>\r\n            <div class=\"col-sm-2 pl-0 col-md-6 col-lg-2\">\r\n              <div class=\"grow selected\">\r\n                <div class=\"inside-grow-content\">\r\n                  <div class=\"card_name\">\r\n                    {{ indicesData?.exchangeSegment }}\r\n                  </div>\r\n                  <div\r\n                    class=\"card_value\"\r\n                    [class.bg-up]=\"indicesData?.prevChange > 0\"\r\n                    [class.bg-down]=\"indicesData?.prevChange < 0\"\r\n                    >\r\n                    {{ indicesData?.LTP || 0 | segment : segmentId }}\r\n                  </div>\r\n                  <div class=\"card_smallfont {{ indicesData?.color }}\">\r\n                    {{\r\n                    indicesData?.change || 0 | segment : segmentId\r\n                    }}\r\n                    &nbsp;({{ indicesData?.changePercent | value : \"1.2-2\" }}%)\r\n                    <i class=\"fa {{ indicesData?.arrow }}\"></i>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div\r\n              id=\"addRemoveWatchlist\"\r\n              class=\"col-lg-7 col-md-7 col-sm-7 col-xs-12 addRemoveWatchlist-new-comp\"\r\n              >\r\n              <div class=\"row\">\r\n              <div class=\"col-md-12 padding0\">\r\n                <div class=\"padding-0 clearfix add-remove-section\"></div>\r\n                @if (\r\n                  indicesData?.SegmentId != 6 && indicesData?.SegmentId != 8\r\n                  ) {\r\n                  <button\r\n                    class=\"btn-sets\"\r\n                    (click)=\"openOptionChain()\"\r\n                    title=\"Option Chain\"\r\n                    >\r\n                    <!-- <img src=\"assets/images/icons/option-chain.svg\" class=\"ico-set\"> -->\r\n                    <svg\r\n                      xmlns=\"http://www.w3.org/2000/svg\"\r\n                      id=\"Option_chain\"\r\n                      data-name=\"Option chain\"\r\n                      width=\"19\"\r\n                      height=\"19\"\r\n                      viewBox=\"0 0 19 19\"\r\n                      class=\"ico-set\"\r\n                      >\r\n                      <path\r\n                        id=\"Path_59580\"\r\n                        data-name=\"Path 59580\"\r\n                        d=\"M0,0H19V19H0Z\"\r\n                        fill=\"none\"\r\n                        />\r\n                        <path\r\n                          id=\"Path_59581\"\r\n                          data-name=\"Path 59581\"\r\n                          d=\"M10,12.18a2.865,2.865,0,0,0,4.093,0l3.274-3.274a2.894,2.894,0,1,0-4.093-4.093l-.409.409\"\r\n                          transform=\"translate(-2.277 -0.918)\"\r\n                          fill=\"none\"\r\n                          stroke=\"#1B1464\"\r\n                          stroke-linecap=\"round\"\r\n                          stroke-linejoin=\"round\"\r\n                          stroke-width=\"1.5\"\r\n                          />\r\n                          <path\r\n                            id=\"Path_59582\"\r\n                            data-name=\"Path 59582\"\r\n                            d=\"M12.18,9.809a2.865,2.865,0,0,0-4.093,0L4.812,13.084a2.894,2.894,0,0,0,4.093,4.093l.409-.409\"\r\n                            transform=\"translate(-0.903 -2.071)\"\r\n                            fill=\"none\"\r\n                            stroke=\"#1B1464\"\r\n                            stroke-linecap=\"round\"\r\n                            stroke-linejoin=\"round\"\r\n                            stroke-width=\"1.5\"\r\n                            />\r\n                            <line\r\n                              id=\"Line_142\"\r\n                              data-name=\"Line 142\"\r\n                              y1=\"1\"\r\n                              transform=\"translate(12.401 15.177)\"\r\n                              fill=\"none\"\r\n                              stroke=\"#1B1464\"\r\n                              stroke-linecap=\"round\"\r\n                              stroke-linejoin=\"round\"\r\n                              stroke-width=\"1.5\"\r\n                              />\r\n                              <line\r\n                                id=\"Line_143\"\r\n                                data-name=\"Line 143\"\r\n                                x2=\"1\"\r\n                                transform=\"translate(15.177 12.401)\"\r\n                                fill=\"none\"\r\n                                stroke=\"#1B1464\"\r\n                                stroke-linecap=\"round\"\r\n                                stroke-linejoin=\"round\"\r\n                                stroke-width=\"1.5\"\r\n                                />\r\n                                <line\r\n                                  id=\"Line_144\"\r\n                                  data-name=\"Line 144\"\r\n                                  x2=\"1\"\r\n                                  transform=\"translate(2.823 6.599)\"\r\n                                  fill=\"none\"\r\n                                  stroke=\"#1B1464\"\r\n                                  stroke-linecap=\"round\"\r\n                                  stroke-linejoin=\"round\"\r\n                                  stroke-width=\"1.5\"\r\n                                  />\r\n                                  <line\r\n                                    id=\"Line_145\"\r\n                                    data-name=\"Line 145\"\r\n                                    y2=\"1\"\r\n                                    transform=\"translate(6.599 2.823)\"\r\n                                    fill=\"none\"\r\n                                    stroke=\"#1B1464\"\r\n                                    stroke-linecap=\"round\"\r\n                                    stroke-linejoin=\"round\"\r\n                                    stroke-width=\"1.5\"\r\n                                    />\r\n                                  </svg>\r\n                                </button>\r\n                              }\r\n                              @if (isAdded) {\r\n                                <button\r\n                                  class=\"btn-sets m-r-18\"\r\n                                  [disabled]=\"isButtonDisabled\"\r\n                                  (click)=\"addRemoveWatchList()\"\r\n                                  title=\"Remove from Watchlist\"\r\n                                  >\r\n                                  <!--  <img src=\"assets/images/icons/watchlist.svg\" class=\"ico-set\"> -->\r\n                                  <span class=\"added-watchlist\">\r\n                                    {{ scripData?.ProfileId }}\r\n                                  </span>\r\n                                </button>\r\n                              }\r\n                              @if (!isAdded) {\r\n                                <div\r\n                                  dropdown\r\n                                  class=\"padding-0 position-relative\"\r\n                                  title=\"Add to Watchlist\"\r\n                                  >\r\n                                  @if (!isAdded) {\r\n                                    <button\r\n                                      class=\"btn-sets m-r-18\"\r\n                                      title=\"Add Watchlist\"\r\n                                      dropdown-open\r\n                                      (click)=\"openPreLogin()\"\r\n                                      [disabled]=\"isButtonDisabled\"\r\n                                      >\r\n                                      <!-- <img src=\"assets/images/icons/watchlist.svg\" class=\"ico-set\"> -->\r\n                                      <svg\r\n                                        xmlns=\"http://www.w3.org/2000/svg\"\r\n                                        id=\"watchlist\"\r\n                                        width=\"18.716\"\r\n                                        height=\"17.244\"\r\n                                        viewBox=\"0 0 18.716 17.244\"\r\n                                        >\r\n                                        <g\r\n                                          id=\"watchlist-2\"\r\n                                          data-name=\"watchlist\"\r\n                                          transform=\"translate(-10365.284 -14323.498)\"\r\n                                          fill=\"none\"\r\n                                          stroke-linecap=\"round\"\r\n                                          >\r\n                                          <path\r\n                                            d=\"M10374.717,14327l4.643-3.5,4.641,3.5v5.71l-9.283,8.032-9.433-8.032V14327l4.716-3.5Z\"\r\n                                            stroke=\"none\"\r\n                                            />\r\n                                            <path\r\n                                              d=\"M 10370 14325.3662109375 L 10366.7841796875 14327.7548828125 L 10366.7841796875 14332.017578125 L 10374.708984375 14338.765625 L 10382.5 14332.0244140625 L 10382.5 14327.7470703125 L 10379.359375 14325.376953125 L 10374.7236328125 14328.873046875 L 10370 14325.3662109375 M 10370 14323.498046875 L 10374.716796875 14327 L 10379.359375 14323.498046875 L 10384 14327 L 10384 14332.7099609375 L 10374.716796875 14340.7421875 L 10365.2841796875 14332.7099609375 L 10365.2841796875 14327 L 10370 14323.498046875 Z\"\r\n                                              stroke=\"none\"\r\n                                              fill=\"#1B1464\"\r\n                                              />\r\n                                            </g>\r\n                                          </svg>\r\n                                        </button>\r\n                                      }\r\n                                      @if (shared?.userId && shared?.userId != 'guest') {\r\n                                        <ul\r\n                                          class=\"dropdown-menu\"\r\n                                          role=\"menu\"\r\n                                          >\r\n                                          <li (click)=\"addRemoveWatchList(1)\">\r\n                                            <a class=\"animate\">{{\r\n                                              watchlistNames[1] && watchlistNames[1] != 1\r\n                                              ? watchlistNames[1] + \"(1)\"\r\n                                              : \"Watchlist 1\"\r\n                                            }}</a>\r\n                                          </li>\r\n                                          <li (click)=\"addRemoveWatchList(2)\">\r\n                                            <a class=\"animate\">{{\r\n                                              watchlistNames[2] && watchlistNames[2] != 2\r\n                                              ? watchlistNames[2] + \"(2)\"\r\n                                              : \"Watchlist 2\"\r\n                                            }}</a>\r\n                                          </li>\r\n                                          <li (click)=\"addRemoveWatchList(3)\">\r\n                                            <a class=\"animate\">{{\r\n                                              watchlistNames[3] && watchlistNames[3] != 3\r\n                                              ? watchlistNames[3] + \"(3)\"\r\n                                              : \"Watchlist 3\"\r\n                                            }}</a>\r\n                                          </li>\r\n                                          <li (click)=\"addRemoveWatchList(4)\">\r\n                                            <a class=\"animate\">{{\r\n                                              watchlistNames[4] && watchlistNames[4] != 4\r\n                                              ? watchlistNames[4] + \"(4)\"\r\n                                              : \"Watchlist 4\"\r\n                                            }}</a>\r\n                                          </li>\r\n                                          <li (click)=\"addRemoveWatchList(5)\">\r\n                                            <a class=\"animate\">{{\r\n                                              watchlistNames[5] && watchlistNames[5] != 5\r\n                                              ? watchlistNames[5] + \"(5)\"\r\n                                              : \"Watchlist 5\"\r\n                                            }}</a>\r\n                                          </li>\r\n                                        </ul>\r\n                                      }\r\n                                    </div>\r\n                                  }\r\n                                  <button\r\n                                    class=\"btn-sets\"\r\n                                    title=\"Set Alert\"\r\n                                    (click)=\"addPriceAlert()\"\r\n                                    title=\"Set Alert\"\r\n                                    >\r\n                                    <!-- <img src=\"assets/images/icons/price-alert.svg\" class=\"ico-set\"> -->\r\n                                    <svg\r\n                                      xmlns=\"http://www.w3.org/2000/svg\"\r\n                                      id=\"price_alert\"\r\n                                      data-name=\"price alert\"\r\n                                      width=\"19\"\r\n                                      height=\"19\"\r\n                                      viewBox=\"0 0 19 19\"\r\n                                      class=\"ico-set\"\r\n                                      >\r\n                                      <path\r\n                                        id=\"Path_59583\"\r\n                                        data-name=\"Path 59583\"\r\n                                        d=\"M0,0H19V19H0Z\"\r\n                                        fill=\"none\"\r\n                                        />\r\n                                        <path\r\n                                          id=\"Path_59584\"\r\n                                          data-name=\"Path 59584\"\r\n                                          d=\"M8.75,4.583a1.583,1.583,0,1,1,3.167,0,5.542,5.542,0,0,1,3.167,4.75v2.375a3.167,3.167,0,0,0,1.583,2.375H4a3.167,3.167,0,0,0,1.583-2.375V9.333A5.542,5.542,0,0,1,8.75,4.583\"\r\n                                          transform=\"translate(-0.833 -0.625)\"\r\n                                          fill=\"none\"\r\n                                          stroke=\"#1B1464\"\r\n                                          stroke-linecap=\"round\"\r\n                                          stroke-linejoin=\"round\"\r\n                                          stroke-width=\"1.5\"\r\n                                          />\r\n                                          <path\r\n                                            id=\"Path_59585\"\r\n                                            data-name=\"Path 59585\"\r\n                                            d=\"M9,17v.792a2.375,2.375,0,0,0,4.75,0V17\"\r\n                                            transform=\"translate(-1.875 -3.542)\"\r\n                                            fill=\"none\"\r\n                                            stroke=\"#1B1464\"\r\n                                            stroke-linecap=\"round\"\r\n                                            stroke-linejoin=\"round\"\r\n                                            stroke-width=\"1.5\"\r\n                                            />\r\n                                            <path\r\n                                              id=\"Path_59586\"\r\n                                              data-name=\"Path 59586\"\r\n                                              d=\"M20.418,5.951A8.748,8.748,0,0,0,18.206,3\"\r\n                                              transform=\"translate(-3.793 -0.625)\"\r\n                                              fill=\"none\"\r\n                                              stroke=\"#1B1464\"\r\n                                              stroke-linecap=\"round\"\r\n                                              stroke-linejoin=\"round\"\r\n                                              stroke-width=\"1.5\"\r\n                                              />\r\n                                              <path\r\n                                                id=\"Path_59587\"\r\n                                                data-name=\"Path 59587\"\r\n                                                d=\"M3,5.951A8.748,8.748,0,0,1,5.21,3\"\r\n                                                transform=\"translate(-0.625 -0.625)\"\r\n                                                fill=\"none\"\r\n                                                stroke=\"#1B1464\"\r\n                                                stroke-linecap=\"round\"\r\n                                                stroke-linejoin=\"round\"\r\n                                                stroke-width=\"1.5\"\r\n                                                />\r\n                                              </svg>\r\n                                            </button>\r\n                                          </div>\r\n                                        </div>\r\n                                          <div\r\n                                            class=\"ohlc-container col-sm-12 padding-0 col-md-12 col-lg-12 d-flex flex-row justify-content-evenly\"\r\n                                            style=\"display: flex\"\r\n                                            >\r\n                                            <div class=\"border-right-none\">\r\n                                              <div class=\"text-left padding-0 line-height-css\">\r\n                                                <span class=\"font14 text-gray Roboto\">Open</span><br />\r\n                                                <span class=\"text-black bold font14 Roboto\">{{\r\n                                                  indicesData?.open | value : \"1.2-2\"\r\n                                                }}</span>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"border-right-none\">\r\n                                              <div class=\"text-left padding-0 line-height-css\">\r\n                                                <span class=\"font14 text-gray Roboto\">High</span><br />\r\n                                                <span class=\"text-black bold font14 Roboto\">{{\r\n                                                  indicesData?.high | value : \"1.2-2\"\r\n                                                }}</span>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"border-right-none\">\r\n                                              <div class=\"text-left padding-0 line-height-css\">\r\n                                                <span class=\"font14 text-gray Roboto\">Low</span><br />\r\n                                                <span class=\"text-black bold font14 Roboto\">{{\r\n                                                  indicesData?.low | value : \"1.2-2\"\r\n                                                }}</span>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"border-right-none\">\r\n                                              <div class=\"text-left padding-0 line-height-css\">\r\n                                                <span class=\"font14 text-gray Roboto\">Prev. Close</span\r\n                                                  ><br />\r\n                                                  <span class=\"text-black bold font14 Roboto\">{{\r\n                                                    indicesData?.close || 0 | value : \"1.2-2\"\r\n                                                  }}</span>\r\n                                                </div>\r\n                                              </div>\r\n                                            </div>\r\n                                          </div>\r\n                                          <!--   <div class=\"ohlc-container col-sm-4 padding-0 col-md-12 col-lg-4 d-flex flex-row justify-content-evenly\"\r\n                                          style=\"display: flex;\">\r\n                                          <div class=\"border-right-none\">\r\n                                            <div class=\"text-left padding-0 line-height-css\">\r\n                                              <span class=\"font14 text-gray Roboto\">Open</span><br>\r\n                                              <span class=\"text-black bold font14 Roboto\">{{indicesData?.open ||\r\n                                              indicesData?.close | value:'1.2-2'}}</span>\r\n                                            </div>\r\n                                          </div>\r\n                                          <div class=\"border-right-none\">\r\n                                            <div class=\"text-left padding-0 line-height-css\">\r\n                                              <span class=\"font14 text-gray Roboto\">High</span><br>\r\n                                              <span class=\"text-black bold font14 Roboto\">{{indicesData?.high ||\r\n                                              indicesData?.close | value:'1.2-2'}}</span>\r\n                                            </div>\r\n                                          </div>\r\n                                          <div class=\"border-right-none\">\r\n                                            <div class=\"text-left padding-0 line-height-css\">\r\n                                              <span class=\"font14 text-gray Roboto\">Low</span><br>\r\n                                              <span class=\"text-black bold font14 Roboto\">{{indicesData?.low ||\r\n                                              indicesData?.close | value:'1.2-2'}}</span>\r\n                                            </div>\r\n                                          </div>\r\n                                          <div class=\"border-right-none\">\r\n                                            <div class=\"text-left padding-0 line-height-css\">\r\n                                              <span class=\"font14 text-gray Roboto\">Prev. Close</span><br>\r\n                                              <span class=\"text-black bold font14 Roboto\">{{indicesData?.close ||\r\n                                              0 | value:'1.2-2'}}</span>\r\n                                            </div>\r\n                                          </div>\r\n                                        </div> -->\r\n                                        <!--     <div class=\"col-sm-3 padding-0 col-md-12 col-lg-3\">\r\n                                        <div class=\"key-info\">\r\n                                          <div class=\"clearfix add-remove-section\">\r\n                                            <div *ngIf=\"!isAdded\" dropdown class=\"padding-0 clearfix \">\r\n                                              <button dropdown-open class=\"btn add pull-right\" title=\"Add to Watchlist\" (click)=\"openPreLogin()\"\r\n                                                [disabled]=\"isButtonDisabled\">\r\n                                                <i class=\"icon-Watchlist\"></i>\r\n                                              </button>\r\n                                              <ul class=\"dropdown-menu\" role=\"menu\" *ngIf=\"shared.userId && shared.userId!='guest'\">\r\n                                                <li (click)=\"addRemoveWatchList(1)\"><a class=\"animate\">{{watchlistNames[1] &&\r\n                                                watchlistNames[1]!=1?watchlistNames[1]+'(1)':'Watchlist 1'}}</a></li>\r\n                                                <li (click)=\"addRemoveWatchList(2)\"><a class=\"animate\">{{watchlistNames[2] &&\r\n                                                watchlistNames[2]!=2?watchlistNames[2]+'(2)':'Watchlist 2'}}</a></li>\r\n                                                <li (click)=\"addRemoveWatchList(3)\"><a class=\"animate\">{{watchlistNames[3] &&\r\n                                                watchlistNames[3]!=3?watchlistNames[3]+'(3)':'Watchlist 3'}}</a></li>\r\n                                                <li (click)=\"addRemoveWatchList(4)\"><a class=\"animate\">{{watchlistNames[4] &&\r\n                                                watchlistNames[4]!=4?watchlistNames[4]+'(4)':'Watchlist 4'}}</a></li>\r\n                                                <li (click)=\"addRemoveWatchList(5)\"><a class=\"animate\">{{watchlistNames[5] &&\r\n                                                watchlistNames[5]!=5?watchlistNames[5]+'(5)':'Watchlist 5'}}</a></li>\r\n                                              </ul>\r\n                                            </div>\r\n                                            <button *ngIf=\"isAdded\" [disabled]=\"isButtonDisabled\" class=\"btn-gradient pull-right btn add-remove\"\r\n                                              (click)=\"addRemoveWatchList()\" [class.bg-green]=\"isAdded\" title=\"Remove from Watchlist\">\r\n                                              <span>{{scripData?.ProfileId}}</span>\r\n                                            </button>\r\n                                            <button class=\" btn add pull-right\" title=\"Set Alert\" (click)=\"addPriceAlert()\"\r\n                                              [disabled]=\"isButtonDisabled\" style=\"margin-left:15px;\">\r\n                                              <i aria-hidden=\"true\" class=\"fa icon-Price-alert\"></i>\r\n                                            </button>\r\n                                          </div>\r\n                                        </div>\r\n                                      </div> -->\r\n                                      <!-- show option chain (29/04/2021) -->\r\n                                      <!--    <div class=\"col-xs-12 text-right clearfix\"\r\n                                      *ngIf=\"(indicesData?.SegmentId != 3 && indicesData?.SegmentId != 6 && indicesData?.SegmentId != 8 && indicesData?.SegmentId != 14)\">\r\n                                      <button (click)=\"openOptionChain()\" class=\"popup-btn\">\r\n                                        <span class=\"info-icon\">i</span>\r\n                                        Option Chain\r\n                                      </button>\r\n                                    </div> -->\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"clearfix\"></div>\r\n                              <div class=\"row padding-0\">\r\n                                <div class=\"col-md-12 col-sm-12\">\r\n                                  @if (!gettingScriptDetail) {\r\n                                    <app-chartiq-simple\r\n                                      [segmentId]=\"indicesData?.SegmentId\"\r\n                                      [token]=\"indicesData?.Token\"\r\n                                      [scripDescRev]=\"indicesData?.secDesc\"\r\n                                      [scripName]=\"indicesData?.secDesc\"\r\n                                      [b5Data]=\"b5Data\"\r\n                                    ></app-chartiq-simple>\r\n                                  }\r\n                                  @if (gettingScriptDetail) {\r\n                                    <div class=\"chart-loading\">\r\n                                      <img class=\"loader\" src=\"assets/images/loader.gif\" />\r\n                                    </div>\r\n                                  }\r\n                                </div>\r\n                                <!-- <div class=\"col-lg-5 col-md-12 col-sm-12\" *ngIf=\"indicesData?.SegmentId!=6 && indicesData?.SegmentId!=8 && indicesData?.SegmentId!=14\">\r\n                                <app-pivot [scripInfo]=\"indicesData\"></app-pivot>\r\n                              </div> -->\r\n                            </div>\r\n                            <div class=\"row padding-0\">\r\n                              @if (\r\n                                indicesData?.SegmentId != 6 &&\r\n                                indicesData?.SegmentId != 8 &&\r\n                                indicesData?.SegmentId != 14\r\n                                ) {\r\n                                <div\r\n                                  class=\"col-md-12 col-sm-12 pr-0 col-lg-6\"\r\n                                  >\r\n                                  <app-advance-decline\r\n                                    [scripInfo]=\"indicesData\"\r\n                                    [secName]=\"indicesData?.secDesc\"\r\n                                  ></app-advance-decline>\r\n                                </div>\r\n                              }\r\n                              <div class=\"col-lg-6 col-md-12 col-sm-12\">\r\n                                <app-pivot [scripInfo]=\"indicesData\"></app-pivot>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"clearfix\"></div>\r\n                            @if (\r\n                              (indicesData?.SegmentId == 1 || indicesData?.SegmentId == 3) &&\r\n                              indexdetail?.length\r\n                              ) {\r\n                              <div\r\n                                >\r\n                                <h4 class=\"heading\">Stocks Comprising {{ indicesData?.secDesc }}</h4>\r\n                                <div class=\"card\">\r\n                                  <div class=\"card-block\">\r\n                                    <div class=\"table-responsive table-custom\">\r\n                                      <!-- <table class=\"table table-striped\">\r\n                                      <thead>\r\n                                        <tr>\r\n                                          <th width=\"25%\">Company</th>\r\n                                          <th width=\"10%\">Price</th>\r\n                                          <th width=\"20%\">MKT CAP</th>\r\n                                          <th width=\"10%\">PE</th> -->\r\n                                          <!-- <th width=\"5%\">P/R</th> -->\r\n                                          <!-- <th width=\"10%\">EPS</th>\r\n                                          <th width=\"10%\">EPS dilute</th>\r\n                                          <th width=\"15%\">Shares</th>\r\n                                        </tr>\r\n                                      </thead>\r\n                                      <tbody>\r\n                                        <tr *ngFor=\"let item of indexdetail\">\r\n                                          <td (click)=\"gotoCompanyPage(item)\" width=\"25%\"><a>{{item.SecDesc}}</a></td>\r\n                                          <td width=\"10%\">{{item.Price/item.PriceDivisor || 0 | segment : segmentId}}</td>\r\n                                          <td width=\"20%\">{{(((item.Price/item.PriceDivisor)*item.NoOfShares || 0)) | condense:'1.0-0'}}</td>\r\n                                          <td width=\"10%\">{{item.PE || 0 | value:'1.1-1'}}</td> -->\r\n                                          <!-- <td width=\"5%\">0</td> -->\r\n                                          <!-- <td width=\"10%\" class=\"text-green\">{{item.EPS || 0 | segment : segmentId}}</td>\r\n                                          <td width=\"10%\" class=\"text-green\">{{item.EPSDilute || 0 | segment : segmentId}}</td>\r\n                                          <td width=\"15%\" class=\"text-green\">{{item.NoOfShares || 0 | condense}}</td>\r\n                                        </tr>\r\n                                        <tr *ngIf=\"indexdetail.length == 0\">\r\n                                          <td class=\"nodata\">No Data Available </td>\r\n                                        </tr>\r\n                                      </tbody>\r\n                                    </table> -->\r\n                                    <!-- Data table logic (08/02/2021) -->\r\n                                    @if (indexdetail?.length) {\r\n                                      <ngx-datatable\r\n                                        class=\"material clearfix\"\r\n                                        [cssClasses]=\"cssClasses\"\r\n                                        [columnMode]=\"'force'\"\r\n                                        [rows]=\"indexdetail\"\r\n                                        [footerHeight]=\"50\"\r\n                                        [limit]=\"10\"\r\n                                        [sorts]=\"sorts\"\r\n                                        [reorderable]=\"false\"\r\n                                        [headerHeight]=\"'auto'\"\r\n                                        [scrollbarH]=\"true\"\r\n                                        [rowHeight]=\"'auto'\"\r\n                                        >\r\n                                        <ngx-datatable-column\r\n                                          [width]=\"180\"\r\n                                          name=\"Company\"\r\n                                          prop=\"SecDesc\"\r\n                                          >\r\n                                          <ng-template\r\n                                            let-row=\"row\"\r\n                                            let-value=\"value\"\r\n                                            ngx-datatable-cell-template\r\n                                            >\r\n                                            <div class=\"text-left\">\r\n                                              <a (click)=\"gotoCompanyPage(row)\">{{ row?.SecDesc }}</a>\r\n                                            </div>\r\n                                          </ng-template>\r\n                                        </ngx-datatable-column>\r\n                                        <ngx-datatable-column [width]=\"50\" prop=\"Price\" name=\"Price\">\r\n                                          <ng-template\r\n                                            ngx-datatable-cell-template\r\n                                            let-row=\"row\"\r\n                                            let-value=\"value\"\r\n                                            >\r\n                                            <div class=\"text-right\">\r\n                                              {{\r\n                                              row?.Price / row?.PriceDivisor\r\n                                              ? (row?.Price / row?.PriceDivisor\r\n                                              | segment : segmentId)\r\n                                              : \"-\"\r\n                                              }}\r\n                                            </div>\r\n                                          </ng-template>\r\n                                        </ngx-datatable-column>\r\n                                        <ngx-datatable-column [width]=\"50\" prop=\"MktCap\" name=\"MKT CAP\">\r\n                                          <ng-template\r\n                                            ngx-datatable-cell-template\r\n                                            let-row=\"row\"\r\n                                            let-value=\"value\"\r\n                                            >\r\n                                            <div class=\"text-right\">\r\n                                              {{\r\n                                              row?.MktCap ? (row?.MktCap | condense : \"1.0-0\") : \"-\"\r\n                                              }}\r\n                                            </div>\r\n                                          </ng-template>\r\n                                        </ngx-datatable-column>\r\n                                        <!-- <ngx-datatable-column [width]=\"50\" prop=\"PE\" name=\"PE\">\r\n                                        <ng-template ngx-datatable-cell-template let-row=\"row\" let-value=\"value\">\r\n                                          <div class=\"text-right\">{{(row?.PE) ? (row?.PE| value:'1.1-1') : '-'}}</div>\r\n                                        </ng-template>\r\n                                      </ngx-datatable-column>\r\n                                      <ngx-datatable-column [width]=\"50\" prop=\"EPS\" name=\"EPS\">\r\n                                        <ng-template ngx-datatable-cell-template let-row=\"row\" let-value=\"value\">\r\n                                          <div class=\"text-right text-green\">{{(row?.EPS) ? (row?.EPS| segment : segmentId) : '-'}}</div>\r\n                                        </ng-template>\r\n                                      </ngx-datatable-column>\r\n                                      <ngx-datatable-column [width]=\"60\" prop=\"EPSDilute\" name=\"EPS dilute\">\r\n                                        <ng-template ngx-datatable-cell-template let-row=\"row\" let-value=\"value\">\r\n                                          <div class=\"text-right text-green\">{{(row?.EPSDilute) ? (row?.EPSDilute | segment : segmentId) :\r\n                                          '-'}}</div>\r\n                                        </ng-template>\r\n                                      </ngx-datatable-column> -->\r\n                                      <ngx-datatable-column\r\n                                        [width]=\"50\"\r\n                                        prop=\"NoOfShares\"\r\n                                        name=\"Shares\"\r\n                                        >\r\n                                        <ng-template\r\n                                          ngx-datatable-cell-template\r\n                                          let-row=\"row\"\r\n                                          let-value=\"value\"\r\n                                          >\r\n                                          <div class=\"text-right text-green\">\r\n                                            {{ row?.NoOfShares ? (row?.NoOfShares | condense) : \"-\" }}\r\n                                          </div>\r\n                                        </ng-template>\r\n                                      </ngx-datatable-column>\r\n                                    </ngx-datatable>\r\n                                  }\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        }\r\n                      </div>\r\n                    </div>\r\n                  </section>\r\n                }\r\n\r\n\r\n\r\n                @if (showPreLogin) {\r\n                  <div class=\"dialog\">\r\n                    <div class=\"dialog-content\">\r\n                      <div class=\"dialog-header clearfix\">\r\n                        <div class=\"col-md-12\">\r\n                          <h4 class=\"popup-title\">\r\n                            Oops,Looks like you are not logged in. Please Login for Moving\r\n                            further.\r\n                          </h4>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"dialog-footer clearfix\">\r\n                        <button class=\"btn sell\" (click)=\"closePreLogin()\">Close</button>\r\n                        <button class=\"btn buy\" [showFocus]=\"showPreLogin\" (click)=\"login()\">\r\n                          Login\r\n                        </button>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                }\r\n\r\n\r\n\r\n                @if (showPreLoginModal) {\r\n                  <div class=\"dialog backdrop-filter-blur\">\r\n                    <div class=\"dialog-content\">\r\n                      <div class=\"dialog-header clearfix\">\r\n                        <div class=\"col-md-12\">\r\n                          <h4 class=\"popup-title\">Please login to check MCX scrips.</h4>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"dialog-footer clearfix\">\r\n                        <button class=\"btn sell\" (click)=\"closePreLoginModal()\">Close</button>\r\n                        <button class=\"btn buy\" [showFocus]=\"showPreLoginModal\" (click)=\"login()\">\r\n                          Login\r\n                        </button>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                }\r\n\r\n";

/***/ }),

/***/ 57161:
/*!********************************************************************************!*\
  !*** ./src/app/company-module/fut-option/fut-option.component.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "@if (instrument!='Future') {\r\n  <div class=\"optfutwrap card\">\r\n    <div class=\" optionfuture\">\r\n      <form class=\"row\" [formGroup]=\"optionFutureFilterForm\">\r\n        <!-- <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-6\">\r\n        <label class=\"custom-select\">\r\n          <select id=\"categories\" class=\"form-control\" formControlName=\"instrument\" [(ngModel)]=\"instrument\"  (change) = \"onInstrumentchange()\">\r\n            <option disabled >Select Instrument</option>\r\n            <option value=\"Future\">Future</option>\r\n            <option value=\"Options\">Options</option>\r\n          </select>\r\n        </label>\r\n      </div>\r\n      <div *ngIf=\"scripInfo?.OT == 'XX' \" class=\"col-lg-3 col-md-3 col-sm-3 col-xs-6\">\r\n        <label class=\"custom-select\">\r\n          <select id=\"categories\" class=\"form-control\" formControlName=\"futExpiryDate\" [(ngModel)]=\"futExpiryDate\">\r\n            <option value='' >Select Expiry Date</option>\r\n            <option *ngFor=\"let item of futureExpiryArray\" value=\"{{item}}\">{{item}}</option>\r\n          </select>\r\n        </label>\r\n      </div>\r\n      <div *ngIf=\"scripInfo?.OT == 'CE' || scripInfo?.OT == 'PE' \" class=\"col-lg-3 col-md-3 col-sm-3 col-xs-6\">\r\n        <label class=\"custom-select\">\r\n          <select id=\"categories\" class=\"form-control\" formControlName=\"optionType\" [(ngModel)]=\"optionType\" (change)=\"onOptionChange()\">\r\n            <option value=''>Select Option Type</option>\r\n            <option *ngFor=\"let item of optionTypeArray\"  value=\"{{item}}\">{{item}}</option>\r\n          </select>\r\n        </label>\r\n      </div>\r\n      <div *ngIf=\"scripInfo?.OT == 'CE' || scripInfo?.OT == 'PE' \" class=\"col-lg-3 col-md-3 col-sm-3 col-xs-6\">\r\n        <label class=\"custom-select\">\r\n          <select id=\"categories\" class=\"form-control\" formControlName=\"optExpiryDate\" [(ngModel)]=\"optExpiryDate\" (change)=\"onOptionExpiryChange()\">\r\n            <option value='' >Select Expiry Date</option>\r\n            <option *ngFor=\"let item of optionExpiryArray\" value=\"{{item}}\">{{item}}</option>\r\n          </select>\r\n        </label>\r\n      </div>\r\n      <div *ngIf=\"scripInfo?.OT == 'CE' || scripInfo?.OT == 'PE' \" class=\"col-lg-3 col-md-3 col-sm-3 col-xs-6\">\r\n        <label class=\"custom-select\">\r\n          <select id=\"categories\" class=\"form-control\" formControlName=\"strikePrice\"  [(ngModel)]=\"strikePrice\">\r\n            <option value=''>Select Strike Price</option>\r\n            <option *ngFor=\"let item of strikePriceArray\" value=\"{{item}}\">{{(item/scripInfo.PriceDivisor) | segment : scripInfo?.SegmentId}}</option>\r\n          </select>\r\n        </label>\r\n      </div> -->\r\n      <div class=\"col-lg-2 col-md-3 col-sm-3 col-xs-6\">\r\n        <div class=\"custom-select-completer\">\r\n          <span class=\"custom-select btn btn-secondary form-control ui-select-toggle\"\r\n            (click)=\"selectCompleterDropDownFocus(0, searchInput, instrumentIndex, $event)\">{{instrument ?\r\n          instrument : 'Select Instrument'}}</span>\r\n          <div class=\"completer-wrapper\" [hidden]=\"!showHideArray[0]\">\r\n            <input type=\"hidden\" formControlName=\"instrument\" [(ngModel)]=\"instrument\">\r\n            <input type=\"text\" class=\"form-control\" #searchInput\r\n              (keyup)=\"selectCompleterKeyupFilter($event, 0, instrumentIndex, instrumentArray, searchInput)\"\r\n              (focusout)=\"selectCompleterDropDownFocusOut(0, searchInput)\">\r\n              <ul class=\"list-wrapper\">\r\n                @for (item of instrumentArray; track item; let index = $index) {\r\n                  <li\r\n                    [ngClass]=\"{'active':index == instrumentIndex}\"\r\n                    (click)=\"selectCompleterSelectFromDropdown(0, index, item)\" class=\"class-{{index}}\">\r\n                  {{item}}</li>\r\n                }\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        @if (scripInfo?.OT == 'XX' ) {\r\n          <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-6\">\r\n            <div class=\"custom-select-completer\">\r\n              <span class=\"custom-select btn btn-secondary form-control ui-select-toggle\"\r\n                (click)=\"selectCompleterDropDownFocus(1, searchInput, futExpiryDateIndex, $event)\">{{futExpiryDate\r\n              ? futExpiryDate : 'Select Expiry Date'}}</span>\r\n              <div class=\"completer-wrapper\" [hidden]=\"!showHideArray[1]\">\r\n                <input type=\"hidden\" formControlName=\"futExpiryDate\" [(ngModel)]=\"futExpiryDate\">\r\n                <input type=\"text\" class=\"form-control\" #searchInput\r\n                  (keyup)=\"selectCompleterKeyupFilter($event, 1, futExpiryDateIndex, futureExpiryArray, searchInput)\"\r\n                  (focusout)=\"selectCompleterDropDownFocusOut(1, searchInput)\">\r\n                  <ul class=\"list-wrapper\">\r\n                    @for (item of futureExpiryArray; track item; let index = $index) {\r\n                      <li\r\n                        [ngClass]=\"{'active':index == futExpiryDateIndex}\"\r\n                        (click)=\"selectCompleterSelectFromDropdown(1, index, item)\" class=\"class-{{index}}\">\r\n                      {{item}}</li>\r\n                    }\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          }\r\n          @if (scripInfo?.OT == 'CE' || scripInfo?.OT == 'PE' ) {\r\n            <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-6\">\r\n              <div class=\"custom-select-completer\">\r\n                <span class=\"custom-select btn btn-secondary form-control ui-select-toggle\"\r\n                  (click)=\"selectCompleterDropDownFocus(2, searchInput, optionTypeIndex, $event)\">{{optionType ?\r\n                optionType : 'Select Option Type'}}</span>\r\n                <div class=\"completer-wrapper\" [hidden]=\"!showHideArray[2]\">\r\n                  <input type=\"hidden\" formControlName=\"optionType\" [(ngModel)]=\"optionType\">\r\n                  <input type=\"text\" class=\"form-control\" #searchInput\r\n                    (keyup)=\"selectCompleterKeyupFilter($event, 2, optionTypeIndex, optionTypeArray, searchInput)\"\r\n                    (focusout)=\"selectCompleterDropDownFocusOut(2, searchInput)\">\r\n                    <ul class=\"list-wrapper\">\r\n                      @for (item of optionTypeArray; track item; let index = $index) {\r\n                        <li\r\n                          [ngClass]=\"{'active':index === optionTypeIndex}\"\r\n                          (click)=\"selectCompleterSelectFromDropdown(2, index, item)\" class=\"class-{{index}}\">\r\n                        {{item}}</li>\r\n                      }\r\n                    </ul>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            }\r\n            @if (scripInfo?.OT == 'CE' || scripInfo?.OT == 'PE' ) {\r\n              <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-6\">\r\n                <div class=\"custom-select-completer\">\r\n                  <span class=\"custom-select btn btn-secondary form-control ui-select-toggle\"\r\n                    (click)=\"selectCompleterDropDownFocus(3, searchInput, optExpiryDateIndex, $event)\">{{optExpiryDate\r\n                  ? optExpiryDate : 'Select Expiry Date'}}</span>\r\n                  <div class=\"completer-wrapper\" [hidden]=\"!showHideArray[3]\">\r\n                    <input type=\"hidden\" formControlName=\"optExpiryDate\" [(ngModel)]=\"optExpiryDate\">\r\n                    <input type=\"text\" class=\"form-control\" #searchInput\r\n                      (keyup)=\"selectCompleterKeyupFilter($event, 3, optExpiryDateIndex, optionExpiryArray, searchInput)\"\r\n                      (focusout)=\"selectCompleterDropDownFocusOut(3, searchInput)\">\r\n                      <ul class=\"list-wrapper\">\r\n                        @for (item of optionExpiryArray; track item; let index = $index) {\r\n                          <li\r\n                            [ngClass]=\"{'active':index === optExpiryDateIndex}\"\r\n                            (click)=\"selectCompleterSelectFromDropdown(3, index, item)\" class=\"class-{{index}}\">\r\n                          {{item}}</li>\r\n                        }\r\n                      </ul>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              }\r\n              @if (scripInfo?.OT == 'CE' || scripInfo?.OT == 'PE' ) {\r\n                <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-6\">\r\n                  <div class=\"custom-select-completer\">\r\n                    <span class=\"custom-select btn btn-secondary form-control ui-select-toggle\"\r\n                      (click)=\"selectCompleterDropDownFocus(4, searchInput, strikePriceIndex, $event)\">{{strikePrice ?\r\n                      ((strikePrice/scripInfo.PriceDivisor) | segment : scripInfo?.SegmentId) : 'Select Strike\r\n                    Price'}}</span>\r\n                    <div class=\"completer-wrapper\" [hidden]=\"!showHideArray[4]\">\r\n                      <input type=\"hidden\" formControlName=\"strikePrice\" [(ngModel)]=\"strikePrice\">\r\n                      <input type=\"text\" class=\"form-control\" #searchInput\r\n                        (keyup)=\"selectCompleterKeyupFilter($event, 4, strikePriceIndex, strikePriceArray, searchInput)\"\r\n                        (focusout)=\"selectCompleterDropDownFocusOut(4, searchInput)\">\r\n                        <ul class=\"list-wrapper\">\r\n                          @for (item of strikePriceArray; track item; let index = $index) {\r\n                            <li [attr.value]=\"item\"\r\n                              [class.active]=\"index === strikePriceIndex\"\r\n                              (click)=\"selectCompleterSelectFromDropdown(4, index, item)\" class=\"class-{{index}}\">\r\n                            {{(item/scripInfo.PriceDivisor) | segment : scripInfo?.SegmentId}}</li>\r\n                          }\r\n                        </ul>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                }\r\n                <div class=\"col-lg-1 col-md-3 col-sm-3 col-xs-12\">\r\n                  <button (click)=\"onSubmit()\" scrollTo scrollTargetSelector=\"#overview\" class=\"btn btn-gradient\"\r\n                  [disabled]=\"!optionFutureFilterForm.valid\">GO</button>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        }";

/***/ }),

/***/ 38695:
/*!****************************************************************************!*\
  !*** ./src/app/company-module/key-info/key-info.component.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"card flex-ht\">\r\n  <div class=\"company-block key-info-block\">\r\n    <h4 class=\"page-title text-uppercase\">\r\n      Key Info<small class=\"text-green sm-b\">\r\n      ({{ scripInfo?.ExchangeSegment }})</small\r\n      >\r\n    </h4>\r\n    <div class=\"parentHorizontalTab\">\r\n      <div class=\"resp-tabs-container hor_1\">\r\n        <div class=\"key-info\">\r\n          <!-- <div>\r\n          <div class=\"col-md-12 text-left padding-0\">\r\n            <span class=\"font14 text-gray Roboto\">Open</span>\r\n            <span class=\"text-black bold font14 Roboto\">{{keyInfoData?.openPrice ||\r\n            0 | segment:keyInfoData?.SegmentId}}</span>\r\n          </div>\r\n        </div>\r\n\r\n        <div>\r\n          <div class=\"col-md-12 text-left padding-0\">\r\n            <span class=\"font14 text-gray Roboto\">Low</span>\r\n            <span class=\"text-black bold font14 Roboto\">{{keyInfoData?.low ||\r\n            0 | segment:keyInfoData?.SegmentId}}</span>\r\n          </div>\r\n        </div>\r\n\r\n        <div>\r\n          <div class=\"col-md-12 text-left padding-0\">\r\n            <span class=\"font14 text-gray Roboto\">High</span>\r\n            <span class=\"text-black bold font14 Roboto\">{{keyInfoData?.high ||\r\n            0 | segment:keyInfoData?.SegmentId}}</span>\r\n          </div>\r\n        </div>\r\n\r\n        <div>\r\n          <div class=\"col-md-12 text-left padding-0\">\r\n            <span class=\"font14 text-gray Roboto\">Prev. Close</span>\r\n            <span class=\"text-black bold font14 Roboto\">{{keyInfoData?.closePrice ||\r\n            0 | segment:keyInfoData?.SegmentId}}</span>\r\n          </div>\r\n        </div> -->\r\n        @if (\r\n          (shared?.userId && shared.userId != 'guest') ||\r\n          (!keyInfoData?.isContractInfo &&\r\n          (!shared?.userId || shared.userId == 'guest'))\r\n          ) {\r\n          <div\r\n            >\r\n            <div class=\"col-md-12 text-left padding-0\">\r\n              <span class=\"font14 text-gray Roboto\">{{\r\n                keyInfoData?.isContractInfo\r\n                ? \"All Time High\"\r\n                : \"52 Wk\r\n                High\"\r\n              }}</span>\r\n              <span class=\"text-black bold font14 Roboto\">{{\r\n                keyInfoData?.wKHigh\r\n                ? (keyInfoData?.wKHigh | segment : keyInfoData?.SegmentId)\r\n                : \"NA\"\r\n              }}</span>\r\n            </div>\r\n          </div>\r\n        }\r\n        @if (\r\n          (shared?.userId && shared.userId != 'guest') ||\r\n          (!keyInfoData?.isContractInfo &&\r\n          (!shared?.userId || shared.userId == 'guest'))\r\n          ) {\r\n          <div\r\n            >\r\n            <div class=\"col-md-12 text-left padding-0\">\r\n              <span class=\"font14 text-gray Roboto\">{{\r\n                keyInfoData?.isContractInfo ? \"All Time Low\" : \"52 Wk Low\"\r\n              }}</span>\r\n              <span class=\"text-black bold font14 Roboto\">{{\r\n                keyInfoData?.WkLow\r\n                ? (keyInfoData?.WkLow | segment : keyInfoData?.SegmentId)\r\n                : \"NA\"\r\n              }}</span>\r\n            </div>\r\n          </div>\r\n        }\r\n        <div>\r\n          <div class=\"col-md-12 text-left padding-0\">\r\n            <span class=\"font14 text-gray Roboto\">{{\r\n              keyInfoData?.SegmentId == 1 || keyInfoData?.SegmentId == 3\r\n              ? \"Volume\"\r\n              : \"OI\"\r\n            }}</span>\r\n            <span class=\"text-black bold font14 Roboto\">{{\r\n              keyInfoData?.SegmentId == 1 || keyInfoData?.SegmentId == 3\r\n              ? (keyInfoData?.volume || 0 | condense)\r\n              : (keyInfoData?.oi || 0 | value : \"1.0-0\")\r\n            }}</span>\r\n          </div>\r\n        </div>\r\n        <div>\r\n          <div class=\"col-md-12 text-left padding-0\">\r\n            <span class=\"font14 text-gray Roboto\">{{\r\n              keyInfoData?.SegmentId == 1 || keyInfoData?.SegmentId == 3\r\n              ? \"Mkt\r\n              cap\"\r\n              : \"OI %\"\r\n            }}</span>\r\n            <span class=\"text-black bold font14 Roboto\"\r\n              >{{\r\n              keyInfoData?.SegmentId == 1 || keyInfoData?.SegmentId == 3\r\n              ? (keyInfoData?.mCap || 0 | condense : \"1.0-0\")\r\n              : (keyInfoData?.oicPercent || 0 | condense)\r\n              }}\r\n            </span>\r\n          </div>\r\n        </div>\r\n        <div>\r\n          <div class=\"col-md-12 text-left padding-0\">\r\n            <span class=\"font14 text-gray Roboto\">LTQ&#64;LTP</span>\r\n            <span class=\"text-black bold font14 Roboto\"\r\n              >{{ keyInfoData?.LTQ || 0 }}&#64;{{\r\n              keyInfoData?.LTP || 0 | segment : keyInfoData?.SegmentId\r\n              }}</span\r\n              >\r\n            </div>\r\n          </div>\r\n          <div>\r\n            <div class=\"col-md-12 text-left padding-0\">\r\n              <span class=\"font14 text-gray Roboto\" title=\"Average Traded Price\"\r\n                >ATP</span\r\n                >\r\n                <span class=\"text-black bold font14 Roboto\">{{\r\n                  keyInfoData?.atp || 0 | segment : keyInfoData?.SegmentId\r\n                }}</span>\r\n              </div>\r\n            </div>\r\n\r\n            @if (scripInfo?.SegmentId == 1 || scripInfo?.SegmentId == 3) {\r\n              <div>\r\n                <div class=\"col-md-12 text-left padding-0\">\r\n                  <span class=\"font14 text-gray Roboto\">Var Margin</span>\r\n                  <span class=\"text-black bold font14 Roboto\"\r\n                    >{{\r\n                    scripInfo?.VarMargin / scripInfo?.PriceDivisor\r\n                    | segment : keyInfoData?.SegmentId\r\n                    }}\r\n                    %</span\r\n                    >\r\n                  </div>\r\n                </div>\r\n              }\r\n\r\n              <div>\r\n                <div class=\"col-md-12 text-left padding-0\">\r\n                  <span class=\"font14 text-gray Roboto\">Circuit Range</span>\r\n                  <span class=\"text-black bold font14 Roboto text-end\"\r\n                    >{{\r\n                    best5Response?.LowPriceRange || 0\r\n                    | segment : keyInfoData?.SegmentId\r\n                    }}\r\n                    -\r\n                    {{\r\n                    best5Response?.HighPriceRange || 0\r\n                    | segment : keyInfoData?.SegmentId\r\n                    }}</span\r\n                    >\r\n                  </div>\r\n                </div>\r\n\r\n                @if ([1, 3].indexOf(scripInfo?.SegmentId) > -1) {\r\n                  <div>\r\n                    <div class=\"col-md-12 text-left padding-0\">\r\n                      <span class=\"font14 text-gray Roboto\">Delivery %</span>\r\n                      <span class=\"text-black bold font14 Roboto\">{{\r\n                        scripInfo?.DeliveryPercent <= 0\r\n                        ? \"-\"\r\n                        : (scripInfo?.DeliveryPercent\r\n                        | segment : keyInfoData?.SegmentId)\r\n                      }}</span>\r\n                    </div>\r\n                  </div>\r\n                }\r\n\r\n                <div>\r\n                  <div class=\"col-md-12 text-left padding-0\">\r\n                    <span class=\"font14 text-gray Roboto\">Value</span>\r\n                    <span class=\"text-black bold font14 Roboto\">{{\r\n                      keyInfoData?.value || 0 | condense\r\n                    }}</span>\r\n                  </div>\r\n                </div>\r\n\r\n                @if (\r\n                  [1, 3].indexOf(scripInfo?.SegmentId) > -1 &&\r\n                  (scripInfo?.GSMCategory != null ||\r\n                  scripInfo?.GSMCategory != undefined)\r\n                  ) {\r\n                  <div\r\n                    >\r\n                    <div class=\"col-md-12 text-left padding-0\">\r\n                      <span class=\"font14 text-gray Roboto\">ASM/GSM</span>\r\n                      <span class=\"text-black bold font14 Roboto\">{{\r\n                        utilsService.gsmMessages[scripInfo?.SegmentId][\r\n                        scripInfo?.GSMCategory\r\n                        ]?.remark || \"No\"\r\n                      }}</span>\r\n                    </div>\r\n                  </div>\r\n                }\r\n\r\n                <div>\r\n                  <div class=\"col-md-12 text-left padding-0\">\r\n                    <span class=\"font14 text-gray Roboto\">Market Lot</span>\r\n                    <span class=\"text-black bold font14 Roboto\">{{\r\n                      scripInfo?.MarketLot | value : \"1.0-0\"\r\n                    }}</span>\r\n                  </div>\r\n                </div>\r\n\r\n                @if (\r\n                  scripInfo?.ExchangeSegment == 'NSEFO' && scripInfo?.IsBannedScrip\r\n                  ) {\r\n                  <div\r\n                    >\r\n                    <div class=\"col-md-12 text-left padding-0\">\r\n                      <span class=\"font14 text-gray Roboto\">Ban</span>\r\n                      <span class=\"text-black bold font14 Roboto\">{{\r\n                        scripInfo?.IsBannedScrip ? \"Yes\" : \"\"\r\n                      }}</span>\r\n                    </div>\r\n                  </div>\r\n                }\r\n                <!-- ________________________________ -->\r\n\r\n                @if ([1, 3].indexOf(scripInfo?.SegmentId) == -1) {\r\n                  <div>\r\n                    <div class=\"col-md-12 text-left padding-0\">\r\n                      <span class=\"font14 text-gray Roboto\">Description</span>\r\n                      <span class=\"text-black bold font14 Roboto text-end\">{{\r\n                        scripInfo?.SecName | value : \"replace-underscore\"\r\n                      }}</span>\r\n                    </div>\r\n                  </div>\r\n                }\r\n                @if ([1, 3].indexOf(scripInfo?.SegmentId) == -1) {\r\n                  <div>\r\n                    <div class=\"col-md-12 text-left padding-0\">\r\n                      <span class=\"font14 text-gray Roboto\">Scrip Code</span>\r\n                      <span class=\"text-black bold font14 Roboto text-end\">{{\r\n                        scripInfo?.Token\r\n                      }}</span>\r\n                    </div>\r\n                  </div>\r\n                }\r\n                @if ([1, 3].indexOf(scripInfo?.SegmentId) == -1) {\r\n                  <div>\r\n                    <div class=\"col-md-12 text-left padding-0\">\r\n                      <span class=\"font14 text-gray Roboto\">Maturity</span>\r\n                      <span class=\"text-black bold font14 Roboto text-end\">{{\r\n                        keyInfoData?.MaturityDate | date : \"d MMM yy\"\r\n                      }}</span>\r\n                    </div>\r\n                  </div>\r\n                }\r\n                @if ([1, 3].indexOf(scripInfo?.SegmentId) == -1) {\r\n                  <div>\r\n                    <div class=\"col-md-12 text-left padding-0\">\r\n                      <span class=\"font14 text-gray Roboto\"\r\n                        >Contract Start<br />Date</span\r\n                        >\r\n                        <span class=\"text-black bold font14 Roboto text-end\">{{\r\n                          keyInfoData?.contractStart | date : \"d MMM yy\"\r\n                        }}</span>\r\n                      </div>\r\n                    </div>\r\n                  }\r\n\r\n                  @if ([1, 3].indexOf(scripInfo?.SegmentId) == -1) {\r\n                    <div>\r\n                      <div class=\"col-md-12 text-left padding-0\">\r\n                        <span class=\"font14 text-gray Roboto\"\r\n                          >Contract End<br />Date</span\r\n                          >\r\n                          <span class=\"text-black bold font14 Roboto text-end\">{{\r\n                            keyInfoData?.contractEnd | date : \"d MMM yy\"\r\n                          }}</span>\r\n                        </div>\r\n                      </div>\r\n                    }\r\n                    <!-- ------------------------------ -->\r\n\r\n                    @if ([1, 2, 3, 4].indexOf(scripInfo?.SegmentId) == -1) {\r\n                      <div>\r\n                        <div class=\"col-md-12 text-left padding-0\">\r\n                          <span class=\"font14 text-gray Roboto\"\r\n                            >Delivery Start<br />Date</span\r\n                            >\r\n                            <span class=\"text-black bold font14 Roboto text-end\">{{\r\n                              keyInfoData?.DeliveryStartDate | date : \"d MMM yy\"\r\n                            }}</span>\r\n                          </div>\r\n                        </div>\r\n                      }\r\n                      @if ([1, 2, 3, 4].indexOf(scripInfo?.SegmentId) == -1) {\r\n                        <div>\r\n                          <div class=\"col-md-12 text-left padding-0\">\r\n                            <span class=\"font14 text-gray Roboto\"\r\n                              >Delivery End<br />Date</span\r\n                              >\r\n                              <span class=\"text-black bold font14 Roboto text-end\">{{\r\n                                keyInfoData?.DeliveryEndDate | date : \"d MMM yy\"\r\n                              }}</span>\r\n                            </div>\r\n                          </div>\r\n                        }\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n";

/***/ }),

/***/ 62749:
/*!**********************************************************************************************!*\
  !*** ./src/app/company-module/news-announcement/news-announcement.component.html?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"company-block card flex-ht\">\r\n    <h4 class=\"page-title text-uppercase\">News and Updates</h4>\r\n    <img class=\"loader\" src=\"assets/images/loader.gif\" [hidden]=\"!shared.isServiceHit\" />\r\n    <ul class=\"nav nav-tabs mt-5 hor_1 reset d-flex mb-10\" >\r\n        <li [class.active]=\"activeTab==1\" (click)=\"activateFilter(1,'newsData')\">\r\n            <a>News</a>\r\n        </li>\r\n        <li [class.active]=\"activeTab==2\" (click)=\"activateFilter(2,'announcementData')\">\r\n            <a>Announcements</a>\r\n        </li>\r\n        <li [class.active]=\"activeTab==3\" (click)=\"activateFilter(3,'eventsData')\">\r\n            <a>Events</a>\r\n        </li>\r\n    </ul>\r\n    <div class=\"resp-tabs-container hor_1\">\r\n        @if(activeTab === 1) {\r\n            <div>\r\n                <div class=\"tabs-data scrollbar\" id=\"style-7\">\r\n                    @for (item of newsData; track $index; let i = $index) {\r\n                        <div class=\"col-md-12 padding-0  pbt-10 clearfix\">\r\n                            <div class=\"flex-wrap\">\r\n                                <div class=\"\">\r\n                                    <div class=\"outer\">\r\n                                        <div class=\"inner\">&nbsp;</div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"\">\r\n                                    <div class=\"date\">{{item.publishDate}} </div>\r\n                                    <div class=\"headline\">\r\n                                        <a (click)=\"OpenDetailNews(item)\">{{item.title}}</a>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    }\r\n                    @if(newsData.length==0 && !shared.isServiceHit) {\r\n                        <div class=\"nodata text-center\">No News</div>\r\n                    }\r\n                </div>\r\n            </div>\r\n        }\r\n        @if(activeTab === 2) {\r\n            <div>\r\n                <div class=\"tabs-data scrollbar\" id=\"style-7\">\r\n                    @for (item of announcementData; track $index; let i = $index) {\r\n                        <div class=\"col-md-12 padding-0 pbt-10 clearfix\">\r\n                            <div class=\"flex-wrap\">\r\n                                <div class=\"\">\r\n                                    <div class=\"outer\">\r\n                                        <div class=\"inner\">&nbsp;</div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"\">\r\n                                    <div class=\"date\">{{item.NewsDate}} </div>\r\n                                    <div class=\"headline\">\r\n                                        <a (click)=\"openAnnouncementNews(item)\" [innerHTML]=\"item.HeadLine\">{{item.HeadLine}}</a>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    }\r\n                    @if(announcementData.length==0 && !shared.isServiceHit) {\r\n                        <div class=\"nodata text-center\">No Announcements</div>\r\n                    }\r\n                </div>\r\n            </div>\r\n        }\r\n        @if (activeTab === 3) {\r\n            <div>\r\n                <div class=\"tabs-data scrollbar\" id=\"style-7\">\r\n                    <table class=\"table table-striped table-bordered mobile-table\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th>Event Type</th>\r\n                                <th>Event Date</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            @for (item of eventsData; track $index; let i = $index) {\r\n                                <tr>\r\n                                    <td>{{item.eventType}} {{item.Agenda}}</td>\r\n                                    <td>{{item.momentDate?.format('DD-MMM-YYYY')}}</td>\r\n                                </tr>\r\n                            }\r\n                        </tbody>\r\n                    </table>\r\n                    @if(eventsData.length==0 && !shared.isServiceHit) {\r\n                        <div class=\"nodata text-center\">No Events</div>\r\n                    }\r\n                </div>\r\n            </div>\r\n        }\r\n        <div></div>\r\n    </div>\r\n</div>\r\n\r\n@if(showNewsDetail) {\r\n    <div class=\"dialog\">\r\n        <div class=\"dialog-content\">\r\n            <div class=\"dialog-header clearfix\">\r\n                <div class=\"col-md-12\">\r\n                    <h4 class=\"popup-title\" [innerHTML]=\"newsModal.HeadLine\"></h4>\r\n                </div>\r\n    \r\n            </div>\r\n            <div class=\"dialog-section\">\r\n                <p [innerHTML]=\"newsModal?.NewsText\"></p>\r\n            </div>\r\n            <div class=\"dialog-footer clearfix\">\r\n                <button class=\"btn sell\" [showFocus]=\"showNewsDetail\" (click)=\"closeDetailNews()\"> Close </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n}";

/***/ }),

/***/ 2729:
/*!******************************************************************************************!*\
  !*** ./src/app/company-module/overview-navbar/overview-navbar.component.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"col-md-12 clearfix padding-0 card\">\r\n  <ul class=\"company-page-listing-wrap\">\r\n    <li><a class=\"page-scroll\" [class.selectedTab]=\"activeTab==1\" (click)=\"activateFilter(1)\"\r\n    appScrollToElement [ngxScrollTo]=\"'#overview'\" [ngxScrollToDuration]=\"300\">Overview</a></li>\r\n    <li><a class=\"page-scroll\" [class.selectedTab]=\"activeTab==4\" (click)=\"activateFilter(4)\"\r\n      appScrollToElement [ngxScrollTo]=\"'#key-metrics'\" [ngxScrollToOffset]=\"-100\"\r\n    [ngxScrollToDuration]=\"300\">Fundamental</a></li>\r\n    <li><a class=\"page-scroll\" [class.selectedTab]=\"activeTab==2\" (click)=\"activateFilter(2)\"\r\n      appScrollToElement [ngxScrollTo]=\"'#technical'\" [ngxScrollToOffset]=\"-100\"\r\n    [ngxScrollToDuration]=\"300\">Technical</a></li>\r\n    <li>@if (reportListing&&reportListing?.length) {\r\n      <a class=\"page-scroll\" [class.selectedTab]=\"activeTab==3\" (click)=\"activateFilter(3)\"\r\n        appScrollToElement [ngxScrollTo]=\"'#Research-report'\" [ngxScrollToOffset]=\"-100\"\r\n      [ngxScrollToDuration]=\"300\">Research</a>\r\n    }</li>\r\n\r\n    <!-- <li><a class=\"page-scroll\" *ngIf=\"scripInfo?.RatioData\" [class.selectedTab]=\"activeTab==3\" (click)=\"activateFilter(3)\"\r\n  appScrollToElement [ngxScrollTo]=\"'#ratio'\" [ngxScrollToOffset]=\"-100\" [ngxScrollToDuration]=\"300\">Ratio</a></li> -->\r\n  <!-- <li><a class=\"page-scroll\" *ngIf=\"scripInfo?.Peers\" [class.selectedTab]=\"activeTab==4\"\r\n  (click)=\"activateFilter(4)\" appScrollToElement [ngxScrollTo]=\"'#peer-comparison'\" [ngxScrollToOffset]=\"-100\"\r\n[ngxScrollToDuration]=\"300\">Peers</a></li> -->\r\n<li><a class=\"page-scroll\" [class.selectedTab]=\"activeTab==5\" (click)=\"activateFilter(5)\"\r\n  appScrollToElement [ngxScrollTo]=\"'#fund-interest'\" [ngxScrollToOffset]=\"-100\" [ngxScrollToDuration]=\"300\">News and\r\nUpdates</a></li>\r\n<!-- <li><a class=\"page-scroll\" *ngIf=\"scripInfo?.FinancialData\" [class.selectedTab]=\"activeTab==6\" (click)=\"activateFilter(6)\"\r\nappScrollToElement [ngxScrollTo]=\"'#financials'\" [ngxScrollToOffset]=\"-100\" [ngxScrollToDuration]=\"300\">Financials</a></li> -->\r\n<li>@if (scripInfo?.CompanyOfficeDetails || scripInfo?.CompanyManagement || scripInfo?.CompanyInfo) {\r\n  <a class=\"page-scroll\"\r\n    [class.selectedTab]=\"activeTab==7\" (click)=\"activateFilter(7)\" appScrollToElement [ngxScrollTo]=\"'#company-details'\"\r\n  [ngxScrollToOffset]=\"-100\" [ngxScrollToDuration]=\"300\">Details</a>\r\n}</li>\r\n<!--  <li *ngIf=\"!scripInfo?.IsIndex && (shared.userId && shared.userId!='guest')\"><a class=\"page-scroll\" (click)=\"activateFilter(8)\">Mojo Analysis <span class=\"new-tag\" *ngIf='isShowNewIcon'>New</span></a></li> -->\r\n<!--   <li *ngIf=\"!scripInfo?.IsIndex && (shared.userId && shared.userId!='guest')\"><a class=\"page-scroll\"\r\n[class.selectedTab]=\"activeTab==8\" (click)=\"activateFilter(8)\" appScrollToElement [ngxScrollTo]=\"'#mojo-analysis'\"\r\n[ngxScrollToOffset]=\"-100\" [ngxScrollToDuration]=\"300\">Stock Analysis <span class=\"new-tag\"\r\n*ngIf='isShowNewIcon'>New</span></a></li> -->\r\n</ul>\r\n</div>";

/***/ }),

/***/ 93577:
/*!********************************************************************************************!*\
  !*** ./src/app/company-module/peer-comparision/peer-comparision.component.html?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"row flexwrap clearfix padding-0\" id=\"related-company\">\r\n  <div class=\"col-lg-12 col-sm-12 col-md-12\">\r\n    <div class=\"related-company\">\r\n      <div class=\"card\">\r\n        <h4 class=\"page-title\">RELATED COMPANY</h4>\r\n\r\n        <div class=\"container-ss dragscroll disable-text-selection\">\r\n          @for (item of peerComparisionData; track item) {\r\n            <article class=\"dragscroll-itm\" [class.bold]=\"searchScrip==item.SecName\" >\r\n              <a  class=\"art-sub-box\" (click)=\"gotoCompany(item)\">\r\n                <h5 class=\"name-ttl\">{{item.SecName||item.SecDesc | value:'trimlast2'}}</h5>\r\n                <h5 class=\"rel-ltp\">{{ item.LTP||(item.Price/scripInfo?.PriceDivisor) | segment : '1' }}</h5>\r\n                <h5 class=\"rel-ltp-percent {{item?.class}}\">{{(item.Change | segment:item.nSegmentId)+' ('+(item.ChangePer | value:'1.2-2')+'%)'}}</h5>\r\n              </a>\r\n            </article>\r\n          }\r\n\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- <div class=\"container-fluid peer-comparison-wrap padding-0\" id=\"peer-comparison\">\r\n<div class=\"tabbingwrapper\">\r\n  <div class=\"company-block\">\r\n    <img class=\"loader\" src=\"{{shared.serverImageUrl+'loader.gif'}}\"\r\n      [hidden]=\"peerComparisionData?.length>0 || !isServiceHit\" />\r\n      <h4 class=\"heading\">Peer Comparison</h4>\r\n\r\n\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table mobile-table table-striped\" style=\"border-collapse:collapse;\">\r\n          <thead>\r\n            <tr>\r\n              <th>Stock</th>\r\n              <th>CMP</th>\r\n              <th>P/E</th>\r\n              <th>P/BV</th>\r\n              <th>Mkt Cap</th>\r\n              <th>Div Yld</th>\r\n              <th>NP Qtr</th>\r\n              <th>Qtr Profit Var</th>\r\n              <th *ngIf=\"!isBank\">Sales Qtr</th>\r\n              <th *ngIf=\"!isBank\">Qtr Sales Var</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr [class.bold]=\"searchScrip==item.SecName\" *ngFor=\"let item of peerComparisionData\">\r\n              <td (click)=\"gotoCompany(item)\" class=\"clicklink\" data-header=\"Stock\">{{item.SecDesc}}</td>\r\n              <td data-header=\"CMP\">{{(item.Price/scripInfo?.PriceDivisor) | segment : '1' }}</td>\r\n              <td data-header=\"P/E\">{{item.PE | value:'1.1-1'}}</td>\r\n              <td data-header=\"P/BV\">{{item.PBV | segment : '1'}}</td>\r\n              <td data-header=\"Mar Cap\">{{(item.MarketCap||0)/10000000 |value:'1.0-0' }}</td>\r\n              <td data-header=\"Div Yld\">{{item.DividendYield || 0 | segment : '1' }}</td>\r\n              <td data-header=\"NP Qtr\">{{(item.LastQuarterNetProfit ||0)/10000000 |value:'1.0-0'}}</td>\r\n              <td data-header=\"Qtr Profit Var\">{{item.QOQChangeNetProfit | segment : '1'}}</td>\r\n              <td *ngIf=\"!isBank\" data-header=\"Sales Qtr\">{{(item.LastQuarterNetSales||0)/10000000\r\n              |value:'1.0-0'}}</td>\r\n              <td *ngIf=\"!isBank\" data-header=\"Qtr Sales Var\">{{item.QOQChangePerNS | segment : '1'}}</td>\r\n            </tr>\r\n            <tr *ngIf=\"isScripPeer && !isServiceHit\">\r\n              <td colspan=\"9\" class=\"nodata text-center\">No data Available </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div> -->";

/***/ }),

/***/ 12997:
/*!**********************************************************************!*\
  !*** ./src/app/company-module/pivot/pivot.component.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container-fluid padding-0 financials-wrap\">\r\n  <div class=\"card\">\r\n    <div class=\"company-block\">\r\n      <h4 class=\"page-title text-uppercase\">Pivot Points</h4>\r\n      @if (pivotPointsData) {\r\n        <div class=\"pull-right portfolio-dropdown\">\r\n          <form class=\"form-horizontal\" role=\"form\">\r\n            <div class=\"pr-0\">\r\n              <label for=\"basic2\">Time Period: </label>\r\n              <select id=\"basic2\" name=\"selectedDuration\" class=\"show-tick form-control\" [(ngModel)]=\"selectedDuration\"\r\n                (ngModelChange)=\"getPivotPoints()\">\r\n                <option value=\"1\">5 Minutes</option>\r\n                <option value=\"2\">30 Minutes</option>\r\n                <option value=\"3\">Hourly</option>\r\n                <option value=\"4\">5 hourly</option>\r\n                <option value=\"5\">Daily</option>\r\n                <option value=\"6\">Weekly</option>\r\n                <option value=\"7\">Monthly</option>\r\n              </select>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      }\r\n      <!-- <div class=\"text-center switch-wrap\">\r\n      <label class=\"control-label mr-10\" for=\"actionType\" [class.selected]=\"!pivotToggle\">Standard</label>\r\n      <label class=\"switch\">\r\n        <input type=\"checkbox\" id=\"actionType\" name=\"actionType\" [(ngModel)]=\"pivotToggle\"\r\n          (change)=\"onActionChange(pivotToggle)\">\r\n          <div class=\"slider round\"></div>\r\n        </label>\r\n        <label class=\"control-label ml-10\" for=\"actionType\" [class.selected]=\"pivotToggle\">Fibonacci</label>\r\n      </div> -->\r\n      <img class=\"loader\" src=\"assets/images/loader.gif\"\r\n        [hidden]=\"!pivotLoader && (pivotPointsData && pivotPointsData[selectedDuration])\" />\r\n        @if (pivotPointsData && pivotPointsData[selectedDuration] && !pivotLoader) {\r\n          <table class=\"table table-striped\">\r\n            <thead>\r\n              <th width=\"25%\">Level</th>\r\n              <th width=\"33%\" class=\"text-right\">Standard</th>\r\n              <th width=\"33%\" class=\"text-right\">Fibonacci</th>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td class=\"text-red\"><strong>R3</strong></td>\r\n                <td class=\"text-right\">{{pivotPointsData[selectedDuration]?.dStandardResistanceR3\r\n                |segment:scripInfo?.SegmentId}}</td>\r\n                <td class=\"text-right\">{{pivotPointsData[selectedDuration]?.dFibonacciResistanceR3\r\n                |segment:scripInfo?.SegmentId}}</td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"text-red\"><strong>R2</strong></td>\r\n                <td class=\"text-right\">{{pivotPointsData[selectedDuration]?.dStandardResistanceR2\r\n                |segment:scripInfo?.SegmentId}}</td>\r\n                <td class=\"text-right\">{{pivotPointsData[selectedDuration]?.dFibonacciResistanceR2\r\n                |segment:scripInfo?.SegmentId}}</td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"text-red\"><strong>R1</strong></td>\r\n                <td class=\"text-right\">{{pivotPointsData[selectedDuration]?.dStandardResistanceR1\r\n                |segment:scripInfo?.SegmentId}}</td>\r\n                <td class=\"text-right\">{{pivotPointsData[selectedDuration]?.dFibonacciResistanceR1\r\n                |segment:scripInfo?.SegmentId}}</td>\r\n              </tr>\r\n              <tr>\r\n                <td><strong>Pivot Point</strong></td>\r\n                <td class=\"text-right\"><strong>{{pivotPointsData[selectedDuration]?.dStandardPivot\r\n                |segment:scripInfo?.SegmentId}}</strong></td>\r\n                <td class=\"text-right\"><strong>{{pivotPointsData[selectedDuration]?.dFibonacciPivot\r\n                |segment:scripInfo?.SegmentId}}</strong></td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"text-green\"><strong>S1</strong></td>\r\n                <td class=\"text-right\">{{pivotPointsData[selectedDuration]?.dStandardSupportS1\r\n                |segment:scripInfo?.SegmentId}}</td>\r\n                <td class=\"text-right\">{{pivotPointsData[selectedDuration]?.dFibonacciSupportS1\r\n                |segment:scripInfo?.SegmentId}}</td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"text-green\"><strong>S2</strong></td>\r\n                <td class=\"text-right\">{{pivotPointsData[selectedDuration]?.dStandardSupportS2\r\n                |segment:scripInfo?.SegmentId}}</td>\r\n                <td class=\"text-right\">{{pivotPointsData[selectedDuration]?.dFibonacciSupportS2\r\n                |segment:scripInfo?.SegmentId}}</td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"text-green\"><strong>S3</strong></td>\r\n                <td class=\"text-right\">{{pivotPointsData[selectedDuration]?.dStandardSupportS3\r\n                |segment:scripInfo?.SegmentId}}</td>\r\n                <td class=\"text-right\">{{pivotPointsData[selectedDuration]?.dFibonacciSupportS3\r\n                |segment:scripInfo?.SegmentId}}</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        }\r\n        <!-- <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 555.3 277.9\"\r\n        class=\"pivot-svg\" *ngIf=\"pivotPointsData && pivotPointsData[selectedDuration]\">\r\n        <style>\r\n          .gradient {\r\n          fill: url(#gradient);\r\n        }\r\n      </style>\r\n      <defs>\r\n        <linearGradient id=\"gradient\" x1=\"57.42\" y1=\"140.41\" x2=\"492\" y2=\"140.41\" gradientUnits=\"userSpaceOnUse\">\r\n          <stop offset=\"0\" stop-color=\"#36d080\" />\r\n          <stop offset=\"0.5\" stop-color=\"#fef346\" />\r\n          <stop offset=\"1\" stop-color=\"#f15155\" />\r\n        </linearGradient>\r\n      </defs>\r\n      <title>Choice FinX Speedometer</title>\r\n      <path class=\"gradient\"\r\n        d=\"M395.2,79.9l4-6.2A218.4,218.4,0,0,1,461.7,141l-6.5,3.5A210.4,210.4,0,0,0,395.2,79.9Zm-13.9-9,4-6.2A215.8,215.8,0,0,0,283,34.7V42A209.2,209.2,0,0,1,381.3,70.9ZM266.4,42V34.7a215.4,215.4,0,0,0-102.2,30l3.9,6.2A209.6,209.6,0,0,1,266.4,42ZM154.2,79.9l-4-6.2A218.4,218.4,0,0,0,87.7,141l6.5,3.5A210.4,210.4,0,0,1,154.2,79.9ZM86.3,159.1l-6.5-3.5a216.7,216.7,0,0,0-22.4,90.6h7.4A208.9,208.9,0,0,1,86.3,159.1Zm398.3,87.1H492a215.2,215.2,0,0,0-22.4-90.6l-6.5,3.5A207.3,207.3,0,0,1,484.6,246.2Z\" />\r\n        <path class=\"pin\" id=\"speedometerBar\"\r\n          d=\"M294,256.5a17.3,17.3,0,0,1-26.9-21.7,18.7,18.7,0,0,1,5.4-4.4l8.2-114.3,9.2,115,1.5,1.1A17.3,17.3,0,0,1,294,256.5Zm-7.2-18.6a9.9,9.9,0,1,0-12.4,15.4,9.8,9.8,0,0,0,13.9-1.5A10,10,0,0,0,286.8,237.9Z\" />\r\n\r\n          <text class=\"text-green\" transform=\"translate(166.6 94.2)\">\r\n            {{pivotPointsData[selectedDuration][resKey+'SupportS1']\r\n            |segment:scripInfo?.SegmentId}}\r\n          </text>\r\n          <text class=\"text-green\" transform=\"translate(102 161.8)\">\r\n            {{pivotPointsData[selectedDuration][resKey+'SupportS2']\r\n            |segment:scripInfo?.SegmentId}}\r\n          </text>\r\n          <text class=\"text-green\" transform=\"translate(76.8 263.7)\">\r\n            {{pivotPointsData[selectedDuration][resKey+'SupportS3']\r\n            |segment:scripInfo?.SegmentId}}\r\n          </text>\r\n          <text class=\"f\" transform=\"translate(254 67.6)\">\r\n            {{pivotPointsData[selectedDuration][resKey+'Pivot']\r\n            |segment:scripInfo?.SegmentId}}\r\n          </text>\r\n          <text class=\"text-red\" style=\"transform:translate(-170px,94px)\">\r\n            <tspan x='100%' text-anchor=\"end\">\r\n              {{pivotPointsData[selectedDuration][resKey+'ResistanceR1']\r\n              |segment:scripInfo?.SegmentId}}\r\n            </tspan>\r\n          </text>\r\n          <text class=\"text-red\" style=\"transform:translate(-100px,160px)\">\r\n            <tspan x='100%' text-anchor=\"end\">\r\n              {{pivotPointsData[selectedDuration][resKey+'ResistanceR2']\r\n              |segment:scripInfo?.SegmentId}}\r\n            </tspan>\r\n          </text>\r\n          <text class=\"text-red\" style=\"transform:translate(-70px,263px)\">\r\n            <tspan x='100%' text-anchor=\"end\">\r\n              {{pivotPointsData[selectedDuration][resKey+'ResistanceR3']\r\n              |segment:scripInfo?.SegmentId}}\r\n            </tspan>\r\n          </text>\r\n\r\n          <text class=\"title\" transform=\"translate(137.3 62.2)\">S1</text>\r\n          <text class=\"title\" transform=\"translate(53.7 151.3)\">S2</text>\r\n          <text class=\"title\" transform=\"translate(29.7 262.7)\">S3</text>\r\n          <text class=\"title\" transform=\"translate(272.1 27.8)\">P</text>\r\n          <text class=\"title\" transform=\"translate(390.6 62.2)\">R1</text>\r\n          <text class=\"title\" transform=\"translate(480.8 151.3)\">R2</text>\r\n          <text class=\"title\" transform=\"translate(500.8 262.7)\">R3</text>\r\n        </svg> -->\r\n        @if (!pivotLoader && !(pivotPointsData && pivotPointsData[selectedDuration])) {\r\n          <div class=\"text-center\">\r\n            <p>No Data Available</p>\r\n          </div>\r\n        }\r\n      </div>\r\n    </div>\r\n  </div>";

/***/ }),

/***/ 52313:
/*!**************************************************************************!*\
  !*** ./src/app/company-module/reports/reports.component.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "@if (reports?.length) {\r\n  <div class=\"tabbingwrapper\" id=\"company-reports\"><!--  *ngIf=\"reports?.length\" -->\r\n    <div class=\"company-block\">\r\n      <h4 class=\"heading\">Research Report</h4>\r\n      <div class=\"sbdesk-tab-cont\">\r\n        <div class=\"sbdesk-tab-list\" > <!-- *ngFor=\"let data of reports\" -->\r\n          @for (data of reports; track data) {\r\n            <div class=\"sbdesk-tab-itm\" >\r\n              <div class=\"tab-itm-top\">\r\n                <div class=\"itm-top-ttl\">\r\n                  <h3 class=\"ttl-mn\">{{(data?.subcategory_name )||''}}<span class=\"psn\">| {{(data?.category_name )||''}}</span></h3>\r\n                  <h4 class=\"ttl-sm\">  {{data?.status=='Pending'?'Open':'Closed' }}<span>| <span class=\"sml-txt   {{ (((data?.status_flag == '6') || (data?.status_flag == '0')) ? 'red-txt' : ((data?.status_flag == '3' || data?.status_flag == '4')) ? 'pri-txt' : (data?.status_flag == '7') ? 'bal-txt' : (data?.status_flag == '1') ? 'grn-txt' : 'bal-txt')}}\">\r\n                    {{(data?.status=='Pending'?'Active':data?.status=='Achieved'?'Target\r\n                    Achieved':data?.status=='Stopped out'?'Stop Loss Triggered':data?.status)||''}}{{\r\n                    (config?.filter?.type != 'experts' && data?.matched_price)?(\" @ \"+((data?.matched_price)\r\n                    |condense:'1.2-2')): ((data?.matched_price && config?.filter?.type == 'experts'&&\r\n                    data?.status_flag!='6'&& data?.status_flag!='1')?(' @\r\n                    '+((data?.status_flag=='4'&&(config?.filter?.trade=='CDS'))?(data?.matched_price\r\n                    |condense:'1.4-4'):(data?.matched_price |condense:'1.2-2'))):(config?.filter?.type ==\r\n                    'experts'&&data?.bookedProfitPriceInPaise && data?.status_flag!='6'&& data?.status_flag!='1')?(' @\r\n                  '+((data?.bookedProfitPriceInPaise/100) |condense:'1.2-2')):'')}}</span></span> </h4>\r\n                </div>\r\n                <div class=\"itm-date-btn  \" >\r\n                  @if (data?.call_type) {\r\n                    <button class=\" btn-sm cursor-pointer border-0px  {{(((data?.call_type | lowercase)=='buy'||(data?.call_type | lowercase)=='subscribe' || (data?.call_type | lowercase)=='re-iterate buy')?'grn-btn':(data?.call_type | lowercase)=='sell'?'red-btn':'grey-btn')}}\"   (click)=\"OpenDrawer(data)\"  >    {{ data?.call_type }}</button>\r\n                  }\r\n                  <h5 class=\"date-post\"><!-- 27th Mar '22 -->  {{(data?.published_date ) || 'NA'}}</h5>\r\n                </div>\r\n              </div>\r\n              <div class=\"tab-itm-bottom\">\r\n                <div class=\"tab-itm-baar\">\r\n                  <div class=\"itm-baar-line {{data?.priceData?.holding_period?'itm-baar-line-holding':''}}\"></div>\r\n                  @if (data?.priceData?.stop_loss) {\r\n                    <div class=\"itm-cont-des stp-loss\">\r\n                      <h5>Stop Loss</h5>\r\n                      <h4>{{(config?.filter?.trade=='CDS')?((data?.priceData?.stop_loss?.value||0) | number:\r\n                      '1.4-4'):((data?.priceData?.stop_loss?.value||0) | number: '1.2-2')}}</h4>\r\n                    </div>\r\n                  }\r\n                  @if (data?.priceData?.target) {\r\n                    <div class=\"itm-cont-des targt-prize \" >\r\n                      <h5>{{(config?.filter?.type=='fundamental')?'Potential':'Target Price' }}</h5>\r\n                      <h4>{{(config?.filter?.trade=='CDS')?(((data?.priceData?.target?.value||0) | number:\r\n                      '1.4-4')):((data?.priceData?.target?.value||0) | number: '1.2-2')}}</h4>\r\n                    </div>\r\n                  }\r\n                  @if (!data?.priceData?.holding_period) {\r\n                    @if (data?.priceData?.cmp) {\r\n                      <div class=\"itm-cont-des entry-prize\"  [ngStyle]=\"{'left':(data?.priceData?.stop_loss?.value?'31.875%': ('31.875%'||((data?.priceData?.entry_price_percentage>83?83:data?.priceData?.entry_price_percentage)  + '%')))}\">\r\n                        <h5>Entry Price</h5>\r\n                        <h4>{{(config?.filter?.trade=='CDS')?(((data?.priceData?.cmp?.value||0) | number:\r\n                        '1.4-4')):((data?.priceData?.cmp?.value||0) | number: '1.2-2')}}</h4>\r\n                      </div>\r\n                    }\r\n                    @if (data?.priceData?.entry_price) {\r\n                      <div class=\"itm-cont-des entry-prize\"  [ngStyle]=\"{'left':(data?.priceData?.stop_loss?.value?'31.875%':('31.875%'||((data?.priceData?.entry_price_percentage>83?83:data?.priceData?.entry_price_percentage)  + '%')))}\">\r\n                        <h5>Entry Price</h5>\r\n                        <h4>{{(config?.filter?.trade=='CDS')?(((data?.priceData?.entry_price?.value||0) | number:\r\n                        '1.4-4')):((data?.priceData?.entry_price?.value||0) | number: '1.2-2')}}</h4>\r\n                      </div>\r\n                    }\r\n                  }\r\n                  @if (data?.priceData?.holding_period) {\r\n                    @if (data?.priceData?.cmp) {\r\n                      <div class=\"itm-cont-des entry-prize\">\r\n                        <h5>Entry Price</h5>\r\n                        <h4>{{(config?.filter?.trade=='CDS')?(((data?.priceData?.cmp?.value||0) | number:\r\n                        '1.4-4')):((data?.priceData?.cmp?.value||0) | number: '1.2-2')}}</h4>\r\n                      </div>\r\n                    }\r\n                    @if (data?.priceData?.entry_price) {\r\n                      <div class=\"itm-cont-des entry-prize\">\r\n                        <h5>Entry Price</h5>\r\n                        <h4>{{(config?.filter?.trade=='CDS')?(((data?.priceData?.entry_price?.value||0) | number:\r\n                        '1.4-4')):((data?.priceData?.entry_price?.value||0) | number: '1.2-2')}}</h4>\r\n                      </div>\r\n                    }\r\n                  }\r\n                  <!-- <div class=\"itm-cont-des stp-loss\"\r\n                  *ngIf=\"data?.priceData?.holding_period && config?.filter?.type !== 'fundamental'\">\r\n                  <h6>Holding Period</h6>\r\n                  <h4>{{(data?.priceData?.holding_period?.value||\"\")}}\r\n                  </h4>\r\n                </div> -->\r\n                <!--  <div class=\"itm-cont-des trgt-price\" *ngIf=\"data?.report_expiry && config?.filter?.type == 'fundamental'\">\r\n                <h6>Expected By</h6>\r\n                <h4>{{(data?.report_expiry ||\"\")}}\r\n                </h4>\r\n              </div> -->\r\n              <!--  <pre>{{data |json}}</pre> -->\r\n              <div class=\" curnt-mrk-price  {{(((data?.status == 'Stopped out')||(data?.priceData?.holding_period&&(data?.LTP<data?.priceData?.entry_price?.value)))?' leftvalueset ':'')+(data?.priceData?.ltp_price_percentage==100?' cmp-crossed ':'')+((data?.status == 'Achieved')?' valueset ':'')+(((((data?.LTP < data?.priceData?.entry_price?.value)&&(!data?.matched_price || !(data?.priceData?.entry_price?.value<data?.matched_price))) && \r\n              (data?.call_type|lowercase)=='buy'||(data?.call_type|lowercase)=='subscribe'||(data?.call_type|lowercase)=='re-iteratebuy')||( !(\r\n              (data?.call_type|lowercase)=='buy'||(data?.call_type|lowercase)=='subscribe'||(data?.call_type|lowercase)=='re-iteratebuy') &&  !(((data?.LTP < data?.priceData?.entry_price?.value)&&(!data?.matched_price || !(data?.priceData?.entry_price?.value<data?.matched_price)))) )) || (data?.status == 'Exit' && data?.matched_price && data?.matched_price<data?.priceData?.entry_price?.value) ? ' red-txt ' : ' grn-txt ')}}   \" [ngStyle]=\"{'left':(0>data?.priceData?.ltp_price_percentage?0:data?.priceData?.ltp_price_percentage > 90 ? 90 : data?.priceData?.ltp_price_percentage)  + '%'}\">\r\n                <!-- {{data?.priceData?.ltp_price_percentage}} -->\r\n               <!--  <div className={\" curnt-mrk-price \" + ((data?.status == 'Stopped out')?' leftvalueset ':\"\") + ((data?.status == 'Achieved')?' valueset ':\"\") + ((data?.LTP < data?.priceData?.entry_price?.value) ? 'red-txt ' : ' grn-txt ') + (data?.priceData?.ltp_price_percentage==100?\" cmp-crossed\":'')}  style={{ left:(data?.priceData?.ltp_price_percentage > 85 ? 85 : data?.priceData?.ltp_price_percentage)  + '%' }}> -->\r\n             \r\n               <!--  <h4>LTP</h4> -->\r\n               <!-- CMP -->\r\n               <h4>{{data?.status == 'Achieved'||data?.status == 'Stopped out'|| data?.status == 'Booked Part Profit' ? '':''}}  <span className=\"sm-txt\">{{ ((data?.status == 'Achieved' || data?.status == 'Exit')? ((((data?.matched_price||data?.priceData?.target?.value || 0)|number:'1.2-2')||0)):(data?.status == 'Stopped out')?((((data?.priceData?.stop_loss?.value || 0)|number:'1.2-2')||0)):((data?.status == 'Booked Part Profit'||data?.status == 'Booked Profit'))?(((data?.matched_price || 0)||0) |number:'1.2-2'):((data?.LTP||0)|number:'1.2-2'))}}</span></h4>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n}\r\n        @if (reports?.length%2==1) {\r\n<div class=\"sbdesk-tab-itm\">\r\n\r\n        </div>\r\n}\r\n        @if (!reports?.length) {\r\n<h4 class=\"text-center m-auto\">No Data Found</h4>\r\n}\r\n      <!--   <div class=\"sbdesk-tab-itm\">\r\n          <div class=\"tab-itm-top\">\r\n            <div class=\"itm-top-ttl\">\r\n              <h3 class=\"ttl-mn\">Equity Research Report <span class=\"psn\">| Fundamental</span></h3>\r\n              <h4 class=\"ttl-sm\">  Closed <span>| <span class=\"sml-txt pri-txt text-red\">SL Hit</span></span> </h4>\r\n            </div>\r\n            <div class=\"itm-date-btn\">\r\n              <button class=\" grn-btn btn-sm cursor-pointer border-0px\">Buy</button>\r\n              <h5 class=\"date-post\">27th Mar '22</h5>\r\n            </div>\r\n          </div>\r\n          <div class=\"tab-itm-bottom\">\r\n            <div class=\"tab-itm-baar\">\r\n              <div class=\"itm-baar-line \"></div>\r\n          \r\n              <div class=\"itm-cont-des targt-prize \">\r\n                <h5>Target Price </h5>\r\n                <h4>170.00</h4>\r\n              </div>\r\n              <div class=\"itm-cont-des entry-prize\" style=\"left: 10%;\">\r\n                <h5>Reco / Entry Price</h5>\r\n                <h4>160.00</h4>\r\n              </div>\r\n              <div class=\" curnt-mrk-price  grn-txt \" style=\"left: 60%;\">\r\n                <h4>LTP</h4>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div> -->\r\n      </div>\r\n    </div>\r\n\r\n    <!-- <ul class=\"nav nav-tabs hor_1\">\r\n      <li *ngIf=\"this.fundamental?.length\" [class.active]=\"activeTab==1\" (click)=\"activateFilter(1)\">\r\n        <a>Fundamental</a>\r\n      </li>\r\n      <li *ngIf=\"this.technical?.length\" [class.active]=\"activeTab==2\" (click)=\"activateFilter(2)\">\r\n        <a>Technical</a>\r\n      </li>\r\n    </ul> -->\r\n    <!-- <div class=\"tab-content hor_1\">\r\n      <div *ngIf=\"activeTab === 1\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table mobile-table table-striped\" style=\"border-collapse:collapse;\">\r\n            <thead>\r\n              <tr>\r\n                <th>Company</th>\r\n                <th>Report Category</th>\r\n                <th>Date</th>\r\n                \r\n                <th class=\"text-right\">{{fundamental[0]?.datapoints[0]?.label}}</th>\r\n                <th class=\"text-right\">{{fundamental[0]?.datapoints[1]?.label}}</th>\r\n                <th class=\"text-right\">{{fundamental[0]?.datapoints[2]?.label}}</th>\r\n                <th class=\"text-right\">Status</th>\r\n                <th class=\"text-right\">P / L</th>\r\n                <th class=\"text-right\">Action</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              \r\n              <tr *ngFor=\"let item of fundamental\">\r\n                <td data-header=\"Company\">\r\n                  <div class=\"reports-status\">\r\n                    <div class=\"achieved-img\" *ngIf=\"(item.status | lowercase) == 'achieved'\">\r\n                      <img src=\"../../../assets/images/blue-theme/achieve.png\" class=\"img-responsive\">\r\n                    </div>\r\n                    {{item.SecName}}\r\n                    <small>{{utils.getSegmentDetail(item.segment_id,\"SegmentName\")}}</small>\r\n                  </div>\r\n                </td>\r\n                <td data-header=\"Reports\"><span class=\"category\">{{item.subcategory_name}}</span> </td>\r\n                <td data-header=\"Date\">{{item.published_date | date: \"MMM d, y\"}}</td>\r\n               \r\n                <td attr.data-header=\"{{item.datapoints[0]?.label}}\" class=\"text-right\">\r\n                  {{item.datapoints[0]?.value | segment : item.segment_id}}\r\n                </td>\r\n                <td attr.data-header=\"{{item.datapoints[1]?.label}}\" class=\"text-right\">{{item.datapoints[1]?.value}}\r\n                </td>\r\n                <td attr.data-header=\"{{item.datapoints[2]?.label}}\" class=\"text-right\">{{item.datapoints[2]?.value}}\r\n                </td>\r\n                <td data-header=\"Status\" class=\"text-right\"><span\r\n                    class=\"{{item.status | lowercase}}\">{{item.status}}</span>\r\n        </td>\r\n        <td data-header=\"P / L\" class=\"text-right\">\r\n          <span\r\n            class=\"pnl {{item?.achievedPer > 0 && item?.matched_price ? 'green' : item?.achievedPer < 0 && item?.matched_price ? 'red' : ''}}\">\r\n            {{item?.matched_price || item.status == 'Achieved' ?\r\n            (abs(item?.achievedPer)!=0?(abs(item?.achievedPer) | value: '1.2-2'):'-') : '-' }}\r\n          </span>\r\n        </td>\r\n        <td data-header=\"Action\" class=\"text-right\"><span\r\n        class=\"call-type {{item.call_type | lowercase}}\">{{item.call_type}}</span></td>\r\n      </tr>\r\n      <tr *ngIf=\"!reports && !isServiceHit\">\r\n        <td colspan=\"9\" class=\"nodata text-center\">No data Available </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n</div>\r\n<div *ngIf=\"activeTab === 2\">\r\n  <div class=\"table-responsive\">\r\n    <table class=\"table mobile-table table-striped\" style=\"border-collapse:collapse;\">\r\n      <thead>\r\n        <tr>\r\n          <th>Company</th>\r\n          <th>Report Category</th>\r\n          <th>Date</th>\r\n          <th>Expiry Date</th>\r\n          <th class=\"text-right\">{{technical[0]?.datapoints[0]?.label}}</th>\r\n          <th class=\"text-right\">{{technical[0]?.datapoints[1]?.label}}</th>\r\n          <th class=\"text-right\">{{technical[0]?.datapoints[2]?.label}}</th>\r\n          <th class=\"text-right\">Status</th>\r\n          <th class=\"text-right\">P / L</th>\r\n          <th class=\"text-right\">Action</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let item of technical\">\r\n          <td data-header=\"Company\">\r\n            <div class=\"reports-status\">\r\n              <div class=\"achieved-img\" *ngIf=\"(item.status | lowercase) == 'achieved'\">\r\n                <img src=\"../../../assets/images/blue-theme/achieve.png\" class=\"img-responsive\">\r\n              </div>\r\n              {{item.SecName}}\r\n              <small>{{utils.getSegmentDetail(item.segment_id,\"SegmentName\")}}</small>\r\n            </div>\r\n          </td>\r\n          <td data-header=\"Reports\"><span class=\"category\">{{item.subcategory_name}}</span> </td>\r\n          <td data-header=\"Date\">{{item.published_date | date: \"MMM d, y H:mm:ss\" }}</td>\r\n          <td data-header=\"Expiry Date\" style=\"text-align: center;\">{{item.status_flag == null ?\r\n          (item.report_expiry | date: \"MMM d, y\") : '-'}}</td>\r\n          <td attr.data-header=\"{{item.datapoints[0]?.label}}\" class=\"text-right\">\r\n            {{item.datapoints[0]?.value | segment : item.segment_id}}\r\n          </td>\r\n          <td attr.data-header=\"{{item.datapoints[1].label}}\" class=\"text-right\">\r\n            {{item.datapoints[1]?.value | segment : item.segment_id}}\r\n          </td>\r\n          <td attr.data-header=\"{{item.datapoints[2].label}}\" class=\"text-right\">\r\n          {{item.datapoints[2]?.value | segment : item.segment_id}}</td>\r\n          <td data-header=\"Status\" class=\"text-right\"><span\r\n          class=\"{{item.status | lowercase}}\">{{item.status}}</span>\r\n        </td>\r\n        <td data-header=\"P / L\" class=\"text-right\">\r\n          <span\r\n            class=\"pnl {{item?.achievedPer > 0 && item?.matched_price ? 'green' : item?.achievedPer < 0 && item?.matched_price ? 'red' : ''}}\">\r\n            {{item?.matched_price || item.status == 'Achieved' ?\r\n            (abs(item?.achievedPer)!=0?(abs(item?.achievedPer) | value: '1.2-2'):'-') : '-' }}\r\n          </span>\r\n        </td>\r\n        <td data-header=\"Action\" class=\"text-right\"><span\r\n        class=\"call-type {{item.call_type | lowercase}}\">{{item.call_type}}</span></td>\r\n      </tr>\r\n      <tr *ngIf=\"!reports && !isServiceHit\">\r\n        <td colspan=\"9\" class=\"nodata text-center\">No data Available </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n</div>\r\n</div> -->\r\n</div>\r\n</div>\r\n}\r\n\r\n\r\n@if (showPreLogin) {\r\n  <div class=\"dialog\">\r\n    <div class=\"dialog-content\">\r\n      <div class=\"dialog-header clearfix \">\r\n        <div class=\"col-md-12\">\r\n          <h4 class=\"popup-title\">Please login to check out our research recommendations. </h4>\r\n        </div>\r\n      </div>\r\n      <div class=\"dialog-footer clearfix\">\r\n        <button class=\"btn sell\" (click)=\"closePreLogin()\">Close</button>\r\n        <button class=\"btn buy\" [showFocus]=\"showPreLogin\" (click)=\"login()\">Login</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n}";

/***/ }),

/***/ 68241:
/*!**************************************************************************************!*\
  !*** ./src/app/company-module/segment-token/segment-token.component.html?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div\r\n  class=\"row company-header company-header-new\"\r\n  [ngClass]=\"{\r\n    'company-header-note':\r\n      sharedDataService?.kraStatusDisclaimerVisible &&\r\n      sharedDataService?.kraStatusConfig &&\r\n      sharedDataService?.kraStatusConfig?.show &&\r\n      sharedDataService?.kraStatusConfig?.msg?.title\r\n  }\"\r\n  [class.pre-login]=\"\r\n    !sharedDataService.userId ||\r\n    sharedDataService.userId == 'guest' ||\r\n    sharedDataService.isWatchlistHide\r\n  \"\r\n  >\r\n  <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\">\r\n    <!-- <h1 class=\"text-black font20 padding-0 \">{{cardInfo?.ScripDetail}}\r\n    <span *ngIf=\"(scripInfo?.SegmentId == 1 || scripInfo?.SegmentId == 3) && scripInfo?.Series\">({{scripInfo?.Series}})</span>\r\n    <small>{{scripInfo?.Symbol}} {{exchangeType}}\r\n      <span *ngIf=\"cardInfo?.MarketCapType\">({{cardInfo?.MarketCapType}} Cap)</span>\r\n    </small>\r\n  </h1> -->\r\n\r\n  <div class=\"left-funda-details\">\r\n    <div class=\"text-black font20 padding-0\">\r\n      <div class=\"funda-first\">\r\n        <span class=\"name-spp\">{{ cardInfo?.ScripDetail }}</span>\r\n        @if (eventRef.isEventAvailable) {\r\n          <span\r\n            class=\"meeting-cart\"\r\n            (click)=\"focusOnEvents()\"\r\n            (click)=\"focusOnEvents()\"\r\n            id=\"company-events\"\r\n            >\r\n            <svg\r\n              xmlns=\"http://www.w3.org/2000/svg\"\r\n              id=\"Component_10_4\"\r\n              data-name=\"Component 10 – 4\"\r\n              width=\"20\"\r\n              height=\"20\"\r\n              viewBox=\"0 0 24 24\"\r\n              style=\"vertical-align: middle\"\r\n              class=\"event\"\r\n              [class.eventBeat]=\"isEventToday\"\r\n              >\r\n              <rect\r\n                id=\"Rectangle_4628\"\r\n                data-name=\"Rectangle 4628\"\r\n                width=\"20\"\r\n                height=\"20\"\r\n                rx=\"2\"\r\n                fill=\"#f4f3f8\"\r\n                opacity=\"0\"\r\n                />\r\n                <g id=\"Outline\" transform=\"translate(4.801 4)\">\r\n                  <g\r\n                    id=\"Group_51\"\r\n                    data-name=\"Group 51\"\r\n                    transform=\"translate(0 0)\"\r\n                    >\r\n                    <path\r\n                      id=\"Path_2338\"\r\n                      data-name=\"Path 2338\"\r\n                      d=\"M15.8,3.6H15V2H13.4V3.6H7V2H5.4V3.6H4.6A1.593,1.593,0,0,0,3.008,5.2L3,16.4A1.6,1.6,0,0,0,4.6,18H15.8a1.6,1.6,0,0,0,1.6-1.6V5.2A1.6,1.6,0,0,0,15.8,3.6Zm0,12.8H4.6v-8H15.8Zm0-9.6H4.6V5.2H15.8Z\"\r\n                      transform=\"translate(-3 -2)\"\r\n                      fill=\"#6A97D7\"\r\n                      />\r\n                      <rect\r\n                        id=\"Rectangle_30\"\r\n                        data-name=\"Rectangle 30\"\r\n                        width=\"4\"\r\n                        height=\"4\"\r\n                        transform=\"translate(7.2 8.8)\"\r\n                        fill=\"#6A97D7\"\r\n                        />\r\n                      </g>\r\n                    </g>\r\n                  </svg>\r\n                  <div class=\"cart-des\">\r\n                    <ul class=\"reset\">\r\n                      @if (eventData && eventData?.length) {\r\n                        <li>\r\n                          <h4>{{ eventData[0].eventType }} {{ eventData[0].Agenda }}{{eventData?.length > 1 ? (\" +\" + \"\" +((eventData?.length ?? 1) - 1) + \" Other\") : \"\"}}</h4>\r\n                          <h5>{{ eventData[0].momentDate?.format(\"DD-MMM-YYYY\") }}</h5>\r\n                        </li>\r\n                      }\r\n                      @if (!(eventData && eventData?.length) && isGettingFetched) {\r\n                        <li\r\n                          >\r\n                          <h5>No Events</h5>\r\n                        </li>\r\n                      }\r\n                      @if (!(eventData && eventData?.length) && !isGettingFetched) {\r\n                        <li\r\n                          >\r\n                          <h5>Fetching Events..</h5>\r\n                        </li>\r\n                      }\r\n                    </ul>\r\n                  </div>\r\n                </span>\r\n              }\r\n            </div>\r\n            <div class=\"funda-secnd\">\r\n              <span class=\"name-spp\">\r\n                <small\r\n                  >{{ scripInfo?.Symbol }} {{ exchangeType }}\r\n                  @if (cardInfo?.MarketCapType) {\r\n                    <span\r\n                      >({{ cardInfo?.MarketCapType }} Cap)</span\r\n                      >\r\n                    }\r\n                  </small></span\r\n                  >\r\n                  @if (\r\n                    qualityData &&\r\n                    qualityData?.length &&\r\n                    ((qualityData[0] && qualityData[0]?.value) ||\r\n                    (qualityData[1] && qualityData[1]?.value) ||\r\n                    (qualityData[2] && qualityData[2]?.value) ||\r\n                    (qualityData[3] && qualityData[3]?.value))\r\n                    ) {\r\n                    <div\r\n                      class=\"spl-points\"\r\n                      >\r\n                      <ul class=\"spl-points-list\">\r\n                        <li class=\"\">\r\n                          <span\r\n                            class=\"sm-dot  {{ qualityData[0]?.class + '-1' }}\"\r\n                            appScrollToElement\r\n                            [ngxScrollTo]=\"'#Quality-Scrore'\"\r\n                            [ngxScrollToOffset]=\"-100\"\r\n                            [ngxScrollToDuration]=\"300\"\r\n                          ></span>\r\n                          <span class=\"show-cont {{ qualityData[0]?.class }}\"\r\n                            >Price -\r\n                            <em class=\"{{ qualityData[0]?.class }}\">{{\r\n                              qualityData[0]?.value == \"AVG\"\r\n                              ? \"Average\"\r\n                              : qualityData[0]?.value || \"-\"\r\n                            }}</em></span\r\n                            >\r\n                          </li>\r\n                          <li class=\"\">\r\n                            <span\r\n                              class=\"sm-dot {{ qualityData[1]?.class + '-1' }}\"\r\n                              appScrollToElement\r\n                              [ngxScrollTo]=\"'#Quality-Scrore'\"\r\n                              [ngxScrollToOffset]=\"-100\"\r\n                              [ngxScrollToDuration]=\"300\"\r\n                            ></span>\r\n                            <span class=\"show-cont {{ qualityData[1]?.class }}\"\r\n                              >Growth -\r\n                              <em class=\"{{ qualityData[1]?.class }}\">{{\r\n                                qualityData[1]?.value == \"AVG\"\r\n                                ? \"Average\"\r\n                                : qualityData[1]?.value || \"-\"\r\n                              }}</em></span\r\n                              >\r\n                            </li>\r\n                            <li class=\"\">\r\n                              <span\r\n                                class=\"sm-dot {{ qualityData[2]?.class + '-1' }}\"\r\n                                appScrollToElement\r\n                                [ngxScrollTo]=\"'#Quality-Scrore'\"\r\n                                [ngxScrollToOffset]=\"-100\"\r\n                                [ngxScrollToDuration]=\"300\"\r\n                              ></span>\r\n                              <span class=\"show-cont {{ qualityData[2]?.class }}\"\r\n                                >Quality -\r\n                                <em class=\"{{ qualityData[2]?.class }}\">{{\r\n                                  qualityData[2]?.value == \"AVG\"\r\n                                  ? \"Average\"\r\n                                  : qualityData[2]?.value || \"-\"\r\n                                }}</em></span\r\n                                >\r\n                              </li>\r\n                              <li class=\"\">\r\n                                <span\r\n                                  class=\"sm-dot  {{ qualityData[3]?.class + '-1' }}\"\r\n                                  appScrollToElement\r\n                                  [ngxScrollTo]=\"'#Quality-Scrore'\"\r\n                                  [ngxScrollToOffset]=\"-100\"\r\n                                  [ngxScrollToDuration]=\"300\"\r\n                                ></span>\r\n                                <span class=\"show-cont {{ qualityData[3]?.class }}\"\r\n                                  >Management -\r\n                                  <em class=\"{{ qualityData[3]?.class }}\">{{\r\n                                    qualityData[3]?.value == \"AVG\"\r\n                                    ? \"Average\"\r\n                                    : qualityData[3]?.value || \"-\"\r\n                                  }}</em></span\r\n                                  >\r\n                                </li>\r\n                              </ul>\r\n                            </div>\r\n                          }\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"card_value card_value_n_text\">\r\n                      <span class=\"font-n-22\">\r\n                        <strong\r\n                          [class.bg-up]=\"dummyObj?.prevChange > 0\"\r\n                          [class.bg-down]=\"dummyObj?.prevChange < 0\"\r\n                          >{{ dummyObj?.LTP | segment : segmentId }}</strong\r\n                          >\r\n                        </span>\r\n                        <div class=\"font14 ltp-change {{ dummyObj?.color }}\">\r\n                          {{ dummyObj?.difference | segment : segmentId }} ({{\r\n                          dummyObj?.percent | value : \"1.2-2\"\r\n                          }}\r\n                          %)\r\n                          <i class=\"fa {{ dummyObj?.arrow }}\"></i>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div\r\n                      id=\"addRemoveWatchlist\"\r\n                      class=\"col-lg-8 col-md-8 col-sm-8 col-xs-12 addRemoveWatchlist-new-comp\"\r\n                      >\r\n                    <div class=\"row\">\r\n                      <div class=\"col-md-12 padding0\">\r\n                        <div class=\"padding-0 clearfix add-remove-section\">\r\n                          <!--       <button dropdown-open class=\" btn add pull-right\" title=\"Add to Watchlist\" (click)=\"openPreLogin()\"\r\n                          =======\r\n                          <div *ngIf=\"!isAdded\" dropdown class=\"padding-0\" id=\"button-add-remove-watchlist\">\r\n                            >>>>>>> sgb-task\r\n                            [disabled]=\"isButtonDisabled\">\r\n                            <i class=\"icon-Watchlist\"></i>\r\n                          </button>\r\n                          -->\r\n\r\n                          <!-- <button *ngIf=\"isAdded\" [disabled]=\"isButtonDisabled\" class=\"btn-gradient pull-right btn add-remove\"\r\n                          (click)=\"addRemoveWatchList()\" [class.bg-green]=\"isAdded\" title=\"Remove from Watchlist\">\r\n\r\n                        </div>\r\n                        <button *ngIf=\"isAdded\" [disabled]=\"isButtonDisabled\" class=\"btn-gradient pull-right btn add-remove\" id=\"button-add-remove-watchlist\"\r\n                          (click)=\"addRemoveWatchList()\" [class.bg-green]=\"isAdded\" title=\"Remove from Watchlist\" >\r\n                          <img src=\"../../../assets/images/eyeglass.png\" class=\"img-responsive\" /> -->\r\n                          <!-- <i class=\"icon-Watchlist\"></i> -->\r\n\r\n                          <!-- <span>{{scripData?.ProfileId}}</span>\r\n                        </button> -->\r\n                        <!-- <button class=\" btn add pull-right\" title=\"Set Alert\" (click)=\"addPriceAlert()\" [disabled]=\"isButtonDisabled\"\r\n                        style=\"margin-left:15px;\">\r\n                        <i aria-hidden=\"true\" class=\"fa icon-Price-alert\"></i>\r\n                      </button> -->\r\n                    </div>\r\n\r\n                    <button\r\n                      type=\"button\"\r\n                      class=\"btn sell sell-color-btn\"\r\n                      (click)=\"sellItem($event)\"\r\n        [disabled]=\"\r\n          scripInfo?.SegmentId == 6 ||\r\n          scripInfo?.SegmentId == 8 ||\r\n          scripInfo?.SegmentId == 39 ||\r\n          scripInfo?.SegmentId == 14\r\n        \"\r\n                      >\r\n                      SELL\r\n                    </button>\r\n                    <button\r\n                      id=\"c-button--slide-right\"\r\n                      type=\"button\"\r\n                      class=\"btn buy\"\r\n        [disabled]=\"\r\n          scripInfo?.SegmentId == 6 ||\r\n          scripInfo?.SegmentId == 8 ||\r\n          scripInfo?.SegmentId == 39 ||\r\n          scripInfo?.SegmentId == 14\r\n        \"\r\n                      (click)=\"buyItem($event)\"\r\n                      >\r\n                      BUY\r\n                    </button>\r\n                    @if (\r\n                      mapTokenArray?.length > 3 ||\r\n                      scripInfo?.SegmentId == 2 ||\r\n                      scripInfo?.SegmentId == 4 ||\r\n                      scripInfo?.SegmentId == 38 ||\r\n                      scripInfo?.SegmentId == 13 ||\r\n                      scripInfo?.SegmentId == 7\r\n                      ) {\r\n                      <button\r\n                        class=\"btn-sets\"\r\n                        (click)=\"openOptionChain()\"\r\n                        title=\"Option Chain\"\r\n                        >\r\n                        <svg\r\n                          xmlns=\"http://www.w3.org/2000/svg\"\r\n                          id=\"Option_chain\"\r\n                          data-name=\"Option chain\"\r\n                          width=\"19\"\r\n                          height=\"19\"\r\n                          viewBox=\"0 0 19 19\"\r\n                          class=\"ico-set\"\r\n                          >\r\n                          <path\r\n                            id=\"Path_59580\"\r\n                            data-name=\"Path 59580\"\r\n                            d=\"M0,0H19V19H0Z\"\r\n                            fill=\"none\"\r\n                            />\r\n                            <path\r\n                              id=\"Path_59581\"\r\n                              data-name=\"Path 59581\"\r\n                              d=\"M10,12.18a2.865,2.865,0,0,0,4.093,0l3.274-3.274a2.894,2.894,0,1,0-4.093-4.093l-.409.409\"\r\n                              transform=\"translate(-2.277 -0.918)\"\r\n                              fill=\"none\"\r\n                              stroke=\"#1B1464\"\r\n                              stroke-linecap=\"round\"\r\n                              stroke-linejoin=\"round\"\r\n                              stroke-width=\"1.5\"\r\n                              />\r\n                              <path\r\n                                id=\"Path_59582\"\r\n                                data-name=\"Path 59582\"\r\n                                d=\"M12.18,9.809a2.865,2.865,0,0,0-4.093,0L4.812,13.084a2.894,2.894,0,0,0,4.093,4.093l.409-.409\"\r\n                                transform=\"translate(-0.903 -2.071)\"\r\n                                fill=\"none\"\r\n                                stroke=\"#1B1464\"\r\n                                stroke-linecap=\"round\"\r\n                                stroke-linejoin=\"round\"\r\n                                stroke-width=\"1.5\"\r\n                                />\r\n                                <line\r\n                                  id=\"Line_142\"\r\n                                  data-name=\"Line 142\"\r\n                                  y1=\"1\"\r\n                                  transform=\"translate(12.401 15.177)\"\r\n                                  fill=\"none\"\r\n                                  stroke=\"#1B1464\"\r\n                                  stroke-linecap=\"round\"\r\n                                  stroke-linejoin=\"round\"\r\n                                  stroke-width=\"1.5\"\r\n                                  />\r\n                                  <line\r\n                                    id=\"Line_143\"\r\n                                    data-name=\"Line 143\"\r\n                                    x2=\"1\"\r\n                                    transform=\"translate(15.177 12.401)\"\r\n                                    fill=\"none\"\r\n                                    stroke=\"#1B1464\"\r\n                                    stroke-linecap=\"round\"\r\n                                    stroke-linejoin=\"round\"\r\n                                    stroke-width=\"1.5\"\r\n                                    />\r\n                                    <line\r\n                                      id=\"Line_144\"\r\n                                      data-name=\"Line 144\"\r\n                                      x2=\"1\"\r\n                                      transform=\"translate(2.823 6.599)\"\r\n                                      fill=\"none\"\r\n                                      stroke=\"#1B1464\"\r\n                                      stroke-linecap=\"round\"\r\n                                      stroke-linejoin=\"round\"\r\n                                      stroke-width=\"1.5\"\r\n                                      />\r\n                                      <line\r\n                                        id=\"Line_145\"\r\n                                        data-name=\"Line 145\"\r\n                                        y2=\"1\"\r\n                                        transform=\"translate(6.599 2.823)\"\r\n                                        fill=\"none\"\r\n                                        stroke=\"#1B1464\"\r\n                                        stroke-linecap=\"round\"\r\n                                        stroke-linejoin=\"round\"\r\n                                        stroke-width=\"1.5\"\r\n                                        />\r\n                                      </svg>\r\n                                    </button>\r\n                                  }\r\n\r\n                                  <ng-container>\r\n                                    @if (isAdded) {\r\n                                      <button\r\n                                        class=\"btn-sets\"\r\n                                        [disabled]=\"isButtonDisabled\"\r\n                                        (click)=\"addRemoveWatchList()\"\r\n                                        title=\"Remove from Watchlist\"\r\n                                        >\r\n                                        <span class=\"added-watchlist\">\r\n                                          {{ scripData?.ProfileId }}\r\n                                        </span>\r\n                                      </button>\r\n                                    }\r\n\r\n                                    @if (!isAdded) {\r\n                                      <div\r\n                                        dropdown\r\n                                        class=\"padding-0 position-relative\"\r\n                                        title=\"Add to Watchlist\"\r\n                                        >\r\n                                        @if (!isAdded) {\r\n                                          <button\r\n                                            class=\"btn-sets\"\r\n                                            dropdown-open\r\n                                            (click)=\"openPreLogin()\"\r\n                                            [disabled]=\"isButtonDisabled\"\r\n                                            >\r\n                                            <svg\r\n                                              xmlns=\"http://www.w3.org/2000/svg\"\r\n                                              id=\"watchlist\"\r\n                                              width=\"18.716\"\r\n                                              height=\"17.244\"\r\n                                              viewBox=\"0 0 18.716 17.244\"\r\n                                              class=\"ico-set\"\r\n                                              >\r\n                                              <g\r\n                                                id=\"watchlist-2\"\r\n                                                data-name=\"watchlist\"\r\n                                                transform=\"translate(-10365.284 -14323.498)\"\r\n                                                fill=\"none\"\r\n                                                stroke-linecap=\"round\"\r\n                                                >\r\n                                                <path\r\n                                                  d=\"M10374.717,14327l4.643-3.5,4.641,3.5v5.71l-9.283,8.032-9.433-8.032V14327l4.716-3.5Z\"\r\n                                                  stroke=\"none\"\r\n                                                  />\r\n                                                  <path\r\n                                                    d=\"M 10370 14325.3662109375 L 10366.7841796875 14327.7548828125 L 10366.7841796875 14332.017578125 L 10374.708984375 14338.765625 L 10382.5 14332.0244140625 L 10382.5 14327.7470703125 L 10379.359375 14325.376953125 L 10374.7236328125 14328.873046875 L 10370 14325.3662109375 M 10370 14323.498046875 L 10374.716796875 14327 L 10379.359375 14323.498046875 L 10384 14327 L 10384 14332.7099609375 L 10374.716796875 14340.7421875 L 10365.2841796875 14332.7099609375 L 10365.2841796875 14327 L 10370 14323.498046875 Z\"\r\n                                                    stroke=\"none\"\r\n                                                    fill=\"#1B1464\"\r\n                                                    />\r\n                                                  </g>\r\n                                                </svg>\r\n                                              </button>\r\n                                            }\r\n                                            @if (\r\n                                              sharedDataService?.userId && sharedDataService?.userId != 'guest'\r\n                                              ) {\r\n                                              <ul\r\n                                                class=\"dropdown-menu\"\r\n                                                role=\"menu\"\r\n                                                >\r\n                                                <li (click)=\"addRemoveWatchList(1)\">\r\n                                                  <a class=\"animate\">{{\r\n                                                    watchlistNames[1] && watchlistNames[1] != 1\r\n                                                    ? watchlistNames[1] + \"(1)\"\r\n                                                    : \"Watchlist 1\"\r\n                                                  }}</a>\r\n                                                </li>\r\n                                                <li (click)=\"addRemoveWatchList(2)\">\r\n                                                  <a class=\"animate\">{{\r\n                                                    watchlistNames[2] && watchlistNames[2] != 2\r\n                                                    ? watchlistNames[2] + \"(2)\"\r\n                                                    : \"Watchlist 2\"\r\n                                                  }}</a>\r\n                                                </li>\r\n                                                <li (click)=\"addRemoveWatchList(3)\">\r\n                                                  <a class=\"animate\">{{\r\n                                                    watchlistNames[3] && watchlistNames[3] != 3\r\n                                                    ? watchlistNames[3] + \"(3)\"\r\n                                                    : \"Watchlist 3\"\r\n                                                  }}</a>\r\n                                                </li>\r\n                                                <li (click)=\"addRemoveWatchList(4)\">\r\n                                                  <a class=\"animate\">{{\r\n                                                    watchlistNames[4] && watchlistNames[4] != 4\r\n                                                    ? watchlistNames[4] + \"(4)\"\r\n                                                    : \"Watchlist 4\"\r\n                                                  }}</a>\r\n                                                </li>\r\n                                                <li (click)=\"addRemoveWatchList(5)\">\r\n                                                  <a class=\"animate\">{{\r\n                                                    watchlistNames[5] && watchlistNames[5] != 5\r\n                                                    ? watchlistNames[5] + \"(5)\"\r\n                                                    : \"Watchlist 5\"\r\n                                                  }}</a>\r\n                                                </li>\r\n                                              </ul>\r\n                                            }\r\n                                          </div>\r\n                                        }\r\n                                      </ng-container>\r\n\r\n      <!--   <button dropdown-open class=\" btn add pull-right\" title=\"Add to Watchlist\" (click)=\"openPreLogin()\"\r\n        [disabled]=\"isButtonDisabled\">\r\n        <i class=\"icon-Watchlist\"></i>\r\n      </button> -->\r\n      <button\r\n        class=\"btn-sets\"\r\n        title=\"Set Alert\"\r\n        (click)=\"addPriceAlert()\"\r\n        title=\"Set Alert\"\r\n      >\r\n        <svg\r\n          xmlns=\"http://www.w3.org/2000/svg\"\r\n          id=\"price_alert\"\r\n          data-name=\"price alert\"\r\n          width=\"19\"\r\n          height=\"19\"\r\n          viewBox=\"0 0 19 19\"\r\n          class=\"ico-set\"\r\n        >\r\n          <path\r\n            id=\"Path_59583\"\r\n            data-name=\"Path 59583\"\r\n            d=\"M0,0H19V19H0Z\"\r\n            fill=\"none\"\r\n          />\r\n          <path\r\n            id=\"Path_59584\"\r\n            data-name=\"Path 59584\"\r\n            d=\"M8.75,4.583a1.583,1.583,0,1,1,3.167,0,5.542,5.542,0,0,1,3.167,4.75v2.375a3.167,3.167,0,0,0,1.583,2.375H4a3.167,3.167,0,0,0,1.583-2.375V9.333A5.542,5.542,0,0,1,8.75,4.583\"\r\n            transform=\"translate(-0.833 -0.625)\"\r\n            fill=\"none\"\r\n            stroke=\"#1B1464\"\r\n            stroke-linecap=\"round\"\r\n            stroke-linejoin=\"round\"\r\n            stroke-width=\"1.5\"\r\n          />\r\n          <path\r\n            id=\"Path_59585\"\r\n            data-name=\"Path 59585\"\r\n            d=\"M9,17v.792a2.375,2.375,0,0,0,4.75,0V17\"\r\n            transform=\"translate(-1.875 -3.542)\"\r\n            fill=\"none\"\r\n            stroke=\"#1B1464\"\r\n            stroke-linecap=\"round\"\r\n            stroke-linejoin=\"round\"\r\n            stroke-width=\"1.5\"\r\n          />\r\n          <path\r\n            id=\"Path_59586\"\r\n            data-name=\"Path 59586\"\r\n            d=\"M20.418,5.951A8.748,8.748,0,0,0,18.206,3\"\r\n            transform=\"translate(-3.793 -0.625)\"\r\n            fill=\"none\"\r\n            stroke=\"#1B1464\"\r\n            stroke-linecap=\"round\"\r\n            stroke-linejoin=\"round\"\r\n            stroke-width=\"1.5\"\r\n          />\r\n          <path\r\n            id=\"Path_59587\"\r\n            data-name=\"Path 59587\"\r\n            d=\"M3,5.951A8.748,8.748,0,0,1,5.21,3\"\r\n            transform=\"translate(-0.625 -0.625)\"\r\n            fill=\"none\"\r\n            stroke=\"#1B1464\"\r\n            stroke-linecap=\"round\"\r\n            stroke-linejoin=\"round\"\r\n            stroke-width=\"1.5\"\r\n          />\r\n        </svg>\r\n      </button>\r\n    </div>\r\n  </div>\r\n    <div\r\n      class=\"ohlc-container col-sm-12 padding-0 col-md-12 col-lg-12 d-flex flex-row justify-content-evenly\"\r\n      style=\"display: flex\"\r\n    >\r\n      <div class=\"border-right-none\">\r\n        <div class=\"text-left padding-0 line-height-css\">\r\n          <span class=\"font14 text-gray Roboto\">Open</span><br />\r\n          <span class=\"text-black bold font14 Roboto\">{{\r\n            scripInfo?.SegmentId == 13 ||\r\n            scripInfo?.SegmentId == 38 ||\r\n            scripInfo?.SegmentId == 14 ||\r\n            scripInfo?.SegmentId == 39\r\n              ? (dummyObj?.open | value : \"1.4-4\")\r\n              : (dummyObj?.open | value : \"1.2-2\")\r\n          }}</span>\r\n        </div>\r\n      </div>\r\n\r\n                                              <div class=\"border-right-none\">\r\n                                                <div class=\"text-left padding-0 line-height-css\">\r\n                                                  <span class=\"font14 text-gray Roboto\">High</span><br />\r\n                                                  <span class=\"text-black bold font14 Roboto\">{{\r\n                                                    scripInfo?.SegmentId == 13 ||\r\n                                                    scripInfo?.SegmentId == 38 ||\r\n                                                    scripInfo?.SegmentId == 14 ||\r\n                                                    scripInfo?.SegmentId == 39\r\n                                                    ? (dummyObj?.high | value : \"1.4-4\")\r\n                                                    : (dummyObj?.high | value : \"1.2-2\")\r\n                                                  }}</span>\r\n                                                </div>\r\n                                              </div>\r\n\r\n                                              <div class=\"border-right-none\">\r\n                                                <div class=\"text-left padding-0 line-height-css\">\r\n                                                  <span class=\"font14 text-gray Roboto\">Low</span><br />\r\n                                                  <span class=\"text-black bold font14 Roboto\">{{\r\n                                                    scripInfo?.SegmentId == 13 ||\r\n                                                    scripInfo?.SegmentId == 38 ||\r\n                                                    scripInfo?.SegmentId == 14 ||\r\n                                                    scripInfo?.SegmentId == 39\r\n                                                    ? (dummyObj?.low | value : \"1.4-4\")\r\n                                                    : (dummyObj?.low | value : \"1.2-2\")\r\n                                                  }}</span>\r\n                                                </div>\r\n                                              </div>\r\n\r\n                                              <div class=\"border-right-none\">\r\n                                                <div class=\"text-left padding-0 line-height-css\">\r\n                                                  <span class=\"font14 text-gray Roboto\">Prev. Close</span><br />\r\n                                                  <span class=\"text-black bold font14 Roboto\">{{\r\n                                                    scripInfo?.SegmentId == 13 ||\r\n                                                    scripInfo?.SegmentId == 38 ||\r\n                                                    scripInfo?.SegmentId == 14 ||\r\n                                                    scripInfo?.SegmentId == 39\r\n                                                    ? (dummyObj?.close || 0 | value : \"1.4-4\")\r\n                                                    : (dummyObj?.close || 0 | value : \"1.2-2\")\r\n                                                  }}</span>\r\n                                                </div>\r\n                                              </div>\r\n                                            </div>\r\n\r\n                                            <div class=\"col-md-12 flex-n just-right padding0\">\r\n                                              <!-- <div class=\"padding-0 col-sm-12 col-xs-12 text-right\">\r\n                                              <button (click)=\"openOptionChain()\" class=\"popup-btn\"\r\n                                                *ngIf=\"mapTokenArray?.length>3||(scripInfo?.SegmentId==2||scripInfo?.SegmentId==13||scripInfo?.SegmentId==7)\">\r\n\r\n                                                <span class=\"info-icon\">i</span>\r\n                                                Option Chain\r\n\r\n                                              </button>\r\n                                            </div> -->\r\n                                            <!-- <div class=\"tt-text\">\r\n                                            <span class=\"font11 greycolor Roboto\">LTT:</span>\r\n                                            <span class=\"font11 text-black bold\">{{(scripInfo?.LTT== '01-Jan-80 00:00:00')?'NA':scripInfo?.LTT}}</span>\r\n\r\n                                          </div>\r\n\r\n                                          <div class=\"tt-text\">\r\n                                            <span class=\"font11 greycolor Roboto\">LUT:</span>\r\n                                            <span class=\"font11 text-black bold\">{{(scripInfo?.LUT== '01-Jan-80 00:00:00')?'NA':scripInfo?.LUT}}</span>\r\n\r\n                                          </div> -->\r\n                                        </div>\r\n                                      </div>\r\n                                      <!-- <div class=\"col-xs-12 clearfix\"> -->\r\n                                      <!-- <div class=\"padding-0 col-sm-3 col-xs-6\"> -->\r\n\r\n                                      <!-- <button *ngIf=\"scripInfo?.SegmentId!=6 && scripInfo?.SegmentId!=8 && scripInfo?.SegmentId!=14\" (click)=\"OpenSecurityInfo()\" class=\"popup-btn\">\r\n\r\n                                      <span class=\"info-icon\">i</span>\r\n                                      {{((scripInfo?.SegmentId != 1) && (scripInfo?.SegmentId != 3))?'Contract Info':'Security Info' }}\r\n\r\n                                    </button> -->\r\n                                  <!-- </div> -->\r\n\r\n                                  <!-- <div class=\"padding-0 col-sm-12 col-xs-12 text-right\">\r\n                                  <button (click)=\"openOptionChain()\" class=\"popup-btn\"\r\n                                    *ngIf=\"mapTokenArray?.length>3||(scripInfo?.SegmentId==2||scripInfo?.SegmentId==5||scripInfo?.SegmentId==13||scripInfo?.SegmentId==7)\">\r\n\r\n                                    <span class=\"info-icon\">i</span>\r\n                                    Option Chain\r\n\r\n                                  </button>\r\n                                </div> -->\r\n                              <!-- </div> -->\r\n                            </div>\r\n                            <div\r\n                              id=\"toggleCard\"\r\n                              class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 padding-0 main-cards\"\r\n                              >\r\n                              <div\r\n                                class=\"col-lg-12 col-md-12 col-sm-12 mb-10 col-xs-12 padding-0\"\r\n                                style=\"margin-bottom: 10px\"\r\n                                >\r\n                                <div id=\"demos\" class=\"\">\r\n                                  <div>\r\n                                    <div class=\"large-12 columns\">\r\n                                      <div class=\"segment-page-wrap\">\r\n                                        @if (showDummyObj) {\r\n                                          <div\r\n                                            (click)=\"gotoKeyInfo(dummyObj)\"\r\n                                            class=\"item-wrapper\"\r\n                                            >\r\n                                            <div class=\"grow selected\">\r\n                                              <div class=\"inside-grow-content\">\r\n                                                <div class=\"card_name font14 bold greycolor montserrat\">\r\n                                                  {{ dummyObj?.segmentName }}\r\n                                                </div>\r\n                                                <div class=\"card-value\">\r\n                                                  <div\r\n                                                    class=\"card_value\"\r\n                                                    [class.bg-up]=\"dummyObj?.prevChange > 0\"\r\n                                                    [class.bg-down]=\"dummyObj.prevChange < 0\"\r\n                                                    >\r\n                                                    {{ dummyObj.LTP | segment : segmentId }}\r\n                                                  </div>\r\n                                                  <div class=\"card_smallfont  {{ dummyObj?.color }}\">\r\n                                                    {{ dummyObj?.difference | segment : segmentId }}\r\n                                                    <i class=\"fa {{ dummyObj?.arrow }}\"></i>\r\n                                                    <span class=\"change\">\r\n                                                      ({{ dummyObj?.percent | value : \"1.2-2\" }} %)\r\n                                                    </span>\r\n                                                  </div>\r\n                                                </div>\r\n                                              </div>\r\n                                            </div>\r\n                                          </div>\r\n                                        }\r\n                                        @if (!showDummyObj) {\r\n                                          <div class=\"card-lists\">\r\n                                            <!-- <div *ngFor=\"let item of mapTokenArray\" class=\"item-wrapper\">\r\n                                            <div *ngIf=\"item != undefined\" (click)=\"gotoKeyInfo(item)\">\r\n                                              <div class=\"grow\" [class.selected]=\"item.selectedSegment === true\">\r\n                                                <div class=\"inside-grow-content\">\r\n                                                  <div class=\"card_name\">{{item.segmentName}}</div>\r\n                                                  <div class=\"card_value \">{{item.LTP | segment : segmentId}}</div>\r\n                                                  <div class=\"font12  {{item.color}}\">{{item.difference | segment : segmentId}} ({{item.percent | segment : segmentId}}%)\r\n                                                    <i class=\"fa {{item.arrow}}\"></i>\r\n                                                  </div>\r\n                                                </div>\r\n                                              </div>\r\n                                            </div>\r\n                                          </div> -->\r\n                                          <ngu-carousel\r\n                                            #carousel\r\n                                            [inputs]=\"carouselTile\"\r\n                                            class=\"col-xs-12 segment-slide padding-0\"\r\n                                            [dataSource]=\"mapTokenArray\"\r\n                                            >\r\n                                            <ngu-tile *nguCarouselDef=\"let Tile; let i = index\" class=\"item\">\r\n                                              <div class=\"tile\">\r\n                                                <div class=\"item-wrapper\">\r\n                                                  <div (click)=\"gotoKeyInfo(Tile)\">\r\n                                                    <div\r\n                                                      class=\"grow selected\"\r\n                                                      [class.selected]=\"Tile.selectedSegment === true\"\r\n                                                      >\r\n                                                      <div class=\"inside-grow-content\">\r\n                                                        <div class=\"card_name\">{{ Tile.segmentName }}</div>\r\n                                                        <div class=\"card-value\">\r\n                                                          <div\r\n                                                            class=\"card_value\"\r\n                                                            [class.bg-up]=\"Tile.prevChange > 0\"\r\n                                                            [class.bg-down]=\"Tile.prevChange < 0\"\r\n                                                            >\r\n                                                            {{ Tile.LTP | segment : segmentId }}\r\n                                                          </div>\r\n                                                          <div class=\"font12 card_smallfont {{ Tile.color }}\">\r\n                                                            {{ Tile.difference | segment : segmentId }}\r\n                                                            <!-- <i class=\"fa {{Tile.arrow}}\"></i> -->\r\n                                                            <span class=\"change\"\r\n                                                              >({{ Tile.percent | value : \"1.2-2\" }} %)\r\n                                                            </span>\r\n                                                          </div>\r\n                                                        </div>\r\n                                                      </div>\r\n                                                    </div>\r\n                                                  </div>\r\n                                                </div>\r\n                                              </div>\r\n                                            </ngu-tile>\r\n                                            <button\r\n                                              NguCarouselPrev\r\n                                              class=\"slider-btn leftRs\"\r\n                                              name=\"prev-btn\"\r\n                                              aria-label=\"Previous\"\r\n                                              >\r\n                                              <i class=\"icon-angle-left\"></i>\r\n                                            </button>\r\n                                            <button\r\n                                              NguCarouselNext\r\n                                              class=\"slider-btn rightRs\"\r\n                                              name=\"next-btn\"\r\n                                              aria-label=\"Next\"\r\n                                              >\r\n                                              <i class=\"icon-angle-right\"></i>\r\n                                            </button>\r\n                                            <ul class=\"myPoint\" NguCarouselPoint>\r\n                                              @for (\r\n                                                caroItem of carousel.pointNumbers; track\r\n                                                caroItem; let j = $index) {\r\n                                                <li\r\n                                                  [class.active]=\"j == carousel.activePoint\"\r\n                                                  (click)=\"carousel.moveTo(j)\"\r\n                                                ></li>\r\n                                              }\r\n                                            </ul>\r\n                                          </ngu-carousel>\r\n                                        </div>\r\n                                      }\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"clearfix\"></div>\r\n                          </div>\r\n\r\n                          @if (showScripInfo) {\r\n                            <div class=\"dialog\">\r\n                              <div class=\"dialog-content\">\r\n                                <div class=\"dialog-header clearfix\">\r\n                                  <div class=\"col-md-12\">\r\n                                    <h4>\r\n                                      {{\r\n                                      scripInfo?.SegmentId != 1 && scripInfo?.SegmentId != 3\r\n                                      ? \"Contract Info\"\r\n                                      : \"Security Info\"\r\n                                      }}\r\n                                    </h4>\r\n                                  </div>\r\n                                  <!-- <span class=\"close-btn\" (click)=\"closeSecurityInfo()\">\r\n                                  <i class=\"fa fa-close\"></i>\r\n                                </span> -->\r\n                              </div>\r\n                              <div class=\"dialog-section clearfix script-details\">\r\n                                <div class=\"col-sm-4\">\r\n                                  <label>SCRIP</label>\r\n                                  <p>{{ scripInfo?.Symbol }}</p>\r\n                                </div>\r\n                                <div class=\"col-sm-4\">\r\n                                  <label>SCRIP CODE</label>\r\n                                  <p>{{ scripInfo?.Token }}</p>\r\n                                </div>\r\n                                <div class=\"col-sm-4\">\r\n                                  <label>DESCRIPTION</label>\r\n                                  <p>{{ scripInfo?.SecDesc }}</p>\r\n                                </div>\r\n                                @if (scripInfo?.OT == 'CE' || scripInfo?.OT == 'PE') {\r\n                                  <div\r\n                                    class=\"col-sm-4\"\r\n                                    >\r\n                                    <label>OPTION TYPE</label>\r\n                                    <p>{{ scripInfo?.OT }}</p>\r\n                                  </div>\r\n                                }\r\n                                @if (scripInfo?.SegmentId == 1 || scripInfo?.SegmentId == 3) {\r\n                                  <div\r\n                                    class=\"col-sm-4\"\r\n                                    >\r\n                                    <label>SERIES</label>\r\n                                    <p>{{ scripInfo?.Series }}</p>\r\n                                  </div>\r\n                                }\r\n                                <div class=\"col-sm-4\">\r\n                                  <label>PRICE TICK</label>\r\n                                  <p>\r\n                                    {{\r\n                                    scripInfo?.PriceTick / scripInfo?.PriceDivisor || 0\r\n                                    | segment : segmentId\r\n                                    }}\r\n                                  </p>\r\n                                </div>\r\n                                <div class=\"col-sm-4\">\r\n                                  <label>MARKET LOT</label>\r\n                                  <p>{{ scripInfo?.MarketLot | value : \"1.0-0\" }}</p>\r\n                                </div>\r\n                                @if (scripInfo?.BasePrice != 0) {\r\n                                  <div class=\"col-sm-4\">\r\n                                    <label>BASE PRICE</label>\r\n                                    <p>\r\n                                      {{\r\n                                      scripInfo?.BasePrice / scripInfo?.PriceDivisor || 0\r\n                                      | segment : segmentId\r\n                                      }}\r\n                                    </p>\r\n                                  </div>\r\n                                }\r\n                                @if (scripInfo?.QtyUnit != '') {\r\n                                  <div class=\"col-sm-4\">\r\n                                    <label>QTY UNIT</label>\r\n                                    <p>{{ scripInfo?.QtyUnit }}</p>\r\n                                  </div>\r\n                                }\r\n                                @if (scripInfo?.SegmentId == 1 || scripInfo?.SegmentId == 3) {\r\n                                  <div\r\n                                    class=\"col-sm-4\"\r\n                                    >\r\n                                    <label>FACE VALUE</label>\r\n                                    <p>\r\n                                      {{\r\n                                      scripInfo?.FaceValue / scripInfo?.PriceDivisor | segment : segmentId\r\n                                      }}\r\n                                    </p>\r\n                                  </div>\r\n                                }\r\n                                @if (scripInfo?.SegmentId == 1 || scripInfo?.SegmentId == 3) {\r\n                                  <div\r\n                                    class=\"col-sm-4\"\r\n                                    >\r\n                                    <label>VAR MARGIN</label>\r\n                                    <p>\r\n                                      {{\r\n                                      scripInfo?.VarMargin / scripInfo?.PriceDivisor | segment : segmentId\r\n                                      }}\r\n                                      %\r\n                                    </p>\r\n                                  </div>\r\n                                }\r\n                                <div class=\"col-sm-4\">\r\n                                  <label>CIRCUIT RANGE</label>\r\n                                  <p>\r\n                                    {{\r\n                                    scripInfo?.LowPriceRange / scripInfo?.PriceDivisor || 0\r\n                                    | segment : segmentId\r\n                                    }}\r\n                                    -\r\n                                    {{\r\n                                    scripInfo?.HighPriceRange / scripInfo?.PriceDivisor || 0\r\n                                    | segment : segmentId\r\n                                    }}\r\n                                  </p>\r\n                                </div>\r\n                                @if (scripInfo?.MaxOrderLots) {\r\n                                  <div class=\"col-sm-4\">\r\n                                    <label>MAX ORDER SIZE</label>\r\n                                    <p>{{ scripInfo?.MaxOrderLots | value : \"1.0-0\" }}</p>\r\n                                  </div>\r\n                                }\r\n                                <!-- <div *ngIf=\"scripInfo?.SegmentId == 1 || scripInfo?.SegmentId == 3\" class=\"col-sm-4\">\r\n                                <label>GSM CATEGORY</label>\r\n                                <p>{{(scripInfo?.GSMCategory > 0)?'YES':'NO'}}{{(scripInfo?.GSMCategory >= 1 && scripInfo?.GSMCategory\r\n                                <=6 )?( '(' +scripInfo?.GSMCategory+ ')' ): '' }}</p>\r\n                              </div> -->\r\n                              @if (\r\n                                [1, 3].indexOf(scripInfo?.SegmentId) > -1 &&\r\n                                (scripInfo?.GSMCategory != null ||\r\n                                scripInfo?.GSMCategory != undefined)\r\n                                ) {\r\n                                <div\r\n                                  class=\"col-sm-4\"\r\n                                  >\r\n                                  <label>ASM/GSM</label>\r\n                                  <p>\r\n                                    {{\r\n                                    utilsService.gsmMessages[scripInfo?.SegmentId][\r\n                                    scripInfo?.GSMCategory\r\n                                    ]?.remark || \"No\"\r\n                                    }}\r\n                                  </p>\r\n                                </div>\r\n                              }\r\n                              <!-- added Delivery percent (27/04/2021) -->\r\n                              @if ([1, 3].indexOf(scripInfo?.SegmentId) > -1) {\r\n                                <div class=\"col-sm-4\">\r\n                                  <label>Delivery %</label>\r\n                                  <!-- if deliver % less than and equal to 0 then show '-'(27/07/2021) -->\r\n                                  <p>\r\n                                    {{\r\n                                    scripInfo?.DeliveryPercent <= 0\r\n                                    ? \"-\"\r\n                                    : (scripInfo?.DeliveryPercent | segment : segmentId)\r\n                                    }}\r\n                                  </p>\r\n                                </div>\r\n                              }\r\n                              <div class=\"clearfix\"></div>\r\n                              @if (scripInfo?.SegmentId != 1 && scripInfo?.SegmentId != 3) {\r\n                                <div\r\n                                  class=\"col-sm-6\"\r\n                                  >\r\n                                  <label>CONTRACT START DATE</label>\r\n                                  <p>\r\n                                    {{\r\n                                    scripInfo?.ContractStartDate == \"01-Jan-80 00:00:00\"\r\n                                    ? \"NA\"\r\n                                    : scripInfo?.ContractStartDate\r\n                                    }}\r\n                                  </p>\r\n                                </div>\r\n                              }\r\n                              @if (scripInfo?.SegmentId != 1 && scripInfo?.SegmentId != 3) {\r\n                                <div\r\n                                  class=\"col-sm-6\"\r\n                                  >\r\n                                  <label>CONTRACT END DATE</label>\r\n                                  <p>\r\n                                    {{\r\n                                    scripInfo?.ContractEndDate == \"01-Jan-80 00:00:00\"\r\n                                    ? \"NA\"\r\n                                    : scripInfo?.ContractEndDate\r\n                                    }}\r\n                                  </p>\r\n                                </div>\r\n                              }\r\n                              @if (\r\n                                scripInfo?.SegmentId != 2 &&\r\n                                scripInfo?.SegmentId != 1 &&\r\n                                scripInfo?.SegmentId != 3 &&\r\n                                scripInfo?.SegmentId != 13 &&\r\n                                scripInfo?.SegmentId != 4 &&\r\n                                scripInfo?.SegmentId != 38 &&\r\n                                scripInfo?.SegmentId != 7\r\n                                ) {\r\n                                <div\r\n                                  class=\"col-sm-6\"\r\n                                  >\r\n                                  <label>TENDER START DATE</label>\r\n                                  <p>\r\n                                    {{\r\n                                    scripInfo?.TenderStartDate == \"01-Jan-80 00:00:00\"\r\n                                    ? \"NA\"\r\n                                    : scripInfo?.TenderStartDate\r\n                                    }}\r\n                                  </p>\r\n                                </div>\r\n                              }\r\n                              @if (\r\n                                scripInfo?.SegmentId != 2 &&\r\n                                scripInfo?.SegmentId != 1 &&\r\n                                scripInfo?.SegmentId != 3 &&\r\n                                scripInfo?.SegmentId != 13 &&\r\n                                scripInfo?.SegmentId != 4 &&\r\n                                scripInfo?.SegmentId != 38 &&\r\n                                scripInfo?.SegmentId != 7\r\n                                ) {\r\n                                <div\r\n                                  class=\"col-sm-6\"\r\n                                  >\r\n                                  <label>TENDER END DATE</label>\r\n                                  <p>\r\n                                    {{\r\n                                    scripInfo?.TenderEndDate == \"01-Jan-80 00:00:00\"\r\n                                    ? \"NA\"\r\n                                    : scripInfo?.TenderEndDate\r\n                                    }}\r\n                                  </p>\r\n                                </div>\r\n                              }\r\n                              @if (\r\n                                scripInfo?.SegmentId != 2 &&\r\n                                scripInfo?.SegmentId != 1 &&\r\n                                scripInfo?.SegmentId != 3 &&\r\n                                scripInfo?.SegmentId != 4 &&\r\n                                scripInfo?.SegmentId != 38 &&\r\n                                scripInfo?.SegmentId != 13\r\n                                ) {\r\n                                <div\r\n                                  class=\"col-sm-6\"\r\n                                  >\r\n                                  <label>DELIVERY START DATE</label>\r\n                                  <p>\r\n                                    {{\r\n                                    scripInfo?.DeliveryStartDate == \"01-Jan-80 00:00:00\"\r\n                                    ? \"NA\"\r\n                                    : scripInfo?.DeliveryStartDate\r\n                                    }}\r\n                                  </p>\r\n                                </div>\r\n                              }\r\n                              @if (\r\n                                scripInfo?.SegmentId != 2 &&\r\n                                scripInfo?.SegmentId != 1 &&\r\n                                scripInfo?.SegmentId != 3 &&\r\n                                scripInfo?.SegmentId != 4 &&\r\n                                scripInfo?.SegmentId != 38 &&\r\n                                scripInfo?.SegmentId != 13\r\n                                ) {\r\n                                <div\r\n                                  class=\"col-sm-6\"\r\n                                  >\r\n                                  <label>DELIVERY END DATE</label>\r\n                                  <p>\r\n                                    {{\r\n                                    scripInfo?.DeliveryEndDate == \"01-Jan-80 00:00:00\"\r\n                                    ? \"NA\"\r\n                                    : scripInfo?.DeliveryEndDate\r\n                                    }}\r\n                                  </p>\r\n                                </div>\r\n                              }\r\n                              @if (scripInfo?.SegmentId != 1 && scripInfo?.SegmentId != 3) {\r\n                                <div\r\n                                  class=\"col-sm-6\"\r\n                                  >\r\n                                  <label>MATURITY</label>\r\n                                  <p>\r\n                                    {{\r\n                                    scripInfo?.MaturityDate == \"01-Jan-80 00:00:00\"\r\n                                    ? \"NA\"\r\n                                    : scripInfo?.MaturityDate\r\n                                    }}\r\n                                  </p>\r\n                                </div>\r\n                              }\r\n                              @if (scripInfo?.SegmentId == 2 || scripInfo?.SegmentId == 4) {\r\n                                <div\r\n                                  class=\"col-sm-6\"\r\n                                  >\r\n                                  <label>EXPIRY DATE</label>\r\n                                  <p>\r\n                                    {{\r\n                                    scripInfo?.ExpiryDate == \"01-Jan-80 00:00:00\"\r\n                                    ? \"NA\"\r\n                                    : scripInfo?.ExpiryDate\r\n                                    }}\r\n                                  </p>\r\n                                </div>\r\n                              }\r\n                              @if (scripInfo?.OT == 'CE' || scripInfo?.OT == 'PE') {\r\n                                <div\r\n                                  class=\"col-sm-4\"\r\n                                  >\r\n                                  <label>STRIKE PRICE</label>\r\n                                  <p>\r\n                                    {{\r\n                                    scripInfo?.StrikePrice / scripInfo?.PriceDivisor || 0\r\n                                    | segment : segmentId\r\n                                    }}\r\n                                  </p>\r\n                                </div>\r\n                              }\r\n                              @if (scripInfo?.PriceUnit && scripInfo?.PriceUnit != '0  ') {\r\n                                <div\r\n                                  class=\"col-sm-6\"\r\n                                  >\r\n                                  <label>PRICE UNIT</label>\r\n                                  <p>{{ scripInfo?.PriceUnit }}</p>\r\n                                </div>\r\n                              }\r\n                              @if (scripInfo?.DeliveryUnit != '') {\r\n                                <div class=\"col-sm-6\">\r\n                                  <label>DELIVERY UNIT</label>\r\n                                  <p>{{ scripInfo?.DeliveryUnit }}</p>\r\n                                </div>\r\n                              }\r\n                              @if (isTr && scripInfo?.SegmentId != 1 && scripInfo?.SegmentId != 3) {\r\n                                <div\r\n                                  class=\"col-sm-6\"\r\n                                  >\r\n                                  <label>TER</label>\r\n                                  <p>\r\n                                    {{ scripInfo?.lowTradeRange | segment : segmentId }} -\r\n                                    {{ scripInfo?.highTradeRange | segment : segmentId }}\r\n                                  </p>\r\n                                </div>\r\n                              }\r\n                            </div>\r\n                            <div class=\"dialog-footer clearfix\">\r\n                              <button\r\n                                class=\"btn sell\"\r\n                                [showFocus]=\"showScripInfo\"\r\n                                (click)=\"closeSecurityInfo()\"\r\n                                >\r\n                                Close\r\n                              </button>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      }\r\n\r\n                      @if (showPreLogin) {\r\n                        <div class=\"dialog\">\r\n                          <div class=\"dialog-content\">\r\n                            <div class=\"dialog-header clearfix\">\r\n                              <div class=\"col-md-12\">\r\n                                <h4 class=\"popup-title\">\r\n                                  Oops,Looks like you are not logged in. Please Login for Moving\r\n                                  further.\r\n                                </h4>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"dialog-footer clearfix\">\r\n                              <button class=\"btn sell\" (click)=\"closePreLogin()\">Close</button>\r\n                              <button class=\"btn buy\" [showFocus]=\"showPreLogin\" (click)=\"login()\">\r\n                                Login\r\n                              </button>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      }\r\n\r\n                      <!--\r\n                      <div class=\"buySellMic\">\r\n                        <i\r\n                          class=\"w-icoen-bt fa fa-microphone\"\r\n                          title=\"Tap to voice search\"\r\n                          aria-hidden=\"true\"\r\n                          *ngIf=\" !isUserSpeaking\"\r\n                          (click)=\"startRecording()\"\r\n                        ></i>\r\n\r\n                        <i\r\n                          class=\" w-icoen-bt fa fa-dot-circle-o\"\r\n                          aria-hidden=\"true\"\r\n                          title=\"Stop Recording\"\r\n                          *ngIf=\" isUserSpeaking\"\r\n                          (click)=\"stopRecording()\"\r\n                          style=\"color: red;\"\r\n                        ></i>\r\n\r\n\r\n                      </div> -->\r\n";

/***/ })

}]);