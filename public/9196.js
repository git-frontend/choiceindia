"use strict";
(self["webpackChunkjiffy_upgraded"] = self["webpackChunkjiffy_upgraded"] || []).push([[9196],{

/***/ 13040:
/*!************************************!*\
  !*** ./src/app/guards/eq.guard.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EqGuard: () => (/* binding */ EqGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/utils/utils.service */ 89893);




let EqGuard = class EqGuard {
  constructor(utils, router) {
    this.utils = utils;
    this.router = router;
  }
  canActivate(next, state) {
    let userAccountStatus = this.utils.getUserAccountStatus();
    if (!userAccountStatus || !userAccountStatus.onboardStatus || userAccountStatus.onboardStatus == 'C') {
      return true;
    } else {
      this.router.navigate(["/"]);
    }
  }
  static {
    this.ctorParameters = () => [{
      type: _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router
    }];
  }
};
EqGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService, _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router])], EqGuard);


/***/ }),

/***/ 28063:
/*!**************************************!*\
  !*** ./src/app/guards/eqmf.guard.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EqmfGuard: () => (/* binding */ EqmfGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/utils/utils.service */ 89893);




let EqmfGuard = class EqmfGuard {
  constructor(utils, router) {
    this.utils = utils;
    this.router = router;
  }
  canActivate(route, state) {
    let userAccountStatus = this.utils.getUserAccountStatus();
    if (!userAccountStatus || !userAccountStatus.onboardStatus || userAccountStatus.onboardStatus == 'C' || userAccountStatus.onboardStatus == 'MF') {
      return true;
    } else {
      this.router.navigate(["/"]);
    }
  }
  static {
    this.ctorParameters = () => [{
      type: _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router
    }];
  }
};
EqmfGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService, _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router])], EqmfGuard);


/***/ }),

/***/ 89196:
/*!*********************************************************!*\
  !*** ./src/app/post-login-module/post-login.routing.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PostLoginRoutes: () => (/* binding */ PostLoginRoutes)
/* harmony export */ });
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../guards/auth.guard */ 61620);
/* harmony import */ var _guards_eq_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../guards/eq.guard */ 13040);
/* harmony import */ var _guards_eqmf_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../guards/eqmf.guard */ 28063);



/** fixed config for postlogin pages */
const routeConfig = {
  header: true,
  footer: true,
  indices: false,
  betaFooter: false,
  ticker: true,
  watchlist: false,
  freshChat: false
};
/** path configuration for post login modules */
const PostLoginRoutes = [{
  path: "dashboard",
  redirectTo: "portfolio/net-position",
  pathMatch: "full"
}, {
  path: "orderBook",
  loadComponent: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./orderbook/orderbook.component */ 14970)).then(m => m.OrderbookComponent),
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  data: {
    config: routeConfig
  }
}, {
  path: "orderBook/:page",
  loadComponent: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./orderbook/orderbook.component */ 14970)).then(m => m.OrderbookComponent),
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  data: {
    config: routeConfig
  }
}, {
  path: "tradebook",
  canActivate: [_guards_eq_guard__WEBPACK_IMPORTED_MODULE_1__.EqGuard],
  loadChildren: () => __webpack_require__.e(/*! import() */ 3751).then(__webpack_require__.bind(__webpack_require__, /*! ./tradebook/tradebook.routing */ 93751)).then(m => m.TradeBookRoutes)
}, {
  path: "price-alerts",
  canActivate: [_guards_eq_guard__WEBPACK_IMPORTED_MODULE_1__.EqGuard],
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(2076), __webpack_require__.e(8603)]).then(__webpack_require__.bind(__webpack_require__, /*! ./alerts/alerts.routing */ 88603)).then(m => m.AlertsRoutes)
}, {
  path: "funds",
  canActivate: [_guards_eq_guard__WEBPACK_IMPORTED_MODULE_1__.EqGuard],
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(9966), __webpack_require__.e(8149), __webpack_require__.e(4580), __webpack_require__.e(8643)]).then(__webpack_require__.bind(__webpack_require__, /*! ./funds/funds.routing */ 38643)).then(m => m.FundsRoutes)
}, {
  path: "settings",
  canActivate: [_guards_eqmf_guard__WEBPACK_IMPORTED_MODULE_2__.EqmfGuard],
  loadChildren: () => __webpack_require__.e(/*! import() */ 7487).then(__webpack_require__.bind(__webpack_require__, /*! ./settings/settings.routing */ 77487)).then(m => m.SettingsRoutes)
}, {
  path: "mutual-fund",
  canActivate: [_guards_eq_guard__WEBPACK_IMPORTED_MODULE_1__.EqGuard],
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(4), __webpack_require__.e(3975)]).then(__webpack_require__.bind(__webpack_require__, /*! ./mutual-funds/mutual-funds.routing */ 93975)).then(m => m.MutualFundRoutes)
}, {
  path: "buyback",
  canActivate: [_guards_eq_guard__WEBPACK_IMPORTED_MODULE_1__.EqGuard],
  loadChildren: () => __webpack_require__.e(/*! import() */ 1362).then(__webpack_require__.bind(__webpack_require__, /*! ./buy-back/buyback.module */ 1362)).then(m => m.BuyBackModule)
}, {
  path: "messages",
  canActivate: [_guards_eq_guard__WEBPACK_IMPORTED_MODULE_1__.EqGuard],
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(2076), __webpack_require__.e(159)]).then(__webpack_require__.bind(__webpack_require__, /*! ./message-hub/message-hub.routing */ 80159)).then(m => m.MessageHubRoutes)
}, {
  path: "reports",
  canActivate: [_guards_eq_guard__WEBPACK_IMPORTED_MODULE_1__.EqGuard],
  loadChildren: () => __webpack_require__.e(/*! import() */ 1825).then(__webpack_require__.bind(__webpack_require__, /*! ./reports/reports.module */ 41825)).then(m => m.ReportsModule)
}];

/***/ })

}]);