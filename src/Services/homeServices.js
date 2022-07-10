import axios from "axios";
import { API_URLS } from "./API-URLS";

const homeServices = {


  /** get market Insights and fabal */
  marketInsite: function () {
    let api = new API_URLS()
    let url = api.getMarketinsiteURL()
    return axios.get(url).then((data) => {
      return data
    })
  },


  fablesBlog: function (id) {

    let api = new API_URLS()
    let url = api.getFableblogURL(id)
    return axios.get(url).then((data) => {

      return data

    })
  },

  /** fabal story lists */
  fabalStory: function () {
    let api = new API_URLS()
    let url = api.getFableStoryURL()
    return axios.get(url).then((data) => {
      return data
    })
  },




  homePrimaryBanner: function () {
    let api = new API_URLS()
    let url = api.getHomePrimaryBannerURL()
    return axios.get(url).then((data) => {
      return data
    })

  },
  homeSecondaryBanner: function () {
    let api = new API_URLS()
    let url = api.getHomeSecondaryBannerURL()
    return axios.get(url).then((data) => {
      return data
    })

  },

  /** get market Insights and fabal */
  marketInsiteNew: function (payload) {
    let api = new API_URLS()
    let url = api.getMarketinsiteNewURL()
    return axios.get(url, {
      headers: {
        'x-api-key': 'B62664943BAA286B21C66BA9A614D'
      }
    }).then((data) => {
      return data;
    })
  },
};
export default homeServices
