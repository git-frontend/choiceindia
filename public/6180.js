(self["webpackChunkjiffy_upgraded"] = self["webpackChunkjiffy_upgraded"] || []).push([[6180],{

/***/ 66180:
/*!*****************************************************!*\
  !*** ./src/app/chart-iq-module/chart-iq.routing.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChartIqRoutes: () => (/* binding */ ChartIqRoutes)
/* harmony export */ });
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../guards/auth.guard */ 61620);
/* harmony import */ var _guards_basic_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../guards/basic.guard */ 72972);
/* harmony import */ var _tools_module_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tools-module/components */ 39550);
/* harmony import */ var _tools_module_components_advanced_expaned_chart_advanced_expaned_chart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tools-module/components/advanced-expaned-chart/advanced-expaned-chart.component */ 93384);




const ChartIqRoutes = [{
  path: "advanced-charts/:symbol/:segmentId/:token",
  component: _tools_module_components_advanced_expaned_chart_advanced_expaned_chart_component__WEBPACK_IMPORTED_MODULE_3__.AdvancedExpanedChartComponent,
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
      watchlistHidden: true,
      freshChat: false
    },
    fullScreen: true,
    style: ["assets/chartiq/css/stx-chart.css",
    // Chart API 'assets/chartiq/'; // Chart API
    "assets/chartiq/css/chartiq.css",
    // Chart UI
    "assets/chartiq/css/normalize.css", "assets/chartiq/css/_ciq-components.scss", "assets/chartiq/css/chartiq.scss", "assets/chartiq/css/_ciq-night.scss", "assets/chartiq/css/_ciq-extras.scss", "assets/chartiq/css/_ciq-drawing-palette.scss", "assets/chartiq/css/_ciq-full-screen.scss", "assets/chartiq/css/_ciq-fonts.scss", "assets/chartiq/examples/markers/markersSample.css", "assets/chartiq/examples/markers/videoSample.css", "assets/chartiq/examples/markers/tradeAnalyticsSample.css", "assets/chartiq/plugins/signaliq/signaliqDialog.css", "assets/chartiq/plugins/signaliq/signaliq-marker.css", "assets/chartiq/plugins/tfc/tfc.css", "assets/chartiq/plugins/tfc/tfc.scss", "assets/chartiq/css/font-awesome.css", "assets/chartiq/css/_tfc-themes.scss"],
    script: ["assets/chartiq/js/chartiq.js", "assets/chartiq/js/thirdparty/html2canvas.min.js"]
  }
}, {
  path: "advanced-charts-watch/:symbol/:segmentId/:token",
  component: _tools_module_components_advanced_expaned_chart_advanced_expaned_chart_component__WEBPACK_IMPORTED_MODULE_3__.AdvancedExpanedChartComponent,
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
      watchlistHidden: true,
      freshChat: false
    },
    fullScreen: false,
    style: ["assets/chartiq/css/stx-chart.css",
    // Chart API 'assets/chartiq/'; // Chart API
    "assets/chartiq/css/chartiq.css",
    // Chart UI
    "assets/chartiq/css/normalize.css", "assets/chartiq/css/_ciq-components.scss", "assets/chartiq/css/chartiq.scss", "assets/chartiq/css/_ciq-night.scss", "assets/chartiq/css/_ciq-extras.scss", "assets/chartiq/css/_ciq-drawing-palette.scss", "assets/chartiq/css/_ciq-full-screen.scss", "assets/chartiq/css/_ciq-fonts.scss", "assets/chartiq/examples/markers/markersSample.css", "assets/chartiq/examples/markers/videoSample.css", "assets/chartiq/examples/markers/tradeAnalyticsSample.css", "assets/chartiq/plugins/signaliq/signaliqDialog.css", "assets/chartiq/plugins/signaliq/signaliq-marker.css", "assets/chartiq/css/font-awesome.css", "assets/chartiq/plugins/tfc/tfc.css", "assets/chartiq/plugins/tfc/tfc.scss", "assets/chartiq/css/font-awesome.css", "assets/chartiq/css/_tfc-themes.scss"],
    script: ["assets/chartiq/js/chartiq.js", "assets/chartiq/js/thirdparty/html2canvas.min.js"]
  }
}, {
  path: "advanced-multi-charts",
  component: _tools_module_components__WEBPACK_IMPORTED_MODULE_2__.MultiChartComponent,
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  data: {
    config: {
      header: false,
      footer: false,
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
  path: "advanced-multi-charts-watch",
  component: _tools_module_components__WEBPACK_IMPORTED_MODULE_2__.MultiChartComponent,
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  data: {
    config: {
      header: true,
      footer: false,
      indices: false,
      betaFooter: false,
      ticker: false,
      watchlist: false,
      watchlistHidden: true,
      freshChat: false
    },
    fullScreen: false
  }
}];

/***/ }),

/***/ 93384:
/*!****************************************************************************************************!*\
  !*** ./src/app/tools-module/components/advanced-expaned-chart/advanced-expaned-chart.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdvancedExpanedChartComponent: () => (/* binding */ AdvancedExpanedChartComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _advanced_expaned_chart_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./advanced-expaned-chart.component.html?ngResource */ 78328);
/* harmony import */ var _advanced_expaned_chart_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./advanced-expaned-chart.component.scss?ngResource */ 90522);
/* harmony import */ var _advanced_expaned_chart_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_advanced_expaned_chart_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/analytics/analytics.service */ 50213);
/* harmony import */ var src_app_services_rest_post_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/rest/post-login.service */ 4135);
/* harmony import */ var src_app_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/shared-data/shared-data.service */ 46013);
/* harmony import */ var src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/utils/utils.service */ 89893);
/* harmony import */ var _post_login_module_orderbook_orderbook_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../post-login-module/orderbook/orderbook.component */ 14970);
/* harmony import */ var _post_login_module_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../post-login-module/portfolio/portfolio.component */ 64530);
/* harmony import */ var _advanced_chart_advanced_chart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../advanced-chart/advanced-chart.component */ 49084);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 60177);













let AdvancedExpanedChartComponent = class AdvancedExpanedChartComponent {
  constructor(activatedRoute, analytics, shared, router, renderer, rests, utils) {
    this.activatedRoute = activatedRoute;
    this.analytics = analytics;
    this.shared = shared;
    this.router = router;
    this.renderer = renderer;
    this.rests = rests;
    this.utils = utils;
    this.managerheight = 0;
    this.params = {};
    this.subscriptionList = [];
    this.subscribeChanges();
    this.isInChart = true;
    this.innerDrawerHeight = localStorage.getItem('innerDrawerHeight') ? localStorage.getItem('innerDrawerHeight') : "160px";
    this.selectedDrawer = 'positions';
    this.globalListenFuncUPArr = [];
  }
  ngOnInit() {
    // this.orderPlaceChartSubscription = this.utils.broadcastObservable('orderPlacedFromChart').subscribe(() => {
    //   this.hideOrderbookTemp=true
    //   setTimeout(() => {
    //     this.hideOrderbookTemp=false
    //   }, 2000);
    //   console.log("orderPlacedFromChart")
    // //  this.getOrderBookData()
    // });
    this.subscriptionList.push(this.utils.broadcastObservable('openChartDrawer').subscribe(data => {
      console.log("order placed ", data);
      if (data && data.page) {
        this.manageDrawer = 'true';
        this.selectedDrawer = data.page;
      }
    }));
    window.onresize = this.reportWindowSize;
    this.utils.checkAndUpdateWeeklyFeature("chartExperience", 2);
    this.isWatchlistChart = location.pathname.indexOf('advanced-charts-watch') > -1;
    this.manageDrawer = localStorage.getItem('manageDrawer') ? localStorage.getItem('manageDrawer') : 'false';
    if (this.manageDrawer == 'true') this.selectedDrawer = localStorage.getItem('selectedDrawer') ? localStorage.getItem('selectedDrawer') : 'positions';
  }
  ngAfterViewInit() {}
  reportWindowSize() {
    if (location.pathname.indexOf('advanced-charts') > -1) {
      setTimeout(() => {
        if (document.getElementById('manager-chart')) this.managerheight = location.pathname.indexOf('advanced-charts-watch') > -1 ? document.getElementById('manager-chart').offsetHeight + 60 : document.getElementById('manager-chart').offsetHeight * 1.01;
        //  let doc = this._tvWidget['_iFrame'].contentDocument || this._tvWidget['_iFrame'].contentWindow.document
        //let ele = document.getElementById('chart-custom-chart')
        let ele = document.getElementsByTagName('cq-context');
        console.log("reportWindowSize called", ele);
        if (ele && ele[0]) {
          // [style.height]="'calc(100vh - ' + managerheight+'px)'"
          ele[0]['style'].setProperty('height', 'calc(100vh - ' + this.managerheight + 'px)'); //.height=100 + "%"
          // ele.style.height=(window.innerHeight-120) + "px"
          // ele.setAttribute('width', window.innerWidth + "px")
          // ele.setAttribute('height', (window.innerHeight-200) + "px")
        }
      }, 60);
    }
  }
  openOrders(event) {
    this.openOrdersAvailable = event;
  }
  subscribeChanges() {
    this.routeParamsSubscription = this.activatedRoute.params.subscribe(params => {
      this.params = params;
      this.hideChart = true;
      setTimeout(() => {
        //  console.log("params",params)
        this.hideChart = false;
      }, 600);
      /*   if( this.config.userId&& this.config.sessionId){
          this.utils.storeUserId(this.config.userId)
          this.utils.storeSessionId(this.config.sessionId)
        } */
    });
  }
  /**
   * Go to tradingview chart
   */
  goToTradingView() {
    localStorage.setItem("chartType", 'true');
    let userId = this.utils.getUserId();
    window.Moengage.add_user_attribute("chartType", "TRADING_VIEW");
    if (userId && userId != 'guest') {
      this.utils.updatePreference('ChartType', "TRADING_VIEW");
      this.savePreferencetoAPI();
    }
    if (location.pathname.indexOf('advanced-charts-watch') > -1) {
      // this.router.navigate(['/trading-view-charts-watch/'+this.params.symbol+"/"+this.params.segmentId+"/"+this.params.token],{queryParams:{random:Math.floor(Math.random()*200)}})
      this.utils.setTrackMoeEvent('clickedOn', {
        "chartType": "ChartIQ",
        pageName: "Watchlist",
        buttonName: "ChartSwitch",
        "User_ID": this.utils.getUserId() || 'guest',
        "IP": this.shared.IPAddress
      });
      this.analytics.emitEvent('clickedOn', this.utils.getUserId() || 'guest', JSON.stringify({
        "chartType": "ChartIQ",
        pageName: "Watchlist",
        buttonName: "ChartSwitch",
        "IP": this.shared.IPAddress
      }), 1);
      this.router.navigateByUrl('/tv/trading-view-charts-watch/' + this.params.symbol + "/" + this.params.segmentId + "/" + this.params.token);
    } else {
      this.utils.setTrackMoeEvent('clickedOn', {
        "chartType": "ChartIQ",
        pageName: "Expanded",
        buttonName: "ChartSwitch",
        "User_ID": this.utils.getUserId() || 'guest',
        "IP": this.shared.IPAddress
      });
      this.router.navigate(['/tv/trading-view-charts/' + this.params.symbol + "/" + this.params.segmentId + "/" + this.params.token]);
      this.analytics.emitEvent('clickedOn', this.utils.getUserId() || 'guest', JSON.stringify({
        "chartType": "ChartIQ",
        pageName: "Expanded",
        buttonName: "ChartSwitch",
        "IP": this.shared.IPAddress
      }), 1);
    }
  }
  /** to save user preferences */
  savePreferencetoAPI() {
    let request = {
      "preference_name": "ChartType",
      "preference_type": "ChartType",
      "client_id": this.utils.getUserId(),
      "config": "TRADING_VIEW",
      "platform": "Web"
    };
    let userAccountStatus = this.utils.getUserAccountStatus();
    if (!(!userAccountStatus || !userAccountStatus.onboardStatus || userAccountStatus.onboardStatus == 'C')) {
      return;
    }
    this.rests.saveUserPreference(request, true).subscribe(res => {
      if (res.status_code && res.status_code == 200) {}
    }, err => {});
  }
  ngOnDestroy() {
    this.subscriptionList.forEach(ele => {
      ele.unsubscribe();
    });
    if (this.orderPlaceChartSubscription) this.orderPlaceChartSubscription.unsubscribe();
    if (this.routeParamsSubscription) this.routeParamsSubscription.unsubscribe();
  }
  openDrawer() {
    if (!this.selectedDrawer) {
      this.selectedDrawer = localStorage.getItem('selectedDrawer') ? localStorage.getItem('selectedDrawer') : 'positions';
      localStorage.setItem('selectedDrawer', this.selectedDrawer);
    }
    this.manageDrawer = this.manageDrawer == 'true' ? 'false' : 'true';
    localStorage.setItem("manageDrawer", this.manageDrawer + "");
    setTimeout(() => {
      if (document.getElementById('manager-chart'))
        //    this.managerheight= location.pathname.indexOf('advanced-charts-watch')>-1?(document.getElementById('manager-chart').offsetHeight + 60):(document.getElementById('manager-chart').offsetHeight * 1.01)
        this.reportWindowSize();
    }, 100);
    if (this.manageDrawer == 'true') {
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
      //     //   console.log("this.mousemove")
      //     // this.globalListenFuncMove = this.renderer.listen('document', 'mousemove', e => {
      //     // //  
      //     //   let container = document.getElementById("inner-drawer-sec");
      //     //   if (!this.isResizing) {
      //     //     return;
      //     //   }
      //     //   console.log( container.clientHeight, container.scrollHeight,"container.style.height",e.clientY, container.offsetTop, container.offsetHeight)
      //     //   // console.log("1111 1",container.clientHeight - (e.clientY - container.offsetTop) + "px")
      //     //   // console.log("1111 2",container.offsetHeight - (e.clientY - container.offsetTop) + "px")
      //     //   console.log("1111 3",container.scrollHeight - (e.clientY - container.offsetTop) + "px")
      //     //   if(this.isResizing){
      //     //   if(!((container.scrollHeight - ((e.clientY) - container.offsetTop))<=160)){ 
      //     //     this.innerDrawerHeight=container.scrollHeight - (e.clientY - container.offsetTop) + "px" 
      //     //     localStorage.setItem("innerDrawerHeight",this.innerDrawerHeight)
      //     //     container.style.height = container.scrollHeight - ((e.clientY) - container.offsetTop) + "px";
      //     //     //   setTimeout(() => {
      //     //          if(document.getElementById('manager-chart'))
      //     //          this.managerheight= location.pathname.indexOf('advanced-charts-watch')>-1?(document.getElementById('manager-chart').offsetHeight + 60):(document.getElementById('manager-chart').offsetHeight * 1.01)
      //     //     }
      //     //    // }, 1);
      //     //   }else{
      //     //     // if((container.scrollHeight - ((e.clientY) - container.offsetTop))<=160){  
      //     //     //   this.isResizing=false
      //     //     //   this.openDrawer()
      //     //     // }
      //     //   }
      //     // });
      //     // this.elRef.nativeElement.addEventListener("mouseup", (e)=>{
      //     //   
      //     // })
      // //     if(this.symbols&&this.symbols.length){
      // //       this.symbols.forEach((ele,i)=>{
      // //         let ele1= document.getElementById("chart"+i)
      // //         console.log("mousedown2 ele1",ele1)
      // //         if(ele1){
      // //           let   ele = ele1.getElementsByTagName('iframe')[0]
      // //           console.log("mousedown2 ele1 2",ele)
      // //           let doc =ele.contentDocument || ele.contentWindow.document
      // //           // handle.addEventListener('onmousedown',(e)=>{
      // //           //   
      // //           // })
      // //           // this.globalListenFuncUPArr.push(this.renderer.listen(doc, 'mouseup', e => {
      // //           //     
      // //           //     this.isResizing = false;
      // //           //   }))
      // //         //this.reportWindowSize("chart"+i)
      // //     }
      // //   })
      // // }
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
      //     }, 600);
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
  reloadPage() {
    let prev = this.selectedDrawer;
    this.selectedDrawer = "";
    if (prev == 'orders') {
      this.hideOrderbook = true;
    }
    setTimeout(() => {
      this.selectedDrawer = prev;
      this.hideOrderbook = false;
    }, 100);
    localStorage.setItem('selectedDrawer', this.selectedDrawer);
  }
  manageSection(val) {
    this.selectedDrawer = val;
    localStorage.setItem('selectedDrawer', this.selectedDrawer);
  }
  getStx(stx) {
    this.reportWindowSize();
  }
  static {
    this.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute
    }, {
      type: src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_2__.AnalyticsService
    }, {
      type: src_app_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__.SharedDataService
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Renderer2
    }, {
      type: src_app_services_rest_post_login_service__WEBPACK_IMPORTED_MODULE_3__.PostLoginService
    }, {
      type: src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_5__.UtilsService
    }];
  }
};
AdvancedExpanedChartComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-advanced-expaned-chart',
  template: _advanced_expaned_chart_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _advanced_chart_advanced_chart_component__WEBPACK_IMPORTED_MODULE_8__.AdvancedChartComponent, _post_login_module_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_7__.PortfolioComponent, _post_login_module_orderbook_orderbook_component__WEBPACK_IMPORTED_MODULE_6__.OrderbookComponent],
  styles: [(_advanced_expaned_chart_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute, src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_2__.AnalyticsService, src_app_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__.SharedDataService, _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router, _angular_core__WEBPACK_IMPORTED_MODULE_10__.Renderer2, src_app_services_rest_post_login_service__WEBPACK_IMPORTED_MODULE_3__.PostLoginService, src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_5__.UtilsService])], AdvancedExpanedChartComponent);


/***/ }),

/***/ 39550:
/*!**************************************************!*\
  !*** ./src/app/tools-module/components/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdvancedChartComponent: () => (/* reexport safe */ _advanced_chart_advanced_chart_component__WEBPACK_IMPORTED_MODULE_0__.AdvancedChartComponent),
/* harmony export */   AdvancedChartWrapperComponent: () => (/* reexport safe */ _advanced_chart_wrapper_component__WEBPACK_IMPORTED_MODULE_2__.AdvancedChartWrapperComponent),
/* harmony export */   MultiChartComponent: () => (/* reexport safe */ _multi_chart_multi_chart_component__WEBPACK_IMPORTED_MODULE_1__.MultiChartComponent)
/* harmony export */ });
/* harmony import */ var _advanced_chart_advanced_chart_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./advanced-chart/advanced-chart.component */ 49084);
/* harmony import */ var _multi_chart_multi_chart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./multi-chart/multi-chart.component */ 27416);
/* harmony import */ var _advanced_chart_wrapper_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./advanced-chart-wrapper.component */ 56612);




/***/ }),

/***/ 27416:
/*!******************************************************************************!*\
  !*** ./src/app/tools-module/components/multi-chart/multi-chart.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MultiChartComponent: () => (/* binding */ MultiChartComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _multi_chart_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./multi-chart.component.html?ngResource */ 19672);
/* harmony import */ var _multi_chart_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./multi-chart.component.scss?ngResource */ 20862);
/* harmony import */ var _multi_chart_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_multi_chart_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 27468);
/* harmony import */ var src_app_services_rest_tool_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/rest/tool.service */ 91387);
/* harmony import */ var src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/utils/utils.service */ 89893);
/* harmony import */ var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/analytics/analytics.service */ 50213);
/* harmony import */ var src_app_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/shared-data/shared-data.service */ 46013);
/* harmony import */ var _advanced_chart_wrapper_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../advanced-chart-wrapper.component */ 56612);













// import { CIQ } from '../../../../assets/chartiq/js/componentUI';
let MultiChartComponent = class MultiChartComponent {
  constructor(location2, utils, analytics, shared, zone, cdr, renderer, route, rest, activatedRoute) {
    this.location2 = location2;
    this.utils = utils;
    this.analytics = analytics;
    this.shared = shared;
    this.zone = zone;
    this.cdr = cdr;
    this.renderer = renderer;
    this.route = route;
    this.rest = rest;
    this.activatedRoute = activatedRoute;
    this.config = {
      symbols: {},
      lastTicks: {},
      symbols2: {}
    };
    this.common_id = 0;
    this.multiChartStxx = {};
    this.maximizedChart = {};
  }
  maximizedClicked(event) {
    this.maximizedChart = JSON.parse(event);
    //  console.log("maximizedClicked",event)
  }
  getStx2(event) {
    // console.log("getStx2 event2",JSON.parse(JSON.stringify(event.layout||[])))
    // if(event&&event.layout&&event.layout.symbols&&event.layout.symbols[0]&&event.layout.symbols[0].symbolObject&&event.layout.symbols[0].symbolObject.idid){
    //   this.multiChartStxx[event.layout.symbols[0].symbolObject.idid]=event
    //   console.log("this.multiChartStxx: ",this.multiChartStxx)
    // }
  }
  ngOnInit() {
    this.isWatchlistChart = location.pathname.indexOf('advanced-multi-charts-watch') > -1;
    let chartArray = ['0', '1', '2', '3'];
    chartArray.forEach(ele => {
      if (localStorage) {
        let chartLayout = localStorage.getItem("myChartLayoutchart" + ele);
        // console.log("Called myChartLayoutchart 2 "+ele+" :",chartLayout)
        // If the chart already has localstorage settings then leave it alone
        if (chartLayout !== null) {
          // remove stored symbol from chart0
          let tmpLayout = JSON.parse(chartLayout);
          //  console.log("Called myChartLayoutchart 3 "+ele+" :",tmpLayout)
          // Deleting the symbol here which will be set via attribute on the new chart component
          delete tmpLayout.symbols;
          // delete tmpLayout.panels;
          localStorage.setItem('myChartLayoutchart' + ele, JSON.stringify(tmpLayout));
        }
      }
    });
    this.routeParamsSubscription = this.activatedRoute.queryParams.subscribe(params => {
      if (params.symbols) {
        this.urlSymbols = params.symbols;
        let symbols = params.symbols.split('|');
        this.getSymbolDetails(symbols);
      }
    });
    let ele = document.getElementById('main-container');
    if (ele) {
      if (location.pathname.indexOf('advanced-multi-charts-watch') == -1) {
        ele.classList.add("chart-container-sec-mul");
        let user_id = this.utils.getUserId();
        ele.classList.add(!user_id || user_id == 'guest' ? "chart-container-sec-pre" : "chart-container-sec");
      } else {
        ele.classList.add("chart-container-sec-mul-watch");
        let user_id = this.utils.getUserId();
        ele.classList.add(!user_id || user_id == 'guest' ? "chart-container-sec-pre" : "chart-container-sec");
      }
      //  console.log("main-container added 1" )
    }
    if (ele && location.pathname.indexOf('advanced-multi-charts') > -1 && location.pathname.indexOf('advanced-multi-charts-watch') == -1) {
      ele.classList.add("mt0");
    }
    if (ele && location.pathname.indexOf('advanced-multi-charts-watch') == -1) {
      ele.classList.add("mt-adv-0");
    }
    this.socketSubscription = this.utils.broadcastObservable('watchlist').subscribe(data => {
      // console.log("quotes getTicks data broadcastObservable00 Multi:2 ",this.config)
      data = data[0];
      let symbol = Object.values(this.config.symbols2).find(element => {
        return data[1] == element.SegmentId && data[7] == element.Token;
      });
      if (symbol) {
        //   console.log(symbol, "quotes getTicks data broadcastObservable00 Multi:3 ")
        let priceDivisor = Number(data[399]);
        let previousTick = this.config.lastTicks[symbol.SegmentId + '@' + symbol.Token] || {};
        let isHighPrice = symbol.HighPrice && symbol.HighPrice != data[77];
        let isLowPrice = symbol.LowPrice && symbol.LowPrice != data[78];
        symbol.HighPrice = isHighPrice || !symbol.HighPrice ? Number(data[77]) : symbol.HighPrice;
        symbol.LowPrice = isLowPrice || !symbol.LowPrice ? Number(data[78]) : symbol.LowPrice;
        this.config.lastTicks[symbol.SegmentId + '@' + symbol.Token] = {
          DT: new Date(this.utils.changeCurrentDateFormat(data[74], 'YYYY-MM-DD HHmmss', 'YYYY-MM-DD HH:mm:ss')),
          LTP: Number(isHighPrice ? data[77] : isLowPrice ? data[78] : data[8] == 0 ? data[76] : data[8]) / priceDivisor,
          //if ltp = 0 then show prevclose (24/05/2021)
          Open: data[8] == 0 ? Number(data[76]) / priceDivisor : Number(data[75]) / priceDivisor,
          //if ltp = 0 then show prevclose (24/05/2021)
          High: data[8] == 0 ? Number(data[76]) / priceDivisor : Number(data[77]) / priceDivisor,
          //if ltp = 0 then show prevclose (24/05/2021)
          Low: data[8] == 0 ? Number(data[76]) / priceDivisor : Number(data[78]) / priceDivisor,
          //if ltp = 0 then show prevclose (24/05/2021)
          LTQ: Number(data[79]) - (previousTick.Volume || 0),
          //Number(data[9]) + (previousTick.LTQ || 0),
          Volume: Number(data[79])
        };
      }
    });
    if (window['jiffyAPI2']) window['jiffyAPI2'].getTicks = this.getUpdatedTicks.bind(this);else {
      window['jiffyAPI2'] = {};
      window['jiffyAPI2'].getTicks = this.getUpdatedTicks.bind(this);
    }
    if (window['jiffyAPI2']) window['jiffyAPI2'].changeSymbol = this.changeSymbol.bind(this);else {
      window['jiffyAPI2'] = {};
      window['jiffyAPI2'].changeSymbol = this.changeSymbol.bind(this);
    }
    if (this.listenerFn) {
      this.listenerFn();
    }
    this.listenerFn = this.renderer.listen('window', 'visibilitychange', event => {
      if (event.target.visibilityState == 'visible') {
        // this.zone.run(() => {
        //   console.log("this.multiChartStxx",this.multiChartStxx)
        //   Object.keys(this.multiChartStxx).forEach(ele=>{
        //     if(this.config.symbols[ele]){
        //     this.config.symbols[ele].stx=this.multiChartStxx[ele]
        //     this.config.symbols[ele].common_id=this.common_id
        //     this.common_id++
        //     this.config.common_id=this.common_id
        //   }
        //   })
        //   console.log("eleeleele",this.config)
        //   this.cdr.detectChanges()
        // })
      }
    });
    // if(location.pathname.indexOf('trading-view-charts-watch')>-1 ||location.pathname.indexOf('tv-charts-watch')>-1 || location.pathname.indexOf('advanced-multi-charts-watch')>-1 )
    // this.renderer.setStyle(document.body, 'overflow', 'hidden');
  }
  ngAfterViewInit() {
    // setTimeout(() => {
    // this.zone.run(() => {
    //   if(location.pathname.indexOf('trading-view-charts-watch')>-1 ||location.pathname.indexOf('tv-charts-watch')>-1 || location.pathname.indexOf('advanced-charts-watch')>-1 )
    //   console.log('overflow', 'hidden',"called")
    //   this.renderer.setStyle(document.body, 'overflow', 'hidden');
    //   })
    //}, 3000);
  }
  changeSymbol(symbolObject, stx, chartid) {
    // console.log(chartid,"getStx2 event mul",JSON.parse(JSON.stringify(stx.layout)))
    // console.log("getStx2 event mul",stx.layout.symbols)
    if (chartid && stx && stx.layout) {
      this.multiChartStxx[chartid] = stx;
      if (this.config.symbols && chartid && this.config.symbols[chartid]) this.config.symbols[chartid].stx = stx;
      //   console.log("this.multiChartStxx212: ",stx)
    } else {
      // console.log("getStx2 event mul2222",stx.layout.symbols[0].symbolObject.idid)
      // console.log("getStx2 event mul222",stx.layout.symbols[0])
    }
    //this.getStx.emit(stx);
    // this.config.symbols[id] ? this.utils.unSubscribeMultitouchline([this.config.symbols[id]]) : '';
    //this.utils.subscribeMultitouchline([symbolObject]);
    symbolObject.isTradingAllowed = this.utils.isSegmentAllowed(symbolObject.SegmentId);
    //console.log(symbolObject,"CHANGE SYMBOL MUL this.config.symbols", this.config)
    let params = this.activatedRoute.snapshot.queryParams;
    let symbols = [];
    let symbols2 = params.symbols.split('|');
    let index = 0;
    symbols2.forEach((ele, i) => {
      if (i == symbolObject.idid.split("")[symbolObject.idid.length - 1]) {
        //   console.log(i+" this.config.symbolsthis.config.symbols ",this.config.symbols)
        //   console.log(i+" this.config.symbolsthis.config.symbols ",symbolObject)
        this.config.symbols2['chart' + i] = symbolObject;
        symbols.push(symbolObject.SegmentId + '@' + symbolObject.Token);
        let sym = ele.split("@");
        // console.log(ele,"unSubscribeMultitouchline advanced change multi ",[{ SegmentId: sym[0], Token:  sym[1] }])
        // console.log("SubscribeMultitouchline advanced change multi",[{ SegmentId: symbolObject.SegmentId, Token:  symbolObject.Token }])
        this.utils.subscribeMultitouchline([{
          SegmentId: symbolObject.SegmentId,
          Token: symbolObject.Token
        }]);
        this.utils.unSubscribeMultitouchline([{
          SegmentId: Number(sym[0]),
          Token: Number(sym[1])
        }]);
      } else {
        symbols.push(ele);
      }
    });
    if (symbols.length) {
      this.location2.replaceState((location.pathname.indexOf('advanced-charts-watch') > -1 || location.pathname.indexOf('advanced-multi-charts-watch') > -1 ? '/cq/advanced-multi-charts-watch?symbols=' : '/cq/advanced-multi-charts?symbols=') + symbols.join('|'));
    }
    // this.rest.getKeyInfo({ "UserId": this.utils.getUserId(), "SessionId": this.utils.getSessionId(), "Token": Number(symbolObject.Token), "SegmentId": Number(symbolObject.SegmentId) }).subscribe((res) => {
    //   if (res.Status == "Success" && res.Response) {
    //     this.config.symbols['chart' + index] = { ...this.config.symbols['chart' + index] || {}, ...res.Response || {} };
    //   }
    // });
  }
  getUpdatedTicks(symbolObject) {
    //console.log(symbolObject,"quotes getTicks getUpdatedTicks multi",this.config)
    let symbolId = symbolObject.SegmentId + '@' + symbolObject.Token;
    if (this.config.lastTicks[symbolId]) {
      let data = JSON.parse(JSON.stringify(this.config.lastTicks[symbolId]));
      //this.config.lastTicks[symbolId] = null;
      return data;
    }
  }
  ngOnDestroy() {
    // console.log("unSubscribeMultitouchline multi advanced ondestroy",Object.values(this.config.symbols))
    this.utils.unSubscribeMultitouchline(Object.values(this.config.symbols));
    if (this.socketSubscription) this.socketSubscription.unsubscribe();
    let ele = document.getElementById('main-container');
    if (ele) {
      // console.log("main-container removed 1" )
      ele.classList.remove("chart-container-sec-mul");
      ele.classList.remove("chart-container-sec");
      ele.classList.remove("chart-container-sec-watch");
      ele.classList.remove("chart-container-sec-mul-watch");
      ele.classList.remove("mt0");
      ele.classList.remove("mt-adv-0");
    }
    //this.renderer.setStyle(document.body, 'overflow', 'auto');
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
        3: 'left down',
        4: 'right up'
      },
      2: {
        3: 'right',
        4: 'left down'
      },
      3: {
        4: 'right down'
      }
    };
    return ob[id][len];
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
    (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.forkJoin)(forkJoinList).subscribe(data => {
      data.forEach((item, index) => {
        if (item.Status == "Success" && item.Response) {
          this.config.symbols['chart' + index] = item.Response;
          this.config.symbols['chart' + index].isTradingAllowed = this.utils.isSegmentAllowed(this.config.SegmentId);
          this.config.symbols['chart' + index].symbol = item.Response.SecName;
          // console.log("Multhis.multiChartStxx",this.multiChartStxx)
          this.config.symbols['chart' + index].class = this.getClass(index, data.length);
        }
      });
      // console.log("Multichart data", this.config)
      (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.forkJoin)(keyInfoList).subscribe(keyInfoData => {
        keyInfoData.forEach((item, index) => {
          if (item.Status == "Success" && item.Response) {
            this.config.symbols['chart' + index] = {
              ...(this.config.symbols['chart' + index] || {}),
              ...(item.Response || {})
            };
            this.config.symbols['chart' + index].class = this.getClass(index, keyInfoData.length);
            //  console.log("this.config.symbols",this.config.symbols)
            // if (localStorage) {
            //   let chartLayout = localStorage.getItem("myChartLayoutchart"+index);
            //   console.log("cleared 1st")
            //   // If the chart already has localstorage settings then leave it alone
            //   if (
            //     chartLayout !== null ){
            //     // remove stored symbol from chart0
            //     let tmpLayout = JSON.parse(chartLayout);
            //     // Deleting the symbol here which will be set via attribute on the new chart component
            //     delete tmpLayout.symbols;
            //     localStorage.setItem(
            //       'myChartLayoutchart'+index,
            //       JSON.stringify(tmpLayout)
            //     );
            //   }
            // }
          }
          //           setTimeout(() => {
          // let chartEntries=[{ symbol: "IBM" }, { symbol: "AAPL" }]
          //             const config =  getCustomConfig({
          //               symbol: this.config.symbols['chart0'].Symbol, 
          //               chartId: 'chart0',
          //               onChartReady:null,
          //               symbolInfo:this.config.symbols['chart0']
          //             })
          //             this.config.symbols
          //             const store = new CIQ.NameValueStore();
          //             config.multiChartId = "_ciq";
          //             config.addOns.tableView.coverContainer =
          //               ".ciq-multi-chart-container-wrapper";
          //             store.get("multiCharts" + config.multiChartId, (err, chartConfig) => {
          //               const { colCount } = chartConfig || {};
          //               const stxArr = new CIQ.UI.Multichart().createCharts(
          //                 {
          //                   chartsConfig: {
          //                     chartEntries,
          //                     colCount
          //                   }
          //                 },
          //                 config
          //               );
          //               //...then add whatever code you wish!
          //               Object.assign(window, { CIQ, stxArr });
          //             });
          //           }, 1000);
        });
      });
      // if (localStorage) {
      // 	let chartLayout = localStorage.getItem("myChartLayoutchart0");
      // 	console.log("cleared 1st")
      // 	// If the chart already has localstorage settings then leave it alone
      // 	if (
      // 		chartLayout !== null ){
      // 		// remove stored symbol from chart0
      // 		let tmpLayout = JSON.parse(chartLayout);
      // 		// Deleting the symbol here which will be set via attribute on the new chart component
      // 		delete tmpLayout.symbols;
      // 		localStorage.setItem(
      // 			'myChartLayoutchart0',
      // 			JSON.stringify(tmpLayout)
      // 		);
      // 	}
      // }
      // console.log("SubscribeMultitouchline multi advanced getdetails",Object.values(this.config.symbols))
      // this.utils.subscribeMultitouchline(Object.values(this.config.symbols));
      //  console.log(this.config.symbols,"this.config.symbols")
      // this.iframeSrc = this.getIframeSrcURL();
    }, err => {});
  }
  /*   private getIframeSrcURL() {
      return this.sanitizer.bypassSecurityTrustResourceUrl('/assets/multicharts/multicharts.html?charts=' + (Object.keys(this.config.symbols).length) +
        '&ciq-random=' + (new Date().valueOf()));
    } */
  /**
   * Go to tradingview chart
   */
  goToTradingView() {
    localStorage.setItem("chartType", 'true');
    let params = location.search.split("=");
    let urlSymbols = params[1];
    let symbols = urlSymbols.indexOf("%7C") > -1 ? urlSymbols.split("%7C") : urlSymbols.split("|");
    urlSymbols = symbols.join("|");
    let userId = this.utils.getUserId();
    window.Moengage.add_user_attribute("chartType", "TRADING_VIEW");
    if (userId && userId != 'guest') {
      this.utils.updatePreference('ChartType', "TRADING_VIEW");
      this.savePreferencetoAPI();
    }
    if (location.pathname.indexOf('advanced-multi-charts-watch') > -1) {
      this.utils.setTrackMoeEvent('clickedOn', {
        "chartType": "ChartIQ",
        pageName: "Watchlist",
        buttonName: "ChartSwitch",
        "User_ID": this.utils.getUserId() || 'guest',
        "IP": this.shared.IPAddress
      });
      // this.router.navigate(['/trading-view-charts-watch/'+this.params.symbol+"/"+this.params.segmentId+"/"+this.params.token],{queryParams:{random:Math.floor(Math.random()*200)}})
      this.analytics.emitEvent('clickedOn', this.utils.getUserId() || 'guest', JSON.stringify({
        "chartType": "ChartIQ",
        pageName: "Watchlist",
        buttonName: "ChartSwitch",
        "IP": this.shared.IPAddress
      }), 1);
      this.route.navigate(['/tv/tv-charts-watch'], {
        queryParams: {
          symbols: urlSymbols
        }
      });
    } else {
      this.utils.setTrackMoeEvent('clickedOn', {
        "chartType": "ChartIQ",
        pageName: "Expanded",
        buttonName: "ChartSwitch",
        "User_ID": this.utils.getUserId() || 'guest',
        "IP": this.shared.IPAddress
      });
      this.route.navigate(['/tv/tv-charts'], {
        queryParams: {
          symbols: urlSymbols
        }
      });
      this.analytics.emitEvent('clickedOn', this.utils.getUserId() || 'guest', JSON.stringify({
        "chartType": "ChartIQ",
        pageName: "Expanded",
        buttonName: "ChartSwitch",
        "IP": this.shared.IPAddress
      }), 1);
    }
    //  symbols
  }
  /** to save user preferences */
  savePreferencetoAPI() {
    let request = {
      "preference_name": "ChartType",
      "preference_type": "ChartType",
      "client_id": this.utils.getUserId(),
      "config": "TRADING_VIEW",
      "platform": "Web"
    };
    let userAccountStatus = this.utils.getUserAccountStatus();
    if (!(!userAccountStatus || !userAccountStatus.onboardStatus || userAccountStatus.onboardStatus == 'C')) {
      return;
    }
    this.rest.saveUserPreference(request, true).subscribe(res => {
      if (res.status_code && res.status_code == 200) {}
    }, err => {});
  }
  static {
    this.ctorParameters = () => [{
      type: _angular_common__WEBPACK_IMPORTED_MODULE_8__.Location
    }, {
      type: src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_3__.UtilsService
    }, {
      type: src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_4__.AnalyticsService
    }, {
      type: src_app_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__.SharedDataService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Renderer2
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
    }, {
      type: src_app_services_rest_tool_service__WEBPACK_IMPORTED_MODULE_2__.ToolService
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute
    }];
  }
};
MultiChartComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-multi-chart',
  template: _multi_chart_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  imports: [_advanced_chart_wrapper_component__WEBPACK_IMPORTED_MODULE_6__.AdvancedChartWrapperComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.KeyValuePipe],
  styles: [(_multi_chart_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__metadata)("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_8__.Location, src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_3__.UtilsService, src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_4__.AnalyticsService, src_app_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__.SharedDataService, _angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone, _angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectorRef, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Renderer2, _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router, src_app_services_rest_tool_service__WEBPACK_IMPORTED_MODULE_2__.ToolService, _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute])], MultiChartComponent);


/***/ }),

/***/ 90522:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/tools-module/components/advanced-expaned-chart/advanced-expaned-chart.component.scss?ngResource ***!
  \*****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ 8564);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 98557);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.manager-drawer {
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
  cursor: row-resize;
  /* top: 0px; */
  margin-top: -12px;
}

#inner-drawer-sec {
  position: relative;
  overflow-y: scroll;
}
#inner-drawer-sec .company-page-wrap {
  padding: 0px;
  margin: 0px;
}

#manager-chart {
  width: 100%;
  background: #EFEFF3;
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

#manager-chart {
  position: absolute;
  z-index: 99;
  bottom: 0px;
}`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 20862:
/*!*******************************************************************************************!*\
  !*** ./src/app/tools-module/components/multi-chart/multi-chart.component.scss?ngResource ***!
  \*******************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ 8564);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 98557);
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
.left {
  height: 100%;
  position: absolute;
  width: 50%;
  padding-right: 10px;
}

.right {
  left: 50%;
  height: 100%;
  position: absolute;
  width: 50%;
}

.up {
  top: 0;
  height: 50%;
}

.down {
  top: 50%;
  height: 50%;
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
}`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 78328:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/tools-module/components/advanced-expaned-chart/advanced-expaned-chart.component.html?ngResource ***!
  \*****************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div  id=\"main-multi-tv-chart-adv\">\r\n\r\n\r\n  <div  [ngClass]=\"{'chart-custom-chart':isWatchlistChart}\" id=\"chart-custom-chart\">\r\n    @if (!hideChart) {\r\n      <cq-advanced-chart (getStx)=\"getStx($event)\" [openOrdersAvailable]=\"openOrdersAvailable\"></cq-advanced-chart>\r\n    }\r\n    @if (hideChart) {\r\n      <img class=\"loader jhjh\" src=\"assets/images/loader.gif\" />\r\n    }\r\n\r\n  </div>\r\n  <div id=\"manager-chart\" >\r\n    <div>\r\n\r\n      <ul class=\"manager-menu\">\r\n        <li>\r\n          <h5 class=\"{{manageDrawer=='true'?'text-blue':''}}\">Manage</h5>\r\n        </li>\r\n        <li class=\"btn-menu\">\r\n          <div class=\"menu-container\">\r\n\r\n\r\n            @if (isWatchlistChart) {\r\n              <div class=\"chart-custom-menu-mul\" >\r\n                <ul>\r\n                  <li  class=\"active\">\r\n                    ChartIQ\r\n                  </li>\r\n                  <li (click)=\"goToTradingView()\">\r\n                    Trading View\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            }\r\n\r\n            <button  name=\"prev-btn\" aria-label=\"previous button \" title=\"{{manageDrawer=='true'?'Close Drawer':'Open Drawer'}}\" (click)=\"openDrawer()\"  class='leftRs slider-btn accor-btn'>\r\n\r\n              <i class=\"{{manageDrawer=='true'?'icon-angle-down':'icon-angle-up'}}\"></i>\r\n\r\n            </button>\r\n          </div>\r\n\r\n        </li>\r\n      </ul>\r\n\r\n    </div>\r\n\r\n    <div [style.display]=\"manageDrawer=='true'?'block':'none'\"  id=\"manager-drawer\" class=\"manager-drawer\">\r\n\r\n\r\n      <ul >\r\n        <li (click)=\"manageSection('positions')\" [ngClass]=\"{'active':selectedDrawer=='positions'}\">Positions</li>\r\n        <li  (click)=\"manageSection('orders')\"  [ngClass]=\"{'active':selectedDrawer=='orders'}\">Orders</li>\r\n        <li style=\"margin-left: auto; \">\r\n\r\n          <button style=\"background-color: transparent !important;\" (click)=\"reloadPage()\" class=\"btn btn-gradient pull-right mr7 btn-repeat btnrepeatnew\"><img  src=\"../assets/images/repeat.png\" width=\"18\" height=\"18\" alt=\"Refresh\"></button>\r\n        </li>\r\n\r\n\r\n      </ul>\r\n      <div id=\"manager-drawer-dragger\" class=\"manager-drawer-dragger\"></div>\r\n      <div class=\"manager-section\">\r\n\r\n        @if (selectedDrawer=='positions') {\r\n          <div id=\"inner-drawer-sec\" [style.height]=\"innerDrawerHeight\">\r\n            <div >\r\n              <app-portfolio [isInChart]=\"isInChart\" ></app-portfolio>\r\n            </div>\r\n          </div>\r\n        }\r\n\r\n        @if (!hideOrderbook) {\r\n          <div [style.display]=\"selectedDrawer=='orders'?'block':'none'\" id=\"inner-drawer-sec\"  [style.height]=\"innerDrawerHeight\">\r\n            <div >\r\n              <app-orderbook (openOrders)=\"openOrders($event)\"  [isInChart]=\"isInChart\"></app-orderbook>\r\n            </div>\r\n          </div>\r\n        }\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";

/***/ }),

/***/ 19672:
/*!*******************************************************************************************!*\
  !*** ./src/app/tools-module/components/multi-chart/multi-chart.component.html?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!-- <div class=\"column left\"><cq-advanced-chart-wrapper chartId=\"chart0\" symbol=\"AAPL\"></cq-advanced-chart-wrapper></div>\r\n<div class=\"column right\"><cq-advanced-chart-wrapper chartId=\"chart1\" symbol=\"MSFT\"></cq-advanced-chart-wrapper></div> -->\r\n\r\n<!-- A unique id for each cq-instant-chart element is required for saving and restoring the layout. -->\r\n@if ((config?.symbols)) {\r\n  @for (item of config?.symbols | keyvalue; track item; let i = $index) {\r\n    <div class=\"{{maximizedChart&&maximizedChart.id?(item?.key==maximizedChart.id?'maximized':'maximize-hide'): item?.value?.class}} mul-ch\" >\r\n      <!--      <pre>{{item?.value |json}}</pre> -->\r\n      <cq-advanced-chart-wrapper chartId=\"{{item?.key}}\" id=\"{{item?.key}}\" (maximizedClickedInner)=\"maximizedClicked($event)\" (getStx2)=\"getStx2($event)\"  symbol=\"{{item?.value?.Symbol}}\" [stxSet]=\"item?.value?.stx\"\r\n      [symbolInfo]=\"item?.value\"></cq-advanced-chart-wrapper>\r\n    </div>\r\n  }\r\n  <!--     <div class=\"column\" *ngIf=\"config?.symbols?.chart0\">\r\n  <cq-advanced-chart-wrapper chartId=\"chart0\" symbol=\"{{config?.symbols?.chart0?.Symbol}}\"\r\n  symbolInfo=\"{{config?.symbols?.chart0?.value}}\"></cq-advanced-chart-wrapper>\r\n</div>\r\n<div class=\"column\" *ngIf=\"config?.symbols?.chart1\">\r\n  <cq-advanced-chart-wrapper chartId=\"chart1\" symbol=\"{{config?.symbols?.chart1?.Symbol}}\"\r\n  symbolInfo=\"{{config?.symbols?.chart1?.value}}\"></cq-advanced-chart-wrapper>\r\n</div>\r\n<div class=\"column\" *ngIf=\"config?.symbols?.chart2\">\r\n  <cq-advanced-chart-wrapper chartId=\"chart2\" symbol=\"{{config?.symbols?.chart2?.Symbol}}\"\r\n  symbolInfo=\"{{config?.symbols?.chart2?.value}}\"></cq-advanced-chart-wrapper>\r\n</div>\r\n<div class=\"column\" *ngIf=\"config?.symbols?.chart3\">\r\n  <cq-advanced-chart-wrapper chartId=\"chart3\" symbol=\"{{config?.symbols?.chart3?.Symbol}}\"\r\n  symbolInfo=\"{{config?.symbols?.chart3?.value}}\"></cq-advanced-chart-wrapper>\r\n</div> -->\r\n}\r\n\r\n@if (isWatchlistChart) {\r\n  <div class=\"chart-custom-menu\">\r\n    <ul>\r\n      <li class=\"active\">\r\n        ChartIQ\r\n      </li>\r\n      <li (click)=\"goToTradingView()\">\r\n        Trading View\r\n      </li>\r\n    </ul>\r\n  </div>\r\n}";

/***/ })

}]);