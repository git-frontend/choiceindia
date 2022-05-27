/**Environment Variable */
const environment = true


/**URL Config */
const config = {
    liveServerURL: "https://choiceindia.com/blog/ghost/api/v3/",
    UATServerURL:"https://choiceindia.com/blog/ghost/api/v3/",
    liveBannerURL: "https://cmsapi.choiceindia.com/",
    UATBannerURL : "https://cmsapi.choiceindia.com/"
    
  
}


export class API_URLS {

  /**Server URL */
  serverURL = "https://choiceindia.com/blog/ghost/api/v3/";

  /** banner URL */
   bannerURL ="https://cmsapi.choiceindia.com/"


  /**Market Insights , fabal URL */
  addMarketInsiteURL = 'content/posts/?key=280c55197998a010569e5d612a';

  /** Primary banner */

    primaryURL='/items/banners?filter[banner_type][_eq]=primary'

  /** Secondary banner */

   secondaryURL='/items/second_banner'




  constructor() {
    this.setConfig(environment ? "live" : "UAT")
}



 /**
     * Set Config
     * @param {*} configKey 
     */
  setConfig(configKey) {
    this.setServerURL(config[configKey + 'ServerURL'])

    this.setBannerURL(config[configKey + 'BannerURL'])
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





/** Get Market Insite and fabal List URL */
getMarketinsiteURL() {
    return this.serverURL + this.addMarketInsiteURL
}

/** Get home Banner URL */
getHomePrimaryBannerURL(){

    return this.bannerURL + this.primaryURL
}


/** Get Secondary Banner URL */
getHomeSecondaryBannerURL(){

    return this.bannerURL + this.secondaryURL
}

}
