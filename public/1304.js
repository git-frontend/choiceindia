"use strict";
(self["webpackChunkjiffy_upgraded"] = self["webpackChunkjiffy_upgraded"] || []).push([[1304],{

/***/ 71304:
/*!*******************************************************!*\
  !*** ./src/app/portfolio-module/portfolio.routing.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PortfolioRoutes: () => (/* binding */ PortfolioRoutes)
/* harmony export */ });
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../guards/auth.guard */ 61620);
/* harmony import */ var _post_login_module_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../post-login-module/portfolio/portfolio.component */ 64530);
//PortfolioModule
// import { TooltipModule, BsDatepickerModule, PopoverModule } from "ngx-bootstrap";


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
const PortfolioRoutes = [{
  path: 'dashboard',
  redirectTo: 'portfolio/net-position',
  pathMatch: 'full'
}, {
  path: 'portfolio',
  redirectTo: 'portfolio/net-position',
  pathMatch: 'full'
}, {
  path: 'portfolio/net-position',
  component: _post_login_module_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_1__.PortfolioComponent,
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  data: {
    config: {
      header: true,
      footer: true,
      indices: false,
      betaFooter: false,
      ticker: true,
      watchlist: false,
      freshChat: false
    }
  }
}, {
  path: 'portfolio/holdings/:Symbol/:SegmentId/:Token/:OrderType/:ProductType/:BS/:Qty/:Price/:TriggerPrice',
  component: _post_login_module_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_1__.PortfolioComponent,
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  data: {
    config: {
      header: true,
      footer: true,
      indices: false,
      betaFooter: false,
      ticker: true,
      watchlist: false,
      freshChat: false
    }
  }
}, {
  path: 'portfolio/holdings',
  component: _post_login_module_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_1__.PortfolioComponent,
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  data: {
    config: {
      header: true,
      footer: true,
      indices: false,
      betaFooter: false,
      ticker: true,
      watchlist: false,
      freshChat: false
    }
  }
}, {
  path: 'portfolio/holdings/:encoded',
  component: _post_login_module_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_1__.PortfolioComponent,
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  data: {
    config: {
      header: true,
      footer: true,
      indices: false,
      betaFooter: false,
      ticker: true,
      watchlist: false,
      freshChat: false
    }
  }
}, {
  path: 'portfolio/mf-holdings',
  component: _post_login_module_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_1__.PortfolioComponent,
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  data: {
    config: routeConfig
  }
}];

/***/ })

}]);