(self["webpackChunkjiffy_upgraded"] = self["webpackChunkjiffy_upgraded"] || []).push([[1323],{

/***/ 1323:
/*!*****************************************************************!*\
  !*** ./src/app/links-module/user-guide/user-guide.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserGuideComponent: () => (/* binding */ UserGuideComponent)
/* harmony export */ });
/* harmony import */ var D_a_widget_jiffy_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _user_guide_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-guide.component.html?ngResource */ 86445);
/* harmony import */ var _user_guide_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-guide.component.scss?ngResource */ 10997);
/* harmony import */ var _user_guide_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_user_guide_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-bootstrap/accordion */ 14580);
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-webstorage */ 12426);
/* harmony import */ var _pipes_sanitizer_html_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pipes/sanitizer-html.pipe */ 92255);
/* harmony import */ var _services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/analytics/analytics.service */ 50213);
/* harmony import */ var _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/firestore/firestore.service */ 49125);
/* harmony import */ var _services_rest_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/rest/common.service */ 18056);
/* harmony import */ var _services_rest_pre_login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/rest/pre-login.service */ 13854);
/* harmony import */ var _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/seo/seo.service */ 44897);
/* harmony import */ var _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/utils/utils.service */ 89893);

















let UserGuideComponent = class UserGuideComponent {
  constructor(activatedRoute, location, route, guide, utils, fireStoreService, commonService, analytics, seo, storage) {
    this.activatedRoute = activatedRoute;
    this.location = location;
    this.route = route;
    this.guide = guide;
    this.utils = utils;
    this.fireStoreService = fireStoreService;
    this.commonService = commonService;
    this.analytics = analytics;
    this.seo = seo;
    this.storage = storage;
    /**
     * renders the leftmenu
     */
    this.leftMenu = [{
      "id": "register-on-app",
      "title": "Register On The App"
    }, {
      "id": "activate-account",
      "title": "Activate Your Account"
    }, {
      "id": "sign-in",
      "title": "Sign In"
    },
    // { "id": "dashboard", "title": "Dashboard" },
    {
      "id": "scrip-search",
      "title": "Scrip Search"
    }, {
      "id": "stock-watchlist",
      "title": "WatchList"
    }, {
      "id": "portfolio",
      "title": "Portfolio"
    }, {
      "id": "research",
      "title": "Research"
    }, {
      "id": "reports",
      "title": "Reports"
    },
    // { "id": "advanced-charting", "title": "Advanced Charting" },
    // { "id": "order-placement", "title": "Order Placement" },
    {
      "id": "stock-price-alert",
      "title": "Price Alerts"
    }, {
      "id": "markets",
      "title": "Markets"
    }, {
      "id": "funds",
      "title": "Funds"
    }, {
      "id": "message-hub",
      "title": "Message Hub"
    }, {
      "id": "ipo",
      "title": "IPO"
    },
    // { "id": "exchange-info", "title": "Exchange Info" },
    {
      "id": "additional-features",
      "title": "Additional Features"
    },
    // { "id": "order-book", "title": "Order Book" },
    // { "id": "notifications", "title": "Notifications" },
    {
      "id": "others",
      "title": "Others"
    }, {
      "id": "things-to-remember",
      "title": "Important Things To Remember"
    }];
    this.feedbackActive = null;
    this.positiveFeedBack = null;
    this.menu = false;
    this.updateDetails = [];
    this.showMobileVersionGuide = false;
    this.fetchingVersionGuide = false;
  }
  ngOnInit() {
    this.isDefault = false;
    this.updateGuideVersion();
    this.getUpdateList();
    this.activatedRoute.params.subscribe(params => {
      this.type = params['type'];
      this.topic = params['topic'];
      if (this.topic) {
        this.comment = '';
        this.showFeedback = true;
        this.feedbackActive = 0;
        this.getGuideContent(this.topic);
        this.seo.setMeta(this.type + '-' + this.topic);
        this.showFeedback = true;
        if (location.hash) {
          setTimeout(() => {}, 3000);
          let subHeading = location.hash.slice(1);
        }
      } else {
        this.getGuideContent('getting-started');
        this.showFeedback = true;
        this.positiveFeedBack = false;
      }
    });
  }
  ngAfterViewInit() {
    this.activatedRoute.queryParams.subscribe(query => {
      if (query?.['selection']) {
        setTimeout(() => {
          const ele = document.querySelector(query['selection']);
          this.activeContent = query['selection'].substring(1);
          if (!ele) return;
          const offset = ele.offsetTop - 100;
          scrollTo({
            top: offset,
            behavior: "smooth"
          });
          // window.getSelection().selectAllChildren(ele);
        }, 500);
      }
    });
  }
  /**
   * function to get page data
   * @param topic name of page
   */
  getGuideContent(topic) {
    this.guide.getContent(topic).subscribe(data => {
      this.content = data;
    });
  }
  scrollHandler(event) {}
  /**Toggle Responsive Menu */
  menuToggle() {
    this.menu = !this.menu;
  }
  /**
  * To scroll to particular section of same page
  * @param element page section
  */
  goToSection(element) {
    this.activeContent = element;
    this.location.replaceState("user-guide/" + this.type + "/" + this.topic + "/#" + element);
    document.querySelector('.' + element).scrollIntoView(true);
    window.scrollBy(0, -85);
  }
  /**
   * Google Analytics Fucntion
   * @param source Stores Source Name
   * @param type Stores Type of Event
   * @param tag Stores Tag Name
   */
  sendGAEvent(source, type, tag) {
    if (source && type && tag) {
      this.analytics.sendCickEvent(source, type, tag);
    }
  }
  /**
   * To go to next Section
   */
  goToNextPage(url) {
    this.route.navigate([url]);
    this.showFeedback = true;
    this.feedbackActive = 0;
    this.comment = '';
  }
  /**
   * To go to Previous Section
   */
  goToPreviousPage(url) {
    this.route.navigate([url]);
    this.feedbackActive = 0;
    this.showFeedback = true;
    this.comment = '';
  }
  /***
   * to submit user feedback ratings.
   */
  submitFeedback(value) {
    this.feedbackActive = value;
    if (value == 5) {
      this.positiveFeedBack = true;
      this.feedback(value, "");
      this.conversionAnalytics('button', 'click', 'App User Guide - Yes Button Click');
    } else {
      this.positiveFeedBack = false;
      this.showFeedback = false;
      this.conversionAnalytics('button', 'click', 'App User Guide - No Button Click');
    }
  }
  feedback(value, comment) {
    this.analytics.emitEvent('app-user-guide', 'submit', 'feedback-negative', 1);
    let userProfile = this.utils.getProfileData();
    let request = {
      "feedback": {
        "client_type": this.utils.getUserId(),
        "client_pan": userProfile.PanCard || "NA",
        "device_id": this.utils.get('deviceId') || "NA",
        "feedback_type_key": "User guide",
        "feedback_type_value": this.topic,
        "rating": value,
        "comment": comment,
        "ip_address": this.utils.get("ipAddress") || "127.0.0.1",
        "device_platform": "web",
        "mobile_no": userProfile.MobileNo || "NA",
        "device_info": {
          "browser": this.utils.getDeviceInfo()
        }
      }
    };
    this.comment = '';
    this.commonService.submitFeedbck(request).subscribe(data => {
      this.showFeedback = false;
      this.feedbackActive = null;
      this.positiveFeedBack = true;
    }, err => {
      this.utils.error('Error', 'Something Went Wrong');
      this.feedbackActive = null;
    });
  }
  conversionAnalytics(source, type, tag) {
    this.analytics.appLink(tag);
    this.sendGAEvent(source, type, tag);
  }
  updateGuideVersion() {
    this.version = this.activatedRoute.snapshot.queryParamMap.get('version');
  }
  getUpdateList() {
    var _this = this;
    return (0,D_a_widget_jiffy_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.fetchingVersionGuide = true;
      _this.updateDetails = (yield _this.fireStoreService.getUpdateGuide()) || [];
      _this.isDefault = !_this.updateDetails.some(update => update.version === _this.version);
      if (_this.version) {
        const selectedVersion = _this.isDefault ? _this.updateDetails[0] : _this.updateDetails.find(update => update.version === _this.version);
        if (!selectedVersion?.details[0]?.isFullUrl) _this.navigateGuide(selectedVersion.details[0].url, selectedVersion.version, selectedVersion.details[0].selector, selectedVersion.details[0].isFullUrl);
      }
      if (_this.version && window.innerWidth <= 800 && _this.updateDetails.length) {
        _this.openVersionGuideInMobile();
      }
      _this.fetchingVersionGuide = false;
    })();
  }
  navigateGuide(url, version, selector, isFullUrl) {
    this.closeVersionGuideInMobile();
    const queryParams = {
      version: version,
      selection: selector && decodeURIComponent(selector) || ""
    };
    this.utils.setTrackMoeEvent("clickedOn", {
      buttonName: "versionGuideLinks",
      visited: url,
      version,
      userId: this.utils.getUserId() || ""
    });
    if (isFullUrl) {
      window.open(url, '_blank');
    } else {
      this.route.navigate(["/links/user-guide/app/" + url], {
        queryParams
      });
    }
  }
  openVersionGuideInMobile(interaction = false) {
    if (interaction) {
      this.utils.setTrackMoeEvent("clickedOn", {
        buttonName: "webViewVersionGuideInMobile",
        userId: this.utils.getUserId() || ""
      });
    } else {
      this.utils.trackMoePromptEvent("AlertDialog", "versionGuideFromNotificationInMobile", "", "", {
        userId: this.utils.getUserId() || ""
      });
    }
    this.showMobileVersionGuide = true;
  }
  closeVersionGuideInMobile() {
    this.showMobileVersionGuide = false;
  }
  validateKeyPress(event) {
    const charCode = event.charCode;
    return charCode == 8 || charCode == 0 || charCode == 13 || charCode == 32 || charCode >= 48 && charCode <= 57 ||
    // 0-9
    charCode >= 65 && charCode <= 90 ||
    // A-Z
    charCode >= 97 && charCode <= 122; // a-z
  }
  static {
    this.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute
    }, {
      type: _angular_common__WEBPACK_IMPORTED_MODULE_11__.Location
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
    }, {
      type: _services_rest_pre_login_service__WEBPACK_IMPORTED_MODULE_7__.PreLoginService
    }, {
      type: _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_9__.UtilsService
    }, {
      type: _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_5__.FirestoreService
    }, {
      type: _services_rest_common_service__WEBPACK_IMPORTED_MODULE_6__.CommonService
    }, {
      type: _services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_4__.AnalyticsService
    }, {
      type: _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_8__.SeoService
    }, {
      type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_12__.LocalStorageService
    }];
  }
  static {
    this.propDecorators = {
      scrollHandler: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.HostListener,
        args: ['scroll', ['$event']]
      }]
    };
  }
};
UserGuideComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
  selector: "app-user-guide",
  template: _user_guide_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewEncapsulation.None,
  standalone: true,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgTemplateOutlet, ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_16__.AccordionModule, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe, _pipes_sanitizer_html_pipe__WEBPACK_IMPORTED_MODULE_3__.SanitizerHtmlPipe],
  providers: [_services_rest_pre_login_service__WEBPACK_IMPORTED_MODULE_7__.PreLoginService],
  styles: [(_user_guide_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute, _angular_common__WEBPACK_IMPORTED_MODULE_11__.Location, _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router, _services_rest_pre_login_service__WEBPACK_IMPORTED_MODULE_7__.PreLoginService, _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_9__.UtilsService, _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_5__.FirestoreService, _services_rest_common_service__WEBPACK_IMPORTED_MODULE_6__.CommonService, _services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_4__.AnalyticsService, _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_8__.SeoService, ngx_webstorage__WEBPACK_IMPORTED_MODULE_12__.LocalStorageService])], UserGuideComponent);


/***/ }),

/***/ 92255:
/*!**********************************************!*\
  !*** ./src/app/pipes/sanitizer-html.pipe.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SanitizerHtmlPipe: () => (/* binding */ SanitizerHtmlPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ 345);



let SanitizerHtmlPipe = class SanitizerHtmlPipe {
  constructor(sanitizer) {
    this.sanitizer = sanitizer;
  }
  transform(value) {
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }
  static {
    this.ctorParameters = () => [{
      type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__.DomSanitizer
    }];
  }
};
SanitizerHtmlPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Pipe)({
  name: 'sanitizerHtml',
  standalone: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__.DomSanitizer])], SanitizerHtmlPipe);


/***/ }),

/***/ 13854:
/*!****************************************************!*\
  !*** ./src/app/services/rest/pre-login.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PreLoginService: () => (/* binding */ PreLoginService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _api_urls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api-urls */ 26702);
/* harmony import */ var _shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared-data/shared-data.service */ 46013);
/* harmony import */ var _error_handler_jiffy_error_handler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../error-handler/jiffy-error-handler.service */ 9676);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 21626);






let PreLoginService = class PreLoginService {
  constructor(http, urls, shared, errorHandler) {
    this.http = http;
    this.urls = urls;
    this.shared = shared;
    this.errorHandler = errorHandler;
  }
  getContent(topic) {
    return this.http.get('assets/user-guide-jsons/' + topic + '.json');
  }
  static {
    this.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient
    }, {
      type: _api_urls__WEBPACK_IMPORTED_MODULE_0__.APIURLs
    }, {
      type: _shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_1__.SharedDataService
    }, {
      type: _error_handler_jiffy_error_handler_service__WEBPACK_IMPORTED_MODULE_2__.JiffyErrorHandler
    }];
  }
};
PreLoginService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)(), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient, _api_urls__WEBPACK_IMPORTED_MODULE_0__.APIURLs, _shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_1__.SharedDataService, _error_handler_jiffy_error_handler_service__WEBPACK_IMPORTED_MODULE_2__.JiffyErrorHandler])], PreLoginService);


/***/ }),

/***/ 10997:
/*!******************************************************************************!*\
  !*** ./src/app/links-module/user-guide/user-guide.component.scss?ngResource ***!
  \******************************************************************************/
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
.user-guide {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
}
@media (max-width: 767px) {
  .user-guide {
    display: block;
    padding: 0px 10px;
  }
}
.user-guide .left-menu {
  width: 20%;
  position: sticky;
  top: 80px;
  left: 0;
}
@media (max-width: 1200px) {
  .user-guide .left-menu {
    top: 60px;
  }
}
@media (max-width: 767px) {
  .user-guide .left-menu {
    width: 100%;
    position: fixed;
    left: -100%;
    top: 120px;
    bottom: 0;
    background: #ffffff;
    padding: 15px;
    overflow: auto;
    z-index: 9;
  }
  .user-guide .left-menu.show-sidenav {
    left: 0;
  }
}
.user-guide .left-menu-element {
  font-size: 13px;
  line-height: 2.2;
  font-weight: 500;
  list-style: none;
}
.user-guide .left-menu-element a {
  color: rgba(0, 0, 0, 0.87);
  text-decoration: none;
}
.user-guide .left-menu-element a:hover, .user-guide .left-menu-element a.active {
  color: #fe616e;
  color: #004393;
}
@media (max-width: 767px) {
  .user-guide .left-menu-element {
    font-size: 14px;
  }
}
.user-guide .right-menu {
  width: 20%;
  position: sticky;
  top: 80px;
  background: #f6f6f6;
  padding: 15px;
  font-weight: bold;
}
@media (max-width: 1200px) {
  .user-guide .right-menu {
    top: 60px;
  }
}
@media (max-width: 767px) {
  .user-guide .right-menu {
    width: 100%;
    position: static;
  }
}
.user-guide .right-menu ul {
  font-weight: normal;
  padding-left: 0px;
  font-size: 13px;
}
.user-guide .right-menu ul a {
  color: rgba(0, 0, 0, 0.87);
  text-decoration: none;
}
.user-guide .right-menu ul a:hover, .user-guide .right-menu ul a.active {
  color: #fe616e;
  color: #004393;
}
.user-guide .right-menu ul ul {
  padding-left: 20px;
  list-style: none;
  font-size: 12px;
}
.user-guide .md-nav__list {
  margin: 0;
  padding: 0;
  list-style: none;
}
.user-guide .md-nav__item {
  margin: 8px 0;
}
.user-guide .guide-section {
  width: 60%;
  position: sticky;
  top: 0;
  right: 0;
  padding: 0px 30px;
  line-height: 1.5;
}
.user-guide .guide-section strong {
  font-weight: 500;
}
.user-guide .guide-section hr {
  margin: 35px 0;
}
@media (max-width: 767px) {
  .user-guide .guide-section hr {
    margin: 20px 0;
  }
}
@media (max-width: 767px) {
  .user-guide .guide-section {
    width: 100%;
    position: static;
    margin: 15px 0;
    padding: 0px;
  }
}
.user-guide .guide-section ol {
  padding-left: 15px;
  margin-bottom: 15px;
}
.user-guide .guide-section ol li p:last-child {
  margin-bottom: 0;
}
.user-guide .guide-section ol li + li {
  margin-top: 8px;
}
.user-guide .guide-section ol[type="1"] {
  font-size: 18px;
  font-weight: 500;
}
@media (max-width: 1200px) {
  .user-guide .guide-section ol[type="1"] {
    font-size: 16px;
  }
}
.user-guide .guide-section ol[type=a] {
  font-size: 14px;
  font-weight: normal;
}
@media (max-width: 1200px) {
  .user-guide .guide-section ol[type=a] {
    font-size: 12px;
  }
}
.user-guide .guide-section i {
  padding: 5px;
  display: inline-block;
  vertical-align: middle;
  background: rgb(255, 191, 116);
  margin: 0 5px;
  color: #ffffff;
  background: #004393;
}
.user-guide .guide-section footer {
  margin-top: 30px;
}
.user-guide .guide-section footer .btn {
  color: #242a31;
  background-color: #ffffff;
  border-radius: 3px;
  border: 1px solid #e6ecf1;
  box-shadow: 0 3px 8px 0 rgba(116, 129, 141, 0.1);
  padding: 10px 15px;
}
.user-guide .guide-section footer .btn i {
  font-size: 21px;
  display: inline-block;
  vertical-align: middle;
  line-height: 28px;
  background: transparent;
  padding: 0;
  margin: 0;
  color: #242a31;
}
.user-guide .guide-section footer .btn.left i {
  margin-right: 10px;
}
.user-guide .guide-section footer .btn.right {
  float: right;
}
.user-guide .guide-section footer .btn.right i {
  margin-left: 10px;
}
.user-guide .guide-section footer .btn:hover {
  color: #fe616e;
  border-color: #fe616e;
  cursor: pointer;
  color: #004393;
  border-color: #004393;
}
@media (max-width: 767px) {
  .user-guide .guide-section article {
    padding-top: 25px;
    font-size: 10px;
  }
}
.user-guide .guide-section article ul {
  margin-bottom: 20px;
}
.user-guide .guide-section article em {
  font-weight: normal;
  font-size: 14px;
}
@media (max-width: 1200px) {
  .user-guide .guide-section article em {
    font-size: 12px;
  }
}
.user-guide .guide-section article p {
  line-height: 1.5;
  font-weight: normal;
  font-size: 14px;
}
@media (max-width: 1200px) {
  .user-guide .guide-section article p {
    font-size: 12px;
  }
}
.user-guide .guide-section article h3 {
  margin: 0px 0 30px;
  font-size: 32px;
  line-height: 1.4;
}
@media (max-width: 1200px) {
  .user-guide .guide-section article h3 {
    font-size: 28px;
  }
}
@media (max-width: 767px) {
  .user-guide .guide-section article h3 {
    font-size: 16px;
    position: fixed;
    top: 87px;
    left: 0;
    right: 0;
    background: #ffffff;
    padding: 8px 15px;
    border-top: 2px solid #ebebeb;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2);
    padding-left: 60px;
    z-index: 9;
  }
}
@media (max-width: 767px) {
  .user-guide .guide-section article h3 + hr {
    display: none;
  }
}
.user-guide .guide-section article h4 {
  font-size: 22px;
  line-height: 1.4;
}
@media (max-width: 1200px) {
  .user-guide .guide-section article h4 {
    font-size: 18px;
  }
}
.user-guide .guide-section article h5 {
  font-size: 18px;
  line-height: 1.4;
}
@media (max-width: 1200px) {
  .user-guide .guide-section article h5 {
    font-size: 16px;
  }
}
.user-guide .guide-section article h4,
.user-guide .guide-section article h5 {
  margin: 15px 0 15px;
}
.user-guide .guide-section article .embed-responsive {
  margin: 20px 0;
  display: block;
}
.user-guide .guide-section article img {
  margin: 20px 0px;
  display: block;
  max-width: 250px;
}
.user-guide .guide-section article table {
  width: 100% !important;
  margin-bottom: 20px;
}
.user-guide .guide-section article table td,
.user-guide .guide-section article table th {
  padding: 8px;
}
.user-guide .guide-section article table td p,
.user-guide .guide-section article table th p {
  margin-bottom: 0;
}
.user-guide .guide-section article table td ul,
.user-guide .guide-section article table th ul {
  padding-left: 20px;
  margin-bottom: 0;
}
.user-guide .guide-section article table td ul p,
.user-guide .guide-section article table th ul p {
  text-align: left;
}
.user-guide .track-element {
  color: crimson;
}
.user-guide .next-button {
  webkit-box-align: center;
  -ms-flex-align: center;
  margin: 0px;
  padding: 0px;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-self: stretch;
  align-self: stretch;
  color: #242a31;
  background-color: #ffffff;
  border-radius: 3px;
  border: 1px solid #e6ecf1;
  transition: border ease 200ms;
  box-shadow: 0 3px 8px 0 rgba(116, 129, 141, 0.1);
  text-decoration: none;
}

.feedback-wrap {
  text-align: center;
  clear: both;
  padding-top: 30px;
}
.feedback-wrap h3 {
  font-size: 24px;
  line-height: 1.5;
  font-weight: 500;
  margin: 0px !important;
  margin-bottom: 10px !important;
}
.feedback-wrap p {
  color: rgb(157, 170, 182);
  font-size: 12px;
  line-height: 1.625;
  font-weight: 400;
  margin-bottom: 0px;
}
.feedback-wrap .rating-faces {
  margin: 1.5rem 0;
  text-align: center;
  padding: 0;
}
.feedback-wrap .rating-faces .item-inner {
  transform: scale(0.7);
  width: 16.6666666667%;
  display: inline-block;
  cursor: pointer;
}
.feedback-wrap .rating-faces .item-inner .img-wrapper {
  padding: 0;
}
.feedback-wrap .rating-faces .item-inner .img-wrapper img {
  filter: grayscale(100%);
  width: 80%;
}
.feedback-wrap .rating-faces .item-inner span {
  display: block;
  text-transform: capitalize;
  font-size: 1.2rem;
  color: #666666;
  text-align: center;
  margin-top: 5px;
  font-weight: 600;
}
.feedback-wrap .rating-faces .item-inner.active {
  transform: scale(1);
}
.feedback-wrap .rating-faces .item-inner.active img {
  filter: none !important;
}
.feedback-wrap .btn-gradient {
  background-image: linear-gradient(to right, #ffc174 0%, #fe616e 100%);
  padding: 10px 25px;
  color: #ffffff;
  font-weight: bold;
  display: block;
  margin: 15px auto 0;
  border: none;
  background: #004393;
}
.feedback-wrap textarea {
  border: 1px solid #e0e0e0;
  max-width: 448px;
  outline: none;
  padding: 16px;
  resize: none;
  width: 100%;
}

/*Toggle Menu*/
.toggle-menu {
  display: none !important;
}
@media (max-width: 767px) {
  .toggle-menu {
    display: block !important;
    position: fixed;
    top: 65px;
    z-index: 99;
    left: 5px;
    background: transparent !important;
    font-size: 22px;
  }
}

.heartimg {
  display: inline-block !important;
  margin: 0 !important;
}

.toggle-menu-new {
  display: none;
  background: url('spritesheet.png') no-repeat top;
  background-color: #ffffff;
  border-right: 1px solid #ddd;
  background-position: right 10px top -27px;
}
@media (max-width: 767px) {
  .toggle-menu-new {
    display: block;
    width: 40px;
    height: 38px;
    position: fixed;
    left: 0;
    top: 89px;
    z-index: 99999;
  }
}
.toggle-menu-new.open {
  background-position: right 10px top 1px;
}

.df-center-space-bw {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.mv-1 {
  margin: 1rem 0;
}

.c-btn-primary {
  color: #004393;
}

.update-guide {
  width: 20vw;
  padding: 1rem;
  background: #f4f4f4;
  border-radius: 2rem;
  text-align: center;
}
.update-guide .update-details {
  text-align: left;
  min-width: 16rem;
  margin: 1rem 0;
}
.update-guide .update-details .fa-chevron-custom:before {
  content: "\\f054";
}
.update-guide .update-details .release-heading .release-date {
  color: #6a6a6a;
  padding: 0 1rem;
  font-size: 1rem;
}
.update-guide .update-details.panel-open .fa-chevron-custom:before {
  content: "\\f078" !important;
}

.w-auto-unset-background {
  background: unset !important;
  width: auto !important;
}

.w-auto {
  width: auto !important;
}

.pad-v-1 {
  padding: 1rem 0 !important;
}

.w-20vw {
  width: 20vw !important;
}

.guide-accordion .panel-heading {
  padding: 0;
}
.guide-accordion .panel-heading .btn-link {
  padding: 0 1rem;
  background: #ffffff;
  font-size: 1.075rem;
}
.guide-accordion .panel-collapse .panel-body {
  padding: 2rem;
}
.guide-accordion .panel-collapse .panel-body li {
  text-decoration: underline;
  -webkit-text-decoration-skip-ink: none;
          text-decoration-skip-ink: none;
  text-decoration-color: #337ab7;
}

.version-guid-heading {
  margin: 1rem 1.5rem 1.5rem;
}

.update-guide-md {
  display: none;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-between;
  border: 2px solid #ebebeb;
  background: #ffffff;
  padding: 1rem;
  border-radius: 8px;
  align-items: center;
  font-size: 1.5rem;
}
@media (max-width: 767px) {
  .update-guide-md {
    display: flex;
  }
}

.desk-guid-container {
  display: block;
}
@media (max-width: 767px) {
  .desk-guid-container {
    display: none;
  }
}

.c-bg-grey {
  background-color: #f1f1f2 !important;
}

.max-width {
  width: 100%;
}

.mr-0 {
  margin: 0 !important;
}

.pd-0 {
  padding: 0 !important;
}`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 86445:
/*!******************************************************************************!*\
  !*** ./src/app/links-module/user-guide/user-guide.component.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"user-guide\">\r\n  <span class=\"toggle-menu-new\"> &nbsp; </span>\r\n  <aside class=\"left-menu\" [ngClass]=\"menu ? 'active' : ''\">\r\n    @if (type === 'app') {\r\n      <nav>\r\n        <ul class=\"md-nav__list\" data-md-scrollfix=\"\">\r\n          @for (item of leftMenu; track item; let i = $index) {\r\n            <li\r\n              class=\"left-menu-element\"\r\n              >\r\n              <a\r\n                [routerLink]=\"['/links/user-guide/app/' + item?.id]\"\r\n                routerLinkActive=\"active\"\r\n                (click)=\"getGuideContent(item['id']); menuToggle()\"\r\n                >{{ item?.title }}</a\r\n                >\r\n              </li>\r\n            }\r\n          </ul>\r\n        </nav>\r\n      }\r\n    </aside>\r\n    <section class=\"guide-section\">\r\n      @if (type === 'web') {\r\n        <div>\r\n          <h4>Coming Soon</h4>\r\n        </div>\r\n      }\r\n      @if (updateDetails.length) {\r\n        <div class=\"update-guide-md\">\r\n          Version Details\r\n          <button (click)=\"openVersionGuideInMobile()\" class=\"btn btn-primary\">View</button>\r\n        </div>\r\n      }\r\n      @if (type === 'app') {\r\n        <div>\r\n          <i class=\"icon-Menu toggle-menu\" (click)=\"menuToggle()\"></i>\r\n          <article [innerHTML]=\"(content?.content || '') | sanitizerHtml\"></article>\r\n        </div>\r\n      }\r\n      @if (type === 'app') {\r\n        <footer>\r\n          @if (content?.actions?.prev) {\r\n            <button\r\n              class=\"btn left\"\r\n              (click)=\"goToPreviousPage(content['actions']['prev-url'])\"\r\n              >\r\n              <i class=\"icon-angle-left\"></i>{{ content?.actions?.prev }}\r\n            </button>\r\n          }\r\n          @if (content?.actions?.next) {\r\n            <button\r\n              class=\"btn right\"\r\n              (click)=\"goToNextPage(content['actions']['next-url'])\"\r\n              >\r\n              {{ content?.actions?.next }}\r\n              <i class=\"icon-angle-right\"></i>\r\n            </button>\r\n          }\r\n        </footer>\r\n      }\r\n      <!-- <a class=\"prev-button\" href=\"/ngx-datatable/features\" style=\"color: rgb(244, 124, 36); border-color: rgb(244, 124, 36); cursor: pointer;\"><div class=\"_1qaae3nu\" style=\"color: rgb(244, 124, 36);\"><svg preserveAspectRatio=\"xMidYMid meet\" height=\"1em\" width=\"1em\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\" class=\"_13gjrqj\"><g><line x1=\"19\" y1=\"12\" x2=\"5\" y2=\"12\"></line><polyline points=\"12 19 5 12 12 5\"></polyline></g></svg></div><div class=\"_y9smw1d\"><div class=\"_3egcedv\"><span class=\"_u2h5ph\">Previous</span></div><div class=\"_vjdxrk9\" style=\"color: rgb(244, 124, 36);\"><span class=\"_1o3dmghf\">Features</span></div></div></a>\r\n      <a class=\"next-button\" href=\"/ngx-datatable/installing\" style=\"color: rgb(244, 124, 36); border-color: rgb(244, 124, 36); cursor: pointer;\"><div class=\"_5ukkxis\"><div class=\"_3egcedv\"><span class=\"_u2h5ph\">Next</span></div><div class=\"_vjdxrk9\" style=\"color: rgb(244, 124, 36);\"><span class=\"_1o3dmghf\">Installing</span></div></div><div class=\"_1qaae3nu\" style=\"color: rgb(244, 124, 36);\"><svg preserveAspectRatio=\"xMidYMid meet\" height=\"1em\" width=\"1em\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"currentColor\" class=\"_13gjrqj\"><g><line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line><polyline points=\"12 5 19 12 12 19\"></polyline></g></svg></div></a> -->\r\n      @if (showFeedback && content?.content) {\r\n        <div class=\"feedback-wrap\">\r\n          <h3>Was this page helpful?</h3>\r\n          <p>Let us know how we did</p>\r\n          <div class=\"rating-faces col-sm-12\">\r\n            <!-- <div class=\"item-inner\" [class.active]=\"feedbackActive == 1\">\r\n            <a class=\"img-wrapper\">\r\n              <img src=\"assets/images/bad.svg\" (click)=\"submitFeedback(1);\">\r\n            </a>\r\n            <span> Bad</span>\r\n          </div>  -->\r\n          <div class=\"item-inner\" [class.active]=\"feedbackActive == 5\">\r\n            <a class=\"img-wrapper\">\r\n              <img src=\"assets/images/good.png\" (click)=\"submitFeedback(5)\" height=\"111\" width=\"111\" alt=\"Good\"/>\r\n            </a>\r\n            <span> Yes</span>\r\n          </div>\r\n          <div class=\"item-inner\" [class.active]=\"feedbackActive == 1\">\r\n            <a class=\"img-wrapper\">\r\n              <img src=\"assets/images/ok.png\" (click)=\"submitFeedback(1)\" height=\"111\" width=\"111\" alt=\"ok\" />\r\n            </a>\r\n            <span>No</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    }\r\n    @if (positiveFeedBack && !showFeedback) {\r\n      <div class=\"feedback-wrap\">\r\n        <h3>Thanks For Your Feedback</h3>\r\n        <p>Your Feedback Matters To Us</p>\r\n      </div>\r\n    }\r\n    @if (positiveFeedBack === false && !showFeedback) {\r\n      <div\r\n        class=\"feedback-wrap\"\r\n        >\r\n        <h4>Please Tell Us so That We Can Improve</h4>\r\n        <form #submit=\"ngForm\" (submit)=\"feedback(1, submit.value.comment)\">\r\n          <!-- <label>Comments:</label>  -->\r\n          <textarea [(ngModel)]=\"comment\" (keypress)=\"validateKeyPress($event)\" (paste)=\"(false)\" name=\"comment\"></textarea>\r\n          <button\r\n          (click)=\"\r\n            conversionAnalytics(\r\n              'button',\r\n              'click',\r\n              'App User Guide - Submit Button Click'\r\n            )\r\n          \"\r\n            [disabled]=\"!comment?.trim().length\"\r\n            class=\"btn-gradient\"\r\n            type=\"submit\"\r\n            >\r\n            Submit\r\n          </button>\r\n        </form>\r\n      </div>\r\n    }\r\n  </section>\r\n  <div class=\"right-menu w-auto-unset-background pad-v-1\">\r\n    @if (content?.subtopics?.length) {\r\n      <aside class=\"right-menu w-auto w-20vw\">\r\n        <div>\r\n          Contents\r\n          @if (type === 'app') {\r\n            <nav class=\"md-nav md-nav--secondary\">\r\n              <ul class=\"md-nav__list\" data-md-scrollfix=\"\">\r\n                <!-- <span *ngIf=\"getKeys(element)\"> -->\r\n                @for (element of content?.subtopics; track element) {\r\n                  <li class=\"md-nav__item\">\r\n                    <a\r\n                      role=\"button\"\r\n                      [id]=\"element?.url\"\r\n                      [class.active]=\"this.activeContent === element['url']\"\r\n                      (click)=\"goToSection(element['url'])\"\r\n                      class=\"md-nav__link\"\r\n                      >\r\n                      {{ element[\"title\"] }}\r\n                    </a>\r\n                    @if (element['sub-headings'].length) {\r\n                      <ul>\r\n                        @for (item of element['sub-headings']; track item) {\r\n                          <li\r\n                            class=\"md-nav__item\"\r\n                            >\r\n                            <a\r\n                              role=\"button\"\r\n                              (click)=\"goToSection(item['url'])\"\r\n                              class=\"md-nav__link\"\r\n                              [id]=\"item?.url\"\r\n                              >\r\n                              {{ item?.title }}\r\n                            </a>\r\n                          </li>\r\n                        }\r\n                      </ul>\r\n                    }\r\n                  </li>\r\n                }\r\n              </ul>\r\n            </nav>\r\n          }\r\n        </div>\r\n      </aside>\r\n    }\r\n    <div class=\"desk-guid-container\">\r\n      <ng-container [ngTemplateOutlet]=\"guidTemplate\"></ng-container>\r\n    </div>\r\n    @if (showMobileVersionGuide) {\r\n      <div class=\"dialog\">\r\n        <div class=\"dialog-content\">\r\n          <!-- <div class=\"dialog-header clearfix\">\r\n          <div class=\"col-md-12\">\r\n            <h4 class=\"popup-title\">\r\n              Please clear cache to view latest features.\r\n            </h4>\r\n          </div>\r\n        </div> -->\r\n        <ng-container [ngTemplateOutlet]=\"guidTemplate\"></ng-container>\r\n        <div class=\"dialog-footer clearfix\">\r\n          <button (click)=\"closeVersionGuideInMobile()\" class=\"btn sell\">Close</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  }\r\n  <ng-template #guidTemplate>\r\n    @if (updateDetails.length || fetchingVersionGuide) {\r\n      <aside [class.c-bg-grey]=\"showMobileVersionGuide\"\r\n        class=\"right-menu w-auto-unset-background pad-v-1\"\r\n        [class.pd-0]=\"showMobileVersionGuide\">\r\n        <accordion class=\"update-guide\" [class.mr-0]=\"showMobileVersionGuide\"\r\n          [class.max-width]=\"showMobileVersionGuide\" [closeOthers]=\"true\">\r\n          <h4 class=\"version-guid-heading\">Version details</h4>\r\n          @if (updateDetails.length) {\r\n            @for (update of updateDetails; track update; let idx = $index) {\r\n              <accordion-group class=\"update-details\" panelClass=\"guide-accordion\"\r\n                [isOpen]=\"this.isDefault ? idx === 0 : update.version === version\"\r\n                >\r\n                <div class=\"release-heading\" accordion-heading>\r\n                  <button class=\"btn btn-link btn-block clearfix\" accordion-heading type=\"button\">\r\n                    <div class=\"pull-left float-left\">What's new in {{update.version}} ?</div>\r\n                    <span class=\"float-right pull-right\"><i class=\"fa fa-chevron-custom\" aria-hidden=\"true\"></i></span>\r\n                  </button>\r\n                  <small class=\"release-date\">\r\n                    Released on {{update.releaseDate | date:'dd-M-yyyy'}}\r\n                  </small>\r\n                </div>\r\n                <ul>\r\n                  @for (detail of update?.details; track detail) {\r\n                    <li>\r\n                      <a (click)=\"navigateGuide(detail.url, update.version, detail.selector, (detail?.isFullUrl || false))\">{{detail.msg}}</a>\r\n                    </li>\r\n                  }\r\n                </ul>\r\n              </accordion-group>\r\n            }\r\n          } @else {\r\n            <div class=\"loader-wrapper-min\" id=\"loading-wrapper\">\r\n              <div class=\"circle\">\r\n                <div class=\"circle-min\"></div>\r\n              </div>\r\n            </div>\r\n          }\r\n        </accordion>\r\n      </aside>\r\n    }\r\n  </ng-template>\r\n</div>\r\n</div>\r\n";

/***/ })

}]);