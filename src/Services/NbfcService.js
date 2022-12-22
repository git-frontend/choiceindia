


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

const NbfcService = {

  register: function (request) {
    let url = apiURL.getNbfcRegister();
    return  axios.post(url, request,headers)
  },

  login: function (request) {
    let url = apiURL.getNbfcLogin();
    return  axios.post(url, request,headers)
  },

  resend: function (request) {
    let url =  apiURL.getNbfcResendOTPURL(); 
    return  axios.post(url, request,headers);
  },

  nbfcVerifyOTP: function (request,type) {
    let url =  apiURL.getNbfcVerifyOTP() 
     return  axios.post(url, request,headers);
  },




  mobileduplicate: function (id) {
    let url = apiURL.getNbfcMobile(id);
    return axios.get(url);
  }

  

};
export default NbfcService


