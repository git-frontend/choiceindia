import axios from "axios";
import { API_URLS } from "./API-URLS";

const rest = {

    headerConfig: {
        headers: {  'Content-Type': 'application/json',
        'accept': 'application/json'}
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
  }

}
export default rest;