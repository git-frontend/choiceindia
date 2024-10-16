(self["webpackChunkjiffy_upgraded"] = self["webpackChunkjiffy_upgraded"] || []).push([[5485],{

/***/ 49927:
/*!***************************************************************!*\
  !*** ./src/app/market/gainer-loser/gainer-loser.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GainerLoserComponent: () => (/* binding */ GainerLoserComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _gainer_loser_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gainer-loser.component.html?ngResource */ 42905);
/* harmony import */ var _gainer_loser_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gainer-loser.component.scss?ngResource */ 74769);
/* harmony import */ var _gainer_loser_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_gainer_loser_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/shared-data/shared-data.service */ 46013);
/* harmony import */ var _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/utils/utils.service */ 89893);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _services_rest_market_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/rest/market.service */ 23369);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 1807);
/* harmony import */ var _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/seo/seo.service */ 44897);
/* harmony import */ var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/analytics/analytics.service */ 50213);
/* harmony import */ var _pipes_value_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/value.pipe */ 50615);
/* harmony import */ var _pipes_condense_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pipes/condense.pipe */ 82203);
/* harmony import */ var _pipes_segment_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../pipes/segment.pipe */ 39995);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 33380);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 89417);

















/** gainer loser view and scss linking */
let GainerLoserComponent = class GainerLoserComponent {
  /**
   * dependency injection and varaible declaration
   * @param activatedRoute for present route
   * @param marketService for api call
   * @param location for change url without reloading the component
   * @param router for navigation to different route
   * @param utilsService for data manipulation
   * @param shared for sharing data between two component
   * @param seoService for dynamic meta data and title
   */
  constructor(seoService, activatedRoute, marketService, location, router, utilsService, shared, analytics) {
    this.seoService = seoService;
    this.activatedRoute = activatedRoute;
    this.marketService = marketService;
    this.location = location;
    this.router = router;
    this.utilsService = utilsService;
    this.shared = shared;
    this.analytics = analytics;
    /**
     * present tab
     */
    this.activeTab = 1;
    /**
     * index list
     */
    this.indexList = [];
    this.Math = Math;
    this.market = {
      1: {
        "globalConfig": {
          "toggle": [{
            "key": 1,
            "label": "NSE"
          }, {
            "key": 3,
            "label": "BSE"
          }],
          "filters": {
            "1": [],
            "3": []
          }
        }
      },
      2: {
        "globalConfig": {
          "toggle": null,
          "filters": {
            "2": []
          }
        }
      },
      3: {
        "globalConfig": {
          "toggle": [{
            "key": 5,
            "label": "MCX"
          }, {
            "key": 7,
            "label": "NCDEX"
          }],
          "filters": {
            "5": [],
            "7": []
          }
        }
      },
      4: {
        "globalConfig": {
          "toggle": null,
          "filters": {
            "13": []
          }
        }
      }
    };
    this.tableData = [];
    this.market[2]["globalConfig"]["filters"]["2"] = [{
      IndexName: 'Index Futures',
      Token: 1,
      derivativeType: 1,
      dataType: 2
    }, {
      IndexName: 'Index Options',
      Token: 2,
      derivativeType: 2,
      dataType: 2
    }, {
      IndexName: 'Stock Futures',
      Token: 3,
      derivativeType: 1,
      dataType: 1
    }, {
      IndexName: 'Stock Options',
      Token: 4,
      derivativeType: 2,
      dataType: 1
    }];
    this.market[3]["globalConfig"]["filters"]["5"] = [{
      IndexName: 'Stock Options',
      Token: 4,
      derivativeType: 2,
      dataType: 1
    }, {
      IndexName: 'Stock Futures',
      Token: 3,
      derivativeType: 1,
      dataType: 1
    }];
    this.market[3]["globalConfig"]["filters"]["7"] = [{
      IndexName: 'Stock Futures',
      Token: 3,
      derivativeType: 1,
      dataType: 1
    }];
    this.market[4]["globalConfig"]["filters"]["13"] = [{
      IndexName: 'Stock Options',
      Token: 4,
      derivativeType: 2,
      dataType: 1
    }, {
      IndexName: 'Stock Futures',
      Token: 3,
      derivativeType: 1,
      dataType: 1
    }];
    this.cssClasses = {
      sortAscending: 'icon-angle-down',
      sortDescending: 'icon-angle-up',
      pagerLeftArrow: 'icon-angle-left',
      pagerRightArrow: 'icon-angle-right',
      pagerPrevious: 'icon-angle-left',
      pagerNext: 'icon-angle-right'
    };
    this.getIndexList();
  }
  /**
  * On component change, unsubscribe all subscription(here setInterval)
  */
  ngOnDestroy() {
    if (this.routeReuseSubscription) this.routeReuseSubscription.unsubscribe();
    if (this.gainerLoserSubscription) this.gainerLoserSubscription.unsubscribe();
  }
  /**
  * change in url is checked, accordigly various function is called on basis of url parameters.
  */
  ngOnInit() {
    this.utilsService.setTrackMoeEvent('visitedMarketBSDF', {
      "User_ID": this.utilsService.getUserId() || 'guest',
      "IP": this.shared.IPAddress
    });
    this.analytics.emitEvent('visitedMarketBSDF', this.utilsService.getUserId() || 'guest', JSON.stringify({
      "IP": this.shared.IPAddress
    }), 1);
    this.activatedRoute.params.subscribe(params => {
      this.routeUrl = "market" + '/' + params['segmentType'] + '/' + params['category'] + (params['segmentName'] ? '/' + params['segmentName'] : '');
      this.tableData = [];
      this.onchangeUrl(params['segmentType'], params['category'], params['segmentName']);
      this.marketType = params['category'];
      this.exchangeType = params['segmentName'];
      this.activeTab = params['segmentType'] == 'stocks' ? 1 : params['segmentType'] == 'derivatives' ? 2 : params['segmentType'] == 'commodities' ? 3 : 4;
      let newArr = this.market[this.activeTab]["globalConfig"]["filters"];
      this.indexList = this.activeTab == 1 ? this.exchangeType == "nse" ? newArr[1] : newArr[3] : this.activeTab == 2 ? newArr["2"] : this.activeTab == 3 ? this.exchangeType == "mcx" ? newArr["5"] : newArr["7"] : newArr["13"];
      this.subMarketTypeToggle = this.marketType.indexOf('-oi') > -1 ? true : false;
      this.marketTypeToggle = this.marketType.indexOf('top-gainers') > -1 || this.marketType.indexOf('volume') > -1 ? false : true;
      this.exchangeToggle = this.exchangeType == 'nse' || this.exchangeType == 'mcx' ? false : true;
      this.dropdownFilter = this.activeTab == 1 ? this.exchangeType == 'nse' ? '26000' : '19000' : '3';
      let commonTitle = this.marketTypeToggle ? (this.marketType || "").indexOf('top-losers') > -1 ? 'Losers' : 'Value' : (this.marketType || "").indexOf('top-gainers') > -1 ? 'Gainers' : 'Volume';
      let valueTitle = commonTitle == 'Value' || commonTitle == 'Volume' ? this.activeTab == 2 ? 'Stocks' : this.activeTab == 3 ? 'Commodity' : this.activeTab == 4 ? 'Currencies' : '' : '';
      this.tableTitle = (this.exchangeType && (this.activeTab == 1 || this.activeTab == 3) ? this.exchangeType : this.activeTab == 2 ? 'F&O' : commonTitle == 'Gainers' || commonTitle == 'Losers' ? 'Forex' : '').toUpperCase() + ' Top ' + commonTitle + ' ' + valueTitle;
      this.tableData = [];
      if (this.activeTab == 1) {
        this.getActiveByIndex(this.activeTab, this.marketType, this.exchangeType, this.dropdownFilter);
      } else {
        this.getDerivative(this.activeTab, this.marketType, this.exchangeType, this.dropdownFilter);
      }
      let segmenttype = params.segmentType.replace(/-/gi, '');
      let categorytype = params.category.replace(/-/gi, '');
      this.utilsService.setTrackMoeEvent('visited' + segmenttype.charAt(0).toUpperCase() + segmenttype.substr(1).toLowerCase() + categorytype.charAt(0).toUpperCase() + categorytype.substr(1).toLowerCase(), {
        "User_ID": this.utilsService.getUserId() || 'guest',
        "IP": this.shared.IPAddress
      });
      this.analytics.emitEvent('visited' + segmenttype.charAt(0).toUpperCase() + segmenttype.substr(1).toLowerCase() + categorytype.charAt(0).toUpperCase() + categorytype.substr(1).toLowerCase(), this.utilsService.getUserId() || 'guest', JSON.stringify({
        "IP": this.shared.IPAddress
      }), 1);
    });
    this.routeReuseSubscription = this.utilsService.broadcastObservable('routeResuseMenu').subscribe(data => {
      if (data.route) {
        let routeData = data.route.split('/');
        this.routeUrl = data.route;
        if (routeData.length >= 3) {
          this.marketType = routeData[2];
          this.exchangeType = routeData[3] ? routeData[3] : '';
          this.activeTab = routeData[1] == 'stocks' ? 1 : routeData[1] == 'derivatives' ? 2 : routeData[1] == 'commodities' ? 3 : 4;
          let newArr = this.market[this.activeTab]["globalConfig"]["filters"];
          this.indexList = this.activeTab == 1 ? this.exchangeType == "nse" ? newArr[1] : newArr[3] : this.activeTab == 2 ? newArr["2"] : this.activeTab == 3 ? this.exchangeType == "mcx" ? newArr["5"] : newArr["7"] : newArr["13"];
          this.marketTypeToggle = this.marketType.indexOf('top-gainers') > -1 || this.marketType.indexOf('volume') > -1 ? false : true;
          this.subMarketTypeToggle = this.marketType.indexOf('-oi') > -1 ? true : false;
          this.exchangeToggle = this.exchangeType == 'nse' || this.exchangeType == "mcx" ? false : true;
          this.dropdownFilter = this.activeTab == 1 ? this.exchangeType == 'nse' ? '26000' : '19000' : '3';
          let commonTitle = this.marketTypeToggle ? (this.marketType || "").indexOf('top-losers') > -1 ? 'Losers' : 'Value' : (this.marketType || "").indexOf('top-gainers') > -1 ? 'Gainers' : 'Volume';
          let valueTitle = commonTitle == 'Value' || commonTitle == 'Volume' ? this.activeTab == 2 ? 'Stocks' : this.activeTab == 3 ? 'Commodity' : this.activeTab == 4 ? 'Currencies' : '' : '';
          this.tableTitle = (this.exchangeType && (this.activeTab == 1 || this.activeTab == 3) ? this.exchangeType : this.activeTab == 2 ? 'F&O' : commonTitle == 'Gainers' || commonTitle == 'Losers' ? 'Forex' : '').toUpperCase() + ' Top ' + commonTitle + ' ' + valueTitle;
          if (this.activeTab == 1) {
            this.tableData = [];
            this.getActiveByIndex(this.activeTab, this.marketType, this.exchangeType, this.dropdownFilter);
          } else {
            this.getDerivative(this.activeTab, this.marketType, this.exchangeType, this.dropdownFilter);
          }
          this.onchangeUrl(routeData[1], this.marketType, this.exchangeType);
          this.routeUrl = 'market/' + routeData[1] + '/' + this.marketType + (this.exchangeType ? '/' + this.exchangeType : '');
          this.location.replaceState(this.routeUrl);
          // ga('set', 'page', 'market/' + routeData[1] + '/' + this.marketType + (this.exchangeType ? '/' + this.exchangeType : ''));
          // ga('send', 'pageview');
          let segmenttype = routeData[1].replace(/-/gi, '');
          let categorytype = this.marketType.replace(/-/gi, '');
          this.utilsService.setTrackMoeEvent('visited' + segmenttype.charAt(0).toUpperCase() + segmenttype.substr(1).toLowerCase() + categorytype.charAt(0).toUpperCase() + categorytype.substr(1).toLowerCase() + this.exchangeType.toUpperCase(), {
            "User_ID": this.utilsService.getUserId() || 'guest',
            "IP": this.shared.IPAddress
          });
          this.analytics.emitEvent('visited' + segmenttype.charAt(0).toUpperCase() + segmenttype.substr(1).toLowerCase() + categorytype.charAt(0).toUpperCase() + categorytype.substr(1).toLowerCase() + this.exchangeType.toUpperCase(), this.utilsService.getUserId() || 'guest', JSON.stringify({
            "IP": this.shared.IPAddress
          }), 1);
        }
      }
    });
    this.gainerLoserSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.timer)(60000, 60000).subscribe(() => {
      this.getInterval();
    });
    this.createSeoContent();
  }
  /**
   * On change of tab, url is changed accordingly and data is changed
   * @param count present tab
   */
  activateFilter(count) {
    this.activeTab = count;
    this.exchangeToggle = false;
    this.exchangeType = this.activeTab == 1 ? this.exchangeToggle ? 'bse' : 'nse' : this.activeTab == 3 && this.exchangeToggle ? 'ncdex' : 'mcx';
    let newArr = this.market[this.activeTab]["globalConfig"]["filters"];
    this.dropdownFilter = this.activeTab == 1 ? this.exchangeType == "nse" ? '26000' : '19000' : '3';
    this.indexList = this.activeTab == 1 ? this.exchangeType == "nse" ? newArr[1] : newArr[3] : this.activeTab == 2 ? newArr["2"] : this.activeTab == 3 ? this.exchangeType == "mcx" ? newArr["5"] : newArr["7"] : newArr["13"];
    this.tableData = [];
    this.marketType = this.activeTab == 1 ? (this.marketType || "").replace('-oi', '') : this.marketType;
    this.marketType = this.activeTab > 1 && this.subMarketTypeToggle && this.marketType.indexOf('-oi') == -1 ? this.marketType + '-oi' : this.marketType;
    this.activeTab == 1 ? this.getActiveByIndex(this.activeTab, this.marketType, this.exchangeType, this.dropdownFilter) : this.getDerivative(this.activeTab, this.marketType, this.exchangeType, this.dropdownFilter);
    let type = this.activeTab == 1 ? 'stocks' : this.activeTab == 2 ? 'derivatives' : this.activeTab == 3 ? 'commodities' : 'currency';
    let segmentName = this.activeTab == 1 || this.activeTab == 3 ? '/' + this.exchangeType : '';
    this.onchangeUrl(type, this.marketType, this.activeTab == 1 || this.activeTab == 3 ? this.exchangeType : undefined);
    this.routeUrl = 'market/' + type + '/' + this.marketType + segmentName;
    this.location.replaceState(this.routeUrl);
    let commonTitle = this.marketTypeToggle ? (this.marketType || "").indexOf('top-losers') > -1 ? 'Losers' : 'Value' : (this.marketType || "").indexOf('top-gainers') > -1 ? 'Gainers' : 'Volume';
    let valueTitle = commonTitle == 'Value' || commonTitle == 'Volume' ? this.activeTab == 2 ? 'Stocks' : this.activeTab == 3 ? 'Commodity' : this.activeTab == 4 ? 'Currencies' : '' : '';
    this.tableTitle = (this.exchangeType && (this.activeTab == 1 || this.activeTab == 3) ? this.exchangeType : this.activeTab == 2 ? 'F&O' : commonTitle == 'Gainers' || commonTitle == 'Losers' ? 'Forex' : '').toUpperCase() + ' Top ' + commonTitle + ' ' + valueTitle;
    // ga('set', 'page', 'market/' + type + '/' + this.marketType + segmentName);
    // ga('send', 'pageview');
    let segmenttype = type.replace(/-/gi, '');
    let categorytype = this.marketType.replace(/-/gi, '');
    this.utilsService.setTrackMoeEvent('visited' + segmenttype.charAt(0).toUpperCase() + segmenttype.substr(1).toLowerCase() + categorytype.charAt(0).toUpperCase() + categorytype.substr(1).toLowerCase(), {
      "User_ID": this.utilsService.getUserId() || 'guest',
      "IP": this.shared.IPAddress
    });
    this.analytics.emitEvent('visited' + segmenttype.charAt(0).toUpperCase() + segmenttype.substr(1).toLowerCase() + categorytype.charAt(0).toUpperCase() + categorytype.substr(1).toLowerCase(), this.utilsService.getUserId() || 'guest', JSON.stringify({
      "IP": this.shared.IPAddress
    }), 1);
    let user_id = this.utilsService.getUserId();
    if (count == 3 && (!user_id || user_id == 'guest')) {
      this.router.navigate([this.routeUrl]);
    }
  }
  /**
   * On gainer or loser or volume or value change, data changes
   * @param gainerLoserToggle  marketType
   */
  onMarketTypeChange(gainerLoserToggle) {
    if (!this.subMarketTypeToggle) {
      this.marketType = (this.marketType || "").indexOf('top-gainers') > -1 || (this.marketType || "").indexOf('top-losers') > -1 ? gainerLoserToggle ? 'top-losers' : 'top-gainers' : gainerLoserToggle ? 'top-value' : 'top-volume';
      this.tableData = [];
      this.activeTab == 1 ? this.getActiveByIndex(this.activeTab, this.marketType, this.exchangeType, this.dropdownFilter) : this.getDerivative(this.activeTab, this.marketType, this.exchangeType, this.dropdownFilter);
      let type = this.activeTab == 1 ? 'stocks' : this.activeTab == 2 ? 'derivatives' : this.activeTab == 3 ? 'commodities' : 'currency';
      let segmentName = this.activeTab == 1 || this.activeTab == 3 ? '/' + this.exchangeType : '';
      this.routeUrl = 'market/' + type + '/' + this.marketType + segmentName;
      this.location.replaceState(this.routeUrl);
      this.onchangeUrl(type, this.marketType, this.activeTab == 1 || this.activeTab == 3 ? this.exchangeType : undefined);
      this.shared.fromRoute = 'market/' + type + '/' + this.marketType + segmentName;
      let commonTitle = this.marketTypeToggle ? (this.marketType || "").indexOf('top-losers') > -1 ? 'Losers' : 'Value' : (this.marketType || "").indexOf('top-gainers') > -1 ? 'Gainers' : 'Volume';
      let valueTitle = commonTitle == 'Value' || commonTitle == 'Volume' ? this.activeTab == 2 ? 'Stocks' : this.activeTab == 3 ? 'Commodity' : this.activeTab == 4 ? 'Currencies' : '' : '';
      this.tableTitle = (this.exchangeType && (this.activeTab == 1 || this.activeTab == 3) ? this.exchangeType : this.activeTab == 2 ? 'F&O' : commonTitle == 'Gainers' || commonTitle == 'Losers' ? 'Forex' : '').toUpperCase() + ' Top ' + commonTitle + ' ' + valueTitle;
      // ga('set', 'page', 'market/' + type + '/' + this.marketType + segmentName);
      // ga('send', 'pageview');
      let segmenttype = type.replace(/-/gi, '');
      let categorytype = this.marketType.replace(/-/gi, '');
      this.utilsService.setTrackMoeEvent('visited' + segmenttype.charAt(0).toUpperCase() + segmenttype.substr(1).toLowerCase() + categorytype.charAt(0).toUpperCase() + categorytype.substr(1).toLowerCase(), {
        "User_ID": this.utilsService.getUserId() || 'guest',
        "IP": this.shared.IPAddress
      });
      this.analytics.emitEvent('visited' + segmenttype.charAt(0).toUpperCase() + segmenttype.substr(1).toLowerCase() + categorytype.charAt(0).toUpperCase() + categorytype.substr(1).toLowerCase(), this.utilsService.getUserId() || 'guest', JSON.stringify({
        "IP": this.shared.IPAddress
      }), 1);
    } else {
      this.marketType = gainerLoserToggle === false ? 'top-gainers-oi' : 'top-losers-oi';
      this.tableData = [];
      this.activeTab == 1 ? this.getActiveByIndex(this.activeTab, this.marketType, this.exchangeType, this.dropdownFilter) : this.getDerivative(this.activeTab, this.marketType, this.exchangeType, this.dropdownFilter);
      let type = this.activeTab == 1 ? 'stocks' : this.activeTab == 2 ? 'derivatives' : this.activeTab == 3 ? 'commodities' : 'currency';
      let segmentName = this.activeTab == 1 || this.activeTab == 3 ? '/' + this.exchangeType : '';
      this.routeUrl = 'market/' + type + '/' + this.marketType + segmentName;
      this.location.replaceState(this.routeUrl);
      this.onchangeUrl(type, this.marketType, this.activeTab == 1 || this.activeTab == 3 ? this.exchangeType : undefined);
      this.shared.fromRoute = 'market/' + type + '/' + this.marketType + segmentName;
      let commonTitle = this.marketTypeToggle ? (this.marketType || "").indexOf('top-losers') > -1 ? 'Losers' : 'Value' : (this.marketType || "").indexOf('top-gainers') > -1 ? 'Gainers' : 'Volume';
      let valueTitle = commonTitle == 'Value' || commonTitle == 'Volume' ? this.activeTab == 2 ? 'Stocks' : this.activeTab == 3 ? 'Commodity' : this.activeTab == 4 ? 'Currencies' : '' : '';
      this.tableTitle = (this.exchangeType && (this.activeTab == 1 || this.activeTab == 3) ? this.exchangeType : this.activeTab == 2 ? 'F&O' : commonTitle == 'Gainers' || commonTitle == 'Losers' ? 'Forex' : '').toUpperCase() + ' Top ' + commonTitle + ' ' + valueTitle;
      // ga('set', 'page', 'market/' + type + '/' + this.marketType + segmentName);
      // ga('send', 'pageview');
      let segmenttype = type.replace(/-/gi, '');
      let categorytype = this.marketType.replace(/-/gi, '');
      this.utilsService.setTrackMoeEvent('visited' + segmenttype.charAt(0).toUpperCase() + segmenttype.substr(1).toLowerCase() + categorytype.charAt(0).toUpperCase() + categorytype.substr(1).toLowerCase(), {
        "User_ID": this.utilsService.getUserId() || 'guest',
        "IP": this.shared.IPAddress
      });
      this.analytics.emitEvent('visited' + segmenttype.charAt(0).toUpperCase() + segmenttype.substr(1).toLowerCase() + categorytype.charAt(0).toUpperCase() + categorytype.substr(1).toLowerCase(), this.utilsService.getUserId() || 'guest', JSON.stringify({
        "IP": this.shared.IPAddress
      }), 1);
    }
  }
  /**
  * on nse or bse or mcx or ncdex change, data changes
  */
  onExchangeChange() {
    let list = this.market[this.activeTab]["globalConfig"]["filters"];
    this.exchangeType = this.activeTab == 1 ? this.exchangeToggle ? 'bse' : 'nse' : this.activeTab == 3 && this.exchangeToggle ? 'ncdex' : 'mcx';
    this.dropdownFilter = this.activeTab == 1 ? this.exchangeType == 'nse' ? '26000' : '19000' : '3';
    this.indexList = this.activeTab == 1 ? this.exchangeType == 'nse' ? list[1] : list[3] : this.exchangeType == 'mcx' ? list[5] : list[7];
    this.tableData = [];
    this.activeTab == 1 ? this.getActiveByIndex(this.activeTab, this.marketType, this.exchangeType, this.dropdownFilter) : this.getDerivative(this.activeTab, this.marketType, this.exchangeType, this.dropdownFilter);
    let type = this.activeTab == 1 ? 'stocks' : this.activeTab == 2 ? 'derivatives' : this.activeTab == 3 ? 'commodities' : 'currency';
    let segmentName = this.activeTab == 1 || this.activeTab == 3 ? '/' + this.exchangeType : '';
    this.onchangeUrl(type, this.marketType, this.activeTab == 1 || this.activeTab == 3 ? this.exchangeType : undefined);
    this.routeUrl = 'market/' + type + '/' + this.marketType + segmentName;
    this.location.replaceState('market/' + type + '/' + this.marketType + segmentName);
    let commonTitle = this.marketTypeToggle ? (this.marketType || "").indexOf('top-losers') > -1 ? 'Losers' : 'Value' : (this.marketType || "").indexOf('top-gainers') > -1 ? 'Gainers' : 'Volume';
    let valueTitle = commonTitle == 'Value' || commonTitle == 'Volume' ? this.activeTab == 2 ? 'Stocks' : this.activeTab == 3 ? 'Commodity' : this.activeTab == 4 ? 'Currencies' : '' : '';
    this.tableTitle = (this.exchangeType && (this.activeTab == 1 || this.activeTab == 3) ? this.exchangeType : this.activeTab == 2 ? 'F&O' : commonTitle == 'Gainers' || commonTitle == 'Losers' ? 'Forex' : '').toUpperCase() + ' Top ' + commonTitle + ' ' + valueTitle;
    // ga('set', 'page', 'market/' + type + '/' + this.marketType + segmentName);
    // ga('send', 'pageview');
    let segmenttype = type.replace(/-/gi, '');
    let categorytype = this.marketType.replace(/-/gi, '');
    this.utilsService.setTrackMoeEvent('visited' + segmenttype.charAt(0).toUpperCase() + segmenttype.substr(1).toLowerCase() + categorytype.charAt(0).toUpperCase() + categorytype.substr(1).toLowerCase() + this.exchangeType.toUpperCase(), {
      "User_ID": this.utilsService.getUserId() || 'guest',
      "IP": this.shared.IPAddress
    });
    this.analytics.emitEvent('visited' + segmenttype.charAt(0).toUpperCase() + segmenttype.substr(1).toLowerCase() + categorytype.charAt(0).toUpperCase() + categorytype.substr(1).toLowerCase() + this.exchangeType.toUpperCase(), this.utilsService.getUserId() || 'guest', JSON.stringify({
      "IP": this.shared.IPAddress
    }), 1);
  }
  /**
   * OI or Change gainer looser
   * @param subMarketTypeToggle oi or change value
   */
  onSubMarketTypeChange(subMarketTypeToggle) {
    this.tableData = [];
    let type = this.activeTab == 2 ? 'derivatives' : this.activeTab == 3 ? 'commodities' : 'currency';
    let segmentName = this.activeTab == 1 || this.activeTab == 3 ? '/' + this.exchangeType : '';
    if (subMarketTypeToggle) {
      this.marketType = this.marketTypeToggle ? 'top-losers-oi' : 'top-gainers-oi';
      this.getDerivative(this.activeTab, this.marketType, this.exchangeType, this.dropdownFilter);
      this.routeUrl = 'market/' + type + '/' + this.marketType + segmentName;
      this.location.replaceState(this.routeUrl);
      let segmenttype = type.replace(/-/gi, '');
      let categorytype = this.marketType.replace(/-/gi, '');
      this.utilsService.setTrackMoeEvent('visited' + segmenttype.charAt(0).toUpperCase() + segmenttype.substr(1).toLowerCase() + categorytype.charAt(0).toUpperCase() + categorytype.substr(1).toLowerCase(), {
        "User_ID": this.utilsService.getUserId() || 'guest',
        "IP": this.shared.IPAddress
      });
      this.analytics.emitEvent('visited' + segmenttype.charAt(0).toUpperCase() + segmenttype.substr(1).toLowerCase() + categorytype.charAt(0).toUpperCase() + categorytype.substr(1).toLowerCase(), this.utilsService.getUserId() || 'guest', JSON.stringify({
        "IP": this.shared.IPAddress
      }), 1);
    } else {
      this.marketType = this.marketTypeToggle ? 'top-losers' : 'top-gainers';
      this.getDerivative(this.activeTab, this.marketType, this.exchangeType, this.dropdownFilter);
      this.routeUrl = 'market/' + type + '/' + this.marketType + segmentName;
      this.location.replaceState(this.routeUrl);
      let segmenttype = type.replace(/-/gi, '');
      let categorytype = this.marketType.replace(/-/gi, '');
      this.utilsService.setTrackMoeEvent('visited' + segmenttype.charAt(0).toUpperCase() + segmenttype.substr(1).toLowerCase() + categorytype.charAt(0).toUpperCase() + categorytype.substr(1).toLowerCase(), {
        "User_ID": this.utilsService.getUserId() || 'guest',
        "IP": this.shared.IPAddress
      });
      this.analytics.emitEvent('visited' + segmenttype.charAt(0).toUpperCase() + segmenttype.substr(1).toLowerCase() + categorytype.charAt(0).toUpperCase() + categorytype.substr(1).toLowerCase(), this.utilsService.getUserId() || 'guest', JSON.stringify({
        "IP": this.shared.IPAddress
      }), 1);
    }
  }
  /**
  * on dropdown change, data changes
  */
  onDropDownChange() {
    this.tableData = [];
    this.activeTab == 1 ? this.getActiveByIndex(this.activeTab, this.marketType, this.exchangeType, this.dropdownFilter) : this.getDerivative(this.activeTab, this.marketType, this.exchangeType, this.dropdownFilter);
  }
  /**
   * ActiveByIndex api is called in case of equity, response is manipulated as per view
   * @param count present tab
   * @param marketType gainer loser value volume
   * @param exchangeType nse bse mcx ncdex
   * @param indiceType indices token
   */
  getActiveByIndex(count, marketType, exchangeType, indiceType) {
    let payload = {
      "SegmentId": exchangeType == 'nse' ? 1 : 3,
      "IndexId": indiceType,
      "MarketDataType": marketType == 'top-gainers' ? 4 : marketType == 'top-losers' ? 5 : marketType == 'top-volume' ? 1 : 2
    };
    this.marketService.getMostActiveByIndex(payload).subscribe(res => {
      if (res.Status == "Success" && res.Response) {
        if (res.Response.MostActiveList) {
          res.Response.MostActiveList.forEach((element, index) => {
            let LTP = res.Response.MostActiveList[index].LTP;
            let percent = res.Response.MostActiveList[index].PerChange;
            let change = LTP * percent / (100 + percent);
            let priceDivisor = res.Response.MostActiveList[index].PriceDivisor;
            res.Response.MostActiveList[index].LTP = LTP / priceDivisor;
            res.Response.MostActiveList[index].Change = change / priceDivisor;
            res.Response.MostActiveList[index].percent = percent;
            res.Response.MostActiveList[index].textColor = percent > 0 ? 'text-green' : percent == 0 ? '' : 'text-pink';
            res.Response.MostActiveList[index].oiColor = element.OIPerChange > 0 ? 'text-green' : element.OIPerChange < 0 ? 'text-pink' : '';
            // res.Response.MostActiveList[index].percent = Math.abs(res.Response.MostActiveList[index].percent);
            // res.Response.MostActiveList[index].Change = Math.abs(res.Response.MostActiveList[index].Change);
            let companyPath = res.Response.MostActiveList[index]["SecDesc"].replace(/[\s|\&|\%]/g, '').toLowerCase();
            let urlPrefix = '/instrument/' + ([1, 2, 3, 4].indexOf(payload.SegmentId) > -1 ? 'equity/' : [5, 7].indexOf(payload.SegmentId) > -1 ? 'commodity/' : 'currency/');
            res.Response.MostActiveList[index].companyURL = urlPrefix + companyPath + '/' + payload.SegmentId + '/' + res.Response.MostActiveList[index].Token;
          });
          this.tableData = res.Response.MostActiveList;
        } else {
          this.tableData = [];
        }
      } else if (res.Reason == 'Data not found.') {
        this.tableData = [];
      } else {
        this.utilsService.error('Error', "Something went wrong");
      }
    });
  }
  /**
  * IndexList api is called in case of equity dropdown value, response is manipulated as per view
  */
  getIndexList() {
    let data = {
      "StartPosition": 0,
      "NoOfRecords": 200
    };
    this.marketService.getIndicesList(data).subscribe(res => {
      if (res.Status == "Success" && res.Response['lstIndices']) {
        let list = res.Response['lstIndices'];
        this.market["1"]["globalConfig"]["filters"][1] = [{
          IndexName: 'NSEALL',
          Token: '-1'
        }];
        this.market["1"]["globalConfig"]["filters"][3] = [{
          IndexName: 'BSEALL',
          Token: '-1'
        }];
        for (let i = 0; i < res.Response['lstIndices'].length; i++) {
          if (list[i].SegmentId == 1) {
            this.market[1].globalConfig.filters[1].push(list[i]);
          } else if (list[i].SegmentId == 3) {
            this.market[1].globalConfig.filters[3].push(list[i]);
          }
        }
        this.indexList = this.activeTab == 1 ? this.exchangeType == "nse" ? this.market[1]["globalConfig"]["filters"][1] : this.market[1]["globalConfig"]["filters"][3] : this.indexList;
        this.dropdownFilter = this.activeTab == 1 ? this.exchangeType == "nse" ? '26000' : '19000' : '3';
      } else if (res.Reason == 'Data not found.') {} else {
        this.utilsService.error('Error', "Something went wrong");
      }
    });
  }
  /**
   * ActiveBySegmentDerivatives api is called expect of equity, response is manipulated as per view
   * @param count present tab
   * @param marketType gainer loser value volume
   * @param exchangeType nse bse mcx ncdex
   * @param indiceType indices token
   */
  getDerivative(count, marketType, exchangeType, indiceType) {
    let newObj = this.indexList.filter(obj => {
      return obj.Token == indiceType;
    });
    let payload = {
      "SegmentId": count == 2 ? 2 : count == 3 ? exchangeType == 'mcx' ? 5 : 7 : 13,
      "MarketDataType": marketType == 'top-gainers' ? 4 : marketType == 'top-losers' ? 5 : marketType == 'top-losers-oi' ? 7 : marketType == 'top-gainers-oi' ? 6 : marketType == 'top-volume' ? 1 : 2,
      "DerivativeType": newObj[0].derivativeType,
      "DerivativeDataType": newObj[0].dataType
    };
    this.marketService.getActiveBySegmentDerivatives(payload).subscribe(res => {
      if (res.Status == "Success" && res.Response) {
        if (res.Response.MostActiveList) {
          res.Response.MostActiveList.forEach((element, index) => {
            let LTP = res.Response.MostActiveList[index].LTP;
            let percent = res.Response.MostActiveList[index].PerChange;
            let change = LTP * percent / (100 + percent);
            let priceDivisor = res.Response.MostActiveList[index].PriceDivisor;
            res.Response.MostActiveList[index].SecDesc = res.Response.MostActiveList[index].SecDesc || res.Response.MostActiveList[index].Name;
            res.Response.MostActiveList[index].LTP = LTP / priceDivisor;
            res.Response.MostActiveList[index].Change = change / priceDivisor;
            res.Response.MostActiveList[index].percent = percent;
            res.Response.MostActiveList[index].textColor = percent > 0 ? 'text-green' : percent == 0 ? '' : 'text-pink';
            res.Response.MostActiveList[index].oiColor = element.OIPerChange > 0 ? 'text-green' : element.OIPerChange < 0 ? 'text-pink' : '';
            // res.Response.MostActiveList[index].percent = Math.abs(res.Response.MostActiveList[index].percent);
            // res.Response.MostActiveList[index].Change = Math.abs(res.Response.MostActiveList[index].Change);
            let companyPath = res.Response.MostActiveList[index]["SecDesc"].replace(/[\s|\&|\%]/g, '').toLowerCase();
            let urlPrefix = '/instrument/' + ([1, 2, 3, 4].indexOf(payload.SegmentId) > -1 ? 'equity/' : [5, 7].indexOf(payload.SegmentId) > -1 ? 'commodity/' : 'currency/');
            res.Response.MostActiveList[index].companyURL = urlPrefix + companyPath + '/' + payload.SegmentId + '/' + res.Response.MostActiveList[index].Token;
          });
          this.tableData = res.Response.MostActiveList;
        } else {
          this.tableData = [];
        }
      } else if (res.Reason == 'Data not found.') {
        this.tableData = [];
      } else {
        this.utilsService.error('Error', "Something went wrong");
      }
    });
  }
  /**
   *  On click company name,  goes to company page
   * @param item company details
   */
  gotoCompanyPage(item) {
    let segmentId = this.activeTab == 1 ? this.exchangeType == 'nse' ? 1 : 3 : this.activeTab == 2 ? 2 : this.activeTab == 3 ? this.exchangeType == 'mcx' ? 5 : 7 : 13;
    let companyName = item["SecDesc"].replace(/[\s|\&|\%]/g, '').toLowerCase();
    let url = companyName + '/' + segmentId + '/' + item.Token;
    if (segmentId == 1 || segmentId == 2 || segmentId == 4 || segmentId == 3) {
      url = "equity/" + url;
    } else if (segmentId == 5 || segmentId == 7) {
      url = "commodity/" + url;
    } else if (segmentId == 13 || segmentId == 14 || segmentId == 38 || segmentId == 39) {
      url = "currency/" + url;
    }
    let segmentToken = item.SegmentId + '&' + item.Token;
    localStorage.setItem('presentToken', JSON.stringify(segmentToken));
    this.router.navigate(['instrument/' + url]);
  }
  /**
  * On click of refresh button, api is called as per tab , and toggle selected
  */
  refresh() {
    this.tableData = [];
    if (this.activeTab == 1) {
      this.getActiveByIndex(this.activeTab, this.marketType, this.exchangeType, this.dropdownFilter);
    } else {
      this.getDerivative(this.activeTab, this.marketType, this.exchangeType, this.dropdownFilter);
    }
  }
  /**
  * api is called as per tab , and toggle selected after every 1 min
  */
  getInterval() {
    if (this.activeTab == 1) {
      this.getActiveByIndex(this.activeTab, this.marketType, this.exchangeType, this.dropdownFilter);
    } else {
      this.getDerivative(this.activeTab, this.marketType, this.exchangeType, this.dropdownFilter);
    }
  }
  /**
   * Change Meta & Title based on url of Page
   * @param segmentType segment Type
   * @param category Category opf match: Gainer, loser, Volume, value
   * @param segmentName Name of Segment
   */
  onchangeUrl(segmentType, category, segmentName) {
    let newObj = segmentName ? segmentType + '-' + category + '-' + segmentName : segmentType + '-' + category;
    this.seoService.getMetaData(this.seoService.metaObj[newObj].title, this.seoService.metaObj[newObj].content);
  }
  onLabelToggle(toggleName, toggleValue) {
    // if (toggleName == 'marketType')  (this.marketTypeToggle = toggleValue) : (this.exchangeToggle = toggleValue);
    //  (toggleName == 'marketType') ? this.onMarketTypeChange(this.marketTypeToggle) : this.onExchangeChange();
    if (toggleName == 'marketType') {
      this.marketTypeToggle = toggleValue;
      this.onMarketTypeChange(this.marketTypeToggle);
    } else if (toggleName == 'subMarketType') {
      this.subMarketTypeToggle = toggleValue;
      this.onSubMarketTypeChange(this.subMarketTypeToggle);
    } else {
      this.exchangeToggle = toggleValue;
      this.onExchangeChange();
    }
  }
  /** to create seo content */
  createSeoContent() {
    this.seoContent = {
      "market/stocks/top-gainers/nse": `
    <h4 class="heading padding-0 bold mb-20">NSE Top Gainers - BSE Top Gainers </h4>
    <p>This page shows the <b>NSE Top Gainers</b> and <b>BSE Top Gainers today</b>. This is a fundamental requirement of all traders / investors to know immediately where the action in the market is taking place. Tracking the <b>Top Stock Gainers</b> can give one a fair idea which sector is on an upswing.</p>
    &nbsp;&nbsp;
    <h4 class="heading padding-0 bold mb-20">NSE Top Gainers share price - Top gainer share today</h4>
    <p>The top strip shows the indices like SENSEX, NIFTY for the trader or investor to know where the market is/are heading.</p>
    <p>Below that is the major section, the list of <b>Top Gainers</b>. The list is divided into Equity – Derivatives – Commodities - Currencies for the user to alternate between any. Below that are the toggle buttons for Gainer – Loser and NSE – BSE, one can alternate immediately between either and the list is updated in a flash.  On the right is the dropdown box to select from any index and the list will change accordingly.</p>
    <p>The list will show with the LTP – Change (%)  - Volume – Traded Value for easier reference. The user can click on the stock and it will be redirected to the dedicated stock page where the user can then perform in-depth research, BUY/SELL or other subsidiary actions.</p>
    `,
      "market/stocks/top-losers/nse": `<h4 class="heading padding-0 bold mb-20">NSE Top Losers Today - BSE Top Losers Today</h4>
    <p>This page shows the <b>NSE Top Losers</b> and <b>BSE Top Losers today</b>. This is a core requirement of all traders / investors for them to plan their traders or opt out of it immediately knowing the status of the market. Tracking the <b>Top Stock Losers</b> can give one an opportunity to be on the bearish side or pick their trades with caution.</p>
    &nbsp;&nbsp;
    <h4 class="heading padding-0 bold mb-20">NSE Top Loser – BSE Top Loser</h4>
    <p>Since the page is made to provide a comprehensive list of market losers it will primarily show that. The top header shows the indices i.e SENSEX, NIFTY for the trader or investor to know where the market is or heading.</p>
    <p>Below that is the major section, the list of <b>top losers</b>. The list is divided into Equity – Derivatives – Commodities - Currencies for the user to alternate between any. Below that are the toggle buttons for Gainer – Loser and NSE – BSE, one can alternate immediately between either and the list is updated in a flash.  On the right is the dropdown box to select from any index and the list will change accordingly. Use the refresh button on the right edge of the list to show the updates.</p>
    <p>The list will show with the LTP – Change (%)  - Volume – Traded Value for easier reference. The user can click on the stock and it will be redirected to the dedicated stock page where the user can then perform in-depth research, BUY/SELL or other subsidiary actions.</p>
    `,
      "market/stocks/top-value/nse": `<h4 class="heading padding-0 bold mb-20">Most traded stocks in NSE</h4>
    <p>News based or sector based or quarterly results; there are always some stocks which witness some action on a daily basis. These stocks spread the excitement to the entire sector they belong to and its competitor companies also witness intense buying-selling.</p>
    &nbsp;&nbsp;
    <h4 class="heading padding-0 bold mb-20">Top trading stocks in NSE</h4>
    <p>This page will predominantly show the list of Top Traded stocks by VALUE. The top strip shows the indices like SENSEX, NIFTY for the trader or investor to know where the market is/are heading.</p>
    <p>Below that is the major section, the list of <b>Top Value Stocks NSE</b>. The list is divided into Equity – Derivatives – Commodities - Currencies for the user to alternate between any. Below that are the toggle buttons for Volume - Value and NSE – BSE, one can alternate immediately between either and the list is updated in a flash.  Value will be selected by default since the list is of Top Traded Stock by Value, however, users can select the Volume button and the list will show the Top Traded stocks by Volume. On the right is the dropdown box to select from any index and the list will change accordingly. Use the refresh button on the right edge of the list to show the updates.</p>
    <p>The list will show with the LTP – Change (%)  - Volume – Traded Value for easier reference. The user can click on the stock and it will be redirected to the dedicated stock page where the user can then perform in-depth research, BUY/SELL or other subsidiary actions.</p>
    `,
      "market/stocks/top-volume/nse": `<h4 class="heading padding-0 bold mb-20">High Volume Stocks NSE - BSE Top Volume Stocks</h4>
    <p>On a daily basis, almost unfailingly we see some stocks that see a spike in high volume buying. The reasons for it could be any like news based sources, sector based, quarterly results or change in policy. Tracking the <b>Top volume Traded Stock NSE</b> can lead to favourable trading and investment outcomes.</p>
    &nbsp;&nbsp;
    <h4 class="heading padding-0 bold mb-20">Top Volume Traded Stocks in NSE - BSE High Volume Stocks</h4>
    <p>This page will predominantly show the list of <b>Top Traded stocks by VOLUME</b>. The top strip shows the indices like SENSEX, NIFTY for the trader or investor to know where the market is/are heading.</p>
    <p>Below that is the major section, the list of <b>Top volume Stocks NSE</b>. The list is divided into Equity – Derivatives – Commodities - Currencies for the user to alternate between any. Below that are the toggle buttons for Volume - Value and NSE – BSE, one can alternate immediately between either and the list is updated in a flash.  Volume will be selected by default since the list is of Top Traded Stock by Value, however, users can select the Volume button and the list will show the Top Traded stocks by Volume. On the right is the dropdown box to select from any index and the list will change accordingly. Use the refresh button on the right edge of the list to show the updates.</p>
    <p>The list will show with the LTP – Change (%) - Volume – Traded Value for easier reference. The user can click on the stock and it will be redirected to the dedicated stock page where the user can then perform in-depth research, BUY/SELL or other subsidiary actions.</p>
    `,
      "market/derivatives/top-gainers": `<h4 class="heading padding-0 bold mb-20">F&O Top Gainers</h4>
    <p>Derivatives happen to be the most popular segment worldwide including India. Futures and Options happen to be the most common type of derivatives. Derivatives carry a high risk to reward ratio hence the popularity. <b>Top F&O Gainers</b> can help traders to pick their trades with a favourable point of view.</p>
    &nbsp;&nbsp;
    <h4 class="heading padding-0 bold mb-20">NSE Futures and Options</h4>
    <p>This section is to make it easier for traders to see which are the <b>Top Gainers in F&O</b> and plan accordingly. The top strip shows the indices like SENSEX, NIFTY for the trader or investor to know where the market is or heading.</p>
    <p>Below that is the major section, the list of <b>NSE f&o top gainers</b> which is selected by default. The list is divided into Equity – Derivatives – Commodities - Currencies for the user to alternate between any. Below that are the toggle buttons for Gainer - Loser and NSE – BSE, one can alternate immediately between either and the list is updated in a flash.  Gainer will be selected by default since the list is of <b>top gainers in F&O</b>, however, users can switch the button to loser and the list will show the <b>top losers in F&O</b>. The other switch is Change – OI to alternate between top change (%) and top OI & OI Change (%) to give an overall view. On the right is the dropdown box to select from STOCK F&O and INDEX F&O and the list will change accordingly. Use the refresh button on the right edge of the list to show the updates.</p>
    <p>The list will show with the LTP – Change (%) - Volume – Traded Value – OI – OI Change (%) for easier reference. The user can click on the stock and it will be redirected to the dedicated stock page where the user can then perform in-depth research, BUY/SELL or other subsidiary actions.</p>
    `,
      "market/derivatives/top-value": `<h4 class="heading padding-0 bold mb-20">Most Active Stock Options Today</h4>
    <p>This page tracks the popular and <b>most active stock options for today</b>. Futures and Options happen to be the most common type of derivatives. Value in the context of options means total traded value of particular stock options due to some forthcoming event to speculation. The list on this page can help traders to pick their trades with a favourable point of view.</p>
    &nbsp;&nbsp;
    <h4 class="heading padding-0 bold mb-20">Most Active Value F&O Stocks</h4>
    <p>This section is to make it easier for traders to see which are the <b>Top F&O Value Stocks</b> and plan accordingly. The top strip shows the indices like SENSEX, NIFTY for the trader or investor to know where the market is or heading.</p>
    <p>Below that is the major section, the list of Top stock options. The list is divided into Equity – Derivatives – Commodities - Currencies for the user to alternate between any. Below that is the toggle button for Volume – Value, one can alternate immediately between either and the list is updated in a flash. Value will be selected by default since the list is of <b>Top F&O Value Stocks</b>, however, users can switch the button to Volume and the list will refresh as per the selection. On the right is the dropdown box to select from STOCK F&O and INDEX F&O and the list will change accordingly. Use the refresh button on the right edge of the list to show the updates.</p>
    <p>The list will show with the LTP – Change (%) - Volume – Traded Value – OI – OI Change (%) for easier reference. The user can click on the stock and it will be redirected to the dedicated stock page where the user can then perform in-depth research, BUY/SELL or other subsidiary actions.</p>
    `,
      "market/derivatives/top-volume": `<h4 class="heading padding-0 bold mb-20">Best stocks for options trading</h4>
    <p>This page tracks the <b>popular options volume for today</b>. Futures and Options happen to be the most common type of derivatives. Volume in the context of options means bulk trading in particular stock options. The list on this page shows the <b>best stocks for options trading 2021</b> which can help traders to pick their trades with a favourable point of view.</p>
    &nbsp;&nbsp;
    <h4 class="heading padding-0 bold mb-20">High volume options stocks</h4>
    <p>This section is to make it easier for traders to see which are the <b>Top F&O Volume Stocks</b> and plan accordingly. The top strip shows the indices like SENSEX, NIFTY for the trader or investor to know where the market is or heading.</p>
    <p>Below that is the major section, the list of <b>Top stock options by volume</b>. The list is divided into Equity – Derivatives – Commodities - Currencies for the user to alternate between any. Below that is the toggle button for Volume – Value, one can alternate immediately between either and the list is updated in a flash. Volume will be selected by default since the list is of <b>top F&O volume stocks</b>, however, users can switch the button to Volume and the list will refresh as per the selection. On the right is the dropdown box to select from STOCK F&O and INDEX F&O and the list will change accordingly. Use the refresh button on the right edge of the list to show the updates.</p>
    <p>The list will show with the LTP – Change (%) - Volume – Traded Value – OI – OI Change (%) for easier reference. The user can click on the stock and it will be redirected to the dedicated stock page where the user can then perform in-depth research, BUY/SELL or other subsidiary actions.</p>`,
      "market/currency/top-gainers": `<h4 class="heading padding-0 bold mb-20">Currency gainers - Forex top movers today</h4>
    <p>Currency or the currency market is the largest investment segment in the world.  This growth is due to retail traders who find it suitable for their investment goals. In this list we provide the <b>Forex top movers</b> for the traders to expand their portfolio.</p>
    &nbsp;&nbsp;
    <h4 class="heading padding-0 bold mb-20">Forex top gainers</h4>
    <p>This section is to make it easier for traders to see which are the top <b>Forex market movers</b> and plan accordingly. The top strip shows the indices like SENSEX, NIFTY for the trader or investor to know where the market is or heading.
    </p>
    <p>Below that is the major section, the list of <b>Forex top gainers</b> which is selected by default. The list is divided into Equity – Derivatives – Commodities - Currencies for the user to alternate between any Currencies is selected by default. Below that are the toggle buttons for Gainer - Loser and Change - OI, one can alternate immediately between either and the list is updated in a flash.  Gainer will be selected by default since the list is of <b>Top Gainers in Forex</b>, however, user can switch the button to loser and the list will show the <b>Top Losers in Forex</b>. The other switch is Change – OI to alternate between top change (%) and top OI & OI Change (%) to give an overall view. On the right is the dropdown box to select from STOCK FUTURES and STOCK OPTIONS and the list will change accordingly. Use the refresh button on the right edge of the list to show the updates.</p>
    <p>The list will show with the LTP – Change (%) - Volume – Traded Value – OI – OI Change (%) for easier reference. The user can click on the stock and it will be redirected to the dedicated stock page where the user can then perform in-depth research, BUY/SELL or other subsidiary actions.</p>
    `
    };
  }
  static {
    this.ctorParameters = () => [{
      type: _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_5__.SeoService
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute
    }, {
      type: _services_rest_market_service__WEBPACK_IMPORTED_MODULE_4__.MarketService
    }, {
      type: _angular_common__WEBPACK_IMPORTED_MODULE_12__.Location
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router
    }, {
      type: _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_3__.UtilsService
    }, {
      type: _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_2__.SharedDataService
    }, {
      type: src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_6__.AnalyticsService
    }];
  }
};
GainerLoserComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
  selector: 'app-gainer-loser',
  template: _gainer_loser_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_16__.NgxDatatableModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLink, _pipes_segment_pipe__WEBPACK_IMPORTED_MODULE_9__.SegmentPipe, _pipes_condense_pipe__WEBPACK_IMPORTED_MODULE_8__.CondensePipe, _pipes_value_pipe__WEBPACK_IMPORTED_MODULE_7__.ValuePipe],
  styles: [(_gainer_loser_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__metadata)("design:paramtypes", [_services_seo_seo_service__WEBPACK_IMPORTED_MODULE_5__.SeoService, _angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute, _services_rest_market_service__WEBPACK_IMPORTED_MODULE_4__.MarketService, _angular_common__WEBPACK_IMPORTED_MODULE_12__.Location, _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router, _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_3__.UtilsService, _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_2__.SharedDataService, src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_6__.AnalyticsService])], GainerLoserComponent);


/***/ }),

/***/ 85485:
/*!*****************************************!*\
  !*** ./src/app/market/market.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MarketModule: () => (/* binding */ MarketModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _guards_basic_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../guards/basic.guard */ 72972);
/* harmony import */ var _services_rest_market_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/rest/market.service */ 23369);
/* harmony import */ var _gainer_loser_gainer_loser_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gainer-loser/gainer-loser.component */ 49927);
/* harmony import */ var _oi_spurts_oi_spurts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./oi-spurts/oi-spurts.component */ 40305);







/** fixed config for market pages */
const routeConfig = {
  header: true,
  footer: true,
  indices: false,
  betaFooter: false,
  ticker: true,
  watchlist: false,
  freshChat: false
};
const MarketRoutes = [{
  path: "indices",
  loadChildren: () => __webpack_require__.e(/*! import() */ 2768).then(__webpack_require__.bind(__webpack_require__, /*! ./global-indices/global-indices.routing */ 2768)).then(m => m.GlobalIndicesRoutes),
  canActivate: [_guards_basic_guard__WEBPACK_IMPORTED_MODULE_0__.BasicGuard],
  data: {
    config: routeConfig
  }
}, {
  path: "overview",
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(5814), __webpack_require__.e(2076), __webpack_require__.e(6640)]).then(__webpack_require__.bind(__webpack_require__, /*! ./market-overview/market-overview.routing */ 36640)).then(m => m.MarketRoutes),
  canActivate: [_guards_basic_guard__WEBPACK_IMPORTED_MODULE_0__.BasicGuard],
  data: {
    config: routeConfig
  }
}, {
  path: "scheme",
  canActivate: [],
  loadChildren: () => __webpack_require__.e(/*! import() */ 4060).then(__webpack_require__.bind(__webpack_require__, /*! ./secure-products/secure-products.module */ 64060)).then(m => m.SecureProductsModule),
  data: {
    preload: true,
    delay: false
  }
}, {
  path: "oi-spurts",
  component: _oi_spurts_oi_spurts_component__WEBPACK_IMPORTED_MODULE_3__.OiSpurtsComponent,
  canActivate: [_guards_basic_guard__WEBPACK_IMPORTED_MODULE_0__.BasicGuard],
  data: {
    config: routeConfig
  }
}, {
  path: ":segmentType/:category",
  component: _gainer_loser_gainer_loser_component__WEBPACK_IMPORTED_MODULE_2__.GainerLoserComponent,
  canActivate: [_guards_basic_guard__WEBPACK_IMPORTED_MODULE_0__.BasicGuard],
  data: {
    config: routeConfig
  }
}, {
  path: ":segmentType/:category/:segmentName",
  component: _gainer_loser_gainer_loser_component__WEBPACK_IMPORTED_MODULE_2__.GainerLoserComponent,
  canActivate: [_guards_basic_guard__WEBPACK_IMPORTED_MODULE_0__.BasicGuard],
  data: {
    config: routeConfig
  }
}];
let MarketModule = class MarketModule {};
MarketModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(MarketRoutes)],
  providers: [_services_rest_market_service__WEBPACK_IMPORTED_MODULE_1__.MarketService]
})], MarketModule);


/***/ }),

/***/ 40305:
/*!*********************************************************!*\
  !*** ./src/app/market/oi-spurts/oi-spurts.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OiSpurtsComponent: () => (/* binding */ OiSpurtsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _oi_spurts_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./oi-spurts.component.html?ngResource */ 13763);
/* harmony import */ var _oi_spurts_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./oi-spurts.component.scss?ngResource */ 3331);
/* harmony import */ var _oi_spurts_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_oi_spurts_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var src_app_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/shared-data/shared-data.service */ 46013);
/* harmony import */ var src_app_services_rest_market_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/rest/market.service */ 23369);
/* harmony import */ var src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/utils/utils.service */ 89893);
/* harmony import */ var src_app_services_seo_seo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/seo/seo.service */ 44897);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 1807);
/* harmony import */ var _pipes_value_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pipes/value.pipe */ 50615);
/* harmony import */ var _pipes_condense_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/condense.pipe */ 82203);
/* harmony import */ var _pipes_segment_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pipes/segment.pipe */ 39995);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 33380);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 89417);















let OiSpurtsComponent = class OiSpurtsComponent {
  /**
   * Initialization Of Objects
   * @param shared SharedDataService instance
   * @param rest MarketService instance
   * @param utils UtilsService instance
   * @param seo SeoService instance
   */
  constructor(shared, rest, utils, seo) {
    this.shared = shared;
    this.rest = rest;
    this.utils = utils;
    this.seo = seo;
    this.oiSpurtsData = [];
    this.selectedConfig = {
      filter: 1,
      OISpurtsType: 1,
      segmentId: 2,
      DerivativeDataType: 1,
      DerivativeType: 1,
      ProductType: 2
    };
    this.dropDownData = {
      "2": [{
        IndexName: 'Index Futures',
        Token: 1,
        DerivativeType: 1,
        DerivativeDataType: 2
      }, {
        IndexName: 'Index Options',
        Token: 2,
        DerivativeType: 2,
        DerivativeDataType: 2
      }, {
        IndexName: 'Stock Futures',
        Token: 3,
        DerivativeType: 1,
        DerivativeDataType: 1
      }, {
        IndexName: 'Stock Options',
        Token: 4,
        DerivativeType: 2,
        DerivativeDataType: 1
      }],
      "5": [{
        IndexName: 'Stock Options',
        Token: 4,
        DerivativeType: 2,
        DerivativeDataType: 1
      }, {
        IndexName: 'Stock Futures',
        Token: 3,
        DerivativeType: 1,
        DerivativeDataType: 1
      }],
      "7": [{
        IndexName: 'Stock Futures',
        Token: 3,
        DerivativeType: 1,
        DerivativeDataType: 1
      }],
      "13": [{
        IndexName: 'Stock Options',
        Token: 4,
        DerivativeType: 2,
        DerivativeDataType: 1
      }, {
        IndexName: 'Stock Futures',
        Token: 3,
        DerivativeType: 1,
        DerivativeDataType: 1
      }]
    };
    this.Math = Math;
    this.cssClasses = {
      sortAscending: 'icon-angle-down',
      sortDescending: 'icon-angle-up',
      pagerLeftArrow: 'icon-angle-left',
      pagerRightArrow: 'icon-angle-right',
      pagerPrevious: 'icon-angle-left',
      pagerNext: 'icon-angle-right'
    };
    this.fetchOISpurts();
    this.seo.setMeta('oi-spurts');
  }
  ngOnInit() {
    this.refreshSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.timer)(60000, 60000).subscribe(() => {
      this.fetchOISpurts();
    });
  }
  ngOnDestroy() {
    if (this.refreshSubscription) this.refreshSubscription.unsubscribe();
  }
  activateFilter(tabIndex) {
    this.selectedConfig.filter = tabIndex;
    this.selectedConfig.segmentId = tabIndex == 1 ? 2 : tabIndex == 2 ? this.exchangeToggle ? 7 : 5 : 13;
    this.selectedConfig.ProductType = 0;
    this.selectedConfig.DerivativeDataType = this.dropDownData[this.selectedConfig.segmentId][0].DerivativeDataType;
    this.selectedConfig.DerivativeType = this.dropDownData[this.selectedConfig.segmentId][0].DerivativeType;
    this.fetchOISpurts();
  }
  onToggleChange() {
    this.selectedConfig.segmentId = this.exchangeToggle ? 7 : 5;
    this.selectedConfig.ProductType = 0;
    this.selectedConfig.DerivativeDataType = this.dropDownData[this.selectedConfig.segmentId][0].DerivativeDataType;
    this.selectedConfig.DerivativeType = this.dropDownData[this.selectedConfig.segmentId][0].DerivativeType;
    this.fetchOISpurts();
  }
  onSpurtsTypeChange(spurtsType) {
    this.selectedConfig.OISpurtsType = spurtsType;
    this.fetchOISpurts();
  }
  onDropDownChange() {
    let item = this.dropDownData[this.selectedConfig.segmentId][this.selectedConfig.ProductType];
    this.selectedConfig.DerivativeDataType = item.DerivativeDataType;
    this.selectedConfig.DerivativeType = item.DerivativeType;
    this.fetchOISpurts();
  }
  fetchOISpurts() {
    let request = {
      "SegmentId": this.selectedConfig.segmentId,
      "DerivativeType": this.selectedConfig.DerivativeType,
      "DerivativeDataType": this.selectedConfig.DerivativeDataType,
      "OISpurtsType": this.selectedConfig.OISpurtsType
    };
    this.oiSpurtsData = [];
    this.rest.getOISpurtsData(request).subscribe(res => {
      if (res.Status == "Success" && res.Response) {
        res.Response.MostActiveList.forEach((element, index) => {
          let LTP = element.LTP;
          let percent = element.PerChange;
          let change = LTP * percent / (100 + percent);
          let priceDivisor = element.PriceDivisor;
          element.LTP = LTP / priceDivisor;
          element.Change = change / priceDivisor;
          element.percent = percent;
          element.textColor = percent > 0 ? 'text-green' : percent == 0 ? '' : 'text-pink';
          element.oiColor = element.OIPerChange > 0 ? 'text-green' : element.OIPerChange < 0 ? 'text-pink' : '';
          let companyPath = element["SecDesc"].replace(/[\s|\&|\%]/g, '').toLowerCase();
          let urlPrefix = '/instrument/' + ([1, 2, 3, 4].indexOf(this.selectedConfig.segmentId) > -1 ? 'equity/' : [5, 7].indexOf(this.selectedConfig.segmentId) > -1 ? 'commodity/' : 'currency/');
          element.companyURL = urlPrefix + companyPath + '/' + this.selectedConfig.segmentId + '/' + element.Token;
        });
        this.oiSpurtsData = res.Response.MostActiveList;
      } else {
        this.oiSpurtsData = [];
      }
    }, err => {});
  }
  navigateToOpenFreeAccount() {
    window.open(`${this.utils.getChoiceindiaBaseURL()}/open-free-demat-account?utm_source=choice-finx-web&utm_medium=open_demat_account_banner&utm_campaign=choice_finx_demat_banner`, "_self");
  }
  static {
    this.ctorParameters = () => [{
      type: src_app_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_2__.SharedDataService
    }, {
      type: src_app_services_rest_market_service__WEBPACK_IMPORTED_MODULE_3__.MarketService
    }, {
      type: src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_4__.UtilsService
    }, {
      type: src_app_services_seo_seo_service__WEBPACK_IMPORTED_MODULE_5__.SeoService
    }];
  }
};
OiSpurtsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-oi-spurts',
  template: _oi_spurts_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_13__.NgxDatatableModule, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterLink, _pipes_segment_pipe__WEBPACK_IMPORTED_MODULE_8__.SegmentPipe, _pipes_condense_pipe__WEBPACK_IMPORTED_MODULE_7__.CondensePipe, _pipes_value_pipe__WEBPACK_IMPORTED_MODULE_6__.ValuePipe],
  styles: [(_oi_spurts_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__metadata)("design:paramtypes", [src_app_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_2__.SharedDataService, src_app_services_rest_market_service__WEBPACK_IMPORTED_MODULE_3__.MarketService, src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_4__.UtilsService, src_app_services_seo_seo_service__WEBPACK_IMPORTED_MODULE_5__.SeoService])], OiSpurtsComponent);


/***/ }),

/***/ 74769:
/*!****************************************************************************!*\
  !*** ./src/app/market/gainer-loser/gainer-loser.component.scss?ngResource ***!
  \****************************************************************************/
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
.table > thead > tr > th,
.table > thead > tr > td,
.table > tbody > tr > th,
.table > tbody > tr > td,
.table > tfoot > tr > th,
.table > tfoot > tr > td {
  padding: 10px;
  line-height: 1.42857143;
  vertical-align: top;
  border-top: 1px solid #ddd;
  font-size: 12px;
}

.table > thead > tr > th {
  border-top: none;
}
.table > thead > tr > th h1 {
  font-size: 13px;
  line-height: 1.42857143;
  margin: 0;
  font-weight: bold;
}

@media screen and (max-width: 480px) {
  .wd100 {
    width: 100%;
  }
}
.form-control:focus {
  border-color: #fe636e;
  border-color: #2D77F4;
  outline: 0;
}

.switch-wrap {
  margin: 0px;
  padding: 10px 30px;
}
@media (max-width: 560px) {
  .switch-wrap {
    padding: 10px 15px;
  }
}
.switch-wrap .switch {
  width: 37px;
  height: 18px;
}
.switch-wrap .switch input:checked + .slider:before {
  transform: translateX(15px);
}
.switch-wrap .slider {
  background: #004393;
}
.switch-wrap .slider:before {
  background-color: #ffffff;
  height: 14px;
  width: 14px;
  bottom: 1px;
}
@media (max-width: 400px) {
  .switch-wrap {
    margin-bottom: 10px;
  }
}
.switch-wrap + .switch-wrap {
  margin-left: 25px;
  padding-left: 25px;
}
@media (max-width: 560px) {
  .switch-wrap + .switch-wrap {
    margin-left: 0px;
    padding-left: 10px;
  }
}

@media (max-width: 560px) {
  .switch-changeoi {
    float: right !important;
  }
}

@media (max-width: 560px) {
  .equity-switch-wrap {
    padding: 10px 10px;
  }
}

.no-data-section {
  position: absolute;
  top: 50%;
  width: 100%;
  text-align: center;
  color: #ccc;
  font-size: 17px;
  font-weight: bold;
}

.nav-tabs {
  display: flex;
}
@media (max-width: 1550px) {
  .nav-tabs {
    margin-bottom: 10px !important;
  }
}
.nav-tabs li a {
  padding: 8px 30px;
  font-size: 14px;
  color: #797979;
  font-weight: 500;
  text-transform: capitalize;
}
.nav-tabs li.active a {
  font-weight: 600;
}

@media (max-width: 560px) {
  .mobile-table {
    margin-top: 15px;
  }
}

.custom-height {
  min-height: 300px;
}

.btn.btn-gradient {
  padding: 8px 12px 4px;
}

.section-one {
  margin-bottom: 10px;
}
@media (max-width: 560px) {
  .section-one .card-block {
    padding: 10px;
  }
}

.table-custom {
  padding: 10px;
}

.seo-section .heading {
  color: #000;
}

.portfolio-dropdown {
  float: right;
}
@media (max-width: 560px) {
  .portfolio-dropdown {
    width: 45%;
    right: 10px;
  }
}
.portfolio-dropdown form {
  margin-left: -15px;
  margin-right: -15px;
}
.portfolio-dropdown form .form-control {
  height: 32px;
  border-radius: 4px;
  padding: 6px 14px;
}

.ngx-datatable .datatable-header .datatable-header-cell .datatable-header-cell-template-wrap {
  color: #000;
}

.p0 {
  padding: 0;
}

.pagination {
  display: inline-block;
  width: 100%;
  margin: 10px 0;
  display: flex;
  justify-content: flex-end;
}
.pagination .element {
  float: left;
  margin: 0 2px;
  padding: 0.2em 0.2em 0.4em;
  font-size: 14px;
  text-align: center;
  cursor: pointer;
  border-radius: 4px;
}
.pagination .element.page {
  display: block;
}
.pagination .element.hidden {
  display: none;
}
.pagination .element.selected {
  background: red;
  color: #ffffff;
}
.pagination .element.static:hover {
  color: #1862F2;
  font-weight: 700;
}`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 3331:
/*!**********************************************************************!*\
  !*** ./src/app/market/oi-spurts/oi-spurts.component.scss?ngResource ***!
  \**********************************************************************/
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
.pagination > li > a,
.pagination > li > span {
  color: black;
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
  cursor: default;
  background: #004393;
  border-color: #004393;
}

.no-data-section {
  position: absolute;
  top: 50%;
  width: 100%;
  text-align: center;
  color: #ccc;
  font-size: 17px;
  font-weight: bold;
}

.custom-height {
  min-height: 300px;
}

.btn.btn-gradient {
  padding: 8px 12px 4px;
}

div.row {
  position: relative;
}

@media (max-width: 560px) {
  .oi-spruts-pagenation {
    display: flex;
    overflow-x: scroll;
  }
}
@media (max-width: 560px) {
  .oi-spruts-pagenation li a {
    font-size: 11px;
  }
}

.nav-tabs {
  display: flex;
}

.pagination {
  display: inline-block;
  padding-left: 0;
  border-radius: 4px;
}
.pagination .active > a {
  z-index: 3;
  color: #ffffff;
  cursor: default;
  background: #004393;
  border-color: #004393;
}
.pagination > li {
  display: inline;
}
.pagination > li > a {
  position: relative;
  float: left;
  padding: 6px 12px;
  line-height: 1.428571429;
  text-decoration: none;
  color: #000;
  border: 1px solid #ddd;
  font-size: 12px;
}
.pagination > li:first-child a {
  margin-left: 0;
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;
}
.pagination > li:last-child a {
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
}

.portfolio-dropdown .form-control {
  display: block;
  width: 100%;
  height: 34px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.428571429;
  border-radius: 4px;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
}`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 42905:
/*!****************************************************************************!*\
  !*** ./src/app/market/gainer-loser/gainer-loser.component.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container-fluid\">\r\n  <section class=\"section-one card\">\r\n    <div class=\"card-block clearfix\" id=\"overview\">\r\n      @if (tableData.length == 0 && shared.isServiceHit) {\r\n        <img class=\"loader\" src=\"assets/images/loader.gif\" />\r\n      }\r\n        <button class=\"btn btn-gradient pull-right btn-repeat\" (click)=\"refresh()\" aria-label=\"repeat\"><i class=\"fa icon-repeat\" aria-hidden=\"true\"></i></button>\r\n        <ul class=\"nav nav-tabs mb-30 reset\">\r\n          <li [class.active]=\"activeTab==1\" (click)=\"activateFilter(1)\">\r\n            <a>Equity</a>\r\n          </li>\r\n          <li [class.active]=\"activeTab==2\" (click)=\"activateFilter(2)\">\r\n            <a>Derivatives</a>\r\n          </li>\r\n          <li [class.active]=\"activeTab==3\" (click)=\"activateFilter(3)\">\r\n            <a>Commodities</a>\r\n          </li>\r\n          <li [class.active]=\"activeTab==4\" (click)=\"activateFilter(4)\">\r\n            <a>Currencies</a>\r\n          </li>\r\n        </ul>\r\n    \r\n      \r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 \">\r\n          <div class=\" pull-left switch-wrap equity-switch-wrap \">\r\n            <label class=\"control-label mr-10\" [class.selected]=\"!marketTypeToggle\"\r\n              (click)=\"onLabelToggle('marketType',false)\">{{marketType.indexOf('top-volume')>-1\r\n            || marketType.indexOf('top-value')>-1?'Volume':'Gainer'}}</label>\r\n            <label class=\"switch\">\r\n              <input type=\"checkbox\" name=\"marketTypeToggle\" [(ngModel)]=\"marketTypeToggle\"\r\n                (change)=\"onMarketTypeChange(marketTypeToggle)\">\r\n                <div class=\"slider round\"></div>\r\n              </label>\r\n              <label class=\"control-label ml-10\" [class.selected]=\"marketTypeToggle\"\r\n                (click)=\"onLabelToggle('marketType',true)\">{{marketType.indexOf('top-volume')>-1\r\n              || marketType.indexOf('top-value')>-1?'Value':'Loser'}}</label>\r\n            </div>\r\n            @if (activeTab !== 1&&marketType!=='top-volume'&&marketType!=='top-value') {\r\n              <div\r\n                class=\" pull-left switch-wrap switch-changeoi\">\r\n                <label class=\"control-label mr-10\" [class.selected]=\"!subMarketTypeToggle\"\r\n                  (click)=\"onLabelToggle('subMarketType',false)\">Change\r\n                </label>\r\n                <label class=\"switch\">\r\n                  <input type=\"checkbox\" name=\"subMarketTypeToggle\" [(ngModel)]=\"subMarketTypeToggle\"\r\n                    (change)=\"onSubMarketTypeChange(subMarketTypeToggle)\">\r\n                    <div class=\"slider round\"></div>\r\n                  </label>\r\n                  <label class=\"control-label ml-10\" [class.selected]=\"subMarketTypeToggle\"\r\n                    (click)=\"onLabelToggle('subMarketType',true)\">OI\r\n                  </label>\r\n                </div>\r\n              }\r\n              @if (activeTab == 1 || activeTab == 3) {\r\n                <div class=\" pull-left switch-wrap\">\r\n                  <label class=\"control-label mr-10\" [class.selected]=\"!exchangeToggle\"\r\n                  (click)=\"onLabelToggle('exchangeType',false)\">{{market[activeTab].globalConfig.toggle[0].label}}</label>\r\n                  <label class=\"switch\">\r\n                    <input type=\"checkbox\" name=\"exchangeToggle\" [(ngModel)]=\"exchangeToggle\" (change)=\"onExchangeChange()\">\r\n                    <div class=\"slider round\"></div>\r\n                  </label>\r\n                  <label class=\"control-label ml-10\" [class.selected]=\"exchangeToggle\"\r\n                  (click)=\"onLabelToggle('exchangeType',true)\">{{market[activeTab].globalConfig.toggle[1].label}}</label>\r\n                </div>\r\n              }\r\n              <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-4 portfolio-dropdown\">\r\n                <form class=\"form-horizontal\" role=\"form\">\r\n                  <div class=\"form-group\">\r\n                    <div class=\"col-md-12\">\r\n                      <select id=\"basic2\" name=\"productType\" class=\"marketdropdown show-tick form-control\"\r\n                        [(ngModel)]=\"dropdownFilter\" (change)=\"onDropDownChange()\" aria-label=\"product type\">\r\n                        @for (item of indexList; track item) {\r\n                          <option value=\"{{item.Token}}\">{{item.IndexName}}</option>\r\n                        }\r\n                      </select>\r\n                    </div>\r\n                  </div>\r\n                </form>\r\n              </div>\r\n\r\n            </div>\r\n            <div class=\"clearfix\"></div>\r\n            <div class=\"col-md-12 custom-height\">\r\n              <div class=\"\">\r\n                <div class=\"\">\r\n                  <div class=\"table-custom \">\r\n                    @if (tableData?.length) {\r\n                      <ngx-datatable #holdingsTable class=\"material\" [cssClasses]=\"cssClasses\"\r\n                        [columnMode]=\"'force'\" [rows]=\"tableData\" [footerHeight]=\"50\" [limit]=\"10\" [reorderable]=\"false\"\r\n                        [headerHeight]=\"'auto'\" [scrollbarH]=\"true\" [rowHeight]=\"'auto'\">\r\n                  <ngx-datatable-column [width]=\"80\" [name]=\"tableTitle\" prop=\"{{(activeTab == 3 ||\r\n                    activeTab == 4)?'Name':'SecDesc'}}\" [resizeable]=\"false\">\r\n                          <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                            <div class=\"text-left\"><a [routerLink]=\"[row.companyURL]\"\r\n                              title=\"{{(activeTab == 3 || activeTab == 4)?row.SecDesc:row.Name}}\">{{(activeTab\r\n                              == 3 ||\r\n                            activeTab == 4)?row.Name:row.SecDesc}}</a>\r\n                          </div>\r\n                        </ng-template>\r\n                      </ngx-datatable-column>\r\n                      <ngx-datatable-column name=\"LTP\" prop=\"LTP\" [width]=\"50\" [resizeable]=\"false\">\r\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                          <div class=\"text-right  \">{{row.LTP |segment: ((activeTab == 4)?13:1)}}\r\n                          </div>\r\n                        </ng-template>\r\n                      </ngx-datatable-column>\r\n                      <ngx-datatable-column name=\"Change(%)\" prop=\"percent\" [width]=\"50\" [resizeable]=\"false\">\r\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                          <div class=\"text-right {{row.textColor}}\">{{Math.abs(row.percent) |value : '1.2-2'}}\r\n                          </div>\r\n                        </ng-template>\r\n                      </ngx-datatable-column>\r\n                      <ngx-datatable-column name=\"Volume\" prop=\"Volume\" [width]=\"50\" [resizeable]=\"false\">\r\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                          <div class=\"text-right\">{{row.Volume | condense}}\r\n                          </div>\r\n                        </ng-template>\r\n                      </ngx-datatable-column>\r\n                      @if (activeTab == 1) {\r\n                        <ngx-datatable-column name=\"Traded Value\" prop=\"TurnOver\" [resizeable]=\"false\"\r\n                          [width]=\"50\">\r\n                          <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                            <div class=\"text-right\">{{row.TurnOver | condense}}\r\n                            </div>\r\n                          </ng-template>\r\n                        </ngx-datatable-column>\r\n                      }\r\n                      @if (activeTab != 1) {\r\n                        <ngx-datatable-column name=\"OI\" prop=\"OI\" [width]=\"50\" [resizeable]=\"false\">\r\n                          <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                            <div class=\"text-right\">{{row.OI | condense}}\r\n                            </div>\r\n                          </ng-template>\r\n                        </ngx-datatable-column>\r\n                      }\r\n                      @if (activeTab != 1) {\r\n                        <ngx-datatable-column name=\"OI Change(%)\" prop=\"OI\" [width]=\"50\"\r\n                          [resizeable]=\"false\">\r\n                          <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                            <div class=\"text-right {{row.oiColor}}\">{{Math.abs(row.OIPerChange) |value : '1.2-2'}}\r\n                            </div>\r\n                          </ng-template>\r\n                        </ngx-datatable-column>\r\n                      }\r\n                    </ngx-datatable>\r\n                  }\r\n\r\n\r\n\r\n                  @if (tableData.length == 0 && !shared.isServiceHit) {\r\n                    <div class=\"no-data-section\">\r\n                      No Data Available\r\n                    </div>\r\n                  }\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n    </section>\r\n    <!-- <div class=\"pagination first\">\r\n    <span class=\"element static\" id=\"previous\"><</span>\r\n    <span class=\"element page\">1 to 9</span>\r\n    <span class=\"element static\" id=\"next\">></span>\r\n  </div> -->\r\n\r\n  <!-- Advert Banner :: Start -->\r\n  @if ((!shared.userId || shared.userId == 'guest')) {\r\n    <section>\r\n      <div class=\"container\" (click)=\"utilsService.navigateToOpenFreeAccount()\">\r\n        <div class=\"row add_banner_sub red-theme\">\r\n          <div class=\"col-md-6 add-left-text\">\r\n            <div class=\"add-left-sub\">\r\n              <h2>Wait! <span class=\"small-font\">Before You Go</span></h2>\r\n              <h4>OPEN A FREE</h4>\r\n              <h3>DEMAT ACCOUNT</h3>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6 add-right-text\">\r\n            <div class=\"add-right-sub\">\r\n              <ul>\r\n                <li><span>+</span> Zero Account Opening Fee </li>\r\n                <li><span>+</span> Free First Year AMC </li>\r\n                <li><span>+</span> Zero Square Off Charges </li>\r\n                <li><span>+</span> Zero Call for Trade Charges</li>\r\n              </ul>\r\n              <a class=\"add-btn\">OPEN MY ACCOUNT</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n  }\r\n\r\n  <!-- Added seo content (12/05/2021) -->\r\n  @if (seoContent[routeUrl]) {\r\n    <section class=\"clearfix \">\r\n      <div class=\"col-md-12 p0\">\r\n        <div class=\"card mb-0\">\r\n          <div class=\"card-block\" [innerHtml]=\"seoContent[routeUrl]\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n  }\r\n</div>";

/***/ }),

/***/ 13763:
/*!**********************************************************************!*\
  !*** ./src/app/market/oi-spurts/oi-spurts.component.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container-fluid\">\r\n\r\n  <section class=\"section-one card\">\r\n\r\n    <div class=\"card-block clearfix\">\r\n\r\n\r\n\r\n      <button class=\"btn btn-gradient pull-right btn-repeat\" (click)=\"fetchOISpurts()\" aria-label=\"repeat\"><i\r\n      class=\"fa icon-repeat\" aria-hidden=\"true\"></i></button>\r\n\r\n      <ul class=\"nav nav-tabs mb-10 reset\" >\r\n\r\n\r\n\r\n        <li [class.active]=\"selectedConfig?.filter==1\" (click)=\"activateFilter(1)\">\r\n\r\n          <a>Derivatives</a>\r\n\r\n        </li>\r\n\r\n        <li [class.active]=\"selectedConfig?.filter==2\" (click)=\"activateFilter(2)\">\r\n\r\n          <a>Commodities</a>\r\n\r\n        </li>\r\n\r\n        <li [class.active]=\"selectedConfig?.filter==3\" (click)=\"activateFilter(3)\">\r\n\r\n          <a>Currencies</a>\r\n\r\n        </li>\r\n\r\n      </ul>\r\n\r\n      <div class=\"row\">\r\n\r\n        @if (!oiSpurtsData?.length && shared.isServiceHit) {\r\n          <img class=\"loader\" src=\"assets/images/loader.gif\" />\r\n        }\r\n\r\n        <div class=\"col-md-12 \">\r\n\r\n          @if (selectedConfig?.filter==2) {\r\n            <div class=\" pull-left switch-wrap\">\r\n              <label class=\"control-label mr-10\" for=\"exchangeToggle\" [class.selected]=\"!exchangeToggle\">MCX</label>\r\n              <label class=\"switch\">\r\n                <input type=\"checkbox\" id=\"exchangeToggle\" name=\"exchangeToggle\" [(ngModel)]=\"exchangeToggle\"\r\n                  (change)=\"onToggleChange()\">\r\n                  <div class=\"slider round\"></div>\r\n                </label>\r\n                <label class=\"control-label ml-10\" for=\"exchangeToggle\" [class.selected]=\"exchangeToggle\">NCDEX</label>\r\n              </div>\r\n            }\r\n\r\n\r\n\r\n          <div class=\"col-lg-4 col-md-4 col-sm-4  pull-right portfolio-dropdown wd100\">\r\n\r\n              <form class=\"form-horizontal\" role=\"form\">\r\n\r\n                <div class=\"form-group\">\r\n\r\n                  <div class=\"col-md-12\">\r\n\r\n                    <select id=\"basic2\" name=\"productType\" class=\"show-tick form-control\"\r\n                      [(ngModel)]=\"selectedConfig.ProductType\" (change)=\"onDropDownChange()\" aria-label=\"product type\">\r\n\r\n                      @for (item of dropDownData[selectedConfig?.segmentId]; track item; let i = $index) {\r\n                        <option value=\"{{i}}\">\r\n                        {{item.IndexName}}</option>\r\n                      }\r\n\r\n                    </select>\r\n\r\n                  </div>\r\n\r\n                </div>\r\n\r\n              </form>\r\n\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"clearfix\"></div>\r\n\r\n          <div class=\"col-sm-12 col-md-12 text-center padding-0 mb25\">\r\n\r\n            <ul class=\"pagination mb25 oi-spruts-pagenation\">\r\n\r\n              <li [class.active]=\"selectedConfig?.OISpurtsType==1\" (click)=\"onSpurtsTypeChange(1)\">\r\n\r\n                <a>Long Built Up</a>\r\n\r\n              </li>\r\n\r\n              <li [class.active]=\"selectedConfig?.OISpurtsType==2\" (click)=\"onSpurtsTypeChange(2)\">\r\n\r\n                <a>Short Built Up</a>\r\n\r\n              </li>\r\n\r\n              <li [class.active]=\"selectedConfig?.OISpurtsType==3\" (click)=\"onSpurtsTypeChange(3)\">\r\n\r\n                <a>Short Covering</a>\r\n\r\n              </li>\r\n\r\n              <li [class.active]=\"selectedConfig?.OISpurtsType==4\" (click)=\"onSpurtsTypeChange(4)\">\r\n\r\n                <a>Long Liquidation</a>\r\n\r\n              </li>\r\n\r\n            </ul>\r\n\r\n          </div>\r\n\r\n          <div class=\"clearfix\"></div>\r\n\r\n          <div class=\"col-md-12 custom-height\">\r\n\r\n            <div class=\"\">\r\n\r\n              <div class=\"\">\r\n\r\n                <div class=\"table-custom\">\r\n\r\n                  @if (oiSpurtsData?.length) {\r\n                    <ngx-datatable #holdingsTable class=\"material\" [cssClasses]=\"cssClasses\"\r\n                      [columnMode]=\"'force'\" [rows]=\"oiSpurtsData\" [footerHeight]=\"50\" [limit]=\"10\" [reorderable]=\"false\"\r\n                      [headerHeight]=\"'auto'\" [scrollbarH]=\"true\" [rowHeight]=\"'auto'\">\r\n                  <ngx-datatable-column [width]=\"180\" [name]=\"tableTitle\" prop=\"{{(selectedConfig?.filter == 3 ||\r\n\r\n                      selectedConfig?.filter == 4)?'Name':'SecDesc'}}\" [resizeable]=\"false\">\r\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                          <div class=\"text-left\">\r\n                            <a [routerLink]=\"[row.companyURL]\" title=\"{{row.SecDesc}}\">{{row.Name}}</a>\r\n                          </div>\r\n                        </ng-template>\r\n                      </ngx-datatable-column>\r\n                      <ngx-datatable-column [width]=\"110\" name=\"LTP\" prop=\"LTP\" [resizeable]=\"false\">\r\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                          <div class=\"text-right\">{{row.LTP |segment: ((selectedConfig?.filter == 3)?13:1)}}\r\n                          </div>\r\n                        </ng-template>\r\n                      </ngx-datatable-column>\r\n                      <ngx-datatable-column [width]=\"110\" name=\"Change(%)\" prop=\"percent\" [resizeable]=\"false\">\r\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                          <div class=\"text-right {{row.textColor}}\">{{Math.abs(row.percent) |value : '1.2-2'}}\r\n                          </div>\r\n                        </ng-template>\r\n                      </ngx-datatable-column>\r\n                      <ngx-datatable-column [width]=\"110\" name=\"OI\" prop=\"OI\" [resizeable]=\"false\">\r\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                          <div class=\"text-right\">{{row.OI | condense}}\r\n                          </div>\r\n                        </ng-template>\r\n                      </ngx-datatable-column>\r\n                      <ngx-datatable-column [width]=\"110\" name=\"OI Change(%)\" prop=\"OIPerChange\" [resizeable]=\"false\">\r\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                          <div class=\"text-right {{row.oiColor}}\">{{Math.abs(row.OIPerChange) | condense}}\r\n                          </div>\r\n                        </ng-template>\r\n                      </ngx-datatable-column>\r\n                      <ngx-datatable-column [width]=\"110\" name=\"Volume\" prop=\"Volume\" [resizeable]=\"false\">\r\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                          <div class=\"text-right\">{{row.Volume | condense}}\r\n                          </div>\r\n                        </ng-template>\r\n                      </ngx-datatable-column>\r\n                      <ngx-datatable-column [width]=\"110\" name=\"Traded Value\" prop=\"TurnOver\" [resizeable]=\"false\">\r\n                        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                          <div class=\"text-right\">{{row.TurnOver | condense}}\r\n                          </div>\r\n                        </ng-template>\r\n                      </ngx-datatable-column>\r\n                    </ngx-datatable>\r\n                  }\r\n\r\n\r\n\r\n                  @if (oiSpurtsData?.length == 0 && !shared.isServiceHit) {\r\n                    <div class=\"no-data-section\">\r\n                      No Data Available\r\n                    </div>\r\n                  }\r\n\r\n                </div>\r\n\r\n              </div>\r\n\r\n            </div>\r\n\r\n          </div>\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </section>\r\n\r\n\r\n\r\n    <!-- added open an account banner (12/05/2021) -->\r\n\r\n    <!-- <section class=\"seo-section clearfix\" *ngIf=\"(!shared.userId || shared.userId == 'guest')\">\r\n\r\n    <div class=\"col-md-12\">\r\n\r\n      <div class=\"card mb-0\">\r\n\r\n        <div class=\"card-block\">\r\n\r\n          <img src=\"../../../assets/images/Open-Free-Account1.png\" alt=\"Online Stock Trading Platform\" class=\"img-responsive\" (click)=\"utils.navigateToOpenAccount()\"/>\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </section> -->\r\n\r\n  <!-- Advert Banner :: Start -->\r\n\r\n  @if ((!shared.userId || shared.userId == 'guest')) {\r\n    <section>\r\n      <div class=\"container\" (click)=\"navigateToOpenFreeAccount()\">\r\n        <div class=\"row add_banner_sub red-theme\">\r\n          <div class=\"col-md-6 add-left-text\">\r\n            <div class=\"add-left-sub\">\r\n              <h2>Wait! <span class=\"small-font\">Before You Go</span></h2>\r\n              <h4>OPEN A FREE</h4>\r\n              <h3>DEMAT ACCOUNT</h3>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6 add-right-text\">\r\n            <div class=\"add-right-sub\">\r\n              <ul>\r\n                <li><span>+</span> Zero Account Opening Fee </li>\r\n                <li><span>+</span> Free First Year AMC </li>\r\n                <li><span>+</span> Zero Square Off Charges </li>\r\n                <li><span>+</span> Zero Call for Trade Charges</li>\r\n              </ul>\r\n              <a class=\"add-btn\">OPEN MY ACCOUNT</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n  }\r\n\r\n\r\n\r\n  <section class=\"seo-section clearfix\">\r\n\r\n    <div class=\"col-md-12\">\r\n\r\n      <div class=\"card mb-0\">\r\n\r\n        <div class=\"card-block\">\r\n\r\n          <h4 class=\"heading padding-0 bold mb-20\">Open Interest Analysis - OI Spurts</h4>\r\n\r\n          <p><b>OI spurts</b> or open –interest spurts are only possible for derivatives – commodities – currencies\r\n          since trades in these 3 segments are contract based, hence, open interest. This page clubs all sorts of OI\r\n          for these 3 segments in 1 table to make it easier for investors.\r\n\r\n        </p>\r\n\r\n        &nbsp;&nbsp;\r\n\r\n        <h4 class=\"heading padding-0 bold mb-20\">Open interest options - open interest futures</h4>\r\n\r\n        <p>This section broadly divides each segment based <b>on increase in open interest and increase in price</b>\r\n        or decrease in open interest and decrease in price. The top strip shows the indices like SENSEX, NIFTY for\r\n      the trader or investor to know where the market is or heading. </p>\r\n\r\n      <p>Derivatives segment is selected by default and the user can alternate between commodities and currencies.\r\n      This can be used in tandem with 4 combinations provided,</p>\r\n\r\n      <ul>\r\n\r\n        <li>Rise in OI-Rise in Price</li>\r\n\r\n        <li>Rise in OI-Slide in Price</li>\r\n\r\n        <li>Slide in OI-Rise in Price</li>\r\n\r\n        <li>Slide in OI-Slide in Price</li>\r\n\r\n      </ul>\r\n\r\n      <p>Users can switch between any combinations and the list will be updated in a flash.</p>\r\n\r\n      <p>On the right is the dropdown box to select from INDEX FUTURES – INDEX OPTIONS - STOCK FUTURES and STOCK\r\n        OPTIONS and the list will change accordingly. Use the refresh button on the right edge of the list to show\r\n      the updates.</p>\r\n\r\n      <p>The list will show with the LTP – Change (%) - Volume – Traded Value – OI – OI Change (%) for easier\r\n        reference. The user can click on the stock and it will be redirected to the dedicated stock page where the\r\n      user can then perform in-depth research, BUY/SELL or other subsidiary actions.</p>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n</section>\r\n\r\n</div>";

/***/ })

}]);