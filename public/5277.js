(self["webpackChunkjiffy_upgraded"] = self["webpackChunkjiffy_upgraded"] || []).push([[5277],{

/***/ 35277:
/*!*******************************************************************************!*\
  !*** ./src/app/links-module/exchange-messages/exchange-messages.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExchangeMessagesComponent: () => (/* binding */ ExchangeMessagesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _exchange_messages_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exchange-messages.component.html?ngResource */ 52447);
/* harmony import */ var _exchange_messages_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exchange-messages.component.scss?ngResource */ 89643);
/* harmony import */ var _exchange_messages_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_exchange_messages_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _services_rest_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/rest/common.service */ 18056);
/* harmony import */ var _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/seo/seo.service */ 44897);
/* harmony import */ var _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/shared-data/shared-data.service */ 46013);
/* harmony import */ var _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/utils/utils.service */ 89893);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 89417);










/**
 * Component for Exchange Messages Page
 */
let ExchangeMessagesComponent = class ExchangeMessagesComponent {
  /**
   * Constructor for Object Initialization
   * @param utilsService UtilsService instance
   * @param sharedDataService SharedDataService Instance
   * @param router Router Module Instance
   * @param rest CommonService instance for HTTP Requests
   */
  constructor(utilsService, sharedDataService, router, seo, rest) {
    this.utilsService = utilsService;
    this.sharedDataService = sharedDataService;
    this.router = router;
    this.seo = seo;
    this.rest = rest;
    this.exchange = 1;
    this.hour = 1;
    this.hourList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    this.exchangeMessageList = [];
    this.exchangeList = [{
      exchangeName: 'NSE CASH',
      segment: 1
    }, {
      exchangeName: 'NSE DERIVATIVES',
      segment: 2
    }, {
      exchangeName: 'BSE CASH',
      segment: 3
    }, {
      exchangeName: 'BSE DERIVATIVES',
      segment: 4
    }, {
      exchangeName: 'MCX FUTURES',
      segment: 5
    }, {
      exchangeName: 'NCDEX FUTURES',
      segment: 7
    }, {
      exchangeName: 'NSECDS',
      segment: 13
    }, {
      exchangeName: 'BSECDS',
      segment: 38
    }];
    this.seo.setMeta('message-exchange');
  }
  /**
   * Fetch Exchange Messages for Given Segment and Hour
   * @param segment Segment ID
   * @param hour Hours
   */
  getExchangeMessage(segment, hour) {
    let userId = this.utilsService.getUserId();
    let data = {
      "userId": !userId || userId == 'guest' ? '' : userId,
      "groupId": !userId || userId == 'guest' ? '' : this.utilsService.get('groupId'),
      "sessionId": this.utilsService.getSessionId() || "",
      "segmentId": Number(segment),
      "hours": Number(hour),
      "pageNo": 1,
      "pageSize": 100,
      "accessToken": this.utilsService.getTwoFAAccessToken() || ""
    };
    this.exchangeMessageList = [];
    this.rest.getExchangeMessage(data).subscribe(res => {
      if (res.Status == "Success" && res.Response) {
        this.exchangeMessageList = res.Response.lstExchangeMessages || [];
        this.exchangeMessageList = this.processMessages();
      } else if (res.Reason == 'Data not found.') {
        this.exchangeMessageList = [];
        // }
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
      } else {
        this.utilsService.error('Error', "Something went wrong");
      }
    });
  }
  /**
   * Life Cycle Hook for Initialization
   */
  ngOnInit() {
    this.getExchangeMessage(this.exchange, this.hour);
  }
  /**
   * Process Messages to concatenate with Timings
   */
  processMessages() {
    let timingList = [];
    let messageList = [];
    this.exchangeMessageList.forEach((element, index) => {
      if (timingList.indexOf(element.Time) == -1) {
        timingList.push(element.Time);
      }
    });
    timingList.forEach((element, index) => {
      let message = "";
      this.exchangeMessageList.filter(msg => {
        if (msg.Time == element) {
          message += " " + msg.Message;
        }
        return msg.Time == element;
      });
      messageList.push({
        Time: element,
        Message: message
      });
    });
    return messageList;
  }
  /**
   * Fetch Exchange messages after form Submission
   */
  onSubmit() {
    this.getExchangeMessage(this.exchange, this.hour);
  }
  static {
    this.ctorParameters = () => [{
      type: _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_5__.UtilsService
    }, {
      type: _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__.SharedDataService
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
    }, {
      type: _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_3__.SeoService
    }, {
      type: _services_rest_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService
    }];
  }
};
ExchangeMessagesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-exchange-messages',
  template: _exchange_messages_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule],
  styles: [(_exchange_messages_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__metadata)("design:paramtypes", [_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_5__.UtilsService, _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__.SharedDataService, _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router, _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_3__.SeoService, _services_rest_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService])], ExchangeMessagesComponent);


/***/ }),

/***/ 89643:
/*!********************************************************************************************!*\
  !*** ./src/app/links-module/exchange-messages/exchange-messages.component.scss?ngResource ***!
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

.content-box {
  position: relative;
  min-height: 200px;
  text-align: right;
}

.no-data-container h3 {
  color: #aaa;
  font-size: 16px;
  font-weight: bold;
}
.no-data-container .btn-clear {
  color: #fe606e;
}
.no-data-container img {
  width: 150px;
}

.table > tbody > tr > td {
  text-align: justify;
  font-size: 14px;
  color: #797979;
}
@media (max-width: 1550px) {
  .table > tbody > tr > td {
    font-size: 12px;
  }
}

table {
  margin-bottom: 0px;
}

.btn-yellow-bg {
  margin-right: 0px;
  margin-bottom: 15px;
}

.filter-label {
  margin: 7px 0px;
}

.form-control {
  box-shadow: none;
}
.form-control:focus {
  box-shadow: none;
  border-color: #fe7f7d;
}

.table-responsive > .table > thead > tr > th,
.table-responsive > .table > thead > tr > td,
.table-responsive > .table > tbody > tr > th,
.table-responsive > .table > tbody > tr > td,
.table-responsive > .table > tfoot > tr > th,
.table-responsive > .table > tfoot > tr > td {
  white-space: pre-wrap;
}

.table > thead > tr > th,
.table > thead > tr > td,
.table > tbody > tr > th,
.table > tbody > tr > td,
.table > tfoot > tr > th,
.table > tfoot > tr > td {
  padding: 10px;
  line-height: 1.42857143;
  vertical-align: top;
  font-size: 14px;
  border-top: 1px solid transparent;
  text-align: left;
}
@media (max-width: 1550px) {
  .table > thead > tr > th,
  .table > thead > tr > td,
  .table > tbody > tr > th,
  .table > tbody > tr > td,
  .table > tfoot > tr > th,
  .table > tfoot > tr > td {
    font-size: 12px;
  }
}`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 52447:
/*!********************************************************************************************!*\
  !*** ./src/app/links-module/exchange-messages/exchange-messages.component.html?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"clearfix\"></div>\r\n<section class=\"clearfix\">\r\n  <div class=\"col-xs-12 company-page-wrap\">\r\n    <div class=\"card\">\r\n      <div class=\"optfutwrap\">\r\n        <div class=\"row optionfuture\">\r\n          <form name=\"exchangeMessageForm\" (ngSubmit)=\"onSubmit()\" #exchangeMessageForm=\"ngForm\" class=\"col-md-12\">\r\n            <div class=\"row\">\r\n            <div class=\"col-lg-4 col-md-5 col-sm-4 col-xs-12\">\r\n              <div class=\"row\">\r\n                <div class=\"col-lg-3 col-md-4 col-sm-3 col-xs-12\">\r\n                  <label class=\"filter-label\">Exchange</label>\r\n                </div>\r\n                <div class=\"col-lg-9 col-md-8 col-sm-9 col-xs-12\">\r\n                  <label class=\"custom-select\">\r\n                    <select id=\"categories\" #exchangeText=\"ngModel\" class=\"form-control\" name=\"exchangeText\"\r\n                      [(ngModel)]=\"exchange\" required>\r\n                      @for (item of exchangeList; track item) {\r\n                        <option value=\"{{item.segment}}\">{{item.exchangeName}}</option>\r\n                      }\r\n                    </select>\r\n                  </label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-4 col-md-5 col-sm-4 col-xs-12\">\r\n              <div class=\"row\">\r\n                <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\">\r\n                  <label class=\"filter-label\">Hours</label>\r\n                </div>\r\n                <div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-12\">\r\n                  <label class=\"custom-select\">\r\n                    <select id=\"categories\" #hourtext=\"ngModel\" class=\"form-control\" name=\"hourtext\" [(ngModel)]=\"hour\"\r\n                      required>\r\n                      @for (item of hourList; track item) {\r\n                        <option value=\"{{item}}\">{{item}}</option>\r\n                      }\r\n                    </select>\r\n                  </label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-1 col-md-2 col-sm-3 col-xs-12\">\r\n              <button type=\"submit\" scrollTo class=\"btn btn-gradient\">GO</button>\r\n            </div>\r\n          </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-12 padding0\" ng-reflect-class-base=\"col-md-12 padding0\">\r\n      <button class=\"btn btn-gradient mb-15 pull-right btn-repeat\" (click)=\"getExchangeMessage(exchange,hour)\" alt=\"Refresh\">\r\n        <i aria-hidden=\"true\" class=\"fa icon-repeat\"></i>\r\n      </button>\r\n      <h4 class=\"heading\" ng-reflect-class-base=\"heading\">Exchange Messages</h4>\r\n    </div>\r\n    <div class=\"clearfix\"></div>\r\n    <div class=\"card\">\r\n      <div class=\"card-block content-box\">\r\n        <!--<h4 class=\"page-title\">{{messageType == 'exchange'?'Exchange':'Order'}} Messages</h4>-->\r\n        <div>\r\n          <img class=\"loader\" src=\"assets/images/loader.gif\"\r\n            [hidden]=\"exchangeMessageList.length>0 || !sharedDataService.isServiceHit\" />\r\n            <div class=\"no-result-wrapper\" [hidden]=\"exchangeMessageList.length>0 || sharedDataService.isServiceHit\">\r\n              <img src=\"../../../assets/images/no-order-message.png\">\r\n              <p class=\"no-result-title\">No Exchange Messages.</p>\r\n              <p class=\"no-result-text\">No Volume day? There's nothing to show, it seems\r\n                <br>you haven't placed an order today.\r\n                </p>\r\n                <!-- <button class=\"btn btn-gradient\" (click)=\"openSearch()\">Click here to Add</button> -->\r\n              </div>\r\n              <div class=\"table-responsive\">\r\n                <table class=\"table table-striped pink-table mobile-table\" style=\"border-collapse:collapse;\"\r\n                  [hidden]=\"exchangeMessageList.length==0 || sharedDataService.isServiceHit\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th width='15%'>Time</th>\r\n                      <th width='85%'>Message</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    @for (item of exchangeMessageList; track item) {\r\n                      <tr>\r\n                        <td data-header=\"Time\">{{item.Time}}</td>\r\n                        <td data-header=\"Message\">{{item.Message}}</td>\r\n                      </tr>\r\n                    }\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>";

/***/ })

}]);