import axios from "axios";
import { API_URLS } from "./API-URLS";

const rest = {

  getCryptoNACHKey: function () {
    const crypto = require('crypto');
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

  NACHCancellation: function (request) {
    let api = new API_URLS()
    let url = api.getNACHCancellationURL()
    return axios.post(url, request, {
      headers: {
        'x-api-key': this.getCryptoNACHKey()
      }
    });
}

}
export default rest;