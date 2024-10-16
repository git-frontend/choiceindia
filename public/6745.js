(self["webpackChunkjiffy_upgraded"] = self["webpackChunkjiffy_upgraded"] || []).push([[6745],{

/***/ 73543:
/*!***************************************************!*\
  !*** ./src/app/directives/lazy-load.directive.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LazyLoadDirective: () => (/* binding */ LazyLoadDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 33726);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 70152);





let LazyLoadDirective = class LazyLoadDirective {
  constructor(_element, _zone, platformId) {
    this._element = _element;
    this._zone = _zone;
    this.platformId = platformId;
    this.preRender = true;
    this.lazyLoad = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.checkForIntersection = entries => {
      entries.forEach(entry => {
        if (this.checkIfIntersecting(entry)) {
          this.load();
          if (this._intersectionObserver && this._element.nativeElement) {
            this._intersectionObserver.unobserve(this._element.nativeElement);
          }
        }
      });
    };
    this.onScroll = () => {
      if (this.isVisible()) {
        this._zone.run(() => this.load());
      }
    };
  }
  ngAfterViewInit() {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
      if (this.hasCompatibleBrowser()) {
        this.registerIntersectionObserver();
        if (this._intersectionObserver && this._element.nativeElement) {
          this._intersectionObserver.observe(this._element.nativeElement);
        }
      } else {
        this.addScrollListeners();
      }
    } else {
      if (this.preRender) {
        this.load();
      }
    }
  }
  hasCompatibleBrowser() {
    const hasIntersectionObserver = 'IntersectionObserver' in window;
    const userAgent = window.navigator.userAgent;
    const matches = userAgent.match(/Edge\/(\d*)\./i);
    const isEdge = !!matches && matches.length > 1;
    const isEdgeVersion16OrBetter = isEdge && !!matches && parseInt(matches[1], 10) > 15;
    return hasIntersectionObserver && (!isEdge || isEdgeVersion16OrBetter);
  }
  ngOnDestroy() {
    this.removeListeners();
  }
  registerIntersectionObserver() {
    if (!!this._intersectionObserver) {
      return;
    }
    this._intersectionObserver = new IntersectionObserver(entries => {
      this.checkForIntersection(entries);
    }, {});
  }
  checkIfIntersecting(entry) {
    // For Samsung native browser, IO has been partially implemented where by the
    // callback fires, but entry object is empty. We will check manually.
    if (entry && Object.keys(entry).length) {
      return entry.isIntersecting && entry.target === this._element.nativeElement;
    }
    return this.isVisible();
  }
  load() {
    this.removeListeners();
    this.lazyLoad.emit();
  }
  addScrollListeners() {
    if (this.isVisible()) {
      this.load();
      return;
    }
    this._zone.runOutsideAngular(() => {
      this._scrollSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(window, 'scroll').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.debounceTime)(50)).subscribe(this.onScroll);
    });
  }
  removeListeners() {
    if (this._scrollSubscription) {
      this._scrollSubscription.unsubscribe();
    }
    if (this._intersectionObserver) {
      this._intersectionObserver.disconnect();
    }
  }
  isVisible() {
    let scrollPosition = this.getScrollPosition();
    let elementOffset = this._element.nativeElement.offsetTop;
    return elementOffset <= scrollPosition;
  }
  getScrollPosition() {
    // Getting screen size and scroll position for IE
    return (window.scrollY || window.pageYOffset) + (document.documentElement.clientHeight || document.body.clientHeight);
  }
  static {
    this.ctorParameters = () => [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: Object,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID]
      }]
    }];
  }
  static {
    this.propDecorators = {
      preRender: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
      }],
      lazyLoad: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
      }]
    };
  }
};
LazyLoadDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({
  selector: '[lazyLoad]',
  standalone: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef, _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone, Object])], LazyLoadDirective);


/***/ }),

/***/ 66745:
/*!***************************************************************************!*\
  !*** ./src/app/pre-login-module/demat-account/demat-account.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DematAccountComponent: () => (/* binding */ DematAccountComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _demat_account_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./demat-account.component.html?ngResource */ 18151);
/* harmony import */ var _demat_account_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./demat-account.component.scss?ngResource */ 63591);
/* harmony import */ var _demat_account_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_demat_account_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var src_app_services_api_urls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api-urls */ 26702);
/* harmony import */ var src_app_services_rest_onboarding_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/rest/onboarding.service */ 90004);
/* harmony import */ var _directives_input_restrict2_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../directives/input-restrict2.directive */ 5833);
/* harmony import */ var _directives_lazy_load_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../directives/lazy-load.directive */ 73543);
/* harmony import */ var _directives_show_focus_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../directives/show-focus.directive */ 57862);
/* harmony import */ var _services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/analytics/analytics.service */ 50213);
/* harmony import */ var _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/seo/seo.service */ 44897);
/* harmony import */ var _services_rest_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../services/rest/common.service */ 18056);
/* harmony import */ var _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../services/shared-data/shared-data.service */ 46013);
/* harmony import */ var _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../services/utils/utils.service */ 89893);

















/**
 * Component for Demat Account Opening
 */
let DematAccountComponent = class DematAccountComponent {
  /**
   * Constructor for Object Iny;
  /**
   * Constructor for Object Initialization
   * @param rest CommonService instance
   * @param route Router instance
   * @param sharedDataService SharedDataService instance
   * @param utils UtilsService instance
   * @param seo SeoService instance
   */
  constructor(rest, route, analytics, sharedDataService, utils, seo, renderer, onboardingService, urls, activatedRoute) {
    this.rest = rest;
    this.route = route;
    this.analytics = analytics;
    this.sharedDataService = sharedDataService;
    this.utils = utils;
    this.seo = seo;
    this.renderer = renderer;
    this.onboardingService = onboardingService;
    this.urls = urls;
    this.activatedRoute = activatedRoute;
    /**Call Popup Value */
    this.isCall = false;
    /**CallBack Popup Value */
    this.isCallBack = false;
    /** error message */
    this.errorMessage = 'Something went wrong, please try again.';
    /** invalidMobEmail */
    this.isInvalidMobEmail = false;
    /** user consent message */
    this.isUserConsent = true;
    /** terms of use */
    this.termsOfUse = false;
    this.happyClient = [{
      'name': 'Manasi Gonsalves',
      'value': 'The team at Choice FinX define the name of the service. They were on-the-ball every time I had an issue and kept me involved until it was resolved.'
    }, {
      'name': 'Neeraj Modi',
      'value': 'The App works like a dream; apart from the working smoothly it is just so gorgeous to look at. The simplest and most effective trading app out there.'
    }, {
      'name': 'Kaushal Narvekar',
      'value': 'Started using the APP recently and it’s already delivering results! I mean, the trade-calls are spot-on and the research precise. The detail surely helps my decisions. Thank You Choice FinX.'
    }];
    this.onboarding = {
      "email": "",
      "mobile_number": "",
      "name": "",
      "city": "",
      "leadState": ""
    };
    this.isOTPGenerated = false;
    this.resendTimeout = true;
    this.utmTags = {};
    this.states = [];
    this.activatedRoute.queryParams.subscribe(params => {
      this.utmTags = params || {};
      this.onboarding.referredId = params.refercode ? atob(params.refercode) || '' : params.ref ? atob(params.ref) : '';
      this.onboarding.subReferralCode = params.subref ? atob(params.subref) : '';
      this.onboarding.leadSource = params.source ? atob(params.source) || '' : '';
      this.onboarding.name = params.name ? atob(params.name) || '' : '';
      this.onboarding.mobile_number = params.mobile ? atob(params.mobile) || '' : '';
      this.onboarding.email = params.emailid ? atob(params.emailid) || '' : '';
      this.onboarding.leadSource = this.onboarding.leadSource.toUpperCase();
      this.onboarding.obType = params.obtype ? params.obtype : '';
      this.onboarding.referredId ? this.seo.setMeta('referred-open-account') : this.seo.setMeta('open-demat-account');
    });
  }
  /** Life Cycle Hook */
  ngOnInit() {
    // const template = document.createElement('img');
    // // template.innerHTML = "Content inside DIV";
    //    template.src="https://bigtrunk.o18.click/p?o=16178242&m=3476&t=i";
    //    template.setAttribute('width','0px')
    //    template.setAttribute('height','0px')
    //  document.body.prepend(template);
    this.carouselTileItems = [0, 1, 2, 3, 4, 5, 6];
    this.carouselTile2 = {
      grid: {
        xs: 1,
        sm: 1,
        md: 1,
        lg: 1,
        all: 0
      },
      speed: 800,
      slide: 1,
      point: {
        visible: false
      },
      load: 1,
      touch: true
    };
    this.initializeStateList();
    this.initializeLeadCityList();
    this.faq = [{
      title: 'What are the documents required to open a Demat Account?',
      content: '<ul><li>PAN Card </li><li>Cancelled Cheque (that captures the MICR Code) </li><li>Passport Size Photograph </li><li>Aadhaar Card </li><li>Income Proof</li></ul>'
    }, {
      title: 'Why do you need to physically courier the Power Of Attorney?',
      content: 'A duly signed copy of the POA is required to authorise the broker to debit the shares from the investor’s Demat account when they want to sell their holdings. While earlier this was mandatory; as an alternative, an investor can authorise the transfer of the share through Electronic Delivery Instruction Slip (eDIS). eDIS requires the investor to authorise their holdings once daily before doing any sell transactions. <br> It is recommended to send a signed copy of your POA since it enables you to sell your holdings seamlessly without the need to authorise online all the time.'
    }, {
      title: 'Where should I courier the Power of Attorney?',
      content: 'You will be required to courier the POA to us on the below mentioned address: <br>Choice International Limited, Sunil Patodia Tower, <br>Chakravati Ashok Co-op Hsg. Soc. <br>CTS No: 156, 157, 158 <br>J.B. Nagar, Andheri (E) <br>Mumbai – 400099'
    }, {
      title: 'Are there any charges to open a Demat Account with Choice?',
      content: 'You can open a low brokerage Demat Account with Choice at Zero account opening charges. Further, we also provide free Lifetime Annual Maintenance Fee.'
    }, {
      title: 'Can I open a Trading account without opening a Demat Account?',
      content: 'Once you open a demat account online, a trading account will be created simultaneously. Following which, if you wish, you can add one or more demat accounts to this trading account online. However, this will be outside DP, due to which you can request us to keep the outside DP as the default DP or request to close the demat account with Choice. Otherwise, you can open a trading account offline.'
    }, {
      title: 'How do I switch my Demat from another broker to Choice?',
      content: 'You will be required to provide us the CML (Client Master List) Copy of your earlier DP and open a new Demat Account with us.'
    }, {
      title: 'Can I have multiple Demat Accounts mapped with my Trading Account?',
      content: 'Yes. But only one Demat Account will be mapped as Default where all the Pay Out shares will be credited.'
    }, {
      title: 'How can I transfer shares from another Demat Account to my Choice Demat Account?',
      content: 'You will be required to provide the Off Market Delivery Instruction Slip (DIS) to your previous DP, mentioning the target DP ID of the Demat Account you are holding in Choice Equity Broking Private Limited.'
    }];
  }
  /**
   * Check for User Details to track if its a new or Continue case
   */
  getOnboardingInfo() {
    if (this.utils.isAuthorized()) {
      let segmentId = this.user.serviceName.indexOf('Equity') > -1 ? 1 : this.user.serviceName.indexOf('Commodity') > -1 ? 5 : this.user.serviceName.indexOf('Derivatives') > -1 ? 2 : 13;
      if (this.utils.isSegmentAllowed(segmentId)) {
        alert('You have already Opted the Segment');
      } else {
        alert('You are already logged in and hence cannot proceed for onboarding.');
      }
      return false;
    }
    this.onboarding.panNo = this.onboarding.panNo.toUpperCase().trim();
    this.conversionAnalytics('button', 'click', 'Demat - Proceed Button Click');
    this.onboarding.panNo = this.onboarding.panNo.toUpperCase().trim();
    // this.rest.getUserDetailByPAN(btoa(this.onboarding.mobileNo), btoa(this.onboarding.panNo)).subscribe((data) => {
    //   if (data.code === "0001") {
    //     this.showMessage('Client already Exists', 'Client associated with this pan already exists. Please Login', true);
    //   } else if (data.code === "0005") {
    //     this.showMessage('Alert', data.desc, true);
    //   } else if (data.code === "0002" || data.code === "9996" || data.code === "0000" || data.code === "0003") {
    //     data.mobileNo = this.onboarding.mobileNo;
    //     data.isAddrSame = data.isAddrSame ? data.isAddrSame : 'Y';
    //     data.aadhaarNo = data.aadhaarNo ? data.aadhaarNo : ''
    //     data.marital = data.martial ? data.martial : 'M';
    //     data.dob = data.dob ? new moment(data.dob, 'DD/MM/YYYY').toDate() : '';
    //     data.panNo = this.onboarding.panNo.toUpperCase().trim();
    //     data.isAadhaar = data.isKYC == 'Y' ? 'N' : data.isAadhaar;
    //     data.aadhaarNo = data.isAadhaar == 'N' ? "" : data.aadhaarNo;
    //     data.accType = !data.accType || data.accType == 'S' ? true : false;
    //     data.isPolitics = data.isPolitics ? data.isPolitics : 'N';
    //     data.isNomineeToAdd = data.nomName ? true : false;
    //     data.nomDob = data.nomDob ? new moment(data.nomDob, 'DD/MM/YYYY').toDate() : ''
    //     data.nomIsMinor = data.nomIsMinor && data.nomIsMinor == 'Y' ? true : false;
    //     data.gender = data.gender?data.gender:'M';
    //     data.TnC = true;
    //     data.step = 3;
    //     let refCode = this.utils.get('referralCode');
    //     data.referCode = (refCode)?refCode:'';
    //     this.utils.updateOnBoardingData(data);
    //     if (data.code === "0003" || !data.panCardFileName || data.code === "0002" ) {
    //       this.route.navigate(['/onboarding/openAccount']);
    //     } else if (data.code === "0000" || (data.isKYC == 'Y' || data.isAadhaar == 'Y')) {
    //       this.route.navigate(['/onboarding/basicDetails']);
    //     } else if (data.code === "9996" || (data.isKYC == 'N' && data.isAadhaar == 'N')) {
    //       this.route.navigate(['/onboarding/basicDetails']);
    //     }
    //   } else {
    //     this.showMessage('Error', data.desc);
    //   }
    // }, (err) => {
    //   this.utils.error('Error', 'Something went wrong. Please Try again.');
    // })
    window.open(this.rest.getOnboardingURL(this.onboarding.panNo, this.onboarding.mobileNo, this.utmTags && this.utmTags.utm_medium == "seo_banner" ? true : false), "_self"); // open window in current tab(28/05/2021)
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
   * show Custom Alert based on title and Message
   * @param title title of Alert
   * @param message message to displayed
   * @param redirectToLogin wheter to redirect to login or not
   */
  showMessage(title, message, redirectToLogin) {
    this.confirmObj = {
      title: title,
      message: message,
      buttons: [{
        text: 'OK',
        type: 'positive',
        handler: () => {
          this.confirmObj = null;
          if (redirectToLogin) {
            this.route.navigate(['/auth/login']);
          }
        }
      }]
    };
  }
  /**
   * Show Call Us
   */
  showCall() {
    this.isCall = true;
    this.renderer.setStyle(document.body, 'overflow', 'hidden');
    this.renderer.addClass(document.body, 'modal_open');
    this.conversionAnalytics('button', 'click', 'Demat - Give Us a Call Button Click');
  }
  /**
   * Close Call Us
   */
  closeCall() {
    this.isCall = false;
    this.renderer.setStyle(document.body, 'overflow', 'auto');
    this.renderer.removeClass(document.body, 'modal_open');
  }
  /**
   * Show Call Us
   */
  showCallBack() {
    this.isCallBack = true;
    this.renderer.setStyle(document.body, 'overflow', 'hidden');
    this.renderer.addClass(document.body, 'modal_open');
  }
  /**
   * Close Call Us
   */
  closeCallBack() {
    this.isCallBack = false;
    this.renderer.setStyle(document.body, 'overflow', 'auto');
    this.renderer.removeClass(document.body, 'modal_open');
  }
  conversionAnalytics(source, type, tag) {
    this.analytics.appLink(tag);
    this.sendGAEvent(source, type, tag);
  }
  /**
  *Generate OTP
  */
  generateOTP() {
    this.onboardingService.generateOTP(this.onboarding).subscribe(data => {
      this.otpData = data;
      this.isServiceHit = false;
      if (data.otp_generated === true) {
        this.isOTPGenerated = true;
        this.resendTimeout = true;
        this.isServiceHit = true;
        setTimeout(x => {
          this.resendTimeout = false;
        }, 6000);
      } else {
        this.utils.error('Error', data.message);
        this.isServiceHit = true;
      }
    }, err => {
      this.isServiceHit = true;
      this.utils.error('Error', 'Something went wrong. Please Try again.');
    });
  }
  /**Closes OTP Popup */
  closeOTPPopup() {
    this.isOTPGenerated = false;
    this.invalidOTP = false;
    this.otp = '';
    if (this.mobileExist) return;
    this.onboardInfoForm.resetForm();
    this.onboarding.city = '';
  }
  scrollToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }
  /**
   * Validates OTP
   */
  validateOTP() {
    let request = {
      "session_id": this.otpData.session_id,
      "otp": this.otp
    };
    this.onboardingService.validateOTP(request).subscribe(data => {
      this.isServiceHit = false;
      if (data.status === "success") {
        this.isServiceHit = true;
        this.utils.success('Success', data.message);
        this.addNewLead(res => {
          this.url = this.onboardingService.getOnboardingURL(null, this.onboarding.mobile_number, this.utmTags && this.utmTags.utm_medium == "seo_banner" ? true : false) + '&lid=' + res.id + '&entityId=' + res.entityId + (this.onboarding.referredId ? '&refercode=' + btoa(this.onboarding.referredId) : '') + (this.onboarding.obType ? '&obtype=' + this.onboarding.obType : '');
          // ga('send', 'event', 'Demat Leads', 'Submit', 'Demat Leads'); // added google anlytics event (12/05/2021)
          this.closeOTPPopup();
          this.continueOnboard(true);
        });
      } else {
        // this.closeOTPPopup();
        // this.utils.error('Error', data.message);
        this.isServiceHit = true;
        this.invalidOTP = true;
        this.otp = '';
      }
    });
  }
  addNewLead(callback) {
    let state = (this.onboarding.city || 'OTHERS') == 'OTHERS' ? this.onboarding.leadState : this.leadCities.find(item => item.leadCity == this.onboarding.city).state || null;
    let request = {
      "firstName": this.onboarding.name,
      "mobileNo1": this.onboarding.mobile_number,
      "email1": this.onboarding.email,
      "serviceCode": "JF",
      "referredId": this.onboarding.referredId || null,
      "subReferralCode": this.onboarding.subReferralCode || null,
      "leadSource": this.onboarding.leadSource || "FinXWeb",
      "leadCityName": this.onboarding.city || 'OTHERS',
      "leadState": (state || '').toUpperCase(),
      "userConsent": this.isUserConsent
    };
    this.isServiceHit = true;
    request = {
      ...request,
      ...this.utmTags
    };
    this.onboardingService.addNewLead(request).subscribe(res => {
      if (res && !res.errorCode && !res.error) {
        this.url = this.onboardingService.getOnboardingURL(null, this.onboarding.mobile_number, this.utmTags && this.utmTags.utm_medium == "seo_banner" ? true : false) + '&lid=' + res.id + '&entityId=' + res.entityId + (this.onboarding.referredId ? '&refercode=' + btoa(this.onboarding.referredId) : '') + (this.onboarding.obType ? '&obtype=' + this.onboarding.obType : '');
        // ga('send', 'event', 'Demat Leads', 'Submit', 'Demat Leads'); // added google anlytics event (12/05/2021)
        this.continueOnboard(true);
        request['leadId'] = res.id;
        this.utils.setUserAttributes(request, true);
        this.utils.setTrackMoeEvent('on_click_generateLead_onboard', {
          "User_ID": this.utils.getUserId() || 'guest',
          "IP": this.sharedDataService.IPAddress
        });
        this.analytics.emitEvent('on_click_generateLead_onboard', this.utils.getUserId() || 'guest', JSON.stringify({
          "IP": this.sharedDataService.IPAddress
        }), 1);
      } else if (res && (res.errorCode || res.error) && res.errorCode == '0009') {
        this.closeOTPPopup();
        this.openErrorModal('isConvertedLead');
      } else if (res && (res.errorCode || res.error) && res.errorCode == '9999') {
        //this.utils.error("Error", res.message ? res.message : 'Something went wrong, please try again.');
        this.openErrorModal('mobileExist');
        this.errorMessage = res.message ? res.message : 'Something went wrong, please try again.';
        //  this.showMessage("Error",res.message ? res.message : 'Something went wrong, please try again.')
      } else {
        this.utils.error("Error", 'Something went wrong, please try again.');
      }
    }).add(() => {
      this.closeOTPPopup();
      this.isServiceHit = false;
    });
  }
  navigateToLogin() {
    this.renderer.setStyle(document.body, 'overflow', 'auto');
    this.renderer.removeClass(document.body, 'modal_open');
    this.route.navigate(['/auth/login']);
  }
  openErrorModal(key) {
    this[key] = true;
    this.renderer.setStyle(document.body, 'overflow', 'hidden');
    this.renderer.addClass(document.body, 'modal_open');
  }
  closeErroModal(key) {
    this[key] = false;
    this.renderer.setStyle(document.body, 'overflow', 'auto');
    this.renderer.removeClass(document.body, 'modal_open');
  }
  /**Onboarding Continue After OTP Verification */
  continueOnboard(flag, windowRef) {
    if (flag) {
      this.isContinueOnboard = false;
      window.open(this.url, "_self"); // open window in current tab (28/05/2021)
    } else {
      this.isContinueOnboard = false;
    }
  }
  /**
     * Gets Lead City Data from API.
     */
  initializeLeadCityList() {
    this.onboardingService.getLeadCities().subscribe(res => {
      if (res && !res.errorCode && !res.error) {
        this.leadCities = res;
      }
    });
  }
  /**
     * Gets Lead City Data from API.
     */
  initializeStateList() {
    this.onboardingService.getStates().subscribe(res => {
      if (res && !res.errorCode && !res.error) {
        this.states = res;
      }
    });
  }
  /** to check real time email and mobile */
  checkUniqueRealT(isMobile) {
    this.isInvalidMobEmail = false;
    this.mobileErrMsg = false;
    this.emailErrMsg = false;
    if (this.onboarding.name && (isMobile && this.onboarding.mobile_number.match(/^(6|9|8|7)([0-9]{9})$/) || !isMobile && this.onboarding.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))) {
      let request = {
        "serviceCode": "JF",
        "firstName": this.onboarding.name,
        "mobileNum": this.onboarding.mobile_number,
        "emailID": this.onboarding.email ? this.onboarding.email : ''
      };
      this.onboardingService.checkUniqueRealTime(request).subscribe(res => {
        if (res && (res['errorCode'] || res['error']) && ["0011", "0012"].indexOf(res['errorCode']) > -1) {
          this.isInvalidMobEmail = true;
          if (res['errorCode'] == "0011") {
            this.mobileErrMsg = true;
          } else {
            this.emailErrMsg = true;
          }
          this.errMsg = res['message'] ? res['message'] : 'Something went wrong, please try again.';
        }
      }, err => {
        this.isInvalidMobEmail = false;
        this.mobileErrMsg = false;
        this.emailErrMsg = false;
      });
    }
  }
  /** show terms and conditions */
  termsOfUsePopup(isOpen) {
    this.termsOfUse = isOpen ? true : false;
    this.renderer.setStyle(document.body, 'overflow', 'hidden');
    this.renderer.addClass(document.body, 'modal_open');
  }
  ngOnDestroy() {
    /*   let imgTag = document.body.getElementsByTagName("img")[0];
      if(imgTag && document.body.childNodes)
      document.body.removeChild(imgTag); */
  }
  static {
    this.ctorParameters = () => [{
      type: _services_rest_common_service__WEBPACK_IMPORTED_MODULE_9__.CommonService
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router
    }, {
      type: _services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_7__.AnalyticsService
    }, {
      type: _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_10__.SharedDataService
    }, {
      type: _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_11__.UtilsService
    }, {
      type: _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_8__.SeoService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Renderer2
    }, {
      type: src_app_services_rest_onboarding_service__WEBPACK_IMPORTED_MODULE_3__.OnboardingService
    }, {
      type: src_app_services_api_urls__WEBPACK_IMPORTED_MODULE_2__.APIURLs
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute
    }];
  }
  static {
    this.propDecorators = {
      onboardInfoForm: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild,
        args: ['onboardInfo', {
          static: false
        }]
      }]
    };
  }
};
DematAccountComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
  selector: 'app-demat-account',
  template: _demat_account_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  imports: [_directives_show_focus_directive__WEBPACK_IMPORTED_MODULE_6__.ShowFocusDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule, _directives_input_restrict2_directive__WEBPACK_IMPORTED_MODULE_4__.InputRestrict2Directive, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgClass, _directives_lazy_load_directive__WEBPACK_IMPORTED_MODULE_5__.LazyLoadDirective, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_16__.UpperCasePipe],
  providers: [src_app_services_rest_onboarding_service__WEBPACK_IMPORTED_MODULE_3__.OnboardingService],
  styles: [(_demat_account_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__metadata)("design:paramtypes", [_services_rest_common_service__WEBPACK_IMPORTED_MODULE_9__.CommonService, _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router, _services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_7__.AnalyticsService, _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_10__.SharedDataService, _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_11__.UtilsService, _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_8__.SeoService, _angular_core__WEBPACK_IMPORTED_MODULE_13__.Renderer2, src_app_services_rest_onboarding_service__WEBPACK_IMPORTED_MODULE_3__.OnboardingService, src_app_services_api_urls__WEBPACK_IMPORTED_MODULE_2__.APIURLs, _angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute])], DematAccountComponent);


/***/ }),

/***/ 63591:
/*!****************************************************************************************!*\
  !*** ./src/app/pre-login-module/demat-account/demat-account.component.scss?ngResource ***!
  \****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ 8564);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 98557);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.open-account-form {
  background: url('demat-banner.png') no-repeat;
  background-size: cover;
  background-position: bottom center;
  padding: 100px 0;
}

section {
  padding: 30px 0;
}

.display-none {
  display: none;
}

.form-card {
  padding: 50px;
  background: #ffffff;
  border-radius: 30px;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.5);
}

.head-title {
  color: #8a97a0;
  font-weight: 600;
  font-size: 22px;
  line-height: 32px;
  margin-top: 0;
  text-align: center;
}

.sub-head-title {
  color: #8a97a0;
  font-weight: 600;
  line-height: 32px;
  margin-top: 0;
  text-align: center;
  font-size: 14px;
}

.br-line1 {
  background: #fe616e;
  width: 50px;
  height: 4px;
  margin: 10px auto 20px auto;
}

.m-auto {
  margin: 0 auto;
}

.container {
  max-width: 1200px;
}

/*Forms*/
.btn-gradient {
  font-size: 18px;
  font-weight: bold;
  width: 100%;
  max-width: 150px;
  float: none;
  display: block;
}
@media (min-width: 1550px) {
  .btn-gradient {
    height: 60px;
  }
}

.otp-dialog .dialog-content {
  width: 305px;
}
.otp-dialog .dialog-section {
  overflow-x: hidden;
}

.otp-input {
  background-image: url('otp.svg');
  background-position: left bottom;
  background-size: 85% auto;
  background-repeat: no-repeat;
  width: 290px;
  margin: 0 auto;
  position: relative;
  margin-right: -25px;
}
.otp-input:before {
  content: "";
  width: 10%;
  background: #ffffff;
  height: 100%;
  position: absolute;
  top: 0;
  right: 10%;
}
.otp-input input {
  width: 100%;
  outline: none;
  letter-spacing: 27px;
  font-size: 20px;
  border: none;
  background: transparent;
  padding-left: 6px;
  padding-bottom: 5px;
}

.loader-wrap {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 99999;
  width: 100vw;
  height: 100vh;
}
.loader-wrap[hidden] {
  display: none;
}

.resend-btn {
  background: transparent;
  text-align: center;
  display: block;
  width: 100%;
  color: #ff6d6e;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 20px;
}

.demat-banner .card-body {
  padding: 30px;
}
@media (max-width: 990px) {
  .demat-banner .card-body {
    padding: 25px;
  }
}
@media (max-width: 560px) {
  .demat-banner .card-body {
    padding: 15px;
  }
}
.demat-banner .card-body button {
  margin-top: 40px;
}

.faqSection {
  padding: 100px 0;
  background: #fafbfd;
  background: #ffffff;
}
@media (max-width: 990px) {
  .faqSection {
    padding: 50px 0;
  }
}

.input-group {
  width: 100%;
  border-bottom: 1px solid #e3e3e3;
  padding: 0px 10px;
}
.input-group .form-control {
  border: none;
  border-radius: 0px;
  height: 45px;
  font-size: 16px;
  padding-left: 0px;
  padding-right: 0px;
  color: #000000;
  outline: none;
  background: transparent;
  box-shadow: none;
}
@media (max-width: 1550px) {
  .input-group .form-control {
    height: 40px;
    font-size: 14px;
  }
}
.input-group .form-control:focus {
  border-color: #e3e3e3;
  outline: none;
  box-shadow: none;
}
.input-group .input-group-addon {
  background: #ffffff;
  color: #c7c7c7;
  border-radius: 0px;
  font-size: 20px;
  border-color: #e3e3e3;
  border: none;
  padding-left: 0px;
}
.input-group .input-group-addon:last-child {
  padding-right: 0px;
  padding-left: 12px;
}
.input-group .input-group-addon button {
  padding: 0;
  background: transparent;
  box-shadow: none;
  color: #c7c7c7;
}

.btn-primary {
  border: none;
  border-radius: 30px;
  box-shadow: -1px 0px 8px 6px rgba(241, 242, 255, 0.76);
  padding: 10px 20px;
  background-image: linear-gradient(to right, #ffc174 0%, #fe616e 100%);
  text-transform: uppercase;
}

.error {
  color: red;
  font-size: 14px;
  padding-top: 5px;
  margin: 0;
}

.svg-wrap {
  margin-top: 50px;
}

.segments-wrapper {
  padding: 50px 0;
}
.segments-wrapper .segments {
  padding: 90px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('different-segments.png');
  background-position: bottom center;
  background-size: contain;
  background-repeat: no-repeat;
}
@media (max-width: 580px) {
  .segments-wrapper .segments {
    flex-wrap: wrap;
    padding: 30px 0 90px 0px;
  }
}
.segments-wrapper .segments div {
  padding: 0 25px;
}
@media (max-width: 767px) {
  .segments-wrapper .segments div {
    width: 25%;
    padding: 0 5px;
  }
}
@media (max-width: 580px) {
  .segments-wrapper .segments div {
    width: 50%;
  }
}
.segments-wrapper .segments img {
  display: block;
  margin: 0 auto;
}
.segments-wrapper .segments p {
  margin-top: 15px;
  text-align: center;
  color: #000000;
  font-weight: 700;
}
.segments-wrapper .segments p span {
  display: block;
}

.customer-service {
  padding: 50px 0;
  background: #f5f5f5;
  color: #8a97a0;
  font-weight: bold;
  font-size: 21px;
}

.demat-offer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0 70px 0;
}
@media (max-width: 1200px) {
  .demat-offer {
    margin: 20px 0 40px 0;
  }
}
@media (max-width: 990px) {
  .demat-offer {
    flex-wrap: wrap;
    margin-bottom: 0;
  }
}
.demat-offer .offers {
  width: 48%;
  padding: 30px;
  box-shadow: 0px 3px 7px #fe646e;
  display: flex;
  align-items: center;
  border-radius: 10px;
  min-height: 135px;
  box-shadow: 0px 3px 6px rgba(45, 119, 244, 0.6);
}
@media (max-width: 1200px) {
  .demat-offer .offers {
    padding: 20px;
  }
}
@media (max-width: 990px) {
  .demat-offer .offers {
    margin-bottom: 30px;
  }
}
@media (max-width: 560px) {
  .demat-offer .offers {
    width: 100%;
    min-height: auto;
  }
}
.demat-offer .offers i {
  font-size: 60px;
  color: #fe6b74;
  margin-right: 30px;
  color: #2D77F4;
}
@media (max-width: 1200px) {
  .demat-offer .offers i {
    font-size: 40px;
  }
}
.demat-offer .offers .offer-title {
  font-size: 18px;
  font-weight: 600;
  color: #333333;
}
@media (max-width: 1200px) {
  .demat-offer .offers .offer-title {
    font-size: 16px;
  }
}

.contact-wrapper {
  padding: 70px;
  margin-top: 100px;
  text-align: center;
  background: url('contact-bg.png') no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 15px;
  overflow: hidden;
}
@media (max-width: 1550px) {
  .contact-wrapper {
    margin-top: 50px;
  }
}
@media (max-width: 767px) {
  .contact-wrapper {
    padding: 30px;
  }
}
.contact-wrapper h2 {
  color: #ffffff;
  margin-bottom: 50px;
  margin-top: 0px;
  font-size: 34px;
  font-weight: 600;
}
@media (max-width: 990px) {
  .contact-wrapper h2 {
    font-size: 25px;
  }
}
.contact-wrapper .btn-wrap .btn-white {
  padding: 10px 30px;
  font-size: 20px;
  color: #fe646e;
  background: #ffffff;
  box-shadow: 0px 1px 12px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.0784313725);
  border-radius: 5px;
  color: #2D77F4;
}
@media (max-width: 560px) {
  .contact-wrapper .btn-wrap .btn-white {
    display: block;
    margin: 0 auto;
  }
}
.contact-wrapper .btn-wrap .btn-white + .btn-white {
  margin-left: 40px;
}
@media (max-width: 560px) {
  .contact-wrapper .btn-wrap .btn-white + .btn-white {
    margin-left: 0;
    margin-top: 15px;
  }
}

.call-popup form {
  padding: 20px 40px;
}
@media (max-width: 560px) {
  .call-popup form {
    padding: 20px;
  }
}
.call-popup form h2 {
  margin-top: 0px;
  margin-bottom: 40px;
  text-align: center;
}
.call-popup:before {
  content: "";
  width: 100%;
  height: 10px;
  background: #febf74;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  position: absolute;
  bottom: 100%;
  left: 0;
  right: 0;
  margin: 0 auto;
  background: #2d77f4;
}
.call-popup:after {
  content: "";
  width: 80%;
  height: 10px;
  background: #febf74;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin: 0 auto;
  background: #2d77f4;
}

.call-wrap {
  padding: 35px !important;
  text-align: center;
}
.call-wrap h2 {
  margin-top: 0;
  margin-bottom: 40px;
  font-weight: 600;
  font-size: 22px;
}
.call-wrap .callno {
  font-size: 22px;
  font-weight: 500;
  color: #333333;
  text-decoration: none;
}

.close {
  position: absolute;
  top: 0;
  right: 0;
  padding: 15px;
  font-size: 35px;
}

.tab {
  position: relative;
  margin-bottom: 1px;
  width: 100%;
  color: #fff;
  overflow: hidden;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1607843137);
  border-radius: 2px;
}
.tab input {
  position: absolute;
  opacity: 0;
  z-index: -1;
}
.tab label {
  position: relative;
  display: block;
  font-weight: bold;
  cursor: pointer;
  background-color: #fff;
  border: none;
  padding: 20px 30px;
  font-size: 16px;
  color: #000000;
  font-weight: 500;
  margin-bottom: 0;
}

.tab-content {
  max-height: 0;
  overflow: hidden;
  background: #ffffff;
  color: #8a979f;
  font-size: 16px;
  transition: all 0.35s;
}

.tab-content p {
  margin: 1em;
}

/* :checked */
.tab input:checked ~ .tab-content {
  max-height: 100vh;
  padding: 20px 30px;
  padding-top: 0px;
  color: #060842;
}
.tab + .tab {
  margin-top: 2.5rem;
}
.tab input[type=radio] + label::after {
  content: "\\f107";
  font-family: "icomoon" !important;
  font-size: 25px;
  position: absolute;
  right: 20px;
  top: 50%;
  color: #8a979f;
  line-height: 100%;
  transform: translateY(-50%);
}
.tab input[type=radio]:checked + label::after {
  transform: translateY(-50%) rotateX(180deg);
}

.checkboxmsg {
  color: black;
  padding: 10px 10px 10px 10px;
}`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 18151:
/*!****************************************************************************************!*\
  !*** ./src/app/pre-login-module/demat-account/demat-account.component.html?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"loader-wrap\" [hidden]=\"!isServiceHit\">\r\n  <img class=\"loader-img\" src=\"assets/images/loader.gif\" />\r\n</div>\r\n@if (confirmObj) {\r\n  <div class=\"dialog\">\r\n    <div class=\"dialog-content\">\r\n      <div class=\"dialog-header clearfix\">\r\n        <div class=\"col-md-12\">\r\n          <h4 class=\"popup-title\">{{ confirmObj?.title }}</h4>\r\n        </div>\r\n      </div>\r\n      <div class=\"dialog-section\">\r\n        <p>{{ confirmObj?.message }}</p>\r\n      </div>\r\n      <div class=\"dialog-footer clearfix\">\r\n        @for (button of confirmObj.buttons; track button) {\r\n          <button class=\"btn\" [class.buy]=\"button?.type == 'positive'\" [class.sell]=\"button?.type == 'negative'\"\r\n            (click)=\"button?.handler()\" [showFocus]=\"button?.type == 'positive'\">\r\n            {{ button?.text }}\r\n          </button>\r\n        }\r\n      </div>\r\n    </div>\r\n  </div>\r\n}\r\n\r\n<section class=\"demat-banner\">\r\n  <!-- <div class=\"overlay\" [hidden]=\"!shared.isServiceHit\">\r\n  <img class=\"loader\" src=\"{{shared.serverImageUrl +'loader.gif'}}\" />\r\n</div> -->\r\n<div class=\"container\">\r\n  <div class=\"col-sm-6 col-md-6 left-part-w\">\r\n    <h1 class=\"banner-head text-uppercase\">\r\n      OPEN A\r\n      <span>FREE</span>\r\n      DEMAT ACCOUNT ONLINE\r\n    </h1>\r\n\r\n    <ul>\r\n      <li>\r\n        <span>\r\n          <i class=\"icon-rounded-arrow\"></i> </span>Zero Account Opening Fee <sup>*</sup>\r\n        </li>\r\n        <li>\r\n          <span>\r\n            <i class=\"icon-rounded-arrow\"></i> </span>Low Brokerage Charges\r\n          </li>\r\n          <li>\r\n            <span>\r\n              <i class=\"icon-rounded-arrow\"></i> </span>Trade at 2 Paisa*\r\n            </li>\r\n            <li>\r\n              <span>\r\n                <i class=\"icon-rounded-arrow\"></i> </span>Free Research with 78% success ratio\r\n              </li>\r\n              <!-- <li *ngIf=\"!utmTags?.refercode\" title=\"Applicable to Accounts opened online without Refer Code\">\r\n              <span>\r\n                <i class=\"icon-rounded-arrow\"></i>\r\n                </span>First Year AMC Free <sup>*</sup></li> -->\r\n              </ul>\r\n            </div>\r\n            <div class=\"col-sm-6 col-md-4 col-md-offset-2\">\r\n              <div class=\"card\">\r\n                <div class=\"card-title text-center\">\r\n                  <h5>OPEN A FREE ACCOUNT</h5>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                  <form name=\"onboardInfo\" (ngSubmit)=\"addNewLead()\" #onboardInfo=\"ngForm\">\r\n                    <div class=\"form-group\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-xs-12 mb-20\">\r\n                          <div class=\"input-group\">\r\n                            <span class=\"input-group-addon\">\r\n                              <i aria-hidden=\"true\" class=\"icon-name\"></i>\r\n                            </span>\r\n                            <label for=\"name\" hidden></label>\r\n                            <input type=\"text\" class=\"form-control\" autocomplete=\"off\" id=\"name\" [(ngModel)]=\"onboarding.name\"\r\n                              aria-label=\"Name\" placeholder=\"Enter Full Name *\" name=\"name\"\r\n                              pattern=\"^(?!.*[\\s]{2,})(?!.*[\\.]{2,})(?!.*[\\']{2,})(?!.*[\\-]{2,})(?=.{2,}$)(([A-Za-z\\.\\'\\- ])\\2?(?!\\2))+$\"\r\n                              #name=\"ngModel\" inputRestrict=\"words\" required />\r\n                            </div>\r\n                            @if (name.errors?.pattern && name.dirty) {\r\n                              <p class=\"animate error\">\r\n                                Full Name is invalid.\r\n                              </p>\r\n                            }\r\n                            @if (name.errors?.required && name.dirty) {\r\n                              <p class=\"animate error\">\r\n                                Full Name is required.\r\n                              </p>\r\n                            }\r\n                          </div>\r\n                          <div class=\"col-xs-12 mb-20\">\r\n                            <div class=\"input-group\">\r\n                              <span class=\"input-group-addon\">\r\n                                <i aria-hidden=\"true\" class=\"icon-mobile\"></i>\r\n                              </span>\r\n                              <label for=\"mobile_number\" hidden></label>\r\n\r\n                              <input type=\"tel\" class=\"form-control numberonly\" autocomplete=\"off\" id=\"mobile_number\"\r\n                                aria-label=\"Mobile Name\" inputRestrict=\"unsignedInteger\" maxlength=\"10\"\r\n                                [(ngModel)]=\"onboarding.mobile_number\" pattern=\"^(6|9|8|7)([0-9]{9})$\" name=\"mobile_number\"\r\n                                #mobile_number=\"ngModel\" placeholder=\"Mobile Number *\" (input)=\"checkUniqueRealT(true)\"\r\n                                required />\r\n\r\n\r\n                              </div>\r\n                              @if (\r\n                                mobile_number.errors?.required && mobile_number.dirty\r\n                                ) {\r\n                                <p class=\"animate error\">\r\n                                  Mobile Number is required.\r\n                                </p>\r\n                              }\r\n                              @if (mobile_number.errors?.pattern && mobile_number.dirty) {\r\n                                <p class=\"animate error\">\r\n                                  Invalid Mobile Number.\r\n                                </p>\r\n                              }\r\n                              @if (mobileErrMsg) {\r\n                                <p class=\"animate error\">\r\n                                  {{errMsg}}\r\n                                </p>\r\n                              }\r\n                            </div>\r\n                            <div class=\"col-xs-12 mb-20 clearfix\">\r\n                              <div class=\"input-group\">\r\n                                <span class=\"input-group-addon\">\r\n                                  <i aria-hidden=\"true\" class=\"icon-email-id\"></i>\r\n                                </span>\r\n                                <label for=\"email\" hidden></label>\r\n                                <input type=\"email\" class=\"form-control\" autocomplete=\"off\" id=\"email\" aria-label=\"email\"\r\n                                  [(ngModel)]=\"onboarding.email\" name=\"email\" #email=\"ngModel\" placeholder=\"Email ID\"\r\n                                  pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" (input)=\"checkUniqueRealT(false)\" />\r\n                                </div>\r\n                                @if (email.errors?.pattern) {\r\n                                  <p class=\"animate error\">\r\n                                    Invalid Email ID.\r\n                                  </p>\r\n                                }\r\n                                @if (emailErrMsg) {\r\n                                  <p class=\"animate error\">\r\n                                    {{errMsg}}\r\n                                  </p>\r\n                                }\r\n                              </div>\r\n\r\n                              @if (!utmTags?.refercode) {\r\n                                <div class=\"col-xs-12 mb-20 clearfix\" [ngClass]=\"{'display-none':onboarding?.subReferralCode}\"\r\n                                  >\r\n                                  <div class=\"input-group\">\r\n                                    <span class=\"input-group-addon\">\r\n                                      <i aria-hidden=\"true\" class=\"icon-name\"></i>\r\n                                    </span>\r\n                                    <label for=\"referredId\" hidden></label>\r\n                                    <input type=\"text\" class=\"form-control\" autocomplete=\"off\" id=\"referredId\" aria-label=\"Referal code\"\r\n                                      [(ngModel)]=\"onboarding.referredId\" name=\"referredId\" #referredId=\"ngModel\"\r\n                                      placeholder=\"Referral Code\" pattern=\"^[A-z0-9]+$\" />\r\n                                    </div>\r\n                                    @if (referredId.errors?.pattern && referredId.dirty) {\r\n                                      <p class=\"animate error\">\r\n                                        Invalid Refer ID.\r\n                                      </p>\r\n                                    }\r\n                                  </div>\r\n                                }\r\n\r\n                                @if (!leadCities?.length) {\r\n                                  <div class=\"col-xs-12 col-xss-12\">\r\n                                    <div class=\"input-group\">\r\n                                      <span class=\"input-group-addon\">\r\n                                        <i aria-hidden=\"true\" class=\"icon-location\"></i>\r\n                                      </span>\r\n                                      <label for=\"leadCity\" hidden></label>\r\n                                      <select class=\"form-control\" [(ngModel)]=\"onboarding.city\" name=\"cityInput\" #city=\"ngModel\" required\r\n                                        id=\"leadCity\" aria-label=\"City\">\r\n                                        <option value=\"OTHERS\" selected>OTHERS</option>\r\n                                      </select>\r\n                                    </div>\r\n                                  </div>\r\n                                }\r\n                                @if (leadCities?.length) {\r\n                                  <div class=\"col-xs-12 col-xss-12\" [class.mb-20]=\"onboarding.city=='OTHERS'\">\r\n                                    <div class=\"input-group\">\r\n                                      <span class=\"input-group-addon\">\r\n                                        <i aria-hidden=\"true\" class=\"icon-location\"></i>\r\n                                      </span>\r\n                                      <select class=\"form-control\" [(ngModel)]=\"onboarding.city\" name=\"cityInput\"\r\n                                        aria-label=\"City location\" #city=\"ngModel\" required>\r\n                                        <option value=\"\" selected>SELECT CITY</option>\r\n                                        @for (city of leadCities; track city) {\r\n                                          <option [value]=\"city.leadCity\">{{ city.leadCity }}</option>\r\n                                        }\r\n                                      </select>\r\n                                    </div>\r\n                                    @if (city.errors?.required && city.dirty) {\r\n                                      <p class=\"animate error\">\r\n                                        Lead City is required.\r\n                                      </p>\r\n                                    }\r\n                                  </div>\r\n                                }\r\n\r\n                                @if (states?.length && onboarding.city=='OTHERS') {\r\n                                  <div class=\"col-xs-12 col-xss-12\">\r\n                                    <div class=\"input-group\">\r\n                                      <span class=\"input-group-addon\">\r\n                                        <i aria-hidden=\"true\" class=\"icon-location\"></i>\r\n                                      </span>\r\n                                      <select class=\"form-control\" [(ngModel)]=\"onboarding.leadState\" name=\"stateInput\"\r\n                                        aria-label=\"City location\" #state=\"ngModel\" [required]=\"onboarding.city=='OTHERS'\">\r\n                                        <option value=\"\" selected>SELECT STATE</option>\r\n                                        @for (state of states; track state) {\r\n                                          <option [value]=\"state.stateName| uppercase\">\r\n                                          {{ state.stateName| uppercase }}</option>\r\n                                        }\r\n                                      </select>\r\n                                    </div>\r\n                                    @if (state.errors?.required && state.dirty) {\r\n                                      <p class=\"animate error\">\r\n                                        State is required.\r\n                                      </p>\r\n                                    }\r\n                                  </div>\r\n                                }\r\n\r\n\r\n\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-xs-12 col-xss-12\">\r\n                              <div>\r\n                                <input type=\"checkbox\" [(ngModel)]=\"isUserConsent\" [ngModelOptions]=\"{standalone: true}\">\r\n                                <small class=\"checkboxmsg\">I agree to the <a (click)=\"termsOfUsePopup(1)\" style=\"color:black;\"><u>Terms\r\n                                and Conditions</u></a></small>\r\n                              </div>\r\n                            </div>\r\n                            <br>\r\n                              <button class=\"btn col-xs-4 m-auto btn-gradient\" type=\"submit\"\r\n                                [disabled]=\"onboardInfo.invalid || isInvalidMobEmail || !isUserConsent\">\r\n                                Proceed\r\n                              </button>\r\n                            </form>\r\n                            <!-- <form name=\"onboardInfo\" (ngSubmit)=\"getOnboardingInfo()\" #onboardInfo=\"ngForm\">\r\n                            <div class=\"form-group\">\r\n                              <div class=\"mb-20\">\r\n                                <div class=\"input-group\">\r\n                                  <input type=\"tel\" class=\"form-control numberonly\" autocomplete=\"off\" id=\"mobile\" inputRestrict=\"unsignedInteger\"\r\n                                    maxlength=\"10\" [(ngModel)]=\"onboarding.mobileNo\" placeholder=\"eg.9123456789\" pattern=\"^(6|9|8|7)([0-9]{9})$\"\r\n                                    name=\"mobile\" #mobile=\"ngModel\" placeholder=\"Mobile Number\" required>\r\n                                  </div>\r\n                                  <p class=\"animate error\" *ngIf=\"mobile.errors?.required && mobile.dirty\">Mobile Number is required.</p>\r\n                                  <p class=\"animate error\" *ngIf=\"mobile.errors?.pattern && mobile.dirty\">Invalid Mobile Number.</p>\r\n                                </div>\r\n                                <div class=\"mb-20\">\r\n                                  <div class=\"input-group\">\r\n                                    <input type=\"text\" class=\"form-control text-uppercase\" autocomplete=\"off\" id=\"pancard\" inputRestrict=\"alphanumeric\"\r\n                                      maxlength=\"10\" [(ngModel)]=\"onboarding.panNo\" required placeholder=\"PAN Card\" #pancard=\"ngModel\"\r\n                                      pattern=\"^[a-zA-Z]{3}[pP]{1}[a-zA-Z]{1}[0-9]{4}[a-zA-Z]{1}$\" name=\"pancard\">\r\n                                    </div>\r\n                                    <p class=\"animate error\" *ngIf=\"pancard.errors?.required && pancard.dirty\">PAN Number is required.</p>\r\n                                    <p class=\"animate error\" *ngIf=\"pancard.errors?.pattern && pancard.dirty\">Invalid PAN Number.</p>\r\n                                  </div>\r\n                                </div>\r\n                                <button class=\"btn col-xs-4 m-auto btn-gradient\" type=\"submit\" (click)=\"sendGAEvent( 'button', 'click','Demat - Proceed Button Click')\" [disabled]=\"onboardInfo.invalid\">Proceed</button>\r\n                              </form> -->\r\n                            </div>\r\n                            <div class=\"card-footer\">\r\n                              <p>\r\n                                Your PAN is linked with your Investment Account.We make sure it’s\r\n                                encrypted and stored securely.\r\n                              </p>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </section>\r\n\r\n                    <section class=\"demat-card-section\">\r\n                      <div class=\"container\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-md-8 col-md-offset-2\">\r\n                            <h2 class=\"text-center\">WHY OPEN A DEMAT ACCOUNT ONLINE WITH Choice FinX?</h2>\r\n                          </div>\r\n                          <div class=\"col-md-12\">\r\n                            <div class=\"demat-offer\">\r\n                              <div class=\"offers\">\r\n                                <i class=\"icon-recommendation\"></i>\r\n                                <div class=\"offer-title\">\r\n                                  Expert Recommended Research Reports\r\n                                </div>\r\n                              </div>\r\n                              <!-- <div class=\"offers\">\r\n                              <i class=\"icon-margin\"></i>\r\n                              <div class=\"offer-title\">\r\n                                Upto 25X* Margin\r\n                              </div>\r\n                            </div> -->\r\n                            <div class=\"offers\">\r\n                              <i class=\"icon-low-brokerage\"></i>\r\n                              <div class=\"offer-title\">\r\n                                Low Brokerage Charges\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </section>\r\n\r\n                  <section class=\"platformsection\">\r\n                    <div class=\"container\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-md-8 col-md-offset-2\">\r\n                          <div class=\"sectiontitle text-center\">\r\n                            <h2>TRADE ACROSS 3 DIFFERENT PLATFORMS</h2>\r\n                            <p>\r\n                              Choice FinX is powered by Choice Broking and offers a seamless trading\r\n                              experience across Equity, Derivatives, Commodity and Currency. Get\r\n                              Choice FinX on:\r\n                            </p>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"row\">\r\n      <div class=\"col-md-12\" (lazyLoad)=\"\r\n          sharedDataService?.images['online-stock-trading-platform.png'] = true\r\n        \">\r\n                          @if (\r\n                            (sharedDataService?.images)['online-stock-trading-platform.png']\r\n                            ) {\r\n                            <img src=\"../../../assets/images/blue-theme/online-stock-trading-platform.png\"\r\n                              alt=\"Online Stock Trading Platform\" class=\"img-responsive\" />\r\n                          }\r\n                        </div>\r\n                        <div class=\"col-md-12\">\r\n                          <div class=\"btn-wrapper\">\r\n                            <a class=\"btn btn-outline\" href=\"https://play.google.com/store/apps/details?id=com.choiceequitybroking.jiffy\"\r\n            target=\"_blank\" (click)=\"\r\n              conversionAnalytics(\r\n                'button',\r\n                'click',\r\n                'Demat - Android App Button Click'\r\n              )\r\n            \" rel=\"noopener\">\r\n                              <i class=\"icon-android\"></i> Android</a>\r\n                              <a class=\"btn btn-outline\"\r\n                                href=\"https://itunes.apple.com/us/app/jiffy-mobile-trading-app/id1327801261?ls=1&mt=8\" target=\"_blank\"\r\n            rel=\"noopener\" (click)=\"\r\n              conversionAnalytics(\r\n                'button',\r\n                'click',\r\n                'Demat -  iOS App Button Click'\r\n              )\r\n            \">\r\n                                <i class=\"icon-apple\"></i> iOS</a>\r\n          <a class=\"btn btn-outline\" routerLink=\"/\" (click)=\"\r\n              conversionAnalytics('button', 'click', 'Demat - Web Button Click')\r\n            \" [queryParams]=\"{\r\n              utm_source: 'referral',\r\n              utm_medium: 'demat-page',\r\n              utm_campaign: 'demat-page-referral'\r\n            }\">\r\n                                  <i class=\"icon-web\"></i> Web</a>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </section>\r\n                        <section class=\"calculateSection\">\r\n                          <div class=\"container\">\r\n                            <div class=\"row\">\r\n                              <div class=\"col-lg-6 col-lg-offset-3 col-md-10 col-md-offset-1 text-center\">\r\n                                <h2>CALCULATE HOW MUCH BROKERAGE YOU PAY ON TRADES ?</h2>\r\n                                <div class=\"brokerage-btn\">\r\n                                  <!--   <a href=\"assets/redirection.html?https://choiceindia.com/brokerage-charges\" target=\"_blank\"\r\n            rel=\"noopener\"><button class=\"btn btn-outline\" (click)=\"\r\n                conversionAnalytics(\r\n                  'button',\r\n                  'click',\r\n                  'Demat - Brokerage Charges Button Click'\r\n                )\r\n              \" [queryParams]=\"{\r\n                utm_source: 'referral',\r\n                utm_medium: 'demat-page',\r\n                utm_campaign: 'demat-page-referral'\r\n              }\">\r\n                                  Brokerage Charges\r\n                                </button></a> -->\r\n          <button class=\"btn btn-outline\" routerLink=\"/tools/brokerage-calculator\" (click)=\"\r\n              conversionAnalytics(\r\n                'button',\r\n                'click',\r\n                'Demat - Brokerage Calculator Button Click'\r\n              )\r\n            \" [queryParams]=\"{\r\n              utm_source: 'referral',\r\n              utm_medium: 'demat-page',\r\n              utm_campaign: 'demat-page-referral'\r\n            }\">\r\n                                  Brokerage Calculator\r\n                                </button>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </section>\r\n                      <section class=\"processSection\">\r\n                        <div class=\"container\">\r\n                          <div class=\"row\">\r\n                            <div class=\"col-md-12\">\r\n                              <h2 class=\"text-center\">DEMAT ACCOUNT OPENING PROCESS</h2>\r\n                            </div>\r\n                            <div class=\"col-lg-4 col-md-6\">\r\n                              <div class=\"process-list\">\r\n                                <div class=\"process-icon\">\r\n                                  <i class=\"icon-register-online\"></i>\r\n                                </div>\r\n                                <div class=\"process\">\r\n                                  <div class=\"process-title\">\r\n                                    Register Online\r\n                                  </div>\r\n                                  <p>\r\n                                    Fill in the required details and upload the relevant documents\r\n                                    along with a passport size photograph.\r\n                                  </p>\r\n                                </div>\r\n                              </div>\r\n\r\n                              <div class=\"process-list\">\r\n                                <div class=\"process-icon\">\r\n                                  <i class=\"icon-sign\"></i>\r\n                                </div>\r\n                                <div class=\"process\">\r\n                                  <div class=\"process-title\">\r\n                                    In-Person Verification\r\n                                  </div>\r\n                                  <p>Complete the In-person verification (IPV).</p>\r\n                                </div>\r\n                              </div>\r\n\r\n                              <div class=\"process-list\">\r\n                                <div class=\"process-icon\">\r\n                                  <i class=\"icon-tick\"></i>\r\n                                </div>\r\n                                <div class=\"process\">\r\n                                  <div class=\"process-title\">\r\n                                    Registration Complete\r\n                                  </div>\r\n                                  <p>Your Demat Account is successfully opened on Choice FinX.</p>\r\n                                </div>\r\n                              </div>\r\n\r\n                              <div class=\"process-list\">\r\n                                <div class=\"process-icon\">\r\n                                  <i class=\"icon-courier\"></i>\r\n                                </div>\r\n                                <div class=\"process\">\r\n                                  <div class=\"process-title\">\r\n                                    Courier POA\r\n                                  </div>\r\n                                  <p>\r\n                                    Courier us the signed copy of the Power of Attorney (POA) sent on\r\n                                    your registered Email ID.\r\n                                  </p>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-lg-7 col-md-6 col-lg-offset-1 hidden-sm hidden-xs\">\r\n        <div class=\"\" (lazyLoad)=\"\r\n            sharedDataService?.images[\r\n              'free-demat-account-online-opening-process.png'\r\n            ] = true\r\n          \">\r\n                                @if (\r\n                                  (sharedDataService?.images)[\r\n                                  'free-demat-account-online-opening-process.png'\r\n                                  ]\r\n                                  ) {\r\n                                  <img src=\"../../../assets/images/blue-theme/free-demat-account-online-opening-process.png\"\r\n                                    alt=\"Free Demat Account Online Opening Process\" class=\"img-responsive\" />\r\n                                }\r\n                              </div>\r\n                            </div>\r\n\r\n                            <div class=\"col-md-12 d-flex justify-content-center\">\r\n                              <Button class=\"btn btn-gradient1\" (click)=\"scrollToTop()\">Open Demat Account</Button>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </section>\r\n\r\n                      <section class=\"faqSection\">\r\n                        <div class=\"container\">\r\n                          <div class=\"row\">\r\n                            <div class=\"col-md-8 col-md-offset-2\">\r\n                              <div class=\"sectiontitle text-center\">\r\n                                <h2>FREQUENTLY ASKED QUESTIONS</h2>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-md-10 col-md-offset-1\">\r\n                              @for (item of faq; track item; let i = $index) {\r\n                                <div class=\"tab\">\r\n                                  <input id=\"tab-{{ i }}\" type=\"radio\" name=\"tabs\" />\r\n                                  <label for=\"tab-{{ i }}\">{{ item.title }}</label>\r\n                                  <div class=\"tab-content\" [innerHtml]=\"item.content\"></div>\r\n                                </div>\r\n                              }\r\n                            </div>\r\n                            <div class=\"col-md-12\">\r\n                              <div class=\"contact-wrapper\">\r\n                                <div class=\"sectiontitle text-center\">\r\n                                  <h2>STILL IN DOUBT?</h2>\r\n                                </div>\r\n                                <div class=\"btn-wrap\">\r\n                                  <button class=\"btn btn-white\" (click)=\"showCall()\">\r\n                                    Give Us a Call\r\n                                  </button>\r\n                                  <!-- <button class=\"btn btn-white\" (click)=\"showCallBack()\">Request a Call Back</button> -->\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </section>\r\n\r\n                      @if (isCall) {\r\n                        <div class=\"dialog\">\r\n                          <div class=\"dialog-content call-popup\" style=\"max-width: 40rem;\">\r\n                            <div class=\"dialog-section\">\r\n                              <div class=\"call-wrap\">\r\n                                <h2>GIVE US A CALL</h2>\r\n                                <a class=\"callno\" href=\"tel:+918824242424\">+91 88 2424 2424</a>\r\n                              </div>\r\n                            </div>\r\n                            <button class=\"close\" (click)=\"closeCall()\">\r\n                              <i class=\"icon-Cancel\"></i>\r\n                            </button>\r\n                          </div>\r\n                        </div>\r\n                      }\r\n\r\n                      @if (isCallBack) {\r\n                        <div class=\"dialog\">\r\n                          <div class=\"dialog-content call-popup\" style=\"max-width: 50rem;\">\r\n                            <div class=\"dialog-section\">\r\n                              <form>\r\n                                <div class=\"form-group\">\r\n                                  <h2>REQUEST A CALL BACK</h2>\r\n                                  <div class=\"col-xss-12 mb-20\">\r\n                                    <label class=\"control-label\">MOBILE NUMBER\r\n                                      <span class=\"required\">*</span>\r\n                                    </label>\r\n                                    <div class=\"input-group\">\r\n                                      <span class=\"input-group-addon\">\r\n                                        <i aria-hidden=\"true\" class=\"icon-mobile\"></i>\r\n                                      </span>\r\n                                      <input type=\"tel\" class=\"form-control numberonly\" />\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-xss-12 mb-20\">\r\n                                    <label class=\"control-label\" for=\"disabledInput\">PAN NUMBER\r\n                                      <span class=\"required\">*</span>\r\n                                    </label>\r\n                                    <div class=\"input-group\">\r\n                                      <span class=\"input-group-addon\">\r\n                                        <i aria-hidden=\"true\" class=\"icon-pan-no\"></i>\r\n                                      </span>\r\n                                      <input type=\"text\" class=\"form-control text-uppercase\" />\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <button class=\"btn col-xs-4 m-auto btn-gradient\" type=\"submit\" [disabled]=\"onboardInfo.invalid\">\r\n                                  Proceed\r\n                                </button>\r\n                              </form>\r\n                            </div>\r\n                            <button class=\"close\" (click)=\"closeCallBack()\">\r\n                              <i class=\"icon-Cancel\"></i>\r\n                            </button>\r\n                          </div>\r\n                        </div>\r\n                      }\r\n\r\n                      @if (isOTPGenerated) {\r\n                        <div class=\"dialog otp-dialog\">\r\n                          <div class=\"dialog-content\">\r\n                            <div class=\"dialog-header clearfix\">\r\n                              <div class=\"col-md-7\">\r\n                                <label>Enter OTP</label>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"dialog-section clearfix\">\r\n                              <div class=\"otp-input\">\r\n                                <input type=\"text\" maxlength=\"6\" id=\"otp\" inputRestrict=\"unsignedInteger\" [(ngModel)]=\"otp\" name=\"otpInput\"\r\n                                  #otpInput=\"ngModel\" required />\r\n                                </div>\r\n                                @if (invalidOTP) {\r\n                                  <p class=\"animate text-center error\">\r\n                                    OTP is Either Invalid or Expired\r\n                                  </p>\r\n                                }\r\n                                <button class=\"btn resend-btn\" (click)=\"generateOTP()\" [disabled]=\"resendTimeout\">\r\n                                  Resend OTP\r\n                                </button>\r\n                              </div>\r\n                              <div class=\"dialog-footer clearfix\">\r\n                                <button class=\"btn buy\" (click)=\"validateOTP()\">Submit</button>\r\n                                <button class=\"btn sell\" (click)=\"closeOTPPopup()\">Close</button>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        }\r\n                        @if (isContinueOnboard) {\r\n                          <div class=\"dialog otp-dialog\">\r\n                            <div class=\"dialog-content\">\r\n                              <div class=\"dialog-header clearfix\">\r\n                                <div class=\"col-md-7\">\r\n                                  <label>Onboarding</label>\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"dialog-section clearfix\">\r\n                                <p>Do you wish to Continue Onboarding</p>\r\n                              </div>\r\n                              <div class=\"dialog-footer clearfix\">\r\n                                <button class=\"btn buy\" (click)=\"continueOnboard(true)\">Yes</button>\r\n                                <button class=\"btn sell\" (click)=\"continueOnboard(false)\">No</button>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        }\r\n                        @if (isConvertedLead) {\r\n                          <div class=\"dialog otp-dialog\">\r\n                            <div class=\"dialog-content\">\r\n                              <div class=\"dialog-header clearfix\">\r\n                                <div class=\"col-md-7\">\r\n                                  <label>Attention</label>\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"dialog-section clearfix\">\r\n                                <p>You already have an account associated with Choice FinX. Please Login</p>\r\n                              </div>\r\n                              <div class=\"dialog-footer clearfix\">\r\n                                <button class=\"btn buy\" (click)=\"navigateToLogin()\">Login</button>\r\n                                <button class=\"btn sell\" (click)=\"closeErroModal('isConvertedLead')\">\r\n                                  Cancel\r\n                                </button>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        }\r\n                        <!-- already exist mobile number and email (05/07/2021) -->\r\n                        @if (mobileExist) {\r\n                          <div class=\"dialog otp-dialog\">\r\n                            <div class=\"dialog-content\">\r\n                              <div class=\"dialog-header clearfix\">\r\n                                <div class=\"col-md-7\">\r\n                                  <label>Attention</label>\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"dialog-section clearfix\">\r\n                                <p>{{errorMessage}}</p>\r\n                              </div>\r\n                              <div class=\"dialog-footer clearfix\">\r\n                                <button class=\"btn sell\" (click)=\"closeErroModal('mobileExist')\">\r\n                                  Ok\r\n                                </button>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        }\r\n                        <!-- already exist mobile number and email (05/07/2021) -->\r\n                        @if (termsOfUse) {\r\n                          <div class=\"dialog otp-dialog\">\r\n                            <div class=\"dialog-content\">\r\n                              <div class=\"dialog-header clearfix\">\r\n                                <div class=\"col-md-7\">\r\n                                  <label>Attention</label>\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"dialog-section clearfix\">\r\n                                <p>We are capturing this data for communication purpose only and it's stored securely. We protect your privacy\r\n                                  like it's ours! By agreeing you are allowing us to send updates via SMS/WhatsApp/Email/Call which will also\r\n                                  override & will not be termed as violation of DND.\r\n                                </p>\r\n                              </div>\r\n                              <div class=\"dialog-footer clearfix\">\r\n                                <button class=\"btn sell\" (click)=\"termsOfUsePopup()\">\r\n                                  Ok\r\n                                </button>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        }";

/***/ })

}]);