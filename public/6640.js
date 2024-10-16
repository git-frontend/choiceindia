(self["webpackChunkjiffy_upgraded"] = self["webpackChunkjiffy_upgraded"] || []).push([[6640],{

/***/ 17209:
/*!*************************************************************!*\
  !*** ./src/app/market/commodities/commodities.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CommoditiesComponent: () => (/* binding */ CommoditiesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _commodities_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commodities.component.html?ngResource */ 9875);
/* harmony import */ var _commodities_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commodities.component.scss?ngResource */ 50523);
/* harmony import */ var _commodities_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_commodities_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/utils/utils.service */ 89893);
/* harmony import */ var _services_rest_market_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/rest/market.service */ 23369);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/analytics/analytics.service */ 50213);
/* harmony import */ var _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/shared-data/shared-data.service */ 46013);
/* harmony import */ var _services_sockets_socket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/sockets/socket.service */ 6312);
/* harmony import */ var src_app_services_seo_seo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/seo/seo.service */ 44897);
/* harmony import */ var _pipes_value_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pipes/value.pipe */ 50615);
/* harmony import */ var _pipes_condense_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../pipes/condense.pipe */ 82203);
/* harmony import */ var _pipes_segment_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../pipes/segment.pipe */ 39995);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 33380);
















/** commodities component view and scss linking*/
let CommoditiesComponent = class CommoditiesComponent {
  /**
   * dependency injection and variable intialization
   * @param marketService for api
   * @param utilsService for data manipulation
   * @param router for route navigation
   */
  constructor(shared, analytics, marketService, utilsService, router, socketService, seo) {
    this.shared = shared;
    this.analytics = analytics;
    this.marketService = marketService;
    this.utilsService = utilsService;
    this.router = router;
    this.socketService = socketService;
    this.seo = seo;
    /**
     * present tab
     */
    this.activeTab = 1;
    /**
     * present tab of grouped commodity
     */
    this.activeTabAnalysis = 1;
    /**
     * segementId of selected tab
     */
    this.segmentId = 5;
    /** tab for gainerLoser */
    this.gainerLoserTab = 4;
    this.activeCommodities = [];
    this.Math = Math;
    this.groupedCommodities = [];
    this.gainerLoserData = {
      'gainer': [],
      'loser': [],
      'tableData': []
    };
    this.cssClasses = {
      sortAscending: 'icon-angle-down',
      sortDescending: 'icon-angle-up',
      pagerLeftArrow: 'icon-angle-left',
      pagerRightArrow: 'icon-angle-right',
      pagerPrevious: 'icon-angle-left',
      pagerNext: 'icon-angle-right'
    };
    this.seo.setMeta('marketcommoditiesOverview');
  }
  /**
  * Two function is called on page load
  */
  ngOnInit() {
    this.getAllCommodities(this.activeTab);
    this.getGroupedCommodities(this.activeTabAnalysis);
    this.getDerivativeGainerLoser(this.gainerLoserTab);
    this.getSocketData();
    this.utilsService.setTrackMoeEvent('visitedCommoditiesOverview', {
      "User_ID": this.utilsService.getUserId() || 'guest',
      "IP": this.shared.IPAddress
    });
    this.analytics.emitEvent('visitedCommoditiesOverview', this.utilsService.getUserId() || 'guest', JSON.stringify({
      "IP": this.shared.IPAddress
    }), 1);
  }
  /**
   * On tab Change, class is added to selected tab and data changes
   * @param i prsent tab
   */
  activateFilter(i) {
    this.activeTab = i;
    this.getAllCommodities(this.activeTab);
    let segmentName = this.activeTab == 1 ? 'GOLD' : this.activeTab == 2 ? 'silver' : this.activeTab == 3 ? 'crude oil' : this.activeTab == 4 ? 'copper' : 'all commodities';
    this.analytics.commoditityMarketAll(segmentName);
  }
  /**
   * On GroupedCommodities tab Change, class is added to selected tab and data changes
   * @param count present tab
   */
  activateFilterAnalysis(count) {
    this.activeTabAnalysis = count;
    this.getGroupedCommodities(this.activeTabAnalysis);
    let segmentName = this.activeTab == 1 ? 'bullion' : this.activeTab == 2 ? 'energy' : this.activeTab == 3 ? 'Base Metals' : this.activeTab == 4 ? 'Agro' : 'others';
    this.analytics.commoditityMarketGroupedCommodity(segmentName);
  }
  /**
   * AllCommodities api is called, response is manipulated with respect to view
   * @param commodityType commodity type
   */
  getAllCommodities(commodityType) {
    let type = commodityType == 1 ? 'GOLD' : commodityType == 2 ? 'SILVER' : commodityType == 3 ? 'CRUDE' : commodityType == 4 ? 'COPPER' : 'ALL';
    let tokenArray = [];
    this.utilsService.unSubscribeMultitouchline(this.activeCommodities);
    this.utilsService.subscribeMultitouchline(this.groupedCommodities || []);
    this.activeCommodities = [];
    this.marketService.getAllCommodities(type).subscribe(res => {
      if (res.Status == "Success" && res.Response) {
        this.activeCommodities = res.Response;
        res.Response.forEach((element, index) => {
          let priceDivisor = res.Response[index].lMutilpleTouchlineData.PriceDivisor;
          let LTP = res.Response[index].lMutilpleTouchlineData.LTP / priceDivisor;
          let change = res.Response[index].lMutilpleTouchlineData.Change / priceDivisor;
          let prevClose = LTP - change;
          this.activeCommodities[index].lMutilpleTouchlineData.LTP = LTP;
          this.activeCommodities[index].SecName = this.activeCommodities[index].lExchangeScrip.SecName;
          this.activeCommodities[index].LTP = LTP;
          this.activeCommodities[index].prevClose = LTP - change;
          this.activeCommodities[index].SegmentId = this.activeCommodities[index].lExchangeScrip.SegmentId;
          this.activeCommodities[index].Token = this.activeCommodities[index].lExchangeScrip.Token;
          this.activeCommodities[index].lMutilpleTouchlineData.prevClose = LTP - change;
          this.activeCommodities[index].lMutilpleTouchlineData.class = change < 0 ? "red" : change > 0 ? "green" : "";
          this.activeCommodities[index].lMutilpleTouchlineData.changePercent = prevClose == 0 ? 0 : change / prevClose * 100;
          this.activeCommodities[index].Change = Math.abs(this.activeCommodities[index].lMutilpleTouchlineData.Change);
          this.activeCommodities[index].lMutilpleTouchlineData.Change = Math.abs(this.activeCommodities[index].lMutilpleTouchlineData.Change);
          this.activeCommodities[index].lMutilpleTouchlineData.changePercent = Math.abs(this.activeCommodities[index].lMutilpleTouchlineData.changePercent);
          this.activeCommodities[index].changePercent = prevClose == 0 ? 0 : change / prevClose * 100;
        });
        const userId = this.utilsService.getUserId();
        if (userId && userId != 'guest') {
          this.utilsService.subscribeMultitouchline(this.activeCommodities);
        }
      } else if (res.Reason == 'Data not found.') {
        this.activeCommodities = [];
      } else {
        this.utilsService.error('Error', "Something went wrong");
      }
    });
  }
  /**
   * GroupedCommodities api is called, response is manipulated with respect to view
   * @param commodityType commodity type
   */
  getGroupedCommodities(commodityType) {
    let type = commodityType == 1 ? 'BULLION' : commodityType == 2 ? 'ENERGY' : commodityType == 3 ? 'BASE METAL' : commodityType == 4 ? 'AGRO' : 'OTHERS';
    let tokenArray = [];
    this.utilsService.unSubscribeMultitouchline(this.groupedCommodities);
    this.utilsService.subscribeMultitouchline(this.activeCommodities || []);
    this.groupedCommodities = [];
    this.marketService.getGroupedCommodities(type).subscribe(res => {
      if (res.Status == "Success" && res.Response) {
        this.groupedCommodities = res.Response;
        res.Response.forEach((element, index) => {
          let priceDivisor = res.Response[index].lMutilpleTouchlineData.PriceDivisor;
          let LTP = res.Response[index].lMutilpleTouchlineData.LTP / priceDivisor;
          let change = res.Response[index].lMutilpleTouchlineData.Change / priceDivisor;
          let prevClose = LTP - change;
          this.groupedCommodities[index].lMutilpleTouchlineData.LTP = LTP;
          this.groupedCommodities[index].SecName = this.groupedCommodities[index].lExchangeScrip.SecName;
          this.groupedCommodities[index].LTP = LTP;
          this.groupedCommodities[index].SegmentId = this.groupedCommodities[index].lExchangeScrip.SegmentId;
          this.groupedCommodities[index].Token = this.groupedCommodities[index].lExchangeScrip.Token;
          this.groupedCommodities[index].prevClose = LTP - change;
          this.groupedCommodities[index].SegmentId = this.groupedCommodities[index].lExchangeScrip.SegmentId;
          this.groupedCommodities[index].Token = this.groupedCommodities[index].lExchangeScrip.Token;
          this.groupedCommodities[index].lMutilpleTouchlineData.prevClose = LTP - change;
          this.groupedCommodities[index].lMutilpleTouchlineData.class = change < 0 ? "red" : change > 0 ? "green" : "";
          this.groupedCommodities[index].lMutilpleTouchlineData.changePercent = prevClose == 0 ? 0 : change / prevClose * 100;
          this.groupedCommodities[index].lMutilpleTouchlineData.Change = Math.abs(this.groupedCommodities[index].lMutilpleTouchlineData.Change);
          this.groupedCommodities[index].lMutilpleTouchlineData.changePercent = Math.abs(this.groupedCommodities[index].lMutilpleTouchlineData.changePercent);
          this.groupedCommodities[index].changePercent = prevClose == 0 ? 0 : change / prevClose * 100;
        });
        const userId = this.utilsService.getUserId();
        if (userId && userId != 'guest') {
          this.utilsService.subscribeMultitouchline(this.groupedCommodities);
        }
      } else if (res.Reason == 'Data not found.') {
        this.groupedCommodities = [];
      } else {
        this.utilsService.error('Error', "Something went wrong");
      }
    });
  }
  /**
   * for ganier loser of commodities
   * @param index
   */
  getDerivativeGainerLoser(index) {
    let payload = {
      "SegmentId": 5,
      "MarketDataType": index,
      "DerivativeType": 1,
      "DerivativeDataType": 1
    };
    this.marketService.getActiveBySegmentDerivatives(payload).subscribe(res => {
      if (res.Status =  true && res.Response) {
        res.Response.MostActiveList.forEach((element, index) => {
          let LTP = res.Response.MostActiveList[index].LTP;
          let percent = res.Response.MostActiveList[index].PerChange;
          let change = LTP * percent / (100 + percent);
          let priceDivisor = res.Response.MostActiveList[index].PriceDivisor;
          res.Response.MostActiveList[index].LTP = LTP / priceDivisor;
          res.Response.MostActiveList[index].Change = change / priceDivisor;
          res.Response.MostActiveList[index].percent = percent;
          res.Response.MostActiveList[index].textColor = percent > 0 ? 'text-green' : percent == 0 ? '' : 'text-pink';
          res.Response.MostActiveList[index].Change = Math.abs(res.Response.MostActiveList[index].Change);
          res.Response.MostActiveList[index].percent = Math.abs(res.Response.MostActiveList[index].percent);
        });
        index == 4 ? this.gainerLoserData.gainer = res.Response.MostActiveList : this.gainerLoserData.loser = res.Response.MostActiveList;
        this.gainerLoserData.tableData = index == 4 ? this.gainerLoserData.gainer : this.gainerLoserData.loser;
      } else if (res.Reason == 'Data not found.') {
        index == 4 ? this.gainerLoserData.gainer = [] : this.gainerLoserData.loser = [];
      } else {
        this.utilsService.error('Error', "Something went Wrong");
      }
    });
  }
  /**
   * for tab change in gainer loser section
   * @param index gainer loser number
   */
  onChangeTab(index) {
    this.gainerLoserTab = index;
    if (this.gainerLoserData['loser'].length == 0) {
      this.getDerivativeGainerLoser(index);
    } else {
      this.gainerLoserData.tableData = index == 4 ? this.gainerLoserData.gainer : this.gainerLoserData.loser;
    }
  }
  /**
   *  On click of company name, it goes to company page
   * @param item company details
   */
  gotoCompanyPage(item) {
    let companyName = item["SecDesc"].replace(/[\s|\&|\%]/g, '').toLowerCase();
    let url = companyName + '/' + item.SegmentId + '/' + item.Token;
    this.router.navigate(['/instrument/commodity/' + url]);
    this.shared.saveRoutes('/instrument/commodity/' + url);
    let segmentToken = item.SegmentId + '&' + item.Token;
    localStorage.setItem('presentToken', JSON.stringify(segmentToken));
  }
  /**
   * Socket Connection Function
   */
  getSocketData() {
    this.multiLineSubscription = this.socketService.broadcaster.on('watchlist').subscribe(res => {
      let priceDivisor = this.utilsService.getDefaultPriceDivisor(res[0]["1"], res[0]["7"]);
      let groupScrip = this.groupedCommodities.filter((obj, index) => {
        return res[0]['1'] == obj.SegmentId && obj.Token == res[0]["7"];
      });
      if (groupScrip.length > 0 && this.utilsService.isUpdatedData(groupScrip[0], res[0])) {
        let groupObj = groupScrip[0];
        groupObj.prevClose = groupObj.prevClose || res[0]["76"] / priceDivisor;
        groupObj.LTP = res[0]["8"] == 0 ? groupObj.prevClose : res[0]["8"] / priceDivisor; // if LTP == 0 then show prevClose (11/05/2021)
        groupObj.lMutilpleTouchlineData.Change = groupObj.LTP - groupObj.prevClose;
        groupObj.changePercent = groupObj.lMutilpleTouchlineData.Change / groupObj.prevClose * 100;
      }
      let allGroupScrip = this.activeCommodities.filter((obj, index) => {
        return res[0]['1'] == obj.SegmentId && obj.Token == res[0]["7"];
      });
      if (allGroupScrip.length > 0 && this.utilsService.isUpdatedData(allGroupScrip[0], res[0])) {
        let allGroupObj = allGroupScrip[0];
        allGroupObj.prevClose = allGroupObj.prevClose || res[0]["76"] / priceDivisor;
        allGroupObj.LTP = res[0]["8"] == 0 ? allGroupObj.prevClose : res[0]["8"] / priceDivisor; // if LTP == 0 then show prevClose (11/05/2021)
        allGroupObj.Change = allGroupObj.LTP - allGroupObj.prevClose;
        allGroupObj.changePercent = allGroupObj.Change / allGroupObj.prevClose * 100;
      }
    });
  }
  ngOnDestroy() {
    if (this.multiLineSubscription) {
      this.multiLineSubscription.unsubscribe();
    }
  }
  static {
    this.ctorParameters = () => [{
      type: _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__.SharedDataService
    }, {
      type: _services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_4__.AnalyticsService
    }, {
      type: _services_rest_market_service__WEBPACK_IMPORTED_MODULE_3__.MarketService
    }, {
      type: _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_2__.UtilsService
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router
    }, {
      type: _services_sockets_socket_service__WEBPACK_IMPORTED_MODULE_6__.SocketService
    }, {
      type: src_app_services_seo_seo_service__WEBPACK_IMPORTED_MODULE_7__.SeoService
    }];
  }
};
CommoditiesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
  selector: 'app-commodities',
  template: _commodities_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  imports: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_14__.NgxDatatableModule, _angular_common__WEBPACK_IMPORTED_MODULE_15__.SlicePipe, _pipes_segment_pipe__WEBPACK_IMPORTED_MODULE_10__.SegmentPipe, _pipes_condense_pipe__WEBPACK_IMPORTED_MODULE_9__.CondensePipe, _pipes_value_pipe__WEBPACK_IMPORTED_MODULE_8__.ValuePipe],
  styles: [(_commodities_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__metadata)("design:paramtypes", [_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__.SharedDataService, _services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_4__.AnalyticsService, _services_rest_market_service__WEBPACK_IMPORTED_MODULE_3__.MarketService, _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_2__.UtilsService, _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router, _services_sockets_socket_service__WEBPACK_IMPORTED_MODULE_6__.SocketService, src_app_services_seo_seo_service__WEBPACK_IMPORTED_MODULE_7__.SeoService])], CommoditiesComponent);


/***/ }),

/***/ 34009:
/*!*****************************************************************!*\
  !*** ./src/app/market/equity-market/equity-market.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EquityMarketComponent: () => (/* binding */ EquityMarketComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _equity_market_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./equity-market.component.html?ngResource */ 57483);
/* harmony import */ var _equity_market_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./equity-market.component.scss?ngResource */ 66747);
/* harmony import */ var _equity_market_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_equity_market_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @swimlane/ngx-charts */ 65814);
/* harmony import */ var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/analytics/analytics.service */ 50213);
/* harmony import */ var src_app_services_sockets_broadcaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/sockets/broadcaster */ 28510);
/* harmony import */ var src_app_services_sockets_socket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/sockets/socket.service */ 6312);
/* harmony import */ var _common_module_select_completer_select_completer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common-module/select-completer/select-completer.component */ 13661);
/* harmony import */ var _pipes_condense_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pipes/condense.pipe */ 82203);
/* harmony import */ var _pipes_segment_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/segment.pipe */ 39995);
/* harmony import */ var _pipes_value_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pipes/value.pipe */ 50615);
/* harmony import */ var _services_rest_market_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../services/rest/market.service */ 23369);
/* harmony import */ var _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../services/seo/seo.service */ 44897);
/* harmony import */ var _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../services/shared-data/shared-data.service */ 46013);
/* harmony import */ var _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../../services/utils/utils.service */ 89893);



















/** Equity market view and scss linking */
let EquityMarketComponent = class EquityMarketComponent {
  /**
   * dependency injection and varaible intialization
   * @param marketService for api call
   * @param router for navigation to different route
   * @param utilsService for data manipulation
   * @param sharedDataService for sharing data between two services
   * @param seoService for dynamic meta tag and title
   */
  constructor(seoService, marketService, router, utilsService, socket, sharedDataService, broadcaster, analytics) {
    this.seoService = seoService;
    this.marketService = marketService;
    this.router = router;
    this.utilsService = utilsService;
    this.socket = socket;
    this.sharedDataService = sharedDataService;
    this.broadcaster = broadcaster;
    this.analytics = analytics;
    /**
     * present tab
     */
    this.activeTab = 1;
    /**
     * equity type(nse/bse)
     */
    this.equityType = 'NSE';
    /**
     * loser array
     */
    this.loser = [];
    /**
     * gainer array
     */
    this.gainer = [];
    /**
     * segmentId of selected tab
     */
    this.SegmentId = 1;
    /**
     * fii fund data
     */
    this.fiiFundView = [];
    /**
     * mf fund data
     */
    this.mfFundView = [];
    /**
     * fund view api response
     */
    this.fundView = [];
    /**
     * index list
     */
    this.indexList = [];
    /**
     * ngModal for indices
     */
    this.selectedIndices = 26000;
    // options
    /**
     * graph config xAxis
     */
    this.showXAxis = true;
    /**
    * graph config yAxis
    */
    this.showYAxis = true;
    /**
    * graph config gradient
    */
    this.gradient = false;
    /**
    * graph config show legend
    */
    this.showLegend = false;
    /**
    * graph config show X axis label
    */
    this.showXAxisLabel = true;
    /**
    * graph config show y axis label
    */
    this.showYAxisLabel = true;
    /**
    * for chart
    */
    this.best5Response = null;
    /**
    * gainer /loser
    */
    this.gainerLoserType = 4;
    /**
    * graph config color decleartion
    */
    this.colorScheme = {
      domain: []
    };
    /**
     * graph config color decleartion for sector performance
     */
    this.sectorColorScheme = {
      domain: []
    };
    /**
     * sector performance api response
     */
    this.sectorApiResponse = {
      'nse': [],
      'bse': []
    };
    /**
      * For Graph data
      */
    this.sectorView = [];
    this.indexObj = null;
    this.advanceDeclineResponse = {};
    this.seoService.setMeta('marketEquityOverview');
  }
  /**
  * On component load, three function are called
  */
  ngOnInit() {
    this.seoService.getMetaData(this.seoService.metaObj.marketEquityOverview.title, this.seoService.metaObj.marketEquityOverview.content);
    this.getIndexList();
    this.getOHLC(26000, 1);
    this.getAdvanceDeclines('0', '1');
    this.getAdvanceDeclines('26000', '1');
    this.getEquityGainerLoser(this.activeTab, this.gainerLoserType);
    this.getFundView();
    this.getSectorPerfomance();
    this.getBestFiveSocket();
    this.utilsService.setTrackMoeEvent('visitedEquityOverview', {
      "User_ID": this.utilsService.getUserId() || 'guest',
      "IP": this.sharedDataService.IPAddress
    });
    this.analytics.emitEvent('visitedEquityOverview', this.utilsService.getUserId() || 'guest', JSON.stringify({
      "IP": this.sharedDataService.IPAddress
    }), 1);
  }
  /**
   * On change of tab, data changes
   * @param count present tab
   */
  activateFilter(count) {
    this.activeTab = count;
    this.onEquityChange(this.switchToggle);
  }
  /**
   * MostActiveBySegment api is called and response is manipulated according to view
   * @param count tab selected
   * @param MarketData gainer/loser
   */
  getEquityGainerLoser(count, MarketData) {
    this.SegmentId = count == 1 ? this.equityType == 'NSE' ? 1 : 3 : count == 2 ? 2 : count == 3 ? this.equityType == 'MCX' ? 5 : 7 : 13;
    let payload = {
      "SegmentId": this.SegmentId,
      "IndexId": this.equityType == 'NSE' ? 26000 : 19000,
      "MarketDataType": MarketData
    };
    this.marketService.getMostActiveByIndex(payload).subscribe(res => {
      if (res.Status =  true && res.Response) {
        res.Response.MostActiveList.forEach((element, index) => {
          let LTP = res.Response.MostActiveList[index].LTP;
          let percent = res.Response.MostActiveList[index].PerChange;
          let change = LTP * percent / (100 + percent);
          let priceDivisor = res.Response.MostActiveList[index].PriceDivisor;
          res.Response.MostActiveList[index].LTP = LTP / priceDivisor;
          res.Response.MostActiveList[index].Change = change / priceDivisor;
          res.Response.MostActiveList[index].percent = percent;
          res.Response.MostActiveList[index].textColor = percent > 0 ? 'text-green' : percent == 0 ? '' : 'text-pink';
          res.Response.MostActiveList[index].Change = Math.abs(res.Response.MostActiveList[index].Change);
          res.Response.MostActiveList[index].percent = Math.abs(res.Response.MostActiveList[index].percent);
        });
        this.gainer = res.Response.MostActiveList;
      } else if (res.Reason == 'Data not found.') {
        this.gainer = [];
        // }
        // else if (this.utilsService.isSessionExpired(res.Reason)) {
        //   if(this.sharedDataService.isSSO){
        //     this.utilsService.sessionExpireHandling()
        //     return
        //   }
        //   this.utilsService.error('Session Expired', "Please Login Again");
        //   this.utilsService.postFeatureCount();
        //   this.utilsService.clearLoginDetails();
        //   this.sharedDataService.userId = null;
        //   this.router.navigate(['auth/login']);
      } else {
        this.utilsService.error('Error', "Something went Wrong");
      }
    });
  }
  /**
   * MostActiveBySegment api is called and response is manipulated according to view
   * @param count tab selected
   * @param MarketData gainer/loser
   */
  getDerivativeGainerLoser(count, MarketData) {
    this.SegmentId = count == 1 ? this.equityType == 'NSE' ? 1 : 3 : count == 2 ? 2 : count == 3 ? this.equityType == 'MCX' ? 5 : 7 : 13;
    let payload = {
      "SegmentId": this.SegmentId,
      "MarketDataType": MarketData,
      "DerivativeType": 1,
      "DerivativeDataType": 1
    };
    this.marketService.getActiveBySegmentDerivatives(payload).subscribe(res => {
      if (res.Status =  true && res.Response) {
        res.Response.MostActiveList.forEach((element, index) => {
          let LTP = res.Response.MostActiveList[index].LTP;
          let percent = res.Response.MostActiveList[index].PerChange;
          let change = LTP * percent / (100 + percent);
          let priceDivisor = res.Response.MostActiveList[index].PriceDivisor;
          res.Response.MostActiveList[index].LTP = LTP / priceDivisor;
          res.Response.MostActiveList[index].Change = change / priceDivisor;
          res.Response.MostActiveList[index].percent = percent;
          res.Response.MostActiveList[index].textColor = percent > 0 ? 'text-green' : percent == 0 ? '' : 'text-pink';
          res.Response.MostActiveList[index].Change = Math.abs(res.Response.MostActiveList[index].Change);
          res.Response.MostActiveList[index].percent = Math.abs(res.Response.MostActiveList[index].percent);
        });
        this.gainer = res.Response.MostActiveList;
      } else if (res.Reason == 'Data not found.') {
        this.gainer = [];
      } else {
        this.utilsService.error('Error', "Something went Wrong");
      }
    });
  }
  /**
   *  On change of gainer/Loser toggle,  MostActiveBySegment api is called
   * @param value toggle value
   */
  onChange(value) {
    this.gainerLoserType = value ? 5 : 4;
    this.activeTab == 1 ? this.getEquityGainerLoser(this.activeTab, this.gainerLoserType) : this.getDerivativeGainerLoser(this.activeTab, this.gainerLoserType);
  }
  /**
   * On change of NSE/bse/mcx/ncdex toggle,  MostActiveBySegment api is called
   * @param value nse/bse/mcx/ncdex
   */
  onEquityChange(value) {
    if (value) {
      this.equityType = this.activeTab == 1 ? 'BSE' : 'NCDEX';
    } else {
      this.equityType = this.activeTab == 1 ? 'NSE' : 'MCX';
    }
    this.activeTab == 1 ? this.getEquityGainerLoser(this.activeTab, this.gainerLoserType) : this.getDerivativeGainerLoser(this.activeTab, this.gainerLoserType);
  }
  /**
   * On Change fund  toggle, data changes
   * @param value fii/mf
   */
  onFundChange(value) {
    this.colorScheme.domain = [];
    if (value) {
      for (var i = 0; i < this.mfFundView.length; i++) {
        if (this.mfFundView[i].value < 0) {
          this.colorScheme.domain.push('#FA8072');
        } else {
          this.colorScheme.domain.push('#51ddd3');
        }
      }
      this.fundView = this.mfFundView;
    } else {
      for (var i = 0; i < this.fiiFundView.length; i++) {
        if (this.fiiFundView[i].value < 0) {
          this.colorScheme.domain.push('#FA8072');
        } else {
          this.colorScheme.domain.push('#51ddd3');
        }
      }
      this.fundView = this.fiiFundView;
    }
  }
  /**
   * FundView api is called, response is manipulated as per view
   */
  getFundView() {
    this.marketService.getFundView().subscribe(res => {
      if (res.Status == 'Success' && res.Response) {
        this.mfFundView = [];
        this.fiiFundView = [];
        this.colorScheme.domain = [];
        let fii = res.Response.oDictInvestDateToFIIInvestmentDetails;
        let mf = res.Response.oDictInvestDateToMFInvestmentDetails;
        let newFiiArr = [];
        let newMfArr = [];
        if (res.Response.oDictInvestDateToFIIInvestmentDetails) {
          for (let item in fii) {
            if (newFiiArr.length < 5) {
              if (fii[item].dTotalNetInvestment < 0) {
                this.colorScheme.domain.push('#FA8072');
              } else {
                this.colorScheme.domain.push('#51ddd3');
              }
              newFiiArr.push({
                name: this.utilsService.changeCurrentDateFormat(fii[item].dtFIIInvestmentDate, '', 'YYYY-MM-DD'),
                value: fii[item].dTotalNetInvestment
              });
            }
          }
        }
        if (mf) {
          for (let item in mf) {
            if (newMfArr.length < 5) {
              newMfArr.push({
                name: this.utilsService.changeCurrentDateFormat(mf[item].dtMFInvestmentDate, '', 'YYYY-MM-DD'),
                value: mf[item].dNetInvestment
              });
            }
          }
        }
        this.fiiFundView = newFiiArr;
        this.mfFundView = newMfArr;
        this.fundView = this.fiiFundView;
      } else if (res.Reason == 'Data not found.') {
        this.fundView = [];
      } else {
        this.utilsService.error('Error', "Something went wrong");
      }
    });
  }
  /**
  * indexList api is called, and graph is changed accordingly with selected indices in dropdown
  */
  getIndexList() {
    let data = {
      "StartPosition": 0,
      "NoOfRecords": 200
    };
    this.marketService.getIndicesList(data).subscribe(res => {
      if (res.Status == "Success" && res.Response['lstIndices']) {
        this.indexList = [];
        this.indexList = res.Response['lstIndices'].filter(obj => {
          return obj.SegmentId == 1 || obj.SegmentId == 3;
        });
        let newIndexObj = this.indexList.filter(obj => {
          return obj.Token == 26000;
        });
        this.indexList.sort((indice1, indice2) => {
          return indice1.IndexName > indice2.IndexName ? 1 : -1;
        });
        this.indexObj = newIndexObj[0];
        this.selectedIndicesData = newIndexObj[0];
      } else if (res.Reason == 'Data not found.') {} else {
        this.utilsService.error('Error', "Something went wrong");
      }
    });
  }
  /**
   * Get OHLC by keyInfo api call
   * @param token
   * @param segmentId
   */
  getOHLC(token, segmentId) {
    let string;
    let userId = this.utilsService.getUserId() || "guest";
    let keyInfoPayload = {
      "UserId": userId ? userId : '',
      "SessionId": this.utilsService.getSessionId() || '',
      "Token": token,
      "SegmentId": segmentId
    };
    this.b5socketSubcription = {};
    this.marketService.getKeyInfo(keyInfoPayload).subscribe(res => {
      if (res.Status === 'Success' && res.Response) {
        let newB5 = {};
        let keyInfoData = res.Response;
        let LUT = this.utilsService.changeCurrentDateFormat(keyInfoData.LUT, 'DD-MM-YYYY HH:mm:ss', 'DD-MMM-YY HH:mm:ss');
        let LTT = this.utilsService.changeCurrentDateFormat(keyInfoData.LTT, 'DD-MM-YYYY HH:mm:ss', 'DD-MMM-YY HH:mm:ss');
        string = '|1=' + segmentId + '|88=' + keyInfoData.OpenInterest + '|80=' + keyInfoData.ATP + '|75=' + keyInfoData.OpenPrice + '|76=' + keyInfoData.ClosePrice + '|77=' + keyInfoData.HighPrice + '|78=' + keyInfoData.LowPrice + '|93=' + keyInfoData.LifeTimeHigh + '|94=' + keyInfoData.LifeTimeLow + '|79=' + keyInfoData.Volume + '|74=' + LUT + '|73=' + LTT + '|7=' + token + '|8=' + keyInfoData.LTP + '|9=' + keyInfoData.LTQ + '|399=' + keyInfoData.PriceDivisor + '|';
        newB5['MarketLot'] = keyInfoData.MarketLot;
        newB5["MktCap"] = keyInfoData.MktCap;
        newB5["strB5Response"] = string;
        newB5["BBP"] = keyInfoData.BBP;
        newB5["BBQ"] = keyInfoData.BBQ;
        newB5["BSP"] = keyInfoData.BSP;
        newB5["BSQ"] = keyInfoData.BSQ;
        newB5["PriceDivisor"] = keyInfoData.PriceDivisor;
        newB5['LTP'] = keyInfoData['LTP'] == 0 ? (keyInfoData['PrevClose'] || 0) / keyInfoData.PriceDivisor : keyInfoData.LTP / keyInfoData.PriceDivisor; // if LTP == 0 then show prevClose (11/05/2021)
        newB5['difference'] = Number(keyInfoData.Change / keyInfoData.PriceDivisor) || 0;
        newB5['PrevClose'] = (keyInfoData.PrevClose || 0) / keyInfoData.PriceDivisor; // (indiceObj[0].LTP - indiceObj[0].difference);
        newB5['percent'] = Math.abs(newB5['difference'] * 100 / (newB5['LTP'] - newB5['difference']) || 0);
        newB5['arrow'] = Number(newB5['difference']) < 0 ? "icon-long-arrow-down" : Number(newB5['difference']) > 0 ? "icon-long-arrow-up" : "";
        newB5['textColor'] = newB5['percent'] > 0 ? 'text-green' : newB5['percent'] == 0 ? '' : 'text-pink';
        newB5['difference'] = Math.abs(newB5['difference']);
        newB5['difference'] = Number(newB5['difference']) || 0;
        newB5['SegmentId'] = keyInfoData.SegmentId;
        newB5['Token'] = keyInfoData.Token;
        this.best5Response = newB5;
        this.b5socketSubcription = newB5;
        this.sharedDataService.setActiveSubscription = [this.b5socketSubcription.Token, this.b5socketSubcription.SegmentId];
        this.utilsService.subscribeBest5([this.b5socketSubcription]);
      }
    });
  }
  /**
   * graph is changed accordingly with selected indices in dropdown
   * @param value index selected
   */
  onIndexChange(value) {
    let newIndicesObj = this.indexList.filter(obj => {
      return obj.Token == value;
    });
    this.indexObj = newIndicesObj[0];
    this.getOHLC(this.indexObj.Token, this.indexObj.SegmentId);
    this.getAdvanceDeclines(this.indexObj.Token, this.indexObj.SegmentId);
    this.getAdvanceDeclines('0', this.indexObj.SegmentId);
  }
  getAdvanceDeclines(token, segmentId) {
    this.marketService.getAdvanceDeclines(segmentId, token).subscribe(res => {
      if (res.Status == "Success" && res.Response) {
        this.advanceDeclineResponse.isReady = true;
        this.advanceDeclineResponse[segmentId + '@' + token] = res.Response;
        this.advanceDeclineResponse[segmentId + '@' + token].LastADSTxTime = this.utilsService.changeCurrentDateFormat(res.Response.LastADSTxTime, 'YYYY-MM-DD HH:mm:ss', 'DD-MMM-YYYY HH:mm:ss');
      }
    }, err => {});
  }
  /**
   * on click on company page, goes to company page
   * @param item company page details
   */
  gotoCompanyPage(item) {
    let companyName = item["SecDesc"].replace(/[\s|\&|\%]/g, '').toLowerCase();
    let url = companyName + '/' + this.SegmentId + '/' + item.Token;
    if (this.SegmentId == 1 || this.SegmentId == 2 || this.SegmentId == 4 || this.SegmentId == 3) {
      url = "equity/" + url;
    } else if (this.SegmentId == 5 || this.SegmentId == 7) {
      url = "commodity/" + url;
    } else if (this.SegmentId == 13 || this.SegmentId == 38 || this.SegmentId == 14 || this.SegmentId == 39) {
      url = "currency/" + url;
    }
    this.router.navigate(['instrument/' + url]);
  }
  /** Get Sector Performance Data */
  getSectorPerfomance() {
    this.marketService.getSectorPerformance().subscribe(res => {
      if (res.Status == "Success" && res.Response) {
        for (let item in res.Response.oDictNSESectorsToPerformancePercentage) {
          if (res.Response.oDictNSESectorsToPerformancePercentage[item] < 0) {
            this.sectorColorScheme.domain.push('#FA8072');
          } else {
            this.sectorColorScheme.domain.push('#51ddd3');
          }
          this.sectorApiResponse.nse.push({
            name: item,
            value: res.Response.oDictNSESectorsToPerformancePercentage[item]
          });
        }
        for (let item in res.Response.oDictBSESectorsToPerformancePercentage) {
          if (res.Response.oDictBSESectorsToPerformancePercentage[item] < 0) {
            this.sectorColorScheme.domain.push('#FA8072');
          } else {
            this.sectorColorScheme.domain.push('#51ddd3');
          }
          this.sectorApiResponse.bse.push({
            name: item,
            value: res.Response.oDictBSESectorsToPerformancePercentage[item]
          });
        }
        this.sectorView = this.sectorApiResponse.nse;
      } else {
        this.sectorApiResponse.nse = [];
        this.sectorApiResponse.bse = [];
        this.sectorView = [];
      }
    });
  }
  /**
   * Toggle Change call back for segments
   * @param data boolean value of toggle Switch
   */
  onSectorChange(data) {
    let segmentName = data ? 'bse' : 'nse';
    this.sectorColorScheme.domain = [];
    for (var i = 0; i < this.sectorApiResponse[segmentName].length; i++) {
      if (this.sectorApiResponse[segmentName][i].value < 0) {
        this.sectorColorScheme.domain.push('#FA8072');
      } else {
        this.sectorColorScheme.domain.push('#51ddd3');
      }
    }
    this.sectorView = this.sectorApiResponse[segmentName];
  }
  /**
   * on label click toggle changes
   * @param toggleName ngmodal name
   * @param toggleValue ngmodal value
   */
  onLabelToggleChange(toggleName, toggleValue) {
    switch (toggleName) {
      case 'gainerLoser':
        this.actionToggle = toggleValue;
        this.onChange(this.actionToggle);
        break;
      case 'exchangeToggle':
        this.switchToggle = toggleValue;
        this.onEquityChange(this.switchToggle);
        break;
      case 'fundActivity':
        this.fundToggle = toggleValue;
        this.onFundChange(this.fundToggle);
        break;
      case 'sector':
        this.sectorToggle = toggleValue;
        this.onSectorChange(this.sectorToggle);
        break;
      default:
        break;
    }
  }
  refresh() {
    this.onEquityChange(this.switchToggle);
  }
  /**
  * Listener to Socket Response Packets, 'checkUnsubscription' and 'internetConnectionStatus'
  */
  getBestFiveSocket() {
    this.bestFiveSubscription = this.socket.broadcaster.on('watchlist').subscribe(res => {
      // let responseObject = this.utilsService.pipeToObject(res);
      if (res[0][64] != '209' && this.b5socketSubcription && res[0][1] == this.b5socketSubcription.SegmentId && res[0][7] == this.b5socketSubcription.Token) {
        this.b5socketSubcription = this.changeColor(res[0], this.b5socketSubcription);
      }
    });
  }
  /** Processing Socket Response Packets */
  changeColor(data, reference) {
    let referenceObj = reference;
    let priceDivisor = this.utilsService.getDefaultPriceDivisor(referenceObj, referenceObj.token);
    referenceObj.prevChange = (Number(data[8]) / priceDivisor || 0) - (referenceObj.LTP || 0);
    referenceObj.LTP = Number(data[8]) == 0 ? referenceObj.PrevClose || data[76] / priceDivisor : Number(data[8]) / priceDivisor; // if LTP == 0 then show prevClose (10/05/2021)
    referenceObj.volume = Number(data[79]);
    referenceObj.PrevClose = referenceObj.PrevClose || data[76] / priceDivisor;
    referenceObj.arrow = Number(referenceObj.LTP) < Number(referenceObj.PrevClose) ? "icon-long-arrow-down" : Number(referenceObj.LTP) > Number(referenceObj.PrevClose) ? "icon-long-arrow-up" : "";
    referenceObj.difference = Math.abs(referenceObj.LTP - Number(referenceObj.PrevClose));
    referenceObj.difference = isNaN(referenceObj.difference) ? 0.00 : referenceObj.difference;
    referenceObj.percent = referenceObj.difference / Number(referenceObj.PrevClose) * 100;
    referenceObj.percent = isNaN(referenceObj.percent) ? 0.00 : referenceObj.percent;
    referenceObj.textColor = Number(referenceObj.LTP) < Number(referenceObj.PrevClose) ? "text-pink" : Number(referenceObj.LTP) > Number(referenceObj.PrevClose) ? "text-green" : "";
    return referenceObj;
  }
  /**
  * ondestroy close socket and all other subscription
  */
  ngOnDestroy() {
    this.utilsService.unSubscribeBestFive([this.b5socketSubcription]);
    this.sharedDataService.clearActiveSub();
    if (this.bestFiveSubscription) this.bestFiveSubscription.unsubscribe();
  }
  static {
    this.ctorParameters = () => [{
      type: _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_10__.SeoService
    }, {
      type: _services_rest_market_service__WEBPACK_IMPORTED_MODULE_9__.MarketService
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.Router
    }, {
      type: _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_12__.UtilsService
    }, {
      type: src_app_services_sockets_socket_service__WEBPACK_IMPORTED_MODULE_4__.SocketService
    }, {
      type: _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_11__.SharedDataService
    }, {
      type: src_app_services_sockets_broadcaster__WEBPACK_IMPORTED_MODULE_3__.Broadcaster
    }, {
      type: src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_2__.AnalyticsService
    }];
  }
};
EquityMarketComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
  selector: 'app-equity-market',
  template: _equity_market_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  imports: [_common_module_select_completer_select_completer_component__WEBPACK_IMPORTED_MODULE_5__.SelectCompleterComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterLinkActive, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_17__.BarChartModule, _angular_common__WEBPACK_IMPORTED_MODULE_18__.SlicePipe, _pipes_segment_pipe__WEBPACK_IMPORTED_MODULE_7__.SegmentPipe, _pipes_condense_pipe__WEBPACK_IMPORTED_MODULE_6__.CondensePipe, _pipes_value_pipe__WEBPACK_IMPORTED_MODULE_8__.ValuePipe, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_17__.TooltipModule],
  styles: [(_equity_market_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__metadata)("design:paramtypes", [_services_seo_seo_service__WEBPACK_IMPORTED_MODULE_10__.SeoService, _services_rest_market_service__WEBPACK_IMPORTED_MODULE_9__.MarketService, _angular_router__WEBPACK_IMPORTED_MODULE_13__.Router, _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_12__.UtilsService, src_app_services_sockets_socket_service__WEBPACK_IMPORTED_MODULE_4__.SocketService, _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_11__.SharedDataService, src_app_services_sockets_broadcaster__WEBPACK_IMPORTED_MODULE_3__.Broadcaster, src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_2__.AnalyticsService])], EquityMarketComponent);


/***/ }),

/***/ 36640:
/*!*******************************************************************!*\
  !*** ./src/app/market/market-overview/market-overview.routing.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MarketRoutes: () => (/* binding */ MarketRoutes)
/* harmony export */ });
/* harmony import */ var src_app_guards_basic_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/guards/basic.guard */ 72972);
/* harmony import */ var _commodities_commodities_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../commodities/commodities.component */ 17209);
/* harmony import */ var _equity_market_equity_market_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../equity-market/equity-market.component */ 34009);



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
  path: "commodities",
  component: _commodities_commodities_component__WEBPACK_IMPORTED_MODULE_1__.CommoditiesComponent,
  canActivate: [src_app_guards_basic_guard__WEBPACK_IMPORTED_MODULE_0__.BasicGuard],
  data: {
    config: routeConfig
  }
}, {
  path: "stocks",
  component: _equity_market_equity_market_component__WEBPACK_IMPORTED_MODULE_2__.EquityMarketComponent,
  canActivate: [src_app_guards_basic_guard__WEBPACK_IMPORTED_MODULE_0__.BasicGuard],
  data: {
    config: routeConfig,
    style: ["assets/chartiq/css/stx-chart.css"]
  }
}];

/***/ }),

/***/ 50523:
/*!**************************************************************************!*\
  !*** ./src/app/market/commodities/commodities.component.scss?ngResource ***!
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
.comm-w table {
  display: block;
  width: 100%;
}
@media (max-width: 1550px) {
  .comm-w table {
    font-size: 13px;
  }
}
.comm-w thead {
  display: block;
  padding-right: 8px;
}
.comm-w thead:first-child tr:first-child th {
  color: #000;
  font-weight: 700;
  font-size: 13px;
  border-bottom: 1px solid #ebebeb;
  padding: 10px 8px 16px;
}
.comm-w thead:first-child tr th {
  line-height: 1.428571429;
  vertical-align: bottom;
  text-align: left;
}
.comm-w thead tr {
  display: table;
  width: 100%;
  table-layout: fixed;
}
.comm-w .table-striped tbody tr:nth-of-type(odd) {
  background-color: #f9f9f9;
}
.comm-w tbody {
  overflow-y: auto;
  overflow-x: hidden;
  height: auto;
  max-height: 300px;
  display: block;
}
.comm-w tbody tr {
  display: table;
  width: 100%;
  table-layout: fixed;
}
.comm-w tbody tr td {
  padding: 8px;
  line-height: 1.428571429;
  vertical-align: top;
  border-top: 1px solid #ddd;
}

.nav-tabs {
  display: flex;
}
@media (max-width: 1550px) {
  .nav-tabs {
    margin-bottom: 10px !important;
  }
}`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 66747:
/*!******************************************************************************!*\
  !*** ./src/app/market/equity-market/equity-market.component.scss?ngResource ***!
  \******************************************************************************/
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
.market-snapshot-wrap .pink-card {
  padding: 10px;
  width: 100%;
  float: left;
  background: #ffe8e8;
}
.market-snapshot-wrap .head-div {
  border-bottom: 1px solid #959595;
  overflow: hidden;
}

.key-info {
  display: flex;
  align-items: center;
  justify-content: center;
}
.key-info > div {
  padding: 0px 5px;
}
.key-info .text-center {
  text-align: center;
  color: #535353;
}
.key-info .bold {
  color: #282828;
}
.key-info .margin-7 {
  margin: 6px 0;
}

.key-info {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
@media screen and (max-width: 767px) {
  .key-info {
    text-align: left;
    justify-content: left;
  }
}
@media screen and (max-width: 560px) {
  .key-info {
    display: block;
    font-size: 10px;
  }
}
@media screen and (max-width: 1024px) {
  .key-info {
    font-size: 12px;
  }
}
.key-info > div {
  padding: 0px 15px;
  border-right: 1px solid #cccccc;
}
@media screen and (max-width: 767px) {
  .key-info > div {
    margin-bottom: 15px;
    padding: 0px 15px;
  }
}
@media screen and (max-width: 480px) {
  .key-info > div {
    width: 50%;
    float: left;
    clear: none;
  }
}
.key-info > div .pb-10 {
  padding-bottom: 10px !important;
}
.key-info > div:first-child {
  padding-left: 0px;
}
@media screen and (max-width: 767px) {
  .key-info > div:nth-child(3n) {
    border-right: 0px;
  }
}
@media screen and (max-width: 560px) {
  .key-info > div:nth-child(3n) {
    border-right: 1px solid #cccccc;
  }
}
@media screen and (max-width: 767px) {
  .key-info > div:nth-child(3n+1) {
    padding-left: 0px;
  }
}
@media screen and (max-width: 560px) {
  .key-info > div:nth-child(3n+1) {
    padding-left: 10px;
  }
}
@media screen and (max-width: 560px) {
  .key-info > div:nth-child(2n) {
    border-right: 0px;
  }
}
@media screen and (max-width: 560px) {
  .key-info > div:nth-child(2n+1) {
    padding-left: 0px;
  }
}
.key-info > div:last-child {
  padding-right: 0px;
  border-right: 0;
}
.key-info .text-center {
  text-align: center;
  color: #535353;
}
@media screen and (max-width: 767px) {
  .key-info .text-center {
    text-align: left;
  }
}
.key-info .bold {
  color: #282828;
}
.key-info .bold.text-green {
  color: #00B16B;
  font-weight: bold;
}
.key-info .bold.text-pink {
  color: #EE404A;
  font-weight: bold;
}
.key-info .margin-7 {
  margin: 6px 0;
}

@media (max-width: 767px) {
  .grow {
    margin: 15px 0px;
  }
  .pl-0 {
    padding-left: 15px;
  }
  .key-info {
    padding: 0px 7px;
  }
}
@media screen and (min-width: 768px) and (max-width: 990px) {
  .font11 {
    font-size: 9px;
  }
  .key-info .bold {
    font-size: 12px;
  }
}
.custom-select {
  width: 100%;
  position: relative;
}
.custom-select:after {
  content: "\\f107";
  position: absolute;
  top: 0;
  font-family: "icomoon" !important;
  font-style: normal;
  font-weight: normal;
  line-height: 1;
  left: auto;
  right: 0;
  height: 100%;
  font-size: 25px;
  padding: 12px 12px;
  background: #fe595d;
  color: #ffffff;
  pointer-events: none;
}
@media screen and (max-width: 990px) {
  .custom-select:after {
    padding: 12px 5px;
  }
}
.custom-select select {
  padding-left: 10px;
  padding-right: 30px;
  -webkit-appearance: none;
  border-radius: 0px;
  outline: none;
  box-shadow: none;
  font-weight: 500;
  text-transform: uppercase;
  width: 100%;
  height: 48px;
  font-size: 14px;
  font-weight: bold;
  border: 1px solid #fe595d !important;
}
.custom-select select option {
  font-size: 14px;
  font-weight: normal;
}
@media screen and (min-width: 991px) and (max-width: 1088px) {
  .custom-select select {
    padding-left: 10px;
    padding-right: 25px;
  }
}
@media screen and (max-width: 990px) {
  .custom-select select {
    padding-left: 10px;
    padding-right: 25px;
    font-size: 14px;
  }
}

.grow .inside-grow-content .card_name {
  text-transform: uppercase;
  font-weight: 500;
  font-size: 12px;
  white-space: nowrap;
}
.grow .inside-grow-content .card_value {
  font-size: 17px;
  font-weight: bold;
  line-height: 20px;
}
.grow .inside-grow-content .card_smallfont {
  font-size: 11px;
}

.switch-wrap {
  margin: 0px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
}
@media (max-width: 560px) {
  .switch-wrap {
    margin-bottom: 10px;
  }
}
.switch-wrap + .switch-wrap {
  margin-left: 25px;
  padding-left: 25px;
  border-left: 1px solid #ccc;
}
@media (max-width: 400px) {
  .switch-wrap + .switch-wrap {
    margin-left: 10px;
    padding-left: 10px;
  }
}

@media (max-width: 1550px) {
  table {
    font-size: 12px;
  }
}
table th {
  text-align: right;
}
table th:first-child {
  text-align: left;
}

.nav-tabs {
  display: flex;
}
@media (max-width: 1550px) {
  .nav-tabs {
    margin-bottom: 10px !important;
  }
}

.top-select {
  background: #ffffff;
  width: 60%;
  margin: 0 auto 30px;
  position: relative;
}
.top-select select {
  font-size: 18px;
  font-weight: bold;
}
.top-select select option {
  font-size: 14px;
  font-weight: normal;
}

@media (max-width: 767px) {
  .mobile-table {
    margin-top: 15px;
  }
}

.btn.btn-gradient {
  padding: 8px 12px 4px;
}

/*Heading Styling*/
.heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.heading .switch-wrap {
  margin: 0px;
}

.last-updated span {
  font-size: 12px;
}
@media (max-width: 767px) {
  .last-updated {
    padding-top: 15px;
    clear: both;
  }
}

.advance-decline {
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
}
@media (max-width: 990px) {
  .advance-decline {
    font-size: 12px;
  }
}
@media (max-width: 560px) {
  .advance-decline {
    font-size: 10px;
  }
}
@media (max-width: 350px) {
  .advance-decline {
    font-size: 8px;
  }
}
.advance-decline > div {
  width: 100%;
}
.advance-decline > div > div {
  padding: 5px;
  border: 1px solid #ebebeb;
  font-size: 11px;
}
.advance-decline > div > div:first-child {
  font-weight: bold;
}
.advance-decline > div:first-child, .advance-decline > div:last-child {
  background: #f3f3f3;
  text-transform: capitalize;
  font-weight: bold;
}

.font-n-22 {
  font-size: 22px;
  margin-right: 10px;
}

.font11 {
  font-size: 11px;
}

.scroll-fixed .show-fixed {
  display: block;
}
.scroll-fixed .show-fixed > div.ltp-change {
  display: inline-block;
  margin: 0 5px;
}
.scroll-fixed h1 {
  font-size: 16px;
}
.scroll-fixed h1 small {
  display: inline-block;
  margin-left: 5px;
  line-height: 20px;
  vertical-align: middle;
}
.scroll-fixed .hidden-fixed {
  display: none;
}

.pad-btm {
  padding-bottom: 5px;
}

.wht-nrp {
  white-space: nowrap;
}

.table {
  width: 100%;
}
.table tbody tr:nth-child(odd) {
  background-color: #f9f9f9;
}
.table tbody tr td {
  padding: 8px;
  line-height: 1.428571429;
  vertical-align: top;
  border-top: 1px solid #F4F3F8;
}

@media (min-width: 768px) and (max-width: 990px) {
  .resprow {
    display: flex;
    flex-wrap: nowrap;
  }
}`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 9875:
/*!**************************************************************************!*\
  !*** ./src/app/market/commodities/commodities.component.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"comm-w\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"container-fluid padding-0\">\r\n      <div class=\"card mt-20\">\r\n        <div class=\"card-block\">\r\n          <ul class=\"nav nav-tabs reset\">\r\n            <li [class.active]=\"activeTab==1\" (click)=\"activateFilter(1)\"><a>Gold</a></li>\r\n            <li [class.active]=\"activeTab==2\" (click)=\"activateFilter(2)\"><a>Silver</a></li>\r\n            <li [class.active]=\"activeTab==3\" (click)=\"activateFilter(3)\"><a>Crude Oil</a></li>\r\n            <li [class.active]=\"activeTab==4\" (click)=\"activateFilter(4)\"><a>Copper</a></li>\r\n            <li [class.active]=\"activeTab==5\" (click)=\"activateFilter(5)\"><a>All Commodities</a></li>\r\n          </ul>\r\n          <div class=\"resp-tabs-container hor_1\">\r\n            <div class=\" table-custom\">\r\n              <ngx-datatable #holdingsTable class=\"material\" [cssClasses]=\"cssClasses\" [columnMode]=\"'force'\"\r\n                [rows]=\"activeCommodities\" [footerHeight]=\"50\" [limit]=\"10\" [reorderable]=\"false\"\r\n                [headerHeight]=\"'auto'\" [scrollbarH]=\"true\" [rowHeight]=\"'auto'\">\r\n                <ngx-datatable-column [width]=\"220\" name=\"Company\" prop=\"SecName\" [resizeable]=\"false\">\r\n                  <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                    <div (click)=\"gotoCompanyPage(row.lExchangeScrip)\" class=\"text-left\"><a>{{row.SecName}}</a>\r\n                  </div>\r\n                </ng-template>\r\n              </ngx-datatable-column>\r\n\r\n              <ngx-datatable-column name=\"LTP\" prop=\"LTP\" [resizeable]=\"false\">\r\n                <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                  <div class=\"text-right\">{{row.LTP | segment:row.SegmentId}}</div>\r\n                </ng-template>\r\n              </ngx-datatable-column>\r\n\r\n              <ngx-datatable-column name=\"Prev. Close\" prop=\"prevClose\" [resizeable]=\"false\">\r\n                <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                  <div class=\"text-right\">{{row.prevClose | segment:row.SegmentId}}</div>\r\n                </ng-template>\r\n              </ngx-datatable-column>\r\n\r\n              <ngx-datatable-column name=\"Change %\" prop=\"changePercent\" [resizeable]=\"false\">\r\n                <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                  <div class=\"text-right text-{{row?.lMutilpleTouchlineData?.class}}\">{{Math.abs(row.changePercent) |\r\n                  value:'1.2-2'}}</div>\r\n                </ng-template>\r\n              </ngx-datatable-column>\r\n            </ngx-datatable>\r\n            <!-- <table class=\"table mobile-table table-striped\">\r\n            <thead>\r\n              <tr>\r\n                <th>Company</th>\r\n                <th>LTP</th>\r\n                <th>Previous Close</th>\r\n                <th>Change%</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let item of activeCommodities\">\r\n                <td (click)=\"gotoCompanyPage(item.lExchangeScrip)\" data-header=\"Company \"><a>{{item?.lExchangeScrip?.SecName}}</a></td>\r\n                <td data-header=\"LTP\">{{item?.lMutilpleTouchlineData.LTP | segment:item.SegmentId}}</td>\r\n                <td data-header=\"Prev. Close\">{{item?.lMutilpleTouchlineData.prevClose | segment:item.SegmentId}}</td>\r\n                <td data-header=\"Change%\" class=\"text-{{item?.lMutilpleTouchlineData?.class}}\">{{item?.lMutilpleTouchlineData.changePercent |segment:item.SegmentId}}</td>\r\n              </tr>\r\n              <tr *ngIf=\"activeCommodities.length == 0\">\r\n                <td>No Data Available</td>\r\n              </tr>\r\n            </tbody>\r\n          </table> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n<div class=\"col-md-12 col-sm-12\">\r\n  <div class=\"card\">\r\n    <div class=\"card-block\">\r\n      <h4 class=\"heading padding-0 mb-20\">Commodities Market Analysis</h4>\r\n      <ul class=\"nav nav-tabs reset\">\r\n        <li [class.active]=\"activeTabAnalysis==1\" (click)=\"activateFilterAnalysis(1)\"><a>Bullion</a></li>\r\n        <li [class.active]=\"activeTabAnalysis==2\" (click)=\"activateFilterAnalysis(2)\"><a>Energy</a></li>\r\n        <li [class.active]=\"activeTabAnalysis==3\" (click)=\"activateFilterAnalysis(3)\"><a>Base Metals</a></li>\r\n        <li [class.active]=\"activeTabAnalysis==4\" (click)=\"activateFilterAnalysis(4)\"><a>Agro</a></li>\r\n        <li [class.active]=\"activeTabAnalysis==5\" (click)=\"activateFilterAnalysis(5)\"><a>Others</a></li>\r\n      </ul>\r\n      <div class=\"resp-tabs-container hor_1\">\r\n        <div class=\"table-custom\">\r\n          <ngx-datatable #holdingsTable class=\"material\" [cssClasses]=\"cssClasses\" [columnMode]=\"'force'\"\r\n            [rows]=\"groupedCommodities\" [footerHeight]=\"50\" [limit]=\"10\" [reorderable]=\"false\" [headerHeight]=\"'auto'\"\r\n            [scrollbarH]=\"true\" [rowHeight]=\"'auto'\">\r\n            <ngx-datatable-column [width]=\"220\" name=\"Company\" prop=\"SecName\" [resizeable]=\"false\">\r\n              <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                <div (click)=\"gotoCompanyPage(row.lExchangeScrip)\" class=\"text-left\"><a>{{row.SecName}}</a>\r\n              </div>\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n\r\n          <ngx-datatable-column name=\"LTP\" prop=\"LTP\" [resizeable]=\"false\">\r\n            <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n              <div class=\"text-right\">{{row.LTP | segment:row.SegmentId}}</div>\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n\r\n          <ngx-datatable-column name=\"Prev. Close\" prop=\"prevClose\" [resizeable]=\"false\">\r\n            <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n              <div class=\"text-right\">{{row.prevClose | segment:row.SegmentId}}</div>\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n\r\n          <ngx-datatable-column name=\"Change %\" prop=\"changePercent\" [resizeable]=\"false\">\r\n            <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n              <div class=\"text-right text-{{row?.lMutilpleTouchlineData?.class}}\">{{Math.abs(row.changePercent) |\r\n              value:'1.2-2'}}</div>\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n        </ngx-datatable>\r\n        <!-- <table class=\"table mobile-table table-striped\">\r\n        <thead>\r\n          <tr>\r\n            <th>Company</th>\r\n            <th>LTP</th>\r\n            <th>CHG</th>\r\n            <th>CHG(%)</th>\r\n            <th>Volume</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody class=\"scrollbar\">\r\n          <tr *ngFor=\"let item of groupedCommodities\">\r\n            <td (click)=\"gotoCompanyPage(item.lExchangeScrip)\" data-header=\"Company\"><a>{{item?.lExchangeScrip?.SecName}}</a></td>\r\n            <td data-header=\"Price (₹)\">{{item?.lMutilpleTouchlineData.LTP | segment:item.SegmentId}}</td>\r\n            <td data-header=\"Prev. Close\">{{item?.lMutilpleTouchlineData.prevClose | segment:item.SegmentId}}</td>\r\n            <td data-header=\"Change%\" class=\"text-{{item?.lMutilpleTouchlineData?.class}}\">{{item?.lMutilpleTouchlineData.changePercent |segment:item.SegmentId}}</td>\r\n            <td data-header=\"Volume\">{{ item?.lMutilpleTouchlineData.Volume || 0  }}</td>\r\n          </tr>\r\n          <tr *ngIf=\"groupedCommodities.length == 0\">\r\n            <td>No Data Available</td>\r\n          </tr>\r\n        </tbody>\r\n      </table> -->\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n</div>\r\n<div class=\"col-md-12 col-sm-12\">\r\n  <div class=\"comm-w\">\r\n    <div class=\"card\">\r\n      <div class=\"company-block\">\r\n        <h4 class=\"page-title text-uppercase\">Gainers/Losers</h4>\r\n        <!--Horizontal Tab-->\r\n        <div class=\"container-fluid padding-0\">\r\n          <ul class=\"nav nav-tabs hor_1 reset\">\r\n            <li (click)=\"onChangeTab(4)\" [class.active]=\"gainerLoserTab==4\"><a>Gainers</a></li>\r\n            <li (click)=\"onChangeTab(5)\" [class.active]=\"gainerLoserTab==5\"><a>Losers</a></li>\r\n          </ul>\r\n          <div class=\"resp-tabs-container hor_1\">\r\n            <div class=\"table-custom\">\r\n              <table class=\"table mobile-table table-striped\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>Company</th>\r\n                    <th>LTP</th>\r\n                    <th>CHG</th>\r\n                    <th>OI</th>\r\n                    <th>Volume</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  @for (item of gainerLoserData.tableData | slice:0:5; track item) {\r\n                    <tr>\r\n                      <td data-header=\"Company\"><a (click)=\"gotoCompanyPage(item)\">{{item.Name}}</a></td>\r\n                      <td data-header=\"LTP\">{{item.LTP |segment:1}}</td>\r\n                      <td data-header=\"CHG\" class=\"{{item.textColor}}\">{{item.Change |value:'1.2-2'}}</td>\r\n                      <td data-header=\"OI\">{{item.OI |condense}}</td>\r\n                      <td data-header=\"Volume\">{{item.Volume |condense}}</td>\r\n                    </tr>\r\n                  }\r\n                  <!-- <tr *ngIf=\"!activeScripsData\">\r\n                  <td>No Data Available</td>\r\n                </tr> -->\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n\r\n<!-- added open an account banner (12/05/2021) -->\r\n<!-- <section class=\"seo-section clearfix\" *ngIf=\"(!shared.userId || shared.userId == 'guest')\">\r\n<div class=\"col-md-12\">\r\n  <div class=\"card mb-0\">\r\n    <div class=\"card-block\">\r\n      <img src=\"../../../assets/images/Open-Free-Account1.png\" alt=\"Online Stock Trading Platform\" class=\"img-responsive\" (click)=\"utilsService.navigateToOpenAccount()\"/>\r\n    </div>\r\n  </div>\r\n</div>\r\n</section> -->\r\n\r\n\r\n<!-- Advert Banner :: Start -->\r\n@if ((!shared.userId || shared.userId == 'guest')) {\r\n  <section>\r\n    <div class=\"container\" (click)=\"utilsService.navigateToOpenFreeAccount()\">\r\n      <div class=\"row add_banner_sub red-theme\">\r\n        <div class=\"col-md-6 add-left-text\">\r\n          <div class=\"add-left-sub\">\r\n            <h2>Wait! <span class=\"small-font\">Before You Go</span></h2>\r\n            <h4>OPEN A FREE</h4>\r\n            <h3>DEMAT ACCOUNT</h3>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6 add-right-text\">\r\n          <div class=\"add-right-sub\">\r\n            <ul>\r\n              <li><span>+</span> Zero Account Opening Fee </li>\r\n              <li><span>+</span> Free First Year AMC </li>\r\n              <li><span>+</span> Zero Square Off Charges </li>\r\n              <li><span>+</span> Zero Call for Trade Charges</li>\r\n            </ul>\r\n            <a class=\"add-btn\">OPEN MY ACCOUNT</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n}\r\n\r\n<section class=\"clearfix\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"card mb-0\">\r\n      <div class=\"card-block\">\r\n        <h4 class=\"heading padding-0 bold mb-20\">Commodities Overview - Commodity market live</h4>\r\n        <p>Here you can see the overview of the <b>commodity segment</b>. Choice FinX aims to capture the pulse of the\r\n        <b>commodity market live</b> and bring you the latest of the <b>commodity market</b> as the action unfolds.\r\n      </p>\r\n      &nbsp;&nbsp;\r\n      <h4 class=\"heading padding-0 bold mb-20\">Commodity Market Today with Commodity Market Live Prices</h4>\r\n      <p>With the commodities segment the trader or investor can gain exposure or expand his portfolio by investing\r\n        in companies that have commodities exposure or can invest/ trade in commodities directly. This page is to\r\n        facilitate commodities trading and gives a complete overview of the commodities market by providing\r\n        <b>commodity market live prices</b>.\r\n        The page is divided into 3 sections,\r\n        The first section gives the market data for Gold – Silver - Crude Oil – Copper and All Commodities. The\r\n        table is divided into Company – LTP – Previous Close – Change %\r\n        The second section gives the overall <b>Commodities Market Analysis</b> for Bullion – Energy – Base Metals –\r\n        Agro - Others. The table is divided into Company – LTP – Previous Close – Change %\r\n        The third section is of <b>commodity Gainers/ Losers for today</b>.\r\n        Gainers is selected by default and shows the <b>top commodity gainers</b> contracts with LTP – CHG(Change) –\r\n        OI – Volume. The user can switch to Losers and the list will reflect the <b>top commodity losers</b>\r\n        contracts.\r\n      </p>\r\n    </div>\r\n  </div>\r\n</div>\r\n</section>\r\n<!-- <div class=\"container-fluid padding-0\">\r\n<div class=\"col-md-6\">\r\n  <app-ma-table></app-ma-table>\r\n</div>\r\n<div class=\"col-md-6\">\r\n  abc\r\n  <app-ga-table></app-ga-table>\r\n</div>\r\n</div> -->\r\n<!-- <div class=\"container-fluid padding-0 mrb-10\">\r\n<div class=\"col-md-5\">\r\n  abc\r\n  <app-news-announcement></app-news-announcement>\r\n</div>\r\n<div class=\"col-md-7\">\r\n  <app-announcement></app-announcement>\r\n</div>\r\n</div> -->\r\n</div>";

/***/ }),

/***/ 57483:
/*!******************************************************************************!*\
  !*** ./src/app/market/equity-market/equity-market.component.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<link rel=\"stylesheet\">\r\n\r\n<div class=\"flexwrap\">\r\n\r\n  <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 \">\r\n\r\n\r\n\r\n  </div>\r\n\r\n  <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 flexbox\">\r\n\r\n\r\n\r\n    <div class=\" flexauto\">\r\n\r\n\r\n\r\n      <div class=\"card\">\r\n\r\n        <div class=\"card-block\">\r\n\r\n\r\n\r\n          <div class=\"row resprow\">\r\n\r\n            <div class=\"col-xs-12 col-sm-4 col-md-6 col-lg-3\">\r\n\r\n              <h4 class=\"heading col-xs-12 padding-0 pad-btm\">Equity </h4>\r\n\r\n              <app-select-completer [itemList]=\"indexList\" [selected]=\"selectedIndicesData\"\r\n              (selectedClick)=\"onIndexChange($event)\"></app-select-completer>\r\n\r\n              <div class=\"card_value card_value_n_text\">\r\n\r\n                <span class=\"font-n-22\">\r\n\r\n                  <strong [class.bg-up]=\"b5socketSubcription?.prevChange>0\"\r\n                    [class.bg-down]=\"b5socketSubcription?.prevChange<0\">{{b5socketSubcription?.LTP |\r\n\r\n                  segment : SegmentId}}</strong>\r\n\r\n                </span>\r\n\r\n                <div class=\"font14 ltp-change wht-nrp {{b5socketSubcription?.textColor}}\">\r\n                  {{b5socketSubcription?.difference | segment}}\r\n\r\n                  ({{b5socketSubcription?.percent | value : '1.2-2'}} %)\r\n\r\n                  <i class=\"fa {{b5socketSubcription?.arrow}}\"></i>\r\n\r\n                </div>\r\n\r\n              </div>\r\n\r\n            </div>\r\n\r\n            @if (advanceDeclineResponse?.isReady) {\r\n              <div class=\"col-sm-8 col-md-12 col-lg-7 col-lg-offset-2\">\r\n                <div class=\"text-right last-updated\"><span>Last Updated\r\n                  <strong>{{advanceDeclineResponse[indexObj.SegmentId+'@0']?.LastADSTxTime}}</strong></span>\r\n                </div>\r\n                @if (advanceDeclineResponse[indexObj.SegmentId+'@0']) {\r\n                  <div class=\"advance-decline\">\r\n                    <div class=\"text-center\">\r\n                      <div class=\"\">\r\n                        Indices\r\n                      </div>\r\n                      <div>\r\n                        {{indexObj.SegmentId==1?'NSE':'BSE'}}\r\n                      </div>\r\n                      <div>\r\n                        {{indexObj?.IndexName}}\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"text-center\">\r\n                      <div class=\"\">\r\n                        Advances\r\n                      </div>\r\n                      <div class=\"text-green\">\r\n                        {{advanceDeclineResponse[indexObj.SegmentId+'@0']?.Advances|value:'1.0-0'}}\r\n                      </div>\r\n                      <div class=\"text-green\">\r\n                        {{advanceDeclineResponse[indexObj.SegmentId+'@'+indexObj.Token]?.Advances|value:'1.0-0'}}\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"text-center\">\r\n                      <div class=\"\">\r\n                        Declines\r\n                      </div>\r\n                      <div class=\"text-pink\">\r\n                        {{advanceDeclineResponse[indexObj.SegmentId+'@0']?.Declines|value:'1.0-0'}}\r\n                      </div>\r\n                      <div class=\"text-pink\">\r\n                        {{advanceDeclineResponse[indexObj.SegmentId+'@'+indexObj.Token]?.Declines|value:'1.0-0'}}\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"text-center\">\r\n                      <div>\r\n                        Unchanged\r\n                      </div>\r\n                      <div>\r\n                        {{advanceDeclineResponse[indexObj.SegmentId+'@0']?.Same|value:'1.0-0'}}\r\n                      </div>\r\n                      <div>\r\n                        {{advanceDeclineResponse[indexObj.SegmentId+'@'+indexObj.Token]?.Same|value:'1.0-0'}}\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"text-center\">\r\n                      <div class=\"\">\r\n                        Total\r\n                      </div>\r\n                      <div class=\"\">\r\n                        {{advanceDeclineResponse[indexObj.SegmentId+'@0']?.Total|value:'1.0-0'}}\r\n                      </div>\r\n                      <div class=\"\">\r\n                        {{advanceDeclineResponse[indexObj.SegmentId+'@'+indexObj.Token]?.Total|value:'1.0-0'}}\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                }\r\n              </div>\r\n            }\r\n\r\n          </div>\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"col-xs-12 padding-0 company-page-wrap\">\r\n\r\n        <div>\r\n\r\n          @if (indexObj) {\r\n            <app-chartiq-simple [segmentId]=\"indexObj?.SegmentId\" [token]=\"indexObj?.Token\"\r\n            [scripName]=\"indexObj?.IndexName\" [b5Data]=\"best5Response\"></app-chartiq-simple>\r\n          }\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 market-snapshot-wrap flexbox\">\r\n\r\n    <div class=\"card \">\r\n\r\n      <div class=\"card-block clearfix\">\r\n\r\n        <div class=\"col-md-12 mt-15 padding-0\">\r\n\r\n          <div>\r\n\r\n            <button class=\"btn btn-gradient pull-right btn-repeat\" aria-label=\"repeat\" (click)=\"refresh()\"><i\r\n            class=\"fa icon-repeat\" aria-hidden=\"true\"></i></button>\r\n\r\n            <ul class=\"nav nav-tabs mb-30 reset\">\r\n\r\n              <li [class.active]=\"activeTab==1\" (click)=\"activateFilter(1)\">\r\n\r\n                <a>Equity</a>\r\n\r\n              </li>\r\n\r\n              <li [class.active]=\"activeTab==2\" (click)=\"activateFilter(2)\">\r\n\r\n                <a>Derivatives</a>\r\n\r\n              </li>\r\n\r\n              <li [class.active]=\"activeTab==3\" (click)=\"activateFilter(3)\">\r\n\r\n                <a>Commodities</a>\r\n\r\n              </li>\r\n\r\n              <li [class.active]=\"activeTab==4\" (click)=\"activateFilter(4)\">\r\n\r\n                <a>Currencies</a>\r\n\r\n              </li>\r\n\r\n            </ul>\r\n\r\n            <div class=\"market-snapshot-wrap\">\r\n\r\n              <div class=\" pull-left switch-wrap\">\r\n\r\n                <label class=\"control-label mr-10\" [class.selected]=\"!actionToggle\"\r\n                (click)=\"onLabelToggleChange('gainerLoser',false)\">Gainer</label>\r\n\r\n                <label class=\"switch\">\r\n\r\n                  <input type=\"checkbox\" name=\"actionToggle\" [(ngModel)]=\"actionToggle\"\r\n                    (change)=\"onChange(actionToggle)\">\r\n\r\n                    <div class=\"slider round\"></div>\r\n\r\n                  </label>\r\n\r\n                  <label class=\"control-label ml-10\" [class.selected]=\"actionToggle\"\r\n                  (click)=\"onLabelToggleChange('gainerLoser',true)\">Loser</label>\r\n\r\n                </div>\r\n\r\n                @if (activeTab == 1 || activeTab == 3) {\r\n                  <div class=\" pull-left switch-wrap\">\r\n                    <label class=\"control-label mr-10\" [class.selected]=\"!switchToggle\"\r\n                      (click)=\"onLabelToggleChange('exchangeToggle',false)\">{{activeTab\r\n                    == 1?'NSE':'MCX'}}</label>\r\n                    <label class=\"switch\">\r\n                      <input type=\"checkbox\" name=\"switchToggle\" [(ngModel)]=\"switchToggle\"\r\n                        (change)=\"onEquityChange(switchToggle)\">\r\n                        <div class=\"slider round\"></div>\r\n                      </label>\r\n                      <label class=\"control-label ml-10\" [class.selected]=\"switchToggle\"\r\n                        (click)=\"onLabelToggleChange('exchangeToggle',true)\">{{activeTab\r\n                      == 1?'BSE':'NCDEX'}}</label>\r\n                    </div>\r\n                  }\r\n\r\n                  <div class=\"clearfix\">\r\n\r\n                    <table class=\"table table-striped mobile-table\">\r\n\r\n                      <thead>\r\n\r\n                        <tr>\r\n\r\n                          <th>Company</th>\r\n\r\n                          <th>LTP</th>\r\n\r\n                          <th>Change(%)</th>\r\n\r\n                          <th>Volume</th>\r\n\r\n                        </tr>\r\n\r\n                      </thead>\r\n\r\n                      <tbody>\r\n\r\n                        @for (item of gainer | slice:0:5; track item) {\r\n                          <tr>\r\n                            <td data-header=\"Company\" (click)=\"gotoCompanyPage(item)\">\r\n                              <a routerLinkActive=\"active\">{{(activeTab == 3 || activeTab == 4)?item.Name:item.SecDesc}}</a>\r\n                            </td>\r\n                            <td data-header=\"LTP(Rs.)\" class=\"text-right\">{{(item?.LTP) |segment: SegmentId}}</td>\r\n                            <td data-header=\"CHG(%)\" class=\"text-right {{item.textColor}}\">{{item?.percent |value:'1.2-2'}}\r\n                            </td>\r\n                            <td data-header=\"Volume\" class=\"text-right\">{{item?.Volume |condense}}</td>\r\n                          </tr>\r\n                        }\r\n\r\n                        @if (gainer.length == 0) {\r\n                          <tr>\r\n                            <td>No Data Available</td>\r\n                          </tr>\r\n                        }\r\n\r\n                      </tbody>\r\n\r\n                    </table>\r\n\r\n                  </div>\r\n\r\n                </div>\r\n\r\n              </div>\r\n\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"clearfix\"></div>\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"flexwrap\">\r\n\r\n      <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12 flexbox\">\r\n\r\n        <div class=\"card flexauto\">\r\n\r\n          <div class=\"card-block clearfix\">\r\n\r\n            <h4 class=\"heading padding-0 bold mb-20\">Fund Activity\r\n\r\n              <div class=\"switch-wrap\">\r\n\r\n                <label class=\"control-label mr-10\" [class.selected]=\"!fundToggle\"\r\n                (click)=\"onLabelToggleChange('fundActivity',false)\">FII</label>\r\n\r\n                <label class=\"switch\">\r\n\r\n                  <input type=\"checkbox\" name=\"fundToggle\" [(ngModel)]=\"fundToggle\" (change)=\"onFundChange(fundToggle)\">\r\n\r\n                  <div class=\"slider round\"></div>\r\n\r\n                </label>\r\n\r\n                <label class=\"control-label ml-10\" [class.selected]=\"fundToggle\"\r\n                (click)=\"onLabelToggleChange('fundActivity',true)\">MF</label>\r\n\r\n              </div>\r\n\r\n            </h4>\r\n\r\n\r\n\r\n            <div class=\"col-md-12 embed-responsive embed-responsive-16by9\">\r\n\r\n              <ngx-charts-bar-vertical class=\"embed-responsive-item\" [scheme]=\"colorScheme\" [results]=\"fundView\"\r\n                [gradient]=\"gradient\" [xAxis]=\"showXAxis\" [barPadding]=\"30\" [yAxis]=\"showYAxis\" [showGridLines]=\"true\"\r\n                [legend]=\"showLegend\" [showXAxisLabel]=\"showXAxisLabel\" [showYAxisLabel]=\"showYAxisLabel\"\r\n                [xAxisLabel]=\"xAxisLabel\" [yAxisLabel]=\"yAxisLabel\">\r\n\r\n              </ngx-charts-bar-vertical>\r\n\r\n            </div>\r\n\r\n          </div>\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12 flexbox\">\r\n\r\n        <div class=\"card flexauto\">\r\n\r\n          <div class=\"card-block clearfix\">\r\n\r\n            <h4 class=\"heading padding-0 bold mb-20\">Sector Performance\r\n\r\n              <div class=\"switch-wrap\">\r\n\r\n                <label class=\"control-label mr-10\" [class.selected]=\"!sectorToggle\"\r\n                (click)=\"onLabelToggleChange('sector',false)\">NSE</label>\r\n\r\n                <label class=\"switch\">\r\n\r\n                  <input type=\"checkbox\" name=\"fundToggle\" [(ngModel)]=\"sectorToggle\"\r\n                    (change)=\"onSectorChange(sectorToggle)\">\r\n\r\n                    <div class=\"slider round\"></div>\r\n\r\n                  </label>\r\n\r\n                  <label class=\"control-label ml-10\" [class.selected]=\"sectorToggle\"\r\n                  (click)=\"onLabelToggleChange('sector',true)\">BSE</label>\r\n\r\n                </div>\r\n\r\n              </h4>\r\n\r\n\r\n\r\n              <div class=\"col-md-12 embed-responsive embed-responsive-16by9\">\r\n\r\n                <ngx-charts-bar-vertical class=\"embed-responsive-item\" [scheme]=\"sectorColorScheme\" [results]=\"sectorView\"\r\n                  [gradient]=\"gradient\" [xAxis]=\"showXAxis\" [barPadding]=\"20\" [yAxis]=\"showYAxis\" [showGridLines]=\"true\"\r\n                  [legend]=\"showLegend\" [showXAxisLabel]=\"showXAxisLabel\" [showYAxisLabel]=\"showYAxisLabel\"\r\n                  [xAxisLabel]=\"xAxisLabel\" [yAxisLabel]=\"yAxisLabel\">\r\n\r\n                </ngx-charts-bar-vertical>\r\n\r\n              </div>\r\n\r\n            </div>\r\n\r\n          </div>\r\n\r\n        </div>\r\n\r\n\r\n\r\n        <!-- added open an account banner (12/05/2021) -->\r\n\r\n        <!-- <section class=\"seo-section clearfix\"  *ngIf=\"(!sharedDataService.userId || sharedDataService.userId == 'guest')\">\r\n\r\n        <div class=\"col-md-12\">\r\n\r\n          <div class=\"card mb-0\">\r\n\r\n            <div class=\"card-block\">\r\n\r\n              <img src=\"../../../assets/images/Open-Free-Account1.png\" alt=\"Online Stock Trading Platform\" class=\"img-responsive\" (click)=\"utilsService.navigateToOpenAccount()\"/>\r\n\r\n            </div>\r\n\r\n          </div>\r\n\r\n        </div>\r\n\r\n      </section> -->\r\n\r\n      <!-- Advert Banner :: Start -->\r\n\r\n      @if ((!sharedDataService.userId || sharedDataService.userId == 'guest')) {\r\n        <section>\r\n          <div class=\"container\" (click)=\"utilsService.navigateToOpenFreeAccount()\">\r\n            <div class=\"row add_banner_sub red-theme\">\r\n              <div class=\"col-md-6 add-left-text\">\r\n                <div class=\"add-left-sub\">\r\n                  <h2>Wait! <span class=\"small-font\">Before You Go</span></h2>\r\n                  <h4>OPEN A FREE</h4>\r\n                  <h3>DEMAT ACCOUNT</h3>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-6 add-right-text\">\r\n                <div class=\"add-right-sub\">\r\n                  <ul>\r\n                    <li><span>+</span> Zero Account Opening Fee </li>\r\n                    <li><span>+</span> Free First Year AMC </li>\r\n                    <li><span>+</span> Zero Square Off Charges </li>\r\n                    <li><span>+</span> Zero Call for Trade Charges</li>\r\n                  </ul>\r\n                  <a class=\"add-btn\">OPEN MY ACCOUNT</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </section>\r\n      }\r\n\r\n\r\n\r\n      <section class=\"clearfix\">\r\n\r\n        <div class=\"col-md-12\">\r\n\r\n          <div class=\"card mb-0\">\r\n\r\n            <div class=\"card-block\">\r\n\r\n              <h4 class=\"heading padding-0 bold mb-20\">Share market live</h4>\r\n\r\n              <p>Here you can see the overview of the <b>equity segment</b>. Choice FinX aims to capture the pulse of the\r\n              <b>Indian stock market live</b> and bring you the latest of the stock market as the action unfolds.\r\n\r\n            </p>\r\n\r\n            &nbsp;&nbsp;\r\n\r\n            <h4 class=\"heading padding-0 bold mb-20\">NSE stock market live - BSE stock market live</h4>\r\n\r\n            <p>The market sure is an exciting place to be especially in a booming economy such as ours. This page is\r\n              created in such a way as to give the complete status of the <b>equity market today </b>at a glance. The top\r\n              strip shows your major indices and commodities like Bank Nifty, SENSEX, MCXCRUDE, INDIAVIX, BSE100 and\r\n              others.\r\n\r\n              Right below on the left is the dropdown box - EQUITY default selection as NIFTY 50 with updates being shown\r\n              on the right of NSE and NIFTY. The updates are periodically updated to bring the latest updates. From the\r\n              dropdown you can select the various equity indices and the updated data will be shown on the left\r\n              immediately.\r\n\r\n              Next on the page is the chart of the select index. You can select the time periods or other selections as\r\n              well.\r\n\r\n              Right below is the Top Gainer/ Top Loser chart of Equities – Derivatives - Commodities – Currencies. You can\r\n              toggle between Gainer – Loser or NSE – BSE\r\n\r\n              Last section has 2 charts, one for Fund Activity and other for Sector Performance.\r\n\r\n            </p>\r\n\r\n          </div>\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </section>\r\n\r\n  </div>";

/***/ })

}]);