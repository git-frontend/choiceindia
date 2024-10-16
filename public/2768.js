(self["webpackChunkjiffy_upgraded"] = self["webpackChunkjiffy_upgraded"] || []).push([[2768],{

/***/ 20145:
/*!*******************************************************************!*\
  !*** ./src/app/market/global-indices/global-indices.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalIndicesComponent: () => (/* binding */ GlobalIndicesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _global_indices_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global-indices.component.html?ngResource */ 33579);
/* harmony import */ var _global_indices_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global-indices.component.scss?ngResource */ 25487);
/* harmony import */ var _global_indices_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_global_indices_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 1807);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/shared-data/shared-data.service */ 46013);
/* harmony import */ var src_app_services_seo_seo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/seo/seo.service */ 44897);
/* harmony import */ var src_app_services_rest_market_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/rest/market.service */ 23369);
/* harmony import */ var src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/utils/utils.service */ 89893);
/* harmony import */ var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/analytics/analytics.service */ 50213);
/* harmony import */ var _pipes_value_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/value.pipe */ 50615);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 33380);














/**
 * Component for Global Indices
 */
let GlobalIndicesComponent = class GlobalIndicesComponent {
  /**
   * Constructor for Object Initialization
   * @param activeRoute ActivatedRoute Instance
   * @param commonService commonService Instance
   * @param location Location Instance
   * @param shared SharedDataService instance
   */
  constructor(activeRoute, seo, rest, utils, shared, analytics) {
    this.activeRoute = activeRoute;
    this.seo = seo;
    this.rest = rest;
    this.utils = utils;
    this.shared = shared;
    this.analytics = analytics;
    this.Math = Math;
    this.marketIndices = {
      '1': [],
      '3': [],
      'selected': '1'
    };
    this.subscriptionList = [];
    this.isGlobal = window.location.pathname.indexOf('market-indices') == -1;
    this.sorts = this.isGlobal ? [{
      prop: 'IndexName',
      dir: 'asc'
    }] : [];
    this.cssClasses = {
      sortAscending: 'icon-angle-down',
      sortDescending: 'icon-angle-up',
      pagerLeftArrow: 'icon-angle-left',
      pagerRightArrow: 'icon-angle-right',
      pagerPrevious: 'icon-angle-left',
      pagerNext: 'icon-angle-right'
    };
    this.globalIndicesArray = [];
    this.seo.setMeta('global-indices');
    this.utils.setTrackMoeEvent("visitedGlobalIndices", {
      "source": "Web"
    });
  }
  /**
   * Life Cycle Hook for Initialization
   */
  ngOnInit() {
    this.isGlobal ? this.getGlobalIndicesData() : this.getMarketIndicesData();
    if (!this.isGlobal) {
      this.subscriptionList.push(this.utils.broadcastObservable('watchlist').subscribe(data => {
        if (data && this.marketIndices && this.marketIndices[this.marketIndices.selected] && this.marketIndices[this.marketIndices.selected].length) {
          let priceDiviser = this.utils.getDefaultPriceDivisor(data[0][1], data[0][7]);
          let reference = this.marketIndices[1].find(item => item.SegmentId == data[0][1] && item.Token == data[0][7]);
          if (!reference) {
            reference = this.marketIndices[3].find(item => item.SegmentId == data[0][1] && item.Token == data[0][7]);
          }
          if (reference) {
            reference.Price = Number(data[0][8]) == 0 ? data[0][76] / priceDiviser : data[0][8] / 100; // if LTP == 0 then show prevClose (11/05/2021)
            reference.Change = reference.Price - reference.Close;
            reference.ChangePer = reference.Change * 100 / reference.Close;
            reference.class = reference.Change > 0 ? 'up' : reference.Change < 0 ? 'down' : '';
          }
        }
      }));
    }
    this.refreshSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.timer)(300000, 300000).subscribe(() => {
      this.isGlobal ? this.getGlobalIndicesData() : '';
      if (!this.utils.isAuthorized() && !this.isGlobal) {
        this.getMarketIndicesData();
      }
    });
    if (this.isGlobal) {
      this.utils.setTrackMoeEvent('visitedMarketViewGlobalIndices', {
        "User_ID": this.utils.getUserId() || 'guest',
        "IP": this.shared.IPAddress
      });
      this.analytics.emitEvent('visitedMarketViewGlobalIndices', this.utils.getUserId() || 'guest', JSON.stringify({
        "IP": this.shared.IPAddress
      }), 1);
    } else {
      this.utils.setTrackMoeEvent('visitedMarketViewMarketIndices', {
        "User_ID": this.utils.getUserId() || 'guest',
        "IP": this.shared.IPAddress
      });
      this.analytics.emitEvent('visitedMarketViewMarketIndices', this.utils.getUserId() || 'guest', JSON.stringify({
        "IP": this.shared.IPAddress
      }), 1);
    }
  }
  /**
   * Life Cycle Hook for destruction
   */
  ngOnDestroy() {
    if (this.refreshSubscription) this.refreshSubscription.unsubscribe();
    if (!this.isGlobal) {
      this.utils.unSubscribeMultitouchline(this.marketIndices[this.marketIndices.selected], 'market-indices');
      this.subscriptionList.forEach(subscription => {
        if (subscription) subscription.unsubscribe();
      });
    }
  }
  /**
   * Get Global Indices Data from Server
   */
  getGlobalIndicesData() {
    let obj = {
      "nMarketSegmentId": 0,
      "nToken": 0
    };
    this.rest.getGlobalIndices(obj).subscribe(res => {
      this.globalIndicesArray = res.Response;
      this.globalIndicesArray = this.getRows(res.Response);
    }, err => {});
  }
  /**
   * Filter and get rows data
   * @param data JSON Object of Global Indices
   */
  getRows(data) {
    const arr = [];
    for (let i of data) {
      arr.push({
        IndexName: i.IndexName,
        Country: i.Country,
        Open: Number(i.Open),
        Low: Number(i.Low),
        High: Number(i.High),
        PrevClose: Number(i.Value) - Number(i.Change),
        Value: Number(i.Value),
        Change: Number(i.Change),
        ChangePer: Number(i.Change * 100 / (i.Value - i.Change)),
        class: Number(i.Change) > 0 ? 'up' : Number(i.Change) < 0 ? 'down' : ''
      });
    }
    return arr;
  }
  getMarketIndicesData() {
    let request = {
      "StartPosition": 0,
      "NoOfRecords": 200,
      "NeedMktData": 1
    };
    this.marketIndices = {
      '1': [],
      '3': [],
      'selected': '1'
    };
    this.rest.getIndicesList(request).subscribe(data => {
      if (data.Status == "Success" && data.Response.lstMktData) {
        (data.Response.lstMktData || []).forEach((item, index) => {
          if (item.Seg == 1 || item.Seg == 3) {
            item.Open = item.O / 100;
            item.High = item.H / 100;
            item.Low = item.L / 100;
            item.Close = item.PC / 100;
            item.Price = item.P / 100;
            item.Change = item.Price - item.Close;
            item.ChangePer = item.Change * 100 / item.Close;
            item.class = item.Change > 0 ? 'up' : item.Change < 0 ? 'down' : '';
            item = {
              ...item,
              ...data.Response.lstIndices[index]
            };
            this.marketIndices[item.Seg].push(item);
          }
        });
        this.utils.subscribeMultitouchline(this.marketIndices[this.marketIndices.selected || 1]);
      }
    }, err => {});
  }
  toggleProductType() {
    this.marketIndices.selected = this.marketIndices.checked ? 3 : 1;
  }
  static {
    this.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute
    }, {
      type: src_app_services_seo_seo_service__WEBPACK_IMPORTED_MODULE_3__.SeoService
    }, {
      type: src_app_services_rest_market_service__WEBPACK_IMPORTED_MODULE_4__.MarketService
    }, {
      type: src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_5__.UtilsService
    }, {
      type: _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_2__.SharedDataService
    }, {
      type: src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_6__.AnalyticsService
    }];
  }
};
GlobalIndicesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-global-indices',
  template: _global_indices_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  imports: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_12__.NgxDatatableModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink, _pipes_value_pipe__WEBPACK_IMPORTED_MODULE_7__.ValuePipe],
  styles: [(_global_indices_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute, src_app_services_seo_seo_service__WEBPACK_IMPORTED_MODULE_3__.SeoService, src_app_services_rest_market_service__WEBPACK_IMPORTED_MODULE_4__.MarketService, src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_5__.UtilsService, _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_2__.SharedDataService, src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_6__.AnalyticsService])], GlobalIndicesComponent);


/***/ }),

/***/ 2768:
/*!*****************************************************************!*\
  !*** ./src/app/market/global-indices/global-indices.routing.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalIndicesRoutes: () => (/* binding */ GlobalIndicesRoutes)
/* harmony export */ });
/* harmony import */ var src_app_guards_basic_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/guards/basic.guard */ 72972);
/* harmony import */ var _global_indices_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global-indices.component */ 20145);


const routeConfig = {
  header: true,
  footer: true,
  indices: false,
  betaFooter: false,
  ticker: true,
  watchlist: false,
  freshChat: false
};
const GlobalIndicesRoutes = [{
  path: 'global-indices',
  component: _global_indices_component__WEBPACK_IMPORTED_MODULE_1__.GlobalIndicesComponent,
  canActivate: [src_app_guards_basic_guard__WEBPACK_IMPORTED_MODULE_0__.BasicGuard],
  data: {
    config: routeConfig
  }
}, {
  path: 'market-indices',
  component: _global_indices_component__WEBPACK_IMPORTED_MODULE_1__.GlobalIndicesComponent,
  canActivate: [src_app_guards_basic_guard__WEBPACK_IMPORTED_MODULE_0__.BasicGuard],
  data: {
    config: routeConfig
  }
}];

/***/ }),

/***/ 25487:
/*!********************************************************************************!*\
  !*** ./src/app/market/global-indices/global-indices.component.scss?ngResource ***!
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
.content-section {
  min-height: 200px;
}

span.up {
  color: #21ce99;
}
span.down {
  color: #f16522;
}

.card-top-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
@media (max-width: 560px) {
  .card-top-header {
    display: block;
  }
}
@media (min-width: 560px) {
  .card-top-header .switch-wrap {
    margin-top: 0;
  }
}

@media (max-width: 767px) {
  .market-indice-space {
    margin-bottom: 15px;
  }
}`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 33579:
/*!********************************************************************************!*\
  !*** ./src/app/market/global-indices/global-indices.component.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!-- <div *ngIf=\"globalIndicesArray\">\r\n<input\r\n  type='text'\r\n  style='padding:8px;margin:15px auto;width:30%;'\r\n  placeholder='Type to filter columns...'\r\n  (keyup)='updateFilter($event)'\r\n  />\r\n  <ngx-datatable\r\n    #globalIndicesTable\r\n    [cssClasses]=\"cssClasses\"\r\n    [columns]=\"columns\"\r\n    [columnMode]=\"'force'\"\r\n    [rows]=\"rows\"\r\n    [footerHeight]=\"50\"\r\n    [limit]=\"10\">\r\n  </ngx-datatable>\r\n</div> -->\r\n\r\n<div class=\"clearfix\"></div>\r\n<section class=\"m-tb20 \">\r\n  <div class=\"col-xs-12 company-page-wrap\">\r\n\r\n    @if (isGlobal) {\r\n      <div class=\"card content-section\">\r\n        <div class=\"card-block\">\r\n          <h4 class=\"heading market-indice-space\">Global Indices</h4>\r\n          <div class=\"parentHorizontalTab\">\r\n            <div class=\"resp-tabs-container hor_1\">\r\n              <img class=\"loader\" src=\"assets/images/loader.gif\"\r\n                [hidden]=\"globalIndicesArray.length > 0 || !shared.isServiceHit\" />\r\n                @if (globalIndicesArray) {\r\n                  <div>\r\n                    <ngx-datatable #globalIndicesTable class=\"material\" [cssClasses]=\"cssClasses\" [columnMode]=\"'force'\"\r\n                      [rows]=\"globalIndicesArray\" [footerHeight]=\"50\" [limit]=\"10\" [sorts]=\"sorts\" [reorderable]=\"false\"\r\n                      [scrollbarH]=\"true\" [rowHeight]=\"'auto'\" [headerHeight]=\"'auto'\">\r\n                      <ngx-datatable-column [width]=\"210\" name=\"Index Name\" prop=\"IndexName\">\r\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                          <div class=\"text-left\"><strong>{{row.IndexName}} </strong><small>{{row.Country}}</small></div>\r\n                        </ng-template>\r\n                      </ngx-datatable-column>\r\n                      <!-- <ngx-datatable-column [width]=\"120\" name=\"Open\" prop=\"Open\">\r\n                      <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                        <div class=\"text-right\"><span>{{row.Open | value:'1.2-2'}}</span></div>\r\n                      </ng-template>\r\n                    </ngx-datatable-column> -->\r\n                    <ngx-datatable-column [width]=\"100\" name=\"High\" prop=\"High\">\r\n                      <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                        <div class=\"text-right\"><span>{{row.High | value:'1.2-2'}}</span></div>\r\n                      </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [width]=\"100\" name=\"Low\" prop=\"Low\">\r\n                      <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                        <div class=\"text-right\"><span>{{row.Low | value:'1.2-2'}}</span></div>\r\n                      </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column name=\"Prev. Close\" prop=\"PrevClose\">\r\n                      <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                        <div class=\"text-right\"><span>{{row.PrevClose | value:'1.2-2'}}</span></div>\r\n                      </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [width]=\"100\" name=\"CMP\" prop=\"Value\">\r\n                      <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                        <div class=\"text-right\"><span>{{row.Value | value:'1.2-2'}}</span></div>\r\n                      </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column [width]=\"120\" name=\"Change\" prop=\"Change\">\r\n                      <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                        <div class=\"text-right\"><span class=\"{{row.class}}\">{{Math.abs(row.Change||0) | value:'1.2-2'}}\r\n                          <small>({{Math.abs(row.ChangePer||0) | value:'1.2-2'}} %)</small></span></div>\r\n                        </ng-template>\r\n                      </ngx-datatable-column>\r\n                    </ngx-datatable>\r\n                  </div>\r\n                }\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      }\r\n\r\n      @if (!isGlobal) {\r\n        <div class=\"card content-section\">\r\n          <div class=\"card-block\">\r\n            <div class=\"card-top-header\">\r\n              <h4 class=\"heading market-indice-space\">Market Indices</h4>\r\n              <div class=\"portfolio-dropdown \">\r\n                <form class=\"form-horizontal\" role=\"form\">\r\n                  <div class=\"text-center switch-wrap\">\r\n                    <label class=\"control-label mr-10\" for=\"productType\"\r\n                    [class.selected]=\"!marketIndices.checked\">NSE</label>\r\n                    <label class=\"switch\">\r\n                      <input type=\"checkbox\" id=\"productType\" name=\"productType\" (change)=\"toggleProductType()\"\r\n                        [(ngModel)]=\"marketIndices.checked\">\r\n                        <div class=\"slider round\"></div>\r\n                      </label>\r\n                      <label class=\"control-label ml-10\" for=\"productType\"\r\n                      [class.selected]=\"marketIndices.checked\">BSE</label>\r\n                    </div>\r\n                  </form>\r\n                </div>\r\n              </div>\r\n              <div class=\"parentHorizontalTab\">\r\n                <div class=\"resp-tabs-container hor_1\">\r\n                  <img class=\"loader\" src=\"assets/images/loader.gif\"\r\n                    [hidden]=\"marketIndices[marketIndices.selected||1]?.length > 0 || !shared.isServiceHit\" />\r\n                    @if (marketIndices[marketIndices.selected||1]?.length) {\r\n                      <div>\r\n                        <ngx-datatable #marketIndicesTable class=\"material\" [cssClasses]=\"cssClasses\" [columnMode]=\"'force'\"\r\n                          [rows]=\"marketIndices[marketIndices.selected||1]\" [footerHeight]=\"50\" [limit]=\"20\" [sorts]=\"sorts\"\r\n                          [reorderable]=\"false\" [scrollbarH]=\"true\" [rowHeight]=\"'auto'\" [headerHeight]=\"'auto'\">\r\n                          <ngx-datatable-column [width]=\"180\" name=\"Index Name\" prop=\"IndexName\">\r\n                            <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                              <!-- <div class=\"text-left\"><strong>{{row.IndexName}} </strong><small>{{row.IndexDesc}}</small></div> -->\r\n                              <a [routerLink]=\"['/instrument/indices/'+row.IndexName+'/'+row.SegmentId+'/'+row.Token]\" title=\"{{row.IndexDesc}}\" class=\"text-left\"><strong>{{row.IndexName}} </strong><small>{{row.IndexDesc}}</small></a>\r\n                            </ng-template>\r\n                          </ngx-datatable-column>\r\n                          <ngx-datatable-column [width]=\"110\" name=\"CMP\" prop=\"Value\">\r\n                            <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                              <div class=\"text-right\"><span>{{row.Price | value:'1.2-2'}}</span></div>\r\n                            </ng-template>\r\n                          </ngx-datatable-column>\r\n                          <ngx-datatable-column [width]=\"110\" name=\"Change\" prop=\"Change\">\r\n                            <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                              <div class=\"text-right\"><span class=\"{{row.class}}\">{{Math.abs(row.Change||0) | value:'1.2-2'}}\r\n                                <small>({{Math.abs(row.ChangePer||0) | value:'1.2-2'}} %)</small></span></div>\r\n                              </ng-template>\r\n                            </ngx-datatable-column>\r\n                            <ngx-datatable-column [width]=\"110\" name=\"Open\" prop=\"Open\">\r\n                              <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                                <div class=\"text-right\"><span>{{row.Open | value:'1.2-2'}}</span></div>\r\n                              </ng-template>\r\n                            </ngx-datatable-column>\r\n                            <ngx-datatable-column [width]=\"110\" name=\"High\" prop=\"High\">\r\n                              <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                                <div class=\"text-right\"><span>{{row.High | value:'1.2-2'}}</span></div>\r\n                              </ng-template>\r\n                            </ngx-datatable-column>\r\n                            <ngx-datatable-column [width]=\"110\" name=\"Low\" prop=\"Low\">\r\n                              <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                                <div class=\"text-right\"><span>{{row.Low | value:'1.2-2'}}</span></div>\r\n                              </ng-template>\r\n                            </ngx-datatable-column>\r\n                            <ngx-datatable-column [width]=\"110\" name=\"Prev. Close\" prop=\"PrevClose\">\r\n                              <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                                <div class=\"text-right\"><span>{{row.Close | value:'1.2-2'}}</span></div>\r\n                              </ng-template>\r\n                            </ngx-datatable-column>\r\n                          </ngx-datatable>\r\n                        </div>\r\n                      }\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            }\r\n          </div>\r\n\r\n          <!-- added open an account banner (12/05/2021) -->\r\n          <!-- <section class=\"seo-section clearfix\" *ngIf=\"(!shared.userId || shared.userId == 'guest')\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"card mb-0\">\r\n              <div class=\"card-block\">\r\n                <img src=\"../../../assets/images/Open-Free-Account1.png\" alt=\"Online Stock Trading Platform\" class=\"img-responsive\" (click)=\"utils.navigateToOpenAccount()\"/>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </section> -->\r\n\r\n        <!-- Advert Banner :: Start -->\r\n        @if ((!shared.userId || shared.userId == 'guest')) {\r\n          <section>\r\n            <div class=\"container\" (click)=\"utils.navigateToOpenFreeAccount()\">\r\n              <div class=\"row add_banner_sub red-theme\">\r\n                <div class=\"col-md-6 add-left-text\">\r\n                  <div class=\"add-left-sub\">\r\n                    <h2>Wait! <span class=\"small-font\">Before You Go</span></h2>\r\n                    <h4>OPEN A FREE</h4>\r\n                    <h3>DEMAT ACCOUNT</h3>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-6 add-right-text\">\r\n                  <div class=\"add-right-sub\">\r\n                    <ul>\r\n                      <li><span>+</span> Zero Account Opening Fee </li>\r\n                      <li><span>+</span> Free First Year AMC </li>\r\n                      <li><span>+</span> Zero Square Off Charges </li>\r\n                      <li><span>+</span> Zero Call for Trade Charges</li>\r\n                    </ul>\r\n                    <a class=\"add-btn\">OPEN MY ACCOUNT</a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </section>\r\n        }\r\n\r\n        @if (isGlobal) {\r\n          <section class=\" clearfix\">\r\n            <div class=\"col-md-12\">\r\n              <div class=\"card mb-0\">\r\n                <div class=\"card-block\">\r\n                  <h4 class=\"heading padding-0 bold mb-20\">Global Indices - World Market Live</h4>\r\n                  <p>In an integrated world, the stock markets of economies are dependent on each other as far as\r\n                    investor/trader sentiment is concerned. <b>Global Indices</b> are stock market indexes which measure a\r\n                  particular country’s stock market by weighted average of selected stocks.</p>\r\n                  &nbsp;&nbsp;\r\n                  <h4 class=\"heading padding-0 bold mb-20\">Global Indices - World Market Indices Live</h4>\r\n                  <p>On this page users can get an overview of the <b>global stock market</b> by having a look at how other\r\n                  country’s stock markets are performing. The top strip shows the indices like SENSEX, NIFTY for the trader or\r\n                investor to know where the Indian stock market is or heading.</p>\r\n                <p>The next section is the <b>global indices</b> list showing the <b>world stock market live</b>. Users can simply\r\n              browse through this section which shows the Open – High – Low – Prev.Close – CMP – Change values.</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </section>\r\n    }\r\n\r\n  </section>";

/***/ })

}]);