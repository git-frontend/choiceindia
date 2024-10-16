(self["webpackChunkjiffy_upgraded"] = self["webpackChunkjiffy_upgraded"] || []).push([[3734],{

/***/ 73734:
/*!*************************************************************************************************************!*\
  !*** ./src/app/market/secure-products/secure-products-transaction/secure-products-transaction.component.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SecureProductsTransactionComponent: () => (/* binding */ SecureProductsTransactionComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _secure_products_transaction_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./secure-products-transaction.component.html?ngResource */ 1926);
/* harmony import */ var _secure_products_transaction_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./secure-products-transaction.component.scss?ngResource */ 31022);
/* harmony import */ var _secure_products_transaction_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_secure_products_transaction_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 70980);
/* harmony import */ var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/analytics/analytics.service */ 50213);
/* harmony import */ var src_app_services_rest_scheme_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/rest/scheme.service */ 25034);
/* harmony import */ var _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../assets/libs/esm-moment.min.js */ 29483);
/* harmony import */ var _services_rest_post_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/rest/post-login.service */ 4135);
/* harmony import */ var _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/shared-data/shared-data.service */ 46013);
/* harmony import */ var _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/utils/utils.service */ 89893);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 60177);









// var moment: any = require();





let SecureProductsTransactionComponent = class SecureProductsTransactionComponent {
  constructor(activatedRoute, schemeService, utils, shared, route, rest, analytics, renderer) {
    this.activatedRoute = activatedRoute;
    this.schemeService = schemeService;
    this.utils = utils;
    this.shared = shared;
    this.route = route;
    this.rest = rest;
    this.analytics = analytics;
    this.renderer = renderer;
    this.isNRI = false;
    this.config = {
      sgb: {
        header: 'Sovereign Gold Bonds',
        abbreviation: 'SGB',
        tableStructure: [{
          "key": "date",
          "label": "Date",
          cell: row => `${row.date ? new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_4__["default"](row.date).format("Do MMM 'YY") : "-"}`
        }, {
          "key": "sgbName",
          "label": "Name",
          cell: row => `${row.sgbName || "-"}`
        }, {
          "key": "qty",
          "label": "Quantity",
          cell: row => `${row.qty ? row.qty + ' gm' : '-'}`
        }, {
          "key": "amount",
          "label": "Amount",
          cell: row => `${row.amount ? "₹ " + row.amount : "-"}`
        }, {
          "key": "status",
          "label": "Status",
          cell: row => `${row.status || "-"}`,
          color: row => `${row.status && (row.status === 'Rejected' || row.status === 'Cancelled') ? 'txt-red' : 'bl-text'}`
        }, {
          "key": "reason",
          "label": "Reason",
          cell: row => `${row.reason || "-"}`
        }],
        detail: [{
          "key": "name",
          "label": "Tranche",
          cell: row => `${row.name || "Not Available"}`
        }, {
          "key": "endDate",
          "label": "Open Date - Close Date",
          cell: row => `${(row.startDate ? new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_4__["default"](row.startDate).format("Do MMM 'YY, h:mm a") : "Not Available") + " - " + (row.endDate ? new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_4__["default"](row.endDate).format("Do MMM 'YY, h:mm a") : "Not Available")}`
        }, {
          "key": "issuePrice",
          "label": "Price",
          cell: row => `${row.issuePrice ? "₹ " + row.issuePrice + " /gm" : "Not Available"}`
        }, {
          "key": "annualInterest",
          "label": "Annual Interest",
          cell: row => `${row.annualInterest ? "₹ " + row.annualInterest + " /gm" : "Not Available"}`
        }, {
          "key": "qty",
          "label": "Order Quantity",
          cell: row => `${row.qty || "Not Available"}`
        }, {
          "key": "amount",
          "label": "Order Amount",
          cell: row => `${row.amount || "Not Available"}`
        }, {
          "key": "status",
          "label": "Status",
          cell: row => `${row.status || "Not Available"}`
        }, {
          "key": "date",
          "label": "Applied Date",
          cell: row => `${row.date ? new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_4__["default"](row.date).format("Do MMM 'YY") : "Not Available"}`
        }]
      },
      tbills: {
        header: 'Treasury Bills',
        abbreviation: 'T-Bills',
        series: 'TB',
        tableStructure: [{
          "key": "entryTime",
          "label": "Date",
          cell: row => `${row.entryTime ? new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_4__["default"](row.entryTime).format("Do MMM 'YY") : "-"}`
        }, {
          "key": "symbol",
          "label": "Name",
          cell: row => `${row.symbol || "-"}`
        }, {
          "key": "quantity",
          "label": "Units",
          cell: row => `${row.quantity || "-"}`
        }, {
          "key": "investmentValue",
          "label": "Amount",
          cell: row => `${row.investmentValue ? "₹ " + row.investmentValue : "-"}`
        }, {
          "key": "orderStatus",
          "label": "Order Status",
          cell: row => `${row.orderStatus && row.orderStatus === 'ES' ? 'Applied Sucessfully' : row.orderStatus && row.orderStatus === 'EF' ? 'Failed' : row.orderStatus && row.orderStatus === 'CS' ? 'Cancelled Sucessfully' : row.orderStatus && row.orderStatus === 'CF' ? 'Cancel Failed' : ''}`,
          orderStatusCell: row => `${row.orderStatus || ''}`
        }, {
          "key": "rejectionReason",
          "label": "Reason",
          cell: row => `${row.rejectionReason || "-"}`
        }],
        detail: [{
          "key": "id",
          "label": "Order Number",
          cell: row => `${row.id || "Not Available"}`
        }, {
          "key": "orderStatus",
          "label": "Order Status",
          cell: row => `${row.orderStatus && row.orderStatus === 'ES' ? 'Applied Sucessfully' : row.orderStatus && row.orderStatus === 'EF' ? 'Failed' : row.orderStatus && row.orderStatus === 'CS' ? 'Cancelled Sucessfully' : row.orderStatus && row.orderStatus === 'CF' ? 'Cancel Failed' : 'Not Available'}`
        }, {
          "key": "symbol",
          "label": "Symbol",
          cell: row => `${row.symbol || "Not Available"}`
        }, {
          "key": "applicationNumber",
          "label": "Application Number",
          cell: row => `${row.applicationNumber || "Not Available"}`
        }, {
          "key": "quantity",
          "label": "Bid Quantity",
          cell: row => `${row.quantity || "Not Available"}`
        }, {
          "key": "price",
          "label": "Price",
          cell: row => `${row.price || "Not Available"}`
        }, {
          "key": "pan",
          "label": "PAN",
          cell: row => `${row.pan || "Not Available"}`
        }, {
          "key": "depository",
          "label": "Depository Name",
          cell: row => `${row.depository || "Not Available"}`
        }, {
          "key": "dpId",
          "label": "DP ID",
          cell: row => `${row.dpId || "Not Available"}`
        }, {
          "key": "clientBenId",
          "label": "Ben ID",
          cell: row => `${row.clientBenId || "Not Available"}`
        }, {
          "key": "entryTime",
          "label": "Entry Timestamp",
          cell: row => `${row.entryTime ? new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_4__["default"](row.entryTime).format("Do MMM 'YY") : "Not Available"}`
        }, {
          "key": "lastActionTime",
          "label": "Last Modification Timestamp",
          cell: row => `${row.lastActionTime ? new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_4__["default"](row.lastActionTime).format("Do MMM 'YY") : "Not Available"}`
        }, {
          "key": "verificationStatus",
          "label": "Verification Status",
          cell: row => `${row.verificationStatus && row.verificationStatus === 'P' ? 'Pending' : row.verificationStatus && row.verificationStatus === 'S' ? 'Verified' : row.verificationStatus && row.verificationStatus === 'F' ? 'Verification failed' : 'Not Available'}`
        }, {
          "key": "verificationReason",
          "label": "Verification Reason",
          cell: row => `${row.verificationReason || "Not Available"}`
        }
        // {
        //   "key": "pan", "label": "Payment Status", cell: (row: any) => `${row.pan || "Not Available"}`
        // },
        // {
        //   "key": "pan", "label": "Payment Reference", cell: (row: any) => `${row.pan || "Not Available"}`
        // }
        ]
      },
      gsec: {
        header: 'Government Securities',
        abbreviation: 'G-Sec',
        series: 'GS',
        tableStructure: [{
          "key": "entryTime",
          "label": "Date",
          cell: row => `${row.entryTime ? new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_4__["default"](row.entryTime).format("Do MMM 'YY") : "-"}`
        }, {
          "key": "symbol",
          "label": "Name",
          cell: row => `${row.symbol || "-"}`
        }, {
          "key": "quantity",
          "label": "Units",
          cell: row => `${row.quantity || "-"}`
        }, {
          "key": "investmentValue",
          "label": "Amount",
          cell: row => `${row.investmentValue ? "₹ " + row.investmentValue : "-"}`
        }, {
          "key": "orderStatus",
          "label": "Order Status",
          cell: row => `${row.orderStatus && row.orderStatus === 'ES' ? 'Applied Sucessfully' : row.orderStatus && row.orderStatus === 'EF' ? 'Failed' : row.orderStatus && row.orderStatus === 'CS' ? 'Cancelled Sucessfully' : row.orderStatus && row.orderStatus === 'CF' ? 'Cancel Failed' : ''}`,
          orderStatusCell: row => `${row.orderStatus || ''}`
        }, {
          "key": "rejectionReason",
          "label": "Reason",
          cell: row => `${row.rejectionReason || "-"}`
        }],
        detail: [{
          "key": "id",
          "label": "Order Number",
          cell: row => `${row.id || "Not Available"}`
        }, {
          "key": "orderStatus",
          "label": "Order Status",
          cell: row => `${row.orderStatus && row.orderStatus === 'ES' ? 'Applied Sucessfully' : row.orderStatus && row.orderStatus === 'EF' ? 'Failed' : row.orderStatus && row.orderStatus === 'CS' ? 'Cancelled Sucessfully' : row.orderStatus && row.orderStatus === 'CF' ? 'Cancel Failed' : 'Not Available'}`
        }, {
          "key": "symbol",
          "label": "Symbol",
          cell: row => `${row.symbol || "Not Available"}`
        }, {
          "key": "applicationNumber",
          "label": "Application Number",
          cell: row => `${row.applicationNumber || "Not Available"}`
        }, {
          "key": "quantity",
          "label": "Bid Quantity",
          cell: row => `${row.quantity || "Not Available"}`
        }, {
          "key": "price",
          "label": "Price",
          cell: row => `${row.price || "Not Available"}`
        }, {
          "key": "pan",
          "label": "PAN",
          cell: row => `${row.pan || "Not Available"}`
        }, {
          "key": "depository",
          "label": "Depository Name",
          cell: row => `${row.depository || "Not Available"}`
        }, {
          "key": "dpId",
          "label": "DP ID",
          cell: row => `${row.dpId || "Not Available"}`
        }, {
          "key": "clientBenId",
          "label": "Ben ID",
          cell: row => `${row.clientBenId || "Not Available"}`
        }, {
          "key": "entryTime",
          "label": "Entry Timestamp",
          cell: row => `${row.entryTime ? new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_4__["default"](row.entryTime).format("Do MMM 'YY") : "Not Available"}`
        }, {
          "key": "lastActionTime",
          "label": "Last Modification Timestamp",
          cell: row => `${row.lastActionTime ? new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_4__["default"](row.lastActionTime).format("Do MMM 'YY") : "Not Available"}`
        }, {
          "key": "verificationStatus",
          "label": "Verification Status",
          cell: row => `${row.verificationStatus && row.verificationStatus === 'P' ? 'Pending' : row.verificationStatus && row.verificationStatus === 'S' ? 'Verified' : row.verificationStatus && row.verificationStatus === 'F' ? 'Verification failed' : 'Not Available'}`
        }, {
          "key": "verificationReason",
          "label": "Verification Reason",
          cell: row => `${row.verificationReason || "Not Available"}`
        }
        // {
        //   "key": "pan", "label": "Payment Status", cell: (row: any) => `${row.pan || "Not Available"}`
        // },
        // {
        //   "key": "pan", "label": "Payment Reference", cell: (row: any) => `${row.pan || "Not Available"}`
        // }
        ]
      },
      sdl: {
        header: 'State Development Loans',
        abbreviation: 'SDL',
        series: 'SG',
        tableStructure: [{
          "key": "entryTime",
          "label": "Date",
          cell: row => `${row.entryTime ? new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_4__["default"](row.entryTime).format("Do MMM 'YY") : "-"}`
        }, {
          "key": "symbol",
          "label": "Name",
          cell: row => `${row.symbol || "-"}`
        }, {
          "key": "quantity",
          "label": "Units",
          cell: row => `${row.quantity || "-"}`
        }, {
          "key": "investmentValue",
          "label": "Amount",
          cell: row => `${row.investmentValue ? "₹ " + row.investmentValue : "-"}`
        }, {
          "key": "orderStatus",
          "label": "Order Status",
          cell: row => `${row.orderStatus && row.orderStatus === 'ES' ? 'Applied Sucessfully' : row.orderStatus && row.orderStatus === 'EF' ? 'Failed' : row.orderStatus && row.orderStatus === 'CS' ? 'Cancelled Sucessfully' : row.orderStatus && row.orderStatus === 'CF' ? 'Cancel Failed' : ''}`,
          orderStatusCell: row => `${row.orderStatus || ''}`
        }, {
          "key": "rejectionReason",
          "label": "Reason",
          cell: row => `${row.rejectionReason || "-"}`
        }],
        detail: [{
          "key": "id",
          "label": "Order Number",
          cell: row => `${row.id || "Not Available"}`
        }, {
          "key": "orderStatus",
          "label": "Order Status",
          cell: row => `${row.orderStatus && row.orderStatus === 'ES' ? 'Applied Sucessfully' : row.orderStatus && row.orderStatus === 'EF' ? 'Failed' : row.orderStatus && row.orderStatus === 'CS' ? 'Cancelled Sucessfully' : row.orderStatus && row.orderStatus === 'CF' ? 'Cancel Failed' : 'Not Available'}`
        }, {
          "key": "symbol",
          "label": "Symbol",
          cell: row => `${row.symbol || "Not Available"}`
        }, {
          "key": "applicationNumber",
          "label": "Application Number",
          cell: row => `${row.applicationNumber || "Not Available"}`
        }, {
          "key": "quantity",
          "label": "Bid Quantity",
          cell: row => `${row.quantity || "Not Available"}`
        }, {
          "key": "price",
          "label": "Price",
          cell: row => `${row.price || "Not Available"}`
        }, {
          "key": "pan",
          "label": "PAN",
          cell: row => `${row.pan || "Not Available"}`
        }, {
          "key": "depository",
          "label": "Depository Name",
          cell: row => `${row.depository || "Not Available"}`
        }, {
          "key": "dpId",
          "label": "DP ID",
          cell: row => `${row.dpId || "Not Available"}`
        }, {
          "key": "clientBenId",
          "label": "Ben ID",
          cell: row => `${row.clientBenId || "Not Available"}`
        }, {
          "key": "entryTime",
          "label": "Entry Timestamp",
          cell: row => `${row.entryTime ? new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_4__["default"](row.entryTime).format("Do MMM 'YY") : "Not Available"}`
        }, {
          "key": "lastActionTime",
          "label": "Last Modification Timestamp",
          cell: row => `${row.lastActionTime ? new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_4__["default"](row.lastActionTime).format("Do MMM 'YY") : "Not Available"}`
        }, {
          "key": "verificationStatus",
          "label": "Verification Status",
          cell: row => `${row.verificationStatus && row.verificationStatus === 'P' ? 'Pending' : row.verificationStatus && row.verificationStatus === 'S' ? 'Verified' : row.verificationStatus && row.verificationStatus === 'F' ? 'Verification failed' : 'Not Available'}`
        }, {
          "key": "verificationReason",
          "label": "Verification Reason",
          cell: row => `${row.verificationReason || "Not Available"}`
        }
        // {
        //   "key": "pan", "label": "Payment Status", cell: (row: any) => `${row.pan || "Not Available"}`
        // },
        // {
        //   "key": "pan", "label": "Payment Reference", cell: (row: any) => `${row.pan || "Not Available"}`
        // }
        ]
      }
    };
    this.dropdownData = {
      status: {
        sgb: [{
          label: 'Requested',
          value: 'Requested'
        }, {
          label: 'Rejected',
          value: 'Rejected'
        }, {
          label: 'Applied',
          value: 'Applied'
        }, {
          label: 'Modified',
          value: 'Modified'
        }, {
          label: 'Cancelled',
          value: 'Cancelled'
        }, {
          label: 'Allotted',
          value: 'Allotted'
        }],
        sp: [{
          label: 'Entry success',
          value: 'ES'
        }, {
          label: 'Entry Fail',
          value: 'EF'
        }, {
          label: 'Modify Success',
          value: 'MS'
        }, {
          label: 'Modify Fail',
          value: 'MF'
        }, {
          label: 'Cancel Success',
          value: 'CS'
        }, {
          label: 'Cancel Fail',
          value: 'CF'
        }]
      }
    };
    this.statusFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormControl('');
    this.ongoinInList = [];
    this.isStatusServiceHit = false;
    this.showDeleteWarningPopup = false;
    this.clientBalance = 0;
    this.showApplyPopup = false;
    this.applySchemeControl = {};
    this.showConfirmPopup = false;
    this.loaders = {
      applyLoader: false,
      cancelLoader: false
    };
    this.showDetailPopup = false;
    this.showSocialPopup = false;
    this.isClientFromApp = false;
    this.profileDetails = {};
  }
  ngOnInit() {
    this.routeParamsSubscription = this.activatedRoute.params.subscribe(params => {
      this.secureProductList = this.shared.secureProductsList;
      this.ongoinInList = [];
      this.isStatusServiceHit = false;
      this.showDeleteWarningPopup = false;
      this.clientBalance = 0;
      this.showApplyPopup = false;
      this.applySchemeControl = {};
      this.showConfirmPopup = false;
      this.loaders = {
        applyLoader: false,
        cancelLoader: false
      };
      this.showDetailPopup = false;
      this.showSocialPopup = false;
      this.isClientFromApp = false;
      this.profileDetails = {};
      this.selectedScheme = params['type'];
      this.selectedSchemeConfig = this.config[this.selectedScheme];
      this.routeQueryParamsSubscription = this.activatedRoute.queryParams.subscribe(qparams => {
        if (qparams['clientId'] && qparams['sessionId']) {
          this.appClientId = atob(qparams['clientId']);
          this.appSessionId = atob(qparams['sessionId']);
          this.isClientFromApp = true;
          this.shared.isClientFromApp = true;
          this.shared.appClientId = this.appClientId;
          this.getProfileDetails();
        }
        // if (qparams['sessionId'])
        //   this.appSessionId = atob(qparams['sessionId']);
      });
      this.fundsSubscription = this.utils.broadcastObservable('openPayinPayoutSuccess').subscribe(data => {
        this.getFunds();
      });
      if (this.secureProductList && this.secureProductList.length) {
        this.getSchemeOrderbook();
      } else {
        this.getSecureProductListMap();
      }
      this.analytics.emitEvent(this.selectedScheme === 'tbills' ? 'visitedTBillsTransaction' : this.selectedScheme === 'gsec' ? 'visitedGSecTransaction' : this.selectedScheme === 'sdl' ? 'visitedSDLTransaction' : 'visitedSGBTransaction', this.isClientFromApp ? this.appClientId : this.utils.getUserId() || 'guest', this.selectedScheme === 'tbills' ? 'TBills' : this.selectedScheme === 'gsec' ? 'GSec' : this.selectedScheme === 'sdl' ? 'SDL' : 'SGB', 1);
      this.utils.setTrackMoeEvent('pageVisited', {
        "UserId": this.isClientFromApp ? this.appClientId : this.utils.getUserId() || 'guest',
        "pageName": this.selectedScheme === 'tbills' ? 'SpTBillsTransaction' : this.selectedScheme === 'gsec' ? 'SpGSecTransaction' : this.selectedScheme === 'sdl' ? 'SpSdlTransaction' : 'SpSgbTransaction'
      });
    });
  }
  getSGBSchemeOrderBook() {
    this.isServiceHit = true;
    let request = {
      pageno: 1,
      pagesize: 1000,
      search: "",
      clientId: this.isClientFromApp ? this.appClientId : this.utils.getUserId() || '',
      sessionId: this.isClientFromApp ? this.appSessionId : this.utils.getSessionId() || ''
    };
    this.schemeOrderBookSubscription = this.schemeService.getSchemeOrderBookListing(this.selectedScheme, request).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.finalize)(() => {
      this.isServiceHit = false;
    })).subscribe(res => {
      if (res && res.status === 'Success') {
        this.schemeOrderBook = res.response.sgbTrans;
        this.schemeOrderBookFiltered = this.schemeOrderBook;
        if (this.selectedScheme === 'sgb') {
          if (this.secureProductList.length) {
            this.getSchemeINList();
            this.getClientSchemeStatusOrder();
          }
        }
        // } else if (this.utils.isSessionExpired(res.reason)) {
        //       if(this.shared.isSSO){
        //     this.utils.sessionExpireHandling()
        //     return
        //   }
        //   this.utils.error('Session Expired', 'Please Login Again.');
        //   this.utils.postFeatureCount();
        //   this.utils.clearLoginDetails();
        //   this.shared.userId = null;
        //   this.route.navigate(['auth/login']);
      } else {
        this.schemeOrderBook = [];
        this.schemeOrderBookFiltered = [];
      }
    }, err => {
      this.schemeOrderBook = [];
      this.schemeOrderBookFiltered = [];
    });
  }
  getSchemeOrderbook() {
    this.selectedScheme === 'sgb' ? this.getSGBSchemeOrderBook() : this.getNCBOrderTransaction();
  }
  getSecureProductListMap() {
    this.selectedScheme === 'sgb' ? this.getSchemeListing() : this.getNCBListing();
  }
  getSchemeINList() {
    this.ongoinInList = this.secureProductList.map(item => (item.isin || '').toUpperCase());
  }
  getClientSchemeStatusOrder() {
    this.isStatusServiceHit = true;
    if (this.ongoinInList.length) {
      let request = {
        clientId: this.isClientFromApp ? this.appClientId : this.utils.getUserId() || '',
        sessionId: this.isClientFromApp ? this.appSessionId : this.utils.getSessionId() || '',
        isin: this.ongoinInList.join()
      };
      this.schemeStatusSubscription = this.schemeService.getSchemeOrderStatus(this.selectedScheme, request).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.finalize)(() => {
        this.isStatusServiceHit = false;
      })).subscribe(res => {
        if (res.status === 'Success') {
          let orderStatusData = res.response;
          // let resD= res.response
          // Object.keys(resD).forEach(ele=>{
          //   resD[ele[0].toLowerCase() + ele.slice(1)]=resD[ele]
          // })
          // let orderStatusData = resD;
          this.schemeOrderBook.forEach((item, i) => {
            let isStatusPresent = orderStatusData.find(element => (element.ApplicationNo || element.applicationNo) === item.applicationNo);
            if (isStatusPresent) {
              let currentObj = {
                latestT: false
              };
              if (i === 0) {
                currentObj.latestT = true;
              } else if (i === this.schemeOrderBook.length - 1) {
                if (this.schemeOrderBook[i - 1].applicationNo !== item.applicationNo) {
                  currentObj.latestT = true;
                }
              } else {
                // && this.schemeOrderBook[i + 1].isin !== item.isin
                if (this.schemeOrderBook[i - 1].applicationNo !== item.applicationNo) {
                  currentObj.latestT = true;
                }
              }
              // isStatusPresent,
              Object.assign(item, currentObj);
              // isStatusPresent,
              Object.assign(this.schemeOrderBookFiltered[i], currentObj);
            } else {
              // { "status": null, "reason": null, "date": null, "qty": 0, "amount": 0, "applicationNo": 0 }
              // Object.assign(item, { "status": null, "reason": null });
              // { "status": null, "reason": null, "date": null, "qty": 0, "amount": 0, "applicationNo": 0 }
              // Object.assign(this.schemeOrderBookFiltered[i], { "status": null, "reason": null });
            }
          });
          // } else if (this.utils.isSessionExpired(res.reason)) {
          //       if(this.shared.isSSO){
          //   this.utils.sessionExpireHandling()
          //   return
          // }
          //   this.utils.error('Session Expired', 'Please Login Again.');
          //   this.utils.postFeatureCount();
          //   this.utils.clearLoginDetails();
          //   this.shared.userId = null;
          //   this.route.navigate(['auth/login']);
        } else {
          this.utils.error('Error', 'Something went wrong');
        }
      }, err => {
        this.schemeOrderBook.forEach((item, i) => {
          // { "status": null, "reason": null, "date": null, "qty": 0, "amount": 0, "applicationNo": 0 }
          Object.assign(item, {
            "status": null,
            "reason": null
          });
          Object.assign(this.schemeOrderBookFiltered[i], {
            "status": null,
            "reason": null
          });
        });
      });
    }
  }
  getNCBOrderTransaction() {
    this.isServiceHit = true;
    let request = {
      "SessionId": this.isClientFromApp ? this.appSessionId : this.utils.getSessionId() || '',
      "userid": this.isClientFromApp ? this.appClientId : this.utils.getUserId() || '',
      "orderId": 0,
      "clientRefNumber": "",
      "pageNo": 1,
      "pageSize": 10000
    };
    this.schemeOrderBookSubscription = this.schemeService.getNCBOrderStatus(request).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.finalize)(() => {
      this.isServiceHit = false;
    })).subscribe(res => {
      if (res && res.status === 200 && res.body && res.body.data) {
        let transaction = res.body.data;
        this.schemeOrderBook = transaction.filter(item => {
          return item.series === this.selectedSchemeConfig.series;
        });
        this.schemeOrderBookFiltered = this.schemeOrderBook;
        this.schemeOrderBook.forEach((item, i) => {
          let isActive = this.secureProductList.find(element => element.symbol === item.symbol);
          if (isActive) {
            let currentObj = {
              latestT: false
            };
            if (i === 0) {
              currentObj.latestT = true;
            } else if (i === this.schemeOrderBook.length - 1) {
              if (this.schemeOrderBook[i - 1].symbol !== item.symbol) {
                currentObj.latestT = true;
              }
            } else {
              // && this.schemeOrderBook[i + 1].symbol !== item.symbol
              if (this.schemeOrderBook[i - 1].symbol !== item.symbol) {
                currentObj.latestT = true;
              }
            }
            Object.assign(item, {
              isActive: true,
              t1ModEndDate: new Date(isActive.t1ModEndDate.split("-")[2], isActive.t1ModEndDate.split("-")[1], isActive.t1ModEndDate.split("-")[0]),
              showDelete: item.orderStatus === 'ES' || item.orderStatus === 'CF'
            }, currentObj);
            Object.assign(this.schemeOrderBookFiltered[i], {
              isActive: true
            }, currentObj);
          } else {
            Object.assign(item, {
              "status": null,
              "reason": null
            });
            Object.assign(this.schemeOrderBookFiltered[i], {
              "status": null,
              "reason": null
            });
          }
        });
        // } else if (this.utils.isSessionExpired(res.body.reason)) {
        //       if(this.shared.isSSO){
        //     this.utils.sessionExpireHandling()
        //     return
        //   }
        //   this.utils.error('Session Expired', 'Please Login Again.');
        //   this.utils.postFeatureCount();
        //   this.utils.clearLoginDetails();
        //   this.shared.userId = null;
        //   this.route.navigate(['auth/login']);
      } else {
        this.schemeOrderBook = [];
        this.schemeOrderBookFiltered = [];
      }
    }, err => {
      this.schemeOrderBook = [];
      this.schemeOrderBookFiltered = [];
    });
    ;
  }
  refreshTransaction() {
    this.statusFilter.patchValue('');
    this.getSchemeOrderbook();
  }
  filterTransaction(event) {
    if (event) {
      this.schemeOrderBookFiltered = this.schemeOrderBook.filter(item => {
        let key = '';
        if (this.selectedScheme === 'sgb') {
          key = 'status';
        } else {
          key = 'orderStatus';
        }
        return item[key] === this.statusFilter.value;
      });
    } else {
      this.schemeOrderBookFiltered = this.schemeOrderBook;
    }
  }
  showDeleteSchemePopup(schemeData, index) {
    this.showDeleteWarningPopup = true;
    this.renderer.setStyle(document.body, 'overflow', 'hidden');
    this.schemeForDeleteUpdate = schemeData;
    this.schemeForDeleteUpdate.listindex = index;
  }
  deleteSchemeOrder() {
    this.loaders.cancelLoader = true;
    if (this.selectedScheme === 'sgb') {
      let payload = {
        applicationNo: this.schemeForDeleteUpdate.applicationNo,
        isCancel: true,
        qty: 0,
        amount: 0,
        source: "Jiffy",
        clientId: this.isClientFromApp ? this.appClientId : this.utils.getUserId() || '',
        sessionId: this.isClientFromApp ? this.appSessionId : this.utils.getSessionId() || '',
        ISIN: this.schemeForDeleteUpdate.isin || ''
      };
      this.schemeStatusSubscription = this.schemeService.addUpdateSchemeOrder(this.selectedScheme, payload).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.finalize)(() => {
        this.loaders.cancelLoader = false;
      })).subscribe(res => {
        if (res.status === "Success" && res.response.sgbOrders) {
          this.showDeleteWarningPopup = false;
          this.renderer.setStyle(document.body, 'overflow', 'auto');
          this.getSchemeOrderbook();
          this.analytics.emitEvent('SGBOrderCancelled', this.isClientFromApp ? this.appClientId : this.utils.getUserId() || '', 'SGB', 1);
          this.utils.setTrackMoeEvent('placedOrder', {
            "UserId": this.isClientFromApp ? this.appClientId : this.utils.getUserId() || '',
            "orderType": "SpSgbCancel",
            "orderReqType": "Cancel",
            "apiReq": payload
          });
          // } else if (this.utils.isSessionExpired(res.reason)) {
          //       if(this.shared.isSSO){
          //   this.utils.sessionExpireHandling()
          //   return
          // }
          //   this.utils.error('Session Expired', 'Please Login Again.');
          //   this.utils.postFeatureCount();
          //   this.utils.clearLoginDetails();
          //   this.shared.userId = null;
          //   this.route.navigate(['auth/login']);
        } else {
          this.showDeleteWarningPopup = false;
          this.renderer.setStyle(document.body, 'overflow', 'auto');
          this.utils.error('Error', 'Failed to cancel order');
        }
      }, err => {
        this.showDeleteWarningPopup = false;
        this.renderer.setStyle(document.body, 'overflow', 'auto');
        this.utils.error('Error', 'Something went wrong');
      });
    } else {
      let userProfile = this.isClientFromApp ? this.profileDetails : this.utils.getProfileData();
      let request = {
        "clientRefNumber": this.schemeForDeleteUpdate.clientRefNumber,
        "applicationNumber": this.schemeForDeleteUpdate.applicationNumber,
        "orderNumber": this.schemeForDeleteUpdate.orderNumber,
        "activityType": "D",
        "clientBenId": userProfile.BOCode,
        "depository": userProfile.Depository,
        "dpId": userProfile.DPCode,
        "investmentValue": this.schemeForDeleteUpdate.investmentValue,
        "pan": userProfile.PanCard,
        "physicalDematFlag": "D",
        "price": this.schemeForDeleteUpdate.price,
        "symbol": this.schemeForDeleteUpdate.symbol,
        "quantity": this.schemeForDeleteUpdate.quantity
      };
      this.schemeStatusSubscription = this.schemeService.addUpdateNCBOrder(request, this.isClientFromApp ? this.appSessionId : this.utils.getSessionId() || '', this.isClientFromApp ? this.appClientId : this.utils.getUserId() || '').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.finalize)(() => {
        this.loaders.cancelLoader = false;
      })).subscribe(res => {
        if (res.status === 200 && (res.body.status === "Success" || res.body.status === "success") && res.body && !res.body.reason) {
          this.showDeleteWarningPopup = false;
          this.renderer.setStyle(document.body, 'overflow', 'auto');
          this.getSchemeOrderbook();
          this.analytics.emitEvent(this.selectedScheme === 'tbills' ? 'TBillsOrderCancelled' : this.selectedScheme === 'gsec' ? 'GSecOrderCancelled' : 'SDLOrderCancelled', this.isClientFromApp ? this.appClientId : this.utils.getUserId() || '', this.selectedScheme === 'tbills' ? 'TBills' : this.selectedScheme === 'gsec' ? 'GSec' : 'SDL', 1);
          this.utils.setTrackMoeEvent('orderPlaced', {
            "UserId": this.isClientFromApp ? this.appClientId : this.utils.getUserId() || '',
            "orderType": this.selectedScheme === 'tbills' ? 'SpTBillsCancel' : this.selectedScheme === 'gsec' ? 'SpGSecCancel' : 'SpSdlCancel',
            "orderReqType": "Cancel",
            "apiReq": request
          });
          this.utils.success('Success', 'Order cancelled successfully');
          // } else if (this.utils.isSessionExpired(res.body.reason)) {
          //       if(this.shared.isSSO){
          //   this.utils.sessionExpireHandling()
          //   return
          // }
          //   this.utils.error('Session Expired', 'Please Login Again.');
          //   this.utils.postFeatureCount();
          //   this.utils.clearLoginDetails();
          //   this.shared.userId = null;
          //   this.route.navigate(['auth/login']);
        } else {
          this.showDeleteWarningPopup = false;
          this.renderer.setStyle(document.body, 'overflow', 'auto');
          this.utils.error('Error', res.body && res.body.reason ? res.body.reason : 'Failed to delete order');
        }
      }, err => {
        this.showDeleteWarningPopup = false;
        this.renderer.setStyle(document.body, 'overflow', 'auto');
        this.utils.error('Error', 'Something went wrong');
      });
    }
  }
  closePopup(type) {
    if (type === 'apply') {
      this.showApplyPopup = false;
    } else if (type === 'delete') {
      this.showDeleteWarningPopup = false;
    } else if (type === 'confirm') {
      this.showConfirmPopup = false;
    } else if (type === 'social') {
      this.showSocialPopup = false;
    } else if (type === 'detail') {
      this.showDetailPopup = false;
    }
    this.renderer.setStyle(document.body, 'overflow', 'auto');
  }
  applyScheme(schemeData, index, isReApply) {
    this.getFunds();
    this.showApplyPopup = true;
    this.renderer.setStyle(document.body, 'overflow', 'hidden');
    this.applySchemeControl = JSON.parse(JSON.stringify(schemeData));
    this.applySchemeControl.amount = isReApply ? Number(schemeData.issuePrice) : this.applySchemeControl.amount ? this.applySchemeControl.amount : Number(schemeData.issuePrice);
    // this.applySchemeControl.source='Choice FinX';
    this.applySchemeControl.qty = isReApply ? 1 : this.applySchemeControl.qty ? this.applySchemeControl.qty : 1;
    this.applySchemeControl.applicationNo = isReApply ? 0 : this.applySchemeControl.applicationNo;
    this.applySchemeControl.listindex = index;
    this.analytics.emitEvent("SGBOrderPlaced", this.isClientFromApp ? this.appClientId : this.utils.getUserId() || '', 'Apply SGB', 1);
    this.utils.setTrackMoeEvent("SGBOrderPlaced", {
      "UserId": this.isClientFromApp ? this.appClientId : this.utils.getUserId() || ''
    });
  }
  confirmScheme() {
    if (!this.applySchemeControl.isQtyInvalid && this.applySchemeControl.amount <= this.clientBalance) {
      this.loaders.applyLoader = true;
      let userProfile = this.isClientFromApp ? this.profileDetails : this.utils.getProfileData();
      let request = {
        clientId: this.isClientFromApp ? this.appClientId : this.utils.getUserId() || '',
        sessionId: this.isClientFromApp ? this.appSessionId : this.utils.getSessionId() || '',
        source: "Jiffy",
        applicationNo: this.applySchemeControl.applicationNo ? this.applySchemeControl.applicationNo : 0,
        pan: userProfile.PanCard || "",
        isin: (this.applySchemeControl.isin || '').toUpperCase(),
        sgbName: this.applySchemeControl.sgbName,
        symbol: this.applySchemeControl.symbol,
        qty: this.applySchemeControl.qty,
        amount: this.applySchemeControl.amount,
        category: "Individual",
        isCancel: false
      };
      this.schemeStatusSubscription = this.schemeService.addUpdateSchemeOrder(this.selectedScheme, request).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.finalize)(() => {
        this.loaders.applyLoader = false;
      })).subscribe(res => {
        if (res.status === "Success" && res.response.sgbOrders) {
          this.showApplyPopup = false;
          this.showConfirmPopup = true;
          this.renderer.setStyle(document.body, 'overflow', 'auto');
          this.getSchemeOrderbook();
          this.analytics.emitEvent('SGBOrderModified', this.isClientFromApp ? this.appClientId : this.utils.getUserId() || '', 'SGB', 1);
          this.utils.setTrackMoeEvent('placedOrder', {
            "UserId": this.isClientFromApp ? this.appClientId : this.utils.getUserId() || '',
            "orderType": 'SpSgbModify',
            "orderReqType": 'Modify',
            "apiReq": request
          });
          // } else if (this.utils.isSessionExpired(res.reason)) {
          //       if(this.shared.isSSO){
          //   this.utils.sessionExpireHandling()
          //   return
          // }
          //   this.utils.error('Session Expired', 'Please Login Again.');
          //   this.utils.postFeatureCount();
          //   this.utils.clearLoginDetails();
          //   this.shared.userId = null;
          //   this.route.navigate(['auth/login']);
        } else {
          this.showApplyPopup = false;
          this.renderer.setStyle(document.body, 'overflow', 'auto');
          this.utils.error('Error', 'Failed to place order');
        }
      }, err => {
        this.showApplyPopup = false;
        this.renderer.setStyle(document.body, 'overflow', 'auto');
        this.utils.error('Error', 'Something went wrong');
      });
    } else {
      this.openFundDrawer();
    }
  }
  getFunds() {
    // this.loaders.applyLoader = true;
    let request = {
      "UserId": this.isClientFromApp ? this.appClientId : this.utils.getUserId(),
      "SessionId": this.isClientFromApp ? this.appSessionId : this.utils.getSessionId() || '',
      "GroupId": this.utils.get('groupId') || 'HO',
      "Amount": 0,
      "ProductType": 1,
      "BankAccNo": ""
    };
    let userAccountStatus = this.utils.getUserAccountStatus();
    if (!(!userAccountStatus || !userAccountStatus.onboardStatus || userAccountStatus.onboardStatus == 'C')) {
      return;
    }
    this.rest.getPayoutBalanceDetails(request, 'V3').subscribe(res => {
      if (res.Status == "Success" && res.Response) {
        this.clientBalance = res.Response.PayoutBalance || 0;
        // } else if (this.utils.isSessionExpired(res.Reason)) {
        //       if(this.shared.isSSO){
        //     this.utils.sessionExpireHandling()
        //     return
        //   }
        //   this.utils.error('Session Expired', 'Please Login Again.');
        //   this.utils.postFeatureCount();
        //   this.utils.clearLoginDetails();
        //   this.shared.userId = null;
        //   this.route.navigate(['auth/login']);
      } else {
        this.utils.error('Error', "Something Went Wrong");
        this.clientBalance = 0;
      }
    }, err => {
      this.utils.error('Error', 'Something went wrong');
      this.clientBalance = 0;
    }).add(() => {
      // this.loaders.applyLoader = false;
    });
  }
  increaseQuantity() {
    if (this.applySchemeControl.isQtyInvalid) this.applySchemeControl.qty = 1;else this.applySchemeControl.qty = Number(this.applySchemeControl.qty) + 1;
    this.applySchemeControl.amount = Number(this.applySchemeControl.issuePrice) * Number(this.applySchemeControl.qty);
    this.applySchemeControl.isQtyInvalid = false;
  }
  decreaseQuantity() {
    if (this.applySchemeControl.isQtyInvalid) this.applySchemeControl.qty = 1;else this.applySchemeControl.qty = Number(this.applySchemeControl.qty) - 1;
    this.applySchemeControl.amount = Number(this.applySchemeControl.issuePrice) * Number(this.applySchemeControl.qty);
    this.applySchemeControl.isQtyInvalid = false;
  }
  isModificationAllowed(data) {
    if (data.t1ModEndDate) {
      return new Date() <= data.t1ModEndDate;
    } else {
      return false;
    }
  }
  openSchemeDetailPopup(schemeData) {
    this.showDetailPopup = true;
    this.renderer.setStyle(document.body, 'overflow', 'hidden');
    this.schemeForDeleteUpdate = schemeData;
  }
  shareScheme() {
    this.showSocialPopup = true;
    this.renderer.setStyle(document.body, 'overflow', 'hidden');
  }
  copySchemeLink() {
    navigator['clipboard'].writeText(window.location.origin + '/market/scheme/' + this.selectedScheme).then(() => {
      this.utils.success('Success', 'Link copied to clipboard');
      this.showSocialPopup = false;
      this.renderer.setStyle(document.body, 'overflow', 'auto');
    }, err => {
      this.utils.error('Error', 'Failed to copy link');
    });
  }
  shareOnSocialMedia(social) {
    let isMobileDevice = this.utils.isMobileDevice();
    let isOS = this.utils.getMobileOperatingSystem();
    switch (social) {
      case 'whatsapp':
        if (isMobileDevice && isOS.toLowerCase().indexOf('ios') > -1) {
          window.open('https://wa.me?text=Apply for the ' + this.selectedSchemeConfig.header + ' (' + this.selectedSchemeConfig.abbreviation + ') ' + ' using the Choice FinX Website. Link - ' + (window.location.origin + '/market/scheme/' + this.selectedScheme), "_self");
        } else {
          window.open('https://wa.me?text=Apply for the ' + this.selectedSchemeConfig.header + ' (' + this.selectedSchemeConfig.abbreviation + ') ' + ' using the Choice FinX Website. Link - ' + (window.location.origin + '/market/scheme/' + this.selectedScheme));
        }
        break;
      case 'facebook':
        if (isMobileDevice && isOS.toLowerCase().indexOf('ios') > -1) {
          window.open('https://www.facebook.com/sharer.php?u=' + (window.location.origin + '/market/scheme/' + this.selectedScheme) + '&quote=Apply for the ' + this.selectedSchemeConfig.header + ' (' + this.selectedSchemeConfig.abbreviation + ') ' + ' using the Choice FinX Website.', "_self");
        } else {
          window.open('https://www.facebook.com/sharer.php?u=' + (window.location.origin + '/market/scheme/' + this.selectedScheme) + '&quote=Apply for the ' + this.selectedSchemeConfig.header + ' (' + this.selectedSchemeConfig.abbreviation + ') ' + ' using the Choice FinX Website.');
        }
        break;
      case 'twitter':
        if (isMobileDevice && isOS.toLowerCase().indexOf('ios') > -1) {
          window.open('https://twitter.com/share?text=Apply for the ' + this.selectedSchemeConfig.header + ' (' + this.selectedSchemeConfig.abbreviation + ') ' + ' using the Choice FinX Website. Link - &url=' + (window.location.origin + '/market/scheme/' + this.selectedScheme), "_self");
        } else {
          window.open('https://twitter.com/share?text=Apply for the ' + this.selectedSchemeConfig.header + ' (' + this.selectedSchemeConfig.abbreviation + ') ' + ' using the Choice FinX Website. Link - &url=' + (window.location.origin + '/market/scheme/' + this.selectedScheme));
        }
        break;
    }
  }
  getSchemeListing() {
    this.isServiceHit = true;
    let request = {
      clientId: this.isClientFromApp ? this.appClientId : this.utils.getUserId() || '',
      sessionId: this.isClientFromApp ? this.appSessionId : this.utils.getSessionId() || ''
    };
    this.schemeListingSubscription = this.schemeService.getSchemeListing(this.selectedScheme, request).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.finalize)(() => {
      this.getSchemeOrderbook();
      this.isServiceHit = false;
    })).subscribe(res => {
      if (res.status === 'Success') {
        this.secureProductList = res.response.openSGB;
      } else {
        this.secureProductList = [];
      }
    }, err => {
      this.secureProductList = [];
    });
  }
  getNCBListing() {
    this.isServiceHit = true;
    this.schemeListingSubscription = this.schemeService.getSchemeListing(this.selectedScheme, this.selectedSchemeConfig.series).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.finalize)(() => {
      this.getSchemeOrderbook();
      this.isServiceHit = false;
    })).subscribe(res => {
      if (res && res.status === 200 && res.body) {
        this.secureProductList = res.body.data.data;
      } else {
        this.secureProductList = [];
      }
    }, err => {
      this.secureProductList = [];
    });
  }
  openFundDrawer() {
    if (this.utils.getProfileData('NRIStatus')) {
      this.showNoBankActive(true);
      return;
    }
    let action = 1;
    let bankData = ((this.utils.getProfileData() || {}).BankDetails || []).filter(bank => {
      return bank.IsDefault == "Yes";
    });
    if (bankData.length) {
      this.getFundsDetails();
      let eventName = action == 1 ? 'Pay In Button Clicked' : 'Payout Button Clicked';
    } else {
      this.showNoBankActive();
    }
  }
  /** show popup
  * @param isNRIUser flag to indicate show dialog box of NRI
  */
  showNoBankActive(isNRIUser) {
    this.renderer.setStyle(document.body, 'overflow', 'hidden');
    if (isNRIUser) {
      this.isNRI = true;
      return;
    }
    this.noBankActive = true;
  }
  /** close popup
   * @param isNRIUser flag to indicate close dialog box of NRI
  */
  closeNoBankActive(isNRIUser) {
    this.renderer.setStyle(document.body, 'overflow', 'auto');
    if (isNRIUser) {
      this.isNRI = false;
      return;
    }
    this.noBankActive = false;
  }
  getFundsDetails() {
    // this.loaders.applyLoader = true;
    let request = {
      type: 2,
      "UserId": this.isClientFromApp ? this.appClientId : this.utils.getUserId(),
      "SessionId": this.isClientFromApp ? this.appSessionId : this.utils.getSessionId() || '',
      "GroupId": this.utils.get('groupId') || 'HO',
      accessToken: this.utils.getTwoFAAccessToken()
    };
    this.rest.getFundsEquityData(request).subscribe(data => {
      if (data.Status === "Success" && data.Response) {
        let fundsData = {
          lFundsViewDataEquity: {}
        };
        fundsData.lFundsViewDataEquity = data.Response.lFundsViewDataNew;
        fundsData = JSON.parse(JSON.stringify(fundsData));
        if (this.isClientFromApp) {
          this.utils.broadcast('openPayinPayoutDrawer', {
            source: 'scheme-secure-products',
            action: 1,
            detail: fundsData,
            profile: this.profileDetails,
            isClientFromApp: this.isClientFromApp,
            appClientId: this.appClientId,
            appSessionId: this.appSessionId
          });
        } else {
          this.utils.broadcast('openPayinPayoutDrawer', {
            source: 'scheme-secure-products',
            action: 1,
            detail: fundsData,
            profile: this.profileDetails,
            isClientFromApp: this.isClientFromApp
          });
        }
        // } else if (this.utils.isSessionExpired(data.Reason)) {
        //       if(this.shared.isSSO){
        //     this.utils.sessionExpireHandling()
        //     return
        //   }
        //   this.utils.error('Session Expired', 'Please Login Again.');
        //   this.utils.postFeatureCount();
        //   this.utils.clearLoginDetails();
        //   this.shared.userId = null;
        //   this.route.navigate(['auth/login']);
      }
    }, err => {
      this.utils.error('Error', 'Something went wrong');
    }).add(() => {
      // this.loaders.applyLoader = false;
    });
  }
  /**
  * Fetch User Profile in case of Successfull login
  */
  getProfileDetails() {
    let request = {
      "userId": this.isClientFromApp ? this.appClientId : this.utils.getUserId(),
      "sessionId": this.isClientFromApp ? this.appSessionId : this.utils.getSessionId(),
      "GroupId": 'HO'
    };
    this.rest.getProfile(request).subscribe(data => {
      if (data.Status === "Success" && data.Response) {
        this.profileDetails = data.Response;
        if (this.isClientFromApp) this.utils.setUserAttributes(data.Response, false, true);
      } else {
        this.profileDetails = {};
      }
    }, err => {
      this.profileDetails = {};
    });
  }
  backToList() {
    if (this.isClientFromApp) {
      this.route.navigate(['/market/scheme/' + this.selectedScheme], {
        queryParams: {
          clientId: btoa(this.appClientId),
          sessionId: btoa(this.appSessionId)
        }
      });
    } else {
      this.route.navigate(['/market/scheme/' + this.selectedScheme]);
    }
  }
  ngOnDestroy() {
    if (this.routeParamsSubscription) {
      this.routeParamsSubscription.unsubscribe();
    }
    if (this.schemeOrderBookSubscription) {
      this.schemeOrderBookSubscription.unsubscribe();
    }
    if (this.routeQueryParamsSubscription) {
      this.routeQueryParamsSubscription.unsubscribe();
    }
    if (this.schemeStatusSubscription) {
      this.schemeStatusSubscription.unsubscribe();
    }
    if (this.schemeListingSubscription) {
      this.schemeListingSubscription.unsubscribe();
    }
    if (this.fundsSubscription) {
      this.fundsSubscription.unsubscribe();
    }
  }
  quantityChange(event) {
    if (this.selectedScheme === 'sgb') {
      if (Number(event) >= 1 && Number(event) <= 4000) {
        this.applySchemeControl.isQtyInvalid = false;
        this.applySchemeControl.amount = Number(this.applySchemeControl.issuePrice) * Number(this.applySchemeControl.qty);
      } else {
        this.applySchemeControl.isQtyInvalid = true;
        this.applySchemeControl.amount = 0;
      }
    } else {
      if (Number(event) >= this.applySchemeControl.minQty && Number(event) <= this.applySchemeControl.maxQty && event % 100 === 0) {
        this.applySchemeControl.isQtyInvalid = false;
        this.applySchemeControl.isQtyNotInRange = false;
        this.applySchemeControl.amount = this.applySchemeControl.qty / 100 * (this.applySchemeControl.minQty * this.applySchemeControl.cutoffPrice || 1);
      } else {
        if (Number(event) > this.applySchemeControl.maxQty || Number(event) < this.applySchemeControl.minQty) {
          this.applySchemeControl.isQtyNotInRange = true;
          this.applySchemeControl.isQtyInvalid = false;
          this.applySchemeControl.amount = 0;
        } else {
          this.applySchemeControl.isQtyInvalid = true;
          this.applySchemeControl.isQtyNotInRange = false;
          this.applySchemeControl.amount = 0;
        }
      }
    }
  }
  static {
    this.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute
    }, {
      type: src_app_services_rest_scheme_service__WEBPACK_IMPORTED_MODULE_3__.SchemeService
    }, {
      type: _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_7__.UtilsService
    }, {
      type: _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_6__.SharedDataService
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
    }, {
      type: _services_rest_post_login_service__WEBPACK_IMPORTED_MODULE_5__.PostLoginService
    }, {
      type: src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_2__.AnalyticsService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Renderer2
    }];
  }
};
SecureProductsTransactionComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-secure-products-transaction',
  template: _secure_products_transaction_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_13__.DecimalPipe],
  styles: [(_secure_products_transaction_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute, src_app_services_rest_scheme_service__WEBPACK_IMPORTED_MODULE_3__.SchemeService, _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_7__.UtilsService, _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_6__.SharedDataService, _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router, _services_rest_post_login_service__WEBPACK_IMPORTED_MODULE_5__.PostLoginService, src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_2__.AnalyticsService, _angular_core__WEBPACK_IMPORTED_MODULE_11__.Renderer2])], SecureProductsTransactionComponent);


/***/ }),

/***/ 31022:
/*!**************************************************************************************************************************!*\
  !*** ./src/app/market/secure-products/secure-products-transaction/secure-products-transaction.component.scss?ngResource ***!
  \**************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ 8564);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 98557);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@charset "UTF-8";
/*Bootstrap Override*/
/*Custom variables*/
/*Icons Variables*/
/*Responsive screen width*/
.breadcrumbsec {
  margin-top: 10px;
}
.breadcrumbsec .breadcrumb {
  display: flex;
  padding: 0;
}
.breadcrumbsec .breadcrumb .breadcrumb-item {
  list-style-type: none;
}
.breadcrumbsec .breadcrumb .breadcrumb-item a {
  color: #797979;
  font-size: 16px;
  line-height: 19px;
  font-family: "SF Pro Display";
  text-decoration: none;
}
.breadcrumbsec .breadcrumb .breadcrumb-item a:hover {
  color: #004393;
}
.breadcrumbsec .breadcrumb .breadcrumb-item + .breadcrumb-item::before {
  content: "›";
  vertical-align: top;
  font-size: 26px;
  line-height: 15px;
  color: #797979;
  margin: 0 0.8rem;
}

.tablewrap {
  padding: 0 0 120px 0;
}
.tablewrap .headwrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.tablewrap .headwrap .title {
  color: #333333;
  font-size: 24px;
  line-height: 29px;
  font-weight: 600;
  font-family: "SFProText";
}
.tablewrap .headwrap .wrapper {
  display: flex;
  justify-content: space-between;
}
.tablewrap .headwrap .wrapper .sort-drop-down {
  margin-right: 20px;
}
.tablewrap .headwrap .wrapper .sort-drop-down select {
  background-color: transparent !important;
  border: 1px solid #DBDBDB;
  border-radius: 4px;
  color: #797979;
  font-size: 14px;
  line-height: 16px;
  font-family: "SF Pro Display";
}
.tablewrap .headwrap .wrapper .sort-drop-down select::after {
  color: #797979 !important;
}
.tablewrap .headwrap .wrapper .myInput {
  height: 30px;
  background-position: 12px 6px;
  background-color: transparent;
  color: #797979;
  font-size: 14px;
  line-height: 16px;
  font-family: "SF Pro Display";
  background-image: none;
  position: relative;
  background-image: url('search.svg');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 5% 50%;
  background-size: inherit;
}
.tablewrap .transactiontable {
  border-radius: 4px;
  overflow: hidden;
}
.tablewrap .transactiontable table {
  width: 100%;
  border-radius: 4px;
  margin-top: 2rem;
}
@media (max-width: 767px) {
  .tablewrap .transactiontable table {
    overflow-y: scroll;
    width: 100%;
    display: block;
  }
}
.tablewrap .transactiontable table thead {
  background-color: #F9F9FB;
  border-radius: 4px;
}
.tablewrap .transactiontable table thead th {
  padding: 16px 24px;
  color: #797979;
  font-size: 16px;
  line-height: 19px;
  font-family: "SF Pro Display";
  font-weight: 400;
}
.tablewrap .transactiontable table tbody {
  background-color: #fff;
  border-radius: 4px;
}
.tablewrap .transactiontable table tbody td {
  padding: 16px 24px;
  color: #333333;
  font-size: 16px;
  line-height: 21px;
  font-family: "SF Pro Display";
  font-weight: 400;
  letter-spacing: 0.19px;
}
.tablewrap .transactiontable table tbody .line {
  padding: 0 24px;
}
.tablewrap .transactiontable table tbody .line td {
  padding: 0 24px;
}
.tablewrap .transactiontable table tbody .line hr {
  margin: 0;
}
.tablewrap .transactiontable table tbody .securityname {
  color: #333333;
  font-size: 16px;
  line-height: 21px;
  font-weight: 600;
  font-family: "SFProText";
}
.tablewrap .transactiontable table tbody .bluetxt {
  color: #004393;
  font-size: 16px;
  line-height: 21px;
  font-weight: 600;
}

.sort-drop-down .select::after {
  color: #797979 !important;
}

.nodata {
  color: #a5a2a2;
  font-size: 16px;
  font-weight: bold;
}

.main-modal {
  text-align: center;
  overflow: hidden;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  /* z-index: 1050; */
  -webkit-overflow-scrolling: touch;
  outline: 0;
  opacity: 0;
  transition: opacity 0.15s linear, z-index 0.15;
  z-index: -1;
  overflow-x: hidden;
  overflow-y: auto;
}

.model-open {
  z-index: 99999;
  opacity: 1;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.custom-model-inner {
  transform: translate(0, -25%);
  transition: transform 0.3s ease-out;
  display: inline-block;
  vertical-align: middle;
  width: 655px;
  margin: 0 auto;
  max-width: 97%;
  padding-bottom: 0;
  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);
  background: #ffffff;
  border-radius: 8px;
  overflow: hidden;
}

.custom-model-wrap {
  display: block;
  width: 100%;
  position: relative;
  background-color: #fff;
  border-bottom: 1px solid #999;
  border-radius: 0;
  background-clip: padding-box;
  outline: 0;
  text-align: left;
  padding: 0;
  box-sizing: border-box;
  max-height: calc(100vh - 70px);
  overflow-y: auto;
}

.model-open .custom-model-inner {
  transform: translate(0, 0);
  position: relative;
  z-index: 999;
}

.model-open .bg-overlay {
  background: rgba(0, 0, 0, 0.6);
  z-index: 99;
}

.bg-overlay {
  background: rgba(0, 0, 0, 0);
  height: 100vh;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  transition: background 0.15s linear;
}

.close-btn {
  position: absolute;
  right: 2px;
  top: 15px;
  cursor: pointer;
  z-index: 99;
  padding: 4px 12px;
  font-size: 18px;
  margin-right: 0;
  height: 30px;
  margin-bottom: 0;
  border-radius: 0;
  border: 0;
  color: #004393;
}

@media screen and (min-width: 800px) {
  .custom-model-main:before {
    content: "";
    display: inline-block;
    height: auto;
    vertical-align: middle;
    margin-right: 0px;
    height: 100%;
  }
}
@media screen and (max-width: 799px) {
  .custom-model-inner {
    margin-top: 45px;
  }
}
.pop-up-content-wrap {
  padding: 40px;
}
.pop-up-content-wrap h4 {
  font-weight: bold;
  color: #333333;
  font-size: 24px;
  line-height: 29px;
  padding-bottom: 20px;
  border-bottom: 1px solid #9D9D9D;
}
@media screen and (max-width: 768px) {
  .pop-up-content-wrap h4 {
    font-size: 16px;
    line-height: 20px;
    padding-right: 10px;
  }
}
.pop-up-content-wrap .price-amt-list {
  display: flex;
  justify-content: space-between;
  margin: 20px 0 40px 0;
  flex-wrap: wrap;
}
.pop-up-content-wrap .price-amt-list p {
  font-size: 14px;
  color: #797979;
}
.pop-up-content-wrap .price-amt-list h5 {
  font-size: 16px;
  font-weight: bold;
  color: #333333;
}
.pop-up-content-wrap .price-amt-list .plus-minus .field1 {
  display: flex;
  align-items: center;
}
.pop-up-content-wrap .price-amt-list .plus-minus .field1 .add-plus {
  border: 0;
  background: #F4F3F8;
  width: 24px;
  height: 24px;
  font-size: 21px;
  line-height: 24px;
  color: #004393;
}
.pop-up-content-wrap .price-amt-list .plus-minus .field1 .add-plus:disabled {
  cursor: not-allowed;
}
.pop-up-content-wrap .price-amt-list .plus-minus .field1 .input-number {
  color: #333333;
  font-size: 16px;
  font-weight: bold;
  border: 0;
  width: 55px;
  text-align: center;
  outline: none;
}
@media screen and (max-width: 640px) {
  .pop-up-content-wrap .price-amt-list .plus-minus {
    width: 100%;
    margin-bottom: 20px;
  }
}
.pop-up-content-wrap .succ-bar {
  font-size: 14px;
  color: #797979;
  border-radius: 4px;
  background: #F4F3F8;
  padding: 12px 15px;
  display: block;
}
.pop-up-content-wrap .avl-balance {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 13px;
}
.pop-up-content-wrap .avl-balance .balance-tex {
  width: 42%;
}
.pop-up-content-wrap .avl-balance .balance-tex h6 {
  color: #797979;
  margin-top: 0;
}
.pop-up-content-wrap .avl-balance .balance-tex h5 {
  font-weight: bold;
}
@media screen and (max-width: 640px) {
  .pop-up-content-wrap .avl-balance .balance-tex {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
.pop-up-content-wrap .avl-balance .confirm-btn {
  width: 58%;
  padding: 12px 15px;
}
@media screen and (max-width: 640px) {
  .pop-up-content-wrap .avl-balance .confirm-btn {
    width: 100%;
  }
}
.pop-up-content-wrap .avl-balance a.confirm-btn[disabled] {
  cursor: not-allowed;
  pointer-events: none;
}
@media screen and (max-width: 640px) {
  .pop-up-content-wrap .avl-balance {
    display: block;
  }
}

.custom-model-social {
  display: flex;
  align-items: center;
}
.custom-model-social .custom-model-inner {
  width: 203px;
}
.custom-model-social .custom-model-inner .pop-up-content-wrap h4 {
  border: 0;
}
.custom-model-social .custom-model-inner .pop-up-content-wrap ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.custom-model-social .custom-model-inner .pop-up-content-wrap ul li {
  margin-bottom: 15px;
  font-size: 16px;
}
.custom-model-social .custom-model-inner .pop-up-content-wrap ul li label {
  font-size: 16px;
}
.custom-model-social .custom-model-inner .pop-up-content-wrap ul li a {
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #797979;
  text-decoration: none;
}
.custom-model-social .custom-model-inner .pop-up-content-wrap ul li a .icon-menu {
  padding: 5px;
  background: #F4F3F8;
  margin-right: 10px;
}
.custom-model-social .custom-model-inner .pop-up-content-wrap ul li:last-child {
  margin-bottom: 0;
}
@media screen and (max-width: 640px) {
  .custom-model-social .custom-model-inner .pop-up-content-wrap {
    padding: 30px 25px;
  }
}

.custom-model-delete .custom-model-inner {
  width: 536px;
}
.custom-model-delete .custom-model-inner .pop-up-content-wrap {
  width: 100%;
  margin: 0 auto;
  text-align: center;
}
.custom-model-delete .custom-model-inner .pop-up-content-wrap h4 {
  border: 0;
  text-align: center;
}
.custom-model-delete .custom-model-inner .pop-up-content-wrap h4 span {
  display: block;
}
.custom-model-delete .custom-model-inner .pop-up-content-wrap p {
  color: #333333;
  margin-bottom: 20px;
  opacity: 1;
}
.custom-model-delete .custom-model-inner .pop-up-content-wrap .confirm-btn {
  width: 100%;
  padding: 13px 15px;
}

.custom-model-confirm .custom-model-inner {
  width: 536px;
}
.custom-model-confirm .custom-model-inner .pop-up-content-wrap {
  width: 100%;
  margin: 0 auto;
  text-align: center;
  padding: 20px;
}
.custom-model-confirm .custom-model-inner .pop-up-content-wrap .scheme-details ul {
  list-style: none;
  padding-left: 0;
  display: flex;
  flex-wrap: wrap;
}
.custom-model-confirm .custom-model-inner .pop-up-content-wrap .scheme-details ul li {
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
  width: 50%;
}
.custom-model-confirm .custom-model-inner .pop-up-content-wrap h4 {
  border: 0;
  text-align: center;
}
.custom-model-confirm .custom-model-inner .pop-up-content-wrap h4 span {
  display: block;
}
.custom-model-confirm .custom-model-inner .pop-up-content-wrap p {
  color: #333333;
  margin-bottom: 20px;
  opacity: 1;
}
.custom-model-confirm .custom-model-inner .pop-up-content-wrap .confirm-btn {
  width: 100%;
  padding: 13px 15px;
}
.custom-model-confirm .detailpopup {
  width: 700px;
}

@media (max-width: 992px) {
  .custom-model-confirm2 .custom-model-inner .pop-up-content-wrap {
    padding: 30px 0;
  }
  .custom-model-confirm2 .custom-model-inner .pop-up-content-wrap .scheme-details {
    padding: 0 10px;
  }
}

.custom-model-confirm2 .scheme-details {
  padding: 0;
}
@media (max-width: 360px) {
  .custom-model-confirm2 .scheme-details ul li {
    font-size: 12px;
    text-align: left;
  }
}
.custom-model-confirm2 .scheme-details ul li label {
  color: #000000;
}

.custom-model-confirm2 .custom-model-inner .pop-up-content-wrap .scheme-details {
  text-align: left;
}

.refreshbtn {
  border: 1px solid #DBDBDB;
  height: 28px;
  border-radius: 4px;
}
.refreshbtn img {
  height: 15px;
}

.companyrow {
  border-bottom: 1px solid #DBDBDB;
}
.companyrow .name {
  position: relative;
}
.companyrow .hoverbtn {
  transition: all 0.2s ease-in;
  opacity: 0;
  position: absolute;
  top: 30%;
  left: 50%;
  right: 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}
.companyrow .hoverbtn .iconbtn {
  color: #004393;
  border: 1px solid #004393;
  border-radius: 5px;
  background-color: #fff;
  margin: 0 0.2rem;
  width: 28px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.companyrow .hoverbtn .iconbtn img {
  max-width: 100%;
}
.companyrow:hover .hoverbtn {
  opacity: 1 !important;
}

.loader-btn {
  border: 4px solid #d5d5d5;
  border-radius: 50%;
  border-top: 4px solid #004393;
  width: 30px;
  height: 30px;
  /* Safari */
  animation: spin 2s linear infinite;
  display: block;
  margin: 0 auto;
}

.blockClick {
  pointer-events: none;
  cursor: not-allowed;
}

.actionbtn {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}
.actionbtn .iconbtn {
  color: #004393;
  border: 1px solid #004393;
  border-radius: 5px;
  background-color: #fff;
  margin: 0 0.2rem;
  width: 28px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 !important;
}
.actionbtn .iconbtn img {
  width: 14px;
  max-width: 100%;
}

p.error {
  color: #cd2232 !important;
  font-size: 1rem !important;
}`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 1926:
/*!**************************************************************************************************************************!*\
  !*** ./src/app/market/secure-products/secure-products-transaction/secure-products-transaction.component.html?ngResource ***!
  \**************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<section class=\"breadcrumbsec\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <ul class=\"breadcrumb breadcrumb-right-arrow\">\r\n          <li class=\"breadcrumb-item\"><a [routerLink]=\"['']\">Home</a></li>\r\n          <li class=\"breadcrumb-item\"><a (click)=\"backToList()\">{{selectedSchemeConfig?.abbreviation}}</a></li>\r\n          <li class=\"breadcrumb-item\"><a href=\"javascript:void(0)\">Transactions</a></li>\r\n        </ul>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"tablewrap\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"headwrap\">\r\n          <h2 class=\"title\">\r\n            {{selectedSchemeConfig?.header}} - Transactions\r\n          </h2>\r\n          <div class=\"wrapper\">\r\n            <div class=\"sort-drop-down\">\r\n              <div class=\"select\">\r\n                <select [formControl]=\"statusFilter\" (change)=\"filterTransaction($event.target.value)\">\r\n                  <option value=\"\">All</option>\r\n                  @for (item of (dropdownData.status[selectedScheme] || dropdownData.status.sp); track item) {\r\n                    <option\r\n                    [value]=\"item.value\">{{item.label}}</option>\r\n                  }\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <!-- <input type=\"text\" id=\"search\" class=\"myInput\" placeholder=\"Search\" title=\"Type in a name\" #searchInput\r\n            name=\"searchValue\"  autocomplete=\"off\" aria-label=\"search\" > -->\r\n            <button class=\"transaction-btn pull-right refreshbtn\" (click)=\"refreshTransaction()\"><img\r\n            src=\"../assets/images/repeat-btn.png\"></button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n\r\n        <div class=\"transactiontable\">\r\n          @if (isServiceHit) {\r\n            <img class=\"loader\" src=\"../../../assets/images/loader.gif\" />\r\n          }\r\n          @if (!isServiceHit && schemeOrderBookFiltered?.length) {\r\n            <table>\r\n              <thead>\r\n                <tr>\r\n                  @for (item of selectedSchemeConfig?.tableStructure; track item; let i = $index) {\r\n                    <th scope=\"col\">\r\n                    {{item?.label}}</th>\r\n                  }\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                @if (!isServiceHit) {\r\n                  @for (item of schemeOrderBookFiltered; track item; let listindex = $index) {\r\n                    <!--  <pre>{{item|json}}</pre> -->\r\n                    <tr class=\"companyrow\">\r\n                      @for (label of selectedSchemeConfig?.tableStructure; track label; let i = $index) {\r\n                        <td class=\"security\"\r\n                          [class.securityname]=\"label.key === 'sgbName' || label.key === 'symbol' || label.key === 'name'\"\r\n                          [class.name]=\"label.key === 'sgbName' || label.key === 'symbol' || label.key === 'name'\"\r\n                          [attr.data-label]=\"label?.label\"\r\n                          >\r\n                          <ng-container>{{(label?.cell(item)) || ''}}</ng-container>\r\n                          <div class=\"hoverbtn\">\r\n                            @if (selectedScheme === 'sgb' && label.key==='sgbName' && item.status) {\r\n                              @if (item.status.toLowerCase()!=='modified' && item.status.toLowerCase()!=='cancelled' && item.status.toLowerCase()!=='allotted' && item.status.toLowerCase()!=='applied' && item.status.toLowerCase()!=='confirmation pending' && item.status.toLowerCase()!=='confirm') {\r\n                                <button class=\"iconbtn\"\r\n                                  (click)=\"applyScheme(item,listindex)\" title=\"Edit\"><img src=\"assets/images/icons/edit.svg\" alt=\"\"></button>\r\n                                }\r\n                                @if (item.status.toLowerCase()!=='cancelled' && item.status.toLowerCase()!=='allotted' && item.status.toLowerCase()!=='applied' && item.status.toLowerCase()!=='confirmation pending' && item.status.toLowerCase()!=='confirm') {\r\n                                  <button class=\"iconbtn\"\r\n                                    (click)=\"showDeleteSchemePopup(item,listindex)\" title=\"Delete\"><img src=\"assets/images/icons/deletes.svg\" alt=\"\"></button>\r\n                                  }\r\n                                }\r\n                                @if (selectedScheme !== 'sgb' && label.key==='symbol' && item.isActive) {\r\n                                  @if (item.latestT && item.showDelete) {\r\n                                    <button class=\"iconbtn\" (click)=\"showDeleteSchemePopup(item,listindex)\" title=\"Delete\"><img src=\"assets/images/icons/deletes.svg\"\r\n                                    alt=\"\"></button>\r\n                                  }\r\n                                }\r\n                                @if (selectedScheme === 'sgb' && label.key==='sgbName') {\r\n                                  <button class=\"iconbtn\" (click)=\"openSchemeDetailPopup(item)\" title=\"Details\"> <i class=\"icon-Details\"\r\n                                  aria-hidden=\"true\"></i></button>\r\n                                }\r\n                                @if (selectedScheme !== 'sgb' && label.key==='symbol') {\r\n                                  <button class=\"iconbtn\" (click)=\"openSchemeDetailPopup(item)\" title=\"Details\"><img\r\n                                  src=\"assets/images/icons/details.svg\" alt=\"\"></button>\r\n                                }\r\n                                @if (label.key==='sgbName' || label.key==='symbol') {\r\n                                  <button class=\"iconbtn\" (click)=\"shareScheme()\" title=\"Share\"><img\r\n                                  src=\"assets/images/icons/share.svg\" alt=\"\"></button>\r\n                                }\r\n                              </div>\r\n                              <!-- <div class=\"hoverbtn\"><button class=\"iconbtn\"\r\n                              *ngIf=\"label.key==='sgbName' || label.key==='symbol'\" (click)=\"shareScheme()\"><img\r\n                            src=\"assets/images/icons/share.svg\" alt=\"\"></button></div> -->\r\n                            <!-- <button (click)=\"showDeleteSchemePopup(item,listindex)\"><img src=\"assets/images/icons/deletes.svg\"></button> -->\r\n                          </td>\r\n                        }\r\n                      </tr>\r\n                    }\r\n                  }\r\n                </tbody>\r\n              </table>\r\n            }\r\n            @if (schemeOrderBookFiltered?.length == 0 && !isServiceHit) {\r\n              <div class=\"no-result-wrapper\">\r\n                <span class=\"nodata text-center\">No\r\n                Data Available</span>\r\n              </div>\r\n            }\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <!-- Delete popup -->\r\n    @if (showDeleteWarningPopup) {\r\n      <div class=\"main-modal custom-model-delete\" [class.model-open]=\"showDeleteWarningPopup\"\r\n        >\r\n        <div class=\"custom-model-inner\">\r\n          <div class=\"close-btn\" (click)=\"closePopup('delete')\">&#10006;</div>\r\n          <div class=\"custom-model-wrap\">\r\n            <div class=\"pop-up-content-wrap\">\r\n              <h4>{{selectedSchemeConfig?.header || ''}} <span>{{schemeForDeleteUpdate?.sgbName ||\r\n              schemeForDeleteUpdate?.symbol || ''}}</span> </h4>\r\n              <p>Are you sure to cancel this order?</p>\r\n              <a href=\"javascript:void(0)\" class=\"btn btn-gradient btn confirm-btn\"\r\n                [class.blockClick]=\"loaders?.cancelLoader\" (click)=\"deleteSchemeOrder()\">\r\n                @if (loaders?.cancelLoader) {\r\n                  <span class=\"loader-btn\"></span>\r\n                }\r\n                @if (!loaders?.cancelLoader) {\r\n                  <span>CANCEL</span>\r\n                }\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"bg-overlay\"></div>\r\n      </div>\r\n    }\r\n\r\n    <!-- apply form popup -->\r\n    @if (showApplyPopup) {\r\n      <div class=\"main-modal custom-model-main\" [class.model-open]=\"showApplyPopup\">\r\n        <div class=\"custom-model-inner\">\r\n          <div class=\"close-btn\" (click)=\"closePopup('apply')\">&#10006;</div>\r\n          <div class=\"custom-model-wrap\">\r\n            <div class=\"pop-up-content-wrap\">\r\n              <h4>{{applySchemeControl?.sgbName || applySchemeControl?.name}}</h4>\r\n              <div class=\"price-amt-list\">\r\n                <div class=\"plus-minus\">\r\n                  <p>Qty in gms</p>\r\n                  <div class=\"field1\">\r\n                    <button type=\"button\" id=\"sub\" class=\"sub add-plus\" (click)=\"decreaseQuantity()\"\r\n                    [disabled]=\"applySchemeControl.qty<=1\">-</button>\r\n                    <input type=\"tel\" autocomplete=\"off\" maxlength=\"4\" inputRestrict=\"unsignedInteger\" class=\"input-number\"\r\n                      [(ngModel)]=\"applySchemeControl.qty\" (input)=\"quantityChange($event.target.value)\" />\r\n                      <button type=\"button\" id=\"add\" class=\"add add-plus\" (click)=\"increaseQuantity()\"\r\n                      [disabled]=\"applySchemeControl.qty>=4000\">+</button>\r\n                    </div>\r\n                    @if (applySchemeControl.isQtyInvalid) {\r\n                      <p class=\"error\">Qty should be between 1 to 4000</p>\r\n                    }\r\n                  </div>\r\n                  <div class=\"mn-price\">\r\n                    <p>Price</p>\r\n                    <h5>{{applySchemeControl?.issuePrice}} / gm</h5>\r\n                  </div>\r\n                  <div class=\"mn-amount\">\r\n                    <p>Amount</p>\r\n                    <h5>{{applySchemeControl?.amount | number}}</h5>\r\n                  </div>\r\n                </div>\r\n                <div class=\"avl-balance\">\r\n                  @if (applySchemeControl.amount > clientBalance) {\r\n                    <p class=\"error\">There is\r\n                    insufficient balance in your account. Please maintain adequate amount</p>\r\n                  }\r\n                  <div class=\"balance-tex\">\r\n                    <h6>Available balance</h6>\r\n                    <h5>{{clientBalance | number}}</h5>\r\n                  </div>\r\n                  <a href=\"javascript:void(0)\" class=\"Click-here3 btn btn-gradient btn confirm-btn\" (click)=\"confirmScheme()\"\r\n                    [attr.disabled]=\"(applySchemeControl.isQtyInvalid || loaders?.applyLoader)?'':null\" [class.blockClick]=\"loaders?.applyLoader\">\r\n                    @if (loaders?.applyLoader) {\r\n                      <span class=\"loader-btn\"></span>\r\n                    }\r\n                    @if (!loaders?.applyLoader) {\r\n                      <span>{{(applySchemeControl.amount >\r\n                      clientBalance)?'ADD FUNDS':'CONFIRM'}}</span>\r\n                    }\r\n                  </a>\r\n                </div>\r\n                <div class=\"mt-20 noteform\"><strong>Note: </strong>Please maintain sufficient balance in your demat account.\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"bg-overlay\"></div>\r\n      </div>\r\n    }\r\n\r\n    <!-- Detail popup -->\r\n    @if (showDetailPopup) {\r\n      <div class=\"main-modal custom-model-confirm model-open custom-model-confirm2\">\r\n        <div class=\"custom-model-inner detailpopup\">\r\n          <div class=\"close-btn\" (click)=\"closePopup('detail')\">&#10006;</div>\r\n          <div class=\"custom-model-wrap\">\r\n            <div class=\"pop-up-content-wrap\">\r\n              <div class=\"scheme-details\">\r\n                <h4>{{selectedSchemeConfig?.header}} Details</h4>\r\n                <ul>\r\n                  @for (item of selectedSchemeConfig?.detail; track item; let i = $index) {\r\n                    <li>\r\n                      <label>{{item?.label}}</label>\r\n                      <span>: {{item?.cell(schemeForDeleteUpdate)}}</span>\r\n                    </li>\r\n                  }\r\n                </ul>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"bg-overlay\"></div>\r\n      </div>\r\n    }\r\n\r\n    @if (showSocialPopup) {\r\n      <div class=\"main-modal custom-model-social\" [class.model-open]=\"showSocialPopup\">\r\n        <div class=\"custom-model-inner\">\r\n          <div class=\"close-btn\" (click)=\"closePopup('social')\">&#10006;</div>\r\n          <div class=\"custom-model-wrap\">\r\n            <div class=\"pop-up-content-wrap\">\r\n              <h4>Share via</h4>\r\n              <ul class=\"social\">\r\n                <li>\r\n                  <a href=\"javascript:void(0)\" (click)=\"shareOnSocialMedia('whatsapp')\">\r\n                    <img src=\"assets/images/icons/whatsapp.svg\" alt=\"\" class=\"icon-menu icon-share img-responsive\">\r\n                    WhatsApp\r\n                  </a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"javascript:void(0)\" (click)=\"shareOnSocialMedia('facebook')\">\r\n                    <img src=\"assets/images/icons/Facebook.svg\" alt=\"\" class=\"icon-menu icon-share img-responsive\">\r\n                    Facebook\r\n                  </a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"javascript:void(0)\" (click)=\"shareOnSocialMedia('twitter')\">\r\n                    <img src=\"assets/images/icons/Twitter.svg\" alt=\"\" class=\"icon-menu icon-share img-responsive\">\r\n                    Twitter\r\n                  </a>\r\n                </li>\r\n                @if (!isClientFromApp) {\r\n                  <li>\r\n                    <a href=\"javascript:void(0)\" (click)=\"copySchemeLink()\">\r\n                      <i class=\"icon-menu icon-copy img-responsive icon-eye\"></i>\r\n                      Copy link\r\n                    </a>\r\n                  </li>\r\n                }\r\n                <!-- <i class=\"icon-menu icon-share img-responsive icon-eye\"></i> -->\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"bg-overlay\"></div>\r\n      </div>\r\n    }\r\n\r\n\r\n  </section>\r\n\r\n  @if (noBankActive) {\r\n    <div class=\"dialog\">\r\n      <div class=\"dialog-content\">\r\n        <div class=\"dialog-header clearfix\">\r\n          <div class=\"col-md-12\">\r\n            <h4>Attention</h4>\r\n          </div>\r\n        </div>\r\n        <div class=\"dialog-section\">\r\n          <p>None of your Registered Bank Account is Active, Please Contact Support </p>\r\n        </div>\r\n        <div class=\"dialog-footer clearfix\">\r\n          <button class=\"btn sell\" (click)=\"closeNoBankActive()\">Close</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  }\r\n\r\n  @if (isNRI) {\r\n    <div class=\"dialog\">\r\n      <div class=\"dialog-content\" style=\"max-width: 80rem\">\r\n        <div class=\"dialog-header clearfix\">\r\n          <div class=\"col-md-12\">\r\n            <h4>NRI Payin/Payout Process</h4>\r\n          </div>\r\n        </div>\r\n        <div class=\"dialog-section\" style=\"text-align: center;\">\r\n          <p>Since you are NRI customer, your fund transfer is required to be routed through your PIS account only.</p>\r\n          <p>For more query, you may contact to your RM or call <a href=\"tel:+918824242424\">(+918824242424)</a> our customer\r\n          care or <br> email <a href=\"mailto:care@choiceindia.com\">(care&#64;choiceindia.com)</a> us.</p>\r\n        </div>\r\n        <div class=\"dialog-footer clearfix\">\r\n          <button class=\"btn sell\" (click)=\"closeNoBankActive(true)\">Close</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  }";

/***/ })

}]);