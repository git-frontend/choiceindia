(self["webpackChunkjiffy_upgraded"] = self["webpackChunkjiffy_upgraded"] || []).push([[7487],{

/***/ 96202:
/*!*********************************************************************************************!*\
  !*** ./src/app/post-login-module/settings/settings-password/settings-password.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsPasswordComponent: () => (/* binding */ SettingsPasswordComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _settings_password_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings-password.component.html?ngResource */ 88814);
/* harmony import */ var _settings_password_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings-password.component.scss?ngResource */ 50786);
/* harmony import */ var _settings_password_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_settings_password_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_rest_post_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/rest/post-login.service */ 4135);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/shared-data/shared-data.service */ 46013);
/* harmony import */ var _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../services/utils/utils.service */ 89893);
/* harmony import */ var src_app_services_cryptography_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/cryptography.service */ 67224);
/* harmony import */ var _directives_input_restrict2_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../directives/input-restrict2.directive */ 5833);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 89417);











/**
 * Component for Change Password after logging In
 */
let SettingsPasswordComponent = class SettingsPasswordComponent {
  /**
   * Constructor for Object Initialization
   * @param route Router Module Instance
   * @param rest PostLoginService instance for HTTP Requests
   * @param shared SharedDataService Instance
   * @param utils UtilsService instance
   */
  constructor(cryptography, route, rest, shared, utils) {
    this.cryptography = cryptography;
    this.route = route;
    this.rest = rest;
    this.shared = shared;
    this.utils = utils;
    this.passwordChanged = true;
  }
  /**
   * Life Cycle Hook for Initialization
   */
  ngOnInit() {
    this.change = {};
    let body = document.getElementById("section-body-data");
    if (body) {
      body.classList.add("body-login-page");
    }
  }
  /**
   * Life Cycle Hook after Component Views has been rendered
   */
  ngAfterViewInit() {
    this.currentPwd.nativeElement.focus();
  }
  /**
   * Change Password Request
   */
  changePassword(changePasswordForm) {
    if (changePasswordForm.form && changePasswordForm.form.status == "INVALID") {
      return;
    }
    let request = {
      userId: this.utils.getUserId(),
      pwd: this.cryptography.encryptText(this.change.currentPassword.trim()),
      newPwd: this.cryptography.encryptText(this.change.newPassword.trim()),
      deviceType: "W",
      "ip": this.utils.get("address") || "",
      "mode": 11,
      "deviceId": this.utils.get("fingerprint") || ""
    };
    if (this.change.newPassword.indexOf(" ") > -1) {
      this.utils.error("Error", "Spaces not allowed in new Password");
      return;
    } else if (this.change.newPassword.length < 6 || this.change.newPassword.length > 16) {
      this.utils.error("Error", "New password should be between 6-16 characters");
      return;
    } else if (this.change.newPassword.toLowerCase().indexOf(request.userId.toLowerCase()) > -1) {
      this.utils.error("Error", "New password cannot contain Client ID.");
      return;
    }
    this.utils.closeInteractivecloseSocket();
    this.shared.isSSO = localStorage.getItem('isSSO') == 'true';
    if (!this.shared.isSSO) {
      this.rest.changePassword(request).subscribe(data => {
        if (data.Status === "Success" && (data.Response && data.Response.LogonStatus == "10000" || data.Response && data.Response.LogonStatus == "10006")) {
          this.pwdChangeSuccess = true;
        } else {
          this.utils.error("Error", data.Reason);
          this.change = {};
        }
      }, err => {
        this.utils.error("Error", "Something went wrong, Please Try again.");
      });
    } else {
      let rid = this.cryptography.ssoEncryption(this.utils.getMobId());
      let payload = {
        current_password: this.cryptography.ssoEncryption(this.change.currentPassword.trim()),
        new_password: this.cryptography.ssoEncryption(this.change.newPassword.trim()),
        confirm_password: this.cryptography.ssoEncryption(this.change.confirmNewPassword.trim()),
        user_name: this.cryptography.ssoEncryption(this.utils.getMobId())
      };
      this.rest.changeSSOpassword(payload, rid).subscribe(res => {
        if (res && res.StatusCode == 200) {
          this.utils.success("Success", res.Message);
          this.pwdChangeSuccess = true;
        } else {
          this.utils.error("Error", res.Message);
          this.change = {};
        }
      }, error => {
        console.log("CHANGE PASSWORD ERROR", error);
      });
    }
  }
  navigateToLogin() {
    if (this.shared.isSSO) {
      this.change = {};
      this.utils.postFeatureCount();
      this.utils.clear("navigateToMutualFunds");
      this.shared.userId = null;
      this.utils.clearLoginDetails(false, true, true);
    } else {
      this.change = {};
      this.utils.postFeatureCount();
      this.utils.clearLoginDetails();
      this.shared.userId = null;
      this.route.navigate(["auth/login"]);
    }
  }
  /**
   * Life Cycle Hook for destruction
   */
  ngOnDestroy() {
    let body = document.getElementById("section-body-data");
    if (body) {
      body.classList.remove("body-login-page");
    }
  }
  static {
    this.ctorParameters = () => [{
      type: src_app_services_cryptography_service__WEBPACK_IMPORTED_MODULE_5__.CryptographyService
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
    }, {
      type: _services_rest_post_login_service__WEBPACK_IMPORTED_MODULE_2__.PostLoginService
    }, {
      type: _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__.SharedDataService
    }, {
      type: _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_4__.UtilsService
    }];
  }
  static {
    this.propDecorators = {
      currentPwd: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild,
        args: ["currentPwd"]
      }]
    };
  }
};
SettingsPasswordComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: "app-settings-password",
  template: _settings_password_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _directives_input_restrict2_directive__WEBPACK_IMPORTED_MODULE_6__.InputRestrict2Directive, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink],
  styles: [(_settings_password_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:paramtypes", [src_app_services_cryptography_service__WEBPACK_IMPORTED_MODULE_5__.CryptographyService, _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router, _services_rest_post_login_service__WEBPACK_IMPORTED_MODULE_2__.PostLoginService, _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__.SharedDataService, _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_4__.UtilsService])], SettingsPasswordComponent);


/***/ }),

/***/ 90302:
/*!*******************************************************************************************!*\
  !*** ./src/app/post-login-module/settings/settings-profile/settings-profile.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsProfileComponent: () => (/* binding */ SettingsProfileComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _settings_profile_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings-profile.component.html?ngResource */ 69194);
/* harmony import */ var _settings_profile_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings-profile.component.scss?ngResource */ 74902);
/* harmony import */ var _settings_profile_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_settings_profile_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _services_rest_post_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/rest/post-login.service */ 4135);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/shared-data/shared-data.service */ 46013);
/* harmony import */ var _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../services/utils/utils.service */ 89893);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-oauth2-oidc */ 1244);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 70980);
/* harmony import */ var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/analytics/analytics.service */ 50213);
/* harmony import */ var src_app_services_cryptography_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/cryptography.service */ 67224);













/**

 * Component for User Profile

 */
let SettingsProfileComponent = class SettingsProfileComponent {
  /**
      * Constructor for Object Initialization
      * @param router Router Module Instance
      * @param rest PostLoginService instance for HTTP Requests
      * @param shared SharedDataService Instance
      * @param utils UtilsService instance
      */
  constructor(cryptography, router, rest, shared, utils, renderer, analytics, activatedRoute, oauthService) {
    this.cryptography = cryptography;
    this.router = router;
    this.rest = rest;
    this.shared = shared;
    this.utils = utils;
    this.renderer = renderer;
    this.analytics = analytics;
    this.activatedRoute = activatedRoute;
    this.oauthService = oauthService;
    /** Brokerage Data */
    this.brokerageData = [];
    /** brokerage loader */
    this.brokerageLoader = false;
    this.brokerageConfig = [{
      grp: "CASH",
      seg: "Equity",
      data: [{
        label: "Intraday",
        value: "",
        price: {
          mul: 100,
          info: " for trade value of 10 Thousand"
        },
        price25: {
          mul: 100,
          info: " per order"
        },
        rate: {
          mul: "",
          info: " for trade value of 10 Thousand"
        },
        rate25: {
          mul: "",
          info: " per order"
        }
      }, {
        label: "Delivery",
        value: "",
        price: {
          mul: 100,
          info: " for trade value of 10 Thousand"
        },
        price25: {
          mul: 100,
          info: " per order"
        },
        rate: {
          mul: "",
          info: " for trade value of 10 Thousand"
        },
        rate25: {
          mul: "",
          info: " per order"
        }
      }]
    }, {
      grp: "DERV",
      seg: "Derivatives",
      data: [{
        label: "Future",
        value: "",
        price: {
          mul: 1000,
          info: " for trade value of 1 Lakh"
        },
        price25: {
          mul: 1000,
          info: " per order"
        },
        rate: {
          mul: "",
          info: " per LOT"
        },
        rate25: {
          mul: "",
          info: " per order"
        }
      }, {
        label: "Option",
        value: "",
        price: {
          mul: 1000,
          info: " for trade value of 1 Lakh"
        },
        price25: {
          mul: 1000,
          info: " per order"
        },
        rate: {
          mul: "",
          info: " per LOT"
        },
        rate25: {
          mul: "",
          info: " per order"
        }
      }]
    }, {
      grp: "COMM",
      seg: "Commodity",
      data: [{
        label: "Future",
        value: "",
        price: {
          mul: 1000,
          info: " for trade value of 1 Lakh"
        },
        price25: {
          mul: 1000,
          info: " per order"
        },
        rate: {
          mul: "",
          info: " per LOT"
        },
        rate25: {
          mul: "",
          info: " per order"
        }
      }, {
        label: "Option",
        value: "",
        price: {
          mul: 1000,
          info: " for trade value of 1 Lakh"
        },
        price25: {
          mul: 1000,
          info: " per order"
        },
        rate: {
          mul: "",
          info: " per LOT"
        },
        rate25: {
          mul: "",
          info: " per order"
        }
      }]
    }, {
      grp: "CURR",
      seg: "Currency",
      data: [{
        label: "Future",
        value: "",
        price: {
          mul: 1000,
          info: " for trade value of 1 Lakh"
        },
        price25: {
          mul: 1000,
          info: " per order"
        },
        rate: {
          mul: "",
          info: " per LOT"
        },
        rate25: {
          mul: "",
          info: " per order"
        }
      }, {
        label: "Option",
        value: "",
        price: {
          mul: 1000,
          info: " for trade value of 1 Lakh"
        },
        price25: {
          mul: 1000,
          info: " per order"
        },
        rate: {
          mul: "",
          info: " per LOT"
        },
        rate25: {
          mul: "",
          info: " per order"
        }
      }]
    }, {
      grp: "ICEX",
      seg: "ICEX",
      data: [{
        label: "Future",
        value: "",
        price: {
          mul: 1000,
          info: " for trade value of 1 Lakh"
        },
        price25: {
          mul: 1000,
          info: " per order"
        },
        rate: {
          mul: "",
          info: " per LOT"
        },
        rate25: {
          mul: "",
          info: " per order"
        }
      }, {
        label: "Option",
        value: "",
        price: {
          mul: 1000,
          info: " for trade value of 1 Lakh"
        },
        price25: {
          mul: 1000,
          info: " per order"
        },
        rate: {
          mul: "",
          info: " per LOT"
        },
        rate25: {
          mul: "",
          info: " per order"
        }
      }]
    }];
    this.isTradingChart = this.utils.getUserId() ? this.utils.getPreferences("ChartType") == "TRADING_VIEW" || localStorage.getItem("chartType") == "true" : localStorage.getItem("chartType") == "true" || false;
    let isOrderConfirmPopup = this.utils.getUserId() ? this.utils.getPreferences("showConfirmationOrderPopup") || "show" : "show";
    this.isOrderConfirmPopup = isOrderConfirmPopup === "show" ? true : false;
    this.isKeepDraggableWindowOpen = (this.utils.getPreferences("keepDraggableWindowOpen") || "show") === "show" ? true : false;
    this.activatedRoute.params.subscribe(params => {
      if (params && params.type) {
        if (params.type == 'segment' || params.type == 'service') {
          this.openModificationLink(params.type);
        } else if (params.type == 'modify-details') {
          this.openOnboardingWindow('contact-details');
        }
      }
    });
    this.cmlLoader = false;
    this.isLoggedWithSso = false;
  }
  /**
      * Life Cycle Hook for Initialization
      */
  ngOnInit() {
    this.utils.setTrackMoeEvent("visitedProfile", {
      User_ID: this.utils.getUserId() || "guest",
      IP: this.shared.IPAddress
    });
    this.analytics.emitEvent("visitedProfile", this.utils.getUserId() || "guest", JSON.stringify({
      IP: this.shared.IPAddress
    }), 1);
    this.profile = {};
    this.pledgeConfig = {};
    //this.getBrokerageSlabs();
    this.userAccountStatus = this.utils.getUserAccountStatus();
    if (this.userAccountStatus.onboardStatus != "MF") {
      this.getBrokerage();
    }
    this.profile = this.utils.getProfileData();
    if (!this.profile.Name) this.getProfileData();
    this.isLoggedWithSso = this.shared.isSSO;
  }
  /**Show Preference */
  showPreferences() {
    if (this.userAccountStatus && this.userAccountStatus.onboardStatus === "MF") {
      this.utils.broadcast("generateSubs", {});
    } else {
      this.utils.setTrackMoeEvent("visitedMyPreferences", {
        User_ID: this.utils.getUserId() || "guest",
        IP: this.shared.IPAddress
      });
      this.analytics.emitEvent("visitedMyPreferences", this.utils.getUserId() || "guest", JSON.stringify({
        IP: this.shared.IPAddress
      }), 1);
      this.isTradingChart = this.utils.getUserId() ? this.utils.getPreferences("ChartType") == "TRADING_VIEW" || localStorage.getItem("chartType") == "true" : localStorage.getItem("chartType") == "true" || false;
      this.showPreference = true;
      this.renderer.setStyle(document.body, "overflow", "hidden");
    }
  }
  /** to save user preferences */
  savePreferencetoAPI() {
    let request = {
      preference_name: "ChartType",
      preference_type: "ChartType",
      client_id: this.utils.getUserId(),
      config: this.isTradingChart ? "TRADING_VIEW" : "CHART_IQ",
      platform: "Web"
    };
    this.rest.saveUserPreference(request, true).subscribe(res => {
      if (res.status_code && res.status_code == 200) {}
    }, err => {});
  }
  onLabelToggleChange(value) {
    this.utils.setTrackMoeEvent("ChartPreferenceToggle", {
      User_ID: this.utils.getUserId() || "guest",
      selectedPreference: value ? "ChartIQ" : "TradingView",
      IP: this.shared.IPAddress
    });
    this.analytics.emitEvent("ChartPreferenceToggle", this.utils.getUserId() || "guest", JSON.stringify({
      selectedPreference: value ? "ChartIQ" : "TradingView",
      IP: this.shared.IPAddress
    }), 1);
    this.isTradingChart = value;
    localStorage.setItem("chartType", this.isTradingChart);
    this.utils.updatePreference("ChartType", this.isTradingChart ? "TRADING_VIEW" : "CHART_IQ");
    this.savePreferencetoAPI();
  }
  onChange(value) {
    this.isTradingChart = value;
    this.utils.updatePreference("ChartType", this.isTradingChart ? "TRADING_VIEW" : "CHART_IQ");
    window.Moengage.add_user_attribute("chartType", this.isTradingChart ? "TRADING_VIEW" : "CHART_IQ");
    localStorage.setItem("chartType", this.isTradingChart);
    this.savePreferencetoAPI();
  }
  /**
      * Get User Profile if Not Found in LocalStorage
      */
  getProfileData(isclicked) {
    if (this.userAccountStatus && this.userAccountStatus.onboardStatus === "MF") {
      this.getMFProfileV2Details(this.profile.MfDetails.clientId);
    } else {
      let request = {
        userId: this.utils.getUserId(),
        sessionId: this.utils.getSessionId() || "",
        GroupId: this.utils.get("groupId")
      };
      this.rest.getProfile(request).subscribe(data => {
        if (data.Status === "Success" && data.Response) {
          this.profile = data.Response || {};
          if (this.profile.Name) {
            let initials = this.profile.Name.match(/\b\w/g) || [];
            this.profile.initials = ((initials.shift() || "") + (initials.pop() || "")).toUpperCase();
          }
          if (this.profile.MobileNo) {
            this.profile.formattedMobileNo = this.profile.MobileNo.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
          }
          if (this.profile.AadharNo) {
            this.profile.formattedAadharNo = this.profile.AadharNo.replace(/(\d{4})(\d{4})(\d{4})/, "$1 $2 $3");
          }
          let bank = this.profile.BankDetails.filter(bank => {
            return bank.IsDefault == "Yes";
          });
          // this.profile.POAStatus=false;
          // this.profile.Depository = 'CDSL';
          this.profile = {
            ...this.profile,
            ...(bank[0] || {})
          };
          this.profile.allowedSegments = this.utils.segmentsAllowed().map(item => item.ExchangeSegment).join(" | ");
          this.utils.saveProfile(this.profile);
          // this.utils.success("Success", "Profile refreshed successfully.");
          this.utils.setUserAttributes(data.Response); // to set moengage user attribute (21/06/2021)
          // } else if (this.utils.isSessionExpired(data.Reason)) {
          //   if (this.shared.isSSO) {
          //     this.utils.sessionExpireHandling();
          //     return;
          //   }
          //   this.utils.error("Session Expired", "Please Login Again");
          //   this.utils.postFeatureCount();
          //   this.utils.clearLoginDetails();
          //   this.shared.userId = null;
          //   this.router.navigate(["auth/login"]);
        } else {
          this.utils.error("Error", data.Reason);
        }
      }, err => {});
    }
  }
  getBrokerageSlabs() {
    const request = {
      UserID: "test",
      ClientID: this.utils.getUserId(),
      CompanyCode: ""
    };
    this.brokerageSlab = [];
    this.rest.getBrokerageSlab(request).subscribe(data => {
      if (data && data.Response) {
        // this.brokerageSlab = data.Response;
        (data.Response || []).forEach((item, index) => {
          let type = ["N", "FU", "OP"].indexOf(item.Market) > -1 && item.DELIVERYPER + item.DELIVERYMIN == 0 ? "Trading One Side" : item.Market == "N" && item.DELIVERYPER + item.DELIVERYMIN != 0 ? "Delivery" : item.Market == "T" ? "Trade For Trade" : ["MCX", "NCDEX", "ICEX"].indexOf(item.COMPANY_CODE) > -1 && item.DELPER + item.DELmin + item.DELPERLOT != 0 ? "Commodity Delivery" : "";
          let calculatedPercent = ["N", "FU", "OP"].indexOf(item.Market) > -1 && item.DELIVERYPER + item.DELIVERYMIN == 0 ? item.ONESIDEPER : item.Market == "N" && item.DELIVERYPER + item.DELIVERYMIN != 0 ? item.DELIVERYPER : item.Market == "T" ? item.DELIVERYPER : ["MCX", "NCDEX", "ICEX"].indexOf(item.COMPANY_CODE) > -1 && item.DELPER + item.DELmin + item.DELPERLOT != 0 ? item.DELIVERYPER : "";
          let calculatedLot = ["N", "FU", "OP"].indexOf(item.Market) > -1 && item.DELIVERYPER + item.DELIVERYMIN == 0 ? item.ONESIDEMIN : item.Market == "N" && item.DELIVERYPER + item.DELIVERYMIN != 0 ? item.DELIVERYMIN : item.Market == "T" ? item.DELIVERYMIN : ["MCX", "NCDEX", "ICEX"].indexOf(item.COMPANY_CODE) > -1 && item.DELPER + item.DELmin + item.DELPERLOT != 0 ? item.DELIVERYMIN : "";
          let calculatedMinLot = ["N", "FU", "OP"].indexOf(item.Market) > -1 && item.DELIVERYPER + item.DELIVERYMIN == 0 ? item.ONESIDEMIN : "";
          this.brokerageSlab.push({
            type: type,
            calculatedPercent: calculatedPercent,
            calculatedLot: calculatedLot,
            calculatedMinLot: calculatedMinLot,
            companyCode: item.COMPANY_CODE.replace(/_/g, " "),
            contractMinimum: item.CONTRACT_MINIMUM,
            market: item.Market,
            toPrice: item.TO_PRICE
          });
          if (["N", "FU", "OP"].indexOf(item.Market) > -1 && item.DELIVERYPER + item.DELIVERYMIN == 0) {
            this.brokerageSlab.push({
              type: "Trading Other Side",
              calculatedPercent: item.OTHERSIDEPER,
              calculatedLot: item.OTHERSIDEMIN,
              calculatedMinLot: item.OtherSideConMin,
              companyCode: item.COMPANY_CODE.replace(/_/g, " "),
              contractMinimum: item.CONTRACT_MINIMUM,
              market: item.Market,
              toPrice: item.TO_PRICE
            });
          } else if (["MCX", "NCDEX", "ICEX"].indexOf(item.COMPANY_CODE) > -1 && item.DELPER + item.DELmin + item.DELPERLOT != 0) {
            this.brokerageSlab.push({
              type: "Commodity Delivery",
              calculatedPercent: item.OTHERSIDEPER,
              calculatedLot: item.OTHERSIDEMIN,
              calculatedMinLot: item.OtherSideConMin,
              companyCode: item.COMPANY_CODE.replace(/_/g, " "),
              contractMinimum: item.CONTRACT_MINIMUM,
              market: item.Market,
              toPrice: item.TO_PRICE
            });
            this.brokerageSlab.push({
              type: "Commodity Delivery",
              calculatedPercent: item.ONESIDEPER,
              calculatedLot: item.ONESIDEMIN,
              calculatedMinLot: item.OneSideConMin,
              companyCode: item.COMPANY_CODE.replace(/_/g, " "),
              contractMinimum: item.CONTRACT_MINIMUM,
              market: item.Market,
              toPrice: item.TO_PRICE
            });
          }
        });
      }
    });
  }
  /** to close brokerage popup */
  closeDetails() {
    this.showPreference = false;
    this.showBrokerage = false;
    this.renderer.setStyle(document.body, "overflow", "auto");
  }
  /**
      * Goto Change Password Page
      */
  gotoChangePassword() {
    this.router.navigate(["/client/settings/" + this.utils.getUserId() + "/changePassword"]);
  }
  /**
      * Goto Change PIN Page
      */
  gotoChangePin() {
    this.router.navigate(["/client/settings/" + this.utils.getUserId() + "/changePin"]);
  }
  /**
      * Goto Ledger Report Page
      */
  gotoLedgerReport() {
    this.router.navigate(["/client/reports/ledgerReport"]);
  }
  openOnboardingWindow(routeKey) {
    if (this.userAccountStatus && this.userAccountStatus.onboardStatus === "MF") {
      this.utils.broadcast("generateSubs", {});
    } else {
      let url = "";
      this.utils.setTrackMoeEvent("visitedProfileModification", {
        User_ID: this.utils.getUserId() || "guest",
        IP: this.shared.IPAddress
      });
      let userId = this.cryptography.decryptText(this.utils.get("userId"));
      let sessionId = this.cryptography.decryptText(this.utils.get("sessionId"));
      if (routeKey == "contact-details") {
        url = this.rest.getOnboardingModificationURL(btoa(this.utils.getUserId()), encodeURIComponent(this.cryptography.encryptText(userId)), encodeURIComponent(this.cryptography.encryptText(sessionId)));
      } else if (routeKey == "enable-ddpi") {
        url = this.rest.getDDPIURL(btoa(this.utils.getUserId()), encodeURIComponent(this.cryptography.encryptText(userId)), encodeURIComponent(this.cryptography.encryptText(sessionId)));
      }
      window.open(url, "_blank"); // open window in current window (28/05/2021)
    }
  }
  /** to show brokerage popup */
  showBrokeragePlan() {
    if (this.userAccountStatus && this.userAccountStatus.onboardStatus === "MF") {
      this.utils.broadcast("generateSubs", {});
    } else {
      this.utils.setTrackMoeEvent("visitedProfileBrokerageBSDF", {
        User_ID: this.utils.getUserId() || "guest",
        IP: this.shared.IPAddress
      });
      this.analytics.emitEvent("visitedProfileBrokerageBSDF", this.utils.getUserId() || "guest", JSON.stringify({
        IP: this.shared.IPAddress
      }), 1);
      this.getBrokerage();
      this.showBrokerage = true;
      this.renderer.setStyle(document.body, "overflow", "hidden");
    }
  }
  /** authorize pledge */
  authorizePledge() {
    if (this.userAccountStatus && this.userAccountStatus.onboardStatus === "MF") {
      this.utils.broadcast("generateSubs", {});
    } else {
      let userProfile = this.utils.getProfile();
      this.pledgeConfig.depository = userProfile.Depository;
      this.pledgeConfig.url = this.pledgeConfig.depository == "CDSL" ? "https://www.cdslindia.com/MarginPledge/OTP.aspx" : "https://eservices.nsdl.com/SecureWeb/HomeLogin.jsp?loginpg=1&image=ideas";
      this.openPledgeModal();
    }
  }
  /** on click of authorize pledge open pledge modal */
  openPledgeModal() {
    this.pledgeConfig.pledgeModal = true;
    this.renderer.setStyle(document.body, "overflow", "hidden");
  }
  /** On click of CANCEL button user able to  close pledge modal */
  closePledgeModal() {
    this.pledgeConfig.pledgeModal = false;
    this.renderer.setStyle(document.body, "overflow", "auto");
  }
  /** on click of  CONTINUE button user able to nav */
  redirectToPortal() {
    let newWindow = window.open(this.pledgeConfig.url, "_blank");
    if (this.utils.checkIfPopupsEnableOrNot(newWindow)) window.open(this.pledgeConfig.url, "_self"); // if popups not enable then open window in current window (28/05/2021)
    this.closePledgeModal();
  }
  /** to get brokerage  (25/05/2021)*/
  getBrokerage() {
    this.brokerageLoader = true;
    this.brokerageSubscription = this.rest.getBrokerage().subscribe(data => {
      this.brokerageLoader = false;
      if (data.Status != "Success" || !data.Response || data.Response && !data.Response.length) return;
      this.brokerageData = [];
      data.Response.forEach(el => {
        let seg = this.brokerageConfig.filter(item => {
          return item.grp == el.SEG;
        });
        for (let i = 0; i <= 1; i++) {
          if (el["ORDER_TYP"] == "PO") {
            if (el["TYP"].split(",")[i] == "P") {
              seg[0].data[i].value = " ₹" + parseFloat(el["VAL"].split(",")[i] || 0) + (seg[0].data[i].price25.info ? seg[0].data[i].price25.info : seg[0].data[i].price.info);
            } else if (el["TYP"].split(",")[i] == "R") {
              seg[0].data[i].value = " ₹" + parseFloat(el["VAL"].split(",")[i] || 0) + (seg[0].data[i].rate25 ? seg[0].data[i].rate25.info : seg[0].data[i].rate.info);
            }
          } else {
            if (el["TYP"].split(",")[i] == "P") {
              seg[0].data[i].value = " ₹" + (seg[0].data[i].price.mul ? (parseFloat(el["VAL"].split(",")[i] || 0) * seg[0].data[i].price.mul).toString() : parseFloat(el["VAL"].split(",")[i] || 0)) + seg[0].data[i].price.info;
            } else if (el["TYP"].split(",")[i] == "R") {
              seg[0].data[i].value = " ₹" + parseFloat(el["VAL"].split(",")[i] || 0) + seg[0].data[i].rate.info;
            }
          }
        }
        if (seg[0]) {
          this.brokerageData.push(seg[0]);
        }
      });
      //    this.utils.updateBrokerageData(this.brokerageData)
    }, err => {
      this.brokerageLoader = false;
      this.brokerageData = [];
    });
  }
  /**Show Preference */
  showOrderPreferences() {
    if (this.userAccountStatus && this.userAccountStatus.onboardStatus === "MF") {
      this.utils.broadcast("generateSubs", {});
    } else {
      this.showOrderPreference = true;
      let isOrderConfirmPopup = this.utils.getUserId() ? this.utils.getPreferences("showConfirmationOrderPopup") || "show" : "show";
      this.isOrderConfirmPopup = isOrderConfirmPopup === "show" ? true : false;
      this.isKeepDraggableWindowOpen = (this.utils.getPreferences("keepDraggableWindowOpen") || "show") === "show" ? true : false;
      this.renderer.setStyle(document.body, "overflow", "hidden");
    }
  }
  saveOrderPreferenceToAPI(preference, preferenceKey) {
    let request = {
      preference_name: preferenceKey,
      preference_type: preferenceKey,
      client_id: this.utils.getUserId(),
      config: preference ? "show" : "hide",
      platform: "Web"
    };
    this.rest.saveUserPreference(request, true).subscribe(res => {
      if (res.status_code && res.status_code == 200) {}
    }, err => {});
  }
  onOrderLabelToggleChange(value, preferenceKey, preferenceVar) {
    this[preferenceVar] = value;
    localStorage.setItem(preferenceKey, this[preferenceVar] ? "show" : "hide");
    this.utils.updatePreference(preferenceKey, this[preferenceVar] ? "show" : "hide");
    this.saveOrderPreferenceToAPI(this[preferenceVar], preferenceKey);
  }
  onOrderChange(value, preferenceKey, preferenceVar) {
    this[preferenceVar] = value;
    this.utils.updatePreference(preferenceKey, this[preferenceVar] ? "show" : "hide");
    localStorage.setItem(preferenceKey, this[preferenceVar] ? "show" : "hide");
    this.saveOrderPreferenceToAPI(this[preferenceVar], preferenceKey);
  }
  /** to close brokerage popup */
  closeOrderPreferenceDetails() {
    this.showOrderPreference = false;
    this.renderer.setStyle(document.body, "overflow", "auto");
  }
  /**to open segment and services modification link */
  openModificationLink(type) {
    /**web by default redirection to be done on segment-modification hence static value for linkType */
    let payload;
    if (this.userAccountStatus && this.userAccountStatus.onboardStatus === "MF") {
      // this.utils.broadcast("generateSubs",{})
      payload = {
        clientId: this.utils.getUserId(),
        linkType: "address-modification",
        businessUnit: "MF",
        requestType: "client",
        platform: "Web"
      };
    } else {
      payload = {
        clientId: this.utils.getUserId(),
        linkType: type ? type + "-modification" : "segment-modification",
        businessUnit: "JF",
        requestType: "client",
        platform: "Web"
      };
    }
    this.isServiceHit = true;
    this.rest.getModificationURL(payload).subscribe(res => {
      if (res && Object.keys(res.Body).length != 0) {
        this.isServiceHit = false;
        if (res.Body.link) {
          const link = res.Body.link + "&platform=Web";
          let newUrl = location.origin + "/client/settings/" + this.utils.getUserId() + "/profile";
          window.history.pushState({}, null, newUrl);
          window.open(link, "_self");
        } else {
          this.utils.error("Error", "Link Not Found");
        }
      } else {
        this.isServiceHit = false;
        this.utils.error("Error", res.Message ? res.Message : "Something Went Wrong");
      }
    }, err => {
      this.isServiceHit = false;
      this.utils.error("Error", err.error.StatusCode == 422 ? err.error.Message : "Something went wrong, please try again.");
    });
  }
  // Download CML Report for client
  downloadCmlReport() {
    if (this.userAccountStatus && this.userAccountStatus.onboardStatus === "MF") {
      this.utils.broadcast("generateSubs", {});
    } else {
      const userAccountStatus = this.utils.getUserAccountStatus();
      const isGuestUser = !(!userAccountStatus || !userAccountStatus.onboardStatus || userAccountStatus.onboardStatus == "C");
      // Only converted client can have CML file 
      if (isGuestUser) {
        return void this.utils.broadcast("generateSubs", {});
      }
      if (!this.isLoggedWithSso) return;
      const payload = {
        reportType: "cml",
        searchBy: "client-id",
        searchValue: this.utils.getUserId() || ""
      };
      const options = {
        headers: {
          authorization: this.oauthService.getAccessToken() || "",
          source: "FINX_WEB",
          authType: "jwt"
        }
      };
      this.cmlLoader = true;
      this.rest.fetchCmlFile(options, payload).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.finalize)(() => {
        this.cmlLoader = false;
      })).subscribe(response => {
        if (response.statusCode === 200 && !!response?.body?.cmlLink) {
          const a = document.createElement("a");
          document.body.appendChild(a);
          a.href = response?.body?.cmlLink;
          a.click();
          // cleanup
          a.remove();
          this.utils.success("Success", "Download started, Files will be available in system download folder");
        } else if (response.statusCode === 204) {
          this.utils.error("Error", response?.body?.Message || "File Not Found!");
        } else {
          this.utils.error("Error", response?.message || "Something Went Wrong!");
        }
      }, err => {
        this.utils.error("Error", "Something Went Wrong!");
      });
    }
  }
  /**Fetch MF User profile Details */
  getMFProfileV2Details(userId) {
    this.isServiceHit = true;
    this.rest.getMFProfileV3({
      "InvCode": userId
    }).subscribe(res => {
      console.log('PROFILEV2 rsp', res);
      if (res && res.Response) {
        this.isServiceHit = false;
        let initials = this.profile.Name ? this.profile.Name.match(/\b\w/g) || [] : res.Response.FirstHolderName.match(/\b\w/g) || [];
        this.profile.initials = ((initials.shift() || "") + (initials.pop() || "")).toUpperCase();
        this.profile.Name = this.profile.Name || res.Response.FirstHolderName;
        this.profile.EmailID = this.profile.EmailID || res.Response.Email;
        this.profile.formattedMobileNo = this.profile.formattedMobileNo || res.Response.MobileNo ? res.Response.MobileNo.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3") : null;
        this.profile.PanCard = this.profile.PanCard || res.Response.FirstHolderPAN;
        this.profile.formattedAadharNo = this.profile.formattedAadharNo || null;
        this.profile.BOCode = this.profile.BOCode || null;
        this.profile.DPCode = this.profile.DPCode || null;
        this.profile.Address = this.profile.Address || res.Response?.Address1 + res.Response?.Address2;
        this.profile.allowedSegments = this.profile.allowedSegments || null;
        let totalBanks;
        // let totalBanks = this.profile.BankDetails?.concat(res.Response.Bank);
        if (this.profile.BankDetails && this.profile.BankDetails.length > 1) {
          totalBanks = this.profile.BankDetails?.concat(res.Response.Bank);
        } else {
          totalBanks = res.Response.Bank;
        }
        // Create a Map to filter out duplicates based on accNo
        let uniqueAccountsMap = new Map();
        totalBanks.forEach(item => {
          // Determine the account number key
          let accNum = item.BankAccountNo || item.accNum;
          // If the account number is not in the map, add it
          if (!uniqueAccountsMap.has(accNum)) {
            let temp = {
              "BankName": item.BankName || item.bank,
              "BankAccountNo": item.BankAccountNo || item.accNum,
              "Branch": item.Branch || item.branch,
              "IFSC": item.IFSC || item.ifsc,
              "IsDefault": item.IsDefault || (item.defaultFlag === 'Y' ? "Yes" : "No"),
              "BankSupportTo": item.BankSupportTo || null,
              "LastModifiedDate": item.LastModifiedDate || null
            };
            uniqueAccountsMap.set(accNum, temp);
          }
        });
        // Convert the Map values to an array
        let uniqueAccounts = Array.from(uniqueAccountsMap.values());
        this.profile.BankDetails = uniqueAccounts;
      } else {
        this.utils.error("Error", res.Message || res.Reason || "Something went wrong, please try again.");
      }
    }, error => {
      this.isServiceHit = false;
      this.utils.error("Error", error.error.Message || "Something went wrong, please try again.");
    });
  }
  /**
      * Life Cycle Hook for destruction
      */
  ngOnDestroy() {
    if (this.brokerageSubscription) {
      this.brokerageSubscription.unsubscribe();
      this.brokerageSubscription = null;
    }
  }
  static {
    this.ctorParameters = () => [{
      type: src_app_services_cryptography_service__WEBPACK_IMPORTED_MODULE_6__.CryptographyService
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
    }, {
      type: _services_rest_post_login_service__WEBPACK_IMPORTED_MODULE_2__.PostLoginService
    }, {
      type: _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__.SharedDataService
    }, {
      type: _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_4__.UtilsService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Renderer2
    }, {
      type: src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_5__.AnalyticsService
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute
    }, {
      type: angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_10__.OAuthService
    }];
  }
};
SettingsProfileComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: "app-settings-profile",
  template: _settings_profile_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule],
  styles: [(_settings_profile_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__metadata)("design:paramtypes", [src_app_services_cryptography_service__WEBPACK_IMPORTED_MODULE_6__.CryptographyService, _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router, _services_rest_post_login_service__WEBPACK_IMPORTED_MODULE_2__.PostLoginService, _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__.SharedDataService, _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_4__.UtilsService, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Renderer2, src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_5__.AnalyticsService, _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute, angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_10__.OAuthService])], SettingsProfileComponent);


/***/ }),

/***/ 77487:
/*!****************************************************************!*\
  !*** ./src/app/post-login-module/settings/settings.routing.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsRoutes: () => (/* binding */ SettingsRoutes)
/* harmony export */ });
/* harmony import */ var src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/guards/auth.guard */ 61620);
/* harmony import */ var _settings_password_settings_password_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings-password/settings-password.component */ 96202);
/* harmony import */ var _settings_profile_settings_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings-profile/settings-profile.component */ 90302);



const routeConfig = {
  header: true,
  footer: true,
  indices: false,
  betaFooter: false,
  ticker: true,
  watchlist: false,
  freshChat: false
};
const SettingsRoutes = [{
  path: ":userId/profile",
  component: _settings_profile_settings_profile_component__WEBPACK_IMPORTED_MODULE_2__.SettingsProfileComponent,
  canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  data: {
    config: routeConfig
  }
}, {
  path: "profile/:type",
  component: _settings_profile_settings_profile_component__WEBPACK_IMPORTED_MODULE_2__.SettingsProfileComponent,
  canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  data: {
    config: routeConfig
  }
}, {
  path: ":userId/changePassword",
  component: _settings_password_settings_password_component__WEBPACK_IMPORTED_MODULE_1__.SettingsPasswordComponent,
  canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  data: {
    config: {
      header: false,
      footer: false,
      indices: false,
      betaFooter: false,
      ticker: false,
      watchlist: false,
      watchlistHidden: true,
      freshChat: false
    },
    fullScreen: true
  }
}];

/***/ }),

/***/ 50786:
/*!**********************************************************************************************************!*\
  !*** ./src/app/post-login-module/settings/settings-password/settings-password.component.scss?ngResource ***!
  \**********************************************************************************************************/
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
.form-wrap {
  max-width: 386px;
  margin: 0 auto;
}
.form-wrap .security-sec .btn-security {
  color: #666;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border-radius: 4px;
  background: rgba(0, 67, 147, 0.16);
  border: 0;
  padding: 5px;
}
.form-wrap .security-sec .btn-security span {
  padding-left: 7px;
}
.form-wrap .security-sec p {
  margin: 0;
  padding-top: 15px;
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
}
.form-wrap .card {
  border-radius: 16px;
  margin-bottom: 50px;
  padding: 32px;
}
@media (max-width: 767px) {
  .form-wrap .card .mb-48 {
    margin-bottom: 48px;
  }
}
.form-wrap .card .btn-gradient {
  width: 100%;
  padding: 0.75rem 1.25rem;
  height: 48px;
  color: #FFF;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
.form-wrap .card .icon-center {
  text-align: center;
  margin-bottom: 24px;
}
.form-wrap .card .form-control2 {
  position: relative;
  width: 100%;
  height: 3rem;
  margin-top: 32px;
  margin-bottom: 16px;
}
.form-wrap .card .mrg-bottom {
  margin-bottom: 48px !important;
}
.form-wrap .card .mrg-top {
  margin-top: 32px;
}
.form-wrap .card .form-label {
  position: absolute;
  font-family: inherit;
  font-size: 15px;
  font-weight: 500;
  line-height: inherit;
  left: 1rem;
  top: 1rem;
  padding: 0 0.25rem;
  color: #333;
  background: #fff;
  transition: all 0.2s ease;
}
.form-wrap .card .form-input {
  position: absolute;
  font-family: inherit;
  font-size: 15px;
  font-weight: 500;
  line-height: inherit;
  top: 0;
  left: 0;
  z-index: 1;
  resize: none;
  width: 100%;
  height: 48px;
  padding: 0.75rem 1.25rem;
  border-radius: 6px;
  border: 1px solid #E3E3E3;
  color: #333;
  background: transparent;
  transition: all 0.2s ease-in-out;
}
.form-wrap .card .form-input::placeholder {
  opacity: 0;
  visibility: hidden;
  color: transparent;
}
.form-wrap .card .form-input:focus {
  outline: none;
  border: 2px solid #004393;
}
.form-wrap .card .form-input:focus ~ .form-label {
  top: -0.65rem;
  left: 1rem;
  z-index: 5;
  font-size: 12px;
  font-weight: 500;
  color: #004393;
  transition: all 0.2s ease-in-out;
}
.form-wrap .card .form-input:not(:placeholder-shown).form-input:not(:focus) ~ .form-label {
  top: -0.65rem;
  left: 1rem;
  z-index: 9;
  color: #333;
  font-size: 12px;
  font-weight: 400;
  transition: all 0.2s ease-in-out;
}
.form-wrap .card .form-input:-webkit-autofill ~ label {
  top: -0.65rem;
  left: 1rem;
  z-index: 9;
  color: #333;
  font-size: 12px;
  font-weight: 400;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}
.form-wrap .card .p-viewer {
  position: absolute;
  right: 2%;
  top: 25%;
}
.form-wrap .card .p-viewer .eye-btn {
  border: 0;
  background: transparent;
  font-size: 16px;
  color: #004393;
  cursor: pointer;
  z-index: 1;
}
.form-wrap .card .card-header-content h5 {
  color: #000;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
.form-wrap .card .card-header-content p {
  font-family: "SF Pro Display";
  color: #666;
  text-align: center;
  font-size: 15px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
}
.form-wrap .card .password-success {
  width: 140px;
  height: 140px;
  margin: 0 auto;
  background: aliceblue;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
}
.form-wrap .card .password-success .gif-check {
  width: 98px;
  height: 98px;
  display: block;
}
.form-wrap .card .pwd-success-content {
  margin: 36px 0 50px;
}
.form-wrap .btn-sign-up {
  margin: 0 0 30px 0;
  display: inline-block;
  vertical-align: top;
}
.form-wrap .form-group {
  margin-bottom: 30px;
}
.form-wrap .form-group label {
  color: #000000;
  font-size: 12px;
  font-weight: bold;
  line-height: 12px;
  margin-bottom: 10px;
  text-transform: uppercase;
}
.form-wrap .form-group .input-group {
  width: 100%;
  border: 1px solid #e3e3e3;
  padding: 0px 10px;
}
.form-wrap .form-group .input-group .form-control {
  border: none;
  border-radius: 0px;
  height: 60px;
  font-size: 16px;
  padding-left: 0px;
  padding-right: 0px;
  color: #000000;
  outline: none;
  background: transparent;
  box-shadow: none;
}
@media (max-width: 1550px) {
  .form-wrap .form-group .input-group .form-control {
    height: 40px;
    font-size: 14px;
  }
}
.form-wrap .form-group .input-group-addon {
  background: #ffffff;
  color: #c7c7c7;
  border-radius: 0px;
  font-size: 20px;
  border-color: #e3e3e3;
  border: none;
  padding-left: 0px;
}
.form-wrap .form-group .input-group-addon:first-child {
  border-right: 0;
}
.form-wrap .form-group .input-group-addon:last-child {
  padding-right: 0px;
  padding-left: 12px;
}
.form-wrap .form-group .input-group-addon button {
  padding: 0;
  background: transparent;
  box-shadow: none;
  color: #c7c7c7;
}
.form-wrap .alterwrap {
  background-color: #e8f0fe;
  border-radius: 4px;
  padding: 10px 22px;
  display: flex;
  align-items: center;
  width: 80%;
  margin: auto;
}
.form-wrap .alterwrap p {
  margin: 0 !important;
  text-align: justify;
  letter-spacing: 0;
  color: #444444;
  font-size: 12px;
  line-height: 18px;
  font-family: "SF Pro Display";
}
.form-wrap .alterwrap span {
  padding-right: 8px;
}`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 74902:
/*!********************************************************************************************************!*\
  !*** ./src/app/post-login-module/settings/settings-profile/settings-profile.component.scss?ngResource ***!
  \********************************************************************************************************/
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
@media (max-width: 992px) {
  .mrg-top {
    margin-top: 10px;
  }
}
.mrg-top .profile-block {
  padding: 25px;
}
@media (max-width: 1550px) {
  .mrg-top .profile-block {
    padding: 20px;
  }
}
.mrg-top .profile-block .initials {
  width: 100px;
  height: 100%;
  margin: 15px auto;
  color: #ffffff;
  font-weight: bold;
  text-align: center;
  line-height: 100px;
  border-radius: 100%;
  font-size: 30px;
  background: #004393;
}
.mrg-top .profile-block .profile-name {
  font-size: 18px;
  font-weight: bold;
  text-align: center;
}
.mrg-top .profile-block .left-nav ul {
  padding-left: 0px;
  list-style: none;
  margin-top: 50px;
}
.mrg-top .profile-block .left-nav ul li {
  text-transform: uppercase;
  color: #333333;
  padding: 15px 0;
  cursor: pointer;
}
.mrg-top .profile-block .left-nav ul li:hover {
  color: #004393;
}
.mrg-top .profile-block .left-nav ul li + li {
  border-top: 1px solid #F4F3F8;
}
.mrg-top .profile-details {
  padding: 50px;
}
@media (max-width: 1550px) {
  .mrg-top .profile-details {
    padding: 30px;
  }
}
@media (max-width: 767px) {
  .mrg-top .profile-details {
    padding: 20px;
  }
}
.mrg-top .profile-details h4 {
  font-weight: 700;
  margin: 0px;
}
.mrg-top .profile-details ul {
  padding-left: 0px;
  list-style: none;
  margin: 30px 0;
}
.mrg-top .profile-details ul:last-child {
  margin-bottom: 0px;
}
.mrg-top .profile-details ul li {
  color: #797979;
  padding: 15px 0;
  font-size: 16px;
  display: flex;
  column-gap: 15px;
}
@media (max-width: 1550px) {
  .mrg-top .profile-details ul li {
    font-size: 14px;
  }
}
@media (max-width: 767px) {
  .mrg-top .profile-details ul li {
    flex-wrap: wrap;
  }
}
.mrg-top .profile-details ul li + li {
  border-top: 1px solid #F4F3F8;
}
.mrg-top .profile-details ul li label {
  font-weight: normal;
  width: 165px;
  display: inline-block;
  vertical-align: middle;
  margin: 0;
  color: #333333;
}
.mrg-top .profile-details ul li span {
  width: calc(100% - 170px);
  display: inline-block;
  vertical-align: middle;
}
@media (max-width: 767px) {
  .mrg-top .profile-details ul li span {
    width: 100%;
  }
}
.mrg-top .profile-details ul .edit-address {
  display: flex;
}
.mrg-top .profile-details ul .edit-address .dis-flex {
  display: flex;
  align-items: center;
}
@media (max-width: 992px) {
  .mrg-top .profile-details ul .edit-address .dis-flex {
    align-items: flex-start;
    column-gap: 5px;
  }
}
.mrg-top .profile-details ul .edit-address .dis-flex .add-edit {
  margin-left: 1rem;
  cursor: pointer;
  font-size: 14px;
  color: #004393;
}
.mrg-top .bank-list {
  padding: 20px 20px 10px;
  border: 1px solid #F4F3F8;
  margin-top: 20px;
}
.mrg-top .bank-list h5 {
  margin: 0px;
  font-size: 16px;
  font-weight: bold;
}
.mrg-top .bank-list ul {
  margin-top: 0;
}
.mrg-top .pledge-link {
  color: #2d77f4;
  font-weight: bold;
  text-decoration: none;
  display: inline-block;
}
@media (max-width: 360px) {
  .mrg-top .pledge-link {
    margin-bottom: 15px;
  }
}
.mrg-top .pledge-link i {
  margin-right: 8px;
}
.mrg-top .brokerage {
  padding: 50px;
}
@media (max-width: 1550px) {
  .mrg-top .brokerage {
    padding: 30px;
  }
}
.mrg-top .brokerage ul {
  padding-left: 3px;
  list-style: none;
}
.mrg-top .brokerage ul:last-child {
  margin-bottom: 0px;
}
.mrg-top .brokerage ul li {
  padding: 15px 0;
  font-size: 12px;
  font-size: 15px;
}
@media (max-width: 1550px) {
  .mrg-top .brokerage ul li {
    font-size: 12px;
    font-size: 15px;
  }
}
.mrg-top .brokerage ul li + li {
  border-top: 1px solid #F4F3F8;
}
.mrg-top .brokerage ul li label {
  font-weight: normal;
  width: 165px;
  display: inline-block;
  vertical-align: middle;
  margin: 0;
}
.mrg-top .brokerage ul li span {
  color: #000000;
  width: calc(100% - 170px);
  display: inline-block;
  vertical-align: middle;
}

.form-wrap .card input:-webkit-autofill,
.form-wrap .card input:-webkit-autofill:hover,
.form-wrap .card input:-webkit-autofill:focus,
.form-wrap .card textarea:-webkit-autofill,
.form-wrap .card textarea:-webkit-autofill:hover,
.form-wrap .card textarea:-webkit-autofill:focus,
.form-wrap .card select:-webkit-autofill,
.form-wrap .card select:-webkit-autofill:hover,
.form-wrap .card select:-webkit-autofill:focus {
  -webkit-box-shadow: 0 0 0px 1000px #ffffff inset;
  -webkit-transition: background-color 5000s ease-in-out 0s;
  transition: background-color 5000s ease-in-out 0s;
}

.modification-loader {
  position: fixed;
  z-index: 99999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.font-bold {
  font-weight: 600;
}

.preference-container {
  display: flex;
  flex-wrap: wrap;
  gap: 18rem;
}
@media (max-width: 768px) {
  .preference-container {
    gap: 0;
  }
  .preference-container .preference-item {
    width: 100%;
  }
}

.c-flex-justify {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.loader-new {
  display: inline-block;
  border: 3px solid #F4F3F8;
  border-radius: 100%;
  border-top: 3px solid #000000;
  width: 20px;
  height: 20px;
  animation: spin 2s linear infinite;
}

.font-size-20 {
  font-size: 20px;
}

.bank-na {
  margin-left: 4rem;
}`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 88814:
/*!**********************************************************************************************************!*\
  !*** ./src/app/post-login-module/settings/settings-password/settings-password.component.html?ngResource ***!
  \**********************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"login-section\">\r\n  <div class=\"sso-new-header\">  <!-- SSO New Header-->\r\n    <div class=\"container\">\r\n      <div class=\"flx-header\">\r\n        <div class=\"logo-n\">\r\n          <div class=\"logo-img\">\r\n            <a\r\n              class=\"finx-logo\"\r\n              title=\"Home\"\r\n              href=\"https://choiceindia.com\"\r\n              >\r\n              <img\r\n                src=\"assets/images/finx-icons/logo-choice.svg\"\r\n\r\n                alt=\"Choice\"\r\n                class=\"img-logo\" width=\"167\" height=\"40\"\r\n                />\r\n              </a>\r\n            </div>\r\n            <div class=\"logo-img\">\r\n              <img\r\n                src=\"assets/images/finx-icons/finx-login-logo.svg\"\r\n\r\n                alt=\"Choice FinX - Online Trading Platform\"\r\n                class=\"img-logo logo-blur\" width=\"167\" height=\"40\"\r\n                />\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"faq-lnk\">\r\n              <a\r\n                href=\"https://choicebroking.freshdesk.com/support/home\"\r\n                target=\"_blank\"\r\n                >\r\n                <span\r\n                  >FAQ <img src=\"assets/images/finx-icons/faq-icon.svg\" alt=\"\" width=\"16\" height=\"16\"\r\n                /></span>\r\n              </a>\r\n            </div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"container\">\r\n        <div class=\"login-body\">\r\n          <div class=\"left-sec\">\r\n            <div class=\"login-captions\">\r\n              <div class=\"text-slick-slider\">\r\n                <div class=\"text-slider-items\">\r\n                  <div class=\"change\">\r\n                    <div class=\"slick-items\">\r\n                      <h3>Trading</h3>\r\n                      <img\r\n                        src=\"assets/images/finx-icons/trading.svg\"\r\n                        alt=\"\"\r\n                        class=\"img-responsive\" width=\"61\" height=\"48\"\r\n                        />\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"change\">\r\n                      <div class=\"slick-items\">\r\n                        <h3>Mutual Funds</h3>\r\n                        <img\r\n                          src=\"assets/images/finx-icons/mutual-funds.svg\"\r\n                          alt=\"\"\r\n                          class=\"img-responsive\" width=\"61\" height=\"48\"\r\n                          />\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"change\">\r\n                        <div class=\"slick-items\">\r\n                          <h3>Insurance</h3>\r\n                          <img\r\n                            src=\"assets/images/finx-icons/insurance.svg\"\r\n                            alt=\"Insurance\"\r\n                            class=\"img-responsive\" width=\"61\" height=\"48\"\r\n                            />\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"change\">\r\n                          <div class=\"slick-items\">\r\n                            <h3>Secured Products</h3>\r\n                            <img\r\n                              src=\"assets/images/finx-icons/secured-products.svg\"\r\n                              alt=\"\"\r\n                              class=\"img-responsive\" width=\"61\" height=\"48\"\r\n                              />\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <h3 class=\"title-details\">Explore all in one place</h3>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"right-sec\">\r\n                    <div class=\"login-card login-card-sso\">\r\n                      <div class=\"form-wrap\">\r\n                        @if (!pwdChangeSuccess) {\r\n                          <div class=\"\">\r\n                            <div class=\"row\">\r\n                              <div class=\"col-md-12\">\r\n                                <!-- <div class=\"icon-center\">\r\n                                <img src=\"assets/images/finx-icons/logo-icon.svg\" alt=\"\" >\r\n                              </div> -->\r\n                              <div class=\"card-header-content\">\r\n                                <h5>Change Password</h5>\r\n                                <p>\r\n                                  Your new password must be different from previous used\r\n                                  password\r\n                                </p>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <form\r\n                            name=\"changePasswordForm\"\r\n                            (ngSubmit)=\"changePassword(changePasswordForm)\"\r\n                            #changePasswordForm=\"ngForm\"\r\n                            >\r\n                            <div class=\"form-control2\">\r\n                              <!-- <span class=\"input-group-addon\">\r\n                              <i aria-hidden=\"true\" class=\"icon-lock\"></i>\r\n                            </span> -->\r\n                            <input\r\n                              tabindex=\"1\"\r\n                              type=\"{{ change.currentIsText ? 'text' : 'password' }}\"\r\n                              autofocus\r\n                              class=\"form-input\"\r\n                              [(ngModel)]=\"change.currentPassword\"\r\n                              placeholder=\"none\"\r\n                              #currentPwd\r\n                              name=\"currentPassword\"\r\n                              #currentPassword=\"ngModel\"\r\n                              required\r\n                              inputRestrict=\"password\"\r\n                              />\r\n                              <label for=\"currentPassword\" class=\"form-label\"\r\n                                >Current Password</label\r\n                                >\r\n                                <div class=\"p-viewer\">\r\n                                  <button\r\n                                    type=\"button\"\r\n                                    class=\"btn eye-btn\"\r\n                                    (click)=\"change.currentIsText = !change.currentIsText\"\r\n                                    >\r\n                                    @if (change.currentIsText) {\r\n                                      <i\r\n                                        class=\"fa icon-eye\"\r\n                                      ></i>\r\n                                    }\r\n                                    @if (!change.currentIsText) {\r\n                                      <i\r\n                                        class=\"fa icon-eye-slash\"\r\n                                      ></i>\r\n                                    }\r\n                                  </button>\r\n                                </div>\r\n                                @if (\r\n                                  currentPassword.invalid &&\r\n                                  currentPassword.dirty &&\r\n                                  currentPassword?.errors.required\r\n                                  ) {\r\n                                  <p\r\n                                    class=\"animate error\"\r\n                                    >\r\n                                    Current Password is Required.\r\n                                  </p>\r\n                                }\r\n                              </div>\r\n                              <div class=\"form-control2\">\r\n                                <!-- <span class=\"input-group-addon\">\r\n                                <i aria-hidden=\"true\" class=\"icon-lock\"></i>\r\n                              </span> -->\r\n                              <input\r\n                                tabindex=\"2\"\r\n                                type=\"{{ change.newIsText ? 'text' : 'password' }}\"\r\n                                class=\"form-input\"\r\n                                minlength=\"8\"\r\n                                maxlength=\"16\"\r\n                                [(ngModel)]=\"change.newPassword\"\r\n                                placeholder=\"none\"\r\n                                name=\"newPassword\"\r\n                                pattern=\"^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&^])[A-Za-z\\d@$!%*#?&^]{8,16}$\"\r\n                                #newPassword=\"ngModel\"\r\n                                required\r\n                                inputRestrict=\"password\"\r\n                                />\r\n                                <label for=\"newPassword\" class=\"form-label\"\r\n                                  >Create New Password</label\r\n                                  >\r\n                                  <div class=\"p-viewer\">\r\n                                    <button\r\n                                      type=\"button\"\r\n                                      class=\"btn eye-btn\"\r\n                                      (click)=\"change.newIsText = !change.newIsText\"\r\n                                      >\r\n                                      @if (change.newIsText) {\r\n                                        <i class=\"fa icon-eye\"></i>\r\n                                      }\r\n                                      @if (!change.newIsText) {\r\n                                        <i\r\n                                          class=\"fa icon-eye-slash\"\r\n                                        ></i>\r\n                                      }\r\n                                    </button>\r\n                                  </div>\r\n                                  @if (\r\n                                    newPassword.invalid &&\r\n                                    newPassword.dirty &&\r\n                                    newPassword?.errors.required\r\n                                    ) {\r\n                                    <p\r\n                                      class=\"animate error\"\r\n                                      >\r\n                                      New Password is Required.\r\n                                    </p>\r\n                                  }\r\n                                  @if (\r\n                                    change.currentPassword &&\r\n                                    change.newPassword &&\r\n                                    change.currentPassword === change.newPassword\r\n                                    ) {\r\n                                    <p\r\n                                      class=\"animate error\"\r\n                                      >\r\n                                      New Password cannot be same as Current Password.\r\n                                    </p>\r\n                                  }\r\n                                  @if (\r\n                                    newPassword.dirty &&\r\n                                    newPassword.invalid &&\r\n                                    change.newPassword &&\r\n                                    (newPassword?.errors?.pattern ||\r\n                                    newPassword?.errors?.minlength ||\r\n                                    newPassword?.errors?.maxlength)\r\n                                    ) {\r\n                                    <p\r\n                                      class=\"animate error\"\r\n                                      >\r\n                                      Please set an alphanumeric password (8-16 length) with one\r\n                                      special character from &#64;$!%*#?&^\r\n                                    </p>\r\n                                  }\r\n                                </div>\r\n                                <div class=\"form-control2\">\r\n                                  <!-- <span class=\"input-group-addon\">\r\n                                  <i aria-hidden=\"true\" class=\"icon-lock\"></i>\r\n                                </span> -->\r\n                                <input\r\n                                  tabindex=\"3\"\r\n                        type=\"{{\r\n                          change.confirmNewIsText ? 'text' : 'password'\r\n                        }}\"\r\n                                  class=\"form-input\"\r\n                                  minlength=\"8\"\r\n                                  maxlength=\"16\"\r\n                                  [(ngModel)]=\"change.confirmNewPassword\"\r\n                                  placeholder=\"none\"\r\n                                  name=\"confirmNewPassword\"\r\n                                  #confirmNewPassword=\"ngModel\"\r\n                                  pattern=\"^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&^])[A-Za-z\\d@$!%*#?&^]{8,16}$\"\r\n                                  required\r\n                                  inputRestrict=\"password\"\r\n                                  />\r\n                                  <label for=\"confirmNewPassword\" class=\"form-label\"\r\n                                    >Confirm New Password</label\r\n                                    >\r\n                                    <div class=\"p-viewer\">\r\n                                      <button\r\n                                        type=\"button\"\r\n                                        class=\"btn eye-btn\"\r\n                          (click)=\"\r\n                            change.confirmNewIsText = !change.confirmNewIsText\r\n                          \"\r\n                                        >\r\n                                        @if (change.confirmNewIsText) {\r\n                                          <i\r\n                                            class=\"fa icon-eye\"\r\n                                          ></i>\r\n                                        }\r\n                                        @if (!change.confirmNewIsText) {\r\n                                          <i\r\n                                            class=\"fa icon-eye-slash\"\r\n                                          ></i>\r\n                                        }\r\n                                      </button>\r\n                                    </div>\r\n                                    @if (\r\n                                      confirmNewPassword.invalid &&\r\n                                      confirmNewPassword.dirty &&\r\n                                      confirmNewPassword?.errors.required\r\n                                      ) {\r\n                                      <p\r\n                                        class=\"animate error\"\r\n                                        >\r\n                                        Confirm New Password is Required.\r\n                                      </p>\r\n                                    }\r\n                                    @if (\r\n                                      change.confirmNewPassword !== change.newPassword &&\r\n                                      confirmNewPassword.dirty\r\n                                      ) {\r\n                                      <p\r\n                                        class=\"animate error\"\r\n                                        >\r\n                                        New and Confirm Password not matching.\r\n                                      </p>\r\n                                    }\r\n                                    @if (\r\n                                      confirmNewPassword.dirty &&\r\n                                      newPassword.invalid &&\r\n                                      (confirmNewPassword?.errors?.pattern ||\r\n                                      confirmNewPassword?.errors?.minlength ||\r\n                                      confirmNewPassword?.errors?.maxlength)\r\n                                      ) {\r\n                                      <p\r\n                                        class=\"animate error\"\r\n                                        >\r\n                                        Please set an alphanumeric password (8-16 length) with one\r\n                                        special character from &#64;$!%*#?&^\r\n                                      </p>\r\n                                    }\r\n                                  </div>\r\n                                  <div class=\"form-control2\">\r\n                                    <button\r\n                                      type=\"submit\"\r\n                                      class=\"btn btn-gradient mrg-top\"\r\n                      [disabled]=\"\r\n                        !changePasswordForm.form.valid ||\r\n                        (change.currentPassword &&\r\n                          change.newPassword &&\r\n                          change.currentPassword === change.newPassword) ||\r\n                        change.confirmNewPassword !== change.newPassword ||\r\n                        shared.isServiceHit\r\n                      \"\r\n                                      >\r\n                                      Continue\r\n                                    </button>\r\n                                  </div>\r\n                                </form>\r\n                              </div>\r\n                            }\r\n                            @if (pwdChangeSuccess) {\r\n                              <div class=\"\">\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-md-12\">\r\n                                    <div class=\"password-success\">\r\n                                      <img\r\n                                        src=\"assets/images/finx-icons/check-success.gif\"\r\n                                        alt=\"\"\r\n                                        class=\"gif-check\"\r\n                                        />\r\n                                      </div>\r\n                                      <div class=\"pwd-success-content card-header-content\">\r\n                                        <h5>Password Changed Successfully!</h5>\r\n                                        <p>\r\n                                          Your password has been successfully changed. Click below\r\n                                          to login again.\r\n                                        </p>\r\n                                      </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-12\">\r\n                                      <button\r\n                                        type=\"button\"\r\n                                        class=\"btn btn-gradient\"\r\n                                        (click)=\"navigateToLogin()\"\r\n                                        >\r\n                                        Login Again\r\n                                      </button>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                              }\r\n                            </div>\r\n                          </div>\r\n                          <!-- <div class=\"security-sec\">\r\n                          <button type=\"button\" class=\"btn-security\">\r\n                            <svg\r\n                              width=\"9\"\r\n                              height=\"10\"\r\n                              viewBox=\"0 0 9 10\"\r\n                              fill=\"none\"\r\n                              xmlns=\"http://www.w3.org/2000/svg\"\r\n                              >\r\n                              <path\r\n                                id=\"Vector\"\r\n                                fill-rule=\"evenodd\"\r\n                                clip-rule=\"evenodd\"\r\n                                d=\"M1.55556 4.22222V2.88889C1.55556 2.12271 1.85992 1.38791 2.40169 0.846138C2.94346 0.304364 3.67827 0 4.44444 0C5.21062 0 5.94542 0.304364 6.4872 0.846138C7.02898 1.38791 7.33333 2.12271 7.33333 2.88889V4.22222H7.55556C8.29196 4.22222 8.88889 4.81916 8.88889 5.55556V8.66667C8.88889 9.40307 8.29196 10 7.55556 10H1.33333C0.596956 10 0 9.40307 0 8.66667V5.55556C0 4.81916 0.596956 4.22222 1.33333 4.22222H1.55556ZM3.3445 1.78895C3.63622 1.49722 4.03187 1.33333 4.44444 1.33333C4.85702 1.33333 5.25267 1.49722 5.5444 1.78895C5.83613 2.08067 6 2.47633 6 2.88889V4.22222H2.88889V2.88889C2.88889 2.47633 3.05278 2.08067 3.3445 1.78895Z\"\r\n                                fill=\"#666666\"\r\n                                />\r\n                              </svg>\r\n                              <span>Security Tip</span>\r\n                            </button>\r\n                            <p>\r\n                              Never share your PIN, OTP, or password with anyone. Choice will\r\n                              never request such details from you.\r\n                            </p>\r\n                          </div>\r\n                          <div class=\"login-footer\">\r\n                            <ul>\r\n                              <li>Term of Use</li>\r\n                              <li>Privacy Policy</li>\r\n                              <li>Disclaimer</li>\r\n                              <li>Beta T&C</li>\r\n                              <li>Support</li>\r\n                            </ul>\r\n                          </div> -->\r\n                          <div class=\"login-footer-fixed\">\r\n                            <div class=\"container\">\r\n                              <div class=\"footer-items\">\r\n                                <div class=\"security-sec\">\r\n                                  <button type=\"button\" class=\"btn-security\">\r\n                                    <svg\r\n                                      width=\"9\"\r\n                                      height=\"10\"\r\n                                      viewBox=\"0 0 9 10\"\r\n                                      fill=\"none\"\r\n                                      xmlns=\"http://www.w3.org/2000/svg\"\r\n                                      >\r\n                                      <path\r\n                                        id=\"Vector\"\r\n                                        fill-rule=\"evenodd\"\r\n                                        clip-rule=\"evenodd\"\r\n                                        d=\"M1.55556 4.22222V2.88889C1.55556 2.12271 1.85992 1.38791 2.40169 0.846138C2.94346 0.304364 3.67827 0 4.44444 0C5.21062 0 5.94542 0.304364 6.4872 0.846138C7.02898 1.38791 7.33333 2.12271 7.33333 2.88889V4.22222H7.55556C8.29196 4.22222 8.88889 4.81916 8.88889 5.55556V8.66667C8.88889 9.40307 8.29196 10 7.55556 10H1.33333C0.596956 10 0 9.40307 0 8.66667V5.55556C0 4.81916 0.596956 4.22222 1.33333 4.22222H1.55556ZM3.3445 1.78895C3.63622 1.49722 4.03187 1.33333 4.44444 1.33333C4.85702 1.33333 5.25267 1.49722 5.5444 1.78895C5.83613 2.08067 6 2.47633 6 2.88889V4.22222H2.88889V2.88889C2.88889 2.47633 3.05278 2.08067 3.3445 1.78895Z\"\r\n                                        fill=\"#666666\"\r\n                                        />\r\n                                      </svg>\r\n                                      <span>Security Tip</span>\r\n                                    </button>\r\n                                    <p>\r\n                                      Never share your PIN, OTP, or password with anyone. Choice\r\n                                      will never request such details from you.\r\n                                    </p>\r\n                                  </div>\r\n                                  <div class=\"login-footer\">\r\n                                    <ul>\r\n                                      <li>\r\n                                        <a routerLink=\"/links/terms-use\" target=\"_blank\">Term of Use</a>\r\n                                      </li>\r\n                                      <li>\r\n                                        <a routerLink=\"/links/privacy-policy\" target=\"_blank\"\r\n                                          >Privacy Policy</a\r\n                                          >\r\n                                        </li>\r\n                                        <li>\r\n                                          <a routerLink=\"/links/disclaimer\" target=\"_blank\">Disclaimer</a>\r\n                                        </li>\r\n                                        <li>\r\n                                          <a routerLink=\"/links/beta-terms-and-conditions\" target=\"_blank\"\r\n                                            >Beta T&C</a\r\n                                            >\r\n                                          </li>\r\n                                          <li><a routerLink=\"/links/support\" target=\"_blank\">Support</a></li>\r\n                                        </ul>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n";

/***/ }),

/***/ 69194:
/*!********************************************************************************************************!*\
  !*** ./src/app/post-login-module/settings/settings-profile/settings-profile.component.html?ngResource ***!
  \********************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "@if (isServiceHit) {\r\n  <div class=\"loader-wrapper modification-loader\">\r\n    <div class=\"circle\">\r\n      <div class=\"circle-min\"></div>\r\n    </div>\r\n  </div>\r\n}\r\n<!-- <pre>{{profile | json}}</pre> -->\r\n<div class=\"container-fluid mrg-top\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-4 col-xs-12\">\r\n      <div class=\"card\">\r\n        <div class=\"profile-block\">\r\n          <div class=\"initials\">\r\n            {{ profile.initials || \"NA\" }}\r\n          </div>\r\n          <div class=\"profile-name\">\r\n            {{ profile.Name || \"NA\" }}\r\n          </div>\r\n          <div class=\"left-nav\">\r\n            <ul>\r\n              <li (click)=\"gotoChangePassword()\">Change Password</li>\r\n              <!-- <li (click)=\"gotoChangePin()\">Change PIN</li> -->\r\n              <li (click)=\"getProfileData(true)\">Refresh Profile</li>\r\n              <li (click)=\"openOnboardingWindow('contact-details')\">\r\n                Modify Details\r\n              </li>\r\n              <li (click)=\"openModificationLink()\">\r\n                Segment & Service Modification\r\n              </li>\r\n              <li (click)=\"authorizePledge()\">Authorize Pledge</li>\r\n              <li (click)=\"showBrokeragePlan()\">Brokerage</li>\r\n              <li (click)=\"showPreferences()\">Chart Preference</li>\r\n              <li (click)=\"showOrderPreferences()\">Order Preference</li>\r\n              @if (isLoggedWithSso) {\r\n                <li class=\"c-flex-justify\" (click)=\"downloadCmlReport()\">\r\n                  <span>Client Master List (CML)</span>\r\n                  @if (cmlLoader) {\r\n                    <div class=\"loader-new\"></div>\r\n                  }\r\n                  @if (!cmlLoader) {\r\n                    <i class=\"fa fa-download font-size-20\" aria-hidden=\"true\"></i>\r\n                  }\r\n                </li>\r\n              }\r\n              @if (!profile?.POAStatus) {\r\n                <li\r\n                  (click)=\"openOnboardingWindow('enable-ddpi')\"\r\n                  >\r\n                  Enable DDPI\r\n                </li>\r\n              }\r\n              <!-- <li *ngIf=\"brokerageSlab?.length\" (click)=\"showBrokeragePlan()\">Brokerage Tariff</li> -->\r\n              <!-- <li (click)=\"openOnboardingWindow('contact-details')\">UPDATE CONTACT DETAILS</li>\r\n              <li (click)=\"openOnboardingWindow('segment-activation')\">ACTIVATE SEGMENTS</li>\r\n              <li (click)=\"openOnboardingWindow('bank-modification')\">ADD/MODIFY BANKS</li> -->\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-8 col-xs-12\">\r\n      <div class=\"card\">\r\n        <div class=\"profile-details\">\r\n          <h4>Personal Details</h4>\r\n          <ul>\r\n            <li>\r\n              <label>Client ID</label>\r\n              @if (userAccountStatus.onboardStatus != 'MF') {\r\n                <span>{{ shared.userId }}</span>\r\n              }\r\n              @if (userAccountStatus.onboardStatus === 'MF') {\r\n                <span>{{profile.MfDetails.clientId || 'NA'}}</span>\r\n              }\r\n            </li>\r\n            <li>\r\n              <label>Name</label>\r\n              <span>{{ profile?.Name || \"NA\" }}</span>\r\n            </li>\r\n            <li>\r\n              <label>Email ID</label>\r\n              <span>{{ profile?.EmailID || \"NA\" }}</span>\r\n            </li>\r\n            <li>\r\n              <label>Mobile Number</label>\r\n              <span>{{ profile?.formattedMobileNo || \"NA\" }}</span>\r\n            </li>\r\n            <li>\r\n              <label>PAN Card No.</label>\r\n              <span>{{ profile?.PanCard || \"NA\" }}</span>\r\n            </li>\r\n            <li>\r\n              <label>AADHAR Card No.</label>\r\n              <span>{{ profile?.formattedAadharNo || \"NA\" }}</span>\r\n            </li>\r\n            @if (profile?.BOCode) {\r\n              <li>\r\n                <label>Demat Account Number</label>\r\n                <span>{{ profile?.BOCode || \"NA\" }}</span>\r\n              </li>\r\n            }\r\n            @if (profile?.DPCode) {\r\n              <li>\r\n                <label>Depository Participant ID</label>\r\n                <span>{{ profile?.DPCode || \"NA\" }}</span>\r\n              </li>\r\n            }\r\n            <li class=\"edit-address\">\r\n              <label>Address</label>\r\n              <span class=\"dis-flex\"\r\n                >{{ profile?.Address || \"NA\" }}\r\n                <i\r\n                  class=\"icon-edit add-edit\"\r\n                  (click)=\"openModificationLink('address')\"\r\n                ></i>\r\n              </span>\r\n            </li>\r\n            <li>\r\n              <label>Allowed Exchanges</label>\r\n              <span>{{ profile?.allowedSegments || \"NA\" }}</span>\r\n            </li>\r\n          </ul>\r\n          <h4>Bank Details @if (!profile.BankDetails) {\r\n            <span class=\"bank-na\">NA</span>\r\n          } </h4>\r\n          <!-- <div class=\"bank-list\" >\r\n          <h5>NA</h5>\r\n        </div> -->\r\n\r\n        @for (item of profile.BankDetails; track item; let i = $index) {\r\n          <div\r\n            class=\"bank-list\"\r\n            >\r\n            <h5>Bank {{ i + 1 }}</h5>\r\n            <ul>\r\n              <li>\r\n                <label>Bank Name</label>\r\n                <span>{{ item?.BankName || \"NA\" }}</span>\r\n              </li>\r\n              <li>\r\n                <label>Bank Account No.</label>\r\n                <span>{{ item?.BankAccountNo || \"NA\" }}</span>\r\n              </li>\r\n              <li>\r\n                <label>Branch & IFSC</label>\r\n                <span>{{ item?.Branch }} ({{ item.IFSC || \"NA\" }})</span>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        }\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n<!-- brokerage (25/05/2021)-->\r\n@if (showBrokerage) {\r\n  <div class=\"dialog\">\r\n    <div class=\"dialog-content\">\r\n      <div class=\"dialog-header clearfix\">\r\n        <div class=\"col-md-12\">\r\n          <h4>Brokerage</h4>\r\n        </div>\r\n      </div>\r\n      <div class=\"dialog-section clearfix brokerage\">\r\n        <!-- style=\"padding: 0px;\" -->\r\n        @if (!brokerageLoader) {\r\n          <div>\r\n            @for (brokerage of brokerageData; track brokerage) {\r\n              <ul class=\"brokerage-list\">\r\n                <h5 class=\"brokerage-header\">{{ brokerage.seg }}</h5>\r\n                @for (item of brokerage.data; track item) {\r\n                  <li class=\"brokerage-item\">\r\n                    <label>{{ item.label }}</label>\r\n                    <small>{{ item?.value }}</small>\r\n                  </li>\r\n                }\r\n              </ul>\r\n            }\r\n          </div>\r\n        }\r\n        @if (brokerageLoader) {\r\n          <div>\r\n            <div class=\"d-flex justify-content-center loader-sec\">\r\n              <img src=\"../../../assets/images/loader.gif\" alt=\"Mobile-loader\" />\r\n            </div>\r\n          </div>\r\n        }\r\n        @if (!brokerageData.length && !brokerageLoader) {\r\n          <div\r\n            class=\"no-data-section\"\r\n            >\r\n            No data available\r\n          </div>\r\n        }\r\n        <div class=\"dialog-footer clearfix\">\r\n          <button class=\"btn sell\" (click)=\"closeDetails()\">Close</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n}\r\n\r\n<div class=\"dialog\" [hidden]=\"!pledgeConfig.pledgeModal\">\r\n  <div class=\"dialog-content\">\r\n    <div class=\"dialog-header clearfix\">\r\n      <div class=\"col-md-12\">\r\n        <h4>Authorize Pledge</h4>\r\n      </div>\r\n    </div>\r\n    <div class=\"dialog-section\" style=\"text-align: center\">\r\n      <div class=\"payin-transaction\">\r\n        <p>\r\n          You will be redirected to {{ pledgeConfig.depository }} portal in a\r\n          new window for authorizing the pledge\r\n        </p>\r\n        <p>\r\n          To know more about this,\r\n          <a\r\n            [routerLink]=\"['/links/collateral-margin-against-shares']\"\r\n            class=\"pledge-link\"\r\n            routerLinkActive=\"router-link-active\"\r\n            >Click here</a\r\n            >.\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"dialog-footer clearfix\">\r\n        <button class=\"btn sell\" (click)=\"closePledgeModal()\">CANCEL</button>\r\n        <button class=\"btn buy\" (click)=\"redirectToPortal()\">CONTINUE</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  @if (showPreference) {\r\n    <div class=\"dialog\">\r\n      <div class=\"dialog-content\">\r\n        <div class=\"dialog-header clearfix\">\r\n          <div class=\"col-md-12\">\r\n            <h4>Preferences</h4>\r\n          </div>\r\n        </div>\r\n        <div class=\"dialog-section clearfix brokerage\">\r\n          <div>\r\n            <h5>Chart Type</h5>\r\n            <div class=\"\">\r\n              <div class=\"switch-wrap\">\r\n                <label\r\n                  class=\"control-label mr-10\"\r\n                  [class.selected]=\"!isTradingChart\"\r\n                  (click)=\"onLabelToggleChange(false)\"\r\n                  >ChartIQ</label\r\n                  >\r\n                  <label class=\"switch\">\r\n                    <input\r\n                      type=\"checkbox\"\r\n                      name=\"isTradingChart\"\r\n                      [(ngModel)]=\"isTradingChart\"\r\n                      (change)=\"onChange(isTradingChart)\"\r\n                      />\r\n                      <div class=\"slider round\"></div>\r\n                    </label>\r\n                    <label\r\n                      class=\"control-label ml-10\"\r\n                      [class.selected]=\"isTradingChart\"\r\n                      (click)=\"onLabelToggleChange(true)\"\r\n                      >TradingView</label\r\n                      >\r\n                    </div>\r\n                  </div>\r\n                  <!--       <ul>\r\n                  <h5>Chart</h5>\r\n                  <li>\r\n                    <label>Label</label>\r\n                    <small>Small</small>\r\n                  </li>\r\n                </ul> -->\r\n              </div>\r\n              <div class=\"dialog-footer clearfix\">\r\n                <button class=\"btn sell\" (click)=\"closeDetails()\">Close</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      }\r\n\r\n      @if (showOrderPreference) {\r\n        <div class=\"dialog\">\r\n          <div class=\"dialog-content\">\r\n            <div class=\"dialog-header clearfix\">\r\n              <div class=\"col-md-12\">\r\n                <h4>Preferences</h4>\r\n              </div>\r\n            </div>\r\n            <div class=\"dialog-section clearfix brokerage\">\r\n              <div class=\"preference-container\">\r\n                <div class=\"preference-item\">\r\n                  <h5 class=\"font-bold\">Show order confirm alert</h5>\r\n                  <div class=\"\">\r\n                    <div class=\"switch-wrap\">\r\n                      <label\r\n                        class=\"control-label mr-10\"\r\n                        [class.selected]=\"!isOrderConfirmPopup\"\r\n                (click)=\"\r\n                  onOrderLabelToggleChange(\r\n                    false,\r\n                    'showConfirmationOrderPopup',\r\n                    'isOrderConfirmPopup'\r\n                  )\r\n                \"\r\n                        >No</label\r\n                        >\r\n                        <label class=\"switch\">\r\n                          <input\r\n                            type=\"checkbox\"\r\n                            name=\"isOrderConfirmPopup\"\r\n                            [(ngModel)]=\"isOrderConfirmPopup\"\r\n                  (change)=\"\r\n                    onOrderChange(\r\n                      isOrderConfirmPopup,\r\n                      'showConfirmationOrderPopup',\r\n                      'isOrderConfirmPopup'\r\n                    )\r\n                  \"\r\n                            />\r\n                            <div class=\"slider round\"></div>\r\n                          </label>\r\n                          <label\r\n                            class=\"control-label ml-10\"\r\n                            [class.selected]=\"isOrderConfirmPopup\"\r\n                (click)=\"\r\n                  onOrderLabelToggleChange(\r\n                    true,\r\n                    'showConfirmationOrderPopup',\r\n                    'isOrderConfirmPopup'\r\n                  )\r\n                \"\r\n                            >Yes</label\r\n                            >\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"preference-item\">\r\n                        <h5 class=\"font-bold\">Keep order window open</h5>\r\n                        <div class=\"\">\r\n                          <div class=\"switch-wrap\">\r\n                            <label\r\n                              class=\"control-label mr-10\"\r\n                              [class.selected]=\"!isKeepDraggableWindowOpen\"\r\n                (click)=\"\r\n                  onOrderLabelToggleChange(\r\n                    false,\r\n                    'keepDraggableWindowOpen',\r\n                    'isKeepDraggableWindowOpen'\r\n                  )\r\n                \"\r\n                              >No</label\r\n                              >\r\n                              <label class=\"switch\">\r\n                                <input\r\n                                  type=\"checkbox\"\r\n                                  name=\"isKeepDraggableWindowOpen\"\r\n                                  [(ngModel)]=\"isKeepDraggableWindowOpen\"\r\n                  (change)=\"\r\n                    onOrderChange(\r\n                      isKeepDraggableWindowOpen,\r\n                      'keepDraggableWindowOpen',\r\n                      'isKeepDraggableWindowOpen'\r\n                    )\r\n                  \"\r\n                                  />\r\n                                  <div class=\"slider round\"></div>\r\n                                </label>\r\n                                <label\r\n                                  class=\"control-label ml-10\"\r\n                                  [class.selected]=\"isKeepDraggableWindowOpen\"\r\n                (click)=\"\r\n                  onOrderLabelToggleChange(\r\n                    true,\r\n                    'keepDraggableWindowOpen',\r\n                    'isKeepDraggableWindowOpen'\r\n                  )\r\n                \"\r\n                                  >Yes</label\r\n                                  >\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"dialog-footer clearfix\">\r\n                            <button class=\"btn sell\" (click)=\"closeOrderPreferenceDetails()\">\r\n                              Close\r\n                            </button>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  }\r\n";

/***/ })

}]);