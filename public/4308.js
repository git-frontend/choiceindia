(self["webpackChunkjiffy_upgraded"] = self["webpackChunkjiffy_upgraded"] || []).push([[4308],{

/***/ 78655:
/*!*******************************************************************!*\
  !*** ./src/app/tools-module/tv-expanded/tv-expanded.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TvExpandedComponent: () => (/* binding */ TvExpandedComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _tv_expanded_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tv-expanded.component.html?ngResource */ 52681);
/* harmony import */ var _tv_expanded_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tv-expanded.component.scss?ngResource */ 71937);
/* harmony import */ var _tv_expanded_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tv_expanded_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var src_app_services_rest_tool_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/rest/tool.service */ 91387);
/* harmony import */ var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/analytics/analytics.service */ 50213);
/* harmony import */ var src_app_services_rest_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/rest/common.service */ 18056);
/* harmony import */ var src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/utils/utils.service */ 89893);
/* harmony import */ var src_app_services_sockets_socket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/sockets/socket.service */ 6312);
/* harmony import */ var src_app_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/shared-data/shared-data.service */ 46013);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _pipes_custom_order_by_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pipes/custom-order-by.pipe */ 63536);
/* harmony import */ var _pipes_value_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../pipes/value.pipe */ 50615);
/* harmony import */ var _pipes_segment_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../pipes/segment.pipe */ 39995);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _tv_chart_exp_tv_chart_exp_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../tv-chart-exp/tv-chart-exp.component */ 59607);

















let TvExpandedComponent = class TvExpandedComponent {
  constructor(location, toolsService, googleAnalyticsEventsService, rest, cdRef, utils, zone, socket, renderer, shared, route, activatedRoute) {
    this.location = location;
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
    this.layoutConfig = {
      showWatchlist: false
    };
    this.config = {};
    this.hideChart = false;
    this.subscribeChanges();
  }
  ngOnInit() {
    // if(location.hostname.indexOf('/tools/trading-view-charts') > -1){
    let ele = document.getElementById('main-container');
    if (ele) {
      // ele.className='';
      // ele.className=(this.theme=='Dark'?"dark-bgg":"");
      //ele.className = ele.className.replace("maincontainer", (this.theme == 'Dark' ? "dark-bgg" : "light-bgg"));
      // ele.className = ele.className.replace("maincontainer", (this.theme=='Dark'?"dark-bgg":""));
      //ele.className.replace(/\bdark-bgg\b/,'')
      let user_id = this.utils.getUserId();
      ele.classList.add(!user_id || user_id == 'guest' ? "dark-bgg-pre" : "dark-bgg");
      if (location.pathname.indexOf('trading-view-charts') > -1 && location.pathname.indexOf('trading-view-charts-watch') == -1) {
        ele.classList.add("mt0");
      }
    }
    // window.onresize = this.reportWindowSize
    // }
  }
  reportWindowSize() {
    // setTimeout(() => {
    //  let doc = this._tvWidget['_iFrame'].contentDocument || this._tvWidget['_iFrame'].contentWindow.document
    let ele1 = document.getElementById('tv_chart_container');
    if (ele1) {
      let ele = ele1.getElementsByTagName('iframe')[0];
      //  console.log("reportWindowSize called",ele)
      if (ele) {
        ele.style.height = window.innerHeight - 85 + "px";
        // ele.setAttribute('width', window.innerWidth + "px")
        // ele.setAttribute('height', (window.innerHeight-200) + "px")
      }
    }
    // if (this.chartConfig)
    //  { this.chartConfig.width = window.innerWidth;
    //   this.chartConfig.height = window.innerHeight-200;
    // }
    // }, 50);
  }
  ngOnDestroy() {
    let ele = document.getElementById('main-container');
    if (ele) {
      // ele.className='';
      // ele.className=(this.theme=='Dark'?"dark-bgg":"");
      // ele.className = "maincontainer";
      // ele.className = ele.className.replace((this.theme == 'Dark' ? "dark-bgg" : "light-bgg"), "maincontainer");
      ele.classList.remove("dark-bgg");
      ele.classList.remove("dark-bgg-pre");
      ele.classList.remove("mt0");
    }
    if (this.config.userId && this.config.sessionId) {
      this.utils.clearLoginDetails();
    }
  }
  subscribeChanges() {
    this.routeParamsSubscription = this.activatedRoute.params.subscribe(params => {
      this.hideChart = true;
      setTimeout(() => {
        this.hideChart = false;
        this.config.SegmentId = params['segmentId'];
        this.config.Token = params['token'];
        this.config.symbol = params['symbol'] || "", this.config.userId = params['userId'] || "", this.config.sessionId = params['sessionId'] || "";
      }, 500);
      /*   if( this.config.userId&& this.config.sessionId){
          this.utils.storeUserId(this.config.userId)
          this.utils.storeSessionId(this.config.sessionId)
        } */
    });
  }
  static {
    this.ctorParameters = () => [{
      type: _angular_common__WEBPACK_IMPORTED_MODULE_12__.Location
    }, {
      type: src_app_services_rest_tool_service__WEBPACK_IMPORTED_MODULE_2__.ToolService
    }, {
      type: src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_3__.AnalyticsService
    }, {
      type: src_app_services_rest_common_service__WEBPACK_IMPORTED_MODULE_4__.CommonService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ChangeDetectorRef
    }, {
      type: src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_5__.UtilsService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.NgZone
    }, {
      type: src_app_services_sockets_socket_service__WEBPACK_IMPORTED_MODULE_6__.SocketService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Renderer2
    }, {
      type: src_app_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_7__.SharedDataService
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.Router
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute
    }];
  }
};
TvExpandedComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
  selector: 'app-tv-expanded',
  template: _tv_expanded_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  imports: [_tv_chart_exp_tv_chart_exp_component__WEBPACK_IMPORTED_MODULE_11__.TvChartExpComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe, _pipes_segment_pipe__WEBPACK_IMPORTED_MODULE_10__.SegmentPipe, _pipes_value_pipe__WEBPACK_IMPORTED_MODULE_9__.ValuePipe, _pipes_custom_order_by_pipe__WEBPACK_IMPORTED_MODULE_8__.CustomOrderByPipe],
  styles: [(_tv_expanded_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__metadata)("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_12__.Location, src_app_services_rest_tool_service__WEBPACK_IMPORTED_MODULE_2__.ToolService, src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_3__.AnalyticsService, src_app_services_rest_common_service__WEBPACK_IMPORTED_MODULE_4__.CommonService, _angular_core__WEBPACK_IMPORTED_MODULE_13__.ChangeDetectorRef, src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_5__.UtilsService, _angular_core__WEBPACK_IMPORTED_MODULE_13__.NgZone, src_app_services_sockets_socket_service__WEBPACK_IMPORTED_MODULE_6__.SocketService, _angular_core__WEBPACK_IMPORTED_MODULE_13__.Renderer2, src_app_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_7__.SharedDataService, _angular_router__WEBPACK_IMPORTED_MODULE_14__.Router, _angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute])], TvExpandedComponent);


/***/ }),

/***/ 16387:
/*!***********************************************************************!*\
  !*** ./src/app/tools-module/tv-multichart/tv-multichart.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TvMultichartComponent: () => (/* binding */ TvMultichartComponent)
/* harmony export */ });
/* harmony import */ var D_a_widget_jiffy_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _tv_multichart_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tv-multichart.component.html?ngResource */ 39693);
/* harmony import */ var _tv_multichart_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tv-multichart.component.scss?ngResource */ 74981);
/* harmony import */ var _tv_multichart_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tv_multichart_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 345);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 27468);
/* harmony import */ var src_app_services_rest_tool_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/rest/tool.service */ 91387);
/* harmony import */ var src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/utils/utils.service */ 89893);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/analytics/analytics.service */ 50213);
/* harmony import */ var src_app_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/shared-data/shared-data.service */ 46013);
/* harmony import */ var _post_login_module_orderbook_orderbook_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../post-login-module/orderbook/orderbook.component */ 14970);
/* harmony import */ var _post_login_module_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../post-login-module/portfolio/portfolio.component */ 64530);
/* harmony import */ var _tv_chart_exp_tv_chart_exp_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../tv-chart-exp/tv-chart-exp.component */ 59607);
















// import { getBodyNode } from '@angular/animations/browser/src/render/shared';
let TvMultichartComponent = class TvMultichartComponent {
  constructor(location2, componentFactoryResolver, toolsService, analytics, shared, sanitizer, elRef, utils, zone, cdr, renderer, route, rest, activatedRoute) {
    this.location2 = location2;
    this.componentFactoryResolver = componentFactoryResolver;
    this.toolsService = toolsService;
    this.analytics = analytics;
    this.shared = shared;
    this.sanitizer = sanitizer;
    this.elRef = elRef;
    this.utils = utils;
    this.zone = zone;
    this.cdr = cdr;
    this.renderer = renderer;
    this.route = route;
    this.rest = rest;
    this.activatedRoute = activatedRoute;
    this.managerheight = 0;
    this.innerDrawerHeight = localStorage.getItem('innerDrawerHeight') ? localStorage.getItem('innerDrawerHeight') : "150px";
    this.subscriptionList = [];
    this.hideChart = true;
    this.config = {
      symbols: {},
      lastTicks: {},
      symbols2: {}
    };
    this.selectedDrawer = '';
    this.isInChart = true;
    this.maximizedChart = {};
    this.isWatchChart = location.pathname.indexOf('tv-charts-watch') > -1 || location.pathname.indexOf('trading-view-charts-watch') > -1;
    this.globalListenFuncUPArr = [];
  }
  manageSection(val) {
    this.selectedDrawer = val;
    localStorage.setItem('selectedDrawer', this.selectedDrawer);
    setTimeout(() => {
      // this.loadForm()
    }, 2000);
  }
  loadForm() {
    var _this = this;
    return (0,D_a_widget_jiffy_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        PortfolioComponent
      } = yield Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./../../post-login-module/portfolio/portfolio.component */ 64530));
      const {
        OrderbookComponent
      } = yield Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./../../post-login-module/orderbook/orderbook.component */ 14970));
      console.log("this.portfolioComponent", _this.portfolioComponent);
      const componentFactory = _this.componentFactoryResolver.resolveComponentFactory(PortfolioComponent);
      if (_this.portfolioComponent && _this.portfolioComponent['_parentView']) {
        _this.portfolioComponent.clear();
        console.log(PortfolioComponent, "PortfolioComponent", _this.orderbookComponent1);
        let view = _this.portfolioComponent.createComponent(componentFactory);
        view.instance.isInChart = _this.isInChart;
      }
      if (_this.orderbookComponent1 && _this.orderbookComponent1['_parentView']) {
        const componentFactory2 = _this.componentFactoryResolver.resolveComponentFactory(OrderbookComponent);
        _this.orderbookComponent1.clear();
        let view2 = _this.orderbookComponent1.createComponent(componentFactory2);
        view2.instance.isInChart = _this.isInChart;
      }
    })();
  }
  ngOnInit() {
    console.log("this.widththis.width start");
    this.subscriptionList.push(this.utils.broadcastObservable('openBuySellDrawer').subscribe(data => {
      setTimeout(() => {
        let element = document.querySelector('app-order-buysell>nav');
        let watchlistbox = document.getElementById('watchlistbox');
        console.log("this.widththis.width element", element);
        // console.lo
        if (element) {
          //   this.chartConfig.width = window.innerWidth;
          this.width = window.innerWidth - element.getClientRects()[0].width - (watchlistbox && watchlistbox.getClientRects() && watchlistbox.getClientRects()[0] ? watchlistbox.getClientRects()[0].width + 40 : 0);
          console.log("this.widththis.width", this.width);
          this.isBuySellOpen = true;
        } else {}
        ;
      }, 100);
    }));
    this.subscriptionList.push(this.utils.broadcastObservable('openChartDrawer').subscribe(data => {
      console.log("order placed ", data);
      if (data && data.page) {
        this.manageDrawer = 'true';
        this.selectedDrawer = data.page;
      }
    }));
    this.subscriptionList.push(this.utils.broadcastObservable('orderBuySellClosed').subscribe(res => {
      if (res) {
        this.isBuySellOpen = false;
      }
      // this.width = 100;
    }));
    this.manageDrawer = localStorage.getItem('manageDrawer') ? localStorage.getItem('manageDrawer') : 'false';
    if (this.manageDrawer == 'true') {
      this.selectedDrawer = localStorage.getItem('selectedDrawer') ? localStorage.getItem('selectedDrawer') : 'positions';
      setTimeout(() => {
        //this.loadForm()
      }, 2000);
    }
    this.routeParamsSubscription = this.activatedRoute.params.subscribe(params => {
      console.log("params3", params);
      if (params.segmentId && params.token) {
        let symbols = [params.segmentId + '@' + params.token];
        let url = (location.pathname.indexOf('trading-view-charts-watch') > -1 ? '/tv/tv-charts-watch?symbols=' : '/tv/tv-charts?symbols=') + params.segmentId + '@' + params.token;
        console.log(url, "params2", params);
        this.urlSymbols = params.segmentId + '@' + params.token;
        this.location2.replaceState(url);
        this.symbols = symbols;
        this.numberOfCharts = symbols.length > 4 ? 4 : symbols.length || 1;
        this.getSymbolDetails(symbols);
      }
    });
    this.routeParamsSubscription = this.activatedRoute.queryParams.subscribe(params => {
      if (params.symbols) {
        this.urlSymbols = params.symbols;
        let symbols = params.symbols.split('|');
        this.symbols = symbols;
        this.numberOfCharts = symbols.length > 4 ? 4 : symbols.length || 1;
        this.getSymbolDetails(symbols);
      }
    });
    //window.onresize = this.reportWindowSize
    // if(this.symbols&&this.symbols.length){
    //   window.onresize = ()=>{
    //     this.symbols.forEach((ele,i)=>{
    //       this.reportWindowSize("chart"+i)
    //     })
    //   }
    // }
    let ele = document.getElementById('main-container');
    if (ele && location.pathname.indexOf('tv-charts') > -1) {
      ele.classList.add("chart-mul");
    }
    //   let userid=this.utils.getUserId()
    //   if(userid && userid!='guest')
    //   document.body.classList.remove("single-content")
    // }
    if (location.pathname.indexOf('tv-charts-watch') > -1) {
      let user_id = this.utils.getUserId();
      //ele.classList.add(!user_id||user_id=='guest'?"chart-container-sec-pre":"chart-container-sec-watch");
      ele.classList.add(!user_id || user_id == 'guest' ? "chart-container-sec-pre" : "");
    }
  }
  onSearchClicked(event) {
    console.log(event);
  }
  ngAfterViewInit() {
    // this.updateChartheight()
    // setTimeout(() => {
    this.zone.run(() => {
      if (location.pathname.indexOf('trading-view-charts-watch') > -1 || location.pathname.indexOf('tv-charts-watch') > -1 || location.pathname.indexOf('advanced-multi-charts-watch') > -1 || location.pathname.indexOf('advanced-charts-watch') > -1) console.log('overflow', 'hidden', "called");
      this.renderer.setStyle(document.body, 'overflow', 'hidden');
    });
    //}, 1000);
    /*     if( !this.utils.isMobileDeviceCheck()){
          this.showMultichartWalk=localStorage.getItem('showMultichartWalk')?false:true
          console.log("showMultichartWalk",this.showMultichartWalk)
          localStorage.setItem('showMultichartWalk','1')
         } */
    // this.loadForm()
  }
  /*   showMultichartWalkthrough(){
      console.log("showMultichartWalkthrough event",event)
      if( !this.utils.isMobileDeviceCheck()){
        this.showWalkImg=true
  
       let chart_walkthrough=   document.getElementById('chart_walkthrough');
       if(chart_walkthrough)
       document.body.appendChild(chart_walkthrough)
       //chart_walkthrough.remove()
       }
    } */
  // updateChartheight(){
  //   if(document.getElementById('manager-chart'))
  //   this.managerheight= document.getElementById('manager-chart').offsetHeight * 1.01
  //   console.log("managerheight",this.managerheight)
  //     setTimeout(() => {
  //       if(this.symbols&&this.symbols.length){
  //       this.symbols.forEach((ele,i)=>{
  //         this.reportWindowSize("chart"+i)
  //       })
  //     }
  //     //this.eventBasedScroll()
  //      }, 10);
  // }
  // eventBasedScroll(){
  //   console.log("containercontainer.style.height eventBasedScroll")
  //    //this.isResizing = false;
  // //  (function() {
  //   let container = document.getElementById("inner-drawer-sec");
  //    let   handle = document.getElementById("manager-drawer-dragger");
  //       console.log(container,"containercontainer.style.height", handle)
  //     handle.onmousedown = (e) =>{
  //       this.isResizing = true;
  //     };
  //     document.onmousemove = (e) =>{
  //       // we don't want to do anything if we aren't resizing.
  //       if (!this.isResizing) {
  //         return;
  //       }
  //       console.log( container.clientHeight, container.scrollHeight,"container.style.height",e.clientY, container.offsetTop, container.offsetHeight)
  //       console.log("1111 1",container.clientHeight - (e.clientY - container.offsetTop) + "px")
  //       console.log("1111 2",container.offsetHeight - (e.clientY - container.offsetTop) + "px")
  //       console.log("1111 3",container.scrollHeight - (e.clientY - container.offsetTop) + "px")
  //       this.innerDrawerHeight=container.scrollHeight - (e.clientY - container.offsetTop) + "px"
  //      // container.style.height = container.scrollHeight - (e.clientY - container.offsetTop) + "px";
  //       // if(this.isResizing){
  //       //   setTimeout(() => {
  //       //     if(document.getElementById('manager-chart'))
  //       //     this.managerheight= document.getElementById('manager-chart').offsetHeight * 1.01
  //       //   }, 1);
  //       // }
  //      // container.style.height=container.style.height+10
  //       // var offsetRight = container.clientWidth - (e.clientY - container.offset);
  //       // left.style.right = offsetRight + "px";
  //       // right.style.width = offsetRight + "px";
  //     }
  //     document.onmouseup = (e)=> {
  //       // stop resizing
  //       this.isResizing = false;
  //     }
  //   //})();
  // }
  onChartReady(val) {
    // this.updateChartheight()
    console.log("valval", val);
    // this.reportWindowSize(val)
    setTimeout(() => {
      this.hideChart = false;
    }, 25);
  }
  reportWindowSize(id) {
    // this.reportWindowSizeMul()
    //   if(location.pathname.indexOf('tv-charts')>-1 ){
    //    setTimeout(() => {
    //      //  let doc = this._tvWidget['_iFrame'].contentDocument || this._tvWidget['_iFrame'].contentWindow.document
    //        let ele1 = document.getElementById(id||'tv_chart_container')
    //        console.log("id||'tv_chart_container'",id||'tv_chart_container')
    //       if(ele1){
    //        let   ele = ele1.getElementsByTagName('iframe')[0]
    //        // console.log("reportWindowSize called",ele)
    //         if (ele) {
    //         console.log(ele,"eleeleeleeleele")
    //           ele.style.height=100 + "%"
    //           // ele.setAttribute('width', window.innerWidth + "px")
    //           // ele.setAttribute('height', (window.innerHeight-200) + "px")
    //         }
    //       }
    //       //  if (this.chartConfig )
    //       //   { 
    //       //   this.chartConfig.height = 100 
    //       //  }
    //      }, 25);
    //  }
  }
  getSymbolDetails(symbols) {
    let forkJoinList = [];
    let keyInfoList = [];
    let userId = this.utils.getUserId();
    let sessionId = this.utils.getSessionId();
    symbols.forEach((item, index) => {
      let symbol = item.split('@');
      forkJoinList.push(this.rest.getScripDetails({
        "nMarketSegmentId": Number(symbol[0]),
        "nToken": Number(symbol[1]),
        "UserId": !userId || userId == 'guest' ? '' : userId
      }));
      keyInfoList.push(this.rest.getKeyInfo({
        "UserId": userId,
        "SessionId": sessionId,
        "Token": Number(symbol[1]),
        "SegmentId": Number(symbol[0])
      }));
    });
    (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.forkJoin)(forkJoinList).subscribe(data => {
      data.forEach((item, index) => {
        if (item.Status == "Success" && item.Response) {
          this.config.symbols['chart' + index] = item.Response;
          this.config.symbols['chart' + index].isTradingAllowed = this.utils.isSegmentAllowed(this.config.SegmentId);
          this.config.symbols['chart' + index].symbol = item.Response.SecName;
          // console.log("Multhis.multiChartStxx",this.multiChartStxx)
          //  this.config.symbols['chart' + index].class = this.getClass(index,data.length)
          console.log(this.config.symbols['chart' + index], "item.Response", item.Response);
          this.config.symbols['chart' + index] = {
            ...(this.config.symbols['chart' + index] || {}),
            ...(item.Response || {})
          };
          this.config.symbols['chart' + index].class = this.getClass(index, data.length);
        }
        //  keyInfoData.forEach((item, index) => {
        //   if (item.Status == "Success" && item.Response) {
        //  }
        // });
      });
      // console.log("Multichart data", this.config)
      // forkJoin(keyInfoList).subscribe((keyInfoData) => {
      // });
    }, err => {});
  }
  openMultichartMenu() {
    this.multiChartOp = !this.multiChartOp;
    if (this.multiChartOp) {
      this.utils.setTrackMoeEvent('clickedMultichart', {
        "User_ID": this.utils.getUserId() || 'guest',
        "IP": this.shared.IPAddress
      });
      this.analytics.emitEvent('clickedMultichart', this.utils.getUserId() || 'guest', JSON.stringify({
        "IP": this.shared.IPAddress
      }), 1);
    }
  }
  openMultichart2(number) {}
  openMultichart(number) {
    //  if(this.config.symbols.length==1)
    //this.config.symbols.length
    //console.log(this.symbols, "this.config.symbols",Object.keys(this.config.symbols))
    this.numberOfCharts = number;
    let data = {};
    let symbolData = [];
    for (let i = 0; i < this.numberOfCharts; i++) {
      console.log("this.config.symbols", this.config.symbols);
      let dataToPush = JSON.parse(JSON.stringify(this.config.symbols['chart' + i] ? this.config.symbols['chart' + i] : this.config.symbols['chart0']));
      //this.config.symbols['chart' + index].class = this.getClass(index,data.length)
      dataToPush.class = this.getClass(i, this.numberOfCharts);
      data['chart' + i] = dataToPush;
      symbolData.push(this.symbols[i] ? this.symbols[i] : this.symbols[0]);
    }
    console.log(data, "dataataat");
    this.config.symbols = data;
    this.symbols = symbolData;
    this.openMultichartMenu();
    //this.updateChartheight()
    // this.symbols.forEach(ele=>{
    // })
    // let data2=this.symbols.split("|");
    this.location2.replaceState((location.pathname.indexOf('tv-charts-watch') > -1 ? '/tv/tv-charts-watch' : '/tv/tv-charts') + "?symbols=" + this.symbols.join("|"));
    // switch (number) {
    //   case 1:
    //   console.log("this.config.symbols",this.config.symbols)
    //     break;
    //   case 2:
    //     break;
    //   case 3:
    //     break;
    //   case 4:
    //     break;
    //     default:
    //     break;
    // }
    console.log(this.config.symbols);
  }
  openDrawer() {
    this.manageDrawer = this.manageDrawer == 'true' ? 'false' : 'true';
    if (!this.selectedDrawer) {
      this.selectedDrawer = localStorage.getItem('selectedDrawer') ? localStorage.getItem('selectedDrawer') : 'positions';
      localStorage.setItem('selectedDrawer', this.selectedDrawer);
    }
    localStorage.setItem("manageDrawer", this.manageDrawer + "");
    setTimeout(() => {
      // this.loadForm()
    }, 2000);
    //  setTimeout(() => {
    //     if(document.getElementById('manager-chart'))
    //   this.managerheight= document.getElementById('manager-chart').offsetHeight * 1.01
    //   }, 50);
    if (this.manageDrawer == 'true') {
      this.utils.setTrackMoeEvent('clickedChartOrderPositionDrawer', {
        "User_ID": this.utils.getUserId() || 'guest',
        "IP": this.shared.IPAddress
      });
      this.analytics.emitEvent('clickedChartOrderPositionDrawer', this.utils.getUserId() || 'guest', JSON.stringify({
        "IP": this.shared.IPAddress
      }), 1);
      //     if(this.globalListenFuncUp)
      //     this.globalListenFuncUp();
      //     if(this.globalListenFuncMove)
      //     this.globalListenFuncMove();
      //     if(this.globalListenFuncDown)
      //     this.globalListenFuncDown();
      //     this.globalListenFuncUPArr.forEach(ele=>{
      //       ele()
      //     })
      //     setTimeout(() => {
      //       console.log("this.mousemove")
      //     // this.globalListenFuncMove = this.renderer.listen('document', 'mousemove', e => {
      //     //   
      //     //   let container = document.getElementById("inner-drawer-sec");
      //     //   if (!this.isResizing) {
      //     //     return;
      //     //   }
      //     //   console.log( container.clientHeight, container.scrollHeight,"container.style.height",e.clientY, container.offsetTop, container.offsetHeight)
      //     //   // console.log("1111 1",container.clientHeight - (e.clientY - container.offsetTop) + "px")
      //     //   // console.log("1111 2",container.offsetHeight - (e.clientY - container.offsetTop) + "px")
      //     //   console.log("1111 3",container.scrollHeight - (e.clientY - container.offsetTop) + "px")
      //     //   if(this.isResizing){
      //     //   if(!((container.scrollHeight - ((e.clientY) - container.offsetTop))<=140)){ 
      //     //     this.innerDrawerHeight=container.scrollHeight - (e.clientY - container.offsetTop) + "px" 
      //     //     localStorage.setItem("innerDrawerHeight",this.innerDrawerHeight)
      //     //     container.style.height = container.scrollHeight - ((e.clientY) - container.offsetTop) + "px";
      //     //     //   setTimeout(() => {
      //     //         //  if(document.getElementById('manager-chart'))
      //     //         //  this.managerheight= document.getElementById('manager-chart').offsetHeight * 1.01
      //     //     }
      //     //    // }, 1);
      //     //   }else{
      //     //     // if((container.scrollHeight - ((e.clientY) - container.offsetTop))<=140){  
      //     //     //   this.isResizing=false
      //     //     //   this.openDrawer()
      //     //     // }
      //     //   }
      //     // });
      //     // this.elRef.nativeElement.addEventListener("mouseup", (e)=>{
      //     //   
      //     // })
      //     if(this.symbols&&this.symbols.length){
      //       this.symbols.forEach((ele,i)=>{
      //         let ele1= document.getElementById("chart"+i)
      //         console.log("mousedown2 ele1",ele1)
      //         if(ele1){
      //           let   ele = ele1.getElementsByTagName('iframe')[0]
      //           console.log("mousedown2 ele1 2",ele)
      //           let doc =ele.contentDocument || ele.contentWindow.document
      //           // handle.addEventListener('onmousedown',(e)=>{
      //           //   
      //           // })
      //           // this.globalListenFuncUPArr.push(this.renderer.listen(doc, 'mouseup', e => {
      //           //     
      //           //     this.isResizing = false;
      //           //   }))
      //         //this.reportWindowSize("chart"+i)
      //     }
      //   })
      // }
      //     this.globalListenFuncUp = this.renderer.listen('document', 'mouseup', e => {
      //       e.preventDefault();
      //       
      //       this.isResizing = false;
      //     });
      //     let   handle = document.getElementById("manager-drawer-dragger");
      //     console.log("handle",handle)
      //     // handle.addEventListener('onmousedown',(e)=>{
      //     //   
      //     // })
      //     this.globalListenFuncDown = this.renderer.listen(handle, 'mousedown', e => {
      //       e.preventDefault();
      //       this.isResizing = true;
      //       
      //     });
      //     }, 20);
      //  //   this.draggableEl=handle;
      //     console.log("valjaldhd",this.elRef.nativeElement.getElementsByClassName('manager-drawer-dragger')[0])
      //     let val =this.elRef.nativeElement.getElementsByClassName('manager-drawer-dragger')
      //     if(val && val[0]){
      //       // console.log(val,"kahskahskahsk")
      //       // val[0].addEventListener("mousedown", ()=>{
      //       //   this.isResizing = true;
      //       // })
      //       this.globalListenFuncDown = this.renderer.listen(handle, 'mousedown', e => {
      //         this.isResizing = true;
      //         
      //       });
      //     }
      //    console.log(container,"containercontainer.style.height", handle)
      //  handle.onmousedown = (e) =>{
      //    this.isResizing = true;
      //  };
      //  document.onmousemove = (e) =>{
      //    // we don't want to do anything if we aren't resizing.
      //   // container.style.height=container.style.height+10
      //    // var offsetRight = container.clientWidth - (e.clientY - container.offset);
      //    // left.style.right = offsetRight + "px";
      //    // right.style.width = offsetRight + "px";
      //  }
      //  document.onmouseup = (e)=> {
      //    // stop resizing
      //    this.isResizing = false;
      //  }
      // this.eventBasedScroll()
    } else {
      // if(this.globalListenFuncUp)
      // this.globalListenFuncUp();
      // if(this.globalListenFuncMove)
      // this.globalListenFuncMove();
      // if(this.globalListenFuncDown)
      // this.globalListenFuncDown();
      // this.globalListenFuncUPArr.forEach(ele=>{
      //   ele()
      // })
    }
    console.log("managerheight", this.managerheight);
  }
  // closeDrawer(){
  //   this.manageDrawer=false
  //   this.managerheight= document.getElementById('manager-chart').offsetHeight
  // }
  ngOnDestroy() {
    this.subscriptionList.forEach(ele => {
      ele.unsubscribe();
    });
    let ele = document.getElementById('main-container');
    if (ele) {
      ele.classList.remove("chart-mul");
      ele.classList.remove("chart-container-sec-pre");
    }
    this.renderer.setStyle(document.body, 'overflow', 'auto');
  }
  getClass(id, len) {
    let ob = {
      0: {
        1: 'maximized',
        2: 'left',
        3: 'left up',
        4: 'left up'
      },
      1: {
        2: 'right',
        3: 'right up',
        4: 'right up'
      },
      2: {
        3: 'down full-width',
        4: 'left down'
      },
      3: {
        4: 'right down'
      }
    };
    return ob[id][len];
  }
  reloadPage() {
    // let prev = this.selectedDrawer
    // this.selectedDrawer=""
    // setTimeout(() => {
    //   this.selectedDrawer=prev
    // }, 50);
    if (this.selectedDrawer == 'positions' || this.selectedDrawer == '') {
      this.hidePositions = true;
    } else {
      this.hideOrderbook = true;
    }
    setTimeout(() => {
      this.hideOrderbook = false;
      this.hidePositions = false;
    }, 50);
    localStorage.setItem('selectedDrawer', this.selectedDrawer);
  }
  /**
  * Go to ChartIQ chart
  */
  goToChartIQ() {
    localStorage.setItem("chartType", 'false');
    let params = location.search.split("=");
    let urlSymbols = params[1];
    let symbols = urlSymbols.indexOf("%7C") > -1 ? urlSymbols.split("%7C") : urlSymbols.split("|");
    urlSymbols = symbols.join("|");
    let userId = this.utils.getUserId();
    if (userId && userId != 'guest') {
      this.utils.updatePreference('ChartType', "CHART_IQ");
      this.savePreferencetoAP2I();
    }
    window.Moengage.add_user_attribute("chartType", "CHART_IQ");
    this.config.symbols['chart0'];
    //      this.route.navigate(['/advanced-charts-watch/'+this.config.symbols['chart0'].Symbol+"/"+this.config.symbols['chart0'].SegmentId+"/"+this.config.symbols['chart0'].Token])
    //
    if (location.pathname.indexOf('trading-view-charts-watch') > -1 || location.pathname.indexOf('tv-charts-watch') > -1) {
      //  this.route.navigate(['/advanced-charts-watch/'+this.config.symbols['chart0'].Symbol+"/"+this.config.symbols['chart0'].SegmentId+"/"+this.config.symbols['chart0'].Token])
      if (symbols.length > 1) this.route.navigate(['/cq/advanced-multi-charts-watch'], {
        queryParams: {
          symbols: urlSymbols
        }
      });else this.route.navigate(['/cq/advanced-charts-watch/' + this.config.symbols['chart0'].Symbol + "/" + this.config.symbols['chart0'].SegmentId + "/" + this.config.symbols['chart0'].Token]);
      this.utils.setTrackMoeEvent('clickedOn', {
        "chartType": "TradingView",
        pageName: "Watchlist",
        buttonName: "ChartSwitch",
        "User_ID": this.utils.getUserId() || 'guest',
        "IP": this.shared.IPAddress
      });
      this.analytics.emitEvent('clickedOn', this.utils.getUserId() || 'guest', JSON.stringify({
        "chartType": "TradingView",
        pageName: "Watchlist",
        buttonName: "ChartSwitch",
        "IP": this.shared.IPAddress
      }), 1);
    } else {
      this.route.navigate(['/cq/advanced-charts/' + this.config.symbols['chart0'].Symbol + "/" + this.config.symbols['chart0'].SegmentId + "/" + this.config.symbols['chart0'].Token]);
      this.utils.setTrackMoeEvent('clickedOn', {
        "chartType": "TradingView",
        pageName: "Expanded",
        buttonName: "ChartSwitch",
        "User_ID": this.utils.getUserId() || 'guest',
        "IP": this.shared.IPAddress
      });
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
  closeWalkthrough() {
    this.showMultichartWalk = false;
  }
  static {
    this.ctorParameters = () => [{
      type: _angular_common__WEBPACK_IMPORTED_MODULE_11__.Location
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ComponentFactoryResolver
    }, {
      type: src_app_services_rest_tool_service__WEBPACK_IMPORTED_MODULE_3__.ToolService
    }, {
      type: src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_5__.AnalyticsService
    }, {
      type: src_app_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_6__.SharedDataService
    }, {
      type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.DomSanitizer
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ElementRef
    }, {
      type: src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_4__.UtilsService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.NgZone
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Renderer2
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.Router
    }, {
      type: src_app_services_rest_tool_service__WEBPACK_IMPORTED_MODULE_3__.ToolService
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute
    }];
  }
  static {
    this.propDecorators = {
      orderbookComponent1: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild,
        args: ["orderbookComponent1", {
          static: false
        }]
      }],
      portfolioComponent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild,
        args: ["portfolioComponent", {
          static: false
        }]
      }]
    };
  }
};
TvMultichartComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
  selector: 'app-tv-multichart',
  template: _tv_multichart_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  standalone: true,
  imports: [_tv_chart_exp_tv_chart_exp_component__WEBPACK_IMPORTED_MODULE_9__.TvChartExpComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _post_login_module_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_8__.PortfolioComponent, _post_login_module_orderbook_orderbook_component__WEBPACK_IMPORTED_MODULE_7__.OrderbookComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.KeyValuePipe],
  styles: [(_tv_multichart_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__metadata)("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_11__.Location, _angular_core__WEBPACK_IMPORTED_MODULE_12__.ComponentFactoryResolver, src_app_services_rest_tool_service__WEBPACK_IMPORTED_MODULE_3__.ToolService, src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_5__.AnalyticsService, src_app_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_6__.SharedDataService, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.DomSanitizer, _angular_core__WEBPACK_IMPORTED_MODULE_12__.ElementRef, src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_4__.UtilsService, _angular_core__WEBPACK_IMPORTED_MODULE_12__.NgZone, _angular_core__WEBPACK_IMPORTED_MODULE_12__.ChangeDetectorRef, _angular_core__WEBPACK_IMPORTED_MODULE_12__.Renderer2, _angular_router__WEBPACK_IMPORTED_MODULE_14__.Router, src_app_services_rest_tool_service__WEBPACK_IMPORTED_MODULE_3__.ToolService, _angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute])], TvMultichartComponent);


/***/ }),

/***/ 74308:
/*!*****************************************!*\
  !*** ./src/app/tv-module/tv.routing.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TradingViewRoutes: () => (/* binding */ TradingViewRoutes)
/* harmony export */ });
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../guards/auth.guard */ 61620);
/* harmony import */ var _guards_basic_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../guards/basic.guard */ 72972);
/* harmony import */ var _tools_module_tv_expanded_tv_expanded_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tools-module/tv-expanded/tv-expanded.component */ 78655);
/* harmony import */ var _tools_module_tv_multichart_tv_multichart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tools-module/tv-multichart/tv-multichart.component */ 16387);




const TradingViewRoutes = [{
  path: "trading-view-charts/:symbol/:segmentId/:token/:userId/:sessionId",
  component: _tools_module_tv_expanded_tv_expanded_component__WEBPACK_IMPORTED_MODULE_2__.TvExpandedComponent,
  canActivate: [_guards_basic_guard__WEBPACK_IMPORTED_MODULE_1__.BasicGuard],
  data: {
    config: {
      header: false,
      footer: false,
      indices: false,
      betaFooter: false,
      ticker: false,
      watchlist: false,
      watchlistHidden: true
    },
    fullScreen: true
  }
}, {
  path: "trading-view-charts/:symbol/:segmentId/:token",
  component: _tools_module_tv_multichart_tv_multichart_component__WEBPACK_IMPORTED_MODULE_3__.TvMultichartComponent,
  canActivate: [_guards_basic_guard__WEBPACK_IMPORTED_MODULE_1__.BasicGuard],
  data: {
    config: {
      header: false,
      footer: true,
      footerHide: true,
      indices: false,
      betaFooter: false,
      ticker: false,
      watchlist: false,
      watchlistHidden: true
    },
    fullScreen: true
  }
}, {
  path: "trading-view-charts-watch/:symbol/:segmentId/:token",
  component: _tools_module_tv_multichart_tv_multichart_component__WEBPACK_IMPORTED_MODULE_3__.TvMultichartComponent,
  canActivate: [_guards_basic_guard__WEBPACK_IMPORTED_MODULE_1__.BasicGuard],
  data: {
    config: {
      header: true,
      footer: true,
      footerHide: true,
      indices: false,
      betaFooter: false,
      ticker: false,
      watchlist: false,
      watchlistHidden: true
    },
    fullScreen: false
  }
}, {
  path: "tv-charts",
  component: _tools_module_tv_multichart_tv_multichart_component__WEBPACK_IMPORTED_MODULE_3__.TvMultichartComponent,
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  data: {
    config: {
      header: false,
      footer: false,
      footerHide: true,
      indices: false,
      betaFooter: false,
      ticker: false,
      watchlist: false,
      watchlistHidden: true,
      freshChat: false
    },
    fullScreen: true
  }
}, {
  path: "tv-charts-watch",
  component: _tools_module_tv_multichart_tv_multichart_component__WEBPACK_IMPORTED_MODULE_3__.TvMultichartComponent,
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  data: {
    config: {
      header: true,
      footer: true,
      footerHide: true,
      indices: false,
      betaFooter: false,
      ticker: false,
      watchlist: false,
      watchlistHidden: true
    },
    fullScreen: false
  }
}];

/***/ }),

/***/ 71937:
/*!********************************************************************************!*\
  !*** ./src/app/tools-module/tv-expanded/tv-expanded.component.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ 8564);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 98557);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.no-padding {
  padding: 0px;
}

.loader {
  top: 50vh;
}`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 74981:
/*!************************************************************************************!*\
  !*** ./src/app/tools-module/tv-multichart/tv-multichart.component.scss?ngResource ***!
  \************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ 8564);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 98557);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* .left, .right {
	height: 100%;
	position: absolute;
	width: 50%;
}
.right {
	left: 50%;
} */
.pt-watch {
  padding-top: 88px;
}

.display-flex-wrap {
  display: flex;
  flex-wrap: wrap;
}

.left {
  height: 100%;
  width: 50%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.right {
  left: 50%;
  height: 100%;
  width: 50%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.up {
  top: 0;
  height: 50%;
}

.down {
  top: 50%;
  height: 50%;
}

.full-width {
  width: 100%;
}

.maximized {
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.maximized .maximize-hide {
  display: none;
}

.minimize-hide,
.minimize-hide-flex {
  display: none !important;
}

.maximized .minimize-hide {
  display: block !important;
}

.maximized .minimize-hide-flex {
  display: inline-flex !important;
}

span.visibility {
  display: inline-block;
  margin-left: 5px;
  cursor: pointer;
}

.ciq-search {
  line-height: 11px;
}

.heightopen {
  height: 91% !important;
}

.heightclose {
  height: 91% !important;
}

.manager-drawer {
  background: #EFEFF3;
}
.manager-drawer ul {
  list-style: none;
  display: flex;
  padding: 5px;
  border-bottom: 1px solid lightgray;
  padding-bottom: 0px;
  cursor: pointer;
  /* margin-bottom: 8px; */
}
.manager-drawer ul li:hover {
  color: gray;
}
.manager-drawer ul li {
  font-size: 13px;
  font-weight: 600;
  line-height: 25px;
  margin-right: 26px;
  margin-left: 10px;
}
.manager-drawer ul .active {
  color: rgb(19, 145, 255);
  border-bottom: 1px solid rgb(19, 145, 255);
}
.text-blue {
  color: rgb(19, 145, 255);
}

#manager-drawer-dragger {
  background-color: transparent;
  height: 3px;
  /* float: right; */
  width: 100%;
  /* top: 0px; */
  margin-top: -12px;
}

#inner-drawer-sec {
  position: relative;
  overflow-y: scroll;
  height: 150px;
}
#inner-drawer-sec .company-page-wrap {
  padding: 0px;
  margin: 0px;
}

#manager-chart {
  width: 100%;
  background: #EFEFF3;
  z-index: 999999;
  position: relative;
}
#manager-chart .manager-menu {
  background: #EFEFF3;
  list-style: none;
  display: flex;
  padding: 7px 13px;
  margin-bottom: 0px;
  border-bottom: 1px solid lightgrey;
}
#manager-chart .manager-menu .btn-menu {
  margin-left: auto;
  margin-right: 30px;
}
#manager-chart .manager-menu .btn-menu .menu-container {
  display: flex;
  align-items: self-end;
  position: relative;
}
#manager-chart .manager-menu .btn-menu .menu-container .multichart-menu {
  display: flex;
  align-items: center;
  padding: 10px;
  position: absolute;
  bottom: 38px;
  /* left: -21px; */
  right: 75px;
  /* top: 10px; */
  background: #EFEFF3;
}
#manager-chart .manager-menu .btn-menu .menu-container .multichart-menu .layout-btn {
  padding-right: 8px;
}
#manager-chart .manager-menu .btn-menu .menu-container .multichart-menu .layout-btn-active {
  color: rgb(45, 119, 244);
}
#manager-chart .manager-menu .btn-menu .menu-container .multichart-menu .layout-btn:hover {
  color: rgba(128, 128, 128, 0.73);
}
#manager-chart .manager-menu .btn-menu .menu-container .mul-btn {
  margin-left: auto;
  margin-right: 9px;
  position: relative;
  border: none;
  color: rgb(45, 119, 244);
}
#manager-chart .manager-menu .btn-menu .menu-container .accor-btn {
  margin-left: auto;
  margin-right: -24px;
  position: relative;
  color: #2d77f4;
  border-color: #2d77f4;
}

.chart-custom-menu-mul {
  box-shadow: 2px 0px 6px -2px rgba(0, 0, 0, 0.75);
  margin-right: 12px;
}
.chart-custom-menu-mul ul {
  display: flex;
  /* margin-bottom: 0; */
  padding-left: 9px;
  list-style: none;
}
.chart-custom-menu-mul ul li {
  padding-left: 10px;
  padding-right: 10px;
  border-right: 1px solid gray;
  cursor: pointer;
  padding: 6px 10px;
}
.chart-custom-menu-mul ul li:hover {
  color: gray;
}
.chart-custom-menu-mul ul .active {
  color: #2D77F4;
  font-weight: 600;
}
.chart-custom-menu-mul ul .active:hover {
  color: #2D77F4;
  font-weight: 600;
}

.opacity-zero {
  opacity: 0;
}

.loading-chart {
  /* margin: 0 auto; */
  left: 40%;
  top: 20%;
}

.loader-container {
  margin: 0 auto;
  margin-top: 50px;
  width: 100px;
  padding: 50px;
}

.loader-chart {
  width: 60px;
  height: 60px;
  position: relative;
}

.loader-horizontal, .loader-vertical {
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: #d3d3d2;
  height: 3px;
}
.loader-horizontal:before, .loader-vertical:before {
  content: "";
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: 3px solid #d3d3d2;
  position: absolute;
}

.loader-horizontal {
  height: 3px;
  width: 100%;
  animation: horizontal 2.5s linear infinite;
}
.loader-horizontal:before {
  margin-right: -11px;
  margin-top: -5.5px;
  top: 0;
  right: 0;
  animation: horizontal-circle 2.5s linear infinite;
}

.loader-vertical {
  width: 3px;
  height: 100%;
  animation: vertical 2.5s linear infinite;
}
.loader-vertical:before {
  margin-left: -5.5px;
  margin-top: -11px;
  top: 0;
  left: 0;
  animation: vertical-circle 2.5s linear infinite;
}

.loader-line1, .loader-line2, .loader-line3, .loader-line4 {
  background-color: rgb(38, 166, 154);
  width: 8px;
  height: 50%;
  position: absolute;
  left: 0;
  bottom: 10px;
  border-radius: 8px;
}

.loader-line1 {
  left: 20%;
  height: 62%;
  animation: line1 2.5s linear infinite;
}

.loader-line2 {
  left: 40%;
  height: 38%;
  animation: line2 2.5s linear infinite;
}

.loader-line3 {
  left: 60%;
  height: 23%;
  animation: line3 2.5s linear infinite;
}

.loader-line4 {
  left: 80%;
  height: 37%;
  animation: line4 2.5s linear infinite;
}

@keyframes vertical {
  0% {
    height: 0;
  }
  10% {
    height: 50%;
  }
  20%, 90% {
    height: 100%;
  }
  100% {
    height: 0%;
  }
}
@keyframes horizontal {
  0% {
    width: 0;
  }
  10% {
    width: 25%;
  }
  20% {
    width: 75%;
  }
  30%, 90% {
    width: 100%;
  }
  100% {
    width: 0;
  }
}
@keyframes horizontal-circle {
  0% {
    opacity: 0;
    transform: translateZ(0) scale(0);
  }
  20% {
    opacity: 0;
  }
  30%, 90% {
    opacity: 1;
    transform: translateZ(0) scale(1);
  }
  100% {
    opacity: 0;
    transform: translateZ(0) scale(0);
  }
}
@keyframes vertical-circle {
  0% {
    opacity: 0;
    transform: translateZ(0) scale(0);
  }
  10% {
    opacity: 0;
  }
  20%, 90% {
    opacity: 1;
    transform: translateZ(0) scale(1);
  }
  100% {
    opacity: 0;
    transform: translateZ(0) scale(0);
  }
}
@keyframes line1 {
  0% {
    height: 0;
  }
  30% {
    height: 0;
  }
  40% {
    height: 7%;
  }
  50% {
    height: 38%;
  }
  60% {
    height: 62%;
  }
  70% {
    height: 89%;
  }
  80%, 90% {
    height: 62%;
  }
  100% {
    height: 0%;
  }
}
@keyframes line2 {
  0% {
    height: 0;
  }
  40% {
    height: 0;
  }
  50% {
    height: 26%;
  }
  60% {
    height: 38%;
  }
  70% {
    height: 23%;
  }
  80%, 90% {
    height: 38%;
  }
  100% {
    height: 0%;
  }
}
@keyframes line3 {
  0% {
    height: 0;
  }
  40% {
    height: 0;
  }
  50% {
    height: 9%;
  }
  60% {
    height: 23%;
  }
  70% {
    height: 61%;
  }
  80%, 90% {
    height: 23%;
  }
  100% {
    height: 0%;
  }
}
@keyframes line4 {
  0% {
    height: 0;
  }
  40% {
    height: 0;
  }
  50% {
    height: 45%;
  }
  60% {
    height: 37%;
  }
  70% {
    height: 83%;
  }
  80%, 90% {
    height: 37%;
  }
  100% {
    height: 0%;
  }
}
.loader-upt {
  max-width: 100%;
  height: 100px;
  margin: 0 auto;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 21;
}`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 52681:
/*!********************************************************************************!*\
  !*** ./src/app/tools-module/tv-expanded/tv-expanded.component.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div>\r\n  @if (shared?.isServiceHit||hideChart) {\r\n    <img class=\"loader jhjh\" src=\"assets/images/loader.gif\" />\r\n  }\r\n  <!--   <h1 class=\"jhjh\"  *ngIf=\"shared?.isServiceHit\">Loader</h1> -->\r\n  @if (!hideChart) {\r\n    <div class=\"col-md-12 no-padding\" >\r\n      @if (config.symbol && config.SegmentId) {\r\n        <app-tv-chart-exp [scripName]=\"config.symbol\" [token]=\"config.Token\"\r\n        [segmentId]=\"config.SegmentId\" [isExpanded]=\"true\" ></app-tv-chart-exp>\r\n      }\r\n      <!-- [recUserId]=\"config.userId\"\r\n      [recSessionId]=\"config.sessionId\" -->\r\n    </div>\r\n  }\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n@if (false && shared?.userId && layoutConfig?.showWatchlist) {\r\n  <div class=\"col-md-3 watch-change\"\r\n    [ngClass]=\"{ 'watchlist-theme':(theme=='Dark')}\">\r\n    <!-- <div class=\"overlay\" (click)=\"shared?.isClassVisible = !shared?.isClassVisible;\" [class.watchlist-visible]=\"shared?.isClassVisible\"></div> -->\r\n    <div class=\" search-panel padding0\" [class.watchlist-visible]=\"shared?.isClassVisible\">\r\n      <img class=\"loader\" src=\"assets/images/loader.gif\"\r\n        [hidden]=\"watchListData[activeWatchlist-1]?.length>0 || !serviceHit\" />\r\n        <!-- <div class=\"input-group col-md-12 card-block-sm\">\r\n        <input class=\"search-query form-control\" [(ngModel)]=\"watchSearch\" (keypress)=\"$event.keyCode != 32\" placeholder=\"Search Scrips from Watchlist\"\r\n          type=\"text\">\r\n          <span class=\"input-group-btn\">\r\n            <span class=\"btn\">\r\n              <span class=\"glyphicon glyphicon-search\"></span>\r\n            </span>\r\n          </span>\r\n        </div> -->\r\n        <div id=\"watchEditName\" class=\"watchlist-header\">\r\n          <div class=\"watchlist-name\">\r\n            <i class=\"icon-Watchlist\"></i>\r\n            <span\r\n              [hidden]=\"isEditWatch\">{{!watchListDataName[activeWatchlist]||activeWatchlist==watchListDataName[activeWatchlist]?'WatchList\r\n            '+activeWatchlist:watchListDataName[activeWatchlist]}}</span>\r\n            @if (isEditWatch) {\r\n              <input class=\"form-control\" id=\"WatchListNameInput\" type=\"text\" maxlength=\"10\"\r\n                pattern=\"(?!.*[ ]{2,})[A-z0-9 ]{2,10}\" [(ngModel)]=\"watchlistName\"\r\n                (keypress)=\"keypressWatchlistName($event)\" #watchListInput=\"ngModel\" />\r\n            }\r\n          </div>\r\n          <div class=\"watchlist-edit\">\r\n            <!--   <button class=\"btn \"  (click)=\"openSearch()\">Add </button>  -->\r\n            <!--   <button class=\"btn btn-gradient\" (click)=\"openSearch()\">Click here to Add</button> -->\r\n            <!--  <span id=\"editbtnWatchlist\" class=\"\" (click)=\"openSearch()\" ngx-tooltip tooltipTitle=\"ADD TO WATCHLIST\" tooltipPlacement=\"right\" tooltipType=\"tooltip\" >\r\n            <i class=\"\">+</i>\r\n          </span> -->\r\n          @if (watchListData[activeWatchlist-1] && watchListData[activeWatchlist-1].length>0 && !isEditWatch) {\r\n            <span id=\"editbtnWatchlist\" class=\"circle\" (click)=\"editWatchlistName()\" ngx-tooltip\r\n              tooltipTitle=\"EDIT WATCHLIST NAME\" tooltipPlacement=\"right\" tooltipType=\"tooltip\"\r\n              >\r\n              <i class=\"icon-edit\"></i>\r\n            </span>\r\n          }\r\n          @if (isEditWatch) {\r\n            <span class=\"circle\" (click)=\"saveWatchListName(true)\" ngx-tooltip tooltipTitle=\"SAVE\" tooltipPlacement=\"top\"\r\n              tooltipType=\"tooltip\" [attr.disabled]=\"watchlistName && watchlistName.trim().length>2\">\r\n              <i class=\"icon-checked\"></i>\r\n            </span>\r\n          }\r\n          @if (isEditWatch) {\r\n            <span id=\"cancelEditWatchlist\" class=\"circle\" (click)=\"saveWatchListName(false)\" ngx-tooltip\r\n              tooltipTitle=\"CANCEL\" tooltipPlacement=\"top\" tooltipType=\"tooltip\"\r\n              [attr.disabled]=\"watchlistName && watchlistName.trim().length>2\">\r\n              <i class=\"icon-x\"></i>\r\n            </span>\r\n          }\r\n          @if (!isEditWatch) {\r\n            <div class=\"hidden-md hidden-lg close-btn\"\r\n              (click)=\"shared.isClassVisible = !shared.isClassVisible;\">\r\n              <i class=\"icon-Cancel\"></i>\r\n            </div>\r\n          }\r\n        </div>\r\n      </div>\r\n      <ul id=\"watchListOverView\" class=\"nav watchlist\" cdkDropList (cdkDropListDropped)=\"drop($event)\">\r\n        @if (watchListData[activeWatchlist-1] && watchListData[activeWatchlist-1].length) {\r\n          <li>\r\n            <div class=\"col-xs-12 watchlist-wrap container\">\r\n              <div class=\"row\">\r\n                <div class=\"col-xs-6 text-uppercase text-left\">\r\n                  <a class=\"fullwidth font-14 semi-bold ellipsis sort-name\" style=\"text-decoration: none;\"\r\n                    (click)=\"applySort(0);\">Scrip name\r\n                    <i class=\"icon-angle-down\"\r\n                      [ngClass]=\"filterConfig?.selected[activeWatchlist].sort[0]=='SecName' ? 'sort' : ''\"\r\n                    [hidden]=\"!filterConfig?.selected[activeWatchlist]?.asc && filterConfig?.selected[activeWatchlist].sort[0]=='SecName'\"></i>\r\n                    @if (filterConfig?.selected[activeWatchlist].sort[0]=='SecName' && !filterConfig?.selected[activeWatchlist]?.asc) {\r\n                      <i class=\"icon-angle-up\"\r\n                        [ngClass]=\"filterConfig?.selected[activeWatchlist].sort[0]=='SecName' ? 'sort' : ''\"\r\n                      ></i>\r\n                    }\r\n                  </a>\r\n                </div>\r\n                <div class=\"col-xs-6 text-uppercase ltp-wrap text-right\">\r\n                  <a class=\"fullwidth font-14 semi-bold ellipsis sort-name\" style=\"text-decoration: none;\"\r\n                    (click)=\"applySort(1);\">Change %\r\n                    <i class=\"icon-angle-down\"\r\n                      [ngClass]=\"filterConfig?.selected[activeWatchlist].sort[0]=='ChangePer' ? 'sort' : ''\"\r\n                    [hidden]=\"!filterConfig?.selected[activeWatchlist]?.asc && filterConfig?.selected[activeWatchlist].sort[0]=='ChangePer'\"></i>\r\n                    @if (filterConfig?.selected[activeWatchlist].sort[0]=='ChangePer' && !filterConfig?.selected[activeWatchlist]?.asc) {\r\n                      <i class=\"icon-angle-up\"\r\n                        [ngClass]=\"filterConfig?.selected[activeWatchlist].sort[0]=='ChangePer' ? 'sort' : ''\"\r\n                      ></i>\r\n                    }\r\n                  </a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </li>\r\n        }\r\n        @for (watchlist of watchListData[activeWatchlist-1] | customOrderBy: [filterConfig?.selected[activeWatchlist].asc ? filterConfig?.selected[activeWatchlist].sort[0] : '-'+ filterConfig.selected[activeWatchlist].sort[0]]; track watchlist; let i = $index) {\r\n          <li class=\"watchlist-items\" id=\"watchListHover{{i}} watchlist-items\"\r\n            [class]=\"watchlist.class\" cdkDrag>\r\n            @if (!watchlist.isAboutToDelete) {\r\n              <div class=\"col-xs-12 watchlist-wrap container \">\r\n                <!-- (click)=\"openTechnicalChart(watchlist)\" -->\r\n                <div class=\"row\">\r\n                  <div class=\"col-xs-6 text-uppercase text-left\" [title]=\"watchlist.SecName\">\r\n                    @if (watchlist.OptionType!='PE'&& watchlist.OptionType!='CE') {\r\n                      <span class=\"fullwidth font-14 semi-bold ellipsis\"\r\n                      >{{watchlist.SecName}}</span>\r\n                    }\r\n                    @if (watchlist.OptionType=='PE'||watchlist.OptionType=='CE') {\r\n                      <span class=\"fullwidth font-14 semi-bold ellipsis\"\r\n                      >{{watchlist.Symbol}}|{{watchlist.sExpiry}}</span>\r\n                    }\r\n                    <span class=\"fullwidth font-11 text-gray\">@if (watchlist.OptionType=='PE'||watchlist.OptionType=='CE') {\r\n                      <span\r\n                        >{{watchlist.OptionType}}\r\n                      {{watchlist.strikePrice| segment:watchlist.SegmentId}}</span>\r\n                    } {{watchlist.ExchangeSegment}}</span>\r\n                  </div>\r\n                  <div class=\"col-xs-6 text-uppercase ltp-wrap text-right\">\r\n                    <span class=\"fullwidth font-14 ltp\" [class.bg-up]=\"watchlist?.prevChange>0\"\r\n                      [class.bg-down]=\"watchlist?.prevChange<0\">{{watchlist.LTP ||0.00 |\r\n                    segment:watchlist.SegmentId}}</span>\r\n                    <span class=\"fullwidth font-11 change\">{{watchlist.difference | segment:watchlist.SegmentId}} <span\r\n                    class=\"small-percentage\"> ({{watchlist.percent | value:'1.2-2'}} %) </span>@if (watchlist?.class) {\r\n                    <i\r\n                    class=\"icon-long-arrow-{{watchlist?.class}}\"></i>\r\n                  }</span>\r\n                </div>\r\n              </div>\r\n              @if (false) {\r\n                <span class=\"action-btn\">\r\n                  @if (watchlist.isTradingAllowed && watchlist.IsIndex==0) {\r\n                    <button class=\"btn-outline btn\"\r\n                      (click)=\"buyItem(watchlist)\" ngx-tooltip tooltipTitle=\"BUY\" tooltipPlacement=\"top\"\r\n                      tooltipType=\"tooltip\">\r\n                      <i class=\"icon-Buy\"></i>\r\n                    </button>\r\n                  }\r\n                  @if (watchlist.isTradingAllowed && watchlist.IsIndex==0) {\r\n                    <button class=\"btn-outline btn\"\r\n                      (click)=\"sellItem(watchlist)\" tooltipTitle=\"SELL\" ngx-tooltip tooltipPlacement=\"top\"\r\n                      tooltipType=\"tooltip\">\r\n                      <i class=\"icon-Sell\"></i>\r\n                    </button>\r\n                  }\r\n                  <!--  <button class=\"btn-outline btn\" (click)=\"getInfo(watchlist)\" tooltipTitle=\"INFO\" placement=\"top\" ngx-tooltip tooltipPlacement=\"top\" tooltipType=\"tooltip\" >\r\n                  <i class=\"icon-info\"></i>\r\n                </button> -->\r\n                <!-- <button class=\"btn-outline btn\" (click)=\"addPriceAlert(watchlist)\" tooltipTitle=\"SET ALERT\" placement=\"top\" ngx-tooltip tooltipPlacement=\"top\" tooltipType=\"tooltip\" >\r\n                <i aria-hidden=\"true\" class=\"fa icon-Price-alert\"></i>\r\n              </button> -->\r\n              <!-- <button class=\"btn-outline btn\" (click)=\"openTechnicalChart(watchlist)\" tooltipTitle=\"OPEN CHARTS\" placement=\"top\" ngx-tooltip tooltipPlacement=\"top\" tooltipType=\"tooltip\" >\r\n              <i aria-hidden=\"true\" class=\"fa icon-indicators\"></i>\r\n            </button> -->\r\n            <!--  <button class=\"btn-outline btn\" (click)=\"deleteFromWatchListConfirm(watchlist,i,activeWatchlist)\" tooltipTitle=\"DELETE\" ngx-tooltip tooltipPlacement=\"top\" tooltipType=\"tooltip\">\r\n            <i class=\"icon-Cancel\"></i>\r\n          </button> -->\r\n        </span>\r\n      }\r\n    </div>\r\n  }\r\n  @if (watchlist.isAboutToDelete) {\r\n    <div class=\"col-xs-12 padding0 delete-container container\"\r\n      (click)=\"watchlist.isAboutToDelete = false;\">\r\n      <button class=\"btn-outline btn undo pull-right\"><i class=\"icon-undo\"></i> UNDO</button>\r\n    </div>\r\n  }\r\n</li>\r\n}\r\n@if (watchListData[activeWatchlist-1]?.length==0 && !serviceHit) {\r\n  <li class=\"text-center no-data-container\">\r\n    <div class=\"no-result-wrapper\">\r\n      <img src=\"{{shared?.serverImageUrl +'no-watchlist.png'}}\" alt=\"Create Your Watchlist\" />\r\n      <p text-center class=\"no-result-title\">No Scrips in Watchlist {{activeWatchlist}}</p>\r\n      <button class=\"btn btn-gradient\" (click)=\"openSearch()\">Click here to Add</button>\r\n    </div>\r\n  </li>\r\n}\r\n</ul>\r\n<div class=\"text-center mb25\">\r\n  <ul class=\"pagination\">\r\n    <li class=\"ripple\" [class.active]=\"activeWatchlist===1\" (click)=\"getWatchListPage(1)\"><span>1</span></li>\r\n    <li class=\"ripple\" [class.active]=\"activeWatchlist===2\" (click)=\"getWatchListPage(2)\"><span>2</span></li>\r\n    <li class=\"ripple\" [class.active]=\"activeWatchlist===3\" (click)=\"getWatchListPage(3)\"><span>3</span></li>\r\n    <li class=\"ripple\" [class.active]=\"activeWatchlist===4\" (click)=\"getWatchListPage(4)\"><span>4</span></li>\r\n    <li class=\"ripple\" [class.active]=\"activeWatchlist===5\" (click)=\"getWatchListPage(5)\"><span>5</span></li>\r\n  </ul>\r\n</div>\r\n</div>\r\n<div class=\"card\">\r\n  <div class=\"card-block\">\r\n    <h5>{{config?.symbol||'NA'}}</h5>\r\n    <!--  <h3></h3> -->\r\n    <span class=\"h3\">\r\n    {{fullB5data?.close||socketData?.Close||((responseData&&responseData?.length)?responseData[responseData.length-1]?.close:'-')}}</span>\r\n    INR\r\n    <p class=\"text-dgray h6\"> ({{fullB5data?.time?(fullB5data?.time | date: \"dd-MMM-yyyy\r\n      HH:mm:ss\"):((responseData&&responseData?.length)?(responseData[responseData.length-1]?.time | date:\r\n    \"dd-MMM-yyyy HH:mm:ss\"):'-')}})</p>\r\n  </div>\r\n</div>\r\n<div>\r\n</div>\r\n<!-- <app-watchlist></app-watchlist> -->\r\n</div>\r\n}";

/***/ }),

/***/ 39693:
/*!************************************************************************************!*\
  !*** ./src/app/tools-module/tv-multichart/tv-multichart.component.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div  id=\"main-multi-tv-chart\"  >\r\n  @if (hideChart &&( config?.symbols?.length>1)) {\r\n    <div class=\"loading-chart\">\r\n      <img class=\"loader-upt\" src=\"assets/images/loader.gif\" />\r\n      <!-- <div class=\"loader-wrapper-min\" id=\"loading-wrapper\" *ngIf=\"loadingRouteConfig\">\r\n      <div class=\"circle\">\r\n        <div class=\"circle-min\"></div>\r\n      </div>\r\n    </div> -->\r\n  </div>\r\n}\r\n@if ((config?.symbols)) {\r\n  <div class=\"{{'first-inner-div '+(isWatchChart?'display-flex-wrap tv-mul-ch pt-watch':'display-flex-wrap tv-mul-ch' )+' '+((hideChart&& config?.symbols?.length>1)?'opacity-zero':'')}}\"  >\r\n    @for (item of config?.symbols | keyvalue; track item; let i = $index) {\r\n      <div class=\"{{maximizedChart&&maximizedChart.id?(item?.key==maximizedChart.id?'maximized':'maximize-hide'): item?.value?.class}} mul-ch \"  >\r\n        @if (item?.value?.Symbol && item?.value?.SegmentId) {\r\n          <app-tv-chart-exp  chartId=\"{{item?.key}}\" id=\"{{item?.key}}\"  [scripName]=\"item?.value?.Symbol\" [token]=\"item?.value?.Token\"\r\n          [segmentId]=\"item?.value?.SegmentId\" [isExpanded]=\"true\" (onChartReady)=\"onChartReady($event)\"  (onSearchClicked)=\"onSearchClicked($event)\"></app-tv-chart-exp>\r\n        }\r\n      </div>\r\n    }\r\n    <!--  -->\r\n  </div>\r\n}\r\n\r\n\r\n<div id=\"manager-chart\" class=\"second-inner-div\" >\r\n  <div>\r\n\r\n    <ul class=\"manager-menu\">\r\n      <li>\r\n        <h5 >Manage</h5>\r\n      </li>\r\n      <li class=\"btn-menu\">\r\n        <div class=\"menu-container\">\r\n\r\n          <div  [ngStyle]=\"{display:(multiChartOp?'':'none')}\"  id=\"manager-drawer\"  class=\"multichart-menu\">\r\n\r\n            <div (click)=\"openMultichart(1)\" _ngcontent-mlb-c12=\"\" class=\"{{numberOfCharts==1?'layout-btn layout-btn-active':'layout-btn'}}\"><span _ngcontent-mlb-c12=\"\"><svg _ngcontent-mlb-c12=\"\" height=\"17\" viewBox=\"0 0 19 17\" width=\"19\" xmlns=\"http://www.w3.org/2000/svg\"><path _ngcontent-mlb-c12=\"\" d=\"M2.5 1C1.67 1 1 1.67 1 2.5v12c0 .83.67 1.5 1.5 1.5h14c.83 0 1.5-.67 1.5-1.5v-12c0-.83-.67-1.5-1.5-1.5h-14ZM0 2.5A2.5 2.5 0 0 1 2.5 0h14A2.5 2.5 0 0 1 19 2.5v12a2.5 2.5 0 0 1-2.5 2.5h-14A2.5 2.5 0 0 1 0 14.5v-12Z\" fill=\"currentColor\"></path></svg></span></div>\r\n            <div (click)=\"openMultichart(2)\" _ngcontent-mlb-c12=\"\" class=\"{{numberOfCharts==2?'layout-btn layout-btn-active':'layout-btn'}}\"><span _ngcontent-mlb-c12=\"\"><svg _ngcontent-mlb-c12=\"\" height=\"17\" viewBox=\"0 0 19 17\" width=\"19\" xmlns=\"http://www.w3.org/2000/svg\"><path _ngcontent-mlb-c12=\"\" d=\"M1 2.5C1 1.67 1.67 1 2.5 1H9v15H2.5A1.5 1.5 0 0 1 1 14.5v-12ZM10 16h6.5c.83 0 1.5-.67 1.5-1.5v-12c0-.83-.67-1.5-1.5-1.5H10v15ZM2.5 0A2.5 2.5 0 0 0 0 2.5v12A2.5 2.5 0 0 0 2.5 17h14a2.5 2.5 0 0 0 2.5-2.5v-12A2.5 2.5 0 0 0 16.5 0h-14Z\" fill=\"currentColor\" fill-rule=\"evenodd\"></path></svg></span></div>\r\n            <!-- <div (click)=\"openMultichart(3)\" _ngcontent-mlb-c12=\"\" class=\"{{numberOfCharts==3?'layout-btn layout-btn-active':'layout-btn'}}\"><span _ngcontent-mlb-c12=\"\"><svg _ngcontent-mlb-c12=\"\" height=\"17\" viewBox=\"0 0 19 17\" width=\"19\" xmlns=\"http://www.w3.org/2000/svg\"><path _ngcontent-mlb-c12=\"\" d=\"M1 2.5C1 1.67 1.67 1 2.5 1H9v15H2.5A1.5 1.5 0 0 1 1 14.5v-12ZM10 16h6.5c.83 0 1.5-.67 1.5-1.5V9h-8v7Zm8-8V2.5c0-.83-.67-1.5-1.5-1.5H10v7h8ZM2.5 0A2.5 2.5 0 0 0 0 2.5v12A2.5 2.5 0 0 0 2.5 17h14a2.5 2.5 0 0 0 2.5-2.5v-12A2.5 2.5 0 0 0 16.5 0h-14Z\" fill=\"currentColor\" fill-rule=\"evenodd\"></path></svg></span></div>\r\n            -->\r\n            <div (click)=\"openMultichart(3)\" _ngcontent-mlb-c12=\"\" class=\"{{numberOfCharts==3?'layout-btn layout-btn-active':'layout-btn'}}\"><span  _ngcontent-mlb-c12=\"\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 19 17\" width=\"19\" height=\"17\"><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M1 2.5C1 1.67 1.67 1 2.5 1h14c.83 0 1.5.67 1.5 1.5V8H1V2.5ZM1 9v5.5c0 .83.67 1.5 1.5 1.5H9V9H1Zm9 7h6.5c.83 0 1.5-.67 1.5-1.5V9h-8v7ZM2.5 0A2.5 2.5 0 0 0 0 2.5v12A2.5 2.5 0 0 0 2.5 17h14a2.5 2.5 0 0 0 2.5-2.5v-12A2.5 2.5 0 0 0 16.5 0h-14Z\"></path></svg></span></div>\r\n            <div (click)=\"openMultichart(4)\" _ngcontent-mlb-c12=\"\" class=\"{{numberOfCharts==4?'layout-btn layout-btn-active':'layout-btn'}}\"><span _ngcontent-mlb-c12=\"\"><svg _ngcontent-mlb-c12=\"\" height=\"17\" viewBox=\"0 0 19 17\" width=\"19\" xmlns=\"http://www.w3.org/2000/svg\"><path _ngcontent-mlb-c12=\"\" d=\"M1 2.5C1 1.67 1.67 1 2.5 1H9v7H1V2.5ZM1 9v5.5c0 .83.67 1.5 1.5 1.5H9V9H1Zm9 7h6.5c.83 0 1.5-.67 1.5-1.5V9h-8v7Zm8-8V2.5c0-.83-.67-1.5-1.5-1.5H10v7h8ZM2.5 0A2.5 2.5 0 0 0 0 2.5v12A2.5 2.5 0 0 0 2.5 17h14a2.5 2.5 0 0 0 2.5-2.5v-12A2.5 2.5 0 0 0 16.5 0h-14Z\" fill=\"currentColor\" fill-rule=\"evenodd\"></path></svg></span></div>\r\n          </div>\r\n          @if (isWatchChart) {\r\n            <div class=\"chart-custom-menu-mul\">\r\n              <ul>\r\n                <li (click)=\"goToChartIQ()\">\r\n                  ChartIQ\r\n                </li>\r\n                <li class=\"active\">\r\n                  Trading View\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          }\r\n          <button  name=\"prev-btn\" aria-label=\"previous button\" title=\"Open Multichart\" (click)=\"openMultichartMenu()\"  class='leftRs slider-btn mul-btn'>\r\n            @if (numberOfCharts==1) {\r\n              <svg _ngcontent-mlb-c12=\"\" height=\"17\" viewBox=\"0 0 19 17\" width=\"19\" xmlns=\"http://www.w3.org/2000/svg\"><path _ngcontent-mlb-c12=\"\" d=\"M2.5 1C1.67 1 1 1.67 1 2.5v12c0 .83.67 1.5 1.5 1.5h14c.83 0 1.5-.67 1.5-1.5v-12c0-.83-.67-1.5-1.5-1.5h-14ZM0 2.5A2.5 2.5 0 0 1 2.5 0h14A2.5 2.5 0 0 1 19 2.5v12a2.5 2.5 0 0 1-2.5 2.5h-14A2.5 2.5 0 0 1 0 14.5v-12Z\" fill=\"currentColor\"></path></svg>\r\n            }\r\n            @if (numberOfCharts==2) {\r\n              <svg _ngcontent-mlb-c12=\"\" height=\"17\" viewBox=\"0 0 19 17\" width=\"19\" xmlns=\"http://www.w3.org/2000/svg\"><path _ngcontent-mlb-c12=\"\" d=\"M1 2.5C1 1.67 1.67 1 2.5 1H9v15H2.5A1.5 1.5 0 0 1 1 14.5v-12ZM10 16h6.5c.83 0 1.5-.67 1.5-1.5v-12c0-.83-.67-1.5-1.5-1.5H10v15ZM2.5 0A2.5 2.5 0 0 0 0 2.5v12A2.5 2.5 0 0 0 2.5 17h14a2.5 2.5 0 0 0 2.5-2.5v-12A2.5 2.5 0 0 0 16.5 0h-14Z\" fill=\"currentColor\" fill-rule=\"evenodd\"></path></svg>\r\n            }\r\n            <!--  <svg *ngIf=\"numberOfCharts==3\" _ngcontent-mlb-c12=\"\" height=\"17\" viewBox=\"0 0 19 17\" width=\"19\" xmlns=\"http://www.w3.org/2000/svg\"><path _ngcontent-mlb-c12=\"\" d=\"M1 2.5C1 1.67 1.67 1 2.5 1H9v15H2.5A1.5 1.5 0 0 1 1 14.5v-12ZM10 16h6.5c.83 0 1.5-.67 1.5-1.5V9h-8v7Zm8-8V2.5c0-.83-.67-1.5-1.5-1.5H10v7h8ZM2.5 0A2.5 2.5 0 0 0 0 2.5v12A2.5 2.5 0 0 0 2.5 17h14a2.5 2.5 0 0 0 2.5-2.5v-12A2.5 2.5 0 0 0 16.5 0h-14Z\" fill=\"currentColor\" fill-rule=\"evenodd\"></path></svg> -->\r\n            @if (numberOfCharts==3) {\r\n              <svg _ngcontent-mlb-c12=\"\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 19 17\" width=\"19\" height=\"17\"><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M1 2.5C1 1.67 1.67 1 2.5 1h14c.83 0 1.5.67 1.5 1.5V8H1V2.5ZM1 9v5.5c0 .83.67 1.5 1.5 1.5H9V9H1Zm9 7h6.5c.83 0 1.5-.67 1.5-1.5V9h-8v7ZM2.5 0A2.5 2.5 0 0 0 0 2.5v12A2.5 2.5 0 0 0 2.5 17h14a2.5 2.5 0 0 0 2.5-2.5v-12A2.5 2.5 0 0 0 16.5 0h-14Z\"></path></svg>\r\n            }\r\n            @if (numberOfCharts==4) {\r\n              <svg _ngcontent-mlb-c12=\"\" height=\"17\" viewBox=\"0 0 19 17\" width=\"19\" xmlns=\"http://www.w3.org/2000/svg\"><path _ngcontent-mlb-c12=\"\" d=\"M1 2.5C1 1.67 1.67 1 2.5 1H9v7H1V2.5ZM1 9v5.5c0 .83.67 1.5 1.5 1.5H9V9H1Zm9 7h6.5c.83 0 1.5-.67 1.5-1.5V9h-8v7Zm8-8V2.5c0-.83-.67-1.5-1.5-1.5H10v7h8ZM2.5 0A2.5 2.5 0 0 0 0 2.5v12A2.5 2.5 0 0 0 2.5 17h14a2.5 2.5 0 0 0 2.5-2.5v-12A2.5 2.5 0 0 0 16.5 0h-14Z\" fill=\"currentColor\" fill-rule=\"evenodd\"></path></svg>\r\n            }\r\n\r\n          </button>\r\n          <button  name=\"prev-btn\" aria-label=\"previous button \" title=\"{{manageDrawer=='true'?'Close Drawer':'Open Drawer'}}\" (click)=\"openDrawer()\"  class='leftRs slider-btn accor-btn'>\r\n\r\n            <i class=\"{{manageDrawer=='true'?'icon-angle-down':'icon-angle-up'}}\"></i>\r\n\r\n          </button>\r\n        </div>\r\n\r\n      </li>\r\n    </ul>\r\n\r\n  </div>\r\n\r\n  <div  [ngStyle]=\"{display:(manageDrawer=='true'?'':'none')}\"    id=\"manager-drawer\" class=\"manager-drawer\">\r\n\r\n\r\n    <ul >\r\n      <li (click)=\"manageSection('positions')\" [ngClass]=\"{'active':selectedDrawer=='positions'}\">Positions</li>\r\n      <li  (click)=\"manageSection('orders')\"  [ngClass]=\"{'active':selectedDrawer=='orders'}\">Orders</li>\r\n      <!-- <li  (click)=\"manageSection('closed')\"  [ngClass]=\"{'active':selectedDrawer=='closed'}\">Closed Positions</li>\r\n      <li  (click)=\"manageSection('funds')\"  [ngClass]=\"{'active':selectedDrawer=='funds'}\">Funds</li>\r\n      <li  (click)=\"manageSection('portfolio')\"  [ngClass]=\"{'active':selectedDrawer=='portfolio'}\">Portfolio</li>\r\n      <li  (click)=\"manageSection('notflog')\"  [ngClass]=\"{'active':selectedDrawer=='notflog'}\">Notifications Log</li> -->\r\n      <li style=\"margin-left: auto; \">\r\n\r\n        <button style=\"background-color: transparent !important;\" (click)=\"reloadPage()\" class=\"btn btn-gradient pull-right mr7 btn-repeat btnrepeatnew\"><img  src=\"../assets/images/repeat.png\" width=\"18\" height=\"18\" alt=\"Refresh\"></button>\r\n      </li>\r\n\r\n\r\n    </ul>\r\n    <div id=\"manager-drawer-dragger\" class=\"manager-drawer-dragger\"></div>\r\n    <div class=\"manager-section\">\r\n\r\n      <div  [ngStyle]=\"{display:(((selectedDrawer=='positions')||selectedDrawer=='')?'':'none')}\"  id=\"inner-drawer-sec\" >\r\n        @if (!hidePositions) {\r\n          <div>\r\n            <app-portfolio [isInChart]=\"isInChart\" ></app-portfolio>\r\n            <!-- <ng-template #portfolioComponent></ng-template> -->\r\n          </div>\r\n        }\r\n\r\n      </div>\r\n\r\n      <div  [ngStyle]=\"{display:(selectedDrawer=='orders'?'':'none')}\" id=\"inner-drawer-sec\"  >\r\n        <!-- <h1>Hello 2</h1> -->\r\n        @if (!hideOrderbook) {\r\n          <div>\r\n            <!-- <ng-template #orderbookComponent1></ng-template> -->\r\n            <app-orderbook  [isInChart]=\"isInChart\" ></app-orderbook>\r\n          </div>\r\n        }\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n\r\n<div id=\"search-ele-box\"></div>\r\n<!--\r\n<div class=\"dialog\" *ngIf=\"config.showSearch\">\r\n  <div class=\"dialog-content\">\r\n    <div class=\"dialog-header clearfix\">\r\n      <div class=\"col-sm-12\">\r\n        <h4 class=\"popup-title\">Multi Charts</h4>\r\n      </div>\r\n    </div>\r\n    <div class=\"dialog-section clearfix script-details\">\r\n      <form novalidate=\"\" class=\"ng-untouched ng-pristine ng-valid\" autocomplete=\"off\">\r\n        <div class=\"col-sm-6 col-xs-12\">\r\n          <label>Chart 1: </label>\r\n          <div class=\"brokerage-search\">\r\n            <input class=\"brokerage-search-input\" placeholder=\"Search for scrips by entering minimum 3 letters\"\r\n              name=\"chartSearchInput1\" type=\"text\" (input)=\"onInputPress(1)\" (focus)=\"onFocus(1)\"\r\n              aria-label=\"Brokerage search\" (focusout)=\"selectScrip(null,null)\" [(ngModel)]=\"multiChartConfig.searchInput1\"\r\n              #searchInput1=\"ngModel\" autocomplete=\"off\">\r\n              <i class=\"icon-search\"></i>\r\n              <ul #brokerageUl class=\"brokerage-search-result\" *ngIf=\"!(multiChartConfig.searchFocus!=1)\">\r\n                <li\r\n                  *ngIf=\"!multiChartConfig.results?.length &&  (multiChartConfig.searchInput1?.length >0 || multiChartConfig.searchInput1?.length <= 2) && searchInput1?.dirty\">\r\n                No Record Found</li>\r\n                <li *ngFor=\"let item of multiChartConfig.results\"  (click)=\"selectScrip(item,1)\">\r\n                  <span class=\"symbol\">{{item?.SecName}}</span>\r\n                  <span class=\"name\">{{item?.SecDesc}}</span>\r\n                  <span class=\"exchange\">{{item?.ExchangeSegment}}</span>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-6 col-xs-12\">\r\n            <label>Chart 2: </label>\r\n            <div class=\"brokerage-search\">\r\n              <input class=\"brokerage-search-input\" placeholder=\"Search for scrips by entering minimum 3 letters\"\r\n                name=\"chartSearchInput2\" type=\"text\" (input)=\"onInputPress(2)\" (focus)=\"onFocus(2)\"\r\n                aria-label=\"Brokerage search\" (focusout)=\"selectScrip(null,null)\" [(ngModel)]=\"multiChartConfig.searchInput2\"\r\n                #searchInput2=\"ngModel\" autocomplete=\"off\">\r\n                <i class=\"icon-search\"></i>\r\n                <ul #brokerageUl class=\"brokerage-search-result\" *ngIf=\"!(multiChartConfig.searchFocus!=2)\">\r\n                  <li\r\n                    *ngIf=\"!multiChartConfig.results?.length &&  (multiChartConfig.searchInput2?.length >0 || multiChartConfig.searchInput2?.length <= 2) && searchInput2?.dirty\">\r\n                  No Record Found</li>\r\n                  <li *ngFor=\"let item of multiChartConfig.results\" (click)=\"selectScrip(item,2)\">\r\n                    <span class=\"symbol\">{{item?.SecName}}</span>\r\n                    <span class=\"name\">{{item?.SecDesc}}</span>\r\n                    <span class=\"exchange\">{{item?.ExchangeSegment}}</span>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-6 col-xs-12\" *ngIf=\"multiChartConfig.count>=3\">\r\n              <label>Chart 3: </label>\r\n              <div class=\"brokerage-search\">\r\n                <input class=\"brokerage-search-input\" placeholder=\"Search for scrips by entering minimum 3 letters\"\r\n                  name=\"chartSearchInput3\" type=\"text\" (input)=\"onInputPress(3)\" (focus)=\"onFocus(3)\"\r\n                  aria-label=\"Brokerage search\" (focusout)=\"selectScrip(null,null)\" [(ngModel)]=\"multiChartConfig.searchInput3\"\r\n                  #searchInput3=\"ngModel\" autocomplete=\"off\">\r\n                  <i class=\"icon-search\"></i>\r\n                  <ul #brokerageUl class=\"brokerage-search-result\" *ngIf=\"!(multiChartConfig.searchFocus!=3)\" >\r\n                    <li\r\n                      *ngIf=\"!multiChartConfig.results?.length && (multiChartConfig.searchInput3?.length >0 || multiChartConfig.searchInput3?.length <= 2) && searchInput3?.dirty\">\r\n                    No Record Found</li>\r\n                    <li *ngFor=\"let item of multiChartConfig.results\" (click)=\"selectScrip(item,3)\">\r\n                      <span class=\"symbol\">{{item?.SecName}}</span>\r\n                      <span class=\"name\">{{item?.SecDesc}}</span>\r\n                      <span class=\"exchange\">{{item?.ExchangeSegment}}</span>\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-6 col-xs-12\" *ngIf=\"multiChartConfig.count>=4\">\r\n                <label>Chart 4: </label>\r\n                <div class=\"brokerage-search\">\r\n                  <input class=\"brokerage-search-input\" placeholder=\"Search for scrips by entering minimum 3 letters\"\r\n                    name=\"chartSearchInput4\" type=\"text\" (input)=\"onInputPress(4)\" (focus)=\"onFocus(4)\"\r\n                    aria-label=\"Brokerage search\" (focusout)=\"selectScrip(null,null)\" [(ngModel)]=\"multiChartConfig.searchInput4\"\r\n                    #searchInput4=\"ngModel\" autocomplete=\"off\">\r\n                    <i class=\"icon-search\"></i>\r\n                    <ul #brokerageUl class=\"brokerage-search-result\" *ngIf=\"!(multiChartConfig.searchFocus!=4)\">\r\n                      <li\r\n                        *ngIf=\"!multiChartConfig.results?.length && (multiChartConfig.searchInput4?.length >0 || multiChartConfig.searchInput4?.length <= 2) && searchInput4?.dirty\">\r\n                      No Record Found</li>\r\n                      <li *ngFor=\"let item of multiChartConfig.results\" (click)=\"selectScrip(item,4)\">\r\n                        <span class=\"symbol\">{{item?.SecName}}</span>\r\n                        <span class=\"name\">{{item?.SecDesc}}</span>\r\n                        <span class=\"exchange\">{{item?.ExchangeSegment}}</span>\r\n                      </li>\r\n                    </ul>\r\n                  </div>\r\n                </div>\r\n              </form>\r\n            </div>\r\n            <div class=\"dialog-footer clearfix\">\r\n              <button class=\"btn buy\" (click)=\"openMulticharts()\" [showFocus]=\"true\">Open</button>\r\n              <button class=\"btn sell\" (click)=\"closeSearch()\">Cancel</button>\r\n            </div>\r\n          </div>\r\n        </div> -->\r\n\r\n        <!--   <div class=\"walkthrough-chart\" *ngIf=\"showMultichartWalk\" id=\"chart_walkthrough\">\r\n\r\n        <div class=\"{{showWalkImg?'inner-container':'display-none inner-container'}}\">\r\n          <h3 class=\"text-center\">New features added in Trading View Charts </h3>\r\n          <h5  class=\"text-center\">\r\n            <b>Multi Charts</b>, <b>Track your positions</b> and <b>trade from Charts</b> on Trading View Charts.\r\n          </h5>\r\n          <i class=\"icon-x close-icon \" (click)=\"closeWalkthrough()\"></i>\r\n          <img   src=\"./../../../assets/images/FinalMultiChart.gif\"  (load)=\"showMultichartWalkthrough()\">\r\n\r\n        </div>\r\n\r\n      </div> -->";

/***/ })

}]);