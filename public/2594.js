(self["webpackChunkjiffy_upgraded"] = self["webpackChunkjiffy_upgraded"] || []).push([[2594],{

/***/ 9423:
/*!**********************************************************!*\
  !*** ./src/app/common-module/header/header.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.component.html?ngResource */ 17193);
/* harmony import */ var _header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.component.scss?ngResource */ 97359);
/* harmony import */ var _header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! angular-oauth2-oidc */ 1244);
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngx-webstorage */ 12426);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs/operators */ 96354);
/* harmony import */ var src_app_guards_login_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/guards/login-guard.service */ 42617);
/* harmony import */ var src_app_services_api_urls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api-urls */ 26702);
/* harmony import */ var src_app_services_cryptography_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/cryptography.service */ 67224);
/* harmony import */ var src_app_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/firestore/firestore.service */ 49125);
/* harmony import */ var src_app_services_firestore_push_messaging_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/firestore/push-messaging.service */ 91533);
/* harmony import */ var src_app_services_rest_tool_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/rest/tool.service */ 91387);
/* harmony import */ var src_app_services_sockets_socket_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/sockets/socket.service */ 6312);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/environment */ 45312);
/* harmony import */ var _directives_dropdown_dropdown_open_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../directives/dropdown/dropdown-open.directive */ 55720);
/* harmony import */ var _directives_dropdown_dropdown_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../directives/dropdown/dropdown.directive */ 51429);
/* harmony import */ var _directives_show_focus_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../directives/show-focus.directive */ 57862);
/* harmony import */ var _pipes_segment_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../pipes/segment.pipe */ 39995);
/* harmony import */ var _pipes_value_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../pipes/value.pipe */ 50615);
/* harmony import */ var _services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../services/analytics/analytics.service */ 50213);
/* harmony import */ var _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../services/shared-data/shared-data.service */ 46013);
/* harmony import */ var _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../services/utils/utils.service */ 89893);
/* harmony import */ var _product_authorization_popup_product_authorization_popup_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../product-authorization-popup/product-authorization-popup.component */ 99555);
/* harmony import */ var _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./../../../assets/libs/esm-moment.min.js */ 29483);
/* harmony import */ var _services_rest_common_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./../../services/rest/common.service */ 18056);
/* harmony import */ var _services_sockets_broadcaster__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./../../services/sockets/broadcaster */ 28510);








/** Import Moment JS Library*/






















/** header component view and scss linking */
let HeaderComponent = class HeaderComponent {
  /**
   * dependency injection and variable intialization
   * @param commonService for api call
   * @param formBuilder form defination
   * @param googleAnalyticsEventsService for gtm
   * @param active for present route
   * @param zone for delay
   * @param utils for processing of data
   * @param router for navigation between different route
   * @param renderer for popup
   * @param location for change in url
   * @param sharedDataService for sharing data between two component
   * @param broadcaster for broadcasting event from one component to another
   */
  constructor(oauthService, commonService, googleAnalyticsEventsService, active, zone, utils, cryptography, router, renderer, location, broadcaster, apiURL, sharedDataService, messaging, toolsService, socket, storage, loginGuardService, firebaseService) {
    this.oauthService = oauthService;
    this.commonService = commonService;
    this.googleAnalyticsEventsService = googleAnalyticsEventsService;
    this.active = active;
    this.zone = zone;
    this.utils = utils;
    this.cryptography = cryptography;
    this.router = router;
    this.renderer = renderer;
    this.location = location;
    this.broadcaster = broadcaster;
    this.apiURL = apiURL;
    this.sharedDataService = sharedDataService;
    this.messaging = messaging;
    this.toolsService = toolsService;
    this.socket = socket;
    this.storage = storage;
    this.loginGuardService = loginGuardService;
    this.firebaseService = firebaseService;
    this.msgPopupEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_22__.EventEmitter();
    /**
     * start postion of search in api
     */
    this.startPos = 0;
    /**
     * No of record to seen in api
     */
    this.limit = 25;
    /**
     * present selected li
     */
    this.selectedItem = 0;
    /** to open shortcut key popup*/
    this.shortcutKeyPopup = false;
    /**
     * tabs in search
     */
    this.activeTab = 1;
    /** drop up flag */
    this.dropUp = false;
    this.selectedUser = {};
    this.userList = [];
    this.userAccountStatus = {};
    this.data = [];
    this.notifications = [];
    this.searchData = [];
    this.recentSearchData = [];
    this.filterList = [];
    this.updateNotifications = [];
    this.searchConfig = {
      isSearchOpened: false,
      data: {
        1: [],
        2: [],
        3: [],
        4: [],
        5: []
      },
      startPos: {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0
      },
      limit: 25,
      activeTab: 1,
      tabString: ""
    };
    //this.getMarketData();
    this.isAlgobullsAuthenticationServiceHit = false;
    this.isStocksEmojiAuthenticationServiceHit = false;
    this.isStocksAuthenticationServiceHit = false;
    this.menuClickedName = "";
    // this.showStocksEmojiProduct = true;
    // this.showStockantsProduct = true;
  }
  clickout(event) {
    //   console.log(event,"event.target.className",event.target.className)
    if (event && event.target && event.target.className && typeof event.target.className.indexOf === "function" && event.target.className.indexOf("mega-dropdown") > -1) {
      this.selectedItem = 0;
      this.megasearchVisible = false;
      this.searchValue = "";
      this.searchData.length = 0;
      this.recentSearchData = [];
      this.activeTab = 1;
      this.searchConfig = {
        isSearchOpened: false,
        data: {
          1: [],
          2: [],
          3: [],
          4: [],
          5: []
        },
        startPos: {
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: 0
        },
        limit: 25,
        activeTab: 1,
        tabString: ""
      };
    }
  }
  ngAfterViewInit() {
    this.initCustomMarquee();
  }
  initCustomMarquee() {
    const railCon = document.querySelector(".rail-container"),
      rail = document.getElementById("carousel-rail"),
      btnLeftCon = document.getElementById("btnLeftCon"),
      btnRightCon = document.getElementById("btnRightCon"),
      tags = document.getElementsByClassName("carousel-tag");
    if (railCon && rail && btnLeftCon && btnRightCon && tags) {
      let mouseDown = false;
      let startX, scrollLeft, mDwnOntag;
      let startDragging = function (e) {
        railCon["style"].scrollBehavior = "auto";
        mouseDown = true;
        startX = e.pageX - railCon["offsetLeft"];
        scrollLeft = railCon.scrollLeft;
      };
      let stopDragging = function (event) {
        railCon["style"].scrollBehavior = "smooth";
        mouseDown = false;
      };
      railCon.addEventListener("mousemove", e => {
        e.preventDefault();
        if (!mouseDown) {
          return;
        }
        const x = e["pageX"] - railCon["offsetLeft"];
        const scroll = x - startX;
        railCon.scrollLeft = scrollLeft - scroll;
        showHideBtns(scrollLeft - scroll);
      });
      // Add the event listeners
      railCon.addEventListener("mousedown", startDragging, false);
      railCon.addEventListener("mouseup", stopDragging, false);
      railCon.addEventListener("mouseleave", stopDragging, false);
      btnRightCon.addEventListener("click", () => {
        railCon.scrollLeft = railCon.scrollLeft + railCon["offsetWidth"] / 2;
        showHideBtns(railCon.scrollLeft + railCon["offsetWidth"] / 2);
      });
      btnLeftCon.addEventListener("click", () => {
        railCon.scrollLeft = railCon.scrollLeft - railCon["offsetWidth"] / 2;
        showHideBtns(railCon.scrollLeft - railCon["offsetWidth"] / 2);
      });
      window.addEventListener("mousedown", e => {
        if (e.target["id"].startsWith("tag")) {
          mDwnOntag = e.pageX * e.pageY;
        }
      });
      window.addEventListener("mouseup", e => {
        if (e.target["id"].startsWith("tag")) {
          if (mDwnOntag - e.pageX * e.pageY === 0) {
            Array.from(tags).forEach(tag => {
              tag.classList.remove("tag-selected");
            });
            e.target["classList"].add("tag-selected");
          }
        }
      });
      let showHideBtns = railConLeft => {
        if (railConLeft <= 0) btnLeftCon.classList.add("d-none");else btnLeftCon.classList.remove("d-none");
        if (railConLeft >= rail.scrollWidth - railCon["offsetWidth"]) btnRightCon.classList.add("d-none");else btnRightCon.classList.remove("d-none");
      };
      showHideBtns(railCon.scrollLeft);
    }
  }
  /**
   * Life Cycle Hook for Destruction
   */
  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
    if (this.keyPressSubscription) this.keyPressSubscription.unsubscribe();
    if (this.walkThroughSubscription) this.walkThroughSubscription.unsubscribe();
    if (this.popupCloseSubscription) this.popupCloseSubscription.unsubscribe();
    if (this.watchlistNameSubscription) this.watchlistNameSubscription.unsubscribe(); // to unsubscribe watchlistNameSubscription (15/03/2021)
    if (this.scripAddSubscription) this.scripAddSubscription.unsubscribe(); // to unsubscribe scripAddSubscription (15/03/2021)
    if (this.scripRemoveSubscription) this.scripRemoveSubscription.unsubscribe(); // to unsubscribe scripRemoveSubscription (15/03/2021)
    this.utils.unSubscribeMultitouchline(this.indices, "header");
    if (this.multiTouchlineSubscription) this.multiTouchlineSubscription.unsubscribe();
    if (this.socketStatusSubscription) this.socketStatusSubscription.unsubscribe();
    if (this.activeWindowSubscription) this.activeWindowSubscription.unsubscribe();
    if (this.preLoginSubscription) this.preLoginSubscription.unsubscribe();
    if (this.schemeListingSubscription) this.schemeListingSubscription.unsubscribe();
  }
  /** on page load */
  ngOnInit() {
    this.selectedUser = localStorage.getItem('selectedUser') ? JSON.parse(localStorage.getItem('selectedUser')) : {};
    if (this.selectedUser.FullName) {
      let name = this.selectedUser.FullName.split(" ");
      let first = name[0].charAt(0);
      let second = name[2] ? name[2].charAt(0) : name[1] ? name[1].charAt(0) : "";
      this.selectedUser.Initials = first + "" + second;
      this.selectedUser.firstName = name[0] || 'User';
    } else {
      this.selectedUser.Initials = "U";
    }
    this.selectedUserId = this.selectedUser.UserId;
    setInterval(() => {
      this.indicesVisibility = !this.indicesVisibility;
    }, 3000);
    console.log("sharedDataService", this.sharedDataService.userId);
    this.userList = localStorage.getItem('userList') ? JSON.parse(localStorage.getItem('userList')) : [];
    if (!this.userList || this.userList.length == 0) {
      // this.getUserList()
    }
    this.userAccountStatus = this.utils.getUserAccountStatus();
    this.sharedDataService.isSSO = localStorage.getItem('isSSO') == 'true';
    this.subscription = this.router.events.subscribe(event => {
      // document.activeElement['blur']();
      // if (event instanceof RouteConfigLoadStart) {
      //   this.loadingRouteConfig = true;
      // } else if (event instanceof RouteConfigLoadEnd) {
      //   this.loadingRouteConfig = false;
      // }
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_23__.NavigationEnd) {
        this.activeClass = false;
      }
    });
    this.subscribeNewNotification();
    this.visitedNotificationChanges();
    this.menuClickedName = "";
    // this.getSGBData();
    this.watchlistNames = this.utils.getWatchListName(-1) || {}; // to get watchlist name array (15/03/2021)
    this.watchListSubscriptions(); // to subscribe watchlist subscriptions (15/03/2021)
    this.messaging.requestPermission();
    this.messaging.receiveNotification();
    // this.utils.observe("userId").subscribe((value: any) => {
    //   value ? this.messaging.updateToken() : "";
    //   this.notifications = this.utils.getNotifications();
    //   this.notificationBadge = 0;
    //   if (this.notifications && this.notifications.length > 0) {
    //     this.notificationBadge = this.notifications.filter((notify) => {
    //       return !notify.isRead;
    //     }).length;
    //   }
    // });
    // this.fetchResearchCategory();
    this.utils.broadcastObservable("notifications").subscribe(value => {
      if (value && value[this.utils.getUserId()]) {
        let notificationData = value[this.utils.getUserId()];
        this.notifications = this.updateErrors(notificationData);
        this.notificationBadge = this.notifications.filter(notify => {
          return !notify.isRead;
        }).length;
      }
    });
    this.utils.observe("sessionId").subscribe(value => {
      if (value && value.trim().length) {
        this.sharedDataService.sessionId = this.cryptography.decryptText(value);
      } else {
        this.sharedDataService.sessionId = null;
      }
    });
    this.utils.broadcastObservable("openSearch").subscribe(() => {
      setTimeout(() => {
        if (!this.megasearchVisible) this.responsiveSearch();
      }, 250);
    });
    this.popupCloseSubscription = this.utils.broadcastObservable("closePopups").subscribe(data => {
      this.closeShortcutKeyPopup();
      this.closeNotification();
    });
    this.keyPressSubscription = this.utils.broadcastObservable("escapeKeyPressed").subscribe(() => {
      this.isSignOut ? this.cancelSignout() : this.showPreLogin ? this.closePreLogin() : ""; // to close prelogin popup on press of escape Key (15/03/2021)
      this.closeSearch();
    });
    this.walkThroughSubscription = this.broadcaster.on("searchWalkThrgh").subscribe(res => {
      let string = res["id"];
      let viewName = document.getElementById(string);
      let coordinate = viewName.getBoundingClientRect();
      this.sharedDataService.showWalkThrough["left"] = coordinate["left"];
      this.sharedDataService.showWalkThrough["top"] = coordinate["bottom"] + 20;
      document.getElementById("iconSearch").click();
    });
    // this.gotoWlkThrgh()
    window.addEventListener("scroll", () => {
      this.zone.run(() => {
        if ((document.body.scrollTop || document.documentElement.scrollTop) > 0) {
          this.isScroll = true;
        } else {
          this.isScroll = false;
        }
      });
    });
    this.showPreLogin = false; // to reset showPreLogin flag (15/03/2021)
    this.watchListNameUpdatedSubscription = this.broadcaster.on("watchListNameUpdated").subscribe(data => {
      // watchListNameUpdatedSubscription (28/04/2021)
      if (data) {
        this.watchlistNames = this.utils.getWatchListName(-1) || {}; // to get watchlist name array (15/03/2021)
      }
    });
    this.indicesList = [[{
      Token: 26000,
      SegmentId: 1,
      IndexName: "NIFTY 50",
      mappedSegmentId: 1,
      companyName: "nifty50",
      type: "indices"
    }, {
      Token: 26009,
      SegmentId: 1,
      IndexName: "BANKNIFTY",
      mappedSegmentId: 1,
      companyName: "niftybank",
      type: "indices"
    }, {
      Token: 26037,
      SegmentId: 1,
      IndexName: "FINNIFTY",
      mappedSegmentId: 1,
      companyName: "niftyfinservice",
      type: "indices"
    }, {
      Token: 19000,
      SegmentId: 3,
      IndexName: "SENSEX",
      mappedSegmentId: 3,
      companyName: "sensex",
      type: "indices"
    }, {
      Token: 26017,
      SegmentId: 1,
      IndexName: "INDIAVIX",
      mappedSegmentId: 1,
      companyName: "indiavix",
      type: "indices"
    }, {
      Token: 26074,
      SegmentId: 1,
      IndexName: "MIDCPNIFTY",
      mappedSegmentId: 1,
      companyName: "niftymidcap50",
      type: "indices"
    },
    // { "Token": 572, "SegmentId": 6, "IndexName": "MCXGOLDEX", 'mappedSegmentId': 6, 'companyName': 'mcxicomdexgold', 'type': 'indices' },
    // { "Token": 579, "SegmentId": 6, "IndexName": "MCXCRUDEX", 'mappedSegmentId': 6, 'companyName': 'mcxicomdexcrudeoil', 'type': 'indices' },
    {
      Token: 26046,
      SegmentId: 1,
      IndexName: "NIFTYSMALL",
      mappedSegmentId: 1,
      companyName: "niftysmlcap100",
      type: "indices"
    }, {
      Token: 26008,
      SegmentId: 1,
      IndexName: "NIFTY IT",
      mappedSegmentId: 1,
      companyName: "niftyit",
      type: "indices"
    }, {
      Token: 26013,
      SegmentId: 1,
      IndexName: "NIFTY NEXT 50",
      mappedSegmentId: 1,
      companyName: "niftynext50",
      type: "indices"
    }, {
      Token: 26018,
      SegmentId: 1,
      IndexName: "NIFTY PHARMA",
      mappedSegmentId: 1,
      companyName: "niftypharma",
      type: "indices"
    }, {
      Token: 26019,
      SegmentId: 1,
      IndexName: "NIFTY INFRA",
      mappedSegmentId: 1,
      companyName: "niftyinfra",
      type: "indices"
    }, {
      Token: 1,
      SegmentId: 14,
      IndexName: "USDINR",
      mappedSegmentId: 14,
      companyName: "usdinr",
      type: "indices"
    }]];
    this.concatedList = this.indicesList.reduce((card1, card2) => {
      return card1.concat(card2);
    });
    this.getSocketResponse();
    this.getMultiTouchLineData();
    if ((!this.sharedDataService.userId || this.sharedDataService.userId == "guest") && document.hasFocus()) {
      // if (this.preLoginSubscription) this.getMultiTouchLineData(true);
      if (this.preLoginSubscription) this.preLoginSubscription.unsubscribe();
      // this.preLoginSubscription = timer(60000, 60000).subscribe(() => {
      //   this.getMultiTouchLineData(true);
      // });
    } else {
      if (this.preLoginSubscription) this.preLoginSubscription.unsubscribe();
    }
    // this.utils.broadcastObservable('productAuthorization').subscribe((type) => {
    //   this.handleProductsAuthorization(type);
    // });
    if (this.utils.getProductRedirectURL()) {
      this.handleProductsAuthorization(this.utils.getProductRedirectURL());
      this.utils.setProductRedirectURL("");
    }
    let value = this.firebaseService.getRemoteConfig("menu_show_hide", response => {
      if (response) {
        response = JSON.parse(response);
        this.showJiffyGlobal = response["more"]["services"]["jiffyGlobal"];
      }
    });
    this.firebaseService.getRemoteConfig("show_stocks_emoji_product", response => {
      if (response) {
        this.showStocksEmojiProduct = response === "true" ? true : false;
      }
    });
    this.firebaseService.getRemoteConfig("show_stockants_product", response => {
      if (response) {
        this.showStockantsProduct = response === "true" ? true : false;
      }
    });
    this.firebaseService.getRemoteConfig("show_tradetron_product", response => {
      if (response) {
        this.showTradetronProduct = response === "true" ? true : false;
      }
    });
    this.firebaseService.getRemoteConfig("show_algocrab_product", response => {
      if (response) {
        this.showAlgocrabProduct = response === "true" ? true : false;
      }
    });
  }
  /**
   * To open popup , asking confirmation for logout
   */
  showSignoutConfirm() {
    this.renderer.setStyle(document.body, "overflow", "hidden");
    this.renderer.addClass(document.body, "modal_open");
    this.isSignOut = true;
    this.logoutAll = false;
  }
  /**
   * To open popup , close confirmation popup for logout
   */
  cancelSignout() {
    this.renderer.setStyle(document.body, "overflow", "auto");
    this.renderer.removeClass(document.body, "modal_open");
    this.isSignOut = false;
  }
  /** to close shortcut key popup  */
  closeShortcutKeyPopup() {
    this.shortcutKeyPopup = false;
    this.renderer.setStyle(document.body, "overflow", "auto");
    this.renderer.removeClass(document.body, "modal_open");
  }
  /**
   * to be writen by vipul
   */
  activateRoute(route) {
    this.sharedDataService.fromRoute = route;
    this.sharedDataService.searchVisible = false;
    if (route.indexOf("margin-span-calculator") > -1) {
      this.googleAnalyticsEventsService.onMarginCalculatorClick("On click of Margin calculator");
    }
  }
  /**
   * to be writen by vipul
   */
  navigateRoute(route, matcher) {
    this.sharedDataService.fromRoute = route;
    if (route.indexOf("upcoming-ipo-list") > -1) {
      this.googleAnalyticsEventsService.emitEvent("visitedIPOfromMenu", this.utils.getUserId() || "guest", this.sharedDataService.IPAddress, 1);
    }
    if (route.indexOf("tbills") > -1) {
      this.googleAnalyticsEventsService.emitEvent("visitedTbillsfromMenu", this.utils.getUserId() || "guest", this.sharedDataService.IPAddress, 1);
    }
    if (route.indexOf("/overview") > -1 || route.indexOf("/global-indices") > -1 || route.indexOf("listing") > -1 || route.indexOf("oi-spurts") > -1) {
      this.router.navigate([route]);
    } else if (route.indexOf("-ipo-") > -1) {
      window.open(location.origin + route, "_self");
    } else if (location.pathname.indexOf(matcher) >= 0 && ((location.pathname.indexOf("gainers") > -1 || location.pathname.indexOf("losers") > -1 || location.pathname.indexOf("value") > -1 || location.pathname.indexOf("volume") > -1) && (route.indexOf("gainers") > -1 || route.indexOf("losers") > -1 || route.indexOf("value") > -1 || route.indexOf("volume") > -1) || location.pathname.indexOf("option-chain") > -1 && route.indexOf("option-chain") > -1)) {
      this.utils.broadcast("routeResuseMenu", {
        route: route
      });
    } else {
      this.router.navigate([route]);
    }
  }
  naviagteMessageRoute(route, matcher) {
    this.sharedDataService.fromRoute = route;
    if (location.pathname.indexOf(matcher) >= 0) {
      this.utils.broadcast("routeResuseMenu", {
        route: route
      });
    } else {
      this.router.navigate([route]);
    }
  }
  /**
   * to be writen by vipul
   */
  navigateToLogin() {
    this.sharedDataService.userId = null;
    this.router.navigate(["/auth/login"]);
  }
  /**
   * to be writen by vipul
   */
  getNotifications() {
    this.notficationsOpen = true;
    this.notificationBadge = 0;
    this.sharedDataService.searchVisible = false;
    if (!this.notficationsOpen && this.notifications && this.notifications.length > 0) {
      this.notifications.forEach((element, index) => {
        element.isRead = true;
      });
      this.utils.updateNotifications(this.notifications, true);
      this.notificationBadge = 0;
    } else {
      let notificationData = this.utils.getNotifications();
      this.notifications = this.updateErrors(notificationData);
    }
    this.utils.setTrackMoeEvent("visitedNotifications", {
      User_ID: this.utils.getUserId() || "guest",
      IP: this.sharedDataService.IPAddress
    });
    this.googleAnalyticsEventsService.emitEvent("visitedNotifications", this.utils.getUserId() || "guest", this.sharedDataService.IPAddress, 1);
  }
  /**
   * to be writen by vipul
   */
  closeNotification() {
    this.notficationsOpen = false;
    if (this.notifications && this.notifications.length > 0) {
      this.notifications.forEach((element, index) => {
        element.isRead = true;
      });
      this.utils.updateNotifications(this.notifications, true);
      this.notificationBadge = 0;
    }
  }
  /**
   * redirect to change password component
   */
  gotoChangePassword() {
    this.router.navigate(["client/settings/" + this.utils.getUserId() + "/changePassword"]);
  }
  /**
   * redirect to change PIN component
   */
  gotoChangePin() {
    this.router.navigate(["client/settings/" + this.utils.getUserId() + "/changePin"]);
  }
  gotoReferAndEarn() {
    this.router.navigate(["client/refer-and-earn"]);
  }
  /**
   * redirect to profile component
   */
  gotoProfile() {
    this.router.navigate(["client/settings/" + this.utils.getUserId() + "/profile"]);
  }
  /**
   * user logouts and redirects to home page
   *
   * Clears login details cache
   */
  signOut() {
    this.closeSearch();
    // , "logoffAll": this.logoutAll
    let request = {
      userId: this.utils.getUserId(),
      sessionId: this.utils.getSessionId() || "",
      ip: this.utils.get("address") || "",
      mode: 11,
      deviceId: this.utils.get("fingerprint") || "",
      deviceType: "W"
    };
    this.commonService.logout(request).subscribe(data => {
      if (data.Status === "Success") {
        this.utils.postFeatureCount();
        this.utils.clearLoginDetails();
        this.utils.clear("navigateToMutualFunds");
        this.sharedDataService.userId = null;
        // this.fetchResearchCategory("guest");
        this.isSignOut = false;
        this.renderer.setStyle(document.body, "overflow", "auto");
        this.renderer.removeClass(document.body, "modal_open");
        this.googleAnalyticsEventsService.logoutEvent(request);
        // if (location.pathname == "/") this.utils.generateGuestToken();
        this.router.navigate(["/auth/login"]);
        this.sharedDataService.saveRoutes("");
        // this.utils.broadcast("generateGuestSession", {});
        if (window["fcWidget"]) {
          window["fcWidget"].close();
          // window['fcWidget'].destroy();
          window["fcWidget"].init({
            token: src_environments_environment__WEBPACK_IMPORTED_MODULE_9__.environment.freshChatToken,
            host: "https://wchat.freshchat.com",
            externalId: null
          });
          window["fcWidget"].user.clear().then(function () {}, function () {});
        }
      } else {
        this.utils.error("Error", data.Reason || "Something Went Wrong, Please Try again Later");
      }
    });
  }
  signOutSSo() {
    this.utils.postFeatureCount();
    this.utils.clear("navigateToMutualFunds");
    this.sharedDataService.userId = null;
    // this.fetchResearchCategory("guest");
    this.isSignOut = false;
    this.utils.clearLoginDetails(false, true);
    // this.oauthService.logOut()
    // window.location.href=window.location.origin +"/auth/login"
    //    this.route.navigate(['/auth/login'])
  }
  /**
   * click on search icon, search animation opens
   */
  responsiveSearch() {
    this.megasearchVisible = !this.megasearchVisible;
    if (this.megasearchVisible) {
      setTimeout(() => {
        if (this.searchInput || this.mobSearchInput) {
          (this.searchInput || this.mobSearchInput).nativeElement.focus();
        }
      }, 100);
      this.searchData = this.findRecentSearch();
      this.renderer.removeClass(this.navbarCollapse.nativeElement, "in");
      this.renderer.addClass(this.navBarToggle.nativeElement, "collapsed");
    }
  }
  /**
   * focus on search input, search animation opens
   */
  onFocusSearch() {
    this.megasearchVisible = true;
    let focusElement = this.searchInput.nativeElement.focus() || this.mobSearchInput.nativeElement.focus();
    if (this.megasearchVisible) {
      setTimeout(() => {
        focusElement;
      }, 100);
    }
    this.scrollHeight = 0;
    this.startPos = 0;
    this.searchData = this.findRecentSearch();
  }
  getMarketData() {
    this.commonService.fetchMarketData().subscribe(data => {
      this.sharedDataService.isResearchReport = data.isResearchReport;
    }, err => {});
  }
  /**
   * input event on search,when user types 3 letter searchApi call is there, otherise show recent search and no record found
   * @param event keycode
   */
  onKeyup(event) {
    this.zone.run(() => {
      // this.searchData = [];
      this.searchValue = (this.searchValue || "").trim();
      if (this.searchValue.length === 0) {
        this.startPos = 0;
        this.searchData = this.findRecentSearch();
      } else if (this.searchValue.length === 1 || this.searchValue.length === 2) {
        this.searchData = [];
      } else if (this.searchValue.length >= 3) {
        let data = {
          strScripName: this.searchValue,
          StartPos: 0,
          //this.startPos,
          NoOfRecords: this.limit,
          strSegment: this.searchConfig.tabString
        };
        this.searchingData = true;
        this.commonService.getSearchData(data).subscribe(res => {
          this.searchingData = false;
          if (res.Status === "Success" && res.Response) {
            this.dataCount = res.Response.length;
            this.searchData = res.Response;
            this.toggleAddRemove(this.searchData); // to check whether scrip present in watchlist or not (15/03/2021)
            this.searchConfig.data[this.activeTab] = this.searchData;
            //this.selectList(this.activeTab, this.filterList);
          } else if (res.Status === "Fail") {
            this.searchData = [];
          } else {
            this.searchData = [];
          }
        }, err => {
          this.searchingData = false;
        });
      }
    });
  }
  /**
   * Retreving recent search userwise from local storage
   */
  findRecentSearch() {
    let user, recentData;
    if (this.activeTab != 1) {
      return [];
    }
    recentData = JSON.parse(localStorage.getItem("userSearchData"));
    user = this.utils.getUserId() || "guest";
    if (user && recentData && recentData[user]) {
      this.recentSearchData = recentData[user].slice(0, 10);
      var currentDate = JSON.stringify(new Date());
      currentDate = this.utils.changeCurrentDateFormat(currentDate, "YYYY-MM-DD HH:mm:ss", "DDMMMYY");
      this.recentSearchData = this.recentSearchData.filter(obj => {
        return (0,_assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_19__["default"])(currentDate, "DDMMMYY").valueOf() < (0,_assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_19__["default"])(obj.sExpiry, "DDMMMYY").valueOf() || obj.sExpiry == "";
      });
      this.toggleAddRemove(this.recentSearchData); // to check whether scrip present in watchlist or not (15/03/2021)
    }
    if (this.megasearchVisible && this.searchValue) {
      return this.searchData;
    }
    return this.recentSearchData;
  }
  /**
   * Navigation to company page from search, caching searched item userwise
   * @param companyData selected company data
   */
  gotoCompanyPage(companyData) {
    if (this.recentSearchData.length > 0 && ((this.searchValue || "").length == 0 || !this.searchValue) && this.activeTab == 1) {
      this.utils.setTrackMoeEvent("clickedOnScripSearchRecentSearch", {
        User_ID: this.utils.getUserId() || "guest",
        IP: this.sharedDataService.IPAddress
      });
      this.googleAnalyticsEventsService.emitEvent("clickedOnScripSearchRecentSearch", this.utils.getUserId() || "guest", this.sharedDataService.IPAddress, 1);
    }
    let user = this.utils.getUserId() || "guest";
    if (!companyData) return;
    companyData.SegmentId = Number(companyData.SegmentId);
    let companyPath = companyData.SecDesc.toLowerCase().replace(/[\s|\&|\%]/g, "").trim();
    let urlPrefix = "/instrument/" + (companyData["IsIndex"] == 1 || [6, 8, 14, 39].indexOf(companyData.SegmentId) > -1 ? "indices/" : [1, 2, 3, 4].indexOf(companyData.SegmentId) > -1 && !companyData["IsIndex"] ? "equity/" : [5, 7].indexOf(companyData.SegmentId) > -1 ? "commodity/" : "currency/");
    let url = urlPrefix + companyPath + "/" + companyData.SegmentId + "/" + companyData.Token;
    let userSearchData = localStorage.getItem("userSearchData") ? JSON.parse(localStorage.getItem("userSearchData")) : {};
    if (!userSearchData[user] || userSearchData[user].length === 0) {
      userSearchData[user] = [companyData];
      localStorage.setItem("userSearchData", JSON.stringify(userSearchData));
    } else {
      userSearchData[user] = userSearchData[user].filter(obj => {
        return obj.Token != companyData.Token;
      });
      userSearchData[user].unshift(companyData);
      localStorage.setItem("userSearchData", JSON.stringify(userSearchData));
    }
    this.googleAnalyticsEventsService.companyPageFromSearch(companyData);
    if (location.pathname.startsWith("/instrument")) {
      let presentToken = JSON.parse(localStorage.getItem("presentToken"));
      let newToken = presentToken ? presentToken.split("&") : [];
      if (newToken.length > 0 && companyData.SegmentId == newToken[0] && companyData.Token == newToken[1]) {
        this.utils.broadcast("routeResuse", companyData);
      } else {
        this.sharedDataService.saveRoutes(url);
        this.utils.checkforFeatureAndUpdate("search");
        this.router.navigate([url]);
      }
    } else {
      this.sharedDataService.saveRoutes(url);
      this.utils.checkforFeatureAndUpdate("search");
      this.router.navigate([url]);
    }
    let segmentToken = companyData.SegmentId + "&" + companyData.Token;
    localStorage.setItem("presentToken", JSON.stringify(segmentToken));
    this.searchData = [];
    this.megasearchVisible = false;
    this.searchValue = "";
    return;
  }
  /**
   * infinite scroll, SearchApi call as the user scrolls
   * @param event scroll event
   */
  onScroll(event) {
    if (this.searchValue && this.searchValue.length >= 3 && event && event.path) {
      let scrollTop = event.path[0].scrollTop;
      let scrollHeight = event.path[0].scrollHeight;
      let scrollBottom = event.path[0].scrollTop + (this.elementView.nativeElement.offsetHeight || this.mobUlView.nativeElement.offsetHeight);
      this.zone.run(() => {
        if (scrollHeight <= Math.ceil(scrollBottom) && this.dataCount == this.limit) {
          this.startPos = this.startPos + this.limit;
          let data = {
            strScripName: this.searchValue,
            StartPos: this.startPos,
            NoOfRecords: this.limit,
            strSegment: this.searchConfig.tabString
          };
          this.commonService.getSearchData(data).subscribe(res => {
            if (res.Status === "Success") this.dataCount = res.Response.length;
            if (res.Response) {
              for (var i = 0; i < res.Response.length; i++) {
                this.searchData.push(res.Response[i]);
              }
              this.toggleAddRemove(this.searchData); // to check whether scrip present in watchlist or not (15/03/2021)
              this.searchConfig[this.activeTab] = this.searchData;
            } else {}
          }, error => {});
        } else {}
      });
    }
  }
  /**
   * On hover ,to get selected scrip
   * @param i selected li
   */
  over(i) {
    this.selectedItem = i;
  }
  /**
   * on keypress on search input ,for up and down arrow navigation
   * @param event keycode
   */
  keyPress(event) {
    if (event.keyCode === 38 && this.selectedItem != 0) {
      this.selectedItem = this.selectedItem - 1;
      this.elementView.nativeElement.children[0].scrollTop = this.selectedItem * this.elementView.nativeElement.children[0].children[0].offsetHeight;
    } else if (event.keyCode === 40 && this.selectedItem <= this.searchData.length - 1) {
      this.selectedItem = this.selectedItem + 1;
      this.elementView.nativeElement.children[0].scrollTop = this.selectedItem * this.elementView.nativeElement.children[0].children[0].offsetHeight;
    } else if (event.keyCode === 13 && this.searchData.length > 0) {
      var searchSelectedData = this.searchData[this.selectedItem];
      this.gotoCompanyPage(searchSelectedData);
    }
  }
  /**
   * on focusout from search input, clear the li array of search input and close the search
   */
  focusOut() {
    setTimeout(() => {
      this.selectedItem = 0;
      this.megasearchVisible = false;
      this.searchValue = "";
      this.searchData.length = 0;
      this.recentSearchData = [];
    }, 200);
  }
  /**
   * Function to show companies with respet to selected tabs
   * @param tab tab number
   */
  selectList(tab, segmentList) {
    this.megasearchVisible = true;
    this.activeTab = tab;
    this.filterList = segmentList;
    setTimeout(() => {
      if (document.querySelectorAll("#web-search>li.scrip:not([hidden])").length) {
        this.tabClick = true;
      } else {
        this.tabClick = false;
      }
    }, 50);
  }
  activateTab(tabIndex, tabString) {
    this.searchConfig.activeTab = tabIndex;
    this.activeTab = Number(tabIndex);
    this.searchConfig.tabString = tabString;
    if (this.searchConfig.data[tabIndex] && this.searchConfig.data[tabIndex].length) {
      this.searchData = this.searchConfig.data[tabIndex];
      return;
    }
    this.onKeyup(null);
    this.utils.setTrackMoeEvent(tabIndex === 2 ? "pageScripSearchSegmentEquity" : tabIndex === 3 ? "pageScripSearchSegmentDerivative" : tabIndex === 4 ? "pageScripSearchSegmentCommodity" : tabIndex === 5 ? "pageScripSearchSegmentCurrency" : "pageScripSearchSegmentAll", {
      User_ID: this.utils.getUserId() || "guest",
      IP: this.sharedDataService.IPAddress
    });
    this.googleAnalyticsEventsService.emitEvent(tabIndex === 2 ? "pageScripSearchSegmentEquity" : tabIndex === 3 ? "pageScripSearchSegmentDerivative" : tabIndex === 4 ? "pageScripSearchSegmentCommodity" : tabIndex === 5 ? "pageScripSearchSegmentCurrency" : "pageScripSearchSegmentAll", this.utils.getUserId() || "guest", this.sharedDataService.IPAddress, 1);
  }
  conversionAnalytics(source, type, tag) {
    this.googleAnalyticsEventsService.appLink(tag);
    this.sendGAEvent(source, type, tag);
  }
  sendGAEvent(source, type, tag) {
    if (source && type && tag) {
      this.googleAnalyticsEventsService.sendCickEvent(source, type, tag);
    }
  }
  /**
   * Fetching Research Categories From the API
   */
  fetchResearchCategory(type) {
    this.category = [];
    this.toolsService.getResearchCategory(type).subscribe(res => {
      this.category = [];
      if (res.status_code == 200 && res.response) {
        this.category = res.response;
        this.slug = {
          category: {}
        };
        res.response.forEach((cat, index) => {
          this.slug.category[cat.categoryid] = cat.category_slug || (cat.name || "").toLowerCase().trim().replace(/\s/g, "-").replace(/\//g, "").replace(/(-)+/g, "-");
          this.slug.category[this.slug.category[cat.categoryid]] = cat.categoryid;
          this.slug[cat.categoryid] = {};
          cat.subcategory.forEach((subCat, sIndex) => {
            this.slug[cat.categoryid][subCat.subcategory_id] = subCat.subcategory_slug || (subCat.subcategory_name || "").toLowerCase().trim().replace(/\s/g, "-").replace(/\//g, "").replace(/(-)+/g, "-");
            this.slug[cat.categoryid][this.slug[cat.categoryid][subCat.subcategory_id]] = subCat.subcategory_id;
          });
        });
        this.utils.put("research", this.slug);
        this.utils.researchCategories = this.slug;
      } else {
        this.category = [];
      }
    }, error => {
      this.utils.error("Error", "Something Went Wrong");
    });
  }
  /**
   * Page Routing
   * @param categoryId Gets category ID
   * @param SubcategpryId Gets Subcategory ID
   */
  goPage(categoryId, SubcategoryId) {
    let url = this.slug.category[categoryId];
    url += "/" + this.slug[categoryId][SubcategoryId];
    this.router.navigateByUrl("research-report/" + url + "");
  }
  /** Open a popup when there is guest user (15/03/2021)*/
  openPreLogin() {
    if (!this.utils.isAuthorized()) {
      this.showPreLogin = true;
      this.renderer.setStyle(document.body, "overflow", "hidden");
    }
  }
  /** close preLogin popup for guest user on click of close button on prelogin popup (15/03/2021) */
  closePreLogin() {
    this.showPreLogin = false;
    this.renderer.setStyle(document.body, "overflow", "auto");
  }
  /** go to login page when user clicks on login button in prelogin popup  (15/03/2021) */
  login(fromUrl) {
    // if (fromUrl) {
    //   this.utils.put('navigateToMutualFunds', 'true')
    // }
    this.utils.setFromURL();
    if (this.menuClickedName) {
      this.utils.setProductRedirectURL(this.menuClickedName);
      this.menuClickedName = "";
      this.utils.clear("fromUrl");
    }
    this.router.navigate(["auth/login"]);
  }
  /** watchList Subscriptions (15/03/2021) */
  watchListSubscriptions() {
    this.watchlistNameSubscription = this.utils.broadcastObservable("watchlistRenamed").subscribe(data => {
      this.watchlistNames = data;
    });
    this.scripAddSubscription = this.utils.broadcastObservable("ScripAdded").subscribe(data => {
      let scrip = this.searchData.filter(item => {
        return data.Token == item.Token;
      });
      if (scrip.length) {
        scrip[0].isAdded = true;
        scrip[0].scripData = {
          ProfileId: data.ProfileId,
          scrip: data,
          scripIndex: data.scripIndex
        };
      }
      this.isButtonDisabled = false;
    });
    this.scripRemoveSubscription = this.utils.broadcastObservable("ScripRemoved").subscribe(data => {
      let scrip = this.searchData.filter(item => {
        return data.Token == item.Token;
      });
      if (scrip.length) {
        scrip[0].isAdded = false;
      }
      this.isButtonDisabled = false;
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
    this.isButtonDisabled = true;
    this.utils.broadcast("addRemoveWatchList", item.segmentTokenString);
  }
  goToInsurance() {
    this.googleAnalyticsEventsService.emitEvent("visitedInsurancefromMenu", this.utils.getUserId() || "guest", this.sharedDataService.IPAddress, 1);
    this.utils.setTrackMoeEvent("visitedInsuranceWeb", {
      UserId: this.utils.getUserId() || ""
    });
    window.open("https://health.choiceinsurance.in/input/basic-details", "_blank");
  }
  goToInvestica() {
    let userAccountStatus = this.utils.getUserAccountStatus();
    let onboardStatus = !userAccountStatus || !userAccountStatus.onboardStatus || userAccountStatus.onboardStatus == 'C' || userAccountStatus.onboardStatus == 'MF' ? 'C' : userAccountStatus.onboardStatus;
    let isGuest = userAccountStatus && userAccountStatus.GuestUser;
    // if((userAccountStatus && userAccountStatus.onboardStatus && userAccountStatus.GuestUser && (userAccountStatus.onboardStatus=='N'))){
    //   this.utils.broadcast('generateSubs',{})
    //   return
    // }
    let userProfile = this.utils.getProfile();
    this.googleAnalyticsEventsService.emitEvent("visitedMFfromMenu", this.utils.getUserId() || "guest", this.sharedDataService.IPAddress, 1);
    //Existing
    let selectedUser = localStorage.getItem('selectedUser') ? JSON.parse(localStorage.getItem('selectedUser')) : {};
    if (selectedUser && selectedUser.ProductType == 2) {
      let UserName = this.utils.getEncUserId();
      let Session = this.cryptography.encryptText(this.oauthService.getAccessToken());
      let mobNo = this.utils.getEncMobId();
      let ClientId = this.utils.getEncMobId(); //this.utils.getEncUserId();
      let callbackUrl = location.origin;
      let isExplore = false;
      let onBoardFlag = this.cryptography.encryptText('C');
      //this.cryptography.encryptText(userProfile.MfDetails.OnBoardFlag);
      let userFlags = this.utils.getSpecificUserFlags();
      let decPan = userProfile && userProfile && userProfile.PanCard ? userProfile.PanCard : selectedUser ? selectedUser.PanNo : '';
      let pan = decPan ? this.cryptography.encryptText(decPan) : '';
      let url = this.apiURL.getMFChoiceIndiaURL(UserName, Session, ClientId, this.utils.getEncUserId() ? this.utils.getEncUserId() : this.utils.getEncMobId(), "", callbackUrl, onBoardFlag, pan, isExplore, mobNo);
      url = userFlags && userFlags.acctnCreatedVia == "india-post" ? url + "&acctnCreatedVia=" + this.cryptography.encryptText(userFlags.acctnCreatedVia) : url;
      window.open(url, "_self");
    } else if (userProfile && userProfile.MfDetails && userProfile.MfDetails.OnBoardFlag && userProfile.MfDetails.OnBoardFlag == 'C') {
      let UserName = userProfile.MfDetails.DisplayCode ? this.cryptography.encryptText(userProfile.MfDetails.DisplayCode) : userProfile.MfDetails.DisplayCode;
      let accessTok = this.oauthService.getAccessToken();
      let Session = accessTok ? this.cryptography.encryptText(accessTok) : this.cryptography.encryptText(this.utils.getSessionId());
      let mobNo = userProfile && userProfile.MobileNo ? this.cryptography.encryptText(userProfile.MobileNo) : this.utils.getEncMobId();
      let ClientId = userProfile.MfDetails.clientId; //this.utils.getEncUserId();
      let callbackUrl = location.origin;
      let isExplore = userProfile.MfDetails.OnBoardFlag != 'C';
      let onBoardFlag = this.cryptography.encryptText(userProfile.MfDetails.OnBoardFlag);
      let decPan = userProfile && userProfile && userProfile.PanCard ? userProfile.PanCard : selectedUser ? selectedUser.PanNo : '';
      let pan = decPan ? this.cryptography.encryptText(decPan) : '';
      let userFlags = this.utils.getSpecificUserFlags();
      let url = this.apiURL.getMFChoiceIndiaURL(UserName, Session, ClientId, this.utils.getEncUserId(), "", callbackUrl, onBoardFlag, pan, isExplore, mobNo);
      url = userFlags && userFlags.acctnCreatedVia == "india-post" ? url + "&acctnCreatedVia=" + this.cryptography.encryptText(userFlags.acctnCreatedVia) : url;
      window.open(url, "_self");
    } else if (isGuest) {
      let UserName = this.utils.getEncUserId();
      let Session = this.cryptography.encryptText(this.oauthService.getAccessToken()); //this.utils.getEncSessionId();
      let mobNo = this.utils.getEncMobId();
      let ClientId = this.utils.getUserId(); //this.utils.getEncUserId();
      let callbackUrl = location.origin;
      ;
      let isExplore = onboardStatus != 'C';
      let onBoardFlag = this.cryptography.encryptText(onboardStatus);
      let decPan = userProfile && userProfile && userProfile.PanCard ? userProfile.PanCard : selectedUser ? selectedUser.PanNo : '';
      let pan = decPan ? this.cryptography.encryptText(decPan) : '';
      let userFlags = this.utils.getSpecificUserFlags();
      let url = this.apiURL.getMFChoiceIndiaURL(UserName, Session, ClientId, this.utils.getEncUserId(), "", callbackUrl, onBoardFlag, pan, isExplore, mobNo);
      url = userFlags && userFlags.acctnCreatedVia == "india-post" ? url + "&acctnCreatedVia=" + this.cryptography.encryptText(userFlags.acctnCreatedVia) : url;
      window.open(url, "_self");
    } else if (onboardStatus) {
      //WORK ON THIS
      let UserName = userProfile && userProfile && userProfile.DisplayCode ? this.cryptography.encryptText(userProfile.DisplayCode) : this.utils.getEncUserId() ? this.utils.getEncUserId() : this.utils.getEncMobId();
      let accessTok = this.oauthService.getAccessToken();
      let Session = accessTok ? this.cryptography.encryptText(accessTok) : this.cryptography.encryptText(this.utils.getSessionId());
      let mobNo = userProfile && userProfile.MobileNo ? this.cryptography.encryptText(userProfile.MobileNo) : this.utils.getEncMobId();
      let ClientId = userProfile && userProfile && userProfile.ClientId ? userProfile.ClientId : userProfile && userProfile.MobileNo ? userProfile.MobileNo : this.utils.getMobId(); //this.utils.getEncUserId();
      let callbackUrl = location.origin;
      let isExplore = onboardStatus != 'C';
      let onBoardFlag = this.cryptography.encryptText('CS'); //userProfile &&userProfile &&userProfile.onBoardFlag? this.cryptography.encryptText(userProfile.OnBoardFlag):this.cryptography.encryptText(onboardStatus);
      let userFlags = this.utils.getSpecificUserFlags();
      let decPan = userProfile && userProfile && userProfile.PanCard ? userProfile.PanCard : selectedUser ? selectedUser.PanNo : '';
      let pan = decPan ? this.cryptography.encryptText(decPan) : '';
      let url = this.apiURL.getMFChoiceIndiaURL(UserName, Session, ClientId, this.utils.getEncUserId(), "", callbackUrl, onBoardFlag, pan, isExplore, mobNo);
      url = userFlags && userFlags.acctnCreatedVia == "india-post" ? url + "&acctnCreatedVia=" + this.cryptography.encryptText(userFlags.acctnCreatedVia) : url;
      window.open(url, "_self");
    }
    // else if (userProfile && userProfile.PanCard) {
    //   this.utils.setTrackMoeEvent("visitedMFWeb", {
    //     UserId: this.utils.getUserId() || "",
    //     PAN: userProfile.PanCard,
    //   });
    //   this.router.navigate(["/client/mutual-fund/" + userProfile.PanCard]);
    // }
    else {
      this.utils.error("PAN not present.", null);
    }
    //
  }
  /**
   * to check whether scrip present in watchlist or not (15/03/2021)
   * @param data scrip data
   */
  toggleAddRemove(data) {
    data.forEach(item => {
      item.scripData = this.utils.checkFromWatchlist(item.SegmentId, item.Token);
      item.segmentTokenString = {
        SegmentId: item.SegmentId,
        Token: item.Token
      };
      item.isAdded = item.scripData && item.scripData.ProfileId;
    });
  }
  /**  close search overlay */
  closeSearch() {
    this.selectedItem = 0;
    this.megasearchVisible = false;
    this.searchValue = "";
    this.searchData.length = 0;
    this.recentSearchData = [];
    this.activeTab = 1;
    this.searchConfig = {
      isSearchOpened: false,
      data: {
        1: [],
        2: [],
        3: [],
        4: [],
        5: []
      },
      startPos: {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0
      },
      limit: 25,
      activeTab: 1,
      tabString: ""
    };
  }
  /** to set dropUp flag in order to understand what needs to be shown i.e. dropdown or dropup menu */
  onListClick(event) {
    this.dropUp = false;
    let bounds = {};
    bounds = event.target.getBoundingClientRect();
    if (bounds.y > 200) {
      this.dropUp = true;
    }
  }
  /**Go to Keev */
  // goToKeev(){
  //   let userId=this.cryptography.decryptText(this.utils.get('userId'))
  //   let sessionId=this.cryptography.decryptText(this.utils.get('sessionId'))
  //  /*
  //
  //   let url=this.apiURL.getKeevURL(this.cryptography.encryptTextKeev(userId),this.cryptography.encryptTextKeev(sessionId));
  //   window.open(url,"_blank")
  // }
  /**Go to Keev */
  goToKeev(type) {
    this.googleAnalyticsEventsService.emitEvent("visitedStratezy", this.utils.getUserId() || "guest", "Stratezy", 1);
    this.utils.setTrackMoeEvent("visitedStratezy", {
      User_ID: this.utils.getUserId() || ""
    });
    // this.utils.trackMoeEvent("visitedStratezy", { "UserId": this.utils.getUserId() || 'guest' });
    let userId = this.cryptography.decryptText(this.utils.get("userId"));
    let sessionId = this.cryptography.decryptText(this.utils.get("sessionId"));
    var sockets = this.storage.retrieve("connection") || {};
    let socketUrl = sockets.bcast;
    let url = type == "option" ? this.apiURL.getKeevOptionStratezyURL(encodeURIComponent(this.cryptography.encryptTextKeev(userId)), encodeURIComponent(this.cryptography.encryptTextKeev(sessionId))) : this.apiURL.getKeevURL(encodeURIComponent(this.cryptography.encryptTextKeev(userId)), encodeURIComponent(this.cryptography.encryptTextKeev(sessionId)), this.cryptography.encryptTextKeev(socketUrl));
    window.open(url, "_blank");
  }
  /**
   * Fetch Touchline Data of Indices
   */
  getMultiTouchLineData(isNotToRotate) {
    let userId = this.utils.getUserId();
    let tokens = this.utils.generateTokens(this.indicesList[0]);
    let request = {
      UserId: !userId || userId == "guest" ? "" : userId,
      SessionId: this.utils.getSessionId() || "",
      MultipleTokens: tokens
    };
    if (request.UserId) {
      this.utils.commonGetMultipleTouchLineCall(request).subscribe(data => {
        // common multitouchlineV2 (26/02/2021)
        if (data.Status === "Success" && data.Response && data.Response.lMT && data.Response.lMT.length) {
          this.indices = data.Response.lMT || [];
          //    console.log("indicesList multitouchline1 ",JSON.parse(JSON.stringify(this.indicesList)))
          this.indicesList.forEach((card, cardIndex) => {
            card.forEach((indice, index) => {
              let indiceObj = this.indices.filter(indiceData => {
                return indiceData.Token == indice.Token;
              });
              if (indiceObj.length > 0) {
                indiceObj[0].IndexName = this.indicesList[cardIndex][index].IndexName;
                indiceObj[0].lastUpdatedTime = this.utils.changeCurrentDateFormat(indiceObj[0].LUT, "DD-MM-YYYY HH:mm:ss", "DD-MMM-YY HH:mm:ss");
                indiceObj[0].LTP = indiceObj[0].LTP == 0 ? (indiceObj[0].PrevClose || 0) / indiceObj[0].PriceDivisor : indiceObj[0].LTP / indiceObj[0].PriceDivisor; // if LTP == 0 then show prevClose (11/05/2021)
                indiceObj[0].difference = Number(indiceObj[0].Change / indiceObj[0].PriceDivisor) || 0;
                indiceObj[0].PrevClose = (indiceObj[0].PrevClose || 0) / indiceObj[0].PriceDivisor; // (indiceObj[0].LTP - indiceObj[0].difference);
                indiceObj[0].percent = Math.abs(indiceObj[0].difference * 100 / (indiceObj[0].LTP - indiceObj[0].difference) || 0);
                indiceObj[0].class = Number(indiceObj[0].difference) < 0 ? "down" : Number(indiceObj[0].difference) > 0 ? "up" : "";
                const percent = indiceObj[0].difference * 100 / (indiceObj[0].LTP - indiceObj[0].difference) || 0;
                indiceObj[0].textColor = percent == 0 || isNaN(percent) || !percent ? "" : percent > 0 ? "text-green" : "text-pink";
                indiceObj[0].difference = Math.abs(indiceObj[0].difference);
                indiceObj[0].difference = Number(indiceObj[0].difference) || 0;
                indiceObj[0].LTT = this.utils.changeCurrentDateFormat(indiceObj[0].LTT, "DD-MM-YYYY HH:mm:ss", "DD-MM-YYYY HH:mm:ss");
                indiceObj[0].LUT = this.utils.changeCurrentDateFormat(indiceObj[0].LUT, "DD-MM-YYYY HH:mm:ss", "DD-MM-YYYY HH:mm:ss");
                indiceObj[0].mappedSegmentId = this.indicesList[cardIndex][index].mappedSegmentId;
                indiceObj[0].type = indice.type;
                indiceObj[0].companyName = indice.companyName;
                this.indicesList[cardIndex][index] = indiceObj[0];
                this.indicesList[cardIndex][index].translateY = "0px";
                this.indicesList[cardIndex][index].zIndex = "1";
              }
            });
          });
          this.utils.subscribeMultitouchline(this.indices);
          // } else if (this.utils.isSessionExpired(data.Reason)) {
          // if(this.sharedDataService.isSSO){
          //   this.utils.sessionExpireHandling()
          //   return
          // }
          //   this.utils.error("Session Expired", "Please Login Again");
          //   this.utils.postFeatureCount();
          //   this.utils.clearLoginDetails();
          //   this.sharedDataService.userId = null;
          //   this.router.navigate(["auth/login"]);
        } else {
          this.utils.error("Error", data.Reason);
        }
      }, err => {});
    }
  }
  /**
   * Listener to Socket Response Packets, 'checkUnsubscription' and 'internetConnectionStatus'
   */
  getSocketResponse() {
    this.socket.broadcaster.on("watchlist").subscribe(data => {
      let reference = this.indicesList.reduce((card1, card2) => {
        return card1.concat(card2);
      }).filter(indice => {
        return indice.SegmentId == data[0][1] && indice.Token == data[0][7];
      });
      if (reference.length > 0 && this.utils.isUpdatedData(reference[0], data[0])) {
        reference[0] = this.changeColor(data[0], reference);
        // console.log(reference,"reference")
        // if(reference[0].Tok==26009){
        //   console.log(reference,"reference")
        //   this.data.push(reference[0])
        //   localStorage.setItem('banknif',JSON.stringify(this.data))
        // }
      }
    });
    this.multiTouchlineSubscription = this.broadcaster.on("checkUnsubscription").subscribe(data => {
      if (data.source != "header" && data.data && data.data.length > 0 && this.indices.length > 0) {
        let tokenList = [];
        let dataTokens = this.utils.generateTokens(data.data).split(",");
        let watchTokens = this.utils.generateTokens(this.indices).split(",");
        let commonToken = watchTokens.filter(token => {
          return dataTokens.indexOf(token) > -1;
        });
        commonToken.forEach(element => {
          let tokenSegment = element.split("@");
          tokenList.push({
            SegmentId: tokenSegment[0],
            Token: tokenSegment[1]
          });
        });
        this.utils.subscribeMultitouchline(tokenList);
      }
    });
    this.socketStatusSubscription = this.broadcaster.on("internetConnectionStatus").subscribe(isConnected => {
      //console.debug('reconnect socket request broadcast received header');
      this.utils.subscribeMultitouchline(this.indices);
    });
  }
  /** Processing Socket Response Packets */
  changeColor(data, reference) {
    let referenceObj = reference[0];
    let priceDivisor = this.utils.getDefaultPriceDivisor(referenceObj.SegmentId, referenceObj.Tok);
    //data[399] ? Number(data[399]) : 100;
    referenceObj.prevChange = (Number(data[8]) / priceDivisor || 0) - (referenceObj.LTP || 0);
    referenceObj.LTP = Number(data[8]) == 0 ? referenceObj.PrevClose || data[76] / priceDivisor : Number(data[8]) / priceDivisor; // if LTP == 0 then show prevClose (10/05/2021)
    referenceObj.volume = Number(data[79]);
    referenceObj.PrevClose = referenceObj.PrevClose || data[76] / priceDivisor;
    referenceObj.class = Number(referenceObj.LTP) < Number(referenceObj.PrevClose) ? "down" : Number(referenceObj.LTP) > Number(referenceObj.PrevClose) ? "up" : "";
    referenceObj.difference = Math.abs(referenceObj.LTP - Number(referenceObj.PrevClose));
    referenceObj.difference = isNaN(referenceObj.difference) ? 0.0 : referenceObj.difference;
    referenceObj.percent = referenceObj.difference / Number(referenceObj.PrevClose) * 100;
    referenceObj.percent = isNaN(referenceObj.percent) ? 0.0 : referenceObj.percent;
    const percent = (referenceObj.LTP - Number(referenceObj.PrevClose)) / Number(referenceObj.PrevClose) * 100;
    referenceObj.textColor = isNaN(percent) || percent == 0 || !percent ? "" : percent > 0 ? "text-green" : "text-pink";
    referenceObj.LTT = this.utils.changeCurrentDateFormat(data[73], "YYYY-MM-DD HHmmss", "DD-MM-YYYY HH:mm:ss");
    referenceObj.LUT = this.utils.changeCurrentDateFormat(data[74], "YYYY-MM-DD HHmmss", "DD-MM-YYYY HH:mm:ss");
    referenceObj.lastUpdatedTime = this.utils.changeCurrentDateFormat(data[74], "YYYY-MM-DD HHmmss", "DD-MMM-YY HH:mm:ss");
    return referenceObj;
  }
  getSGBData() {
    this.schemeListingSubscription = this.commonService.getSGBListing("sgb").subscribe(res => {
      if (res.status === "Success") {
        let ongoingData = res.response.openSGB;
        if (ongoingData && ongoingData.length) {
          this.newSGBAvailable = true;
        }
      } else {
        this.newSGBAvailable = false;
      }
    }, err => {
      this.newSGBAvailable = false;
    });
  }
  navigateToHome() {
    if (this.sharedDataService.userId == "guest") {
      this.router.navigate(["/"]);
    } else {
      this.sharedDataService.fromRoute = "";
      this.router.navigate([""]);
    }
  }
  /**
   * redirect to free open account
   */
  navigateToFreeAccountSignup(type) {
    let url = type == "sign_up" ? `${this.utils.getChoiceindiaBaseURL()}/open-free-demat-account?utm_source=choice-finx-web&utm_medium=sign_up_button&utm_campaign=choice_finx_sign_up_button` : `${this.utils.getChoiceindiaBaseURL()}/open-free-demat-account?utm_source=choice-finx-web&utm_medium=main_menu_button&utm_campaign=choice_finx_open_account_button`;
    window.open(url, "_self");
  }
  redirectToCompany(companyData) {
    this.googleAnalyticsEventsService.emitEvent("SmMarque", this.utils.getUserId() || "", "Dashboard", 1);
    this.utils.setTrackMoeEvent("clickedOn", {
      UserId: this.utils.getUserId() || "",
      buttonName: "SmMarque"
    });
    this.router.navigate([`/instrument/${companyData.type}/${companyData.companyName}/${companyData.SegmentId}/${companyData.Token}`]);
    // window.open(`/instrument/${companyData.type}/${companyData.companyName}/${companyData.SegmentId}/${companyData.Token}`,'_blank');
  }
  GlobalInvestingMenuClicked() {
    this.utils.setTrackMoeEvent("visitedJiffyGlobal", {
      User_ID: this.utils.getUserId() || "guest",
      IP: this.sharedDataService.IPAddress
    });
    this.googleAnalyticsEventsService.emitEvent("visitedJiffyGlobal", this.utils.getUserId() || "guest", this.sharedDataService.IPAddress, 1);
  }
  handleProductsAuthorization(productType) {
    this.gaEvents(productType);
    if (this.utils.isAuthorized()) {
      let feature = this.utils.getWalkThrgh();
      // feature['quantsappAuthorized'] = false;
      if (!feature[productType]) {
        this.productType = productType;
      } else {
        this.productType = "";
        if (productType === "algobullsAuthorized") {
          // ga(
          //   "send",
          //   "event",
          //   "Algobulls Visitors",
          //   "Submit",
          //   "Algobulls Visitors",
          //   1
          // );
          this.goToAlgoBulls();
        } else if (productType === "modernalgosAuthorized") {
          // ga(
          //   "send",
          //   "event",
          //   "ModernAlgos Visitors",
          //   "Submit",
          //   "ModernAlgos Visitors",
          //   1
          // );
          this.goToModernAlgos();
        } else if (productType === "algocrabAuthorized") {
          this.handleProductRedirection(productType);
        } else if (productType === "quantsappAuthorized") {
          // ga(
          //   "send",
          //   "event",
          //   "Quantsapp Visitors",
          //   "Submit",
          //   "Quantsapp Visitors",
          //   1
          // );
          this.goToQuantsApp();
        } else if (productType === "stocksemojiAuthorized") {
          this.goToStocksEmoji();
        } else if (productType === "stockantsAuthorized") {
          this.goToStocks();
        } else if (productType === "narnoliaAuthorized") {
          this.redirectToNarnolia();
        } else if (productType === "pixstoxAuthorized") {
          this.redirectToPixstox();
        } else if (productType === "tradetronAuthorized") {
          this.redirectToTradetron();
        } else if (productType === "arthnirmitiAuthorized") {
          this.redirectToArthnirmiti();
        } else {
          this.utils.error("Error", "Something went wrong");
        }
      }
    } else {
      this.menuClickedName = productType;
      this.showPreLogin = true;
      this.renderer.setStyle(document.body, "overflow", "hidden");
    }
  }
  gaEvents(productType) {
    // if (productType === "algobullsAuthorized") {
    //   ga(
    //     "send",
    //     "event",
    //     "Algobulls Visitors",
    //     "Submit",
    //     "Algobulls Visitors",
    //     1
    //   );
    // } else if (productType === "modernalgosAuthorized") {
    //   ga(
    //     "send",
    //     "event",
    //     "ModernAlgos Visitors",
    //     "Submit",
    //     "ModernAlgos Visitors",
    //     1
    //   );
    // } else if (productType === "quantsappAuthorized") {
    //   ga(
    //     "send",
    //     "event",
    //     "Quantsapp Visitors",
    //     "Submit",
    //     "Quantsapp Visitors",
    //     1
    //   );
    // }
  }
  clickedOnAuthorizeProductPopup(event) {
    if (event) {
      let feature = this.utils.getWalkThrgh();
      window.Moengage.add_user_attribute(this.productType, "1");
      this.utils.updateWalkthrough(Object.assign(feature, {
        [this.productType]: "1"
      }));
      this.utils.postFeatureCount();
      if (this.productType === "algobullsAuthorized") {
        this.redirectToAlgobulls();
      } else if (this.productType === "modernalgosAuthorized") {
        this.goToModernAlgos();
      } else if (this.productType === "algocrabAuthorized") {
        this.handleProductRedirection(this.productType);
      } else if (this.productType === "quantsappAuthorized") {
        this.goToQuantsApp();
      } else if (this.productType === "stocksemojiAuthorized") {
        this.redirectToStocksEmoji();
      } else if (this.productType === "stockantsAuthorized") {
        this.redirectToStockants();
      } else if (this.productType === "narnoliaAuthorized") {
        this.redirectToNarnolia();
      } else if (this.productType === "pixstoxAuthorized") {
        this.redirectToPixstox();
      } else if (this.productType === "tradetronAuthorized") {
        this.redirectToTradetron();
      } else if (this.productType === "arthnirmitiAuthorized") {
        this.redirectToArthnirmiti();
      } else {
        this.utils.error("Error", "Something went wrong");
      }
    }
    this.productType = "";
  }
  goToAlgoBulls() {
    this.isAlgobullsAuthenticationServiceHit = true;
    let userId = this.cryptography.decryptText(this.utils.get("userId"));
    let sessionId = this.cryptography.decryptText(this.utils.get("sessionId"));
    let cid = this.cryptography.encryptTextAlgoBulls(userId);
    let sid = this.cryptography.encryptTextAlgoBulls(sessionId);
    let payload = {
      EncClientId: cid,
      EncSessionId: sid
    };
    this.commonService.algobullsAuthentication(payload, "algobullsAuthorized").subscribe(res => {
      if (res && res.status === 200 && res.body && res.body["Status"] === "Success") {
        this.redirectToAlgobulls();
      } else {
        this.utils.error("Error", "Something went wrong!");
      }
    }, error => {
      this.utils.error("Error", "Something went wrong!");
    }).add(() => {
      this.isAlgobullsAuthenticationServiceHit = false;
    });
  }
  goToModernAlgos() {
    let userId = this.cryptography.decryptText(this.utils.get("userId"));
    let sessionId = this.cryptography.decryptText(this.utils.get("sessionId"));
    let cid = this.cryptography.encryptTextModernAlgos(userId);
    let sid = this.cryptography.encryptTextModernAlgos(sessionId);
    let url = "https://modernalgos.com/machoiceredirect.aspx?cid=" + encodeURIComponent(cid) + "&sid=" + encodeURIComponent(sid);
    window.open(url, "_blank");
    localStorage.removeItem("fromUrl");
    this.utils.clear("fromUrl");
    this.utils.clear("clickFromURL");
  }
  redirectToAlgobulls() {
    let userId = this.cryptography.decryptText(this.utils.get("userId"));
    let sessionId = this.cryptography.decryptText(this.utils.get("sessionId"));
    let cid = this.cryptography.encryptTextAlgoBulls(userId);
    let sid = this.cryptography.encryptTextAlgoBulls(sessionId);
    let url = "https://choice.algobulls.com/loading?cid=" + encodeURIComponent(cid) + "&sid=" + encodeURIComponent(sid) + "&state=choice";
    window.open(url, "_blank");
    localStorage.removeItem("fromUrl");
    this.utils.clear("fromUrl");
    this.utils.clear("clickFromURL");
  }
  goToQuantsApp() {
    this.isAlgobullsAuthenticationServiceHit = true;
    let userId = this.cryptography.decryptText(this.utils.get("userId"));
    let sessionId = this.cryptography.decryptText(this.utils.get("sessionId"));
    let cid = this.cryptography.encryptTextQuantsApp(userId);
    let sid = this.cryptography.encryptTextQuantsApp(sessionId);
    let payload = {
      EncClientId: cid,
      EncSessionId: sid
    };
    this.commonService.algobullsAuthentication(payload, "quantsappAuthorized").subscribe(res => {
      if (res && res.status === 200 && res.body && res.body["Status"] === "Success") {
        let defaultPage = this.utils.getFromURL() || localStorage.getItem("fromUrl") || "";
        defaultPage = defaultPage.indexOf("quantsapp") > -1 ? defaultPage : "";
        let url = this.apiURL.getQuantsAppURL(encodeURIComponent(cid), encodeURIComponent(sid), defaultPage);
        //console.debug('quantsappurl',url);
        window.open(url, "_blank");
      } else {
        this.utils.error("Error", "Something went wrong!");
      }
      localStorage.removeItem("fromUrl");
      this.utils.clear("fromUrl");
      this.utils.clear("clickFromURL");
    }, error => {
      this.utils.error("Error", "Something went wrong!");
    }).add(() => {
      this.isAlgobullsAuthenticationServiceHit = false;
    });
  }
  handleProductRedirection(type) {
    let url;
    if (type === "algocrabAuthorized") {
      url = this.apiURL.getAlgocrabURL();
    }
    window.open(url, "_blank");
  }
  menuClass() {
    this.activeClass = !this.activeClass;
  }
  goToStocksEmoji() {
    this.isStocksEmojiAuthenticationServiceHit = true;
    let userId = this.cryptography.decryptText(this.utils.get("userId"));
    let sessionId = this.cryptography.decryptText(this.utils.get("sessionId"));
    let cid = this.cryptography.encryptTextStocksEmoji(userId);
    let sid = this.cryptography.encryptTextStocksEmoji(sessionId);
    let payload = {
      EncClientId: cid,
      EncSessionId: sid
    };
    this.commonService.algobullsAuthentication(payload, "stocksemojiAuthorized").subscribe(res => {
      if (res && res.status === 200 && res.body && res.body["Status"] === "Success") {
        this.redirectToStocksEmoji();
      } else {
        this.utils.error("Error", "Something went wrong!");
      }
    }, error => {
      this.utils.error("Error", "Something went wrong!");
    }).add(() => {
      this.isStocksEmojiAuthenticationServiceHit = false;
    });
  }
  redirectToStocksEmoji() {
    let userId = this.cryptography.decryptText(this.utils.get("userId"));
    let sessionId = this.cryptography.decryptText(this.utils.get("sessionId"));
    let cid = this.cryptography.encryptTextStocksEmoji(userId);
    let sid = this.cryptography.encryptTextStocksEmoji(sessionId);
    let url = "https://choice.stocksemoji.com/choice-callback?cid=" + encodeURIComponent(cid) + "&sid=" + encodeURIComponent(sid);
    window.open(url, "_blank");
    localStorage.removeItem("fromUrl");
    this.utils.clear("fromUrl");
    this.utils.clear("clickFromURL");
  }
  goToStocks() {
    this.isStocksAuthenticationServiceHit = true;
    let userId = this.cryptography.decryptText(this.utils.get("userId"));
    let sessionId = this.cryptography.decryptText(this.utils.get("sessionId"));
    let cid = this.cryptography.encryptTextStockants(userId);
    let sid = this.cryptography.encryptTextStockants(sessionId);
    let payload = {
      EncClientId: cid,
      EncSessionId: sid
    };
    this.commonService.algobullsAuthentication(payload, "stockantsAuthorized").subscribe(res => {
      if (res && res.status === 200 && res.body && res.body["Status"] === "Success") {
        this.redirectToStockants();
      } else {
        this.utils.error("Error", "Something went wrong!");
      }
    }, error => {
      this.utils.error("Error", "Something went wrong!");
    }).add(() => {
      this.isStocksAuthenticationServiceHit = false;
    });
  }
  redirectToStockants() {
    let userId = this.cryptography.decryptText(this.utils.get("userId"));
    let sessionId = this.cryptography.decryptText(this.utils.get("sessionId"));
    let cid = this.cryptography.encryptTextStockants(userId);
    let sid = this.cryptography.encryptTextStockants(sessionId);
    let url = this.apiURL.getStockantsURL(encodeURIComponent(cid), encodeURIComponent(sid));
    window.open(url, "_blank");
    localStorage.removeItem("fromUrl");
    this.utils.clear("fromUrl");
    this.utils.clear("clickFromURL");
  }
  goToNarnolia() {
    this.isStocksAuthenticationServiceHit = true;
    let userId = this.cryptography.decryptText(this.utils.get("userId"));
    let sessionId = this.cryptography.decryptText(this.utils.get("sessionId"));
    let cid = this.cryptography.encryptTextNarnolia(userId);
    let sid = this.cryptography.encryptTextNarnolia(sessionId);
    let payload = {
      EncClientId: cid,
      EncSessionId: sid
    };
    this.commonService.algobullsAuthentication(payload, "narnoliaAuthorized").subscribe(res => {
      if (res && res.status === 200 && res.body && res.body["Status"] === "Success") {
        this.redirectToNarnolia();
      } else {
        this.utils.error("Error", "Something went wrong!");
      }
    }, error => {
      this.utils.error("Error", "Something went wrong!");
    }).add(() => {
      this.isStocksAuthenticationServiceHit = false;
    });
  }
  redirectToNarnolia() {
    let userId = this.cryptography.decryptText(this.utils.get("userId"));
    let sessionId = this.cryptography.decryptText(this.utils.get("sessionId"));
    let cid = this.cryptography.encryptTextNarnolia(userId);
    let sid = this.cryptography.encryptTextNarnolia(sessionId);
    let url = this.apiURL.getNarnoliaURL(encodeURIComponent(cid), encodeURIComponent(sid));
    window.open(url, "_blank");
    localStorage.removeItem("fromUrl");
    this.utils.clear("fromUrl");
    this.utils.clear("clickFromURL");
  }
  goToPixstox() {
    this.isStocksAuthenticationServiceHit = true;
    let userId = this.cryptography.decryptText(this.utils.get("userId"));
    let sessionId = this.cryptography.decryptText(this.utils.get("sessionId"));
    let cid = this.cryptography.encryptTextPixstox(userId);
    let sid = this.cryptography.encryptTextPixstox(sessionId);
    let payload = {
      EncClientId: cid,
      EncSessionId: sid
    };
    this.commonService.algobullsAuthentication(payload, "pixstoxAuthorized").subscribe(res => {
      if (res && res.status === 200 && res.body && res.body["Status"] === "Success") {
        this.redirectToPixstox();
      } else {
        this.utils.error("Error", "Something went wrong!");
      }
    }, error => {
      this.utils.error("Error", "Something went wrong!");
    }).add(() => {
      this.isStocksAuthenticationServiceHit = false;
    });
  }
  redirectToPixstox() {
    let userId = this.cryptography.decryptText(this.utils.get("userId"));
    let sessionId = this.cryptography.decryptText(this.utils.get("sessionId"));
    let cid = this.cryptography.encryptTextPixstox(userId);
    let sid = this.cryptography.encryptTextPixstox(sessionId);
    let payload = {
      EncClientId: cid,
      EncSessionId: sid
    };
    this.commonService.algobullsAuthentication(payload, "pixstoxAuthorized").subscribe(res => {
      if (res && res.status === 200 && res.body && res.body["Status"] === "Success") {
        let url = this.apiURL.getPixstoxURL(encodeURIComponent(this.cryptography.encryptTextPixstox(userId)), encodeURIComponent(this.cryptography.encryptTextPixstox(sessionId)));
        window.open(url, "_blank");
        localStorage.removeItem("fromUrl");
        this.utils.clear("fromUrl");
        this.utils.clear("clickFromURL");
      } else {
        this.utils.error("Error", "Something went wrong!");
      }
    }, error => {
      this.utils.error("Error", "Something went wrong!");
    });
  }
  openShortcutKeyPopup() {
    this.renderer.setStyle(document.body, "overflow", "hidden");
    this.renderer.addClass(document.body, "modal_open");
    this.utils.broadcast("openShortcutKeyPopup");
  }
  get whatsNewNotifications$() {
    return this.firebaseService.whatsNewNotification$;
  }
  updateVersion() {
    this.utils.setTrackMoeEvent("clickedOn", {
      userId: this.utils.getUserId() || "",
      buttonName: "notificationPageReloadIcon"
    });
    const version = localStorage.getItem("localBuild");
    if (version) {
      if (window.location.href.indexOf("?") > -1) {
        if (window.location.href.indexOf("version=") > -1) {
          var href = new URL(window.location.href);
          href.searchParams.set("version", version);
          window.location.href = href.href;
        } else {
          window.location.href = window.location.href + "&version=" + version;
        }
      } else {
        window.location.href = window.location.href + "?version=" + version;
      }
    }
  }
  showUpdateDetails() {
    const modifiedVisitedVersions = this.storage.retrieve("visitedVersions") || {};
    const lastBuildVersion = (localStorage.getItem("localBuild") || this.updateNotifications?.[0]?.version).split("_").pop();
    modifiedVisitedVersions[lastBuildVersion] = true;
    const versionUrl = this.updateNotifications?.[0]?.versionUrl;
    this.sharedDataService.visitedVersion = modifiedVisitedVersions;
    this.updateNotifications = this.updateNotifications.filter(notification => !this.sharedDataService.visitedVersion?.[notification.version]);
    this.storage.store("visitedVersions", modifiedVisitedVersions);
    this.utils.setTrackMoeEvent("clickedOn", {
      userId: this.utils.getUserId() || "",
      buttonName: "notificationWhatsNewOption",
      version: lastBuildVersion
    });
    if (!!versionUrl) {
      window.open(versionUrl, "_blank");
    } else {
      window.open(location.origin + "/links/user-guide/app/register-on-app?" + "version=" + lastBuildVersion, "_blank");
    }
  }
  subscribeNewNotification() {
    this.subscription.add(this.whatsNewNotifications$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_24__.map)(notifications => {
      return {
        filtered: notifications.filter(notification => !this.sharedDataService.visitedVersion?.[notification.version]),
        last: notifications.length ? notifications[0] : []
      };
    })).subscribe(notifications => {
      const {
        last,
        filtered
      } = notifications;
      const lastStoredVersion = this.storage.retrieve("lastVersionNotification");
      if (last.version && !this.sharedDataService.visitedVersion?.[last.version] && lastStoredVersion !== last.version) {
        this.storage.store("lastVersionNotification", last.version);
        this.msgPopupEvent.emit(last.version);
      }
      this.updateNotifications = filtered;
    }));
  }
  visitedNotificationChanges() {
    this.subscription.add(this.storage.observe("visitedVersions").subscribe(visitedVersion => {
      if (visitedVersion) {
        this.updateNotifications = this.updateNotifications.filter(notification => !visitedVersion?.[notification.version]);
      }
    }));
  }
  logoutUser() {
    if (this.sharedDataService.isSSO) {
      this.signOutSSo();
    } else {
      this.signOut();
    }
  }
  updateErrors(notifications) {
    if (notifications && notifications.length) {
      notifications.map(msg => {
        if (msg.error) {
          msg.error = this.parseErrorMessage(msg.error);
        }
        return msg;
      });
    }
    return notifications;
  }
  trimToLowercase(msg) {
    return msg.replaceAll(" ", "").toLowerCase();
  }
  parseErrorMessage(error) {
    if (error) {
      let trimmedError = this.trimToLowercase(error);
      if (trimmedError.indexOf("undocumentedexchangeerror-errorcode=16284") > -1) {
        error = "The order price is out of day's price range";
      } else if (trimmedError.indexOf("undocumentedexchangeerror-errorcode=16387") > -1) {
        error = "Security is not allowed to trade in the this market.";
      } else if (trimmedError.indexOf("marginlimitexceeded") > -1) {
        //Margin Limit exceeded
        let amount = error.split("ShortFall=").length > 1 ? error.split("ShortFall=")[1].split(" across all")[0] : null;
        if (amount) error = "Order Rejected due to Insufficient funds. Please add ₹" + amount + " to proceed.";
      } else if (trimmedError.indexOf("m.lmtexcd") > -1) {
        //M.Lmt excd
        let amount = error.split("SFall=").length > 1 ? error.split("ShortFall=")[1].split(" across all")[0] : null;
        if (amount) error = "Order Rejected due to Insufficient funds. Please add ₹" + amount + " to proceed.";
      } else if (trimmedError.indexOf("ordernotallowed.userprivilegecheckforbranchforbsederivativesordertypeprivilegesfailedmarket") > -1) {
        //Order Not Allowed.User Privilege Check for Branch For BSE Derivatives Order Type Privileges Failed MARKET
        error = "Market Order type is currently not allowed in BSE F&O. Switch to another order type.";
      } else if (trimmedError.indexOf("ordertimehaschangedorisincorrectformodification/cancellationrequest") > -1) {
        //Order Time has changed or is incorrect for modification/cancellation request
        error = "You can't modify/cancel this order as it was already executed or cancelled.";
      } else if (error.indexOf("limitexceeded") > -1) {
        //Limit exceeded
        error = "You do not have enough qty to place order.";
      } else if (trimmedError.indexOf("incorrecttradedquantityinmodifyrequestfor") > -1) {
        error = "You can't modify this order as it was partially executed.";
      } else if (trimmedError.indexOf("limitexceeded") > -1 && trimmedError.indexOf("t.freeqty=") > -1) {
        error = `Requested qty does not match with the holding qty. Please try again.`;
      } else if (trimmedError.indexOf("userprivilegecheckforbranchforbsederivativesordertypeprivilegesfailedmarket") > -1) {
        error = "Market Order type is currently not allowed in BSE F&O. Select limit type.";
      }
    }
    return error;
  }
  redirectToTradetron() {
    let userId = this.cryptography.decryptText(this.utils.get("userId"));
    let sessionId = this.cryptography.decryptText(this.utils.get("sessionId"));
    let cid = this.cryptography.encryptTextTradetron(userId);
    let sid = this.cryptography.encryptTextTradetron(sessionId);
    let payload = {
      EncClientId: cid,
      EncSessionId: sid
    };
    this.commonService.algobullsAuthentication(payload, "tradetronAuthorized").subscribe(res => {
      if (res && res.status === 200 && res.body && res.body["Status"] === "Success") {
        let url = this.apiURL.getTradetronURL(encodeURIComponent(this.cryptography.encryptTextTradetron(userId)), encodeURIComponent(this.cryptography.encryptTextTradetron(sessionId)));
        window.open(url, "_blank");
      } else {
        this.utils.error("Error", "Something went wrong!");
      }
    }, error => {
      this.utils.error("Error", "Something went wrong!");
    });
  }
  showToaster(page) {
    //   let userAccountStatus=this.utils.getUserAccountStatus()
    // if((!userAccountStatus || !userAccountStatus.onboardStatus || (userAccountStatus.onboardStatus=='C'))){
    //   // if(page=='keev')
    //   // this.goToKeev()
    //   // else
    if (page == 'ipo') {
      this.navigateRoute('/next/market/upcoming-ipo-list', 'market');
    }
    // }else{
    //   this.utils.broadcast('generateSubs',{})
    // }
  }
  visitProfilePage() {
    this.gotoProfile();
    this.closeSearch();
  }
  /**
   * Switch popup open
   */
  switchAccount() {
    this.selectedUserId = this.selectedUser.UserId;
    this.switchingAccountConfirm = true;
    this.utils.setTrackMoeEvent("switchFamilyProfile", {
      User_ID: this.utils.getUserId() || "guest",
      IP: this.sharedDataService.IPAddress
    });
  }
  /**
   * Switch User to another account
   */
  switchUser() {
    this.utils.clearLoginDetails(true);
    // this.router.navigate(['/auth/twoFA'])
    // this.switchingUser=true
    let user = this.userList.find(ele => {
      return ele.UserId == this.selectedUserId;
    });
    // this.utils.clearLoginDetails(true)
    this.utils.broadcast('switchSelectedUser', user);
    // this.router.navigate(['/auth/twoFA'],{queryParams:{uid:btoa(this.selectedUserId)}})
  }
  /**
   * Get List of family users
   */
  getUserList() {
    this.userList = [];
    let payload = {
      MobileNo: this.utils.getMobId(),
      deviceId: this.utils.get("fingerprint") || ""
    };
    this.commonService.getUserList(payload).subscribe(data => {
      if (data && data.Response && data.Response.UserDetails) {
        this.userList = data.Response.UserDetails;
        this.userList = this.userList.map(ele => {
          if (ele.FullName) {
            let name = ele.FullName.split(" ");
            let first = name[0].charAt(0);
            let second = name[2] ? name[2].charAt(0) : name[1] ? name[1].charAt(0) : "";
            ele.Initials = first + "" + second;
            ele.firstName = name[0] || 'User';
          } else {
            ele.Initials = "U";
          }
          return ele;
        });
        localStorage.setItem('userList', JSON.stringify(this.userList));
      }
    }, err => {});
  }
  redirectToArthnirmiti() {
    let userId = this.cryptography.decryptText(this.utils.get("userId"));
    let sessionId = this.cryptography.decryptText(this.utils.get("sessionId"));
    let cid = this.cryptography.encryptTextArthnirmiti(userId);
    let sid = this.cryptography.encryptTextArthnirmiti(sessionId);
    let payload = {
      EncClientId: cid,
      EncSessionId: sid
    };
    this.commonService.algobullsAuthentication(payload, "arthnirmitiAuthorized").subscribe(res => {
      if (res && res.status === 200 && res.body && res.body["Status"] === "Success") {
        let url = this.apiURL.getArthNirmitiURL(encodeURIComponent(this.cryptography.encryptTextArthnirmiti(userId)), encodeURIComponent(this.cryptography.encryptTextArthnirmiti(sessionId)));
        window.open(url, "_blank");
      } else {
        this.utils.error("Error", "Something went wrong!");
      }
    }, error => {
      this.utils.error("Error", "Something went wrong!");
    });
  }
  goToOptionStrategy() {
    let userAccountStatus = this.utils.getUserAccountStatus();
    if (!userAccountStatus || userAccountStatus.onboardStatus != 'C') {
      this.utils.broadcast("generateSubs", {});
    } else {
      window.open(location.origin + '/strategy/home');
    }
  }
  static {
    this.ctorParameters = () => [{
      type: angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_25__.OAuthService
    }, {
      type: _services_rest_common_service__WEBPACK_IMPORTED_MODULE_20__.CommonService
    }, {
      type: _services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_15__.AnalyticsService
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_23__.ActivatedRoute
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_22__.NgZone
    }, {
      type: _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_17__.UtilsService
    }, {
      type: src_app_services_cryptography_service__WEBPACK_IMPORTED_MODULE_4__.CryptographyService
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_23__.Router
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_22__.Renderer2
    }, {
      type: _angular_common__WEBPACK_IMPORTED_MODULE_26__.Location
    }, {
      type: _services_sockets_broadcaster__WEBPACK_IMPORTED_MODULE_21__.Broadcaster
    }, {
      type: src_app_services_api_urls__WEBPACK_IMPORTED_MODULE_3__.APIURLs
    }, {
      type: _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_16__.SharedDataService
    }, {
      type: src_app_services_firestore_push_messaging_service__WEBPACK_IMPORTED_MODULE_6__.PushMessagingService
    }, {
      type: src_app_services_rest_tool_service__WEBPACK_IMPORTED_MODULE_7__.ToolService
    }, {
      type: src_app_services_sockets_socket_service__WEBPACK_IMPORTED_MODULE_8__.SocketService
    }, {
      type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_27__.LocalStorageService
    }, {
      type: src_app_guards_login_guard_service__WEBPACK_IMPORTED_MODULE_2__.LoginGuard
    }, {
      type: src_app_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_5__.FirestoreService
    }];
  }
  static {
    this.propDecorators = {
      elementView: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_22__.ViewChild,
        args: ["ulScroll", {
          static: false
        }]
      }],
      mobUlView: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_22__.ViewChild,
        args: ["mobUlScroll", {
          static: false
        }]
      }],
      searchInput: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_22__.ViewChild,
        args: ["searchInput", {
          static: false
        }]
      }],
      mobSearchInput: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_22__.ViewChild,
        args: ["mobSearchInput", {
          static: false
        }]
      }],
      navbarCollapse: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_22__.ViewChild,
        args: ["navbarCollapse", {
          static: false
        }]
      }],
      navBarToggle: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_22__.ViewChild,
        args: ["navBarToggle", {
          static: false
        }]
      }],
      refreshNotificationConfig: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_22__.Input
      }],
      msgPopupEvent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_22__.Output
      }],
      clickout: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_22__.HostListener,
        args: ["document:click", ["$event"]]
      }]
    };
  }
};
HeaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_28__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_22__.Component)({
  selector: "app-header",
  template: _header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_26__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_29__.FormsModule, _directives_dropdown_dropdown_directive__WEBPACK_IMPORTED_MODULE_11__.Dropdown, _directives_dropdown_dropdown_open_directive__WEBPACK_IMPORTED_MODULE_10__.DropdownOpen, _angular_router__WEBPACK_IMPORTED_MODULE_23__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_23__.RouterLinkActive, _directives_show_focus_directive__WEBPACK_IMPORTED_MODULE_12__.ShowFocusDirective, _product_authorization_popup_product_authorization_popup_component__WEBPACK_IMPORTED_MODULE_18__.ProductAuthorizationPopupComponent, _angular_common__WEBPACK_IMPORTED_MODULE_26__.LowerCasePipe, _pipes_segment_pipe__WEBPACK_IMPORTED_MODULE_13__.SegmentPipe, _pipes_value_pipe__WEBPACK_IMPORTED_MODULE_14__.ValuePipe],
  styles: [(_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_28__.__metadata)("design:paramtypes", [angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_25__.OAuthService, _services_rest_common_service__WEBPACK_IMPORTED_MODULE_20__.CommonService, _services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_15__.AnalyticsService, _angular_router__WEBPACK_IMPORTED_MODULE_23__.ActivatedRoute, _angular_core__WEBPACK_IMPORTED_MODULE_22__.NgZone, _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_17__.UtilsService, src_app_services_cryptography_service__WEBPACK_IMPORTED_MODULE_4__.CryptographyService, _angular_router__WEBPACK_IMPORTED_MODULE_23__.Router, _angular_core__WEBPACK_IMPORTED_MODULE_22__.Renderer2, _angular_common__WEBPACK_IMPORTED_MODULE_26__.Location, _services_sockets_broadcaster__WEBPACK_IMPORTED_MODULE_21__.Broadcaster, src_app_services_api_urls__WEBPACK_IMPORTED_MODULE_3__.APIURLs, _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_16__.SharedDataService, src_app_services_firestore_push_messaging_service__WEBPACK_IMPORTED_MODULE_6__.PushMessagingService, src_app_services_rest_tool_service__WEBPACK_IMPORTED_MODULE_7__.ToolService, src_app_services_sockets_socket_service__WEBPACK_IMPORTED_MODULE_8__.SocketService, ngx_webstorage__WEBPACK_IMPORTED_MODULE_27__.LocalStorageService, src_app_guards_login_guard_service__WEBPACK_IMPORTED_MODULE_2__.LoginGuard, src_app_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_5__.FirestoreService])], HeaderComponent);


/***/ }),

/***/ 99555:
/*!****************************************************************************************************!*\
  !*** ./src/app/common-module/product-authorization-popup/product-authorization-popup.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductAuthorizationPopupComponent: () => (/* binding */ ProductAuthorizationPopupComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _product_authorization_popup_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-authorization-popup.component.html?ngResource */ 20125);
/* harmony import */ var _product_authorization_popup_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-authorization-popup.component.scss?ngResource */ 39283);
/* harmony import */ var _product_authorization_popup_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_product_authorization_popup_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var src_app_services_cryptography_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/cryptography.service */ 67224);
/* harmony import */ var _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/utils/utils.service */ 89893);
/* harmony import */ var _services_rest_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/rest/common.service */ 18056);







let ProductAuthorizationPopupComponent = class ProductAuthorizationPopupComponent {
  constructor(cryptography, commonService, utils) {
    this.cryptography = cryptography;
    this.commonService = commonService;
    this.utils = utils;
    this.clickedOnAuthorization = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.closePopup = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
  }
  ngOnInit() {}
  ClickOnAuthorization() {
    if (this.productType === "algobullsAuthorized" || this.productType === "quantsappAuthorized" || this.productType === "stocksemojiAuthorized" || this.productType === "stockantsAuthorized" || this.productType == "narnoliaAuthorized" || this.productType == "pixstoxAuthorized" || this.productType == "tradetronAuthorized" || this.productType == "arthinirmitiAuthorized") {
      this.isAlgobullsAuthenticationServiceHit = true;
      let userId = this.cryptography.decryptText(this.utils.get("userId"));
      let sessionId = this.cryptography.decryptText(this.utils.get("sessionId"));
      let cid = this.productType === "algobullsAuthorized" ? this.cryptography.encryptTextAlgoBulls(userId) : this.productType === "stocksemojiAuthorized" ? this.cryptography.encryptTextStocksEmoji(userId) : this.productType === "stockantsAuthorized" ? this.cryptography.encryptTextStockants(userId) : this.productType === "narnoliaAuthorized" ? this.cryptography.encryptTextNarnolia(userId) : this.productType === "pixstoxAuthorized" ? this.cryptography.encryptTextPixstox(userId) : this.productType === "tradetronAuthorized" ? this.cryptography.encryptTextTradetron(userId) : this.productType === "arthinirmitiAuthorized" ? this.cryptography.encryptTextArthnirmiti(userId) : this.cryptography.encryptTextQuantsApp(userId);
      let sid = this.productType === "algobullsAuthorized" ? this.cryptography.encryptTextAlgoBulls(sessionId) : this.productType === "stocksemojiAuthorized" ? this.cryptography.encryptTextStocksEmoji(sessionId) : this.productType === "stockantsAuthorized" ? this.cryptography.encryptTextStockants(sessionId) : this.productType === "narnoliaAuthorized" ? this.cryptography.encryptTextNarnolia(sessionId) : this.productType === "pixstoxAuthorized" ? this.cryptography.encryptTextPixstox(sessionId) : this.productType === "tradetronAuthorized" ? this.cryptography.encryptTextTradetron(sessionId) : this.productType === "arthinirmitiAuthorized" ? this.cryptography.encryptTextArthnirmiti(sessionId) : this.cryptography.encryptTextQuantsApp(sessionId);
      let payload = {
        EncClientId: cid,
        EncSessionId: sid
      };
      this.commonService.algobullsAuthentication(payload, this.productType).subscribe(res => {
        if (res && res.status === 200 && res.body && res.body["Status"] === "Success") {
          this.clickedOnAuthorization.emit(true);
        } else {
          this.utils.error("Error", "Something went wrong!");
        }
      }, error => {
        this.utils.error("Error", "Something went wrong!");
      }).add(() => {
        this.isAlgobullsAuthenticationServiceHit = false;
      });
    } else {
      this.clickedOnAuthorization.emit(true);
    }
  }
  ClickedOnCancel() {
    this.closePopup.emit(true);
  }
  navigateTotc() {
    window.open(location.origin + "/links/algo-trading-t-c", "_blank");
  }
  static {
    this.ctorParameters = () => [{
      type: src_app_services_cryptography_service__WEBPACK_IMPORTED_MODULE_2__.CryptographyService
    }, {
      type: _services_rest_common_service__WEBPACK_IMPORTED_MODULE_4__.CommonService
    }, {
      type: _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_3__.UtilsService
    }];
  }
  static {
    this.propDecorators = {
      productType: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
      }],
      clickedOnAuthorization: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output
      }],
      closePopup: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output
      }]
    };
  }
};
ProductAuthorizationPopupComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: "app-product-authorization-popup",
  template: _product_authorization_popup_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  imports: [],
  styles: [(_product_authorization_popup_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [src_app_services_cryptography_service__WEBPACK_IMPORTED_MODULE_2__.CryptographyService, _services_rest_common_service__WEBPACK_IMPORTED_MODULE_4__.CommonService, _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_3__.UtilsService])], ProductAuthorizationPopupComponent);


/***/ }),

/***/ 89205:
/*!*********************************************!*\
  !*** ./src/app/pipes/sanitizer-url.pipe.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SanitizerURLPipe: () => (/* binding */ SanitizerURLPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ 345);



let SanitizerURLPipe = class SanitizerURLPipe {
  constructor(sanitizer) {
    this.sanitizer = sanitizer;
  }
  transform(url) {
    if (url) {
      url = url.replace("watch?v=", "embed/");
      return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    } else {
      return url;
    }
  }
  static {
    this.ctorParameters = () => [{
      type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__.DomSanitizer
    }];
  }
};
SanitizerURLPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Pipe)({
  name: 'sanitizerURL',
  standalone: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__.DomSanitizer])], SanitizerURLPipe);


/***/ }),

/***/ 24090:
/*!************************************************************************************!*\
  !*** ./src/app/post-login-module/corporate-actions/corporate-actions.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CorporateActionsComponent: () => (/* binding */ CorporateActionsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _corporate_actions_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./corporate-actions.component.html?ngResource */ 54718);
/* harmony import */ var _corporate_actions_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./corporate-actions.component.scss?ngResource */ 2684);
/* harmony import */ var _corporate_actions_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_corporate_actions_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _ngu_carousel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngu/carousel */ 77494);
/* harmony import */ var src_app_services_rest_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/rest/common.service */ 18056);
/* harmony import */ var src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/utils/utils.service */ 89893);
/* harmony import */ var _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/libs/esm-moment.min.js */ 29483);
/* harmony import */ var _pipes_segment_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pipes/segment.pipe */ 39995);
/* harmony import */ var _pipes_value_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pipes/value.pipe */ 50615);








/** Import Moment JS Library*/
// var moment: any = require();



let CorporateActionsComponent = class CorporateActionsComponent {
  constructor(restService, router, utilsService) {
    this.restService = restService;
    this.router = router;
    this.utilsService = utilsService;
    this.redirectionHandling = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    this.eventsData = [];
  }
  ngAfterViewInit() {
    let slider;
    slider = document.querySelector('.cardrow');
    let isDown = false;
    let startX;
    let scrollLeft;
    slider.addEventListener('mousedown', e => {
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener('mouseleave', () => {
      isDown = false;
      slider.classList.remove('active');
    });
    slider.addEventListener('mouseup', () => {
      isDown = false;
      slider.classList.remove('active');
    });
    slider.addEventListener('mousemove', e => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = x - startX; //(x - startX) * 2 : scroll-fast
      slider.scrollLeft = scrollLeft - walk;
    });
  }
  ngOnInit() {
    this.getEventsData();
    this.carouselConfig = {
      grid: {
        xs: 1,
        sm: 1,
        md: 1,
        lg: 1,
        all: 0
      },
      slide: 1,
      speed: 400,
      interval: {
        timing: 2500,
        initialDelay: 1000
      },
      point: {
        visible: true
      },
      load: 1,
      loop: true,
      touch: true
    };
  }
  /**
   * Get Events Data
   */
  getEventsData() {
    let request = {
      "SegmentID": 0,
      "Token": 0,
      "MonthYear": "",
      "Purpose": "",
      "FromDate": new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_4__["default"](),
      "ToDate": new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_4__["default"]().add(15, 'day')
    };
    this.eventsData = [];
    this.fetchingEvent = true;
    this.restService.getEventCalendar(request).subscribe(res => {
      this.fetchingEvent = false;
      if (res.Status === "Success" && res.Response) {
        let processedData = this.processEventCalendar(res.Response);
        if (processedData && processedData.length) processedData.reverse();
        this.eventsData = processedData.slice(0, 10);
        setTimeout(() => {
          this.eventsData.forEach((ele, i) => {
            let element = document.getElementById('corporate_' + i);
            if (element) {
              const delta = 6;
              let startX;
              let startY;
              element.addEventListener('mousedown', event => {
                startX = event.pageX;
                startY = event.pageY;
              });
              element.addEventListener('mouseup', event => {
                const diffX = Math.abs(event.pageX - startX);
                const diffY = Math.abs(event.pageY - startY);
                console.log("mouseup", diffX);
                if (diffX < delta && diffY < delta) {
                  this.goToCompany(ele);
                }
              });
            } else {
              // console.log("element not found")
            }
          });
        }, 2000);
        this.getMultiTouchLineData();
      } else {
        this.eventsData = [];
      }
    }, err => {
      this.eventsData = [];
      this.fetchingEvent = false;
    });
  }
  /**
   * Process Event Data
   * @param data
   * @returns
   */
  processEventCalendar(data) {
    let eventCategories = [{
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
    }];
    let validEvents = eventCategories;
    let responseArray = [];
    data.forEach((event, index) => {
      let companyURL = '/instrument/equity/' + (event.SecDesc || '').toLowerCase().replace(/[\s|\&|\%]/g, '').trim() + '/' + event.SegmentID + '/' + event.Token;
      validEvents.forEach((eventType, evIndex) => {
        if (event[eventType.key]) {
          let finalEvent = {
            ...event,
            ...event[eventType.key]
          };
          finalEvent.momentDate = new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_4__["default"](finalEvent[eventType.dateKey]);
          finalEvent.companyURL = companyURL;
          finalEvent[eventType.dateKey] = finalEvent.momentDate.valueOf();
          //  finalEvent.EventDate = new moment(finalEvent.EventDate).valueOf()
          finalEvent.RecordDate ? finalEvent.RecordDate = new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_4__["default"](finalEvent.RecordDate).valueOf() : '';
          finalEvent.AnnouncementDateFormatted = finalEvent.AnnouncementDate ? new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_4__["default"](finalEvent.AnnouncementDate).format('DD-MMM-YYYY') : '';
          //  finalEvent.EventDateFormatted = finalEvent.EventDate ?  new moment(finalEvent.EventDate).format('DD-MMM-YYYY') : '';
          finalEvent.EventDateFormatted = finalEvent.EventDate ? this.dateToFromNowDaily(new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_4__["default"](finalEvent.EventDate)) : '';
          delete finalEvent[eventType.key];
          finalEvent.eventType = eventType.value;
          // categories[eventType.key].data.push(finalEvent);
          responseArray.push(finalEvent);
        }
      });
      //}
    });
    return responseArray;
  }
  /**
   * Get Datewise today tommorow
   * @param myDate
   * @returns
   */
  dateToFromNowDaily(myDate) {
    // get from-now for this date
    var fromNow = (0,_assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_4__["default"])(myDate).fromNow();
    // ensure the date is displayed with today and yesterday
    return (0,_assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_4__["default"])(myDate).calendar(null, {
      // when the date is closer, specify custom values
      lastWeek: '[Last] dddd',
      lastDay: '[Yesterday]',
      sameDay: '[Today]',
      nextDay: '[Tomorrow]',
      nextWeek: 'dddd',
      // when the date is further away, use from-now functionality             
      sameElse: function () {
        return "[" + fromNow + "]";
      }
    });
  }
  /**
  * Get MultiTouchLine Data
  */
  getMultiTouchLineData() {
    const userId = this.utilsService.getUserId();
    let datapoints = [];
    if (this.eventsData && this.eventsData.length) {
      this.eventsData.forEach(item => {
        datapoints.push({
          SegmentId: item.SegmentID,
          Token: item.Token
        });
      });
    }
    const tokens = this.utilsService.generateTokens(this.eventsData, 'SegmentID', 'Token');
    const payload = {
      'UserId': !userId || userId == 'guest' ? 'guest' : userId,
      'SessionId': this.utilsService.getSessionId() || '',
      'MultipleTokens': tokens
    };
    this.utilsService.commonGetMultipleTouchLineCall(payload).subscribe(data => {
      if (data.Status == 'Success' && data.Response && data.Response.lMT && data.Response.lMT.length) {
        console.log("eventsData multitouchline11 ", JSON.parse(JSON.stringify(this.eventsData)));
        const multitouchLineResponse = data.Response.lMT;
        multitouchLineResponse.forEach((element, index) => {
          if (element['SegmentId'] == this.eventsData[index].SegmentID && element['Token'] == this.eventsData[index].Token) {
            Object.assign(element, Object.assign(this.eventsData[index], element));
            let isSame = element['LTP'] == element['Change'];
            element['prevChange'] = 0;
            element['PrvClose'] = element['LTP'] - element['Change'];
            element['PrvClose'] = element['PrvClose'] / element['PriceDivisor'];
            element['LTP'] = Number(element['LTP'] / element['PriceDivisor']);
            element['Change'] = isSame ? 0 : element['Change'] / element['PriceDivisor'];
            element['ChangePer'] = element['Change'] / element['PrvClose'] * 100;
            element.class = element['Change'] < 0 ? 'down' : element['Change'] > 0 ? 'up' : '';
            element['Change'] = element['Change'];
            element['ChangePer'] = element['ChangePer'];
            this.eventsData[index] = Object.assign(this.eventsData[index], element);
          }
        });
        this.eventsData = [...this.eventsData];
      } else {}
      this.getFutureSocketRes();
      this.utilsService.subscribeMultitouchline(datapoints);
    }, err => {
      this.getFutureSocketRes();
      this.utilsService.subscribeMultitouchline(datapoints);
    });
    // }
  }
  /**
   * Socket Subscribe
   */
  getFutureSocketRes() {
    this.watchSubs = this.utilsService.broadcastObservable('watchlist').subscribe(res => {
      let scrip = this.eventsData.filter((obj, index) => {
        return res[0]['1'] == obj.SegmentID && obj.Token == res[0]["7"];
      });
      if (scrip.length > 0 && this.utilsService.isUpdatedData(scrip[0], res[0])) {
        let priceDivisor = this.utilsService.getDefaultPriceDivisor(res[0]['1'], res[0]['7']);
        let obj = scrip[0];
        obj.Volume = Number(res[0][79]) || obj.Volume || 0;
        obj.prevChange = (Number(res[0]['8']) / priceDivisor || 0) - (obj.LTP || 0);
        obj['PrvClose'] = res[0]['76'];
        obj.LTP = Number(res[0]["8"]) == 0 ? obj['PrvClose'] / priceDivisor : (res[0]["8"] || 0) / priceDivisor; // if LTP == 0 then show prevClose (10/05/2021)
        obj.Change = ((res[0]['8'] == 0 ? obj['PrvClose'] : Number(res[0]['8'] || 0)) - Number(res[0]['76'])) / priceDivisor || obj.Change; // (res[0]['8'] - obj['PrvClose']) / (res[0]['399'] || 1);//
        obj['ChangePer'] = obj['Change'] / (res[0]['76'] / priceDivisor) * 100 || obj['ChangePer'];
        // obj.LTP = res[0]["8"] / res[0]["399"];
        obj.class = obj['Change'] < 0 ? 'down' : obj['Change'] > 0 ? 'up' : '';
        obj.Change = obj.Change;
        obj.ChangePer = obj.ChangePer;
      }
    });
  }
  /**
   * Go To Company page
   * @param item
   */
  goToCompany(item) {
    if (item.companyURL) {
      this.redirectionHandling.emit(true);
      this.router.navigate([item.companyURL]);
    }
  }
  redirectTo(url) {
    this.redirectionHandling.emit(true);
    this.router.navigate([url]);
  }
  ngOnDestroy() {
    if (this.watchSubs) this.watchSubs.unsubscribe();
  }
  static {
    this.ctorParameters = () => [{
      type: src_app_services_rest_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
    }, {
      type: src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_3__.UtilsService
    }];
  }
  static {
    this.propDecorators = {
      myCarousel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild,
        args: ['myCarousel', {
          static: false
        }]
      }],
      redirectionHandling: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
      }]
    };
  }
};
CorporateActionsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-corporate-actions',
  template: _corporate_actions_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  imports: [_ngu_carousel__WEBPACK_IMPORTED_MODULE_10__.NguCarousel, _ngu_carousel__WEBPACK_IMPORTED_MODULE_10__.NguCarouselDefDirective, _ngu_carousel__WEBPACK_IMPORTED_MODULE_10__.NguCarouselPointDirective, _pipes_segment_pipe__WEBPACK_IMPORTED_MODULE_5__.SegmentPipe, _pipes_value_pipe__WEBPACK_IMPORTED_MODULE_6__.ValuePipe],
  styles: [(_corporate_actions_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:paramtypes", [src_app_services_rest_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService, _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router, src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_3__.UtilsService])], CorporateActionsComponent);


/***/ }),

/***/ 52594:
/*!********************************************************************************!*\
  !*** ./src/app/post-login-module/jiffy-dashboard/jiffy-dashboard.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JiffyDashboardComponent: () => (/* binding */ JiffyDashboardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _jiffy_dashboard_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jiffy-dashboard.component.html?ngResource */ 35750);
/* harmony import */ var _jiffy_dashboard_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jiffy-dashboard.component.scss?ngResource */ 47252);
/* harmony import */ var _jiffy_dashboard_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_jiffy_dashboard_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _slick_css_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slick.css?ngResource */ 98115);
/* harmony import */ var _slick_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_slick_css_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _slick_theme_css_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slick-theme.css?ngResource */ 2843);
/* harmony import */ var _slick_theme_css_ngResource__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_slick_theme_css_ngResource__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _ngu_carousel__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ngu/carousel */ 77494);
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @swimlane/ngx-charts */ 65814);
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! angular-oauth2-oidc */ 1244);
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-webstorage */ 12426);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 1807);
/* harmony import */ var src_app_common_module_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common-module/header/header.component */ 9423);
/* harmony import */ var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/analytics/analytics.service */ 50213);
/* harmony import */ var src_app_services_api_urls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/api-urls */ 26702);
/* harmony import */ var src_app_services_cryptography_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/cryptography.service */ 67224);
/* harmony import */ var src_app_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/firestore/firestore.service */ 49125);
/* harmony import */ var src_app_services_rest_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/rest/common.service */ 18056);
/* harmony import */ var src_app_services_sockets_broadcaster__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/sockets/broadcaster */ 28510);
/* harmony import */ var _common_module_product_authorization_popup_product_authorization_popup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common-module/product-authorization-popup/product-authorization-popup.component */ 99555);
/* harmony import */ var _pipes_condense_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../pipes/condense.pipe */ 82203);
/* harmony import */ var _pipes_sanitizer_url_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../pipes/sanitizer-url.pipe */ 89205);
/* harmony import */ var _pipes_value_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../pipes/value.pipe */ 50615);
/* harmony import */ var _services_rest_post_login_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../services/rest/post-login.service */ 4135);
/* harmony import */ var _corporate_actions_corporate_actions_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../corporate-actions/corporate-actions.component */ 24090);
/* harmony import */ var _market_dashboard_market_dashboard_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../market-dashboard/market-dashboard.component */ 37254);
/* harmony import */ var _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./../../services/shared-data/shared-data.service */ 46013);
/* harmony import */ var _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./../../services/utils/utils.service */ 89893);





























let JiffyDashboardComponent = class JiffyDashboardComponent {
  onScrollEvent($event) {
    console.log(document.documentElement.scrollTop, "document.documentElement.scrollTop");
    this.scrollTop = document.documentElement.scrollTop || 0;
  }
  constructor(cryptography, postLoginRest, oauthService, rest, broadcaster, activatedRoute, firebaseService, utils, postLoginService, shared, route, apiURL, storage, header, analytics) {
    this.cryptography = cryptography;
    this.postLoginRest = postLoginRest;
    this.oauthService = oauthService;
    this.rest = rest;
    this.broadcaster = broadcaster;
    this.activatedRoute = activatedRoute;
    this.firebaseService = firebaseService;
    this.utils = utils;
    this.postLoginService = postLoginService;
    this.shared = shared;
    this.route = route;
    this.apiURL = apiURL;
    this.storage = storage;
    this.header = header;
    this.analytics = analytics;
    this.activevideo = false;
    this.disableLeft = false;
    this.disableRight = false;
    this.MediaList = [];
    this.webinarList = [];
    this.webinarCheck = false;
    /**
     * Blog list
     */
    this.BlogList = [];
    this.NewsList = [];
    this.userAccountStatus = {};
    this.scrollTop = 0;
    let userProfile = this.utils.getProfile();
    let selectedUser = localStorage.getItem("selectedUser") ? JSON.parse(localStorage.getItem("selectedUser")) : {};
    this.config = {
      name: userProfile.Name ? userProfile.Name.split(" ")[0] : selectedUser ? selectedUser.FullName ? selectedUser.FullName.split(" ")[0] : "" : "",
      hightlightedChartSection: "",
      eqInv: 0,
      mfInv: 0,
      oaCurrent: 0,
      oaInv: 0,
      totalpnl: 0,
      totalpnlperc: 0,
      eqTotalPnl: 0,
      eqTotalPnlPercent: 0,
      mfTotalPnl: 0,
      mfTotalPnlPerc: 0,
      fund: 0,
      niftyContent: [],
      niftyContentIndex: 0,
      openIPOCount: 0,
      researchSuccessRatio: 0,
      researchClass: "success-green",
      classBars: "greenbar",
      mfBasket: [],
      diversifyBanner: [],
      ipoBanner: [],
      colorScheme: {
        domain: ["#5B94F6", "#F8CC61", "#5AA454", "#A10A28", "#C7B42C", "#AAAAAA"]
      },
      view: [180, 180],
      donutData: [],
      showLegend: false,
      explodeSlices: false,
      showLabels: false,
      doughnut: true,
      tooltipDisabled: true
    };
    this.loader = {
      portfolioLoader: false,
      combinedBasketLoader: false,
      diversifyLoader: false,
      partnerProducts: false
    };
    this.finxSchoolVideos = {};
    this.finxSchool = "videos";
    this.carouselConfig = {
      grid: {
        xs: 1,
        sm: 1,
        md: 1,
        lg: 1,
        all: 0
      },
      //slide: 1,
      speed: 400,
      interval: {
        timing: 3000,
        initialDelay: 1000
      },
      point: {
        visible: true
      },
      load: 1,
      loop: true,
      touch: true,
      animation: "lazy"
    };
    this.basketCarouselConfig = {
      grid: {
        xs: 1,
        sm: 1,
        md: 1,
        lg: 1,
        all: 0
      },
      slide: 1,
      speed: 400,
      interval: {
        timing: 2500,
        initialDelay: 1000
      },
      point: {
        visible: true
      },
      load: 1,
      loop: true,
      touch: true
    };
    this.userFlags = {
      isUserTypeNewbie: false,
      promoteMfTaxSaver: false
    };
    this.partnerProductList = [{
      label: "Modern Algos",
      img: "../../assets/images/dashboard-partner-product/modernalgo.svg",
      authorizeKey: "modernalgosAuthorized",
      remoteConfigKey: "show_modernalgos_product",
      visibility: false
    }, {
      label: "AlgoBulls",
      img: "../../assets/images/dashboard-partner-product/algobulls.svg",
      authorizeKey: "algobullsAuthorized",
      remoteConfigKey: "show_algobulls_product",
      visibility: false
    }, {
      label: "QuantsApp",
      img: "../../assets/images/dashboard-partner-product/quantsapp.svg",
      authorizeKey: "quantsappAuthorized",
      remoteConfigKey: "show_quantsapp_product",
      visibility: false
    }, {
      label: "Algocrab",
      img: "../../assets/images/dashboard-partner-product/algocrab.svg",
      authorizeKey: "algocrabAuthorized",
      remoteConfigKey: "show_algocrab_product",
      visibility: false
    }, {
      label: "Stocks Emoji",
      img: "../../assets/images/dashboard-partner-product/stocksemoji.svg",
      authorizeKey: "stocksemojiAuthorized",
      remoteConfigKey: "show_stocks_emoji_product",
      visibility: false
    }, {
      label: "Stockants",
      img: "../../assets/images/dashboard-partner-product/stockants.svg",
      authorizeKey: "stockantsAuthorized",
      remoteConfigKey: "show_stockants_product",
      visibility: false
    }, {
      label: "Narnolia",
      img: "../../assets/images/dashboard-partner-product/narnolia.png",
      authorizeKey: "narnoliaAuthorized",
      remoteConfigKey: "show_narnolia_product",
      visibility: false
    }, {
      label: "Pixstox",
      img: "../../assets/images/dashboard-partner-product/pixstox.png",
      authorizeKey: "pixstoxAuthorized",
      remoteConfigKey: "show_pixstox_product",
      visibility: false
    }, {
      label: "AlgoWizard",
      img: "../../assets/images/dashboard-partner-product/tradetron.jpg",
      authorizeKey: "tradetronAuthorized",
      remoteConfigKey: "show_tradetron_product",
      visibility: false
    }];
    this.productType = "";
    this.showExplore = this.utils.get("showExplore") ? this.cryptography.decryptText(this.utils.get("showExplore")) : "true";
  }
  ngOnInit() {
    this.userAccountStatus = this.utils.getUserAccountStatus();
    this.shared.isSSO = localStorage.getItem('isSSO') == 'true';
    if (Object.keys(this.utils.get("dashboardMarketFilter") || {}).length) {
      this.dashboardMarketFilter = this.utils.get("dashboardMarketFilter");
    }
    this.getFirebaseConfig();
    this.sectionactive();
    this.WebinarLoader = true;
    this.firebaseService.getRemoteConfig("social_media_links", value => {
      if (value) {
        this.medialists = JSON.parse(value);
        this.MediaList = this.medialists.media;
      } else {
        this.MediaList = [];
      }
    });
    this.firebaseService.getRemoteConfig("finx_webinar", data => {
      if (data) {
        this.WebinarLoader = false;
        this.webinarLists = {};
        this.webinarList = {};
        this.webinarLists = JSON.parse(data);
        this.webinarList = this.webinarLists.webinar;
        this.webinarCheck = !(this.webinarList[0].webinarLink == "" && this.webinarList[0].webinarImg == "");
      } else {
        this.webinarCheck = false;
        this.WebinarLoader = false;
        this.webinarList = [];
      }
    });
    // this.getUserFlags();
    this.getPortfolioDetails();
    let userFlags = this.utils.getSpecificUserFlags();
    if (userFlags && userFlags.acctnCreatedVia == "india-post") {
      this.getMFBasketDetails();
    }
    this.getCombinedBasketDetails();
    // this.getDiversifyData();
    // this.getLatestNews();
    // setTimeout(() => {
    //   this.getPortfolioDetailsBg();
    // }, 2000);
    // setTimeout(() => {
    //   this.getPortfolioDetailsBg();
    // }, 6000);
    this.portfolioSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.timer)(30000, 30000).subscribe(() => {
      this.getPortfolioDetailsBg();
    });
    this.loader.partnerProducts = true;
    this.partnerProductList.forEach((item, index) => {
      if (item.remoteConfigKey) {
        this.firebaseService.getRemoteConfig(item.remoteConfigKey, response => {
          if (response) {
            item.visibility = response === "true" ? true : false;
            if (index == this.partnerProductList.length - 1) {
              this.loader.partnerProducts = false;
            }
          }
        });
      }
    });
    //   SegmentId: //Segment Id
    // Token: //Token
    // OrderType: RL_MKT || RL_LIMIT || SL_MKT || SL_LIMIT *
    // Amount: Total AMT*
    // BS: 1 for BUY || 2 for SELL, *
    // Qty: //quantity, *
    // Price: Price*, //Int
    // TriggerPrice: Trigger Price *Based on ordertype,
    // Validity: (Day -> 1, IOC -> 4, GTD -> 11, GTC -> 11)
    // ProductType: (D -> Delivery, M -> Intraday, MTF -> MTF) *
    // GTDDate:03-Dec-2023,
    // GTDDays: *required if Gtd/Gtc opted
    // let MarketOrderIOC={
    //   SegmentId: 1,//Segment Id
    // Token: 14366,//Token
    // OrderType: "RL_MKT",
    // BS: 1,
    // Qty: 1,
    // Price:0, //Int
    // TriggerPrice:0,
    // Validity: 4,
    // ProductType: "D",
    // GTDDate:"",
    // GTDDays: 0
    //   }
    // let LimitOrderIOC={
    //   SegmentId: 1,//Segment Id
    // Token: 14366,//Token
    // OrderType: "RL_LIMIT",
    // BS: 1,
    // Qty: 1,
    // Price:1327, //Int
    // TriggerPrice:0,
    // Validity: 4,
    // ProductType: "D",
    // GTDDate:"",
    // GTDDays: 0
    //   }
    //   let LimitOrderGTD={
    //   SegmentId: 1,//Segment Id
    // Token: 14366,//Token
    // OrderType: "RL_LIMIT",
    // BS: 1,
    // Qty: 1,
    // Price:1327, //Int
    // TriggerPrice:0,
    // Validity: 4,
    // ProductType: "D",
    // GTDDate:"2023-12-02T18:30:00.000Z",
    // GTDDays: 2
    //   }
    // let LimitOrderGTC={
    //   SegmentId: 1,//Segment Id
    // Token: 14366,//Token
    // OrderType: "RL_LIMIT",
    // BS: 1,
    // Qty: 1,
    // Price:1327, //Int
    // TriggerPrice:0,
    // Validity: 4,
    // ProductType: "D",
    // GTDDate:"2025-02-22T18:30:00.000Z",
    // GTDDays: 450,
    //   }
    // let StopLossLimitOrderIOC={
    //   SegmentId: 1,//Segment Id
    // Token: 14366,//Token
    // OrderType: "SL_LIMIT",
    // BS: 1,
    // Qty: 1,
    // Price:1327, //Int
    // TriggerPrice:1329,
    // Validity: 4,
    // ProductType: "D",
    // GTDDate:"",
    // GTDDays: 0
    //   }
    // let StopLossMarketOrderIOC={
    //   SegmentId: 1,//Segment Id
    // Token: 14366,//Token
    // OrderType: "SL_MKT",
    // BS: 1,
    // Qty: 1,
    // Price:1327, //Int
    // TriggerPrice:1329,
    // Validity: 4,
    // ProductType: "D",
    // GTDDate:"",
    // GTDDays: 0
    //   }
    //"localhost:4200/portfolio/holdings?SegmentId=1&Token=14366&OrderType=RL_MKT&BS=1&Qty=1&Price=0&TriggerPrice=0&ProductType=D"
    let MarketOrderDay = {
      SegmentId: 1,
      //Segment Id
      Token: 14366,
      //Token
      OrderType: "RL_MKT",
      BS: 1,
      Qty: 1,
      Price: 0,
      //Int
      TriggerPrice: 0,
      Validity: 1,
      ProductType: "D"
    };
    //"localhost:4200/portfolio/holdings?SegmentId=1&Token=14366&OrderType=RL_MKT&BS=1&Qty=1&Price=1327&TriggerPrice=0&ProductType=D"
    let LimitOrderDay = {
      SegmentId: 1,
      //Segment Id
      Token: 14366,
      //Token
      OrderType: "RL_LIMIT",
      BS: 1,
      Qty: 1,
      Price: 1327,
      //Int
      TriggerPrice: 0,
      Validity: 1,
      ProductType: "D"
    };
    //"localhost:4200/portfolio/holdings?SegmentId=1&Token=14366&OrderType=SL_LIMIT&BS=1&Qty=1&Price=1327&TriggerPrice=1329&ProductType=D"
    //http://localhost:4200/portfolio/holdings/1/14366/SL_LIMIT/D/1/1/1327/1329
    let StopLossLimitOrderDay = {
      SegmentId: 1,
      //Segment Id
      Token: 14366,
      //Token
      OrderType: "SL_LIMIT",
      BS: 1,
      Qty: 1,
      Price: 1327,
      //Int
      TriggerPrice: 1329,
      Validity: 1,
      ProductType: "D"
    };
    //"localhost:4200/portfolio/holdings?SegmentId=1&Token=14366&OrderType=SL_MKT&BS=1&Qty=1&Price=1327&TriggerPrice=1329&ProductType=D"
    let StopLossMarketOrderDay = {
      SegmentId: 1,
      //Segment Id
      Token: 14366,
      //Token
      OrderType: "SL_MKT",
      BS: 1,
      Qty: 1,
      Price: 1327,
      //Int
      TriggerPrice: 1329,
      Validity: 1,
      ProductType: "D"
    };
    // let selectedOrder=LimitOrderDay
    // this.lambdaOrder=true
    // if(this.lambdaOrder){
    //   let config = {
    //     productType: selectedOrder.ProductType=='D'?'delivery':selectedOrder.ProductType=='MF'?'mtf':'intraday',
    //     dayIOCFlag: selectedOrder.Validity,
    //     triggerPrice: selectedOrder.TriggerPrice,
    //     price: selectedOrder.Price,
    //     quantity: selectedOrder.Qty,
    //     disclosedQty: 0,
    //     advOrderType: 1,
    //     orderType: selectedOrder.OrderType,
    //     exOrderTime: "0",
    //     gatewayOrderNo: "0",
    //     exOrderNo: "0",
    //     finalOrderType: selectedOrder.OrderType,
    //      GTDDays:0
    //   };
    //  setTimeout(() => {
    //   this.utils.broadcast("openBuySellDrawer", {
    //     scrip: {
    //       SegmentId:selectedOrder.SegmentId,
    //       Token:selectedOrder.Token,
    //       SecName:"Idea"
    //     },
    //     action: selectedOrder.BS,
    //     config: config,
    //   });
    //  }, 5000);
    // }
  }
  ngAfterViewInit() {
    this.realtimeMessage = localStorage.getItem("realtimeMessage") != "1";
    if (this.realtimeMessage) {
      setTimeout(() => {
        if (document.getElementById('delayed-message')) document.getElementById('delayed-message').classList.add("msg-active");
      }, 1500);
    }
    // let slider: HTMLElement
    // slider = document.querySelector('.rowwrap');
    // let isDown = false;
    // let startX;
    // let scrollLeft;
    // slider.addEventListener('mousedown', (e: MouseEvent) => {
    //   isDown = true;
    //   slider.classList.add('active');
    //   startX = e.pageX - slider.offsetLeft;
    //   scrollLeft = slider.scrollLeft;
    // });
    // slider.addEventListener('mouseleave', () => {
    //   isDown = false;
    //   slider.classList.remove('active');
    // });
    // slider.addEventListener('mouseup', () => {
    //   isDown = false;
    //   slider.classList.remove('active');
    // });
    // slider.addEventListener('mousemove', (e) => {
    //   if (!isDown) return;
    //   e.preventDefault();
    //   const x = e.pageX - slider.offsetLeft;
    //   const walk = (x - startX); //(x - startX) * 2 : scroll-fast
    //   slider.scrollLeft = scrollLeft - walk;
    // });
    // this.ipoBannerScroll();
    // this.basketCarousel.pointNumbers = [this.config.mfBasket.length -1];
    if (!localStorage.getItem("dashboard-walkthrough")) {
      this.showWalkthrough();
      localStorage.setItem("dashboard-walkthrough", "1");
    } else {
      this.shared.showWalkThrough["showWalkThrough"] = false;
    }
    setTimeout(() => {
      this.dashboardScrolling();
    }, 250);
    //this.openVid()
  }
  showWalkthrough() {
    let id = "dashboard-indices";
    let viewName = document.getElementById(id);
    if (viewName) {
      let coordinate = viewName.getBoundingClientRect();
      this.shared.showWalkThrough["showFirstPopup"] = false;
      this.shared.showWalkThrough["showWalkThrough"] = true;
      this.shared.showWalkThrough["feature"] = "homePage";
      // this.shared.showWalkThrough['right'] = 150 ;
      //   this.shared.showWalkThrough['top'] = 250 ;
      this.shared.showWalkThrough["left"] = coordinate.left + window.scrollX;
      this.shared.showWalkThrough["top"] = coordinate["top"] + window.scrollY + 40;
      this.shared.showWalkThrough["count"] = 0;
      let presetObj = this.utils.walkthrgConfig["homePage"][0];
      presetObj.id = id;
      this.utils.walkthrgConfig["homePage"][0] = presetObj;
      this.shared.showWalkThrough["presentObj"] = this.utils.walkthrgConfig["homePage"][0];
      this.broadcaster.broadcast("watchlistWalkthrgh", this.utils.walkthrgConfig["homePage"][0]);
    } else {
      this.shared.showWalkThrough["showWalkThrough"] = false;
    }
  }
  getPortfolioDetails() {
    let request = {
      UserId: this.utils.getUserId() || "",
      SessionId: this.utils.getSessionId() || "",
      GroupId: "HO"
    };
    let userAccountStatus = this.utils.getUserAccountStatus();
    if (!(!userAccountStatus || !userAccountStatus.onboardStatus || userAccountStatus.onboardStatus == 'C' || userAccountStatus.onboardStatus == 'MF')) {
      return;
    }
    this.loader.portfolioLoader = true;
    this.postLoginService.getClientPortfolioDetails(request).subscribe(res => {
      if (res && res.Status === "Success" && res.Response) {
        this.config.eqCurrent = res.Response.HoldingCurrentValue;
        this.config.mfCurrent = res.Response.MFCurrentValue;
        this.config.eqInv = res.Response.HoldingCurrentValue - res.Response.HoldingTotalProfitLoss;
        this.config.mfInv = res.Response.MFCurrentValue - res.Response.MFTotalProfitLoss;
        this.config.oaCurrent = this.config.eqCurrent + this.config.mfCurrent;
        this.config.oaInv = this.config.eqInv + this.config.mfInv;
        this.config.totalpnl = res.Response.HoldingTotalProfitLoss + res.Response.MFTotalProfitLoss;
        this.config.totalpnlperc = this.config.totalpnl / this.config.oaInv * 100;
        this.config.eqTotalPnl = res.Response.HoldingTotalProfitLoss;
        this.config.eqTotalPnlPercent = res.Response.HoldingTotalProfitLossPercent;
        this.config.mfTotalPnl = res.Response.MFTotalProfitLoss;
        this.config.mfTotalPnlPerc = res.Response.MFTotalProfitLossPercent;
        this.config.fund = res.Response.AvailableBalance;
        this.config.eqCurrentPerc = this.config.eqCurrent / this.config.oaCurrent * 100;
        this.config.mfCurrentPerc = this.config.mfCurrent / this.config.oaCurrent * 100;
        this.config.donutData = [{
          name: "Equity",
          value: this.config.eqCurrentPerc
        }, {
          name: "Mutual Funds",
          value: this.config.mfCurrentPerc
        }];
      } else if (this.utils.isSessionExpired(res.Reason)) {
        this.shared.isSSO = localStorage.getItem('isSSO') == 'true';
        if (this.shared.isSSO) {
          this.checkIftwoFAValidated(true);
          // this.utils.sessionExpireHandling()
          return;
        }
        this.utils.error("Session Expired", "Please Login Again.");
        this.utils.postFeatureCount();
        this.utils.clearLoginDetails();
        this.shared.userId = null;
        this.route.navigate(["auth/login"]);
      } else {
        this.utils.error("Error", "Something went wrong!!");
      }
    }, error => {
      this.utils.error("Error", "Something went wrong!!");
    }).add(() => {
      this.loader.portfolioLoader = false;
    });
  }
  redirectTo(type) {
    switch (type) {
      case "eq":
        this.analytics.emitEvent("DashboardSm", this.utils.getUserId() || "", "Dashboard", 1);
        this.utils.setTrackMoeEvent("clickedOn", {
          UserId: this.utils.getUserId() || "",
          buttonName: "DashboardSm"
        });
        this.storeScrollTop();
        this.route.navigate(["/post/portfolio/holdings"]);
        break;
      case "mf":
        this.analytics.emitEvent("DashboardMf", this.utils.getUserId() || "", "Dashboard", 1);
        this.utils.setTrackMoeEvent("clickedOn", {
          UserId: this.utils.getUserId() || "",
          buttonName: "DashboardMf"
        });
        this.storeScrollTop();
        this.route.navigate(["/post/portfolio/mf-holdings"]);
        break;
      case "fund":
        this.analytics.emitEvent("DashboardTradableFund", this.utils.getUserId() || "", "Dashboard", 1);
        this.utils.setTrackMoeEvent("clickedOn", {
          UserId: this.utils.getUserId() || "",
          buttonName: "DashboardTradableFund"
        });
        this.storeScrollTop();
        this.route.navigate(["/client/funds"]);
        break;
      case "no-eq":
        this.analytics.emitEvent("DashboardSm", this.utils.getUserId() || "", "Dashboard", 1);
        this.utils.setTrackMoeEvent("clickedOn", {
          UserId: this.utils.getUserId() || "",
          buttonName: "DashboardSm"
        });
        this.storeScrollTop();
        this.route.navigate(["/research-report/research/experts/EQ"]);
        break;
      case "no-mf":
        this.analytics.emitEvent("DashboardMf", this.utils.getUserId() || "", "Dashboard", 1);
        this.utils.setTrackMoeEvent("clickedOn", {
          UserId: this.utils.getUserId() || "",
          buttonName: "DashboardMf"
        });
        this.storeScrollTop();
        this.goToInvestica();
        break;
      case "elss":
        let clientProfile = this.utils.getProfile();
        this.storeScrollTop();
        this.goToInvestica();
        // this.route.navigate(["/client/mutual-fund/" + clientProfile.PanCard]);
        break;
      case "no-fund":
        this.analytics.emitEvent("DashboardTradableFund", this.utils.getUserId() || "", "Dashboard", 1);
        this.utils.setTrackMoeEvent("clickedOn", {
          UserId: this.utils.getUserId() || "",
          buttonName: "DashboardTradableFund"
        });
        this.storeScrollTop();
        this.route.navigate(["/client/funds"], {
          queryParams: {
            open: "deposit"
          }
        });
        break;
      case "mf-basket":
        this.analytics.emitEvent("DashboardMfBasketSeeAll", this.utils.getUserId() || "", "Dashboard", 1);
        this.utils.setTrackMoeEvent("clickedOn", {
          UserId: this.utils.getUserId() || "",
          buttonName: "DashboardMfBasketSeeAll"
        });
        this.mfRedirectionLink("mf/recommended-mutual-funds");
        break;
      case "research":
        this.analytics.emitEvent("DashboardSmResearchOverall", this.utils.getUserId() || "", "Dashboard", 1);
        this.utils.setTrackMoeEvent("clickedOn", {
          UserId: this.utils.getUserId() || "",
          buttonName: "DashboardSmResearchOverall"
        });
        this.storeScrollTop();
        this.route.navigate(["/research-report/research/experts/EQ"]);
        break;
      default:
        break;
    }
  }
  getCombinedBasketDetails() {
    this.loader.combinedBasketLoader = true;
    this.postLoginService.getCombinedBasketDetails().subscribe(res => {
      if (res && res.Status === "Success" && res.Response) {
        this.config.niftyContent = res.Response.newsAndTips || [];
        this.config.openIPOCount = res.Response.openIPOCount || 0;
        this.config.researchSuccessRatio = res.Response.researchSuccessRatio || 0;
        this.config.researchClass = this.config.researchSuccessRatio <= 50 ? "success-red" : this.config.researchSuccessRatio < 60 && this.config.researchSuccessRatio > 50 ? "success-orange" : "success-green";
        this.config.classBars = this.config.researchSuccessRatio <= 50 ? "redbar" : this.config.researchSuccessRatio < 60 && this.config.researchSuccessRatio > 50 ? "orangebar" : "greenbar";
        let userFlags = this.utils.getSpecificUserFlags();
        if (userFlags && userFlags.acctnCreatedVia != "india-post") {
          this.config.mfBasket = res.Response.mfBaskets || [];
        }
        setTimeout(() => {
          this.config.mfBasket.forEach((ele, i) => {
            let element = document.getElementById("mf_basket_" + i);
            if (element) {
              const delta = 6;
              let startX;
              let startY;
              element.addEventListener("mousedown", event => {
                startX = event.pageX;
                startY = event.pageY;
              });
              element.addEventListener("mouseup", event => {
                const diffX = Math.abs(event.pageX - startX);
                const diffY = Math.abs(event.pageY - startY);
                if (diffX < delta && diffY < delta) {
                  this.redirectToBasketDetails(ele);
                }
              });
            } else {
              // console.log("element not found")
            }
          });
        }, 2000);
        // } else if (this.utils.isSessionExpired(res.reason)) {
        //   this.shared.isSSO =  localStorage.getItem('isSSO')=='true'
        //   if(this.shared.isSSO){
        //     this.utils.sessionExpireHandling()
        //     return
        //   }
        //   this.utils.error("Session Expired", "Please Login Again.");
        //   this.utils.postFeatureCount();
        //   this.utils.clearLoginDetails();
        //   this.shared.userId = null;
        //   this.route.navigate(["auth/login"]);
      } else {
        this.utils.error("Error", "Something went wrong!!");
      }
    }, error => {
      this.loader.combinedBasketLoader = false;
      this.utils.error("Error", "Something went wrong!!");
    }).add(() => {
      this.loader.combinedBasketLoader = false;
    });
  }
  sliderRedirect(content, type) {
    switch (content) {
      case "nifty":
        this.analytics.emitEvent("DashboardInsights", this.utils.getUserId() || "", "Dashboard", 1);
        this.utils.setTrackMoeEvent("clickedOn", {
          UserId: this.utils.getUserId() || "",
          buttonName: "DashboardInsights"
        });
        if (type === "next" && this.config.niftyContentIndex !== this.config.niftyContent.length - 1) {
          this.config.niftyContentIndex = this.config.niftyContentIndex + 1;
        } else if (type === "prev" && this.config.niftyContentIndex !== 0) {
          this.config.niftyContentIndex = this.config.niftyContentIndex - 1;
        }
        break;
      default:
        break;
    }
  }
  /** blog and video active class */
  sectionactive() {
    this.activevideo = !this.activevideo;
    this.activevideo == false ? this.getLatestBlog() : "";
  }
  goToInvestica(redirectUrl) {
    let userAccountStatus = this.utils.getUserAccountStatus();
    let onboardStatus = !userAccountStatus || !userAccountStatus.onboardStatus || userAccountStatus.onboardStatus == 'C' || userAccountStatus.onboardStatus == 'MF' ? 'C' : userAccountStatus.onboardStatus;
    let isGuest = userAccountStatus && userAccountStatus.GuestUser;
    // if((userAccountStatus && userAccountStatus.onboardStatus && userAccountStatus.GuestUser && (userAccountStatus.onboardStatus=='N'))){
    //   this.utils.broadcast('generateSubs',{})
    //   return
    // }
    let userProfile = this.utils.getProfile();
    let userFlags = this.utils.getSpecificUserFlags();
    redirectUrl = redirectUrl ? redirectUrl : "";
    //Existing
    let selectedUser = localStorage.getItem('selectedUser') ? JSON.parse(localStorage.getItem('selectedUser')) : {};
    if (selectedUser && selectedUser.ProductType == 2) {
      let UserName = this.utils.getEncUserId();
      let Session = this.cryptography.encryptText(this.oauthService.getAccessToken());
      let mobNo = this.utils.getEncMobId();
      let ClientId = this.utils.getEncMobId(); //this.utils.getEncUserId();
      let callbackUrl = location.origin;
      let isExplore = false;
      let onBoardFlag = this.cryptography.encryptText('C');
      //this.cryptography.encryptText(userProfile.MfDetails.OnBoardFlag);
      let userFlags = this.utils.getSpecificUserFlags();
      let decPan = userProfile && userProfile && userProfile.PanCard ? userProfile.PanCard : selectedUser ? selectedUser.PanNo : '';
      let pan = decPan ? this.cryptography.encryptText(decPan) : '';
      let url = this.apiURL.getMFChoiceIndiaURL(UserName, Session, ClientId, this.utils.getEncUserId() ? this.utils.getEncUserId() : this.utils.getEncMobId(), redirectUrl, callbackUrl, onBoardFlag, pan, isExplore, mobNo);
      url = userFlags && userFlags.acctnCreatedVia == "india-post" ? url + "&acctnCreatedVia=" + this.cryptography.encryptText(userFlags.acctnCreatedVia) : url;
      window.open(url, "_self");
    } else if (userProfile && userProfile.MfDetails && userProfile.MfDetails.OnBoardFlag && userProfile.MfDetails.OnBoardFlag == 'C') {
      let UserName = userProfile.MfDetails.DisplayCode ? this.cryptography.encryptText(userProfile.MfDetails.DisplayCode) : userProfile.MfDetails.DisplayCode;
      let accessTok = this.oauthService.getAccessToken();
      let Session = accessTok ? this.cryptography.encryptText(accessTok) : this.cryptography.encryptText(this.utils.getSessionId());
      let mobNo = userProfile && userProfile.MobileNo ? this.cryptography.encryptText(userProfile.MobileNo) : this.utils.getEncMobId();
      let ClientId = userProfile.MfDetails.clientId; //this.utils.getEncUserId();
      let callbackUrl = location.origin;
      let isExplore = userProfile.MfDetails.OnBoardFlag != 'C';
      let onBoardFlag = this.cryptography.encryptText(userProfile.MfDetails.OnBoardFlag);
      let decPan = userProfile && userProfile && userProfile.PanCard ? userProfile.PanCard : selectedUser ? selectedUser.PanNo : '';
      let pan = decPan ? this.cryptography.encryptText(decPan) : '';
      let userFlags = this.utils.getSpecificUserFlags();
      let url = this.apiURL.getMFChoiceIndiaURL(UserName, Session, ClientId, this.utils.getEncUserId(), redirectUrl, callbackUrl, onBoardFlag, pan, isExplore, mobNo);
      url = userFlags && userFlags.acctnCreatedVia == "india-post" ? url + "&acctnCreatedVia=" + this.cryptography.encryptText(userFlags.acctnCreatedVia) : url;
      window.open(url, "_self");
    } else if (isGuest) {
      let UserName = this.utils.getEncUserId();
      let Session = this.cryptography.encryptText(this.oauthService.getAccessToken()); //this.utils.getEncSessionId();
      let mobNo = this.utils.getEncMobId();
      let ClientId = this.utils.getUserId(); //this.utils.getEncUserId();
      let callbackUrl = location.origin;
      ;
      let isExplore = onboardStatus != 'C';
      let onBoardFlag = this.cryptography.encryptText(onboardStatus);
      let decPan = userProfile && userProfile && userProfile.PanCard ? userProfile.PanCard : selectedUser ? selectedUser.PanNo : '';
      let pan = decPan ? this.cryptography.encryptText(decPan) : '';
      let userFlags = this.utils.getSpecificUserFlags();
      let url = this.apiURL.getMFChoiceIndiaURL(UserName, Session, ClientId, this.utils.getEncUserId(), redirectUrl, callbackUrl, onBoardFlag, pan, isExplore, mobNo);
      url = userFlags && userFlags.acctnCreatedVia == "india-post" ? url + "&acctnCreatedVia=" + this.cryptography.encryptText(userFlags.acctnCreatedVia) : url;
      window.open(url, "_self");
    } else if (onboardStatus) {
      //WORK ON THIS
      let UserName = userProfile && userProfile && userProfile.DisplayCode ? this.cryptography.encryptText(userProfile.DisplayCode) : this.utils.getEncUserId() ? this.utils.getEncUserId() : this.utils.getEncMobId();
      let accessTok = this.oauthService.getAccessToken();
      let Session = accessTok ? this.cryptography.encryptText(accessTok) : this.cryptography.encryptText(this.utils.getSessionId());
      let mobNo = userProfile && userProfile.MobileNo ? this.cryptography.encryptText(userProfile.MobileNo) : this.utils.getEncMobId();
      let ClientId = userProfile && userProfile && userProfile.ClientId ? userProfile.ClientId : userProfile && userProfile.MobileNo ? userProfile.MobileNo : this.utils.getMobId(); //this.utils.getEncUserId();
      let callbackUrl = location.origin;
      let isExplore = onboardStatus != 'C';
      let onBoardFlag = this.cryptography.encryptText('CS'); //userProfile &&userProfile &&userProfile.onBoardFlag? this.cryptography.encryptText(userProfile.OnBoardFlag):this.cryptography.encryptText(onboardStatus);
      let userFlags = this.utils.getSpecificUserFlags();
      let decPan = userProfile && userProfile && userProfile.PanCard ? userProfile.PanCard : selectedUser ? selectedUser.PanNo : '';
      let pan = decPan ? this.cryptography.encryptText(decPan) : '';
      let url = this.apiURL.getMFChoiceIndiaURL(UserName, Session, ClientId, this.utils.getEncUserId(), redirectUrl, callbackUrl, onBoardFlag, pan, isExplore, mobNo);
      url = userFlags && userFlags.acctnCreatedVia == "india-post" ? url + "&acctnCreatedVia=" + this.cryptography.encryptText(userFlags.acctnCreatedVia) : url;
      window.open(url, "_self");
    }
    // else if (userProfile && userProfile.PanCard) {
    //   this.utils.setTrackMoeEvent("visitedMFWeb", {
    //     UserId: this.utils.getUserId() || "",
    //     PAN: userProfile.PanCard,
    //   });
    //   this.router.navigate(["/client/mutual-fund/" + userProfile.PanCard]);
    // } 
    else {
      this.utils.error("PAN not present.", null);
    }
    //
  }
  navigateRoute(route) {
    this.storeScrollTop();
    if (route === "/next/market/upcoming-ipo-list") {
      window.open(location.origin + route, "_self");
    } else {
      this.route.navigate([route]);
    }
  }
  /**
   * Function to get Blog list
   */
  getLatestBlog() {
    this.checkBlog = true;
    this.postLoginService.getBlogList().subscribe(data => {
      if (data.posts && data.posts.length) {
        this.checkBlog = false;
        this.BlogList = data.posts;
        this.index = 0;
      } else {
        this.checkBlog = false;
        this.BlogList = [];
        this.utils.error("Error", "Something went wrong");
      }
    });
  }
  /**
   * Function to get list of News checkNews
   */
  getLatestNews() {
    this.checkNews = true;
    this.postLoginService.getNewsURL().subscribe(data => {
      if (data.newsDetails && data.newsDetails.length) {
        this.checkNews = false;
        this.NewsList = data.newsDetails;
        this.index = 0;
      } else {
        this.checkNews = false;
        this.NewsList = [];
        this.utils.error("Error", "Something went wrong");
      }
    }, error => {
      this.utils.error("Error", "Something went wrong!!");
    }).add(() => {
      this.checkNews = false;
    });
  }
  Blognext() {
    if (this.index >= 0 && this.index <= 2) {
      this.index = this.index + 1;
    }
    if (this.index >= 3) {
      this.index = 0;
    }
  }
  Blogprev() {
    if (this.index <= 2 && this.index >= 0) {
      this.index = this.index - 1;
    }
    if (this.index == -1) {
      this.index = 2;
    }
  }
  getDiversifyData() {
    this.loader.diversifyLoader = true;
    this.postLoginService.getDiversifyDetails().subscribe(res => {
      if (res && res.Status === "Success" && res.Response) {
        this.config.ipoBanner = res.Response.marketing_banner || [];
        this.config.diversifyBanner = res.Response.diversity_banner || [];
        setTimeout(() => {
          this.config.ipoBanner.forEach((ele, i) => {
            let element = document.getElementById("ipoBanner_" + i);
            if (element) {
              const delta = 6;
              let startX;
              let startY;
              element.addEventListener("mousedown", event => {
                startX = event.pageX;
                startY = event.pageY;
              });
              element.addEventListener("mouseup", event => {
                const diffX = Math.abs(event.pageX - startX);
                const diffY = Math.abs(event.pageY - startY);
                if (diffX < delta && diffY < delta) {
                  this.bannerRedirection(ele, i, "banner");
                }
              });
            } else {
              // console.log("element not found")
            }
          });
        }, 2000);
        // } else if (this.utils.isSessionExpired(res.reason)) {
        //   this.shared.isSSO =  localStorage.getItem('isSSO')=='true'
        //   if(this.shared.isSSO){
        //     this.utils.sessionExpireHandling()
        //     return
        //   }
        //   this.utils.error("Session Expired", "Please Login Again.");
        //   this.utils.postFeatureCount();
        //   this.utils.clearLoginDetails();
        //   this.shared.userId = null;
        //   this.route.navigate(["auth/login"]);
      } else {
        this.utils.error("Error", "Something went wrong!!");
      }
    }, error => {
      this.utils.error("Error", "Something went wrong!!");
    }).add(() => {
      this.loader.diversifyLoader = false;
    });
  }
  openVideo(video) {}
  getFirebaseConfig() {
    this.fetchingEvent = true;
    this.firebaseService.getRemoteConfig("finx_school", value => {
      let videoJSON = JSON.parse(value);
      if (videoJSON && videoJSON.videos) {
        let ids = videoJSON.videos.join(",");
        this.getYoutubeVideoDetails(ids);
      } else {
        this.fetchingEvent = false;
      }
    });
  }
  getYoutubeVideoDetails(ids) {
    let key = "AIzaSyBEsRnfeAupMhYjg4-dy_zeE2mRUv0GtuE";
    this.finxSchoolVideos = {};
    this.rest.getYoutubeVideoDetails(key, ids).subscribe(res => {
      if (res.items && res.items.length) {
        this.finxSchoolVideos = res;
        this.finxSchoolVideos.active = 0;
        /*     setTimeout(() => {
            document.getElementById('vid-open').innerHTML=this.finxSchoolVideos.items[this.finxSchoolVideos.active||0].player.embedHtml
                 }, 100); */
        this.fetchingEvent = false;
      } else {
        this.finxSchoolVideos = {};
        this.fetchingEvent = false;
      }
    }, err => {
      this.finxSchoolVideos = {};
      this.fetchingEvent = false;
    });
  }
  goToPrevYoutubeVideo() {
    this.finxSchoolVideos.active = this.finxSchoolVideos.active == 0 ? this.finxSchoolVideos.items.length - 1 : this.finxSchoolVideos.active - 1;
    /*     setTimeout(() => {
          document.getElementById('vid-open').innerHTML=this.finxSchoolVideos.items[this.finxSchoolVideos.active||0].player.embedHtml
             }, 100); */
  }
  openVid(id) {
    //setTimeout(() => {
    this.openFlag = true;
    // }, 3000);
    setTimeout(() => {
      //  let ele =   document.getElementById(id)['contentDocument'] || document.getElementById(id)['contentWindow'].document
      //     console.log(id,"document.getElementById(id)",document.getElementById(id) , ele , ele.getElementsByClassName("ytp-cued-thumbnail-overlay-image"))
      //      if(document.getElementById(id) && ele && document.getElementsByClassName("ytp-cued-thumbnail-overlay-image") && document.getElementsByClassName("ytp-cued-thumbnail-overlay-image")[0])
      //   {
      //     console.log(id,"document.getElementById(id)",document.getElementsByClassName("ytp-cued-thumbnail-overlay-image"))
      //     let a = document.getElementsByClassName("ytp-cued-thumbnail-overlay-image")[0] as HTMLElement
      //     a.click()
      //   }
    }, 1500);
  }
  goToNextYoutubeVideo() {
    this.finxSchoolVideos.active = this.finxSchoolVideos.active == this.finxSchoolVideos.items.length - 1 ? 0 : this.finxSchoolVideos.active + 1;
    /*   setTimeout(() => {
        document.getElementById('vid-open').innerHTML=this.finxSchoolVideos.items[this.finxSchoolVideos.active||0].player.embedHtml
           }, 100); */
  }
  /**
   * Set FinX School tab value
   * @param value Videos, Blogs
   */
  setFinxSchoolValue(value) {
    this.finxSchool = value;
    this.analytics.emitEvent(this.finxSchool === "videos" ? "DashboardFinXSchoolVideos" : "DashboardFinXSchoolBlogs", this.utils.getUserId() || "", "Dashboard", 1);
    this.utils.setTrackMoeEvent("clickedOn", {
      UserId: this.utils.getUserId() || "",
      buttonName: this.finxSchool === "videos" ? "DashboardFinXSchoolVideos" : "DashboardFinXSchoolBlogs"
    });
    if (this.finxSchool == "blogs") {
      this.getLatestBlog();
    }
  }
  refreshData() {
    this.getFirebaseConfig();
    this.sectionactive();
    this.firebaseService.getRemoteConfig("social_media_links", value => {
      if (value) {
        this.medialists = JSON.parse(value);
        this.MediaList = this.medialists.media;
      } else {
        this.MediaList = [];
      }
    });
    this.getPortfolioDetails();
    let userFlags = this.utils.getSpecificUserFlags();
    if (userFlags && userFlags.acctnCreatedVia == "india-post") {
      this.getMFBasketDetails();
    }
    this.getCombinedBasketDetails();
    // this.getDiversifyData();
  }
  bannerRedirection(content, index, redirectionType) {
    if (content.redirectUrl && content.type) {
      this.analytics.emitEvent(redirectionType === "diversify" ? "DashboardDiversifyBanner" + index : "DashboardMarketingBanner" + index, this.utils.getUserId() || "", "Dashboard", 1);
      this.utils.setTrackMoeEvent("clickedOn", {
        UserId: this.utils.getUserId() || "",
        buttonName: redirectionType === "diversify" ? "DashboardDiversifyBanner" + index : "DashboardMarketingBanner" + index
      });
      if (content.type == "mfGoalList") {
        this.mfRedirectionLink(content.redirectUrl.replace("https://mf.choiceindia.com/", "").replace("uat", ''));
      } else if (content.type == "smStratezy") {
        this.goToKeev();
      } else if (content.type == "smModernAlgo") {
        this.header.handleProductsAuthorization("modernalgosAuthorized");
      } else {
        let target = content.type == "insurance" || content.target == "blank" ? "_blank" : "_self";
        window.open(content.redirectUrl, target);
      }
    }
  }
  ipoBannerScroll() {
    let slider;
    slider = document.querySelector(".sec2-slider");
    let isDown = false;
    let startX;
    let scrollLeft;
    slider.addEventListener("mousedown", e => {
      isDown = true;
      slider.classList.add("active");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener("mouseleave", () => {
      isDown = false;
      slider.classList.remove("active");
    });
    slider.addEventListener("mouseup", () => {
      isDown = false;
      slider.classList.remove("active");
    });
    slider.addEventListener("mousemove", e => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = x - startX; //(x - startX) * 2 : scroll-fast
      slider.scrollLeft = scrollLeft - walk;
    });
  }
  activateChartSection(event, id, cssClass, index) {
    this.config.hightlightedChartSection = event;
    id = event.name == "Equity" ? "equity-graph" : "mf-graph";
    cssClass = event.name == "Equity" ? "eq-blue" : "mf-yellow";
    index = event.name == "Equity" ? 0 : 1;
    if (id && cssClass) {
      document.getElementById(id).classList.add(cssClass);
      let group = document.getElementsByClassName("arc-group");
      let className = event.name == "Equity" ? "active-stock" : "active-mf";
      group[index].getElementsByTagName("path")[0].classList.add("active");
      group[index].getElementsByTagName("path")[0].classList.add(className);
    }
  }
  deactivateChartSection(event, id, cssClass, index) {
    this.config.hightlightedChartSection = "";
    id = event.name == "Equity" ? "equity-graph" : "mf-graph";
    cssClass = event.name == "Equity" ? "eq-blue" : "mf-yellow";
    index = event.name == "Equity" ? 0 : 1;
    if (id && cssClass) {
      document.getElementById(id).classList.remove(cssClass);
      let group = document.getElementsByClassName("arc-group");
      let className = event.name == "Equity" ? "active-stock" : "active-mf";
      group[index].getElementsByTagName("path")[0].classList.remove("active");
      group[index].getElementsByTagName("path")[0].classList.remove(className);
    }
  }
  redirectToBasketDetails(item) {
    this.analytics.emitEvent("DashboardMfBasketList", this.utils.getUserId() || "", "Dashboard", 1);
    this.utils.setTrackMoeEvent("clickedOn", {
      UserId: this.utils.getUserId() || "",
      buttonName: "DashboardMfBasketList"
    });
    this.mfRedirectionLink("mf/recommended-mutual-funds/" + item.PageUrl);
  }
  mfRedirectionLink(redirectUrl) {
    let userProfile = this.utils.getProfile();
    this.storeScrollTop();
    this.goToInvestica(redirectUrl);
    // let url = this.apiURL.getMFChoiceIndiaURL(UserName, Session, ClientId, redirectUrl, callbackUrl, onboardFlag);
    // window.open(url, '_self');
  }
  // goToInvesticaLink(redirectUrl) {
  //   let userAccountStatus=this.utils.getUserAccountStatus()
  //   let onboardStatus = !userAccountStatus || !userAccountStatus.onboardStatus || userAccountStatus.onboardStatus=='C' || userAccountStatus.onboardStatus=='MF'?'C':
  //   userAccountStatus.onboardStatus
  //   let isGuest = userAccountStatus&&userAccountStatus.GuestUser
  //   // if((userAccountStatus && userAccountStatus.onboardStatus && userAccountStatus.GuestUser && (userAccountStatus.onboardStatus=='N'))){
  //   //   this.utils.broadcast('generateSubs',{})
  //   //   return
  //   // }
  //   let userProfile = this.utils.getProfile();
  //   //Existing
  //   let selectedUser = localStorage.getItem('selectedUser')?JSON.parse(localStorage.getItem('selectedUser')):{}
  //   if ( selectedUser &&  selectedUser.ProductType==2) {
  //     let UserName = this.utils.getEncUserId()
  //     let Session =  this.cryptography.encryptText(this.oauthService.getAccessToken())
  //     let mobNo = this.utils.getEncMobId(); 
  //     let ClientId = this.utils.getEncMobId(); //this.utils.getEncUserId();
  //     let callbackUrl = location.origin;
  //     let isExplore = false
  //     let onBoardFlag = this.cryptography.encryptText('C');
  //     //this.cryptography.encryptText(userProfile.MfDetails.OnBoardFlag);
  //     let userFlags = this.utils.getSpecificUserFlags();
  //     let decPan = userProfile &&userProfile &&userProfile.PanCard? userProfile.PanCard:selectedUser?selectedUser.PanNo:''
  //     let pan=decPan?this.cryptography.encryptText(decPan):'';
  //     redirectUrl =
  //     userFlags && userFlags.acctnCreatedVia == "india-post"
  //       ? redirectUrl +
  //         "&acctnCreatedVia=" +
  //         this.cryptography.encryptText(userFlags.acctnCreatedVia)
  //       : redirectUrl;
  //     let url = this.apiURL.getMFChoiceIndiaURL(
  //       UserName,
  //       Session,
  //       ClientId,
  //       (this.utils.getEncUserId()?this.utils.getEncUserId():this.utils.getEncMobId()),
  //       redirectUrl,
  //       callbackUrl,
  //       onBoardFlag,
  //       pan,
  //       isExplore,
  //       mobNo
  //     );
  //     url = (userFlags && userFlags.acctnCreatedVia == "india-post") ? url + "&acctnCreatedVia=" +
  //     this.cryptography.encryptText(userFlags.acctnCreatedVia) : url;
  //     window.open(url, "_self");
  //   } else if ( userProfile &&  userProfile.MfDetails && userProfile.MfDetails.OnBoardFlag && userProfile.MfDetails.OnBoardFlag=='C') {
  //     let UserName = userProfile.MfDetails.DisplayCode
  //       ? this.cryptography.encryptText(userProfile.MfDetails.DisplayCode)
  //       : userProfile.MfDetails.DisplayCode;
  //     let Session = this.utils.getEncSessionId();
  //     let mobNo = this.utils.getEncMobId(); 
  //     let ClientId = userProfile.MfDetails.clientId; //this.utils.getEncUserId();
  //     let callbackUrl = location.origin;
  //     let isExplore = userProfile.MfDetails.OnBoardFlag!='C'
  //     let onBoardFlag = this.cryptography.encryptText(userProfile.MfDetails.OnBoardFlag);
  //     let decPan = userProfile &&userProfile &&userProfile.PanCard? userProfile.PanCard:selectedUser?selectedUser.PanNo:''
  //     let pan=decPan?this.cryptography.encryptText(decPan):'';
  //     let userFlags = this.utils.getSpecificUserFlags();
  //     let url = this.apiURL.getMFChoiceIndiaURL(
  //       UserName,
  //       Session,
  //       ClientId,
  //       this.utils.getEncUserId(),
  //       "",
  //       callbackUrl,
  //       onBoardFlag,
  //       pan,
  //       isExplore,
  //       mobNo
  //     );
  //     url = (userFlags && userFlags.acctnCreatedVia == "india-post") ? url + "&acctnCreatedVia=" +
  //     this.cryptography.encryptText(userFlags.acctnCreatedVia) : url;
  //     window.open(url, "_self");
  //   }  
  //   else if(isGuest){
  //     let UserName =this.utils.getEncUserId()
  //     let Session = this.cryptography.encryptText(this.oauthService.getAccessToken())//this.utils.getEncSessionId();
  //     let mobNo = this.utils.getEncMobId(); 
  //     let ClientId = this.utils.getUserId(); //this.utils.getEncUserId();
  //     let callbackUrl = location.origin;;
  //     let isExplore = onboardStatus!='C'
  //     let onBoardFlag =this.cryptography.encryptText(onboardStatus);
  //     let decPan = userProfile &&userProfile &&userProfile.PanCard? userProfile.PanCard:selectedUser?selectedUser.PanNo:''
  //     let pan=decPan?this.cryptography.encryptText(decPan):'';
  //     let userFlags = this.utils.getSpecificUserFlags();
  //     let url = this.apiURL.getMFChoiceIndiaURL(
  //       UserName,
  //       Session,
  //       ClientId,
  //       this.utils.getEncUserId(),
  //       "",
  //       callbackUrl,
  //       onBoardFlag,
  //       pan,
  //       isExplore,
  //       mobNo
  //     );
  //     url = (userFlags && userFlags.acctnCreatedVia == "india-post") ? url + "&acctnCreatedVia=" +
  //     this.cryptography.encryptText(userFlags.acctnCreatedVia) : url;
  //     window.open(url, "_self");
  //   } 
  //   else  if (onboardStatus) {
  //     //WORK ON THIS
  //     let UserName = userProfile &&userProfile &&userProfile.DisplayCode
  //       ? this.cryptography.encryptText(userProfile.DisplayCode)
  //       : this.utils.getEncUserId()?this.utils.getEncUserId():this.utils.getEncMobId();
  //     let Session = this.cryptography.encryptText(this.oauthService.getAccessToken());
  //     let mobNo = this.utils.getEncMobId(); 
  //     let ClientId =  userProfile &&userProfile &&userProfile.ClientId? userProfile.ClientId : this.utils.getMobId(); //this.utils.getEncUserId();
  //     let callbackUrl = location.origin;
  //     let isExplore = true
  //     let onBoardFlag =  this.cryptography.encryptText('CS') //userProfile &&userProfile &&userProfile.onBoardFlag? this.cryptography.encryptText(userProfile.OnBoardFlag):this.cryptography.encryptText(onboardStatus);
  //     let userFlags = this.utils.getSpecificUserFlags();
  //     let decPan = userProfile &&userProfile &&userProfile.PanCard? userProfile.PanCard:selectedUser?selectedUser.PanNo:''
  //     let pan = decPan?this.cryptography.encryptText(decPan):'';
  //     let url = this.apiURL.getMFChoiceIndiaURL(
  //       UserName,
  //       Session,
  //       ClientId,
  //       this.utils.getEncUserId(),
  //       "",
  //       callbackUrl,
  //       onBoardFlag,
  //       pan,
  //       isExplore,
  //       mobNo
  //     );
  //     url = (userFlags && userFlags.acctnCreatedVia == "india-post") ? url + "&acctnCreatedVia=" +
  //     this.cryptography.encryptText(userFlags.acctnCreatedVia) : url;
  //     window.open(url, "_self");
  //   } 
  //   // else if (userProfile && userProfile.PanCard) {
  //   //   this.utils.setTrackMoeEvent("visitedMFWeb", {
  //   //     UserId: this.utils.getUserId() || "",
  //   //     PAN: userProfile.PanCard,
  //   //   });
  //   //   this.router.navigate(["/client/mutual-fund/" + userProfile.PanCard]);
  //   // } 
  //   else {
  //     this.utils.error("PAN not present.", null);
  //   }
  //   //
  // }
  goToKeev(type) {
    let userId = this.cryptography.decryptText(this.utils.get("userId"));
    let sessionId = this.cryptography.decryptText(this.utils.get("sessionId"));
    var sockets = this.storage.retrieve("connection") || {};
    let socketUrl = sockets.bcast;
    let url = type == "option" ? this.apiURL.getKeevOptionStratezyURL(encodeURIComponent(this.cryptography.encryptTextKeev(userId)), encodeURIComponent(this.cryptography.encryptTextKeev(sessionId))) : this.apiURL.getKeevURL(encodeURIComponent(this.cryptography.encryptTextKeev(userId)), encodeURIComponent(this.cryptography.encryptTextKeev(sessionId)), this.cryptography.encryptTextKeev(socketUrl));
    window.open(url, "_blank");
  }
  smartInvestmentRedirection(type) {
    switch (type) {
      case "mf":
        this.analytics.emitEvent("DashboardSiMf", this.utils.getUserId() || "", "Dashboard", 1);
        this.utils.setTrackMoeEvent("clickedOn", {
          UserId: this.utils.getUserId() || "",
          buttonName: "DashboardSiMf"
        });
        break;
      case "insurance":
        this.analytics.emitEvent("DashboardSiInsurance", this.utils.getUserId() || "", "Dashboard", 1);
        this.utils.setTrackMoeEvent("clickedOn", {
          UserId: this.utils.getUserId() || "",
          buttonName: "DashboardSiInsurance"
        });
        break;
      case "ipo":
        this.analytics.emitEvent("DashboardSiIpo", this.utils.getUserId() || "", "Dashboard", 1);
        this.utils.setTrackMoeEvent("clickedOn", {
          UserId: this.utils.getUserId() || "",
          buttonName: "DashboardSiIpo"
        });
        break;
      case "elss":
        this.analytics.emitEvent("clickedOn", this.utils.getUserId() || "", JSON.stringify({
          UserId: this.utils.getUserId() || "",
          buttonName: "DashboardMarketingBanner_ElssBanner",
          basketName: "The Tax Saviour",
          AbTestingVariant: document.getElementById("north1") && document.getElementById("north1").style && document.getElementById("north1").style.display === "block" ? "northernA" : document.getElementById("north2").style && document.getElementById("north2").style.display === "block" ? "northernB" : document.getElementById("south1").style && document.getElementById("south1").style.display === "block" ? "southernA" : document.getElementById("south2").style && document.getElementById("south2").style.display === "block" ? "southernB" : "Base"
        }), 1);
        this.utils.setTrackMoeEvent("clickedOn", {
          UserId: this.utils.getUserId() || "",
          buttonName: "DashboardMarketingBanner_ElssBanner",
          basketName: "The Tax Saviour",
          AbTestingVariant: document.getElementById("north1") && document.getElementById("north1").style && document.getElementById("north1").style.display === "block" ? "northernA" : document.getElementById("north2").style && document.getElementById("north2").style.display === "block" ? "northernB" : document.getElementById("south1").style && document.getElementById("south1").style.display === "block" ? "southernA" : document.getElementById("south2").style && document.getElementById("south2").style.display === "block" ? "southernB" : "Base"
        });
        break;
      case "ss":
        this.analytics.emitEvent("DashboardSiSecuredProducts", this.utils.getUserId() || "", "Dashboard", 1);
        this.utils.setTrackMoeEvent("clickedOn", {
          UserId: this.utils.getUserId() || "",
          buttonName: "DashboardSiSecuredProducts"
        });
        break;
      case "fd":
        this.analytics.emitEvent("DashboardSiFd", this.utils.getUserId() || "", "Dashboard", 1);
        this.utils.setTrackMoeEvent("clickedOn", {
          UserId: this.utils.getUserId() || "",
          buttonName: "DashboardSiFd"
        });
        break;
      case "news":
        this.analytics.emitEvent("DashboardNews", this.utils.getUserId() || "", "Dashboard", 1);
        this.utils.setTrackMoeEvent("clickedOn", {
          UserId: this.utils.getUserId() || "",
          buttonName: "DashboardNews"
        });
        break;
      case "webinar":
        this.analytics.emitEvent("DashboardWebinar", this.utils.getUserId() || "", "Dashboard", 1);
        this.utils.setTrackMoeEvent("clickedOn", {
          UserId: this.utils.getUserId() || "",
          buttonName: "DashboardWebinar"
        });
        break;
      default:
        break;
    }
  }
  ngOnDestroy() {
    if (this.portfolioSubscription) this.portfolioSubscription.unsubscribe();
    let main = document.getElementById("main-container");
    if (main) {
      main.classList.remove("main-container");
    }
    let body = document.getElementById("section-body-data");
    if (body) {
      body.classList.remove("body-login-page");
    }
    // window.history.pushState(null, null, null);
  }
  getPortfolioDetailsBg() {
    let request = {
      UserId: this.utils.getUserId() || "",
      SessionId: this.utils.getSessionId() || "",
      GroupId: "HO"
    };
    let userAccountStatus = this.utils.getUserAccountStatus();
    if (!(!userAccountStatus || !userAccountStatus.onboardStatus || userAccountStatus.onboardStatus == 'C')) {
      return;
    }
    this.postLoginService.getClientPortfolioDetails(request).subscribe(res => {
      if (res && res.Status === "Success" && res.Response) {
        this.config.eqCurrent = res.Response.HoldingCurrentValue;
        this.config.mfCurrent = res.Response.MFCurrentValue;
        this.config.eqInv = res.Response.HoldingCurrentValue - res.Response.HoldingTotalProfitLoss;
        this.config.mfInv = res.Response.MFCurrentValue - res.Response.MFTotalProfitLoss;
        this.config.oaCurrent = this.config.eqCurrent + this.config.mfCurrent;
        this.config.oaInv = this.config.eqInv + this.config.mfInv;
        this.config.totalpnl = res.Response.HoldingTotalProfitLoss + res.Response.MFTotalProfitLoss;
        this.config.totalpnlperc = this.config.totalpnl / this.config.oaInv * 100;
        this.config.eqTotalPnl = res.Response.HoldingTotalProfitLoss;
        this.config.eqTotalPnlPercent = res.Response.HoldingTotalProfitLossPercent;
        this.config.mfTotalPnl = res.Response.MFTotalProfitLoss;
        this.config.mfTotalPnlPerc = res.Response.MFTotalProfitLossPercent;
        this.config.fund = res.Response.AvailableBalance;
        this.config.eqCurrentPerc = this.config.eqCurrent / this.config.oaCurrent * 100;
        this.config.mfCurrentPerc = this.config.mfCurrent / this.config.oaCurrent * 100;
        this.config.donutData = [{
          name: "Equity",
          value: this.config.eqCurrentPerc
        }, {
          name: "Mutual Funds",
          value: this.config.mfCurrentPerc
        }];
      } else if (this.utils.isSessionExpired(res.Reason)) {
        this.shared.isSSO = localStorage.getItem('isSSO') == 'true';
        if (this.shared.isSSO) {
          this.checkIftwoFAValidated(true);
          // this.utils.sessionExpireHandling()
          // return
        }
        this.utils.error("Session Expired", "Please Login Again.");
        this.utils.postFeatureCount();
        this.utils.clearLoginDetails();
        this.shared.userId = null;
        this.route.navigate(["auth/login"]);
      } else {
        this.utils.error("Error", "Something went wrong!!");
      }
    }, error => {
      this.utils.error("Error", "Something went wrong!!");
    });
  }
  checkIftwoFAValidated(isExpired) {
    let mob = this.utils.getMobId();
    if (mob) {
      let request = {
        MobileNo: mob,
        DeviceId: this.utils.get("fingerprint") || "",
        TwoFAApiCall: "1"
      };
      this.postLoginRest.checkIfTwoFAValid(request).subscribe(data => {
        let productType = this.utils.get("ProductType");
        if (data && data.Reason && data.Reason == "Token Found" || !data.Response.IsSSOTokenExpired) {
          if (data.Response.IsSSOTokenExpired || data.Reason == 'Token Not Found') {
            this.oauthService.refreshToken().then(res => {
              let refreshToken = this.oauthService.getRefreshToken();
              this.updateSSOToken(isExpired);
            }).catch(err => {
              this.utils.postFeatureCount();
              this.utils.clearLoginDetails();
              this.shared.userId = null;
            });
          } else if (isExpired) {
            this.utils.clearLoginDetails(true);
            this.utils.error("", "Session Expired.");
            this.route.navigate(["/auth/twoFA"]);
          } else if (!data.Response.IsSSOTokenExpired) {
            let twoFaToken = this.utils.getTwoFAAccessToken();
            if (!twoFaToken) {
              let payloadReq = {
                requestType: "mobileNumber",
                businessUnit: "ALL",
                //MAKE IT BOTH
                requestIdentifier: this.utils.getMobId()
              };
              this.rest.getJFMFAccountStatus(payloadReq).subscribe(data => {
                if (data.StatusCode == 200) {
                  if (data.Body && data.Body.JF) {
                    let tok = this.oauthService.getAccessToken();
                    let url = data.Body.JF.url || data.Body.JF.redirectionUrl;
                    url = (url.indexOf("?") > -1 ? "&" : "?") + ("accessToken=" + tok);
                    let onboardFlag = data.Body.JF.isOnboardFlag;
                    if (onboardFlag == "N" || onboardFlag == "" || onboardFlag == "NI") {
                      localStorage.setItem("onb_url", btoa(url));
                      let preAccStatuus = this.utils.getUserAccountStatus();
                      if (preAccStatuus && preAccStatuus.onboardStatus && preAccStatuus.onboardStatus == 'MF') {
                        this.utils.setUserAccountStatus({
                          onboardStatus: 'N'
                        });
                      } else {
                        this.utils.setUserAccountStatus({
                          onboardStatus: 'MF'
                        });
                      }
                      this.route.navigate(["/account/complete-account-setup"], {
                        queryParams: {
                          url: btoa(url)
                        }
                      });
                    } else if (onboardFlag == "Y" && !(data.Body.JF.url || data.Body.JF.redirectionUrl)) {
                      this.utils.setUserAccountStatus({
                        onboardStatus: 'Y'
                      });
                      this.route.navigate(["/account/account-activation-inprogress"]);
                    } else if (onboardFlag == "Y" && (data.Body.JF.url || data.Body.JF.redirectionUrl)) {
                      localStorage.setItem("onb_url", btoa(url));
                      this.utils.setUserAccountStatus({
                        onboardStatus: 'YR'
                      });
                      this.route.navigate(["/account/account-not-activated"], {
                        queryParams: {
                          url: btoa(url)
                        }
                      });
                    }
                  }
                } else {
                  this.utils.error("Error", data.Message);
                }
              }, err => {});
            }
          }
        } else {
          this.utils.postFeatureCount();
          this.utils.clearLoginDetails();
          this.utils.clear("navigateToMutualFunds");
          this.shared.userId = null;
          this.oauthService.logOut();
          //Signout code
        }
        // if (data.Status == "Success" && data.Response) {
        //   // this.mobileNumber = data.Response.MobNo||""
        // } else {
        //   this.utils.error("Error", data.Reason);
        // }
      }, err => {
        this.utils.error("Error", "Something went wrong. Please try again later");
      });
    } else {
      this.utils.postFeatureCount();
      this.utils.clearLoginDetails();
      this.utils.clear("navigateToMutualFunds");
      this.shared.userId = null;
      if (this.shared.isSSO) this.oauthService.logOut();
    }
  }
  updateSSOToken(isExpired) {
    let request = {
      DeviceId: this.utils.get("fingerprint") || "",
      MobileNo: this.utils.getMobId(),
      RTApiCall: "1"
    };
    this.postLoginRest.updateSSOToken(request).subscribe(data => {
      if (data.Status == "Success") {
        if (isExpired) {
          this.utils.clearLoginDetails(true);
          this.utils.error("", "Session Expired.");
          this.route.navigate(["/auth/twoFA"]);
        }
      } else {
        this.utils.error("Error", data.Response);
      }
    }, err => {
      this.utils.error("Error", "Something went wrong. Please try again later");
    });
  }
  navigateToBlogDetail(slug) {
    let url = "https://choiceindia.com/blog/" + slug;
    window.open(url, "_blank");
  }
  storeScrollTop() {
    this.utils.put("dashboardScrollTop", this.scrollTop || 0);
  }
  clearScrollTop() {
    this.utils.clear("dashboardScrollTop");
  }
  clearMarketFilter() {
    this.utils.clear("dashboardMarketFilter");
  }
  dashboardScrolling() {
    window.scrollTo(0, this.utils.get("dashboardScrollTop") || 0);
    this.clearScrollTop();
    this.clearMarketFilter();
  }
  userRedirectionHandled() {
    this.storeScrollTop();
  }
  getElssFundsListing() {
    this.checkFundsListing = true;
    this.postLoginService.getELSSFundsListing("best-elss-tax-saving-mutual-funds").subscribe(res => {
      this.checkFundsListing = false;
      if (res.Status == "Success" && res.Response) {
        this.elssFundsListing = res.Response.lstSchemeFundExplorer.slice(0, 3);
      } else {
        this.utils.error("Error", "ELSS, Something went wrong!!");
      }
    }, error => {
      this.checkFundsListing = false;
      this.utils.error("Error", "ELSS, Something went wrong!!");
    });
  }
  /**
   * Method to Convert Float value in Two Decimal Integer
   * @param value Values which is to be Convert
   */
  schemeReturnsToFixed(value, point) {
    return parseFloat(value).toFixed(point);
  }
  /**
   * Method to Get Order Route for Fund
   * @param item Fund Object
   */
  getRouteLink(item) {
    let url = "mf/scheme/" + this.optimezeString(item.SchemeName) + "-" + item.SchemeCode + "-" + item.SchemePlanCode;
    this.mfRedirectionLink(url);
  }
  /**
   * Method to Replace Space with Hyphen(-) in String
   * @param data String Data
   */
  optimezeString(data) {
    return data.toLowerCase().replace(/\&|[\-|\s]+/g, "-");
  }
  getUserFlags() {
    this.checkFundsListing = true;
    this.elssFundsListing = [];
    this.postLoginService.getUserFlags(this.utils.getUserId()).subscribe(res => {
      if (res.StatusCode == 200 && res.Message == "Success") {
        this.userFlags.promoteMfTaxSaver = res.Body.promoteMfTaxSaver;
        if (this.userFlags.promoteMfTaxSaver) this.getElssFundsListing();
      } else {
        this.checkFundsListing = false;
        this.utils.error("Error", "UserFlags, Something went wrong!!");
      }
    }, error => {
      this.checkFundsListing = false;
      this.utils.error("Error", "UserFlags, Something went wrong!!");
    });
  }
  showToaster(page) {
    let userAccountStatus = this.utils.getUserAccountStatus();
    if (page == 'ipo') {
      this.navigateRoute('/next/market/upcoming-ipo-list');
      this.smartInvestmentRedirection('ipo');
    } else if (page == 'secure-products') {
      this.navigateRoute('market/scheme/tbills');
      this.smartInvestmentRedirection('ss');
    } else if (!userAccountStatus || !userAccountStatus.onboardStatus || userAccountStatus.onboardStatus == 'C') {
      if (page == 'buy-back') {
        this.navigateRoute('/client/buyback/open');
      } else {
        this.handleProductsAuthorization(page);
      }
    } else {
      this.utils.broadcast('generateSubs', {});
    }
  }
  handleProductsAuthorization(productType) {
    this.gaEvents(productType);
    let prductType = "";
    let feature = this.utils.getWalkThrgh();
    // feature['quantsappAuthorized'] = false;
    if (!feature[productType]) {
      this.productType = productType;
    } else {
      this.productType = "";
      if (productType === "algobullsAuthorized") {
        // ga(
        //   "send",
        //   "event",
        //   "Algobulls Visitors",
        //   "Submit",
        //   "Algobulls Visitors",
        //   1
        // );
        prductType = "algoBulls";
        this.goToAlgoBulls();
      } else if (productType === "modernalgosAuthorized") {
        // ga(
        //   "send",
        //   "event",
        //   "ModernAlgos Visitors",
        //   "Submit",
        //   "ModernAlgos Visitors",
        //   1
        // );
        prductType = "modernAlgos";
        this.goToModernAlgos();
      } else if (productType === "algocrabAuthorized") {
        prductType = "algoCrab";
        this.handleProductRedirection(productType);
      } else if (productType === "quantsappAuthorized") {
        // ga(
        //   "send",
        //   "event",
        //   "Quantsapp Visitors",
        //   "Submit",
        //   "Quantsapp Visitors",
        //   1
        // );
        prductType = "quantsApp";
        this.goToQuantsApp();
      } else if (productType === "stocksemojiAuthorized") {
        prductType = "stocksEmoji";
        this.goToStocksEmoji();
      } else if (productType === "stockantsAuthorized") {
        prductType = "stockants";
        this.goToStocks();
      } else if (productType === "narnoliaAuthorized") {
        prductType = "narnolia";
        this.goToNarnolia();
      } else if (productType === "pixstoxAuthorized") {
        prductType = "pixstox";
        this.redirectToPixstox();
      } else if (productType == "tradetronAuthorized") {
        this.redirectToTradetron();
      } else if (productType == "arthnirmitiAuthorized") {
        this.redirectToArthnirmiti();
      } else {
        this.utils.error("Error", "Something went wrong");
      }
    }
    setTimeout(() => {
      let eventName = prductType == "algoBulls" ? "PartnerProductAlgoBulls" : prductType == "modernAlgos" ? "PartnerProductModernAlgos" : prductType == "quantsApp" ? "PartnerProductQuantsApp" : prductType == "algoCrab" ? "PartnerProductAlgocrab" : prductType == "stocksEmoji" ? "PartnerProductStocksEmoji" : prductType == "stockants" ? "PartnerProductStockants" : prductType == "narnolia" ? "PartnerProductNarnolia" : prductType == "pixstox" ? "PartnerProductPixstox" : prductType == "tradetron" ? "PartnerProductTradetron" : "";
      if (prductType) {
        this.analytics.emitEvent(eventName, this.utils.getUserId() || "", "DashboardPartnerProducts", 1);
        this.utils.setTrackMoeEvent("clickedOn", {
          UserId: this.utils.getUserId() || "",
          buttonName: eventName
        });
        this.showPartnerProductFeedback(prductType);
      }
    }, 200);
  }
  gaEvents(productType) {
    if (productType === "algobullsAuthorized") {
      // ga(
      //   "send",
      //   "event",
      //   "Algobulls Visitors",
      //   "Submit",
      //   "Algobulls Visitors",
      //   1
      // );
    } else if (productType === "modernalgosAuthorized") {
      // ga(
      //   "send",
      //   "event",
      //   "ModernAlgos Visitors",
      //   "Submit",
      //   "ModernAlgos Visitors",
      //   1
      // );
    } else if (productType === "quantsappAuthorized") {
      // ga(
      //   "send",
      //   "event",
      //   "Quantsapp Visitors",
      //   "Submit",
      //   "Quantsapp Visitors",
      //   1
      // );
    }
  }
  clickedOnAuthorizeProductPopup(event) {
    if (event) {
      let feature = this.utils.getWalkThrgh();
      window.Moengage.add_user_attribute(this.productType, "1");
      this.utils.updateWalkthrough(Object.assign(feature, {
        [this.productType]: "1"
      }));
      this.utils.postFeatureCount();
      if (this.productType === "algobullsAuthorized") {
        this.redirectToAlgobulls();
      } else if (this.productType === "modernalgosAuthorized") {
        this.goToModernAlgos();
      } else if (this.productType === "algocrabAuthorized") {
        this.handleProductRedirection(this.productType);
      } else if (this.productType === "quantsappAuthorized") {
        this.goToQuantsApp();
      } else if (this.productType === "stocksemojiAuthorized") {
        this.redirectToStocksEmoji();
      } else if (this.productType === "stockantsAuthorized") {
        this.redirectToStockants();
      } else if (this.productType === "narnoliaAuthorized") {
        this.redirectToNarnolia();
      } else if (this.productType === "pixstoxAuthorized") {
        this.redirectToPixstox();
      } else if (this.productType === "tradetronAuthorized") {
        this.redirectToTradetron();
      } else if (this.productType == "arthnirmitiAuthorized") {
        this.redirectToArthnirmiti();
      } else {
        this.utils.error("Error", "Something went wrong");
      }
    }
    setTimeout(() => {
      let eventName = this.productType == "algobullsAuthorized" ? "PartnerProductAlgoBulls" : this.productType == "modernalgosAuthorized" ? "PartnerProductModernAlgos" : this.productType == "quantsappAuthorized" ? "PartnerProductQuantsApp" : this.productType == "algocrabAuthorized" ? "PartnerProductAlgocrab" : this.productType == "stocksemojiAuthorized" ? "PartnerProductStocksEmoji" : this.productType == "stockantsAuthorized" ? "PartnerProductStockants" : this.productType == "narnoliaAuthorized" ? "PartnerProductNarnolia" : this.productType == "pixstoxAuthorized" ? "PartnerProductPixstox" : this.productType == "tradetronAuthorized" ? "PartnerProductTradetron" : this.productType == 'arthnirmitiAuthorized' ? "PartnerProductArthnirmiti" : "";
      this.analytics.emitEvent(eventName, this.utils.getUserId() || "", "DashboardPartnerProducts", 1);
      this.utils.setTrackMoeEvent("clickedOn", {
        UserId: this.utils.getUserId() || "",
        buttonName: eventName
      });
      this.showPartnerProductFeedback(this.productType);
      this.productType = "";
    }, 200);
  }
  goToAlgoBulls() {
    this.isProductServiceHit = true;
    let userId = this.cryptography.decryptText(this.utils.get("userId"));
    let sessionId = this.cryptography.decryptText(this.utils.get("sessionId"));
    let cid = this.cryptography.encryptTextAlgoBulls(userId);
    let sid = this.cryptography.encryptTextAlgoBulls(sessionId);
    let payload = {
      EncClientId: cid,
      EncSessionId: sid
    };
    this.rest.algobullsAuthentication(payload, "algobullsAuthorized").subscribe(res => {
      if (res && res.status === 200 && res.body && res.body["Status"] === "Success") {
        this.redirectToAlgobulls();
      } else {
        this.utils.error("Error", "Something went wrong!");
      }
    }, error => {
      this.utils.error("Error", "Something went wrong!");
    }).add(() => {
      this.isProductServiceHit = false;
    });
  }
  goToModernAlgos() {
    let userId = this.cryptography.decryptText(this.utils.get("userId"));
    let sessionId = this.cryptography.decryptText(this.utils.get("sessionId"));
    let cid = this.cryptography.encryptTextModernAlgos(userId);
    let sid = this.cryptography.encryptTextModernAlgos(sessionId);
    let url = "https://modernalgos.com/machoiceredirect.aspx?cid=" + encodeURIComponent(cid) + "&sid=" + encodeURIComponent(sid);
    window.open(url, "_blank");
    localStorage.removeItem("fromUrl");
    this.utils.clear("fromUrl");
    this.utils.clear("clickFromURL");
  }
  redirectToAlgobulls() {
    let userId = this.cryptography.decryptText(this.utils.get("userId"));
    let sessionId = this.cryptography.decryptText(this.utils.get("sessionId"));
    let cid = this.cryptography.encryptTextAlgoBulls(userId);
    let sid = this.cryptography.encryptTextAlgoBulls(sessionId);
    let url = "https://choice.algobulls.com/loading?cid=" + encodeURIComponent(cid) + "&sid=" + encodeURIComponent(sid) + "&state=choice";
    window.open(url, "_blank");
    localStorage.removeItem("fromUrl");
    this.utils.clear("fromUrl");
    this.utils.clear("clickFromURL");
  }
  goToQuantsApp() {
    this.isProductServiceHit = true;
    let userId = this.cryptography.decryptText(this.utils.get("userId"));
    let sessionId = this.cryptography.decryptText(this.utils.get("sessionId"));
    let cid = this.cryptography.encryptTextQuantsApp(userId);
    let sid = this.cryptography.encryptTextQuantsApp(sessionId);
    let payload = {
      EncClientId: cid,
      EncSessionId: sid
    };
    this.rest.algobullsAuthentication(payload, "quantsappAuthorized").subscribe(res => {
      if (res && res.status === 200 && res.body && res.body["Status"] === "Success") {
        let defaultPage = this.utils.getFromURL() || localStorage.getItem("fromUrl") || "";
        defaultPage = defaultPage.indexOf("quantsapp") > -1 ? defaultPage : "";
        let url = this.apiURL.getQuantsAppURL(encodeURIComponent(cid), encodeURIComponent(sid), defaultPage);
        //console.debug('quantsappurl',url);
        window.open(url, "_blank");
      } else {
        this.utils.error("Error", "Something went wrong!");
      }
      localStorage.removeItem("fromUrl");
      this.utils.clear("fromUrl");
      this.utils.clear("clickFromURL");
    }, error => {
      this.utils.error("Error", "Something went wrong!");
    }).add(() => {
      this.isProductServiceHit = false;
    });
  }
  handleProductRedirection(type) {
    let url;
    if (type === "algocrabAuthorized") {
      url = this.apiURL.getAlgocrabURL();
    }
    window.open(url, "_blank");
  }
  goToStocksEmoji() {
    this.isProductServiceHit = true;
    let userId = this.cryptography.decryptText(this.utils.get("userId"));
    let sessionId = this.cryptography.decryptText(this.utils.get("sessionId"));
    let cid = this.cryptography.encryptTextStocksEmoji(userId);
    let sid = this.cryptography.encryptTextStocksEmoji(sessionId);
    let payload = {
      EncClientId: cid,
      EncSessionId: sid
    };
    this.rest.algobullsAuthentication(payload, "stocksemojiAuthorized").subscribe(res => {
      if (res && res.status === 200 && res.body && res.body["Status"] === "Success") {
        this.redirectToStocksEmoji();
      } else {
        this.utils.error("Error", "Something went wrong!");
      }
    }, error => {
      this.utils.error("Error", "Something went wrong!");
    }).add(() => {
      this.isProductServiceHit = false;
    });
  }
  redirectToStocksEmoji() {
    let userId = this.cryptography.decryptText(this.utils.get("userId"));
    let sessionId = this.cryptography.decryptText(this.utils.get("sessionId"));
    let cid = this.cryptography.encryptTextStocksEmoji(userId);
    let sid = this.cryptography.encryptTextStocksEmoji(sessionId);
    let url = "https://choice.stocksemoji.com/choice-callback?cid=" + encodeURIComponent(cid) + "&sid=" + encodeURIComponent(sid);
    window.open(url, "_blank");
    localStorage.removeItem("fromUrl");
    this.utils.clear("fromUrl");
    this.utils.clear("clickFromURL");
  }
  goToStocks() {
    this.isProductServiceHit = true;
    let userId = this.cryptography.decryptText(this.utils.get("userId"));
    let sessionId = this.cryptography.decryptText(this.utils.get("sessionId"));
    let cid = this.cryptography.encryptTextStockants(userId);
    let sid = this.cryptography.encryptTextStockants(sessionId);
    let payload = {
      EncClientId: cid,
      EncSessionId: sid
    };
    this.rest.algobullsAuthentication(payload, "stockantsAuthorized").subscribe(res => {
      if (res && res.status === 200 && res.body && res.body["Status"] === "Success") {
        this.redirectToStockants();
      } else {
        this.utils.error("Error", "Something went wrong!");
      }
    }, error => {
      this.utils.error("Error", "Something went wrong!");
    }).add(() => {
      this.isProductServiceHit = false;
    });
  }
  redirectToStockants() {
    let userId = this.cryptography.decryptText(this.utils.get("userId"));
    let sessionId = this.cryptography.decryptText(this.utils.get("sessionId"));
    let cid = this.cryptography.encryptTextStockants(userId);
    let sid = this.cryptography.encryptTextStockants(sessionId);
    let url = this.apiURL.getStockantsURL(encodeURIComponent(cid), encodeURIComponent(sid));
    window.open(url, "_blank");
    localStorage.removeItem("fromUrl");
    this.utils.clear("fromUrl");
    this.utils.clear("clickFromURL");
  }
  scrollIntoView(element) {
    element = document.getElementById(element);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }
    this.showHideExplore();
  }
  showPartnerProductFeedback(productType) {
    this.utils.checkforFeatureAndUpdate(productType);
  }
  showHideExplore() {
    this.utils.put("showExplore", this.cryptography.encryptText("false"));
    this.showExplore = this.cryptography.decryptText(this.utils.get("showExplore"));
  }
  goToNarnolia() {
    this.isProductServiceHit = true;
    let userId = this.cryptography.decryptText(this.utils.get("userId"));
    let sessionId = this.cryptography.decryptText(this.utils.get("sessionId"));
    let cid = this.cryptography.encryptTextNarnolia(userId);
    let sid = this.cryptography.encryptTextNarnolia(sessionId);
    let payload = {
      EncClientId: cid,
      EncSessionId: sid
    };
    this.rest.algobullsAuthentication(payload, "narnoliaAuthorized").subscribe(res => {
      if (res && res.status === 200 && res.body && res.body["Status"] === "Success") {
        this.redirectToNarnolia();
      } else {
        this.utils.error("Error", "Something went wrong!");
      }
    }, error => {
      this.utils.error("Error", "Something went wrong!");
    }).add(() => {
      this.isProductServiceHit = false;
    });
  }
  redirectToNarnolia() {
    let userId = this.cryptography.decryptText(this.utils.get("userId"));
    let sessionId = this.cryptography.decryptText(this.utils.get("sessionId"));
    let cid = this.cryptography.encryptTextNarnolia(userId);
    let sid = this.cryptography.encryptTextNarnolia(sessionId);
    let url = this.apiURL.getNarnoliaURL(encodeURIComponent(cid), encodeURIComponent(sid));
    window.open(url, "_blank");
    localStorage.removeItem("fromUrl");
    this.utils.clear("fromUrl");
    this.utils.clear("clickFromURL");
  }
  goToPixstox() {
    this.isProductServiceHit = true;
    let userId = this.cryptography.decryptText(this.utils.get("userId"));
    let sessionId = this.cryptography.decryptText(this.utils.get("sessionId"));
    let cid = this.cryptography.encryptTextPixstox(userId);
    let sid = this.cryptography.encryptTextPixstox(sessionId);
    let payload = {
      EncClientId: cid,
      EncSessionId: sid
    };
    this.rest.algobullsAuthentication(payload, "pixstoxAuthorized").subscribe(res => {
      if (res && res.status === 200 && res.body && res.body["Status"] === "Success") {
        this.redirectToPixstox();
      } else {
        this.utils.error("Error", "Something went wrong!");
      }
    }, error => {
      this.utils.error("Error", "Something went wrong!");
    }).add(() => {
      this.isProductServiceHit = false;
    });
  }
  redirectToPixstox() {
    let userId = this.cryptography.decryptText(this.utils.get("userId"));
    let sessionId = this.cryptography.decryptText(this.utils.get("sessionId"));
    let cid = this.cryptography.encryptTextPixstox(userId);
    let sid = this.cryptography.encryptTextPixstox(sessionId);
    let payload = {
      EncClientId: cid,
      EncSessionId: sid
    };
    this.rest.algobullsAuthentication(payload, "pixstoxAuthorized").subscribe(res => {
      if (res && res.status === 200 && res.body && res.body["Status"] === "Success") {
        let url = this.apiURL.getPixstoxURL(encodeURIComponent(this.cryptography.encryptTextPixstox(userId)), encodeURIComponent(this.cryptography.encryptTextPixstox(sessionId)));
        window.open(url, "_blank");
        localStorage.removeItem("fromUrl");
        this.utils.clear("fromUrl");
        this.utils.clear("clickFromURL");
      } else {
        this.utils.error("Error", "Something went wrong!");
      }
    }, error => {
      this.utils.error("Error", "Something went wrong!");
    });
  }
  redirectToTradetron() {
    let userId = this.cryptography.decryptText(this.utils.get("userId"));
    let sessionId = this.cryptography.decryptText(this.utils.get("sessionId"));
    let cid = this.cryptography.encryptTextTradetron(userId);
    let sid = this.cryptography.encryptTextTradetron(sessionId);
    let payload = {
      EncClientId: cid,
      EncSessionId: sid
    };
    this.rest.algobullsAuthentication(payload, "tradetronAuthorized").subscribe(res => {
      if (res && res.status === 200 && res.body && res.body["Status"] === "Success") {
        let url = this.apiURL.getTradetronURL(encodeURIComponent(this.cryptography.encryptTextTradetron(userId)), encodeURIComponent(this.cryptography.encryptTextTradetron(sessionId)));
        window.open(url, "_blank");
      } else {
        this.utils.error("Error", "Something went wrong!");
      }
    }, error => {
      this.utils.error("Error", "Something went wrong!");
    });
  }
  getMFBasketDetails() {
    this.loader.combinedBasketLoader = true;
    let payload = {
      IsSIP: "3",
      UserCategory: "E",
      BasketTag: "INDIA-POST"
    };
    this.postLoginService.getMFBasketDetails(payload).subscribe(res => {
      if (res && res.Status === "Success" && res.Response) {
        this.config.mfBasket = res.Response || [];
        setTimeout(() => {
          this.config.mfBasket.forEach((ele, i) => {
            let element = document.getElementById("mf_basket_" + i);
            if (element) {
              const delta = 6;
              let startX;
              let startY;
              element.addEventListener("mousedown", event => {
                startX = event.pageX;
                startY = event.pageY;
              });
              element.addEventListener("mouseup", event => {
                const diffX = Math.abs(event.pageX - startX);
                const diffY = Math.abs(event.pageY - startY);
                if (diffX < delta && diffY < delta) {
                  this.redirectToBasketDetails(ele);
                }
              });
            } else {
              // console.log("element not found")
            }
          });
        }, 2000);
      } else if (this.utils.isSessionExpired(res.reason)) {
        // this.shared.isSSO =  localStorage.getItem('isSSO')=='true'
        // if(this.shared.isSSO){
        //   this.utils.sessionExpireHandling()
        //   return
        // }
        // this.utils.error("Session Expired", "Please Login Again.");
        // this.utils.postFeatureCount();
        // this.utils.clearLoginDetails();
        // this.shared.userId = null;
        // this.route.navigate(["auth/login"]);
      } else {
        this.utils.error("Error", "Something went wrong!!");
      }
    }, error => {
      this.utils.error("Error", "Something went wrong!!");
    }).add(() => {
      this.loader.combinedBasketLoader = false;
    });
  }
  openLink() {
    if (localStorage.getItem("onb_url")) {
      let url = atob(localStorage.getItem("onb_url"));
      window.open(url, "_self");
    }
  }
  navigateToSupport() {
    this.route.navigate(["/links/support"]);
  }
  navigateToModificationFlow() {
    let userId = "";
    let url = this.rest.getOnboardingModificationURL(btoa(this.utils.getUserId()), encodeURIComponent(this.cryptography.encryptText(this.utils.getUserId())), "undefined");
    url = url.replace("&sid=undefined", "");
    url = url + "&type=dormant";
    window.open(url, "_blank");
  }
  closeRealtimeMessage() {
    this.realtimeMessage = false;
    localStorage.setItem("realtimeMessage", "1");
  }
  redirectToArthnirmiti() {
    let userId = this.cryptography.decryptText(this.utils.get("userId"));
    let sessionId = this.cryptography.decryptText(this.utils.get("sessionId"));
    let cid = this.cryptography.encryptTextArthnirmiti(userId);
    let sid = this.cryptography.encryptTextArthnirmiti(sessionId);
    let payload = {
      EncClientId: cid,
      EncSessionId: sid
    };
    this.rest.algobullsAuthentication(payload, "arthnirmitiAuthorized").subscribe(res => {
      if (res && res.status === 200 && res.body && res.body["Status"] === "Success") {
        let url = this.apiURL.getArthNirmitiURL(encodeURIComponent(this.cryptography.encryptTextArthnirmiti(userId)), encodeURIComponent(this.cryptography.encryptTextArthnirmiti(sessionId)));
        window.open(url, "_blank");
      } else {
        this.utils.error("Error", "Something went wrong!");
      }
    }, error => {
      this.utils.error("Error", "Something went wrong!");
    });
  }
  closeAuthorizePopup() {
    this.productType = '';
  }
  static {
    this.ctorParameters = () => [{
      type: src_app_services_cryptography_service__WEBPACK_IMPORTED_MODULE_7__.CryptographyService
    }, {
      type: _services_rest_post_login_service__WEBPACK_IMPORTED_MODULE_15__.PostLoginService
    }, {
      type: angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_21__.OAuthService
    }, {
      type: src_app_services_rest_common_service__WEBPACK_IMPORTED_MODULE_9__.CommonService
    }, {
      type: src_app_services_sockets_broadcaster__WEBPACK_IMPORTED_MODULE_10__.Broadcaster
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_22__.ActivatedRoute
    }, {
      type: src_app_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_8__.FirestoreService
    }, {
      type: _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_19__.UtilsService
    }, {
      type: _services_rest_post_login_service__WEBPACK_IMPORTED_MODULE_15__.PostLoginService
    }, {
      type: _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_18__.SharedDataService
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_22__.Router
    }, {
      type: src_app_services_api_urls__WEBPACK_IMPORTED_MODULE_6__.APIURLs
    }, {
      type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_23__.LocalStorageService
    }, {
      type: src_app_common_module_header_header_component__WEBPACK_IMPORTED_MODULE_4__.HeaderComponent
    }, {
      type: src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_5__.AnalyticsService
    }];
  }
  static {
    this.propDecorators = {
      myCarousel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_24__.ViewChild,
        args: ["myCarousel", {
          static: false
        }]
      }],
      basketCarousel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_24__.ViewChild,
        args: ["basketCarousel", {
          static: false
        }]
      }],
      onScrollEvent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_24__.HostListener,
        args: ["window:scroll", ["$event"]]
      }]
    };
  }
};
JiffyDashboardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_25__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_24__.Component)({
  selector: "app-jiffy-dashboard",
  template: _jiffy_dashboard_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  providers: [src_app_common_module_header_header_component__WEBPACK_IMPORTED_MODULE_4__.HeaderComponent],
  standalone: true,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_26__.NgClass, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_27__.PieChartModule, _ngu_carousel__WEBPACK_IMPORTED_MODULE_28__.NguCarousel, _ngu_carousel__WEBPACK_IMPORTED_MODULE_28__.NguCarouselDefDirective, _ngu_carousel__WEBPACK_IMPORTED_MODULE_28__.NguCarouselPointDirective, _market_dashboard_market_dashboard_component__WEBPACK_IMPORTED_MODULE_17__.MarketDashboardComponent, _corporate_actions_corporate_actions_component__WEBPACK_IMPORTED_MODULE_16__.CorporateActionsComponent, _common_module_product_authorization_popup_product_authorization_popup_component__WEBPACK_IMPORTED_MODULE_11__.ProductAuthorizationPopupComponent, _angular_common__WEBPACK_IMPORTED_MODULE_26__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_26__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_26__.DatePipe, _pipes_condense_pipe__WEBPACK_IMPORTED_MODULE_12__.CondensePipe, _pipes_value_pipe__WEBPACK_IMPORTED_MODULE_14__.ValuePipe, _pipes_sanitizer_url_pipe__WEBPACK_IMPORTED_MODULE_13__.SanitizerURLPipe, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_27__.TooltipModule],
  styles: [(_jiffy_dashboard_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default()), (_slick_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default()), (_slick_theme_css_ngResource__WEBPACK_IMPORTED_MODULE_3___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_25__.__metadata)("design:paramtypes", [src_app_services_cryptography_service__WEBPACK_IMPORTED_MODULE_7__.CryptographyService, _services_rest_post_login_service__WEBPACK_IMPORTED_MODULE_15__.PostLoginService, angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_21__.OAuthService, src_app_services_rest_common_service__WEBPACK_IMPORTED_MODULE_9__.CommonService, src_app_services_sockets_broadcaster__WEBPACK_IMPORTED_MODULE_10__.Broadcaster, _angular_router__WEBPACK_IMPORTED_MODULE_22__.ActivatedRoute, src_app_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_8__.FirestoreService, _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_19__.UtilsService, _services_rest_post_login_service__WEBPACK_IMPORTED_MODULE_15__.PostLoginService, _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_18__.SharedDataService, _angular_router__WEBPACK_IMPORTED_MODULE_22__.Router, src_app_services_api_urls__WEBPACK_IMPORTED_MODULE_6__.APIURLs, ngx_webstorage__WEBPACK_IMPORTED_MODULE_23__.LocalStorageService, src_app_common_module_header_header_component__WEBPACK_IMPORTED_MODULE_4__.HeaderComponent, src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_5__.AnalyticsService])], JiffyDashboardComponent);


/***/ }),

/***/ 37254:
/*!**********************************************************************************!*\
  !*** ./src/app/post-login-module/market-dashboard/market-dashboard.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MarketDashboardComponent: () => (/* binding */ MarketDashboardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _market_dashboard_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./market-dashboard.component.html?ngResource */ 80066);
/* harmony import */ var _market_dashboard_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./market-dashboard.component.scss?ngResource */ 16444);
/* harmony import */ var _market_dashboard_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_market_dashboard_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var src_app_services_rest_market_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/rest/market.service */ 23369);
/* harmony import */ var src_app_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/shared-data/shared-data.service */ 46013);
/* harmony import */ var src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/utils/utils.service */ 89893);
/* harmony import */ var _pipes_condense_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pipes/condense.pipe */ 82203);
/* harmony import */ var _pipes_custom_order_by_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pipes/custom-order-by.pipe */ 63536);
/* harmony import */ var _pipes_segment_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/segment.pipe */ 39995);
/* harmony import */ var _pipes_value_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pipes/value.pipe */ 50615);














let MarketDashboardComponent = class MarketDashboardComponent {
  constructor(marketService, utils, shared, router) {
    this.marketService = marketService;
    this.utils = utils;
    this.shared = shared;
    this.router = router;
    /**
    * gainer array
    */
    this.gainer = [];
    this.redirectionHandling = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.EventEmitter();
    this.segmentSelected = "NSE";
    this.selectedTab = "trending";
    this.marketIndices = {
      '1': [],
      '3': [],
      'selected': '1'
    };
    this.gainer = [];
    this.toBeSubscribed = [];
    this.checkValue = false;
    this.subscriptionList = [];
    this.commonIndices = [];
    this.globalIndicesArray = [];
    this.isGettingData = false;
  }
  ngOnInit() {
    /*  4: gainer
     5: loser */
    // this.selectTab('trending')
    this.segmentSelected = "NSE";
    this.selectTab(this.selectedTab ? this.selectedTab : 'trending');
    this.getSocketData();
  }
  /**
   * Get Socket Data
   */
  getSocketData() {
    this.subscriptionList.push(this.utils.broadcastObservable('watchlist').subscribe(res => {
      let scrip = this.gainer.filter((obj, index) => {
        return res[0]['1'] == obj.SegmentId && obj.Token == res[0]["7"];
      });
      if (scrip.length > 0 && this.utils.isUpdatedData(scrip[0], res[0])) {
        let obj = scrip[0];
        obj.Volume = Number(res[0][79]) || obj.Volume || 0;
        let priceDivisor = this.utils.getDefaultPriceDivisor(res[0]['1'], res[0]['7']);
        obj.prevChange = (Number(res[0]['8']) / priceDivisor || 0) - (obj.LTP || 0);
        obj['Close'] = res[0]['76'] / priceDivisor;
        obj['Close2'] = res[0]['76'];
        obj.LTP = Number(res[0]["8"]) == 0 ? obj['Close2'] / priceDivisor : (res[0]["8"] || 0) / priceDivisor; // if LTP == 0 then show prevClose (10/05/2021)
        obj.Change = ((res[0]['8'] == 0 ? obj['Close2'] : Number(res[0]['8'] || 0)) - Number(res[0]['76'])) / priceDivisor || obj.Change; // (res[0]['8'] - obj['Close']) / (res[0]['399'] || 1);//
        obj['ChangePer'] = obj['Change'] / (res[0]['76'] / priceDivisor) * 100 || obj['ChangePer'];
        // obj.LTP = res[0]["8"] / res[0]["399"];
        obj.class = obj['Change'] < 0 ? 'red' : obj['Change'] > 0 ? 'green' : '';
        obj.Change = obj.Change;
        obj.ChangePer = obj.ChangePer;
      }
    }));
  }
  /**
   * toggle(standAlone or Consolidated)
   * @param data standAlone or consolidated
   */
  onChange(event) {
    this.segmentSelected = event ? 'BSE' : 'NSE';
    this.selectTab(this.selectedTab);
    this.checkValue = event;
  }
  selectTab(val) {
    this.selectedTab = val;
    switch (val) {
      case 'trending':
        this.getEquityGainerLoser(4);
        break;
      case 'topGainer':
        this.getEquityGainerLoser(4);
        break;
      case 'topLoser':
        this.getEquityGainerLoser(5);
        break;
      case 'IN':
        this.getMarketIndicesData();
        break;
      case 'global':
        this.getGlobalIndicesData();
        break;
      default:
        this.getEquityGainerLoser(4);
        break;
    }
  }
  /**
   * Go To Market
   */
  goToMarket() {
    // this.selectedTab=val
    this.saveMarketFilters();
    this.redirectionHandling.emit(true);
    switch (this.selectedTab) {
      case 'trending':
        this.router.navigate(['/market/stocks/top-gainers/' + this.segmentSelected.toLowerCase()]);
        break;
      case 'topGainer':
        this.router.navigate(['/market/stocks/top-gainers/' + this.segmentSelected.toLowerCase()]);
        break;
      case 'topLoser':
        this.router.navigate(['/market/stocks/top-losers/' + this.segmentSelected.toLowerCase()]);
        break;
      case 'IN':
        this.router.navigate(['/market/indices/market-indices']);
        break;
      case 'global':
        this.router.navigate(['/market/indices/global-indices']);
        break;
      default:
        this.router.navigate(['/market/stocks/top-gainers/' + this.segmentSelected.toLowerCase()]);
        break;
    }
  }
  /**
   * Go To Company Page
   * @param item
   */
  goToCompanyPage(item) {
    let companyName = item["SecDesc"].replace(/[\s|\&|\%]/g, '').toLowerCase();
    let url = companyName + '/' + item.SegmentId + '/' + item.Token;
    if (item.SegmentId == 1 || item.SegmentId == 2 || item.SegmentId == 4 || item.SegmentId == 3) {
      url = "equity/" + url;
    } else if (item.SegmentId == 5 || item.SegmentId == 7) {
      url = "commodity/" + url;
    } else if (item.SegmentId == 13 || item.SegmentId == 38 || item.SegmentId == 14 || item.SegmentId == 39) {
      url = "currency/" + url;
    }
    this.saveMarketFilters();
    this.redirectionHandling.emit(true);
    this.router.navigate(['instrument/' + url]);
  }
  /**
   * Go To Index
   * @param item
   */
  goToCompanyPageIndex(item) {
    if (this.selectedTab != 'global') {
      this.saveMarketFilters();
      this.redirectionHandling.emit(true);
      this.router.navigate(['/instrument/indices/' + item.IndexName + '/' + item.SegmentId + '/' + item.Token]);
    }
  }
  /**
  * MostActiveBySegment api is called and response is manipulated according to view
  * @param count tab selected
  * @param MarketData gainer/loser
  */
  getEquityGainerLoser(MarketData) {
    let SegmentId = this.segmentSelected == 'NSE' ? 1 : 3;
    let payload = {
      "SegmentId": SegmentId,
      "IndexId": this.segmentSelected == 'NSE' ? 26000 : 19000,
      "MarketDataType": MarketData
    };
    this.gainer = [];
    this.isGettingData = true;
    this.marketService.getMostActiveByIndex(payload).subscribe(res => {
      this.isGettingData = false;
      if (res.Status =  true && res.Response) {
        res.Response.MostActiveList.forEach((element, index) => {
          let LTP = res.Response.MostActiveList[index].LTP;
          let percent = res.Response.MostActiveList[index].PerChange;
          let change = LTP * percent / (100 + percent);
          let priceDivisor = res.Response.MostActiveList[index].PriceDivisor;
          res.Response.MostActiveList[index].LTP = LTP / priceDivisor;
          res.Response.MostActiveList[index].SegmentId = SegmentId;
          res.Response.MostActiveList[index].Change = change / priceDivisor;
          res.Response.MostActiveList[index].ChangePer = percent;
          res.Response.MostActiveList[index].class = percent > 0 ? 'green' : percent == 0 ? '' : 'red';
          //  res.Response.MostActiveList[index].Change =(res.Response.MostActiveList[index].Change);
          // res.Response.MostActiveList[index].ChangePer =(res.Response.MostActiveList[index].ChangePer);
        });
        this.gainer = res.Response.MostActiveList;
        if (this.toBeSubscribed && this.toBeSubscribed.length) {
          this.utils.unSubscribeMultitouchline(this.toBeSubscribed);
        }
        this.toBeSubscribed = this.gainer;
        // this.utils.subscribeMultitouchline(this.toBeSubscribed);
        this.getMultiTouchLineData();
      } else if (res.Reason == 'Data not found.') {
        this.gainer = [];
      } else if (this.utils.isSessionExpired(res.Reason)) {
        // if(this.shared.isSSO){
        //   this.utils.sessionExpireHandling()
        //   return
        // }
        // this.utils.error('Session Expired', "Please Login Again");
        // this.utils.postFeatureCount();
        // this.utils.clearLoginDetails();
        // this.shared.userId = null;
        // this.router.navigate(['auth/login']);
        this.gainer = [];
      } else {
        this.gainer = [];
        this.utils.error('Error', "Something went Wrong");
      }
    }, err => {
      this.isGettingData = false;
      this.gainer = [];
      this.utils.error('Error', "Something went Wrong");
    });
  }
  /**
   * Get Market Indices
   */
  getMarketIndicesData() {
    let request = {
      "StartPosition": 0,
      "NoOfRecords": 12,
      "NeedMktData": 1
    };
    this.gainer = [];
    this.isGettingData = true;
    this.marketIndices = {
      '1': [],
      '3': [],
      'selected': '1'
    };
    this.marketService.getIndicesList(request).subscribe(data => {
      this.isGettingData = false;
      if (data.Status == "Success" && data.Response.lstMktData) {
        (data.Response.lstMktData || []).forEach((item, index) => {
          if (item.Seg == 1 || item.Seg == 3) {
            item.Open = item.O / 100;
            item.High = item.H / 100;
            item.Low = item.L / 100;
            item.Close = item.PC / 100;
            item.LTP = item.P / 100;
            item.Change = item.LTP - item.Close;
            item.ChangePer = item.Change * 100 / item.Close;
            item.class = item.Change > 0 ? 'green' : item.Change < 0 ? 'red' : '';
            item = {
              ...item,
              ...data.Response.lstIndices[index]
            };
            this.marketIndices[item.Seg].push(item);
          }
        });
        this.gainer = this.marketIndices[this.segmentSelected == 'NSE' ? 1 : 3];
        if (this.toBeSubscribed && this.toBeSubscribed.length) {
          this.utils.unSubscribeMultitouchline(this.toBeSubscribed);
        }
        this.toBeSubscribed = this.marketIndices[this.segmentSelected == 'NSE' ? 1 : 3];
        // this.utils.subscribeMultitouchline(this.toBeSubscribed);
        this.getMultiTouchLineData();
      }
    }, err => {
      this.gainer = [];
      this.isGettingData = false;
    });
  }
  /**
  * Get MultiTouchLine Data
  */
  getMultiTouchLineData() {
    // if ((this.utils.isAuthorized() && this.isSegmentAllowed == 'Y') || ((!this.shared.userId || this.shared.userId == 'guest'))) {
    if (this.utils.isAuthorized() || !this.shared.userId || this.shared.userId == 'guest') {
      const userId = this.utils.getUserId();
      let datapoints = [];
      if (this.toBeSubscribed && this.toBeSubscribed.length) {
        this.toBeSubscribed.forEach(item => {
          datapoints.push({
            SegmentId: item.SegmentId,
            Token: item.Token
          });
        });
        // this.toggleAddRemove(item);
        // this.utils.subscribeMultitouchline( this.toBeSubscribed);
      }
      const tokens = this.utils.generateTokens(this.toBeSubscribed, 'SegmentId', 'Token');
      const payload = {
        'UserId': !userId || userId == 'guest' ? 'guest' : userId,
        'SessionId': this.utils.getSessionId() || '',
        'MultipleTokens': tokens
      };
      this.utils.commonGetMultipleTouchLineCall(payload).subscribe(data => {
        if (data.Status == 'Success' && data.Response && data.Response.lMT && data.Response.lMT.length) {
          const multitouchLineResponse = data.Response.lMT;
          console.log("toBeSubscribed multitouchline12 ", JSON.parse(JSON.stringify(this.toBeSubscribed)));
          multitouchLineResponse.forEach((element, index) => {
            if (element['SegmentId'] == this.toBeSubscribed[index].SegmentId && element['Token'] == this.toBeSubscribed[index].Token) {
              Object.assign(element, Object.assign(this.toBeSubscribed[index], element));
              let isSame = element['LTP'] == element['Change'];
              element['prevChange'] = 0;
              element['PrvClose'] = element['LTP'] - element['Change'];
              element['PrvClose'] = element['PrvClose'] / element['PriceDivisor'];
              element['LTP'] = Number(element['LTP'] / element['PriceDivisor']);
              element['Change'] = isSame ? 0 : element['Change'] / element['PriceDivisor'];
              element['ChangePer'] = element['Change'] / element['PrvClose'] * 100;
              element.class = element['Change'] < 0 ? 'red' : element['Change'] > 0 ? 'green' : '';
              element['Change'] = element['Change'];
              element['ChangePer'] = element['ChangePer'];
              this.toBeSubscribed[index] = Object.assign(this.toBeSubscribed[index], element);
            }
          });
          this.toBeSubscribed = [...this.toBeSubscribed];
          // }else if (this.utils.isSessionExpired(data.Reason)) {
          //   if (this.shared.isSSO) {
          //     this.utils.sessionExpireHandling();
          //     return;
          //   }
          //   this.utils.error("Session Expired", "Please Login Again");
          //   this.utils.clearLoginDetails();
          //   this.shared.userId = null;
          //   this.router.navigate(["auth/login"]);
        }
        this.utils.subscribeMultitouchline(datapoints);
      }, err => {
        this.utils.subscribeMultitouchline(datapoints);
      });
    }
  }
  /**
  * Get Global Indices Data from Server
  */
  getGlobalIndicesData() {
    let obj = {
      "nMarketSegmentId": 0,
      "nToken": 0
    };
    this.gainer = [];
    this.globalIndicesArray = [];
    this.isGettingData = true;
    this.marketService.getGlobalIndices(obj).subscribe(res => {
      this.isGettingData = false;
      if (res.Response) {
        this.globalIndicesArray = res.Response;
        this.globalIndicesArray = this.getRows(res.Response);
        this.gainer = this.globalIndicesArray;
        if (this.toBeSubscribed && this.toBeSubscribed.length) {
          this.utils.unSubscribeMultitouchline(this.toBeSubscribed);
        }
        this.toBeSubscribed = this.gainer;
        // this.utils.subscribeMultitouchline(this.toBeSubscribed);
        this.getMultiTouchLineData();
      }
    }, err => {
      this.gainer = [];
      this.isGettingData = false;
    });
  }
  /**
  * Filter and get rows data
  * @param data JSON Object of Global Indices
  */
  getRows(data) {
    const arr = [];
    for (let i of data) {
      arr.push({
        IndexName: i.IndexName,
        Country: i.Country,
        Open: Number(i.Open),
        Low: Number(i.Low),
        Date: i.Date,
        High: Number(i.High),
        Close: Number(i.Value) - Number(i.Change),
        LTP: Number(i.Value),
        Change: Number(i.Change),
        ChangePer: Number(i.Change * 100 / (i.Value - i.Change)),
        class: Number(i.Change) > 0 ? 'green' : Number(i.Change) < 0 ? 'red' : ''
      });
    }
    return arr;
  }
  saveMarketFilters() {
    this.utils.put('dashboardMarketFilter', {
      'checkValue': this.checkValue,
      'segmentSelected': this.segmentSelected,
      'selectedTab': this.selectedTab
    });
  }
  ngOnChanges(changes) {
    if (changes['checkValue'] && changes['checkValue']['currentValue'] !== null) {
      this.checkValue = changes['checkValue']['currentValue'];
    }
    if (changes['segmentSelected'] && changes['segmentSelected']['currentValue']) {
      this.segmentSelected = changes['segmentSelected']['currentValue'];
    }
    if (changes['selectedTab'] && changes['selectedTab']['currentValue']) {
      this.selectedTab = changes['selectedTab']['currentValue'];
    }
  }
  ngOnDestroy() {
    this.subscriptionList.forEach(subscription => {
      if (subscription) subscription.unsubscribe();
    });
  }
  static {
    this.ctorParameters = () => [{
      type: src_app_services_rest_market_service__WEBPACK_IMPORTED_MODULE_2__.MarketService
    }, {
      type: src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_4__.UtilsService
    }, {
      type: src_app_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__.SharedDataService
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
    }];
  }
  static {
    this.propDecorators = {
      segmentSelected: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
      }],
      selectedTab: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
      }],
      checkValue: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
      }],
      redirectionHandling: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
      }]
    };
  }
};
MarketDashboardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-market-dashboard',
  template: _market_dashboard_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_13__.SlicePipe, _angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe, _pipes_segment_pipe__WEBPACK_IMPORTED_MODULE_7__.SegmentPipe, _pipes_condense_pipe__WEBPACK_IMPORTED_MODULE_5__.CondensePipe, _pipes_value_pipe__WEBPACK_IMPORTED_MODULE_8__.ValuePipe, _pipes_custom_order_by_pipe__WEBPACK_IMPORTED_MODULE_6__.CustomOrderByPipe],
  providers: [src_app_services_rest_market_service__WEBPACK_IMPORTED_MODULE_2__.MarketService],
  styles: [(_market_dashboard_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__metadata)("design:paramtypes", [src_app_services_rest_market_service__WEBPACK_IMPORTED_MODULE_2__.MarketService, src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_4__.UtilsService, src_app_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__.SharedDataService, _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router])], MarketDashboardComponent);


/***/ }),

/***/ 91533:
/*!**************************************************************!*\
  !*** ./src/app/services/firestore/push-messaging.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PushMessagingService: () => (/* binding */ PushMessagingService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/messaging */ 57781);
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-webstorage */ 12426);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 84412);
/* harmony import */ var _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/libs/esm-moment.min.js */ 29483);
/* harmony import */ var _cryptography_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cryptography.service */ 67224);





/** Import Fingerprint Library */
// import Fingerprint2 from '../../../assets/libs/esm-fingerprint.js';
// var fingerprint: any = require('../../../assets/libs/esm-fingerprint.js');
/** Import Moment JS Library*/
// var moment: any = require();


let PushMessagingService = class PushMessagingService {
  /**
   *
   * @param angularFireMessaging
   */
  constructor(angularFireMessaging, storage, cryptography) {
    this.angularFireMessaging = angularFireMessaging;
    this.storage = storage;
    this.cryptography = cryptography;
    /** Stroing Messages*/
    this.currentMessage = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
    // this.angularFireMessaging.messaging.subscribe((messaging: firebase.messaging.Messaging) => {
    //   messaging.onMessage = messaging.onMessage.bind(messaging);
    //   messaging.onTokenRefresh = messaging.onTokenRefresh.bind(messaging);
    // });
    this.getDeviceInfo();
  }
  getSessionId() {
    let sessionId = this.storage.retrieve('sessionId');
    if (sessionId) {
      sessionId = this.cryptography.decryptText(sessionId);
    }
    return sessionId;
  }
  /**
  * Get the current User ID from localStorage
  */
  getUserId() {
    let userId = this.storage.retrieve('userId');
    if (userId) {
      userId = this.cryptography.decryptText(userId);
    }
    return userId || '';
  }
  requestPermission() {
    (0,_angular_fire_messaging__WEBPACK_IMPORTED_MODULE_3__.getToken)(this.angularFireMessaging).then(token => {
      this.updateToken(token);
    }).catch(err => {
      console.log(err);
    });
  }
  getProfile() {
    let profile = this.storage.retrieve('profile');
    if (profile) {
      profile = this.cryptography.decryptText(profile);
    }
    return profile ? JSON.parse(profile) : '';
  }
  updateToken(token) {
    setTimeout(() => {
      let sessionId = this.getSessionId() || null;
      let userInfo = this.getProfile() || {};
      let userId = this.getUserId() || 'guest';
      token = token || this.storage.retrieve('fcmToken') || '';
      if (token) {
        let request = {
          "device_id": this.platformInfo.fingerprint,
          "device_info": this.platformInfo.browser + '_' + this.platformInfo.platform,
          "app_version": this.platformInfo.version,
          "player_id": token || this.storage.retrieve('fcmToken') || '',
          "mobile_no": userInfo.MobileNo || 'NA',
          "client_id": userId,
          "session_id": sessionId,
          "device_type": 'web',
          "user_type": !userId || userId == 'guest' ? 'Guest' : 'Client',
          "email": userInfo.EmailID || 'NA',
          "client_name": userInfo.Name || 'NA',
          'firebase_flag': 1
        };
        // this.rest.firebaseSubcribe(request).subscribe((res) => { }, (err) => { });
      }
    }, 1000);
  }
  receiveNotification() {
    (0,_angular_fire_messaging__WEBPACK_IMPORTED_MODULE_3__.onMessage)(this.angularFireMessaging, message => {
      let userId = this.getUserId() || 'guest';
      let clientId = message['data'].client_id;
      if (userId == clientId && this.isAuthorized() || userId != clientId && ['orderbook', 'portfolio', 'holdings'].indexOf(message['data'].notification_type) == -1) {
        this.processNotification(message['data'], true);
      }
    });
  }
  /** Get device Info */
  getDeviceInfo() {
    let browser = "";
    let platformInfo = {
      'fingerprint': '',
      'components': '',
      'browser': '',
      'version': '',
      'platform': ''
    };
    let agent = navigator.userAgent.toLowerCase();
    let version;
    (version = agent.match(/msie ([\d.]+)/)) ? browser = "IE " + version[1] : (version = agent.match(/firefox\/([\d.]+)/)) ? browser = "FireFox " + version[1] : (version = agent.match(/chrome\/([\d.]+)/)) ? browser = "Chrome " + version[1] : (version = agent.match(/opera.([\d.]+)/)) ? browser = "Opera " + version[1] : (version = agent.match(/version\/([\d.]+).*safari/)) ? browser = "Safari " + version[1] : "NA";
    platformInfo.browser = browser && browser != 'NA' ? browser.split(' ')[0] : 'NA';
    platformInfo.version = browser && browser != 'NA' ? browser.split(' ')[1] : '0.0.0.0';
    platformInfo.platform = navigator.platform || "unknown";
    FingerprintJS.load().then(fpInstance => {
      fpInstance.get().then(result => {
        platformInfo.fingerprint = result.visitorId;
        platformInfo.components = result.components;
        this.platformInfo = platformInfo;
      });
    });
  }
  processNotification(data, isToSend) {
    let notification = null;
    let notificationMapper = {
      priceAlert: {
        url: '/instrument/$scripType/$scripName/$segmentId/$token',
        title: 'Price Alert Triggered'
      },
      onboarding_signup: {
        url: location.host.indexOf('uat') > -1 ? 'https://uat-pwa.choicetechlab.com/onboard/trading/onboard-info' : 'https://accounts.choiceindia.com/onboard/trading/onboard-info',
        title: 'Onboarding Pending'
      },
      holdings: {
        url: '/post/portfolio/holdings',
        title: ''
      },
      company: {
        url: '/instrument/$scripType/$scripName/$segmentId/$token',
        title: ''
      },
      morningAlert: {
        url: '/',
        title: 'Morning Alert'
      },
      marketCloseAlert: {
        url: '/',
        title: 'Close Market Alert'
      },
      orderbook: {
        url: '/client/orderBook',
        title: ''
      },
      portfolio: {
        url: '/post/portfolio/holdings',
        title: ''
      },
      funds: {
        url: '/client/funds',
        title: ''
      },
      call: {
        url: '/research-report/$category/$sub-category/$reportName/$reportId/$id',
        title: ''
      },
      researchPublish: {
        url: '/research-report/$category/$sub-category/$reportName/$reportId/$id',
        title: 'Research Published'
      },
      TargetAchieved: {
        url: '/instrument/$scripType/$scripName/$segmentId/$token',
        title: ''
      },
      book_profit: {
        url: '/research-report/$category/$sub-category/$reportName/$reportId/$id',
        title: ''
      },
      book_part_profit: {
        url: '/instrument/$scripType/$scripName/$segmentId/$token',
        title: ''
      },
      book_part_profit_with_trail_sl_to_cost: {
        url: '/instrument/$scripType/$scripName/$segmentId/$token',
        title: ''
      },
      stop_out: {
        url: '/instrument/$scripType/$scripName/$segmentId/$token',
        title: ''
      },
      exit_at_cost: {
        url: '/instrument/$scripType/$scripName/$segmentId/$token',
        title: ''
      },
      Technical: {
        url: '/research-report/$category/$sub-category/$reportName/$reportId/$id',
        title: ''
      },
      Fundamental: {
        url: '/research-report/$category/$sub-category/$reportName/$reportId/$id',
        title: ''
      },
      ipo_report: {
        url: '/research-report/fundamental/ipo-report/$reportName/$reportId/$id',
        title: ''
      },
      economy: {
        url: '/research-report/$category/$sub-category/$reportName/$reportId/$id',
        title: ''
      },
      exit: {
        url: '/research-report/$category/$sub-category/$reportName/$reportId/$id',
        title: ''
      },
      ipo_open: {
        url: '/research-report/fundamental/ipo-report/$reportName/$reportId/$id',
        title: ''
      },
      ipo_close: {
        url: '/research-report/fundamental/ipo-report/$reportName/$reportId/$id',
        title: ''
      }
    };
    let detailObj = data.notification_type_detail || data.NotificationTypeDetail ? JSON.parse(data.notification_type_detail || data.NotificationTypeDetail) : data;
    let mapperSelected = notificationMapper[detailObj.category || data.notification_type];
    notification = {
      type: data.notification_type,
      body: data.message,
      iconUrl: "assets/icons/192x192.png",
      click_action: this.getActionURL(detailObj, mapperSelected),
      url: "",
      title: data.title || notificationMapper[data.notification_type || 'morningAlert'].title || data.notification_type_detail.book_action || 'Message from Choice FinX'
    };
    if (isToSend && notification) return this.currentMessage.next(notification);else return notification;
  }
  getActionURL(data, notificationData) {
    let url = notificationData.url || '/';
    data = data.company_json || data;
    let tempURL = notificationData.url || '/instrument/$scripType/$scripName/$segmentId/$token';
    if (data && tempURL.indexOf('$') > -1) {
      let companyPath = (data.SecDesc || data.SecName || '').toLowerCase().replace(/[\s|\&|\%]/g, '').trim();
      let segmentId = Number(data.SegmentId);
      let subcategory = (data.subcategory || '').toLowerCase().replace(/\s/g, '-');
      let category = (data.category || '').toLowerCase().replace(/\s/g, '-');
      let scripType = data.IsIndex == 1 || [6, 8, 14, 39].indexOf(segmentId) > -1 ? 'indices' : [1, 2, 3].indexOf(segmentId) > -1 && !data.IsIndex ? 'equity' : [5, 7].indexOf(segmentId) > -1 ? 'commodity' : 'currency';
      url = tempURL.replace('$scripType', scripType).replace('$scripName', companyPath).replace('$segmentId', segmentId).replace('$token', data.Token).replace('$category', category).replace('$sub-category', subcategory || category).replace('$reportName', companyPath).replace('$reportId', data.report_id).replace('$id', data.id);
    }
    return url || tempURL;
  }
  /**
   * Check whether the current user is Authroized in post Login
   */
  isAuthorized() {
    let userId = this.getUserId();
    let sessionId = this.getSessionId();
    let watchTime = this.storage.retrieve('watchTime');
    if (userId && sessionId && watchTime && userId != 'guest') {
      return new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_0__["default"]().format('DD-MM-YYYY') == new _assets_libs_esm_moment_min_js__WEBPACK_IMPORTED_MODULE_0__["default"](watchTime).format('DD-MM-YYYY');
    }
    return false;
  }
  static {
    this.ctorParameters = () => [{
      type: _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_3__.Messaging
    }, {
      type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__.LocalStorageService
    }, {
      type: _cryptography_service__WEBPACK_IMPORTED_MODULE_1__.CryptographyService
    }];
  }
};
PushMessagingService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
  providedIn: 'root'
}), (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [_angular_fire_messaging__WEBPACK_IMPORTED_MODULE_3__.Messaging, ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__.LocalStorageService, _cryptography_service__WEBPACK_IMPORTED_MODULE_1__.CryptographyService])], PushMessagingService);


/***/ }),

/***/ 2843:
/*!******************************************************************************!*\
  !*** ./src/app/post-login-module/jiffy-dashboard/slick-theme.css?ngResource ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ 8564);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 98557);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@charset 'UTF-8';
/* Slider */
/* .slick-loading .slick-list
{
    background: #fff url('../images/ajax-loader.gif') center center no-repeat;
} */

/* Icons */
/* @font-face
{
    font-family: 'slick';
    font-weight: normal;
    font-style: normal;

    src: url('fonts/slick.eot');
    src: url('fonts/slick.eot?#iefix') format('embedded-opentype'), url('fonts/slick.woff') format('woff'), url('fonts/slick.ttf') format('truetype'), url('../fonts/slick.svg#slick') format('svg');
} */
/* Arrows */
.slick-prev,
.slick-next {
    font-size: 0;
    line-height: 0;

    position: absolute;
    top: 50%;

    display: block;

    width: 20px;
    height: 20px;
    padding: 0;
    transform: translate(0, -50%);

    cursor: pointer;

    color: transparent;
    border: none;
    outline: none;
    background: transparent;
}

.slick-prev:hover,
.slick-prev:focus,
.slick-next:hover,
.slick-next:focus {
    color: transparent;
    outline: none;
    background: transparent;
}

.slick-prev:hover:before,
.slick-prev:focus:before,
.slick-next:hover:before,
.slick-next:focus:before {
    opacity: 1;
}

.slick-prev.slick-disabled:before,
.slick-next.slick-disabled:before {
    opacity: .25;
}

.slick-prev:before,
.slick-next:before {
    font-family: 'slick';
    font-size: 20px;
    line-height: 1;

    opacity: .75;
    color: white;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.slick-prev {
    left: -25px;
}

[dir='rtl'] .slick-prev {
    right: -25px;
    left: auto;
}

.slick-prev:before {
    content: '←';
}

[dir='rtl'] .slick-prev:before {
    content: '→';
}

.slick-next {
    right: -25px;
}

[dir='rtl'] .slick-next {
    right: auto;
    left: -25px;
}

.slick-next:before {
    content: '→';
}

[dir='rtl'] .slick-next:before {
    content: '←';
}

/* Dots */
.slick-dotted.slick-slider {
    margin-bottom: 0;
}

.slick-dots {
    position: absolute;
    bottom: -25px;

    display: block;

    width: 100%;
    padding: 0;
    margin: 0;

    list-style: none;

    text-align: center;
}

.slick-dots li {
    position: relative;

    display: inline-block;

    width: 20px;
    height: 20px;
    margin: 0 5px;
    padding: 0;

    cursor: pointer;
}

.slick-dots li button {
    font-size: 0;
    line-height: 0;

    display: block;

    width: 20px;
    height: 20px;
    padding: 5px;

    cursor: pointer;

    color: transparent;
    border: 0;
    outline: none;
    background: transparent;
}

.slick-dots li button:hover,
.slick-dots li button:focus {
    outline: none;
}

.slick-dots li button:hover:before,
.slick-dots li button:focus:before {
    opacity: 1;
}

.slick-dots li button:before {
    font-family: 'slick';
    font-size: 6px;
    line-height: 20px;

    position: absolute;
    top: 0;
    left: 0;

    width: 20px;
    height: 20px;

    content: '•';
    text-align: center;

    opacity: .25;
    color: black;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.slick-dots li.slick-active button:before {
    opacity: .75;
    color: black;
}`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 98115:
/*!************************************************************************!*\
  !*** ./src/app/post-login-module/jiffy-dashboard/slick.css?ngResource ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ 8564);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 98557);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Slider */
.slick-slider {
    position: relative;

    display: block;
    box-sizing: border-box;

    -webkit-user-select: none;
    user-select: none;

    -webkit-touch-callout: none;
    -khtml-user-select: none;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
}

.slick-list {
    position: relative;

    display: block;
    overflow: hidden;

    margin: 0;
    padding: 0;
}

.slick-list:focus {
    outline: none;
}

.slick-list.dragging {
    cursor: pointer;
    cursor: hand;
}

.slick-slider .slick-track,
.slick-slider .slick-list {
    transform: translate3d(0, 0, 0);
}

.slick-track {
    position: relative;
    top: 0;
    left: 0;

    display: block;
}

.slick-track:before,
.slick-track:after {
    display: table;

    content: '';
}

.slick-track:after {
    clear: both;
}

.slick-loading .slick-track {
    visibility: hidden;
}

.slick-slide {
    display: none;
    float: left;

    height: 100%;
    min-height: 1px;
}

[dir='rtl'] .slick-slide {
    float: right;
}

.slick-slide img {
    display: block;
}

.slick-slide.slick-loading img {
    display: none;
}

.slick-slide.dragging img {
    pointer-events: none;
}

.slick-initialized .slick-slide {
    display: block;
}

.slick-loading .slick-slide {
    visibility: hidden;
}

.slick-vertical .slick-slide {
    display: block;

    height: auto;

    border: 1px solid transparent;
}

.slick-arrow.slick-hidden {
    display: none;
}`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 97359:
/*!***********************************************************************!*\
  !*** ./src/app/common-module/header/header.component.scss?ngResource ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ 8564);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 98557);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  outline: none;
}

/*Bootstrap Override*/
/*Custom variables*/
/*Icons Variables*/
/*Responsive screen width*/
header {
  position: fixed;
  top: 27px;
  left: 0;
  width: 100%;
  z-index: 9999999;
}
header .navbar-default {
  background-color: #ffffff;
  border-radius: 0px;
  border: 0px;
  margin-bottom: 0px;
  /*     @media (prefers-color-scheme: dark ) {
    background: #2c2c2c;
  } */
}
@media (min-width: 768px) and (max-width: 993px) {
  header .navbar-default {
    min-height: 40px;
  }
}
header .result-tabs {
  padding-left: 0;
  list-style: none;
  margin-bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #dadde0;
  position: sticky;
  top: 0;
  left: 0;
  background: #ffffff;
  z-index: 99;
  flex-wrap: wrap;
}
header .result-tabs li {
  padding: 15px 0 !important;
  margin: 0px 15px;
  font-weight: bold;
  cursor: pointer;
  border-top: none !important;
}
@media (max-width: 990px) {
  header .result-tabs li {
    margin: 0px 10px;
  }
}
@media (max-width: 560px) {
  header .result-tabs li {
    padding: 8px 0 !important;
  }
}
header .result-tabs li.active {
  color: #fe616e;
  border-bottom: 2px solid #fe616e;
  background-color: transparent !important;
  color: #2D77F4;
  border-bottom: 2px solid #2D77F4;
}
@media (max-width: 992px) {
  header .result-tabs {
    flex-wrap: nowrap;
    overflow: auto;
    justify-content: flex-start;
  }
}
header .navbar-brand {
  padding: 10px 0px;
  padding-top: 15px;
  max-width: 250px;
  text-align: left;
  display: flex;
  justify-content: flex-start;
  height: auto;
  position: relative;
  z-index: 999;
}
@media (max-width: 767px) {
  header .navbar-brand {
    max-width: 150px;
  }
}
header .navbar-brand img {
  max-height: 30px;
  max-width: 100%;
}
@media (max-width: 992px) {
  header .navbar-brand {
    float: left;
  }
}
header .navbar-nav, header .cust-menu {
  padding-left: 0;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
}
@media (max-width: 1550px) {
  header .navbar-nav, header .cust-menu {
    height: 60px;
  }
}
@media (min-width: 768px) and (max-width: 990px) {
  header .navbar-nav, header .cust-menu {
    height: 40px;
  }
}
@media (max-width: 992px) {
  header .navbar-nav, header .cust-menu {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 0px;
    text-align: left;
    height: calc(100% - 80px) !important;
    overflow: auto;
    width: 100%;
  }
}
header .navbar-nav > li, header .cust-menu > li {
  transition: all 0.05s ease;
  list-style: none;
  position: relative;
}
@media (max-width: 992px) {
  header .navbar-nav > li, header .cust-menu > li {
    width: 100%;
    border-bottom: 1px solid #F4F3F8;
  }
}
header .navbar-nav > li.open > a, header .cust-menu > li.open > a {
  color: #2D77F4;
}
header .navbar-nav > li .dropdown-menu, header .cust-menu > li .dropdown-menu {
  margin-top: 20px;
}
@media (max-width: 1200px) {
  header .navbar-nav > li .dropdown-menu, header .cust-menu > li .dropdown-menu {
    margin-top: 0;
  }
}
@media (min-width: 992px) and (max-width: 990px) {
  header .navbar-nav > li .dropdown-menu, header .cust-menu > li .dropdown-menu {
    margin-top: 10px;
  }
}
@media (max-width: 767px) {
  header .navbar-nav > li .dropdown-menu, header .cust-menu > li .dropdown-menu {
    margin-top: 0px;
  }
}
header .navbar-nav > li > a, header .cust-menu > li > a {
  color: #8a97a0;
  font-size: 14px;
  padding: 0px 10px;
  text-transform: capitalize;
  font-weight: 600;
  line-height: 1.3;
  color: #3E404F;
  font-family: "SFProText" !important;
  text-decoration: none;
}
@media (max-width: 1550px) {
  header .navbar-nav > li > a, header .cust-menu > li > a {
    font-size: 14px;
    padding: 0px 8px;
  }
}
@media (min-width: 768px) and (max-width: 990px) {
  header .navbar-nav > li > a, header .cust-menu > li > a {
    font-size: 10px;
    padding: 0px 7px;
  }
}
header .navbar-nav > li > a:hover, header .navbar-nav > li > a:focus, header .navbar-nav > li > a.active, header .cust-menu > li > a:hover, header .cust-menu > li > a:focus, header .cust-menu > li > a.active {
  background-color: transparent;
  color: #2D77F4;
  color: #004393 !important;
}
header .navbar-nav > li > a i, header .cust-menu > li > a i {
  font-size: 20px;
}
@media (max-width: 1550px) {
  header .navbar-nav > li > a i, header .cust-menu > li > a i {
    font-size: 18px;
  }
}
@media (min-width: 768px) and (max-width: 993px) {
  header .navbar-nav > li > a i, header .cust-menu > li > a i {
    font-size: 16px;
  }
}
header .navbar-nav > li > a u, header .cust-menu > li > a u {
  text-decoration: none;
}
@media (max-width: 1367px) {
  header .navbar-nav > li > a, header .cust-menu > li > a {
    font-size: 12px;
    padding: 0 7px;
  }
}
@media (max-width: 992px) {
  header .navbar-nav > li > a, header .cust-menu > li > a {
    padding: 15px;
    text-align: left;
    display: block;
    position: relative;
  }
  header .navbar-nav > li > a .caret, header .cust-menu > li > a .caret {
    border: none;
  }
  header .navbar-nav > li > a .caret:before, header .cust-menu > li > a .caret:before {
    content: "\\f107";
    font-family: "icomoon" !important;
    font-size: 20px;
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translate(0, -50%);
  }
}
header .navbar-nav > li.active a, header .navbar-nav > li.open a, header .cust-menu > li.active a, header .cust-menu > li.open a {
  background-color: transparent;
}
header .navbar-nav > li.active > a, header .navbar-nav > li.open > a, header .cust-menu > li.active > a, header .cust-menu > li.open > a {
  color: #3E404F;
}
header .navbar-nav > li.user-dropdown, header .cust-menu > li.user-dropdown {
  padding: 15px;
}
@media (max-width: 1550px) {
  header .navbar-nav > li.user-dropdown, header .cust-menu > li.user-dropdown {
    padding: 20px 10px;
  }
}
@media (max-width: 1440px) {
  header .navbar-nav > li.user-dropdown, header .cust-menu > li.user-dropdown {
    font-size: 14px;
  }
}
@media (min-width: 768px) and (max-width: 990px) {
  header .navbar-nav > li.user-dropdown, header .cust-menu > li.user-dropdown {
    padding: 6px;
  }
}
@media (max-width: 767px) {
  header .navbar-nav > li.user-dropdown, header .cust-menu > li.user-dropdown {
    padding: 0px;
  }
}
header .navbar-nav > li.user-dropdown .dropdown-menu, header .cust-menu > li.user-dropdown .dropdown-menu {
  margin-top: 0px;
}
header .navbar-nav > li.user-dropdown > a, header .cust-menu > li.user-dropdown > a {
  background-color: transparent;
  color: #ffffff;
  font-weight: bold;
  font-size: 16px;
  border-radius: 5px;
  display: block;
  text-decoration: none;
}
@media (max-width: 1550px) {
  header .navbar-nav > li.user-dropdown > a, header .cust-menu > li.user-dropdown > a {
    padding: 0px;
  }
}
@media (min-width: 768px) and (max-width: 990px) {
  header .navbar-nav > li.user-dropdown > a, header .cust-menu > li.user-dropdown > a {
    padding: 7px;
  }
}
@media (max-width: 767px) {
  header .navbar-nav > li.user-dropdown > a, header .cust-menu > li.user-dropdown > a {
    padding: 15px;
  }
}
header .dropdown-menu {
  padding: 0px;
  border: none;
  box-shadow: 0 0 50px 0 rgba(169, 172, 182, 0.15);
  min-width: 200px;
  right: 0;
  left: auto;
  border-radius: 0;
  position: absolute;
  background: #ffffff;
  list-style: none;
  display: none;
}
header .dropdown-menu li {
  border-top: 1px solid #ebebeb;
}
header .dropdown-menu li a {
  padding: 15px;
  color: #57595a;
  font-weight: normal;
  font-size: 12px;
  text-align: left;
  line-height: 20px;
  font-weight: 500;
  display: block;
}
header .dropdown-menu li a:hover, header .dropdown-menu li a:active {
  background: rgba(249, 235, 33, 0.2);
  color: #004393;
}
header .dropdown-menu li a > u {
  font-weight: bold;
}
header .dropdown-menu li.active a {
  color: #000000;
}
header .dropdown-submenu {
  position: relative;
}
header .dropdown-submenu > .dropdown-menu {
  top: -31px;
  left: 100%;
  margin-top: -6px;
  margin-left: 0px;
  border-radius: 0 6px 6px 6px;
}
@media (max-width: 1550px) {
  header .dropdown-submenu > .dropdown-menu {
    top: -21px;
  }
}
header .dropdown-submenu:hover > .dropdown-menu {
  display: block;
}
header .dropdown-submenu:hover > a:after {
  border-left-color: #8a97a0;
}
header .dropdown-submenu > a:after {
  display: block;
  content: " ";
  float: right;
  width: 0;
  height: 0;
  border-color: transparent;
  border-style: solid;
  border-width: 5px 0 5px 5px;
  border-left-color: #ccc;
  margin-top: 5px;
  margin-right: -10px;
}
header .dropdown-submenu.pull-left {
  float: none;
}
header .dropdown-submenu.pull-left > .dropdown-menu {
  left: -100%;
  margin-left: 10px;
  border-radius: 6px 0 6px 6px;
}

.hideIt {
  display: none;
}

.searchOpen > li {
  visibility: hidden;
}
.searchOpen > li.search-wrapper, .searchOpen > li.user-dropdown {
  visibility: visible;
}
.searchOpen > li.search-wrapper .position-div {
  width: 1000px;
  max-width: 1550px;
  transition: all 0.5s ease-in-out;
}
@media (max-width: 1550px) {
  .searchOpen > li.search-wrapper .position-div {
    width: 900px;
  }
}
@media (max-width: 1200px) {
  .searchOpen > li.search-wrapper .position-div {
    width: 470px;
  }
}
@media (max-width: 1023px) {
  .searchOpen > li.search-wrapper .position-div {
    width: 350px;
  }
}
.searchOpen > li.search-wrapper .search-contain {
  width: 100%;
}
.searchOpen > li.search-wrapper .search-contain input {
  padding: 8px;
  opacity: 1;
}
.searchOpen > li.search-wrapper form {
  width: 100%;
  display: block;
}
.searchOpen > li.search-wrapper form .input-group {
  width: 100%;
}

.search-wrapper {
  padding-left: 20px;
  padding-right: 20px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  transition: all 0.5s ease;
  overflow: hidden;
}
@media (max-width: 1550px) {
  .search-wrapper {
    height: 60px;
    padding-left: 15px;
    padding-right: 15px;
  }
}
@media (min-width: 992px) and (max-width: 990px) {
  .search-wrapper {
    height: 40px;
    padding-left: 10px;
    padding-right: 10px;
  }
}
@media (max-width: 1200px) {
  .search-wrapper {
    width: 40px;
  }
}
@media (max-width: 992px) {
  .search-wrapper {
    border-right: 1px solid #ebebeb;
    border-left: 1px solid #ebebeb;
    width: 50px;
    display: flex;
    align-items: center;
  }
}
.search-wrapper .position-div {
  position: absolute;
  width: 100%;
  right: 0;
  top: 0;
  z-index: 99;
  background: #ffffff;
  padding: 0px 15px;
  height: 100%;
  border-right: 1px solid #ebebeb;
  border-left: 1px solid #ebebeb;
  transition: all 0.5s ease-in-out;
}
.search-wrapper .search-contain {
  display: inline-flex;
  align-items: center;
  height: 100%;
  justify-content: center;
  transition: all 1s ease;
}
.search-wrapper .search-contain i {
  font-size: 20px;
  margin-right: 15px;
}
@media (max-width: 1200px) {
  .search-wrapper .search-contain i {
    margin-right: 0px;
  }
}
@media (min-width: 992px) and (max-width: 993px) {
  .search-wrapper .search-contain i {
    font-size: 16px;
  }
}
.search-wrapper .search-contain input {
  border: none;
  font-size: 14px;
  box-shadow: none;
  background: transparent;
}
@media (max-width: 1200px) {
  .search-wrapper .search-contain input {
    opacity: 0;
    padding: 0px;
  }
}
@media (max-width: 767px) {
  .search-wrapper .search-contain input {
    display: none;
  }
}
.search-wrapper .search-contain input::-webkit-input-placeholder {
  color: #999999;
  text-overflow: ellipsis;
}
.search-wrapper .search-contain input::-moz-placeholder {
  color: #999999;
  text-overflow: ellipsis;
}
.search-wrapper .search-contain input:-ms-input-placeholder {
  color: #999999;
  text-overflow: ellipsis;
}
.search-wrapper .search-contain input:-moz-placeholder {
  color: #999999;
  text-overflow: ellipsis;
}

.notification-wrapper {
  border-left: 1px solid #ebebeb;
  border: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
@media (max-width: 767px) {
  .notification-wrapper {
    position: relative;
  }
}
.notification-wrapper .notifications {
  width: 350px;
  margin-top: 15px !important;
  box-shadow: 0 0 50px 0 rgba(169, 172, 182, 0.5);
}
@media (max-width: 767px) {
  .notification-wrapper .notifications {
    right: -85px;
    left: auto;
    width: 350px;
    margin-top: 10px !important;
  }
}
@media (max-width: 360px) {
  .notification-wrapper .notifications {
    right: -95px;
    width: 300px;
  }
}
.notification-wrapper .notifications:before {
  content: "";
  position: absolute;
  right: 15px;
  top: -10px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 7.5px 11px 7.5px;
  border-color: transparent transparent #ffffff transparent;
}
@media (max-width: 767px) {
  .notification-wrapper .notifications:before {
    right: 100px;
  }
}
@media (max-width: 360px) {
  .notification-wrapper .notifications:before {
    right: 110px;
  }
}
.notification-wrapper .notifications .head {
  font-size: 18px;
  padding: 15px;
  color: #000000;
  font-weight: bold;
  text-align: center;
}
.notification-wrapper .notifications-scrollable {
  max-height: 300px;
  overflow: auto;
}
.notification-wrapper .notifications-scrollable li {
  font-size: 12px;
  padding: 10px 0;
}
.notification-wrapper .notifications-scrollable li div.full-width > div {
  margin-bottom: 5px;
}
.notification-wrapper .notifications-scrollable li span.executed, .notification-wrapper .notifications-scrollable li span.buy {
  color: #009933;
  font-weight: bold;
}
.notification-wrapper .notifications-scrollable li span.error, .notification-wrapper .notifications-scrollable li span.sell {
  color: #ff1a1a;
  font-weight: bold;
}
.notification-wrapper .notifications-scrollable li .error-msg {
  font-size: 10px;
  line-height: 1.3;
  display: block;
  text-align: left;
  color: #ff1a1a;
  margin-top: 5px;
}

.mega-dropdown {
  position: absolute;
  left: 0;
  top: 100%;
  width: 100%;
  opacity: 0;
  z-index: -1;
  transition: all 0.5s ease-in;
  height: calc(100vh - 60px);
  visibility: hidden;
}
@media (max-width: 767px) {
  .mega-dropdown {
    display: none;
  }
}
.mega-dropdown .scrollable-list {
  list-style: none;
  background: #ffffff;
  padding: 0;
  box-shadow: 0px 0px 20px 0px rgba(169, 172, 189, 0.5);
  max-height: 330px;
  overflow: auto;
}
@media (max-width: 767px) {
  .mega-dropdown .scrollable-list {
    height: 100%;
    padding-bottom: 55px;
    overflow: auto;
    max-height: inherit;
  }
}
.mega-dropdown .scrollable-list li {
  padding: 13px 30px;
  border-top: 1px solid #F4F3F8;
  font-size: 14px;
  cursor: pointer;
  position: relative;
  padding-right: 70px;
}
@media (max-width: 1550px) {
  .mega-dropdown .scrollable-list li {
    font-size: 12px;
    padding: 15px 20px;
    padding-right: 70px;
  }
}
@media (max-width: 1024px) {
  .mega-dropdown .scrollable-list li {
    padding: 10px 15px;
    padding-right: 70px;
  }
}
.mega-dropdown .scrollable-list li.title {
  text-transform: uppercase;
  font-weight: bold;
  color: #000000;
  font-size: 18px;
}
@media (max-width: 1550px) {
  .mega-dropdown .scrollable-list li.title {
    font-size: 16px;
  }
}
@media (max-width: 1024px) {
  .mega-dropdown .scrollable-list li.title {
    font-size: 15px;
  }
}
.mega-dropdown .scrollable-list li span {
  color: #8a97a0;
}
@media (max-width: 767px) {
  .mega-dropdown .scrollable-list li span {
    padding: 2px 0;
  }
}
.mega-dropdown .scrollable-list li span:first-child {
  color: #000000;
}
.mega-dropdown .scrollable-list li span.has-add-remove-section {
  position: static;
}
.mega-dropdown .scrollable-list li span.has-add-remove-section > .add-remove-section {
  position: absolute;
  right: 15px;
  top: calc(50% - 16px);
  height: 32px;
}
.mega-dropdown .scrollable-list li span.has-add-remove-section > .add-remove-section > .add-remove-section, .mega-dropdown .scrollable-list li span.has-add-remove-section > .add-remove-section > .btn.add-remove {
  display: inline-block;
  font-size: 1.5rem;
  width: 32px;
  height: 32px;
  border-radius: 4px;
}
.mega-dropdown .scrollable-list li span.has-add-remove-section > .add-remove-section > .add-remove-section > .btn, .mega-dropdown .scrollable-list li span.has-add-remove-section > .add-remove-section > .btn.add-remove > .btn {
  font-size: 1.5rem;
  width: 32px;
  height: 32px;
}
.mega-dropdown .scrollable-list li span.has-add-remove-section > .add-remove-section > .add-remove-section > .btn.add i, .mega-dropdown .scrollable-list li span.has-add-remove-section > .add-remove-section > .btn.add-remove > .btn.add i {
  display: block;
  line-height: 32px;
}
.mega-dropdown .scrollable-list li.active, .mega-dropdown .scrollable-list li:hover {
  background-color: #fbfbfb;
}

.search-wrapper.open {
  overflow: visible;
}
.search-wrapper.open .mega-dropdown {
  opacity: 1;
  z-index: 99999;
  visibility: visible;
}
@media (max-width: 767px) {
  .search-wrapper.open .mega-dropdown {
    display: block;
  }
}

.navbar-header .notification-wrapper {
  width: 50px;
  height: 60px;
  color: #000000;
  font-size: 18px;
  margin-right: 0;
  float: right;
}
.navbar-header .notification-wrapper a {
  color: #000000;
  text-decoration: none;
  position: relative;
}
@media (max-width: 992px) {
  .navbar-header .notification-wrapper {
    display: flex !important;
    align-items: center;
  }
}
.navbar-header .navbar-toggle {
  height: 60px;
  padding-left: 15px;
  padding-right: 8px;
  margin: 0;
  border: 0;
  display: none;
}
@media (max-width: 992px) {
  .navbar-header .navbar-toggle {
    display: block !important;
    float: right;
    background: #ffffff;
  }
}
.navbar-header .search-wrapper {
  float: right;
  transition: none !important;
}
.navbar-header .search-wrapper.open {
  position: fixed;
  left: 0;
  right: 0;
  width: 100%;
  background: #ffffff;
  z-index: 9999;
}
.navbar-header .search-wrapper.open .search-contain {
  display: flex;
}
.navbar-header .search-wrapper.open .search-contain,
.navbar-header .search-wrapper.open form,
.navbar-header .search-wrapper.open .input-group,
.navbar-header .search-wrapper.open .form-control {
  width: 100%;
}
.navbar-header .search-wrapper.open .form-control {
  display: block;
  opacity: 1;
  padding: 0 20px;
}

.add-remove-section {
  position: relative;
  float: right;
}
.add-remove-section .dropdown-menu {
  left: auto;
  right: 0;
  margin: 10px 0 0 0;
  border: 0;
  min-width: 130px;
  margin-top: 0 !important;
}
.add-remove-section .dropdown-menu li {
  padding: 0;
}
.add-remove-section .dropdown-menu li a {
  padding: 4px 8px;
}
.add-remove-section .dropdown-menu li a:hover {
  background: #fe595d;
  color: #ffffff;
  background: #2d77f4;
}
.add-remove-section .btn {
  text-align: center;
  padding: 0 !important;
  border-radius: 0;
  font-size: 26px;
  width: 75px;
  height: 50px;
}
@media (max-width: 1550px) {
  .add-remove-section .btn {
    padding: 0 !important;
    font-size: 22px;
    width: 32px;
    height: 32px;
  }
}
@media (max-width: 1200px) {
  .add-remove-section .btn {
    width: 32px;
    height: 32px;
  }
}
.add-remove-section .btn.add {
  background: none;
  border-color: none;
}
.add-remove-section .btn.add i {
  background-image: linear-gradient(to right, #ffc174 0%, #fe616e 100%);
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  font-size: 14px;
  margin-right: 0;
  vertical-align: top;
  color: #2D77F4;
}
.add-remove-section .btn.btn-gradient {
  padding: 5px 32px;
}
.add-remove-section .btn.btn-gradient > span {
  color: #ffffff !important;
}
@media (max-width: 1550px) {
  .add-remove-section .btn.btn-gradient {
    padding: 5px 20px;
    font-size: 24px;
    font-size: 18px;
  }
}

.navbar-default .navbar-toggle:hover,
.navbar-default .navbar-toggle:focus {
  background: #ffffff;
}

/* ANIMATED X */
.navbar-toggle .icon-bar {
  width: 22px;
  transition: all 0.2s;
  display: block;
  height: 2px;
  background: #888;
}

.navbar-toggle.menu-open .icon-bar:nth-of-type(1) {
  transform: rotate(45deg);
  transform-origin: 10% 10%;
}

.navbar-toggle.menu-open .icon-bar:nth-of-type(2) {
  opacity: 0;
  filter: alpha(opacity=0);
}

.navbar-toggle .icon-bar + .icon-bar {
  margin-top: 4px;
}

.navbar-toggle.menu-open .icon-bar:nth-of-type(3) {
  transform: rotate(-45deg);
  transform-origin: 10% 90%;
}

.navbar-header:before, .navbar-header:after {
  content: " ";
  display: table;
}

/* END ANIMATED X */
@media (max-width: 767px) {
  .navbar-collapse {
    padding: 0px;
  }
}

.hasSingleitem.mega-dropdown .scrollable-list {
  box-shadow: none;
  background: none;
  min-height: 300px;
}
.hasSingleitem.mega-dropdown .scrollable-list .result-tabs {
  border-right: 1px solid #F4F3F8;
  border-left: 1px solid #F4F3F8;
  border-top: 1px solid #F4F3F8;
  background: #ffffff;
}
.hasSingleitem.mega-dropdown .scrollable-list > li {
  box-shadow: 1px 0px 20px rgba(169, 172, 189, 0.5);
  border-right: 1px solid #F4F3F8;
  border-left: 1px solid #F4F3F8;
  background-color: #ffffff;
  position: relative;
}

.beta-tag {
  background: #E92929 !important;
  color: white;
  padding: 1px 3px;
  border-radius: 2px;
  position: relative;
  top: -5px;
  font-size: 63% !important;
  cursor: pointer;
}

.beta-tag-1 {
  background: #ffcd00 !important;
  color: #282828;
  padding: 1px 3px;
  border-radius: 2px;
  position: relative;
  top: -5px;
  font-size: 63% !important;
  cursor: pointer;
}

.beta-tag-2 {
  background: #008481 !important;
  color: white;
  padding: 1px 3px;
  border-radius: 2px;
  position: relative;
  top: -5px;
  font-size: 63% !important;
  cursor: pointer;
}

header .user-dropdown .dropdown-menu {
  border: 0;
  top: 75px;
  right: 10px;
  min-width: 150px;
  border-radius: 0;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1764705882);
  left: auto;
}
header .user-dropdown .dropdown-menu li {
  border: 0;
}
header .user-dropdown .dropdown-menu li a {
  position: relative;
  padding: 9px 13px 9px 20px;
}
header .user-dropdown .dropdown-menu li a:hover {
  background: rgba(249, 235, 33, 0.2);
  color: #004393;
}
header .user-dropdown .dropdown-menu li a:hover::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 4px;
  height: 100%;
  background: #F9EB21;
  border-radius: 0px 6px 6px 0px;
  display: block;
}
header .user-dropdown .dropdown-menu::before {
  content: "";
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 12px 10px 0 10px;
  border-color: #fd9173 transparent transparent transparent;
  border-color: #ffffff transparent transparent transparent;
  position: absolute;
  top: -11px;
  right: 0;
  transform: translate(-50%, 0);
  transform: rotate(180deg);
}

.font-10 {
  font-size: 10px;
}

.font-11 {
  font-size: 11px;
}

.flex-head-new .new-ltp-header ul {
  padding: 6px 0;
  margin: 0;
  display: flex;
  list-style: none;
}

.mb-5 {
  margin-bottom: 4px !important;
}

.on-dot {
  position: relative;
}
.on-dot::before {
  content: "";
  width: 6px;
  height: 6px;
  background: #2D77F4;
  border-radius: 50%;
  display: block;
  position: absolute;
  top: 0px;
  left: 1px;
}
.on-dot .on-dot-sub .dots-ico {
  position: relative;
}
.on-dot .on-dot-sub .dots-ico::before {
  content: "";
  width: 6px;
  height: 6px;
  background: #2D77F4;
  border-radius: 50%;
  display: block;
  position: absolute;
  left: inherit;
  top: -4px;
  right: -3px;
}

header .navbar-nav .left-menu-cust .dropdown-submenu, header .cust-menu .left-menu-cust .dropdown-submenu {
  position: relative;
}
header .navbar-nav .left-menu-cust .dropdown-submenu > .dropdown-menu, header .cust-menu .left-menu-cust .dropdown-submenu > .dropdown-menu {
  left: inherit;
  right: 100%;
  border-radius: 6px 0 6px 6px;
}
header .navbar-nav .left-menu-cust .dropdown-submenu > .dropdown-menu li:first-child, header .cust-menu .left-menu-cust .dropdown-submenu > .dropdown-menu li:first-child {
  border-top: 0;
}

.index {
  cursor: pointer !important;
}

.new-tag-2 {
  background: red !important;
  color: white;
  padding: 1px 3px;
  border-radius: 2px;
  position: relative;
  top: -5px;
  font-size: 63% !important;
  cursor: pointer;
}

.loader {
  border: 4px solid #d5d5d5;
  border-radius: 50%;
  border-top: 4px solid #2D77F4;
  width: 30px;
  height: 30px;
  /* Safari */
  animation: spin 2s linear infinite;
  top: 8% !important;
}

.loader2 {
  border: 4px solid #d5d5d5;
  border-radius: 50%;
  border-top: 4px solid #2D77F4;
  width: 30px;
  height: 30px;
  /* Safari */
  animation: spin 2s linear infinite;
  top: 80% !important;
}

.loader3 {
  border: 4px solid #d5d5d5;
  border-radius: 50%;
  border-top: 4px solid #2D77F4;
  width: 30px;
  height: 30px;
  /* Safari */
  animation: spin 2s linear infinite;
  top: 84% !important;
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
#dashboard-indices {
  position: absolute;
  /* margin-left: auto; */
  left: 70%;
  top: 30px;
  /* display: flex; */
}

.marqueewrap {
  position: fixed;
  height: 23px;
  background: #F4F3F8;
  top: 0;
  width: 100%;
  z-index: 99;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.marqueewrap .prev-arrow {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  padding: 0 1rem;
  background: #F4F3F8;
  display: flex;
  align-items: center;
  height: 23px;
  cursor: pointer;
}
.marqueewrap .nextarrow {
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
  padding: 0 1rem;
  background: #F4F3F8;
  display: flex;
  align-items: center;
  height: 23px;
  cursor: pointer;
}
.marqueewrap marquee ul {
  display: flex;
  align-items: center;
  flex-direction: row;
  margin: 0;
}
.marqueewrap marquee ul li {
  border-left: 1.5px solid #444444;
  list-style: none;
  padding: 0 0.3rem;
  font-size: 13px;
  line-height: 15px;
  color: #444444;
  font-family: "SF Pro Display";
  font-weight: 500;
  letter-spacing: 0.16px;
  text-transform: uppercase;
  opacity: 1;
  cursor: pointer;
}
.marqueewrap marquee ul li .percentage {
  font-family: "SF Pro Display";
  font-weight: 400;
}
.marqueewrap marquee ul li .percentage.green {
  color: #00B16B;
}
.marqueewrap marquee ul li .percentage.red {
  color: #EE404A;
}

.tag-rail-container {
  position: fixed;
  top: 0px;
  background: #ededed;
  z-index: 999999;
  width: 100%;
}

.tag-rail {
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* position: absolute; */
  overflow: hidden;
  padding: 0;
  font-size: 13px;
  /* position: fixed; */
  /* top: 15px; */
  background: #ededed;
  z-index: 9999;
}
.tag-rail .rail-container {
  overflow: hidden;
  height: 36px;
  padding-top: 6px;
  cursor: pointer;
  scroll-behavior: smooth;
}
.tag-rail .carousel-tag {
  border-radius: 999px;
  font-weight: 500;
  -webkit-user-select: none;
          user-select: none;
  transition-duration: 0.25s;
  white-space: nowrap;
  width: 200px;
}
.tag-rail .carousel-tag:first-child {
  margin-left: 16px;
}
.tag-rail .carousel-tag:last-child {
  margin-right: 16px;
}
.tag-rail .carousel-tag:hover {
  background: #f2f2f2;
}
.tag-rail .carousel-tag:active {
  background: #e3ebf7;
}
.tag-rail .carousel-tag-selected {
  background: #3b71ca;
  color: #fff;
  border: 1px solid #3b71ca;
}
.tag-rail .carousel-tag-selected:hover {
  background: #3265b9;
  color: #fff;
}
.tag-rail .carousel-tag-selected:active {
  background: #3b71ca;
  color: #fff;
}
.tag-rail .btn-left-con,
.tag-rail .btn-right-con {
  top: -3px;
  position: absolute;
}
.tag-rail .btn-right-con {
  right: 0;
}
.tag-rail .btn-left,
.tag-rail .btn-right {
  height: 32px;
  width: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  border-radius: 100%;
  cursor: pointer;
  transition-duration: 0.25s;
  box-shadow: 0 0 16px 24px #fff;
  background: #fff;
}
.tag-rail .btn-left {
  margin-left: 2px;
}
.tag-rail .btn-right {
  margin-right: 2px;
}
.tag-rail .btn-left:hover,
.tag-rail .btn-right:hover {
  background: #f2f2f2;
}
.tag-rail .btn-left:active,
.tag-rail .btn-right:active {
  background: #d9d9d9;
}
.tag-rail .d-none {
  display: none;
}

.percentage-section {
  padding-left: 0px;
}

.carousel-percentage {
  padding-left: 0px;
}

.rail {
  display: inline-flex;
}

.cust-navbar {
  display: flex;
  flex-wrap: wrap;
}
.cust-navbar .navbar-header-left {
  float: none;
  width: 20%;
  padding-left: 15px;
  padding-right: 15px;
}
@media (max-width: 992px) {
  .cust-navbar .navbar-header-left {
    width: 100%;
  }
}
.cust-navbar .navbar-header-right {
  float: none;
  width: 80%;
  padding-left: 15px;
  padding-right: 15px;
}

@media (max-width: 992px) {
  .cust-menu-header {
    position: fixed;
    background: #ffffff;
    width: 100%;
    top: 84px;
    height: 100%;
    overflow-x: visible;
    left: 0;
    border-top: 1px solid #e7e7e7;
    display: none;
  }
  .cust-menu-header .notification-wrapper {
    display: none !important;
  }
  .cust-menu-header.collapse-menu {
    display: block;
  }
}

@keyframes tilt-shaking {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(10deg);
  }
  50% {
    transform: rotate(0deg);
  }
  75% {
    transform: rotate(-10deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
.constant-tilt-shake {
  animation: tilt-shaking 0.3s infinite;
}

.n-error-msg {
  color: #ff1a1a;
}

.n-icon {
  font-size: 1.3rem;
}

.df-center-space-bw {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.c-btn-primary {
  background: #004393;
  color: white;
}

.c-color {
  color: #004393 !important;
}

.menu-center-top {
  left: 0 !important;
  top: 100% !important;
}

.finx-color {
  color: #1b1464;
}

.align-baseline {
  align-items: baseline;
}

.c-yellow {
  color: #fcbe0c;
}

.pointer {
  cursor: pointer;
}

.width-35 {
  width: 35% !important;
}

@media (max-width: 992px) {
  .navbar-nav li:hover > .dropdown-menu, .cust-menu li:hover > .dropdown-menu {
    display: block;
    position: relative;
    width: 100%;
    margin: 0;
    top: 0 !important;
    left: 0 !important;
  }
}
.profile-block {
  display: inline-flex;
  padding: 10px;
  align-items: center;
}
.profile-block .icon {
  right: 17px;
  margin-left: auto;
  position: absolute;
  font-size: 21px;
}
.profile-block .initials {
  width: 40px;
  height: 40px;
  margin: 15px auto;
  background-image: linear-gradient(to right, #ffc174 0%, #fe616e 100%);
  color: #004393;
  font-weight: bold;
  text-align: center;
  line-height: 40px;
  border-radius: 100%;
  font-size: 14px;
  border: #004393 solid 1px;
  background: #d4deea;
  margin-right: 15px;
  margin-left: 5px;
}
.profile-block .profile-name {
  font-weight: 600px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 103px;
}
.profile-block .name-section {
  font-size: 12px;
  display: contents;
}
.profile-block .name-section:hover {
  cursor: pointer;
}

.animate-switch {
  top: 68px;
  left: 68px;
  position: absolute !important;
  color: #004393 !important;
  font-weight: 600 !important;
  padding: 0px !important;
  /* padding-bottom: 10px; */
}
.animate-switch:hover {
  background: none !important;
  border: none !important;
  text-decoration: underline;
}
.animate-switch:hover::before {
  content: "";
  background: transparent !important;
}

.animate-switch:after {
  border-left-color: transparent !important;
}

.switch-account {
  padding: 20px !important;
  width: 100%;
  max-height: calc(80vh - 80px) !important;
  overflow: auto;
}
.switch-account h3 {
  font-weight: 700;
}
.switch-account h5 {
  color: #666666;
  font-weight: 400;
}
.switch-account .profiles {
  display: flex;
  align-items: flex-end;
  padding: 35px 100px;
  flex-flow: wrap;
  place-content: space-between;
}
.switch-account .profiles .profile {
  padding: 10px;
  text-align: -webkit-center;
  cursor: pointer;
}
.switch-account .profiles .profile .name {
  font-size: 13px;
  font-weight: 500;
  color: #666666;
}
.switch-account .profiles .profile .initials {
  width: 56px;
  height: 56px;
  margin: 15px auto;
  background-image: linear-gradient(to right, #ffc174 0%, #fe616e 100%);
  font-weight: bold;
  text-align: center;
  line-height: 55px;
  border-radius: 100%;
  font-size: 18px;
  background: rgba(51, 51, 51, 0.1);
}
.switch-account .profiles .selected-profile {
  cursor: default;
}
.switch-account .profiles .selected-profile .initials {
  width: 72px;
  height: 72px;
  margin: 15px auto;
  background-image: linear-gradient(to right, #ffc174 0%, #fe616e 100%);
  color: #004393;
  line-height: 72px;
  font-size: 24px;
  border: #004393 solid 1px;
  background: #d4deea;
}
.switch-account .profiles .selected-profile .name {
  color: #004393;
  font-weight: 600;
}
.switch-account .profiles .selected-profile .selected-userid {
  /* position: absolute; */
  margin-bottom: -18px;
  margin-top: 2px;
  color: #004393;
}

.buy-sell-loader {
  display: flex;
  place-content: center;
}
.buy-sell-loader .spin-loader-buy {
  border-radius: 80%;
  display: block;
  height: 20px;
  width: 20px;
  position: relative;
  animation: spin 0.675s linear 0s infinite normal;
  background: transparent;
}
.buy-sell-loader .spin-loader-buy:before, .buy-sell-loader .spin-loader-buy:after {
  content: "";
  display: block;
  position: absolute;
}
.buy-sell-loader .spin-loader-buy:before {
  border-radius: 0 90px 90px 0;
  height: 20px;
  width: 50%;
  top: 0;
  right: 0;
  z-index: 1;
  background: white;
  background-image: linear-gradient(transparent, white);
}
.buy-sell-loader .spin-loader-buy:after {
  border-radius: 80%;
  height: 14px;
  width: 14px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  background: #004393;
}
.buy-sell-loader .spin-loader-sell {
  border-radius: 80%;
  display: block;
  height: 20px;
  width: 20px;
  position: relative;
  animation: spin 0.675s linear 0s infinite normal;
  background: transparent;
}
.buy-sell-loader .spin-loader-sell:before, .buy-sell-loader .spin-loader-sell:after {
  content: "";
  display: block;
  position: absolute;
}
.buy-sell-loader .spin-loader-sell:before {
  border-radius: 0 90px 90px 0;
  height: 20px;
  width: 50%;
  top: 0;
  right: 0;
  z-index: 1;
  background: white;
  background-image: linear-gradient(transparent, white);
}
.buy-sell-loader .spin-loader-sell:after {
  border-radius: 80%;
  height: 14px;
  width: 14px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  background: #ee404a;
}`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 39283:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/common-module/product-authorization-popup/product-authorization-popup.component.scss?ngResource ***!
  \*****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ 8564);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 98557);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.sleekbox-overlay {
  z-index: 1000;
  font-size: 16px;
  display: none;
  position: fixed;
  left: 0;
  top: 7rem;
  width: 100%;
  height: 100%;
  background: rgba(62, 64, 79, 0.3019607843);
}
.sleekbox-overlay .sleekbox-popup {
  box-sizing: border-box;
  background: #fff;
  max-width: 450px;
  margin: 0 auto;
  border-radius: 8px;
  margin: 7rem auto;
  height: auto;
}
@media (max-width: 767px) {
  .sleekbox-overlay .sleekbox-popup {
    margin: 1rem 1rem;
  }
}
@media (max-width: 1280px) {
  .sleekbox-overlay .sleekbox-popup {
    margin: 4rem auto;
  }
}
.sleekbox-overlay .sleekbox-popup .popup-sub-row {
  padding: 20px;
  text-align: center;
}
@media (max-width: 767px) {
  .sleekbox-overlay .sleekbox-popup .popup-sub-row {
    padding: 20px;
  }
}
.sleekbox-overlay .sleekbox-popup .popup-sub-row .logowrap {
  padding-bottom: 15px;
}
.sleekbox-overlay .sleekbox-popup .popup-sub-row .logowrap img {
  height: 24px;
}
.sleekbox-overlay .sleekbox-popup .popup-sub-row .algobullswrap {
  display: flex;
  justify-content: center;
}
.sleekbox-overlay .sleekbox-popup .popup-sub-row .algobullswrap .text {
  font-size: 20px;
  color: #000;
  padding-right: 10px;
  font-family: "SF Pro Display";
  font-weight: 500;
}
.sleekbox-overlay .sleekbox-popup .popup-sub-row .algobullswrap .img-fluid {
  height: 45px;
  position: relative;
  top: -10px;
}
.sleekbox-overlay .sleekbox-popup .popup-sub-row .subtext {
  font-size: 16px;
  color: #000;
  font-family: "SF Pro Display";
  margin: 0 !important;
  font-weight: bold;
}
.sleekbox-overlay .sleekbox-popup .popup-sub-row ul {
  text-align: left;
  margin-top: 10px;
}
.sleekbox-overlay .sleekbox-popup .popup-sub-row ul li {
  font-size: 13px;
  padding-bottom: 10px;
  line-height: 15px;
  font-family: "SF Pro Display";
  font-weight: bold;
}
.sleekbox-overlay .sleekbox-popup .popup-sub-row .note {
  font-size: 13px;
  line-height: 20px;
  color: blue;
  font-family: "SF Pro Display";
  cursor: pointer;
  text-decoration: underline;
}
.sleekbox-overlay .sleekbox-popup .popup-sub-row .tnc {
  font-size: 12px;
}
.sleekbox-overlay .sleekbox-popup .popup-sub-row .btnwrap {
  text-align: center;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
}
.sleekbox-overlay .sleekbox-popup .popup-sub-row .btnwrap .cancel {
  color: #666;
  background-color: transparent;
  border: none;
  font-size: 16px;
  line-height: 24px;
  margin-top: 1rem;
  font-family: "SF Pro Display";
  width: 50%;
  margin: 0;
  padding: 0.8rem;
  cursor: pointer;
}
.sleekbox-overlay .sleekbox-popup .popup-sub-row .btnwrap .btn-bg {
  background-color: #004393;
  color: #fff;
  font-size: 16px;
  width: 50%;
  border: none;
  margin: 0;
  padding: 0.8rem;
  font-family: "SF Pro Display";
  cursor: pointer;
}
.sleekbox-overlay.sleekbox-popup-active {
  display: block;
}

.modernalgos {
  color: rgba(33, 66, 149, 0.6784313725) !important;
  font-size: 2rem;
}

.loader {
  border: 4px solid #d5d5d5;
  border-radius: 50%;
  border-top: 4px solid #2d77f4;
  width: 30px;
  height: 30px;
  /* Safari */
  animation: spin 2s linear infinite;
  text-align: center;
  position: inherit !important;
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
.z-index-99999 {
  z-index: 99999;
}`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 2684:
/*!*************************************************************************************************!*\
  !*** ./src/app/post-login-module/corporate-actions/corporate-actions.component.scss?ngResource ***!
  \*************************************************************************************************/
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
.part6-left .wrapper {
  padding: 24px;
  background-color: #ffffff;
  border-radius: 8px;
  margin-bottom: 30px;
}
@media (max-width: 767px) {
  .part6-left .wrapper {
    padding: 15px;
    margin-bottom: 15px;
  }
}
.part6-left .wrapper .wrap-head-mn {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.part6-left .wrapper .wrap-head-mn .view {
  display: flex;
  align-items: center;
  text-decoration: none;
}
.part6-left .wrapper .wrap-head-mn .view img {
  width: 15px;
}
.part6-left .wrapper .wrap-head-mn .view .viewall {
  margin-left: 12px;
  color: #004393;
  font-size: 14px;
  line-height: 16px;
  font-weight: 600;
}
.part6-left .wrapper .heading {
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  color: #000000;
  text-transform: capitalize;
  padding-bottom: 14px;
}
.part6-left .wrapper .item {
  padding: 10px;
}
.part6-left .wrapper .cardrow {
  margin-top: 24px;
}
.part6-left .wrapper .cardrow .cardwrap {
  border: 1px solid #F4F3F8;
  border-radius: 8px;
  width: auto;
  margin-right: 0;
}
.part6-left .wrapper .cardrow .cardwrap .card-heading {
  display: flex;
  justify-content: space-between;
  padding: 24px 24px 15px;
}
@media (max-width: 1280px) {
  .part6-left .wrapper .cardrow .cardwrap .card-heading {
    min-height: 9rem;
    height: 100%;
  }
}
@media (max-width: 767px) {
  .part6-left .wrapper .cardrow .cardwrap .card-heading {
    padding: 10px;
  }
}
.part6-left .wrapper .cardrow .cardwrap .card-heading p {
  margin: 0;
}
.part6-left .wrapper .cardrow .cardwrap .card-heading .head .mainhead {
  cursor: pointer;
  color: #000000;
  font-size: 14px;
  line-height: 16px;
  font-weight: 600;
  margin: 0;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
}
.part6-left .wrapper .cardrow .cardwrap .card-heading .head .mainhead .green-badge {
  color: #00B09C;
  font-size: 10px;
  line-height: 16px;
  background-color: rgba(0, 176, 156, 0.1411764706);
  border-radius: 4px;
  padding: 2px 6px;
  display: inline-block;
  margin-left: 5px;
}
@media (max-width: 767px) {
  .part6-left .wrapper .cardrow .cardwrap .card-heading .head .mainhead {
    margin-bottom: 5px;
  }
}
.part6-left .wrapper .cardrow .cardwrap .card-heading .head .date {
  color: #666666;
  font-size: 12px;
  margin: 0;
  line-height: 14px;
}
@media (max-width: 767px) {
  .part6-left .wrapper .cardrow .cardwrap .card-heading .head {
    width: 100%;
    text-align: left;
    margin-bottom: 15px;
  }
}
.part6-left .wrapper .cardrow .cardwrap .card-heading .count {
  text-align: right;
}
.part6-left .wrapper .cardrow .cardwrap .card-heading .count .datecount {
  color: #000000;
  font-size: 14px;
  line-height: 16px;
  font-weight: 600;
  margin-bottom: 10px;
}
@media (max-width: 767px) {
  .part6-left .wrapper .cardrow .cardwrap .card-heading .count .datecount {
    margin-bottom: 5px;
  }
}
.part6-left .wrapper .cardrow .cardwrap .card-heading .count .datepercent {
  font-size: 12px;
  line-height: 14px;
  font-weight: 400;
}
.part6-left .wrapper .cardrow .cardwrap .card-heading .count .datepercent.down {
  color: #EE404A;
}
.part6-left .wrapper .cardrow .cardwrap .card-heading .count .datepercent.up {
  color: #00B16B;
}
@media (max-width: 767px) {
  .part6-left .wrapper .cardrow .cardwrap .card-heading .count {
    width: 100%;
    text-align: left;
  }
}
@media (max-width: 767px) {
  .part6-left .wrapper .cardrow .cardwrap .card-heading {
    flex-wrap: wrap;
  }
}
.part6-left .wrapper .cardrow .cardwrap .card-bottom {
  padding: 10px 24px;
  background-color: #F4F3F8;
  border-radius: 0 0 7px 7px;
  font-size: 12px;
  line-height: 14px;
  color: #333333;
  min-height: 40px;
}
@media (max-width: 1280px) {
  .part6-left .wrapper .cardrow .cardwrap .card-bottom {
    min-height: 4rem;
    height: 100%;
  }
}
@media (max-width: 767px) {
  .part6-left .wrapper .cardrow .cardwrap .card-bottom {
    padding: 10px;
  }
}
.part6-left .wrapper .cardrow .cardwrap:hover {
  border-color: #004393;
}
.part6-left .wrapper .cardrow .cardwrap:hover .cursor-pointer-underscore {
  color: #004393;
  text-decoration: none;
}

.sm-ttl {
  font-size: 20px;
  color: #000000;
  font-weight: 600;
  margin: 0;
  font-family: "SFProText";
  letter-spacing: 0.24px;
}
@media (max-width: 767px) {
  .sm-ttl {
    font-size: 16px;
  }
}

.m-auto {
  margin: auto !important;
}`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 47252:
/*!*********************************************************************************************!*\
  !*** ./src/app/post-login-module/jiffy-dashboard/jiffy-dashboard.component.scss?ngResource ***!
  \*********************************************************************************************/
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
.web-dashboard-main {
  max-width: 100%;
  margin: 0 auto;
  display: block;
  float: none;
}
@media (max-width: 992px) {
  .web-dashboard-main {
    max-width: 650px;
  }
}
.web-dashboard-main .details-header-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.web-dashboard-main .details-header-wrap .mn-ttl {
  font-size: 20px;
  letter-spacing: 0.24px;
  color: #000000;
  opacity: 1;
  font-family: "SFProText";
}
.web-dashboard-main .details-header-wrap .search-baar .search-container {
  position: relative;
  display: inline-block;
  margin: 4px 2px;
  height: 50px;
  width: 50px;
  vertical-align: bottom;
}
.web-dashboard-main .details-header-wrap .search-baar .mglass {
  display: inline-block;
  pointer-events: none;
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
}
.web-dashboard-main .details-header-wrap .search-baar .searchbutton {
  position: absolute;
  font-size: 22px;
  width: 100%;
  margin: 0;
  padding: 0;
}
.web-dashboard-main .details-header-wrap .search-baar .search:focus + .searchbutton {
  transition-duration: 0.4s;
  -moz-transition-duration: 0.4s;
  -webkit-transition-duration: 0.4s;
  -o-transition-duration: 0.4s;
  background-color: #ffffff;
  color: #000000;
}
.web-dashboard-main .details-header-wrap .search-baar .search {
  position: absolute;
  left: 49px;
  /* Button width-1px (Not 50px/100% because that will sometimes show a 1px line between the search box and button) */
  background-color: #ffffff;
  outline: none;
  border: none;
  padding: 0;
  width: 0;
  height: 100%;
  z-index: 10;
  transition-duration: 0.4s;
  -moz-transition-duration: 0.4s;
  -webkit-transition-duration: 0.4s;
  -o-transition-duration: 0.4s;
}
.web-dashboard-main .details-header-wrap .search-baar .search:focus {
  width: 363px;
  /* Bar width+1px */
  padding: 0 16px 0 0;
}
.web-dashboard-main .details-header-wrap .search-baar .expandright {
  left: auto;
  right: 49px;
  /* Button width-1px */
}
.web-dashboard-main .details-header-wrap .search-baar .expandright:focus {
  padding: 0 0 0 16px;
}
.web-dashboard-main .portfolio-bar-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 30px;
  flex-wrap: wrap;
}
.web-dashboard-main .portfolio-bar-top .portfolio-left {
  border-radius: 8px;
  overflow: hidden;
  width: 42%;
  position: relative;
}
@media (max-width: 992px) {
  .web-dashboard-main .portfolio-bar-top .portfolio-left {
    width: 100%;
  }
}
@media (max-width: 767px) {
  .web-dashboard-main .portfolio-bar-top .portfolio-left {
    width: 100%;
  }
}
.web-dashboard-main .portfolio-bar-top .portfolio-left .without-banner {
  padding: 25px;
  background: #0F0B37;
  position: relative;
  min-height: 239px;
  z-index: 9;
}
.web-dashboard-main .portfolio-bar-top .portfolio-left .without-banner .sm-ttl {
  color: #ffffff;
}
.web-dashboard-main .portfolio-bar-top .portfolio-left .without-banner .cart-sm {
  margin-top: 25px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.web-dashboard-main .portfolio-bar-top .portfolio-left .without-banner .cart-sm .pl-total {
  width: 100%;
}
.web-dashboard-main .portfolio-bar-top .portfolio-left .without-banner .cart-sm .pl-total h4 {
  font-size: 16px;
  color: #ffffff;
  opacity: 0.7;
  font-weight: 400;
}
@media (max-width: 1392px) {
  .web-dashboard-main .portfolio-bar-top .portfolio-left .without-banner .cart-sm .pl-total h4 {
    font-size: 14px;
  }
}
@media (max-width: 767px) {
  .web-dashboard-main .portfolio-bar-top .portfolio-left .without-banner .cart-sm .pl-total h4 {
    font-size: 12px;
  }
}
.web-dashboard-main .portfolio-bar-top .portfolio-left .without-banner .cart-sm .pl-total .totl-value {
  font-size: 24px;
  color: #ffffff;
  font-weight: 600;
  margin: 0;
  margin-top: 10px;
}
.web-dashboard-main .portfolio-bar-top .portfolio-left .without-banner .cart-sm .pl-total .totl-value .smt-txt {
  font-size: 18px;
  font-weight: 400;
  font-family: "SF Pro Display";
}
@media (max-width: 1442px) {
  .web-dashboard-main .portfolio-bar-top .portfolio-left .without-banner .cart-sm .pl-total .totl-value .smt-txt {
    font-size: 21px;
  }
}
@media (max-width: 1367px) {
  .web-dashboard-main .portfolio-bar-top .portfolio-left .without-banner .cart-sm .pl-total .totl-value .smt-txt {
    font-size: 12px;
    margin-top: 7px;
  }
}
@media (max-width: 768px) {
  .web-dashboard-main .portfolio-bar-top .portfolio-left .without-banner .cart-sm .pl-total .totl-value .smt-txt {
    display: inline-block;
  }
}
@media (max-width: 1392px) {
  .web-dashboard-main .portfolio-bar-top .portfolio-left .without-banner .cart-sm .pl-total .totl-value {
    font-size: 20px;
  }
}
@media (max-width: 1367px) {
  .web-dashboard-main .portfolio-bar-top .portfolio-left .without-banner .cart-sm .pl-total .totl-value {
    font-size: 16px;
  }
}
@media (max-width: 768px) {
  .web-dashboard-main .portfolio-bar-top .portfolio-left .without-banner .cart-sm .pl-total .totl-value {
    margin-top: 5px;
  }
}
.web-dashboard-main .portfolio-bar-top .portfolio-left .without-banner .cart-sm .pl-total .invst-value {
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  position: relative;
  top: 18px;
}
.web-dashboard-main .portfolio-bar-top .portfolio-left .without-banner .cart-sm .pl-total .invst-value .strng {
  font-weight: 600;
  opacity: 1;
  margin-top: 7px;
  font-family: "SFProText";
  letter-spacing: 0.24px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 130px;
}
@media (max-width: 1392px) {
  .web-dashboard-main .portfolio-bar-top .portfolio-left .without-banner .cart-sm .pl-total .invst-value .strng {
    width: 100px;
  }
}
@media (max-width: 1392px) {
  .web-dashboard-main .portfolio-bar-top .portfolio-left .without-banner .cart-sm .pl-total .invst-value {
    top: 20px;
  }
}
@media (max-width: 1367px) {
  .web-dashboard-main .portfolio-bar-top .portfolio-left .without-banner .cart-sm .pl-total .invst-value {
    top: 30px;
  }
}
@media (max-width: 767px) {
  .web-dashboard-main .portfolio-bar-top .portfolio-left .without-banner .cart-sm .pl-total .invst-value {
    top: 16px;
  }
}
@media (max-width: 767px) {
  .web-dashboard-main .portfolio-bar-top .portfolio-left .without-banner .cart-sm .pl-total {
    width: 100%;
  }
}
.web-dashboard-main .portfolio-bar-top .portfolio-left .without-banner .cart-sm .right-chart-card {
  width: 142px;
  position: absolute;
  margin-top: 0;
  right: 40px;
  bottom: 50px;
}
.web-dashboard-main .portfolio-bar-top .portfolio-left .without-banner .cart-sm .right-chart-card .overvie-chart {
  color: #ffffff;
  position: absolute;
  width: 105px;
  height: 105px;
  border-radius: 50%;
  background: #0F0B37;
  left: 38px;
  top: 38px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}
.web-dashboard-main .portfolio-bar-top .portfolio-left .without-banner .cart-sm .right-chart-card .overvie-chart-value {
  color: #ffffff;
  position: absolute;
  left: 50%;
  top: 50%;
  text-align: center;
  font-size: 14px;
  font-family: "SFProText";
  font-weight: 600;
  letter-spacing: 0.18px;
  width: 105px;
  height: 104px;
  border-radius: 50%;
  background: #0F0B37;
  left: 38px;
  top: 38px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}
.web-dashboard-main .portfolio-bar-top .portfolio-left .without-banner .cart-sm .right-chart-card .overvie-chart-value small {
  width: 100%;
  text-align: center;
  display: block;
  font-family: "SF Pro Display";
  font-weight: 400;
}
.web-dashboard-main .portfolio-bar-top .portfolio-left .without-banner .cart-sm .right-chart-card img {
  max-width: 100%;
}
@media (max-width: 767px) {
  .web-dashboard-main .portfolio-bar-top .portfolio-left .without-banner .cart-sm .right-chart-card {
    right: 35px;
    bottom: 40px;
  }
}
@media (max-width: 767px) {
  .web-dashboard-main .portfolio-bar-top .portfolio-left .without-banner {
    padding: 30px 15px;
    background: url('logo-bg.svg') no-repeat top right #0F0B37;
  }
}
@media (max-width: 767px) {
  .web-dashboard-main .portfolio-bar-top .portfolio-left .without-banner {
    min-height: inherit;
  }
}
.web-dashboard-main .portfolio-bar-top .portfolio-left .with-banner {
  background: url('banner-bg.png') no-repeat;
  background-size: cover;
  padding: 25px;
  min-height: 239px;
}
@media (max-width: 767px) {
  .web-dashboard-main .portfolio-bar-top .portfolio-left .with-banner {
    min-height: inherit;
  }
}
.web-dashboard-main .portfolio-bar-top .portfolio-left .with-banner h2 {
  font-size: 32px;
  font-family: "SFProText";
  color: #ffffff;
  font-weight: 600;
  line-height: 43px;
  margin: 0;
}
@media (max-width: 767px) {
  .web-dashboard-main .portfolio-bar-top .portfolio-left .with-banner h2 {
    font-size: 26px;
    line-height: 34px;
  }
}
.web-dashboard-main .portfolio-bar-top .portfolio-left .with-banner h3 {
  font-size: 24px;
  color: #ffffff;
  opacity: 0.7;
  font-weight: 400;
  margin-top: 15px;
}
@media (max-width: 767px) {
  .web-dashboard-main .portfolio-bar-top .portfolio-left .with-banner h3 {
    font-size: 20px;
    line-height: 34px;
    margin-top: 10px;
  }
}
.web-dashboard-main .portfolio-bar-top .portfolio-right {
  background: #ffffff;
  width: 56%;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  padding: 25px;
  min-height: 239px;
  position: relative;
}
.web-dashboard-main .portfolio-bar-top .portfolio-right .trade-etc-values {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
}
.web-dashboard-main .portfolio-bar-top .portfolio-right .trade-etc-values .values-itm {
  border: 1px solid #ebebeb;
  border-radius: 8px;
  padding: 20px 15px;
  width: 31.33%;
  min-height: 129px;
}
.web-dashboard-main .portfolio-bar-top .portfolio-right .trade-etc-values .values-itm h4 {
  font-size: 16px;
  color: #000000;
  font-weight: 400;
  position: relative;
}
.web-dashboard-main .portfolio-bar-top .portfolio-right .trade-etc-values .values-itm h4.eq-ttl {
  padding-left: 18px;
}
.web-dashboard-main .portfolio-bar-top .portfolio-right .trade-etc-values .values-itm h4.eq-ttl::before {
  content: "";
  width: 10px;
  border-radius: 50%;
  height: 10px;
  display: block;
  background: #5B94F6;
  position: absolute;
  left: 0;
  top: 4px;
}
@media (max-width: 1392px) {
  .web-dashboard-main .portfolio-bar-top .portfolio-right .trade-etc-values .values-itm h4.eq-ttl::before {
    width: 7px;
    height: 7px;
  }
}
@media (max-width: 767px) {
  .web-dashboard-main .portfolio-bar-top .portfolio-right .trade-etc-values .values-itm h4.eq-ttl::before {
    display: none;
  }
}
@media (max-width: 1392px) {
  .web-dashboard-main .portfolio-bar-top .portfolio-right .trade-etc-values .values-itm h4.eq-ttl {
    padding-left: 12px;
  }
}
@media (max-width: 767px) {
  .web-dashboard-main .portfolio-bar-top .portfolio-right .trade-etc-values .values-itm h4.eq-ttl {
    padding-left: 0;
  }
}
.web-dashboard-main .portfolio-bar-top .portfolio-right .trade-etc-values .values-itm h4.mf-ttl {
  padding-left: 18px;
}
.web-dashboard-main .portfolio-bar-top .portfolio-right .trade-etc-values .values-itm h4.mf-ttl::before {
  content: "";
  width: 10px;
  border-radius: 50%;
  height: 10px;
  display: block;
  background: #F8CC61;
  position: absolute;
  left: 0;
  top: 4px;
}
@media (max-width: 1392px) {
  .web-dashboard-main .portfolio-bar-top .portfolio-right .trade-etc-values .values-itm h4.mf-ttl::before {
    width: 7px;
    height: 7px;
  }
}
@media (max-width: 767px) {
  .web-dashboard-main .portfolio-bar-top .portfolio-right .trade-etc-values .values-itm h4.mf-ttl::before {
    display: none;
  }
}
@media (max-width: 1392px) {
  .web-dashboard-main .portfolio-bar-top .portfolio-right .trade-etc-values .values-itm h4.mf-ttl {
    padding-left: 12px;
  }
}
@media (max-width: 767px) {
  .web-dashboard-main .portfolio-bar-top .portfolio-right .trade-etc-values .values-itm h4.mf-ttl {
    padding-left: 0;
  }
}
@media (max-width: 1392px) {
  .web-dashboard-main .portfolio-bar-top .portfolio-right .trade-etc-values .values-itm h4 {
    font-size: 13px;
    white-space: nowrap;
  }
}
@media (max-width: 767px) {
  .web-dashboard-main .portfolio-bar-top .portfolio-right .trade-etc-values .values-itm h4 {
    font-size: 12px;
    white-space: inherit;
  }
}
.web-dashboard-main .portfolio-bar-top .portfolio-right .trade-etc-values .values-itm h3 {
  font-size: 18px;
  color: #333333;
  font-weight: 600;
  margin: 0;
  margin-top: 25px;
  font-family: "SFProText";
  letter-spacing: 0.24px;
  white-space: pre-wrap;
}
.web-dashboard-main .portfolio-bar-top .portfolio-right .trade-etc-values .values-itm h3 small {
  display: block;
  font-size: 13px;
  line-height: 17px;
  font-weight: 400;
  margin-top: 8px;
  font-family: "SF Pro Display";
  white-space: pre-wrap;
}
@media (max-width: 767px) {
  .web-dashboard-main .portfolio-bar-top .portfolio-right .trade-etc-values .values-itm h3 small {
    font-size: 11px;
  }
  .web-dashboard-main .portfolio-bar-top .portfolio-right .trade-etc-values .values-itm h3 small .hd-mb {
    display: none;
  }
}
@media (max-width: 1392px) {
  .web-dashboard-main .portfolio-bar-top .portfolio-right .trade-etc-values .values-itm h3 {
    font-size: 15px;
  }
  .web-dashboard-main .portfolio-bar-top .portfolio-right .trade-etc-values .values-itm h3 small {
    font-size: 11px;
    line-height: 15px;
  }
}
@media (max-width: 767px) {
  .web-dashboard-main .portfolio-bar-top .portfolio-right .trade-etc-values .values-itm h3 {
    font-size: 12px;
    margin-top: 15px;
  }
}
.web-dashboard-main .portfolio-bar-top .portfolio-right .trade-etc-values .values-itm.add-value-itm {
  padding: 0;
}
.web-dashboard-main .portfolio-bar-top .portfolio-right .trade-etc-values .values-itm.add-value-itm .add-itm-sub {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  text-decoration: none;
  padding: 15px 0;
}
.web-dashboard-main .portfolio-bar-top .portfolio-right .trade-etc-values .values-itm.add-value-itm .add-itm-sub h4 {
  width: 100%;
  text-align: center;
  font-size: 16px;
  color: #004393;
  margin-top: 5px;
}
@media (max-width: 1392px) {
  .web-dashboard-main .portfolio-bar-top .portfolio-right .trade-etc-values .values-itm.add-value-itm .add-itm-sub h4 {
    font-size: 14px;
  }
}
@media (max-width: 568px) {
  .web-dashboard-main .portfolio-bar-top .portfolio-right .trade-etc-values .values-itm.add-value-itm .add-itm-sub h4 {
    font-size: 11px;
  }
}
@media (max-width: 568px) {
  .web-dashboard-main .portfolio-bar-top .portfolio-right .trade-etc-values .values-itm.add-value-itm .add-itm-sub svg {
    width: 30px;
  }
}
.web-dashboard-main .portfolio-bar-top .portfolio-right .trade-etc-values .values-itm.eq-blue {
  background: rgba(45, 119, 244, 0.0784313725);
}
.web-dashboard-main .portfolio-bar-top .portfolio-right .trade-etc-values .values-itm.mf-yellow {
  background: rgba(246, 185, 37, 0.0784313725);
}
.web-dashboard-main .portfolio-bar-top .portfolio-right .trade-etc-values .values-itm .add-amnt {
  color: #004393;
}
@media (max-width: 1400px) {
  .web-dashboard-main .portfolio-bar-top .portfolio-right .trade-etc-values .values-itm {
    padding: 15px;
    min-height: 115px;
  }
}
@media (max-width: 767px) {
  .web-dashboard-main .portfolio-bar-top .portfolio-right .trade-etc-values .values-itm {
    padding: 10px 7px;
    min-height: 80px;
    width: 32.22%;
  }
}
@media (max-width: 1392px) {
  .web-dashboard-main .portfolio-bar-top .portfolio-right {
    padding: 15px;
  }
}
@media (max-width: 992px) {
  .web-dashboard-main .portfolio-bar-top .portfolio-right {
    width: 100%;
    min-height: inherit;
    margin-top: 15px;
  }
}
@media (max-width: 767px) {
  .web-dashboard-main .portfolio-bar-top .portfolio-right {
    width: 100%;
    padding: 10px;
    min-height: inherit;
    margin-top: 15px;
  }
}
@media (max-width: 767px) {
  .web-dashboard-main .portfolio-bar-top {
    margin-bottom: 15px;
  }
}
.web-dashboard-main .sm-ttl {
  font-size: 20px;
  color: #000000;
  font-weight: 600;
  margin: 0;
  font-family: "SFProText";
  letter-spacing: 0.24px;
}
@media (max-width: 1367px) {
  .web-dashboard-main .sm-ttl {
    font-size: 18px;
  }
}
@media (max-width: 767px) {
  .web-dashboard-main .sm-ttl {
    font-size: 16px;
  }
}

.dashboard-part2 {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
}
.dashboard-part2 .part2-left {
  width: 65.5%;
}
@media screen and (min-width: 1537px) and (max-width: 3000px) {
  .dashboard-part2 .part2-left {
    width: calc(100% - 485px);
  }
}
@media (max-width: 992px) {
  .dashboard-part2 .part2-left {
    width: 100%;
  }
}
@media (max-width: 767px) {
  .dashboard-part2 .part2-left {
    width: 100%;
    margin-top: 0;
  }
}
.dashboard-part2 .part2-left .fund-banner .sub-part-banner {
  background: linear-gradient(90deg, rgb(255, 255, 255) 60%, rgb(255, 243, 214) 100%);
  padding: 0 24px;
  margin-bottom: 30px;
  border-radius: 8px;
  border: 2px solid #ffffff;
}
.dashboard-part2 .part2-left .fund-banner .sub-part-banner .banner-option {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  min-height: 151px;
}
.dashboard-part2 .part2-left .fund-banner .sub-part-banner .banner-option .banner-caption {
  width: calc(100% - 120px);
}
.dashboard-part2 .part2-left .fund-banner .sub-part-banner .banner-option .banner-caption .caption-txt {
  font-size: 16px;
  color: #0F0B37;
  margin: 0;
}
.dashboard-part2 .part2-left .fund-banner .sub-part-banner .banner-option .banner-caption .caption-txt span {
  font-weight: bold;
}
.dashboard-part2 .part2-left .fund-banner .sub-part-banner .banner-option .banner-caption .invest-btn {
  padding-top: 15px;
}
.dashboard-part2 .part2-left .fund-banner .sub-part-banner .banner-option .banner-caption .invest-btn .btn-buy {
  float: left;
  font-size: 14px;
  font-family: unset !important;
  padding: 8px 20px;
  margin-right: 0;
}
@media (max-width: 767px) {
  .dashboard-part2 .part2-left .fund-banner .sub-part-banner .banner-option .banner-caption .invest-btn .btn-buy {
    float: none;
    display: inline-block;
  }
}
@media (max-width: 767px) {
  .dashboard-part2 .part2-left .fund-banner .sub-part-banner .banner-option .banner-caption {
    width: 100%;
    text-align: center;
    margin-top: 20px;
  }
}
.dashboard-part2 .part2-left .fund-banner .sub-part-banner .banner-option .banner-image {
  width: 115px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
}
.dashboard-part2 .part2-left .fund-banner .sub-part-banner .banner-option .banner-image img {
  max-width: 100%;
}
.dashboard-part2 .part2-left .fund-banner .sub-part-banner .banner-option .banner-image .img-ico {
  position: relative;
  width: 110px;
  margin: 0 auto;
}
.dashboard-part2 .part2-left .fund-banner .sub-part-banner .banner-option .banner-image .img-ico .tax-icon {
  content: "";
  background: url('tax.svg') no-repeat;
  background-size: contain;
  width: 50px;
  height: 23px;
  display: block;
  position: absolute;
  top: inherit;
  bottom: 20px;
  left: 0;
  right: 0;
  margin: 0 auto;
}
@media (max-width: 767px) {
  .dashboard-part2 .part2-left .fund-banner .sub-part-banner .banner-option .banner-image .img-ico .tax-icon {
    width: 40px;
    height: 20px;
    bottom: 18px;
  }
}
@media (max-width: 767px) {
  .dashboard-part2 .part2-left .fund-banner .sub-part-banner .banner-option .banner-image {
    width: 100%;
    text-align: center;
  }
}
@media (max-width: 767px) {
  .dashboard-part2 .part2-left .fund-banner .sub-part-banner .banner-option .banner-image .img-ico-sm {
    width: 100px;
  }
}
@media (max-width: 767px) {
  .dashboard-part2 .part2-left .fund-banner .sub-part-banner .banner-option {
    flex-direction: column-reverse;
    justify-content: center;
  }
}
.dashboard-part2 .part2-left .fund-banner .sub-part-banner.ban-bg2 {
  background: linear-gradient(90deg, rgb(255, 255, 255) 60%, rgb(213, 232, 255) 100%);
}
@media (max-width: 767px) {
  .dashboard-part2 .part2-left .fund-banner .sub-part-banner.ban-bg2 {
    background: linear-gradient(0deg, rgb(255, 255, 255) 60%, rgb(213, 232, 255) 100%);
  }
}
@media (max-width: 767px) {
  .dashboard-part2 .part2-left .fund-banner .sub-part-banner {
    padding: 14px 20px 25px 20px;
    background: linear-gradient(0deg, rgb(255, 255, 255) 60%, rgb(255, 243, 214) 100%);
  }
}
.dashboard-part2 .part2-left .smart-invest-sec {
  background: #ffffff;
  padding: 24px;
  border-radius: 8px;
  margin-bottom: 30px;
}
@media (max-width: 992px) {
  .dashboard-part2 .part2-left .smart-invest-sec {
    margin-bottom: 15px;
  }
}
@media (max-width: 767px) {
  .dashboard-part2 .part2-left .smart-invest-sec {
    padding: 15px;
  }
}
.dashboard-part2 .part2-left .smart-invest-sec .invest-sec-list {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.dashboard-part2 .part2-left .smart-invest-sec .invest-sec-list .sec-list-itm {
  margin-top: 40px;
  width: 20%;
  text-align: center;
}
@media (max-width: 767px) {
  .dashboard-part2 .part2-left .smart-invest-sec .invest-sec-list .sec-list-itm {
    width: 33%;
  }
}
.dashboard-part2 .part2-left .smart-invest-sec .invest-sec-list .sec-list-itm .list-itm-sub {
  display: inline-block;
  text-align: center;
  text-decoration: none;
  border: 0;
}
.dashboard-part2 .part2-left .smart-invest-sec .invest-sec-list .sec-list-itm .list-itm-sub .list-itm-img {
  width: 64px;
  height: 64px;
  background: url('bg-sm.svg') no-repeat top right;
  background-size: cover;
  border-radius: 16px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-bottom: 16px;
}
.dashboard-part2 .part2-left .smart-invest-sec .invest-sec-list .sec-list-itm .list-itm-sub .list-itm-img img {
  width: 37px;
}
.dashboard-part2 .part2-left .smart-invest-sec .invest-sec-list .sec-list-itm .list-itm-sub .list-itm-img .lbl-ribbon {
  font-size: 12px;
  color: #ffffff;
  letter-spacing: 0.14px;
  position: absolute;
  right: -12px;
  top: -10px;
  background: #00B16B;
  padding: 1px 6px;
  border-radius: 12px;
  display: inline-block;
}
.dashboard-part2 .part2-left .smart-invest-sec .invest-sec-list .sec-list-itm .list-itm-sub .list-itm-img .lbl-ribbon.new-ribbon {
  background: #EE404A;
  right: -3px;
}
.dashboard-part2 .part2-left .smart-invest-sec .invest-sec-list .sec-list-itm .list-itm-sub .list-itm-img .lbl-ribbon.com-soon-ribbon {
  background: #444444;
  right: -55px;
}
@media (max-width: 767px) {
  .dashboard-part2 .part2-left .smart-invest-sec .invest-sec-list .sec-list-itm .list-itm-sub .list-itm-img .lbl-ribbon.com-soon-ribbon {
    right: -8px;
  }
}
@media (max-width: 767px) {
  .dashboard-part2 .part2-left .smart-invest-sec .invest-sec-list .sec-list-itm .list-itm-sub .list-itm-img .lbl-ribbon {
    font-size: 9px;
    right: 12px;
  }
}
@media (max-width: 767px) {
  .dashboard-part2 .part2-left .smart-invest-sec .invest-sec-list .sec-list-itm .list-itm-sub .list-itm-img {
    width: 60px;
    height: 60px;
  }
  .dashboard-part2 .part2-left .smart-invest-sec .invest-sec-list .sec-list-itm .list-itm-sub .list-itm-img .ico-smn {
    width: 30px;
  }
}
.dashboard-part2 .part2-left .smart-invest-sec .invest-sec-list .sec-list-itm .list-itm-sub h4 {
  font-size: 16px;
  color: #1A1A1A;
  text-decoration: none;
  letter-spacing: 0.19px;
}
@media (max-width: 1392px) {
  .dashboard-part2 .part2-left .smart-invest-sec .invest-sec-list .sec-list-itm .list-itm-sub h4 {
    font-size: 13px;
  }
}
@media (max-width: 767px) {
  .dashboard-part2 .part2-left .smart-invest-sec .invest-sec-list .sec-list-itm .list-itm-sub h4 {
    font-size: 12px;
  }
}
.dashboard-part2 .part2-left .smart-invest-sec .invest-sec-list .sec-list-itm .list-itm-sub.itm-sub-inactive h4 {
  opacity: 0.3;
}
.dashboard-part2 .part2-right {
  width: 32%;
  overflow: hidden;
}
@media screen and (min-width: 1537px) and (max-width: 3000px) {
  .dashboard-part2 .part2-right {
    width: 440px;
  }
}
@media (max-width: 992px) {
  .dashboard-part2 .part2-right {
    width: 100%;
  }
}
.dashboard-part2 .part2-right .part2-sec1 {
  margin-bottom: 30px;
  padding: 16px 16px;
  background: #ffffff;
  border-radius: 8px;
  display: flex;
  height: auto;
  position: relative;
  align-items: center;
}
.dashboard-part2 .part2-right .part2-sec1 .maret-info-slider .info-slider-itm {
  background: #ffffff;
  margin-right: 8px;
}
.dashboard-part2 .part2-right .part2-sec1 .maret-info-slider .info-slider-itm .slider-itm-sub {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
}
.dashboard-part2 .part2-right .part2-sec1 .maret-info-slider .info-slider-itm .slider-itm-sub .slider-itm-img {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #EAF2FE;
}
.dashboard-part2 .part2-right .part2-sec1 .maret-info-slider .info-slider-itm .slider-itm-sub .slider-itm-img img {
  max-width: 100%;
  width: 24px;
}
.dashboard-part2 .part2-right .part2-sec1 .maret-info-slider .info-slider-itm .slider-itm-sub .itm-desc {
  width: calc(100% - 50px);
  font-size: 13px;
  line-height: 18px;
  opacity: 1;
  margin: 0;
  letter-spacing: 0;
  color: #000000;
  display: flex;
  align-items: flex-start;
  font-family: "SFProText-Regular";
}
.dashboard-part2 .part2-right .part2-sec1 .maret-info-slider .info-slider-itm .slider-itm-sub .itm-desc p {
  margin: 0;
}
.dashboard-part2 .part2-right .part2-sec1 .next-prev-maret {
  display: flex;
  align-items: center;
}
.dashboard-part2 .part2-right .part2-sec1 .next-prev-maret .prev {
  display: block;
  margin-right: 5px;
  cursor: pointer;
}
.dashboard-part2 .part2-right .part2-sec1 .next-prev-maret .prev:disabled {
  cursor: not-allowed !important;
}
.dashboard-part2 .part2-right .part2-sec1 .next-prev-maret .next {
  display: block;
  cursor: pointer;
}
.dashboard-part2 .part2-right .part2-sec1 .next-prev-maret .next:disabled {
  cursor: not-allowed !important;
}
.dashboard-part2 .part2-right .part2-sec1 .next-prev-maret .ico-smn {
  opacity: 0.5;
  width: 7px;
}
@media (max-width: 1367px) {
  .dashboard-part2 .part2-right .part2-sec1 {
    padding: 12px 10px;
  }
}
@media (max-width: 767px) {
  .dashboard-part2 .part2-right .part2-sec1 {
    margin-bottom: 15px;
  }
}
.dashboard-part2 .part2-right .sec2-slider {
  position: relative;
}
.dashboard-part2 .part2-right .sec2-slider .sec2-slider-itm {
  margin-right: 0;
}
.dashboard-part2 .part2-right .sec2-slider .sec2-slider-itm .slider-itm-sub .lftr {
  width: 60%;
}
.dashboard-part2 .part2-right .sec2-slider .sec2-slider-itm .slider-itm-sub .lftr h4 {
  font-size: 16px;
  color: #000000;
  font-family: "SFProText-Bold";
  letter-spacing: 0.24px;
  line-height: 21px;
}
.dashboard-part2 .part2-right .sec2-slider .sec2-slider-itm .slider-itm-sub .lftr h4 span {
  color: #00B16B;
}
@media (max-width: 767px) {
  .dashboard-part2 .part2-right .sec2-slider .sec2-slider-itm .slider-itm-sub .lftr h4 {
    font-size: 13px;
    line-height: 18px;
  }
}
.dashboard-part2 .part2-right .sec2-slider .sec2-slider-itm .slider-itm-sub .lftr .btn-chk {
  display: inline-block;
  font-size: 14px;
  border: 1px solid;
  color: #000000;
  background: transparent;
  font-weight: 500;
  outline: none;
  box-shadow: inherit;
  padding: 5px 10px;
  border-radius: 4px;
  text-decoration: none;
  margin-top: 15px;
}
@media (max-width: 767px) {
  .dashboard-part2 .part2-right .sec2-slider .sec2-slider-itm .slider-itm-sub .lftr .btn-chk {
    font-size: 12px;
    margin-top: 10px;
  }
}
.dashboard-part2 .part2-right .sec2-slider .sec2-slider-itm .slider-itm-sub .rhgt {
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
}
.dashboard-part2 .part2-right .sec2-slider .sec2-slider-itm .slider-itm-sub .rhgt img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
}
@media (max-width: 1367px) {
  .dashboard-part2 .part2-right .sec2-slider .sec2-slider-itm .slider-itm-sub .rhgt img {
    height: auto;
  }
}
@media (max-width: 767px) {
  .dashboard-part2 .part2-right .sec2-slider .sec2-slider-itm .slider-itm-sub {
    width: 230px;
  }
}
@media (max-width: 568px) {
  .dashboard-part2 .part2-right .sec2-slider .sec2-slider-itm .slider-itm-sub {
    width: 100%;
  }
}
.dashboard-part2 .part2-right .sec2-slider .sec2-slider-itm.slider-itm-pink {
  background: #F3D5DF;
}

.news-section {
  padding: 20px;
  padding-right: 10px;
  background: #ffffff;
  border-radius: 8px;
  margin: 30px 0;
}
@media (max-width: 767px) {
  .news-section {
    margin: 15px 0;
    padding: 15px;
    display: block;
  }
}
.news-section .news-list {
  padding: 0;
  margin: 0;
  padding-right: 10px;
  margin-top: 30px;
  height: 481px;
  overflow: hidden;
}
.news-section .news-list .news-list-itm {
  padding: 20px 0;
  border-top: 1px solid #C7DCFF;
}
.news-section .news-list .news-list-itm .itm-cont-de {
  font-size: 14px;
  line-height: 19px;
  color: #000000;
  opacity: 1;
  margin: 0;
  margin-bottom: 10px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  max-height: 35px;
  text-decoration: none;
  font-family: "SF Pro Display";
  font-weight: 500;
}
.news-section .news-list .news-list-itm .itm-cont-de:hover {
  color: #004393;
}
@media (max-width: 1392px) {
  .news-section .news-list .news-list-itm .itm-cont-de {
    font-size: 12px;
  }
}
.news-section .news-list .news-list-itm .date-name {
  color: #666666;
  font-size: 12px;
  line-height: 14px;
  margin: 0;
  display: flex;
  align-items: center;
}
.news-section .news-list .news-list-itm .date-name span {
  position: relative;
  padding-left: 10px;
  margin-left: 5px;
  display: block;
}
.news-section .news-list .news-list-itm .date-name span::before {
  content: "";
  width: 5px;
  height: 5px;
  display: block;
  position: absolute;
  left: 0;
  top: 4px;
  border-radius: 50%;
  background: #000000;
}
.news-section .news-list .news-list-itm .date-name span:first-child {
  padding-left: 0;
  margin-left: 0;
}
.news-section .news-list .news-list-itm .date-name span:first-child::before {
  display: none;
}
@media (max-width: 1392px) {
  .news-section .news-list .news-list-itm .date-name {
    font-size: 9px;
  }
}
.news-section .news-list .news-list-itm:first-child {
  border-top: 0;
  padding-top: 0;
}
.news-section .news-list:hover {
  overflow: auto;
}

.webinar-section {
  padding: 24px;
  background: #ffffff;
  border-radius: 8px;
  margin-bottom: 30px;
}
.webinar-section .webinar-img {
  margin-top: 20px;
}
.webinar-section .webinar-img img {
  width: 100%;
}
.webinar-section .webinar-img h5 {
  color: #333333;
  font-size: 14px;
  margin: 0;
  line-height: 18px;
}
@media (max-width: 1367px) {
  .webinar-section .webinar-img h5 {
    font-size: 12px;
  }
}
@media (max-width: 1367px) {
  .webinar-section {
    padding: 20px;
  }
}
@media (max-width: 767px) {
  .webinar-section {
    padding: 15px;
    margin-bottom: 15px;
  }
}

.dashboard-part3 .top-picks {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #F2FBF7;
  border: 1px solid #A9E5CD;
  border-radius: 8px;
  padding: 41px;
  margin-bottom: 30px;
}
@media (max-width: 767px) {
  .dashboard-part3 .top-picks {
    flex-wrap: wrap;
    padding: 15px;
    margin-bottom: 15px;
  }
}
.dashboard-part3 .top-picks .circlewrap {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.dashboard-part3 .top-picks .circlewrap .progressdiv {
  position: relative;
}
.dashboard-part3 .top-picks .circlewrap .progressdiv::after {
  position: absolute;
  top: 13px;
  left: 12px;
  font-size: 17px;
  transform: inherit;
  content: attr(data-percent) "";
  font-weight: bold;
  letter-spacing: 0;
  color: #00B16B;
}
.dashboard-part3 .top-picks .circlewrap .progressdiv::before {
  content: "%";
  top: 17px;
  left: 35px;
  z-index: 99;
  position: absolute;
  display: block;
  font-size: 9px;
  color: #00B16B;
}
.dashboard-part3 .top-picks .circlewrap .progressdiv .progress-n {
  display: block;
  margin: 0 auto;
  overflow: hidden;
  transform: rotate(-90deg) rotateX(180deg);
}
.dashboard-part3 .top-picks .circlewrap .successtext {
  padding-top: 15px;
  color: #333333;
  font-size: 14px;
  line-height: 16px;
  font-weight: 600;
  font-family: "SFProText" !important;
  letter-spacing: 0.17px;
}
@media (max-width: 1367px) {
  .dashboard-part3 .top-picks .circlewrap .successtext {
    font-size: 12px;
    white-space: nowrap;
  }
}
.dashboard-part3 .top-picks .text .heading {
  font-size: 24px;
  font-weight: 600;
  line-height: 29px;
  letter-spacing: 0.29px;
  color: #000000;
  opacity: 1;
  text-transform: capitalize;
  font-family: "SFProText-Bold";
}
@media (max-width: 1392px) {
  .dashboard-part3 .top-picks .text .heading {
    font-size: 20px;
  }
}
@media (max-width: 767px) {
  .dashboard-part3 .top-picks .text .heading {
    font-size: 20px;
  }
}
.dashboard-part3 .top-picks .text .subtext {
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0.17px;
  opacity: 1;
  color: #333333;
  font-family: "SF Pro Display" !important;
}
@media (max-width: 1392px) {
  .dashboard-part3 .top-picks .text .subtext {
    font-size: 12px;
    line-height: 17px;
  }
}
@media (max-width: 767px) {
  .dashboard-part3 .top-picks .text {
    width: calc(100% - 110px);
  }
}
.dashboard-part3 .top-picks .btn-buy {
  font-size: 14px;
  border-radius: 8px;
  padding: 8px 15px;
  margin-right: 0;
  float: none;
}
@media (max-width: 1367px) {
  .dashboard-part3 .top-picks .btn-buy {
    font-size: 12px;
  }
}
@media (max-width: 767px) {
  .dashboard-part3 .top-picks .btn-buy {
    margin: 0 auto;
    margin-top: 10px;
    width: 100%;
  }
}
@media (max-width: 1392px) {
  .dashboard-part3 .top-picks {
    padding: 30px;
  }
}
@media (max-width: 1367px) {
  .dashboard-part3 .top-picks {
    padding: 20px;
  }
}
.dashboard-part3 .part7-left {
  overflow: hidden;
}
.dashboard-part3 .part7-left .wrapper {
  padding: 24px;
  background-color: #ffffff;
  border-radius: 8px;
  margin-bottom: 30px;
}
@media (max-width: 767px) {
  .dashboard-part3 .part7-left .wrapper {
    padding: 15px;
    padding-bottom: 25px;
    margin-bottom: 15px;
  }
}
.dashboard-part3 .part7-left .wrapper .headwrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.dashboard-part3 .part7-left .wrapper .headwrap .heading {
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  color: #000000;
  text-transform: capitalize;
  padding-bottom: 14px;
}
@media (max-width: 1390px) {
  .dashboard-part3 .part7-left .wrapper .headwrap .heading {
    font-size: 16px;
  }
}
.dashboard-part3 .part7-left .wrapper .headwrap .view {
  display: flex;
  align-items: center;
  text-decoration: none;
}
.dashboard-part3 .part7-left .wrapper .headwrap .view img {
  width: 15px;
}
.dashboard-part3 .part7-left .wrapper .headwrap .view .viewall {
  margin-left: 12px;
  color: #004393;
  font-size: 14px;
  line-height: 16px;
  font-weight: 600;
}
.dashboard-part3 .part7-left .wrapper .partner-product__list {
  display: flex;
  margin-top: 24px;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: -6%;
  margin-bottom: -3%;
  justify-content: flex-start;
}
.dashboard-part3 .part7-left .wrapper .partner-product__list .partner-product {
  border-radius: 8px;
  width: 27.3%;
  cursor: pointer;
  padding: 1.5rem;
  margin-left: 6%;
  margin-bottom: 3%;
}
.dashboard-part3 .part7-left .wrapper .partner-product__list .partner-product__img {
  display: block;
  margin: auto;
}
.dashboard-part3 .part7-left .wrapper .partner-product__list .partner-product__name {
  display: block;
  text-align: center;
  color: #1A1A1A;
  font-size: 16px;
  opacity: 1;
}
.dashboard-part3 .part7-left .wrapper .partner-product__list .partner-product:hover {
  background-color: #EFEFF3;
}
.dashboard-part3 .part7-left .wrapper .partner-product__list .partner-product:hover .partner-product__name {
  color: #004393;
}
@media (max-width: 1280px) {
  .dashboard-part3 .part7-left .wrapper .partner-product__list .partner-product {
    width: 27%;
  }
}
@media (max-width: 1279px) {
  .dashboard-part3 .part7-left .wrapper .partner-product__list .partner-product {
    width: 27%;
  }
  .dashboard-part3 .part7-left .wrapper .partner-product__list .partner-product__name {
    font-size: 14px;
  }
}
@media (max-width: 416px) and (min-width: 280px) {
  .dashboard-part3 .part7-left .wrapper .partner-product__list .partner-product {
    width: 44%;
    padding: 1rem;
  }
}
.dashboard-part3 .part7-left .wrapper .rowwrap {
  display: flex;
  margin-top: 24px;
}
@media (max-width: 767px) {
  .dashboard-part3 .part7-left .wrapper .rowwrap {
    flex-wrap: wrap;
  }
}
.dashboard-part3 .part7-left .wrapper .rowwrap .cardwrap {
  border: 1px solid #ebebeb;
  border-radius: 8px;
  margin-right: 0;
}
@media (max-width: 767px) {
  .dashboard-part3 .part7-left .wrapper .rowwrap .cardwrap {
    margin-bottom: 10px;
  }
}
.dashboard-part3 .part7-left .wrapper .rowwrap .cardwrap .subcard {
  width: 100%;
  padding: 10px;
}
.dashboard-part3 .part7-left .wrapper .rowwrap .cardwrap .subcard .card-header {
  display: flex;
}
.dashboard-part3 .part7-left .wrapper .rowwrap .cardwrap .subcard .card-header .imgwrap {
  background-color: #F4F3F8;
  border-radius: 10px;
  height: 48px;
  width: 48px;
  padding: 0;
  overflow: hidden;
}
.dashboard-part3 .part7-left .wrapper .rowwrap .cardwrap .subcard .card-header .imgwrap img {
  max-width: 100%;
  height: 100%;
  object-fit: cover;
}
.dashboard-part3 .part7-left .wrapper .rowwrap .cardwrap .subcard .card-header .texthead {
  padding-left: 10px;
}
@media (max-width: 767px) {
  .dashboard-part3 .part7-left .wrapper .rowwrap .cardwrap .subcard .card-header .texthead {
    position: relative;
    width: 100%;
  }
}
.dashboard-part3 .part7-left .wrapper .rowwrap .cardwrap .subcard .card-header .texthead .head {
  font-size: 16px;
  line-height: 19px;
  font-weight: 600;
  color: #000000;
  margin: 0;
  margin-bottom: 8px;
  padding-top: 2px;
}
@media (max-width: 767px) {
  .dashboard-part3 .part7-left .wrapper .rowwrap .cardwrap .subcard .card-header .texthead .head {
    font-size: 12px;
    line-height: 14px;
    width: 140px;
  }
}
.dashboard-part3 .part7-left .wrapper .rowwrap .cardwrap .subcard .card-header .texthead .subhead {
  color: #666666;
  font-size: 14px;
  line-height: 16px;
  margin: 0;
  margin-top: 10px;
}
@media (max-width: 767px) {
  .dashboard-part3 .part7-left .wrapper .rowwrap .cardwrap .subcard .card-header .texthead .subhead {
    background-color: #F4F3F8;
    position: absolute;
    top: 0;
    right: -5px;
    padding: 0 2px;
    margin: 0;
    font-size: 10px;
    border: 1px solid #F4F3F8;
    border-radius: 2px;
    white-space: nowrap;
    max-width: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
.dashboard-part3 .part7-left .wrapper .rowwrap .cardwrap .subcard .card-bottom {
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  align-items: center;
}
@media (max-width: 767px) {
  .dashboard-part3 .part7-left .wrapper .rowwrap .cardwrap .subcard .card-bottom {
    flex-direction: column-reverse;
    position: relative;
    align-items: flex-start;
    padding-left: 54px;
    position: relative;
    margin-top: -17px;
  }
}
@media (max-width: 767px) {
  .dashboard-part3 .part7-left .wrapper .rowwrap .cardwrap .subcard .card-bottom .count {
    display: flex;
    flex-direction: row-reverse;
  }
}
.dashboard-part3 .part7-left .wrapper .rowwrap .cardwrap .subcard .card-bottom .count .percenthead {
  color: #666666;
  font-size: 14px;
  line-height: 16px;
  margin: 0;
  letter-spacing: 0.17px;
}
@media (max-width: 767px) {
  .dashboard-part3 .part7-left .wrapper .rowwrap .cardwrap .subcard .card-bottom .count .percenthead {
    font-size: 12px;
  }
}
.dashboard-part3 .part7-left .wrapper .rowwrap .cardwrap .subcard .card-bottom .count .percentage {
  font-size: 14px;
  line-height: 16px;
  font-weight: 600;
  margin: 0;
  margin-top: 8px;
  letter-spacing: 0.17px;
}
@media (max-width: 767px) {
  .dashboard-part3 .part7-left .wrapper .rowwrap .cardwrap .subcard .card-bottom .count .percentage {
    margin-top: 0;
    margin-right: 4px;
  }
}
.dashboard-part3 .part7-left .wrapper .rowwrap .cardwrap .subcard .card-bottom .count .percentage.green {
  color: #00B16B;
}
@media (max-width: 767px) {
  .dashboard-part3 .part7-left .wrapper .rowwrap .cardwrap .subcard .card-bottom .count .percentage {
    font-size: 12px;
  }
}
@media (max-width: 767px) {
  .dashboard-part3 .part7-left .wrapper .rowwrap .cardwrap .subcard .card-bottom .amount {
    display: flex;
    margin-bottom: 16px;
  }
}
.dashboard-part3 .part7-left .wrapper .rowwrap .cardwrap .subcard .card-bottom .amount .amounthead {
  color: #666666;
  font-size: 14px;
  margin: 0;
  line-height: 16px;
  letter-spacing: 0.17px;
}
@media (max-width: 767px) {
  .dashboard-part3 .part7-left .wrapper .rowwrap .cardwrap .subcard .card-bottom .amount .amounthead {
    font-size: 12px;
  }
}
.dashboard-part3 .part7-left .wrapper .rowwrap .cardwrap .subcard .card-bottom .amount .amount {
  font-size: 14px;
  line-height: 16px;
  font-weight: 600;
  margin: 0;
  margin-top: 8px;
  letter-spacing: 0.17px;
  color: #000000;
}
@media (max-width: 767px) {
  .dashboard-part3 .part7-left .wrapper .rowwrap .cardwrap .subcard .card-bottom .amount .amount {
    margin-left: 4px;
    margin-top: 0;
    font-size: 12px;
  }
}
.dashboard-part3 .part7-left .wrapper .rowwrap .cardwrap .subcard .card-bottom .link-hrl {
  display: block;
}
.dashboard-part3 .part7-left .wrapper .rowwrap .cardwrap .subcard .card-bottom .link-hrl img {
  width: 7px;
}
@media (max-width: 767px) {
  .dashboard-part3 .part7-left .wrapper .rowwrap .cardwrap .subcard .card-bottom .link-hrl {
    position: absolute;
    bottom: 0;
    right: 0;
  }
}
@media (max-width: 767px) {
  .dashboard-part3 .part7-left .wrapper .rowwrap .cardwrap .subcard {
    width: auto;
    padding: 10px;
  }
}
.dashboard-part3 .part7-left .wrapper .rowwrap .cardwrap .subcard:hover {
  border-color: #004393;
}
.dashboard-part3 .part7-left .wrapper .rowwrap .cardwrap .subcard:hover .card-header .texthead .head {
  color: #004393;
}
@media screen and (min-width: 1441px) and (max-width: 3000px) {
  .dashboard-part3 .part7-left .wrapper .rowwrap .cardwrap .subcard {
    padding: 20px;
  }
}
.dashboard-part3 .part7-left .wrapper .rowwrap .cardwrap:hover {
  border-color: #004393;
}
.dashboard-part3 .part7-left .wrapper .rowwrap .ngucarousel-items .item {
  padding: 10px;
}
.dashboard-part3 .part7-left .wrapper .rowwrap .ngucarousel-items .item .tile {
  box-shadow: inherit;
}
.dashboard-part3 .item {
  padding: 10px;
}
.dashboard-part3 .part4-left .wrapper {
  padding: 24px;
  background-color: #ffffff;
  border-radius: 8px;
  margin-bottom: 30px;
}
@media (max-width: 767px) {
  .dashboard-part3 .part4-left .wrapper {
    padding: 15px;
    margin-bottom: 15px;
  }
}
.dashboard-part3 .part4-left .wrapper .sm-ttl {
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  color: #000000;
  text-transform: capitalize;
  padding-bottom: 14px;
}
@media (max-width: 1367px) {
  .dashboard-part3 .part4-left .wrapper .sm-ttl {
    font-size: 16px;
  }
}
@media (max-width: 767px) {
  .dashboard-part3 .part4-left .wrapper .sm-ttl {
    font-size: 16px;
  }
}
.dashboard-part3 .part4-left .wrapper .imgrow {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.dashboard-part3 .part4-left .wrapper .imgrow .imgwrap {
  width: 39%;
  margin: 7px 0;
}
.dashboard-part3 .part4-left .wrapper .imgrow .imgwrap img {
  width: 100%;
}
.dashboard-part3 .part4-left .wrapper .imgrow .imgwrap:nth-child(2n) {
  width: 59%;
}
.dashboard-part3 .part4-left .wrapper .imgrow .imgwrap:nth-child(3n) {
  width: 59%;
}
.dashboard-part3 .part4-left .wrapper .imgrow .imgwrap:last-child {
  width: 39%;
}
@media (max-width: 568px) {
  .dashboard-part3 .part4-left .wrapper .imgrow .imgwrap {
    margin: 3px 0;
  }
}
.dashboard-part3 .part5-left .wrapper {
  padding: 24px;
  background-color: #ffffff;
  border-radius: 8px;
  margin-bottom: 30px;
}
@media (max-width: 767px) {
  .dashboard-part3 .part5-left .wrapper {
    margin-bottom: 15px;
  }
}
.dashboard-part3 .part5-left .wrapper .heading {
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  color: #000000;
  text-transform: capitalize;
  padding-bottom: 14px;
}
.dashboard-part3 .part5-left .wrapper .cardrow {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
}
.dashboard-part3 .part5-left .wrapper .cardrow .textwrapper {
  cursor: pointer;
  border: 1px solid #F4F3F8;
  border-radius: 8px;
  padding: 25px;
  display: flex;
  justify-content: flex-start;
  width: 32%;
  align-items: center;
}
.dashboard-part3 .part5-left .wrapper .cardrow .textwrapper .imgwrap {
  height: 36px;
  width: 36px;
  background-color: #F4F3F8;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('bg-sm.svg') no-repeat top right;
  background-size: contain;
}
.dashboard-part3 .part5-left .wrapper .cardrow .textwrapper .imgwrap img {
  width: 24px;
}
.dashboard-part3 .part5-left .wrapper .cardrow .textwrapper .text {
  color: #333333;
  font-size: 14px;
  line-height: 18px;
  font-weight: 600;
  margin-left: 16px;
}
@media (max-width: 1367px) {
  .dashboard-part3 .part5-left .wrapper .cardrow .textwrapper .text {
    font-size: 12px;
    margin-left: 12px;
  }
}
@media (max-width: 1367px) {
  .dashboard-part3 .part5-left .wrapper .cardrow .textwrapper {
    padding: 15px;
  }
}
@media (max-width: 767px) {
  .dashboard-part3 .part5-left .wrapper .cardrow .textwrapper {
    width: auto;
    margin-right: 15px;
    padding: 10px;
  }
}
.dashboard-part3 .part5-left .wrapper .cardrow .textwrapper:hover {
  border: 1px solid #004393;
}
@media (max-width: 767px) {
  .dashboard-part3 .part5-left .wrapper .cardrow {
    overflow: auto;
  }
}
.dashboard-part3 .dashboard-part5 {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 30px;
}
.dashboard-part3 .mt {
  margin-top: 2rem;
}
.dashboard-part3 .part6-left .view {
  display: flex;
  align-items: center;
  text-decoration: none;
}
.dashboard-part3 .part6-left .view img {
  width: 15px;
}
.dashboard-part3 .part6-left .view .viewall {
  margin-left: 12px;
  color: #004393;
  font-size: 14px;
  line-height: 16px;
  font-weight: 600;
}
.dashboard-part3 .part6-left .wrapper {
  padding: 24px;
  background-color: #ffffff;
  border-radius: 8px;
  margin-bottom: 30px;
}
@media (max-width: 767px) {
  .dashboard-part3 .part6-left .wrapper {
    padding: 15px;
    margin-bottom: 15px;
  }
}
.dashboard-part3 .part6-left .wrapper .wrap-head-mn {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.dashboard-part3 .part6-left .wrapper .wrap-head-mn .view {
  display: flex;
  align-items: center;
  text-decoration: none;
}
.dashboard-part3 .part6-left .wrapper .wrap-head-mn .view img {
  width: 15px;
}
.dashboard-part3 .part6-left .wrapper .wrap-head-mn .view .viewall {
  margin-left: 12px;
  color: #004393;
  font-size: 14px;
  line-height: 16px;
  font-weight: 600;
}
.dashboard-part3 .part6-left .wrapper .heading {
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  color: #000000;
  text-transform: capitalize;
  padding-bottom: 14px;
}
.dashboard-part3 .part6-left .wrapper .cardrow {
  display: flex;
  overflow: hidden;
  margin-top: 24px;
}
.dashboard-part3 .part6-left .wrapper .cardrow .cardwrap {
  border: 1px solid #ebebeb;
  border-radius: 8px;
  width: auto;
  margin-right: 16px;
}
.dashboard-part3 .part6-left .wrapper .cardrow .cardwrap .card-heading {
  display: flex;
  justify-content: space-between;
  padding: 24px 24px 15px;
}
@media (max-width: 767px) {
  .dashboard-part3 .part6-left .wrapper .cardrow .cardwrap .card-heading {
    padding: 10px;
  }
}
.dashboard-part3 .part6-left .wrapper .cardrow .cardwrap .card-heading p {
  margin: 0;
}
.dashboard-part3 .part6-left .wrapper .cardrow .cardwrap .card-heading .head .mainhead {
  color: #000000;
  font-size: 14px;
  line-height: 16px;
  font-weight: 600;
  margin: 0;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
}
.dashboard-part3 .part6-left .wrapper .cardrow .cardwrap .card-heading .head .mainhead .green-badge {
  color: #00B16B;
  font-size: 10px;
  line-height: 16px;
  background-color: rgba(0, 176, 156, 0.1411764706);
  border-radius: 4px;
  padding: 2px 6px;
  display: inline-block;
  margin-left: 5px;
}
@media (max-width: 767px) {
  .dashboard-part3 .part6-left .wrapper .cardrow .cardwrap .card-heading .head .mainhead {
    margin-bottom: 5px;
  }
}
.dashboard-part3 .part6-left .wrapper .cardrow .cardwrap .card-heading .head .date {
  color: #666666;
  font-size: 12px;
  margin: 0;
  line-height: 14px;
}
@media (max-width: 767px) {
  .dashboard-part3 .part6-left .wrapper .cardrow .cardwrap .card-heading .head {
    width: 100%;
    text-align: left;
    margin-bottom: 15px;
  }
}
.dashboard-part3 .part6-left .wrapper .cardrow .cardwrap .card-heading .count {
  text-align: right;
}
.dashboard-part3 .part6-left .wrapper .cardrow .cardwrap .card-heading .count .datecount {
  color: #000000;
  font-size: 14px;
  line-height: 16px;
  font-weight: 600;
  margin-bottom: 10px;
}
@media (max-width: 767px) {
  .dashboard-part3 .part6-left .wrapper .cardrow .cardwrap .card-heading .count .datecount {
    margin-bottom: 5px;
  }
}
.dashboard-part3 .part6-left .wrapper .cardrow .cardwrap .card-heading .count .datepercent {
  font-size: 12px;
  line-height: 14px;
  font-weight: 400;
}
.dashboard-part3 .part6-left .wrapper .cardrow .cardwrap .card-heading .count .datepercent.red {
  color: #EE404A;
}
@media (max-width: 767px) {
  .dashboard-part3 .part6-left .wrapper .cardrow .cardwrap .card-heading .count {
    width: 100%;
    text-align: left;
  }
}
@media (max-width: 767px) {
  .dashboard-part3 .part6-left .wrapper .cardrow .cardwrap .card-heading {
    flex-wrap: wrap;
  }
}
.dashboard-part3 .part6-left .wrapper .cardrow .cardwrap .card-bottom {
  padding: 10px 24px;
  background-color: #F4F3F8;
  border-radius: 0 0 7px 7px;
  font-size: 12px;
  line-height: 14px;
  color: #333333;
  height: 100%;
}
@media (max-width: 767px) {
  .dashboard-part3 .part6-left .wrapper .cardrow .cardwrap .card-bottom {
    padding: 10px;
  }
}
.dashboard-part3 .part6-left .wrapper .cardrow .cardwrap .cardwrap-sub {
  height: 100%;
}
@media (max-width: 767px) {
  .dashboard-part3 .part6-left .wrapper .cardrow .cardwrap .cardwrap-sub {
    width: 280px;
  }
}
@media (max-width: 360px) {
  .dashboard-part3 .part6-left .wrapper .cardrow .cardwrap .cardwrap-sub {
    width: 230px;
  }
}
.dashboard-part3 .market-left {
  padding: 24px;
  background-color: #ffffff;
  border-radius: 8px;
  margin-bottom: 30px;
}
@media (max-width: 767px) {
  .dashboard-part3 .market-left {
    padding: 15px;
    margin-bottom: 15px;
  }
}
.dashboard-part3 .market-left .headwrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 24px;
}
.dashboard-part3 .market-left .headwrap .heading {
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  color: #000000;
  text-transform: capitalize;
  margin: 0;
}
.dashboard-part3 .market-left .headwrap .togglewrap {
  display: flex;
  justify-content: center;
  align-items: center;
}
.dashboard-part3 .market-left .headwrap .togglewrap .text {
  font-size: 14px;
  line-height: 16px;
  color: #797979;
  letter-spacing: 0.17px;
  text-transform: uppercase;
  opacity: 1;
  padding: 0 10px;
}
.dashboard-part3 .market-left .headwrap .togglewrap .text.blue {
  color: #004393;
}
.dashboard-part3 .market-left .headwrap .togglewrap .content {
  cursor: pointer;
  margin: 0;
}
.dashboard-part3 .market-left .headwrap .togglewrap .content .toggle {
  width: 24px;
  height: 8px;
  position: relative;
  background: rgba(0, 0, 0, 0.1607843137);
  border-radius: 20px;
}
.dashboard-part3 .market-left .headwrap .togglewrap .content .toggle .btn {
  width: 14px;
  height: 14px;
  position: absolute;
  left: 0;
  top: -3px;
  background: #bbb;
  border-radius: 50%;
  transition: all ease 0.5s;
  padding: 0 !important;
}
.dashboard-part3 .market-left .headwrap .togglewrap .content input:checked + .toggle .btn {
  left: 50%;
  background: #008ffc;
}
.dashboard-part3 .market-left .headwrap .togglewrap .content input:disabled + .toggle {
  background: #F4F3F8;
}
.dashboard-part3 .market-left .headwrap .togglewrap .view {
  display: flex;
  align-items: center;
  text-decoration: none;
}
.dashboard-part3 .market-left .headwrap .togglewrap .view img {
  width: 15px;
}
.dashboard-part3 .market-left .headwrap .togglewrap .view .viewall {
  margin-left: 12px;
  color: #004393;
  font-size: 14px;
  line-height: 16px;
  font-weight: 600;
}
.dashboard-part3 .market-left .navwrap .nav {
  display: flex;
  justify-content: flex-start;
}
@media (max-width: 1392px) {
  .dashboard-part3 .market-left .navwrap .nav {
    overflow: auto;
  }
}
.dashboard-part3 .market-left .navwrap .nav .navtext {
  background-color: #F0F0F0;
  border-radius: 20px;
  margin-right: 12px;
  width: 128px;
  text-align: center;
}
.dashboard-part3 .market-left .navwrap .nav .navtext.active {
  background-color: #004393;
}
.dashboard-part3 .market-left .navwrap .nav .navtext.active .text {
  color: #ffffff;
}
.dashboard-part3 .market-left .navwrap .nav .navtext .text {
  color: #333333;
  font-size: 14px;
  line-height: 16px;
  font-weight: 600;
  letter-spacing: 0.17px;
  padding: 12px !important;
  opacity: 1;
  border-radius: 20px;
  font-family: "SFProText" !important;
  white-space: nowrap;
}
@media (max-width: 767px) {
  .dashboard-part3 .market-left .navwrap .nav .navtext .text {
    white-space: nowrap;
    padding: 8px 25px !important;
  }
}
.dashboard-part3 .market-left .tablewrap {
  border: 1px solid #ebebeb;
  border-radius: 8px;
  margin-top: 32px;
  overflow: auto;
}
@media (max-width: 767px) {
  .dashboard-part3 .market-left .tablewrap {
    overflow: auto;
  }
}
.dashboard-part3 .market-left .tablewrap table {
  width: 100%;
}
.dashboard-part3 .market-left .tablewrap table th {
  color: #000000;
  font-size: 14px;
  line-height: 16px;
  font-weight: 600;
  padding: 16px;
  letter-spacing: 0.17px;
  opacity: 1;
  font-family: "SFProText" !important;
  white-space: nowrap;
}
.dashboard-part3 .market-left .tablewrap table th:first-child {
  position: sticky;
  left: 0;
  background: #ffffff;
  z-index: 9;
}
@media (max-width: 767px) {
  .dashboard-part3 .market-left .tablewrap table th {
    font-size: 12px;
  }
}
.dashboard-part3 .market-left .tablewrap table tr {
  border-bottom: 1px solid #F4F3F8;
}
.dashboard-part3 .market-left .tablewrap table tr:last-child {
  border-bottom: none;
}
.dashboard-part3 .market-left .tablewrap table tr td {
  color: #333333;
  font-size: 14px;
  line-height: 16px;
  padding: 16px;
  text-transform: uppercase;
  opacity: 1;
  letter-spacing: 0.17px;
  font-family: "SF Pro Display" !important;
  white-space: nowrap;
}
.dashboard-part3 .market-left .tablewrap table tr td.green {
  color: #00B16B;
}
.dashboard-part3 .market-left .tablewrap table tr td.red {
  color: #EE404A;
}
@media (max-width: 767px) {
  .dashboard-part3 .market-left .tablewrap table tr td {
    font-size: 12px;
  }
}
.dashboard-part3 .market-left .tablewrap table tr .firstcol {
  color: #333333;
  font-size: 14px;
  line-height: 16px;
  text-transform: uppercase;
  opacity: 1;
  letter-spacing: 0.17px;
  font-weight: 500;
  font-family: "SF Pro Display" !important;
  position: sticky;
  left: 0;
  background: #ffffff;
  z-index: 9;
  border-bottom: 1px solid #F4F3F8;
}
@media (max-width: 767px) {
  .dashboard-part3 .market-left .tablewrap table tr .firstcol {
    font-size: 12px;
    white-space: nowrap;
    padding: 10px 15px;
  }
}
.dashboard-part3 .part3-right .join-our-community {
  padding: 24px;
  background-color: #ffffff;
  border-radius: 8px;
  margin-bottom: 30px;
}
@media (max-width: 767px) {
  .dashboard-part3 .part3-right .join-our-community {
    padding: 15px;
    margin-bottom: 0;
  }
}
.dashboard-part3 .part3-right .join-our-community .heading {
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  color: #000000;
  text-transform: capitalize;
  padding-bottom: 14px;
}
.dashboard-part3 .part3-right .join-our-community .mediarow {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 24px;
}
.dashboard-part3 .part3-right .join-our-community .mediarow .textwrapper {
  height: 32px;
  width: 32px;
  border-radius: 50%;
  background-color: #004393;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
}
.dashboard-part3 .part3-right .join-our-community .mediarow .textwrapper .imgwrap {
  display: flex;
  justify-content: center;
  align-items: center;
}
@media (max-width: 1366px) {
  .dashboard-part3 .part3-right .join-our-community .mediarow .textwrapper {
    margin-right: 5px;
  }
}
@media (max-width: 768px) {
  .dashboard-part3 .part3-right .join-our-community .mediarow .textwrapper {
    margin-right: 10px;
  }
}
.dashboard-part3 .part3-right .join-our-community .mediarow .textwrapper svg path {
  fill: #ffffff !important;
}

.finxschool {
  background: #ffffff;
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 30px;
}
@media (max-width: 767px) {
  .finxschool {
    padding: 15px;
  }
}
.finxschool .finx-up {
  margin-top: 24px;
}
.finxschool .finx-up .finx-menu {
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
  margin-bottom: 15px;
}
.finxschool .finx-up .finx-menu .finx_list {
  list-style: none;
  margin-right: 12px;
}
.finxschool .finx-up .finx-menu .finx_list .content {
  border-radius: 20px;
  background-color: #F0F0F0;
  font-size: 14px;
  text-align: center;
  color: #333333;
  display: block;
  width: 99px;
  height: 40px;
  line-height: 40px;
  text-decoration: none;
}
@media (max-width: 1367px) {
  .finxschool .finx-up .finx-menu .finx_list .content {
    font-size: 13px;
    width: 89px;
    height: 35px;
    line-height: 35px;
  }
}
.finxschool .finx-up .finx-menu .finx_list .content-active {
  background-color: #004393;
  color: #ffffff;
}
.finxschool .finx_content .blog-v-img {
  margin-bottom: 24px;
  display: block;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
}
.finxschool .finx_content .blog-v-img img {
  width: 100%;
  height: 175px;
  object-fit: cover;
  object-position: top center;
}
@media screen and (min-width: 1537px) and (max-width: 3000px) {
  .finxschool .finx_content .blog-v-img img {
    height: 220px !important;
  }
}
.finxschool .finx_content .blog-v-img iframe {
  display: block;
  height: 175px !important;
}
@media screen and (min-width: 1537px) and (max-width: 3000px) {
  .finxschool .finx_content .blog-v-img iframe {
    height: 220px !important;
  }
}
.finxschool .finx_content .video-play::before {
  content: "";
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  background: #333333;
  opacity: 0.28;
}
.finxschool .finx_content .video-play::after {
  content: "";
  background: url('play_circle.svg') no-repeat;
  background-size: contain;
  width: 32px;
  height: 32px;
  display: block;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.finxschool .finx_content .finx_bottomtext {
  font-size: 14px;
  color: #000000;
  font-family: "SFProText";
  margin: 0;
  margin-bottom: 10px;
  opacity: 1;
  line-height: 18px;
  letter-spacing: 0.17px;
}
@media (max-width: 1367px) {
  .finxschool .finx_content .finx_bottomtext {
    font-size: 12px;
  }
}
.finxschool .finx_content .finx_para {
  color: #333333;
  opacity: 1;
  font-size: 14px;
  margin: 0;
  line-height: 18px;
  letter-spacing: 0.17px;
  -webkit-line-clamp: 2;
  overflow: hidden;
  max-height: 39px;
}
@media (max-width: 1367px) {
  .finxschool .finx_content .finx_para {
    font-size: 12px;
    line-height: 16px;
    max-height: 35px;
  }
}
.finxschool .finx_content .finx_views {
  color: #4f4f4f;
  font-weight: 600;
}
.finxschool .finx_content .finx_publishAt {
  color: #4f4f4f;
  font-weight: 600;
}
.finxschool .pagination-dots {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
}
.finxschool .pagination-dots .reset-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.finxschool .pagination-dots .reset-list .bult {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  display: inline-block;
  vertical-align: middle;
  background: #231F20;
  cursor: pointer;
  opacity: 0.5;
  margin-right: 3px;
}
.finxschool .pagination-dots .reset-list .bult.active-bult {
  width: 17px;
  height: 5px;
  border-radius: 3px;
  opacity: 1;
}
.finxschool .pagination-dots .next-prev-list {
  display: flex;
  align-items: center;
}
.finxschool .pagination-dots .next-prev-list .prev {
  display: block;
  position: relative;
  left: -20px;
  cursor: pointer;
}
.finxschool .pagination-dots .next-prev-list .next {
  display: block;
  cursor: pointer;
}
.finxschool .pagination-dots .next-prev-list .ico-smn {
  width: 7px;
}

@keyframes growProgressBar {
  0%, 33% {
    --pgPercentage: 0;
  }
  100% {
    --pgPercentage: var(--value);
  }
}
@property --pgPercentage {
  syntax: "<number>";
  inherits: false;
  initial-value: 0;
}
div[role=progressbar] {
  --size: 90px;
  --fg: \$success;
  --bg: #F2FBF7;
  --pgPercentage: var(--value);
  animation: growProgressBar 3s 1 forwards;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: radial-gradient(closest-side, #A9E5CD 80%, transparent 0 99.9%, #A9E5CD 0), conic-gradient(var(--fg) calc(var(--pgPercentage) * 1%), var(--bg) 0);
  font-family: Helvetica, Arial, sans-serif;
  font-size: calc(var(--size) / 5);
  color: var(--fg);
}

div[role=progressbar]::before {
  counter-reset: percentage var(--value);
  content: counter(percentage) "%";
}

.top-head {
  margin-bottom: 13px;
}
.top-head .headwrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.top-head .headwrap .heading {
  color: #000000;
  font-size: 20px;
  line-height: 24px;
  font-weight: 700;
  letter-spacing: 0.24px;
  opacity: 1;
  font-family: "SFProText" !important;
  text-transform: capitalize;
  margin: 0;
}
@media (max-width: 992px) {
  .top-head .headwrap .heading {
    font-size: 15px;
  }
}
.top-head .headwrap .searchwrap {
  background-color: #ffffff;
  border-radius: 8px;
  padding: 12px;
  width: 48px;
  height: 48px;
}

.nodata {
  padding: 20px;
}

.curs-point {
  cursor: pointer;
}

ngx-tooltip-content.ngx-charts-tooltip-content.type-tooltip {
  background-color: #ffffff;
  box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.2);
}
ngx-tooltip-content.ngx-charts-tooltip-content.type-tooltip .tooltip-caret.position-top {
  border-top-color: #ffffff;
  box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.2);
}

.view {
  display: flex;
  align-items: center;
  text-decoration: none;
}
.view img {
  width: 15px;
}
.view .viewall {
  margin-left: 12px;
  color: #004393;
  font-size: 14px;
  line-height: 16px;
  font-weight: 600;
}

.success-red h3 {
  color: #EE404A !important;
}

.success-red circle {
  stroke: #EE404A;
  stroke-dashoffset: 0;
  transition: stroke-dashoffset 1s ease;
  stroke-width: 5px;
  fill: #FFD4D4;
}

.success-green::after {
  color: #00B16B !important;
}

.success-green::before {
  color: #00B16B !important;
}

.success-red::after {
  color: #EE404A !important;
}

.success-red::before {
  color: #EE404A !important;
}

.success-green h3 {
  color: #00B16B !important;
}

.success-green circle {
  stroke: #00B16B;
  stroke-dashoffset: 0;
  transition: stroke-dashoffset 1s ease;
  stroke-width: 6px;
  fill: #D0EDD9;
}

.success-orange::after {
  color: #F6B900 !important;
}

.success-orange::before {
  color: #F6B900 !important;
}

.success-orange h3 {
  color: #F6B900 !important;
}

.success-orange circle {
  stroke: #F6B900;
  stroke-dashoffset: 0;
  transition: stroke-dashoffset 1s ease;
  stroke-width: 5px;
  fill: #FCEAB3;
}

.progress-n .greenbar {
  stroke: #D0EDD9;
  stroke-width: 7px;
}

.progress-n .redbar {
  stroke: #FFD4D4;
  stroke-width: 7px;
}

.progress-n .orangebar {
  stroke: #FCEAB3;
  stroke-width: 7px;
}

.not-selectable-img {
  pointer-events: none;
  -webkit-user-select: none;
          user-select: none;
}

.col-yell {
  background: #F6B900 !important;
  right: -22px !important;
}

.best-tax-saving {
  background-color: #ffffff;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 30px;
  position: relative;
}
.best-tax-saving .tax-saving-header {
  padding: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(0, 67, 147, 0.1215686275);
}
@media (max-width: 767px) {
  .best-tax-saving .tax-saving-header {
    padding: 15px;
  }
}
.best-tax-saving .tax-saving-header .header-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-bottom: 2rem;
}
.best-tax-saving .tax-saving-header .header-wrap .sm-ttl span {
  color: #00B16B;
}
.best-tax-saving .tax-saving-header .header-wrap .main-txt {
  position: absolute;
  display: block;
  right: -24px;
  width: 140px;
  background: rgba(5, 8, 68, 0.1019607843);
  height: 40px;
  border-radius: 40px 0px 0 40px;
}
@media (max-width: 767px) {
  .best-tax-saving .tax-saving-header .header-wrap .main-txt {
    width: 120px;
    right: -15px;
    height: 35px;
  }
}
.best-tax-saving .tax-saving-header .header-wrap .main-txt .piggy-icon {
  position: absolute;
  left: 15px;
}
@media (max-width: 767px) {
  .best-tax-saving .tax-saving-header .header-wrap .main-txt .piggy-icon {
    width: 22px;
  }
}
.best-tax-saving .tax-saving-header .header-wrap .main-txt .js-nametag {
  position: absolute;
  font-weight: 600;
  left: 40px;
  font-size: 17px;
  margin: 8px;
}
@media (min-width: 768px) and (max-width: 1367px) {
  .best-tax-saving .tax-saving-header .header-wrap .main-txt .js-nametag {
    font-size: 15px;
  }
}
@media (max-width: 767px) {
  .best-tax-saving .tax-saving-header .header-wrap .main-txt .js-nametag {
    font-size: 13px;
    margin: 8px;
  }
}
.best-tax-saving .tax-saving-header .header-wrap .main-txt .js-nametag:nth-child(1) {
  animation-name: fade;
  animation-fill-mode: both;
  animation-iteration-count: infinite;
  animation-duration: 3s;
  animation-direction: alternate-reverse;
}
.best-tax-saving .tax-saving-header .header-wrap .main-txt .js-nametag:nth-child(2) {
  animation-name: fade;
  animation-fill-mode: both;
  animation-iteration-count: infinite;
  animation-duration: 3s;
  animation-direction: alternate;
}
@keyframes fade {
  0%, 50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.best-tax-saving .tax-saving-header .header-wrap2 {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.best-tax-saving .tax-saving-header .header-wrap2 .deadline {
  font-size: 14px;
  color: #EE404A;
  font-weight: 500;
}
@media (max-width: 767px) {
  .best-tax-saving .tax-saving-header .header-wrap2 .viewall {
    font-size: 13px;
  }
}
.best-tax-saving .tax-saving-items {
  padding: 0 24px;
}
@media (max-width: 767px) {
  .best-tax-saving .tax-saving-items {
    padding: 0 15px;
  }
}
.best-tax-saving .tax-saving-items .tax-saving-data {
  border-bottom: 1px solid #F4F3F8;
}
.best-tax-saving .tax-saving-items .tax-saving-data:last-child {
  border-bottom: 0;
}
.best-tax-saving .tax-saving-items .tax-saving-data .tax-saving-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 1rem 0 1.5rem 0;
}
.best-tax-saving .tax-saving-items .tax-saving-data .tax-saving-list .items .star {
  display: flex;
  align-items: center;
  gap: 7px;
}
.best-tax-saving .tax-saving-items .tax-saving-data .tax-saving-list .items .value {
  font-size: 14px;
  color: #666666;
  white-space: nowrap;
}
@media (max-width: 1367px) {
  .best-tax-saving .tax-saving-items .tax-saving-data .tax-saving-list .items .value {
    font-size: 13px;
  }
}
.best-tax-saving .tax-saving-items .tax-saving-data .tax-saving-list .items h5 {
  font-size: 16px;
  font-family: "SFProText";
  letter-spacing: 0;
}
@media (max-width: 1367px) {
  .best-tax-saving .tax-saving-items .tax-saving-data .tax-saving-list .items h5 {
    font-size: 14px;
    margin: 5px 0;
  }
}
.best-tax-saving .tax-saving-items .tax-saving-data .tax-saving-list .items .perce {
  color: #00B16B;
  font-size: 14px;
  font-weight: 600;
}
@media (max-width: 1367px) {
  .best-tax-saving .tax-saving-items .tax-saving-data .tax-saving-list .items .perce {
    font-size: 13px;
    margin: 5px 0;
  }
}
.best-tax-saving .tax-saving-items .tax-saving-data .tax-saving-list .items .price {
  font-size: 14px;
  font-weight: 600;
}
@media (max-width: 1367px) {
  .best-tax-saving .tax-saving-items .tax-saving-data .tax-saving-list .items .price {
    font-size: 13px;
    margin: 5px 0;
  }
}
.best-tax-saving .tax-saving-items .tax-saving-data .tax-saving-list .col-width {
  width: 69%;
}
@media (max-width: 767px) {
  .best-tax-saving .tax-saving-items .tax-saving-data .tax-saving-list .col-width {
    width: 100%;
    margin-bottom: 1rem;
  }
}
.best-tax-saving .tax-saving-items .tax-saving-data .tax-saving-list .col-width2 {
  width: 18%;
}
@media (max-width: 767px) {
  .best-tax-saving .tax-saving-items .tax-saving-data .tax-saving-list .col-width2 {
    width: auto;
  }
}
.best-tax-saving .tax-saving-items .tax-saving-data .tax-saving-list .col-width3 {
  width: 10%;
}
@media (max-width: 767px) {
  .best-tax-saving .tax-saving-items .tax-saving-data .tax-saving-list .col-width3 {
    width: auto;
  }
}

.loader {
  border: 4px solid #d5d5d5;
  border-radius: 50%;
  border-top: 4px solid #2D77F4;
  /* Safari */
  animation: spin 2s linear infinite;
}

.attr-banner {
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  margin: 0 auto;
  background: #beb8ff;
  padding: 10px 20px;
  border-radius: 10px;
  position: relative;
  margin-bottom: 20px;
}
.attr-banner .icon-img {
  width: 70px;
}
@media (max-width: 767px) {
  .attr-banner .icon-img {
    width: 60px;
  }
}
.attr-banner p {
  margin: 0;
  margin: 0 20px;
  margin-right: 8px;
  font-size: 16px;
  line-height: 22px;
  color: #1A1A1A;
  letter-spacing: 0.19px;
  opacity: 1;
}
.attr-banner p span {
  font-weight: 600;
}
@media (max-width: 992px) {
  .attr-banner p {
    font-size: 13px;
    line-height: 18px;
    margin: 0 10px;
  }
}
@media (max-width: 767px) {
  .attr-banner p {
    font-size: 12px;
    line-height: 16px;
    width: 250px;
  }
  .attr-banner p br {
    display: none;
  }
}
@media only screen and (min-width: 1536px) {
  .attr-banner p br {
    display: block;
  }
}
@media only screen and (min-width: 1600px) {
  .attr-banner p br {
    display: none;
  }
}
.attr-banner .link-btn {
  text-decoration: underline;
  color: #EE404A;
  font-weight: 600;
}
.attr-banner .close-banr {
  position: absolute;
  right: 32px;
  top: 50%;
  transform: translate(0, -50%);
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(27, 27, 27, 0.1019607843);
}
@media (max-width: 767px) {
  .attr-banner .close-banr svg {
    width: 14px;
  }
}
@media (max-width: 767px) {
  .attr-banner .close-banr {
    width: 16px;
    height: 16px;
    right: 10px;
    top: 10px;
    transform: inherit;
  }
}
.attr-banner.new-bnr {
  background: url('new-tag-banner.png') no-repeat top left #c7dcff;
  background-size: cover;
}
@media (max-width: 820px) {
  .attr-banner.new-bnr {
    position: fixed;
    top: 87px;
    left: 0;
    border-radius: 0;
    z-index: 9999999;
  }
}
.attr-banner .next-prev-maret {
  display: flex;
  align-items: center;
  margin-top: 40px;
  position: absolute;
  right: 12px;
}
.attr-banner .next-prev-maret .prev {
  display: block;
  margin-right: 8px;
  cursor: pointer;
}
.attr-banner .next-prev-maret .prev:disabled {
  cursor: not-allowed !important;
}
.attr-banner .next-prev-maret .next {
  display: block;
  cursor: pointer;
}
.attr-banner .next-prev-maret .next:disabled {
  cursor: not-allowed !important;
}
.attr-banner .next-prev-maret .ico-smn {
  opacity: 0.5;
  width: 7px;
}
@media (max-width: 767px) {
  .attr-banner .next-prev-maret .ico-smn {
    width: 6px;
  }
}
@media (max-width: 767px) {
  .attr-banner .next-prev-maret {
    position: absolute;
    right: 10px;
    bottom: 10px;
    margin: 0;
  }
}
@media (max-width: 767px) {
  .attr-banner {
    padding: 10px;
    position: sticky;
    top: 85px;
    z-index: 99999;
    border-radius: 5px;
  }
}

.attr-banner2 {
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
  background: url('new-tag-banner.png') no-repeat top left;
  background-size: cover;
  padding: 22px 32px;
  border-radius: 10px;
  position: relative;
}
.attr-banner2 .icon-img {
  width: 70px;
}
.attr-banner2 .new-tag {
  background: rgba(0, 67, 147, 0.1019607843);
  width: 62px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 21px;
  color: #ffffff;
  opacity: 1;
}
.attr-banner2 .new-tag span {
  background: #EE404A;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  font-size: 14px;
  width: 46px;
  height: 26px;
}
.attr-banner2 p {
  margin: 0;
  margin: 0 20px;
  font-size: 16px;
  line-height: 19px;
  font-weight: 400;
  color: #1A1A1A;
  letter-spacing: 0.19px;
  opacity: 1;
}
.attr-banner2 p span {
  font-weight: 600;
}
.attr-banner2 .link-btn {
  text-decoration: underline;
  font-weight: 600;
  color: #EE404A;
  letter-spacing: 0.19px;
}
.attr-banner2 .close-banr {
  position: absolute;
  right: 32px;
  top: 50%;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(27, 27, 27, 0.1019607843);
  transform: translate(0, -50%);
}

.toast-container {
  position: fixed;
  bottom: 0;
  right: 0;
  transition: transform 0.5s ease-in-out;
  transform: translateX(calc(100% + 30px));
  z-index: 99;
}
.toast-container.activedrawer {
  transform: translateX(25%);
}
.toast-container .toast {
  background-color: #333333;
  border-left: 3px solid #F6B900;
  box-shadow: 4px 0px 16px 0px rgba(0, 0, 0, 0.3019607843);
  padding: 16px 10px;
  position: relative;
}
.toast-container .toast .toast-content {
  display: flex;
  column-gap: 14px;
  align-items: center;
  width: 69%;
}
.toast-container .toast .toast-content .bg-circle .bg-fill {
  background-color: #F6B900;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  width: 28px;
  height: 28px;
}
.toast-container .toast .toast-content .message .message-text {
  color: #ffffff;
  font-family: "SF Pro Display" !important;
  font-size: 11px;
  line-height: 14px;
}
.toast-container .toast .toast-content .message h6 {
  margin: 0;
  font-weight: 700;
}
.toast-container .toast .toast-content .message p {
  font-weight: 400;
  margin: 0;
}
.toast-container .toast .toast-content .message p span {
  font-weight: 500;
}
.toast-container .toast .toast-close {
  position: absolute;
  right: 5px;
  top: 5px;
  width: 30%;
}

@media (max-width: 767px) {
  .close-banr-top {
    margin-top: -10% !important;
  }
}

.play-btn {
  background: #EE404A;
  border-radius: 50%/10%;
  color: #ffffff;
  font-size: 2em; /* change this to change size */
  height: 3em;
  margin: 20px auto;
  padding: 0;
  position: relative;
  text-align: center;
  text-indent: 0.1em;
  transition: all 150ms ease-out;
  width: 4em;
}

.play-btn:hover {
  background: darkorange;
}

.play-btn::before {
  background: inherit;
  border-radius: 5%/50%;
  bottom: 9%;
  content: "";
  left: -5%;
  position: absolute;
  right: -5%;
  top: 9%;
}

.play-btn::after {
  border-style: solid;
  border-width: 1em 0 1em 1.732em;
  border-color: transparent transparent transparent rgba(255, 255, 255, 0.75);
  content: " ";
  font-size: 0.75em;
  height: 0;
  margin: -1em 0 0 -0.75em;
  top: 50%;
  position: absolute;
  width: 0;
}

.trust-brand {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}
.trust-brand .brand-cont {
  text-align: center;
}
.trust-brand .brand-cont .img-responsive {
  display: block;
  margin: 0 auto;
}
.trust-brand .brand-cont h4 {
  margin: 10px 0;
  font-size: 14px;
  font-family: "SF Pro Display" !important;
  font-weight: 400;
  color: #333333;
  letter-spacing: 0;
}
.trust-brand .brand-cont h4 span {
  color: #00B16B;
  font-weight: 600;
}
.trust-brand .brand-cont h5 {
  font-size: 12px;
  color: #888888;
  font-family: "SF Pro Display" !important;
  font-weight: 400;
  letter-spacing: 0;
}
.trust-brand .brand-cont h5 span {
  font-weight: 500;
}`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 16444:
/*!***********************************************************************************************!*\
  !*** ./src/app/post-login-module/market-dashboard/market-dashboard.component.scss?ngResource ***!
  \***********************************************************************************************/
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
.market-left {
  padding: 24px;
  background-color: #ffffff;
  border-radius: 8px;
  margin-bottom: 30px;
}
@media (max-width: 767px) {
  .market-left {
    padding: 15px;
    margin-bottom: 15px;
  }
}
.market-left .headwrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 24px;
}
.market-left .headwrap .heading {
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  color: #000000;
  text-transform: capitalize;
  margin: 0;
}
.market-left .headwrap .togglewrap {
  display: flex;
  justify-content: center;
  align-items: center;
}
.market-left .headwrap .togglewrap .text {
  font-size: 14px;
  line-height: 16px;
  color: #797979;
  letter-spacing: 0.17px;
  text-transform: uppercase;
  opacity: 1;
  padding: 0 10px;
  cursor: pointer;
}
.market-left .headwrap .togglewrap .text.blue {
  color: #004393;
}
@media (max-width: 767px) {
  .market-left .headwrap .togglewrap .text {
    font-size: 12px;
  }
}
.market-left .headwrap .togglewrap .content {
  cursor: pointer;
  margin: 0;
}
.market-left .headwrap .togglewrap .content .toggle {
  width: 24px;
  height: 8px;
  position: relative;
  background: rgba(0, 0, 0, 0.1607843137);
  border-radius: 20px;
}
.market-left .headwrap .togglewrap .content .toggle .btn {
  width: 14px;
  height: 14px;
  position: absolute;
  left: 0;
  top: -3px;
  background: #004393;
  border-radius: 50%;
  transition: all ease 0.5s;
  padding: 0 !important;
}
.market-left .headwrap .togglewrap .content input:checked + .toggle .btn {
  left: 50%;
  background: #004393;
}
.market-left .headwrap .togglewrap .content input:disabled + .toggle {
  background: #ddd;
}
.market-left .headwrap .togglewrap .view {
  display: flex;
  align-items: center;
  text-decoration: none;
}
.market-left .headwrap .togglewrap .view img {
  width: 15px;
}
.market-left .headwrap .togglewrap .view .viewall {
  margin-left: 12px;
  color: #004393;
  font-size: 14px;
  line-height: 16px;
  font-weight: 600;
}
@media (max-width: 767px) {
  .market-left .headwrap .togglewrap .view .viewall {
    font-size: 12px;
  }
}
.market-left .navwrap .nav {
  display: flex;
  justify-content: flex-start;
}
@media (max-width: 1390px) {
  .market-left .navwrap .nav {
    overflow: auto;
  }
}
.market-left .navwrap .nav .navtext {
  background-color: #DBE4F0;
  border-radius: 20px;
  margin-right: 12px;
  width: 128px;
  text-align: center;
}
.market-left .navwrap .nav .navtext.active {
  background-color: #004393;
}
.market-left .navwrap .nav .navtext.active .text {
  color: #ffffff;
}
.market-left .navwrap .nav .navtext.active .text:hover {
  background-color: #004393;
}
.market-left .navwrap .nav .navtext.active .text:hover .text {
  color: #ffffff;
}
.market-left .navwrap .nav .navtext .text {
  color: #333333;
  font-size: 14px;
  line-height: 16px;
  font-weight: 600;
  letter-spacing: 0.17px;
  padding: 12px !important;
  opacity: 1;
  border-radius: 20px;
  font-family: "SFProText" !important;
  white-space: nowrap;
  display: block;
}
@media (max-width: 1367px) {
  .market-left .navwrap .nav .navtext .text {
    font-size: 13px;
    padding: 10px !important;
  }
}
@media (max-width: 1280px) {
  .market-left .navwrap .nav .navtext .text {
    font-size: 12px;
  }
}
@media (max-width: 767px) {
  .market-left .navwrap .nav .navtext .text {
    white-space: nowrap;
    padding: 8px 25px !important;
  }
}
@media (max-width: 1390px) {
  .market-left .navwrap .nav .navtext {
    margin-right: 7px;
  }
}
.market-left .tablewrap {
  overflow: auto;
}
@media (max-width: 767px) {
  .market-left .tablewrap {
    overflow: auto;
  }
}
.market-left .tablewrap table {
  width: 100%;
}
.market-left .tablewrap table th {
  color: #000000;
  font-size: 14px;
  line-height: 16px;
  font-weight: 600;
  padding: 16px;
  letter-spacing: 0.17px;
  opacity: 1;
  font-family: "SFProText" !important;
  white-space: nowrap;
}
.market-left .tablewrap table th:first-child {
  position: sticky;
  left: 0;
  background: #ffffff;
  z-index: 9;
}
@media (max-width: 767px) {
  .market-left .tablewrap table th {
    font-size: 12px;
    padding: 10px;
  }
}
.market-left .tablewrap table tr {
  border-bottom: 1px solid #F4F3F8;
}
.market-left .tablewrap table tr:last-child {
  border-bottom: none;
}
.market-left .tablewrap table tr td {
  color: #333333;
  font-size: 14px;
  line-height: 16px;
  padding: 16px;
  text-transform: uppercase;
  opacity: 1;
  letter-spacing: 0.17px;
  font-family: "SF Pro Display" !important;
  white-space: nowrap;
}
.market-left .tablewrap table tr td.green {
  color: #00B16B;
}
.market-left .tablewrap table tr td.red {
  color: #EE404A;
}
@media (max-width: 767px) {
  .market-left .tablewrap table tr td {
    font-size: 12px;
    padding: 10px;
  }
}
.market-left .tablewrap table tr .firstcol {
  color: #333333;
  font-size: 14px;
  line-height: 16px;
  text-transform: uppercase;
  opacity: 1;
  letter-spacing: 0.17px;
  font-weight: 500;
  font-family: "SF Pro Display" !important;
  position: sticky;
  left: 0;
  background: #ffffff;
  z-index: 9;
}
@media (max-width: 767px) {
  .market-left .tablewrap table tr .firstcol {
    font-size: 12px;
    white-space: nowrap;
    padding: 10px 15px;
  }
}
.market-left .tablewrap table tr .firstcol.cursor-pointer-underscore:hover {
  text-decoration: none;
  color: #004393;
}

.sm-ttl {
  font-size: 20px;
  color: #000000;
  font-weight: 600;
  margin: 0;
  font-family: "SFProText";
  letter-spacing: 0.24px;
}
@media (max-width: 767px) {
  .sm-ttl {
    font-size: 16px;
  }
}

.view {
  display: flex;
  align-items: center;
  text-decoration: none;
  padding-left: 15px;
}
.view .viewall {
  margin-left: 12px;
  color: #004393;
  font-size: 14px;
  line-height: 16px;
  font-weight: 600;
}

.tablewrap-parent {
  display: block;
  min-height: 290px;
  overflow: hidden;
  position: relative;
  border: 1px solid #F4F3F8;
  border-radius: 8px;
  margin-top: 32px;
}
.tablewrap-parent .loader-css-small {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
@media (max-width: 767px) {
  .tablewrap-parent {
    min-height: 225px;
  }
}`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 17193:
/*!***********************************************************************!*\
  !*** ./src/app/common-module/header/header.component.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "@if (false) {\r\n  <div class=\"marqueewrap\">\r\n    <span id=\"dashboard-indices\"></span>\r\n    <!-- <div class=\"prev-arrow\">\r\n    <img src=\"../../../assets/images/jiffy-new-dashboard/prev-ico.svg\">\r\n  </div> -->\r\n  <marquee onmouseover=\"this.stop();\" onmouseout=\"this.start();\">\r\n    @for (indices of indicesList; track indices; let i = $index) {\r\n      <ul>\r\n        @for (indice of indices; track indice; let j = $index) {\r\n          <li\r\n            (click)=\"redirectToCompany(indice)\"\r\n            >\r\n            {{ indice.IndexName\r\n            }}<span class=\"percentage {{ indice.textColor }}\">\r\n            {{ indice.LTP | segment : indice.mappedSegmentId }} ({{\r\n            indice.textColor == \"text-pink\" ? \"-\" : \"\"\r\n            }}{{ indice.percent | value : \"1.2-2\" }} %)</span\r\n            >\r\n          </li>\r\n        }\r\n        <!-- <li *ngFor=\"let indice of indices;let j=index;\" (click)=\"redirectToCompany(indice)\">{{indice.IndexName}}<span class=\"percentage {{indice.textColor}}\"> {{indice.LTP | segment:indice.mappedSegmentId}} ({{indice.textColor == 'text-pink' ? '-' : '' }}{{indice.percent | value:'1.2-2'}} %)</span></li> -->\r\n      </ul>\r\n    }\r\n  </marquee>\r\n  <!-- <div class=\"nextarrow\">\r\n  <img src=\"../../../assets/images/jiffy-new-dashboard/next-ico.svg\">\r\n</div> -->\r\n</div>\r\n}\r\n\r\n@if (!(!sharedDataService?.userId || sharedDataService?.userId == 'guest')) {\r\n  <div\r\n    class=\"tag-rail-container\"\r\n    >\r\n    <div class=\"tag-rail\">\r\n      <div id=\"btnLeftCon\" class=\"btn-left-con\">\r\n        <i class=\"fa fa-angle-left btn-left\" aria-hidden=\"true\"></i>\r\n      </div>\r\n      <div class=\"rail-container\">\r\n        <span id=\"dashboard-indices\"></span>\r\n        <div class=\"rail\" id=\"carousel-rail\">\r\n          @for (indice of (indicesList && indicesList[0]?indicesList[0]: []); track indice; let i = $index) {\r\n            <span\r\n              id=\"{{ 'tag' + (i + 1) }}\"\r\n          [ngStyle]=\"{\r\n            width:\r\n              ((indice?.IndexName?.length || 0) +\r\n                ((indice?.LTP | segment : indice.mappedSegmentId)?.length ||\r\n                  0) +\r\n                ((indice?.percent | value : '1.2-2')?.length || 0)) *\r\n                11 -\r\n              10 +\r\n              'px'\r\n          }\"\r\n              (click)=\"redirectToCompany(indice)\"\r\n              class=\"carousel-tag tag-selected\"\r\n              >{{ indice.IndexName\r\n              }}<span class=\"percentage {{ indice.textColor }} carousel-percentage\">\r\n              {{ indice.LTP | segment : indice.mappedSegmentId }}\r\n              @if (indicesVisibility) {\r\n                <span class=\"percentage-section sec1\">\r\n                  ({{ indice.textColor == \"text-pink\" ? \"-\" : \"\"\r\n                  }}{{ indice.percent | value : \"1.2-2\" }} %)\r\n                </span>\r\n              }\r\n              @if (!indicesVisibility) {\r\n                <span class=\"percentage-section sec2\">\r\n                  ({{ indice.textColor == \"text-pink\" ? \"-\" : \"\"\r\n                  }}{{ indice.difference | value : \"1.2-2\" }})\r\n                </span>\r\n              }\r\n            </span></span\r\n            >\r\n          }\r\n          <!-- <span id=\"tag1\" class=\"carousel-tag tag-selected\">All</span>\r\n          <span id=\"tag2\" class=\"carousel-tag\">Action</span>\r\n          <span id=\"tag3\" class=\"carousel-tag\">Disaster thriller</span>\r\n          <span id=\"tag4\" class=\"carousel-tag\">Drama</span><span id=\"tag5\" class=\"carousel-tag\">Fantasy</span><span id=\"tag6\" class=\"carousel-tag\">Horror</span><span id=\"tag7\" class=\"carousel-tag\">Mystery</span><span id=\"tag8\" class=\"carousel-tag\">Psychological thriller</span><span id=\"tag9\" class=\"carousel-tag\">Thriller</span><span id=\"tag10\" class=\"carousel-tag\">Western</span><span id=\"tag11\" class=\"carousel-tag\">Crime thriller</span><span id=\"tag12\" class=\"carousel-tag\">Comedy</span><span id=\"tag13\" class=\"carousel-tag\">Romance</span><span id=\"tag14\" class=\"carousel-tag\">Techno thriller</span><span id=\"tag15\" class=\"carousel-tag\">War and military action</span><span id=\"tag16\" class=\"carousel-tag\">Spy and espionage action</span><span id=\"tag17\" class=\"carousel-tag\">Martial arts action</span><span id=\"tag18\" class=\"carousel-tag\">Western shoot ‘em up action</span><span id=\"tag19\" class=\"carousel-tag\">Action hybrid genres</span><span id=\"tag20\" class=\"carousel-tag\">Slapstick comedy</span><span id=\"tag21\" class=\"carousel-tag\">Black comedy</span><span id=\"tag22\" class=\"carousel-tag\">Found footage Horror</span><span id=\"tag23\" class=\"carousel-tag\">Cyberpunk</span><span id=\"tag24\" class=\"carousel-tag\">Space Opera</span><span id=\"tag25\" class=\"carousel-tag\">Dacoit Westerns</span><span id=\"tag26\" class=\"carousel-tag\">Romantic Drama</span><span id=\"tag27\" class=\"carousel-tag\">Spy Thriller</span><span id=\"tag28\" class=\"carousel-tag\">Portal fantasy</span><span id=\"tag29\" class=\"carousel-tag\">Historical Romance</span><span id=\"tag30\" class=\"carousel-tag\">Invasion apocalypse</span><span id=\"tag31\" class=\"carousel-tag\">The Wuxia film</span><span id=\"tag32\" class=\"carousel-tag\">Karate films</span><span id=\"tag33\" class=\"carousel-tag\">Zombie apocalypse</span><span id=\"tag34\" class=\"carousel-tag\">Urban fantasy</span><span id=\"tag35\" class=\"carousel-tag\">Sword and sorcery</span><span id=\"tag36\" class=\"carousel-tag\">Magical realism</span><span id=\"tag37\" class=\"carousel-tag\">Conspiracy Thriller</span><span id=\"tag38\" class=\"carousel-tag\">Chick Flick</span> -->\r\n        </div>\r\n      </div>\r\n      <div id=\"btnRightCon\" class=\"btn-right-con\">\r\n        <i class=\"fa fa-angle-right btn-right\" aria-hidden=\"true\"></i>\r\n      </div>\r\n    </div>\r\n  </div>\r\n}\r\n\r\n<div style=\"clear: both\"></div>\r\n\r\n<header\r\n  class=\"navigation navbar-fixed\"\r\n  [class.scroll-bg]=\"isScroll\"\r\n  [style.top]=\"\r\n    !sharedDataService?.userId || sharedDataService?.userId == 'guest'\r\n      ? 0\r\n      : null\r\n  \"\r\n  >\r\n  <nav class=\"navbar navbar-default cust-navbar\" role=\"navigation\">\r\n    <div class=\"navbar-header navbar-header-left\">\r\n      <button\r\n        type=\"button\"\r\n        class=\"navbar-toggle {{ activeClass ? 'menu-open' : '' }}\"\r\n        (click)=\"menuClass()\"\r\n        >\r\n        <span class=\"icon-bar\"></span>\r\n\r\n        <span class=\"icon-bar\"></span>\r\n\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n\r\n      <!-- routerLink=\"/\" routerLinkActive=\"active\"  -->\r\n\r\n      <a class=\"navbar-brand\" (click)=\"navigateToHome()\">\r\n        <img\r\n          src=\"assets/images/finx-icons/finx-header-logo.svg\"\r\n          height=\"30\"\r\n          width=\"96\"\r\n          alt=\"Choice FinX - Online Trading Platform\"\r\n          class=\"img-responsive\"\r\n          />\r\n        </a>\r\n\r\n        <!-- *ngIf=\" (sharedDataService.userId && sharedDataService.userId != 'guest')\" -->\r\n\r\n        <!-- <div class=\"new-ltp-header\" *ngIf=\" (sharedDataService.userId && sharedDataService.userId != 'guest')\">\r\n\r\n        <ul class=\"reser ltp-mb\" *ngFor=\"let indices of indicesList;let i=index;\">\r\n\r\n          <li class=\"index\" *ngFor=\"let indice of indices;let j=index;\" (click)=\"redirectToCompany(indice)\">\r\n\r\n            <span class=\"font-12\">{{indice.IndexName}}</span>\r\n\r\n            <div class=\"\">\r\n\r\n              <span class=\"font-10 mb-5\">{{indice.LTP | segment:indice.mappedSegmentId}}</span>\r\n\r\n              <span class=\"font-10 inline-space {{indice.textColor}}\">{{indice.textColor == 'text-pink' ? '-' : '' }}\r\n\r\n                {{indice.difference |\r\n\r\n                segment:indice.mappedSegmentId}} ({{indice.textColor == 'text-pink' ? '-' : '' }}{{indice.percent |\r\n\r\n              value:'1.2-2'}} %) </span>\r\n\r\n            </div>\r\n\r\n          </li>\r\n\r\n        </ul>\r\n\r\n      </div> -->\r\n\r\n      <!-- add to watchlist functionality for mobile view -->\r\n\r\n      @if (sharedDataService.userId) {\r\n        <span\r\n          class=\"search-wrapper hidden-lg visible-md-block visible-xs-block\"\r\n          [class.open]=\"megasearchVisible\"\r\n          >\r\n          <div class=\"search-contain\">\r\n            <i\r\n              id=\"mobile-search\"\r\n              class=\"icon-search\"\r\n              aria-hidden=\"true\"\r\n              (click)=\"responsiveSearch()\"\r\n            ></i>\r\n            <form name=\"searchForm\" role=\"search\" #searchForm=\"ngForm\">\r\n              <div class=\"input-group\">\r\n                <input\r\n                  type=\"text\"\r\n                  #mobSearchInput\r\n                  [(ngModel)]=\"searchValue\"\r\n                  autocomplete=\"off\"\r\n                  class=\"form-control search1\"\r\n                  name=\"q\"\r\n                  aria-label=\"search\"\r\n                  placeholder=\"Search for scrips by entering minimum 3 letters\"\r\n                  (focus)=\"onFocusSearch()\"\r\n                  (keyup)=\"keyPress($event)\"\r\n                  (input)=\"onKeyup($event)\"\r\n                  />\r\n                </div>\r\n              </form>\r\n              @if (megasearchVisible) {\r\n                <i\r\n                  class=\"icon-Cancel\"\r\n                  aria-hidden=\"true\"\r\n                  (click)=\"closeSearch()\"\r\n                ></i>\r\n              }\r\n              <div #mobUlScroll class=\"mega-dropdown\">\r\n                <ul\r\n                  class=\"scrollable-list\"\r\n                  tabindex=\"0\"\r\n                  (scroll)=\"onScroll($event)\"\r\n                  >\r\n                  <ul class=\"result-tabs\">\r\n                    <li\r\n                      class=\"search1\"\r\n                      [class.active]=\"activeTab == 1\"\r\n                      (click)=\"activateTab(1, '')\"\r\n                      >\r\n                      ALL\r\n                    </li>\r\n                    <li\r\n                      class=\"search1\"\r\n                      [class.active]=\"activeTab == 2\"\r\n                      (click)=\"activateTab(2, 'EQ')\"\r\n                      >\r\n                      EQUITY\r\n                    </li>\r\n                    <li\r\n                      class=\"search1\"\r\n                      [class.active]=\"activeTab == 3\"\r\n                      (click)=\"activateTab(3, 'FO')\"\r\n                      >\r\n                      DERIVATIVE\r\n                    </li>\r\n                    <li\r\n                      class=\"search1\"\r\n                      [class.active]=\"activeTab == 4\"\r\n                      (click)=\"activateTab(4, 'COM')\"\r\n                      >\r\n                      COMMODITY\r\n                    </li>\r\n                    <li\r\n                      class=\"search1\"\r\n                      [class.active]=\"activeTab == 5\"\r\n                      (click)=\"activateTab(5, 'CD')\"\r\n                      >\r\n                      CURRENCY\r\n                    </li>\r\n                    <!-- <li class=\"search1\" [class.active]=\"activeTab==6\" (click)=\"selectList(6,[6,8,14,'6','8','14'])\">\r\n                    INDICES/SPOT\r\n                  </li> -->\r\n                </ul>\r\n                @if (\r\n                  recentSearchData.length > 0 &&\r\n                  (searchValue?.length == 0 || !searchValue) &&\r\n                  activeTab == 1\r\n                  ) {\r\n                  <li\r\n                    class=\"title\"\r\n                    >\r\n                    Recent Search\r\n                  </li>\r\n                }\r\n                @if (searchValue?.trim()?.length >= 3 && !searchData?.length) {\r\n                  <li\r\n                    class=\"text-center title\"\r\n                    >\r\n                    No Record Found\r\n                  </li>\r\n                }\r\n                <!--  <li class=\"text-center title\" *ngIf=\"searchValue?.trim()?.length>=3 && searchingData\">Fetching...</li>\r\n                -->\r\n                @for (item of searchData; track item; let i = $index) {\r\n                  <li\r\n                    class=\"clearfix scrip\"\r\n                    [class.active]=\"selectedItem == i\"\r\n                    (mouseover)=\"over(i)\"\r\n                    >\r\n                    <span class=\"col-xs-12 bold\" (click)=\"gotoCompanyPage(item)\"\r\n                      >{{ item.SecName }}\r\n                      @if (\r\n                        (item.SegmentId == 1 || item.SegmentId == 3) &&\r\n                        item.IsIndex == 0\r\n                        ) {\r\n                        <span\r\n                          >({{ item.Series }})</span\r\n                          >\r\n                      }\r\n                    </span>\r\n                    <span class=\"col-xs-12\" (click)=\"gotoCompanyPage(item)\">{{\r\n                      item.SecDesc\r\n                    }}</span>\r\n                    <span\r\n                      class=\"col-xs-12 text-small\"\r\n                      (click)=\"gotoCompanyPage(item)\"\r\n                      >{{\r\n                      item.ExchangeSegment == 7 ? \"NCDEX\" : item.ExchangeSegment\r\n                      }}</span\r\n                      >\r\n                      <!-- add to watchlist (16/03/2021) -->\r\n                      <span class=\"col-xs-2 text-small has-add-remove-section\">\r\n                        <div class=\"padding-0 clearfix add-remove-section\">\r\n                          @if (!item?.isAdded) {\r\n                            <div\r\n                              dropdown\r\n                              class=\"add-remove-section\"\r\n                              >\r\n                              <button\r\n                                dropdown-open\r\n                                class=\"btn add pull-right\"\r\n                                title=\"Add to Watchlist\"\r\n                                (click)=\"openPreLogin()\"\r\n                                [disabled]=\"isButtonDisabled\"\r\n                                >\r\n                                <i class=\"icon-Watchlist\" id=\"Watchlist\"></i>\r\n                              </button>\r\n                              @if (\r\n                                sharedDataService?.userId &&\r\n                                sharedDataService?.userId != 'guest'\r\n                                ) {\r\n                                <ul\r\n                                  class=\"dropdown-menu\"\r\n                                  role=\"menu\"\r\n                                  >\r\n                                  <li (click)=\"addRemoveWatchList(item, 1)\">\r\n                                    <a class=\"animate\">{{\r\n                                      watchlistNames &&\r\n                                      watchlistNames[1] &&\r\n                                      watchlistNames[1] != 1\r\n                                      ? watchlistNames[1] + \"(1)\"\r\n                                      : \"Watchlist 1\"\r\n                                    }}</a>\r\n                                  </li>\r\n                                  <li (click)=\"addRemoveWatchList(item, 2)\">\r\n                                    <a class=\"animate\">{{\r\n                                      watchlistNames &&\r\n                                      watchlistNames[2] &&\r\n                                      watchlistNames[2] != 2\r\n                                      ? watchlistNames[2] + \"(2)\"\r\n                                      : \"Watchlist 2\"\r\n                                    }}</a>\r\n                                  </li>\r\n                                  <li (click)=\"addRemoveWatchList(item, 3)\">\r\n                                    <a class=\"animate\">{{\r\n                                      watchlistNames &&\r\n                                      watchlistNames[3] &&\r\n                                      watchlistNames[3] != 3\r\n                                      ? watchlistNames[3] + \"(3)\"\r\n                                      : \"Watchlist 3\"\r\n                                    }}</a>\r\n                                  </li>\r\n                                  <li (click)=\"addRemoveWatchList(item, 4)\">\r\n                                    <a class=\"animate\">{{\r\n                                      watchlistNames &&\r\n                                      watchlistNames[4] &&\r\n                                      watchlistNames[4] != 4\r\n                                      ? watchlistNames[4] + \"(4)\"\r\n                                      : \"Watchlist 4\"\r\n                                    }}</a>\r\n                                  </li>\r\n                                  <li (click)=\"addRemoveWatchList(item, 5)\">\r\n                                    <a class=\"animate\">{{\r\n                                      watchlistNames &&\r\n                                      watchlistNames[5] &&\r\n                                      watchlistNames[5] != 5\r\n                                      ? watchlistNames[5] + \"(5)\"\r\n                                      : \"Watchlist 5\"\r\n                                    }}</a>\r\n                                  </li>\r\n                                </ul>\r\n                              }\r\n                            </div>\r\n                          }\r\n                          @if (item?.isAdded) {\r\n                            <button\r\n                              class=\"btn-gradient pull-right btn add-remove\"\r\n                              (click)=\"addRemoveWatchList(item)\"\r\n                              [class.bg-green]=\"item?.isAdded\"\r\n                              title=\"Remove from Watchlist\"\r\n                              [disabled]=\"isButtonDisabled\"\r\n                              >\r\n                              <span id=\"Watchlist\">{{\r\n                                item?.scripData?.ProfileId\r\n                              }}</span>\r\n                            </button>\r\n                          }\r\n                        </div>\r\n                      </span>\r\n                    </li>\r\n                  }\r\n                </ul>\r\n              </div>\r\n            </div>\r\n          </span>\r\n        }\r\n\r\n        @if (sharedDataService.userId && sharedDataService.userId != 'guest') {\r\n          <span\r\n            (click)=\"getNotifications()\"\r\n            dropdown\r\n            (onClose)=\"closeNotification()\"\r\n            class=\"notification-wrapper hidden-lg visible-xs-block\"\r\n            >\r\n            <a\r\n              class=\"animate\"\r\n              [class.constant-tilt-shake]=\"refreshNotificationConfig.isNotRefreshed\"\r\n              dropdown-open\r\n              >\r\n              <i class=\"icon-Notifiication\" aria-hidden=\"true\"></i>\r\n              @if (\r\n                notificationBadge > 0 ||\r\n                refreshNotificationConfig.isNotRefreshed ||\r\n                updateNotifications.length\r\n                ) {\r\n                <span\r\n                  class=\"animate notifications-badge badge\"\r\n                  >{{\r\n                  (notificationBadge || 0) +\r\n                  ((refreshNotificationConfig.isNotRefreshed && 1) || 0) +\r\n                  (updateNotifications.length || 0)\r\n                  }}</span\r\n                  >\r\n                }\r\n              </a>\r\n              <ul class=\"dropdown-menu notifications\" role=\"menu\">\r\n                <li class=\"head\">Notifications</li>\r\n                @if (refreshNotificationConfig.isNotRefreshed) {\r\n                  <li\r\n                    class=\"new clearfix notifications-scrollable\"\r\n                    >\r\n                    <div class=\"full-width\">\r\n                      <div class=\"col-xs-12 text-uppercase df-center-space-bw\">\r\n                        <span class=\"fullwidth font11 finx-color bold ellipsis\">\r\n                          {{ refreshNotificationConfig.message }}\r\n                        </span>\r\n                        <button class=\"btn\" (click)=\"updateVersion()\">\r\n                          <i class=\"fa fa-refresh c-yellow\"></i>\r\n                        </button>\r\n                      </div>\r\n                    </div>\r\n                  </li>\r\n                }\r\n                <div class=\"notifications-scrollable\">\r\n                  @if (updateNotifications.length) {\r\n                    <li class=\"new clearfix\">\r\n                      <div class=\"full-width\">\r\n                        <div\r\n                          class=\"col-xs-12 text-uppercase df-center-space-bw align-baseline\"\r\n                          >\r\n                          <span class=\"fullwidth font11 finx-color bold ellipsis\">\r\n                            finx Has been updated\r\n                          </span>\r\n                          <button class=\"btn\" (click)=\"showUpdateDetails()\">\r\n                            <i\r\n                              class=\"fa fa-info-circle c-yellow\"\r\n                              aria-hidden=\"true\"\r\n                            ></i>\r\n                          </button>\r\n                        </div>\r\n                      </div>\r\n                    </li>\r\n                  }\r\n                </div>\r\n                <div class=\"notifications-scrollable clearfix\">\r\n                  <!-- <li class=\"new clearfix\" *ngFor=\"let notification of updateNotifications\">\r\n                  <div class=\"full-width\">\r\n                    <div class=\"col-xs-12 text-uppercase df-center-space-bw\">\r\n                      <span class=\"fullwidth font11 text-gray bold ellipsis\">\r\n                        What's new in {{notification.version}}\r\n                      </span>\r\n                      <button class=\"btn c-color\" (click)=\"showUpdateDetails(notification)\">\r\n                        <i class=\"fa fa-external-link-square\" aria-hidden=\"true\">\r\n                        </i></button>\r\n                      </div>\r\n                    </div>\r\n                  </li> -->\r\n                  @for (notification of notifications; track notification) {\r\n                    <li\r\n                      [class.new]=\"!notification.isRead\"\r\n                      class=\"clearfix\"\r\n                      >\r\n                      <div class=\"full-width\">\r\n                        <div class=\"col-xs-12 text-uppercase text-left\">\r\n                          <span class=\"fullwidth font11 text-gray bold ellipsis\"\r\n                            >{{ notification.scripName }}\r\n                            <small>{{ notification.ExchangeSegment }}</small>\r\n                          </span>\r\n                        </div>\r\n                        <div class=\"col-xs-7 text-uppercase text-left\">\r\n                          <span\r\n                    class=\"font11 text-gray notify {{\r\n                      notification.buySell | lowercase\r\n                    }}\"\r\n                            >{{ notification.buySell }}</span\r\n                            >\r\n                            <span class=\"fullwidth font11 text-gray\"\r\n                              >/{{\r\n                              notification.productType == \"D\" ||\r\n                              notification.productType == \"AD\"\r\n                              ? \"DELIVERY\"\r\n                              : \"INTRADAY\"\r\n                              }}\r\n                            </span>\r\n                            <span\r\n                              class=\"fullwidth font11\"\r\n                              [hidden]=\"notification?.isConversion\"\r\n                              >&#64;{{\r\n                              notification.price | segment : notification.segmentId\r\n                              }}\r\n                            </span>\r\n                          </div>\r\n                          <div class=\"col-xs-5 text-uppercase text-right\">\r\n                            <span\r\n                              class=\"fullwidth font11 bold status\"\r\n                              [class.error]=\"notification?.isError\"\r\n                    [class.executed]=\"\r\n                      notification?.isSuccess ||\r\n                      notification.orderStatus == 'EXECUTED'\r\n                    \"\r\n                              >{{ notification.orderStatus }}</span\r\n                              >\r\n                            </div>\r\n                            <div class=\"col-xs-6 text-uppercase text-left\">\r\n                              <span class=\"font11 text-gray\">\r\n                                <small>{{ notification.time }}</small>\r\n                              </span>\r\n                            </div>\r\n                            <div class=\"col-xs-6 text-uppercase text-right\">\r\n                              <span class=\"fullwidth font11 bold text-gray\">\r\n                                {{ notification.isQtyOrLot || \"QTY\" }}:\r\n                                {{\r\n                                notification?.responseTag == 3 ||\r\n                                notification?.responseTag == 6\r\n                                ? notification.pendingQty\r\n                                : notification.quantity\r\n                                }}\r\n                              </span>\r\n                            </div>\r\n                            <div class=\"col-xs-12\" [hidden]=\"!notification.error\">\r\n                              <span class=\"fullwidth text-center error-msg font11\">\r\n                                {{ notification.error }}</span\r\n                                >\r\n                              </div>\r\n                            </div>\r\n                          </li>\r\n                        }\r\n                      </div>\r\n                      <li\r\n                        class=\"text-center no-data-container\"\r\n            [hidden]=\"\r\n              (notifications && notifications.length > 0) ||\r\n              updateNotifications?.length > 0 ||\r\n              refreshNotificationConfig.isNotRefreshed\r\n            \"\r\n                        >\r\n                        <div class=\"no-result-wrapper\">\r\n                          <img\r\n                            src=\"assets/images/no-notification-new.png\"\r\n                            width=\"186\"\r\n                            height=\"144\"\r\n                            />\r\n                            <p text-center class=\"no-result-title\">No Notifications</p>\r\n                            <p text-center class=\"no-result-text\">\r\n                              Nothing to show right now! Looks like you haven’t traded\r\n                              recently.\r\n                            </p>\r\n                          </div>\r\n                        </li>\r\n                      </ul>\r\n                    </span>\r\n                  }\r\n                </div>\r\n\r\n    <div class=\"navbar-header-right\">\r\n      <div class=\"row flex-head-new\">\r\n        <div\r\n          class=\"cust-menu-header {{ activeClass ? 'collapse-menu' : '' }}\"\r\n          id=\"\"\r\n        >\r\n          <ul\r\n            class=\"cust-menu reset\"\r\n            [class.searchOpen]=\"\r\n              megasearchVisible &&\r\n              (!sharedDataService.userId || sharedDataService.userId == 'guest')\r\n            \"\r\n                        >\r\n                        <li style=\"display: none\">\r\n                          <form action=\"#\" method=\"GET\" role=\"search\">\r\n                            <div class=\"input-group\">\r\n                              <input\r\n                                type=\"text\"\r\n                                class=\"form-control\"\r\n                                name=\"q\"\r\n                                placeholder=\"Search for snippets\"\r\n                                />\r\n\r\n                                <span class=\"input-group-btn\">\r\n                                  <button class=\"btn btn-primary\" type=\"submit\">\r\n                                    <span class=\"glyphicon glyphicon-search\"></span>\r\n                                  </button>\r\n\r\n                                  <button class=\"btn btn-danger\" type=\"reset\">\r\n                                    <span class=\"glyphicon glyphicon-remove\"></span>\r\n                                  </button>\r\n                                </span>\r\n                              </div>\r\n                            </form>\r\n                          </li>\r\n\r\n                      <li\r\n                        data-toggle=\"collapse\"\r\n                        data-target=\"#bs-example-navbar-collapse-1\"\r\n                        (click)=\"activateRoute('post/portfolio/net-position')\"\r\n              [class.active]=\"\r\n                sharedDataService.fromRoute == 'post/portfolio/net-position'\r\n              \"\r\n                        >\r\n                        @if (\r\n                          sharedDataService.userId &&\r\n                          sharedDataService.userId != 'guest'\r\n                          ) {\r\n                          <a\r\n                            routerLink=\"/post/portfolio/net-position\"\r\n                [class.active]=\"\r\n                  sharedDataService.fromRoute == 'post/portfolio/net-position'\r\n                \"\r\n                            class=\"animate\"\r\n                            ><u>P</u>ositions</a\r\n                            >\r\n                        }\r\n                      </li>\r\n\r\n                      <li\r\n                      data-toggle=\"collapse\"\r\n                      data-target=\"#bs-example-navbar-collapse-1\"\r\n                      (click)=\"activateRoute('post/portfolio/net-position')\"\r\n            [class.active]=\"\r\n              sharedDataService.fromRoute == 'post/portfolio/net-position'\r\n            \"\r\n                      >\r\n                      @if (\r\n                        sharedDataService.userId &&\r\n                        sharedDataService.userId != 'guest'\r\n                        ) {\r\n                        <a\r\n                          routerLink=\"/post/portfolio/net-position\"\r\n              [class.active]=\"\r\n                sharedDataService.fromRoute == 'post/portfolio/net-position'\r\n              \"\r\n                          class=\"animate\"\r\n                          ><u>P</u>ositions</a\r\n                          >\r\n                      }\r\n                    </li>\r\n                      <li\r\n                        data-toggle=\"collapse\"\r\n                        data-target=\"#bs-example-navbar-collapse-1\"\r\n                        (click)=\"activateRoute('post/portfolio/holdings')\"\r\n              [class.active]=\"\r\n                sharedDataService.fromRoute == 'post/portfolio/holdings' ||\r\n                sharedDataService.fromRoute == 'post/portfolio/mf-holdings'\r\n              \"\r\n                        >\r\n                        @if (\r\n                          sharedDataService.userId &&\r\n                          sharedDataService.userId != 'guest'\r\n                          ) {\r\n                          <a\r\n                            routerLink=\"/post/portfolio/holdings\"\r\n                            class=\"animate\"\r\n                [class.active]=\"\r\n                  sharedDataService.fromRoute == 'post/portfolio/holdings' ||\r\n                  sharedDataService.fromRoute == 'post/portfolio/mf-holdings'\r\n                \"\r\n                            ><u>H</u>oldings</a\r\n                            >\r\n                          }\r\n                        </li>\r\n\r\n                        @if (\r\n                          sharedDataService.userId && sharedDataService.userId != 'guest'\r\n                          ) {\r\n                          <li\r\n                            data-toggle=\"collapse\"\r\n                            data-target=\"#bs-example-navbar-collapse-1\"\r\n                            [class.active]=\"sharedDataService.fromRoute == 'client/orderBook'\"\r\n                            >\r\n                            <a\r\n                              class=\"animate\"\r\n                              (click)=\"activateRoute('client/orderBook')\"\r\n                              routerLink=\"/client/orderBook\"\r\n                              routerLinkActive=\"active\"\r\n                              >\r\n                              <u>O</u>rderbook</a\r\n                              >\r\n                            </li>\r\n                          }\r\n\r\n                          @if (\r\n                            sharedDataService.userId && sharedDataService.userId != 'guest'\r\n                            ) {\r\n                            <li\r\n                              data-toggle=\"collapse\"\r\n                              data-target=\"#bs-example-navbar-collapse-1\"\r\n                              (click)=\"activateRoute('client/funds')\"\r\n                              [class.active]=\"sharedDataService.fromRoute == 'client/funds'\"\r\n                              >\r\n                              <a\r\n                                routerLink=\"/client/funds\"\r\n                                routerLinkActive=\"active\"\r\n                                class=\"animate\"\r\n                                ><u>F</u>unds</a\r\n                                >\r\n                              </li>\r\n                            }\r\n\r\n    \r\n                \r\n\r\n                    \r\n\r\n                          @if (\r\n                            sharedDataService.userId && sharedDataService.userId != 'guest'\r\n                            ) {\r\n                            <li\r\n                              (click)=\"getNotifications()\"\r\n                              dropdown\r\n                              (onClose)=\"closeNotification()\"\r\n                              class=\"notification-wrapper left-menu-cust\"\r\n                              >\r\n                              <a\r\n                                class=\"animate pos-rel\"\r\n                [class.constant-tilt-shake]=\"\r\n                  refreshNotificationConfig.isNotRefreshed\r\n                \"\r\n                                dropdown-open>\r\n                                <i class=\"icon-Notifiication\" aria-hidden=\"true\"></i>\r\n                                @if (\r\n                                  notificationBadge > 0 ||\r\n                                  refreshNotificationConfig.isNotRefreshed ||\r\n                                  updateNotifications.length\r\n                                  ) {\r\n                                  <span\r\n                                    class=\"animate notifications-badge badge\"\r\n                                    >{{\r\n                                    (notificationBadge || 0) +\r\n                                    ((refreshNotificationConfig.isNotRefreshed && 1) || 0) +\r\n                                    (updateNotifications.length || 0)\r\n                                    }}</span\r\n                                    >\r\n                                  }\r\n                                </a>\r\n                                <ul class=\"dropdown-menu notifications\" role=\"menu\">\r\n                                  <li class=\"head\">Notifications</li>\r\n                                  @if (refreshNotificationConfig.isNotRefreshed) {\r\n                                    <div\r\n                                      class=\"notifications-scrollable\"\r\n                                      >\r\n                                      <li class=\"new clearfix\">\r\n                                        <div class=\"full-width\">\r\n                                          <div class=\"col-xs-12 text-uppercase df-center-space-bw\">\r\n                                            <span class=\"fullwidth font11 finx-color bold ellipsis\">\r\n                                              {{ refreshNotificationConfig.message }}\r\n                                            </span>\r\n                                            <button class=\"btn\" (click)=\"updateVersion()\">\r\n                                              <i class=\"fa fa-refresh c-yellow\"></i>\r\n                                            </button>\r\n                                          </div>\r\n                                        </div>\r\n                                      </li>\r\n                                    </div>\r\n                                  }\r\n                                  <div class=\"notifications-scrollable\">\r\n                                    @if (updateNotifications.length) {\r\n                                      <li (click)=\"showUpdateDetails()\" class=\"new clearfix pointer\">\r\n                                        <div class=\"full-width\">\r\n                                          <div\r\n                                            class=\"col-xs-12 text-uppercase df-center-space-bw align-baseline\"\r\n                                            >\r\n                                            <span class=\"fullwidth font11 finx-color bold ellipsis\">\r\n                                              finx Has been updated\r\n                                            </span>\r\n                                            <button class=\"btn\">\r\n                                              <i\r\n                                                class=\"fa fa-info-circle c-yellow\"\r\n                                                aria-hidden=\"true\"\r\n                                              ></i>\r\n                                            </button>\r\n                                          </div>\r\n                                        </div>\r\n                                      </li>\r\n                                    }\r\n                                  </div>\r\n                                  <div class=\"notifications-scrollable\">\r\n                                    @for (notification of notifications; track notification) {\r\n                                      <li\r\n                                        [class.new]=\"!notification.isRead\"\r\n                                        class=\"clearfix\"\r\n                                        >\r\n                                        <div class=\"full-width\">\r\n                                          <div class=\"col-xs-12 text-uppercase text-left\">\r\n                                            <span class=\"fullwidth font11 text-gray bold ellipsis\"\r\n                                              >{{ notification.scripName }}\r\n                                              <small>{{ notification.ExchangeSegment }}</small>\r\n                                            </span>\r\n                                          </div>\r\n                                          <div class=\"col-xs-7 text-uppercase text-left\">\r\n                                            <span\r\n                          class=\"font11 text-gray notify {{\r\n                            notification.buySell | lowercase\r\n                          }}\"\r\n                                              >{{ notification.buySell }}</span\r\n                                              >\r\n                                              <span class=\"fullwidth font11 text-gray\"\r\n                                                >/{{\r\n                                                notification.productType == \"D\" ||\r\n                                                notification.productType == \"AD\"\r\n                                                ? \"DELIVERY\"\r\n                                                : \"INTRADAY\"\r\n                                                }}\r\n                                              </span>\r\n                                              <span\r\n                                                class=\"fullwidth font11\"\r\n                                                [hidden]=\"notification?.isConversion\"\r\n                                                >&#64;{{\r\n                                                notification.price\r\n                                                | segment : notification.segmentId\r\n                                                }}\r\n                                              </span>\r\n                                            </div>\r\n                                            <div class=\"col-xs-5 text-uppercase text-right\">\r\n                                              <span\r\n                                                class=\"fullwidth font11 bold status\"\r\n                                                [class.error]=\"notification?.isError\"\r\n                          [class.executed]=\"\r\n                            notification?.isSuccess ||\r\n                            notification.orderStatus == 'EXECUTED'\r\n                          \"\r\n                                                >{{ notification.orderStatus }}</span\r\n                                                >\r\n                                              </div>\r\n                                              <div class=\"col-xs-6 text-uppercase text-left\">\r\n                                                <span class=\"font11 text-gray\">\r\n                                                  <small>{{ notification.time }}</small>\r\n                                                </span>\r\n                                              </div>\r\n                                              <div class=\"col-xs-6 text-uppercase text-right\">\r\n                                                <span class=\"fullwidth font11 bold text-gray\">\r\n                                                  {{ notification.isQtyOrLot || \"QTY\" }}:\r\n                                                  {{ notification.quantity }}\r\n                                                </span>\r\n                                              </div>\r\n                                              <div class=\"col-xs-12\" [hidden]=\"!notification.error\">\r\n                                                <span class=\"fullwidth text-center error-msg font11\">\r\n                                                  {{ notification.error }}</span\r\n                                                  >\r\n                                                </div>\r\n                                              </div>\r\n                                            </li>\r\n                                          }\r\n                                        </div>\r\n                                        <li\r\n                                          class=\"text-center no-data-container\"\r\n                  [hidden]=\"\r\n                    (notifications && notifications.length > 0) ||\r\n                    updateNotifications.length > 0 ||\r\n                    refreshNotificationConfig.isNotRefreshed\r\n                  \"\r\n                                          >\r\n                                          <div class=\"no-result-wrapper\">\r\n                                            <img\r\n                                              src=\"assets/images/no-notification-new.png\"\r\n                                              width=\"186\"\r\n                                              height=\"144\"\r\n                                              />\r\n                                              <p text-center class=\"no-result-title\">No Notifications</p>\r\n                                              <p text-center class=\"no-result-text\">\r\n                                                Nothing to show right now! Looks like you haven’t traded\r\n                                                recently.\r\n                                              </p>\r\n                                            </div>\r\n                                          </li>\r\n                                        </ul>\r\n                                      </li>\r\n                                    }\r\n\r\n\r\n                                  </ul>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </nav>\r\n\r\n                          <div class=\"clearfix\"></div>\r\n                        </header>\r\n\r\n                        <div style=\"clear: both\"></div>\r\n\r\n                        @if (isSignOut) {\r\n                          <div class=\"dialog\">\r\n                            <div class=\"dialog-content\">\r\n                              <div class=\"dialog-header clearfix\">\r\n                                <div class=\"col-md-12\">\r\n                                  <h4 class=\"popup-title\">Are you sure you want to sign out?</h4>\r\n                                </div>\r\n                              </div>\r\n                              <!-- <div class=\"dialog-section clearfix script-details\">\r\n                              <input type=\"checkbox\" [(ngModel)]=\"logoutAll\">Logout from all devices\r\n                            </div> -->\r\n                            <div class=\"dialog-footer clearfix\">\r\n                              <button class=\"btn buy\" [showFocus]=\"isSignOut\" (click)=\"logoutUser()\">\r\n                                YES, SIGN OUT\r\n                              </button>\r\n                              <button class=\"btn sell\" (click)=\"cancelSignout()\">NO, STAY IN</button>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      }\r\n\r\n                      <div style=\"clear: both\"></div>\r\n\r\n                      @if (shortcutKeyPopup) {\r\n                        <div class=\"dialog\">\r\n                          <div class=\"dialog-content\">\r\n                            <div class=\"dialog-header clearfix\">\r\n                              <div class=\"col-md-12\">\r\n                                <h4 class=\"popup-title\">Shortcut Keys</h4>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"dialog-section clearfix script-details\">\r\n                              <h5>Navigation</h5>\r\n                            <div class=\"col-sm-4 col-xs-6\">\r\n                              <label>OrderBook</label>\r\n                              <pre>O</pre>\r\n                            </div>\r\n                            <div class=\"col-sm-4 col-xs-6\">\r\n                              <label>TradeBook</label>\r\n                              <pre>T</pre>\r\n                            </div>\r\n                            <div class=\"col-sm-4 col-xs-6\">\r\n                              <label>Position</label>\r\n                              <pre>P</pre>\r\n                            </div>\r\n                            <div class=\"col-sm-4 col-xs-6\">\r\n                              <label>Holdings</label>\r\n                              <pre>H</pre>\r\n                            </div>\r\n                            <div class=\"col-sm-4 col-xs-6\">\r\n                              <label>Funds</label>\r\n                              <pre>F</pre>\r\n                            </div>\r\n                          <div class=\"col-sm-4 col-xs-6\">\r\n                            <label>My Alerts</label>\r\n                            <pre>A</pre>\r\n                          </div>\r\n                          <div class=\"col-sm-4 col-xs-6\">\r\n                            <label>Ledger</label>\r\n                            <pre>L</pre>\r\n                          </div>\r\n                          <div class=\"col-sm-4 col-xs-6\">\r\n                            <label>P&L Reports</label>\r\n                            <pre>R</pre>\r\n                          </div>\r\n                          <div class=\"col-sm-4 col-xs-6\">\r\n                            <label>P&L Reports</label>\r\n                            <pre>R</pre>\r\n                          </div>\r\n\r\n                          <div class=\"col-sm-4 col-xs-6\">\r\n                            <label>BUY</label>\r\n                            <pre>B/+</pre>\r\n                          </div>\r\n                          <div class=\"col-sm-4 col-xs-6\">\r\n                            <label>SELL</label>\r\n                            <pre>S/-</pre>\r\n                          </div>\r\n                          <div class=\"col-sm-6 col-xs-12\">\r\n                            <label>WatchList Navigation</label>\r\n                            <pre>Ctrl + Shift + 1/2/3/4/5</pre>\r\n                          </div>\r\n                          <div class=\"col-sm-6 col-xs-12\">\r\n                            <label>Open Search </label>\r\n                            <pre>Ctrl + Shift + F</pre>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"dialog-footer clearfix\">\r\n                          <button\r\n                            class=\"btn sell\"\r\n                            [showFocus]=\"shortcutKeyPopup\"\r\n                            (click)=\"closeShortcutKeyPopup()\"\r\n                            >\r\n                            Close\r\n                          </button>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  }\r\n\r\n                  <!-- Prelogin popup (15/03/2021) -->\r\n\r\n                  @if (showPreLogin) {\r\n                    <div class=\"dialog\">\r\n                      <div class=\"dialog-content\">\r\n                        <div class=\"dialog-header clearfix\">\r\n                          <div class=\"col-md-12\">\r\n                            <h4 class=\"popup-title\">\r\n                              Oops,Looks like you are not logged in. Please Login for Moving\r\n                              further.\r\n                            </h4>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"dialog-footer clearfix\">\r\n                          <button class=\"btn sell\" (click)=\"closePreLogin()\">Close</button>\r\n                          <button class=\"btn buy\" [showFocus]=\"showPreLogin\" (click)=\"login()\">\r\n                            Login\r\n                          </button>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  }\r\n\r\n\r\n\r\n                  <!-- <div class=\"dialog\" *ngIf=\"switchingAccountConfirm\">\r\n                  <div class=\"dialog-content width-35\">\r\n                    <div class=\"dialog-header clearfix\">\r\n                      <div class=\"col-md-12\">\r\n                        <h4 class=\"popup-title\">Switch Account</h4>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"dialog-section clearfix script-details\">\r\n                      <h5>Are you sure you want to Switch your Account?</h5>\r\n                    </div>\r\n\r\n    <div class=\"dialog-footer clearfix\">\r\n\r\n\r\n      <button class=\"btn buy\" (click)=\"switchUser()\">Yes</button>\r\n      <button class=\"btn sell\"  (click)=\"switchingAccountConfirm=false\">\r\n        No\r\n       </button>\r\n    </div>\r\n  </div>\r\n</div> -->\r\n\r\n\r\n                @if (productType) {\r\n                  <app-product-authorization-popup\r\n                    [productType]=\"productType\"\r\n                    (clickedOnAuthorization)=\"clickedOnAuthorizeProductPopup($event)\"\r\n                  ></app-product-authorization-popup>\r\n                }\r\n\r\n\r\n\r\n                @if (switchingAccountConfirm) {\r\n                  <div class=\"dialog footer-shortcutkey\">\r\n                    <div class=\"dialog-content\">\r\n                      <div class=\"dialog-section clearfix switch-account\">\r\n                        <h3 class=\"text-center\">Switch Profiles</h3>\r\n                        <h5 class=\"text-center\">Easily toggle between multiple user profile with just one click</h5>\r\n                        <div class=\"profiles\">\r\n                          @for (user of userList; track user) {\r\n                            <div class=\"profile {{user?.UserId == selectedUserId?'selected-profile':''}}\" (click)=\"selectedUserId = user?.UserId\" >\r\n                              <div class=\"initials\">\r\n                                {{user?.Initials||'U'}}\r\n                              </div>\r\n                              <div class=\"name\">\r\n                                {{user?.firstName||'User'}}\r\n                              </div>\r\n                              @if (user?.UserId == selectedUserId) {\r\n                                <div class=\"selected-userid\">\r\n                                  {{selectedUserId}}\r\n                                </div>\r\n                              }\r\n                            </div>\r\n                          }\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"dialog-footer clearfix\">\r\n                        <button class=\"btn buy\" (click)=\"switchUser()\" style=\"width: 85px;\">\r\n                          @if (!switchingUser) {\r\n                            Switch\r\n                          }\r\n                          @if (switchingUser) {\r\n                            <span class=\"buy-sell-loader\">\r\n                              <div class=\"spin-loader-buy\" aria-hidden=\"true\"></div>\r\n                            </span>\r\n                          }\r\n                        </button>\r\n                        <button\r\n                          class=\"btn sell\"  (click)=\"switchingAccountConfirm=false\">\r\n                          Close\r\n                        </button>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                }";

/***/ }),

/***/ 20125:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/common-module/product-authorization-popup/product-authorization-popup.component.html?ngResource ***!
  \*****************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"sleekbox-overlay sleekbox-popup-active z-index-99999 authorize-popup\">\r\n  <div class=\"sleekbox-popup\">\r\n    <div class=\"popup-sub-row\">\r\n      <div class=\"logowrap\">\r\n        <img src=\"../../../assets/images/choice.svg\" class=\"img-fluid\" />\r\n      </div>\r\n      <div class=\"algobullswrap\">\r\n        <span class=\"text\">Authorize</span>\r\n        @if (productType === 'algobullsAuthorized') {\r\n          <img\r\n            src=\"../../../assets/images/algobulls.png\"\r\n            class=\"img-fluid\"\r\n            />\r\n        }\r\n        @if (productType === 'modernalgosAuthorized') {\r\n          <img\r\n            src=\"../../../assets/images/modernalgos.svg\"\r\n            class=\"img-fluid\"\r\n            />\r\n        }\r\n\r\n        @if (productType === 'quantsappAuthorized') {\r\n          <img\r\n            src=\"../../../assets/images/dashboard-partner-product/quantsapp.svg\"\r\n            class=\"img-fluid\"\r\n            />\r\n        }\r\n        @if (productType === 'narnoliaAuthorized') {\r\n          <img\r\n            src=\"../../../assets/images/dashboard-partner-product/narnolia.png\"\r\n            class=\"img-fluid\"\r\n            />\r\n        }\r\n        @if (productType === 'pixstoxAuthorized') {\r\n          <img\r\n            src=\"../../../assets/images/dashboard-partner-product/pixstox.png\"\r\n            class=\"img-fluid\"\r\n            />\r\n        }\r\n        <!-- <span\r\n        class=\"modernalgos\"\r\n        *ngIf=\"productType === 'modernalgosAuthorized'\"\r\n        >MODERNALGOS</span\r\n        > -->\r\n        @if (productType === 'stocksemojiAuthorized') {\r\n          <img\r\n            src=\"../../../assets/images/stocksemoji.png\"\r\n            class=\"img-fluid\"\r\n            />\r\n        }\r\n        @if (productType === 'stockantsAuthorized') {\r\n          <img\r\n            src=\"../../../assets/images/stockants.png\"\r\n            class=\"img-fluid\"\r\n            />\r\n        }\r\n        @if (productType === 'tradetronAuthorized') {\r\n          <img\r\n            src=\"../../../assets/images/dashboard-partner-product/tradetron.jpg\"\r\n            class=\"img-fluid\"\r\n            />\r\n        }\r\n        @if (productType === 'algocrabAuthorized') {\r\n          <img\r\n            src=\"../../../assets/images/algocrab.png\"\r\n            class=\"img-fluid\"\r\n            />\r\n        }\r\n      </div>\r\n\r\n      <p class=\"subtext\">\"Permissions Required\"</p>\r\n\r\n      <ul>\r\n        <li>\r\n          Access and view your holdings,positions and transaction history.\r\n        </li>\r\n        <li>Place, modify and cancel orders.</li>\r\n        <li>View account balance and margins.</li>\r\n        <li>Access and view your profile</li>\r\n      </ul>\r\n\r\n      <p class=\"tnc\">\r\n        By click on authorize, you agree with <span class=\"note\" (click)=\"navigateTotc()\">Algo Trading T&C</span> and agree that you personal information may be shared with third party Service Providers/ Affilitates for the purpose of delivering the services to you\r\n      </p>\r\n      <div class=\"btnwrap\">\r\n        @if (!isAlgobullsAuthenticationServiceHit) {\r\n          <button\r\n            class=\"btn-bg\"\r\n            (click)=\"ClickOnAuthorization()\"\r\n            >\r\n            Authorize\r\n          </button>\r\n        }\r\n        @if (!isAlgobullsAuthenticationServiceHit) {\r\n          <button\r\n            class=\"cancel\"\r\n            (click)=\"ClickedOnCancel()\"\r\n            >\r\n            Cancel\r\n          </button>\r\n        }\r\n        @if (isAlgobullsAuthenticationServiceHit) {\r\n          <div class=\"loader\"></div>\r\n        }\r\n      </div>\r\n      <!-- <div class=\"\">\r\n      <button\r\n        class=\"cancel\"\r\n        (click)=\"ClickedOnCancel()\"\r\n        *ngIf=\"!isAlgobullsAuthenticationServiceHit\"\r\n        >\r\n        Cancel\r\n      </button>\r\n    </div> -->\r\n  </div>\r\n</div>\r\n</div>\r\n";

/***/ }),

/***/ 54718:
/*!*************************************************************************************************!*\
  !*** ./src/app/post-login-module/corporate-actions/corporate-actions.component.html?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"part6-left\">\r\n  <div class=\"wrapper\">\r\n    <div class=\"wrap-head-mn\">\r\n      <h3 class=\"sm-ttl\">Corporate Actions</h3>\r\n      <a (click)=\"redirectTo('/tools/event-calendar/upcoming-bonus-shares')\" class=\"view\">\r\n        <img src=\"../../../assets/images/jiffy-dashboard/view.svg\" width=\"15\" height=\"15\" alt=\"view\"> <span class=\"viewall\">VIEW ALL</span>\r\n      </a>\r\n    </div>\r\n\r\n    <div class=\"cardrow\">\r\n      <ngu-carousel #myCarousel [inputs]=\"carouselConfig\"\r\n        [dataSource]=\"eventsData\">\r\n\r\n        <ngu-tile *nguCarouselDef=\"let item; let i = index\" id=\"{{'corporate_'+i}}\" class=\"item\">\r\n          <div class=\"cardwrap {{eventsData?.length>2?'grab-sec':''}}\">\r\n            <div class=\"cardwrap-sub\"   >\r\n              <div class=\"card-heading\">\r\n                <div class=\"head\">\r\n                  <p class=\"mainhead\"><span class=\"\">{{item?.CompanyName}}\r\n                  </span> @if ((item.EventDateFormatted=='Today'||item.EventDateFormatted=='Tomorrow')) {\r\n                  <span  class=\"green-badge\">{{item.EventDateFormatted}}</span>\r\n                }</p>\r\n                <p class=\"date\">Annou. Date : {{item.AnnouncementDateFormatted}}</p>\r\n              </div>\r\n              <div class=\"count\">\r\n                <p class=\"datecount \">{{item?.LTP | segment : item?.SegmentID}}</p>\r\n                <p class=\"datepercent {{item?.class}}\">\r\n                  {{item?.Change||0 | segment : item?.SegmentID}} ({{item?.ChangePer | value :\r\n                  '1.2-2'}} %)\r\n                </p>\r\n              </div>\r\n            </div>\r\n            <div class=\"card-bottom\">\r\n              <ng-container> {{item?.lBookClosures?.Agenda||\"-\"}} </ng-container>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </ngu-tile>\r\n\r\n      <ul class=\"myPoint\" NguCarouselPoint>\r\n        @for (caroItem of myCarousel.pointNumbers; track caroItem; let j = $index) {\r\n          <li\r\n          [class.active]=\"j == myCarousel.activePoint\" (click)=\"myCarousel.moveTo(j)\"></li>\r\n        }\r\n      </ul>\r\n\r\n    </ngu-carousel>\r\n\r\n    <!--             <carousel>\r\n    <div class=\" carousel-cell cardwrap {{eventsData?.length>2?'grab-sec':''}}\"   *ngFor=\"let item of eventsData\">\r\n      <div class=\"cardwrap-sub\" (click)=\"goToCompany(item)\">\r\n        <div class=\"card-heading\">\r\n          <div class=\"head\">\r\n            <p class=\"mainhead\"><span class=\"\">{{item?.CompanyName}}\r\n              </span> <span class=\"green-badge\">{{item.EventDateFormatted}}</span></p>\r\n              <p class=\"date\">Annou. Date : {{item.AnnouncementDateFormatted}}</p>\r\n            </div>\r\n            <div class=\"count\">\r\n              <p class=\"datecount \">{{item?.LTP | segment : item?.SegmentID}}</p>\r\n              <p class=\"datepercent {{item?.class}}\">\r\n                {{item?.Change||0 | segment : item?.SegmentID}} ({{item?.ChangePer | value :\r\n                '1.2-2'}} %)\r\n              </p>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-bottom\">\r\n            <ng-container> {{item?.lBookClosures?.Agenda||\"-\"}} </ng-container>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </carousel> -->\r\n\r\n    @if (fetchingEvent) {\r\n      <div class=\"padding-50 m-auto\">\r\n        <div class=\"loader-css-small\">\r\n        </div>\r\n      </div>\r\n    }\r\n\r\n    @if (!fetchingEvent && !(eventsData&&eventsData?.length)) {\r\n      <div class=\"padding-50  m-auto text-center\">\r\n        <h4 class=\"text-center\">No Data Found</h4>\r\n      </div>\r\n    }\r\n    <!--          <div class=\"cardwrap\">\r\n    <div class=\"cardwrap-sub\">\r\n      <div class=\"card-heading\">\r\n        <div class=\"head\">\r\n          <p class=\"mainhead\">TALBROAUTO-EQ <span class=\"green-badge\">Today</span></p>\r\n          <p class=\"date\">Annou. Date : 26-Sep-2022</p>\r\n        </div>\r\n        <div class=\"count\">\r\n          <p class=\"datecount\">452.60</p>\r\n          <p class=\"datepercent red\">\r\n            -8.65 (-1.88 %)\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-bottom\">\r\n        Announcement of Annual general Meeting (AGM) of the company\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"cardwrap\">\r\n    <div class=\"cardwrap-sub\">\r\n      <div class=\"card-heading\">\r\n        <div class=\"head\">\r\n          <p class=\"mainhead\">TALBROAUTO-EQ <span class=\"green-badge\">Today</span></p>\r\n          <p class=\"date\">Annou. Date : 26-Sep-2022</p>\r\n        </div>\r\n        <div class=\"count\">\r\n          <p class=\"datecount\">452.60</p>\r\n          <p class=\"datepercent red\">\r\n            -8.65 (-1.88 %)\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-bottom\">\r\n        Announcement of Annual general Meeting (AGM) of the company\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"cardwrap\">\r\n    <div class=\"cardwrap-sub\">\r\n      <div class=\"card-heading\">\r\n        <div class=\"head\">\r\n          <p class=\"mainhead\">TALBROAUTO-EQ <span class=\"green-badge\">Today</span></p>\r\n          <p class=\"date\">Annou. Date : 26-Sep-2022</p>\r\n        </div>\r\n        <div class=\"count\">\r\n          <p class=\"datecount\">452.60</p>\r\n          <p class=\"datepercent red\">\r\n            -8.65 (-1.88 %)\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-bottom\">\r\n        Announcement of Annual general Meeting (AGM) of the company\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"cardwrap\">\r\n    <div class=\"cardwrap-sub\">\r\n      <div class=\"card-heading\">\r\n        <div class=\"head\">\r\n          <p class=\"mainhead\">TALBROAUTO-EQ <span class=\"green-badge\">Today</span></p>\r\n          <p class=\"date\">Annou. Date : 26-Sep-2022</p>\r\n        </div>\r\n        <div class=\"count\">\r\n          <p class=\"datecount\">452.60</p>\r\n          <p class=\"datepercent red\">\r\n            -8.65 (-1.88 %)\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-bottom\">\r\n        Announcement of Annual general Meeting (AGM) of the company\r\n      </div>\r\n    </div>\r\n  </div> -->\r\n</div>\r\n</div>\r\n</div>";

/***/ }),

/***/ 35750:
/*!*********************************************************************************************!*\
  !*** ./src/app/post-login-module/jiffy-dashboard/jiffy-dashboard.component.html?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"web-dashboard-main col-md-12\">\r\n  <!-- <div class=\"attr-banner new-bnr\" *ngIf=\"showExplore == 'true'\">\r\n  <img\r\n    src=\"../../../assets/images/jiffy-dashboard/new-tag.png\"\r\n    class=\"icon-img\"\r\n    alt=\"newTag\"\r\n    />\r\n    <p>\r\n      We have moved Partner Products navigation from <span>More Menu</span> to\r\n      <span>Dashboard</span><br />\r\n      for more seamless experience.\r\n      <a\r\n        href=\"javascript:void(0)\"\r\n        class=\"link-btn\"\r\n        (click)=\"scrollIntoView('partner-product')\"\r\n        >Explore Now</a\r\n        >\r\n      </p>\r\n\r\n      <a href=\"javascript:void(0)\" class=\"close-banr\" (click)=\"showHideExplore()\">\r\n        <svg\r\n          xmlns=\"http://www.w3.org/2000/svg\"\r\n          width=\"18.459\"\r\n          height=\"18.459\"\r\n          viewBox=\"0 0 18.459 18.459\"\r\n          >\r\n          <path\r\n            id=\"Path_117751\"\r\n            data-name=\"Path 117751\"\r\n            d=\"M18.052,12.459H12.459v5.594H10.594V12.459H5V10.594h5.594V5h1.865v5.594h5.594Z\"\r\n            transform=\"translate(9.229 -7.071) rotate(45)\"\r\n            fill=\"rgba(255,255,255,0.6)\"\r\n            />\r\n          </svg>\r\n        </a>\r\n      </div> -->\r\n\r\n      <!-- Delayed Message -->\r\n      @if (realtimeMessage && !(!userAccountStatus || !userAccountStatus?.onboardStatus || userAccountStatus?.onboardStatus=='C' )) {\r\n        <div class=\"delayed-msg \" id=\"delayed-message\">\r\n          <div class=\"msg-details\">\r\n            <img src=\"../assets/images/jiffy-dashboard/activation-icon.svg\" height=\"16\" width=\"16\" class=\"img-responsive\" alt=\"Activatation Message\"/>\r\n            <p>Real-time data will be available once the account is activated.</p>\r\n          </div>\r\n          <span class=\"close-icon\" (click)=\"closeRealtimeMessage()\">\r\n            <svg height=\"18.459\" viewBox=\"0 0 18.459 18.459\" width=\"18.459\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M18.052,12.459H12.459v5.594H10.594V12.459H5V10.594h5.594V5h1.865v5.594h5.594Z\" data-name=\"Path 117751\" fill=\"rgba(51, 51, 51, 1)\" id=\"Path_117751\" transform=\"translate(9.229 -7.071) rotate(45)\"></path></svg>\r\n          </span>\r\n        </div>\r\n      }\r\n\r\n      <div class=\"top-head\" >\r\n        <div class=\"{{ showExplore == 'false' ? 'close-banr-top' : 'headwrap' }}\">\r\n          <h3 class=\"heading\">Hi {{ config?.name||'User' | titlecase }}</h3>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- <div class=\"pending-user border-primary onboardStatus\">\r\n      <div class=\"validation-details\">\r\n        <img\r\n          src=\"../../../assets/icons/zero-amc.gif\"\r\n          class=\"icon-img\"\r\n          alt=\"Few Step Away\"\r\n          />\r\n          <p><span>Activate your Account & unlock exclusive access</span></p>\r\n        </div>\r\n        <div class=\"btn-banr\">\r\n          <button (click)=\"openLink()\" class=\"btn-cntine btn buy\">Setup FREE Account Now</button>\r\n        </div>\r\n      </div> -->\r\n      @if (!(!userAccountStatus || !userAccountStatus?.onboardStatus || userAccountStatus?.onboardStatus=='C' || userAccountStatus?.onboardStatus=='MF' )) {\r\n        <app-non-eq-sso></app-non-eq-sso>\r\n      }\r\n      <!-- Toast -->\r\n\r\n\r\n      @if ((!userAccountStatus || !userAccountStatus?.onboardStatus || userAccountStatus?.onboardStatus=='C' || userAccountStatus?.onboardStatus=='MF' )) {\r\n        <div class=\"portfolio-bar-top\">\r\n          <div class=\"portfolio-left\">\r\n            @if (\r\n              loader?.portfolioLoader || config?.eqCurrent || config?.mfCurrent\r\n              ) {\r\n              <div\r\n                class=\"without-banner\"\r\n                >\r\n                <h3 class=\"sm-ttl\" id=\"dashboard-portfolio\">My Assets</h3>\r\n                @if (!loader?.portfolioLoader) {\r\n                  <div class=\"cart-sm\">\r\n                    <div class=\"pl-total\">\r\n                      <h4>P&L Total</h4>\r\n                      @if (!loader?.portfolioLoader) {\r\n                        <h2 class=\"totl-value\">\r\n                          <span\r\n                [ngClass]=\"{\r\n                  'text-green': config?.totalpnl > 0,\r\n                  'text-red': config?.totalpnl < 0\r\n                }\"\r\n                            >{{ (config?.totalpnl | condense) || \"0\" }}</span\r\n                            >\r\n                            <span\r\n                              class=\"smt-txt\"\r\n                [ngClass]=\"{\r\n                  'text-green': config?.totalpnlperc > 0,\r\n                  'text-red': config?.totalpnlperc < 0\r\n                }\"\r\n                              >({{ (config?.totalpnlperc | number : \"1.2-2\") || \"0\" }}%)</span\r\n                              >\r\n                            </h2>\r\n                          }\r\n                          <div class=\"invst-value\">\r\n                            <div class=\"invst-cont\">\r\n                              <h4>Invested Amount</h4>\r\n                              @if (!loader?.portfolioLoader) {\r\n                                <h4 class=\"strng\">\r\n                                  {{ (config?.oaInv | condense) || \"0\" }}\r\n                                </h4>\r\n                              }\r\n                            </div>\r\n                            <div class=\"invst-cont\">\r\n                              <h4>Current Value</h4>\r\n                              @if (!loader?.portfolioLoader) {\r\n                                <h4 class=\"strng\">\r\n                                  {{ (config?.oaCurrent | condense) || \"0\" }}\r\n                                </h4>\r\n                              }\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        @if (!loader.portfolioLoader) {\r\n                          <div class=\"right-chart-card\">\r\n                            <ngx-charts-pie-chart\r\n                              [view]=\"config.view\"\r\n                              [arcWidth]=\"0.3\"\r\n                              [scheme]=\"config.colorScheme\"\r\n                              [results]=\"config.donutData\"\r\n                              [legend]=\"config.showLegend\"\r\n                              [explodeSlices]=\"config.explodeSlices\"\r\n                              [labels]=\"config.showLabels\"\r\n                              [doughnut]=\"config.doughnut\"\r\n                              [tooltipDisabled]=\"config.donutData\"\r\n                              (activate)=\"activateChartSection($event.value)\"\r\n                              (deactivate)=\"deactivateChartSection($event.value)\"\r\n                              >\r\n                              <ng-template #tooltipTemplate let-model=\"model\">\r\n                                <div class=\"dat-cont-chart\">\r\n                                  <label class=\"label-data\">{{ model.name }}</label\r\n                                    ><br />\r\n                                    <label class=\"sub-label-data\">\r\n                                      {{ (model.value | number : \"1.2-2\") + \"%\" }}</label\r\n                                      >\r\n                                    </div>\r\n                                  </ng-template>\r\n                                </ngx-charts-pie-chart>\r\n                                @if (!config.hightlightedChartSection) {\r\n                                  <span class=\"overvie-chart\"\r\n                                    >Overview</span\r\n                                    >\r\n                                }\r\n                                @if (\r\n                                  config.hightlightedChartSection &&\r\n                                  config.hightlightedChartSection.name &&\r\n                                  config.hightlightedChartSection.name === 'Mutual Funds'\r\n                                  ) {\r\n                                  <span\r\n                                    class=\"overvie-chart-value\"\r\n                                    ><span\r\n                                    ><small>Mutual Funds </small>\r\n                                    {{\r\n                                    config.hightlightedChartSection.value | number : \"1.2-2\"\r\n                                    }}%</span\r\n                                    ></span\r\n                                    >\r\n                                  }\r\n                                  @if (\r\n                                    config.hightlightedChartSection &&\r\n                                    config.hightlightedChartSection.name &&\r\n                                    config.hightlightedChartSection.name === 'Equity'\r\n                                    ) {\r\n                                    <span\r\n                                      class=\"overvie-chart-value\"\r\n                                      ><span\r\n                                      ><small>Stock </small>\r\n                                      {{\r\n                                      config.hightlightedChartSection.value | number : \"1.2-2\"\r\n                                      }}%</span\r\n                                      ></span\r\n                                      >\r\n                                    }\r\n                                  </div>\r\n                                }\r\n                              </div>\r\n                            }\r\n                            @if (loader?.portfolioLoader) {\r\n                              <div\r\n                                class=\"loader-css-small css-small-new\"\r\n                              ></div>\r\n                            }\r\n                          </div>\r\n                        }\r\n                        @if (\r\n                          !loader?.portfolioLoader &&\r\n                          ((!config?.eqCurrent && !config?.mfCurrent) ||\r\n                          (!config?.eqCurrent && !config?.mfCurrent && !config?.fund))\r\n                          ) {\r\n                          <div\r\n                            class=\"with-banner\"\r\n                            >\r\n                            <h2>Begin your <br />Joy of Earning!</h2>\r\n                            <h3>Start Investing Today</h3>\r\n                          </div>\r\n                        }\r\n                      </div>\r\n                      <div class=\"portfolio-right\">\r\n                        <div class=\"trade-etc-values\">\r\n                          @if (!loader.portfolioLoader) {\r\n                            @if (config?.eqCurrent) {\r\n                              <div\r\n                                id=\"equity-graph\"\r\n                                class=\"values-itm curs-point\"\r\n            (mouseenter)=\"\r\n              activateChartSection(\r\n                { name: 'Equity', value: config?.donutData[0].value },\r\n                'equity-graph',\r\n                'eq-blue',\r\n                0\r\n              )\r\n            \"\r\n            (mouseleave)=\"\r\n              deactivateChartSection(\r\n                { name: 'Equity', value: config?.donutData[0].value },\r\n                'equity-graph',\r\n                'eq-blue',\r\n                0\r\n              )\r\n            \"\r\n                                [class.eq-blue]=\"config?.hightlightedChartSection.name === 'Equity'\"\r\n                                (click)=\"redirectTo('eq')\"\r\n                                >\r\n                                <h4 class=\"eq-ttl\">Stock</h4>\r\n                                <h3>\r\n                                  {{ (config?.eqCurrent | condense) || \"0\" }}\r\n                                  <small\r\n                [ngClass]=\"{\r\n                  'text-green': config?.eqTotalPnl > 0,\r\n                  'text-red': config?.eqTotalPnl < 0\r\n                }\"\r\n                                    >{{ (config?.eqTotalPnl | number : \"1.2-2\") || \"0\" }}\r\n                                    <span\r\n                                      class=\"hd-mb\"\r\n                  [ngClass]=\"{\r\n                    'text-green': config?.eqTotalPnl > 0,\r\n                    'text-red': config?.eqTotalPnl < 0\r\n                  }\"\r\n                                      >({{\r\n                                      (config?.eqTotalPnlPercent | number : \"1.2-2\") || \"0\"\r\n                                      }}%)</span\r\n                                      ></small\r\n                                      >\r\n                                    </h3>\r\n                                  </div>\r\n                                }\r\n                                @if (!config?.eqCurrent) {\r\n                                  <div\r\n                                    class=\"values-itm add-value-itm\"\r\n                                    (click)=\"redirectTo('no-eq')\"\r\n                                    >\r\n                                    <a href=\"javascript:void(0)\" class=\"add-itm-sub\">\r\n                                      <svg\r\n                                        xmlns=\"http://www.w3.org/2000/svg\"\r\n                                        width=\"44\"\r\n                                        height=\"44\"\r\n                                        viewBox=\"0 0 44 44\"\r\n                                        >\r\n                                        <g\r\n                                          id=\"Group_98493\"\r\n                                          data-name=\"Group 98493\"\r\n                                          transform=\"translate(-753 -301)\"\r\n                                          >\r\n                                          <rect\r\n                                            id=\"Rectangle_4095\"\r\n                                            data-name=\"Rectangle 4095\"\r\n                                            width=\"44\"\r\n                                            height=\"44\"\r\n                                            rx=\"22\"\r\n                                            transform=\"translate(753 301)\"\r\n                                            fill=\"#eaf2fe\"\r\n                                            />\r\n                                            <g id=\"baseline-add-24px\" transform=\"translate(763 311)\">\r\n                                              <path\r\n                                                id=\"Path_912\"\r\n                                                data-name=\"Path 912\"\r\n                                                d=\"M24.4,16.088H16.088V24.4H13.316V16.088H5V13.316h8.316V5h2.772v8.316H24.4Z\"\r\n                                                transform=\"translate(-2.702 -2.702)\"\r\n                                                fill=\"#1B1464\"\r\n                                                />\r\n                                                <path\r\n                                                  id=\"Path_913\"\r\n                                                  data-name=\"Path 913\"\r\n                                                  d=\"M0,0H24V24H0Z\"\r\n                                                  transform=\"translate(0 0)\"\r\n                                                  fill=\"none\"\r\n                                                  />\r\n                                                </g>\r\n                                              </g>\r\n                                            </svg>\r\n                                            <h4>Add Stock</h4>\r\n                                          </a>\r\n                                        </div>\r\n                                      }\r\n                                      @if (config?.mfCurrent) {\r\n                                        <div\r\n                                          id=\"mf-graph\"\r\n                                          class=\"values-itm curs-point\"\r\n            [class.mf-yellow]=\"\r\n              config?.hightlightedChartSection.name === 'Mutual Funds'\r\n            \"\r\n            (mouseenter)=\"\r\n              activateChartSection(\r\n                { name: 'Mutual Funds', value: config?.donutData[1].value },\r\n                'mf-graph',\r\n                'mf-yellow',\r\n                1\r\n              )\r\n            \"\r\n            (mouseleave)=\"\r\n              deactivateChartSection(\r\n                { name: 'Mutual Funds', value: config?.donutData[1].value },\r\n                'mf-graph',\r\n                'mf-yellow',\r\n                1\r\n              )\r\n            \"\r\n                                          (click)=\"redirectTo('mf')\"\r\n                                          >\r\n                                          <h4 class=\"mf-ttl\">Mutual Funds</h4>\r\n                                          <h3>\r\n                                            {{ (config?.mfCurrent | condense) || \"0\" }}\r\n                                            <small\r\n                [ngClass]=\"{\r\n                  'text-green': config?.mfTotalPnl > 0,\r\n                  'text-red': config?.mfTotalPnl < 0\r\n                }\"\r\n                                              >{{ (config?.mfTotalPnl | number : \"1.2-2\") || \"0\" }}\r\n                                              <span\r\n                                                class=\"hd-mb\"\r\n                  [ngClass]=\"{\r\n                    'text-green': config?.mfTotalPnlPerc > 0,\r\n                    'text-red': config?.mfTotalPnlPerc < 0\r\n                  }\"\r\n                                                >({{\r\n                                                (config?.mfTotalPnlPerc | number : \"1.2-2\") || \"0\"\r\n                                                }}%)</span\r\n                                                ></small\r\n                                                >\r\n                                              </h3>\r\n                                            </div>\r\n                                          }\r\n                                          @if (!config?.mfCurrent) {\r\n                                            <div\r\n                                              class=\"values-itm add-value-itm curs-point\"\r\n                                              (click)=\"redirectTo('no-mf')\"\r\n                                              >\r\n                                              <a href=\"javascript:void(0)\" class=\"add-itm-sub\">\r\n                                                <svg\r\n                                                  xmlns=\"http://www.w3.org/2000/svg\"\r\n                                                  width=\"44\"\r\n                                                  height=\"44\"\r\n                                                  viewBox=\"0 0 44 44\"\r\n                                                  >\r\n                                                  <g\r\n                                                    id=\"Group_98493\"\r\n                                                    data-name=\"Group 98493\"\r\n                                                    transform=\"translate(-753 -301)\"\r\n                                                    >\r\n                                                    <rect\r\n                                                      id=\"Rectangle_4095\"\r\n                                                      data-name=\"Rectangle 4095\"\r\n                                                      width=\"44\"\r\n                                                      height=\"44\"\r\n                                                      rx=\"22\"\r\n                                                      transform=\"translate(753 301)\"\r\n                                                      fill=\"#eaf2fe\"\r\n                                                      />\r\n                                                      <g id=\"baseline-add-24px\" transform=\"translate(763 311)\">\r\n                                                        <path\r\n                                                          id=\"Path_912\"\r\n                                                          data-name=\"Path 912\"\r\n                                                          d=\"M24.4,16.088H16.088V24.4H13.316V16.088H5V13.316h8.316V5h2.772v8.316H24.4Z\"\r\n                                                          transform=\"translate(-2.702 -2.702)\"\r\n                                                          fill=\"#1B1464\"\r\n                                                          />\r\n                                                          <path\r\n                                                            id=\"Path_913\"\r\n                                                            data-name=\"Path 913\"\r\n                                                            d=\"M0,0H24V24H0Z\"\r\n                                                            transform=\"translate(0 0)\"\r\n                                                            fill=\"none\"\r\n                                                            />\r\n                                                          </g>\r\n                                                        </g>\r\n                                                      </svg>\r\n                                                      <h4>Mutual Funds</h4>\r\n                                                    </a>\r\n                                                  </div>\r\n                                                }\r\n                                                @if (config?.fund) {\r\n                                                  <div\r\n                                                    class=\"values-itm curs-point\"\r\n                                                    (click)=\"redirectTo('fund')\"\r\n                                                    >\r\n                                                    <h4>Funds Available</h4>\r\n                                                    <h3>\r\n                                                      ₹ {{ (config?.fund | number : \"1.2-2\") || \"0.00\" }}\r\n                                                      <small>Available</small>\r\n                                                    </h3>\r\n                                                  </div>\r\n                                                }\r\n                                                @if (!config?.fund) {\r\n                                                  <div\r\n                                                    class=\"values-itm curs-point\"\r\n                                                    (click)=\"redirectTo('no-fund')\"\r\n                                                    >\r\n                                                    <h4>Funds Available</h4>\r\n                                                    <h3>\r\n                                                      ₹ {{ (config?.fund | number : \"1.2-2\") || \"0.00\" }}\r\n                                                      <small class=\"add-amnt\">Add Fund</small>\r\n                                                    </h3>\r\n                                                  </div>\r\n                                                }\r\n                                              }\r\n                                              @if (loader.portfolioLoader) {\r\n                                                <div\r\n                                                  class=\"loader-css-small css-small-new\"\r\n                                                ></div>\r\n                                              }\r\n                                            </div>\r\n                                          </div>\r\n                                        </div>\r\n                                      }\r\n\r\n                                      <div class=\"dashboard-part2 dashboard-part3\">\r\n                                        <div class=\"part2-left part3-left\">\r\n                                          <div class=\"fund-banner\">\r\n                                            <div\r\n                                              class=\"sub-part-banner\"\r\n                                              id=\"south1\"\r\n                                              style=\"display: none\"\r\n          (click)=\"\r\n            mfRedirectionLink(\r\n              'mf/recommended-mutual-funds/tax-saving-investment-plans'\r\n            );\r\n            smartInvestmentRedirection('elss')\r\n          \"\r\n                                              >\r\n                                              <div class=\"banner-option\">\r\n                                                <div class=\"banner-caption\">\r\n                                                  <p class=\"caption-txt\">\r\n                                                    Invest in <span>Tax Saviour</span> Mutual Fund Basket <br />\r\n                                                    & save upto <span>₹46,800</span>\r\n                                                  </p>\r\n                                                  <div class=\"invest-btn\">\r\n                                                    <button class=\"btn-buy btn buy\">Invest Now</button>\r\n                                                  </div>\r\n                                                </div>\r\n                                                <div class=\"banner-image\">\r\n                                                  <div class=\"img-ico\">\r\n                                                    <img\r\n                                                      src=\"../../../assets/images/jiffy-new-dashboard/piggy-bank.gif\"\r\n                                                      class=\"img-ico-sm\"\r\n                                                      />\r\n                                                      <span class=\"tax-icon\"></span>\r\n                                                    </div>\r\n                                                  </div>\r\n                                                </div>\r\n                                              </div>\r\n                                              <div\r\n                                                class=\"sub-part-banner ban-bg2\"\r\n                                                id=\"south2\"\r\n                                                style=\"display: none\"\r\n          (click)=\"\r\n            mfRedirectionLink(\r\n              'mf/recommended-mutual-funds/tax-saving-investment-plans'\r\n            );\r\n            smartInvestmentRedirection('elss')\r\n          \"\r\n                                                >\r\n                                                <div class=\"banner-option\">\r\n                                                  <div class=\"banner-caption\">\r\n                                                    <p class=\"caption-txt\">\r\n                                                      <span>Save Tax</span> and <span>Chillax</span> with our Tax\r\n                                                      Saviour Basket!\r\n                                                    </p>\r\n                                                    <div class=\"invest-btn\">\r\n                                                      <button class=\"btn-buy btn buy\">Invest Now</button>\r\n                                                    </div>\r\n                                                  </div>\r\n                                                  <div class=\"banner-image\">\r\n                                                    <img\r\n                                                      src=\"../../../assets/images/jiffy-new-dashboard/wallet.gif\"\r\n                                                      />\r\n                                                    </div>\r\n                                                  </div>\r\n                                                </div>\r\n                                                <div\r\n                                                  class=\"sub-part-banner\"\r\n                                                  id=\"north1\"\r\n                                                  style=\"display: none\"\r\n          (click)=\"\r\n            mfRedirectionLink(\r\n              'mf/recommended-mutual-funds/tax-saving-investment-plans'\r\n            );\r\n            smartInvestmentRedirection('elss')\r\n          \"\r\n                                                  >\r\n                                                  <div class=\"banner-option\">\r\n                                                    <div class=\"banner-caption\">\r\n                                                      <p class=\"caption-txt\">\r\n                                                        Tax bachao aur <span>₹46,800</span> tak <br />\r\n                                                        kamao humaare <span>Tax Saviour Basket</span> ke saath!\r\n                                                      </p>\r\n                                                      <div class=\"invest-btn\">\r\n                                                        <button class=\"btn-buy btn buy\">Invest Now</button>\r\n                                                      </div>\r\n                                                    </div>\r\n                                                    <div class=\"banner-image\">\r\n                                                      <div class=\"img-ico\">\r\n                                                        <img\r\n                                                          src=\"../../../assets/images/jiffy-new-dashboard/piggy-bank.gif\"\r\n                                                          class=\"img-ico-sm\"\r\n                                                          />\r\n                                                          <span class=\"tax-icon\"></span>\r\n                                                        </div>\r\n                                                      </div>\r\n                                                    </div>\r\n                                                  </div>\r\n                                                  <div\r\n                                                    class=\"sub-part-banner ban-bg2\"\r\n                                                    id=\"north2\"\r\n                                                    style=\"display: none\"\r\n          (click)=\"\r\n            mfRedirectionLink(\r\n              'mf/recommended-mutual-funds/tax-saving-investment-plans'\r\n            );\r\n            smartInvestmentRedirection('elss')\r\n          \"\r\n                                                    >\r\n                                                    <div class=\"banner-option\">\r\n                                                      <div class=\"banner-caption\">\r\n                                                        <p class=\"caption-txt\">\r\n                                                          <span>Bachao Apna Dhan</span> <br />\r\n                                                          Invest Karo Humare <span>Tax Saviour Basket</span> ke sang!\r\n                                                        </p>\r\n                                                        <div class=\"invest-btn\">\r\n                                                          <button class=\"btn-buy btn buy\">Invest Now</button>\r\n                                                        </div>\r\n                                                      </div>\r\n                                                      <div class=\"banner-image\">\r\n                                                        <img\r\n                                                          src=\"../../../assets/images/jiffy-new-dashboard/wallet.gif\"\r\n                                                          />\r\n                                                        </div>\r\n                                                      </div>\r\n                                                    </div>\r\n                                                  </div>\r\n                                                  @if (userFlags?.promoteMfTaxSaver) {\r\n                                                    <div class=\"best-tax-saving\">\r\n                                                      @if (elssFundsListing?.length || checkFundsListing) {\r\n                                                        <div\r\n                                                          class=\"tax-saving-header\"\r\n                                                          >\r\n                                                          <div class=\"header-wrap\">\r\n                                                            <h3 class=\"sm-ttl\">Best <span>Tax Saving</span> Funds</h3>\r\n                                                            <div class=\"main-txt\">\r\n                                                              <img\r\n                                                                src=\"../../../assets/images/jiffy-new-dashboard/piggy.svg\"\r\n                                                                class=\"piggy-icon\"\r\n                                                                />\r\n                                                                <div>\r\n                                                                  <p class=\"js-nametag\">#ELSS</p>\r\n                                                                  <p class=\"js-nametag\">Save Tax</p>\r\n                                                                </div>\r\n                                                              </div>\r\n                                                            </div>\r\n                                                            @if (!checkFundsListing) {\r\n                                                              <div class=\"header-wrap2\">\r\n                                                                <span class=\"deadline\">Few day's left</span>\r\n                                                                <a\r\n                                                                  href=\"javascript:void(0)\"\r\n                                                                  class=\"view\"\r\n              (click)=\"\r\n                mfRedirectionLink(\r\n                  'mf/top-funds/best-elss-tax-saving-mutual-funds'\r\n                )\r\n              \"\r\n                                                                  >\r\n                                                                  <img\r\n                                                                    src=\"../../../assets/images/jiffy-dashboard/view.svg\"\r\n                                                                    alt=\"view\"\r\n                                                                    />\r\n                                                                    <span class=\"viewall\">VIEW ALL</span>\r\n                                                                  </a>\r\n                                                                </div>\r\n                                                              }\r\n                                                            </div>\r\n                                                          }\r\n                                                          @if (elssFundsListing?.length) {\r\n                                                            <div class=\"tax-saving-items\">\r\n                                                              @for (fund of elssFundsListing; track fund) {\r\n                                                                <div class=\"tax-saving-data\">\r\n                                                                  <div class=\"tax-saving-list\">\r\n                                                                    <div class=\"items col-width\">\r\n                                                                      <h5 style=\"cursor: pointer\" (click)=\"getRouteLink(fund)\">\r\n                                                                        {{ fund?.SchemeName }}\r\n                                                                      </h5>\r\n                                                                      <div class=\"star\">\r\n                                                                        <img\r\n                                                                          src=\"../../../assets/images/jiffy-new-dashboard/star.svg\"\r\n                                                                          />\r\n                                                                          <span class=\"str-ver value\">{{\r\n                                                                            fund?.CMSStarRatings\r\n                                                                            ? schemeReturnsToFixed(fund.CMSStarRatings, 1)\r\n                                                                            : \"\"\r\n                                                                          }}</span>\r\n                                                                        </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"items col-width2\">\r\n                                                                        <h6 class=\"perce\">\r\n                                                                          {{\r\n                                                                          schemeReturnsToFixed(fund.SchemeReturns.ThreeYearReturn, 2)\r\n                                                                          }}%\r\n                                                                        </h6>\r\n                                                                        <span class=\"value\">3 Yrs Returns</span>\r\n                                                                      </div>\r\n                                                                      <div class=\"items col-width3\">\r\n                                                                        <h6 class=\"price\">₹ {{ fund?.AUM | value : \"1.0-0\" }}</h6>\r\n                                                                        <span class=\"value\">AUM (Cr)</span>\r\n                                                                      </div>\r\n                                                                    </div>\r\n                                                                  </div>\r\n                                                                }\r\n                                                              </div>\r\n                                                            }\r\n                                                            @if (!elssFundsListing?.length && checkFundsListing) {\r\n                                                              <div\r\n                                                                style=\"height: 90px\"\r\n                                                                >\r\n                                                                <div style=\"margin-top: 50px\" class=\"loader-css-small\"></div>\r\n                                                                <div class=\"pagination-dots\"></div>\r\n                                                              </div>\r\n                                                            }\r\n                                                            @if (!elssFundsListing?.length && !checkFundsListing) {\r\n                                                              <div>\r\n                                                                <h5 class=\"text-center nodata\">No Data Found</h5>\r\n                                                              </div>\r\n                                                            }\r\n                                                          </div>\r\n                                                        }\r\n\r\n                                                        <div class=\"smart-invest-sec\">\r\n                                                          <h3 class=\"sm-ttl\" id=\"dashboard-smart-investment\">\r\n                                                            Smart Investments\r\n                                                          </h3>\r\n\r\n                                                          <div class=\"invest-sec-list\">\r\n                                                            <div class=\"sec-list-itm\">\r\n                                                              <a\r\n                                                                (click)=\"goToInvestica(); smartInvestmentRedirection('mf')\"\r\n                                                                class=\"list-itm-sub\"\r\n                                                                >\r\n                                                                <div class=\"list-itm-img\">\r\n                                                                  <img\r\n                                                                    src=\"assets/images/jiffy-new-dashboard/mf.svg\"\r\n                                                                    alt=\"MF\"\r\n                                                                    class=\"ico-smn\"\r\n                                                                    />\r\n                                                                    <span class=\"lbl-ribbon new-ribbon col-yell\">Popular</span>\r\n                                                                  </div>\r\n\r\n                                                                  <h4>Mutual Funds</h4>\r\n                                                                </a>\r\n                                                              </div>\r\n\r\n                                                              <div class=\"sec-list-itm\">\r\n                                                                <a\r\n                                                                  href=\"https://health.choiceinsurance.in/input/basic-details\"\r\n                                                                  target=\"_blank\"\r\n                                                                  class=\"list-itm-sub\"\r\n                                                                  (click)=\"smartInvestmentRedirection('insurance')\"\r\n                                                                  >\r\n                                                                  <div class=\"list-itm-img\">\r\n                                                                    <img\r\n                                                                      src=\"assets/images/jiffy-new-dashboard/insurance.svg\"\r\n                                                                      class=\"ico-smn\" width=\"37\" height=\"37\"\r\n                                                                      alt=\"Smart Insurance\"\r\n                                                                      />\r\n                                                                    </div>\r\n\r\n                                                                    <h4>Insurance</h4>\r\n                                                                  </a>\r\n                                                                </div>\r\n\r\n                                                                <div class=\"sec-list-itm\">\r\n                                                                  <a\r\n            (click)=\"\r\n            showToaster('ipo')\r\n              \"\r\n\r\n                                                                    class=\"list-itm-sub\"\r\n                                                                    >\r\n                                                                    <div class=\"list-itm-img\">\r\n                                                                      <img\r\n                                                                        src=\"assets/images/jiffy-new-dashboard/ipo.svg\"\r\n                                                                        alt=\"Ipo\" width=\"37\" height=\"37\"\r\n                                                                        class=\"ico-smn\"\r\n                                                                        />\r\n\r\n                                                                        @if (config?.openIPOCount) {\r\n                                                                          <span class=\"lbl-ribbon\"\r\n                                                                            >{{ config?.openIPOCount }}\r\n                                                                            Open</span\r\n                                                                            >\r\n                                                                        }\r\n                                                                      </div>\r\n\r\n                                                                      <h4>Invest in IPO</h4>\r\n                                                                    </a>\r\n                                                                  </div>\r\n                                                                  <!-- mfRedirectionLink('mf/top-funds/best-elss-tax-saving-mutual-funds'); -->\r\n                                                                  <!-- <div class=\"sec-list-itm\"\r\n                                                                  (click)=\"mfRedirectionLink('mf/top-funds/best-elss-tax-saving-mutual-funds');smartInvestmentRedirection('elss')\">\r\n\r\n                                                                  <a href=\"javascript:void(0)\" class=\"list-itm-sub\">\r\n\r\n                                                                    <div class=\"list-itm-img\">\r\n\r\n                                                                      <img src=\"assets/images/jiffy-new-dashboard/elss.svg\" class=\"ico-smn\">\r\n\r\n                                                                    </div>\r\n\r\n                                                                    <h4>ELSS</h4>\r\n\r\n                                                                  </a>\r\n\r\n                                                                </div> -->\r\n\r\n                                                                <div class=\"sec-list-itm\">\r\n                                                                  <a\r\n              (click)=\"\r\n                showToaster('secure-products')\r\n              \"\r\n                                                                    class=\"list-itm-sub\"\r\n                                                                    >\r\n                                                                    <div class=\"list-itm-img\">\r\n                                                                      <img\r\n                                                                        src=\"assets/images/jiffy-new-dashboard/secure-product.svg\"\r\n                                                                        class=\"ico-smn\" width=\"37\" height=\"37\"\r\n                                                                        alt=\"secure-product\"\r\n                                                                        />\r\n\r\n                                                                        <!-- <span class=\"lbl-ribbon new-ribbon\">New</span> -->\r\n                                                                      </div>\r\n\r\n                                                                      <h4>Secured Products</h4>\r\n                                                                    </a>\r\n                                                                  </div>\r\n\r\n                                                                  <div class=\"sec-list-itm\">\r\n                                                                    <a\r\n            (click)=\"\r\n            showToaster('buy-back')\r\n          \"\r\n                                                                      class=\"list-itm-sub\"\r\n                                                                      >\r\n                                                                      <div class=\"list-itm-img\">\r\n                                                                        <img\r\n                                                                          src=\"assets/images/jiffy-new-dashboard/buyback-icon.svg\"\r\n                                                                          class=\"ico-smn\" width=\"37\" height=\"37\"\r\n                                                                          alt=\"Buyback\"\r\n                                                                          />\r\n                                                                          <!-- TODO -->\r\n                                                                          <!-- <span class=\"lbl-ribbon\" *ngIf=\"config?.openIPOCount\"\r\n                                                                          >{{ config?.openIPOCount }}\r\n\r\n                                                                          Open</span\r\n                                                                          > -->\r\n                                                                        </div>\r\n                                                                        <h4>Buyback</h4>\r\n                                                                      </a>\r\n                                                                    </div>\r\n\r\n                                                                    <!-- <div class=\"sec-list-itm\">\r\n\r\n                                                                    <a class=\"list-itm-sub itm-sub-inactive\" (click)=\"smartInvestmentRedirection('fd')\">\r\n\r\n                                                                      <div class=\"list-itm-img\">\r\n\r\n                                                                        <img src=\"assets/images/jiffy-new-dashboard/fd.svg\" class=\"ico-smn\">\r\n\r\n                                                                        <span class=\"lbl-ribbon com-soon-ribbon\">Coming Soon</span>\r\n\r\n                                                                      </div>\r\n\r\n                                                                      <h4>FD</h4>\r\n\r\n                                                                    </a>\r\n\r\n                                                                  </div> -->\r\n\r\n                                                                  <!-- <div class=\"sec-list-itm\">\r\n\r\n                                                                  <a class=\"list-itm-sub itm-sub-inactive\">\r\n\r\n                                                                    <div class=\"list-itm-img\">\r\n\r\n                                                                      <img src=\"assets/images/jiffy-new-dashboard/nps.svg\" class=\"ico-smn\">\r\n\r\n                                                                      <span class=\"lbl-ribbon com-soon-ribbon\">Coming Soon</span>\r\n\r\n                                                                    </div>\r\n\r\n                                                                    <h4>NPS</h4>\r\n\r\n                                                                  </a>\r\n\r\n                                                                </div> -->\r\n                                                              </div>\r\n                                                            </div>\r\n\r\n                                                            <div class=\"wrapper top-picks\">\r\n                                                              <div class=\"circlewrap\">\r\n                                                                <div\r\n                                                                  class=\"progressdiv {{ config?.researchClass }}\"\r\n                                                                  [attr.data-percent]=\"config?.researchSuccessRatio\"\r\n                                                                  >\r\n                                                                  <svg\r\n                                                                    class=\"progress-n\"\r\n                                                                    height=\"50\"\r\n                                                                    version=\"1.1\"\r\n                                                                    viewport=\"0 0 100 100\"\r\n                                                                    width=\"50\"\r\n                                                                    xmlns=\"http://www.w3.org/2000/svg\"\r\n                                                                    >\r\n                                                                    <circle\r\n                                                                      cx=\"25\"\r\n                                                                      cy=\"25\"\r\n                                                                      fill=\"transparent\"\r\n                                                                      r=\"22\"\r\n                                                                      stroke-dasharray=\"150.4\"\r\n                                                                      stroke-dashoffset=\"0\"\r\n                                                                    ></circle>\r\n\r\n                                                                    <circle\r\n                                                                      [attr.class]=\"config?.classBars\"\r\n                                                                      cx=\"25\"\r\n                                                                      cy=\"25\"\r\n                                                                      fill=\"transparent\"\r\n                                                                      r=\"22\"\r\n                                                                      stroke-dasharray=\"150.4\"\r\n                                                                      stroke-dashoffset=\"0\"\r\n                                                                      style=\"stroke-dashoffset: 121.824\"\r\n                                                                    ></circle>\r\n                                                                  </svg>\r\n\r\n                                                                  <!-- <div role=\"progressbar\" aria-valuenow=\"75\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"--value:75\"></div> -->\r\n                                                                </div>\r\n\r\n                                                                <div class=\"successtext\">Success Ratio</div>\r\n                                                              </div>\r\n\r\n                                                              <div class=\"text\">\r\n                                                                <p class=\"heading\">Our Recommendations</p>\r\n\r\n                                                                <p class=\"subtext\">\r\n                                                                  Recommendations given by our experts for all types of Traders\r\n                                                                </p>\r\n                                                              </div>\r\n\r\n                                                              <button class=\"btn-buy btn buy\" (click)=\"redirectTo('research')\">\r\n                                                                See All Calls\r\n                                                              </button>\r\n                                                            </div>\r\n\r\n                                                            <div class=\"part7-left\">\r\n                                                              <div class=\"wrapper\">\r\n                                                                <div class=\"headwrap\">\r\n                                                                  <h3 class=\"sm-ttl\" id=\"dashboard-mf-basket\">MF Basket</h3>\r\n\r\n                                                                  @if (config?.mfBasket?.length) {\r\n                                                                    <a\r\n                                                                      href=\"javascript:void(0)\"\r\n                                                                      class=\"view\"\r\n                                                                      >\r\n                                                                      <img\r\n                                                                        src=\"../../../assets/images/jiffy-dashboard/view.svg\"\r\n                                                                        alt=\"view\"\r\n                                                                        />\r\n                                                                        <span class=\"viewall\" (click)=\"redirectTo('mf-basket')\"\r\n                                                                          >VIEW ALL</span\r\n                                                                          >\r\n                                                                        </a>\r\n                                                                      }\r\n                                                                    </div>\r\n\r\n                                                                    @if (config?.mfBasket.length) {\r\n                                                                      <div class=\"rowwrap\">\r\n                                                                        @if (!loader?.combinedBasketLoader) {\r\n                                                                          <ngu-carousel\r\n                                                                            #basketCarousel\r\n                                                                            [inputs]=\"basketCarouselConfig\"\r\n                                                                            [dataSource]=\"config?.mfBasket\"\r\n                                                                            >\r\n                                                                            <ngu-tile\r\n                                                                              *nguCarouselDef=\"let basket; let i = index\"\r\n                                                                              id=\"{{ 'mf_basket_' + i }}\" class=\"item\"\r\n                                                                              >\r\n                                                                              <div class=\"cardwrap\">\r\n                                                                                <div class=\"subcard\">\r\n                                                                                  <div class=\"card-header\">\r\n                                                                                    <div class=\"imgwrap\">\r\n                                                                                      <img\r\n                                                                                        alt=\"bucket\"\r\n                            src=\"{{\r\n                              'https://d3vjsh1bzzv98d.cloudfront.net/static/' +\r\n                                basket?.BucketImage2\r\n                            }}\"\r\n                                                                                        />\r\n                                                                                      </div>\r\n                                                                                      <div class=\"texthead\">\r\n                                                                                        <p class=\"head\">\r\n                                                                                          {{ basket?.BucketTitle || \"\" }}\r\n                                                                                        </p>\r\n                                                                                        <p class=\"subhead\">\r\n                                                                                          {{\r\n                                                                                          basket?.BucketType == \"BucketTypeSIP\"\r\n                                                                                          ? \"SIP\"\r\n                                                                                          : basket?.BucketType == \"BucketTypeLumspum\"\r\n                                                                                          ? \"Lump\r\n                                                                                          Sum\"\r\n                                                                                          : basket?.BucketType || \"\"\r\n                                                                                          }}\r\n                                                                                        </p>\r\n                                                                                      </div>\r\n                                                                                    </div>\r\n                                                                                    <div class=\"card-bottom\">\r\n                                                                                      <div class=\"count\">\r\n                                                                                        <p class=\"percenthead\">Abs. Returns (3yrs)</p>\r\n                                                                                        <P\r\n                                                                                        class=\"percentage\"\r\n                            [ngClass]=\"{\r\n                              green: basket?.Yr3Returns > 0,\r\n                              'text-red': basket?.Yr3Returns < 0\r\n                            }\"\r\n                                                                                        >\r\n                                                                                        {{ basket?.Yr3Returns || \"\" }}%</P\r\n                                                                                        >\r\n                                                                                      </div>\r\n                                                                                      <div class=\"amount\">\r\n                                                                                        <p class=\"amounthead\">Min. Amount</p>\r\n                                                                                        <p class=\"amount\">{{ basket?.BucketMinAmt || \"\" }}</p>\r\n                                                                                      </div>\r\n                                                                                      <span class=\"link-hrl\">\r\n                                                                                        <img\r\n                                                                                          alt=\"next\"\r\n                                                                                          src=\"../../../assets/images/jiffy-dashboard/next-arrow.svg\"\r\n                                                                                          />\r\n                                                                                        </span>\r\n                                                                                      </div>\r\n                                                                                    </div>\r\n                                                                                  </div>\r\n                                                                                </ngu-tile>\r\n                                                                                <ul class=\"myPoint\" NguCarouselPoint>\r\n                                                                                  @for (\r\n                                                                                    caroItem of basketCarousel.pointNumbers; track\r\n                                                                                    caroItem; let j = $index) {\r\n                                                                                    <li\r\n                                                                                      [class.active]=\"j == basketCarousel.activePoint\"\r\n                                                                                      (click)=\"basketCarousel.moveTo(j)\"\r\n                                                                                    ></li>\r\n                                                                                  }\r\n                                                                                </ul>\r\n                                                                              </ngu-carousel>\r\n                                                                            }\r\n                                                                            @if (loader?.combinedBasketLoader) {\r\n                                                                              <div class=\"loader-css-small\"></div>\r\n                                                                            }\r\n                                                                          </div>\r\n                                                                        }\r\n\r\n                                                                        @if (!loader?.combinedBasketLoader && !config?.mfBasket?.length) {\r\n                                                                          <div\r\n                                                                            class=\"cardwrap text-center\"\r\n                                                                            >\r\n                                                                            <h5 class=\"text-center nodata\">No Data Found</h5>\r\n                                                                          </div>\r\n                                                                        }\r\n                                                                      </div>\r\n                                                                    </div>\r\n\r\n                                                                    <div class=\"part7-left\" id=\"partner-product\">\r\n                                                                      <div class=\"wrapper\">\r\n                                                                        <div class=\"headwrap\">\r\n                                                                          <h3 class=\"sm-ttl\" id=\"dashboard-partner-product\">\r\n                                                                            Partner Products\r\n                                                                          </h3>\r\n                                                                        </div>\r\n                                                                        @if (!loader?.partnerProducts) {\r\n                                                                          <div class=\"partner-product__list\">\r\n                                                                            @for (product of partnerProductList; track product) {\r\n                                                                              @if (product.visibility) {\r\n                                                                                <div\r\n                                                                                  class=\"partner-product\"\r\n                                                                                  (click)=\"showToaster(product?.authorizeKey)\"\r\n                                                                                  >\r\n                                                                                  <div class=\"partner-product__content\">\r\n                                                                                    <img\r\n                                                                                      src=\"{{ product?.img }}\"\r\n                                                                                      alt=\"{{ product?.label }}\"\r\n                                                                                      class=\"partner-product__img\"\r\n                                                                                      />\r\n                                                                                      <span class=\"partner-product__name\">{{\r\n                                                                                        product?.label\r\n                                                                                      }}</span>\r\n                                                                                    </div>\r\n                                                                                  </div>\r\n                                                                                }\r\n                                                                              }\r\n                                                                            </div>\r\n                                                                          }\r\n                                                                          @if (loader?.partnerProducts) {\r\n                                                                            <div class=\"loader-css-small\"></div>\r\n                                                                          }\r\n                                                                        </div>\r\n                                                                      </div>\r\n\r\n                                                                      <!-- <div class=\"part4-left\">\r\n                                                                      <div class=\"wrapper\">\r\n                                                                        <h3 class=\"sm-ttl\" id=\"dashboard-diversify\">Diversify</h3>\r\n\r\n                                                                        <div class=\"imgrow\" *ngIf=\"!loader?.diversifyLoader\">\r\n                                                                          <div\r\n                                                                            class=\"imgwrap curs-point\"\r\n                                                                            (click)=\"bannerRedirection(item, i, 'diversify')\"\r\n                                                                            *ngFor=\"let item of config?.diversifyBanner; let i = index\"\r\n                                                                            >\r\n                                                                            <img src=\"{{ item?.webImg2x }}\" alt=\"banner\" width=\"264\" height=\"161\"/>\r\n                                                                          </div>\r\n                                                                        </div>\r\n                                                                        <div\r\n                                                                          class=\"text-center\"\r\n                                                                          *ngIf=\"!config?.diversifyBanner?.length && !loader?.diversifyLoader\"\r\n                                                                          >\r\n                                                                          <h5 class=\"text-center nodata\">No Data Found</h5>\r\n                                                                        </div>\r\n\r\n                                                                        <div *ngIf=\"loader?.diversifyLoader\" class=\"loader-css-small\"></div>\r\n                                                                      </div>\r\n                                                                    </div> -->\r\n\r\n                                                                    <app-market-dashboard\r\n                                                                      [segmentSelected]=\"dashboardMarketFilter?.segmentSelected\"\r\n                                                                      [selectedTab]=\"dashboardMarketFilter?.selectedTab\"\r\n                                                                      [checkValue]=\"dashboardMarketFilter?.checkValue\"\r\n                                                                      (redirectionHandling)=\"userRedirectionHandled()\"\r\n                                                                    ></app-market-dashboard>\r\n\r\n                                                                    <app-corporate-actions\r\n                                                                      (redirectionHandling)=\"userRedirectionHandled()\"\r\n                                                                    ></app-corporate-actions>\r\n\r\n                                                                    <div class=\"part5-left\">\r\n                                                                      <div class=\"wrapper\">\r\n                                                                        <h3 class=\"sm-ttl\">Tools</h3>\r\n\r\n                                                                        <div class=\"cardrow\">\r\n                                                                          <div\r\n                                                                            class=\"textwrapper\"\r\n                                                                            (click)=\"navigateRoute('tools/margin-span-calculator')\"\r\n                                                                            >\r\n                                                                            <div class=\"imgwrap\">\r\n                                                                              <img\r\n                                                                                src=\"../../../assets/images/jiffy-dashboard/margincalculator.svg\" alt=\"Margin Calculator\" width=\"24\" height=\"24\"\r\n                                                                                />\r\n                                                                              </div>\r\n\r\n                                                                              <div class=\"text\">Margin <br />Calculator</div>\r\n                                                                            </div>\r\n\r\n                                                                            <div\r\n                                                                              class=\"textwrapper\"\r\n                                                                              (click)=\"navigateRoute('/tools/brokerage-calculator')\"\r\n                                                                              >\r\n                                                                              <div class=\"imgwrap\">\r\n                                                                                <img\r\n                                                                                  src=\"../../../assets/images/jiffy-dashboard/brokeragecalculator.svg\" alt=\"Brokerage Calculator\" width=\"24\" height=\"24\"\r\n                                                                                  />\r\n                                                                                </div>\r\n\r\n                                                                                <div class=\"text\">Brokerage <br />Calculator</div>\r\n                                                                              </div>\r\n\r\n                                                                              <div\r\n                                                                                class=\"textwrapper\"\r\n                                                                                (click)=\"navigateRoute('tools/event-calendar/board-meetings')\"\r\n                                                                                >\r\n                                                                                <div class=\"imgwrap\">\r\n                                                                                  <img\r\n                                                                                    src=\"../../../assets/images/jiffy-dashboard/eventcalculator.svg\" alt=\"Event Calculator\" width=\"24\" height=\"24\"\r\n                                                                                    />\r\n                                                                                  </div>\r\n\r\n                                                                                  <div class=\"text\">Event <br />Calendar</div>\r\n                                                                                </div>\r\n                                                                              </div>\r\n                                                                            </div>\r\n                                                                          </div>\r\n                                                                        </div>\r\n\r\n                                                                        <div class=\"part2-right part3-right\">\r\n                                                                          <div class=\"part2-sec1\">\r\n                                                                            @if (config?.niftyContent?.length && !loader.combinedBasketLoader) {\r\n                                                                              <div\r\n                                                                                class=\"maret-info-slider\"\r\n                                                                                >\r\n                                                                                <div class=\"info-slider-itm\">\r\n                                                                                  <div class=\"slider-itm-sub\">\r\n                                                                                    <div class=\"slider-itm-img\">\r\n                                                                                      <img width=\"24\" height=\"24\"\r\n                  src=\"{{\r\n                    config?.niftyContent[config?.niftyContentIndex].Icon ||\r\n                      'assets/images/jiffy-new-dashboard/nifty-rupees.svg'\r\n                  }}\"\r\n                                                                                        alt=\"Nifty Rupees\" />\r\n                                                                                      </div>\r\n                                                                                      <!-- <p class=\"itm-desc\">Nifty 50 has given <span class=\"text-green\">54.75%</span> returns in\r\n                                                                                      last 3 Years. Now might be the time\r\n                                                                                    to get started!</p> -->\r\n                                                                                    <!-- {{config?.niftyContent[config?.niftyContentIndex].Content}} -->\r\n                                                                                    <p\r\n                [innerHTML]=\"\r\n                  config?.niftyContent[config?.niftyContentIndex].Content\r\n                \"\r\n                                                                                      class=\"itm-desc\"\r\n                                                                                    ></p>\r\n                                                                                  </div>\r\n                                                                                </div>\r\n                                                                              </div>\r\n                                                                            }\r\n\r\n                                                                            @if (!config?.niftyContent?.length && !loader.combinedBasketLoader) {\r\n                                                                              <h5\r\n                                                                                class=\"text-center\"\r\n                                                                                >\r\n                                                                                Data Not Available\r\n                                                                              </h5>\r\n                                                                            }\r\n\r\n                                                                            @if (loader?.combinedBasketLoader) {\r\n                                                                              <div\r\n                                                                                class=\"loader-css-small\"\r\n                                                                              ></div>\r\n                                                                            }\r\n\r\n                                                                            @if (config?.niftyContent?.length) {\r\n                                                                              <div class=\"next-prev-maret\">\r\n                                                                                <!-- [attr.disabled]=\"config?.niftyContentIndex===0\" -->\r\n                                                                                @if (config?.niftyContentIndex !== 0) {\r\n                                                                                  <span\r\n                                                                                    class=\"prev\"\r\n                                                                                    (click)=\"sliderRedirect('nifty', 'prev')\"\r\n                                                                                    ><img\r\n                                                                                    src=\"assets/images/jiffy-new-dashboard/prev-ico.svg\"\r\n                                                                                    class=\"ico-smn\" width=\"7\" height=\"11\" alt=\"Preview\"\r\n                                                                                  /></span>\r\n                                                                                }\r\n                                                                                <!-- [attr.disabled]=\"config?.niftyContentIndex===(config?.niftyContent.length-1)\"  -->\r\n                                                                                @if (\r\n                                                                                  config?.niftyContentIndex !== config?.niftyContent.length - 1\r\n                                                                                  ) {\r\n                                                                                  <span\r\n                                                                                    class=\"next\"\r\n                                                                                    (click)=\"sliderRedirect('nifty', 'next')\"\r\n                                                                                    ><img\r\n                                                                                    src=\"assets/images/jiffy-new-dashboard/next-ico.svg\" width=\"7\" height=\"11\"\r\n                                                                                    alt=\"next\"\r\n                                                                                    class=\"ico-smn\"\r\n                                                                                  /></span>\r\n                                                                                }\r\n                                                                              </div>\r\n                                                                            }\r\n                                                                          </div>\r\n\r\n                                                                          <!-- <div class=\"part2-sec2\">\r\n                                                                          <div class=\"sec2-slider cardrow1\">\r\n                                                                            <ng-container *ngIf=\"!loader?.diversifyLoader\">\r\n                                                                              <ngu-carousel\r\n                                                                                #myCarousel\r\n                                                                                [inputs]=\"carouselConfig\"\r\n                                                                                [dataSource]=\"config?.ipoBanner\"\r\n                                                                                >\r\n                                                                                <ngu-tile\r\n                                                                                  *nguCarouselDef=\"let banner; let i = index\"\r\n                                                                                  id=\"{{ 'ipoBanner_' + i }}\"\r\n                                                                                  >\r\n                                                                                  <div class=\"sec2-slider-itm\">\r\n                                                                                    <div class=\"slider-itm-sub\">\r\n                                                                                      <div class=\"rhgt\">\r\n                                                                                        <img\r\n                                                                                          width=\"349\" height=\"143\"\r\n                                                                                          class=\"not-selectable-img\"\r\n                                                                                          src=\"{{ banner?.webImg2x }}\" alt=\"Stratezy\"\r\n                                                                                          />\r\n                                                                                        </div>\r\n                                                                                      </div>\r\n                                                                                    </div>\r\n                                                                                  </ngu-tile>\r\n\r\n                                                                                  <ul class=\"myPoint\" NguCarouselPoint>\r\n                                                                                    <li\r\n                  *ngFor=\"\r\n                    let caroItem of myCarousel.pointNumbers;\r\n                    let j = index\r\n                  \"\r\n                                                                                      [class.active]=\"j == myCarousel.activePoint\"\r\n                                                                                      (click)=\"myCarousel.moveTo(j)\"\r\n                                                                                    ></li>\r\n                                                                                  </ul>\r\n                                                                                </ngu-carousel>\r\n                                                                              </ng-container>\r\n                                                                              <div\r\n                                                                                class=\"loader-css-small css-small-new\"\r\n                                                                                *ngIf=\"loader?.diversifyLoader\"\r\n                                                                              ></div>\r\n                                                                            </div>\r\n                                                                          </div> -->\r\n\r\n                                                                          <!-- <div class=\"news-section\">\r\n                                                                          <h3 class=\"sm-ttl\">News</h3>\r\n                                                                          <div\r\n                                                                            class=\"news-list\"\r\n                                                                            *ngIf=\"NewsList?.length && !checkNews\"\r\n                                                                            id=\"style-1\"\r\n                                                                            >\r\n                                                                            <div class=\"news-list-itm\" *ngFor=\"let news of NewsList\">\r\n                                                                              <a\r\n                                                                                href=\"{{ news.url }}\"\r\n                                                                                (click)=\"smartInvestmentRedirection('news')\"\r\n                                                                                target=\"_blank\"\r\n                                                                                class=\"itm-cont-de\"\r\n                                                                                >{{ news.title }}</a\r\n                                                                                >\r\n                                                                                <h5 class=\"date-name\">\r\n                                                                                  <span>{{ news.publishDate | value : \"dashboarddate\" }}</span>\r\n                                                                                  <span>{{ news.sourcesite }}</span>\r\n                                                                                </h5>\r\n                                                                              </div>\r\n                                                                            </div>\r\n\r\n                                                                            <div style=\"height: 90px\" *ngIf=\"!NewsList?.length && checkNews\">\r\n                                                                              <div style=\"margin-top: 50px\" class=\"loader-css-small\"></div>\r\n\r\n                                                                              <div class=\"pagination-dots\"></div>\r\n                                                                            </div>\r\n\r\n                                                                            <div *ngIf=\"!NewsList?.length && !checkNews\">\r\n                                                                              <h5 class=\"text-center nodata\">No Data Found</h5>\r\n                                                                            </div>\r\n                                                                          </div> -->\r\n\r\n                                                                          <div class=\"finxschool\">\r\n                                                                            <h2 class=\"sm-ttl\">FinX School</h2>\r\n\r\n                                                                            <div class=\"finx-up\">\r\n                                                                              <ul class=\"finx-menu\">\r\n                                                                                <li class=\"finx_list\" (click)=\"setFinxSchoolValue('videos')\">\r\n                                                                                  <a\r\n                class=\"content {{\r\n                  finxSchool == 'videos' ? 'content-active' : ''\r\n                }}\"\r\n                                                                                    >Videos</a\r\n                                                                                    >\r\n                                                                                  </li>\r\n\r\n                                                                                  <li class=\"finx_list\" (click)=\"setFinxSchoolValue('blogs')\">\r\n                                                                                    <a\r\n                class=\"content {{\r\n                  finxSchool == 'blogs' ? 'content-active' : ''\r\n                }}\"\r\n                                                                                      >Blogs</a\r\n                                                                                      >\r\n                                                                                    </li>\r\n                                                                                  </ul>\r\n                                                                                </div>\r\n\r\n                                                                                <div class=\"finx-tab-cont\">\r\n                                                                                  @if (finxSchool == 'videos' && finxSchoolVideos?.items?.length) {\r\n                                                                                    <div\r\n                                                                                      class=\"finx-video\"\r\n                                                                                      >\r\n                                                                                      <div class=\"finx_content finx_content_item\">\r\n                                                                                        <!-- <a  class=\"blog-v-img video-play\" id=\"vid-open\" [innerHTML]=\"finxSchoolVideos?.items[finxSchoolVideos.active||0]?.player?.embedHtml|sanitizerHtml\">\r\n                                                                                      </a> -->\r\n                                                                                      <!--    <img src=\"{{finxSchoolVideos?.items[finxSchoolVideos.active||0]?.snippet?.thumbnails?.high?.url}}\"  alt=\"demo\" > -->\r\n                                                                                      <!--    {{('https://www.youtube.com/embed/'+finxSchoolVideos?.items[finxSchoolVideos.active||0]?.id)  |sanitizerURL}} -->\r\n                                                                                      <div></div>\r\n                                                                                      <a class=\"blog-v-img\" id=\"vid-open\">\r\n                                                                                        @if (!openFlag) {\r\n                                                                                          <img\r\n                                                                                            style=\"object-position: center; cursor: pointer\"\r\n                    src=\"{{\r\n                      finxSchoolVideos?.items[finxSchoolVideos.active || 0]\r\n                        ?.snippet?.thumbnails?.high?.url\r\n                    }}\"\r\n                    (click)=\"\r\n                      openVid(\r\n                        finxSchoolVideos?.items[finxSchoolVideos.active || 0]\r\n                          ?.id\r\n                      )\r\n                    \"\r\n                                                                                            alt=\"demo\"\r\n                                                                                            />\r\n                                                                                            <!--  <div class=\"play-btn\">\r\n                                                                                          </div> -->\r\n                                                                                        }\r\n                                                                                        @if (openFlag) {\r\n                                                                                          <iframe\r\n                  id=\"{{\r\n                    finxSchoolVideos?.items[finxSchoolVideos.active || 0]?.id\r\n                  }}\"\r\n                                                                                            style=\"width: 100%; height: 100%\"\r\n                  [src]=\"\r\n                    'https://www.youtube.com/embed/' +\r\n                      finxSchoolVideos?.items[finxSchoolVideos.active || 0]?.id\r\n                      | sanitizerURL\r\n                  \"\r\n                                                                                            frameborder=\"0\"\r\n                                                                                            allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\"\r\n                                                                                            allowfullscreen\r\n                                                                                          ></iframe>\r\n                                                                                        }\r\n                                                                                      </a>\r\n                                                                                      <div class=\"blog-v-des\">\r\n                                                                                        <h4 class=\"finx_bottomtext\">\r\n                                                                                          {{\r\n                                                                                          finxSchoolVideos?.items[finxSchoolVideos.active || 0]\r\n                                                                                          ?.snippet?.title\r\n                                                                                          }}\r\n                                                                                        </h4>\r\n                                                                                        <p class=\"finx_para\">\r\n                                                                                          <span class=\"finx_views\"\r\n                                                                                            >{{\r\n                                                                                            finxSchoolVideos?.items[finxSchoolVideos.active || 0]\r\n                                                                                            ?.statistics?.viewCount\r\n                                                                                            }}\r\n                                                                                            views\r\n                                                                                          </span>\r\n                                                                                          <span class=\"finx_publishAt\"\r\n                                                                                            >Premiered\r\n                                                                                            {{\r\n                                                                                            finxSchoolVideos?.items[finxSchoolVideos.active || 0]\r\n                                                                                            ?.snippet?.publishedAt | date : \"MMM dd, yyyy\"\r\n                                                                                            }} </span\r\n                                                                                            >{{\r\n                                                                                            finxSchoolVideos?.items[finxSchoolVideos.active || 0]\r\n                                                                                            ?.snippet?.description\r\n                                                                                            }}\r\n                                                                                          </p>\r\n                                                                                          <!-- <p class=\"finx_para\">11,572 views Premiered Apr 12, 2022 The video highlights 'How\r\n                                                                                          to re-enter the market post profit booking'. It also shares insights; at what\r\n                                                                                          levels and in which kind of stocks you should be averaging. Also, it explains\r\n                                                                                          the significance of stop loss while investing and how you should revise your\r\n                                                                                        trailing stop loss as per markets.</p> -->\r\n                                                                                      </div>\r\n                                                                                    </div>\r\n                                                                                    <div class=\"pagination-dots\">\r\n                                                                                      <ul class=\"reset-list\">\r\n                                                                                        @for (item of finxSchoolVideos?.items; track item; let i = $index) {\r\n                                                                                          <li\r\n                  class=\"bult {{\r\n                    i == (finxSchoolVideos?.active || 0) ? 'active-bult' : ''\r\n                  }}\"\r\n                                                                                            >\r\n                                                                                            &nbsp;\r\n                                                                                          </li>\r\n                                                                                        }\r\n                                                                                        <!-- <li class=\"bult\">&nbsp;</li>\r\n                                                                                        <li class=\"bult\">&nbsp;</li> -->\r\n                                                                                      </ul>\r\n                                                                                      <div class=\"next-prev-list\">\r\n                                                                                        <span class=\"prev\" (click)=\"goToPrevYoutubeVideo()\"\r\n                                                                                          ><img\r\n                                                                                          src=\"assets/images/jiffy-new-dashboard/prev-ico.svg\"\r\n                                                                                          class=\"ico-smn\" width=\"7\" height=\"11\" alt=\"Preview\"\r\n                                                                                        /></span>\r\n                                                                                        <span class=\"next\" (click)=\"goToNextYoutubeVideo()\"\r\n                                                                                          ><img\r\n                                                                                          src=\"assets/images/jiffy-new-dashboard/next-ico.svg\"\r\n                                                                                          alt=\"next\"\r\n                                                                                          class=\"ico-smn\" width=\"7\" height=\"11\"\r\n                                                                                        /></span>\r\n                                                                                        <!--    <span class=\"next\"><img src=\"assets/images/jiffy-new-dashboard/next-ico.svg\"\r\n                                                                                      class=\"ico-smn\"></span> -->\r\n                                                                                    </div>\r\n                                                                                  </div>\r\n                                                                                </div>\r\n                                                                              }\r\n\r\n                                                                              @if (\r\n                                                                                finxSchool == 'videos' &&\r\n                                                                                !finxSchoolVideos?.items?.length &&\r\n                                                                                fetchingEvent\r\n                                                                                ) {\r\n                                                                                <div\r\n                                                                                  class=\"finx-video\"\r\n                                                                                  >\r\n                                                                                  <div class=\"finx_content finx_content_item\" style=\"height: 75px\">\r\n                                                                                    <div class=\"loader-css-small\" style=\"margin-top: 60px\"></div>\r\n                                                                                    <!--   <div class=\"loader\" src=\"{{sharedDataService.serverImageUrl+'loader.gif'}}\">\r\n                                                                                  </div> -->\r\n                                                                                  <!--            <i  title=\"Fetching data...\"\r\n                                                                                class=\"loader-new fa-pulse fa-lg fa-fw loadergrey\"></i> -->\r\n                                                                              </div>\r\n                                                                              <div class=\"pagination-dots\"></div>\r\n                                                                            </div>\r\n                                                                          }\r\n\r\n                                                                          @if (\r\n                                                                            finxSchool == 'videos' &&\r\n                                                                            !finxSchoolVideos?.items?.length &&\r\n                                                                            !fetchingEvent\r\n                                                                            ) {\r\n                                                                            <div\r\n                                                                              class=\"finx-video\"\r\n                                                                              >\r\n                                                                              <h5 class=\"text-center nodata\">No Data Found</h5>\r\n                                                                            </div>\r\n                                                                          }\r\n\r\n                                                                          @if (\r\n                                                                            finxSchool == 'blogs' &&\r\n                                                                            BlogList &&\r\n                                                                            BlogList?.length &&\r\n                                                                            BlogList[index]\r\n                                                                            ) {\r\n                                                                            <div\r\n                                                                              class=\"finx-blog\"\r\n                                                                              >\r\n                                                                              <div\r\n                                                                                class=\"finx_content finx_content_item\"\r\n                                                                                (click)=\"navigateToBlogDetail(BlogList[index]?.slug)\"\r\n                                                                                >\r\n                                                                                <a class=\"blog-v-img\">\r\n                                                                                  <img src=\"{{ BlogList[index]?.feature_image }}\" alt=\"demo\" />\r\n                                                                                </a>\r\n                                                                                <div class=\"blog-v-des\">\r\n                                                                                  <h4 class=\"finx_bottomtext\">\r\n                                                                                    <a style=\"color: #000000\" href=\"javascript:void(0)\">{{\r\n                                                                                      BlogList[index].title\r\n                                                                                    }}</a>\r\n                                                                                  </h4>\r\n                                                                                  <p class=\"finx_para\">{{ BlogList[index].meta_description }}</p>\r\n                                                                                </div>\r\n                                                                              </div>\r\n                                                                              <div class=\"pagination-dots\">\r\n                                                                                <ul class=\"reset-list\">\r\n                                                                                  <li class=\"bult\" [class.active-bult]=\"index == 0\">&nbsp;</li>\r\n                                                                                  <li class=\"bult\" [class.active-bult]=\"index == 1\">&nbsp;</li>\r\n                                                                                  <li class=\"bult\" [class.active-bult]=\"index == 2\">&nbsp;</li>\r\n                                                                                </ul>\r\n                                                                                <div class=\"next-prev-list\">\r\n                                                                                  <span class=\"prev\" (click)=\"Blogprev()\"\r\n                                                                                    ><img\r\n                                                                                    src=\"assets/images/jiffy-new-dashboard/prev-ico.svg\"\r\n                                                                                    class=\"ico-smn\" alt=\"Preview\"\r\n                                                                                  /></span>\r\n                                                                                  <span class=\"next\" (click)=\"Blognext()\"\r\n                                                                                    ><img\r\n                                                                                    src=\"assets/images/jiffy-new-dashboard/next-ico.svg\"\r\n                                                                                    alt=\"next\"\r\n                                                                                    class=\"ico-smn\"\r\n                                                                                  /></span>\r\n                                                                                </div>\r\n                                                                              </div>\r\n                                                                            </div>\r\n                                                                          }\r\n\r\n                                                                          @if (finxSchool == 'blogs' && !BlogList?.length && checkBlog) {\r\n                                                                            <div\r\n                                                                              class=\"finx-blog\"\r\n                                                                              >\r\n                                                                              <div class=\"finx_content finx_content_item\" style=\"height: 75px\">\r\n                                                                                <div class=\"loader-css-small\" style=\"margin-top: 60px\"></div>\r\n                                                                              </div>\r\n                                                                              <div class=\"pagination-dots\"></div>\r\n                                                                            </div>\r\n                                                                          }\r\n\r\n                                                                          @if (finxSchool == 'blogs' && !BlogList?.length && !checkBlog) {\r\n                                                                            <div\r\n                                                                              class=\"finx-blog\"\r\n                                                                              >\r\n                                                                              <h5 class=\"text-center nodata\">No Data Found</h5>\r\n                                                                            </div>\r\n                                                                          }\r\n                                                                        </div>\r\n                                                                      </div>\r\n\r\n                                                                      <div class=\"webinar-section\">\r\n                                                                        <h3 class=\"sm-ttl\">Webinar</h3>\r\n                                                                        @if (\r\n                                                                          webinarCheck && !WebinarLoader && webinarList && webinarList[0]\r\n                                                                          ) {\r\n                                                                          <div\r\n                                                                            >\r\n                                                                            <div class=\"webinar-img\">\r\n                                                                              <a\r\n                                                                                href=\"{{ webinarList[0].webinarLink }}\"\r\n                                                                                (click)=\"smartInvestmentRedirection('webinar')\"\r\n                                                                                target=\"_blank\"\r\n                                                                                >\r\n                                                                                <img src=\"{{ webinarList[0].webinarImg }}\" class=\"ico-smn\" />\r\n                                                                              </a>\r\n                                                                            </div>\r\n                                                                          </div>\r\n                                                                        }\r\n                                                                        @if (WebinarLoader) {\r\n                                                                          <div>\r\n                                                                            <div class=\"webinar-img\">\r\n                                                                              <div style=\"height: 75px\">\r\n                                                                                <div class=\"loader-css-small\" style=\"margin-top: 60px\"></div>\r\n                                                                              </div>\r\n                                                                              <div class=\"pagination-dots\"></div>\r\n                                                                            </div>\r\n                                                                          </div>\r\n                                                                        }\r\n                                                                        @if (\r\n                                                                          !webinarCheck &&\r\n                                                                          !WebinarLoader &&\r\n                                                                          ((webinarList && webinarList[0]) || !webinarList || !webinarList[0])\r\n                                                                          ) {\r\n                                                                          <div\r\n                                                                            >\r\n                                                                            <div>\r\n                                                                              <h5 class=\"text-center\">\r\n                                                                                You can find the ongoing and upcoming webinars in this section\r\n                                                                              </h5>\r\n                                                                            </div>\r\n                                                                          </div>\r\n                                                                        }\r\n                                                                      </div>\r\n\r\n                                                                      <div class=\"join-our-community\">\r\n                                                                        <h3 class=\"sm-ttl\">Join Our Community</h3>\r\n\r\n                                                                        @for (link of MediaList; track link) {\r\n                                                                          <div class=\"mediarow\">\r\n                                                                            <a\r\n                                                                              href=\"{{ link.facebook_link }}\"\r\n                                                                              target=\"_blank\"\r\n                                                                              class=\"textwrapper\"\r\n                                                                              title=\"Facebook\"\r\n                                                                              >\r\n                                                                              <svg\r\n                                                                                xmlns=\"http://www.w3.org/2000/svg\"\r\n                                                                                width=\"7\"\r\n                                                                                height=\"14\"\r\n                                                                                viewBox=\"0 0 7 14\"\r\n                                                                                >\r\n                                                                                <path\r\n                                                                                  id=\"Facebook\"\r\n                                                                                  d=\"M4.654,14h-3.1V7.389H0V4.841H1.551V3.313C1.551,1.236,2.426,0,4.914,0H6.985V2.548H5.691c-.969,0-1.033.356-1.033,1.02l0,1.274H7L6.725,7.389H4.654V14Z\"\r\n                                                                                  fill=\"#1B1464\"\r\n                                                                                  />\r\n                                                                                </svg>\r\n                                                                              </a>\r\n                                                                              <a\r\n                                                                                href=\"{{ link.twitter_link }}\"\r\n                                                                                target=\"_blank\"\r\n                                                                                class=\"textwrapper\"\r\n                                                                                title=\"Twitter\"\r\n                                                                                >\r\n                                                                                <svg\r\n                                                                                  xmlns=\"http://www.w3.org/2000/svg\"\r\n                                                                                  width=\"14\"\r\n                                                                                  height=\"11.375\"\r\n                                                                                  viewBox=\"0 0 14 11.375\"\r\n                                                                                  >\r\n                                                                                  <path\r\n                                                                                    id=\"Twitter\"\r\n                                                                                    d=\"M14,1.346a5.762,5.762,0,0,1-1.65.453A2.881,2.881,0,0,0,13.613.21a5.74,5.74,0,0,1-1.824.7A2.874,2.874,0,0,0,6.82,2.872a2.9,2.9,0,0,0,.075.655,8.153,8.153,0,0,1-5.919-3,2.875,2.875,0,0,0,.889,3.834A2.848,2.848,0,0,1,.563,4v.037a2.873,2.873,0,0,0,2.3,2.816,2.868,2.868,0,0,1-.757.1A2.825,2.825,0,0,1,1.57,6.9,2.877,2.877,0,0,0,4.253,8.9,5.77,5.77,0,0,1,.685,10.124,5.789,5.789,0,0,1,0,10.085a8.128,8.128,0,0,0,4.4,1.29A8.116,8.116,0,0,0,12.575,3.2c0-.125,0-.248-.008-.371A5.838,5.838,0,0,0,14,1.347Z\"\r\n                                                                                    fill=\"#1B1464\"\r\n                                                                                    />\r\n                                                                                  </svg>\r\n                                                                                </a>\r\n                                                                                <a\r\n                                                                                  href=\"{{ link.Linkeding_link }}\"\r\n                                                                                  target=\"_blank\"\r\n                                                                                  class=\"textwrapper\"\r\n                                                                                  title=\"LinkedIn\"\r\n                                                                                  >\r\n                                                                                  <svg\r\n                                                                                    xmlns=\"http://www.w3.org/2000/svg\"\r\n                                                                                    width=\"14\"\r\n                                                                                    height=\"14\"\r\n                                                                                    viewBox=\"0 0 14 14\"\r\n                                                                                    >\r\n                                                                                    <path\r\n                                                                                      id=\"Linkedin\"\r\n                                                                                      d=\"M11.1,14V9.454c0-1.086-.016-2.481-1.506-2.481-1.511,0-1.737,1.184-1.737,2.4V14H4.96V4.649H7.734V5.93h.038a3.048,3.048,0,0,1,2.747-1.508C13.455,4.422,14,6.357,14,8.876V14ZM3.13,14H.227V4.649h2.9V14h0ZM4.955,4.649H4.96ZM0,1.687A1.684,1.684,0,1,1,1.684,3.373,1.687,1.687,0,0,1,0,1.687Z\"\r\n                                                                                      fill=\"#1B1464\"\r\n                                                                                      />\r\n                                                                                    </svg>\r\n                                                                                  </a>\r\n                                                                                  <a\r\n                                                                                    href=\"{{ link.Instagram_link }}\"\r\n                                                                                    target=\"_blank\"\r\n                                                                                    class=\"textwrapper\"\r\n                                                                                    title=\"Instagram\"\r\n                                                                                    >\r\n                                                                                    <svg\r\n                                                                                      xmlns=\"http://www.w3.org/2000/svg\"\r\n                                                                                      width=\"14\"\r\n                                                                                      height=\"14\"\r\n                                                                                      viewBox=\"0 0 14 14\"\r\n                                                                                      >\r\n                                                                                      <path\r\n                                                                                        id=\"Instagram\"\r\n                                                                                        d=\"M9.829,14H4.171A4.175,4.175,0,0,1,0,9.829V4.171A4.175,4.175,0,0,1,4.171,0H9.829A4.175,4.175,0,0,1,14,4.171V9.829A4.175,4.175,0,0,1,9.829,14ZM4.171,1.408A2.765,2.765,0,0,0,1.408,4.171V9.829a2.765,2.765,0,0,0,2.762,2.762H9.829a2.765,2.765,0,0,0,2.762-2.762V4.171A2.765,2.765,0,0,0,9.829,1.408ZM7,10.621A3.621,3.621,0,1,1,10.621,7,3.625,3.625,0,0,1,7,10.621ZM7,4.788A2.212,2.212,0,1,0,9.212,7,2.215,2.215,0,0,0,7,4.788Zm3.628-.514a.868.868,0,1,1,.868-.868A.869.869,0,0,1,10.628,4.274Z\"\r\n                                                                                        fill=\"#1B1464\"\r\n                                                                                        />\r\n                                                                                      </svg>\r\n                                                                                    </a>\r\n                                                                                    <a\r\n                                                                                      href=\"{{ link.Youtube_link }}\"\r\n                                                                                      target=\"_blank\"\r\n                                                                                      class=\"textwrapper\"\r\n                                                                                      title=\"Youtube\"\r\n                                                                                      >\r\n                                                                                      <svg\r\n                                                                                        xmlns=\"http://www.w3.org/2000/svg\"\r\n                                                                                        width=\"14\"\r\n                                                                                        height=\"10.889\"\r\n                                                                                        viewBox=\"0 0 14 10.889\"\r\n                                                                                        >\r\n                                                                                        <path\r\n                                                                                          id=\"Youtube\"\r\n                                                                                          d=\"M7,10.889H7c-.036,0-3.658-.026-4.755-.148-.059-.014-.131-.024-.214-.036A1.963,1.963,0,0,1,.7,10.072,3.723,3.723,0,0,1,.145,8.538,24.788,24.788,0,0,1,0,6.039V4.875C0,3.63.143,2.364.145,2.351A3.385,3.385,0,0,1,.7.817,1.907,1.907,0,0,1,2.058.177h0l.039,0C4.032.027,6.971,0,7,0s2.968.027,4.9.173l.066.006A1.782,1.782,0,0,1,13.3.817a3.723,3.723,0,0,1,.555,1.534c0,.013.145,1.278.145,2.524V6.039c0,1.221-.143,2.487-.145,2.5a3.724,3.724,0,0,1-.555,1.534,1.907,1.907,0,0,1-1.358.64h0l-.039,0C9.967,10.887,7.029,10.889,7,10.889ZM5.31,2.945v5.37L9.9,5.692Z\"\r\n                                                                                          fill=\"#1B1464\"\r\n                                                                                          />\r\n                                                                                        </svg>\r\n                                                                                      </a>\r\n                                                                                      <!-- <a href=\"#\" class=\"textwrapper\">\r\n                                                                                      <svg xmlns=\"http://www.w3.org/2000/svg\" id=\"Telegram\" width=\"15.247\" height=\"13.997\" viewBox=\"0 0 15.247 13.997\">\r\n                                                                                        <path id=\"Subtraction_1\" data-name=\"Subtraction 1\" d=\"M12.244,14A.415.415,0,0,1,12,13.914l-3.53-2.7a.558.558,0,0,0-.343-.121.58.58,0,0,0-.37.14L5.8,12.915a.4.4,0,0,1-.26.1.414.414,0,0,1-.4-.306L3.782,8.092.267,6.712A.428.428,0,0,1,0,6.3a.435.435,0,0,1,.264-.411L14.684.03A.343.343,0,0,1,14.831,0a.4.4,0,0,1,.313.15.445.445,0,0,1,.094.374L12.647,13.65A.416.416,0,0,1,12.244,14ZM11.851,2.876a.122.122,0,0,0-.063.02L4.921,7.356a.739.739,0,0,0-.327.615.747.747,0,0,0,.025.207l.743,2.749a.121.121,0,0,0,.005.017l0,0,0,.009a.169.169,0,0,0,.143.1h.041l.016,0,.013,0,0,0,.008,0,.007,0a.181.181,0,0,0,.1-.146L5.9,9.394q0-.028.008-.053a1.25,1.25,0,0,1,.358-.687L11.931,3.1a.13.13,0,0,0-.08-.224Z\" fill=\"#ffffff\"/>\r\n                                                                                      </svg>\r\n                                                                                    </a> -->\r\n                                                                                  </div>\r\n                                                                                }\r\n                                                                              </div>\r\n                                                                            </div>\r\n                                                                          </div>\r\n\r\n                                                                          <div class=\"dashboard-part3\">\r\n                                                                            <div class=\"part3-left\"></div>\r\n\r\n                                                                            <div class=\"part3-right\"></div>\r\n                                                                          </div>\r\n\r\n\r\n                                                                          <div class=\"trust-brand\">\r\n                                                                            <div class=\"brand-cont\">\r\n                                                                              <img src=\"../assets/icons/trust-brand.svg\" height=\"35\" width=\"35\" class=\"img-responsive\" alt=\"Activatation Message\"/>\r\n                                                                              <h4>Trusted by <span>10 Lakh</span> Users</h4>\r\n                                                                              <h5>Your data is 100% safe</h5>\r\n                                                                            </div>\r\n                                                                          </div>\r\n                                                                        </div>\r\n\r\n                                                                        @if (productType) {\r\n                                                                          <app-product-authorization-popup\r\n                                                                            [productType]=\"productType\"\r\n                                                                            (clickedOnAuthorization)=\"clickedOnAuthorizeProductPopup($event)\" (closePopup)=\"closeAuthorizePopup()\"\r\n                                                                          ></app-product-authorization-popup>\r\n                                                                        }\r\n";

/***/ }),

/***/ 80066:
/*!***********************************************************************************************!*\
  !*** ./src/app/post-login-module/market-dashboard/market-dashboard.component.html?ngResource ***!
  \***********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"market-left\">\r\n\r\n  <div class=\"headwrap\" >\r\n    <h3 class=\"sm-ttl \">Markets</h3>\r\n    <div class=\"togglewrap\">\r\n      @if (selectedTab!='global') {\r\n        <span class=\"text {{segmentSelected=='NSE'?'blue':''}}\" (click)=\"onChange(false)\" >NSE</span>  <label class=\"content\">\r\n        <input type=\"checkbox\" style=\"display:none\" [(ngModel)]=\"checkValue\" (change)=\"onChange($event.target.checked)\"  />\r\n        <div class=\"toggle\">\r\n          <div class=\"btn\"></div>\r\n        </div>\r\n        </label><span class=\"text {{segmentSelected=='BSE'?'blue':''}}\" (click)=\"onChange(true)\">BSE</span>\r\n      }\r\n      <a  class=\"view\" (click)=\"goToMarket()\">\r\n        <img src=\"../../../assets/images/jiffy-dashboard/view.svg\" width=\"15\" height=\"15\" alt=\"view\"> <span class=\"viewall\">VIEW ALL</span>\r\n      </a>\r\n    </div>\r\n\r\n\r\n\r\n  </div>\r\n  <div class=\"navwrap\">\r\n    <ul class=\"nav reset\">\r\n\r\n      <li class=\"navtext {{selectedTab=='trending'?'active':''}}\" (click)=\"selectTab('trending')\">\r\n\r\n        <a class=\"text\">Trending</a>\r\n\r\n      </li>\r\n\r\n      <li class=\"navtext  {{selectedTab=='topGainer'?'active':''}}\" (click)=\"selectTab('topGainer')\">\r\n\r\n        <a class=\"text\">Top Gainer</a>\r\n\r\n      </li>\r\n\r\n      <li class=\"navtext  {{selectedTab=='topLoser'?'active':''}}\" (click)=\"selectTab('topLoser')\">\r\n\r\n        <a class=\"text\">Top Loser</a>\r\n\r\n      </li>\r\n\r\n      <li class=\"navtext  {{selectedTab=='IN'?'active':''}}\" (click)=\"selectTab('IN')\">\r\n\r\n        <a class=\"text\">Indian Indices</a>\r\n\r\n      </li>\r\n      <li class=\"navtext  {{selectedTab=='global'?'active':''}}\" (click)=\"selectTab('global')\">\r\n\r\n        <a class=\"text\">Global Indices</a>\r\n\r\n      </li>\r\n\r\n    </ul>\r\n  </div>\r\n  <div class=\"tablewrap-parent\">\r\n    @if (((selectedTab=='trending')||(selectedTab=='topGainer')||(selectedTab=='topLoser'))&&!isGettingData&&gainer&&gainer?.length) {\r\n      <div class=\"tablewrap\">\r\n        <table>\r\n          <thead>\r\n            <tr>\r\n              <th width=\"170\" class=\"text-left\">Company</th>\r\n              <th width=\"100\" class=\"text-right\">LTP</th>\r\n              <th width=\"100\" class=\"text-right\">Change (%)</th>\r\n              <th width=\"100\" class=\"text-right\">Volume</th>\r\n              <th width=\"100\" class=\"text-right\">Value</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            @for (item  of gainer | customOrderBy:((selectedTab=='trending')?('Volume'):(''))  | slice:0:5; track item ) {\r\n              <tr>\r\n                <td class=\"firstcol cursor-pointer-underscore\" (click)=\"goToCompanyPage(item)\">{{(item?.Name) }}</td>\r\n                <td  class=\"text-right\">{{(item?.LTP) |segment: item?.SegmentId}}</td>\r\n                <td  class=\"text-right {{item?.class}}\">{{item?.Change |value:'1.2-2'}} ({{item?.ChangePer |value:'1.2-2'}}%)</td>\r\n                <td  class=\"text-right\">{{item?.Volume |condense}}</td>\r\n                <td  class=\"text-right\">{{item?.TurnOver |condense}}</td>\r\n              </tr>\r\n            }\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    }\r\n\r\n\r\n    @if (((selectedTab=='IN')||(selectedTab=='global'))&&!isGettingData&&gainer&&gainer?.length) {\r\n      <div class=\"tablewrap in-indices\" >\r\n        <table>\r\n          <thead>\r\n            <tr>\r\n              <th width=\"\" class=\"text-left\">Index Name</th>\r\n              <th width=\"\" class=\"text-right\">LTP</th>\r\n              <th width=\"\" class=\"text-right\">Change (%)</th>\r\n              <!--     <th width=\"\" class=\"text-right\">Open</th> -->\r\n              <th width=\"\" class=\"text-right\">High</th>\r\n              <th width=\"\" class=\"text-right\">Low</th>\r\n              <th width=\"\" class=\"text-right\">Prev. Close</th>\r\n              @if ((selectedTab=='global')) {\r\n                <th width=\"\" class=\"text-right\">Updated Date</th>\r\n              }\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <!--   <pre>{{gainer|json}}</pre> -->\r\n            @for (row of gainer | slice:0:5 ; track row) {\r\n              <tr>\r\n                <td class=\"firstcol {{(selectedTab=='global')?'':'cursor-pointer-underscore'}}\" (click)=\"goToCompanyPageIndex(row)\">{{row?.IndexName}} @if (row?.Country) {\r\n                  <small>{{'('+row?.Country+')'}}</small>\r\n                }</td>\r\n                <td  class=\"text-right\">{{row?.LTP | value:'1.2-2'}}</td>\r\n                <td  class=\"text-right {{row?.class}}\">{{row?.Change | value:'1.2-2'}} ({{row?.ChangePer||0 | value:'1.2-2'}} %)</td>\r\n                <!-- <td  class=\"text-right\">{{(row?.Open) | value:'1.2-2'}}</td> -->\r\n                <td  class=\"text-right\">{{row?.High | value:'1.2-2'}}</td>\r\n                <td  class=\"text-right\">{{row?.Low | value:'1.2-2'}}</td>\r\n                <td  class=\"text-right\">{{row?.Close | value:'1.2-2'}}</td>\r\n                @if ((selectedTab=='global')) {\r\n                  <td  class=\"text-right\" >{{row?.Date | date:'dd-M-yyyy'}}</td>\r\n                }\r\n              </tr>\r\n            }\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    }\r\n\r\n\r\n\r\n    @if (isGettingData) {\r\n      <div class=\"padding-50\">\r\n        <div class=\"loader-css-small\">\r\n        </div>\r\n      </div>\r\n    }\r\n\r\n    @if (!isGettingData && !(gainer&&gainer?.length)) {\r\n      <div  class=\"padding-50\">\r\n        <h4 class=\"text-center\">No Data Found</h4>\r\n      </div>\r\n    }\r\n    <!--   <div class=\"tablewrap global-indices\" style=\"display: none;\">\r\n    <table>\r\n      <thead>\r\n        <tr>\r\n          <th width=\"\" class=\"text-left\">Index Name</th>\r\n          <th width=\"\" class=\"text-right\">LTP</th>\r\n          <th width=\"\" class=\"text-right\">Change (%)</th>\r\n          <th width=\"\" class=\"text-right\">Open</th>\r\n          <th width=\"\" class=\"text-right\">High</th>\r\n          <th width=\"\" class=\"text-right\">Low</th>\r\n          <th width=\"\" class=\"text-right\">Prev. Close</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td class=\"firstcol\">CAC 40<span class=\"country\">(FRANCE)</span> </td>\r\n          <td  class=\"text-right\">5,698.38</td>\r\n          <td  class=\"text-right green\">276.25 (1.64 %)</td>\r\n          <td  class=\"text-right\">16,798.05</td>\r\n          <td  class=\"text-right\">17,187.10</td>\r\n          <td  class=\"text-right\">16,747.70</td>\r\n          <td  class=\"text-right\">16,818.10</td>\r\n        </tr>\r\n        <tr>\r\n          <td class=\"firstcol\">CAC 40<span class=\"country\">(FRANCE)</span> </td>\r\n          <td  class=\"text-right\">5,698.38</td>\r\n          <td  class=\"text-right green\">276.25 (1.64 %)</td>\r\n          <td  class=\"text-right\">16,798.05</td>\r\n          <td  class=\"text-right\">17,187.10</td>\r\n          <td  class=\"text-right\">16,747.70</td>\r\n          <td  class=\"text-right\">16,818.10</td>\r\n        </tr>\r\n        <tr>\r\n          <td class=\"firstcol\">CAC 40<span class=\"country\">(FRANCE)</span> </td>\r\n          <td  class=\"text-right\">5,698.38</td>\r\n          <td  class=\"text-right green\">276.25 (1.64 %)</td>\r\n          <td  class=\"text-right\">16,798.05</td>\r\n          <td  class=\"text-right\">17,187.10</td>\r\n          <td  class=\"text-right\">16,747.70</td>\r\n          <td  class=\"text-right\">16,818.10</td>\r\n        </tr>\r\n        <tr>\r\n          <td class=\"firstcol\">CAC 40<span class=\"country\">(FRANCE)</span> </td>\r\n          <td  class=\"text-right\">5,698.38</td>\r\n          <td  class=\"text-right green\">276.25 (1.64 %)</td>\r\n          <td  class=\"text-right\">16,798.05</td>\r\n          <td  class=\"text-right\">17,187.10</td>\r\n          <td  class=\"text-right\">16,747.70</td>\r\n          <td  class=\"text-right\">16,818.10</td>\r\n        </tr>\r\n        <tr>\r\n          <td class=\"firstcol\">CAC 40<span class=\"country\">(FRANCE)</span> </td>\r\n          <td  class=\"text-right\">5,698.38</td>\r\n          <td  class=\"text-right green\">276.25 (1.64 %)</td>\r\n          <td  class=\"text-right\">16,798.05</td>\r\n          <td  class=\"text-right\">17,187.10</td>\r\n          <td  class=\"text-right\">16,747.70</td>\r\n          <td  class=\"text-right\">16,818.10</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div> -->\r\n\r\n</div>\r\n\r\n</div>";

/***/ })

}]);