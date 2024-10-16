(self["webpackChunkjiffy_upgraded"] = self["webpackChunkjiffy_upgraded"] || []).push([[9790],{

/***/ 49790:
/*!******************************************************************************!*\
  !*** ./src/app/post-login-module/reports/pnl-report/pnl-report.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PnlReportComponent: () => (/* binding */ PnlReportComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _pnl_report_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pnl-report.component.html?ngResource */ 58638);
/* harmony import */ var _pnl_report_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pnl-report.component.scss?ngResource */ 48064);
/* harmony import */ var _pnl_report_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pnl_report_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jspdf */ 69223);
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jspdf-autotable */ 34941);
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/analytics/analytics.service */ 50213);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 28460);
/* harmony import */ var _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../assets/libs/esm-moment.min.js */ 29483);
/* harmony import */ var _common_module_non_eq_sso_non_eq_sso_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common-module/non-eq-sso/non-eq-sso.component */ 67761);
/* harmony import */ var _pipes_value_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../pipes/value.pipe */ 50615);
/* harmony import */ var _services_rest_reports_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/rest/reports.service */ 86452);
/* harmony import */ var _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/shared-data/shared-data.service */ 46013);
/* harmony import */ var _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/utils/utils.service */ 89893);







/** Import Moment JS Library*/
// var moment: any = require();








/**
 * Component for PNL Reports
 */
let PnlReportComponent = class PnlReportComponent {
  /**
   * Constructor for Object Initialization
   * @param rest ReportsService Instance
   * @param utils UtilsService Instance
   * @param shared SharedDataService instance
   */
  constructor(rest, utils, shared, analytics) {
    this.rest = rest;
    this.utils = utils;
    this.shared = shared;
    this.analytics = analytics;
    this.dates = this.utils.getFiscalDateRange(7);
    this.pnlData = [];
    this.summaryInfo = [];
    this.Math = Math;
    this.pnlFilters = {
      codeList: [{
        value: 'Cash',
        label: 'EQUITY'
      }, {
        value: 'Derv',
        label: 'DERIVATIVES'
      }, {
        value: 'Comm',
        label: 'COMMODITY'
      }],
      companyCode: 'Cash',
      fromDate: this.dates.min,
      toDate: this.dates.max
    };
  }
  /** Life Cycle Hook for PnlReportComponent*/
  ngOnInit() {
    this.utils.setTrackMoeEvent('visitedProfitandLossReport', {
      "User_ID": this.utils.getUserId() || 'guest',
      "IP": this.shared.IPAddress
    });
    this.analytics.emitEvent('visitedProfitandLossReport', this.utils.getUserId() || 'guest', JSON.stringify({
      "IP": this.shared.IPAddress
    }), 1);
    this.getPNLReport();
  }
  /**
   * Function to fetch PNL Report
   * @param isnewRequest whether to clear the current Data or not
   */
  getPNLReport() {
    let request = {
      "UserId": 'test',
      "SessionId": this.utils.getSessionId(),
      "ClientId": this.utils.getUserId(),
      "ToDate": new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_5__["default"](this.pnlFilters.toDate).format('YYYY-MM-DD'),
      "FromDate": new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_5__["default"](this.pnlFilters.fromDate).format('YYYY-MM-DD'),
      "Group": this.pnlFilters.companyCode || 'Cash',
      "With_Exp": 1
    };
    this.pnlData = [];
    this.pnlFilters.holdings = [];
    this.pnlFilters.expenses = [];
    this.rest.getPNLReport(request, this.pnlFilters.companyCode).subscribe(data => {
      if (data && data.Response && data.Response.Trades.length) {
        this.pnlFilters.noOfRecords = data.Response.Trades.length;
        this.pnlFilters.data = data;
        this.pnlFilters.totalPNL = 0;
        this.summaryInfo = [];
        let trades = data.Response.Trades;
        this.pnlFilters.TradesLength = (trades || []).length || 0;
        this.pnlData = [...(trades || [])];
        let expenseTotal = {
          realizedPNL: 0,
          totalNetAmount: 0
        };
        let holdingsTotal = {
          realizedPNL: 0,
          unrealizedPNL: 0,
          totalOpenQty: 0,
          totalBuyQty: 0,
          totalSellQty: 0,
          totalNetQty: 0,
          totalOpenAmount: 0,
          totalNetAmount: 0
        };
        this.pnlData.forEach((element, index) => {
          if (element.Scrip_Name) {
            let item = {
              BuyQTY: element.Buy_Qty,
              BuyRate: element.Buy_Rate,
              BuyValue: element.BuyQTY,
              ClosePrice: element.Curr_Price,
              NetAmount: element.FIFO_Value,
              NetQTY: element.Net_Qty,
              NetRate: element.FIFO_Rate,
              Notional: element.Notional_FIFO_Open,
              OpenQTY: element.Open_Qty,
              OpenRate: element.Open_Rate,
              OpenValue: (element.Open_Qty || 0) * (element.Open_Rate || 0),
              SECURITY: element.Scrip_Name,
              Scrip_Name: this.pnlFilters.companyCode == 'Cash' ? element.Scrip_Name : element.Scrip_Symbol,
              Segment: element.Segment,
              SellQTY: element.Sell_Qty,
              SellRate: element.Sell_Rate,
              SellValue: (element.Sell_Qty || 0) * (element.Sell_Rate || 0),
              realizedPNL: element.Booked_PNL
            };
            if (this.pnlFilters.companyCode == 'Cash') {
              item = {
                ...element,
                ...item
              };
            }
            this.pnlData[index] = item;
            holdingsTotal.unrealizedPNL += item.Notional;
            holdingsTotal.realizedPNL += item.realizedPNL;
            holdingsTotal.totalOpenQty += item.OpenQTY;
            holdingsTotal.totalBuyQty += item.BuyQTY;
            holdingsTotal.totalSellQty += item.SellQTY;
            holdingsTotal.totalNetQty += item.NetQTY || 0;
            holdingsTotal.totalOpenAmount += item.OpenValue;
            holdingsTotal.totalNetAmount += item.NetQTY ? item.NetAmount : 0;
            this.pnlFilters.holdings.push(item);
          } else {
            element.SECURITY = element.Expense;
            element.NetAmount = element.Charges;
            element.isExpense = true;
            expenseTotal.realizedPNL += element.Charges || 0;
            expenseTotal.totalNetAmount += element.Charges || 0;
            // this.pnlFilters.expenses.push(element);
          }
        });
        let overAllTotals = JSON.parse(JSON.stringify(holdingsTotal));
        overAllTotals.realizedPNL = holdingsTotal.realizedPNL + expenseTotal.realizedPNL;
        overAllTotals.unRealizedPNL = holdingsTotal.unrealizedPNL;
        overAllTotals.totalNetAmount = overAllTotals.totalNetAmount + expenseTotal.totalNetAmount;
        this.pnlFilters.overAllTotals = overAllTotals;
        this.pnlFilters.expenseTotal = expenseTotal;
        this.pnlFilters.holdingsTotal = holdingsTotal;
        this.pnlFilters.expenses = data.Response.Expenses;
        (this.pnlFilters.expenses || []).forEach(element => {
          this.pnlFilters.overAllTotals.realizedPNL -= element.Amount;
        });
        // (this.pnlFilters.expenses || []).forEach(element => {
        //   this.pnlFilters.overAllTotals.totalNetAmount += element.Amount;
        // });
      }
    });
  }
  getReport(type) {
    let request = {
      "Input": [{
        "LoginID": "JIFFY",
        "ClientCode": 'X00028',
        //this.utils.getUserId(),
        "CompanyCode": this.pnlFilters.companyCode || 'Group1',
        "Fromdate": new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_5__["default"](this.pnlFilters.fromDate).format('DD-MM-YYYY'),
        "ToDate": new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_5__["default"](this.pnlFilters.toDate).format('DD-MM-YYYY'),
        "Report": "PNL",
        "Format": type,
        "Source": "JIFFY"
      }]
    };
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
  exportCSV() {
    let csvData = 'data:text/csv;charset=utf-8,';
    let tableData = ['Security', 'Open Qty.', 'Open Rate', 'Open Value', 'Buy Qty.', 'Buy Rate', 'Sell Qty.', 'Sell Rate', 'Net Qty.', 'Net Rate', 'Net Value', 'Cl.Price', 'Realized P&L', 'UnRealized P&L'];
    csvData += tableData.join(',') + '\n';
    this.pnlData.forEach((data, index) => {
      csvData += [data.SECURITY, data.OpenQTY ? data.OpenQTY : '', data.OpenRate ? data.OpenRate : '', data.OpenValue ? data.OpenValue : '', data.BuyQTY ? data.BuyQTY : '', data.BuyRate ? data.BuyRate : '', data.SellQTY ? data.SellQTY : '', data.SellRate ? data.SellRate : '', data.NetQTY ? data.NetQTY : '', data.NetRate ? data.NetRate : '', data.NetAmount && data.NetQTY ? data.NetAmount : '', data.ClosePrice ? data.ClosePrice : '', data.realizedPNL ? data.realizedPNL : '', data.Notional ? data.Notional : ''].join(',') + '\n';
    });
    csvData += ['TOTAL', this.pnlFilters.totalOpenQty || '', '', this.pnlFilters.totalOpenAmount || '', this.pnlFilters.totalBuyQty || '', '', this.pnlFilters.totalSellQty || '', '', this.pnlFilters.totalNetQty || '', '', this.pnlFilters.totalNetAmount || '', '', this.pnlFilters.realizedPNL || '', this.pnlFilters.unrealizedPNL || ''].join(',') + '\n';
    var link = document.createElement("a");
    link.setAttribute("href", csvData);
    link.setAttribute("download", this.utils.getUserId() + '_GlobalPNL_Report_' + new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_5__["default"]().format('YYYYMMDDHHmmSSS') + '.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  exportPDF() {
    let doc = new jspdf__WEBPACK_IMPORTED_MODULE_2__.jsPDF('l', 'px', 'a4');
    doc.setProperties({
      title: 'Acount P&L Report ' + this.utils.getUserId(),
      subject: 'Acount P&L Report ',
      author: 'JIFFY',
      keywords: 'JIFFY, P&L Report',
      creator: 'JIFFY-WEB'
    });
    let config = {
      width: doc.internal.pageSize.getWidth(),
      height: doc.internal.pageSize.getHeight(),
      margin: 15
    };
    config['absWidth'] = config.width - config.margin;
    config['absHeight'] = config.height - config.margin;
    config['centerX'] = config['absWidth'] / 2;
    config['centerY'] = config['absHeight'] / 2;
    let userProfile = this.utils.getProfileData();
    doc = this.setLetterHead(doc, config);
    doc = this.setProfile(doc, config, userProfile);
    doc = this.setTable(doc, config, userProfile);
    doc = this.setSigner(doc, config, userProfile);
    doc.save(this.utils.getUserId() + '_GlobalPNL_Report_' + new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_5__["default"]().format('YYYYMMDDHHmmSSS') + '.pdf');
  }
  setSigner(doc, config, userProfile) {
    userProfile = userProfile || this.utils.getProfileData();
    let startY = Math.round(doc['previousAutoTable'].finalY) + 15;
    let difference = doc.internal.pageSize.getHeight() - (startY + 26);
    if (difference < 120) {
      doc.addPage();
      this.setFooter(doc, config, userProfile);
      startY = 30;
    }
    doc.setFontSize(10);
    doc.text('Yours faithfully,', config.margin, startY);
    doc.text('I / We herby confirm the above statement', config.margin, startY + 15);
    doc.text('Running Account Authorisation :- You may revoke your running account authorisation at any time.', config.margin, startY + 25);
    doc.text('The same would continue untill it is revoked by you', config.margin, startY + 35);
    doc.text('This is computer generated statement, hence does not require signature.', 15, startY + 45);
    doc.text('For ' + userProfile.Name, config.margin, startY + 60);
    doc.text('For CHOICE EQUITY BROKING PVT.LTD', config.absWidth - doc.getTextWidth('For CHOICE EQUITY BROKING PVT.LTD'), startY + 60);
    doc.text('(Authorised Signatory)', config.margin, startY + 80);
    doc.text('(Authorised Signatory)', config.absWidth - doc.getTextWidth('(Authorised Signatory)'), startY + 80);
    doc.text('PAN :' + userProfile.PanCard, config.margin, startY + 95);
    doc.text('Pan No :AADCC8390B', config.absWidth - doc.getTextWidth('Pan No :AADCC8390B'), startY + 95);
    let pages = doc.internal.pages;
    pages.forEach((pageNo, index) => {
      doc.setPage(index);
      let text = 'Global P&L Report ' + index + '/' + (pages.length - 1);
      doc.text(text, (config.absWidth - doc.getTextWidth(text)) / 2, 615);
    });
    return doc;
  }
  setTable(doc, config, userProfile) {
    userProfile = userProfile || this.utils.getProfileData();
    let subHeaderStyles = {
      fillColor: '#efefef',
      valign: 'middle',
      fontStyle: 'bold',
      halign: 'center'
    };
    let footerStyles = {
      fillColor: '#efefef',
      valign: 'middle',
      fontStyle: 'bold',
      halign: 'right'
    };
    let headers = [{
      content: 'Security',
      rowSpan: 2
    }, {
      content: 'Open',
      colSpan: 3
    }, {
      content: 'Buy',
      colSpan: 2
    }, {
      content: 'Sell',
      colSpan: 2
    }, {
      content: 'Net Qty',
      colSpan: 3
    }, {
      content: 'Cl. Price',
      rowSpan: 2
    }, {
      content: 'Realized P&L',
      rowSpan: 2
    }, {
      content: 'UnRealized P&L',
      rowSpan: 2
    }];
    let subHeader = [{
      content: 'Qty',
      styles: subHeaderStyles
    }, {
      content: 'Price',
      styles: subHeaderStyles
    }, {
      content: 'Amount',
      styles: subHeaderStyles
    }, {
      content: 'Qty',
      styles: subHeaderStyles
    }, {
      content: 'Price',
      styles: subHeaderStyles
    }, {
      content: 'Qty',
      styles: subHeaderStyles
    }, {
      content: 'Price',
      styles: subHeaderStyles
    }, {
      content: 'Qty',
      styles: subHeaderStyles
    }, {
      content: 'Price',
      styles: subHeaderStyles
    }, {
      content: 'Amount',
      styles: subHeaderStyles
    }, '', '', ''];
    let tableData = [];
    this.pnlData.forEach((data, index) => {
      tableData.push([data.Scrip_Name, data.OpenQTY ? this.utils.valueTransform(data.OpenQTY, '1.0-0') : '-', data.OpenRate ? this.utils.segmentTransform(data.OpenRate, 2) : '-', data.OpenValue ? this.utils.segmentTransform(data.OpenValue, 2) : '-', data.BuyQTY ? this.utils.valueTransform(data.BuyQTY, '1.0-0') : '-', data.BuyRate ? this.utils.segmentTransform(data.BuyRate, 2) : '-', data.SellQTY ? this.utils.valueTransform(data.SellQTY, '1.0-0') : '-', data.SellRate ? this.utils.segmentTransform(data.SellRate, 2) : '-', data.NetQTY ? this.utils.valueTransform(data.NetQTY, '1.0-0') : '-', data.NetRate ? this.utils.segmentTransform(data.NetRate, 2) : '-', data.NetQTY || data.isExpense ? this.utils.segmentTransform(data.NetAmount, 2) : '-', data.ClosePrice ? this.utils.segmentTransform(data.ClosePrice, 2) : '-', data.realizedPNL ? this.utils.segmentTransform(data.realizedPNL, 2) : '-', data.Notional ? this.utils.segmentTransform(data.Notional, 2) : '-']);
      // if (index == this.pnlFilters.TradesLength - 1 && this.pnlFilters.companyCode != 'Cash') {
      //   tableData.push([{ content: 'EXPENSES', colSpan: 12, styles: subHeaderStyles }])
      // }
    });
    if (this.pnlFilters.expenses && this.pnlFilters.expenses.length) {
      this.pnlFilters.expenses.forEach(element => {
        tableData.push([{
          content: element.Charges
        }, {
          content: '-'
        }, {
          content: '-'
        }, {
          content: '-'
        }, {
          content: '-'
        }, {
          content: '-'
        }, {
          content: '-'
        }, {
          content: '-'
        }, {
          content: '-'
        }, {
          content: '-'
        }, {
          content: element.Amount ? element.Amount : '-'
        }, {
          content: '-'
        }, {
          content: '-'
        }, {
          content: '-'
        }]);
      });
    }
    tableData.push([{
      content: 'TOTAL',
      styles: subHeaderStyles
    }, {
      content: this.pnlFilters.overAllTotals.totalOpenQty ? this.utils.valueTransform(this.pnlFilters.overAllTotals.totalOpenQty, '1.0-0') : '-',
      styles: footerStyles
    }, {
      content: '',
      styles: footerStyles
    }, {
      content: this.pnlFilters.overAllTotals.totalOpenAmount ? this.utils.segmentTransform(this.pnlFilters.overAllTotals.totalOpenAmount, 2) : '-',
      styles: footerStyles
    }, {
      content: this.pnlFilters.overAllTotals.totalBuyQty ? this.utils.valueTransform(this.pnlFilters.overAllTotals.totalBuyQty, '1.0-0') : '-',
      styles: footerStyles
    }, {
      content: '',
      styles: footerStyles
    }, {
      content: this.pnlFilters.overAllTotals.totalSellQty ? this.utils.valueTransform(this.pnlFilters.overAllTotals.totalSellQty, '1.0-0') : '-',
      styles: footerStyles
    }, {
      content: '',
      styles: footerStyles
    }, {
      content: this.pnlFilters.overAllTotals.totalNetQty ? this.utils.valueTransform(this.pnlFilters.overAllTotals.totalNetQty, '1.0-0') : '-',
      styles: footerStyles
    }, {
      content: '',
      styles: footerStyles
    }, {
      content: this.pnlFilters.overAllTotals.totalNetAmount ? this.utils.segmentTransform(this.pnlFilters.overAllTotals.totalNetAmount, 2) : '-',
      styles: footerStyles
    }, {
      content: '',
      styles: footerStyles
    }, {
      content: this.pnlFilters.overAllTotals.realizedPNL ? this.utils.segmentTransform(this.pnlFilters.overAllTotals.realizedPNL, 2) : '-',
      styles: footerStyles
    }, {
      content: this.pnlFilters.overAllTotals.unrealizedPNL ? this.utils.segmentTransform(this.pnlFilters.overAllTotals.unrealizedPNL, 2) : '-',
      styles: footerStyles
    }]);
    doc['autoTable']({
      head: [headers, subHeader],
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
        textColor: '#000',
        halign: 'center'
      },
      columnStyles: {
        '0': {
          cellWidth: 90
        },
        '1': {
          halign: 'right',
          cellWidth: 30
        },
        '2': {
          halign: 'right',
          cellWidth: 45
        },
        '3': {
          halign: 'right',
          cellWidth: 45
        },
        '4': {
          halign: 'right',
          cellWidth: 30
        },
        '5': {
          halign: 'right',
          cellWidth: 45
        },
        '6': {
          halign: 'right',
          cellWidth: 30
        },
        '7': {
          halign: 'right',
          cellWidth: 45
        },
        '8': {
          halign: 'right',
          cellWidth: 30
        },
        '9': {
          halign: 'right',
          cellWidth: 45
        },
        '10': {
          halign: 'right',
          cellWidth: 45
        },
        '11': {
          halign: 'right',
          cellWidth: 30
        },
        '12': {
          halign: 'right',
          cellWidth: 45
        },
        '13': {
          halign: 'right',
          cellWidth: 45
        }
      },
      didDrawPage: data => {
        this.setFooter(doc, config, userProfile);
      }
    });
    return doc;
  }
  setLetterHead(doc, config) {
    let img = new Image();
    img.src = '../../../assets/images/Choice-International.png';
    doc.addImage('data:image/png;base64,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', 'PNG', config.margin, config.margin, 50, 50);
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
    doc.line(15, 71, config.width - config.margin, 71);
    return doc;
  }
  setFooter(doc, config, userProfile) {
    userProfile = userProfile || this.utils.getProfileData();
    doc.line(15, config.height - config.margin - 10, config.width - config.margin, config.height - config.margin - 10);
    doc.setFontSize(9);
    doc.text(userProfile.ClientId + '  ' + userProfile.Name, 15, config.height - config.margin);
    let date = 'Print Date : ' + new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_5__["default"]().format('DD/MM/YYYY');
    doc.getTextWidth(date);
    doc.text(date, config.width - config.margin - doc.getTextWidth(date), config.height - config.margin);
    return doc;
  }
  setProfile(doc, config, userProfile) {
    userProfile = userProfile || this.utils.getProfileData();
    let address = this.splitter(userProfile.Address.replace(/[^a-zA-Z0-9]/g, ' '), 30);
    doc.setFontSize(9);
    doc.text('Client ID', config.margin, 80);
    doc.setFont('Helvetica', 'bold');
    doc.text(':  ' + userProfile.ClientId, 55, 80);
    doc.text('Name', config.margin, 90);
    doc.text(':  ' + userProfile.Name, 55, 90);
    doc.setFont('Helvetica', 'normal');
    doc.text('Address', config.margin, 100);
    let lastYCoordinate = 90;
    address.forEach((text, index) => {
      lastYCoordinate += 10;
      doc.text((index == 0 ? ':  ' : '   ') + text, 55, lastYCoordinate);
    });
    doc.text('Mobile No.', config.centerX, 80);
    doc.text(':  ' + userProfile.MobileNo, config.centerX + 40, 80);
    doc.text('Category', config.centerX, 90);
    doc.text(':  ' + 'Individual', config.centerX + 40, 90);
    doc.text('Email ID', config.centerX, 100);
    doc.text(':  ' + userProfile.EmailID, config.centerX + 40, 100);
    doc.setFontSize(11);
    doc.text('Dear Sir/Madam,', config.margin, lastYCoordinate + 12);
    doc.setFontSize(8);
    doc.text('Sub: Global P&L Report', (config.width - doc.getTextWidth('Sub: Global P&L Report')) / 2, lastYCoordinate + 22);
    doc.setFontSize(10);
    doc.text('Please find herewith statement of Global P&L Statement from ' + new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_5__["default"](this.pnlFilters.fromDate).format('DD/MM/YYYY') + ' To ' + new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_5__["default"](this.pnlFilters.toDate).format('DD/MM/YYYY') + ' as per our books.', config.margin, lastYCoordinate + 31);
    //this.setFooter(doc, config, userProfile);
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
  static {
    this.ctorParameters = () => [{
      type: _services_rest_reports_service__WEBPACK_IMPORTED_MODULE_8__.ReportsService
    }, {
      type: _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_10__.UtilsService
    }, {
      type: _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_9__.SharedDataService
    }, {
      type: src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_4__.AnalyticsService
    }];
  }
};
PnlReportComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
  selector: 'app-pnl-report',
  template: _pnl_report_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  imports: [_common_module_non_eq_sso_non_eq_sso_component__WEBPACK_IMPORTED_MODULE_6__.NonEqSsoComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__.BsDatepickerModule, _pipes_value_pipe__WEBPACK_IMPORTED_MODULE_7__.ValuePipe],
  styles: [(_pnl_report_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__metadata)("design:paramtypes", [_services_rest_reports_service__WEBPACK_IMPORTED_MODULE_8__.ReportsService, _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_10__.UtilsService, _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_9__.SharedDataService, src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_4__.AnalyticsService])], PnlReportComponent);


/***/ }),

/***/ 48064:
/*!*******************************************************************************************!*\
  !*** ./src/app/post-login-module/reports/pnl-report/pnl-report.component.scss?ngResource ***!
  \*******************************************************************************************/
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
  width: 100%;
  font-size: 14px;
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
  text-align: right;
}

table th,
table td {
  vertical-align: middle !important;
}
table tr.highlighted {
  background-color: #f5f5f5;
}

.table-bordered tbody td {
  border: 1px solid #F4F3F8;
  text-align: right;
}
.table-bordered tbody td.text-right {
  text-align: right;
}
.table-bordered tbody td.text-center {
  text-align: center;
}
.table-bordered tbody td.credit {
  color: #00B16B;
  font-weight: 500;
}
.table-bordered tbody td.debit {
  color: #EE404A;
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

@media (max-width: 560px) {
  .card .col-xs-12 .col-xs-6 {
    width: 100%;
    text-align: left;
  }
  hr {
    margin-top: 10px;
    margin-bottom: 10px;
  }
}
.table-align {
  width: 50%;
  margin-left: auto;
  margin-right: auto;
}

@media (max-width: 767px) {
  .btn-gradient {
    margin-top: 20px;
  }
}

@media (max-width: 1024px) {
  .m-tb20 .card {
    margin-top: 15px;
  }
}
@media (max-width: 767px) {
  .m-tb20 .col-xs-12 {
    margin-top: 5px;
  }
}
@media (max-width: 992px) {
  .m-tb20 .col-sm-6 {
    margin-bottom: 12px;
  }
}

.export-btn {
  display: inline-block;
  float: right !important;
}`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 58638:
/*!*******************************************************************************************!*\
  !*** ./src/app/post-login-module/reports/pnl-report/pnl-report.component.html?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"clearfix\"></div>\r\n<section class=\"m-tb20 clearfix\">\r\n  <div class=\"col-md-12 m-tb20\">\r\n\r\n\r\n\r\n    <!-- onboarding Account isn’t activated -->\r\n    <app-non-eq-sso></app-non-eq-sso>\r\n\r\n\r\n\r\n    <div class=\"card\">\r\n      <div class=\"card-block\">\r\n        <h4 class=\"page-title\">PNL Report</h4>\r\n        <div class=\"row optionfuture\">\r\n          <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12\">\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-5 col-md-6 col-sm-4 col-xs-12\">\r\n                <label class=\"filter-label\">Company Code</label>\r\n              </div>\r\n              <div class=\"col-lg-7 col-md-6 col-sm-8 col-xs-12\">\r\n                <div class=\"custom-select\">\r\n                  <select id=\"companyCode\" class=\"form-control\" name=\"companyCode\" #companyCode=\"ngModel\"\r\n                    [(ngModel)]=\"pnlFilters.companyCode\">\r\n                    @for (item of pnlFilters.codeList; track item) {\r\n                      <option [value]=\"item.value\">{{item.label}}</option>\r\n                    }\r\n                  </select>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-4 col-md-3 col-sm-6 col-xs-12\">\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\">\r\n                <label class=\"filter-label\">From Date</label>\r\n              </div>\r\n              <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-12\">\r\n                <label class=\"custom-input\">\r\n                  <input type=\"text\" id=\"fromDate\" [minDate]=\"dates.lastYear\" [maxDate]=\"dates.max\" class=\"form-control\"\r\n                    name=\"fromDate\" #fromDate=\"ngModel\" bsDatepicker [bsConfig]=\"{ dateInputFormat: 'DD-MMM-YYYY' }\"\r\n                    [(ngModel)]=\"pnlFilters.fromDate\">\r\n                  </label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-12\">\r\n              <div class=\"row\">\r\n                <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\">\r\n                  <label class=\"filter-label\">To Date</label>\r\n                </div>\r\n                <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-12\">\r\n                  <label class=\"custom-input\">\r\n                    <input type=\"text\" id=\"toDate\" class=\"form-control\" [minDate]=\"pnlFilters.fromDate\"\r\n                      [maxDate]=\"dates.max\" name=\"toDate\" #toDate=\"ngModel\" [(ngModel)]=\"pnlFilters.toDate\" bsDatepicker\r\n                      [bsConfig]=\"{ dateInputFormat: 'DD-MMM-YYYY' }\">\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-lg-1 col-md-3 col-sm-3 col-xs-12\">\r\n                <button (click)=\"getPNLReport()\" scrollTo class=\"btn btn-gradient\">GO</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card\">\r\n          <div class=\"card-block content-box\">\r\n            <button type=\"button\" (click)=\"exportPDF()\" [disabled]=\"shared.isServiceHit || !pnlData.length\"\r\n            class=\"pull-right btn btn-gradient mb-15 ml-5\">EXPORT TO PDF</button>\r\n            <div class=\"parentHorizontalTab\">\r\n              <div class=\"resp-tabs-container hor_1\">\r\n                <img class=\"loader\" src=\"assets/images/loader.gif\"\r\n                  [hidden]=\"pnlData.length>0 || !shared.isServiceHit\" />\r\n                  <div class=\"text-center no-data-container\" [hidden]=\"pnlData.length>0 || shared.isServiceHit\">\r\n                    <img src=\"{{shared.serverImageUrl + 'order-no-result.png'}}\" width=\"150\" height=\"108\" alt=\"No Result\">\r\n                    <h3>No Entries in PNL.</h3>\r\n                  </div>\r\n                  <div class=\"table-responsive table-custom\">\r\n                    @if (pnlData.length) {\r\n                      <table class=\"table table-hover text-uppercase table-bordered\">\r\n                        <thead>\r\n                          <tr>\r\n                            <th class=\"text-center\" style=\"width:15%;\" rowspan=\"2\">Security</th>\r\n                            <th class=\"text-center\" style=\"width:15%;\" colspan=\"3\" class=\"text-center\">Open</th>\r\n                            <th class=\"text-center\" style=\"width:11%;\" colspan=\"2\" class=\"text-center\">Buy</th>\r\n                            <th class=\"text-center\" style=\"width:11%;\" colspan=\"2\" class=\"text-center\">Sell</th>\r\n                            <th class=\"text-center\" style=\"width:15%;\" colspan=\"3\">Net</th>\r\n                            <th class=\"text-center\" style=\"width:8%;\" rowspan=\"2\">Cl.\r\n                            Price</th>\r\n                            <th class=\"text-center\" style=\"width:8%;\" rowspan=\"2\">Realized P&L</th>\r\n                            <th class=\"text-center\" style=\"width:8%;\" rowspan=\"2\">\r\n                            Unrealized P&L</th>\r\n                          </tr>\r\n                          <tr>\r\n                            <th class=\"text-center\">Qty</th>\r\n                            <th class=\"text-center\">Rate</th>\r\n                            <th class=\"text-center\">Value</th>\r\n                            <th class=\"text-center\">Qty</th>\r\n                            <th class=\"text-center\">Rate</th>\r\n                            <th class=\"text-center\">Qty</th>\r\n                            <th class=\"text-center\">Rate</th>\r\n                            <th class=\"text-center\">Qty</th>\r\n                            <th class=\"text-center\">Rate</th>\r\n                            <th class=\"text-center\">Value</th>\r\n                          </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                          @for (pnl of (pnlFilters.holdings||[]); track pnl) {\r\n                            <tr>\r\n                              <td>{{pnl?.Scrip_Name}}</td>\r\n                              <td>{{pnl?.OpenQTY?(pnl?.OpenQTY |value:'1.0-0'):'-'}}</td>\r\n                              <td class=\"text-right\">{{pnl?.OpenQTY?(pnl?.OpenRate |value:'1.2-2'):'-'}}</td>\r\n                              <td class=\"text-right\">{{pnl?.OpenQTY?(pnl?.OpenValue |value:'1.2-2'):'-'}}</td>\r\n                              <td>{{pnl?.BuyQTY?(pnl?.BuyQTY |value:'1.0-0'):'-'}}</td>\r\n                              <td class=\"text-right\">{{pnl?.BuyQTY?(pnl?.BuyRate |value:'1.2-2'):'-'}}</td>\r\n                              <td>{{pnl?.SellQTY?(pnl?.SellQTY |value:'1.0-0'):'-'}}</td>\r\n                              <td class=\"text-right\">{{pnl?.SellQTY?(pnl?.SellRate |value:'1.2-2'):'-'}}</td>\r\n                              <td>{{pnl?.NetQTY?(pnl?.NetQTY |value:'1.0-0'):'-'}}</td>\r\n                              <td class=\"text-right\">{{pnl?.NetQTY?(pnl?.NetRate |value:'1.2-2'):'-'}}</td>\r\n                              <td class=\"text-right\">{{pnl?.NetQTY || pnl?.isExpense?(pnl?.NetAmount |value:'1.2-2'):'-'}}</td>\r\n                              <td class=\"text-right\">\r\n                              {{pnl?.ClosePrice?(pnl?.ClosePrice |value:'1.2-2'):''}}</td>\r\n                              <td class=\"text-right\" [class.credit]=\"pnl?.realizedPNL>0\" [class.debit]=\"pnl?.realizedPNL<0\">\r\n                                {{pnl?.realizedPNL?(Math.abs(pnl?.realizedPNL)\r\n                              |value:'1.2-2'):'-'}}</td>\r\n                              <td class=\"text-right\" [class.credit]=\"pnl?.Notional>0\" [class.debit]=\"pnl?.Notional<0\">\r\n                                {{pnl?.Notional?(Math.abs(pnl?.Notional)\r\n                              |value:'1.2-2'):'-'}}</td>\r\n                            </tr>\r\n                          }\r\n                          @for (item of (pnlFilters.expenses || []); track item) {\r\n                            <tr>\r\n                              <td>{{item?.Charges}}</td>\r\n                              <td>-</td>\r\n                              <td>-</td>\r\n                              <td>-</td>\r\n                              <td>-</td>\r\n                              <td>-</td>\r\n                              <td>-</td>\r\n                              <td>-</td>\r\n                              <td>-</td>\r\n                              <td>-</td>\r\n                              <td>{{item?.Amount || 0.00}}</td>\r\n                              <td>-</td>\r\n                              <td>-</td>\r\n                              <td>-</td>\r\n                            </tr>\r\n                          }\r\n                          <!-- <tr *ngIf=\"(pnlFilters.holdings||[]).length && pnlFilters?.holdingsTotal\" class=\"highlighted\">\r\n                          <td class=\"text-center bold\"></td>\r\n                          <td class=\"bold\">{{pnlFilters?.holdingsTotal?.totalOpenQty |value:'1.0-0'}}</td>\r\n                          <td class=\"text-center bold\"></td>\r\n                          <td class=\"text-right bold\">{{pnlFilters?.holdingsTotal?.totalOpenAmount |value:'1.2-2'}}</td>\r\n                          <td class=\"bold\">{{pnlFilters?.holdingsTotal?.totalBuyQty |value:'1.0-0'}}</td>\r\n                          <td class=\"text-center bold\"></td>\r\n                          <td class=\"bold\">{{pnlFilters?.holdingsTotal?.totalSellQty |value:'1.0-0'}}</td>\r\n                          <td class=\"text-center bold\"></td>\r\n                          <td class=\"bold\">{{pnlFilters?.holdingsTotal?.totalNetQty |value:'1.0-0'}}</td>\r\n                          <td class=\"text-center bold\"></td>\r\n                          <td class=\"text-right bold\">{{pnlFilters?.holdingsTotal?.totalNetAmount |value:'1.2-2'}}</td>\r\n                          <td class=\"text-center bold\"></td>\r\n                          <td class=\"text-right bold\" [class.credit]=\"pnlFilters.holdingsTotal?.realizedPNL>0\"\r\n                            [class.debit]=\"pnlFilters.holdingsTotal?.realizedPNL<0\">{{Math.abs(pnlFilters.holdingsTotal?.realizedPNL)\r\n                          | value:'1.2-2'}}</td>\r\n                          <td class=\"text-right bold\" [class.credit]=\"pnlFilters.holdingsTotal?.unrealizedPNL>0\"\r\n                            [class.debit]=\"pnlFilters.holdingsTotal?.unrealizedPNL<0\">{{Math.abs(pnlFilters.holdingsTotal?.unrealizedPNL)\r\n                          | value:'1.2-2'}}</td>\r\n                        </tr> -->\r\n                        <!-- <tr class=\"highlighted\" *ngIf=\"pnlFilters.companyCode!='Cash'\">\r\n                        <th class=\"text-center\" colspan=\"12\">EXPENSES/CHARGES</th>\r\n                      </tr>\r\n                      <tr *ngFor=\"let pnl of (pnlFilters.expenses||[])\" [hidden]=\"pnlFilters.companyCode=='Cash'\">\r\n                        <td>{{pnl?.SECURITY}}</td>\r\n                        <td>{{pnl?.OpenQTY?(pnl?.OpenQTY |value:'1.0-0'):'-'}}</td>\r\n                        <td class=\"text-right\">{{pnl?.OpenQTY?(pnl?.OpenRate |value:'1.2-2'):'-'}}</td>\r\n                        <td class=\"text-right\">{{pnl?.OpenQTY?(pnl?.OpenValue |value:'1.2-2'):'-'}}</td>\r\n                        <td>{{pnl?.BuyQTY?(pnl?.BuyQTY |value:'1.0-0'):'-'}}</td>\r\n                        <td class=\"text-right\">{{pnl?.BuyQTY?(pnl?.BuyRate |value:'1.2-2'):'-'}}</td>\r\n                        <td>{{pnl?.SellQTY?(pnl?.SellQTY |value:'1.0-0'):'-'}}</td>\r\n                        <td class=\"text-right\">{{pnl?.SellQTY?(pnl?.SellRate |value:'1.2-2'):'-'}}</td>\r\n                        <td>{{pnl?.NetQTY?(pnl?.NetQTY |value:'1.0-0'):'-'}}</td>\r\n                        <td class=\"text-right\">{{pnl?.NetQTY?(pnl?.NetRate |value:'1.2-2'):'-'}}</td>\r\n                        <td class=\"text-right\">{{pnl?.NetQTY || pnl?.isExpense?(pnl?.NetAmount |value:'1.2-2'):'-'}}</td>\r\n                        <td class=\"text-right\" *ngIf=\"pnlFilters.companyCode=='Cash'\">\r\n                        {{pnl?.ClosePrice?(pnl?.ClosePrice |value:'1.2-2'):''}}</td>\r\n                        <td class=\"text-right\" [class.credit]=\"pnl?.realizedPNL>0\" [class.debit]=\"pnl?.realizedPNL<0\">{{pnl?.realizedPNL?(Math.abs(pnl?.realizedPNL)\r\n                        |value:'1.2-2'):'-'}}</td>\r\n                        <td class=\"text-right\" *ngIf=\"pnlFilters.companyCode=='Cash'\" [class.credit]=\"pnl?.Notional>0\"\r\n                          [class.debit]=\"pnl?.Notional<0\">{{pnl?.Notional?(Math.abs(pnl?.Notional)\r\n                        |value:'1.2-2'):'-'}}</td>\r\n                      </tr> -->\r\n                      <!-- <tr\r\n                      *ngIf=\"(pnlFilters.expenses||[]).length && pnlFilters?.expenseTotal && pnlFilters.companyCode!='Cash'\"\r\n                      class=\"highlighted\">\r\n                      <td class=\"text-center bold\">TOTAL EXPENSES</td>\r\n                      <td class=\"bold\">-</td>\r\n                      <td class=\"text-center bold\"></td>\r\n                      <td class=\"text-right bold\">-</td>\r\n                      <td class=\"bold\">-</td>\r\n                      <td class=\"text-center bold\"></td>\r\n                      <td class=\"bold\">-</td>\r\n                      <td class=\"text-center bold\"></td>\r\n                      <td class=\"bold\">-</td>\r\n                      <td class=\"text-center bold\"></td>\r\n                      <td class=\"text-right bold\">{{pnlFilters?.expenseTotal?.totalNetAmount |value:'1.2-2'}}</td>\r\n                      <td class=\"text-center bold\" *ngIf=\"pnlFilters.companyCode=='Cash'\"></td>\r\n                      <td class=\"text-right bold\" [class.credit]=\"pnlFilters.expenseTotal?.realizedPNL>0\"\r\n                        [class.debit]=\"pnlFilters.expenseTotal?.realizedPNL<0\">{{Math.abs(pnlFilters.expenseTotal?.realizedPNL)\r\n                      | value:'1.2-2'}}</td>\r\n                      <td class=\"text-right bold\" *ngIf=\"pnlFilters.companyCode=='Cash'\">-</td>\r\n                    </tr> -->\r\n                    @if (((pnlFilters.holdings||[]).length || (pnlFilters.expenses||[]).length) && pnlFilters?.overAllTotals) {\r\n                      <tr\r\n                        class=\"highlighted\">\r\n                        <td class=\"text-center bold\">TOTAL</td>\r\n                        <td class=\"bold\">{{pnlFilters?.overAllTotals?.totalOpenQty |value:'1.0-0'}}</td>\r\n                        <td class=\"text-center bold\"></td>\r\n                        <td class=\"text-right bold\">{{pnlFilters?.overAllTotals?.totalOpenAmount |value:'1.2-2'}}</td>\r\n                        <td class=\"bold\">{{pnlFilters?.overAllTotals?.totalBuyQty |value:'1.0-0'}}</td>\r\n                        <td class=\"text-center bold\"></td>\r\n                        <td class=\"bold\">{{pnlFilters?.overAllTotals?.totalSellQty |value:'1.0-0'}}</td>\r\n                        <td class=\"text-center bold\"></td>\r\n                        <td class=\"bold\">{{pnlFilters?.overAllTotals?.totalNetQty |value:'1.0-0'}}</td>\r\n                        <td class=\"text-center bold\"></td>\r\n                        <td class=\"text-right bold\">{{pnlFilters?.overAllTotals?.totalNetAmount |value:'1.2-2'}}</td>\r\n                        <td class=\"text-center bold\"></td>\r\n                        <td class=\"text-right bold\" [class.credit]=\"pnlFilters.overAllTotals?.realizedPNL>0\"\r\n                          [class.debit]=\"pnlFilters.overAllTotals?.realizedPNL<0\">\r\n                          {{Math.abs(pnlFilters.overAllTotals?.realizedPNL)\r\n                        | value:'1.2-2'}}</td>\r\n                        <td class=\"text-right bold\" [class.credit]=\"pnlFilters.overAllTotals?.unrealizedPNL>0\"\r\n                          [class.debit]=\"pnlFilters.overAllTotals?.unrealizedPNL<0\">\r\n                          {{Math.abs(pnlFilters.overAllTotals?.unrealizedPNL)\r\n                        | value:'1.2-2'}}</td>\r\n                      </tr>\r\n                    }\r\n                  </tbody>\r\n                </table>\r\n              }\r\n            </div>\r\n            <br><br>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>";

/***/ })

}]);