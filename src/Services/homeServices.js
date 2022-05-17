import axios from "axios";
import { API_URLS } from "./API-URLS";

 const homeServices = {


    /** get market Insights and fabal */
  marketInsiteFabal: function () {
    let api = new API_URLS()
    let url = api.getMarketinsiteURL()
    return axios.get(url).then((data) => {
      return data
    })
  },


  homePrimaryBanner: function(){
    let api = new API_URLS()
    let url = api.getHomePrimaryBannerURL()
    return axios.get(url).then((data) => {
      return data
    })

  },
  homeSecondaryBanner: function(){
    let api = new API_URLS()
    let url = api.getHomeSecondaryBannerURL()
    return axios.get(url).then((data) => {
      return data
    })

  },
};
export default homeServices