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
const formheaders = {
  ssoheaders: {
  "Source": "FINX_WEB",
  "AuthType": "cp",
  "product": "FINX",
  "ServiceCode": "JF",
  "deviceInfo": { "app_name": "Choice Finx", "app_package_name": "com.choiceequitybroking.jiffy", "app_version": "6.0.0.240408(362)", "deviceId": "android_0d86d8b2451b693e", "fcm_token": "chdR9RXlSdmSuIV9tdcooR:APA91bHr17lV_67ZT5wh1o7CinXfS75Mm6LftOxGB8Kk3SJPflidbdU3FNOcZVFeKicCTaMF26Lx65bIJWGmv1iCc7mzE_zBU5LmSQoiOV5RhrcX1AbTYfD9YmidMA-eosC8y3u28XO3", "ipAddress": "152.58.51.121", "model": "Android, vivo, V2246, OsVersion : 14(34)", "platform": "android" }
  }
}

const openAccountService = {

  sendOTP: function (request,token) {
    console.log("token",token)
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

  verifyOTP: function (request,type) {
    let url = apiURL.getVerifyOTPURL(); 
     return  axios.post(url, request,{ headers: formheaders.ssoheaders } );
  },

  addNewLead: function (request) {
    let url = apiURL.getchoiceIndiaNewLeadURL();
    return axios.post(url,request,headers);
  }

};
export default openAccountService
