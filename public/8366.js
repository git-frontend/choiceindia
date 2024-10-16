(self["webpackChunkjiffy_upgraded"] = self["webpackChunkjiffy_upgraded"] || []).push([[8366],{

/***/ 48366:
/*!********************************************************************************!*\
  !*** ./src/app/post-login-module/reports/transaction/transaction.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TransactionComponent: () => (/* binding */ TransactionComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _transaction_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transaction.component.html?ngResource */ 70278);
/* harmony import */ var _transaction_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transaction.component.scss?ngResource */ 15788);
/* harmony import */ var _transaction_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_transaction_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jspdf */ 69223);
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jspdf-autotable */ 34941);
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_services_rest_reports_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/rest/reports.service */ 86452);
/* harmony import */ var src_app_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/shared-data/shared-data.service */ 46013);
/* harmony import */ var src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/utils/utils.service */ 89893);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 28460);
/* harmony import */ var src_app_services_rest_post_login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/rest/post-login.service */ 4135);
/* harmony import */ var _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../assets/libs/esm-moment.min.js */ 29483);
/* harmony import */ var _pipes_value_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../pipes/value.pipe */ 50615);
/* harmony import */ var _funds_pay_in_out_pay_in_out_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../funds/pay-in-out/pay-in-out.component */ 48149);









//declare var jsPDF: any;
/** Import Moment JS Library*/
// var moment: any = require();







let TransactionComponent = class TransactionComponent {
  constructor(rest, utils, shared, postLoginService) {
    this.rest = rest;
    this.utils = utils;
    this.shared = shared;
    this.postLoginService = postLoginService;
    this.payoutRequest = {};
    this.loaders = {
      payoutLoader: false
    };
    this.transactionData = {
      payIn: [],
      payOut: []
    };
    this.dates = this.utils.getFiscalDateRange(7);
    this.transFilters = {
      activeFilter: 1,
      filterKey: 'payIn',
      codeList: [{
        value: '',
        label: 'ALL'
      }, {
        value: 'NSE_CASH',
        label: 'NSE CASH'
      }, {
        value: 'BSE_CASH',
        label: 'BSE CASH'
      }, {
        value: 'NSE_FNO',
        label: 'NSE FNO'
      }, {
        value: 'BSE_FNO',
        label: 'BSE FNO'
      }, {
        value: 'CD_NSE',
        label: 'NSE CURRENCY'
      }, {
        value: 'CD_BSE',
        label: 'BSE CURRENCY'
      }, {
        value: 'CD_MCX',
        label: 'MCX CURRENCY'
      }, {
        value: 'MCX',
        label: 'MCX'
      }, {
        value: 'NCDEX',
        label: 'NCDEX'
      }],
      companyCode: '',
      fromDate: this.dates.min,
      toDate: this.dates.max
    };
    this.transactionRecords = [];
    /**listen to modify payout request and call payout request listing */
    this.subscription = this.shared.listingAction.subscribe(() => {
      this.getPayOutTransactions(true);
    });
  }
  ngOnInit() {
    this.activateFilter(this.transFilters.activeFilter, this.transFilters.filterKey);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  getTransactionReport() {
    this.transactionData = {
      payIn: [],
      payOut: []
    };
    this.transactionRecords = [];
    this.activateFilter(this.transFilters.activeFilter, this.transFilters.filterKey);
  }
  getPayOutTransactions(isRefresh) {
    let request = {
      "UserID": this.utils.getUserId(),
      "FromDate": new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_8__["default"](this.transFilters.fromDate).format('YYYY-MM-DD'),
      "ToDate": new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_8__["default"](this.transFilters.toDate).format('YYYY-MM-DD'),
      "Segment": this.transFilters.companyCode || '',
      "Status": "",
      "StartPos": 0,
      "NoOfRecords": 300
    };
    this.transactionData.payOut = [];
    if (isRefresh) this.shared.isServiceHit = true;
    this.rest.getPayOutTransactions(request).subscribe(data => {
      if (isRefresh) this.shared.isServiceHit = false;
      if (data && data.Response && data.Response.PayOutTxn) {
        this.transactionData.payOut = data.Response.PayOutTxn || [];
        this.transactionData.payOut.forEach((trans, index) => {
          trans.Date = new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_8__["default"](trans.RequestedDateTime).format('DD-MM-YYYY');
          trans.DateValue = new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_8__["default"](trans.RequestedDateTime).valueOf();
        });
        this.transactionData.payOut.reverse();
        if (this.transFilters.activeFilter == 2) this.transactionRecords = this.transactionData.payOut;
      }
    });
  }
  getPayInTransactions() {
    let request = {
      "UserID": this.utils.getUserId(),
      "FromDate": new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_8__["default"](this.transFilters.fromDate).format('YYYY-MM-DD'),
      "ToDate": new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_8__["default"](this.transFilters.toDate).format('YYYY-MM-DD'),
      "Segment": this.transFilters.companyCode || '',
      "Status": "",
      "StartPos": 0,
      "NoOfRecords": 300
    };
    this.transactionData.payOut = [];
    this.rest.getPayInTransactions(request).subscribe(data => {
      if (data && data.Response && data.Response.PayInTxn) {
        this.transactionData.payIn = data.Response.PayInTxn || [];
        this.transactionData.payIn.forEach((trans, index) => {
          trans.Date = new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_8__["default"](trans.RequestedDateTime).format('DD-MM-YYYY');
          trans.DateValue = new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_8__["default"](trans.RequestedDateTime).valueOf();
        });
        this.transactionData.payIn.reverse();
        if (this.transFilters.activeFilter == 1) this.transactionRecords = this.transactionData.payIn;
      }
    });
  }
  activateFilter(tabIndex, tabKey) {
    this.transFilters.activeFilter = tabIndex;
    this.transFilters.filterKey = tabKey;
    this.transactionRecords = [];
    if (!this.transactionData[tabKey] || !this.transactionData[tabKey].length) {
      let funcName = tabIndex == 1 ? 'getPayInTransactions' : 'getPayOutTransactions';
      this[funcName]();
    } else {
      this.transactionRecords = this.transactionData[tabKey] || [];
    }
  }
  exportPDF() {
    let doc = new jspdf__WEBPACK_IMPORTED_MODULE_2__.jsPDF('p', 'px', 'a4');
    doc.setProperties({
      title: 'Pay ' + (this.transFilters.activeFilter == 2 ? 'Out ' : 'In ') + this.utils.getUserId(),
      subject: 'Pay ' + (this.transFilters.activeFilter == 2 ? 'Out' : 'In'),
      author: 'JIFFY',
      keywords: 'JIFFY, Pay ' + (this.transFilters.activeFilter == 2 ? 'Out' : 'In'),
      creator: 'JIFFY-WEB'
    });
    let userProfile = this.utils.getProfileData();
    doc = this.setLetterHead(doc);
    doc = this.setProfile(doc, userProfile);
    doc = this.setTable(doc, userProfile);
    doc = this.setSigner(doc, userProfile);
    doc.save(this.utils.getUserId() + '_Pay' + (this.transFilters.activeFilter == 2 ? 'Out' : 'In') + '_History_' + new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_8__["default"]().format('YYYYMMDDHHmmSSS') + '.pdf');
  }
  setTable(doc, userProfile) {
    userProfile = userProfile || this.utils.getProfileData();
    let headers = this.transFilters.activeFilter == 2 ? ['Date', 'V.No/Transaction No.', 'Segment', 'Client Acc. No.', 'Amount', 'Type', 'Status'] : ['Date', 'V.No/Transaction No.', 'Segment', 'Mode', 'Client Acc. No.', 'Amount', 'Status'];
    let tableData = [];
    this.transactionRecords.forEach(trans => {
      tableData.push([trans.Date, trans.VoucherNo || trans.JiffyTransactionId, trans.Segment, this.transFilters.activeFilter == 1 ? trans.ModeOfPayment || 'NEFT/RTGS' : trans.ClientBankAccNo, this.transFilters.activeFilter == 1 ? trans.ClientBankAccNo : this.utils.valueTransform(trans.Amount, '1.2-2'), this.transFilters.activeFilter == 1 ? this.utils.valueTransform(trans.Amount, '1.2-2') : trans.Remarks == 'PAYOUT PROCESSED' ? 'PROCESSED' : trans.Remarks == 'PAYOUT REQUESTED' ? 'REQUEST' : '', trans.Status || 'SUCCESS']);
    });
    let columnsStyles = {
      '0': {
        cellWidth: 40
      },
      '1': {
        cellWidth: 55
      },
      '2': {
        cellWidth: 55
      },
      '3': {
        cellWidth: 55
      },
      '4': {
        cellWidth: 60
      },
      '5': {
        halign: 'right',
        cellWidth: 50
      },
      '6': {
        halign: 'right',
        cellWidth: 50
      }
    };
    if (this.transFilters.activeFilter == 2) {
      columnsStyles = {
        '0': {
          cellWidth: 40
        },
        '1': {
          cellWidth: 55
        },
        '2': {
          cellWidth: 55
        },
        '3': {
          cellWidth: 55
        },
        '4': {
          halign: 'right',
          cellWidth: 60
        },
        '5': {
          cellWidth: 50
        },
        '6': {
          halign: 'right',
          cellWidth: 50
        }
      };
    }
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
      columnStyles: columnsStyles,
      didDrawPage: data => {
        this.setFooter(doc, userProfile);
      }
    });
    return doc;
  }
  setLetterHead(doc) {
    let img = new Image();
    img.src = '../../../assets/images/Choice-International.png';
    doc.addImage('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ0AAACnCAIAAACEpclKAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAnmUlEQVR42u19eVxTV97+udkTQhIggOyr7LvsiyCi4IZYK2rtPq3t1LZO+7addjp9x3be+c3YmU47rTNdrK2trUurogKKuCGI7CJL2JewE7aEJJA99/cHGrLdS1g0IePzhx9z7+Hce89z7znnu0MwDINHMDtgjH0Dj/BA8IhX88QjXs0Tj3g1T+CMfQNLDxiG+8YEAAAXpiUEQca+HePArHiVyhRny9qOF7GGJoQAACcby/ey42J8HR/Q5abEsiu13a394wQ8dpW3Q6yfIwGHNfYY3ANkNnLOCG/61a8Ku4d56gfxOOx3+zf6udgs+eXudnHePVo0zhepjtAoxN+khzyRHGjskQDAbNZXGIA//FCkRSoAQCZXfHu5bskvx+FNvXH4mjqpAAD+tOTTnKqfb7CMPRgAmA2vdV2cuu4RvadKm/vHNAlYPI5daxSKpHpPHSmskymUxh4Pc+GV1TOGdEquUF6s6lzCa02JZXlVHUhnBSLp4LjA2ONhLryi73svVLYv4bVyK9qnxDLkOwE0CtHY42EuvIZ52qGc7eFM1nVzluRCShj+paQFpUG4p70VlWTs8TAXXgNcmZ4rGCgNLpR3GNoXKm439feN8VEa7FwdYOzBAMBseAUAZMasRDl79S57WiIzuDNEnCxuRjm7wsoiOdjV2CMBgDnxuiHSC4dFfJxpiexqLXuRl+ge5lW2DaE02JHoj8WYhIbLfHi1tiQlBTqjNLhQsdjd06mSZhQ1DomAy4pbOZ/+HiDMh1cAQGaMD8rZ+u4R9sjkgjsXTEvR5aUNqzxNYSc8A7PiNc7fyZZOQToLA5BbvvBP9nxFu0gqRzoLQaayY5qBWfGKxUCborxQGuRXdyqUC1EGKZXwryVoO6bIlQ5eDgxjD8AszIpXAMCWmJUoKopxvqi0aWAB3Raz+gYnhCgNdq72N/aja8DceHW1pYV52qM0uFDRtoBuTxU3oZx1srFMCnQx9qNrwNx4BXMJsqVNA+OC+ZkBOga5Ne3DKA12JPlhTMyAb4a8rg1ztyDhkc4uwAxwsrgZxUZNIeK3xpiKeKOCGfJKJuDWhXugNJiXIDs5JSmo6UJpsDHKi0omGPuhtWGGvAIAMmO8Uc6yOZP1CMZaXZwra5PIUMQbaGeSae2YZmCevAa723mgmwEM+2QVSuWvt9CsNzG+ju72dGM/rh6YJ69grk/2Si1bJJHP2cmN+l4ObwqlwS4TE29UMFteN85pBrjbPWcnp1CtN652tHh/J2M/qH6YLa/WluTEAHQzwBwW2Zb+8btdaNb47ER/k/VPNlteAQCZsWjiR10XpwfVDID+sVqQ8Juj0aZ648KceY33d2bSUM0AyJ/shEBceAdtot4SvRJFSjY6zJnXuc0AVR1IZoCcslapXIH0hxgIyk7yM/bzocFovCphuLx18HhRU+GdbgGCL+7igW4GGOOLbuszA8gVyjOlrSjdxgc4udjSHup4zRPGic/hCsVvHr7W2DM685NEwKWFumfF+4R62C2uY2242dFCPezudiFqIS5UtCcFaavsr9WxRyenUbo1KVOrXhiH149O3FKRCgAQS+V5VR15VR2eKxhZcT4bI73oFkvmeJAZuxKF11tN/RMCkbUlWf0g+o7Jw54e4/OgYrmWCkaYh/vHBKWsfr2nuoZ5/8yp3Hjglw+OFdd0DC9JSFhaqAeFiGYGyK/WMAOwesYa2KMoHe5c7W+q0s0sjMBrCasPnS+pTFFQ0/XyoYIdf805dr2RKxQv5nJkIm5duDtKg4uVGryeKkEztVqSCRujTFe8UcEIvLYNTBjYsmdk8vML1ZsO/PLe0aLK1sEFh3SiW2Q7h7ni+5p9GIZvNvShdRW7kkxYBkHDRrhFIn5+wb8yufLqXfbVu2wnpuXWmJVbYrxRpFK9CPGw87Cnd3P0ayEgCMLen1hlCqUI2X0cg4GyE01avJm91Yd/yaiVDgv7w4ExwX/y72z58PTbR67fbu5Xzufz3YL8yQa52eLvx5kTcFhPByuklqsDXRxtLB/+iC0ARuA1JcQtwJW54D+XK5RFDb37v7669aPThy/fRbe3qLApyguvL0kABEEvpIeqH3l5Y5herS8eh30xI+zhD9fCgD1w4MBDviQGglYHutR1j44YRgkShGJZTcfwqeJmVu8YhYhzZtJQnIzIRLxcobzTqaHHJ+Cwbz8es17TucLdnuG5gsHqHVOPXLYkE/7ydHKE94qHPFYLhtHyS8AwXN4ymFPWVsLqky9FgLctnZIZszIzdqWjNRXhiuDETdaP1xvH+SIqmbBhledTqUEOiI3hu10jFa2DQrHU056RFu5uOr78hsD4eUPG+NN5lZ3ny9v6x5YgzBsDQTG+jllxPquDXJDsr0KxlELEm5oH4dLC+LzOAIZBVfvQudutRY19MmSFu+GwtiTvTg54KjUQizFn2wYSTIVXFbhCcX5V57mytp5FxEipsCbE7eBzKejWb6VSyePxxGIxBEFUKtXScnnseNFhcrzOAAbgbudwTln79Tq2RLaoz/fAniS91jqZTFZVVVVz5w6bzZbJZmVWS0vLAH//5ORkZ2fneVzGxGCivKrAn5ZcrO48V9bWOcRbWA/RPg7/fiVd62B3d/ePx46Nj48jjgsErVmzZmtmpsl6uqDD1HlVob57JKes7epdtlg6tx+hOpxsqOc+eFz9SHNLy+HDh+Xy2X6YNjYrVqxQKBS9vb1T07MWuqTExB07dhj70ReCZaDqnEGIh12Ih93/bIsuqOnKKWszXMlspWmD43K5R48eVZFKoVCe3LMnKCho5qdcLr948eLVa9dmfpbcuhUYGBgQYOrWVl0ss70ilUx4PNHv57czf3hzc1acD4oBToVYzbyXubm5ItG9uCsIgl544QUVqQAAHA6XmZkZGRmpOnKpoMDYD70QLDNeVQhwZb6/M/7SR9nv74xH0UpCEKQeqzM5OXmntlb1MzQ01NtLz5Zq44YNqmW1p6dnZMTQoA/TwbKZh/WCQsRnxflkxfm0DUzklLVdrunScpV6IjlAPa9TQ0ODUs1RLToqSm+3TCbTwcFhcHBw5mdbW5ud3RI76DxoLG9eVfBxsv7947H7MyOv3mVfrO7sGZm0pVO2xflu1XQh7uyajYyDIMjLC9FbMS0tTSgUWltZMRgMW1tbYz/fvGEmvM6ARMBtjvZGcdfmcGb1/jQajUwmI7WMXLXK2E+zKCzX9XVh4PNnU+DRaCbtKLpI/HfxKpVIVP8nEkwuGHkJ8d/FK1BTHi1TRZKB+O/ilUSazSArlT6oIANTgFntmwAAShiuaR/uGOJaUUlJgS5aoVFWDAaPx5v5P19g/KzeDw7mwyuHN5Vb0X6+vH2Ye8+9hmFB/OuzKZFqbnKOTk7dbPbM/3k8nkgkQtoSl5SUcHm8GTnHxcWFTjfFZAMoWPa8KpRwaVNfTllbWfOAQqlhw+BNSX7/fdHpP2xTJfD29fEpLS2d+T8Mw+3t7SEhIXq7vXb9+sTEPRX0s888ExERYewHnR+WMa+DE8IL5e25Fe0jyDFS/GnJxarOPWvu1bQJCAigUCjT9y02t0pL9fLa2dmpIhWLxfr4oKVJNU0sv32TXKG8Xtfz+ldXtv35zJHCuhHUwDcAQHHjrP8+gUBISUlR/WxpaSkrL9dqr1Aozp8/r/oZHBxMpVLBcsNy+l77Rvnny9tzKzsm5pMIr21Qw6K3NjW19s6doeF7efFOnjw5ODiYmJBgZ2enVCp7+/ry8/LYPT0zZ/F4/OZNm4z93AvBMrCrS+WKovrec2Vt1R3DC7hbGxq54KOd6kfGx8c//+ILLperMRAQBABQ7x+DwTzz9NPh4eHGHoCFwKR5ZXMmc8raLlZ38hYRUpexyvPPT63WOigQCE6fPn23rg7p8ZlM5q5du3xWmlziQwNhirxKZIrrdeycsra7nZxF3hwRjzv21mYPe4besxwO5+7du91s9sTEhEQsxmCxNBrN0cEhICAgMDAQs5wdVE2L144h7rmytkvVXfxpyeJ7Y1BJf34yKdbPRFNnPVCYxL5JJJVfqe0+V9aGHihuOHycrLfF+WyI9DLlVDwPFEbmtaV//HxZW0FNt1C8BNpaChG/PsJjW5yPrmeMVK4obuzrGZl0sKYmB7kazvfAuGBoQmhFJXk6WC0jQ4HReC1rGfjqYm1T79jiuwIABLgyt8X5rI/Qn0qib4y//+urfaP3jK8MC+Jv0sOyE/0wyDWMJDLFTzca86s6VX/lbk9/Z3tslM8Cg3cfMoyzvuZVdnx0onTxl6aSCRmrPLfF+vg4WyO1gWH4yX/k6vqlpgS7Hnx+jd7oK7lCue8/l7WCKgEAOCzmX3vToh9YYe8lhBG+13GB6OPT5YskNcTdblu8T1qYO2mubA+3mvr1OhsXNfSeu932WIKv7qncyg5dUgEAcoXy4Ony03/YZvq2WyPwer2uRzRPn30V6BTihiivrNiVXsjZArRwvAgxv8u5cv28VrYOIv1J7yi/pmM4cqGpFB4ajMDrAuJcIQiEe9pnxfmkhrrPK+1I28BEdTtipcCeEYSKn6hfY25lxyNe9cDach5lb62opE1RXllxPm52C7GAHr+JmoyJot/FKdLbAaX45I26nne2x5q4BGUElUqMAfsOCIKifRz+3zMp+Qey92+NWhipY/xp9FyzSImn14W7E5BnBZFUfq2O/ZAHbb4wwvfq62zjZkdHCltm0sibo723xvo4MxcbX3z6VitK6DsEQbsQ0lfSKMTkIJcryJ9sbkVHpunVzFGHEXiFAPj947H7v7kik8+GVGAgKNbXMSveJynQBSUvv+GQyBRz5Jr1d0IppbE5eiUKr3XdnL5RvimnqjWOXiLKx+Hw6xuPXK5r6R+nWxBTgl0zY1YipWZZGC5WdfKm0KxATySjRT/G+jra0SlIRnsYBnlVHb/daLrOMaal918qwDDY+bdz3RweUgNvB6vjv9+KLoQeyqv54WoD0ll7K4sL//u4ySaVWcamKBSUtQygkAoA2J0SMCchW6K8UdpwuFNVqLXWjQvz5PV4EQvlrLUlOWOV55yduNnTg9zRwiNz56rUYkSYIa8dQ9zKtkGUBo8n+BJwBik3tqAWzSpq6BU+sMoEi4QZ8nqiqAllz0DAY7cbnGt2XZg7CVmQlcjkhbVzF80yCsyN1wmBqOAOWlnPDas8ramGKryoZEJKiBtKg7xKE52KzY3X06WtUhmKLgLsTg6cV4foU3EDe5TNWYK8cEsOs+JVKlOcKUUv6+nk5cCYV5+RKx1WWFmgNDDNT9aseC2o6ZoQoOoiUuadiQkDQZtQCzVcrO7UigsyBZgPrzAAx2+iiTce9oxY34X4Jm6O9kYxpI9OTpe3DMynv4cB8+G1snUQPYfiEykBC9MOOTMtwzzRBFkTnIrNh1d0XYSVBWlDpJfBnWkDvSRocWPfkjg8LyHMhNduDq+sBU0X8ViC73zru6gjLcwdpWyOVK64fMe0BFkz4fXEzSYUAwYeh92xuLo3FCJ+bag7SoPcinZjj4EGzIFXnlB8sQpNF5Ee4WFDIxvcn35sRhVkm/vGO4e4Bnf2wGEOvJ653SqRITo4QgsSb3QR4bXCyQbNQpxrSrunZc+rTK749RaaLiLSx2Glo7XB/SECggC6IFtQ3bUkBWOWBMue18t3usf5aOHrT8xTcYiCTaiC7LhAdLvZVATZZc/rCVRPUjc7ekLAksVJOlpTV6GWvDIdQXZ581rVPoSeEH53sv/SxlxsQRVkb7H6FlmtdqmwvHn9tQRtZaVbEDctdQ3e1FA3FI9wmUJZUNM1n/4eFJY3r7Vdwyhnt8X5zBmVNV+QCLi0MHeUBvmmMRUvb16VyNtPPBaTneT/IC66ORrNI7x1YGKMP480RA8Iy5vXAFcbpFNp4R629PmVdTYQoZ526B7hKBWfHxqWN69PrglC2hUtiS5CLyAAtiIHcTBpZCcTqOm8vHmN8XV8bUukrnP22jB3P2ebBXVpEHYk+bkw9XyyEACvZUaipDd4aDAHf/+W/vFDuTUVrYMAAAiC1kd4vJ8dTyY+2BCVYe7UH4/drOuaLa3jbk9/eWM4unngocEceJ3BMFc4NDHlzLR8QMuqXjT1jrX0jxNw2BAPO1dTCsMyH14fQR3Le319BCQ84tU88YhX88QjXs0Tj3g1Tzzi1TyxcOGdw5vqG+Xzp6VKGCYTcSsYFm52dMNTfkxOSeq6ORQiPszTfkkShSwJYBgIRBJLMsH0M+WhY9683u3i5FV2lDUP6ObUIOJxEV72GZGe68I88Dg0qtoHJ146VCCYlgIAAl2ZX7+2YTHOvUuFqvahP58oHZoQ2jEo7+6ISwp0MfYdLRzz0Es09439M6fqbhdnzpYrrCxe3RKZHuGB1ODd74vUU1u9vzM+K87INWoEIumWD3+dEt8zxZAIuIsfZluSl2vNSYMmQBiA76/WP/fpRUNIBTO60x9vvvPdDdUwaUHLeaWlf9zY4wDaBsbV71YslZtmYKuBmHsehmH4L6duny+ftz/7jfqeYa7w36+k6771Yk13X/FC05suIZg0Da0yBACTvlhXciNi7u/1UG6NXlIpRHyCv/Ou1QFPpQZtjPTSa3Rs7hv/4483l4UG2s2Ovk1tLdiZHOBgtfzKXKkwV1JmVt+x641aB0kE3EsZYdsT/bRCkUqb+j8+UzE4rpGG9nbzQF5lB3o0v4ngDzvjN0d7d3F4Xiusgt1tjX07iwIarxKZ4uDpCq2PjUElHXp5na8+q3VCgPMPrszf/udyx6BGpMrhy3c3RXmZgrV5ToR42IV42C2+H6MDbR4+V9Y2zBWqH8FioI+fW+OL7IrAoJL++cJarQV1aELY0LM0BVQewUCgfa+6cS+PxfuGe9mj9+hgTd23OeJvv2rUaWRzJkMN+A4EIml+Zcft5oEuDk8skVuQ8F4OVmtC3DIiPfEG6C6UMFzdPnyL1dfcNzbEnRJL5Xgslkknr3SwivV3Wh3kQsKjPW/nEPfj0+XdnEk/Z5t3Ho9FT5Qrksiv1/eUtwy0D05weNMSqZyAx61gWPg6W68Odlkd6Iouwavfc2XrYHFjH6tnbJArnBbLsBjImkZe6WgV5+e0PtyDuiBZC1F+bekbf+qTXPUjWAx07oPtKwzYTSiU8J6/n1fPCvCP36QmB7uqfm780y+jamqNTVFeB/YkXallHzxdNjmlJ/DbzY5+8LkU9Jz+RfW9h/JqkNIaAwAYFqRn0oJ3rfbXq95SKOHH/u/M4MS9+cndnnHq3a1601oqlPDJ4qbvCutRYtSZNMqLGaHb4nzQ9ValTf2fna9CEaioJPxv0kOfSA6c7yqG+E6V6eTCCPO0N4RUAAAWA32wK0GVcjvQjZmAkJlbhWPXG9//sUgvqQCAnpHJlw8VDIzrLwygUCr/72Tp299dRyEVAMCbEv/rfNVLhwr0hlp0DE6oSAUAsDk8vcMtEEn3/efyZ+eq0BMPjPGn//pL2RuHr00j+JzCMPjX+ao3vrmKLiULxbJ/na/e/82V6Xn6riLyyurRrlg0r2IFgW62P7655bUtq97LjvtyXwa6BriidejzC9Xo4hBvSvKXU7f1DtCffrpluHhd3z3y8qECgU5eQ57OK6X7kklkite+ulLTgRZkoI7Spv7/+fa63uDJL3Krf7rB0n1iPFbPh1neMvj2kevzyiaEuN6wdd59HydDS5vMwMuBYWASrDH+vTnZ3soiNcRthZXFhEB89S5b6wOtahtqYI9qSSC/lDRf1kmcF+fvlBbqZsuwEIqkVW1D+dWd6knYuoZ5H5249ffnU9X/xBAh+4sL1SydDWCgKzMpyMWKSuIJxWUtg1oquer2oeM3WU+nBqsfvN088JOm9EijEF/eGJ4W5m5FJU2JZWUtA1/m3+kdnS0XUtk29NONxmfWBgPDgMjrKF9brb+0+bx1sT3B981t0apMoy9mhL36ZaHWMBU39qnzOjkl+eriHY3nwWI+ejJpXfisanpduMfu5IDXv74yzJ1SHSyq7y1t6p9zdVBHN2fytGYyNxwW8152nHqi/+fXhxbe6f7w+C2pWl2Bn280PbkmSLVUK2H4s3NV6m+RJZnw7f4NqmKmFiR8Wph7rK/ji19cUpcYv79Svz3e18BtlP7pUQnDusEINApx4aTNheQg19/viFNPH0vEY/dt1k60ztbMFp1T1irUVEG/silCndQZeKxgfPLCWq21QFffgo4TRSytmXD/1kjd6g3rIzwO7ElUn0snBCL1iJ2KlkGtnNf7Nq/SrVBLJRP+uCtB/ciUWGZ41hkEXpV6tskG5uxdGF7LXKW7roR42FFJGq/nhOaWR6uMCpNGQSqx4eNkrZVL+k4nZxQhfb8uFErltboe9SMeKxhIcV3rwj22J86W0bKiktQzqGrVaKEQ8UjJoQJdmb5OGhkUSpv6Dbxh/bxisRjdjfWDS57gaE3VWyEHA0EuthpCpERtmeRNSTo0U7CkhqJJjVq8wjBs+A6obYCrtQHeHO2Fktz/jazo1FA3CAJONtS/PZuiPlXUala+C/WwQ7E9h3lqaAsMTzmjf32FAKCRiVr1LIQi6QNypUcJVEIqSQUA6Briak0qwahp2wPdmBAA6n9h+DDptgz3REtIQMBhDz63RiZXar1nMrlCq4wbBoJuNvQi9TOluRoKxYZKO4j7phXWFlq8DnOnPFYwDOwXAJBX2VFY200l4Z9ZG+LrjJaRhYZMHh6L+C6PCbTDTNF3dlQSgUomqEs4hgeqjvC0Z2z0nD/3bl5n8pgQiJWaL2Npc39ps6GzqxXV0C0O4qzlpUNhx3zyTlW2DX50/FZZ88CVWvbeLy4NTQhRGi9s5Zbo5I8mzeVMozXjSZAzUGtBrJMfSm8B4TkhlRt6Rb1IN6DcxAwQv9dQD/v8qk71I1VtQ0+lBhnY7w9XG1Sv5bREVtTQuxu5DtHCTD26b4NkrlGTypWaPRjqL6erV5HKFQtIcoDXuWcSAYf+ikAQsCDiXW1pqaFum6INNXci3ll8gBMEaWiPq9qHxvjTWn4FejEwLqhu19iSKB9A5mWmTmo8Dg9tfzstkWmpmWwMeJYZ0HVWimHuFLrgJ1Mob9T3yOSK1NDZnJnWliStUd0au/Ktx2KWfHAQX1h7hsUqb43NmFyhRKn/pI7vr9RrrSLzWpgNhKdOn41sNGtgU++YlvRmeE543cQDjaiWR6USfuObq+//cPPAz7f2fn5JVf6QgMM6am4CBsfRVqgFA20i2qkjC/56q2VO2eB2c/8FzYJBFCJ+TuveAmBFJXlqEnO9rkeBnEpES9iFILDKC21Pq45AN1stxS16Pp9fb7VU3C/63NI/XsKa3Rlppaiu7eLMuehevtO9/+srH58unzJ4P4zGa3KQa6AbU/2IQgm/deR6BXKZ6tKm/neP3tT6LDZFe5GXOt/ODNI1VUvDXOHZ0ja9Lbs5k3ma24UQdzt71IIM6qBTiBGaL0FtJ6eE1ae3cd8o/0tN7ab6tksroF0okl5ArZt1vIj1wbHi280Dv95qMVxHhsYrBIH3dsRrGbSFIulrX13544/FdzqHVZoKmUJZ28l5/8ebbxy+pqWApFGIL6wPNfBu5ovH4n21smR9dqHqto7YMDQhfOvba1q1YJ80eA84g52rtbVLf/q5pE7H8bZvTLD/6yvqHxYGgsLV1AsJAc5aSph/59XoraYnVyg/zan89FyV6jsRywx13JzjM/J1tv5dVtTfz1SoH4Rh+PKdrst3unBYzIyGbEIo1quNwkDQB7virS0flMMmg0r67caIf5ydvT2pTPHGN9fWhXusDXOzpVOEImll29DZ261aM1isn1OKmp3fECQHu0b5OKjXGhRMS186VJAW5pEU5GxjSRGIJNXtQxcqOrTcZteFe6gL1hgM9Oa26N99c0U1qQlF0r2fF7y5LWpduMfMxhsGoLZz+F/nq5t6Z62lEATWI7vaa2Hu6TE7yX9CIDpSWK97Sq5QjiCrWCEIvJEVpbdeFKTdElHOgVB/ztxeA3tU3VSnvP/aIfXpZEP9cE+i7t3OeeTDPUnPfpqnrqNQKOe4ljPT8q3t2tvdeH+nZ9JCjl6ZHVLelPh/fyr5+5kKzxUMCIL6xvi6SVqzk/wDXJjAMBgkwL28MeK97Lh5iWsUIv6jJ1fvQpBZaRYaEgLDAlFg0JIl6DotIQgc2JNoeFVsbwerr17doDuFMCxIcx6xpVO+3JdheIFwbwerL/dl6H26VzZFPLcuROuFFoikdd0jd7s4uqRmxfm8mRVt4HUBANgDBw4Y0s7fhZke4cGdkrA5k+ghPVgMZlOU18Hn12jprNXRO8pXl0le3hSBpCKeFsuK1NSnO1f763r2YjBQcrCrhz29qW8cpcAjiYDbsybwoyeTGPrq01lRSfmVnULxvT93taXtzQjTnUjoFsTNUd4iqbxtkIsilFNJhKfXBh3Yk4T0ykIARPk4hHjYtQ5OcFFrOTkzLf+QHf9MWvC8QvzmnQ9mnC8qZvXWdnA6h3kjvCmhWKZQwkQ8lkkje65grPJ2SAt3t5vLPCAQSQ/8XFLeOmhJIuxZE4iixlIq4X+crbhY3QUAvDna+42sKCwGcY6RK5QlrL7ixr6m3rFh7pRYJsdjMUwaxcuBEevrtC7CXfcTVEdr//ifT5Z2DvH8nG0+2J3giSpzj/NF1+vYVe3DbM7khFAkkyuJeJwdg+LtwIj2dUwJdjVQ0QjDoKZj6GZDX2PP6OCEQDAtVShhCgnvaE0NdGWuDnaN83PCzl8f9yjPj3nCVAKKH2Fp8YhX8wTiFvdvBw9mbd3q53evnNDHH3/8zjvvoHQkEom6ursDA9CyiFZWVspksoSEBGAwcs6da2qazeC/ft06oVDIYDDCw8MX//BfHDr08ksv4fHaC+HnX3zxym9/i8PdG5yCy5drampUZ+l0+qv79s33WocPH961e3dVZaW1tXVYWNjibx4diLyOjIyc+uWX9959l0AgAABGRucIsGlvb2c1NaHz6uPjo1TOz5lmcnIyJSUlJPiefyWJRJrk8/G4pdFKbt60Caevq7HRUfVth0AgiI6Ojo25J4ZiMAuZ5MYnJpQKhVAoJFMeRvpGxAGCIMjPzy8vP/+xbdtUB6/fuOHn6+vo6MibnCwpKdmyefOZs2eJROLg4KBQKOTz+RUVFWKx2NPT08XFRSAQXLt+PWvr1jNnz1pQKGw2Oz4+XqlUYjCY8ooKoUDQ29cXFBi4fv16GIYvFRS0tLR4e3tLpdKsrVvVh5tMIllazkpB7O5uS0tLkUjEYrGGOZyRkZHIVauSkpKkUmn+xYtsNptIJK5NTfX19b2Qm2tvZ1dWXk6n0R577DE6nd7b21tw+bJoejomJiY2NraiosLFxUUikeTn5/cPDFhYWGSkp7u56VGkkIhE9XsQTk2dPXt2Z3Y2gUA4e/ZsTEwMk8nMy8/v7e11dnLaunUrgUC4cvVqU1MTg8HI3LLF2lrbXaSpubnoxg0lDK9JSQkMDKytrRWJRA0NDTKZbH16us/KlVNTU7l5eYODg+7u7plbtkAQdKmgoL293ZbJzMzMpNHmyLGJ9uplbtlSV1fX0zPrh9fT0yMUCgEAErG4o7MTAFBbW4vFYNalpSUmJnp5eYWHh/f29QkEAgCATCZr7+gAANTX18sUivXp6RMTEyMjIxKJpLCwMCQk5Pnnn6+squrv779VWsrhcF7dt8/e3r64uFhri15XX19YWFhYWFhcXAwAGBoeHp+YEAqFhVeuJCYkPP3UU5cLC3k83tVr17AYzOuvvbZ+3bpTv/wCAOjo6Ojr79/74otW1tZXrl6VSqVHvvsuIz197969N2/eHBgYaG5pUSqVefn5tra2v9u/PzoqKicnR+9QNLJY+ffR0NhItbCwsrLKzc29ffv26NiYs7NzzrlzFDJ5/+uvUyiUgsuXbxQVjXA4+155JS4u7vCRI1pPxOFwcnJydu/e/dRTT+Xm5XE4HM7ISOnt29nZ2WvT0k6eOgUAOHnqlL2d3f7XX5fL5UVFRZcuXZKIxa+9+mpwcPDRo0fn/F7ReCWTydu3bz9x8qRCgWhIUiqVa9as8fDwIBGJOBxuZtLWAgzDa5KTPT1mdZuODg4+Pj4MOt3V1ZUvEDQ2NKQkJxMIhJjoaAaDofXneDyeQCQSiEStzj08PNzc3GxsbBwdHPgCwYaMjMTExOaWlq6uLpHonr4mPi6OQqH4+/sL+Hw2m+3k5OTq6komk/fv3+/o6DjTJnvHjqDg4EYWq7evb1qk3+OJTCYz7oNCJgMANmRkdHV1XS4s3L1rFwCgqakpNTUVi8VmZGRs3LChrq7Oysqq5s4dLpcrFAjGxzUSaDQ2NtrY2LS2tTU3N1tbWc1sIMLDw62srPz9/KanpmAYbmtrS05OxmKx27KyUlJS6urraTRadU2NSCweGBycnp7DQ3aOhSokOLi6uvrqtWvqJKn+nQGRqK1SmTmrvpRqtcHd36pAEARgWK5QYO/7p+kueAH+/hER2g7iAADVKjvTSXFJSUV5eXBwsLOzsyoqY2ZPBEEQDIBMLifcvy4Oh1Opby5evNja1hYYGOjg4MBi6S8i6+XpqbXdw2KxBCIRKxbPvG0ymWzmWhgMBoZhqUSCxWIVcjkAICM9nUTS0IdIJBI8DjdzNjAw0MXFpam5Ga82JjAMAxieWchnRkai1mHmli1Y7ByeXHNvAR7fvr2kpGSGKgKBwOfzAQC9fdqmRwiCZohEaYMEby+v+oYGAMDAwIDWq204qiors7OzN2zYQKVSlfqULU6Ojr19fXK5HABw7NgxFYUVlZXPPvNM+vr1RCLR8G3djRs36HT66tWrT585AwBwcnLq7OwEADSyWD/99JOziwvFwiIhISEyMrKurg6vOdPMLOrx8fEJCQmckRGxWFuPiMFgbGxs+vv7AQCVVVWnz5xxdXGh0ekJCQmhoaF19fW6e3gtzL2xpNFomzdt+vX0aQBATHT0j8eOVVRU0Ojabtx29vYNx4/n5+dHR0V9f/RodU0Ng06fs/MZpKam/vDDDwc//tja2ppEIi0s11lUVNSJEyccHB1xOByRQBDpzKgMBiMxMfGTf/6TQqFYWloG3N+6R0dFfXvkiC2TSaFQxGKx3kXnQm7upYIC1c+9e/feLC5++623KBTKp599Vt/Q8Ni2bT8eO2ZjY8Plcp979lkikXj4229ZLBaXy42LiyNq8hoUFNTIYn3yyScEAoFEInl6enZ1awdo7Nix48djx5g2NpN8/osvvCCTyb77/vuampqxsbG1qalz78nheUIqlQoEAqRTMpkMhmGZTMbn8w3vs6mpaWRkBIZhiUTy/vvvz/eWVJienp6amkJvIxaLde9fODU1LRIt+LozUCgUPB5PoVCojkxOTkokEpS7RRrJGcjlch6Pp1QqVUd4PJ5UKjXkZkxCP8xisXLz8oKDgzs6Ovz8/NLXrzf2HS17mASvAAAulzs4NMS0sbG3X3oPt/9CmAqvj7C0eKT3N0884tU88YhX88T/B/c8zo+GZQXcAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE5LTA1LTE3VDA4OjI3OjI4KzAyOjAwq7dTxwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOS0wNS0xN1QwODoyNzoyOCswMjowMNrq63sAAAAASUVORK5CYII=', 'PNG', 15, 15, 50, 50);
    doc.setFont('Helvetica');
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
    let date = 'Print Date : ' + new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_8__["default"]().format('DD/MM/YYYY');
    doc.getTextWidth(date);
    doc.text(date, 430 - doc.getTextWidth(date), 615);
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
  setProfile(doc, userProfile) {
    userProfile = userProfile || this.utils.getProfileData();
    let subject = 'Sub: Confirmation of ' + (this.transFilters.activeFilter == 1 ? 'Pay In ' : 'Pay Out ') + 'Transactions' + (this.transFilters.companyCode ? '(' + this.transFilters.companyCode + ')' : '');
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
    doc.text(subject, (430 - doc.getTextWidth(subject)) / 2, lastYCoordinate + 22);
    doc.setFontSize(10);
    doc.text('Please find herewith statement of ' + (this.transFilters.activeFilter == 1 ? 'Pay In' : 'Pay Out') + ' History from ' + new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_8__["default"](this.transFilters.fromDate).format('DD/MM/YYYY') + ' To ' + new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_8__["default"](this.transFilters.toDate).format('DD/MM/YYYY') + ' as per our books.', 15, lastYCoordinate + 31);
    doc.text('If any discrepancies/errors are found you are requested to report the same within 30 days from the receipt of this statement.', 15, lastYCoordinate + 41);
    //this.setFooter(doc, userProfile);
    return doc;
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
      let text = (this.transFilters.activeFilter == 1 ? 'Pay In ' : 'Pay Out ') + 'Transactions Page ' + index + '/' + (pages.length - 1);
      doc.text(text, (430 - doc.getTextWidth(text)) / 2, 615);
    });
    return doc;
  }
  openFundDrawer(item) {
    this.payoutRequest = item;
    this.payoutRequest['isModifyPayout'] = true;
    let userAccountStatus = this.utils.getUserAccountStatus();
    if ((!userAccountStatus || !userAccountStatus.onboardStatus || userAccountStatus.onboardStatus == 'C') && this.utils.getProfileData("NRIStatus")) {
      // to check whether user is NRI or not. if yes then show alert (26/04/2021)
      return;
    }
    this.fundDrawer.open(this.payoutRequest);
  }
  closeFundDrawer() {
    this.fundDrawer.close();
  }
  /** * * @param item : selected payout request object */
  openDeletePayoutModal(item) {
    this.isPayoutDelete = true; // boolean value to show/hide payout cancel modal
    this.payoutRequest = item;
  }
  closeDeletePayoutModal() {
    this.isPayoutDelete = false;
    this.payoutRequest = {};
  }
  /**for delete payout request */
  deletePayoutRequest() {
    const deletePayload = {
      "userId": this.utils.getUserId() || "",
      "sessionId": this.utils.getSessionId() || "",
      "transactionType": 2,
      // transaction type 2 for cancel request
      "transactionId": this.payoutRequest['JiffyTransactionId'],
      "amount": this.payoutRequest['Amount'],
      "requestedByUserId": this.utils.getUserId() || ""
    };
    this.loaders.payoutLoader = true;
    this.postLoginService.getModifyPayoutRequest(deletePayload).subscribe(response => {
      this.loaders.payoutLoader = false;
      this.isPayoutDelete = false;
      this.payoutRequest = {};
      if (response.Status == "Success" && response.Response) {
        /**call listing for payout */
        this.transactionRecords = [];
        this.getPayOutTransactions(true);
        this.utils.success("Success", response.Response || "Successfully Payout Cancellation Done.");
      } else {
        this.utils.error(response.Reason || "Something Went Wrong", "Please Try Again");
      }
    }, error => {
      this.loaders.payoutLoader = false;
      console.log("PAYY", error);
      this.utils.error('Error', "Something Went Wrong");
    });
  }
  static {
    this.ctorParameters = () => [{
      type: src_app_services_rest_reports_service__WEBPACK_IMPORTED_MODULE_4__.ReportsService
    }, {
      type: src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_6__.UtilsService
    }, {
      type: src_app_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__.SharedDataService
    }, {
      type: src_app_services_rest_post_login_service__WEBPACK_IMPORTED_MODULE_7__.PostLoginService
    }];
  }
  static {
    this.propDecorators = {
      fundDrawer: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild,
        args: [_funds_pay_in_out_pay_in_out_component__WEBPACK_IMPORTED_MODULE_10__.PayInOutComponent, {
          static: false
        }]
      }]
    };
  }
};
TransactionComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-transaction',
  template: _transaction_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__.BsDatepickerModule, _funds_pay_in_out_pay_in_out_component__WEBPACK_IMPORTED_MODULE_10__.PayInOutComponent, _pipes_value_pipe__WEBPACK_IMPORTED_MODULE_9__.ValuePipe, _angular_common__WEBPACK_IMPORTED_MODULE_15__.LowerCasePipe],
  styles: [(_transaction_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__metadata)("design:paramtypes", [src_app_services_rest_reports_service__WEBPACK_IMPORTED_MODULE_4__.ReportsService, src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_6__.UtilsService, src_app_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__.SharedDataService, src_app_services_rest_post_login_service__WEBPACK_IMPORTED_MODULE_7__.PostLoginService])], TransactionComponent);


/***/ }),

/***/ 15788:
/*!*********************************************************************************************!*\
  !*** ./src/app/post-login-module/reports/transaction/transaction.component.scss?ngResource ***!
  \*********************************************************************************************/
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
  min-height: 400px;
}
.content-box .exportbtn {
  position: relative;
  top: -5px;
}

.no-data-container {
  clear: both;
}
.no-data-container h3 {
  color: #aaa;
  font-size: 16px;
  font-weight: bold;
}
.no-data-container .btn-clear {
  color: #fe606e;
}
.no-data-container img {
  width: 150px;
}

.filter-label {
  margin-top: 8px;
}

.custom-input {
  font-weight: normal;
  width: 100%;
  font-size: 14px;
}
.custom-input input {
  border: 1px solid #e3e3e3;
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
  margin-top: 1rem;
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
}

table th,
table td {
  vertical-align: middle !important;
  padding: 10px 8px 16px;
  border: 1px solid #F4F3F8;
}

.table-bordered tbody td {
  background: rgba(0, 0, 0, 0);
}
.table-bordered tbody td.text-right {
  text-align: right;
}
.table-bordered tbody td.text-center {
  text-align: center;
}
.table-bordered tbody td.credit, .table-bordered tbody td.success {
  color: #21ce99;
  font-weight: 500;
}
.table-bordered tbody td.debit, .table-bordered tbody td.pending, .table-bordered tbody td.failure {
  color: #F16522;
  font-weight: 500;
}

div.dialog .dialog-section p {
  font-weight: bold;
  margin: 15px 0;
}

div.dialog .dialog-section > div table.table {
  margin: 0px;
}
div.dialog .dialog-section > div table.table th,
div.dialog .dialog-section > div table.table td {
  border: 1px solid #ddd;
}

input[type=date] {
  position: relative;
}
input[type=date]:before {
  content: attr(data-date);
  font-size: 14px;
  color: #555555;
  position: absolute;
  background-color: #fff;
  left: 12px;
  right: 47px;
}`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 70278:
/*!*********************************************************************************************!*\
  !*** ./src/app/post-login-module/reports/transaction/transaction.component.html?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"clearfix\"></div>\r\n<section class=\"m-tb20 clearfix\">\r\n  <div class=\"col-md-12 m-tb20\">\r\n\r\n    <div class=\"card\">\r\n      <div class=\"card-block\">\r\n        <h4 class=\"page-title\">Transaction History</h4>\r\n        <div class=\"row optionfuture\">\r\n          <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12\">\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-5 col-md-6 col-sm-4 col-xs-12\">\r\n                <label class=\"filter-label\">Company Code</label>\r\n              </div>\r\n              <div class=\"col-lg-7 col-md-6 col-sm-8 col-xs-12\">\r\n                <div class=\"custom-select\">\r\n                  <select id=\"companyCode\" class=\"form-control\" name=\"companyCode\" #companyCode=\"ngModel\"\r\n                    [(ngModel)]=\"transFilters.companyCode\">\r\n                    @for (item of transFilters.codeList; track item) {\r\n                      <option [value]=\"item.value\">{{item.label}}</option>\r\n                    }\r\n                  </select>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-12\">\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\">\r\n                <label class=\"filter-label\">From Date</label>\r\n              </div>\r\n              <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-12\">\r\n                <label class=\"custom-input\">\r\n                  <input type=\"text\" id=\"fromDate\" [minDate]=\"dates.lastYear\" [maxDate]=\"dates.max\" class=\"form-control\"\r\n                    name=\"fromDate\" #fromDate=\"ngModel\" bsDatepicker [bsConfig]=\"{ dateInputFormat: 'DD-MMM-YYYY' }\"\r\n                    [(ngModel)]=\"transFilters.fromDate\">\r\n                  </label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-12\">\r\n              <div class=\"row\">\r\n                <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\">\r\n                  <label class=\"filter-label\">To Date</label>\r\n                </div>\r\n                <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-12\">\r\n                  <label class=\"custom-input\">\r\n                    <input type=\"text\" id=\"toDate\" class=\"form-control\" [minDate]=\"transFilters.fromDate\"\r\n                      [maxDate]=\"dates.max\" name=\"toDate\" #toDate=\"ngModel\" [(ngModel)]=\"transFilters.toDate\" bsDatepicker\r\n                      [bsConfig]=\"{ dateInputFormat: 'DD-MMM-YYYY' }\">\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-lg-1 col-md-3 col-sm-6 col-xs-12\">\r\n                <button (click)=\"getTransactionReport()\" scrollTo class=\"btn btn-gradient\">GO</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card\">\r\n          <div class=\"card-block content-box\">\r\n            <button type=\"button\" (click)=\"exportPDF()\" [disabled]=\"shared.isServiceHit || !transactionRecords?.length\"\r\n            class=\"pull-right btn btn-gradient ml-5 exportbtn\">EXPORT TO PDF</button>\r\n            <div class=\"parentHorizontalTab\">\r\n              <ul class=\"nav nav-tabs reset d-flex\">\r\n                <li [class.active]=\"transFilters?.activeFilter==1\" (click)=\"activateFilter(1,'payIn')\">\r\n                  <a>Deposit</a>\r\n                </li>\r\n                <li [class.active]=\"transFilters?.activeFilter==2\" (click)=\"activateFilter(2,'payOut')\">\r\n                  <a>Withdraw</a>\r\n                </li>\r\n              </ul>\r\n\r\n              <div class=\"resp-tabs-container hor_1\">\r\n                <img class=\"loader\" src=\"assets/images/loader.gif\"\r\n                  [hidden]=\"transactionRecords?.length>0 || !shared.isServiceHit\" />\r\n                  <div class=\"text-center no-data-container\" [hidden]=\"transactionRecords?.length>0 || shared.isServiceHit\">\r\n                    <img src=\"{{shared.serverImageUrl + 'order-no-result.png'}}\" width=\"150\" height=\"108\" alt=\"No Result\">\r\n                    <h3>No Entries in Pay {{transFilters?.activeFilter==1?'IN':'OUT'}}.</h3>\r\n                  </div>\r\n                  <div class=\"table-responsive table-custom mt-15\">\r\n                    @if (transactionRecords?.length && transFilters?.activeFilter==1) {\r\n                      <table class=\"table table-hover table-bordered text-uppercase\" id=\"datatable\"\r\n                        >\r\n                        <thead>\r\n                          <tr>\r\n                            <th style=\"width:15%;\">Date</th>\r\n                            <th style=\"width:15%;\">Transaction ID/Voucher</th>\r\n                            <th style=\"width:10%;\">Segment</th>\r\n                            <th style=\"width:15%;\">Mode</th>\r\n                            <th style=\"width:15%;\">Client Acc. No.</th>\r\n                            <th style=\"width:15%;\" class=\"text-right\">Amount</th>\r\n                            <th style=\"width:15%;\" class=\"text-right\">Status</th>\r\n                          </tr>\r\n                        </thead>\r\n                        @for (item of transactionRecords; track item; let i = $index) {\r\n                          <tr>\r\n                            <td>{{item?.Date}}</td>\r\n                            <td>{{item?.VoucherNo|| item?.JiffyTransactionId}}</td>\r\n                            <td>{{item?.Segment}}</td>\r\n                            <td>{{item?.ModeOfPayment||'NEFT/RTGS'}}</td>\r\n                            <td>{{item?.ClientBankAccNo}}</td>\r\n                            <td class=\"text-right\">{{item?.Amount|value:'1.2-2'}}</td>\r\n                            <td class=\"text-right {{(item?.Status||'success')|lowercase}}\">{{item?.Status||'SUCCESS'}}</td>\r\n                          </tr>\r\n                        }\r\n                      </table>\r\n                    }\r\n\r\n                    @if (transactionRecords?.length && transFilters?.activeFilter==2) {\r\n                      <table class=\"table table-hover table-bordered text-uppercase\" id=\"datatable\"\r\n                        >\r\n                        <thead>\r\n                          <tr>\r\n                            <th style=\"width:15%;\">Date</th>\r\n                            <th style=\"width:15%;\">Transaction ID/Voucher</th>\r\n                            <th style=\"width:10%;\">Segment</th>\r\n                            <th style=\"width:15%;\">Client Acc. No.</th>\r\n                            <th style=\"width:15%;\" class=\"text-right\">Amount</th>\r\n                            <th style=\"width:15%;\">Type</th>\r\n                            <th style=\"width:15%;\" class=\"text-right\">Status</th>\r\n                            <th style=\"width:15%;\" class=\"text-right\">Actions</th>\r\n                          </tr>\r\n                        </thead>\r\n                        @for (item of transactionRecords; track item; let i = $index) {\r\n                          <tr>\r\n                            <td>{{item?.Date}}</td>\r\n                            <td>{{item?.VoucherNo || item?.JiffyTransactionId}}</td>\r\n                            <td>{{item?.Segment}}</td>\r\n                            <td>{{item?.ClientBankAccNo}}</td>\r\n                            <td class=\"text-right\">{{item?.Amount|value:'1.2-2'}}</td>\r\n                            <td [class.pending]=\"item?.Remarks=='PAYOUT REQUESTED'\"\r\n                              [class.success]=\"item?.Remarks=='PAYOUT PROCESSED'\">\r\n                              {{item?.Remarks=='PAYOUT PROCESSED'?'PROCESSED':item?.Remarks=='PAYOUT REQUESTED'?'REQUEST':''}}\r\n                            </td>\r\n                            <td class=\"text-right {{(item?.Status||'success')|lowercase}}\">{{item?.Status||'SUCCESS'}}</td>\r\n                            @if ((item?.Status.toLowerCase() != 'pending') && (item?.Status.toLowerCase() != 'inprogress')) {\r\n                              <td class=\"text-center\">-</td>\r\n                            }\r\n                            @if (((item?.Status.toLowerCase() === 'pending') || (item?.Status.toLowerCase() === 'inprogress'))) {\r\n                              <td class=\"text-right\">\r\n                                <button class=\" btn btn-xs\"  (click)=\"openFundDrawer(item)\"><i class=\"fa fa-edit text-center\" title=\"Modify Payout\"></i></button>\r\n                                <button class=\" btn btn-xs\" (click)=\"openDeletePayoutModal(item)\"><i class=\"fa fa-trash-o text-center\" title=\"Delete Payout\"></i></button>\r\n                              </td>\r\n                            }\r\n                          </tr>\r\n                        }\r\n                      </table>\r\n                    }\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div>\r\n          </div>\r\n        </div>\r\n\r\n        <app-pay-in-out [action]=\"0\" [config]=\"payoutRequest\"></app-pay-in-out>\r\n\r\n        @if (isPayoutDelete) {\r\n          <div class=\"dialog\">\r\n            <div class=\"dialog-content\">\r\n              <div class=\"dialog-header clearfix\">\r\n                <div class=\"col-md-12\">\r\n                  <h4 class=\"popup-title\">Are you sure you want to delete payout request?</h4>\r\n                </div>\r\n              </div>\r\n              <div class=\"dialog-footer clearfix\">\r\n                <button class=\"btn sell\" [disabled]=\"loaders.payoutLoader\" (click)=\"deletePayoutRequest()\">\r\n                  YES\r\n                </button>\r\n                <button class=\"btn buy\" [disabled]=\"loaders.payoutLoader\" (click)=\"closeDeletePayoutModal()\">NO</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        }\r\n      </section>";

/***/ })

}]);