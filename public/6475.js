(self["webpackChunkjiffy_upgraded"] = self["webpackChunkjiffy_upgraded"] || []).push([[6475],{

/***/ 36475:
/*!*******************************************************************************!*\
  !*** ./src/app/tools-module/margin-calculator/margin-calculator.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MarginCalculatorComponent: () => (/* binding */ MarginCalculatorComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _margin_calculator_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./margin-calculator.component.html?ngResource */ 70117);
/* harmony import */ var _margin_calculator_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./margin-calculator.component.scss?ngResource */ 77677);
/* harmony import */ var _margin_calculator_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_margin_calculator_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 70980);
/* harmony import */ var src_app_services_rest_tool_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/rest/tool.service */ 91387);
/* harmony import */ var src_app_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/shared-data/shared-data.service */ 46013);
/* harmony import */ var src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/utils/utils.service */ 89893);
/* harmony import */ var _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/seo/seo.service */ 44897);
/* harmony import */ var _pipes_value_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pipes/value.pipe */ 50615);
/* harmony import */ var _directives_input_restrict2_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../directives/input-restrict2.directive */ 5833);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 60177);














let MarginCalculatorComponent = class MarginCalculatorComponent {
  /**
     * dependency injection and variable intialization
     * @param commonService for api call
     * */
  constructor(rest, utils, shared, router, zone, changeDetector, seo) {
    this.rest = rest;
    this.utils = utils;
    this.shared = shared;
    this.router = router;
    this.zone = zone;
    this.changeDetector = changeDetector;
    this.seo = seo;
    this.cssClasses = {
      sortAscending: 'icon-angle-down',
      sortDescending: 'icon-angle-up',
      pagerLeftArrow: 'icon-angle-left',
      pagerRightArrow: 'icon-angle-right',
      pagerPrevious: 'icon-angle-left',
      pagerNext: 'icon-angle-right'
    };
    this.setConfig();
  }
  /** set config for margin calculator*/
  setConfig() {
    this.marginConfig = {
      contracts: [],
      action: false,
      searchInput: "",
      startPos: 0,
      limit: 10,
      searchedData: [],
      exchangeVisible: false,
      exchange: "FO",
      activeTab: 1,
      data: {
        1: [],
        2: [],
        3: []
      },
      searchFocus: false,
      qty: 0,
      loader: false,
      contractData: {},
      totalSpan: 0,
      totalExposure: 0,
      totalMargin: 0,
      marginBenefit: 0,
      premium: 0,
      tempMarginData: [],
      marketLot: 0,
      isOptionScrip: false,
      apiCount: 0,
      segmentArr: [1, 3, 6, 14, 8, 39],
      spanLoader: false,
      tableLoader: false,
      isShowNA: false
    };
  }
  ngOnInit() {
    this.getSearchData(false, true); // call api to show default contract and its details
    this.getSocketData();
    this.seo.setMeta('margin-calculator');
  }
  /** to get search data
   * @param isFromScroll isFromScroll flag to identify whether function called from on scroll or from other source
   * @param isFromOnPageLoad isFromOnPageLoad flag to identify whether function called from on page load of margin calculator
  */
  getSearchData(isFromScroll, isFromOnPageLoad) {
    if (this.searchSubscription) {
      this.searchSubscription.unsubscribe();
      this.searchSubscription = null;
    }
    if (!isFromScroll || !isFromOnPageLoad) this.marginConfig.loader = true;
    let data = {
      "strScripName": isFromOnPageLoad ? 'nifty' : this.marginConfig.searchInput,
      "StartPos": isFromOnPageLoad ? 0 : this.marginConfig.startPos,
      "NoOfRecords": isFromOnPageLoad ? 1 : this.marginConfig.limit,
      "strSegment": isFromOnPageLoad ? 'FO' : this.marginConfig.exchange
    };
    this.searchSubscription = this.rest.getSearchData(data).subscribe(res => {
      if (!isFromScroll || !isFromOnPageLoad) this.marginConfig.loader = false;
      if (res.Status === "Success" && res.Response && res.Response.length) {
        if (isFromOnPageLoad) {
          this.marginConfig.searchInput = this.marginConfig.segmentArr.indexOf(res.Response[0].SegmentId) > -1 ? res.Response[0].Symbol : res.Response[0].SecName.replace('|', ' ');
          this.lastSelectedScrip = this.marginConfig.segmentArr.indexOf(res.Response[0].SegmentId) > -1 ? res.Response[0].Symbol : res.Response[0].SecName.replace('|', ' ');
          this.marginConfig.qty = res.Response[0].MarketLot;
          this.marginConfig.marketLot = this.marginConfig.qty;
          this.marginConfig.contractData = {
            symbol: this.marginConfig.segmentArr.indexOf(res.Response[0].SegmentId) > -1 ? res.Response[0].Symbol : res.Response[0].SecName.replace('|', ' '),
            secDesc: res.Response[0].SecDesc,
            qty: res.Response[0].MarketLot,
            action: false,
            Token: res.Response[0].Token,
            SegmentId: res.Response[0].SegmentId,
            IM: 0,
            exposure: 0,
            total: 0,
            strike: ["CE", "PE"].indexOf(res.Response[0].OptionType) > -1 ? res.Response[0].StrikePrice / res.Response[0].PriceDivisor >= 0 ? res.Response[0].StrikePrice / res.Response[0].PriceDivisor : 0 : 'NA',
            optionType: res.Response[0].OptionType,
            marketLot: this.marginConfig.marketLot
          };
          return;
        }
        this.marginConfig.datalength = res.Response.length;
        if (isFromScroll) {
          res.Response.forEach(element => {
            this.marginConfig.searchedData.push(element);
          });
        } else {
          this.marginConfig.searchedData = res.Response;
        }
        this.marginConfig.data[this.marginConfig.activeTab] = this.marginConfig.searchedData;
      } else {
        this.marginConfig.searchedData = [];
        this.marginConfig.searchFocus = true;
      }
    }, err => {
      if (!isFromScroll) this.marginConfig.loader = false;
      this.marginConfig.searchedData = [];
      this.marginConfig.searchFocus = true;
    });
  }
  /**
  * on input key press search api call
  */
  onInputPress() {
    this.zone.run(() => {
      this.marginConfig.startPos = 0;
      if ((this.marginConfig.searchInput || "").trim().length < 3) {
        this.marginConfig.searchedData = [];
      } else {
        this.marginConfig.searchedData = [];
        this.getSearchData(false);
      }
    });
  }
  /**
   * event from ul scroll
   * @param event
   */
  onUlScroll(event) {
    if (this.marginConfig.searchInput && this.marginConfig.searchInput.length >= 3 && event && event.path) {
      let scrollHeight = event.path[0].scrollHeight;
      let scrollBottom = event.path[0].scrollTop + this.searchUI.nativeElement.offsetHeight;
      this.zone.run(() => {
        if (scrollHeight <= Math.ceil(scrollBottom) && this.marginConfig.datalength == 10) {
          this.marginConfig.startPos = this.marginConfig.startPos + this.marginConfig.limit;
          this.getSearchData(true);
        }
      });
    }
  }
  clickout(event) {
    if (!this.marginConfig.searchFocus && event.target.className.indexOf('marginSearch') <= -1) {
      this.marginConfig.exchangeVisible = false;
      this.marginConfig.startPos = 0;
      this.marginConfig.limit = 10, this.marginConfig.searchedData = [];
      this.marginConfig.data = {
        1: [],
        2: [],
        3: []
      };
      return;
    }
    this.marginConfig.exchangeVisible = true;
  }
  /** to get active exchangetab
   * @param tabIndex is the index of selected tab
   * @param exchange exchange i.e.FO/COM/CD
  */
  activateTab(tabIndex, exchange) {
    this.marginConfig.activeTab = Number(tabIndex);
    this.marginConfig.exchange = exchange;
    if (this.marginConfig.data[tabIndex] && this.marginConfig.data[tabIndex].length) {
      this.marginConfig.searchedData = this.marginConfig.data[tabIndex];
      return;
    }
    this.onInputPress();
  }
  /** to store selected scrip data in contractData array. add default values for IM, exposure, total, strike
  * @param scripData selected contract data
  */
  getScrip(scripData) {
    this.marginConfig.contractData = {};
    this.marginConfig.searchInput = this.marginConfig.segmentArr.indexOf(scripData.SegmentId) > -1 ? scripData.Symbol : scripData.SecName.replace('|', ' ');
    this.lastSelectedScrip = this.marginConfig.segmentArr.indexOf(scripData.SegmentId) > -1 ? scripData.Symbol : scripData.SecName.replace('|', ' ');
    this.marginConfig.searchFocus = false;
    this.marginConfig.qty = scripData.MarketLot;
    this.marginConfig.marketLot = scripData.MarketLot;
    this.marginConfig.contractData = {
      symbol: this.marginConfig.segmentArr.indexOf(scripData.SegmentId) > -1 ? scripData.Symbol : scripData.SecName.replace('|', ' '),
      secDesc: scripData.SecDesc,
      qty: scripData.MarketLot,
      action: this.marginConfig.action,
      Token: scripData.Token,
      SegmentId: scripData.SegmentId,
      IM: 0,
      exposure: 0,
      total: 0,
      strike: ["CE", "PE"].indexOf(scripData.OptionType) > -1 ? scripData.StrikePrice / scripData.PriceDivisor >= 0 ? scripData.StrikePrice / scripData.PriceDivisor : 0 : 'NA',
      optionType: scripData.OptionType,
      marketLot: this.marginConfig.marketLot
    };
  }
  /** on focus of input of search */
  onFocus() {
    this.marginConfig.searchFocus = true;
  }
  /** focus out event of search input */
  focusOut() {
    this.marginConfig.searchFocus = false;
    if (this.lastSelectedScrip) this.marginConfig.searchInput = this.lastSelectedScrip;
  }
  /**to get margin data from API
   * @param scripArray segment wise created array
   * @param index segment index stored in numOfSeg array i. order to identify on which position segment Id exist (in order to empty tempMarginData i.e. on first call we have to empty tempMarginData array)
   * @param numOfSegLen length of the number of segments present array
   */
  getMarginData(scripArray, index, numOfSegLen, isFromDelete) {
    let request = {
      segmentId: scripArray[0].SegmentId,
      token_qty: this.createTokenQtyString(scripArray)
    };
    if (!this.marginConfig.apiCount && !isFromDelete) {
      this.marginConfig.spanLoader = this.marginConfig.tableLoader = true;
    }
    ;
    this.marginCalSubscription = this.rest.getMarginCalculatorData(request.segmentId, request.token_qty).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.finalize)(() => {
      if (numOfSegLen == this.marginConfig.apiCount) {
        this.marginConfig.spanLoader = false;
        if (this.marginConfig.isOptionScrip && !this.marginConfig.premium) {
          this.utils.subscribeMultitouchline(this.getSellableOptionScrip());
          if (!this.utils.isSocketConnected()) this.getMultitouchline();
        }
        ;
        if (!this.marginConfig.totalMargin) {
          // if in api we did'nt get total margin then calculate at frontend
          this.marginConfig.totalMargin = this.marginConfig.totalSpan + this.marginConfig.totalExposure;
        }
        this.marginConfig.isShowNA = !this.marginConfig.totalMargin && !this.marginConfig.totalSpan && !this.marginConfig.totalExposure ? true : false;
        // if (this.marginConfig.tempMarginData.length) this.marginConfig.contracts = this.marginConfig.tempMarginData;
        // this.marginConfig.contracts = JSON.parse(JSON.stringify(this.marginConfig.contracts));
        this.changeDetector.detectChanges();
      }
      if (this.marginConfig.contracts.length && this.utils.isMobileDevice()) document.getElementById("content").scrollIntoView();
    })).subscribe(res => {
      if (!this.marginConfig.apiCount) this.marginConfig.totalSpan = this.marginConfig.totalExposure = this.marginConfig.totalMargin = this.marginConfig.marginBenefit = this.marginConfig.premium = 0;
      this.marginConfig.apiCount++;
      if (res.Status == 'Success' && res.Response && res.Response.margins && res.Response.margins.length) {
        // scripArray.forEach((element, index) => {
        //   element.IM = res.Response.margins[index].InitialMargin;
        //   element.exposure = res.Response.margins[index].ExpMgn;
        //   element.total = element.IM + element.exposure;
        //   this.marginConfig.tempMarginData.push(element);
        // });
        this.setData(res.Response.margins);
        this.marginConfig.totalSpan = this.marginConfig.totalSpan + res.Response.Span_Summary.Span;
        this.marginConfig.totalExposure = this.marginConfig.totalExposure + res.Response.Span_Summary.ExpMgn;
        this.marginConfig.marginBenefit = this.marginConfig.marginBenefit + res.Response.Span_Summary.MgnBenefit;
        this.marginConfig.premium = this.marginConfig.premium + res.Response.Span_Summary.OptionPremium;
        this.marginConfig.totalMargin = this.marginConfig.totalMargin + res.Response.Span_Summary.TotalMgn;
        if (!this.marginConfig.contracts.length) this.marginConfig.totalSpan = this.marginConfig.totalExposure = this.marginConfig.totalMargin = this.marginConfig.marginBenefit = this.marginConfig.premium = 0;
      } else {
        this.utils.error('Error', 'Something Went Wrong');
        this.marginConfig.tableLoader = false;
      }
    }, err => {
      this.marginConfig.tableLoader = false;
      this.marginConfig.apiCount++;
      this.utils.error('Error', 'Something Went Wrong');
    });
  }
  /**
   * KeyPress event allowing only digits
   * @param event Key press Event
   */
  allowOnlyDigits(event) {
    let key = event.keyCode || event.charCode;
    return [8, 0, 46].indexOf(key) == -1 && key < 48 || key > 57 ? false : true;
  }
  /** Add/Reset contract
   * @param isAdd isAdd is flag to identify whether user clicks ADD button or RESET button
  */
  addResetContract(isAdd) {
    if (!this.marginConfig.qty || this.marginConfig.qty == '0') return;
    if (isAdd) {
      let isCheck;
      this.marginConfig.isOptionScrip = ['PE', 'CE'].indexOf(this.marginConfig.contractData.optionType) > -1 && this.marginConfig.contractData.action ? true : this.marginConfig.isOptionScrip;
      if (this.marginConfig.searchInput) {
        isCheck = this.marginConfig.contracts.find(element => element.Token === this.marginConfig.contractData.Token); // to check whether token present in array or not
      }
      if (isCheck && (this.marginConfig.contractData.qty != this.marginConfig.qty || this.marginConfig.contractData.action != this.marginConfig.action)) {
        this.marginConfig.contractData.qty = this.marginConfig.qty.toString().replace(/^0+/, '');
        this.marginConfig.contractData.action = this.marginConfig.action;
        this.marginConfig.contracts.map(element => {
          if (element.Token === this.marginConfig.contractData.Token) {
            element.qty = this.marginConfig.qty.toString().replace(/^0+/, '');
            element.action = this.marginConfig.action;
          }
          return element;
        }); // to check whether token present in array or not
        this.calculateQty();
        this.callMargin();
        return;
      } else if (!this.marginConfig.contractData.symbol || isCheck || !this.marginConfig.searchInput) {
        this.utils.error('Error', isCheck ? "You have already added this contract. Please select different scrip" : "Please select scrip");
        return;
      }
      this.marginConfig.contractData.qty = this.marginConfig.qty.toString().replace(/^0+/, '');
      this.marginConfig.contractData.action = this.marginConfig.action;
      this.marginConfig.contracts = [...this.marginConfig.contracts, this.marginConfig.contractData];
      this.calculateQty();
      this.callMargin();
      this.utils.setTrackMoeEvent("addScripInMarginTable", this.marginConfig.contractData);
    } else {
      this.marginConfig.contracts = [];
      this.marginConfig.isOptionScrip = false;
      this.marginConfig.totalSpan = this.marginConfig.totalExposure = this.marginConfig.totalMargin = this.marginConfig.marginBenefit = this.marginConfig.premium = 0;
      this.marginConfig.qty = this.marginConfig.marketLot;
      this.marginConfig.isShowNA = false;
      document.documentElement.scrollTop = 0;
      // this.getSearchData(false, true);
    }
    if (this.marginConfig.contracts.length && this.utils.isMobileDevice()) document.getElementById("content").scrollIntoView();
  }
  /** on click of search input */
  onSearchClick() {
    if (this.marginConfig.searchInput.length >= 3 && !this.marginConfig.searchedData.length) {
      this.getSearchData();
    }
  }
  /** on Action toggle Change */
  //  public onActionChange() {
  // let scrip;
  //     scrip = this.marginConfig.contracts.filter((item) =>{
  //       return item.Token == this.marginConfig.contractData.Token;
  //     })
  //     if(scrip.length) return;
  // this.marginConfig.contractData.action = this.marginConfig.action;
  // this.marginConfig.contractData.action = this.marginConfig.action;
  //  }
  /** to delete selected contract
   * @param index of the contract that user wants to delete
  */
  deleteContract(index) {
    let isDeletedDataOption = false;
    if (this.marginConfig.contracts.length < 2) {
      this.marginConfig.totalSpan = this.marginConfig.totalExposure = this.marginConfig.totalMargin = this.marginConfig.marginBenefit = this.marginConfig.premium = 0;
      this.marginConfig.contracts = [];
      this.marginConfig.isOptionScrip = false;
      this.marginConfig.isShowNA = false;
    } else {
      isDeletedDataOption = ['PE', 'CE'].indexOf(this.marginConfig.contracts[index].optionType) > -1 && this.marginConfig.contracts[index].action ? true : false;
      this.marginConfig.contracts.splice(index, 1);
      this.marginConfig.contracts = JSON.parse(JSON.stringify(this.marginConfig.contracts));
      if (isDeletedDataOption) {
        this.marginConfig.isOptionScrip = this.getSellableOptionScrip().length ? true : false;
      }
      this.callMargin(true);
    }
  }
  /**
   * Life Cycle Hook for destruction
   */
  ngOnDestroy() {
    if (this.marginCalSubscription) {
      this.marginCalSubscription.unsubscribe();
      this.marginCalSubscription = null;
    }
    if (this.searchSubscription) {
      this.searchSubscription.unsubscribe();
      this.searchSubscription = null;
    }
    if (this.multiLineSubscription) {
      this.multiLineSubscription.unsubscribe();
      this.multiLineSubscription = null;
    }
    this.utils.unSubscribeMultitouchline(this.getSellableOptionScrip());
  }
  /** navigate to company page
   * @param scrip scrip details of selected company
  */
  // public goToCompany(scrip: any) {
  //   let companyPath = scrip.secDesc.toLowerCase().replace(/[\s|\&|\%]/g, '').trim();
  //   let urlPrefix = '/instrument/' + ([1, 2, 3].indexOf(scrip.segmentId) > -1 ? 'equity/' : [5, 7].indexOf(scrip.segmentId) > -1 ? 'commodity/' : 'currency/');
  //   let companyURL = urlPrefix + (companyPath) + '/' + scrip.segmentId + '/' + scrip.token;
  //   const segmentToken = scrip.segmentId + '&' + scrip.token;
  //   localStorage.setItem('presentToken', JSON.stringify(segmentToken));
  //   this.router.navigate([companyURL]);
  // }
  /** on quantity change */
  // onQtyChange() {
  // if(this.marginConfig.contracts.length) {
  //   let scrip;
  //   scrip = this.marginConfig.contracts.filter((item) =>{
  //     return item.Token == this.marginConfig.contractData.Token;
  //   })
  //   if(scrip.length) return;
  // }
  // this.marginConfig.contractData.marketLot = this.marginConfig.marketLot;
  // this.marginConfig.contractData.marketLot = this.marginConfig.marketLot;
  // }
  /** to create token_Qty string in order to pass to request
   * @scripArray segment wise scrip array
  */
  createTokenQtyString(scripArray) {
    let tokenQty = "";
    scripArray.forEach((element, index) => {
      tokenQty = tokenQty + element.Token + '%7C' + (element.action ? '-' + element.qty : element.qty) + (scripArray.length - 1 > index ? '~' : '');
    });
    return tokenQty;
  }
  /** call margin by finding number of segment present in list to make number of API calls. store segment array in numOfSeg variable. add respective scrip in order to call multitoken API and show multisegment contracts in list*/
  callMargin(isFromDelete) {
    this.marginConfig.apiCount = 0;
    let scripArray = [];
    const numOfSeg = [...new Set(this.marginConfig.contracts.map(item => item.SegmentId))]; // fimd number of segments present in list
    for (let i = 0; i < numOfSeg.length; i++) {
      // filter out same segment scrip and store segment wise scrip in scripArray
      scripArray[i] = this.marginConfig.contracts.filter(item => {
        delete item.LTP; // to remove key from object
        return item.SegmentId == numOfSeg[i];
      });
      this.getMarginData(scripArray[i], i, numOfSeg.length, isFromDelete);
    }
  }
  /** to calculate quantity. which is required to auto correct entered quantity. i.e. multiple of market lot. */
  calculateQty() {
    let result = Number(this.marginConfig.qty) / this.marginConfig.marketLot; // divide entered price by market lot
    if (Number.isInteger(result)) return; // if result is in interger then return else add 1 to result and then result * market lot
    result = Math.trunc(result) + 1; // to remove decimal and add 1 lot to the same
    this.marginConfig.contractData.qty = this.marginConfig.qty = result * this.marginConfig.marketLot;
  }
  /** get multitouchline and calculate premium */
  getMultitouchline() {
    let totalPremium = 0;
    let optionSellableScrip = this.getSellableOptionScrip(); // to get sellable option scrip list
    const tokens = this.utils.generateTokens(optionSellableScrip, 'SegmentId', 'Token');
    let request = {
      "UserId": this.utils.getUserId() || '',
      "SessionId": this.utils.getSessionId() || "",
      "MultipleTokens": tokens
    };
    this.multiLineSubscription = this.utils.commonGetMultipleTouchLineCall(request).subscribe(data => {
      if (data.Status == 'Success' && data.Response && data.Response.lMT && data.Response.lMT.length) {
        console.log("optionSellableScrip multitouchline19 ", JSON.parse(JSON.stringify(optionSellableScrip)));
        data.Response.lMT.forEach(element => {
          let scrip = optionSellableScrip.filter(scrip => {
            return element.Token == scrip.Token;
          });
          totalPremium = totalPremium + element['LTP'] / element['PriceDivisor'] * (scrip[0].qty * scrip[0].marketLot); // to calculate premium (Premium receivable = LTP of Sell Option * Lot size)
        });
        this.marginConfig.premium = totalPremium;
      }
    }, err => {});
  }
  /** To get sellable option scrip array */
  getSellableOptionScrip() {
    let optionScrip = [];
    optionScrip = this.marginConfig.contracts.filter(item => {
      return ['PE', 'CE'].indexOf(item.optionType) > -1 && item.action;
    });
    return optionScrip;
  }
  /** to get socket data */
  getSocketData() {
    this.utils.broadcastObservable('watchlist').subscribe(res => {
      let optionSellableScrip = this.getSellableOptionScrip(); // to get sellable option scrip list
      let scrip = optionSellableScrip.filter(obj => {
        return res[0]['1'] == obj.SegmentId && obj.Token == res[0]["7"];
      });
      if (!optionSellableScrip.length && !scrip[0] || scrip.length && scrip[0].hasOwnProperty("LTP")) return;
      let obj = scrip[0];
      this.utils.unSubscribeMultitouchline([{
        'SegmentId': Number(res[0]['1']),
        'Token': Number(res[0]['7'])
      }]);
      let priceDivisor = this.utils.getDefaultPriceDivisor(res[0]['1'], res[0]['7']);
      obj.LTP = (Number(res[0]["8"]) || 0) / priceDivisor;
      let data = optionSellableScrip.filter(data => {
        return Number(res[0]['7']) == data.Token;
      });
      this.marginConfig.premium = this.marginConfig.premium + (obj['LTP'] || 0) * data[0].qty; // to calculate premium (Premium receivable = LTP of Sell Option * Lot size)
    });
  }
  /** to set span margin, exposure margin, total */
  setData(contractData) {
    let scrip;
    this.marginConfig.contracts.forEach(element => {
      scrip = contractData.filter(data => {
        return element.Token == data.Token;
      });
      if (scrip.length) {
        element.IM = scrip[0].InitialMargin;
        element.exposure = scrip[0].ExpMgn;
        element.total = element.IM + element.exposure;
        element.qty = element.qty.toString().replace(/^0+/, '');
      }
    });
    this.marginConfig.tableLoader = false;
    this.changeDetector.detectChanges();
  }
  navigateToOpenFreeAccount() {
    window.open(`${this.utils.getChoiceindiaBaseURL()}/open-free-demat-account?utm_source=choice-finx-web&utm_medium=open_demat_account_banner&utm_campaign=choice_finx_demat_banner`, "_self");
  }
  static {
    this.ctorParameters = () => [{
      type: src_app_services_rest_tool_service__WEBPACK_IMPORTED_MODULE_2__.ToolService
    }, {
      type: src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_4__.UtilsService
    }, {
      type: src_app_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__.SharedDataService
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.NgZone
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef
    }, {
      type: _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_5__.SeoService
    }];
  }
  static {
    this.propDecorators = {
      searchUI: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild,
        args: ['searchUI', {
          static: false
        }]
      }],
      marginCalForm: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild,
        args: ['marginCalForm', {
          static: false
        }]
      }],
      clickout: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.HostListener,
        args: ['document:click', ['$event']]
      }]
    };
  }
};
MarginCalculatorComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-margin-calculator',
  template: _margin_calculator_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _directives_input_restrict2_directive__WEBPACK_IMPORTED_MODULE_7__.InputRestrict2Directive, _pipes_value_pipe__WEBPACK_IMPORTED_MODULE_6__.ValuePipe],
  styles: [(_margin_calculator_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__metadata)("design:paramtypes", [src_app_services_rest_tool_service__WEBPACK_IMPORTED_MODULE_2__.ToolService, src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_4__.UtilsService, src_app_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__.SharedDataService, _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router, _angular_core__WEBPACK_IMPORTED_MODULE_10__.NgZone, _angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef, _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_5__.SeoService])], MarginCalculatorComponent);


/***/ }),

/***/ 77677:
/*!********************************************************************************************!*\
  !*** ./src/app/tools-module/margin-calculator/margin-calculator.component.scss?ngResource ***!
  \********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ 8564);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 98557);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@charset "UTF-8";
/*Bootstrap Override*/
/*Custom variables*/
/*Icons Variables*/
/*Responsive screen width*/
.wrap-card {
  position: fixed;
  left: 0;
  right: 0;
  top: 60px;
  bottom: 60px;
  padding-bottom: 10px;
  z-index: 9;
  overflow: auto;
  margin-bottom: 0;
  background: #F4F3F8;
}
.wrap-card.theme-2 {
  position: static;
  margin-bottom: 40px;
  background: none;
  box-shadow: none;
}
.wrap-card.theme-2 .left-section {
  background: none;
}
@media (min-width: 1550px) {
  .wrap-card {
    bottom: 45px;
  }
}
@media (max-width: 990px) {
  .wrap-card {
    display: block;
  }
}
@media (min-width: 1550px) {
  .wrap-card {
    top: 80px;
  }
}
@media (max-width: 990px) {
  .wrap-card {
    top: 40px;
  }
}
@media (max-width: 767px) {
  .wrap-card {
    top: 60px;
    bottom: 80px;
  }
}
@media (max-width: 767px) and (orientation: landscape) {
  .wrap-card {
    bottom: 45px;
  }
}

.switch-wrap {
  margin-top: 0;
  margin-bottom: 40px;
}

.expandcharges {
  display: flex;
  justify-content: space-between;
}
.expandcharges span {
  font-weight: bold;
}
.expandcharges + .expandcharges {
  margin-top: 5px;
  font-size: 15px;
}
.expandcharges.bold {
  font-weight: bold;
}

.left-section {
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1100px;
  padding: 50px;
  background: #F4F3F8;
  margin: 0 auto;
}
@media (max-width: 990px) {
  .left-section {
    width: 100%;
  }
}
@media (max-width: 1550px) {
  .left-section {
    padding: 40px;
  }
}
@media (max-width: 767px) {
  .left-section {
    padding: 15px;
  }
}
.left-section .wrapper {
  width: 100%;
}
.left-section .title {
  font-weight: bold;
  margin-bottom: 10px;
  margin-top: 0;
  font-size: 24px;
}
.left-section .sub-title {
  font-size: 16px;
  line-height: 24px;
  color: #797979;
  line-height: 1.5;
}
.left-section .select-region {
  margin: 20px 0;
  display: block;
}
.left-section .select-region span {
  line-height: 2.5;
  font-size: 18px;
  color: #000000;
  display: inline-block;
  vertical-align: middle;
}
.left-section .select-region .custom-select {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  min-width: 170px;
  background: transparent;
}
.left-section .nav-tabs {
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.16);
  border-bottom: 0;
}
.left-section .nav-tabs li a {
  padding: 15px 25px;
  font-weight: 600;
}
@media (max-width: 480px) {
  .left-section .nav-tabs li a {
    padding: 15px 18px;
  }
}
.left-section .nav-tabs.inside-tab {
  margin-bottom: 0;
  box-shadow: none;
}
.left-section .nav-tabs.inside-tab li a {
  background: transparent;
}
.left-section .nav-tabs.inside-tab li.active a, .left-section .nav-tabs.inside-tab li:hover a {
  background: #ffffff;
  color: #EE404A !important;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.16);
}
.left-section .inside-tab-content {
  background: #ffffff;
  padding: 40px;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.16);
  z-index: 9;
  position: relative;
}
@media (max-width: 1550px) {
  .left-section .inside-tab-content {
    padding: 20px;
  }
}

.right-section {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to right, #ffc174 0%, #fe616e 100%);
  color: #ffffff;
  width: 40%;
  padding: 50px;
  font-size: 24px;
  text-align: center;
}
@media (max-width: 990px) {
  .right-section {
    width: 100%;
    padding: 40px;
    margin-bottom: 40px;
  }
}
@media (max-width: 1550px) {
  .right-section {
    padding: 25px;
    font-size: 18px;
  }
}
@media (max-width: 1200px) {
  .right-section {
    padding: 20px;
    font-size: 16px;
  }
}
@media (max-width: 767px) {
  .right-section {
    padding: 15px;
  }
}
@media (max-width: 480px) {
  .right-section {
    margin-bottom: 70px;
  }
}
.right-section input {
  font-weight: bold;
}
.right-section h3 {
  font-size: 24px;
  text-transform: uppercase;
  margin-bottom: 70px;
  margin-top: 0;
}
@media (max-width: 1550px) {
  .right-section h3 {
    font-size: 18px;
    margin-bottom: 30px;
  }
}
.right-section .percentage-input {
  background: transparent;
  border: none;
  outline: none;
  box-shadow: none;
  border-bottom: 1px solid #ffffff;
  width: 50px;
  text-align: center;
}
.right-section .btn {
  font-size: 18px;
  font-weight: bold;
  border-radius: 10px;
  box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.16);
  padding: 15px 22px;
  background-image: linear-gradient(to bottom, #ffc174 0%, #fe616e 100%);
}

/**Form Group*/
.form-group {
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
@media (max-width: 767px) {
  .form-group {
    margin-bottom: 10px;
  }
}
.form-group label {
  font-size: 16px;
  color: #333333;
  font-weight: normal;
  margin-bottom: 0px;
  width: 50%;
}
@media (max-width: 1550px) {
  .form-group label {
    margin-bottom: 5px;
  }
}
@media (max-width: 1200px) {
  .form-group label {
    font-size: 14px;
  }
}
.form-group .form-control {
  color: #000000;
  border: none;
  border-bottom: 1px solid #F4F3F8;
  box-shadow: none;
  outline: none;
  font-weight: 600;
  font-size: 18px;
  width: 50%;
}
@media (max-width: 1200px) {
  .form-group .form-control {
    font-size: 16px;
  }
}
.form-group .form-control:focus {
  outline: none;
}
.form-group .input-wrap input {
  width: 100%;
}
.form-group .input-wrap p {
  margin-top: 5px;
  margin-bottom: 0;
}
@media (max-width: 767px) {
  .form-group .input-wrap .marginpara {
    margin-top: 10px;
    margin-bottom: 5px;
  }
}
.form-group .price {
  position: relative;
  width: 50%;
}
.form-group .price .form-control {
  padding-left: 25px;
  width: 100%;
}
.form-group .price:before {
  content: "₹";
  position: absolute;
  left: 0;
  font-weight: normal;
  font-size: 20px;
  top: 2px;
}
@media (max-width: 1200px) {
  .form-group .price:before {
    font-size: 18px;
    font-size: 1.125rem;
  }
}
.form-group .percentage {
  position: relative;
  width: 50%;
}
.form-group .percentage .form-control {
  padding-right: 25px;
  width: 100%;
}
.form-group .percentage:after {
  content: "%";
  position: absolute;
  right: 0;
  font-weight: normal;
  font-size: 20px;
  top: 2px;
}
@media (max-width: 1200px) {
  .form-group .percentage:after {
    font-size: 18px;
  }
}

.dark-card {
  background-image: linear-gradient(to right, #ffc174 0, #fe616e 100%);
  border-radius: 0;
  background: #3E4150;
}
@media (min-width: 768px) {
  .dark-card {
    order: 2;
  }
}

.mb-0 {
  margin-bottom: 0px !important;
}

.checkbox-wrap {
  margin: 40px 0;
  display: flex;
  align-items: center;
}
@media (max-width: 1550px) {
  .checkbox-wrap {
    margin: 20px 0;
  }
}
.checkbox-wrap .checkbox-button + .checkbox-button {
  margin-left: 40px;
}

.flex-div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #F4F3F8;
}
.flex-div label {
  margin-bottom: 0;
  min-width: 50%;
  padding-right: 15px;
}
.flex-div .form-control {
  border-bottom: 0;
}

.pink-color label {
  color: #EE404A;
}
.pink-color .form-control {
  color: #EE404A;
}
.pink-color .price:before {
  color: #EE404A;
}

/*Checkbox*/
.checkbox-button {
  cursor: pointer;
  margin-bottom: 18px;
}
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
.checkbox-button input[type=radio]:checked + .checkbox-button__control:after {
  content: "";
  display: block;
  position: absolute;
  top: 3px;
  left: 3px;
  width: 15px;
  border-radius: 2px;
  height: 15px;
  background-image: linear-gradient(to right, #ffc174 0%, #fe616e 100%);
}
.checkbox-button .checkbox-button__control {
  position: relative;
  display: inline-block;
  width: 25px;
  border-radius: 2px;
  height: 25px;
  padding: 0.4rem;
  margin-right: 8px;
  vertical-align: top;
  background-color: inherit;
  border: 2px solid #F4F3F8;
  vertical-align: middle;
}
.checkbox-button .checkbox-button__label {
  display: inline-block;
  vertical-align: middle;
  font-size: 14px;
  color: #797979;
}
.checkbox-button .checkbox-button__label.selected {
  color: #F4F3F8;
}

.brokerage-charges-row {
  color: #ffffff;
}
.brokerage-charges-row .hrline-cnote {
  margin-top: 20px;
  margin-bottom: 20px;
}
.brokerage-charges-row span {
  font-weight: bold;
}

.brokerage-summary-row {
  color: #ffffff;
}
.brokerage-summary-row .brokerage-summary-col1,
.brokerage-summary-row .brokerage-summary-col2 {
  font-size: 13px;
}
.brokerage-summary-row .brokerage-summary-col1 p,
.brokerage-summary-row .brokerage-summary-col2 p {
  margin-bottom: 5px;
}
.brokerage-summary-row .brokerage-summary-col1 span,
.brokerage-summary-row .brokerage-summary-col2 span {
  float: right;
  text-align: left;
  font-weight: bold;
}
.brokerage-summary-row .brokerage-summary-col2 {
  font-size: 14px;
  margin-top: 10px;
}

.summarytotal {
  margin-bottom: 30px;
}

.showcharges-section {
  padding: 0 15px;
}
.showcharges-section a {
  display: inline-block;
  color: #ffffff;
  font-weight: bold;
  text-decoration: none;
}
.showcharges-section a i {
  display: inline-block;
  vertical-align: middle;
  font-size: 25px;
  margin-right: 8px;
}
.showcharges-section a span {
  display: inline-block;
  vertical-align: middle;
}

.collapse {
  height: 0px;
  transition: 0.5s ease;
  transition-delay: 0.5s;
  visibility: hidden;
}
.collapse.in {
  height: auto;
  visibility: visible;
}

.brokerage-search-input {
  width: 100%;
  border: none;
  border-bottom: 1px solid #F4F3F8;
  height: 40px;
  padding: 15px;
  font-size: 16px;
  padding: 0.9rem;
}

.brokerage-search-result {
  list-style: none;
  padding-left: 0;
  position: absolute;
  top: 100%;
  z-index: 9;
  background: #ffffff;
  width: 100%;
  padding: 0;
  border: 1px solid #F4F3F8;
  max-height: 250px;
  overflow: auto;
}
.brokerage-search-result li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #F4F3F8;
  cursor: pointer;
  font-size: 1.1rem;
}
.brokerage-search-result li:hover {
  background: #ebebeb;
  background: transparent;
}
.brokerage-search-result li:last-child {
  border-bottom: 0px;
}
.brokerage-search-result li > span {
  padding: 10px 5px;
}
.brokerage-search-result li > span.symbol {
  width: 85%;
  font-weight: bold;
  text-align: left;
}
.brokerage-search-result li > span.exchange {
  width: 15%;
  font-size: 80%;
  text-align: center;
  text-align: right;
}
.brokerage-search-result li > span.name {
  width: 55%;
}

@media (max-width: 767px) {
  .margin-brokerage {
    max-height: 211px;
  }
}
@media (max-width: 400px) {
  .margin-brokerage .result-tabs li {
    font-size: 1rem;
  }
}

.brokerage-search {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  margin-bottom: 45px;
}
.brokerage-search input {
  outline: none;
}
.brokerage-search i {
  font-size: 20px;
}

@media (max-width: 767px) {
  .brokerage-margin {
    margin-bottom: 23px;
  }
}

.card-wrapper {
  display: flex;
  align-items: center;
  position: relative;
}
@media (max-width: 767px) {
  .card-wrapper {
    display: block;
  }
}
.card-wrapper .card {
  width: 60%;
  margin-bottom: 0px;
}
@media (max-width: 767px) {
  .card-wrapper .card {
    width: 100%;
  }
}
.card-wrapper .card.left-card {
  padding-top: 45px;
  padding-bottom: 45px;
}
@media (min-width: 1550px) {
  .card-wrapper .card.left-card {
    padding-top: 30px;
    padding-bottom: 30px;
  }
}
@media (max-width: 767px) {
  .card-wrapper .card.left-card {
    padding-top: 1rem;
    padding-bottom: 0;
  }
}
.card-wrapper .card.dark-card {
  width: 40%;
  position: relative;
}
@media (max-width: 767px) {
  .card-wrapper .card.dark-card {
    width: 100%;
  }
}
.card-wrapper .card.dark-card:before {
  content: "";
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 15px 0 0 15px;
  border-color: transparent transparent transparent #000000;
  border-color: transparent transparent transparent #3E4152;
  position: absolute;
  left: 0;
  top: -15px;
}
@media (max-width: 767px) {
  .card-wrapper .card.dark-card:before {
    display: none;
  }
}
.card-wrapper .card.dark-card:after {
  content: "";
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 15px 15px 0 0;
  border-color: #000000 transparent transparent transparent;
  border-color: #3E4152 transparent transparent transparent;
  position: absolute;
  left: 0;
  bottom: -15px;
}
@media (max-width: 767px) {
  .card-wrapper .card.dark-card:after {
    display: none;
  }
}
.card-wrapper .card.dark-card .card-block {
  padding: 37px 60px;
}
@media (max-width: 990px) {
  .card-wrapper .card.dark-card .card-block {
    padding: 37px 20px;
  }
}

.result-tabs {
  padding-left: 0;
  list-style: none;
  margin-bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #F4F3F8;
  position: sticky;
  top: 0;
  left: 0;
  background: #ffffff;
  z-index: 99;
  flex-wrap: wrap;
}
.result-tabs li {
  padding: 15px 0 !important;
  margin: 0px 15px;
  font-weight: bold;
  cursor: pointer;
  border-top: none !important;
  color: #797979;
}
@media (max-width: 990px) {
  .result-tabs li {
    margin: 0px 10px;
  }
}
@media (max-width: 560px) {
  .result-tabs li {
    padding: 8px 0 !important;
  }
}
.result-tabs li.active {
  background-color: transparent !important;
  color: #004393;
  border-bottom: 2px solid #004393;
}

.d-flex {
  justify-content: center;
}

.card-header {
  color: #797979;
  font-size: 17px;
  font-weight: bold;
  margin-bottom: 5px;
  color: #ffffff;
  font-size: 2rem;
}

.loader-sec {
  width: 100%;
}

.total-sec {
  border-top: 1px solid #ffffff;
  font-size: 1.5rem !important;
  font-weight: bold;
  padding: 1rem 0 0 0;
  margin: 1.5rem 0 0 0 !important;
}
.total-sec .icon-info {
  background: #ffffff;
  color: #000000;
  border-radius: 100%;
  width: 2rem;
  height: 2rem;
  line-height: 2rem;
  display: inline-block;
  text-align: center;
}

@media (max-width: 567px) {
  .ngx-datatable {
    overflow: scroll;
  }
}

@media (max-width: 567px) {
  .ngx-datatable .datatable-body .datatable-scroll {
    max-width: 100%;
    width: 100% !important;
  }
}

.color-green {
  color: #00B16B;
  font-weight: bold;
}

.note {
  font-size: 12px;
  text-align: center;
  padding: 0 1.2rem;
  margin: 0.5rem 0;
}
.note.alighn-left {
  text-align: left;
}

.btn-reset {
  position: relative;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-size: 12px;
  margin: 1rem 0;
  z-index: 9999;
}

@media (max-width: 767px) {
  .card-block {
    padding: 1rem;
  }
}

.btn.buy {
  margin-right: 0;
}
@media (max-width: 767px) {
  .btn.buy {
    font-size: 1.125rem;
  }
}

table tr {
  position: relative;
}
table tr:hover {
  z-index: 1;
}

table {
  display: table;
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;
  border-bottom: 1px solid #F4F3F8;
}
@media screen and (max-width: 767px) {
  table {
    border: 0;
  }
}
@media screen and (max-width: 767px) {
  table thead {
    display: none;
  }
}
@media screen and (max-width: 767px) {
  table thead tr {
    border: 1px solid rgba(0, 0, 0, 0.54);
    display: block;
  }
}
table thead tr th {
  font-size: 14px;
  text-transform: capitalize;
  color: rgba(0, 0, 0, 0.54);
  padding: 0.5rem 1rem;
}
@media screen and (max-width: 767px) {
  table thead tr th {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
}
table th,
table td {
  text-align: right;
}
table th:first-child,
table td:first-child {
  text-align: left;
}
@media (min-width: 768px) {
  table th:first-child,
  table td:first-child {
    width: 220px;
  }
}
table tbody tr {
  padding: 0.5em;
}
table tbody tr:hover .action-btn {
  display: flex;
}
@media screen and (max-width: 767px) {
  table tbody tr {
    border: 1px solid rgba(0, 0, 0, 0.12);
    display: block;
    margin-bottom: 1.8em;
  }
}
table tbody tr .action-btn {
  display: flex;
  position: absolute !important;
  top: 0px;
  left: 0;
  right: 0;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding-right: 15px;
}
table tbody tr .action-btn .btn-outline {
  background: none;
  border: 1px solid #EE404A;
  color: #EE404A;
  padding: 4px 4px 2px;
}
table tbody tr .action-btn .btn-outline:hover {
  background: #EE404A;
  color: #ffffff;
  border-color: #ffffff;
}
@media screen and (max-width: 767px) {
  table tbody tr .action-btn .btn-outline {
    background: none;
    border: none;
    color: #333333;
    border-color: #333333;
    font-size: 1.5rem;
  }
}
@media screen and (max-width: 767px) {
  table tbody tr .action-btn {
    top: -12px;
    right: 0px;
    left: auto;
    margin-top: 0 !important;
    display: block !important;
  }
}
@media (min-width: 767px) and (max-width: 768px) {
  table tbody tr .action-btn {
    left: 79px;
  }
}
table tbody tr td {
  font-size: 13px;
  padding: 1rem;
  border-top: 0;
}
@media screen and (max-width: 767px) {
  table tbody tr td {
    border-top: 1px solid #F4F3F8;
    display: flex;
    justify-content: space-between;
    font-size: 0.9em;
    text-align: right;
  }
  table tbody tr td:before {
    content: attr(name);
    float: left;
    font-weight: 600;
    text-transform: capitalize;
    text-align: left;
    max-width: 50%;
    min-width: 50%;
  }
}
table tbody tr td:last-child {
  border: none;
  position: relative;
}
@media screen and (max-width: 767px) {
  table tbody tr td:last-child {
    border-top: 1px solid #F4F3F8;
    position: static;
  }
}
@media screen and (max-width: 767px) {
  table tbody tr td:first-child {
    border-top: none;
  }
}
table tbody tr:nth-child(odd) {
  background-color: #f9f9f9;
}
table tbody tr:nth-child(odd):hover .action-btn {
  background-color: #f9f9f9;
}

.no-data {
  text-align: center !important;
}
@media (max-width: 560px) {
  .no-data {
    display: block !important;
  }
}`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 70117:
/*!********************************************************************************************!*\
  !*** ./src/app/tools-module/margin-calculator/margin-calculator.component.html?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"card wrap-card flex-ht padding0 theme-2\">\r\n  <div class=\"left-section\">\r\n    <div class=\"wrapper\">\r\n      <h1 class=\" title\">Margin Calculator</h1>\r\n\r\n      <div class=\"card-wrapper\">\r\n        <div class=\"card dark-card order-sm-2\">\r\n\r\n          <div class=\"card-block\">\r\n            <div class=\"card-header\">Margin Required</div>\r\n            <div class=\"brokerage-charges-row\">\r\n              <div class=\"expandcharges\">\r\n                <div>Span Margin</div>\r\n                <span>@if (!marginConfig.isShowNA) {\r\n                  <span>₹</span>\r\n                  }&nbsp;\r\n                  <span>{{marginConfig.spanLoader ? 'Calculating...' :(!marginConfig.isShowNA ? ((marginConfig.totalSpan\r\n                  >= 0 ? marginConfig.totalSpan : 0.00) | value:'1.2-2'): 'NA')}}</span>\r\n                  <!-- <div class=\"loader\"><img src=\"assets/images/loader-bw.gif\" alt=\"\"/></div> -->\r\n                </span>\r\n              </div>\r\n              <div class=\"expandcharges\">\r\n                <div>Exposure margin</div>\r\n                <span>@if (!marginConfig.isShowNA) {\r\n                  <span>₹</span>\r\n                  }&nbsp;\r\n                  <span>{{marginConfig.spanLoader ? 'Calculating...' : (!marginConfig.isShowNA ?\r\n                    ((marginConfig.totalExposure >= 0 ? marginConfig.totalExposure : 0.00) | value:'1.2-2') :\r\n                  'NA')}}</span>\r\n                  <!-- <div class=\"loader\"><img src=\"assets/images/loader-bw.gif\" alt=\"\"/></div> -->\r\n                </span>\r\n              </div>\r\n              @if (marginConfig.isOptionScrip) {\r\n                <div class=\"expandcharges\">\r\n                  <div>Premium receivable</div>\r\n                  <span>@if (!marginConfig.isShowNA) {\r\n                    <span>₹</span>\r\n                    }&nbsp;\r\n                    <span>{{marginConfig.spanLoader ? 'Calculating...' : (!marginConfig.isShowNA ? ((marginConfig.premium\r\n                    >= 0 ? marginConfig.premium : 0.00)| value:'1.2-2') : 'NA')}}</span>\r\n                    <!-- <div class=\"loader\"><img src=\"assets/images/loader-bw.gif\" alt=\"\"/></div> -->\r\n                  </span>\r\n                </div>\r\n              }\r\n              <div class=\"expandcharges total-sec\">\r\n                <div>Total margin&nbsp;<span ngx-tooltip\r\n                  tooltipTitle=\"Total margin = (SPAN + Exposure) - Margin Benefit <br><br> This is the margin required for taking positions <br> that can also be held overnight\"\r\n                tooltipPlacement=\"bottom\" tooltipType=\"tooltip\" class=\"icon-info\"></span></div>\r\n                <span>@if (!marginConfig.isShowNA) {\r\n                  <span>₹</span>\r\n                  }&nbsp;\r\n                  <span>{{marginConfig.spanLoader ? 'Calculating...' : (!marginConfig.isShowNA ?\r\n                  ((marginConfig.totalMargin >= 0 ? marginConfig.totalMargin : 0.00) | value:'1.2-2') : 'NA')}}</span>\r\n                  <!-- <div class=\"loader\"><img src=\"assets/images/loader-bw.gif\" alt=\"\"/></div> -->\r\n                </span>\r\n              </div>\r\n              @if (marginConfig.marginBenefit && marginConfig.marginBenefit >= 0) {\r\n                <div class=\"expandcharges bold\">\r\n                  <div>Margin benefit</div>\r\n                  <span [ngClass]=\"marginConfig.spanLoader ? '' : 'color-green'\">@if (!marginConfig.isShowNA) {\r\n                    <span\r\n                    >₹</span>\r\n                    }&nbsp;\r\n                    <span>{{marginConfig.spanLoader ? 'Calculating...' : (!marginConfig.isShowNA ?\r\n                      ((marginConfig.marginBenefit >=0 ? marginConfig.marginBenefit : 0.00) | value:'1.2-2') :\r\n                    'NA')}}</span>\r\n                    <!-- <div class=\"loader\"><img src=\"assets/images/loader-bw.gif\" alt=\"\"/></div> -->\r\n                  </span>\r\n                </div>\r\n              }\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card left-card mb-0 order-sm-1\">\r\n          <div class=\"card-block\">\r\n            <form name=\"marginCalForm\" #marginCalForm=\"ngForm\">\r\n\r\n              <!-- scrip search  -->\r\n              <div class=\"col-xs-12\">\r\n                <div class=\"brokerage-search brokerage-margin\">\r\n                  <input class=\"brokerage-search-input marginSearch\"\r\n                    placeholder=\"Search for scrips by entering minimum 3 letters\" name=\"marginSearchInput\" type=\"text\"\r\n                    inputRestrict=\"alphanumeric\"\r\n                    (input)=\"onInputPress()\" aria-label=\"Brokerage search\" autocomplete=\"off\"\r\n                    [(ngModel)]=\"marginConfig.searchInput\" #searchInput=\"ngModel\" (focusout)=\"focusOut()\"\r\n                    (focus)=\"onFocus()\" (click)=\"onSearchClick()\" (paste)=\"false\">\r\n                    <i class=\"icon-search\"></i>\r\n\r\n                    <!-- <div #searchUI>  -->\r\n                    @if (marginConfig.exchangeVisible) {\r\n                      <ul #searchUI class=\"brokerage-search-result margin-brokerage \" (scroll)=\"onUlScroll($event)\"\r\n                        id=\"searchUI\">\r\n                        <ul class=\"result-tabs\" tabindex=\"-1\" (focusout)=\"focusOut()\">\r\n                          <li class=\"marginSearch\" [class.active]=\"marginConfig.activeTab==1\" (click)=\"activateTab(1,'FO')\">\r\n                            DERIVATIVE\r\n                          </li>\r\n                          <li class=\"marginSearch\" [class.active]=\"marginConfig.activeTab==2\"\r\n                            (click)=\"activateTab(2,'COM')\">\r\n                            COMMODITY\r\n                          </li>\r\n                          <li class=\"marginSearch\" [class.active]=\"marginConfig.activeTab==3\" (click)=\"activateTab(3,'CD')\">\r\n                            CURRENCY\r\n                          </li>\r\n                        </ul>\r\n                        @if ((!marginConfig.loader && !marginConfig.searchedData?.length && marginConfig.searchInput?.length >= 3 && marginConfig.searchFocus) || (!marginConfig.loader && marginConfig.searchInput && marginConfig.searchInput?.length > 0 && marginConfig.searchInput?.length <= 2)) {\r\n                          <li class=\"text-center d-flex\"\r\n                            >\r\n                            <span>No Record Found</span></li>\r\n                          }\r\n                          @if (marginConfig.loader) {\r\n                            <li>\r\n                              <div class=\"d-flex justify-content-center loader-sec\">\r\n                                <img src=\"../../../assets/images/loader.gif\" alt=\"Mobile-loader\" />\r\n                              </div>\r\n                            </li>\r\n                          }\r\n                          @for (item of marginConfig.searchedData; track item) {\r\n                            <li (click)=\"getScrip(item)\">\r\n                              <span class=\"symbol\">{{(marginConfig.segmentArr.indexOf(item?.SegmentId) > -1) ? item?.Symbol :\r\n                              (item?.SecName).replace('|', ' ')}}</span>\r\n                              <!-- <span class=\"name\">{{item?.SecDesc}}</span> -->\r\n                              <span class=\"exchange\">{{item?.ExchangeSegment}}</span>\r\n                            </li>\r\n                          }\r\n                        </ul>\r\n                      }\r\n                    <!-- </div> -->\r\n                  </div>\r\n                </div>\r\n\r\n                <!-- Quantity  -->\r\n                <div class=\"col-xs-12\">\r\n                  <div class=\"col-sm-12\">\r\n                    <div class=\"form-group\">\r\n                      <label>Quantity</label>\r\n                      <div class=\"input-wrap\">\r\n                        <input name=\"qty\" class=\"form-control\" aria-label=\"quantity\" inputRestrict=\"unsignedInteger\"\r\n                          type=\"text\" maxlength=\"7\" [(ngModel)]=\"marginConfig.qty\" (keypress)=\"allowOnlyDigits($event)\"\r\n                          #qty=\"ngModel\" id=\"qty\" required>\r\n                          @if (marginConfig.marketLot) {\r\n                            <p  class=\"marginpara\"> Lot Size = {{marginConfig.marketLot}}</p>\r\n                          }\r\n                          @if ((qty.errors?.required && qty.dirty) || marginConfig.qty < 1) {\r\n                            <p class=\"animate error marginpara\">\r\n                            Please enter a valid quantity.</p>\r\n                          }\r\n\r\n                        </div>\r\n\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <!-- Action  -->\r\n                  <div class=\"text-center switch-wrap m-auto\">\r\n                    <label class=\"control-label mr-10\" for=\"action\" [class.selected]=\"!marginConfig.action\">\r\n                      <span>BUY</span>\r\n                    </label>\r\n                    <label class=\"switch\">\r\n                      <input name=\"action\" id=\"action\" type=\"checkbox\" [(ngModel)]=\"marginConfig.action\">\r\n                      <div class=\"slider round\"></div>\r\n                    </label>\r\n                    <label class=\"control-label ml-10\" for=\"action\" [class.selected]=\"marginConfig.action\">\r\n                      <span>SELL</span>\r\n                    </label>\r\n                  </div>\r\n                  <div class=\"text-center d-flex\">\r\n                    <button type=\"submit\" class=\"btn buy\" (click)=\"addResetContract(true);\"\r\n                    [disabled]=\"!marginCalForm.form.valid || marginConfig.marketLot < 1 || marginConfig.qty < 1\">Add</button>\r\n                  </div>\r\n                </form>\r\n\r\n                <div class=\"clearfix\"></div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Table  -->\r\n\r\n      <!-- <ngx-datatable class=\"material\" [cssClasses]=\"cssClasses\" [columnMode]=\"'force'\"\r\n      [rows]=\"marginConfig.contracts\" [footerHeight]=\"50\" [limit]=\"25\"\r\n      [headerHeight]=\"'auto'\" [scrollbarH]=\"true\" [rowHeight]=\"'auto'\" [messages]=\"{emptyMessage: 'Search and Add contracts to calculate margin.', totalMessage: 'total'}\">\r\n\r\n      <ngx-datatable-column [width]=\"200\" name=\"Contract\" prop=\"symbol\">\r\n        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template let-rowIndex=\"rowIndex\">\r\n          <div class=\"text-left\">{{row.symbol}}\r\n          </div>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column [width]=\"90\" name=\"Lot(s)\" prop=\"marketLot\">\r\n        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template let-rowIndex=\"rowIndex\">\r\n          <div class=\"text-right {{row.qty}}\">{{row.marketLot}}\r\n          </div>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column [width]=\"90\" name=\"Trade\" prop=\"action\" [resizeable]=\"false\">\r\n        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template let-rowIndex=\"rowIndex\">\r\n          <div class=\"text-right\"><span>{{row.action ? 'SELL' : 'BUY'}}</span></div>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column [width]=\"90\" name=\"Strike\" prop=\"strike\" [resizeable]=\"false\">\r\n        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template let-rowIndex=\"rowIndex\">\r\n          <div class=\"text-right\"><span>{{row.strike || 0}}</span></div>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n\r\n      <ngx-datatable-column [width]=\"90\" name=\"Span Margin\" prop=\"IM\" [resizeable]=\"false\">\r\n        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template let-rowIndex=\"rowIndex\">\r\n          <div class=\"text-right\"><span> {{(marginConfig.tableLoader) ? 'Calculating...' : (row.IM >= 0 ? row.IM : 0.00) |value:'1.2-2'}}\r\n\r\n          </span></div>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column [width]=\"90\" name=\"Exposure Margin\" prop=\"exposure\" [resizeable]=\"false\">\r\n        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template let-rowIndex=\"rowIndex\">\r\n          <div class=\"text-right\"><span> {{(marginConfig.tableLoader) ? 'Calculating...' : (row.exposure >= 0 ? row.exposure : 0.00) |value:'1.2-2'}}\r\n\r\n          </span></div>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column [width]=\"120\" name=\"Total Margin\" prop=\"total\" [resizeable]=\"false\">\r\n        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template let-rowIndex=\"rowIndex\">\r\n          <div class=\"text-right\"><span>{{(marginConfig.tableLoader) ? 'Calculating...' : (row.total >= 0 ? row.total : 0.00) |value:'1.2-2'}}\r\n\r\n          </span></div>\r\n          <div class=\"action-btn\">\r\n            <button class=\"btn-outline cancel\"\r\n              (click)=\"deleteContract(rowIndex)\" tooltipTitle=\"Delete\" ngx-tooltip\r\n              tooltipPlacement=\"top\" tooltipType=\"tooltip\">\r\n              <i class=\"icon-Cancel\"></i>\r\n            </button>\r\n          </div>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n\r\n    </ngx-datatable> -->\r\n\r\n\r\n    <!-- Respsonsive table to block -->\r\n    <table class=\"page-scroll table\" role=\"table\" id=\"content\">\r\n      <thead role=\"rowgroup\">\r\n        <tr role=\"row\">\r\n          <th role=\"columnheader\" name=\"Contract\" prop=\"symbol\">Contract</th>\r\n          <th role=\"columnheader\" name=\"Qty\" prop=\"qty\">Qty</th>\r\n          <th role=\"columnheader\" name=\"Trade\" prop=\"action\">Trade</th>\r\n          <th role=\"columnheader\" name=\"Strike\" prop=\"strike\">Strike</th>\r\n          <th role=\"columnheader\" name=\"Span Margin\" prop=\"IM\">Span Margin</th>\r\n          <th role=\"columnheader\" name=\"Exposure Margin\" prop=\"exposure\">Exposure Margin</th>\r\n          <th role=\"columnheader\" name=\"Total Margin\" prop=\"total\">Total Margin</th>\r\n          <th role=\"columnheader\" name=\"Action\" prop=\"total\">Action</th>\r\n\r\n        </tr>\r\n      </thead>\r\n      <tbody role=\"rowgroup\">\r\n        @if (!marginConfig.contracts.length) {\r\n          <tr>\r\n            <td role=\"cell\" colspan=\"8\" class=\"no-data\">Search and Add contracts to calculate margin.</td>\r\n          </tr>\r\n        }\r\n        @for (item of marginConfig.contracts; track item; let i = $index) {\r\n          <tr role=\"row rowbtn\">\r\n            <td role=\"cell\" name=\"Contract\">{{item.symbol}}</td>\r\n            <td role=\"cell\" name=\"Qty\" class=\" {{item.qty}}\">{{item.qty}}</td>\r\n            <td role=\"cell\" name=\"Trade\">{{item.action ? 'SELL' : 'BUY'}}</td>\r\n            <td role=\"cell\" name=\"Strike\">{{item.strike || 0}}</td>\r\n            <td role=\"cell\" name=\"Span Margin\">{{(marginConfig.tableLoader) ? 'Calculating...' : (item.IM >= 0 ? item.IM :\r\n            0.00) |value:'1.2-2'}}</td>\r\n            <td role=\"cell\" name=\"Exposure Margin\">{{(marginConfig.tableLoader) ? 'Calculating...' : (item.exposure >= 0 ?\r\n            item.exposure : 0.00) |value:'1.2-2'}} </td>\r\n            <td role=\"cell\" name=\"Total Margin\">{{(marginConfig.tableLoader) ? 'Calculating...' : (item.total >= 0 ?\r\n              item.total : 0.00) |value:'1.2-2'}}\r\n            </td>\r\n            <td role=\"cell\" name=\"Action\">\r\n              <div class=\"action-btn\">\r\n                <button class=\"btn-outline cancel\" (click)=\"deleteContract(i)\" tooltipTitle=\"Delete\" ngx-tooltip\r\n                  tooltipPlacement=\"top\" tooltipType=\"tooltip\">\r\n                  <i class=\"icon-Cancel\"></i>\r\n                </button>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n        }\r\n      </tbody>\r\n    </table>\r\n\r\n\r\n\r\n    <!-- <div class=\"div-table\" *ngIf=\"marginConfig.contracts.length\" id=\"content\">\r\n\r\n    <div class=\"table\">\r\n\r\n      <div class=\"th\">\r\n        <div class=\"td\" name=\"Contract\" prop=\"symbol\">Contract</div>\r\n        <div class=\"td\" name=\"Lot(s)\" prop=\"marketLot\">Lot(s)</div>\r\n        <div class=\"td\" name=\"Trade\" prop=\"action\">Trade</div>\r\n        <div class=\"td\" name=\"Strike\" prop=\"strike\">Strike</div>\r\n        <div class=\"td\" name=\"Span Margin\" prop=\"IM\">Span Margin</div>\r\n        <div class=\"td\" name=\"Exposure Margin\" prop=\"exposure\">Exposure Margin</div>\r\n        <div class=\"td\" name=\"Total Margin\" prop=\"total\">Total Margin</div>\r\n\r\n      </div>\r\n\r\n      <div class=\"tr\"  *ngFor=\"let item of marginConfig.contracts\">\r\n        <div class=\"td\" name=\"Contract\"><div>{{item.symbol}}</div></div>\r\n        <div class=\"td {{item.qty}}\" name=\"Lot(s)\">  <div> {{item.marketLot}}</div></div>\r\n        <div class=\"td\" name=\"Trade\">{{item.action ? 'SELL' : 'BUY'}}</div>\r\n        <div class=\"td\" name=\"Strike\">{{item.strike || 0}}</div>\r\n        <div class=\"td\" name=\"Span Margin\">{{(marginConfig.tableLoader) ? 'Calculating...' : (item.IM >= 0 ? item.IM : 0.00) |value:'1.2-2'}}</div>\r\n        <div class=\"td\" name=\"Exposure Margin\">{{(marginConfig.tableLoader) ? 'Calculating...' : (item.exposure >= 0 ? item.exposure : 0.00) |value:'1.2-2'}}</div>\r\n        <div class=\"td\" name=\"Total Margin\">\r\n          {{(marginConfig.tableLoader) ? 'Calculating...' : (item.total >= 0 ? item.total : 0.00) |value:'1.2-2'}}\r\n          <div class=\"action-btn\">\r\n            <button class=\"btn-outline cancel\"\r\n              (click)=\"deleteContract(rowIndex)\" tooltipTitle=\"Delete\" ngx-tooltip\r\n              tooltipPlacement=\"top\" tooltipType=\"tooltip\">\r\n              <i class=\"icon-Cancel\"></i>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>  -->\r\n\r\n\r\n  <!-- Respsonsive table to block -->\r\n  <div>\r\n    @if (marginConfig.contracts.length) {\r\n      <button class=\"btn sell btn-reset\" style=\"font-size: 12px;\" (click)=\"addResetContract(false)\"\r\n      >RESET</button>\r\n    }\r\n  </div>\r\n  <div class=\"note alighn-left\">\r\n    <p>Note: On non-trading hours, margin value displayed may vary with actual margin required for trade.</p>\r\n  </div>\r\n  <br><br>\r\n  <!-- Advert Banner :: Start -->\r\n  @if ((!shared.userId || shared.userId == 'guest')) {\r\n    <section>\r\n      <div class=\"container\" (click)=\"navigateToOpenFreeAccount()\">\r\n        <div class=\"row add_banner_sub red-theme\">\r\n          <div class=\"col-md-6 add-left-text\">\r\n            <div class=\"add-left-sub\">\r\n              <h2>Wait! <span class=\"small-font\">Before You Go</span></h2>\r\n              <h4>OPEN A FREE</h4>\r\n              <h3>DEMAT ACCOUNT</h3>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6 add-right-text\">\r\n            <div class=\"add-right-sub\">\r\n              <ul>\r\n                <li><span>+</span> Zero Account Opening Fee </li>\r\n                <li><span>+</span> Free First Year AMC </li>\r\n                <li><span>+</span> Zero Square Off Charges </li>\r\n                <li><span>+</span> Zero Call for Trade Charges</li>\r\n              </ul>\r\n              <a class=\"add-btn\">OPEN MY ACCOUNT</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n  }\r\n\r\n</div>";

/***/ })

}]);