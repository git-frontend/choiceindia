/**Environment Variable */
const environment = true


/**URL Config */
const config = {
    liveServerURL: "https://choiceindia.com/blog/ghost/api/v3/",
    UATServerURL:"https://choiceindia.com/blog/ghost/api/v3/",
    liveBannerURL: "https://cmsapi.choiceindia.com/",
    UATBannerURL : "https://cmsapi.choiceindia.com/",


    UATJiffyServerURL: "https://uat.jiffy.in/",
    liveJiffyServerURL: "https://jiffy.choiceindia.com/",

    UATJiffyURL: "http://devjiffy.choicebroking.in/",
    liveJiffyURL: "https://jiffy.choiceindia.com/",

    livefaqURL: "https://choicebroking.freshdesk.com/api/v2/",
    UATfaqURL: "https://choicebroking.freshdesk.com/api/v2/",
    UATJiffyResearchURL: "https://researchreportdevapi.choicetechlab.com/api/report/",
    liveJiffyResearchURL: "https://researchreportapi.jiffy.in/api/report/",
    UATNewResearchReportURL: "https://research-api-dev.choicetechlab.com/api",
    liveNewResearchReportURL: "https://jiffy.choiceindia.com/api/researchreport/v2/api",
    // https://researchreportapi.jiffy.in/api/report/market-insights
    // https://researchreportdevapi.choicetechlab.com/api/report/market-insights
    UATSSOBaseURL: 'https://sso-api.choicetechlab.com/',
    liveSSOBaseURL: 'https://sso-api.choiceindia.com/'
  
}


export class API_URLS {
    newResearchReportURL = 'https://jiffy.choiceindia.com/api/researchreport/v2/api';
  jiffyResearchURL = "";
  /** SSO Base URL */
  SSOServerURL = '';
 /**Server URL */
 serverURL = "https://choiceindia.com/blog/ghost/api/v3/";
 /**Server URL */
 jiffyURL = "devjiffy.choicebroking.in";
 jiffyExpertPageURL="research-report/research/experts/EQ/all/"
 jiffySignalPageURL="research-report/research/signals/EQ/all/"
 /** banner URL */
   bannerURL ="https://cmsapi.choiceindia.com/"


     /** Base URL for JIFFY APIs */
   jiffyServerURL = "https://api.jiffy.in/";
   /** faq URL */
   faqURL="https://choicebroking.freshdesk.com/api/v2/"


  /**Research New Fetch Success Ratio */
   fetchResearchReport = "/research-report-new"


     /** PV breakout API data URL */
pvBreakoutURL = 'api/techanalysis/v3/GetMessages';
  /**Market Insights , fabal URL */

  addMarketInsiteURL = 'content/posts/?key=280c55197998a010569e5d612a';

  /**fablestories blog  */
  fablesStoryURL = 'content/posts/?key=280c55197998a010569e5d612a&filter=tag:featured-blog&limit=6';

/**fables trending blog  */
  fabletrendingURL = 'content/posts/?key=280c55197998a010569e5d612a&filter=tag:trending-blog&limit=6';

  /** fables blogs  */

  fableBlogURL = 'content/posts/{id}/?key=280c55197998a010569e5d612a'

  /** Primary banner */

    primaryURL='/items/banners?filter[banner_type][_eq]=primary'

  /** Secondary banner */

   secondaryURL='/items/second_banner'

   /** contact form */

   contactURL='contact-us/'
    researchReport = '/research-report'

      /** API URL For guest Token Generation*/
   genKeyURL = "api/settings/GenKey";
   /** Faq category section */

   faqCategoryURL='/items/faq_category?filter[faq_status][_eq]=publish'

   /**Market Insights New */

  addMarketInsiteNewURL = 'market-insights?limit=4&offset=0';

    /**Socket Logon Request */
    socketLogonRequest = "63=FIX3.0|64=101|65=66|66=$currentDate|67=$userId|68=|400=11";
    /**Socket Header Request for Multitouchline */
    socketHeaderRequest = "63=FIX3.0|64=206|65=66|66=$currentDate|$requests230=$subUnSub|4=$sessionId";
    /**Pause Resume Request */
    pauseResumeRequest = '63=FT3.0|64=106|65=80|66=$currentDate|230=$subUnSub|4=$sessionId';
    /**Multitouchline Request */
    socketMultiTouchlineRequest = "1=$segmentId$7=$token"
    /**Keep Alive Request */
    keepAliveRequest = "63=FT3.0|64=1000|65=34|66=$currentDate|4=$sessionId"



   /** Open Account APIs */

   sendOTPURL = 'sign-up';
   resendOTPURL = 'resend-otp';
   OTPOnCallURL = 'otp-on-call';
   verifyOTPURL = 'verify-otp';
   constructor() {
    this.setConfig(environment ? "live" : "UAT")
}





 /**
     * Set Config
     * @param {*} configKey 
     */
  setConfig(configKey) {
    this.setSSOServerURL(config[configKey + 'SSOBaseURL'])

    this.setServerURL(config[configKey + 'ServerURL'])
    
    this.setJiffyURL(config[configKey + 'JiffyURL'])
    
    this.setBannerURL(config[configKey + 'BannerURL'])

    this.setJiffyServerURL(config[configKey + 'JiffyServerURL']);
    this.setfaqURL(config[configKey + 'faqURL'])
    this.setJiffyResearchURL(config[configKey + 'JiffyResearchURL']);
    this.setNewResearchReportURL(config[configKey + 'NewResearchReportURL']);
}

setJiffyResearchURL = (url) => {
    this.jiffyResearchURL = url;
}


  /**
 * Set Base URL of CMS APIs
 * @param url url to Be set
 */
    setNewResearchReportURL(url) {
    this.newResearchReportURL = url;
  }
/**
 * Set Server URL 
 * @param {*} url 
 */
 setSSOServerURL = (url) => {
    this.SSOServerURL = url;
}
/**
 * Set Server URL 
 * @param {*} url 
 */
setServerURL = (url) => {
    this.serverURL = url;
}

/**
 * Set Server URL 
 * @param {*} url 
 */
 setJiffyServerURL = (url) => {
    this.jiffyServerURL = url;
}

/**
 * Set Server URL 
 * @param {*} url 
 */
 setJiffyURL = (url) => {
    this.jiffyURL = url;
}


/**
 * Set Banner URL 
 * @param {*} url 
 */
 setBannerURL = (url) => {

    this.bannerURL = url;
}


getExpertDetailURL=(id)=>{
return this.jiffyURL+this.jiffyExpertPageURL+id
}


getSignalDetailURL=(id)=>{
    return this.jiffyURL+this.jiffySignalPageURL+id
}

/**
 * Set faq URL 
 * @param {*} url 
 */
 setfaqURL = (url) => {

    this.faqURL = url;
}


 fetchResearchReportURL() {
    return this.newResearchReportURL + this.fetchResearchReport;
  }

  fetchSignalReportURL() {
    return this.jiffyServerURL + this.pvBreakoutURL;
  }


/** Get Market Insite and fabal List URL */

getMarketinsiteURL() {

    return this.serverURL + this.addMarketInsiteURL
}

/** Get Fabal Stories List URL */

getFableStoryURL() {

    return this.serverURL + this.fablesStoryURL
}

/** Get fabal Trending List URL */

getFableTrendingURL() {

    return this.serverURL + this.fabletrendingURL
}

/** get fables blog data */

getFableblogURL(id){

    return this.serverURL + `content/posts/slug/${id}/?key=280c55197998a010569e5d612a`
}

/** Get home Banner URL */

getHomePrimaryBannerURL(){

    return this.bannerURL + this.primaryURL
}


/** Get Secondary Banner URL */

getHomeSecondaryBannerURL(){

    return this.bannerURL + this.secondaryURL
}


getContactFormURL(){
    return this.bannerURL + this.contactURL
}

getSessionUrl(){
    return this.jiffyServerURL+this.genKeyURL
}

getExpertReportURL(){
    return this.jiffyResearchURL + this.researchReport
}

getFaqCategoryURL(){
    return this.bannerURL + this.faqCategoryURL
}

getFaqfolderURL(id){
   
    
    return this.faqURL + `solutions/categories/${id}/folders`
}

getFaqArticleURL(id){

    return this.faqURL + `solutions/folders/${id}/articles`
}


getFableCategoryURL(){
    return this.bannerURL + this.fableCategoryURL
}
getFableFolderURL(id){
    return this.serverURL + `content/posts/?key=280c55197998a010569e5d612a&filter=tag:${id}&limit=3`
}
/** faq search API url */
getFaqSearchURL(pros){
    return this.faqURL + `search/solutions?term=${pros}`
}
/** Get Market Insite and fabal List URL */

    getMarketinsiteNewURL() {
        return this.jiffyResearchURL + this.addMarketInsiteNewURL;
    }
getSendOTPURL() {
    return this.SSOServerURL + this.sendOTPURL;
}

getResendOTPURL() {
    return this.SSOServerURL + this.resendOTPURL;
}

getOTPOnCallURL() {
    return this.SSOServerURL + this.OTPOnCallURL;
}

getVerifyOTPURL() {
    return this.SSOServerURL + this.verifyOTPURL;
}



    
    /**Logon Request */
    getLogonRequestURL(){
        return this.socketLogonRequest
    }

    /**Header Request */
    getHeaderRequestURL(){
       return this.socketHeaderRequest 
    }

    /**Socket Pause Resume Request */
    getPauseResumeRequestURL(){
        return this.pauseResumeRequest
    }

    getMultitouchlineRequestURL(){
        return this.socketMultiTouchlineRequest
    }

    /**Keep Alive Request */
    getKeepAliveRequestURL(){
        return this.keepAliveRequest
    }
}
