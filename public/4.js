"use strict";
(self["webpackChunkjiffy_upgraded"] = self["webpackChunkjiffy_upgraded"] || []).push([[4],{

/***/ 90004:
/*!*****************************************************!*\
  !*** ./src/app/services/rest/onboarding.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OnboardingService: () => (/* binding */ OnboardingService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 21626);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 18810);
/* harmony import */ var src_app_utility_requestFactory_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/utility/requestFactory.utils */ 13991);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 45312);
/* harmony import */ var _api_urls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api-urls */ 26702);
/* harmony import */ var _error_handler_jiffy_error_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../error-handler/jiffy-error-handler.service */ 9676);
/* harmony import */ var _shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared-data/shared-data.service */ 46013);
/* harmony import */ var _sockets_broadcaster__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sockets/broadcaster */ 28510);










/** Service Utility for Onboarding Http Requests */
let OnboardingService = class OnboardingService {
  /**
   * Constructor for Initilialization and dependency Injection
   * @param http Http Instance from angular HTTP Package
   * @param urls APIURLs instance containing URL Lists
   * @param shared Shared Data Service Instance
   * @param errorHandler Error Handler in case of any API Error
   */
  constructor(http, shared, errorHandler, urls, broadcaster) {
    this.http = http;
    this.shared = shared;
    this.errorHandler = errorHandler;
    this.urls = urls;
    this.broadcaster = broadcaster;
    let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'amlmZnlBcHA='
    });
    this.options = {
      headers: headers
    };
    this.requestServices = {
      shared: this.shared,
      errorHandler: this.errorHandler,
      http: this.http,
      broadcaster: this.broadcaster
    };
  }
  // /**
  //  * HTTP Rest Method to Get Info of user based on data provided
  //  * @param request JSON Data to be posted to HTTP Request
  //  */
  // public getOnboardingInfo( request: {} ): Observable<any> {
  //   if ( this.shared.isInternetAvailable ) {
  //     let url = this.urls.getKYCInfoURL();
  //     this.shared.isServiceHit = true;
  //     return this.http.post( url, request, this.options ).pipe(
  //       map( ( response ) => {
  //         this.shared.isServiceHit = false;
  //         return response;
  //       } ), catchError( ( error: any ) => {
  //         this.shared.isServiceHit = false;
  //         this.errorHandler.handleError( error, url );
  //         return throwError( error );
  //       } ) );
  //   } else {
  //     this.shared.isServiceHit = false;
  //     return throwError( new Error( "Limited or No Internet Connection." ) );
  //   }
  // }
  // /**
  //  * HTTP Rest Method to Get Info of user based on PAN and Mobile
  //  * @param request JSON Data to be posted to HTTP Request
  //  */
  // public getUserDetailByPAN( mobileNo: string, PAN: string ): Observable<any> {
  //   if ( this.shared.isInternetAvailable ) {
  //     let url = this.urls.getUserDetailsPanURL( mobileNo, PAN );
  //     this.shared.isServiceHit = true;
  //     return this.http.get( url, this.options ).pipe(
  //       map( ( response ) => {
  //         this.shared.isServiceHit = false;
  //         return response;
  //       } ), catchError( ( error: any ) => {
  //         this.shared.isServiceHit = false;
  //         this.errorHandler.handleError( error, url );
  //         return throwError( error );
  //       } ) );
  //   } else {
  //     this.shared.isServiceHit = false;
  //     return throwError( new Error( "Limited or No Internet Connection." ) );
  //   }
  // }
  // /**
  //  * HTTP Rest Method to Update Basic Details
  //  * @param request JSON Data to be posted to HTTP Request
  //  */
  // public basicDetailsUpdate( request: {} ): Observable<any> {
  //   if ( this.shared.isInternetAvailable ) {
  //     let url = this.urls.getBasicUpdateURL()
  //     this.shared.isServiceHit = true;
  //     return this.http.post( url, request, this.options ).pipe(
  //       map( ( response ) => {
  //         this.shared.isServiceHit = false;
  //         return response;
  //       } ), catchError( ( error: any ) => {
  //         this.shared.isServiceHit = false;
  //         this.errorHandler.handleError( error, url );
  //         return throwError( error );
  //       } ) );
  //   } else {
  //     this.shared.isServiceHit = false;
  //     return throwError( new Error( "Limited or No Internet Connection." ) );
  //   }
  // }
  /**
   * HTTP Rest Method to Update Basic Details
   */
  getLeadCities() {
    if (this.shared.isInternetAvailable) {
      let url = this.urls.getLeadCityListURL();
      this.shared.isServiceHit = true;
      return src_app_utility_requestFactory_utils__WEBPACK_IMPORTED_MODULE_0__.RequestFactory.requestHandler(this.requestServices, url, "post", null, {
        headers: this.getHeaders()
      }, false);
    } else {
      this.shared.isServiceHit = false;
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.throwError)(new Error("Limited or No Internet Connection."));
    }
  }
  /**
   * HTTP Rest Method to Update Basic Details
   */
  getStates() {
    if (this.shared.isInternetAvailable) {
      let url = this.urls.getStateListURL();
      this.shared.isServiceHit = true;
      return src_app_utility_requestFactory_utils__WEBPACK_IMPORTED_MODULE_0__.RequestFactory.requestHandler(this.requestServices, url, "post", null, {
        headers: this.getHeaders()
      }, false);
    } else {
      this.shared.isServiceHit = false;
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.throwError)(new Error("Limited or No Internet Connection."));
    }
  }
  /**Generate Headers */
  getHeaders(isMultipart, investorId, businessUnit, isBlank) {
    let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpHeaders({
      'ticket': 'amlmZnlBcHA=',
      'userid': 'Onboarding',
      'investorid': investorId || '',
      'businessunit': 'JF',
      'from': location.href + '_' + this.urls.getVersion(),
      'Accept': 'application/json'
    });
    if (!isBlank) {
      headers.set('Content-Type', isMultipart ? 'multipart/form-data' : 'application/json');
    }
    return headers;
  }
  // /**
  //  * HTTP Rest Method to generate Aadhaar OTP
  //  * @param request JSON Data to be posted to HTTP Request
  //  */
  // public generateAdharOTP( request: {} ): Observable<any> {
  //   if ( this.shared.isInternetAvailable ) {
  //     let url = this.urls.getKYCOTPURL();
  //     this.shared.isServiceHit = true;
  //     return this.http.post( url, request, this.options ).pipe(
  //       map( ( response ) => {
  //         this.shared.isServiceHit = false;
  //         return response;
  //       } ), catchError( ( error: any ) => {
  //         this.shared.isServiceHit = false;
  //         this.errorHandler.handleError( error, url );
  //         return throwError( error );
  //       } ) );
  //   } else {
  //     this.shared.isServiceHit = false;
  //     return throwError( new Error( "Limited or No Internet Connection." ) );
  //   }
  // }
  // /**
  //  * HTTP Rest Method to update Address Details
  //  * @param request JSON Data to be posted to HTTP Request
  //  */
  // public updateAddressDetails( request: {} ): Observable<any> {
  //   if ( this.shared.isInternetAvailable ) {
  //     let url = this.urls.getUpdateAddressURL();
  //     this.shared.isServiceHit = true;
  //     return this.http.post( url, request, this.options ).pipe(
  //       map( ( response ) => {
  //         this.shared.isServiceHit = false;
  //         return response;
  //       } ), catchError( ( error: any ) => {
  //         this.shared.isServiceHit = false;
  //         this.errorHandler.handleError( error, url );
  //         return throwError( error );
  //       } ) );
  //   } else {
  //     this.shared.isServiceHit = false;
  //     return throwError( new Error( "Limited or No Internet Connection." ) );
  //   }
  // }
  /**
   * HTTP Rest Method to update Address Details
   * @param request JSON Data to be posted to HTTP Request
   */
  generateOTP(request) {
    if (this.shared.isInternetAvailable) {
      let url = this.urls.getGenerateOTP();
      return src_app_utility_requestFactory_utils__WEBPACK_IMPORTED_MODULE_0__.RequestFactory.requestHandler(this.requestServices, url, "post", request, null, false);
    } else {
      this.shared.isServiceHit = false;
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.throwError)(new Error("Limited or No Internet Connection."));
    }
  }
  /**
   * HTTP Rest Method to update Address Details
   * @param request JSON Data to be posted to HTTP Request
   */
  validateOTP(request) {
    if (this.shared.isInternetAvailable) {
      let url = this.urls.getVerifyOTP();
      return src_app_utility_requestFactory_utils__WEBPACK_IMPORTED_MODULE_0__.RequestFactory.requestHandler(this.requestServices, url, "post", request, null, false);
    } else {
      this.shared.isServiceHit = false;
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.throwError)(new Error("Limited or No Internet Connection."));
    }
  }
  // /**
  //  * HTTP Rest Method to get KYC Details for Given Aadhaar Number
  //  * @param request JSON Data to be posted to HTTP Request
  //  */
  // public getKYCDetails( request: {} ): Observable<any> {
  //   if ( this.shared.isInternetAvailable ) {
  //     let url = this.urls.getKYCDetailsURL();
  //     this.shared.isServiceHit = true;
  //     return this.http.post( url, request, this.options ).pipe(
  //       map( ( response ) => {
  //         this.shared.isServiceHit = false;
  //         return response;
  //       } ), catchError( ( error: any ) => {
  //         this.shared.isServiceHit = false;
  //         this.errorHandler.handleError( error, url );
  //         return throwError( error );
  //       } ) );
  //   } else {
  //     this.shared.isServiceHit = false;
  //     return throwError( new Error( "Limited or No Internet Connection." ) );
  //   }
  // }
  // /**
  //  * HTTP Rest Method to get Bank Names
  //  * @param request JSON Data to be posted to HTTP Request
  //  */
  // public getBankNames( request: {} ): Observable<any> {
  //   if ( this.shared.isInternetAvailable ) {
  //     let url = this.urls.getBankListURL();
  //     return this.http.post( url, request, this.options ).pipe(
  //       map( ( response ) => {
  //         return response;
  //       } ), catchError( ( error: any ) => {
  //         this.errorHandler.handleError( error, url );
  //         return throwError( error );
  //       } ) );
  //   } else {
  //     this.shared.isServiceHit = false;
  //     return throwError( new Error( "Limited or No Internet Connection." ) );
  //   }
  // }
  // /**
  //  * HTTP Rest Method to get bank Details
  //  * @param request JSON Data to be posted to HTTP Request
  //  */
  // public getBankData( request: {} ): Observable<any> {
  //   if ( this.shared.isInternetAvailable ) {
  //     let url = this.urls.getBankDetailsURL();
  //     return this.http.post( url, request, this.options ).pipe(
  //       map( ( response ) => {
  //         return response;
  //       } ) );
  //   } else {
  //     this.shared.isServiceHit = false;
  //     return throwError( new Error( "Limited or No Internet Connection." ) );
  //   }
  // }
  // /**
  //  * HTTP Rest Method to get List of Bank Branches
  //  * @param request JSON Data to be posted to HTTP Request
  //  */
  // public getBankBranches( request: {} ): Observable<any> {
  //   if ( this.shared.isInternetAvailable ) {
  //     let url = this.urls.getBankDetailsURL();
  //     return this.http.post( url, request, this.options ).pipe(
  //       map( ( response ) => {
  //         return response;
  //       } ), catchError( ( error: any ) => {
  //         this.errorHandler.handleError( error, url );
  //         return throwError( error );
  //       } ) );
  //   } else {
  //     this.shared.isServiceHit = false;
  //     return throwError( new Error( "Limited or No Internet Connection." ) );
  //   }
  // }
  // /**
  //  * HTTP Rest Method to Update Bank Detials
  //  * @param request JSON Data to be posted to HTTP Request
  //  */
  // public updateBankDetails( request: {} ): Observable<any> {
  //   if ( this.shared.isInternetAvailable ) {
  //     let url = this.urls.getUpdateBankURL();
  //     this.shared.isServiceHit = true;
  //     return this.http.post( url, request, this.options ).pipe(
  //       map( ( response ) => {
  //         this.shared.isServiceHit = false;
  //         return response;
  //       } ), catchError( ( error: any ) => {
  //         this.shared.isServiceHit = false;
  //         this.errorHandler.handleError( error, url );
  //         return throwError( error );
  //       } ) );
  //   } else {
  //     this.shared.isServiceHit = false;
  //     return throwError( new Error( "Limited or No Internet Connection." ) );
  //   }
  // }
  // /**
  //  * HTTP Rest Method to Update Income Details
  //  * @param request JSON Data to be posted to HTTP Request
  //  */
  // public updateIncomeDetails( request: {} ): Observable<any> {
  //   if ( this.shared.isInternetAvailable ) {
  //     let url = this.urls.getUpdateFinanceURL();
  //     this.shared.isServiceHit = true;
  //     return this.http.post( url, request, this.options ).pipe(
  //       map( ( response ) => {
  //         this.shared.isServiceHit = false;
  //         return response;
  //       } ), catchError( ( error: any ) => {
  //         this.shared.isServiceHit = false;
  //         this.errorHandler.handleError( error, url );
  //         return throwError( error );
  //       } ) );
  //   } else {
  //     this.shared.isServiceHit = false;
  //     return throwError( new Error( "Limited or No Internet Connection." ) );
  //   }
  // }
  // /**
  //  * HTTP Rest Method to Update Trading Details
  //  * @param request JSON Data to be posted to HTTP Request
  //  */
  // public updateTradingDeatils( request: {} ): Observable<any> {
  //   if ( this.shared.isInternetAvailable ) {
  //     let url = this.urls.getUpdateTradingURL();
  //     this.shared.isServiceHit = true;
  //     return this.http.post( url, request, this.options ).pipe(
  //       map( ( response ) => {
  //         this.shared.isServiceHit = false;
  //         return response;
  //       } ), catchError( ( error: any ) => {
  //         this.shared.isServiceHit = false;
  //         this.errorHandler.handleError( error, url );
  //         return throwError( error );
  //       } ) );
  //   } else {
  //     this.shared.isServiceHit = false;
  //     return throwError( new Error( "Limited or No Internet Connection." ) );
  //   }
  // }
  // /**
  //  * HTTP Rest Method to Update Nominee Details
  //  * @param request JSON Data to be posted to HTTP Request
  //  */
  // public updateNomineeDetails( request: {} ): Observable<any> {
  //   if ( this.shared.isInternetAvailable ) {
  //     let url = this.urls.getUpdateNomineeURL();
  //     this.shared.isServiceHit = true;
  //     return this.http.post( url, request, this.options ).pipe(
  //       map( ( response ) => {
  //         this.shared.isServiceHit = false;
  //         return response;
  //       } ), catchError( ( error: any ) => {
  //         this.shared.isServiceHit = false;
  //         this.errorHandler.handleError( error, url );
  //         return throwError( error );
  //       } ) );
  //   } else {
  //     this.shared.isServiceHit = false;
  //     return throwError( new Error( "Limited or No Internet Connection." ) );
  //   }
  // }
  // /**
  //  * HTTP Rest Method to Get Info of user based on PAN and Mobile
  //  * @param request JSON Data to be posted to HTTP Request
  //  */
  // public generateIPVOTP( PAN: string ): Observable<any> {
  //   if ( this.shared.isInternetAvailable ) {
  //     let url = this.urls.getGenIPVOTPURL( btoa( PAN ) )
  //     this.shared.isServiceHit = true;
  //     return this.http.get( url, this.options ).pipe(
  //       map( ( response ) => {
  //         this.shared.isServiceHit = false;
  //         return response;
  //       } ), catchError( ( error: any ) => {
  //         this.shared.isServiceHit = false;
  //         this.errorHandler.handleError( error, url );
  //         return throwError( error );
  //       } ) );
  //   } else {
  //     this.shared.isServiceHit = false;
  //     return throwError( new Error( "Limited or No Internet Connection." ) );
  //   }
  // }
  // /**
  //  * HTTP Rest Method to upload Single Doc against A PAN
  //  * @param request JSON Data to be posted to HTTP Request
  //  */
  // public uploadIPVImage( formData: FormData ): Observable<any> {
  //   if ( this.shared.isInternetAvailable ) {
  //     let url = this.urls.getUploadIPVImgURL();
  //     this.shared.isServiceHit = true;
  //     let headers: HttpHeaders = new HttpHeaders( {
  //       'Authorization': 'amlmZnlBcHA=',
  //       'Accept': 'application/json'
  //     } );
  //     let options: any = { headers: headers };
  //     return this.http.post( url, formData, options ).pipe(
  //       map( ( response ) => {
  //         this.shared.isServiceHit = false;
  //         return response;
  //       } ), catchError( ( error: any ) => {
  //         this.shared.isServiceHit = false;
  //         this.errorHandler.handleError( error, url );
  //         return throwError( error );
  //       } ) );
  //   } else {
  //     this.shared.isServiceHit = false;
  //     return throwError( new Error( "Limited or No Internet Connection." ) );
  //   }
  // }
  // /**
  //  * HTTP Rest Method to Upload IP Video for KYC
  //  * @param request JSON Data to be posted to HTTP Request
  //  */
  // public uploadVideo( formData: FormData ): Observable<any> {
  //   if ( this.shared.isInternetAvailable ) {
  //     let url = this.urls.getUploadIPVURL();
  //     this.shared.isServiceHit = true;
  //     let headers: HttpHeaders = new HttpHeaders( {
  //       'Authorization': 'amlmZnlBcHA=',
  //       'Accept': 'application/json'
  //     } );
  //     let options: any = { headers: headers };
  //     return this.http.post( url, formData, options ).pipe(
  //       map( ( response ) => {
  //         this.shared.isServiceHit = false;
  //         return response;
  //       } ), catchError( ( error: any ) => {
  //         this.shared.isServiceHit = false;
  //         this.errorHandler.handleError( error, url );
  //         return throwError( error );
  //       } ) );
  //   } else {
  //     this.shared.isServiceHit = false;
  //     return throwError( new Error( "Limited or No Internet Connection." ) );
  //   }
  // }
  // /**
  //  * HTTP Rest Method to Upload Multiple Docs
  //  * @param request JSON Data to be posted to HTTP Request
  //  */
  // public uploadDocs( formData: FormData ): Observable<any> {
  //   if ( this.shared.isInternetAvailable ) {
  //     let url = this.urls.getUpdateDocsURL();
  //     this.shared.isServiceHit = true;
  //     let headers: HttpHeaders = new HttpHeaders( {
  //       'Authorization': 'amlmZnlBcHA=',
  //       'Accept': 'application/json'
  //     } );
  //     let options: any = { headers: headers };
  //     return this.http.post( url, formData, options ).pipe(
  //       map( ( response ) => {
  //         this.shared.isServiceHit = false;
  //         return response;
  //       } ), catchError( ( error: any ) => {
  //         this.shared.isServiceHit = false;
  //         this.errorHandler.handleError( error, url );
  //         return throwError( error );
  //       } ) );
  //   } else {
  //     this.shared.isServiceHit = false;
  //     return throwError( new Error( "Limited or No Internet Connection." ) );
  //   }
  // }
  // /**
  //  * HTTP Rest Method to upload Single Doc against A PAN
  //  * @param request JSON Data to be posted to HTTP Request
  //  */
  // public uploadDoc( formData: FormData ): Observable<any> {
  //   if ( this.shared.isInternetAvailable ) {
  //     let url = this.urls.getUploadDocURL();
  //     let headers: HttpHeaders = new HttpHeaders( {
  //       'Authorization': 'amlmZnlBcHA=',
  //       'Accept': 'application/json'
  //     } );
  //     let options: any = { headers: headers };
  //     return this.http.post( url, formData, options ).pipe(
  //       map( ( response ) => {
  //         this.shared.isServiceHit = false;
  //         return response;
  //       } ), catchError( ( error: any ) => {
  //         this.shared.isServiceHit = false;
  //         this.errorHandler.handleError( error, url );
  //         return throwError( error );
  //       } ) );
  //   } else {
  //     this.shared.isServiceHit = false;
  //     return throwError( new Error( "Limited or No Internet Connection." ) );
  //   }
  // }
  // /**
  //  * HTTP Rest Method to Make E-SIGN Consent without OTP
  //  * @param request JSON Data to be posted to HTTP Request
  //  */
  // public esignConsentwithoutOTP( request: any ): Observable<any> {
  //   if ( this.shared.isInternetAvailable ) {
  //     let url = this.urls.getEsignDocsURL();
  //     this.shared.isServiceHit = true;
  //     return this.http.post( url, request, this.options ).pipe(
  //       map( ( response ) => {
  //         this.shared.isServiceHit = false;
  //         return response;
  //       } ), catchError( ( error: any ) => {
  //         this.shared.isServiceHit = false;
  //         this.errorHandler.handleError( error, url );
  //         return throwError( error );
  //       } ) );
  //   } else {
  //     this.shared.isServiceHit = false;
  //     return throwError( new Error( "Limited or No Internet Connection." ) );
  //   }
  // }
  // /**
  //  * HTTP Rest Method to Make E-SIGN Consent with OTP
  //  * @param request JSON Data to be posted to HTTP Request
  //  */
  // public esignConsentwithOTP( request: any ): Observable<any> {
  //   if ( this.shared.isInternetAvailable ) {
  //     let url = this.urls.getEsignDocsOTPURL();
  //     this.shared.isServiceHit = true;
  //     return this.http.post( url, request, this.options ).pipe(
  //       map( ( response ) => {
  //         this.shared.isServiceHit = false;
  //         return response;
  //       } ), catchError( ( error: any ) => {
  //         this.shared.isServiceHit = false;
  //         this.errorHandler.handleError( error, url );
  //         return throwError( error );
  //       } ) );
  //   } else {
  //     this.shared.isServiceHit = false;
  //     return throwError( new Error( "Limited or No Internet Connection." ) );
  //   }
  // }
  // /**
  //  * Generate Image name for given PAN and Key
  //  * @param panNo PAN Number of investor
  //  * @param key key of File
  //  */
  // public getImageURL( panNo: string, key: string ) {
  //   return this.urls.getOnboardingDocURL() + panNo + key;
  // }
  // /**
  //  * HTTP Rest Method to submit feedback for a feature
  //  * @param request JSON Data to be posted to HTTP Request
  //  */
  // public submitFeedbck( request: {} ): Observable<any> {
  //   if ( this.shared.isInternetAvailable ) {
  //     let url = this.urls.getFeedbackURL();
  //     return this.http.post( url, request, this.options ).pipe(
  //       map( ( response ) => {
  //         return response;
  //       } ), catchError( ( error: any ) => {
  //         this.errorHandler.handleError( error, url );
  //         return throwError( error );
  //       } ) );
  //   }
  // }
  /**
  * get subscribed to firebase
  * @param request token from firebase
  * @deprecated
  */
  firebaseSubcribe(request) {
    if (this.shared.isInternetAvailable) {
      let url = this.urls.getSubscription();
      let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpHeaders({
        'content-type': 'application/json',
        'Accept': 'application/json',
        'x-api-key': src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.xApiKey.common
      });
      return src_app_utility_requestFactory_utils__WEBPACK_IMPORTED_MODULE_0__.RequestFactory.requestHandler(this.requestServices, url, "post", request, {
        headers
      }, true);
    }
  }
  addNewLead(request) {
    let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpHeaders({
      'content-type': 'application/json',
      'Accept': 'application/json',
      'userId': 'Jiffy',
      'ticket': 'aW52ZXN0aWNh'
    });
    let url = this.urls.getAddNewLeadURL();
    return src_app_utility_requestFactory_utils__WEBPACK_IMPORTED_MODULE_0__.RequestFactory.requestHandler(this.requestServices, url, "post", request, {
      headers
    }, true);
  }
  investicaUserRegister(request, id) {
    let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpHeaders({
      'content-type': 'application/json',
      'Accept': 'application/json',
      'userId': 'Investica',
      'ticket': 'aW52ZXN0aWNh',
      'investorid': id,
      'businessunit': 'MF',
      'from': 'FinXWeb'
    });
    let url = this.urls.getInvesticaUserRegisterURL();
    return src_app_utility_requestFactory_utils__WEBPACK_IMPORTED_MODULE_0__.RequestFactory.requestHandler(this.requestServices, url, "post", request, {
      headers
    }, true);
  }
  /** navigate to centralised onboarding
   * @param pan pan number
   * @param mobile mobile number
   * @param isFromSeo is from seo url
   */
  getOnboardingURL(pan, mobile, isFromSeo) {
    let url = this.urls.getOnboardingServerURL() + '?';
    if (pan) {
      url += 'pan=' + btoa(pan) + '&';
    }
    if (mobile) {
      url += 'mobile=' + btoa(mobile) + '&';
    }
    let utmUrl = isFromSeo ? 'utm_source=jiffy_seo_banner&utm_medium=seo_banner&utm_campaign=seo_organic_leads&q=' : 'utm_source=choice-finx-web&utm_medium=web&utm_campaign=choice-finx-onboarding&q='; // (14/05/2021)
    return url + utmUrl + new Date().valueOf();
  }
  /** navigate to centralised onboarding
   * @param pan pan number
   * @param mobile mobile number
   * @param isFromSeo is from seo url
   */
  getOnboardingSignalURL(mobile, utmTags) {
    let url = this.urls.getOnboardingServerURL() + '?';
    let utmUrl = "";
    if (mobile) {
      url += 'mobile=' + btoa(mobile) + '&';
    }
    let params = new URLSearchParams();
    let keys = Object.keys(utmTags);
    if (keys.length) {
      for (let key in utmTags) {
        params.set(key, utmTags[key]);
      }
      utmUrl = params + '&q='; // (14/05/2021)
    } else {
      utmUrl = '&q='; // (14/05/2021)
    }
    return url + utmUrl + new Date().valueOf();
  }
  /** to check unique email and mobile number at real time */
  checkUniqueRealTime(request) {
    let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpHeaders({
      'content-type': 'application/json',
      'Accept': 'application/json',
      'userId': 'Jiffy',
      'ticket': 'aW52ZXN0aWNh'
    });
    let url = this.urls.getRealTimeMobEmailCheckURL();
    return src_app_utility_requestFactory_utils__WEBPACK_IMPORTED_MODULE_0__.RequestFactory.requestHandler(this.requestServices, url, "post", request, {
      headers
    }, true);
  }
  /**
   * HTTP Rest Method to Get User Profile
   * @param request JSON Data to be posted to HTTP Request
   */
  getProfile(request) {
    if (this.shared.isInternetAvailable) {
      let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpHeaders({
        'Content-Type': 'application/json',
        'accept': 'application/json',
        'from': 'Web_' + location.host + '_' + this.urls.getVersion()
      });
      let url = this.urls.getProfileURL();
      return src_app_utility_requestFactory_utils__WEBPACK_IMPORTED_MODULE_0__.RequestFactory.requestHandler(this.requestServices, url, "post", request, {
        headers
      }, true);
    }
  }
  static {
    this.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient
    }, {
      type: _shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__.SharedDataService
    }, {
      type: _error_handler_jiffy_error_handler_service__WEBPACK_IMPORTED_MODULE_3__.JiffyErrorHandler
    }, {
      type: _api_urls__WEBPACK_IMPORTED_MODULE_2__.APIURLs
    }, {
      type: _sockets_broadcaster__WEBPACK_IMPORTED_MODULE_5__.Broadcaster
    }];
  }
};
OnboardingService = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Injectable)(), (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__metadata)("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient, _shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__.SharedDataService, _error_handler_jiffy_error_handler_service__WEBPACK_IMPORTED_MODULE_3__.JiffyErrorHandler, _api_urls__WEBPACK_IMPORTED_MODULE_2__.APIURLs, _sockets_broadcaster__WEBPACK_IMPORTED_MODULE_5__.Broadcaster])], OnboardingService);


/***/ })

}]);