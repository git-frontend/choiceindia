import axios from "axios";
import { API_URLS } from "./API-URLS";

const rest = {

  getCryptoNACHKey: function () {
    const currentDate = new Date().toISOString().slice(0, 10).replace(/-/g, "");
    const secretKey = "NEESISHKRUTRI";
    const data = currentDate + secretKey;
    var SHA256 = require("crypto-js/sha256");
    const apiKey = SHA256(data);
    return apiKey;
  },

  headerConfig: {
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json'
    }
  },

  expertReportData: function (postdata) {

    let api = new API_URLS()
    let url = api.fetchResearchReportURL()
    // console.log("url",url)
    return axios.post(url, postdata, this.headerConfig).then(({ data }) => {
      // console.log("datas",data)
      return data
    })
  },


  signalReportData: function (postdata) {

    let api = new API_URLS()
    let url = api.fetchSignalReportURL()
    //  console.log("url",url)
    return axios.post(url, postdata, this.headerConfig).then(({ data }) => {
      //   console.log("datas",data)
      return data
    })
  },
  multipleTokensURLData: function (postdata) {

    let api = new API_URLS()
    let url = api.getMultipletokens()
    //  console.log("url",url)
    return axios.post(url, postdata, this.headerConfig).then(({ data }) => {
      //    console.log("datas",data)
      return data
    })
  },

  getUserId() {
    let userId = this.storage.retrieve('userId');
    if (userId) {
      userId = this.decryptText(userId)
    }
    return userId || '';
  },


  IpAddress: function () {
    let api = new API_URLS()
    let url = api.getIpaddressURL()
    return axios.get(url).then(({ data }) => {
      return data
    })
  },

  NACHCancellation: function (request) {
    let api = new API_URLS()
    let url = api.getNACHCancellationURL()
    let ipAddress = request.ip
    return axios.post(url, request, {
      headers: {
        'x-api-key': 'B62664943BAA286B21C66BA9A614D',
        'Content-Type': 'application/json;charset=UTF-8',
        'Accept':'application/json',
        'ip': ipAddress

      }
    });
  },
  EventDetails: function (postdata) {

    let api = new API_URLS()
    let url = api.getEventDetails()
    // console.log("url",url)
    return axios.post(url, postdata, this.headerConfig).then(({ data }) => {
      //  console.log("event details",data)
      return data
    })
  },
  getSearchData: function (postdata) {

    let api = new API_URLS()
    let url = api.getSearchURL()
    //  console.log("url",url)
    return axios.post(url, postdata, this.headerConfig).then(({ data }) => {
      return data
    })
  },
  getScripDetails: function (postdata) {

    let api = new API_URLS()
    let url = api.getScripDetURL()
    //  console.log("url",url)
    return axios.post(url, postdata, this.headerConfig).then(({ data }) => {
      //  console.log("datads",data)
      return data
    })
  },
  getScripBrokerageURL: function (postdata) {

    let api = new API_URLS()
    let url = api.getScripBrokerageURL()
    //  console.log("url",url)
    return axios.post(url, postdata, this.headerConfig).then(({ data }) => {
      //  console.log("datads",data)
      return data
    })
  },
  getOISpurtsData: function (postdata) {

    let api = new API_URLS()
    let url = api.getOISpurtsURL()
    //  console.log("url",url)
    return axios.post(url, postdata, this.headerConfig).then(({ data }) => {
      //  console.log("getOISpurtsURL",data)
      return data
    })
  },
  getMarginCalculatorData: function (segmentId, token_qty) {
    const api = new API_URLS();
    const url = api.getMarginCalculatorURL(segmentId, token_qty);
    const headers = {
      'x-api-key': this.getCryptoNACHKey(),
      'Content-Type': 'application/json;charset=UTF-8',
      'Accept': '*/*',
      'ip': ipAddress,
    };

    return axios.get(url, { headers }) 
      .then(({ data }) => {
        return data;
      })
      .catch((error) => {
        console.error('Error fetching margin calculator data:', error);
        throw error;
      });
  },


}
export default rest;