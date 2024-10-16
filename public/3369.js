"use strict";
(self["webpackChunkjiffy_upgraded"] = self["webpackChunkjiffy_upgraded"] || []).push([[3369],{

/***/ 23369:
/*!*************************************************!*\
  !*** ./src/app/services/rest/market.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MarketService: () => (/* binding */ MarketService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 21626);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 18810);
/* harmony import */ var src_app_utility_requestFactory_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/utility/requestFactory.utils */ 13991);
/* harmony import */ var _api_urls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api-urls */ 26702);
/* harmony import */ var _error_handler_jiffy_error_handler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../error-handler/jiffy-error-handler.service */ 9676);
/* harmony import */ var _shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared-data/shared-data.service */ 46013);
/* harmony import */ var _sockets_broadcaster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sockets/broadcaster */ 28510);









/** Service Utility for Market Http Requests */
let MarketService = class MarketService {
  /**
   * Constructor for Initilialization and dependency Injection
   * @param http Http Instance from angular HTTP Package
   * @param urls APIURLs instance containing URL Lists
   * @param shared Shared Data Service Instance
   * @param errorHandler Error Handler in case of any API Error
   */
  constructor(http, urls, shared, errorHandler, broadcaster) {
    this.http = http;
    this.urls = urls;
    this.shared = shared;
    this.errorHandler = errorHandler;
    this.broadcaster = broadcaster;
    let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({
      'Content-Type': 'application/json',
      'accept': 'application/json',
      'from': 'Web_' + location.host + '_' + this.urls.getVersion()
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
  // @depricated
  // IPO ENPOINTS
  // /**
  //  * HTTP Rest Method to Get IPO Listing
  //  * @param request JSON Data to be posted to HTTP Request
  //  */
  // public getIPOListing(request: {}): Observable<any> {
  //   if (this.shared.isInternetAvailable) {
  //     const url = this.urls.getIPOListingURL();
  //     return this.http.post(url, request, this.options).pipe(
  //       map((response) => {
  //         return response;
  //       }), catchError((error: any) => {
  //         this.errorHandler.handleError(error, url);
  //         return throwError(error);
  //       }));
  //   }
  // }
  // public getIPODetails(request: {}): Observable<any> {
  //   if (this.shared.isInternetAvailable) {
  //     const url = this.urls.getIPODetailsURL();
  //     return this.http.post(url, request, this.options).pipe(
  //       map((response) => {
  //         return response;
  //       }), catchError((error: any) => {
  //         this.errorHandler.handleError(error, url);
  //         return throwError(error);
  //       }));
  //   }
  // }
  // /**
  //  * HTTP Rest Method to Get IPO Counts Per Year
  //  * @param request JSON Data to be posted to HTTP Request
  //  */
  // public getIPOsCountPerYearURL(request: {}): Observable<any> {
  //   if (this.shared.isInternetAvailable) {
  //     const url = this.urls.getIPOsCountPerYearURL();
  //     return this.http.post(this.urls.getIPOsCountPerYearURL(), request, this.options).pipe(
  //       map((response) => {
  //         return response;
  //       }), catchError((error: any) => {
  //         this.errorHandler.handleError(error, url);
  //         return throwError(error);
  //       }));
  //   }
  // }
  // /**
  //  * HTTP Rest Method to Get Latest IPO 
  //  * @param request JSON Data to be posted to HTTP Request
  //  */
  // public getLatestIPOsURL(request: {}): Observable<any> {
  //   if (this.shared.isInternetAvailable) {
  //     const url = this.urls.getLatestIPOsURL();
  //     return this.http.post(this.urls.getLatestIPOsURL(), request, this.options).pipe(
  //       map((response) => {
  //         return response;
  //       }), catchError((error: any) => {
  //         this.errorHandler.handleError(error, url);
  //         return throwError(error);
  //       }));
  //   }
  // }
  // /**
  //  * HTTP Rest Method to Get Open IPOs
  //  * @param request JSON Data to be posted to HTTP Request
  //  */
  // public getOpenIPOsURL(request: {}): Observable<any> {
  //   if (this.shared.isInternetAvailable) {
  //     const url = this.urls.getOpenIPOsURL();
  //     return this.http.post(this.urls.getOpenIPOsURL(), request, this.options).pipe(
  //       map((response) => {
  //         return response;
  //       }), catchError((error: any) => {
  //         this.errorHandler.handleError(error, url);
  //         return throwError(error);
  //       }));
  //   }
  // }
  // /**
  //  * HTTP Rest Method to Get ForthComing IPOs
  //  * @param request JSON Data to be posted to HTTP Request
  //  */
  // public getForthcomingIPOs(request: {}): Observable<any> {
  //   if (this.shared.isInternetAvailable) {
  //     const url = this.urls.getForthcomingIPOs();
  //     return this.http.post(this.urls.getForthcomingIPOs(), request, this.options).pipe(
  //       map((response) => {
  //         return response;
  //       }), catchError((error: any) => {
  //         this.errorHandler.handleError(error, url);
  //         return throwError(error);
  //       }));
  //   }
  // }
  // /**
  //  * HTTP Rest Method to Get IPO News
  //  * @param request JSON Data to be posted to HTTP Request
  //  */
  // public getIPOnews(request: {}): Observable<any> {
  //   if (this.shared.isInternetAvailable) {
  //     this.shared.isServiceHit = true;
  //     const url = this.urls.getIPOnewsURL();
  //     return this.http.post(this.urls.getIPOnewsURL(), request, this.options).pipe(
  //       map((response) => {
  //         this.shared.isServiceHit = false;
  //         return response;
  //       }), catchError((error: any) => {
  //         this.shared.isServiceHit = false;
  //         this.errorHandler.handleError(error, url);
  //         return throwError(error);
  //       }));
  //   }
  // }
  // /**
  //  * HTTP Rest Method to Get Most Active Scrips Segment Wise
  //  * @param request JSON Data to be posted to HTTP Request
  //  */
  // public getMostActiveBySegment(request: {}): Observable<any> {
  //   if (this.shared.isInternetAvailable) {
  //     this.shared.isServiceHit = true;
  //     const url = this.urls.getActiveBySegmentURL();
  //     return this.http.post(this.urls.getActiveBySegmentURL(), request, this.options).pipe(
  //       map((response) => {
  //         this.shared.isServiceHit = false;
  //         return response;
  //       }), catchError((error: any) => {
  //         this.shared.isServiceHit = false;
  //         this.errorHandler.handleError(error, url);
  //         return throwError(error);
  //       }));
  //   }
  // }
  // /**
  //  * HTTP Rest Method to Get Market Movers
  //  * @param request JSON Data to be posted to HTTP Request
  //  */
  // public getMarketMovers(request: {}): Observable<any> {
  //   if (this.shared.isInternetAvailable) {
  //     this.shared.isServiceHit = true;
  //     const url = this.urls.getMarketMoversURL();
  //     return this.http.post(this.urls.getMarketMoversURL(), request, this.options).pipe(
  //       map((response) => {
  //         this.shared.isServiceHit = false;
  //         return response;
  //       }), catchError((error: any) => {
  //         this.shared.isServiceHit = false;
  //         this.errorHandler.handleError(error, url);
  //         return throwError(error);
  //       }));
  //   }
  // }
  /**
   * HTTP Rest Method to Get All commodities Data
   * @param request JSON Data to be posted to HTTP Request
   */
  getAllCommodities(request) {
    let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({
      'Content-Type': 'application/json',
      'accept': 'application/json'
    });
    let raw = JSON.stringify(request);
    let options = {
      headers: headers
    };
    if (this.shared.isInternetAvailable) {
      const url = this.urls.getAllCommoditiesURL(); //+ '?strCommodity=' + request;
      return src_app_utility_requestFactory_utils__WEBPACK_IMPORTED_MODULE_0__.RequestFactory.requestHandler(this.requestServices, url, "post", raw, options, false);
    }
  }
  /**
   * HTTP Rest Method to Get Touchline of Multiple Scrips
   * @param request JSON Data to be posted to HTTP Request
   */
  getMultipleTouchline(request) {
    if (this.shared.isInternetAvailable) {
      const url = this.urls.getMultipleTouchLineURL();
      return src_app_utility_requestFactory_utils__WEBPACK_IMPORTED_MODULE_0__.RequestFactory.requestHandler(this.requestServices, url, "post", request, this.options, true);
    }
  }
  /**
   * HTTP Rest Method to Get Grouped Commodity Data
   * @param request JSON Data to be posted to HTTP Request
   */
  getGroupedCommodities(request) {
    let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({
      'Content-Type': 'application/json',
      'accept': 'application/json'
    });
    let options = {
      headers: headers
    };
    let raw = JSON.stringify(request);
    if (this.shared.isInternetAvailable) {
      const url = this.urls.getGroupedCommoditiesURL(); //+ request;
      return src_app_utility_requestFactory_utils__WEBPACK_IMPORTED_MODULE_0__.RequestFactory.requestHandler(this.requestServices, url, "post", raw, options, true);
    }
  }
  /**
   * HTTP Rest Method to Get Available Funds
   * @param request JSON Data to be posted to HTTP Request
   */
  getFundView() {
    if (this.shared.isInternetAvailable) {
      const url = this.urls.getfundViewURL();
      return src_app_utility_requestFactory_utils__WEBPACK_IMPORTED_MODULE_0__.RequestFactory.requestHandler(this.requestServices, url, "get", null, null, true);
    }
  }
  /**
   * HTTP Rest Method to Get Indices List
   * @param request JSON Data to be posted to HTTP Request
   */
  getIndicesList(request) {
    if (this.shared.isInternetAvailable) {
      const url = this.urls.getIndexListURL();
      return src_app_utility_requestFactory_utils__WEBPACK_IMPORTED_MODULE_0__.RequestFactory.requestHandler(this.requestServices, url, "post", request, this.options, true);
    }
  }
  /**
   * HTTP Rest Method to Get Most AcTive Scrips Index Wise
   * @param request JSON Data to be posted to HTTP Request
   */
  getMostActiveByIndex(request) {
    if (this.shared.isInternetAvailable) {
      const url = this.urls.getActiveByIndexURL();
      return src_app_utility_requestFactory_utils__WEBPACK_IMPORTED_MODULE_0__.RequestFactory.requestHandler(this.requestServices, url, "post", request, this.options, false);
    }
  }
  /**
   * HTTP Rest Method to Get Most Active FNO Scrips Index Wise
   * @param request JSON Data to be posted to HTTP Request
   */
  getActiveBySegmentDerivatives(request) {
    if (this.shared.isInternetAvailable) {
      const url = this.urls.getActiveBySegmentDerivatives();
      return src_app_utility_requestFactory_utils__WEBPACK_IMPORTED_MODULE_0__.RequestFactory.requestHandler(this.requestServices, url, "post", request, this.options, false);
    }
  }
  /**
   * HTTP Rest Method to Get Market Screener
   * @param request JSON Data to be posted to HTTP Request
   */
  getMarketScreenerData(request) {
    if (this.shared.isInternetAvailable) {
      const url = this.urls.getMarketScreenerDataURL();
      return src_app_utility_requestFactory_utils__WEBPACK_IMPORTED_MODULE_0__.RequestFactory.requestHandler(this.requestServices, url, "post", request, this.options, false);
    }
  }
  /**
   * HTTP Rest Method to Get Market Screener Filter Range
   */
  getMarketScreenerRanges() {
    if (this.shared.isInternetAvailable) {
      const url = this.urls.getMarketScreenerRangesURL();
      return src_app_utility_requestFactory_utils__WEBPACK_IMPORTED_MODULE_0__.RequestFactory.requestHandler(this.requestServices, url, "post", {}, this.options, false);
    }
  }
  /**
   * HTTP Rest Method to Get sector wise performance
   */
  getSectorPerformance() {
    if (this.shared.isInternetAvailable) {
      const url = this.urls.getSectorPerformanceURL();
      return src_app_utility_requestFactory_utils__WEBPACK_IMPORTED_MODULE_0__.RequestFactory.requestHandler(this.requestServices, url, "post", {}, this.options, false);
    }
  }
  /**
  * HTTP Rest Method to Get Company List under a Index
  * @param request JSON Data to be posted to HTTP Request
  */
  getprofileMktIndex(request) {
    if (this.shared.isInternetAvailable) {
      const url = this.urls.getprofileMktIndex();
      return src_app_utility_requestFactory_utils__WEBPACK_IMPORTED_MODULE_0__.RequestFactory.requestHandler(this.requestServices, url, "post", request, this.options, true);
    }
  }
  /**
   * HTTP Rest Method to Get Best 5 Data snapshot of a scrip
   * @param request JSON Data to be posted to HTTP Request
   */
  getBestFive(request) {
    if (this.shared.isInternetAvailable) {
      const url = this.urls.getBestFiveURL();
      return src_app_utility_requestFactory_utils__WEBPACK_IMPORTED_MODULE_0__.RequestFactory.requestHandler(this.requestServices, url, "post", request, this.options, true);
    }
  }
  /**
   * HTTP Rest Method to Get Key Info Data for a given scrip
   * @param request JSON Data to be posted to HTTP Request
   */
  getKeyInfo(request) {
    if (this.shared.isInternetAvailable) {
      const url = this.urls.getKeyInfoURL();
      return src_app_utility_requestFactory_utils__WEBPACK_IMPORTED_MODULE_0__.RequestFactory.requestHandler(this.requestServices, url, "post", request, this.options, true);
    }
  }
  /**
   * HTTP Rest Method to Get Key Info Data for a given scrip
   * @param request JSON Data to be posted to HTTP Request
   */
  getOISpurtsData(request) {
    if (this.shared.isInternetAvailable) {
      const url = this.urls.getOISpurtsURL();
      return src_app_utility_requestFactory_utils__WEBPACK_IMPORTED_MODULE_0__.RequestFactory.requestHandler(this.requestServices, url, "post", request, this.options, false);
    }
  }
  /**
   * Function to get bulk list
   * @param request object parameter to fetch list against
   */
  getBulkListSegmentWise(request) {
    if (this.shared.isInternetAvailable) {
      const url = this.urls.getBulkListUrl();
      return src_app_utility_requestFactory_utils__WEBPACK_IMPORTED_MODULE_0__.RequestFactory.requestHandler(this.requestServices, url, "post", request, this.options, false);
    }
  }
  /**
   * Function to get block list
   * @param request object parameter to fetch list against
   */
  getBlockListSegmentWise(request) {
    if (this.shared.isInternetAvailable) {
      const url = this.urls.getBlockListUrl();
      return src_app_utility_requestFactory_utils__WEBPACK_IMPORTED_MODULE_0__.RequestFactory.requestHandler(this.requestServices, url, "post", request, this.options, false);
    }
  }
  /**
   * Function to get Advance Declines
   * @param request object parameter to fetch list against
   */
  getAdvanceDeclines(segmentId, token) {
    if (this.shared.isInternetAvailable) {
      const url = this.urls.getAdvanceDeclineURL(segmentId + '', (token || 0) + '');
      this.shared.isServiceHit = true;
      return src_app_utility_requestFactory_utils__WEBPACK_IMPORTED_MODULE_0__.RequestFactory.requestHandler(this.requestServices, url, "get", null, this.options, false);
    }
  }
  /**
   * HTTP Rest Method to Get Global Indices Data
   * @param request JSON Data to be posted to HTTP Request
   */
  getGlobalIndices(request) {
    if (this.shared.isInternetAvailable) {
      const url = this.urls.getGlobalIndicesURL();
      return src_app_utility_requestFactory_utils__WEBPACK_IMPORTED_MODULE_0__.RequestFactory.requestHandler(this.requestServices, url, "post", request, this.options, false);
    } else {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(new Error("Limited or No Internet Connection."));
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
MarketService = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)(), (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__metadata)("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient, _api_urls__WEBPACK_IMPORTED_MODULE_1__.APIURLs, _shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__.SharedDataService, _error_handler_jiffy_error_handler_service__WEBPACK_IMPORTED_MODULE_2__.JiffyErrorHandler, _sockets_broadcaster__WEBPACK_IMPORTED_MODULE_4__.Broadcaster])], MarketService);


/***/ })

}]);