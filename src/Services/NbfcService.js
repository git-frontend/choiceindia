


import axios from "axios";
import { API_URLS } from "./API-URLS";
const apiURL = new API_URLS()
const headers = {
  'Accept': 'application.json',
  'Content-Type': 'application/json'
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


