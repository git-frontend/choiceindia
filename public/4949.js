(self["webpackChunkjiffy_upgraded"] = self["webpackChunkjiffy_upgraded"] || []).push([[4949],{

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

/***/ 4949:
/*!******************************************************!*\
  !*** ./src/app/option-chain/option-chain.routing.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   optionChainRoutes: () => (/* binding */ optionChainRoutes)
/* harmony export */ });
/* harmony import */ var _guards_basic_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../guards/basic.guard */ 72972);
/* harmony import */ var _option_chain_option_chain_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./option-chain/option-chain.component */ 58848);


const routeConfig = {
  header: true,
  footer: true,
  indices: false,
  betaFooter: false,
  ticker: true,
  watchlist: false,
  watchlistHidden: true,
  freshChat: false
};
const optionChainRoutes = [{
  path: ':segment',
  component: _option_chain_option_chain_component__WEBPACK_IMPORTED_MODULE_1__.OptionChainComponent,
  canActivate: [_guards_basic_guard__WEBPACK_IMPORTED_MODULE_0__.BasicGuard],
  data: {
    config: routeConfig,
    fullScreen: true
  }
}];

/***/ }),

/***/ 58848:
/*!*********************************************************************!*\
  !*** ./src/app/option-chain/option-chain/option-chain.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OptionChainComponent: () => (/* binding */ OptionChainComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _option_chain_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./option-chain.component.html?ngResource */ 36612);
/* harmony import */ var _option_chain_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./option-chain.component.scss?ngResource */ 98344);
/* harmony import */ var _option_chain_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_option_chain_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 84572);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 96354);
/* harmony import */ var src_app_directives_dropdown_dropdown_open_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/directives/dropdown/dropdown-open.directive */ 55720);
/* harmony import */ var src_app_directives_dropdown_dropdown_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/directives/dropdown/dropdown.directive */ 51429);
/* harmony import */ var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/analytics/analytics.service */ 50213);
/* harmony import */ var src_app_services_rest_company_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/rest/company.service */ 12744);
/* harmony import */ var src_app_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/shared-data/shared-data.service */ 46013);
/* harmony import */ var src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/utils/utils.service */ 89893);
/* harmony import */ var _directives_input_restrict2_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../directives/input-restrict2.directive */ 5833);
/* harmony import */ var _pipes_segment_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../pipes/segment.pipe */ 39995);
/* harmony import */ var _pipes_value_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../pipes/value.pipe */ 50615);
/* harmony import */ var _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../../assets/libs/esm-moment.min.js */ 29483);



















/** Declaration for NodeJS Require*/
// declare var require: any;
/** Import Moment JS Library*/
// var moment: any = require();
let OptionChainComponent = class OptionChainComponent {
  constructor(rest, utils, shared, activatedRoute, location, renderer, router, analytics) {
    this.rest = rest;
    this.utils = utils;
    this.shared = shared;
    this.activatedRoute = activatedRoute;
    this.location = location;
    this.renderer = renderer;
    this.router = router;
    this.analytics = analytics;
    /**
    * tabs in search
    */
    this.activeTab = 0;
    /** drop up flag */
    this.dropUp = false;
    this.strike_count = 10;
    this.subscriptionList = [];
    this.userAccountStatus = {};
    this.searchConfig = {
      isSearchOpened: false,
      startPos: 0,
      noOfRecords: 100,
      searchInput: "",
      activeTab: 1,
      searchResults: []
    };
    this.config = {
      activeTab: -1,
      mapper: {
        0: 'all',
        'all': 0,
        1: 'derivatives',
        3: 'commodities',
        2: 'currencies',
        'derivatives': 1,
        'commodities': 3,
        'currencies': 2
      },
      tabMapper: {
        0: {
          1: 2,
          3: 4,
          filter: [1, 3, 6, 8, 14, 39],
          strSegment: '',
          defaultConfig: {
            SegmentId: 1,
            Token: 26000,
            Symbol: 'NIFTY',
            PriceDivisor: 100
          }
        },
        1: {
          1: 2,
          3: 4,
          filter: [1, 3],
          strSegment: 'EQ',
          defaultConfig: {
            SegmentId: 1,
            Token: 26000,
            Symbol: 'NIFTY',
            PriceDivisor: 100
          }
        },
        2: {
          14: 13,
          39: 38,
          filter: [14, 39],
          strSegment: 'CD',
          defaultConfig: {
            SegmentId: 14,
            Token: 1,
            Symbol: 'USDINR',
            PriceDivisor: 10000000
          }
        },
        3: {
          6: 5,
          8: 7,
          filter: [6, 8],
          isIndexRemove: true,
          strSegment: 'COM',
          defaultConfig: {
            SegmentId: 6,
            Token: 114,
            Symbol: 'GOLD',
            PriceDivisor: 100
          }
        }
      },
      limit: 20,
      isShowAll: false,
      underlyingScrip: null,
      futureData: [],
      callOIIndex: 0,
      putOIIndex: 0,
      callOIChangeIndex: 0,
      putOIChangeIndex: 0,
      PCR: 0
    };
    this.resetOptionContracts();
    this.subscribeChanges();
    this.watchlistNameSubscription = this.utils.broadcastObservable("internetConnectionStatus").subscribe(isConnected => {
      let mapper = window.location.pathname.split('/');
      let seg = mapper[mapper.length - 1];
      const params = decodeURIComponent(window.location.search).replace(/(^\?)/, '').split("&").map(function (n) {
        return n = n.split("="), this[n[0]] = n[1], this;
      }.bind({}))[0];
      // this.activateFilter(this.config.mapper[seg], params, null, false, true);
      this.setLimit(10);
    });
  }
  /**
   * Activate the Filter
   * @param index
   * @param config
   * @param fromPage
   */
  activateFilter(index, config, fromPage, init, process) {
    if (this.config.activeTab != index || process) {
      this.config.activeTab = index;
      this.activeTab = index;
      // config = (this.defaultConfig && this.defaultConfig['segment'] == this.config.mapper[index]) ? this.defaultConfig : (this.defaultConfig && this.defaultConfig['segment'] != this.config.mapper[index] && click) ? {} : config;
      this.location.replaceState('/option-chain/' + this.config.mapper[index]);
      if (init && config && config.priceDiviser) {
        let defaultConfig = this.config.tabMapper[index].defaultConfig;
        defaultConfig.Token = config.tok || config.token;
        defaultConfig.PriceDivisor = config.priceDiviser;
        defaultConfig.SegmentId = config.seg || config.segmentId;
        defaultConfig.Symbol = config.symbol;
        this.searchConfig.searchResults = [defaultConfig];
        this.selectScrip(defaultConfig, fromPage);
      } else if (config && config.segmentId && config.token) {
        this.searchConfig.searchInput = config.token.length > 3 ? config.token : config.symbol || config.token;
        this.defaultConfig = config;
        this.getSearchResults(0, null, config.symbol);
      } else {
        // if(this.searchConfig.searchInput){
        //   this.getSearchResults(this.activeTab, null, null,fromPage);
        // }else{
        let defaultConfig = this.config.tabMapper[index].defaultConfig;
        this.searchConfig.searchResults = [defaultConfig];
        this.selectScrip(defaultConfig, fromPage);
        // }
      }
      this.utils.setTrackMoeEvent(index === 2 ? 'visitedOptionChainCurrencies' : index === 3 ? 'visitedOptionChainCommodities' : 'visitedOptionChainDerivatives', {
        "User_ID": this.utils.getUserId() || 'guest',
        "IP": this.shared.IPAddress
      });
      this.analytics.emitEvent(index === 2 ? 'visitedOptionChainCurrencies' : index === 3 ? 'visitedOptionChainCommodities' : 'visitedOptionChainDerivatives', this.utils.getUserId() || 'guest', JSON.stringify({
        "IP": this.shared.IPAddress
      }), 1);
    }
  }
  /**
   * Select Scrip when searched
   * @param item Scrip object
   */
  selectScripFromSearch(item) {
    console.log("selectScripFromSearch: ", item);
    // history.pushState({},'','/market/option-chain/' + (this.config.mapper[this.activeTab]+"?segmentId="+item.SegmentId+"&token="+item.Token+"&symbol="+(item.SecName || item.Symbol)))
    this.location.replaceState('/option-chain/' + this.config.mapper[this.activeTab]); //+"?segmentId="+item.SegmentId+"&token="+item.Token+"&symbol="+(item.SecName || item.Symbol)
    this.selectScrip(item, null, true);
  }
  /**
   *  Open a popup when there is guest user (15/03/2021)
   * @param item
   */
  openPreLoginA(item) {
    if (!this.utils.isAuthorized()) {
      this.showPreLogin = true;
      this.renderer.setStyle(document.body, 'overflow', 'hidden');
    } else {
      if (item) {
        // console.log("item",item)
        // this.addRemoveWatchList(item)
      }
    }
  }
  /**
   *  watchList Subscriptions (15/03/2021)
   */
  watchListSubscriptions() {
    this.watchlistNameSubscription = this.utils.broadcastObservable('watchlistRenamed').subscribe(data => {
      this.watchlistNames = data;
    });
    this.scripAddSubscription = this.utils.broadcastObservable('ScripAdded').subscribe(data => {
      if (this.optionExpiryConfig.selectedExpiry && this.optionContractsData[this.optionExpiryConfig.selectedExpiry]) {
        let scrip = this.optionContractsData[this.optionExpiryConfig.selectedExpiry].filter(item => {
          return data.Token == item.CE.Token || data.Token == item.PE.Token;
        });
        if (scrip.length) {
          if (scrip[0].CE.Token == data.Token) {
            scrip[0].CE.isAdded = true;
            scrip[0].CE.scripData = {
              'ProfileId': data.ProfileId,
              'scrip': data,
              'scripIndex': data.scripIndex
            };
          }
          if (scrip[0].PE.Token == data.Token) {
            scrip[0].PE.isAdded = true;
            scrip[0].PE.scripData = {
              'ProfileId': data.ProfileId,
              'scrip': data,
              'scripIndex': data.scripIndex
            };
          }
        }
      }
      //      this.isButtonDisabled = false;
    });
    this.scripRemoveSubscription = this.utils.broadcastObservable('ScripRemoved').subscribe(data => {
      // let scrip = this.searchData.filter((item) => { return data.Token == item.Token });
      // if (scrip.length) {
      //   scrip[0].isAdded = false;
      // }
      // this.isButtonDisabled = false;
      if (this.optionExpiryConfig.selectedExpiry && this.optionContractsData[this.optionExpiryConfig.selectedExpiry]) {
        let scrip = this.optionContractsData[this.optionExpiryConfig.selectedExpiry].filter(item => {
          return data.Token == item.CE.Token || data.Token == item.PE.Token;
        });
        if (scrip.length) {
          if (scrip[0].CE.Token == data.Token) {
            scrip[0].CE.isAdded = false;
            scrip[0].CE.scripData = {
              'ProfileId': data.ProfileId,
              'scrip': data,
              'scripIndex': data.scripIndex
            };
          }
          if (scrip[0].PE.Token == data.Token) {
            scrip[0].PE.isAdded = false;
            scrip[0].PE.scripData = {
              'ProfileId': data.ProfileId,
              'scrip': data,
              'scripIndex': data.scripIndex
            };
          }
        }
      }
    });
    this.watchlistNames = this.utils.getWatchListName(-1) || {};
  }
  /** (15/03/2021)
  * Add and remove scrip from watchlist
  * @param profileId watchlist name
  * @param item scrip data
  */
  addRemoveWatchList(item, profileId) {
    if (!profileId) {
      item.segmentTokenString.scripIndex = item.scripData.scripIndex;
    }
    item.segmentTokenString.ProfileId = profileId ? profileId : item.scripData.ProfileId;
    item.segmentTokenString.action = item.isAdded;
    //      this.isButtonDisabled = true;
    this.utils.broadcast('addRemoveWatchList', item.segmentTokenString);
  }
  /**
  * to check whether scrip present in watchlist or not (15/03/2021)
  * @param data scrip data
  */
  toggleAddRemove(data) {
    if (this.optionExpiryConfig.selectedExpiry && this.optionContractsData[this.optionExpiryConfig.selectedExpiry]) {
      this.optionContractsData[this.optionExpiryConfig.selectedExpiry].forEach(item => {
        item.CE.scripData = this.utils.checkFromWatchlist(item.CE.SegmentId, item.CE.Token);
        item.CE.segmentTokenString = {
          'SegmentId': item.CE.SegmentId,
          'Token': item.CE.Token
        };
        item.CE.isAdded = item.CE.scripData && item.CE.scripData.ProfileId;
        item.PE.scripData = this.utils.checkFromWatchlist(item.PE.SegmentId, item.PE.Token);
        item.PE.segmentTokenString = {
          'SegmentId': item.PE.SegmentId,
          'Token': item.PE.Token
        };
        item.PE.isAdded = item.PE.scripData && item.PE.scripData.ProfileId;
      });
    }
    // data.forEach(item => {
    //   item.scripData = this.utils.checkFromWatchlist(item.SegmentId, item.Token);
    //   item.segmentTokenString = { 'SegmentId': item.SegmentId, 'Token': item.Token };
    //   item.isAdded = item.scripData && item.scripData.ProfileId;
    // });
  }
  /**
   * Activate Filter
   * @param index
   * @param config
   * @param fromPage
   */
  activateFilterBySearch(index, config, fromPage) {
    if (this.config.activeTab != index) {
      this.config.activeTab = index;
      this.activeTab = index;
      let config = this.config.tabMapper[index].defaultConfig;
      this.getSearchResults(0, null, config.symbol, null, true);
    }
  }
  /**
   * Refresh List
   */
  refresh() {
    this.isServiceHit = true;
    this.selectScrip(this.config.underlyingScrip);
  }
  /**
   * Reset Option contracts
   */
  resetOptionContracts() {
    this.optionContractsData = {};
    this.optionExpiryConfig = {
      list: [],
      selectedExpiry: ''
    };
  }
  /**get search result
   * @param selectIndex selected index
   * @param allowedSegments allowedSegments
   * @param symbol scrip symbol
  */
  getSearchResults(selectIndex, allowedSegments, symbol, fromPage, noSelect) {
    this.gettingSearchResults = true;
    if ((this.searchConfig.searchInput || "").trim().length >= 3) {
      let request = {
        "strScripName": (this.searchConfig.searchInput || "").trim(),
        "StartPos": this.searchConfig.startPos,
        "NoOfRecords": this.searchConfig.noOfRecords,
        "strSegment": this.config.tabMapper[this.config.activeTab].strSegment || ''
      };
      this.rest.getSearchData(request).subscribe(res => {
        this.gettingSearchResults = false;
        if (res.Status === "Success" && res.Response) {
          allowedSegments = allowedSegments || this.config.tabMapper[this.config.activeTab].filter;
          if (this.config.tabMapper[this.config.activeTab].isIndexRemove) {
            this.searchConfig.searchResults = (res.Response || []).filter(scrip => allowedSegments.indexOf(scrip.SegmentId) > -1 && scrip.IsIndex != 1);
          } else {
            this.searchConfig.searchResults = (res.Response || []).filter(scrip => allowedSegments.indexOf(scrip.SegmentId) > -1);
          }
          //this.searchConfig.searchResults = (res.Response || []).filter((scrip) => allowedSegments.indexOf(scrip.SegmentId) > -1);
          let ind = 0;
          this.searchConfig.searchResults.forEach((ele, i) => {
            if (ele.SegmentId == this.seg && ele.Token == this.tok) {
              ind = i;
            }
          });
          if (this.searchConfig.searchResults.length && selectIndex >= 0 && selectIndex < this.searchConfig.searchResults.length && !noSelect) {
            this.selectScrip(this.searchConfig.searchResults[ind || selectIndex], fromPage);
          }
          // else {
          //   this.searchConfig.searchInput = symbol; // if searchResults is not found then show symbol input box instead of token (29/04/2021)
          // }
        } else {
          this.searchConfig.searchResults = [];
        }
      }, err => {
        this.gettingSearchResults = false;
        this.searchConfig.searchResults = [];
      });
    } else {
      this.gettingSearchResults = false;
      this.searchConfig.searchResults = [];
    }
  }
  /**
   * On component destroy
   */
  ngOnDestroy() {
    if (this.watchlistNameSubscription) this.watchlistNameSubscription.unsubscribe(); // to unsubscribe watchlistNameSubscription (15/03/2021)
    if (this.scripAddSubscription) this.scripAddSubscription.unsubscribe(); // to unsubscribe scripAddSubscription (15/03/2021)
    if (this.scripRemoveSubscription) this.scripRemoveSubscription.unsubscribe(); // to unsubscribe scripRemoveSubscription (15/03/2021)
    this.utils.broadcast('closeDrawer2');
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.utils.unSubscribeMultitouchline(this.optionExpiryConfig[this.optionExpiryConfig.selectedExpiry], 'optionChain');
    this.utils.unSubscribeMultitouchline([{
      SegmentId: this.config.underlyingScrip.SegmentId,
      Token: this.config.underlyingScrip.Token
    }], 'optionChain');
    this.config.tapListener();
    this.subscriptionList.forEach(subscription => {
      if (subscription) subscription.unsubscribe();
    });
    if (this.multitouchlineSub) {
      this.multitouchlineSub.unsubscribe();
      this.multitouchlineSub = null;
    }
  }
  /**
   * Subscribe Changes
   */
  subscribeChanges() {
    this.subscriptionList.push((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.combineLatest)(this.activatedRoute.params, this.activatedRoute.queryParams).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(results => ({
      param: results[0],
      query: results[1]
    }))).subscribe(data => {
      this.seg = null;
      this.tok = null;
      if (data) {
        //  this.strike_count=10;
        if (data.query && data.query.segmentId) {
          this.seg = data.query.segmentId;
        }
        if (data && data.query && data.query.seg) {
          this.seg = data.query.seg;
        }
        if (data.query && data.query.token) {
          this.tok = data.query.token;
        }
        if (data && data.query && data.query.tok) {
          this.tok = data.query.tok;
        }
        if (data.param && data.param.segment) {
          let paramsKey = (data.param.segment || 'derivatives').toLowerCase();
          this.isServiceHit = true;
          this.activateFilter(this.config.mapper[paramsKey], data.query, null, true);
        }
      }
    }));
    this.subscriptionList.push(this.utils.broadcastObservable('routeResuseMenu').subscribe(data => {
      if (data.route) {
        this.activeTab = -1;
        this.config.activeTab = -1;
        let routeData = data.route.split('/');
        this.isServiceHit = true;
        this.activateFilter(this.config.mapper[routeData[routeData.length - 1]]);
      }
    }));
    this.subscriptionList.push(this.utils.broadcastObservable('checkUnsubscription').subscribe(data => {
      if (data.source != "optionChain" && data.data && data.data.length) {
        let result = [];
        let scripData = this.optionExpiryConfig[this.optionExpiryConfig.selectedExpiry] || [];
        data.data.forEach(item => {
          let scripObj = scripData.filter(scrip => scrip.SegmentId == item.SegmentId && scrip.Token == item.Token);
          if (scripObj.length) {
            result.push(scripObj[0]);
          }
        });
        if (this.config.underlyingScrip) {
          let reference = data.data.filter(item => this.config.underlyingScrip.Token == item.Token && this.config.underlyingScrip.SegmentId == item.SegmentId);
          if (reference.length) {
            result.push(reference[0]);
          }
        }
        if (result.length) {
          this.utils.subscribeMultitouchline(result);
        }
      }
    }));
    this.subscriptionList.push(this.utils.broadcastObservable('watchlist').subscribe(data => {
      if (data && this.optionExpiryConfig && this.optionExpiryConfig[this.optionExpiryConfig.selectedExpiry] && this.optionExpiryConfig[this.optionExpiryConfig.selectedExpiry].length) {
        let reference = this.optionExpiryConfig[this.optionExpiryConfig.selectedExpiry].filter(item => item.Token == data[0][7] && item.SegmentId == data[0][1]);
        if (!reference.length) {
          reference = this.config.futureData.filter(item => {
            return item.Token == data[0][7] && item.SegmentId == data[0][1];
          });
        }
        let scrip = null;
        if (reference.length) {
          if (this.utils.isUpdatedData(reference[0], data[0])) scrip = reference[0];
        } else if (this.config.underlyingScrip.SegmentId == data[0][1] && this.config.underlyingScrip.Token == data[0][7]) {
          scrip = this.config.underlyingScrip;
          this.config.LUT = new Date().valueOf();
        }
        if (scrip) {
          data = data[0];
          scrip.PrevClose = scrip.PrevClose || Number(data[76] / scrip.PriceDivisor);
          scrip.PrevChange = (data[8] == 0 ? scrip.PrevClose : data[8] / scrip.PriceDivisor) - scrip.LTP;
          scrip.LTP = data[8] == 0 ? scrip.PrevClose : data[8] / scrip.PriceDivisor; // if LTP == 0 then show prevClose (11/05/2021)
          scrip.Change = scrip.LTP - scrip.PrevClose;
          scrip.ChangePer = scrip.Change * 100 / scrip.PrevClose || 0;
          scrip.BBP = Number(data[3]) / scrip.PriceDivisor;
          scrip.BBQ = Number(data[2]);
          scrip.BSP = Number(data[6]) / scrip.PriceDivisor;
          scrip.BSQ = Number(data[5]);
          scrip.Volume = Number(data[79]);
          scrip.OI = Number(data[88]) || scrip.OI;
          scrip.OIChange = Number(data[465]) || scrip.OIChange;
          scrip.LTT = this.utils.changeCurrentDateFormat(data[73], 'YYYY-MM-DD HHmmss', 'DD-MM-YYYY HH:mm:ss');
          scrip.LUT = this.utils.changeCurrentDateFormat(data[74], 'YYYY-MM-DD HHmmss', 'DD-MM-YYYY HH:mm:ss');
          scrip.upDownClass = scrip.Change < 0 ? "down" : scrip.Change > 0 ? "up" : "";
          scrip.OIClass = scrip.OIChange < 0 ? 'down' : scrip.OIChange > 0 ? 'up' : '';
          // scrip.Change = Math.abs(scrip.Change);
          // scrip.OIChange = Math.abs(scrip.OIChange);
        }
        this.totalOI();
      }
    }));
  }
  /**
   * On changes
   * @param changes
   */
  ngOnChanges(changes) {}
  /**
   * OnInit
   */
  ngOnInit() {
    this.userAccountStatus = this.utils.getUserAccountStatus();
    this.watchlistNames = this.utils.getWatchListName(-1);
    this.config.tapListener = this.renderer.listen('window', 'tap', event => {
      let element = document.querySelector('.searchbar');
      if (!element || event.srcEvent && event.srcEvent.path && event.srcEvent.path.indexOf(element) == -1) {
        this.searchConfig.isSearchOpened = false;
      }
    });
    this.utils.setTrackMoeEvent('visitedOptionChain', {
      "User_ID": this.utils.getUserId() || 'guest',
      "IP": this.shared.IPAddress
    });
    this.analytics.emitEvent('visitedOptionChain', this.utils.getUserId() || 'guest', JSON.stringify({
      "IP": this.shared.IPAddress
    }), 1);
  }
  /**
   * Get Option  Contract
   * @param assetScrip
   * @param optionData
   */
  getOptionContracts(assetScrip, optionData) {
    let request = {
      "nMarketSegmentId": Number(assetScrip.SegmentId),
      "nToken": Number(assetScrip.Token)
    };
    this.isServiceHit = true;
    this.resetOptionContracts();
    this.rest.getOptionContractsData(request).subscribe(res => {
      if (res.Status == "Success" && res.Response) {
        let lists = res.Response.lDictExpiryData;
        let optionList = Object.keys(lists).sort((key1, key2) => new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_11__["default"](key1, 'DDMMMYY').valueOf() - new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_11__["default"](key2, 'DDMMMYY').valueOf());
        optionList.forEach((expiry, index) => {
          let callPutList = lists[expiry];
          this.optionContractsData[expiry] = [];
          this.optionExpiryConfig[expiry] = [];
          let strikePriceList = Object.keys(callPutList.lstCEList);
          strikePriceList.forEach((strikePrice, strikeIndex) => {
            let callScrip = lists[expiry].lstCEList[strikePrice];
            let putScrip = lists[expiry].lstPEList[strikePrice];
            if (putScrip && callScrip) {
              let segmentId = optionData.SegmentId;
              let secName = (assetScrip.Symbol || '') + expiry;
              let strikePriceString = this.utils.segmentTransform(Number(strikePrice) / assetScrip.PriceDivisor, optionData.SegmentId, true);
              let chainObject = {
                CE: {
                  Token: callScrip.Token,
                  Volume: '',
                  SegmentId: segmentId,
                  LTP: '',
                  Change: '',
                  ChangePer: '',
                  BBQ: '',
                  BSQ: '',
                  BSP: '',
                  BBP: '',
                  OI: '',
                  OIChange: '',
                  PriceDivisor: assetScrip.PriceDivisor,
                  SecName: secName + 'CE' + strikePriceString
                },
                PE: {
                  Token: putScrip.Token,
                  Volume: '',
                  SegmentId: segmentId,
                  LTP: '',
                  Change: '',
                  ChangePer: '',
                  BBQ: '',
                  BSQ: '',
                  BSP: '',
                  BBP: '',
                  OI: '',
                  OIChange: '',
                  PriceDivisor: assetScrip.PriceDivisor,
                  SecName: secName + 'PE' + strikePriceString
                },
                StrikePrice: strikePrice
              };
              this.optionExpiryConfig[expiry].push(chainObject.CE);
              this.optionExpiryConfig[expiry].push(chainObject.PE);
              this.optionContractsData[expiry].push(chainObject);
            }
          });
        });
        this.optionExpiryConfig.list = optionList;
        this.optionExpiryConfig.selectedExpiry = optionList[0];
        this.toggleAddRemove(optionList[0]);
        this.watchListSubscriptions();
        this.getMutlitouchline(this.optionExpiryConfig[this.optionExpiryConfig.selectedExpiry]);
        this.getOIMaxLimit();
        this.totalOI();
        setTimeout(() => {
          this.setLimit(10); //this.strike_count?this.strike_count:
        }, 100);
      }
      // setTimeout(() => {
      //   let rows = document.querySelectorAll('tr.ce-itm');
      //   if (rows && rows.length) {
      //     let element = rows[rows.length - 1];
      //     if (element) {
      //       document.scrollingElement.scrollTop = element.getBoundingClientRect().top - (window.innerHeight / 2);
      //     }
      //   }
      // }, 1000)
    }, err => {}).add(() => {
      this.isServiceHit = false;
    });
  }
  /**
   * Change Rows limit
   * @param count Count
   */
  toggleDisplay(count) {
    this.config.isShowAll = !this.config.isShowAll;
    this.setLimit(count);
  }
  /**
   *  Change Rows limit
   * @param count
   */
  setLimit(count) {
    this.strike_count = count;
    if (!this.optionContractsData[this.optionExpiryConfig.selectedExpiry]) return;
    if (!(count == 'all')) {
      let strikePriceList = (this.optionContractsData[this.optionExpiryConfig.selectedExpiry] || []).map(item => item.StrikePrice);
      let price = this.config.underlyingScrip.LTP * this.config.underlyingScrip.PriceDivisor;
      let upperindex = strikePriceList.findIndex(item => Number(item) > price);
      this.config.upperIndex = 0;
      if (upperindex - 1 - (count - 1) >= 0) {
        this.config.upperIndex = upperindex - 1 - (count - 1);
      }
      if (upperindex + (count - 1) <= this.optionContractsData[this.optionExpiryConfig.selectedExpiry].length) {
        this.config.lowerIndex = upperindex + (count - 1);
      }
    } else {
      this.config.upperIndex = 0;
      this.config.lowerIndex = this.optionContractsData[this.optionExpiryConfig.selectedExpiry].length - 1;
    }
    this.utils.unSubscribeMultitouchline(this.optionExpiryConfig[this.optionExpiryConfig.selectedExpiry] || [], 'optionChain');
    setTimeout(() => {
      this.utils.subscribeMultitouchline(this.optionExpiryConfig[this.optionExpiryConfig.selectedExpiry].slice(this.config.upperIndex * 2, this.config.lowerIndex * 2 + 2));
    }, 1000);
    this.utils.subscribeMultitouchline([{
      SegmentId: this.config.underlyingScrip.SegmentId,
      Token: this.config.underlyingScrip.Token
    }]);
  }
  /**
   * to get max CEOI,PEOI,PEChangeOI,CEChangeOI
   * @returns
   */
  getOIMaxLimit() {
    if (!this.optionContractsData[this.optionExpiryConfig.selectedExpiry]) return;
    let data = this.optionContractsData[this.optionExpiryConfig.selectedExpiry];
    if (data[this.config.callOIIndex]) data[this.config.callOIIndex].CE.CEOIClass = false;
    if (data[this.config.putOIIndex]) data[this.config.putOIIndex].PE.PEOIClass = false;
    if (data[this.config.callOIChangeIndex]) data[this.config.callOIChangeIndex].CE.CEOIChgClass = false;
    if (data[this.config.putOIChangeIndex]) data[this.config.putOIChangeIndex].PE.PEOIChgClass = false;
    let callIndex = data.reduce((maxIndex, item, index, list) => (item.CE.OI || 0) > list[maxIndex].CE.OI ? index : maxIndex, 0);
    let putIndex = data.reduce((maxIndex, item, index, list) => (item.PE.OI || 0) > list[maxIndex].PE.OI ? index : maxIndex, 0);
    let callOIChangeIndex = data.reduce((maxIndex, item, index, list) => (item.CE.OIChange || 0) > list[maxIndex].CE.OIChange ? index : maxIndex, 0);
    let putOIChangeIndex = data.reduce((maxIndex, item, index, list) => (item.PE.OIChange || 0) > list[maxIndex].PE.OIChange ? index : maxIndex, 0);
    this.config.callOIIndex = callIndex;
    this.config.putOIIndex = putIndex;
    this.config.callOIChangeIndex = callOIChangeIndex;
    this.config.putOIChangeIndex = putOIChangeIndex;
    this.config.maxCallOI = data[callIndex].CE.OI;
    this.config.maxPutOI = data[putIndex].PE.OI;
    data[this.config.callOIIndex].CE.CEOIClass = data[this.config.callOIIndex].CE.OI != "" && data[this.config.callOIIndex].CE.OI != undefined ? true : false;
    data[this.config.putOIIndex].PE.PEOIClass = data[this.config.putOIIndex].PE.OI != "" && data[this.config.putOIIndex].PE.OI != undefined ? true : false;
    data[this.config.callOIChangeIndex].CE.CEOIChgClass = data[this.config.callOIChangeIndex].CE.OIChange != "" && data[this.config.callOIChangeIndex].CE.OIChange != undefined ? true : false;
    data[this.config.putOIChangeIndex].PE.PEOIChgClass = data[this.config.putOIChangeIndex].PE.OIChange != "" && data[this.config.putOIChangeIndex].PE.OIChange != undefined ? true : false;
    data.forEach(ele => {
      if (ele.CE.OI) {
        ele.CE.percentage = ele.CE.OI / this.config.maxCallOI * 100;
      } else {
        ele.CE.percentage = 0;
      }
      if (ele.PE.OI) {
        ele.PE.percentage = ele.PE.OI / this.config.maxPutOI * 100;
      } else {
        ele.PE.percentage = 0;
      }
    });
  }
  /**
   * Change Expiry
   * @param item
   * @param prevValue
   */
  changeExpiry(item, prevValue) {
    if (item != prevValue) {
      this.optionExpiryConfig.selectedExpiry = item;
      this.utils.unSubscribeMultitouchline(this.optionExpiryConfig[prevValue], 'optionChain');
      this.getMutlitouchline(this.optionExpiryConfig[item]);
      this.config.isShowAll = false;
      this.setLimit(10); //this.strike_count?this.strike_count:
      this.toggleAddRemove();
      this.utils.setTrackMoeEvent('clickedOptionChainExpiryFilter', {
        "User_ID": this.utils.getUserId() || 'guest',
        "IP": this.shared.IPAddress
      });
      this.analytics.emitEvent('clickedOptionChainExpiryFilter', this.utils.getUserId() || 'guest', JSON.stringify({
        "IP": this.shared.IPAddress
      }), 1);
    }
  }
  /**
   * Open Chart
   * @param item Scrip
   */
  openChart(item) {
    let isTradingChart = this.utils.getUserId() ? this.utils.getPreferences('ChartType') == "TRADING_VIEW" || localStorage.getItem('chartType') == 'true' : localStorage.getItem('chartType') == 'true' || false;
    if (isTradingChart) {
      localStorage.setItem("prevPath", window.location.pathname);
      window.open('/tv/trading-view-charts/' + (item.Symbol || item.SecName) + '/' + item.SegmentId + '/' + item.Token + "?scripDesc=" + item.SecName);
    } else window.open('/cq/advanced-charts/' + (item.Symbol || item.SecName) + '/' + item.SegmentId + '/' + item.Token);
  }
  /**
   * Open Company Page
   * @param item
   */
  getInfo(item) {
    let companyPath = (item.Symbol || item.SecName).toLowerCase().replace(/[\s|\&|\%]/g, '').trim();
    let urlPrefix = '/instrument/' + (item["IsIndex"] == 1 || [6, 8, 14, 39].indexOf(item.SegmentId) > -1 ? 'indices/' : [1, 2, 3, 4].indexOf(item.SegmentId) > -1 && !item["IsIndex"] ? 'equity/' : [5, 7].indexOf(item.SegmentId) > -1 ? 'commodity/' : 'currency/');
    let url = urlPrefix + companyPath + '/' + item.SegmentId + '/' + item.Token;
    if (location.pathname.startsWith('/instrument')) {
      let presentToken = JSON.parse(localStorage.getItem("presentToken"));
      let newToken = presentToken ? presentToken.split('&') : [];
      if (newToken.length > 0 && item.SegmentId == newToken[0] && item.Token == newToken[1]) {
        this.utils.broadcast('routeResuse', item);
      } else {
        this.shared.saveRoutes(url);
        this.router.navigate([url]);
      }
    } else {
      this.shared.saveRoutes(url);
      this.router.navigate([url]);
    }
    let segmentToken = item.SegmentId + '&' + item.Token;
    localStorage.setItem('presentToken', JSON.stringify(segmentToken));
  }
  /**
   * Select Scrip
   * @param item
   * @param fromPage
   * @param noSelect
   */
  selectScrip(item, fromPage, noSelect) {
    this.utils.unSubscribeMultitouchline(this.optionExpiryConfig[this.optionExpiryConfig.selectedExpiry] || [], 'optionChain');
    if (this.config.underlyingScrip) this.utils.unSubscribeMultitouchline([{
      SegmentId: this.config.underlyingScrip.SegmentId,
      Token: this.config.underlyingScrip.Token
    }], 'optionChain');
    this.resetOptionContracts();
    this.config.underlyingScrip = item;
    let segmentId = this.config.tabMapper[this.config.activeTab][item.SegmentId];
    this.getMutlitouchline([this.config.underlyingScrip], () => {
      this.getOptionContracts(item, {
        SegmentId: segmentId
      });
    });
    this.config.LUT = new Date().valueOf();
    if (!fromPage) this.searchConfig.isSearchOpened = false;
    this.searchConfig.searchInput = item.Symbol;
    if (!noSelect) this.location.replaceState(location.pathname + '?segmentId=' + item.SegmentId + '&token=' + item.Token + '&symbol=' + item.Symbol + "&seg=" + (this.seg || item.SegmentId) + "&tok=" + (this.tok || item.Token) + "&priceDiviser=" + item.PriceDivisor);
    this.utils.subscribeMultitouchline([{
      SegmentId: item.SegmentId,
      Token: item.Token
    }]);
    this.getFutureData();
  }
  /**
   * Get Multitouchline Data
   * @param scripList
   * @param callback
   */
  getMutlitouchline(scripList, callback) {
    let request = {
      "UserId": this.utils.getUserId() || '',
      "SessionId": this.utils.getSessionId() || "",
      "MultipleTokens": this.utils.generateTokens(scripList)
    };
    if (request.MultipleTokens) {
      this.utils.commonGetMultipleTouchLineCall(request).subscribe(res => {
        if (res.Status == "Success" && res.Response && res.Response.lMT && res.Response.lMT.length) {
          console.log("scripList multitouchline10 ", JSON.parse(JSON.stringify(scripList)));
          let multitouchLine = res.Response.lMT;
          multitouchLine.forEach((touchline, index) => {
            let scrip = scripList[index];
            scrip.PrevChange = 0;
            scrip.PrevClose = touchline.PrevClose / touchline.PriceDivisor;
            scrip.LTP = touchline.LTP == 0 ? scrip.PrevClose : touchline.LTP / touchline.PriceDivisor; // if LTP == 0 then show prevClose (11/05/2021) 
            scrip.Change = scrip.LTP - scrip.PrevClose;
            scrip.ChangePer = scrip.Change * 100 / scrip.PrevClose || 0;
            scrip.BSQ = Number(touchline.BSQ) || 0;
            scrip.BBQ = Number(touchline.BBQ) || 0;
            scrip.BSP = Number(touchline.BSP) / touchline.PriceDivisor;
            scrip.BBP = Number(touchline.BBP) / touchline.PriceDivisor;
            scrip.PriceDivisor = touchline.PriceDivisor;
            scrip.upDownClass = scrip.Change < 0 ? "down" : scrip.Change > 0 ? "up" : "";
            // scrip.Change = Math.abs(scrip.Change);
            scrip.LTT = this.utils.changeCurrentDateFormat(touchline.LTT, 'DD-MM-YYYY HH:mm:ss', 'DD-MM-YYYY HH:mm:ss');
            scrip.LUT = this.utils.changeCurrentDateFormat(touchline.LUT, 'DD-MM-YYYY HH:mm:ss', 'DD-MM-YYYY HH:mm:ss');
            scrip.OI = touchline.OpenInterest;
            scrip.PrevOI = touchline.PrevOI;
            scrip.OIChange = Number(touchline.PrevOI) ? Number(touchline.OpenInterest - touchline.PrevOI) * 100 / touchline.PrevOI : 0;
            scrip.OIClass = scrip.OIChange < 0 ? 'down' : scrip.OIChange > 0 ? 'up' : '';
            //  scrip.OIChange = Math.abs(scrip.OIChange);
          });
          if (callback) callback();
          this.getOIMaxLimit();
          this.totalOI();
        }
      }, err => {});
    }
  }
  /**
   * Go to company page
   * @param item
   * @param optionKey
   */
  gotoCompanyPage(item, optionKey) {
    this.utils.setTrackMoeEvent('visitedOptionChainDetailBSDF', {
      "User_ID": this.utils.getUserId() || 'guest',
      "IP": this.shared.IPAddress
    });
    this.analytics.emitEvent('visitedOptionChainDetailBSDF', this.utils.getUserId() || 'guest', JSON.stringify({
      "IP": this.shared.IPAddress
    }), 1);
    let data = item[optionKey] || item;
    let url = '/instrument/' + (this.config.activeTab == 3 ? 'equity' : this.config.activeTab == 2 ? 'currency' : 'equity') + '/';
    url += data.SecName.toLowerCase().replace(/[\s|\&|\%]/g, '').trim() + '/' + data.SegmentId + '/' + data.Token;
    this.router.navigate([url]);
  }
  /**
   * Trade Scrip
   * @param item
   * @param action
   * @param optionKey
   */
  tradeScrip(item, action, optionKey) {
    let userAccountStatus = this.utils.getUserAccountStatus();
    if (!(!userAccountStatus || !userAccountStatus.onboardStatus || userAccountStatus.onboardStatus == 'C') || this.utils.isAuthorized()) {
      this.utils.setTrackMoeEvent(action === 1 ? 'clickedOptionChainBuy' : 'clickedOptionChainSell', {
        "User_ID": this.utils.getUserId() || 'guest',
        "IP": this.shared.IPAddress
      });
      this.analytics.emitEvent(action === 1 ? 'clickedOptionChainBuy' : 'clickedOptionChainSell', this.utils.getUserId() || 'guest', JSON.stringify({
        "IP": this.shared.IPAddress
      }), 1);
      let data = item[optionKey] || item;
      this.utils.broadcast('openBuySellDrawer', {
        'scrip': data,
        'action': action
      });
    } else {
      this.openPreLoginA();
    }
  }
  /**
  * Trade Scrip
  * @param item
  * @param action
  * @param optionKey
  */
  tradeScrip2(item, action, optionKey) {
    let userAccountStatus = this.utils.getUserAccountStatus();
    if (!(!userAccountStatus || !userAccountStatus.onboardStatus || userAccountStatus.onboardStatus == 'C') || this.utils.isAuthorized()) {
      // this.utils.broadcast('closeDrawer2')
      //this.utils.setTrackMoeEvent(action === 1 ? 'clickedOptionChainBuy' : 'clickedOptionChainSell', { "User_ID": this.utils.getUserId() || 'guest', "IP": this.shared.IPAddress });
      //this.analytics.emitEvent(action === 1 ? 'clickedOptionChainBuy' : 'clickedOptionChainSell', this.utils.getUserId() || 'guest', JSON.stringify({ "IP": this.shared.IPAddress }), 1);
      setTimeout(() => {
        let data = item[optionKey] || item;
        this.utils.broadcast('openBuySellDrawer2', {
          'scrip': data,
          'action': action,
          optionChainData: JSON.parse(JSON.stringify(this.optionContractsData[this.optionExpiryConfig.selectedExpiry]))
        });
      }, 1);
    } else {
      this.openPreLoginA();
    }
  }
  /**
   * Go to login page
   */
  gotoLogin() {
    this.utils.setFromURL(location.pathname);
    this.router.navigate(['auth/login']);
  }
  /**
   * Close Prelogin
   */
  closePreLogin() {
    this.showPreLogin = false;
    this.config.showPreLogin = false;
    this.renderer.setStyle(document.body, 'overflow', 'auto');
  }
  /**
   * Navigate to  login  page
   */
  navigateToLogin() {
    this.utils.setFromURL(location.pathname);
    this.renderer.setStyle(document.body, 'overflow', 'auto');
    this.renderer.removeClass(document.body, 'modal_open');
    this.router.navigate(['/auth/login']);
  }
  /**
   * Open Prelogin
   */
  openPrelogin() {
    this.config.showPreLogin = true;
    this.shared.showPrelogin = true;
    this.renderer.setStyle(document.body, 'overflow', 'hidden');
  }
  /**
   * Update Scroll
   * @param currentScroll
   */
  updateScroll(currentScroll) {
    switch (currentScroll) {
      case 'left':
        this.scrollCenter.scrollTop = this.scrollLeft.scrollTop;
        this.scrollRight.scrollTop = this.scrollLeft.scrollTop;
        break;
      case 'right':
        this.scrollCenter.scrollTop = this.scrollRight.scrollTop;
        this.scrollLeft.scrollTop = this.scrollRight.scrollTop;
        break;
      case 'center':
        this.scrollLeft.scrollTop = this.scrollCenter.scrollTop;
        this.scrollRight.scrollTop = this.scrollCenter.scrollTop;
        break;
    }
  }
  /**
   * Get Max OI
   * @returns
   */
  getMaxY() {
    if (this.optionContractsData[this.optionExpiryConfig.selectedExpiry]) {
      return this.optionContractsData[this.optionExpiryConfig.selectedExpiry].reduce((max, p) => p.CE.OI > max ? p.CE.OI : max, this.optionContractsData[this.optionExpiryConfig.selectedExpiry][0].CE.OI);
    }
  }
  /**
     * get future data api for expiry of future
     * @param token token of present  card selected in segmentToken
     * @param segmentId SegmentId of present  card selected in segmentToken
     */
  getFutureData() {
    if (this.multitouchlineSub) {
      this.multitouchlineSub.unsubscribe();
      this.multitouchlineSub = null;
    }
    this.config.futureData = [];
    this.config.PCR = 0;
    let futurePayload = {
      "UserId": this.utils.getUserId(),
      "SessionId": this.utils.getSessionId() || '',
      "Token": this.config.underlyingScrip.Token,
      "SegmentId": this.config.underlyingScrip.SegmentId,
      "MktDataRequired": false
    };
    this.multitouchlineSub = this.rest.getFutureData(futurePayload).subscribe(res => {
      if (res.Status === "Success" && res.Response && res.Response.length) {
        for (let i = 1; i <= 2; i++) {
          this.config.futureData.push(res.Response[i].lExchangeScrip);
        }
        this.utils.subscribeMultitouchline(this.config.futureData);
        this.getMutlitouchline(this.config.futureData);
      }
      // else if (this.utils.isSessionExpired(res.Reason)) {
      //   if(this.shared.isSSO){
      //     this.utils.sessionExpireHandling()
      //     return
      //   }
      //   this.utils.error('Session Expired', "Please Login Again");
      //   this.utils.postFeatureCount();
      //   this.utils.clearLoginDetails();
      //   this.shared.userId = null;
      //   this.router.navigate(['auth/login']);
      // }
      else {
        this.utils.error('Error', res.Reason);
      }
    }, err => {});
  }
  /**
   * Clicked list index
   * @param index
   */
  isDropup(index) {
    this.dropUp = this.config.lowerIndex == index || this.config.lowerIndex - 1 == index ? true : false;
  }
  /**
   * Calculate total of OI
   */
  totalOI() {
    let totalOIPE = 0;
    let totalOICE = 0;
    let selectedStrike = 0;
    let currentClose = 0;
    (this.optionContractsData[this.optionExpiryConfig.selectedExpiry] || []).forEach(element => {
      totalOICE += element.CE.OI;
      totalOIPE += element.PE.OI;
    });
    this.config.PCR = totalOIPE / totalOICE;
  }
  static {
    this.ctorParameters = () => [{
      type: src_app_services_rest_company_service__WEBPACK_IMPORTED_MODULE_5__.CompanyService
    }, {
      type: src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_7__.UtilsService
    }, {
      type: src_app_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_6__.SharedDataService
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute
    }, {
      type: _angular_common__WEBPACK_IMPORTED_MODULE_15__.Location
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_16__.Renderer2
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.Router
    }, {
      type: src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_4__.AnalyticsService
    }];
  }
  static {
    this.propDecorators = {
      leftScroll: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_16__.ViewChild,
        args: ['leftScroll', {
          static: false
        }]
      }],
      rightScroll: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_16__.ViewChild,
        args: ['rightScroll', {
          static: false
        }]
      }],
      centerScroll: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_16__.ViewChild,
        args: ['centerScroll', {
          static: false
        }]
      }]
    };
  }
};
OptionChainComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.Component)({
  selector: 'app-option-chain',
  template: _option_chain_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule, _directives_input_restrict2_directive__WEBPACK_IMPORTED_MODULE_8__.InputRestrict2Directive, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgStyle, src_app_directives_dropdown_dropdown_directive__WEBPACK_IMPORTED_MODULE_3__.Dropdown, src_app_directives_dropdown_dropdown_open_directive__WEBPACK_IMPORTED_MODULE_2__.DropdownOpen, _pipes_segment_pipe__WEBPACK_IMPORTED_MODULE_9__.SegmentPipe, _pipes_value_pipe__WEBPACK_IMPORTED_MODULE_10__.ValuePipe],
  providers: [src_app_services_rest_company_service__WEBPACK_IMPORTED_MODULE_5__.CompanyService],
  styles: [(_option_chain_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__metadata)("design:paramtypes", [src_app_services_rest_company_service__WEBPACK_IMPORTED_MODULE_5__.CompanyService, src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_7__.UtilsService, src_app_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_6__.SharedDataService, _angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute, _angular_common__WEBPACK_IMPORTED_MODULE_15__.Location, _angular_core__WEBPACK_IMPORTED_MODULE_16__.Renderer2, _angular_router__WEBPACK_IMPORTED_MODULE_14__.Router, src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_4__.AnalyticsService])], OptionChainComponent);


/***/ }),

/***/ 98344:
/*!**********************************************************************************!*\
  !*** ./src/app/option-chain/option-chain/option-chain.component.scss?ngResource ***!
  \**********************************************************************************/
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
@media (max-width: 767px) {
  .future.table tr {
    display: block;
  }
}
@media (max-width: 767px) {
  .future.table td {
    display: flex;
    justify-content: space-between;
  }
  .future.table td:before {
    content: attr(data-label);
    display: block;
    color: #797979;
    font-weight: 500;
    font-size: 13px;
  }
}
.future.table thead th {
  padding: 5px;
}
@media (max-width: 767px) {
  .future.table thead th {
    display: none;
  }
}

table th,
table td {
  padding: 0px 5px;
  font-size: 13px;
  vertical-align: middle;
  height: 30px;
  white-space: nowrap;
}
table th span,
table td span {
  display: block;
}
table th {
  font-size: 11px;
}
table thead th {
  padding: 5px;
}
table tbody tr {
  position: relative;
  z-index: 1;
}
table tbody tr.pe-itm td.pe-td {
  background: rgba(255, 193, 116, 0.3);
}
table tbody tr.ce-itm td.ce-td {
  background: rgba(255, 193, 116, 0.3);
}
table tbody tr:hover {
  z-index: 3;
}

.selectedOI {
  position: relative;
  padding-left: 3px !important;
  padding-right: 3px !important;
  border-radius: 2px;
  background: #c2f2c2 !important;
  background: rgba(236, 140, 22, 0.9) !important;
}

.icon-repeat {
  display: block;
  line-height: 1.2;
}

.action-dropdown {
  position: relative;
  text-align: center;
}
.action-dropdown .dropdown-menu {
  border-radius: 0;
  font-size: 12px;
  min-width: 100px;
}
.action-dropdown .dropdown-menu li a {
  padding: 3px 10px;
}
.action-dropdown.right-dropdown .dropdown-menu {
  left: auto;
  right: 0%;
}

.form-control {
  margin-bottom: 0;
  border-radius: 0;
}

.filters-wrap {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
}
.filters-wrap .filter-group {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
}
@media (max-width: 990px) {
  .filters-wrap .filter-group {
    margin-bottom: 10px;
  }
}
.filters-wrap .filter-group + .filter-group {
  margin-left: 7px;
}
.filters-wrap .filter-group label {
  margin-bottom: 10px !important;
  font-size: 14px;
}
.filters-wrap .filter-group .searchbar {
  height: 33px;
  position: relative;
  margin-right: 30px;
}
.filters-wrap .filter-group .searchbar img {
  height: 16px;
}
@media (min-width: 560px) {
  .filters-wrap .filter-group .searchbar {
    min-width: 330px;
  }
}
@media (max-width: 560px) {
  .filters-wrap .filter-group .searchbar {
    width: 100%;
    margin-bottom: 10px;
  }
}
.filters-wrap .filter-group .searchbar .input-area {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #ffffff;
  padding: 0px 10px;
  display: flex;
  justify-content: stretch;
  align-items: center;
  border: 1px solid #ccc;
  transition: 0.5s ease;
  z-index: 99;
  border-radius: 5px;
}
.filters-wrap .filter-group .searchbar .input-area i {
  margin-right: 10px;
}
.filters-wrap .filter-group .searchbar .input-area input {
  outline: none;
  box-shadow: none;
  border: none;
  width: 100%;
  text-transform: uppercase;
  color: #000;
  font-size: 14px;
  padding-left: 10px;
}
.filters-wrap .filter-group .searchbar .input-area input::placeholder {
  color: #989898;
}

.strike {
  display: flex;
  flex-direction: column;
}
.strike .title {
  font-size: 16px;
  line-height: 22px;
  font-weight: 600;
  color: #333333;
  padding-bottom: 10px;
}
.strike .numbers {
  display: flex;
}
.strike .numbers ul {
  display: flex;
  padding-left: 0;
  margin: 0;
}
.strike .numbers ul li {
  list-style: none;
  cursor: pointer;
  padding: 14px;
  display: flex;
  align-items: center;
  line-height: 0;
  border: 1px solid #989898;
}
.strike .numbers ul li:first-child {
  border-radius: 5px 0 0 5px;
}
.strike .numbers ul li:last-child {
  border-radius: 0 5px 5px 0;
}
.strike .numbers ul li.active {
  background-color: #004393;
  color: #ffffff;
}
.strike .numbers .btn-refresh {
  margin: 0 0.5rem;
  background-color: transparent !important;
  padding: 5px 3px;
  border: 1px solid #989898;
  border-radius: 5px;
}
@media (max-width: 1280px) {
  .strike .numbers .btn-refresh {
    padding: 4px 4px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
@media (max-width: 1280px) {
  .strike .numbers .btn-refresh svg {
    height: 14px;
    width: 14px;
  }
}

@media (max-width: 767px) {
  .table-custom {
    overflow-x: scroll;
  }
}

.results {
  display: none;
  top: 100%;
  width: 100%;
  position: absolute;
  background: #ffffff;
  z-index: 999;
  border: 1px solid #dadde0;
  border-radius: 5px;
  margin-top: 5px;
}
@media (max-width: 560px) {
  .results {
    width: 100%;
  }
}
.results.hovered {
  display: block;
}
.results .result-tabs ul {
  padding-left: 0;
  list-style: none;
  margin-bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #dadde0;
  flex-wrap: wrap;
}
.results .result-tabs ul li {
  padding: 15px 0;
  margin: 0px 15px;
  font-weight: bold;
  cursor: pointer;
}
@media (max-width: 560px) {
  .results .result-tabs ul li {
    padding: 10px 0;
    margin: 0px 10px;
  }
}
.results .result-tabs ul li.active {
  color: #fe616e;
  border-bottom: 2px solid #fe616e;
}
.results .search-results {
  font-size: 11px;
}
.results .search-results .result-ul {
  min-height: 200px;
  max-height: 400px;
  overflow: auto;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
  align-items: flex-start;
  padding: 1rem 0.5rem;
  padding-top: 0px;
}
.results .search-results .result-ul li {
  padding: 10px;
  width: 100%;
  border-bottom: 1px solid #C1C1C1;
  cursor: pointer;
}
.results .search-results .result-ul li a {
  padding: 8px 8px !important;
  color: #C1C1C1;
  font-size: 12px;
  font-weight: 500;
}
.results .search-results .result-ul li.hidden {
  display: none;
}
.results .search-results .result-ul li.no-data-container {
  cursor: auto;
}
.results .search-results .result-ul li.no-data-container:hover {
  background: none;
}
.results .search-results .result-ul li.no-data-container small {
  width: 100%;
  text-align: center;
  font-weight: 600;
  padding: 5px 10px;
}
.results .search-results .result-ul li .symbol {
  width: 30%;
  font-weight: bold;
  padding: 5px 10px;
  text-align: left;
  position: relative;
}
@media (max-width: 560px) {
  .results .search-results .result-ul li .symbol {
    display: none;
  }
}
.results .search-results .result-ul li .name {
  width: 70%;
  padding: 5px 10px;
  text-align: right;
}
.results .search-results .header-ul {
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
  align-items: flex-start;
  padding: 0.5rem 0.5rem;
  display: flex;
  padding-bottom: 0px;
}
.results .search-results .header-ul li {
  width: 100%;
  border-bottom: 1px solid #C1C1C1;
  cursor: pointer;
}
.results .search-results .header-ul li a {
  padding: 8px 8px !important;
  color: #C1C1C1;
  font-size: 12px;
  font-weight: 500;
}
.results .search-results .header-ul li.hidden {
  display: none;
}
.results .search-results .header-ul li.no-data-container {
  cursor: auto;
}
.results .search-results .header-ul li.no-data-container:hover {
  background: none;
}
.results .search-results .header-ul li.no-data-container small {
  width: 100%;
  text-align: center;
  font-weight: 600;
  padding: 5px 10px;
}
.results .search-results .header-ul li .symbol {
  width: 30%;
  font-weight: bold;
  padding: 5px 10px;
  text-align: left;
}
@media (max-width: 560px) {
  .results .search-results .header-ul li .symbol {
    display: none;
  }
}
.results .search-results .header-ul li .name {
  width: 70%;
  padding: 5px 10px;
  text-align: right;
}

button.btn-outline {
  width: 30px;
  padding: 3px;
  border-radius: 1px;
  background: none;
  margin: 0 2px;
  border: 1px solid;
}
@media screen and (max-width: 767px) {
  button.btn-outline {
    width: 40px;
    padding: 7px;
    margin: 0 7px;
  }
}
button.btn-outline.border-less {
  border: none;
  width: 25px;
}
button.btn-outline i {
  font-size: 16px;
  line-height: 16px;
  display: block;
}
button.btn-outline.buy {
  color: #21ce99;
  border-color: #21ce99;
}
button.btn-outline.buy:hover, button.btn-outline.buy:focus {
  color: #ffffff;
  background: #21ce99;
  outline: 0;
}
button.btn-outline.sell, button.btn-outline.modify {
  color: #f0ad4e;
  border-color: #f0ad4e;
}
button.btn-outline.sell:hover, button.btn-outline.sell:focus, button.btn-outline.modify:hover, button.btn-outline.modify:focus {
  color: #ffffff;
  background: #f0ad4e;
  outline: 0;
}
button.btn-outline.details {
  color: #337ab7;
  border-color: #337ab7;
}
button.btn-outline.details:hover, button.btn-outline.details:focus {
  color: #ffffff;
  background: #337ab7;
  outline: 0;
}
button.btn-outline.cancel {
  color: #f16522;
  border-color: #f16522;
}
button.btn-outline.cancel:hover, button.btn-outline.cancel:focus {
  color: #ffffff;
  background: #f16522;
  outline: 0;
}

.no-data-section {
  height: 400px;
  width: 100%;
  text-align: center;
  font-size: 17px;
  font-weight: bold;
  line-height: 5rem;
}

.section-title {
  color: black;
  font-weight: bold;
  font-size: 13px;
  position: sticky;
  top: 0px;
  z-index: 9;
  background-color: #ffffff;
}

.option-chain-table {
  display: flex;
  align-items: flex-end;
  overflow: auto;
  overflow-x: scroll;
}
.option-chain-table .table-wrap {
  width: 100%;
  display: block;
  max-height: 80vh;
  position: relative;
}
.option-chain-table .strike-price {
  width: 250px;
  background: #ebebeb;
  width: 120px;
  z-index: 3;
}
.option-chain-table .strike-price .table-wrap td,
.option-chain-table .strike-price .table-wrap th {
  background: #ffffff !important;
  z-index: 3;
  width: 120px;
  font-weight: bold;
}
.option-chain-table .strike-price .table-wrap td {
  background: #ebebeb !important;
}
.option-chain-table .strike-price .table-wrap::-webkit-scrollbar {
  display: none;
}
.option-chain-table .strike-price .table-wrap .fixed-sec {
  display: flex;
  align-items: flex-end;
}
.option-chain-table .call-section .table-wrap {
  direction: rtl;
}
.option-chain-table .call-section .table-wrap .actions {
  width: 36px;
  padding: 0;
  background: #ffffff;
  position: sticky;
  left: 0;
}
.option-chain-table .put-section .actions {
  width: 36px;
  padding: 0;
  background: #ffffff;
  position: sticky;
  right: 0;
}
.option-chain-table .put-section .text-right {
  text-align: left !important;
}

table {
  padding-top: 30px;
  border: none;
  width: 100%;
}
table thead {
  top: 0px;
  left: 0;
  z-index: 9;
  background-color: #ffffff;
  box-shadow: 0px 0px 10px 0px rgba(169, 172, 189, 0.5);
}
table .fixed-sec {
  position: sticky;
  top: 0px;
  background-color: #ffffff;
  z-index: 9;
  border-bottom: 1px solid #ccc;
  min-height: 77px;
}
table .fixed-sec h2, table .fixed-sec h3 {
  margin: 0;
  padding: 10px 0 10px;
}
table .fixed-sec thead {
  box-shadow: none;
}
table .fixed-sec thead th {
  border-bottom: 0;
  white-space: normal;
  min-height: 30px;
}
table tr:not(.hidden) {
  display: flex;
  align-items: center;
  transition: all 0.3s;
}
table tr:not(.hidden) th,
table tr:not(.hidden) td {
  width: 100%;
  padding: 5px;
  position: relative;
  border: none;
  z-index: 1;
}
table tr:not(.hidden) th.actions,
table tr:not(.hidden) td.actions {
  width: 100%;
}

.summery {
  display: inline-block;
  float: right;
}

.futures {
  display: flex;
  padding: 15px 25px;
}
@media (min-width: 1200px) {
  .futures {
    padding: 15px 25px;
  }
}
@media (min-width: 700px) {
  .futures {
    padding: 15px 20px;
  }
}

.futures-price {
  line-height: 22px;
}

.future thead {
  background: none;
  box-shadow: none;
  display: table-header-group;
}
.future tr {
  display: table-row !important;
}
.future th,
.future td {
  white-space: normal !important;
  width: auto !important;
}
.future td {
  font-size: 1.75rem;
  border-top: none;
}
.future span {
  display: inline-block !important;
}

.table-responsive {
  display: block;
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
}
@media (max-width: 567px) {
  .table-responsive-sm {
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
  }
}

.section-one .call-put-wrap {
  display: flex;
  text-align: center;
  position: sticky;
  z-index: 9;
  top: 0;
  width: 100%;
}
.section-one .maintable {
  display: flex;
  overflow-x: hidden;
  width: 100%;
}
.section-one .maintable .topcalls {
  background: #FEF8E6;
  box-shadow: 1px -1px 3px 0 rgba(0, 0, 0, 0.1607843137);
}
.section-one .maintable .pink {
  width: 60px;
  height: 15px;
  border-radius: 0 19px 19px 0;
  background-color: #FF1A1A;
  opacity: 20%;
  margin-right: 8px;
}
.section-one .maintable .blue {
  width: 60px;
  height: 15px;
  border-radius: 19px 0 0 19px;
  background-color: #004393;
  opacity: 20%;
  margin-left: 8px;
}
.section-one .maintable thead {
  box-shadow: none;
  position: sticky;
  top: 0;
}
.section-one .maintable thead th {
  display: flex;
  align-items: flex-end;
  padding: 20px 20px;
  border-bottom: 1px solid #eeeeee;
  color: #333333;
}
.section-one .maintable thead th:nth-child(4) {
  width: 100%;
}
.section-one .maintable thead th.rightth {
  justify-content: right;
}
.section-one .maintable thead .flex-column {
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.section-one .maintable thead .align-items-end {
  align-items: flex-end;
}
.section-one .maintable thead .subhead {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.section-one .maintable tbody tr {
  margin-bottom: 3px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1607843137);
}
.section-one .maintable tbody tr td {
  padding: 18px 20px;
  display: flex;
  align-items: center;
}
.section-one .maintable tbody tr td .percentage {
  padding-left: 8px;
}
.section-one .maintable tbody tr td .highlightpink {
  background: #fee2d2;
  display: flex;
  padding: 3px 1px;
  border-radius: 0 19px 19px 0;
  color: #333333;
  width: 70%;
  font-size: 13px;
  justify-content: left;
}
.section-one .maintable tbody tr td .highlightpink.w50 {
  width: 50%;
}
.section-one .maintable tbody tr td .highlightpink.w80 {
  width: 70%;
}
.section-one .maintable tbody tr td .highlightblue {
  background: #eaf2fe;
  display: flex;
  padding: 3px 1px;
  border-radius: 19px 0 0 19px;
  color: #333333;
  width: 70%;
  font-size: 13px;
  justify-content: right;
}
.section-one .maintable tbody tr td .highlightblue.w50 {
  width: 50%;
}
.section-one .maintable tbody tr td .highlightblue.w80 {
  width: 70%;
}
.section-one .maintable tbody tr td.righttd {
  justify-content: right;
}
.section-one .maintable tbody tr .green {
  color: #009933;
}
.section-one .maintable tbody tr .red {
  color: #FF1A1A;
}
.section-one .maintable .call-section {
  width: 45%;
  overflow: hidden;
}
.section-one .maintable .call-section .rowwrap:hover .action-btn {
  display: flex;
  padding: 18px 20px;
  align-items: center;
  position: absolute;
  z-index: 9;
  background-color: transparent;
  transition-property: all;
  transition-duration: 0.3s;
  transition-timing-function: ease;
}
.section-one .maintable .call-section .rowwrap:hover .action-btn .btn {
  padding: 4px 4px;
  margin-right: 6px;
  width: 22px;
  height: 22px;
  border-radius: 5px;
  background-color: transparent;
  border: 1px solid #004393;
  position: relative;
  line-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.section-one .maintable .call-section .rowwrap:hover .action-btn .btn img {
  margin-left: auto;
  margin-right: auto;
  display: block;
  width: 100%;
  height: 100%;
}
.section-one .maintable .call-section .rowwrap:hover .action-btn .btn.btn-sell {
  border: 1px solid #EE404A;
  color: #EE404A;
}
.section-one .maintable .call-section .rowwrap:hover .action-btn .btn.btn-buy {
  color: #004393;
}
.section-one .maintable .call-section .rowwrap:hover .interpretation {
  opacity: 0;
}
.section-one .maintable .call-section .rowwrap .action-btn {
  display: none;
}
.section-one .maintable .strike-price {
  width: 10%;
}
.section-one .maintable .strike-price th {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
}
.section-one .maintable .strike-price td {
  display: flex;
  justify-content: center;
  align-items: center;
}
.section-one .maintable .put-section {
  width: 45%;
  overflow: hidden;
}
.section-one .maintable .put-section .rowwrap:hover .action-btn {
  display: flex;
  align-items: center;
  position: absolute;
  padding: 18px 20px;
  right: -4px;
  z-index: 9;
  background-color: transparent;
  transition-property: all;
  transition-duration: 0.3s;
  transition-timing-function: ease;
}
.section-one .maintable .put-section .rowwrap:hover .action-btn .btn {
  padding: 4px 4px;
  margin-right: 6px;
  border-radius: 5px;
  width: 22px;
  height: 22px;
  line-height: 0;
  background-color: transparent;
  border: 1px solid #004393;
  display: flex;
  align-items: center;
  justify-content: center;
}
.section-one .maintable .put-section .rowwrap:hover .action-btn .btn img {
  margin-left: auto;
  margin-right: auto;
  display: block;
  width: 100%;
  height: 100%;
}
.section-one .maintable .put-section .rowwrap:hover .action-btn .btn.btn-sell {
  border: 1px solid #EE404A;
  color: #EE404A;
}
.section-one .maintable .put-section .rowwrap:hover .action-btn .btn.btn-buy {
  color: #004393;
  margin-left: 5px;
}
.section-one .maintable .put-section .rowwrap:hover .interpretation {
  opacity: 0;
}
.section-one .maintable .put-section .rowwrap .action-btn {
  display: none;
}
@media (max-width: 1280px) {
  .section-one .portfolio-dropdown {
    margin-top: 1.5rem;
  }
}
.section-one .portfolio-dropdown select {
  position: relative;
}
.section-one .portfolio-dropdown select#basic2 {
  background-color: transparent;
  color: #333333;
  appearance: none;
  background-image: url('caret-down-solid.svg');
  background-repeat: no-repeat;
  background-size: initial;
  background-position-x: 93%;
  background-position-y: 12px;
}
.section-one .future th {
  color: #797979;
  font-weight: 500;
  font-size: 13px;
  padding: 0 0 15px 0;
}
.section-one .future td {
  border-top: none;
  color: #333333;
  font-size: 16px;
  font-weight: 700;
  padding-left: 0px;
}
.section-one .future td span {
  padding-left: 0px;
}
.section-one h3 {
  margin: 3px 10px;
  font-size: 16px;
  line-height: 27px;
  color: #333333;
  font-weight: 700;
}
.section-one h3 img {
  padding-right: 10px;
}
.section-one .stickyheader {
  position: sticky;
  top: 83px;
  width: 100%;
  background-color: #ffffff;
  z-index: 999;
}
.section-one .headingstrike {
  display: flex;
  justify-content: space-between;
  padding: 0px 20px 0 20px;
  align-items: center;
}
.section-one .headingstrike .page-title {
  font-size: 16px;
  line-height: 22px;
  color: #333333;
  margin-bottom: 0;
  display: flex;
  align-items: center;
}
.section-one .pd20 {
  padding: 10px 20px;
}
.section-one hr {
  margin: 0px !important;
  border: 0;
  border-top: 1px solid #eeeeee;
}

.table-hover > tbody > tr:hover {
  background-color: transparent;
}

.loader-small {
  border: 2px solid #f3f3f3;
  border-radius: 50%;
  border-top: 2px solid #3498db;
  width: 20px;
  height: 20px; /* Safari */
  animation: spin 2s linear infinite;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
}

/* Safari */
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.nav-link-disabled :hover {
  border-color: transparent !important;
  cursor: default;
}

.mlauto {
  margin-left: auto;
}

.cursor-pointer {
  cursor: pointer;
}

.week-tag {
  background: #004393;
  color: #ffffff;
  border-radius: 50%;
  font-size: 9px;
  width: auto;
  height: auto;
  /* display: inline-flex; */
  position: relative;
  left: 1px;
  top: -3px;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-style: normal;
  padding: 2px 3px;
}`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 36612:
/*!**********************************************************************************!*\
  !*** ./src/app/option-chain/option-chain/option-chain.component.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container-fluid\">\r\n  <section class=\"section-one card\">\r\n    <div class=\"clearfix\" id=\"overview\">\r\n\r\n      <div class=\"stickyheader\">\r\n\r\n\r\n        <div class=\"row pd20\">\r\n          <div class=\"col-sm-5\">\r\n            <div class=\"filters-wrap\">\r\n              <div class=\"filter-group\">\r\n                <div class=\"searchbar-wrap\">\r\n                  <label>View Options Contracts for</label>\r\n                  <div class=\"searchbar\">\r\n                    <div class=\"input-area\" [class.hovered]=\"searchConfig?.isSearchOpened\">\r\n                      <img src=\"../../../assets/images/icons/search.svg\" class=\"img-fluid\" height=\"16\" width=\"16\" alt=\"Search\">\r\n                      <input type=\"text\" id=\"search\" name=\"Search for scrips\" #searchText\r\n                        [(ngModel)]=\"searchConfig.searchInput\" (input)=\"getSearchResults()\" (focus)=\"getSearchResults()\"\r\n                        (focus)=\"searchConfig.isSearchOpened = true\" [ngModelOptions]=\"{ standAlone: true }\"\r\n                        autocomplete=\"off\" aria-label=\"Search\" inputRestrict=\"alphanumeric\" (paste)=\"false\" />\r\n                      </div>\r\n\r\n                      @if (searchConfig?.isSearchOpened) {\r\n                        <div class=\"results\" [class.hovered]=\"searchConfig?.isSearchOpened\"\r\n                          >\r\n                          <div class=\"search-results\">\r\n                            <!-- <ul>\r\n                            <li *ngFor=\"let item of searchConfig?.searchResults\" (click)=\"selectScrip(item)\">\r\n                              <span class=\"symbol\">{{\r\n                                item?.SecName || item.Symbol\r\n                              }}</span>\r\n                              <span class=\"name\">{{\r\n                                item?.SecDesc || item.Symbol\r\n                              }}</span>\r\n                            </li>\r\n                            <li class=\"no-data-container\" *ngIf=\"\r\n                            !searchConfig?.searchResults ||\r\n                            !searchConfig?.searchResults?.length\r\n                          \">\r\n                              <small *ngIf=\"searchConfig.searchInput?.trim()?.length\">No Results found based on your search\r\n                              Criteria</small>\r\n                              <small *ngIf=\"!searchConfig.searchInput?.trim()?.length\">Please search Scrip with minimum 3\r\n                              Characters</small>\r\n                            </li>\r\n                          </ul> -->\r\n                          <!-- Tabs navs -->\r\n                          <ul class=\"nav nav-tabs mb-3 header-ul\" id=\"ex1\" role=\"tablist\">\r\n                            <li class=\"nav-item\" role=\"presentation\" [class.active]=\"activeTab==0\"\r\n                              (click)=\"activateFilterBySearch(0,'',true)\">\r\n                              <a class=\"nav-link\" id=\"ex1-tab-1\" data-mdb-toggle=\"tab\" role=\"tab\"\r\n                              aria-controls=\"ex1-tabs-1\" aria-selected=\"false\"> ALL</a>\r\n                            </li>\r\n                            <li class=\"nav-item\" role=\"presentation\" [class.active]=\"activeTab==1\"\r\n                              (click)=\"activateFilterBySearch(1,'EQ',true)\">\r\n                              <a class=\"nav-link\" id=\"ex1-tab-2\" data-mdb-toggle=\"tab\" role=\"tab\"\r\n                              aria-controls=\"ex1-tabs-2\" aria-selected=\"false\"> DERIVATIVES</a>\r\n                            </li>\r\n                            @if (shared?.userId && (shared?.userId!='guest')) {\r\n                              <li class=\"nav-item\" role=\"presentation\"\r\n                                [class.active]=\"activeTab==3\" (click)=\"activateFilterBySearch(3,'COM',true)\">\r\n                                <a class=\"nav-link\" id=\"ex1-tab-3\" data-mdb-toggle=\"tab\" role=\"tab\"\r\n                                aria-controls=\"ex1-tabs-3\" aria-selected=\"false\"> COMMODITY</a>\r\n                              </li>\r\n                            }\r\n                            <li class=\"nav-item\" role=\"presentation\" [class.active]=\"activeTab==2\"\r\n                              (click)=\"activateFilterBySearch(2,'CD',true)\">\r\n                              <a class=\"nav-link\" id=\"ex1-tab-4\" data-mdb-toggle=\"tab\" role=\"tab\"\r\n                              aria-controls=\"ex1-tabs-4\" aria-selected=\"false\"> CURRENCY</a>\r\n                            </li>\r\n                            @if (!(shared?.userId && (shared?.userId!='guest'))) {\r\n                              <li class=\"nav-item nav-link-disabled\" role=\"presentation\"\r\n                                >\r\n                                <a class=\"nav-link nav-link-disabled\" id=\"ex1-tab-3\" data-mdb-toggle=\"tab\" role=\"tab\"\r\n                                aria-controls=\"ex1-tabs-3\" aria-selected=\"false\"> &nbsp; </a>\r\n                              </li>\r\n                            }\r\n                          </ul>\r\n                          <ul class=\"result-ul\">\r\n                            @if (gettingSearchResults) {\r\n                              <div class=\"loader-small\">\r\n                              </div>\r\n                            }\r\n                            @if (!gettingSearchResults && searchConfig?.searchResults && searchConfig?.searchResults?.length ) {\r\n                              @for (item of searchConfig?.searchResults; track item) {\r\n                                <li (click)=\"selectScripFromSearch(item)\"\r\n                                  class=\"display-flex\">\r\n                                  <span class=\"symbol display-block\">{{\r\n                                    item?.SecName || item.Symbol\r\n                                    }}@if (item?.MWTag&&item?.MWTag=='W') {\r\n                                    <em class=\"week-tag\">W</em>\r\n                                  }</span>\r\n                                  <span class=\"name  display-block\">{{\r\n                                    item?.SecDesc || item.Symbol\r\n                                  }}</span>\r\n                                </li>\r\n                              }\r\n                            }\r\n                            @if (\r\n                              (!searchConfig?.searchResults ||\r\n                              !searchConfig?.searchResults?.length)&&!gettingSearchResults\r\n                              ) {\r\n                              <li class=\"no-data-container\">\r\n                                @if (searchConfig.searchInput?.trim()?.length) {\r\n                                  <small>No Results found based on your\r\n                                    search\r\n                                  Criteria</small>\r\n                                }\r\n                                @if (!searchConfig.searchInput?.trim()?.length) {\r\n                                  <small>Please search Scrip with minimum 3\r\n                                  Characters</small>\r\n                                }\r\n                              </li>\r\n                            }\r\n                          </ul>\r\n                          <!-- Tabs navs -->\r\n                          <!--  <ul>\r\n                        </ul> -->\r\n                      </div>\r\n                    </div>\r\n                  }\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"portfolio-dropdown\">\r\n                <form class=\"form-horizontal\" role=\"form\">\r\n                  <label>Select Expiry Date</label>\r\n                    <select id=\"basic2\" name=\"productType\" class=\"show-tick form-control\" (ngModelChange)=\"\r\n                      changeExpiry($event, optionExpiryConfig.selectedExpiry)\r\n                    \" [(ngModel)]=\"optionExpiryConfig.selectedExpiry\" aria-label=\"Product Type\">\r\n                    @for (item of optionExpiryConfig.list; track item; let i = $index) {\r\n                      <option [value]=\"item\">{{ item | value:'splitData' }}\r\n                      </option>\r\n                    }\r\n                  </select>\r\n                </form>\r\n              </div>\r\n\r\n            </div>\r\n\r\n            <!-- <div class=\"filter-group\">\r\n            <div class=\"futures\">\r\n              <div class=\"futures-price\">\r\n                <span class=\"futures-label\">Spot Price</span>\r\n                <span class=\"futures-value\">15864.7</span>\r\n              </div>\r\n            </div>\r\n          </div> -->\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"col-sm-5\">\r\n        <div class=\"table-responsive-sm\">\r\n          <table class=\"table future\">\r\n            <thead>\r\n              <tr>\r\n                <th>Underlying {{config.activeTab == 1 && config.underlyingScrip?.IsIndex? \"Index\": config.activeTab\r\n                == 1 && !config.underlyingScrip?.IsIndex? \"Stock\": \"Value\"}}</th>\r\n                <th>1M Futures</th>\r\n                <th>2M Futures</th>\r\n                <th>Spread</th>\r\n                <th>Put Call Ratio</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td data-label=\"Underlying Stock\"> <span [class.bg-up]=\"config.underlyingScrip?.PrevChange > 0\"\r\n                  [class.bg-down]=\"config.underlyingScrip?.PrevChange < 0\">{{(config.underlyingScrip?.LTP) ?\r\n                (config.underlyingScrip?.LTP| segment: config.underlyingScrip?.SegmentId) : \"0\"}}</span></td>\r\n                <td data-label=\"1M Futures\"> <span [class.bg-up]=\"config?.futureData[0] > 0\"\r\n                  [class.bg-down]=\"config?.futureData[0]?.PrevChange < 0\">{{(config?.futureData[0]?.LTP) ?\r\n                (config?.futureData[0]?.LTP | segment: config?.futureData[0]?.SegmentId) : \"0\"}}</span></td>\r\n                <td data-label=\"2M Futures\"> <span [class.bg-up]=\"config?.futureData[1] > 0\"\r\n                  [class.bg-down]=\"config?.futureData[1]?.PrevChange < 0\">{{(config?.futureData[1]?.LTP) ?\r\n                (config?.futureData[1]?.LTP | segment: config?.futureData[1]?.SegmentId) : \"0\"}}</span></td>\r\n                <td data-label=\"Spread\">{{(config?.futureData[1]?.LTP && config?.futureData[0]?.LTP) ? ((config?.futureData[1]?.LTP -\r\n                config?.futureData[0]?.LTP) | segment: config?.futureData[1]?.SegmentId) : \"0\"}}</td>\r\n                <td data-label=\"Put Call Ratio\">{{config.PCR ? (config.PCR | segment: config.underlyingScrip?.SegmentId) : \"0\"}}</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-2\">\r\n        <div class=\"strike\">\r\n          <div class=\"title\">No. of strike ATM:</div>\r\n          <div class=\"numbers\">\r\n            <ul class=\"\">\r\n              <li [class.active]=\"strike_count==10\" (click)=\"toggleDisplay(10)\">10</li>\r\n              <li [class.active]=\"strike_count==20\" (click)=\"toggleDisplay(20)\">20</li>\r\n              <li [class.active]=\"strike_count=='all'\" (click)=\"toggleDisplay('all')\">All</li>\r\n            </ul>\r\n            <button class=\"btn btn-gradient btn-refresh\" (click)=\"refresh()\" aria-label=\"Repeat\">\r\n              <!-- <img src=\"assets/images/icons/refresh.svg\" class=\"img-fluid\"> -->\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\">\r\n                <path id=\"arrows-rotate-solid\" d=\"M30.933,16a1.066,1.066,0,0,0-1.067,1.067v2.47a7.232,7.232,0,0,0-12.747,2,1.067,1.067,0,0,0,2.03.656,5.1,5.1,0,0,1,9-1.4h-1.48a1.067,1.067,0,0,0,0,2.133h4.267A1.066,1.066,0,0,0,32,21.867v-4.8A1.066,1.066,0,0,0,30.933,16Zm-.74,9.12a1.066,1.066,0,0,0-1.343.686,5.1,5.1,0,0,1-9,1.394h1.48a1.067,1.067,0,1,0,0-2.133H17.067A1.066,1.066,0,0,0,16,26.133v4.8a1.067,1.067,0,0,0,2.133,0v-2.47a7.207,7.207,0,0,0,12.717-2A1.012,1.012,0,0,0,30.193,25.12Z\" transform=\"translate(-16 -16)\" fill=\"#1B1464\"/>\r\n              </svg>\r\n            </button>\r\n          </div>\r\n\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <hr>\r\n\r\n\r\n        <div class=\"row\">\r\n          <div class=\"call-put-wrap \">\r\n            <div class=\"col-md-6\">\r\n              <h3> <!-- <img src=\"../../../assets/images/icons/calls.svg\"> -->Calls</h3>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <h3> <!-- <img src=\"../../../assets/images/icons/puts.svg\"> -->Puts</h3>\r\n            </div>\r\n          </div>\r\n          \r\n        </div>\r\n        <hr>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"maintable\">\r\n              <div class=\"call-section\">\r\n                <div class=\"table-wrap\">\r\n                  <table class=\"table table-bordered table-hover\" style=\"border-collapse: collapse;\">\r\n                    <thead>\r\n                      <tr>\r\n                        <th class=\"text-left\" style=\"width:30%;\">Interpretation</th>\r\n                        <th class=\"text-left flex-column\" style=\"width:40%;\">OI <div class=\"subhead\">\r\n                          <span class=\"pink\"></span>OI Crowd\r\n                        </div>\r\n                      </th>\r\n                      <th class=\"text-right\" style=\"width:30%;\">\r\n                        <span class=\"mlauto\">LTP</span>\r\n                      </th>\r\n                    </tr>\r\n                  </thead>\r\n                </table>\r\n              </div>\r\n            </div>\r\n            <div class=\"strike-price\">\r\n              <div class=\"table-wrap\">\r\n                <table class=\"table table-bordered table-hover\" style=\"border-collapse: collapse;\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th class=\"text-center\">Strike Price</th>\r\n                    </tr>\r\n                  </thead>\r\n                </table>\r\n              </div>\r\n            </div>\r\n            <div class=\"put-section\">\r\n              <div class=\"table-wrap\">\r\n                <table class=\"table table-bordered table-hover\" style=\"border-collapse: collapse;\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th class=\"text-left\" style=\"width:30%;\">LTP</th>\r\n                      <th class=\"text-right flex-column align-items-end\" style=\"width:40%;\">OI <div class=\"subhead\">OI Crowd <span class=\"blue\"></span>\r\n                    </div>\r\n                  </th>\r\n                  <th class=\"text-right rightth\" style=\"width:30%;\">Interpretation</th>\r\n                </tr>\r\n              </thead>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n@if (\r\n  !optionContractsData[optionExpiryConfig.selectedExpiry]?.length &&\r\n  !isServiceHit\r\n  ) {\r\n  <div class=\"no-data-section\">\r\n    No Option Chain Available\r\n  </div>\r\n}\r\n\r\n@if (\r\n  !(optionContractsData[optionExpiryConfig.selectedExpiry]?.length ||\r\n  !isServiceHit)\r\n  ) {\r\n  <div class=\"no-data-section\">\r\n    <img class=\"loader\" src=\"assets/images/loader.gif\" />\r\n  </div>\r\n}\r\n\r\n\r\n\r\n@if (optionContractsData[optionExpiryConfig.selectedExpiry]?.length&& !isServiceHit) {\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"maintable\">\r\n        <div class=\"call-section\">\r\n          <div class=\"table-wrap\">\r\n            <table class=\"table table-bordered table-hover\" style=\"border-collapse: collapse;\">\r\n              <!-- <thead>\r\n              <tr>\r\n                <th class=\"text-right\">LTP</th>\r\n                <th class=\"text-right\">Change</th>\r\n                <th class=\"text-right\">OI</th>\r\n                <th class=\"text-right\">Change in OI</th>\r\n                <th class=\"text-right\">Volume</th>\r\n                <th class=\"text-center actions\"></th>\r\n              </tr>\r\n            </thead>\r\n          </div>\r\n          <hr>\r\n            <tbody>\r\n                  <tr *ngFor=\"\r\n                      let item of optionContractsData[\r\n                        optionExpiryConfig.selectedExpiry\r\n                      ];\r\n                      let i = index\r\n                    \" [hidden]=\"i < config.upperIndex || i > config.lowerIndex\" [class.hidden]=\"\r\n                      i < config.upperIndex || i > config.lowerIndex\r\n                    \" [class.ce-itm]=\"\r\n                      item?.StrikePrice / (item.CE.PriceDivisor || 1) <=\r\n                      config.underlyingScrip?.LTP\r\n                    \" [class.pe-itm]=\"\r\n                      item?.StrikePrice / (item.CE.PriceDivisor || 1) >=\r\n                      config.underlyingScrip?.LTP\r\n                    \">\r\n                <td class=\"text-right ce-td\" [class.bg-up]=\"item.CE?.PrevChange > 0\"\r\n                  [class.bg-down]=\"item.CE?.PrevChange < 0\" (click)=\"gotoCompanyPage(item, 'CE')\">\r\n                  {{\r\n                  item?.CE.LTP\r\n                  ? (item?.CE.LTP | segment: item?.CE.SegmentId)\r\n                  : \"0\"\r\n                  }}\r\n                </td>\r\n                <td class=\"text-right ce-td\" [class.text-green]=\"item?.CE?.upDownClass == 'up'\"\r\n                  [class.text-pink]=\"item?.CE?.upDownClass == 'down'\"\r\n                  title=\"{{ item?.CE.ChangePer | value: '1.2-2' }} %\" (click)=\"gotoCompanyPage(item, 'CE')\">\r\n                  {{\r\n                  item?.CE.LTP\r\n                  ? (item?.CE.Change | segment: item?.CE.SegmentId)\r\n                  : \"0\"\r\n                  }}\r\n                </td>\r\n                <td class=\"text-right ce-td\" (click)=\"gotoCompanyPage(item, 'CE')\">\r\n                  {{ item?.CE.OI ? (item?.CE.OI | value: \"1.0-0\") : \"0\" }}\r\n                </td>\r\n                <td class=\"text-right ce-td\" [class.text-green]=\"item?.CE?.OIClass == 'up'\"\r\n                  [class.text-pink]=\"item?.CE?.OIClass == 'down'\" (click)=\"gotoCompanyPage(item, 'CE')\">\r\n                  {{\r\n                  item?.CE.OI ? (item?.CE.OIChange | value: \"1.2-2\") : \"0\"\r\n                  }}\r\n                </td>\r\n                <td class=\"text-right ce-td\" (click)=\"gotoCompanyPage(item, 'CE')\">\r\n                  {{\r\n                  item?.CE.Volume ? (item?.CE.Volume | value: \"1.0-0\") : \"0\"\r\n                  }}\r\n                </td>\r\n                <td class=\"actions\" (click)=\"isDropup(i)\">\r\n                  <div dropdown class=\"action-dropdown\" [dropup]=\"dropUp\">\r\n                    <button id=\"button-dropup\" dropdown-open class=\"btn\" tooltipTitle=\"Action\" ngx-tooltip\r\n                      tooltipPlacement=\"top\" tooltipType=\"tooltip\" aria-controls=\"dropdown-dropup\">\r\n                      <i class=\"icon-more\"></i>\r\n                    </button>\r\n                    <ul id=\"dropdown-dropup\" class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"button-dropup\">\r\n                      <li>\r\n                        <a (click)=\"tradeScrip(item, 1, 'CE')\">Buy</a>\r\n                      </li>\r\n                      <li>\r\n                        <a (click)=\"tradeScrip(item, 2, 'CE')\">Sell</a>\r\n                      </li>\r\n                    </ul>\r\n                  </div>\r\n                </td>\r\n              </tr>\r\n            </tbody> -->\r\n            <!-- <thead>\r\n            <tr>\r\n              <th style=\"width:30%;\" class=\"text-left\">Interpretation</th>\r\n              <th style=\"width:40%;\" class=\"text-left flex-column\">OI<div class=\"subhead\">\r\n                <span class=\"pink\"></span>OI Crowd</div>\r\n              </th>\r\n              <th style=\"width:30%;\" class=\"text-right\"><span  class=\"mlauto\">LTP</span></th>\r\n            </tr>\r\n          </thead> -->\r\n          <tbody>\r\n            @for (\r\n              item of optionContractsData[\r\n              optionExpiryConfig.selectedExpiry\r\n              ]; track\r\n              item; let i = $index) {\r\n<tr class=\"rowwrap \" [hidden]=\"i < config.upperIndex || i > config.lowerIndex\" [class.hidden]=\"\r\n                    i < config.upperIndex || i > config.lowerIndex\r\n                  \" [class.topcalls]=\"\r\n                    item?.StrikePrice / (item.CE.PriceDivisor || 1) <=\r\n                    config.underlyingScrip?.LTP\r\n                  \" [class.pe-itm]=\"\r\n                    item?.StrikePrice / (item.CE.PriceDivisor || 1) >=\r\n                    config.underlyingScrip?.LTP\r\n                  \">\r\n                      <td style=\"width:30%;\" class=\"interpretation green\" [ngClass]=\"{\r\n                        'green':((item?.CE?.OIClass=='up' && item?.CE?.upDownClass=='up') || (item?.CE?.OIClass=='down' && item?.CE?.upDownClass=='up')),\r\n                      \r\n                        'red':((item?.CE?.OIClass=='up' && item?.CE?.upDownClass=='down')||(item?.CE?.OIClass=='down' && item?.CE?.upDownClass=='down'))\r\n                       \r\n                      \r\n                      }\" >\r\n                  {{item?.CE?.OIClass=='up' && item?.CE?.upDownClass=='up' ?'Long\r\n                  BuildUp':(item?.CE?.OIClass=='up' && item?.CE?.upDownClass=='down' ?'Short\r\n                  BuildUp':(item?.CE?.OIClass=='down' && item?.CE?.upDownClass=='up' ?'Short\r\n                  Covering':(item?.CE?.OIClass=='down' && item?.CE?.upDownClass=='down' ?'Long Liquidation':'-')))\r\n                  }}\r\n                </td>\r\n                <td style=\"width:40%;\"   class=\"cursor-pointer\" title=\"Open company page\" (click)=\"gotoCompanyPage(item, 'CE')\">\r\n                  <span class=\"highlightpink\" [ngStyle]=\"{'width': item?.CE?.percentage+'%'}\"> {{ item?.CE.OI ?\r\n                    (item?.CE.OI | value: \"1.0-0\") : \"0\" }} <span class=\" percentage\"\r\n                    [class.text-green]=\"item?.CE?.OIClass == 'up'\"\r\n                    [class.text-pink]=\"item?.CE?.OIClass == 'down'\"> ( {{\r\n                    item?.CE.OI ? (item?.CE.OIChange | value: \"1.2-2\") : \"0\"\r\n                  }}%)</span></span>\r\n                </td>\r\n                <td style=\"width:30%;\" class=\"righttd cursor-pointer\"  title=\"Open company page\"   (click)=\"gotoCompanyPage(item, 'CE')\">\r\n                  {{\r\n                  item?.CE.LTP\r\n                  ? (item?.CE.LTP | segment: item?.CE.SegmentId)\r\n                  : \"0\"\r\n                  }}\r\n                  <!-- title=\"Change percentage : {{ item?.CE.ChangePer | value: '1.2-2' }} %\" -->\r\n                  <span class=\"percentage\" [class.text-green]=\"item?.CE?.upDownClass == 'up'\"\r\n                    [class.text-pink]=\"item?.CE?.upDownClass == 'down'\"\r\n                    >( {{\r\n                    item?.CE.LTP\r\n                    ? (item?.CE.ChangePer |  value: '1.2-2')\r\n                    : \"0\"\r\n                  }}%) </span>\r\n                  <!--  {{item?.CE?.Token}} -->\r\n                </td>\r\n                <span class=\"action-btn\">\r\n                  <button class=\"btn  btn-buy\" tooltipTitle=\"BUY\"  ngx-tooltip  tooltipPlacement=\"top\" tooltipType=\"tooltip\"\r\n                    (click)=\"tradeScrip(item, 1, 'CE')\">\r\n                    B\r\n                  </button>\r\n                  <button class=\"btn  btn-sell\" tooltipTitle=\"SELL\" ngx-tooltip tooltipPlacement=\"top\"\r\n                    tooltipType=\"tooltip\" (click)=\"tradeScrip(item, 2, 'CE')\">\r\n                    S\r\n                  </button>\r\n                  <button class=\"btn  btn-file\" (click)=\"tradeScrip2(item, 1, 'CE')\"  ngx-tooltip tooltipTitle=\"DETAIL\" placement=\"top\"\r\n                    tooltipPlacement=\"top\" tooltipType=\"tooltip\">\r\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"16\" viewBox=\"0 0 12 16\">\r\n                      <path id=\"file-lines-solid\" d=\"M8,0V4h4ZM7,4V0H1.5A1.5,1.5,0,0,0,0,1.5v13A1.5,1.5,0,0,0,1.5,16h9A1.5,1.5,0,0,0,12,14.5V5H8.028A1,1,0,0,1,7,4Zm1.5,9h-5a.5.5,0,0,1,0-1h5a.5.5,0,0,1,0,1Zm0-2h-5a.5.5,0,0,1,0-1h5a.5.5,0,0,1,0,1ZM9,8.5a.5.5,0,0,1-.5.5h-5a.5.5,0,0,1,0-1h5A.5.5,0,0,1,9,8.5Z\" fill=\"#1B1464\"/>\r\n                    </svg>\r\n                  </button>\r\n                  <button class=\" btn btn-chart\" tooltipTitle=\"CHART\" tooltipPlacement=\"top\"  ngx-tooltip  (click)=\"openChart(item.CE)\" tooltipPlacement=\"top\"\r\n                    tooltipType=\"tooltip\">\r\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"14\" viewBox=\"0 0 16 14\">\r\n                      <path id=\"chart-line-solid_3_\" data-name=\"chart-line-solid (3)\" d=\"M2,43.5a.5.5,0,0,0,.5.5H15a1,1,0,0,1,0,2H2.5A2.5,2.5,0,0,1,0,43.5V33a1,1,0,0,1,2,0Zm8.706-3.794a1,1,0,0,1-1.413,0L7.5,37.916,4.706,40.706a1,1,0,0,1-1.413-1.413l3.5-3.5a1,1,0,0,1,1.413,0L10,37.584l3.294-3.291a1,1,0,0,1,1.413,1.413Z\" transform=\"translate(0 -32)\" fill=\"#1B1464\"/>\r\n                    </svg>\r\n                  </button>\r\n                  @if ((!userAccountStatus||!userAccountStatus?.onboardStatus || userAccountStatus?.onboardStatus=='C')) {\r\n                    @if (!item?.CE?.isAdded) {\r\n                      <span dropdown>\r\n                        <button class=\"btn btn-heart\" dropdown-open tooltipTitle=\"WATCHLIST\" ngx-tooltip  tooltipPlacement=\"top\" tooltipType=\"tooltip\"\r\n                          (click)=\"openPreLoginA(item)\">\r\n                          <svg xmlns=\"http://www.w3.org/2000/svg\" id=\"watchlist\" width=\"13.024\" height=\"12\" viewBox=\"0 0 13.024 12\">\r\n                            <g id=\"watchlist-2\" data-name=\"watchlist\" transform=\"translate(-10365.285 -14323.498)\" fill=\"none\" stroke-linecap=\"round\">\r\n                              <path d=\"M10371.849,14325.936l3.23-2.437,3.229,2.438v3.973l-6.46,5.59-6.563-5.59v-3.973l3.281-2.437Z\" stroke=\"none\"/>\r\n                              <path d=\"M 10368.56640625 14325.3662109375 L 10366.78515625 14326.689453125 L 10366.78515625 14329.2158203125 L 10371.8408203125 14333.521484375 L 10376.80859375 14329.22265625 L 10376.80859375 14326.6826171875 L 10375.0791015625 14325.376953125 L 10371.85546875 14327.8095703125 L 10368.56640625 14325.3662109375 M 10368.56640625 14323.498046875 L 10371.8486328125 14325.935546875 L 10375.0791015625 14323.498046875 L 10378.30859375 14325.935546875 L 10378.30859375 14329.908203125 L 10371.8486328125 14335.498046875 L 10365.28515625 14329.908203125 L 10365.28515625 14325.935546875 L 10368.56640625 14323.498046875 Z\" stroke=\"none\" fill=\"#1B1464\"/>\r\n                            </g>\r\n                          </svg>\r\n                        </button>\r\n                        @if (shared.userId && shared.userId!='guest') {\r\n                          <ul class=\"dropdown-menu\"\r\n                            [ngStyle]=\"{top:(i>((config.upperIndex+config.lowerIndex)/2)?'initial':'100%'),bottom:(i>((config.upperIndex+config.lowerIndex)/2)?'100%':'initial')}\"\r\n                            role=\"menu\">\r\n                            <li (click)=\"addRemoveWatchList(item.CE,1)\"><a class=\"animate\">{{watchlistNames[1] &&\r\n                            watchlistNames[1]!=1?watchlistNames[1]+'(1)':'Watchlist 1'}}</a></li>\r\n                            <li (click)=\"addRemoveWatchList(item.CE,2)\"><a class=\"animate\">{{watchlistNames[2] &&\r\n                            watchlistNames[2]!=2?watchlistNames[2]+'(2)':'Watchlist 2'}}</a></li>\r\n                            <li (click)=\"addRemoveWatchList(item.CE,3)\"><a class=\"animate\">{{watchlistNames[3] &&\r\n                            watchlistNames[3]!=3?watchlistNames[3]+'(3)':'Watchlist 3'}}</a></li>\r\n                            <li (click)=\"addRemoveWatchList(item.CE,4)\"><a class=\"animate\">{{watchlistNames[4] &&\r\n                            watchlistNames[4]!=4?watchlistNames[4]+'(4)':'Watchlist 4'}}</a></li>\r\n                            <li (click)=\"addRemoveWatchList(item.CE,5)\"><a class=\"animate\">{{watchlistNames[5] &&\r\n                            watchlistNames[5]!=5?watchlistNames[5]+'(5)':'Watchlist 5'}}</a></li>\r\n                          </ul>\r\n                        }\r\n                      </span>\r\n                    }\r\n                    @if (item?.CE?.isAdded) {\r\n                      <button class=\"btn btn-heart\"  ngx-tooltip tooltipTitle=\"WATCHLIST\"  tooltipPlacement=\"top\"\r\n                        tooltipType=\"tooltip\" (click)=\"addRemoveWatchList(item.CE)\">\r\n                        <!-- <img src=\"assets/images/icons/heart-solid.svg\" /> -->\r\n                        <svg _ngcontent-dfk-c25=\"\" class=\"ico-set\" height=\"17.244\" id=\"watchlist\" viewBox=\"0 0 18.716 17.244\" width=\"18.716\" xmlns=\"http://www.w3.org/2000/svg\"><g _ngcontent-dfk-c25=\"\" data-name=\"watchlist\" fill=\"#1B1464\" id=\"watchlist-2\" stroke-linecap=\"round\" transform=\"translate(-10365.284 -14323.498)\"><path _ngcontent-dfk-c25=\"\" d=\"M10374.717,14327l4.643-3.5,4.641,3.5v5.71l-9.283,8.032-9.433-8.032V14327l4.716-3.5Z\" stroke=\"none\"></path><path _ngcontent-dfk-c25=\"\" d=\"M 10370 14325.3662109375 L 10366.7841796875 14327.7548828125 L 10366.7841796875 14332.017578125 L 10374.708984375 14338.765625 L 10382.5 14332.0244140625 L 10382.5 14327.7470703125 L 10379.359375 14325.376953125 L 10374.7236328125 14328.873046875 L 10370 14325.3662109375 M 10370 14323.498046875 L 10374.716796875 14327 L 10379.359375 14323.498046875 L 10384 14327 L 10384 14332.7099609375 L 10374.716796875 14340.7421875 L 10365.2841796875 14332.7099609375 L 10365.2841796875 14327 L 10370 14323.498046875 Z\" fill=\"#1B1464\" stroke=\"none\"></path></g></svg>\r\n                      </button>\r\n                    }\r\n                  }\r\n                </span>\r\n              </tr>\r\n            }\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n    <div class=\"strike-price\">\r\n      <div class=\"table-wrap\">\r\n        <table class=\"table table-bordered table-hover\" style=\"border-collapse: collapse;\"\r\n          [hidden]=\"optionContractsData[optionExpiryConfig.selectedExpiry]?.length < 1 && isServiceHit\">\r\n          <!-- <thead>\r\n          <tr>\r\n            <th class=\"text-center\">Strike Price</th>\r\n          </tr>\r\n        </thead> -->\r\n        <tbody>\r\n          @for (\r\n            item of optionContractsData[\r\n            optionExpiryConfig.selectedExpiry\r\n            ]; track\r\n            item; let i = $index) {\r\n            <tr [hidden]=\"i < config.upperIndex || i > config.lowerIndex\"\r\n                      [class.hidden]=\"i < config.upperIndex || i > config.lowerIndex\" [class.ce-itm]=\"\r\n                item?.StrikePrice / (item.CE.PriceDivisor || 1) <=\r\n                config.underlyingScrip?.LTP\r\n              \" [class.pe-itm]=\"\r\n                item?.StrikePrice / (item.CE.PriceDivisor || 1) >=\r\n                config.underlyingScrip?.LTP\r\n              \">\r\n              <td class=\"text-center\">\r\n                {{\r\n                item?.StrikePrice / (item.CE.PriceDivisor || 1)\r\n                | segment: item?.CE.SegmentId\r\n                }}\r\n              </td>\r\n            </tr>\r\n          }\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n  <div class=\"put-section\">\r\n    <div class=\"table-wrap\">\r\n      <table class=\"table table-bordered table-hover\" style=\"border-collapse: collapse;\">\r\n        <!-- <thead>\r\n        <tr>\r\n          <th style=\"width:30%;\" class=\"text-left\">LTP</th>\r\n          <th style=\"width:40%;\" class=\"text-right flex-column align-items-end\">OI\r\n            <div class=\"subhead\">OI Crowd<span class=\"blue\"></span></div>\r\n          </th>\r\n          <th style=\"width:30%;\" class=\"text-right rightth\">Interpretation</th>\r\n        </tr>\r\n      </thead> -->\r\n      <tbody>\r\n        @for (\r\n          item of optionContractsData[\r\n          optionExpiryConfig.selectedExpiry\r\n          ]; track\r\n          item; let i = $index) {\r\n<tr class=\"rowwrap \" [hidden]=\"i < config.upperIndex || i > config.lowerIndex\" [class.hidden]=\"\r\n                    i < config.upperIndex || i > config.lowerIndex\r\n                  \" [class.ce-itm]=\"\r\n                    item?.StrikePrice / (item.CE.PriceDivisor || 1) <=\r\n                    config.underlyingScrip?.LTP\r\n                  \" [class.topcalls]=\"\r\n                    item?.StrikePrice / (item.CE.PriceDivisor || 1) >=\r\n                    config.underlyingScrip?.LTP\r\n                  \">\r\n            <td style=\"width:30%;\" class=\"cursor-pointer\"  title=\"Open company page\"  (click)=\"gotoCompanyPage(item, 'PE')\">\r\n              {{\r\n              item?.PE.LTP\r\n              ? (item?.PE.LTP | segment: item?.PE.SegmentId)\r\n              : \"0\"\r\n              }}\r\n              <!-- title=\"Change percentage : {{ item?.PE.ChangePer | value: '1.2-2' }} %\" -->\r\n              <span class=\"percentage\" [class.text-green]=\"item?.PE?.upDownClass == 'up'\"\r\n                [class.text-pink]=\"item?.PE?.upDownClass == 'down'\"\r\n                >({{\r\n                item?.PE.LTP\r\n                ? (item?.PE.ChangePer  | value: '1.2-2')\r\n                : \"0\"\r\n              }}%)</span>\r\n            </td>\r\n            <td style=\"width:40%;\" class=\"righttd cursor-pointer\"  title=\"Open company page\" (click)=\"gotoCompanyPage(item, 'PE')\">\r\n              <span class=\"highlightblue \" [ngStyle]=\"{'width': item?.PE?.percentage+'%'}\"> {{ item?.PE.OI ?\r\n                (item?.PE.OI | value: \"1.0-0\") : \"0\" }} <span class=\" percentage\"\r\n                [class.text-green]=\"item?.PE?.OIClass == 'up'\"\r\n                [class.text-pink]=\"item?.PE?.OIClass == 'down'\" >( {{\r\n                item?.PE.OI ? (item?.PE.OIChange | value: \"1.2-2\") : \"0\"\r\n              }}%)</span></span>\r\n            </td>\r\n            <td style=\"width:30%;\" class=\"interpretation righttd green\"\r\n                      [ngClass]=\"{\r\n                        'green':((item?.PE?.OIClass=='up' && item?.PE?.upDownClass=='up') || (item?.PE?.OIClass=='down' && item?.PE?.upDownClass=='up')),\r\n                      \r\n                        'red':((item?.PE?.OIClass=='up' && item?.PE?.upDownClass=='down')||(item?.PE?.OIClass=='down' && item?.PE?.upDownClass=='down'))\r\n                       \r\n                      }\"\r\n              >\r\n              {{item?.PE?.OIClass=='up' && item?.PE?.upDownClass=='up' ?\r\n              'Long BuildUp'\r\n              :(item?.PE?.OIClass=='up' && item?.PE?.upDownClass=='down' ?\r\n              'Short BuildUp':\r\n              (item?.PE?.OIClass=='down' && item?.PE?.upDownClass=='up' ?\r\n              'Short Covering':\r\n              (item?.PE?.OIClass=='down' && item?.PE?.upDownClass=='down' ?\r\n              'Long Liquidation':'-')))\r\n              }}\r\n              <!--  {{item?.PE?.Token}} -->\r\n            </td>\r\n            <span class=\"action-btn\">\r\n              <button class=\"btn  btn-buy\" tooltipPlacement=\"top\"  tooltipTitle=\"BUY\" ngx-tooltip  tooltipType=\"tooltip\"\r\n                (click)=\"tradeScrip(item, 1, 'PE')\">\r\n                B\r\n              </button>\r\n              <button class=\"btn  btn-sell\" tooltipTitle=\"SELL\" ngx-tooltip tooltipPlacement=\"top\"\r\n                tooltipType=\"tooltip\" (click)=\"tradeScrip(item, 2, 'PE')\">\r\n                S\r\n              </button> <!-- (click)=\"getInfo(item.PE)\" -->\r\n              <button class=\"btn  btn-file\"  (click)=\"tradeScrip2(item, 2, 'PE')\" ngx-tooltip  tooltipTitle=\"DETAIL\" placement=\"top\"\r\n                tooltipPlacement=\"top\" tooltipType=\"tooltip\" >\r\n                <!-- <img src=\"assets/images/icons/file-lines-solid.svg\" /> -->\r\n                <svg _ngcontent-ngq-c12=\"\" height=\"16\" viewBox=\"0 0 12 16\" width=\"12\" xmlns=\"http://www.w3.org/2000/svg\"><path _ngcontent-ngq-c12=\"\" d=\"M8,0V4h4ZM7,4V0H1.5A1.5,1.5,0,0,0,0,1.5v13A1.5,1.5,0,0,0,1.5,16h9A1.5,1.5,0,0,0,12,14.5V5H8.028A1,1,0,0,1,7,4Zm1.5,9h-5a.5.5,0,0,1,0-1h5a.5.5,0,0,1,0,1Zm0-2h-5a.5.5,0,0,1,0-1h5a.5.5,0,0,1,0,1ZM9,8.5a.5.5,0,0,1-.5.5h-5a.5.5,0,0,1,0-1h5A.5.5,0,0,1,9,8.5Z\" fill=\"#1B1464\" id=\"file-lines-solid\"></path></svg>\r\n              </button>\r\n              <button class=\" btn btn-chart\" (click)=\"openChart(item.PE)\"  tooltipTitle=\"CHART\" ngx-tooltip tooltipPlacement=\"top\"\r\n                tooltipType=\"tooltip\">\r\n                <!-- <img src=\"assets/images/icons/chart-line-solid.svg\" /> -->\r\n                <svg _ngcontent-ngq-c12=\"\" height=\"14\" viewBox=\"0 0 16 14\" width=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><path _ngcontent-ngq-c12=\"\" d=\"M2,43.5a.5.5,0,0,0,.5.5H15a1,1,0,0,1,0,2H2.5A2.5,2.5,0,0,1,0,43.5V33a1,1,0,0,1,2,0Zm8.706-3.794a1,1,0,0,1-1.413,0L7.5,37.916,4.706,40.706a1,1,0,0,1-1.413-1.413l3.5-3.5a1,1,0,0,1,1.413,0L10,37.584l3.294-3.291a1,1,0,0,1,1.413,1.413Z\" data-name=\"chart-line-solid (3)\" fill=\"#1B1464\" id=\"chart-line-solid_3_\" transform=\"translate(0 -32)\"></path></svg>\r\n              </button>\r\n              @if ((!userAccountStatus||!userAccountStatus?.onboardStatus || userAccountStatus?.onboardStatus=='C')) {\r\n                @if (!item?.PE?.isAdded) {\r\n                  <span dropdown>\r\n                    <button class=\"btn btn-heart\" dropdown-open tooltipPlacement=\"top\"  tooltipTitle=\"WATCHLIST\" ngx-tooltip tooltipType=\"tooltip\"\r\n                      (click)=\"openPreLoginA(item)\">\r\n                      <!-- <img src=\"assets/images/icons/heart-stroke.svg\" /> -->\r\n                      <svg _ngcontent-ngq-c12=\"\" height=\"12\" id=\"watchlist\" viewBox=\"0 0 13.024 12\" width=\"13.024\" xmlns=\"http://www.w3.org/2000/svg\"><g _ngcontent-ngq-c12=\"\" data-name=\"watchlist\" fill=\"none\" id=\"watchlist-2\" stroke-linecap=\"round\" transform=\"translate(-10365.285 -14323.498)\"><path _ngcontent-ngq-c12=\"\" d=\"M10371.849,14325.936l3.23-2.437,3.229,2.438v3.973l-6.46,5.59-6.563-5.59v-3.973l3.281-2.437Z\" stroke=\"none\"></path><path _ngcontent-ngq-c12=\"\" d=\"M 10368.56640625 14325.3662109375 L 10366.78515625 14326.689453125 L 10366.78515625 14329.2158203125 L 10371.8408203125 14333.521484375 L 10376.80859375 14329.22265625 L 10376.80859375 14326.6826171875 L 10375.0791015625 14325.376953125 L 10371.85546875 14327.8095703125 L 10368.56640625 14325.3662109375 M 10368.56640625 14323.498046875 L 10371.8486328125 14325.935546875 L 10375.0791015625 14323.498046875 L 10378.30859375 14325.935546875 L 10378.30859375 14329.908203125 L 10371.8486328125 14335.498046875 L 10365.28515625 14329.908203125 L 10365.28515625 14325.935546875 L 10368.56640625 14323.498046875 Z\" fill=\"#1B1464\" stroke=\"none\"></path></g></svg>\r\n                    </button>\r\n                    @if (shared.userId && shared.userId!='guest') {\r\n                      <ul class=\"dropdown-menu\" role=\"menu\"\r\n                        [ngStyle]=\"{top:(i>((config.upperIndex+config.lowerIndex)/2)?'initial':'100%'),bottom:(i>((config.upperIndex+config.lowerIndex)/2)?'100%':'initial')}\"\r\n                        >\r\n                        <li (click)=\"addRemoveWatchList(item.PE,1)\"><a class=\"animate\">{{watchlistNames&&watchlistNames[1] &&\r\n                        watchlistNames[1]!=1?watchlistNames[1]+'(1)':'Watchlist 1'}}</a></li>\r\n                        <li (click)=\"addRemoveWatchList(item.PE,2)\"><a class=\"animate\">{{watchlistNames&&watchlistNames[2] &&\r\n                        watchlistNames[2]!=2?watchlistNames[2]+'(2)':'Watchlist 2'}}</a></li>\r\n                        <li (click)=\"addRemoveWatchList(item.PE,3)\"><a class=\"animate\">{{watchlistNames&&watchlistNames[3] &&\r\n                        watchlistNames[3]!=3?watchlistNames[3]+'(3)':'Watchlist 3'}}</a></li>\r\n                        <li (click)=\"addRemoveWatchList(item.PE,4)\"><a class=\"animate\">{{watchlistNames&&watchlistNames[4] &&\r\n                        watchlistNames[4]!=4?watchlistNames[4]+'(4)':'Watchlist 4'}}</a></li>\r\n                        <li (click)=\"addRemoveWatchList(item.PE,5)\"><a class=\"animate\">{{watchlistNames&&watchlistNames[5] &&\r\n                        watchlistNames[5]!=5?watchlistNames[5]+'(5)':'Watchlist 5'}}</a></li>\r\n                      </ul>\r\n                    }\r\n                  </span>\r\n                }\r\n                @if (item?.PE?.isAdded) {\r\n                  <button class=\"btn btn-heart\" tooltipPlacement=\"top\" ngx-tooltip   tooltipTitle=\"WATCHLIST\"\r\n                    tooltipType=\"tooltip\" (click)=\"addRemoveWatchList(item.PE)\">\r\n                    <img src=\"assets/images/icons/heart-solid.svg\" />\r\n                  </button>\r\n                }\r\n              }\r\n            </span>\r\n          </tr>\r\n        }\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n}\r\n\r\n<!-- <div class=\"text-center mt-20\" *ngIf=\"optionContractsData[optionExpiryConfig.selectedExpiry]?.length\">\r\n        <button class=\"btn btn-gradient\" (click)=\"toggleDisplay()\" *ngIf=\"\r\n            config.isShowAll ||\r\n            (!config.isShowAll &&\r\n              config.lowerIndex <\r\n                optionContractsData[optionExpiryConfig.selectedExpiry]?.length -\r\n                  1)\r\n          \">\r\n  {{ config.isShowAll ? \"Show Less\" : \"Show More\" }}\r\n</button>\r\n</div> -->\r\n\r\n<!-- <div class=\"table-custom \">\r\n<table class=\"table table-bordered table-hover\" style=\"border-collapse:collapse;\"\r\n  *ngIf=\"optionContractsData[optionExpiryConfig.selectedExpiry]?.length && !isServiceHit\">\r\n  <thead>\r\n    <tr>\r\n      <th colspan=\"10\" class=\"text-center\">CALLS</th>\r\n      <th></th>\r\n      <th colspan=\"10\" class=\"text-center\">PUTS</th>\r\n    </tr>\r\n    <tr>\r\n      <th class=\"text-center\">Actions</th>\r\n      <th class=\"text-right\">OI</th>\r\n      <th class=\"text-right\">Change in OI(%)</th>\r\n      <th class=\"text-right\">Bid Qty</th>\r\n      <th class=\"text-right\">Bid Price</th>\r\n      <th class=\"text-right\">Ask Price</th>\r\n      <th class=\"text-right\">Ask Qty</th>\r\n      <th class=\"text-right\">Volume</th>\r\n      <th class=\"text-right\">LTP</th>\r\n      <th class=\"text-right\">Change in LTP</th>\r\n      <th class=\"text-center strike-price\">Strike Price</th>\r\n      <th class=\"text-right\">Change in LTP</th>\r\n      <th class=\"text-right\">LTP</th>\r\n      <th class=\"text-right\">Volume</th>\r\n      <th class=\"text-right\">Bid Qty</th>\r\n      <th class=\"text-right\">Bid Price</th>\r\n      <th class=\"text-right\">Ask Price</th>\r\n      <th class=\"text-right\">Ask Qty</th>\r\n      <th class=\"text-right\">Change in OI(%)</th>\r\n      <th class=\"text-right\">OI</th>\r\n      <th class=\"text-center\">Actions</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let item of optionContractsData[optionExpiryConfig.selectedExpiry]; let i=index\"\r\n      [hidden]=\"(i<config.upperIndex || i>config.lowerIndex)\"\r\n      [class.ce-itm]=\"(item?.StrikePrice/(item.CE.PriceDivisor||1))<=config.underlyingScrip.LTP\"\r\n      [class.pe-itm]=\"(item?.StrikePrice/(item.CE.PriceDivisor||1))>=config.underlyingScrip.LTP\">\r\n      <td>\r\n        <div dropdown class=\"action-dropdown \">\r\n          <button dropdown-open class=\"btn-outline btn border-less\" aria-label=\"More Details\">\r\n            <i class=\"icon-more\"></i>\r\n          </button>\r\n          <ul class=\"dropdown-menu\" role=\"menu\">\r\n            <li>\r\n              <a (click)=\"gotoCompanyPage(item,'CE')\">Details</a>\r\n            </li>\r\n            <li>\r\n              <a (click)=\"tradeScrip(item,1,'CE')\">Buy</a>\r\n            </li>\r\n            <li>\r\n              <a (click)=\"tradeScrip(item,2,'CE')\">Sell</a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </td>\r\n      <td class=\"text-right ce-td\">{{item?.CE.OI?(item?.CE.OI|value:'1.0-0'):'-'}}</td>\r\n      <td class=\"text-right ce-td\" [class.text-green]=\"item?.CE?.OIClass=='up'\"\r\n        [class.text-pink]=\"item?.CE?.OIClass=='down'\">\r\n      {{item?.CE.OI? (item?.CE.OIChange|value:'1.2-2'):'-'}}</td>\r\n      <td class=\"text-right ce-td\">{{item?.CE.BBQ?(item?.CE.BBQ|value:'1.0-0'):'-'}}</td>\r\n      <td class=\"text-right ce-td\">{{item?.CE.BBP?(item?.CE.BBP|segment:item?.CE.SegmentId):'-'}}</td>\r\n      <td class=\"text-right ce-td\">{{item?.CE.BSP?(item?.CE.BSP|segment:item?.CE.SegmentId):'-'}}</td>\r\n      <td class=\"text-right ce-td\">{{item?.CE.BSQ?(item?.CE.BSQ|value:'1.0-0'):'-'}}</td>\r\n      <td class=\"text-right ce-td\">{{item?.CE.Volume?(item?.CE.Volume|value:'1.0-0'):'-'}}</td>\r\n      <td class=\"text-right ce-td\" [class.bg-up]=\"item.CE.PrevChange>0\" [class.bg-down]=\"item.CE.PrevChange<0\">\r\n      {{item?.CE.LTP?(item?.CE.LTP|segment:item?.CE.SegmentId):'-'}}</td>\r\n      <td class=\"text-right ce-td\" [class.text-green]=\"item?.CE?.upDownClass=='up'\"\r\n        [class.text-pink]=\"item?.CE?.upDownClass=='down'\" title=\"{{item?.CE.ChangePer|value:'1.2-2'}} %\">\r\n      {{item?.CE.LTP?(item?.CE.Change|segment:item?.CE.SegmentId):'-'}}</td>\r\n      <th class=\"text-center strike-price\">\r\n      {{(item?.StrikePrice/(item.CE.PriceDivisor||1))|segment:item?.CE.SegmentId}}</th>\r\n      <td class=\"text-right pe-td\" [class.text-green]=\"item?.PE?.upDownClass=='up'\"\r\n        [class.text-pink]=\"item?.PE?.upDownClass=='down'\" title=\"{{item?.PE.ChangePer|value:'1.2-2'}} %\">\r\n      {{item?.PE.LTP?(item?.PE.Change|segment:item?.PE.SegmentId):'-'}}</td>\r\n      <td class=\"text-right pe-td\" [class.bg-up]=\"item.PE.PrevChange>0\" [class.bg-down]=\"item.PE.PrevChange<0\">\r\n      {{item?.PE.LTP?(item?.PE.LTP|segment:item?.PE.SegmentId):'-'}}</td>\r\n      <td class=\"text-right pe-td\">{{item?.PE.Volume?(item?.PE.Volume|value:'1.0-0'):'-'}}</td>\r\n      <td class=\"text-right pe-td\">{{item?.PE.BBQ?(item?.PE.BBQ|value:'1.0-0'):'-'}}</td>\r\n      <td class=\"text-right pe-td\">{{item?.PE.BBP?(item?.PE.BBP|segment:item?.PE.SegmentId):'-'}}</td>\r\n      <td class=\"text-right pe-td\">{{item?.PE.BSP?(item?.PE.BSP|segment:item?.PE.SegmentId):'-'}}</td>\r\n      <td class=\"text-right pe-td\">{{item?.PE.BSQ?(item?.PE.BSQ|value:'1.0-0'):'-'}}</td>\r\n      <td class=\"text-right pe-td\" [class.text-green]=\"item?.PE?.OIClass=='up'\"\r\n        [class.text-pink]=\"item?.PE?.OIClass=='down'\">\r\n      {{item?.PE.OI?(item?.PE.OIChange|value:'1.2-2'):'-'}}</td>\r\n      <td class=\"text-right pe-td\">{{item?.PE.OI?(item?.PE.OI|value:'1.0-0'):'-'}}</td>\r\n      <td>\r\n        <div dropdown class=\"action-dropdown right-dropdown\">\r\n          <button dropdown-open class=\"btn-outline btn border-less\" aria-label=\"More Details\">\r\n            <i class=\"icon-more\"></i>\r\n          </button>\r\n          <ul class=\"dropdown-menu\" role=\"menu\">\r\n            <li>\r\n              <a (click)=\"gotoCompanyPage(item,'CE')\">Details</a>\r\n            </li>\r\n            <li>\r\n              <a (click)=\"tradeScrip(item,1,'PE')\">Buy</a>\r\n            </li>\r\n            <li>\r\n              <a (click)=\"tradeScrip(item,2,'PE')\">Sell</a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n\r\n</div> -->\r\n</div>\r\n</section>\r\n</div>\r\n\r\n\r\n<!-- <div\r\n\r\n      *ngIf=\"\r\n        optionExpiryConfig?.list?.length &&\r\n        optionContractsData[optionExpiryConfig.selectedExpiry].length\r\n      \"\r\n>\r\nUnderlying\r\n{{\r\nconfig.activeTab == 1 && config.underlyingScrip.IsIndex\r\n? \"Index\"\r\n: config.activeTab == 1 && !config.underlyingScrip.IsIndex\r\n? \"Stock\"\r\n: \"Value\"\r\n}}:\r\n<strong>\r\n  {{\r\n  config.underlyingScrip.Symbol || config.underlyingScrip.SecName\r\n  }}\r\n  <span\r\n    [class.bg-up]=\"config.underlyingScrip.PrevChange > 0\"\r\n    [class.bg-down]=\"config.underlyingScrip.PrevChange < 0\"\r\n    >{{\r\n    config.underlyingScrip.LTP\r\n    | segment: config.underlyingScrip.SegmentId\r\n    }}</span\r\n    >\r\n    <span [class.text-green]=\"config.underlyingScrip.upDownClass == 'up'\"\r\n      [class.text-pink]=\"config.underlyingScrip.upDownClass == 'down'\"\r\n      > {{config.underlyingScrip.Change | segment: config.underlyingScrip.SegmentId}}\r\n    ({{config.underlyingScrip.ChangePer | value:'1.2-2'}} %)</span></strong\r\n    >\r\n\r\n    As on {{ config.LUT | date: \"dd-MMM-yyyy HH:mm:ss\" }}\r\n    <span class=\"summery\">\r\n      <span><small>1M Future : <strong>{{(config?.futureData[0]?.LTP) ? (config?.futureData[0]?.LTP | segment: config?.futureData[0]?.SegmentId) : \"0\"}}</strong></small></span>&nbsp;&nbsp;\r\n      <span><small>2M Future : <strong>{{(config?.futureData[1]?.LTP) ? (config?.futureData[1]?.LTP | segment: config?.futureData[1]?.SegmentId) : \"0\"}}</strong></small></span>&nbsp;&nbsp;\r\n      <span><small>Rollover Spread : <strong>{{(config?.futureData[1]?.LTP && config?.futureData[0]?.LTP) ? ((config?.futureData[1]?.LTP - config?.futureData[0]?.LTP) | segment: config?.futureData[1]?.SegmentId) : \"0\"}}</strong></small></span>\r\n    </span>\r\n  </div> -->\r\n\r\n  <!-- <div class=\"row\">\r\n  <div class=\"option-chain-table\"\r\n    [hidden]=\"optionContractsData[optionExpiryConfig.selectedExpiry]?.length < 1 && isServiceHit\">\r\n\r\n    <div class=\"call-section\">\r\n\r\n      <div class=\"table-wrap\">\r\n        <table class=\"table table-bordered table-hover\" style=\"border-collapse: collapse;\"\r\n          [hidden]=\"optionContractsData[optionExpiryConfig.selectedExpiry]?.length < 1 && isServiceHit\">\r\n          <div class=\"fixed-sec\">\r\n            <div class=\"section-title\">\r\n              <h3 class=\"text-center\">CALLS</h3>\r\n            </div>\r\n            <thead>\r\n              <tr>\r\n                <th class=\"text-right\">LTP</th>\r\n                <th class=\"text-right\">Change</th>\r\n                <th class=\"text-right\">OI</th>\r\n                <th class=\"text-right\">Change in OI</th>\r\n                <th class=\"text-right\">Volume</th>\r\n                <th class=\"text-center actions\"></th>\r\n              </tr>\r\n            </thead>\r\n          </div>\r\n          <hr>\r\n            <tbody>\r\n              <tr *ngFor=\"\r\n                  let item of optionContractsData[\r\n                    optionExpiryConfig.selectedExpiry\r\n                  ];\r\n                  let i = index\r\n                \" [hidden]=\"i < config.upperIndex || i > config.lowerIndex\" [class.hidden]=\"\r\n                  i < config.upperIndex || i > config.lowerIndex\r\n                \" [class.ce-itm]=\"\r\n                  item?.StrikePrice / (item.CE.PriceDivisor || 1) <=\r\n                  config.underlyingScrip?.LTP\r\n                \" [class.pe-itm]=\"\r\n                  item?.StrikePrice / (item.CE.PriceDivisor || 1) >=\r\n                  config.underlyingScrip?.LTP\r\n                \">\r\n                <td class=\"text-right ce-td\" [class.bg-up]=\"item.CE?.PrevChange > 0\"\r\n                  [class.bg-down]=\"item.CE?.PrevChange < 0\" (click)=\"gotoCompanyPage(item, 'CE')\">\r\n                  {{\r\n                  item?.CE.LTP\r\n                  ? (item?.CE.LTP | segment: item?.CE.SegmentId)\r\n                  : \"0\"\r\n                  }}\r\n                </td>\r\n                <td class=\"text-right ce-td\" [class.text-green]=\"item?.CE?.upDownClass == 'up'\"\r\n                  [class.text-pink]=\"item?.CE?.upDownClass == 'down'\"\r\n                  title=\"{{ item?.CE.ChangePer | value: '1.2-2' }} %\" (click)=\"gotoCompanyPage(item, 'CE')\">\r\n                  {{\r\n                  item?.CE.LTP\r\n                  ? (item?.CE.Change | segment: item?.CE.SegmentId)\r\n                  : \"0\"\r\n                  }}\r\n                </td>\r\n                <td class=\"text-right ce-td\" (click)=\"gotoCompanyPage(item, 'CE')\">\r\n                  {{ item?.CE.OI ? (item?.CE.OI | value: \"1.0-0\") : \"0\" }}\r\n                </td>\r\n                <td class=\"text-right ce-td\" [class.text-green]=\"item?.CE?.OIClass == 'up'\"\r\n                  [class.text-pink]=\"item?.CE?.OIClass == 'down'\" (click)=\"gotoCompanyPage(item, 'CE')\">\r\n                  {{\r\n                  item?.CE.OI ? (item?.CE.OIChange | value: \"1.2-2\") : \"0\"\r\n                  }}\r\n                </td>\r\n                <td class=\"text-right ce-td\" (click)=\"gotoCompanyPage(item, 'CE')\">\r\n                  {{\r\n                  item?.CE.Volume ? (item?.CE.Volume | value: \"1.0-0\") : \"0\"\r\n                  }}\r\n                </td>\r\n                <td class=\"actions\" (click)=\"isDropup(i)\">\r\n                  <div dropdown class=\"action-dropdown\" [dropup]=\"dropUp\">\r\n                    <button id=\"button-dropup\" dropdown-open class=\"btn\" tooltipTitle=\"Action\" ngx-tooltip\r\n                      tooltipPlacement=\"top\" tooltipType=\"tooltip\" aria-controls=\"dropdown-dropup\">\r\n                      <i class=\"icon-more\"></i>\r\n                    </button>\r\n                    <ul id=\"dropdown-dropup\" class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"button-dropup\">\r\n                      <li>\r\n                        <a (click)=\"tradeScrip(item, 1, 'CE')\">Buy</a>\r\n                      </li>\r\n                      <li>\r\n                        <a (click)=\"tradeScrip(item, 2, 'CE')\">Sell</a>\r\n                      </li>\r\n                    </ul>\r\n                  </div>\r\n                </td>\r\n\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n      <div class=\"strike-price\">\r\n        <div class=\"table-wrap\">\r\n          <table class=\"table table-bordered table-hover\" style=\"border-collapse: collapse;\"\r\n            [hidden]=\"optionContractsData[optionExpiryConfig.selectedExpiry]?.length < 1 && isServiceHit\">\r\n            <div class=\"fixed-sec\">\r\n\r\n\r\n\r\n\r\n\r\n              <thead>\r\n                <tr>\r\n                  <th class=\"text-center\">Strike Price</th>\r\n\r\n                </tr>\r\n              </thead>\r\n            </div>\r\n            <tbody>\r\n              <tr *ngFor=\"\r\n                let item of optionContractsData[\r\n                  optionExpiryConfig.selectedExpiry\r\n                ];\r\n                let i = index\r\n              \" [hidden]=\"i < config.upperIndex || i > config.lowerIndex\"\r\n                [class.hidden]=\"i < config.upperIndex || i > config.lowerIndex\" [class.ce-itm]=\"\r\n                item?.StrikePrice / (item.CE.PriceDivisor || 1) <=\r\n                config.underlyingScrip?.LTP\r\n              \" [class.pe-itm]=\"\r\n                item?.StrikePrice / (item.CE.PriceDivisor || 1) >=\r\n                config.underlyingScrip?.LTP\r\n              \">\r\n                <td class=\"text-center\">\r\n                  {{\r\n                  item?.StrikePrice / (item.CE.PriceDivisor || 1)\r\n                  | segment: item?.CE.SegmentId\r\n                  }}\r\n                </td>\r\n\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n      <div class=\"put-section\">\r\n\r\n        <div class=\"table-wrap\">\r\n          <table class=\"table table-bordered table-hover\" style=\"border-collapse: collapse;\"\r\n            [hidden]=\"optionContractsData[optionExpiryConfig.selectedExpiry]?.length < 1 && isServiceHit\">\r\n            <div class=\"fixed-sec\">\r\n              <div class=\"section-title\">\r\n                <h3 class=\"text-center\">PUTS</h3>\r\n              </div>\r\n              <thead>\r\n                <tr>\r\n\r\n                  <th class=\"text-right\">LTP</th>\r\n                  <th class=\"text-right\">Change</th>\r\n                  <th class=\"text-right\">OI</th>\r\n                  <th class=\"text-right\">Change in OI</th>\r\n                  <th class=\"text-right\">Volume</th>\r\n                  <th class=\"text-center actions\"></th>\r\n                </tr>\r\n              </thead>\r\n            </div>\r\n            <tbody>\r\n              <tr *ngFor=\"\r\n                  let item of optionContractsData[\r\n                    optionExpiryConfig.selectedExpiry\r\n                  ];\r\n                  let i = index\r\n                \" [hidden]=\"i < config.upperIndex || i > config.lowerIndex\" [class.hidden]=\"\r\n                  i < config.upperIndex || i > config.lowerIndex\r\n                \" [class.ce-itm]=\"\r\n                  item?.StrikePrice / (item.CE.PriceDivisor || 1) <=\r\n                  config.underlyingScrip?.LTP\r\n                \" [class.pe-itm]=\"\r\n                  item?.StrikePrice / (item.CE.PriceDivisor || 1) >=\r\n                  config.underlyingScrip?.LTP\r\n                \">\r\n                <td class=\"text-right pe-td\" [class.bg-up]=\"item.PE?.PrevChange > 0\"\r\n                  [class.bg-down]=\"item.PE?.PrevChange < 0\" (click)=\"gotoCompanyPage(item, 'PE')\">\r\n                  {{\r\n                  item?.PE.LTP\r\n                  ? (item?.PE.LTP | segment: item?.PE.SegmentId)\r\n                  : \"0\"\r\n                  }}\r\n                </td>\r\n                <td class=\"text-right pe-td\" [class.text-green]=\"item?.PE?.upDownClass == 'up'\"\r\n                  [class.text-pink]=\"item?.PE?.upDownClass == 'down'\"\r\n                  title=\"{{ item?.PE.ChangePer | value: '1.2-2' }} %\" (click)=\"gotoCompanyPage(item, 'PE')\">\r\n                  {{\r\n                  item?.PE.LTP\r\n                  ? (item?.PE.Change | segment: item?.PE.SegmentId)\r\n                  : \"0\"\r\n                  }}\r\n                </td>\r\n                <td class=\"text-right pe-td\" (click)=\"gotoCompanyPage(item, 'PE')\">\r\n                  {{ item?.PE.OI ? (item?.PE.OI | value: \"1.0-0\") : \"0\" }}\r\n                </td>\r\n                <td class=\"text-right pe-td\" [class.text-green]=\"item?.PE?.OIClass == 'up'\"\r\n                  [class.text-pink]=\"item?.PE?.OIClass == 'down'\" (click)=\"gotoCompanyPage(item, 'PE')\">\r\n                  {{\r\n                  item?.PE.OI ? (item?.PE.OIChange | value: \"1.2-2\") : \"0\"\r\n                  }}\r\n                </td>\r\n                <td class=\"text-right pe-td\" (click)=\"gotoCompanyPage(item, 'PE')\">\r\n                  {{\r\n                  item?.PE.Volume ? (item?.PE.Volume | value: \"1.0-0\") : \"0\"\r\n                  }}\r\n                </td>\r\n\r\n                <td class=\"actions\" (click)=\"isDropup(i)\">\r\n                  <div dropdown class=\"action-dropdown right-dropdown\" [dropup]=\"dropUp\">\r\n                    <button id=\"button-dropup\" dropdown-open class=\"btn\" tooltipTitle=\"Action\" ngx-tooltip\r\n                      tooltipPlacement=\"top\" tooltipType=\"tooltip\" aria-controls=\"dropdown-dropup\">\r\n                      <i class=\"icon-more\"></i>\r\n                    </button>\r\n                    <ul id=\"dropdown-dropup\" class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"button-dropup\">\r\n                      <li>\r\n                        <a (click)=\"tradeScrip(item, 1, 'PE')\">Buy</a>\r\n                      </li>\r\n                      <li>\r\n                        <a (click)=\"tradeScrip(item, 2, 'PE')\">Sell</a>\r\n                      </li>\r\n                    </ul>\r\n                  </div>\r\n                </td>\r\n\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div> -->\r\n\r\n\r\n  @if (showPreLogin) {\r\n    <div class=\"dialog\">\r\n      <div class=\"dialog-content\">\r\n        <div class=\"dialog-header clearfix \">\r\n          <div class=\"col-md-12\">\r\n            <h4 class=\"popup-title\">Oops,Looks like you are not logged in. Please Login for Moving further. </h4>\r\n          </div>\r\n        </div>\r\n        <div class=\"dialog-footer clearfix\">\r\n          <button class=\"btn sell\" (click)=\"closePreLogin()\">Close</button>\r\n          <button class=\"btn buy\" (click)=\"navigateToLogin()\">Login</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  }\r\n\r\n\r\n";

/***/ })

}]);