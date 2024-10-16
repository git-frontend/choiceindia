(self["webpackChunkjiffy_upgraded"] = self["webpackChunkjiffy_upgraded"] || []).push([[7966],{

/***/ 67966:
/*!************************************************************************************!*\
  !*** ./src/app/post-login-module/reports/ledger-report/ledger-report.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LedgerReportComponent: () => (/* binding */ LedgerReportComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _ledger_report_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ledger-report.component.html?ngResource */ 56574);
/* harmony import */ var _ledger_report_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ledger-report.component.scss?ngResource */ 75852);
/* harmony import */ var _ledger_report_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ledger_report_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jspdf */ 69223);
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jspdf-autotable */ 34941);
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/analytics/analytics.service */ 50213);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 28460);
/* harmony import */ var _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../assets/libs/esm-moment.min.js */ 29483);
/* harmony import */ var _common_module_non_eq_sso_non_eq_sso_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common-module/non-eq-sso/non-eq-sso.component */ 67761);
/* harmony import */ var _pipes_value_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../pipes/value.pipe */ 50615);
/* harmony import */ var _services_rest_reports_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/rest/reports.service */ 86452);
/* harmony import */ var _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/shared-data/shared-data.service */ 46013);
/* harmony import */ var _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/utils/utils.service */ 89893);







//declare var jsPDF: any;
/** Import Moment JS Library*/
// var moment: any = require();









/**
 * Component for Ledger Reports
 */
let LedgerReportComponent = class LedgerReportComponent {
  /**
   * Constructor for Object Initialization
   * @param rest ReportsService Instance
   * @param utils UtilsService Instance
   * @param shared SharedDataService instance
   * @param renderer Renderer2 instance
   */
  constructor(rest, utils, shared, renderer, analytics) {
    this.rest = rest;
    this.utils = utils;
    this.shared = shared;
    this.renderer = renderer;
    this.analytics = analytics;
    let today = new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_5__["default"]();
    this.ledgerData = [];
    this.dates = this.utils.getFiscalDateRange(7);
    this.ledgerFilters = {
      /*  reportTypeList:[{ value: 'ledger', label: 'Ledger' }, { value: 'MTF', label: 'MTF Ledger' }], */
      codeList: [{
        value: 'Group1',
        label: 'Ledger'
      }, {
        value: 'MTF',
        label: 'MTF Ledger'
      }],
      companyCode: 'Group1',
      fromDate: this.dates.min,
      toDate: this.dates.max,
      noOfRecords: 1000,
      data: null
      /* reportType:'ledger' */
    };
    let profile = this.utils.getProfile();
    console.log("profileprofile", profile);
    this.isMTFPresent = profile.MTFEnable;
    this.pnlDataConfig = {
      sellQty: 0,
      buyQty: 0,
      netQty: 0,
      value: 0
    };
    this.showGlobalDetailsReport = false;
    this.Math = Math;
    //this.exportPDF();
  }
  /** Life Cycle Hook for PnlReportComponent*/
  ngOnInit() {
    this.utils.setTrackMoeEvent('visitedLedgerReport', {
      "User_ID": this.utils.getUserId() || 'guest',
      "IP": this.shared.IPAddress
    });
    this.analytics.emitEvent('visitedLedgerReport', this.utils.getUserId() || 'guest', JSON.stringify({
      "IP": this.shared.IPAddress
    }), 1);
    this.getLedgerReport();
  }
  /**
   * Function to fetch Ledger Report
   * @param isnewRequest whether to clear the current Data or not
   */
  getLedgerReport() {
    this.ledgerData = [];
    this.ledgerFilters.noOfRecords = 0;
    let request = {
      "LoginId": "JIFFY",
      "ClientId": this.utils.getUserId(),
      "Group": this.ledgerFilters.companyCode || 'Group1',
      "FromDate": new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_5__["default"](this.ledgerFilters.fromDate).format('YYYY-MM-DD'),
      "ToDate": new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_5__["default"](this.ledgerFilters.toDate).format('YYYY-MM-DD'),
      "SessionId": this.utils.getSessionId()
    };
    // if(this.isMTFPresent){
    //   request['ReportType']=this.ledgerFilters.reportType || '';
    // }
    this.rest.getLedgerReport(request).subscribe(data => {
      if (data && data.Response && data.Response.length) {
        let result = data.Response;
        this.ledgerFilters.data = data;
        this.ledgerFilters.noOfRecords = data.Response.length;
        let balance = 0;
        let creditBalance = 0;
        let debitBalance = 0;
        this.ledgerData = [];
        result.forEach(element => {
          balance = balance + (element.Credit ? element.Credit : element.Debit * -1);
          creditBalance += element.Credit || 0;
          debitBalance += element.Debit || 0;
          element.Balance = balance;
          element.absBalance = Math.abs(balance);
          element.loader = false;
          this.ledgerData.push(element);
        });
        this.ledgerFilters.data.TotalBalance = balance;
        this.ledgerFilters.data.TotalAbsBalance = Math.abs(balance);
        this.ledgerFilters.data.creditBalance = creditBalance;
        this.ledgerFilters.data.debitBalance = debitBalance;
      }
    });
  }
  getReport(type) {
    let request = {
      "Input": [{
        "LoginID": "JIFFY",
        "ClientCode": this.utils.getUserId(),
        "CompanyCode": this.ledgerFilters.companyCode || 'Group1',
        "Fromdate": new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_5__["default"](this.ledgerFilters.fromDate).format('DD-MM-YYYY'),
        "ToDate": new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_5__["default"](this.ledgerFilters.toDate).format('DD-MM-YYYY'),
        "Report": "LEDGER",
        "Format": type,
        "Source": "JIFFY"
      }]
    };
    // if(this.isMTFPresent){
    //   request['Input'][0]['ReportType']=this.ledgerFilters.reportType || '';
    // }
    this.rest.generateReport(request).subscribe(data => {
      if (data.JiffyResponse && data.JiffyResponse[0].Status == 1) {
        this.utils.success('Success', 'You will get the reports on your registered email id within 30 minutes');
      } else {
        this.utils.error('Error', 'No Data Available');
      }
    }, err => {
      this.utils.error('Error', 'Something went Wrong, Please try again later.');
    });
  }
  exportXLS() {
    // var elt = document.getElementById('datatable');
    // var wb = XLSX.utils.table_to_book(elt, { display: true });
    // XLSX.writeFile(wb, 'ledgr.xlsx', { bookType: 'xlsx', bookSST: true, type: 'base64', sheet: 'Ledger',cellStyles:true });
  }
  exportPDF() {
    const test = jspdf__WEBPACK_IMPORTED_MODULE_2__.jsPDF;
    let doc = new jspdf__WEBPACK_IMPORTED_MODULE_2__.jsPDF('p', 'px', 'a4');
    doc.setProperties({
      title: 'Acount Ledger ' + this.utils.getUserId(),
      subject: 'Acount Ledger ',
      author: 'JIFFY',
      keywords: 'JIFFY, Ledger',
      creator: 'JIFFY-WEB'
    });
    let userProfile = this.utils.getProfileData();
    doc = this.setLetterHead(doc);
    doc = this.setProfile(doc, userProfile);
    doc = this.setTable(doc, userProfile);
    doc = this.setSigner(doc, userProfile);
    doc.save(this.utils.getUserId() + '_' + new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_5__["default"]().format('YYYYMMDDHHmmSSS') + '.pdf');
  }
  setSigner(doc, userProfile) {
    userProfile = userProfile || this.utils.getProfileData();
    let startY = Math.round(doc['previousAutoTable'].finalY) + 15;
    let difference = doc.internal.pageSize.getHeight() - (startY + 26);
    if (difference < 120) {
      doc.addPage();
      this.setFooter(doc, userProfile);
      startY = 30;
    }
    doc.setFontSize(10);
    doc.text('Yours faithfully,', 15, startY);
    doc.text('I / We herby confirm the above statement', 15, startY + 15);
    doc.text('Running Account Authorisation :- You may revoke your running account authorisation at any time.', 15, startY + 25);
    doc.text('The same would continue untill it is revoked by you', 15, startY + 35);
    doc.text('This is computer generated statement, hence does not require signature.', 15, startY + 45);
    doc.text('For ' + userProfile.Name, 15, startY + 60);
    doc.text('For CHOICE EQUITY BROKING PVT.LTD', 430 - doc.getTextWidth('For CHOICE EQUITY BROKING PVT.LTD'), startY + 60);
    doc.text('(Authorised Signatory)', 15, startY + 80);
    doc.text('(Authorised Signatory)', 430 - doc.getTextWidth('(Authorised Signatory)'), startY + 80);
    doc.text('PAN :' + userProfile.PanCard, 15, startY + 95);
    doc.text('Pan No :AADCC8390B', 430 - doc.getTextWidth('Pan No :AADCC8390B'), startY + 95);
    let pages = doc.internal.pages;
    pages.forEach((pageNo, index) => {
      doc.setPage(index);
      let text = 'Account Ledger Page ' + index + '/' + (pages.length - 1);
      doc.text(text, (430 - doc.getTextWidth(text)) / 2, 615);
    });
    return doc;
  }
  setLetterHead(doc) {
    let img = new Image();
    img.src = '../../../assets/images/Choice-International.png';
    doc.addImage('data:image/png;base64,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', 'PNG', 15, 15, 50, 50);
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(14);
    doc.text('CHOICE EQUITY BROKING PVT.LTD', 70, 25);
    doc.setFontSize(6);
    doc.setFont('Helvetica', 'normal');
    doc.text('Regd. Off.: Choice International Limited, Sunil Patodia Tower, PLOT NO. 156-158, CHAKRAVARTY ASHOK SOCIETY ,J.B.NAGAR, ANDHERI EAST, MUMBAI 400099', 70, 33, {
      lineHeightFactor: 1.5
    });
    doc.text('Tel.: 022-67079999 Fax : 022-67079898 E-mail : care@choiceindia.com • backoffice@choiceindia.com ,', 70, 40, {
      lineHeightFactor: 1.5
    });
    doc.text('Member: NSE • Trading Member Code : 13773 ,Member : BSE • Trading Member Code : 3299,MSEI: Trading Member Code : 73200,SEBI Regn. No.:INZ000160131', 70, 50, {
      lineHeightFactor: 1.5
    });
    doc.text('Compliance officer : Mr.Premkumar Harikrishnan, email p.harikrishnan@choiceindia.com Investor Grievance: ig@choiceindia.com phone: 022- 67079999', 70, 59, {
      lineHeightFactor: 1.5
    });
    doc.text('Website: www.choiceindia.com . CIN Number: U65999MH2010PTC198714,Pan No.AADCC8390B', 70, 66, {
      lineHeightFactor: 1.5
    });
    doc.line(15, 71, 430, 71);
    return doc;
  }
  setFooter(doc, userProfile) {
    userProfile = userProfile || this.utils.getProfileData();
    doc.line(15, 605, 430, 605);
    doc.setFontSize(9);
    doc.text(userProfile.ClientId + '  ' + userProfile.Name, 15, 615);
    let date = 'Print Date : ' + new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_5__["default"]().format('DD/MM/YYYY');
    doc.getTextWidth(date);
    doc.text(date, 430 - doc.getTextWidth(date), 615);
    return doc;
  }
  setProfile(doc, userProfile) {
    userProfile = userProfile || this.utils.getProfileData();
    let address = this.splitter(userProfile.Address.replace(/[^a-zA-Z0-9]/g, ' '), 30);
    doc.setFontSize(9);
    doc.text('Client ID', 15, 80);
    doc.setFont('Helvetica', 'bold');
    doc.text(':  ' + userProfile.ClientId, 55, 80);
    doc.text('Name', 15, 90);
    doc.text(':  ' + userProfile.Name, 55, 90);
    doc.setFont('Helvetica', 'normal');
    doc.text('Address', 15, 100);
    let lastYCoordinate = 90;
    address.forEach((text, index) => {
      lastYCoordinate += 10;
      doc.text((index == 0 ? ':  ' : '   ') + text, 55, lastYCoordinate);
    });
    doc.text('Mobile No.', 265, 80);
    doc.text(':  ' + userProfile.MobileNo, 305, 80);
    doc.text('Category', 265, 90);
    doc.text(':  ' + 'Individual', 305, 90);
    doc.text('Email ID', 265, 100);
    doc.text(':  ' + userProfile.EmailID, 305, 100);
    doc.setFontSize(11);
    doc.text('Dear Sir/Madam,', 15, lastYCoordinate + 12);
    doc.setFontSize(8);
    doc.text('Sub: Confirmation of Accounts', (430 - doc.getTextWidth('Sub: Confirmation of Accounts')) / 2, lastYCoordinate + 22);
    doc.setFontSize(10);
    doc.text('Please find herewith statement of Accounts ledger from ' + new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_5__["default"](this.ledgerFilters.fromDate).format('DD/MM/YYYY') + ' To ' + new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_5__["default"](this.ledgerFilters.toDate).format('DD/MM/YYYY') + ' as per our books.', 15, lastYCoordinate + 31);
    doc.text('If any discrepancies/errors are found you are requested to report the same within 30 days from the receipt of this statement.', 15, lastYCoordinate + 41);
    //this.setFooter(doc, userProfile);
    return doc;
  }
  setTable(doc, userProfile) {
    userProfile = userProfile || this.utils.getProfileData();
    let headers = ['Date', 'V.No', 'Particulars', 'Debit', 'Credit', 'Balance'];
    let tableData = [];
    this.ledgerData.forEach((data, index) => {
      tableData.push([data.vDate, data.No + '', data.Narration + '', data.Debit > 0 ? this.utils.segmentTransform(data.Debit, 2) + '' : '', data.Credit > 0 ? this.utils.segmentTransform(data.Credit, 2) + '' : '', data.Balance < 0 ? this.utils.segmentTransform(data.absBalance, 2) + ' DR' : this.utils.segmentTransform(data.absBalance, 2) + ' CR']);
    });
    tableData[0][0] = {
      content: 'OPENING BALANCE',
      colSpan: 3,
      styles: {
        halign: 'center',
        fontStyle: 'bold'
      }
    };
    tableData[0].splice(1, 2);
    tableData.push([{
      content: 'CLOSING BALANCE',
      colSpan: 3,
      styles: {
        halign: 'center',
        fontStyle: 'bold'
      }
    }, {
      content: this.utils.segmentTransform(Math.abs(this.ledgerFilters.data.debitBalance), 2),
      colSpan: 1,
      styles: {
        halign: 'right'
      }
    }, {
      content: this.utils.segmentTransform(Math.abs(this.ledgerFilters.data.creditBalance), 2),
      colSpan: 1,
      styles: {
        halign: 'right'
      }
    }, {
      content: this.utils.segmentTransform(Math.abs(this.ledgerFilters.data.TotalBalance), 2) + (this.ledgerFilters.data.TotalBalance < 0 ? ' DR' : ' CR'),
      colSpan: 1,
      styles: {
        halign: 'right',
        fontStyle: 'bold'
      }
    }]);
    doc['autoTable']({
      head: [headers],
      body: tableData,
      startY: 170,
      margin: {
        top: 15,
        left: 15,
        right: 15,
        bottom: 50
      },
      theme: 'plain',
      styles: {
        valign: 'middle',
        fontSize: 8,
        lineColor: '#000',
        lineWidth: 0.5
      },
      headStyles: {
        fillColor: '#efefef',
        valign: 'middle',
        fontStyle: 'bold',
        fontSize: 8,
        textColor: '#000'
      },
      columnStyles: {
        '0': {
          cellWidth: 40
        },
        '1': {
          cellWidth: 55
        },
        '2': {
          cellWidth: 195
        },
        '3': {
          halign: 'right',
          cellWidth: 40
        },
        '4': {
          halign: 'right',
          cellWidth: 40
        },
        '5': {
          halign: 'right',
          cellWidth: 45
        }
      },
      didDrawPage: data => {
        this.setFooter(doc, userProfile);
      }
    });
    return doc;
  }
  splitter(text, maxlength) {
    let strs = [];
    while (text.length > maxlength) {
      let pos = text.substring(0, maxlength).lastIndexOf(' ');
      pos = pos <= 0 ? maxlength : pos;
      strs.push(text.substring(0, pos));
      let i = text.indexOf(' ', pos) + 1;
      if (i < pos || i > pos + maxlength) i = pos;
      text = text.substring(i);
    }
    strs.push(text);
    return strs;
  }
  showglobaldetailsreport(item) {
    this.pnlDataConfig.sellQty = 0;
    this.pnlDataConfig.sellQty = 0;
    this.pnlDataConfig.buyQty = 0;
    this.pnlDataConfig.netQty = 0;
    this.pnlDataConfig.value = 0;
    const request = {
      "UserId": 'neuron',
      "SessionId": this.utils.getSessionId(),
      "ClientId": this.utils.getUserId(),
      "ToDate": new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_5__["default"](item.trd_Date).format('YYYY-MM-DD'),
      "FromDate": new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_5__["default"](item.trd_Date).format('YYYY-MM-DD'),
      "Group": item.Code
      // "Group": 'Group1'
    };
    item.loader = true;
    this.shared.isServiceHit = true;
    this.pnlData = [];
    this.rest.getDetailedPNLReport(request).subscribe(data => {
      if (data && data.Response) {
        let scrips = {};
        data.Response.forEach((item, index) => {
          if (!scrips[item.SECURITY]) {
            scrips[item.SECURITY] = {
              SECURITY: item.SECURITY,
              COMPANY_CODE: item.COMPANY_CODE,
              Scrip_Name: item.Scrip_Name,
              trades: [],
              sellQty: 0,
              buyQty: 0,
              netQty: 0,
              value: 0
            };
          }
          scrips[item.SECURITY].sellQty += item.Sell_Qty;
          scrips[item.SECURITY].buyQty += item.Buy_Qty;
          scrips[item.SECURITY].netQty += item.Net_Qty;
          scrips[item.SECURITY].value += item.Net_Amount;
          scrips[item.SECURITY].trades.push(item);
          this.pnlDataConfig.sellQty += item.Sell_Qty;
          this.pnlDataConfig.buyQty += item.Buy_Qty;
          this.pnlDataConfig.netQty += item.Net_Qty;
          this.pnlDataConfig.value += item.Net_Amount;
        });
        this.pnlData = Object.values(scrips);
        this.showGlobalDetailsReport = true;
      } else {
        this.utils.error('Error', data && data.Reason ? data.Reason : 'Something went wrong');
      }
    }, err => {
      this.utils.error('Error', 'Something went wrong');
    }).add(() => {
      this.shared.isServiceHit = false;
      item.loader = false;
    });
  }
  closeGlobalDetailsReport() {
    this.showGlobalDetailsReport = false;
    this.renderer.setStyle(document.body, 'overflow', 'auto');
  }
  static {
    this.ctorParameters = () => [{
      type: _services_rest_reports_service__WEBPACK_IMPORTED_MODULE_8__.ReportsService
    }, {
      type: _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_10__.UtilsService
    }, {
      type: _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_9__.SharedDataService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Renderer2
    }, {
      type: src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_4__.AnalyticsService
    }];
  }
};
LedgerReportComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-ledger-report',
  template: _ledger_report_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  imports: [_common_module_non_eq_sso_non_eq_sso_component__WEBPACK_IMPORTED_MODULE_6__.NonEqSsoComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__.BsDatepickerModule, _angular_common__WEBPACK_IMPORTED_MODULE_15__.DatePipe, _pipes_value_pipe__WEBPACK_IMPORTED_MODULE_7__.ValuePipe],
  styles: [(_ledger_report_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__metadata)("design:paramtypes", [_services_rest_reports_service__WEBPACK_IMPORTED_MODULE_8__.ReportsService, _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_10__.UtilsService, _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_9__.SharedDataService, _angular_core__WEBPACK_IMPORTED_MODULE_11__.Renderer2, src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_4__.AnalyticsService])], LedgerReportComponent);


/***/ }),

/***/ 75852:
/*!*************************************************************************************************!*\
  !*** ./src/app/post-login-module/reports/ledger-report/ledger-report.component.scss?ngResource ***!
  \*************************************************************************************************/
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
.content-box {
  position: relative;
  min-height: 200px;
  text-align: right;
}

.no-data-container {
  clear: both;
}
.no-data-container h3 {
  color: #797979;
  font-size: 16px;
  font-weight: bold;
}
.no-data-container .btn-clear {
  color: #EE404A;
}
.no-data-container img {
  width: 150px;
}

.filter-label {
  margin-top: 3px;
  font-size: 14px;
  float: right;
}
@media (max-width: 767px) {
  .filter-label {
    float: left;
    margin-top: 20px;
  }
}

.custom-input {
  font-weight: normal;
  color: #797979;
}
.custom-input input {
  border: 1px solid #F4F3F8;
  border-radius: 0px;
  outline: none;
  box-shadow: none;
}
@media (max-width: 767px) {
  .custom-input input {
    min-width: 95%;
  }
}

.table-bordered {
  font-size: 16px;
  text-align: left;
  border: 1px solid #F4F3F8;
  width: 100%;
}
@media (max-width: 1550px) {
  .table-bordered {
    font-size: 14px;
  }
}
@media (max-width: 1200px) {
  .table-bordered {
    font-size: 12px;
  }
}

.table-bordered > thead > tr > th,
.table-bordered > thead > tr > td {
  border-bottom-width: 1px;
  border: 1px solid #F4F3F8;
}

.mt-15 {
  margin-top: 15px;
}

.table-bordered tbody td,
.table-bordered tbody th {
  border: 1px solid #F4F3F8;
  vertical-align: bottom;
  line-height: 1.428571429;
  text-align: left;
}
.table-bordered tbody td.text-right,
.table-bordered tbody th.text-right {
  text-align: right;
}
.table-bordered tbody td.text-center,
.table-bordered tbody th.text-center {
  text-align: center;
}
.table-bordered tbody td.credit,
.table-bordered tbody th.credit {
  color: #00B16B;
  font-weight: 500;
}
.table-bordered tbody td.debit,
.table-bordered tbody th.debit {
  color: #EE404A;
  font-weight: 500;
}

div.dialog .dialog-section p {
  font-weight: bold;
  margin: 15px 0;
}

div.dialog .dialog-section > div table.table {
  margin: 0px;
  width: 100%;
  max-width: 100%;
}
div.dialog .dialog-section > div table.table th,
div.dialog .dialog-section > div table.table td {
  border: 1px solid #F4F3F8;
}

input[type=date] {
  position: relative;
}
input[type=date]:before {
  content: attr(data-date);
  font-size: 14px;
  color: #555555;
  position: absolute;
  background-color: #ffffff;
  left: 12px;
  right: 47px;
}

.loader-new {
  margin-left: 0.5rem;
  display: inline-block;
  border: 4px solid #F4F3F8;
  border-radius: 50%;
  border-top: 4px solid #2D77F4;
  width: 1.3rem;
  height: 1.3rem;
  animation: spin 2s linear infinite;
}

.link-disable {
  pointer-events: none;
}

@media (max-width: 767px) {
  .btn-gradient {
    margin-top: 20px;
  }
}

@media (max-width: 1024px) {
  .card {
    margin-top: 15px;
  }
}

.export-btn {
  display: inline-block;
  float: right !important;
}`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 56574:
/*!*************************************************************************************************!*\
  !*** ./src/app/post-login-module/reports/ledger-report/ledger-report.component.html?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\r\n<div class=\"clearfix\"></div>\r\n<section class=\"m-tb20 clearfix\">\r\n  <div class=\"col-md-12 m-tb20\">\r\n    <app-non-eq-sso></app-non-eq-sso>\r\n    <div class=\"card\">\r\n      <div class=\"card-block\">\r\n        <h4 class=\"page-title\">Ledger</h4>\r\n        <div class=\"row optionfuture\">\r\n          @if (isMTFPresent) {\r\n            <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\">\r\n              <div class=\"row\">\r\n                <div class=\"col-lg-5 col-md-6 col-sm-4 col-xs-12\">\r\n                  <label class=\"filter-label\">Report Type</label>\r\n                </div>\r\n                <div class=\"col-lg-7 col-md-6 col-sm-8 col-xs-12\">\r\n                  <div class=\"custom-select\">\r\n                    <select id=\"companyCode\" class=\"form-control\" name=\"companyCode\" #companyCode=\"ngModel\"\r\n                      [(ngModel)]=\"ledgerFilters.companyCode\">\r\n                      @for (item of ledgerFilters.codeList; track item) {\r\n                        <option [value]=\"item.value\">{{item.label}}</option>\r\n                      }\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          }\r\n          <!--\r\n          <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\" *ngIf=\"isMTFPresent\">\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-5 col-md-6 col-sm-4 col-xs-12\">\r\n                <label class=\"filter-label\">Report Type</label>\r\n              </div>\r\n              <div class=\"col-lg-7 col-md-6 col-sm-8 col-xs-12\">\r\n                <div class=\"custom-select\">\r\n                  <select id=\"companyCode\" class=\"form-control\" name=\"reportType\" #reportType=\"ngModel\"\r\n                    [(ngModel)]=\"ledgerFilters.reportType\">\r\n                    <option *ngFor=\"let item of ledgerFilters.reportTypeList\" [value]=\"item.value\">{{item.label}}</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div> -->\r\n          <div class=\"col-lg-4 col-md-3 col-sm-5 col-xs-12\">\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\">\r\n                <label class=\"filter-label\">From Date</label>\r\n              </div>\r\n              <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-12\">\r\n                <div class=\"custom-input\">\r\n                  <input type=\"text\" id=\"fromDate\" [minDate]=\"dates.lastYear\" [maxDate]=\"dates.max\" class=\"form-control\"\r\n                    name=\"fromDate\" #fromDate=\"ngModel\" [(ngModel)]=\"ledgerFilters.fromDate\" bsDatepicker\r\n                    [bsConfig]=\"{ dateInputFormat: 'DD-MMM-YYYY' }\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-3 col-sm-5 col-xs-12\">\r\n              <div class=\"row\">\r\n                <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\">\r\n                  <label class=\"filter-label\">To Date</label>\r\n                </div>\r\n                <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-12\">\r\n                  <div class=\"custom-input\">\r\n                    <input type=\"text\" id=\"toDate\" class=\"form-control\" [minDate]=\"ledgerFilters.fromDate\"\r\n                      [maxDate]=\"dates.max\" name=\"toDate\" #toDate=\"ngModel\" [(ngModel)]=\"ledgerFilters.toDate\"\r\n                      bsDatepicker [bsConfig]=\"{ dateInputFormat: 'DD-MMM-YYYY' }\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-lg-1 col-md-3 col-sm-2 col-xs-12\">\r\n                <button (click)=\"getLedgerReport()\" scrollTo class=\"btn btn-gradient\">GO</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card\">\r\n          <div class=\"card-block content-box clearfix\">\r\n            <button type=\"button\" (click)=\"exportPDF()\" [disabled]=\"shared.isServiceHit || !ledgerData?.length\"\r\n            class=\"pull-right btn btn-gradient mb-15 ml-5 export-btn\">EXPORT TO PDF</button>\r\n            <!-- <button type=\"button\" (click)=\"exportXLS()\" [disabled]=\"shared.isServiceHit\"\r\n          class=\"pull-right btn btn-gradient mb-15\">EXPORT TO CSV</button> -->\r\n          <div class=\"parentHorizontalTab\">\r\n            <div class=\"resp-tabs-container hor_1\">\r\n              <img class=\"loader\" src=\"assets/images/loader.gif\"\r\n                [hidden]=\"ledgerData.length>0 || !shared.isServiceHit\" />\r\n                <div class=\"text-center no-data-container\" [hidden]=\"ledgerData.length>0 || shared.isServiceHit\">\r\n                  <img src=\"{{shared.serverImageUrl +'order-no-result.png'}}\" width=\"150\" height=\"108\">\r\n                  <h3>No Entries in Ledger.</h3>\r\n                </div>\r\n                <div class=\"table-responsive table-custom\">\r\n                  @if (ledgerData.length) {\r\n                    <table class=\"table table-hover table-bordered text-uppercase\" id=\"datatable\">\r\n                      <thead>\r\n                        <tr>\r\n                          <th style=\"width:10%;\">Date</th>\r\n                          <th style=\"width:10%;\">Segment</th>\r\n                          <th style=\"width:38%;\">Narration</th>\r\n                          <th style=\"width:14%;\" class=\"text-right\">Debit</th>\r\n                          <th style=\"width:14%;\" class=\"text-right\">Credit</th>\r\n                          <th style=\"width:14%;\" class=\"text-right\">Running Bal.</th>\r\n                        </tr>\r\n                      </thead>\r\n                      <tbody>\r\n                        @if (ledgerData?.length) {\r\n                          <tr>\r\n                            <th class=\"text-center\" colspan=\"5\">OPENING BALANCE</th>\r\n                            <th class=\"text-right\" [class.credit]=\"ledgerData[0]?.Balance>=0\"\r\n                              [class.debit]=\"ledgerData[0]?.Balance<0\">{{ledgerData[0]?.Balance\r\n                              |value:'1.2-2'}} {{ledgerData[0]?.Balance\r\n                            <0? 'DR' : 'CR' }}</th>\r\n                            </tr>\r\n                          }\r\n                          @for (ledger of ledgerData; track ledger; let i = $index) {\r\n                            <tr [hidden]=\"i==0\">\r\n                              <!-- *ngIf=\"!ledger.trd_Date\" -->\r\n                              <td>{{ledger?.vDate}}</td>\r\n                              <!-- <td *ngIf=\"ledger.trd_Date\">\r\n                              <a title=\"Click to open Global Details Report\" (click)=\"showglobaldetailsreport(ledger)\">{{ledger?.vDate}}</a>\r\n                            </td> -->\r\n                            <td>{{ledger?.Code}}</td>\r\n                            @if (!ledger.trd_Date) {\r\n                              <td>{{ledger?.Narration}}</td>\r\n                            }\r\n                            @if (ledger.trd_Date) {\r\n                              <td>\r\n                                <a title=\"Click to open details\" [class.link-disable]=\"ledger.loader\"\r\n                                (click)=\"showglobaldetailsreport(ledger)\">{{ledger?.Narration}}</a>\r\n                                <small> @if (ledger.loader===true) {\r\n                                  <i title=\"Fetching data...\"\r\n                                  class=\"loader-new fa-pulse fa-lg fa-fw loadergrey\"></i>\r\n                                } </small>\r\n                              </td>\r\n                            }\r\n                            <td class=\"text-right\" [class.debit]=\"ledger.Debit\">{{ledger?.Debit?(ledger.Debit\r\n                            |value:'1.2-2'):''}}</td>\r\n                            <td class=\"text-right\" [class.credit]=\"ledger.Credit\">{{ledger?.Credit?(ledger.Credit\r\n                            |value:'1.2-2'):''}}</td>\r\n                            <td class=\"text-right\" [class.credit]=\"ledger?.Balance>=0\" [class.debit]=\"ledger?.Balance<0\">\r\n                              {{ledger?.absBalance|value:'1.2-2'}}\r\n                              {{ledger?.Balance\r\n                            <0? 'DR' : 'CR' }}</td>\r\n                            </tr>\r\n                          }\r\n                          <tr>\r\n                            <th class=\"text-center\" colspan=\"5\">CLOSING BALANCE</th>\r\n                            <th class=\"text-right\" [class.credit]=\"ledgerFilters.data?.TotalBalance>=0\"\r\n                              [class.debit]=\"ledgerFilters.data?.TotalBalance<0\">{{ledgerFilters.data?.TotalAbsBalance\r\n                              |value:'1.2-2'}} {{ledgerFilters.data?.TotalBalance\r\n                            <0? 'DR' : 'CR' }}</th>\r\n                            </tr>\r\n                          </tbody>\r\n                        </table>\r\n                      }\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n\r\n              </div>\r\n            </div>\r\n\r\n\r\n          </div>\r\n        </section>\r\n\r\n\r\n        @if (showGlobalDetailsReport) {\r\n          <div class=\"dialog\">\r\n            <div class=\"dialog-content\">\r\n              <div class=\"dialog-header clearfix \">\r\n                <div class=\"col-md-12\">\r\n                  <h4 class=\"popup-title\">\r\n                    Details Report\r\n                  </h4>\r\n                </div>\r\n              </div>\r\n              <div class=\"dialog-section clearfix\">\r\n                <div class=\"table-responsive table-custom\">\r\n                  @if (pnlData.length) {\r\n                    <table class=\"table table-hover text-uppercase table-bordered\">\r\n                      <thead>\r\n                        <tr>\r\n                          <th class=\"text-center\" style=\"width:15%;\" rowspan=\"2\">Security</th>\r\n                          <th class=\"text-center\" style=\"width:15%;\" rowspan=\"2\">Date</th>\r\n                          <th class=\"text-center\" style=\"width:11%;\" colspan=\"2\" class=\"text-center\">Buy</th>\r\n                          <th class=\"text-center\" style=\"width:11%;\" colspan=\"2\" class=\"text-center\">Sell</th>\r\n                          <th class=\"text-center\" style=\"width:15%;\" colspan=\"3\">Net</th>\r\n                        </tr>\r\n                        <tr>\r\n                          <th class=\"text-center\">Qty</th>\r\n                          <th class=\"text-center\">Rate</th>\r\n                          <th class=\"text-center\">Qty</th>\r\n                          <th class=\"text-center\">Rate</th>\r\n                          <th class=\"text-center\">Qty</th>\r\n                          <th class=\"text-center\">Rate</th>\r\n                          <th class=\"text-center\">Value</th>\r\n                        </tr>\r\n                      </thead>\r\n                      <tbody>\r\n                        @for (item of pnlData; track item; let i = $index) {\r\n                          <tr class=\"header\">\r\n                            <th colspan=\"10\" class=\"text-center\">{{item.SECURITY}}</th>\r\n                          </tr>\r\n                          @for (trade of item.trades; track trade; let j = $index) {\r\n                            <tr>\r\n                              <td class=\"text-left\">{{trade.COMPANY_CODE}}</td>\r\n                              <td>{{trade.TRADE_DATE |date:'dd-MMM-yyyy'}}</td>\r\n                              <td class=\"text-right\">{{trade.Buy_Qty |value:'1.0-0'}}</td>\r\n                              <td class=\"text-right\">{{trade.Buy_Rate |value:'1.2-2'}}</td>\r\n                              <td class=\"text-right\">{{trade.Sell_Qty |value:'1.0-0'}}</td>\r\n                              <td class=\"text-right\">{{trade.Sell_Rate |value:'1.2-2'}}</td>\r\n                              <td class=\"text-right\">{{trade.Net_Qty |value:'1.0-0'}}</td>\r\n                              <td class=\"text-right\">{{trade.Net_Rate |value:'1.2-2'}}</td>\r\n                              <td class=\"text-right\" [class.credit]=\"trade.Net_Amount>0\" [class.debit]=\"trade.Net_Amount<0\">\r\n                              {{Math.abs(trade.Net_Amount) |value:'1.2-2'}}</td>\r\n                            </tr>\r\n                          }\r\n                          <tr class=\"header\">\r\n                            <th colspan=\"2\">TOTAL</th>\r\n                            <th class=\"text-right\">{{item.buyQty|value:'1.0-0'}}</th>\r\n                            <th></th>\r\n                            <th class=\"text-right\">{{item.sellQty|value:'1.0-0'}}</th>\r\n                            <th></th>\r\n                            <th class=\"text-right\">{{item.netQty|value:'1.0-0'}}</th>\r\n                            <th></th>\r\n                            <th class=\"text-right\" [class.credit]=\"item.value>0\" [class.debit]=\"item.value<0\">\r\n                            {{Math.abs(item.value)|value:'1.2-2'}}</th>\r\n                          </tr>\r\n                          <tr></tr>\r\n                        }\r\n                        <tr class=\"header\">\r\n                          <th colspan=\"2\">GRAND TOTAL</th>\r\n                          <th class=\"text-right\">{{pnlDataConfig.buyQty|value:'1.0-0'}}</th>\r\n                          <th></th>\r\n                          <th class=\"text-right\">{{pnlDataConfig.sellQty|value:'1.0-0'}}</th>\r\n                          <th></th>\r\n                          <th class=\"text-right\">{{pnlDataConfig.netQty|value:'1.0-0'}}</th>\r\n                          <th></th>\r\n                          <th class=\"text-right\" [class.credit]=\"pnlDataConfig.value>0\" [class.debit]=\"pnlDataConfig.value<0\">\r\n                          {{Math.abs(pnlDataConfig.value)|value:'1.2-2'}}</th>\r\n                        </tr>\r\n                      </tbody>\r\n                    </table>\r\n                  }\r\n                </div>\r\n              </div>\r\n              <div class=\"dialog-footer clearfix\">\r\n                <button class=\"btn sell\" (click)=\"closeGlobalDetailsReport()\">Close</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        }\r\n\r\n\r\n        <!-- <div class=\"dialog\" *ngIf=\"cashDetails\">\r\n        <div class=\"dialog-content\">\r\n          <div class=\"dialog-header clearfix\">\r\n            <div class=\"col-md-6\">\r\n              <h5>Settlement No.: {{selectedLedger?.Settlement_No}}</h5>\r\n              <label>Market Type: {{selectedLedger?.CompanyCode}}</label>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <label>Narration</label>\r\n              <p>{{selectedLedger?.Narration}}</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"dialog-section clearfix\">\r\n            <img class=\"loader\" src=\"{{shared.serverImageUrl +'loader.gif'}}\"\r\n              [hidden]=\"cashDetails.Ledger2CashInfo || !isServiceHit\" />\r\n              <table class=\"table table-bordered\">\r\n                <thead>\r\n                  <tr>\r\n                    <th width=\"10%\" rowspan=\"2\">%ile</th>\r\n                    <th width=\"30%\" class=\"text-center\" colspan=\"3\">Trading</th>\r\n                    <th width=\"30%\" class=\"text-center\" colspan=\"3\">Delivery</th>\r\n                    <th width=\"30%\" class=\"text-center\" colspan=\"2\">Bill</th>\r\n                  </tr>\r\n                  <tr>\r\n                    <th>Buy Qty</th>\r\n                    <th>Sell Qty</th>\r\n                    <th>Gross TO</th>\r\n                    <th>Buy Qty</th>\r\n                    <th>Sell Qty</th>\r\n                    <th>Gross TO</th>\r\n                    <th>Number</th>\r\n                    <th>Amount</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let detail of cashDetails.Ledger2CashInfo\">\r\n                    <td class=\"text-right\">{{detail?.PercTileBRK |value:'1.2-2'}}</td>\r\n                    <td>{{detail?.TradingBTQTY |value:'1.0-0'}}</td>\r\n                    <td>{{detail?.TradingSTQTY |value:'1.0-0'}}</td>\r\n                    <td class=\"text-right\">{{detail?.TradingGrossTTO |value:'1.2-2'}}</td>\r\n                    <td>{{detail?.DeliveryBDQTY |value:'1.0-0'}}</td>\r\n                    <td>{{detail?.DeliverySDQTY |value:'1.0-0'}}</td>\r\n                    <td class=\"text-right\">{{detail?.DeliverygrossDTO |value:'1.2-2'}}</td>\r\n                    <td>{{detail?.BILL_NO}}</td>\r\n                    <td class=\"text-right\" [class.credit]=\"detail?.BILLAMOUNT>=0\" [class.debit]=\"detail?.BILLAMOUNT<0\">{{detail?.BILLAMOUNT\r\n                    |value:'1.2-2'}}</td>\r\n                  </tr>\r\n                  <tr *ngIf=\"cashDetails.Ledger2CashInfo && cashDetails.Ledger2CashInfo.length==0\">\r\n                    <td colspan=\"9\" class=\"text-center\">No Data Available</td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n              <p *ngIf=\"cashScripDetails && cashScripDetails.Ledger3CashInfo.length>0\">Details</p>\r\n              <table class=\"table table-bordered\" *ngIf=\"cashScripDetails && cashScripDetails.Ledger3CashInfo.length>0\">\r\n                <thead>\r\n                  <tr>\r\n                    <th width=\"5%\" rowspan=\"2\">Sr</th>\r\n                    <th width=\"10%\" rowspan=\"2\">Security</th>\r\n                    <th width=\"28%\" class=\"text-center\" colspan=\"3\">Bought</th>\r\n                    <th width=\"28%\" class=\"text-center\" colspan=\"3\">Sold</th>\r\n                    <th width=\"28%\" class=\"text-center\" colspan=\"3\">Net</th>\r\n                  </tr>\r\n                  <tr>\r\n                    <th>Qty</th>\r\n                    <th>Avg. Rate</th>\r\n                    <th>Amount</th>\r\n                    <th>Qty</th>\r\n                    <th>Avg. Rate</th>\r\n                    <th>Amount</th>\r\n                    <th>Qty</th>\r\n                    <th>Avg. Rate</th>\r\n                    <th>Amount</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let detail of cashScripDetails.Ledger3CashInfo; let i=index\">\r\n                    <td>{{i+1}}</td>\r\n                    <td>\r\n                      <a (click)=\"getTradeCashData(detail, i)\">{{detail?.SYMBOL}}</a>\r\n                    </td>\r\n                    <td>{{detail?.BoughtBQTY |value:'1.0-0'}}</td>\r\n                    <td class=\"text-right\">{{detail?.BoughtavgBRATE |value:'1.2-2'}}</td>\r\n                    <td class=\"text-right\">{{detail?.BoughtBAMT |value:'1.2-2'}}</td>\r\n                    <td>{{detail?.SOLDSQTY |value:'1.0-0'}}</td>\r\n                    <td class=\"text-right\">{{detail?.SOLDSRATE |value:'1.2-2'}}</td>\r\n                    <td class=\"text-right\">{{detail?.SOLDSAMT |value:'1.2-2'}}</td>\r\n                    <td>{{detail?.NETQTY |value:'1.0-0'}}</td>\r\n                    <td class=\"text-right\">{{detail?.NETRATE |value:'1.2-2'}}</td>\r\n                    <td class=\"text-right\" [class.credit]=\"detail?.NETAMT>=0\" [class.debit]=\"detail?.NETAMT<0\">{{detail?.NETAMT\r\n                    |value:'1.2-2'}}</td>\r\n                  </tr>\r\n                  <tr *ngIf=\"cashScripDetails.Ledger3CashInfo && cashScripDetails.Ledger3CashInfo.length==0\">\r\n                    <td colspan=\"11\" class=\"text-center\">No Data Available</td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n\r\n              <p *ngIf=\"cashTradeDetails\">Trade Details of {{cashTradeDetails?.symbol}}</p>\r\n              <table class=\"table table-bordered\" *ngIf=\"cashTradeDetails\">\r\n                <thead>\r\n                  <tr>\r\n                    <th width=\"15%\">Order No.</th>\r\n                    <th width=\"15%\">Trade No.</th>\r\n                    <th width=\"10%\">Time</th>\r\n                    <th width=\"12%\">Qty</th>\r\n                    <th width=\"12%\">Rate</th>\r\n                    <th width=\"10%\" class=\"text-right\">Brk</th>\r\n                    <th width=\"15%\" class=\"text-right\">Net Rate</th>\r\n                    <th width=\"11%\" class=\"text-right\">Amount</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let detail of cashTradeDetails.Ledger4CashInfo\">\r\n                    <td>{{detail?.OrderNo}}</td>\r\n                    <td>{{detail?.Trade_Number}}</td>\r\n                    <td>{{detail?.Trade_Datetime}}</td>\r\n                    <td>{{detail?.QTY |value:'1.0-0'}}</td>\r\n                    <td class=\"text-right\">{{detail?.RATE |value:'1.2-2'}}</td>\r\n                    <td class=\"text-right\">{{detail?.Brokerage |value:'1.2-2'}}</td>\r\n                    <td class=\"text-right\">{{detail?.NetRate |value:'1.2-2'}}</td>\r\n                    <td class=\"text-right\" [class.credit]=\"detail?.BUYSELL=='S'\" [class.debit]=\"detail?.BUYSELL=='B'\">{{detail?.Amt\r\n                    |value:'1.2-2'}}</td>\r\n                  </tr>\r\n                  <tr *ngIf=\"cashTradeDetails.Ledger4CashInfo && cashTradeDetails.Ledger4CashInfo.length==0\">\r\n                    <td colspan=\"8\" class=\"text-center\">No Data Available</td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n\r\n\r\n            </div>\r\n            <div class=\"dialog-footer clearfix\">\r\n              <button class=\"btn sell\" (click)=\"closeDetails()\">Close</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"dialog\" *ngIf=\"fnoDetails\">\r\n          <div class=\"dialog-content\">\r\n            <div class=\"dialog-header clearfix\">\r\n              <div class=\"col-md-6\">\r\n                <h5>Settlement No.: {{selectedLedger?.Settlement_No}}</h5>\r\n                <label>Market Type: {{selectedLedger?.CompanyCode}}</label>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <label>Narration</label>\r\n                <p>{{selectedLedger?.Narration}}</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"dialog-section clearfix\">\r\n              <img class=\"loader\" src=\"{{shared.serverImageUrl +'loader.gif'}}\"\r\n                [hidden]=\"fnoDetails.Led2Info || !isServiceHit\" />\r\n                <table class=\"table table-bordered\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th width=\"15%\">TradeDate</th>\r\n                      <th width=\"20%\">Futures MTM</th>\r\n                      <th width=\"10%\">Opt.Premium</th>\r\n                      <th width=\"20%\">Margin</th>\r\n                      <th width=\"15%\">Expenses</th>\r\n                      <th width=\"20%\" class=\"text-right\">Bill-Amt</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let detail of fnoDetails.Led2Info\">\r\n                      <td>{{detail?.TradeDate}}</td>\r\n                      <td class=\"text-right\">{{detail?.FutureMTM |value:'1.2-2'}}</td>\r\n                      <td class=\"text-right\">{{detail?.OPTPremium |value:'1.2-2'}}</td>\r\n                      <td class=\"text-right\">{{detail?.TradingGrossTTO |value:'1.2-2'}}</td>\r\n                      <td class=\"text-right\">{{detail?.Expenses |value:'1.2-2'}}</td>\r\n                      <td class=\"text-right\" [class.credit]=\"detail?.BillAmt>=0\" [class.debit]=\"detail?.BillAmt<0\">{{detail?.BillAmt\r\n                      |value:'1.2-2'}}</td>\r\n                    </tr>\r\n                    <tr *ngIf=\"fnoDetails.Led2Info && fnoDetails.Led2Info.length==0\">\r\n                      <td colspan=\"6\" class=\"text-center\">No Data Available</td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n                <p *ngIf=\"fnoScripDetails\">Details</p>\r\n                <table class=\"table table-bordered\" *ngIf=\"fnoScripDetails\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th width=\"5%\" rowspan=\"2\">Sr</th>\r\n                      <th width=\"10%\" rowspan=\"2\">Security</th>\r\n                      <th width=\"15%\" class=\"text-center\" colspan=\"2\">B.F</th>\r\n                      <th width=\"28%\" class=\"text-center\" colspan=\"4\">Traded</th>\r\n                      <th width=\"15%\" class=\"text-center\" colspan=\"2\">Asq|Ex</th>\r\n                      <th width=\"15%\" class=\"text-center\" colspan=\"2\">SQRD</th>\r\n                      <th width=\"12%\" class=\"text-right\" rowspan=\"2\">Net Amt.</th>\r\n                    </tr>\r\n                    <tr>\r\n                      <th>Qty</th>\r\n                      <th>A. Rate</th>\r\n                      <th>B. Qty</th>\r\n                      <th>A. Rate</th>\r\n                      <th>S. Qty</th>\r\n                      <th>S. Rate</th>\r\n                      <th>Qty</th>\r\n                      <th>A. Rate</th>\r\n                      <th>Qty</th>\r\n                      <th>A. Rate</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let detail of fnoScripDetails.Led3Info; let i=index\">\r\n                      <td>{{i+1}}</td>\r\n                      <td>\r\n                        <a (click)=\"getTradeFNOData(detail, i)\">{{detail?.Security}}</a>\r\n                      </td>\r\n                      <td>{{detail?.BFQTY |value:'1.0-0'}}</td>\r\n                      <td class=\"text-right\">{{detail?.BFARATE |value:'1.2-2'}}</td>\r\n                      <td class=\"text-right\">{{detail?.BQTY |value:'1.0-0'}}</td>\r\n                      <td>{{detail?.ARATE |value:'1.2-2'}}</td>\r\n                      <td class=\"text-right\">{{detail?.TradedSQTY |value:'1.0-0'}}</td>\r\n                      <td class=\"text-right\">{{detail?.TradedARATE |value:'1.2-2'}}</td>\r\n                      <td>{{detail?.AEQTY |value:'1.0-0'}}</td>\r\n                      <td class=\"text-right\">{{detail?.AERATE |value:'1.2-2'}}</td>\r\n                      <td class=\"text-right\">{{detail?.SQRDQTY |value:'1.0-0'}}</td>\r\n                      <td class=\"text-right\">{{detail?.SQRDRATE |value:'1.2-2'}}</td>\r\n                      <td class=\"text-right\" [class.credit]=\"detail?.NetAmt>=0\" [class.debit]=\"detail?.NetAmt<0\">{{detail?.NetAmt\r\n                      |value:'1.2-2'}}</td>\r\n                    </tr>\r\n                    <tr *ngIf=\"fnoScripDetails.Led3Info && fnoScripDetails.Led3Info.length==0\">\r\n                      <td colspan=\"13\" class=\"text-center\">No Data Available</td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n                <p *ngIf=\"fnoTradeDetails\">Trade Details of {{fnoTradeDetails?.security}}</p>\r\n                <table class=\"table table-bordered\" *ngIf=\"fnoTradeDetails\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th width=\"15%\">Order No.</th>\r\n                      <th width=\"15%\">Trade No.</th>\r\n                      <th width=\"10%\">Time</th>\r\n                      <th width=\"12%\">Qty</th>\r\n                      <th width=\"12%\">Rate</th>\r\n                      <th width=\"10%\" class=\"text-right\">Brk</th>\r\n                      <th width=\"15%\" class=\"text-right\">Net Rate</th>\r\n                      <th width=\"11%\" class=\"text-right\">Amount</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let detail of fnoTradeDetails.Led4Info\">\r\n                      <td>{{detail?.Order_No}}</td>\r\n                      <td>{{detail?.Trade_Number}}</td>\r\n                      <td>{{detail?.Trade_DateTime}}</td>\r\n                      <td>{{detail?.Quantity |value:'1.0-0'}}</td>\r\n                      <td class=\"text-right\">{{detail?.Rate |value:'1.2-2'}}</td>\r\n                      <td class=\"text-right\">{{detail?.Brokerage |value:'1.2-4'}}</td>\r\n                      <td class=\"text-right\">{{detail?.NetRate |value:'1.2-2'}}</td>\r\n                      <td class=\"text-right\" [class.credit]=\"detail?.Amt>=0\" [class.debit]=\"detail?.Amt<0\">{{detail?.Amt\r\n                      |value:'1.2-2'}}</td>\r\n                    </tr>\r\n                    <tr *ngIf=\"fnoTradeDetails.Led4Info && fnoTradeDetails.Led4Info.length==0\">\r\n                      <td colspan=\"8\" class=\"text-center\">No Data Available</td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n\r\n              </div>\r\n              <div class=\"dialog-footer clearfix\">\r\n                <button class=\"btn sell\" (click)=\"closeDetails()\">Close</button>\r\n              </div>\r\n            </div>\r\n          </div> -->";

/***/ })

}]);