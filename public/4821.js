(self["webpackChunkjiffy_upgraded"] = self["webpackChunkjiffy_upgraded"] || []).push([[4821],{

/***/ 11846:
/*!*****************************************************************************!*\
  !*** ./src/app/directives/dropdown/dropdown-not-closable-zone.directive.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DropdownNotClosableZone: () => (/* binding */ DropdownNotClosableZone)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 17705);


/**
 * Refer @link https://github.com/pleerock/ngx-dropdown/blob/master/src/DropdownNotClosableZone.ts
 */
let DropdownNotClosableZone = class DropdownNotClosableZone {
  constructor(elementRef) {
    this.elementRef = elementRef;
  }
  contains(element) {
    if (this.dropdownNotClosabledZone === false) return false;
    const thisElement = this.elementRef.nativeElement;
    return thisElement.contains(element);
  }
  static {
    this.ctorParameters = () => [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }];
  }
  static {
    this.propDecorators = {
      dropdownNotClosabledZone: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
        args: ["dropdown-not-closable-zone"]
      }]
    };
  }
};
DropdownNotClosableZone = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({
  selector: "[dropdown-not-closable-zone]",
  standalone: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef])], DropdownNotClosableZone);


/***/ }),

/***/ 55720:
/*!****************************************************************!*\
  !*** ./src/app/directives/dropdown/dropdown-open.directive.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DropdownOpen: () => (/* binding */ DropdownOpen)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _dropdown_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown.directive */ 51429);



/**
 * Refer @link https://github.com/pleerock/ngx-dropdown/blob/master/src/DropdownOpen.ts
 */
let DropdownOpen = class DropdownOpen {
  // -------------------------------------------------------------------------
  // Constructor
  // -------------------------------------------------------------------------
  constructor(dropdown, elementRef) {
    this.dropdown = dropdown;
    this.elementRef = elementRef;
    // -------------------------------------------------------------------------
    // Private Properties
    // -------------------------------------------------------------------------
    /**
     * This hack is needed for dropdown not to open and instantly closed
     */
    this.openedByFocus = false;
    const _this = this;
    this.closeDropdownOnOutsideClick = function closeDropdownOnOutsideClick(event) {
      _this.closeIfInClosableZone(event);
    };
  }
  // -------------------------------------------------------------------------
  // Public Methods
  // -------------------------------------------------------------------------
  toggle() {
    if (this.dropdown.isOpened()) {
      this.close();
    } else {
      this.open();
    }
  }
  open() {
    if (this.dropdown.isOpened()) return;
    this.dropdown.open();
    document.addEventListener("click", this.closeDropdownOnOutsideClick, true);
  }
  close() {
    if (!this.dropdown.isOpened()) return;
    this.dropdown.close();
    document.removeEventListener("click", this.closeDropdownOnOutsideClick, true);
  }
  openDropdown() {
    if (this.dropdown.activateOnFocus && this.openedByFocus) {
      this.openedByFocus = false;
      return;
    }
    if (this.dropdown.isOpened() && this.dropdown.toggleClick) {
      this.close();
    } else {
      this.open();
    }
  }
  dropdownKeydown(event) {
    if (event.keyCode === 40) {
      // down
      this.openDropdown();
    }
  }
  onFocus() {
    if (!this.dropdown.activateOnFocus) return;
    this.openedByFocus = true;
    this.dropdown.open();
    document.addEventListener("click", this.closeDropdownOnOutsideClick, true);
  }
  onBlur(event) {
    if (!this.dropdown.activateOnFocus) return;
    if (event.relatedTarget && !this.dropdown.isInClosableZone(event.relatedTarget) && event.relatedTarget !== this.elementRef.nativeElement) {
      this.dropdown.close();
      document.removeEventListener("click", this.closeDropdownOnOutsideClick, true);
    }
  }
  // -------------------------------------------------------------------------
  // Lifecycle Methods
  // -------------------------------------------------------------------------
  ngOnDestroy() {
    document.removeEventListener("click", this.closeDropdownOnOutsideClick, true);
  }
  // -------------------------------------------------------------------------
  // Private Methods
  // -------------------------------------------------------------------------
  closeIfInClosableZone(event) {
    if (!this.dropdown.isInClosableZone(event.target) && event.target !== this.elementRef.nativeElement && !this.elementRef.nativeElement.contains(event.target)) {
      this.dropdown.close();
      document.removeEventListener("click", this.closeDropdownOnOutsideClick, true);
    }
  }
  static {
    this.ctorParameters = () => [{
      type: _dropdown_directive__WEBPACK_IMPORTED_MODULE_0__.Dropdown,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Host
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }];
  }
  static {
    this.propDecorators = {
      openDropdown: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
        args: ["click"]
      }],
      dropdownKeydown: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
        args: ["keydown", ["$event"]]
      }],
      onFocus: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
        args: ["focus"]
      }],
      onBlur: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
        args: ["blur", ["$event"]]
      }]
    };
  }
};
DropdownOpen = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive)({
  selector: "[dropdown-open]",
  exportAs: "dropdownOpen",
  standalone: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [_dropdown_directive__WEBPACK_IMPORTED_MODULE_0__.Dropdown, _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef])], DropdownOpen);


/***/ }),

/***/ 51429:
/*!***********************************************************!*\
  !*** ./src/app/directives/dropdown/dropdown.directive.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dropdown: () => (/* binding */ Dropdown)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _dropdown_not_closable_zone_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown-not-closable-zone.directive */ 11846);



/**
 * Refer @link https://github.com/pleerock/ngx-dropdown/blob/master/src/Dropdown.ts
 */
let Dropdown = class Dropdown {
  // -------------------------------------------------------------------------
  // Constructor
  // -------------------------------------------------------------------------
  constructor(elementRef) {
    this.elementRef = elementRef;
    this.toggleClick = true;
    this.activateOnFocus = false;
    this.onOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }
  // -------------------------------------------------------------------------
  // Public Methods
  // -------------------------------------------------------------------------
  open() {
    const element = this.elementRef.nativeElement;
    element.classList.add("open");
    this.onOpen.emit(undefined);
  }
  close() {
    const element = this.elementRef.nativeElement;
    element.classList.remove("open");
    this.onClose.emit(undefined);
  }
  isOpened() {
    const element = this.elementRef.nativeElement;
    return element.classList.contains("open");
  }
  isInClosableZone(element) {
    if (!this.notClosableZone) return false;
    return this.notClosableZone.contains(element);
  }
  static {
    this.ctorParameters = () => [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }];
  }
  static {
    this.propDecorators = {
      toggleClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
        args: ["dropdownToggle"]
      }],
      activateOnFocus: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
        args: ["dropdownFocusActivate"]
      }],
      onOpen: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
      }],
      onClose: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
      }],
      notClosableZone: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChild,
        args: [_dropdown_not_closable_zone_directive__WEBPACK_IMPORTED_MODULE_0__.DropdownNotClosableZone]
      }]
    };
  }
};
Dropdown = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive)({
  selector: "[dropdown]",
  exportAs: "dropdown",
  standalone: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef])], Dropdown);


/***/ }),

/***/ 74821:
/*!*************************************************************************!*\
  !*** ./src/app/tools-module/stock-screener/stock-screener.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StockScreenerComponent: () => (/* binding */ StockScreenerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _stock_screener_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stock-screener.component.html?ngResource */ 86279);
/* harmony import */ var _stock_screener_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stock-screener.component.scss?ngResource */ 24123);
/* harmony import */ var _stock_screener_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_stock_screener_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/accordion */ 14580);
/* harmony import */ var src_app_directives_dropdown_dropdown_open_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/directives/dropdown/dropdown-open.directive */ 55720);
/* harmony import */ var src_app_directives_dropdown_dropdown_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/directives/dropdown/dropdown.directive */ 51429);
/* harmony import */ var src_app_services_seo_seo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/seo/seo.service */ 44897);
/* harmony import */ var _pipes_value_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pipes/value.pipe */ 50615);
/* harmony import */ var _services_rest_tool_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/rest/tool.service */ 91387);
/* harmony import */ var _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/shared-data/shared-data.service */ 46013);
/* harmony import */ var _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/utils/utils.service */ 89893);
















// import { AccordionModule } from 'ngx-bootstrap/accordion';
// import { NouisliderModule } from 'ng2-nouislider';
let StockScreenerComponent = class StockScreenerComponent {
  constructor(router, sharedDataService, utils, toolService, route, location, renderer, seo) {
    this.router = router;
    this.sharedDataService = sharedDataService;
    this.utils = utils;
    this.toolService = toolService;
    this.route = route;
    this.location = location;
    this.renderer = renderer;
    this.seo = seo;
    /** Range to be stored */
    this.someRange = [5000, 10000];
    /**
    * present active Tab
    */
    this.addFilter = 0;
    /**Filter add Count */
    this.activeTab = 0;
    /**Filter Adjust Count */
    this.adjustTable = 0;
    /** select all varaiable */
    this.selectedVar = [];
    /** rows in ngx-table */
    this.rows = [];
    /**Responsive filter flag */
    this.filterActive = 0;
    this.filterConfig = {
      category: {},
      selectedCategory: [],
      all: {},
      selectedFilters: [],
      categoryLists: [],
      lists: [],
      operator: false,
      defaultFilters: [10021, '10021']
    };
    this.sectorList = [];
    this.isTradingChart = this.utils.getUserId() ? this.utils.getPreferences('ChartType') == "TRADING_VIEW" || localStorage.getItem('chartType') == 'true' : localStorage.getItem('chartType') == 'true' || false;
    this.screenerCategory = {};
    this.filterCategoryArray = [];
    this.subFilterCategory = [];
    this.selectedFilterArray = [];
    this.selectedScrip = [];
    this.dropdownFIlter = "0";
    this.watchlistNames = this.utils.getWatchListName(-1) || {};
    this.tableConfig = {
      cssClasses: {
        sortAscending: 'icon-angle-down',
        sortDescending: 'icon-angle-up',
        pagerLeftArrow: 'icon-angle-left',
        pagerRightArrow: 'icon-angle-right',
        pagerPrevious: 'icon-angle-left',
        pagerNext: 'icon-angle-right'
      },
      nonNumericColumns: ["SectorName", "SegmentID", "Token", "Series", "Symbol", "CompanyName", "YearEndingDate"],
      columnsData: [{
        name: 'CompanyName',
        ViewName: "Company Name",
        checked: true,
        index: 0,
        disabled: true,
        freeze: true,
        width: 300
      }, {
        name: 'SectorName',
        ViewName: "Sector",
        checked: true,
        index: 0,
        disabled: false,
        freeze: false
      }],
      fullData: [],
      scripSearch: ''
    };
    this.routeQueryParams = this.route.queryParams.subscribe(params => {
      this.paramData = JSON.parse(JSON.stringify(params));
    });
    this.getFilter();
    this.nonNumericList = ["SegmentID", "Token", "Series", "Symbol", "CompanyName", "YearEndingDate"];
    this.getSectorList();
    this.seo.setMeta('stock-screener');
  }
  getSectorList() {
    this.toolService.getSectorList().subscribe(res => {
      if (res.Status === 'Success' && res.Response) {
        this.sectorList = [];
        res.Response.sort((item1, item2) => {
          return item1 > item2 ? 1 : item1 < item2 ? -1 : 0;
        });
        res.Response.forEach((element, index) => {
          this.sectorList.push({
            id: index + 1,
            label: element,
            checked: false
          });
        });
      }
    }, err => {});
  }
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.watchlistNames = this.utils.getWatchListName(-1) || {};
    document.body.classList.add('stock-screener-pge');
  }
  /** call on component destroy */
  ngOnDestroy() {
    if (this.routeQueryParams) this.routeQueryParams.unsubscribe();
    document.body.classList.remove('stock-screener-pge');
  }
  /**
   * For change in tab filter
   * @param i For adding active class
   * @param item for filter value
   */
  activateFilter(i, item) {
    this.activeTab = i;
    this.filterConfig.selectedCategory = (this.filterConfig.category[item] || {}).data || [];
  }
  /**
   * column remove from table
   * @param index open table
   */
  adjustTableToggler(index) {
    this.adjustTable = this.adjustTable == 1 ? 0 : 1;
  }
  /** Close adjust table popup */
  closeAdjustTable() {
    this.adjustTable = 0;
    this.columns.showCol = this.columns.copyCol;
  }
  updateTable(filterValue) {
    if ((filterValue || '').trim().length) {
      let regex = new RegExp(filterValue, 'ig');
      this.rows = [...(this.tableConfig.fullData || []).filter(scrip => {
        return scrip.CompanyName.search(regex) > -1 || scrip.Symbol.search(regex) > -1 || (scrip.Token || '').toString().search(regex) > -1;
      })];
    } else {
      this.rows = [...this.tableConfig.fullData];
    }
  }
  /**
   * to get screener data
   * @param paramData url params
   */
  getFilter(paramData) {
    this.sharedDataService.isServiceHit = true;
    this.toolService.getMarketScreenerRange({}).subscribe(res => {
      if (res.Status === 'Success' && res.Response) {
        this.filterResponse = res.Response;
        this.processFilterRanges(res.Response);
        this.processParams();
        this.applyParams();
        this.getMarketScreenerData(this.filterConfig.selectedFilters);
      }
    });
  }
  processParams() {
    let paramKeys = Object.keys(this.paramData || {});
    if (!paramKeys.length) {
      this.paramData = {};
      (this.filterConfig.defaultFilters || []).forEach(filter => {
        this.paramData[filter] = (this.filterConfig.all[filter].finalRange || []).join('_');
      });
      paramKeys = Object.keys(this.paramData || {});
    }
    if (this.paramData) {
      paramKeys.forEach((param, index) => {
        let filter = this.filterConfig.all[param];
        filter.checked = true;
        let values = this.paramData[param].split('_');
        if (values && values.length) {
          let minRange = Number(values[0]) < filter.MinRange ? filter.MinRange : Number(values[0]);
          let maxRange = Number(values[1]) > filter.MaxRange ? filter.MaxRange : Number(values[1]);
          filter.finalRange = [minRange, maxRange];
          this.filterConfig.selectedFilters.push(filter);
        }
      });
    }
    // if (this.filterConfig.selectedFilters.length > 1) {
    //   let defaultFilter = this.filterConfig.selectedFilters.filter((filter) => this.filterConfig.defaultFilters.indexOf(filter.FilterKey) > -1);
    //   this.filterConfig.selectedFilters = this.filterConfig.selectedFilters.filter((filter) => this.filterConfig.defaultFilters.indexOf(filter.FilterKey) == -1);
    //   this.filterConfig.selectedFilters.unshift(defaultFilter[0]);
    // }
  }
  applyParams() {
    let urlParams = [];
    this.filterConfig.selectedFilters.forEach((element, index) => {
      this.paramData[element.FilterKey] = element.finalRange.join('_');
      urlParams.push(element.FilterKey + '=' + this.paramData[element.FilterKey]);
    });
    this.location.replaceState('tools/stock-screener?' + urlParams.join('&'));
  }
  processFilterRanges(filters) {
    let keyMapper = {
      "netsalegrowth": {
        columnKeyName: 'NetSaleGrowth',
        columnLabelName: 'Net Sale Growth',
        Unit: '%'
      },
      "ebitdagrowth": {
        columnKeyName: 'EBITDAGrowth',
        columnLabelName: 'EBIDTA Growth',
        Unit: '%'
      },
      "patgrowth": {
        columnKeyName: 'PATGrowth',
        columnLabelName: 'PAT Growth',
        Unit: '%'
      },
      "ebitdamargin": {
        columnKeyName: 'EBITDAMargin',
        columnLabelName: 'EBIDTA Margin',
        Unit: '%'
      },
      "patmargin": {
        columnKeyName: 'PATMargin',
        columnLabelName: 'PAT Margin',
        Unit: '%'
      },
      "roic": {
        columnKeyName: 'RoCE',
        columnLabelName: 'Return on Capital Employed',
        Unit: '%'
      },
      "netdebttoebitda": {
        columnKeyName: 'NetDebtToEBITDA',
        columnLabelName: 'Net Debt/EBIDTA',
        Unit: ''
      }
    };
    let keys = Object.keys(keyMapper);
    (filters || []).forEach((item, index) => {
      item.checked = false;
      item.ViewName = (item.ViewName || item.FilterKeyName || '').replace(/([a-z])([A-Z])/g, '$1 $2').replace(/\b([A-Z]+)([A-Z])([a-z])/, '$1 $2$3').replace(/^./, function (str) {
        return str.toUpperCase();
      });
      item.factor = (item.Unit || '').toLowerCase().indexOf('cr.') > -1 ? 10000000 : 1;
      item.MaxRange = item.factor > 1 ? Number(this.utils.segmentTransform((Number(item.MaxRange) || 0) / item.factor, 1, true)) : Number(item.MaxRange) || 0;
      item.MinRange = item.factor > 1 ? Number(this.utils.segmentTransform((Number(item.MinRange) || 0) / item.factor, 1, true)) : Number(item.MinRange) || 0;
      item.MaxRange = item.MinRange == item.MaxRange ? item.MaxRange + 1 : item.MaxRange;
      item.MaxRange = item.factor > 1 ? Math.ceil(item.MaxRange) : item.MaxRange;
      item.MinRange = item.factor > 1 ? Math.floor(item.MinRange) : item.MinRange;
      item.finalRange = [item.MinRange, item.MaxRange];
      item.activeType = ['label', 'label'];
      item.columnLabelName = item.ViewName;
      item.columnKeyName = item.FilterKeyName;
      let filterKeyName = item.FilterKeyName.toLowerCase();
      if (item.FilterKey > 30000) {
        let filterKeyObject = keys.find(key => filterKeyName.indexOf(key) > -1);
        if (filterKeyObject) {
          item = {
            ...item,
            ...keyMapper[filterKeyObject]
          };
        }
      }
      if (!this.filterConfig.category[item.FilterCategory]) {
        let data = ['CAGR'].indexOf(item.FilterCategory) == -1 ? [{
          "FilterKeyName": "SelectAll",
          "ViewName": "SelectAll",
          "FilterCategory": item.FilterCategory,
          'checked': false
        }] : [];
        this.filterConfig.category[item.FilterCategory] = {
          isSelectAll: ['CAGR'].indexOf(item.FilterCategory) == -1,
          selected: false,
          data: data
        };
      }
      this.filterConfig.lists.push(item);
      this.filterConfig.category[item.FilterCategory].data.push(item);
      this.filterConfig.all[item.FilterKey] = item;
    });
    this.filterConfig.categoryLists = Object.keys(this.filterConfig.category);
    this.filterConfig.selectedCategory = this.filterConfig.category[this.filterConfig.categoryLists[0]].data || [];
  }
  addRemoveWatchList(scrip, profileId) {
    if (this.utils.isAuthorized()) {
      let isPresent = this.utils.checkFromWatchlist(scrip.SegmentID, scrip.Token);
      if (isPresent) {
        this.utils.error('Already Present', 'Scrip is Already present in Watchlist ' + isPresent.ProfileId);
      } else {
        this.utils.broadcast('addRemoveWatchList', {
          'SegmentId': scrip.SegmentID,
          'Token': scrip.Token,
          action: false,
          ProfileId: profileId
        });
      }
    } else {
      this.openPreLogin();
    }
  }
  /**
  * Open a popup when there is guest user for buy , sell and watchlist button
  */
  openPreLogin() {
    this.showPreLogin = true;
    this.renderer.setStyle(document.body, 'overflow', 'hidden');
  }
  /**
  * close preLogin popup for guest user on click of close button on prelogin popup
  */
  closePreLogin() {
    this.showPreLogin = false;
    this.renderer.setStyle(document.body, 'overflow', 'auto');
  }
  /**
   * on Selection/deselection of filter
   * @param data selected item
   */
  onFilterSelect(data) {
    data.checked = !data.checked;
    if (data.FilterKeyName == 'SelectAll') {
      let selectedFilterKeys = [];
      if (data.checked) {
        this.filterConfig.selectedFilters.forEach(element => {
          selectedFilterKeys.push(Number(element.FilterKey));
        });
        let unMergedFilters = this.filterConfig.selectedCategory.filter((element, index) => {
          element.checked = true;
          return selectedFilterKeys.indexOf(Number(element.FilterKey)) == -1 && this.filterConfig.defaultFilters.indexOf(element.FilterKey) == -1 && element.FilterKeyName != 'SelectAll';
        });
        unMergedFilters.forEach(element => {
          this.filterConfig.selectedFilters.push(element);
        });
      } else {
        this.filterConfig.selectedCategory.forEach(element => {
          element.checked = this.filterConfig.defaultFilters.indexOf(element.FilterKey) == -1 ? false : true;
          if (this.filterConfig.defaultFilters.indexOf(element.FilterKey) == -1 && element.FilterKeyName != 'SelectAll') {
            element.finalRange = [element.MinRange, element.MaxRange];
            selectedFilterKeys.push(element.FilterKey);
          }
        });
        this.filterConfig.selectedFilters = this.filterConfig.selectedFilters.filter((element, index) => {
          return selectedFilterKeys.indexOf(Number(element.FilterKey)) == -1 || this.filterConfig.defaultFilters.indexOf(element.FilterKey) > -1;
        });
      }
    } else if (data.FilterCategory != 'CAGR' && data.FilterKey < 30001) {
      if (data.checked) {
        this.filterConfig.selectedFilters.push(data);
        this.filterConfig.selectedFilters = this.filterConfig.selectedFilters.filter(obj => {
          return obj.FilterKey < 30001;
        });
      } else {
        this.filterConfig.selectedFilters = this.filterConfig.selectedFilters.filter(obj => {
          return obj.FilterKey != data.FilterKey && obj.FilterKey < 30001;
        });
      }
    } else if (data.FilterCategory == 'CAGR' || data.FilterKey >= 30001) {
      this.filterConfig.selectedFilters.forEach(element => {
        element.checked = false;
      });
      this.filterConfig.selectedFilters = [data];
    }
  }
  /**
   * on range change from range bar
   * @param data data that range is changed
   */
  onRangeChange(data) {
    this.getMarketScreenerData(this.filterConfig.selectedFilters);
  }
  /**
   * get data for filter and range selected selected
   * @param data
   */
  getMarketScreenerData(data) {
    let requestArray = [];
    let keyBasedFilters = {};
    let newColumn = [{
      name: 'CompanyName',
      ViewName: "Company Name",
      checked: true,
      index: 0,
      disabled: true,
      freeze: true,
      width: 300
    }, {
      name: 'SectorName',
      ViewName: "Sector",
      checked: true,
      index: 0,
      disabled: false,
      freeze: false,
      width: 200
    }];
    data.forEach(item => {
      let minRange = !isNaN(Number(item.finalRange[0])) && isFinite(Number(item.finalRange[0])) ? Number(item.finalRange[0]) : Number(item.MinRange);
      let maxRange = !isNaN(Number(item.finalRange[1])) && isFinite(Number(item.finalRange[1])) ? Number(item.finalRange[1]) : Number(item.MaxRange);
      requestArray.push({
        RangeFrom: minRange * item.factor,
        RangeTo: maxRange * item.factor,
        FilterKey: item.FilterKey,
        Operator: this.filterConfig.operator ? 2 : 1
      });
      keyBasedFilters[item.FilterKeyName] = item;
    });
    this.applyParams();
    const request = {
      "SegmentID": Number(this.dropdownFIlter),
      "SectorName": this.sectorList.filter(sector => sector.checked).map(sector => sector.label),
      'lstMarketScreenerRequestData': requestArray
    };
    this.sharedDataService.isServiceHit = true;
    this.rows = [];
    this.tableConfig.fullData = [];
    this.toolService.getMarketScreenerData(request).subscribe(res => {
      if (res.Status == 'Success' && res.Response && res.Response.length) {
        let columnKeys = Object.keys(res.Response[0]);
        columnKeys.forEach((key, index) => {
          if (this.tableConfig.nonNumericColumns.indexOf(key) == -1) {
            let filterItemData = keyBasedFilters[key];
            if (!filterItemData) {
              filterItemData = this.filterConfig.lists.filter(filter => filter.FilterKeyName == key || filter.columnKeyName == key)[0];
              keyBasedFilters[key] = filterItemData;
            }
            filterItemData = filterItemData || {};
            let viewName = filterItemData.columnLabelName || key.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/\b([A-Z]+)([A-Z])([a-z])/, '$1 $2$3').replace(/^./, function (str) {
              return str.toUpperCase();
            });
            newColumn.push({
              name: filterItemData.columnKeyName || key,
              checked: true,
              index: 1 + index,
              ViewName: viewName + (filterItemData.Unit ? '(' + filterItemData.Unit + ')' : ''),
              factor: filterItemData.factor || 1
            });
          }
        });
        this.tableConfig.columnsData = newColumn;
        columnKeys = columnKeys.filter(key => this.tableConfig.nonNumericColumns.indexOf(key) == -1);
        this.rows = res.Response;
        this.rows.forEach((item, index) => {
          item.companyURL = '/instrument/equity/' + item.CompanyName.toLowerCase().replace(/[\s|\&|\%]/g, '').trim() + '/' + item.SegmentID + '/' + item.Token;
          columnKeys.forEach(key => {
            let factor = keyBasedFilters[key] && keyBasedFilters[key].factor ? keyBasedFilters[key].factor : 1;
            if (((item[key] || '') + '').toLowerCase().indexOf('e') > -1) {
              item[key] = 'null';
            } else {
              item[key] = item[key] / factor;
            }
          });
        });
        this.customeQueryToggle = true;
        this.rows = [...this.rows];
        this.tableConfig.fullData = [...this.rows];
      } else if (res.Status == "Fail" && res.Reason == "Data not found.") {
        this.rows = [];
      } else {
        this.rows = [];
      }
      setTimeout(() => {
        this.datatable.recalculateColumns();
        this.datatable.offset = 0;
        this.tableConfig.scripSearch = '';
      }, 1000);
    }).add(() => this.sharedDataService.isServiceHit = false);
  }
  setSectorSelection() {
    this.getMarketScreenerData(this.filterConfig.selectedFilters);
  }
  /** On click of done Button */
  setFilterDone() {
    this.getMarketScreenerData(this.filterConfig.selectedFilters);
  }
  changeInputSlider(item, rangeFrom, rangeTo) {
    let finalRangeFrom = Number(rangeFrom) || 0;
    let finalRangeTo = Number(rangeTo) || 0;
    if (item.MinRange > finalRangeFrom) {
      finalRangeFrom = item.MinRange;
    }
    if (item.MaxRange < finalRangeTo || !finalRangeTo) {
      finalRangeTo = item.MaxRange;
    }
    item.finalRange = JSON.parse(JSON.stringify([finalRangeFrom, finalRangeTo]));
  }
  allowOnlyDigits(event) {
    let key = event.keyCode || event.charCode;
    return [8, 0, 46].indexOf(key) == -1 && key < 48 || key > 57 ? false : true;
  }
  setFocus(item, index) {
    item.activeType[index] = 'text';
    setTimeout(() => {
      let element = document.getElementById(item.FilterKeyName + '_text' + index);
      if (element) {
        element.focus();
        item.finalRange[index] = !item.finalRange[index] ? index == 0 ? item.MinRange : item.MaxRange : item.finalRange[index];
        setTimeout(() => {
          element['select']();
        }, 50);
      }
    }, 100);
  }
  setFocusOut(item, index) {
    item.activeType[index] = 'label';
    this.getMarketScreenerData(this.filterConfig.selectedFilters);
  }
  /**
   * reove applied filter
   * @param item item to be removed
   */
  removeFilter(item) {
    item.checked = false;
    this.filterConfig.selectedFilters = this.filterConfig.selectedFilters.filter(obj => {
      return obj.FilterKey != item.FilterKey;
    });
    if (this.filterConfig.category[item.FilterCategory].isSelectAll) {
      this.filterConfig.category[item.FilterCategory].data[0].checked = false;
    }
    this.getMarketScreenerData(this.filterConfig.selectedFilters);
  }
  onOperatorChange() {
    this.getMarketScreenerData(this.filterConfig.selectedFilters);
  }
  removeAll() {
    (this.filterConfig.selectedFilters || []).forEach(filter => {
      filter.checked = this.filterConfig.defaultFilters.indexOf(filter.FilterKey) > -1;
      let category = this.filterConfig.category[filter.FilterCategory];
      if (category.isSelectAll && category.data[0].checked) {
        let isUnselected = category.data.filter((catItem, catIndex) => !catItem.checked);
        if (isUnselected.length) category.data[0].checked = false;
      }
    });
    this.filterConfig.selectedFilters = this.filterConfig.selectedFilters.filter(obj => {
      return this.filterConfig.defaultFilters.indexOf(obj.FilterKey) > -1;
    });
    this.applyParams();
    this.getMarketScreenerData(this.filterConfig.selectedFilters);
  }
  /**
   * on select row from table
   * @param  selected row data
   */
  onSelect(event) {
    this.selectedScrip = event.selected;
  }
  processQuery(event) {
    // debugger;
    this.customeQueryToggle = false;
  }
  /**
   * column selection to be removed and add
   * @param item column needed to add and remove
   */
  onColumnChange(item) {
    item.checked = !item.checked;
    if (item.checked) {
      this.columns.selecteCol = this.columns.selecteCol.filter(obj => {
        return !obj.checked;
      });
    } else {
      let newCol = this.columns.allColumns.filter(obj => {
        return obj.name == item.name;
      });
      this.columns.selecteCol.splice(item.index, 0, newCol[0]);
    }
  }
  /** on equity select type */
  onEquityChange() {
    this.getMarketScreenerData(this.filterConfig.selectedFilters);
  }
  /** reset all ranges */
  resetRanges(item) {
    if (item) {
      item.finalRange = [item.MinRange, item.MaxRange];
    } else {
      this.filterConfig.selectedFilters.forEach(element => {
        element.finalRange = [element.MinRange, element.MaxRange];
      });
    }
    this.getMarketScreenerData(this.filterConfig.selectedFilters);
  }
  /**
   * for filter search operation
   * @param
   */
  onFilterSearch($event) {
    if (this.searchFilter && this.searchFilter.trim().length > 1) {
      let value = new RegExp(this.searchFilter.trim(), "i");
      let filterKeys = Object.keys(this.filterConfig.all);
      this.filterConfig.searchedFilters = [];
      filterKeys.forEach((element, index) => {
        if (value.test(this.filterConfig.all[element].FilterKeyName) || value.test(this.filterConfig.all[element].ViewName)) {
          this.filterConfig.searchedFilters.push(this.filterConfig.all[element]);
        }
      });
    }
    // if ( this.searchFilter.length > 1 ) {
    //   this.filterCategoryArray = [ 'Search Result' ];
    //   let newArr = [];
    //   let inputStr = this.searchFilter.toLowerCase();
    //   this.filterResponse.forEach( element => {
    //     let str = element.ViewName.toLowerCase();
    //     if ( str.indexOf( inputStr ) > -1 && element.ViewName != 'SelectAll' ) {
    //       newArr.push( element );
    //     }
    //   } );
    //   ( newArr.length > 0 ) ? this.subFilterCategory = newArr : this.subFilterCategory = [ { ViewName: 'No Matches Found' } ];
    // }
    // else {
    //   this.filterCategoryArray = Object.keys( this.filterConfig );
    //   this.subFilterCategory = this.filterConfig[ this.filterCategoryArray[ 0 ] ];
    // }
  }
  navigateToLogin() {
    this.closePreLogin();
    this.utils.setFromURL();
    this.router.navigate(['/auth/login']);
  }
  navigateToCharts(item) {
    this.isTradingChart = this.utils.getUserId() ? this.utils.getPreferences('ChartType') == "TRADING_VIEW" || localStorage.getItem('chartType') == 'true' : localStorage.getItem('chartType') == 'true' || false;
    if (this.isTradingChart) {
      window.open('/tv/trading-view-charts/' + item.Symbol + '/' + item.SegmentID + '/' + item.Token + "?scripDesc=" + (item.SecDesc || item.Symbol));
    } else {
      window.open('/cq/advanced-charts/' + item.Symbol + '/' + item.SegmentID + '/' + item.Token);
      // this.router.navigate([((this.isTradingChart)?'/trading-view-charts/':'/advanced-charts/')+item.Symbol+'/'+item.SegmentID+'/'+item.Token]);
    }
  }
  static {
    this.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
    }, {
      type: _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_7__.SharedDataService
    }, {
      type: _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_8__.UtilsService
    }, {
      type: _services_rest_tool_service__WEBPACK_IMPORTED_MODULE_6__.ToolService
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute
    }, {
      type: _angular_common__WEBPACK_IMPORTED_MODULE_10__.Location
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Renderer2
    }, {
      type: src_app_services_seo_seo_service__WEBPACK_IMPORTED_MODULE_4__.SeoService
    }];
  }
  static {
    this.propDecorators = {
      datatable: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild,
        args: ['table', {
          static: false
        }]
      }]
    };
  }
};
StockScreenerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-stock-screener',
  template: _stock_screener_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewEncapsulation.None,
  standalone: true,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_14__.AccordionModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink, _pipes_value_pipe__WEBPACK_IMPORTED_MODULE_5__.ValuePipe, src_app_directives_dropdown_dropdown_directive__WEBPACK_IMPORTED_MODULE_3__.Dropdown, src_app_directives_dropdown_dropdown_open_directive__WEBPACK_IMPORTED_MODULE_2__.DropdownOpen],
  styles: [(_stock_screener_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router, _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_7__.SharedDataService, _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_8__.UtilsService, _services_rest_tool_service__WEBPACK_IMPORTED_MODULE_6__.ToolService, _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute, _angular_common__WEBPACK_IMPORTED_MODULE_10__.Location, _angular_core__WEBPACK_IMPORTED_MODULE_11__.Renderer2, src_app_services_seo_seo_service__WEBPACK_IMPORTED_MODULE_4__.SeoService])], StockScreenerComponent);


/***/ }),

/***/ 24123:
/*!**************************************************************************************!*\
  !*** ./src/app/tools-module/stock-screener/stock-screener.component.scss?ngResource ***!
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
.stock-screener {
  display: flex;
  justify-content: stretch;
  align-items: stretch;
  position: fixed;
  top: 82px;
  bottom: 0px;
  left: 0;
  z-index: 9999;
  background: #ffffff;
  width: 100%;
  top: 190px;
  position: static;
}
@media (max-width: 1200px) and (min-width: 990px) {
  .stock-screener {
    top: 280px;
  }
}
@media (max-width: 990px) {
  .stock-screener {
    top: 260px;
    display: block;
    overflow: auto;
  }
}
@media (max-width: 560px) {
  .stock-screener {
    top: 60px;
  }
}
.stock-screener .floating-filter {
  position: fixed;
  top: 60%;
  left: 0;
  padding: 15px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  color: #fe595d;
  font-size: 18px;
  margin-top: 0px;
  display: none;
  z-index: 9;
  background: #ffffff;
  display: none;
  color: #2d77f4;
}
@media (max-width: 990px) {
  .stock-screener .floating-filter {
    display: block;
  }
}
.stock-screener .filter-section {
  width: 350px;
  box-shadow: 0px 0px 50px 0px rgba(169, 172, 189, 0.15);
  background: #fefeff;
  z-index: 99;
  transition: all 0.3s ease;
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 9999999;
  border-right: 1px solid #F4F3F8;
  margin-top: -100px;
  position: fixed;
  height: calc(100vh - 81px);
  margin-top: 0;
  top: 81px;
  left: 0;
  z-index: 1;
  z-index: 100;
}
@media (max-width: 1550px) and (min-width: 990px) {
  .stock-screener .filter-section {
    width: 300px;
    height: calc(100vh - 65px);
    height: calc(100vh - 61px);
    top: 61px;
  }
}
@media (max-width: 990px) {
  .stock-screener .filter-section {
    height: calc(100vh - 60px);
    left: -350px;
    position: fixed;
  }
}
@media (max-width: 1200px) {
  .stock-screener .filter-section {
    margin-top: -196px;
    margin-top: 0;
  }
}
@media (max-width: 990px) {
  .stock-screener .filter-section {
    margin-top: 0;
    top: 0;
    height: 100%;
  }
}
.stock-screener .filter-section.filter-active {
  left: 0px;
  z-index: 99999;
  box-shadow: 0 0 0 5000px rgba(0, 0, 0, 0.7);
}
.stock-screener .filter-section .filter-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 15px;
  border-bottom: 1px solid #F4F3F8;
  background: #ffffff;
}
@media (max-width: 990px) {
  .stock-screener .filter-section .filter-header {
    padding: 20px 15px;
  }
}
.stock-screener .filter-section .filter-header i {
  font-size: 20px;
  margin-right: 15px;
  background-image: linear-gradient(to right, #2D77F4 0, #2D77F4 100%);
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
}
.stock-screener .filter-section .filter-header i.hidden-md {
  margin-right: 0px;
}
.stock-screener .filter-section .filter-header span {
  font-size: 20px;
  font-weight: 700;
}
.stock-screener .filter-section .filter-added {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  color: #8a979f;
  font-size: 14px;
  border-bottom: 1px solid #F4F3F8;
  background: #ffffff;
}
.stock-screener .filter-section .filter-added .reset-filter {
  cursor: pointer;
}
.stock-screener .filter-section .filter-added .reset-filter i {
  display: inline-block;
  vertical-align: middle;
  margin-right: 5px;
}
.stock-screener .filter-section .filter-added .reset-filter span {
  display: inline-block;
  vertical-align: middle;
}
.stock-screener .filter-section .filter-list {
  height: 100%;
  overflow: auto;
  background: #ffffff;
}
.stock-screener .filter-section .add-remove-section {
  position: relative;
}
.stock-screener .filter-section .add-remove-section .dropdown-menu {
  left: auto;
  right: 0;
  margin: 10px 0 0 0;
  border: 0;
}
.stock-screener .filter-section .add-remove-section .dropdown-menu li a {
  padding: 6px 20px;
}
.stock-screener .filter-section .add-remove-section .dropdown-menu li a:hover {
  background: #fe595d;
  color: #ffffff;
}
.stock-screener .filter-section .filter-footer {
  padding: 20px;
  position: relative;
  background: #ffffff;
}
@media (max-width: 1550px) {
  .stock-screener .filter-section .filter-footer {
    padding: 10px;
  }
}
.stock-screener .filter-section .filter-footer .btn-filter {
  background-image: linear-gradient(to right, #ffc174 0%, #fe616e 100%);
  padding: 12px;
  width: 100%;
  color: #ffffff;
  font-weight: 600;
  font-size: 16px;
  border: none;
  text-transform: uppercase;
  background: #2D77F4;
}
@media (max-width: 990px) {
  .stock-screener .filter-section .filter-footer .btn-filter {
    display: block;
    margin: 0 auto;
    max-width: 350px;
  }
}
.stock-screener .filter-section .filter-footer .advance-filters {
  position: absolute;
  left: -200%;
  bottom: 0;
  background: #ffffff;
  width: 500px;
  box-shadow: 0px 0px 4px 0px rgba(255, 255, 255, 0.2);
  transition: 0.5s linear;
  z-index: -1;
  margin-left: 1px;
}
@media (max-width: 768px) {
  .stock-screener .filter-section .filter-footer .advance-filters {
    width: 430px;
  }
}
.stock-screener .filter-section .filter-footer .advance-filters.active {
  left: 100%;
}
.stock-screener .filter-section .filter-footer .advance-filters .advc-filter-header {
  padding: 15px;
  text-align: center;
  background: #fe646e;
  color: #ffffff;
  font-weight: 600;
  background: #2d77f4;
}
.stock-screener .filter-section .filter-footer .advance-filters .advc-filter-footer {
  padding: 15px 35px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #e2e2e2;
}
.stock-screener .filter-section .filter-footer .advance-filters .advc-filter-footer input {
  width: 70%;
  padding: 10px;
  border: 1px solid #fe646e;
  border: 1px solid #2d77f4;
  border-radius: 5px;
  outline: none;
}
.stock-screener .filter-section .filter-footer .advance-filters .advc-filter-footer .btn {
  width: 20%;
}
.stock-screener .main-section {
  padding: 40px;
  width: calc(100% - 350px);
  overflow: auto;
  margin-left: 350px;
}
@media (max-width: 1550px) {
  .stock-screener .main-section {
    padding: 20px;
    width: calc(100% - 300px);
    margin-left: 300px;
  }
  .stock-screener .main-section .card {
    margin-bottom: 20px;
  }
}
@media (max-width: 990px) {
  .stock-screener .main-section {
    width: 100%;
    margin-left: 0;
  }
}
.stock-screener .main-section > h3 {
  margin-top: 0;
  margin-bottom: 30px;
}
.stock-screener .main-section .dropdown-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
}
.stock-screener .main-section .dropdown-card .dropdown-wrapper {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.stock-screener .main-section .dropdown-card .dropdown-wrapper .filter-dropdown + .filter-dropdown {
  margin-left: 8px;
}
.stock-screener .main-section .dropdown-card .right-icons button {
  text-align: center;
  padding: 0 !important;
  border-radius: 0;
  font-size: 26px;
  width: 75px;
  height: 48px;
  background: #faecef;
  border-color: #faecef;
}
.stock-screener .main-section .dropdown-card .right-icons button i {
  display: block;
  background-image: linear-gradient(to right, #ffc174 0, #fe616e 100%);
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
}

/*Data tables*/
.ngx-datatable {
  font-size: 12px;
  border: 1px solid #cccccc;
  overflow: visible;
}
@media (min-width: 1550px) {
  .ngx-datatable {
    font-size: 14px;
  }
}
.ngx-datatable .datatable-header {
  border-bottom: 1px solid #ccc;
  height: auto !important;
}
.ngx-datatable .datatable-header .datatable-header-cell {
  font-weight: bold;
  color: #8a97a0;
  background: #f6f7f8;
  height: 100%;
  font-size: 13px !important;
  white-space: pre-wrap !important;
  line-height: 1.2;
}
.ngx-datatable .datatable-header .datatable-header-cell:last-child {
  padding-right: 25px !important;
}
.ngx-datatable .datatable-row-left .datatable-body-cell {
  padding: 5px 10px !important;
  text-align: left !important;
  overflow: visible !important;
}
.ngx-datatable .datatable-row-left .datatable-body-cell .stock-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.ngx-datatable .datatable-row-left .datatable-body-cell .stock-title .right-icon {
  margin-right: -10px;
  margin-left: 10px;
  display: flex;
}
.ngx-datatable .datatable-row-left .datatable-body-cell .stock-title .right-icon div[dropdown] button[dropdown-open] {
  padding: 5px;
}
.ngx-datatable .datatable-row-left .datatable-body-cell .stock-title .right-icon div[dropdown] button[dropdown-open] i {
  font-size: 12px;
}
.ngx-datatable .datatable-row-left .datatable-body-cell .stock-title .right-icon div[dropdown] + div[dropdown] {
  margin-left: 10px;
}
.ngx-datatable .datatable-row-left .datatable-body-cell .dropdown-menu {
  left: 100%;
  bottom: 0;
  top: auto;
  border: 1px solid #eee;
  margin-left: 15px !important;
  border-radius: 0px;
}
.ngx-datatable .datatable-row-left .datatable-body-cell .dropdown-menu li a:hover {
  background: #f6f7f8;
}
.ngx-datatable .datatable-row-left .datatable-header-cell {
  padding: 10px !important;
}
.ngx-datatable .datatable-row-center .datatable-header-cell {
  padding: 10px !important;
  text-align: right;
}
.ngx-datatable .datatable-row-center .datatable-header-cell:first-child {
  text-align: left;
}
.ngx-datatable .datatable-body {
  height: 400px;
}
@media (min-width: 1550px) {
  .ngx-datatable .datatable-body {
    height: 600px;
  }
}
.ngx-datatable .datatable-body .datatable-row-wrapper:first-child .dropdown-menu, .ngx-datatable .datatable-body .datatable-row-wrapper:nth-child(2) .dropdown-menu, .ngx-datatable .datatable-body .datatable-row-wrapper:nth-child(3) .dropdown-menu, .ngx-datatable .datatable-body .datatable-row-wrapper:nth-child(4) .dropdown-menu, .ngx-datatable .datatable-body .datatable-row-wrapper:nth-child(5) .dropdown-menu, .ngx-datatable .datatable-body .datatable-row-wrapper:nth-child(6) .dropdown-menu {
  bottom: auto;
  top: 0%;
}
.ngx-datatable .datatable-body .datatable-row-wrapper:nth-last-child(2) .dropdown-menu, .ngx-datatable .datatable-body .datatable-row-wrapper:last-child .dropdown-menu {
  bottom: 0;
  top: auto;
}
.ngx-datatable .datatable-body .datatable-row-wrapper:hover {
  background: #f5f5f5;
}
.ngx-datatable .datatable-body .datatable-row-wrapper:nth-child(odd) {
  background: #f9f9f9;
}
.ngx-datatable .datatable-body .datatable-row-wrapper .datatable-body-row {
  border-bottom: 1px solid #eee;
}
.ngx-datatable .datatable-body .datatable-row-wrapper .datatable-body-row .datatable-row-center {
  background: #fff;
}
.ngx-datatable .datatable-body .datatable-body-cell {
  padding: 5px 10px !important;
}
.ngx-datatable .datatable-body .datatable-body-cell:last-child {
  padding-right: 25px !important;
}
.ngx-datatable .datatable-body .datatable-body-cell span {
  vertical-align: -webkit-baseline-middle;
}
.ngx-datatable .datatable-pager .pager li {
  border-radius: 0;
  margin: 0 2px;
}
.ngx-datatable .datatable-pager .pager li a {
  border-radius: 0;
  margin: 0 2px;
  color: #000;
  border: 0;
}
.ngx-datatable .datatable-pager .pager li.active a {
  background: #f5f5f5;
  font-weight: bold;
  color: #ff7c7c;
}
.ngx-datatable .datatable-pager .pager li.disabled a {
  color: #aaa;
}

.mt-0 {
  margin-top: 0;
}

/*Accordion Styling*/
accordion accordion-group {
  border-bottom: 1px solid #F4F3F8 !important;
}
accordion accordion-group + accordion-group {
  margin-top: 0px !important;
}
accordion accordion-group .panel {
  background: #ffffff;
  box-shadow: none;
  border: none;
}
accordion accordion-group .panel .panel-heading {
  background: #ffffff;
  border: none;
  padding: 15px;
}
accordion accordion-group .panel .panel-heading .panel-title .accordion-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
accordion accordion-group .panel .panel-heading .panel-title .accordion-header .arrow {
  width: 100px;
  margin-left: 10px;
  text-align: right;
}
accordion accordion-group .panel .panel-heading .panel-title .accordion-header .arrow span {
  font-size: 12px;
  margin-right: 15px;
  cursor: pointer;
}
accordion accordion-group .panel .panel-heading .panel-title .accordion-header .arrow i {
  transition: 0.5s ease;
  display: inline-block;
  vertical-align: middle;
}
accordion accordion-group .panel .panel-heading .panel-title .accordion-header .title {
  font-size: 12px;
  font-weight: 700;
  word-break: break-all;
  width: calc(100% - 100px);
}
accordion accordion-group .panel .panel-collapse .panel-body {
  border-top: 0px !important;
  background: #fafbfd;
  padding: 0 15px 15px;
  color: #8a979f;
}
accordion accordion-group.panel-open .panel-heading {
  background: #fafbfd;
}
accordion accordion-group.panel-open .panel-heading .panel-title .accordion-header .arrow i {
  transform: rotate(180deg);
}

/*UI SLider Styling*/
nouislider {
  padding: 0px 10px;
}
nouislider .noUi-horizontal {
  height: 8px;
  border: none;
  background: #dedede;
}
nouislider .noUi-horizontal .noUi-handle {
  width: 25px;
  height: 25px;
  border-radius: 100%;
  border: 1px solid #acacad;
  outline: none;
  top: -8px;
  right: -10px !important;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}
nouislider .noUi-horizontal .noUi-handle::before, nouislider .noUi-horizontal .noUi-handle::after {
  width: 2px;
  background: #c7c7c7;
  left: 8px;
  top: 4px;
}
nouislider .noUi-horizontal .noUi-handle:after {
  left: 13px;
}
nouislider .noUi-horizontal .noUi-connect {
  background-image: linear-gradient(to right, #ffc174 0%, #fe616e 100%);
  background: #2D77F4;
}

/*Input Filters*/
.input-filters {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0;
}
.input-filters .input-wrap {
  width: 43%;
}
.input-filters .input-wrap input {
  background: #ffffff;
  border: 1px solid #b3b3b3;
  padding: 10px 8px 8px;
  max-width: 100%;
  height: 35px;
  border-radius: 5px;
  text-align: right;
  outline: none;
}

/*Predefined Filters*/
.predefined-filters {
  display: flex;
  justify-content: stretch;
  align-items: center;
  border: 1px solid #ff7c7c;
  border-radius: 5px;
  overflow: hidden;
}
.predefined-filters span {
  font-size: 14px;
  text-align: center;
  display: block;
  color: #8a979f;
  padding: 10px 5px;
  width: 100%;
  font-weight: 600;
  cursor: pointer;
}
.predefined-filters span + span {
  border-left: 1px solid #ff7c7c;
}
.predefined-filters span.clicked {
  background: #ff7c7c;
  color: #ffffff;
}

/*Verticle Tab*/
.vertical-tab-wrapper {
  display: flex;
  background: #ffffff;
  height: 60vh;
}
.vertical-tab-wrapper .vertical-tab {
  margin-bottom: 0;
  border-bottom: 0;
  width: 50%;
  overflow: auto;
}
.vertical-tab-wrapper .vertical-tab > li {
  float: none;
  width: 100%;
  border: 1px solid #ffffff;
  margin: 1px 0;
}
.vertical-tab-wrapper .vertical-tab > li a {
  letter-spacing: 0px;
  text-transform: capitalize;
  color: #535353;
  font-size: 16px;
  background: #ffffff;
  font-weight: 600;
  padding: 12px 15px 12px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
@media (max-width: 1550px) {
  .vertical-tab-wrapper .vertical-tab > li a {
    font-size: 14px;
  }
}
.vertical-tab-wrapper .vertical-tab > li a i {
  display: none;
}
.vertical-tab-wrapper .vertical-tab > li:hover, .vertical-tab-wrapper .vertical-tab > li:focus {
  border-right: 1px solid #e2e2e2;
}
.vertical-tab-wrapper .vertical-tab > li:hover a, .vertical-tab-wrapper .vertical-tab > li:focus a {
  background: #ffffff;
  color: #535353 !important;
  letter-spacing: 0;
  font-size: 16px;
  text-transform: capitalize;
  font-weight: 600;
}
@media (max-width: 1550px) {
  .vertical-tab-wrapper .vertical-tab > li:hover a, .vertical-tab-wrapper .vertical-tab > li:focus a {
    font-size: 14px;
  }
}
.vertical-tab-wrapper .vertical-tab > li.active {
  border-top: 1px solid #e2e2e2;
  border-bottom: 1px solid #e2e2e2;
  border-right: 1px solid #ffffff;
}
.vertical-tab-wrapper .vertical-tab > li.active a {
  background: #ffffff;
  text-transform: capitalize;
  color: #535353 !important;
  letter-spacing: 0;
  font-size: 16px;
  font-weight: 600;
}
@media (max-width: 1550px) {
  .vertical-tab-wrapper .vertical-tab > li.active a {
    font-size: 14px;
  }
}
.vertical-tab-wrapper .vertical-tab > li.active a i {
  display: block;
}
.vertical-tab-wrapper .vertical-tab > li:first-child {
  border-top: 1px solid #ffffff !important;
}
.vertical-tab-wrapper .vertical-tab > li:last-child {
  border-bottom: 1px solid #ffffff !important;
}
.vertical-tab-wrapper .vertical-tab-content {
  width: 50%;
  padding: 20px;
  background: #ffffff;
  overflow: auto;
  border-left: 1px solid #e2e2e2;
}
@media (max-width: 1550px) {
  .vertical-tab-wrapper .vertical-tab-content {
    padding: 15px;
  }
}

/*Checkbox*/
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
  background: #2D77F4;
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

.checkbox-content .text {
  color: #000000;
}
.checkbox-content .content {
  clear: both;
  width: 100%;
  display: block;
  margin-top: 4px;
  display: none;
}

.checkbox-button:hover .content {
  display: block;
}

/*Dropdown Styling*/
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
  background: #2D77F4;
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
  color: #8a97a0;
  font-weight: normal;
  font-size: 12px;
  text-align: left;
  line-height: 20px;
  border-top: 1px solid #F4F3F8;
}
div[dropdown] ul.dropdown-menu.study-list > li:hover {
  color: #000;
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
  background: white;
  font-size: 12px;
  border: 0;
  border-radius: 0;
  font-weight: bold;
}

/*Table Filters*/
.table-wrap {
  position: relative;
}
.table-wrap .shown-filters-wrapper {
  position: absolute;
  top: -10px;
  right: 0;
  font-size: 25px;
  z-index: 99;
  background: white;
}
@media (max-width: 767px) {
  .table-wrap .shown-filters-wrapper {
    position: static;
    margin-bottom: 15px;
    display: flex;
  }
}
.table-wrap .shown-filters-wrapper .btn + .btn {
  margin-left: 8px;
}
@media (max-width: 560px) {
  .table-wrap .shown-filters-wrapper .btn {
    font-size: 12px;
    min-width: 140px;
  }
}
.table-wrap .shown-filters-wrapper input.form-control {
  display: inline-block;
  width: 300px;
  margin-right: 10px;
}
.table-wrap .shown-filters-wrapper i {
  cursor: pointer;
}
.table-wrap .shown-filters-wrapper .shown-filters {
  width: 450px;
  position: absolute;
  top: 10px;
  margin-top: 45px;
  right: 0px;
  background: #ffffff;
  box-shadow: 0px 0px 50px 0px rgba(169, 172, 189, 0.5);
}
.table-wrap .shown-filters-wrapper .shown-filters .shown-filters-header {
  padding: 15px;
  text-align: center;
  background: #fe646e;
  color: #ffffff;
  font-weight: 600;
  position: relative;
  font-size: 16px;
  background: #2D77F4;
}
.table-wrap .shown-filters-wrapper .shown-filters .shown-filters-header:before {
  content: "";
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 17.5px 15px 17.5px;
  position: absolute;
  top: -15px;
  right: 5px;
  border-color: transparent transparent #fe646e transparent;
  border-color: transparent transparent #2D77F4 transparent;
}
.table-wrap .shown-filters-wrapper .shown-filters .shown-filters-main {
  padding: 15px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  max-height: 50vh;
  overflow: auto;
}
.table-wrap .shown-filters-wrapper .shown-filters .shown-filters-main .checkbox-button {
  width: 50%;
}
.table-wrap .shown-filters-wrapper .shown-filters .shown-filters-main .checkbox-button:last-child {
  margin-bottom: 15px;
}
.table-wrap .shown-filters-wrapper .shown-filters .shown-filters-button {
  text-align: center;
  padding-bottom: 15px;
}
.table-wrap .shown-filters-wrapper .shown-filters .shown-filters-button button + button {
  margin-left: 15px;
}
.table-wrap .datatable-row-left {
  background-color: #fff;
}

.no_selection {
  -webkit-user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -ms-user-select: none;
}

@media screen and (max-width: 800px) {
  .desktop-hidden {
    display: initial;
  }
  .mobile-hidden {
    display: none;
  }
}
@media screen and (min-width: 800px) {
  .desktop-hidden {
    display: none;
  }
  .mobile-hidden {
    display: initial;
  }
}
/*Datatable Checkbox*/
.datatable-checkbox {
  margin-bottom: 0;
}

.datatable-checkbox input[type=checkbox] {
  position: relative;
  cursor: pointer;
  outline: none;
  width: 20px;
}

.ngx-datatable .datatable-body .datatable-body-cell span {
  vertical-align: middle;
}

.datatable-checkbox input[type=checkbox]:before {
  transition: all 0.3s ease-in-out;
  content: "";
  position: absolute;
  left: 4px;
  top: 1px;
  z-index: 1;
  width: 13px;
  height: 10px;
}

.datatable-checkbox input[type=checkbox]:checked:before {
  transform: rotate(-45deg);
  height: 7px;
  border: 2px solid #009688;
  border-top-style: none;
  border-right-style: none;
  margin-top: 2px;
}

.datatable-checkbox input[type=checkbox]:after {
  content: "";
  position: absolute;
  top: -2px;
  left: 0;
  width: 20px;
  height: 20px;
  background: #fff;
  cursor: pointer;
  border: 2px solid #f2f2f2;
}

.datatable-row-left div.datatable-header-cell-template-wrap {
  text-align: left;
}

/*Filter Backdrop*/
.filter-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 99999;
  display: none;
  z-index: 99;
}
.filter-backdrop.in {
  display: block;
}

.btn-primary-outline {
  color: #fe646e;
  border: 1px solid #fe646e;
  background: transparent;
  padding: 7px 14px;
  border-radius: 0px;
  color: #2D77F4;
  border: 1px solid #2D77F4;
}
.btn-primary-outline:hover, .btn-primary-outline:focus {
  background: #fe646e;
  color: #ffffff;
  background: #2D77F4;
}

.single-content .maincontainer {
  width: 100% !important;
  max-width: none;
}
@media (max-width: 1200px) and (min-width: 990px) {
  .single-content .maincontainer .indices-card {
    width: 50%;
  }
}

body.stock-screener-pge app-header-extension {
  display: flex;
  position: relative;
  z-index: 2;
  margin-left: 375px;
  width: calc(100% - 395px);
}
@media (max-width: 1550px) and (min-width: 1200px) {
  body.stock-screener-pge app-header-extension {
    margin-left: 305px;
    width: calc(100% - 305px);
  }
}
@media (max-width: 1200px) and (min-width: 990px) {
  body.stock-screener-pge app-header-extension {
    margin-left: 310px;
    width: calc(100% - 330px);
  }
}
@media (max-width: 990px) {
  body.stock-screener-pge app-header-extension {
    margin-left: 0;
    width: 100%;
  }
}
@media (max-width: 560px) {
  body.stock-screener-pge app-header-extension {
    display: none;
  }
}
body.stock-screener-pge app-header-extension .section-one {
  width: 100%;
}
body.stock-screener-pge app-header-extension .sensex-graph > .row {
  margin-left: -5px;
  margin-right: -5px;
}
body.stock-screener-pge app-header-extension .sensex-graph > .row > div {
  padding-left: 5px;
  padding-right: 5px;
}

app-stock-screener {
  position: relative;
  z-index: 1;
}`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 86279:
/*!**************************************************************************************!*\
  !*** ./src/app/tools-module/stock-screener/stock-screener.component.html?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"stock-screener\">\r\n  <div class=\"filter-section\" [ngClass]=\"{'filter-active' : filterActive}\">\r\n    <div class=\"filter-header\">\r\n      <div>\r\n        <i class=\"icon-Watchlist\"></i>\r\n        <span>Stock Screener</span>\r\n      </div>\r\n      <i class=\"icon-Cancel hidden-md hidden-lg\" (click)=\"filterActive = 0 ; addFilter = 0\"></i>\r\n    </div>\r\n    <div class=\"filter-added\">\r\n      <div class=\"count-filtersAdded\">\r\n        {{filterConfig.selectedFilters.length}} filters applied\r\n      </div>\r\n      <div class=\"switch-wrap mt-0\">\r\n        <label class=\"control-label mr-10\" for=\"operator\" [class.selected]=\"!filterConfig.operator\">AND</label>\r\n        <label class=\"switch\">\r\n          <input type=\"checkbox\" name=\"actionToggle\" id=\"operator\" [(ngModel)]=\"filterConfig.operator\"\r\n            (ngModelChange)=\"onOperatorChange()\">\r\n            <div class=\"slider round\"></div>\r\n          </label>\r\n          <label class=\"control-label ml-10\" for=\"operator\" [class.selected]=\"filterConfig.operator\">OR</label>\r\n        </div>\r\n      </div>\r\n      <div class=\"filter-added\">\r\n        <div class=\"reset-filter\" (click)=\"resetRanges()\">\r\n          <i class=\"icon-x\"></i>\r\n          <span>Reset All</span>\r\n        </div>\r\n        <div class=\"reset-filter\" (click)=\"removeAll()\">\r\n          <i class=\"icon-x\"></i>\r\n          <span>Clear All Indicators</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"filter-list\">\r\n        <accordion>\r\n          @for (item of filterConfig.selectedFilters; track item) {\r\n            <accordion-group [isOpen]=\"!item.isClosed\">\r\n              <div class=\"accordion-header\" accordion-heading>\r\n                <span class=\"title\">{{ item.ViewName }} {{item.Unit?'('+item.Unit+')':''}}</span>\r\n                <div class=\"arrow\">\r\n                  @if ((item?.finalRange[0]==item?.MinRange && item?.finalRange[1]==item?.MaxRange) && filterConfig?.selectedFilters.length>1) {\r\n                    <span\r\n                    (click)=\"removeFilter(item)\">Remove</span>\r\n                  }\r\n                  @if (item?.FilterKey <= 30000 && (item?.finalRange[0]>item?.MinRange || item?.finalRange[1]<item?.MaxRange) && filterConfig?.selectedFilters.length>1) {\r\n                    <span\r\n                    (click)=\"resetRanges(item)\">Reset</span>\r\n                  }\r\n                  <i class=\"icon-angle-down\" [style.visibility]=\"item?.FilterKey <= 30000 ? 'visible' : 'hidden'\"></i>\r\n                </div>\r\n              </div>\r\n              @if (item?.FilterKey <= 30000) {\r\n                <nouislider [connect]=\"true\" [min]=\"item?.MinRange\" [max]=\"item?.MaxRange\"\r\n                [(ngModel)]=\"item.finalRange\" (change)=\"onRangeChange(item)\"></nouislider>\r\n              }\r\n              @if (item?.FilterKey <= 30000) {\r\n                <div class=\"input-filters\">\r\n                  <div class=\"input-wrap\">\r\n                    <input type=\"text\" [(ngModel)]=\"item.finalRange[0]\" [id]=\"item?.FilterKeyName+'_text0'\"\r\n                      (keypress)=\"allowOnlyDigits($event)\" [hidden]=\"item?.activeType[0]=='label'\"\r\n                      (focusout)=\"setFocusOut(item,0)\" [attr.value]=\"item.finalRange[0]\"\r\n                      (ngModelChange)=\"changeInputSlider(item, item.finalRange[0], item.finalRange[1])\"\r\n                      placeholder=\"Min Value\" aria-label=\"Min-value\">\r\n                      <input type=\"text\" value=\"{{item.finalRange[0] | value:'1.0-2'}}\" [id]=\"item?.FilterKeyName+'_label0'\"\r\n                        [hidden]=\"item?.activeType[0]=='text'\" (focus)=\"setFocus(item,0)\" placeholder=\"Min Value\"\r\n                        aria-label=\"Min-value\">\r\n                      </div>\r\n                      <div class=\"middle-text\">\r\n                        to\r\n                      </div>\r\n                      <div class=\"input-wrap\">\r\n                        <input type=\"text\" [(ngModel)]=\"item.finalRange[1]\" [id]=\"item?.FilterKeyName+'_text1'\"\r\n                          (keypress)=\"allowOnlyDigits($event)\" [hidden]=\"item?.activeType[1]=='label'\"\r\n                          (focusout)=\"setFocusOut(item,1)\" [attr.value]=\"item.finalRange[1]\"\r\n                          (ngModelChange)=\"changeInputSlider(item, item.finalRange[0], item.finalRange[1])\"\r\n                          placeholder=\"Max Value\" aria-label=\"Max Value\">\r\n                          <input type=\"text\" value=\"{{item.finalRange[1] | value:'1.0-2'}}\" [id]=\"item?.FilterKeyName+'_label1'\"\r\n                            [hidden]=\"item?.activeType[1]=='text'\" (focus)=\"setFocus(item,1)\" placeholder=\"Max Value\"\r\n                            aria-label=\"Max Value\">\r\n                          </div>\r\n                        </div>\r\n                      }\r\n                      <!-- <div class=\"predefined-filters\">\r\n                      <span>Small Cap</span>\r\n                      <span>Mid Cap</span>\r\n                      <span>High Cap</span>\r\n                    </div> -->\r\n                  </accordion-group>\r\n                }\r\n              </accordion>\r\n            </div>\r\n            <div class=\"filter-footer\">\r\n              <button class=\"btn btn-filter\" (click)=\"addFilter = 1\">Add Filter</button>\r\n              <div class=\"advance-filters\" [ngClass]=\"{'active': addFilter == 1}\">\r\n                <div class=\"advc-filter-header\">\r\n                  ADD FILTERS\r\n                </div>\r\n                <div class=\"advc-filter-main\">\r\n                  <div class=\"vertical-tab-wrapper\">\r\n                    @if (!searchFilter?.trim()?.length) {\r\n                      <ul class=\"nav nav-tabs vertical-tab\">\r\n                        @for (item of filterConfig.categoryLists; track item; let i = $index) {\r\n                          <li [class.active]=\"activeTab==i\"\r\n                            (click)=\"activateFilter(i,item)\">\r\n                            <a>{{item}}\r\n                              <i class=\"icon-angle-right\"></i>\r\n                            </a>\r\n                          </li>\r\n                        }\r\n                      </ul>\r\n                    }\r\n                    @if (searchFilter?.trim()?.length) {\r\n                      <ul class=\"nav nav-tabs vertical-tab\">\r\n                        <li class=\"active\">\r\n                          <a>Search Results <i class=\"icon-angle-right\"></i>\r\n                        </a>\r\n                      </li>\r\n                    </ul>\r\n                  }\r\n                  @if (filterConfig?.selectedCategory?.length > 0 ) {\r\n                    <div class=\"tab-content vertical-tab-content\">\r\n                      @if (!searchFilter?.trim()?.length) {\r\n                        <div>\r\n                          @for (item of filterConfig.selectedCategory; track item) {\r\n                            <label class=\"checkbox-button \">\r\n                              @if (item?.ViewName != 'No Matches Found') {\r\n                                <input type=\"checkbox\" [checked]=\"item?.checked\"\r\n                                  class=\"checkbox-button__input\" (change)=\"onFilterSelect(item)\">\r\n                                }\r\n                                @if (item?.ViewName != 'No Matches Found') {\r\n                                  <span class=\"checkbox-button__control\"></span>\r\n                                }\r\n                                <span class=\"checkbox-content checkbox-button__label\">\r\n                                  <span class=\"text\">{{item.ViewName}}</span>\r\n                                  @if (item?.Description) {\r\n                                    <small class=\"content\" [innerHTML]=\"item.Description\"></small>\r\n                                  }\r\n                                </span>\r\n                              </label>\r\n                            }\r\n                          </div>\r\n                        }\r\n                        @if (searchFilter?.trim()?.length) {\r\n                          <div>\r\n                            @for (item of filterConfig.searchedFilters; track item) {\r\n                              <label class=\"checkbox-button \">\r\n                                @if (item?.ViewName != 'No Matches Found') {\r\n                                  <input type=\"checkbox\" [checked]=\"item?.checked\"\r\n                                    class=\"checkbox-button__input\" (change)=\"onFilterSelect(item)\">\r\n                                  }\r\n                                  @if (item?.ViewName != 'No Matches Found') {\r\n                                    <span class=\"checkbox-button__control\"></span>\r\n                                  }\r\n                                  <span class=\"checkbox-content checkbox-button__label\">\r\n                                    <span class=\"text\">{{item.ViewName}}</span>\r\n                                  </span>\r\n                                </label>\r\n                              }\r\n                              @if (!filterConfig?.searchedFilters?.length) {\r\n                                <label class=\"text-center\">\r\n                                  <span class=\"checkbox-content checkbox-button__label\">\r\n                                    <span class=\"text\">No Matches Found for {{searchFilter?.trim()}}</span>\r\n                                  </span>\r\n                                </label>\r\n                              }\r\n                            </div>\r\n                          }\r\n                        </div>\r\n                      }\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"advc-filter-footer\">\r\n                    <input type=\"text\" placeholder=\"Search for filters\" [(ngModel)]=\"searchFilter\"\r\n                      (input)=\"onFilterSearch($event)\" aria-label=\"Search for filters\">\r\n                      <button class=\"btn btn-gradient\" (click)=\"addFilter = 0;setFilterDone()\">Done</button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"main-section\">\r\n                <!-- <h3>Lorem ipsum dolor sit amet</h3> -->\r\n                <div class=\"dropdown-card\">\r\n                  <div class=\"dropdown-wrapper\">\r\n                    <div dropdown class=\"filter-dropdown\">\r\n                      <button class=\"dropdown-btn\" dropdown-open>Equity Type &nbsp;<i\r\n                      class=\"down-angle icon-angle-down\"></i></button>\r\n                      <ul class=\"dropdown-menu study-list\" role=\"menu\" dropdown-not-closable-zone>\r\n                        <!-- <li class=\"filter-list\">\r\n                        <input class=\"form-control\" [(ngModel)]=\"dropdownFIlter\" placeholder=\"3 letters to search\" />\r\n                      </li> -->\r\n                      <li>\r\n                        <label class=\"checkbox-button \">\r\n                          <input type=\"radio\" name=\"EQUITYTYPE\" value=\"0\" [(ngModel)]=\"dropdownFIlter\"\r\n                            (change)=\"onEquityChange()\">\r\n                            <span class=\"checkbox-button__control\"></span>\r\n                            <span class=\"checkbox-content checkbox-button__label\">\r\n                              <span class=\"text\">Both</span>\r\n                            </span>\r\n                          </label>\r\n                        </li>\r\n                        <li>\r\n                          <label class=\"checkbox-button \">\r\n                            <input type=\"radio\" name=\"EQUITYTYPE\" value=\"1\" [(ngModel)]=\"dropdownFIlter\"\r\n                              (change)=\"onEquityChange()\">\r\n                              <span class=\"checkbox-button__control\"></span>\r\n                              <span class=\"checkbox-content checkbox-button__label\">\r\n                                <span class=\"text\">NSE</span>\r\n                              </span>\r\n                            </label>\r\n                          </li>\r\n                          <li>\r\n                            <label class=\"checkbox-button \">\r\n                              <input type=\"radio\" name=\"EQUITYTYPE\" value=\"3\" [(ngModel)]=\"dropdownFIlter\"\r\n                                (change)=\"onEquityChange()\">\r\n                                <span class=\"checkbox-button__control\"></span>\r\n                                <span class=\"checkbox-content checkbox-button__label\">\r\n                                  <span class=\"text\">BSE</span>\r\n                                </span>\r\n                              </label>\r\n                            </li>\r\n                          </ul>\r\n                        </div>\r\n                        @if (sectorList?.length) {\r\n                          <div dropdown class=\"filter-dropdown\" (onClose)=\"setSectorSelection()\">\r\n                            <button class=\"dropdown-btn\" dropdown-open>Sectors &nbsp;<i class=\"down-angle icon-angle-down\"></i></button>\r\n                            <ul class=\"dropdown-menu study-list\" role=\"menu\" dropdown-not-closable-zone>\r\n                              @for (item of sectorList; track item; let i = $index) {\r\n                                <li>\r\n                                  <label class=\"checkbox-button \">\r\n                                    <input type=\"checkbox\" name=\"EQUITYTYPE\" value=\"0\" [(ngModel)]=\"item.checked\" [checked]=\"item?.checked\">\r\n                                    <span class=\"checkbox-button__control\"></span>\r\n                                    <span class=\"checkbox-content checkbox-button__label\">\r\n                                      <span class=\"text\">{{item?.label}}</span>\r\n                                    </span>\r\n                                  </label>\r\n                                </li>\r\n                              }\r\n                            </ul>\r\n                          </div>\r\n                        }\r\n\r\n                      </div>\r\n\r\n                      <div class=\"right-icons\">\r\n                        <div class=\"padding-0 clearfix add-remove-section\">\r\n                          <div dropdown class=\"padding-0 clearfix add-remove-section\" hidden>\r\n                            <button dropdown-open class=\" btn add pull-right\" title=\"Add to Watchlist\">\r\n                              <i class=\"icon-Watchlist\"></i>\r\n                            </button>\r\n                            @if (sharedDataService.userId && sharedDataService.userId!='guest') {\r\n                              <ul class=\"dropdown-menu\" role=\"menu\">\r\n                                <li (click)=\"addRemoveWatchList(1)\">\r\n                                  <a class=\"animate\">{{watchlistCache?.watchlistName[1] &&\r\n                                  watchlistCache?.watchlistName[1]!=1?watchlistCache?.watchlistName[1]+'(1)':'Watchlist 1'}}</a>\r\n                                </li>\r\n                                <li (click)=\"addRemoveWatchList(2)\">\r\n                                  <a class=\"animate\">{{watchlistCache?.watchlistName[2] &&\r\n                                  watchlistCache?.watchlistName[2]!=2?watchlistCache?.watchlistName[2]+'(2)':'Watchlist 2'}}</a>\r\n                                </li>\r\n                                <li (click)=\"addRemoveWatchList(3)\">\r\n                                  <a class=\"animate\">{{watchlistCache?.watchlistName[3] &&\r\n                                  watchlistCache?.watchlistName[3]!=3?watchlistCache?.watchlistName[3]+'(3)':'Watchlist 3'}}</a>\r\n                                </li>\r\n                                <li (click)=\"addRemoveWatchList(4)\">\r\n                                  <a class=\"animate\">{{watchlistCache?.watchlistName[4] &&\r\n                                  watchlistCache?.watchlistName[4]!=4?watchlistCache?.watchlistName[4]+'(4)':'Watchlist 4'}}</a>\r\n                                </li>\r\n                                <li (click)=\"addRemoveWatchList(5)\">\r\n                                  <a class=\"animate\">{{watchlistCache?.watchlistName[5] &&\r\n                                  watchlistCache?.watchlistName[5]!=5?watchlistCache?.watchlistName[5]+'(5)':'Watchlist 5'}}</a>\r\n                                </li>\r\n                              </ul>\r\n                            }\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"card\">\r\n                      <div class=\"card-block\">\r\n                        <div class=\"table-wrap\">\r\n\r\n                          <h4 class=\"heading\">Screener Table</h4>\r\n                          <img class=\"loader\" src=\"assets/images/loader.gif\"\r\n                            [hidden]=\"rows?.length > 0 || !sharedDataService?.isServiceHit\" />\r\n                            @if ((rows.length || tableConfig?.fullData?.length) && !sharedDataService?.isServiceHit) {\r\n                              <div class=\"shown-filters-wrapper\"\r\n                                >\r\n                                <!-- <button class=\"btn btn-primary-outline\" hidden><i class=\"icon-download-pdf\"></i> Export</button>\r\n                                <button class=\"btn btn-gradient\" hidden>Save Screener</button> -->\r\n                                <input type=\"text\" placeholder=\"Search for Company\" inputRestrict=\"alphanumeric\" class=\"form-control\"\r\n                                  aria-label=\"Search for Company\" [disabled]=\"!tableConfig.fullData?.length\"\r\n                                  (ngModelChange)=\"updateTable($event, scripSearch)\" [(ngModel)]=\"tableConfig.scripSearch\" />\r\n                                  <button class=\"btn btn-primary-outline\" (click)=\"adjustTableToggler()\">Toggle Columns</button>\r\n                                  <!-- <i class=\"icon-Settings no_selection\" ></i> -->\r\n                                  @if (adjustTable) {\r\n                                    <div class=\"shown-filters no_selection\">\r\n                                      <div class=\"shown-filters-header\">\r\n                                        ADJUST TABLE\r\n                                      </div>\r\n                                      <div class=\"shown-filters-main\">\r\n                                        @for (item of tableConfig.columnsData; track item) {\r\n                                          <label class=\"checkbox-button \">\r\n                                            <input [checked]=\"item?.checked\" class=\"checkbox-button__input\" [disabled]=\"item?.disabled\"\r\n                                              type=\"checkbox\" [(ngModel)]=\"item.checked\">\r\n                                              <span class=\"checkbox-button__control\"></span>\r\n                                              <span class=\"checkbox-content checkbox-button__label\">\r\n                                                <span class=\"text\">{{ item.ViewName }}</span>\r\n                                              </span>\r\n                                            </label>\r\n                                          }\r\n                                        </div>\r\n                                        <!-- <div class=\"shown-filters-button\">\r\n                                        <button class=\"btn btn-gradient\" (click)=\"adjustTableToggler(0)\">Apply</button>\r\n                                        <button class=\"btn btn-gradient\" (click)=\"closeAdjustTable()\">Close </button>\r\n                                      </div> -->\r\n                                    </div>\r\n                                  }\r\n                                </div>\r\n                              }\r\n                              @if (!sharedDataService?.isServiceHit) {\r\n                                <ngx-datatable #table [cssClasses]=\"tableConfig.cssClasses\" [rows]=\"rows\" class=\"material\"\r\n                                  [columnMode]=\"'force'\" [headerHeight]=\"40\" [footerHeight]=\"40\" [rowHeight]=\"'auto'\" [selected]=\"selectedVar\"\r\n                                  [selectAllRowsOnPage]=\"false\" [displayCheck]=\"displayCheck\" [scrollbarV]=\"false\" [scrollbarH]=\"true\"\r\n                                  [limit]=\"20\" (select)='onSelect($event)'>\r\n                                  <!-- <ngx-datatable-column [width]=\"35\" [sortable]=\"false\" [canAutoResize]=\"false\" [draggable]=\"false\"\r\n                                  [resizeable]=\"false\" [headerCheckboxable]=\"false\" [checkboxable]=\"true\" [frozenLeft]=\"true\">\r\n                                </ngx-datatable-column> -->\r\n                                @for (item of tableConfig.columnsData; track item) {\r\n                                  @if (item?.checked) {\r\n                                    <ngx-datatable-column [name]=\"item?.ViewName\" [prop]=\"item?.name\"\r\n                                      [frozenLeft]=\"item?.freeze\" [width]=\"item?.width||200\">\r\n                                      <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template\r\n                                        *ngIf=\"item?.name=='CompanyName'\">\r\n                                        <div class=\"stock-title\">\r\n                                          <div class=\"text-left\"><a [routerLink]=\"[row.companyURL]\">{{row.CompanyName}}</a> ({{row.Series}})\r\n                                        </div>\r\n                                        <div class=\"right-icon\">\r\n                                          <div dropdown>\r\n                                            <button dropdown-open class=\"btn add\" title=\"Add to Watchlist\">\r\n                                              <i class=\"icon-more\"></i>\r\n                                            </button>\r\n                                            <ul class=\"dropdown-menu\" role=\"menu\">\r\n                                              <li>\r\n                                                <a class=\"animate\" (click)=\"navigateToCharts(row)\">Technical Chart</a>\r\n                                              </li>\r\n                                            </ul>\r\n                                          </div>\r\n                                          <div dropdown>\r\n                                            <button dropdown-open class=\"btn add\" title=\"Add to Watchlist\">\r\n                                              +\r\n                                            </button>\r\n                                            <ul class=\"dropdown-menu\" role=\"menu\">\r\n                                              <li (click)=\"addRemoveWatchList(row, 1)\">\r\n                                                <a class=\"animate\">{{watchlistNames[1] &&\r\n                                                watchlistNames[1]!=1?watchlistNames[1]+'(1)':'Watchlist 1'}}</a>\r\n                                              </li>\r\n                                              <li (click)=\"addRemoveWatchList(row, 2)\">\r\n                                                <a class=\"animate\">{{watchlistNames[2] &&\r\n                                                watchlistNames[2]!=2?watchlistNames[2]+'(2)':'Watchlist 2'}}</a>\r\n                                              </li>\r\n                                              <li (click)=\"addRemoveWatchList(row, 3)\">\r\n                                                <a class=\"animate\">{{watchlistNames[3] &&\r\n                                                watchlistNames[3]!=3?watchlistNames[3]+'(3)':'Watchlist 3'}}</a>\r\n                                              </li>\r\n                                              <li (click)=\"addRemoveWatchList(row, 4)\">\r\n                                                <a class=\"animate\">{{watchlistNames[4] &&\r\n                                                watchlistNames[4]!=4?watchlistNames[4]+'(4)':'Watchlist 4'}}</a>\r\n                                              </li>\r\n                                              <li (click)=\"addRemoveWatchList(row, 5)\">\r\n                                                <a class=\"animate\">{{watchlistNames[5] &&\r\n                                                watchlistNames[5]!=5?watchlistNames[5]+'(5)':'Watchlist 5'}}</a>\r\n                                              </li>\r\n                                            </ul>\r\n                                          </div>\r\n                                        </div>\r\n                                      </div>\r\n                                    </ng-template>\r\n                                    <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template *ngIf=\"item?.factor\">\r\n                                      <div class=\"text-right\">{{value=='null'?'-':(value|value:'1.2-2')}}\r\n                                      </div>\r\n                                    </ng-template>\r\n                                  </ngx-datatable-column>\r\n                                }\r\n                              }\r\n                            </ngx-datatable>\r\n                          }\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <!-- added open an account banner (12/05/2021) -->\r\n                    <!-- <section class=\"seo-section clearfix\" *ngIf=\"(!sharedDataService.userId || sharedDataService.userId == 'guest')\">\r\n                    <div class=\"col-md-12\">\r\n                      <div class=\"card mb-0\">\r\n                        <div class=\"card-block\">\r\n                          <img src=\"../../../assets/images/Open-Free-Account1.png\" alt=\"Online Stock Trading Platform\" class=\"img-responsive\" (click)=\"utils.navigateToOpenAccount()\"/>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </section> -->\r\n\r\n                  <!-- Advert Banner :: Start -->\r\n                  @if ((!sharedDataService.userId || sharedDataService.userId == 'guest')) {\r\n                    <section>\r\n                      <div class=\"container\" (click)=\"utils.navigateToOpenFreeAccount()\">\r\n                        <div class=\"row add_banner_sub red-theme\">\r\n                          <div class=\"col-md-6 add-left-text\">\r\n                            <div class=\"add-left-sub\">\r\n                              <h2>Wait! <span class=\"small-font\">Before You Go</span></h2>\r\n                              <h4>OPEN A FREE</h4>\r\n                              <h3>DEMAT ACCOUNT</h3>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-md-6 add-right-text\">\r\n                            <div class=\"add-right-sub\">\r\n                              <ul>\r\n                                <li><span>+</span> Zero Account Opening Fee </li>\r\n                                <li><span>+</span> Free First Year AMC </li>\r\n                                <li><span>+</span> Zero Square Off Charges </li>\r\n                                <li><span>+</span> Zero Call for Trade Charges</li>\r\n                              </ul>\r\n                              <a class=\"add-btn\">OPEN MY ACCOUNT</a>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </section>\r\n                  }\r\n\r\n                  <section class=\"clearfix\">\r\n                    <div class=\"col-md-12\">\r\n                      <div class=\"card mb-0\">\r\n                        <div class=\"card-block\">\r\n                          <h1>BEST STOCK SCREENER IN INDIA</h1>\r\n                          <p>Stock Screeners are tools which help you filter stocks and discover growing new companies as per your\r\n                            preferences. Depending on your trading or investing style one can find high probability trading set-ups\r\n                            for\r\n                          short-term positions or find companies for long-term growth.</p>\r\n                          <h2 class='text-left'>Free Stock Screener</h2>\r\n                          <p>The Choice FinX Stock Screener is free with the application and is extremely easy to use. It provides smart\r\n                            filters\r\n                            for the user to narrow down stocks. This effectiveness in shortlisting stocks makes it among the best\r\n                            stock\r\n                          screeners in India. It’s versatile enough to use it as an intraday scanner as well.</p>\r\n                          <h2 class='text-left'>How To Use Choice FinX Stock Screener?</h2>\r\n                          <ol>\r\n                            <li>\r\n                              <strong>Equity Type:</strong> Select the Index from which you’d like to view the companies, i.e., NSE,\r\n                              BSE\r\n                              or both.\r\n                            </li>\r\n                            <li>\r\n                              <strong>Sectors:</strong> Select the sectors you are interested in.\r\n                            </li>\r\n                            <li>\r\n                              <strong>Market Capitalization:</strong> Enter the range of market cap (in crores) of the companies you\r\n                              are\r\n                              interested in.\r\n                            </li>\r\n                            <li>\r\n                              <strong>Add Filter:</strong> Filters are divided into Fundamentals, Ratios, Volume, Price and CAGR. Each\r\n                              will show all the filters belonging to that category. The selected filters will show on the left panel.\r\n                              You\r\n                              can select the range for each filter or remove them. You can also search for filters from the Search for\r\n                              Filters box provided.\r\n                              <ol>\r\n                                <li>\r\n                                  <strong>And/Or:</strong>And will show only companies when all conditions of the selected filters are\r\n                                  matched. OR will show if any condition of the selected filter is matched.\r\n                                </li>\r\n                              </ol>\r\n                            </li>\r\n                            <li>\r\n                              <strong>Toggle Columns:</strong> New columns will be added as you select filters. From the Toggle\r\n                              Column,\r\n                              you can select/deselect the columns you want to view in the Screener Table.\r\n                            </li>\r\n                          </ol>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                  </section>\r\n                </div>\r\n                <div class=\"floating-filter\" (click)=\"filterActive = 1\">\r\n                  <i class=\"icon-Watchlist\"></i>\r\n                </div>\r\n                <div class=\"filter-backdrop\" [ngClass]=\"{'in' : addFilter == 1}\"></div>\r\n              </div>\r\n\r\n              @if (showPreLogin) {\r\n                <div class=\"dialog\">\r\n                  <div class=\"dialog-content\">\r\n                    <div class=\"dialog-header clearfix \">\r\n                      <div class=\"col-md-12\">\r\n                        <h4 class=\"popup-title\">Oops,Looks like you are not logged in. Please Login for Moving further. </h4>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"dialog-footer clearfix\">\r\n                      <button class=\"btn sell\" (click)=\"closePreLogin()\">Close</button>\r\n                      <button class=\"btn buy\" [showFocus]=\"showPreLogin\" (click)=\"navigateToLogin()\">Login</button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              }";

/***/ })

}]);