(self["webpackChunkjiffy_upgraded"] = self["webpackChunkjiffy_upgraded"] || []).push([[8603],{

/***/ 88603:
/*!************************************************************!*\
  !*** ./src/app/post-login-module/alerts/alerts.routing.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlertsRoutes: () => (/* binding */ AlertsRoutes)
/* harmony export */ });
/* harmony import */ var src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/guards/auth.guard */ 61620);
/* harmony import */ var _price_listing_price_listing_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./price-listing/price-listing.component */ 39636);


const routeConfig = {
  header: true,
  footer: true,
  indices: false,
  betaFooter: false,
  ticker: true,
  watchlist: false,
  freshChat: false
};
const AlertsRoutes = [{
  path: "",
  pathMatch: "full",
  canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  component: _price_listing_price_listing_component__WEBPACK_IMPORTED_MODULE_1__.PriceListingComponent,
  data: {
    config: routeConfig
  }
}];

/***/ }),

/***/ 39636:
/*!***********************************************************************************!*\
  !*** ./src/app/post-login-module/alerts/price-listing/price-listing.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PriceListingComponent: () => (/* binding */ PriceListingComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _price_listing_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./price-listing.component.html?ngResource */ 43264);
/* harmony import */ var _price_listing_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./price-listing.component.scss?ngResource */ 78336);
/* harmony import */ var _price_listing_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_price_listing_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/analytics/analytics.service */ 50213);
/* harmony import */ var src_app_services_rest_post_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/rest/post-login.service */ 4135);
/* harmony import */ var src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/utils/utils.service */ 89893);
/* harmony import */ var _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../assets/libs/esm-moment.min.js */ 29483);
/* harmony import */ var _pipes_value_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../pipes/value.pipe */ 50615);
/* harmony import */ var _pipes_segment_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../pipes/segment.pipe */ 39995);
/* harmony import */ var _directives_show_focus_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../directives/show-focus.directive */ 57862);
/* harmony import */ var _tooltip_module_tooltip_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../tooltip-module/tooltip.directive */ 45153);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 33380);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _common_module_non_eq_sso_non_eq_sso_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../common-module/non-eq-sso/non-eq-sso.component */ 67761);







// var moment: any = require();









let PriceListingComponent = class PriceListingComponent {
  constructor(renderer, utils, rest, analytics) {
    this.renderer = renderer;
    this.utils = utils;
    this.rest = rest;
    this.analytics = analytics;
    this.cssClasses = {
      sortAscending: 'icon-angle-down',
      sortDescending: 'icon-angle-up',
      pagerLeftArrow: 'icon-angle-left',
      pagerRightArrow: 'icon-angle-right',
      pagerPrevious: 'icon-angle-left',
      pagerNext: 'icon-angle-right'
    };
    this.alerts = {
      "0": [],
      "2": [],
      "3": []
    };
    this.filterValue = '0';
    this.Math = Math;
    this.labelConfig = {
      priceAttribute: {
        1: 'Last Traded Price',
        2: 'Open Price',
        3: 'Close Price',
        4: '52 Week High',
        5: '52 Week Low'
      },
      sPriceAttribute: {
        'OpenPrice': 2,
        'LastTradedPrice': 1,
        'ClosePrice': 3,
        'LifeTimeHigh': 4,
        'LifeTimeLow': 5
      },
      sValueType: {
        'Price': '0',
        'Range': '4'
      },
      condition: {
        1: 'Moves above or Matches',
        2: 'Falls below or Matches',
        4: 'Gains',
        5: 'Loses'
      },
      sCondition: {
        'GreaterThenEqualTo': 1,
        'LessThenEqualTo': 2
      },
      sPriceUnit: {
        'Price': '0',
        'Percentage': '4'
      },
      rangeCondition: 'falls between',
      mapping: {
        1: 'or BSE',
        3: 'or NSE'
      }
    };
  }
  ngOnInit() {
    this.fetchPriceAlertList();
    this.getSocketData();
    this.priceAlertSubscription = this.utils.broadcastObservable('priceAlertAdded').subscribe(data => {
      if (data) {
        this.utils.unSubscribeMultitouchline(this.alerts[0], 'price-alert');
        setTimeout(() => {
          this.fetchPriceAlertList();
        }, 1000);
      }
    });
    this.multiTouchlineSubscription = this.utils.broadcastObservable('checkUnsubscription').subscribe(data => {
      if (data.source != 'price-alert' && data.data && data.data.length && this.alerts[0]) {
        this.utils.subscribeMultitouchline(this.alerts[0]);
      }
    });
    this.utils.setTrackMoeEvent('visitedMyPriceAlert', {
      "User_ID": this.utils.getUserId() || 'guest'
    });
    this.analytics.emitEvent('visitedMyPriceAlert', this.utils.getUserId() || 'guest', '', 1);
  }
  fetchPriceAlertList() {
    let request = {
      "sUserId": this.utils.getUserId(),
      "iStartIndex": 0,
      "iRecordsCount": 50,
      "iAlertDataType": 0
    };
    this.alerts = {
      "0": [],
      "2": [],
      "3": []
    };
    this.rest.getPriceAlertListing(request).subscribe(res => {
      if (res.Status == 'Success' && res.Response && res.Response.lAlertsData) {
        this.alerts[0] = res.Response.lAlertsData.filter(item => {
          item.sComment = this.getNormalizeConfig(item);
          return true;
        });
        if (res.Response.lAlertsData.length) {
          this.fetchMultitouchlineData(res.Response.lAlertsData, () => {
            this.alerts[3] = this.alerts[0].filter(item => {
              return !item.bIsAlertMatched;
            });
            this.alerts[2] = this.alerts[0].filter(item => {
              return item.bIsAlertMatched;
            });
          });
        }
      } else {}
    }, err => {});
  }
  fetchMultitouchlineData(alerts, handler) {
    let tokens = this.utils.generateTokens(this.alerts[0], "iSegmentId", "iTokenId");
    if (tokens) {
      let request = {
        "UserId": this.utils.getUserId() || '',
        "SessionId": this.utils.getSessionId() || "",
        "MultipleTokens": tokens
      };
      this.utils.commonGetMultipleTouchLineCall(request).subscribe(res => {
        if (res.Status == "Success" && res.Response && res.Response.lMT && res.Response.lMT.length) {
          console.log("alerts multitouchline14 ", JSON.parse(JSON.stringify(this.alerts)));
          res.Response.lMT.forEach((element, index) => {
            let item = this.alerts[0][index];
            element.LTP = element.LTP == 0 ? (element.PrevClose || 0) / element.PriceDivisor : element.LTP / element.PriceDivisor; // if LTP == 0 then show prevClose (11/05/2021)
            element.difference = Number(element.Change / element.PriceDivisor) || 0;
            element.PrevClose = (element.PrevClose || 0) / element.PriceDivisor;
            element.percent = Math.abs(element.difference * 100 / (element.LTP - element.difference) || 0);
            element.class = Number(element.difference) < 0 ? "red" : Number(element.difference) > 0 ? "green" : "";
            element.difference = Math.abs(element.difference);
            element.difference = Number(element.difference) || 0;
            element.LTT = this.utils.changeCurrentDateFormat(element.LTT, 'DD-MM-YYYY HH:mm:ss', 'DD-MM-YYYY HH:mm:ss');
            element.LUT = this.utils.changeCurrentDateFormat(element.LUT, 'DD-MM-YYYY HH:mm:ss', 'DD-MM-YYYY HH:mm:ss');
            if (item.iSegmentId == element.SegmentId && item.iTokenId == element.Token) {
              item.LTP = element.LTP;
              item.difference = element.difference;
              item.PrevClose = element.PrevClose;
              item.percent = element.percent;
              item.class = element.class;
              item.difference = element.difference;
              item.LTT = element.LTT;
              item.LUT = element.LUT;
              item.BBP = element.BBP / element.PriceDivisor || item.LTP;
              item.BBQ = element.BBQ || 0;
              item.BSP = element.BSP / element.PriceDivisor || item.LTP;
              item.BSQ = element.BSQ || 0;
              item.SegmentId = element.SegmentId;
              item.Token = element.Token;
              this.alerts[0][index] = {
                ...item,
                ...item.sComment
              };
              if (!item.companyURL) {
                let slug = (item.sSecName || "").toLowerCase().replace(/[\s|\&|\%]/g, '').trim();
                let companyURL = !item.IsIndex && (item.iSegmentId == 1 || item.iSegmentId == 2 || item.iSegmentId == 4 || item.iSegmentId == 3) ? 'equity/' : item.IsIndex || item.iSegmentId == 6 || item.iSegmentId == 8 || item.iSegmentId == 14 || item.iSegmentId == 39 ? 'indices/' : item.iSegmentId == 13 || item.iSegmentId == 38 ? 'currency/' : item.iSegmentId == 5 || item.iSegmentId == 7 ? 'commodity/' : '';
                item.companyURL = companyURL ? '/instrument/' + companyURL + '/' + '/' + slug + '/' + item.iSegmentId + '/' + item.iTokenId : '';
              }
            }
          });
          this.alerts[0] = JSON.parse(JSON.stringify(this.alerts[0]));
          if (handler) {
            handler();
          }
          this.utils.subscribeMultitouchline(res.Response.lMT);
        }
      }, err => {});
    }
  }
  /**
   * Show Membership Details
   */
  showPricePopup(data, requestType) {
    let request = null;
    if (data) {
      let config = data.sComment;
      if (config && requestType == 2) {
        config.requestId = data.iAlertRequestId;
      }
      if (config && requestType == 3) {
        config.requestId = 0;
      }
      request = {
        config: config,
        requestType: requestType || 1,
        data: data
      };
    }
    this.utils.broadcast('openPriceAlert', request);
  }
  ngOnDestroy() {
    if (this.socketDataSubscription) this.socketDataSubscription.unsubscribe();
    if (this.multiTouchlineSubscription) this.multiTouchlineSubscription.unsubscribe();
    if (this.priceAlertSubscription) this.priceAlertSubscription.unsubscribe();
  }
  getSocketData() {
    this.socketDataSubscription = this.utils.broadcastObservable('watchlist').subscribe(data => {
      let reference = this.alerts[0].filter(obj => {
        return obj.SegmentId == data[0][1] && obj.Token == data[0][7];
      });
      if (reference && reference.length && this.utils.isUpdatedData(reference[0], data[0])) {
        data = data[0];
        reference.forEach(objData => {
          let priceDivisor = this.utils.getDefaultPriceDivisor(data[1], data[7]); //Number(data[399]);
          objData.prevChange = (Number(data[8]) / priceDivisor || 0) - (objData.LTP || 0);
          objData.LTP = Number(data[8]) == 0 ? objData.PrevClose || data[76] / priceDivisor : Number(data[8]) / priceDivisor; // if LTP == 0 then show prevClose (11/05/2021)
          objData.PrevClose = objData.PrevClose || data[76] / priceDivisor;
          objData.volume = Number(data[79]);
          objData.class = Number(objData.LTP) < Number(objData.PrevClose) ? "red" : Number(objData.LTP) > Number(objData.PrevClose) ? "green" : "";
          objData.difference = Math.abs(objData.LTP - Number(objData.PrevClose));
          objData.difference = isNaN(objData.difference) ? 0.00 : objData.difference;
          objData.percent = objData.difference * 100 / Number(objData.PrevClose);
          objData.percent = isNaN(objData.percent) ? 0.00 : objData.percent;
          objData.LTT = this.utils.changeCurrentDateFormat(data[73], 'YYYY-MM-DD HHmmss', 'DD-MM-YYYY HH:mm:ss');
          objData.LUT = this.utils.changeCurrentDateFormat(data[74], 'YYYY-MM-DD HHmmss', 'DD-MM-YYYY HH:mm:ss');
          objData.BBP = Number(data[3] / priceDivisor) || objData.LTP;
          objData.BBQ = Number(data[2]) || 0;
          objData.BSP = Number(data[6] / priceDivisor) || objData.LTP;
          objData.BSQ = Number(data[5]) || 0;
        });
      }
    });
  }
  getNormalizeConfig(alert) {
    let comment = null;
    if (alert) {
      try {
        comment = JSON.parse(alert.sComment);
      } catch (error) {
        let priceAttribute = this.labelConfig.sPriceUnit[alert.sValueType] || alert.dPricePercentage || alert.dPriceRangeFromPercentage ? true : false;
        let priceFrom = this.calculatePrice(alert, priceAttribute, 'From');
        let priceTo = this.calculatePrice(alert, priceAttribute, 'To');
        let percentageFrom = priceAttribute ? (alert.dPricePercentage || alert.dPriceRangeFromPercentage) < 0 ? Math.abs(alert.dPricePercentage || alert.dPriceRangeToPercentage) : Math.abs(alert.dPricePercentage || alert.dPriceRangeFromPercentage) : 0;
        let percentageTo = priceAttribute ? (alert.dPricePercentage || alert.dPriceRangeToPercentage) < 0 ? Math.abs(alert.dPricePercentage || alert.dPriceRangeFromPercentage) : Math.abs(alert.dPricePercentage || alert.dPriceRangeToPercentage) : 0;
        comment = {
          requestId: alert.iAlertRequestId,
          alertAttribute: priceAttribute ? true : false,
          priceAttribute: this.labelConfig.sPriceAttribute[alert.sValueType] || this.labelConfig.sPriceAttribute[alert.sAlertType],
          condition: this.labelConfig.sPriceUnit[alert.sValueType] ? (alert.dPricePercentage || alert.dPriceRangeFromPercentage) < 0 ? 5 : 4 : this.labelConfig.sCondition[alert.sConditionType] || 1,
          priceUnit: this.labelConfig.sPriceUnit[alert.sValueType],
          valueType: this.labelConfig.sValueType[alert.sConditionType] ? 4 : 0,
          valueFrom: 0,
          valueTo: 0,
          priceFrom: Number(priceFrom),
          priceTo: Number(priceTo),
          percentageFrom: Number(Number(percentageFrom).toFixed(2)),
          percentageTo: Number(Number(percentageTo).toFixed(2)),
          minDate: new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_5__["default"]().toDate(),
          expiry: new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_5__["default"](alert.sValidForDate, 'MM/DD/YYYY hh:mm:ss a').format('DD-MMM-YYYY'),
          isMapped: (alert.iSetAlertForMappedSecurity || "0").toString(),
          companyURL: null,
          IsIndex: null,
          SegmentId: alert.iSegmentId,
          Token: alert.iTokenId,
          source: 'Web'
        };
      }
    }
    return comment;
  }
  calculatePrice(alert, isChange, key) {
    let keyName = key == 'From' ? this.labelConfig.sValueType[alert.sConditionType] == 4 ? alert.dPriceRangeFromPercentage < 0 ? 'dPriceRangeToPercentage' : 'dPriceRangeFromPercentage' : 'dPricePercentage' : this.labelConfig.sValueType[alert.sConditionType] == 4 ? alert.dPriceRangeToPercentage < 0 ? 'dPriceRangeFromPercentage' : 'dPriceRangeToPercentage' : 'dPricePercentage';
    let finalPrice = keyName == 'dPriceRangeFromPercentage' ? 'dPriceRangeFrom' : keyName == 'dPriceRangeToPercentage' ? 'dPriceRangeTo' : 'dPrice';
    let prevClose = Number(alert[finalPrice]) / (100 + Number(alert[keyName]));
    let price = isChange ? Math.abs(prevClose - alert[finalPrice]) : Number(alert[finalPrice]);
    return this.utils.segmentTransform(price, alert.iSegmentId, true);
  }
  calculatePriceFromPrice(alert, isChange, key) {
    let revKey = key == 'From' ? 'To' : 'From';
    let keyName = this.labelConfig.sPriceUnit[alert.sValueType] == 4 ? key + 'Percentage' : '';
    if (key) {
      keyName = alert['dPriceRange' + keyName] < 0 ? 'dPriceRange' + revKey + 'Percentage' : 'dPriceRange' + keyName;
    }
    keyName = key == 'From' ? this.labelConfig.sValueType[alert.sConditionType] == 4 ? alert.dPriceRangeFromPercentage < 0 ? 'dPriceRangeFromPercentage' : 'dPriceRangeToPercentage' : 'dPricePercentage' : alert.PrevClose;
  }
  closeDeletePopUp() {
    this.selectedAlert = null;
    this.renderer.setStyle(document.body, 'overflow', 'auto');
  }
  deletePriceAlert(alert, isConfirmed) {
    if (alert && !isConfirmed) {
      this.selectedAlert = alert;
      this.renderer.setStyle(document.body, 'overflow', 'hidden');
    } else if (alert && isConfirmed) {
      let request = {
        "iAlertRequestId": alert.iAlertRequestId,
        "sUserId": this.utils.getUserId(),
        "iSegmentId": 0,
        "iTokenId": 0,
        "iMappedSegmentId": 0,
        "iMappedTokenId": 0
      };
      this.rest.deletePriceAlert(request).subscribe(res => {
        if (res.Status == "Success" && res.Response) {
          this.utils.success('Success', 'Price Alert removed successfully');
          this.utils.unSubscribeMultitouchline(this.alerts[0], 'price-alert');
          setTimeout(() => {
            this.fetchPriceAlertList();
          }, 1000);
          this.closeDeletePopUp();
        } else {
          this.utils.error('Error', 'Price Alert cannot be removed due to ' + res.Reason);
        }
      }, err => {});
    }
  }
  filterValueChange(event) {
    this.utils.setTrackMoeEvent(event === '3' ? 'priceAlertPendingFilter' : event === '2' ? 'priceAlertMatchedFilter' : 'priceAlertAllFilter', {
      "User_ID": this.utils.getUserId() || 'guest'
    });
    this.analytics.emitEvent(event === '3' ? 'priceAlertPendingFilter' : event === '2' ? 'priceAlertMatchedFilter' : 'priceAlertAllFilter', this.utils.getUserId() || 'guest', '', 1);
  }
  static {
    this.ctorParameters = () => [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Renderer2
    }, {
      type: src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_4__.UtilsService
    }, {
      type: src_app_services_rest_post_login_service__WEBPACK_IMPORTED_MODULE_3__.PostLoginService
    }, {
      type: src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_2__.AnalyticsService
    }];
  }
};
PriceListingComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-price-listing',
  template: _price_listing_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  imports: [_common_module_non_eq_sso_non_eq_sso_component__WEBPACK_IMPORTED_MODULE_10__.NonEqSsoComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_14__.NgxDatatableModule, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterLink, _tooltip_module_tooltip_directive__WEBPACK_IMPORTED_MODULE_9__.TooltipDirective, _directives_show_focus_directive__WEBPACK_IMPORTED_MODULE_8__.ShowFocusDirective, _pipes_segment_pipe__WEBPACK_IMPORTED_MODULE_7__.SegmentPipe, _pipes_value_pipe__WEBPACK_IMPORTED_MODULE_6__.ValuePipe],
  styles: [(_price_listing_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__metadata)("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_11__.Renderer2, src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_4__.UtilsService, src_app_services_rest_post_login_service__WEBPACK_IMPORTED_MODULE_3__.PostLoginService, src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_2__.AnalyticsService])], PriceListingComponent);


/***/ }),

/***/ 78336:
/*!************************************************************************************************!*\
  !*** ./src/app/post-login-module/alerts/price-listing/price-listing.component.scss?ngResource ***!
  \************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ 8564);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 98557);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*Bootstrap Override*/
/*Custom variables*/
/*Icons Variables*/
/*Responsive screen width*/
.btn-alert {
  padding: 3px 20px;
  font-size: 30px;
  line-height: 1;
  border: 1px solid #F4F3F8;
  box-shadow: none;
  background: #f4f3f8;
  color: #004393;
  border-radius: 4px;
}
@media (max-width: 1550px) {
  .btn-alert {
    padding: 6px 12px;
    font-size: 24px;
  }
}
.btn-alert i {
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  display: block;
  color: #004393;
}

@media (max-width: 560px) {
  .table-header {
    display: block;
  }
}

.toolbar {
  display: flex;
  align-items: flex-start;
}
@media (max-width: 560px) {
  .toolbar {
    width: 100%;
    margin-top: 10px;
  }
}
.toolbar button {
  margin-left: 15px;
}

.close {
  position: absolute;
  top: 0;
  right: 0;
  padding: 15px;
  font-size: 35px;
}`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 43264:
/*!************************************************************************************************!*\
  !*** ./src/app/post-login-module/alerts/price-listing/price-listing.component.html?ngResource ***!
  \************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\r\n\r\n<div class=\"container-fluid\">\r\n  <app-non-eq-sso></app-non-eq-sso>\r\n  <div class=\"card\">\r\n    <div class=\"card-block\">\r\n      <div class=\"table-header\">\r\n        <h4 class=\"page-title\">Price Alert</h4>\r\n        <div class=\"toolbar\">\r\n          <div class=\"portfolio-dropdown wd100\">\r\n            <form class=\"form-horizontal row\" role=\"form\">\r\n              <div class=\"form-group \">\r\n                <div class=\"col-md-12\">\r\n                  <select name=\"listtType\" class=\"show-tick form-control\" [(ngModel)]=\"filterValue\"\r\n                    (change)=\"filterValueChange($event.target.value)\">\r\n                    <option value=\"0\">ALL</option>\r\n                    <option value=\"3\">PENDING</option>\r\n                    <option value=\"2\">MATCHED</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n          <button class=\"btn btn-alert\" (click)=\"showPricePopup(null,1)\" title=\"Price Alert\">\r\n            <i aria-hidden=\"true\" class=\"fa icon-Price-alert\"></i>\r\n          </button>\r\n          <button class=\"btn btn-gradient btn-repeat\" (click)=\"fetchPriceAlertList()\" title=\"Refresh\"><i class=\"fa icon-repeat\"\r\n          aria-hidden=\"true\"></i></button>\r\n        </div>\r\n      </div>\r\n\r\n      <ngx-datatable [cssClasses]=\"cssClasses\" class=\"material clearfix\" [rows]=\"alerts[filterValue]\"\r\n        [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [limit]=\"10\"\r\n        [scrollbarH]=\"true\" [reorderable]=\"false\">\r\n\r\n        <ngx-datatable-column [width]=\"120\" prop=\"sSecName\" name=\"Company\" [resizeable]=\"false\">\r\n          <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n            <div class=\"text-left\"><a [routerLink]=\"[row.sComment.companyURL]\">{{row?.sSecName}}</a>\r\n            @if (row.bIsAlertMatched) {\r\n              <p>{{row.iMatchedSegmentId==1?'Alert\r\n              Matched for NSE':row.iMatchedSegmentId==3?'Alert Matched for BSE':''}}</p>\r\n            }\r\n          </div>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column [width]=\"80\" prop=\"LTP\" name=\"Current Price\" [resizeable]=\"false\">\r\n        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n          <div class=\"text-right\">{{Math.abs(row.LTP)|segment: row.iSegmentId}}</div>\r\n          <div class=\"text-right text-{{row?.class}}\">{{Math.abs(row.difference)|segment: row.iSegmentId}}</div>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column [width]=\"80\" prop=\"priceAttribute\" name=\"Price Type\" [resizeable]=\"false\">\r\n        <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-row=\"row\" let-value=\"value\">\r\n          <span>{{labelConfig?.priceAttribute[row?.priceAttribute]}}</span>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column [width]=\"80\" prop=\"condition\" name=\"Condition Type\" [resizeable]=\"false\">\r\n        <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-row=\"row\" let-value=\"value\">\r\n          @if (row?.valueType==4) {\r\n            <span>{{!row.alertAttribute ? 'Falls Between ':\r\n            (labelConfig?.condition[row?.condition]+' Between ')}}</span>\r\n          }\r\n          @if (row?.valueType==0) {\r\n            <span>{{labelConfig?.condition[row?.condition]}}</span>\r\n          }\r\n          @if (row?.priceUnit==0) {\r\n            <span>\r\n              @if (row?.priceAttribute>=4) {\r\n                <span> ₹ {{row?.dPrice |segment: row.iSegmentId}}</span>\r\n              }\r\n              @if (row?.priceAttribute<4) {\r\n                <span> ₹ {{row.priceFrom|segment: row.iSegmentId}} @if (row?.valueType==4) {\r\n                  <span\r\n                    >\r\n                  - ₹ {{row?.priceTo|segment: row.iSegmentId}}</span>\r\n                }</span>\r\n              }\r\n            </span>\r\n          }\r\n          @if (row?.priceUnit==4) {\r\n            <span>\r\n              {{row.percentageFrom|value:'1.2-2'}} % @if (row?.valueType==4) {\r\n              <span> -\r\n              {{row?.percentageTo|value:'1.2-2'}} %</span>\r\n            }\r\n          </span>\r\n        }\r\n      </ng-template>\r\n    </ngx-datatable-column>\r\n\r\n    <ngx-datatable-column [width]=\"80\" prop=\"dPrice\" name=\"Matching Value\" [sortable]=\"false\" [resizeable]=\"false\">\r\n      <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-row=\"row\" let-value=\"value\">\r\n        @if (row?.valueType==0) {\r\n          <span>₹ {{row.dPrice|segment: row.iSegmentId}}</span>\r\n        }\r\n        @if (row?.valueType==4) {\r\n          <span> ₹ {{row.dPriceRangeFrom|segment: row.iSegmentId}}\r\n            - ₹ {{row?.dPriceRangeTo|segment: row.iSegmentId}}\r\n          </span>\r\n        }\r\n        @if (row?.valueType!=0 && row?.valueType!=4) {\r\n          <span>-</span>\r\n        }\r\n      </ng-template>\r\n    </ngx-datatable-column>\r\n\r\n    <ngx-datatable-column [width]=\"80\" prop=\"expiry\" name=\"Expiry\" [sortable]=\"false\" [resizeable]=\"false\">\r\n      <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-row=\"row\" let-value=\"value\">\r\n        <span>{{row.expiry}}</span>\r\n      </ng-template>\r\n    </ngx-datatable-column>\r\n\r\n    <ngx-datatable-column [width]=\"50\" name=\"Status\" prop=\"bIsAlertMatched\" [sortable]=\"false\" [resizeable]=\"false\">\r\n      <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n        <div class=\"button-wrapper\">\r\n          <span class=\"status \" [class.expired]=\"row?.bIsAlertExpired\"\r\n            [class.pending]=\"!row?.bIsAlertExpired && !row.bIsAlertMatched\"\r\n          [class.matched]=\"row.bIsAlertMatched\">{{row?.bIsAlertExpired?'EXPIRED':row.bIsAlertMatched?'MATCHED':'PENDING'}}</span>\r\n          @if (!row?.bIsAlertExpired) {\r\n            <div class=\"action-btn\">\r\n              <button class=\"btn-outline details\" tooltipTitle=\"ADD\" ngx-tooltip tooltipPlacement=\"top\"\r\n                (click)=\"showPricePopup(row,3)\" tooltipType=\"tooltip\">\r\n                <i class=\"icon-Price-alert\"></i>\r\n              </button>\r\n              @if (!row.bIsAlertMatched) {\r\n                <button class=\"btn-outline modify\" tooltipTitle=\"MODIFY\" ngx-tooltip\r\n                  tooltipPlacement=\"top\" (click)=\"showPricePopup(row,2)\" tooltipType=\"tooltip\">\r\n                  <i class=\"icon-edit\"></i>\r\n                </button>\r\n              }\r\n              <button class=\"btn-outline cancel\" tooltipTitle=\"DELETE\" ngx-tooltip tooltipPlacement=\"top\"\r\n                (click)=\"deletePriceAlert(row)\" tooltipType=\"tooltip\">\r\n                <i class=\"icon-Cancel\"></i>\r\n              </button>\r\n            </div>\r\n          }\r\n        </div>\r\n      </ng-template>\r\n    </ngx-datatable-column>\r\n  </ngx-datatable>\r\n</div>\r\n</div>\r\n</div>\r\n\r\n@if (selectedAlert) {\r\n  <div class=\"dialog\">\r\n    <div class=\"dialog-content\">\r\n      <div class=\"dialog-header clearfix\">\r\n        <div class=\"col-sm-12\">\r\n          <h3 class=\"popup-title\">Are you sure you want to delete this Price Alert?</h3>\r\n        </div>\r\n      </div>\r\n      <div class=\"dialog-footer clearfix\">\r\n        <button class=\"btn buy\" [showFocus]=\"cancellingOrder\" (click)=\"deletePriceAlert(selectedAlert,true)\">YES</button>\r\n        <button class=\"btn sell\" (click)=\"closeDeletePopUp()\">NO</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n}";

/***/ })

}]);