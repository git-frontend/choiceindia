(self["webpackChunkjiffy_upgraded"] = self["webpackChunkjiffy_upgraded"] || []).push([[209],{

/***/ 10209:
/*!*************************************************************!*\
  !*** ./src/app/tools-module/calendar/calendar.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalendarComponent: () => (/* binding */ CalendarComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _calendar_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar.component.html?ngResource */ 8152);
/* harmony import */ var _calendar_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calendar.component.scss?ngResource */ 3255);
/* harmony import */ var _calendar_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_calendar_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/utils/utils.service */ 89893);
/* harmony import */ var _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/libs/esm-moment.min.js */ 29483);
/* harmony import */ var _services_rest_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/rest/common.service */ 18056);
/* harmony import */ var _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/seo/seo.service */ 44897);
/* harmony import */ var _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/shared-data/shared-data.service */ 46013);
/* harmony import */ var _pipes_value_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/value.pipe */ 50615);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 89417);







/** Import Moment JS Library*/
// var moment: any = require();






/** Declaration for NodeJS Require*/
// declare var require: any;
// var moment: any = require('../../../assets/libs/esm-moment.min.js');
/**object for days */
const days = {
  0: 'Sunday',
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday'
};
let CalendarComponent = class CalendarComponent {
  /**
   * Constructor for Object Initialization
   * @param activeRoute ActivatedRoute Instance
   * @param commonService commonService Instance
   * @param location Location Instance
   * @param shared SharedDataService instance
   */
  constructor(utils, activeRoute, commonService, location, shared, seo) {
    this.utils = utils;
    this.activeRoute = activeRoute;
    this.commonService = commonService;
    this.location = location;
    this.shared = shared;
    this.seo = seo;
    this.calendarData = {};
    this.currentYear = new Date().getFullYear();
    let fiscalDateRange = this.utils.getFiscalDateRange(0);
    this.subscriptionList = [];
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
        min: new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_3__["default"]().startOf('year').toDate(),
        max: new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_3__["default"]().endOf('year').toDate()
      },
      'fiscalToDate': {
        min: new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_3__["default"](fiscalDateRange.min).startOf('day').toDate(),
        max: new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_3__["default"](new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_3__["default"](fiscalDateRange.max).year() + 1 + '-03-31').endOf('day').toDate()
      }
    };
    this.activeFilter = this.filterRanges['all'];
    this.activeFilter.name = 'all';
    this.config = {
      eventCategories: [{
        key: 'lBoardMeetings',
        value: 'Board Meeting',
        dateKey: 'StartDate',
        checked: true
      }, {
        key: 'lAGMEGM',
        value: 'AGM/EGM',
        dateKey: 'Date',
        checked: true
      }, {
        key: 'lBonus',
        value: 'Bonus',
        dateKey: 'ExBonus',
        checked: true
      }, {
        key: 'lDividend',
        value: 'Dividends',
        dateKey: 'ExDividendDate',
        checked: true
      }, {
        key: 'lRights',
        value: 'Rights',
        dateKey: 'ExRightsDate',
        checked: true
      }, {
        key: 'lSplits',
        value: 'Splits',
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
      }
    };
    this.subscribeChanges();
  }
  subscribeChanges() {
    this.subscriptionList.push(this.utils.broadcastObservable('routeResuseMenu').subscribe(data => {
      if (data && data.route) {
        let routeData = data.route.split('/');
        this.activateSegment(routeData[routeData.length - 1]);
      }
    }));
  }
  /**
   * Life Cycle Hook
   */
  ngOnInit() {
    let path = location.pathname;
    this.activeSegment = path.indexOf('share-market-holidays-nse-bse') > -1 ? 'holiday-calendar' : 'event-calendar';
    this.activateSegment(this.activeSegment);
  }
  recalculate(event) {
    if (event) {
      setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
      }, 100);
    }
  }
  /**
   * Activate Tab and Fetch data if not fetched previously from CMS
   * @param segment Tab Key for which data is to be fetched
   */
  activateSegment(segment) {
    this.activeSegment = segment;
    let state = segment.indexOf('holiday-calendar') > -1 ? 'holiday-calendar' : 'event-calendar';
    //this.location.replaceState('tools/calendars/' + state);
    this.seo.setMeta(state);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    if (this.activeSegment.indexOf('holiday-calendar') > -1 && this.calendarData[this.activeSegment]) {
      this.activeFilter = this.filterRanges['all'];
      this.activeFilter.name = 'all';
      this.filteredData = this.calendarData[segment];
    } else {
      this.fetchCalendar();
    }
  }
  getHolidayCalendar(segment, filterName) {
    this.filteredData = [];
    this.commonService.getHolidayCalendar().subscribe(res => {
      if (res.status_code == 200 && res.response) {
        this.calendarData[segment] = this.processHolidayList(res.response);
        this.activeFilter = this.filterRanges[filterName || 'all'];
        this.activeFilter.name = filterName || 'all';
        this.filteredData = this.filterCalendar(filterName || 'all', false, this.calendarData[segment]);
      }
    }, err => {});
  }
  filterEventCustom(results, minDate, maxDate) {
    let filteredResult = results.filter(data => {
      return data.momentDate.isSameOrAfter(minDate) && data.momentDate.isSameOrBefore(maxDate);
    });
    return filteredResult;
  }
  getEventCalendar(segment, filterName) {
    this.filteredData = {
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
    let defaultFilterName = filterName || 'fiscal';
    if (this.calendarData[segment] && defaultFilterName != 'custom') {
      this.filteredData.lBoardMeetings.data = this.filterCalendar(defaultFilterName, false, this.calendarData[segment].lBoardMeetings.data);
      this.filteredData.lAGMEGM.data = this.filterCalendar(defaultFilterName, false, this.calendarData[segment].lAGMEGM.data);
      this.filteredData.lBonus.data = this.filterCalendar(defaultFilterName, false, this.calendarData[segment].lBonus.data);
      this.filteredData.lDividend.data = this.filterCalendar(defaultFilterName, false, this.calendarData[segment].lDividend.data);
      this.filteredData.lRights.data = this.filterCalendar(defaultFilterName, false, this.calendarData[segment].lRights.data);
      this.filteredData.lSplits.data = this.filterCalendar(defaultFilterName, false, this.calendarData[segment].lSplits.data);
      this.activeFilter = this.filterRanges[defaultFilterName];
    } else if (this.calendarData[segment] && defaultFilterName == 'custom') {
      let minDate = new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_3__["default"](this.activeFilter.dates[0]);
      let maxDate = new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_3__["default"](this.activeFilter.dates[1]);
      this.filteredData.lBoardMeetings.data = this.filterEventCustom(this.calendarData[segment].lBoardMeetings.data, minDate, maxDate);
      this.filteredData.lAGMEGM.data = this.filterEventCustom(this.calendarData[segment].lAGMEGM.data, minDate, maxDate);
      this.filteredData.lBonus.data = this.filterEventCustom(this.calendarData[segment].lBonus.data, minDate, maxDate);
      this.filteredData.lDividend.data = this.filterEventCustom(this.calendarData[segment].lDividend.data, minDate, maxDate);
      this.filteredData.lRights.data = this.filterEventCustom(this.calendarData[segment].lRights.data, minDate, maxDate);
      this.filteredData.lSplits.data = this.filterEventCustom(this.calendarData[segment].lSplits.data, minDate, maxDate);
      this.activeFilter = this.filterRanges[defaultFilterName];
    } else if (!this.calendarData[segment]) {
      let request = {
        "SegmentID": 1,
        "Token": 0,
        "MonthYear": "",
        "EventDate": "",
        "Purpose": ""
      };
      this.commonService.getEventCalendar(request).subscribe(res => {
        if (res.Status == "Success" && res.Response) {
          this.calendarData[segment] = this.processEventCalendar(res.Response);
          this.activeFilter = this.filterRanges[defaultFilterName];
          this.activeFilter.name = defaultFilterName;
          this.filteredData.lBoardMeetings.data = this.filterCalendar(defaultFilterName, false, this.calendarData[segment].lBoardMeetings.data);
          this.filteredData.lAGMEGM.data = this.filterCalendar(defaultFilterName, false, this.calendarData[segment].lAGMEGM.data);
          this.filteredData.lBonus.data = this.filterCalendar(defaultFilterName, false, this.calendarData[segment].lBonus.data);
          this.filteredData.lDividend.data = this.filterCalendar(defaultFilterName, false, this.calendarData[segment].lDividend.data);
          this.filteredData.lRights.data = this.filterCalendar(defaultFilterName, false, this.calendarData[segment].lRights.data);
          this.filteredData.lSplits.data = this.filterCalendar(defaultFilterName, false, this.calendarData[segment].lSplits.data);
        }
      }, err => {});
    }
  }
  processHolidayList(data) {
    let keys = Object.keys(data);
    let result = [];
    keys.forEach(key => {
      let holiday = data[key];
      let momentDate = new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_3__["default"](holiday.holiday_date, 'YYYY-MM-DD');
      holiday.holiday_date = momentDate.format('DD-MMM-YYYY');
      holiday.momentDate = momentDate;
      holiday.day = days[momentDate.day()];
      holiday.NSETrading = holiday.exchange_name.indexOf('NSE Trading') > -1;
      holiday.NSEFOTrading = holiday.exchange_name.indexOf('NSEFO Trading') > -1;
      holiday.NSECDSTrading = holiday.exchange_name.indexOf('NSECDS Trading') > -1;
      holiday.NSEClearing = holiday.exchange_name.indexOf('NSE Clearing') > -1;
      holiday.NSEFOClearing = holiday.exchange_name.indexOf('NSEFO Clearing') > -1;
      holiday.NSECDSClearing = holiday.exchange_name.indexOf('NSECDS Clearing') > -1;
      holiday.BSE = holiday.exchange_name.indexOf('BSE') > -1;
      holiday.MCXMorning = holiday.exchange_name.indexOf('MCX Morning') > -1;
      holiday.NCDEXMorning = holiday.exchange_name.indexOf('NCDEX Morning') > -1;
      holiday.MCXEvening = holiday.exchange_name.indexOf('MCX Eveninig') > -1;
      holiday.NCDEXEvening = holiday.exchange_name.indexOf('NCDEX Evening') > -1;
      holiday.equity = holiday.NSEClearing && holiday.NSETrading && holiday.NSEFOClearing && holiday.NSEFOTrading && holiday.NSECDSClearing && holiday.NSECDSTrading && holiday.BSE;
      holiday.commodity = holiday.MCXMorning && holiday.MCXEvening && holiday.NCDEXMorning && holiday.NCDEXEvening;
      result.push(holiday);
    });
    result.sort((item1, item2) => {
      return item1.momentDate.valueOf() - item2.momentDate.valueOf();
    });
    return result;
  }
  processEventCalendar(data) {
    let minDate = new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_3__["default"]().subtract(1, 'days').startOf('day');
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
      // if (new moment(event.EventDate).isSameOrAfter(minDate) ||
      //   (event.lDividend && new moment((event.lDividend || {}).ExDividendDate).isSameOrAfter(minDate)) ||
      //   (event.lAGMEGM && new moment((event.lAGMEGM || {}).Date).isSameOrAfter(minDate)) ||
      //   (event.lSplits && new moment((event.lSplits || {}).SplitDate).isSameOrAfter(minDate)) ||
      //   (event.lBonus && new moment((event.lBonus || {}).ExBonus).isSameOrAfter(minDate))) {
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
      //}
    });
    return categories;
  }
  filterCalendar(option, isToHitService, calendarData) {
    let results = calendarData || this.calendarData[this.activeSegment] || [];
    let filteredResult = [];
    if (!isToHitService) {
      if (option !== 'custom' && this.filterRanges[option]) {
        let minDate = this.filterRanges[option].min;
        let maxDate = this.filterRanges[option].max;
        filteredResult = results.filter(data => {
          return data.momentDate.isSameOrAfter(minDate) && data.momentDate.isSameOrBefore(maxDate);
        });
        this.activeFilter = this.filterRanges[option];
        this.activeFilter.name = option;
      } else {
        let dates = [new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_3__["default"](this.activeFilter.min).toDate(), new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_3__["default"](this.activeFilter.max).toDate()];
        this.activeFilter = this.filterRanges[option];
        this.activeFilter.name = option;
        this.activeFilter.dates = dates;
      }
    } else {
      this.fetchCalendar(option);
    }
    return filteredResult;
  }
  filterCustom() {
    let results = this.calendarData[this.activeSegment];
    if (this.activeFilter.name === 'custom' && this.activeFilter.dates) {
      let minDate = new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_3__["default"](this.activeFilter.dates[0]);
      let maxDate = new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_3__["default"](this.activeFilter.dates[1]);
      this.filteredData = results.filter(data => {
        return data.momentDate.isSameOrAfter(minDate) && data.momentDate.isSameOrBefore(maxDate);
      });
    }
  }
  fetchCalendar(filterName) {
    if (this.activeSegment.indexOf('holiday-calendar') > -1) {
      this.getHolidayCalendar('holiday-calendar', filterName);
    } else if (this.activeSegment.indexOf('event-calendar') > -1) {
      this.activeFilter = this.filterRanges[filterName || 'today'];
      this.activeFilter.name = filterName || 'today';
      let minDate = this.activeFilter.name === 'custom' ? this.activeFilter.dates[0] : this.activeFilter.min;
      let maxDate = this.activeFilter.name === 'custom' ? this.activeFilter.dates[1] : this.activeFilter.max;
      minDate = new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_3__["default"](minDate);
      maxDate = new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_3__["default"](maxDate);
      this.getEventCalendar('event-calendar', filterName || 'fiscal');
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
CalendarComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-calendar',
  template: _calendar_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe, _pipes_value_pipe__WEBPACK_IMPORTED_MODULE_7__.ValuePipe],
  styles: [(_calendar_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__metadata)("design:paramtypes", [src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_2__.UtilsService, _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute, _services_rest_common_service__WEBPACK_IMPORTED_MODULE_4__.CommonService, _angular_common__WEBPACK_IMPORTED_MODULE_9__.Location, _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_6__.SharedDataService, _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_5__.SeoService])], CalendarComponent);


/***/ }),

/***/ 3255:
/*!**************************************************************************!*\
  !*** ./src/app/tools-module/calendar/calendar.component.scss?ngResource ***!
  \**************************************************************************/
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

.table-bordered {
  border: 1px solid #F4F3F8;
  width: 100%;
  max-width: 100%;
}
@media (max-width: 767px) {
  .table-bordered {
    border: 0px;
  }
}

.table-bordered > thead > tr > th,
.table-bordered > thead > tr > td,
.table-bordered > tbody > tr > th,
.table-bordered > tbody > tr > td,
.table-bordered > tfoot > tr > th,
.table-bordered > tfoot > tr > td {
  padding: 8px 20px;
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

.table > thead > tr > th {
  padding: 8px 20px;
  border: 1px solid #F4F3F8;
}

.card-block {
  min-height: 300px;
}
.card-block ul.pagination li {
  cursor: pointer;
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
  background-color: #fff;
  font-size: 12px;
}
.pagination > li:last-child > span {
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
}

.pagination > li > a,
.pagination > li > span {
  color: #fe636e;
  border: 1px solid #fe636e;
  border: 1px solid #004393;
  color: #004393;
}

.pagination > .active > a,
.pagination > .active > a:hover,
.pagination > .active > a:focus,
.pagination > .active > span,
.pagination > .active > span:hover,
.pagination > .active > span:focus {
  z-index: 3;
  color: #ffffff;
  background-color: #fe636e;
  border-color: #fe636e;
  background-color: #004393;
  border-color: #004393;
  cursor: default;
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
  border: 2px solid #8a979f;
  vertical-align: middle;
}
.checkbox-button .checkbox-button__label {
  display: inline-block;
  vertical-align: middle;
  font-size: 12px;
  color: #8a979f;
  font-weight: normal;
  width: calc(100% - 25px);
  margin-left: 5px;
  word-break: break-all;
}
.checkbox-button .checkbox-button__label.selected {
  color: #fe606e;
}

div[dropdown] {
  position: relative;
}
div[dropdown] button[dropdown-open] {
  border: 0;
  border-radius: 0;
  background: #ffffff;
  color: #8a979f;
  padding: 12px 15px;
  font-size: 14px;
  line-height: 10px;
  border: 1px solid #efefef;
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
  border: 1px solid #ebebeb;
  border-top: 0;
  padding: 0;
  border-radius: 0;
}
div[dropdown] ul.dropdown-menu.study-list > li {
  padding: 5px 10px;
  color: #8a97a0;
  font-weight: normal;
  font-size: 12px;
  text-align: left;
  line-height: 20px;
  border-top: 1px solid #ebebeb;
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

.seo-section p strong {
  color: #333333;
}`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 8152:
/*!**************************************************************************!*\
  !*** ./src/app/tools-module/calendar/calendar.component.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<section>\r\n  <div class=\"col-md-12 m-tb20\">\r\n    <div class=\"card\">\r\n      <div class=\"card-block\">\r\n        <img class=\"loader\" src=\"assets/images/loader.gif\" [hidden]=\"!shared.isServiceHit\" />\r\n        <ul class=\"nav nav-tabs hor_1 mb-30 wtd100 reset d-flex\">\r\n          <li [class.active]=\"activeSegment=='holiday-calendar'\" (click)=\"activateSegment('holiday-calendar')\">\r\n            <a>Holiday Calendar</a>\r\n          </li>\r\n          <!-- <li hidden [class.active]=\"activeSegment=='event-calendar'\" (click)=\"activateSegment('event-calendar')\">\r\n          <a>Event Calender</a>\r\n        </li> -->\r\n      </ul>\r\n      @if (activeSegment=='holiday-calendar') {\r\n        <div class=\"mb-20 resp-tabs-container hor_1\">\r\n          <div class=\"col-sm-12 col-md-12 text-center padding-0 mb25\">\r\n            <ul class=\"pagination mb25\">\r\n              <li class=\"ripple\" [class.active]=\"activeFilter?.name==='all'\" (click)=\"filterCalendar('all')\">\r\n                <span>This Year</span>\r\n              </li>\r\n              <li class=\"ripple\" [class.active]=\"activeFilter.name==='today'\" (click)=\"filterCalendar('today')\">\r\n                <span>Today</span>\r\n              </li>\r\n              <li class=\"ripple\" [class.active]=\"activeFilter.name==='tommorow'\" (click)=\"filterCalendar('tommorow')\">\r\n                <span>Tomorrow</span>\r\n              </li>\r\n              <li class=\"ripple\" [class.active]=\"activeFilter.name==='thisWeek'\" (click)=\"filterCalendar('thisWeek')\">\r\n                <span>This Week</span>\r\n              </li>\r\n              <li class=\"ripple\" [class.active]=\"activeFilter.name==='nextWeek'\" (click)=\"filterCalendar('nextWeek')\">\r\n                <span>Next Week</span>\r\n              </li>\r\n              <li class=\"ripple\" [class.active]=\"activeFilter.name==='custom'\" (click)=\"filterCalendar('custom')\">\r\n                <span>Custom</span>\r\n              </li>\r\n            </ul>\r\n            @if (activeFilter.name==='custom') {\r\n              <div class=\"col-md-6 col-sm-6 col-xs-12 pull-right\">\r\n                <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\">\r\n                  <label class=\"filter-label\">Date Range</label>\r\n                </div>\r\n                <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-12 padding-0\">\r\n                  <label class=\"custom-input\">\r\n                    <input type=\"text\" id=\"fromDate\" [minDate]=\"activeFilter?.min\" [maxDate]=\"activeFilter?.max\"\r\n                      class=\"form-control\" name=\"fromDate\" #fromDate=\"ngModel\" bsDaterangepicker\r\n                      [bsConfig]=\"{ rangeInputFormat : 'DD-MMM-YYYY', rangeSeparator :' To ' }\"\r\n                      [(ngModel)]=\"activeFilter.dates\">\r\n                    </label>\r\n                    <button (click)=\"filterCustom()\" class=\"btn btn-gradient\">GO</button>\r\n                  </div>\r\n                </div>\r\n              }\r\n            </div>\r\n            <table class=\"table table-striped table-bordered mobile-table\">\r\n              <thead>\r\n                <tr>\r\n                  <th class=\"text-center\">Sr. No</th>\r\n                  <th class=\"text-center\">Holiday</th>\r\n                  <th class=\"text-center\">Date</th>\r\n                  <th class=\"text-center\">Day</th>\r\n                  <th class=\"text-center\">Equity</th>\r\n                  <th class=\"text-center\">Commodity</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                @for (holiday of filteredData; track holiday; let i = $index) {\r\n                  <tr>\r\n                    <td data-header=\"Sr.No\">{{i+1}}</td>\r\n                    <td data-header=\"Holiday\">\r\n                      <strong>{{holiday.holiday_name}}</strong>\r\n                    </td>\r\n                    <td data-header=\"Date\" class=\"text-center\">{{holiday.holiday_date}}</td>\r\n                    <td data-header=\"Day\">{{holiday.day}}</td>\r\n                    <td data-header=\"Exchanges\">\r\n                      @if (holiday.equity) {\r\n                        <span>ALL</span>\r\n                      }\r\n                      @if (holiday.NSEClearing && holiday.NSETrading && !holiday.equity) {\r\n                        <span>NSE</span>\r\n                      }\r\n                      @if (!holiday.NSEClearing && holiday.NSETrading&& !holiday.equity) {\r\n                        <span>NSE-Trading</span>\r\n                      }\r\n                      @if (!holiday.NSEClearing && !holiday.NSETrading&& !holiday.equity) {\r\n                        <span>NSE-Clearing</span>\r\n                      }\r\n                      @if (holiday.BSE && !holiday.equity) {\r\n                        <span>BSE</span>\r\n                      }\r\n                      @if (holiday.NSEFOClearing && holiday.NSEFOTrading && !holiday.equity) {\r\n                        <span>NSEFO</span>\r\n                      }\r\n                      @if (!holiday.NSEFOClearing && holiday.NSEFOTrading && !holiday.equity) {\r\n                        <span>NSEFO-Trading</span>\r\n                      }\r\n                      @if (!holiday.NSEFOClearing && !holiday.NSEFOTrading && !holiday.equity) {\r\n                        <span>NSEFO-Clearing</span>\r\n                      }\r\n                      @if (holiday.NSECDSClearing && holiday.NSECDSTrading && !holiday.equity) {\r\n                        <span>NSECDS</span>\r\n                      }\r\n                      @if (!holiday.NSECDSClearing && holiday.NSECDSTrading && !holiday.equity) {\r\n                        <span\r\n                        >NSECDS-Trading</span>\r\n                      }\r\n                      @if (!holiday.NSECDSClearing && !holiday.NSECDSTrading && !holiday.equity) {\r\n                        <span\r\n                        >NSECDS-Clearing</span>\r\n                      }\r\n                    </td>\r\n                    <td>\r\n                      @if (holiday.commodity) {\r\n                        <span>ALL</span>\r\n                      }\r\n                      @if (holiday.MCXMorning && holiday.MCXEvening && !holiday.commodity) {\r\n                        <span>MCX</span>\r\n                      }\r\n                      @if (holiday.MCXMorning && !holiday.MCXEvening && !holiday.commodity) {\r\n                        <span>MCX-Morning</span>\r\n                      }\r\n                      @if (!holiday.MCXMorning && holiday.MCXEvening && !holiday.commodity) {\r\n                        <span>MCX-Evening</span>\r\n                      }\r\n                      @if (holiday.NCDEXMorning && holiday.NCDEXEvening && !holiday.commodity) {\r\n                        <span>NCDEX</span>\r\n                      }\r\n                      @if (holiday.NCDEXMorning && !holiday.NCDEXEvening && !holiday.commodity) {\r\n                        <span>NCDEX-Morning</span>\r\n                      }\r\n                      @if (!holiday.NCDEXMorning && holiday.NCDEXEvening && !holiday.commodity) {\r\n                        <span>NCDEX-Evening</span>\r\n                      }\r\n                    </td>\r\n                  </tr>\r\n                }\r\n                @if (filteredData?.length == 0) {\r\n                  <tr>\r\n                    <td colspan=\"6\" class=\"text-center\">No Data Available</td>\r\n                  </tr>\r\n                }\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        }\r\n        @if (activeSegment=='event-calendar') {\r\n          <div class=\"mb-20 resp-tabs-container hor_1 event-calendar\">\r\n            <div class=\"text-center row mb25\">\r\n              <div class=\"col-xs-12\" [ngClass]=\"{'col-sm-6 text-left' : activeFilter.name==='custom'}\">\r\n                <ul class=\"pagination mb-20\">\r\n                  <li class=\"ripple\" [class.active]=\"activeFilter?.name==='yesterday'\"\r\n                    (click)=\"filterCalendar('yesterday', true)\">\r\n                    <span>Yesterday</span>\r\n                  </li>\r\n                  <li class=\"ripple\" [class.active]=\"activeFilter.name==='today'\" (click)=\"filterCalendar('today', true)\">\r\n                    <span>Today</span>\r\n                  </li>\r\n                  <li class=\"ripple\" [class.active]=\"activeFilter.name==='tommorow'\"\r\n                    (click)=\"filterCalendar('tommorow', true)\">\r\n                    <span>Tomorrow</span>\r\n                  </li>\r\n                  <li class=\"ripple\" [class.active]=\"activeFilter.name==='thisWeek'\"\r\n                    (click)=\"filterCalendar('thisWeek', true)\">\r\n                    <span>This Week</span>\r\n                  </li>\r\n                  <li class=\"ripple\" [class.active]=\"activeFilter.name==='nextWeek'\"\r\n                    (click)=\"filterCalendar('nextWeek', true)\">\r\n                    <span>Next Week</span>\r\n                  </li>\r\n                  <li class=\"ripple\" [class.active]=\"activeFilter.name==='custom'\"\r\n                    (click)=\"filterCalendar('custom', false)\">\r\n                    <span>Custom</span>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n              @if (activeFilter.name==='custom') {\r\n                <div class=\"col-md-6 col-sm-6 col-xs-12 text-right\">\r\n                  <label class=\"filter-label\">Date Range </label> &nbsp;\r\n                  <label class=\"custom-input\">\r\n                    <input type=\"text\" id=\"fromDate\" [minDate]=\"filterRanges?.fiscalToDate?.min\"\r\n                      [maxDate]=\"filterRanges?.fiscalToDate?.max\" class=\"form-control\" name=\"fromDate\" #fromDate=\"ngModel\"\r\n                      bsDaterangepicker [bsConfig]=\"{ rangeInputFormat : 'DD-MMM-YYYY', rangeSeparator :' To ' }\"\r\n                      [(ngModel)]=\"activeFilter.dates\">\r\n                    </label> &nbsp;\r\n                    <button (click)=\"getEventCalendar('event-calendar', 'custom')\" class=\"btn btn-gradient\">GO</button>\r\n                  </div>\r\n                }\r\n              </div>\r\n              <accordion [closeOthers]=\"true\">\r\n                @if (filteredData?.lBoardMeetings?.data?.length) {\r\n                  <accordion-group heading=\"Board Meetings\"\r\n                    (isOpenChange)=\"recalculate($event)\">\r\n                    <ngx-datatable #datatable class=\"material\" [cssClasses]=\"config.cssClasses\" [columnMode]=\"'force'\"\r\n                      [rows]=\"filteredData.lBoardMeetings.data\" [footerHeight]=\"50\" [limit]=\"10\" [reorderable]=\"false\"\r\n                      [headerHeight]=\"'auto'\" [scrollbarH]=\"true\" [rowHeight]=\"'auto'\">\r\n                      <ngx-datatable-column [width]=\"220\" name=\"Company Name\" prop=\"SecName\" [resizeable]=\"false\">\r\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                          <div class=\"text-left\"><a [routerLink]=\"[row.companyURL]\">{{row.SecName ||row.SecDesc}}</a>\r\n                        </div>\r\n                      </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column name=\"Meeting Date\" prop=\"StartDate\" [resizeable]=\"false\">\r\n                      <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                        <div class=\"text-right\">{{row.StartDate|date:'dd-MMM-yyyy'}}</div>\r\n                      </ng-template>\r\n                    </ngx-datatable-column>\r\n                    <ngx-datatable-column name=\"Agenda\" prop=\"Agenda\" [resizeable]=\"false\" [sortable]=\"false\">\r\n                      <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                        <div class=\"text-right\">{{row.Agenda}}</div>\r\n                      </ng-template>\r\n                    </ngx-datatable-column>\r\n                  </ngx-datatable>\r\n                </accordion-group>\r\n              }\r\n              @if (filteredData?.lDividend?.data?.length) {\r\n                <accordion-group heading=\"Dividends\"\r\n                  (isOpenChange)=\"recalculate($event)\">\r\n                  <ngx-datatable #datatable class=\"material\" [cssClasses]=\"config.cssClasses\" [columnMode]=\"'force'\"\r\n                    [rows]=\"filteredData.lDividend.data\" [footerHeight]=\"50\" [limit]=\"10\" [reorderable]=\"false\"\r\n                    [headerHeight]=\"'auto'\" [scrollbarH]=\"true\" [rowHeight]=\"'auto'\">\r\n                    <ngx-datatable-column [width]=\"220\" name=\"Company Name\" prop=\"SecName\" [resizeable]=\"false\">\r\n                      <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                        <div class=\"text-left\"><a [routerLink]=\"[row.companyURL]\">{{row.SecName ||row.SecDesc}}</a>\r\n                      </div>\r\n                    </ng-template>\r\n                  </ngx-datatable-column>\r\n                  <ngx-datatable-column name=\"Announcement Date\" prop=\"AnnouncementDate\" [resizeable]=\"false\">\r\n                    <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                      <div class=\"text-right\">{{row.AnnouncementDate|date:'dd-MMM-yyyy'}}</div>\r\n                    </ng-template>\r\n                  </ngx-datatable-column>\r\n                  <ngx-datatable-column name=\"Dividend Date\" prop=\"ExDividendDate\" [resizeable]=\"false\">\r\n                    <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                      <div class=\"text-right\">{{row.ExDividendDate|date:'dd-MMM-yyyy'}}</div>\r\n                    </ng-template>\r\n                  </ngx-datatable-column>\r\n                  <ngx-datatable-column name=\"Dividend(%)\" prop=\"DividendPercentage\" [resizeable]=\"false\">\r\n                    <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                      <div class=\"text-right\">{{row.DividendPercentage|value:'1.2-2'}}</div>\r\n                    </ng-template>\r\n                  </ngx-datatable-column>\r\n                  <ngx-datatable-column name=\"Remarks\" prop=\"DividendType\" [resizeable]=\"false\" [sortable]=\"false\">\r\n                    <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                      <div class=\"text-right\">{{row.DividendType}}</div>\r\n                    </ng-template>\r\n                  </ngx-datatable-column>\r\n                </ngx-datatable>\r\n              </accordion-group>\r\n            }\r\n            @if (filteredData?.lAGMEGM?.data?.length) {\r\n              <accordion-group heading=\"AGM/EGM\"\r\n                (isOpenChange)=\"recalculate($event)\">\r\n                <ngx-datatable #datatable class=\"material\" [cssClasses]=\"config.cssClasses\" [columnMode]=\"'force'\"\r\n                  [rows]=\"filteredData.lAGMEGM.data\" [footerHeight]=\"50\" [limit]=\"10\" [reorderable]=\"false\"\r\n                  [headerHeight]=\"'auto'\" [scrollbarH]=\"true\" [rowHeight]=\"'auto'\">\r\n                  <ngx-datatable-column name=\"Company Name\" prop=\"SecName\" [resizeable]=\"false\">\r\n                    <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                      <div class=\"text-left\"><a [routerLink]=\"[row.companyURL]\">{{row.SecName ||row.SecDesc}}</a>\r\n                    </div>\r\n                  </ng-template>\r\n                </ngx-datatable-column>\r\n                <ngx-datatable-column name=\"Announcement Date\" prop=\"Date\" [resizeable]=\"false\">\r\n                  <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                    <div class=\"text-right\">{{row.Date|date:'dd-MMM-yyyy'}}</div>\r\n                  </ng-template>\r\n                </ngx-datatable-column>\r\n                <ngx-datatable-column name=\"Agenda\" prop=\"Agenda\" [resizeable]=\"false\" [sortable]=\"false\">\r\n                  <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                    <div class=\"text-right\">{{row.Agenda +'('+row.Purpose+')'}}</div>\r\n                  </ng-template>\r\n                </ngx-datatable-column>\r\n              </ngx-datatable>\r\n            </accordion-group>\r\n          }\r\n          @if (filteredData?.lSplits?.data?.length) {\r\n            <accordion-group heading=\"Splits\"\r\n              (isOpenChange)=\"recalculate($event)\">\r\n              <ngx-datatable #datatable class=\"material\" [cssClasses]=\"config.cssClasses\" [columnMode]=\"'force'\"\r\n                [rows]=\"filteredData.lSplits.data\" [footerHeight]=\"50\" [limit]=\"10\" [reorderable]=\"false\"\r\n                [headerHeight]=\"'auto'\" [scrollbarH]=\"true\" [rowHeight]=\"'auto'\">\r\n                <ngx-datatable-column [width]=\"220\" name=\"Company Name\" prop=\"SecName\" [resizeable]=\"false\">\r\n                  <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                    <div class=\"text-left\"><a [routerLink]=\"[row.companyURL]\">{{row.SecName ||row.SecDesc}}</a>\r\n                  </div>\r\n                </ng-template>\r\n              </ngx-datatable-column>\r\n              <ngx-datatable-column name=\"Split Date\" prop=\"SplitDate\" [resizeable]=\"false\">\r\n                <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                  <div class=\"text-right\">{{row.SplitDate|date:'dd-MMM-yyyy'}}</div>\r\n                </ng-template>\r\n              </ngx-datatable-column>\r\n              <ngx-datatable-column name=\"FV Before\" prop=\"OldFacevalue\" [resizeable]=\"false\" [sortable]=\"false\">\r\n                <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                  <div class=\"text-right\">{{row.OldFacevalue|value:'1.2-2'}}</div>\r\n                </ng-template>\r\n              </ngx-datatable-column>\r\n              <ngx-datatable-column name=\"FV After\" prop=\"NewFaceValue\" [resizeable]=\"false\" [sortable]=\"false\">\r\n                <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                  <div class=\"text-right\">{{row.NewFaceValue|value:'1.2-2'}}</div>\r\n                </ng-template>\r\n              </ngx-datatable-column>\r\n            </ngx-datatable>\r\n          </accordion-group>\r\n        }\r\n        @if (filteredData?.lBonus?.data?.length) {\r\n          <accordion-group heading=\"Bonus\"\r\n            (isOpenChange)=\"recalculate($event)\">\r\n            <ngx-datatable #datatable class=\"material\" [cssClasses]=\"config.cssClasses\" [columnMode]=\"'force'\"\r\n              [rows]=\"filteredData.lBonus.data\" [footerHeight]=\"50\" [limit]=\"10\" [reorderable]=\"false\"\r\n              [headerHeight]=\"'auto'\" [scrollbarH]=\"true\" [rowHeight]=\"'auto'\">\r\n              <ngx-datatable-column [width]=\"220\" name=\"Company Name\" prop=\"SecName\" [resizeable]=\"false\">\r\n                <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                  <div class=\"text-left\"><a [routerLink]=\"[row.companyURL]\">{{row.SecName ||row.SecDesc}}</a>\r\n                </div>\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Bonus Date\" prop=\"ExBonus\" [resizeable]=\"false\">\r\n              <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                <div class=\"text-right\">{{row.ExBonus|date:'dd-MMM-yyyy'}}</div>\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Record Date\" prop=\"RecordDate\" [resizeable]=\"false\">\r\n              <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                <div class=\"text-right\">{{row.RecordDate|date:'dd-MMM-yyyy'}}</div>\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Ratio\" prop=\"BonusRatio\" [resizeable]=\"false\" [sortable]=\"false\">\r\n              <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                <div class=\"text-right\">{{row.BonusRatio}}</div>\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n          </ngx-datatable>\r\n        </accordion-group>\r\n      }\r\n      @if (filteredData?.lRights?.data?.length) {\r\n        <accordion-group heading=\"Rights\"\r\n          (isOpenChange)=\"recalculate($event)\">\r\n          <ngx-datatable #datatable class=\"material\" [cssClasses]=\"config.cssClasses\" [columnMode]=\"'force'\"\r\n            [rows]=\"filteredData.lRights.data\" [footerHeight]=\"50\" [limit]=\"10\" [reorderable]=\"false\"\r\n            [headerHeight]=\"'auto'\" [scrollbarH]=\"true\" [rowHeight]=\"'auto'\">\r\n            <ngx-datatable-column [width]=\"220\" name=\"Company Name\" prop=\"SecName\" [resizeable]=\"false\">\r\n              <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                <div class=\"text-left\"><a [routerLink]=\"[row.companyURL]\">{{row.SecName ||row.SecDesc}}</a>\r\n              </div>\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Right Date\" prop=\"ExRightsDate\" [resizeable]=\"false\">\r\n            <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n              <div class=\"text-right\">{{row.ExRightsDate|date:'dd-MMM-yyyy'}}</div>\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Ratio\" prop=\"RightsRatio\" [resizeable]=\"false\" [sortable]=\"false\">\r\n            <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n              <div class=\"text-right\">{{row.RightsRatio}}</div>\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Premium\" prop=\"Premium\" [resizeable]=\"false\" [sortable]=\"false\">\r\n            <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n              <div class=\"text-right\">{{row.Premium|value:'1.2-2'}}</div>\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n        </ngx-datatable>\r\n      </accordion-group>\r\n    }\r\n  </accordion>\r\n</div>\r\n}\r\n\r\n</div>\r\n</div>\r\n</div>\r\n</section>\r\n\r\n<!-- added open an account banner (12/05/2021) -->\r\n<!-- <section class=\"seo-section clearfix\" *ngIf=\"(!shared.userId || shared.userId == 'guest')\">\r\n<div class=\"col-md-12\">\r\n  <div class=\"card mb-0\">\r\n    <div class=\"card-block\">\r\n      <img src=\"../../../assets/images/Open-Free-Account1.png\" alt=\"Online Stock Trading Platform\" class=\"img-responsive\" (click)=\"utils.navigateToOpenAccount()\"/>\r\n    </div>\r\n  </div>\r\n</div>\r\n</section> -->\r\n<br>\r\n  <!-- Advert Banner :: Start -->\r\n  @if ((!shared.userId || shared.userId == 'guest')) {\r\n    <section>\r\n      <div class=\"container\" (click)=\"navigateToOpenFreeAccount()\">\r\n        <div class=\"row add_banner_sub red-theme\">\r\n          <div class=\"col-md-6 add-left-text\">\r\n            <div class=\"add-left-sub\">\r\n              <h2>Wait! <span class=\"small-font\">Before You Go</span></h2>\r\n              <h4>OPEN A FREE</h4>\r\n              <h3>DEMAT ACCOUNT</h3>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6 add-right-text\">\r\n            <div class=\"add-right-sub\">\r\n              <ul>\r\n                <li><span>+</span> Zero Account Opening Fee </li>\r\n                <li><span>+</span> Free First Year AMC </li>\r\n                <li><span>+</span> Zero Square Off Charges </li>\r\n                <li><span>+</span> Zero Call for Trade Charges</li>\r\n              </ul>\r\n              <a class=\"add-btn\">OPEN MY ACCOUNT</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n  }\r\n\r\n  <section class=\"seo-section clearfix\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card mb-0\">\r\n        <div class=\"card-block\">\r\n          <h1>NSE & BSE HOLIDAYS {{currentYear}}</h1>\r\n          <p>It’s important to know NSE/BSE holiday list {{currentYear}} in advance so that Traders/Investors can square\r\n            off or\r\n            carry-forward\r\n          their positions.</p>\r\n          <h2 class='text-left'>Share Market Holidays</h2>\r\n          <p>The Holiday Calendar section will show you the entire list of Market Holidays {{currentYear}} that will be\r\n            observed by\r\n            all\r\n            the\r\n            exchanges including the primary, NSE and BSE. During Market Holidays the Share, Currency or Commodity Trading\r\n          segments remain closed apart from weekends.</p>\r\n          <h2 class='text-left'>Muhurat Trading {{currentYear}}</h2>\r\n          <p>Muhurat Trading shall be held on Thursday, November 04, {{currentYear}} (Diwali – Laxmi Pujan). Timings of\r\n            Muhurat\r\n            Trading\r\n            shall\r\n          be notified subsequently.</p>\r\n          <p><strong>Please Note:</strong> The Exchange may alter/change any of the above Share Market Holidays for\r\n          {{currentYear}},\r\n          for\r\n          which a separate circular shall be issued in advance. The Exchange may, however, close the market on days\r\n          other\r\n          than\r\n          the above schedule holidays or may open the market on days originally declared as holidays. The Exchange may\r\n          also\r\n          extend, advance or reduce trading hours when it deems fit and necessary.\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</section>";

/***/ })

}]);