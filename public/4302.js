"use strict";
(self["webpackChunkjiffy_upgraded"] = self["webpackChunkjiffy_upgraded"] || []).push([[4302],{

/***/ 94302:
/*!***********************************************!*\
  !*** ./src/app/tools-module/tools.routing.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToolsRoutes: () => (/* binding */ ToolsRoutes)
/* harmony export */ });
/* harmony import */ var _guards_basic_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../guards/basic.guard */ 72972);

const routeConfig = {
  header: true,
  footer: false,
  indices: false,
  betaFooter: false,
  ticker: false,
  watchlist: false,
  watchlistHidden: true,
  freshChat: false
};
const ToolsRoutes = [{
  path: "brokerage-calculator",
  loadComponent: () => __webpack_require__.e(/*! import() */ 6359).then(__webpack_require__.bind(__webpack_require__, /*! ./brokerage-calculator/brokerage-calculator.component */ 26359)).then(m => m.BrokerageCalculatorComponent),
  canActivate: [_guards_basic_guard__WEBPACK_IMPORTED_MODULE_0__.BasicGuard],
  data: {
    config: {
      ...routeConfig,
      betaFooter: true
    },
    fullScreen: true
  }
}, {
  path: "share-market-holidays-nse-bse",
  loadComponent: () => __webpack_require__.e(/*! import() */ 209).then(__webpack_require__.bind(__webpack_require__, /*! ./calendar/calendar.component */ 10209)).then(m => m.CalendarComponent),
  canActivate: [_guards_basic_guard__WEBPACK_IMPORTED_MODULE_0__.BasicGuard],
  data: {
    config: routeConfig,
    fullScreen: true
  }
}, {
  matcher: url => {
    if (url?.[0]?.path === "event-calendar") {
      return {
        consumed: url,
        posParams: url.length === 2 ? {
          segment: url[1]
        } : {}
      };
    }
  },
  loadComponent: () => __webpack_require__.e(/*! import() */ 3999).then(__webpack_require__.bind(__webpack_require__, /*! ./event-calendar/event-calendar.component */ 33999)).then(m => m.EventCalendarComponent),
  canActivate: [_guards_basic_guard__WEBPACK_IMPORTED_MODULE_0__.BasicGuard],
  data: {
    config: routeConfig,
    fullScreen: true
  }
}, {
  path: "margin-span-calculator",
  loadComponent: () => __webpack_require__.e(/*! import() */ 6475).then(__webpack_require__.bind(__webpack_require__, /*! ./margin-calculator/margin-calculator.component */ 36475)).then(m => m.MarginCalculatorComponent),
  canActivate: [_guards_basic_guard__WEBPACK_IMPORTED_MODULE_0__.BasicGuard],
  data: {
    config: {
      ...routeConfig,
      betaFooter: true
    },
    fullScreen: true
  }
}, {
  path: "stock-screener",
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e(4580), __webpack_require__.e(4821)]).then(__webpack_require__.bind(__webpack_require__, /*! ./stock-screener/stock-screener.component */ 74821)).then(m => m.StockScreenerComponent),
  canActivate: [_guards_basic_guard__WEBPACK_IMPORTED_MODULE_0__.BasicGuard],
  data: {
    config: routeConfig,
    fullScreen: true,
    style: ["nouislider.css"]
  }
}];

/***/ })

}]);