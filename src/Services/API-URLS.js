/**Environment Variable */
const environment = false


/**URL Config */
const config = {
    liveServerURL: "https://choiceindia.com/blog/ghost/api/v3/",
    UATServerURL:"https://choiceindia.com/blog/ghost/api/v3/",
    liveBannerURL: "https://cmsapi.choiceindia.com/",
    UATBannerURL : "https://cmsapi.choiceindia.com/",
    livefaqURL: "https://choicebroking.freshdesk.com/api/v2/",
    UATfaqURL: "https://choicebroking.freshdesk.com/api/v2/",
    UATSSOBaseURL: 'https://sso-api.choicetechlab.com/',
    liveSSOBaseURL: 'https://sso-api.choiceindia.com/'
  
}


export class API_URLS {

  /** SSO Base URL */
  SSOServerURL = '';

  /**Server URL */
  serverURL = "https://choiceindia.com/blog/ghost/api/v3/";

  /** banner URL */
   bannerURL ="https://cmsapi.choiceindia.com/"

   /** faq URL */
   faqURL="https://choicebroking.freshdesk.com/api/v2/"



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

   /** Faq category section */

   faqCategoryURL='solutions/categories'

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
    
    this.setBannerURL(config[configKey + 'BannerURL'])

    this.setfaqURL(config[configKey + 'faqURL'])
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

getFableblogURL(id){

    return this.serverURL + `content/posts/${id}/?key=280c55197998a010569e5d612a`
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

getFaqCategoryURL(){
    return this.faqURL + this.faqCategoryURL
}

getFaqfolderURL(id){
   
    
    return this.faqURL + `solutions/categories/${id}/folders`
}

getFaqArticleURL(id){

    return this.faqURL + `solutions/folders/${id}/articles`
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


}
