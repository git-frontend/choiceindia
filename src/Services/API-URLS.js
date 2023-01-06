/**Environment Variable */
const environment = true;


/**URL Config */
const config = {
    liveServerURL: "https://choiceindia.com/fables/ghost/api/v3/",
    UATServerURL: "https://choiceindia.com/fables/ghost/api/v3/",
    liveBannerURL: "https://cmsapi.choiceindia.com/",
    UATBannerURL: "https://cmsapi.choiceindia.com/",
    liveFileURL: "https://cms.jiffy.in/",
    UATFileURL:"https://cms.jiffy.in/",

    UATJiffyServerURL: "https://uat.jiffy.in/",
    liveJiffyServerURL: "https://finx.choiceindia.com/",

    UATJiffyURL: "http://devjiffy.choicebroking.in/",
    liveJiffyURL: "https://finx.choiceindia.com/",

    livefaqURL: "https://choicebroking.freshdesk.com/api/v2/",
    UATfaqURL: "https://choicebroking.freshdesk.com/api/v2/",
    UATJiffyResearchURL: "https://researchreportdevapi.choicetechlab.com/api/report/",
    UATNewResearchReportURL: "https://research-api-dev.choicetechlab.com/api",
    liveJiffyResearchURL: "https://researchreportapi.jiffy.in/api/report/",
    liveNewResearchReportURL: "https://finx.choiceindia.com/api/researchreport/v2/api",
    UATSSOBaseURL: 'https://sso-api.choicetechlab.com/',
    liveSSOBaseURL: 'https://sso-api.choiceindia.com/',
    UATOnbBaseURL: 'https://uat-pwa.choicetechlab.com/',
    liveOnbBaseURL: 'https://accounts.choiceindia.com/',
    UATLMSBaseURL: 'https://lms-api.choicetechlab.com/',
    liveLMSBaseURL: ' https://accounts.choiceindia.com/lmsapi/',
    livereferURL: "https://finx.choiceindia.com/api/middleware/",
    UATreferURL: "https://uatapi.choicebroking.in/api/middleware",
    liveresearchURL: "https://researchreportapi.jiffy.in/",
    UATresearchURL: "https://researchreportdevapi.choicetechlab.com/",
    liveperformanceURL: "https://finx.choiceindia.com/api/",
    UATperformanceURL: "https://uat.jiffy.in/api/",
    liveJiffyBaseURL: "https://finx.choiceindia.com/api/researchreport/v2/",
    UATJiffyBaseURL: " https://research-api-dev.choicetechlab.com/",
    UATnbfcBaseURL: "https://choice-dev.synofin.tech/api/od/od-application-creation/",
    livenbfcBaseURL:" https://api-prod.synofin.tech/od/od-application-creation/",
}

export class API_URLS {
    newResearchReportURL = 'https://finx.choiceindia.com/api/researchreport/v2/api';
    JiffyBaseURL = '';
    LMSBaseURL = '';
    OnbBaseURL = '';
    jiffyResearchURL = "";
    /** SSO Base URL */
    SSOServerURL = '';
    /**File Download Base URL*/
    FileURL='';

    /**Server URL */
    serverURL = "https://choiceindia.com/fables/ghost/api/v3/";
    /**Server URL */
    jiffyURL = "devjiffy.choicebroking.in";
    jiffyExpertPageURL = "research-report/research/experts/EQ/all/"
    jiffyFundamentalPageURL = "research-report/research/fundamental/EQ/all/"
    jiffySignalPageURL = "research-report/research/signals/EQ/all/"
    /** banner URL */
    bannerURL = "https://cmsapi.choiceindia.com/"
    /** NBFC URL */
    nbfcBaseURL = '';

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

    contactURL = 'contact-us/send-email'
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

    performancefontURL = 'techanalysis/getcounters';

    // multiple tokens url

    multipletokensURL='cm/ProfileMkt/MultipleTouchlineV2';
    /** performance Success ratio */

    successURL = 'api/success-ratio';


    /** add new lead APIs */
    sendNewLeadURL = 'add-new-lead-v2';

    /** Open Account APIs */
    sendInvesOTPURL='investica-signup';
    verifyInvesOTPURL='investica-verifyotp';
    OTPInvesOnCallURL='call-for-otp';
    resendInvesOTPURL='investica-resendotp'
    sendOTPURL = 'sign-up';
    resendOTPURL = 'resend-otp';
    nbfcResendOTPURL = 'api/resend-otp';
    OTPOnCallURL = 'otp-on-call';
    verifyOTPURL = 'verify-otp';
    nbfcverifyOTPURL = 'api/verify-otp';
  /** pdf API */
  
//   newsURL='items/news?filter[status][_eq]=published&limit=1000&sort[]=-id';
  newsURL='items/news?filter[status][_eq]=published&sort[]=-news_dates&limit=1000';
  noticeURL ='items/notices?filter[status][_eq]=published&filter[type][_eq]=description&limit=1000&sort[]=id';
  noticeRightURL = 'items/notices?filter[status][_eq]=published&filter[type][_eq]=right_issues&limit=1000&sort[]=id';
  corporateURL='items/corporate_governance?filter[status][_eq]=published&filter[title][_eq]=policies&limit=1000&sort[]=id';
  corporatecommiteeURL='items/corporate_governance?filter[status][_eq]=published&filter[title][_eq]=committee&limit=1000&sort[]=id';
  shareholdingURL='items/share_holding_pattern?filter[status][_eq]=published&limit=1000&sort[]=id';
  transactionURL='items/related_party_transaction?filter[status][_eq]=Published&limit=1000&sort[]=id';
  closureURL='items/closure_trading_window?filter[status][_eq]=Published&limit=1000&sort[]=id';
  investorURL='items/investor_presentation?filter[status][_eq]=Published&limit=1000&sort[]=id';
  votingresultURL='items/voting_Results?filter[status][_eq]=published&limit=1000&sort[]=id';
  financeURL='items/financial_info?filter[status][_eq]=published&limit=1000&sort[]=id';
  annualURL='items/annual_report?filter[status][_eq]=published&filter[tital][_eq]=description_1&limit=1000&sort[]=id';
  annual2URL='items/annual_report?filter[status][_eq]=published&filter[tital][_eq]=description_2&limit=1000&sort[]=id';
  factsheetURL='items/fact_sheet?filter[status][_eq]=published&limit=1000&sort[]=id';
  investorawareURL ='items/investor_awareness?limit=1000&sort[]=id';
  cebplURL='items/cebpl_policies?limit=1000&sort[]=id';
  filedownloadURL ='api/get-download-listing?limit=1000&sort[]=id';
  investorStockURL ='items/investor_charter?limit=1000&sort[]=id&filter[type][_eq]';
/** contact us city detail */
    contactCityURL='items/branch_details?filter[status][_eq]=published&limit=1000';
    cfplURL='items/NBFC?limit=100&sort[]=id';
    /** Department */
    departmentURL='items/department';
    /** Sub Department  */
    subdepartmentURL = 'items/sub_department?filter[department_id][_eq]=1'
    /** Offer Document */
    offerUrl='items/OfferDocument'
    /** escalation matrix */
    escalation ='items/investor_grievance?filter[status][_eq]=active&limit=1000&sort[]=id'





    /** Sub Broker APIs */
    // ?is_refresh=Y
    getCityURL = 'city/list';
    getStateURL = 'state/list?is_refresh=Y';
    checkExistenceURL = 'leadManagement/leadMapping/checkUniqueRealT';
    sendOTPNURL = 'api/onboard/sendOTPNewOnboard?mobileNum=$mobileNum';
    verifyOTPNURL = 'api/onboard/verifyOTPNewOnboard?otp=$otp&id=$id';
    addNewLeadURL = 'leadManagement/leadMapping/addNewLead';

    getExpertResearchURL = 'api/research-report-new';
    subBrokerSendOtpURL = 'https://neuron.choicebroking.in/api/jiffy/generate-otp';
    subBrokerVerifyOtpURL = 'https://neuron.choicebroking.in/api/jiffy/verify-otp';
    nbfcRegister='api/register';
    nbfcLogin ='api/login';

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
        this.setFileURL(config[configKey + 'FileURL']);

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
        this.setnbfcBaseURL(config[configKey + 'nbfcBaseURL']);
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

    setFileURL =(url)=> {
        this.FileURL = url;
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
     * Set NBFC URL 
     * @param {*} url 
     */
     setnbfcBaseURL = (url) => {

        this.nbfcBaseURL = url;
    }

     /**
     * Set Banner URL 
     * @param {*} url 
     */
      setBannerURL = (url) => {

        this.bannerURL = url;
    }


    getExpertDetailURL = (id) => {
        return this.jiffyURL + this.jiffyExpertPageURL + id
    }


    getFundamentalDetailURL = (id) => {
        return this.jiffyURL + this.jiffyFundamentalPageURL + id
    }

    getSignalDetailURL = (id) => {
        return this.jiffyURL + this.jiffySignalPageURL + id
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

    getSessionUrl() {
        return this.jiffyServerURL + this.genKeyURL
    }

    getExpertReportURL() {
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
        return this.serverURL + `content/posts/?key=280c55197998a010569e5d612a&filter=tag:${id}`
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

    getOTPOnCallURL() {
        return this.SSOServerURL + this.OTPOnCallURL;
    }

    getResendOTPURL() {
        return this.SSOServerURL + this.resendOTPURL;
    }

    getVerifyOTPURL() {
        return this.SSOServerURL + this.verifyOTPURL;
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
        return this.socketLogonRequest
    }
    getCitiesURL() {
        return this.LMSBaseURL + this.getCityURL;
    }

    getStatesURL() {
        return this.LMSBaseURL + this.getStateURL;
    }

    /**Header Request */
    getHeaderRequestURL() {
        return this.socketHeaderRequest
    }

    /**Socket Pause Resume Request */
    getPauseResumeRequestURL() {
        return this.pauseResumeRequest
    }

    getMultitouchlineRequestURL() {
        return this.socketMultiTouchlineRequest
    }

    /**Keep Alive Request */
    getKeepAliveRequestURL() {
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

    getreferearnURL(id) {
        return this.referURL + `/GetUserReferralData?ClientID=${id}`;
    }

    getreferallink(id) {
        return this.referURL + `/v1/40a9f5ac41a0f6223825/user/${id}/referral_link`
    }

    getExpertResearchreportURL() {
        return this.JiffyBaseURL + this.getExpertResearchURL;
    }

    getresearchURL(id) {
        return this.researchURL + `api/fundamental?report_subtype_uuid=${id}`
    }
    getresearchipoURL() {
        // this.researchURL
        return this.researchURL + 'api/ipo?offset=0'
    }

    getperformanceURL() {

        return this.performanceURL + this.performancefontURL;
    }
    getMultipletokens(){
        return this.performanceURL + this.multipletokensURL;
    }

    getsuccessURL() {

        return this.JiffyBaseURL + this.successURL;
    }

    getresearchDetailURL(uuid,report_category) {

        return this.researchURL + `api/${report_category}/${uuid}`;
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

    getNewsUrl(){
        return this.bannerURL + this.newsURL
    }

    getNoticesUrl(){
        return this.bannerURL + this.noticeURL
    }

    getNoticesUrlR(){
        return this.bannerURL + this.noticeRightURL
    }
    getcorporateURL(){
        return this.bannerURL + this.corporateURL
    }
    getcorporatecommiteeURL(){
        return this.bannerURL + this.corporatecommiteeURL

    }
    getShareholdingURL(){
        return this.bannerURL + this.shareholdingURL
    }

    getTransactionURL(){
        return this.bannerURL + this.transactionURL
    }
    getClosureTradingURL(){
        return this.bannerURL + this.closureURL
    }
    getInvestorURL(){
        return this.bannerURL + this.investorURL
    }

    getVotingResultURL(){
        return this.bannerURL + this.votingresultURL
    }

    getFinancialURL(){
        return this.bannerURL + this.financeURL
    }
    getAnnualReportURL(){
        return this.bannerURL + this.annualURL
    }

    getAnnualReport2URL(){
        return this.bannerURL + this.annual2URL

    }

    getFactSheetURL(){
        return this.bannerURL + this.factsheetURL
    }

    getMarginURL(){
        return this.FileURL + this.filedownloadURL
    }
    getInvestorAwareURL(){
        return this.bannerURL + this.investorawareURL
    }
    getCebplPolicyURL(){
        return this.bannerURL + this.cebplURL
    }

    getInvestorStockURL(id){
        return this.bannerURL + this.investorStockURL + `=${id}`
    }

    getcontactCityURL(){
        return this.bannerURL + this.contactCityURL
    }
    getCfplPolicyURL(){
        return this.bannerURL + this.cfplURL
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

    getNbfcLead(subProduct){
        return  this.nbfcBaseURL + `v1/lead/source/${subProduct}`
    }
 getDepartmentURL(){
        return this.bannerURL + this.departmentURL
    }
    getSubDepartmentURL(id){
        return this.bannerURL + `items/sub_department?filter[department_id][_eq]=${id}`
    }
    getOfferDocumnetURL(){
        return this.bannerURL + this.offerUrl
    }

    getEscalationURL(){
        return this.bannerURL + this.escalation
    }
    

}
