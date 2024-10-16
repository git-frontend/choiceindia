(self["webpackChunkjiffy_upgraded"] = self["webpackChunkjiffy_upgraded"] || []).push([[1362],{

/***/ 8367:
/*!*****************************************************************************************!*\
  !*** ./src/app/post-login-module/buy-back/applied-buyback/applied-buyback.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppliedBuybackComponent: () => (/* binding */ AppliedBuybackComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _applied_buyback_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./applied-buyback.component.html?ngResource */ 37565);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var src_app_services_cryptography_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/cryptography.service */ 67224);
/* harmony import */ var src_app_services_rest_post_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/rest/post-login.service */ 4135);
/* harmony import */ var src_app_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/shared-data/shared-data.service */ 46013);
/* harmony import */ var src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/utils/utils.service */ 89893);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 60177);









// Will inherit styles from parent
let AppliedBuybackComponent = class AppliedBuybackComponent {
  constructor(utils, crypto, rest, route, shared, router) {
    this.utils = utils;
    this.crypto = crypto;
    this.rest = rest;
    this.route = route;
    this.shared = shared;
    this.router = router;
    this.appliedBuyBackList = [];
    this.buybackListingLoader = true;
  }
  ngOnInit() {
    this.routeQueryParamsSubscription = this.route.queryParams.subscribe(qparams => {
      this.invalidSession = false;
      if (qparams["userId"] && qparams["sessionId"]) {
        try {
          this.shared.isClientFromApp = true;
          if (!document.body.classList.contains("app-buyback")) document.body.classList.add("app-buyback");
          const mainContainer = document.getElementById('main-container');
          if (mainContainer && !mainContainer.classList.contains('no-mt')) {
            document.getElementById('main-container').classList.add('no-mt');
          }
          this.appClientId = this.crypto.decryptText(decodeURIComponent(qparams["userId"]));
          this.appSessionId = this.crypto.decryptText(decodeURIComponent(qparams["sessionId"]));
          if (!this.appClientId || !this.appSessionId) throw new Error("Invalid Session");
          const isPOA = JSON.parse((qparams?.["isPOA"] || "false").trim());
          if (typeof isPOA === 'boolean' && isPOA === true) this.appPOA = true;
        } catch (error) {
          this.invalidSession = true;
        }
      }
    });
    this.trackBuybackPageVisit();
    this.getAppliedBuybackDetail();
  }
  getAppliedBuybackDetail() {
    const payload = {
      userId: this.appClientId || this.utils.getUserId() || "",
      SessionId: this.appSessionId || this.utils.getSessionId() || "",
      date: "",
      stock: "",
      isin: "",
      symbol: ""
    };
    this.buybackListingLoader = true;
    this.rest.getAppliedBuybackDetail(payload).subscribe(response => {
      if (response.Status === "Success" && response?.Response?.appliedBBResp) {
        this.appliedBuyBackList = response.Response.appliedBBResp;
      } else {
        this.appliedBuyBackList = [];
        // if (this.utils.isSessionExpired(response.Reason)) {
        //   if (this.shared.isSSO) {
        //     this.utils.sessionExpireHandling();
        //     return;
        //   }
        //   this.utils.error("Session Expired", "Please Login Again");
        //   this.utils.postFeatureCount();
        //   this.utils.clearLoginDetails();
        //   this.shared.userId = null;
        //   this.router.navigate(["auth/login"]);
        // }
      }
      this.buybackListingLoader = false;
    }, err => {
      this.appliedBuyBackList = [];
      this.buybackListingLoader = false;
    });
  }
  goToListing() {
    const appSessionDetails = this.isFromMobile ? {
      sessionId: encodeURIComponent(this.crypto.encryptText(this.appSessionId)),
      userId: encodeURIComponent(this.crypto.encryptText(this.appClientId)),
      isPOA: JSON.stringify(this.appPOA)
    } : {};
    this.router.navigate(["/client/buyback"], {
      queryParams: appSessionDetails
    });
  }
  trackBuybackPageVisit() {
    this.utils.setTrackMoeEvent("pageVisited", {
      Source: this.isFromMobile ? "App" : "Web",
      pageName: "AppliedBuyBack"
    });
  }
  get isFromMobile() {
    return this.shared.isClientFromApp;
  }
  ngOnDestroy() {
    this.routeQueryParamsSubscription.unsubscribe();
  }
  static {
    this.ctorParameters = () => [{
      type: src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_4__.UtilsService
    }, {
      type: src_app_services_cryptography_service__WEBPACK_IMPORTED_MODULE_1__.CryptographyService
    }, {
      type: src_app_services_rest_post_login_service__WEBPACK_IMPORTED_MODULE_2__.PostLoginService
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute
    }, {
      type: src_app_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__.SharedDataService
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
    }];
  }
};
AppliedBuybackComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: "app-applied-buyback",
  template: _applied_buyback_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.DecimalPipe]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_4__.UtilsService, src_app_services_cryptography_service__WEBPACK_IMPORTED_MODULE_1__.CryptographyService, src_app_services_rest_post_login_service__WEBPACK_IMPORTED_MODULE_2__.PostLoginService, _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute, src_app_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__.SharedDataService, _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router])], AppliedBuybackComponent);


/***/ }),

/***/ 71015:
/*!***************************************************************************************************!*\
  !*** ./src/app/post-login-module/buy-back/buy-back-application/buy-back-application.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BuyBackApplicationComponent: () => (/* binding */ BuyBackApplicationComponent)
/* harmony export */ });
/* harmony import */ var D_a_widget_jiffy_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _buy_back_application_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buy-back-application.component.html?ngResource */ 83469);
/* harmony import */ var _buy_back_application_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buy-back-application.component.scss?ngResource */ 71129);
/* harmony import */ var _buy_back_application_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_buy_back_application_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 13961);
/* harmony import */ var src_app_services_cryptography_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/cryptography.service */ 67224);
/* harmony import */ var src_app_services_rest_post_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/rest/post-login.service */ 4135);
/* harmony import */ var src_app_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/shared-data/shared-data.service */ 46013);
/* harmony import */ var src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/utils/utils.service */ 89893);
/* harmony import */ var _buyback_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../buyback.service */ 29787);














let BuyBackApplicationComponent = class BuyBackApplicationComponent {
  constructor(rest, router, utils, crypto, route, shared, buyBackService) {
    this.rest = rest;
    this.router = router;
    this.utils = utils;
    this.crypto = crypto;
    this.route = route;
    this.shared = shared;
    this.buyBackService = buyBackService;
    this.pageLoader = true;
    this.windowWidth = window.innerWidth;
    this.buybackQty = 1;
    const routerState = this.router?.getCurrentNavigation()?.extras?.state;
    this.buyBackDetails = routerState?.activeBuyback || null;
    this.isNonPoa = false;
    this.applyLoader = false;
    this.ltpMapper = {};
    this.componentSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subscription();
  }
  ngOnInit() {
    var _this = this;
    return (0,D_a_widget_jiffy_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.buybackParams = {
        settlementNo: _this.route.snapshot.queryParams?.settlementNo || ""
      };
      _this.routeQueryParamsSubscription = _this.route.queryParams.subscribe(qparams => {
        _this.invalidSession = false;
        if (qparams["userId"] && qparams["sessionId"]) {
          try {
            _this.shared.isClientFromApp = true;
            if (!document.body.classList.contains("app-buyback")) document.body.classList.add("app-buyback");
            const mainContainer = document.getElementById("main-container");
            if (mainContainer && !mainContainer.classList.contains("no-mt")) {
              document.getElementById("main-container").classList.add("no-mt");
            }
            _this.appClientId = _this.crypto.decryptText(decodeURIComponent(qparams["userId"]));
            _this.appSessionId = _this.crypto.decryptText(decodeURIComponent(qparams["sessionId"]));
            if (!_this.appClientId || !_this.appSessionId) throw new Error("Invalid Session");
            const isPOA = JSON.parse((qparams?.["isPOA"] || "false").trim());
            if (typeof isPOA === "boolean" && isPOA === true) _this.appPOA = true;
          } catch (error) {
            _this.invalidSession = true;
          }
        }
      });
      _this.isNonPoa = _this.isFromMobile ? _this.appPOA ? false : true : _this.utils.isDISEligible();
      _this.trackBuybackPageVisit();
      _this.componentSubscription.add(_this.getActiveBuybackDetail() || null);
      _this.componentSubscription.add(_this.buyBackService.listenBuyBackLTP(_this.ltpMapper));
    })();
  }
  getActiveBuybackDetail() {
    const payload = {
      userId: this.appClientId || this.utils.getUserId() || "",
      SessionId: this.appSessionId || this.utils.getSessionId() || "",
      settlementNo: this.buybackParams.settlementNo || 0,
      pageNo: 1,
      pageSize: 100
    };
    if (!this.buyBackDetails) {
      if (this.buybackParams.settlementNo) {
        return this.rest.getActiveBuybackList(payload).subscribe({
          next: response => {
            const foundBuybackEntry = response?.Response?.BBRes[0];
            if (response.Status === "Success" && foundBuybackEntry) {
              if (foundBuybackEntry) {
                foundBuybackEntry.RecordDate = !!foundBuybackEntry.RecordDate ? this.utils.getMomentInstance(foundBuybackEntry.RecordDate, "DD-MM-YYYY hh:mm:ss A").toDate() : "";
                foundBuybackEntry.StartDate = !!foundBuybackEntry.StartDate ? this.utils.getMomentInstance(foundBuybackEntry.StartDate, "DD-MM-YYYY hh:mm:ss A").toDate() : "";
                foundBuybackEntry.EndDate = !!foundBuybackEntry.EndDate ? this.utils.getMomentInstance(foundBuybackEntry.EndDate, "DD-MM-YYYY hh:mm:ss A").toDate() : "";
                this.buyBackDetails = foundBuybackEntry;
                this.componentSubscription.add(this.buyBackService.fetchLTP([this.buyBackDetails]));
              }
            } else {
              if (this.utils.isSessionExpired(response.Reason)) {
                if (this.shared.isSSO) {
                  // this.utils.sessionExpireHandling();
                  this.pageLoader = false;
                  return;
                }
                // this.utils.error("Session Expired", "Please Login Again");
                // this.utils.postFeatureCount();
                // this.utils.clearLoginDetails();
                // this.shared.userId = null;
                // this.router.navigate(["auth/login"]);
              }
            }
            this.pageLoader = false;
          },
          error: () => {
            this.pageLoader = false;
          }
        });
      } else {
        this.pageLoader = false;
      }
    } else {
      this.pageLoader = false;
      this.componentSubscription.add(this.buyBackService.fetchLTP([this.buyBackDetails]));
    }
  }
  applyBuybackDetails() {
    if (!this.buyBackDetails || !this.buybackFormRef.controls.quantity.value || this.applyLoader) return;
    const payload = {
      userId: this.appClientId || this.utils.getUserId() || "",
      SessionId: this.appSessionId || this.utils.getSessionId() || "",
      isin: this.buyBackDetails.Isin,
      qty: this.buybackFormRef.controls.quantity.value,
      settlementNo: this.buyBackDetails.SettlementNo,
      symbol: this.buyBackDetails.Symbol
    };
    this.applyLoader = true;
    this.trackBuyBackApplicationState();
    this.rest.applyBuyback(payload).subscribe({
      next: response => {
        this.applyLoader = false;
        if (response.Status === "Success") {
          if (response?.Response?.Status === "Applied") {
            this.utils.error("Error", "Buyback for " + this.buyBackDetails.Symbol + " is already applied!");
          } else {
            this.utils.success("Buyback application successfully applied", "Order Request For Buy back has been Submitted for " + this.buyBackDetails.Symbol);
            this.goToListing();
          }
        } else {
          if (this.utils.isSessionExpired(response.Reason)) {
            // if (this.shared.isSSO) {
            //   this.utils.sessionExpireHandling();
            //   return;
            // }
            // this.utils.error("Session Expired", "Please Login Again");
            // this.utils.postFeatureCount();
            // this.utils.clearLoginDetails();
            // this.shared.userId = null;
            // this.router.navigate(["auth/login"]);
          } else {
            this.utils.error("Error", response.Reason || "Something went wrong. Please contact support" + this.buyBackDetails.Symbol);
          }
        }
      },
      error: () => {
        this.applyLoader = false;
        this.utils.error("Error", "Something went wrong. Please contact support");
      },
      complete: () => {
        this.applyLoader = false;
      }
    });
  }
  /**
   * Prevent Decimal in Amount on Key press
   * @param event KeyPress Event
   */
  preventDecimalAndMax(event, maxLength) {
    const data = event.currentTarget.value;
    const key = event.keyCode || event.charCode;
    return data?.length >= maxLength ? false : key >= 48 && key <= 57;
  }
  submitBuyback() {
    if (!this.buyBackDetails?.FreeQty) {
      this.utils.error("Error", "Holding not available for buyback application!");
    } else {
      this.applyBuybackDetails();
    }
  }
  triggerStep(inputRefString, type) {
    const element = this[inputRefString]?.nativeElement;
    if (element) {
      const control = this.buybackFormRef.controls.quantity;
      // Inc / Dec as per element's stepper
      if (type === "inc") element.stepUp();
      if (type === "dec") element.stepDown();
      if (control) {
        control.patchValue(element.valueAsNumber);
        control.markAsDirty();
        control.markAsTouched();
      }
    }
  }
  goToListing() {
    const appSessionDetails = this.isFromMobile ? {
      sessionId: encodeURIComponent(this.crypto.encryptText(this.appSessionId)),
      userId: encodeURIComponent(this.crypto.encryptText(this.appClientId)),
      isPOA: JSON.stringify(this.appPOA)
    } : {};
    this.router.navigate(["/client/buyback"], {
      queryParams: appSessionDetails
    });
  }
  get isFromMobile() {
    return this.shared.isClientFromApp;
  }
  openDDPIWindow() {
    this.utils.openDDPIWindow({
      sessionId: this.appSessionId,
      userId: this.appClientId
    });
  }
  trackBuyBackApplicationState() {
    this.utils.setTrackMoeEvent("clickedOn", {
      buttonName: "applyBuyBack",
      Qty: this.buybackFormRef?.controls?.quantity?.value || null,
      Name: this.buyBackDetails?.Symbol || null,
      POA: !this.isNonPoa || null,
      EligibleHolding: this.buyBackDetails?.FreeQty || 0,
      Source: this.isFromMobile ? "App" : "Web",
      userId: this.appClientId || this.utils.getUserId() || ""
    });
  }
  trackBuybackPageVisit() {
    this.utils.setTrackMoeEvent("pageVisited", {
      Source: this.isFromMobile ? "App" : "Web",
      pageName: "ApplyBuyBack",
      userId: this.appClientId || this.utils.getUserId() || ""
    });
  }
  ngOnDestroy() {
    this.routeQueryParamsSubscription.unsubscribe();
    this.componentSubscription.unsubscribe();
    this.utils.unSubscribeMultitouchline([{
      SegmentId: this.buyBackDetails.Segment,
      Token: this.buyBackDetails.Token
    }]);
  }
  static {
    this.ctorParameters = () => [{
      type: src_app_services_rest_post_login_service__WEBPACK_IMPORTED_MODULE_4__.PostLoginService
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
    }, {
      type: src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_6__.UtilsService
    }, {
      type: src_app_services_cryptography_service__WEBPACK_IMPORTED_MODULE_3__.CryptographyService
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute
    }, {
      type: src_app_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__.SharedDataService
    }, {
      type: _buyback_service__WEBPACK_IMPORTED_MODULE_7__.BuyBackService
    }];
  }
  static {
    this.propDecorators = {
      quantityRef: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild,
        args: ["quantityRef"]
      }],
      buybackFormRef: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild,
        args: ["buybackForm"]
      }]
    };
  }
};
BuyBackApplicationComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: "app-buy-back-application",
  template: _buy_back_application_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  standalone: true,
  imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_13__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe],
  styles: [(_buy_back_application_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__metadata)("design:paramtypes", [src_app_services_rest_post_login_service__WEBPACK_IMPORTED_MODULE_4__.PostLoginService, _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router, src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_6__.UtilsService, src_app_services_cryptography_service__WEBPACK_IMPORTED_MODULE_3__.CryptographyService, _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute, src_app_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__.SharedDataService, _buyback_service__WEBPACK_IMPORTED_MODULE_7__.BuyBackService])], BuyBackApplicationComponent);


/***/ }),

/***/ 74759:
/*!*************************************************************************************!*\
  !*** ./src/app/post-login-module/buy-back/buy-back-list/buy-back-list.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BuyBackListComponent: () => (/* binding */ BuyBackListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _buy_back_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buy-back-list.component.html?ngResource */ 48429);
/* harmony import */ var _buy_back_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buy-back-list.component.scss?ngResource */ 36585);
/* harmony import */ var _buy_back_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_buy_back_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5964);
/* harmony import */ var src_app_services_cryptography_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/cryptography.service */ 67224);
/* harmony import */ var src_app_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/shared-data/shared-data.service */ 46013);








let BuyBackListComponent = class BuyBackListComponent {
  constructor(router, route, shared, crypto) {
    this.router = router;
    this.route = route;
    this.shared = shared;
    this.crypto = crypto;
    this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationEnd)).subscribe(val => {
      const routerSegments = this.router.parseUrl(this.router.url).root.children.primary.segments;
      this.buyBackTab = routerSegments[routerSegments.length - 1].path === "orders" ? "orders" : "open";
    });
    this.invalidSession = false;
  }
  ngOnInit() {
    this.routeQueryParamsSubscription = this.route.queryParams.subscribe(qparams => {
      this.checkParams(qparams);
    });
  }
  checkParams(qparams) {
    this.invalidSession = false;
    if (qparams['userId'] && qparams['sessionId']) {
      try {
        this.shared.isClientFromApp = true;
        if (!document.body.classList.contains("app-buyback")) document.body.classList.add("app-buyback");
        const mainContainer = document.getElementById('main-container');
        if (mainContainer && !mainContainer.classList.contains('no-mt')) {
          document.getElementById('main-container').classList.add('no-mt');
        }
        this.appClientId = this.crypto.decryptText(decodeURIComponent(qparams['userId']));
        this.appSessionId = this.crypto.decryptText(decodeURIComponent(qparams['sessionId']));
        if (!this.appClientId || !this.appSessionId) throw new Error("Invalid Session");
        const isPOA = JSON.parse((qparams?.["isPOA"] || "false").trim());
        if (typeof isPOA === 'boolean' && isPOA === true) this.appPOA = true;
      } catch (error) {
        this.invalidSession = true;
      }
    }
  }
  onTabSelection(type) {
    this.buyBackTab = type;
    this.checkParams(this.route.snapshot.queryParams);
    const appSessionDetails = this.isFromMobile ? {
      sessionId: encodeURIComponent(this.crypto.encryptText(this.appSessionId)),
      userId: encodeURIComponent(this.crypto.encryptText(this.appClientId)),
      isPOA: JSON.stringify(this.appPOA)
    } : {};
    if (type === "open") {
      return void this.router.navigate(['open'], {
        queryParams: appSessionDetails,
        relativeTo: this.route
      });
    }
    if (type === "orders") {
      return void this.router.navigate(['orders'], {
        queryParams: appSessionDetails,
        relativeTo: this.route
      });
    }
  }
  get isFromMobile() {
    return this.shared.isClientFromApp;
  }
  ngOnDestroy() {
    this.routeQueryParamsSubscription.unsubscribe();
  }
  static {
    this.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute
    }, {
      type: src_app_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__.SharedDataService
    }, {
      type: src_app_services_cryptography_service__WEBPACK_IMPORTED_MODULE_2__.CryptographyService
    }];
  }
};
BuyBackListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: "app-buy-back-list",
  template: _buy_back_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewEncapsulation.None,
  standalone: true,
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet],
  styles: [(_buy_back_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router, _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute, src_app_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__.SharedDataService, src_app_services_cryptography_service__WEBPACK_IMPORTED_MODULE_2__.CryptographyService])], BuyBackListComponent);


/***/ }),

/***/ 1362:
/*!**************************************************************!*\
  !*** ./src/app/post-login-module/buy-back/buyback.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BuyBackModule: () => (/* binding */ BuyBackModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/guards/auth.guard */ 61620);
/* harmony import */ var _applied_buyback_applied_buyback_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./applied-buyback/applied-buyback.component */ 8367);
/* harmony import */ var _buy_back_application_buy_back_application_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buy-back-application/buy-back-application.component */ 71015);
/* harmony import */ var _buy_back_list_buy_back_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buy-back-list/buy-back-list.component */ 74759);
/* harmony import */ var _buyback_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./buyback.service */ 29787);
/* harmony import */ var _open_buyback_open_buyback_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./open-buyback/open-buyback.component */ 92289);









function isMobileDevice() {
  if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/Opera Mini/i) || navigator.userAgent.match(/Windows Phone/i)) return window.innerWidth < 768 || screen.width < 768;
  return window.innerWidth < 768 || screen.width < 768;
}
const BuyBackRoutes = [{
  path: "",
  pathMatch: "full",
  redirectTo: "open"
}, {
  path: "",
  component: _buy_back_list_buy_back_list_component__WEBPACK_IMPORTED_MODULE_3__.BuyBackListComponent,
  canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  data: {
    config: {
      header: true,
      footer: isMobileDevice() ? false : true,
      indices: false,
      betaFooter: false,
      ticker: true,
      watchlist: false,
      watchlistHidden: true,
      freshChat: false
    },
    fullScreen: true
  },
  children: [{
    path: "open",
    component: _open_buyback_open_buyback_component__WEBPACK_IMPORTED_MODULE_5__.OpenBuybackComponent,
    canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
    data: {
      config: {
        header: true,
        footer: isMobileDevice() ? false : true,
        indices: false,
        betaFooter: false,
        ticker: true,
        watchlist: false,
        watchlistHidden: true,
        freshChat: false
      },
      fullScreen: true
    }
  }, {
    path: "orders",
    component: _applied_buyback_applied_buyback_component__WEBPACK_IMPORTED_MODULE_1__.AppliedBuybackComponent,
    canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
    data: {
      config: {
        header: true,
        footer: isMobileDevice() ? false : true,
        indices: false,
        betaFooter: false,
        ticker: true,
        watchlist: false,
        watchlistHidden: true,
        freshChat: false
      },
      fullScreen: true
    }
  }]
}, {
  path: "details",
  component: _buy_back_application_buy_back_application_component__WEBPACK_IMPORTED_MODULE_2__.BuyBackApplicationComponent,
  canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  data: {
    config: {
      header: true,
      footer: isMobileDevice() ? false : true,
      indices: false,
      betaFooter: false,
      ticker: true,
      watchlist: false,
      watchlistHidden: true,
      freshChat: false
    },
    fullScreen: true
  }
}];
let BuyBackModule = class BuyBackModule {};
BuyBackModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(BuyBackRoutes)],
  providers: [_buyback_service__WEBPACK_IMPORTED_MODULE_4__.BuyBackService]
})], BuyBackModule);


/***/ }),

/***/ 29787:
/*!***************************************************************!*\
  !*** ./src/app/post-login-module/buy-back/buyback.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BuyBackService: () => (/* binding */ BuyBackService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/utils/utils.service */ 89893);



let BuyBackService = class BuyBackService {
  constructor(utils) {
    this.utils = utils;
  }
  listenBuyBackLTP(ltpMapperRef) {
    return this.utils.broadcastObservable("watchlist").subscribe(data => {
      const [segment, token, LTP] = [data[0][1], data[0][7], data[0][8]];
      const priceDivisor = this.utils.getDefaultPriceDivisor(segment, token);
      ltpMapperRef[segment + "@" + token] = LTP / priceDivisor;
    });
  }
  fetchLTP(activeBuyBackList) {
    // Socket Request
    this.utils.subscribeMultitouchline(activeBuyBackList.map(entry => ({
      SegmentId: entry.Segment,
      Token: entry.Token
    })) || []);
  }
  static {
    this.ctorParameters = () => [{
      type: src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService
    }];
  }
};
BuyBackService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)(), (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService])], BuyBackService);


/***/ }),

/***/ 92289:
/*!***********************************************************************************!*\
  !*** ./src/app/post-login-module/buy-back/open-buyback/open-buyback.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OpenBuybackComponent: () => (/* binding */ OpenBuybackComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _open_buyback_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./open-buyback.component.html?ngResource */ 46967);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 13961);
/* harmony import */ var src_app_services_cryptography_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/cryptography.service */ 67224);
/* harmony import */ var src_app_services_rest_post_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/rest/post-login.service */ 4135);
/* harmony import */ var src_app_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/shared-data/shared-data.service */ 46013);
/* harmony import */ var src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/utils/utils.service */ 89893);
/* harmony import */ var _buyback_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../buyback.service */ 29787);











// Styles inherited from parent
let OpenBuybackComponent = class OpenBuybackComponent {
  constructor(utils, crypto, rest, shared, router, route, buyBackService) {
    this.utils = utils;
    this.crypto = crypto;
    this.rest = rest;
    this.shared = shared;
    this.router = router;
    this.route = route;
    this.buyBackService = buyBackService;
    this.buybackListingLoader = true;
    this.activeBuyBackList = [];
    this.helpPopupVisibility = false;
    this.invalidSession = false;
    this.componentSubscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription();
    this.ltpMapper = {};
  }
  ngOnInit() {
    this.routeQueryParamsSubscription = this.route.queryParams.subscribe(qparams => {
      if (qparams["userId"] && qparams["sessionId"]) {
        this.invalidSession = false;
        try {
          if (!document.body.classList.contains("app-buyback")) document.body.classList.add("app-buyback");
          const mainContainer = document.getElementById("main-container");
          if (mainContainer && !mainContainer.classList.contains("no-mt")) {
            document.getElementById("main-container").classList.add("no-mt");
          }
          this.shared.isClientFromApp = true;
          this.appClientId = this.crypto.decryptText(decodeURIComponent(qparams["userId"]));
          this.appSessionId = this.crypto.decryptText(decodeURIComponent(qparams["sessionId"]));
          if (!this.appClientId || !this.appSessionId) throw new Error("Invalid Session");
          const isPOA = JSON.parse((qparams?.["isPOA"] || "false").trim());
          if (typeof isPOA === "boolean" && isPOA === true) this.appPOA = true;
        } catch (error) {
          this.invalidSession = true;
        }
      }
    });
    this.trackBuybackPageVisit();
    this.componentSubscriptions.add(this.getActiveBuybackDetail());
    this.componentSubscriptions.add(this.buyBackService.listenBuyBackLTP(this.ltpMapper));
  }
  getActiveBuybackDetail() {
    const payload = {
      userId: this.appClientId || this.utils.getUserId() || "",
      SessionId: this.appSessionId || this.utils.getSessionId() || "",
      settlementNo: 0,
      pageNo: 1,
      pageSize: 100
    };
    this.buybackListingLoader = true;
    return this.rest.getActiveBuybackList(payload).subscribe({
      next: response => {
        const foundBuybackEntries = response?.Response?.BBRes;
        if (response.Status === "Success" && foundBuybackEntries) {
          if (foundBuybackEntries?.length) {
            foundBuybackEntries.forEach(foundBuybackEntry => {
              foundBuybackEntry.RecordDate = !!foundBuybackEntry.RecordDate ? this.utils.getMomentInstance(foundBuybackEntry.RecordDate, "DD-MM-YYYY hh:mm:ss A").toDate() : "";
              foundBuybackEntry.StartDate = !!foundBuybackEntry.StartDate ? this.utils.getMomentInstance(foundBuybackEntry.StartDate, "DD-MM-YYYY hh:mm:ss A").toDate() : "";
              foundBuybackEntry.EndDate = !!foundBuybackEntry.EndDate ? this.utils.getMomentInstance(foundBuybackEntry.EndDate, "DD-MM-YYYY hh:mm:ss A").toDate() : "";
            });
            this.activeBuyBackList = foundBuybackEntries;
            this.componentSubscriptions.add(this.buyBackService.fetchLTP(this.activeBuyBackList));
          }
        } else {
          this.activeBuyBackList = [];
          if (this.utils.isSessionExpired(response.Reason)) {
            if (this.shared.isSSO) {
              // this.utils.sessionExpireHandling();
              this.buybackListingLoader = false;
              return;
            }
            // this.utils.error("Session Expired", "Please Login Again");
            // this.utils.postFeatureCount();
            // this.utils.clearLoginDetails();
            // this.shared.userId = null;
            // this.router.navigate(["auth/login"]);
          }
        }
        this.buybackListingLoader = false;
      },
      error: () => {
        this.activeBuyBackList = [];
        this.buybackListingLoader = false;
      }
    });
  }
  goToBuybackDetails(activeBuyback) {
    const appSessionDetails = this.isFromMobile ? {
      sessionId: encodeURIComponent(this.crypto.encryptText(this.appSessionId)),
      userId: encodeURIComponent(this.crypto.encryptText(this.appClientId)),
      isPOA: JSON.stringify(this.appPOA)
    } : {};
    this.utils.unSubscribeMultitouchline(this.activeBuyBackList.reduce((pre, cur) => {
      if (cur.Segment !== activeBuyback.Segment && cur.Token !== activeBuyback.Token) pre.push(cur);
      return pre;
    }, []) || []);
    this.router.navigate(["/client/buyback/details"], {
      state: {
        activeBuyback
      },
      queryParams: {
        ...appSessionDetails,
        settlementNo: activeBuyback.SettlementNo
      }
    });
  }
  toggleHelpPopup(state) {
    if (state === "open") {
      document.body.style.overflow = "hidden";
      this.helpPopupVisibility = true;
      return;
    }
    if (state === "close") {
      document.body.style.overflow = "auto";
      this.helpPopupVisibility = false;
      return;
    }
  }
  trackBuybackPageVisit() {
    this.utils.setTrackMoeEvent("pageVisited", {
      Source: this.isFromMobile ? "App" : "Web",
      pageName: "OpenBuyBack"
    });
  }
  get isFromMobile() {
    return this.shared.isClientFromApp;
  }
  ngOnDestroy() {
    this.routeQueryParamsSubscription.unsubscribe();
    this.utils.unSubscribeMultitouchline(this.activeBuyBackList.map(entry => ({
      SegmentId: entry.Segment,
      Token: entry.Token
    })) || []);
  }
  static {
    this.ctorParameters = () => [{
      type: src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_4__.UtilsService
    }, {
      type: src_app_services_cryptography_service__WEBPACK_IMPORTED_MODULE_1__.CryptographyService
    }, {
      type: src_app_services_rest_post_login_service__WEBPACK_IMPORTED_MODULE_2__.PostLoginService
    }, {
      type: src_app_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__.SharedDataService
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
    }, {
      type: _buyback_service__WEBPACK_IMPORTED_MODULE_5__.BuyBackService
    }];
  }
};
OpenBuybackComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: "app-open-buyback",
  template: _open_buyback_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__metadata)("design:paramtypes", [src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_4__.UtilsService, src_app_services_cryptography_service__WEBPACK_IMPORTED_MODULE_1__.CryptographyService, src_app_services_rest_post_login_service__WEBPACK_IMPORTED_MODULE_2__.PostLoginService, src_app_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__.SharedDataService, _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router, _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute, _buyback_service__WEBPACK_IMPORTED_MODULE_5__.BuyBackService])], OpenBuybackComponent);


/***/ }),

/***/ 71129:
/*!****************************************************************************************************************!*\
  !*** ./src/app/post-login-module/buy-back/buy-back-application/buy-back-application.component.scss?ngResource ***!
  \****************************************************************************************************************/
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
.page-ttl {
  margin-top: 0;
  margin-bottom: 24px;
  font-size: 24px;
  line-height: 28px;
  font-family: "SFProText" !important;
  font-weight: 600;
}

.ttl-card {
  padding: 25px;
  display: flex;
  justify-content: space-between;
  border-radius: 8px 8px 0 0;
  align-items: center;
  margin-bottom: 0;
}
@media (max-width: 767px) {
  .ttl-card {
    padding: 12px 16px;
    margin-bottom: 0;
    border-radius: 8px;
    flex-wrap: wrap;
  }
}
.ttl-card .details-sec {
  width: 50%;
}
@media (max-width: 767px) {
  .ttl-card .details-sec {
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.0784313725);
    padding-bottom: 15px;
  }
}
.ttl-card .details-sec .lft-card {
  display: flex;
}
.ttl-card .details-sec .lft-card .logo-sm {
  width: 40px;
  height: 40px;
  border-radius: 4px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(112, 112, 112, 0.0784313725);
}
.ttl-card .details-sec .lft-card .logo-sm img {
  width: 35px;
  height: 35px;
  padding: 0;
  object-fit: contain;
  max-width: 100%;
  display: block;
}
@media (max-width: 767px) {
  .ttl-card .details-sec .lft-card .logo-sm {
    width: 37px;
    height: 37px;
  }
  .ttl-card .details-sec .lft-card .logo-sm img {
    width: 24px;
    height: 24px;
  }
}
.ttl-card .details-sec .scrip-name {
  font-size: 18px;
  font-weight: 600;
  font-family: "SFProText" !important;
  margin: 0;
  padding-bottom: 5px;
  letter-spacing: 0.19px;
}
@media (max-width: 767px) {
  .ttl-card .details-sec .scrip-name {
    font-size: 16px;
  }
}
.ttl-card .details-sec .scrip-details {
  padding-left: 12px;
}
.ttl-card .details-sec .scrip-details .scrip-ttl {
  font-size: 12px;
  font-family: "SFProText" !important;
  color: #797979;
  font-weight: 400;
  margin: 0;
  letter-spacing: 0.14px;
}
.ttl-card .details-sec .scrip-details p {
  font-size: 12px;
  margin: 0;
  letter-spacing: 0;
}
@media (max-width: 767px) {
  .ttl-card .details-sec .scrip-details p {
    font-size: 11px;
  }
}
.ttl-card .details-sec .scrip-details p span {
  font-weight: 600;
  color: #000000;
}
.ttl-card .form-sec {
  display: flex;
  align-items: flex-start;
  column-gap: 16px;
  width: 30%;
}
@media (max-width: 992px) {
  .ttl-card .form-sec {
    width: 50%;
  }
}
@media (max-width: 767px) {
  .ttl-card .form-sec {
    width: 100%;
  }
}
.ttl-card .form-sec .qty {
  width: 185px;
}
@media (max-width: 767px) {
  .ttl-card .form-sec .qty {
    width: 100%;
    margin-top: 0;
  }
}
.ttl-card .form-sec .qty .error-msg {
  color: #EE404A;
  font-size: 11px;
  line-height: 14px;
  font-family: "SF Pro Display" !important;
  font-weight: 400;
}
.ttl-card .form-sec .qty label {
  font-size: 14px;
  color: #797979;
  font-family: "SF Pro Display" !important;
  font-weight: 400;
  display: block;
}
.ttl-card .form-sec .qty .input-sec {
  position: relative;
}
.ttl-card .form-sec .qty .input-sec .inpt-field {
  width: 100%;
  border: 1px solid #D3D3D3;
  border-radius: 4px;
  outline: 0;
  box-shadow: none;
  padding: 10px;
  background: #ffffff;
  font-weight: 500;
  color: #333333;
  font-size: 13px;
  min-width: 155px;
  height: 44px;
  margin-bottom: 5px;
}
@media (max-width: 767px) {
  .ttl-card .form-sec .qty .input-sec .inpt-field {
    height: 48px;
    min-width: inherit;
    text-align: center;
    padding: 10px 25px;
  }
}
.ttl-card .form-sec .qty .input-sec .inpt-field::-webkit-outer-spin-button, .ttl-card .form-sec .qty .input-sec .inpt-field::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.ttl-card .form-sec .qty .input-sec .inpt-field::placeholder {
  color: #333333;
  opacity: 0.4;
}
.ttl-card .form-sec .qty .input-sec .inpt-field:focus {
  border: 1px solid #004393;
}
.ttl-card .form-sec .qty .input-sec .plus-min-qunt {
  display: inline-block;
  cursor: pointer;
  font-size: 16px;
  line-height: 6px;
  margin: 0;
  height: 8px;
  overflow: hidden;
  position: absolute;
  right: 10px;
}
.ttl-card .form-sec .qty .input-sec .plus-min-qunt i {
  font-size: 16px;
  color: #797979;
  line-height: 6px;
}
.ttl-card .form-sec .qty .input-sec .plus-min-qunt:hover i.enabled {
  color: #333333;
}
.ttl-card .form-sec .qty .input-sec .plus-min-qunt.incre-qunt {
  top: 10px;
}
@media (max-width: 767px) {
  .ttl-card .form-sec .qty .input-sec .plus-min-qunt.incre-qunt {
    width: 13px;
    height: 13px;
    right: inherit;
    left: 12px;
    top: 21px;
  }
  .ttl-card .form-sec .qty .input-sec .plus-min-qunt.incre-qunt::before {
    content: "-";
    font-size: 20px;
    color: #000000;
    transition: all 0.3s ease;
    display: block;
    position: absolute;
    left: 0;
    top: 0;
  }
  .ttl-card .form-sec .qty .input-sec .plus-min-qunt.incre-qunt .ico-changes-minus {
    display: none;
  }
}
.ttl-card .form-sec .qty .input-sec .plus-min-qunt.incre-qunt:hover::before {
  color: #004393;
}
.ttl-card .form-sec .qty .input-sec .plus-min-qunt.decrease-qant {
  bottom: 13px;
}
@media (max-width: 767px) {
  .ttl-card .form-sec .qty .input-sec .plus-min-qunt.decrease-qant {
    width: 15px;
    height: 15px;
    bottom: 21px;
  }
  .ttl-card .form-sec .qty .input-sec .plus-min-qunt.decrease-qant::before {
    content: "+";
    font-size: 20px;
    color: #000000;
    transition: all 0.3s ease;
    display: block;
    position: absolute;
    left: 0;
    top: 2px;
  }
  .ttl-card .form-sec .qty .input-sec .plus-min-qunt.decrease-qant .ico-changes-plus {
    display: none;
  }
}
.ttl-card .form-sec .qty .input-sec .plus-min-qunt.decrease-qant:hover::before {
  color: #004393;
}
.ttl-card .form-sec .button-sec {
  width: 50%;
  margin-top: 23px;
}
@media (max-width: 767px) {
  .ttl-card .form-sec .button-sec {
    position: fixed;
    bottom: 0;
    z-index: 1;
    left: 0;
    right: 0;
    padding: 8px 16px 16px;
    width: 100%;
    background: #ffffff;
  }
}
.ttl-card .form-sec .button-sec .btn-default {
  border-radius: 5px;
  font-family: "SF Pro Display" !important;
  font-weight: 500;
  min-width: 155px;
  width: 100%;
  height: 44px;
  font-size: 16px;
  position: relative;
  display: inline-block;
  overflow: visible !important;
}
.ttl-card .form-sec .button-sec .btn-default::after {
  display: none;
}
@media (max-width: 767px) {
  .ttl-card .form-sec .button-sec .btn-default {
    font-size: 18px;
    height: 48px;
    min-width: inherit;
  }
}
.ttl-card .form-sec .button-sec .btn-default.btn-order {
  color: #ffffff;
  background: #004393;
}
.ttl-card .form-sec .button-sec .btn-default.btn-order:disabled {
  background: rgba(0, 0, 0, 0.1607843137) !important;
  color: #ffffff !important;
}
.ttl-card .form-sec .button-sec .btn-default.btn-applied {
  background: #F1F1F1;
  border: 1px solid #D3D3D3;
  color: rgba(0, 0, 0, 0.3019607843);
}

.details-card {
  border-radius: 0 0 8px 8px;
  box-shadow: inherit;
}
@media (max-width: 992px) {
  .details-card {
    border-radius: 0 0 3px 3px;
    box-shadow: inherit;
  }
}
@media (max-width: 767px) {
  .details-card {
    border-radius: 8px;
  }
}
.details-card .flex-box {
  display: flex;
  padding: 25px;
  justify-content: space-between;
  padding-top: 50px;
}
@media (max-width: 992px) {
  .details-card .flex-box {
    padding: 12px 16px;
    flex-wrap: wrap;
    padding-top: 40px;
  }
}
@media (max-width: 767px) {
  .details-card .flex-box {
    padding-top: 12px;
  }
}
@media (max-width: 992px) {
  .details-card .flex-box .flex-item {
    width: 50%;
    margin-bottom: 16px;
  }
}
@media (max-width: 992px) and (max-width: 767px) {
  .details-card .flex-box .flex-item:nth-child(even) {
    text-align: right;
  }
}
.details-card .flex-box .flex-item .dflex {
  display: flex;
  align-items: center;
  column-gap: 4px;
}
.details-card .flex-box .flex-item h5 {
  font-size: 16px;
  color: #000;
  font-family: "SF Pro Display" !important;
  font-weight: 500;
  margin-bottom: 0;
  letter-spacing: 0;
}
@media (max-width: 992px) {
  .details-card .flex-box .flex-item h5 {
    margin-top: 5px;
  }
}
.details-card .flex-box .flex-item h6 {
  font-size: 14px;
  color: #797979;
  font-family: "SF Pro Display" !important;
  font-weight: 400;
  margin: 0;
  letter-spacing: 0;
}
@media (max-width: 992px) {
  .details-card .flex-box .flex-item h6 {
    font-size: 12px;
  }
}

.block-item-text {
  margin-bottom: 60px;
}
.block-item-text .note-details {
  margin: 0;
  font-size: 14px;
  letter-spacing: 0;
  font-family: "SFProText-Regular";
  font-weight: 400;
  line-height: 18px;
  color: #797979;
}
@media (max-width: 767px) {
  .block-item-text .note-details {
    font-size: 12px;
  }
}
.block-item-text .note-details .note {
  font-weight: 600;
  color: #333333;
}
.block-item-text .readmore {
  display: none;
}
@media (max-width: 767px) {
  .block-item-text .readmore {
    display: inline-block;
    font-size: 12px;
    letter-spacing: 0;
    font-family: "SFProText-Regular";
    color: #004393;
    font-weight: 600;
    line-height: 18px;
    margin-left: 5px;
    cursor: pointer;
  }
}
@media (max-width: 767px) {
  .block-item-text .read-more-target,
  .block-item-text .read-more-trigger_opened {
    display: none;
  }
}
.block-item-text .read-more-state:checked ~ .read-more-wrap .read-more-target,
.block-item-text .read-more-state:checked ~ .read-more-trigger_opened {
  margin: 0;
}
@media (max-width: 767px) {
  .block-item-text .read-more-state:checked ~ .read-more-wrap .read-more-target,
  .block-item-text .read-more-state:checked ~ .read-more-trigger_opened {
    display: inline;
  }
}
@media (max-width: 767px) {
  .block-item-text .read-more-state:checked ~ .read-more-trigger_closed {
    display: none;
  }
}

.toast-order-sucess {
  position: fixed;
  bottom: 0;
  right: 0;
  transition: transform 0.5s ease-in-out;
  transform: translateX(calc(100% + 30px));
  z-index: 99;
}
.toast-order-sucess.activepopup {
  transform: translateX(25%);
}
@media (max-width: 767px) {
  .toast-order-sucess.activepopup {
    transform: translateX(0);
  }
}
.toast-order-sucess .toast {
  background-color: #333333;
  border-left: 3px solid #00B16B;
  box-shadow: 4px 0px 16px 0px rgba(0, 0, 0, 0.3019607843);
  padding: 16px 10px;
  position: relative;
}
.toast-order-sucess .toast .toast-content {
  display: flex;
  column-gap: 14px;
  align-items: center;
  width: 69%;
}
@media (max-width: 767px) {
  .toast-order-sucess .toast .toast-content {
    width: 100%;
  }
}
.toast-order-sucess .toast .toast-content .bg-circle .bg-fill {
  background-color: #00B16B;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  width: 28px;
  height: 28px;
}
.toast-order-sucess .toast .toast-content .message .message-text {
  color: #ffffff;
  font-family: "SF Pro Display" !important;
  font-size: 11px;
  line-height: 14px;
}
.toast-order-sucess .toast .toast-content .message h6 {
  margin: 0;
  font-weight: 700;
}
.toast-order-sucess .toast .toast-content .message p {
  font-weight: 400;
  margin: 0;
}
@media (max-width: 767px) {
  .toast-order-sucess .toast .toast-content .message p {
    display: none;
  }
}
.toast-order-sucess .toast .toast-content .message p span {
  font-weight: 500;
}
.toast-order-sucess .toast .toast-close {
  position: absolute;
  right: 5px;
  top: 5px;
  width: 30%;
}
@media (max-width: 767px) {
  .toast-order-sucess .toast .toast-close {
    width: auto;
  }
}

.buyback-warning {
  background: #feeced;
  position: absolute;
  right: 24px;
  top: 24px;
  border-radius: 3px;
  margin: 0;
  padding: 15px;
}
.buyback-warning .text {
  padding: 0;
  margin: 0;
  text-align: center;
  font-size: 12px;
  letter-spacing: 0;
  font-family: "SF Pro Display";
  opacity: 1;
}
.buyback-warning .text .c-link {
  color: #004393;
  text-decoration: underline;
}
@media (max-width: 767px) {
  .buyback-warning {
    position: relative;
    top: inherit;
    left: initial;
    right: initial;
    margin-top: 15px;
  }
}

@media (max-width: 767px) {
  .mobile .buyback-warning {
    top: initial;
    bottom: 20px;
    position: fixed;
    left: 16px;
    right: 16px;
    z-index: 9999;
    padding: 10px;
  }
}
.mobile .back-buyback-btn {
  display: none !important;
}

.container {
  min-height: 50vh;
}

.no-data-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 6px;
  margin-top: 6px;
}

.about-buyback {
  background: #FFFFFF;
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 16px;
}
.about-buyback h3 {
  color: #333;
  font-family: "SFProText";
  font-weight: 600;
  padding-bottom: 10px;
  margin-top: 0;
  letter-spacing: 0;
  font-size: 18px;
}
.about-buyback p {
  font-size: 14px;
  line-height: 20px;
  font-family: "SFProText-Regular";
  color: #666666;
  font-weight: 400;
  margin: 0;
  opacity: 1;
}
.about-buyback .applie-steps {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.about-buyback .applie-steps .steps-itm {
  display: flex;
  width: 32%;
  flex-wrap: wrap;
  align-items: flex-start;
  position: relative;
  padding: 0 20px;
  padding-left: 0;
}
@media (max-width: 992px) {
  .about-buyback .applie-steps .steps-itm {
    width: 100%;
    margin-bottom: 40px;
  }
  .about-buyback .applie-steps .steps-itm:last-child {
    margin-bottom: 0;
  }
}
.about-buyback .applie-steps .steps-itm::before {
  content: "";
  width: 1px;
  height: 100%;
  display: block;
  position: absolute;
  left: -30px;
  top: 0;
  background: rgba(120, 120, 120, 0.231372549);
}
@media (max-width: 992px) {
  .about-buyback .applie-steps .steps-itm::before {
    width: 100%;
    height: 1px;
    left: 0;
    top: -21px;
    bottom: inherit;
  }
}
.about-buyback .applie-steps .steps-itm span {
  width: 58px;
  height: 58px;
  border-radius: 50%;
  background: #004393;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  color: #ffffff;
  font-weight: 600;
}
.about-buyback .applie-steps .steps-itm .des-cont {
  width: calc(100% - 60px);
  padding-left: 15px;
}
.about-buyback .applie-steps .steps-itm .des-cont h5 {
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 5px 0;
  letter-spacing: 0.19px;
  color: #333333;
}
.about-buyback .applie-steps .steps-itm:first-child {
  padding-left: 0;
}
.about-buyback .applie-steps .steps-itm:first-child::before {
  display: none;
}

.details-buyback-main {
  background: #fff;
  border-radius: 9px;
  position: relative;
  margin-bottom: 24px;
}
.details-buyback-main .ttl-card-form {
  position: absolute;
  top: 0;
  right: 0;
}
.details-buyback-main .ttl-card-form .form-sec {
  width: 100%;
}
@media (max-width: 767px) {
  .details-buyback-main .ttl-card-form {
    position: relative;
  }
}

.img-detail {
  max-width: 100%;
}

.details-buyback-main .back-buyback-btn {
  align-items: center;
  position: fixed;
  top: 87px;
  width: 100%;
  left: 0;
  z-index: 999999;
  display: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.161);
  background: #fff;
  padding: 12px 25px;
}
.details-buyback-main .back-buyback-btn h4 {
  font-weight: 500;
  font-size: 18px;
  margin: 0;
  padding: 2px 0 0 20px;
}
@media (max-width: 767px) {
  .details-buyback-main .back-buyback-btn {
    display: flex;
  }
}
.details-buyback-main .back-buyback-btn .back-btn {
  font-size: 24px;
  color: #000;
}
@media (max-width: 767px) {
  .details-buyback-main {
    margin-top: 50px;
  }
}

.loader {
  display: flex;
  place-content: center;
  flex-direction: column;
}
.loader .spin-loader {
  border-radius: 80%;
  display: block;
  height: 20px;
  width: 20px;
  position: relative;
  animation: spin 0.675s linear 0s infinite normal;
  background: transparent;
}
.loader .spin-loader:before, .loader .spin-loader:after {
  content: "";
  display: block;
  position: absolute;
}
.loader .spin-loader:before {
  border-radius: 0 90px 90px 0;
  height: 20px;
  width: 50%;
  top: 0;
  right: 0;
  z-index: 1;
  background: white;
  background-image: linear-gradient(transparent, white);
}
.loader .spin-loader:after {
  border-radius: 80%;
  height: 14px;
  width: 14px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  background: #004393;
}

.no-buyback-sec {
  min-height: calc(100vh - 100px);
  position: relative;
}
.no-buyback-sec .no-order-wrapper {
  background: #fff;
  overflow: hidden;
  border-radius: 8px;
  border: 1px solid #efeff3;
  text-align: center;
  padding: 48px;
  margin: 24px 0;
}
@media (max-width: 767px) {
  .no-buyback-sec .no-order-wrapper {
    border: 0;
    padding: 20px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 290px;
    margin: 0;
    text-align: center;
  }
}

.invalid-session {
  font-size: 1.5rem;
  color: red;
}

.width-auto {
  width: unset !important;
}`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 36585:
/*!**************************************************************************************************!*\
  !*** ./src/app/post-login-module/buy-back/buy-back-list/buy-back-list.component.scss?ngResource ***!
  \**************************************************************************************************/
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
.buyback-listing .listing-card {
  background: #efeff3;
  min-height: calc(100vh - 100px);
  position: relative;
}
@media (max-width: 767px) {
  .buyback-listing .listing-card {
    margin-top: 50px;
  }
}
.buyback-listing .listing-card .tab-wrap {
  background: #fff;
  padding: 20px 25px 0 0;
  border-radius: 4px 4px 0 0;
  top: 110px;
  z-index: 9;
}
.buyback-listing .listing-card .tab-wrap .ttl-ns h3 {
  color: #333;
  line-height: 29px;
  font-family: "SF Pro Display";
  font-weight: 700;
  margin: 0;
  padding-left: 25px;
  padding-bottom: 10px;
  letter-spacing: 0.29px;
}
@media (max-width: 767px) {
  .buyback-listing .listing-card .tab-wrap .ttl-ns h3 {
    font-size: 20px;
  }
}
.buyback-listing .listing-card .tab-wrap .tab-wrap-inner > .nav-tabs {
  border: 0;
  display: flex;
}
.buyback-listing .listing-card .tab-wrap .tab-wrap-inner > .nav-tabs > li {
  float: none;
  width: 16%;
}
.buyback-listing .listing-card .tab-wrap .tab-wrap-inner > .nav-tabs > li a {
  padding: 18px !important;
  color: #797979;
  text-align: center;
  font-size: 16px;
  line-height: 19px;
  font-family: "SF Pro Display";
  text-transform: capitalize;
  background: transparent;
  border: 0;
  outline: none;
  letter-spacing: 0;
  font-weight: 600;
}
.buyback-listing .listing-card .tab-wrap .tab-wrap-inner > .nav-tabs > li a.active {
  color: #004393 !important;
  border-bottom: 2px solid #004393;
}
@media (max-width: 767px) {
  .buyback-listing .listing-card .tab-wrap .tab-wrap-inner > .nav-tabs > li {
    width: auto;
    flex: 1;
    display: none;
  }
}
@media (max-width: 767px) {
  .buyback-listing .listing-card .tab-wrap .tab-wrap-inner > .nav-tabs > li.nav-item-mobile {
    position: fixed;
    display: block;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 100%;
    background: #fff;
    padding: 16px;
    z-index: 99;
  }
  .buyback-listing .listing-card .tab-wrap .tab-wrap-inner > .nav-tabs > li.nav-item-mobile a {
    color: #004393;
    border: 1px solid #004393;
    border-radius: 8px;
    font-size: 18px;
    padding: 14px 18px !important;
    background: rgba(0, 67, 147, 0.0588235294);
  }
}
@media (max-width: 767px) {
  .buyback-listing .listing-card .tab-wrap {
    position: fixed;
    left: 0;
    border-top: 2px solid rgba(0, 0, 0, 0.161);
    border-radius: 0;
    top: 87px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.161);
    width: 100%;
    padding: 20px 0 0;
  }
}
.buyback-listing .listing-card .tab-content .data-list {
  margin: 20px 0;
}
.buyback-listing .listing-card .tab-content .data-list h5 {
  color: #333;
  font-family: "SF Pro Display";
  font-weight: 600;
  padding-bottom: 20px;
  letter-spacing: 0.19px;
  font-size: 16px;
}
.buyback-listing .listing-card .tab-content .data-list h5.mn-ttln {
  margin-bottom: 0;
  margin-top: 25px;
}
.buyback-listing .listing-card .tab-content .data-list h4 {
  color: #333;
  font-weight: 600;
  letter-spacing: 0.29px;
}
.buyback-listing .listing-card .tab-content .data-list .data-list-cont {
  background: #fff;
  overflow: hidden;
  border-radius: 8px;
  border: 1px solid #EEEEEE;
  margin-bottom: 25px;
  position: relative;
}
.buyback-listing .listing-card .tab-content .data-list .data-list-cont.listing:hover {
  border: 1px solid #004393;
  cursor: pointer;
}
.buyback-listing .listing-card .tab-content .data-list .data-list-cont .top-rr {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  padding: 24px 24px;
  justify-content: space-between;
}
.buyback-listing .listing-card .tab-content .data-list .data-list-cont .top-rr .script-details {
  display: flex;
  align-items: center;
}
@media (max-width: 1024px) {
  .buyback-listing .listing-card .tab-content .data-list .data-list-cont .top-rr .script-details {
    width: 100%;
    margin-bottom: 24px;
  }
}
.buyback-listing .listing-card .tab-content .data-list .data-list-cont .top-rr .script-details .logo-sec .comp-logo {
  width: 40px;
  height: 40px;
  border-radius: 4px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(112, 112, 112, 0.0784313725);
}
.buyback-listing .listing-card .tab-content .data-list .data-list-cont .top-rr .script-details .logo-sec .comp-logo img {
  width: 35px;
  height: 33px;
  padding: 0;
  object-fit: contain;
  max-width: 100%;
}
@media (max-width: 767px) {
  .buyback-listing .listing-card .tab-content .data-list .data-list-cont .top-rr .script-details .logo-sec .comp-logo {
    width: 37px;
    height: 37px;
  }
}
.buyback-listing .listing-card .tab-content .data-list .data-list-cont .top-rr .script-details .comp-des {
  padding-left: 16px;
}
@media (max-width: 767px) {
  .buyback-listing .listing-card .tab-content .data-list .data-list-cont .top-rr .script-details .comp-des {
    width: calc(100% - 40px);
    padding-left: 12px;
  }
}
.buyback-listing .listing-card .tab-content .data-list .data-list-cont .top-rr .script-details .comp-des h4 {
  margin: 0;
  padding-bottom: 5px;
  font-size: 18px;
  font-weight: 700;
  font-family: "SFProText";
  letter-spacing: 0;
}
@media (max-width: 767px) {
  .buyback-listing .listing-card .tab-content .data-list .data-list-cont .top-rr .script-details .comp-des h4 {
    font-size: 16px;
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
  }
}
.buyback-listing .listing-card .tab-content .data-list .data-list-cont .top-rr .script-details .comp-des h6 {
  margin: 0;
  color: #797979;
  font-size: 12px;
}
@media (max-width: 767px) {
  .buyback-listing .listing-card .tab-content .data-list .data-list-cont .top-rr {
    padding: 16px;
    padding-top: 50px;
  }
}
.buyback-listing .listing-card .tab-content .data-list .data-list-cont .top-rr .validation-wrapper {
  padding-top: 16px;
  width: 100%;
}
.buyback-listing .listing-card .tab-content .data-list .data-list-cont .top-rr .validation-wrapper .validate-card {
  border-radius: 4px;
  padding: 14px 16px;
  position: relative;
}
.buyback-listing .listing-card .tab-content .data-list .data-list-cont .top-rr .validation-wrapper .validate-card::before {
  content: "";
  position: absolute;
  left: 0;
  width: 3px;
  height: 60%;
  border-radius: 0 4px 4px 0;
  top: 50%;
  transform: translateY(-50%);
}
.buyback-listing .listing-card .tab-content .data-list .data-list-cont .top-rr .validation-wrapper .validate-card.rejected {
  background: rgba(238, 64, 74, 0.078);
}
.buyback-listing .listing-card .tab-content .data-list .data-list-cont .top-rr .validation-wrapper .validate-card.rejected::before {
  background: #ee404a;
}
.buyback-listing .listing-card .tab-content .data-list .data-list-cont .top-rr .validation-wrapper .validate-card.requested {
  background: rgba(248, 187, 53, 0.08);
}
.buyback-listing .listing-card .tab-content .data-list .data-list-cont .top-rr .validation-wrapper .validate-card.requested::before {
  background: #F8BB35;
}
.buyback-listing .listing-card .tab-content .data-list .data-list-cont .top-rr .validation-wrapper .validate-card.applied {
  background: rgba(0, 67, 146, 0.08);
}
.buyback-listing .listing-card .tab-content .data-list .data-list-cont .top-rr .validation-wrapper .validate-card.applied::before {
  background: #004392;
}
.buyback-listing .listing-card .tab-content .data-list .data-list-cont .top-rr .validation-wrapper .validate-card span {
  font-size: 16px;
  font-family: "SF Pro Display";
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0;
  color: #333333;
}
.buyback-listing .listing-card .tab-content .data-list .data-list-cont .details-rr {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0;
  position: relative;
  flex-wrap: wrap;
  column-gap: 70px;
}
.buyback-listing .listing-card .tab-content .data-list .data-list-cont .details-rr .col-des {
  position: relative;
  width: auto;
}
.buyback-listing .listing-card .tab-content .data-list .data-list-cont .details-rr .col-des h6 {
  color: #797979;
  margin-top: 0;
  font-family: "SF Pro Display";
  font-size: 14px;
  letter-spacing: 0;
  font-weight: 400;
}
@media (max-width: 767px) {
  .buyback-listing .listing-card .tab-content .data-list .data-list-cont .details-rr .col-des h6.none-mob {
    display: none;
  }
}
@media (max-width: 767px) {
  .buyback-listing .listing-card .tab-content .data-list .data-list-cont .details-rr .col-des h6 {
    font-size: 12px;
  }
}
.buyback-listing .listing-card .tab-content .data-list .data-list-cont .details-rr .col-des h5 {
  padding-bottom: 0;
  margin: 0;
  letter-spacing: 0;
}
@media (max-width: 767px) {
  .buyback-listing .listing-card .tab-content .data-list .data-list-cont .details-rr .col-des h5.box-mob {
    border: 1px solid rgba(0, 67, 147, 0.078);
    border-radius: 10px;
    border-radius: 2px;
    padding: 4px 8px;
    background: #fff;
    z-index: 1;
    position: relative;
    color: #004393;
    font-size: 12px;
    font-weight: 500;
  }
}
@media (max-width: 767px) {
  .buyback-listing .listing-card .tab-content .data-list .data-list-cont .details-rr .col-des.date-sm {
    position: absolute;
    top: -97px;
    left: 0;
  }
}
.buyback-listing .listing-card .tab-content .data-list .data-list-cont .details-rr .order-status {
  font-size: 12px;
  color: #093;
  background: rgba(0, 153, 51, 0.102);
  font-family: "SF Pro Display";
  border-radius: 2px;
  letter-spacing: 0;
  font-weight: 400;
  min-width: 75px;
  text-align: center;
  padding: 4px 8px;
}
.buyback-listing .listing-card .tab-content .data-list .data-list-cont .details-rr .order-status.requested {
  color: #F8BB35;
  background: rgba(248, 187, 53, 0.1019607843);
}
.buyback-listing .listing-card .tab-content .data-list .data-list-cont .details-rr .order-status.applied {
  color: #004392;
  background: rgba(0, 67, 146, 0.1019607843);
}
.buyback-listing .listing-card .tab-content .data-list .data-list-cont .details-rr .order-status.rejected {
  color: #EE404A;
  background: rgba(238, 64, 74, 0.1019607843);
}
@media (max-width: 1024px) {
  .buyback-listing .listing-card .tab-content .data-list .data-list-cont .details-rr {
    width: 100%;
    column-gap: 0;
  }
}
.buyback-listing .listing-card .tab-content .data-list .data-list-cont .btn-res .btn-aply {
  min-width: 175px;
  text-align: center;
}
@media (max-width: 767px) {
  .buyback-listing .listing-card .tab-content .data-list .data-list-cont .btn-res .btn-aply {
    min-width: 110px;
  }
}
.buyback-listing .listing-card .tab-content #my-order .loader-wrapper-min-2 {
  z-index: 99999999;
}
@media (max-width: 767px) {
  .buyback-listing .listing-card .tab-content #my-order {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    background: #fff;
    z-index: 999999999;
    left: 0;
  }
  .buyback-listing .listing-card .tab-content #my-order .data-prnt {
    margin: 0;
    padding: 0;
    background: #efeff3;
    height: 100vh;
    overflow: auto;
  }
  .buyback-listing .listing-card .tab-content #my-order .data-prnt .data-list {
    padding: 0 16px;
  }
  .buyback-listing .listing-card .tab-content #my-order .data-prnt .data-list-cont .top-rr {
    padding-top: 16px;
  }
  .buyback-listing .listing-card .tab-content #my-order .data-prnt .data-list-cont .top-rr .script-details {
    width: calc(100% - 80px);
  }
  .buyback-listing .listing-card .tab-content #my-order .data-prnt .data-list-cont .top-rr .details-rr {
    position: static;
  }
  .buyback-listing .listing-card .tab-content #my-order .data-prnt .data-list-cont .top-rr .details-rr .order-status {
    position: absolute;
    right: 10px;
    top: 10px;
  }
}
.buyback-listing.mobile .back-buyback-btn {
  display: none !important;
}
@media (max-width: 767px) {
  .buyback-listing {
    margin-bottom: 6rem;
  }
}

@media (max-width: 767px) {
  .detail-shadow.shadow-active {
    width: 100%;
    height: 100%;
    background: #333333;
    position: fixed;
    z-index: 99999999;
    left: 0;
    top: 0;
    display: block;
    opacity: 0.5;
  }
}

.open-details-mob .about-buyback {
  background: #FFFFFF;
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 16px;
}
@media (max-width: 767px) {
  .open-details-mob .about-buyback {
    border-bottom: 1px solid #E5E5E5;
    border-radius: 0;
    padding: 25px 16px;
    margin: 0;
  }
}
.open-details-mob .about-buyback h3 {
  color: #333;
  font-family: SFProText;
  font-weight: 600;
  padding-bottom: 10px;
  margin-top: 0;
  letter-spacing: 0;
  font-size: 18px;
}
@media (max-width: 767px) {
  .open-details-mob .about-buyback h3 {
    padding-bottom: 0;
  }
}
.open-details-mob .about-buyback p {
  font-size: 14px;
  line-height: 20px;
  font-family: "SF Pro Display";
  letter-spacing: 0;
  color: #666666;
  font-weight: 400;
  margin: 0;
  opacity: 1;
}
@media (max-width: 767px) {
  .open-details-mob .about-buyback p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
}
.open-details-mob .about-buyback .applie-steps {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.open-details-mob .about-buyback .applie-steps .steps-itm {
  display: flex;
  width: 32%;
  flex-wrap: wrap;
  align-items: flex-start;
  position: relative;
  padding: 0 20px;
  padding-left: 0;
}
@media (max-width: 992px) {
  .open-details-mob .about-buyback .applie-steps .steps-itm {
    width: 100%;
    margin-bottom: 40px;
  }
  .open-details-mob .about-buyback .applie-steps .steps-itm:last-child {
    margin-bottom: 0;
  }
}
.open-details-mob .about-buyback .applie-steps .steps-itm::before {
  content: "";
  width: 1px;
  height: 100%;
  display: block;
  position: absolute;
  left: -30px;
  top: 0;
  background: #787878;
}
@media (max-width: 992px) {
  .open-details-mob .about-buyback .applie-steps .steps-itm::before {
    width: 100%;
    height: 1px;
    left: 0;
    top: -21px;
    bottom: inherit;
  }
}
.open-details-mob .about-buyback .applie-steps .steps-itm span {
  width: 58px;
  height: 58px;
  border-radius: 50%;
  background: #004393;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  color: #ffffff;
}
@media (max-width: 767px) {
  .open-details-mob .about-buyback .applie-steps .steps-itm span {
    display: none;
  }
}
.open-details-mob .about-buyback .applie-steps .steps-itm .des-cont {
  width: calc(100% - 60px);
  padding-left: 15px;
}
.open-details-mob .about-buyback .applie-steps .steps-itm .des-cont h5 {
  font-size: 16px;
  margin: 0 0 5px 0;
  letter-spacing: 0;
  color: #333333;
}
@media (max-width: 767px) {
  .open-details-mob .about-buyback .applie-steps .steps-itm .des-cont {
    padding-left: 0;
    width: 100%;
  }
}
.open-details-mob .about-buyback .applie-steps .steps-itm .des-cont p {
  position: relative;
}
@media (max-width: 767px) {
  .open-details-mob .about-buyback .applie-steps .steps-itm .des-cont p {
    padding-left: 20px;
  }
  .open-details-mob .about-buyback .applie-steps .steps-itm .des-cont p::before {
    content: "";
    width: 3px;
    height: 3px;
    display: block;
    background: #333333;
    position: absolute;
    left: 7px;
    top: 7px;
    display: block;
  }
}
.open-details-mob .about-buyback .applie-steps .steps-itm:first-child {
  padding-left: 0;
}
.open-details-mob .about-buyback .applie-steps .steps-itm:first-child::before {
  display: none;
}
@media (max-width: 767px) {
  .open-details-mob {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background: #fff;
    z-index: 99999999;
    border-radius: 16px 16px 0 0;
    overflow: hidden;
    transition-duration: 0.6s;
    transform: translateY(100%);
  }
  .open-details-mob.details-mob-active {
    transform: translateY(0);
  }
}
.open-details-mob .btn-close {
  position: absolute;
  right: 20px;
  top: 20px;
  font-size: 20px;
  color: #797979;
  cursor: pointer;
  display: none;
}
@media (max-width: 767px) {
  .open-details-mob .btn-close {
    display: block;
  }
}

.need-help-btn {
  border: 1px solid #EEEEEE;
  font-size: 16px;
  color: #333333;
  display: flex;
  align-items: center;
  column-gap: 16px;
  padding: 12px 16px;
  border-radius: 8px;
  background: #ffffff;
  font-family: "SFProText";
  letter-spacing: 0;
  position: relative;
  display: none;
}
.need-help-btn::before {
  content: "\\f105";
  font-family: FontAwesome, sans-serif;
  font-style: normal;
  font-weight: normal;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: absolute;
  right: 15px;
  top: 10px;
  color: #999999;
  font-size: 24px;
}
@media (max-width: 767px) {
  .need-help-btn {
    display: flex;
    margin-bottom: 20px;
  }
}

.back-buyback-btn {
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  left: 0;
  z-index: 999999;
  display: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.161);
  background: #fff;
  padding: 12px 25px;
}
.back-buyback-btn h4 {
  font-weight: 500;
  font-size: 18px;
  margin: 0;
  padding: 2px 0 0 20px;
}
@media (max-width: 767px) {
  .back-buyback-btn {
    display: flex;
    align-items: center;
    position: relative;
    z-index: 99;
  }
}
.back-buyback-btn .back-btn {
  font-size: 24px;
  color: #000;
}

.no-buyback-sec .no-order-wrapper {
  background: #fff;
  overflow: hidden;
  border-radius: 8px;
  border: 1px solid #efeff3;
  text-align: center;
  padding: 48px;
  margin: 24px 0;
}
@media (max-width: 767px) {
  .no-buyback-sec .no-order-wrapper {
    border: 0;
    padding: 20px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 290px;
    margin: 0;
    text-align: center;
  }
}
.no-buyback-sec .no-order-wrapper p {
  font-size: 16px;
  color: #797979;
  font-weight: 400;
  margin-bottom: 34px;
}
.no-buyback-sec .no-order-wrapper .btn-gradient {
  text-align: center;
  background: #004393;
  color: #fff;
  font-family: SFProText;
  padding: 12px 32px;
  font-weight: 700;
}
.no-buyback-sec .no-order-wrapper img {
  width: 60%;
  margin-bottom: 38px;
  max-width: 300px;
}

@media (max-width: 767px) {
  .mobile .ttl-ns {
    display: none !important;
  }
}
@media (max-width: 767px) {
  .mobile .listing-card {
    margin-top: 0 !important;
  }
  .mobile .listing-card .tab-wrap {
    padding: 0;
    border: 0;
    box-shadow: none;
  }
}

.btn-opacity {
  opacity: 0.65;
}

.invalid-session {
  font-size: 1.5rem;
  color: red;
}`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 37565:
/*!******************************************************************************************************!*\
  !*** ./src/app/post-login-module/buy-back/applied-buyback/applied-buyback.component.html?ngResource ***!
  \******************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "@if (buybackListingLoader) {\r\n  <div id=\"my-order\">\r\n    <div class=\"data-prnt open-list\">\r\n      <div class=\"back-buyback-btn\">\r\n        <a class=\"back-btn\"> <i (click)=\"goToListing()\" class=\"fa fa-angle-left\"></i></a>\r\n        <h4>Buyback</h4>\r\n      </div>\r\n    </div>\r\n    <div>\r\n      <div class=\"loader-wrapper-min-2\" id=\"loading-wrapper-index\">\r\n        <div class=\"circle\">\r\n          <div class=\"circle-min\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n} @else {\r\n  @if (appliedBuyBackList.length > 0 && !invalidSession) {\r\n    <div id=\"my-order\">\r\n      <div class=\"data-prnt open-list\">\r\n        <div class=\"back-buyback-btn\">\r\n          <a class=\"back-btn\"> <i (click)=\"goToListing()\" class=\"fa fa-angle-left\"></i></a>\r\n          <h4>Buyback</h4>\r\n        </div>\r\n        <div class=\"data-list\">\r\n          <h5 class=\"mn-ttln\">Orders ({{appliedBuyBackList?.length || 0}})</h5>\r\n          @for (appliedBuyback of appliedBuyBackList; track appliedBuyback) {\r\n            <div class=\"data-list-cont\">\r\n              <div class=\"top-rr\">\r\n                <div class=\"script-details\">\r\n                  <div class=\"logo-sec\">\r\n                    <div class=\"comp-logo\"><img alt=\"logo\" class=\"img-responsive\"\r\n                      src=\"{{appliedBuyback?.LogoPath ? appliedBuyback?.LogoPath : '../../../assets/images/icons/LO_GO.svg'}}\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"comp-des\">\r\n                    <h4 class=\"activeSym\">{{appliedBuyback?.Stock || \"-\"}}</h4>\r\n                    <h6>{{appliedBuyback?.Symbol || \"-\"}}</h6>\r\n                  </div>\r\n                </div>\r\n                <div class=\"details-rr\">\r\n                  <div class=\"col-des\">\r\n                    <h6>Buyback Price</h6>\r\n                    <h5>{{appliedBuyback?.Price ? \"₹\" + (appliedBuyback?.Price | number: '1.1-2') : \"-\"}}</h5>\r\n                  </div>\r\n                  <div class=\"col-des\">\r\n                    <h6>Buyback Quantity</h6>\r\n                    <h5>{{appliedBuyback?.Qty || \"-\"}}</h5>\r\n                  </div>\r\n                  <div class=\"order-status requested\">{{appliedBuyback?.Status || \"-\"}}</div>\r\n                </div>\r\n                <!-- <div class=\"validation-wrapper\">\r\n                <div class=\"validate-card\"> class==> Rejected : rejected, Requested : requested, Applied : applied,\r\n                  <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Duis aute irure dolor in reprehenderit in voluptate</span>\r\n                </div>\r\n              </div> -->\r\n            </div>\r\n          </div>\r\n        }\r\n      </div>\r\n    </div>\r\n  </div>\r\n} @else {\r\n  <div id=\"my-order\">\r\n    <div class=\"data-prnt open-list\">\r\n      <div class=\"back-buyback-btn\">\r\n        <a class=\"back-btn\"> <i (click)=\"goToListing()\" class=\"fa fa-angle-left\"></i></a>\r\n        <h4>Buyback</h4>\r\n      </div>\r\n    </div>\r\n    <div class=\"no-buyback-sec\">\r\n      <div class=\"no-order-wrapper\">\r\n        @if (!invalidSession) {\r\n          <img src=\"assets/images/order-no-result.png\" class=\"img-fluid\">\r\n          <div>\r\n            <p>You have not placed any order</p>\r\n          </div>\r\n        } @else {\r\n          <strong class=\"invalid-session\">\r\n            Invalid Session\r\n          </strong>\r\n        }\r\n        @if (isFromMobile) {\r\n          <button type=\"button\" class=\"btn btn-gradient btn\" (click)=\"goToListing()\">Go To Buyback</button>\r\n        }\r\n      </div>\r\n    </div>\r\n  </div>\r\n}\r\n}\r\n";

/***/ }),

/***/ 83469:
/*!****************************************************************************************************************!*\
  !*** ./src/app/post-login-module/buy-back/buy-back-application/buy-back-application.component.html?ngResource ***!
  \****************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container\" [class.mobile]=\"isFromMobile\">\r\n  @if (pageLoader) {\r\n    <img class=\"loader\" src=\"assets/images/loader.gif\" />\r\n  } @else {\r\n    @if (invalidSession) {\r\n      <div class=\"no-buyback-sec\">\r\n        <div class=\"no-order-wrapper\">\r\n          <strong class=\"invalid-session\">\r\n            Invalid Session\r\n          </strong>\r\n        </div>\r\n      </div>\r\n    } @else {\r\n      @if (buyBackDetails) {\r\n        <!-- <h2 class=\"page-ttl\">Buyback Apply</h2> -->\r\n        <!-- As min max validation was introduced in angular 12 for TD form check is required on field value  -->\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"details-buyback-main\">\r\n              <div class=\"back-buyback-btn\">\r\n                <a class=\"back-btn\"> <i (click)=\"goToListing()\" class=\"fa fa-angle-left\"></i></a>\r\n                <h4>Buyback</h4>\r\n              </div>\r\n              <div class=\"ttl-card\">\r\n                <div class=\"details-sec\">\r\n                  <div class=\"lft-card\">\r\n                    <div class=\"logo-sm\">\r\n                      <img\r\n                        src=\"{{buyBackDetails?.LogoPath ? buyBackDetails?.LogoPath : '../../../assets/images/icons/LO_GO.svg'}}\"\r\n                        alt=\"Logo\" class=\"sm-img\">\r\n                      </div>\r\n                      <div class=\"scrip-details\">\r\n                        <h5 class=\"scrip-name\">{{buyBackDetails?.Symbol}}</h5>\r\n                        <h6 class=\"scrip-ttl\">{{buyBackDetails?.Stock}}</h6>\r\n                        <!-- <p>(ISIN NO: <span>INE467B01029</span>)</p> -->\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"details-card\">\r\n                  <div class=\"flex-box\">\r\n                    <div class=\"flex-item\">\r\n                      <h6>LTP</h6>\r\n                      <h5>₹{{\r\n                        ltpMapper?.[buyBackDetails?.Segment + \"@\" + buyBackDetails?.Token] ?\r\n                        (ltpMapper?.[buyBackDetails?.Segment + \"@\" + buyBackDetails?.Token] | number: '1.2-2') :\r\n                        \"0.00\"\r\n                      }}</h5>\r\n                    </div>\r\n                    <div class=\"flex-item\">\r\n                      <h6>Buyback Price</h6>\r\n                      <h5>₹{{buyBackDetails?.Price ? (buyBackDetails?.Price | number: '1.0-2') : \"-\"}}</h5>\r\n                    </div>\r\n                    <div class=\"flex-item\">\r\n                      <h6>Eligible Quantity</h6>\r\n                      <h5>{{buyBackDetails?.FreeQty || \"0\"}}</h5>\r\n                    </div>\r\n                    <div class=\"flex-item\">\r\n                      <h6>Buyback Size</h6>\r\n                      <h5>{{buyBackDetails?.Size ? (\"₹\"+(buyBackDetails?.Size | number: '1.0-2') + \" cr\") : \"-\"}}</h5>\r\n                    </div>\r\n                    <div class=\"flex-item\">\r\n                      <h6>Record Date</h6>\r\n                      <h5>{{buyBackDetails?.RecordDate ? (buyBackDetails?.RecordDate | date: \"d MMM ‘yy\") : \"-\"}}</h5>\r\n                    </div>\r\n                    <div class=\"flex-item\">\r\n                      <h6>Buyback Period</h6>\r\n                      <h5>{{buyBackDetails?.StartDate ? (buyBackDetails?.StartDate | date: \"d MMM\") : \"-\"}} -\r\n                        {{buyBackDetails?.EndDate ? (buyBackDetails?.EndDate | date: \"d MMM ‘yy\") : \"-\"}},\r\n                        {{buyBackDetails?.EndDate\r\n                      ? (buyBackDetails?.EndDate | date: \"h.mm a\") : \"-\"}}</h5>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                @if (!!buyBackDetails?.FreeQty && !isNonPoa && !buyBackDetails?.userBBParams?.Status) {\r\n                  <form\r\n                (ngSubmit)=\"quantity.value > 0 && !!buyBackDetails?.FreeQty\r\n                  && (quantity.value <= buyBackDetails?.FreeQty) && !quantity.errors?.pattern ? submitBuyback() : ''\"\r\n                #buybackForm=\"ngForm\" class=\"ttl-card ttl-card-form\">\r\n                    <div class=\"form-sec\">\r\n                      <div class=\"qty\">\r\n                        <label>Quantity</label>\r\n                        <div class=\"input-sec\">\r\n                          <input type=\"number\" min=\"1\" [(ngModel)]=\"buybackQty\" (keypress)=\"preventDecimalAndMax($event, 6)\"\r\n                            name=\"quantity\" #quantity=\"ngModel\" #quantityRef required maxlength=\"6\" class=\"inpt-field\"\r\n                            pattern=\"^[0-9]*$\" tabindex=\"1\" />\r\n                            <span class=\"plus-min-qunt incre-qunt\"\r\n                              (click)=\"triggerStep('quantityRef', windowWidth < 767 ? 'dec' : 'inc')\">\r\n                              <i class=\"icon-angle-up enabled ico-changes-minus\"></i>\r\n                            </span>\r\n                            <span class=\"plus-min-qunt decrease-qant\"\r\n                              (click)=\"triggerStep('quantityRef', windowWidth < 767 ? 'inc' : 'dec')\">\r\n                              <i class=\"icon-angle-down enabled ico-changes-plus\"></i>\r\n                            </span>\r\n                          </div>\r\n                          @if ((quantity.errors?.required || quantity.value <= 0\r\n                            || !!buyBackDetails?.FreeQty && (quantity.value > buyBackDetails?.FreeQty)\r\n                            || quantity.errors?.pattern)) {\r\n                            <span class=\"error-msg\">{{(quantity.errors?.required ||\r\n                              quantity.value <= 0) ? 'Add minimum 1 quantity' : quantity.errors?.pattern\r\n                            ? \"Please enter valid quantity\" : \"Quantity cannot be more than eligible quantity\" }}</span>\r\n                          }\r\n                        </div>\r\n                        <div class=\"button-sec\">\r\n                    <button type=\"submit\" [attr.disabled]=\"(quantity.errors?.required || quantity.value <= 0\r\n                          || !!buyBackDetails?.FreeQty && (quantity.value > buyBackDetails?.FreeQty))\r\n                          || quantity.errors?.pattern || null\" class=\"btn btn-default btn-order\">\r\n                            @if (!applyLoader) {\r\n                              Apply\r\n                            }\r\n                            @if (applyLoader) {\r\n                              <span class=\"loader\">\r\n                                <div class=\"spin-loader\" aria-hidden=\"true\"></div>\r\n                              </span>\r\n                            }\r\n                          </button>\r\n                          <!-- Applied button with hover tooltip\r\n                          <button type=\"button\" class=\"btn btn-default btn-applied\">Applied\r\n                            <span class=\"tooltip-text\">You are already applied</span>\r\n                          </button> -->\r\n                        </div>\r\n                      </div>\r\n                    </form>\r\n                  }\r\n                  @if (!buyBackDetails?.FreeQty || !!buyBackDetails?.userBBParams?.Status || isNonPoa) {\r\n                    <div\r\n                      class=\"buyback-warning\">\r\n                      @if (isNonPoa) {\r\n                        <p class=\"text\">\r\n                          Please submit the POA/DDPI to apply buyback <span class=\"c-link cursor-pointer\"\r\n                        (click)=\"openDDPIWindow()\">Proceed</span>\r\n                      </p>\r\n                    }\r\n                    @if (!isNonPoa && !buyBackDetails?.userBBParams?.Status && buyBackDetails.FreeQty <= 0) {\r\n                      <p class=\"text\">\r\n                        You don't seem to have any {{buyBackDetails?.Symbol}} holding as on record date,\r\n                        {{buyBackDetails?.RecordDate\r\n                        ?\r\n                        (buyBackDetails?.RecordDate | date: \"d MMM yyyy\") : \"\"}}\r\n                      </p>\r\n                    }\r\n                    @if (!isNonPoa && !!buyBackDetails?.userBBParams?.Status) {\r\n                      <p class=\"text\">\r\n                        You have already applied\r\n                      </p>\r\n                    }\r\n                  </div>\r\n                }\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- <div class=\"block-item-text\">\r\n          <input type=\"checkbox\" hidden class=\"read-more-state\" id=\"read-more\">\r\n          <span class=\"read-more-wrap\">\r\n            <span class=\"note-details\"><span class=\"note\">Note :</span> If you intend to use pledged holdings for a\r\n            buyback,\r\n            make sure to unpledged them bef<span class=\"read-more-target note-details\">ore submitting your buyback\r\n            application, as only one application per buyback program is permitted. Once a buyback request is placed,\r\n            it\r\n            cannot be modified or cancelled.\r\n          </span>\r\n        </span>\r\n      </span>\r\n      <label for=\"read-more\" class=\"readmore read-more-trigger_closed\">Read More...</label>\r\n      <label for=\"read-more\" class=\"readmore read-more-trigger_opened\">Read Less</label>\r\n    </div> -->\r\n  } @else {\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 text-center\"><img src=\"assets/images/404.png\" class=\"img-detail\">\r\n          <div class=\"no-data-content\">\r\n            <h4>No Data Found</h4><button type=\"button\" (click)=\"goToListing()\"\r\n          class=\"btn btn-gradient btn btn-aply\">EXPLORE AVAILABLE BUYBACK</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n}\r\n}\r\n}\r\n</div>";

/***/ }),

/***/ 48429:
/*!**************************************************************************************************!*\
  !*** ./src/app/post-login-module/buy-back/buy-back-list/buy-back-list.component.html?ngResource ***!
  \**************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"buyback-listing\" [class.mobile]=\"isFromMobile\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"listing-card\">\r\n          <div class=\"tab-wrap\">\r\n            <div class=\"ttl-ns\">\r\n              <h3><span>Buyback</span></h3>\r\n            </div>\r\n            <div class=\"tab-wrap-inner\">\r\n              <ul class=\"flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row nav nav-tabs\" role=\"tablist\">\r\n                <li class=\"nav-item\" (click)=\"onTabSelection('open')\">\r\n                  <a [class.active]=\"buyBackTab === 'open'\" class=\"nav-link cursor-pointer text-white active\">Open</a>\r\n                </li>\r\n                <li class=\"nav-item nav-item-mobile\" (click)=\"onTabSelection('orders')\">\r\n                  <a [class.active]=\"buyBackTab === 'orders'\" class=\"nav-link cursor-pointer\">My\r\n                    Orders</a>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"tab-content\">\r\n            <router-outlet></router-outlet>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>";

/***/ }),

/***/ 46967:
/*!************************************************************************************************!*\
  !*** ./src/app/post-login-module/buy-back/open-buyback/open-buyback.component.html?ngResource ***!
  \************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "@if (buybackListingLoader) {\r\n  <div class=\"loader-wrapper-min-2\" id=\"loading-wrapper-index\">\r\n    <div class=\"circle\">\r\n      <div class=\"circle-min\"></div>\r\n    </div>\r\n  </div>\r\n} @else {\r\n  @if (activeBuyBackList.length > 0 && !invalidSession) {\r\n    <div id=\"open-order\">\r\n      <div class=\"data-prnt open-list\">\r\n        <div class=\"data-list\">\r\n          <h5 class=\"mn-ttln\">Open ({{ activeBuyBackList?.length || 0 }})</h5>\r\n          @for (activeBuyback of activeBuyBackList; track activeBuyback) {\r\n            <div class=\"data-list-cont listing\"\r\n              (click)=\"goToBuybackDetails(activeBuyback)\">\r\n              <div class=\"top-rr\">\r\n                <div class=\"script-details\">\r\n                  <div class=\"logo-sec\">\r\n                    <div class=\"comp-logo\">\r\n                      <img alt=\"logo\" class=\"img-responsive\"\r\n                        src=\"{{activeBuyback?.LogoPath ? activeBuyback?.LogoPath : '../../../assets/images/icons/LO_GO.svg'}}\" />\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"comp-des\">\r\n                      <h4 class=\"activeSym\">{{ activeBuyback?.Stock || \"-\" }}</h4>\r\n                      <h6>{{ activeBuyback?.Symbol || \"-\" }}</h6>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"details-rr\">\r\n                    <div class=\"col-des\">\r\n                      <h6>LTP</h6>\r\n                      <h5>\r\n                        ₹{{\r\n                        ltpMapper?.[activeBuyback?.Segment + \"@\" + activeBuyback?.Token] ?\r\n                        (ltpMapper?.[activeBuyback?.Segment + \"@\" + activeBuyback?.Token] | number : \"1.2-2\")\r\n                        : \"0.00\"\r\n                        }}\r\n                      </h5>\r\n                    </div>\r\n                    <div class=\"col-des date-sm\">\r\n                      <h6 class=\"none-mob\">Buyback Period</h6>\r\n                      <h5 class=\"box-mob\">\r\n                        {{\r\n                        activeBuyback?.StartDate\r\n                        ? (activeBuyback?.StartDate | date : \"d MMM\")\r\n                        : \"-\"\r\n                        }}\r\n                        -\r\n                        {{\r\n                        activeBuyback?.EndDate\r\n                        ? (activeBuyback?.EndDate | date : \"d MMM ‘yy\")\r\n                        : \"-\"\r\n                        }},\r\n                        {{\r\n                        activeBuyback?.EndDate\r\n                        ? (activeBuyback?.EndDate | date : \"h.mm a\")\r\n                        : \"-\"\r\n                        }}\r\n                      </h5>\r\n                    </div>\r\n                    <div class=\"col-des\">\r\n                      <h6>Buyback Price</h6>\r\n                      <h5>\r\n                        ₹{{\r\n                        activeBuyback?.Price\r\n                        ? (activeBuyback?.Price | number : \"1.0-2\")\r\n                        : \"-\"\r\n                        }}\r\n                      </h5>\r\n                    </div>\r\n                    <div class=\"btn-res\">\r\n                      <button [class.btn-opacity]=\"!!activeBuyback?.userBBParams?.Status\"\r\n                        class=\"btn btn-gradient btn btn-aply Click-here\">\r\n                        {{!!activeBuyback?.userBBParams?.Status ? \"Applied\" : \"Apply\"}}\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            }\r\n          </div>\r\n        </div>\r\n        <div class=\"need-help-btn\" (click)=\"toggleHelpPopup('open')\">\r\n          <img src=\"../../../assets/images/icons/chat-bubble-question.svg\" />\r\n          Need Help?\r\n        </div>\r\n        <div class=\"detail-shadow\" [class.shadow-active]=\"helpPopupVisibility\"></div>\r\n        <div class=\"open-details-mob\" [class.details-mob-active]=\"helpPopupVisibility\">\r\n          <span class=\"btn-close\" (click)=\"toggleHelpPopup('close')\">\r\n            <i class=\"icon-x\"></i>\r\n          </span>\r\n          <div class=\"about-buyback\">\r\n            <h3>What is Buyback ?</h3>\r\n            <p>\r\n              A buyback is a corporate action in which a company buys its own shares from shareholders, usually at a price\r\n              higher than the current market value.\r\n            </p>\r\n          </div>\r\n          <div class=\"about-buyback\">\r\n            <h3>How to apply for Buyback ?</h3>\r\n            <div class=\"applie-steps\">\r\n              <div class=\"steps-itm\">\r\n                <span> 01 </span>\r\n                <div class=\"des-cont\">\r\n                  <h5>Step 1</h5>\r\n                  <p>\r\n                    Visit the buyback page and select your preferred buyback company.\r\n                  </p>\r\n                </div>\r\n              </div>\r\n              <div class=\"steps-itm\">\r\n                <span> 02 </span>\r\n                <div class=\"des-cont\">\r\n                  <h5>Step 2</h5>\r\n                  <p>\r\n                    Check the buyback details, ensuring you hold the stocks on the record date, and verify the offered\r\n                    price.\r\n                  </p>\r\n                </div>\r\n              </div>\r\n              <div class=\"steps-itm\">\r\n                <span> 03 </span>\r\n                <div class=\"des-cont\">\r\n                  <h5>Step 3</h5>\r\n                  <p>\r\n                    Input the quantity of stocks and click of apply, accepted shares money will be credited to your bank\r\n                    account.\r\n                  </p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    } @else {\r\n      <div class=\"no-buyback-sec\">\r\n        <div class=\"no-order-wrapper\">\r\n          @if (!invalidSession) {\r\n            <img src=\"assets/images/order-no-result.png\" class=\"img-fluid\" />\r\n            <div>\r\n              <p>No Buyback available to apply</p>\r\n            </div>\r\n          } @else {\r\n            <strong class=\"invalid-session\">\r\n              Invalid Session\r\n            </strong>\r\n          }\r\n        </div>\r\n      </div>\r\n    }\r\n  }\r\n\r\n";

/***/ })

}]);