(self["webpackChunkjiffy_upgraded"] = self["webpackChunkjiffy_upgraded"] || []).push([[9801],{

/***/ 69801:
/*!***********************************************************!*\
  !*** ./src/app/links-module/support/support.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SupportComponent: () => (/* binding */ SupportComponent)
/* harmony export */ });
/* harmony import */ var D_a_widget_jiffy_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _support_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./support.component.html?ngResource */ 26923);
/* harmony import */ var _support_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./support.component.scss?ngResource */ 20028);
/* harmony import */ var _support_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_support_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var src_app_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/firestore/firestore.service */ 49125);
/* harmony import */ var _services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/analytics/analytics.service */ 50213);
/* harmony import */ var _services_rest_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/rest/common.service */ 18056);
/* harmony import */ var _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/seo/seo.service */ 44897);
/* harmony import */ var _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/shared-data/shared-data.service */ 46013);
/* harmony import */ var _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/utils/utils.service */ 89893);
/* harmony import */ var src_app_services_captcha_captcha_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/captcha/captcha.service */ 50981);
/* harmony import */ var src_app_services_cryptography_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/cryptography.service */ 67224);













// var categories: any = require('./../../../assets/static/data/support_category.json');


/**
 * Component for Customer Support
 */
let SupportComponent = class SupportComponent {
  /**
   * Constructor for Object Initialization
   * @param restService CommonService instance for HTTP Request
   * @param utils UtilsService instance
   * @param sharedDataService SharedDataService instance
   * @param SeoService for dynamic meta tags and title
   * @param AnalyticsService for analytics GA
   */
  constructor(cryptography, analytics, seoService, restService, utils, sharedDataService, activatedRoute, firebaseService, CaptchaService, renderer) {
    this.cryptography = cryptography;
    this.analytics = analytics;
    this.seoService = seoService;
    this.restService = restService;
    this.utils = utils;
    this.sharedDataService = sharedDataService;
    this.activatedRoute = activatedRoute;
    this.firebaseService = firebaseService;
    this.CaptchaService = CaptchaService;
    this.renderer = renderer;
  }
  /**
   * Life Cycle Hook for Initialization
   */
  ngOnInit() {
    this.utils.setTrackMoeEvent("visitedSupport", {
      User_ID: this.utils.getUserId() || "guest",
      IP: this.sharedDataService.IPAddress
    });
    this.analytics.emitEvent("visitedSupport", this.utils.getUserId() || "guest", this.sharedDataService.IPAddress, 1);
    this.seoService.setMeta("support");
    this.profile = this.utils.getProfile() || {};
    this.user = {};
    this.user.userName = this.profile.Name;
    this.user.emailId = this.profile.EmailID;
    this.user.subject = null;
    this.user.accountClosureType = null;
    this.user.accountClosureReason = null;
    let value = this.firebaseService.getRemoteConfig("support_category", value => {
      this.supportJson = value && this.profile.ClientId ? JSON.parse(value) : __webpack_require__(/*! ./../../../assets/static/data/support_category.json */ 3805);
      this.supportType = this.supportJson.category;
      this.closureType = this.supportJson.accountClosureType;
      this.closureReason = this.supportJson.accountClosureReason;
      // if (!this.profile.ClientId) {
      //   const index = this.supportJson.category.findIndex((obj) => {
      //     return (
      //       obj.value.toLowerCase() == "account closure" ||
      //       obj.value.toLowerCase() == "account_closure"
      //     );
      //   });
      //   if (index > -1) {
      //     this.supportJson.category.splice(index, 1);
      //   }
      // }
    });
    /**draw email canvas on load */
    this.draw();
  }
  /**onclick mailto execute */
  sendEmail() {
    window.location.href = 'mailto:care@choiceindia.com';
  }
  /**draw canvas with buit-in methods */
  draw() {
    const canvas = document.getElementById("test-c")?.getContext("2d");
    if (!canvas) return;
    canvas.font = "14px SF Pro Display";
    canvas.fillStyle = "#041B6A";
    // canvas.fillStyle = "red";
    canvas.fillText("care@choiceindia.com", 0, 11, 200);
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
   * For triming white space from the textarea
   * @param text Text area Text to be trim.
   */
  trimming_fn(text) {
    return text ? text.replace(/^\s+|\s+$/gm, "") : "";
  }
  /**
   * Submitting query to Server and customer support
   */
  submitQuery() {
    var _this = this;
    return (0,D_a_widget_jiffy_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let userid = _this.utils.getUserId();
      if (!userid || userid.toLocaleLowerCase() == 'guest') {
        return;
      }
      const token = yield _this.CaptchaService.checkCaptcha();
      if (_this.user.subject.toLowerCase() == "account closure") {
        _this.storeAccountClosureRequest();
      } else {
        let payload = {
          name: _this.user.userName,
          user_id: _this.utils.getUserId(),
          device_info: "web",
          email_id: _this.cryptography.encryptText(_this.user.emailId),
          mode: "11",
          message: _this.user.query,
          timestamp: _this.utils.changeCurrentDateFormat(_this.utils.getCurrentDate(), "YYYY-MM-DD HHmmSS", "YYYY-MM-DD HH:mm:ss"),
          ip: _this.utils.get("address") || "",
          type: _this.user.subject,
          subCat1: _this.user.accountClosureType || "",
          subCat2: _this.user.accountClosureReason || "",
          captch_resp: token
        };
        _this.restService.getSupport(payload).subscribe(res => {
          if (res && res.status_code == 200) {
            // else {
            _this.analytics.supportAnalytics(payload);
            _this.user = {};
            _this.form.reset();
            setTimeout(() => {
              _this.user.userName = _this.profile.Name;
              _this.user.emailId = _this.profile.EmailID;
            }, 100);
            _this.utils.info("Thanks", res.Message || "Query Submitted");
            // }
          } else {
            _this.analytics.supportAnalytics(payload);
            _this.utils.info("Error", res.Message || "Query Submitted");
          }
        }, error => {
          _this.utils.error("Error", error.error.Message || "Something went wrong. Please try again.");
          _this.analytics.supportAnalytics(payload);
        });
      }
    })();
  }
  storeAccountClosureRequest() {
    let payload = {
      client_id: this.utils.getUserId(),
      support_type: "account closure",
      investor_name: this.user.userName,
      email_id: this.user.emailId,
      acc_closure_type: this.user.accountClosureType,
      acc_closure_reason: this.user.accountClosureReason || "others",
      acc_closure_reason_spec: !this.user.accountClosureReason || this.user.accountClosureReason == "others" ? this.user.query : "",
      message: this.user.accountClosureType && this.user.accountClosureType == "others" ? this.user.query : ""
    };
    this.restService.getAccountClosure(payload).subscribe(res => {
      if (res && res.StatusCode == 200) {
        this.utils.success("Success", res.Message);
        // this.analytics.supportAnalytics(payload);
        this.user = {};
        this.form.reset();
        setTimeout(() => {
          this.user.userName = this.profile.Name;
          this.user.emailId = this.profile.EmailID;
        }, 100);
        // this.utils.info('Thanks', res.Message || 'Query Submitted');
      } else {
        // this.analytics.supportAnalytics(payload);
        this.utils.info("Error", res.Message || "Something went wrong. Please try again");
      }
    }, error => {
      this.utils.error("Error", error.error.Message || "Something went wrong. Please try again");
      // this.analytics.supportAnalytics(payload);
    });
  }
  ngOnDestroy() {}
  static {
    this.ctorParameters = () => [{
      type: src_app_services_cryptography_service__WEBPACK_IMPORTED_MODULE_10__.CryptographyService
    }, {
      type: _services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_4__.AnalyticsService
    }, {
      type: _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_6__.SeoService
    }, {
      type: _services_rest_common_service__WEBPACK_IMPORTED_MODULE_5__.CommonService
    }, {
      type: _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_8__.UtilsService
    }, {
      type: _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_7__.SharedDataService
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute
    }, {
      type: src_app_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_3__.FirestoreService
    }, {
      type: src_app_services_captcha_captcha_service__WEBPACK_IMPORTED_MODULE_9__.CaptchaService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Renderer2
    }];
  }
  static {
    this.propDecorators = {
      form: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild,
        args: ["supportForm", {
          static: false
        }]
      }]
    };
  }
};
SupportComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
  selector: "app-support",
  template: _support_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  standalone: true,
  imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule],
  styles: [(_support_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__metadata)("design:paramtypes", [src_app_services_cryptography_service__WEBPACK_IMPORTED_MODULE_10__.CryptographyService, _services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_4__.AnalyticsService, _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_6__.SeoService, _services_rest_common_service__WEBPACK_IMPORTED_MODULE_5__.CommonService, _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_8__.UtilsService, _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_7__.SharedDataService, _angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute, src_app_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_3__.FirestoreService, src_app_services_captcha_captcha_service__WEBPACK_IMPORTED_MODULE_9__.CaptchaService, _angular_core__WEBPACK_IMPORTED_MODULE_12__.Renderer2])], SupportComponent);


/***/ }),

/***/ 20028:
/*!************************************************************************!*\
  !*** ./src/app/links-module/support/support.component.scss?ngResource ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ 8564);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 98557);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.list.list-icons {
  padding-left: 0;
  padding-right: 0;
}

.branch_office {
  margin-bottom: 15px;
}
.branch_office ul {
  list-style: none !important;
  font-size: 12px;
  min-height: 135px;
}

.list.list-icons.list-icons-style-3 li {
  padding-left: 45px;
}
.list.list-icons.list-icons-style-3 li .fa,
.list.list-icons.list-icons-style-3 li .icons {
  background-image: linear-gradient(to right, #ffc174 0%, #fe616e 100%);
  background: #2D77F4;
}
.list.list-icons.list-icons-style-3 li .fa,
.list.list-icons.list-icons-style-3 li .icons {
  color: #FFF;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  text-align: center;
  padding: 5px;
  line-height: 20px;
  font-size: 16px;
}
.list.list-icons li {
  position: relative;
  padding-left: 25px;
}
.list.list-icons li .fa,
.list.list-icons li .icons {
  position: absolute;
  left: 0;
  top: 5px;
}

.branch_office li {
  margin-top: 8px;
  margin-bottom: 13px;
}
.branch_office li i {
  margin-right: 10px;
}

.list-dark li {
  padding-left: 0px !important;
}

.branch_office .form-control {
  border-radius: 0;
}
.branch_office .form-control[disabled] {
  cursor: not-allowed;
}
.branch_office fieldset[disabled] .form-control {
  cursor: not-allowed;
}
.branch_office textarea.form-control {
  height: auto;
}
.branch_office textarea.form-control:focus {
  border-color: #66afe9;
  outline: 0;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.0745098039), 0 0 8px rgba(102, 175, 233, 0.6);
}
.branch_office label {
  color: #535353;
  font-weight: normal;
}
@media (max-wdith: 767px) {
  .branch_office label {
    margin-top: 15px;
  }
}

textarea {
  resize: none;
}

hr {
  background-image: linear-gradient(to right, transparent, #DBDBDB, transparent);
  border: 0;
  height: 1px;
  margin: 22px 0;
}

.list.list-icons.list-icons-style-3 li {
  padding-top: 10px;
  padding-left: 50px;
}

.error {
  color: red;
  font-size: 14px;
  padding-top: 5px;
  margin: 0;
}

.temp-email {
  display: flex;
  align-items: center;
  column-gap: 2px;
}
.temp-email canvas {
  font-family: "SF Pro Display" !important;
  cursor: pointer;
}`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 26923:
/*!************************************************************************!*\
  !*** ./src/app/links-module/support/support.component.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"col-md-12\">\r\n  <h4 class=\"heading col-md-4 col-sm-4 col-xs-12 mr25\">contact us</h4>\r\n</div>\r\n\r\n<div class=\"col-md-12 clearfix\">\r\n  <div class=\"row branch_office mtop15\">\r\n    <div class=\"col-md-6 col-sm-6\">\r\n      <form (ngSubmit)=\"submitQuery()\" #supportForm=\"ngForm\">\r\n        <div class=\"row branch_office\">\r\n            <div class=\"col-md-6 col-xs-12\">\r\n              <label>Full Name <span class=\"text-danger\">*</span></label>\r\n\r\n              <input\r\n                type=\"text\"\r\n                autofocus\r\n                data-msg-required=\"Please enter your name.\"\r\n                class=\"form-control\"\r\n                aria-label=\"name\"\r\n                #name=\"ngModel\"\r\n                pattern=\"^([A-Za-z ]){3,}$\"\r\n                [(ngModel)]=\"user.userName\"\r\n                [disabled]=\"profile?.Name\"\r\n                name=\"name\"\r\n                pattern=\"^(?!.*[ ]{2,})(?=.{5,}$)(([A-Za-z\\. ])\\2?(?!\\2))+$\"\r\n                required\r\n                />\r\n\r\n                @if (name.errors?.required && name.dirty) {\r\n                  <p\r\n                    class=\"animate error\"\r\n                    >\r\n                    Full name is required.\r\n                  </p>\r\n                }\r\n\r\n                <input type=\"hidden\" name=\"source\" value=\"Contact-us-Page\" />\r\n\r\n                @if (name.errors?.pattern && name.dirty) {\r\n                  <p\r\n                    class=\"animate error\"\r\n                    >\r\n                    Invalid Name.\r\n                  </p>\r\n                }\r\n              </div>\r\n              <div class=\"col-md-6 col-xs-12\">\r\n                <label>Email ID <span class=\"text-danger\">*</span></label>\r\n\r\n                <input\r\n                  type=\"email\"\r\n                  class=\"form-control\"\r\n                  name=\"emailId\"\r\n                  aria-label=\"Email\"\r\n                  #emailId=\"ngModel\"\r\n                  required\r\n                  pattern=\"[A-Za-z0-9._%+-]{1,}@[a-zA-Z]{1,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})\"\r\n                  [(ngModel)]=\"user.emailId\"\r\n                  [disabled]=\"profile?.EmailID\"\r\n                  />\r\n\r\n                  @if (emailId.errors?.required && emailId.dirty) {\r\n                    <p\r\n                      class=\"animate error\"\r\n                      >\r\n                      Email ID is required.\r\n                    </p>\r\n                  }\r\n\r\n                  @if (emailId.errors?.pattern && emailId.dirty) {\r\n                    <p\r\n                      class=\"animate error\"\r\n                      >\r\n                      Invalid Email Id.\r\n                    </p>\r\n                  }\r\n                </div>\r\n            </div>\r\n                <div class=\"row branch_office\">\r\n                    <div class=\"col-md-12 col-xs-12\">\r\n                  <label>Subject <span class=\"text-danger\">*</span></label>\r\n\r\n                  <select\r\n                    class=\"form-control\"\r\n                    name=\"subject\"\r\n                    required\r\n                    id=\"subject\"\r\n                    aria-label=\"subject\"\r\n                    #subject=\"ngModel\"\r\n                    [(ngModel)]=\"user.subject\"\r\n                    (change)=\"user.query = ''\"\r\n                    >\r\n                    <option [value]=\"null\" disabled>Select Category</option>\r\n\r\n                    @for (type of supportType; track type) {\r\n                      <option [value]=\"type.value\">\r\n                        {{ type.name }}\r\n                      </option>\r\n                    }\r\n                  </select>\r\n                </div>\r\n            </div>\r\n                @if (\r\n              user.subject == 'account closure' ||\r\n              user.subject == 'Account closure'\r\n              ) {\r\n              <div\r\n                class=\"row branch_office\"\r\n                >\r\n                        <div class=\"col-md-12\">\r\n                    <label\r\n                      >Account Closure Type <span class=\"text-danger\">*</span></label\r\n                      >\r\n                      <select\r\n                        class=\"form-control\"\r\n                        name=\"accountClosureType\"\r\n                        required\r\n                        id=\"accountClosureType\"\r\n                        aria-label=\"accountClosureType\"\r\n                        #accountClosureType=\"ngModel\"\r\n                        (change)=\"user.query = ''\"\r\n                        [(ngModel)]=\"user.accountClosureType\"\r\n                        >\r\n                        <option [value]=\"null\" disabled>\r\n                          Select Account Closure Type\r\n                        </option>\r\n                        @for (type of closureType; track type) {\r\n                          <option [value]=\"type.value\">\r\n                            {{ type.name }}\r\n                          </option>\r\n                        }\r\n                      </select>\r\n                            </div>\r\n                </div>\r\n              }\r\n\r\n              @if (\r\n                user.accountClosureType &&\r\n                user.subject == 'Account closure' &&\r\n                user.accountClosureType != 'others'\r\n                ) {\r\n                <div\r\n                  class=\"row branch_office\"\r\n                  >\r\n                  <div class=\"form-group clearfix\">\r\n                    <div class=\"col-md-12\">\r\n                      <label\r\n                        >Account Closure Reason\r\n                        <span class=\"text-danger\">*</span></label\r\n                        >\r\n                        <select\r\n                          class=\"form-control\"\r\n                          name=\"accountClosureReason\"\r\n                          required\r\n                          id=\"accountClosureReason\"\r\n                          aria-label=\"accountClosureReason\"\r\n                          #accountClosureReason=\"ngModel\"\r\n                          (change)=\"user.query = ''\"\r\n                          [(ngModel)]=\"user.accountClosureReason\"\r\n                          >\r\n                          <option [value]=\"null\" disabled>\r\n                            Select Account Closure Reason\r\n                          </option>\r\n                          @for (type of closureReason; track type) {\r\n                            <option [value]=\"type.value\">\r\n                              {{ type.name }}\r\n                            </option>\r\n                          }\r\n                        </select>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                }\r\n\r\n                @if (\r\n                  user.subject != 'Account closure' ||\r\n                  user.accountClosureReason == 'others' ||\r\n                  user.accountClosureType == 'others'\r\n                  ) {\r\n                  <div\r\n                    class=\"row branch_office\"\r\n                    >\r\n                    <div class=\"form-group clearfix\">\r\n                      <div class=\"col-md-12\">\r\n                        <label>Message <span class=\"text-danger\">*</span></label>\r\n                        <textarea\r\n                          class=\"form-control\"\r\n                          placeholder=\"Enter your query \"\r\n                          aria-label=\"Query\"\r\n                          #query=\"ngModel\"\r\n                          name=\"query\"\r\n                          (blur)=\"user.query = trimming_fn(user.query)\"\r\n                          required\r\n                          [(ngModel)]=\"user.query\"\r\n                          rows=\"4\"\r\n                          cols=\"50\"\r\n                          maxlength=\"512\"\r\n                          minlength=\"7\"\r\n                        ></textarea>\r\n                        @if (\r\n                          user?.query?.trim().length && user?.query?.trim().length < 7\r\n                          ) {\r\n                          <p\r\n                            class=\"animate error\"\r\n                            >\r\n                            Minimum 7 characters required\r\n                          </p>\r\n                        }\r\n                        @if (query.invalid && query.dirty && !user.query) {\r\n                          <p\r\n                            class=\"animate error\"\r\n                            >\r\n                            Message is required\r\n                          </p>\r\n                        }\r\n                        @if (user?.query?.trim().length > 512) {\r\n                          <p class=\"animate error\">\r\n                            Message Length Cannot be greater than 512 character\r\n                          </p>\r\n                        }\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                }\r\n\r\n                <div class=\"row branch_office\">\r\n                  <div class=\"col-md-12\">\r\n                    <input\r\n                      type=\"submit\"\r\n                      (click)=\"sendGAEvent('pop up', 'submit', 'Support Inquiries')\"\r\n              [disabled]=\"\r\n                !supportForm.form.valid ||\r\n                user?.query?.length > 512 ||\r\n                sharedDataService.isServiceHit\r\n              \"\r\n                      value=\"Send Message\"\r\n                      class=\"btn btn-gradient mtop15\"\r\n                      data-loading-text=\"Loading...\"\r\n                      />\r\n                    </div>\r\n                  </div>\r\n                </form>\r\n              </div>\r\n\r\n              <div class=\"col-md-6 col-sm-6\">\r\n                <h4 class=\"heading-primary mt-20 mb-15\">Get In Touch</h4>\r\n\r\n                <p>\r\n                  Our centralized customer services desk remains on standby to help you\r\n                  for any issue pertaining to our services. In case you are an existing\r\n                  client of Choice Broking, please keep your client ID handy with you\r\n                  while talking to our representatives.\r\n                </p>\r\n\r\n                <hr />\r\n\r\n                <h4 class=\"heading-primary mb-15\">The Office</h4>\r\n\r\n                <ul class=\"list list-icons list-icons-style-3 mt-xlg\">\r\n                  <li>\r\n                    <i class=\"fa icon-location\"></i>\r\n\r\n                    <strong>Address:</strong>\r\n\r\n                    <div>\r\n                      Choice International Limited, Sunil Patodia Tower,\r\n\r\n                      <br />Plt No: -156-158, J.B. Nagar, Andheri (East),\r\n\r\n                      <br />Mumbai - 400 099\r\n                    </div>\r\n                  </li>\r\n\r\n                  <li>\r\n                    <i class=\"fa icon-Phone\"></i> <strong>Phone:</strong>\r\n                    <a href=\"tel:+918824242424\">(+91)&nbsp; 88-2424-2424</a>\r\n                  </li>\r\n\r\n                  <li class=\"temp-email\"><i class=\"fa icon-email-id\"></i>\r\n                  <strong>Email:</strong>\r\n                  <!-- <span (click)=\"sendEmail()\"> -->\r\n                  <!-- care@choiceindia.com -->\r\n                  <canvas id=\"test-c\" (click)=\"sendEmail()\" width=\"200\" height=\"15\"></canvas>\r\n                <!-- </span> -->\r\n                <!-- <a id=\"sup-email\">care@choiceindia.com</a> -->\r\n              </li>\r\n            </ul>\r\n\r\n            <hr />\r\n\r\n            <h4 class=\"heading-primary mb-15\">Business <strong>Hours</strong></h4>\r\n\r\n            <ul class=\"list list-icons list-dark mt-xlg\">\r\n              <li><i class=\"icon-clock\"></i> Monday - Friday 9am to 7pm</li>\r\n\r\n              <li><i class=\"icon-clock\"></i> Saturday - 10am to 4pm</li>\r\n\r\n              <li><i class=\"icon-clock\"></i> Sunday - Closed</li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"container-fluid\">\r\n        <iframe\r\n          src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235.6280593392031!2d72.86435278388187!3d19.105508418488093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb39db16c9cf8362b!2sChoice!5e0!3m2!1sen!2sin!4v1641979693098!5m2!1sen!2sin\"\r\n          width=\"100%\"\r\n          height=\"450\"\r\n          frameborder=\"0\"\r\n          style=\"border: 0\"\r\n          aria-label=\"address\"\r\n          allowfullscreen\r\n        ></iframe>\r\n      </div>\r\n";

/***/ }),

/***/ 3805:
/*!******************************************************!*\
  !*** ./src/assets/static/data/support_category.json ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"category":[{"name":"Account Opening","value":"Account opening"},{"name":"Login","value":"login"},{"name":"Funds","value":"funds"},{"name":"Charges","value":"charges"},{"name":"Orders","value":"orders"},{"name":"Reports","value":"reports"},{"name":"Modification","value":"Modification"},{"name":"Mutual Fund","value":"Mutual fund"},{"name":"General Queries","value":"General queries"}],"accountClosureType":[{"name":"Normal Account Closure (Trading +DP)","value":"normal_account"},{"name":"Only trading closure","value":"only_trading"},{"name":"Only DP closure","value":"only_dp"}],"accountClosureReason":[{"name":"Loss in market","value":"loss"},{"name":"Not satisfied with services","value":"not_satisfied"},{"name":"Have multiple demat account","value":"multiple_demat"},{"name":"Not interested in trading","value":"not_interested"},{"name":"High brokerage","value":"high_brokerage"},{"name":"Others","value":"others"}]}');

/***/ })

}]);