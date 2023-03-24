import axios from "axios";
import { API_URLS } from "./API-URLS";
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

const openAccountService = {

  sendOTP: function (request,type) {
    let url = apiURL.getSendOTPURL();
    return axios.post(url, request, { headers: newheaders })
  },

  resendOTPAgain: function (request,type) {
    let url = apiURL.getResendOTPURL(); 
    return axios.post(url, request, { headers: newheaders })
  },

  OTPOnCall: function (request,type) {
    let url = apiURL.getOTPOnCallURL(); 
    return axios.post(url, request, { headers: newheaders });
  },

  verifyOTP: function (request,type) {
    let url = apiURL.getVerifyOTPURL(); 
     return  axios.post(url, request,{ headers: newheaders } );
  },

  addNewLead: function (request) {
    let url = apiURL.getchoiceIndiaNewLeadURL();
    return axios.post(url,request,headers);
  }

};
export default openAccountService
