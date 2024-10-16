(self["webpackChunkjiffy_upgraded"] = self["webpackChunkjiffy_upgraded"] || []).push([[7181],{

/***/ 10650:
/*!**************************************!*\
  !*** ./src/app/pipes/search.pipe.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchPipe: () => (/* binding */ SearchPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);


let SearchPipe = class SearchPipe {
  transform(value, args) {
    if (!args) {
      return value;
    }
    return value.filter(val => {
      let rVal = val.Symbol.toLocaleLowerCase().includes(args.trim()) || val.Symbol.includes(args.trim()) || val.SecDesc.toLocaleLowerCase().includes(args.trim()) || val.SecDesc.includes(args.trim());
      return rVal;
    });
  }
};
SearchPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
  name: 'search',
  standalone: true
})], SearchPipe);


/***/ }),

/***/ 4928:
/*!***************************************************!*\
  !*** ./src/app/services/rest/strategy.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StrategyService: () => (/* binding */ StrategyService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 21626);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var src_app_utility_requestFactory_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/utility/requestFactory.utils */ 13991);
/* harmony import */ var _api_urls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api-urls */ 26702);
/* harmony import */ var _error_handler_jiffy_error_handler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../error-handler/jiffy-error-handler.service */ 9676);
/* harmony import */ var _shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared-data/shared-data.service */ 46013);
/* harmony import */ var _sockets_broadcaster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sockets/broadcaster */ 28510);








let StrategyService = class StrategyService {
  constructor(http, urls, shared, errorHandler, broadcaster) {
    this.http = http;
    this.urls = urls;
    this.shared = shared;
    this.errorHandler = errorHandler;
    this.broadcaster = broadcaster;
    let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({
      "Content-Type": "application/json",
      accept: "*/*"
      // 'from': 'Web_' + location.host + '_' + this.urls.getVersion()
    });
    this.options = {
      headers: headers
    };
    this.requestServices = {
      shared: this.shared,
      errorHandler: this.errorHandler,
      http: this.http,
      broadcaster: this.broadcaster
    };
  }
  /** HTTP rest method to get past PV breakout */
  getPVBreakouts(request, isBtst, token) {
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({
      "Content-Type": "application/json",
      accept: "*/*",
      Authorization: "Bearer " + token
      // 'from': 'Web_' + location.host + '_' + this.urls.getVersion()
    });
    const options = {
      headers: headers
    };
    if (this.shared.isInternetAvailable) {
      this.shared.isServiceHit = true;
      const url = isBtst ? this.urls.getBTSTMessageURL() : this.urls.getPVBreakoutURL();
      return src_app_utility_requestFactory_utils__WEBPACK_IMPORTED_MODULE_0__.RequestFactory.requestHandler(this.requestServices, url, 'post', request, options, false);
    }
  }
  static {
    this.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient
    }, {
      type: _api_urls__WEBPACK_IMPORTED_MODULE_1__.APIURLs
    }, {
      type: _shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__.SharedDataService
    }, {
      type: _error_handler_jiffy_error_handler_service__WEBPACK_IMPORTED_MODULE_2__.JiffyErrorHandler
    }, {
      type: _sockets_broadcaster__WEBPACK_IMPORTED_MODULE_4__.Broadcaster
    }];
  }
};
StrategyService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)(), (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient, _api_urls__WEBPACK_IMPORTED_MODULE_1__.APIURLs, _shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__.SharedDataService, _error_handler_jiffy_error_handler_service__WEBPACK_IMPORTED_MODULE_2__.JiffyErrorHandler, _sockets_broadcaster__WEBPACK_IMPORTED_MODULE_4__.Broadcaster])], StrategyService);


/***/ }),

/***/ 1145:
/*!*********************************************!*\
  !*** ./src/app/services/sse/sse.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SseService: () => (/* binding */ SseService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 71985);
/* harmony import */ var _services_api_urls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/api-urls */ 26702);




let SseService = class SseService {
  constructor(_zone, urls) {
    this._zone = _zone;
    this.urls = urls;
  }
  getServerSentEvent(type, timeVariation) {
    this.subscriptionType = type;
    var url = this.subscriptionType == 1 ? this.urls.getFiveMinPVURL() : this.subscriptionType == 2 ? this.urls.getFifteenMinPVURL() : this.subscriptionType == 3 ? this.urls.getFiveMinBTSTURL() : this.subscriptionType == 4 ? this.urls.getIndexBreakoutURL() : this.subscriptionType == 5 ? this.urls.getIntradayOISpurtsURL() : this.urls.getSupertrendURL(timeVariation);
    return rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable.create(observer => {
      this.eventSrc = this.getEventSource(url);
      this.eventSrc.onmessage = event => {
        this._zone.run(() => {
          // 
          observer.next(event);
        });
      };
      this.eventSrc.onerror = error => {
        this._zone.run(() => {
          console.error('SSE ERROR');
          observer.error(error);
        });
      };
      this.eventSrc.addEventListener('message', event => {
        // let message = JSON.parse(event['data']);
        // 
      });
      this.eventSrc.addEventListener('open', event => {});
      this.eventSrc.onopen = event => {
        this._zone.run(() => {});
      };
      this.eventSrc.addEventListener('connected', event => {});
      switch (this.subscriptionType) {
        case 1:
          this.eventSrc.addEventListener('FiveMinPVBreakout', event => {
            let message = JSON.parse(event['data']);
            // 
            observer.next(message);
          });
          break;
        case 2:
          this.eventSrc.addEventListener('FifteenMinPVBreakout', event => {
            let message = JSON.parse(event['data']);
            observer.next(message);
          });
          break;
        case 3:
          this.eventSrc.addEventListener('FiveMinBTSTPVBreakout', event => {
            let message = JSON.parse(event['data']);
            observer.next(message);
          });
          break;
        case 5:
          this.eventSrc.addEventListener('IntradayOISpurts', event => {
            let message = JSON.parse(event['data']);
            observer.next(message);
          });
          break;
        case 6:
          if (timeVariation) {
            this.eventSrc.addEventListener('FifteenMinSTBreakout', event => {
              let message = JSON.parse(event['data']);
              observer.next(message);
            });
          } else {
            this.eventSrc.addEventListener('FiveMinSTBreakout', event => {
              let message = JSON.parse(event['data']);
              observer.next(message);
            });
          }
          break;
        default:
          break;
      }
    });
  }
  getEventSource(url) {
    return new EventSource(url);
  }
  closeEventSource() {
    this.eventSrc.close();
  }
  static {
    this.ctorParameters = () => [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }, {
      type: _services_api_urls__WEBPACK_IMPORTED_MODULE_0__.APIURLs
    }];
  }
};
SseService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
  providedIn: 'root'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone, _services_api_urls__WEBPACK_IMPORTED_MODULE_0__.APIURLs])], SseService);


/***/ }),

/***/ 45014:
/*!*****************************************************************!*\
  !*** ./src/app/strategy/price-volume/price-volume.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PriceVolumeComponent: () => (/* binding */ PriceVolumeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _price_volume_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./price-volume.component.html?ngResource */ 13698);
/* harmony import */ var _price_volume_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./price-volume.component.scss?ngResource */ 18754);
/* harmony import */ var _price_volume_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_price_volume_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/animations */ 49969);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 18530);
/* harmony import */ var src_app_services_rest_strategy_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/rest/strategy.service */ 4928);
/* harmony import */ var src_app_services_sockets_socket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/sockets/socket.service */ 6312);
/* harmony import */ var src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/utils/utils.service */ 89893);
/* harmony import */ var _services_sse_sse_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/sse/sse.service */ 1145);
/* harmony import */ var _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../assets/libs/esm-moment.min.js */ 29483);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 28460);
/* harmony import */ var _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/search.pipe */ 10650);
/* harmony import */ var _pipes_segment_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pipes/segment.pipe */ 39995);
/* harmony import */ var _pipes_value_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../pipes/value.pipe */ 50615);
/* harmony import */ var _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../services/shared-data/shared-data.service */ 46013);













/** Import Moment JS Library*/
// var moment: any = require();

//import { PushNotificationsService } from 'ng-push';





let PriceVolumeComponent = class PriceVolumeComponent {
  constructor(location, activatedRoute, router, sseService, rest, utilsService, socketService, shared, formBuilder) {
    this.location = location;
    this.activatedRoute = activatedRoute;
    this.router = router;
    this.sseService = sseService;
    this.rest = rest;
    this.utilsService = utilsService;
    this.socketService = socketService;
    this.shared = shared;
    this.formBuilder = formBuilder;
    /** scrip searched */
    this.scrip = '';
    /** Object for todays summary count */
    this.summary = {};
    this.userInactive = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subject();
    this.inActive = false;
    /** Price divisor */
    this.priceDivisor = 100;
    /** active tab index */
    this.activeTabIndex = 1;
    this.intervalSubscription = null;
    this.actionToggle = false;
    this.btstToggle = false;
    this.getConfig();
    this.resetData();
    this.dates = {
      'min': new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_6__["default"]('01-03-2021').toDate(),
      'max': new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_6__["default"]().toDate()
    };
    this.dateConfig = {
      startDate: (0,_assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_6__["default"])().format('DD-MM-YYYY'),
      endDate: (0,_assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_6__["default"])().format('DD-MM-YYYY'),
      selected: 'today'
    };
  }
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.activeTabIndex = params.activeTab || 1;
      this.subscribeSSE();
      this.getPVBreakoutData();
      this.intervalSubscription = setInterval(() => {
        this.getPVBreakoutData(true);
      }, 180000);
      this.getSocketSubscription();
      document.querySelector('.maincontainer ').classList.add("pvClass");
    });
    this.setTimeout();
    /** if user inactive for 5 min set the flag to true */
    this.userInactive.subscribe(() => {
      this.inActive = true;
    });
  }
  ngOnDestroy() {
    if (this.intervalSubscription) {
      clearInterval(this.intervalSubscription);
    }
    /** on destroy unsubscribe the subscription */
    if (this.scripSubscription) this.scripSubscription.unsubscribe();
    this.sseService.closeEventSource();
    document.querySelector('.maincontainer ').classList.remove("pvClass");
  }
  processData(data) {
    if (data.data == "dummy") return;
    let isBTST = data.SegmentId ? this.activeTabIndex == 3 && (this.btstToggle ? [2] : [1, 3]).indexOf(data.SegmentId) > -1 : false;
    if (this.activeTabIndex != 3 || isBTST) {
      if ((this.activeTabIndex == 3 ? this.btstToggle ? [21, 31] : [1] : [1, 21, 31, 51]).indexOf(data.TACode) > -1) {
        let newProcessedData = this.getProcessedData(data);
        //unshift so that it is the latest entry in array
        this.callsData.unshift(newProcessedData);
        //increment active count
        this.summary.active++;
        //subscribe to the new scrip
        this.utilsService.subscribeMultitouchline([newProcessedData]);
        //local push notification for the latest alert /call
        this.notify(newProcessedData);
      } else if (this.activeTabIndex == 3 ? this.btstToggle ? [22, 32, 23, 33, 24, 34, 26, 27, 28, 52, 54, 57] : [2, 3, 4, 6, 7, 8] : [2, 22, 32, 3, 23, 33, 4, 24, 34, 6, 26, 27, 7, 8, 28, 52, 54, 57].indexOf(data.TACode) > -1) {
        this.updateStatusAndNotify(data);
      }
    }
  }
  /** Makes the rest call to get the PV breakout data */
  getPVBreakoutData(noSub) {
    //  let encSessionId = localStorage.getItem("session");
    let Jiffytoken = localStorage.getItem("Jiffytoken");
    let sessionId = "";
    let token = "";
    if (token) {
      //  sessionId = atob(encSessionId);
      token = "Bearer " + this.utilsService.getSessionId();
    }
    let reqObj = {
      'UserId': this.utilsService.getUserId(),
      'SessionId': this.utilsService.getSessionId(),
      //"",//token,//sessionId,
      'Type': this.activeTabIndex == 3 ? this.btstToggle ? "FO" : "EQ" : this.config[this.activeTabIndex].val,
      // 'Type': this.activeTabIndex == 1 ? 'FiveMinPVBreakout' : this.activeTabIndex == 2 ? 'FifteenMinPVBreakout'//to be removed
      //        : this.activeTabIndex == 3 ?'FiveMinBTSTPVBreakout' : (this.activeTabIndex == 4 ?'IndexBreakout':(this.activeTabIndex == 5?'IntradayOISpurts':(this.actionToggle?'FifteenMinSTBreakout':'FiveMinSTBreakout'))),
      "StartDate": this.dateConfig.startDate,
      //moment().subtract(5, 'days').format('DD-MM-YYYY'), //from date
      "EndDate": this.dateConfig.endDate,
      //moment().format('DD-MM-YYYY'), //to date
      "Start": 0,
      "Count": 500,
      //hardcoded for now //TODO
      "status": ""
    };
    this.rest.getPVBreakouts(reqObj, this.activeTabIndex == 3, token).subscribe(data => {
      if (data.Status != 'SUCCESS' || !data.Response) return;
      this.resetData();
      this.processPVBreakoutData(data.Response, noSub);
    }, err => {
      this.resetData();
    });
  }
  /**
  * open sell drawer , when user click buy sell for the selected scrip
  * @param event open sell  drawer
  */
  sellItem(item) {
    if (this.utilsService.isAuthorized()) {
      /*   this.scripInfo.isTradingAllowed = this.utilsService.isSegmentAllowed(this.chart.SegmentId);
        this.scripInfo.LTP = this.socketData.Close; */
      //  item.SecName =item.SecName.indexOf('|') > -1 ?item.SecName.substring(0,item.SecName.indexOf('|') + 1) +item.segmentName :item.SecName
      item.SecName = item.SecDesc;
      item.triggerPrice = item.Trigger;
      this.utilsService.broadcast('openBuySellDrawer', {
        'scrip': item,
        'action': 2
      });
    } else {
      //this.showPreLoginModal();
    }
  }
  /**
  * open buy drawer , when user click buy button for the selected scrip
  * @param event open buy  drawer
  */
  buyItem(item) {
    if (this.utilsService.isAuthorized()) {
      item.SecName = item.SecDesc;
      item.triggerPrice = item.Trigger;
      //item.SecName.indexOf('|') > -1 ?item.SecName.substring(0,item.SecName.indexOf('|') + 1) +item.segmentName :item.SecName
      this.utilsService.broadcast('openBuySellDrawer', {
        'scrip': item,
        'action': 1
      });
    } else {
      //  this.showPreLoginModal();
    }
  }
  /**
  * Sets the config
  */
  getConfig() {
    this.config = {
      1: {
        val: 'FiveMinPVBreakout',
        statusCodes: {
          1: {
            slug: 'active',
            label: 'Active'
          },
          2: {
            slug: 'target1',
            label: 'Target 1 Achieved'
          },
          3: {
            slug: 'target2',
            label: 'Target 2 Achieved'
          },
          4: {
            slug: 'sl',
            label: 'SL Triggered'
          },
          5: {
            slug: 'target3',
            label: 'Target 3 Achieved'
          },
          6: {
            slug: 'exit',
            label: 'Exit',
            ignoreIncrement: true
          },
          8: {
            slug: 'bookPartProfit',
            label: 'Book Part Profit',
            ignoreIncrement: true
          },
          7: {
            slug: 'bookProfit',
            label: 'Book Profit',
            ignoreIncrement: true
          },
          51: {
            slug: 'active',
            label: 'Active'
          },
          52: {
            slug: 'target1',
            label: 'Target 1 Achieved'
          },
          54: {
            slug: 'sl',
            label: 'SL Triggered'
          },
          56: {
            slug: 'exit',
            label: 'Exit',
            ignoreIncrement: true
          },
          57: {
            slug: 'bookProfit',
            label: 'Book Profit',
            ignoreIncrement: true
          }
        }
      },
      2: {
        val: 'FifteenMinPVBreakout',
        statusCodes: {
          1: {
            slug: 'active',
            label: 'Active'
          },
          2: {
            slug: 'target1',
            label: 'Target 1 Achieved'
          },
          3: {
            slug: 'target2',
            label: 'Target 2 Achieved'
          },
          4: {
            slug: 'sl',
            label: 'SL Triggered'
          },
          5: {
            slug: 'target3',
            label: 'Target 3 Achieved'
          },
          6: {
            slug: 'exit',
            label: 'Exit',
            ignoreIncrement: true
          },
          8: {
            slug: 'bookPartProfit',
            label: 'Book Part Profit',
            ignoreIncrement: true
          },
          7: {
            slug: 'bookProfit',
            label: 'Book Profit',
            ignoreIncrement: true
          },
          51: {
            slug: 'active',
            label: 'Active'
          },
          52: {
            slug: 'target1',
            label: 'Target 1 Achieved'
          },
          54: {
            slug: 'sl',
            label: 'SL Triggered'
          },
          56: {
            slug: 'exit',
            label: 'Exit',
            ignoreIncrement: true
          },
          57: {
            slug: 'bookProfit',
            label: 'Book Profit',
            ignoreIncrement: true
          }
        }
      },
      3: {
        val: 'FiveMinBTSTPVBreakout',
        statusCodes: {
          1: {
            slug: 'active',
            label: 'Active'
          },
          2: {
            slug: 'target1',
            label: 'Target 1 Achieved'
          },
          3: {
            slug: 'target2',
            label: 'Target 2 Achieved'
          },
          4: {
            slug: 'sl',
            label: 'SL Triggered'
          },
          5: {
            slug: 'target3',
            label: 'Target 3 Achieved'
          },
          6: {
            slug: 'exit',
            label: 'Exit',
            ignoreIncrement: true
          },
          8: {
            slug: 'bookPartProfit',
            label: 'Book Part Profit',
            ignoreIncrement: true
          },
          7: {
            slug: 'bookProfit',
            label: 'Book Profit',
            ignoreIncrement: true
          },
          31: {
            slug: 'active',
            label: 'Active'
          },
          32: {
            slug: 'target1',
            label: 'Target 1 Achieved'
          },
          33: {
            slug: 'target2',
            label: 'Target 2 Achieved'
          },
          34: {
            slug: 'sl',
            label: 'SL Triggered'
          },
          35: {
            slug: 'target3',
            label: 'Target 3 Achieved'
          },
          21: {
            slug: 'active',
            label: 'Active'
          },
          22: {
            slug: 'target1',
            label: 'Target 1 Achieved'
          },
          23: {
            slug: 'target2',
            label: 'Target 2 Achieved'
          },
          24: {
            slug: 'sl',
            label: 'SL Triggered'
          },
          26: {
            slug: 'exit',
            label: 'Exit',
            ignoreIncrement: true
          },
          27: {
            slug: 'bookProfit',
            label: 'Book Profit',
            ignoreIncrement: true
          },
          28: {
            slug: 'bookPartProfit',
            label: 'Book Part Profit',
            ignoreIncrement: true
          },
          51: {
            slug: 'active',
            label: 'Active'
          },
          52: {
            slug: 'target1',
            label: 'Target 1 Achieved'
          },
          54: {
            slug: 'sl',
            label: 'SL Triggered'
          },
          56: {
            slug: 'exit',
            label: 'Exit',
            ignoreIncrement: true
          },
          57: {
            slug: 'bookProfit',
            label: 'Book Profit',
            ignoreIncrement: true
          }
        }
      },
      4: {
        val: 'IndexBreakout',
        statusCodes: {
          10: {
            slug: 'indexGenerated',
            label: 'Index Generated',
            ignoreIncrement: true
          },
          11: {
            slug: 'active',
            label: 'Active'
          },
          12: {
            slug: 'target1',
            label: 'Target 1 Achieved'
          },
          13: {
            slug: 'target2',
            label: 'Target 2 Achieved'
          },
          14: {
            slug: 'sl',
            label: 'SL Triggered'
          },
          15: {
            slug: 'exit',
            label: 'Exit',
            ignoreIncrement: true
          },
          51: {
            slug: 'active',
            label: 'Active'
          },
          52: {
            slug: 'target1',
            label: 'Target 1 Achieved'
          },
          54: {
            slug: 'sl',
            label: 'SL Triggered'
          },
          56: {
            slug: 'exit',
            label: 'Exit',
            ignoreIncrement: true
          },
          57: {
            slug: 'bookProfit',
            label: 'Book Profit',
            ignoreIncrement: true
          }
        }
      },
      5: {
        val: 'IntradayOISpurts',
        statusCodes: {
          31: {
            slug: 'active',
            label: 'Active'
          },
          32: {
            slug: 'target1',
            label: 'Target 1 Achieved'
          },
          33: {
            slug: 'target2',
            label: 'Target 2 Achieved'
          },
          34: {
            slug: 'sl',
            label: 'SL Triggered'
          },
          35: {
            slug: 'target3',
            label: 'Target 3 Achieved'
          },
          51: {
            slug: 'active',
            label: 'Active'
          },
          52: {
            slug: 'target1',
            label: 'Target 1 Achieved'
          },
          54: {
            slug: 'sl',
            label: 'SL Triggered'
          },
          56: {
            slug: 'exit',
            label: 'Exit',
            ignoreIncrement: true
          },
          57: {
            slug: 'bookProfit',
            label: 'Book Profit',
            ignoreIncrement: true
          }
        }
      },
      6: {
        val: this.actionToggle ? 'FifteenMinSTBreakout' : 'FiveMinSTBreakout',
        statusCodes: {
          21: {
            slug: 'active',
            label: 'Active'
          },
          22: {
            slug: 'target1',
            label: 'Target 1 Achieved'
          },
          23: {
            slug: 'target2',
            label: 'Target 2 Achieved'
          },
          24: {
            slug: 'sl',
            label: 'SL Triggered'
          },
          26: {
            slug: 'exit',
            label: 'Exit',
            ignoreIncrement: true
          },
          27: {
            slug: 'bookProfit',
            label: 'Book Profit',
            ignoreIncrement: true
          },
          28: {
            slug: 'bookPartProfit',
            label: 'Book Part Profit',
            ignoreIncrement: true
          },
          51: {
            slug: 'active',
            label: 'Active'
          },
          52: {
            slug: 'target1',
            label: 'Target 1 Achieved'
          },
          54: {
            slug: 'sl',
            label: 'SL Triggered'
          },
          56: {
            slug: 'exit',
            label: 'Exit',
            ignoreIncrement: true
          },
          57: {
            slug: 'bookProfit',
            label: 'Book Profit',
            ignoreIncrement: true
          }
        }
      }
    };
  }
  /** Processes the data received from API and subscribes the scrip for real time data */
  processPVBreakoutData(data, noSub) {
    data.forEach(element => {
      let processed = this.getProcessedData(element);
      // update summary count only if its todays data
      // if(moment(data.Time).isSame(moment().format('DD-MMM-YY HH:mm:ss'), 'day')) {
      //   if(data.StatusCode == 1) this.summary.active++;
      //   if(data.StatusCode == 2) this.summary.target1++;
      //   if(data.StatusCode == 3) this.summary.target2++;
      //   if(data.StatusCode == 4) this.summary.sl++;
      //   this.todaysData.push(data);
      // }
      this.allData.push(processed);
    });
    // this.callsData = this.isAllSelected ? this.allData : this.todaysData;
    this.callsData = this.allData;
    if (!noSub) this.utilsService.subscribeMultitouchline(this.callsData);
  }
  /** Subscribe to real time data */
  getSocketSubscription() {
    this.scripSubscription = this.socketService.broadcaster.on('watchlist').subscribe(res => {
      this.callsData.forEach((el, i) => {
        if (res[0]["1"] == el.SegmentId && res[0]["7"] == el.Token) {
          this.priceDivisor = this.utilsService.getDefaultPriceDivisor(res[0]["1"], res[0]["7"]);
          this.callsData[i].LTP = (Number(res[0]["8"]) || 0) / this.priceDivisor;
        }
      });
    });
  }
  /** Processes the raw data received from API to the desired data for display */
  getProcessedData(rawData) {
    let processedData;
    processedData = {
      Recommendation: '',
      Target1: 0,
      Target2: 0,
      StopLoss: 0,
      Symbol: '',
      SecDesc: '',
      Time: '',
      LTP: 0,
      Status: '',
      StatusCode: 0,
      companyPath: '',
      SegmentId: 0,
      Token: 0,
      updateTime: '',
      id: ''
    };
    if (this.activeTabIndex == 4) processedData['Level'] = 0;else {
      processedData['Target3'] = 0;
      processedData['Trigger'] = 0;
      processedData['EP'] = 0;
    }
    this.priceDivisor = this.utilsService.getDefaultPriceDivisor(rawData.Seg, rawData.Tok);
    processedData.Time = new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_6__["default"](rawData.ATime, 'DD-MM-YYYY HH:mm:ss').format('DD-MMM-YY HH:mm:ss');
    processedData.id = rawData.Id;
    processedData.Target1 = rawData.TP1 / this.priceDivisor;
    processedData.Target2 = rawData.TP2 / this.priceDivisor;
    processedData.Symbol = rawData.Sym || '';
    processedData.SecDesc = rawData.Name;
    processedData.StopLoss = rawData.SL / this.priceDivisor;
    processedData.SegmentId = rawData.Seg;
    processedData.Token = rawData.Tok;
    processedData.updateTime = new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_6__["default"](rawData.TATime, 'DD-MM-YYYY HH:mm:ss').format('DD-MMM-YY HH:mm:ss');
    processedData.StatusCode = rawData.TACode;
    let currentConfig = this.config[this.activeTabIndex].statusCodes[processedData.StatusCode];
    if (currentConfig) processedData.Status = currentConfig.label;
    if (currentConfig && !currentConfig.ignoreIncrement) this.summary[currentConfig.slug]++;
    let companyPath = '';
    if (this.activeTabIndex == 4) {
      processedData.Level = rawData.Level / this.priceDivisor;
      processedData.Recommendation = rawData.Side == 'B' ? 'BUY' : rawData.Side == 'S' ? 'SELL' : '';
      processedData.LTP = rawData.LTP / this.priceDivisor;
      companyPath = (rawData.Sym || rawData.Name || '').replace(/[\s|\&|\%]/g, '').toLowerCase();
    } else {
      processedData.Recommendation = rawData.Side == 'B' ? 'BUY' : rawData.Side == 'S' ? 'SELL' : '';
      processedData.EP = rawData.EP / this.priceDivisor;
      if (this.activeTabIndex != 6) processedData.Target3 = rawData.TP3 ? rawData.TP3 / this.priceDivisor : 0;
      if (this.activeTabIndex != 5 && this.activeTabIndex != 6 && !this.btstToggle) {
        /*   processedData.EP = rawData.EP / this.priceDivisor; */
        processedData.Trigger = rawData.TP / this.priceDivisor;
        processedData.Recommendation = rawData.HLType == 'High' ? 'BUY' : rawData.HLType == 'Low' ? 'SELL' : '';
      } else {
        processedData.Recommendation = rawData.Side == 'B' || rawData.Side == 'BUY' ? 'BUY' : rawData.Side == 'S' || rawData.Side == 'SELL' ? 'SELL' : '';
      }
      processedData.LTP = rawData.NHL / this.priceDivisor;
      companyPath = ([1, 3].indexOf(rawData.Seg) > -1 ? (rawData.Sym || '').replace(/[\s|\&|\%]/g, '').toLowerCase() : rawData.Name || '').replace(/[\s|\&|\%]/g, '').toLowerCase();
    }
    let urlPrefix = '/instrument/' + ([1, 2, 3].indexOf(rawData.Seg) > -1 ? 'equity/' : [5, 7].indexOf(rawData.Seg) > -1 ? 'commodity/' : 'currency/');
    processedData.companyPath = urlPrefix + companyPath + '/' + rawData.Seg + '/' + rawData.Tok;
    return processedData;
  }
  /**
   * Subscribe SSE
   */
  subscribeSSE() {
    this.sseService.getServerSentEvent(this.activeTabIndex, this.actionToggle).subscribe(data => {
      this.processData(data);
    });
  }
  /**
  * On click of refresh button, api is called as per tab , and toggle selected
  */
  refresh() {
    this.getPVBreakoutData();
  }
  /** Update status of Call */
  updateStatusAndNotify(data) {
    this.callsData.forEach((el, i) => {
      if (el.id == data.Id) {
        this.callsData[i].Status = this.config[this.activeTabIndex].statusCodes[data.TACode].label; //this.activeTabIndex !=4 ? this.getStatus(data.TACode) : this.getIndexBreakoutStatus(data.TACode);
        this.updateCount(data.TACode, this.callsData[i].StatusCode);
        this.callsData[i].StatusCode = data.TACode;
        this.callsData[i].updateTime = new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_6__["default"](data.TATime, 'DD-MM-YYYY HH:mm:ss').format('DD-MMM-YY HH:mm:ss');
        this.notify(this.callsData[i]);
        //this.activeTabIndex !=4 ? this.notify(this.callsData[i]) : this.notifyIndexBreakout(this.callsData[i]); //to be removed
      }
    });
  }
  /** Creates push notification content and displays */
  notify(data) {
    if (data.StatusCode == 10) return;
    let msg;
    let title;
    if (this.activeTabIndex != 4) {
      if (data.StatusCode == 1 || data.StatusCode == 21 || data.StatusCode == 31 || data.StatusCode == 51) {
        //new scrip
        title = data.Recommendation + ' ' + data.Symbol;
        msg = data.Recommendation + ' ' + data.Symbol + ' @' + data.EP + ', TP- ' + data.Target1 + ', SL- ' + data.StopLoss;
      } else {
        // update status
        title = data.Symbol || data.SecDesc + ' : ' + data.Status;
        if (data.StatusCode == 4 || data.StatusCode == 24 || data.StatusCode == 34 || data.StatusCode == 54) msg = data.Symbol + ' : ' + data.Status + ' @' + data.Trigger;else msg = data.Symbol + ' : ' + data.Status + ' @' + (data.Target1 || data.Target2 || data.Target3 || data.Level);
      }
    } else {
      if (data.StatusCode == 11) {
        //new scrip
        title = data.Recommendation + ' ' + data.Symbol || data.SecDesc;
        msg = data.Recommendation + ' ' + data.Symbol + ' @' + data.EP + ', TP- ' + data.Target1 + ', SL- ' + data.StopLoss;
      } else {
        // update status
        title = data.Symbol || data.SecDesc + ' : ' + data.Status;
        if (data.StatusCode == 14) msg = data.Symbol + ' : ' + data.Status + ' @' + data.SL;else msg = data.Symbol + ' : ' + data.Status + ' @' + (data.Target1 || data.Target2);
      }
    }
    let options = {
      body: msg,
      icon: "https://lh3.googleusercontent.com/vgDwA5fsV4UGR9YwrhJYBpmKx6xFfiX5HrgxrrGQzyinvKDhgCIIbdpxczs3UukmwQ=s180-rw" //adding an icon
    };
  } /** Updates the summary count of active, tp1, tp2, sl */
  updateCount(code, prevStatusCode) {
    if (code == 2 || code == 22 || code == 32 || code == 52) {
      if (prevStatusCode != 1 && prevStatusCode != 21 && prevStatusCode != 31 && prevStatusCode != 51) this.summary.target2--; //if target 2 already achieved and now target 1 achieved
      this.summary.target1++;
    }
    if (code == 3 || code == 23 || code == 33 || code == 53) {
      if (prevStatusCode != 1 && prevStatusCode != 21 && prevStatusCode != 31 && prevStatusCode != 51) this.summary.target1--; //if target 1 already achieved and now target 2 achieved
      this.summary.target2++;
    }
    if (code == 5 || code == 35 || code == 55) {
      prevStatusCode == 2 || prevStatusCode == 22 || prevStatusCode == 32 || prevStatusCode == 52 ? this.summary.target1-- : prevStatusCode == 3 || prevStatusCode == 23 || prevStatusCode == 33 ? this.summary.target2-- : '';
      this.summary.target3++;
    }
    if (code == 4 || code == 34 || code == 24 || code == 54) {
      this.summary.sl++;
    }
    if (prevStatusCode == 1 || prevStatusCode == 21 || prevStatusCode == 31 || prevStatusCode == 51) this.summary.active--; //decrement the active count only when status has changed from active to something else
  }
  /** resets the array data and summary count data */
  resetData() {
    //this.btstToggle = false;
    this.callsData = [];
    this.allData = [];
    this.todaysData = [];
    this.summary = {
      active: 0,
      target1: 0,
      target2: 0,
      target3: 0,
      sl: 0,
      total: 0
      // indexGenerated: 0,
      // levelAchieved: 0
    };
  }
  /** Toggle between Tdday and All
   * on change unsubscribe the previous data and subscribe the new data
  */
  onActionChange() {
    this.utilsService.unSubscribeMultitouchline(this.callsData);
    this.isAllSelected = !this.isAllSelected;
    this.callsData = this.isAllSelected ? this.allData : this.todaysData;
    /*     setInterval(() => {
          let random = (Math.random() * 3) + 1
          let data = JSON.parse(JSON.stringify(this.callsData[random]));
          data.TACode = random
          this.processData(data)
        }, 10000) */
    this.utilsService.subscribeMultitouchline(this.callsData);
  }
  /** Sets a timeout of 5 min for user inactivity */
  setTimeout() {
    this.userActivity = setTimeout(() => this.userInactive.next(undefined), 300000);
  }
  refreshUserState() {
    if (this.inActive) {
      // this.refresh();
      this.inActive = false;
    }
    clearTimeout(this.userActivity);
    this.setTimeout();
  }
  /**
   * this methos gets called on Selected Tab click
   */
  activateTab(tabIndex) {
    this.btstToggle = false;
    this.activeTabIndex = tabIndex;
    this.location.replaceState('strategy/price-volume?activeTab=' + this.activeTabIndex);
    this.subscribeTab();
  }
  /**
   * Subscribe to new tab
   */
  subscribeTab(notSub) {
    this.utilsService.unSubscribeMultitouchline(this.callsData);
    this.sseService.closeEventSource();
    if (!notSub) {
      this.subscribeSSE();
    }
    this.getPVBreakoutData();
  }
  /** on date change */
  onDateChange(selectedString) {
    if (this.dateConfig.selected == selectedString || !selectedString) return;
    this.dateConfig.selected = selectedString;
    this.dateConfig.selectedRange = '';
    if (selectedString == 'today') {
      this.dateConfig.startDate = (0,_assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_6__["default"])().format('DD-MM-YYYY');
      this.dateConfig.endDate = (0,_assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_6__["default"])().format('DD-MM-YYYY');
    } else if (selectedString == 'week') {
      this.dateConfig.startDate = (0,_assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_6__["default"])().subtract(7, 'days').format('DD-MM-YYYY');
      this.dateConfig.endDate = (0,_assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_6__["default"])().format('DD-MM-YYYY');
    } else if (selectedString == 'month') {
      this.dateConfig.startDate = (0,_assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_6__["default"])().subtract(30, 'days').format('DD-MM-YYYY');
      this.dateConfig.endDate = (0,_assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_6__["default"])().format('DD-MM-YYYY');
    } else {
      this.dateConfig.selectedRange = selectedString;
      this.dateConfig.startDate = (0,_assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_6__["default"])(selectedString[0]).format('DD-MM-YYYY');
      this.dateConfig.endDate = (0,_assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_6__["default"])(selectedString[1]).format('DD-MM-YYYY');
    }
    this.utilsService.unSubscribeMultitouchline(this.callsData);
    this.getPVBreakoutData();
  }
  /**
   * Checkbox Toggled
   * @param value value
   */
  onTimeChange() {
    this.getConfig();
    this.subscribeTab();
  }
  /**
   * Label clicked
   * @param section section name
   * @param value Value
   */
  onLabelToggleChange(section, value) {
    if (section == 'supertrend') {
      this.actionToggle = value;
      this.onTimeChange();
    }
    if (section == 'btst') {
      this.btstToggle = value;
      this.onChange();
    }
  }
  onChange() {
    this.getConfig();
    this.subscribeTab(true);
  }
  static {
    this.ctorParameters = () => [{
      type: _angular_common__WEBPACK_IMPORTED_MODULE_12__.Location
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.Router
    }, {
      type: _services_sse_sse_service__WEBPACK_IMPORTED_MODULE_5__.SseService
    }, {
      type: src_app_services_rest_strategy_service__WEBPACK_IMPORTED_MODULE_2__.StrategyService
    }, {
      type: src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_4__.UtilsService
    }, {
      type: src_app_services_sockets_socket_service__WEBPACK_IMPORTED_MODULE_3__.SocketService
    }, {
      type: _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_10__.SharedDataService
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_14__.UntypedFormBuilder
    }];
  }
  static {
    this.propDecorators = {
      refreshUserState: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.HostListener,
        args: ['window:mousemove']
      }]
    };
  }
};
PriceVolumeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
  selector: 'app-price-volume',
  template: _price_volume_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  animations: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_17__.trigger)('enterAnimation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_17__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_17__.style)({
    transform: 'translateX(100%)',
    opacity: 0
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_17__.animate)('500ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_17__.style)({
    transform: 'translateX(0)',
    opacity: 1,
    'overflow-x': 'hidden'
  }))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_17__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_17__.style)({
    transform: 'translateX(0)',
    opacity: 1
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_17__.animate)('500ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_17__.style)({
    transform: 'translateX(100%)',
    opacity: 0
  }))])]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_17__.trigger)('slideIn', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_17__.state)('*', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_17__.style)({
    'overflow-y': 'hidden'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_17__.state)('void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_17__.style)({
    'overflow-y': 'hidden'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_17__.transition)('* => void', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_17__.style)({
    height: '*'
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_17__.animate)(250, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_17__.style)({
    height: 0
  }))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_17__.transition)('void => *', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_17__.style)({
    height: '0'
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_17__.animate)(250, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_17__.style)({
    height: '*'
  }))])])],
  standalone: true,
  imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterLink, _pipes_segment_pipe__WEBPACK_IMPORTED_MODULE_8__.SegmentPipe, _pipes_value_pipe__WEBPACK_IMPORTED_MODULE_9__.ValuePipe, _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_7__.SearchPipe, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_18__.BsDatepickerModule],
  providers: [src_app_services_rest_strategy_service__WEBPACK_IMPORTED_MODULE_2__.StrategyService],
  styles: [(_price_volume_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__metadata)("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_12__.Location, _angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute, _angular_router__WEBPACK_IMPORTED_MODULE_13__.Router, _services_sse_sse_service__WEBPACK_IMPORTED_MODULE_5__.SseService, src_app_services_rest_strategy_service__WEBPACK_IMPORTED_MODULE_2__.StrategyService, src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_4__.UtilsService, src_app_services_sockets_socket_service__WEBPACK_IMPORTED_MODULE_3__.SocketService, _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_10__.SharedDataService, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.UntypedFormBuilder])], PriceVolumeComponent);


/***/ }),

/***/ 77181:
/*!**********************************************!*\
  !*** ./src/app/strategy/strategy.routing.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StrategyRoutes: () => (/* binding */ StrategyRoutes)
/* harmony export */ });
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../guards/auth.guard */ 61620);
/* harmony import */ var _price_volume_price_volume_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./price-volume/price-volume.component */ 45014);


/** fixed config for market pages */
const routeConfig = {
  header: true,
  footer: true,
  indices: false,
  betaFooter: false,
  ticker: true,
  watchlist: false
};
const StrategyRoutes = [{
  path: 'price-volume',
  component: _price_volume_price_volume_component__WEBPACK_IMPORTED_MODULE_1__.PriceVolumeComponent,
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  data: {
    config: routeConfig
  }
}];

/***/ }),

/***/ 18754:
/*!******************************************************************************!*\
  !*** ./src/app/strategy/price-volume/price-volume.component.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ 8564);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 98557);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  font-size: 13px;
  font-family: "Montserrat";
}

.search-wrap {
  border: 1px solid #d9d9d9;
  padding: 0px 8px;
  margin-right: 75%;
  display: flex;
  align-items: center;
}
.search-wrap i {
  color: #000000;
  font-size: 150%;
  margin-right: 8px;
  display: inline-block;
  vertical-align: middle;
}
.search-wrap input {
  border: none;
  padding: 8px 0;
  outline: none;
  box-shadow: none;
  width: 200px;
}
@media (max-width: 1200px) {
  .search-wrap input {
    width: 100px;
  }
}
@media (max-width: 767px) {
  .search-wrap input {
    width: 90px;
  }
}
@media (max-width: 340px) {
  .search-wrap input {
    width: 60px;
  }
}

div.row .chart-card {
  background: #fff;
  padding: 10px 24px 10px 24px;
  margin-bottom: 25px;
  line-height: 28px;
  box-shadow: 0px 0px 50px 0px rgba(169, 172, 189, 0.15);
  border-left: 2px solid #cccccc;
}
@media (max-width: 1550px) {
  div.row .chart-card {
    padding: 10px 14px 10px 14px;
  }
}
div.row .chart-card.titleblue {
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  color: #79b7ee;
}
div.row .chart-card.titledarkblue {
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  color: #538ded;
}
div.row .chart-card.titleyellow {
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  color: #fec35c;
}
div.row .chart-card.titlepurple {
  text-transform: capitalize;
  font-size: 12px;
  font-weight: bold;
  color: #9d81ee;
}
div.row .chart-card.titlegreen {
  text-transform: capitalize;
  font-size: 12px;
  font-weight: bold;
  color: #009933;
}
div.row .chart-card.titlered {
  text-transform: capitalize;
  font-size: 12px;
  font-weight: bold;
  color: #ff7c7c;
}
div.row .chart-card.blue-border {
  border-color: #79b7ee;
}
div.row .chart-card.darkblue-border {
  border-color: #538ded;
}
div.row .chart-card.yellow-border {
  border-color: #fec35c;
}
div.row .chart-card.purple-border {
  border-color: #9d81ee;
}
div.row .chart-card.green-border {
  border-color: #009933;
}
div.row .chart-card.red-border {
  border-color: #ff7c7c;
}
div.row .chart-card .values {
  font-weight: normal;
  font-size: 24px;
  color: #000000;
}
div.row .chart-card .rupee {
  font-weight: normal;
  font-size: 18px;
}
div.row .chart-card .date {
  font-weight: normal;
  font-size: 14px;
  text-transform: capitalize;
  color: #8a97a0;
}
div.row .chart-card .perUp {
  font-weight: normal;
  font-size: 14px;
  text-transform: capitalize;
  color: #009933;
}
div.row .chart-card .perDown {
  font-weight: normal;
  font-size: 14px;
  text-transform: capitalize;
  color: rgba(255, 0, 0, 0.8);
}
div.row .chart-card .perZero {
  font-weight: normal;
  font-size: 14px;
  text-transform: capitalize;
}

.card {
  width: 100%;
  float: left;
  margin-bottom: 10px;
}
.card.content-section {
  min-height: 200px;
}

.up {
  color: #009933;
  font-weight: bold;
}

.down {
  color: #ff1a1a;
}

.toggle {
  padding-top: 10px;
  padding-bottom: 30px;
}

.recommendation {
  font-weight: 500;
}

.roundbtn {
  border-radius: 15px;
}

.pd {
  padding-left: 10px;
}

.btn.btn-gradient2 {
  color: #ffffff;
  /* padding: 8px 15px; */
  font-size: 14px;
  background: #2D77F4;
}`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 13698:
/*!******************************************************************************!*\
  !*** ./src/app/strategy/price-volume/price-volume.component.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container-fluid\">\r\n  <section class=\"section-one card\">\r\n    <div class=\"card-block clearfix\">\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 flex-wrap\">\r\n\r\n          <ul class=\"nav nav-tabs hor_1 pull-left mb-30 wtd100\">\r\n            <li [class.active]=\"activeTabIndex == 1\" (click)='activateTab(1)'>\r\n              <a>Intra Spurt Strategy</a>\r\n            </li>\r\n            <li [class.active]=\"activeTabIndex == 2\" (click)='activateTab(2)'>\r\n              <a>Dark Horse Strategy</a>\r\n            </li>\r\n            <!--  <li [class.active]=\"activeTabIndex == 3\" (click)='activateTab(3)'>\r\n            <a>ETET</a>\r\n          </li> -->\r\n          @if (false) {\r\n            <li [class.active]=\"activeTabIndex == 4\" (click)='activateTab(4)'>\r\n              <a>Index Breakout</a>\r\n            </li>\r\n          }\r\n          @if (false) {\r\n            <li [class.active]=\"activeTabIndex == 5\" (click)='activateTab(5)'>\r\n              <a>OI Spurts</a>\r\n            </li>\r\n          }\r\n          <li [class.active]=\"activeTabIndex == 6\" (click)='activateTab(6)'>\r\n            <a>Future Trade Simplifier</a>\r\n          </li>\r\n        </ul>\r\n\r\n      </div>\r\n    </div>\r\n    <!-- Intra Spurt Strategy -->\r\n    @if (activeTabIndex==1) {\r\n      <div>\r\n        <h4 class=\"page-title text-uppercase\">Intra Spurt Strategy</h4>\r\n        <div></div>\r\n        <p>It's Multi time frame Breakout Strategy in which you will get noble recommendation based on the breakout.\r\n          This strategy analyses all time frame with best in the industry parameters so that you will get good return\r\n        based on it.</p>\r\n        <p>This strategy gives two Target where 01st Target is for Intraday while for 02nd Target is for Positional. If\r\n          stock gets 01st Target then Raise SL near to Cost and if stock approaches 02nd Target then raise SL at Par for\r\n        further good return (Approx. 5% - 7%).</p>\r\n        <p>However, one can use this strategy as per the Risk Appetite where if you get entry at recommendation level\r\n        then you can book profit as per your comfort level.</p>\r\n      </div>\r\n    }\r\n    @if (activeTabIndex==2) {\r\n      <div>\r\n        <h4 class=\"page-title text-uppercase\">Dark Horse Strategy</h4>\r\n        <div></div>\r\n        <p>Its strategy where one can get positional recommendation for a week for an approx. return of 5% to 10%.</p>\r\n        <p>It's a strategy which analyses Price and Volume breakout on a different time frame along with best available\r\n        resource that helps the stock to move ahead.</p>\r\n        <p>One can follow this strategy for Positional trade same like Intra spurt strategy with Trail SL condition.</p>\r\n      </div>\r\n    }\r\n    <!-- <div *ngIf=\"activeTabIndex==3\">\r\n    <h4 class=\"page-title text-uppercase\">ETET</h4> <div></div> <p>This strategy indentifies call for Enter Today and Exit Tomorrow trade (Similar pattern of BTST). This strategy also analysis breakout on intraday chart during the day with above average volume.</p>\r\n  </div> -->\r\n  @if (activeTabIndex==5) {\r\n    <div>\r\n      <h4 class=\"page-title text-uppercase\">OI Spurts</h4>\r\n      <div></div>\r\n      <p>Its strategy which analyses Overall Open Interest position based on which, you will get limited\r\n      recommendation like one or two in a day or sometime not a single trade based on the position.</p>\r\n      <p>This Strategy work well for them who want a limited trade with Proper SL and Target.</p>\r\n    </div>\r\n  }\r\n  @if (activeTabIndex==6) {\r\n    <div>\r\n      <h4 class=\"page-title text-uppercase\">Future Trade Simplifier</h4>\r\n      <div></div>\r\n      <p>Its strategy where one can get intraday recommendation in Future counters only.</p>\r\n      <p>It’s a strategy which analyses Open Interest situation during the trading session along with price movement\r\n      and give best recommendation.</p>\r\n    </div>\r\n  }\r\n\r\n  <div class=\"container-fluid padding-0\">\r\n\r\n    <!-- <div> -->\r\n    @if (shared.isServiceHit) {\r\n      <img class=\"loader\" src=\"assets/images/loader.gif\" />\r\n    }\r\n\r\n    <!-- Summary -->\r\n    @if (activeTabIndex != 4) {\r\n      <div class=\"row mrl-15 clearfix\" style=\"padding-top: 25px;\">\r\n        <h4 class=\"page-title\" style=\"padding-left: 15px;\">Summary</h4>\r\n        <div class=\"col-lg-4 col-md-4 col-sm-3 col-xs-12\">\r\n          <div class=\"card chart-card text-center darkblue-border titledarkblue\">\r\n            <div class=\" text-left \">Active</div>\r\n            <div class=\"values text-left\">\r\n              <i class=\"fa icon-inr\" aria-hidden=\"true\"></i> {{summary?.active |value}}\r\n              <!-- added ProfitLossPercent (added below line by reshmaC on 29/01/2020) -->\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-4 col-md-4 col-sm-3 col-xs-12\">\r\n          <div class=\"card chart-card text-center green-border titlegreen\">\r\n            <div class=\" text-left \">Target Achieved</div>\r\n            @if (activeTabIndex !=4) {\r\n              <div class=\"values text-left\">\r\n                <i class=\"fa icon-inr\" aria-hidden=\"true\"></i> {{( summary?.target1 + summary?.target2 +\r\n                summary?.target3) |value}} <small style=\"font-size: 50%;\">( {{summary?.target1 |value}} Target 1 +\r\n                {{summary?.target2 |value}} Target 2 {{(activeTabIndex !=6)?('+ '+(summary?.target3 |value)+' Target\r\n              3'):''}} )</small>\r\n              <!-- added CurrentDayProfitLossPercent (added below line by reshmaC on 29/01/2020) -->\r\n            </div>\r\n          }\r\n          @if (activeTabIndex ==4) {\r\n            <div class=\"values text-left\">\r\n              <i class=\"fa icon-inr\" aria-hidden=\"true\"></i> {{( summary?.target1 + summary?.target2) |value}} <small\r\n              style=\"font-size: 50%;\">( {{summary?.target1 |value}} Target 1 + {{summary?.target2 |value}} Target\r\n            2)</small>\r\n            <!-- added CurrentDayProfitLossPercent (added below line by reshmaC on 29/01/2020) -->\r\n          </div>\r\n        }\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-4 col-md-4 col-sm-3 col-xs-12\">\r\n      <div class=\"card chart-card text-center red-border titlered\">\r\n        <div class=\" text-left\">SL Triggered</div>\r\n        <div class=\"values text-left\">\r\n          <i class=\"fa icon-inr\" aria-hidden=\"true\"></i> {{summary?.sl |value}}\r\n        </div>\r\n        <!-- <div class=\"date text-left\">Date : {{currentDate}}</div> -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n}\r\n\r\n<!-- Index Breakout summary -->\r\n@if (activeTabIndex == 4) {\r\n  <div class=\"row mrl-15 clearfix\" style=\"padding-top: 25px;\">\r\n    <h4 class=\"page-title\" style=\"padding-left: 15px;\">Summary</h4>\r\n    <div class=\"col-lg-4 col-md-4 col-sm-3 col-xs-12\">\r\n      <div class=\"card chart-card text-center darkblue-border titledarkblue\">\r\n        <div class=\" text-left \">Active</div>\r\n        <div class=\"values text-left\">\r\n          <i class=\"fa icon-inr\" aria-hidden=\"true\"></i> {{summary?.active |value}}\r\n          <!-- added ProfitLossPercent (added below line by reshmaC on 29/01/2020) -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-4 col-md-4 col-sm-3 col-xs-12\">\r\n      <div class=\"card chart-card text-center green-border titlegreen\">\r\n        <div class=\" text-left \">Target Achieved</div>\r\n        <div class=\"values text-left\">\r\n          <i class=\"fa icon-inr\" aria-hidden=\"true\"></i> {{( summary?.target1 + summary?.target2) |value}} <small\r\n          style=\"font-size: 50%;\">( {{summary?.target1 |value}} Target 1 + {{summary?.target2 |value}} Target\r\n        2)</small>\r\n        <!-- added CurrentDayProfitLossPercent (added below line by reshmaC on 29/01/2020) -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-lg-4 col-md-4 col-sm-3 col-xs-12\">\r\n    <div class=\"card chart-card text-center red-border titlered\">\r\n      <div class=\" text-left\">SL Triggered</div>\r\n      <div class=\"values text-left\">\r\n        <i class=\"fa icon-inr\" aria-hidden=\"true\"></i> {{summary?.sl |value}}\r\n      </div>\r\n      <!-- <div class=\"date text-left\">Date : {{currentDate}}</div> -->\r\n    </div>\r\n  </div>\r\n</div>\r\n}\r\n\r\n<!-- Refresh -->\r\n<button class=\"btn btn-gradient pull-right\" (click)=\"refresh()\" aria-label=\"repeat\"><i class=\"fa icon-repeat\"\r\naria-hidden=\"true\"></i></button>\r\n<!-- </div> -->\r\n\r\n<!-- Search -->\r\n<div class=\"search-wrap\" id=\"report-search\">\r\n  <i class=\"icon-search\"></i>\r\n  <input type=\"text\" placeholder=\"Search Company Here\" (input)=\"scrip = $event.target.value\"\r\n    aria-label=\"search-company\" />\r\n  </div>\r\n\r\n  <!-- <div class=\"text-center switch-wrap pull-left toggle\">\r\n  <label class=\"control-label mr-10\" for=\"actionType\" [class.selected]=\"!isAllSelected\">Today</label>\r\n  <label class=\"switch\">\r\n    <input type=\"checkbox\" id=\"actionType\" name=\"actionType\" [(ngModel)]=\"isAllSelected\"\r\n\r\n      (change)=\"onActionChange();\">\r\n      <div class=\"slider round\"></div>\r\n    </label>\r\n    <label class=\"control-label ml-10\" for=\"actionType\" [class.selected]=\"isAllSelected\">All</label>\r\n  </div> -->\r\n  <div class=\"text-center switch-wrap pull-left toggle pd\">\r\n    <button scrollTo class=\"btn roundbtn\" (click)=\"onDateChange('today');\"\r\n    [class.btn-gradient2]=\"dateConfig.selected=='today'\">Today</button>\r\n  </div>\r\n  <div class=\"text-center switch-wrap pull-left toggle pd\">\r\n    <button scrollTo class=\"btn roundbtn\" (click)=\"onDateChange('week');\"\r\n    [class.btn-gradient2]=\"dateConfig.selected=='week'\">Weekly</button>\r\n  </div>\r\n  <div class=\"text-center switch-wrap pull-left toggle pd\">\r\n    <button scrollTo class=\"btn roundbtn\" (click)=\"onDateChange('month');\"\r\n    [class.btn-gradient2]=\"dateConfig.selected=='month'\">Monthly</button>\r\n  </div>\r\n\r\n  <div class=\"text-center switch-wrap pull-left toggle pd\">\r\n\r\n    <input type=\"text\" name=\"daterange\" autocomplete=\"off\" bsDaterangepicker\r\n      [(ngModel)]=\"dateConfig.selectedRange\" [maxDate]=\"dates.max\" [minDate]='dates.min'\r\n      [bsConfig]=\"{ rangeInputFormat : 'DD-MMM-YY', dateInputFormat: 'DD-MMM-YY', showWeekNumbers: false }\"\r\n      id=\"customDate\" placeholder=\"Enter Custom Date Range\" (bsValueChange)=\"onDateChange($event)\"\r\n      class=\"form-control\" />\r\n\r\n      <!-- <div class=\"col-lg-4 col-md-3 col-sm-3 col-xs-12\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\">\r\n          <label class=\"filter-label\">From Date</label>\r\n        </div>\r\n        <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-12\">\r\n          <label class=\"custom-input\">\r\n            <input type=\"text\" id=\"fromDate\" [minDate]=\"dates.min\" [maxDate]=\"dates.max\" class=\"form-control\"\r\n              name=\"fromDate\" bsDatepicker [bsConfig]=\"{ dateInputFormat: 'DD-MMM-YYYY' }\"\r\n              [(ngModel)]=\"dates.min\">\r\n            </label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\">\r\n            <label class=\"filter-label\">To Date</label>\r\n          </div>\r\n          <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-12\">\r\n            <label class=\"custom-input\">\r\n              <input type=\"text\" id=\"toDate\" class=\"form-control\" [minDate]=\"dates.min\"\r\n                [maxDate]=\"dates.max\" name=\"toDate\" [(ngModel)]=\"dates.max\" bsDatepicker\r\n                [bsConfig]=\"{ dateInputFormat: 'DD-MMM-YYYY' }\">\r\n              </label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-1 col-md-3 col-sm-3 col-xs-12\">\r\n          <button scrollTo class=\"btn btn-gradient\">GO</button>\r\n        </div>-->\r\n      </div>\r\n\r\n      @if (activeTabIndex == 6) {\r\n        <div class=\"text-center switch-wrap pull-left toggle pd\">\r\n          <label class=\"control-label mr-10\" [class.selected]=\"!actionToggle\"\r\n          (click)=\"onLabelToggleChange('supertrend',false)\">Intraday</label>\r\n          <label class=\"switch\">\r\n            <input type=\"checkbox\" name=\"actionToggle\" [(ngModel)]=\"actionToggle\" (change)=\"onTimeChange()\">\r\n            <div class=\"slider round\"></div>\r\n          </label>\r\n          <label class=\"control-label ml-10\" [class.selected]=\"actionToggle\"\r\n          (click)=\"onLabelToggleChange('supertrend',true)\">Positional</label>\r\n        </div>\r\n      }\r\n\r\n      @if (activeTabIndex == 3) {\r\n        <div class=\"text-center switch-wrap pull-left toggle pd\">\r\n          <label class=\"control-label mr-10\" [class.selected]=\"!btstToggle\"\r\n          (click)=\"onLabelToggleChange('btst',false)\">EQ</label>\r\n          <label class=\"switch\">\r\n            <input type=\"checkbox\" name=\"btstToggle\" [(ngModel)]=\"btstToggle\" (change)=\"onChange()\">\r\n            <div class=\"slider round\"></div>\r\n          </label>\r\n          <label class=\"control-label ml-10\" [class.selected]=\"btstToggle\"\r\n          (click)=\"onLabelToggleChange('btst',true)\">FO</label>\r\n        </div>\r\n      }\r\n      <!-- Calls Data -->\r\n      <div class=\"tab-content hor_1\" style=\"padding-top: 25px;\">\r\n        @if (callsData.length != 0 && !shared.isServiceHit) {\r\n          <div class=\"table-responsive\">\r\n            <table class=\"table mobile-table table-striped\" style=\"border-collapse:collapse;\">\r\n              <thead>\r\n                <tr>\r\n                  <th width=\"10%\">Time</th>\r\n                  <th width=\"10%\" style=\"padding-left:10px;\">Status</th>\r\n                  <th width=\"10%\">Scrip</th>\r\n                  <th width=\"10%\">LTP</th>\r\n                  @if ([4].indexOf(activeTabIndex) > -1) {\r\n                    <th width=\"10%\">Level</th>\r\n                  }\r\n                  @if ([4].indexOf(activeTabIndex) == -1) {\r\n                    <th width=\"10%\">Entry Price</th>\r\n                  }\r\n                  <th width=\"10%\">1st Target</th>\r\n                  <th width=\"10%\">2nd Target</th>\r\n                  @if ([4,6].indexOf(activeTabIndex) == -1) {\r\n                    <th width=\"10%\">3rd Target</th>\r\n                  }\r\n                  <th width=\"10%\">SL Price</th>\r\n                  <!--  <th width=\"10%\" *ngIf='([4,5,6].indexOf(activeTabIndex) == -1)&&!btstToggle'>Trigger Price</th>   -->\r\n                  <th width=\"10%\">Recommendation </th>\r\n                </tr><!-- ((activeTabIndex==3)&&btstToggle)|| -->\r\n              </thead>\r\n              @for (item of callsData | search: scrip; track item) {\r\n                @if (item?.StatusCode != 10) {\r\n                  <tr [@slideIn]>\r\n                    <td width=\"10%\" class=\"p-tb10\">\r\n                      <tr>{{item?.Time.split(' ')[1]}}</tr>\r\n                      <tr><small>{{item?.Time.split(' ')[0]}}</small></tr>\r\n                    </td>\r\n                    @if ((activeTabIndex != 4)) {\r\n                      <td width=\"10%\" class=\"p-tb10\">\r\n                        <tr\r\n                          [ngClass]=\"[2,3,5,22,23,32,33,35,28,8].indexOf(item?.StatusCode) > -1 ? 'up' : ((item?.StatusCode == 4)||(item?.StatusCode == 24)||(item?.StatusCode == 34)) ? 'down':''\">\r\n                        {{item?.Status}}</tr>\r\n                        @if ((item.StatusCode !=1)&&(item.StatusCode !=31) && (item.StatusCode !=21)) {\r\n                          <tr>\r\n                            <small>{{item?.updateTime}}</small></tr>\r\n                          }\r\n                        </td>\r\n                      }\r\n                      @if ((activeTabIndex == 4)) {\r\n                        <td width=\"10%\" class=\"p-tb10\">\r\n                          <tr [ngClass]=\"[12,13].indexOf(item?.StatusCode) > -1 ? 'up' : item?.StatusCode == 14 ? 'down':''\">\r\n                          {{item?.Status}}</tr>\r\n                          @if (item.StatusCode !=10) {\r\n                            <tr><small>{{item?.updateTime}}</small></tr>\r\n                          }\r\n                        </td>\r\n                      }\r\n                      @if ((activeTabIndex != 4)) {\r\n                        <td width=\"10%\" class=\"p-tb10 recommendation\">\r\n                          <tr><a [routerLink]=\"[item.companyPath]\">{{item?.Symbol}}</a></tr>\r\n                          <tr><small>{{item?.SecDesc}}</small></tr>\r\n                        </td>\r\n                      }\r\n                      @if ((activeTabIndex == 4)) {\r\n                        <td width=\"10%\" class=\"p-tb10 recommendation\">\r\n                          <tr><a [routerLink]=\"[item.companyPath]\">{{item?.SecDesc}}</a></tr>\r\n                        </td>\r\n                      }\r\n                      <td width=\"10%\" class=\"p-tb10\">{{item?.LTP | segment: item.SegmentId}}</td>\r\n                      @if ([4].indexOf(activeTabIndex) > -1) {\r\n                        <td width=\"10%\" class=\"p-tb10\">{{item?.Level | segment:\r\n                        item?.SegmentId}}</td>\r\n                      }\r\n                      @if ([4].indexOf(activeTabIndex) == -1) {\r\n                        <td width=\"10%\" class=\"p-tb10\">{{item?.EP | segment:\r\n                        item?.SegmentId}}</td>\r\n                      }\r\n                      <td width=\"10%\" class=\"p-tb10\">{{item?.Target1 | segment: item?.SegmentId}}</td>\r\n                      <td width=\"10%\" class=\"p-tb10\">{{item?.Target2 | segment: item?.SegmentId}}</td>\r\n                      @if ([4,6].indexOf(activeTabIndex) == -1) {\r\n                        <td width=\"10%\" class=\"p-tb10\">\r\n                        {{item?.Target3?(item?.Target3 | segment: item?.SegmentId):'-'}}</td>\r\n                      }\r\n                      <td width=\"10%\" class=\"p-tb10\">{{item?.StopLoss | segment: item?.SegmentId}}</td>\r\n                      <!--   <td width=\"10%\" class=\"p-tb10\" *ngIf='([4,5,6].indexOf(activeTabIndex) == -1)&&!btstToggle'>{{item?.Trigger | segment: item?.SegmentId}}</td> -->\r\n                      <td width=\"10%\" class=\"p-tb10 recommendation \">\r\n                        @if (item?.Recommendation=='SELL') {\r\n                          SELL\r\n                        }\r\n                        @if (item?.Recommendation=='BUY') {\r\n                          BUY\r\n                        }\r\n                        <!--  <button type=\"button\" class=\"btn sell1 \" (click)=\"sellItem(item)\" ></button>\r\n                        <button  type=\"button\"  class=\"btn buy1 \" (click)=\"buyItem(item)\">BUY</button> -->\r\n                      </td>\r\n                    </tr>\r\n                  }\r\n                }\r\n              </table>\r\n            </div>\r\n          }\r\n\r\n          @if (callsData.length == 0 && !shared.isServiceHit) {\r\n            <div class=\"table-responsive\">\r\n              No Data Available\r\n            </div>\r\n          }\r\n        </div>\r\n\r\n        <!-- Index Breakout to be removed-->\r\n        <!--     <div class=\"tab-content hor_1\" style=\"padding-top: 25px;\" *ngIf=\"false&&(activeTabIndex == 4)\">\r\n        <div class=\"table-responsive\" *ngIf=\"callsData.length != 0 && !shared.isServiceHit\">\r\n          <table class=\"table mobile-table table-striped\" style=\"border-collapse:collapse;\">\r\n            <thead>\r\n              <tr>\r\n                <th width=\"10%\" style=\"padding-left:10px;\">Time</th>\r\n                <th width=\"10%\">Status</th>\r\n                <th width=\"10%\">Scrip</th>\r\n                <th width=\"10%\">Recommendation </th>\r\n                <th width=\"10%\">LTP</th>\r\n                <th width=\"10%\">Level</th>\r\n                <th width=\"10%\">1st Target</th>\r\n                <th width=\"10%\">2nd Target</th>\r\n                <th width=\"10%\">SL Price</th>\r\n              </tr>\r\n            </thead>\r\n            <ng-container *ngFor=\"let item of callsData | search: scrip\">\r\n              <tr [@slideIn] *ngIf=\"item?.StatusCode != 10\">\r\n                <td width=\"10%\" class=\"p-tb10\"><tr>{{item?.Time.split(' ')[1]}}</tr><tr><small>{{item?.Time.split(' ')[0]}}</small></tr></td>\r\n                <td width=\"10%\" class=\"p-tb10\"><tr [ngClass]=\"[12,13].indexOf(item?.StatusCode) > -1 ? 'up' : item?.StatusCode == 14 ? 'down':''\">{{item?.Status}}</tr><tr *ngIf=\"item.StatusCode !=10\"><small>{{item?.updateTime}}</small></tr></td>\r\n                <td width=\"10%\" class=\"p-tb10 recommendation\"><tr><a [routerLink]=\"item.companyPath\">{{item?.SecDesc}}</a></tr><tr>\r\n\r\n              </tr></td>\r\n              <td width=\"10%\" class=\"p-tb10 recommendation\" >{{item?.Recommendation}}</td>\r\n              <td width=\"10%\" class=\"p-tb10\">{{item?.LTP | segment: item.SegmentId}}</td>\r\n              <td width=\"10%\" class=\"p-tb10\">{{item?.Level | segment: item?.SegmentId}}</td>\r\n              <td width=\"10%\" class=\"p-tb10\">{{item?.Target1 | segment: item?.SegmentId}}</td>\r\n              <td width=\"10%\" class=\"p-tb10\">{{item?.Target2 | segment: item?.SegmentId}}</td>\r\n              <td width=\"10%\" class=\"p-tb10\">{{item?.StopLoss | segment: item?.SegmentId}}</td>\r\n\r\n            </tr>\r\n\r\n          </ng-container>\r\n        </table>\r\n      </div>\r\n\r\n      <div class=\"table-responsive\" *ngIf=\"callsData.length == 0 && !shared.isServiceHit\">\r\n        No Data Available\r\n      </div>\r\n    </div> -->\r\n\r\n  </div>\r\n</div>\r\n</section>\r\n</div>";

/***/ })

}]);