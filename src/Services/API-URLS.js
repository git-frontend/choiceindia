/**Environment Variable */
const environment = false;


/**URL Config */
const config = {
    liveServerURL: "https://choiceindia.com/blog/ghost/api/v3/",
    UATServerURL: "https://choiceindia.com/blog/ghost/api/v3/",
    liveBannerURL: "https://cmsapi.choiceindia.com/",
    UATBannerURL: "https://cmsapi.choiceindia.com/",
    livefaqURL: "https://choicebroking.freshdesk.com/api/v2/",
    UATfaqURL: "https://choicebroking.freshdesk.com/api/v2/",
    UATJiffyResearchURL: "https://researchreportdevapi.choicetechlab.com/api/report/",
    // https://researchreportapi.jiffy.in/api/report/
    liveJiffyResearchURL: "https://researchreportdevapi.choicetechlab.com/api/report/",
    // https://researchreportapi.jiffy.in/api/report/market-insights
    // https://researchreportdevapi.choicetechlab.com/api/report/market-insights
    UATSSOBaseURL: 'https://sso-api.choicetechlab.com/',
    liveSSOBaseURL: 'https://sso-api.choiceindia.com/',
    UATOnbBaseURL: 'https://uat-pwa.choicetechlab.com/',
    liveOnbBaseURL: 'https://accounts.choiceindia.com/',
    UATLMSBaseURL: 'https://lms-api.choicetechlab.com/',
    liveLMSBaseURL: ' https://accounts.choiceindia.com/lmsapi/',
    livereferURL: "https://uatapi.choicebroking.in/api/middleware",
    UATreferURL: "https://uatapi.choicebroking.in/api/middleware",
    liveresearchURL: "hhttp://researchreportapi.jiffy.in/api/",
    UATresearchURL: "http://researchreportapi.jiffy.in/api/",


    liveJiffyBaseURL: "https://jiffy.choiceindia.com/api/researchreport/v2/",
    UATJiffyBaseURL: " https://research-api-dev.choicetechlab.com/"
}

export class API_URLS {

    JiffyBaseURL = '';
    LMSBaseURL = '';
    OnbBaseURL = '';
    jiffyResearchURL = "";
    /** SSO Base URL */
    SSOServerURL = '';
    /**Server URL */
    serverURL = "https://choiceindia.com/blog/ghost/api/v3/";

    /** banner URL */
    bannerURL = "https://cmsapi.choiceindia.com/"

    /** faq URL */
    faqURL = "https://choicebroking.freshdesk.com/api/v2/"

    /** refer and earn URL */
    referURL = "https://uatapi.choicebroking.in/api/middleware"
    
    /** Research URL */
    researchURL = "https://uatapi.choicebroking.in/api/middleware"

    /**Market Insights , fabal URL */

    addMarketInsiteURL = 'content/posts/?key=280c55197998a010569e5d612a';

    /** fables url  */

    fableCategoryURL = 'items/fables?filter[fable_status][_eq]=publish'

    /**fablestories blog  */
    fablesStoryURL = 'content/posts/?key=280c55197998a010569e5d612a&filter=tag:featured-blog&limit=6';

    /**fables trending blog  */
    fabletrendingURL = 'content/posts/?key=280c55197998a010569e5d612a&filter=tag:trending-blog&limit=6';

    /** fables blogs  */

    fableBlogURL = 'content/posts/{id}/?key=280c55197998a010569e5d612a'

    /** Primary banner */

    primaryURL = '/items/banners?filter[banner_type][_eq]=primary'

    /** Secondary banner */

    secondaryURL = '/items/second_banner'

    /** contact form */

    contactURL = 'contact-us/'

    /** Faq category section */

    faqCategoryURL = '/items/faq_category?filter[faq_status][_eq]=publish'

    /**Market Insights New */

    addMarketInsiteNewURL = 'market-insights?limit=4&offset=0';

    /** refer and earn */
    earnURL = 'v1/40a9f5ac41a0f6223825/stage-user';
   


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
        this.setJiffyServerURL(config[configKey + 'JiffyBaseURL']);
        this.setLMSServerURL(config[configKey + 'LMSBaseURL']);

        this.setOnbServerURL(config[configKey + 'OnbBaseURL']);

        this.setSSOServerURL(config[configKey + 'SSOBaseURL']);

        this.setServerURL(config[configKey + 'ServerURL']);

        this.setBannerURL(config[configKey + 'BannerURL']);

        this.setfaqURL(config[configKey + 'faqURL']);
        this.setJiffyResearchURL(config[configKey + 'JiffyResearchURL']);
        this.setreferURL(config[configKey + 'referURL']);
        this.setresearchURL(config[configKey + 'researchURL']);
    }

    setJiffyServerURL = (url) => {
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
     * Set Banner URL 
     * @param {*} url 
     */
    setBannerURL = (url) => {

        this.bannerURL = url;
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

    getCitiesURL() {
        return this.LMSBaseURL + this.getCityURL;
    }

    getStatesURL() {
        return this.LMSBaseURL + this.getStateURL;
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
        return this.researchURL + `fundamental?report_subtype_uuid=${id}`
    }

}
