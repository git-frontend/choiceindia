import axios from "axios";
import { API_URLS } from "./API-URLS";

const leadService={

headerConfig: {
    headers: { 'content-type': 'application/json' }
},  



CustomerForm:async function(postdata,ipAddress,key){
    let api = new API_URLS();
    let url = api.getLeadFormURL();
    return await axios.post(url, postdata, {
        headers: {
          'x-api-key': key,
          'Content-Type': 'application/json;charset=UTF-8',
          'Accept': 'application/json',
          'ip': ipAddress
  
        }
      }).then(({ data }) => {
        return data
    })
},

 EPCForm:async function(postdata,ipAddress,key){
    let api = new API_URLS();
    let url = api.getLeadFormURL();
    return await axios.post(url, postdata, {
        headers: {
          'x-api-key': key,
          'Content-Type': 'application/json;charset=UTF-8',
          'Accept': 'application/json',
          'ip': ipAddress
  
        }
      }).then(({ data }) => {
        return data
    })
 },

 OEMForm:async function(postdata,ipAddress,key){
    let api = new API_URLS();
    let url = api.getLeadFormURL();
    return axios.post(url, postdata, {
        headers: {
          'x-api-key': key,
          'Content-Type': 'application/json;charset=UTF-8',
          'Accept': 'application/json',
          'ip': ipAddress
  
        }
      }).then(({ data }) => {
        return data
    })
 }
}

export default leadService;