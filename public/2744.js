"use strict";
(self["webpackChunkjiffy_upgraded"] = self["webpackChunkjiffy_upgraded"] || []).push([[2744],{

/***/ 12744:
/*!**************************************************!*\
  !*** ./src/app/services/rest/company.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CompanyService: () => (/* binding */ CompanyService)
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









/** Service Utility for Scrip related Http Requests */
let CompanyService = class CompanyService {
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
  /**
   * HTTP Rest Method to Get Best Five Data
   * @param request JSON Data to be posted to HTTP Request
   */
  getBestFive(request) {
    if (this.shared.isInternetAvailable) {
      const url = this.urls.getBestFiveURL();
      return src_app_utility_requestFactory_utils__WEBPACK_IMPORTED_MODULE_0__.RequestFactory.requestHandler(this.requestServices, url, "post", request, this.options, true);
    }
  }
  /**
   * HTTP Rest Method to Get Intraday Chart Data
   * @param request JSON Data to be posted to HTTP Request
   */
  getIntradayChart(request) {
    if (this.shared.isInternetAvailable) {
      const url = this.urls.getIntradayChartURL();
      return src_app_utility_requestFactory_utils__WEBPACK_IMPORTED_MODULE_0__.RequestFactory.requestHandler(this.requestServices, url, "post", request, this.options, false);
    }
  }
  /**
   * HTTP Rest Method to Get Instraday OHLC Chart Data
   * @param request JSON Data to be posted to HTTP Request
   */
  getIntradayOHLC(request) {
    if (this.shared.isInternetAvailable) {
      const url = this.urls.getIntradayOHLCURL();
      return src_app_utility_requestFactory_utils__WEBPACK_IMPORTED_MODULE_0__.RequestFactory.requestHandler(this.requestServices, url, "post", request, this.options, false);
    }
  }
  /**
   * HTTP Rest Method to Get Instraday OHLC Data with past History
   * @param request JSON Data to be posted to HTTP Request
   */
  getIntradayHistory(request) {
    if (this.shared.isInternetAvailable) {
      const url = this.urls.getIntradayHistoryURL();
      return src_app_utility_requestFactory_utils__WEBPACK_IMPORTED_MODULE_0__.RequestFactory.requestHandler(this.requestServices, url, "post", request, this.options, false);
    }
  }
  /**
   * HTTP Rest Method to Get Historic OHLC Chart Data
   * @param request JSON Data to be posted to HTTP Request
   */
  getHistoricOHLC(request) {
    if (this.shared.isInternetAvailable) {
      const url = this.urls.getHistoricOHLCURL();
      return src_app_utility_requestFactory_utils__WEBPACK_IMPORTED_MODULE_0__.RequestFactory.requestHandler(this.requestServices, url, "post", request, this.options, false);
    }
  }
  /**
   * HTTP Rest Method to Get Scrip Details
   * @param request JSON Data to be posted to HTTP Request
   */
  getScripDetails(request) {
    if (this.shared.isInternetAvailable) {
      const url = this.urls.getScripDetURL();
      return src_app_utility_requestFactory_utils__WEBPACK_IMPORTED_MODULE_0__.RequestFactory.requestHandler(this.requestServices, url, "post", request, this.options, true);
    }
  }
  /**
   * HTTP Rest Method to Get Mapped Tokens for An Equity Scrip
   * @param request JSON Data to be posted to HTTP Request
   */
  getMappedTokens(request) {
    if (this.shared.isInternetAvailable) {
      const url = this.urls.getMappedTokenURL();
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
   * HTTP Rest Method to Get Peer comparison data for a given Scrip
   * @param request JSON Data to be posted to HTTP Request
   */
  getScripPeers(request) {
    if (this.shared.isInternetAvailable) {
      const url = this.urls.getScripPeersURL();
      return src_app_utility_requestFactory_utils__WEBPACK_IMPORTED_MODULE_0__.RequestFactory.requestHandler(this.requestServices, url, "post", request, this.options, true);
    }
  }
  /**
   * HTTP Rest Method to Get News related for a scrip
   * @param request JSON Data to be posted to HTTP Request
   */
  getScripNews(request) {
    if (this.shared.isInternetAvailable) {
      const url = this.urls.getScripNewsNewURL();
      return src_app_utility_requestFactory_utils__WEBPACK_IMPORTED_MODULE_0__.RequestFactory.requestHandler(this.requestServices, url, "post", request, this.options, false);
    }
  }
  /**
   * HTTP Rest Method to Get Announcement Data fo a given Scrip
   * @param request JSON Data to be posted to HTTP Request
   */
  getScripAnnouncements(request) {
    if (this.shared.isInternetAvailable) {
      this.shared.isServiceHit = true;
      const url = this.urls.getScripAnnouncementsURL();
      return src_app_utility_requestFactory_utils__WEBPACK_IMPORTED_MODULE_0__.RequestFactory.requestHandler(this.requestServices, url, "post", request, this.options, false);
    }
  }
  /**
   * HTTP Rest Method to Get Company Office Data
   * @param request JSON Data to be posted to HTTP Request
   */
  getCompanyOfficeData(request) {
    if (this.shared.isInternetAvailable) {
      const url = this.urls.getCompanyOfficeDetailURL();
      return src_app_utility_requestFactory_utils__WEBPACK_IMPORTED_MODULE_0__.RequestFactory.requestHandler(this.requestServices, url, "post", request, this.options, false);
    }
  }
  /**
   * HTTP Rest Method to Get Key Ratios Data for a given scrip
   * @param request JSON Data to be posted to HTTP Request
   */
  getKeyRatios(request) {
    if (this.shared.isInternetAvailable) {
      const url = this.urls.getScripKeyRatiosURL();
      return src_app_utility_requestFactory_utils__WEBPACK_IMPORTED_MODULE_0__.RequestFactory.requestHandler(this.requestServices, url, "post", request, this.options, true);
    }
  }
  /**
   * HTTP Rest Method to Get Company Holdings
   * @param request JSON Data to be posted to HTTP Request
   */
  getCompanyHoldings(request) {
    if (this.shared.isInternetAvailable) {
      const url = this.urls.getCompanyHoldingsURL();
      return src_app_utility_requestFactory_utils__WEBPACK_IMPORTED_MODULE_0__.RequestFactory.requestHandler(this.requestServices, url, "post", request, this.options, true);
    }
  }
  /**
   * HTTP Rest Method to Get share Holdings of company
   * @param request JSON Data to be posted to HTTP Request
   */
  getScripShareHoldings(request) {
    if (this.shared.isInternetAvailable) {
      const url = this.urls.getScripShareHolding();
      return src_app_utility_requestFactory_utils__WEBPACK_IMPORTED_MODULE_0__.RequestFactory.requestHandler(this.requestServices, url, "post", request, this.options, true);
    }
  }
  /**
   * HTTP Rest Method to Get Company Management Data
   * @param request JSON Data to be posted to HTTP Request
   */
  getCompanyManagementDetail(request) {
    if (this.shared.isInternetAvailable) {
      this.shared.isServiceHit = true;
      const url = this.urls.getCompanyManagementURL();
      return src_app_utility_requestFactory_utils__WEBPACK_IMPORTED_MODULE_0__.RequestFactory.requestHandler(this.requestServices, url, "post", request, this.options, false);
    }
  }
  /**
   * HTTP Rest Method to Get Future List Data of FUT Scrips
   * @param request JSON Data to be posted to HTTP Request
   */
  getFutureData(request) {
    if (this.shared.isInternetAvailable) {
      const url = this.urls.getFutureData();
      return src_app_utility_requestFactory_utils__WEBPACK_IMPORTED_MODULE_0__.RequestFactory.requestHandler(this.requestServices, url, "post", request, this.options, true);
    }
  }
  /**
   * HTTP Rest Method to Get Option Contracts of Option Scrips
   * @param request JSON Data to be posted to HTTP Request
   */
  getOptionContractsData(request) {
    if (this.shared.isInternetAvailable) {
      const url = this.urls.getOptionContractsData();
      return src_app_utility_requestFactory_utils__WEBPACK_IMPORTED_MODULE_0__.RequestFactory.requestHandler(this.requestServices, url, "post", request, this.options, true);
    }
  }
  /**
   * HTTP Rest Method to Get Financial Data of company
   * @param request JSON Data to be posted to HTTP Request
   */
  getFinancialData(request) {
    if (this.shared.isInternetAvailable) {
      const url = this.urls.getFinancialURL();
      return src_app_utility_requestFactory_utils__WEBPACK_IMPORTED_MODULE_0__.RequestFactory.requestHandler(this.requestServices, url, "post", request, this.options, true);
    }
  }
  /**
   * HTTP Rest Method to Get Profile of Company
   * @param request JSON Data to be posted to HTTP Request
   */
  getCompanyProfile(request) {
    if (this.shared.isInternetAvailable) {
      const url = this.urls.getCompanyProfile();
      return src_app_utility_requestFactory_utils__WEBPACK_IMPORTED_MODULE_0__.RequestFactory.requestHandler(this.requestServices, url, "post", request, this.options, false);
    }
  }
  /**
   * HTTP Rest Method to Get Most Active Scrips Index wise
   * @param request JSON Data to be posted to HTTP Request
   */
  getMostActiveByIndex(request) {
    if (this.shared.isInternetAvailable) {
      const url = this.urls.getActiveByIndexURL();
      return src_app_utility_requestFactory_utils__WEBPACK_IMPORTED_MODULE_0__.RequestFactory.requestHandler(this.requestServices, url, "post", request, this.options, false);
    }
  }
  /**
   * HTTP Rest Method to Get Most Active Scrips Segment wise
   * @param request JSON Data to be posted to HTTP Request
   */
  getMostActiveBySegment(request) {
    if (this.shared.isInternetAvailable) {
      const url = this.urls.getActiveBySegmentURL();
      return src_app_utility_requestFactory_utils__WEBPACK_IMPORTED_MODULE_0__.RequestFactory.requestHandler(this.requestServices, url, "post", request, this.options, false);
    }
  }
  /**
   * HTTP Rest Method to Get Market Movers
   * @param request JSON Data to be posted to HTTP Request
   */
  getMarketMovers(request) {
    if (this.shared.isInternetAvailable) {
      const url = this.urls.getMarketMoversURL();
      return src_app_utility_requestFactory_utils__WEBPACK_IMPORTED_MODULE_0__.RequestFactory.requestHandler(this.requestServices, url, "post", request, this.options, false);
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
   * HTTP Rest Method to Get Touchline Data of Multiple Scrips
   * @param request JSON Data to be posted to HTTP Request
   */
  getMultipleTouchline(request) {
    if (this.shared.isInternetAvailable) {
      const url = this.urls.getMultipleTouchLineURL();
      return src_app_utility_requestFactory_utils__WEBPACK_IMPORTED_MODULE_0__.RequestFactory.requestHandler(this.requestServices, url, "post", request, this.options, true);
    }
  }
  /***
   * Get Standard Pivot
   */
  getStandardPivotData(request) {
    const url = this.urls.getStandardPivotUrl();
    return src_app_utility_requestFactory_utils__WEBPACK_IMPORTED_MODULE_0__.RequestFactory.requestHandler(this.requestServices, url, "post", request, this.options, false);
  }
  /**
   * Get Fibonacci Pivot
   */
  getFibonacciPivotData(request) {
    const url = this.urls.getFibonacciPivotUrl();
    return src_app_utility_requestFactory_utils__WEBPACK_IMPORTED_MODULE_0__.RequestFactory.requestHandler(this.requestServices, url, "post", request, this.options, false);
  }
  /**
   * Get Pivot Points
   */
  getPivotPoints(request) {
    const url = this.urls.getPivotPointsURL();
    return src_app_utility_requestFactory_utils__WEBPACK_IMPORTED_MODULE_0__.RequestFactory.requestHandler(this.requestServices, url, "post", request, this.options, true);
  }
  /**
   * Get Pivot Points
   */
  getCompanyReports(request) {
    let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({
      'Content-Type': 'application/json',
      'accept': 'application/json'
      //'from': 'Web_' + location.host + '_' + this.urls.getVersion()
    });
    let options = {
      headers: headers
    };
    const url = this.urls.getNewCompanyReports(this.shared.userId);
    return src_app_utility_requestFactory_utils__WEBPACK_IMPORTED_MODULE_0__.RequestFactory.requestHandler(this.requestServices, url, "post", request, options, true);
  }
  /**
   * Function to get Advance Declines
   * @param request object parameter to fetch list against
   */
  getAdvanceDeclines(segmentId, token) {
    if (this.shared.isInternetAvailable) {
      const url = this.urls.getAdvanceDeclineURL(segmentId + '', (token || 0) + '');
      return src_app_utility_requestFactory_utils__WEBPACK_IMPORTED_MODULE_0__.RequestFactory.requestHandler(this.requestServices, url, "get", null, this.options, false);
    }
  }
  getEventCalendar(request) {
    if (this.shared.isInternetAvailable) {
      const url = this.urls.getEventCalendarURL();
      this.shared.isServiceHit = true;
      return src_app_utility_requestFactory_utils__WEBPACK_IMPORTED_MODULE_0__.RequestFactory.requestHandler(this.requestServices, url, "post", request, this.options, false);
    }
  }
  /**
   * HTTP Rest Method to Get Search reesults
   * @param request JSON Data to be posted to HTTP Request
   */
  getSearchData(request) {
    if (this.shared.isInternetAvailable) {
      const url = this.urls.getSearchURL();
      return src_app_utility_requestFactory_utils__WEBPACK_IMPORTED_MODULE_0__.RequestFactory.requestHandler(this.requestServices, url, "post", request, this.options, true);
    } else {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(new Error("Limited or No Internet Connection."));
    }
  }
  getCompanyFAQ() {
    if (this.shared.isInternetAvailable) {
      const url = this.urls.getCompanyFAQURL();
      return src_app_utility_requestFactory_utils__WEBPACK_IMPORTED_MODULE_0__.RequestFactory.requestHandler(this.requestServices, url, "get", null, this.options, false);
    }
  }
  getnonEquityMappedTokens(request) {
    if (this.shared.isInternetAvailable) {
      const url = this.urls.getNonEquityMappedTokensURL();
      return src_app_utility_requestFactory_utils__WEBPACK_IMPORTED_MODULE_0__.RequestFactory.requestHandler(this.requestServices, url, "post", request, this.options, true);
    }
  }
  /**
  * Function to get Advance Declines
  * @param request object parameter to fetch list against
  */
  getITAScripDetail(segmentId, token) {
    if (this.shared.isInternetAvailable) {
      const url = this.urls.getITAScripDetailURL(segmentId, token);
      return src_app_utility_requestFactory_utils__WEBPACK_IMPORTED_MODULE_0__.RequestFactory.requestHandler(this.requestServices, url, "get", null, this.options, true);
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
CompanyService = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)(), (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__metadata)("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient, _api_urls__WEBPACK_IMPORTED_MODULE_1__.APIURLs, _shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__.SharedDataService, _error_handler_jiffy_error_handler_service__WEBPACK_IMPORTED_MODULE_2__.JiffyErrorHandler, _sockets_broadcaster__WEBPACK_IMPORTED_MODULE_4__.Broadcaster])], CompanyService);


/***/ })

}]);