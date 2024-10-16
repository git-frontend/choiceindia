(self["webpackChunkjiffy_upgraded"] = self["webpackChunkjiffy_upgraded"] || []).push([[3751],{

/***/ 30052:
/*!********************************************************************************!*\
  !*** ./src/app/post-login-module/tradebook/trade-book/trade-book.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TradeBookComponent: () => (/* binding */ TradeBookComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _trade_book_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trade-book.component.html?ngResource */ 88352);
/* harmony import */ var _trade_book_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trade-book.component.scss?ngResource */ 39458);
/* harmony import */ var _trade_book_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_trade_book_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/analytics/analytics.service */ 50213);
/* harmony import */ var _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../assets/libs/esm-moment.min.js */ 29483);
/* harmony import */ var _services_rest_post_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/rest/post-login.service */ 4135);
/* harmony import */ var _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/shared-data/shared-data.service */ 46013);
/* harmony import */ var _services_sockets_socket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/sockets/socket.service */ 6312);
/* harmony import */ var _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/utils/utils.service */ 89893);






/** Import Moment JS Library*/
// var moment: any = require();





/**
 * Component for Trade book
 */
let TradeBookComponent = class TradeBookComponent {
  /**
   * Constructor for Object Initialization
   * @param activeRoute ActivatedRoute instance
   * @param route Router Module Instance
   * @param rest PostLoginService instance for HTTP Requests
   * @param shared SharedDataService Instance
   * @param utils UtilsService instance
   * @param socket Broadcast Socket Instance
   */
  constructor(activeRoute, route, rest, shared, utils, socket, analytics) {
    this.activeRoute = activeRoute;
    this.route = route;
    this.rest = rest;
    this.shared = shared;
    this.utils = utils;
    this.socket = socket;
    this.analytics = analytics;
    this.tradeBookData = [];
    this.multiTouchlineData = [];
    this.cssClasses = {
      sortAscending: 'icon-angle-down',
      sortDescending: 'icon-angle-up',
      pagerLeftArrow: 'icon-angle-left',
      pagerRightArrow: 'icon-angle-right',
      pagerPrevious: 'icon-angle-left',
      pagerNext: 'icon-angle-right'
    };
  }
  /**
   * Life Cycle Hook for Initialization
   */
  ngOnInit() {
    // this.routeParamsSubscription = this.activeRoute.params.subscribe(params => {
    //   this.status = params['status'];
    //   this.token = params['token'];
    // })
    this.utils.setTrackMoeEvent('visitedTrades', {
      "User_ID": this.utils.getUserId() || 'guest',
      "IP": this.shared.IPAddress
    });
    this.analytics.emitEvent('visitedTrades', this.utils.getUserId() || 'guest', JSON.stringify({
      "IP": this.shared.IPAddress
    }), 1);
    this.getTradeBookData();
  }
  /**
   * Life Cycle Hook for destruction
   */
  ngOnDestroy() {
    if (this.routeParamsSubscription) this.routeParamsSubscription.unsubscribe();
    if (this.tradebookSubscription) this.tradebookSubscription.unsubscribe();
    this.utils.unSubscribeMultitouchline(this.multiTouchlineData, 'tradebook');
  }
  /**
   * Get Tradebook Data
   */
  getTradeBookData() {
    let request = {
      "UserId": this.utils.getUserId(),
      "SessionId": this.utils.getSessionId() || '',
      accessToken: this.utils.getTwoFAAccessToken(),
      offset: 0,
      count: 1000
    };
    this.rest.getTradeBookData(request).subscribe(data => {
      if (data.Status === "Success" && data.Response) {
        this.tradeBookData = data.Response.lT || [];
        this.tradeBookData.forEach((element, index) => {
          if ([2, 7, 4].indexOf(element.lExchangeScrip.SegmentId) > -1) {
            element.Q = element.Q / element.lExchangeScrip.MarketLot;
            // element.TradedQty = element.TradedQty / element.lExchangeScrip.MarketLot;
          }
          element.SecName = element.lExchangeScrip.SecName;
          element.LTP = (element.LTP || 0) / element.lExchangeScrip.PriceDivisor;
          element.Product = ["D", "AD"].indexOf(element.PT) > -1 ? 'DELIVERY' : element.PT === 'MF' ? "MTF" : 'INTRADAY';
          element.Time = this.utils.changeCurrentDateFormat(element.Time, 'YYYY-MM-DD HH:mm:ss', 'HH:mm:ss');
          element.LUT = "01-01-1980 12:00:00";
          element.LTT = "01-01-1980 12:00:00";
          let companyPath = element.lExchangeScrip.SecDesc.toLowerCase().replace(/[\s|\&|\%]/g, '').trim();
          let urlPrefix = '/instrument/' + (element.lExchangeScrip["IsIndex"] == 1 || [6, 8, 14, 39].indexOf(element.lExchangeScrip.SegmentId) > -1 ? 'indices/' : [1, 2, 3, 4].indexOf(element.lExchangeScrip.SegmentId) > -1 && !element.lExchangeScrip["IsIndex"] ? 'equity/' : [5, 7].indexOf(element.lExchangeScrip.SegmentId) > -1 ? 'commodity/' : 'currency/');
          element.companyURL = urlPrefix + companyPath + '/' + element.lExchangeScrip.SegmentId + '/' + element.lExchangeScrip.Token;
          this.multiTouchlineData.push(element.lExchangeScrip);
        });
        if (this.status && this.token) {
          this.tradeBookData = this.tradeBookData.filter(obj => {
            return obj.lExchangeScrip.Token == this.token && obj.PT == (this.status == 'INTRADAY' ? 'M' : 'D');
          });
        }
        this.utils.subscribeMultitouchline(this.multiTouchlineData);
        this.getSocketData();
        // } else if (this.utils.isSessionExpired(data.Reason)) {
        //   if(this.shared.isSSO){
        //     this.utils.sessionExpireHandling()
        //     return
        //   }
        //   this.shared.userId = null;
        //   this.utils.error('Session Expired', 'Please Login Again.');
        //   this.utils.postFeatureCount();
        //   this.utils.clearLoginDetails();
        //   this.shared.userId = null;
        //   this.route.navigate(['auth/login']);
      } else {
        this.utils.error('Error', data.Reason);
      }
    }, err => {
      this.shared.isServiceHit = false;
    });
  }
  /**
   * Subscribe to Socket Response Packets
   */
  getSocketData() {
    this.tradebookSubscription = this.socket.broadcaster.on('watchlist').subscribe(data => {
      let reference = this.tradeBookData.filter(obj => {
        return data[0][1] == obj.lExchangeScrip.SegmentId && obj.lExchangeScrip.Token == data[0][7];
      });
      if (reference.length > 0) {
        let priceDivisor = reference[0].lExchangeScrip.PriceDivisor ? reference[0].lExchangeScrip.PriceDivisor : 100;
        reference.forEach(element => {
          element.LTP = Number(data[0][8]) == 0 ? Number(data[0][76]) / priceDivisor : Number(data[0][8]) / priceDivisor; // if LTP == 0 then show prevClose (11/05/2021) 
          element.lExchangeScrip.LTP = element.LTP;
          element.lExchangeScrip.volume = Number(data[0][79]);
          element.lExchangeScrip.class = Number(data[0][8]) < Number(data[0][76]) ? "down" : Number(data[0][8]) > Number(data[0][76]) ? "up" : "";
          element.lExchangeScrip.difference = Math.abs(element.lExchangeScrip.LTP - Number(data[0][76]) / priceDivisor);
          element.lExchangeScrip.difference = isNaN(element.lExchangeScrip.difference) ? 0.00 : element.lExchangeScrip.difference;
          element.lExchangeScrip.percent = element.lExchangeScrip.difference / (Number(data[0][76]) / priceDivisor) * 100;
          element.lExchangeScrip.percent = isNaN(element.lExchangeScrip.percent) ? 0.00 : element.lExchangeScrip.percent;
          element.LTT = this.utils.changeCurrentDateFormat(data[0][73], 'YYYY-MM-DD HHmmss', 'DD-MM-YYYY HH:mm:ss');
          element.LUT = this.utils.changeCurrentDateFormat(data[0][74], 'YYYY-MM-DD HHmmss', 'DD-MM-YYYY HH:mm:ss');
        });
      }
    });
  }
  /** Open Search in case of No Data */
  openSearch() {
    this.utils.broadcast('openSearch');
  }
  /** export to CSV */
  exportCSVTradebook() {
    let csvData = 'data:text/csv;charset=utf-8,';
    let tableData = ['Instrument', 'Exchange', 'Trade No.', 'Time', 'Type', 'QTY | LOT', 'Price', 'Product'];
    csvData += tableData.join(',') + '\n';
    this.tradeBookData.forEach((data, index) => {
      csvData += [data.SecName, data.lExchangeScrip.ExchangeSegment, data.TNo, data.Time, data.BS == 1 ? 'BUY' : 'SELL', data.Q, data.P / data.lExchangeScrip.PriceDivisor, data.Product].join(',') + '\n';
    });
    var link = document.createElement("a"); // to create anchor tag
    link.setAttribute("href", csvData); // to add href attribute to anchor tag
    link.setAttribute("download", this.utils.getUserId() + '_Tradebook_' + new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_3__["default"]().format('YYYYMMDDHHmmSSS') + '.csv'); // to add download attribute to anchor tag
    document.body.appendChild(link); // append html element to body
    link.click(); // added click event to achor tag
    document.body.removeChild(link);
  }
  static {
    this.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
    }, {
      type: _services_rest_post_login_service__WEBPACK_IMPORTED_MODULE_4__.PostLoginService
    }, {
      type: _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__.SharedDataService
    }, {
      type: _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_7__.UtilsService
    }, {
      type: _services_sockets_socket_service__WEBPACK_IMPORTED_MODULE_6__.SocketService
    }, {
      type: src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_2__.AnalyticsService
    }];
  }
};
TradeBookComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-trade-book',
  template: _trade_book_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_trade_book_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute, _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router, _services_rest_post_login_service__WEBPACK_IMPORTED_MODULE_4__.PostLoginService, _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__.SharedDataService, _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_7__.UtilsService, _services_sockets_socket_service__WEBPACK_IMPORTED_MODULE_6__.SocketService, src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_2__.AnalyticsService])], TradeBookComponent);


/***/ }),

/***/ 93751:
/*!******************************************************************!*\
  !*** ./src/app/post-login-module/tradebook/tradebook.routing.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TradeBookRoutes: () => (/* binding */ TradeBookRoutes)
/* harmony export */ });
/* harmony import */ var src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/guards/auth.guard */ 61620);
/* harmony import */ var _trade_book_trade_book_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trade-book/trade-book.component */ 30052);


const routeConfig = {
  header: true,
  footer: true,
  indices: false,
  betaFooter: false,
  ticker: true,
  watchlist: false,
  freshChat: false
};
const TradeBookRoutes = [{
  path: "",
  component: _trade_book_trade_book_component__WEBPACK_IMPORTED_MODULE_1__.TradeBookComponent,
  canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  data: {
    config: routeConfig
  }
}, {
  path: ":status/:token",
  component: _trade_book_trade_book_component__WEBPACK_IMPORTED_MODULE_1__.TradeBookComponent,
  canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  data: {
    config: routeConfig
  }
}];

/***/ }),

/***/ 39458:
/*!*********************************************************************************************!*\
  !*** ./src/app/post-login-module/tradebook/trade-book/trade-book.component.scss?ngResource ***!
  \*********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ 8564);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 98557);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.card {
  float: left;
  width: 100%;
  padding: 0;
}
.card .card-block {
  min-height: 200px;
}
.card .card-block h4 {
  font-weight: bold;
  margin-bottom: 10px;
}
.card .card-block .parentHorizontalTab ul.resp-tabs-list {
  margin: 0px;
  padding: 0px;
}
.card .card-block .parentHorizontalTab ul.resp-tabs-list li {
  font-size: 12px;
  display: inline-block;
  padding: 8px 25px;
  margin: 0px;
  list-style: none;
  cursor: pointer;
  color: #a5a2a2;
}
.card .card-block .parentHorizontalTab ul.resp-tabs-list li.resp-tab-active {
  background-color: rgb(254, 89, 93);
  border: 1px solid #fe595d;
  color: #fff !important;
  box-shadow: 0px 3px 30px 0px rgb(179, 179, 179);
}
.card .card-block .parentHorizontalTab .resp-tabs-container .table-responsive {
  margin-bottom: 0px;
}
.card .card-block .parentHorizontalTab div.no-data-container img {
  width: 150px;
}
.card .card-block .parentHorizontalTab div.no-data-container h3 {
  color: #aaa;
  font-size: 16px;
  font-weight: bold;
}

table.table > thead:first-child tr:first-child th {
  border-top: transparent solid 1px;
}`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 88352:
/*!*********************************************************************************************!*\
  !*** ./src/app/post-login-module/tradebook/trade-book/trade-book.component.html?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"clearfix\"></div>\r\n<section class=\"m-tb20 \">\r\n  <div class=\"col-xs-12 company-page-wrap\">\r\n\r\n    <div class=\"card\">\r\n      <div class=\"card-block\">\r\n        <h4 class=\"heading mb-0\">Trade Book</h4>\r\n        @if (tradeBookData.length) {\r\n          <button type=\"button\" (click)=\"exportCSVTradebook()\" class=\"pull-right btn btn-gradient mb-15 ml-5\"\r\n          >EXPORT TO CSV</button>\r\n        }\r\n        <div class=\"parentHorizontalTab\">\r\n          <div class=\"resp-tabs-container hor_1\">\r\n            <img class=\"loader\" src=\"assets/images/loader.gif\"\r\n              [hidden]=\"tradeBookData.length>0 || !shared.isServiceHit\" />\r\n              <div class=\"no-result-wrapper\" [hidden]=\"tradeBookData.length>0 || shared.isServiceHit\">\r\n                <img src=\"{{shared.serverImageUrl+'order-no-result.png'}}\" width=\"300\" height=\"216\">\r\n                <p class=\"no-result-title\">No Trade.</p>\r\n                <p class=\"no-result-text\">You have not placed any Order. <br> Go Trade</p>\r\n                <button class=\"btn btn-gradient\" (click)=\"openSearch()\">Search Scrips</button>\r\n              </div>\r\n              @if (tradeBookData.length) {\r\n                <div class=\"table-responsive table-custom\">\r\n                  <ngx-datatable #tradeTable class=\"material\" [cssClasses]=\"cssClasses\" [columnMode]=\"'force'\"\r\n                    [rows]=\"tradeBookData\" [footerHeight]=\"50\" [limit]=\"10\" [sorts]=\"[]\" [reorderable]=\"false\"\r\n                    [headerHeight]=\"'auto'\" [scrollbarH]=\"true\" [rowHeight]=\"'auto'\">\r\n                    <ngx-datatable-column [width]=\"130\" name=\"Instrument\" prop=\"SecName\" [resizeable]=\"false\">\r\n                      <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                        <div class=\"text-left\"><a [routerLink]=\"[row.companyURL]\">{{row.SecName}}</a>\r\n                        <span class=\"text-small\">{{row?.lExchangeScrip?.ExchangeSegment}}</span>\r\n                      </div>\r\n                    </ng-template>\r\n                  </ngx-datatable-column>\r\n                  <!-- <ngx-datatable-column [width]=\"120\" name=\"Trade No.\" prop=\"TradeNo\" [resizeable]=\"false\">\r\n                  <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                    <div class=\"text-right\">{{row?.TradeNo}}\r\n                    </div>\r\n                  </ng-template>\r\n                </ngx-datatable-column> -->\r\n                <ngx-datatable-column [width]=\"80\" name=\"Time\" prop=\"Time\" [resizeable]=\"false\">\r\n                  <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                    <div class=\"text-right\">{{row?.Time}}\r\n                    </div>\r\n                  </ng-template>\r\n                </ngx-datatable-column>\r\n                <ngx-datatable-column [width]=\"80\" name=\"Type\" prop=\"BS\" [resizeable]=\"false\">\r\n                  <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                    <div class=\"text-right {{row?.BS==1?'BUY':'SELL'}}\">{{row?.BS==1?'BUY':'SELL'}}\r\n                    </div>\r\n                  </ng-template>\r\n                </ngx-datatable-column>\r\n                <ngx-datatable-column [width]=\"80\" name=\"QTY | LOT\" prop=\"Qty\" [resizeable]=\"false\">\r\n                  <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                    <div class=\"text-right\">{{row?.Q}}\r\n                    </div>\r\n                  </ng-template>\r\n                </ngx-datatable-column>\r\n                <ngx-datatable-column [width]=\"80\" name=\"Price\" prop=\"Price\" [resizeable]=\"false\">\r\n                  <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                    <div class=\"text-right\">{{row?.P / row?.lExchangeScrip.PriceDivisor |\r\n                      segment:row.lExchangeScrip.SegmentId}}\r\n                    </div>\r\n                  </ng-template>\r\n                </ngx-datatable-column>\r\n                <ngx-datatable-column [width]=\"80\" name=\"LTP\" prop=\"LTP\" [resizeable]=\"false\">\r\n                  <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                    <div class=\"text-right\">{{row?.LTP | segment:row.lExchangeScrip.SegmentId}}\r\n                    </div>\r\n                  </ng-template>\r\n                </ngx-datatable-column>\r\n                <ngx-datatable-column [width]=\"130\" name=\"Product\" prop=\"Product\" [resizeable]=\"false\">\r\n                  <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                    <div class=\"text-right\"><span class=\"status {{row.Product|lowercase}}\">{{row.Product}}</span>\r\n                  </div>\r\n                </ng-template>\r\n              </ngx-datatable-column>\r\n            </ngx-datatable>\r\n            <!-- <table class=\"table mobile-table table-hover table-striped\">\r\n            <thead>\r\n              <tr>\r\n                <th style=\"width:11%;\">Trade No.</th>\r\n                <th style=\"width:17%;\">Instrument</th>\r\n                <th style=\"width:10%;\">DateTime</th>\r\n                <th style=\"width:10%;\">Type</th>\r\n                <th style=\"width:10%;\">Market Type</th>\r\n                <th style=\"width:10%;\">QTY | LOT</th>\r\n                <th style=\"width:11%;\">Price</th>\r\n                <th style=\"width:10%;\">Product</th>\r\n                <th style=\"width:11%;\">LTP</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let order of tradeBookData\">\r\n                <td data-header=\"Trade No.\">{{order?.TradeNo}}</td>\r\n                <td data-header=\"Instrument\">{{order?.lExchangeScrip.SecName}} <span class=\"text-small\">{{order?.lExchangeScrip.ExchangeSegment}}</span></td>\r\n                <td data-header=\"DateTime\">{{order?.Time}}</td>\r\n                <td data-header=\"Type\" [class]=\"order?.BS==1?'buy':'sell'\">{{order?.BS==1?'BUY':'SELL'}}</td>\r\n                <td data-header=\"Market Type\">NORMAL</td>\r\n                <td data-header=\"QTY | LOT\">{{order?.Qty}}</td>\r\n                <td data-header=\"Price\">{{order?.Price / order?.lExchangeScrip.PriceDivisor |\r\n                segment:order.lExchangeScrip.SegmentId}}</td>\r\n                <td data-header=\"Product\">{{order?.Product}}</td>\r\n                <td data-header=\"LTP\">{{order?.LTP | segment:order.lExchangeScrip.SegmentId}}</td>\r\n              </tr>\r\n            </tbody>\r\n          </table> -->\r\n        </div>\r\n      }\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n</div>\r\n</section>";

/***/ })

}]);