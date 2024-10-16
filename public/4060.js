"use strict";
(self["webpackChunkjiffy_upgraded"] = self["webpackChunkjiffy_upgraded"] || []).push([[4060],{

/***/ 64060:
/*!******************************************************************!*\
  !*** ./src/app/market/secure-products/secure-products.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SecureProductsModule: () => (/* binding */ SecureProductsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var src_app_guards_basic_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/guards/basic.guard */ 72972);
/* harmony import */ var src_app_services_rest_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/rest/login.service */ 60954);
/* harmony import */ var src_app_services_rest_scheme_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/rest/scheme.service */ 25034);



// import { DropdownModule } from 'ngx-dropdown';



const RouteConfig = {
  config: {
    header: true,
    footer: true,
    indices: false,
    betaFooter: false,
    ticker: true,
    watchlist: false,
    freshChat: false
  },
  fullScreen: true
};
const routes = [{
  path: ":type/scheme-transaction",
  loadComponent: () => __webpack_require__.e(/*! import() */ 3734).then(__webpack_require__.bind(__webpack_require__, /*! ./secure-products-transaction/secure-products-transaction.component */ 73734)).then(m => m.SecureProductsTransactionComponent),
  canActivate: [src_app_guards_basic_guard__WEBPACK_IMPORTED_MODULE_0__.BasicGuard],
  data: RouteConfig
}, {
  path: ":type",
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e(9966), __webpack_require__.e(8149), __webpack_require__.e(2122)]).then(__webpack_require__.bind(__webpack_require__, /*! ./secure-products/secure-products.component */ 42122)).then(m => m.SecureProductsComponent),
  canActivate: [src_app_guards_basic_guard__WEBPACK_IMPORTED_MODULE_0__.BasicGuard],
  data: RouteConfig
}];
let SecureProductsModule = class SecureProductsModule {};
SecureProductsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  declarations: [],
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  providers: [src_app_services_rest_scheme_service__WEBPACK_IMPORTED_MODULE_2__.SchemeService, src_app_services_rest_login_service__WEBPACK_IMPORTED_MODULE_1__.LoginService]
})], SecureProductsModule);


/***/ }),

/***/ 25034:
/*!*************************************************!*\
  !*** ./src/app/services/rest/scheme.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SchemeService: () => (/* binding */ SchemeService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 21626);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var src_app_utility_requestFactory_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/utility/requestFactory.utils */ 13991);
/* harmony import */ var _api_urls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api-urls */ 26702);
/* harmony import */ var _error_handler_jiffy_error_handler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../error-handler/jiffy-error-handler.service */ 9676);
/* harmony import */ var _shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared-data/shared-data.service */ 46013);
/* harmony import */ var _sockets_broadcaster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sockets/broadcaster */ 28510);








// import { UtilsService } from './../../services/utils/utils.service';
let SchemeService = class SchemeService {
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
    let listingOptions = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({
      // 'Content-Type': 'application/json',
      'accept': 'text/plain',
      'from': 'Web_' + location.host + '_' + this.urls.getVersion()
    });
    this.options = {
      headers: headers
    };
    let headers2 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({
      'Content-Type': 'application/json',
      'accept': 'application/json',
      'from': 'Web_' + location.host + '_' + this.urls.getVersion()
    });
    this.options2 = {
      headers: headers2,
      observe: 'response'
    };
    this.requestServices = {
      shared: this.shared,
      errorHandler: this.errorHandler,
      http: this.http,
      broadcaster: this.broadcaster
    };
  }
  /**
  * HTTP Rest Method to Get SGB Listing
  * @param request JSON Data to be posted to HTTP Request
  */
  getSchemeListing(type, series) {
    if (this.shared.isInternetAvailable) {
      const url = type === 'sgb' ? this.urls.getSGBListingURL() : this.urls.getNCBListingURL(series);
      return src_app_utility_requestFactory_utils__WEBPACK_IMPORTED_MODULE_0__.RequestFactory.requestHandler(this.requestServices, url, "get", null, type === 'sgb' ? this.listingOptions : this.options2, true);
    }
  }
  getSchemeOrderStatus(type, request) {
    if (this.shared.isInternetAvailable) {
      const url = type === 'sgb' ? this.urls.getSGBOrderStatusURL() : '';
      // let payload = Object.assign(request, { "sessionId": this.utils.getSessionId() || '' });
      return src_app_utility_requestFactory_utils__WEBPACK_IMPORTED_MODULE_0__.RequestFactory.requestHandler(this.requestServices, url, "post", request, this.options, true);
    }
  }
  addUpdateSchemeOrder(type, request) {
    if (this.shared.isInternetAvailable) {
      const url = type === 'sgb' ? this.urls.getSGBAddUpdateOrderURL() : '';
      // let payload = Object.assign(request, { "sessionId": this.utils.getSessionId() || '' });
      return src_app_utility_requestFactory_utils__WEBPACK_IMPORTED_MODULE_0__.RequestFactory.requestHandler(this.requestServices, url, "post", request, this.options, true);
    }
  }
  /**
  * HTTP Rest Method to Get SGB Listing
  * @param request JSON Data to be posted to HTTP Request
  */
  getSchemeOrderBookListing(type, request) {
    if (this.shared.isInternetAvailable) {
      const url = type === 'sgb' ? this.urls.getSGBOrderBookURL() : '';
      return src_app_utility_requestFactory_utils__WEBPACK_IMPORTED_MODULE_0__.RequestFactory.requestHandler(this.requestServices, url, "post", request, this.listingOptions, true);
    }
  }
  getNCBOrderStatus(request) {
    if (this.shared.isInternetAvailable) {
      const url = this.urls.getNCBOrderStatusURL();
      return src_app_utility_requestFactory_utils__WEBPACK_IMPORTED_MODULE_0__.RequestFactory.requestHandler(this.requestServices, url, "post", request, this.options2, true);
    }
  }
  addUpdateNCBOrder(request, session, clientid) {
    if (this.shared.isInternetAvailable) {
      const url = this.urls.getNCBAddUpdateOrderURL(session, clientid);
      return src_app_utility_requestFactory_utils__WEBPACK_IMPORTED_MODULE_0__.RequestFactory.requestHandler(this.requestServices, url, "post", request, this.options2, true);
    }
  }
  getFAQs(request, clientid) {
    if (this.shared.isInternetAvailable) {
      let faqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({
        'source': "finx",
        'Content-Type': 'application/json',
        'client_id': clientid
      });
      this.faqOption = {
        headers: faqHeader
      };
      if (this.shared.isInternetAvailable) {
        const url = this.urls.getFAQURL();
        return src_app_utility_requestFactory_utils__WEBPACK_IMPORTED_MODULE_0__.RequestFactory.requestHandler(this.requestServices, url, "post", request, this.faqOption, true);
      }
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
SchemeService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)(), (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient, _api_urls__WEBPACK_IMPORTED_MODULE_1__.APIURLs, _shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__.SharedDataService, _error_handler_jiffy_error_handler_service__WEBPACK_IMPORTED_MODULE_2__.JiffyErrorHandler, _sockets_broadcaster__WEBPACK_IMPORTED_MODULE_4__.Broadcaster])], SchemeService);


/***/ })

}]);