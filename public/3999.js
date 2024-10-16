(self["webpackChunkjiffy_upgraded"] = self["webpackChunkjiffy_upgraded"] || []).push([[3999],{

/***/ 33999:
/*!*************************************************************************!*\
  !*** ./src/app/tools-module/event-calendar/event-calendar.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventCalendarComponent: () => (/* binding */ EventCalendarComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _event_calendar_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-calendar.component.html?ngResource */ 12073);
/* harmony import */ var _event_calendar_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-calendar.component.scss?ngResource */ 69822);
/* harmony import */ var _event_calendar_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_event_calendar_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/utils/utils.service */ 89893);
/* harmony import */ var _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/libs/esm-moment.min.js */ 29483);
/* harmony import */ var _services_rest_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/rest/common.service */ 18056);
/* harmony import */ var _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/seo/seo.service */ 44897);
/* harmony import */ var _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/shared-data/shared-data.service */ 46013);
/* harmony import */ var _pipes_value_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/value.pipe */ 50615);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 33380);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 28460);







/** Import Moment JS Library*/
// var moment: any = require();







/** Declaration for NodeJS Require*/
// declare var require: any;
// var moment: any = require('../../../assets/libs/esm-moment.min.js');
let EventCalendarComponent = class EventCalendarComponent {
  constructor(utils, activeRoute, commonService, location, shared, seo) {
    this.utils = utils;
    this.activeRoute = activeRoute;
    this.commonService = commonService;
    this.location = location;
    this.shared = shared;
    this.seo = seo;
    let fiscalDateRange = this.utils.getFiscalDateRange(0);
    this.events = {
      lBoardMeetings: {
        key: 'lBoardMeetings',
        value: 'Board Meeting',
        data: []
      },
      lAGMEGM: {
        key: 'lAGMEGM',
        value: 'AGM/EGM',
        data: []
      },
      lBonus: {
        key: 'lBonus',
        value: 'Bonus',
        data: []
      },
      lDividend: {
        key: 'lDividend',
        value: 'Dividends',
        data: []
      },
      lRights: {
        key: 'lRights',
        value: 'Rights',
        data: []
      },
      lSplits: {
        key: 'lSplits',
        value: 'Splits',
        data: []
      }
    };
    this.seoContent = {
      lBoardMeetings: "<h1>BOARD MEETING</h1><p>A Board Meeting is a gathering of the Board of Directors of a company. This meeting takes place in order to discuss issues pertaining to the company, evaluate its performance, monitor management, review strategic matters and announce new plans; all these factors will determine the value of the company in the future.</p><h2 class='text-left'>Forthcoming Board Meetings</h2><p>This section will show you the list of the upcoming Board Meeting dates of companies. Media plays an active role in relaying every significant announcement or development which has a direct bearing on the stocks.</p><h2 class='text-left'>Why Is It Important To Keep Track Of Board Meeting Dates?</h2><ol> <li>It is important to keep a track of the outcome of these meetings as they tend to have an impact on respective stocks.</li><li>With the help of a list of the latest Board Meeting, traders/investors get an opportunity to plan their portfolio. </li><li>While the value of the information shared during board meetings is not limited to a specific category; it is important to know that as compared to long-term investors, board meetings are extremely important to short-term investors. </li><li>The conducting of a company board meeting within scheduled intervals helps build more transparency and provides clarity to traders/investors which eventually help them make better investment decisions. </li></ol>",
      lAGMEGM: "<h1>UPCOMING AGM/EGM</h1><p>AGM stands for Annual General Meeting and EGM stands for Extraordinary General Meeting. AGM is a mandatory yearly meeting convened by the Board to talk about the company’s performance, profitability and future plans. EGM is held when business matters need to be discussed and resolved by company with immediate effect.</p><p>This section shows the list of upcoming AGM and EGM meetings announced by the company.</p><h2 class='text-left'>Benefits of Annual General Meetings for Shareholders</h2><ul> <li>One can get first-hand information regarding the company’s direction</li><li>It invariably has an effect on the company’s stock price, so the Trader / Investor can plan their trades or investments</li><li>Most important announcements are kept for the AGM. The trader can find out if the management is aligned with shareholder's interests</li><li>For every positive and progressive development, the company’s stock witnesses a significant movement simultaneously</li></ul><h2 class='text-left'>How to use this section?</h2><ul> <li>Goto Tools from the website menu. Scroll to Calendars -> Event Calendar</li><li>From the Event Calendar page select AGM/EGM</li><li>Select from This Year - Today - Tomorrow - This Week - Next Week - Custom</li><li>In Custom you can enter the Date Range from the Date box</li></ul><h2 class='text-left'>AGM Meeting Dates</h2><p>AGM meeting dates help you to plan your investments / trades as important announcements are made at AGMs.</p>",
      lBonus: "<h1>BONUS SHARES " + new Date().getFullYear() + "</h1><p>Bonus Shares are additional shares offered to the shareholders of the company. The company can opt to give out its accumulated earnings in the form of Bonus Shares instead of Dividends.</p><h2 class='text-left'>Upcoming Bonus Shares " + new Date().getFullYear() + "</h2><p>This section lists the companies likely to declare Bonus Shares in " + new Date().getFullYear() + ". It will dynamically be updated as and when the announcement is made. The ratio of Bonus Shares is given alongside the date of the announcement. </p><h2 class='text-left'>Why Are Companies Issuing Bonus Shares?</h2><ul> <li><strong>To increase retail participation</strong> : When the price of a share is high it becomes difficult for retail investors to purchase shares of a particular company. When the number of shares increases the price goes down making it accessible to retail traders. </li><li><strong>To increase liquidity base</strong> : Issuing Bonus Shares increases the number of outstanding shares. This leads to higher participation of traders, which in turn increases the liquidity of the shares.</li><li><strong>To reward investors</strong> : Rewarding the investors for their confidence and commitment to the company, which also helps in boosting the investor sentiment towards the company.</li></ul>",
      lDividend: "<h1>HIGHEST DIVIDEND PAYING STOCKS</h1><p>Dividend is sharing profit with shareholders by a company. The Dividend section will provide the list of companies who have announced dividends for their shareholders. Investors and traders will be able to track the highest dividend paying stocks to modify their portfolios accordingly. You can also use the customize option by modifying your date to understand which are the best dividend paying stocks for the long-term.</p><h2 class='text-left'>Top Dividend Paying Stocks</h2><p>You can browse the Dividends section and view the Dividend (%) to understand which companies shared the best dividend paying stocks for the current year.</p><h2 class='text-left'>How Do Dividends Work?</h2><ul> <li>You purchase a certain number of shares. For example, let’s say you own 100 shares of WIPRO stock and WIPRO announced a quarterly dividend payout on 14th January, " + new Date().getFullYear() + " of Rs.50 per equity share to all shareholders.</li><li>Multiply the dividend by the number of shares. In this case: 50*100 i.e., you receive a quarterly payment of Rs.500.</li><li>The company usually sends a cheque or makes a payment into your brokerage account.</li><li>Dividend Reinvestment Programs or DRIPs are offered by companies if you would like to reinvest the payout back into company stock.</li></ul>",
      lRights: "<h1>RIGHTS OFFERING</h1><p>Rights issue or rights offering are shares issued by a company for its shareholders. Only existing shareholders have the right to subscribe to these shares. Right Issue is offered when a company wants to raise capital for expansion.</p><h2 class='text-left'>Upcoming Rights Issue</h2><p>This section provides an updated list of the upcoming rights issue announced by the companies. The information can help investors modify their portfolio or increase their investments in particular companies.</p><h2 class='text-left'>Benefits of Rights Issue for shareholders?</h2><ul> <li>Rights Issue are offered to existing shareholders at a discounted price</li><li>Shareholders retain the control of the company since Rights Issue are only offered to existing shareholders</li><li>The value of current holdings or shares are not diluted. The perceived dip in the value of the share is compensated by offering new shares at a discounted price</li><li>It enhances company brand image and perception. This eventually helps increase the value of the existing shares and by extension the shareholder value</li></ul>",
      lSplits: "<h1>UPCOMING STOCK SPLITS IN " + new Date().getFullYear() + "</h1><p>Splits are a company’s way of increasing outstanding shares while lowering the price of a stock. Share Splits make the stock within the reach of smaller investors.</p><h2 class='text-left'>Upcoming Stock Splits</h2><p>In this section you can view the upcoming share splits as well as the recent stock splits announcements and even modify your search criteria by choosing a custom date range. The value of the share before and after the split will be provided alongside.</p><h2 class='text-left'>Differences between Bonus Shares and Share Split</h2><ul> <li>Bonus Share is an additional share offered and Share Split is when the share is divided</li><li>Bonus Shares are available to existing shareholders whereas existing and new investors can benefit from the Share Split</li><li>Face value of the share in Stock Splits is reduced to half while in Bonus Shares the face value remains the same </li></ul><h2 class='text-left'>Similarities between Bonus Shares and Share Split</h2><ul> <li>Bonus Shares and Stock Splits both increase the quantity of shares</li><li>Bonus Shares and Stock Splits do not change the fundamentals of the company</li></ul>"
    };
    this.filterRanges = {
      'all': {
        min: new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_3__["default"]().startOf('year').startOf('day'),
        max: new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_3__["default"]().endOf('year').endOf('day')
      },
      'yesterday': {
        min: new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_3__["default"]().subtract(1, 'days').startOf('day'),
        max: new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_3__["default"]().subtract(1, 'days').endOf('day')
      },
      'today': {
        min: new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_3__["default"]().startOf('day'),
        max: new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_3__["default"]().startOf('day').endOf('day')
      },
      'tommorow': {
        min: new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_3__["default"]().add(1, 'days').startOf('day'),
        max: new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_3__["default"]().add(1, 'days').endOf('day')
      },
      'thisWeek': {
        min: new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_3__["default"]().startOf('week').startOf('day'),
        max: new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_3__["default"]().endOf('week').endOf('day')
      },
      'nextWeek': {
        min: new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_3__["default"]().startOf('week').add(7, 'days').startOf('day'),
        max: new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_3__["default"]().endOf('week').add(7, 'days').endOf('day')
      },
      'fiscal': {
        min: new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_3__["default"](fiscalDateRange.min).startOf('day'),
        max: new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_3__["default"](new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_3__["default"](fiscalDateRange.max).year() + 1 + '-03-31').endOf('day')
      },
      'custom': {
        min: new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_3__["default"]().startOf('year'),
        max: new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_3__["default"]().endOf('year')
      },
      'fiscalToDate': {
        min: new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_3__["default"](fiscalDateRange.min).startOf('day').toDate(),
        max: new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_3__["default"](new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_3__["default"](fiscalDateRange.max).year() + 1 + '-03-31').endOf('day').toDate()
      }
    };
    this.config = {
      activeFilter: {
        name: 'thisWeek',
        min: this.filterRanges['thisWeek'].min,
        max: this.filterRanges['thisWeek'].max,
        dates: [this.filterRanges['thisWeek'].min.toDate(), this.filterRanges['thisWeek'].max.toDate()]
      },
      eventCategories: [{
        key: 'lBoardMeetings',
        value: 'Board Meetings',
        slug: 'board-meetings',
        dateKey: 'StartDate',
        checked: true
      }, {
        key: 'lAGMEGM',
        value: 'AGM/EGM',
        slug: 'agm-egm',
        dateKey: 'Date',
        checked: true
      }, {
        key: 'lBonus',
        value: 'Bonus',
        slug: 'upcoming-bonus-shares',
        dateKey: 'ExBonus',
        checked: true
      }, {
        key: 'lDividend',
        value: 'Dividends',
        slug: 'highest-dividend-paying-stocks',
        dateKey: 'ExDividendDate',
        checked: true
      }, {
        key: 'lRights',
        value: 'Rights',
        slug: 'rights-issue-shares',
        dateKey: 'ExRightsDate',
        checked: true
      }, {
        key: 'lSplits',
        value: 'Splits',
        slug: 'upcoming-stock-splits',
        dateKey: 'SplitDate',
        checked: true
      }],
      cssClasses: {
        sortAscending: 'icon-angle-down',
        sortDescending: 'icon-angle-up',
        pagerLeftArrow: 'icon-angle-left',
        pagerRightArrow: 'icon-angle-right',
        pagerPrevious: 'icon-angle-left',
        pagerNext: 'icon-angle-right'
      },
      activeTab: {
        key: 'lBoardMeetings'
      }
    };
    this.activeRoute.params.subscribe(params => {
      let eventName = (params.segment || '').toLowerCase().trim();
      let eventObject = this.config.eventCategories.find(event => event.slug == eventName) || this.config.eventCategories[0];
      this.activateSegment(eventObject, true);
    });
  }
  ngOnInit() {}
  fetchEvents(request) {
    this.config.isServiceHit = true;
    this.commonService.getEventCalendar(request).subscribe(res => {
      if (res.Status == "Success" && res.Response) {
        this.events = this.processEventCalendar(res.Response);
      }
    }, err => {}).add(() => this.config.isServiceHit = false);
  }
  processEventCalendar(data) {
    let validEvents = this.config.eventCategories;
    let categories = {
      lBoardMeetings: {
        key: 'lBoardMeetings',
        value: 'Board Meeting',
        data: []
      },
      lAGMEGM: {
        key: 'lAGMEGM',
        value: 'AGM/EGM',
        data: []
      },
      lBonus: {
        key: 'lBonus',
        value: 'Bonus',
        data: []
      },
      lDividend: {
        key: 'lDividend',
        value: 'Dividends',
        data: []
      },
      lRights: {
        key: 'lRights',
        value: 'Rights',
        data: []
      },
      lSplits: {
        key: 'lSplits',
        value: 'Splits',
        data: []
      }
    };
    data.forEach((event, index) => {
      let companyURL = '/instrument/equity/' + (event.SecDesc || '').toLowerCase().replace(/[\s|\&|\%]/g, '').trim() + '/' + event.SegmentID + '/' + event.Token;
      validEvents.forEach((eventType, evIndex) => {
        if (event[eventType.key]) {
          let finalEvent = {
            ...event,
            ...event[eventType.key]
          };
          finalEvent.momentDate = new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_3__["default"](finalEvent[eventType.dateKey]);
          finalEvent.companyURL = companyURL;
          finalEvent[eventType.dateKey] = finalEvent.momentDate.valueOf();
          finalEvent.EventDate = new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_3__["default"](finalEvent.EventDate).valueOf();
          finalEvent.RecordDate ? finalEvent.RecordDate = new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_3__["default"](finalEvent.RecordDate).valueOf() : '';
          finalEvent.AnnouncementDate ? finalEvent.AnnouncementDate = new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_3__["default"](finalEvent.AnnouncementDate).valueOf() : '';
          delete finalEvent[eventType.key];
          finalEvent.eventType = eventType.value;
          categories[eventType.key].data.push(finalEvent);
        }
      });
    });
    return categories;
  }
  activateSegment(item, isForce) {
    if (item.key != this.config.activeTab.key || isForce) {
      this.config.activeTab = item;
      this.filterCalendar(this.config.activeFilter.name, isForce);
      this.location.replaceState('/tools/event-calendar/' + item.slug);
      this.seo.setMeta(item.slug);
    }
  }
  filterCalendar(key, isForce) {
    if (isForce || this.filterRanges[key] && this.config.activeFilter.name != key && key != 'custom') {
      this.config.activeFilter = {
        name: key,
        min: this.filterRanges[key].min,
        max: this.filterRanges[key].max,
        dates: [key == 'custom' ? this.config.activeFilter.dates[0] : this.filterRanges[key].min.toDate(), key == 'custom' ? this.config.activeFilter.dates[1] : this.filterRanges[key].max.toDate()]
      };
      let request = {
        "SegmentID": 1,
        "Token": 0,
        "MonthYear": "",
        "Purpose": "",
        "FromDate": new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_3__["default"](this.config.activeFilter.dates[0]).format('YYYY-MM-DD'),
        "ToDate": new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_3__["default"](this.config.activeFilter.dates[1]).format('YYYY-MM-DD')
      };
      this.fetchEvents(request);
    } else if (key == 'custom') {
      this.config.activeFilter = {
        name: key,
        min: this.filterRanges[key].min,
        max: this.filterRanges[key].max,
        dates: [this.config.activeFilter.dates[0], this.config.activeFilter.dates[1]]
      };
    }
  }
  navigateToOpenFreeAccount() {
    window.open(`${this.utils.getChoiceindiaBaseURL()}/open-free-demat-account?utm_source=choice-finx-web&utm_medium=open_demat_account_banner&utm_campaign=choice_finx_demat_banner`, "_self");
  }
  static {
    this.ctorParameters = () => [{
      type: src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_2__.UtilsService
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute
    }, {
      type: _services_rest_common_service__WEBPACK_IMPORTED_MODULE_4__.CommonService
    }, {
      type: _angular_common__WEBPACK_IMPORTED_MODULE_9__.Location
    }, {
      type: _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_6__.SharedDataService
    }, {
      type: _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_5__.SeoService
    }];
  }
};
EventCalendarComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-event-calendar',
  template: _event_calendar_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  imports: [ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__.BsDatepickerModule, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_13__.NgxDatatableModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe, _pipes_value_pipe__WEBPACK_IMPORTED_MODULE_7__.ValuePipe],
  styles: [(_event_calendar_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__metadata)("design:paramtypes", [src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_2__.UtilsService, _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute, _services_rest_common_service__WEBPACK_IMPORTED_MODULE_4__.CommonService, _angular_common__WEBPACK_IMPORTED_MODULE_9__.Location, _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_6__.SharedDataService, _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_5__.SeoService])], EventCalendarComponent);


/***/ }),

/***/ 69822:
/*!**************************************************************************************!*\
  !*** ./src/app/tools-module/event-calendar/event-calendar.component.scss?ngResource ***!
  \**************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ 8564);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 98557);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*Bootstrap Override*/
/*Custom variables*/
/*Icons Variables*/
/*Responsive screen width*/
table th,
table td {
  vertical-align: middle;
}
table span + span:before {
  content: "|";
  margin: 0px 5px;
}
table th.merge-header {
  background: #efefef;
}

@media (max-width: 767px) {
  .table-bordered {
    border: 0px;
  }
}

@media (max-width: 767px) {
  .table-bordered > thead > tr > th,
  .table-bordered > thead > tr > td,
  .table-bordered > tbody > tr > th,
  .table-bordered > tbody > tr > td,
  .table-bordered > tfoot > tr > th,
  .table-bordered > tfoot > tr > td {
    border: 0px;
  }
}

.card-block {
  min-height: 300px;
}
.card-block ul.pagination li {
  cursor: pointer;
}

.pagination > li > a,
.pagination > li > span {
  color: #004393;
  border: 1px solid #004393;
}

.pagination > .active > a,
.pagination > .active > a:hover,
.pagination > .active > a:focus,
.pagination > .active > span,
.pagination > .active > span:hover,
.pagination > .active > span:focus {
  z-index: 3;
  color: #ffffff;
  cursor: default;
  background-color: #004393;
  border-color: #004393;
}

.table > thead > tr > th,
.table > thead > tr > td,
.table > tbody > tr > th,
.table > tbody > tr > td,
.table > tfoot > tr > th,
.table > tfoot > tr > td {
  padding: 8px 20px;
}

.dropdown-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
}
.dropdown-card .dropdown-wrapper {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.dropdown-card .dropdown-wrapper .filter-dropdown + .filter-dropdown {
  margin-left: 8px;
}
.dropdown-card .right-icons button {
  text-align: center;
  padding: 0 !important;
  border-radius: 0;
  font-size: 26px;
  width: 75px;
  height: 48px;
  background: #faecef;
  border-color: #faecef;
}
.dropdown-card .right-icons button i {
  display: block;
  background-image: linear-gradient(to right, #ffc174 0, #fe616e 100%);
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
}

.checkbox-button {
  cursor: pointer;
  margin-bottom: 15px;
  display: flex;
}
.checkbox-button:last-child {
  margin-bottom: 0px;
}
.checkbox-button input[type=checkbox],
.checkbox-button input[type=radio] {
  font-size: 16px;
  line-height: 1.5;
  padding: 11px 23px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0;
  outline: 0;
  padding: 0;
  background-color: transparent;
  opacity: 0;
  position: absolute;
  width: auto;
}
.checkbox-button input[type=checkbox]:checked + .checkbox-button__control:after,
.checkbox-button input[type=radio]:checked + .checkbox-button__control:after {
  content: "";
  display: block;
  position: absolute;
  top: 2px;
  left: 2px;
  width: 10px;
  border-radius: 2px;
  height: 10px;
  background-image: linear-gradient(to right, #ffc174 0%, #fe616e 100%);
}
.checkbox-button .checkbox-button__control {
  position: relative;
  display: inline-block;
  width: 18px;
  border-radius: 2px;
  height: 18px;
  padding: 0.4rem;
  margin-right: 2px;
  vertical-align: top;
  background-color: inherit;
  border: 2px solid #F4F3F8;
  vertical-align: middle;
}
.checkbox-button .checkbox-button__label {
  display: inline-block;
  vertical-align: middle;
  font-size: 12px;
  color: #797979;
  font-weight: normal;
  width: calc(100% - 25px);
  margin-left: 5px;
  word-break: break-all;
}
.checkbox-button .checkbox-button__label.selected {
  color: #EE404A;
}

div[dropdown] {
  position: relative;
}
div[dropdown] button[dropdown-open] {
  border: 0;
  background: #ffffff;
  color: #797979;
  padding: 12px 15px;
  font-size: 14px;
  line-height: 10px;
  border: 1px solid #F4F3F8;
  border-radius: 5px;
  box-shadow: 0px 0px 50px 0px rgba(169, 172, 189, 0.15);
}
div[dropdown] button[dropdown-open] i {
  font-size: 20px;
  vertical-align: middle;
}
div[dropdown].open button[dropdown-open] {
  background-image: linear-gradient(to right, #ffc174 0%, #fe616e 100%);
  color: #ffffff;
}
div[dropdown] ul.dropdown-menu.study-list {
  box-shadow: 0 0 50px 0 rgba(169, 172, 182, 0.5);
  min-width: 250px;
  max-height: 300px;
  overflow: scroll;
  overflow-x: hidden;
  border: 1px solid #F4F3F8;
  border-top: 0;
  padding: 0;
  border-radius: 0;
}
div[dropdown] ul.dropdown-menu.study-list > li {
  padding: 5px 10px;
  color: #797979;
  font-weight: normal;
  font-size: 12px;
  text-align: left;
  line-height: 20px;
  border-top: 1px solid #F4F3F8;
}
div[dropdown] ul.dropdown-menu.study-list > li:hover {
  color: #000000;
}
div[dropdown] ul.dropdown-menu.study-list > li > label {
  margin: 0;
}
div[dropdown] ul.dropdown-menu.study-list > li i {
  font-size: 25px;
  vertical-align: middle;
  margin-right: 5px;
}
div[dropdown] ul.dropdown-menu.study-list > li > button.clear-all {
  padding: 0 5px;
  width: 100%;
  background: #ffffff;
  font-size: 12px;
  border: 0;
  border-radius: 0;
  font-weight: bold;
}

.flex {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 12px;
}
.flex .flex-item {
  width: 48%;
}
@media (max-width: 992px) {
  .flex .flex-item {
    width: 100%;
  }
}
.flex .flex-item .sub-flex {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
}
.flex .flex-item .sub-flex .sub-flex-item {
  width: 49%;
}
@media (max-width: 767px) {
  .flex .flex-item .sub-flex .sub-flex-item {
    width: 100%;
  }
}
.flex .flex-item .sub-flex .sub-flex-item .custom-input {
  width: 70%;
  margin-left: 10px;
}

.pagination {
  display: inline-block;
  padding-left: 0;
  border-radius: 4px;
  margin-top: 0;
  margin-bottom: 10px;
}
.pagination > li {
  display: inline;
}
.pagination > li:first-child > span {
  margin-left: 0;
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;
}
.pagination > li > span {
  position: relative;
  float: left;
  padding: 6px 12px;
  line-height: 1.428571429;
  text-decoration: none;
  background-color: #ffffff;
  font-size: 12px;
}
.pagination > li:last-child > span {
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
}
@media (max-width: 767px) {
  .pagination {
    display: flex;
    overflow-x: auto;
    padding-bottom: 12px;
  }
  .pagination > li {
    display: contents;
  }
  .pagination > li > span {
    white-space: nowrap;
  }
}

@media (max-width: 767px) {
  .overflow-hidden {
    overflow: hidden;
  }
}

.nav-tabs {
  display: flex;
}

.seo-section {
  background: inherit;
}
.seo-section p strong {
  color: #333333;
}`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 12073:
/*!**************************************************************************************!*\
  !*** ./src/app/tools-module/event-calendar/event-calendar.component.html?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<section class=\"overflow-hidden\">\r\n  <div class=\"col-md-12 m-tb20\">\r\n    <div class=\"card\">\r\n      <div class=\"card-block\">\r\n        <img class=\"loader\" src=\"assets/images/loader.gif\" [hidden]=\"!shared.isServiceHit\" />\r\n        <ul class=\"nav nav-tabs hor_1 mb-30 wtd100 reset\">\r\n          @for (item of config.eventCategories; track item) {\r\n            <li [class.active]=\"config?.activeTab?.key==item.key\"\r\n              (click)=\"activateSegment(item)\">\r\n              <a>{{item?.value}}</a>\r\n            </li>\r\n          }\r\n        </ul>\r\n        <div class=\"mb-20 resp-tabs-container hor_1 reset\">\r\n          <div class=\"flex\">\r\n            <div class=\"flex-item\">\r\n              <ul class=\"pagination mb25\">\r\n                <li class=\"ripple\" [class.active]=\"config?.activeFilter?.name=='all'\" (click)=\"filterCalendar('all')\">\r\n                  <span>This Year</span>\r\n                </li>\r\n                <li class=\"ripple\" [class.active]=\"config?.activeFilter?.name=='today'\" (click)=\"filterCalendar('today')\">\r\n                  <span>Today</span>\r\n                </li>\r\n                <li class=\"ripple\" [class.active]=\"config?.activeFilter?.name=='tommorow'\"\r\n                  (click)=\"filterCalendar('tommorow')\">\r\n                  <span>Tomorrow</span>\r\n                </li>\r\n                <li class=\"ripple\" [class.active]=\"config?.activeFilter?.name=='thisWeek'\"\r\n                  (click)=\"filterCalendar('thisWeek')\">\r\n                  <span>This Week</span>\r\n                </li>\r\n                <li class=\"ripple\" [class.active]=\"config?.activeFilter?.name=='nextWeek'\"\r\n                  (click)=\"filterCalendar('nextWeek')\">\r\n                  <span>Next Week</span>\r\n                </li>\r\n                <li class=\"ripple\" [class.active]=\"config?.activeFilter?.name=='custom'\"\r\n                  (click)=\"filterCalendar('custom')\">\r\n                  <span>Custom</span>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n            @if (config.activeFilter?.name==='custom') {\r\n              <div class=\"flex-item\">\r\n                <div class=\"sub-flex\">\r\n                  <div class=\"sub-flex-item\">\r\n                    <label class=\"filter-label\">Date Range</label>\r\n                    <label class=\"custom-input\">\r\n                      <input type=\"text\" id=\"fromDate\" [minDate]=\"activeFilter?.min\" [maxDate]=\"activeFilter?.max\"\r\n                        class=\"form-control\" name=\"fromDate\" #fromDate=\"ngModel\" bsDaterangepicker\r\n                        [bsConfig]=\"{ rangeInputFormat : 'DD-MMM-YYYY', rangeSeparator :' To ' }\"\r\n                        [(ngModel)]=\"config.activeFilter.dates\">\r\n                      </label>\r\n                    </div>\r\n                    <div class=\"sub-flex-item\">\r\n                      <button (click)=\"filterCalendar('custom', true)\" class=\"btn btn-gradient\">GO</button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              }\r\n            </div>\r\n            @if (config?.activeTab?.key=='lBoardMeetings') {\r\n              <div class=\"clearfix\">\r\n                @if (!config.isServiceHit) {\r\n                  <ngx-datatable #datatable class=\"material\" [cssClasses]=\"config.cssClasses\"\r\n                    [columnMode]=\"'force'\" [rows]=\"events.lBoardMeetings.data\" [footerHeight]=\"50\" [limit]=\"10\"\r\n                    [reorderable]=\"false\" [headerHeight]=\"'auto'\" [scrollbarH]=\"true\" [rowHeight]=\"'auto'\">\r\n                    <ngx-datatable-column [width]=\"220\" name=\"Company Name\" prop=\"SecName\" [resizeable]=\"false\">\r\n                      <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                        <div class=\"text-left\"><a [routerLink]=\"[row.companyURL]\">{{row.SecName ||row.SecDesc}}</a>\r\n                      </div>\r\n                    </ng-template>\r\n                  </ngx-datatable-column>\r\n                  <ngx-datatable-column name=\"Meeting Date\" prop=\"StartDate\" [resizeable]=\"false\">\r\n                    <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                      <div class=\"text-right\">{{row.StartDate|date:'dd-MMM-yyyy'}}</div>\r\n                    </ng-template>\r\n                  </ngx-datatable-column>\r\n                  <ngx-datatable-column name=\"Agenda\" prop=\"Agenda\" [resizeable]=\"false\" [sortable]=\"false\">\r\n                    <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                      <div class=\"text-right\">{{row.Agenda}}</div>\r\n                    </ng-template>\r\n                  </ngx-datatable-column>\r\n                </ngx-datatable>\r\n              }\r\n            </div>\r\n          }\r\n\r\n          @if (config?.activeTab?.key=='lAGMEGM') {\r\n            <div class=\"clearfix\">\r\n              @if (!config.isServiceHit) {\r\n                <ngx-datatable #datatable class=\"material\" [cssClasses]=\"config.cssClasses\"\r\n                  [columnMode]=\"'force'\" [rows]=\"events.lAGMEGM.data\" [footerHeight]=\"50\" [limit]=\"10\" [reorderable]=\"false\"\r\n                  [headerHeight]=\"'auto'\" [scrollbarH]=\"true\" [rowHeight]=\"'auto'\">\r\n                  <ngx-datatable-column name=\"Company Name\" prop=\"SecName\" [resizeable]=\"false\">\r\n                    <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                      <div class=\"text-left\"><a [routerLink]=\"[row.companyURL]\">{{row.SecName ||row.SecDesc}}</a>\r\n                    </div>\r\n                  </ng-template>\r\n                </ngx-datatable-column>\r\n                <ngx-datatable-column name=\"Announcement Date\" prop=\"Date\" [resizeable]=\"false\">\r\n                  <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                    <div class=\"text-right\">{{row.Date|date:'dd-MMM-yyyy'}}</div>\r\n                  </ng-template>\r\n                </ngx-datatable-column>\r\n                <ngx-datatable-column name=\"Agenda\" prop=\"Agenda\" [resizeable]=\"false\" [sortable]=\"false\">\r\n                  <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                    <div class=\"text-right\">{{row.Agenda +'('+row.Purpose+')'}}</div>\r\n                  </ng-template>\r\n                </ngx-datatable-column>\r\n              </ngx-datatable>\r\n            }\r\n          </div>\r\n        }\r\n\r\n        @if (config?.activeTab?.key=='lBonus') {\r\n          <div class=\"clearfix\">\r\n            @if (!config.isServiceHit) {\r\n              <ngx-datatable #datatable class=\"material\" [cssClasses]=\"config.cssClasses\"\r\n                [columnMode]=\"'force'\" [rows]=\"events.lBonus.data\" [footerHeight]=\"50\" [limit]=\"10\" [reorderable]=\"false\"\r\n                [headerHeight]=\"'auto'\" [scrollbarH]=\"true\" [rowHeight]=\"'auto'\">\r\n                <ngx-datatable-column [width]=\"220\" name=\"Company Name\" prop=\"SecName\" [resizeable]=\"false\">\r\n                  <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                    <div class=\"text-left\"><a [routerLink]=\"[row.companyURL]\">{{row.SecName ||row.SecDesc}}</a>\r\n                  </div>\r\n                </ng-template>\r\n              </ngx-datatable-column>\r\n              <ngx-datatable-column name=\"Bonus Date\" prop=\"ExBonus\" [resizeable]=\"false\">\r\n                <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                  <div class=\"text-right\">{{row.ExBonus|date:'dd-MMM-yyyy'}}</div>\r\n                </ng-template>\r\n              </ngx-datatable-column>\r\n              <ngx-datatable-column name=\"Record Date\" prop=\"RecordDate\" [resizeable]=\"false\">\r\n                <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                  <div class=\"text-right\">{{row.RecordDate|date:'dd-MMM-yyyy'}}</div>\r\n                </ng-template>\r\n              </ngx-datatable-column>\r\n              <ngx-datatable-column name=\"Ratio\" prop=\"BonusRatio\" [resizeable]=\"false\" [sortable]=\"false\">\r\n                <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                  <div class=\"text-right\">{{row.BonusRatio}}</div>\r\n                </ng-template>\r\n              </ngx-datatable-column>\r\n            </ngx-datatable>\r\n          }\r\n        </div>\r\n      }\r\n\r\n      @if (config?.activeTab?.key=='lDividend') {\r\n        <div class=\"clearfix\">\r\n          <ngx-datatable #datatable class=\"material\" [cssClasses]=\"config.cssClasses\" [columnMode]=\"'force'\"\r\n            [rows]=\"events.lDividend.data\" [footerHeight]=\"50\" [limit]=\"10\" [reorderable]=\"false\"\r\n            [headerHeight]=\"'auto'\" [scrollbarH]=\"true\" [rowHeight]=\"'auto'\">\r\n            <ngx-datatable-column [width]=\"220\" name=\"Company Name\" prop=\"SecName\" [resizeable]=\"false\">\r\n              <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                <div class=\"text-left\"><a [routerLink]=\"[row.companyURL]\">{{row.SecName ||row.SecDesc}}</a>\r\n              </div>\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Announcement Date\" prop=\"AnnouncementDate\" [resizeable]=\"false\">\r\n            <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n              <div class=\"text-right\">{{row.AnnouncementDate|date:'dd-MMM-yyyy'}}</div>\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Dividend Date\" prop=\"ExDividendDate\" [resizeable]=\"false\">\r\n            <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n              <div class=\"text-right\">{{row.ExDividendDate|date:'dd-MMM-yyyy'}}</div>\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Dividend(%)\" prop=\"DividendPercentage\" [resizeable]=\"false\">\r\n            <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n              <div class=\"text-right\">{{row.DividendPercentage|value:'1.2-2'}}</div>\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Remarks\" prop=\"DividendType\" [resizeable]=\"false\" [sortable]=\"false\">\r\n            <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n              <div class=\"text-right\">{{row.DividendType}}</div>\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n        </ngx-datatable>\r\n      </div>\r\n    }\r\n\r\n    @if (config?.activeTab?.key=='lRights') {\r\n      <div class=\"clearfix\">\r\n        @if (!config.isServiceHit) {\r\n          <ngx-datatable #datatable class=\"material\" [cssClasses]=\"config.cssClasses\"\r\n            [columnMode]=\"'force'\" [rows]=\"events.lRights.data\" [footerHeight]=\"50\" [limit]=\"10\" [reorderable]=\"false\"\r\n            [headerHeight]=\"'auto'\" [scrollbarH]=\"true\" [rowHeight]=\"'auto'\">\r\n            <ngx-datatable-column [width]=\"220\" name=\"Company Name\" prop=\"SecName\" [resizeable]=\"false\">\r\n              <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                <div class=\"text-left\"><a [routerLink]=\"[row.companyURL]\">{{row.SecName ||row.SecDesc}}</a>\r\n              </div>\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Right Date\" prop=\"ExRightsDate\" [resizeable]=\"false\">\r\n            <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n              <div class=\"text-right\">{{row.ExRightsDate|date:'dd-MMM-yyyy'}}</div>\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Ratio\" prop=\"RightsRatio\" [resizeable]=\"false\" [sortable]=\"false\">\r\n            <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n              <div class=\"text-right\">{{row.RightsRatio}}</div>\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Premium\" prop=\"Premium\" [resizeable]=\"false\" [sortable]=\"false\">\r\n            <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n              <div class=\"text-right\">{{row.Premium|value:'1.2-2'}}</div>\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n        </ngx-datatable>\r\n      }\r\n    </div>\r\n  }\r\n\r\n  @if (config?.activeTab?.key=='lSplits') {\r\n    <div class=\"clearfix\">\r\n      @if (!config.isServiceHit) {\r\n        <ngx-datatable #datatable class=\"material\" [cssClasses]=\"config.cssClasses\"\r\n          [columnMode]=\"'force'\" [rows]=\"events.lSplits.data\" [footerHeight]=\"50\" [limit]=\"10\" [reorderable]=\"false\"\r\n          [headerHeight]=\"'auto'\" [scrollbarH]=\"true\" [rowHeight]=\"'auto'\">\r\n          <ngx-datatable-column [width]=\"220\" name=\"Company Name\" prop=\"SecName\" [resizeable]=\"false\">\r\n            <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n              <div class=\"text-left\"><a [routerLink]=\"[row.companyURL]\">{{row.SecName ||row.SecDesc}}</a>\r\n            </div>\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n        <ngx-datatable-column name=\"Split Date\" prop=\"SplitDate\" [resizeable]=\"false\">\r\n          <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n            <div class=\"text-right\">{{row.SplitDate|date:'dd-MMM-yyyy'}}</div>\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n        <ngx-datatable-column name=\"FV Before\" prop=\"OldFacevalue\" [resizeable]=\"false\" [sortable]=\"false\">\r\n          <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n            <div class=\"text-right\">{{row.OldFacevalue|value:'1.2-2'}}</div>\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n        <ngx-datatable-column name=\"FV After\" prop=\"NewFaceValue\" [resizeable]=\"false\" [sortable]=\"false\">\r\n          <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n            <div class=\"text-right\">{{row.NewFaceValue|value:'1.2-2'}}</div>\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n      </ngx-datatable>\r\n    }\r\n  </div>\r\n}\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n</section>\r\n\r\n<!-- added open an account banner (12/05/2021) -->\r\n<!-- <section class=\"seo-section clearfix\" *ngIf=\"(!shared.userId || shared.userId == 'guest')\">\r\n<div class=\"col-md-12\">\r\n  <div class=\"card mb-0\">\r\n    <div class=\"card-block\">\r\n      <img src=\"../../../assets/images/Open-Free-Account1.png\" alt=\"Online Stock Trading Platform\" class=\"img-responsive\" (click)=\"utils.navigateToOpenAccount()\"/>\r\n    </div>\r\n  </div>\r\n</div>\r\n</section> -->\r\n<!-- Advert Banner :: Start -->\r\n@if ((!shared.userId || shared.userId == 'guest')) {\r\n  <section>\r\n    <div class=\"container\" (click)=\"navigateToOpenFreeAccount()\">\r\n      <div class=\"row add_banner_sub red-theme\">\r\n        <div class=\"col-md-6 add-left-text\">\r\n          <div class=\"add-left-sub\">\r\n            <h2>Wait! <span class=\"small-font\">Before You Go</span></h2>\r\n            <h4>OPEN A FREE</h4>\r\n            <h3>DEMAT ACCOUNT</h3>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6 add-right-text\">\r\n          <div class=\"add-right-sub\">\r\n            <ul>\r\n              <li><span>+</span> Zero Account Opening Fee </li>\r\n              <li><span>+</span> Free First Year AMC </li>\r\n              <li><span>+</span> Zero Square Off Charges </li>\r\n              <li><span>+</span> Zero Call for Trade Charges</li>\r\n            </ul>\r\n            <a class=\"add-btn\">OPEN MY ACCOUNT</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n}\r\n\r\n<section class=\"seo-section clearfix\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"card mb-0\">\r\n      <div class=\"card-block\" [innerHtml]=\"seoContent[config?.activeTab?.key]\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>";

/***/ })

}]);