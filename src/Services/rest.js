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
}
}
export default rest;