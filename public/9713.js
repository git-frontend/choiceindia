(self["webpackChunkjiffy_upgraded"] = self["webpackChunkjiffy_upgraded"] || []).push([[9713],{

/***/ 69713:
/*!*********************************************************!*\
  !*** ./src/app/links-module/pledge/pledge.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PledgeComponent: () => (/* binding */ PledgeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _pledge_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pledge.component.html?ngResource */ 96515);
/* harmony import */ var _pledge_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pledge.component.scss?ngResource */ 47471);
/* harmony import */ var _pledge_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pledge_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var src_app_services_seo_seo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/seo/seo.service */ 44897);





let PledgeComponent = class PledgeComponent {
  constructor(seo) {
    this.seo = seo;
  }
  ngOnInit() {
    this.seo.getMetaData(this.seo.metaObj['collateral-margin-against-shares'].title, this.seo.metaObj['collateral-margin-against-shares'].content);
  }
  static {
    this.ctorParameters = () => [{
      type: src_app_services_seo_seo_service__WEBPACK_IMPORTED_MODULE_2__.SeoService
    }];
  }
};
PledgeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-pledge',
  template: _pledge_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  styles: [(_pledge_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [src_app_services_seo_seo_service__WEBPACK_IMPORTED_MODULE_2__.SeoService])], PledgeComponent);


/***/ }),

/***/ 47471:
/*!**********************************************************************!*\
  !*** ./src/app/links-module/pledge/pledge.component.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ 8564);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 98557);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@charset "UTF-8";
/*Bootstrap Override*/
/*Custom variables*/
/*Icons Variables*/
/*Responsive screen width*/
.pledge-banner {
  padding: 70px 0;
  color: #ffffff;
  background-image: url('pledge-banner.png');
  background-position: center;
  background-size: cover;
  background: #004393;
}
.pledge-banner a {
  color: #ffffff;
  text-decoration: underline;
}
@media (max-width: 767px) {
  .pledge-banner {
    padding: 30px 0;
  }
}

.section-padding {
  padding: 50px 0;
}
.section-padding .sub-text {
  color: #797979;
}

.banner-head {
  margin-bottom: 2.6rem;
}
@media (max-width: 767px) {
  .banner-head {
    font-size: 25px;
    line-height: 1.3;
  }
}

.txtwrap {
  position: relative;
  padding-right: 5rem;
}
.txtwrap:before {
  display: block;
  position: absolute;
  right: -20px;
  width: 8px;
  top: -15px;
  height: calc(100% + 30px);
  content: "";
  background-image: url('dot-line.png');
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: center;
}
@media (max-width: 767px) {
  .txtwrap:before {
    display: none;
  }
}
@media (min-width: 768px) and (max-width: 1024px) {
  .txtwrap:before {
    right: -14px;
  }
}
.txtwrap .sectiontitle {
  font-size: 30px;
}
@media (max-width: 1024px) {
  .txtwrap .sectiontitle {
    font-size: 24px;
  }
}
@media (max-width: 767px) {
  .txtwrap {
    padding-right: 0;
  }
}
@media (min-width: 768px) and (max-width: 1024px) {
  .txtwrap {
    padding-right: 1.5rem;
  }
}

.ownershipwrap {
  padding-left: 5rem;
}
.ownershipwrap .sectiontitle {
  font-size: 30px;
}
@media (max-width: 1024px) {
  .ownershipwrap .sectiontitle {
    font-size: 24px;
  }
}
@media (max-width: 767px) {
  .ownershipwrap {
    padding-left: 0;
  }
}
@media (min-width: 768px) and (max-width: 1024px) {
  .ownershipwrap {
    padding-left: 1.5rem;
  }
}

.sectiontitle {
  margin-top: 0;
  font-size: 34px;
  font-weight: 600;
  margin-bottom: 40px;
  text-transform: uppercase;
  line-height: 1.4;
}
@media (max-width: 990px) {
  .sectiontitle {
    font-size: 25px;
  }
}
@media (max-width: 767px) {
  .sectiontitle {
    font-size: 23px;
    line-height: 1.3;
  }
}

.sub-text {
  font-size: 18px;
  line-height: 1.5;
  color: #ffffff;
}
@media (max-width: 990px) {
  .sub-text {
    font-size: 15px;
  }
}
@media (max-width: 767px) {
  .sub-text {
    margin-bottom: 30px;
  }
}

.process {
  width: calc(100% - 40px);
}
.process p {
  margin-bottom: 0px;
}

.process-icon {
  font-size: 20px;
  color: #ffffff;
  line-height: 1;
}
.process-icon:before {
  height: calc(100% + 3.75rem) !important;
}

.light-bg {
  background-color: #F4F3F8;
}

.img-responsive {
  margin: 0 auto;
}

.process-steps {
  display: grid;
  grid-gap: 30px;
  height: 100%;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
@media (max-width: 990px) {
  .process-steps {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
@media (max-width: 767px) {
  .process-steps {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 560px) {
  .process-steps {
    grid-template-columns: 1fr;
  }
}
.process-steps .info {
  position: relative;
  font-size: 14px;
  padding: 20px 15px 50px 50px;
  background: #ffffff;
  height: 100%;
  display: inline-block;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.1);
  background-image: url('info-bg.png');
  background-position: left bottom;
  background-size: 100% auto;
  background-repeat: no-repeat;
}
.process-steps .info:before {
  content: attr(data-step);
  font-size: 50px;
  font-weight: 600;
  position: absolute;
  left: 8px;
  top: 2px;
  line-height: 1;
  color: #6A97D7;
}

.primary-bg {
  background: #fe616e;
  color: #ffffff;
  line-height: 1.5;
  background: #004393;
}
.primary-bg h4 {
  line-height: 1.5;
}
@media (max-width: 767px) {
  .primary-bg h4 {
    margin-bottom: 15px;
  }
}
.primary-bg a {
  color: #ffffff;
  text-decoration: underline;
}

.note-link {
  padding-left: 0;
  margin: 0;
  list-style: none;
}
.note-link li {
  margin: 10px 0;
}
.note-link li span {
  font-size: 150%;
  margin-right: 8px;
  display: inline-block;
  vertical-align: middle;
  margin-top: -2px;
}
.note-link a {
  color: #ffffff;
  text-decoration: underline;
}

.bar {
  list-style: none;
}

.bar > li {
  position: relative;
}

.bar > li:before {
  content: "●";
  margin-right: 10px;
  font-size: 20px;
}

.bar > li:after {
  position: absolute;
  left: 0;
  top: 0;
  content: "";
  border-left: 2px solid #000000;
  margin-left: 5px;
  height: 100%;
}

.bar > li:first-of-type:after {
  top: 50%;
}

.bar > li:last-of-type:after {
  top: -50%;
}`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 96515:
/*!**********************************************************************!*\
  !*** ./src/app/links-module/pledge/pledge.component.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<section class=\"pledge-banner\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-10 col-md-offset-1\">\r\n        <h1 class=\"banner-head text-uppercase text-center mb-2\">\r\n          NEW MARGIN PLEDGE SYSTEM - WHAT YOU NEED TO KNOW?\r\n        </h1>\r\n      </div>\r\n\r\n\r\n      <div class=\"col-md-10 col-md-offset-1\">\r\n        <p class=\"sub-text\">SEBI has introduced a new margin pledge system with effect from 1st September 2020\r\n          compulsorily. The <a\r\n            href=\"https://www.sebi.gov.in/legal/circulars/feb-2020/margin-obligations-to-be-given-by-way-of-pledge-re-pledge-in-the-depository-system_46082.html\"\r\n            rel=“nofollow” target=\"_blank\">SEBI\r\n            circular</a> states that shares can be considered in Margin, only after they have been pledged in advance.\r\n          This\r\n          move by SEBI comes with the intent to protect investor interest and further strengthen the regulatory\r\n          framework. Going ahead, if an investor wishes to avail the margin facility on shares, they will be required\r\n          to\r\n          first pledge their shares and then trade.</p>\r\n        <p class=\"sub-text\">\r\n          So far, as a trader, you could instantly avail the <a\r\n            href=\"https://choiceindia.com/margin-trading-facility-mtf\" target=\"_blank\">margin against shares</a>\r\n          facility to immediately leverage a\r\n          market opportunity when low on funds. In order to facilitate this, the brokers would then hold your shares as\r\n          collateral. This is what we know as Collateral Margin or Margin Against Shares. Generally speaking, the trader\r\n          is required to maintain margin in the form of cash/stock. In the earlier process, the stocks had to be\r\n          transferred to the broker’s account who would, in turn, pledge it to the Clearing Corporation. However, the\r\n          transfer of ownership gave rise to the possibility of some brokers misusing the stocks. This is why SEBI\r\n          introduced the new Margin Pledge system.\r\n        </p>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</section>\r\n\r\n<!-- <section class=\"section-padding\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-8 col-md-offset-2\">\r\n        <h2 class=\"sectiontitle text-center\">What Is Collateral Margin / Margin Against Shares Facility?</h2>\r\n      </div>\r\n      <div class=\"col-md-12\">\r\n        <p class=\"sub-text text-justify\">Owing to the limited cash margin, it is likely that traders can lose a great\r\n          opportunity in the market. In such\r\n          a case, a trader can avail the <a href=\"https://choiceindia.com/margin-trading-facility-mtf\"\r\n            target=\"_blank\">Margin Against Shares</a> facility to immediately leverage a market opportunity.\r\n          Margin against Shares is a value-added service offered by some brokers to traders that enhances the trader’s\r\n          investment capacity. This means that traders can avail an extended margin from the broker when they are low on\r\n          funds. Instead of this, the broker will hold the trader’s stocks as collateral. Therefore, it is also known as\r\n          Collateral Margin. With margin, traders can buy more stocks than their current fund balance allows them to\r\n          purchase. It is beneficial when a client has shares they don’t intend to sell soon, to hold them as\r\n          collateral.\r\n        </p>\r\n\r\n\r\n      </div>\r\n    </div>\r\n\r\n\r\n  </div>\r\n</section> -->\r\n\r\n<!-- <section class=\"processSection light-bg\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <h2 class=\"text-center text-uppercase\">How Does Collateral Margin / Margin Against Shares Work?</h2>\r\n      </div>\r\n      <div class=\"col-lg-4 col-md-6\">\r\n        <div class=\"process-list\">\r\n          <div class=\"process-icon\">1</div>\r\n          <div class=\"process\">\r\n            <p>Transferring of shares/ETFs from the client’s to the broker’s collateral account to use idle stocks\r\n              rather than cash in order to leverage a market opportunity.\r\n            </p>\r\n          </div>\r\n        </div>\r\n        <div class=\"process-list\">\r\n          <div class=\"process-icon\">2</div>\r\n          <div class=\"process\">\r\n            <p>These shares are generally then moved to the clearing member/corporation.\r\n            </p>\r\n          </div>\r\n        </div>\r\n        <div class=\"process-list\">\r\n          <div class=\"process-icon\">3</div>\r\n          <div class=\"process\">\r\n            <p>Margin amount (calculated on the value of the stock) can be used across all kinds of trade.</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"process-list\">\r\n          <div class=\"process-icon\">4</div>\r\n          <div class=\"process\">\r\n            <p>The stocks held as collaterals by the broker can be taken back by the client when they do not wish to\r\n              utilize the margin facility on the repayment of the amount due to the broker.</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-7 col-md-6 col-lg-offset-1 hidden-sm hidden-xs\">\r\n        <img alt=\"How Does Collateral Margin/Margin Against Shares Work\" class=\"img-responsive\"\r\n          src=\"../../../assets/images/how-collateral-margin-against-shares-work.png\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section> -->\r\n\r\n<section class=\"section-padding\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-6\">\r\n        <div class=\"txtwrap\">\r\n          <!-- <h2 class=\"sectiontitle\">Is There A Cost To Avail Collateral Margin / Margin Against Shares Facility?\r\n          </h2> -->\r\n          <p class=\"sub-text  text-justify\">This latest pledge process demands that there be no transfer of stocks\r\n            between accounts. This means securities will stay in the investor’s Demat account but pledged to the broker.\r\n            Further, it mandates the creation of a separate Demat Account for the broker., i.e., Trading Member Clearing\r\n            Member - Client Securities Margin Pledge Account. The stocks will be repledged to the Clearing Corporation\r\n            by the broker.\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-6\">\r\n        <div class=\"ownershipwrap\">\r\n          <!-- <h2 class=\"sectiontitle\">Ownership Of Stocks?</h2> -->\r\n          <p class=\"sub-text  text-justify\">The new pledge system proves to be beneficial in two ways. First, there is\r\n            less chance of tampering with stocks, since they stay in the investor’s Demat account. Second, when the\r\n            stocks are transferred to the broker’s account, they are at the receiving end of the corporate actions\r\n            (dividends, rights, etc.). An unaware investor may fail to claim what is rightfully theirs. Since there is\r\n            no transfer of stocks taking place, this issue is avoidable.\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n\r\n<!-- <section class=\"section-padding light-bg\">\r\n  <div class=\"container\">\r\n    <h2 class=\"sectiontitle text-center\">What Happens Once You Use The Margin For Trade?</h2>\r\n    <p class=\"sub-text  text-justify\">If your trade goes as expected, the margin is deducted from the profit. In the\r\n      case\r\n      of loss; stocks pledged as collateral can be sold by the broker to reclaim the amount lent to the client as\r\n      margin.\r\n    </p>\r\n  </div>\r\n</section> -->\r\n\r\n<section class=\"section-padding \">\r\n  <div class=\"container\">\r\n    <h2 class=\"sectiontitle text-center\">How Can You Pledge / Unpledge Shares For Margin?</h2>\r\n    <div class=\"process-steps\">\r\n      <div class=\"info\" data-step=\"1\">\r\n        <p>Your pledge/unpledge request must be sent to <a href=\"mailto:dp@choiceindia.com\">dp&#64;choiceindia.com</a>\r\n          before 4 PM (Monday to Saturday). You will be\r\n          required to also include details such as your client code and stock name with quantity.\r\n        </p>\r\n      </div>\r\n      <div class=\"info\" data-step=\"2\">\r\n        <p>The pledge/unpledged procedure will be initiated once we receive the request.\r\n        </p>\r\n      </div>\r\n      <div class=\"info\" data-step=\"3\">\r\n        <p>On pledge setup the CDSL/NSDL will send you an SMS/Email with a link (within 10 minutes). Please submit your\r\n          PAN or 16 digits Demat Account Number on the same.\r\n        </p>\r\n      </div>\r\n      <div class=\"info\" data-step=\"4\">\r\n        <p>Upon submission, you will be directed to a screen where you can select the shares you wish to\r\n          pledge/unpledge.\r\n        </p>\r\n      </div>\r\n      <div class=\"info\" data-step=\"5\">\r\n        <p>Once this is done, please select the option to Generate/Regenerate OTP. Please Note: The OTP will be sent on\r\n          your registered number/email id only (valid for 15 minutes).\r\n        </p>\r\n      </div>\r\n      <div class=\"info\" data-step=\"6\">\r\n        <p>Once you submit the OTP on the link, the shares will be pledged to us. Once done, the shares will be\r\n          displayed in the Demat as Pledge.\r\n        </p>\r\n      </div>\r\n      <div class=\"info\" data-step=\"7\">\r\n        <p>These stocks will then be repledged by us for Margin to Clearing Corporation / Clearing Member.\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n\r\n<section class=\"section-padding primary-bg\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-5\">\r\n        <h4 class=\"advertise-title\">Please note: If you wish to Unpledge, please email us the request at <a\r\n            href=\"mailto:dp@choiceindia.com\">dp&#64;choiceindia.com</a> before 4 PM (Monday to Saturday) with your trading\r\n          code.</h4>\r\n      </div>\r\n      <div class=\"col-sm-5 col-md-offset-1\">\r\n        <ul class=\"note-link\">\r\n          <li><span class=\"icon-rounded-arrow\"></span><a href=\"https://www.cdslindia.com/MarginPledge/OTP.aspx\"\r\n              rel=“nofollow” target=\"_blank\">Click\r\n              here</a> to check the status and authorise the Pledge (CDSL). </li>\r\n          <li><span class=\"icon-rounded-arrow\"></span><a href=\"https://eservices.nsdl.com/\" rel=“nofollow”\r\n              target=\"_blank\">Click\r\n              here</a> to check the status and authorise the Pledge (NSDL).\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>";

/***/ })

}]);