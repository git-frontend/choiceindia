(self["webpackChunkjiffy_upgraded"] = self["webpackChunkjiffy_upgraded"] || []).push([[3252],{

/***/ 23252:
/*!**************************************************************************************!*\
  !*** ./src/app/post-login-module/reports/contract-notes/contract-notes.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContractNotesComponent: () => (/* binding */ ContractNotesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _contract_notes_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contract-notes.component.html?ngResource */ 44596);
/* harmony import */ var _contract_notes_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contract-notes.component.scss?ngResource */ 41874);
/* harmony import */ var _contract_notes_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_contract_notes_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 27468);
/* harmony import */ var src_app_services_rest_reports_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/rest/reports.service */ 86452);
/* harmony import */ var src_app_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/shared-data/shared-data.service */ 46013);
/* harmony import */ var src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/utils/utils.service */ 89893);
/* harmony import */ var _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../assets/libs/esm-moment.min.js */ 29483);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 28460);
/* harmony import */ var _common_module_non_eq_sso_non_eq_sso_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common-module/non-eq-sso/non-eq-sso.component */ 67761);








/** Import Moment JS Library*/
// var moment: any = require();




let ContractNotesComponent = class ContractNotesComponent {
  constructor(rest, utils, shared) {
    this.rest = rest;
    this.utils = utils;
    this.shared = shared;
    this.contractNotes = [];
    this.dates = this.utils.getFiscalDateRange(0);
    let today = new Date();
    this.noteFilters = {
      fromDate: new Date(new Date().setDate(today.getDate() - 7)),
      toDate: today
    };
  }
  ngOnInit() {
    this.getContractNotes();
  }
  getContractNotes() {
    let momentFrom = new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_5__["default"](this.noteFilters.fromDate);
    let momentTo = new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_5__["default"](this.noteFilters.toDate);
    let dateDifference = parseInt(momentTo.diff(momentFrom, 'days'));
    let forkJoinList = [];
    let userId = this.utils.getUserId();
    forkJoinList.push(this.rest.getContractNotes({
      "ClientID": userId,
      "DateFilter": momentFrom.format('YYYY-MM-DD'),
      "Segment": ""
    }));
    for (let i = 0; i < dateDifference; i++) {
      let date = momentFrom.add(1, 'days').format('YYYY-MM-DD');
      forkJoinList.push(this.rest.getContractNotes({
        "ClientID": userId,
        "DateFilter": date,
        "Segment": ""
      }));
    }
    this.contractNotes = [];
    this.shared.isServiceHit = true;
    (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.forkJoin)(forkJoinList).subscribe(res => {
      (res || []).forEach((item, index) => {
        let date = Object.keys(item)[0];
        if (item[date].Status == 'Success' && item[date].Response && item[date].Response.length) {
          item[date].Response.forEach((contract, contractIndex) => {
            let fileName = contract.split('/');
            fileName = fileName[fileName.length - 1];
            let invoiceNo = item[date].Response[0].substring(0, item[date].Response[0].indexOf(".PDF")).split('_'); // fileName.split('.');
            console.log(invoiceNo, "invoiceNoinvoiceNo");
            invoiceNo = invoiceNo[invoiceNo.length - 1]; //invoiceNo[0].split('_')
            this.contractNotes.push({
              date: new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_5__["default"](date, 'YYYY-MM-DD').format('DD-MMM-YYYY'),
              group: (contract || '').indexOf('_Grp1_') > -1 ? 'Equity' : (contract || '').indexOf('_Grp2_') > -1 ? 'Commodity' : '',
              fileURL: contract,
              invoiceNo: invoiceNo
            });
          });
        }
      });
    }).add(() => {
      this.shared.isServiceHit = false;
    });
  }
  static {
    this.ctorParameters = () => [{
      type: src_app_services_rest_reports_service__WEBPACK_IMPORTED_MODULE_2__.ReportsService
    }, {
      type: src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_4__.UtilsService
    }, {
      type: src_app_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__.SharedDataService
    }];
  }
};
ContractNotesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-contract-notes',
  template: _contract_notes_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  imports: [_common_module_non_eq_sso_non_eq_sso_component__WEBPACK_IMPORTED_MODULE_6__.NonEqSsoComponent, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__.BsDatepickerModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule],
  styles: [(_contract_notes_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__metadata)("design:paramtypes", [src_app_services_rest_reports_service__WEBPACK_IMPORTED_MODULE_2__.ReportsService, src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_4__.UtilsService, src_app_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__.SharedDataService])], ContractNotesComponent);


/***/ }),

/***/ 41874:
/*!***************************************************************************************************!*\
  !*** ./src/app/post-login-module/reports/contract-notes/contract-notes.component.scss?ngResource ***!
  \***************************************************************************************************/
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
  font-size: 12px;
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
  padding: 5px;
  vertical-align: middle !important;
}
table tr.highlighted {
  background-color: #f5f5f5;
}
table tr.header {
  background-color: #f9f9f9;
}
table tr.header th.credit {
  color: #00B16B;
  font-weight: 500;
}
table tr.header th.debit {
  color: #EE404A;
  font-weight: 500;
}

.table-bordered tbody td.text-right,
table-bordered tbody th.text-right {
  text-align: right;
}
.table-bordered tbody td.text-center,
table-bordered tbody th.text-center {
  text-align: center;
}
.table-bordered tbody td.credit,
table-bordered tbody th.credit {
  color: #00B16B;
  font-weight: 500;
}
.table-bordered tbody td.debit,
table-bordered tbody th.debit {
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

table .btn-gradient {
  padding: 5px 10px;
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
}`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 44596:
/*!***************************************************************************************************!*\
  !*** ./src/app/post-login-module/reports/contract-notes/contract-notes.component.html?ngResource ***!
  \***************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\r\n<div class=\"clearfix\"></div>\r\n<section class=\"m-tb20 clearfix\">\r\n  <div class=\"col-md-12 m-tb20\">\r\n    <app-non-eq-sso></app-non-eq-sso>\r\n    <div class=\"card\">\r\n      <div class=\"card-block\">\r\n        <h4 class=\"page-title\">Contract Notes</h4>\r\n        <div class=\"row optionfuture\">\r\n          <div class=\"col-lg-4 col-md-3 col-sm-5 col-xs-12\">\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\">\r\n                <label class=\"filter-label\">From Date</label>\r\n              </div>\r\n              <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-12\">\r\n                <label class=\"custom-input\">\r\n                  <input type=\"text\" id=\"fromDate\" [minDate]=\"dates.lastYear\" [maxDate]=\"dates.max\" class=\"form-control\"\r\n                    name=\"fromDate\" #fromDate=\"ngModel\" bsDatepicker [bsConfig]=\"{ dateInputFormat: 'DD-MMM-YYYY' }\"\r\n                    [(ngModel)]=\"noteFilters.fromDate\">\r\n                  </label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-3 col-sm-5 col-xs-12\">\r\n              <div class=\"row\">\r\n                <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\">\r\n                  <label class=\"filter-label\">To Date</label>\r\n                </div>\r\n                <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-12\">\r\n                  <label class=\"custom-input\">\r\n                    <input type=\"text\" id=\"toDate\" class=\"form-control\" [minDate]=\"noteFilters.fromDate\"\r\n                      [maxDate]=\"dates.max\" name=\"toDate\" #toDate=\"ngModel\" [(ngModel)]=\"noteFilters.toDate\" bsDatepicker\r\n                      [bsConfig]=\"{ dateInputFormat: 'DD-MMM-YYYY' }\">\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-lg-1 col-md-3 col-sm-2 col-xs-12\">\r\n                <button (click)=\"getContractNotes()\" scrollTo class=\"btn btn-gradient\">GO</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card\">\r\n          <div class=\"card-block content-box\">\r\n            <div class=\"parentHorizontalTab\">\r\n              <div class=\"resp-tabs-container hor_1\">\r\n                <img class=\"loader\" src=\"assets/images/loader.gif\"\r\n                  [hidden]=\"contractNotes.length>0 || !shared.isServiceHit\" />\r\n                  <div class=\"text-center no-data-container\" [hidden]=\"contractNotes.length>0 || shared.isServiceHit\">\r\n                    <img src=\"{{shared.serverImageUrl + 'order-no-result.png'}}\" width=\"150\" height=\"108\" alt=\"No Result\">\r\n                    <h3>No Contract Notes Available</h3>\r\n                  </div>\r\n                  <div class=\"table-responsive table-custom\">\r\n                    @if (contractNotes.length) {\r\n                      <table class=\"table table-hover text-uppercase table-bordered\">\r\n                        <thead>\r\n                          <tr>\r\n                            <th class=\"text-center\">Sr. No</th>\r\n                            <th class=\"text-center\">Date</th>\r\n                            <th class=\"text-center\">Group</th>\r\n                            <th class=\"text-center\">GST Invoice Number</th>\r\n                            <th class=\"text-center\">Action</th>\r\n                          </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                          @for (item of contractNotes; track item; let i = $index) {\r\n                            <tr>\r\n                              <td class=\"text-center\">{{i+1}}</td>\r\n                              <td class=\"text-center\">{{item.date}}</td>\r\n                              <td class=\"text-center\">{{item.group}}</td>\r\n                              <td class=\"text-center\">{{item.invoiceNo}}</td>\r\n                              <td class=\"text-center\"><a target=\"_blank\" [href]=\"item.fileURL\"><button\r\n                              class=\"btn btn-sm btn-gradient\">Download</button></a>\r\n                            </td>\r\n                          </tr>\r\n                        }\r\n                      </tbody>\r\n                    </table>\r\n                  }\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>";

/***/ })

}]);