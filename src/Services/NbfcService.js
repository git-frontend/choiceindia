


import axios from "axios";
import { API_URLS } from "./API-URLS";
const apiURL = new API_URLS()



const headers = {
  'Accept': 'application.json',
  'Content-Type': 'application/json'
};

const liveauthHeaders = {
  'accept': '*/*',
  'Source': 'choice',
  // "Username":"dc1b5058275941149e3457b73ae4b17a",
  // "Password":"99c0259a-ed0c-401d-a786-603a842ea64e",
  //  'Authorization':"Basic ZGMxYjUwNTgyNzU5NDExNDllMzQ1N2I3M2FlNGIxN2E6OTljMDI1OWEtZWQwYy00MDFkLWE3ODYtNjAzYTg0MmVhNjRl",
 
  'Authorization': 'Basic '+ btoa('f58dea3d3aa449109b167e3a4c28e238' + ":" + '83a54391-5f17-4948-bf5d-99d55bfa183b'),
}
const devauthHeaders = {
  'accept': '*/*',
  'Source': 'choice',
  // "Username":"dc1b5058275941149e3457b73ae4b17a",
  // "Password":"99c0259a-ed0c-401d-a786-603a842ea64e",
  //  'Authorization':"Basic ZGMxYjUwNTgyNzU5NDExNDllMzQ1N2I3M2FlNGIxN2E6OTljMDI1OWEtZWQwYy00MDFkLWE3ODYtNjAzYTg0MmVhNjRl",
 
  'Authorization': 'Basic '+ btoa('dc1b5058275941149e3457b73ae4b17a' + ":" + ' 99c0259a-ed0c-401d-a786-603a842ea64e '),
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


  nbfcLead: function (request,type,authtoken) {
    const newHeaders = {
      'accept': '*/*',
      'Content-Type': 'application/json',
        // 'Authorization': `bearer ${token}`
      'Authorization': 'Bearer '+ authtoken
     
    
    }
    let url =  apiURL.getNbfcLead(type) 
     return  axios.post(url, request,{ headers: newHeaders });
  },




  mobileduplicate: function (id) {
    let url = apiURL.getNbfcMobile(id);
    return axios.get(url);
  },

  authorization : function (){
    let url = apiURL.getNbfcAuthorization();
    if(url=="https://api-prod.synofin.tech/oauth/authorization"){
      return axios.post(url,"",{ headers: liveauthHeaders});
    }
    else{
      return axios.post(url,"",{ headers: devauthHeaders});
    }
    
  }

  

};
export default NbfcService


