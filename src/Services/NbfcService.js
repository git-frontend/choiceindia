


import axios from "axios";
import { API_URLS } from "./API-URLS";
const apiURL = new API_URLS()
// let token ='bfed47dc-84ec-43e8-aecc-81601d0134c1'
const headers = {
  'Accept': 'application.json',
  'Content-Type': 'application/json'
};
const newHeaders = {
  'Accept': '*/*',
  'Content-Type': 'application/json',
    // 'Authorization': `bearer ${token}`
  'Authorization': 'Bearer '+'69102921-3a7b-49cf-bde0-f2c7bb32fa10'

}

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

  nbfcVerifyOTP: function (request) {
    let url =  apiURL.getNbfcVerifyOTP() 
     return  axios.post(url, request,headers);
  },


  nbfcLead: function (request,type) {
    let url =  apiURL.getNbfcLead(type) 
     return  axios.post(url, request,{ headers: newHeaders });
  },




  mobileduplicate: function (id) {
    let url = apiURL.getNbfcMobile(id);
    return axios.get(url);
  }

  

};
export default NbfcService


