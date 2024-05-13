import axios from "axios";
import { API_URLS ,clientId } from "./API-URLS";
import utils from "./utils";

const apiURL = new API_URLS()
const headers = {
  'Accept': 'application.json',
  'Content-Type': 'application/json'
};

let langtype = (window.location.pathname.indexOf('hindi') > -1) ? 'hi' :(window.location.pathname.indexOf('gujarati') > -1) ? 'gu' :(window.location.pathname.indexOf('marathi') > -1) ? 'mr' :(window.location.pathname.indexOf('telugu') > -1) ? 'te':'en';


const newheaders = {
  
  'Accept': 'application.json',
  'Content-Type': 'application/json',
  'lang': langtype
  

};
const formheaders = {
  ssoheaders: {
  "Source": "CHOICEINDIA",
  "AuthType": "cp",
  "product": "FINX",
  "ServiceCode": "JF",
  "deviceInfo": "{'platform':'Web'}"
  }
}
const tokenheader={
    "Content-Type": "application/json",
    "Source": "CHOICEINDIA",
    "clientId":clientId 

}

const openAccountService = {

  sendOTP: function (request,token) {
    // console.log("token",token)
    let fheaders = formheaders.ssoheaders;
    fheaders['Authorization'] = token;
    // let url = apiURL.getSendOTPURL();
    // return axios.post(url, request, {headers: headers})
    let api = new API_URLS()
        let url = api.getSendOTPURL()
        return axios.post(url,request, {headers: fheaders}).then(({ data }) => {
            return data
        })
  },

  resendOTPAgain: function (request,type) {
    let url = apiURL.getResendOTPURL(); 
    return axios.post(url, request, { headers: newheaders })
  },

  OTPOnCall: function (request,type) {
    let url = apiURL.getOTPOnCallURL(); 
    return axios.post(url, request, { headers: newheaders });
  },

  verifyOTP: function (request,token) {
    let fheaders = formheaders.ssoheaders;
    fheaders['Authorization'] = token;
    let url = apiURL.getVerifyOTPURL(); 
     return  axios.post(url, request,{ headers: formheaders.ssoheaders } );
  },

  addNewLead: function (request) {
    let url = apiURL.getchoiceIndiaNewLeadURL();
    return axios.post(url,request,headers);
  },
  
  getSSOToken: function (request) {
    let url = apiURL.getSSOTokenURL();
    return axios.post(url,request,{ headers: tokenheader });
  }

};
export default openAccountService
