import axios from "axios";
import { API_URLS ,clientId } from "./API-URLS";
import utils from "./utils";
import OpenAccountLanguageContent from './OpenAccountLanguageContent';
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
  //common sentOTP function for demat account
  sentOTPService:function(request,captchaToken,hideLoader,setLeadId ,type1,setOTPSessionID,setShowThanku,fetchQueryParams,handleOTPShow,setAPIError,showAPIErrorToaster,dataLayerValues,isActive,isPopupOpen){
    this.sendOTP(request,captchaToken).then((res) => {
      hideLoader('sendOTPLoader');
      if (res && res.StatusCode === 200 ) {
          setLeadId(res.Body.leadid);
        const locationURL = window.location.pathname; 

        if(locationURL.includes('ipo')){
          if(!isPopupOpen && isActive){
            utils.pushDataLayerEvent({
              'event': 'sticky_lead_initiated',
              'page_path': window.location.pathname,
              'page_url': window.location.href,
              'platform': 'mobileweb'
            })
          }else{
            utils.pushDataLayerEvent({
              'event': 'ci_onboard_lead_initiated',
              'page_path': window.location.pathname,
              'page_url': window.location.href,
              'lead_source': 'choiceindia',
              'userId': utils.generateSHA256Hash(request.mobile_number.toString()),
              'leadId': res.Body.leadid,
              'platform': window.innerWidth < 767 ? 'mobileweb' : 'desktopweb'
            })
          }
        }else if(locationURL.includes('blog')){
          if(!isPopupOpen){
            utils.pushDataLayerEvent({
              'event': 'blog_lead_initiated',
              'page_path': window.location.pathname,
              'page_url': window.location.href,
              'platform': utils.isMobileDevice() ? 'mobileweb' : 'desktopweb'
            })
          }
          if(isPopupOpen){
            utils.pushDataLayerEvent({
              'event': 'popup_lead_initiated',
              'page_path': window.location.pathname,
              'page_url': window.location.href,
              'platform': utils.isMobileDevice() ? 'mobileweb' : 'desktopweb'
            })
          }
          if(!isPopupOpen && isActive){
            utils.pushDataLayerEvent({
              'event': 'sticky_lead_initiated',
              'page_path': window.location.pathname,
              'page_url': window.location.href,
              'platform': utils.isMobileDevice() ? 'mobileweb' : 'desktopweb'
            })
          }
        }else if(locationURL.includes('top-funds') || locationURL.includes('amc')){
          utils.pushDataLayerEvent({
            'event': 'mf_lead_initiated',
            'page_path': window.location.pathname,
            'page_url': window.location.href,
            'platform': utils.isMobileDevice() ? 'mobileweb' : 'desktopweb'
          })
        }else{
          switch (locationURL) {

            case '/brokerage-charges' : 
            if(utils.isMobileDevice && dataLayerValues){
              utils.pushDataLayerEvent({
                'event': dataLayerValues || 'offer_section_lead_initiated',
                'page_path': window.location.pathname,
                'page_url': window.location.href,
                'platform': 'mobileweb'
              })
            }else if(utils.isMobileDevice && !dataLayerValues){
              utils.pushDataLayerEvent({
                'event': 'sticky_lead_initiated',
                'page_path': window.location.pathname,
                'page_url': window.location.href,
                'platform': 'mobileweb'
              })
            }
            break;
            
            case '/mutual-funds-investment' : 
            utils.pushDataLayerEvent({
              'event': 'mf_lead_initiated',
              'page_path': window.location.pathname,
              'page_url': window.location.href,
              'platform': window.innerWidth < 767 ? 'mobileweb' : 'desktopweb'
            })
            break;
  
            case '/corporate-demat-account' : 
            if(dataLayerValues){
              utils.pushDataLayerEvent({
                'event': 'corporate_lead_initiated',
                'page_path': window.location.pathname,
                'page_url': window.location.href,
                'platform': utils.isMobileDevice() ? 'mobileweb' : 'desktopweb'
              })
            }else{
              utils.pushDataLayerEvent({
                'event': 'corporate_offer_lead_initiated',
                'page_path': window.location.pathname,
                'page_url': window.location.href,
                'platform': utils.isMobileDevice() ? 'mobileweb' : 'desktopweb'
              })
            }
            break; 

            default: 
            utils.pushDataLayerEvent({
              'event': 'ci_onboard_lead_initiated',
              'page_path': window.location.pathname,
              'page_url': window.location.href,
              'lead_source': 'choiceindia',
              'userId': utils.generateSHA256Hash(request.mobile_number.toString()),
              'leadId': res.Body.leadid,
              'platform': window.innerWidth < 767 ? 'mobileweb' : 'desktopweb'
            })
            break;
          }
        }
          setOTPSessionID((type1 == 'MF') ? res.Body.session_id : res.Body.otp_session_id)
          // setForm('sent-otp')
          // setformdata()
          setShowThanku(prevState => {
              return { ...prevState, showModal: false, page: 'no-addlead', resText: '', isOnboarding: '', isNewLead: res.Body.new_lead ? res.Body.new_lead : false }
          });
          fetchQueryParams();
          // resetOTPPopup();
          handleOTPShow();


      } else {
          setAPIError("Something went wrong, please try again later!gh");
          showAPIErrorToaster();
      }
  }).catch((error) => {
      hideLoader('sendOTPLoader');
      if (error && error.response && error.response.data && error.response.data.Message) {
          setAPIError(error.response.data.Message); 
          showAPIErrorToaster();
      } else {
          setAPIError("Something went wrong, please try again later!");
          showAPIErrorToaster();
      }
  });
  },
  //common verify OTP function for demat account
  verifyOTPService:function(mobileNumber,request,captchaToken,hideLoader,onClose,openInfoPopup,setOTPErrors){
    this.verifyOTP(request, captchaToken).then((res) => {
      hideLoader('verifyLoader');
      if (res && res.data.StatusCode === 200 && res.data.Body) {
          let verifyResponse = res.data.Body;
          const locationURL = window.location.pathname; 
          if(locationURL.includes('top-funds') || locationURL.includes('amc')){
            utils.pushDataLayerEvent({
              'event': 'mf_lead_generated',
              'page_path': window.location.pathname,
              'page_url': window.location.href,
              'platform': utils.isMobileDevice() ? 'mobileweb' : 'desktopweb'
            })
          }else{
            switch(window.location.pathname){
              case '/mutual-funds-investment' : 
                utils.pushDataLayerEvent({
                  'event': 'mf_lead_generated',
                  'page_path': window.location.pathname,
                  'page_url': window.location.href,
                  'mobileNoEnc': utils.generateSHA256Hash(mobileNumber.toString()),
                  'leadId': res.data.Body.leadid,
                  'lead_source': 'choiceindia',
                  'userId': utils.generateSHA256Hash(mobileNumber.toString()),
                  'platform': window.innerWidth < 767 ? 'mobileweb' : 'desktopweb'
                })
              break;
  
              default :
                utils.pushDataLayerEvent({
                  'event': 'ci_onboard_lead_generated',
                  'page_path': window.location.pathname,
                  'page_url': window.location.href,
                  'mobileNoEnc': utils.generateSHA256Hash(mobileNumber.toString()),
                  'leadId': res.data.Body.leadid,
                  'lead_source': 'choiceindia',
                  'userId': utils.generateSHA256Hash(mobileNumber.toString()),
                  'platform': window.innerWidth < 767 ? 'mobileweb' : 'desktopweb'
                })
                break; 
            }
          }
          if(verifyResponse.action_type != 'popup_and_no_update'){
            if (verifyResponse.is_onboard_flag === "C") {
              onClose("https://finx.choiceindia.com/auth/login",verifyResponse.message);
          } else if (verifyResponse.is_onboard_flag === 'N' || verifyResponse.is_onboard_flag === '' || verifyResponse.is_onboard_flag === 'NI') {

              let authCode = verifyResponse.auth_code;
              let request = {
                  "grant_type": "authorization_code",
                  "code": authCode
              };
              this.getSSOToken(request).then((res) => {
                  if (res && res.data.StatusCode == 200) {
                      localStorage.setItem('access_token', res.data.Body.access_token);
                      // console.log("verifyResponse in sso",res)
                      let url = verifyResponse.url + "&accessToken=" + localStorage.getItem('access_token');
                      // console.log("new url", url);
                      // openInfoPopup(res.data.Message);
                      onClose(url,verifyResponse.message);
                  } else {
                      openInfoPopup(res.data.Message);
                      onClose();
                  }
              })

          }
          } else{
            // handleOTPClose(link, msg, info, actionType, leadID)
            onClose(verifyResponse?.url, verifyResponse.message,verifyResponse.message,verifyResponse.action_type,verifyResponse.leadid   )
          }
         
      } else {
          setOTPErrors((res && res.data && res.data.Body && res.data.Body.Message) ? res.data.Body.Message : OpenAccountLanguageContent.getContent(language ? language : 'en', 'otperror'));
      }
  }).catch((error) => {
      hideLoader('verifyLoader');
      if (error && error.response && error.response.data && error.response.data.Message) {
          setOTPErrors(error.response.data.Message);
      } else {
          setOTPErrors(OpenAccountLanguageContent.getContent(language ? language : 'en', 'otperror'));
      }
  });
  },

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
