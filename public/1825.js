"use strict";
(self["webpackChunkjiffy_upgraded"] = self["webpackChunkjiffy_upgraded"] || []).push([[1825],{

/***/ 41825:
/*!*************************************************************!*\
  !*** ./src/app/post-login-module/reports/reports.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReportsModule: () => (/* binding */ ReportsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/guards/auth.guard */ 61620);
/* harmony import */ var src_app_services_rest_reports_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/rest/reports.service */ 86452);





const routeConfig = {
  header: true,
  footer: true,
  indices: false,
  betaFooter: false,
  ticker: true,
  watchlist: false,
  watchlistHidden: true,
  freshChat: false
};
const ReportsRoutes = [{
  path: "PNLReport",
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e(4941), __webpack_require__.e(2076), __webpack_require__.e(9790)]).then(__webpack_require__.bind(__webpack_require__, /*! ./pnl-report/pnl-report.component */ 49790)).then(m => m.PnlReportComponent),
  canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  data: {
    config: routeConfig,
    fullScreen: true,
    style: [],
    script: ["assets/libs/jspdf.js"]
  }
}, {
  path: "ledgerReport",
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e(4941), __webpack_require__.e(2076), __webpack_require__.e(7966)]).then(__webpack_require__.bind(__webpack_require__, /*! ./ledger-report/ledger-report.component */ 67966)).then(m => m.LedgerReportComponent),
  canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  data: {
    config: routeConfig,
    fullScreen: true,
    style: [],
    script: ["assets/libs/jspdf.js"]
  }
}, {
  path: "payInOut",
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e(4941), __webpack_require__.e(9966), __webpack_require__.e(8149), __webpack_require__.e(8366)]).then(__webpack_require__.bind(__webpack_require__, /*! ./transaction/transaction.component */ 48366)).then(m => m.TransactionComponent),
  canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  data: {
    config: routeConfig,
    fullScreen: true,
    style: [],
    script: ["assets/libs/jspdf.js"]
  }
}, {
  path: "global-details",
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e(4941), __webpack_require__.e(2076), __webpack_require__.e(1930)]).then(__webpack_require__.bind(__webpack_require__, /*! ./datewise-pnl/datewise-pnl.component */ 81930)).then(m => m.DatewisePnlComponent),
  canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  data: {
    config: routeConfig,
    fullScreen: true,
    style: [],
    script: ["assets/libs/jspdf.js"]
  }
}, {
  path: "contract-notes",
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e(2076), __webpack_require__.e(3252)]).then(__webpack_require__.bind(__webpack_require__, /*! ./contract-notes/contract-notes.component */ 23252)).then(m => m.ContractNotesComponent),
  canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  data: {
    config: routeConfig,
    fullScreen: true,
    style: []
  }
}, {
  path: "tax-report",
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e(2076), __webpack_require__.e(1640)]).then(__webpack_require__.bind(__webpack_require__, /*! ./tax-report/tax-report.component */ 71640)).then(m => m.TaxReportComponent),
  canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  data: {
    config: routeConfig,
    fullScreen: true,
    style: [],
    script: ["assets/libs/jspdf.js"]
  }
}];
let ReportsModule = class ReportsModule {};
ReportsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(ReportsRoutes)],
  // This service is singleton for this module to avoid multiple instances
  providers: [src_app_services_rest_reports_service__WEBPACK_IMPORTED_MODULE_1__.ReportsService]
})], ReportsModule);


/***/ }),

/***/ 86452:
/*!**************************************************!*\
  !*** ./src/app/services/rest/reports.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReportsService: () => (/* binding */ ReportsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 21626);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 18810);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 96354);
/* harmony import */ var src_app_utility_requestFactory_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/utility/requestFactory.utils */ 13991);
/* harmony import */ var _api_urls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api-urls */ 26702);
/* harmony import */ var _error_handler_jiffy_error_handler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../error-handler/jiffy-error-handler.service */ 9676);
/* harmony import */ var _shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared-data/shared-data.service */ 46013);
/* harmony import */ var _sockets_broadcaster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sockets/broadcaster */ 28510);










/** Service Utility for PNL & Ledger Http Requests*/
let ReportsService = class ReportsService {
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
      'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkFERTVFMDY1RTc0NUYzQTNGOTlBNjU0NEY2NjgzNUYxODBDNjQ1MDIiLCJ0eXAiOiJKV1QiLCJ4NXQiOiJyZVhnWmVkRjg2UDVtbVZFOW1nMThZREdSUUkifQ.eyJuYmYiOjE1ODUyNzY4MTEsImV4cCI6MTU4NTI5NDgxMSwiaXNzIjoiaHR0cHM6Ly9sb2dpbi5jaG9pY2VpbmRpYS5jb20iLCJhdWQiOlsiaHR0cHM6Ly9sb2dpbi5jaG9pY2VpbmRpYS5jb20vcmVzb3VyY2VzIiwiYXBpMSJdLCJjbGllbnRfaWQiOiJORVVST04iLCJzdWIiOiI4MDc4OGNjMC05M2E4LTQ5ODctOGM1My03MzNlNjUxYTIyZWIiLCJhdXRoX3RpbWUiOjE1ODUyNzY4MTAsImlkcCI6ImxvY2FsIiwibmFtZSI6IkFua2l0IEphaW4iLCJlbWFpbCI6ImFua2l0QGNob2ljZXRlY2hsYWIuY29tIiwicGhvbmVfbnVtYmVyIjoiIiwiYWRkcmVzcyI6IiIsInJvbGUiOiIiLCJpZCI6IiIsImRlcGFydG1lbnQiOiIiLCJwYW4iOiIiLCJ1c2VyX3R5cGUiOiIiLCJhZ2VudF9ubyI6IiIsInNjb3BlIjpbIm9wZW5pZCIsInByb2ZpbGUiLCJhcGkxIl0sImFtciI6WyJwd2QiXX0.dL1M6mlwx-C8tKIu50UR9WBGqFw8gtVvzye4Hl6-AjywsIvyWt0oVGFbgtnwJgenR89N1LH5wKzB0prYl4d0w8PT0fxfBlXvVjXwBHF3QN0QOeXrSERSvUueb7JY_qTstTyOnWVmv3wRPkgJD8TcUEWWoRurtqVB-Ahjp6FhleDCcAEbPe77rPn3rOxYkx7FmAmVBI5BlfsqKSGxyZcv-rE1gGJkh2ss3vdkk64zRXjEGJXe2_ALN6qKpFcSZxAWTZZmqlHDBJs0EbQQY37nWaQ-eb6c2NxtJ62GP99kBf5t1CLL7cKY1UMO971X9nk946TeDtLHz44W-s7BPKQq7w',
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
   * HTTP Rest Method to get PNL Data
   * @param request JSON Data to be posted to HTTP Request
   */
  getPNLReport(request, segment) {
    if (this.shared.isInternetAvailable) {
      let url = this.urls.getPNLReportURL(segment);
      return src_app_utility_requestFactory_utils__WEBPACK_IMPORTED_MODULE_0__.RequestFactory.requestHandler(this.requestServices, url, "post", request, null, false);
    } else {
      this.shared.isServiceHit = false;
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(new Error("Limited or No Internet Connection."));
    }
  }
  /**
   * HTTP Rest Method to get ledger Data
   * @param request JSON Data to be posted to HTTP Request
   */
  getLedgerReport(request) {
    if (this.shared.isInternetAvailable) {
      // let headers: HttpHeaders = new HttpHeaders();
      // headers.append('content-type', 'multipart/form-data');
      let url = this.urls.getLedgerReportURL();
      return src_app_utility_requestFactory_utils__WEBPACK_IMPORTED_MODULE_0__.RequestFactory.requestHandler(this.requestServices, url, "post", request, null, false);
    } else {
      this.shared.isServiceHit = false;
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(new Error("Limited or No Internet Connection."));
    }
  }
  /**
   * HTTP Rest Method to get Settlement Data for Cash Segment
   * @param request JSON Data to be posted to HTTP Request
   */
  getSettlementDetailsCash(request) {
    if (this.shared.isInternetAvailable) {
      let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders();
      headers.append('content-type', 'multipart/form-data');
      let formData = this.convertToFormData(request);
      let url = this.urls.getSettlementCashURL();
      return src_app_utility_requestFactory_utils__WEBPACK_IMPORTED_MODULE_0__.RequestFactory.requestHandler(this.requestServices, url, "post", formData, {
        headers
      }, false);
    } else {
      this.shared.isServiceHit = false;
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(new Error("Limited or No Internet Connection."));
    }
  }
  /**
   * HTTP Rest Method to get Settlement for FNO Segment
   * @param request JSON Data to be posted to HTTP Request
   */
  getSettlementDetailsFNO(request) {
    if (this.shared.isInternetAvailable) {
      let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({
        'Content-Type': 'multipart/form-data',
        'from': 'Web_' + location.host + '_' + this.urls.getVersion()
      });
      let formData = this.convertToFormData(request);
      let url = this.urls.getSettlementFNOURL();
      return src_app_utility_requestFactory_utils__WEBPACK_IMPORTED_MODULE_0__.RequestFactory.requestHandler(this.requestServices, url, "post", formData, {
        headers
      }, false);
    } else {
      this.shared.isServiceHit = false;
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(new Error("Limited or No Internet Connection."));
    }
  }
  /**
   * HTTP Rest Method to get scrip Details for cash Segment
   * @param request JSON Data to be posted to HTTP Request
   */
  getScripsDetailsCash(request) {
    if (this.shared.isInternetAvailable) {
      let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({
        'Content-Type': 'multipart/form-data',
        'from': 'Web_' + location.host + '_' + this.urls.getVersion()
      });
      let formData = this.convertToFormData(request);
      let url = this.urls.getScripsCashURL();
      return src_app_utility_requestFactory_utils__WEBPACK_IMPORTED_MODULE_0__.RequestFactory.requestHandler(this.requestServices, url, "post", formData, {
        headers
      }, false);
    } else {
      this.shared.isServiceHit = false;
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(new Error("Limited or No Internet Connection."));
    }
  }
  /**
   * HTTP Rest Method to get scrip Details for FNO Segment
   * @param request JSON Data to be posted to HTTP Request
   */
  getScripsDetailsFNO(request) {
    if (this.shared.isInternetAvailable) {
      let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({
        'Content-Type': 'multipart/form-data',
        'from': 'Web_' + location.host + '_' + this.urls.getVersion()
      });
      let formData = this.convertToFormData(request);
      let url = this.urls.getScripsFNOURL();
      this.shared.isServiceHit = true;
      return src_app_utility_requestFactory_utils__WEBPACK_IMPORTED_MODULE_0__.RequestFactory.requestHandler(this.requestServices, url, "post", formData, {
        headers
      }, false);
    } else {
      this.shared.isServiceHit = false;
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(new Error("Limited or No Internet Connection."));
    }
  }
  /**
   * HTTP Rest Method to get Trade Details for Cash Segment
   * @param request JSON Data to be posted to HTTP Request
   */
  getTradeDetailsCash(request) {
    if (this.shared.isInternetAvailable) {
      let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({
        'Content-Type': 'multipart/form-data',
        'from': 'Web_' + location.host + '_' + this.urls.getVersion()
      });
      let formData = this.convertToFormData(request);
      let url = this.urls.getTradeCashURL();
      this.shared.isServiceHit = true;
      return src_app_utility_requestFactory_utils__WEBPACK_IMPORTED_MODULE_0__.RequestFactory.requestHandler(this.requestServices, url, "post", formData, {
        headers
      }, false);
    } else {
      this.shared.isServiceHit = false;
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(new Error("Limited or No Internet Connection."));
    }
  }
  /**
   * HTTP Rest Method to get Trade Details for FNO Segment
   * @param request JSON Data to be posted to HTTP Request
   */
  getTradeDetailsFNO(request) {
    if (this.shared.isInternetAvailable) {
      let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({
        'Content-Type': 'multipart/form-data',
        'from': 'Web_' + location.host + '_' + this.urls.getVersion()
      });
      let formData = this.convertToFormData(request);
      let url = this.urls.getTradeFNOURL();
      return src_app_utility_requestFactory_utils__WEBPACK_IMPORTED_MODULE_0__.RequestFactory.requestHandler(this.requestServices, url, "post", formData, {
        headers
      }, false);
    } else {
      this.shared.isServiceHit = false;
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(new Error("Limited or No Internet Connection."));
    }
  }
  /**
   * HTTP Rest Method to get PNL Data
   * @param request JSON Data to be posted to HTTP Request
   */
  generateReport(request) {
    if (this.shared.isInternetAvailable) {
      let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders();
      let url = this.urls.getGenerateReportURL();
      return src_app_utility_requestFactory_utils__WEBPACK_IMPORTED_MODULE_0__.RequestFactory.requestHandler(this.requestServices, url, "post", JSON.stringify(request), null, false);
    } else {
      this.shared.isServiceHit = false;
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(new Error("Limited or No Internet Connection."));
    }
  }
  /**
   * Transform Request Object to Form Data
   * @param data JSON Object to be converted
   */
  convertToFormData(data) {
    let keys = Object.keys(data) || [];
    let formData = new FormData();
    keys.forEach(element => {
      formData.append(element, data[element]);
    });
    return formData;
  }
  getPayInTransactions(request) {
    if (this.shared.isInternetAvailable) {
      let url = this.urls.getPayInTransactionURL();
      return src_app_utility_requestFactory_utils__WEBPACK_IMPORTED_MODULE_0__.RequestFactory.requestHandler(this.requestServices, url, "post", request, this.options, false);
    }
  }
  getPayOutTransactions(request) {
    if (this.shared.isInternetAvailable) {
      let url = this.urls.getPayOutTransactionURL();
      return src_app_utility_requestFactory_utils__WEBPACK_IMPORTED_MODULE_0__.RequestFactory.requestHandler(this.requestServices, url, "post", request, this.options, false);
    }
  }
  /**
   * HTTP Rest Method to Get BrokerageSlab
   * @param request JSON Data to be posted to HTTP Request
   */
  getBrokerageSlab(request) {
    if (this.shared.isInternetAvailable) {
      let url = this.urls.getBrokerageSlabURL();
      return src_app_utility_requestFactory_utils__WEBPACK_IMPORTED_MODULE_0__.RequestFactory.requestHandler(this.requestServices, url, "post", request, this.options, true);
    } else {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(new Error("Limited or No Internet Connection."));
    }
  }
  /**
   * HTTP Rest Method to Get BrokerageSlab
   * @param request JSON Data to be posted to HTTP Request
   */
  getContractNotes(request) {
    if (this.shared.isInternetAvailable) {
      let url = this.urls.getContractNotesURL();
      return src_app_utility_requestFactory_utils__WEBPACK_IMPORTED_MODULE_0__.RequestFactory.requestHandler(this.requestServices, url, "post", request, this.options, true).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(response => {
        return {
          [request.DateFilter]: response
        };
      }));
    } else {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(new Error("Limited or No Internet Connection."));
    }
  }
  /**
   * HTTP Rest Method to Get BrokerageSlab
   * @param request JSON Data to be posted to HTTP Request
   */
  getDetailedPNLReport(request) {
    if (this.shared.isInternetAvailable) {
      let url = this.urls.getDetailedPNLURL();
      return src_app_utility_requestFactory_utils__WEBPACK_IMPORTED_MODULE_0__.RequestFactory.requestHandler(this.requestServices, url, "post", request, this.options, true);
    } else {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(new Error("Limited or No Internet Connection."));
    }
  }
  /**
  * HTTP Rest Method to Get BrokerageSlab
  * @param request JSON Data to be posted to HTTP Request
  */
  getTaxReportDetails(request) {
    if (this.shared.isInternetAvailable) {
      let url = this.urls.getTaxReportURL();
      return src_app_utility_requestFactory_utils__WEBPACK_IMPORTED_MODULE_0__.RequestFactory.requestHandler(this.requestServices, url, "post", request, this.options, true);
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
ReportsService = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Injectable)(), (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__metadata)("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient, _api_urls__WEBPACK_IMPORTED_MODULE_1__.APIURLs, _shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__.SharedDataService, _error_handler_jiffy_error_handler_service__WEBPACK_IMPORTED_MODULE_2__.JiffyErrorHandler, _sockets_broadcaster__WEBPACK_IMPORTED_MODULE_4__.Broadcaster])], ReportsService);


/***/ })

}]);