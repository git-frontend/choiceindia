(self["webpackChunkjiffy_upgraded"] = self["webpackChunkjiffy_upgraded"] || []).push([[159],{

/***/ 13494:
/*!************************************************************************!*\
  !*** ./src/app/post-login-module/message-hub/message-hub.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MessageHubComponent: () => (/* binding */ MessageHubComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _message_hub_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message-hub.component.html?ngResource */ 47186);
/* harmony import */ var _message_hub_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message-hub.component.scss?ngResource */ 25456);
/* harmony import */ var _message_hub_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_message_hub_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _services_rest_post_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/rest/post-login.service */ 4135);
/* harmony import */ var _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/shared-data/shared-data.service */ 46013);
/* harmony import */ var _services_sockets_broadcaster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/sockets/broadcaster */ 28510);
/* harmony import */ var _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/utils/utils.service */ 89893);
/* harmony import */ var _common_module_non_eq_sso_non_eq_sso_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common-module/non-eq-sso/non-eq-sso.component */ 67761);











/**
 * Component for Displaying Order Messages
 */
let MessageHubComponent = class MessageHubComponent {
  /**
   * Constructor for Object Initialization
   * @param utilsService UtilsService instance
   * @param sharedDataService SharedDataService Instance
   * @param router Router Module Instance
   * @param broadcaster broadcaster Class instance
   * @param rest PostLoginService instance for HTTP Requests
   */
  constructor(utilsService, sharedDataService, router, broadcaster, rest, location, shared) {
    this.utilsService = utilsService;
    this.sharedDataService = sharedDataService;
    this.router = router;
    this.broadcaster = broadcaster;
    this.rest = rest;
    this.location = location;
    this.shared = shared;
    this.messagesData = {
      "orderMessages": [],
      "brokerMessages": []
    };
    this.activeTab = 2;
  }
  /**
   * Fetch Order Messages
   */
  getOrderMessages() {
    let data = {
      "userId": this.utilsService.getUserId() || "",
      "sessionId": this.utilsService.getSessionId() || "",
      "pageNo": 1,
      "pageSize": 100,
      "accessToken": this.utilsService.getTwoFAAccessToken() || ""
    };
    this.messagesData.orderMessages = [];
    this.rest.getOrderMessage(data).subscribe(res => {
      if (res.Status == "Success" && res.Response) {
        this.messagesData.orderMessages = [];
        if (res.Response != "No Order Messages" && res.Response.length) {
          this.isOrder = false;
          // ordermsg = res.Response;
          // for (let i = 0; i < ordermsg.length - 1; i++) {
          this.messagesData.orderMessages = res.Response;
          // .orderMessages.push(ordermsg[i])
          // }
        }
        // }
        // else if (this.utilsService.isSessionExpired(res.Reason)) {
        //   if(this.shared.isSSO){
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
   * Fetch Broker Messages
   */
  getBrokerMessages() {
    let request = {
      "userId": this.utilsService.getUserId() || "",
      "sessionId": this.utilsService.getSessionId() || "",
      "pageNo": 1,
      "pageSize": 100,
      "accessToken": this.utilsService.getTwoFAAccessToken() || ""
    };
    this.rest.getBrokerMessages(request).subscribe(data => {
      if (data.Status == "Success" && data.Response) {
        this.messagesData.brokerMessages = [];
        for (var i = 0; i < data.Response.length; i++) {
          data.Response[i].TimeStamp = this.utilsService.changeCurrentDateFormat(data.Response[i].TimeStamp, 'DD-MM-YYYY HH:mm', 'DD-MMM-YYYY HH:mm');
          data.Response[i].Message = data.Response[i].Message.replace(/(((https?:\/\/)|(www\.))[^\s]+)/g, url => {
            url = url.endsWith('.') ? url.substring(0, url.length - 1) : url;
            return '<a href="' + url + '" target="P_blank">Read More</a>';
          });
          this.messagesData.brokerMessages.push(data.Response[i]);
        }
        // } else if (this.utilsService.isSessionExpired(data.Reason)) {
        //   if(this.shared.isSSO){
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
    }, err => {
      this.utilsService.error('Error', "Something went wrong");
    });
  }
  /**
   * Life Cycle Hook for Initialization
   */
  ngOnInit() {
    let path = location.pathname;
    this.activeTab = path.indexOf('messages/order') > -1 ? 1 : 2;
    this.activeTab == 1 ? this.getOrderMessages() : this.getBrokerMessages();
    this.broadcastSubscription = this.broadcaster.on('orderPlacedModify').subscribe(data => {
      if (this.activeTab == 1) {
        setTimeout(() => {
          this.getOrderMessages();
        }, 1500);
      }
    });
    this.brokerMsgSubscription = this.broadcaster.on('brokerMessagesUpdate').subscribe(data => {
      if (this.activeTab == 2) {
        setTimeout(() => {
          this.getBrokerMessages();
        }, 1500);
      }
    });
    this.routeReuseSubscription = this.utilsService.broadcastObservable('routeResuseMenu').subscribe(data => {
      if (data && data.route) {
        data.route.indexOf('messages/order') >= 0 ? this.activateOrderMessages() : this.activateBrokerMessages();
        this.shared.fromRoute = data.route;
      }
    });
  }
  /**
   * Life Cycle Hook for destruction
   */
  ngOnDestroy() {
    if (this.broadcastSubscription) this.broadcastSubscription.unsubscribe();
    if (this.routeReuseSubscription) this.routeReuseSubscription.unsubscribe();
    if (this.brokerMsgSubscription) this.brokerMsgSubscription.unsubscribe();
  }
  activateBrokerMessages() {
    this.location.replaceState('/client/messages/broker');
    this.shared.fromRoute = 'client/messages/broker';
    this.activeTab = 2;
    this.getBrokerMessages();
  }
  activateOrderMessages() {
    this.location.replaceState('/client/messages/order');
    this.shared.fromRoute = 'client/messages/order';
    this.activeTab = 1;
    this.getOrderMessages();
  }
  refreshData() {
    if (this.activeTab == 2) {
      this.getBrokerMessages();
    } else if (this.activeTab == 1) {
      this.getOrderMessages();
    }
  }
  static {
    this.ctorParameters = () => [{
      type: _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_5__.UtilsService
    }, {
      type: _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__.SharedDataService
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
    }, {
      type: _services_sockets_broadcaster__WEBPACK_IMPORTED_MODULE_4__.Broadcaster
    }, {
      type: _services_rest_post_login_service__WEBPACK_IMPORTED_MODULE_2__.PostLoginService
    }, {
      type: _angular_common__WEBPACK_IMPORTED_MODULE_8__.Location
    }, {
      type: _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__.SharedDataService
    }];
  }
};
MessageHubComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-message-hub',
  template: _message_hub_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  imports: [_common_module_non_eq_sso_non_eq_sso_component__WEBPACK_IMPORTED_MODULE_6__.NonEqSsoComponent],
  styles: [(_message_hub_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:paramtypes", [_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_5__.UtilsService, _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__.SharedDataService, _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router, _services_sockets_broadcaster__WEBPACK_IMPORTED_MODULE_4__.Broadcaster, _services_rest_post_login_service__WEBPACK_IMPORTED_MODULE_2__.PostLoginService, _angular_common__WEBPACK_IMPORTED_MODULE_8__.Location, _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__.SharedDataService])], MessageHubComponent);


/***/ }),

/***/ 80159:
/*!**********************************************************************!*\
  !*** ./src/app/post-login-module/message-hub/message-hub.routing.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MessageHubRoutes: () => (/* binding */ MessageHubRoutes)
/* harmony export */ });
/* harmony import */ var src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/guards/auth.guard */ 61620);
/* harmony import */ var _message_hub_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message-hub.component */ 13494);


const routeConfig = {
  header: true,
  footer: true,
  indices: false,
  betaFooter: false,
  ticker: true,
  watchlist: false,
  freshChat: false
};
const MessageHubRoutes = [{
  path: "",
  redirectTo: "order",
  pathMatch: "full"
}, {
  path: "order",
  component: _message_hub_component__WEBPACK_IMPORTED_MODULE_1__.MessageHubComponent,
  canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  data: {
    config: routeConfig
  }
}, {
  path: "broker",
  component: _message_hub_component__WEBPACK_IMPORTED_MODULE_1__.MessageHubComponent,
  canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  data: {
    config: routeConfig
  }
}];

/***/ }),

/***/ 25456:
/*!*************************************************************************************!*\
  !*** ./src/app/post-login-module/message-hub/message-hub.component.scss?ngResource ***!
  \*************************************************************************************/
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
  color: #797979;
  font-size: 16px;
  font-weight: bold;
}
.no-data-container .btn-clear {
  color: #EE404A;
}
.no-data-container img {
  width: 150px;
}

.table > tbody > tr > td {
  text-align: justify;
  font-size: 14px;
  vertical-align: middle;
}
@media (max-width: 1200px) {
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
  border-color: #EE404A;
}

.table-responsive > .table > thead > tr > th p:last-child,
.table-responsive > .table > thead > tr > td p:last-child,
.table-responsive > .table > tbody > tr > th p:last-child,
.table-responsive > .table > tbody > tr > td p:last-child,
.table-responsive > .table > tfoot > tr > th p:last-child,
.table-responsive > .table > tfoot > tr > td p:last-child {
  margin-bottom: 0px;
}

.table > thead > tr > th,
.table > thead > tr > td,
.table > tbody > tr > th,
.table > tbody > tr > td,
.table > tfoot > tr > th,
.table > tfoot > tr > td {
  padding: 10px 10px 16px 10px;
  line-height: 1.42857143;
  vertical-align: top;
  font-size: 14px;
  border-top: 1px solid transparent;
}

@media (max-width: 1024px) {
  .card {
    margin-top: 15px;
  }
}`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 47186:
/*!*************************************************************************************!*\
  !*** ./src/app/post-login-module/message-hub/message-hub.component.html?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\r\n\r\n<div class=\"clearfix\"></div>\r\n<section class=\"clearfix\">\r\n  <div class=\"col-xs-12 company-page-wrap\">\r\n    <app-non-eq-sso></app-non-eq-sso>\r\n\r\n    <div class=\"clearfix\"></div>\r\n\r\n\r\n    <div class=\"card\">\r\n      <div class=\"card-block\">\r\n        <div class=\"table-header\">\r\n          <h4 class=\"heading\" ng-reflect-class-base=\"heading\">Messages</h4>\r\n          <button class=\"btn btn-gradient mb-15 pull-right btn-repeat\" (click)=\"refreshData()\" title=\"Refresh\"><i aria-hidden=\"true\"\r\n          class=\"fa icon-repeat\"></i></button>\r\n\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <ul class=\"nav nav-tabs hor_1 pull-left mb-30 wtd100 reset\">\r\n              <li [class.active]=\"activeTab==1\" (click)=\"activateOrderMessages()\">\r\n                <a>ORDERS</a>\r\n              </li>\r\n              <li [class.active]=\"activeTab==2\" (click)=\"activateBrokerMessages()\">\r\n                <a>BROKER</a>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n        <div class=\"mb-20 resp-tabs-container hor_1 content-box\" [hidden]=\"activeTab!=1\">\r\n          <img class=\"loader\" src=\"assets/images/loader.gif\"\r\n            [hidden]=\"messagesData?.orderMessages.length>0 || !sharedDataService.isServiceHit\" />\r\n            <div class=\"no-result-wrapper\"\r\n              [hidden]=\"messagesData?.orderMessages.length>0 || sharedDataService.isServiceHit\">\r\n              <img src=\"../../../assets/images/no-order-message.png\" width=\"300\" height=\"196\" alt=\"No Message\">\r\n              <p class=\"no-result-title\">No Order Messages.</p>\r\n              <p class=\"no-result-text\">No Volume day? There's nothing to show, it seems <br>you haven't placed an order\r\n              today. </p>\r\n              <!-- <button class=\"btn btn-gradient\" (click)=\"openSearch()\">Click here to Add</button> -->\r\n            </div>\r\n            <div class=\"table-responsive\">\r\n              <table class=\"table table-striped pink-table\" style=\"border-collapse:collapse;\"\r\n                [hidden]=\"messagesData?.orderMessages.length==0 || sharedDataService.isServiceHit\">\r\n                <tbody>\r\n                  @for (item of messagesData?.orderMessages; track item) {\r\n                    <tr>\r\n                      <td>{{item?.Message}}</td>\r\n                    </tr>\r\n                  }\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n          <div class=\"mb-20 resp-tabs-container hor_1 content-box\" [hidden]=\"activeTab!=2\">\r\n            <img class=\"loader\" src=\"assets/images/loader.gif\"\r\n              [hidden]=\"messagesData?.brokerMessages.length>0 || !sharedDataService.isServiceHit\" />\r\n              <div class=\"no-result-wrapper\"\r\n                [hidden]=\"messagesData?.brokerMessages.length>0 || sharedDataService.isServiceHit\">\r\n                <img src=\"../../../assets/images/no-order-message.png\" width=\"300\" height=\"196\" alt=\"No Message\">\r\n                <p class=\"no-result-title\">No messages received yet!</p>\r\n              </div>\r\n              <div class=\"table-responsive\">\r\n                <table class=\"table table-striped pink-table\" style=\"border-collapse:collapse;\"\r\n                  [hidden]=\"messagesData?.brokerMessages?.length==0 || sharedDataService.isServiceHit\">\r\n                  <tbody>\r\n                    @for (item of messagesData?.brokerMessages; track item) {\r\n                      <tr>\r\n                        <!-- <td style=\"width:25%;\">{{item?.TimeStamp}}</td> -->\r\n                        <td><strong>{{item?.Subject}}</strong>\r\n                        <p>{{item?.TimeStamp}}</p>\r\n                        <p [innerHTML]=\"item?.Message\"></p>\r\n                      </td>\r\n                    </tr>\r\n                  }\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>";

/***/ })

}]);