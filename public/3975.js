(self["webpackChunkjiffy_upgraded"] = self["webpackChunkjiffy_upgraded"] || []).push([[3975],{

/***/ 22230:
/*!***************************************************************************************************!*\
  !*** ./src/app/post-login-module/mutual-funds/investica-homepage/investica-homepage.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InvesticaHomepageComponent: () => (/* binding */ InvesticaHomepageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _investica_homepage_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./investica-homepage.component.html?ngResource */ 55974);
/* harmony import */ var _investica_homepage_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./investica-homepage.component.scss?ngResource */ 57402);
/* harmony import */ var _investica_homepage_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_investica_homepage_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-oauth2-oidc */ 1244);
/* harmony import */ var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/analytics/analytics.service */ 50213);
/* harmony import */ var src_app_services_api_urls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api-urls */ 26702);
/* harmony import */ var src_app_services_cryptography_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/cryptography.service */ 67224);
/* harmony import */ var src_app_services_rest_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/rest/common.service */ 18056);
/* harmony import */ var src_app_services_rest_onboarding_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/rest/onboarding.service */ 90004);
/* harmony import */ var src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/utils/utils.service */ 89893);













let InvesticaHomepageComponent = class InvesticaHomepageComponent {
  /**
   * Initialization
   * @param activeRoute
   * @param commonService
   * @param utils
   * @param router
   * @param apiURL
   * @param location
   * @param onboardingService
   */
  constructor(oauthService, activeRoute, commonService, utils, cryptography, router, apiURL, location, onboardingService, analytics) {
    this.oauthService = oauthService;
    this.activeRoute = activeRoute;
    this.commonService = commonService;
    this.utils = utils;
    this.cryptography = cryptography;
    this.router = router;
    this.apiURL = apiURL;
    this.location = location;
    this.onboardingService = onboardingService;
    this.analytics = analytics;
    this.isContinueOnboard = false;
    this.portingCount = 1;
    this.mfDetails = {};
  }
  ngOnInit() {
    this.utils.setTrackMoeEvent("visitedOpenMfAccount", {
      User_ID: this.utils.getUserId() || "guest",
      PAN: this.pan || ""
    });
    this.analytics.emitEvent("visitedOpenMfAccount", this.utils.getUserId() || "guest", JSON.stringify({
      PAN: this.pan || ""
    }), 1);
    this.activeRoute.queryParams.subscribe(param => {
      if (param["auto"] == "true") {
        this.isContinueOnboard = true;
      }
      this.redirectUrl = param["redirectUrl"] || "";
      if (this.redirectUrl) {
        if (this.utils.getMobileOperatingSystem() == "Android") {
          window.location.href = "https://play.google.com/store/apps/details?id=com.choiceequitybroking.jiffy";
          return;
        } else if (this.utils.getMobileOperatingSystem() == "iOS") {
          window.location.href = "https://itunes.apple.com/us/app/jiffy-mobile-trading-app/id1327801261?ls=1&mt=8";
          return;
        }
      }
    });
    this.activeRoute.params.subscribe(params => {
      let profile = this.utils.getProfile();
      if (params.pan || profile.PanCard) {
        this.status = params.type;
        this.pan = params.pan || profile.PanCard;
        //  if(!params.type)
        this.goToInvestica();
      } else {
        this.utils.put("navigateToMutualFunds", "true");
      }
    });
  }
  /**
   * Go To Mutual fund page
   * @param hideMessage Hide message
   */
  goTo(hideMessage) {
    this.isFetching = true;
    let profile = this.utils.getProfile();
    let onboardFlag = profile.MfDetails.OnBoardFlag;
    let userFlags = this.utils.getSpecificUserFlags();
    if (onboardFlag != "C") {
      let clientId = profile.ClientId ? profile.ClientId : profile.MfDetails && profile.MfDetails.DisplayCode ? profile.MfDetails.DisplayCode : "";
      this.commonService.getClientProfile(clientId).subscribe(data => {
        this.isFetching = false;
        if (data && data.StatusCode == 200 && data.Message == "Success" && data.Body.mfDetails) {
          this.mfDetails = data.Body.mfDetails;
          // this.mfDetails.deficiencyStatus = 'Y';
          if (data.Body.mfDetails.isOnBoardFlag && (this.status != data.Body.mfDetails.isOnBoardFlag || this.status == "C")) {
            let flag = data.Body.mfDetails.isOnBoardFlag;
            this.status = data.Body.mfDetails.isOnBoardFlag;
            if (flag == "C" || this.redirectUrl) {
              this.redirectUrl = userFlags && userFlags.acctnCreatedVia == "india-post" ? this.redirectUrl + "&acctnCreatedVia=" + this.cryptography.encryptText(userFlags.acctnCreatedVia) : this.redirectUrl;
              this.location.replaceState("/client/mutual-fund/" + this.pan + "/" + flag);
              localStorage.setItem("exeId", profile.MfDetails.BSEInvCode);
              let UserName = data.Body.mfDetails.userName ? this.cryptography.encryptText(data.Body.mfDetails.userName) : data.Body.mfDetails.userName;
              this.mfClientId = UserName;
              let Session = this.utils.getEncSessionId();
              let ClientId = this.mfDetails.clientID || profile.ClientId; //this.utils.getEncUserId();
              let callbackUrl = this.redirectUrl ? location.origin : location.href;
              let onBoardFlag = flag ? this.cryptography.encryptText(flag) : flag;
              let url = this.apiURL.getMFChoiceIndiaURL(UserName, Session, ClientId, this.utils.getEncUserId(), this.redirectUrl, callbackUrl, onBoardFlag);
              this.utils.setTrackMoeEvent("visitedMFWeb", {
                User_ID: this.utils.getUserId() || "guest",
                PAN: this.pan || ""
              });
              this.analytics.emitEvent("visitedMFWeb", this.utils.getUserId() || "guest", JSON.stringify({
                PAN: this.pan || ""
              }), 1);
              window.open(url, "_self");
            }
            if (flag == "Y" && !this.mfDetails.portingFailureReason && !this.mfDetails.portingStatus) {
              this.location.replaceState("/client/mutual-fund/" + this.pan + "/Y");
              // if (!hideMessage)
              //   this.utils.success('In Progress', 'Acount creation is already in-progress.');
            }
            if (flag == "N" && !this.mfDetails.portingFailureReason && !this.mfDetails.portingStatus) {
              this.location.replaceState("/client/mutual-fund/" + this.pan + "/N");
              // if (!hideMessage)
              //   this.utils.success('In Progress', 'Acount creation is already in-progress.');
            }
          } else {
            this.status = data.Body.mfDetails.isOnBoardFlag;
            this.location.replaceState("/client/mutual-fund/" + this.pan + "/F");
            if (this.redirectUrl) {
              this.redirectUrl = userFlags && userFlags.acctnCreatedVia == "india-post" ? this.redirectUrl + "&acctnCreatedVia=" + this.cryptography.encryptText(userFlags.acctnCreatedVia) : this.redirectUrl;
              let UserName = "";
              let Session = this.utils.getEncSessionId();
              let ClientId = this.mfDetails.clientID || profile.ClientId; //this.utils.getEncUserId();
              let callbackUrl = location.href;
              let onBoardFlag = "";
              let url = this.apiURL.getMFChoiceIndiaURL(UserName, Session, ClientId, this.utils.getEncUserId(), this.redirectUrl, callbackUrl, onBoardFlag);
              window.open(url, "_self");
            }
          }
          // if (data.Body.mfDetails.portingFailureReason)
          //   this.utils.error('Error', data.Body.mfDetails.portingFailureReason, 10000);
        } else {
          this.status = "F";
          this.location.replaceState("/client/mutual-fund/" + this.pan + "/F");
          if (this.redirectUrl) {
            this.redirectUrl = userFlags && userFlags.acctnCreatedVia == "india-post" ? this.redirectUrl + "&acctnCreatedVia=" + this.cryptography.encryptText(userFlags.acctnCreatedVia) : this.redirectUrl;
            let UserName = "";
            let Session = this.utils.getEncSessionId();
            let ClientId = profile.MfDetails && profile.MfDetails.DisplayCode ? profile.MfDetails.DisplayCode : profile.ClientId; //this.utils.getEncUserId();
            let callbackUrl = location.href;
            let onBoardFlag = "";
            let url = this.apiURL.getMFChoiceIndiaURL(UserName, Session, ClientId, this.utils.getEncUserId(), this.redirectUrl, callbackUrl, onBoardFlag);
            window.open(url, "_self");
          }
        }
      }, err => {
        this.isFetching = false;
        this.utils.error("Error", err.error.StatusCode == 422 ? err.error.Message : "Something went wrong, please try again.");
      });
    } else {
      if (onboardFlag == "C") {
        this.redirectUrl = userFlags && userFlags.acctnCreatedVia == "india-post" ? this.redirectUrl + "&acctnCreatedVia=" + this.cryptography.encryptText(userFlags.acctnCreatedVia) : this.redirectUrl;
        this.location.replaceState("/client/mutual-fund/" + this.pan + "/C");
        localStorage.setItem("exeId", profile.MfDetails.BSEInvCode);
        let UserName = this.cryptography.encryptText(profile.MfDetails.UserName || profile.MfDetails.DisplayCode);
        this.mfClientId = profile.MfDetails.UserName || profile.MfDetails.DisplayCode;
        let Session = this.utils.getEncSessionId();
        let ClientId = profile.MfDetails && profile.MfDetails.clientId ? profile.MfDetails.clientId : profile.ClientId; //this.utils.getEncUserId();
        let callbackUrl = location.origin;
        let url = this.apiURL.getMFChoiceIndiaURL(UserName, Session, ClientId, this.utils.getEncUserId(), this.redirectUrl, callbackUrl, this.cryptography.encryptText("C"));
        this.utils.setTrackMoeEvent("visitedMFWeb", {
          User_ID: this.utils.getUserId() || "guest",
          PAN: this.pan || ""
        });
        this.analytics.emitEvent("visitedMFWeb", this.utils.getUserId() || "guest", JSON.stringify({
          PAN: this.pan || ""
        }), 1);
        window.open(url, "_self");
      }
    }
  }
  goToInvestica() {
    let userAccountStatus = this.utils.getUserAccountStatus();
    let onboardStatus = !userAccountStatus || !userAccountStatus.onboardStatus || userAccountStatus.onboardStatus == 'C' || userAccountStatus.onboardStatus == 'MF' ? 'C' : userAccountStatus.onboardStatus;
    let isGuest = userAccountStatus && userAccountStatus.GuestUser;
    let userProfile = this.utils.getProfile();
    //Existing
    let selectedUser = localStorage.getItem('selectedUser') ? JSON.parse(localStorage.getItem('selectedUser')) : {};
    if (selectedUser && selectedUser.ProductType == 2) {
      let UserName = this.utils.getEncUserId();
      let Session = this.cryptography.encryptText(this.oauthService.getAccessToken());
      let mobNo = this.utils.getEncMobId();
      let ClientId = this.utils.getEncMobId(); //this.utils.getEncUserId();
      let userFlags = this.utils.getSpecificUserFlags();
      // this.redirectUrl =
      // userFlags && userFlags.acctnCreatedVia == "india-post"
      //   ? this.redirectUrl +
      //     "&acctnCreatedVia=" +
      //     this.cryptography.encryptText(userFlags.acctnCreatedVia)
      //   : this.redirectUrl;
      let callbackUrl = this.redirectUrl ? location.origin : location.href;
      let isExplore = false;
      let onBoardFlag = this.cryptography.encryptText('C');
      //this.cryptography.encryptText(userProfile.MfDetails.OnBoardFlag);
      // let userFlags = this.utils.getSpecificUserFlags();
      let decPan = userProfile && userProfile && userProfile.PanCard ? userProfile.PanCard : selectedUser ? selectedUser.PanNo : '';
      let pan = decPan ? this.cryptography.encryptText(decPan) : '';
      let url = this.apiURL.getMFChoiceIndiaURL(UserName, Session, ClientId, this.utils.getEncUserId() ? this.utils.getEncUserId() : this.utils.getEncMobId(), this.redirectUrl, callbackUrl, onBoardFlag, pan, isExplore, mobNo);
      url = userFlags && userFlags.acctnCreatedVia == "india-post" ? url + "&acctnCreatedVia=" + this.cryptography.encryptText(userFlags.acctnCreatedVia) : url;
      window.open(url, "_self");
    } else if (userProfile && userProfile.MfDetails && userProfile.MfDetails.OnBoardFlag && userProfile.MfDetails.OnBoardFlag == 'C') {
      let UserName = userProfile.MfDetails.DisplayCode ? this.cryptography.encryptText(userProfile.MfDetails.DisplayCode) : userProfile.MfDetails.DisplayCode;
      let accessTok = this.oauthService.getAccessToken();
      let Session = accessTok ? this.cryptography.encryptText(accessTok) : this.cryptography.encryptText(this.utils.getSessionId());
      let mobNo = userProfile && userProfile.MobileNo ? this.cryptography.encryptText(userProfile.MobileNo) : this.utils.getEncMobId();
      let ClientId = userProfile.MfDetails.clientId; //this.utils.getEncUserId();
      let userFlags = this.utils.getSpecificUserFlags();
      // this.redirectUrl =
      // userFlags && userFlags.acctnCreatedVia == "india-post"
      //   ? this.redirectUrl +
      //     "&acctnCreatedVia=" +
      //     this.cryptography.encryptText(userFlags.acctnCreatedVia)
      //   : this.redirectUrl;
      let callbackUrl = this.redirectUrl ? location.origin : location.href;
      let isExplore = userProfile.MfDetails.OnBoardFlag != 'C';
      let onBoardFlag = this.cryptography.encryptText(userProfile.MfDetails.OnBoardFlag);
      let decPan = userProfile && userProfile && userProfile.PanCard ? userProfile.PanCard : selectedUser ? selectedUser.PanNo : '';
      let pan = decPan ? this.cryptography.encryptText(decPan) : '';
      let url = this.apiURL.getMFChoiceIndiaURL(UserName, Session, ClientId, this.utils.getEncUserId(), this.redirectUrl, callbackUrl, onBoardFlag, pan, isExplore, mobNo);
      url = userFlags && userFlags.acctnCreatedVia == "india-post" ? url + "&acctnCreatedVia=" + this.cryptography.encryptText(userFlags.acctnCreatedVia) : url;
      window.open(url, "_self");
    } else if (isGuest) {
      let UserName = this.utils.getEncUserId();
      let Session = this.cryptography.encryptText(this.oauthService.getAccessToken()); //this.utils.getEncSessionId();
      let mobNo = this.utils.getEncMobId();
      let ClientId = this.utils.getUserId(); //this.utils.getEncUserId();
      let isExplore = onboardStatus != 'C';
      let onBoardFlag = this.cryptography.encryptText(onboardStatus);
      let decPan = userProfile && userProfile && userProfile.PanCard ? userProfile.PanCard : selectedUser ? selectedUser.PanNo : '';
      let pan = decPan ? this.cryptography.encryptText(decPan) : '';
      let userFlags = this.utils.getSpecificUserFlags();
      // this.redirectUrl =
      // userFlags && userFlags.acctnCreatedVia == "india-post"
      //   ? this.redirectUrl +
      //     "&acctnCreatedVia=" +
      //     this.cryptography.encryptText(userFlags.acctnCreatedVia)
      //   : this.redirectUrl;
      let callbackUrl = this.redirectUrl ? location.origin : location.href;
      let url = this.apiURL.getMFChoiceIndiaURL(UserName, Session, ClientId, this.utils.getEncUserId(), this.redirectUrl, callbackUrl, onBoardFlag, pan, isExplore, mobNo);
      url = userFlags && userFlags.acctnCreatedVia == "india-post" ? url + "&acctnCreatedVia=" + this.cryptography.encryptText(userFlags.acctnCreatedVia) : url;
      window.open(url, "_self");
    } else if (onboardStatus) {
      //WORK ON THIS
      let UserName = userProfile && userProfile && userProfile.DisplayCode ? this.cryptography.encryptText(userProfile.DisplayCode) : this.utils.getEncUserId() ? this.utils.getEncUserId() : this.utils.getEncMobId();
      let accessTok = this.oauthService.getAccessToken();
      let Session = accessTok ? this.cryptography.encryptText(accessTok) : this.cryptography.encryptText(this.utils.getSessionId());
      let mobNo = userProfile && userProfile.MobileNo ? this.cryptography.encryptText(userProfile.MobileNo) : this.utils.getEncMobId();
      let ClientId = userProfile && userProfile && userProfile.ClientId ? userProfile.ClientId : userProfile && userProfile.MobileNo ? userProfile.MobileNo : this.utils.getMobId(); //this.utils.getEncUserId();
      let userFlags = this.utils.getSpecificUserFlags();
      // this.redirectUrl =
      // userFlags && userFlags.acctnCreatedVia == "india-post"
      //   ? this.redirectUrl +
      //     "&acctnCreatedVia=" +
      //     this.cryptography.encryptText(userFlags.acctnCreatedVia)
      //   : this.redirectUrl;
      let callbackUrl = this.redirectUrl ? location.origin : location.href;
      let isExplore = onboardStatus != 'C';
      let onBoardFlag = this.cryptography.encryptText('CS'); //userProfile &&userProfile &&userProfile.onBoardFlag? this.cryptography.encryptText(userProfile.OnBoardFlag):this.cryptography.encryptText(onboardStatus);
      let decPan = userProfile && userProfile && userProfile.PanCard ? userProfile.PanCard : selectedUser ? selectedUser.PanNo : '';
      let pan = decPan ? this.cryptography.encryptText(decPan) : '';
      let url = this.apiURL.getMFChoiceIndiaURL(UserName, Session, ClientId, this.utils.getEncUserId(), this.redirectUrl, callbackUrl, onBoardFlag, pan, isExplore, mobNo);
      // url = (userFlags && userFlags.acctnCreatedVia == "india-post") ? url + "&acctnCreatedVia=" +
      // this.cryptography.encryptText(userFlags.acctnCreatedVia) : url;
      window.open(url, "_self");
    }
    // else if (userProfile && userProfile.PanCard) {
    //   this.utils.setTrackMoeEvent("visitedMFWeb", {
    //     UserId: this.utils.getUserId() || "",
    //     PAN: userProfile.PanCard,
    //   });
    //   this.router.navigate(["/client/mutual-fund/" + userProfile.PanCard]);
    // } 
    else {
      this.utils.error("PAN not present.", null);
    }
    //
  }
  openMFAcc(explore) {
    let profile = this.utils.getProfile();
    let userFlags = this.utils.getSpecificUserFlags();
    this.redirectUrl = userFlags && userFlags.acctnCreatedVia == "india-post" ? this.redirectUrl + "&acctnCreatedVia=" + this.cryptography.encryptText(userFlags.acctnCreatedVia) : this.redirectUrl;
    if (this.status == "C") {
      let UserName = profile.MfDetails.UserName || profile.MfDetails.DisplayCode;
      let Session = this.utils.getEncSessionId();
      let ClientId = profile.MfDetails && profile.MfDetails.clientId ? profile.MfDetails.clientId : profile.ClientId; //this.utils.getEncUserId();
      let callbackUrl = location.origin;
      UserName = UserName ? this.cryptography.encryptText(UserName) : UserName;
      let url = this.apiURL.getMFChoiceIndiaURL(UserName, Session, ClientId, this.utils.getEncUserId(), this.redirectUrl, callbackUrl, this.cryptography.encryptText("C"));
      this.utils.setTrackMoeEvent("visitedMFWeb", {
        User_ID: this.utils.getUserId() || "guest",
        PAN: this.pan || ""
      });
      this.analytics.emitEvent("visitedMFWeb", this.utils.getUserId() || "guest", JSON.stringify({
        PAN: this.pan || ""
      }), 1);
      window.open(url, "_self");
    }
    if ((this.status == "F" || this.status == "") && !explore) {
      this.isContinueOnboard = true;
    }
    if (explore && this.status != "C") {
      this.utils.setTrackMoeEvent("clickedOn", {
        buttonName: "MfObConsentExplore"
      });
      let profile = this.utils.getProfile();
      let userName = profile.MfDetails.UserName || profile.MfDetails.DisplayCode ? this.cryptography.encryptText(profile.MfDetails.UserName || profile.MfDetails.DisplayCode) : profile.MfDetails.UserName || profile.MfDetails.DisplayCode;
      let mobileNo = this.cryptography.encryptText(profile.MobileNo);
      let email = this.cryptography.encryptText(profile.EmailID);
      let pan = this.cryptography.encryptText(this.pan);
      let clientId = !this.status || this.status == "F" ? this.utils.getEncUserId() : this.mfDetails.clientID ? this.cryptography.encryptText(this.mfDetails.clientID) : this.utils.getEncUserId();
      let Session = this.utils.getEncSessionId();
      let status = this.status == "F" ? "" : this.status;
      let onboardFlag = status ? this.cryptography.encryptText(status) : status;
      let callbackUrl = location.origin + "/client/mutual-fund/" + profile.PanCard + "/" + this.status;
      let mfBaseUrl = location.hostname.indexOf("finx.choiceindia.com") > -1 && location.hostname.indexOf('betafinx.choiceindia.com') == -1 && location.hostname.indexOf('devfinx.choiceindia.com') == -1 ? "https://mf.choiceindia.com" : "https://uatmf.choicetechlab.com";
      window.open(mfBaseUrl + "/auto-login?callbackUrl=" + callbackUrl + "&UserName=" + encodeURIComponent(userName) + "&mobileNo=" + encodeURIComponent(mobileNo) + "&email=" + encodeURIComponent(email) + "&pan=" + encodeURIComponent(pan) + "&ClientId=" + encodeURIComponent(clientId) + "&Session=" + encodeURIComponent(Session) + "&explore=true&onboardFlag=" + encodeURIComponent(onboardFlag), "_self");
    }
    if (!explore && this.status == "N") {
      this.utils.setTrackMoeEvent("clickedOn", {
        buttonName: "MfPageActivateAccount"
      });
      let profile = this.utils.getProfile();
      let UserName = this.cryptography.encryptText(profile.Name),
        Session = this.cryptography.encryptText(this.utils.getSessionId()),
        ClientId = this.mfDetails.clientID; //this.cryptography.encryptText(this.utils.getUserId());
      let url = this.apiURL.getMFOnboardCopyURL(UserName, Session, ClientId, this.cryptography.encryptText(ClientId), this.status);
      window.open(url, "_blank");
    }
  }
  /**Onboarding Continue After OTP Verification */
  continueOnboard(flag) {
    this.isContinueOnboard = false;
    this.utils.setTrackMoeEvent("clickedOn", {
      buttonName: "MfObConsentProceed"
    });
    if (flag) {
      this.processing = true;
      this.JFMFPorting();
    }
  }
  JFMFPorting() {
    let profile = this.utils.getProfile();
    let payload = {
      panNumber: this.pan || profile.PanCard,
      clientId: this.utils.getUserId(),
      source: "FinXWeb"
    };
    // let count = 0;
    this.successMsg = "";
    this.portingFailureReason = "";
    if (this.portingCount <= 3) {
      this.processing = true;
      this.commonService.JFMFPorting(payload).subscribe(data => {
        this.processing = false;
        if (data.StatusCode == 200 || data.StatusCode == 202 && data.Body) {
          this.status = data.Body.isOnboardFlag;
          if (data.Body.continueOnboardingLink) {
            let UserName = this.cryptography.encryptText(profile.Name),
              Session = this.cryptography.encryptText(this.utils.getSessionId()),
              ClientId = this.cryptography.encryptText(data.Body.clientId);
            let url = data.Body.continueOnboardingLink + "?isDirectMFPorting=Y&&UserName=" + UserName + "&&Session=" + Session + "&&ClientId=" + ClientId;
            window.open(url, "_blank");
          } else {
            this.mfDetails["clientId"] = data.Body.clientId;
            this.utils.info("Attention", data.Body.message);
            // this.successMsg = data.Body.message;
          }
          // message which says to wait and refresh after sometime
          // this.utils.info("Attention", 'Your porting is in progress. Kindly refresh after some time to check updated status');
          // setTimeout(() => {
          //   this.goTo(true);
          // }, 60000);
        } else {
          this.portingCount++;
          this.JFMFPorting();
          if (this.portingCount == 3) {
            this.portingFailureReason = data.Message ? data.Message : "Something went wrong, please try again.";
            // this.utils.error("Error", data.Message ? data.Message : 'Something went wrong, please try again.');
          }
        }
      }, err => {
        this.portingCount++;
        this.JFMFPorting();
        this.processing = false;
        if (this.portingCount == 3) {
          this.portingFailureReason = err.error.StatusCode == 422 ? err.error.Message : "Something went wrong, please try again.";
          // this.utils.error("Error", err.error.StatusCode == 422 ? err.error.Message : 'Something went wrong, please try again.');
        }
      });
    } else {
      this.portingFailureReason = "Something went wrong. Please contact support";
      this.portingCount = 1;
      // this.utils.error("Error", 'Something went wrong. Please contact support');
    }
  }
  /**
   * Add new lead
   */
  addNewLead(callback) {
    let profile = this.utils.getProfile();
    //
    const request = {
      firstName: profile.Name,
      mobileNo1: profile.MobileNo,
      email1: profile.EmailID,
      serviceCode: "MF",
      referredId: null,
      leadSource: "FinXWeb",
      leadCityName: "OTHERS"
    };
    this.onboardingService.addNewLead(request).subscribe(res => {
      this.processing = false;
      //
      if (res && !res.errorCode && !res.error) {
        this.investicaUserRegister(res);
      } else if (res && (res.errorCode || res.error) && res.errorCode == "0009") {} else {
        this.utils.error("Error", res.message ? res.message : "Something went wrong, please try again.");
      }
    }, err => {
      this.processing = false;
      this.utils.error("Error", "Something went wrong, please try again.");
    });
  }
  /**
   * Generate random password
   * @returns
   */
  generatePassword(length) {
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      retVal = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
  }
  /**
   * Register investica User
   * @param res Payload
   */
  investicaUserRegister(resPayload, newClientId) {
    let profile = this.utils.getProfile();
    let mfId = newClientId ? newClientId : this.utils.getUserId();
    const request = {
      password: btoa(this.generatePassword(10)),
      // 10digit base 64
      investorAccountDetailsDtoList: [{
        clientID: mfId,
        // random generated
        referredID: "",
        //
        originalSource: "FinXWeb",
        isEmailVerified: "Y",
        isMobileVerified: "Y"
      }],
      investorDetailsDtoList: [{
        emailID: profile.EmailID,
        mobileNum: profile.MobileNo
      }],
      lid: resPayload.id,
      pannum: this.pan || profile.PanCard,
      entityId: resPayload.entityId,
      isPorting: "Y"
    };
    this.onboardingService.investicaUserRegister(request, resPayload.id).subscribe(res => {
      //
      if (res && !res.errorCode && !res.error) {
        let profile = this.utils.getProfile();
        let UserName = this.cryptography.encryptText(profile.Name),
          Session = this.cryptography.encryptText(this.utils.getSessionId()),
          ClientId = this.cryptography.encryptText(this.utils.getUserId());
        let url = this.apiURL.getMFOnboardCopyURL(UserName, Session, ClientId, this.cryptography.encryptText(ClientId), profile.MfDetails.OnBoardFlag);
        window.open(url, "_blank");
        setTimeout(() => {
          this.goToInvestica();
        }, 1000);
        // this.continueOnboard(true);
        this.utils.setTrackMoeEvent("visitedMFOnBoard", {
          User_ID: this.utils.getUserId() || "guest",
          PAN: this.pan || ""
        });
        this.analytics.emitEvent("visitedMFOnBoard", this.utils.getUserId() || "guest", JSON.stringify({
          PAN: this.pan || ""
        }), 1);
      } else if (res && (res.errorCode || res.error) && res.errorCode == "9999") {
        this.checkIfClientExists(this.pan, resPayload);
      } else {
        this.utils.error("Error", res.message ? res.message : "Something went wrong, please try again.");
      }
    }, err => {
      //
      this.utils.error("Error", "Something went wrong, please try again.");
    });
  }
  /**
   * If given clint id already exists
   * @deprecated
   */
  checkIfClientExists(pan, res) {
    this.commonService.getuserServiceDetailByPanURL(pan, "MF").subscribe(data => {
      if (data.StatusCode == 200 && data.Message == "Success") {
        this.investicaUserRegister(res, "JF" + this.generatePassword(6));
      } else {
        this.utils.error("Error", data.Message ? data.Message : "Something went wrong, please try again.");
      }
    }, err => {});
  }
  respondIssue() {
    let url = "https://accounts.choiceindia.com/onboard/mf/respond-issue?id=" + this.mfDetails.investorId;
    window.open(url, "_blank");
  }
  static {
    this.ctorParameters = () => [{
      type: angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_8__.OAuthService
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute
    }, {
      type: src_app_services_rest_common_service__WEBPACK_IMPORTED_MODULE_5__.CommonService
    }, {
      type: src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_7__.UtilsService
    }, {
      type: src_app_services_cryptography_service__WEBPACK_IMPORTED_MODULE_4__.CryptographyService
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
    }, {
      type: src_app_services_api_urls__WEBPACK_IMPORTED_MODULE_3__.APIURLs
    }, {
      type: _angular_common__WEBPACK_IMPORTED_MODULE_10__.Location
    }, {
      type: src_app_services_rest_onboarding_service__WEBPACK_IMPORTED_MODULE_6__.OnboardingService
    }, {
      type: src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_2__.AnalyticsService
    }];
  }
};
InvesticaHomepageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
  selector: "app-investica-homepage",
  template: _investica_homepage_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  imports: [],
  providers: [src_app_services_rest_onboarding_service__WEBPACK_IMPORTED_MODULE_6__.OnboardingService],
  styles: [(_investica_homepage_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__metadata)("design:paramtypes", [angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_8__.OAuthService, _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute, src_app_services_rest_common_service__WEBPACK_IMPORTED_MODULE_5__.CommonService, src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_7__.UtilsService, src_app_services_cryptography_service__WEBPACK_IMPORTED_MODULE_4__.CryptographyService, _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router, src_app_services_api_urls__WEBPACK_IMPORTED_MODULE_3__.APIURLs, _angular_common__WEBPACK_IMPORTED_MODULE_10__.Location, src_app_services_rest_onboarding_service__WEBPACK_IMPORTED_MODULE_6__.OnboardingService, src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_2__.AnalyticsService])], InvesticaHomepageComponent);


/***/ }),

/***/ 93975:
/*!************************************************************************!*\
  !*** ./src/app/post-login-module/mutual-funds/mutual-funds.routing.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MutualFundRoutes: () => (/* binding */ MutualFundRoutes)
/* harmony export */ });
/* harmony import */ var src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/guards/auth.guard */ 61620);
/* harmony import */ var _investica_homepage_investica_homepage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./investica-homepage/investica-homepage.component */ 22230);


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
const MutualFundRoutes = [{
  path: ":pan/:type",
  component: _investica_homepage_investica_homepage_component__WEBPACK_IMPORTED_MODULE_1__.InvesticaHomepageComponent,
  canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  data: {
    config: routeConfig,
    fullScreen: true
  }
}, {
  path: ":pan",
  component: _investica_homepage_investica_homepage_component__WEBPACK_IMPORTED_MODULE_1__.InvesticaHomepageComponent,
  canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  data: {
    config: routeConfig,
    fullScreen: true
  }
}, {
  path: "",
  pathMatch: "full",
  component: _investica_homepage_investica_homepage_component__WEBPACK_IMPORTED_MODULE_1__.InvesticaHomepageComponent,
  canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  data: {
    config: routeConfig,
    fullScreen: true
  }
}];

/***/ }),

/***/ 57402:
/*!****************************************************************************************************************!*\
  !*** ./src/app/post-login-module/mutual-funds/investica-homepage/investica-homepage.component.scss?ngResource ***!
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
.blog-banner {
  background: linear-gradient(to right, #6c87fc 0, #425cfa 100%);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  width: 100%;
  margin-bottom: 75px;
  margin-top: -30px;
  padding-bottom: 50px;
}

.pt-150 {
  padding-top: 150px;
}

.mb-30 {
  margin-bottom: 30px;
}

.text-center {
  text-align: center;
}

h1.seo-about {
  font-weight: 500;
  font-size: 48px;
  color: #fff;
  line-height: 55px;
  margin-bottom: 15px;
}

section {
  width: 100%;
  float: left;
}

#equity-form-wrap {
  width: 100%;
  float: left;
  padding: 40px 0;
  overflow-x: hidden;
}

.container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

.fadeInLeft {
  animation-name: fadeInLeft;
}

.animated {
  animation-duration: 1s;
  animation-fill-mode: both;
}

.catch-line-wrapper {
  width: 100%;
  float: left;
  text-align: center;
  padding: 0 0 20px !important;
}

.form-features {
  width: 100%;
  float: left;
  position: relative;
  font-size: 14px;
  line-height: 20px;
}

ol,
ul {
  list-style: none;
}

.form-features ul li {
  text-align: center;
}

#pitch-details-wrap {
  padding: 40px 0;
}

.carousel-inner > .item > a > img,
.carousel-inner > .item > img,
.img-responsive,
.thumbnail a > img,
.thumbnail > img {
  display: block;
  max-width: 100%;
  height: auto;
}

.pitch-titles {
  font-size: 20px;
  color: #48516c;
  margin: 20px 0;
  font-weight: 700;
}
.pitch-titles h5 {
  line-height: 20px;
}

.large-font {
  font-size: 50px;
  color: #48516c;
  font-weight: 700;
  margin: 10px 0;
  line-height: 40px;
}

.features-content {
  background: #ffffff;
  text-align: center;
  box-shadow: -1px 0 10px 5px rgba(241, 242, 255, 0.76);
  border-radius: 25px;
  padding: 20px;
  min-height: 455px;
}

.features-content img {
  margin: 10px auto;
  max-width: 100px;
}

.fl-ini {
  float: none !important;
}

.dialog-section {
  font-size: 15px;
}

li {
  font-size: 16px;
}

p {
  font-size: 14px;
}

.h5,
h5 {
  font-size: 14px;
  line-height: 24px;
  font-weight: 600;
}

.btn {
  padding: 5px 10px;
  font-family: "SFProText" !important;
  border-radius: 8px;
}
.btn:focus, .btn:active {
  outline: none !important;
}
.btn.btn-gradient, .btn.buy {
  border-radius: 0;
  border: 0;
  color: #ffffff;
  padding: 8px 15px;
  font-size: 14px;
  background: #004393;
  border-radius: 5px;
}
.btn.btn-gradient a, .btn.buy a {
  color: #ffffff;
  text-decoration: none;
}
.btn.btn-secondary {
  border-radius: 0;
  border: 0;
  color: #333333;
  padding: 8px 15px;
  font-size: 14px;
  background: rgba(96, 90, 90, 0.2509803922);
  border-radius: 5px;
}
.btn.btn-secondary a {
  color: #ffffff;
  text-decoration: none;
}
.btn.buy {
  padding: 8px 10px;
  text-align: center;
  font-size: 18px;
  float: right;
  margin-right: 14px;
}
@media (max-width: 1550px) {
  .btn.buy.funds {
    padding: 9px 1.5rem;
    font-size: 1.5rem;
  }
}
@media (max-width: 1440px) {
  .btn.buy {
    font-size: 14px;
  }
}
@media (max-width: 1200px) {
  .btn.buy {
    padding: 8px 10px;
  }
}
.btn.sell {
  padding: 8px 10px;
  text-align: center;
  border-radius: 5px;
  border: #ff8889 solid 1px;
  color: #fe7f7d;
  font-size: 18px;
  border: #004393 solid 1px;
  color: #004393;
  background-color: #ffffff;
  float: right;
  margin-right: 14px;
}
@media (max-width: 1550px) {
  .btn.sell {
    font-size: 14px;
  }
  .btn.sell.funds {
    padding: 8px 1.5rem;
    font-size: 1.5rem;
  }
}
@media (max-width: 1440px) {
  .btn.sell {
    font-size: 14px;
  }
}
@media (max-width: 1200px) {
  .btn.sell {
    padding: 8px 10px;
  }
}
.btn.inactiveSell {
  padding: 9px 20px;
  border-radius: 5px;
  background: #f8606c;
  border: #ff8889 solid 1px;
  color: #ffffff;
  opacity: 0.5;
  font-size: 20px;
  float: right;
  margin-right: 14px;
}
@media (max-width: 1550px) {
  .btn.inactiveSell {
    padding: 7px 15px;
    font-size: 18px;
  }
}
@media (max-width: 1200px) {
  .btn.inactiveSell {
    padding: 7px 10px;
  }
}
.btn.inactiveBuy {
  padding: 9px 20px;
  border-radius: 5px;
  border: #febf74 solid 1px;
  font-size: 20px;
  opacity: 0.5;
  color: #ffffff;
  background: #febf74;
  float: right;
  margin-right: 14px;
  border: #3E4152 solid 1px;
  background: #3E4152;
}
@media (max-width: 1550px) {
  .btn.inactiveBuy {
    padding: 7px 15px;
    font-size: 18px;
  }
}
@media (max-width: 1200px) {
  .btn.inactiveBuy {
    padding: 7px 10px;
  }
}
.btn.hold {
  padding: 9px 30px;
  border-radius: 0;
  font-size: 20px;
  opacity: 0.5;
  background: rgb(196, 189, 189);
  float: right;
  margin-right: 14px;
}
@media (max-width: 1550px) {
  .btn.hold {
    padding: 8px 25px;
    font-size: 18px;
  }
}
@media (max-width: 1200px) {
  .btn.hold {
    padding: 8px 10px;
  }
}

@font-face {
  font-display: swap;
  font-family: "SF Pro Display";
  src: url('SFProDisplay-Regular.eot');
  src: url('SFProDisplay-Regular.eot?#iefix') format("embedded-opentype"), url('SFProDisplay-Regular.woff2') format("woff2"), url('SFProDisplay-Regular.woff') format("woff"), url('SFProDisplay-Regular.ttf') format("truetype"), url('SFProDisplay-Regular.svg#SFProDisplay-Regular') format("svg");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
.sleekbox-overlay {
  z-index: 1000;
  font-size: 16px;
  display: flex;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  visibility: hidden;
  z-index: 0;
  background: rgba(62, 64, 79, 0.3019607843);
}
.sleekbox-overlay .sleekbox-popup {
  box-sizing: border-box;
  background: #fff;
  max-width: 834px;
  margin: 0 auto;
  border-radius: 8px;
  margin: 1rem auto;
  height: auto;
}
@media (max-width: 767px) {
  .sleekbox-overlay .sleekbox-popup {
    margin: 1rem 1rem;
  }
}
.sleekbox-overlay .sleekbox-popup .popup-sub-row {
  padding: 52px;
  text-align: center;
  display: flex;
}
@media (max-width: 767px) {
  .sleekbox-overlay .sleekbox-popup .popup-sub-row {
    padding: 20px;
    flex-direction: column;
  }
}
.sleekbox-overlay .sleekbox-popup .popup-sub-row .left-side-wrap {
  background-color: rgba(0, 176, 156, 0.0509803922);
  border-radius: 8px;
  border: 1px solid rgba(0, 176, 156, 0.3019607843);
  width: 45%;
  padding: 28px;
}
@media (max-width: 767px) {
  .sleekbox-overlay .sleekbox-popup .popup-sub-row .left-side-wrap {
    width: 100%;
  }
}
.sleekbox-overlay .sleekbox-popup .popup-sub-row .left-side-wrap .text {
  margin-top: 42px;
}
.sleekbox-overlay .sleekbox-popup .popup-sub-row .left-side-wrap .text .texthead {
  color: #333333;
  font-weight: 700;
  font-size: 18px;
  line-height: 16px;
  font-family: "SF Pro Display";
  padding-bottom: 10px;
}
.sleekbox-overlay .sleekbox-popup .popup-sub-row .left-side-wrap .text .subtxt {
  color: #333333;
  font-size: 14px;
  line-height: 20px;
  font-family: "SF Pro Display";
  font-weight: 500;
  letter-spacing: 0.17px;
}
.sleekbox-overlay .sleekbox-popup .popup-sub-row .right-side-wrap {
  width: 55%;
  margin-left: 50px;
}
@media (max-width: 767px) {
  .sleekbox-overlay .sleekbox-popup .popup-sub-row .right-side-wrap {
    width: 100%;
    margin-left: 0px;
    margin-top: 3rem;
  }
}
.sleekbox-overlay .sleekbox-popup .popup-sub-row .right-side-wrap .right-heading {
  color: #333333;
  font-size: 16px;
  line-height: 19px;
  font-family: "SF Pro Display";
  font-weight: 700;
  text-align: left;
}
.sleekbox-overlay .sleekbox-popup .popup-sub-row .right-side-wrap ul {
  list-style: none;
  text-align: left;
  padding-left: 0;
}
.sleekbox-overlay .sleekbox-popup .popup-sub-row .right-side-wrap ul li {
  font-size: 14px;
  color: #333333;
  line-height: 16px;
  font-family: "SF Pro Display";
  font-weight: 500;
  padding-bottom: 18px;
  display: flex;
  align-items: center;
}
@media (max-width: 767px) {
  .sleekbox-overlay .sleekbox-popup .popup-sub-row .right-side-wrap ul li {
    display: flex;
  }
}
.sleekbox-overlay .sleekbox-popup .popup-sub-row .right-side-wrap ul li span {
  background-color: #F1F3F4;
  border-radius: 10px;
  padding: 7px;
  margin-right: 14px;
}
.sleekbox-overlay .sleekbox-popup .popup-sub-row .right-side-wrap .proceed-btn {
  background-color: #004393;
  border-radius: 4px;
  color: #FFFFFF;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  font-weight: 600;
  font-family: "SFProText" !important;
  border: none;
  width: 100%;
  padding: 15px 0;
}
.sleekbox-overlay .sleekbox-popup .popup-sub-row .right-side-wrap .explore-btn {
  background-color: transparent;
  color: #004393;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  font-weight: 600;
  font-family: "SFProText" !important;
  border: none;
  width: 100%;
  padding: 15px 0;
}
.sleekbox-overlay.sleekbox-popup-active {
  opacity: 1;
  visibility: visible;
  z-index: 9999;
}

.loader-sec img {
  margin-bottom: 250px;
  height: 100px;
}

.text-danger1 {
  color: red;
}

.text-success {
  color: green;
}`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 55974:
/*!****************************************************************************************************************!*\
  !*** ./src/app/post-login-module/mutual-funds/investica-homepage/investica-homepage.component.html?ngResource ***!
  \****************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "@if (!redirectUrl) {\r\n  <section id=\"equity-form-wrap\" class=\"mrt-75\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-12\"></div>\r\n        <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-10 wow fadeInLeft animated\">\r\n          <div class=\"catch-line-wrapper\">\r\n            @if (\r\n              mfDetails?.deficiencyStatus != 'Y' &&\r\n              (!status || status == 'N' || status == 'F')\r\n              ) {\r\n              <h2\r\n                class=\"head-title\"\r\n                >\r\n                Add Mutual Funds!\r\n              </h2>\r\n            }\r\n            @if (mfDetails?.deficiencyStatus != 'Y' && status == 'Y') {\r\n              <h2\r\n                class=\"head-title\"\r\n                >\r\n                Activation in Progress\r\n              </h2>\r\n            }\r\n            @if (mfDetails?.deficiencyStatus != 'Y' && status == 'C') {\r\n              <h2\r\n                class=\"head-title\"\r\n                >\r\n                Start Investing\r\n              </h2>\r\n            }\r\n            @if (mfDetails?.deficiencyStatus == 'Y') {\r\n              <img\r\n                src=\"/assets/images/rejected.png\"\r\n                alt=\"rejected\"\r\n                />\r\n            }\r\n            <div class=\"br-line1 m-tb20 center-block\"></div>\r\n          </div>\r\n          @if (mfDetails?.deficiencyStatus != 'Y') {\r\n            <div class=\"form-features\">\r\n              <ul>\r\n                @if (!status || status == 'N' || status == 'F') {\r\n                  <li>\r\n                    Experience the Joy of Earning by adding Mutual funds too!\r\n                  </li>\r\n                }\r\n                @if (status == 'Y') {\r\n                  <li>\r\n                    MF Account KYC is in under verification\r\n                  </li>\r\n                }\r\n                @if (status == 'C') {\r\n                  <li>\r\n                    Diversify your holdings for a wealthy portfolio\r\n                  </li>\r\n                }\r\n              </ul>\r\n            </div>\r\n          }\r\n          @if (mfDetails?.deficiencyStatus == 'Y') {\r\n            <div class=\"form-features\">\r\n              <h4 class=\"text-center\"><b>Details Rejected</b></h4>\r\n              <p class=\"text-center\">\r\n                The details submitted by you needs your attention\r\n              </p>\r\n            </div>\r\n          }\r\n        </div>\r\n        <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\"></div>\r\n      </div>\r\n      <div class=\"col-xs-12 text-center center-block clearfix2 mt-20\">\r\n        @if (mfDetails?.deficiencyStatus == 'Y') {\r\n          <button\r\n            type=\"submit\"\r\n            (click)=\"respondIssue()\"\r\n            class=\"btn buy fl-ini\"\r\n            >\r\n            Check Now\r\n          </button>\r\n        }\r\n        <!-- <button type=\"submit\" (click)=\"goTo()\"\r\n        *ngIf=\"(mfDetails?.deficiencyStatus != 'Y' && mfDetails?.portingStatus !='failed' && mfDetails?.portingStatus)\"\r\n      class=\"btn buy fl-ini\">Check Status</button> -->\r\n      @if (mfDetails?.portingFailureReason || portingFailureReason) {\r\n        <p\r\n          class=\"text-danger1\"\r\n          >\r\n          Something went wrong. Kindly contact support\r\n          <a href=\"mailto:care@choiceindia.com\">care&#64;choiceindia.com</a>,\r\n          <span style=\"color: #004393\">88-2424-2424</span>\r\n        </p>\r\n      }\r\n      @if (successMsg) {\r\n        <p class=\"text-success\">{{ successMsg }}</p>\r\n      }\r\n      @if (\r\n        (mfDetails?.deficiencyStatus != 'Y' &&\r\n        !mfDetails?.portingFailureReason &&\r\n        status != 'Y') ||\r\n        (mfDetails?.deficiencyStatus != 'Y' &&\r\n        mfDetails?.portingStatus &&\r\n        mfDetails?.portingStatus == 'failed')\r\n        ) {\r\n        <button\r\n          type=\"submit\"\r\n          (click)=\"openMFAcc()\"\r\n        [disabled]=\"\r\n          status == 'Y' ||\r\n          (mfDetails?.portingStatus != 'failed' && mfDetails?.portingStatus) ||\r\n          processing ||\r\n          isFetching\r\n        \"\r\n          class=\"btn buy fl-ini\"\r\n          >\r\n          {{\r\n          processing\r\n          ? \"Processing..\"\r\n          : isFetching\r\n          ? \"Fetching..\"\r\n          : status == \"F\" ||\r\n          status == \"\" ||\r\n          !status ||\r\n          mfDetails?.portingStatus == \"failed\"\r\n          ? \"Activate Now\"\r\n          : status == \"C\"\r\n          ? \"Invest Now\"\r\n          : status == \"N\"\r\n          ? \"Continue with Activation\"\r\n          : \"In\r\n          Progress\"\r\n          }}\r\n        </button>\r\n      }\r\n      <!-- <button (click)=\"openMFAcc(true)\" *ngIf=\"(!status || status == 'F' || status == 'Y') && mfDetails?.deficiencyStatus != 'Y'\"\r\n      [disabled]=\"(processing || isFetching)\"\r\n      class=\"btn buy fl-ini btn-secondary\">{{processing?'Processing..':isFetching?'Fetching..':'Explore\r\n    MF'}}</button> -->\r\n  </div>\r\n</div>\r\n</section>\r\n}\r\n\r\n@if (!redirectUrl) {\r\n  <section id=\"keyfeatures-wrap\">\r\n    <div class=\"container\">\r\n      <div class=\"col-md-8 col-md-push-2 col-xs-12 padding-0 mb-20\">\r\n        <h2 class=\"head-title text-center\">\r\n          Why is Choice FinX the best Mutual Fund Investment Platform?\r\n        </h2>\r\n        <div class=\"br-line1 m-tb20 center-block\"></div>\r\n      </div>\r\n      <div class=\"col-md-12 col-xs-12 padding-0\">\r\n        <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12 padding00\">\r\n          <div class=\"features-content mb-15\">\r\n            <img\r\n              src=\"/assets/images/secured-mutual-fund-platform.png\"\r\n              class=\"img-responsive lazyload\"\r\n              alt=\"Secured Mutual Fund Platform\"\r\n              />\r\n              <h3>Data Security &amp; Transactions Safety</h3>\r\n              <p>\r\n                Personal & Mutual funds investment details completely secure. Key\r\n                Focus on data security & transaction safety. A+ SSL Certificate & a\r\n                256-Bit Encryption.\r\n              </p>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12 padding00\">\r\n            <div class=\"features-content mb-15\">\r\n              <img\r\n                src=\"/assets/images/mutual-fund-portfolio-management.png\"\r\n                class=\"img-responsive lazyload\"\r\n                alt=\"Mutual Fund Portfolio Management\"\r\n                />\r\n                <h3>Intelligent Portfolio Management</h3>\r\n                <p>\r\n                  Track your investment portfolio. Track your family's investment\r\n                  portfolio too!. Intelligent portfolio analysis for portfolios.\r\n                </p>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12 padding00\">\r\n              <div class=\"features-content\">\r\n                <img\r\n                  src=\"/assets/images/mutual-fund-sip-calculator.png\"\r\n                  class=\"img-responsive lazyload\"\r\n                  alt=\"Mutual Fund SIP Calculator\"\r\n                  />\r\n                  <h3>SIP Calculator with Basket Buying</h3>\r\n                  <p>\r\n                    Calculate investment with a scheme-wise dedicated SIP Calculator.\r\n                    Choice FinX recommends goal based bundles of mutual funds schemes.\r\n                  </p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </section>\r\n      }\r\n\r\n      @if (isContinueOnboard && !redirectUrl) {\r\n        <div\r\n          class=\"sleekbox-overlay sleekbox-popup-active\"\r\n          >\r\n          <div class=\"sleekbox-popup\">\r\n            <div class=\"popup-sub-row\">\r\n              <div class=\"left-side-wrap\">\r\n                <img src=\"../../../assets/images/consent-page/mutual-fund.png\" />\r\n                <div class=\"text\">\r\n                  <p class=\"texthead\">Set up Mutual Funds account</p>\r\n                  <p class=\"subtxt\">\r\n                    Hey there, we would be carry forwarding your existing data further\r\n                    to open Mutual funds account.\r\n                  </p>\r\n                </div>\r\n              </div>\r\n              <div class=\"right-side-wrap\">\r\n                <p class=\"right-heading\">Benefits</p>\r\n                <ul>\r\n                  <li>\r\n                    <span\r\n                      ><img\r\n                      src=\"../../../assets/images/consent-page/one-click.png\" /></span\r\n                      >One click account opening at no additional cost\r\n                    </li>\r\n                    <li>\r\n                      <span\r\n                        ><img\r\n                        src=\"../../../assets/images/consent-page/basket.png\" /></span\r\n                        >Basket for every Financial Goals\r\n                      </li>\r\n                      <li>\r\n                        <span\r\n                          ><img\r\n                          src=\"../../../assets/images/consent-page/recommendation.png\" /></span\r\n                          >Recommendations for Best performing schemes\r\n                        </li>\r\n                        <li>\r\n                          <span\r\n                            ><img src=\"../../../assets/images/consent-page/goal.png\" /></span\r\n                            >Custom Goal planner for your custom needs\r\n                          </li>\r\n                          <li>\r\n                            <span\r\n                              ><img src=\"../../../assets/images/consent-page/fund.png\" /></span\r\n                              >ELSS funds for Tax saving\r\n                            </li>\r\n                          </ul>\r\n                          <button class=\"proceed-btn\" (click)=\"continueOnboard(true)\">\r\n                            Proceed\r\n                          </button>\r\n                          <button class=\"explore-btn mt-3\" (click)=\"isContinueOnboard = false\">\r\n                            Cancel\r\n                          </button>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                }\r\n\r\n                @if (redirectUrl) {\r\n                  <div class=\"d-flex justify-content-center loader-sec\">\r\n                    <img src=\"../../../assets/images/loader.gif\" alt=\"loading\" />\r\n                  </div>\r\n                }\r\n";

/***/ })

}]);