import axios from "axios";
import { API_URLS } from "./API-URLS";

const leadService={

headerConfig: {
    headers: { 'content-type': 'application/json' }
},    

CustomerForm:async function(postdata){
    let api = new API_URLS();
    let url = api.getLeadFormURL();
    return await axios.post(url, postdata, this.headerConfig).then(({ data }) => {
        return data
    })
},

 EPCForm:async function(postdata){
    let api = new API_URLS();
    let url = api.getLeadFormURL();
    return await axios.post(url, postdata, this.headerConfig).then(({ data }) => {
        return data
    })
 },

 OEMForm:async function(postdata){
    let api = new API_URLS();
    let url = api.getLeadFormURL();
    return axios.post(url, postdata, this.headerConfig).then(({ data }) => {
        return data
    })
 }
}

export default leadService;