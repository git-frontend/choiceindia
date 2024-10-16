"use strict";
(self["webpackChunkjiffy_upgraded"] = self["webpackChunkjiffy_upgraded"] || []).push([[7990],{

/***/ 77990:
/*!***********************************************!*\
  !*** ./src/app/links-module/links.routing.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LinkRoutes: () => (/* binding */ LinkRoutes)
/* harmony export */ });
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../guards/auth.guard */ 61620);
/* harmony import */ var _guards_basic_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../guards/basic.guard */ 72972);


function quickLinksRoute(url) {
  if (url.length === 1 && url[0].path === "terms-use" || url.length === 1 && url[0].path === "integration" || url.length === 1 && url[0].path === "privacy-policy" || url.length === 1 && url[0].path === "rms-policy" || url.length === 1 && url[0].path === "beta-terms-and-conditions" || url.length === 1 && url[0].path === "offer-terms-conditions" || url.length === 1 && url[0].path === "jiffy-signal-terms" || url.length === 1 && url[0].path === "disclaimer" || url.length === 1 && url[0].path === "refer-and-earn" || url.length === 1 && url[0].path === "algo-trading-t-c") return {
    consumed: url
  };
  return null;
}
function supportRoute(url) {
  if (url.length === 1 && url[0].path === "support" || url.length === 1 && url[0].path === "sso-support") return {
    consumed: url
  };
  return null;
}
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
const LinkRoutes = [{
  matcher: quickLinksRoute,
  loadComponent: () => __webpack_require__.e(/*! import() */ 1161).then(__webpack_require__.bind(__webpack_require__, /*! ./quick-links/quick-links.component */ 41161)).then(m => m.QuickLinksComponent),
  canActivate: [_guards_basic_guard__WEBPACK_IMPORTED_MODULE_1__.BasicGuard],
  data: {
    config: routeConfig,
    fullScreen: true
  }
}, {
  matcher: supportRoute,
  loadComponent: () => __webpack_require__.e(/*! import() */ 9801).then(__webpack_require__.bind(__webpack_require__, /*! ./support/support.component */ 69801)).then(m => m.SupportComponent),
  canActivate: [_guards_basic_guard__WEBPACK_IMPORTED_MODULE_1__.BasicGuard],
  data: {
    config: routeConfig,
    fullScreen: true
  }
}, {
  path: "messages-exchange",
  loadComponent: () => __webpack_require__.e(/*! import() */ 5277).then(__webpack_require__.bind(__webpack_require__, /*! ./exchange-messages/exchange-messages.component */ 35277)).then(m => m.ExchangeMessagesComponent),
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  data: {
    config: routeConfig,
    fullScreen: true
  }
}, {
  matcher: url => {
    const baseIndex = url.findIndex(segments => segments.path === "user-guide");
    if (baseIndex > -1) {
      return {
        consumed: url,
        posParams: {
          type: url.length === 3 && url?.[1] || "app",
          topic: url.length === 3 && url?.[2] || "register-on-app"
        }
      };
    }
  },
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e(4580), __webpack_require__.e(1323)]).then(__webpack_require__.bind(__webpack_require__, /*! ./user-guide/user-guide.component */ 1323)).then(m => m.UserGuideComponent),
  canActivate: [_guards_basic_guard__WEBPACK_IMPORTED_MODULE_1__.BasicGuard],
  data: {
    config: routeConfig,
    fullScreen: true
  }
}, {
  path: "collateral-margin-against-shares",
  loadComponent: () => __webpack_require__.e(/*! import() */ 9713).then(__webpack_require__.bind(__webpack_require__, /*! ./pledge/pledge.component */ 69713)).then(m => m.PledgeComponent),
  canActivate: [_guards_basic_guard__WEBPACK_IMPORTED_MODULE_1__.BasicGuard],
  data: {
    config: routeConfig,
    fullScreen: true,
    preLogin: true
  }
}, {
  path: "mf-consent-page",
  loadComponent: () => __webpack_require__.e(/*! import() */ 3965).then(__webpack_require__.bind(__webpack_require__, /*! ./mf-consent-page/mf-consent-page.component */ 93965)).then(m => m.MfConsentPageComponent)
}, {
  path: "add-nominee-pop",
  loadComponent: () => __webpack_require__.e(/*! import() */ 9277).then(__webpack_require__.bind(__webpack_require__, /*! ./add-nominee/add-nominee.component */ 49277)).then(m => m.AddNomineeComponent)
}];

/***/ })

}]);