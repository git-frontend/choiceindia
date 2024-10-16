(self["webpackChunkjiffy_upgraded"] = self["webpackChunkjiffy_upgraded"] || []).push([[9607],{

/***/ 58915:
/*!**********************************************************************************!*\
  !*** ./src/app/common-module/tv-chart-container/tv-chart-container.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TvChartContainerComponent: () => (/* binding */ TvChartContainerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _tv_chart_container_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tv-chart-container.component.html?ngResource */ 35693);
/* harmony import */ var _tv_chart_container_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tv-chart-container.component.scss?ngResource */ 36367);
/* harmony import */ var _tv_chart_container_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tv_chart_container_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/analytics/analytics.service */ 50213);
/* harmony import */ var src_app_services_rest_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/rest/common.service */ 18056);
/* harmony import */ var src_app_services_rest_company_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/rest/company.service */ 12744);
/* harmony import */ var src_app_services_rest_tool_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/rest/tool.service */ 91387);
/* harmony import */ var src_app_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/shared-data/shared-data.service */ 46013);
/* harmony import */ var src_app_services_sockets_socket_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/sockets/socket.service */ 6312);
/* harmony import */ var src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/utils/utils.service */ 89893);
/* harmony import */ var _assets_charting_library_charting_library_esm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../assets/charting_library/charting_library.esm */ 17786);
/* harmony import */ var _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../../assets/libs/esm-moment.min.js */ 29483);











// import { Subscription } from "rxjs";
//import { moment } from 'ngx-bootstrap/chronos/test/chain';




let TvChartContainerComponent = class TvChartContainerComponent {
  set symbol(scripName) {
    this._symbol = scripName || this.scripName;
  }
  set interval(interval) {
    this._interval = interval || this._interval;
  }
  set datafeedUrl(datafeedUrl) {
    this._datafeedUrl = datafeedUrl || this._datafeedUrl;
  }
  set libraryPath(libraryPath) {
    this._libraryPath = libraryPath || this._libraryPath;
  }
  set chartsStorageUrl(chartsStorageUrl) {
    this._chartsStorageUrl = chartsStorageUrl || this._chartsStorageUrl;
  }
  set chartsStorageApiVersion(chartsStorageApiVersion) {
    this._chartsStorageApiVersion = chartsStorageApiVersion || this._chartsStorageApiVersion;
  }
  set clientId(clientId) {
    this._clientId = clientId || this._clientId;
  }
  set userId(userId) {
    this._userId = userId || this._userId;
  }
  set fullscreen(fullscreen) {
    this._fullscreen = fullscreen || this._fullscreen;
  }
  set details(details) {
    this._details = details || this._details;
  }
  set disableFeatures(disableFeatures) {
    this._disableFeatures = disableFeatures || this._disableFeatures;
  }
  set autosize(autosize) {
    this._autosize = autosize || this._autosize;
  }
  set containerId(containerId) {
    this._containerId = containerId || this._containerId;
  }
  set theme(theme) {
    this._theme = theme || this._theme;
  }
  /**
   * Constructor for Object Initialization
   * @param socket SocketService instance
   * @param rest CompanyService instance for HTTP Request
   * @param utils UtilsService instance
   * @param shared SharedDataService instance
   * @param router Router Module Instance
   */
  constructor(renderer, analytics, socket, commonService, rest, utils, shared, router, locationStrategy, cdRef, zone, toolsService, activatedRoute, location) {
    this.renderer = renderer;
    this.analytics = analytics;
    this.socket = socket;
    this.commonService = commonService;
    this.rest = rest;
    this.utils = utils;
    this.shared = shared;
    this.router = router;
    this.locationStrategy = locationStrategy;
    this.cdRef = cdRef;
    this.zone = zone;
    this.toolsService = toolsService;
    this.activatedRoute = activatedRoute;
    this.location = location;
    /** Config for Chart */
    this.chartConfig = {};
    /**
     * preLogin Variable
     */
    this.showPreLogin = false;
    this._symbol = "NA";
    this._interval = "1";
    // BEWARE: no trailing slash is expected in feed URL
    this._datafeedUrl = "https://demo_feed.tradingview.com";
    this._libraryPath = "/assets/charting_library/";
    this._chartsStorageUrl = "https://finx.choiceindia.com";
    this._chartsStorageApiVersion = "1.1";
    this._clientId = "finx.choiceindia.com";
    this._userId = this.utils.getUserId();
    this._fullscreen = false;
    this._disableFeatures = false;
    this._autosize = false;
    this._details = false;
    this._containerId = "tv_chart_container";
    this._theme = "Dark";
    this._tvWidget = null;
    this.storageCounter = 1;
    this.timezone = "Asia/Kolkata";
    this.config = {
      supported_resolutions: !this.disableFeatures ? this.getResolutionsData() : ['1'],
      /*     exchanges: [{
            value: 'PancakeSwap',
            name: 'PancakeSwap',
            desc: 'PancakeSwap',
          }], */
      symbols_types: [{
        name: 'ALL',
        value: ''
      }, {
        name: 'EQUITY',
        value: 'EQ'
      }, {
        name: 'DERIVATIVES',
        value: 'FO'
      }, {
        name: 'CURRENCIES',
        value: 'CD'
      }, {
        name: 'COMMODITIES',
        value: 'COM'
      }],
      supports_time: true,
      //to true
      supports_marks: true,
      supports_timescale_marks: true
    };
    this.checkIfIndex = (segment, token) => {
      this.isCurrentIndex = segment == 1 && 25998 <= token && token <= 26999 ||
      // NIFTY, NIFTY100, NIFTY500, BANKNIFTY
      segment == 3 && token <= 19999; //SENSEX,
      // console.log(this.isCurrentIndex,"isCurrentIndex",segment,token)
    };
    this.checkIfIndexv2 = (segment, token) => {
      return segment == 1 && 25998 <= token && token <= 26999 ||
      // NIFTY, NIFTY100, NIFTY500, BANKNIFTY
      segment == 3 && token <= 19999; //SENSEX,
      //  console.log(this.isCurrentIndex,"isCurrentIndex",segment,token)
    };
    this.isTimeEqualHekin = (newData, lastData, newvol) => {
      newvol = !newvol ? 0 : newvol;
      let prevConfig = {
        "1": {
          time: 1,
          startOf: "minute"
        },
        "2": {
          time: 2,
          startOf: "minute"
        },
        "3": {
          time: 3,
          startOf: "minute"
        },
        "5": {
          time: 5,
          startOf: "minute"
        },
        "10": {
          time: 10,
          startOf: "minute"
        },
        "15": {
          time: 15,
          startOf: "minute"
        },
        "30": {
          time: 30,
          startOf: "minute"
        },
        "45": {
          time: 45,
          startOf: "minute"
        },
        "60": {
          time: 1,
          startOf: "hour"
        },
        "240": {
          time: 4,
          startOf: "hour"
        },
        "1D": {
          time: 1,
          startOf: "day"
        },
        "1W": {
          time: 1,
          startOf: "week"
        },
        "1M": {
          time: 1,
          startOf: "month"
        },
        "D": {
          time: 1,
          startOf: "day"
        },
        "W": {
          time: 1,
          startOf: "week"
        },
        "M": {
          time: 1,
          startOf: "month"
        }
      };
      //console.log("isTimeEqual", newData, lastData)
      let duration = prevConfig[this.topInterval || 1]; //{ value: "1", label: "1 min", multiplier: 1, base: "today", startOf: "minute", periodicity: 1, timeUnit: 'minute', index: 0 };
      let newTime = new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_10__["default"](newData).endOf(duration.startOf);
      let lastTime = new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_10__["default"](this.lastData).endOf(duration.startOf);
      //console.log(newData, lastData,"isTimeEqual2", Number(duration.time),"DIFF",moment.duration(newTime.diff(lastTime)).as(duration.startOf))
      let time;
      let vol = 0;
      if (_assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_10__["default"].duration(newTime.diff(lastTime)).as(duration.startOf) < Number(duration.time)) {
        time = lastTime.valueOf();
        if (!this.headsUp.v2) {
          this.headsUp.v2 = 0;
        }
        this.headsUp.v2 = this.headsUp.v2 + newvol;
        vol = this.headsUp.v2;
      } else {
        vol = newvol;
        this.headsUp.v2 = vol;
        time = new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_10__["default"](newData).endOf(duration.startOf).valueOf();
        this.lastData = time;
      }
      ;
      return {
        time,
        vol
      };
    };
    this.removeLastHekin = (newData, lastData) => {
      let prevConfig = {
        "1": {
          time: 1,
          startOf: "minute"
        },
        "2": {
          time: 2,
          startOf: "minute"
        },
        "3": {
          time: 3,
          startOf: "minute"
        },
        "5": {
          time: 5,
          startOf: "minute"
        },
        "10": {
          time: 10,
          startOf: "minute"
        },
        "15": {
          time: 15,
          startOf: "minute"
        },
        "30": {
          time: 30,
          startOf: "minute"
        },
        "45": {
          time: 45,
          startOf: "minute"
        },
        "60": {
          time: 1,
          startOf: "hour"
        },
        "240": {
          time: 4,
          startOf: "hour"
        },
        "1D": {
          time: 1,
          startOf: "day"
        },
        "1W": {
          time: 1,
          startOf: "week"
        },
        "1M": {
          time: 1,
          startOf: "month"
        },
        "D": {
          time: 1,
          startOf: "day"
        },
        "W": {
          time: 1,
          startOf: "week"
        },
        "M": {
          time: 1,
          startOf: "month"
        }
      };
      //console.log("isTimeEqual", newData, lastData)
      let duration = prevConfig[this.topInterval || 1]; //{ value: "1", label: "1 min", multiplier: 1, base: "today", startOf: "minute", periodicity: 1, timeUnit: 'minute', index: 0 };
      let newTime = new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_10__["default"](newData).endOf(duration.startOf);
      let lastTime = new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_10__["default"](lastData).endOf(duration.startOf);
      return _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_10__["default"].duration(newTime.diff(lastTime)).as(duration.startOf) < Number(duration.time);
    };
    this.dataSearch = {};
    this.isCurrentIndex = false;
    this.routeStack = [];
    this.chartSavedData = [];
    this.previousPreMappedData = [];
    this.savedConfig = {
      charts: [],
      studyTemplates: [],
      drawingTemplates: []
    };
    this.chartConfig = {};
    this.scripInfo = {};
    this.lastSocketVolume = 0;
    this.symbolList = [];
    this.belowInterval = 1;
    this.periodParams = {};
    this.resolution = null;
    this.realtimeCallback = null;
    this.onHistoryCallback = null;
    this.filteredData = [];
    this.scripName = "No Title";
    this.token = null;
    this.topInterval = "1";
    this.segmentId = null;
    this.chart = {
      time: "1",
      type: "colored_line"
    };
    this.headsUp = {};
    this.socketData = {};
    this.getData = new _angular_core__WEBPACK_IMPORTED_MODULE_11__.EventEmitter();
    this.getResolution = new _angular_core__WEBPACK_IMPORTED_MODULE_11__.EventEmitter();
    this.setInterval = new _angular_core__WEBPACK_IMPORTED_MODULE_11__.EventEmitter();
    this.fetchNewData = new _angular_core__WEBPACK_IMPORTED_MODULE_11__.EventEmitter();
    this.onChartReady = new _angular_core__WEBPACK_IMPORTED_MODULE_11__.EventEmitter();
    this.onSearchClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_11__.EventEmitter();
    this.sessionId = "";
  }
  /**
   * Life Cycle Hook for Input Changes
   * @param changes SimpleChanges instance for incoming Changes
   */
  ngOnChanges(changes) {
    if (changes["responseData"]) {
      // this.responseData = changes["responseData"].currentValue;
      // if (this.responseData && this.responseData.length) {
      //   this.cdRef.detectChanges();
      // }
    }
    if (changes["chartId"]) {
      this.chartId = changes["chartId"].currentValue;
    }
    if (changes["isExpanded"]) {
      this.isExpanded = changes["isExpanded"].currentValue;
      if (this.isExpanded) {
        this.topInterval = localStorage.getItem((this.chartId && this.chartId != 'chart0' ? this.chartId + "_" : "") + "_interval") && localStorage.getItem((this.chartId && this.chartId != 'chart0' ? this.chartId + "_" : "") + "topInterval") ? localStorage.getItem((this.chartId && this.chartId != 'chart0' ? this.chartId + "_" : "") + "topInterval") : "1";
        this._interval = localStorage.getItem((this.chartId && this.chartId != 'chart0' ? this.chartId + "_" : "") + "topInterval") && localStorage.getItem((this.chartId && this.chartId != 'chart0' ? this.chartId + "_" : "") + "_interval") ? localStorage.getItem((this.chartId && this.chartId != 'chart0' ? this.chartId + "_" : "") + "_interval") : "1";
        //  this.currentChartType=localStorage.getItem("currentChartType")  ? localStorage.getItem("currentChartType") : "1"
      }
    }
    if (changes["patchedResponseData"]) {
      this.patchedResponseData = changes["patchedResponseData"].currentValue;
      if (this.patchedResponseData && this.patchedResponseData.length) {
        if (this.patchedResponseData[0].clear) {} else {
          this.responseData = this.patchedResponseData;
          if (this.periodParams && this.periodParams.firstDataRequest && this.belowInterval == '1W') {
            let func = data => {
              this.onHistoryCallback(data, {
                noData: data.length == 0
              });
            };
            // this.convertToBar(this.from, this.to, "1", func)
          } else {
            let func = data => {
              this.onHistoryCallback(data, {
                noData: data.length == 0
              });
            };
            //  this.convertToBar(this.from, this.to, "2", func)
          }
        }
      }
    }
    if (changes["scripName"]) {
      this.scripName = changes["scripName"].currentValue;
      this.symbolList = [{
        Symbol: this.scripName,
        SecName: this.scripDesc || this.scripName,
        isConf: true
      }];
    }
    if (changes["b5Data"] && changes["b5Data"].currentValue) {
      this.b5Data = changes["b5Data"].currentValue;
      this.cdRef.detectChanges();
      if (this.realtimeCallback && this.b5Data && this.b5Data.time && !isNaN(this.b5Data.time) && Object.keys(this.b5Data).length > 0) {
        if (this.realtimeCallback) {
          this.realtimeCallback(this.b5Data);
        }
      }
    }
    if (changes["token"] && this.token && this.segmentId) {}
    if (changes["segmentId"]) {
      this.segmentId = changes["segmentId"].currentValue;
    }
    if (changes["token"] && changes["token"].currentValue) {
      this.token = changes["token"].currentValue;
      this.getScripDetail(this.segmentId, this.token, true);
      this.checkIfIndex(this.segmentId, this.token);
    }
    if (changes["intervalTv"]) {
      //if( this._tvWidget && this._tvWidget.activeChart()){
      // this._tvWidget.activeChart().executeActionById("changeInterval",changes["intervalTv"].currentValue);
      if (changes["intervalTv"].currentValue) {
        this._interval = changes["intervalTv"].currentValue;
        this.topInterval = changes["intervalTv"].currentValue;
        if (localStorage.getItem((this.chartId && this.chartId != 'chart0' ? this.chartId + "_" : "") + 'currentChartType')) this.currentChartType = localStorage.getItem((this.chartId && this.chartId != 'chart0' ? this.chartId + "_" : "") + 'currentChartType');
        if (this._tvWidget && this._tvWidget.activeChart()) {
          // this._tvWidget.activeChart().executeActionById("changeInterval",changes["intervalTv"].currentValue);
          this.loadTradingViewData(null, true);
          //  this._tvWidget.activeChart().setChartType(Number(this.currentChartType));
        }
      }
      // if(this.currentChartType||this.currentChartType===0||this.currentChartType==="0"){
      // }
      //   }
      /*  if(this.isExpanded)
       this.utils.subscribeMultitouchline([{ SegmentId: this.segmentId, Token: this.token }]); */
    }
    if (changes["chartTypeSet"]) {
      if (this._tvWidget && this._tvWidget.activeChart()) {
        this.currentChartType = changes["chartTypeSet"].currentValue;
        localStorage.setItem((this.chartId && this.chartId != 'chart0' ? this.chartId + "_" : "") + 'currentChartType', this.currentChartType);
        if (this.currentChartType || this.currentChartType === 0 || this.currentChartType === "0") {
          if (this._tvWidget) this._tvWidget.activeChart().setChartType(Number(this.currentChartType));
        }
      }
      /*  if(this.isExpanded)
       this.utils.subscribeMultitouchline([{ SegmentId: this.segmentId, Token: this.token }]); */
    }
  }
  ngOnInit() {
    // if (window.performance && window.performance.navigation.type == window.performance.navigation.TYPE_BACK_FORWARD) {
    //   alert('hello world');
    // }
    this.routeStack[0] = {
      url: this.router.url,
      scripDesc: ''
    };
    this.activeRoute = 0;
    this.savedConfig = {
      charts: localStorage.getItem((this.chartId && this.chartId != 'chart0' ? this.chartId + "_" : "") + 'charts_info') ? JSON.parse(localStorage.getItem((this.chartId && this.chartId != 'chart0' ? this.chartId + "_" : "") + 'charts_info')) : [],
      studyTemplates: localStorage.getItem((this.chartId && this.chartId != 'chart0' ? this.chartId + "_" : "") + 'studyTemplates_info') ? JSON.parse(localStorage.getItem((this.chartId && this.chartId != 'chart0' ? this.chartId + "_" : "") + 'studyTemplates_info')) : [],
      drawingTemplates: localStorage.getItem((this.chartId && this.chartId != 'chart0' ? this.chartId + "_" : "") + 'drawingTemplates_info') ? JSON.parse(localStorage.getItem((this.chartId && this.chartId != 'chart0' ? this.chartId + "_" : "") + 'drawingTemplates_info')) : []
    };
    //   this.router.events.subscribe((event) => {
    //     console.log("NavigationEnd")
    //     if (event instanceof NavigationEnd) {
    //       console.log(event.url,"URL NavigationEnd")
    //         // Hide loading indicator
    //     }
    // });
    if (this.listenerFn) {
      this.listenerFn();
    }
    this.listenerFn = this.renderer.listen('window', 'visibilitychange', event => {
      if (event.target.visibilityState == 'visible') {
        if (this.segmentId) {
          if (this.firstResponseData && this.firstResponseData.length) {
            this.getPatchedData(this.firstResponseData[this.firstResponseData.length - 1].time);
          }
        }
        console.warn("visibilitychange resume request", new Date());
      } else {
        console.warn("visibilitychange pause request", new Date());
      }
    });
    if (this.isExpanded) {
      if (!this.chartId) window.onresize = this.reportWindowSize;
      this.utils.checkAndUpdateWeeklyFeature("chartExperience", 2);
    }
    this.utils.broadcastObservable('orderBuySellClosed').subscribe(res => {
      if (res) {
        setTimeout(() => {
          if (this.chartConfig) this.chartConfig.width = window.innerWidth;
        }, 10);
      }
    });
    if (this.chartConfig && !this.chartId) {
      this.chartConfig.height = window.innerHeight - 35;
      this.chartConfig.width = window.innerWidth;
    }
    //this.getHolidayCalendar()
    //  this.utils.unSubscribeMultitouchline([{ SegmentId: this.segmentId, Token: this.token }], 'watchlist');
    this.activatedRoute.queryParams.subscribe(params => {
      if (params.sessionId) this.sessionId = params.sessionId;
      if (params.scripDesc) {
        this.scripDesc = params.scripDesc;
      }
    });
  }
  ngAfterViewInit() {}
  reportWindowSize() {
    // this.reportWindowSizeMul()
    if (location.pathname.indexOf('trading-view-charts-watch') > -1) {
      setTimeout(() => {
        //  let doc = this._tvWidget['_iFrame'].contentDocument || this._tvWidget['_iFrame'].contentWindow.document
        let ele1 = document.getElementById(this.chartId || 'tv_chart_container');
        let ele = ele1.getElementsByTagName('iframe')[0];
        if (ele) {
          if (!this.chartId) ele.style.height = window.innerHeight - 110 + "px";
          // ele.setAttribute('width', window.innerWidth + "px")
          // ele.setAttribute('height', (window.innerHeight-200) + "px")
        }
        if (this.chartConfig && !this.chartId) {
          this.chartConfig.width = window.innerWidth;
          this.chartConfig.height = window.innerHeight - 110;
        }
      }, 50);
    }
  }
  reportWindowSizeMul() {
    if (location.pathname.indexOf('tv-charts') > -1) {
      setTimeout(() => {
        //  let doc = this._tvWidget['_iFrame'].contentDocument || this._tvWidget['_iFrame'].contentWindow.document
        let ele1 = document.getElementById(this.chartId || 'tv_chart_container');
        let ele = ele1.getElementsByTagName('iframe')[0];
        // console.log("reportWindowSize called",ele)
        if (ele) {
          ele.style.height = 100 + "%";
          // ele.setAttribute('width', window.innerWidth + "px")
          // ele.setAttribute('height', (window.innerHeight-200) + "px")
        }
        if (this.chartConfig) {
          this.chartConfig.height = 100;
        }
      }, 50);
    }
  }
  getSocketData(responseData) {
    if (this.socketStatusSubscription) {
      this.socketStatusSubscription.unsubscribe();
    }
    if (this.socketSubscription) {
      this.socketSubscription.unsubscribe();
    }
    this.socketStatusSubscription = this.socket.broadcaster.on('internetConnectionStatus').subscribe(isConnected => {
      this.utils.unSubscribeMultitouchline([{
        SegmentId: this.segmentId,
        Token: this.token
      }]);
      setTimeout(() => {
        this.utils.subscribeMultitouchline([{
          SegmentId: this.segmentId,
          Token: this.token
        }]);
      }, 100);
    });
    this.socketSubscription = this.socket.broadcaster.on('watchlist').subscribe(data => {
      // console.log("datadatadata: ",data)
      // let reference = this.watchListData[this.activeWatchlist - 1].filter((obj) => {
      //   return obj.SegmentId == data[0][1] && obj.Token == data[0][7];
      // });
      // if (reference.length > 0 && this.utils.isUpdatedData(reference[0], data[0])) {
      //   reference[0] = this.changeColor(data[0], reference);
      //   // setTimeout((scrip) => {
      //   //   if (scrip)
      //   //     scrip.prevChange = 0;
      //   // }, 500, reference[0]);
      // }
      //this.marketStatus = this.utils.getMarketStatus(this.segmentId);
      /*  if (this.marketStatus && this.marketStatus.status && !this.marketStatus.status[1]) {
          return false;
         }
         else{
           console.log("responseString ELse")
       } */
      if (data[0][1] == this.segmentId && data[0][7] == this.token && responseData && responseData.length) {
        console.log("CHECK DATA", data);
        let LTT = new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_10__["default"](responseData[responseData.length - 1].DT).format('DD-MM-YYYY HH:mm:ss');
        let previousData = {
          LTT: LTT,
          LUT: LTT,
          Volume: responseData[responseData.length - 1].Volume
        };
        // if (!this.utils.isUpdatedData(previousData, data[0])) return;
        console.log("CHECK DATA2", data);
        let priceDivisor = this.utils.getPriceDivisor(this.segmentId);
        this.previousClose = Number(data[0][76]) / priceDivisor;
        let ltp = Number(data[0][8] == 0) ? this.previousClose : Number(data[0][8]) / priceDivisor;
        this.headsUp.Open = Number(data[0][8]) == 0 ? this.previousClose : Number(data[0][75]) / priceDivisor; //if ltp = 0 then show prevclose (24/05/2021)
        this.headsUp.High = Number(data[0][8]) == 0 ? this.previousClose : Number(data[0][77]) / priceDivisor; //if ltp = 0 then show prevclose (24/05/2021)
        this.headsUp.Low = Number(data[0][8]) == 0 ? this.previousClose : Number(data[0][78]) / priceDivisor; //if ltp = 0 then show prevclose (24/05/2021)
        this.headsUp.Close = this.previousClose;
        this.headsUp.Volume = this.isCurrentIndex ? 0 : Number(data[0][79]);
        let lastVol = this.prevVolume != undefined && Number(data[0][79]) > this.prevVolume ? Number(data[0][79]) - this.prevVolume : 0;
        this.prevVolume = this.headsUp.Volume;
        this.socketData = {
          "DT": new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_10__["default"](data[0][74], 'YYYY-MM-DD HHmmss'),
          "Close": ltp,
          "Open": this.headsUp.Open,
          "Low": this.headsUp.Low,
          "High": this.headsUp.High,
          "Volume": lastVol
        };
        this.processSocketData(responseData);
      }
    });
  }
  processSocketData(responseData) {
    console.log("CHECK DATA3", responseData);
    // console.log("datadatadata processSocketData",this.socketData)
    if (responseData && responseData.length && this.socketData) {
      let datapoint = {
        "DT": new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_10__["default"](this.socketData.DT).toDate(),
        "Close": this.socketData.Close,
        "Open": this.socketData.Open,
        "Low": this.socketData.Low,
        "High": this.socketData.High,
        "Volume": this.socketData.Volume
      };
      // this.lastSocketVolume=0;
      let lastDataPoint = responseData[responseData.length - 1];
      if (this.topInterval == 'D' || this.topInterval == '1D' || this.topInterval == 'W' || this.topInterval == '1W' || this.topInterval == 'M' || this.topInterval == '1M') {
        datapoint.Close = datapoint.Close;
        datapoint.Open = lastDataPoint.open;
        datapoint.High = lastDataPoint.high > datapoint.Close ? lastDataPoint.high : datapoint.Close;
        datapoint.Low = lastDataPoint.low < datapoint.Close ? lastDataPoint.low : datapoint.Close;
        datapoint.Volume = this.isCurrentIndex ? 0 : lastDataPoint.Volume + datapoint.Volume;
        datapoint.DT = lastDataPoint.time;
        /*   if(this.topInterval == 'D'){
            console.log("datapoint",datapoint)
          } */
      } else if (this.socketData.DT && lastDataPoint.DT && this.isTimeEqual(this.socketData.DT, lastDataPoint.DT)) {
        datapoint.Close = datapoint.Close;
        datapoint.Open = lastDataPoint.Open;
        datapoint.High = lastDataPoint.High > datapoint.Close ? lastDataPoint.High : datapoint.Close;
        datapoint.Low = lastDataPoint.Low < datapoint.Close ? lastDataPoint.Low : datapoint.Close;
        datapoint.Volume = this.isCurrentIndex ? 0 : lastDataPoint.Volume + datapoint.Volume;
        datapoint.DT = lastDataPoint.DT;
      } else {
        datapoint.Close = datapoint.Close;
        datapoint.Open = datapoint.Close;
        datapoint.High = datapoint.Close;
        datapoint.Low = datapoint.Close;
        datapoint.Volume = this.isCurrentIndex ? 0 : datapoint.Volume; //this.lastSocketVolume?this.socketData.Volume-this.lastSocketVolume:lastDataPoint.Volume;// datapoint.Volume //lastDataPoint.Volume,//
      }
      //this.socketDate
      if ((!this.currentChartType || this.currentChartType !== 0) && this._tvWidget) {
        this.currentChartType = this._tvWidget && this._tvWidget.activeChart() ? this._tvWidget.activeChart().chartType() : 2;
      }
      let time;
      let vol;
      if (this.currentChartType == 8) {
        let insideObj = this.isTimeEqualHekin(new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_10__["default"](datapoint.DT || this.socketData.DT).seconds(0).milliseconds(0).valueOf(), new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_10__["default"](this.lastData).seconds(0).milliseconds(0).valueOf(), datapoint.Volume);
        time = insideObj.time;
        vol = insideObj.vol;
        //Prev data and current socket data time is in same interval range
        //if((new moment(datapoint.DT || this.socketData.DT).seconds(0).milliseconds(0).valueOf() == new moment(this.lastData).seconds(0).milliseconds(0).valueOf()) && new moment(this.lastData).seconds() < 59){
        //   if(this.isTimeEqualHekin(new moment(datapoint.DT || this.socketData.DT).seconds(0).milliseconds(0).valueOf(),new moment(this.lastData).seconds(0).milliseconds(0).valueOf())){
        // time =new moment(datapoint.DT || this.socketData.DT).seconds(new moment(this.lastData).seconds()).milliseconds(999).valueOf()
        //   console.log("IN 1st currentChartType : ", this.currentChartType," with time : ",time)
        // }else{
        //   time = new moment(datapoint.DT || this.socketData.DT).milliseconds(999).valueOf()
        //   this.lastData = time;
        //   console.log("IN 2nd currentChartType : ", this.currentChartType," with time : ",time)
        // }
      } else {
        time = new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_10__["default"](datapoint.DT || this.socketData.DT).valueOf();
      }
      if (!this.lastData) {
        this.lastData = time;
      }
      if (Intl.DateTimeFormat().resolvedOptions().timeZone != 'Asia/Calcutta' && this.socketData.DT && this.socketData.DT._d) {
        let d = this.socketData.DT._d.toString();
        let str = d.split(' ').slice(0, 5);
        time = new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_10__["default"](str.join(" ") + " GMT+0530").valueOf();
      }
      //let time = this.currentChartType == 8 ? new moment( this.socketData.DT).seconds(0).milliseconds(0).valueOf() : new moment(datapoint.DT || this.socketData.DT).valueOf();
      //     console.log(time,"this.currentChartType == 8",this.currentChartType, this._tvWidget.activeChart().chartType())
      let dataFormated = {
        time,
        low: Number(datapoint.Low) || 0,
        high: Number(datapoint.High) || 0,
        open: Number(datapoint.Open) || 0,
        close: Number(datapoint.Close) || 0,
        volume: this.isCurrentIndex ? 0 : this.currentChartType == 8 ? vol || Number(datapoint.Volume || 0) : Number(datapoint.Volume || 0)
      };
      if ((this.topInterval == 'D' || this.topInterval == '1D' || this.topInterval == 'W' || this.topInterval == '1W' || this.topInterval == 'M' || this.topInterval == '1M') && responseData && responseData.length) {
        this.lastSocketVolume = this.lastSocketVolume + dataFormated.volume;
        dataFormated.volume = this.isCurrentIndex ? 0 : this.lastSocketVolume + responseData[responseData.length - 1].volume;
      }
      /* if((this.topInterval!='D')&&(this.topInterval!='W')&&(this.topInterval!='M')&&responseData&&responseData.length){
        this.realtimeCallback(dataFormated)
      } */
      // let isNewBar = new moment(lastData.DT).valueOf() !== null && new moment(datapoint.DT ||this.socketData.DT).valueOf() > new moment(lastData.DT).valueOf();
      if (this.isCurrentIndex) {
        delete dataFormated.volume;
      }
      console.log("dataFormateddataFormated CHECK DATA", dataFormated);
      if (this.realtimeCallback) {
        if (!this.lastDataGiven || this.topInterval == 'D' || this.topInterval == '1D' || this.topInterval == 'W' || this.topInterval == '1W' || this.topInterval == 'M' || this.topInterval == '1M' || dataFormated.time > this.lastDataGiven.time || this.currentChartType == 8) {
          console.log("dataFormateddataFormated CHECK DATA inside", dataFormated);
          this.realtimeCallback(dataFormated);
          this.lastDataGiven = dataFormated;
        }
      } else {
        //  console.log("realtimeCallback dataFormated not exist: ",dataFormated)
      }
      /*  this.zone.run(() => this.fullB5data = dataFormated);
       this.cdRef.markForCheck(); */
    }
  }
  isTimeEqual(newData, lastData) {
    let duration = {
      value: "1",
      label: "1 min",
      multiplier: 1,
      base: "today",
      startOf: "minute",
      periodicity: 1,
      timeUnit: 'minute',
      index: 0
    };
    let newTime = new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_10__["default"](newData).startOf(duration.startOf);
    let lastTime = new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_10__["default"](lastData).startOf(duration.startOf);
    return _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_10__["default"].duration(newTime.diff(lastTime)).as(duration.startOf) < Number(duration.periodicity);
  }
  closePopups() {
    if (this._tvWidget) {
      this._tvWidget.closePopupsAndDialogs();
    }
  }
  getCong(resolutionData, type22) {
    let params = location.search.split("=");
    let urlSymbols = params[1];
    let symbols = [];
    if (!urlSymbols) {
      symbols[0] = this.segmentId + "@" + this.token;
      //return
    } else {
      symbols = urlSymbols.indexOf("%7C") > -1 ? urlSymbols.split("%7C") : urlSymbols.split("|");
    }
    function getLanguageFromURL() {
      const regex = new RegExp("[\\?&]lang=([^&#]*)");
      const results = regex.exec(location.search);
      return results === null ? null : decodeURIComponent(results[1].replace(/\+/g, " "));
    }
    if (localStorage.getItem((this.chartId && this.chartId != 'chart0' ? this.chartId + "_" : "") + 'charts_info') == '[object Object]') {
      localStorage.setItem((this.chartId && this.chartId != 'chart0' ? this.chartId + "_" : "") + 'charts_info', JSON.stringify([]));
    }
    if (localStorage.getItem((this.chartId && this.chartId != 'chart0' ? this.chartId + "_" : "") + 'studyTemplates_info') == '[object Object]') {
      localStorage.setItem((this.chartId && this.chartId != 'chart0' ? this.chartId + "_" : "") + 'studyTemplates_info', JSON.stringify([]));
    }
    if (localStorage.getItem((this.chartId && this.chartId != 'chart0' ? this.chartId + "_" : "") + 'drawingTemplates_info') == '[object Object]') {
      localStorage.setItem((this.chartId && this.chartId != 'chart0' ? this.chartId + "_" : "") + 'drawingTemplates_info', JSON.stringify([]));
    }
    let widgetOptions = {
      symbol: this.scripName,
      datafeed: this.Datafeed,
      //new (window as any).Datafeeds.UDFCompatibleDatafeed(this._datafeedUrl),//Dfeed,//this.Datafeed,//
      //  interval: this._interval,
      /*  'toolbar_bg': '#f1f3f6', */
      theme: this.isExpanded ? location.pathname.indexOf('trading-view-charts-watch') > -1 || location.pathname.indexOf('tv-charts-watch') > -1 ? localStorage.getItem((this.chartId && this.chartId != 'chart0' ? this.chartId + "_" : "") + 'trading_theme_watch') ? localStorage.getItem((this.chartId && this.chartId != 'chart0' ? this.chartId + "_" : "") + 'trading_theme_watch') : "Light" : localStorage.getItem((this.chartId && this.chartId != 'chart0' ? this.chartId + "_" : "") + 'trading_theme') ? localStorage.getItem((this.chartId && this.chartId != 'chart0' ? this.chartId + "_" : "") + 'trading_theme') : "Dark" : this._theme,
      /*  supports_marks:true,"supports_timescale_marks":true, */
      // watchlist: [
      //   "NSE:TCS"
      // ],
      // toolbar_bg: "#f1f3f6",
      // "enable_publishing": false,
      // "allow_symbol_change": true,
      // "details": !this._details,
      container: this.chartId || 'tv_chart_container',
      /*  timeframe: (this.belowInterval == '1W') ? '' : '', */
      /*   volumePaneSize: "tiny", */
      library_path: this._libraryPath,
      timezone: this.timezone,
      auto_save_delay: 1,
      /*
        Watermark
      settings_adapter: {
          initialSettings: {
            symbolWatermark: '{ "visibility": "true", "color": "rgba(131,131,131, 0.15)" }'
          },
          setValue: function(key, value) {  },
          removeValue: function(key) { }
      }, */
      save_load_adapter: {
        getAllCharts: () => {
          return Promise.resolve(this.savedConfig.charts);
        },
        removeChart: id => {
          for (var i = 0; i < this.savedConfig.charts.length; ++i) {
            if (this.savedConfig.charts[i].id === id) {
              this.savedConfig.charts.splice(i, 1);
              localStorage.setItem((this.chartId && this.chartId != 'chart0' ? this.chartId + "_" : "") + 'charts_info', JSON.stringify(this.savedConfig.charts));
              return Promise.resolve();
            }
          }
          return Promise.reject();
        },
        saveChart: chartData => {
          if (!chartData.id) {
            chartData.id = Math.random().toString();
          } else {
            for (var i = 0; i < this.savedConfig.charts.length; ++i) {
              if (this.savedConfig.charts[i].id === chartData.id) {
                this.savedConfig.charts.splice(i, 1);
                //localStorage.setItem('charts_info',JSON.stringify(this.savedConfig.charts))
              }
            }
          }
          // chartData.timestamp = new Date().valueOf();
          this.savedConfig.charts.push(chartData);
          localStorage.setItem((this.chartId && this.chartId != 'chart0' ? this.chartId + "_" : "") + 'charts_info', JSON.stringify(this.savedConfig.charts));
          return Promise.resolve(chartData.id);
        },
        getChartContent: id => {
          for (var i = 0; i < this.savedConfig.charts.length; ++i) {
            if (this.savedConfig.charts[i].id === id) {
              if (this._tvWidget) {
                this._tvWidget.closePopupsAndDialogs();
              }
              return Promise.resolve(this.savedConfig.charts[i].content);
            }
          }
          return Promise.reject();
        },
        removeStudyTemplate: studyTemplateData => {
          for (var i = 0; i < this.savedConfig.studyTemplates.length; ++i) {
            if (this.savedConfig.studyTemplates[i].name === studyTemplateData.name) {
              this.savedConfig.studyTemplates.splice(i, 1);
              localStorage.setItem((this.chartId && this.chartId != 'chart0' ? this.chartId + "_" : "") + 'studyTemplates_info', JSON.stringify(this.savedConfig.studyTemplates));
              return Promise.resolve();
            }
          }
          return Promise.reject();
        },
        getStudyTemplateContent: studyTemplateData => {
          for (var i = 0; i < this.savedConfig.studyTemplates.length; ++i) {
            if (this.savedConfig.studyTemplates[i].name === studyTemplateData.name) {
              /*   if(this._tvWidget){
                  this._tvWidget.activeChart().applyStudyTemplate(JSON.parse(this.savedConfig.studyTemplates[i].content))
                  break
                } */
              return Promise.resolve(this.savedConfig.studyTemplates[i].content);
            }
          }
          return Promise.reject();
        },
        saveStudyTemplate: studyTemplateData => {
          for (var i = 0; i < this.savedConfig.studyTemplates.length; ++i) {
            if (this.savedConfig.studyTemplates[i].name === studyTemplateData.name) {
              this.savedConfig.studyTemplates.splice(i, 1);
              localStorage.setItem((this.chartId && this.chartId != 'chart0' ? this.chartId + "_" : "") + 'studyTemplates_info', JSON.stringify(this.savedConfig.studyTemplates));
              break;
            }
          }
          this.savedConfig.studyTemplates.push(studyTemplateData);
          localStorage.setItem((this.chartId && this.chartId != 'chart0' ? this.chartId + "_" : "") + 'studyTemplates_info', JSON.stringify(this.savedConfig.studyTemplates));
          return Promise.resolve();
        },
        getAllStudyTemplates: () => {
          return Promise.resolve(this.savedConfig.studyTemplates);
        },
        removeDrawingTemplate: (toolName, templateName) => {
          for (var i = 0; i < this.savedConfig.drawingTemplates.length; ++i) {
            if (this.savedConfig.drawingTemplates[i].name === templateName) {
              this.savedConfig.drawingTemplates.splice(i, 1);
              localStorage.setItem((this.chartId && this.chartId != 'chart0' ? this.chartId + "_" : "") + 'drawingTemplates_info', JSON.stringify(this.savedConfig.drawingTemplates));
              return Promise.resolve();
            }
          }
          return Promise.reject();
        },
        loadDrawingTemplate: (toolName, templateName) => {
          for (var i = 0; i < this.savedConfig.drawingTemplates.length; ++i) {
            if (this.savedConfig.drawingTemplates[i].name === templateName) {
              return Promise.resolve(this.savedConfig.drawingTemplates[i].content);
            }
          }
          return Promise.reject();
        },
        saveDrawingTemplate: (toolName, templateName, content) => {
          for (var i = 0; i < this.savedConfig.drawingTemplates.length; ++i) {
            if (this.savedConfig.drawingTemplates[i].name === templateName) {
              this.savedConfig.drawingTemplates.splice(i, 1);
              localStorage.setItem((this.chartId && this.chartId != 'chart0' ? this.chartId + "_" : "") + 'drawingTemplates_info', JSON.stringify(this.savedConfig.drawingTemplates));
              break;
            }
          }
          this.savedConfig.drawingTemplates.push({
            name: templateName,
            content: content
          });
          return Promise.resolve();
        },
        getDrawingTemplates: () => {
          return Promise.resolve(this.savedConfig.drawingTemplates.map(function (template) {
            return template.name;
          }));
        }
      },
      studies_access: {
        type: "black",
        tools: [{
          name: "Correlation Coefficient"
        }, {
          name: 'Correlation - Log'
        }]
      },
      // width: "100%",
      //   height: 300,
      debug: true,
      // container_id: this.chartId || 'tv_chart_container',
      fullscreen: !this._fullscreen,
      // "intraday_multipliers": [
      // /*   1 , 5, 30 */
      //   "1", "5", "15", "30", "60", "240", "1D", "1W"
      // ] ,
      interval: this.isExpanded && localStorage.getItem((this.chartId && this.chartId != 'chart0' ? this.chartId + "_" : "") + "topInterval") && localStorage.getItem((this.chartId && this.chartId != 'chart0' ? this.chartId + "_" : "") + "_interval") ? localStorage.getItem((this.chartId && this.chartId != 'chart0' ? this.chartId + "_" : "") + "_interval") : this._interval || "30",
      // timeframe:["1","2","3","5",,"30","60"].indexOf( this._interval||"30")>-1?'1D':'',
      timeframe: this._interval == '1M' ? '' : this._interval == '1D' ? '' : this._interval == '1W' ? '' : this._interval == '60' || this._interval == '120' ? "" : this._interval == '240' ? "" : this._interval == '30' ? "" : this._interval == '45' ? "" : this._interval == '15' ? "" : this._interval == '10' ? "" : this._interval == '2' ? "" : this._interval == '3' ? "" : this._interval == '5' ? "" : "",
      /*   timeframe: '2D', */
      // has_empty_bars: true,
      locale: "en",
      time_scale: {
        min_bar_spacing: -10
      },
      // locale: getLanguageFromURL() || "en",
      disabled_features: !this._disableFeatures ? [/* (this.chartId?'header_symbol_search':''), */'header_fullscreen_button', 'header_undo_redo', "", 'compare_symbol', 'header_compare', 'go_to_date', 'timezone_menu', 'popup_hints', 'symbol_search_hot_key', this.shared.isAppTradingView ? 'header_symbol_search' : '', symbols.length > 1 ? 'header_screenshot' : ''
      /* 'show_object_tree', */
      /*  'object_tree_legend_mode' */] : [/* (this.chartId?'header_symbol_search':''), */
      'symbol_search_hot_key', "use_localstorage_for_settings", 'timeframes_toolbar',
      //time below
      'popup_hints', 'go_to_date', 'header_widget', /*  'volume_force_overlay', */
      'show_interval_dialog_on_key_press', 'symbol_search_hot_key', 'study_dialog_search_control', 'display_market_status', 'header_compare', 'left_toolbar', 'header_screenshot', /*  'legend_widget', */
      'header_saveload', 'header_symbol_search', 'header_fullscreen_button', 'header_settings', 'header_chart_type', 'header_resolutions',
      //top resolutions
      'control_bar', 'edit_buttons_in_legend', 'main_series_scale_menu', 'star_some_intervals_by_default', 'datasource_copypaste', 'header_indicators', 'context_menus', 'compare_symbol', 'header_undo_redo', /* 'border_around_the_chart', */
      'timezone_menu'
      /*  'show_object_tree', */
      /* 'object_tree_legend_mode' */
      /*   'remove_library_container_border' */],
      enabled_features: !this._disableFeatures ? ['items_favoriting', 'study_templates'] : [''],
      //'study_templates'//"disable_resolution_rebuild"
      // charts_storage_url: this._chartsStorageUrl,
      //  charts_storage_api_version: this._chartsStorageApiVersion,
      /*  client: this._clientId,
       user: this._userId,  */
      custom_css_url: this.chartId ? './custom-multi.css' : './custom-tv.css',
      client_id: this._clientId,
      user_id: this._userId,
      studies_overrides: {},
      // autosize: this._autosize,
      time_frames: [/*   { text: '10y', resolution: 'M' as ResolutionString, title: 'All' }, */
      {
        text: '5y',
        resolution: 'D'
      }, {
        text: '2y',
        resolution: 'D'
      }, {
        text: '1y',
        resolution: 'D'
      }, {
        text: '6m',
        resolution: '60'
      }, {
        text: '3m',
        resolution: '60'
      }, {
        text: '1m',
        resolution: '60'
      }, {
        text: '14d',
        resolution: '30'
      }, {
        text: '7d',
        resolution: '30'
      }, {
        text: '1d',
        resolution: '1',
        title: "1d"
      }]
      // timeframe:'1d',
      // time_scale: {
      //   min_bar_spacing: -10,
      // },
    };
    // if(!this.isExpanded){
    //   widgetOptions.timeframe="1D"
    // //  delete widgetOptions.interval
    // }
    if (this.isExpanded || location.pathname.indexOf('trading-view-charts-watch') > -1) {
      let userId = this.utils.getUserId();
      if (localStorage.getItem((this.chartId && this.chartId != 'chart0' ? this.chartId + "_" : "") + "saved_chart_web") && userId && userId != 'guest') {
        let data = JSON.parse(localStorage.getItem((this.chartId && this.chartId != 'chart0' ? this.chartId + "_" : "") + "saved_chart_web"));
        // if(data&&data.charts&&data.charts[0]&&data.charts[0].chartProperties){
        //   if(this.isExpanded || (location.pathname.indexOf('trading-view-charts-watch')>-1)){
        //     if(location.pathname.indexOf('trading-view-charts-watch')>-1 && localStorage.getItem("saved_chart_web_watch_properties") ){
        //      let chartproperties= JSON.parse(localStorage.getItem("saved_chart_web_watch_properties"))
        //      data.charts[0].chartProperties=chartproperties
        //     }else if(localStorage.getItem("saved_chart_web_properties")  && (!(location.pathname.indexOf('trading-view-charts-watch')>-1))){
        //         let chartproperties= JSON.parse(localStorage.getItem("saved_chart_web_properties"))
        //         data.charts[0].chartProperties=chartproperties
        //       }
        //   }
        //  }
        /*         if(this.isExpanded ){
                  data.paneProperties =   data.expandedpaneProperties||data.paneProperties
                }else{
                  data.paneProperties=  data.watchpaneProperties||data.paneProperties
                } */
        // console.log("saved_data",data)
        // if(data&&data.charts&&data.charts[0]&&data.charts[0].chartProperties)
        // delete data.charts[0].chartProperties
        widgetOptions['saved_data'] = data;
      }
    }
    this._tvWidget = new _assets_charting_library_charting_library_esm__WEBPACK_IMPORTED_MODULE_9__.widget(widgetOptions);
    let timestamp = Date.now();
    let mid = new Date(new Date().setHours(9, 0, 0, 0)).getTime(); //new Date(new Date().getTime() - (24*60*60*1000)).getTime()//
    this._tvWidget.onChartReady(() => {
      this.currentChartType = this._tvWidget.activeChart().chartType();
      // let doc = this._tvWidget['_iFrame'].contentDocument || this._tvWidget['_iFrame'].contentWindow.document
      // doc.getElementById("header-toolbar-symbol-search").addEventListener("click", (event)=>{
      //   console.log("header-toolbar-symbol-search clicked")
      //   event.preventDefault()
      // });
      if (this.chartId) this.onChartReady.emit(this.chartId);
      /*       if(this.intervalSub){
              clearInterval(this.intervalSub)
            } */
      if (type22 && this.currentChartType && !(this.isExpanded || location.pathname.indexOf('trading-view-charts-watch') > -1)) {
        if (this._tvWidget) this._tvWidget.activeChart().setChartType(Number(this.currentChartType));
      } else {
        // localStorage.removeItem('currentChartType')
      }
      if (this.isExpanded || location.pathname.indexOf('trading-view-charts-watch') > -1) {
        if (location.pathname.indexOf('trading-view-charts-watch') > -1 || location.pathname.indexOf('tv-charts-watch') > -1) {
          if (localStorage.getItem((this.chartId && this.chartId != 'chart0' ? this.chartId + "_" : "") + 'trading_theme_watch')) this._tvWidget.changeTheme(localStorage.getItem((this.chartId && this.chartId != 'chart0' ? this.chartId + "_" : "") + 'trading_theme_watch')).then(() => {
            // this._tvWidget.chart().applyOverrides({ 'paneProperties.backgroundGradientStartColor': 'red' });
          });
        }
        // else if(this.chartId&&localStorage.getItem(this.chartId+'_trading_theme') && (location.pathname.indexOf('tv-charts')>-1)){
        //    this._tvWidget.changeTheme( localStorage.getItem(this.chartId+'_trading_theme')).then(() => {
        //     // widget.chart().applyOverrides({ 'paneProperties.backgroundGradientStartColor': 'red' });
        // });
        // }
        else {
          if (localStorage.getItem((this.chartId && this.chartId != 'chart0' ? this.chartId + "_" : "") + 'trading_theme') && !(location.pathname.indexOf('trading-view-charts-watch') > -1 || location.pathname.indexOf('tv-charts-watch') > -1)) this._tvWidget.changeTheme(localStorage.getItem((this.chartId && this.chartId != 'chart0' ? this.chartId + "_" : "") + 'trading_theme')).then(() => {
            // widget.chart().applyOverrides({ 'paneProperties.backgroundGradientStartColor': 'red' });
          });
        }
      }
      if (this.isExpanded || location.pathname.indexOf('trading-view-charts-watch') > -1) {
        this._tvWidget.subscribe('onAutoSaveNeeded', () => {
          this._tvWidget.save(data => {
            /*            console.log("Save chart Called", data)
                       if(data&&data.charts&&data.charts[0]){
                                             if(this.isExpanded ){
                           data.charts[0].expandedpaneProperties= data.charts[0].paneProperties
                         }else{
                           data.charts[0].watchpaneProperties= data.charts[0].paneProperties
                         }
                       } */
            let userId = this.utils.getUserId();
            if (userId && userId != 'guest') {
              //  if(data&&data.charts&&data.charts[0]&&data.charts[0].chartProperties){
              //   if(this.isExpanded || (location.pathname.indexOf('trading-view-charts-watch')>-1)){
              //     if(location.pathname.indexOf('trading-view-charts-watch')>-1){
              //       localStorage.setItem("saved_chart_web_watch_properties",JSON.stringify(data.charts[0].chartProperties))
              //     }else if(!(location.pathname.indexOf('trading-view-charts-watch')>-1)){
              //       localStorage.setItem("saved_chart_web_properties",JSON.stringify(data.charts[0].chartProperties))
              //     }else{
              //       delete data.charts[0].chartProperties;
              //   /*     localStorage.setItem("saved_chart_web_watch_properties",JSON.stringify(data.charts[0].chartProperties))
              //       localStorage.setItem("saved_chart_web_properties",JSON.stringify(data.charts[0].chartProperties)) */
              //     }
              //     localStorage.setItem("saved_chart_web",JSON.stringify(data))
              //   }
              //  }
              //  delete data.charts[0].chartProperties
            }
            localStorage.setItem((this.chartId && this.chartId != 'chart0' ? this.chartId + "_" : "") + "saved_chart_web", JSON.stringify(data));
            //  
            // PriceChartService.saveChartLayout(data);
          });
        });
      }
      /*    if(this.currentChartType||this.currentChartType===0||this.currentChartType==="0"){
           this._tvWidget.activeChart().setChartType(Number(this.currentChartType));
         } */
      setTimeout(() => {
        let doc = this._tvWidget['_iFrame'].contentDocument || this._tvWidget['_iFrame'].contentWindow.document;
        if (doc && doc.getElementById("header-toolbar-chart-styles")) {
          let ele1 = doc.getElementById("header-toolbar-chart-styles");
          if (ele1) {
            if (ele1) {
              // this.renderer.listen(ele1, 'click', () => {
              let cn = ele1.childNodes;
              if (cn && cn[0]) {
                let chartBt = cn[0];
                if (chartBt) {
                  if (chartBt.getElementsByTagName('svg') && chartBt.getElementsByTagName('svg')[0]) {
                    //chartBt.getElementsByTagName('svg')[0].remove()
                    chartBt.getElementsByTagName('svg')[0].parentElement.style.zIndex = '-1';
                    /*    chartBt.getElementsByTagName('svg')[0].parentElement.remove()
                       chartBt.innerText="Chart Type" */
                    /* const span = document.createElement('span');
                    span.setAttribute('class', 'picon-p-add-news');
                    span.innerHTML = 'span';
                    chartBt.appendChild(span); */
                  }
                  /* chartBt.classList.add('isOpened-1SoiPS-f') */
                  //chartBt.click()
                }
              }
              //  }) 
            } else {}
          }
        }
      }, 100);
      if (this.isExpanded && this._tvWidget) {
        this._tvWidget.activeChart().onChartTypeChanged().subscribe(null, chartType => {
          //    console.log("chartType", chartType)
          let prev = this.currentChartType;
          if (prev == 8) {
            this.lastDataGiven = null;
          }
          this.currentChartType = chartType;
          setTimeout(() => {
            let doc = this._tvWidget['_iFrame'].contentDocument || this._tvWidget['_iFrame'].contentWindow.document;
            if (doc && doc.getElementById("header-toolbar-chart-styles")) {
              let ele1 = doc.getElementById("header-toolbar-chart-styles");
              if (ele1) {
                if (ele1) {
                  // this.renderer.listen(ele1, 'click', () => {
                  let cn = ele1.childNodes;
                  if (cn && cn[0]) {
                    let chartBt = cn[0];
                    if (chartBt) {
                      if (chartBt.getElementsByTagName('svg') && chartBt.getElementsByTagName('svg')[0]) {
                        //chartBt.getElementsByTagName('svg')[0].remove()
                        chartBt.getElementsByTagName('svg')[0].parentElement.style.zIndex = '-1';
                        /*                                  chartBt.getElementsByTagName('svg')[0].parentElement.remove()
                                                         chartBt.innerText="Chart Type"
                         */ /*   const span = document.createElement('span');
                            span.setAttribute('class', 'picon-p-add-news');
                            span.innerHTML = 'span';
                            chartBt.appendChild(span); */
                      }
                      /* chartBt.classList.add('isOpened-1SoiPS-f') */
                      //chartBt.click()
                    }
                  }
                  //  }) 
                } else {}
              }
            }
            // if(this.onResetCacheNeededCallback)
            // this.onResetCacheNeededCallback()
            // this._tvWidget.activeChart().resetData()
          }, 100);
          setTimeout(() => {
            if (chartType == 8 && (localStorage.getItem("currentChartType") != "8" || localStorage.getItem("currentChartType") == null) || prev == 8 && chartType != 8) {
              localStorage.setItem("currentChartType", this.currentChartType);
              this.loadTradingViewData(null);
            }
          }, 1000);
        });
      }
      let timestamp = Date.now();
      let mid = new Date(new Date().setHours(9, 0, 0, 0)).getTime(); //new Date(new Date().getTime() - (24*60*60*1000)).getTime()//
      if (this.isExpanded && this._tvWidget) {
        this._tvWidget.activeChart().onIntervalChanged().subscribe(null, (interval, timeframeObj) => {
          this.lastSocketVolume = 0;
          /*   if(interval == '1')
            timeframeObj.timeframe = "1D"; */
          if (timeframeObj && !timeframeObj.timeframe) {
            this.topInterval = interval == '1M' ? 'M' : interval == '1D' ? 'D' : interval == '1W' ? 'W' : interval == '60' || interval == '120' ? "60" : interval == '240' ? "240" : interval == '30' ? "30" : interval == '45' ? "45" : interval == '15' ? "15" : interval == '10' ? "10" : interval == '2' ? "2" : interval == '3' ? "3" : interval == '5' ? "5" : "1";
            localStorage.setItem((this.chartId && this.chartId != 'chart0' ? this.chartId + "_" : "") + 'topInterval', this.topInterval);
            localStorage.setItem((this.chartId && this.chartId != 'chart0' ? this.chartId + "_" : "") + '_interval', interval);
            if (this.onResetCacheNeededCallback) this.onResetCacheNeededCallback();
            //this._tvWidget.activeChart().resetData()
          } /* else {
            } */
          if (timeframeObj && timeframeObj.timeframe) {
            this.topInterval = interval == '1M' ? 'M' : interval == '1D' ? 'D' : interval == '1W' ? 'W' : interval == '60' || interval == '120' ? "60" : interval == '240' ? "240" : interval == '30' ? "30" : interval == '45' ? "45" : interval == '15' ? "15" : interval == '10' ? "10" : interval == '2' ? "2" : interval == '3' ? "3" : interval == '5' ? "5" : "1";
            localStorage.setItem((this.chartId && this.chartId != 'chart0' ? this.chartId + "_" : "") + 'topInterval', this.topInterval);
            localStorage.setItem((this.chartId && this.chartId != 'chart0' ? this.chartId + "_" : "") + '_interval', interval);
          }
        });
      }
      let userId = this.utils.getUserId();
      if (this.isExpanded || location.pathname.indexOf('trading-view-charts-watch') > -1) {
        window.addEventListener('popstate', function (event) {
          // if (document.referrer && (document.referrer.indexOf('trading-view-charts') > -1)) { location.reload() }
          //            history.pushState(null, document.title, location.href);
        });
      }
      if (this.isExpanded) {
        // history.pushState(null, document.title, location.href);
        /*  history.pushState(null, null, location.href);
         this.locationStrategy.onPopState(() => {
           history.pushState(null, null, location.href);
         }) */
        this._tvWidget.headerReady().then(() => {
          setTimeout(() => {
            if (this.isExpanded && !this.chartId) this.reportWindowSize();
          }, 100);
          if (!this.shared.isAppTradingView) {
            //           if(location.pathname.indexOf('tv-charts')>-1 ){
            //             const button = this._tvWidget.createButton({ align: "left" });
            //             button.setAttribute("title",this.scripName|| this.scripDesc);
            //            // button.classList.add("apply-common-tooltip");
            //             //   button.classList.add("fl-r");
            //             button.addEventListener("click", () => {
            //               this.onSearchClicked.emit(this.chartId)
            //             console.log("Search clicked")
            //             }
            //             );
            //             button.innerHTML = this.scripName|| this.scripDesc;
            // }
            // if(location.pathname.indexOf('tv-charts')==-1 ){
            //   this._tvWidget.createDropdown(
            //     {
            //         title: '',
            //         tooltip: 'Click to Open Multi Chart',
            //         icon :`<svg _ngcontent-lkn-c12="" _ngcontent-mlb-c12="" height="17" viewBox="0 0 19 17" width="19" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-lkn-c12="" _ngcontent-mlb-c12="" d="M2.5 1C1.67 1 1 1.67 1 2.5v12c0 .83.67 1.5 1.5 1.5h14c.83 0 1.5-.67 1.5-1.5v-12c0-.83-.67-1.5-1.5-1.5h-14ZM0 2.5A2.5 2.5 0 0 1 2.5 0h14A2.5 2.5 0 0 1 19 2.5v12a2.5 2.5 0 0 1-2.5 2.5h-14A2.5 2.5 0 0 1 0 14.5v-12Z" fill="currentColor"></path></svg>`,
            //         items: [
            //             {
            //                 title: '2 Charts',
            //                 onSelect: () => {
            //                 },
            //                 icon:`<svg _ngcontent-eoe-c12="" _ngcontent-mlb-c12="" height="17" viewBox="0 0 19 17" width="19" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-eoe-c12="" _ngcontent-mlb-c12="" d="M1 2.5C1 1.67 1.67 1 2.5 1H9v15H2.5A1.5 1.5 0 0 1 1 14.5v-12ZM10 16h6.5c.83 0 1.5-.67 1.5-1.5v-12c0-.83-.67-1.5-1.5-1.5H10v15ZM2.5 0A2.5 2.5 0 0 0 0 2.5v12A2.5 2.5 0 0 0 2.5 17h14a2.5 2.5 0 0 0 2.5-2.5v-12A2.5 2.5 0 0 0 16.5 0h-14Z" fill="currentColor" fill-rule="evenodd"></path></svg>`,
            //             },
            //             {
            //                 title: '3 Charts',
            //                 onSelect: () => {
            //                 },
            //                 icon:`<svg _ngcontent-eoe-c12="" height="17" viewBox="0 0 19 17" width="19" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-eoe-c12="" d="M1 2.5C1 1.67 1.67 1 2.5 1h14c.83 0 1.5.67 1.5 1.5V8H1V2.5ZM1 9v5.5c0 .83.67 1.5 1.5 1.5H9V9H1Zm9 7h6.5c.83 0 1.5-.67 1.5-1.5V9h-8v7ZM2.5 0A2.5 2.5 0 0 0 0 2.5v12A2.5 2.5 0 0 0 2.5 17h14a2.5 2.5 0 0 0 2.5-2.5v-12A2.5 2.5 0 0 0 16.5 0h-14Z" fill="currentColor" fill-rule="evenodd"></path></svg>`,
            //             },
            //             {
            //               title: '4 Charts',
            //               onSelect: () => {
            //               },
            //               icon:`<svg _ngcontent-eoe-c12="" _ngcontent-mlb-c12="" height="17" viewBox="0 0 19 17" width="19" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-eoe-c12="" _ngcontent-mlb-c12="" d="M1 2.5C1 1.67 1.67 1 2.5 1H9v7H1V2.5ZM1 9v5.5c0 .83.67 1.5 1.5 1.5H9V9H1Zm9 7h6.5c.83 0 1.5-.67 1.5-1.5V9h-8v7Zm8-8V2.5c0-.83-.67-1.5-1.5-1.5H10v7h8ZM2.5 0A2.5 2.5 0 0 0 0 2.5v12A2.5 2.5 0 0 0 2.5 17h14a2.5 2.5 0 0 0 2.5-2.5v-12A2.5 2.5 0 0 0 16.5 0h-14Z" fill="currentColor" fill-rule="evenodd"></path></svg>`,
            //             }
            //         ],
            //         //icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><g fill="none" stroke="currentColor"><circle cx="10" cy="10" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path stroke-linecap="square" d="M17.5 7.5l-7 13"/></g></svg>`,
            //     }
            // ).then(myDropdownApi => {
            //     // Use myDropdownApi if you need to update the dropdown:
            //     // myDropdownApi.applyOptions({
            //     //     title: 'a new title!'
            //     // });
            //     // Or remove the dropdown:
            //     // myDropdownApi.remove();
            // });
            // }
            if (location.pathname.indexOf('trading-view-charts-watch') == -1 && location.pathname.indexOf('tv-charts-watch') == -1) {
              const button = this._tvWidget.createButton({
                align: "right"
              });
              button.setAttribute("title", "Click to exit");
              button.setAttribute("name", "exit");
              button.classList.add("apply-common-tooltip");
              //   button.classList.add("fl-r");
              button.addEventListener("click", () => {
                // if(this.utils.isAuthorized()){
                //   let url = localStorage.getItem("prevPath") ? localStorage.getItem("prevPath") : "/"
                //   this.router.navigate([url])
                //   localStorage.setItem("prevPath", "/")
                // }else{
                window.close();
                // setTimeout(() => {
                //   this.zone.run(() => {
                //     this.router.navigate(['/']);
                //   })
                // }, 500);
                //   }
              });
              button.innerHTML = "Exit";
            }
            if (location.pathname.indexOf('trading-view-charts-watch') > -1 || this.chartId && location.pathname.indexOf('tv-charts-watch') > -1) {
              const button = this._tvWidget.createButton({
                align: "right"
              });
              button.setAttribute("title", "Expand");
              button.setAttribute("name", "Expand");
              button.classList.add("apply-common-tooltip");
              button.classList.add("icon-expand");
              //   button.classList.add("fl-r");
              button.addEventListener("click", () => {
                // window.open("https://chart.choiceindia.com/NIFTY/1/26000/WDAxNTEwMA/MHgwMTIyNkQxRjJBREU3QTQxQ0EzREJBRjc1RTQxMjU?scripDesc=NIFTY%2050&socketURL=d3NzOi8vYnJkLmppZmZ5LmluOjQ1MjAv&interactiveSocketURL=d3NzOi8vaW50LmppZmZ5LmluOjQ1MTUv&theme=1", '_blank')
                // return
                let url = '/tv/trading-view-charts/' + this.scripName + '/' + this.segmentId + '/' + this.token;
                //  this.router.navigate([url],{queryParams:{scripDesc:this.scripDesc}})
                if (this.scripInfo.SecDesc || this.scripDesc) {
                  window.open(url + "?scripDesc=" + (this.scripInfo.SecDesc || this.scripDesc), '_blank');
                } else {
                  window.open(url, '_blank');
                }
                //console.log("EXPAND CHART")
                // if(this.utils.isAuthorized()){
                //   let url = localStorage.getItem("prevPath") ? localStorage.getItem("prevPath") : "/"
                //   this.router.navigate([url])
                //   localStorage.setItem("prevPath", "/")
                // }else{
                //  }
              });
              //button.innerHTML = "Exit Chart";
            }
            //Next button
            //   const nextButton = this._tvWidget.createButton({ align: "right" });
            //  // nextButton.setAttribute("title", "Click to exit");
            //   nextButton.classList.add("apply-common-tooltip");
            //   nextButton.addEventListener("click", () => {
            //     console.log("Next clicked")
            //         if(this.routeStack.length && this.routeStack[this.activeRoute+1]){
            //            this.activeRoute=this.activeRoute+1
            //           this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
            //             this.router.navigate([this.routeStack[this.activeRoute].url],{queryParams:this.routeStack[this.activeRoute].scripDesc?{scripDesc:this.routeStack[this.activeRoute].scripDesc}:{}});
            //         });
            //         }
            //       /* })
            //     }, 500); */
            //   }
            //   );
            //   nextButton.innerHTML = "Next";
            //   //Prev Button
            //   const prevButton = this._tvWidget.createButton({ align: "right" });
            //   //prevButton.setAttribute("title", "Click to exit");
            //   prevButton.classList.add("apply-common-tooltip");
            //   prevButton.addEventListener("click", () => {
            //     console.log("Prev clicked",this.routeStack, this.activeRoute)
            // /*     setTimeout(() => {
            //       this.zone.run(() => { */
            //       //  this.activeRoute=this.routeStack.length-1;
            //         if(this.routeStack.length && this.routeStack[this.activeRoute-1]){
            //           this.activeRoute=this.activeRoute-1;
            //           this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
            //             this.router.navigate([this.routeStack[this.activeRoute].url],{queryParams:this.routeStack[this.activeRoute].scripDesc?{scripDesc:this.routeStack[this.activeRoute].scripDesc}:{}});
            //          //   this.router.navigate([this.routeStack[this.activeRoute]]);
            //         });
            //          // this.router.navigate([this.routeStack[this.activeRoute]]);
            //         }
            //      /*  })
            //     }, 500); */
            //   }
            //   );
            //   prevButton.innerHTML = "Prev";
            // if ((this.isCurrentIndex || [6, 8, 14].indexOf(Number(this.segmentId)) > -1)) {
            // } else {
            this._tvWidget.createDropdown({
              title: 'Theme',
              tooltip: 'Change Theme',
              items: [{
                title: 'Dark',
                onSelect: () => {
                  this._tvWidget.changeTheme('Dark');
                  if (location.pathname.indexOf('trading-view-charts-watch') > -1 || location.pathname.indexOf('tv-charts-watch') > -1) {
                    localStorage.setItem((this.chartId && this.chartId != 'chart0' ? this.chartId + "_" : "") + 'trading_theme_watch', "Dark");
                  }
                  // else if(this.chartId && (location.pathname.indexOf('tv-charts')>-1)){
                  //   localStorage.setItem(this.chartId+'_trading_theme',"Dark")
                  // }
                  else {
                    localStorage.setItem((this.chartId && this.chartId != 'chart0' ? this.chartId + "_" : "") + 'trading_theme', "Dark");
                  }
                }
              }, {
                title: 'Light',
                onSelect: () => {
                  this._tvWidget.changeTheme('Light');
                  if (location.pathname.indexOf('trading-view-charts-watch') > -1 || location.pathname.indexOf('tv-charts-watch') > -1) {
                    localStorage.setItem((this.chartId && this.chartId != 'chart0' ? this.chartId + "_" : "") + 'trading_theme_watch', "Light");
                  }
                  //  else if(this.chartId&& (location.pathname.indexOf('tv-charts')>-1)){
                  //   localStorage.setItem(this.chartId+'_trading_theme',"Light")
                  // }
                  else {
                    localStorage.setItem((this.chartId && this.chartId != 'chart0' ? this.chartId + "_" : "") + 'trading_theme', "Light");
                  }
                }
              }]
              //icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><g fill="none" stroke="currentColor"><circle cx="10" cy="10" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path stroke-linecap="square" d="M17.5 7.5l-7 13"/></g></svg>`,
            }).then(myDropdownApi => {
              // Use myDropdownApi if you need to update the dropdown:
              // myDropdownApi.applyOptions({
              //     title: 'a new title!'
              // });
              // Or remove the dropdown:
              // myDropdownApi.remove();
            });
            const buyButton = this._tvWidget.createButton({
              align: this.shared.isAppTradingView ? "left" : "right"
            });
            buyButton.setAttribute("title", "BUY");
            buyButton.setAttribute("name", "BUY");
            buyButton.setAttribute("id", "chart_buy");
            buyButton.classList.add("apply-common-tooltip");
            //   buyButton.classList.add("buy2");
            //   buyButton.classList.add("fl-r");
            //  buyButton.parentNode.classList.add("buy2");
            buyButton.parentNode['style'].border = "0px";
            buyButton['style'].color = "#ffffff";
            buyButton.parentNode['style'].background = "#004393";
            buyButton.parentNode['style'].padding = "9px 10px";
            buyButton.parentNode.addEventListener("click", () => {
              this.buyItem(userId);
            });
            buyButton.innerHTML = "BUY";
            const sellButton = this._tvWidget.createButton({
              align: this.shared.isAppTradingView ? "left" : "right"
            });
            sellButton.setAttribute("title", "SELL");
            sellButton.setAttribute("name", "SELL");
            sellButton.setAttribute("id", "chart_sell");
            sellButton.classList.add("apply-common-tooltip");
            sellButton.classList.add("sell2");
            sellButton.parentNode['style'].border = "#EE404A solid 1px";
            sellButton['style'].color = "white";
            sellButton.parentNode['style'].background = "#EE404A";
            sellButton.parentNode['style'].padding = "9px 10px";
            sellButton.parentNode.addEventListener("click", () => {
              this.sellItem(userId);
            });
            sellButton.innerHTML = "SELL";
            sellButton.parentNode['classList'].add("sell2");
            // }
          }
          // if(!this.isCurrentIndex){
          this._tvWidget.onContextMenu((unixtime, price) => {
            this.utils.setTrackMoeEvent('clickedChartContextMenu', {
              "User_ID": this.utils.getUserId() || 'guest',
              "IP": this.shared.IPAddress
            });
            this.analytics.emitEvent('clickedChartContextMenu', this.utils.getUserId() || 'guest', JSON.stringify({
              chartType: "TradingView",
              "IP": this.shared.IPAddress
            }), 1);
            price = this.utils.decimalConversion(this.segmentId, price);
            return this.isCurrentIndex ? [{
              position: "top",
              text: "Price Alert (" + price + ")",
              click: () => {
                this.getTickPrice(unixtime, "priceAlert", price);
              }
            }] : [{
              position: "top",
              text: "Trade - Buy @ " + price + " limit",
              //+ unixtime + ", price: " + price
              click: () => {
                this.getTickPrice(unixtime, "limitBuy", price);
              }
            }, {
              position: "top",
              text: "Trade - Sell @ " + price + " limit",
              //+ unixtime + ", price: " + price
              click: () => {
                this.getTickPrice(unixtime, "limitSell", price);
              }
            },
            // { text: "-", position: "top" },
            // { text: "-Objects Tree..." },
            {
              position: "top",
              text: "Price Alert (" + price + ")",
              click: () => {
                this.getTickPrice(unixtime, "priceAlert", price);
              }
            }
            // , {
            //     position: "bottom",
            //     text: "Bottom menu item",
            //     click: ()=> { alert("Third clicked."); }
            // }
            ];
          });
        });
      }
      if (resolutionData) {}
    });
  }
  loadTradingViewData(resolution, type) {
    // console.log("RESOLVE SYMBOL CALLED THIS interval",type)
    this.Datafeed = {
      onReady: cb => {
        console.log("onReady onAutoSaveNeeded");
        setTimeout(() => cb(this.config), 0);
      },
      getBars: (symbolInfo, resolution, periodParams, onHistoryCallback, onErrorCallback) => {
        this.getBarsData(symbolInfo, resolution, periodParams, onHistoryCallback, onErrorCallback);
      },
      subscribeBars: (symbolInfo, resolution, onRealtimeCallback, subscribeUID, onResetCacheNeededCallback) => {
        let subInt = this.topInterval == 'M' ? '1M' : this.topInterval == 'D' ? '1D' : this.topInterval == 'W' ? '1W' : this.topInterval == '60' || this.topInterval == '120' ? "60" : this.topInterval == '240' ? "240" : this.topInterval == '30' ? "30" : this.topInterval == '45' ? "45" : this.topInterval == '15' ? "15" : this.topInterval == '10' ? "10" : this.topInterval == '2' ? "2" : this.topInterval == '3' ? "3" : this.topInterval == '5' ? "5" : "1";
        if (resolution == subInt) {
          this.realtimeCallback = onRealtimeCallback;
          this.onResetCacheNeededCallback = onResetCacheNeededCallback;
        } else {
          return;
        }
        if (this.isExpanded) {
          //this.utils.unSubscribeMultitouchline([{ SegmentId: this.segmentId, Token: this.token }]);
          this.utils.subscribeMultitouchline([{
            SegmentId: this.segmentId,
            Token: this.token
          }]);
        }
      },
      unsubscribeBars: subscriberUID => {
        // if(this.onResetCacheNeededCallback)
        // this.onResetCacheNeededCallback()
        // this._tvWidget.activeChart().resetData()
        // this.utils.unSubscribeMultitouchline([{ SegmentId: this.segmentId, Token: this.token }]);
      },
      searchSymbols: (userInput, exchange, symbolType, onResultReadyCallback) => {
        this.onResultReadyCallback = onResultReadyCallback;
        let searchData = [];
        this.symbolList = [];
        if (userInput.length === 1 || userInput.length === 2) {
          searchData = [];
          // onResultReadyCallback(searchData);
        } else if (userInput.length >= 3) {
          let data = {
            "strScripName": userInput,
            "StartPos": 0,
            //this.startPos,
            "NoOfRecords": 20,
            "strSegment": symbolType
          };
          this.rest.getSearchData(data).subscribe(res => {
            if (res.Status === "Success" && res.Response) {
              let data = res.Response || [];
              this.symbolList = data;
              searchData = data.map(ele => {
                return {
                  "symbol": ele.SecName,
                  //ele.Symbol,// (ele.Symbol + ":" + ele.SegmentId + ":" + ele.Token),
                  "full_name": ele.Symbol + "||" + ele.SegmentId + "||" + ele.Token,
                  //JSON.stringify(ele),//ele.SecName,
                  "description": ele.SecDesc,
                  "exchange": ele.ExchangeSegment,
                  "type": ""
                  //"ticker":ele.Token
                  /*  data: ele */
                  /* "ticker": ele, */
                  /*   "type":'stock' */
                };
              });
              onResultReadyCallback(searchData);
              // searchData = res.Response;
              //this.selectList(this.activeTab, this.filterList);
            } else if (res.Status === "Fail") {
              searchData = [];
              onResultReadyCallback(searchData);
            } else {
              searchData = [];
              onResultReadyCallback(searchData);
            }
          });
        }
      },
      resolveSymbol: (symbolName, onSymbolResolvedCallback, onResolveErrorCallback) => {
        console.log("RESOLVE SYMBOL CALLED", symbolName);
        /*   if(this.onResultReadyCallback){
            this.onResultReadyCallback([])
          } */
        // if(!symbolName){
        //   symbolName=this.scripName+"||"+this.segmentId+"||"+this.token
        // }
        if (symbolName) {
          let data = symbolName.split("||");
          let scrpData = {
            SecDesc: ""
          };
          let common = () => {
            // else {
            //   //this.scripName=data[0]||this.scripName
            //   //   if(this.symbolList&& this.symbolList.length && !this.symbolList[0].isConf){
            //   //      scrpData=this.symbolList[0]
            //   //     this.token=scrpData['Token']
            //   //     this.segmentId= scrpData['SegmentId'] 
            //   //     this.scripName=scrpData['Symbol']||data[0]||this.scripName
            //   //     this.scripDesc=scrpData.SecDesc||data[0]
            //   //     let url = "tools/trading-view-charts/" + scrpData['Symbol'] + "/" +scrpData['SegmentId'] + "/" + scrpData['Token']
            //   //     this.location.replaceState(url+"?scripDesc="+(scrpData.SecDesc||data[0]));
            //   //     this.getScripDetail(this.segmentId, this.token)
            //   //  /*    this.router.navigate([url],{queryParams:{scripDesc:scrpData.SecDesc||""}}).then(() => {
            //   //       window.location.reload();
            //   //     })
            //   //     return 1 */
            //   //   }
            // }
            //else {
            let searchedSymbol = null;
            if (this.symbolList.length) {
              searchedSymbol = scrpData;
              /*  searchedSymbol = this.symbolList.find((ele: any) => {
                 return data[2] == ele.Token
               }) */
              // if (data.length == 1 && this.symbolList[0] && !this.symbolList[0].isConf) {
              //   // searchedSymbol = this.symbolList[0]
              //   let scrpData = this.symbolList[0]
              //   let url = "tools/trading-view-charts/" + scrpData.Symbol + "/" + scrpData.SegmentId + "/" + scrpData.Token
              //   this.router.onSameUrlNavigation = 'reload';
              //   this.router.routeReuseStrategy.shouldReuseRoute = function () {
              //     return false;
              // }
              // this.shared.isServiceHit = true;
              //   this.router.navigate([url], { queryParams: { scripDesc: scrpData.SecDesc || "" } }).then(() => {
              //     //window.location.reload();
              //   })
              //   return 1
              // }
              if (searchedSymbol && (searchedSymbol.SecDesc || searchedSymbol.Token)) {
                //this.responseData = [];
                if (this.existingSymbol != JSON.stringify(searchedSymbol))
                  //   this.fetchNewData.emit(searchedSymbol);
                  this.existingSymbol = JSON.stringify(searchedSymbol);
              } else {
                //searchedSymbol=this.symbolList[0]
                /*   let scrpData=this.symbolList[0]
                  let url = "tools/trading-view-charts/" + scrpData.Symbol + "/" +scrpData.SegmentId + "/" + scrpData.Token
                  this.router.navigate([url],{queryParams:{scripDesc:scrpData.SecDesc||""}}).then(() => {
                    window.location.reload();
                  })
                  return 1 */
              }
            } else {
              onResolveErrorCallback('Cannot resolve symbol');
              return;
            }
            if (!searchedSymbol) {
              onResolveErrorCallback('Cannot resolve symbol');
              return;
            }
            let sr;
            sr = !this.disableFeatures ? ['1', "2", "3", '5', '10', '15', '30', "45", '60', "240", '1D', '1W', '1M'] : ['1'];
            let symbol_stub;
            let segmentMapper = {
              1: {
                segmentLabel: "NSE",
                segmentTime: "0915-1600",
                corrections: "0000-0001:20240126;1800-1945:20231112;0915-1600:20240120;0915-1600:20240302;0915-1230:20240518",
                session_holidays: "20240122,20240126,20240308,20240325,20240329,20240411,20240417,20240501,20240617,20240717,20240815,20241002,20241101,20241115,20241225"
              },
              2: {
                segmentLabel: "NSEFO",
                segmentTime: "0915-1600",
                corrections: "0000-0001:20240126;1815-1925:20231112;0915-1600:20240120;0915-1600:20240302;0915-1230:20240518",
                session_holidays: "20240122,20240126,20240308,20240325,20240329,20240411,20240417,20240501,20240617,20240717,20240815,20241002,20241101,20241115,20241225"
              },
              3: {
                segmentLabel: "BSE",
                segmentTime: "0915-1600",
                corrections: "0000-0001:20240126;1800-1945:20231112;0915-1600:20240120;0915-1600:20240302;0915-1230:20240518",
                session_holidays: "20240122,20240126,20240308,20240325,20240329,20240411,20240417,20240501,20240617,20240717,20240815,20241002,20241101,20241115,20241225"
              },
              4: {
                segmentLabel: "BSEFO",
                segmentTime: "0915-1600",
                corrections: "0000-0001:20240126;1815-1925:20231112;0915-1600:20240120;0915-1600:20240302;0915-1230:20240518",
                session_holidays: "20240122,20240126,20240308,20240325,20240329,20240411,20240417,20240501,20240617,20240717,20240815,20241002,20241101,20241115,20241225"
              },
              5: {
                segmentLabel: "MCX",
                segmentTime: "0915-2355",
                corrections: "0000-0001:20240126;1800-1925:20231112;0915-2355:20240120;0915-2355:20240302;0915-1230:20240518",
                session_holidays: "20240126,20240329,20240815,20241002,20241225"
              },
              6: {
                segmentLabel: "MCXSPOT",
                segmentTime: "0915-2355",
                corrections: "0000-0001:20240126;1800-1925:20231112;0915-2355:20240120;0915-2355:20240302;0915-1230:20240518",
                session_holidays: "20240126,20240329,20240815,20241002,20241225"
              },
              7: {
                segmentLabel: "NCDEX",
                segmentTime: "0915-2100",
                corrections: "0000-0001:20240126;1800-1925:20231112;0915-2100:20240120;0915-2100:20240302;0915-1230:20240518",
                session_holidays: "20240126,20240329,20240815,20241002,20241225"
              },
              8: {
                segmentLabel: "NCDEX Spot",
                segmentTime: "0915-2100",
                corrections: "0000-0001:20240126;1800-1925:20231112;0915-2100:20240120;0915-2100:20240302;0915-1230:20240518",
                session_holidays: "20240126,20240329,20240815,20241002,20241225"
              },
              13: {
                segmentLabel: "NSECDS",
                segmentTime: "0915-1700",
                corrections: "0000-0001:20240126;1815-1925:20231112;0915-1700:20240120;0915-1700:20240302;0915-1230:20240518",
                session_holidays: "20240122,20240126,20240308,20240325,20240329,20240411,20240417,20240501,20240617,20240717,20240815,20241002,20241101,20241115,20241225"
              },
              14: {
                segmentLabel: "NSECDS Spot",
                segmentTime: "0915-1700",
                corrections: "0000-0001:20240126;1815-1925:20231112;0915-1700:20240120;0915-1700:20240302;0915-1230:20240518",
                session_holidays: "20240122,20240126,20240308,20240325,20240329,20240411,20240417,20240501,20240617,20240717,20240815,20241002,20241101,20241115,20241225"
              }
            };
            //   let valuedate = new Date("11/12/2023");
            //   let today = new Date()
            //   if (valuedate.getFullYear() == today.getFullYear() && valuedate.getMonth() == today.getMonth() && valuedate.getDate() == today.getDate()){
            //     segmentMapper = {
            //       1: { segmentLabel: "NSE", segmentTime: "0915-1600|1800-1945:1" },
            //       2: { segmentLabel: "NSEFO", segmentTime: "0915-1600|1815-1925:1" },
            //       3: { segmentLabel: "BSE", segmentTime: "0915-1600|1800-1945:1" },
            //       4: { segmentLabel: "BSEFO", segmentTime: "0915-1600|1815-1925:1" },
            //       5: { segmentLabel: "MCX", segmentTime: "0915-2330|1800-1925:1" },
            //       6: { segmentLabel: "MCXSPOT", segmentTime: "0915-2330|1800-1925:1" },
            //       7: { segmentLabel: "NCDEX", segmentTime: "0915-2100|1815-1925:1" },
            //       8: { segmentLabel: "NCDEX Spot", segmentTime: "0915-2100|1815-1925:1" },
            //       13: { segmentLabel: "NSECDS", segmentTime: "0915-1700|1815-1925:1" },
            //       14: { segmentLabel: "NSECDS Spot", segmentTime: "0915-1700|1815-1925:1" },
            //       38: { segmentLabel: "BSECDS", segmentTime: "0915-1700|1815-1925:1" },
            //       39: { segmentLabel: "BSECDS Spot", segmentTime: "0915-1700|1815-1925:1" },
            //     }  
            // }
            let isin = this.checkIfIndexv2(this.segmentId, this.token);
            symbol_stub = {
              name: this.scripName || (searchedSymbol && searchedSymbol.Symbol ? searchedSymbol.Symbol : symbolName),
              description: (this.scripInfo.SecDesc || searchedSymbol.scripDesc || this.scripDesc || symbolName) + (" (" + (searchedSymbol && searchedSymbol.ExchangeSegment ? searchedSymbol.ExchangeSegment : this.segmentId && segmentMapper[this.segmentId] ? segmentMapper[this.segmentId].segmentLabel : "") + ")"),
              //(searchedSymbol.scripDesc || this.scripDesc || symbolName), // display on the chart
              has_intraday: true,
              // enable minute and others
              visible_plots_set: isin,
              //expiration_date:"",
              session: this.segmentId && segmentMapper[this.segmentId] ? segmentMapper[this.segmentId].segmentTime : "",
              corrections: this.segmentId && segmentMapper[this.segmentId] ? segmentMapper[this.segmentId].corrections : "",
              session_holidays: this.segmentId && segmentMapper[this.segmentId] ? segmentMapper[this.segmentId].session_holidays : "",
              /*    session_holidays: "", */
              /*     "session-regular": "0915-1530", */
              /*  has_ticks:true, */
              minmov: 1,
              minmove2: 0,
              //  minmovement: 1,
              // minmovement2: 0,
              timezone: "Asia/Kolkata",
              /*   settings_adapter:{
                  initialSetting:{symbolWatermark: '{ "visibility": "true", "color": "rgba(244, 67, 54, 0.25)" }'}
                }, */
              pricescale: [13, 14, 38, 39].indexOf(Number(this.segmentId)) > -1 ? 10000 : 100,
              //this.scripInfo&& this.scripInfo.PriceDivisor?this.scripInfo.PriceDivisor:searchedSymbol && searchedSymbol.PriceDivisor ? Number(searchedSymbol.PriceDivisor) : 100,
              full_name: (this.scripInfo.SecDesc || searchedSymbol.scripDesc || this.scripDesc || symbolName) + (" (" + (searchedSymbol && searchedSymbol.ExchangeSegment ? searchedSymbol.ExchangeSegment : this.segmentId && segmentMapper[this.segmentId] ? segmentMapper[this.segmentId].segmentLabel : "") + ")"),
              //(searchedSymbol.scripDesc || this.scripDesc || symbolName), // display on the chart
              base_name: [this.scripName || (searchedSymbol && searchedSymbol.Symbol ? searchedSymbol.Symbol : searchedSymbol.scripDesc || this.scripDesc || symbolName)],
              ticker: (this.token ? this.token : searchedSymbol && searchedSymbol.Symbol ? searchedSymbol.Symbol : symbolName) + "",
              type: "",
              //exchange: searchedSymbol && searchedSymbol.ExchangeSegment ? searchedSymbol.ExchangeSegment : (this.segmentId && segmentMapper[this.segmentId] ? segmentMapper[this.segmentId].segmentLabel : ""),
              listed_exchange: this.segmentId,
              //searchedSymbol && searchedSymbol.ExchangeSegment ? searchedSymbol.ExchangeSegment : (segmentMapper[this.segmentId]||""),
              format: "price",
              // timeframe: "1D",
              has_weekly_and_monthly: true,
              has_daily: true,
              has_empty_bars: false,
              "intraday_multipliers": ["1", "2", "3", "5", '10', "15", "30", "45", "60", "240", "1D", "1W"],
              //  
              //  [
              /*    1, 5, 30 */
              //  "1", "2", "3", "5", '10', "15", "30", "45", "60", "240", "1D", "1W"
              // ],
              has_seconds: false,
              supported_resolutions: sr,
              volume_precision: [13, 14, 38, 39].indexOf(Number(this.segmentId)) > -1 ? 4 : 2,
              data_status: "streaming"
            };
            setTimeout(() => {
              //   this.prevSymbolStub=symbol_stub
              onSymbolResolvedCallback(symbol_stub);
            }, 0);
          };
          if (data.length == 3) {
            let url = (location.pathname.indexOf('trading-view-charts-watch') > -1 ? "tv/trading-view-charts-watch/" : "tv/trading-view-charts/") + data[0] + "/" + data[1] + "/" + data[2];
            this.token = data[2] || this.token;
            this.segmentId = data[1] || this.segmentId;
            this.scripName = data[0] || this.scripName;
            let sub = () => {
              this.checkIfIndex(this.segmentId, this.token);
              if (this.symbolList && this.symbolList.length) {
                scrpData = this.symbolList.find(ele => {
                  return data[2] == ele.Token;
                });
              }
              if (scrpData.SecDesc) {
                this.scripDesc = scrpData.SecDesc ? scrpData.SecDesc : "";
              }
              if (url != this.router.url) {}
              //  this.location.replaceState(url + "?scripDesc=" + (scrpData.SecDesc || this.scripDesc || data[0]));
              if (!this.chartId) {
                if (this.isExpanded || location.pathname.indexOf('trading-view-charts-watch') > -1) {
                  // history.pushState({}, null, url + "?scripDesc=" + (scrpData.SecDesc || this.scripDesc || data[0]));
                  this.router.navigate([url], {
                    queryParams: {
                      scripDesc: scrpData.SecDesc || this.scripDesc || data[0]
                    }
                  }); //+ "?scripDesc=" + (scrpData.SecDesc || this.scripDesc || data[0])
                }
              } else {
                // console.log("this.activatedRoute.params",this.activatedRoute.snapshot.queryParams)
                let params = location.search.split("=");
                let symbols = params[1].indexOf("%7C") > -1 ? params[1].split("%7C") : params[1].split("|");
                if (params.length && params.length > 0 && symbols.length && this.chartId && this.chartId.split('chart').length) {
                  let data = "";
                  let index = Number(this.chartId.split('chart')[1]);
                  // let selected = data[index]
                  symbols[index] = this.segmentId + "@" + this.token;
                  data = symbols.join("|");
                  this.location.replaceState((location.pathname.indexOf('tv-charts-watch') > -1 ? '/tv/tv-charts-watch' : '/tv/tv-charts') + "?symbols=" + data);
                }
                //this.router.navigate(['/tv-charts'],{queryParams:{symbols:data}})
                // const urlParams = new URLSearchParams(window.location.search);
                // const myParam = urlParams.get('myParam');
                // if(params['symbols']){
                // }
              }
              if (this.routeStack.length && this.routeStack[this.activeRoute]) {
                this.routeStack.splice(this.activeRoute + 1, this.routeStack.length);
              }
              this.routeStack.push({
                url,
                scripDesc: scrpData.SecDesc || this.scripDesc || data[0]
              });
              this.activeRoute = this.routeStack.length - 1;
              setTimeout(() => {
                common();
              }, 500);
            };
            this.getScripDetail(this.segmentId, this.token, null, sub);
            // console.log(this.routeStack,"ROUTE STACK")
            // this.shared.isServiceHit = true;
            /*        this.router.routeReuseStrategy.shouldReuseRoute = function () {
                     return false;
                 }
                 this.router.onSameUrlNavigation = 'reload';
                   this.router.navigate([url], { queryParams: { scripDesc: scrpData.SecDesc || data[0] || "" } }).then(() => {
                    // window.location.reload();
                   })
                   return 1 */
          } else {
            common();
          }
          // }
        }
        // else if(this.prevSymbolStub){
        //   onSymbolResolvedCallback(this.prevSymbolStub); 
        // }
      }
    };
    this.getCong(resolution, type);
  }
  getTickPrice(unixtime, action, price) {
    //     let   socketDataProcessed={}
    //     let socketDataProcessedPrev={}
    //     this._tvWidget.activeChart().exportData({ includeUserTime: true }).then(data=>{
    //       //  let   socketDataProcessed={}
    //       //  let socketDataProcessedPrev={}
    //         let stuff =   data.data.find((ele,i)=>{
    //          return   ele[1]==unixtime
    //           })
    // //console.log("stuff",stuff)
    //           if(stuff){
    //              data.schema.forEach((ele,i)=>{
    //                if(ele.plotTitle){
    //                  if(ele.sourceTitle=="Average Price"){
    //                    ele.plotTitle="Average_Price"
    //                  }
    //                  socketDataProcessed[ele.plotTitle]=stuff[i]
    //               //   socketDataProcessedPrev[ele.plotTitle]=data.data[data.data.length-2][i]
    //                }else{
    //                  socketDataProcessed[ele.type]=stuff[i]
    //               //   socketDataProcessedPrev[ele.type]=data.data[data.data.length-2][i]
    //                }
    //              })
    //   if(socketDataProcessed&&socketDataProcessed['close']){
    if (action == "priceAlert") {
      if (price) {
        let request = {
          isCustomPrice: price,
          config: null,
          requestType: 1,
          data: {
            SegmentId: this.segmentId,
            Token: this.token
          }
        };
        this.utils.broadcast('openPriceAlert', request);
      } else {
        let request = {
          config: null,
          requestType: 1,
          data: {
            SegmentId: this.segmentId,
            Token: this.token
          }
        };
        this.utils.broadcast('openPriceAlert', request);
        this.utils.setTrackMoeEvent('clickedOn', {
          "User_ID": this.utils.getUserId() || 'guest',
          "IP": this.shared.IPAddress
        });
        this.analytics.emitEvent('clickedOn', this.utils.getUserId() || 'guest', JSON.stringify({
          chartType: "TradingView",
          buttonName: "ChartPriceAlert",
          "IP": this.shared.IPAddress
        }), 1);
      }
    }
    if (action == "limitBuy") {
      if (price) {
        this.utils.broadcast('openBuySellDrawer', {
          'scrip': this.scripInfo,
          isCustomPrice: price,
          'action': 1
        });
      } else {
        this.utils.broadcast('openBuySellDrawer', {
          'scrip': this.scripInfo,
          'action': 1
        });
      }
      this.utils.setTrackMoeEvent('clickedOn', {
        "chartType": "TradingView",
        buttonName: "ChartPlaceOrder",
        isBuy: true,
        "User_ID": this.utils.getUserId() || 'guest',
        "IP": this.shared.IPAddress
      });
      this.analytics.emitEvent('clickedOn', this.utils.getUserId() || 'guest', JSON.stringify({
        isBuy: true,
        "chartType": "TradingView",
        buttonName: "ChartPlaceOrder",
        "IP": this.shared.IPAddress
      }), 1);
      // setTimeout(() => {
      //   let element = document.querySelector('app-order-buysell>nav');
      //   if (element) {
      //     if (this.chartConfig && ((location.pathname.indexOf('trading-view-charts-watch')==-1)))
      //       this.chartConfig.width = this.chartConfig.width - element.getClientRects()[0].width;
      //   } else {
      //   };
      // }, 200)
    }
    if (action == "limitSell") {
      if (price) {
        this.utils.broadcast('openBuySellDrawer', {
          'scrip': this.scripInfo,
          isCustomPrice: price,
          'action': 2
        });
        //console.log(socketDataProcessed,"datadatadata") 
      } else {
        this.utils.broadcast('openBuySellDrawer', {
          'scrip': this.scripInfo,
          'action': 2
        });
      }
      // setTimeout(() => {
      //   let element = document.querySelector('app-order-buysell>nav');
      //   if (element) {
      //     if (this.chartConfig && ((location.pathname.indexOf('trading-view-charts-watch')==-1)))
      //       this.chartConfig.width = this.chartConfig.width - element.getClientRects()[0].width;
      //   } else {
      //   };
      // }, 200)
      this.utils.setTrackMoeEvent('clickedOn', {
        "chartType": "TradingView",
        buttonName: "ChartPlaceOrder",
        isBuy: false,
        "User_ID": this.utils.getUserId() || 'guest',
        "IP": this.shared.IPAddress
      });
      this.analytics.emitEvent('clickedOn', this.utils.getUserId() || 'guest', JSON.stringify({
        isBuy: false,
        "chartType": "TradingView",
        buttonName: "ChartPlaceOrder",
        "IP": this.shared.IPAddress
      }), 1);
    }
    // }
    //  return socketDataProcessed
    //   }
    // })
    //       
  }
  getBarsData(symbolInfo, resolution, periodParams, onHistoryCallback, onErrorCallback) {
    // if(resolution!=this.topInterval){
    //   return
    // }
    let data = symbolInfo.full_name.split("||");
    if (data.length == 3) {
      this.segmentId = data[1];
      //console.log("SEGMENT ID 3", this.segmentId)
      this.token = data[2];
    } else {
      if (symbolInfo.listed_exchange) this.segmentId = symbolInfo.listed_exchange;
      //  console.log("SEGMENT ID 4", this.segmentId)
      if (symbolInfo.ticker) this.token = symbolInfo.ticker;
    }
    let {
      from,
      to,
      firstDataRequest
    } = periodParams;
    let subInt = this.topInterval == 'M' ? '1M' : this.topInterval == 'D' ? '1D' : this.topInterval == 'W' ? '1W' : this.topInterval == '60' || this.topInterval == '120' ? "60" : this.topInterval == '240' ? "240" : this.topInterval == '30' ? "30" : this.topInterval == '45' ? "45" : this.topInterval == '15' ? "15" : this.topInterval == '10' ? "10" : this.topInterval == '2' ? "2" : this.topInterval == '3' ? "3" : this.topInterval == '5' ? "5" : "1";
    if (firstDataRequest && resolution == subInt) {
      //  console.log(this.segmentId, this.token,"firstDataRequest",firstDataRequest)
      this.previousMappedData = [];
      this.previousPreMappedData = [];
      this.getScripDetail(this.segmentId, this.token);
      this.checkIfIndex(this.segmentId, this.token);
      setTimeout(() => {
        // console.log("this._tvWidget",this._tvWidget)
        if (!this.shared.isAppTradingView) {
          let doc = this._tvWidget['_iFrame'].contentDocument || this._tvWidget['_iFrame'].contentWindow.document;
          if (doc) {
            let buybtn = doc.getElementById('chart_buy');
            let sellbtn = doc.getElementById('chart_sell');
            if (buybtn && buybtn.parentNode && buybtn.parentNode.parentNode) {
              buybtn.parentNode.parentNode.remove();
            }
            if (sellbtn && sellbtn.parentNode && sellbtn.parentNode.parentNode) {
              sellbtn.parentNode.parentNode.remove();
            }
            if (this.isCurrentIndex || [6, 8, 14, 39].indexOf(Number(this.segmentId)) > -1) {} else {
              if (this._tvWidget && this._tvWidget['_ready'] && this.isExpanded) {
                let userId = this.utils.getUserId();
                const buyButton = this._tvWidget.createButton({
                  align: this.shared.isAppTradingView ? "left" : "right"
                });
                buyButton.setAttribute("title", "BUY");
                buyButton.setAttribute("name", "BUY");
                buyButton.setAttribute("id", "chart_buy");
                buyButton.classList.add("apply-common-tooltip");
                //   buyButton.classList.add("buy2");
                //   buyButton.classList.add("fl-r");
                //  buyButton.parentNode.classList.add("buy2");
                buyButton.parentNode['style'].border = "0px";
                buyButton['style'].color = "#ffffff";
                buyButton.parentNode['style'].background = "#2D77F4";
                buyButton.parentNode['style'].padding = "9px 10px";
                buyButton.parentNode.addEventListener("click", () => {
                  this.buyItem(userId);
                });
                buyButton.innerHTML = "BUY";
                const sellButton = this._tvWidget.createButton({
                  align: this.shared.isAppTradingView ? "left" : "right"
                });
                sellButton.setAttribute("title", "SELL");
                sellButton.setAttribute("name", "SELL");
                sellButton.setAttribute("id", "chart_sell");
                sellButton.classList.add("apply-common-tooltip");
                sellButton.classList.add("sell2");
                sellButton.parentNode['style'].border = "#FF5722 solid 1px";
                sellButton['style'].color = "white";
                sellButton.parentNode['style'].background = "#FF5722";
                sellButton.parentNode['style'].padding = "9px 10px";
                sellButton.parentNode.addEventListener("click", () => {
                  this.sellItem(userId);
                });
                sellButton.innerHTML = "SELL";
                sellButton.parentNode['classList'].add("sell2");
              }
            }
          }
        }
      }, 100);
    }
    if (resolution == subInt) {
      this.onHistoryCallback = onHistoryCallback;
      this.from = from;
      this.to = to;
    }
    this.periodParams = periodParams;
    // let dataToPass = (this.responseData && this.responseData.length) ? { ...periodParams, firstFrom: this.responseData[0].time, resolution: this.belowInterval, interval: this.topInterval, isFirst: false } : { ...periodParams, firstFrom: (new Date((new moment()).utc().toDate()).valueOf()), resolution: this.belowInterval, isFirst: true, interval: this.topInterval }
    // let { firstFrom, isFirst, interval } = dataToPass;
    this.responseData = [];
    //     // this.getData2(dataToPass, 2)
    //   //  let toDate = (firstFrom / 1000).toFixed(0)
    //     //  this.getChartHistoryPatchData(firstFrom, toDate, this.belowInterval, isFirst, interval,from, to);
    //     let fromDate = from * 1000;//firstFrom;
    //   //  resolution = this.belowInterval;
    //     let toDate2 = (((new Date(new moment(to * 1000).utc().toDate())).valueOf() - new Date("1980-01-01").valueOf()) / 1000).toFixed(0);
    //     let patchedResponseData = []
    //     // let lastYearDate = null;
    //     let fromData = fromDate;
    //     let newLastData = "";
    //     let prevConfig = {
    //       "1": { time: 5, duration: "days" },
    //       "2": { time: 5, duration: "days" },
    //       "3": { time: 5, duration: "days" },
    //       "5": { time: 15, duration: "days" },
    //       "10": { time: 3, duration: "months" },
    //       "15": { time: 3, duration: "months" },
    //       "30": { time: 6, duration: "months" },
    //       "45": { time: 6, duration: "months" },
    //       "60": { time: 5, duration: "years" },
    //       "240": { time: 5, duration: "years" },
    //       "D": { time: 10, duration: "years" },
    //       "W": { time: 20, duration: "years" },
    //       "M": { time: 26, duration: "years" },
    //     }
    //     let selected = prevConfig[resolution] ? prevConfig[resolution] : prevConfig[1];
    //     if (this.fromData2 == fromData) {
    //       let prevConfigUp = {
    //         "1": { time: 8, duration: "days" },
    //         "5": { time: 30, duration: "days" },
    //         "2": { time: 8, duration: "days" },
    //         "3": { time: 8, duration: "days" },
    //       }
    //       selected = prevConfigUp[resolution] ? prevConfigUp[resolution] : prevConfig[1]
    //       newLastData = (((new Date(new moment(fromDate).subtract(1, 'day').subtract(selected.time, selected.duration).utc().toDate())).valueOf() - new Date("1980-01-01").valueOf()) / 1000).toFixed(0);//((new Date(new moment(toDate).subtract(2, 'months')).valueOf() - new Date("1980-01-01").valueOf()) / 1000).toFixed(0)
    //       //  newLastData = ((( new Date(new Date().setHours(0, 0, 0, 0))).valueOf() - new Date("1980-01-01").valueOf()) / 1000).toFixed(0);//((new Date(new moment(toDate).subtract(2, 'months')).valueOf() - new Date("1980-01-01").valueOf()) / 1000).toFixed(0)
    //       /* if(firstDataRequest&&interval==1){
    //         newLastData = (((new Date(new moment(fromDate).subtract(selected.time, selected.duration).utc().toDate())).valueOf() - new Date("1980-01-01").valueOf()) / 1000).toFixed(0);//((new Date(new moment(toDate).subtract(2, 'months')).valueOf() - new Date("1980-01-01").valueOf()) / 1000).toFixed(0)
    //       } */
    //     } else {
    //       newLastData = (((new Date(new moment(fromDate).subtract(1, 'day').subtract(selected.time, selected.duration).utc().toDate())).valueOf() - new Date("1980-01-01").valueOf()) / 1000).toFixed(0);//((new Date(new moment(toDate).subtract(2, 'months')).valueOf() - new Date("1980-01-01").valueOf()) / 1000).toFixed(0)
    //       /*  if(firstDataRequest&&interval==1){
    //          newLastData = (((new Date(new moment(fromDate).subtract(selected.time, selected.duration).utc().toDate())).valueOf() - new Date("1980-01-01").valueOf()) / 1000).toFixed(0);//((new Date(new moment(toDate).subtract(2, 'months')).valueOf() - new Date("1980-01-01").valueOf()) / 1000).toFixed(0)
    //        } */
    //     }
    //     /*    if (newLastData == this.lastYearDate) {
    //        } else {
    //        }
    // */
    //     this.fromData2 = fromData
    //     this.lastYearDate = newLastData;
    //     let internDate2 = new Date("1980-01-01").setSeconds(this.lastYearDate);
    //     let offset2 = 1000 * (60 * new Date(internDate2).getTimezoneOffset());
    //     const time2 = moment(new Date(internDate2 + offset2)).valueOf();
    //     let internDate3 = new Date("1980-01-01").setSeconds(Number(toDate2));
    //     let offset3 = 1000 * (60 * new Date(internDate3).getTimezoneOffset());
    //     const time3 = moment(new Date(internDate3 + offset3)).valueOf();
    //    // let interval2 = ((resolution == '1M')) ? 'M' : ((resolution == '1D')) ? 'D' : (resolution == '1W') ? 'W' : (resolution == '60') ? "60" :(resolution == '120') ? "120" : (resolution == '240') ? "240" :(resolution == '45') ? "45" : (resolution == '30') ? "30" : (resolution == '15') ? "15" :(resolution == '10') ? "10" : (resolution == '3') ? "3" : (resolution == '2') ? "2" : (resolution == '5') ? "5" : "1";
    //     console.log(interval,"interval",this.chart.interval)
    let prevConfig = {
      "1": {
        time: 5,
        duration: "days"
      },
      "2": {
        time: 5,
        duration: "days"
      },
      "3": {
        time: 10,
        duration: "days"
      },
      "5": {
        time: 15,
        duration: "days"
      },
      "10": {
        time: 3,
        duration: "months"
      },
      "15": {
        time: 3,
        duration: "months"
      },
      "30": {
        time: 6,
        duration: "months"
      },
      "45": {
        time: 6,
        duration: "months"
      },
      "60": {
        time: 3,
        duration: "years"
      },
      "240": {
        time: 3,
        duration: "years"
      },
      "D": {
        time: 10,
        duration: "years"
      },
      "W": {
        time: 20,
        duration: "years"
      },
      "M": {
        time: 26,
        duration: "years"
      },
      "1D": {
        time: 10,
        duration: "years"
      },
      "1W": {
        time: 20,
        duration: "years"
      },
      "1M": {
        time: 26,
        duration: "years"
      }
    };
    let selected = prevConfig[resolution] ? prevConfig[resolution] : prevConfig[1];
    let toDate2 = ((new Date(new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_10__["default"](to * 1000).utc().toDate()).valueOf() - new Date("1980-01-01").valueOf()) / 1000).toFixed(0);
    let newLastData = ((new Date(new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_10__["default"](from * 1000).subtract(1, 'day').subtract(selected.time, selected.duration).utc().toDate()).valueOf() - new Date("1980-01-01").valueOf()) / 1000).toFixed(0); //((new Date(new moment(toDate).subtract(2, 'months')).valueOf() - new Date("1980-01-01").valueOf()) / 1000).toFixed(0)
    let interval22 = resolution == '1M' ? 'M' : resolution == '1D' ? 'D' : resolution == '1W' ? 'W' : resolution == '60' ? "60" : resolution == '120' ? "120" : resolution == '240' ? "240" : resolution == '45' ? "45" : resolution == '30' ? "30" : resolution == '15' ? "15" : resolution == '10' ? "10" : resolution == '3' ? "3" : resolution == '2' ? "2" : resolution == '5' ? "5" : "1";
    let request = {
      "UserId": this.utils.getUserId() || 'guest',
      "SessionId": this.utils.getSessionId(),
      //this.sessionId,
      "SegmentId": Number(this.segmentId),
      "Token": Number(this.token),
      "FromDate": newLastData,
      "ToDate": toDate2,
      "Interval": interval22 //interval2 ? interval2 : resolution == '1W' ? 'W' : this.chart.interval//resolution == '1W' ? 'D' : this.chart.interval//
    };
    let sub = this.toolsService.getChartHistory(request);
    sub.subscribe(data => {
      if (data.Status === "Success" && data.Response && data.Response.lstChartHistory && data.Response.lstChartHistory.length) {
        this.isError = false;
        let response = data.Response.lstChartHistory || [];
        let response2 = JSON.parse(JSON.stringify(data.Response.lstChartHistory || []));
        if ((!this.currentChartType || this.currentChartType !== 0) && this._tvWidget) {
          this.currentChartType = this._tvWidget.activeChart().chartType();
        }
        if (this.currentChartType == 8 && response2[response2.length - 1] && response2[response2.length - 2]) {
          let dataSplit = response2[response2.length - 1].split(",");
          let internDate = new Date("1980-01-01").setSeconds(dataSplit[0]);
          let offset = 1000 * (60 * -330);
          let lastData = (0,_assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_10__["default"])(new Date(internDate + offset)).valueOf();
          let dataSplit2 = response2[response2.length - 2].split(",");
          let internDate2 = new Date("1980-01-01").setSeconds(dataSplit2[0]);
          let offset2 = 1000 * (60 * -330);
          let secondLastData = (0,_assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_10__["default"])(new Date(internDate2 + offset2)).valueOf();
          let isSameTime = this.removeLastHekin(lastData, secondLastData);
          if (isSameTime) {
            //localStorage.getItem('chart_interval')!='1'
            //delete bars[bars.length - 1]
            //check if not in current range
            let val = response2.pop();
            response.pop();
            this.headsUp.v2 = (Number(dataSplit[5]) || 0) + (Number(dataSplit2[5]) || 0);
            //  console.log()
          }
        }
        let apiPriceDivisor = data.Response.PriceDivisor;
        this.isIndex = this.isCurrentIndex; //data.Response.Volume == 0
        let priceDivisor = this.utils.getPriceDivisor(this.segmentId) || apiPriceDivisor || this.utils.getSegmentDetail(this.segmentId, 'PriceDivisor') || 100;
        let formData = JSON.parse(JSON.stringify(response));
        let mappedData = [];
        let isin = this.checkIfIndexv2(this.segmentId, this.token);
        let lastPatchedTime;
        for (let i = 0; i < response2.length; i++) {
          let dataSplit = response[i].split(",");
          let internDate = new Date("1980-01-01").setSeconds(dataSplit[0]);
          let offset = 1000 * (60 * -330);
          let time = (0,_assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_10__["default"])(new Date(internDate + offset)).valueOf();
          let oriTime = (0,_assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_10__["default"])(new Date(internDate + offset)).valueOf();
          let subInt = this.topInterval == 'M' ? '1M' : this.topInterval == 'D' ? '1D' : this.topInterval == 'W' ? '1W' : this.topInterval == '60' || this.topInterval == '120' ? "60" : this.topInterval == '240' ? "240" : this.topInterval == '30' ? "30" : this.topInterval == '45' ? "45" : this.topInterval == '15' ? "15" : this.topInterval == '10' ? "10" : this.topInterval == '2' ? "2" : this.topInterval == '3' ? "3" : this.topInterval == '5' ? "5" : "1";
          // console.log(time,"timetimetime",dataSplit[0])
          //console.log(this.topInterval,"response this.topIntervalthis.topIntervalthis.topInterval")
          if (interval22 == 'D' || interval22 == 'W' || interval22 == 'M') {
            if (i == response2.length - 1 && firstDataRequest) {
              let myDate = new Date(time);
              myDate.setUTCHours(0);
              // Then set minutes
              myDate.setUTCMinutes(0);
              // Then set seconds
              myDate.setUTCSeconds(0);
              myDate.setUTCMilliseconds(0);
              time = myDate.getTime();
            } else {
              let newTime = new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_10__["default"](new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_10__["default"](time)).add(1, 'days');
              time = newTime.valueOf();
              let myDate = new Date(time);
              myDate.setUTCHours(0);
              // Then set minutes
              myDate.setUTCMinutes(0);
              // Then set seconds
              myDate.setUTCSeconds(0);
              myDate.setUTCMilliseconds(0);
              time = myDate.getTime();
            }
          }
          if (i == response2.length - 1 && firstDataRequest && resolution == subInt) {
            if (this.currentChartType == 8) {
              let prevConfig = {
                "1": {
                  time: 1,
                  startOf: "minute"
                },
                "2": {
                  time: 2,
                  startOf: "minute"
                },
                "3": {
                  time: 3,
                  startOf: "minute"
                },
                "5": {
                  time: 5,
                  startOf: "minute"
                },
                "10": {
                  time: 10,
                  startOf: "minute"
                },
                "15": {
                  time: 15,
                  startOf: "minute"
                },
                "30": {
                  time: 30,
                  startOf: "minute"
                },
                "45": {
                  time: 45,
                  startOf: "minute"
                },
                "60": {
                  time: 1,
                  startOf: "hour"
                },
                "240": {
                  time: 4,
                  startOf: "hour"
                },
                "1D": {
                  time: 1,
                  startOf: "day"
                },
                "1W": {
                  time: 1,
                  startOf: "week"
                },
                "1M": {
                  time: 1,
                  startOf: "month"
                },
                "D": {
                  time: 1,
                  startOf: "day"
                },
                "W": {
                  time: 1,
                  startOf: "week"
                },
                "M": {
                  time: 1,
                  startOf: "month"
                }
              };
              //console.log("isTimeEqual", newData, lastData)
              let duration = prevConfig[this.topInterval || 1]; //{ value: "1", label: "1 min", multiplier: 1, base: "today", startOf: "minute", periodicity: 1, timeUnit: 'minute', index: 0 };
              time = new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_10__["default"](time).endOf(duration.startOf).valueOf();
            }
            this.lastData = time;
          }
          if (interval22 == 'D' || interval22 == 'W' || interval22 == 'M') {
            if (time <= to * 1000) {
              let da = {
                time,
                time_data: time,
                open: Number(dataSplit[1] / priceDivisor || 0),
                close: Number(dataSplit[4] / priceDivisor || 0),
                low: Number(dataSplit[3] / priceDivisor || 0),
                high: Number(dataSplit[2] / priceDivisor || 0),
                oriTime,
                utc: new Date(oriTime)
              };
              if (!isin) {
                da['volume'] = dataSplit[5] ? Number(dataSplit[5]) : 0;
              } else {
                da['volume'] = 0;
              }
              //     if(da.time_data!=1680480000000)
              mappedData.push(da);
              lastPatchedTime = da;
              //  }
            }
          } else {
            if (time <= to * 1000) {
              //    if(!lastPatchedTime|| (lastPatchedTime>time)){
              let da = {
                time,
                time_data: time,
                open: Number(dataSplit[1] / priceDivisor || 0),
                close: Number(dataSplit[4] / priceDivisor || 0),
                low: Number(dataSplit[3] / priceDivisor || 0),
                high: Number(dataSplit[2] / priceDivisor || 0),
                oriTime,
                utc: new Date(oriTime)
              };
              if (!isin) {
                da['volume'] = dataSplit[5] ? Number(dataSplit[5]) : 0;
              } else {
                da['volume'] = 0;
              }
              //  if(da.time_data!=1680480000000)
              mappedData.push(da);
              lastPatchedTime = da;
              // }
            }
          }
          // if((i==(response2.length-1)) || (i==(response2.length-2))){
          //   console.log(i+"response 090909OLD TIME:" , new Date(time) , response2[i],mappedData[i])
          // }
        }
        if (mappedData.length) {}
        if (this.previousPreMappedData && mappedData && this.previousPreMappedData[0] && mappedData[0] && mappedData[0].time == this.previousPreMappedData[0].time && this.previousPreMappedData.length == mappedData.length) {
          onHistoryCallback([], {
            noData: true
          });
        }
        if (this.previousPreMappedData && this.previousMappedData && this.previousPreMappedData[0] && this.previousMappedData[0] && this.previousMappedData[0].time == this.previousPreMappedData[0].time && this.previousPreMappedData.length == this.previousMappedData.length) {
          onHistoryCallback([], {
            noData: true
          });
        }
        if (this.previousPreMappedData && mappedData && this.previousPreMappedData[0] && mappedData[0] && mappedData[mappedData.length - 1].time == this.previousPreMappedData[this.previousPreMappedData.length - 1].time && this.previousPreMappedData.length == mappedData.length) {
          onHistoryCallback([], {
            noData: true
          });
        }
        if (this.previousPreMappedData && this.previousMappedData && this.previousPreMappedData[0] && this.previousMappedData[0] && this.previousMappedData[this.previousMappedData.length - 1].time == this.previousPreMappedData[this.previousPreMappedData.length - 1].time && this.previousPreMappedData.length == this.previousMappedData.length) {
          onHistoryCallback([], {
            noData: true
          });
        }
        if (!firstDataRequest && (mappedData.length == 0 || this.previousMappedData && mappedData && this.previousMappedData[0] && mappedData[0].time == this.previousMappedData[0].time && this.previousMappedData.length == mappedData.length)) {
          // let newT = (((new Date(new moment(fromDate).subtract(1, 'day').subtract(selected.time, selected.duration).utc().toDate())).valueOf() - new Date("1980-01-01").valueOf()) / 1000).toFixed(0);//((new Date(new moment(toDate).subtract(2, 'months')).valueOf() - new Date("1980-01-01").valueOf()) / 1000).toFixed(0)
          onHistoryCallback([], {
            noData: true
          });
        }
        // if (this.responseData) {
        if (firstDataRequest && resolution == subInt) {
          this.responseData = mappedData;
          this.getSocketData(this.responseData);
          this.firstTo = to;
          this.firstResponseData = JSON.parse(JSON.stringify(this.responseData));
        }
        if (this.storageCounter == 2) {
          this.previousPreMappedData = mappedData || [];
          this.storageCounter++;
        } else if (this.storageCounter == 1) {
          this.previousMappedData = mappedData || [];
          this.storageCounter++;
        } else if (this.storageCounter == 3) {
          this.storageCounter = 1;
        }
        //    console.log((to * 1000),"prebar",mappedData[mappedData.length-1])
        //this.previousPreMappedData=mappedData;
        onHistoryCallback(mappedData, {
          noData: mappedData.length == 0
        });
      } else {
        this.shared.isServiceHit = false;
        onHistoryCallback([], {
          noData: true
        });
      }
    }, err => {
      this.shared.isServiceHit = false;
      this.isError = true;
      onHistoryCallback([], {
        noData: true
      });
      // return patchedResponseData
    });
  }
  /**Sort data by time */
  sort_unique(arr) {
    if (arr.length === 0) return arr;
    arr = arr.sort((a, b) => {
      return a.time - b.time;
    });
    let ret = [arr[0]];
    for (let i = 0; i < arr.length; i++) {
      //Start loop at 1: arr[0] can never be a duplicate
      if (arr[i - 1] !== arr[i]) {
        ret.push(arr[i]);
      }
    }
    return ret;
  }
  /**
   * Get History Data
   * @param periodParams
   * @param fl
   * @returns
   */
  getData2(periodParams, fl) {}
  /**
  * Fetch Chart Data (added by reshmaC on 04/02/2021)
  * @param isInit is to Clear Previous Data
  * @param isCalledPrevData flag to change startTime and Todate on scroll of chart
  */
  getChartHistoryPatchData(fromDate, toDate, resolution, isFirst, interval, from, to) {}
  /**
   * Resolution data
   * @returns List of resolutions
   */
  getResolutionsData() {
    return this.belowInterval == '1W' ? ["1d", "1W", "1M"] : ['1', "2", "3", '5', '10', '15', '30', "45", '60', "240", '1D', '1W', '1M'
    /*  "3","5", "15", "120","240","1M","1w"    */];
  }
  ngOnDestroy() {
    if (this.listenerFn) {
      this.listenerFn();
    }
    //console.log("DESTROYYY")
    if (this.socketStatusSubscription) {
      this.socketStatusSubscription.unsubscribe();
    }
    if (this.socketSubscription) {
      this.socketSubscription.unsubscribe();
    }
    if (this._tvWidget !== null) {
      this._tvWidget.remove();
      this._tvWidget = null;
    }
  }
  getPatchedData(to) {
    let toDate2 = ((new Date(new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_10__["default"]().utc().toDate()).valueOf() - new Date("1980-01-01").valueOf()) / 1000).toFixed(0);
    let fromDate = ((to - new Date("1980-01-01").valueOf()) / 1000).toFixed(0);
    let request = {
      "UserId": this.utils.getUserId() || 'guest',
      "SessionId": this.utils.getSessionId(),
      //this.sessionId,
      "SegmentId": Number(this.segmentId),
      "Token": Number(this.token),
      "FromDate": fromDate,
      "ToDate": toDate2,
      "Interval": this.topInterval //interval ? interval : resolution == '1W' ? 'W' : this.chart.interval//resolution == '1W' ? 'D' : this.chart.interval//
    };
    let sub = this.toolsService.getChartHistory(request);
    sub.subscribe(data => {
      if (data.Status === "Success" && data.Response && data.Response.lstChartHistory && data.Response.lstChartHistory.length) {
        this.isError = false;
        let response = data.Response.lstChartHistory || [];
        if (this.responseData && this.responseData.length && this.responseData[this.responseData.length - 1] && to != this.responseData[this.responseData.length - 1].time) this.isIndex = this.isCurrentIndex; //data.Response.Volume == 0
        let apiPriceDivisor = data.Response.PriceDivisor;
        let priceDivisor = this.utils.getPriceDivisor(this.segmentId) || apiPriceDivisor || this.utils.getSegmentDetail(this.segmentId, 'PriceDivisor') || 100;
        let formData = JSON.parse(JSON.stringify(response));
        let mappedData = [];
        for (let i = 0; i < response.length; i++) {
          let dataSplit = response[i].split(",");
          let internDate = new Date("1980-01-01").setSeconds(dataSplit[0]);
          let offset = 1000 * (60 * -330);
          let time = (0,_assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_10__["default"])(new Date(internDate + offset)).valueOf();
          if (this.topInterval == 'D' || this.topInterval == '1D' || this.topInterval == 'W' || this.topInterval == '1W' || this.topInterval == 'M' || this.topInterval == '1M') {
            let myDate = new Date(time);
            // Set hours
            myDate.setHours(9);
            // Then set minutes
            myDate.setMinutes(15);
            // Then set seconds
            myDate.setSeconds(1);
            time = myDate.valueOf();
          }
          if (this.currentChartType == 8) {
            //Prev data and current socket data time is in same interval range
            //  if((new moment(time).seconds(0).milliseconds(0).valueOf() == new moment(this.lastData).seconds(0).milliseconds(0).valueOf()) && new moment(this.lastData).seconds() < 59){
            //   if(this.isTimeEqualHekin(new moment(time).seconds(0).milliseconds(0).valueOf(),new moment(this.lastData).seconds(0).milliseconds(0).valueOf())){
            //     time =new moment(time).seconds(new moment(this.lastData).seconds()).milliseconds(999).valueOf()
            //   console.log("IN 1st currentChartType : ", this.currentChartType," with time : ",time)
            // }else{
            //   time = new moment(time).milliseconds(999).valueOf()
            //   this.lastData = time;
            //   console.log("IN 2nd currentChartType : ", this.currentChartType," with time : ",time)
            // }
            let insideObj = this.isTimeEqualHekin(new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_10__["default"](time).seconds(0).milliseconds(0).valueOf(), new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_10__["default"](this.lastData).seconds(0).milliseconds(0).valueOf());
            time = insideObj.time;
          } else {
            //   time =new moment(time).valueOf()
          }
          if (!this.lastData) {
            this.lastData = time;
          }
          let data = {
            time,
            open: Number(dataSplit[1] / priceDivisor || 0),
            close: Number(dataSplit[4] / priceDivisor || 0),
            low: Number(dataSplit[3] / priceDivisor || 0),
            high: Number(dataSplit[2] / priceDivisor || 0)
          };
          if (!this.isCurrentIndex) {
            data['volume'] = dataSplit[5] ? Number(dataSplit[5]) : 0;
          } else {
            data['volume'] = 0;
          }
          mappedData.push(data);
        }
        //  console.log("oioio",JSON.parse(localStorage.getItem("saved_chart_web")))
        if (mappedData && mappedData.length) {
          mappedData.forEach(ele => {
            //&& ele.time >= ( this.to*1000 )
            if (ele.time >= to && (!this.firstTo || ele.time >= this.firstTo * 1000)) {
              this.realtimeCallback(ele);
            } else {
              //   console.log(to,"!ele.time", ele.time ,">=", this.to)
            }
          });
          this.responseData = mappedData;
        }
      } else {
        this.shared.isServiceHit = false;
      }
    }, err => {
      this.shared.isServiceHit = false;
      this.isError = true;
    });
  }
  /**
  * open buy drawer , when user click buy button for the selected scrip
  * @param event open buy  drawer
  */
  buyItem(userId) {
    //this.router.navigate([(location.pathname).replace('trading-view-charts','buy-trading-view-charts')])
    // if (userId && userId != 'guest' && this.utils.isAuthorized()  ) {
    this.scripInfo.isTradingAllowed = this.utils.isSegmentAllowed(this.segmentId);
    if (this.isCurrentIndex || [6, 8, 14, 39].indexOf(Number(this.segmentId)) > -1) {
      return;
    }
    if (this.shared.isAppTradingView) {
      //  this.router.navigate([(location.pathname).replace('trading-view-charts','buy-trading-view-charts')])
    } else {
      this.utils.broadcast('openBuySellDrawer', {
        'scrip': this.scripInfo,
        'action': 1
      });
      // setTimeout(() => {
      //   let element = document.querySelector('app-order-buysell>nav');
      //   if (element) {
      //     if (this.chartConfig && (location.pathname.indexOf('trading-view-charts-watch')==-1))
      //       this.chartConfig.width = this.chartConfig.width - element.getClientRects()[0].width;
      //   } else {
      //   };
      // }, 200)
    }
    // } else {
    //   this.showPreLoginModal();
    // }
  }
  /**
  * open sell drawer , when user click buy sell for the selected scrip
  * @param event open sell  drawer
  */
  sellItem(userId) {
    //  this.router.navigate([(location.pathname).replace('trading-view-charts','sell-trading-view-charts')])
    // if (userId && userId != 'guest' && this.utils.isAuthorized()) {
    this.scripInfo.isTradingAllowed = this.utils.isSegmentAllowed(this.segmentId);
    if (this.isCurrentIndex || [6, 8, 14, 39].indexOf(Number(this.segmentId)) > -1) {
      return;
    }
    if (this.shared.isAppTradingView) {
      //   this.router.navigate([(location.pathname).replace('trading-view-charts','sell-trading-view-charts')])
    } else {
      this.utils.broadcast('openBuySellDrawer', {
        'scrip': this.scripInfo,
        'action': 2
      });
      // setTimeout(() => {
      //   let element = document.querySelector('app-order-buysell>nav');
      //   if (element) {
      //     if (this.chartConfig && (location.pathname.indexOf('trading-view-charts-watch')==-1))
      //       this.chartConfig.width = this.chartConfig.width - element.getClientRects()[0].width;
      //   } else {
      //   };
      // }, 200)
    }
    // } else {
    //   this.showPreLoginModal();
    // }
  }
  /** Show Prelogin modal*/
  showPreLoginModal() {
    this.zone.run(() => {
      this.showPreLogin = true;
      this.renderer.setStyle(document.body, 'overflow', 'hidden');
    });
  }
  /** Close Prelogin Modal*/
  closePreLoginModaL() {
    this.zone.run(() => {
      this.showPreLogin = false;
      this.renderer.setStyle(document.body, 'overflow', 'auto');
    });
  }
  navigateToLogin() {
    this.router.navigate(['auth/login']);
  }
  getScripDetail(segmentId, token, load, cb) {
    if (this.dataSearch[segmentId + "_" + token]) return;else this.dataSearch[segmentId + "_" + token] = true;
    let currentUserId = this.utils.getUserId();
    let userId = !currentUserId || currentUserId == 'guest' ? '' : currentUserId;
    let payload = {
      "nMarketSegmentId": Number(segmentId),
      "nToken": Number(token),
      "UserId": userId
    };
    this.scripInfo = {};
    this.rest.getScripDetails(payload).subscribe(res => {
      if (res.Status == "Success" && res.Response) {
        this.scripInfo = res.Response;
        this.scripInfo.symbol = this.scripInfo.SecName;
        if (load) {
          if (this.segmentId) {
            this.loadTradingViewData(null, true);
          }
        }
      } else if (this.utils.isSessionExpired(res.Reason)) {
        if (load) {
          if (this.segmentId) {
            this.loadTradingViewData(null, true);
          }
        }
        // if(this.shared.isSSO){
        //   this.utils.sessionExpireHandling()
        //   return
        // }
        // this.utils.error('Session Expired', "Please Login Again");
        // this.utils.postFeatureCount();
        // this.utils.clearLoginDetails();
        // this.shared.userId = null;
        // this.router.navigate(['auth/login']);
      } else {
        if (load) {
          if (this.segmentId) {
            this.loadTradingViewData(null, true);
          }
        }
      }
      if (cb) {
        cb();
      }
    }, err => {
      if (load) {
        if (this.segmentId) {
          this.loadTradingViewData();
        }
      }
    });
  }
  static {
    this.ctorParameters = () => [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Renderer2
    }, {
      type: src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_2__.AnalyticsService
    }, {
      type: src_app_services_sockets_socket_service__WEBPACK_IMPORTED_MODULE_7__.SocketService
    }, {
      type: src_app_services_rest_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService
    }, {
      type: src_app_services_rest_company_service__WEBPACK_IMPORTED_MODULE_4__.CompanyService
    }, {
      type: src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_8__.UtilsService
    }, {
      type: src_app_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_6__.SharedDataService
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router
    }, {
      type: _angular_common__WEBPACK_IMPORTED_MODULE_13__.LocationStrategy
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.NgZone
    }, {
      type: src_app_services_rest_tool_service__WEBPACK_IMPORTED_MODULE_5__.ToolService
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute
    }, {
      type: _angular_common__WEBPACK_IMPORTED_MODULE_13__.Location
    }];
  }
  static {
    this.propDecorators = {
      scripName: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input,
        args: ["scripName"]
      }],
      chartId: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input,
        args: ["chartId"]
      }],
      chartTypeSet: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input,
        args: ["chartTypeSet"]
      }],
      intervalTv: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input,
        args: ["intervalTv"]
      }],
      token: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input,
        args: ["token"]
      }],
      segmentId: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input,
        args: ["segmentId"]
      }],
      b5Data: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input,
        args: ["b5Data"]
      }],
      responseData: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input,
        args: ["responseData"]
      }],
      patchedResponseData: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input,
        args: ["patchedResponseData"]
      }],
      isExpanded: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input,
        args: ["isExpanded"]
      }],
      getData: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Output,
        args: ["getData"]
      }],
      getResolution: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Output,
        args: ["getResolution"]
      }],
      setInterval: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Output,
        args: ["setInterval"]
      }],
      fetchNewData: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Output,
        args: ["fetchNewData"]
      }],
      onChartReady: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Output,
        args: ["onChartReady"]
      }],
      onSearchClicked: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Output,
        args: ["onSearchClicked"]
      }],
      symbol: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input
      }],
      interval: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input
      }],
      datafeedUrl: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input
      }],
      libraryPath: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input
      }],
      chartsStorageUrl: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input
      }],
      chartsStorageApiVersion: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input
      }],
      clientId: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input
      }],
      userId: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input
      }],
      fullscreen: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input
      }],
      details: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input
      }],
      disableFeatures: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input
      }],
      autosize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input
      }],
      containerId: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input
      }],
      theme: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input
      }]
    };
  }
};
TvChartContainerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: "app-tv-chart-container",
  template: _tv_chart_container_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  imports: [],
  providers: [src_app_services_rest_company_service__WEBPACK_IMPORTED_MODULE_4__.CompanyService],
  styles: [(_tv_chart_container_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__metadata)("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_11__.Renderer2, src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_2__.AnalyticsService, src_app_services_sockets_socket_service__WEBPACK_IMPORTED_MODULE_7__.SocketService, src_app_services_rest_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService, src_app_services_rest_company_service__WEBPACK_IMPORTED_MODULE_4__.CompanyService, src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_8__.UtilsService, src_app_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_6__.SharedDataService, _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router, _angular_common__WEBPACK_IMPORTED_MODULE_13__.LocationStrategy, _angular_core__WEBPACK_IMPORTED_MODULE_11__.ChangeDetectorRef, _angular_core__WEBPACK_IMPORTED_MODULE_11__.NgZone, src_app_services_rest_tool_service__WEBPACK_IMPORTED_MODULE_5__.ToolService, _angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute, _angular_common__WEBPACK_IMPORTED_MODULE_13__.Location])], TvChartContainerComponent);


/***/ }),

/***/ 59607:
/*!*********************************************************************!*\
  !*** ./src/app/tools-module/tv-chart-exp/tv-chart-exp.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TvChartExpComponent: () => (/* binding */ TvChartExpComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _tv_chart_exp_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tv-chart-exp.component.html?ngResource */ 65761);
/* harmony import */ var _tv_chart_exp_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tv-chart-exp.component.scss?ngResource */ 14353);
/* harmony import */ var _tv_chart_exp_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tv_chart_exp_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 81391);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/analytics/analytics.service */ 50213);
/* harmony import */ var src_app_services_rest_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/rest/common.service */ 18056);
/* harmony import */ var src_app_services_rest_tool_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/rest/tool.service */ 91387);
/* harmony import */ var src_app_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/shared-data/shared-data.service */ 46013);
/* harmony import */ var src_app_services_sockets_socket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/sockets/socket.service */ 6312);
/* harmony import */ var src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/utils/utils.service */ 89893);
/* harmony import */ var _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../assets/libs/esm-moment.min.js */ 29483);
/* harmony import */ var _common_module_tv_chart_container_tv_chart_container_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common-module/tv-chart-container/tv-chart-container.component */ 58915);













/** Import Moment JS Library*/
// var moment: any = require();


let TvChartExpComponent = class TvChartExpComponent {
  constructor(location, analytics, toolsService, googleAnalyticsEventsService, rest, cdRef, utils, zone, socket, renderer, shared, route, activatedRoute) {
    this.location = location;
    this.analytics = analytics;
    this.toolsService = toolsService;
    this.googleAnalyticsEventsService = googleAnalyticsEventsService;
    this.rest = rest;
    this.cdRef = cdRef;
    this.utils = utils;
    this.zone = zone;
    this.socket = socket;
    this.renderer = renderer;
    this.shared = shared;
    this.route = route;
    this.activatedRoute = activatedRoute;
    /**
    * preLogin Variable
    */
    this.showPreLogin = false;
    // this.theme = 'Dark'
    this.lastSocketVolume = 0;
    this.socketDate = {
      curr: ""
    };
    this.onChartReady = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
    this.onSearchClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
    this.layoutConfig = {
      showWatchlist: false
    };
    this.watchListData = [[], [], [], [], []];
    this.resolution = 1;
    this.activeWatchlist = 1;
    this.watchListDataName = {};
    this.filterConfig = {
      sorts: [{
        key: 'SecName',
        label: 'Alphabetically',
        desc: ' Alphabetically',
        value: 'SecName'
      }, {
        key: 'ChangePer',
        label: 'ChangePer',
        desc: 'ChangePer',
        value: 'ChangePer'
      }, {
        key: '',
        label: '',
        desc: '',
        value: ''
      }],
      selected: {
        1: {
          asc: true,
          sort: ['SecName']
        },
        2: {
          asc: true,
          sort: ['SecName']
        },
        3: {
          asc: true,
          sort: ['SecName']
        },
        4: {
          asc: true,
          sort: ['SecName']
        },
        5: {
          asc: true,
          sort: ['SecName']
        }
      }
    };
    //
    //this.isTradingChart = localStorage.getItem('chartType') == 'true';
    this.fullB5data = {};
    this.responseData = [];
    this.patchedResponseData = [];
    this.chart = {
      time: 'D',
      type: 'candle',
      interval: "1"
    };
    this.headsUp = {};
    this.socketData = {};
    this.config = {
      lastTicks: {
        Response: {
          PriceDivisor: '',
          lstChartHistory: []
        }
      }
    };
    //  this.subscribeChanges();
  }
  ngOnInit() {
    this.isWatchlistChart = location.pathname.indexOf('trading-view-charts-watch') > -1 || location.pathname.indexOf('tv-charts-watch') > -1;
    console.log("isWatchlistChart", this.isWatchlistChart);
  }
  /**
   * Life Cycle Hook for Input Changes
   * @param changes SimpleChanges instance for incoming Changes
   */
  ngOnChanges(changes) {
    if (changes["recUserId"]) {
      this.config.recUserId = changes["recUserId"].currentValue;
    }
    if (changes["chartId"]) {
      this.chartId = changes["chartId"].currentValue;
    }
    if (changes["recSessionId"]) {
      this.config.recSessionId = changes["recSessionId"].currentValue;
    }
    if (changes["segmentId"]) {
      this.config.SegmentId = changes["segmentId"].currentValue;
    }
    if (changes["token"]) {
      this.config.Token = changes["token"].currentValue;
    }
    if (changes["scripName"]) {
      this.config.symbol = changes["scripName"].currentValue || "";
    }
    if (changes["chartIntervalSet"]) {
      console.log("this._tvWidgetpre Interval changed", changes["chartIntervalSet"].currentValue);
      this.config.intervalTv = changes["chartIntervalSet"].currentValue || "";
    }
    if (changes["chartTypeSet"]) {
      //   console.log("this._tvWidget",this._tvWidget)
      console.log("this._tvWidgetpre", changes["chartTypeSet"].currentValue);
      this.config.type = changes["chartTypeSet"].currentValue || "";
    }
    if (changes["fullscreen"]) {
      this.config.fullscreen = changes["fullscreen"].currentValue || "";
    }
    if (changes["details"]) {
      this.config.details = changes["details"].currentValue || "";
    }
    if (changes["isEle"]) {
      this.config.isEle = changes["isEle"].currentValue || "";
    }
    if (changes["isExpanded"]) {
      this.config.isExpanded = changes["isExpanded"].currentValue || "";
    }
    if (changes["theme"]) {
      this.config.theme = changes["theme"].currentValue || "";
    }
    if (changes["b5DataFetched"]) {
      this.fullB5data = changes["b5DataFetched"].currentValue || "";
    }
    if (changes["responseDataFetched"]) {
      this.responseData = changes["responseDataFetched"].currentValue || "";
    }
    if (this.config.SegmentId && this.config.Token && !this.config.isEle) {
      //  this.getKeyInfo({ "UserId": this.utils.getUserId(), "SessionId": this.utils.getSessionId, "Token": Number(this.config.Token), "SegmentId": Number(this.config.SegmentId) });
      //   this.getScripDetail(this.config.SegmentId, this.config.Token, true);
      this.utils.subscribeMultitouchline([{
        SegmentId: this.config.SegmentId,
        Token: this.config.Token
      }]);
      this.clearIntervalData();
      this.getSocketData();
      // this.listenBroadcast();
      this.utils.subscribeMultitouchline([{
        SegmentId: this.config.SegmentId,
        Token: this.config.Token
      }]);
      // this.getChartHistory(true);
    }
  }
  /**
   * Go to ChartIQ chart
   */
  goToChartIQ() {
    localStorage.setItem("chartType", 'false');
    let userId = this.utils.getUserId();
    if (userId && userId != 'guest') {
      this.utils.updatePreference('ChartType', "CHART_IQ");
      this.savePreferencetoAP2I();
    }
    if (location.pathname.indexOf('trading-view-charts-watch') > -1 || location.pathname.indexOf('tv-charts-watch') > -1) {
      this.utils.setTrackMoeEvent('clickedOn', {
        "chartType": "TradingView",
        pageName: "Watchlist",
        buttonName: "ChartSwitch",
        "User_ID": this.utils.getUserId() || 'guest',
        "IP": this.shared.IPAddress
      });
      this.route.navigate(['/cq/advanced-charts-watch/' + this.config.symbol + "/" + this.config.SegmentId + "/" + this.config.Token]);
      this.analytics.emitEvent('clickedOn', this.utils.getUserId() || 'guest', JSON.stringify({
        "chartType": "TradingView",
        pageName: "Watchlist",
        buttonName: "ChartSwitch",
        "IP": this.shared.IPAddress
      }), 1);
    } else {
      this.utils.setTrackMoeEvent('clickedOn', {
        "chartType": "TradingView",
        pageName: "Expanded",
        buttonName: "ChartSwitch",
        "User_ID": this.utils.getUserId() || 'guest',
        "IP": this.shared.IPAddress
      });
      this.route.navigate(['/cq/advanced-charts/' + this.config.symbol + "/" + this.config.SegmentId + "/" + this.config.Token]);
      this.analytics.emitEvent('clickedOn', this.utils.getUserId() || 'guest', JSON.stringify({
        "chartType": "TradingView",
        pageName: "Expanded",
        buttonName: "ChartSwitch",
        "IP": this.shared.IPAddress
      }), 1);
    }
  }
  /** to save user preferences */
  savePreferencetoAP2I() {
    let request = {
      "preference_name": "ChartType",
      "preference_type": "ChartType",
      "client_id": this.utils.getUserId(),
      "config": "CHART_IQ",
      "platform": "Web"
    };
    let userAccountStatus = this.utils.getUserAccountStatus();
    if (!(!userAccountStatus || !userAccountStatus.onboardStatus || userAccountStatus.onboardStatus == 'C')) {
      return;
    }
    this.toolsService.saveUserPreference(request, true).subscribe(res => {
      if (res.status_code && res.status_code == 200) {}
    }, err => {});
  }
  /**
  * Listener for Socket Response Packets
  */
  getSocketData() {
    this.socketSubscription = this.socket.broadcaster.on('watchlist').subscribe(data => {
      this.marketStatus = this.utils.getMarketStatus(this.config.SegmentId);
      if (this.marketStatus && this.marketStatus.status && !this.marketStatus.status[1]) {
        return false;
      }
      if (data[0][1] == this.config.SegmentId && data[0][7] == this.config.Token && this.responseData && this.responseData.length) {
        let LTT = new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_8__["default"](this.responseData[this.responseData.length - 1].DT).format('DD-MM-YYYY HH:mm:ss');
        let previousData = {
          LTT: LTT,
          LUT: LTT,
          Volume: this.responseData[this.responseData.length - 1].Volume
        };
        if (!this.utils.isUpdatedData(previousData, data[0])) return;
        this.previousClose = Number(data[0][76]) / Number(data[0][399]);
        let ltp = Number(data[0][8] == 0) ? this.previousClose : Number(data[0][8]) / Number(data[0][399]);
        this.headsUp.Open = Number(data[0][8]) == 0 ? this.previousClose : Number(data[0][75]) / Number(data[0][399]); //if ltp = 0 then show prevclose (24/05/2021)
        this.headsUp.High = Number(data[0][8]) == 0 ? this.previousClose : Number(data[0][77]) / Number(data[0][399]); //if ltp = 0 then show prevclose (24/05/2021)
        this.headsUp.Low = Number(data[0][8]) == 0 ? this.previousClose : Number(data[0][78]) / Number(data[0][399]); //if ltp = 0 then show prevclose (24/05/2021)
        this.headsUp.Close = this.previousClose;
        this.headsUp.Volume = Number(data[0][79]);
        this.socketData = {
          "DT": new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_8__["default"](data[0][74], 'YYYY-MM-DD HHmmss'),
          "Close": ltp,
          "Open": this.headsUp.Open,
          "Low": this.headsUp.Low,
          "High": this.headsUp.High,
          "Volume": Number(data[0][9])
        };
        this.processSocketData();
      }
    });
  }
  processSocketData() {
    if (this.responseData && this.responseData.length && this.socketData) {
      let datapoint = {
        "DT": new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_8__["default"](this.socketData.DT).toDate(),
        "Close": this.socketData.Close,
        "Open": this.socketData.Open,
        "Low": this.socketData.Low,
        "High": this.socketData.High,
        "Volume": this.socketData.Volume
      };
      // this.lastSocketVolume=0;
      let lastDataPoint = this.responseData[this.responseData.length - 1];
      if (this.socketData.DT && lastDataPoint.DT && this.isTimeEqual(this.socketData.DT, lastDataPoint.DT)) {
        datapoint.Close = datapoint.Close;
        datapoint.Open = lastDataPoint.Open;
        datapoint.High = lastDataPoint.High > datapoint.Close ? lastDataPoint.High : datapoint.Close;
        datapoint.Low = lastDataPoint.Low < datapoint.Close ? lastDataPoint.Low : datapoint.Close;
        datapoint.Volume = lastDataPoint.Volume + datapoint.Volume;
        datapoint.DT = lastDataPoint.DT;
      } else {
        datapoint.Close = datapoint.Close;
        datapoint.Open = datapoint.Close;
        datapoint.High = datapoint.Close;
        datapoint.Low = datapoint.Close;
        datapoint.Volume = datapoint.Volume; //this.lastSocketVolume?this.socketData.Volume-this.lastSocketVolume:lastDataPoint.Volume;// datapoint.Volume //lastDataPoint.Volume,//
        this.lastSocketVolume = this.socketData.Volume;
      }
      //this.socketDate
      let time = new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_8__["default"](datapoint.DT || this.socketData.DT).valueOf();
      // let date = new moment(datapoint.DT || this.socketData.DT).toDate();
      let dataFormated = {
        time,
        low: datapoint.Low,
        high: datapoint.High,
        open: datapoint.Open,
        close: datapoint.Close,
        volume: datapoint.Volume
      };
      this.zone.run(() => this.fullB5data = dataFormated);
      this.cdRef.markForCheck();
    }
  }
  isTimeEqual(newData, lastData) {
    let duration = {
      value: "1",
      label: "1 min",
      multiplier: 1,
      base: "today",
      startOf: "minute",
      periodicity: 1,
      timeUnit: 'minute',
      index: 0
    };
    let newTime = new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_8__["default"](newData).startOf(duration.startOf);
    let lastTime = new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_8__["default"](lastData).startOf(duration.startOf);
    return _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_8__["default"].duration(newTime.diff(lastTime)).as(duration.startOf) < Number(duration.periodicity);
  }
  isDailyDuration() {
    let duration = this.chart.interval;
    return ['D', 'W', 'M'].indexOf(this.chart.time) > -1 && (duration == 1 || duration == 3 || duration == 5 || duration == 10 || duration == 15 || duration == 30 || duration == 60);
  }
  getResolution(resolution) {
    this.resolution = resolution;
  }
  sort_unique(arr) {
    if (arr.length === 0) return arr;
    arr = arr.sort((a, b) => {
      return a.time - b.time;
    });
    let ret = [arr[0]];
    for (let i = 1; i < arr.length; i++) {
      //Start loop at 1: arr[0] can never be a duplicate
      if (arr[i - 1] !== arr[i]) {
        ret.push(arr[i]);
      }
    }
    return ret;
  }
  setInterval(interval) {
    this.chart.interval = interval;
  }
  getData(periodParams) {
    let {
      from,
      to,
      firstDataRequest,
      firstFrom,
      resolution,
      isFirst,
      interval
    } = periodParams;
    // if (resolution != "1D") {
    let toDate = (firstFrom / 1000).toFixed(0);
    //  let fromDate = (from).toFixed(0)
    return this.getChartHistoryPatchData(firstFrom, toDate, resolution, isFirst, interval);
    //  }
  }
  /**
  * Fetch Chart Data (added by reshmaC on 04/02/2021)
  * @param isInit is to Clear Previous Data
  * @param isCalledPrevData flag to change startTime and Todate on scroll of chart
  */
  getChartHistoryPatchData(fromDate, toDate, resolution, isFirst, interval) {
    let toDate2 = ((new Date(new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_8__["default"](fromDate).utc().toDate()).valueOf() - new Date("1980-01-01").valueOf()) / 1000).toFixed(0);
    //let toDate2 = (((new Date(new moment(fromDate).toDate())).valueOf() - new Date("1980-01-01").valueOf()) / 1000).toFixed(0);
    let diff = resolution ? resolution == '1W' ? 3 : resolution >= 120 ? 6 : resolution >= 60 ? 3 : resolution >= 30 ? 3 : resolution == 5 ? 10 : 2 : 2;
    let lastYearDate = null;
    lastYearDate = ((new Date(new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_8__["default"](fromDate).subtract(1, 'day').subtract(interval == "D" || interval == "30" ? 26 : 7, interval == "D" || interval == "30" ? 'years' : 'months').utc().toDate()).valueOf() - new Date("1980-01-01").valueOf()) / 1000).toFixed(0); //((new Date(new moment(toDate).subtract(2, 'months')).valueOf() - new Date("1980-01-01").valueOf()) / 1000).toFixed(0)
    this.request = {
      "UserId": this.utils.getUserId() || 'guest',
      "SessionId": this.utils.getSessionId() || '',
      "SegmentId": Number(this.config.SegmentId),
      "Token": Number(this.config.Token),
      "FromDate": lastYearDate,
      "ToDate": toDate2,
      "Interval": interval ? interval : resolution == '1W' ? 'D' : this.chart.interval //resolution == '1W' ? 'D' : this.chart.interval//
    };
    this.shared.isServiceHit = true;
    this.toolsService.getChartHistory(this.request).subscribe(data => {
      if (data.Status === "Success" && data.Response && data.Response.lstChartHistory && data.Response.lstChartHistory.length) {
        this.isError = false;
        let response = data.Response.lstChartHistory || [];
        let priceDivisor = this.utils.getSegmentDetail(this.config.SegmentId, 'PriceDivisor') || 100;
        let formData = JSON.parse(JSON.stringify(response));
        let mappedData = [];
        for (let i = 0; i < response.length; i++) {
          var dataSplit = response[i].split(",");
          var internDate = new Date("1980-01-01").setSeconds(dataSplit[0]);
          var offset = 1000 * (60 * -330);
          if (Number(dataSplit[1]) && Number(dataSplit[2]) && Number(dataSplit[3]) && Number(dataSplit[4])) {
            const time = (0,_assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_8__["default"])(new Date(internDate + offset)).valueOf();
            mappedData.push({
              time,
              open: dataSplit[1] / priceDivisor,
              close: dataSplit[4] / priceDivisor,
              low: dataSplit[3] / priceDivisor,
              high: dataSplit[2] / priceDivisor,
              /*   amount: formData[i].ClosePrice */
              /* count: formData[i].LastTradedQty */
              volume: dataSplit[5] ? Number(dataSplit[5]) : 0
            });
          }
        }
        /*
                this.zone.run(() =>
                  this.patchedResponseData = mappedData); */
        if (this.responseData && response.length) {
          let data = isFirst ? mappedData : this.sort_unique([...mappedData, ...this.responseData]);
          this.zone.run(() => this.patchedResponseData = data);
        } else {
          this.zone.run(() => this.patchedResponseData = mappedData);
        }
        this.shared.isServiceHit = false;
        this.cdRef.markForCheck();
        /*   this.clearIntervalData();
          this.getSocketData();
          this.listenBroadcast();
          let isFirstLogin: any = this.shared.params ? this.shared.params.successLogin : false;
          let watchListData = this.utils.getWatchListCache(1); */
        /*         setTimeout(() => {
                  if (isFirstLogin && (!watchListData || !watchListData.length)) {
                    this.fetchDefaultWatchlist();
                  } else {
                    this.fetchWatchList(-1);
                  }
                }, 100) */
        //this.filterConfig.selected = this.utils.getPreferences('Watchlist') || this.filterConfig.selected;
      } else {
        this.patchedResponseData = [];
        this.shared.isServiceHit = false;
      }
      return this.patchedResponseData;
    }, err => {
      this.patchedResponseData = [];
      this.shared.isServiceHit = false;
      this.isError = true;
      return this.patchedResponseData;
    });
  }
  /**
  * Fetch Chart Data (added by reshmaC on 04/02/2021)
  * @param isInit is to Clear Previous Data
  * @param isCalledPrevData flag to change startTime and Todate on scroll of chart
  */
  getChartHistory(isInit, isCalledPrevData) {
    //  let diff = (this.resolution >= 120) ? 6 : ((this.resolution >= 60) ? 3 : 2);
    //(new Date(new moment().subtract(1, 'year').toDate()).valueOf() / 1000).toFixed(0)
    //   let lastYearDate = ((new Date(new moment().subtract(diff, 'months')).valueOf() - new Date("1980-01-01").valueOf()) / 1000).toFixed(0)
    let lastYearDate = ((new Date(new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_8__["default"]().subtract(3, 'months')).valueOf() - new Date("1980-01-01").valueOf()) / 1000).toFixed(0);
    let startTime = isCalledPrevData ? (new Date(new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_8__["default"](this.request.FromDate * 1000).subtract(5, 'days').toDate()).valueOf() / 1000).toFixed(0) : this.isDailyDuration() ? ((new Date(new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_8__["default"]().subtract(5, 'd')).valueOf() - new Date("1980-01-01").valueOf()) / 1000).toFixed(0) : 0;
    let toDate = ((new Date(new Date()).valueOf() - new Date("1980-01-01").valueOf()) / 1000).toFixed(0);
    this.request = {
      "UserId": this.utils.getUserId() || 'guest',
      "SessionId": this.utils.getSessionId() || '',
      "SegmentId": Number(this.config.SegmentId),
      "Token": Number(this.config.Token),
      "FromDate": lastYearDate,
      "ToDate": toDate,
      "Interval": this.chart.interval
    };
    let datapoints = [];
    this.toolsService.getChartHistory(this.request).subscribe(data => {
      if (data.Status === "Success" && data.Response && data.Response.lstChartHistory && data.Response.lstChartHistory.length) {
        this.isError = false;
        let response = data.Response.lstChartHistory || [];
        let priceDivisor = this.utils.getSegmentDetail(this.config.SegmentId, 'PriceDivisor') || 100;
        let formData = JSON.parse(JSON.stringify(response));
        let mappedData = [];
        for (let i = 0; i < response.length; i++) {
          var dataSplit = response[i].split(",");
          var internDate = new Date("1980-01-01").setSeconds(dataSplit[0]);
          var offset = 1000 * (60 * -330);
          if (Number(dataSplit[1]) && Number(dataSplit[2]) && Number(dataSplit[3]) && Number(dataSplit[4])) {
            const time = (0,_assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_8__["default"])(new Date(internDate + offset)).valueOf();
            mappedData.push({
              time,
              open: dataSplit[1] / priceDivisor,
              close: dataSplit[4] / priceDivisor,
              low: dataSplit[3] / priceDivisor,
              high: dataSplit[2] / priceDivisor,
              /*   amount: formData[i].ClosePrice */
              /* count: formData[i].LastTradedQty */
              volume: dataSplit[5] ? Number(dataSplit[5]) : 0
            });
            datapoints.push({
              "DT": new Date(internDate + offset),
              "Open": dataSplit[1] / priceDivisor,
              "High": dataSplit[2] / priceDivisor,
              "Low": dataSplit[3] / priceDivisor,
              "Close": dataSplit[4] / priceDivisor,
              "Volume": dataSplit[5],
              "OI": dataSplit[6]
            });
          }
        }
        this.responseData = [];
        this.zone.run(() => this.responseData = mappedData);
        this.cdRef.markForCheck();
        this.clearIntervalData();
        this.getSocketData();
        this.listenBroadcast();
        let isFirstLogin = this.shared.params ? this.shared.params.successLogin : false;
        let watchListData = this.utils.getWatchListCache(1);
        setTimeout(() => {
          if (isFirstLogin && (!watchListData || !watchListData.length)) {
            this.fetchDefaultWatchlist();
          } else {
            this.fetchWatchList(-1);
          }
        }, 100);
        this.filterConfig.selected = this.utils.getPreferences('Watchlist') || this.filterConfig.selected;
      }
    }, err => {
      this.responseData = [];
      this.isError = true;
    });
  }
  /**
   * Open Search in Case of No Orderbook Entries
   */
  openSearch() {
    if (this.shared.routeConfig) this.shared.routeConfig.hideHeader = false;
    setTimeout(() => {
      this.utils.broadcast('openSearch');
      //this.shared.setHideHeader(false);
      this.shared.isClassVisible = false;
    }, 200);
  }
  /**
   * Broadcaster Listener for 'addRemoveWatchList','changeWatchlist', 'internetConnectionStatus' and 'checkUnsubscription'
   */
  listenBroadcast() {
    this.broadcastSubscription = this.socket.broadcaster.on('addRemoveWatchList').subscribe(data => {
      if (data) {
        if (!data.action) this.addToWatchlist(data.SegmentId, data.Token, data.ProfileId);else this.deleteFromWatchlist(this.watchListData[data.ProfileId - 1][data.scripIndex], data.scripIndex, data.ProfileId);
      }
    });
    this.changeWatchListSubscription = this.socket.broadcaster.on('changeWatchlist').subscribe(data => {
      if (data >= 1 && data <= 5) {
        this.getWatchListPage(data);
      }
    });
    this.multiTouchlineSubscription = this.socket.broadcaster.on('checkUnsubscription').subscribe(data => {
      if (data.source != 'watchlist' && data.data && data.data.length > 0 && this.watchListData[this.activeWatchlist - 1].length > 0) {
        let tokenList = [];
        let dataTokens = this.utils.generateTokens(data.data).split(',');
        let watchTokens = this.utils.generateTokens(this.watchListData[this.activeWatchlist - 1]).split(',');
        let commonToken = watchTokens.filter(token => {
          return dataTokens.indexOf(token) > -1;
        });
        commonToken.forEach(element => {
          let tokenSegment = element.split('@');
          tokenList.push({
            'SegmentId': tokenSegment[0],
            'Token': tokenSegment[1]
          });
        });
        this.utils.subscribeMultitouchline(tokenList);
      }
    });
    this.socketStatusSubscription = this.socket.broadcaster.on('internetConnectionStatus').subscribe(isConnected => {
      this.utils.subscribeMultitouchline(this.watchListData[this.activeWatchlist]);
    });
    this.walkThroughSubscription = this.socket.broadcaster.on('watchlistWalkthrgh').subscribe(res => {
      let string = res['id'];
      if ((res['id'] == "watchEditName" || res['id'] == "watchListHover1" || res['id'] == 'watchListRearrange') && this.watchListData[this.activeWatchlist - 1].length == 0) {
        this.shared.showWalkThrough['count'] = this.shared.showWalkThrough['count'] + 3;
        let feature = this.shared.showWalkThrough['feature'];
        this.shared.showWalkThrough.noWatchlistData = true;
        this.shared.showWalkThrough['presentObj'] = this.utils.walkthrgConfig[feature][this.shared.showWalkThrough['count']];
        this.shared.showWalkThrough.noWatchlistData = true;
        this.socket.broadcaster.broadcast(this.shared.showWalkThrough['presentObj']['eventName'], this.shared.showWalkThrough['presentObj']);
      } else {
        string = (res['id'] == "watchListHover1" || res['id'] == 'watchListRearrange') && this.watchListData[this.activeWatchlist - 1].length == 1 ? 'watchListHover0' : res['id'];
        let viewName = document.getElementById(string);
        /* if (res['id'] == "watchEditName" && document.getElementById('editbtnWatchlist')) {
          document.getElementById('editbtnWatchlist').click();
        } else if (res['id'] == "watchListHover1" && document.getElementById(string)) {
          document.getElementById(string).classList.add('active');
        } */
        let coordinate = viewName.getBoundingClientRect();
        this.shared.showWalkThrough['left'] = coordinate['left'] - 120;
        this.shared.showWalkThrough['top'] = coordinate['top'];
        this.shared.showWalkThrough.noWatchlistData = false;
      }
      this.renderer.setStyle(document.body, 'overflow', 'hidden');
    });
  }
  /**
  * Clear the Interval Subscription
  */
  clearIntervalData() {
    if (this.simulationSubscription) this.simulationSubscription.unsubscribe();
    if (this.socketSubscription) this.socketSubscription.unsubscribe();
  }
  /**
   * Call back for Edit Click on Watchlist name
   */
  editWatchlistName() {
    this.watchlistName = this.watchListDataName[this.activeWatchlist] && this.watchListDataName[this.activeWatchlist] != this.activeWatchlist ? this.watchListDataName[this.activeWatchlist] : 'Watchlist ' + this.activeWatchlist;
    this.isEditWatch = true;
    this.googleAnalyticsEventsService.watchListNameEditButton(this.watchlistName);
    setTimeout(() => {
      if (document.getElementById('WatchListNameInput')) document.getElementById('WatchListNameInput').focus();
    }, 300);
  }
  // watchlistClik(){
  //   alert("hello")
  // }
  /**
   * Listener for Key press event for watchlist name
   * @param e Key press event
   */
  keypressWatchlistName(e) {
    let event = e || window.event;
    let key = event.keyCode || event.charCode;
    if (event && key != 13) {
      return String.fromCharCode(key).match(/^[a-zA-Z0-9\s]+$/g) != null;
    } else {
      return true;
    }
  }
  /**
   * Save watchlist Name If clicked positive Button
   * @param isForSave True if positive button is clicked
   */
  saveWatchListName(isForSave) {
    if (!isForSave) {
      this.watchlistName = null;
      this.isEditWatch = false;
    } else if (isForSave && this.watchlistName && this.watchlistName.trim().length >= 2) {
      this.rearrangeWatchList(this.watchlistName);
    } else {
      alert('Watchlist name should be of minimum 2 alphanumeric characters');
    }
    isForSave ? this.googleAnalyticsEventsService.watchListNameSaveCancelButton(this.watchlistName, 'watchlist Save button clicked') : this.googleAnalyticsEventsService.watchListNameSaveCancelButton('this.watchlistName', 'watchlist Cancel button clicked');
  }
  /**
   * Get Name of Watchlist for given profile ID
   * @param profileId Profile ID for watchlist
   */
  getWatchListName(profileId) {
    profileId = profileId ? profileId : this.activeWatchlist;
    return this.watchListDataName[profileId] || profileId;
  }
  /**
   * Fetch DefaultWatchlist Data in case of First Time Login
   */
  fetchDefaultWatchlist() {
    let request = {
      "UserId": this.utils.getUserId(),
      "SessionId": this.utils.getSessionId() || '',
      "UserCode": this.utils.get('userCode'),
      "GroupId": this.utils.get('groupId'),
      "ProfileId": "1",
      'DefaultProfileIdForData': 1,
      'nGraphCount': 0
    };
    this.rest.getDefaultWatchlist(request).subscribe(data => {
      if (data.Status === "Success" && data.Response) {
        let response = data.Response.lstProfileData;
        let keys = Object.keys(response);
        keys.forEach(element => {
          let watchData = response[element].lstProfileScrip;
          let watchKeys = Object.keys(watchData);
          this.watchListDataName[element] = response[element]['ProfileName'];
          let watchDataList = [];
          watchKeys.forEach(scrip => {
            if (watchData[scrip].lMutilpleTouchlineData) {
              watchData[scrip].lExchangeScrip.profileId = Number(element);
              watchData[scrip].lExchangeScrip.LTP = Number(watchData[scrip].lMutilpleTouchlineData.LTP) == 0 ? (watchData[scrip].lMutilpleTouchlineData.PrevClose || 0) / watchData[scrip].lMutilpleTouchlineData.PriceDivisor : watchData[scrip].lMutilpleTouchlineData.LTP / watchData[scrip].lMutilpleTouchlineData.PriceDivisor; // if LTP == 0 then show prevClose (10/05/2021)
              watchData[scrip].lExchangeScrip.difference = watchData[scrip].lMutilpleTouchlineData.Change / watchData[scrip].lMutilpleTouchlineData.PriceDivisor || 0;
              watchData[scrip].lExchangeScrip.class = watchData[scrip].lExchangeScrip.difference > 0 ? "up" : watchData[scrip].lExchangeScrip.difference < 0 ? "down" : "";
              watchData[scrip].lExchangeScrip.PrevClose = (watchData[scrip].lMutilpleTouchlineData.PrevClose || 0) / watchData[scrip].lMutilpleTouchlineData.PriceDivisor; //(watchData[scrip].lExchangeScrip.LTP - watchData[scrip].lExchangeScrip.difference)
              watchData[scrip].lExchangeScrip.prevChange = 0; //watchData[scrip].lExchangeScrip.difference;
              watchData[scrip].lExchangeScrip.percent = watchData[scrip].lExchangeScrip.difference * 100 / watchData[scrip].lExchangeScrip.PrevClose || 0;
              watchData[scrip].lExchangeScrip.difference = Math.abs(watchData[scrip].lExchangeScrip.difference);
              watchData[scrip].lExchangeScrip.percent = Math.abs(watchData[scrip].lExchangeScrip.percent);
              watchData[scrip].lExchangeScrip.LTT = this.utils.changeCurrentDateFormat(watchData[scrip].lMutilpleTouchlineData.LTT, 'DD-MM-YYYY HH:mm:ss', 'DD-MM-YYYY HH:mm:ss');
              watchData[scrip].lExchangeScrip.LUT = this.utils.changeCurrentDateFormat(watchData[scrip].lMutilpleTouchlineData.LUT, 'DD-MM-YYYY HH:mm:ss', 'DD-MM-YYYY HH:mm:ss');
              watchData[scrip].lExchangeScrip.BBP = Number(watchData[scrip].lMutilpleTouchlineData.BBP / watchData[scrip].lMutilpleTouchlineData.PriceDivisor) || watchData[scrip].lExchangeScrip.LTP;
              watchData[scrip].lExchangeScrip.BBQ = Number(watchData[scrip].lMutilpleTouchlineData.BBQ) || 0;
              watchData[scrip].lExchangeScrip.BSP = Number(watchData[scrip].lMutilpleTouchlineData.BSP / watchData[scrip].lMutilpleTouchlineData.PriceDivisor) || watchData[scrip].lExchangeScrip.LTP;
              watchData[scrip].lExchangeScrip.BSQ = Number(watchData[scrip].lMutilpleTouchlineData.BSQ) || 0;
              watchData[scrip].lExchangeScrip.ChangePer = watchData[scrip].lExchangeScrip.percent;
            }
            watchData[scrip].lExchangeScrip.isTradingAllowed = this.utils.isSegmentAllowed(watchData[scrip].lExchangeScrip.SegmentId);
            let isFNOSegment = watchData[scrip].lExchangeScrip.SegmentId == 2 || watchData[scrip].lExchangeScrip.SegmentId == 4 || watchData[scrip].lExchangeScrip.SegmentId == 5 || watchData[scrip].lExchangeScrip.SegmentId == 7 || watchData[scrip].lExchangeScrip.SegmentId == 13 || watchData[scrip].lExchangeScrip.SegmentId == 38;
            watchData[scrip].lExchangeScrip.SecName = isFNOSegment && watchData[scrip].lExchangeScrip.OptionType == 'XX' ? watchData[scrip].lExchangeScrip.SecName + ' FUT' : watchData[scrip].lExchangeScrip.SecName;
            watchData[scrip].lExchangeScrip.secDesc = watchData[scrip].lExchangeScrip.SegmentId == 1 || watchData[scrip].lExchangeScrip.SegmentId == 3 ? watchData[scrip].lExchangeScrip.SecDesc : watchData[scrip].lExchangeScrip.SecName;
            watchData[scrip].lExchangeScrip.strikePrice = watchData[scrip].lExchangeScrip.StrikePrice / watchData[scrip].lExchangeScrip.PriceDivisor;
            watchDataList.push(watchData[scrip].lExchangeScrip);
          });
          this.watchListData[0] = watchDataList;
        });
        this.utils.updateWatchListCache(this.watchListData);
        this.utils.updateWatchListName(this.watchListDataName);
        this.utils.subscribeMultitouchline(this.watchListData[this.activeWatchlist - 1]);
        this.rearrangeWatchList();
      }
      //  else if (this.utils.isSessionExpired(data.Reason)) {
      //   if(this.shared.isSSO){
      //     this.utils.sessionExpireHandling()
      //     return
      //   }
      //   this.utils.error('Session Expired', "Please Login Again");
      //   this.utils.postFeatureCount();
      //   this.utils.clearLoginDetails();
      //   this.shared.userId = null;
      //   this.route.navigate(['auth/login']);
      // }
    }, err => {});
  }
  /**
   * Fetch Watch list data for given profile ID from Localstorage or API
   * @param profileId profile ID or -1 for All
   * @param notCacheFirst Whether to check LocalStorage First or not
   */
  fetchWatchList(profileId, notCacheFirst) {
    profileId = profileId ? profileId : -1;
    let watchListData = this.utils.getWatchListCache(profileId);
    if (!notCacheFirst && watchListData && watchListData.length) {
      this.watchListDataName = this.utils.getWatchListName(-1);
      this.activeWatchlist = profileId == -1 ? 1 : profileId;
      if (profileId == -1) {
        this.watchListData = watchListData;
      } else {
        this.watchListData[this.activeWatchlist - 1] = watchListData;
      }
      this.utils.subscribeMultitouchline(this.watchListData[this.activeWatchlist - 1]);
    } else {
      let request = {
        "UserId": this.utils.getUserId(),
        "SessionId": this.utils.getSessionId() || '',
        "UserCode": this.utils.get('userCode'),
        "GroupId": this.utils.get('groupId'),
        "ProfileId": profileId.toString(),
        'DefaultProfileIdForData': profileId == -1 ? 1 : profileId,
        'nGraphCount': 0
      };
      this.serviceHit = true;
      this.rest.getWatchListData(request).subscribe(data => {
        if (data.Status === "Success" && data.Response) {
          let response = data.Response.lstProfileData;
          let keys = Object.keys(response);
          keys.forEach(element => {
            let watchData = response[element].lstProfileScrip;
            let watchKeys = Object.keys(watchData);
            this.watchListDataName[element] = response[element]['ProfileName'];
            let watchDataList = [];
            watchKeys.forEach(scrip => {
              if (watchData[scrip].lMutilpleTouchlineData) {
                watchData[scrip].lExchangeScrip.profileId = Number(element);
                watchData[scrip].lExchangeScrip.LTP = Number(watchData[scrip].lMutilpleTouchlineData.LTP) == 0 ? (watchData[scrip].lMutilpleTouchlineData.PrevClose || 0) / watchData[scrip].lMutilpleTouchlineData.PriceDivisor : watchData[scrip].lMutilpleTouchlineData.LTP / watchData[scrip].lMutilpleTouchlineData.PriceDivisor; // if LTP == 0 then show prevClose (10/05/2021)
                watchData[scrip].lExchangeScrip.difference = watchData[scrip].lMutilpleTouchlineData.Change / watchData[scrip].lMutilpleTouchlineData.PriceDivisor || 0;
                watchData[scrip].lExchangeScrip.class = watchData[scrip].lExchangeScrip.difference > 0 ? "up" : watchData[scrip].lExchangeScrip.difference < 0 ? "down" : "";
                watchData[scrip].lExchangeScrip.PrevClose = (watchData[scrip].lMutilpleTouchlineData.PrevClose || 0) / watchData[scrip].lMutilpleTouchlineData.PriceDivisor; //(watchData[scrip].lExchangeScrip.LTP - watchData[scrip].lExchangeScrip.difference)
                watchData[scrip].lExchangeScrip.prevChange = 0; //watchData[scrip].lExchangeScrip.difference;
                watchData[scrip].lExchangeScrip.percent = watchData[scrip].lExchangeScrip.difference * 100 / watchData[scrip].lExchangeScrip.PrevClose || 0;
                watchData[scrip].lExchangeScrip.difference = Math.abs(watchData[scrip].lExchangeScrip.difference);
                watchData[scrip].lExchangeScrip.percent = Math.abs(watchData[scrip].lExchangeScrip.percent);
                watchData[scrip].lExchangeScrip.LTT = this.utils.changeCurrentDateFormat(watchData[scrip].lMutilpleTouchlineData.LTT, 'DD-MM-YYYY HH:mm:ss', 'DD-MM-YYYY HH:mm:ss');
                watchData[scrip].lExchangeScrip.LUT = this.utils.changeCurrentDateFormat(watchData[scrip].lMutilpleTouchlineData.LUT, 'DD-MM-YYYY HH:mm:ss', 'DD-MM-YYYY HH:mm:ss');
                watchData[scrip].lExchangeScrip.BBP = Number(watchData[scrip].lMutilpleTouchlineData.BBP / watchData[scrip].lMutilpleTouchlineData.PriceDivisor) || watchData[scrip].lExchangeScrip.LTP;
                watchData[scrip].lExchangeScrip.BBQ = Number(watchData[scrip].lMutilpleTouchlineData.BBQ) || 0;
                watchData[scrip].lExchangeScrip.BSP = Number(watchData[scrip].lMutilpleTouchlineData.BSP / watchData[scrip].lMutilpleTouchlineData.PriceDivisor) || watchData[scrip].lExchangeScrip.LTP;
                watchData[scrip].lExchangeScrip.BSQ = Number(watchData[scrip].lMutilpleTouchlineData.BSQ) || 0;
                watchData[scrip].lExchangeScrip.ChangePer = watchData[scrip].lExchangeScrip.percent;
              }
              watchData[scrip].lExchangeScrip.isTradingAllowed = this.utils.isSegmentAllowed(watchData[scrip].lExchangeScrip.SegmentId);
              let isFNOSegment = watchData[scrip].lExchangeScrip.SegmentId == 2 || watchData[scrip].lExchangeScrip.SegmentId == 4 || watchData[scrip].lExchangeScrip.SegmentId == 5 || watchData[scrip].lExchangeScrip.SegmentId == 7 || watchData[scrip].lExchangeScrip.SegmentId == 13 || watchData[scrip].lExchangeScrip.SegmentId == 38;
              watchData[scrip].lExchangeScrip.SecName = isFNOSegment && watchData[scrip].lExchangeScrip.OptionType == 'XX' ? watchData[scrip].lExchangeScrip.SecName + ' FUT' : watchData[scrip].lExchangeScrip.SecName;
              // watchData[scrip].lExchangeScrip.secDesc = (watchData[scrip].lExchangeScrip.SegmentId==1 || watchData[scrip].lExchangeScrip.SegmentId==3)?watchData[scrip].lExchangeScrip.SecDesc: watchData[scrip].lExchangeScrip.SecName;
              watchData[scrip].lExchangeScrip.strikePrice = watchData[scrip].lExchangeScrip.StrikePrice / watchData[scrip].lExchangeScrip.PriceDivisor;
              watchDataList.push(watchData[scrip].lExchangeScrip);
            });
            this.watchListData[Number(element) - 1] = watchDataList;
          });
          this.utils.updateWatchListCache(this.watchListData);
          this.utils.updateWatchListName(this.watchListDataName);
          this.utils.subscribeMultitouchline(profileId == -1 || profileId == this.activeWatchlist ? this.watchListData[this.activeWatchlist - 1] : []);
          if (profileId !== -1 && !notCacheFirst) this.activeWatchlist = profileId;
          // }
          // else if (this.utils.isSessionExpired(data.Reason)) {
          //   if(this.shared.isSSO){
          //     this.utils.sessionExpireHandling()
          //     return
          //   }
          //   this.utils.error('Session Expired', "Please Login Again");
          //   this.utils.postFeatureCount();
          //   this.utils.clearLoginDetails();
          //   this.shared.userId = null;
          //   this.route.navigate(['auth/login']);
        } else {
          if (profileId === -1) {
            this.watchListData = [[], [], [], [], []];
          } else {
            this.activeWatchlist = profileId;
          }
          this.utils.updateWatchListCache(this.watchListData);
          this.utils.updateWatchListName(this.watchListDataName);
        }
        this.serviceHit = false;
      }, err => {
        this.serviceHit = false;
      });
    }
  }
  /**
   * Goto Given profile ID of Watchlist
   * @param profileId Profile ID
   */
  getWatchListPage(profileId) {
    this.googleAnalyticsEventsService.watchListPagination(profileId);
    if (this.activeWatchlist !== profileId) {
      this.utils.unSubscribeMultitouchline(this.watchListData[this.activeWatchlist - 1], 'watchlist');
      this.activeWatchlist = profileId;
      this.fetchWatchList(profileId);
      this.isEditWatch = false;
      this.watchlistName = null;
    }
    document.activeElement['blur']();
  }
  /**
   * Listen to Broadcast Socket Packets
   */
  getSocketResponse() {
    if (!this.watchlistSubscription) {
      this.watchlistSubscription = this.socket.broadcaster.on('watchlist').subscribe(data => {
        let reference = this.watchListData[this.activeWatchlist - 1].filter(obj => {
          return obj.SegmentId == data[0][1] && obj.Token == data[0][7];
        });
        if (reference.length > 0 && this.utils.isUpdatedData(reference[0], data[0])) {
          reference[0] = this.changeColor(data[0], reference);
          // setTimeout((scrip) => {
          //   if (scrip)
          //     scrip.prevChange = 0;
          // }, 500, reference[0]);
        }
      });
    }
  }
  /**
   * Event Listener for Drop Event
   * @param dropEvent event asscoiated Data when drop event is fired.
   */
  drop(dropEvent) {
    (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_11__.moveItemInArray)(this.watchListData[this.activeWatchlist - 1], dropEvent.previousIndex, dropEvent.currentIndex);
    this.applySort(2);
    this.rearrangeWatchList();
  }
  /**
   * Rearrange Watch list for given Profile Name or Edit warchlist Name
   * @param profileName Name of Watchlist
   */
  rearrangeWatchList(profileName) {
    let request = {
      "UserId": this.utils.getUserId(),
      "SessionId": this.utils.getSessionId() || '',
      "UserCode": this.utils.get('userCode'),
      "GroupId": this.utils.get('groupId'),
      "ProfileId": this.activeWatchlist,
      "ProfileName": profileName ? profileName : this.getWatchListName(this.activeWatchlist) + '',
      "IsDefault": "1",
      "NoOfScrips": this.watchListData[this.activeWatchlist - 1].length,
      "MultipleTokens": this.utils.generateTokens(this.watchListData[this.activeWatchlist - 1])
    };
    this.rest.addUpdateWatchList(request).subscribe(data => {
      if (data.Status === "Success" && data.Response) {
        this.utils.updateWatchListCache(this.watchListData);
        this.watchListDataName[this.activeWatchlist] = profileName ? profileName : this.watchListDataName[this.activeWatchlist];
        this.utils.updateWatchListName(this.watchListDataName);
        this.utils.broadcast('watchlistRenamed', this.watchListDataName);
        this.isEditWatch = false;
        // }
        //  else if (this.utils.isSessionExpired(data.Reason)) {
        //   if(this.shared.isSSO){
        //     this.utils.sessionExpireHandling()
        //     return
        //   }
        //   this.utils.error('Session Expired', "Please Login Again");
        //   this.utils.postFeatureCount();
        //   this.utils.clearLoginDetails();
        //   this.shared.userId = null;
        //   this.route.navigate(['auth/login']);
      } else {
        this.utils.error('Error', data.Reason);
      }
    }, err => {});
  }
  /**
   * Hold for 3 sec before deleting scrip from watchlist
   * @param watchlist Scrip to be removed
   * @param index index in Profile ID
   * @param profileId Profile ID of watchlist
   */
  deleteFromWatchListConfirm(watchlist, index, profileId) {
    watchlist.isAboutToDelete = true;
    this.googleAnalyticsEventsService.deleteFromWatchlistItself(watchlist);
    setTimeout(() => {
      if (watchlist.isAboutToDelete) {
        this.deleteFromWatchlist(watchlist, index, profileId);
        this.googleAnalyticsEventsService.deleteFromWatchlist(watchlist);
      }
    }, 3000);
  }
  /**
   * Delete scrip form Watchlist
   * @param watchlist Scrip to be removed
   * @param index index in Profile ID
   * @param profileId Profile ID of watchlist
   */
  deleteFromWatchlist(watchlist, index, profileId) {
    watchlist = watchlist || {};
    let watchListData = this.watchListData[profileId - 1].filter(obj => {
      return obj.Token != watchlist.Token;
    });
    if (watchListData.length == 0) {
      let request = {
        "UserId": this.utils.getUserId(),
        "SessionId": this.utils.getSessionId() || '',
        "UserCode": this.utils.get('userCode'),
        "GroupId": this.utils.get('groupId'),
        "ProfileId": profileId,
        "ProfileName": profileId,
        "IsDefault": "1",
        "NoOfScrips": watchListData.length,
        "MultipleTokens": watchlist.SegmentId + '@' + watchlist.Token
      };
      this.removeFromWatchList(request, watchlist, index, profileId);
    } else if (watchListData.length > 0) {
      this.addUpdateWatchList(watchListData, profileId, index);
    }
  }
  /**
   * Remove Watchlist
   * @param request Data to be posted to HTTP Request
   * @param watchlist Scrip to be removed
   * @param index index in Profile ID
   * @param profileId Profile ID of watchlist
   */
  removeFromWatchList(request, watchlist, index, profileId) {
    profileId = profileId ? Number(profileId) : this.activeWatchlist;
    this.rest.deleteWatchlist(request).subscribe(data => {
      if (data.Status === "Success" && data.Response) {
        watchlist = watchlist || {};
        this.watchListData[Number(profileId) - 1] = [];
        this.utils.updateWatchListCache(this.watchListData);
        this.utils.success('Success', 'Scrip Removed Successfully from Watchlist ' + profileId);
        this.utils.broadcast('ScripRemoved', {
          'SegmentId': watchlist.SegmentId,
          'Token': watchlist.Token
        });
        this.utils.unSubscribeMultitouchline([{
          'SegmentId': watchlist.SegmentId,
          'Token': watchlist.Token
        }], 'watchlist');
        this.watchListDataName[profileId] = profileId;
        this.utils.updateWatchListName(this.watchListDataName);
        this.utils.broadcast('watchlistRenamed', this.watchListDataName);
        // } 
        // else if (this.utils.isSessionExpired(data.Reason)) {
        //   if(this.shared.isSSO){
        //     this.utils.sessionExpireHandling()
        //     return
        //   }
        //   this.utils.error('Session Expired', "Please Login Again");
        //   this.utils.postFeatureCount();
        //   this.utils.clearLoginDetails();
        //   this.shared.userId = null;
        //   this.route.navigate(['auth/login']);
      } else {
        this.utils.error('Error', data.Reason);
        this.watchListData[Number(profileId) - 1][index].isAboutToDelete = false;
        this.utils.broadcast('ScripRemoved', {});
      }
    }, err => {});
  }
  /**
   * Add or Update Watchlist Data
   * @param watchListData Data of Watchlist for given profile ID
   * @param profileId profile ID
   * @param index index at which scrip is be added or Update
   */
  addUpdateWatchList(watchListData, profileId, index) {
    let request = {
      "UserId": this.utils.getUserId(),
      "SessionId": this.utils.getSessionId() || '',
      "UserCode": this.utils.get('userCode'),
      "GroupId": this.utils.get('groupId'),
      "ProfileId": profileId,
      "ProfileName": this.getWatchListName(profileId),
      "IsDefault": "1",
      "NoOfScrips": watchListData.length,
      "MultipleTokens": this.utils.generateTokens(watchListData)
    };
    this.rest.addUpdateWatchList(request).subscribe(data => {
      if (data.Status === "Success" && data.Response) {
        let watchData = this.watchListData[profileId - 1][index] || {};
        this.watchListData[profileId - 1] = watchListData;
        this.utils.updateWatchListCache(this.watchListData);
        this.utils.success('Success', 'Scrip Removed Successfully from Watchlist ' + this.getWatchListName(profileId));
        this.utils.broadcast('ScripRemoved', {
          'SegmentId': watchData.SegmentId,
          'Token': watchData.Token
        });
        this.utils.unSubscribeMultitouchline([{
          'SegmentId': watchData.SegmentId,
          'Token': watchData.Token
        }], 'watchlist');
        // } else if (this.utils.isSessionExpired(data.Reason)) {
        //   if(this.shared.isSSO){
        //     this.utils.sessionExpireHandling()
        //     return
        //   }
        //   this.utils.error('Session Expired', "Please Login Again");
        //   this.utils.postFeatureCount();
        //   this.utils.clearLoginDetails();
        //   this.shared.userId = null;
        //   this.route.navigate(['auth/login']);
      } else {
        this.watchListData[profileId - 1][index].isAboutToDelete = false;
        this.utils.error('Error', data.Reason);
        this.utils.broadcast('ScripRemoved', {});
      }
    }, err => {});
  }
  /**
   * Update data from feed recieved from socket
   * @param data Object Data from Socket Response Packet
   * @param reference Reference of Object to be updated
   */
  changeColor(data, reference) {
    let referenceObj = reference[0];
    let priceDivisor = Number(data[399]);
    referenceObj.prevChange = (Number(data[8]) / priceDivisor || 0) - (referenceObj.LTP || 0);
    referenceObj.LTP = Number(data[8]) == 0 ? referenceObj.PrevClose || data[76] / priceDivisor : Number(data[8]) / priceDivisor; // if LTP == 0 then show prevClose (10/05/2021)
    referenceObj.PrevClose = referenceObj.PrevClose || data[76] / priceDivisor;
    referenceObj.volume = Number(data[79]);
    referenceObj.class = Number(referenceObj.LTP) < Number(referenceObj.PrevClose) ? "down" : Number(referenceObj.LTP) > Number(referenceObj.PrevClose) ? "up" : "";
    referenceObj.difference = Math.abs(referenceObj.LTP - Number(referenceObj.PrevClose));
    referenceObj.difference = isNaN(referenceObj.difference) ? 0.00 : referenceObj.difference;
    referenceObj.percent = referenceObj.difference * 100 / Number(referenceObj.PrevClose);
    referenceObj.percent = isNaN(referenceObj.percent) ? 0.00 : referenceObj.percent;
    referenceObj.LTT = this.utils.changeCurrentDateFormat(data[73], 'YYYY-MM-DD HHmmss', 'DD-MM-YYYY HH:mm:ss');
    referenceObj.LUT = this.utils.changeCurrentDateFormat(data[74], 'YYYY-MM-DD HHmmss', 'DD-MM-YYYY HH:mm:ss');
    referenceObj.BBP = Number(data[3] / priceDivisor) || referenceObj.LTP;
    referenceObj.BBQ = Number(data[2]) || 0;
    referenceObj.BSP = Number(data[6] / priceDivisor) || referenceObj.LTP;
    referenceObj.BSQ = Number(data[5]) || 0;
    referenceObj.ChangePer = referenceObj.percent;
    return referenceObj;
  }
  /**
   * Life Cycle Hook for destruction
   */
  // ngOnDestroy(): void {
  //   if (this.watchlistSubscription) this.watchlistSubscription.unsubscribe();
  //   if (this.broadcastSubscription) this.broadcastSubscription.unsubscribe();
  //   if (this.changeWatchListSubscription) this.changeWatchListSubscription.unsubscribe();
  //   if (this.multiTouchlineSubscription) this.multiTouchlineSubscription.unsubscribe();
  //   if (this.socketStatusSubscription) this.socketStatusSubscription.unsubscribe();
  //   if (this.walkThroughSubscription) this.walkThroughSubscription.unsubscribe();
  //   this.utils.unSubscribeMultitouchline(this.watchListData[this.activeWatchlist - 1], 'watchlist');
  // }
  /**
   * Buy Item call back after click of Action Button
   * @param watchlist Scrip to be used for Buy
   */
  buyItem(watchlist) {
    this.googleAnalyticsEventsService.buyClickFromWatchlist(watchlist);
    this.shared.isClassVisible = false;
    this.utils.broadcast('openBuySellDrawer', {
      'scrip': watchlist,
      'action': 1,
      isToUnSubscribe: 'watchlist'
    });
  }
  /**
   * Sell Item call back after click of Action Button
   * @param watchlist  Scrip to be used for Sell
   */
  sellItem(watchlist) {
    this.googleAnalyticsEventsService.sellClickFromWatchlist(watchlist);
    this.shared.isClassVisible = false;
    this.utils.broadcast('openBuySellDrawer', {
      'scrip': watchlist,
      'action': 2,
      isToUnSubscribe: 'watchlist'
    });
  }
  addPriceAlert(watchlist) {
    this.googleAnalyticsEventsService.addPriceAlertFromWatchlist(watchlist);
    let request = {
      config: null,
      requestType: 1,
      data: watchlist
    };
    this.shared.isClassVisible = false;
    this.utils.broadcast('openPriceAlert', request);
  }
  openTechnicalChart(watchlist) {
    this.responseData = [];
    this.patchedResponseData = [];
    this.config.symbol = watchlist.Symbol;
    this.config.SegmentId = watchlist.SegmentId;
    this.config.Token = watchlist.Token;
    if (this.config.SegmentId && this.config.Token) {
      localStorage.setItem("prevPath", window.location.pathname);
      let routeUrl = 'tv/trading-view-charts' + '/' + this.config.symbol + '/' + this.config.SegmentId + '/' + this.config.Token;
      this.location.replaceState(routeUrl);
      this.utils.unSubscribeMultitouchline([{
        'SegmentId': this.config.SegmentId,
        'Token': this.config.Token
      }], 'watchlist');
      setTimeout(() => {
        this.utils.subscribeMultitouchline([{
          SegmentId: this.config.SegmentId,
          Token: this.config.Token
        }]);
      }, 1000);
      this.getChartHistory(true);
    }
    /*  let companyPath = watchlist.SecDesc.toLowerCase().replace(/[\s|\&|\%]/g, '').trim();
     let urlPrefix = '/trading-view-charts/';
     let url = urlPrefix + (companyPath) + '/' + watchlist.SegmentId + '/' + watchlist.Token;
     this.shared.saveRoutes(url);
     this.route.navigate([url]); */
  }
  /**
   * Goto Company Page of selected Scrip
   * @param watchlist Scrip to be navigated to
   */
  getInfo(watchlist) {
    this.googleAnalyticsEventsService.infoClickedFromWatchlist(watchlist);
    this.shared.isClassVisible = false;
    let companyPath = watchlist.SecDesc.toLowerCase().replace(/[\s|\&|\%]/g, '').trim();
    let urlPrefix = '/instrument/' + (watchlist["IsIndex"] == 1 || [6, 8, 14, 39].indexOf(watchlist.SegmentId) > -1 ? 'indices/' : [1, 2, 3, 4].indexOf(watchlist.SegmentId) > -1 && !watchlist["IsIndex"] ? 'equity/' : [5, 7].indexOf(watchlist.SegmentId) > -1 ? 'commodity/' : 'currency/');
    let url = urlPrefix + companyPath + '/' + watchlist.SegmentId + '/' + watchlist.Token;
    if (location.pathname.startsWith('/instrument')) {
      let presentToken = JSON.parse(localStorage.getItem("presentToken"));
      let newToken = presentToken ? presentToken.split('&') : [];
      if (newToken.length > 0 && watchlist.SegmentId == newToken[0] && watchlist.Token == newToken[1]) {
        this.utils.broadcast('routeResuse', watchlist);
      } else {
        this.shared.saveRoutes(url);
        this.route.navigate([url]);
      }
    } else {
      this.shared.saveRoutes(url);
      this.route.navigate([url]);
    }
    let segmentToken = watchlist.SegmentId + '&' + watchlist.Token;
    localStorage.setItem('presentToken', JSON.stringify(segmentToken));
  }
  /**
   * Add scrip To watchlist
   * @param segmentId Segment ID of Scrip
   * @param token Scrip Code of Scrip
   * @param profileId Profile ID where the scrip is to be added.
   */
  addToWatchlist(segmentId, token, profileId) {
    profileId = Number(profileId);
    if (this.watchListData[profileId - 1].length == 50) {
      this.utils.info('Maximum Limit Reached', 'Maximum 50 Scrips can be added to Watchlist. Please Remove some unwanted scrips and try adding it again.');
      this.utils.broadcast('ScripAdded', {});
    } else {
      let tokens = this.utils.generateTokens(this.watchListData[profileId - 1]);
      let request = {
        "UserId": this.utils.getUserId(),
        "SessionId": this.utils.getSessionId() || '',
        "UserCode": this.utils.get('userCode'),
        "GroupId": this.utils.get('groupId'),
        "ProfileId": profileId,
        "ProfileName": this.getWatchListName(profileId),
        "IsDefault": "1",
        "NoOfScrips": this.watchListData[profileId - 1].length + 1,
        "MultipleTokens": tokens ? tokens + ',' + segmentId + '@' + token : segmentId + '@' + token
      };
      this.rest.addUpdateWatchList(request).subscribe(data => {
        if (data.Status === "Success" && data.Response) {
          this.fetchWatchList(Number(profileId), true);
          this.utils.success('Success', 'Scrip Successfully Added to Watchlist ' + this.getWatchListName(profileId));
          this.utils.checkforFeatureAndUpdate('addToWatchlist');
          this.utils.broadcast('ScripAdded', {
            'SegmentId': segmentId,
            'Token': token,
            'ProfileId': profileId,
            'scripIndex': this.watchListData[Number(profileId) - 1].length
          });
          // } else if (this.utils.isSessionExpired(data.Reason)) {
          //   if(this.shared.isSSO){
          //     this.utils.sessionExpireHandling()
          //     return
          //   }
          //   this.utils.error('Session Expired', "Please Login Again");
          //   this.utils.postFeatureCount();
          //   this.utils.clearLoginDetails();
          //   this.shared.userId = null;
          //   this.route.navigate(['auth/login']);
        } else {
          this.utils.error('Error', data.Reason);
        }
      }, err => {});
    }
  }
  /** on click of sort apply selected sort
   * @param selectedIndex  selected index of sort
  */
  applySort(selectedIndex) {
    this.filterConfig.selected[this.activeWatchlist].sort[0] = this.filterConfig.sorts[selectedIndex].value;
    this.filterConfig.selected[this.activeWatchlist].asc = this.filterConfig.selected[this.activeWatchlist].asc ? false : true;
    this.utils.updatePreference('Watchlist', this.filterConfig.selected);
    this.savePreferencetoAPI();
  }
  /** to save user preferences */
  savePreferencetoAPI() {
    let request = {
      "preference_name": "Watchlist",
      "preference_type": "Watchlist",
      "client_id": this.utils.getUserId(),
      "config": this.filterConfig.selected,
      "platform": "Web"
    };
    let userAccountStatus = this.utils.getUserAccountStatus();
    if (!(!userAccountStatus || !userAccountStatus.onboardStatus || userAccountStatus.onboardStatus == 'C')) {
      return;
    }
    this.toolsService.saveUserPreference(request, true).subscribe(res => {
      if (res.status_code && res.status_code == 200) {}
    }, err => {});
  }
  ngOnDestroy() {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if (this.buySellSubscription) this.buySellSubscription.unsubscribe();
    if (this.scripRemoveSubscription) this.scripRemoveSubscription.unsubscribe();
    if (this.scripAddSubscription) this.scripAddSubscription.unsubscribe();
    if (this.routeParamsSubscription) this.routeParamsSubscription.unsubscribe();
    if (this.socketSubscription) this.socketSubscription.unsubscribe();
    if (this.watchlistSubscription) this.watchlistSubscription.unsubscribe();
    if (this.broadcastSubscription) this.broadcastSubscription.unsubscribe();
    if (this.changeWatchListSubscription) this.changeWatchListSubscription.unsubscribe();
    if (this.multiTouchlineSubscription) this.multiTouchlineSubscription.unsubscribe();
    if (this.socketStatusSubscription) this.socketStatusSubscription.unsubscribe();
    if (this.walkThroughSubscription) this.walkThroughSubscription.unsubscribe();
    this.utils.unSubscribeMultitouchline(this.watchListData[this.activeWatchlist - 1], 'watchlist');
  }
  onChartReadySub(val) {
    this.onChartReady.emit(val);
  }
  onSearchClickedSub(val) {
    this.onSearchClicked.emit(val);
  }
  fetchNewData(event) {
    this.config.symbol = event['Symbol'];
    this.config.SegmentId = event['SegmentId'];
    this.config.Token = event['Token'];
    if (this.config.SegmentId && this.config.Token) {
      let routeUrl = 'tv/trading-view-charts' + '/' + this.config.symbol + '/' + this.config.SegmentId + '/' + this.config.Token;
      this.location.replaceState(routeUrl);
      this.utils.unSubscribeMultitouchline(this.watchListData[this.activeWatchlist - 1], 'watchlist');
      //  this.getKeyInfo({ "UserId": this.utils.getUserId(), "SessionId": this.utils.getSessionId, "Token": Number(this.config.Token), "SegmentId": Number(this.config.SegmentId) });
      //   this.getScripDetail(this.config.SegmentId, this.config.Token, true);
      this.utils.subscribeMultitouchline([{
        SegmentId: this.config.SegmentId,
        Token: this.config.Token
      }]);
      this.getChartHistory(true);
    }
  }
  static {
    this.ctorParameters = () => [{
      type: _angular_common__WEBPACK_IMPORTED_MODULE_12__.Location
    }, {
      type: src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_2__.AnalyticsService
    }, {
      type: src_app_services_rest_tool_service__WEBPACK_IMPORTED_MODULE_4__.ToolService
    }, {
      type: src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_2__.AnalyticsService
    }, {
      type: src_app_services_rest_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef
    }, {
      type: src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_7__.UtilsService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.NgZone
    }, {
      type: src_app_services_sockets_socket_service__WEBPACK_IMPORTED_MODULE_6__.SocketService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Renderer2
    }, {
      type: src_app_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__.SharedDataService
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.Router
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute
    }];
  }
  static {
    this.propDecorators = {
      chartId: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
        args: ["chartId"]
      }],
      chartIntervalSet: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
        args: ["chartIntervalSet"]
      }],
      chartTypeSet: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
        args: ["chartTypeSet"]
      }],
      scripName: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
        args: ["scripName"]
      }],
      recUserId: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
        args: ["recUserId"]
      }],
      recSessionId: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
        args: ["recSessionId"]
      }],
      token: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
        args: ["token"]
      }],
      segmentId: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
        args: ["segmentId"]
      }],
      disableFeatures: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
        args: ["disableFeatures"]
      }],
      theme: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
        args: ["theme"]
      }],
      isOnCompany: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
        args: ["isOnCompany"]
      }],
      isExpanded: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
        args: ["isExpanded"]
      }],
      fullscreen: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
        args: ["fullscreen"]
      }],
      details: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
        args: ["details"]
      }],
      isEle: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
        args: ["isEle"]
      }],
      b5DataFetched: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
        args: ["b5DataFetched"]
      }],
      responseDataFetched: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
        args: ["responseDataFetched"]
      }],
      onChartReady: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Output,
        args: ["onChartReady"]
      }],
      onSearchClicked: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Output,
        args: ["onSearchClicked"]
      }]
    };
  }
};
TvChartExpComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-tv-chart-exp',
  template: _tv_chart_exp_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _common_module_tv_chart_container_tv_chart_container_component__WEBPACK_IMPORTED_MODULE_9__.TvChartContainerComponent],
  styles: [(_tv_chart_exp_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__metadata)("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_12__.Location, src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_2__.AnalyticsService, src_app_services_rest_tool_service__WEBPACK_IMPORTED_MODULE_4__.ToolService, src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_2__.AnalyticsService, src_app_services_rest_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService, _angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef, src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_7__.UtilsService, _angular_core__WEBPACK_IMPORTED_MODULE_10__.NgZone, src_app_services_sockets_socket_service__WEBPACK_IMPORTED_MODULE_6__.SocketService, _angular_core__WEBPACK_IMPORTED_MODULE_10__.Renderer2, src_app_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__.SharedDataService, _angular_router__WEBPACK_IMPORTED_MODULE_13__.Router, _angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute])], TvChartExpComponent);


/***/ }),

/***/ 35135:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/audit.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   audit: () => (/* binding */ audit)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/lift */ 39974);
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../observable/innerFrom */ 58750);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OperatorSubscriber */ 54360);



function audit(durationSelector) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)((source, subscriber) => {
    let hasValue = false;
    let lastValue = null;
    let durationSubscriber = null;
    let isComplete = false;
    const endDuration = () => {
      durationSubscriber === null || durationSubscriber === void 0 ? void 0 : durationSubscriber.unsubscribe();
      durationSubscriber = null;
      if (hasValue) {
        hasValue = false;
        const value = lastValue;
        lastValue = null;
        subscriber.next(value);
      }
      isComplete && subscriber.complete();
    };
    const cleanupDuration = () => {
      durationSubscriber = null;
      isComplete && subscriber.complete();
    };
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(subscriber, value => {
      hasValue = true;
      lastValue = value;
      if (!durationSubscriber) {
        (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__.innerFrom)(durationSelector(value)).subscribe(durationSubscriber = (0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(subscriber, endDuration, cleanupDuration));
      }
    }, () => {
      isComplete = true;
      (!hasValue || !durationSubscriber || durationSubscriber.closed) && subscriber.complete();
    }));
  });
}
//# sourceMappingURL=audit.js.map

/***/ }),

/***/ 63578:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/auditTime.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   auditTime: () => (/* binding */ auditTime)
/* harmony export */ });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 43236);
/* harmony import */ var _audit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./audit */ 35135);
/* harmony import */ var _observable_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../observable/timer */ 1807);



function auditTime(duration, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.asyncScheduler) {
  return (0,_audit__WEBPACK_IMPORTED_MODULE_1__.audit)(() => (0,_observable_timer__WEBPACK_IMPORTED_MODULE_2__.timer)(duration, scheduler));
}
//# sourceMappingURL=auditTime.js.map

/***/ }),

/***/ 65245:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/skip.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   skip: () => (/* binding */ skip)
/* harmony export */ });
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter */ 5964);

function skip(count) {
  return (0,_filter__WEBPACK_IMPORTED_MODULE_0__.filter)((_, index) => count <= index);
}
//# sourceMappingURL=skip.js.map

/***/ }),

/***/ 85497:
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/AsapAction.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AsapAction: () => (/* binding */ AsapAction)
/* harmony export */ });
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncAction */ 97302);
/* harmony import */ var _immediateProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./immediateProvider */ 61108);


class AsapAction extends _AsyncAction__WEBPACK_IMPORTED_MODULE_0__.AsyncAction {
  constructor(scheduler, work) {
    super(scheduler, work);
    this.scheduler = scheduler;
    this.work = work;
  }
  requestAsyncId(scheduler, id, delay = 0) {
    if (delay !== null && delay > 0) {
      return super.requestAsyncId(scheduler, id, delay);
    }
    scheduler.actions.push(this);
    return scheduler._scheduled || (scheduler._scheduled = _immediateProvider__WEBPACK_IMPORTED_MODULE_1__.immediateProvider.setImmediate(scheduler.flush.bind(scheduler, undefined)));
  }
  recycleAsyncId(scheduler, id, delay = 0) {
    var _a;
    if (delay != null ? delay > 0 : this.delay > 0) {
      return super.recycleAsyncId(scheduler, id, delay);
    }
    const {
      actions
    } = scheduler;
    if (id != null && ((_a = actions[actions.length - 1]) === null || _a === void 0 ? void 0 : _a.id) !== id) {
      _immediateProvider__WEBPACK_IMPORTED_MODULE_1__.immediateProvider.clearImmediate(id);
      if (scheduler._scheduled === id) {
        scheduler._scheduled = undefined;
      }
    }
    return undefined;
  }
}
//# sourceMappingURL=AsapAction.js.map

/***/ }),

/***/ 79626:
/*!************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/AsapScheduler.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AsapScheduler: () => (/* binding */ AsapScheduler)
/* harmony export */ });
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncScheduler */ 707);

class AsapScheduler extends _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__.AsyncScheduler {
  flush(action) {
    this._active = true;
    const flushId = this._scheduled;
    this._scheduled = undefined;
    const {
      actions
    } = this;
    let error;
    action = action || actions.shift();
    do {
      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    } while ((action = actions[0]) && action.id === flushId && actions.shift());
    this._active = false;
    if (error) {
      while ((action = actions[0]) && action.id === flushId && actions.shift()) {
        action.unsubscribe();
      }
      throw error;
    }
  }
}
//# sourceMappingURL=AsapScheduler.js.map

/***/ }),

/***/ 44683:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/asap.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   asap: () => (/* binding */ asap),
/* harmony export */   asapScheduler: () => (/* binding */ asapScheduler)
/* harmony export */ });
/* harmony import */ var _AsapAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsapAction */ 85497);
/* harmony import */ var _AsapScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsapScheduler */ 79626);


const asapScheduler = new _AsapScheduler__WEBPACK_IMPORTED_MODULE_0__.AsapScheduler(_AsapAction__WEBPACK_IMPORTED_MODULE_1__.AsapAction);
const asap = asapScheduler;
//# sourceMappingURL=asap.js.map

/***/ }),

/***/ 61108:
/*!****************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/immediateProvider.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   immediateProvider: () => (/* binding */ immediateProvider)
/* harmony export */ });
/* harmony import */ var _util_Immediate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/Immediate */ 91302);

const {
  setImmediate,
  clearImmediate
} = _util_Immediate__WEBPACK_IMPORTED_MODULE_0__.Immediate;
const immediateProvider = {
  setImmediate(...args) {
    const {
      delegate
    } = immediateProvider;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.setImmediate) || setImmediate)(...args);
  },
  clearImmediate(handle) {
    const {
      delegate
    } = immediateProvider;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearImmediate) || clearImmediate)(handle);
  },
  delegate: undefined
};
//# sourceMappingURL=immediateProvider.js.map

/***/ }),

/***/ 91302:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/Immediate.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Immediate: () => (/* binding */ Immediate),
/* harmony export */   TestTools: () => (/* binding */ TestTools)
/* harmony export */ });
let nextHandle = 1;
let resolved;
const activeHandles = {};
function findAndClearHandle(handle) {
  if (handle in activeHandles) {
    delete activeHandles[handle];
    return true;
  }
  return false;
}
const Immediate = {
  setImmediate(cb) {
    const handle = nextHandle++;
    activeHandles[handle] = true;
    if (!resolved) {
      resolved = Promise.resolve();
    }
    resolved.then(() => findAndClearHandle(handle) && cb());
    return handle;
  },
  clearImmediate(handle) {
    findAndClearHandle(handle);
  }
};
const TestTools = {
  pending() {
    return Object.keys(activeHandles).length;
  }
};
//# sourceMappingURL=Immediate.js.map

/***/ }),

/***/ 36367:
/*!***********************************************************************************************!*\
  !*** ./src/app/common-module/tv-chart-container/tv-chart-container.component.scss?ngResource ***!
  \***********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ 8564);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 98557);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.app-tv-chart-container {
  width: 100%;
}

.fl-r {
  float: right;
}

.buy2 {
  border: 0;
  color: #ffffff;
  background: #004393;
  border-radius: 4px !important;
  /* color: #131722; */
  padding: 9px 10px;
  /* border: 0; */
  color: #ffffff !important;
  background: #2D77F4;
  /* border-radius: 4px !important; */
}

.sell2 {
  border: #2D77F4 solid 1px;
  color: #2D77F4 !important;
  background-color: #ffffff;
  padding: 9px 10px;
}

.blank-div {
  width: 1000px;
  height: 100%;
}
@media (max-width: 1550px) {
  .blank-div {
    width: 747px;
  }
}
@media (max-width: 990px) {
  .blank-div {
    width: 747px;
  }
}
@media (max-width: 1400px) {
  .blank-div {
    width: 777px;
  }
}
@media (max-width: 1200px) {
  .blank-div {
    width: 1000px;
  }
}
@media (max-width: 1100px) {
  .blank-div {
    width: 1000px;
  }
}
@media (max-width: 1300px) {
  .blank-div {
    width: 914px;
  }
}
@media (min-width: 2400px) {
  .blank-div {
    width: 914px;
  }
}

.watermark {
  opacity: 0.5;
  color: #838383;
  position: absolute;
  bottom: 6rem;
  font-size: 30px;
  right: 8rem;
}

/* .watermark {
  opacity: 0.5;
  color: rgba(118, 118 ,118 , 36%);
  position: absolute;

  font-size: 12rem;
  top: 23%;
  left: 44%;
  margin: -25px 0 0 -25px;
} */
.sm-scroll {
  scroll-behavior: smooth;
  transition: all 0.3s ease;
}

.hide-chart-btn {
  display: none !important;
}

.jiffy-icon-expand-ch:before {
  content: "\\e910";
}`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 14353:
/*!**********************************************************************************!*\
  !*** ./src/app/tools-module/tv-chart-exp/tv-chart-exp.component.scss?ngResource ***!
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
/*Common CSS*/
.no-padding {
  padding: 0px;
}

.fixed-container {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 9;
  overflow: hidden;
  margin-bottom: 0;
}

.font-14 {
  font-size: 14px;
}
@media (max-width: 1550px) {
  .font-14 {
    font-size: 12px;
  }
}

.font-11 {
  font-size: 12px;
}

.semi-bold {
  font-weight: 600;
}

/*Specific Css*/
.search-panel ul.pagination {
  margin: 0px 0;
  position: absolute;
  bottom: 10px;
  left: 0%;
  right: 0px;
  padding: 15px;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  z-index: 999;
  border-top: 2px solid #F4F3F8;
}
@media (max-width: 1550px) {
  .search-panel ul.pagination {
    bottom: 0;
  }
}
.search-panel ul.pagination li {
  display: block;
  width: 20%;
}

.search-panel {
  position: relative;
  width: 100%;
  height: 100%;
  border-right: 1px solid #F4F3F8;
}
@media (max-width: 767px) {
  .search-panel {
    overflow: scroll;
  }
}
.search-panel .input-group {
  padding: 10px;
}
.search-panel .input-group .form-control {
  border: 0px;
  box-shadow: none;
  font-size: 12px;
  border-bottom: 1px solid #F4F3F8;
}
.search-panel .input-group .form-control:focus {
  border-bottom: 1px solid #febf00;
}
.search-panel .input-group .form-control:focus ~ .input-group-btn {
  border-bottom: 1px solid #febf00;
}
.search-panel .input-group .input-group-btn {
  border-bottom: 1px solid #f1f1f1;
  border-bottom-right-radius: 4px;
}
.search-panel .input-group .input-group-btn .btn {
  border: 0px;
  color: #ccc;
  padding: 5px;
}
.search-panel ul.watchlist {
  height: calc(100vh - 242px);
  margin-bottom: 65px;
  overflow-x: hidden;
  overflow-y: scroll;
}
@media (max-width: 1550px) {
  .search-panel ul.watchlist {
    height: calc(100vh - 190px);
  }
}
@media (max-width: 767px) {
  .search-panel ul.watchlist {
    height: calc(100% - 130px);
  }
}
@media (max-width: 1200px) and (min-width: 991px) {
  .search-panel ul.watchlist {
    height: calc(100vh - 200px);
  }
}
@media (max-width: 990px) and (min-width: 768px) {
  .search-panel ul.watchlist {
    height: calc(100vh - 135px);
  }
}
.search-panel ul.watchlist li {
  float: left;
  width: 100%;
  border-bottom: 1px solid #f1f1f1;
  position: relative;
  cursor: pointer !important;
}
.search-panel ul.watchlist li .watchlist-wrap {
  padding: 15px;
  border-left: 4px solid #c8c8c9;
  transition: all 0.5s ease;
}
@media (max-width: 1550px) {
  .search-panel ul.watchlist li .watchlist-wrap {
    padding: 10px;
  }
}
.search-panel ul.watchlist li:last-child {
  border-bottom: 0px;
}
.search-panel ul.watchlist li .fullwidth {
  display: inline-block;
  vertical-align: middle;
}
.search-panel ul.watchlist li .fullwidth .small-percentage {
  display: block;
  padding-left: 5px;
}
.search-panel ul.watchlist li .fullwidth.ltp {
  width: auto;
  display: inline-block;
  vertical-align: middle;
  font-size: 18px;
  margin-right: 8px;
  padding: 0px 2px;
}
.search-panel ul.watchlist li .fullwidth.change {
  display: block;
  display: flex;
  justify-content: flex-end;
}
.search-panel ul.watchlist li .fullwidth.change i {
  margin-left: 5px;
}
.search-panel ul.watchlist li .ltp-wrap {
  align-items: center;
  justify-content: space-between;
}
.search-panel ul.watchlist li div.text-right {
  color: #535353;
}
.search-panel ul.watchlist li div.text-right span.change i.fa {
  padding: 0;
  color: #535353;
}
.search-panel ul.watchlist li.no-data-container {
  border: 0;
}
.search-panel ul.watchlist li .ellipsis {
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.search-panel ul.watchlist li span.action-btn {
  visibility: hidden;
  opacity: 0;
  max-height: 0;
  display: flex;
  justify-content: center;
  align-content: center;
  clear: both;
  overflow: hidden;
  transition-property: all;
  transition-duration: 0.3s;
  transition-timing-function: ease;
  border: 1px solid #cccfd4;
  border-radius: 8px;
}
.search-panel ul.watchlist li span.action-btn button.btn-outline {
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  padding: 5px;
  border-radius: 0px;
  background: none;
  font-size: 25px;
  color: #9ea9b1;
  border-right: 1px solid #cccfd4;
}
.search-panel ul.watchlist li span.action-btn button.btn-outline:active, .search-panel ul.watchlist li span.action-btn button.btn-outline.active, .search-panel ul.watchlist li span.action-btn button.btn-outline:focus, .search-panel ul.watchlist li span.action-btn button.btn-outline.focus {
  box-shadow: none;
  border: none;
  outline: none;
  border-right: 1px solid #cccfd4;
}
.search-panel ul.watchlist li span.action-btn button.btn-outline.delete {
  border-right: 0px !important;
}
.search-panel ul.watchlist li span.action-btn button.btn-outline:last-child {
  border-right: 0px !important;
}
.search-panel ul.watchlist li div.delete-container {
  background: #f16522;
  text-align: center;
  padding: 8px 0;
}
.search-panel ul.watchlist li div.delete-container button.undo {
  color: #fff;
  background: #f16522;
  outline: 0;
  border: 0;
  font-size: 16px;
  box-shadow: none;
  border-radius: 0;
  padding: 7px 15px;
}
.search-panel ul.watchlist li div.delete-container button.undo:hover, .search-panel ul.watchlist li div.delete-container button.undo:focus {
  outline: 0;
}
.search-panel ul.watchlist li:hover span.action-btn, .search-panel ul.watchlist li.active span.action-btn {
  opacity: 1;
  max-height: 500px;
  margin-top: 15px;
  overflow: visible;
  visibility: visible;
}
.search-panel ul.watchlist li:hover span.action-btn button:hover, .search-panel ul.watchlist li.active span.action-btn button:hover {
  color: #ff7c7c;
}
.search-panel ul.watchlist li.up .watchlist-wrap {
  border-left: 4px solid #009933;
}
.search-panel ul.watchlist li.up div.text-right .change,
.search-panel ul.watchlist li.up div.text-right .change i.fa {
  color: #009933;
}
.search-panel ul.watchlist li.down .watchlist-wrap {
  border-left: 4px solid #ff1a1a;
}
.search-panel ul.watchlist li.down div.text-right .change,
.search-panel ul.watchlist li.down div.text-right .change i.fa {
  color: #ff1a1a;
}
.search-panel ul.watchlist li.no-data-container p {
  margin: 0;
}
.search-panel ul.watchlist li.no-data-container .btn-clear {
  color: #fe606e;
}
.search-panel ul.pagination {
  margin: 0px 0;
}
.search-panel ul.pagination li span {
  cursor: pointer;
  color: #666;
  display: inline-block;
  width: 100%;
  border-color: #cccfd4;
}
.search-panel ul.pagination li.active span {
  background: #eef5fd;
  border-color: #79b7ee;
  color: #79b7ee;
}

.watchlist-header {
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding: 30px 15px;
  border-bottom: 1px solid #F4F3F8;
}
@media (max-width: 1550px) {
  .watchlist-header {
    padding: 15px 10px;
  }
}
.watchlist-header .watchlist-name {
  line-height: 35px;
  display: flex;
  width: calc(100% - 75px);
  padding-right: 10px;
  align-items: center;
}
@media (max-width: 1550px) {
  .watchlist-header .watchlist-name {
    width: calc(100% - 65px);
  }
}
@media (max-width: 990px) {
  .watchlist-header .watchlist-name {
    width: calc(100% - 80px);
  }
}
.watchlist-header .watchlist-name .form-control {
  outline: none;
  box-shadow: none;
  border-radius: 0px;
}
.watchlist-header .watchlist-name i {
  font-size: 20px;
  margin-right: 15px;
  background-image: linear-gradient(to right, #ffc174 0%, #fe616e 100%);
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
}
@media (max-width: 1550px) {
  .watchlist-header .watchlist-name i {
    margin-right: 5px;
  }
}
.watchlist-header .watchlist-name i.icon-checked {
  font-size: 15px;
}
.watchlist-header .watchlist-name span {
  font-size: 20px;
  font-weight: bold;
}
@media (max-width: 1550px) {
  .watchlist-header .watchlist-name span {
    font-size: 18px;
  }
}
.watchlist-header .watchlist-edit .circle {
  width: 35px;
  height: 35px;
  border: 1px solid #909da5;
  color: #909da5;
  line-height: 39px;
  font-size: 20px;
  text-align: center;
  border-radius: 100%;
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
}
.watchlist-header .watchlist-edit .circle:hover {
  color: #ff7c7c;
}
@media (max-width: 1550px) {
  .watchlist-header .watchlist-edit .circle {
    width: 30px;
    line-height: 34px;
    font-size: 16px;
    height: 30px;
  }
}
@media (max-width: 767px) {
  .watchlist-header .watchlist-edit .circle {
    border: 1px solid #777;
    color: #777;
  }
}
.watchlist-header .watchlist-edit .close-btn {
  display: inline-block;
  vertical-align: middle;
  font-size: 33px;
  color: #c7cdd1;
  line-height: 25px;
  margin-left: 5px;
  cursor: pointer;
}
@media (max-width: 767px) {
  .watchlist-header .watchlist-edit .close-btn {
    color: #777;
  }
}

@media (min-width: 768px) {
  .mobile-watchlist {
    display: none;
  }
}
@media (max-width: 767px) {
  .overlay {
    width: 100%;
    height: 100%;
    position: fixed;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999999;
    top: 0;
    left: 0;
    display: none;
  }
  .overlay.watchlist-visible {
    display: block;
  }
}
.cdk-drag-preview {
  box-sizing: border-box;
  border-radius: 4px;
  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);
  list-style: none;
  margin-bottom: 0;
  padding: 0;
  background: #ffffff;
  height: auto !important;
}
.cdk-drag-preview .ellipsis {
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.cdk-drag-preview .watchlist-wrap {
  padding: 15px;
  border-left: 4px solid #c8c8c9;
  transition: all 0.5s ease;
}
@media (max-width: 1550px) {
  .cdk-drag-preview .watchlist-wrap {
    padding: 10px;
  }
}
.cdk-drag-preview.up .watchlist-wrap {
  border-left: 4px solid #009933;
}
.cdk-drag-preview.up div.text-right .change,
.cdk-drag-preview.up div.text-right .change i.fa {
  color: #009933;
}
.cdk-drag-preview.down .watchlist-wrap {
  border-left: 4px solid #ff1a1a;
}
.cdk-drag-preview.down div.text-right .change,
.cdk-drag-preview.down div.text-right .change i.fa {
  color: #ff1a1a;
}
.cdk-drag-preview .fullwidth {
  display: inline-block;
  vertical-align: middle;
}
.cdk-drag-preview .fullwidth.ltp {
  width: auto;
  display: inline-block;
  vertical-align: middle;
  font-size: 18px;
  margin-right: 8px;
  padding: 0px 2px;
}
.cdk-drag-preview .fullwidth.change {
  width: 60px;
}
@media (min-width: 1400px) {
  .cdk-drag-preview .fullwidth.change {
    width: 65px;
  }
}
.cdk-drag-preview .fullwidth.change i {
  margin-left: 5px;
}
.cdk-drag-preview div.text-right {
  color: #535353;
}
.cdk-drag-preview div.text-right span.change i.fa {
  padding: 0;
  color: #535353;
}
.cdk-drag-preview span.action-btn {
  display: none;
}

.cdk-drag-placeholder {
  opacity: 0;
}

.cdk-drag-animating {
  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
}

.cdk-drop-list-dragging .watchlist:not(.cdk-drag-placeholder) {
  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
}

.dropdown-menu {
  z-index: 999;
}

.sort {
  color: red;
}

.sort-name {
  color: black;
}

.watch-change ul.watchlist {
  margin-bottom: 20px !important;
  height: calc(100vh - 250px) !important;
}

.jhjh {
  z-index: 9999;
  position: absolute;
  color: white;
}

.watchlist-theme {
  background: #131722;
  color: white;
}
.watchlist-theme .fullwidth {
  font-weight: 400;
}
.watchlist-theme .text-gray {
  color: lightgray;
}
.watchlist-theme .text-dgray {
  color: gray;
}
.watchlist-theme .sort-name {
  color: #337ab7;
}
.watchlist-theme .bg-down {
  background: none !important;
}
.watchlist-theme .ltp {
  color: #c7cdd1 !important;
}
.watchlist-theme .card {
  background: #131722 !important;
  box-shadow: none !important;
  border: 1px solid gray !important;
}
.watchlist-theme .pagination {
  border: white 1px solid;
  background: #131722 !important;
  /*    .active {
    font-weight: 400;
    background: black !important;
  } */
}
.watchlist-theme .pagination li span {
  background: black !important;
  color: white;
  font-weight: 500 !important;
}`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 35693:
/*!***********************************************************************************************!*\
  !*** ./src/app/common-module/tv-chart-container/tv-chart-container.component.html?ngResource ***!
  \***********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!-- <img\r\nclass=\"loader\"\r\nsrc=\"assets/images/loader.gif\"\r\n*ngIf=\"shared.isServiceHit\"\r\n/> -->\r\n<!-- <script type=\"text/javascript\"   *ngIf=\"_symbol && isExpanded\">\r\nwindow.addEventListener('keydown',function(e){if(e.keyIdentifier=='U+000A'||e.keyIdentifier=='Enter'||e.keyCode==13){if(e.target.nodeName=='INPUT'&&e.target.type=='text'){e.preventDefault();return false;}}},true);\r\n</script> -->\r\n<div style=\"display: flex;\">\r\n\r\n\r\n  @if (!chartId) {\r\n    @if (_symbol && isExpanded) {\r\n      <div class=\"app-tv-chart-container sm-scroll\" id=\"tv_chart_container\"\r\n      [style.height.px]=\"chartConfig?.height\" [style.width.px]=\"chartConfig?.width\"></div>\r\n    }\r\n    @if (_symbol && !isExpanded) {\r\n      <div class=\"app-tv-chart-container sm-scroll\" id=\"tv_chart_container\"></div>\r\n    }\r\n  }\r\n\r\n  @if (chartId) {\r\n    @if (_symbol && isExpanded) {\r\n      <div class=\"app-tv-chart-container sm-scroll \" id=\"{{chartId}}\"\r\n        [style.height.%]=\"chartConfig?.height\"\r\n      ></div>\r\n    }\r\n    @if (_symbol && !isExpanded) {\r\n      <div class=\"app-tv-chart-container sm-scroll\" id=\"{{chartId}}\"></div>\r\n    }\r\n  }\r\n\r\n  <!-- <div class=\"blank-div sm-scroll\"   *ngIf=\"_symbol && shared?.isOpened && isExpanded\">&nbsp;</div> -->\r\n\r\n</div>\r\n\r\n<!-- <div *ngIf=\"_symbol && isExpanded\" class=\"watermark\" >\r\nChoice FinX\r\n</div> -->\r\n\r\n<!-- <div id=\"tradingview\"></div> -->\r\n<!-- <div id=\"technical-analysis\"></div> -->\r\n\r\n<!-- <div class=\"tradingview-widget-container\">\r\n<div id=\"tradingview_bac65\"></div>\r\n</div> -->\r\n\r\n<!-- <app-order-buysell></app-order-buysell> -->\r\n\r\n\r\n@if (showPreLogin) {\r\n  <div class=\"dialog\">\r\n    <div class=\"dialog-content\">\r\n      <div class=\"dialog-header clearfix \">\r\n        <div class=\"col-md-12\">\r\n          <h4 class=\"popup-title\">Oops,Looks like you are not logged in. Please Login for Moving further. </h4>\r\n        </div>\r\n      </div>\r\n      <div class=\"dialog-footer clearfix\">\r\n        <button class=\"btn sell\" (click)=\"closePreLoginModaL()\">Close</button>\r\n        <button class=\"btn buy\" (click)=\"navigateToLogin()\">Login</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n}";

/***/ }),

/***/ 65761:
/*!**********************************************************************************!*\
  !*** ./src/app/tools-module/tv-chart-exp/tv-chart-exp.component.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "@if (config.SegmentId && config?.symbol && config?.Token) {\r\n  <div   [ngClass]=\"{'chart-custom-chart':isWatchlistChart}\">\r\n    <app-tv-chart-container [segmentId]=\"config?.SegmentId\" [token]=\"config?.Token\" [scripName]=\"config?.symbol\" [chartId]=\"chartId\"\r\n      [b5Data]=\"fullB5data\" [responseData]=\"responseData\" [patchedResponseData]=\"patchedResponseData\"\r\n      (getData)=\"getData($event)\" (getResolution)=\"getResolution($event)\" (setInterval)=\"setInterval($event)\"\r\n      (fetchNewData)=\"fetchNewData($event)\" [disableFeatures]=\"disableFeatures\" [fullscreen]=\"config?.fullscreen\"\r\n      (onChartReady)=\"onChartReadySub($event)\"   (onSearchClicked)=\"onSearchClickedSub($event)\"\r\n    [details]=\"config?.details\" [theme]=\"config?.theme\"   [intervalTv]=\"config?.intervalTv\" [chartTypeSet]=\"config?.type\"  [isExpanded]=\"config?.isExpanded\"></app-tv-chart-container>\r\n  <!--     [details]=\"config?.details\" [theme]=\"config?.theme\" [isExpanded]=\"config?.isExpanded\"></app-tv-chart-container> -->\r\n</div>\r\n}\r\n\r\n\r\n\r\n<!-- <div class=\"chart-custom-menu\" *ngIf=\"isWatchlistChart\">\r\n<ul>\r\n\r\n  <li (click)=\"goToChartIQ()\">\r\n    ChartIQ\r\n  </li>\r\n  <li class=\"active\">\r\n    Trading View\r\n  </li>\r\n</ul>\r\n</div> -->\r\n\r\n<!-- [recUserId]=\"config?.recUserId\"\r\n[recSessionId]=\"config?.recSessionId\" -->";

/***/ }),

/***/ 18617:
/*!*****************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/a11y.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A11yModule: () => (/* binding */ A11yModule),
/* harmony export */   ActiveDescendantKeyManager: () => (/* binding */ ActiveDescendantKeyManager),
/* harmony export */   AriaDescriber: () => (/* binding */ AriaDescriber),
/* harmony export */   CDK_DESCRIBEDBY_HOST_ATTRIBUTE: () => (/* binding */ CDK_DESCRIBEDBY_HOST_ATTRIBUTE),
/* harmony export */   CDK_DESCRIBEDBY_ID_PREFIX: () => (/* binding */ CDK_DESCRIBEDBY_ID_PREFIX),
/* harmony export */   CdkAriaLive: () => (/* binding */ CdkAriaLive),
/* harmony export */   CdkMonitorFocus: () => (/* binding */ CdkMonitorFocus),
/* harmony export */   CdkTrapFocus: () => (/* binding */ CdkTrapFocus),
/* harmony export */   ConfigurableFocusTrap: () => (/* binding */ ConfigurableFocusTrap),
/* harmony export */   ConfigurableFocusTrapFactory: () => (/* binding */ ConfigurableFocusTrapFactory),
/* harmony export */   EventListenerFocusTrapInertStrategy: () => (/* binding */ EventListenerFocusTrapInertStrategy),
/* harmony export */   FOCUS_MONITOR_DEFAULT_OPTIONS: () => (/* binding */ FOCUS_MONITOR_DEFAULT_OPTIONS),
/* harmony export */   FOCUS_TRAP_INERT_STRATEGY: () => (/* binding */ FOCUS_TRAP_INERT_STRATEGY),
/* harmony export */   FocusKeyManager: () => (/* binding */ FocusKeyManager),
/* harmony export */   FocusMonitor: () => (/* binding */ FocusMonitor),
/* harmony export */   FocusMonitorDetectionMode: () => (/* binding */ FocusMonitorDetectionMode),
/* harmony export */   FocusTrap: () => (/* binding */ FocusTrap),
/* harmony export */   FocusTrapFactory: () => (/* binding */ FocusTrapFactory),
/* harmony export */   HighContrastMode: () => (/* binding */ HighContrastMode),
/* harmony export */   HighContrastModeDetector: () => (/* binding */ HighContrastModeDetector),
/* harmony export */   INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS: () => (/* binding */ INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS),
/* harmony export */   INPUT_MODALITY_DETECTOR_OPTIONS: () => (/* binding */ INPUT_MODALITY_DETECTOR_OPTIONS),
/* harmony export */   InputModalityDetector: () => (/* binding */ InputModalityDetector),
/* harmony export */   InteractivityChecker: () => (/* binding */ InteractivityChecker),
/* harmony export */   IsFocusableConfig: () => (/* binding */ IsFocusableConfig),
/* harmony export */   LIVE_ANNOUNCER_DEFAULT_OPTIONS: () => (/* binding */ LIVE_ANNOUNCER_DEFAULT_OPTIONS),
/* harmony export */   LIVE_ANNOUNCER_ELEMENT_TOKEN: () => (/* binding */ LIVE_ANNOUNCER_ELEMENT_TOKEN),
/* harmony export */   LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY: () => (/* binding */ LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY),
/* harmony export */   ListKeyManager: () => (/* binding */ ListKeyManager),
/* harmony export */   LiveAnnouncer: () => (/* binding */ LiveAnnouncer),
/* harmony export */   MESSAGES_CONTAINER_ID: () => (/* binding */ MESSAGES_CONTAINER_ID),
/* harmony export */   NOOP_TREE_KEY_MANAGER_FACTORY: () => (/* binding */ NOOP_TREE_KEY_MANAGER_FACTORY),
/* harmony export */   NOOP_TREE_KEY_MANAGER_FACTORY_PROVIDER: () => (/* binding */ NOOP_TREE_KEY_MANAGER_FACTORY_PROVIDER),
/* harmony export */   NoopTreeKeyManager: () => (/* binding */ NoopTreeKeyManager),
/* harmony export */   TREE_KEY_MANAGER: () => (/* binding */ TREE_KEY_MANAGER),
/* harmony export */   TREE_KEY_MANAGER_FACTORY: () => (/* binding */ TREE_KEY_MANAGER_FACTORY),
/* harmony export */   TREE_KEY_MANAGER_FACTORY_PROVIDER: () => (/* binding */ TREE_KEY_MANAGER_FACTORY_PROVIDER),
/* harmony export */   TreeKeyManager: () => (/* binding */ TreeKeyManager),
/* harmony export */   addAriaReferencedId: () => (/* binding */ addAriaReferencedId),
/* harmony export */   getAriaReferenceIds: () => (/* binding */ getAriaReferenceIds),
/* harmony export */   isFakeMousedownFromScreenReader: () => (/* binding */ isFakeMousedownFromScreenReader),
/* harmony export */   isFakeTouchstartFromScreenReader: () => (/* binding */ isFakeTouchstartFromScreenReader),
/* harmony export */   removeAriaReferencedId: () => (/* binding */ removeAriaReferencedId)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/platform */ 36860);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 18530);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 13961);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 74402);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 7673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 84412);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/keycodes */ 67336);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 88141);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 70152);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 5964);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 96354);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 96697);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 65245);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 23294);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 56977);
/* harmony import */ var _angular_cdk_coercion_private__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/coercion/private */ 30426);
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/observers */ 72318);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/cdk/coercion */ 14085);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/cdk/layout */ 99327);














/** IDs are delimited by an empty space, as per the spec. */
const ID_DELIMITER = ' ';
/**
 * Adds the given ID to the specified ARIA attribute on an element.
 * Used for attributes such as aria-labelledby, aria-owns, etc.
 */
function addAriaReferencedId(el, attr, id) {
  const ids = getAriaReferenceIds(el, attr);
  id = id.trim();
  if (ids.some(existingId => existingId.trim() === id)) {
    return;
  }
  ids.push(id);
  el.setAttribute(attr, ids.join(ID_DELIMITER));
}
/**
 * Removes the given ID from the specified ARIA attribute on an element.
 * Used for attributes such as aria-labelledby, aria-owns, etc.
 */
function removeAriaReferencedId(el, attr, id) {
  const ids = getAriaReferenceIds(el, attr);
  id = id.trim();
  const filteredIds = ids.filter(val => val !== id);
  if (filteredIds.length) {
    el.setAttribute(attr, filteredIds.join(ID_DELIMITER));
  } else {
    el.removeAttribute(attr);
  }
}
/**
 * Gets the list of IDs referenced by the given ARIA attribute on an element.
 * Used for attributes such as aria-labelledby, aria-owns, etc.
 */
function getAriaReferenceIds(el, attr) {
  // Get string array of all individual ids (whitespace delimited) in the attribute value
  const attrValue = el.getAttribute(attr);
  return attrValue?.match(/\S+/g) ?? [];
}

/**
 * ID used for the body container where all messages are appended.
 * @deprecated No longer being used. To be removed.
 * @breaking-change 14.0.0
 */
const MESSAGES_CONTAINER_ID = 'cdk-describedby-message-container';
/**
 * ID prefix used for each created message element.
 * @deprecated To be turned into a private variable.
 * @breaking-change 14.0.0
 */
const CDK_DESCRIBEDBY_ID_PREFIX = 'cdk-describedby-message';
/**
 * Attribute given to each host element that is described by a message element.
 * @deprecated To be turned into a private variable.
 * @breaking-change 14.0.0
 */
const CDK_DESCRIBEDBY_HOST_ATTRIBUTE = 'cdk-describedby-host';
/** Global incremental identifier for each registered message element. */
let nextId = 0;
/**
 * Utility that creates visually hidden elements with a message content. Useful for elements that
 * want to use aria-describedby to further describe themselves without adding additional visual
 * content.
 */
class AriaDescriber {
  constructor(_document,
  /**
   * @deprecated To be turned into a required parameter.
   * @breaking-change 14.0.0
   */
  _platform) {
    this._platform = _platform;
    /** Map of all registered message elements that have been placed into the document. */
    this._messageRegistry = new Map();
    /** Container for all registered messages. */
    this._messagesContainer = null;
    /** Unique ID for the service. */
    this._id = `${nextId++}`;
    this._document = _document;
    this._id = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.APP_ID) + '-' + nextId++;
  }
  describe(hostElement, message, role) {
    if (!this._canBeDescribed(hostElement, message)) {
      return;
    }
    const key = getKey(message, role);
    if (typeof message !== 'string') {
      // We need to ensure that the element has an ID.
      setMessageId(message, this._id);
      this._messageRegistry.set(key, {
        messageElement: message,
        referenceCount: 0
      });
    } else if (!this._messageRegistry.has(key)) {
      this._createMessageElement(message, role);
    }
    if (!this._isElementDescribedByMessage(hostElement, key)) {
      this._addMessageReference(hostElement, key);
    }
  }
  removeDescription(hostElement, message, role) {
    if (!message || !this._isElementNode(hostElement)) {
      return;
    }
    const key = getKey(message, role);
    if (this._isElementDescribedByMessage(hostElement, key)) {
      this._removeMessageReference(hostElement, key);
    }
    // If the message is a string, it means that it's one that we created for the
    // consumer so we can remove it safely, otherwise we should leave it in place.
    if (typeof message === 'string') {
      const registeredMessage = this._messageRegistry.get(key);
      if (registeredMessage && registeredMessage.referenceCount === 0) {
        this._deleteMessageElement(key);
      }
    }
    if (this._messagesContainer?.childNodes.length === 0) {
      this._messagesContainer.remove();
      this._messagesContainer = null;
    }
  }
  /** Unregisters all created message elements and removes the message container. */
  ngOnDestroy() {
    const describedElements = this._document.querySelectorAll(`[${CDK_DESCRIBEDBY_HOST_ATTRIBUTE}="${this._id}"]`);
    for (let i = 0; i < describedElements.length; i++) {
      this._removeCdkDescribedByReferenceIds(describedElements[i]);
      describedElements[i].removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
    }
    this._messagesContainer?.remove();
    this._messagesContainer = null;
    this._messageRegistry.clear();
  }
  /**
   * Creates a new element in the visually hidden message container element with the message
   * as its content and adds it to the message registry.
   */
  _createMessageElement(message, role) {
    const messageElement = this._document.createElement('div');
    setMessageId(messageElement, this._id);
    messageElement.textContent = message;
    if (role) {
      messageElement.setAttribute('role', role);
    }
    this._createMessagesContainer();
    this._messagesContainer.appendChild(messageElement);
    this._messageRegistry.set(getKey(message, role), {
      messageElement,
      referenceCount: 0
    });
  }
  /** Deletes the message element from the global messages container. */
  _deleteMessageElement(key) {
    this._messageRegistry.get(key)?.messageElement?.remove();
    this._messageRegistry.delete(key);
  }
  /** Creates the global container for all aria-describedby messages. */
  _createMessagesContainer() {
    if (this._messagesContainer) {
      return;
    }
    const containerClassName = 'cdk-describedby-message-container';
    const serverContainers = this._document.querySelectorAll(`.${containerClassName}[platform="server"]`);
    for (let i = 0; i < serverContainers.length; i++) {
      // When going from the server to the client, we may end up in a situation where there's
      // already a container on the page, but we don't have a reference to it. Clear the
      // old container so we don't get duplicates. Doing this, instead of emptying the previous
      // container, should be slightly faster.
      serverContainers[i].remove();
    }
    const messagesContainer = this._document.createElement('div');
    // We add `visibility: hidden` in order to prevent text in this container from
    // being searchable by the browser's Ctrl + F functionality.
    // Screen-readers will still read the description for elements with aria-describedby even
    // when the description element is not visible.
    messagesContainer.style.visibility = 'hidden';
    // Even though we use `visibility: hidden`, we still apply `cdk-visually-hidden` so that
    // the description element doesn't impact page layout.
    messagesContainer.classList.add(containerClassName);
    messagesContainer.classList.add('cdk-visually-hidden');
    // @breaking-change 14.0.0 Remove null check for `_platform`.
    if (this._platform && !this._platform.isBrowser) {
      messagesContainer.setAttribute('platform', 'server');
    }
    this._document.body.appendChild(messagesContainer);
    this._messagesContainer = messagesContainer;
  }
  /** Removes all cdk-describedby messages that are hosted through the element. */
  _removeCdkDescribedByReferenceIds(element) {
    // Remove all aria-describedby reference IDs that are prefixed by CDK_DESCRIBEDBY_ID_PREFIX
    const originalReferenceIds = getAriaReferenceIds(element, 'aria-describedby').filter(id => id.indexOf(CDK_DESCRIBEDBY_ID_PREFIX) != 0);
    element.setAttribute('aria-describedby', originalReferenceIds.join(' '));
  }
  /**
   * Adds a message reference to the element using aria-describedby and increments the registered
   * message's reference count.
   */
  _addMessageReference(element, key) {
    const registeredMessage = this._messageRegistry.get(key);
    // Add the aria-describedby reference and set the
    // describedby_host attribute to mark the element.
    addAriaReferencedId(element, 'aria-describedby', registeredMessage.messageElement.id);
    element.setAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE, this._id);
    registeredMessage.referenceCount++;
  }
  /**
   * Removes a message reference from the element using aria-describedby
   * and decrements the registered message's reference count.
   */
  _removeMessageReference(element, key) {
    const registeredMessage = this._messageRegistry.get(key);
    registeredMessage.referenceCount--;
    removeAriaReferencedId(element, 'aria-describedby', registeredMessage.messageElement.id);
    element.removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
  }
  /** Returns true if the element has been described by the provided message ID. */
  _isElementDescribedByMessage(element, key) {
    const referenceIds = getAriaReferenceIds(element, 'aria-describedby');
    const registeredMessage = this._messageRegistry.get(key);
    const messageId = registeredMessage && registeredMessage.messageElement.id;
    return !!messageId && referenceIds.indexOf(messageId) != -1;
  }
  /** Determines whether a message can be described on a particular element. */
  _canBeDescribed(element, message) {
    if (!this._isElementNode(element)) {
      return false;
    }
    if (message && typeof message === 'object') {
      // We'd have to make some assumptions about the description element's text, if the consumer
      // passed in an element. Assume that if an element is passed in, the consumer has verified
      // that it can be used as a description.
      return true;
    }
    const trimmedMessage = message == null ? '' : `${message}`.trim();
    const ariaLabel = element.getAttribute('aria-label');
    // We shouldn't set descriptions if they're exactly the same as the `aria-label` of the
    // element, because screen readers will end up reading out the same text twice in a row.
    return trimmedMessage ? !ariaLabel || ariaLabel.trim() !== trimmedMessage : false;
  }
  /** Checks whether a node is an Element node. */
  _isElementNode(element) {
    return element.nodeType === this._document.ELEMENT_NODE;
  }
  static {
    this.ɵfac = function AriaDescriber_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AriaDescriber)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.Platform));
    };
  }
  static {
    this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AriaDescriber,
      factory: AriaDescriber.ɵfac,
      providedIn: 'root'
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AriaDescriber, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], () => [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
    }]
  }, {
    type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.Platform
  }], null);
})();
/** Gets a key that can be used to look messages up in the registry. */
function getKey(message, role) {
  return typeof message === 'string' ? `${role || ''}/${message}` : message;
}
/** Assigns a unique ID to an element, if it doesn't have one already. */
function setMessageId(element, serviceId) {
  if (!element.id) {
    element.id = `${CDK_DESCRIBEDBY_ID_PREFIX}-${serviceId}-${nextId++}`;
  }
}
const DEFAULT_TYPEAHEAD_DEBOUNCE_INTERVAL_MS = 200;
/**
 * Selects items based on keyboard inputs. Implements the typeahead functionality of
 * `role="listbox"` or `role="tree"` and other related roles.
 */
class Typeahead {
  constructor(initialItems, config) {
    this._letterKeyStream = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this._items = [];
    this._selectedItemIndex = -1;
    /** Buffer for the letters that the user has pressed */
    this._pressedLetters = [];
    this._selectedItem = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this.selectedItem = this._selectedItem;
    const typeAheadInterval = typeof config?.debounceInterval === 'number' ? config.debounceInterval : DEFAULT_TYPEAHEAD_DEBOUNCE_INTERVAL_MS;
    if (config?.skipPredicate) {
      this._skipPredicateFn = config.skipPredicate;
    }
    if ((typeof ngDevMode === 'undefined' || ngDevMode) && initialItems.length && initialItems.some(item => typeof item.getLabel !== 'function')) {
      throw new Error('KeyManager items in typeahead mode must implement the `getLabel` method.');
    }
    this.setItems(initialItems);
    this._setupKeyHandler(typeAheadInterval);
  }
  destroy() {
    this._pressedLetters = [];
    this._letterKeyStream.complete();
    this._selectedItem.complete();
  }
  setCurrentSelectedItemIndex(index) {
    this._selectedItemIndex = index;
  }
  setItems(items) {
    this._items = items;
  }
  handleKey(event) {
    const keyCode = event.keyCode;
    // Attempt to use the `event.key` which also maps it to the user's keyboard language,
    // otherwise fall back to resolving alphanumeric characters via the keyCode.
    if (event.key && event.key.length === 1) {
      this._letterKeyStream.next(event.key.toLocaleUpperCase());
    } else if (keyCode >= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.A && keyCode <= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.Z || keyCode >= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.ZERO && keyCode <= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.NINE) {
      this._letterKeyStream.next(String.fromCharCode(keyCode));
    }
  }
  /** Gets whether the user is currently typing into the manager using the typeahead feature. */
  isTyping() {
    return this._pressedLetters.length > 0;
  }
  /** Resets the currently stored sequence of typed letters. */
  reset() {
    this._pressedLetters = [];
  }
  _setupKeyHandler(typeAheadInterval) {
    // Debounce the presses of non-navigational keys, collect the ones that correspond to letters
    // and convert those letters back into a string. Afterwards find the first item that starts
    // with that string and select it.
    this._letterKeyStream.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(letter => this._pressedLetters.push(letter)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.debounceTime)(typeAheadInterval), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(() => this._pressedLetters.length > 0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(() => this._pressedLetters.join('').toLocaleUpperCase())).subscribe(inputString => {
      // Start at 1 because we want to start searching at the item immediately
      // following the current active item.
      for (let i = 1; i < this._items.length + 1; i++) {
        const index = (this._selectedItemIndex + i) % this._items.length;
        const item = this._items[index];
        if (!this._skipPredicateFn?.(item) && item.getLabel?.().toLocaleUpperCase().trim().indexOf(inputString) === 0) {
          this._selectedItem.next(item);
          break;
        }
      }
      this._pressedLetters = [];
    });
  }
}

/**
 * This class manages keyboard events for selectable lists. If you pass it a query list
 * of items, it will set the active item correctly when arrow events occur.
 */
class ListKeyManager {
  constructor(_items, injector) {
    this._items = _items;
    this._activeItemIndex = -1;
    this._activeItem = null;
    this._wrap = false;
    this._typeaheadSubscription = rxjs__WEBPACK_IMPORTED_MODULE_9__.Subscription.EMPTY;
    this._vertical = true;
    this._allowedModifierKeys = [];
    this._homeAndEnd = false;
    this._pageUpAndDown = {
      enabled: false,
      delta: 10
    };
    /**
     * Predicate function that can be used to check whether an item should be skipped
     * by the key manager. By default, disabled items are skipped.
     */
    this._skipPredicateFn = item => item.disabled;
    /**
     * Stream that emits any time the TAB key is pressed, so components can react
     * when focus is shifted off of the list.
     */
    this.tabOut = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    /** Stream that emits whenever the active item of the list manager changes. */
    this.change = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    // We allow for the items to be an array because, in some cases, the consumer may
    // not have access to a QueryList of the items they want to manage (e.g. when the
    // items aren't being collected via `ViewChildren` or `ContentChildren`).
    if (_items instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.QueryList) {
      this._itemChangesSubscription = _items.changes.subscribe(newItems => this._itemsChanged(newItems.toArray()));
    } else if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.isSignal)(_items)) {
      if (!injector && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw new Error('ListKeyManager constructed with a signal must receive an injector');
      }
      this._effectRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.effect)(() => this._itemsChanged(_items()), {
        injector
      });
    }
  }
  /**
   * Sets the predicate function that determines which items should be skipped by the
   * list key manager.
   * @param predicate Function that determines whether the given item should be skipped.
   */
  skipPredicate(predicate) {
    this._skipPredicateFn = predicate;
    return this;
  }
  /**
   * Configures wrapping mode, which determines whether the active item will wrap to
   * the other end of list when there are no more items in the given direction.
   * @param shouldWrap Whether the list should wrap when reaching the end.
   */
  withWrap(shouldWrap = true) {
    this._wrap = shouldWrap;
    return this;
  }
  /**
   * Configures whether the key manager should be able to move the selection vertically.
   * @param enabled Whether vertical selection should be enabled.
   */
  withVerticalOrientation(enabled = true) {
    this._vertical = enabled;
    return this;
  }
  /**
   * Configures the key manager to move the selection horizontally.
   * Passing in `null` will disable horizontal movement.
   * @param direction Direction in which the selection can be moved.
   */
  withHorizontalOrientation(direction) {
    this._horizontal = direction;
    return this;
  }
  /**
   * Modifier keys which are allowed to be held down and whose default actions will be prevented
   * as the user is pressing the arrow keys. Defaults to not allowing any modifier keys.
   */
  withAllowedModifierKeys(keys) {
    this._allowedModifierKeys = keys;
    return this;
  }
  /**
   * Turns on typeahead mode which allows users to set the active item by typing.
   * @param debounceInterval Time to wait after the last keystroke before setting the active item.
   */
  withTypeAhead(debounceInterval = 200) {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      const items = this._getItemsArray();
      if (items.length > 0 && items.some(item => typeof item.getLabel !== 'function')) {
        throw Error('ListKeyManager items in typeahead mode must implement the `getLabel` method.');
      }
    }
    this._typeaheadSubscription.unsubscribe();
    const items = this._getItemsArray();
    this._typeahead = new Typeahead(items, {
      debounceInterval: typeof debounceInterval === 'number' ? debounceInterval : undefined,
      skipPredicate: item => this._skipPredicateFn(item)
    });
    this._typeaheadSubscription = this._typeahead.selectedItem.subscribe(item => {
      this.setActiveItem(item);
    });
    return this;
  }
  /** Cancels the current typeahead sequence. */
  cancelTypeahead() {
    this._typeahead?.reset();
    return this;
  }
  /**
   * Configures the key manager to activate the first and last items
   * respectively when the Home or End key is pressed.
   * @param enabled Whether pressing the Home or End key activates the first/last item.
   */
  withHomeAndEnd(enabled = true) {
    this._homeAndEnd = enabled;
    return this;
  }
  /**
   * Configures the key manager to activate every 10th, configured or first/last element in up/down direction
   * respectively when the Page-Up or Page-Down key is pressed.
   * @param enabled Whether pressing the Page-Up or Page-Down key activates the first/last item.
   * @param delta Whether pressing the Home or End key activates the first/last item.
   */
  withPageUpDown(enabled = true, delta = 10) {
    this._pageUpAndDown = {
      enabled,
      delta
    };
    return this;
  }
  setActiveItem(item) {
    const previousActiveItem = this._activeItem;
    this.updateActiveItem(item);
    if (this._activeItem !== previousActiveItem) {
      this.change.next(this._activeItemIndex);
    }
  }
  /**
   * Sets the active item depending on the key event passed in.
   * @param event Keyboard event to be used for determining which element should be active.
   */
  onKeydown(event) {
    const keyCode = event.keyCode;
    const modifiers = ['altKey', 'ctrlKey', 'metaKey', 'shiftKey'];
    const isModifierAllowed = modifiers.every(modifier => {
      return !event[modifier] || this._allowedModifierKeys.indexOf(modifier) > -1;
    });
    switch (keyCode) {
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.TAB:
        this.tabOut.next();
        return;
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.DOWN_ARROW:
        if (this._vertical && isModifierAllowed) {
          this.setNextItemActive();
          break;
        } else {
          return;
        }
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.UP_ARROW:
        if (this._vertical && isModifierAllowed) {
          this.setPreviousItemActive();
          break;
        } else {
          return;
        }
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.RIGHT_ARROW:
        if (this._horizontal && isModifierAllowed) {
          this._horizontal === 'rtl' ? this.setPreviousItemActive() : this.setNextItemActive();
          break;
        } else {
          return;
        }
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.LEFT_ARROW:
        if (this._horizontal && isModifierAllowed) {
          this._horizontal === 'rtl' ? this.setNextItemActive() : this.setPreviousItemActive();
          break;
        } else {
          return;
        }
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.HOME:
        if (this._homeAndEnd && isModifierAllowed) {
          this.setFirstItemActive();
          break;
        } else {
          return;
        }
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.END:
        if (this._homeAndEnd && isModifierAllowed) {
          this.setLastItemActive();
          break;
        } else {
          return;
        }
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.PAGE_UP:
        if (this._pageUpAndDown.enabled && isModifierAllowed) {
          const targetIndex = this._activeItemIndex - this._pageUpAndDown.delta;
          this._setActiveItemByIndex(targetIndex > 0 ? targetIndex : 0, 1);
          break;
        } else {
          return;
        }
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.PAGE_DOWN:
        if (this._pageUpAndDown.enabled && isModifierAllowed) {
          const targetIndex = this._activeItemIndex + this._pageUpAndDown.delta;
          const itemsLength = this._getItemsArray().length;
          this._setActiveItemByIndex(targetIndex < itemsLength ? targetIndex : itemsLength - 1, -1);
          break;
        } else {
          return;
        }
      default:
        if (isModifierAllowed || (0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.hasModifierKey)(event, 'shiftKey')) {
          this._typeahead?.handleKey(event);
        }
        // Note that we return here, in order to avoid preventing
        // the default action of non-navigational keys.
        return;
    }
    this._typeahead?.reset();
    event.preventDefault();
  }
  /** Index of the currently active item. */
  get activeItemIndex() {
    return this._activeItemIndex;
  }
  /** The active item. */
  get activeItem() {
    return this._activeItem;
  }
  /** Gets whether the user is currently typing into the manager using the typeahead feature. */
  isTyping() {
    return !!this._typeahead && this._typeahead.isTyping();
  }
  /** Sets the active item to the first enabled item in the list. */
  setFirstItemActive() {
    this._setActiveItemByIndex(0, 1);
  }
  /** Sets the active item to the last enabled item in the list. */
  setLastItemActive() {
    this._setActiveItemByIndex(this._getItemsArray().length - 1, -1);
  }
  /** Sets the active item to the next enabled item in the list. */
  setNextItemActive() {
    this._activeItemIndex < 0 ? this.setFirstItemActive() : this._setActiveItemByDelta(1);
  }
  /** Sets the active item to a previous enabled item in the list. */
  setPreviousItemActive() {
    this._activeItemIndex < 0 && this._wrap ? this.setLastItemActive() : this._setActiveItemByDelta(-1);
  }
  updateActiveItem(item) {
    const itemArray = this._getItemsArray();
    const index = typeof item === 'number' ? item : itemArray.indexOf(item);
    const activeItem = itemArray[index];
    // Explicitly check for `null` and `undefined` because other falsy values are valid.
    this._activeItem = activeItem == null ? null : activeItem;
    this._activeItemIndex = index;
    this._typeahead?.setCurrentSelectedItemIndex(index);
  }
  /** Cleans up the key manager. */
  destroy() {
    this._typeaheadSubscription.unsubscribe();
    this._itemChangesSubscription?.unsubscribe();
    this._effectRef?.destroy();
    this._typeahead?.destroy();
    this.tabOut.complete();
    this.change.complete();
  }
  /**
   * This method sets the active item, given a list of items and the delta between the
   * currently active item and the new active item. It will calculate differently
   * depending on whether wrap mode is turned on.
   */
  _setActiveItemByDelta(delta) {
    this._wrap ? this._setActiveInWrapMode(delta) : this._setActiveInDefaultMode(delta);
  }
  /**
   * Sets the active item properly given "wrap" mode. In other words, it will continue to move
   * down the list until it finds an item that is not disabled, and it will wrap if it
   * encounters either end of the list.
   */
  _setActiveInWrapMode(delta) {
    const items = this._getItemsArray();
    for (let i = 1; i <= items.length; i++) {
      const index = (this._activeItemIndex + delta * i + items.length) % items.length;
      const item = items[index];
      if (!this._skipPredicateFn(item)) {
        this.setActiveItem(index);
        return;
      }
    }
  }
  /**
   * Sets the active item properly given the default mode. In other words, it will
   * continue to move down the list until it finds an item that is not disabled. If
   * it encounters either end of the list, it will stop and not wrap.
   */
  _setActiveInDefaultMode(delta) {
    this._setActiveItemByIndex(this._activeItemIndex + delta, delta);
  }
  /**
   * Sets the active item to the first enabled item starting at the index specified. If the
   * item is disabled, it will move in the fallbackDelta direction until it either
   * finds an enabled item or encounters the end of the list.
   */
  _setActiveItemByIndex(index, fallbackDelta) {
    const items = this._getItemsArray();
    if (!items[index]) {
      return;
    }
    while (this._skipPredicateFn(items[index])) {
      index += fallbackDelta;
      if (!items[index]) {
        return;
      }
    }
    this.setActiveItem(index);
  }
  /** Returns the items as an array. */
  _getItemsArray() {
    if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.isSignal)(this._items)) {
      return this._items();
    }
    return this._items instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.QueryList ? this._items.toArray() : this._items;
  }
  /** Callback for when the items have changed. */
  _itemsChanged(newItems) {
    this._typeahead?.setItems(newItems);
    if (this._activeItem) {
      const newIndex = newItems.indexOf(this._activeItem);
      if (newIndex > -1 && newIndex !== this._activeItemIndex) {
        this._activeItemIndex = newIndex;
        this._typeahead?.setCurrentSelectedItemIndex(newIndex);
      }
    }
  }
}
class ActiveDescendantKeyManager extends ListKeyManager {
  setActiveItem(index) {
    if (this.activeItem) {
      this.activeItem.setInactiveStyles();
    }
    super.setActiveItem(index);
    if (this.activeItem) {
      this.activeItem.setActiveStyles();
    }
  }
}
class FocusKeyManager extends ListKeyManager {
  constructor() {
    super(...arguments);
    this._origin = 'program';
  }
  /**
   * Sets the focus origin that will be passed in to the items for any subsequent `focus` calls.
   * @param origin Focus origin to be used when focusing items.
   */
  setFocusOrigin(origin) {
    this._origin = origin;
    return this;
  }
  setActiveItem(item) {
    super.setActiveItem(item);
    if (this.activeItem) {
      this.activeItem.focus(this._origin);
    }
  }
}

/**
 * This class manages keyboard events for trees. If you pass it a QueryList or other list of tree
 * items, it will set the active item, focus, handle expansion and typeahead correctly when
 * keyboard events occur.
 */
class TreeKeyManager {
  _initializeFocus() {
    if (this._hasInitialFocused || this._items.length === 0) {
      return;
    }
    let activeIndex = 0;
    for (let i = 0; i < this._items.length; i++) {
      if (!this._skipPredicateFn(this._items[i]) && !this._isItemDisabled(this._items[i])) {
        activeIndex = i;
        break;
      }
    }
    const activeItem = this._items[activeIndex];
    // Use `makeFocusable` here, because we want the item to just be focusable, not actually
    // capture the focus since the user isn't interacting with it. See #29628.
    if (activeItem.makeFocusable) {
      this._activeItem?.unfocus();
      this._activeItemIndex = activeIndex;
      this._activeItem = activeItem;
      this._typeahead?.setCurrentSelectedItemIndex(activeIndex);
      activeItem.makeFocusable();
    } else {
      // Backwards compatibility for items that don't implement `makeFocusable`.
      this.focusItem(activeIndex);
    }
    this._hasInitialFocused = true;
  }
  /**
   *
   * @param items List of TreeKeyManager options. Can be synchronous or asynchronous.
   * @param config Optional configuration options. By default, use 'ltr' horizontal orientation. By
   * default, do not skip any nodes. By default, key manager only calls `focus` method when items
   * are focused and does not call `activate`. If `typeaheadDefaultInterval` is `true`, use a
   * default interval of 200ms.
   */
  constructor(items, config) {
    /** The index of the currently active (focused) item. */
    this._activeItemIndex = -1;
    /** The currently active (focused) item. */
    this._activeItem = null;
    /** Whether or not we activate the item when it's focused. */
    this._shouldActivationFollowFocus = false;
    /**
     * The orientation that the tree is laid out in. In `rtl` mode, the behavior of Left and
     * Right arrow are switched.
     */
    this._horizontalOrientation = 'ltr';
    /**
     * Predicate function that can be used to check whether an item should be skipped
     * by the key manager.
     *
     * The default value for this doesn't skip any elements in order to keep tree items focusable
     * when disabled. This aligns with ARIA guidelines:
     * https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#focusabilityofdisabledcontrols.
     */
    this._skipPredicateFn = _item => false;
    /** Function to determine equivalent items. */
    this._trackByFn = item => item;
    /** Synchronous cache of the items to manage. */
    this._items = [];
    this._typeaheadSubscription = rxjs__WEBPACK_IMPORTED_MODULE_9__.Subscription.EMPTY;
    this._hasInitialFocused = false;
    /** Stream that emits any time the focused item changes. */
    this.change = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    // We allow for the items to be an array or Observable because, in some cases, the consumer may
    // not have access to a QueryList of the items they want to manage (e.g. when the
    // items aren't being collected via `ViewChildren` or `ContentChildren`).
    if (items instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.QueryList) {
      this._items = items.toArray();
      items.changes.subscribe(newItems => {
        this._items = newItems.toArray();
        this._typeahead?.setItems(this._items);
        this._updateActiveItemIndex(this._items);
        this._initializeFocus();
      });
    } else if ((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.isObservable)(items)) {
      items.subscribe(newItems => {
        this._items = newItems;
        this._typeahead?.setItems(newItems);
        this._updateActiveItemIndex(newItems);
        this._initializeFocus();
      });
    } else {
      this._items = items;
      this._initializeFocus();
    }
    if (typeof config.shouldActivationFollowFocus === 'boolean') {
      this._shouldActivationFollowFocus = config.shouldActivationFollowFocus;
    }
    if (config.horizontalOrientation) {
      this._horizontalOrientation = config.horizontalOrientation;
    }
    if (config.skipPredicate) {
      this._skipPredicateFn = config.skipPredicate;
    }
    if (config.trackBy) {
      this._trackByFn = config.trackBy;
    }
    if (typeof config.typeAheadDebounceInterval !== 'undefined') {
      this._setTypeAhead(config.typeAheadDebounceInterval);
    }
  }
  /** Cleans up the key manager. */
  destroy() {
    this._typeaheadSubscription.unsubscribe();
    this._typeahead?.destroy();
    this.change.complete();
  }
  /**
   * Handles a keyboard event on the tree.
   * @param event Keyboard event that represents the user interaction with the tree.
   */
  onKeydown(event) {
    const key = event.key;
    switch (key) {
      case 'Tab':
        // Return early here, in order to allow Tab to actually tab out of the tree
        return;
      case 'ArrowDown':
        this._focusNextItem();
        break;
      case 'ArrowUp':
        this._focusPreviousItem();
        break;
      case 'ArrowRight':
        this._horizontalOrientation === 'rtl' ? this._collapseCurrentItem() : this._expandCurrentItem();
        break;
      case 'ArrowLeft':
        this._horizontalOrientation === 'rtl' ? this._expandCurrentItem() : this._collapseCurrentItem();
        break;
      case 'Home':
        this._focusFirstItem();
        break;
      case 'End':
        this._focusLastItem();
        break;
      case 'Enter':
      case ' ':
        this._activateCurrentItem();
        break;
      default:
        if (event.key === '*') {
          this._expandAllItemsAtCurrentItemLevel();
          break;
        }
        this._typeahead?.handleKey(event);
        // Return here, in order to avoid preventing the default action of non-navigational
        // keys or resetting the buffer of pressed letters.
        return;
    }
    // Reset the typeahead since the user has used a navigational key.
    this._typeahead?.reset();
    event.preventDefault();
  }
  /** Index of the currently active item. */
  getActiveItemIndex() {
    return this._activeItemIndex;
  }
  /** The currently active item. */
  getActiveItem() {
    return this._activeItem;
  }
  /** Focus the first available item. */
  _focusFirstItem() {
    this.focusItem(this._findNextAvailableItemIndex(-1));
  }
  /** Focus the last available item. */
  _focusLastItem() {
    this.focusItem(this._findPreviousAvailableItemIndex(this._items.length));
  }
  /** Focus the next available item. */
  _focusNextItem() {
    this.focusItem(this._findNextAvailableItemIndex(this._activeItemIndex));
  }
  /** Focus the previous available item. */
  _focusPreviousItem() {
    this.focusItem(this._findPreviousAvailableItemIndex(this._activeItemIndex));
  }
  focusItem(itemOrIndex, options = {}) {
    // Set default options
    options.emitChangeEvent ??= true;
    let index = typeof itemOrIndex === 'number' ? itemOrIndex : this._items.findIndex(item => this._trackByFn(item) === this._trackByFn(itemOrIndex));
    if (index < 0 || index >= this._items.length) {
      return;
    }
    const activeItem = this._items[index];
    // If we're just setting the same item, don't re-call activate or focus
    if (this._activeItem !== null && this._trackByFn(activeItem) === this._trackByFn(this._activeItem)) {
      return;
    }
    const previousActiveItem = this._activeItem;
    this._activeItem = activeItem ?? null;
    this._activeItemIndex = index;
    this._typeahead?.setCurrentSelectedItemIndex(index);
    this._activeItem?.focus();
    previousActiveItem?.unfocus();
    if (options.emitChangeEvent) {
      this.change.next(this._activeItem);
    }
    if (this._shouldActivationFollowFocus) {
      this._activateCurrentItem();
    }
  }
  _updateActiveItemIndex(newItems) {
    const activeItem = this._activeItem;
    if (!activeItem) {
      return;
    }
    const newIndex = newItems.findIndex(item => this._trackByFn(item) === this._trackByFn(activeItem));
    if (newIndex > -1 && newIndex !== this._activeItemIndex) {
      this._activeItemIndex = newIndex;
      this._typeahead?.setCurrentSelectedItemIndex(newIndex);
    }
  }
  _setTypeAhead(debounceInterval) {
    this._typeahead = new Typeahead(this._items, {
      debounceInterval: typeof debounceInterval === 'number' ? debounceInterval : undefined,
      skipPredicate: item => this._skipPredicateFn(item)
    });
    this._typeaheadSubscription = this._typeahead.selectedItem.subscribe(item => {
      this.focusItem(item);
    });
  }
  _findNextAvailableItemIndex(startingIndex) {
    for (let i = startingIndex + 1; i < this._items.length; i++) {
      if (!this._skipPredicateFn(this._items[i])) {
        return i;
      }
    }
    return startingIndex;
  }
  _findPreviousAvailableItemIndex(startingIndex) {
    for (let i = startingIndex - 1; i >= 0; i--) {
      if (!this._skipPredicateFn(this._items[i])) {
        return i;
      }
    }
    return startingIndex;
  }
  /**
   * If the item is already expanded, we collapse the item. Otherwise, we will focus the parent.
   */
  _collapseCurrentItem() {
    if (!this._activeItem) {
      return;
    }
    if (this._isCurrentItemExpanded()) {
      this._activeItem.collapse();
    } else {
      const parent = this._activeItem.getParent();
      if (!parent || this._skipPredicateFn(parent)) {
        return;
      }
      this.focusItem(parent);
    }
  }
  /**
   * If the item is already collapsed, we expand the item. Otherwise, we will focus the first child.
   */
  _expandCurrentItem() {
    if (!this._activeItem) {
      return;
    }
    if (!this._isCurrentItemExpanded()) {
      this._activeItem.expand();
    } else {
      (0,_angular_cdk_coercion_private__WEBPACK_IMPORTED_MODULE_11__.coerceObservable)(this._activeItem.getChildren()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.take)(1)).subscribe(children => {
        const firstChild = children.find(child => !this._skipPredicateFn(child));
        if (!firstChild) {
          return;
        }
        this.focusItem(firstChild);
      });
    }
  }
  _isCurrentItemExpanded() {
    if (!this._activeItem) {
      return false;
    }
    return typeof this._activeItem.isExpanded === 'boolean' ? this._activeItem.isExpanded : this._activeItem.isExpanded();
  }
  _isItemDisabled(item) {
    return typeof item.isDisabled === 'boolean' ? item.isDisabled : item.isDisabled?.();
  }
  /** For all items that are the same level as the current item, we expand those items. */
  _expandAllItemsAtCurrentItemLevel() {
    if (!this._activeItem) {
      return;
    }
    const parent = this._activeItem.getParent();
    let itemsToExpand;
    if (!parent) {
      itemsToExpand = (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.of)(this._items.filter(item => item.getParent() === null));
    } else {
      itemsToExpand = (0,_angular_cdk_coercion_private__WEBPACK_IMPORTED_MODULE_11__.coerceObservable)(parent.getChildren());
    }
    itemsToExpand.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.take)(1)).subscribe(items => {
      for (const item of items) {
        item.expand();
      }
    });
  }
  _activateCurrentItem() {
    this._activeItem?.activate();
  }
}
/** @docs-private */
function TREE_KEY_MANAGER_FACTORY() {
  return (items, options) => new TreeKeyManager(items, options);
}
/** Injection token that determines the key manager to use. */
const TREE_KEY_MANAGER = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('tree-key-manager', {
  providedIn: 'root',
  factory: TREE_KEY_MANAGER_FACTORY
});
/** @docs-private */
const TREE_KEY_MANAGER_FACTORY_PROVIDER = {
  provide: TREE_KEY_MANAGER,
  useFactory: TREE_KEY_MANAGER_FACTORY
};

// NoopTreeKeyManager is a "noop" implementation of TreeKeyMangerStrategy. Methods are noops. Does
// not emit to streams.
//
// Used for applications built before TreeKeyManager to opt-out of TreeKeyManager and revert to
// legacy behavior.
/**
 * @docs-private
 *
 * Opt-out of Tree of key manager behavior.
 *
 * When provided, Tree has same focus management behavior as before TreeKeyManager was introduced.
 *  - Tree does not respond to keyboard interaction
 *  - Tree node allows tabindex to be set by Input binding
 *  - Tree node allows tabindex to be set by attribute binding
 *
 * @deprecated NoopTreeKeyManager deprecated. Use TreeKeyManager or inject a
 * TreeKeyManagerStrategy instead. To be removed in a future version.
 *
 * @breaking-change 21.0.0
 */
class NoopTreeKeyManager {
  constructor() {
    this._isNoopTreeKeyManager = true;
    // Provide change as required by TreeKeyManagerStrategy. NoopTreeKeyManager is a "noop"
    // implementation that does not emit to streams.
    this.change = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
  }
  destroy() {
    this.change.complete();
  }
  onKeydown() {
    // noop
  }
  getActiveItemIndex() {
    // Always return null. NoopTreeKeyManager is a "noop" implementation that does not maintain
    // the active item.
    return null;
  }
  getActiveItem() {
    // Always return null. NoopTreeKeyManager is a "noop" implementation that does not maintain
    // the active item.
    return null;
  }
  focusItem() {
    // noop
  }
}
/**
 * @docs-private
 *
 * Opt-out of Tree of key manager behavior.
 *
 * When provided, Tree has same focus management behavior as before TreeKeyManager was introduced.
 *  - Tree does not respond to keyboard interaction
 *  - Tree node allows tabindex to be set by Input binding
 *  - Tree node allows tabindex to be set by attribute binding
 *
 * @deprecated NoopTreeKeyManager deprecated. Use TreeKeyManager or inject a
 * TreeKeyManagerStrategy instead. To be removed in a future version.
 *
 * @breaking-change 21.0.0
 */
function NOOP_TREE_KEY_MANAGER_FACTORY() {
  return () => new NoopTreeKeyManager();
}
/**
 * @docs-private
 *
 * Opt-out of Tree of key manager behavior.
 *
 * When provided, Tree has same focus management behavior as before TreeKeyManager was introduced.
 *  - Tree does not respond to keyboard interaction
 *  - Tree node allows tabindex to be set by Input binding
 *  - Tree node allows tabindex to be set by attribute binding
 *
 * @deprecated NoopTreeKeyManager deprecated. Use TreeKeyManager or inject a
 * TreeKeyManagerStrategy instead. To be removed in a future version.
 *
 * @breaking-change 21.0.0
 */
const NOOP_TREE_KEY_MANAGER_FACTORY_PROVIDER = {
  provide: TREE_KEY_MANAGER,
  useFactory: NOOP_TREE_KEY_MANAGER_FACTORY
};

/**
 * Configuration for the isFocusable method.
 */
class IsFocusableConfig {
  constructor() {
    /**
     * Whether to count an element as focusable even if it is not currently visible.
     */
    this.ignoreVisibility = false;
  }
}
// The InteractivityChecker leans heavily on the ally.js accessibility utilities.
// Methods like `isTabbable` are only covering specific edge-cases for the browsers which are
// supported.
/**
 * Utility for checking the interactivity of an element, such as whether it is focusable or
 * tabbable.
 */
class InteractivityChecker {
  constructor(_platform) {
    this._platform = _platform;
  }
  /**
   * Gets whether an element is disabled.
   *
   * @param element Element to be checked.
   * @returns Whether the element is disabled.
   */
  isDisabled(element) {
    // This does not capture some cases, such as a non-form control with a disabled attribute or
    // a form control inside of a disabled form, but should capture the most common cases.
    return element.hasAttribute('disabled');
  }
  /**
   * Gets whether an element is visible for the purposes of interactivity.
   *
   * This will capture states like `display: none` and `visibility: hidden`, but not things like
   * being clipped by an `overflow: hidden` parent or being outside the viewport.
   *
   * @returns Whether the element is visible.
   */
  isVisible(element) {
    return hasGeometry(element) && getComputedStyle(element).visibility === 'visible';
  }
  /**
   * Gets whether an element can be reached via Tab key.
   * Assumes that the element has already been checked with isFocusable.
   *
   * @param element Element to be checked.
   * @returns Whether the element is tabbable.
   */
  isTabbable(element) {
    // Nothing is tabbable on the server 😎
    if (!this._platform.isBrowser) {
      return false;
    }
    const frameElement = getFrameElement(getWindow(element));
    if (frameElement) {
      // Frame elements inherit their tabindex onto all child elements.
      if (getTabIndexValue(frameElement) === -1) {
        return false;
      }
      // Browsers disable tabbing to an element inside of an invisible frame.
      if (!this.isVisible(frameElement)) {
        return false;
      }
    }
    let nodeName = element.nodeName.toLowerCase();
    let tabIndexValue = getTabIndexValue(element);
    if (element.hasAttribute('contenteditable')) {
      return tabIndexValue !== -1;
    }
    if (nodeName === 'iframe' || nodeName === 'object') {
      // The frame or object's content may be tabbable depending on the content, but it's
      // not possibly to reliably detect the content of the frames. We always consider such
      // elements as non-tabbable.
      return false;
    }
    // In iOS, the browser only considers some specific elements as tabbable.
    if (this._platform.WEBKIT && this._platform.IOS && !isPotentiallyTabbableIOS(element)) {
      return false;
    }
    if (nodeName === 'audio') {
      // Audio elements without controls enabled are never tabbable, regardless
      // of the tabindex attribute explicitly being set.
      if (!element.hasAttribute('controls')) {
        return false;
      }
      // Audio elements with controls are by default tabbable unless the
      // tabindex attribute is set to `-1` explicitly.
      return tabIndexValue !== -1;
    }
    if (nodeName === 'video') {
      // For all video elements, if the tabindex attribute is set to `-1`, the video
      // is not tabbable. Note: We cannot rely on the default `HTMLElement.tabIndex`
      // property as that one is set to `-1` in Chrome, Edge and Safari v13.1. The
      // tabindex attribute is the source of truth here.
      if (tabIndexValue === -1) {
        return false;
      }
      // If the tabindex is explicitly set, and not `-1` (as per check before), the
      // video element is always tabbable (regardless of whether it has controls or not).
      if (tabIndexValue !== null) {
        return true;
      }
      // Otherwise (when no explicit tabindex is set), a video is only tabbable if it
      // has controls enabled. Firefox is special as videos are always tabbable regardless
      // of whether there are controls or not.
      return this._platform.FIREFOX || element.hasAttribute('controls');
    }
    return element.tabIndex >= 0;
  }
  /**
   * Gets whether an element can be focused by the user.
   *
   * @param element Element to be checked.
   * @param config The config object with options to customize this method's behavior
   * @returns Whether the element is focusable.
   */
  isFocusable(element, config) {
    // Perform checks in order of left to most expensive.
    // Again, naive approach that does not capture many edge cases and browser quirks.
    return isPotentiallyFocusable(element) && !this.isDisabled(element) && (config?.ignoreVisibility || this.isVisible(element));
  }
  static {
    this.ɵfac = function InteractivityChecker_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || InteractivityChecker)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.Platform));
    };
  }
  static {
    this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: InteractivityChecker,
      factory: InteractivityChecker.ɵfac,
      providedIn: 'root'
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InteractivityChecker, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], () => [{
    type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.Platform
  }], null);
})();
/**
 * Returns the frame element from a window object. Since browsers like MS Edge throw errors if
 * the frameElement property is being accessed from a different host address, this property
 * should be accessed carefully.
 */
function getFrameElement(window) {
  try {
    return window.frameElement;
  } catch {
    return null;
  }
}
/** Checks whether the specified element has any geometry / rectangles. */
function hasGeometry(element) {
  // Use logic from jQuery to check for an invisible element.
  // See https://github.com/jquery/jquery/blob/master/src/css/hiddenVisibleSelectors.js#L12
  return !!(element.offsetWidth || element.offsetHeight || typeof element.getClientRects === 'function' && element.getClientRects().length);
}
/** Gets whether an element's  */
function isNativeFormElement(element) {
  let nodeName = element.nodeName.toLowerCase();
  return nodeName === 'input' || nodeName === 'select' || nodeName === 'button' || nodeName === 'textarea';
}
/** Gets whether an element is an `<input type="hidden">`. */
function isHiddenInput(element) {
  return isInputElement(element) && element.type == 'hidden';
}
/** Gets whether an element is an anchor that has an href attribute. */
function isAnchorWithHref(element) {
  return isAnchorElement(element) && element.hasAttribute('href');
}
/** Gets whether an element is an input element. */
function isInputElement(element) {
  return element.nodeName.toLowerCase() == 'input';
}
/** Gets whether an element is an anchor element. */
function isAnchorElement(element) {
  return element.nodeName.toLowerCase() == 'a';
}
/** Gets whether an element has a valid tabindex. */
function hasValidTabIndex(element) {
  if (!element.hasAttribute('tabindex') || element.tabIndex === undefined) {
    return false;
  }
  let tabIndex = element.getAttribute('tabindex');
  return !!(tabIndex && !isNaN(parseInt(tabIndex, 10)));
}
/**
 * Returns the parsed tabindex from the element attributes instead of returning the
 * evaluated tabindex from the browsers defaults.
 */
function getTabIndexValue(element) {
  if (!hasValidTabIndex(element)) {
    return null;
  }
  // See browser issue in Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=1128054
  const tabIndex = parseInt(element.getAttribute('tabindex') || '', 10);
  return isNaN(tabIndex) ? -1 : tabIndex;
}
/** Checks whether the specified element is potentially tabbable on iOS */
function isPotentiallyTabbableIOS(element) {
  let nodeName = element.nodeName.toLowerCase();
  let inputType = nodeName === 'input' && element.type;
  return inputType === 'text' || inputType === 'password' || nodeName === 'select' || nodeName === 'textarea';
}
/**
 * Gets whether an element is potentially focusable without taking current visible/disabled state
 * into account.
 */
function isPotentiallyFocusable(element) {
  // Inputs are potentially focusable *unless* they're type="hidden".
  if (isHiddenInput(element)) {
    return false;
  }
  return isNativeFormElement(element) || isAnchorWithHref(element) || element.hasAttribute('contenteditable') || hasValidTabIndex(element);
}
/** Gets the parent window of a DOM node with regards of being inside of an iframe. */
function getWindow(node) {
  // ownerDocument is null if `node` itself *is* a document.
  return node.ownerDocument && node.ownerDocument.defaultView || window;
}

/**
 * Class that allows for trapping focus within a DOM element.
 *
 * This class currently uses a relatively simple approach to focus trapping.
 * It assumes that the tab order is the same as DOM order, which is not necessarily true.
 * Things like `tabIndex > 0`, flex `order`, and shadow roots can cause the two to be misaligned.
 */
class FocusTrap {
  /** Whether the focus trap is active. */
  get enabled() {
    return this._enabled;
  }
  set enabled(value) {
    this._enabled = value;
    if (this._startAnchor && this._endAnchor) {
      this._toggleAnchorTabIndex(value, this._startAnchor);
      this._toggleAnchorTabIndex(value, this._endAnchor);
    }
  }
  constructor(_element, _checker, _ngZone, _document, deferAnchors = false, /** @breaking-change 20.0.0 param to become required */
  _injector) {
    this._element = _element;
    this._checker = _checker;
    this._ngZone = _ngZone;
    this._document = _document;
    this._injector = _injector;
    this._hasAttached = false;
    // Event listeners for the anchors. Need to be regular functions so that we can unbind them later.
    this.startAnchorListener = () => this.focusLastTabbableElement();
    this.endAnchorListener = () => this.focusFirstTabbableElement();
    this._enabled = true;
    if (!deferAnchors) {
      this.attachAnchors();
    }
  }
  /** Destroys the focus trap by cleaning up the anchors. */
  destroy() {
    const startAnchor = this._startAnchor;
    const endAnchor = this._endAnchor;
    if (startAnchor) {
      startAnchor.removeEventListener('focus', this.startAnchorListener);
      startAnchor.remove();
    }
    if (endAnchor) {
      endAnchor.removeEventListener('focus', this.endAnchorListener);
      endAnchor.remove();
    }
    this._startAnchor = this._endAnchor = null;
    this._hasAttached = false;
  }
  /**
   * Inserts the anchors into the DOM. This is usually done automatically
   * in the constructor, but can be deferred for cases like directives with `*ngIf`.
   * @returns Whether the focus trap managed to attach successfully. This may not be the case
   * if the target element isn't currently in the DOM.
   */
  attachAnchors() {
    // If we're not on the browser, there can be no focus to trap.
    if (this._hasAttached) {
      return true;
    }
    this._ngZone.runOutsideAngular(() => {
      if (!this._startAnchor) {
        this._startAnchor = this._createAnchor();
        this._startAnchor.addEventListener('focus', this.startAnchorListener);
      }
      if (!this._endAnchor) {
        this._endAnchor = this._createAnchor();
        this._endAnchor.addEventListener('focus', this.endAnchorListener);
      }
    });
    if (this._element.parentNode) {
      this._element.parentNode.insertBefore(this._startAnchor, this._element);
      this._element.parentNode.insertBefore(this._endAnchor, this._element.nextSibling);
      this._hasAttached = true;
    }
    return this._hasAttached;
  }
  /**
   * Waits for the zone to stabilize, then focuses the first tabbable element.
   * @returns Returns a promise that resolves with a boolean, depending
   * on whether focus was moved successfully.
   */
  focusInitialElementWhenReady(options) {
    return new Promise(resolve => {
      this._executeOnStable(() => resolve(this.focusInitialElement(options)));
    });
  }
  /**
   * Waits for the zone to stabilize, then focuses
   * the first tabbable element within the focus trap region.
   * @returns Returns a promise that resolves with a boolean, depending
   * on whether focus was moved successfully.
   */
  focusFirstTabbableElementWhenReady(options) {
    return new Promise(resolve => {
      this._executeOnStable(() => resolve(this.focusFirstTabbableElement(options)));
    });
  }
  /**
   * Waits for the zone to stabilize, then focuses
   * the last tabbable element within the focus trap region.
   * @returns Returns a promise that resolves with a boolean, depending
   * on whether focus was moved successfully.
   */
  focusLastTabbableElementWhenReady(options) {
    return new Promise(resolve => {
      this._executeOnStable(() => resolve(this.focusLastTabbableElement(options)));
    });
  }
  /**
   * Get the specified boundary element of the trapped region.
   * @param bound The boundary to get (start or end of trapped region).
   * @returns The boundary element.
   */
  _getRegionBoundary(bound) {
    // Contains the deprecated version of selector, for temporary backwards comparability.
    const markers = this._element.querySelectorAll(`[cdk-focus-region-${bound}], ` + `[cdkFocusRegion${bound}], ` + `[cdk-focus-${bound}]`);
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      for (let i = 0; i < markers.length; i++) {
        // @breaking-change 8.0.0
        if (markers[i].hasAttribute(`cdk-focus-${bound}`)) {
          console.warn(`Found use of deprecated attribute 'cdk-focus-${bound}', ` + `use 'cdkFocusRegion${bound}' instead. The deprecated ` + `attribute will be removed in 8.0.0.`, markers[i]);
        } else if (markers[i].hasAttribute(`cdk-focus-region-${bound}`)) {
          console.warn(`Found use of deprecated attribute 'cdk-focus-region-${bound}', ` + `use 'cdkFocusRegion${bound}' instead. The deprecated attribute ` + `will be removed in 8.0.0.`, markers[i]);
        }
      }
    }
    if (bound == 'start') {
      return markers.length ? markers[0] : this._getFirstTabbableElement(this._element);
    }
    return markers.length ? markers[markers.length - 1] : this._getLastTabbableElement(this._element);
  }
  /**
   * Focuses the element that should be focused when the focus trap is initialized.
   * @returns Whether focus was moved successfully.
   */
  focusInitialElement(options) {
    // Contains the deprecated version of selector, for temporary backwards comparability.
    const redirectToElement = this._element.querySelector(`[cdk-focus-initial], ` + `[cdkFocusInitial]`);
    if (redirectToElement) {
      // @breaking-change 8.0.0
      if ((typeof ngDevMode === 'undefined' || ngDevMode) && redirectToElement.hasAttribute(`cdk-focus-initial`)) {
        console.warn(`Found use of deprecated attribute 'cdk-focus-initial', ` + `use 'cdkFocusInitial' instead. The deprecated attribute ` + `will be removed in 8.0.0`, redirectToElement);
      }
      // Warn the consumer if the element they've pointed to
      // isn't focusable, when not in production mode.
      if ((typeof ngDevMode === 'undefined' || ngDevMode) && !this._checker.isFocusable(redirectToElement)) {
        console.warn(`Element matching '[cdkFocusInitial]' is not focusable.`, redirectToElement);
      }
      if (!this._checker.isFocusable(redirectToElement)) {
        const focusableChild = this._getFirstTabbableElement(redirectToElement);
        focusableChild?.focus(options);
        return !!focusableChild;
      }
      redirectToElement.focus(options);
      return true;
    }
    return this.focusFirstTabbableElement(options);
  }
  /**
   * Focuses the first tabbable element within the focus trap region.
   * @returns Whether focus was moved successfully.
   */
  focusFirstTabbableElement(options) {
    const redirectToElement = this._getRegionBoundary('start');
    if (redirectToElement) {
      redirectToElement.focus(options);
    }
    return !!redirectToElement;
  }
  /**
   * Focuses the last tabbable element within the focus trap region.
   * @returns Whether focus was moved successfully.
   */
  focusLastTabbableElement(options) {
    const redirectToElement = this._getRegionBoundary('end');
    if (redirectToElement) {
      redirectToElement.focus(options);
    }
    return !!redirectToElement;
  }
  /**
   * Checks whether the focus trap has successfully been attached.
   */
  hasAttached() {
    return this._hasAttached;
  }
  /** Get the first tabbable element from a DOM subtree (inclusive). */
  _getFirstTabbableElement(root) {
    if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
      return root;
    }
    const children = root.children;
    for (let i = 0; i < children.length; i++) {
      const tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ? this._getFirstTabbableElement(children[i]) : null;
      if (tabbableChild) {
        return tabbableChild;
      }
    }
    return null;
  }
  /** Get the last tabbable element from a DOM subtree (inclusive). */
  _getLastTabbableElement(root) {
    if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
      return root;
    }
    // Iterate in reverse DOM order.
    const children = root.children;
    for (let i = children.length - 1; i >= 0; i--) {
      const tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ? this._getLastTabbableElement(children[i]) : null;
      if (tabbableChild) {
        return tabbableChild;
      }
    }
    return null;
  }
  /** Creates an anchor element. */
  _createAnchor() {
    const anchor = this._document.createElement('div');
    this._toggleAnchorTabIndex(this._enabled, anchor);
    anchor.classList.add('cdk-visually-hidden');
    anchor.classList.add('cdk-focus-trap-anchor');
    anchor.setAttribute('aria-hidden', 'true');
    return anchor;
  }
  /**
   * Toggles the `tabindex` of an anchor, based on the enabled state of the focus trap.
   * @param isEnabled Whether the focus trap is enabled.
   * @param anchor Anchor on which to toggle the tabindex.
   */
  _toggleAnchorTabIndex(isEnabled, anchor) {
    // Remove the tabindex completely, rather than setting it to -1, because if the
    // element has a tabindex, the user might still hit it when navigating with the arrow keys.
    isEnabled ? anchor.setAttribute('tabindex', '0') : anchor.removeAttribute('tabindex');
  }
  /**
   * Toggles the`tabindex` of both anchors to either trap Tab focus or allow it to escape.
   * @param enabled: Whether the anchors should trap Tab.
   */
  toggleAnchors(enabled) {
    if (this._startAnchor && this._endAnchor) {
      this._toggleAnchorTabIndex(enabled, this._startAnchor);
      this._toggleAnchorTabIndex(enabled, this._endAnchor);
    }
  }
  /** Executes a function when the zone is stable. */
  _executeOnStable(fn) {
    // TODO: remove this conditional when injector is required in the constructor.
    if (this._injector) {
      (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.afterNextRender)(fn, {
        injector: this._injector
      });
    } else {
      setTimeout(fn);
    }
  }
}
/**
 * Factory that allows easy instantiation of focus traps.
 */
class FocusTrapFactory {
  constructor(_checker, _ngZone, _document) {
    this._checker = _checker;
    this._ngZone = _ngZone;
    this._injector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector);
    this._document = _document;
  }
  /**
   * Creates a focus-trapped region around the given element.
   * @param element The element around which focus will be trapped.
   * @param deferCaptureElements Defers the creation of focus-capturing elements to be done
   *     manually by the user.
   * @returns The created focus trap instance.
   */
  create(element, deferCaptureElements = false) {
    return new FocusTrap(element, this._checker, this._ngZone, this._document, deferCaptureElements, this._injector);
  }
  static {
    this.ɵfac = function FocusTrapFactory_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FocusTrapFactory)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](InteractivityChecker), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
    };
  }
  static {
    this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: FocusTrapFactory,
      factory: FocusTrapFactory.ɵfac,
      providedIn: 'root'
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FocusTrapFactory, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], () => [{
    type: InteractivityChecker
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
    }]
  }], null);
})();
/** Directive for trapping focus within a region. */
class CdkTrapFocus {
  /** Whether the focus trap is active. */
  get enabled() {
    return this.focusTrap?.enabled || false;
  }
  set enabled(value) {
    if (this.focusTrap) {
      this.focusTrap.enabled = value;
    }
  }
  constructor(_elementRef, _focusTrapFactory,
  /**
   * @deprecated No longer being used. To be removed.
   * @breaking-change 13.0.0
   */
  _document) {
    this._elementRef = _elementRef;
    this._focusTrapFactory = _focusTrapFactory;
    /** Previously focused element to restore focus to upon destroy when using autoCapture. */
    this._previouslyFocusedElement = null;
    const platform = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.Platform);
    if (platform.isBrowser) {
      this.focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement, true);
    }
  }
  ngOnDestroy() {
    this.focusTrap?.destroy();
    // If we stored a previously focused element when using autoCapture, return focus to that
    // element now that the trapped region is being destroyed.
    if (this._previouslyFocusedElement) {
      this._previouslyFocusedElement.focus();
      this._previouslyFocusedElement = null;
    }
  }
  ngAfterContentInit() {
    this.focusTrap?.attachAnchors();
    if (this.autoCapture) {
      this._captureFocus();
    }
  }
  ngDoCheck() {
    if (this.focusTrap && !this.focusTrap.hasAttached()) {
      this.focusTrap.attachAnchors();
    }
  }
  ngOnChanges(changes) {
    const autoCaptureChange = changes['autoCapture'];
    if (autoCaptureChange && !autoCaptureChange.firstChange && this.autoCapture && this.focusTrap?.hasAttached()) {
      this._captureFocus();
    }
  }
  _captureFocus() {
    this._previouslyFocusedElement = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__._getFocusedElementPierceShadowDom)();
    this.focusTrap?.focusInitialElementWhenReady();
  }
  static {
    this.ɵfac = function CdkTrapFocus_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkTrapFocus)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](FocusTrapFactory), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
    };
  }
  static {
    this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: CdkTrapFocus,
      selectors: [["", "cdkTrapFocus", ""]],
      inputs: {
        enabled: [2, "cdkTrapFocus", "enabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        autoCapture: [2, "cdkTrapFocusAutoCapture", "autoCapture", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute]
      },
      exportAs: ["cdkTrapFocus"],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkTrapFocus, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[cdkTrapFocus]',
      exportAs: 'cdkTrapFocus',
      standalone: true
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }, {
    type: FocusTrapFactory
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
    }]
  }], {
    enabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        alias: 'cdkTrapFocus',
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    autoCapture: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        alias: 'cdkTrapFocusAutoCapture',
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }]
  });
})();

/**
 * Class that allows for trapping focus within a DOM element.
 *
 * This class uses a strategy pattern that determines how it traps focus.
 * See FocusTrapInertStrategy.
 */
class ConfigurableFocusTrap extends FocusTrap {
  /** Whether the FocusTrap is enabled. */
  get enabled() {
    return this._enabled;
  }
  set enabled(value) {
    this._enabled = value;
    if (this._enabled) {
      this._focusTrapManager.register(this);
    } else {
      this._focusTrapManager.deregister(this);
    }
  }
  constructor(_element, _checker, _ngZone, _document, _focusTrapManager, _inertStrategy, config, injector) {
    super(_element, _checker, _ngZone, _document, config.defer, injector);
    this._focusTrapManager = _focusTrapManager;
    this._inertStrategy = _inertStrategy;
    this._focusTrapManager.register(this);
  }
  /** Notifies the FocusTrapManager that this FocusTrap will be destroyed. */
  destroy() {
    this._focusTrapManager.deregister(this);
    super.destroy();
  }
  /** @docs-private Implemented as part of ManagedFocusTrap. */
  _enable() {
    this._inertStrategy.preventFocus(this);
    this.toggleAnchors(true);
  }
  /** @docs-private Implemented as part of ManagedFocusTrap. */
  _disable() {
    this._inertStrategy.allowFocus(this);
    this.toggleAnchors(false);
  }
}

/**
 * Lightweight FocusTrapInertStrategy that adds a document focus event
 * listener to redirect focus back inside the FocusTrap.
 */
class EventListenerFocusTrapInertStrategy {
  constructor() {
    /** Focus event handler. */
    this._listener = null;
  }
  /** Adds a document event listener that keeps focus inside the FocusTrap. */
  preventFocus(focusTrap) {
    // Ensure there's only one listener per document
    if (this._listener) {
      focusTrap._document.removeEventListener('focus', this._listener, true);
    }
    this._listener = e => this._trapFocus(focusTrap, e);
    focusTrap._ngZone.runOutsideAngular(() => {
      focusTrap._document.addEventListener('focus', this._listener, true);
    });
  }
  /** Removes the event listener added in preventFocus. */
  allowFocus(focusTrap) {
    if (!this._listener) {
      return;
    }
    focusTrap._document.removeEventListener('focus', this._listener, true);
    this._listener = null;
  }
  /**
   * Refocuses the first element in the FocusTrap if the focus event target was outside
   * the FocusTrap.
   *
   * This is an event listener callback. The event listener is added in runOutsideAngular,
   * so all this code runs outside Angular as well.
   */
  _trapFocus(focusTrap, event) {
    const target = event.target;
    const focusTrapRoot = focusTrap._element;
    // Don't refocus if target was in an overlay, because the overlay might be associated
    // with an element inside the FocusTrap, ex. mat-select.
    if (target && !focusTrapRoot.contains(target) && !target.closest?.('div.cdk-overlay-pane')) {
      // Some legacy FocusTrap usages have logic that focuses some element on the page
      // just before FocusTrap is destroyed. For backwards compatibility, wait
      // to be sure FocusTrap is still enabled before refocusing.
      setTimeout(() => {
        // Check whether focus wasn't put back into the focus trap while the timeout was pending.
        if (focusTrap.enabled && !focusTrapRoot.contains(focusTrap._document.activeElement)) {
          focusTrap.focusFirstTabbableElement();
        }
      });
    }
  }
}

/** The injection token used to specify the inert strategy. */
const FOCUS_TRAP_INERT_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('FOCUS_TRAP_INERT_STRATEGY');

/** Injectable that ensures only the most recently enabled FocusTrap is active. */
class FocusTrapManager {
  constructor() {
    // A stack of the FocusTraps on the page. Only the FocusTrap at the
    // top of the stack is active.
    this._focusTrapStack = [];
  }
  /**
   * Disables the FocusTrap at the top of the stack, and then pushes
   * the new FocusTrap onto the stack.
   */
  register(focusTrap) {
    // Dedupe focusTraps that register multiple times.
    this._focusTrapStack = this._focusTrapStack.filter(ft => ft !== focusTrap);
    let stack = this._focusTrapStack;
    if (stack.length) {
      stack[stack.length - 1]._disable();
    }
    stack.push(focusTrap);
    focusTrap._enable();
  }
  /**
   * Removes the FocusTrap from the stack, and activates the
   * FocusTrap that is the new top of the stack.
   */
  deregister(focusTrap) {
    focusTrap._disable();
    const stack = this._focusTrapStack;
    const i = stack.indexOf(focusTrap);
    if (i !== -1) {
      stack.splice(i, 1);
      if (stack.length) {
        stack[stack.length - 1]._enable();
      }
    }
  }
  static {
    this.ɵfac = function FocusTrapManager_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FocusTrapManager)();
    };
  }
  static {
    this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: FocusTrapManager,
      factory: FocusTrapManager.ɵfac,
      providedIn: 'root'
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FocusTrapManager, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();

/** Factory that allows easy instantiation of configurable focus traps. */
class ConfigurableFocusTrapFactory {
  constructor(_checker, _ngZone, _focusTrapManager, _document, _inertStrategy) {
    this._checker = _checker;
    this._ngZone = _ngZone;
    this._focusTrapManager = _focusTrapManager;
    this._injector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector);
    this._document = _document;
    // TODO split up the strategies into different modules, similar to DateAdapter.
    this._inertStrategy = _inertStrategy || new EventListenerFocusTrapInertStrategy();
  }
  create(element, config = {
    defer: false
  }) {
    let configObject;
    if (typeof config === 'boolean') {
      configObject = {
        defer: config
      };
    } else {
      configObject = config;
    }
    return new ConfigurableFocusTrap(element, this._checker, this._ngZone, this._document, this._focusTrapManager, this._inertStrategy, configObject, this._injector);
  }
  static {
    this.ɵfac = function ConfigurableFocusTrapFactory_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ConfigurableFocusTrapFactory)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](InteractivityChecker), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](FocusTrapManager), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](FOCUS_TRAP_INERT_STRATEGY, 8));
    };
  }
  static {
    this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ConfigurableFocusTrapFactory,
      factory: ConfigurableFocusTrapFactory.ɵfac,
      providedIn: 'root'
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfigurableFocusTrapFactory, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], () => [{
    type: InteractivityChecker
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
  }, {
    type: FocusTrapManager
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [FOCUS_TRAP_INERT_STRATEGY]
    }]
  }], null);
})();

/** Gets whether an event could be a faked `mousedown` event dispatched by a screen reader. */
function isFakeMousedownFromScreenReader(event) {
  // Some screen readers will dispatch a fake `mousedown` event when pressing enter or space on
  // a clickable element. We can distinguish these events when `event.buttons` is zero, or
  // `event.detail` is zero depending on the browser:
  // - `event.buttons` works on Firefox, but fails on Chrome.
  // - `detail` works on Chrome, but fails on Firefox.
  return event.buttons === 0 || event.detail === 0;
}
/** Gets whether an event could be a faked `touchstart` event dispatched by a screen reader. */
function isFakeTouchstartFromScreenReader(event) {
  const touch = event.touches && event.touches[0] || event.changedTouches && event.changedTouches[0];
  // A fake `touchstart` can be distinguished from a real one by looking at the `identifier`
  // which is typically >= 0 on a real device versus -1 from a screen reader. Just to be safe,
  // we can also look at `radiusX` and `radiusY`. This behavior was observed against a Windows 10
  // device with a touch screen running NVDA v2020.4 and Firefox 85 or Chrome 88.
  return !!touch && touch.identifier === -1 && (touch.radiusX == null || touch.radiusX === 1) && (touch.radiusY == null || touch.radiusY === 1);
}

/**
 * Injectable options for the InputModalityDetector. These are shallowly merged with the default
 * options.
 */
const INPUT_MODALITY_DETECTOR_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('cdk-input-modality-detector-options');
/**
 * Default options for the InputModalityDetector.
 *
 * Modifier keys are ignored by default (i.e. when pressed won't cause the service to detect
 * keyboard input modality) for two reasons:
 *
 * 1. Modifier keys are commonly used with mouse to perform actions such as 'right click' or 'open
 *    in new tab', and are thus less representative of actual keyboard interaction.
 * 2. VoiceOver triggers some keyboard events when linearly navigating with Control + Option (but
 *    confusingly not with Caps Lock). Thus, to have parity with other screen readers, we ignore
 *    these keys so as to not update the input modality.
 *
 * Note that we do not by default ignore the right Meta key on Safari because it has the same key
 * code as the ContextMenu key on other browsers. When we switch to using event.key, we can
 * distinguish between the two.
 */
const INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS = {
  ignoreKeys: [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.ALT, _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.CONTROL, _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.MAC_META, _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.META, _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.SHIFT]
};
/**
 * The amount of time needed to pass after a touchstart event in order for a subsequent mousedown
 * event to be attributed as mouse and not touch.
 *
 * This is the value used by AngularJS Material. Through trial and error (on iPhone 6S) they found
 * that a value of around 650ms seems appropriate.
 */
const TOUCH_BUFFER_MS = 650;
/**
 * Event listener options that enable capturing and also mark the listener as passive if the browser
 * supports it.
 */
const modalityEventListenerOptions = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.normalizePassiveListenerOptions)({
  passive: true,
  capture: true
});
/**
 * Service that detects the user's input modality.
 *
 * This service does not update the input modality when a user navigates with a screen reader
 * (e.g. linear navigation with VoiceOver, object navigation / browse mode with NVDA, virtual PC
 * cursor mode with JAWS). This is in part due to technical limitations (i.e. keyboard events do not
 * fire as expected in these modes) but is also arguably the correct behavior. Navigating with a
 * screen reader is akin to visually scanning a page, and should not be interpreted as actual user
 * input interaction.
 *
 * When a user is not navigating but *interacting* with a screen reader, this service attempts to
 * update the input modality to keyboard, but in general this service's behavior is largely
 * undefined.
 */
class InputModalityDetector {
  /** The most recently detected input modality. */
  get mostRecentModality() {
    return this._modality.value;
  }
  constructor(_platform, ngZone, document, options) {
    this._platform = _platform;
    /**
     * The most recently detected input modality event target. Is null if no input modality has been
     * detected or if the associated event target is null for some unknown reason.
     */
    this._mostRecentTarget = null;
    /** The underlying BehaviorSubject that emits whenever an input modality is detected. */
    this._modality = new rxjs__WEBPACK_IMPORTED_MODULE_14__.BehaviorSubject(null);
    /**
     * The timestamp of the last touch input modality. Used to determine whether mousedown events
     * should be attributed to mouse or touch.
     */
    this._lastTouchMs = 0;
    /**
     * Handles keydown events. Must be an arrow function in order to preserve the context when it gets
     * bound.
     */
    this._onKeydown = event => {
      // If this is one of the keys we should ignore, then ignore it and don't update the input
      // modality to keyboard.
      if (this._options?.ignoreKeys?.some(keyCode => keyCode === event.keyCode)) {
        return;
      }
      this._modality.next('keyboard');
      this._mostRecentTarget = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__._getEventTarget)(event);
    };
    /**
     * Handles mousedown events. Must be an arrow function in order to preserve the context when it
     * gets bound.
     */
    this._onMousedown = event => {
      // Touches trigger both touch and mouse events, so we need to distinguish between mouse events
      // that were triggered via mouse vs touch. To do so, check if the mouse event occurs closely
      // after the previous touch event.
      if (Date.now() - this._lastTouchMs < TOUCH_BUFFER_MS) {
        return;
      }
      // Fake mousedown events are fired by some screen readers when controls are activated by the
      // screen reader. Attribute them to keyboard input modality.
      this._modality.next(isFakeMousedownFromScreenReader(event) ? 'keyboard' : 'mouse');
      this._mostRecentTarget = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__._getEventTarget)(event);
    };
    /**
     * Handles touchstart events. Must be an arrow function in order to preserve the context when it
     * gets bound.
     */
    this._onTouchstart = event => {
      // Same scenario as mentioned in _onMousedown, but on touch screen devices, fake touchstart
      // events are fired. Again, attribute to keyboard input modality.
      if (isFakeTouchstartFromScreenReader(event)) {
        this._modality.next('keyboard');
        return;
      }
      // Store the timestamp of this touch event, as it's used to distinguish between mouse events
      // triggered via mouse vs touch.
      this._lastTouchMs = Date.now();
      this._modality.next('touch');
      this._mostRecentTarget = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__._getEventTarget)(event);
    };
    this._options = {
      ...INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS,
      ...options
    };
    // Skip the first emission as it's null.
    this.modalityDetected = this._modality.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.skip)(1));
    this.modalityChanged = this.modalityDetected.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.distinctUntilChanged)());
    // If we're not in a browser, this service should do nothing, as there's no relevant input
    // modality to detect.
    if (_platform.isBrowser) {
      ngZone.runOutsideAngular(() => {
        document.addEventListener('keydown', this._onKeydown, modalityEventListenerOptions);
        document.addEventListener('mousedown', this._onMousedown, modalityEventListenerOptions);
        document.addEventListener('touchstart', this._onTouchstart, modalityEventListenerOptions);
      });
    }
  }
  ngOnDestroy() {
    this._modality.complete();
    if (this._platform.isBrowser) {
      document.removeEventListener('keydown', this._onKeydown, modalityEventListenerOptions);
      document.removeEventListener('mousedown', this._onMousedown, modalityEventListenerOptions);
      document.removeEventListener('touchstart', this._onTouchstart, modalityEventListenerOptions);
    }
  }
  static {
    this.ɵfac = function InputModalityDetector_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || InputModalityDetector)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](INPUT_MODALITY_DETECTOR_OPTIONS, 8));
    };
  }
  static {
    this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: InputModalityDetector,
      factory: InputModalityDetector.ɵfac,
      providedIn: 'root'
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputModalityDetector, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], () => [{
    type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.Platform
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
  }, {
    type: Document,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [INPUT_MODALITY_DETECTOR_OPTIONS]
    }]
  }], null);
})();
const LIVE_ANNOUNCER_ELEMENT_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('liveAnnouncerElement', {
  providedIn: 'root',
  factory: LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY
});
/** @docs-private */
function LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY() {
  return null;
}
/** Injection token that can be used to configure the default options for the LiveAnnouncer. */
const LIVE_ANNOUNCER_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('LIVE_ANNOUNCER_DEFAULT_OPTIONS');
let uniqueIds = 0;
class LiveAnnouncer {
  constructor(elementToken, _ngZone, _document, _defaultOptions) {
    this._ngZone = _ngZone;
    this._defaultOptions = _defaultOptions;
    // We inject the live element and document as `any` because the constructor signature cannot
    // reference browser globals (HTMLElement, Document) on non-browser environments, since having
    // a class decorator causes TypeScript to preserve the constructor signature types.
    this._document = _document;
    this._liveElement = elementToken || this._createLiveElement();
  }
  announce(message, ...args) {
    const defaultOptions = this._defaultOptions;
    let politeness;
    let duration;
    if (args.length === 1 && typeof args[0] === 'number') {
      duration = args[0];
    } else {
      [politeness, duration] = args;
    }
    this.clear();
    clearTimeout(this._previousTimeout);
    if (!politeness) {
      politeness = defaultOptions && defaultOptions.politeness ? defaultOptions.politeness : 'polite';
    }
    if (duration == null && defaultOptions) {
      duration = defaultOptions.duration;
    }
    // TODO: ensure changing the politeness works on all environments we support.
    this._liveElement.setAttribute('aria-live', politeness);
    if (this._liveElement.id) {
      this._exposeAnnouncerToModals(this._liveElement.id);
    }
    // This 100ms timeout is necessary for some browser + screen-reader combinations:
    // - Both JAWS and NVDA over IE11 will not announce anything without a non-zero timeout.
    // - With Chrome and IE11 with NVDA or JAWS, a repeated (identical) message won't be read a
    //   second time without clearing and then using a non-zero delay.
    // (using JAWS 17 at time of this writing).
    return this._ngZone.runOutsideAngular(() => {
      if (!this._currentPromise) {
        this._currentPromise = new Promise(resolve => this._currentResolve = resolve);
      }
      clearTimeout(this._previousTimeout);
      this._previousTimeout = setTimeout(() => {
        this._liveElement.textContent = message;
        if (typeof duration === 'number') {
          this._previousTimeout = setTimeout(() => this.clear(), duration);
        }
        // For some reason in tests this can be undefined
        // Probably related to ZoneJS and every other thing that patches browser APIs in tests
        this._currentResolve?.();
        this._currentPromise = this._currentResolve = undefined;
      }, 100);
      return this._currentPromise;
    });
  }
  /**
   * Clears the current text from the announcer element. Can be used to prevent
   * screen readers from reading the text out again while the user is going
   * through the page landmarks.
   */
  clear() {
    if (this._liveElement) {
      this._liveElement.textContent = '';
    }
  }
  ngOnDestroy() {
    clearTimeout(this._previousTimeout);
    this._liveElement?.remove();
    this._liveElement = null;
    this._currentResolve?.();
    this._currentPromise = this._currentResolve = undefined;
  }
  _createLiveElement() {
    const elementClass = 'cdk-live-announcer-element';
    const previousElements = this._document.getElementsByClassName(elementClass);
    const liveEl = this._document.createElement('div');
    // Remove any old containers. This can happen when coming in from a server-side-rendered page.
    for (let i = 0; i < previousElements.length; i++) {
      previousElements[i].remove();
    }
    liveEl.classList.add(elementClass);
    liveEl.classList.add('cdk-visually-hidden');
    liveEl.setAttribute('aria-atomic', 'true');
    liveEl.setAttribute('aria-live', 'polite');
    liveEl.id = `cdk-live-announcer-${uniqueIds++}`;
    this._document.body.appendChild(liveEl);
    return liveEl;
  }
  /**
   * Some browsers won't expose the accessibility node of the live announcer element if there is an
   * `aria-modal` and the live announcer is outside of it. This method works around the issue by
   * pointing the `aria-owns` of all modals to the live announcer element.
   */
  _exposeAnnouncerToModals(id) {
    // TODO(http://github.com/angular/components/issues/26853): consider de-duplicating this with
    // the `SnakBarContainer` and other usages.
    //
    // Note that the selector here is limited to CDK overlays at the moment in order to reduce the
    // section of the DOM we need to look through. This should cover all the cases we support, but
    // the selector can be expanded if it turns out to be too narrow.
    const modals = this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');
    for (let i = 0; i < modals.length; i++) {
      const modal = modals[i];
      const ariaOwns = modal.getAttribute('aria-owns');
      if (!ariaOwns) {
        modal.setAttribute('aria-owns', id);
      } else if (ariaOwns.indexOf(id) === -1) {
        modal.setAttribute('aria-owns', ariaOwns + ' ' + id);
      }
    }
  }
  static {
    this.ɵfac = function LiveAnnouncer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LiveAnnouncer)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](LIVE_ANNOUNCER_ELEMENT_TOKEN, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](LIVE_ANNOUNCER_DEFAULT_OPTIONS, 8));
    };
  }
  static {
    this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LiveAnnouncer,
      factory: LiveAnnouncer.ɵfac,
      providedIn: 'root'
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LiveAnnouncer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], () => [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [LIVE_ANNOUNCER_ELEMENT_TOKEN]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [LIVE_ANNOUNCER_DEFAULT_OPTIONS]
    }]
  }], null);
})();
/**
 * A directive that works similarly to aria-live, but uses the LiveAnnouncer to ensure compatibility
 * with a wider range of browsers and screen readers.
 */
class CdkAriaLive {
  /** The aria-live politeness level to use when announcing messages. */
  get politeness() {
    return this._politeness;
  }
  set politeness(value) {
    this._politeness = value === 'off' || value === 'assertive' ? value : 'polite';
    if (this._politeness === 'off') {
      if (this._subscription) {
        this._subscription.unsubscribe();
        this._subscription = null;
      }
    } else if (!this._subscription) {
      this._subscription = this._ngZone.runOutsideAngular(() => {
        return this._contentObserver.observe(this._elementRef).subscribe(() => {
          // Note that we use textContent here, rather than innerText, in order to avoid a reflow.
          const elementText = this._elementRef.nativeElement.textContent;
          // The `MutationObserver` fires also for attribute
          // changes which we don't want to announce.
          if (elementText !== this._previousAnnouncedText) {
            this._liveAnnouncer.announce(elementText, this._politeness, this.duration);
            this._previousAnnouncedText = elementText;
          }
        });
      });
    }
  }
  constructor(_elementRef, _liveAnnouncer, _contentObserver, _ngZone) {
    this._elementRef = _elementRef;
    this._liveAnnouncer = _liveAnnouncer;
    this._contentObserver = _contentObserver;
    this._ngZone = _ngZone;
    this._politeness = 'polite';
  }
  ngOnDestroy() {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }
  static {
    this.ɵfac = function CdkAriaLive_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkAriaLive)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](LiveAnnouncer), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_observers__WEBPACK_IMPORTED_MODULE_17__.ContentObserver), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
  }
  static {
    this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: CdkAriaLive,
      selectors: [["", "cdkAriaLive", ""]],
      inputs: {
        politeness: [0, "cdkAriaLive", "politeness"],
        duration: [0, "cdkAriaLiveDuration", "duration"]
      },
      exportAs: ["cdkAriaLive"],
      standalone: true
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkAriaLive, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[cdkAriaLive]',
      exportAs: 'cdkAriaLive',
      standalone: true
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }, {
    type: LiveAnnouncer
  }, {
    type: _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_17__.ContentObserver
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
  }], {
    politeness: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['cdkAriaLive']
    }],
    duration: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['cdkAriaLiveDuration']
    }]
  });
})();

/** Detection mode used for attributing the origin of a focus event. */
var FocusMonitorDetectionMode;
(function (FocusMonitorDetectionMode) {
  /**
   * Any mousedown, keydown, or touchstart event that happened in the previous
   * tick or the current tick will be used to assign a focus event's origin (to
   * either mouse, keyboard, or touch). This is the default option.
   */
  FocusMonitorDetectionMode[FocusMonitorDetectionMode["IMMEDIATE"] = 0] = "IMMEDIATE";
  /**
   * A focus event's origin is always attributed to the last corresponding
   * mousedown, keydown, or touchstart event, no matter how long ago it occurred.
   */
  FocusMonitorDetectionMode[FocusMonitorDetectionMode["EVENTUAL"] = 1] = "EVENTUAL";
})(FocusMonitorDetectionMode || (FocusMonitorDetectionMode = {}));
/** InjectionToken for FocusMonitorOptions. */
const FOCUS_MONITOR_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('cdk-focus-monitor-default-options');
/**
 * Event listener options that enable capturing and also
 * mark the listener as passive if the browser supports it.
 */
const captureEventListenerOptions = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.normalizePassiveListenerOptions)({
  passive: true,
  capture: true
});
/** Monitors mouse and keyboard events to determine the cause of focus events. */
class FocusMonitor {
  constructor(_ngZone, _platform, _inputModalityDetector, /** @breaking-change 11.0.0 make document required */
  document, options) {
    this._ngZone = _ngZone;
    this._platform = _platform;
    this._inputModalityDetector = _inputModalityDetector;
    /** The focus origin that the next focus event is a result of. */
    this._origin = null;
    /** Whether the window has just been focused. */
    this._windowFocused = false;
    /**
     * Whether the origin was determined via a touch interaction. Necessary as properly attributing
     * focus events to touch interactions requires special logic.
     */
    this._originFromTouchInteraction = false;
    /** Map of elements being monitored to their info. */
    this._elementInfo = new Map();
    /** The number of elements currently being monitored. */
    this._monitoredElementCount = 0;
    /**
     * Keeps track of the root nodes to which we've currently bound a focus/blur handler,
     * as well as the number of monitored elements that they contain. We have to treat focus/blur
     * handlers differently from the rest of the events, because the browser won't emit events
     * to the document when focus moves inside of a shadow root.
     */
    this._rootNodeFocusListenerCount = new Map();
    /**
     * Event listener for `focus` events on the window.
     * Needs to be an arrow function in order to preserve the context when it gets bound.
     */
    this._windowFocusListener = () => {
      // Make a note of when the window regains focus, so we can
      // restore the origin info for the focused element.
      this._windowFocused = true;
      this._windowFocusTimeoutId = window.setTimeout(() => this._windowFocused = false);
    };
    /** Subject for stopping our InputModalityDetector subscription. */
    this._stopInputModalityDetector = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    /**
     * Event listener for `focus` and 'blur' events on the document.
     * Needs to be an arrow function in order to preserve the context when it gets bound.
     */
    this._rootNodeFocusAndBlurListener = event => {
      const target = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__._getEventTarget)(event);
      // We need to walk up the ancestor chain in order to support `checkChildren`.
      for (let element = target; element; element = element.parentElement) {
        if (event.type === 'focus') {
          this._onFocus(event, element);
        } else {
          this._onBlur(event, element);
        }
      }
    };
    this._document = document;
    this._detectionMode = options?.detectionMode || FocusMonitorDetectionMode.IMMEDIATE;
  }
  monitor(element, checkChildren = false) {
    const nativeElement = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_18__.coerceElement)(element);
    // Do nothing if we're not on the browser platform or the passed in node isn't an element.
    if (!this._platform.isBrowser || nativeElement.nodeType !== 1) {
      // Note: we don't want the observable to emit at all so we don't pass any parameters.
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.of)();
    }
    // If the element is inside the shadow DOM, we need to bind our focus/blur listeners to
    // the shadow root, rather than the `document`, because the browser won't emit focus events
    // to the `document`, if focus is moving within the same shadow root.
    const rootNode = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__._getShadowRoot)(nativeElement) || this._getDocument();
    const cachedInfo = this._elementInfo.get(nativeElement);
    // Check if we're already monitoring this element.
    if (cachedInfo) {
      if (checkChildren) {
        // TODO(COMP-318): this can be problematic, because it'll turn all non-checkChildren
        // observers into ones that behave as if `checkChildren` was turned on. We need a more
        // robust solution.
        cachedInfo.checkChildren = true;
      }
      return cachedInfo.subject;
    }
    // Create monitored element info.
    const info = {
      checkChildren: checkChildren,
      subject: new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject(),
      rootNode
    };
    this._elementInfo.set(nativeElement, info);
    this._registerGlobalListeners(info);
    return info.subject;
  }
  stopMonitoring(element) {
    const nativeElement = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_18__.coerceElement)(element);
    const elementInfo = this._elementInfo.get(nativeElement);
    if (elementInfo) {
      elementInfo.subject.complete();
      this._setClasses(nativeElement);
      this._elementInfo.delete(nativeElement);
      this._removeGlobalListeners(elementInfo);
    }
  }
  focusVia(element, origin, options) {
    const nativeElement = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_18__.coerceElement)(element);
    const focusedElement = this._getDocument().activeElement;
    // If the element is focused already, calling `focus` again won't trigger the event listener
    // which means that the focus classes won't be updated. If that's the case, update the classes
    // directly without waiting for an event.
    if (nativeElement === focusedElement) {
      this._getClosestElementsInfo(nativeElement).forEach(([currentElement, info]) => this._originChanged(currentElement, origin, info));
    } else {
      this._setOrigin(origin);
      // `focus` isn't available on the server
      if (typeof nativeElement.focus === 'function') {
        nativeElement.focus(options);
      }
    }
  }
  ngOnDestroy() {
    this._elementInfo.forEach((_info, element) => this.stopMonitoring(element));
  }
  /** Access injected document if available or fallback to global document reference */
  _getDocument() {
    return this._document || document;
  }
  /** Use defaultView of injected document if available or fallback to global window reference */
  _getWindow() {
    const doc = this._getDocument();
    return doc.defaultView || window;
  }
  _getFocusOrigin(focusEventTarget) {
    if (this._origin) {
      // If the origin was realized via a touch interaction, we need to perform additional checks
      // to determine whether the focus origin should be attributed to touch or program.
      if (this._originFromTouchInteraction) {
        return this._shouldBeAttributedToTouch(focusEventTarget) ? 'touch' : 'program';
      } else {
        return this._origin;
      }
    }
    // If the window has just regained focus, we can restore the most recent origin from before the
    // window blurred. Otherwise, we've reached the point where we can't identify the source of the
    // focus. This typically means one of two things happened:
    //
    // 1) The element was programmatically focused, or
    // 2) The element was focused via screen reader navigation (which generally doesn't fire
    //    events).
    //
    // Because we can't distinguish between these two cases, we default to setting `program`.
    if (this._windowFocused && this._lastFocusOrigin) {
      return this._lastFocusOrigin;
    }
    // If the interaction is coming from an input label, we consider it a mouse interactions.
    // This is a special case where focus moves on `click`, rather than `mousedown` which breaks
    // our detection, because all our assumptions are for `mousedown`. We need to handle this
    // special case, because it's very common for checkboxes and radio buttons.
    if (focusEventTarget && this._isLastInteractionFromInputLabel(focusEventTarget)) {
      return 'mouse';
    }
    return 'program';
  }
  /**
   * Returns whether the focus event should be attributed to touch. Recall that in IMMEDIATE mode, a
   * touch origin isn't immediately reset at the next tick (see _setOrigin). This means that when we
   * handle a focus event following a touch interaction, we need to determine whether (1) the focus
   * event was directly caused by the touch interaction or (2) the focus event was caused by a
   * subsequent programmatic focus call triggered by the touch interaction.
   * @param focusEventTarget The target of the focus event under examination.
   */
  _shouldBeAttributedToTouch(focusEventTarget) {
    // Please note that this check is not perfect. Consider the following edge case:
    //
    // <div #parent tabindex="0">
    //   <div #child tabindex="0" (click)="#parent.focus()"></div>
    // </div>
    //
    // Suppose there is a FocusMonitor in IMMEDIATE mode attached to #parent. When the user touches
    // #child, #parent is programmatically focused. This code will attribute the focus to touch
    // instead of program. This is a relatively minor edge-case that can be worked around by using
    // focusVia(parent, 'program') to focus #parent.
    return this._detectionMode === FocusMonitorDetectionMode.EVENTUAL || !!focusEventTarget?.contains(this._inputModalityDetector._mostRecentTarget);
  }
  /**
   * Sets the focus classes on the element based on the given focus origin.
   * @param element The element to update the classes on.
   * @param origin The focus origin.
   */
  _setClasses(element, origin) {
    element.classList.toggle('cdk-focused', !!origin);
    element.classList.toggle('cdk-touch-focused', origin === 'touch');
    element.classList.toggle('cdk-keyboard-focused', origin === 'keyboard');
    element.classList.toggle('cdk-mouse-focused', origin === 'mouse');
    element.classList.toggle('cdk-program-focused', origin === 'program');
  }
  /**
   * Updates the focus origin. If we're using immediate detection mode, we schedule an async
   * function to clear the origin at the end of a timeout. The duration of the timeout depends on
   * the origin being set.
   * @param origin The origin to set.
   * @param isFromInteraction Whether we are setting the origin from an interaction event.
   */
  _setOrigin(origin, isFromInteraction = false) {
    this._ngZone.runOutsideAngular(() => {
      this._origin = origin;
      this._originFromTouchInteraction = origin === 'touch' && isFromInteraction;
      // If we're in IMMEDIATE mode, reset the origin at the next tick (or in `TOUCH_BUFFER_MS` ms
      // for a touch event). We reset the origin at the next tick because Firefox focuses one tick
      // after the interaction event. We wait `TOUCH_BUFFER_MS` ms before resetting the origin for
      // a touch event because when a touch event is fired, the associated focus event isn't yet in
      // the event queue. Before doing so, clear any pending timeouts.
      if (this._detectionMode === FocusMonitorDetectionMode.IMMEDIATE) {
        clearTimeout(this._originTimeoutId);
        const ms = this._originFromTouchInteraction ? TOUCH_BUFFER_MS : 1;
        this._originTimeoutId = setTimeout(() => this._origin = null, ms);
      }
    });
  }
  /**
   * Handles focus events on a registered element.
   * @param event The focus event.
   * @param element The monitored element.
   */
  _onFocus(event, element) {
    // NOTE(mmalerba): We currently set the classes based on the focus origin of the most recent
    // focus event affecting the monitored element. If we want to use the origin of the first event
    // instead we should check for the cdk-focused class here and return if the element already has
    // it. (This only matters for elements that have includesChildren = true).
    // If we are not counting child-element-focus as focused, make sure that the event target is the
    // monitored element itself.
    const elementInfo = this._elementInfo.get(element);
    const focusEventTarget = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__._getEventTarget)(event);
    if (!elementInfo || !elementInfo.checkChildren && element !== focusEventTarget) {
      return;
    }
    this._originChanged(element, this._getFocusOrigin(focusEventTarget), elementInfo);
  }
  /**
   * Handles blur events on a registered element.
   * @param event The blur event.
   * @param element The monitored element.
   */
  _onBlur(event, element) {
    // If we are counting child-element-focus as focused, make sure that we aren't just blurring in
    // order to focus another child of the monitored element.
    const elementInfo = this._elementInfo.get(element);
    if (!elementInfo || elementInfo.checkChildren && event.relatedTarget instanceof Node && element.contains(event.relatedTarget)) {
      return;
    }
    this._setClasses(element);
    this._emitOrigin(elementInfo, null);
  }
  _emitOrigin(info, origin) {
    if (info.subject.observers.length) {
      this._ngZone.run(() => info.subject.next(origin));
    }
  }
  _registerGlobalListeners(elementInfo) {
    if (!this._platform.isBrowser) {
      return;
    }
    const rootNode = elementInfo.rootNode;
    const rootNodeFocusListeners = this._rootNodeFocusListenerCount.get(rootNode) || 0;
    if (!rootNodeFocusListeners) {
      this._ngZone.runOutsideAngular(() => {
        rootNode.addEventListener('focus', this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
        rootNode.addEventListener('blur', this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
      });
    }
    this._rootNodeFocusListenerCount.set(rootNode, rootNodeFocusListeners + 1);
    // Register global listeners when first element is monitored.
    if (++this._monitoredElementCount === 1) {
      // Note: we listen to events in the capture phase so we
      // can detect them even if the user stops propagation.
      this._ngZone.runOutsideAngular(() => {
        const window = this._getWindow();
        window.addEventListener('focus', this._windowFocusListener);
      });
      // The InputModalityDetector is also just a collection of global listeners.
      this._inputModalityDetector.modalityDetected.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.takeUntil)(this._stopInputModalityDetector)).subscribe(modality => {
        this._setOrigin(modality, true /* isFromInteraction */);
      });
    }
  }
  _removeGlobalListeners(elementInfo) {
    const rootNode = elementInfo.rootNode;
    if (this._rootNodeFocusListenerCount.has(rootNode)) {
      const rootNodeFocusListeners = this._rootNodeFocusListenerCount.get(rootNode);
      if (rootNodeFocusListeners > 1) {
        this._rootNodeFocusListenerCount.set(rootNode, rootNodeFocusListeners - 1);
      } else {
        rootNode.removeEventListener('focus', this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
        rootNode.removeEventListener('blur', this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
        this._rootNodeFocusListenerCount.delete(rootNode);
      }
    }
    // Unregister global listeners when last element is unmonitored.
    if (! --this._monitoredElementCount) {
      const window = this._getWindow();
      window.removeEventListener('focus', this._windowFocusListener);
      // Equivalently, stop our InputModalityDetector subscription.
      this._stopInputModalityDetector.next();
      // Clear timeouts for all potentially pending timeouts to prevent the leaks.
      clearTimeout(this._windowFocusTimeoutId);
      clearTimeout(this._originTimeoutId);
    }
  }
  /** Updates all the state on an element once its focus origin has changed. */
  _originChanged(element, origin, elementInfo) {
    this._setClasses(element, origin);
    this._emitOrigin(elementInfo, origin);
    this._lastFocusOrigin = origin;
  }
  /**
   * Collects the `MonitoredElementInfo` of a particular element and
   * all of its ancestors that have enabled `checkChildren`.
   * @param element Element from which to start the search.
   */
  _getClosestElementsInfo(element) {
    const results = [];
    this._elementInfo.forEach((info, currentElement) => {
      if (currentElement === element || info.checkChildren && currentElement.contains(element)) {
        results.push([currentElement, info]);
      }
    });
    return results;
  }
  /**
   * Returns whether an interaction is likely to have come from the user clicking the `label` of
   * an `input` or `textarea` in order to focus it.
   * @param focusEventTarget Target currently receiving focus.
   */
  _isLastInteractionFromInputLabel(focusEventTarget) {
    const {
      _mostRecentTarget: mostRecentTarget,
      mostRecentModality
    } = this._inputModalityDetector;
    // If the last interaction used the mouse on an element contained by one of the labels
    // of an `input`/`textarea` that is currently focused, it is very likely that the
    // user redirected focus using the label.
    if (mostRecentModality !== 'mouse' || !mostRecentTarget || mostRecentTarget === focusEventTarget || focusEventTarget.nodeName !== 'INPUT' && focusEventTarget.nodeName !== 'TEXTAREA' || focusEventTarget.disabled) {
      return false;
    }
    const labels = focusEventTarget.labels;
    if (labels) {
      for (let i = 0; i < labels.length; i++) {
        if (labels[i].contains(mostRecentTarget)) {
          return true;
        }
      }
    }
    return false;
  }
  static {
    this.ɵfac = function FocusMonitor_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FocusMonitor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](InputModalityDetector), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](FOCUS_MONITOR_DEFAULT_OPTIONS, 8));
    };
  }
  static {
    this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: FocusMonitor,
      factory: FocusMonitor.ɵfac,
      providedIn: 'root'
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FocusMonitor, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
  }, {
    type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.Platform
  }, {
    type: InputModalityDetector
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [FOCUS_MONITOR_DEFAULT_OPTIONS]
    }]
  }], null);
})();
/**
 * Directive that determines how a particular element was focused (via keyboard, mouse, touch, or
 * programmatically) and adds corresponding classes to the element.
 *
 * There are two variants of this directive:
 * 1) cdkMonitorElementFocus: does not consider an element to be focused if one of its children is
 *    focused.
 * 2) cdkMonitorSubtreeFocus: considers an element focused if it or any of its children are focused.
 */
class CdkMonitorFocus {
  constructor(_elementRef, _focusMonitor) {
    this._elementRef = _elementRef;
    this._focusMonitor = _focusMonitor;
    this._focusOrigin = null;
    this.cdkFocusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  get focusOrigin() {
    return this._focusOrigin;
  }
  ngAfterViewInit() {
    const element = this._elementRef.nativeElement;
    this._monitorSubscription = this._focusMonitor.monitor(element, element.nodeType === 1 && element.hasAttribute('cdkMonitorSubtreeFocus')).subscribe(origin => {
      this._focusOrigin = origin;
      this.cdkFocusChange.emit(origin);
    });
  }
  ngOnDestroy() {
    this._focusMonitor.stopMonitoring(this._elementRef);
    if (this._monitorSubscription) {
      this._monitorSubscription.unsubscribe();
    }
  }
  static {
    this.ɵfac = function CdkMonitorFocus_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkMonitorFocus)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](FocusMonitor));
    };
  }
  static {
    this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: CdkMonitorFocus,
      selectors: [["", "cdkMonitorElementFocus", ""], ["", "cdkMonitorSubtreeFocus", ""]],
      outputs: {
        cdkFocusChange: "cdkFocusChange"
      },
      exportAs: ["cdkMonitorFocus"],
      standalone: true
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkMonitorFocus, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[cdkMonitorElementFocus], [cdkMonitorSubtreeFocus]',
      exportAs: 'cdkMonitorFocus',
      standalone: true
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }, {
    type: FocusMonitor
  }], {
    cdkFocusChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();

/** Set of possible high-contrast mode backgrounds. */
var HighContrastMode;
(function (HighContrastMode) {
  HighContrastMode[HighContrastMode["NONE"] = 0] = "NONE";
  HighContrastMode[HighContrastMode["BLACK_ON_WHITE"] = 1] = "BLACK_ON_WHITE";
  HighContrastMode[HighContrastMode["WHITE_ON_BLACK"] = 2] = "WHITE_ON_BLACK";
})(HighContrastMode || (HighContrastMode = {}));
/** CSS class applied to the document body when in black-on-white high-contrast mode. */
const BLACK_ON_WHITE_CSS_CLASS = 'cdk-high-contrast-black-on-white';
/** CSS class applied to the document body when in white-on-black high-contrast mode. */
const WHITE_ON_BLACK_CSS_CLASS = 'cdk-high-contrast-white-on-black';
/** CSS class applied to the document body when in high-contrast mode. */
const HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS = 'cdk-high-contrast-active';
/**
 * Service to determine whether the browser is currently in a high-contrast-mode environment.
 *
 * Microsoft Windows supports an accessibility feature called "High Contrast Mode". This mode
 * changes the appearance of all applications, including web applications, to dramatically increase
 * contrast.
 *
 * IE, Edge, and Firefox currently support this mode. Chrome does not support Windows High Contrast
 * Mode. This service does not detect high-contrast mode as added by the Chrome "High Contrast"
 * browser extension.
 */
class HighContrastModeDetector {
  constructor(_platform, document) {
    this._platform = _platform;
    this._document = document;
    this._breakpointSubscription = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_20__.BreakpointObserver).observe('(forced-colors: active)').subscribe(() => {
      if (this._hasCheckedHighContrastMode) {
        this._hasCheckedHighContrastMode = false;
        this._applyBodyHighContrastModeCssClasses();
      }
    });
  }
  /** Gets the current high-contrast-mode for the page. */
  getHighContrastMode() {
    if (!this._platform.isBrowser) {
      return HighContrastMode.NONE;
    }
    // Create a test element with an arbitrary background-color that is neither black nor
    // white; high-contrast mode will coerce the color to either black or white. Also ensure that
    // appending the test element to the DOM does not affect layout by absolutely positioning it
    const testElement = this._document.createElement('div');
    testElement.style.backgroundColor = 'rgb(1,2,3)';
    testElement.style.position = 'absolute';
    this._document.body.appendChild(testElement);
    // Get the computed style for the background color, collapsing spaces to normalize between
    // browsers. Once we get this color, we no longer need the test element. Access the `window`
    // via the document so we can fake it in tests. Note that we have extra null checks, because
    // this logic will likely run during app bootstrap and throwing can break the entire app.
    const documentWindow = this._document.defaultView || window;
    const computedStyle = documentWindow && documentWindow.getComputedStyle ? documentWindow.getComputedStyle(testElement) : null;
    const computedColor = (computedStyle && computedStyle.backgroundColor || '').replace(/ /g, '');
    testElement.remove();
    switch (computedColor) {
      // Pre Windows 11 dark theme.
      case 'rgb(0,0,0)':
      // Windows 11 dark themes.
      case 'rgb(45,50,54)':
      case 'rgb(32,32,32)':
        return HighContrastMode.WHITE_ON_BLACK;
      // Pre Windows 11 light theme.
      case 'rgb(255,255,255)':
      // Windows 11 light theme.
      case 'rgb(255,250,239)':
        return HighContrastMode.BLACK_ON_WHITE;
    }
    return HighContrastMode.NONE;
  }
  ngOnDestroy() {
    this._breakpointSubscription.unsubscribe();
  }
  /** Applies CSS classes indicating high-contrast mode to document body (browser-only). */
  _applyBodyHighContrastModeCssClasses() {
    if (!this._hasCheckedHighContrastMode && this._platform.isBrowser && this._document.body) {
      const bodyClasses = this._document.body.classList;
      bodyClasses.remove(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS, BLACK_ON_WHITE_CSS_CLASS, WHITE_ON_BLACK_CSS_CLASS);
      this._hasCheckedHighContrastMode = true;
      const mode = this.getHighContrastMode();
      if (mode === HighContrastMode.BLACK_ON_WHITE) {
        bodyClasses.add(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS, BLACK_ON_WHITE_CSS_CLASS);
      } else if (mode === HighContrastMode.WHITE_ON_BLACK) {
        bodyClasses.add(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS, WHITE_ON_BLACK_CSS_CLASS);
      }
    }
  }
  static {
    this.ɵfac = function HighContrastModeDetector_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || HighContrastModeDetector)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
    };
  }
  static {
    this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: HighContrastModeDetector,
      factory: HighContrastModeDetector.ɵfac,
      providedIn: 'root'
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HighContrastModeDetector, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], () => [{
    type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.Platform
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
    }]
  }], null);
})();
class A11yModule {
  constructor(highContrastModeDetector) {
    highContrastModeDetector._applyBodyHighContrastModeCssClasses();
  }
  static {
    this.ɵfac = function A11yModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || A11yModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](HighContrastModeDetector));
    };
  }
  static {
    this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: A11yModule,
      imports: [_angular_cdk_observers__WEBPACK_IMPORTED_MODULE_17__.ObserversModule, CdkAriaLive, CdkTrapFocus, CdkMonitorFocus],
      exports: [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus]
    });
  }
  static {
    this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_cdk_observers__WEBPACK_IMPORTED_MODULE_17__.ObserversModule]
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](A11yModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_cdk_observers__WEBPACK_IMPORTED_MODULE_17__.ObserversModule, CdkAriaLive, CdkTrapFocus, CdkMonitorFocus],
      exports: [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus]
    }]
  }], () => [{
    type: HighContrastModeDetector
  }], null);
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=a11y.mjs.map

/***/ }),

/***/ 28203:
/*!*****************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/bidi.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BidiModule: () => (/* binding */ BidiModule),
/* harmony export */   DIR_DOCUMENT: () => (/* binding */ DIR_DOCUMENT),
/* harmony export */   Dir: () => (/* binding */ Dir),
/* harmony export */   Directionality: () => (/* binding */ Directionality)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 60177);




/**
 * Injection token used to inject the document into Directionality.
 * This is used so that the value can be faked in tests.
 *
 * We can't use the real document in tests because changing the real `dir` causes geometry-based
 * tests in Safari to fail.
 *
 * We also can't re-provide the DOCUMENT token from platform-browser because the unit tests
 * themselves use things like `querySelector` in test code.
 *
 * This token is defined in a separate file from Directionality as a workaround for
 * https://github.com/angular/angular/issues/22559
 *
 * @docs-private
 */
const DIR_DOCUMENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('cdk-dir-doc', {
  providedIn: 'root',
  factory: DIR_DOCUMENT_FACTORY
});
/** @docs-private */
function DIR_DOCUMENT_FACTORY() {
  return (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT);
}

/** Regex that matches locales with an RTL script. Taken from `goog.i18n.bidi.isRtlLanguage`. */
const RTL_LOCALE_PATTERN = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
/** Resolves a string value to a specific direction. */
function _resolveDirectionality(rawValue) {
  const value = rawValue?.toLowerCase() || '';
  if (value === 'auto' && typeof navigator !== 'undefined' && navigator?.language) {
    return RTL_LOCALE_PATTERN.test(navigator.language) ? 'rtl' : 'ltr';
  }
  return value === 'rtl' ? 'rtl' : 'ltr';
}
/**
 * The directionality (LTR / RTL) context for the application (or a subtree of it).
 * Exposes the current direction and a stream of direction changes.
 */
class Directionality {
  constructor(_document) {
    /** The current 'ltr' or 'rtl' value. */
    this.value = 'ltr';
    /** Stream that emits whenever the 'ltr' / 'rtl' state changes. */
    this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    if (_document) {
      const bodyDir = _document.body ? _document.body.dir : null;
      const htmlDir = _document.documentElement ? _document.documentElement.dir : null;
      this.value = _resolveDirectionality(bodyDir || htmlDir || 'ltr');
    }
  }
  ngOnDestroy() {
    this.change.complete();
  }
  static {
    this.ɵfac = function Directionality_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || Directionality)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](DIR_DOCUMENT, 8));
    };
  }
  static {
    this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: Directionality,
      factory: Directionality.ɵfac,
      providedIn: 'root'
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Directionality, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], () => [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [DIR_DOCUMENT]
    }]
  }], null);
})();

/**
 * Directive to listen for changes of direction of part of the DOM.
 *
 * Provides itself as Directionality such that descendant directives only need to ever inject
 * Directionality to get the closest direction.
 */
class Dir {
  constructor() {
    /** Normalized direction that accounts for invalid/unsupported values. */
    this._dir = 'ltr';
    /** Whether the `value` has been set to its initial value. */
    this._isInitialized = false;
    /** Event emitted when the direction changes. */
    this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  /** @docs-private */
  get dir() {
    return this._dir;
  }
  set dir(value) {
    const previousValue = this._dir;
    // Note: `_resolveDirectionality` resolves the language based on the browser's language,
    // whereas the browser does it based on the content of the element. Since doing so based
    // on the content can be expensive, for now we're doing the simpler matching.
    this._dir = _resolveDirectionality(value);
    this._rawDir = value;
    if (previousValue !== this._dir && this._isInitialized) {
      this.change.emit(this._dir);
    }
  }
  /** Current layout direction of the element. */
  get value() {
    return this.dir;
  }
  /** Initialize once default value has been set. */
  ngAfterContentInit() {
    this._isInitialized = true;
  }
  ngOnDestroy() {
    this.change.complete();
  }
  static {
    this.ɵfac = function Dir_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || Dir)();
    };
  }
  static {
    this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: Dir,
      selectors: [["", "dir", ""]],
      hostVars: 1,
      hostBindings: function Dir_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("dir", ctx._rawDir);
        }
      },
      inputs: {
        dir: "dir"
      },
      outputs: {
        change: "dirChange"
      },
      exportAs: ["dir"],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: Directionality,
        useExisting: Dir
      }])]
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Dir, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[dir]',
      providers: [{
        provide: Directionality,
        useExisting: Dir
      }],
      host: {
        '[attr.dir]': '_rawDir'
      },
      exportAs: 'dir',
      standalone: true
    }]
  }], null, {
    change: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['dirChange']
    }],
    dir: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class BidiModule {
  static {
    this.ɵfac = function BidiModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BidiModule)();
    };
  }
  static {
    this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: BidiModule,
      imports: [Dir],
      exports: [Dir]
    });
  }
  static {
    this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BidiModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [Dir],
      exports: [Dir]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=bidi.mjs.map

/***/ }),

/***/ 14085:
/*!*********************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/coercion.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _isNumberValue: () => (/* binding */ _isNumberValue),
/* harmony export */   coerceArray: () => (/* binding */ coerceArray),
/* harmony export */   coerceBooleanProperty: () => (/* binding */ coerceBooleanProperty),
/* harmony export */   coerceCssPixelValue: () => (/* binding */ coerceCssPixelValue),
/* harmony export */   coerceElement: () => (/* binding */ coerceElement),
/* harmony export */   coerceNumberProperty: () => (/* binding */ coerceNumberProperty),
/* harmony export */   coerceStringArray: () => (/* binding */ coerceStringArray)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 17705);


/** Coerces a data-bound value (typically a string) to a boolean. */
function coerceBooleanProperty(value) {
  return value != null && `${value}` !== 'false';
}
function coerceNumberProperty(value, fallbackValue = 0) {
  if (_isNumberValue(value)) {
    return Number(value);
  }
  return arguments.length === 2 ? fallbackValue : 0;
}
/**
 * Whether the provided value is considered a number.
 * @docs-private
 */
function _isNumberValue(value) {
  // parseFloat(value) handles most of the cases we're interested in (it treats null, empty string,
  // and other non-number values as NaN, where Number just uses 0) but it considers the string
  // '123hello' to be a valid number. Therefore we also check if Number(value) is NaN.
  return !isNaN(parseFloat(value)) && !isNaN(Number(value));
}
function coerceArray(value) {
  return Array.isArray(value) ? value : [value];
}

/** Coerces a value to a CSS pixel value. */
function coerceCssPixelValue(value) {
  if (value == null) {
    return '';
  }
  return typeof value === 'string' ? value : `${value}px`;
}

/**
 * Coerces an ElementRef or an Element into an element.
 * Useful for APIs that can accept either a ref or the native element itself.
 */
function coerceElement(elementOrRef) {
  return elementOrRef instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef ? elementOrRef.nativeElement : elementOrRef;
}

/**
 * Coerces a value to an array of trimmed non-empty strings.
 * Any input that is not an array, `null` or `undefined` will be turned into a string
 * via `toString()` and subsequently split with the given separator.
 * `null` and `undefined` will result in an empty array.
 * This results in the following outcomes:
 * - `null` -&gt; `[]`
 * - `[null]` -&gt; `["null"]`
 * - `["a", "b ", " "]` -&gt; `["a", "b"]`
 * - `[1, [2, 3]]` -&gt; `["1", "2,3"]`
 * - `[{ a: 0 }]` -&gt; `["[object Object]"]`
 * - `{ a: 0 }` -&gt; `["[object", "Object]"]`
 *
 * Useful for defining CSS classes or table columns.
 * @param value the value to coerce into an array of strings
 * @param separator split-separator if value isn't an array
 */
function coerceStringArray(value, separator = /\s+/) {
  const result = [];
  if (value != null) {
    const sourceValues = Array.isArray(value) ? value : `${value}`.split(separator);
    for (const sourceValue of sourceValues) {
      const trimmedString = `${sourceValue}`.trim();
      if (trimmedString) {
        result.push(trimmedString);
      }
    }
  }
  return result;
}

//# sourceMappingURL=coercion.mjs.map

/***/ }),

/***/ 30426:
/*!*****************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/coercion/private.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   coerceObservable: () => (/* binding */ coerceObservable)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 74402);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 7673);


/**
 * Given either an Observable or non-Observable value, returns either the original
 * Observable, or wraps it in an Observable that emits the non-Observable value.
 */
function coerceObservable(data) {
  if (!(0,rxjs__WEBPACK_IMPORTED_MODULE_0__.isObservable)(data)) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(data);
  }
  return data;
}

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=private.mjs.map

/***/ }),

/***/ 45024:
/*!************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/collections.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArrayDataSource: () => (/* binding */ ArrayDataSource),
/* harmony export */   DataSource: () => (/* binding */ DataSource),
/* harmony export */   SelectionModel: () => (/* binding */ SelectionModel),
/* harmony export */   UniqueSelectionDispatcher: () => (/* binding */ UniqueSelectionDispatcher),
/* harmony export */   _DisposeViewRepeaterStrategy: () => (/* binding */ _DisposeViewRepeaterStrategy),
/* harmony export */   _RecycleViewRepeaterStrategy: () => (/* binding */ _RecycleViewRepeaterStrategy),
/* harmony export */   _VIEW_REPEATER_STRATEGY: () => (/* binding */ _VIEW_REPEATER_STRATEGY),
/* harmony export */   _ViewRepeaterOperation: () => (/* binding */ _ViewRepeaterOperation),
/* harmony export */   getMultipleValuesInSingleSelectionError: () => (/* binding */ getMultipleValuesInSingleSelectionError),
/* harmony export */   isDataSource: () => (/* binding */ isDataSource)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 30017);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 74402);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 7673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 18530);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 17705);



class DataSource {}
/** Checks whether an object is a data source. */
function isDataSource(value) {
  // Check if the value is a DataSource by observing if it has a connect function. Cannot
  // be checked as an `instanceof DataSource` since people could create their own sources
  // that match the interface, but don't extend DataSource. We also can't use `isObservable`
  // here, because of some internal apps.
  return value && typeof value.connect === 'function' && !(value instanceof rxjs__WEBPACK_IMPORTED_MODULE_0__.ConnectableObservable);
}

/** DataSource wrapper for a native array. */
class ArrayDataSource extends DataSource {
  constructor(_data) {
    super();
    this._data = _data;
  }
  connect() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.isObservable)(this._data) ? this._data : (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(this._data);
  }
  disconnect() {}
}

/** Indicates how a view was changed by a {@link _ViewRepeater}. */
var _ViewRepeaterOperation;
(function (_ViewRepeaterOperation) {
  /** The content of an existing view was replaced with another item. */
  _ViewRepeaterOperation[_ViewRepeaterOperation["REPLACED"] = 0] = "REPLACED";
  /** A new view was created with `createEmbeddedView`. */
  _ViewRepeaterOperation[_ViewRepeaterOperation["INSERTED"] = 1] = "INSERTED";
  /** The position of a view changed, but the content remains the same. */
  _ViewRepeaterOperation[_ViewRepeaterOperation["MOVED"] = 2] = "MOVED";
  /** A view was detached from the view container. */
  _ViewRepeaterOperation[_ViewRepeaterOperation["REMOVED"] = 3] = "REMOVED";
})(_ViewRepeaterOperation || (_ViewRepeaterOperation = {}));
/**
 * Injection token for {@link _ViewRepeater}. This token is for use by Angular Material only.
 * @docs-private
 */
const _VIEW_REPEATER_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.InjectionToken('_ViewRepeater');

/**
 * A repeater that destroys views when they are removed from a
 * {@link ViewContainerRef}. When new items are inserted into the container,
 * the repeater will always construct a new embedded view for each item.
 *
 * @template T The type for the embedded view's $implicit property.
 * @template R The type for the item in each IterableDiffer change record.
 * @template C The type for the context passed to each embedded view.
 */
class _DisposeViewRepeaterStrategy {
  applyChanges(changes, viewContainerRef, itemContextFactory, itemValueResolver, itemViewChanged) {
    changes.forEachOperation((record, adjustedPreviousIndex, currentIndex) => {
      let view;
      let operation;
      if (record.previousIndex == null) {
        const insertContext = itemContextFactory(record, adjustedPreviousIndex, currentIndex);
        view = viewContainerRef.createEmbeddedView(insertContext.templateRef, insertContext.context, insertContext.index);
        operation = _ViewRepeaterOperation.INSERTED;
      } else if (currentIndex == null) {
        viewContainerRef.remove(adjustedPreviousIndex);
        operation = _ViewRepeaterOperation.REMOVED;
      } else {
        view = viewContainerRef.get(adjustedPreviousIndex);
        viewContainerRef.move(view, currentIndex);
        operation = _ViewRepeaterOperation.MOVED;
      }
      if (itemViewChanged) {
        itemViewChanged({
          context: view?.context,
          operation,
          record
        });
      }
    });
  }
  detach() {}
}

/**
 * A repeater that caches views when they are removed from a
 * {@link ViewContainerRef}. When new items are inserted into the container,
 * the repeater will reuse one of the cached views instead of creating a new
 * embedded view. Recycling cached views reduces the quantity of expensive DOM
 * inserts.
 *
 * @template T The type for the embedded view's $implicit property.
 * @template R The type for the item in each IterableDiffer change record.
 * @template C The type for the context passed to each embedded view.
 */
class _RecycleViewRepeaterStrategy {
  constructor() {
    /**
     * The size of the cache used to store unused views.
     * Setting the cache size to `0` will disable caching. Defaults to 20 views.
     */
    this.viewCacheSize = 20;
    /**
     * View cache that stores embedded view instances that have been previously stamped out,
     * but don't are not currently rendered. The view repeater will reuse these views rather than
     * creating brand new ones.
     *
     * TODO(michaeljamesparsons) Investigate whether using a linked list would improve performance.
     */
    this._viewCache = [];
  }
  /** Apply changes to the DOM. */
  applyChanges(changes, viewContainerRef, itemContextFactory, itemValueResolver, itemViewChanged) {
    // Rearrange the views to put them in the right location.
    changes.forEachOperation((record, adjustedPreviousIndex, currentIndex) => {
      let view;
      let operation;
      if (record.previousIndex == null) {
        // Item added.
        const viewArgsFactory = () => itemContextFactory(record, adjustedPreviousIndex, currentIndex);
        view = this._insertView(viewArgsFactory, currentIndex, viewContainerRef, itemValueResolver(record));
        operation = view ? _ViewRepeaterOperation.INSERTED : _ViewRepeaterOperation.REPLACED;
      } else if (currentIndex == null) {
        // Item removed.
        this._detachAndCacheView(adjustedPreviousIndex, viewContainerRef);
        operation = _ViewRepeaterOperation.REMOVED;
      } else {
        // Item moved.
        view = this._moveView(adjustedPreviousIndex, currentIndex, viewContainerRef, itemValueResolver(record));
        operation = _ViewRepeaterOperation.MOVED;
      }
      if (itemViewChanged) {
        itemViewChanged({
          context: view?.context,
          operation,
          record
        });
      }
    });
  }
  detach() {
    for (const view of this._viewCache) {
      view.destroy();
    }
    this._viewCache = [];
  }
  /**
   * Inserts a view for a new item, either from the cache or by creating a new
   * one. Returns `undefined` if the item was inserted into a cached view.
   */
  _insertView(viewArgsFactory, currentIndex, viewContainerRef, value) {
    const cachedView = this._insertViewFromCache(currentIndex, viewContainerRef);
    if (cachedView) {
      cachedView.context.$implicit = value;
      return undefined;
    }
    const viewArgs = viewArgsFactory();
    return viewContainerRef.createEmbeddedView(viewArgs.templateRef, viewArgs.context, viewArgs.index);
  }
  /** Detaches the view at the given index and inserts into the view cache. */
  _detachAndCacheView(index, viewContainerRef) {
    const detachedView = viewContainerRef.detach(index);
    this._maybeCacheView(detachedView, viewContainerRef);
  }
  /** Moves view at the previous index to the current index. */
  _moveView(adjustedPreviousIndex, currentIndex, viewContainerRef, value) {
    const view = viewContainerRef.get(adjustedPreviousIndex);
    viewContainerRef.move(view, currentIndex);
    view.context.$implicit = value;
    return view;
  }
  /**
   * Cache the given detached view. If the cache is full, the view will be
   * destroyed.
   */
  _maybeCacheView(view, viewContainerRef) {
    if (this._viewCache.length < this.viewCacheSize) {
      this._viewCache.push(view);
    } else {
      const index = viewContainerRef.indexOf(view);
      // The host component could remove views from the container outside of
      // the view repeater. It's unlikely this will occur, but just in case,
      // destroy the view on its own, otherwise destroy it through the
      // container to ensure that all the references are removed.
      if (index === -1) {
        view.destroy();
      } else {
        viewContainerRef.remove(index);
      }
    }
  }
  /** Inserts a recycled view from the cache at the given index. */
  _insertViewFromCache(index, viewContainerRef) {
    const cachedView = this._viewCache.pop();
    if (cachedView) {
      viewContainerRef.insert(cachedView, index);
    }
    return cachedView || null;
  }
}

/**
 * Class to be used to power selecting one or more options from a list.
 */
class SelectionModel {
  /** Selected values. */
  get selected() {
    if (!this._selected) {
      this._selected = Array.from(this._selection.values());
    }
    return this._selected;
  }
  constructor(_multiple = false, initiallySelectedValues, _emitChanges = true, compareWith) {
    this._multiple = _multiple;
    this._emitChanges = _emitChanges;
    this.compareWith = compareWith;
    /** Currently-selected values. */
    this._selection = new Set();
    /** Keeps track of the deselected options that haven't been emitted by the change event. */
    this._deselectedToEmit = [];
    /** Keeps track of the selected options that haven't been emitted by the change event. */
    this._selectedToEmit = [];
    /** Event emitted when the value has changed. */
    this.changed = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    if (initiallySelectedValues && initiallySelectedValues.length) {
      if (_multiple) {
        initiallySelectedValues.forEach(value => this._markSelected(value));
      } else {
        this._markSelected(initiallySelectedValues[0]);
      }
      // Clear the array in order to avoid firing the change event for preselected values.
      this._selectedToEmit.length = 0;
    }
  }
  /**
   * Selects a value or an array of values.
   * @param values The values to select
   * @return Whether the selection changed as a result of this call
   * @breaking-change 16.0.0 make return type boolean
   */
  select(...values) {
    this._verifyValueAssignment(values);
    values.forEach(value => this._markSelected(value));
    const changed = this._hasQueuedChanges();
    this._emitChangeEvent();
    return changed;
  }
  /**
   * Deselects a value or an array of values.
   * @param values The values to deselect
   * @return Whether the selection changed as a result of this call
   * @breaking-change 16.0.0 make return type boolean
   */
  deselect(...values) {
    this._verifyValueAssignment(values);
    values.forEach(value => this._unmarkSelected(value));
    const changed = this._hasQueuedChanges();
    this._emitChangeEvent();
    return changed;
  }
  /**
   * Sets the selected values
   * @param values The new selected values
   * @return Whether the selection changed as a result of this call
   * @breaking-change 16.0.0 make return type boolean
   */
  setSelection(...values) {
    this._verifyValueAssignment(values);
    const oldValues = this.selected;
    const newSelectedSet = new Set(values);
    values.forEach(value => this._markSelected(value));
    oldValues.filter(value => !newSelectedSet.has(this._getConcreteValue(value, newSelectedSet))).forEach(value => this._unmarkSelected(value));
    const changed = this._hasQueuedChanges();
    this._emitChangeEvent();
    return changed;
  }
  /**
   * Toggles a value between selected and deselected.
   * @param value The value to toggle
   * @return Whether the selection changed as a result of this call
   * @breaking-change 16.0.0 make return type boolean
   */
  toggle(value) {
    return this.isSelected(value) ? this.deselect(value) : this.select(value);
  }
  /**
   * Clears all of the selected values.
   * @param flushEvent Whether to flush the changes in an event.
   *   If false, the changes to the selection will be flushed along with the next event.
   * @return Whether the selection changed as a result of this call
   * @breaking-change 16.0.0 make return type boolean
   */
  clear(flushEvent = true) {
    this._unmarkAll();
    const changed = this._hasQueuedChanges();
    if (flushEvent) {
      this._emitChangeEvent();
    }
    return changed;
  }
  /**
   * Determines whether a value is selected.
   */
  isSelected(value) {
    return this._selection.has(this._getConcreteValue(value));
  }
  /**
   * Determines whether the model does not have a value.
   */
  isEmpty() {
    return this._selection.size === 0;
  }
  /**
   * Determines whether the model has a value.
   */
  hasValue() {
    return !this.isEmpty();
  }
  /**
   * Sorts the selected values based on a predicate function.
   */
  sort(predicate) {
    if (this._multiple && this.selected) {
      this._selected.sort(predicate);
    }
  }
  /**
   * Gets whether multiple values can be selected.
   */
  isMultipleSelection() {
    return this._multiple;
  }
  /** Emits a change event and clears the records of selected and deselected values. */
  _emitChangeEvent() {
    // Clear the selected values so they can be re-cached.
    this._selected = null;
    if (this._selectedToEmit.length || this._deselectedToEmit.length) {
      this.changed.next({
        source: this,
        added: this._selectedToEmit,
        removed: this._deselectedToEmit
      });
      this._deselectedToEmit = [];
      this._selectedToEmit = [];
    }
  }
  /** Selects a value. */
  _markSelected(value) {
    value = this._getConcreteValue(value);
    if (!this.isSelected(value)) {
      if (!this._multiple) {
        this._unmarkAll();
      }
      if (!this.isSelected(value)) {
        this._selection.add(value);
      }
      if (this._emitChanges) {
        this._selectedToEmit.push(value);
      }
    }
  }
  /** Deselects a value. */
  _unmarkSelected(value) {
    value = this._getConcreteValue(value);
    if (this.isSelected(value)) {
      this._selection.delete(value);
      if (this._emitChanges) {
        this._deselectedToEmit.push(value);
      }
    }
  }
  /** Clears out the selected values. */
  _unmarkAll() {
    if (!this.isEmpty()) {
      this._selection.forEach(value => this._unmarkSelected(value));
    }
  }
  /**
   * Verifies the value assignment and throws an error if the specified value array is
   * including multiple values while the selection model is not supporting multiple values.
   */
  _verifyValueAssignment(values) {
    if (values.length > 1 && !this._multiple && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw getMultipleValuesInSingleSelectionError();
    }
  }
  /** Whether there are queued up change to be emitted. */
  _hasQueuedChanges() {
    return !!(this._deselectedToEmit.length || this._selectedToEmit.length);
  }
  /** Returns a value that is comparable to inputValue by applying compareWith function, returns the same inputValue otherwise. */
  _getConcreteValue(inputValue, selection) {
    if (!this.compareWith) {
      return inputValue;
    } else {
      selection = selection ?? this._selection;
      for (let selectedValue of selection) {
        if (this.compareWith(inputValue, selectedValue)) {
          return selectedValue;
        }
      }
      return inputValue;
    }
  }
}
/**
 * Returns an error that reports that multiple values are passed into a selection model
 * with a single value.
 * @docs-private
 */
function getMultipleValuesInSingleSelectionError() {
  return Error('Cannot pass multiple values into SelectionModel with single-value mode.');
}

/**
 * Class to coordinate unique selection based on name.
 * Intended to be consumed as an Angular service.
 * This service is needed because native radio change events are only fired on the item currently
 * being selected, and we still need to uncheck the previous selection.
 *
 * This service does not *store* any IDs and names because they may change at any time, so it is
 * less error-prone if they are simply passed through when the events occur.
 */
class UniqueSelectionDispatcher {
  constructor() {
    this._listeners = [];
  }
  /**
   * Notify other items that selection for the given name has been set.
   * @param id ID of the item.
   * @param name Name of the item.
   */
  notify(id, name) {
    for (let listener of this._listeners) {
      listener(id, name);
    }
  }
  /**
   * Listen for future changes to item selection.
   * @return Function used to deregister listener
   */
  listen(listener) {
    this._listeners.push(listener);
    return () => {
      this._listeners = this._listeners.filter(registered => {
        return listener !== registered;
      });
    };
  }
  ngOnDestroy() {
    this._listeners = [];
  }
  static {
    this.ɵfac = function UniqueSelectionDispatcher_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || UniqueSelectionDispatcher)();
    };
  }
  static {
    this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: UniqueSelectionDispatcher,
      factory: UniqueSelectionDispatcher.ɵfac,
      providedIn: 'root'
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](UniqueSelectionDispatcher, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=collections.mjs.map

/***/ }),

/***/ 81391:
/*!**********************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/drag-drop.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CDK_DRAG_CONFIG: () => (/* binding */ CDK_DRAG_CONFIG),
/* harmony export */   CDK_DRAG_HANDLE: () => (/* binding */ CDK_DRAG_HANDLE),
/* harmony export */   CDK_DRAG_PARENT: () => (/* binding */ CDK_DRAG_PARENT),
/* harmony export */   CDK_DRAG_PLACEHOLDER: () => (/* binding */ CDK_DRAG_PLACEHOLDER),
/* harmony export */   CDK_DRAG_PREVIEW: () => (/* binding */ CDK_DRAG_PREVIEW),
/* harmony export */   CDK_DROP_LIST: () => (/* binding */ CDK_DROP_LIST),
/* harmony export */   CDK_DROP_LIST_GROUP: () => (/* binding */ CDK_DROP_LIST_GROUP),
/* harmony export */   CdkDrag: () => (/* binding */ CdkDrag),
/* harmony export */   CdkDragHandle: () => (/* binding */ CdkDragHandle),
/* harmony export */   CdkDragPlaceholder: () => (/* binding */ CdkDragPlaceholder),
/* harmony export */   CdkDragPreview: () => (/* binding */ CdkDragPreview),
/* harmony export */   CdkDropList: () => (/* binding */ CdkDropList),
/* harmony export */   CdkDropListGroup: () => (/* binding */ CdkDropListGroup),
/* harmony export */   DragDrop: () => (/* binding */ DragDrop),
/* harmony export */   DragDropModule: () => (/* binding */ DragDropModule),
/* harmony export */   DragDropRegistry: () => (/* binding */ DragDropRegistry),
/* harmony export */   DragRef: () => (/* binding */ DragRef),
/* harmony export */   DropListRef: () => (/* binding */ DropListRef),
/* harmony export */   copyArrayItem: () => (/* binding */ copyArrayItem),
/* harmony export */   moveItemInArray: () => (/* binding */ moveItemInArray),
/* harmony export */   transferArrayItem: () => (/* binding */ transferArrayItem)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/scrolling */ 65478);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/a11y */ 18617);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/coercion */ 14085);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/platform */ 36860);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 18530);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 13961);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 40605);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 95601);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 71985);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 57786);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 84412);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 56977);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 96354);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 96697);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 88141);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 25558);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 99172);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/bidi */ 28203);












/** Creates a deep clone of an element. */
function deepCloneNode(node) {
  const clone = node.cloneNode(true);
  const descendantsWithId = clone.querySelectorAll('[id]');
  const nodeName = node.nodeName.toLowerCase();
  // Remove the `id` to avoid having multiple elements with the same id on the page.
  clone.removeAttribute('id');
  for (let i = 0; i < descendantsWithId.length; i++) {
    descendantsWithId[i].removeAttribute('id');
  }
  if (nodeName === 'canvas') {
    transferCanvasData(node, clone);
  } else if (nodeName === 'input' || nodeName === 'select' || nodeName === 'textarea') {
    transferInputData(node, clone);
  }
  transferData('canvas', node, clone, transferCanvasData);
  transferData('input, textarea, select', node, clone, transferInputData);
  return clone;
}
/** Matches elements between an element and its clone and allows for their data to be cloned. */
function transferData(selector, node, clone, callback) {
  const descendantElements = node.querySelectorAll(selector);
  if (descendantElements.length) {
    const cloneElements = clone.querySelectorAll(selector);
    for (let i = 0; i < descendantElements.length; i++) {
      callback(descendantElements[i], cloneElements[i]);
    }
  }
}
// Counter for unique cloned radio button names.
let cloneUniqueId = 0;
/** Transfers the data of one input element to another. */
function transferInputData(source, clone) {
  // Browsers throw an error when assigning the value of a file input programmatically.
  if (clone.type !== 'file') {
    clone.value = source.value;
  }
  // Radio button `name` attributes must be unique for radio button groups
  // otherwise original radio buttons can lose their checked state
  // once the clone is inserted in the DOM.
  if (clone.type === 'radio' && clone.name) {
    clone.name = `mat-clone-${clone.name}-${cloneUniqueId++}`;
  }
}
/** Transfers the data of one canvas element to another. */
function transferCanvasData(source, clone) {
  const context = clone.getContext('2d');
  if (context) {
    // In some cases `drawImage` can throw (e.g. if the canvas size is 0x0).
    // We can't do much about it so just ignore the error.
    try {
      context.drawImage(source, 0, 0);
    } catch {}
  }
}

/** Gets a mutable version of an element's bounding `DOMRect`. */
function getMutableClientRect(element) {
  const rect = element.getBoundingClientRect();
  // We need to clone the `clientRect` here, because all the values on it are readonly
  // and we need to be able to update them. Also we can't use a spread here, because
  // the values on a `DOMRect` aren't own properties. See:
  // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect#Notes
  return {
    top: rect.top,
    right: rect.right,
    bottom: rect.bottom,
    left: rect.left,
    width: rect.width,
    height: rect.height,
    x: rect.x,
    y: rect.y
  };
}
/**
 * Checks whether some coordinates are within a `DOMRect`.
 * @param clientRect DOMRect that is being checked.
 * @param x Coordinates along the X axis.
 * @param y Coordinates along the Y axis.
 */
function isInsideClientRect(clientRect, x, y) {
  const {
    top,
    bottom,
    left,
    right
  } = clientRect;
  return y >= top && y <= bottom && x >= left && x <= right;
}
/**
 * Updates the top/left positions of a `DOMRect`, as well as their bottom/right counterparts.
 * @param domRect `DOMRect` that should be updated.
 * @param top Amount to add to the `top` position.
 * @param left Amount to add to the `left` position.
 */
function adjustDomRect(domRect, top, left) {
  domRect.top += top;
  domRect.bottom = domRect.top + domRect.height;
  domRect.left += left;
  domRect.right = domRect.left + domRect.width;
}
/**
 * Checks whether the pointer coordinates are close to a DOMRect.
 * @param rect DOMRect to check against.
 * @param threshold Threshold around the DOMRect.
 * @param pointerX Coordinates along the X axis.
 * @param pointerY Coordinates along the Y axis.
 */
function isPointerNearDomRect(rect, threshold, pointerX, pointerY) {
  const {
    top,
    right,
    bottom,
    left,
    width,
    height
  } = rect;
  const xThreshold = width * threshold;
  const yThreshold = height * threshold;
  return pointerY > top - yThreshold && pointerY < bottom + yThreshold && pointerX > left - xThreshold && pointerX < right + xThreshold;
}

/** Keeps track of the scroll position and dimensions of the parents of an element. */
class ParentPositionTracker {
  constructor(_document) {
    this._document = _document;
    /** Cached positions of the scrollable parent elements. */
    this.positions = new Map();
  }
  /** Clears the cached positions. */
  clear() {
    this.positions.clear();
  }
  /** Caches the positions. Should be called at the beginning of a drag sequence. */
  cache(elements) {
    this.clear();
    this.positions.set(this._document, {
      scrollPosition: this.getViewportScrollPosition()
    });
    elements.forEach(element => {
      this.positions.set(element, {
        scrollPosition: {
          top: element.scrollTop,
          left: element.scrollLeft
        },
        clientRect: getMutableClientRect(element)
      });
    });
  }
  /** Handles scrolling while a drag is taking place. */
  handleScroll(event) {
    const target = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__._getEventTarget)(event);
    const cachedPosition = this.positions.get(target);
    if (!cachedPosition) {
      return null;
    }
    const scrollPosition = cachedPosition.scrollPosition;
    let newTop;
    let newLeft;
    if (target === this._document) {
      const viewportScrollPosition = this.getViewportScrollPosition();
      newTop = viewportScrollPosition.top;
      newLeft = viewportScrollPosition.left;
    } else {
      newTop = target.scrollTop;
      newLeft = target.scrollLeft;
    }
    const topDifference = scrollPosition.top - newTop;
    const leftDifference = scrollPosition.left - newLeft;
    // Go through and update the cached positions of the scroll
    // parents that are inside the element that was scrolled.
    this.positions.forEach((position, node) => {
      if (position.clientRect && target !== node && target.contains(node)) {
        adjustDomRect(position.clientRect, topDifference, leftDifference);
      }
    });
    scrollPosition.top = newTop;
    scrollPosition.left = newLeft;
    return {
      top: topDifference,
      left: leftDifference
    };
  }
  /**
   * Gets the scroll position of the viewport. Note that we use the scrollX and scrollY directly,
   * instead of going through the `ViewportRuler`, because the first value the ruler looks at is
   * the top/left offset of the `document.documentElement` which works for most cases, but breaks
   * if the element is offset by something like the `BlockScrollStrategy`.
   */
  getViewportScrollPosition() {
    return {
      top: window.scrollY,
      left: window.scrollX
    };
  }
}

/**
 * Gets the root HTML element of an embedded view.
 * If the root is not an HTML element it gets wrapped in one.
 */
function getRootNode(viewRef, _document) {
  const rootNodes = viewRef.rootNodes;
  if (rootNodes.length === 1 && rootNodes[0].nodeType === _document.ELEMENT_NODE) {
    return rootNodes[0];
  }
  const wrapper = _document.createElement('div');
  rootNodes.forEach(node => wrapper.appendChild(node));
  return wrapper;
}

/**
 * Shallow-extends a stylesheet object with another stylesheet-like object.
 * Note that the keys in `source` have to be dash-cased.
 * @docs-private
 */
function extendStyles(dest, source, importantProperties) {
  for (let key in source) {
    if (source.hasOwnProperty(key)) {
      const value = source[key];
      if (value) {
        dest.setProperty(key, value, importantProperties?.has(key) ? 'important' : '');
      } else {
        dest.removeProperty(key);
      }
    }
  }
  return dest;
}
/**
 * Toggles whether the native drag interactions should be enabled for an element.
 * @param element Element on which to toggle the drag interactions.
 * @param enable Whether the drag interactions should be enabled.
 * @docs-private
 */
function toggleNativeDragInteractions(element, enable) {
  const userSelect = enable ? '' : 'none';
  extendStyles(element.style, {
    'touch-action': enable ? '' : 'none',
    '-webkit-user-drag': enable ? '' : 'none',
    '-webkit-tap-highlight-color': enable ? '' : 'transparent',
    'user-select': userSelect,
    '-ms-user-select': userSelect,
    '-webkit-user-select': userSelect,
    '-moz-user-select': userSelect
  });
}
/**
 * Toggles whether an element is visible while preserving its dimensions.
 * @param element Element whose visibility to toggle
 * @param enable Whether the element should be visible.
 * @param importantProperties Properties to be set as `!important`.
 * @docs-private
 */
function toggleVisibility(element, enable, importantProperties) {
  extendStyles(element.style, {
    position: enable ? '' : 'fixed',
    top: enable ? '' : '0',
    opacity: enable ? '' : '0',
    left: enable ? '' : '-999em'
  }, importantProperties);
}
/**
 * Combines a transform string with an optional other transform
 * that exited before the base transform was applied.
 */
function combineTransforms(transform, initialTransform) {
  return initialTransform && initialTransform != 'none' ? transform + ' ' + initialTransform : transform;
}
/**
 * Matches the target element's size to the source's size.
 * @param target Element that needs to be resized.
 * @param sourceRect Dimensions of the source element.
 */
function matchElementSize(target, sourceRect) {
  target.style.width = `${sourceRect.width}px`;
  target.style.height = `${sourceRect.height}px`;
  target.style.transform = getTransform(sourceRect.left, sourceRect.top);
}
/**
 * Gets a 3d `transform` that can be applied to an element.
 * @param x Desired position of the element along the X axis.
 * @param y Desired position of the element along the Y axis.
 */
function getTransform(x, y) {
  // Round the transforms since some browsers will
  // blur the elements for sub-pixel transforms.
  return `translate3d(${Math.round(x)}px, ${Math.round(y)}px, 0)`;
}

/** Parses a CSS time value to milliseconds. */
function parseCssTimeUnitsToMs(value) {
  // Some browsers will return it in seconds, whereas others will return milliseconds.
  const multiplier = value.toLowerCase().indexOf('ms') > -1 ? 1 : 1000;
  return parseFloat(value) * multiplier;
}
/** Gets the transform transition duration, including the delay, of an element in milliseconds. */
function getTransformTransitionDurationInMs(element) {
  const computedStyle = getComputedStyle(element);
  const transitionedProperties = parseCssPropertyValue(computedStyle, 'transition-property');
  const property = transitionedProperties.find(prop => prop === 'transform' || prop === 'all');
  // If there's no transition for `all` or `transform`, we shouldn't do anything.
  if (!property) {
    return 0;
  }
  // Get the index of the property that we're interested in and match
  // it up to the same index in `transition-delay` and `transition-duration`.
  const propertyIndex = transitionedProperties.indexOf(property);
  const rawDurations = parseCssPropertyValue(computedStyle, 'transition-duration');
  const rawDelays = parseCssPropertyValue(computedStyle, 'transition-delay');
  return parseCssTimeUnitsToMs(rawDurations[propertyIndex]) + parseCssTimeUnitsToMs(rawDelays[propertyIndex]);
}
/** Parses out multiple values from a computed style into an array. */
function parseCssPropertyValue(computedStyle, name) {
  const value = computedStyle.getPropertyValue(name);
  return value.split(',').map(part => part.trim());
}

/** Inline styles to be set as `!important` while dragging. */
const importantProperties = new Set([
// Needs to be important, because some `mat-table` sets `position: sticky !important`. See #22781.
'position']);
class PreviewRef {
  get element() {
    return this._preview;
  }
  constructor(_document, _rootElement, _direction, _initialDomRect, _previewTemplate, _previewClass, _pickupPositionOnPage, _initialTransform, _zIndex) {
    this._document = _document;
    this._rootElement = _rootElement;
    this._direction = _direction;
    this._initialDomRect = _initialDomRect;
    this._previewTemplate = _previewTemplate;
    this._previewClass = _previewClass;
    this._pickupPositionOnPage = _pickupPositionOnPage;
    this._initialTransform = _initialTransform;
    this._zIndex = _zIndex;
  }
  attach(parent) {
    this._preview = this._createPreview();
    parent.appendChild(this._preview);
    // The null check is necessary for browsers that don't support the popover API.
    // Note that we use a string access for compatibility with Closure.
    if (supportsPopover(this._preview)) {
      this._preview['showPopover']();
    }
  }
  destroy() {
    this._preview.remove();
    this._previewEmbeddedView?.destroy();
    this._preview = this._previewEmbeddedView = null;
  }
  setTransform(value) {
    this._preview.style.transform = value;
  }
  getBoundingClientRect() {
    return this._preview.getBoundingClientRect();
  }
  addClass(className) {
    this._preview.classList.add(className);
  }
  getTransitionDuration() {
    return getTransformTransitionDurationInMs(this._preview);
  }
  addEventListener(name, handler) {
    this._preview.addEventListener(name, handler);
  }
  removeEventListener(name, handler) {
    this._preview.removeEventListener(name, handler);
  }
  _createPreview() {
    const previewConfig = this._previewTemplate;
    const previewClass = this._previewClass;
    const previewTemplate = previewConfig ? previewConfig.template : null;
    let preview;
    if (previewTemplate && previewConfig) {
      // Measure the element before we've inserted the preview
      // since the insertion could throw off the measurement.
      const rootRect = previewConfig.matchSize ? this._initialDomRect : null;
      const viewRef = previewConfig.viewContainer.createEmbeddedView(previewTemplate, previewConfig.context);
      viewRef.detectChanges();
      preview = getRootNode(viewRef, this._document);
      this._previewEmbeddedView = viewRef;
      if (previewConfig.matchSize) {
        matchElementSize(preview, rootRect);
      } else {
        preview.style.transform = getTransform(this._pickupPositionOnPage.x, this._pickupPositionOnPage.y);
      }
    } else {
      preview = deepCloneNode(this._rootElement);
      matchElementSize(preview, this._initialDomRect);
      if (this._initialTransform) {
        preview.style.transform = this._initialTransform;
      }
    }
    extendStyles(preview.style, {
      // It's important that we disable the pointer events on the preview, because
      // it can throw off the `document.elementFromPoint` calls in the `CdkDropList`.
      'pointer-events': 'none',
      // If the preview has a margin, it can throw off our positioning so we reset it. The reset
      // value for `margin-right` needs to be `auto` when opened as a popover, because our
      // positioning is always top/left based, but native popover seems to position itself
      // to the top/right if `<html>` or `<body>` have `dir="rtl"` (see #29604). Setting it
      // to `auto` pushed it to the top/left corner in RTL and is a noop in LTR.
      'margin': supportsPopover(preview) ? '0 auto 0 0' : '0',
      'position': 'fixed',
      'top': '0',
      'left': '0',
      'z-index': this._zIndex + ''
    }, importantProperties);
    toggleNativeDragInteractions(preview, false);
    preview.classList.add('cdk-drag-preview');
    preview.setAttribute('popover', 'manual');
    preview.setAttribute('dir', this._direction);
    if (previewClass) {
      if (Array.isArray(previewClass)) {
        previewClass.forEach(className => preview.classList.add(className));
      } else {
        preview.classList.add(previewClass);
      }
    }
    return preview;
  }
}
/** Checks whether a specific element supports the popover API. */
function supportsPopover(element) {
  return 'showPopover' in element;
}

/** Options that can be used to bind a passive event listener. */
const passiveEventListenerOptions = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__.normalizePassiveListenerOptions)({
  passive: true
});
/** Options that can be used to bind an active event listener. */
const activeEventListenerOptions = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__.normalizePassiveListenerOptions)({
  passive: false
});
/** Event options that can be used to bind an active, capturing event. */
const activeCapturingEventOptions$1 = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__.normalizePassiveListenerOptions)({
  passive: false,
  capture: true
});
/**
 * Time in milliseconds for which to ignore mouse events, after
 * receiving a touch event. Used to avoid doing double work for
 * touch devices where the browser fires fake mouse events, in
 * addition to touch events.
 */
const MOUSE_EVENT_IGNORE_TIME = 800;
/** Inline styles to be set as `!important` while dragging. */
const dragImportantProperties = new Set([
// Needs to be important, because some `mat-table` sets `position: sticky !important`. See #22781.
'position']);
/**
 * Reference to a draggable item. Used to manipulate or dispose of the item.
 */
class DragRef {
  /** Whether starting to drag this element is disabled. */
  get disabled() {
    return this._disabled || !!(this._dropContainer && this._dropContainer.disabled);
  }
  set disabled(value) {
    if (value !== this._disabled) {
      this._disabled = value;
      this._toggleNativeDragInteractions();
      this._handles.forEach(handle => toggleNativeDragInteractions(handle, value));
    }
  }
  constructor(element, _config, _document, _ngZone, _viewportRuler, _dragDropRegistry) {
    this._config = _config;
    this._document = _document;
    this._ngZone = _ngZone;
    this._viewportRuler = _viewportRuler;
    this._dragDropRegistry = _dragDropRegistry;
    /**
     * CSS `transform` applied to the element when it isn't being dragged. We need a
     * passive transform in order for the dragged element to retain its new position
     * after the user has stopped dragging and because we need to know the relative
     * position in case they start dragging again. This corresponds to `element.style.transform`.
     */
    this._passiveTransform = {
      x: 0,
      y: 0
    };
    /** CSS `transform` that is applied to the element while it's being dragged. */
    this._activeTransform = {
      x: 0,
      y: 0
    };
    /**
     * Whether the dragging sequence has been started. Doesn't
     * necessarily mean that the element has been moved.
     */
    this._hasStartedDragging = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(false);
    /** Emits when the item is being moved. */
    this._moveEvents = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    /** Subscription to pointer movement events. */
    this._pointerMoveSubscription = rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription.EMPTY;
    /** Subscription to the event that is dispatched when the user lifts their pointer. */
    this._pointerUpSubscription = rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription.EMPTY;
    /** Subscription to the viewport being scrolled. */
    this._scrollSubscription = rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription.EMPTY;
    /** Subscription to the viewport being resized. */
    this._resizeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription.EMPTY;
    /** Cached reference to the boundary element. */
    this._boundaryElement = null;
    /** Whether the native dragging interactions have been enabled on the root element. */
    this._nativeInteractionsEnabled = true;
    /** Elements that can be used to drag the draggable item. */
    this._handles = [];
    /** Registered handles that are currently disabled. */
    this._disabledHandles = new Set();
    /** Layout direction of the item. */
    this._direction = 'ltr';
    /**
     * Amount of milliseconds to wait after the user has put their
     * pointer down before starting to drag the element.
     */
    this.dragStartDelay = 0;
    /**
     * If the parent of the dragged element has a `scale` transform, it can throw off the
     * positioning when the user starts dragging. Use this input to notify the CDK of the scale.
     */
    this.scale = 1;
    this._disabled = false;
    /** Emits as the drag sequence is being prepared. */
    this.beforeStarted = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    /** Emits when the user starts dragging the item. */
    this.started = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    /** Emits when the user has released a drag item, before any animations have started. */
    this.released = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    /** Emits when the user stops dragging an item in the container. */
    this.ended = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    /** Emits when the user has moved the item into a new container. */
    this.entered = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    /** Emits when the user removes the item its container by dragging it into another container. */
    this.exited = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    /** Emits when the user drops the item inside a container. */
    this.dropped = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    /**
     * Emits as the user is dragging the item. Use with caution,
     * because this event will fire for every pixel that the user has dragged.
     */
    this.moved = this._moveEvents;
    /** Handler for the `mousedown`/`touchstart` events. */
    this._pointerDown = event => {
      this.beforeStarted.next();
      // Delegate the event based on whether it started from a handle or the element itself.
      if (this._handles.length) {
        const targetHandle = this._getTargetHandle(event);
        if (targetHandle && !this._disabledHandles.has(targetHandle) && !this.disabled) {
          this._initializeDragSequence(targetHandle, event);
        }
      } else if (!this.disabled) {
        this._initializeDragSequence(this._rootElement, event);
      }
    };
    /** Handler that is invoked when the user moves their pointer after they've initiated a drag. */
    this._pointerMove = event => {
      const pointerPosition = this._getPointerPositionOnPage(event);
      if (!this._hasStartedDragging()) {
        const distanceX = Math.abs(pointerPosition.x - this._pickupPositionOnPage.x);
        const distanceY = Math.abs(pointerPosition.y - this._pickupPositionOnPage.y);
        const isOverThreshold = distanceX + distanceY >= this._config.dragStartThreshold;
        // Only start dragging after the user has moved more than the minimum distance in either
        // direction. Note that this is preferable over doing something like `skip(minimumDistance)`
        // in the `pointerMove` subscription, because we're not guaranteed to have one move event
        // per pixel of movement (e.g. if the user moves their pointer quickly).
        if (isOverThreshold) {
          const isDelayElapsed = Date.now() >= this._dragStartTime + this._getDragStartDelay(event);
          const container = this._dropContainer;
          if (!isDelayElapsed) {
            this._endDragSequence(event);
            return;
          }
          // Prevent other drag sequences from starting while something in the container is still
          // being dragged. This can happen while we're waiting for the drop animation to finish
          // and can cause errors, because some elements might still be moving around.
          if (!container || !container.isDragging() && !container.isReceiving()) {
            // Prevent the default action as soon as the dragging sequence is considered as
            // "started" since waiting for the next event can allow the device to begin scrolling.
            if (event.cancelable) {
              event.preventDefault();
            }
            this._hasStartedDragging.set(true);
            this._ngZone.run(() => this._startDragSequence(event));
          }
        }
        return;
      }
      // We prevent the default action down here so that we know that dragging has started. This is
      // important for touch devices where doing this too early can unnecessarily block scrolling,
      // if there's a dragging delay.
      if (event.cancelable) {
        event.preventDefault();
      }
      const constrainedPointerPosition = this._getConstrainedPointerPosition(pointerPosition);
      this._hasMoved = true;
      this._lastKnownPointerPosition = pointerPosition;
      this._updatePointerDirectionDelta(constrainedPointerPosition);
      if (this._dropContainer) {
        this._updateActiveDropContainer(constrainedPointerPosition, pointerPosition);
      } else {
        // If there's a position constraint function, we want the element's top/left to be at the
        // specific position on the page. Use the initial position as a reference if that's the case.
        const offset = this.constrainPosition ? this._initialDomRect : this._pickupPositionOnPage;
        const activeTransform = this._activeTransform;
        activeTransform.x = constrainedPointerPosition.x - offset.x + this._passiveTransform.x;
        activeTransform.y = constrainedPointerPosition.y - offset.y + this._passiveTransform.y;
        this._applyRootElementTransform(activeTransform.x, activeTransform.y);
      }
      // Since this event gets fired for every pixel while dragging, we only
      // want to fire it if the consumer opted into it. Also we have to
      // re-enter the zone because we run all of the events on the outside.
      if (this._moveEvents.observers.length) {
        this._ngZone.run(() => {
          this._moveEvents.next({
            source: this,
            pointerPosition: constrainedPointerPosition,
            event,
            distance: this._getDragDistance(constrainedPointerPosition),
            delta: this._pointerDirectionDelta
          });
        });
      }
    };
    /** Handler that is invoked when the user lifts their pointer up, after initiating a drag. */
    this._pointerUp = event => {
      this._endDragSequence(event);
    };
    /** Handles a native `dragstart` event. */
    this._nativeDragStart = event => {
      if (this._handles.length) {
        const targetHandle = this._getTargetHandle(event);
        if (targetHandle && !this._disabledHandles.has(targetHandle) && !this.disabled) {
          event.preventDefault();
        }
      } else if (!this.disabled) {
        // Usually this isn't necessary since the we prevent the default action in `pointerDown`,
        // but some cases like dragging of links can slip through (see #24403).
        event.preventDefault();
      }
    };
    this.withRootElement(element).withParent(_config.parentDragRef || null);
    this._parentPositions = new ParentPositionTracker(_document);
    _dragDropRegistry.registerDragItem(this);
  }
  /**
   * Returns the element that is being used as a placeholder
   * while the current element is being dragged.
   */
  getPlaceholderElement() {
    return this._placeholder;
  }
  /** Returns the root draggable element. */
  getRootElement() {
    return this._rootElement;
  }
  /**
   * Gets the currently-visible element that represents the drag item.
   * While dragging this is the placeholder, otherwise it's the root element.
   */
  getVisibleElement() {
    return this.isDragging() ? this.getPlaceholderElement() : this.getRootElement();
  }
  /** Registers the handles that can be used to drag the element. */
  withHandles(handles) {
    this._handles = handles.map(handle => (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__.coerceElement)(handle));
    this._handles.forEach(handle => toggleNativeDragInteractions(handle, this.disabled));
    this._toggleNativeDragInteractions();
    // Delete any lingering disabled handles that may have been destroyed. Note that we re-create
    // the set, rather than iterate over it and filter out the destroyed handles, because while
    // the ES spec allows for sets to be modified while they're being iterated over, some polyfills
    // use an array internally which may throw an error.
    const disabledHandles = new Set();
    this._disabledHandles.forEach(handle => {
      if (this._handles.indexOf(handle) > -1) {
        disabledHandles.add(handle);
      }
    });
    this._disabledHandles = disabledHandles;
    return this;
  }
  /**
   * Registers the template that should be used for the drag preview.
   * @param template Template that from which to stamp out the preview.
   */
  withPreviewTemplate(template) {
    this._previewTemplate = template;
    return this;
  }
  /**
   * Registers the template that should be used for the drag placeholder.
   * @param template Template that from which to stamp out the placeholder.
   */
  withPlaceholderTemplate(template) {
    this._placeholderTemplate = template;
    return this;
  }
  /**
   * Sets an alternate drag root element. The root element is the element that will be moved as
   * the user is dragging. Passing an alternate root element is useful when trying to enable
   * dragging on an element that you might not have access to.
   */
  withRootElement(rootElement) {
    const element = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__.coerceElement)(rootElement);
    if (element !== this._rootElement) {
      if (this._rootElement) {
        this._removeRootElementListeners(this._rootElement);
      }
      this._ngZone.runOutsideAngular(() => {
        element.addEventListener('mousedown', this._pointerDown, activeEventListenerOptions);
        element.addEventListener('touchstart', this._pointerDown, passiveEventListenerOptions);
        element.addEventListener('dragstart', this._nativeDragStart, activeEventListenerOptions);
      });
      this._initialTransform = undefined;
      this._rootElement = element;
    }
    if (typeof SVGElement !== 'undefined' && this._rootElement instanceof SVGElement) {
      this._ownerSVGElement = this._rootElement.ownerSVGElement;
    }
    return this;
  }
  /**
   * Element to which the draggable's position will be constrained.
   */
  withBoundaryElement(boundaryElement) {
    this._boundaryElement = boundaryElement ? (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__.coerceElement)(boundaryElement) : null;
    this._resizeSubscription.unsubscribe();
    if (boundaryElement) {
      this._resizeSubscription = this._viewportRuler.change(10).subscribe(() => this._containInsideBoundaryOnResize());
    }
    return this;
  }
  /** Sets the parent ref that the ref is nested in.  */
  withParent(parent) {
    this._parentDragRef = parent;
    return this;
  }
  /** Removes the dragging functionality from the DOM element. */
  dispose() {
    this._removeRootElementListeners(this._rootElement);
    // Do this check before removing from the registry since it'll
    // stop being considered as dragged once it is removed.
    if (this.isDragging()) {
      // Since we move out the element to the end of the body while it's being
      // dragged, we have to make sure that it's removed if it gets destroyed.
      this._rootElement?.remove();
    }
    this._anchor?.remove();
    this._destroyPreview();
    this._destroyPlaceholder();
    this._dragDropRegistry.removeDragItem(this);
    this._removeListeners();
    this.beforeStarted.complete();
    this.started.complete();
    this.released.complete();
    this.ended.complete();
    this.entered.complete();
    this.exited.complete();
    this.dropped.complete();
    this._moveEvents.complete();
    this._handles = [];
    this._disabledHandles.clear();
    this._dropContainer = undefined;
    this._resizeSubscription.unsubscribe();
    this._parentPositions.clear();
    this._boundaryElement = this._rootElement = this._ownerSVGElement = this._placeholderTemplate = this._previewTemplate = this._anchor = this._parentDragRef = null;
  }
  /** Checks whether the element is currently being dragged. */
  isDragging() {
    return this._hasStartedDragging() && this._dragDropRegistry.isDragging(this);
  }
  /** Resets a standalone drag item to its initial position. */
  reset() {
    this._rootElement.style.transform = this._initialTransform || '';
    this._activeTransform = {
      x: 0,
      y: 0
    };
    this._passiveTransform = {
      x: 0,
      y: 0
    };
  }
  /**
   * Sets a handle as disabled. While a handle is disabled, it'll capture and interrupt dragging.
   * @param handle Handle element that should be disabled.
   */
  disableHandle(handle) {
    if (!this._disabledHandles.has(handle) && this._handles.indexOf(handle) > -1) {
      this._disabledHandles.add(handle);
      toggleNativeDragInteractions(handle, true);
    }
  }
  /**
   * Enables a handle, if it has been disabled.
   * @param handle Handle element to be enabled.
   */
  enableHandle(handle) {
    if (this._disabledHandles.has(handle)) {
      this._disabledHandles.delete(handle);
      toggleNativeDragInteractions(handle, this.disabled);
    }
  }
  /** Sets the layout direction of the draggable item. */
  withDirection(direction) {
    this._direction = direction;
    return this;
  }
  /** Sets the container that the item is part of. */
  _withDropContainer(container) {
    this._dropContainer = container;
  }
  /**
   * Gets the current position in pixels the draggable outside of a drop container.
   */
  getFreeDragPosition() {
    const position = this.isDragging() ? this._activeTransform : this._passiveTransform;
    return {
      x: position.x,
      y: position.y
    };
  }
  /**
   * Sets the current position in pixels the draggable outside of a drop container.
   * @param value New position to be set.
   */
  setFreeDragPosition(value) {
    this._activeTransform = {
      x: 0,
      y: 0
    };
    this._passiveTransform.x = value.x;
    this._passiveTransform.y = value.y;
    if (!this._dropContainer) {
      this._applyRootElementTransform(value.x, value.y);
    }
    return this;
  }
  /**
   * Sets the container into which to insert the preview element.
   * @param value Container into which to insert the preview.
   */
  withPreviewContainer(value) {
    this._previewContainer = value;
    return this;
  }
  /** Updates the item's sort order based on the last-known pointer position. */
  _sortFromLastPointerPosition() {
    const position = this._lastKnownPointerPosition;
    if (position && this._dropContainer) {
      this._updateActiveDropContainer(this._getConstrainedPointerPosition(position), position);
    }
  }
  /** Unsubscribes from the global subscriptions. */
  _removeListeners() {
    this._pointerMoveSubscription.unsubscribe();
    this._pointerUpSubscription.unsubscribe();
    this._scrollSubscription.unsubscribe();
    this._getShadowRoot()?.removeEventListener('selectstart', shadowDomSelectStart, activeCapturingEventOptions$1);
  }
  /** Destroys the preview element and its ViewRef. */
  _destroyPreview() {
    this._preview?.destroy();
    this._preview = null;
  }
  /** Destroys the placeholder element and its ViewRef. */
  _destroyPlaceholder() {
    this._placeholder?.remove();
    this._placeholderRef?.destroy();
    this._placeholder = this._placeholderRef = null;
  }
  /**
   * Clears subscriptions and stops the dragging sequence.
   * @param event Browser event object that ended the sequence.
   */
  _endDragSequence(event) {
    // Note that here we use `isDragging` from the service, rather than from `this`.
    // The difference is that the one from the service reflects whether a dragging sequence
    // has been initiated, whereas the one on `this` includes whether the user has passed
    // the minimum dragging threshold.
    if (!this._dragDropRegistry.isDragging(this)) {
      return;
    }
    this._removeListeners();
    this._dragDropRegistry.stopDragging(this);
    this._toggleNativeDragInteractions();
    if (this._handles) {
      this._rootElement.style.webkitTapHighlightColor = this._rootElementTapHighlight;
    }
    if (!this._hasStartedDragging()) {
      return;
    }
    this.released.next({
      source: this,
      event
    });
    if (this._dropContainer) {
      // Stop scrolling immediately, instead of waiting for the animation to finish.
      this._dropContainer._stopScrolling();
      this._animatePreviewToPlaceholder().then(() => {
        this._cleanupDragArtifacts(event);
        this._cleanupCachedDimensions();
        this._dragDropRegistry.stopDragging(this);
      });
    } else {
      // Convert the active transform into a passive one. This means that next time
      // the user starts dragging the item, its position will be calculated relatively
      // to the new passive transform.
      this._passiveTransform.x = this._activeTransform.x;
      const pointerPosition = this._getPointerPositionOnPage(event);
      this._passiveTransform.y = this._activeTransform.y;
      this._ngZone.run(() => {
        this.ended.next({
          source: this,
          distance: this._getDragDistance(pointerPosition),
          dropPoint: pointerPosition,
          event
        });
      });
      this._cleanupCachedDimensions();
      this._dragDropRegistry.stopDragging(this);
    }
  }
  /** Starts the dragging sequence. */
  _startDragSequence(event) {
    if (isTouchEvent(event)) {
      this._lastTouchEventTime = Date.now();
    }
    this._toggleNativeDragInteractions();
    // Needs to happen before the root element is moved.
    const shadowRoot = this._getShadowRoot();
    const dropContainer = this._dropContainer;
    if (shadowRoot) {
      // In some browsers the global `selectstart` that we maintain in the `DragDropRegistry`
      // doesn't cross the shadow boundary so we have to prevent it at the shadow root (see #28792).
      this._ngZone.runOutsideAngular(() => {
        shadowRoot.addEventListener('selectstart', shadowDomSelectStart, activeCapturingEventOptions$1);
      });
    }
    if (dropContainer) {
      const element = this._rootElement;
      const parent = element.parentNode;
      const placeholder = this._placeholder = this._createPlaceholderElement();
      const anchor = this._anchor = this._anchor || this._document.createComment(typeof ngDevMode === 'undefined' || ngDevMode ? 'cdk-drag-anchor' : '');
      // Insert an anchor node so that we can restore the element's position in the DOM.
      parent.insertBefore(anchor, element);
      // There's no risk of transforms stacking when inside a drop container so
      // we can keep the initial transform up to date any time dragging starts.
      this._initialTransform = element.style.transform || '';
      // Create the preview after the initial transform has
      // been cached, because it can be affected by the transform.
      this._preview = new PreviewRef(this._document, this._rootElement, this._direction, this._initialDomRect, this._previewTemplate || null, this.previewClass || null, this._pickupPositionOnPage, this._initialTransform, this._config.zIndex || 1000);
      this._preview.attach(this._getPreviewInsertionPoint(parent, shadowRoot));
      // We move the element out at the end of the body and we make it hidden, because keeping it in
      // place will throw off the consumer's `:last-child` selectors. We can't remove the element
      // from the DOM completely, because iOS will stop firing all subsequent events in the chain.
      toggleVisibility(element, false, dragImportantProperties);
      this._document.body.appendChild(parent.replaceChild(placeholder, element));
      this.started.next({
        source: this,
        event
      }); // Emit before notifying the container.
      dropContainer.start();
      this._initialContainer = dropContainer;
      this._initialIndex = dropContainer.getItemIndex(this);
    } else {
      this.started.next({
        source: this,
        event
      });
      this._initialContainer = this._initialIndex = undefined;
    }
    // Important to run after we've called `start` on the parent container
    // so that it has had time to resolve its scrollable parents.
    this._parentPositions.cache(dropContainer ? dropContainer.getScrollableParents() : []);
  }
  /**
   * Sets up the different variables and subscriptions
   * that will be necessary for the dragging sequence.
   * @param referenceElement Element that started the drag sequence.
   * @param event Browser event object that started the sequence.
   */
  _initializeDragSequence(referenceElement, event) {
    // Stop propagation if the item is inside another
    // draggable so we don't start multiple drag sequences.
    if (this._parentDragRef) {
      event.stopPropagation();
    }
    const isDragging = this.isDragging();
    const isTouchSequence = isTouchEvent(event);
    const isAuxiliaryMouseButton = !isTouchSequence && event.button !== 0;
    const rootElement = this._rootElement;
    const target = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__._getEventTarget)(event);
    const isSyntheticEvent = !isTouchSequence && this._lastTouchEventTime && this._lastTouchEventTime + MOUSE_EVENT_IGNORE_TIME > Date.now();
    const isFakeEvent = isTouchSequence ? (0,_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__.isFakeTouchstartFromScreenReader)(event) : (0,_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__.isFakeMousedownFromScreenReader)(event);
    // If the event started from an element with the native HTML drag&drop, it'll interfere
    // with our own dragging (e.g. `img` tags do it by default). Prevent the default action
    // to stop it from happening. Note that preventing on `dragstart` also seems to work, but
    // it's flaky and it fails if the user drags it away quickly. Also note that we only want
    // to do this for `mousedown` since doing the same for `touchstart` will stop any `click`
    // events from firing on touch devices.
    if (target && target.draggable && event.type === 'mousedown') {
      event.preventDefault();
    }
    // Abort if the user is already dragging or is using a mouse button other than the primary one.
    if (isDragging || isAuxiliaryMouseButton || isSyntheticEvent || isFakeEvent) {
      return;
    }
    // If we've got handles, we need to disable the tap highlight on the entire root element,
    // otherwise iOS will still add it, even though all the drag interactions on the handle
    // are disabled.
    if (this._handles.length) {
      const rootStyles = rootElement.style;
      this._rootElementTapHighlight = rootStyles.webkitTapHighlightColor || '';
      rootStyles.webkitTapHighlightColor = 'transparent';
    }
    this._hasMoved = false;
    this._hasStartedDragging.set(this._hasMoved);
    // Avoid multiple subscriptions and memory leaks when multi touch
    // (isDragging check above isn't enough because of possible temporal and/or dimensional delays)
    this._removeListeners();
    this._initialDomRect = this._rootElement.getBoundingClientRect();
    this._pointerMoveSubscription = this._dragDropRegistry.pointerMove.subscribe(this._pointerMove);
    this._pointerUpSubscription = this._dragDropRegistry.pointerUp.subscribe(this._pointerUp);
    this._scrollSubscription = this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe(scrollEvent => this._updateOnScroll(scrollEvent));
    if (this._boundaryElement) {
      this._boundaryRect = getMutableClientRect(this._boundaryElement);
    }
    // If we have a custom preview we can't know ahead of time how large it'll be so we position
    // it next to the cursor. The exception is when the consumer has opted into making the preview
    // the same size as the root element, in which case we do know the size.
    const previewTemplate = this._previewTemplate;
    this._pickupPositionInElement = previewTemplate && previewTemplate.template && !previewTemplate.matchSize ? {
      x: 0,
      y: 0
    } : this._getPointerPositionInElement(this._initialDomRect, referenceElement, event);
    const pointerPosition = this._pickupPositionOnPage = this._lastKnownPointerPosition = this._getPointerPositionOnPage(event);
    this._pointerDirectionDelta = {
      x: 0,
      y: 0
    };
    this._pointerPositionAtLastDirectionChange = {
      x: pointerPosition.x,
      y: pointerPosition.y
    };
    this._dragStartTime = Date.now();
    this._dragDropRegistry.startDragging(this, event);
  }
  /** Cleans up the DOM artifacts that were added to facilitate the element being dragged. */
  _cleanupDragArtifacts(event) {
    // Restore the element's visibility and insert it at its old position in the DOM.
    // It's important that we maintain the position, because moving the element around in the DOM
    // can throw off `NgFor` which does smart diffing and re-creates elements only when necessary,
    // while moving the existing elements in all other cases.
    toggleVisibility(this._rootElement, true, dragImportantProperties);
    this._anchor.parentNode.replaceChild(this._rootElement, this._anchor);
    this._destroyPreview();
    this._destroyPlaceholder();
    this._initialDomRect = this._boundaryRect = this._previewRect = this._initialTransform = undefined;
    // Re-enter the NgZone since we bound `document` events on the outside.
    this._ngZone.run(() => {
      const container = this._dropContainer;
      const currentIndex = container.getItemIndex(this);
      const pointerPosition = this._getPointerPositionOnPage(event);
      const distance = this._getDragDistance(pointerPosition);
      const isPointerOverContainer = container._isOverContainer(pointerPosition.x, pointerPosition.y);
      this.ended.next({
        source: this,
        distance,
        dropPoint: pointerPosition,
        event
      });
      this.dropped.next({
        item: this,
        currentIndex,
        previousIndex: this._initialIndex,
        container: container,
        previousContainer: this._initialContainer,
        isPointerOverContainer,
        distance,
        dropPoint: pointerPosition,
        event
      });
      container.drop(this, currentIndex, this._initialIndex, this._initialContainer, isPointerOverContainer, distance, pointerPosition, event);
      this._dropContainer = this._initialContainer;
    });
  }
  /**
   * Updates the item's position in its drop container, or moves it
   * into a new one, depending on its current drag position.
   */
  _updateActiveDropContainer({
    x,
    y
  }, {
    x: rawX,
    y: rawY
  }) {
    // Drop container that draggable has been moved into.
    let newContainer = this._initialContainer._getSiblingContainerFromPosition(this, x, y);
    // If we couldn't find a new container to move the item into, and the item has left its
    // initial container, check whether the it's over the initial container. This handles the
    // case where two containers are connected one way and the user tries to undo dragging an
    // item into a new container.
    if (!newContainer && this._dropContainer !== this._initialContainer && this._initialContainer._isOverContainer(x, y)) {
      newContainer = this._initialContainer;
    }
    if (newContainer && newContainer !== this._dropContainer) {
      this._ngZone.run(() => {
        // Notify the old container that the item has left.
        this.exited.next({
          item: this,
          container: this._dropContainer
        });
        this._dropContainer.exit(this);
        // Notify the new container that the item has entered.
        this._dropContainer = newContainer;
        this._dropContainer.enter(this, x, y, newContainer === this._initialContainer &&
        // If we're re-entering the initial container and sorting is disabled,
        // put item the into its starting index to begin with.
        newContainer.sortingDisabled ? this._initialIndex : undefined);
        this.entered.next({
          item: this,
          container: newContainer,
          currentIndex: newContainer.getItemIndex(this)
        });
      });
    }
    // Dragging may have been interrupted as a result of the events above.
    if (this.isDragging()) {
      this._dropContainer._startScrollingIfNecessary(rawX, rawY);
      this._dropContainer._sortItem(this, x, y, this._pointerDirectionDelta);
      if (this.constrainPosition) {
        this._applyPreviewTransform(x, y);
      } else {
        this._applyPreviewTransform(x - this._pickupPositionInElement.x, y - this._pickupPositionInElement.y);
      }
    }
  }
  /**
   * Animates the preview element from its current position to the location of the drop placeholder.
   * @returns Promise that resolves when the animation completes.
   */
  _animatePreviewToPlaceholder() {
    // If the user hasn't moved yet, the transitionend event won't fire.
    if (!this._hasMoved) {
      return Promise.resolve();
    }
    const placeholderRect = this._placeholder.getBoundingClientRect();
    // Apply the class that adds a transition to the preview.
    this._preview.addClass('cdk-drag-animating');
    // Move the preview to the placeholder position.
    this._applyPreviewTransform(placeholderRect.left, placeholderRect.top);
    // If the element doesn't have a `transition`, the `transitionend` event won't fire. Since
    // we need to trigger a style recalculation in order for the `cdk-drag-animating` class to
    // apply its style, we take advantage of the available info to figure out whether we need to
    // bind the event in the first place.
    const duration = this._preview.getTransitionDuration();
    if (duration === 0) {
      return Promise.resolve();
    }
    return this._ngZone.runOutsideAngular(() => {
      return new Promise(resolve => {
        const handler = event => {
          if (!event || this._preview && (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__._getEventTarget)(event) === this._preview.element && event.propertyName === 'transform') {
            this._preview?.removeEventListener('transitionend', handler);
            resolve();
            clearTimeout(timeout);
          }
        };
        // If a transition is short enough, the browser might not fire the `transitionend` event.
        // Since we know how long it's supposed to take, add a timeout with a 50% buffer that'll
        // fire if the transition hasn't completed when it was supposed to.
        const timeout = setTimeout(handler, duration * 1.5);
        this._preview.addEventListener('transitionend', handler);
      });
    });
  }
  /** Creates an element that will be shown instead of the current element while dragging. */
  _createPlaceholderElement() {
    const placeholderConfig = this._placeholderTemplate;
    const placeholderTemplate = placeholderConfig ? placeholderConfig.template : null;
    let placeholder;
    if (placeholderTemplate) {
      this._placeholderRef = placeholderConfig.viewContainer.createEmbeddedView(placeholderTemplate, placeholderConfig.context);
      this._placeholderRef.detectChanges();
      placeholder = getRootNode(this._placeholderRef, this._document);
    } else {
      placeholder = deepCloneNode(this._rootElement);
    }
    // Stop pointer events on the preview so the user can't
    // interact with it while the preview is animating.
    placeholder.style.pointerEvents = 'none';
    placeholder.classList.add('cdk-drag-placeholder');
    return placeholder;
  }
  /**
   * Figures out the coordinates at which an element was picked up.
   * @param referenceElement Element that initiated the dragging.
   * @param event Event that initiated the dragging.
   */
  _getPointerPositionInElement(elementRect, referenceElement, event) {
    const handleElement = referenceElement === this._rootElement ? null : referenceElement;
    const referenceRect = handleElement ? handleElement.getBoundingClientRect() : elementRect;
    const point = isTouchEvent(event) ? event.targetTouches[0] : event;
    const scrollPosition = this._getViewportScrollPosition();
    const x = point.pageX - referenceRect.left - scrollPosition.left;
    const y = point.pageY - referenceRect.top - scrollPosition.top;
    return {
      x: referenceRect.left - elementRect.left + x,
      y: referenceRect.top - elementRect.top + y
    };
  }
  /** Determines the point of the page that was touched by the user. */
  _getPointerPositionOnPage(event) {
    const scrollPosition = this._getViewportScrollPosition();
    const point = isTouchEvent(event) ?
    // `touches` will be empty for start/end events so we have to fall back to `changedTouches`.
    // Also note that on real devices we're guaranteed for either `touches` or `changedTouches`
    // to have a value, but Firefox in device emulation mode has a bug where both can be empty
    // for `touchstart` and `touchend` so we fall back to a dummy object in order to avoid
    // throwing an error. The value returned here will be incorrect, but since this only
    // breaks inside a developer tool and the value is only used for secondary information,
    // we can get away with it. See https://bugzilla.mozilla.org/show_bug.cgi?id=1615824.
    event.touches[0] || event.changedTouches[0] || {
      pageX: 0,
      pageY: 0
    } : event;
    const x = point.pageX - scrollPosition.left;
    const y = point.pageY - scrollPosition.top;
    // if dragging SVG element, try to convert from the screen coordinate system to the SVG
    // coordinate system
    if (this._ownerSVGElement) {
      const svgMatrix = this._ownerSVGElement.getScreenCTM();
      if (svgMatrix) {
        const svgPoint = this._ownerSVGElement.createSVGPoint();
        svgPoint.x = x;
        svgPoint.y = y;
        return svgPoint.matrixTransform(svgMatrix.inverse());
      }
    }
    return {
      x,
      y
    };
  }
  /** Gets the pointer position on the page, accounting for any position constraints. */
  _getConstrainedPointerPosition(point) {
    const dropContainerLock = this._dropContainer ? this._dropContainer.lockAxis : null;
    let {
      x,
      y
    } = this.constrainPosition ? this.constrainPosition(point, this, this._initialDomRect, this._pickupPositionInElement) : point;
    if (this.lockAxis === 'x' || dropContainerLock === 'x') {
      y = this._pickupPositionOnPage.y - (this.constrainPosition ? this._pickupPositionInElement.y : 0);
    } else if (this.lockAxis === 'y' || dropContainerLock === 'y') {
      x = this._pickupPositionOnPage.x - (this.constrainPosition ? this._pickupPositionInElement.x : 0);
    }
    if (this._boundaryRect) {
      // If not using a custom constrain we need to account for the pickup position in the element
      // otherwise we do not need to do this, as it has already been accounted for
      const {
        x: pickupX,
        y: pickupY
      } = !this.constrainPosition ? this._pickupPositionInElement : {
        x: 0,
        y: 0
      };
      const boundaryRect = this._boundaryRect;
      const {
        width: previewWidth,
        height: previewHeight
      } = this._getPreviewRect();
      const minY = boundaryRect.top + pickupY;
      const maxY = boundaryRect.bottom - (previewHeight - pickupY);
      const minX = boundaryRect.left + pickupX;
      const maxX = boundaryRect.right - (previewWidth - pickupX);
      x = clamp$1(x, minX, maxX);
      y = clamp$1(y, minY, maxY);
    }
    return {
      x,
      y
    };
  }
  /** Updates the current drag delta, based on the user's current pointer position on the page. */
  _updatePointerDirectionDelta(pointerPositionOnPage) {
    const {
      x,
      y
    } = pointerPositionOnPage;
    const delta = this._pointerDirectionDelta;
    const positionSinceLastChange = this._pointerPositionAtLastDirectionChange;
    // Amount of pixels the user has dragged since the last time the direction changed.
    const changeX = Math.abs(x - positionSinceLastChange.x);
    const changeY = Math.abs(y - positionSinceLastChange.y);
    // Because we handle pointer events on a per-pixel basis, we don't want the delta
    // to change for every pixel, otherwise anything that depends on it can look erratic.
    // To make the delta more consistent, we track how much the user has moved since the last
    // delta change and we only update it after it has reached a certain threshold.
    if (changeX > this._config.pointerDirectionChangeThreshold) {
      delta.x = x > positionSinceLastChange.x ? 1 : -1;
      positionSinceLastChange.x = x;
    }
    if (changeY > this._config.pointerDirectionChangeThreshold) {
      delta.y = y > positionSinceLastChange.y ? 1 : -1;
      positionSinceLastChange.y = y;
    }
    return delta;
  }
  /** Toggles the native drag interactions, based on how many handles are registered. */
  _toggleNativeDragInteractions() {
    if (!this._rootElement || !this._handles) {
      return;
    }
    const shouldEnable = this._handles.length > 0 || !this.isDragging();
    if (shouldEnable !== this._nativeInteractionsEnabled) {
      this._nativeInteractionsEnabled = shouldEnable;
      toggleNativeDragInteractions(this._rootElement, shouldEnable);
    }
  }
  /** Removes the manually-added event listeners from the root element. */
  _removeRootElementListeners(element) {
    element.removeEventListener('mousedown', this._pointerDown, activeEventListenerOptions);
    element.removeEventListener('touchstart', this._pointerDown, passiveEventListenerOptions);
    element.removeEventListener('dragstart', this._nativeDragStart, activeEventListenerOptions);
  }
  /**
   * Applies a `transform` to the root element, taking into account any existing transforms on it.
   * @param x New transform value along the X axis.
   * @param y New transform value along the Y axis.
   */
  _applyRootElementTransform(x, y) {
    const scale = 1 / this.scale;
    const transform = getTransform(x * scale, y * scale);
    const styles = this._rootElement.style;
    // Cache the previous transform amount only after the first drag sequence, because
    // we don't want our own transforms to stack on top of each other.
    // Should be excluded none because none + translate3d(x, y, x) is invalid css
    if (this._initialTransform == null) {
      this._initialTransform = styles.transform && styles.transform != 'none' ? styles.transform : '';
    }
    // Preserve the previous `transform` value, if there was one. Note that we apply our own
    // transform before the user's, because things like rotation can affect which direction
    // the element will be translated towards.
    styles.transform = combineTransforms(transform, this._initialTransform);
  }
  /**
   * Applies a `transform` to the preview, taking into account any existing transforms on it.
   * @param x New transform value along the X axis.
   * @param y New transform value along the Y axis.
   */
  _applyPreviewTransform(x, y) {
    // Only apply the initial transform if the preview is a clone of the original element, otherwise
    // it could be completely different and the transform might not make sense anymore.
    const initialTransform = this._previewTemplate?.template ? undefined : this._initialTransform;
    const transform = getTransform(x, y);
    this._preview.setTransform(combineTransforms(transform, initialTransform));
  }
  /**
   * Gets the distance that the user has dragged during the current drag sequence.
   * @param currentPosition Current position of the user's pointer.
   */
  _getDragDistance(currentPosition) {
    const pickupPosition = this._pickupPositionOnPage;
    if (pickupPosition) {
      return {
        x: currentPosition.x - pickupPosition.x,
        y: currentPosition.y - pickupPosition.y
      };
    }
    return {
      x: 0,
      y: 0
    };
  }
  /** Cleans up any cached element dimensions that we don't need after dragging has stopped. */
  _cleanupCachedDimensions() {
    this._boundaryRect = this._previewRect = undefined;
    this._parentPositions.clear();
  }
  /**
   * Checks whether the element is still inside its boundary after the viewport has been resized.
   * If not, the position is adjusted so that the element fits again.
   */
  _containInsideBoundaryOnResize() {
    let {
      x,
      y
    } = this._passiveTransform;
    if (x === 0 && y === 0 || this.isDragging() || !this._boundaryElement) {
      return;
    }
    // Note: don't use `_clientRectAtStart` here, because we want the latest position.
    const elementRect = this._rootElement.getBoundingClientRect();
    const boundaryRect = this._boundaryElement.getBoundingClientRect();
    // It's possible that the element got hidden away after dragging (e.g. by switching to a
    // different tab). Don't do anything in this case so we don't clear the user's position.
    if (boundaryRect.width === 0 && boundaryRect.height === 0 || elementRect.width === 0 && elementRect.height === 0) {
      return;
    }
    const leftOverflow = boundaryRect.left - elementRect.left;
    const rightOverflow = elementRect.right - boundaryRect.right;
    const topOverflow = boundaryRect.top - elementRect.top;
    const bottomOverflow = elementRect.bottom - boundaryRect.bottom;
    // If the element has become wider than the boundary, we can't
    // do much to make it fit so we just anchor it to the left.
    if (boundaryRect.width > elementRect.width) {
      if (leftOverflow > 0) {
        x += leftOverflow;
      }
      if (rightOverflow > 0) {
        x -= rightOverflow;
      }
    } else {
      x = 0;
    }
    // If the element has become taller than the boundary, we can't
    // do much to make it fit so we just anchor it to the top.
    if (boundaryRect.height > elementRect.height) {
      if (topOverflow > 0) {
        y += topOverflow;
      }
      if (bottomOverflow > 0) {
        y -= bottomOverflow;
      }
    } else {
      y = 0;
    }
    if (x !== this._passiveTransform.x || y !== this._passiveTransform.y) {
      this.setFreeDragPosition({
        y,
        x
      });
    }
  }
  /** Gets the drag start delay, based on the event type. */
  _getDragStartDelay(event) {
    const value = this.dragStartDelay;
    if (typeof value === 'number') {
      return value;
    } else if (isTouchEvent(event)) {
      return value.touch;
    }
    return value ? value.mouse : 0;
  }
  /** Updates the internal state of the draggable element when scrolling has occurred. */
  _updateOnScroll(event) {
    const scrollDifference = this._parentPositions.handleScroll(event);
    if (scrollDifference) {
      const target = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__._getEventTarget)(event);
      // DOMRect dimensions are based on the scroll position of the page and its parent
      // node so we have to update the cached boundary DOMRect if the user has scrolled.
      if (this._boundaryRect && target !== this._boundaryElement && target.contains(this._boundaryElement)) {
        adjustDomRect(this._boundaryRect, scrollDifference.top, scrollDifference.left);
      }
      this._pickupPositionOnPage.x += scrollDifference.left;
      this._pickupPositionOnPage.y += scrollDifference.top;
      // If we're in free drag mode, we have to update the active transform, because
      // it isn't relative to the viewport like the preview inside a drop list.
      if (!this._dropContainer) {
        this._activeTransform.x -= scrollDifference.left;
        this._activeTransform.y -= scrollDifference.top;
        this._applyRootElementTransform(this._activeTransform.x, this._activeTransform.y);
      }
    }
  }
  /** Gets the scroll position of the viewport. */
  _getViewportScrollPosition() {
    return this._parentPositions.positions.get(this._document)?.scrollPosition || this._parentPositions.getViewportScrollPosition();
  }
  /**
   * Lazily resolves and returns the shadow root of the element. We do this in a function, rather
   * than saving it in property directly on init, because we want to resolve it as late as possible
   * in order to ensure that the element has been moved into the shadow DOM. Doing it inside the
   * constructor might be too early if the element is inside of something like `ngFor` or `ngIf`.
   */
  _getShadowRoot() {
    if (this._cachedShadowRoot === undefined) {
      this._cachedShadowRoot = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__._getShadowRoot)(this._rootElement);
    }
    return this._cachedShadowRoot;
  }
  /** Gets the element into which the drag preview should be inserted. */
  _getPreviewInsertionPoint(initialParent, shadowRoot) {
    const previewContainer = this._previewContainer || 'global';
    if (previewContainer === 'parent') {
      return initialParent;
    }
    if (previewContainer === 'global') {
      const documentRef = this._document;
      // We can't use the body if the user is in fullscreen mode,
      // because the preview will render under the fullscreen element.
      // TODO(crisbeto): dedupe this with the `FullscreenOverlayContainer` eventually.
      return shadowRoot || documentRef.fullscreenElement || documentRef.webkitFullscreenElement || documentRef.mozFullScreenElement || documentRef.msFullscreenElement || documentRef.body;
    }
    return (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__.coerceElement)(previewContainer);
  }
  /** Lazily resolves and returns the dimensions of the preview. */
  _getPreviewRect() {
    // Cache the preview element rect if we haven't cached it already or if
    // we cached it too early before the element dimensions were computed.
    if (!this._previewRect || !this._previewRect.width && !this._previewRect.height) {
      this._previewRect = this._preview ? this._preview.getBoundingClientRect() : this._initialDomRect;
    }
    return this._previewRect;
  }
  /** Gets a handle that is the target of an event. */
  _getTargetHandle(event) {
    return this._handles.find(handle => {
      return event.target && (event.target === handle || handle.contains(event.target));
    });
  }
}
/** Clamps a value between a minimum and a maximum. */
function clamp$1(value, min, max) {
  return Math.max(min, Math.min(max, value));
}
/** Determines whether an event is a touch event. */
function isTouchEvent(event) {
  // This function is called for every pixel that the user has dragged so we need it to be
  // as fast as possible. Since we only bind mouse events and touch events, we can assume
  // that if the event's name starts with `t`, it's a touch event.
  return event.type[0] === 't';
}
/** Callback invoked for `selectstart` events inside the shadow DOM. */
function shadowDomSelectStart(event) {
  event.preventDefault();
}

/**
 * Moves an item one index in an array to another.
 * @param array Array in which to move the item.
 * @param fromIndex Starting index of the item.
 * @param toIndex Index to which the item should be moved.
 */
function moveItemInArray(array, fromIndex, toIndex) {
  const from = clamp(fromIndex, array.length - 1);
  const to = clamp(toIndex, array.length - 1);
  if (from === to) {
    return;
  }
  const target = array[from];
  const delta = to < from ? -1 : 1;
  for (let i = from; i !== to; i += delta) {
    array[i] = array[i + delta];
  }
  array[to] = target;
}
/**
 * Moves an item from one array to another.
 * @param currentArray Array from which to transfer the item.
 * @param targetArray Array into which to put the item.
 * @param currentIndex Index of the item in its current array.
 * @param targetIndex Index at which to insert the item.
 */
function transferArrayItem(currentArray, targetArray, currentIndex, targetIndex) {
  const from = clamp(currentIndex, currentArray.length - 1);
  const to = clamp(targetIndex, targetArray.length);
  if (currentArray.length) {
    targetArray.splice(to, 0, currentArray.splice(from, 1)[0]);
  }
}
/**
 * Copies an item from one array to another, leaving it in its
 * original position in current array.
 * @param currentArray Array from which to copy the item.
 * @param targetArray Array into which is copy the item.
 * @param currentIndex Index of the item in its current array.
 * @param targetIndex Index at which to insert the item.
 *
 */
function copyArrayItem(currentArray, targetArray, currentIndex, targetIndex) {
  const to = clamp(targetIndex, targetArray.length);
  if (currentArray.length) {
    targetArray.splice(to, 0, currentArray[currentIndex]);
  }
}
/** Clamps a number between zero and a maximum. */
function clamp(value, max) {
  return Math.max(0, Math.min(max, value));
}

/**
 * Strategy that only supports sorting along a single axis.
 * Items are reordered using CSS transforms which allows for sorting to be animated.
 * @docs-private
 */
class SingleAxisSortStrategy {
  constructor(_dragDropRegistry) {
    this._dragDropRegistry = _dragDropRegistry;
    /** Cache of the dimensions of all the items inside the container. */
    this._itemPositions = [];
    /** Direction in which the list is oriented. */
    this.orientation = 'vertical';
    /**
     * Keeps track of the item that was last swapped with the dragged item, as well as what direction
     * the pointer was moving in when the swap occurred and whether the user's pointer continued to
     * overlap with the swapped item after the swapping occurred.
     */
    this._previousSwap = {
      drag: null,
      delta: 0,
      overlaps: false
    };
  }
  /**
   * To be called when the drag sequence starts.
   * @param items Items that are currently in the list.
   */
  start(items) {
    this.withItems(items);
  }
  /**
   * To be called when an item is being sorted.
   * @param item Item to be sorted.
   * @param pointerX Position of the item along the X axis.
   * @param pointerY Position of the item along the Y axis.
   * @param pointerDelta Direction in which the pointer is moving along each axis.
   */
  sort(item, pointerX, pointerY, pointerDelta) {
    const siblings = this._itemPositions;
    const newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY, pointerDelta);
    if (newIndex === -1 && siblings.length > 0) {
      return null;
    }
    const isHorizontal = this.orientation === 'horizontal';
    const currentIndex = siblings.findIndex(currentItem => currentItem.drag === item);
    const siblingAtNewPosition = siblings[newIndex];
    const currentPosition = siblings[currentIndex].clientRect;
    const newPosition = siblingAtNewPosition.clientRect;
    const delta = currentIndex > newIndex ? 1 : -1;
    // How many pixels the item's placeholder should be offset.
    const itemOffset = this._getItemOffsetPx(currentPosition, newPosition, delta);
    // How many pixels all the other items should be offset.
    const siblingOffset = this._getSiblingOffsetPx(currentIndex, siblings, delta);
    // Save the previous order of the items before moving the item to its new index.
    // We use this to check whether an item has been moved as a result of the sorting.
    const oldOrder = siblings.slice();
    // Shuffle the array in place.
    moveItemInArray(siblings, currentIndex, newIndex);
    siblings.forEach((sibling, index) => {
      // Don't do anything if the position hasn't changed.
      if (oldOrder[index] === sibling) {
        return;
      }
      const isDraggedItem = sibling.drag === item;
      const offset = isDraggedItem ? itemOffset : siblingOffset;
      const elementToOffset = isDraggedItem ? item.getPlaceholderElement() : sibling.drag.getRootElement();
      // Update the offset to reflect the new position.
      sibling.offset += offset;
      const transformAmount = Math.round(sibling.offset * (1 / sibling.drag.scale));
      // Since we're moving the items with a `transform`, we need to adjust their cached
      // client rects to reflect their new position, as well as swap their positions in the cache.
      // Note that we shouldn't use `getBoundingClientRect` here to update the cache, because the
      // elements may be mid-animation which will give us a wrong result.
      if (isHorizontal) {
        // Round the transforms since some browsers will
        // blur the elements, for sub-pixel transforms.
        elementToOffset.style.transform = combineTransforms(`translate3d(${transformAmount}px, 0, 0)`, sibling.initialTransform);
        adjustDomRect(sibling.clientRect, 0, offset);
      } else {
        elementToOffset.style.transform = combineTransforms(`translate3d(0, ${transformAmount}px, 0)`, sibling.initialTransform);
        adjustDomRect(sibling.clientRect, offset, 0);
      }
    });
    // Note that it's important that we do this after the client rects have been adjusted.
    this._previousSwap.overlaps = isInsideClientRect(newPosition, pointerX, pointerY);
    this._previousSwap.drag = siblingAtNewPosition.drag;
    this._previousSwap.delta = isHorizontal ? pointerDelta.x : pointerDelta.y;
    return {
      previousIndex: currentIndex,
      currentIndex: newIndex
    };
  }
  /**
   * Called when an item is being moved into the container.
   * @param item Item that was moved into the container.
   * @param pointerX Position of the item along the X axis.
   * @param pointerY Position of the item along the Y axis.
   * @param index Index at which the item entered. If omitted, the container will try to figure it
   *   out automatically.
   */
  enter(item, pointerX, pointerY, index) {
    const newIndex = index == null || index < 0 ?
    // We use the coordinates of where the item entered the drop
    // zone to figure out at which index it should be inserted.
    this._getItemIndexFromPointerPosition(item, pointerX, pointerY) : index;
    const activeDraggables = this._activeDraggables;
    const currentIndex = activeDraggables.indexOf(item);
    const placeholder = item.getPlaceholderElement();
    let newPositionReference = activeDraggables[newIndex];
    // If the item at the new position is the same as the item that is being dragged,
    // it means that we're trying to restore the item to its initial position. In this
    // case we should use the next item from the list as the reference.
    if (newPositionReference === item) {
      newPositionReference = activeDraggables[newIndex + 1];
    }
    // If we didn't find a new position reference, it means that either the item didn't start off
    // in this container, or that the item requested to be inserted at the end of the list.
    if (!newPositionReference && (newIndex == null || newIndex === -1 || newIndex < activeDraggables.length - 1) && this._shouldEnterAsFirstChild(pointerX, pointerY)) {
      newPositionReference = activeDraggables[0];
    }
    // Since the item may be in the `activeDraggables` already (e.g. if the user dragged it
    // into another container and back again), we have to ensure that it isn't duplicated.
    if (currentIndex > -1) {
      activeDraggables.splice(currentIndex, 1);
    }
    // Don't use items that are being dragged as a reference, because
    // their element has been moved down to the bottom of the body.
    if (newPositionReference && !this._dragDropRegistry.isDragging(newPositionReference)) {
      const element = newPositionReference.getRootElement();
      element.parentElement.insertBefore(placeholder, element);
      activeDraggables.splice(newIndex, 0, item);
    } else {
      this._element.appendChild(placeholder);
      activeDraggables.push(item);
    }
    // The transform needs to be cleared so it doesn't throw off the measurements.
    placeholder.style.transform = '';
    // Note that usually `start` is called together with `enter` when an item goes into a new
    // container. This will cache item positions, but we need to refresh them since the amount
    // of items has changed.
    this._cacheItemPositions();
  }
  /** Sets the items that are currently part of the list. */
  withItems(items) {
    this._activeDraggables = items.slice();
    this._cacheItemPositions();
  }
  /** Assigns a sort predicate to the strategy. */
  withSortPredicate(predicate) {
    this._sortPredicate = predicate;
  }
  /** Resets the strategy to its initial state before dragging was started. */
  reset() {
    // TODO(crisbeto): may have to wait for the animations to finish.
    this._activeDraggables?.forEach(item => {
      const rootElement = item.getRootElement();
      if (rootElement) {
        const initialTransform = this._itemPositions.find(p => p.drag === item)?.initialTransform;
        rootElement.style.transform = initialTransform || '';
      }
    });
    this._itemPositions = [];
    this._activeDraggables = [];
    this._previousSwap.drag = null;
    this._previousSwap.delta = 0;
    this._previousSwap.overlaps = false;
  }
  /**
   * Gets a snapshot of items currently in the list.
   * Can include items that we dragged in from another list.
   */
  getActiveItemsSnapshot() {
    return this._activeDraggables;
  }
  /** Gets the index of a specific item. */
  getItemIndex(item) {
    // Items are sorted always by top/left in the cache, however they flow differently in RTL.
    // The rest of the logic still stands no matter what orientation we're in, however
    // we need to invert the array when determining the index.
    const items = this.orientation === 'horizontal' && this.direction === 'rtl' ? this._itemPositions.slice().reverse() : this._itemPositions;
    return items.findIndex(currentItem => currentItem.drag === item);
  }
  /** Used to notify the strategy that the scroll position has changed. */
  updateOnScroll(topDifference, leftDifference) {
    // Since we know the amount that the user has scrolled we can shift all of the
    // client rectangles ourselves. This is cheaper than re-measuring everything and
    // we can avoid inconsistent behavior where we might be measuring the element before
    // its position has changed.
    this._itemPositions.forEach(({
      clientRect
    }) => {
      adjustDomRect(clientRect, topDifference, leftDifference);
    });
    // We need two loops for this, because we want all of the cached
    // positions to be up-to-date before we re-sort the item.
    this._itemPositions.forEach(({
      drag
    }) => {
      if (this._dragDropRegistry.isDragging(drag)) {
        // We need to re-sort the item manually, because the pointer move
        // events won't be dispatched while the user is scrolling.
        drag._sortFromLastPointerPosition();
      }
    });
  }
  withElementContainer(container) {
    this._element = container;
  }
  /** Refreshes the position cache of the items and sibling containers. */
  _cacheItemPositions() {
    const isHorizontal = this.orientation === 'horizontal';
    this._itemPositions = this._activeDraggables.map(drag => {
      const elementToMeasure = drag.getVisibleElement();
      return {
        drag,
        offset: 0,
        initialTransform: elementToMeasure.style.transform || '',
        clientRect: getMutableClientRect(elementToMeasure)
      };
    }).sort((a, b) => {
      return isHorizontal ? a.clientRect.left - b.clientRect.left : a.clientRect.top - b.clientRect.top;
    });
  }
  /**
   * Gets the offset in pixels by which the item that is being dragged should be moved.
   * @param currentPosition Current position of the item.
   * @param newPosition Position of the item where the current item should be moved.
   * @param delta Direction in which the user is moving.
   */
  _getItemOffsetPx(currentPosition, newPosition, delta) {
    const isHorizontal = this.orientation === 'horizontal';
    let itemOffset = isHorizontal ? newPosition.left - currentPosition.left : newPosition.top - currentPosition.top;
    // Account for differences in the item width/height.
    if (delta === -1) {
      itemOffset += isHorizontal ? newPosition.width - currentPosition.width : newPosition.height - currentPosition.height;
    }
    return itemOffset;
  }
  /**
   * Gets the offset in pixels by which the items that aren't being dragged should be moved.
   * @param currentIndex Index of the item currently being dragged.
   * @param siblings All of the items in the list.
   * @param delta Direction in which the user is moving.
   */
  _getSiblingOffsetPx(currentIndex, siblings, delta) {
    const isHorizontal = this.orientation === 'horizontal';
    const currentPosition = siblings[currentIndex].clientRect;
    const immediateSibling = siblings[currentIndex + delta * -1];
    let siblingOffset = currentPosition[isHorizontal ? 'width' : 'height'] * delta;
    if (immediateSibling) {
      const start = isHorizontal ? 'left' : 'top';
      const end = isHorizontal ? 'right' : 'bottom';
      // Get the spacing between the start of the current item and the end of the one immediately
      // after it in the direction in which the user is dragging, or vice versa. We add it to the
      // offset in order to push the element to where it will be when it's inline and is influenced
      // by the `margin` of its siblings.
      if (delta === -1) {
        siblingOffset -= immediateSibling.clientRect[start] - currentPosition[end];
      } else {
        siblingOffset += currentPosition[start] - immediateSibling.clientRect[end];
      }
    }
    return siblingOffset;
  }
  /**
   * Checks if pointer is entering in the first position
   * @param pointerX Position of the user's pointer along the X axis.
   * @param pointerY Position of the user's pointer along the Y axis.
   */
  _shouldEnterAsFirstChild(pointerX, pointerY) {
    if (!this._activeDraggables.length) {
      return false;
    }
    const itemPositions = this._itemPositions;
    const isHorizontal = this.orientation === 'horizontal';
    // `itemPositions` are sorted by position while `activeDraggables` are sorted by child index
    // check if container is using some sort of "reverse" ordering (eg: flex-direction: row-reverse)
    const reversed = itemPositions[0].drag !== this._activeDraggables[0];
    if (reversed) {
      const lastItemRect = itemPositions[itemPositions.length - 1].clientRect;
      return isHorizontal ? pointerX >= lastItemRect.right : pointerY >= lastItemRect.bottom;
    } else {
      const firstItemRect = itemPositions[0].clientRect;
      return isHorizontal ? pointerX <= firstItemRect.left : pointerY <= firstItemRect.top;
    }
  }
  /**
   * Gets the index of an item in the drop container, based on the position of the user's pointer.
   * @param item Item that is being sorted.
   * @param pointerX Position of the user's pointer along the X axis.
   * @param pointerY Position of the user's pointer along the Y axis.
   * @param delta Direction in which the user is moving their pointer.
   */
  _getItemIndexFromPointerPosition(item, pointerX, pointerY, delta) {
    const isHorizontal = this.orientation === 'horizontal';
    const index = this._itemPositions.findIndex(({
      drag,
      clientRect
    }) => {
      // Skip the item itself.
      if (drag === item) {
        return false;
      }
      if (delta) {
        const direction = isHorizontal ? delta.x : delta.y;
        // If the user is still hovering over the same item as last time, their cursor hasn't left
        // the item after we made the swap, and they didn't change the direction in which they're
        // dragging, we don't consider it a direction swap.
        if (drag === this._previousSwap.drag && this._previousSwap.overlaps && direction === this._previousSwap.delta) {
          return false;
        }
      }
      return isHorizontal ?
      // Round these down since most browsers report client rects with
      // sub-pixel precision, whereas the pointer coordinates are rounded to pixels.
      pointerX >= Math.floor(clientRect.left) && pointerX < Math.floor(clientRect.right) : pointerY >= Math.floor(clientRect.top) && pointerY < Math.floor(clientRect.bottom);
    });
    return index === -1 || !this._sortPredicate(index, item) ? -1 : index;
  }
}

/**
 * Strategy that only supports sorting on a list that might wrap.
 * Items are reordered by moving their DOM nodes around.
 * @docs-private
 */
class MixedSortStrategy {
  constructor(_document, _dragDropRegistry) {
    this._document = _document;
    this._dragDropRegistry = _dragDropRegistry;
    /**
     * Keeps track of the item that was last swapped with the dragged item, as well as what direction
     * the pointer was moving in when the swap occurred and whether the user's pointer continued to
     * overlap with the swapped item after the swapping occurred.
     */
    this._previousSwap = {
      drag: null,
      deltaX: 0,
      deltaY: 0,
      overlaps: false
    };
    /**
     * Keeps track of the relationship between a node and its next sibling. This information
     * is used to restore the DOM to the order it was in before dragging started.
     */
    this._relatedNodes = [];
  }
  /**
   * To be called when the drag sequence starts.
   * @param items Items that are currently in the list.
   */
  start(items) {
    const childNodes = this._element.childNodes;
    this._relatedNodes = [];
    for (let i = 0; i < childNodes.length; i++) {
      const node = childNodes[i];
      this._relatedNodes.push([node, node.nextSibling]);
    }
    this.withItems(items);
  }
  /**
   * To be called when an item is being sorted.
   * @param item Item to be sorted.
   * @param pointerX Position of the item along the X axis.
   * @param pointerY Position of the item along the Y axis.
   * @param pointerDelta Direction in which the pointer is moving along each axis.
   */
  sort(item, pointerX, pointerY, pointerDelta) {
    const newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY);
    const previousSwap = this._previousSwap;
    if (newIndex === -1 || this._activeItems[newIndex] === item) {
      return null;
    }
    const toSwapWith = this._activeItems[newIndex];
    // Prevent too many swaps over the same item.
    if (previousSwap.drag === toSwapWith && previousSwap.overlaps && previousSwap.deltaX === pointerDelta.x && previousSwap.deltaY === pointerDelta.y) {
      return null;
    }
    const previousIndex = this.getItemIndex(item);
    const current = item.getPlaceholderElement();
    const overlapElement = toSwapWith.getRootElement();
    if (newIndex > previousIndex) {
      overlapElement.after(current);
    } else {
      overlapElement.before(current);
    }
    moveItemInArray(this._activeItems, previousIndex, newIndex);
    const newOverlapElement = this._getRootNode().elementFromPoint(pointerX, pointerY);
    // Note: it's tempting to save the entire `pointerDelta` object here, however that'll
    // break this functionality, because the same object is passed for all `sort` calls.
    previousSwap.deltaX = pointerDelta.x;
    previousSwap.deltaY = pointerDelta.y;
    previousSwap.drag = toSwapWith;
    previousSwap.overlaps = overlapElement === newOverlapElement || overlapElement.contains(newOverlapElement);
    return {
      previousIndex,
      currentIndex: newIndex
    };
  }
  /**
   * Called when an item is being moved into the container.
   * @param item Item that was moved into the container.
   * @param pointerX Position of the item along the X axis.
   * @param pointerY Position of the item along the Y axis.
   * @param index Index at which the item entered. If omitted, the container will try to figure it
   *   out automatically.
   */
  enter(item, pointerX, pointerY, index) {
    let enterIndex = index == null || index < 0 ? this._getItemIndexFromPointerPosition(item, pointerX, pointerY) : index;
    // In some cases (e.g. when the container has padding) we might not be able to figure
    // out which item to insert the dragged item next to, because the pointer didn't overlap
    // with anything. In that case we find the item that's closest to the pointer.
    if (enterIndex === -1) {
      enterIndex = this._getClosestItemIndexToPointer(item, pointerX, pointerY);
    }
    const targetItem = this._activeItems[enterIndex];
    const currentIndex = this._activeItems.indexOf(item);
    if (currentIndex > -1) {
      this._activeItems.splice(currentIndex, 1);
    }
    if (targetItem && !this._dragDropRegistry.isDragging(targetItem)) {
      this._activeItems.splice(enterIndex, 0, item);
      targetItem.getRootElement().before(item.getPlaceholderElement());
    } else {
      this._activeItems.push(item);
      this._element.appendChild(item.getPlaceholderElement());
    }
  }
  /** Sets the items that are currently part of the list. */
  withItems(items) {
    this._activeItems = items.slice();
  }
  /** Assigns a sort predicate to the strategy. */
  withSortPredicate(predicate) {
    this._sortPredicate = predicate;
  }
  /** Resets the strategy to its initial state before dragging was started. */
  reset() {
    const root = this._element;
    const previousSwap = this._previousSwap;
    // Moving elements around in the DOM can break things like the `@for` loop, because it
    // uses comment nodes to know where to insert elements. To avoid such issues, we restore
    // the DOM nodes in the list to their original order when the list is reset.
    // Note that this could be simpler if we just saved all the nodes, cleared the root
    // and then appended them in the original order. We don't do it, because it can break
    // down depending on when the snapshot was taken. E.g. we may end up snapshotting the
    // placeholder element which is removed after dragging.
    for (let i = this._relatedNodes.length - 1; i > -1; i--) {
      const [node, nextSibling] = this._relatedNodes[i];
      if (node.parentNode === root && node.nextSibling !== nextSibling) {
        if (nextSibling === null) {
          root.appendChild(node);
        } else if (nextSibling.parentNode === root) {
          root.insertBefore(node, nextSibling);
        }
      }
    }
    this._relatedNodes = [];
    this._activeItems = [];
    previousSwap.drag = null;
    previousSwap.deltaX = previousSwap.deltaY = 0;
    previousSwap.overlaps = false;
  }
  /**
   * Gets a snapshot of items currently in the list.
   * Can include items that we dragged in from another list.
   */
  getActiveItemsSnapshot() {
    return this._activeItems;
  }
  /** Gets the index of a specific item. */
  getItemIndex(item) {
    return this._activeItems.indexOf(item);
  }
  /** Used to notify the strategy that the scroll position has changed. */
  updateOnScroll() {
    this._activeItems.forEach(item => {
      if (this._dragDropRegistry.isDragging(item)) {
        // We need to re-sort the item manually, because the pointer move
        // events won't be dispatched while the user is scrolling.
        item._sortFromLastPointerPosition();
      }
    });
  }
  withElementContainer(container) {
    if (container !== this._element) {
      this._element = container;
      this._rootNode = undefined;
    }
  }
  /**
   * Gets the index of an item in the drop container, based on the position of the user's pointer.
   * @param item Item that is being sorted.
   * @param pointerX Position of the user's pointer along the X axis.
   * @param pointerY Position of the user's pointer along the Y axis.
   * @param delta Direction in which the user is moving their pointer.
   */
  _getItemIndexFromPointerPosition(item, pointerX, pointerY) {
    const elementAtPoint = this._getRootNode().elementFromPoint(Math.floor(pointerX), Math.floor(pointerY));
    const index = elementAtPoint ? this._activeItems.findIndex(item => {
      const root = item.getRootElement();
      return elementAtPoint === root || root.contains(elementAtPoint);
    }) : -1;
    return index === -1 || !this._sortPredicate(index, item) ? -1 : index;
  }
  /** Lazily resolves the list's root node. */
  _getRootNode() {
    // Resolve the root node lazily to ensure that the drop list is in its final place in the DOM.
    if (!this._rootNode) {
      this._rootNode = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__._getShadowRoot)(this._element) || this._document;
    }
    return this._rootNode;
  }
  /**
   * Finds the index of the item that's closest to the item being dragged.
   * @param item Item being dragged.
   * @param pointerX Position of the user's pointer along the X axis.
   * @param pointerY Position of the user's pointer along the Y axis.
   */
  _getClosestItemIndexToPointer(item, pointerX, pointerY) {
    if (this._activeItems.length === 0) {
      return -1;
    }
    if (this._activeItems.length === 1) {
      return 0;
    }
    let minDistance = Infinity;
    let minIndex = -1;
    // Find the Euclidean distance (https://en.wikipedia.org/wiki/Euclidean_distance) between each
    // item and the pointer, and return the smallest one. Note that this is a bit flawed in that DOM
    // nodes are rectangles, not points, so we use the top/left coordinates. It should be enough
    // for our purposes.
    for (let i = 0; i < this._activeItems.length; i++) {
      const current = this._activeItems[i];
      if (current !== item) {
        const {
          x,
          y
        } = current.getRootElement().getBoundingClientRect();
        const distance = Math.hypot(pointerX - x, pointerY - y);
        if (distance < minDistance) {
          minDistance = distance;
          minIndex = i;
        }
      }
    }
    return minIndex;
  }
}

/**
 * Proximity, as a ratio to width/height, at which a
 * dragged item will affect the drop container.
 */
const DROP_PROXIMITY_THRESHOLD = 0.05;
/**
 * Proximity, as a ratio to width/height at which to start auto-scrolling the drop list or the
 * viewport. The value comes from trying it out manually until it feels right.
 */
const SCROLL_PROXIMITY_THRESHOLD = 0.05;
/** Vertical direction in which we can auto-scroll. */
var AutoScrollVerticalDirection;
(function (AutoScrollVerticalDirection) {
  AutoScrollVerticalDirection[AutoScrollVerticalDirection["NONE"] = 0] = "NONE";
  AutoScrollVerticalDirection[AutoScrollVerticalDirection["UP"] = 1] = "UP";
  AutoScrollVerticalDirection[AutoScrollVerticalDirection["DOWN"] = 2] = "DOWN";
})(AutoScrollVerticalDirection || (AutoScrollVerticalDirection = {}));
/** Horizontal direction in which we can auto-scroll. */
var AutoScrollHorizontalDirection;
(function (AutoScrollHorizontalDirection) {
  AutoScrollHorizontalDirection[AutoScrollHorizontalDirection["NONE"] = 0] = "NONE";
  AutoScrollHorizontalDirection[AutoScrollHorizontalDirection["LEFT"] = 1] = "LEFT";
  AutoScrollHorizontalDirection[AutoScrollHorizontalDirection["RIGHT"] = 2] = "RIGHT";
})(AutoScrollHorizontalDirection || (AutoScrollHorizontalDirection = {}));
/**
 * Reference to a drop list. Used to manipulate or dispose of the container.
 */
class DropListRef {
  constructor(element, _dragDropRegistry, _document, _ngZone, _viewportRuler) {
    this._dragDropRegistry = _dragDropRegistry;
    this._ngZone = _ngZone;
    this._viewportRuler = _viewportRuler;
    /** Whether starting a dragging sequence from this container is disabled. */
    this.disabled = false;
    /** Whether sorting items within the list is disabled. */
    this.sortingDisabled = false;
    /**
     * Whether auto-scrolling the view when the user
     * moves their pointer close to the edges is disabled.
     */
    this.autoScrollDisabled = false;
    /** Number of pixels to scroll for each frame when auto-scrolling an element. */
    this.autoScrollStep = 2;
    /**
     * Function that is used to determine whether an item
     * is allowed to be moved into a drop container.
     */
    this.enterPredicate = () => true;
    /** Function that is used to determine whether an item can be sorted into a particular index. */
    this.sortPredicate = () => true;
    /** Emits right before dragging has started. */
    this.beforeStarted = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    /**
     * Emits when the user has moved a new drag item into this container.
     */
    this.entered = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    /**
     * Emits when the user removes an item from the container
     * by dragging it into another container.
     */
    this.exited = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    /** Emits when the user drops an item inside the container. */
    this.dropped = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    /** Emits as the user is swapping items while actively dragging. */
    this.sorted = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    /** Emits when a dragging sequence is started in a list connected to the current one. */
    this.receivingStarted = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    /** Emits when a dragging sequence is stopped from a list connected to the current one. */
    this.receivingStopped = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    /** Whether an item in the list is being dragged. */
    this._isDragging = false;
    /** Draggable items in the container. */
    this._draggables = [];
    /** Drop lists that are connected to the current one. */
    this._siblings = [];
    /** Connected siblings that currently have a dragged item. */
    this._activeSiblings = new Set();
    /** Subscription to the window being scrolled. */
    this._viewportScrollSubscription = rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription.EMPTY;
    /** Vertical direction in which the list is currently scrolling. */
    this._verticalScrollDirection = AutoScrollVerticalDirection.NONE;
    /** Horizontal direction in which the list is currently scrolling. */
    this._horizontalScrollDirection = AutoScrollHorizontalDirection.NONE;
    /** Used to signal to the current auto-scroll sequence when to stop. */
    this._stopScrollTimers = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    /** Shadow root of the current element. Necessary for `elementFromPoint` to resolve correctly. */
    this._cachedShadowRoot = null;
    /** Elements that can be scrolled while the user is dragging. */
    this._scrollableElements = [];
    /** Direction of the list's layout. */
    this._direction = 'ltr';
    /** Starts the interval that'll auto-scroll the element. */
    this._startScrollInterval = () => {
      this._stopScrolling();
      (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.interval)(0, rxjs__WEBPACK_IMPORTED_MODULE_7__.animationFrameScheduler).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._stopScrollTimers)).subscribe(() => {
        const node = this._scrollNode;
        const scrollStep = this.autoScrollStep;
        if (this._verticalScrollDirection === AutoScrollVerticalDirection.UP) {
          node.scrollBy(0, -scrollStep);
        } else if (this._verticalScrollDirection === AutoScrollVerticalDirection.DOWN) {
          node.scrollBy(0, scrollStep);
        }
        if (this._horizontalScrollDirection === AutoScrollHorizontalDirection.LEFT) {
          node.scrollBy(-scrollStep, 0);
        } else if (this._horizontalScrollDirection === AutoScrollHorizontalDirection.RIGHT) {
          node.scrollBy(scrollStep, 0);
        }
      });
    };
    const coercedElement = this.element = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__.coerceElement)(element);
    this._document = _document;
    this.withOrientation('vertical').withElementContainer(coercedElement);
    _dragDropRegistry.registerDropContainer(this);
    this._parentPositions = new ParentPositionTracker(_document);
  }
  /** Removes the drop list functionality from the DOM element. */
  dispose() {
    this._stopScrolling();
    this._stopScrollTimers.complete();
    this._viewportScrollSubscription.unsubscribe();
    this.beforeStarted.complete();
    this.entered.complete();
    this.exited.complete();
    this.dropped.complete();
    this.sorted.complete();
    this.receivingStarted.complete();
    this.receivingStopped.complete();
    this._activeSiblings.clear();
    this._scrollNode = null;
    this._parentPositions.clear();
    this._dragDropRegistry.removeDropContainer(this);
  }
  /** Whether an item from this list is currently being dragged. */
  isDragging() {
    return this._isDragging;
  }
  /** Starts dragging an item. */
  start() {
    this._draggingStarted();
    this._notifyReceivingSiblings();
  }
  /**
   * Attempts to move an item into the container.
   * @param item Item that was moved into the container.
   * @param pointerX Position of the item along the X axis.
   * @param pointerY Position of the item along the Y axis.
   * @param index Index at which the item entered. If omitted, the container will try to figure it
   *   out automatically.
   */
  enter(item, pointerX, pointerY, index) {
    this._draggingStarted();
    // If sorting is disabled, we want the item to return to its starting
    // position if the user is returning it to its initial container.
    if (index == null && this.sortingDisabled) {
      index = this._draggables.indexOf(item);
    }
    this._sortStrategy.enter(item, pointerX, pointerY, index);
    // Note that this usually happens inside `_draggingStarted` as well, but the dimensions
    // can change when the sort strategy moves the item around inside `enter`.
    this._cacheParentPositions();
    // Notify siblings at the end so that the item has been inserted into the `activeDraggables`.
    this._notifyReceivingSiblings();
    this.entered.next({
      item,
      container: this,
      currentIndex: this.getItemIndex(item)
    });
  }
  /**
   * Removes an item from the container after it was dragged into another container by the user.
   * @param item Item that was dragged out.
   */
  exit(item) {
    this._reset();
    this.exited.next({
      item,
      container: this
    });
  }
  /**
   * Drops an item into this container.
   * @param item Item being dropped into the container.
   * @param currentIndex Index at which the item should be inserted.
   * @param previousIndex Index of the item when dragging started.
   * @param previousContainer Container from which the item got dragged in.
   * @param isPointerOverContainer Whether the user's pointer was over the
   *    container when the item was dropped.
   * @param distance Distance the user has dragged since the start of the dragging sequence.
   * @param event Event that triggered the dropping sequence.
   *
   * @breaking-change 15.0.0 `previousIndex` and `event` parameters to become required.
   */
  drop(item, currentIndex, previousIndex, previousContainer, isPointerOverContainer, distance, dropPoint, event = {}) {
    this._reset();
    this.dropped.next({
      item,
      currentIndex,
      previousIndex,
      container: this,
      previousContainer,
      isPointerOverContainer,
      distance,
      dropPoint,
      event
    });
  }
  /**
   * Sets the draggable items that are a part of this list.
   * @param items Items that are a part of this list.
   */
  withItems(items) {
    const previousItems = this._draggables;
    this._draggables = items;
    items.forEach(item => item._withDropContainer(this));
    if (this.isDragging()) {
      const draggedItems = previousItems.filter(item => item.isDragging());
      // If all of the items being dragged were removed
      // from the list, abort the current drag sequence.
      if (draggedItems.every(item => items.indexOf(item) === -1)) {
        this._reset();
      } else {
        this._sortStrategy.withItems(this._draggables);
      }
    }
    return this;
  }
  /** Sets the layout direction of the drop list. */
  withDirection(direction) {
    this._direction = direction;
    if (this._sortStrategy instanceof SingleAxisSortStrategy) {
      this._sortStrategy.direction = direction;
    }
    return this;
  }
  /**
   * Sets the containers that are connected to this one. When two or more containers are
   * connected, the user will be allowed to transfer items between them.
   * @param connectedTo Other containers that the current containers should be connected to.
   */
  connectedTo(connectedTo) {
    this._siblings = connectedTo.slice();
    return this;
  }
  /**
   * Sets the orientation of the container.
   * @param orientation New orientation for the container.
   */
  withOrientation(orientation) {
    if (orientation === 'mixed') {
      this._sortStrategy = new MixedSortStrategy(this._document, this._dragDropRegistry);
    } else {
      const strategy = new SingleAxisSortStrategy(this._dragDropRegistry);
      strategy.direction = this._direction;
      strategy.orientation = orientation;
      this._sortStrategy = strategy;
    }
    this._sortStrategy.withElementContainer(this._container);
    this._sortStrategy.withSortPredicate((index, item) => this.sortPredicate(index, item, this));
    return this;
  }
  /**
   * Sets which parent elements are can be scrolled while the user is dragging.
   * @param elements Elements that can be scrolled.
   */
  withScrollableParents(elements) {
    const element = this._container;
    // We always allow the current element to be scrollable
    // so we need to ensure that it's in the array.
    this._scrollableElements = elements.indexOf(element) === -1 ? [element, ...elements] : elements.slice();
    return this;
  }
  /**
   * Configures the drop list so that a different element is used as the container for the
   * dragged items. This is useful for the cases when one might not have control over the
   * full DOM that sets up the dragging.
   * Note that the alternate container needs to be a descendant of the drop list.
   * @param container New element container to be assigned.
   */
  withElementContainer(container) {
    if (container === this._container) {
      return this;
    }
    const element = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__.coerceElement)(this.element);
    if ((typeof ngDevMode === 'undefined' || ngDevMode) && container !== element && !element.contains(container)) {
      throw new Error('Invalid DOM structure for drop list. Alternate container element must be a descendant of the drop list.');
    }
    const oldContainerIndex = this._scrollableElements.indexOf(this._container);
    const newContainerIndex = this._scrollableElements.indexOf(container);
    if (oldContainerIndex > -1) {
      this._scrollableElements.splice(oldContainerIndex, 1);
    }
    if (newContainerIndex > -1) {
      this._scrollableElements.splice(newContainerIndex, 1);
    }
    if (this._sortStrategy) {
      this._sortStrategy.withElementContainer(container);
    }
    this._cachedShadowRoot = null;
    this._scrollableElements.unshift(container);
    this._container = container;
    return this;
  }
  /** Gets the scrollable parents that are registered with this drop container. */
  getScrollableParents() {
    return this._scrollableElements;
  }
  /**
   * Figures out the index of an item in the container.
   * @param item Item whose index should be determined.
   */
  getItemIndex(item) {
    return this._isDragging ? this._sortStrategy.getItemIndex(item) : this._draggables.indexOf(item);
  }
  /**
   * Whether the list is able to receive the item that
   * is currently being dragged inside a connected drop list.
   */
  isReceiving() {
    return this._activeSiblings.size > 0;
  }
  /**
   * Sorts an item inside the container based on its position.
   * @param item Item to be sorted.
   * @param pointerX Position of the item along the X axis.
   * @param pointerY Position of the item along the Y axis.
   * @param pointerDelta Direction in which the pointer is moving along each axis.
   */
  _sortItem(item, pointerX, pointerY, pointerDelta) {
    // Don't sort the item if sorting is disabled or it's out of range.
    if (this.sortingDisabled || !this._domRect || !isPointerNearDomRect(this._domRect, DROP_PROXIMITY_THRESHOLD, pointerX, pointerY)) {
      return;
    }
    const result = this._sortStrategy.sort(item, pointerX, pointerY, pointerDelta);
    if (result) {
      this.sorted.next({
        previousIndex: result.previousIndex,
        currentIndex: result.currentIndex,
        container: this,
        item
      });
    }
  }
  /**
   * Checks whether the user's pointer is close to the edges of either the
   * viewport or the drop list and starts the auto-scroll sequence.
   * @param pointerX User's pointer position along the x axis.
   * @param pointerY User's pointer position along the y axis.
   */
  _startScrollingIfNecessary(pointerX, pointerY) {
    if (this.autoScrollDisabled) {
      return;
    }
    let scrollNode;
    let verticalScrollDirection = AutoScrollVerticalDirection.NONE;
    let horizontalScrollDirection = AutoScrollHorizontalDirection.NONE;
    // Check whether we should start scrolling any of the parent containers.
    this._parentPositions.positions.forEach((position, element) => {
      // We have special handling for the `document` below. Also this would be
      // nicer with a  for...of loop, but it requires changing a compiler flag.
      if (element === this._document || !position.clientRect || scrollNode) {
        return;
      }
      if (isPointerNearDomRect(position.clientRect, DROP_PROXIMITY_THRESHOLD, pointerX, pointerY)) {
        [verticalScrollDirection, horizontalScrollDirection] = getElementScrollDirections(element, position.clientRect, this._direction, pointerX, pointerY);
        if (verticalScrollDirection || horizontalScrollDirection) {
          scrollNode = element;
        }
      }
    });
    // Otherwise check if we can start scrolling the viewport.
    if (!verticalScrollDirection && !horizontalScrollDirection) {
      const {
        width,
        height
      } = this._viewportRuler.getViewportSize();
      const domRect = {
        width,
        height,
        top: 0,
        right: width,
        bottom: height,
        left: 0
      };
      verticalScrollDirection = getVerticalScrollDirection(domRect, pointerY);
      horizontalScrollDirection = getHorizontalScrollDirection(domRect, pointerX);
      scrollNode = window;
    }
    if (scrollNode && (verticalScrollDirection !== this._verticalScrollDirection || horizontalScrollDirection !== this._horizontalScrollDirection || scrollNode !== this._scrollNode)) {
      this._verticalScrollDirection = verticalScrollDirection;
      this._horizontalScrollDirection = horizontalScrollDirection;
      this._scrollNode = scrollNode;
      if ((verticalScrollDirection || horizontalScrollDirection) && scrollNode) {
        this._ngZone.runOutsideAngular(this._startScrollInterval);
      } else {
        this._stopScrolling();
      }
    }
  }
  /** Stops any currently-running auto-scroll sequences. */
  _stopScrolling() {
    this._stopScrollTimers.next();
  }
  /** Starts the dragging sequence within the list. */
  _draggingStarted() {
    const styles = this._container.style;
    this.beforeStarted.next();
    this._isDragging = true;
    if ((typeof ngDevMode === 'undefined' || ngDevMode) &&
    // Prevent the check from running on apps not using an alternate container. Ideally we
    // would always run it, but introducing it at this stage would be a breaking change.
    this._container !== (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__.coerceElement)(this.element)) {
      for (const drag of this._draggables) {
        if (!drag.isDragging() && drag.getVisibleElement().parentNode !== this._container) {
          throw new Error('Invalid DOM structure for drop list. All items must be placed directly inside of the element container.');
        }
      }
    }
    // We need to disable scroll snapping while the user is dragging, because it breaks automatic
    // scrolling. The browser seems to round the value based on the snapping points which means
    // that we can't increment/decrement the scroll position.
    this._initialScrollSnap = styles.msScrollSnapType || styles.scrollSnapType || '';
    styles.scrollSnapType = styles.msScrollSnapType = 'none';
    this._sortStrategy.start(this._draggables);
    this._cacheParentPositions();
    this._viewportScrollSubscription.unsubscribe();
    this._listenToScrollEvents();
  }
  /** Caches the positions of the configured scrollable parents. */
  _cacheParentPositions() {
    this._parentPositions.cache(this._scrollableElements);
    // The list element is always in the `scrollableElements`
    // so we can take advantage of the cached `DOMRect`.
    this._domRect = this._parentPositions.positions.get(this._container).clientRect;
  }
  /** Resets the container to its initial state. */
  _reset() {
    this._isDragging = false;
    const styles = this._container.style;
    styles.scrollSnapType = styles.msScrollSnapType = this._initialScrollSnap;
    this._siblings.forEach(sibling => sibling._stopReceiving(this));
    this._sortStrategy.reset();
    this._stopScrolling();
    this._viewportScrollSubscription.unsubscribe();
    this._parentPositions.clear();
  }
  /**
   * Checks whether the user's pointer is positioned over the container.
   * @param x Pointer position along the X axis.
   * @param y Pointer position along the Y axis.
   */
  _isOverContainer(x, y) {
    return this._domRect != null && isInsideClientRect(this._domRect, x, y);
  }
  /**
   * Figures out whether an item should be moved into a sibling
   * drop container, based on its current position.
   * @param item Drag item that is being moved.
   * @param x Position of the item along the X axis.
   * @param y Position of the item along the Y axis.
   */
  _getSiblingContainerFromPosition(item, x, y) {
    return this._siblings.find(sibling => sibling._canReceive(item, x, y));
  }
  /**
   * Checks whether the drop list can receive the passed-in item.
   * @param item Item that is being dragged into the list.
   * @param x Position of the item along the X axis.
   * @param y Position of the item along the Y axis.
   */
  _canReceive(item, x, y) {
    if (!this._domRect || !isInsideClientRect(this._domRect, x, y) || !this.enterPredicate(item, this)) {
      return false;
    }
    const elementFromPoint = this._getShadowRoot().elementFromPoint(x, y);
    // If there's no element at the pointer position, then
    // the client rect is probably scrolled out of the view.
    if (!elementFromPoint) {
      return false;
    }
    // The `DOMRect`, that we're using to find the container over which the user is
    // hovering, doesn't give us any information on whether the element has been scrolled
    // out of the view or whether it's overlapping with other containers. This means that
    // we could end up transferring the item into a container that's invisible or is positioned
    // below another one. We use the result from `elementFromPoint` to get the top-most element
    // at the pointer position and to find whether it's one of the intersecting drop containers.
    return elementFromPoint === this._container || this._container.contains(elementFromPoint);
  }
  /**
   * Called by one of the connected drop lists when a dragging sequence has started.
   * @param sibling Sibling in which dragging has started.
   */
  _startReceiving(sibling, items) {
    const activeSiblings = this._activeSiblings;
    if (!activeSiblings.has(sibling) && items.every(item => {
      // Note that we have to add an exception to the `enterPredicate` for items that started off
      // in this drop list. The drag ref has logic that allows an item to return to its initial
      // container, if it has left the initial container and none of the connected containers
      // allow it to enter. See `DragRef._updateActiveDropContainer` for more context.
      return this.enterPredicate(item, this) || this._draggables.indexOf(item) > -1;
    })) {
      activeSiblings.add(sibling);
      this._cacheParentPositions();
      this._listenToScrollEvents();
      this.receivingStarted.next({
        initiator: sibling,
        receiver: this,
        items
      });
    }
  }
  /**
   * Called by a connected drop list when dragging has stopped.
   * @param sibling Sibling whose dragging has stopped.
   */
  _stopReceiving(sibling) {
    this._activeSiblings.delete(sibling);
    this._viewportScrollSubscription.unsubscribe();
    this.receivingStopped.next({
      initiator: sibling,
      receiver: this
    });
  }
  /**
   * Starts listening to scroll events on the viewport.
   * Used for updating the internal state of the list.
   */
  _listenToScrollEvents() {
    this._viewportScrollSubscription = this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe(event => {
      if (this.isDragging()) {
        const scrollDifference = this._parentPositions.handleScroll(event);
        if (scrollDifference) {
          this._sortStrategy.updateOnScroll(scrollDifference.top, scrollDifference.left);
        }
      } else if (this.isReceiving()) {
        this._cacheParentPositions();
      }
    });
  }
  /**
   * Lazily resolves and returns the shadow root of the element. We do this in a function, rather
   * than saving it in property directly on init, because we want to resolve it as late as possible
   * in order to ensure that the element has been moved into the shadow DOM. Doing it inside the
   * constructor might be too early if the element is inside of something like `ngFor` or `ngIf`.
   */
  _getShadowRoot() {
    if (!this._cachedShadowRoot) {
      const shadowRoot = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__._getShadowRoot)(this._container);
      this._cachedShadowRoot = shadowRoot || this._document;
    }
    return this._cachedShadowRoot;
  }
  /** Notifies any siblings that may potentially receive the item. */
  _notifyReceivingSiblings() {
    const draggedItems = this._sortStrategy.getActiveItemsSnapshot().filter(item => item.isDragging());
    this._siblings.forEach(sibling => sibling._startReceiving(this, draggedItems));
  }
}
/**
 * Gets whether the vertical auto-scroll direction of a node.
 * @param clientRect Dimensions of the node.
 * @param pointerY Position of the user's pointer along the y axis.
 */
function getVerticalScrollDirection(clientRect, pointerY) {
  const {
    top,
    bottom,
    height
  } = clientRect;
  const yThreshold = height * SCROLL_PROXIMITY_THRESHOLD;
  if (pointerY >= top - yThreshold && pointerY <= top + yThreshold) {
    return AutoScrollVerticalDirection.UP;
  } else if (pointerY >= bottom - yThreshold && pointerY <= bottom + yThreshold) {
    return AutoScrollVerticalDirection.DOWN;
  }
  return AutoScrollVerticalDirection.NONE;
}
/**
 * Gets whether the horizontal auto-scroll direction of a node.
 * @param clientRect Dimensions of the node.
 * @param pointerX Position of the user's pointer along the x axis.
 */
function getHorizontalScrollDirection(clientRect, pointerX) {
  const {
    left,
    right,
    width
  } = clientRect;
  const xThreshold = width * SCROLL_PROXIMITY_THRESHOLD;
  if (pointerX >= left - xThreshold && pointerX <= left + xThreshold) {
    return AutoScrollHorizontalDirection.LEFT;
  } else if (pointerX >= right - xThreshold && pointerX <= right + xThreshold) {
    return AutoScrollHorizontalDirection.RIGHT;
  }
  return AutoScrollHorizontalDirection.NONE;
}
/**
 * Gets the directions in which an element node should be scrolled,
 * assuming that the user's pointer is already within it scrollable region.
 * @param element Element for which we should calculate the scroll direction.
 * @param clientRect Bounding client rectangle of the element.
 * @param direction Layout direction of the drop list.
 * @param pointerX Position of the user's pointer along the x axis.
 * @param pointerY Position of the user's pointer along the y axis.
 */
function getElementScrollDirections(element, clientRect, direction, pointerX, pointerY) {
  const computedVertical = getVerticalScrollDirection(clientRect, pointerY);
  const computedHorizontal = getHorizontalScrollDirection(clientRect, pointerX);
  let verticalScrollDirection = AutoScrollVerticalDirection.NONE;
  let horizontalScrollDirection = AutoScrollHorizontalDirection.NONE;
  // Note that we here we do some extra checks for whether the element is actually scrollable in
  // a certain direction and we only assign the scroll direction if it is. We do this so that we
  // can allow other elements to be scrolled, if the current element can't be scrolled anymore.
  // This allows us to handle cases where the scroll regions of two scrollable elements overlap.
  if (computedVertical) {
    const scrollTop = element.scrollTop;
    if (computedVertical === AutoScrollVerticalDirection.UP) {
      if (scrollTop > 0) {
        verticalScrollDirection = AutoScrollVerticalDirection.UP;
      }
    } else if (element.scrollHeight - scrollTop > element.clientHeight) {
      verticalScrollDirection = AutoScrollVerticalDirection.DOWN;
    }
  }
  if (computedHorizontal) {
    const scrollLeft = element.scrollLeft;
    if (direction === 'rtl') {
      if (computedHorizontal === AutoScrollHorizontalDirection.RIGHT) {
        // In RTL `scrollLeft` will be negative when scrolled.
        if (scrollLeft < 0) {
          horizontalScrollDirection = AutoScrollHorizontalDirection.RIGHT;
        }
      } else if (element.scrollWidth + scrollLeft > element.clientWidth) {
        horizontalScrollDirection = AutoScrollHorizontalDirection.LEFT;
      }
    } else {
      if (computedHorizontal === AutoScrollHorizontalDirection.LEFT) {
        if (scrollLeft > 0) {
          horizontalScrollDirection = AutoScrollHorizontalDirection.LEFT;
        }
      } else if (element.scrollWidth - scrollLeft > element.clientWidth) {
        horizontalScrollDirection = AutoScrollHorizontalDirection.RIGHT;
      }
    }
  }
  return [verticalScrollDirection, horizontalScrollDirection];
}

/** Event options that can be used to bind an active, capturing event. */
const activeCapturingEventOptions = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__.normalizePassiveListenerOptions)({
  passive: false,
  capture: true
});
/** Keeps track of the apps currently containing drag items. */
const activeApps = new Set();
/**
 * Component used to load the drag&drop reset styles.
 * @docs-private
 */
class _ResetsLoader {
  static {
    this.ɵfac = function _ResetsLoader_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ResetsLoader)();
    };
  }
  static {
    this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: _ResetsLoader,
      selectors: [["ng-component"]],
      hostAttrs: ["cdk-drag-resets-container", ""],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 0,
      vars: 0,
      template: function _ResetsLoader_Template(rf, ctx) {},
      styles: ["@layer cdk-resets{.cdk-drag-preview{background:none;border:none;padding:0;color:inherit}}.cdk-drag-placeholder *,.cdk-drag-preview *{pointer-events:none !important}"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](_ResetsLoader, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      standalone: true,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None,
      template: '',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      host: {
        'cdk-drag-resets-container': ''
      },
      styles: ["@layer cdk-resets{.cdk-drag-preview{background:none;border:none;padding:0;color:inherit}}.cdk-drag-placeholder *,.cdk-drag-preview *{pointer-events:none !important}"]
    }]
  }], null, null);
})();
// TODO(crisbeto): remove generics when making breaking changes.
/**
 * Service that keeps track of all the drag item and drop container
 * instances, and manages global event listeners on the `document`.
 * @docs-private
 */
class DragDropRegistry {
  constructor(_ngZone, _document) {
    this._ngZone = _ngZone;
    this._appRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.ApplicationRef);
    this._environmentInjector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.EnvironmentInjector);
    /** Registered drop container instances. */
    this._dropInstances = new Set();
    /** Registered drag item instances. */
    this._dragInstances = new Set();
    /** Drag item instances that are currently being dragged. */
    this._activeDragInstances = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)([]);
    /** Keeps track of the event listeners that we've bound to the `document`. */
    this._globalListeners = new Map();
    /**
     * Predicate function to check if an item is being dragged.  Moved out into a property,
     * because it'll be called a lot and we don't want to create a new function every time.
     */
    this._draggingPredicate = item => item.isDragging();
    /**
     * Emits the `touchmove` or `mousemove` events that are dispatched
     * while the user is dragging a drag item instance.
     */
    this.pointerMove = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    /**
     * Emits the `touchend` or `mouseup` events that are dispatched
     * while the user is dragging a drag item instance.
     */
    this.pointerUp = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    /**
     * Emits when the viewport has been scrolled while the user is dragging an item.
     * @deprecated To be turned into a private member. Use the `scrolled` method instead.
     * @breaking-change 13.0.0
     */
    this.scroll = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    /**
     * Event listener that will prevent the default browser action while the user is dragging.
     * @param event Event whose default action should be prevented.
     */
    this._preventDefaultWhileDragging = event => {
      if (this._activeDragInstances().length > 0) {
        event.preventDefault();
      }
    };
    /** Event listener for `touchmove` that is bound even if no dragging is happening. */
    this._persistentTouchmoveListener = event => {
      if (this._activeDragInstances().length > 0) {
        // Note that we only want to prevent the default action after dragging has actually started.
        // Usually this is the same time at which the item is added to the `_activeDragInstances`,
        // but it could be pushed back if the user has set up a drag delay or threshold.
        if (this._activeDragInstances().some(this._draggingPredicate)) {
          event.preventDefault();
        }
        this.pointerMove.next(event);
      }
    };
    this._document = _document;
  }
  /** Adds a drop container to the registry. */
  registerDropContainer(drop) {
    if (!this._dropInstances.has(drop)) {
      this._dropInstances.add(drop);
    }
  }
  /** Adds a drag item instance to the registry. */
  registerDragItem(drag) {
    this._dragInstances.add(drag);
    // The `touchmove` event gets bound once, ahead of time, because WebKit
    // won't preventDefault on a dynamically-added `touchmove` listener.
    // See https://bugs.webkit.org/show_bug.cgi?id=184250.
    if (this._dragInstances.size === 1) {
      this._ngZone.runOutsideAngular(() => {
        // The event handler has to be explicitly active,
        // because newer browsers make it passive by default.
        this._document.addEventListener('touchmove', this._persistentTouchmoveListener, activeCapturingEventOptions);
      });
    }
  }
  /** Removes a drop container from the registry. */
  removeDropContainer(drop) {
    this._dropInstances.delete(drop);
  }
  /** Removes a drag item instance from the registry. */
  removeDragItem(drag) {
    this._dragInstances.delete(drag);
    this.stopDragging(drag);
    if (this._dragInstances.size === 0) {
      this._document.removeEventListener('touchmove', this._persistentTouchmoveListener, activeCapturingEventOptions);
    }
  }
  /**
   * Starts the dragging sequence for a drag instance.
   * @param drag Drag instance which is being dragged.
   * @param event Event that initiated the dragging.
   */
  startDragging(drag, event) {
    // Do not process the same drag twice to avoid memory leaks and redundant listeners
    if (this._activeDragInstances().indexOf(drag) > -1) {
      return;
    }
    this._loadResets();
    this._activeDragInstances.update(instances => [...instances, drag]);
    if (this._activeDragInstances().length === 1) {
      const isTouchEvent = event.type.startsWith('touch');
      // We explicitly bind __active__ listeners here, because newer browsers will default to
      // passive ones for `mousemove` and `touchmove`. The events need to be active, because we
      // use `preventDefault` to prevent the page from scrolling while the user is dragging.
      this._globalListeners.set(isTouchEvent ? 'touchend' : 'mouseup', {
        handler: e => this.pointerUp.next(e),
        options: true
      }).set('scroll', {
        handler: e => this.scroll.next(e),
        // Use capturing so that we pick up scroll changes in any scrollable nodes that aren't
        // the document. See https://github.com/angular/components/issues/17144.
        options: true
      })
      // Preventing the default action on `mousemove` isn't enough to disable text selection
      // on Safari so we need to prevent the selection event as well. Alternatively this can
      // be done by setting `user-select: none` on the `body`, however it has causes a style
      // recalculation which can be expensive on pages with a lot of elements.
      .set('selectstart', {
        handler: this._preventDefaultWhileDragging,
        options: activeCapturingEventOptions
      });
      // We don't have to bind a move event for touch drag sequences, because
      // we already have a persistent global one bound from `registerDragItem`.
      if (!isTouchEvent) {
        this._globalListeners.set('mousemove', {
          handler: e => this.pointerMove.next(e),
          options: activeCapturingEventOptions
        });
      }
      this._ngZone.runOutsideAngular(() => {
        this._globalListeners.forEach((config, name) => {
          this._document.addEventListener(name, config.handler, config.options);
        });
      });
    }
  }
  /** Stops dragging a drag item instance. */
  stopDragging(drag) {
    this._activeDragInstances.update(instances => {
      const index = instances.indexOf(drag);
      if (index > -1) {
        instances.splice(index, 1);
        return [...instances];
      }
      return instances;
    });
    if (this._activeDragInstances().length === 0) {
      this._clearGlobalListeners();
    }
  }
  /** Gets whether a drag item instance is currently being dragged. */
  isDragging(drag) {
    return this._activeDragInstances().indexOf(drag) > -1;
  }
  /**
   * Gets a stream that will emit when any element on the page is scrolled while an item is being
   * dragged.
   * @param shadowRoot Optional shadow root that the current dragging sequence started from.
   *   Top-level listeners won't pick up events coming from the shadow DOM so this parameter can
   *   be used to include an additional top-level listener at the shadow root level.
   */
  scrolled(shadowRoot) {
    const streams = [this.scroll];
    if (shadowRoot && shadowRoot !== this._document) {
      // Note that this is basically the same as `fromEvent` from rxjs, but we do it ourselves,
      // because we want to guarantee that the event is bound outside of the `NgZone`. With
      // `fromEvent` it'll only happen if the subscription is outside the `NgZone`.
      streams.push(new rxjs__WEBPACK_IMPORTED_MODULE_9__.Observable(observer => {
        return this._ngZone.runOutsideAngular(() => {
          const eventOptions = true;
          const callback = event => {
            if (this._activeDragInstances().length) {
              observer.next(event);
            }
          };
          shadowRoot.addEventListener('scroll', callback, eventOptions);
          return () => {
            shadowRoot.removeEventListener('scroll', callback, eventOptions);
          };
        });
      }));
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.merge)(...streams);
  }
  ngOnDestroy() {
    this._dragInstances.forEach(instance => this.removeDragItem(instance));
    this._dropInstances.forEach(instance => this.removeDropContainer(instance));
    this._clearGlobalListeners();
    this.pointerMove.complete();
    this.pointerUp.complete();
  }
  /** Clears out the global event listeners from the `document`. */
  _clearGlobalListeners() {
    this._globalListeners.forEach((config, name) => {
      this._document.removeEventListener(name, config.handler, config.options);
    });
    this._globalListeners.clear();
  }
  // TODO(crisbeto): abstract this away into something reusable.
  /** Loads the CSS resets needed for the module to work correctly. */
  _loadResets() {
    if (!activeApps.has(this._appRef)) {
      activeApps.add(this._appRef);
      const componentRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.createComponent)(_ResetsLoader, {
        environmentInjector: this._environmentInjector
      });
      this._appRef.onDestroy(() => {
        activeApps.delete(this._appRef);
        if (activeApps.size === 0) {
          componentRef.destroy();
        }
      });
    }
  }
  static {
    this.ɵfac = function DragDropRegistry_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DragDropRegistry)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT));
    };
  }
  static {
    this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: DragDropRegistry,
      factory: DragDropRegistry.ɵfac,
      providedIn: 'root'
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DragDropRegistry, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT]
    }]
  }], null);
})();

/** Default configuration to be used when creating a `DragRef`. */
const DEFAULT_CONFIG = {
  dragStartThreshold: 5,
  pointerDirectionChangeThreshold: 5
};
/**
 * Service that allows for drag-and-drop functionality to be attached to DOM elements.
 */
class DragDrop {
  constructor(_document, _ngZone, _viewportRuler, _dragDropRegistry) {
    this._document = _document;
    this._ngZone = _ngZone;
    this._viewportRuler = _viewportRuler;
    this._dragDropRegistry = _dragDropRegistry;
  }
  /**
   * Turns an element into a draggable item.
   * @param element Element to which to attach the dragging functionality.
   * @param config Object used to configure the dragging behavior.
   */
  createDrag(element, config = DEFAULT_CONFIG) {
    return new DragRef(element, config, this._document, this._ngZone, this._viewportRuler, this._dragDropRegistry);
  }
  /**
   * Turns an element into a drop list.
   * @param element Element to which to attach the drop list functionality.
   */
  createDropList(element) {
    return new DropListRef(element, this._dragDropRegistry, this._document, this._ngZone, this._viewportRuler);
  }
  static {
    this.ɵfac = function DragDrop_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DragDrop)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__.ViewportRuler), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](DragDropRegistry));
    };
  }
  static {
    this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: DragDrop,
      factory: DragDrop.ɵfac,
      providedIn: 'root'
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DragDrop, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], () => [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone
  }, {
    type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__.ViewportRuler
  }, {
    type: DragDropRegistry
  }], null);
})();

/**
 * Injection token that can be used for a `CdkDrag` to provide itself as a parent to the
 * drag-specific child directive (`CdkDragHandle`, `CdkDragPreview` etc.). Used primarily
 * to avoid circular imports.
 * @docs-private
 */
const CDK_DRAG_PARENT = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('CDK_DRAG_PARENT');

/**
 * Asserts that a particular node is an element.
 * @param node Node to be checked.
 * @param name Name to attach to the error message.
 */
function assertElementNode(node, name) {
  if (node.nodeType !== 1) {
    throw Error(`${name} must be attached to an element node. ` + `Currently attached to "${node.nodeName}".`);
  }
}

/**
 * Injection token that can be used to reference instances of `CdkDragHandle`. It serves as
 * alternative token to the actual `CdkDragHandle` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */
const CDK_DRAG_HANDLE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('CdkDragHandle');
/** Handle that can be used to drag a CdkDrag instance. */
class CdkDragHandle {
  /** Whether starting to drag through this handle is disabled. */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = value;
    this._stateChanges.next(this);
  }
  constructor(element, _parentDrag) {
    this.element = element;
    this._parentDrag = _parentDrag;
    /** Emits when the state of the handle has changed. */
    this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this._disabled = false;
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      assertElementNode(element.nativeElement, 'cdkDragHandle');
    }
    _parentDrag?._addHandle(this);
  }
  ngOnDestroy() {
    this._parentDrag?._removeHandle(this);
    this._stateChanges.complete();
  }
  static {
    this.ɵfac = function CdkDragHandle_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkDragHandle)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CDK_DRAG_PARENT, 12));
    };
  }
  static {
    this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: CdkDragHandle,
      selectors: [["", "cdkDragHandle", ""]],
      hostAttrs: [1, "cdk-drag-handle"],
      inputs: {
        disabled: [2, "cdkDragHandleDisabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_1__.booleanAttribute]
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: CDK_DRAG_HANDLE,
        useExisting: CdkDragHandle
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInputTransformsFeature"]]
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkDragHandle, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: '[cdkDragHandle]',
      standalone: true,
      host: {
        'class': 'cdk-drag-handle'
      },
      providers: [{
        provide: CDK_DRAG_HANDLE,
        useExisting: CdkDragHandle
      }]
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
      args: [CDK_DRAG_PARENT]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.SkipSelf
    }]
  }], {
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: [{
        alias: 'cdkDragHandleDisabled',
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_1__.booleanAttribute
      }]
    }]
  });
})();

/**
 * Injection token that can be used to configure the
 * behavior of the drag&drop-related components.
 */
const CDK_DRAG_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('CDK_DRAG_CONFIG');
const DRAG_HOST_CLASS = 'cdk-drag';
/**
 * Injection token that can be used to reference instances of `CdkDropList`. It serves as
 * alternative token to the actual `CdkDropList` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */
const CDK_DROP_LIST = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('CdkDropList');
/** Element that can be moved inside a CdkDropList container. */
class CdkDrag {
  static {
    this._dragInstances = [];
  }
  /** Whether starting to drag this element is disabled. */
  get disabled() {
    return this._disabled || this.dropContainer && this.dropContainer.disabled;
  }
  set disabled(value) {
    this._disabled = value;
    this._dragRef.disabled = this._disabled;
  }
  constructor( /** Element that the draggable is attached to. */
  element, /** Droppable container that the draggable is a part of. */
  dropContainer,
  /**
   * @deprecated `_document` parameter no longer being used and will be removed.
   * @breaking-change 12.0.0
   */
  _document, _ngZone, _viewContainerRef, config, _dir, dragDrop, _changeDetectorRef, _selfHandle, _parentDrag) {
    this.element = element;
    this.dropContainer = dropContainer;
    this._ngZone = _ngZone;
    this._viewContainerRef = _viewContainerRef;
    this._dir = _dir;
    this._changeDetectorRef = _changeDetectorRef;
    this._selfHandle = _selfHandle;
    this._parentDrag = _parentDrag;
    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this._handles = new rxjs__WEBPACK_IMPORTED_MODULE_13__.BehaviorSubject([]);
    /**
     * If the parent of the dragged element has a `scale` transform, it can throw off the
     * positioning when the user starts dragging. Use this input to notify the CDK of the scale.
     */
    this.scale = 1;
    /** Emits when the user starts dragging the item. */
    this.started = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /** Emits when the user has released a drag item, before any animations have started. */
    this.released = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /** Emits when the user stops dragging an item in the container. */
    this.ended = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /** Emits when the user has moved the item into a new container. */
    this.entered = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /** Emits when the user removes the item its container by dragging it into another container. */
    this.exited = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /** Emits when the user drops the item inside a container. */
    this.dropped = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /**
     * Emits as the user is dragging the item. Use with caution,
     * because this event will fire for every pixel that the user has dragged.
     */
    this.moved = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Observable(observer => {
      const subscription = this._dragRef.moved.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.map)(movedEvent => ({
        source: this,
        pointerPosition: movedEvent.pointerPosition,
        event: movedEvent.event,
        delta: movedEvent.delta,
        distance: movedEvent.distance
      }))).subscribe(observer);
      return () => {
        subscription.unsubscribe();
      };
    });
    this._injector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector);
    this._dragRef = dragDrop.createDrag(element, {
      dragStartThreshold: config && config.dragStartThreshold != null ? config.dragStartThreshold : 5,
      pointerDirectionChangeThreshold: config && config.pointerDirectionChangeThreshold != null ? config.pointerDirectionChangeThreshold : 5,
      zIndex: config?.zIndex
    });
    this._dragRef.data = this;
    // We have to keep track of the drag instances in order to be able to match an element to
    // a drag instance. We can't go through the global registry of `DragRef`, because the root
    // element could be different.
    CdkDrag._dragInstances.push(this);
    if (config) {
      this._assignDefaults(config);
    }
    // Note that usually the container is assigned when the drop list is picks up the item, but in
    // some cases (mainly transplanted views with OnPush, see #18341) we may end up in a situation
    // where there are no items on the first change detection pass, but the items get picked up as
    // soon as the user triggers another pass by dragging. This is a problem, because the item would
    // have to switch from standalone mode to drag mode in the middle of the dragging sequence which
    // is too late since the two modes save different kinds of information. We work around it by
    // assigning the drop container both from here and the list.
    if (dropContainer) {
      this._dragRef._withDropContainer(dropContainer._dropListRef);
      dropContainer.addItem(this);
      // The drop container reads this so we need to sync it here.
      dropContainer._dropListRef.beforeStarted.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._destroyed)).subscribe(() => {
        this._dragRef.scale = this.scale;
      });
    }
    this._syncInputs(this._dragRef);
    this._handleEvents(this._dragRef);
  }
  /**
   * Returns the element that is being used as a placeholder
   * while the current element is being dragged.
   */
  getPlaceholderElement() {
    return this._dragRef.getPlaceholderElement();
  }
  /** Returns the root draggable element. */
  getRootElement() {
    return this._dragRef.getRootElement();
  }
  /** Resets a standalone drag item to its initial position. */
  reset() {
    this._dragRef.reset();
  }
  /**
   * Gets the pixel coordinates of the draggable outside of a drop container.
   */
  getFreeDragPosition() {
    return this._dragRef.getFreeDragPosition();
  }
  /**
   * Sets the current position in pixels the draggable outside of a drop container.
   * @param value New position to be set.
   */
  setFreeDragPosition(value) {
    this._dragRef.setFreeDragPosition(value);
  }
  ngAfterViewInit() {
    // We need to wait until after render, in order for the reference
    // element to be in the proper place in the DOM. This is mostly relevant
    // for draggable elements inside portals since they get stamped out in
    // their original DOM position, and then they get transferred to the portal.
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.afterNextRender)(() => {
      this._updateRootElement();
      this._setupHandlesListener();
      this._dragRef.scale = this.scale;
      if (this.freeDragPosition) {
        this._dragRef.setFreeDragPosition(this.freeDragPosition);
      }
    }, {
      injector: this._injector
    });
  }
  ngOnChanges(changes) {
    const rootSelectorChange = changes['rootElementSelector'];
    const positionChange = changes['freeDragPosition'];
    // We don't have to react to the first change since it's being
    // handled in the `afterNextRender` queued up in the constructor.
    if (rootSelectorChange && !rootSelectorChange.firstChange) {
      this._updateRootElement();
    }
    // Scale affects the free drag position so we need to sync it up here.
    this._dragRef.scale = this.scale;
    // Skip the first change since it's being handled in the `afterNextRender` queued up in the
    // constructor.
    if (positionChange && !positionChange.firstChange && this.freeDragPosition) {
      this._dragRef.setFreeDragPosition(this.freeDragPosition);
    }
  }
  ngOnDestroy() {
    if (this.dropContainer) {
      this.dropContainer.removeItem(this);
    }
    const index = CdkDrag._dragInstances.indexOf(this);
    if (index > -1) {
      CdkDrag._dragInstances.splice(index, 1);
    }
    // Unnecessary in most cases, but used to avoid extra change detections with `zone-paths-rxjs`.
    this._ngZone.runOutsideAngular(() => {
      this._handles.complete();
      this._destroyed.next();
      this._destroyed.complete();
      this._dragRef.dispose();
    });
  }
  _addHandle(handle) {
    const handles = this._handles.getValue();
    handles.push(handle);
    this._handles.next(handles);
  }
  _removeHandle(handle) {
    const handles = this._handles.getValue();
    const index = handles.indexOf(handle);
    if (index > -1) {
      handles.splice(index, 1);
      this._handles.next(handles);
    }
  }
  _setPreviewTemplate(preview) {
    this._previewTemplate = preview;
  }
  _resetPreviewTemplate(preview) {
    if (preview === this._previewTemplate) {
      this._previewTemplate = null;
    }
  }
  _setPlaceholderTemplate(placeholder) {
    this._placeholderTemplate = placeholder;
  }
  _resetPlaceholderTemplate(placeholder) {
    if (placeholder === this._placeholderTemplate) {
      this._placeholderTemplate = null;
    }
  }
  /** Syncs the root element with the `DragRef`. */
  _updateRootElement() {
    const element = this.element.nativeElement;
    let rootElement = element;
    if (this.rootElementSelector) {
      rootElement = element.closest !== undefined ? element.closest(this.rootElementSelector) :
      // Comment tag doesn't have closest method, so use parent's one.
      element.parentElement?.closest(this.rootElementSelector);
    }
    if (rootElement && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      assertElementNode(rootElement, 'cdkDrag');
    }
    this._dragRef.withRootElement(rootElement || element);
  }
  /** Gets the boundary element, based on the `boundaryElement` value. */
  _getBoundaryElement() {
    const boundary = this.boundaryElement;
    if (!boundary) {
      return null;
    }
    if (typeof boundary === 'string') {
      return this.element.nativeElement.closest(boundary);
    }
    return (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__.coerceElement)(boundary);
  }
  /** Syncs the inputs of the CdkDrag with the options of the underlying DragRef. */
  _syncInputs(ref) {
    ref.beforeStarted.subscribe(() => {
      if (!ref.isDragging()) {
        const dir = this._dir;
        const dragStartDelay = this.dragStartDelay;
        const placeholder = this._placeholderTemplate ? {
          template: this._placeholderTemplate.templateRef,
          context: this._placeholderTemplate.data,
          viewContainer: this._viewContainerRef
        } : null;
        const preview = this._previewTemplate ? {
          template: this._previewTemplate.templateRef,
          context: this._previewTemplate.data,
          matchSize: this._previewTemplate.matchSize,
          viewContainer: this._viewContainerRef
        } : null;
        ref.disabled = this.disabled;
        ref.lockAxis = this.lockAxis;
        ref.scale = this.scale;
        ref.dragStartDelay = typeof dragStartDelay === 'object' && dragStartDelay ? dragStartDelay : (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__.coerceNumberProperty)(dragStartDelay);
        ref.constrainPosition = this.constrainPosition;
        ref.previewClass = this.previewClass;
        ref.withBoundaryElement(this._getBoundaryElement()).withPlaceholderTemplate(placeholder).withPreviewTemplate(preview).withPreviewContainer(this.previewContainer || 'global');
        if (dir) {
          ref.withDirection(dir.value);
        }
      }
    });
    // This only needs to be resolved once.
    ref.beforeStarted.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.take)(1)).subscribe(() => {
      // If we managed to resolve a parent through DI, use it.
      if (this._parentDrag) {
        ref.withParent(this._parentDrag._dragRef);
        return;
      }
      // Otherwise fall back to resolving the parent by looking up the DOM. This can happen if
      // the item was projected into another item by something like `ngTemplateOutlet`.
      let parent = this.element.nativeElement.parentElement;
      while (parent) {
        if (parent.classList.contains(DRAG_HOST_CLASS)) {
          ref.withParent(CdkDrag._dragInstances.find(drag => {
            return drag.element.nativeElement === parent;
          })?._dragRef || null);
          break;
        }
        parent = parent.parentElement;
      }
    });
  }
  /** Handles the events from the underlying `DragRef`. */
  _handleEvents(ref) {
    ref.started.subscribe(startEvent => {
      this.started.emit({
        source: this,
        event: startEvent.event
      });
      // Since all of these events run outside of change detection,
      // we need to ensure that everything is marked correctly.
      this._changeDetectorRef.markForCheck();
    });
    ref.released.subscribe(releaseEvent => {
      this.released.emit({
        source: this,
        event: releaseEvent.event
      });
    });
    ref.ended.subscribe(endEvent => {
      this.ended.emit({
        source: this,
        distance: endEvent.distance,
        dropPoint: endEvent.dropPoint,
        event: endEvent.event
      });
      // Since all of these events run outside of change detection,
      // we need to ensure that everything is marked correctly.
      this._changeDetectorRef.markForCheck();
    });
    ref.entered.subscribe(enterEvent => {
      this.entered.emit({
        container: enterEvent.container.data,
        item: this,
        currentIndex: enterEvent.currentIndex
      });
    });
    ref.exited.subscribe(exitEvent => {
      this.exited.emit({
        container: exitEvent.container.data,
        item: this
      });
    });
    ref.dropped.subscribe(dropEvent => {
      this.dropped.emit({
        previousIndex: dropEvent.previousIndex,
        currentIndex: dropEvent.currentIndex,
        previousContainer: dropEvent.previousContainer.data,
        container: dropEvent.container.data,
        isPointerOverContainer: dropEvent.isPointerOverContainer,
        item: this,
        distance: dropEvent.distance,
        dropPoint: dropEvent.dropPoint,
        event: dropEvent.event
      });
    });
  }
  /** Assigns the default input values based on a provided config object. */
  _assignDefaults(config) {
    const {
      lockAxis,
      dragStartDelay,
      constrainPosition,
      previewClass,
      boundaryElement,
      draggingDisabled,
      rootElementSelector,
      previewContainer
    } = config;
    this.disabled = draggingDisabled == null ? false : draggingDisabled;
    this.dragStartDelay = dragStartDelay || 0;
    if (lockAxis) {
      this.lockAxis = lockAxis;
    }
    if (constrainPosition) {
      this.constrainPosition = constrainPosition;
    }
    if (previewClass) {
      this.previewClass = previewClass;
    }
    if (boundaryElement) {
      this.boundaryElement = boundaryElement;
    }
    if (rootElementSelector) {
      this.rootElementSelector = rootElementSelector;
    }
    if (previewContainer) {
      this.previewContainer = previewContainer;
    }
  }
  /** Sets up the listener that syncs the handles with the drag ref. */
  _setupHandlesListener() {
    // Listen for any newly-added handles.
    this._handles.pipe(
    // Sync the new handles with the DragRef.
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.tap)(handles => {
      const handleElements = handles.map(handle => handle.element);
      // Usually handles are only allowed to be a descendant of the drag element, but if
      // the consumer defined a different drag root, we should allow the drag element
      // itself to be a handle too.
      if (this._selfHandle && this.rootElementSelector) {
        handleElements.push(this.element);
      }
      this._dragRef.withHandles(handleElements);
    }),
    // Listen if the state of any of the handles changes.
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.switchMap)(handles => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.merge)(...handles.map(item => item._stateChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.startWith)(item))));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._destroyed)).subscribe(handleInstance => {
      // Enabled/disable the handle that changed in the DragRef.
      const dragRef = this._dragRef;
      const handle = handleInstance.element.nativeElement;
      handleInstance.disabled ? dragRef.disableHandle(handle) : dragRef.enableHandle(handle);
    });
  }
  static {
    this.ɵfac = function CdkDrag_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkDrag)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CDK_DROP_LIST, 12), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CDK_DRAG_CONFIG, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_19__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](DragDrop), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CDK_DRAG_HANDLE, 10), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CDK_DRAG_PARENT, 12));
    };
  }
  static {
    this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: CdkDrag,
      selectors: [["", "cdkDrag", ""]],
      hostAttrs: [1, "cdk-drag"],
      hostVars: 4,
      hostBindings: function CdkDrag_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("cdk-drag-disabled", ctx.disabled)("cdk-drag-dragging", ctx._dragRef.isDragging());
        }
      },
      inputs: {
        data: [0, "cdkDragData", "data"],
        lockAxis: [0, "cdkDragLockAxis", "lockAxis"],
        rootElementSelector: [0, "cdkDragRootElement", "rootElementSelector"],
        boundaryElement: [0, "cdkDragBoundary", "boundaryElement"],
        dragStartDelay: [0, "cdkDragStartDelay", "dragStartDelay"],
        freeDragPosition: [0, "cdkDragFreeDragPosition", "freeDragPosition"],
        disabled: [2, "cdkDragDisabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_1__.booleanAttribute],
        constrainPosition: [0, "cdkDragConstrainPosition", "constrainPosition"],
        previewClass: [0, "cdkDragPreviewClass", "previewClass"],
        previewContainer: [0, "cdkDragPreviewContainer", "previewContainer"],
        scale: [2, "cdkDragScale", "scale", _angular_core__WEBPACK_IMPORTED_MODULE_1__.numberAttribute]
      },
      outputs: {
        started: "cdkDragStarted",
        released: "cdkDragReleased",
        ended: "cdkDragEnded",
        entered: "cdkDragEntered",
        exited: "cdkDragExited",
        dropped: "cdkDragDropped",
        moved: "cdkDragMoved"
      },
      exportAs: ["cdkDrag"],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: CDK_DRAG_PARENT,
        useExisting: CdkDrag
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkDrag, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: '[cdkDrag]',
      exportAs: 'cdkDrag',
      standalone: true,
      host: {
        'class': DRAG_HOST_CLASS,
        '[class.cdk-drag-disabled]': 'disabled',
        '[class.cdk-drag-dragging]': '_dragRef.isDragging()'
      },
      providers: [{
        provide: CDK_DRAG_PARENT,
        useExisting: CdkDrag
      }]
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
      args: [CDK_DROP_LIST]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.SkipSelf
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
      args: [CDK_DRAG_CONFIG]
    }]
  }, {
    type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_19__.Directionality,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
    }]
  }, {
    type: DragDrop
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef
  }, {
    type: CdkDragHandle,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Self
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
      args: [CDK_DRAG_HANDLE]
    }]
  }, {
    type: CdkDrag,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.SkipSelf
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
      args: [CDK_DRAG_PARENT]
    }]
  }], {
    data: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['cdkDragData']
    }],
    lockAxis: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['cdkDragLockAxis']
    }],
    rootElementSelector: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['cdkDragRootElement']
    }],
    boundaryElement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['cdkDragBoundary']
    }],
    dragStartDelay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['cdkDragStartDelay']
    }],
    freeDragPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['cdkDragFreeDragPosition']
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: [{
        alias: 'cdkDragDisabled',
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_1__.booleanAttribute
      }]
    }],
    constrainPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['cdkDragConstrainPosition']
    }],
    previewClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['cdkDragPreviewClass']
    }],
    previewContainer: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['cdkDragPreviewContainer']
    }],
    scale: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: [{
        alias: 'cdkDragScale',
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_1__.numberAttribute
      }]
    }],
    started: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['cdkDragStarted']
    }],
    released: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['cdkDragReleased']
    }],
    ended: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['cdkDragEnded']
    }],
    entered: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['cdkDragEntered']
    }],
    exited: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['cdkDragExited']
    }],
    dropped: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['cdkDragDropped']
    }],
    moved: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['cdkDragMoved']
    }]
  });
})();

/**
 * Injection token that can be used to reference instances of `CdkDropListGroup`. It serves as
 * alternative token to the actual `CdkDropListGroup` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */
const CDK_DROP_LIST_GROUP = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('CdkDropListGroup');
/**
 * Declaratively connects sibling `cdkDropList` instances together. All of the `cdkDropList`
 * elements that are placed inside a `cdkDropListGroup` will be connected to each other
 * automatically. Can be used as an alternative to the `cdkDropListConnectedTo` input
 * from `cdkDropList`.
 */
class CdkDropListGroup {
  constructor() {
    /** Drop lists registered inside the group. */
    this._items = new Set();
    /** Whether starting a dragging sequence from inside this group is disabled. */
    this.disabled = false;
  }
  ngOnDestroy() {
    this._items.clear();
  }
  static {
    this.ɵfac = function CdkDropListGroup_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkDropListGroup)();
    };
  }
  static {
    this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: CdkDropListGroup,
      selectors: [["", "cdkDropListGroup", ""]],
      inputs: {
        disabled: [2, "cdkDropListGroupDisabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_1__.booleanAttribute]
      },
      exportAs: ["cdkDropListGroup"],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: CDK_DROP_LIST_GROUP,
        useExisting: CdkDropListGroup
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInputTransformsFeature"]]
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkDropListGroup, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: '[cdkDropListGroup]',
      exportAs: 'cdkDropListGroup',
      standalone: true,
      providers: [{
        provide: CDK_DROP_LIST_GROUP,
        useExisting: CdkDropListGroup
      }]
    }]
  }], null, {
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: [{
        alias: 'cdkDropListGroupDisabled',
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_1__.booleanAttribute
      }]
    }]
  });
})();

/** Counter used to generate unique ids for drop zones. */
let _uniqueIdCounter = 0;
/** Container that wraps a set of draggable items. */
class CdkDropList {
  /** Keeps track of the drop lists that are currently on the page. */
  static {
    this._dropLists = [];
  }
  /** Whether starting a dragging sequence from this container is disabled. */
  get disabled() {
    return this._disabled || !!this._group && this._group.disabled;
  }
  set disabled(value) {
    // Usually we sync the directive and ref state right before dragging starts, in order to have
    // a single point of failure and to avoid having to use setters for everything. `disabled` is
    // a special case, because it can prevent the `beforeStarted` event from firing, which can lock
    // the user in a disabled state, so we also need to sync it as it's being set.
    this._dropListRef.disabled = this._disabled = value;
  }
  constructor( /** Element that the drop list is attached to. */
  element, dragDrop, _changeDetectorRef, _scrollDispatcher, _dir, _group, config) {
    this.element = element;
    this._changeDetectorRef = _changeDetectorRef;
    this._scrollDispatcher = _scrollDispatcher;
    this._dir = _dir;
    this._group = _group;
    /** Emits when the list has been destroyed. */
    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    /**
     * Other draggable containers that this container is connected to and into which the
     * container's items can be transferred. Can either be references to other drop containers,
     * or their unique IDs.
     */
    this.connectedTo = [];
    /**
     * Unique ID for the drop zone. Can be used as a reference
     * in the `connectedTo` of another `CdkDropList`.
     */
    this.id = `cdk-drop-list-${_uniqueIdCounter++}`;
    /**
     * Function that is used to determine whether an item
     * is allowed to be moved into a drop container.
     */
    this.enterPredicate = () => true;
    /** Functions that is used to determine whether an item can be sorted into a particular index. */
    this.sortPredicate = () => true;
    /** Emits when the user drops an item inside the container. */
    this.dropped = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /**
     * Emits when the user has moved a new drag item into this container.
     */
    this.entered = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /**
     * Emits when the user removes an item from the container
     * by dragging it into another container.
     */
    this.exited = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /** Emits as the user is swapping items while actively dragging. */
    this.sorted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /**
     * Keeps track of the items that are registered with this container. Historically we used to
     * do this with a `ContentChildren` query, however queries don't handle transplanted views very
     * well which means that we can't handle cases like dragging the headers of a `mat-table`
     * correctly. What we do instead is to have the items register themselves with the container
     * and then we sort them based on their position in the DOM.
     */
    this._unsortedItems = new Set();
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      assertElementNode(element.nativeElement, 'cdkDropList');
    }
    this._dropListRef = dragDrop.createDropList(element);
    this._dropListRef.data = this;
    if (config) {
      this._assignDefaults(config);
    }
    this._dropListRef.enterPredicate = (drag, drop) => {
      return this.enterPredicate(drag.data, drop.data);
    };
    this._dropListRef.sortPredicate = (index, drag, drop) => {
      return this.sortPredicate(index, drag.data, drop.data);
    };
    this._setupInputSyncSubscription(this._dropListRef);
    this._handleEvents(this._dropListRef);
    CdkDropList._dropLists.push(this);
    if (_group) {
      _group._items.add(this);
    }
  }
  /** Registers an items with the drop list. */
  addItem(item) {
    this._unsortedItems.add(item);
    if (this._dropListRef.isDragging()) {
      this._syncItemsWithRef();
    }
  }
  /** Removes an item from the drop list. */
  removeItem(item) {
    this._unsortedItems.delete(item);
    if (this._dropListRef.isDragging()) {
      this._syncItemsWithRef();
    }
  }
  /** Gets the registered items in the list, sorted by their position in the DOM. */
  getSortedItems() {
    return Array.from(this._unsortedItems).sort((a, b) => {
      const documentPosition = a._dragRef.getVisibleElement().compareDocumentPosition(b._dragRef.getVisibleElement());
      // `compareDocumentPosition` returns a bitmask so we have to use a bitwise operator.
      // https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
      // tslint:disable-next-line:no-bitwise
      return documentPosition & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
    });
  }
  ngOnDestroy() {
    const index = CdkDropList._dropLists.indexOf(this);
    if (index > -1) {
      CdkDropList._dropLists.splice(index, 1);
    }
    if (this._group) {
      this._group._items.delete(this);
    }
    this._unsortedItems.clear();
    this._dropListRef.dispose();
    this._destroyed.next();
    this._destroyed.complete();
  }
  /** Syncs the inputs of the CdkDropList with the options of the underlying DropListRef. */
  _setupInputSyncSubscription(ref) {
    if (this._dir) {
      this._dir.change.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.startWith)(this._dir.value), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._destroyed)).subscribe(value => ref.withDirection(value));
    }
    ref.beforeStarted.subscribe(() => {
      const siblings = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__.coerceArray)(this.connectedTo).map(drop => {
        if (typeof drop === 'string') {
          const correspondingDropList = CdkDropList._dropLists.find(list => list.id === drop);
          if (!correspondingDropList && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            console.warn(`CdkDropList could not find connected drop list with id "${drop}"`);
          }
          return correspondingDropList;
        }
        return drop;
      });
      if (this._group) {
        this._group._items.forEach(drop => {
          if (siblings.indexOf(drop) === -1) {
            siblings.push(drop);
          }
        });
      }
      // Note that we resolve the scrollable parents here so that we delay the resolution
      // as long as possible, ensuring that the element is in its final place in the DOM.
      if (!this._scrollableParentsResolved) {
        const scrollableParents = this._scrollDispatcher.getAncestorScrollContainers(this.element).map(scrollable => scrollable.getElementRef().nativeElement);
        this._dropListRef.withScrollableParents(scrollableParents);
        // Only do this once since it involves traversing the DOM and the parents
        // shouldn't be able to change without the drop list being destroyed.
        this._scrollableParentsResolved = true;
      }
      if (this.elementContainerSelector) {
        const container = this.element.nativeElement.querySelector(this.elementContainerSelector);
        if (!container && (typeof ngDevMode === 'undefined' || ngDevMode)) {
          throw new Error(`CdkDropList could not find an element container matching the selector "${this.elementContainerSelector}"`);
        }
        ref.withElementContainer(container);
      }
      ref.disabled = this.disabled;
      ref.lockAxis = this.lockAxis;
      ref.sortingDisabled = this.sortingDisabled;
      ref.autoScrollDisabled = this.autoScrollDisabled;
      ref.autoScrollStep = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__.coerceNumberProperty)(this.autoScrollStep, 2);
      ref.connectedTo(siblings.filter(drop => drop && drop !== this).map(list => list._dropListRef)).withOrientation(this.orientation);
    });
  }
  /** Handles events from the underlying DropListRef. */
  _handleEvents(ref) {
    ref.beforeStarted.subscribe(() => {
      this._syncItemsWithRef();
      this._changeDetectorRef.markForCheck();
    });
    ref.entered.subscribe(event => {
      this.entered.emit({
        container: this,
        item: event.item.data,
        currentIndex: event.currentIndex
      });
    });
    ref.exited.subscribe(event => {
      this.exited.emit({
        container: this,
        item: event.item.data
      });
      this._changeDetectorRef.markForCheck();
    });
    ref.sorted.subscribe(event => {
      this.sorted.emit({
        previousIndex: event.previousIndex,
        currentIndex: event.currentIndex,
        container: this,
        item: event.item.data
      });
    });
    ref.dropped.subscribe(dropEvent => {
      this.dropped.emit({
        previousIndex: dropEvent.previousIndex,
        currentIndex: dropEvent.currentIndex,
        previousContainer: dropEvent.previousContainer.data,
        container: dropEvent.container.data,
        item: dropEvent.item.data,
        isPointerOverContainer: dropEvent.isPointerOverContainer,
        distance: dropEvent.distance,
        dropPoint: dropEvent.dropPoint,
        event: dropEvent.event
      });
      // Mark for check since all of these events run outside of change
      // detection and we're not guaranteed for something else to have triggered it.
      this._changeDetectorRef.markForCheck();
    });
    (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.merge)(ref.receivingStarted, ref.receivingStopped).subscribe(() => this._changeDetectorRef.markForCheck());
  }
  /** Assigns the default input values based on a provided config object. */
  _assignDefaults(config) {
    const {
      lockAxis,
      draggingDisabled,
      sortingDisabled,
      listAutoScrollDisabled,
      listOrientation
    } = config;
    this.disabled = draggingDisabled == null ? false : draggingDisabled;
    this.sortingDisabled = sortingDisabled == null ? false : sortingDisabled;
    this.autoScrollDisabled = listAutoScrollDisabled == null ? false : listAutoScrollDisabled;
    this.orientation = listOrientation || 'vertical';
    if (lockAxis) {
      this.lockAxis = lockAxis;
    }
  }
  /** Syncs up the registered drag items with underlying drop list ref. */
  _syncItemsWithRef() {
    this._dropListRef.withItems(this.getSortedItems().map(item => item._dragRef));
  }
  static {
    this.ɵfac = function CdkDropList_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkDropList)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](DragDrop), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__.ScrollDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_19__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CDK_DROP_LIST_GROUP, 12), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CDK_DRAG_CONFIG, 8));
    };
  }
  static {
    this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: CdkDropList,
      selectors: [["", "cdkDropList", ""], ["cdk-drop-list"]],
      hostAttrs: [1, "cdk-drop-list"],
      hostVars: 7,
      hostBindings: function CdkDropList_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("id", ctx.id);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("cdk-drop-list-disabled", ctx.disabled)("cdk-drop-list-dragging", ctx._dropListRef.isDragging())("cdk-drop-list-receiving", ctx._dropListRef.isReceiving());
        }
      },
      inputs: {
        connectedTo: [0, "cdkDropListConnectedTo", "connectedTo"],
        data: [0, "cdkDropListData", "data"],
        orientation: [0, "cdkDropListOrientation", "orientation"],
        id: "id",
        lockAxis: [0, "cdkDropListLockAxis", "lockAxis"],
        disabled: [2, "cdkDropListDisabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_1__.booleanAttribute],
        sortingDisabled: [2, "cdkDropListSortingDisabled", "sortingDisabled", _angular_core__WEBPACK_IMPORTED_MODULE_1__.booleanAttribute],
        enterPredicate: [0, "cdkDropListEnterPredicate", "enterPredicate"],
        sortPredicate: [0, "cdkDropListSortPredicate", "sortPredicate"],
        autoScrollDisabled: [2, "cdkDropListAutoScrollDisabled", "autoScrollDisabled", _angular_core__WEBPACK_IMPORTED_MODULE_1__.booleanAttribute],
        autoScrollStep: [0, "cdkDropListAutoScrollStep", "autoScrollStep"],
        elementContainerSelector: [0, "cdkDropListElementContainer", "elementContainerSelector"]
      },
      outputs: {
        dropped: "cdkDropListDropped",
        entered: "cdkDropListEntered",
        exited: "cdkDropListExited",
        sorted: "cdkDropListSorted"
      },
      exportAs: ["cdkDropList"],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
      // Prevent child drop lists from picking up the same group as their parent.
      {
        provide: CDK_DROP_LIST_GROUP,
        useValue: undefined
      }, {
        provide: CDK_DROP_LIST,
        useExisting: CdkDropList
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInputTransformsFeature"]]
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkDropList, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: '[cdkDropList], cdk-drop-list',
      exportAs: 'cdkDropList',
      standalone: true,
      providers: [
      // Prevent child drop lists from picking up the same group as their parent.
      {
        provide: CDK_DROP_LIST_GROUP,
        useValue: undefined
      }, {
        provide: CDK_DROP_LIST,
        useExisting: CdkDropList
      }],
      host: {
        'class': 'cdk-drop-list',
        '[attr.id]': 'id',
        '[class.cdk-drop-list-disabled]': 'disabled',
        '[class.cdk-drop-list-dragging]': '_dropListRef.isDragging()',
        '[class.cdk-drop-list-receiving]': '_dropListRef.isReceiving()'
      }
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
  }, {
    type: DragDrop
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef
  }, {
    type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__.ScrollDispatcher
  }, {
    type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_19__.Directionality,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
    }]
  }, {
    type: CdkDropListGroup,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
      args: [CDK_DROP_LIST_GROUP]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.SkipSelf
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
      args: [CDK_DRAG_CONFIG]
    }]
  }], {
    connectedTo: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['cdkDropListConnectedTo']
    }],
    data: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['cdkDropListData']
    }],
    orientation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['cdkDropListOrientation']
    }],
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    lockAxis: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['cdkDropListLockAxis']
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: [{
        alias: 'cdkDropListDisabled',
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_1__.booleanAttribute
      }]
    }],
    sortingDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: [{
        alias: 'cdkDropListSortingDisabled',
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_1__.booleanAttribute
      }]
    }],
    enterPredicate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['cdkDropListEnterPredicate']
    }],
    sortPredicate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['cdkDropListSortPredicate']
    }],
    autoScrollDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: [{
        alias: 'cdkDropListAutoScrollDisabled',
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_1__.booleanAttribute
      }]
    }],
    autoScrollStep: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['cdkDropListAutoScrollStep']
    }],
    elementContainerSelector: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['cdkDropListElementContainer']
    }],
    dropped: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['cdkDropListDropped']
    }],
    entered: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['cdkDropListEntered']
    }],
    exited: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['cdkDropListExited']
    }],
    sorted: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['cdkDropListSorted']
    }]
  });
})();

/**
 * Injection token that can be used to reference instances of `CdkDragPreview`. It serves as
 * alternative token to the actual `CdkDragPreview` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */
const CDK_DRAG_PREVIEW = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('CdkDragPreview');
/**
 * Element that will be used as a template for the preview
 * of a CdkDrag when it is being dragged.
 */
class CdkDragPreview {
  constructor(templateRef) {
    this.templateRef = templateRef;
    this._drag = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(CDK_DRAG_PARENT, {
      optional: true
    });
    /** Whether the preview should preserve the same size as the item that is being dragged. */
    this.matchSize = false;
    this._drag?._setPreviewTemplate(this);
  }
  ngOnDestroy() {
    this._drag?._resetPreviewTemplate(this);
  }
  static {
    this.ɵfac = function CdkDragPreview_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkDragPreview)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef));
    };
  }
  static {
    this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: CdkDragPreview,
      selectors: [["ng-template", "cdkDragPreview", ""]],
      inputs: {
        data: "data",
        matchSize: [2, "matchSize", "matchSize", _angular_core__WEBPACK_IMPORTED_MODULE_1__.booleanAttribute]
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: CDK_DRAG_PREVIEW,
        useExisting: CdkDragPreview
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInputTransformsFeature"]]
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkDragPreview, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: 'ng-template[cdkDragPreview]',
      standalone: true,
      providers: [{
        provide: CDK_DRAG_PREVIEW,
        useExisting: CdkDragPreview
      }]
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef
  }], {
    data: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    matchSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_1__.booleanAttribute
      }]
    }]
  });
})();

/**
 * Injection token that can be used to reference instances of `CdkDragPlaceholder`. It serves as
 * alternative token to the actual `CdkDragPlaceholder` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */
const CDK_DRAG_PLACEHOLDER = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('CdkDragPlaceholder');
/**
 * Element that will be used as a template for the placeholder of a CdkDrag when
 * it is being dragged. The placeholder is displayed in place of the element being dragged.
 */
class CdkDragPlaceholder {
  constructor(templateRef) {
    this.templateRef = templateRef;
    this._drag = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(CDK_DRAG_PARENT, {
      optional: true
    });
    this._drag?._setPlaceholderTemplate(this);
  }
  ngOnDestroy() {
    this._drag?._resetPlaceholderTemplate(this);
  }
  static {
    this.ɵfac = function CdkDragPlaceholder_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkDragPlaceholder)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef));
    };
  }
  static {
    this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: CdkDragPlaceholder,
      selectors: [["ng-template", "cdkDragPlaceholder", ""]],
      inputs: {
        data: "data"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: CDK_DRAG_PLACEHOLDER,
        useExisting: CdkDragPlaceholder
      }])]
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkDragPlaceholder, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: 'ng-template[cdkDragPlaceholder]',
      standalone: true,
      providers: [{
        provide: CDK_DRAG_PLACEHOLDER,
        useExisting: CdkDragPlaceholder
      }]
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef
  }], {
    data: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();
const DRAG_DROP_DIRECTIVES = [CdkDropList, CdkDropListGroup, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder];
class DragDropModule {
  static {
    this.ɵfac = function DragDropModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DragDropModule)();
    };
  }
  static {
    this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: DragDropModule,
      imports: [CdkDropList, CdkDropListGroup, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder],
      exports: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__.CdkScrollableModule, CdkDropList, CdkDropListGroup, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder]
    });
  }
  static {
    this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      providers: [DragDrop],
      imports: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__.CdkScrollableModule]
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DragDropModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      imports: DRAG_DROP_DIRECTIVES,
      exports: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__.CdkScrollableModule, ...DRAG_DROP_DIRECTIVES],
      providers: [DragDrop]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=drag-drop.mjs.map

/***/ }),

/***/ 67336:
/*!*********************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/keycodes.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ A),
/* harmony export */   ALT: () => (/* binding */ ALT),
/* harmony export */   APOSTROPHE: () => (/* binding */ APOSTROPHE),
/* harmony export */   AT_SIGN: () => (/* binding */ AT_SIGN),
/* harmony export */   B: () => (/* binding */ B),
/* harmony export */   BACKSLASH: () => (/* binding */ BACKSLASH),
/* harmony export */   BACKSPACE: () => (/* binding */ BACKSPACE),
/* harmony export */   C: () => (/* binding */ C),
/* harmony export */   CAPS_LOCK: () => (/* binding */ CAPS_LOCK),
/* harmony export */   CLOSE_SQUARE_BRACKET: () => (/* binding */ CLOSE_SQUARE_BRACKET),
/* harmony export */   COMMA: () => (/* binding */ COMMA),
/* harmony export */   CONTEXT_MENU: () => (/* binding */ CONTEXT_MENU),
/* harmony export */   CONTROL: () => (/* binding */ CONTROL),
/* harmony export */   D: () => (/* binding */ D),
/* harmony export */   DASH: () => (/* binding */ DASH),
/* harmony export */   DELETE: () => (/* binding */ DELETE),
/* harmony export */   DOWN_ARROW: () => (/* binding */ DOWN_ARROW),
/* harmony export */   E: () => (/* binding */ E),
/* harmony export */   EIGHT: () => (/* binding */ EIGHT),
/* harmony export */   END: () => (/* binding */ END),
/* harmony export */   ENTER: () => (/* binding */ ENTER),
/* harmony export */   EQUALS: () => (/* binding */ EQUALS),
/* harmony export */   ESCAPE: () => (/* binding */ ESCAPE),
/* harmony export */   F: () => (/* binding */ F),
/* harmony export */   F1: () => (/* binding */ F1),
/* harmony export */   F10: () => (/* binding */ F10),
/* harmony export */   F11: () => (/* binding */ F11),
/* harmony export */   F12: () => (/* binding */ F12),
/* harmony export */   F2: () => (/* binding */ F2),
/* harmony export */   F3: () => (/* binding */ F3),
/* harmony export */   F4: () => (/* binding */ F4),
/* harmony export */   F5: () => (/* binding */ F5),
/* harmony export */   F6: () => (/* binding */ F6),
/* harmony export */   F7: () => (/* binding */ F7),
/* harmony export */   F8: () => (/* binding */ F8),
/* harmony export */   F9: () => (/* binding */ F9),
/* harmony export */   FF_EQUALS: () => (/* binding */ FF_EQUALS),
/* harmony export */   FF_MINUS: () => (/* binding */ FF_MINUS),
/* harmony export */   FF_MUTE: () => (/* binding */ FF_MUTE),
/* harmony export */   FF_SEMICOLON: () => (/* binding */ FF_SEMICOLON),
/* harmony export */   FF_VOLUME_DOWN: () => (/* binding */ FF_VOLUME_DOWN),
/* harmony export */   FF_VOLUME_UP: () => (/* binding */ FF_VOLUME_UP),
/* harmony export */   FIRST_MEDIA: () => (/* binding */ FIRST_MEDIA),
/* harmony export */   FIVE: () => (/* binding */ FIVE),
/* harmony export */   FOUR: () => (/* binding */ FOUR),
/* harmony export */   G: () => (/* binding */ G),
/* harmony export */   H: () => (/* binding */ H),
/* harmony export */   HOME: () => (/* binding */ HOME),
/* harmony export */   I: () => (/* binding */ I),
/* harmony export */   INSERT: () => (/* binding */ INSERT),
/* harmony export */   J: () => (/* binding */ J),
/* harmony export */   K: () => (/* binding */ K),
/* harmony export */   L: () => (/* binding */ L),
/* harmony export */   LAST_MEDIA: () => (/* binding */ LAST_MEDIA),
/* harmony export */   LEFT_ARROW: () => (/* binding */ LEFT_ARROW),
/* harmony export */   M: () => (/* binding */ M),
/* harmony export */   MAC_ENTER: () => (/* binding */ MAC_ENTER),
/* harmony export */   MAC_META: () => (/* binding */ MAC_META),
/* harmony export */   MAC_WK_CMD_LEFT: () => (/* binding */ MAC_WK_CMD_LEFT),
/* harmony export */   MAC_WK_CMD_RIGHT: () => (/* binding */ MAC_WK_CMD_RIGHT),
/* harmony export */   META: () => (/* binding */ META),
/* harmony export */   MUTE: () => (/* binding */ MUTE),
/* harmony export */   N: () => (/* binding */ N),
/* harmony export */   NINE: () => (/* binding */ NINE),
/* harmony export */   NUMPAD_DIVIDE: () => (/* binding */ NUMPAD_DIVIDE),
/* harmony export */   NUMPAD_EIGHT: () => (/* binding */ NUMPAD_EIGHT),
/* harmony export */   NUMPAD_FIVE: () => (/* binding */ NUMPAD_FIVE),
/* harmony export */   NUMPAD_FOUR: () => (/* binding */ NUMPAD_FOUR),
/* harmony export */   NUMPAD_MINUS: () => (/* binding */ NUMPAD_MINUS),
/* harmony export */   NUMPAD_MULTIPLY: () => (/* binding */ NUMPAD_MULTIPLY),
/* harmony export */   NUMPAD_NINE: () => (/* binding */ NUMPAD_NINE),
/* harmony export */   NUMPAD_ONE: () => (/* binding */ NUMPAD_ONE),
/* harmony export */   NUMPAD_PERIOD: () => (/* binding */ NUMPAD_PERIOD),
/* harmony export */   NUMPAD_PLUS: () => (/* binding */ NUMPAD_PLUS),
/* harmony export */   NUMPAD_SEVEN: () => (/* binding */ NUMPAD_SEVEN),
/* harmony export */   NUMPAD_SIX: () => (/* binding */ NUMPAD_SIX),
/* harmony export */   NUMPAD_THREE: () => (/* binding */ NUMPAD_THREE),
/* harmony export */   NUMPAD_TWO: () => (/* binding */ NUMPAD_TWO),
/* harmony export */   NUMPAD_ZERO: () => (/* binding */ NUMPAD_ZERO),
/* harmony export */   NUM_CENTER: () => (/* binding */ NUM_CENTER),
/* harmony export */   NUM_LOCK: () => (/* binding */ NUM_LOCK),
/* harmony export */   O: () => (/* binding */ O),
/* harmony export */   ONE: () => (/* binding */ ONE),
/* harmony export */   OPEN_SQUARE_BRACKET: () => (/* binding */ OPEN_SQUARE_BRACKET),
/* harmony export */   P: () => (/* binding */ P),
/* harmony export */   PAGE_DOWN: () => (/* binding */ PAGE_DOWN),
/* harmony export */   PAGE_UP: () => (/* binding */ PAGE_UP),
/* harmony export */   PAUSE: () => (/* binding */ PAUSE),
/* harmony export */   PERIOD: () => (/* binding */ PERIOD),
/* harmony export */   PLUS_SIGN: () => (/* binding */ PLUS_SIGN),
/* harmony export */   PRINT_SCREEN: () => (/* binding */ PRINT_SCREEN),
/* harmony export */   Q: () => (/* binding */ Q),
/* harmony export */   QUESTION_MARK: () => (/* binding */ QUESTION_MARK),
/* harmony export */   R: () => (/* binding */ R),
/* harmony export */   RIGHT_ARROW: () => (/* binding */ RIGHT_ARROW),
/* harmony export */   S: () => (/* binding */ S),
/* harmony export */   SCROLL_LOCK: () => (/* binding */ SCROLL_LOCK),
/* harmony export */   SEMICOLON: () => (/* binding */ SEMICOLON),
/* harmony export */   SEVEN: () => (/* binding */ SEVEN),
/* harmony export */   SHIFT: () => (/* binding */ SHIFT),
/* harmony export */   SINGLE_QUOTE: () => (/* binding */ SINGLE_QUOTE),
/* harmony export */   SIX: () => (/* binding */ SIX),
/* harmony export */   SLASH: () => (/* binding */ SLASH),
/* harmony export */   SPACE: () => (/* binding */ SPACE),
/* harmony export */   T: () => (/* binding */ T),
/* harmony export */   TAB: () => (/* binding */ TAB),
/* harmony export */   THREE: () => (/* binding */ THREE),
/* harmony export */   TILDE: () => (/* binding */ TILDE),
/* harmony export */   TWO: () => (/* binding */ TWO),
/* harmony export */   U: () => (/* binding */ U),
/* harmony export */   UP_ARROW: () => (/* binding */ UP_ARROW),
/* harmony export */   V: () => (/* binding */ V),
/* harmony export */   VOLUME_DOWN: () => (/* binding */ VOLUME_DOWN),
/* harmony export */   VOLUME_UP: () => (/* binding */ VOLUME_UP),
/* harmony export */   W: () => (/* binding */ W),
/* harmony export */   X: () => (/* binding */ X),
/* harmony export */   Y: () => (/* binding */ Y),
/* harmony export */   Z: () => (/* binding */ Z),
/* harmony export */   ZERO: () => (/* binding */ ZERO),
/* harmony export */   hasModifierKey: () => (/* binding */ hasModifierKey)
/* harmony export */ });
const MAC_ENTER = 3;
const BACKSPACE = 8;
const TAB = 9;
const NUM_CENTER = 12;
const ENTER = 13;
const SHIFT = 16;
const CONTROL = 17;
const ALT = 18;
const PAUSE = 19;
const CAPS_LOCK = 20;
const ESCAPE = 27;
const SPACE = 32;
const PAGE_UP = 33;
const PAGE_DOWN = 34;
const END = 35;
const HOME = 36;
const LEFT_ARROW = 37;
const UP_ARROW = 38;
const RIGHT_ARROW = 39;
const DOWN_ARROW = 40;
const PLUS_SIGN = 43;
const PRINT_SCREEN = 44;
const INSERT = 45;
const DELETE = 46;
const ZERO = 48;
const ONE = 49;
const TWO = 50;
const THREE = 51;
const FOUR = 52;
const FIVE = 53;
const SIX = 54;
const SEVEN = 55;
const EIGHT = 56;
const NINE = 57;
const FF_SEMICOLON = 59; // Firefox (Gecko) fires this for semicolon instead of 186
const FF_EQUALS = 61; // Firefox (Gecko) fires this for equals instead of 187
const QUESTION_MARK = 63;
const AT_SIGN = 64;
const A = 65;
const B = 66;
const C = 67;
const D = 68;
const E = 69;
const F = 70;
const G = 71;
const H = 72;
const I = 73;
const J = 74;
const K = 75;
const L = 76;
const M = 77;
const N = 78;
const O = 79;
const P = 80;
const Q = 81;
const R = 82;
const S = 83;
const T = 84;
const U = 85;
const V = 86;
const W = 87;
const X = 88;
const Y = 89;
const Z = 90;
const META = 91; // WIN_KEY_LEFT
const MAC_WK_CMD_LEFT = 91;
const MAC_WK_CMD_RIGHT = 93;
const CONTEXT_MENU = 93;
const NUMPAD_ZERO = 96;
const NUMPAD_ONE = 97;
const NUMPAD_TWO = 98;
const NUMPAD_THREE = 99;
const NUMPAD_FOUR = 100;
const NUMPAD_FIVE = 101;
const NUMPAD_SIX = 102;
const NUMPAD_SEVEN = 103;
const NUMPAD_EIGHT = 104;
const NUMPAD_NINE = 105;
const NUMPAD_MULTIPLY = 106;
const NUMPAD_PLUS = 107;
const NUMPAD_MINUS = 109;
const NUMPAD_PERIOD = 110;
const NUMPAD_DIVIDE = 111;
const F1 = 112;
const F2 = 113;
const F3 = 114;
const F4 = 115;
const F5 = 116;
const F6 = 117;
const F7 = 118;
const F8 = 119;
const F9 = 120;
const F10 = 121;
const F11 = 122;
const F12 = 123;
const NUM_LOCK = 144;
const SCROLL_LOCK = 145;
const FIRST_MEDIA = 166;
const FF_MINUS = 173;
const MUTE = 173; // Firefox (Gecko) fires 181 for MUTE
const VOLUME_DOWN = 174; // Firefox (Gecko) fires 182 for VOLUME_DOWN
const VOLUME_UP = 175; // Firefox (Gecko) fires 183 for VOLUME_UP
const FF_MUTE = 181;
const FF_VOLUME_DOWN = 182;
const LAST_MEDIA = 183;
const FF_VOLUME_UP = 183;
const SEMICOLON = 186; // Firefox (Gecko) fires 59 for SEMICOLON
const EQUALS = 187; // Firefox (Gecko) fires 61 for EQUALS
const COMMA = 188;
const DASH = 189; // Firefox (Gecko) fires 173 for DASH/MINUS
const PERIOD = 190;
const SLASH = 191;
const APOSTROPHE = 192;
const TILDE = 192;
const OPEN_SQUARE_BRACKET = 219;
const BACKSLASH = 220;
const CLOSE_SQUARE_BRACKET = 221;
const SINGLE_QUOTE = 222;
const MAC_META = 224;

/**
 * Checks whether a modifier key is pressed.
 * @param event Event to be checked.
 */
function hasModifierKey(event, ...modifiers) {
  if (modifiers.length) {
    return modifiers.some(modifier => event[modifier]);
  }
  return event.altKey || event.shiftKey || event.ctrlKey || event.metaKey;
}

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=keycodes.mjs.map

/***/ }),

/***/ 99327:
/*!*******************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/layout.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BreakpointObserver: () => (/* binding */ BreakpointObserver),
/* harmony export */   Breakpoints: () => (/* binding */ Breakpoints),
/* harmony export */   LayoutModule: () => (/* binding */ LayoutModule),
/* harmony export */   MediaMatcher: () => (/* binding */ MediaMatcher)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ 14085);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 18530);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 84572);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 92688);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 71985);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 96697);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 65245);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 70152);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 96354);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 99172);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 56977);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/platform */ 36860);






class LayoutModule {
  static {
    this.ɵfac = function LayoutModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LayoutModule)();
    };
  }
  static {
    this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: LayoutModule
    });
  }
  static {
    this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{}]
  }], null, null);
})();

/** Global registry for all dynamically-created, injected media queries. */
const mediaQueriesForWebkitCompatibility = new Set();
/** Style tag that holds all of the dynamically-created media queries. */
let mediaQueryStyleNode;
/** A utility for calling matchMedia queries. */
class MediaMatcher {
  constructor(_platform, _nonce) {
    this._platform = _platform;
    this._nonce = _nonce;
    this._matchMedia = this._platform.isBrowser && window.matchMedia ?
    // matchMedia is bound to the window scope intentionally as it is an illegal invocation to
    // call it from a different scope.
    window.matchMedia.bind(window) : noopMatchMedia;
  }
  /**
   * Evaluates the given media query and returns the native MediaQueryList from which results
   * can be retrieved.
   * Confirms the layout engine will trigger for the selector query provided and returns the
   * MediaQueryList for the query provided.
   */
  matchMedia(query) {
    if (this._platform.WEBKIT || this._platform.BLINK) {
      createEmptyStyleRule(query, this._nonce);
    }
    return this._matchMedia(query);
  }
  static {
    this.ɵfac = function MediaMatcher_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MediaMatcher)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.CSP_NONCE, 8));
    };
  }
  static {
    this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: MediaMatcher,
      factory: MediaMatcher.ɵfac,
      providedIn: 'root'
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MediaMatcher, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], () => [{
    type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.Platform
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.CSP_NONCE]
    }]
  }], null);
})();
/**
 * Creates an empty stylesheet that is used to work around browser inconsistencies related to
 * `matchMedia`. At the time of writing, it handles the following cases:
 * 1. On WebKit browsers, a media query has to have at least one rule in order for `matchMedia`
 * to fire. We work around it by declaring a dummy stylesheet with a `@media` declaration.
 * 2. In some cases Blink browsers will stop firing the `matchMedia` listener if none of the rules
 * inside the `@media` match existing elements on the page. We work around it by having one rule
 * targeting the `body`. See https://github.com/angular/components/issues/23546.
 */
function createEmptyStyleRule(query, nonce) {
  if (mediaQueriesForWebkitCompatibility.has(query)) {
    return;
  }
  try {
    if (!mediaQueryStyleNode) {
      mediaQueryStyleNode = document.createElement('style');
      if (nonce) {
        mediaQueryStyleNode.setAttribute('nonce', nonce);
      }
      mediaQueryStyleNode.setAttribute('type', 'text/css');
      document.head.appendChild(mediaQueryStyleNode);
    }
    if (mediaQueryStyleNode.sheet) {
      mediaQueryStyleNode.sheet.insertRule(`@media ${query} {body{ }}`, 0);
      mediaQueriesForWebkitCompatibility.add(query);
    }
  } catch (e) {
    console.error(e);
  }
}
/** No-op matchMedia replacement for non-browser platforms. */
function noopMatchMedia(query) {
  // Use `as any` here to avoid adding additional necessary properties for
  // the noop matcher.
  return {
    matches: query === 'all' || query === '',
    media: query,
    addListener: () => {},
    removeListener: () => {}
  };
}

/** Utility for checking the matching state of @media queries. */
class BreakpointObserver {
  constructor(_mediaMatcher, _zone) {
    this._mediaMatcher = _mediaMatcher;
    this._zone = _zone;
    /**  A map of all media queries currently being listened for. */
    this._queries = new Map();
    /** A subject for all other observables to takeUntil based on. */
    this._destroySubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
  }
  /** Completes the active subject, signalling to all other observables to complete. */
  ngOnDestroy() {
    this._destroySubject.next();
    this._destroySubject.complete();
  }
  /**
   * Whether one or more media queries match the current viewport size.
   * @param value One or more media queries to check.
   * @returns Whether any of the media queries match.
   */
  isMatched(value) {
    const queries = splitQueries((0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceArray)(value));
    return queries.some(mediaQuery => this._registerQuery(mediaQuery).mql.matches);
  }
  /**
   * Gets an observable of results for the given queries that will emit new results for any changes
   * in matching of the given queries.
   * @param value One or more media queries to check.
   * @returns A stream of matches for the given queries.
   */
  observe(value) {
    const queries = splitQueries((0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceArray)(value));
    const observables = queries.map(query => this._registerQuery(query).observable);
    let stateObservable = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.combineLatest)(observables);
    // Emit the first state immediately, and then debounce the subsequent emissions.
    stateObservable = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.concat)(stateObservable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)), stateObservable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.skip)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.debounceTime)(0)));
    return stateObservable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(breakpointStates => {
      const response = {
        matches: false,
        breakpoints: {}
      };
      breakpointStates.forEach(({
        matches,
        query
      }) => {
        response.matches = response.matches || matches;
        response.breakpoints[query] = matches;
      });
      return response;
    }));
  }
  /** Registers a specific query to be listened for. */
  _registerQuery(query) {
    // Only set up a new MediaQueryList if it is not already being listened for.
    if (this._queries.has(query)) {
      return this._queries.get(query);
    }
    const mql = this._mediaMatcher.matchMedia(query);
    // Create callback for match changes and add it is as a listener.
    const queryObservable = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Observable(observer => {
      // Listener callback methods are wrapped to be placed back in ngZone. Callbacks must be placed
      // back into the zone because matchMedia is only included in Zone.js by loading the
      // webapis-media-query.js file alongside the zone.js file.  Additionally, some browsers do not
      // have MediaQueryList inherit from EventTarget, which causes inconsistencies in how Zone.js
      // patches it.
      const handler = e => this._zone.run(() => observer.next(e));
      mql.addListener(handler);
      return () => {
        mql.removeListener(handler);
      };
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.startWith)(mql), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(({
      matches
    }) => ({
      query,
      matches
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this._destroySubject));
    // Add the MediaQueryList to the set of queries.
    const output = {
      observable: queryObservable,
      mql
    };
    this._queries.set(query, output);
    return output;
  }
  static {
    this.ɵfac = function BreakpointObserver_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BreakpointObserver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MediaMatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
  }
  static {
    this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: BreakpointObserver,
      factory: BreakpointObserver.ɵfac,
      providedIn: 'root'
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BreakpointObserver, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], () => [{
    type: MediaMatcher
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
  }], null);
})();
/**
 * Split each query string into separate query strings if two queries are provided as comma
 * separated.
 */
function splitQueries(queries) {
  return queries.map(query => query.split(',')).reduce((a1, a2) => a1.concat(a2)).map(query => query.trim());
}

// PascalCase is being used as Breakpoints is used like an enum.
// tslint:disable-next-line:variable-name
const Breakpoints = {
  XSmall: '(max-width: 599.98px)',
  Small: '(min-width: 600px) and (max-width: 959.98px)',
  Medium: '(min-width: 960px) and (max-width: 1279.98px)',
  Large: '(min-width: 1280px) and (max-width: 1919.98px)',
  XLarge: '(min-width: 1920px)',
  Handset: '(max-width: 599.98px) and (orientation: portrait), ' + '(max-width: 959.98px) and (orientation: landscape)',
  Tablet: '(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), ' + '(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)',
  Web: '(min-width: 840px) and (orientation: portrait), ' + '(min-width: 1280px) and (orientation: landscape)',
  HandsetPortrait: '(max-width: 599.98px) and (orientation: portrait)',
  TabletPortrait: '(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)',
  WebPortrait: '(min-width: 840px) and (orientation: portrait)',
  HandsetLandscape: '(max-width: 959.98px) and (orientation: landscape)',
  TabletLandscape: '(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)',
  WebLandscape: '(min-width: 1280px) and (orientation: landscape)'
};

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=layout.mjs.map

/***/ }),

/***/ 72318:
/*!**********************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/observers.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CdkObserveContent: () => (/* binding */ CdkObserveContent),
/* harmony export */   ContentObserver: () => (/* binding */ ContentObserver),
/* harmony export */   MutationObserverFactory: () => (/* binding */ MutationObserverFactory),
/* harmony export */   ObserversModule: () => (/* binding */ ObserversModule)
/* harmony export */ });
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ 14085);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 71985);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 18530);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 96354);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5964);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 70152);






// Angular may add, remove, or edit comment nodes during change detection. We don't care about
// these changes because they don't affect the user-preceived content, and worse it can cause
// infinite change detection cycles where the change detection updates a comment, triggering the
// MutationObserver, triggering another change detection and kicking the cycle off again.
function shouldIgnoreRecord(record) {
  // Ignore changes to comment text.
  if (record.type === 'characterData' && record.target instanceof Comment) {
    return true;
  }
  // Ignore addition / removal of comments.
  if (record.type === 'childList') {
    for (let i = 0; i < record.addedNodes.length; i++) {
      if (!(record.addedNodes[i] instanceof Comment)) {
        return false;
      }
    }
    for (let i = 0; i < record.removedNodes.length; i++) {
      if (!(record.removedNodes[i] instanceof Comment)) {
        return false;
      }
    }
    return true;
  }
  // Observe everything else.
  return false;
}
/**
 * Factory that creates a new MutationObserver and allows us to stub it out in unit tests.
 * @docs-private
 */
class MutationObserverFactory {
  create(callback) {
    return typeof MutationObserver === 'undefined' ? null : new MutationObserver(callback);
  }
  static {
    this.ɵfac = function MutationObserverFactory_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MutationObserverFactory)();
    };
  }
  static {
    this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: MutationObserverFactory,
      factory: MutationObserverFactory.ɵfac,
      providedIn: 'root'
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MutationObserverFactory, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();
/** An injectable service that allows watching elements for changes to their content. */
class ContentObserver {
  constructor(_mutationObserverFactory) {
    this._mutationObserverFactory = _mutationObserverFactory;
    /** Keeps track of the existing MutationObservers so they can be reused. */
    this._observedElements = new Map();
    this._ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone);
  }
  ngOnDestroy() {
    this._observedElements.forEach((_, element) => this._cleanupObserver(element));
  }
  observe(elementOrRef) {
    const element = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceElement)(elementOrRef);
    return new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable(observer => {
      const stream = this._observeElement(element);
      const subscription = stream.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(records => records.filter(record => !shouldIgnoreRecord(record))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(records => !!records.length)).subscribe(records => {
        this._ngZone.run(() => {
          observer.next(records);
        });
      });
      return () => {
        subscription.unsubscribe();
        this._unobserveElement(element);
      };
    });
  }
  /**
   * Observes the given element by using the existing MutationObserver if available, or creating a
   * new one if not.
   */
  _observeElement(element) {
    return this._ngZone.runOutsideAngular(() => {
      if (!this._observedElements.has(element)) {
        const stream = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
        const observer = this._mutationObserverFactory.create(mutations => stream.next(mutations));
        if (observer) {
          observer.observe(element, {
            characterData: true,
            childList: true,
            subtree: true
          });
        }
        this._observedElements.set(element, {
          observer,
          stream,
          count: 1
        });
      } else {
        this._observedElements.get(element).count++;
      }
      return this._observedElements.get(element).stream;
    });
  }
  /**
   * Un-observes the given element and cleans up the underlying MutationObserver if nobody else is
   * observing this element.
   */
  _unobserveElement(element) {
    if (this._observedElements.has(element)) {
      this._observedElements.get(element).count--;
      if (!this._observedElements.get(element).count) {
        this._cleanupObserver(element);
      }
    }
  }
  /** Clean up the underlying MutationObserver for the specified element. */
  _cleanupObserver(element) {
    if (this._observedElements.has(element)) {
      const {
        observer,
        stream
      } = this._observedElements.get(element);
      if (observer) {
        observer.disconnect();
      }
      stream.complete();
      this._observedElements.delete(element);
    }
  }
  static {
    this.ɵfac = function ContentObserver_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ContentObserver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MutationObserverFactory));
    };
  }
  static {
    this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ContentObserver,
      factory: ContentObserver.ɵfac,
      providedIn: 'root'
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentObserver, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], () => [{
    type: MutationObserverFactory
  }], null);
})();
/**
 * Directive that triggers a callback whenever the content of
 * its associated element has changed.
 */
class CdkObserveContent {
  /**
   * Whether observing content is disabled. This option can be used
   * to disconnect the underlying MutationObserver until it is needed.
   */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = value;
    this._disabled ? this._unsubscribe() : this._subscribe();
  }
  /** Debounce interval for emitting the changes. */
  get debounce() {
    return this._debounce;
  }
  set debounce(value) {
    this._debounce = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceNumberProperty)(value);
    this._subscribe();
  }
  constructor(_contentObserver, _elementRef) {
    this._contentObserver = _contentObserver;
    this._elementRef = _elementRef;
    /** Event emitted for each change in the element's content. */
    this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this._disabled = false;
    this._currentSubscription = null;
  }
  ngAfterContentInit() {
    if (!this._currentSubscription && !this.disabled) {
      this._subscribe();
    }
  }
  ngOnDestroy() {
    this._unsubscribe();
  }
  _subscribe() {
    this._unsubscribe();
    const stream = this._contentObserver.observe(this._elementRef);
    this._currentSubscription = (this.debounce ? stream.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.debounceTime)(this.debounce)) : stream).subscribe(this.event);
  }
  _unsubscribe() {
    this._currentSubscription?.unsubscribe();
  }
  static {
    this.ɵfac = function CdkObserveContent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkObserveContent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ContentObserver), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
    };
  }
  static {
    this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: CdkObserveContent,
      selectors: [["", "cdkObserveContent", ""]],
      inputs: {
        disabled: [2, "cdkObserveContentDisabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
        debounce: "debounce"
      },
      outputs: {
        event: "cdkObserveContent"
      },
      exportAs: ["cdkObserveContent"],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"]]
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkObserveContent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[cdkObserveContent]',
      exportAs: 'cdkObserveContent',
      standalone: true
    }]
  }], () => [{
    type: ContentObserver
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }], {
    event: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['cdkObserveContent']
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        alias: 'cdkObserveContentDisabled',
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    debounce: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class ObserversModule {
  static {
    this.ɵfac = function ObserversModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ObserversModule)();
    };
  }
  static {
    this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ObserversModule,
      imports: [CdkObserveContent],
      exports: [CdkObserveContent]
    });
  }
  static {
    this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      providers: [MutationObserverFactory]
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ObserversModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [CdkObserveContent],
      exports: [CdkObserveContent],
      providers: [MutationObserverFactory]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=observers.mjs.map

/***/ }),

/***/ 36860:
/*!*********************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/platform.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Platform: () => (/* binding */ Platform),
/* harmony export */   PlatformModule: () => (/* binding */ PlatformModule),
/* harmony export */   RtlScrollAxisType: () => (/* binding */ RtlScrollAxisType),
/* harmony export */   _getEventTarget: () => (/* binding */ _getEventTarget),
/* harmony export */   _getFocusedElementPierceShadowDom: () => (/* binding */ _getFocusedElementPierceShadowDom),
/* harmony export */   _getShadowRoot: () => (/* binding */ _getShadowRoot),
/* harmony export */   _isTestEnvironment: () => (/* binding */ _isTestEnvironment),
/* harmony export */   _supportsShadowDom: () => (/* binding */ _supportsShadowDom),
/* harmony export */   getRtlScrollAxisType: () => (/* binding */ getRtlScrollAxisType),
/* harmony export */   getSupportedInputTypes: () => (/* binding */ getSupportedInputTypes),
/* harmony export */   normalizePassiveListenerOptions: () => (/* binding */ normalizePassiveListenerOptions),
/* harmony export */   supportsPassiveEventListeners: () => (/* binding */ supportsPassiveEventListeners),
/* harmony export */   supportsScrollBehavior: () => (/* binding */ supportsScrollBehavior)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 60177);




// Whether the current platform supports the V8 Break Iterator. The V8 check
// is necessary to detect all Blink based browsers.
let hasV8BreakIterator;
// We need a try/catch around the reference to `Intl`, because accessing it in some cases can
// cause IE to throw. These cases are tied to particular versions of Windows and can happen if
// the consumer is providing a polyfilled `Map`. See:
// https://github.com/Microsoft/ChakraCore/issues/3189
// https://github.com/angular/components/issues/15687
try {
  hasV8BreakIterator = typeof Intl !== 'undefined' && Intl.v8BreakIterator;
} catch {
  hasV8BreakIterator = false;
}
/**
 * Service to detect the current platform by comparing the userAgent strings and
 * checking browser-specific global properties.
 */
class Platform {
  constructor(_platformId) {
    this._platformId = _platformId;
    // We want to use the Angular platform check because if the Document is shimmed
    // without the navigator, the following checks will fail. This is preferred because
    // sometimes the Document may be shimmed without the user's knowledge or intention
    /** Whether the Angular application is being rendered in the browser. */
    this.isBrowser = this._platformId ? (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.isPlatformBrowser)(this._platformId) : typeof document === 'object' && !!document;
    /** Whether the current browser is Microsoft Edge. */
    this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
    /** Whether the current rendering engine is Microsoft Trident. */
    this.TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent);
    // EdgeHTML and Trident mock Blink specific things and need to be excluded from this check.
    /** Whether the current rendering engine is Blink. */
    this.BLINK = this.isBrowser && !!(window.chrome || hasV8BreakIterator) && typeof CSS !== 'undefined' && !this.EDGE && !this.TRIDENT;
    // Webkit is part of the userAgent in EdgeHTML, Blink and Trident. Therefore we need to
    // ensure that Webkit runs standalone and is not used as another engine's base.
    /** Whether the current rendering engine is WebKit. */
    this.WEBKIT = this.isBrowser && /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
    /** Whether the current platform is Apple iOS. */
    this.IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) && !('MSStream' in window);
    // It's difficult to detect the plain Gecko engine, because most of the browsers identify
    // them self as Gecko-like browsers and modify the userAgent's according to that.
    // Since we only cover one explicit Firefox case, we can simply check for Firefox
    // instead of having an unstable check for Gecko.
    /** Whether the current browser is Firefox. */
    this.FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
    /** Whether the current platform is Android. */
    // Trident on mobile adds the android platform to the userAgent to trick detections.
    this.ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT;
    // Safari browsers will include the Safari keyword in their userAgent. Some browsers may fake
    // this and just place the Safari keyword in the userAgent. To be more safe about Safari every
    // Safari browser should also use Webkit as its layout engine.
    /** Whether the current browser is Safari. */
    this.SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
  }
  static {
    this.ɵfac = function Platform_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || Platform)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID));
    };
  }
  static {
    this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: Platform,
      factory: Platform.ɵfac,
      providedIn: 'root'
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Platform, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], () => [{
    type: Object,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID]
    }]
  }], null);
})();
class PlatformModule {
  static {
    this.ɵfac = function PlatformModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PlatformModule)();
    };
  }
  static {
    this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: PlatformModule
    });
  }
  static {
    this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PlatformModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{}]
  }], null, null);
})();

/** Cached result Set of input types support by the current browser. */
let supportedInputTypes;
/** Types of `<input>` that *might* be supported. */
const candidateInputTypes = [
// `color` must come first. Chrome 56 shows a warning if we change the type to `color` after
// first changing it to something else:
// The specified value "" does not conform to the required format.
// The format is "#rrggbb" where rr, gg, bb are two-digit hexadecimal numbers.
'color', 'button', 'checkbox', 'date', 'datetime-local', 'email', 'file', 'hidden', 'image', 'month', 'number', 'password', 'radio', 'range', 'reset', 'search', 'submit', 'tel', 'text', 'time', 'url', 'week'];
/** @returns The input types supported by this browser. */
function getSupportedInputTypes() {
  // Result is cached.
  if (supportedInputTypes) {
    return supportedInputTypes;
  }
  // We can't check if an input type is not supported until we're on the browser, so say that
  // everything is supported when not on the browser. We don't use `Platform` here since it's
  // just a helper function and can't inject it.
  if (typeof document !== 'object' || !document) {
    supportedInputTypes = new Set(candidateInputTypes);
    return supportedInputTypes;
  }
  let featureTestInput = document.createElement('input');
  supportedInputTypes = new Set(candidateInputTypes.filter(value => {
    featureTestInput.setAttribute('type', value);
    return featureTestInput.type === value;
  }));
  return supportedInputTypes;
}

/** Cached result of whether the user's browser supports passive event listeners. */
let supportsPassiveEvents;
/**
 * Checks whether the user's browser supports passive event listeners.
 * See: https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
 */
function supportsPassiveEventListeners() {
  if (supportsPassiveEvents == null && typeof window !== 'undefined') {
    try {
      window.addEventListener('test', null, Object.defineProperty({}, 'passive', {
        get: () => supportsPassiveEvents = true
      }));
    } finally {
      supportsPassiveEvents = supportsPassiveEvents || false;
    }
  }
  return supportsPassiveEvents;
}
/**
 * Normalizes an `AddEventListener` object to something that can be passed
 * to `addEventListener` on any browser, no matter whether it supports the
 * `options` parameter.
 * @param options Object to be normalized.
 */
function normalizePassiveListenerOptions(options) {
  return supportsPassiveEventListeners() ? options : !!options.capture;
}

/** The possible ways the browser may handle the horizontal scroll axis in RTL languages. */
var RtlScrollAxisType;
(function (RtlScrollAxisType) {
  /**
   * scrollLeft is 0 when scrolled all the way left and (scrollWidth - clientWidth) when scrolled
   * all the way right.
   */
  RtlScrollAxisType[RtlScrollAxisType["NORMAL"] = 0] = "NORMAL";
  /**
   * scrollLeft is -(scrollWidth - clientWidth) when scrolled all the way left and 0 when scrolled
   * all the way right.
   */
  RtlScrollAxisType[RtlScrollAxisType["NEGATED"] = 1] = "NEGATED";
  /**
   * scrollLeft is (scrollWidth - clientWidth) when scrolled all the way left and 0 when scrolled
   * all the way right.
   */
  RtlScrollAxisType[RtlScrollAxisType["INVERTED"] = 2] = "INVERTED";
})(RtlScrollAxisType || (RtlScrollAxisType = {}));
/** Cached result of the way the browser handles the horizontal scroll axis in RTL mode. */
let rtlScrollAxisType;
/** Cached result of the check that indicates whether the browser supports scroll behaviors. */
let scrollBehaviorSupported;
/** Check whether the browser supports scroll behaviors. */
function supportsScrollBehavior() {
  if (scrollBehaviorSupported == null) {
    // If we're not in the browser, it can't be supported. Also check for `Element`, because
    // some projects stub out the global `document` during SSR which can throw us off.
    if (typeof document !== 'object' || !document || typeof Element !== 'function' || !Element) {
      scrollBehaviorSupported = false;
      return scrollBehaviorSupported;
    }
    // If the element can have a `scrollBehavior` style, we can be sure that it's supported.
    if ('scrollBehavior' in document.documentElement.style) {
      scrollBehaviorSupported = true;
    } else {
      // At this point we have 3 possibilities: `scrollTo` isn't supported at all, it's
      // supported but it doesn't handle scroll behavior, or it has been polyfilled.
      const scrollToFunction = Element.prototype.scrollTo;
      if (scrollToFunction) {
        // We can detect if the function has been polyfilled by calling `toString` on it. Native
        // functions are obfuscated using `[native code]`, whereas if it was overwritten we'd get
        // the actual function source. Via https://davidwalsh.name/detect-native-function. Consider
        // polyfilled functions as supporting scroll behavior.
        scrollBehaviorSupported = !/\{\s*\[native code\]\s*\}/.test(scrollToFunction.toString());
      } else {
        scrollBehaviorSupported = false;
      }
    }
  }
  return scrollBehaviorSupported;
}
/**
 * Checks the type of RTL scroll axis used by this browser. As of time of writing, Chrome is NORMAL,
 * Firefox & Safari are NEGATED, and IE & Edge are INVERTED.
 */
function getRtlScrollAxisType() {
  // We can't check unless we're on the browser. Just assume 'normal' if we're not.
  if (typeof document !== 'object' || !document) {
    return RtlScrollAxisType.NORMAL;
  }
  if (rtlScrollAxisType == null) {
    // Create a 1px wide scrolling container and a 2px wide content element.
    const scrollContainer = document.createElement('div');
    const containerStyle = scrollContainer.style;
    scrollContainer.dir = 'rtl';
    containerStyle.width = '1px';
    containerStyle.overflow = 'auto';
    containerStyle.visibility = 'hidden';
    containerStyle.pointerEvents = 'none';
    containerStyle.position = 'absolute';
    const content = document.createElement('div');
    const contentStyle = content.style;
    contentStyle.width = '2px';
    contentStyle.height = '1px';
    scrollContainer.appendChild(content);
    document.body.appendChild(scrollContainer);
    rtlScrollAxisType = RtlScrollAxisType.NORMAL;
    // The viewport starts scrolled all the way to the right in RTL mode. If we are in a NORMAL
    // browser this would mean that the scrollLeft should be 1. If it's zero instead we know we're
    // dealing with one of the other two types of browsers.
    if (scrollContainer.scrollLeft === 0) {
      // In a NEGATED browser the scrollLeft is always somewhere in [-maxScrollAmount, 0]. For an
      // INVERTED browser it is always somewhere in [0, maxScrollAmount]. We can determine which by
      // setting to the scrollLeft to 1. This is past the max for a NEGATED browser, so it will
      // return 0 when we read it again.
      scrollContainer.scrollLeft = 1;
      rtlScrollAxisType = scrollContainer.scrollLeft === 0 ? RtlScrollAxisType.NEGATED : RtlScrollAxisType.INVERTED;
    }
    scrollContainer.remove();
  }
  return rtlScrollAxisType;
}
let shadowDomIsSupported;
/** Checks whether the user's browser support Shadow DOM. */
function _supportsShadowDom() {
  if (shadowDomIsSupported == null) {
    const head = typeof document !== 'undefined' ? document.head : null;
    shadowDomIsSupported = !!(head && (head.createShadowRoot || head.attachShadow));
  }
  return shadowDomIsSupported;
}
/** Gets the shadow root of an element, if supported and the element is inside the Shadow DOM. */
function _getShadowRoot(element) {
  if (_supportsShadowDom()) {
    const rootNode = element.getRootNode ? element.getRootNode() : null;
    // Note that this should be caught by `_supportsShadowDom`, but some
    // teams have been able to hit this code path on unsupported browsers.
    if (typeof ShadowRoot !== 'undefined' && ShadowRoot && rootNode instanceof ShadowRoot) {
      return rootNode;
    }
  }
  return null;
}
/**
 * Gets the currently-focused element on the page while
 * also piercing through Shadow DOM boundaries.
 */
function _getFocusedElementPierceShadowDom() {
  let activeElement = typeof document !== 'undefined' && document ? document.activeElement : null;
  while (activeElement && activeElement.shadowRoot) {
    const newActiveElement = activeElement.shadowRoot.activeElement;
    if (newActiveElement === activeElement) {
      break;
    } else {
      activeElement = newActiveElement;
    }
  }
  return activeElement;
}
/** Gets the target of an event while accounting for Shadow DOM. */
function _getEventTarget(event) {
  // If an event is bound outside the Shadow DOM, the `event.target` will
  // point to the shadow root so we have to use `composedPath` instead.
  return event.composedPath ? event.composedPath()[0] : event.target;
}

/** Gets whether the code is currently running in a test environment. */
function _isTestEnvironment() {
  // We can't use `declare const` because it causes conflicts inside Google with the real typings
  // for these symbols and we can't read them off the global object, because they don't appear to
  // be attached there for some runners like Jest.
  // (see: https://github.com/angular/components/issues/23365#issuecomment-938146643)
  return (
    // @ts-ignore
    typeof __karma__ !== 'undefined' && !!__karma__ ||
    // @ts-ignore
    typeof jasmine !== 'undefined' && !!jasmine ||
    // @ts-ignore
    typeof jest !== 'undefined' && !!jest ||
    // @ts-ignore
    typeof Mocha !== 'undefined' && !!Mocha
  );
}

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=platform.mjs.map

/***/ }),

/***/ 65478:
/*!**********************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/scrolling.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CdkFixedSizeVirtualScroll: () => (/* binding */ CdkFixedSizeVirtualScroll),
/* harmony export */   CdkScrollable: () => (/* binding */ CdkScrollable),
/* harmony export */   CdkScrollableModule: () => (/* binding */ CdkScrollableModule),
/* harmony export */   CdkVirtualForOf: () => (/* binding */ CdkVirtualForOf),
/* harmony export */   CdkVirtualScrollViewport: () => (/* binding */ CdkVirtualScrollViewport),
/* harmony export */   CdkVirtualScrollable: () => (/* binding */ CdkVirtualScrollable),
/* harmony export */   CdkVirtualScrollableElement: () => (/* binding */ CdkVirtualScrollableElement),
/* harmony export */   CdkVirtualScrollableWindow: () => (/* binding */ CdkVirtualScrollableWindow),
/* harmony export */   DEFAULT_RESIZE_TIME: () => (/* binding */ DEFAULT_RESIZE_TIME),
/* harmony export */   DEFAULT_SCROLL_TIME: () => (/* binding */ DEFAULT_SCROLL_TIME),
/* harmony export */   FixedSizeVirtualScrollStrategy: () => (/* binding */ FixedSizeVirtualScrollStrategy),
/* harmony export */   ScrollDispatcher: () => (/* binding */ ScrollDispatcher),
/* harmony export */   ScrollingModule: () => (/* binding */ ScrollingModule),
/* harmony export */   VIRTUAL_SCROLLABLE: () => (/* binding */ VIRTUAL_SCROLLABLE),
/* harmony export */   VIRTUAL_SCROLL_STRATEGY: () => (/* binding */ VIRTUAL_SCROLL_STRATEGY),
/* harmony export */   ViewportRuler: () => (/* binding */ ViewportRuler),
/* harmony export */   _fixedSizeVirtualScrollStrategyFactory: () => (/* binding */ _fixedSizeVirtualScrollStrategyFactory)
/* harmony export */ });
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ 14085);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 18530);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 7673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 71985);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 33726);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 95601);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 44683);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 13961);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 74402);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 23294);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 63578);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 5964);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 56977);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 99172);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 13946);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 25558);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 44668);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/platform */ 36860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/bidi */ 28203);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/collections */ 45024);













/** The injection token used to specify the virtual scrolling strategy. */
const _c0 = ["contentWrapper"];
const _c1 = ["*"];
const VIRTUAL_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('VIRTUAL_SCROLL_STRATEGY');

/** Virtual scrolling strategy for lists with items of known fixed size. */
class FixedSizeVirtualScrollStrategy {
  /**
   * @param itemSize The size of the items in the virtually scrolling list.
   * @param minBufferPx The minimum amount of buffer (in pixels) before needing to render more
   * @param maxBufferPx The amount of buffer (in pixels) to render when rendering more.
   */
  constructor(itemSize, minBufferPx, maxBufferPx) {
    this._scrolledIndexChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /** @docs-private Implemented as part of VirtualScrollStrategy. */
    this.scrolledIndexChange = this._scrolledIndexChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.distinctUntilChanged)());
    /** The attached viewport. */
    this._viewport = null;
    this._itemSize = itemSize;
    this._minBufferPx = minBufferPx;
    this._maxBufferPx = maxBufferPx;
  }
  /**
   * Attaches this scroll strategy to a viewport.
   * @param viewport The viewport to attach this strategy to.
   */
  attach(viewport) {
    this._viewport = viewport;
    this._updateTotalContentSize();
    this._updateRenderedRange();
  }
  /** Detaches this scroll strategy from the currently attached viewport. */
  detach() {
    this._scrolledIndexChange.complete();
    this._viewport = null;
  }
  /**
   * Update the item size and buffer size.
   * @param itemSize The size of the items in the virtually scrolling list.
   * @param minBufferPx The minimum amount of buffer (in pixels) before needing to render more
   * @param maxBufferPx The amount of buffer (in pixels) to render when rendering more.
   */
  updateItemAndBufferSize(itemSize, minBufferPx, maxBufferPx) {
    if (maxBufferPx < minBufferPx && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw Error('CDK virtual scroll: maxBufferPx must be greater than or equal to minBufferPx');
    }
    this._itemSize = itemSize;
    this._minBufferPx = minBufferPx;
    this._maxBufferPx = maxBufferPx;
    this._updateTotalContentSize();
    this._updateRenderedRange();
  }
  /** @docs-private Implemented as part of VirtualScrollStrategy. */
  onContentScrolled() {
    this._updateRenderedRange();
  }
  /** @docs-private Implemented as part of VirtualScrollStrategy. */
  onDataLengthChanged() {
    this._updateTotalContentSize();
    this._updateRenderedRange();
  }
  /** @docs-private Implemented as part of VirtualScrollStrategy. */
  onContentRendered() {
    /* no-op */
  }
  /** @docs-private Implemented as part of VirtualScrollStrategy. */
  onRenderedOffsetChanged() {
    /* no-op */
  }
  /**
   * Scroll to the offset for the given index.
   * @param index The index of the element to scroll to.
   * @param behavior The ScrollBehavior to use when scrolling.
   */
  scrollToIndex(index, behavior) {
    if (this._viewport) {
      this._viewport.scrollToOffset(index * this._itemSize, behavior);
    }
  }
  /** Update the viewport's total content size. */
  _updateTotalContentSize() {
    if (!this._viewport) {
      return;
    }
    this._viewport.setTotalContentSize(this._viewport.getDataLength() * this._itemSize);
  }
  /** Update the viewport's rendered range. */
  _updateRenderedRange() {
    if (!this._viewport) {
      return;
    }
    const renderedRange = this._viewport.getRenderedRange();
    const newRange = {
      start: renderedRange.start,
      end: renderedRange.end
    };
    const viewportSize = this._viewport.getViewportSize();
    const dataLength = this._viewport.getDataLength();
    let scrollOffset = this._viewport.measureScrollOffset();
    // Prevent NaN as result when dividing by zero.
    let firstVisibleIndex = this._itemSize > 0 ? scrollOffset / this._itemSize : 0;
    // If user scrolls to the bottom of the list and data changes to a smaller list
    if (newRange.end > dataLength) {
      // We have to recalculate the first visible index based on new data length and viewport size.
      const maxVisibleItems = Math.ceil(viewportSize / this._itemSize);
      const newVisibleIndex = Math.max(0, Math.min(firstVisibleIndex, dataLength - maxVisibleItems));
      // If first visible index changed we must update scroll offset to handle start/end buffers
      // Current range must also be adjusted to cover the new position (bottom of new list).
      if (firstVisibleIndex != newVisibleIndex) {
        firstVisibleIndex = newVisibleIndex;
        scrollOffset = newVisibleIndex * this._itemSize;
        newRange.start = Math.floor(firstVisibleIndex);
      }
      newRange.end = Math.max(0, Math.min(dataLength, newRange.start + maxVisibleItems));
    }
    const startBuffer = scrollOffset - newRange.start * this._itemSize;
    if (startBuffer < this._minBufferPx && newRange.start != 0) {
      const expandStart = Math.ceil((this._maxBufferPx - startBuffer) / this._itemSize);
      newRange.start = Math.max(0, newRange.start - expandStart);
      newRange.end = Math.min(dataLength, Math.ceil(firstVisibleIndex + (viewportSize + this._minBufferPx) / this._itemSize));
    } else {
      const endBuffer = newRange.end * this._itemSize - (scrollOffset + viewportSize);
      if (endBuffer < this._minBufferPx && newRange.end != dataLength) {
        const expandEnd = Math.ceil((this._maxBufferPx - endBuffer) / this._itemSize);
        if (expandEnd > 0) {
          newRange.end = Math.min(dataLength, newRange.end + expandEnd);
          newRange.start = Math.max(0, Math.floor(firstVisibleIndex - this._minBufferPx / this._itemSize));
        }
      }
    }
    this._viewport.setRenderedRange(newRange);
    this._viewport.setRenderedContentOffset(this._itemSize * newRange.start);
    this._scrolledIndexChange.next(Math.floor(firstVisibleIndex));
  }
}
/**
 * Provider factory for `FixedSizeVirtualScrollStrategy` that simply extracts the already created
 * `FixedSizeVirtualScrollStrategy` from the given directive.
 * @param fixedSizeDir The instance of `CdkFixedSizeVirtualScroll` to extract the
 *     `FixedSizeVirtualScrollStrategy` from.
 */
function _fixedSizeVirtualScrollStrategyFactory(fixedSizeDir) {
  return fixedSizeDir._scrollStrategy;
}
/** A virtual scroll strategy that supports fixed-size items. */
class CdkFixedSizeVirtualScroll {
  constructor() {
    this._itemSize = 20;
    this._minBufferPx = 100;
    this._maxBufferPx = 200;
    /** The scroll strategy used by this directive. */
    this._scrollStrategy = new FixedSizeVirtualScrollStrategy(this.itemSize, this.minBufferPx, this.maxBufferPx);
  }
  /** The size of the items in the list (in pixels). */
  get itemSize() {
    return this._itemSize;
  }
  set itemSize(value) {
    this._itemSize = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceNumberProperty)(value);
  }
  /**
   * The minimum amount of buffer rendered beyond the viewport (in pixels).
   * If the amount of buffer dips below this number, more items will be rendered. Defaults to 100px.
   */
  get minBufferPx() {
    return this._minBufferPx;
  }
  set minBufferPx(value) {
    this._minBufferPx = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceNumberProperty)(value);
  }
  /**
   * The number of pixels worth of buffer to render for when rendering new items. Defaults to 200px.
   */
  get maxBufferPx() {
    return this._maxBufferPx;
  }
  set maxBufferPx(value) {
    this._maxBufferPx = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceNumberProperty)(value);
  }
  ngOnChanges() {
    this._scrollStrategy.updateItemAndBufferSize(this.itemSize, this.minBufferPx, this.maxBufferPx);
  }
  static {
    this.ɵfac = function CdkFixedSizeVirtualScroll_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkFixedSizeVirtualScroll)();
    };
  }
  static {
    this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: CdkFixedSizeVirtualScroll,
      selectors: [["cdk-virtual-scroll-viewport", "itemSize", ""]],
      inputs: {
        itemSize: "itemSize",
        minBufferPx: "minBufferPx",
        maxBufferPx: "maxBufferPx"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: VIRTUAL_SCROLL_STRATEGY,
        useFactory: _fixedSizeVirtualScrollStrategyFactory,
        deps: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => CdkFixedSizeVirtualScroll)]
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkFixedSizeVirtualScroll, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'cdk-virtual-scroll-viewport[itemSize]',
      standalone: true,
      providers: [{
        provide: VIRTUAL_SCROLL_STRATEGY,
        useFactory: _fixedSizeVirtualScrollStrategyFactory,
        deps: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => CdkFixedSizeVirtualScroll)]
      }]
    }]
  }], null, {
    itemSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    minBufferPx: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    maxBufferPx: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

/** Time in ms to throttle the scrolling events by default. */
const DEFAULT_SCROLL_TIME = 20;
/**
 * Service contained all registered Scrollable references and emits an event when any one of the
 * Scrollable references emit a scrolled event.
 */
class ScrollDispatcher {
  constructor(_ngZone, _platform, document) {
    this._ngZone = _ngZone;
    this._platform = _platform;
    /** Subject for notifying that a registered scrollable reference element has been scrolled. */
    this._scrolled = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /** Keeps track of the global `scroll` and `resize` subscriptions. */
    this._globalSubscription = null;
    /** Keeps track of the amount of subscriptions to `scrolled`. Used for cleaning up afterwards. */
    this._scrolledCount = 0;
    /**
     * Map of all the scrollable references that are registered with the service and their
     * scroll event subscriptions.
     */
    this.scrollContainers = new Map();
    this._document = document;
  }
  /**
   * Registers a scrollable instance with the service and listens for its scrolled events. When the
   * scrollable is scrolled, the service emits the event to its scrolled observable.
   * @param scrollable Scrollable instance to be registered.
   */
  register(scrollable) {
    if (!this.scrollContainers.has(scrollable)) {
      this.scrollContainers.set(scrollable, scrollable.elementScrolled().subscribe(() => this._scrolled.next(scrollable)));
    }
  }
  /**
   * De-registers a Scrollable reference and unsubscribes from its scroll event observable.
   * @param scrollable Scrollable instance to be deregistered.
   */
  deregister(scrollable) {
    const scrollableReference = this.scrollContainers.get(scrollable);
    if (scrollableReference) {
      scrollableReference.unsubscribe();
      this.scrollContainers.delete(scrollable);
    }
  }
  /**
   * Returns an observable that emits an event whenever any of the registered Scrollable
   * references (or window, document, or body) fire a scrolled event. Can provide a time in ms
   * to override the default "throttle" time.
   *
   * **Note:** in order to avoid hitting change detection for every scroll event,
   * all of the events emitted from this stream will be run outside the Angular zone.
   * If you need to update any data bindings as a result of a scroll event, you have
   * to run the callback using `NgZone.run`.
   */
  scrolled(auditTimeInMs = DEFAULT_SCROLL_TIME) {
    if (!this._platform.isBrowser) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)();
    }
    return new rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable(observer => {
      if (!this._globalSubscription) {
        this._addGlobalListener();
      }
      // In the case of a 0ms delay, use an observable without auditTime
      // since it does add a perceptible delay in processing overhead.
      const subscription = auditTimeInMs > 0 ? this._scrolled.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.auditTime)(auditTimeInMs)).subscribe(observer) : this._scrolled.subscribe(observer);
      this._scrolledCount++;
      return () => {
        subscription.unsubscribe();
        this._scrolledCount--;
        if (!this._scrolledCount) {
          this._removeGlobalListener();
        }
      };
    });
  }
  ngOnDestroy() {
    this._removeGlobalListener();
    this.scrollContainers.forEach((_, container) => this.deregister(container));
    this._scrolled.complete();
  }
  /**
   * Returns an observable that emits whenever any of the
   * scrollable ancestors of an element are scrolled.
   * @param elementOrElementRef Element whose ancestors to listen for.
   * @param auditTimeInMs Time to throttle the scroll events.
   */
  ancestorScrolled(elementOrElementRef, auditTimeInMs) {
    const ancestors = this.getAncestorScrollContainers(elementOrElementRef);
    return this.scrolled(auditTimeInMs).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(target => {
      return !target || ancestors.indexOf(target) > -1;
    }));
  }
  /** Returns all registered Scrollables that contain the provided element. */
  getAncestorScrollContainers(elementOrElementRef) {
    const scrollingContainers = [];
    this.scrollContainers.forEach((_subscription, scrollable) => {
      if (this._scrollableContainsElement(scrollable, elementOrElementRef)) {
        scrollingContainers.push(scrollable);
      }
    });
    return scrollingContainers;
  }
  /** Use defaultView of injected document if available or fallback to global window reference */
  _getWindow() {
    return this._document.defaultView || window;
  }
  /** Returns true if the element is contained within the provided Scrollable. */
  _scrollableContainsElement(scrollable, elementOrElementRef) {
    let element = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceElement)(elementOrElementRef);
    let scrollableElement = scrollable.getElementRef().nativeElement;
    // Traverse through the element parents until we reach null, checking if any of the elements
    // are the scrollable's element.
    do {
      if (element == scrollableElement) {
        return true;
      }
    } while (element = element.parentElement);
    return false;
  }
  /** Sets up the global scroll listeners. */
  _addGlobalListener() {
    this._globalSubscription = this._ngZone.runOutsideAngular(() => {
      const window = this._getWindow();
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.fromEvent)(window.document, 'scroll').subscribe(() => this._scrolled.next());
    });
  }
  /** Cleans up the global scroll listener. */
  _removeGlobalListener() {
    if (this._globalSubscription) {
      this._globalSubscription.unsubscribe();
      this._globalSubscription = null;
    }
  }
  static {
    this.ɵfac = function ScrollDispatcher_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ScrollDispatcher)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__.DOCUMENT, 8));
    };
  }
  static {
    this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ScrollDispatcher,
      factory: ScrollDispatcher.ɵfac,
      providedIn: 'root'
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollDispatcher, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
  }, {
    type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.Platform
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.DOCUMENT]
    }]
  }], null);
})();

/**
 * Sends an event when the directive's element is scrolled. Registers itself with the
 * ScrollDispatcher service to include itself as part of its collection of scrolling events that it
 * can be listened to through the service.
 */
class CdkScrollable {
  constructor(elementRef, scrollDispatcher, ngZone, dir) {
    this.elementRef = elementRef;
    this.scrollDispatcher = scrollDispatcher;
    this.ngZone = ngZone;
    this.dir = dir;
    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this._elementScrolled = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable(observer => this.ngZone.runOutsideAngular(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.fromEvent)(this.elementRef.nativeElement, 'scroll').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this._destroyed)).subscribe(observer)));
  }
  ngOnInit() {
    this.scrollDispatcher.register(this);
  }
  ngOnDestroy() {
    this.scrollDispatcher.deregister(this);
    this._destroyed.next();
    this._destroyed.complete();
  }
  /** Returns observable that emits when a scroll event is fired on the host element. */
  elementScrolled() {
    return this._elementScrolled;
  }
  /** Gets the ElementRef for the viewport. */
  getElementRef() {
    return this.elementRef;
  }
  /**
   * Scrolls to the specified offsets. This is a normalized version of the browser's native scrollTo
   * method, since browsers are not consistent about what scrollLeft means in RTL. For this method
   * left and right always refer to the left and right side of the scrolling container irrespective
   * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
   * in an RTL context.
   * @param options specified the offsets to scroll to.
   */
  scrollTo(options) {
    const el = this.elementRef.nativeElement;
    const isRtl = this.dir && this.dir.value == 'rtl';
    // Rewrite start & end offsets as right or left offsets.
    if (options.left == null) {
      options.left = isRtl ? options.end : options.start;
    }
    if (options.right == null) {
      options.right = isRtl ? options.start : options.end;
    }
    // Rewrite the bottom offset as a top offset.
    if (options.bottom != null) {
      options.top = el.scrollHeight - el.clientHeight - options.bottom;
    }
    // Rewrite the right offset as a left offset.
    if (isRtl && (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.getRtlScrollAxisType)() != _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.RtlScrollAxisType.NORMAL) {
      if (options.left != null) {
        options.right = el.scrollWidth - el.clientWidth - options.left;
      }
      if ((0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.getRtlScrollAxisType)() == _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.RtlScrollAxisType.INVERTED) {
        options.left = options.right;
      } else if ((0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.getRtlScrollAxisType)() == _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.RtlScrollAxisType.NEGATED) {
        options.left = options.right ? -options.right : options.right;
      }
    } else {
      if (options.right != null) {
        options.left = el.scrollWidth - el.clientWidth - options.right;
      }
    }
    this._applyScrollToOptions(options);
  }
  _applyScrollToOptions(options) {
    const el = this.elementRef.nativeElement;
    if ((0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.supportsScrollBehavior)()) {
      el.scrollTo(options);
    } else {
      if (options.top != null) {
        el.scrollTop = options.top;
      }
      if (options.left != null) {
        el.scrollLeft = options.left;
      }
    }
  }
  /**
   * Measures the scroll offset relative to the specified edge of the viewport. This method can be
   * used instead of directly checking scrollLeft or scrollTop, since browsers are not consistent
   * about what scrollLeft means in RTL. The values returned by this method are normalized such that
   * left and right always refer to the left and right side of the scrolling container irrespective
   * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
   * in an RTL context.
   * @param from The edge to measure from.
   */
  measureScrollOffset(from) {
    const LEFT = 'left';
    const RIGHT = 'right';
    const el = this.elementRef.nativeElement;
    if (from == 'top') {
      return el.scrollTop;
    }
    if (from == 'bottom') {
      return el.scrollHeight - el.clientHeight - el.scrollTop;
    }
    // Rewrite start & end as left or right offsets.
    const isRtl = this.dir && this.dir.value == 'rtl';
    if (from == 'start') {
      from = isRtl ? RIGHT : LEFT;
    } else if (from == 'end') {
      from = isRtl ? LEFT : RIGHT;
    }
    if (isRtl && (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.getRtlScrollAxisType)() == _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.RtlScrollAxisType.INVERTED) {
      // For INVERTED, scrollLeft is (scrollWidth - clientWidth) when scrolled all the way left and
      // 0 when scrolled all the way right.
      if (from == LEFT) {
        return el.scrollWidth - el.clientWidth - el.scrollLeft;
      } else {
        return el.scrollLeft;
      }
    } else if (isRtl && (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.getRtlScrollAxisType)() == _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.RtlScrollAxisType.NEGATED) {
      // For NEGATED, scrollLeft is -(scrollWidth - clientWidth) when scrolled all the way left and
      // 0 when scrolled all the way right.
      if (from == LEFT) {
        return el.scrollLeft + el.scrollWidth - el.clientWidth;
      } else {
        return -el.scrollLeft;
      }
    } else {
      // For NORMAL, as well as non-RTL contexts, scrollLeft is 0 when scrolled all the way left and
      // (scrollWidth - clientWidth) when scrolled all the way right.
      if (from == LEFT) {
        return el.scrollLeft;
      } else {
        return el.scrollWidth - el.clientWidth - el.scrollLeft;
      }
    }
  }
  static {
    this.ɵfac = function CdkScrollable_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkScrollable)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ScrollDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__.Directionality, 8));
    };
  }
  static {
    this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: CdkScrollable,
      selectors: [["", "cdk-scrollable", ""], ["", "cdkScrollable", ""]],
      standalone: true
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkScrollable, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[cdk-scrollable], [cdkScrollable]',
      standalone: true
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }, {
    type: ScrollDispatcher
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
  }, {
    type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__.Directionality,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }]
  }], null);
})();

/** Time in ms to throttle the resize events by default. */
const DEFAULT_RESIZE_TIME = 20;
/**
 * Simple utility for getting the bounds of the browser viewport.
 * @docs-private
 */
class ViewportRuler {
  constructor(_platform, ngZone, document) {
    this._platform = _platform;
    /** Stream of viewport change events. */
    this._change = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /** Event listener that will be used to handle the viewport change events. */
    this._changeListener = event => {
      this._change.next(event);
    };
    this._document = document;
    ngZone.runOutsideAngular(() => {
      if (_platform.isBrowser) {
        const window = this._getWindow();
        // Note that bind the events ourselves, rather than going through something like RxJS's
        // `fromEvent` so that we can ensure that they're bound outside of the NgZone.
        window.addEventListener('resize', this._changeListener);
        window.addEventListener('orientationchange', this._changeListener);
      }
      // Clear the cached position so that the viewport is re-measured next time it is required.
      // We don't need to keep track of the subscription, because it is completed on destroy.
      this.change().subscribe(() => this._viewportSize = null);
    });
  }
  ngOnDestroy() {
    if (this._platform.isBrowser) {
      const window = this._getWindow();
      window.removeEventListener('resize', this._changeListener);
      window.removeEventListener('orientationchange', this._changeListener);
    }
    this._change.complete();
  }
  /** Returns the viewport's width and height. */
  getViewportSize() {
    if (!this._viewportSize) {
      this._updateViewportSize();
    }
    const output = {
      width: this._viewportSize.width,
      height: this._viewportSize.height
    };
    // If we're not on a browser, don't cache the size since it'll be mocked out anyway.
    if (!this._platform.isBrowser) {
      this._viewportSize = null;
    }
    return output;
  }
  /** Gets a DOMRect for the viewport's bounds. */
  getViewportRect() {
    // Use the document element's bounding rect rather than the window scroll properties
    // (e.g. pageYOffset, scrollY) due to in issue in Chrome and IE where window scroll
    // properties and client coordinates (boundingClientRect, clientX/Y, etc.) are in different
    // conceptual viewports. Under most circumstances these viewports are equivalent, but they
    // can disagree when the page is pinch-zoomed (on devices that support touch).
    // See https://bugs.chromium.org/p/chromium/issues/detail?id=489206#c4
    // We use the documentElement instead of the body because, by default (without a css reset)
    // browsers typically give the document body an 8px margin, which is not included in
    // getBoundingClientRect().
    const scrollPosition = this.getViewportScrollPosition();
    const {
      width,
      height
    } = this.getViewportSize();
    return {
      top: scrollPosition.top,
      left: scrollPosition.left,
      bottom: scrollPosition.top + height,
      right: scrollPosition.left + width,
      height,
      width
    };
  }
  /** Gets the (top, left) scroll position of the viewport. */
  getViewportScrollPosition() {
    // While we can get a reference to the fake document
    // during SSR, it doesn't have getBoundingClientRect.
    if (!this._platform.isBrowser) {
      return {
        top: 0,
        left: 0
      };
    }
    // The top-left-corner of the viewport is determined by the scroll position of the document
    // body, normally just (scrollLeft, scrollTop). However, Chrome and Firefox disagree about
    // whether `document.body` or `document.documentElement` is the scrolled element, so reading
    // `scrollTop` and `scrollLeft` is inconsistent. However, using the bounding rect of
    // `document.documentElement` works consistently, where the `top` and `left` values will
    // equal negative the scroll position.
    const document = this._document;
    const window = this._getWindow();
    const documentElement = document.documentElement;
    const documentRect = documentElement.getBoundingClientRect();
    const top = -documentRect.top || document.body.scrollTop || window.scrollY || documentElement.scrollTop || 0;
    const left = -documentRect.left || document.body.scrollLeft || window.scrollX || documentElement.scrollLeft || 0;
    return {
      top,
      left
    };
  }
  /**
   * Returns a stream that emits whenever the size of the viewport changes.
   * This stream emits outside of the Angular zone.
   * @param throttleTime Time in milliseconds to throttle the stream.
   */
  change(throttleTime = DEFAULT_RESIZE_TIME) {
    return throttleTime > 0 ? this._change.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.auditTime)(throttleTime)) : this._change;
  }
  /** Use defaultView of injected document if available or fallback to global window reference */
  _getWindow() {
    return this._document.defaultView || window;
  }
  /** Updates the cached viewport size. */
  _updateViewportSize() {
    const window = this._getWindow();
    this._viewportSize = this._platform.isBrowser ? {
      width: window.innerWidth,
      height: window.innerHeight
    } : {
      width: 0,
      height: 0
    };
  }
  static {
    this.ɵfac = function ViewportRuler_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ViewportRuler)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__.DOCUMENT, 8));
    };
  }
  static {
    this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ViewportRuler,
      factory: ViewportRuler.ɵfac,
      providedIn: 'root'
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewportRuler, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], () => [{
    type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.Platform
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.DOCUMENT]
    }]
  }], null);
})();
const VIRTUAL_SCROLLABLE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('VIRTUAL_SCROLLABLE');
/**
 * Extending the {@link CdkScrollable} to be used as scrolling container for virtual scrolling.
 */
class CdkVirtualScrollable extends CdkScrollable {
  constructor(elementRef, scrollDispatcher, ngZone, dir) {
    super(elementRef, scrollDispatcher, ngZone, dir);
  }
  /**
   * Measure the viewport size for the provided orientation.
   *
   * @param orientation The orientation to measure the size from.
   */
  measureViewportSize(orientation) {
    const viewportEl = this.elementRef.nativeElement;
    return orientation === 'horizontal' ? viewportEl.clientWidth : viewportEl.clientHeight;
  }
  static {
    this.ɵfac = function CdkVirtualScrollable_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkVirtualScrollable)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ScrollDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__.Directionality, 8));
    };
  }
  static {
    this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: CdkVirtualScrollable,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkVirtualScrollable, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }, {
    type: ScrollDispatcher
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
  }, {
    type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__.Directionality,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }]
  }], null);
})();

/** Checks if the given ranges are equal. */
function rangesEqual(r1, r2) {
  return r1.start == r2.start && r1.end == r2.end;
}
/**
 * Scheduler to be used for scroll events. Needs to fall back to
 * something that doesn't rely on requestAnimationFrame on environments
 * that don't support it (e.g. server-side rendering).
 */
const SCROLL_SCHEDULER = typeof requestAnimationFrame !== 'undefined' ? rxjs__WEBPACK_IMPORTED_MODULE_13__.animationFrameScheduler : rxjs__WEBPACK_IMPORTED_MODULE_14__.asapScheduler;
/** A viewport that virtualizes its scrolling with the help of `CdkVirtualForOf`. */
class CdkVirtualScrollViewport extends CdkVirtualScrollable {
  /** The direction the viewport scrolls. */
  get orientation() {
    return this._orientation;
  }
  set orientation(orientation) {
    if (this._orientation !== orientation) {
      this._orientation = orientation;
      this._calculateSpacerSize();
    }
  }
  constructor(elementRef, _changeDetectorRef, ngZone, _scrollStrategy, dir, scrollDispatcher, viewportRuler, scrollable) {
    super(elementRef, scrollDispatcher, ngZone, dir);
    this.elementRef = elementRef;
    this._changeDetectorRef = _changeDetectorRef;
    this._scrollStrategy = _scrollStrategy;
    this.scrollable = scrollable;
    this._platform = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.Platform);
    /** Emits when the viewport is detached from a CdkVirtualForOf. */
    this._detachedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /** Emits when the rendered range changes. */
    this._renderedRangeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this._orientation = 'vertical';
    /**
     * Whether rendered items should persist in the DOM after scrolling out of view. By default, items
     * will be removed.
     */
    this.appendOnly = false;
    // Note: we don't use the typical EventEmitter here because we need to subscribe to the scroll
    // strategy lazily (i.e. only if the user is actually listening to the events). We do this because
    // depending on how the strategy calculates the scrolled index, it may come at a cost to
    // performance.
    /** Emits when the index of the first element visible in the viewport changes. */
    this.scrolledIndexChange = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable(observer => this._scrollStrategy.scrolledIndexChange.subscribe(index => Promise.resolve().then(() => this.ngZone.run(() => observer.next(index)))));
    /** A stream that emits whenever the rendered range changes. */
    this.renderedRangeStream = this._renderedRangeSubject;
    /**
     * The total size of all content (in pixels), including content that is not currently rendered.
     */
    this._totalContentSize = 0;
    /** A string representing the `style.width` property value to be used for the spacer element. */
    this._totalContentWidth = '';
    /** A string representing the `style.height` property value to be used for the spacer element. */
    this._totalContentHeight = '';
    /** The currently rendered range of indices. */
    this._renderedRange = {
      start: 0,
      end: 0
    };
    /** The length of the data bound to this viewport (in number of items). */
    this._dataLength = 0;
    /** The size of the viewport (in pixels). */
    this._viewportSize = 0;
    /** The last rendered content offset that was set. */
    this._renderedContentOffset = 0;
    /**
     * Whether the last rendered content offset was to the end of the content (and therefore needs to
     * be rewritten as an offset to the start of the content).
     */
    this._renderedContentOffsetNeedsRewrite = false;
    /** Whether there is a pending change detection cycle. */
    this._isChangeDetectionPending = false;
    /** A list of functions to run after the next change detection cycle. */
    this._runAfterChangeDetection = [];
    /** Subscription to changes in the viewport size. */
    this._viewportChanges = rxjs__WEBPACK_IMPORTED_MODULE_15__.Subscription.EMPTY;
    this._injector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector);
    this._isDestroyed = false;
    if (!_scrollStrategy && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw Error('Error: cdk-virtual-scroll-viewport requires the "itemSize" property to be set.');
    }
    this._viewportChanges = viewportRuler.change().subscribe(() => {
      this.checkViewportSize();
    });
    if (!this.scrollable) {
      // No scrollable is provided, so the virtual-scroll-viewport needs to become a scrollable
      this.elementRef.nativeElement.classList.add('cdk-virtual-scrollable');
      this.scrollable = this;
    }
  }
  ngOnInit() {
    // Scrolling depends on the element dimensions which we can't get during SSR.
    if (!this._platform.isBrowser) {
      return;
    }
    if (this.scrollable === this) {
      super.ngOnInit();
    }
    // It's still too early to measure the viewport at this point. Deferring with a promise allows
    // the Viewport to be rendered with the correct size before we measure. We run this outside the
    // zone to avoid causing more change detection cycles. We handle the change detection loop
    // ourselves instead.
    this.ngZone.runOutsideAngular(() => Promise.resolve().then(() => {
      this._measureViewportSize();
      this._scrollStrategy.attach(this);
      this.scrollable.elementScrolled().pipe(
      // Start off with a fake scroll event so we properly detect our initial position.
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.startWith)(null),
      // Collect multiple events into one until the next animation frame. This way if
      // there are multiple scroll events in the same frame we only need to recheck
      // our layout once.
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.auditTime)(0, SCROLL_SCHEDULER),
      // Usually `elementScrolled` is completed when the scrollable is destroyed, but
      // that may not be the case if a `CdkVirtualScrollableElement` is used so we have
      // to unsubscribe here just in case.
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this._destroyed)).subscribe(() => this._scrollStrategy.onContentScrolled());
      this._markChangeDetectionNeeded();
    }));
  }
  ngOnDestroy() {
    this.detach();
    this._scrollStrategy.detach();
    // Complete all subjects
    this._renderedRangeSubject.complete();
    this._detachedSubject.complete();
    this._viewportChanges.unsubscribe();
    this._isDestroyed = true;
    super.ngOnDestroy();
  }
  /** Attaches a `CdkVirtualScrollRepeater` to this viewport. */
  attach(forOf) {
    if (this._forOf && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw Error('CdkVirtualScrollViewport is already attached.');
    }
    // Subscribe to the data stream of the CdkVirtualForOf to keep track of when the data length
    // changes. Run outside the zone to avoid triggering change detection, since we're managing the
    // change detection loop ourselves.
    this.ngZone.runOutsideAngular(() => {
      this._forOf = forOf;
      this._forOf.dataStream.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this._detachedSubject)).subscribe(data => {
        const newLength = data.length;
        if (newLength !== this._dataLength) {
          this._dataLength = newLength;
          this._scrollStrategy.onDataLengthChanged();
        }
        this._doChangeDetection();
      });
    });
  }
  /** Detaches the current `CdkVirtualForOf`. */
  detach() {
    this._forOf = null;
    this._detachedSubject.next();
  }
  /** Gets the length of the data bound to this viewport (in number of items). */
  getDataLength() {
    return this._dataLength;
  }
  /** Gets the size of the viewport (in pixels). */
  getViewportSize() {
    return this._viewportSize;
  }
  // TODO(mmalerba): This is technically out of sync with what's really rendered until a render
  // cycle happens. I'm being careful to only call it after the render cycle is complete and before
  // setting it to something else, but its error prone and should probably be split into
  // `pendingRange` and `renderedRange`, the latter reflecting whats actually in the DOM.
  /** Get the current rendered range of items. */
  getRenderedRange() {
    return this._renderedRange;
  }
  measureBoundingClientRectWithScrollOffset(from) {
    return this.getElementRef().nativeElement.getBoundingClientRect()[from];
  }
  /**
   * Sets the total size of all content (in pixels), including content that is not currently
   * rendered.
   */
  setTotalContentSize(size) {
    if (this._totalContentSize !== size) {
      this._totalContentSize = size;
      this._calculateSpacerSize();
      this._markChangeDetectionNeeded();
    }
  }
  /** Sets the currently rendered range of indices. */
  setRenderedRange(range) {
    if (!rangesEqual(this._renderedRange, range)) {
      if (this.appendOnly) {
        range = {
          start: 0,
          end: Math.max(this._renderedRange.end, range.end)
        };
      }
      this._renderedRangeSubject.next(this._renderedRange = range);
      this._markChangeDetectionNeeded(() => this._scrollStrategy.onContentRendered());
    }
  }
  /**
   * Gets the offset from the start of the viewport to the start of the rendered data (in pixels).
   */
  getOffsetToRenderedContentStart() {
    return this._renderedContentOffsetNeedsRewrite ? null : this._renderedContentOffset;
  }
  /**
   * Sets the offset from the start of the viewport to either the start or end of the rendered data
   * (in pixels).
   */
  setRenderedContentOffset(offset, to = 'to-start') {
    // In appendOnly, we always start from the top
    offset = this.appendOnly && to === 'to-start' ? 0 : offset;
    // For a horizontal viewport in a right-to-left language we need to translate along the x-axis
    // in the negative direction.
    const isRtl = this.dir && this.dir.value == 'rtl';
    const isHorizontal = this.orientation == 'horizontal';
    const axis = isHorizontal ? 'X' : 'Y';
    const axisDirection = isHorizontal && isRtl ? -1 : 1;
    let transform = `translate${axis}(${Number(axisDirection * offset)}px)`;
    this._renderedContentOffset = offset;
    if (to === 'to-end') {
      transform += ` translate${axis}(-100%)`;
      // The viewport should rewrite this as a `to-start` offset on the next render cycle. Otherwise
      // elements will appear to expand in the wrong direction (e.g. `mat-expansion-panel` would
      // expand upward).
      this._renderedContentOffsetNeedsRewrite = true;
    }
    if (this._renderedContentTransform != transform) {
      // We know this value is safe because we parse `offset` with `Number()` before passing it
      // into the string.
      this._renderedContentTransform = transform;
      this._markChangeDetectionNeeded(() => {
        if (this._renderedContentOffsetNeedsRewrite) {
          this._renderedContentOffset -= this.measureRenderedContentSize();
          this._renderedContentOffsetNeedsRewrite = false;
          this.setRenderedContentOffset(this._renderedContentOffset);
        } else {
          this._scrollStrategy.onRenderedOffsetChanged();
        }
      });
    }
  }
  /**
   * Scrolls to the given offset from the start of the viewport. Please note that this is not always
   * the same as setting `scrollTop` or `scrollLeft`. In a horizontal viewport with right-to-left
   * direction, this would be the equivalent of setting a fictional `scrollRight` property.
   * @param offset The offset to scroll to.
   * @param behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
   */
  scrollToOffset(offset, behavior = 'auto') {
    const options = {
      behavior
    };
    if (this.orientation === 'horizontal') {
      options.start = offset;
    } else {
      options.top = offset;
    }
    this.scrollable.scrollTo(options);
  }
  /**
   * Scrolls to the offset for the given index.
   * @param index The index of the element to scroll to.
   * @param behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
   */
  scrollToIndex(index, behavior = 'auto') {
    this._scrollStrategy.scrollToIndex(index, behavior);
  }
  /**
   * Gets the current scroll offset from the start of the scrollable (in pixels).
   * @param from The edge to measure the offset from. Defaults to 'top' in vertical mode and 'start'
   *     in horizontal mode.
   */
  measureScrollOffset(from) {
    // This is to break the call cycle
    let measureScrollOffset;
    if (this.scrollable == this) {
      measureScrollOffset = _from => super.measureScrollOffset(_from);
    } else {
      measureScrollOffset = _from => this.scrollable.measureScrollOffset(_from);
    }
    return Math.max(0, measureScrollOffset(from ?? (this.orientation === 'horizontal' ? 'start' : 'top')) - this.measureViewportOffset());
  }
  /**
   * Measures the offset of the viewport from the scrolling container
   * @param from The edge to measure from.
   */
  measureViewportOffset(from) {
    let fromRect;
    const LEFT = 'left';
    const RIGHT = 'right';
    const isRtl = this.dir?.value == 'rtl';
    if (from == 'start') {
      fromRect = isRtl ? RIGHT : LEFT;
    } else if (from == 'end') {
      fromRect = isRtl ? LEFT : RIGHT;
    } else if (from) {
      fromRect = from;
    } else {
      fromRect = this.orientation === 'horizontal' ? 'left' : 'top';
    }
    const scrollerClientRect = this.scrollable.measureBoundingClientRectWithScrollOffset(fromRect);
    const viewportClientRect = this.elementRef.nativeElement.getBoundingClientRect()[fromRect];
    return viewportClientRect - scrollerClientRect;
  }
  /** Measure the combined size of all of the rendered items. */
  measureRenderedContentSize() {
    const contentEl = this._contentWrapper.nativeElement;
    return this.orientation === 'horizontal' ? contentEl.offsetWidth : contentEl.offsetHeight;
  }
  /**
   * Measure the total combined size of the given range. Throws if the range includes items that are
   * not rendered.
   */
  measureRangeSize(range) {
    if (!this._forOf) {
      return 0;
    }
    return this._forOf.measureRangeSize(range, this.orientation);
  }
  /** Update the viewport dimensions and re-render. */
  checkViewportSize() {
    // TODO: Cleanup later when add logic for handling content resize
    this._measureViewportSize();
    this._scrollStrategy.onDataLengthChanged();
  }
  /** Measure the viewport size. */
  _measureViewportSize() {
    this._viewportSize = this.scrollable.measureViewportSize(this.orientation);
  }
  /** Queue up change detection to run. */
  _markChangeDetectionNeeded(runAfter) {
    if (runAfter) {
      this._runAfterChangeDetection.push(runAfter);
    }
    // Use a Promise to batch together calls to `_doChangeDetection`. This way if we set a bunch of
    // properties sequentially we only have to run `_doChangeDetection` once at the end.
    if (!this._isChangeDetectionPending) {
      this._isChangeDetectionPending = true;
      this.ngZone.runOutsideAngular(() => Promise.resolve().then(() => {
        this._doChangeDetection();
      }));
    }
  }
  /** Run change detection. */
  _doChangeDetection() {
    if (this._isDestroyed) {
      return;
    }
    this.ngZone.run(() => {
      // Apply changes to Angular bindings. Note: We must call `markForCheck` to run change detection
      // from the root, since the repeated items are content projected in. Calling `detectChanges`
      // instead does not properly check the projected content.
      this._changeDetectorRef.markForCheck();
      // Apply the content transform. The transform can't be set via an Angular binding because
      // bypassSecurityTrustStyle is banned in Google. However the value is safe, it's composed of
      // string literals, a variable that can only be 'X' or 'Y', and user input that is run through
      // the `Number` function first to coerce it to a numeric value.
      this._contentWrapper.nativeElement.style.transform = this._renderedContentTransform;
      (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.afterNextRender)(() => {
        this._isChangeDetectionPending = false;
        const runAfterChangeDetection = this._runAfterChangeDetection;
        this._runAfterChangeDetection = [];
        for (const fn of runAfterChangeDetection) {
          fn();
        }
      }, {
        injector: this._injector
      });
    });
  }
  /** Calculates the `style.width` and `style.height` for the spacer element. */
  _calculateSpacerSize() {
    this._totalContentHeight = this.orientation === 'horizontal' ? '' : `${this._totalContentSize}px`;
    this._totalContentWidth = this.orientation === 'horizontal' ? `${this._totalContentSize}px` : '';
  }
  static {
    this.ɵfac = function CdkVirtualScrollViewport_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkVirtualScrollViewport)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](VIRTUAL_SCROLL_STRATEGY, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ScrollDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ViewportRuler), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](VIRTUAL_SCROLLABLE, 8));
    };
  }
  static {
    this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CdkVirtualScrollViewport,
      selectors: [["cdk-virtual-scroll-viewport"]],
      viewQuery: function CdkVirtualScrollViewport_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._contentWrapper = _t.first);
        }
      },
      hostAttrs: [1, "cdk-virtual-scroll-viewport"],
      hostVars: 4,
      hostBindings: function CdkVirtualScrollViewport_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("cdk-virtual-scroll-orientation-horizontal", ctx.orientation === "horizontal")("cdk-virtual-scroll-orientation-vertical", ctx.orientation !== "horizontal");
        }
      },
      inputs: {
        orientation: "orientation",
        appendOnly: [2, "appendOnly", "appendOnly", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute]
      },
      outputs: {
        scrolledIndexChange: "scrolledIndexChange"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: CdkScrollable,
        useFactory: (virtualScrollable, viewport) => virtualScrollable || viewport,
        deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional(), new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject(VIRTUAL_SCROLLABLE)], CdkVirtualScrollViewport]
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      ngContentSelectors: _c1,
      decls: 4,
      vars: 4,
      consts: [["contentWrapper", ""], [1, "cdk-virtual-scroll-content-wrapper"], [1, "cdk-virtual-scroll-spacer"]],
      template: function CdkVirtualScrollViewport_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx._totalContentWidth)("height", ctx._totalContentHeight);
        }
      },
      styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;transform:translateZ(0)}.cdk-virtual-scrollable{overflow:auto;will-change:scroll-position;contain:strict;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{height:1px;transform-origin:0 0;flex:0 0 auto}[dir=rtl] .cdk-virtual-scroll-spacer{transform-origin:100% 0}"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkVirtualScrollViewport, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'cdk-virtual-scroll-viewport',
      host: {
        'class': 'cdk-virtual-scroll-viewport',
        '[class.cdk-virtual-scroll-orientation-horizontal]': 'orientation === "horizontal"',
        '[class.cdk-virtual-scroll-orientation-vertical]': 'orientation !== "horizontal"'
      },
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      standalone: true,
      providers: [{
        provide: CdkScrollable,
        useFactory: (virtualScrollable, viewport) => virtualScrollable || viewport,
        deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional(), new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject(VIRTUAL_SCROLLABLE)], CdkVirtualScrollViewport]
      }],
      template: "<!--\n  Wrap the rendered content in an element that will be used to offset it based on the scroll\n  position.\n-->\n<div #contentWrapper class=\"cdk-virtual-scroll-content-wrapper\">\n  <ng-content></ng-content>\n</div>\n<!--\n  Spacer used to force the scrolling container to the correct size for the *total* number of items\n  so that the scrollbar captures the size of the entire data set.\n-->\n<div class=\"cdk-virtual-scroll-spacer\"\n     [style.width]=\"_totalContentWidth\" [style.height]=\"_totalContentHeight\"></div>\n",
      styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;transform:translateZ(0)}.cdk-virtual-scrollable{overflow:auto;will-change:scroll-position;contain:strict;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{height:1px;transform-origin:0 0;flex:0 0 auto}[dir=rtl] .cdk-virtual-scroll-spacer{transform-origin:100% 0}"]
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [VIRTUAL_SCROLL_STRATEGY]
    }]
  }, {
    type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__.Directionality,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }]
  }, {
    type: ScrollDispatcher
  }, {
    type: ViewportRuler
  }, {
    type: CdkVirtualScrollable,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [VIRTUAL_SCROLLABLE]
    }]
  }], {
    orientation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    appendOnly: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    scrolledIndexChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    _contentWrapper: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['contentWrapper', {
        static: true
      }]
    }]
  });
})();

/** Helper to extract the offset of a DOM Node in a certain direction. */
function getOffset(orientation, direction, node) {
  const el = node;
  if (!el.getBoundingClientRect) {
    return 0;
  }
  const rect = el.getBoundingClientRect();
  if (orientation === 'horizontal') {
    return direction === 'start' ? rect.left : rect.right;
  }
  return direction === 'start' ? rect.top : rect.bottom;
}
/**
 * A directive similar to `ngForOf` to be used for rendering data inside a virtual scrolling
 * container.
 */
class CdkVirtualForOf {
  /** The DataSource to display. */
  get cdkVirtualForOf() {
    return this._cdkVirtualForOf;
  }
  set cdkVirtualForOf(value) {
    this._cdkVirtualForOf = value;
    if ((0,_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_17__.isDataSource)(value)) {
      this._dataSourceChanges.next(value);
    } else {
      // If value is an an NgIterable, convert it to an array.
      this._dataSourceChanges.next(new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_17__.ArrayDataSource((0,rxjs__WEBPACK_IMPORTED_MODULE_18__.isObservable)(value) ? value : Array.from(value || [])));
    }
  }
  /**
   * The `TrackByFunction` to use for tracking changes. The `TrackByFunction` takes the index and
   * the item and produces a value to be used as the item's identity when tracking changes.
   */
  get cdkVirtualForTrackBy() {
    return this._cdkVirtualForTrackBy;
  }
  set cdkVirtualForTrackBy(fn) {
    this._needsUpdate = true;
    this._cdkVirtualForTrackBy = fn ? (index, item) => fn(index + (this._renderedRange ? this._renderedRange.start : 0), item) : undefined;
  }
  /** The template used to stamp out new elements. */
  set cdkVirtualForTemplate(value) {
    if (value) {
      this._needsUpdate = true;
      this._template = value;
    }
  }
  /**
   * The size of the cache used to store templates that are not being used for re-use later.
   * Setting the cache size to `0` will disable caching. Defaults to 20 templates.
   */
  get cdkVirtualForTemplateCacheSize() {
    return this._viewRepeater.viewCacheSize;
  }
  set cdkVirtualForTemplateCacheSize(size) {
    this._viewRepeater.viewCacheSize = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceNumberProperty)(size);
  }
  constructor( /** The view container to add items to. */
  _viewContainerRef, /** The template to use when stamping out new items. */
  _template, /** The set of available differs. */
  _differs, /** The strategy used to render items in the virtual scroll viewport. */
  _viewRepeater, /** The virtual scrolling viewport that these items are being rendered in. */
  _viewport, ngZone) {
    this._viewContainerRef = _viewContainerRef;
    this._template = _template;
    this._differs = _differs;
    this._viewRepeater = _viewRepeater;
    this._viewport = _viewport;
    /** Emits when the rendered view of the data changes. */
    this.viewChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /** Subject that emits when a new DataSource instance is given. */
    this._dataSourceChanges = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /** Emits whenever the data in the current DataSource changes. */
    this.dataStream = this._dataSourceChanges.pipe(
    // Start off with null `DataSource`.
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.startWith)(null),
    // Bundle up the previous and current data sources so we can work with both.
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.pairwise)(),
    // Use `_changeDataSource` to disconnect from the previous data source and connect to the
    // new one, passing back a stream of data changes which we run through `switchMap` to give
    // us a data stream that emits the latest data from whatever the current `DataSource` is.
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.switchMap)(([prev, cur]) => this._changeDataSource(prev, cur)),
    // Replay the last emitted data when someone subscribes.
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.shareReplay)(1));
    /** The differ used to calculate changes to the data. */
    this._differ = null;
    /** Whether the rendered data should be updated during the next ngDoCheck cycle. */
    this._needsUpdate = false;
    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.dataStream.subscribe(data => {
      this._data = data;
      this._onRenderedDataChange();
    });
    this._viewport.renderedRangeStream.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this._destroyed)).subscribe(range => {
      this._renderedRange = range;
      if (this.viewChange.observers.length) {
        ngZone.run(() => this.viewChange.next(this._renderedRange));
      }
      this._onRenderedDataChange();
    });
    this._viewport.attach(this);
  }
  /**
   * Measures the combined size (width for horizontal orientation, height for vertical) of all items
   * in the specified range. Throws an error if the range includes items that are not currently
   * rendered.
   */
  measureRangeSize(range, orientation) {
    if (range.start >= range.end) {
      return 0;
    }
    if ((range.start < this._renderedRange.start || range.end > this._renderedRange.end) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw Error(`Error: attempted to measure an item that isn't rendered.`);
    }
    // The index into the list of rendered views for the first item in the range.
    const renderedStartIndex = range.start - this._renderedRange.start;
    // The length of the range we're measuring.
    const rangeLen = range.end - range.start;
    // Loop over all the views, find the first and land node and compute the size by subtracting
    // the top of the first node from the bottom of the last one.
    let firstNode;
    let lastNode;
    // Find the first node by starting from the beginning and going forwards.
    for (let i = 0; i < rangeLen; i++) {
      const view = this._viewContainerRef.get(i + renderedStartIndex);
      if (view && view.rootNodes.length) {
        firstNode = lastNode = view.rootNodes[0];
        break;
      }
    }
    // Find the last node by starting from the end and going backwards.
    for (let i = rangeLen - 1; i > -1; i--) {
      const view = this._viewContainerRef.get(i + renderedStartIndex);
      if (view && view.rootNodes.length) {
        lastNode = view.rootNodes[view.rootNodes.length - 1];
        break;
      }
    }
    return firstNode && lastNode ? getOffset(orientation, 'end', lastNode) - getOffset(orientation, 'start', firstNode) : 0;
  }
  ngDoCheck() {
    if (this._differ && this._needsUpdate) {
      // TODO(mmalerba): We should differentiate needs update due to scrolling and a new portion of
      // this list being rendered (can use simpler algorithm) vs needs update due to data actually
      // changing (need to do this diff).
      const changes = this._differ.diff(this._renderedItems);
      if (!changes) {
        this._updateContext();
      } else {
        this._applyChanges(changes);
      }
      this._needsUpdate = false;
    }
  }
  ngOnDestroy() {
    this._viewport.detach();
    this._dataSourceChanges.next(undefined);
    this._dataSourceChanges.complete();
    this.viewChange.complete();
    this._destroyed.next();
    this._destroyed.complete();
    this._viewRepeater.detach();
  }
  /** React to scroll state changes in the viewport. */
  _onRenderedDataChange() {
    if (!this._renderedRange) {
      return;
    }
    this._renderedItems = this._data.slice(this._renderedRange.start, this._renderedRange.end);
    if (!this._differ) {
      // Use a wrapper function for the `trackBy` so any new values are
      // picked up automatically without having to recreate the differ.
      this._differ = this._differs.find(this._renderedItems).create((index, item) => {
        return this.cdkVirtualForTrackBy ? this.cdkVirtualForTrackBy(index, item) : item;
      });
    }
    this._needsUpdate = true;
  }
  /** Swap out one `DataSource` for another. */
  _changeDataSource(oldDs, newDs) {
    if (oldDs) {
      oldDs.disconnect(this);
    }
    this._needsUpdate = true;
    return newDs ? newDs.connect(this) : (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)();
  }
  /** Update the `CdkVirtualForOfContext` for all views. */
  _updateContext() {
    const count = this._data.length;
    let i = this._viewContainerRef.length;
    while (i--) {
      const view = this._viewContainerRef.get(i);
      view.context.index = this._renderedRange.start + i;
      view.context.count = count;
      this._updateComputedContextProperties(view.context);
      view.detectChanges();
    }
  }
  /** Apply changes to the DOM. */
  _applyChanges(changes) {
    this._viewRepeater.applyChanges(changes, this._viewContainerRef, (record, _adjustedPreviousIndex, currentIndex) => this._getEmbeddedViewArgs(record, currentIndex), record => record.item);
    // Update $implicit for any items that had an identity change.
    changes.forEachIdentityChange(record => {
      const view = this._viewContainerRef.get(record.currentIndex);
      view.context.$implicit = record.item;
    });
    // Update the context variables on all items.
    const count = this._data.length;
    let i = this._viewContainerRef.length;
    while (i--) {
      const view = this._viewContainerRef.get(i);
      view.context.index = this._renderedRange.start + i;
      view.context.count = count;
      this._updateComputedContextProperties(view.context);
    }
  }
  /** Update the computed properties on the `CdkVirtualForOfContext`. */
  _updateComputedContextProperties(context) {
    context.first = context.index === 0;
    context.last = context.index === context.count - 1;
    context.even = context.index % 2 === 0;
    context.odd = !context.even;
  }
  _getEmbeddedViewArgs(record, index) {
    // Note that it's important that we insert the item directly at the proper index,
    // rather than inserting it and the moving it in place, because if there's a directive
    // on the same node that injects the `ViewContainerRef`, Angular will insert another
    // comment node which can throw off the move when it's being repeated for all items.
    return {
      templateRef: this._template,
      context: {
        $implicit: record.item,
        // It's guaranteed that the iterable is not "undefined" or "null" because we only
        // generate views for elements if the "cdkVirtualForOf" iterable has elements.
        cdkVirtualForOf: this._cdkVirtualForOf,
        index: -1,
        count: -1,
        first: false,
        last: false,
        odd: false,
        even: false
      },
      index
    };
  }
  static {
    this.ɵfac = function CdkVirtualForOf_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkVirtualForOf)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.IterableDiffers), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_17__._VIEW_REPEATER_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CdkVirtualScrollViewport, 4), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
  }
  static {
    this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: CdkVirtualForOf,
      selectors: [["", "cdkVirtualFor", "", "cdkVirtualForOf", ""]],
      inputs: {
        cdkVirtualForOf: "cdkVirtualForOf",
        cdkVirtualForTrackBy: "cdkVirtualForTrackBy",
        cdkVirtualForTemplate: "cdkVirtualForTemplate",
        cdkVirtualForTemplateCacheSize: "cdkVirtualForTemplateCacheSize"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_17__._VIEW_REPEATER_STRATEGY,
        useClass: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_17__._RecycleViewRepeaterStrategy
      }])]
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkVirtualForOf, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[cdkVirtualFor][cdkVirtualForOf]',
      providers: [{
        provide: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_17__._VIEW_REPEATER_STRATEGY,
        useClass: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_17__._RecycleViewRepeaterStrategy
      }],
      standalone: true
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.IterableDiffers
  }, {
    type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_17__._RecycleViewRepeaterStrategy,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_17__._VIEW_REPEATER_STRATEGY]
    }]
  }, {
    type: CdkVirtualScrollViewport,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
  }], {
    cdkVirtualForOf: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    cdkVirtualForTrackBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    cdkVirtualForTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    cdkVirtualForTemplateCacheSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

/**
 * Provides a virtual scrollable for the element it is attached to.
 */
class CdkVirtualScrollableElement extends CdkVirtualScrollable {
  constructor(elementRef, scrollDispatcher, ngZone, dir) {
    super(elementRef, scrollDispatcher, ngZone, dir);
  }
  measureBoundingClientRectWithScrollOffset(from) {
    return this.getElementRef().nativeElement.getBoundingClientRect()[from] - this.measureScrollOffset(from);
  }
  static {
    this.ɵfac = function CdkVirtualScrollableElement_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkVirtualScrollableElement)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ScrollDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__.Directionality, 8));
    };
  }
  static {
    this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: CdkVirtualScrollableElement,
      selectors: [["", "cdkVirtualScrollingElement", ""]],
      hostAttrs: [1, "cdk-virtual-scrollable"],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: VIRTUAL_SCROLLABLE,
        useExisting: CdkVirtualScrollableElement
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkVirtualScrollableElement, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[cdkVirtualScrollingElement]',
      providers: [{
        provide: VIRTUAL_SCROLLABLE,
        useExisting: CdkVirtualScrollableElement
      }],
      standalone: true,
      host: {
        'class': 'cdk-virtual-scrollable'
      }
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }, {
    type: ScrollDispatcher
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
  }, {
    type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__.Directionality,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }]
  }], null);
})();

/**
 * Provides as virtual scrollable for the global / window scrollbar.
 */
class CdkVirtualScrollableWindow extends CdkVirtualScrollable {
  constructor(scrollDispatcher, ngZone, dir) {
    super(new _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef(document.documentElement), scrollDispatcher, ngZone, dir);
    this._elementScrolled = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable(observer => this.ngZone.runOutsideAngular(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.fromEvent)(document, 'scroll').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this._destroyed)).subscribe(observer)));
  }
  measureBoundingClientRectWithScrollOffset(from) {
    return this.getElementRef().nativeElement.getBoundingClientRect()[from];
  }
  static {
    this.ɵfac = function CdkVirtualScrollableWindow_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkVirtualScrollableWindow)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ScrollDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__.Directionality, 8));
    };
  }
  static {
    this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: CdkVirtualScrollableWindow,
      selectors: [["cdk-virtual-scroll-viewport", "scrollWindow", ""]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: VIRTUAL_SCROLLABLE,
        useExisting: CdkVirtualScrollableWindow
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkVirtualScrollableWindow, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'cdk-virtual-scroll-viewport[scrollWindow]',
      providers: [{
        provide: VIRTUAL_SCROLLABLE,
        useExisting: CdkVirtualScrollableWindow
      }],
      standalone: true
    }]
  }], () => [{
    type: ScrollDispatcher
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
  }, {
    type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__.Directionality,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }]
  }], null);
})();
class CdkScrollableModule {
  static {
    this.ɵfac = function CdkScrollableModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkScrollableModule)();
    };
  }
  static {
    this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CdkScrollableModule,
      imports: [CdkScrollable],
      exports: [CdkScrollable]
    });
  }
  static {
    this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkScrollableModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      exports: [CdkScrollable],
      imports: [CdkScrollable]
    }]
  }], null, null);
})();
/**
 * @docs-primary-export
 */
class ScrollingModule {
  static {
    this.ɵfac = function ScrollingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ScrollingModule)();
    };
  }
  static {
    this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ScrollingModule,
      imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__.BidiModule, CdkScrollableModule, CdkVirtualScrollViewport, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollableWindow, CdkVirtualScrollableElement],
      exports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__.BidiModule, CdkScrollableModule, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport, CdkVirtualScrollableWindow, CdkVirtualScrollableElement]
    });
  }
  static {
    this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__.BidiModule, CdkScrollableModule, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__.BidiModule, CdkScrollableModule]
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollingModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__.BidiModule, CdkScrollableModule, CdkVirtualScrollViewport, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollableWindow, CdkVirtualScrollableElement],
      exports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__.BidiModule, CdkScrollableModule, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport, CdkVirtualScrollableWindow, CdkVirtualScrollableElement]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=scrolling.mjs.map

/***/ }),

/***/ 17786:
/*!*************************************************************!*\
  !*** ./src/assets/charting_library/charting_library.esm.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   version: () => (/* binding */ o),
/* harmony export */   widget: () => (/* binding */ s)
/* harmony export */ });
function e(t, i) {
  const n = {
    ...t
  };
  for (const o in i) "object" != typeof t[o] || null === t[o] || Array.isArray(t[o]) ? void 0 !== i[o] && (n[o] = i[o]) : n[o] = e(t[o], i[o]);
  return n;
}
const t = {
    mobile: {
      disabled_features: ["left_toolbar", "header_widget", "timeframes_toolbar", "edit_buttons_in_legend", "context_menus", "control_bar", "border_around_the_chart"],
      enabled_features: []
    }
  },
  i = {
    width: 800,
    height: 500,
    interval: "1D",
    timezone: "Etc/UTC",
    container: "",
    library_path: "",
    locale: "en",
    widgetbar: {
      details: !1,
      watchlist: !1,
      watchlist_settings: {
        default_symbols: []
      }
    },
    overrides: {
      "mainSeriesProperties.showCountdown": !1
    },
    studies_overrides: {},
    trading_customization: {
      position: {},
      order: {}
    },
    brokerConfig: {
      configFlags: {}
    },
    fullscreen: !1,
    autosize: !1,
    disabled_features: [],
    enabled_features: [],
    debug: !1,
    logo: {},
    time_frames: [{
      text: "5y",
      resolution: "1W"
    }, {
      text: "1y",
      resolution: "1W"
    }, {
      text: "6m",
      resolution: "120"
    }, {
      text: "3m",
      resolution: "60"
    }, {
      text: "1m",
      resolution: "30"
    }, {
      text: "5d",
      resolution: "5"
    }, {
      text: "1d",
      resolution: "1"
    }],
    client_id: "0",
    user_id: "0",
    charts_storage_api_version: "1.0",
    favorites: {
      intervals: [],
      chartTypes: []
    }
  };
let n = !1;
function o() {
  return "CL v22.032 (internal id e2a841ff @ 2022-07-06T11:53:07.702Z)";
}
const s = class {
  constructor(o) {
    if (this._id = `tradingview_${(1048576 * (1 + Math.random()) | 0).toString(16).substring(1)}`, this._ready = !1, this._readyHandlers = [], this._onWindowResize = this._autoResizeChart.bind(this), !o.datafeed) throw new Error("Datafeed is not defined");
    if (this._options = e(i, o), o.preset) {
      const e = t[o.preset];
      e ? (void 0 !== this._options.disabled_features ? this._options.disabled_features = this._options.disabled_features.concat(e.disabled_features) : this._options.disabled_features = e.disabled_features, void 0 !== this._options.enabled_features ? this._options.enabled_features = this._options.enabled_features.concat(e.enabled_features) : this._options.enabled_features = e.enabled_features) : console.warn("Unknown preset: `" + o.preset + "`");
    }
    "Dark" === this._options.theme && void 0 === this._options.loading_screen && (this._options.loading_screen = {
      backgroundColor: "#131722"
    }), this._options.debug && (n || (n = !0, console.log("Using CL v22.032 (internal id e2a841ff @ 2022-07-06T11:53:07.702Z)"))), this._create();
  }
  onChartReady(e) {
    this._ready ? e.call(this) : this._readyHandlers.push(e);
  }
  headerReady() {
    return this._innerWindowLoaded.then(() => this._innerWindow().headerReady());
  }
  onGrayedObjectClicked(e) {
    this._doWhenInnerApiLoaded(t => {
      t.onGrayedObjectClicked(e);
    });
  }
  onShortcut(e, t) {
    this._doWhenInnerWindowLoaded(i => {
      i.createShortcutAction(e, t);
    });
  }
  subscribe(e, t) {
    this._doWhenInnerApiLoaded(i => {
      i.subscribe(e, t);
    });
  }
  unsubscribe(e, t) {
    this._doWhenInnerApiLoaded(i => {
      i.unsubscribe(e, t);
    });
  }
  chart(e) {
    return this._innerAPI().chart(e);
  }
  getLanguage() {
    return this._options.locale;
  }
  setSymbol(e, t, i) {
    this._innerAPI().changeSymbol(e, t, i);
  }
  remove() {
    window.removeEventListener("resize", this._onWindowResize), this._readyHandlers.splice(0, this._readyHandlers.length), delete window[this._id], this._iFrame.parentNode && this._iFrame.parentNode.removeChild(this._iFrame);
  }
  closePopupsAndDialogs() {
    this._doWhenInnerApiLoaded(e => {
      e.closePopupsAndDialogs();
    });
  }
  selectLineTool(e) {
    this._innerAPI().selectLineTool(e);
  }
  selectedLineTool() {
    return this._innerAPI().selectedLineTool();
  }
  save(e) {
    this._innerAPI().saveChart(e);
  }
  load(e, t) {
    this._innerAPI().loadChart({
      json: e,
      extendedData: t
    });
  }
  getSavedCharts(e) {
    this._innerAPI().getSavedCharts(e);
  }
  loadChartFromServer(e) {
    this._innerAPI().loadChartFromServer(e);
  }
  saveChartToServer(e, t, i) {
    this._innerAPI().saveChartToServer(e, t, i);
  }
  removeChartFromServer(e, t) {
    this._innerAPI().removeChartFromServer(e, t);
  }
  onContextMenu(e) {
    this._doWhenInnerApiLoaded(t => {
      t.onContextMenu(e);
    });
  }
  createButton(e) {
    return this._innerWindow().createButton(e);
  }
  createDropdown(e) {
    return this._innerWindow().createDropdown(e);
  }
  showNoticeDialog(e) {
    this._doWhenInnerApiLoaded(t => {
      t.showNoticeDialog(e);
    });
  }
  showConfirmDialog(e) {
    this._doWhenInnerApiLoaded(t => {
      t.showConfirmDialog(e);
    });
  }
  showLoadChartDialog() {
    this._innerAPI().showLoadChartDialog();
  }
  showSaveAsChartDialog() {
    this._innerAPI().showSaveAsChartDialog();
  }
  symbolInterval() {
    return this._innerAPI().getSymbolInterval();
  }
  mainSeriesPriceFormatter() {
    return this._innerAPI().mainSeriesPriceFormatter();
  }
  getIntervals() {
    return this._innerAPI().getIntervals();
  }
  getStudiesList() {
    return this._innerAPI().getStudiesList();
  }
  getStudyInputs(e) {
    return this._innerAPI().getStudyInputs(e);
  }
  addCustomCSSFile(e) {
    this._innerWindow().addCustomCSSFile(e);
  }
  applyOverrides(t) {
    this._options = e(this._options, {
      overrides: t
    }), this._doWhenInnerWindowLoaded(e => {
      e.applyOverrides(t);
    });
  }
  applyStudiesOverrides(e) {
    this._doWhenInnerWindowLoaded(t => {
      t.applyStudiesOverrides(e);
    });
  }
  watchList() {
    return this._innerAPI().watchlist();
  }
  news() {
    return this._innerAPI().news();
  }
  widgetbar() {
    return this._innerAPI().widgetbar();
  }
  activeChart() {
    return this._innerAPI().activeChart();
  }
  chartsCount() {
    return this._innerAPI().chartsCount();
  }
  layout() {
    return this._innerAPI().layout();
  }
  setLayout(e) {
    this._innerAPI().setLayout(e);
  }
  layoutName() {
    return this._innerAPI().layoutName();
  }
  changeTheme(e, t) {
    return this._innerWindow().changeTheme(e, t);
  }
  getTheme() {
    return this._innerWindow().getTheme();
  }
  takeScreenshot() {
    this._doWhenInnerApiLoaded(e => {
      e.takeScreenshot();
    });
  }
  lockAllDrawingTools() {
    return this._innerAPI().lockAllDrawingTools();
  }
  hideAllDrawingTools() {
    return this._innerAPI().hideAllDrawingTools();
  }
  drawOnAllCharts(e) {
    this._innerAPI().drawOnAllCharts(e);
  }
  magnetEnabled() {
    return this._innerAPI().magnetEnabled();
  }
  magnetMode() {
    return this._innerAPI().magnetMode();
  }
  undoRedoState() {
    return this._innerAPI().undoRedoState();
  }
  setIntervalLinkingEnabled(e) {
    this._innerAPI().setIntervalLinkingEnabled(e);
  }
  setTimeFrame(e) {
    this._innerAPI().setTimeFrame(e);
  }
  symbolSync() {
    return this._innerAPI().symbolSync();
  }
  intervalSync() {
    return this._innerAPI().intervalSync();
  }
  crosshairSync() {
    return this._innerAPI().crosshairSync();
  }
  timeSync() {
    return this._innerAPI().timeSync();
  }
  getAllFeatures() {
    return this._innerWindow().getAllFeatures();
  }
  clearUndoHistory() {
    return this._innerAPI().clearUndoHistory();
  }
  undo() {
    return this._innerAPI().undo();
  }
  redo() {
    return this._innerAPI().redo();
  }
  startFullscreen() {
    this._innerAPI().startFullscreen();
  }
  exitFullscreen() {
    this._innerAPI().exitFullscreen();
  }
  takeClientScreenshot(e) {
    return this._innerAPI().takeClientScreenshot(e);
  }
  navigationButtonsVisibility() {
    return this._innerWindow().getNavigationButtonsVisibility();
  }
  paneButtonsVisibility() {
    return this._innerWindow().getPaneButtonsVisibility();
  }
  dateFormat() {
    return this._innerWindow().getDateFormat();
  }
  _innerAPI() {
    return this._innerWindow().tradingViewApi;
  }
  _innerWindow() {
    return this._iFrame.contentWindow;
  }
  _doWhenInnerWindowLoaded(e) {
    this._ready ? e(this._innerWindow()) : this._innerWindowLoaded.then(() => {
      e(this._innerWindow());
    });
  }
  _doWhenInnerApiLoaded(e) {
    this._doWhenInnerWindowLoaded(t => {
      t.doWhenApiIsReady(() => e(this._innerAPI()));
    });
  }
  _autoResizeChart() {
    this._options.fullscreen && (this._iFrame.style.height = window.innerHeight + "px");
  }
  _create() {
    const e = this._render();
    this._options.container_id && console.warn("`container_id` is now deprecated. Please use `container` instead to either still pass a string or an `HTMLElement`.");
    const t = this._options.container_id || this._options.container,
      i = "string" == typeof t ? document.getElementById(t) : t;
    if (null === i) throw new Error(`There is no such element - #${this._options.container}`);
    i.innerHTML = e, this._iFrame = i.querySelector(`#${this._id}`);
    const n = this._iFrame;
    (this._options.autosize || this._options.fullscreen) && (n.style.width = "100%", this._options.fullscreen || (n.style.height = "100%")), window.addEventListener("resize", this._onWindowResize), this._onWindowResize(), this._innerWindowLoaded = new Promise(e => {
      const t = () => {
        n.removeEventListener("load", t, !1), e();
      };
      n.addEventListener("load", t, !1);
    }), this._innerWindowLoaded.then(() => {
      this._innerWindow().widgetReady(() => {
        this._ready = !0;
        for (const e of this._readyHandlers) try {
          e.call(this);
        } catch (e) {
          console.error(e);
        }
        this._innerWindow().initializationFinished();
      });
    });
  }
  _render() {
    const e = window;
    if (e[this._id] = {
      datafeed: this._options.datafeed,
      customFormatters: this._options.custom_formatters || this._options.customFormatters,
      brokerFactory: this._options.broker_factory || this._options.brokerFactory,
      overrides: this._options.overrides,
      studiesOverrides: this._options.studies_overrides,
      tradingCustomization: this._options.trading_customization,
      disabledFeatures: this._options.disabled_features,
      enabledFeatures: this._options.enabled_features,
      brokerConfig: this._options.broker_config || this._options.brokerConfig,
      restConfig: this._options.restConfig,
      favorites: this._options.favorites,
      logo: this._options.logo,
      numeric_formatting: this._options.numeric_formatting,
      rss_news_feed: this._options.rss_news_feed,
      newsProvider: this._options.news_provider,
      loadLastChart: this._options.load_last_chart,
      saveLoadAdapter: this._options.save_load_adapter,
      loading_screen: this._options.loading_screen,
      settingsAdapter: this._options.settings_adapter,
      getCustomIndicators: this._options.custom_indicators_getter,
      additionalSymbolInfoFields: this._options.additional_symbol_info_fields,
      headerWidgetButtonsMode: this._options.header_widget_buttons_mode,
      customTranslateFunction: this._options.custom_translate_function,
      symbolSearchComplete: this._options.symbol_search_complete,
      contextMenu: this._options.context_menu,
      settingsOverrides: this._options.settings_overrides
    }, this._options.saved_data) e[this._id].chartContent = {
      json: this._options.saved_data
    }, this._options.saved_data_meta_info && (e[this._id].chartContentExtendedData = this._options.saved_data_meta_info);else if (!this._options.load_last_chart && !this._options.symbol) throw new Error("Symbol is not defined: either 'symbol' or 'load_last_chart' option must be set");
    const t = (this._options.library_path || "") + `${encodeURIComponent(this._options.locale)}-tv-chart.e2a841ff.html#symbol=` + encodeURIComponent(this._options.symbol || "") + "&interval=" + encodeURIComponent(this._options.interval) + (this._options.timeframe ? "&timeframe=" + encodeURIComponent(this._options.timeframe) : "") + (this._options.toolbar_bg ? "&toolbarbg=" + encodeURIComponent(this._options.toolbar_bg.replace("#", "")) : "") + (this._options.studies_access ? "&studiesAccess=" + encodeURIComponent(JSON.stringify(this._options.studies_access)) : "") + "&widgetbar=" + encodeURIComponent(JSON.stringify(this._options.widgetbar)) + (this._options.drawings_access ? "&drawingsAccess=" + encodeURIComponent(JSON.stringify(this._options.drawings_access)) : "") + "&timeFrames=" + encodeURIComponent(JSON.stringify(this._options.time_frames)) + "&locale=" + encodeURIComponent(this._options.locale) + "&uid=" + encodeURIComponent(this._id) + "&clientId=" + encodeURIComponent(String(this._options.client_id)) + "&userId=" + encodeURIComponent(String(this._options.user_id)) + (this._options.charts_storage_url ? "&chartsStorageUrl=" + encodeURIComponent(this._options.charts_storage_url) : "") + (this._options.charts_storage_api_version ? "&chartsStorageVer=" + encodeURIComponent(this._options.charts_storage_api_version) : "") + (this._options.custom_css_url ? "&customCSS=" + encodeURIComponent(this._options.custom_css_url) : "") + (this._options.custom_font_family ? "&customFontFamily=" + encodeURIComponent(this._options.custom_font_family) : "") + (this._options.auto_save_delay ? "&autoSaveDelay=" + encodeURIComponent(String(this._options.auto_save_delay)) : "") + "&debug=" + encodeURIComponent(String(this._options.debug)) + (this._options.snapshot_url ? "&snapshotUrl=" + encodeURIComponent(this._options.snapshot_url) : "") + (this._options.timezone ? "&timezone=" + encodeURIComponent(this._options.timezone) : "") + (this._options.study_count_limit ? "&studyCountLimit=" + encodeURIComponent(String(this._options.study_count_limit)) : "") + (this._options.symbol_search_request_delay ? "&ssreqdelay=" + encodeURIComponent(String(this._options.symbol_search_request_delay)) : "") + (this._options.compare_symbols ? "&compareSymbols=" + encodeURIComponent(JSON.stringify(this._options.compare_symbols)) : "") + (this._options.theme ? "&theme=" + encodeURIComponent(String(this._options.theme)) : "") + (this._options.header_widget_buttons_mode ? "&header_widget_buttons_mode=" + encodeURIComponent(String(this._options.header_widget_buttons_mode)) : "") + (this._options.time_scale ? "&time_scale=" + encodeURIComponent(JSON.stringify(this._options.time_scale)) : "");
    return '<iframe id="' + this._id + '" name="' + this._id + '"  src="' + t + '"' + (this._options.autosize || this._options.fullscreen ? "" : ' width="' + this._options.width + '" height="' + this._options.height + '"') + ' title="Financial Chart" frameborder="0" allowTransparency="true" scrolling="no" allowfullscreen style="display:block;"></iframe>';
  }
};
window.TradingView = window.TradingView || {}, window.TradingView.version = o;


/***/ })

}]);