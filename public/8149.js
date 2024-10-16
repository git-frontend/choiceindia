(self["webpackChunkjiffy_upgraded"] = self["webpackChunkjiffy_upgraded"] || []).push([[8149],{

/***/ 48149:
/*!****************************************************************************!*\
  !*** ./src/app/post-login-module/funds/pay-in-out/pay-in-out.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PayInOutComponent: () => (/* binding */ PayInOutComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _pay_in_out_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pay-in-out.component.html?ngResource */ 4083);
/* harmony import */ var _pay_in_out_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pay-in-out.component.scss?ngResource */ 14473);
/* harmony import */ var _pay_in_out_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pay_in_out_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-bootstrap/popover */ 69966);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 1807);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 70152);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 23294);
/* harmony import */ var src_app_services_cryptography_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/cryptography.service */ 67224);
/* harmony import */ var _services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/analytics/analytics.service */ 50213);
/* harmony import */ var _services_rest_post_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/rest/post-login.service */ 4135);
/* harmony import */ var _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/shared-data/shared-data.service */ 46013);
/* harmony import */ var _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/utils/utils.service */ 89893);
/* harmony import */ var _pipes_value_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../pipes/value.pipe */ 50615);
/* harmony import */ var _directives_show_focus_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../directives/show-focus.directive */ 57862);
















/** Component for Pay In and Pay out */
let PayInOutComponent = class PayInOutComponent {
  /**
   * Constructor for Object Initialization
   * @param router Router Module Instance
   * @param renderer Renderer2 Instance
   * @param postLoginService PostLoginService instance for HTTP Requests
   * @param formBuilder FormBuilder Instance
   * @param shared SharedDataService instance
   * @param utils UtilsService instance
   */
  constructor(analytics, cryptography, router, renderer, postLoginService, formBuilder, shared, utils) {
    this.analytics = analytics;
    this.cryptography = cryptography;
    this.router = router;
    this.renderer = renderer;
    this.postLoginService = postLoginService;
    this.formBuilder = formBuilder;
    this.shared = shared;
    this.utils = utils;
    this.countDecimals = function (value) {
      if (Math.floor(value) !== value) return value.toString().split(".")[1].length || 0;
      return 0;
    };
    this.userAccountStatus = {};
    //form intialization
    this.payoutMessage = {};
    this.payinMessage = "Now you can withdraw money to any of you linked bank accounts!";
    this.allowedSegmentArr = this.utils.segmentsAllowed();
    let isEquityAllowed = this.utils.isSegmentAllowed(1) || this.utils.isSegmentAllowed(2) || this.utils.isSegmentAllowed(4) || this.utils.isSegmentAllowed(3) || this.utils.isSegmentAllowed(13) || this.utils.isSegmentAllowed(38);
    // this.seletedSegment = (this.allowedSegmentArr.length > 0) ? this.allowedSegmentArr[0].SegmentId : undefined;
    let isCommodityAllowed = this.utils.isSegmentAllowed(5) || this.utils.isSegmentAllowed(7);
    let segments = {
      "NSE": "1",
      "NSEFO": "2",
      "BSEFO": "4",
      "BSE": "3",
      "MCX": "5",
      "NCDEX": "7",
      "NSECDS": "13",
      "BSECDS": "38"
    };
    this.seletedSegment = this.allowedSegmentArr.length > 0 ? this.allowedSegmentArr[0].SegmentId || segments[this.allowedSegmentArr[0]] : undefined;
    if (this.action == 0) {
      this.productType = this.seletedSegment == 1 || this.seletedSegment == 2 || this.seletedSegment == 3 || this.seletedSegment == 13 || this.seletedSegment == 4 || this.seletedSegment == 38 ? false : this.seletedSegment == 5 || this.seletedSegment == 7 ? true : false;
    } else {
      this.productType = isEquityAllowed ? false : !isEquityAllowed && isCommodityAllowed ? true : false;
    }
    let userProfile = this.utils.getProfileData() || {};
    this.payInConfig = {
      upiIdPattern: /[a-zA-Z0-9_]{3,}@[a-zA-Z]{3,}/,
      charges: 0,
      isProfileFetch: false,
      TotalMDRCharges: userProfile.TotalMDRCharges || 8.26,
      totalAmount: 0,
      amountThreshold: userProfile.MDRChargesApplicableFrom || 2000
    };
    this.payInpayOutForm = this.formBuilder.group({
      // productType: [{ value: this.productType, disabled: !isCommodityAllowed || !isEquityAllowed }, Validators.required],
      // segment: [this.seletedSegment, Validators.required],
      amount: [this.amount, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
      upiId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern(this.payInConfig.upiIdPattern)]],
      bankNamePayIn: [{
        value: this.bankName
      }, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
      bankNamePayout: [{
        value: this.bankName,
        disabled: true
      }, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
      bankAccountNumber: [{
        value: this.bankAccount,
        disabled: true
      }, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
      ifsc: [{
        value: this.ifsc,
        disabled: true
      }, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
      paymentType: [{
        value: this.paymentType
      }, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]
    });
    this.showNeft = {};
    this.showNeft["toggle"] = false;
    this.showNeft["showBankError"] = false;
    this.paymentType = "upi";
    this.bankDetails = [];
    this.subscriptionList = [];
    this.selectedBank = {};
  }
  /**
   * Life Cycle Hook for Initialization
   */
  ngOnInit() {
    let hours = new Date().getHours();
    this.isMidNight = hours >= 0 && hours <= 7;
    this.keyPressSubscription = this.utils.broadcastObservable("escapeKeyPressed").subscribe(() => {
      if (this.payoutResponse) {
        this.payoutResponse = null;
      }
    });
    this.subscriptionList.push(this.payInpayOutForm.get("upiId").valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.debounceTime)(800), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.distinctUntilChanged)()).subscribe(value => {
      if (value && value.trim().length && /[a-zA-Z0-9\._\-]{3,}@[a-zA-Z]{3,}/.test(value.trim())) {
        if (!this.userAccountStatus || !this.userAccountStatus.onboardStatus || this.userAccountStatus.onboardStatus == 'C') {
          this.checkUPIID(value.trim());
        }
      }
      this.payInConfig.VPAName = "";
    }));
    this.subscriptionList.push(this.payInpayOutForm.get("amount").valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.distinctUntilChanged)()).subscribe(value => {
      if (value && Number(value)) {
        if (this.countDecimals(value) > 2) {
          this.payInpayOutForm.get("amount").patchValue(value.toFixed(2));
        }
        // this.amount.toFixed(2)
        this.payInConfig.charges = value > this.payInConfig.amountThreshold ? this.payInConfig.TotalMDRCharges : 0;
        this.payInConfig.totalAmount = Number(value) + Number(this.payInConfig.charges);
      } else {
        this.payInConfig.charges = 0;
        this.payInConfig.totalAmount = 0;
      }
    }));
    this.subscriptionList.push(this.payInpayOutForm.get("paymentType").valueChanges.subscribe(value => {
      this.payInpayOutForm.get("upiId").clearValidators();
      if (value == "upi") {
        this.payInpayOutForm.get("upiId").setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern(this.payInConfig.upiIdPattern)]);
      } else {
        this.payInpayOutForm.get("upiId").setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern(this.payInConfig.upiIdPattern)]);
        this.payInpayOutForm.get("upiId").setErrors(null);
      }
      this.payInpayOutForm.get("upiId").updateValueAndValidity();
    }));
    this.subscriptionList.push(this.utils.broadcastObservable("payinTimedOut").subscribe(value => {
      if (value && this.intervalTimerSubscription) this.intervalTimerSubscription.unsubscribe();
    }));
  }
  checkUPIID(upiId) {
    this.payInConfig.loading = true;
    let request = {
      UserId: this.utils.getUserId(),
      SessionId: this.utils.getSessionId() || "",
      GroupId: this.utils.get("groupId"),
      UserVPA: upiId
    };
    this.postLoginService.checkVPA(request).subscribe(data => {
      if (data.Status == "Success" && data.Response) {
        if (data.Response.Status == "VE") {
          this.payInpayOutForm.get("upiId").setErrors(null);
          this.payInConfig.VPAName = data.Response.PayerAccountName;
        } else {
          this.payInpayOutForm.get("upiId").setErrors({
            notExist: true
          });
        }
      } else if (this.utils.isSessionExpired(data.Reason)) {
        this.close();
        if (this.shared.isSSO) {
          // this.utils.sessionExpireHandling()
          this.analytics.submitPayInPayOut("payIn error-Session Expired", request);
          return;
        }
        // this.utils.error("Session Expired", "Please Login Again");
        // this.utils.postFeatureCount();
        // this.utils.clearLoginDetails();
        // this.shared.userId = null;
        this.analytics.submitPayInPayOut("payIn error-Session Expired", request);
        // this.router.navigate(["auth/login"]);
      } else {
        this.payInpayOutForm.get("upiId").setErrors(null);
        this.payInConfig.VPAName = "      ";
      }
    }, err => {
      this.payInpayOutForm.get("upiId").setErrors(null);
      this.payInConfig.VPAName = "      ";
    }).add(() => {
      this.payInConfig.loading = false;
    });
  }
  ngOnDestroy() {
    this.subscriptionList.forEach(subscription => {
      if (subscription) subscription.unsubscribe();
    });
    if (this.keyPressSubscription) this.keyPressSubscription.unsubscribe();
    if (this.intervalTimerSubscription) this.intervalTimerSubscription.unsubscribe();
  }
  /**
   * Life Cycle Hook for Input Changes
   * @param changes SimpleChanges instance for incoming Changes
   */
  ngOnChanges(changes) {
    if (changes["action"] && changes["action"].currentValue) {
      this.action = changes["action"].currentValue;
    }
    if (changes["config"] && changes["config"].currentValue) {
      this.config = changes["config"].currentValue;
    }
    this.toggleProductType();
    if (this.action == 0) {
      /**if condition to prevent multiple api call for max balance incase of ngchanges */
      if (!this.modifyPayload) this.getMaxBalance();
      // this.payInpayOutForm.get('segment').setValidators(null);
      // this.payInpayOutForm.get('segment').updateValueAndValidity();
      // this.payInpayOutForm.get('productType').setValidators([Validators.required]);
      // this.payInpayOutForm.get('productType').updateValueAndValidity();
      this.payInpayOutForm.get("bankNamePayout").setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]);
      this.payInpayOutForm.get("bankNamePayout").updateValueAndValidity();
      this.payInpayOutForm.get("paymentType").setValidators(null);
      this.payInpayOutForm.get("paymentType").updateValueAndValidity();
      this.payInpayOutForm.get("bankNamePayIn").setValidators(null);
      this.payInpayOutForm.get("bankNamePayIn").updateValueAndValidity();
    } else {
      this.payInpayOutForm.get("paymentType").setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]);
      this.payInpayOutForm.get("paymentType").updateValueAndValidity();
      this.payInpayOutForm.get("bankNamePayIn").setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]);
      this.payInpayOutForm.get("bankNamePayIn").updateValueAndValidity();
      this.payInpayOutForm.get("bankNamePayout").setValidators(null);
      this.payInpayOutForm.get("bankNamePayout").updateValueAndValidity();
      // this.payInpayOutForm.get('segment').setValidators([Validators.required]);
      // this.payInpayOutForm.get('segment').updateValueAndValidity();
      // this.payInpayOutForm.get('productType').setValidators(null);
      // this.payInpayOutForm.get('productType').updateValueAndValidity();
    }
    setTimeout(() => {
      let feature = this.utils.getFeatureCount("walkthrough");
      // this.shared.params && this.shared.params.successLogin
      if (this.action == 0 && !feature.multipleBankPayoutFeature) {
        if (this.withdrawPopup) {
          this.withdrawPopup.show();
          feature["multipleBankPayoutFeature"] = true;
          this.utils.updateFeatureWalkthrough(feature);
        }
      }
    }, 500);
  }
  /**
   * Prevent Decimal in Amount on Key press
   * @param event KeyPress Event
   */
  preventDecimalAndMax(event) {
    let data = this.amount || 50;
    let key = event.keyCode || event.charCode;
    return key >= 48 && key <= 57;
  }
  // (paste)="onPaste($event)"
  // public onPaste(event:ClipboardEvent){
  //  //
  //   let clipboardData = event.clipboardData;
  //  //
  // //
  //   let text=clipboardData.getData('text')
  // if(!isNaN(Number(text))&&(text.indexOf('.')>-1)){
  //  return false
  // }
  //   /* if(event.target.value && (event.target.value.indexOf('.')>-1)){
  //
  //   } */
  //   //
  // }
  getProfileData() {
    let request = {
      UserId: this.utils.getUserId(),
      SessionId: this.utils.getSessionId() || "",
      GroupId: this.utils.get("groupId")
    };
    this.payInConfig.isProfileFetch = true;
    this.postLoginService.getProfile(request).subscribe(data => {
      if (data.Status === "Success" && data.Response) {
        let profile = data.Response || {};
        if (profile.Name) {
          let initials = profile.Name.match(/\b\w/g) || [];
          profile.initials = ((initials.shift() || "") + (initials.pop() || "")).toUpperCase();
        }
        if (profile.MobileNo) {
          profile.formattedMobileNo = profile.MobileNo.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
        }
        if (profile.AadharNo) {
          profile.formattedAadharNo = profile.AadharNo.replace(/(\d{4})(\d{4})(\d{4})/, "$1 $2 $3");
        }
        let bank = profile.BankDetails.filter(bank => {
          return bank.IsDefault == "Yes";
        });
        profile = {
          ...profile,
          ...(bank[0] || {})
        };
        profile.allowedSegments = this.utils.segmentsAllowed().map(item => item.ExchangeSegment).join(" | ");
        this.utils.saveProfile(profile);
        this.bankAcoountDetails = this.utils.getProfileData() || {};
        this.bankDetails = this.bankAcoountDetails["BankDetails"] || [];
        let setBank = this.bankDetails.filter(obj => {
          return obj.IsDefault == "Yes";
        });
        this.selectedBank = setBank[0];
        this.bankName = this.selectedBank["BankName"] + "_" + this.selectedBank["BankAccountNo"];
        this.bankAccount = this.selectedBank["BankAccountNo"];
        this.ifsc = this.selectedBank["IFSC"];
        this.utils.setUserAttributes(data.Response); // to set moengage user attribute (21/06/2021)
        // } else if (this.utils.isSessionExpired(data.Reason)) {
        //   if (this.shared.isSSO) {
        //     this.utils.sessionExpireHandling()
        //     return
        //   }
        //   this.utils.error("Session Expired", "Please Login Again");
        //   this.utils.postFeatureCount();
        //   this.utils.clearLoginDetails();
        //   this.shared.userId = null;
        //   this.router.navigate(["auth/login"]);
      } else {
        this.utils.error("Error", data.Reason);
      }
      setTimeout(() => this.payInConfig.isProfileFetch = false, 1000);
    }, err => {
      setTimeout(() => this.payInConfig.isProfileFetch = false, 1000);
    });
  }
  /**
   * Open the Component drawer
   * @param modifyPayoutData : if modify payout request is made
   */
  open(modifyPayoutData) {
    if (modifyPayoutData) {
      this.getMaxBalance();
      this.modifyPayload = modifyPayoutData;
      /**if payout modification request is done then execute this block */
      this.isBankDisabled = true;
      // this.payInpayOutForm.get('amount').patchValue(modifyPayoutData.Amount)
      // this.amount = modifyPayoutData.Amount || 0;
      // this.bankAccount = changes["config"].currentValue.ClientBankAccNo + '679'
      //  console.log('BACCCCDTAILS',this.bankAcoountDetails);
      //  console.log('BAKDETALL',this.bankDetails);
      this.bankDetails.filter((item, index) => {
        if (item.BankAccountNo == modifyPayoutData.ClientBankAccNo) {
          this.bankAccount = modifyPayoutData.ClientBankAccNo;
          // this.bankName = item.BankName;
          this.bankName = item.BankName + "_" + modifyPayoutData.ClientBankAccNo;
          // this.payInpayOutForm.get('bankNamePayIn').patchValue(item.BankName)
        }
      });
      this.payInpayOutForm.get("bankNamePayout").setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]);
      this.payInpayOutForm.get("bankNamePayout").updateValueAndValidity();
      this.payInpayOutForm.get("paymentType").setValidators(null);
      this.payInpayOutForm.get("paymentType").updateValueAndValidity();
      this.payInpayOutForm.get("bankNamePayIn").setValidators(null);
      this.payInpayOutForm.get("bankNamePayIn").updateValueAndValidity();
      this.payInpayOutForm.get("amount").markAsPristine();
    }
    this.userAccountStatus = this.utils.getUserAccountStatus();
    if (!(!this.userAccountStatus || !this.userAccountStatus.onboardStatus || this.userAccountStatus.onboardStatus == 'C')) {
      this.isOpened = true;
      return;
    }
    this.paymentType = "upi";
    this.hasFocus = false;
    this.bankAcoountDetails = this.utils.getProfileData() || {};
    this.bankDetails = this.bankAcoountDetails["BankDetails"] || [];
    let setBank = this.bankDetails.filter(obj => {
      return obj.IsDefault == "Yes";
    });
    this.selectedBank = setBank[0];
    this.bankName = this.selectedBank["BankName"] + "_" + this.selectedBank["BankAccountNo"];
    this.bankAccount = this.selectedBank["BankAccountNo"];
    let isEquityAllowed = this.utils.isSegmentAllowed(1) || this.utils.isSegmentAllowed(2) || this.utils.isSegmentAllowed(3) || this.utils.isSegmentAllowed(13) || this.utils.isSegmentAllowed(4) || this.utils.isSegmentAllowed(38);
    let segments = {
      "NSE": "1",
      "NSEFO": "2",
      "BSEFO": "4",
      "BSE": "3",
      "MCX": "5",
      "NCDEX": "7",
      "NSECDS": "13",
      "BSECDS": "38"
    };
    this.seletedSegment = this.allowedSegmentArr.length > 0 ? this.allowedSegmentArr[0].SegmentId || segments[this.allowedSegmentArr[0]] : undefined;
    let isCommodityAllowed = this.utils.isSegmentAllowed(5) || this.utils.isSegmentAllowed(7);
    this.ifsc = this.selectedBank["IFSC"];
    this.seletedSegment = this.allowedSegmentArr.length > 0 ? this.allowedSegmentArr[0].SegmentId || segments[this.allowedSegmentArr[0]] : undefined;
    if (this.action == 0) {
      this.productType = this.seletedSegment == 1 || this.seletedSegment == 2 || this.seletedSegment == 3 || this.seletedSegment == 13 || this.seletedSegment == 4 || this.seletedSegment == 38 ? false : this.seletedSegment == 5 || this.seletedSegment == 7 ? true : false;
    } else {
      this.productType = isEquityAllowed ? false : !isEquityAllowed && isCommodityAllowed ? true : false;
      // if(this.action!=1)this.getMaxBalance();
    }
    this.isOpened = true;
    this.renderer.setStyle(document.body, "overflow", "hidden");
    this.showNeft["showBankError"] = false;
    this.showNeft["errorText"] = "";
    //this.renderer.addClass(document.body,'modal_open');
  }
  getMaxBalance() {
    this.userAccountStatus = this.utils.getUserAccountStatus();
    if (!(!this.userAccountStatus || !this.userAccountStatus.onboardStatus || this.userAccountStatus.onboardStatus == 'C')) {
      return;
    }
    let request = {
      UserId: this.utils.getUserId(),
      GroupId: this.utils.get("groupId"),
      Amount: 0,
      ProductType: this.productType ? 2 : 1,
      SessionId: this.utils.getSessionId() || "",
      BankAccNo: (this.bankAccount || "").trim()
    };
    this.payoutMessage = null;
    this.postLoginService.getPayoutBalanceDetails(request, 'V2').subscribe(res => {
      if (res.Status == "Success" && res.Response) {
        this.threshold = res.Response.PayoutBalance || 0;
        this.payoutMessage = {};
        this.payoutMessage.first = res.Response.Time;
        this.payoutMessage.last = res.Response.Date;
        if (this.modifyPayload) this.amount = this.modifyPayload.Amount;
      } else if (this.utils.isSessionExpired(res.Reason)) {
        this.close();
        if (this.shared.isSSO) {
          // this.utils.sessionExpireHandling()
          this.analytics.submitPayInPayOut("payIn error-Session Expired", request);
          return;
        }
        // this.utils.error("Session Expired", "Please Login Again");
        // this.utils.postFeatureCount();
        // this.utils.clearLoginDetails();
        // this.shared.userId = null;
        this.analytics.submitPayInPayOut("payIn error-Session Expired", request);
        // this.router.navigate(["auth/login"]);
      } else {
        this.utils.error("Error", "Something Wengt Wrong");
      }
    }, err => {});
  }
  /**
   * When user select bank from dropdown
   * @param value bank selected
   */
  OnbankChange(value) {
    let bankName = value.split("_")[1];
    let setBank = this.bankDetails.filter(obj => {
      return obj.BankAccountNo == bankName;
    });
    this.selectedBank = setBank[0];
    this.bankName = this.selectedBank["BankName"] + "_" + this.selectedBank["BankAccountNo"];
    this.bankAccount = this.selectedBank["BankAccountNo"];
    this.ifsc = this.selectedBank["IFSC"];
  }
  /** open neft details  */
  openNeft() {
    this.utils.setTrackMoeEvent("visitedNEFT", {
      User_ID: this.utils.getUserId() || "guest",
      IP: this.shared.IPAddress
    });
    this.analytics.emitEvent("visitedNEFT", this.utils.getUserId() || "guest", JSON.stringify({
      IP: this.shared.IPAddress
    }), 1);
    this.showNeft.toggle = true;
    this.renderer.setStyle(document.body, "overflow", "hidden");
  }
  closeNeft() {
    this.showNeft.toggle = false;
    this.renderer.setStyle(document.body, "overflow", "auto");
    this.showNeft["errorText"] = "";
    this.showNeft["showBankError"] = false;
  }
  /**
   * Close the Component drawer
   */
  close() {
    this.payInpayOutForm.reset();
    this.isOpened = false;
    this.renderer.setStyle(document.body, "overflow", "auto");
    this.hasFocus = false;
    //this.renderer.removeClass(document.body,'modal_open');
  }
  /**
   * CallBack for Changing The Product Type
   */
  toggleProductType() {
    this.threshold = this.action == 1 ? 50 : 0;
    if (this.config && this.config["lFundsViewDataEquity"]) {
      // removed this.config['lFundsViewDataCommodity'] because there is no data in lFundsViewDataCommodity key (08/03/2021)
      this.threshold = this.config["lFundsViewDataEquity"].CashAvailable;
      this.threshold = this.action == 1 ? 50 : this.threshold;
    }
    // if (this.action != 1) this.getMaxBalance();
  }
  /** change in  */
  onSegmentChange() {
    this.productType = this.seletedSegment == 1 || this.seletedSegment == 2 || this.seletedSegment == 3 || this.seletedSegment == 13 || this.seletedSegment == 4 || this.seletedSegment == 38 ? false : this.seletedSegment == 5 || this.seletedSegment == 7 ? true : false;
  }
  setStatusInterval() {
    this.intervalTimerSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.timer)(30000, 30000).subscribe(value => {
      this.getTransactionDetail();
    });
  }
  getTransactionDetail() {
    if (JSON.parse(localStorage.getItem("pgTransactionId"))) {
      let payload = {
        UserId: this.utils.getUserId(),
        TransactionId: JSON.parse(localStorage.getItem("pgTransactionId"))
      };
      this.postLoginService.getpaymentGatewayResponse(payload).subscribe(res => {
        this.renderer.setStyle(document.body, "overflow", "hidden");
        if (res.Status == "Success" && res.Response) {
          window.localStorage.removeItem("pgTransactionId");
          if ((res.Response.Status || "").trim().toLowerCase() == "success") {
            this.utils.broadcast("payinStatus", {
              paymentType: this.paymentType,
              message: "Thank You, Your Transaction is Complete.",
              res: res.Response,
              state: res.Response.Status
            });
            this.analytics.submitPayInPayOut("Payin Response From Atom-Success", payload);
            if (this.intervalTimerSubscription) this.intervalTimerSubscription.unsubscribe();
          } else if ((res.Response.Status || "").trim().toLowerCase() == "failure") {
            this.utils.broadcast("payinStatus", {
              paymentType: this.paymentType,
              message: "Sorry, Your Transaction Failed",
              res: res.Response,
              state: res.Response.Status
            });
          }
        }
      });
    }
  }
  /**
   * Pay In or Payout request
   */
  onSubmit() {
    if (this.action == 1) {
      if (this.paymentType == "upi") {
        this.utils.setTrackMoeEvent("fundTransferPayinInitViaUpi", {
          User_ID: this.utils.getUserId() || "guest",
          IP: this.shared.IPAddress
        });
        this.analytics.emitEvent("fundTransferPayinInitViaUpi", this.utils.getUserId() || "guest", JSON.stringify({
          IP: this.shared.IPAddress
        }), 1);
        let request = {
          UserId: this.utils.getUserId(),
          SessionId: this.utils.getSessionId() || "",
          GroupId: this.utils.get("groupId"),
          Amount: Number(this.payInConfig.totalAmount),
          BankAccNo: this.bankAccount,
          ProductType: this.productType ? 2 : 1,
          SegmentId: Number(this.seletedSegment),
          UserVPA: (this.payInpayOutForm.get("upiId").value || "").trim()
        };
        this.utils.setTrackMoeEvent("UPIPayinRequest", {
          UserId: request.UserId,
          UserVPA: request.UserVPA
        });
        this.analytics.emitEvent("UPIPayinRequest", this.utils.getUserId() || "guest", JSON.stringify({
          IP: this.shared.IPAddress
        }), 1);
        this.utils.setTrackMoeEvent("fundTransferPayinPaymentAck", {
          User_ID: this.utils.getUserId() || "guest",
          IP: this.shared.IPAddress
        });
        this.analytics.emitEvent("fundTransferPayinPaymentAck", this.utils.getUserId() || "guest", JSON.stringify({
          IP: this.shared.IPAddress
        }), 1);
        this.postLoginService.initiateUPIPayment(request).subscribe(data => {
          if (data.Status == "Success" && data.Response) {
            this.showNeft["showBankError"] = false;
            localStorage.setItem("pgTransactionId", JSON.stringify(data.Response.TransactionId));
            this.analytics.submitPayInPayOut("UPIbasedPayinSubmit", request);
            this.utils.broadcast("payInSubmitted", data.Response);
            this.setStatusInterval();
            this.close();
            let payinInfo = JSON.stringify(data.Response);
            this.analytics.emitEvent("fundTransferPayinSuccess", this.utils.getUserId() || "guest", payinInfo, 1);
            this.utils.setTrackMoeEvent("fundTransferPayinSuccess", {
              status: data.Status
            });
            this.utils.checkAndUpdateWeeklyFeature("payInOut", 1);
          } else if (this.utils.isSessionExpired(data.Reason)) {
            this.close();
            if (this.shared.isSSO) {
              // this.utils.sessionExpireHandling()
              this.analytics.submitPayInPayOut("payIn error-Session Expired", request);
              return;
            }
            // this.utils.error("Session Expired", "Please Login Again");
            // this.utils.postFeatureCount();
            // this.utils.clearLoginDetails();
            // this.shared.userId = null;
            this.analytics.submitPayInPayOut("payIn error-Session Expired", request);
            // this.router.navigate(["auth/login"]);
            this.utils.setTrackMoeEvent("UPIPayinResponse", {
              reason: data.Reason
            });
            this.analytics.emitEvent("UPIPayinResponse", this.utils.getUserId() || "guest", JSON.stringify({
              reason: data.Reason
            }), 1);
          } else {
            this.close();
            this.utils.error("Error", "UPI is temporarily unavailable, add funds via Net Banking");
            this.utils.setTrackMoeEvent("UPIPayinResponse", {
              error: "UPI is temporarily unavailable, add funds via Net Banking"
            });
            this.analytics.emitEvent("UPIPayinResponse", this.utils.getUserId() || "guest", JSON.stringify({
              error: "UPI is temporarily unavailable, add funds via Net Banking"
            }), 1);
          }
        }, err => {});
      } else if (this.paymentType == "netBanking") {
        this.utils.setTrackMoeEvent("fundTransferPayinInitViaNetBanking", {
          User_ID: this.utils.getUserId() || "guest",
          IP: this.shared.IPAddress
        });
        this.analytics.emitEvent("fundTransferPayinInitViaNetBanking", this.utils.getUserId() || "guest", JSON.stringify({
          IP: this.shared.IPAddress
        }), 1);
        let payload1 = {
          UserId: this.utils.getUserId(),
          SessionId: this.utils.getSessionId() || "",
          GroupId: this.utils.get("groupId"),
          Amount: this.amount,
          BankAccNo: (this.bankAccount || "").trim(),
          BankIFSCCode: (this.ifsc || "").trim(),
          ReturnUrl: "https://payments.choiceindia.com/payment-transaction-success.html",
          ProductType: this.productType ? 2 : 1,
          PaymentType: 0,
          SegmentId: Number(this.seletedSegment),
          UPIId: ""
        };
        this.utils.setTrackMoeEvent("netBankingRequest", {
          UserId: payload1.UserId
        });
        this.analytics.emitEvent("netBankingRequest", this.utils.getUserId() || "guest", JSON.stringify({
          IP: this.shared.IPAddress
        }), 1);
        this.postLoginService.paymentGatewayRequest(payload1).subscribe(res => {
          if (res.Status == "Success" && res.Response) {
            this.showNeft["showBankError"] = false;
            localStorage.setItem("pgTransactionId", JSON.stringify(res.Response.TransactionId));
            let eventName = this.paymentType == "upi" ? "UPIbasedPayinSubmit" : "InternetBankingbasedPayinSubmit";
            this.analytics.submitPayInPayOut(eventName, payload1);
            window.location.href = res.Response.URI;
            let payinInfo = JSON.stringify(res.Response);
            // this.analytics.emitEvent("fundTransferPayinInitViaNetBanking", this.utils.getUserId() || 'guest', payinInfo, 1);
            this.utils.setTrackMoeEvent("fundTransferPayinSuccess", {
              status: res.Status
            });
            this.analytics.emitEvent("fundTransferPayinSuccess", this.utils.getUserId() || "guest", JSON.stringify({
              IP: this.shared.IPAddress,
              status: res.Status
            }), 1);
            this.utils.checkAndUpdateWeeklyFeature("payInOut", 1);
            // this.utils.setTrackMoeEvent("fundTransferPayinInitViaNetBanking", {"status": res.Status});
          } else if (res.Reason == "Bank not Found") {
            this.showNeft["showBankError"] = true;
            this.showNeft["errorText"] = "This Bank is currently not supported by us. You can opt for";
            this.paymentType = "upi";
            this.analytics.submitPayInPayOut("payIn error-Bank not found", payload1);
            this.utils.setTrackMoeEvent("netBankingResponse", {
              reason: res.Reason
            });
            this.analytics.emitEvent("netBankingResponse", this.utils.getUserId() || "guest", JSON.stringify({
              IP: this.shared.IPAddress,
              reason: res.Reason
            }), 1);
          } else if (this.utils.isSessionExpired(res.Reason)) {
            this.close();
            if (this.shared.isSSO) {
              // this.utils.sessionExpireHandling()
              this.analytics.submitPayInPayOut("payIn error-Session Expired", payload1);
              return;
            }
            // this.utils.error("Session Expired", "Please Login Again");
            // this.utils.postFeatureCount();
            // this.utils.clearLoginDetails();
            // this.shared.userId = null;
            this.analytics.submitPayInPayOut("payIn error-Session Expired", payload1);
            // this.router.navigate(["auth/login"]);
            this.utils.setTrackMoeEvent("netBankingResponse", {
              reason: res.Reason
            });
            this.analytics.emitEvent("netBankingResponse", this.utils.getUserId() || "guest", JSON.stringify({
              IP: this.shared.IPAddress,
              reason: res.Reason
            }), 1);
          } else {
            this.close();
            this.utils.error("Error", "Net Banking is temporarily unavailable, add funds via UPI");
            this.utils.setTrackMoeEvent("netBankingResponse", {
              error: "Something Went Wrong"
            });
            this.analytics.emitEvent("netBankingResponse", this.utils.getUserId() || "guest", JSON.stringify({
              IP: this.shared.IPAddress,
              error: "Something Went Wrong"
            }), 1);
          }
        });
      }
    } else if (this.action == 0) {
      this.utils.setTrackMoeEvent("fundTransferPayout", {
        User_ID: this.utils.getUserId() || "guest",
        IP: this.shared.IPAddress
      });
      this.analytics.emitEvent("fundTransferPayout", this.utils.getUserId() || "guest", JSON.stringify({
        IP: this.shared.IPAddress
      }), 1);
      let payload2 = {
        UserId: this.utils.getUserId(),
        GroupId: this.utils.get("groupId"),
        Amount: this.amount,
        ProductType: this.productType ? 2 : 1,
        SessionId: this.utils.getSessionId() || "",
        BankAccNo: (this.bankAccount || "").trim()
      };
      /**if payout modification request is made */
      if (this.modifyPayload && this.modifyPayload) {
        this.modifyPayload = {
          "userId": this.utils.getUserId() || "",
          "sessionId": this.utils.getSessionId() || "",
          "transactionType": 1,
          // transaction type 1 for modify request
          "transactionId": this.config['JiffyTransactionId'] || "",
          "amount": -1000,
          "requestedByUserId": this.utils.getUserId() || ""
        };
        this.modifyPayoutLoader = true;
        this.postLoginService.getModifyPayoutRequest(this.modifyPayload).subscribe(response => {
          this.close();
          this.modifyPayoutLoader = false;
          if (response.Status == "Success" && response.Response) {
            // this.payoutResponse = response.Response;
            this.utils.success('Success', response.Response);
            this.utils.setTrackMoeEvent("fundTransferPayoutSuccess", {
              status: response.Status
            });
            this.analytics.emitEvent("fundTransferPayoutSuccess", this.utils.getUserId() || "guest", JSON.stringify({
              IP: this.shared.IPAddress
            }), 1);
            this.utils.checkAndUpdateWeeklyFeature("payInOut", 1);
            this.shared.triggerTrasactionListing();
          } else if (this.utils.isSessionExpired(response.Response.Status)) {
            if (this.shared.isSSO) {
              this.utils.sessionExpireHandling();
              return;
            }
            this.utils.error("Session Expired", "Please Login Again");
            this.utils.postFeatureCount();
            this.utils.clearLoginDetails();
            this.shared.userId = null;
            this.router.navigate(["auth/login"]);
          } else {
            this.utils.error('Error', response.Response || 'Something Went Wrong');
            // this.payoutResponse = response.Response;
            // this.payoutResponse.Status = response.Status;
          }
        }, error => {
          this.modifyPayoutLoader = false;
          this.utils.error('Error', "Something Went Wrong");
        });
      }
      /**normal payout */else {
        this.postLoginService.getprocessPayout(payload2).subscribe(res => {
          this.close();
          if (res.Status == "Success" && res.Response) {
            this.payoutResponse = res.Response;
            // this.analytics.submitPayInPayOut('payOut Request Submitted', payload2);
            // this.utils.broadcast("fundsViewUpdate", res.Response);
            this.utils.setTrackMoeEvent("fundTransferPayoutSuccess", {
              status: res.Status
            });
            this.analytics.emitEvent("fundTransferPayoutSuccess", this.utils.getUserId() || "guest", JSON.stringify({
              IP: this.shared.IPAddress
            }), 1);
            this.utils.checkAndUpdateWeeklyFeature("payInOut", 1);
          } else if (this.utils.isSessionExpired(res.Response.Status)) {
            if (this.shared.isSSO) {
              this.utils.sessionExpireHandling();
              return;
            }
            this.utils.error("Session Expired", "Please Login Again");
            this.utils.postFeatureCount();
            this.utils.clearLoginDetails();
            this.shared.userId = null;
            this.router.navigate(["auth/login"]);
          } else {
            this.payoutResponse = res.Response;
            this.payoutResponse.Status = res.Status;
          }
        });
      }
    }
  }
  orderTypeChange(event) {
    this.utils.setTrackMoeEvent("visitedOtherUpiAppsBSDF", {
      User_ID: this.utils.getUserId() || "guest",
      Selected: (event || "").toUpperCase(),
      IP: this.shared.IPAddress
    });
    this.analytics.emitEvent("visitedOtherUpiAppsBSDF", this.utils.getUserId() || "guest", JSON.stringify({
      IP: this.shared.IPAddress,
      Selected: (event || "").toUpperCase()
    }), 1);
  }
  refreshFunds() {
    if (this.payoutResponse.Status != 'Fail') {
      this.utils.broadcast("fundsViewUpdate", this.payoutResponse);
    }
    this.payoutResponse = null;
  }
  openLink() {
    if (localStorage.getItem("onb_url")) {
      let url = atob(localStorage.getItem("onb_url"));
      window.open(url, "_self");
    }
  }
  navigateToSupport() {
    this.router.navigate(["/links/support"]);
  }
  navigateToModificationFlow() {
    let userId = "";
    let url = this.postLoginService.getOnboardingModificationURL(btoa(this.utils.getUserId()), encodeURIComponent(this.cryptography.encryptText(this.utils.getUserId())), "undefined");
    url = url.replace("&sid=undefined", "");
    url = url + "&type=dormant";
    window.open(url, "_blank");
  }
  static {
    this.ctorParameters = () => [{
      type: _services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_3__.AnalyticsService
    }, {
      type: src_app_services_cryptography_service__WEBPACK_IMPORTED_MODULE_2__.CryptographyService
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.Router
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Renderer2
    }, {
      type: _services_rest_post_login_service__WEBPACK_IMPORTED_MODULE_4__.PostLoginService
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.UntypedFormBuilder
    }, {
      type: _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__.SharedDataService
    }, {
      type: _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_6__.UtilsService
    }];
  }
  static {
    this.propDecorators = {
      action: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Input,
        args: ["action"]
      }],
      config: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Input,
        args: ["config"]
      }],
      withdrawPopup: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild,
        args: ['withdrawPopup', {
          static: false
        }]
      }]
    };
  }
};
PayInOutComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
  selector: "app-pay-in-out",
  template: _pay_in_out_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_16__.PopoverModule, _directives_show_focus_directive__WEBPACK_IMPORTED_MODULE_8__.ShowFocusDirective, _pipes_value_pipe__WEBPACK_IMPORTED_MODULE_7__.ValuePipe],
  styles: [(_pay_in_out_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__metadata)("design:paramtypes", [_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_3__.AnalyticsService, src_app_services_cryptography_service__WEBPACK_IMPORTED_MODULE_2__.CryptographyService, _angular_router__WEBPACK_IMPORTED_MODULE_13__.Router, _angular_core__WEBPACK_IMPORTED_MODULE_14__.Renderer2, _services_rest_post_login_service__WEBPACK_IMPORTED_MODULE_4__.PostLoginService, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.UntypedFormBuilder, _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__.SharedDataService, _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_6__.UtilsService])], PayInOutComponent);


/***/ }),

/***/ 14473:
/*!*****************************************************************************************!*\
  !*** ./src/app/post-login-module/funds/pay-in-out/pay-in-out.component.scss?ngResource ***!
  \*****************************************************************************************/
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
@keyframes checkmark {
  0% {
    height: 0;
    width: 0;
    opacity: 1;
  }
  20% {
    height: 0;
    width: 10px;
    opacity: 1;
  }
  40% {
    height: 20px;
    width: 10px;
    opacity: 1;
  }
  100% {
    height: 20px;
    width: 10px;
    opacity: 1;
  }
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes spin {
  0% {
    transform: rotateZ(0);
  }
  100% {
    transform: rotateZ(360deg);
  }
}
nav.c-menu {
  position: fixed;
  z-index: 99999999;
  background-color: #ffffff;
  top: 0;
  height: 100%;
  width: 450px;
  right: 0;
  transition: transform 0.3s;
  overflow-y: scroll;
  padding: 0px;
  transform: translateX(100%);
}
nav.c-menu.open {
  transform: translateX(0px);
}
@media (max-width: 1550px) {
  nav.c-menu {
    width: 400px;
  }
}
nav.c-menu .refresh-btn {
  float: right;
  color: #fe616e;
  background: transparent;
  cursor: pointer;
  color: #004393;
}
nav.c-menu .refresh-btn.moving {
  animation: lds-dual-ring 0.8s linear infinite;
}
nav.c-menu button.c-menu__close {
  background: transparent;
  outline: 0;
  border: 0;
  color: #aaa;
  font-size: 20px;
  margin: 0;
  background-image: linear-gradient(to right, #ffc174 0%, #fe616e 100%);
  background-color: #fe616e;
  color: #fe616e;
  color: #004393;
  -webkit-background-clip: text;
  background-clip: text;
  float: left;
}
@media (max-width: 1550px) {
  nav.c-menu button.c-menu__close {
    top: 2px;
    left: 0px;
    padding: 0 5px;
  }
}
nav.c-menu button.c-menu__close:focus, nav.c-menu button.c-menu__close:active {
  background: transparent;
  outline: 0;
  border: 0;
}
nav.c-menu form input.inputqty {
  box-shadow: none;
  border: 0;
  width: 100%;
  outline: 0 !important;
}
@media (max-width: 767px) {
  nav.c-menu form input.inputqty {
    border-bottom: 1px solid #ccc !important;
    border-radius: 0px;
  }
}
nav.c-menu form input.inputqty:disabled {
  background: transparent;
  cursor: not-allowed;
  color: #ccc;
}
nav.c-menu form label.disabled {
  color: rgba(0, 0, 0, 0.5);
}
nav.c-menu form div.input-box {
  width: 100%;
  float: none;
  padding: 0 5px;
  margin-bottom: 20px;
}
nav.c-menu form div.input-box input {
  border-bottom: 1px solid #eee !important;
  margin-bottom: 5px;
  font-size: 13px;
}
nav.c-menu form div.input-box.full-width {
  width: 100% !important;
}
nav.c-menu form div.input-box1 {
  width: 48%;
  float: right;
  padding: 0 5px;
  margin-left: 16px;
  border-bottom: 1px solid #eee !important;
  margin-bottom: 20px;
}
nav.c-menu form p.error {
  color: #cd2232;
  margin: 0;
  line-height: 15px;
  font-size: 1.2rem;
}

.c-mask {
  position: fixed;
  z-index: 9999999;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
  background-color: #000;
  opacity: 0.2;
  transition: opacity 0.3s, width 0s 0.3s, height 0s 0.3s;
}

.switch-wrap {
  margin: 15px 0;
}
.switch-wrap label {
  font-size: 12px;
  color: #8a97a0;
  font-weight: normal;
  letter-spacing: 0.1em;
  vertical-align: middle;
  margin-bottom: 0px;
}
.switch-wrap .switch {
  position: relative;
  display: inline-block;
  width: 55px;
  height: 27px;
  vertical-align: middle;
  margin: 0px 20px;
}
@media (max-width: 1550px) {
  .switch-wrap .switch {
    margin: 0px 10px;
  }
}
.switch-wrap .switch input {
  display: none;
}
.switch-wrap .slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  transition: 0.4s;
  border: 1px solid #fff;
  background: #e7e7e7;
}
.switch-wrap .slider:before {
  position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  left: 3px;
  bottom: 3px;
  background-image: linear-gradient(to left, #ffc174 0%, #fe616e 100%);
  transition: 0.4s;
}
.switch-wrap .slider.round {
  border-radius: 34px;
}
.switch-wrap .slider.round:before {
  border-radius: 50%;
}
.switch-wrap input:checked + .slider {
  border: 1px solid #fff;
  background: #e7e7e7;
}
.switch-wrap input:checked + .slider:before {
  transform: translateX(26px);
}

.input-wrapper {
  padding: 30px;
  position: relative;
}
@media (max-width: 1550px) {
  .input-wrapper {
    padding: 10px 20px;
    overflow: auto;
    height: calc(100vh - 200px);
  }
}
.input-wrapper form.row {
  margin-left: 0;
  margin-right: 0;
}

.pdt-10 {
  padding-top: 10px;
}

@media (max-width: 767px) {
  nav.c-menu {
    width: 100%;
    max-width: 500px;
  }
  nav.c-menu .scrip-details {
    margin-top: 0px;
  }
}
@media (max-width: 499px) {
  .br-gray,
  .col-xs-6 {
    border-right: 0px;
  }
  .br-gray .text-gray,
  .col-xs-6 .text-gray {
    border-bottom: 1px solid #aaa;
    display: inline-block;
    padding: 0px 15px 8px;
  }
  .col-xs-4 {
    width: 100%;
    float: none;
    text-align: center;
  }
  .col-xs-6 {
    width: 100%;
    float: none;
    text-align: center;
  }
  .select ul.nav {
    width: 100% !important;
  }
  .select ul.nav li {
    width: 50% !important;
  }
  div.input-box,
  div.input-box1 {
    width: 100% !important;
    margin-left: 0px;
    margin-bottom: 20px;
  }
}
button.buy-sell-btn {
  clear: both;
  padding: 10px 15px;
  color: #fff;
  background-image: linear-gradient(to right, #ffc174 0%, #fe616e 100%);
  padding: 10px 0;
  border-radius: 0px;
  border: 1px solid transparent;
  border-left: 1px solid #ffc174;
  width: 100%;
  background: #004393;
}

.buy-sell-toggler {
  padding: 15px 15px 0;
}
.buy-sell-toggler .switch-wrap {
  margin: 0px;
}
.buy-sell-toggler .switch-wrap label {
  font-size: 20px;
  margin-bottom: 0px;
}
@media (max-width: 1550px) {
  .buy-sell-toggler .switch-wrap label {
    font-size: 15px;
  }
}

.btn-sign-up {
  color: #fe606e;
  cursor: pointer;
  color: #004393;
}

.btn-sign-up {
  color: #fe606e;
  cursor: pointer;
  color: #004393;
}

.radio-text {
  font-size: 15px;
  padding: 0 15px;
}

.select {
  position: relative;
  display: block;
  width: 100%;
  background: none;
  border-radius: 0;
  color: #000;
  margin: 5px 0 10px;
}
.select div.advanced {
  text-align: center;
  font-size: 15px;
  cursor: pointer;
}
.select div.advanced i.fa {
  font-weight: bold;
  color: #aaa;
  font-size: 20px;
  vertical-align: text-bottom;
}
.select ul.nav li {
  position: relative;
  display: inline-block;
  width: 45%;
  padding: 0 15px;
  text-align: left;
}
.select ul.nav li label {
  position: relative;
  font-size: 14px;
  padding: 0 0 0 40px;
  z-index: 9;
  cursor: pointer;
  color: #8a97a0;
  line-height: 28px;
  font-weight: normal;
  transition: all 0.25s linear;
  -webkit-transition: all 0.25s linear;
}
@media (max-width: 1550px) {
  .select ul.nav li label {
    padding: 0 0 0 25px;
    font-size: 13px;
    line-height: 22px;
  }
}
.select ul.nav li label:hover ~ .check::before {
  background: #fe927f;
  transform: scale(0.5);
  background: #004393;
}
.select ul.nav li input[type=radio] {
  position: absolute;
  visibility: hidden;
}
.select ul.nav li input[type=radio]:checked ~ .check {
  border: 2px solid #e88970;
  border: 2px solid #004393;
}
.select ul.nav li input[type=radio]:checked ~ .check::before {
  background: #fe927f;
  background: #6A97D7;
  transform: scale(1) !important;
}
.select ul.nav li input[type=radio]:disabled ~ label {
  color: #aaaaaa;
}
.select ul.nav li input[type=radio]:disabled ~ .check {
  border: 2px solid #aaaaaa;
}
.select ul.nav li input[type=radio]:disabled:checked ~ .check::before {
  background: #ccc;
  transform: scale(1) !important;
}
.select ul.nav li input[type=radio]:checked ~ label {
  color: #000000;
}
.select ul.nav li div.check {
  display: block;
  position: absolute;
  border: 2px solid #fe927f;
  border: 2px solid #004393;
  border-radius: 100%;
  height: 25px;
  width: 25px;
  top: 2px;
  left: 15px;
  z-index: 5;
  transition: border 0.25s linear;
  -webkit-transition: border 0.25s linear;
}
@media (max-width: 1550px) {
  .select ul.nav li div.check {
    height: 18px;
    width: 18px;
  }
}
.select ul.nav li div.check::before {
  display: block;
  position: absolute;
  content: "";
  border-radius: 100%;
  height: 15px;
  width: 15px;
  top: 3px;
  left: 3px;
  margin: auto;
  transition: background 0.25s linear;
  -webkit-transition: background 0.25s linear;
}
@media (max-width: 1550px) {
  .select ul.nav li div.check::before {
    height: 10px;
    width: 10px;
    top: 2px;
    left: 2px;
  }
}
.select ul.nav li div.check.disabled {
  border: 2px solid #aaaaaa;
}
.select select {
  color: #000;
  background: none !important;
  outline: 0;
  box-shadow: none;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0 0 0 0.5em;
  cursor: pointer;
  border: 0 !important;
}

.upi-wrapper {
  position: relative;
}
.upi-wrapper.unchecked:after {
  content: " ";
  display: block;
  position: absolute;
  right: 0;
  top: 0px;
  width: 20px;
  height: 20px;
  margin: 1px;
  border-radius: 50%;
  border: 2px solid #fe616e;
  border-color: #fe616e transparent #fe616e transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
.upi-wrapper.checked:after {
  opacity: 1;
  height: 20px;
  width: 10px;
  transform-origin: left top;
  border-right: 3px solid #5cb85c;
  border-top: 3px solid #5cb85c;
  content: "";
  right: 20px;
  top: 10px;
  position: absolute;
  animation-duration: 800ms;
  animation-timing-function: ease;
  animation-name: checkmark;
  transform: scaleX(-1) rotate(135deg);
}

.dialog-content {
  max-width: 85rem !important;
}

.pl-2 {
  padding-left: 2px;
}

.flex-select {
  display: flex;
  width: 100%;
}

.align-info {
  align-self: center;
  margin-left: 1%;
}

.mandatory-mark {
  font-size: 12px;
  color: red;
}

.amo-note {
  padding: 8px 15px;
  background: #f5f5f5;
  letter-spacing: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.amo-note p {
  margin: 0;
  font-size: 11px;
  color: #EE404A;
  letter-spacing: 0;
  opacity: 1;
  font-family: "SF Pro Display";
}
@media (max-width: 767px) {
  .amo-note p {
    font-size: 10px;
  }
}
@media (max-width: 767px) {
  .amo-note {
    position: fixed;
    left: 0;
    width: 100%;
    bottom: 109px;
    margin: 0;
    border-radius: 0;
  }
}

/** segment error msg **/
.segment-error {
  text-align: center;
  border: 1px solid #f49c9c !important;
  background-color: #fffaeb !important;
  width: auto;
  border-radius: 4px;
  margin: 0 16px 10px;
}
.segment-error span {
  color: #004393 !important;
  padding: 1px;
  cursor: pointer;
  text-decoration: underline;
}`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 4083:
/*!*****************************************************************************************!*\
  !*** ./src/app/post-login-module/funds/pay-in-out/pay-in-out.component.html?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<nav\r\n  id=\"c-menu--slide-right\"\r\n  class=\"c-menu c-menu--slide-right nav-pd zindex\"\r\n  [class.open]=\"isOpened\"\r\n  >\r\n  <div class=\"fixed-popup-header scrip-ttl-sec\">\r\n    <div class=\"buy-sell-toggler clearfix\">\r\n      <button class=\"c-menu__close clear\" aria-label=\"Close\"  (click)=\"close()\" title=\"Close\">\r\n        <i class=\"icon-back-arrow\" aria-hidden=\"true\"></i>\r\n      </button>\r\n      <h4 class=\"scrip-title\">FUND</h4>\r\n    </div>\r\n\r\n  </div>\r\n  <!-- <div class=\"text-center pd35 scrip-details\">\r\n  <h4 class=\"scrip-title\">FUND</h4>\r\n</div> -->\r\n<form [formGroup]=\"payInpayOutForm\" (ngSubmit)=\"onSubmit()\">\r\n  <div class=\"input-wrapper\">\r\n    <!-- commented below code as exchange needs to be removed from payIn/Payout (08/03/2021)  -->\r\n    <!-- <div *ngIf=\"action == 0\" class=\"text-center switch-wrap\">\r\n    <label class=\"control-label mr-10\" for=\"productType\" [class.selected]=\"!productType\">Equity</label>\r\n    <label class=\"switch\">\r\n      <input id=\"productType\" type=\"checkbox\" formControlName=\"productType\" [(ngModel)]=\"productType\"\r\n        (ngModelChange)=\"toggleProductType()\" name=\"productType\">\r\n        <div class=\"slider round\"></div>\r\n      </label>\r\n      <label class=\"control-label ml-10\" for=\"productType\" [class.selected]=\"productType\">Commodity</label>\r\n    </div> -->\r\n    <!-- <div *ngIf=\"action == 1\" class=\"input-box brde-btm form-group\">\r\n    <label for=\"bank\" class=\"font12\">EXCHANGE</label>\r\n    <select formControlName=\"segment\" class=\"show-tick form-control\" [(ngModel)]=\"seletedSegment\"\r\n      (change)=\"onSegmentChange()\">\r\n      <option *ngIf=\"allowedSegmentArr.length == 0 \" value=\"undefined\">You are not allowed in any segment</option>\r\n      <option *ngFor=\"let item of allowedSegmentArr\" value=\"{{item.SegmentId}}\">{{item.ExchangeSegment}}</option>\r\n    </select>\r\n  </div> -->\r\n\r\n  @if (action == 1) {\r\n    <div class=\"select\">\r\n      <ul class=\"nav\" id=\"orderType\">\r\n        <li>\r\n          <input\r\n            type=\"radio\"\r\n            id=\"netBanking\"\r\n            formControlName=\"paymentType\"\r\n            value=\"netBanking\"\r\n            [(ngModel)]=\"paymentType\"\r\n            (click)=\"orderTypeChange($event.target.value)\"\r\n            />\r\n            <label for=\"netBanking\">NET BANKING</label>\r\n            <div class=\"check\"></div>\r\n          </li>\r\n          <li>\r\n            <input\r\n              type=\"radio\"\r\n              id=\"upi\"\r\n              formControlName=\"paymentType\"\r\n              value=\"upi\"\r\n              [(ngModel)]=\"paymentType\"\r\n              (click)=\"orderTypeChange($event.target.value)\"\r\n              />\r\n              <label for=\"upi\">UPI</label>\r\n              <div class=\"check\"></div>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      }\r\n      <div class=\"input-box brde-btm form-group\">\r\n        <label for=\"amount\" class=\"font12\"\r\n          >AMOUNT <span class=\"mandatory-mark\">*</span>\r\n          @if (action == 0) {\r\n            <small>\r\n              (Withdrawable Amount: {{ threshold | value : \"1.2-2\" }})</small\r\n              >\r\n            }</label\r\n            >\r\n            <input\r\n              type=\"number\"\r\n              formControlName=\"amount\"\r\n              [(ngModel)]=\"amount\"\r\n              placeholder=\"Please Enter Amount\"\r\n              class=\"inputqty\"\r\n              step=\"1\"\r\n              required\r\n              (focus)=\"hasFocus = true\"\r\n              />\r\n              @if (\r\n                payInpayOutForm.controls['amount'].errors?.required &&\r\n                !payInpayOutForm.controls['amount'].pristine\r\n                ) {\r\n                <p\r\n                  class=\"animate error\"\r\n                  >\r\n                  Amount is Required\r\n                </p>\r\n              }\r\n              @if (\r\n                action == 1 &&\r\n                !payInpayOutForm.controls['amount'].errors?.required &&\r\n                !payInpayOutForm.controls['amount'].pristine &&\r\n                amount < threshold\r\n                ) {\r\n                <p\r\n                  class=\"animate error\"\r\n                  >\r\n                  Minimum Amount for PayIn is 50.\r\n                </p>\r\n              }\r\n              @if (\r\n                action == 1 &&\r\n                !payInpayOutForm.controls['amount'].errors?.required &&\r\n                !payInpayOutForm.controls['amount'].pristine &&\r\n                paymentType == 'upi' &&\r\n                amount > 100000\r\n                ) {\r\n                <p\r\n                  class=\"animate error\"\r\n                  >\r\n                  The max. amount allowed for PayIn through UPI is INR 1,00,000.\r\n                </p>\r\n              }\r\n              @if (\r\n                action == 1 &&\r\n                !payInpayOutForm.controls['amount'].errors?.required &&\r\n                !payInpayOutForm.controls['amount'].pristine &&\r\n                paymentType != 'upi' &&\r\n                amount > 50000000\r\n                ) {\r\n                <p\r\n                  class=\"animate error\"\r\n                  >\r\n                  The max. amount allowed for PayIn through Net Banking is Rs 5 Crs\r\n                </p>\r\n              }\r\n              @if (\r\n                action == 0 &&\r\n                !payInpayOutForm.controls['amount'].errors?.required &&\r\n                !payInpayOutForm.controls['amount'].pristine &&\r\n                amount &&\r\n                amount > threshold &&\r\n                threshold > 0\r\n                ) {\r\n                <p\r\n                  class=\"animate error\"\r\n                  >\r\n                  Maximum Amount for Payout is {{ threshold | value : \"1.2-2\" }}.\r\n                </p>\r\n              }\r\n              @if (action == 0 && threshold <= 0) {\r\n                <p class=\"animate error\">\r\n                  Insufficient Funds\r\n                </p>\r\n              }\r\n              <!-- <p class=\"animate error\"\r\n              *ngIf=\"action == 0 && !payInpayOutForm.controls['amount'].errors?.required && !payInpayOutForm.controls['amount'].pristine && ( amount < 100)\">\r\n              Minimum\r\n            Amount for Payout is 100.</p> -->\r\n          </div>\r\n          <div class=\"input-box form-group\">\r\n            @if (\r\n              action == 0 &&\r\n              payoutMessage &&\r\n              payoutMessage?.first &&\r\n              payoutMessage?.last &&\r\n              hasFocus\r\n              ) {\r\n              <div\r\n                class=\"fund-msg\"\r\n                >\r\n                <img src=\"../../../assets/images/time-show.svg\" class=\"img-fluid\" />\r\n                <h5>\r\n                  Your amount will be credited by\r\n                  <span>{{ payoutMessage?.first }}</span> on <br /><span>{{\r\n                  payoutMessage?.last\r\n                }}</span>\r\n              </h5>\r\n            </div>\r\n          }\r\n        </div>\r\n        <div class=\"input-box brde-btm form-group mrg-top\">\r\n          <label for=\"bank\" class=\"font12\"\r\n            >BANK NAME <span class=\"mandatory-mark\">*</span>\r\n          </label>\r\n\r\n          @if ((!userAccountStatus||!userAccountStatus?.onboardStatus || userAccountStatus?.onboardStatus=='C')) {\r\n            <button\r\n              type=\"button\"\r\n              (click)=\"getProfileData()\"\r\n              class=\"btn refresh-btn\"\r\n              [class.moving]=\"payInConfig.isProfileFetch\"\r\n              [hidden]=\"action != 1\"\r\n              >\r\n              <i class=\"icon-repeat\"></i>\r\n            </button>\r\n          }\r\n          <!-- action == 0 -->\r\n          @if (false) {\r\n            <input\r\n              type=\"text\"\r\n              formControlName=\"bankNamePayout\"\r\n              placeholder=\"BANK NAME\"\r\n              [(ngModel)]=\"bankName\"\r\n              class=\"inputqty\"\r\n              step=\"1\"\r\n              min=\"1\"\r\n              required\r\n              />\r\n          }\r\n          <div class=\"flex-select\">\r\n            @if (action == 1 || action == 0) {\r\n              <select\r\n                formControlName=\"bankNamePayIn\"\r\n                class=\"show-tick form-control\"\r\n                [(ngModel)]=\"bankName\"\r\n                (change)=\"OnbankChange(bankName)\"\r\n                [attr.disabled]=\"bankDetails?.length == 1 || null || isBankDisabled\"\r\n                >\r\n                @for (item of bankDetails; track item) {\r\n                  <option\r\n                    value=\"{{ item.BankName }}_{{ item.BankAccountNo }}\"\r\n                    >\r\n                    {{ item.BankName }}\r\n                  </option>\r\n                }\r\n              </select>\r\n            }\r\n            @if (action == 0) {\r\n              <i\r\n                class=\"fa fa-info-circle pl-2 align-info\"\r\n                #withdrawPopup=\"bs-popover\"\r\n                outsideClick=\"true\"\r\n                placement=\"left top\"\r\n                [popover]=\"payinMessage\"\r\n              ></i>\r\n            }\r\n          </div>\r\n        </div>\r\n        <div class=\"input-box brde-btm form-group\">\r\n          <label for=\"bank\" class=\"font12\">BANK ACCOUNT NUMBER</label>\r\n          <input\r\n            type=\"text\"\r\n            formControlName=\"bankAccountNumber\"\r\n            [(ngModel)]=\"bankAccount\"\r\n            placeholder=\"BANK ACCOUNT NUMBER\"\r\n            class=\"inputqty\"\r\n            step=\"1\"\r\n            min=\"1\"\r\n            required\r\n            />\r\n          </div>\r\n          @if (action == 1) {\r\n            <div class=\"input-box brde-btm form-group\">\r\n              <label for=\"bank\" class=\"font12\">BANK IFSC CODE</label>\r\n              <input\r\n                type=\"text\"\r\n                formControlName=\"ifsc\"\r\n                [(ngModel)]=\"ifsc\"\r\n                placeholder=\"BANK IFSC CODE\"\r\n                class=\"inputqty\"\r\n                step=\"1\"\r\n                min=\"1\"\r\n                required\r\n                />\r\n              </div>\r\n            }\r\n            @if (action == 1 && paymentType == 'upi') {\r\n              <div\r\n                class=\"input-box brde-btm form-group\"\r\n                >\r\n                <label for=\"upiId\" class=\"font12\"\r\n                  >UPI ID <span class=\"mandatory-mark\">*</span>\r\n                </label>\r\n                <div\r\n                  class=\"upi-wrapper\"\r\n                  [class.unchecked]=\"payInConfig?.loading\"\r\n                  [class.checked]=\"payInConfig?.VPAName\"\r\n                  >\r\n                  <input\r\n                    type=\"text\"\r\n                    formControlName=\"upiId\"\r\n                    [(ngModel)]=\"upiId\"\r\n                    placeholder=\"UPI ID\"\r\n                    class=\"inputqty\"\r\n                    />\r\n                  </div>\r\n                  @if (\r\n                    payInpayOutForm.controls['upiId'].errors?.required &&\r\n                    payInpayOutForm.controls['upiId'].dirty &&\r\n                    payInpayOutForm.controls['upiId'].invalid\r\n                    ) {\r\n                    <p\r\n                      class=\"animate error\"\r\n                      >\r\n                      UPI ID is Required\r\n                    </p>\r\n                  }\r\n                  @if (\r\n                    payInpayOutForm.controls['upiId'].errors?.pattern &&\r\n                    payInpayOutForm.controls['upiId'].dirty &&\r\n                    payInpayOutForm.controls['upiId'].invalid\r\n                    ) {\r\n                    <p\r\n                      class=\"animate error\"\r\n                      >\r\n                      Invalid UPI ID\r\n                    </p>\r\n                  }\r\n                  @if (\r\n                    payInpayOutForm.controls['upiId'].errors?.notExist &&\r\n                    payInpayOutForm.controls['upiId'].dirty &&\r\n                    payInpayOutForm.controls['upiId'].invalid\r\n                    ) {\r\n                    <p\r\n                      class=\"animate error\"\r\n                      >\r\n                      UPI ID does not exist.\r\n                    </p>\r\n                  }\r\n                  @if (payInConfig?.VPAName) {\r\n                    <strong>{{ payInConfig?.VPAName }}</strong>\r\n                  }\r\n                </div>\r\n              }\r\n              @if (\r\n                action == 1 &&\r\n                !payInpayOutForm.controls['amount'].errors &&\r\n                paymentType == 'upi' &&\r\n                amount <= 100000 &&\r\n                amount >= 50\r\n                ) {\r\n                <table\r\n                  class=\"table\"\r\n                  >\r\n                  <tr>\r\n                    <td colspan=\"2\" class=\"text-center\">\r\n                      <strong> Transaction Charges</strong>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Pay In Amount</td>\r\n                    <th class=\"text-right\">{{ amount | value : \"1.2-2\" }}</th>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Transaction Charges + GST</td>\r\n                    <th class=\"text-right\">\r\n                      {{ payInConfig?.charges | value : \"1.2-2\" }}\r\n                    </th>\r\n                  </tr>\r\n                  <tr>\r\n                    <th>Total</th>\r\n                    <th class=\"text-right\">\r\n                      {{ payInConfig?.totalAmount | value : \"1.2-2\" }}\r\n                    </th>\r\n                  </tr>\r\n                </table>\r\n              }\r\n              @if (action == 1 && paymentType == 'upi') {\r\n                <div\r\n                  class=\"text-center mb-15 mt-20 noteform\"\r\n                  >\r\n                  <strong>Note: </strong>Please Provide the UPI ID of the bank linked to\r\n                  your trading account\r\n                </div>\r\n              }\r\n              @if (action == 1 && isMidNight) {\r\n                <div\r\n                  class=\"text-center mb-15 mt-20 noteform\"\r\n                  >\r\n                  <strong>Note: </strong>PayIn/Deposit done from 12 AM till 7 AM,\r\n                  PayIn/Deposit will be reflected next day morning in Funds\r\n                </div>\r\n              }\r\n              @if (action == 0 && isMidNight) {\r\n                <div\r\n                  class=\"text-center mb-15 mt-20 noteform\"\r\n                  >\r\n                  <strong>Note: </strong>Payout/Withdraw done from 12 AM till 7 AM,\r\n                  PayOut/Withdraw will be reflected next day morning in Funds\r\n                </div>\r\n              }\r\n\r\n\r\n\r\n\r\n\r\n\r\n              <div class=\"popup-footer popup-footer-fixed\">\r\n\r\n\r\n                @if (userAccountStatus&&userAccountStatus?.onboardStatus && userAccountStatus?.onboardStatus=='N') {\r\n                  <div class=\"amo-note segment-error\">\r\n                    <p>Complete your account setup to begin your Joy of Earning\r\n                    </p>\r\n                    <span (click)=\"openLink()\" >Continue</span>\r\n                  </div>\r\n                }\r\n\r\n                @if (userAccountStatus&&userAccountStatus?.onboardStatus && userAccountStatus?.onboardStatus=='YR') {\r\n                  <div class=\"amo-note segment-error\">\r\n                    <p>Account Activation Failed due to issue with the account details\r\n                    </p>\r\n                    <span (click)=\"openLink()\" >Proceed</span>\r\n                  </div>\r\n                }\r\n\r\n                @if (userAccountStatus&&userAccountStatus?.onboardStatus && userAccountStatus?.onboardStatus=='Y') {\r\n                  <div class=\"amo-note segment-error\">\r\n                    <p>Account Activation in Progress\r\n                    </p>\r\n                  </div>\r\n                }\r\n                @if (userAccountStatus&&userAccountStatus?.onboardStatus && userAccountStatus?.onboardStatus=='inactive') {\r\n                  <div class=\"amo-note segment-error\">\r\n                    <p>Account is inactive due to no trade activity. Please complete Re-KYC to reactivate\r\n                    </p>\r\n                    <span (click)=\"navigateToModificationFlow()\" >Proceed</span>\r\n                  </div>\r\n                }\r\n\r\n                @if (userAccountStatus&&userAccountStatus?.onboardStatus && userAccountStatus?.onboardStatus=='suspended') {\r\n                  <div class=\"amo-note segment-error\">\r\n                    <p>Account is suspended. For assistance, kindly reach out to our support team.\r\n                    </p>\r\n                    <span (click)=\"navigateToSupport()\" >Contact Support</span>\r\n                  </div>\r\n                }\r\n\r\n\r\n                @if (userAccountStatus&&userAccountStatus?.onboardStatus && userAccountStatus?.onboardStatus=='MF') {\r\n                  <div class=\"amo-note segment-error\">\r\n                    <p>Your Equity Account isn't activated Yet!\r\n                    </p>\r\n                    <span (click)=\"openLink()\" >Continue</span>\r\n                  </div>\r\n                }\r\n\r\n                <!-- <pre>\r\n\r\n                {{ payInpayOutForm?.errors  +\" & \"+\r\n                (action == 1 && amount < threshold)+\" & \"+\r\n                (action == 1 && paymentType == 'upi' && amount > 100000)+\" & \"+\r\n                (action == 1 && paymentType != 'upi' && amount > 1000000)+\" & \"+\r\n                (action == 0 && (amount <= 0 || amount > threshold)) +\" & \"+\r\n                shared.isServiceHit +\" & \"+ modifyPayoutLoader}}\r\n              </pre> -->\r\n              <!-- added modifyLoader condition for payout modification -->\r\n              <button\r\n                class=\"btn buy-sell-btn\"\r\n          [disabled]=\"\r\n            !payInpayOutForm.valid ||\r\n            (action == 1 && amount < threshold) ||\r\n            (action == 1 && paymentType == 'upi' && amount > 100000) ||\r\n            (action == 1 && paymentType != 'upi' && amount > 50000000) ||\r\n            (action == 0 && (amount <= 0 || amount > threshold)) ||\r\n            shared.isServiceHit || modifyPayoutLoader\r\n          \"\r\n                >\r\n                {{\r\n                action == 1\r\n                ? \"PAY\r\n                IN\"\r\n                : \"PAY OUT\"\r\n                }}\r\n              </button>\r\n              @if (action == 1) {\r\n                <p class=\"text-center mt-10\">\r\n                  Opt for NEFT?\r\n                  <span class=\"btn-sign-up\" (click)=\"openNeft()\">Click Here</span>\r\n                </p>\r\n              }\r\n            </div>\r\n            @if (showNeft?.showBankError) {\r\n              <div class=\"mt-10\">\r\n                <p class=\"animate error\">\r\n                  {{ showNeft?.errorText }}\r\n                  <span><strong>UPI.</strong></span>\r\n                </p>\r\n              </div>\r\n            }\r\n          </div>\r\n        </form>\r\n      </nav>\r\n      <!-- /c-menu slide-right -->\r\n      <div id=\"c-mask\" class=\"c-mask\" [hidden]=\"!isOpened\" (click)=\"close()\"></div>\r\n      @if (payoutResponse) {\r\n        <div class=\"dialog\">\r\n          <div class=\"dialog-content\">\r\n            <div class=\"dialog-header clearfix\">\r\n              <div class=\"col-md-12\">\r\n                <h4>Transaction Status</h4>\r\n              </div>\r\n            </div>\r\n            <div class=\"dialog-section\">\r\n              @if (payoutResponse?.Message) {\r\n                <p>{{ payoutResponse?.Message }}</p>\r\n              }\r\n              @if (payoutResponse?.TransactionId && !payoutResponse?.Message) {\r\n                <p>\r\n                  Your Request for Payout has been received for processing. The\r\n                  transaction Reference Number is\r\n                  <b>{{ payoutResponse?.TransactionId }}.</b> You will receive the amount\r\n                  in your registered bank within 24 working hours.\r\n                </p>\r\n              }\r\n              @if (!payoutResponse?.TransactionId && !payoutResponse?.Message) {\r\n                <p>\r\n                  {{ payoutResponse?.Status }}\r\n                </p>\r\n              }\r\n            </div>\r\n            <div class=\"dialog-footer clearfix\">\r\n              <button\r\n                class=\"btn sell\"\r\n                [showFocus]=\"payoutResponse\"\r\n                (click)=\"refreshFunds();\"\r\n                >\r\n                Close\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      }\r\n      <!-- popup for neft  -->\r\n      @if (showNeft?.toggle) {\r\n        <div class=\"dialog\">\r\n          <div class=\"dialog-content\">\r\n            <div class=\"dialog-header clearfix\">\r\n              <div class=\"col-md-12\">\r\n                <h4>Instruction for NEFT</h4>\r\n              </div>\r\n            </div>\r\n            <div class=\"dialog-section\">\r\n              <p>\r\n                Dear Investor, <br />\r\n                Please Deposit amount on any one of below given account for trading.\r\n              </p>\r\n              <table class=\"table table-hover table-striped table-bordered\">\r\n                <tbody>\r\n                  <tr>\r\n                    <th>Bank Name</th>\r\n                    <td width=\"270\">Yes Bank </td>\r\n                    <td>HDFC BANK</td>\r\n                    <td>ICICI BANK</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <th>Acc. Type</th>\r\n                    <td>Current</td>\r\n                    <td>Current</td>\r\n                    <td>Current</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <th>IFSC Code </th>\r\n                    <td>YESB\r\n                      <mark>0</mark>CMSNOC (fifth character is number zero)\r\n                    </td>\r\n                    <td>HDFC0000060</td>\r\n                    <td>ICIC0000104</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <th>Acc. Number</th>\r\n                    <td>CHOIEQ<strong>{{shared?.userId}}</strong>\r\n                    @if (!shared?.userId) {\r\n                      <i>\r\n                        <strong>&lt;CLIENTCODE&gt;</strong>\r\n                      </i>\r\n                    }\r\n                  </td>\r\n                  <td>CHOICE<strong>{{shared?.userId}}</strong>\r\n                  @if (!shared?.userId) {\r\n                    <i>\r\n                      <strong>&lt;CLIENTCODE&gt;</strong>\r\n                    </i>\r\n                  }\r\n                </td>\r\n                <td>CHEQ<strong>{{shared?.userId}}</strong>\r\n                @if (!shared?.userId) {\r\n                  <i>\r\n                    <strong>&lt;CLIENTCODE&gt;</strong>\r\n                  </i>\r\n                }\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <th>Branch Name</th>\r\n              <td>INDIABULLS FINANCE CENTRE</td>\r\n              <td>Fort Branch, Mumbai</td>\r\n              <td>-</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n        <br />\r\n        <!-- <table class=\"table table-hover table-striped table-bordered\">\r\n        <tbody>\r\n          <tr>\r\n            <th>Bank Name</th>\r\n            <td>ICICI Bank</td>\r\n            <td>HDFC Bank</td>\r\n            <td>Axis Bank</td>\r\n          </tr>\r\n          <tr>\r\n            <th>Acc. Type</th>\r\n            <td>Current</td>\r\n            <td>Current</td>\r\n            <td>Current</td>\r\n          </tr>\r\n          <tr>\r\n            <th>IFSC Code</th>\r\n            <td>ICIC0000004</td>\r\n            <td>HDFC0000060</td>\r\n            <td>UTIB0000004</td>\r\n          </tr>\r\n          <tr>\r\n            <th>MICR Code </th>\r\n            <td>400229002</td>\r\n            <td>400240015</td>\r\n            <td>400211002</td>\r\n          </tr>\r\n          <tr>\r\n            <th>Acc. Number</th>\r\n            <td>000405107280</td>\r\n            <td>15770340003528</td>\r\n            <td>910020019494087</td>\r\n          </tr>\r\n          <tr>\r\n            <th>Branch Name</th>\r\n            <td>Nariman Point, Mumbai</td>\r\n            <td>Fort, Mumbai</td>\r\n            <td>Fort, Mumbai</td>\r\n          </tr>\r\n        </tbody>\r\n      </table> -->\r\n      <p>\r\n        Please note after the deposit please share below given details on\r\n        <a href=\"mailto: b.accounts@choiceindia.com\"\r\n          >b.accounts&#64;choiceindia.com</a\r\n          >\r\n        </p>\r\n        <ol>\r\n          <li>Client Name & Mobile Number</li>\r\n          <li>Client ID</li>\r\n          <li>Deposit reference Number in case of RTGS & NEFT</li>\r\n          <li>Cheque depsit slip & Cheque Copy in case of Cheque deposit.</li>\r\n        </ol>\r\n      </div>\r\n      <div class=\"dialog-footer clearfix\">\r\n        <button class=\"btn sell\" (click)=\"closeNeft()\">Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n}\r\n";

/***/ })

}]);