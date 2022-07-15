/**Environment Variable */
const environment = true;


/**URL Config */
const config = {
    liveServerURL: "https://choiceindia.com/blog/ghost/api/v3/",
    UATServerURL: "https://choiceindia.com/blog/ghost/api/v3/",
    liveBannerURL: "https://cmsapi.choiceindia.com/",
    UATBannerURL: "https://cmsapi.choiceindia.com/",


    UATJiffyServerURL: "https://uat.jiffy.in/",
    liveJiffyServerURL: "https://jiffy.choiceindia.com/",

    UATJiffyURL: "http://devjiffy.choicebroking.in/",
    liveJiffyURL: "https://jiffy.choiceindia.com/",

    livefaqURL: "https://choicebroking.freshdesk.com/api/v2/",
    UATfaqURL: "https://choicebroking.freshdesk.com/api/v2/",
    UATJiffyResearchURL: "https://researchreportdevapi.choicetechlab.com/api/report/",
    // https://researchreportapi.jiffy.in/api/report/
    UATNewResearchReportURL: "https://research-api-dev.choicetechlab.com/api",
    liveJiffyResearchURL: "https://researchreportapi.jiffy.in/api/report/",
    liveNewResearchReportURL: "https://jiffy.choiceindia.com/api/researchreport/v2/api",
    UATSSOBaseURL: 'https://sso-api.choicetechlab.com/',
    liveSSOBaseURL: 'https://sso-api.choiceindia.com/',
    UATOnbBaseURL: 'https://uat-pwa.choicetechlab.com/',
    liveOnbBaseURL: 'https://accounts.choiceindia.com/',
    UATLMSBaseURL: 'https://lms-api.choicetechlab.com/',
    liveLMSBaseURL: ' https://accounts.choiceindia.com/lmsapi/',
    livereferURL: "https://jiffy.choiceindia.com/api/middleware/",
    UATreferURL: "https://uatapi.choicebroking.in/api/middleware",
    liveresearchURL: "https://researchreportapi.jiffy.in/",
    UATresearchURL: "https://researchreportdevapi.choicetechlab.com/",
    liveperformanceURL:"https://jiffy.choiceindia.com//api/",
    UATperformanceURL:"https://jiffy.choiceindia.com//api/",
    liveJiffyBaseURL: "https://jiffy.choiceindia.com/api/researchreport/v2/",
    UATJiffyBaseURL: " https://research-api-dev.choicetechlab.com/"
}

export class API_URLS {
    newResearchReportURL = 'https://jiffy.choiceindia.com/api/researchreport/v2/api';
    JiffyBaseURL = '';
    LMSBaseURL = '';
    OnbBaseURL = '';
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
    bannerURL = "https://cmsapi.choiceindia.com/"


     /** Base URL for JIFFY APIs */
   jiffyServerURL = "https://api.jiffy.in/";
    /** faq URL */
    faqURL = "https://choicebroking.freshdesk.com/api/v2/"

    /** refer and earn URL */
    referURL = "https://uatapi.choicebroking.in/api/middleware"
    
  /**Research New Fetch Success Ratio */
   fetchResearchReport = "/research-report-new"
    /** Research URL */
    researchURL = "https://uatapi.choicebroking.in/api/middleware"


     /** PV breakout API data URL */
pvBreakoutURL = 'api/techanalysis/v3/GetMessages';
    /**Market Insights , fabal URL */

    addMarketInsiteURL = 'content/posts/?key=280c55197998a010569e5d612a';

    /** fables url  */

    fableCategoryURL = 'items/fables?filter[fable_status][_eq]=publish'

    /**fablestories blog  */
    fablesStoryURL = 'content/posts/?key=280c55197998a010569e5d612a&filter=tag:featured-blog&limit=6';

    /**fables trending blog  */
    fabletrendingURL = 'content/posts/?key=280c55197998a010569e5d612a&filter=tag:trending-blog&limit=6';

    /**fables trending blog  */
    fableTopFiveURL = 'content/posts/?key=280c55197998a010569e5d612a&limit=5';

    /** fables blogs  */

    fableBlogURL = 'content/posts/{id}/?key=280c55197998a010569e5d612a'

    /** Primary banner */

    primaryURL = '/items/banners?filter[banner_type][_eq]=primary'

    /** Secondary banner */

    secondaryURL = '/items/second_banner'

    /** contact form */

    contactURL = 'contact-us/'
    researchReport = '/research-report'

      /** API URL For guest Token Generation*/
   genKeyURL = "api/settings/GenKey";
    /** Faq category section */

    faqCategoryURL = '/items/faq_category?filter[faq_status][_eq]=publish'

    /**Market Insights New */

    addMarketInsiteNewURL = 'market-insights?limit=4&offset=0';

    /**Socket Logon Request */
    socketLogonRequest = "63=FIX3.0|64=101|65=66|66=$currentDate|67=$userId|68=|400=11";
    /** refer and earn */
    earnURL = 'v1/40a9f5ac41a0f6223825/stage-user';
    /**Socket Header Request for Multitouchline */
    socketHeaderRequest = "63=FIX3.0|64=206|65=66|66=$currentDate|$requests230=$subUnSub|4=$sessionId";
    /**Pause Resume Request */
    pauseResumeRequest = '63=FT3.0|64=106|65=80|66=$currentDate|230=$subUnSub|4=$sessionId';
    /**Multitouchline Request */
    socketMultiTouchlineRequest = "1=$segmentId$7=$token"
    /**Keep Alive Request */
    keepAliveRequest = "63=FT3.0|64=1000|65=34|66=$currentDate|4=$sessionId"

    /** Performance */

    performancefontURL='techanalysis/getcounters';

    /** performance Success ratio */

    successURL ='api/success-ratio';


   


    /** Open Account APIs */

    sendOTPURL = 'sign-up';
    resendOTPURL = 'resend-otp';
    OTPOnCallURL = 'otp-on-call';
    verifyOTPURL = 'verify-otp';

    /** Sub Broker APIs */
    // ?is_refresh=Y
    getCityURL = 'city/list';
    getStateURL = 'state/list?is_refresh=Y';
    checkExistenceURL = 'leadManagement/leadMapping/checkUniqueRealT';
    sendOTPNURL = 'api/onboard/sendOTPNewOnboard?mobileNum=$mobileNum';
    verifyOTPNURL = 'api/onboard/verifyOTPNewOnboard?otp=$otp&id=$id';
    addNewLeadURL = 'leadManagement/leadMapping/addNewLead';

    getExpertResearchURL = 'api/research-report-new';

    constructor() {
        this.setConfig(environment ? "live" : "UAT")
    }





    /**
        * Set Config
        * @param {*} configKey 
        */
    setConfig(configKey) {
        this.setJiffyBaseURL(config[configKey + 'JiffyBaseURL']);
        this.setLMSServerURL(config[configKey + 'LMSBaseURL']);

        this.setOnbServerURL(config[configKey + 'OnbBaseURL']);

    this.setJiffyURL(config[configKey + 'JiffyURL'])
        this.setSSOServerURL(config[configKey + 'SSOBaseURL']);
    

    this.setJiffyServerURL(config[configKey + 'JiffyServerURL']);
        this.setServerURL(config[configKey + 'ServerURL']);

        this.setBannerURL(config[configKey + 'BannerURL']);

        this.setfaqURL(config[configKey + 'faqURL']);
        this.setJiffyResearchURL(config[configKey + 'JiffyResearchURL']);
    this.setNewResearchReportURL(config[configKey + 'NewResearchReportURL']);
        this.setreferURL(config[configKey + 'referURL']);
        this.setresearchURL(config[configKey + 'researchURL']);
        this.setperformanceURL(config[configKey + 'performanceURL']);
    }

    setJiffyBaseURL = (url) => {
        this.JiffyBaseURL = url;
    }

    setLMSServerURL = (url) => {
        this.LMSBaseURL = url;
    }

    setOnbServerURL = (url) => {
        this.OnbBaseURL = url;
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
    
    /**
     * Set faq URL 
     * @param {*} url 
     */
     setreferURL = (url) => {

        this.referURL = url;
    }

     /**
     * Set Research URL 
     * @param {*} url 
     */
      setresearchURL = (url) => {

        this.researchURL = url;
    }

     /**
     * Set Research URL 
     * @param {*} url 
     */
      setperformanceURL = (url) => {

        this.performanceURL = url;
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

    /** Get fable Top 5 URL */

    getFableTopFiveURL() {

        return this.serverURL + this.fableTopFiveURL;
    }

    /** get fables blog data */

    getFableblogURL(id) {

        return this.serverURL + `content/posts/slug/${id}/?key=280c55197998a010569e5d612a&include=tags`
    }

    /** Get home Banner URL */

    getHomePrimaryBannerURL() {

        return this.bannerURL + this.primaryURL
    }


    /** Get Secondary Banner URL */

    getHomeSecondaryBannerURL() {

        return this.bannerURL + this.secondaryURL
    }


    getContactFormURL() {
        return this.bannerURL + this.contactURL
    }

getSessionUrl(){
    return this.jiffyServerURL+this.genKeyURL
}

getExpertReportURL(){
    return this.jiffyResearchURL + this.researchReport
}

    getFaqCategoryURL() {
        return this.bannerURL + this.faqCategoryURL
    }

    getFaqfolderURL(id) {


        return this.faqURL + `solutions/categories/${id}/folders`
    }

    getFaqArticleURL(id) {

        return this.faqURL + `solutions/folders/${id}/articles`
    }


    getFableCategoryURL() {
        return this.bannerURL + this.fableCategoryURL
    }
    getFableFolderURL(id) {
        return this.serverURL + `content/posts/?key=280c55197998a010569e5d612a&filter=tag:${id}&limit=3`
    }
    /** faq search API url */
    getFaqSearchURL(pros) {
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
    getCitiesURL() {
        return this.LMSBaseURL + this.getCityURL;
    }

    getStatesURL() {
        return this.LMSBaseURL + this.getStateURL;
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
    getCheckExistenceURL() {
        return this.OnbBaseURL + this.checkExistenceURL;
    }

    getSendOTPNURL(mobileNum) {
        return this.OnbBaseURL + this.sendOTPNURL.replace('$mobileNum', mobileNum);
    }

    getVerifyOTPNURL(otp, id) {
        return this.OnbBaseURL + this.verifyOTPNURL.replace('$otp', otp).replace('$id', id);
    }

    getAddNewLeadURL() {
        return this.OnbBaseURL + this.addNewLeadURL;
    }

    getreferearnURL(id){
        return this.referURL + `/GetUserReferralData?ClientID=${id}`;
    }

    getreferallink(id){
        return this.referURL + `/v1/40a9f5ac41a0f6223825/user/${id}/referral_link`
  }

    getExpertResearchreportURL() {
        return this.JiffyBaseURL + this.getExpertResearchURL;
    }

    getresearchURL(id){
        return this.researchURL + `api/fundamental?report_subtype_uuid=${id}`
    }
    getresearchipoURL(){

        return this.researchURL + 'api/ipo?limit=10&offset=0'
    }

    getperformanceURL() {

        return this.performanceURL +this.performancefontURL;
    }

    getsuccessURL(){

        return this.JiffyBaseURL + this.successURL;
    }

    getresearchDetailURL(uuid){

        return this.researchURL + `api/fundamental/${uuid}`;
    }

}
