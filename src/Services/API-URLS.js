/**Environment Variable */
const environment = true;

/**URL Config */
const config = {
  liveServerURL: "https://choiceindia.com/fables/ghost/api/v3/",
  UATServerURL: "https://choiceindia.com/fables/ghost/api/v3/",
  liveCMSURL: "https://cmsapi.choiceindia.com/",
  UATCMSURL: "https://cmsapi.choiceindia.com/",
  liveFileURL: "https://cms.jiffy.in/",
  UATFileURL: "https://cms.jiffy.in/",

  UATJiffyServerURL: "https://finx.choiceindia.com/",
  liveJiffyServerURL: "https://finx.choiceindia.com/",

  UATJiffyURL: "http://devjiffy.choicebroking.in/",
  liveJiffyURL: "https://finx.choiceindia.com/",

  livefaqURL: "https://choicebroking.freshdesk.com/api/v2/",
  UATfaqURL: "https://choicebroking.freshdesk.com/api/v2/",
  UATJiffyResearchURL:
    "https://researchreportdevapi.choicetechlab.com/api/report/",
  UATNewResearchReportURL:
    "https://finx.choiceindia.com/api/researchreport/v2/api",
  liveJiffyResearchURL: "https://researchreportapi.jiffy.in/api/report/",
  liveNewResearchReportURL:
    "https://finx.choiceindia.com/api/researchreport/v2/api",
  UATNEWSSOBaseURL: "https://lms-api.choicetechlab.com/",
  liveNEWSSOBaseURL: "https://accounts.choiceindia.com/lmsapi/",
  UATSSOBaseURL: "https://sso-api.choiceindia.com/",
  liveSSOBaseURL: "https://sso-api.choiceindia.com/",


  UATOnbBaseURL: "https://uat-pwa.choicetechlab.com/",
  liveOnbBaseURL: "https://accounts.choiceindia.com/",
  UATLMSBaseURL: "https://lms-api.choicetechlab.com/",
  liveLMSBaseURL: " https://accounts.choiceindia.com/lmsapi/",
  livereferURL: "https://finx.choiceindia.com/api/middleware/",
  UATreferURL: "https://uatapi.choicebroking.in/api/middleware",
  liveresearchURL: "https://researchreportapi.jiffy.in/",
  UATresearchURL: "https://researchreportdevapi.choicetechlab.com/",
  liveperformanceURL: "https://finx.choiceindia.com/api/",
  UATperformanceURL: "https://finx.choiceindia.com/api/",
  liveJiffyBaseURL: "https://finx.choiceindia.com/api/researchreport/v2/",
  UATJiffyBaseURL: " https://research-api-dev.choicetechlab.com/",
  UATnbfcBaseURL: "https://api-uat.synofin.tech/od/od-application-creation/",
  livenbfcBaseURL: " https://api-prod.synofin.tech/od/od-application-creation/",
  // UATNachBaseURL:"https://us-central1-neuron-uat.cloudfunctions.net/",
  UATNachBaseURL: "https://dev-api.choicetechlab.com/",
  // liveNachBaseURL:"https://asia-south1-neuron-live-6e391.cloudfunctions.net/"
  liveNachBaseURL: "https://solar-loan.choiceindia.com/",
  UATNbfcAuthURL: "https://api-uat.synofin.tech/oauth/",
  liveNbfcAuthURL: "https://api-prod.synofin.tech/oauth/",

  liveMFBaseURL: "https://mf.choiceindia.com/api/mf/",
  UATMFBaseURL: "https://dev.investica.com/api/mf/",

  liveMFBaseURLV2: "https://mf.choiceindia.com/api/mfv2/",
  UATMFBaseURLV2: "https://dev.investica.com/api/mfv2/",

  liveConnectBaseURL: "https://api.choiceconnect.in/connect/api/",
  UATConnectBaseURL: "https://apidev.choiceconnect.in/connect/api/",

  liveMiddlewareGoURL: "https://api.choiceindia.com/middleware-go/",
  UATMiddlewareGoURL: "https://api.choiceindia.com/middleware-go/",

  livessoRegisterServerURL: "https://sso.choiceindia.com/",
  UATssoRegisterServerURL: "https://sso.choicetechlab.com/",


};
export const clientId = environment ? "N2E4NDY3MDZkYmY5MDlhYVlQ1ceR+YA+0iyV5NNu5bw=" : "OGI5NTA5NzA5ZDMwYzQwNbLVuZzUJXegXE9ksxWQz30=";

export class API_URLS {
  NbfcAuthURL = "";
  newResearchReportURL =
    "https://finx.choiceindia.com/api/researchreport/v2/api";
  JiffyBaseURL = "";
  LMSBaseURL = "";
  OnbBaseURL = "";
  jiffyResearchURL = "";
  /** SSO Base URL */
  SSOServerURL = "";

  NEWSSOServerURL="";
  /**File Download Base URL*/
  FileURL = "";

  /**MF base URL */
  MFBaseURL = "";

  /**MF V2 base URL */
  MFBaseURLV2 = "";

  /**connect base URL */
  ConnectBaseURL = "";
  //
  MiddlewareGoURL = "";
  /**connect base URL */
  // generate  sso token base  
  ssoRegisterServerURL=""
  /**Server URL */
  serverURL = "https://choiceindia.com/fables/ghost/api/v3/";
  /**Server URL */
  jiffyURL = "devjiffy.choicebroking.in";
  jiffyExpertPageURL = "research-report/research/experts/EQ/all/";
  jiffyFundamentalPageURL = "research-report/research/fundamental/EQ/all/";
  jiffySignalPageURL = "research-report/research/signals/EQ/all/";
  /** banner URL */
  CMSURL = "https://cmsapi.choiceindia.com/";
  /** NBFC URL */
  nbfcBaseURL = "";

  /** Base URL for JIFFY APIs */
  jiffyServerURL = "";
  /** faq URL */
  faqURL = "https://choicebroking.freshdesk.com/api/v2/";

  /** refer and earn URL */
  referURL = "https://uatapi.choicebroking.in/api/middleware";

  /**Research New Fetch Success Ratio */
  fetchResearchReport = "/research-report-new";
  /** Research URL */
  researchURL = "https://uatapi.choicebroking.in/api/middleware";
  /** NACH Base URL */
  nachBaseURL = "";
  /** PV breakout API data URL */
  // pvBreakoutURL = "api/techanalysis/v3/GetMessages";
  /**Market Insights , fabal URL */

  addMarketInsiteURL = "content/posts/?key=280c55197998a010569e5d612a";

  /** fables url  */

  fableCategoryURL = "items/fables?filter[fable_status][_eq]=publish";

  /**fablestories blog  */
  fablesStoryURL =
    "content/posts/?key=280c55197998a010569e5d612a&filter=tag:featured-blog&limit=6";

  /**fables trending blog  */
  fabletrendingURL =
    "content/posts/?key=280c55197998a010569e5d612a&filter=tag:trending-blog&limit=6";

  /**fables trending blog  */
  fableTopFiveURL = "content/posts/?key=280c55197998a010569e5d612a&limit=5";

  /** fables blogs  */

  fableBlogURL = "content/posts/{id}/?key=280c55197998a010569e5d612a";

  /** Primary banner */

  primaryURL = "/items/banners?filter[banner_type][_eq]=primary";

  /** Secondary banner */

  secondaryURL = "/items/second_banner";

  /** contact form */

  contactURL = "contact-us/send-email";
  researchReport = "/research-report";

  /** API URL For guest Token Generation*/
  genKeyURL = "api/settings/GenKey";
  /** Faq category section */

  faqCategoryURL = "/items/faq_category?filter[faq_status][_eq]=publish";

  /**Market Insights New */

  addMarketInsiteNewURL = "market-insights?limit=4&offset=0";

  /**Socket Logon Request */
  socketLogonRequest =
    "63=FIX3.0|64=101|65=66|66=$currentDate|67=$userId|68=|400=11";
  /** refer and earn */
  earnURL = "v1/40a9f5ac41a0f6223825/stage-user";
  /**Socket Header Request for Multitouchline */
  socketHeaderRequest =
    "63=FIX3.0|64=206|65=66|66=$currentDate|$requests230=$subUnSub|4=$sessionId";
  /**Pause Resume Request */
  pauseResumeRequest =
    "63=FT3.0|64=106|65=80|66=$currentDate|230=$subUnSub|4=$sessionId";
  /**Multitouchline Request */
  socketMultiTouchlineRequest = "1=$segmentId$7=$token";
  /**Keep Alive Request */
  keepAliveRequest = "63=FT3.0|64=1000|65=34|66=$currentDate|4=$sessionId";

  /** Performance */

  performancefontURL = "techanalysis/getcounters";

  // multiple tokens url

  multipletokensURL = "cm/ProfileMkt/MultipleTouchlineW2";
  /** performance Success ratio */

  successURL = "api/success-ratio";

  /** add new lead APIs */
  sendNewLeadURL = "add-new-lead-v2";

  /** Open Account APIs */
  sendInvesOTPURL = "investica-signup";
  verifyInvesOTPURL = "investica-verifyotp";
  OTPInvesOnCallURL = "call-for-otp";
  resendInvesOTPURL = "investica-resendotp";
  sendOTPURL = "finx/lead/add";
  resendOTPURL = "resend-otp";
  nbfcResendOTPURL = "api/resend-otp";
  OTPOnCallURL = "otp-on-call";
  verifyOTPURL = "finx/otp/verify";
  nbfcverifyOTPURL = "api/verify-otp";
  // for event calendar
  eventdetailsURL = "cm/ProfileMkt/EventDetails";

  /** pdf API */

  //   newsURL='items/news?filter[status][_eq]=published&limit=1000&sort[]=-id';
  newsURL =
    "items/news?filter[status][_eq]=published&sort[]=-news_dates&limit=1000";
  noticeURL = "items/notices?limit=1000&sort[]=id";
  //   noticeRightURL = 'items/notices?filter[status][_eq]=published&filter[type][_eq]=right_issues&limit=1000&sort[]=id';
  corporateURL =
    "items/corporate_governance?filter[status][_eq]=published&filter[title][_eq]=policies&limit=1000&sort[]=id";
  corporatecommiteeURL =
    "items/corporate_governance?filter[status][_eq]=published&filter[title][_eq]=committee&limit=1000&sort[]=id";
  corporateGovernanceURL =
    "items/corporate_governance?filter[status][_eq]=published&limit=1000&sort[]=id";
  shareholdingURL =
    "items/share_holding_pattern?filter[status][_eq]=published&limit=1000&sort[]=id";
  transactionURL =
    "items/related_party_transaction?filter[status][_eq]=Published&limit=1000&sort[]=id";
  closureURL =
    "items/closure_trading_window?filter[status][_eq]=Published&limit=1000&sort[]=id";
  investorURL =
    "items/investor_presentation?filter[status][_eq]=Published&limit=1000&sort[]=id";
  votingresultURL =
    "items/voting_Results?filter[status][_eq]=published&limit=1000&sort[]=id";
  financeURL =
    "items/financial_info?filter[status][_eq]=published&limit=1000&sort[]=id";
  annualURL =
    "items/annual_report?filter[status][_eq]=published&filter[tital][_eq]=description_1&limit=1000&sort[]=id";
  annual2URL =
    "items/annual_report?filter[status][_eq]=published&filter[tital][_eq]=description_2&limit=1000&sort[]=id";
  factsheetURL =
    "items/fact_sheet?filter[status][_eq]=published&limit=1000&sort[]=id";
  investorawareURL = "items/investor_awareness?limit=1000&sort[]=id";
  cebplURL = "items/cebpl_policies?limit=1000&sort[]=id";
  filedownloadURL = "api/get-download-listing?limit=1000&sort[]=id";
  investorStockURL = "items/investor_charter?limit=1000&sort[]=id";
  boardOfDirector = "items/board_of_directors?limit=1000&sort[]=id";
  /** contact us city detail */
  contactCityURL =
    "items/branch_details?filter[status][_eq]=published&limit=1000";
  cfplURL = "items/NBFC?limit=100&sort[]=id";
  /** Department */
  departmentURL = "items/department";
  /** Sub Department  */
  subdepartmentURL = "items/sub_department?filter[department_id][_eq]=1";
  /** Offer Document */
  offerUrl = "items/OfferDocument";
  /** escalation matrix */
  escalation =
    "items/investor_grievance?filter[status][_eq]=active&limit=1000&sort[]=id";
  /** stock broker content */
  contentUrl = "items/stock_broker_city?limit=1000&sort[]=id";
  /** sub broker city */
  cityUrl = "items/sub_broker_branch_city?limit=1000&sort[]=id";
  /** company IPO */
  companyIpo = "items/Company_ipo?limit=1000&sort[]=id";
  /** blog owner */
  insightsURL =
    "items/Blog??filter[status][_eq]=Published&limit=1000&sort[]=id";

  /** Sub Broker APIs */
  // ?is_refresh=Y
  getCityURL = "city/list";
  getStateURL = "state/list?is_refresh=Y";
  checkExistenceURL = "leadManagement/leadMapping/checkUniqueRealT";
  sendOTPNURL = "api/onboard/sendOTPNewOnboard?mobileNum=$mobileNum";
  verifyOTPNURL = "api/onboard/verifyOTPNewOnboard?otp=$otp&id=$id";
  addNewLeadURL = "leadManagement/leadMapping/addNewLead";

  getExpertResearchURL = "api/research-report-new";
  subBrokerSendOtpURL =
    "https://neuron.choicebroking.in/api/jiffy/generate-otp";
  subBrokerVerifyOtpURL =
    "https://neuron.choicebroking.in/api/jiffy/verify-otp";
  nbfcRegister = "api/register";
  nbfcLogin = "api/login";
  /** NACH URL */
  nachCancellationUATURL = "sendMailNBFCv2";
  nachCancellationliveURL = "sendMailNBFC";
  nachCancellationURL = "api/newdetail";

  subBrokerSendOtpURLNew = "sub-broker/signup";
  subBrokerResendOtpURLNew = "resendotp";
  subBrokerVerifyOtpURLNew = "verifyotp";
  NbfcAuthF = "authorization";

  //for brokerage calculator
  searchURL = "cm/ScripContract/Search/";
  scripDetURL = "cm/ScripContract/ScripDetails/";
  scripBrokerageURL = "order-charges";
  //for  OI spurts
  OIspurts = "md/Data/TopOISpurtsBySegmentDerivatives";
  //for margin calculator
  marginCalculatorUrl = "margin/GetMargin/";
  trackrecordUrl = "items/Track_record";
  //for MF pages
  categoryListUrl = "static/CategoryList";
  categoryListDetails = "Scheme/CategoryDetails";
  schemeDataUrl = "MFAnalysis/SchemeData";
  fundsManagerUrl = "Scheme/fundmanager";
  performancePeerUrl = "MFAnalysis/Analysis";
  AMCListUrl = "static/FUNDMASTERIMG";
  AMCListDetails = "Scheme/AMCwise";
  sipLumpsumCalcUrl = "Scheme/sipcalculator";
  schemeDisributionUrl = "Scheme/distribution";
  sensexReturnGraphUrl = "Scheme/SensexReturnData";
  bankFDReturnGraphUrl = "Scheme/BankFDReturn";
  navReturnGraphUrl = "Scheme/navreturngraph";
  schemeTopSectors = "Scheme/topsectors";
  schemeMarketCap = "Scheme/marketcap";
  schemeTopHoldings = "Scheme/topholdings";
  investorcharterdata="items/Investor_Charter_Grievances";
  /* For Solar Lead Form URL */
  solarLead="api/newLeadDetail";
 /* For generate sso token*/
 ssoRegisterTokenGet="api/connect/token";
  constructor() {
    this.setConfig(environment ? "live" : "UAT");
  }

  /**
   * Set Config
   * @param {*} configKey
   */
  setConfig(configKey) {
    this.setJiffyBaseURL(config[configKey + "JiffyBaseURL"]);
    this.setLMSServerURL(config[configKey + "LMSBaseURL"]);
    this.setFileURL(config[configKey + "FileURL"]);

    this.setOnbServerURL(config[configKey + "OnbBaseURL"]);

    this.setJiffyURL(config[configKey + "JiffyURL"]);
    this.setSSOServerURL(config[configKey + "SSOBaseURL"]);
    this.setNEWSSOServerURL(config[configKey + "NEWSSOBaseURL"]);

    this.setJiffyServerURL(config[configKey + "JiffyServerURL"]);
    this.setServerURL(config[configKey + "ServerURL"]);

    this.setBannerURL(config[configKey + "CMSURL"]);

    this.setfaqURL(config[configKey + "faqURL"]);
    this.setJiffyResearchURL(config[configKey + "JiffyResearchURL"]);
    this.setNewResearchReportURL(config[configKey + "NewResearchReportURL"]);
    this.setreferURL(config[configKey + "referURL"]);
    this.setresearchURL(config[configKey + "researchURL"]);
    this.setperformanceURL(config[configKey + "performanceURL"]);
    this.setnbfcBaseURL(config[configKey + "nbfcBaseURL"]);
    this.setNACHBaseURL(config[configKey + "NachBaseURL"]);
    this.setNbfcAuthURL(config[configKey + "NbfcAuthURL"]);
    this.setMFBaseURL(config[configKey + "MFBaseURL"]);
    this.setMFBaseURLV2(config[configKey + "MFBaseURLV2"]);
    this.setConnectBaseURL(config[configKey + "ConnectBaseURL"]);
    this.setMiddlewareGoURL(config[configKey + "MiddlewareGoURL"]);
    this.setssoRegisterServerURL(config[configKey + "ssoRegisterServerURL"]);

  }

  /**set Connect base URL */
  setConnectBaseURL = (url) => {
    this.ConnectBaseURL = url;
  };
  setMiddlewareGoURL = (url) => {
    this.MiddlewareGoURL = url;
  };

  /**set MF base URL */
  setMFBaseURL = (url) => {
    this.MFBaseURL = url;
  };

  /**set MF base URL */
  setMFBaseURLV2 = (url) => {
    this.MFBaseURLV2 = url;
  };

  setJiffyBaseURL = (url) => {
    this.JiffyBaseURL = url;
  };

  setLMSServerURL = (url) => {
    this.LMSBaseURL = url;
  };

  setOnbServerURL = (url) => {
    this.OnbBaseURL = url;
  };

  setJiffyResearchURL = (url) => {
    this.jiffyResearchURL = url;
  };

  /**
   * Set Base URL of CMS APIs
   * @param url url to Be set
   */
  setNewResearchReportURL(url) {
    this.newResearchReportURL = url;
  }

  setFileURL = (url) => {
    this.FileURL = url;
  };

  /**
   * Set Server URL
   * @param {*} url
   */
  setSSOServerURL = (url) => {
    this.SSOServerURL = url;
  };
  setNEWSSOServerURL = (url) => {
    this.NEWSSOServerURL = url;
  };
  /**
   * Set Server URL
   * @param {*} url
   */
  setServerURL = (url) => {
    this.serverURL = url;
  };

  /**
   * Set Server URL
   * @param {*} url
   */
  setJiffyServerURL = (url) => {
    this.jiffyServerURL = url;
  };

  /**
   * Set Server URL
   * @param {*} url
   */
  setJiffyURL = (url) => {
    this.jiffyURL = url;
  };

  /**
   * Set NBFC URL
   * @param {*} url
   */
  setnbfcBaseURL = (url) => {
    this.nbfcBaseURL = url;
  };

  /**
   * Set Banner URL
   * @param {*} url
   */
  setBannerURL = (url) => {
    this.CMSURL = url;
  };

  setNACHBaseURL = (url) => {
    this.nachBaseURL = url;
  };

  setNbfcAuthURL = (url) => {
    this.NbfcAuthURL = url;
  };

  getExpertDetailURL = (id) => {
    return this.jiffyURL + this.jiffyExpertPageURL + id;
  };

  getFundamentalDetailURL = (id) => {
    return this.jiffyURL + this.jiffyFundamentalPageURL + id;
  };

  getSignalDetailURL = (id) => {
    return this.jiffyURL + this.jiffySignalPageURL + id;
  };

  /**
   * Set faq URL
   * @param {*} url
   */
  setfaqURL = (url) => {
    this.faqURL = url;
  };

  /**
   * Set faq URL
   * @param {*} url
   */
  setreferURL = (url) => {
    this.referURL = url;
  };

  /**
   * Set Research URL
   * @param {*} url
   */
  setresearchURL = (url) => {
    this.researchURL = url;
  };

  /**
   * Set Research URL
   * @param {*} url
   */
  setperformanceURL = (url) => {
    this.performanceURL = url;
  };
  setssoRegisterServerURL = (url) => {
    this.ssoRegisterServerURL = url;
  };


  fetchResearchReportURL() {
    return this.newResearchReportURL + this.fetchResearchReport;
  }

  // fetchSignalReportURL() {
  //   return this.jiffyServerURL + this.pvBreakoutURL;
  // }

  /** Get Market Insite and fabal List URL */

  getMarketinsiteURL() {
    return this.serverURL + this.addMarketInsiteURL;
  }

  /** Get Fabal Stories List URL */

  getFableStoryURL() {
    return this.serverURL + this.fablesStoryURL;
  }

  /** Get fabal Trending List URL */

  getFableTrendingURL() {
    return this.serverURL + this.fabletrendingURL;
  }

  /** Get fable Top 5 URL */

  getFableTopFiveURL() {
    return this.serverURL + this.fableTopFiveURL;
  }

  /** get fables blog data */

  getFableblogURL(id) {
    return (
      this.serverURL +
      `content/posts/slug/${id}/?key=280c55197998a010569e5d612a&include=tags`
    );
  }

  /** Get home Banner URL */

  getHomePrimaryBannerURL() {
    return this.CMSURL + this.primaryURL;
  }

  /** Get Secondary Banner URL */

  getHomeSecondaryBannerURL() {
    return this.CMSURL + this.secondaryURL;
  }

  getContactFormURL() {
    return this.CMSURL + this.contactURL;
  }

  getSessionUrl() {
    return this.jiffyServerURL + this.genKeyURL;
  }

  getExpertReportURL() {
    return this.jiffyResearchURL + this.researchReport;
  }

  getFaqCategoryURL() {
    return this.CMSURL + this.faqCategoryURL;
  }

  getFaqfolderURL(id) {
    return this.faqURL + `solutions/categories/${id}/folders`;
  }

  getFaqArticleURL(id) {
    return this.faqURL + `solutions/folders/${id}/articles`;
  }

  getFableCategoryURL() {
    return this.CMSURL + this.fableCategoryURL;
  }
  getFableFolderURL(id) {
    return (
      this.serverURL +
      `content/posts/?key=280c55197998a010569e5d612a&filter=tag:${id}&limit=all`
    );
  }
  /** faq search API url */
  getFaqSearchURL(pros) {
    return this.faqURL + `search/solutions?term=${pros}`;
  }
  /** Get Market Insite and fabal List URL */

  getMarketinsiteNewURL() {
    return this.jiffyResearchURL + this.addMarketInsiteNewURL;
  }
  getSendOTPURL() {
    return this.NEWSSOServerURL + this.sendOTPURL;
    // return "https://sso-beta.choiceindia.com/" + this.sendOTPURL;
  }

  getOTPOnCallURL() {
    return this.SSOServerURL + this.OTPOnCallURL;
    // return "https://sso-beta.choiceindia.com/" + this.OTPOnCallURL;
  }

  getResendOTPURL() {
    return this.SSOServerURL + this.resendOTPURL;
    // return "https://sso-beta.choiceindia.com/" + this.resendOTPURL;
  }

  getVerifyOTPURL() {
    return this.NEWSSOServerURL + this.verifyOTPURL;
    // return "https://sso-beta.choiceindia.com/" + this.verifyOTPURL;
  }

  getSendInvesOTPURL() {
    return this.SSOServerURL + this.sendInvesOTPURL;
  }
  getOTPInvesOnCallURL() {
    return this.SSOServerURL + this.OTPInvesOnCallURL;
  }

  getVerifyInvestOTPURL() {
    return this.SSOServerURL + this.verifyInvesOTPURL;
  }
  getResendInvestOTPURL() {
    return this.SSOServerURL + this.resendInvesOTPURL;
  }

  getNbfcResendOTPURL() {
    return this.SSOServerURL + this.nbfcResendOTPURL;
  }

  /**Logon Request */
  getLogonRequestURL() {
    return this.socketLogonRequest;
  }
  getCitiesURL() {
    return this.LMSBaseURL + this.getCityURL;
  }

  getStatesURL() {
    return this.LMSBaseURL + this.getStateURL;
  }

  /**Header Request */
  getHeaderRequestURL() {
    return this.socketHeaderRequest;
  }

  /**Socket Pause Resume Request */
  getPauseResumeRequestURL() {
    return this.pauseResumeRequest;
  }

  getMultitouchlineRequestURL() {
    return this.socketMultiTouchlineRequest;
  }

  /**Keep Alive Request */
  getKeepAliveRequestURL() {
    return this.keepAliveRequest;
  }
  getCheckExistenceURL() {
    return this.OnbBaseURL + this.checkExistenceURL;
  }

  getSendOTPNURL(mobileNum) {
    return this.OnbBaseURL + this.sendOTPNURL.replace("$mobileNum", mobileNum);
  }

  getVerifyOTPNURL(otp, id) {
    return (
      this.OnbBaseURL +
      this.verifyOTPNURL.replace("$otp", otp).replace("$id", id)
    );
  }

  getAddNewLeadURL() {
    return this.OnbBaseURL + this.addNewLeadURL;
  }

  getreferearnURL(id) {
    return this.referURL + `GetUserReferralData?ClientID=${id}`;
  }

  getreferallink(id) {
    return this.referURL + `v1/40a9f5ac41a0f6223825/user/${id}/referral_link`;
  }

  getExpertResearchreportURL() {
    return this.JiffyBaseURL + this.getExpertResearchURL;
  }

  getresearchURL(id) {
    return this.researchURL + `api/fundamental?report_subtype_uuid=${id}`;
  }
  getresearchipoURL() {
    // this.researchURL
    return this.researchURL + "api/ipo?offset=0";
  }

  getperformanceURL() {
    return this.performanceURL + this.performancefontURL;
  }
  getMultipletokens() {
    return this.performanceURL + this.multipletokensURL;
  }

  getsuccessURL() {
    return this.JiffyBaseURL + this.successURL;
  }

  getresearchDetailURL(uuid, report_category) {
    return this.researchURL + `api/${report_category}/v2/${uuid}`;
  }

  getchoiceIndiaNewLeadURL() {
    return this.SSOServerURL + this.sendNewLeadURL;
  }

  getSubBrokerSendOtpUrl() {
    return this.subBrokerSendOtpURL;
  }

  getSubBrokerVerifyOtpUrl() {
    return this.subBrokerVerifyOtpURL;
  }

  getNewsUrl() {
    return this.CMSURL + this.newsURL;
  }

  getNoticesUrl() {
    return this.CMSURL + this.noticeURL;
  }

  getNoticesUrlR() {
    return this.CMSURL + this.noticeRightURL;
  }
  getcorporateGovernanceURL() {
    return this.CMSURL + this.corporateGovernanceURL;
  }
  getcorporateURL() {
    return this.CMSURL + this.corporateURL;
  }
  getcorporatecommiteeURL() {
    return this.CMSURL + this.corporatecommiteeURL;
  }
  getShareholdingURL() {
    return this.CMSURL + this.shareholdingURL;
  }

  getTransactionURL() {
    return this.CMSURL + this.transactionURL;
  }
  getClosureTradingURL() {
    return this.CMSURL + this.closureURL;
  }
  getInvestorURL() {
    return this.CMSURL + this.investorURL;
  }

  getVotingResultURL() {
    return this.CMSURL + this.votingresultURL;
  }

  getFinancialURL() {
    return this.CMSURL + this.financeURL;
  }
  getAnnualReportURL() {
    return this.CMSURL + this.annualURL;
  }

  getAnnualReport2URL() {
    return this.CMSURL + this.annual2URL;
  }

  getFactSheetURL() {
    return this.CMSURL + this.factsheetURL;
  }

  getMarginURL() {
    return this.FileURL + this.filedownloadURL;
  }
  getInvestorAwareURL() {
    return this.CMSURL + this.investorawareURL;
  }
  getCebplPolicyURL() {
    return this.CMSURL + this.cebplURL;
  }

  getInvestorStockURL(id) {
    return this.CMSURL + this.investorStockURL;
  }

  getcontactCityURL() {
    return this.CMSURL + this.contactCityURL;
  }
  getCfplPolicyURL() {
    return this.CMSURL + this.cfplURL;
  }

  getNbfcMobile(id) {
    return this.SSOServerURL + `api/is-mobile-unique?mobile_number=${id}`;
  }

  getNbfcRegister() {
    return this.SSOServerURL + this.nbfcRegister;
  }
  getNbfcLogin() {
    return this.SSOServerURL + this.nbfcLogin;
  }
  getNbfcVerifyOTP() {
    return this.SSOServerURL + this.nbfcverifyOTPURL;
  }

  getNbfcLead(subProduct) {
    return this.nbfcBaseURL + `v1/lead/source/${subProduct}/choicewebsite`;
  }
  getDepartmentURL() {
    return this.CMSURL + this.departmentURL;
  }
  getSubDepartmentURL(id) {
    return (
      this.CMSURL + `items/sub_department?filter[department_id][_eq]=${id}`
    );
  }
  getOfferDocumnetURL() {
    return this.CMSURL + this.offerUrl;
  }

  getEscalationURL() {
    return this.CMSURL + this.escalation;
  }

  getSubBrokerNewSendOtpUrl() {
    return this.SSOServerURL + this.subBrokerSendOtpURLNew;
  }

  getSubBrokerNewResendOtpURL() {
    return this.SSOServerURL + this.subBrokerResendOtpURLNew;
  }

  getSubBrokerNewVerifyOtpURL() {
    return this.SSOServerURL + this.subBrokerVerifyOtpURLNew;
  }
  getSubBrokerURL(location) {
    return (
      this.CMSURL +
      `items/stock_broker_city?filter[city][_eq]=${location}&limit=1000&sort[]=id`
    );
  }

  getSubBrokerCityURL() {
    return this.CMSURL + this.cityUrl;
  }
  getNACHCancellationURL() {
    return this.nachBaseURL + this.nachCancellationURL;
  }

  getIpaddressURL() {
    return "https://geolocation-db.com/json/";
  }

  getNbfcAuthorization() {
    return this.NbfcAuthURL + this.NbfcAuthF;
  }

  getBoardOfDirector() {
    return this.CMSURL + this.boardOfDirector;
  }

  /**Assited Order Flow api's */

  getBasketDetailsURL() {
    return this.MFBaseURLV2 + "orders/basket/order/details";
    // return "https://apidev.choiceconnect.in/connect/api/basket/order/details";
  }

  /**send otp api url */
  getMFAssistedSendOtpURL() {
    return this.MFBaseURLV2 + "orders/send-otp";
    // return "https://dev.investica.com//api/mf/sms/SendOTP";
  }

  /**verify otp api url */
  getMFAssistedVerifyOTPURL() {
    return this.MFBaseURLV2 + "orders/verify-otp";
    // return "https://dev.investica.com//api/mf/sms/VerifyOTP";
  }

  /**place lumpsum order */
  getLumpsumOrderURL() {
    return this.MFBaseURL + "MFOrders/V4/LumpSum";
    // return "https://dev.investica.com/api/mf/MFOrders/V3/LumpSum"
  }

  /**place SIP order */
  getSIPOrderURL() {
    return this.MFBaseURL + "MFOrders/V3/XSIP";
    // return "https://dev.investica.com/api/mf/MFOrders/V2/XSIP"
  }

  /**ref number api url */
  getRefNoURL() {
    return this.MFBaseURL + "MFOrders/OrderMetaData";
    // return "https://dev.investica.com/api/mf/MFOrders/OrderMetaData"
  }

  /**payment link api url */
  getPaymentLinkURL() {
    return this.MFBaseURL + "mforders/payment";
    // return "https://dev.investica.com/api/mf/mforders/payment"
  }

  /**order status update api url */
  orderStatusUpdateURL() {
    return this.ConnectBaseURL + "basket/order/status-update";
    // return "https://apidev.choiceconnect.in/connect/api/basket/order/status-update"
  }
  //for event deatils
  getEventDetails() {
    return this.performanceURL + this.eventdetailsURL;
  }
  /** Company ipo */
  companyIpoURL() {
    return this.CMSURL + this.companyIpo;
  }
  //Get URL for Search Scrips
  getSearchURL() {
    return this.performanceURL + this.searchURL;
  }
  getScripDetURL() {
    return this.performanceURL + this.scripDetURL;
  }
  getScripBrokerageURL() {
    return this.MiddlewareGoURL + this.scripBrokerageURL;
  }

  /** Blog cms */
  getinsightsURL() {
    return this.CMSURL + this.insightsURL;
  }
  //OIspurts
  getOISpurtsURL() {
    return this.performanceURL + this.OIspurts;
  }
  getMarginCalculatorURL(segmentId, token_qty) {
    return (
      this.performanceURL +
      this.marginCalculatorUrl +
      segmentId +
      "/" +
      token_qty
    );
  }
  gettrackDocumnetURL() {
    return this.CMSURL + this.trackrecordUrl;
  }
  //for mf pages
  getCategoriesList() {
    return this.MFBaseURL + this.categoryListUrl;
  }
  getCategoryData() {
    return this.MFBaseURL + this.categoryListDetails;
  }
  getSchemeData() {
    return this.MFBaseURL + this.schemeDataUrl;
  }
  getSchemeData() {
    return this.MFBaseURL + this.schemeDataUrl;
  }
  getFundManagerData() {
    return this.MFBaseURL + this.fundsManagerUrl;
  }
  getPerformancePeerComparisonData() {
    return this.MFBaseURL + this.performancePeerUrl;
  }
  getAMCList() {
    return this.MFBaseURL + this.AMCListUrl;
  }
  AMCListData() {
    return this.MFBaseURL + this.AMCListDetails;
  }
  calculatesipLump() {
    return this.MFBaseURL + this.sipLumpsumCalcUrl;
  }
  getSchemeDistributionurl() {
    return this.MFBaseURL + this.schemeDisributionUrl;
  }
  sensexReturnGraphdata() {
    return this.MFBaseURL + this.sensexReturnGraphUrl;
  }
  bankFDReturnGraphdata() {
    return this.MFBaseURL + this.bankFDReturnGraphUrl;
  }
  getNavReturnGraph() {
    return this.MFBaseURL + this.navReturnGraphUrl;
  }
  getschemeTopSectors() {
    return this.MFBaseURL + this.schemeTopSectors;
  }
  getschemeMarketCap() {
    return this.MFBaseURL + this.schemeMarketCap;
  }
  getschemeTopHoldings() {
    return this.MFBaseURL + this.schemeTopHoldings;
  }
  /** FAQ API URL */
  getFaqURL() {
    return this.jiffyServerURL + `api/faq/list`;
  }

  //Solar Loan URL
  getLeadFormURL(){
   return this.nachBaseURL+this.solarLead;
  }
  // generate sso token 
  getSSOTokenURL(){
    return this.ssoRegisterServerURL+this.ssoRegisterTokenGet;
   }
   getinvestorcharterdataURL() {
    return this.CMSURL + this.investorcharterdata;
  }
}
