(self["webpackChunkjiffy_upgraded"] = self["webpackChunkjiffy_upgraded"] || []).push([[1161],{

/***/ 41161:
/*!*******************************************************************!*\
  !*** ./src/app/links-module/quick-links/quick-links.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuickLinksComponent: () => (/* binding */ QuickLinksComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _quick_links_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quick-links.component.html?ngResource */ 68907);
/* harmony import */ var _quick_links_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quick-links.component.scss?ngResource */ 50191);
/* harmony import */ var _quick_links_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_quick_links_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 21626);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 13961);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 99172);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 5964);
/* harmony import */ var src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/utils/utils.service */ 89893);
/* harmony import */ var _services_rest_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/rest/common.service */ 18056);
/* harmony import */ var _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/seo/seo.service */ 44897);
/* harmony import */ var _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/shared-data/shared-data.service */ 46013);













/**
 * Component for Terms of use, Privacy Policy and Disclaimer
 */
let QuickLinksComponent = class QuickLinksComponent {
  /**
   * Constructor for Object Initialization
   * @param activeRoute ActivatedRoute Instance
   * @param commonService commonService Instance
   * @param location Location Instance
   * @param shared SharedDataService instance
   */
  constructor(commonService, location, shared, seo, cdr, utils, activatedRoute, router) {
    this.commonService = commonService;
    this.location = location;
    this.shared = shared;
    this.seo = seo;
    this.cdr = cdr;
    this.utils = utils;
    this.activatedRoute = activatedRoute;
    this.router = router;
    this.quickLinksJson = {};
    this.routeQueryParamsSubscription = this.activatedRoute.queryParams.subscribe(qparams => {
      if (qparams["fromApp"] && qparams["fromApp"] == "true") {
        this.shared.isClientFromApp = true;
      } else {
        this.shared.isClientFromApp = false;
      }
    });
    this.routeSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription();
  }
  /**
   * Life Cycle Hook
  */
  ngOnInit() {
    this.routeSubscription = this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.startWith)("first"), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(event => event === 'first' || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_9__.NavigationEnd)).subscribe(params => {
      let path = location.pathname;
      this.activeSegment = path.indexOf("integration") > -1 ? "integration" : path.indexOf("terms-use") > -1 ? "terms-of-use" : path.indexOf("privacy-policy") > -1 ? "privacy-policy" : path.indexOf("disclaimer") > -1 ? "disclaimer" : path.indexOf("beta-terms-and-conditions") > -1 ? "beta-terms-and-conditions" : path.indexOf("rms-policy") > -1 ? "rms-policy" : path.indexOf("offer-terms-conditions") > -1 ? "offer-terms-conditions" : path.indexOf("choice-finx-signal-terms") > -1 ? "choice-finx-signal-terms" : path.indexOf("refer-and-earn") > -1 ? "refer-and-earn" : path.indexOf("algo-trading-t-c") > -1 ? "algo-trading-t-c" : "terms-of-use";
      this.activateSegment(this.activeSegment);
    });
  }
  ngAfterViewInit() {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    // this.cdr.detach();
  }
  /**
   * Activate Tab and Fetch data if not fetched previously from CMS
   * @param segment Tab Key for which data is to be fetched
   */
  activateSegment(segment) {
    this.activeSegment = segment;
    let state = segment.indexOf("integration") > -1 ? "integration" : segment.indexOf("terms-of-use") > -1 ? "terms-use" : segment.indexOf("privacy-policy") > -1 ? "privacy-policy" : segment.indexOf("disclaimer") > -1 ? "disclaimer" : segment.indexOf("beta-terms-and-conditions") > -1 ? "beta-terms-and-conditions" : segment.indexOf("rms-policy") > -1 ? "rms-policy" : segment.indexOf("offer-terms-conditions") > -1 ? "offer-terms-conditions" : segment.indexOf("choice-finx-signal-terms") > -1 ? "choice-finx-signal-terms" : segment.indexOf("refer-and-earn") > -1 ? "refer-and-earn" : segment.indexOf("algo-trading-t-c") > -1 ? "algo-trading-t-c" : "terms-of-use";
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpParams().append("fromApp", this.shared.isClientFromApp.toString());
    if (this.shared.isClientFromApp) {
      this.location.replaceState("links/" + state, params.toString());
    } else {
      this.location.replaceState("links/" + state);
    }
    this.seo.setMeta("links/" + state);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    if (segment == "choice-finx-signal-terms" || segment == "integration") {
      // this.cdr.detectChanges();
    } else {
      if (!this.quickLinksJson[segment]) {
        this.commonService.getQuickLinksData(segment).subscribe(res => {
          if (res.response && res.response.length > 0 && res.status_code == 200) {
            this.quickLinksJson[segment] = res.response[0];
          } else {
            this.quickLinksJson[segment] = null;
            this.utils.error("Error", res.message || "Something went wrong. Please try again");
          }
          // this.cdr.detectChanges();
        }, err => {
          // this.cdr.detectChanges();
        });
      } else {
        // this.cdr.detectChanges();
      }
    }
  }
  ngOnDestroy() {
    if (this.routeQueryParamsSubscription) {
      this.routeQueryParamsSubscription.unsubscribe();
    }
    this.routeSubscription.unsubscribe();
  }
  static {
    this.ctorParameters = () => [{
      type: _services_rest_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService
    }, {
      type: _angular_common__WEBPACK_IMPORTED_MODULE_11__.Location
    }, {
      type: _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__.SharedDataService
    }, {
      type: _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_4__.SeoService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ChangeDetectorRef
    }, {
      type: src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_2__.UtilsService
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
    }];
  }
};
QuickLinksComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
  selector: "app-quick-links",
  template: _quick_links_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass],
  styles: [(_quick_links_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__metadata)("design:paramtypes", [_services_rest_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService, _angular_common__WEBPACK_IMPORTED_MODULE_11__.Location, _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__.SharedDataService, _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_4__.SeoService, _angular_core__WEBPACK_IMPORTED_MODULE_12__.ChangeDetectorRef, src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_2__.UtilsService, _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute, _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router])], QuickLinksComponent);


/***/ }),

/***/ 50191:
/*!********************************************************************************!*\
  !*** ./src/app/links-module/quick-links/quick-links.component.scss?ngResource ***!
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
.card {
  float: left;
  width: 100%;
  padding: 0;
  position: relative;
}
@media (max-width: 1024px) {
  .card {
    margin-top: 15px;
  }
}
.card .card-block {
  min-height: 300px;
}
.card .card-block h4,
.card .card-block h5 {
  font-weight: bold;
  margin-bottom: 10px;
}
@media (max-width: 991px) {
  .card .card-block .nav-tabs {
    display: -webkit-box;
  }
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
  color: #ffffff !important;
  box-shadow: 0px 3px 30px 0px rgb(179, 179, 179);
}
.card .card-block .parentHorizontalTab div.resp-tabs-container {
  float: left;
  border-top: 1px solid #ccc;
}
.card .card-block .parentHorizontalTab div.resp-tabs-container h4 {
  padding: 20px 0 10px 0;
  margin: 0 0 10px 0;
  border-bottom: 2px solid #fe595d;
}
.card .card-block .parentHorizontalTab div.resp-tabs-container p {
  text-align: justify;
  margin-bottom: 15px;
  font-size: 13px;
  line-height: 20px;
}
.card .card-block .parentHorizontalTab div.resp-tabs-container h5 {
  font-weight: bold;
  margin-bottom: 10px;
  text-decoration: underline;
}

.nav-tabs li a::after {
  content: none !important;
}

.resp-tabs-container {
  margin-top: 50px !important;
}

.integration li {
  text-align: justify;
  margin-bottom: 15px;
  font-size: 13px;
  line-height: 20px;
  color: #797979;
  font-size: 14px;
}
.integration li span {
  color: #333333;
}

h4 {
  margin-left: 10px;
}`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 68907:
/*!********************************************************************************!*\
  !*** ./src/app/links-module/quick-links/quick-links.component.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<section\r\n  [ngStyle]=\"{\r\n    'margin-top':\r\n      utils?.isMobileDevice() && shared.isClientFromApp ? '-140px' : ''\r\n  }\"\r\n  >\r\n  <div class=\"col-md-12 m-tb20\">\r\n    <div [ngClass]=\"{ card: !shared.isClientFromApp }\">\r\n      <div [ngClass]=\"{ 'card-block': !shared.isClientFromApp }\">\r\n        <img\r\n          class=\"loader\"\r\n          src=\"assets/images/loader.gif\"\r\n          [hidden]=\"!shared.isServiceHit\"\r\n          />\r\n          <div\r\n            class=\"quick-scroll\"\r\n            [hidden]=\"shared.isClientFromApp && utils?.isMobileDevice()\"\r\n            >\r\n            <ul class=\"nav nav-tabs hor_1 pull-left mb-30 wtd100 reset\">\r\n              <li\r\n                [class.active]=\"activeSegment == 'terms-of-use'\"\r\n                (click)=\"activateSegment('terms-of-use')\"\r\n                >\r\n                <a>Terms of Use</a>\r\n              </li>\r\n              <li\r\n                [class.active]=\"activeSegment == 'integration'\"\r\n                (click)=\"activateSegment('integration')\"\r\n                >\r\n                <a>Integration</a>\r\n              </li>\r\n\r\n              <li\r\n                [class.active]=\"activeSegment == 'privacy-policy'\"\r\n                (click)=\"activateSegment('privacy-policy')\"\r\n                >\r\n                <a>Privacy Policy</a>\r\n              </li>\r\n              <li\r\n                [class.active]=\"activeSegment == 'disclaimer'\"\r\n                (click)=\"activateSegment('disclaimer')\"\r\n                >\r\n                <a>Disclaimer</a>\r\n              </li>\r\n              <li\r\n                [class.active]=\"activeSegment == 'beta-terms-and-conditions'\"\r\n                (click)=\"activateSegment('beta-terms-and-conditions')\"\r\n                >\r\n                <a>Beta T&amp;C</a>\r\n              </li>\r\n              <li\r\n                [class.active]=\"activeSegment == 'rms-policy'\"\r\n                (click)=\"activateSegment('rms-policy')\"\r\n                >\r\n                <a>RMS Policy</a>\r\n              </li>\r\n              <li\r\n                [class.active]=\"activeSegment == 'offer-terms-conditions'\"\r\n                (click)=\"activateSegment('offer-terms-conditions')\"\r\n                >\r\n                <a>Offer Terms & Conditions</a>\r\n              </li>\r\n              <li\r\n                [class.active]=\"activeSegment == 'choice-finx-signal-terms'\"\r\n                (click)=\"activateSegment('choice-finx-signal-terms')\"\r\n                >\r\n                <a>Choice FinX Signal T&C</a>\r\n              </li>\r\n              <li\r\n                [class.active]=\"activeSegment == 'refer-and-earn'\"\r\n                (click)=\"activateSegment('refer-and-earn')\"\r\n                >\r\n                <a>Refer & Earn T&C</a>\r\n              </li>\r\n              <li\r\n                [class.active]=\"activeSegment == 'algo-trading-t-c'\"\r\n                (click)=\"activateSegment('algo-trading-t-c')\"\r\n                >\r\n                <a>Algo Trading T&C</a>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n          <div\r\n            class=\"mb-20 resp-tabs-container hor_1\"\r\n            [hidden]=\"activeSegment != 'terms-of-use'\"\r\n            [innerHTML]=\"quickLinksJson['terms-of-use']?.description\"\r\n          ></div>\r\n          <div\r\n            class=\"mb-20 resp-tabs-container hor_1\"\r\n            [hidden]=\"activeSegment != 'privacy-policy'\"\r\n            [innerHTML]=\"quickLinksJson['privacy-policy']?.description\"\r\n          ></div>\r\n          <div\r\n            class=\"mb-20 resp-tabs-container hor_1\"\r\n            [hidden]=\"activeSegment != 'disclaimer'\"\r\n            [innerHTML]=\"quickLinksJson?.disclaimer?.description\"\r\n          ></div>\r\n          <div\r\n            class=\"mb-20 resp-tabs-container hor_1\"\r\n            [hidden]=\"activeSegment != 'beta-terms-and-conditions'\"\r\n            [innerHTML]=\"quickLinksJson['beta-terms-and-conditions']?.description\"\r\n          ></div>\r\n          <div\r\n            class=\"mb-20 resp-tabs-container hor_1\"\r\n            [hidden]=\"activeSegment != 'rms-policy'\"\r\n            [innerHTML]=\"quickLinksJson['rms-policy']?.description\"\r\n          ></div>\r\n          <div\r\n            class=\"mb-20 resp-tabs-container hor_1\"\r\n            [hidden]=\"activeSegment != 'offer-terms-conditions'\"\r\n            [innerHTML]=\"quickLinksJson['offer-terms-conditions']?.description\"\r\n          ></div>\r\n\r\n          <div\r\n            class=\"mb-20 resp-tabs-container hor_1\"\r\n            [hidden]=\"activeSegment != 'choice-finx-signal-terms'\"\r\n            >\r\n            <h5>Terms & Conditions:</h5>\r\n            <p>\r\n              Signal is an AI Based Research Engine introduced by Choice Group to\r\n              its client, l) having registered office at Shree Shakambhari\r\n              Corporate Park, Plot No. 156, Chakrvarti Ashok Complex, J B Nagar,\r\n              Andheri East, Mumbai, Maharashtra 400099 , Maharashtra, India,\r\n              having Stock Broking SEBI Reg. No. INZ000160131 and SEBI (Research\r\n              Analysts) Reg. No. INH000000222. Choice Equity Broking Pvt Ltd is a\r\n              member of NSE, BSE, MCX, MSEL and CDSL offering flat fee online\r\n              broking and demat services. The platform is neither suspended or\r\n              debarred by any Regulatory Authorities to conduct business in India.\r\n              Signal provides automated trading strategies without any human\r\n              intervention for traders. The trades are directives based on the\r\n              research carried out by the in-house research team for more than a\r\n              decade. This was initiated after continuous testing and analysis\r\n              with a proven record of 65-70% success ratio.\r\n            </p>\r\n            <h5>The Process of Executing Transactions:</h5>\r\n            <p>\r\n              The trader/ investor has to first register himself/ herself with\r\n              Choice FinX App or web by opening an online Demat A/C . As Signal is\r\n              bundled with the Choice FinX App, it’s available for all the\r\n              existing clients of Choice FinX. The platform will enable the trader\r\n              to execute the trade by buying and selling as per the aforementioned\r\n              Terms & Conditions, rules and regulations applicable to the clients.\r\n              The link to the T&C can be viewed here:\r\n            </p>\r\n\r\n            <h5>No Solicitation to Buy/Sell</h5>\r\n            <p>\r\n              Calls that are generated on Signal are recommendations that are\r\n              subjective of traders' decisions to buy or sell. As these are\r\n              automated calls, it does not constitute to any kind of human bias.\r\n              Clients are advised to take into account certain criterias and have\r\n              at least a basic research on trading aspects. The trades provided is\r\n              to help investor grow their financial portfolio. However, Signal as\r\n              platform shall help in investments but does not solicit in every\r\n              investment we recommend to invest 5% - 10% of your capital. It is\r\n              completely the decision of the investor to act upon the invested\r\n              amount, needs and risk involved in the trade. Signal stresses upon\r\n              the fact that whichever strategy the trader follows, it is\r\n              recommended to follow that same strategy at-least for a month.\r\n              Before trading in any strategy, it is suggested to do your basic\r\n              technical analysis. Trading with additional leverages is the\r\n              discretion of the trader. There are various factors considered\r\n              before a call is recommended. Hence, Signal would let the trader\r\n              decide its risk appetite. Therefore, in every investment it would be\r\n              advised to invest 5% - 10% of your capital, follow a Stop Loss &\r\n              Target, always enter near the entry price given in Signal. Moreover,\r\n              the trader can invest an equal amount of capital in all scrips.\r\n              However, Signal does not guarantee any returns and all\r\n              recommendations are subject to market risk strictly.\r\n            </p>\r\n\r\n            <h5>Privacy Protection:</h5>\r\n            <p>\r\n              Register yourself on Signal by clicking here and fill in the\r\n              credentials. The transaction taking place in your account is\r\n              considered as your decision and hence any activity conducted through\r\n              your account would be accountable. Signal does not take any\r\n              responsibility for losses incurred by you or any other party. In\r\n              case of any losses, during your tenure with Signal done through your\r\n              account, shall be your liability. If there is any unauthorised\r\n              person dealing with your account, you would immediately intimate\r\n              Choice FinX on care&#64;choiceindia.com As the password and account is\r\n              for your transaction, Signal shall not be liable for any loss done\r\n              by you or any other party through your account. Please ensure that\r\n              the details are not shared with unknown individuals/ organisations.\r\n            </p>\r\n          </div>\r\n\r\n          <div\r\n            class=\"mb-20 resp-tabs-container hor_1\"\r\n            [hidden]=\"activeSegment != 'integration'\"\r\n            >\r\n            <h4>\r\n              <img\r\n                src=\"assets/icons/tv.webp\"\r\n                width=\"38\"\r\n                height=\"21\"\r\n                alt=\"Trading View\"\r\n                />\r\n                TradingView\r\n              </h4>\r\n              <p>\r\n                Choice has partnered with TradingView for its charting solution, a\r\n                platform which empowers traders and investors by providing\r\n                analytical tools like\r\n                <a target=\"_blank\" href=\"https://www.tradingview.com/screener/\"\r\n                  >Screener</a\r\n                  >\r\n                  and\r\n                  <a\r\n                    target=\"_blank\"\r\n                    href=\"https://www.tradingview.com/economic-calendar/\"\r\n                    >Economic Calendar</a\r\n                    >. TradingView offers a range of powerful features designed to\r\n                    assist traders and investors in analyzing financial markets and\r\n                    making informed trading decisions. Some of the notable features\r\n                    provided by TradingView include:\r\n                  </p>\r\n\r\n                  <ul class=\"integration\">\r\n                    <li>\r\n                      <span class=\"bold\"> Interactive Charts: </span> TradingView offers\r\n                      interactive and customizable charts that allow users to view\r\n                      real-time and historical market data across various asset classes.\r\n                      Users can adjust timeframes, apply technical indicators, draw\r\n                      trendlines, and add annotations for comprehensive analysis.\r\n                    </li>\r\n\r\n                    <li>\r\n                      <span class=\"bold\"> Technical Analysis Tools: </span>\r\n                      The platform provides a vast library of technical analysis tools,\r\n                      including trendlines, support and resistance levels, moving\r\n                      averages, oscillators, and more. These tools help traders identify\r\n                      patterns, trends, and potential entry or exit points.\r\n                    </li>\r\n                    <li>\r\n                      <span class=\"bold\"> Drawing Tools: </span>\r\n\r\n                      TradingView offers a wide range of drawing tools, such as lines,\r\n                      shapes, and Fibonacci retracements, to visually analyze price\r\n                      movements and identify key levels on the charts.\r\n                    </li>\r\n                    <li>\r\n                      <span class=\"bold\"> Alerts and Notifications:</span>\r\n\r\n                      Traders can set up alerts and notifications based on specific\r\n                      market conditions or price levels. This feature ensures that users\r\n                      stay updated on market movements and potential trading\r\n                      opportunities.\r\n                    </li>\r\n                    <li>\r\n                      <span class=\"bold\"> Multiple Chart Layouts:</span>\r\n                      Traders can customize and save multiple chart layouts, allowing\r\n                      them to quickly switch between different views and configurations\r\n                      based on their preferences and analysis requirements.\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n                @if (false) {\r\n                  <div\r\n                    class=\"mb-20 resp-tabs-container hor_1\"\r\n                    [hidden]=\"activeSegment != 'signal-terms-conditions'\"\r\n                    >\r\n                    <h5>Terms & Conditions:</h5>\r\n                    <p>\r\n                      Signal is an AI Based Research Engine introduced by Choice Group to\r\n                      its client, l) having registered office at Shree Shakambhari\r\n                      Corporate Park, Plot No. 156, Chakrvarti Ashok Complex, J B Nagar,\r\n                      Andheri East, Mumbai, Maharashtra 400099 , Maharashtra, India,\r\n                      having Stock Broking SEBI Reg. No. INZ000160131 and SEBI (Research\r\n                      Analysts) Reg. No. INH000000222. Choice Equity Broking Pvt Ltd is a\r\n                      member of NSE, BSE, MCX, MSEL and CDSL offering flat fee online\r\n                      broking and demat services. The platform is neither suspended or\r\n                      debarred by any Regulatory Authorities to conduct business in India.\r\n                      Signal provides automated trading strategies without any human\r\n                      intervention for traders. The trades are directives based on the\r\n                      research carried out by the in-house research team for more than a\r\n                      decade. This was initiated after continuous testing and analysis\r\n                      with a proven record of 65-70% success ratio.\r\n                    </p>\r\n                    <h5>The Process of Executing Transactions:</h5>\r\n                    <p>\r\n                      The trader/ investor has to first register himself/ herself with\r\n                      Choice FinX App or web by opening an online Demat A/C . As Signal is\r\n                      bundled with the Choice FinX App, it’s available for all the\r\n                      existing clients of Choice FinX. The platform will enable the trader\r\n                      to execute the trade by buying and selling as per the aforementioned\r\n                      Terms & Conditions, rules and regulations applicable to the clients.\r\n                      The link to the T&C can be viewed here:\r\n                    </p>\r\n                    <h5>No Solicitation to Buy/Sell</h5>\r\n                    <p>\r\n                      Calls that are generated on Signal are recommendations that are\r\n                      subjective of traders' decisions to buy or sell. As these are\r\n                      automated calls, it does not constitute to any kind of human bias.\r\n                      Clients are advised to take into account certain criterias and have\r\n                      at least a basic research on trading aspects. The trades provided is\r\n                      to help investor grow their financial portfolio. However, Signal as\r\n                      platform shall help in investments but does not solicit in every\r\n                      investment we recommend to invest 5% - 10% of your capital. It is\r\n                      completely the decision of the investor to act upon the invested\r\n                      amount, needs and risk involved in the trade. Signal stresses upon\r\n                      the fact that whichever strategy the trader follows, it is\r\n                      recommended to follow that same strategy at-least for a month.\r\n                      Before trading in any strategy, it is suggested to do your basic\r\n                      technical analysis. Trading with additional leverages is the\r\n                      discretion of the trader. There are various factors considered\r\n                      before a call is recommended. Hence, Signal would let the trader\r\n                      decide its risk appetite. Therefore, in every investment it would be\r\n                      advised to invest 5% - 10% of your capital, follow a Stop Loss &\r\n                      Target, always enter near the entry price given in Signal. Moreover,\r\n                      the trader can invest an equal amount of capital in all scrips.\r\n                      However, Signal does not guarantee any returns and all\r\n                      recommendations are subject to market risk strictly.\r\n                    </p>\r\n                    <h5>Privacy Protection:</h5>\r\n                    <p>\r\n                      Register yourself on Signal by clicking here and fill in the\r\n                      credentials. The transaction taking place in your account is\r\n                      considered as your decision and hence any activity conducted through\r\n                      your account would be accountable. Signal does not take any\r\n                      responsibility for losses incurred by you or any other party. In\r\n                      case of any losses, during your tenure with Signal done through your\r\n                      account, shall be your liability. If there is any unauthorised\r\n                      person dealing with your account, you would immediately intimate\r\n                      Choice FinX on care&#64;choiceindia.com As the password and account is\r\n                      for your transaction, Signal shall not be liable for any loss done\r\n                      by you or any other party through your account. Please ensure that\r\n                      the details are not shared with unknown individuals/ organisations.\r\n                    </p>\r\n                  </div>\r\n                }\r\n                <div\r\n                  class=\"mb-20 resp-tabs-container hor_1\"\r\n          [ngStyle]=\"{\r\n            'margin-top': shared.isClientFromApp\r\n              ? '0px !important'\r\n              : '50px !important'\r\n          }\"\r\n                  [hidden]=\"activeSegment != 'refer-and-earn'\"\r\n                  [innerHTML]=\"quickLinksJson['refer-and-earn']?.description\"\r\n                ></div>\r\n                <div\r\n                  class=\"mb-20 resp-tabs-container hor_1\"\r\n          [ngStyle]=\"{\r\n            'margin-top': shared.isClientFromApp\r\n              ? '0px !important'\r\n              : '50px !important'\r\n          }\"\r\n                  [hidden]=\"activeSegment != 'algo-trading-t-c'\"\r\n                  [innerHTML]=\"quickLinksJson['algo-trading-t-c']?.description\"\r\n                ></div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </section>\r\n";

/***/ })

}]);