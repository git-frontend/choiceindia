import axios from "axios";
import { API_URLS } from "./API-URLS";
const apiURL = new API_URLS()
const headers = {
  'Accept': 'application.json',
  'Content-Type': 'application/json'
};

const openAccountService = {

  sendOTP: function (request) {
    let url = apiURL.getSendOTPURL();
    return axios.post(url, request, headers);
  },

  resendOTPAgain: function (request) {
    let url = apiURL.getResendOTPURL();
    return axios.post(url, request, headers);
  },

  OTPOnCall: function (request) {
    let url = apiURL.getOTPOnCallURL();
    return axios.post(url, request, headers);
  },

  verifyOTP: function (request) {
    let url = apiURL.getVerifyOTPURL();
    return axios.post(url, request, headers);
  },

  addNewLead: function (request) {
    let url = apiURL.getchoiceIndiaNewLeadURL();
    return axios.post(url,request,headers);
  }

};
export default openAccountService
