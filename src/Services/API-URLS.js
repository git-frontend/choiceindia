/**Environment Variable */
const environment = true;


/**URL Config */
const config = {
    liveServerURL: "https://choiceindia.com/blog/ghost/api/v3/",
    UATServerURL: "https://choiceindia.com/blog/ghost/api/v3/",
    liveBannerURL: "https://cmsapi.choiceindia.com/",
    UATBannerURL: "https://cmsapi.choiceindia.com/",
    livefaqURL: "https://choicebroking.freshdesk.com/api/v2/",
    UATfaqURL: "https://choicebroking.freshdesk.com/api/v2/",
    UATJiffyResearchURL: "https://researchreportdevapi.choicetechlab.com/api/report/",
    liveJiffyResearchURL: "https://researchreportapi.jiffy.in/api/report/",
    // https://researchreportapi.jiffy.in/api/report/market-insights
    // https://researchreportdevapi.choicetechlab.com/api/report/market-insights
    UATSSOBaseURL: 'https://sso-api.choicetechlab.com/',
    liveSSOBaseURL: 'https://sso-api.choiceindia.com/',
    UATChoiceBaseURL: 'https://choicebroking.choicetechlab.com/',
    liveChoiceBaseURL: 'https://choiceindia.com/'

}


export class API_URLS {

    ChoiceBaseURL = '';
    jiffyResearchURL = "";
    /** SSO Base URL */
    SSOServerURL = '';
    /**Server URL */
    serverURL = "https://choiceindia.com/blog/ghost/api/v3/";

    /** banner URL */
    bannerURL = "https://cmsapi.choiceindia.com/"

    /** faq URL */
    faqURL = "https://choicebroking.freshdesk.com/api/v2/"



    /**Market Insights , fabal URL */

    addMarketInsiteURL = 'content/posts/?key=280c55197998a010569e5d612a';

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





    /** Open Account APIs */

    sendOTPURL = 'sign-up';
    resendOTPURL = 'resend-otp';
    OTPOnCallURL = 'otp-on-call';
    verifyOTPURL = 'verify-otp';

    /** Sub Broker APIs */

    getCityURL = 'index.php/Common_controller/getCityDetails';

    constructor() {
        this.setConfig(environment ? "live" : "UAT")
    }



    /**
        * Set Config
        * @param {*} configKey 
        */
    setConfig(configKey) {
        this.setChoiceServerURL(config[configKey + 'ChoiceBaseURL']);

        this.setSSOServerURL(config[configKey + 'SSOBaseURL']);

        this.setServerURL(config[configKey + 'ServerURL'])

        this.setBannerURL(config[configKey + 'BannerURL'])

        this.setfaqURL(config[configKey + 'faqURL'])
        this.setJiffyResearchURL(config[configKey + 'JiffyResearchURL']);
    }

    setChoiceServerURL = (url) => {
        this.ChoiceBaseURL = url;
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

        return this.serverURL + `content/posts/slug/${id}/?key=280c55197998a010569e5d612a`
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
        return this.ChoiceBaseURL + this.getCityURL;
    }
}
