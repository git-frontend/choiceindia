(self["webpackChunkjiffy_upgraded"] = self["webpackChunkjiffy_upgraded"] || []).push([[7562],{

/***/ 88477:
/*!***************************************************************************!*\
  !*** ./src/app/pre-login-module/fund-transfer/fund-transfer.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FundTransferComponent: () => (/* binding */ FundTransferComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _fund_transfer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fund-transfer.component.html?ngResource */ 3547);
/* harmony import */ var _fund_transfer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fund-transfer.component.scss?ngResource */ 94155);
/* harmony import */ var _fund_transfer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fund_transfer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/utils/utils.service */ 89893);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/seo/seo.service */ 44897);
/* harmony import */ var _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/shared-data/shared-data.service */ 46013);





// import { Route } from '@angular/compiler/src/core';



let FundTransferComponent = class FundTransferComponent {
  /**
   * Dependency injection
   * @param seo seo service for meta tag and title
   * @param router router for navigation
   * @param utils for common functions
   */
  constructor(shared, seo, router, utils) {
    this.shared = shared;
    this.seo = seo;
    this.router = router;
    this.utils = utils;
    /**
     * present active Tab
     */
    this.activeTab = 1;
  }
  /** On intialization of module */
  ngOnInit() {
    this.seo.setMeta('fund-transfer');
  }
  /**
   * On change of tab , show different data
   * @param i present tab
   */
  activateFilter(i) {
    this.activeTab = i;
    let tabName = this.activeTab == 1 ? 'valuation' : 'management Effectiveness';
  }
  /** for payIn in fund page */
  gotoFundPage() {
    if (this.utils.isAuthorized()) {
      this.router.navigate(['/client/funds']);
    } else {
      this.router.navigate(['/auth/login']);
    }
  }
  static {
    this.ctorParameters = () => [{
      type: _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__.SharedDataService
    }, {
      type: _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_3__.SeoService
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
    }, {
      type: _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_2__.UtilsService
    }];
  }
};
FundTransferComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-fund-transfer',
  template: _fund_transfer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  imports: [],
  styles: [(_fund_transfer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__.SharedDataService, _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_3__.SeoService, _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router, _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_2__.UtilsService])], FundTransferComponent);


/***/ }),

/***/ 47562:
/*!*******************************************************!*\
  !*** ./src/app/pre-login-module/pre-login.routing.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PreLoginRoutes: () => (/* binding */ PreLoginRoutes)
/* harmony export */ });
/* harmony import */ var _guards_basic_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../guards/basic.guard */ 72972);
/* harmony import */ var _fund_transfer_fund_transfer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fund-transfer/fund-transfer.component */ 88477);


/** fixed config for prelogin pages */
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
const PreLoginRoutes = [{
  path: "fund-transfer",
  canActivate: [_guards_basic_guard__WEBPACK_IMPORTED_MODULE_0__.BasicGuard],
  component: _fund_transfer_fund_transfer_component__WEBPACK_IMPORTED_MODULE_1__.FundTransferComponent,
  data: {
    config: routeConfig,
    fullScreen: true
  }
}];

/***/ }),

/***/ 94155:
/*!****************************************************************************************!*\
  !*** ./src/app/pre-login-module/fund-transfer/fund-transfer.component.scss?ngResource ***!
  \****************************************************************************************/
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
.sub-title {
  color: #797979;
}

.card {
  margin-top: 50px;
  padding: 30px;
}
@media (max-width: 767px) {
  .card {
    padding: 0px;
  }
}

.btn-gradient {
  min-width: 300px;
}

table {
  margin: 10px 0;
}

p {
  margin: 10px 0;
}
p strong {
  color: #333333;
}

ul {
  margin: 10px 0;
}

h4 {
  margin-top: 20px;
  margin-bottom: 10px;
}

ol li,
ul li {
  margin: 8px 0;
  color: #797979;
}
ol li strong,
ul li strong {
  color: #333333;
}

.nav-tabs {
  margin: 0 !important;
}
.nav-tabs li {
  margin: 0 !important;
}`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 3547:
/*!****************************************************************************************!*\
  !*** ./src/app/pre-login-module/fund-transfer/fund-transfer.component.html?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container\">\r\n  <h2 class=\"head-title text-center text-uppercase\">Fund Transfer</h2>\r\n  <h4 class=\"sub-title text-center\">\r\n    Remember to transfer funds only from the bank account registered with us.\r\n  </h4>\r\n  <div class=\"card\">\r\n    <div class=\"card-block\">\r\n      <ul class=\"d-flex nav nav-tabs hor_1 reset\">\r\n        <li [class.active]=\"activeTab == 1\" (click)=\"activateFilter(1)\">\r\n          <a>Deposit funds (Payin)</a>\r\n        </li>\r\n        <li [class.active]=\"activeTab == 2\" (click)=\"activateFilter(2)\">\r\n          <a>Withdraw funds (Payout)</a>\r\n        </li>\r\n      </ul>\r\n      <div class=\"tab-content hor_1\">\r\n        @if (activeTab === 1) {\r\n          <div>\r\n            <p>\r\n              As per SEBI regulations, you have to maintain separate balances for\r\n              Equities and Commodities accounts, so we have two different bank\r\n              accounts to facilitate this. There are three different modes to\r\n              deposit funds to your account.\r\n            </p>\r\n            <img\r\n              class=\"img-responsive\"\r\n              src=\"{{ shared.serverImageUrl + 'upi-logo.png' }}\"\r\n              alt=\"UPI Fund Transfer\" width=\"350\" height=\"159\"\r\n              />\r\n              <p>\r\n                Make sure to initiate all UPI transfers from our payment gateway for\r\n                the funds to be updated to your Choice FinX account instantly.\r\n              </p>\r\n              <h4>Netbanking Facility</h4>\r\n              <p>\r\n                You can transfer funds directly from the Choice FinX trading\r\n                platform via Netbanking from below list of banks.\r\n              </p>\r\n              <a\r\n                href=\"https://choicebroking.freshdesk.com/support/solutions/articles/22000282753-which-banks-are-available-for-fund-transfer-via-net-banking\"\r\n                target=\"_blank\"\r\n                style=\"font-weight: bold\"\r\n                >Click here for checking out the banks available for Netbanking</a\r\n                >\r\n                <!-- <img class=\"img-responsive\" src=\"{{shared.serverImageUrl + 'bank-logos.png'}}\"\r\n                alt=\"Bank List for Fund Transfer\"> -->\r\n                <h4>IMPS/NEFT/RTGS transfer</h4>\r\n                <p>\r\n                  Dear Investor, <br />\r\n                  Please Deposit amount on any one of below given account for trading.\r\n                </p>\r\n                <label class=\"text-center\">CML Details</label>\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-12 col-sm-12 d-flex\">\r\n                    <div class=\"table-responsive\">\r\n                      <table class=\"table table-hover table-striped table-bordered\">\r\n                        <tbody>\r\n                          <tr>\r\n                            <th>Bank Name</th>\r\n                            <td>Yes Bank</td>\r\n                            <td>HDFC BANK</td>\r\n                            <td>ICICI BANK</td>\r\n                          </tr>\r\n                          <tr>\r\n                            <th>Acc. Type</th>\r\n                            <td>Current</td>\r\n                            <td>Current</td>\r\n                            <td>Current</td>\r\n                          </tr>\r\n                          <tr>\r\n                            <th>IFSC Code</th>\r\n                            <td width=\"300\">\r\n                              YESB <mark>0</mark>CMSNOC (fifth character is number\r\n                              zero)\r\n                            </td>\r\n                            <td>HDFC0000060</td>\r\n                            <td>ICIC0000104</td>\r\n                          </tr>\r\n                          <tr>\r\n                            <th>Acc. Number</th>\r\n                            <td>\r\n                              CHOIEQ<strong>{{ shared?.userId }}</strong>\r\n                              @if (!shared?.userId) {\r\n                                <i>\r\n                                  <strong>&lt;CLIENTCODE&gt;</strong>\r\n                                </i>\r\n                              }\r\n                            </td>\r\n                            <td>\r\n                              CHOICE<strong>{{ shared?.userId }}</strong>\r\n                              @if (!shared?.userId) {\r\n                                <i>\r\n                                  <strong>&lt;CLIENTCODE&gt;</strong>\r\n                                </i>\r\n                              }\r\n                            </td>\r\n                            <td>CHEQ<strong>{{shared?.userId}}</strong>\r\n                            @if (!shared?.userId) {\r\n                              <i>\r\n                                <strong>&lt;CLIENTCODE&gt;</strong>\r\n                              </i>\r\n                            }\r\n                          </td>\r\n                        </tr>\r\n                        <tr>\r\n                          <th>Branch Name</th>\r\n                          <td>INDIABULLS FINANCE CENTRE</td>\r\n                          <td>Fort Branch, Mumbai</td>\r\n                          <td>-</td>\r\n                        </tr>\r\n                      </tbody>\r\n                    </table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <p>\r\n                Please note after the deposit please share below given details on\r\n                <a href=\"mailto: b.accounts@choiceindia.com\"\r\n                  >b.accounts&#64;choiceindia.com</a\r\n                  >\r\n                </p>\r\n                <ol>\r\n                  <li>Client Name & Mobile Number</li>\r\n                  <li>Client ID</li>\r\n                  <li>Deposit reference Number in case of RTGS & NEFT</li>\r\n                  <li>\r\n                    Cheque deposit slip & Cheque Copy in case of Cheque deposit.\r\n                  </li>\r\n                </ol>\r\n                <p>\r\n                  <strong>Important:</strong> Unlike the usual bank account numbers,\r\n                  you’ll notice that our bank account numbers just have alphabets. Add\r\n                  these two accounts as payees on your registered bank account and\r\n                  you’ll be able to transfer funds to your trading account anytime.\r\n                </p>\r\n                <div class=\"table-responsive\">\r\n                  <table class=\"table table-hover table-striped table-bordered\">\r\n                    <thead>\r\n                      <tr>\r\n                        <th>Method</th>\r\n                        <th>Time taken to reflect in Funds</th>\r\n                        <th>Charges</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr>\r\n                        <td>UPI</td>\r\n                        <td>Same Banking Day or within 30 minutes</td>\r\n                        <td>Payment Gateway Charges may Apply</td>\r\n                      </tr>\r\n                      <tr class=\"grey-back\">\r\n                        <td>Net Banking</td>\r\n                        <td>Same Banking Day or within 30 minutes</td>\r\n                        <td>Payment Gateway Charges may Apply</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>NEFT/RTGS</td>\r\n                        <td>Same Banking Day or within 30 minutes</td>\r\n                        <td>Free at Choice FinX, bank charges may apply</td>\r\n                      </tr>\r\n                      <tr class=\"grey-back\">\r\n                        <td>IMPS</td>\r\n                        <td>Same Banking Day or within 30 minutes</td>\r\n                        <td>Free at Choice FinX, bank charges may apply</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>Cheque</td>\r\n                        <td>Next Working Day after clearance of Cheque</td>\r\n                        <td>Free</td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n                <ul>\r\n                  <li>We do not accept any third party digital wallet.</li>\r\n                  <li>We accept UPI transfer mode.</li>\r\n                  <li>\r\n                    In case of cheque payments, a charge of up to\r\n                    <strong>&#8377; 350+ GST</strong> would be levied as in case your\r\n                    cheque bounces.\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            }\r\n            @if (activeTab === 2) {\r\n              <div>\r\n                <p>\r\n                  The withdrawal of funds procedure is a complete online process.\r\n                  Every request is processed within 24 business hours after the\r\n                  trading day has ended. Choice FinX staff are promptly notified of\r\n                  your withdrawal request and process all withdrawals once at the end\r\n                  of each day. Follow the steps below to withdraw funds.\r\n                </p>\r\n                <ul>\r\n                  <li>\r\n                    You can place a fund withdrawal request by logging into Choice\r\n                    FinX App or web aplication\r\n                  </li>\r\n                  <li>\r\n                    Equity, F&O, and currency withdrawals are processed at 5:30 PM,\r\n                    Monday to Friday.\r\n                  </li>\r\n                  <li>\r\n                    Commodity withdrawals are processed at 4.30 PM Monday to Friday.\r\n                  </li>\r\n                  <li>\r\n                    Withdrawal requests can only be placed online, and may take up to\r\n                    24 working hours to be credited to your bank account.\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            }\r\n            <div class=\"text-center\">\r\n              <button class=\"btn btn-gradient\" (click)=\"gotoFundPage()\">\r\n                Proceed\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n";

/***/ })

}]);