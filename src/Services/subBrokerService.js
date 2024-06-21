import axios from "axios";
import { API_URLS } from "./API-URLS";
import utils from "./utils";

const apiURL = new API_URLS()
const LMSHeaders = {
  "x-api-key": "IU7YtVUazZxVmxrcjZqajdNZFJTZE5IQlZnMVZYa1I6Y2VESVluYWJqbE4xa0JOMFBkb3hoWHUzb09rUTJKSFc="
};
const OnbHeaders = {
  'content-type': 'application/json',
  'Accept': 'application/json',
  'userId': 'Choiceindia',
  'ticket': 'aW52ZXN0aWNh'
};

const OnbHeaders2 = {
  'content-type': 'application/json',
  'Accept': 'application/json',
  'userId': 'Choiceindia',
  'ticket': 'amlmZnlBcHA=',
  'businessUnit': 'JF',
  'investorId': 1
};

const subBrokerService = {

  getCities: function () {
    let url = apiURL.getCitiesURL();
    return axios.get(url, { headers: LMSHeaders });
  },

  getStates: function () {
    let url = apiURL.getStatesURL();
    return axios.get(url, { headers: LMSHeaders });
  },

  checkExistence: function (request) {
    let url = apiURL.getCheckExistenceURL();
    return axios.post(url, request, { headers: OnbHeaders });
  },

  /**Old send otp for sub broker forms */
  sendOTP: function (request) {
    let url = apiURL.getSubBrokerSendOtpUrl();
    return axios.post(url, request, { headers: OnbHeaders2 });
  },
  
  //Created a common function for Send OTP Service
  sendOTPService:function(request,hideLoader,otpSessionID,resetOTPPopup,handleOTPPopupShow,handleOTPResendSuccessToaster,setOTPErrors,setAPIError,showAPIErrorToaster,isResend){
     this.sendOTPNew(request).then((res) => {
      // console.log(res, "sendOTP");
      hideLoader(isResend ? 'resendOTPLoader' : 'sendOTPLoader');
      if (res && res.data && res.data.Body && res.data.Body.session_id) {

          otpSessionID.current = res.data.Body.session_id;
          // console.log("otpSessionID.current",otpSessionID.current)
          // if (!isResend)
          resetOTPPopup();
          if (!isResend)
              handleOTPPopupShow();
          if (isResend)
              handleOTPResendSuccessToaster();
      } else {
          if (isResend) {
              setOTPErrors((res.data && res.data.message) ? res.data.message : SubBrokerLanguageContent.getContent(props.language ? props.language : 'en', 'otperror2', "Something went wrong, please try again later!"));
          } else {
              setAPIError((res.data && res.data.message) ? res.data.message : "Something went wrong, please try again later!");
              showAPIErrorToaster();
          }
      }
  }).catch((error) => {
    // console.log(error, "sendOTP error");
    hideLoader(isResend ? 'resendOTPLoader' : 'sendOTPLoader');
    if (isResend) {
        if (error && error.response && error.response.data && error.response.data.message) {
            setOTPErrors(error.response.data.message);
        } else {
            setOTPErrors(SubBrokerLanguageContent.getContent(props.language ? props.language : 'en', 'otperror2', "Something went wrong, please try again later!"));
        }
    } else {
        if (error && error.response && error.response.data && error.response.data.message) {
            setAPIError(error.response.data.message);
        } else {
            setAPIError("Something went wrong, please try again later!");
        }
        showAPIErrorToaster();
    }
});
  },
  
  //Created a common function for resendOTP
  resendOTPService:function(isResend,showLoader,hideLoader,otpSessionID,resetOTPPopup,handleOTPResendSuccessToaster,setOTPErrors,SubBrokerLanguageContent,props,brokerMobileNumber){
    showLoader(isResend ? 'resendOTPLoader' : 'sendOTPLoader');
    let request = {
        "mobile_no": brokerMobileNumber,
        "old_session_id": otpSessionID.current ? otpSessionID.current : null
    };

    this.resendOTPNew(request).then((res) => {

        hideLoader(isResend ? 'resendOTPLoader' : 'sendOTPLoader');
        if (res && res.data && res.data.Body && res.data.Body.session_id) {

            otpSessionID.current = res.data.Body.session_id;
            resetOTPPopup();
            if (isResend)
                handleOTPResendSuccessToaster('otp');
        } else {
            if (isResend) {
                setOTPErrors((res.data && res.data.Message) ? res.data.Message : SubBrokerLanguageContent.getContent(props.language ? props.language : 'en', 'otperror2', "Something went wrong, please try again later!"));
            }
        }
    }).catch((error) => {

        hideLoader(isResend ? 'resendOTPLoader' : 'sendOTPLoader');
        if (error && error.response && error.response.data && error.response.data.Message) {
            setOTPErrors(error.response.data.Message);
        } else {
            setOTPErrors(SubBrokerLanguageContent.getContent(props.language ? props.language : 'en', 'otperror2', "Something went wrong, please try again later!"));
        }
    });
  },

  //Created a common function for getOTPOnCallService

  getOTPOnCallService:function(showLoader,brokerMobileNumber,otpSessionID,openAccountService,hideLoader,resetOTPPopup,handleOTPResendSuccessToaster,setOTPErrors){
      // console.log("check")
    showLoader('callOtpLoader2');
    // console.log("old_session_id",otpSessionID.current)
    let request = {
        "mobile_no": brokerMobileNumber,
        "request_source":"CHOICEINDIA",
        "session_id":  otpSessionID.current? otpSessionID.current : null   
    };
    openAccountService.OTPOnCall(request).then((res)=>{
        // console.log("OTPOnCall",res)
        hideLoader('callOtpLoader2');
        if(res && res.data && res.data.Body && res.data.Body.session_id){
            otpSessionID.current = res.data.Body.session_id;
            // console.log("call  OTP otpSessionID",otpSessionID.current)
            resetOTPPopup();
            handleOTPResendSuccessToaster('call');
        }else{
                setOTPErrors((res.data && res.data.Message) ? res.data.Message : SubBrokerLanguageContent.getContent(props.language ? props.language : 'en', 'otperror2', "Something went wrong, please try again later!"));
        }
    }).catch((error) => {
        hideLoader('callOtpLoader2');
                // setCount(30);
                if (error && error.response && error.response.data && error.response.data.Message) {
                    setOTPErrors(error.response.data.Message);
                } else {
                    setOTPErrors("Something went wrong, please try again later!");
                }
    })
  },
 
  //Created verify OTP function for mutual-fund-distributor form
  verifyOTP1:function(otp,setOTPErrors,showLoader,hideLoader,fetchQueryParams,handleOTPPopupClose,handleBrokerCreatedSuccessShow,resetBrokerForm,setShowThanku,otpSessionID,closeModal){
    if (!otp.length) {
      setOTPErrors(SubBrokerLanguageContent.getContent(props.language ? props.language : 'en', 'otperror1', 'OTP is required'));
  } else {
      showLoader('verifyLoader');
      let request = {
          session_id: otpSessionID.current,
          otp: otp
      }
      subBrokerService.verifyOTPNew(request).then((res) => {
          hideLoader('verifyLoader');
          // console.log(res, "verifyOTPN");
          if (res && res.data && res.data.status != 'error') {
              fetchQueryParams();
              // addNewLead();
              handleOTPPopupClose();
              handleBrokerCreatedSuccessShow();
              resetBrokerForm();
              setShowThanku(prevState => {
                  return { ...prevState, showModal: true, resText: res.data.Message ? res.data.Message : 'Lead added successfully', closeMd: closeModal }
              });
          } else {
              setOTPErrors((res.data && res.data.message) ? res.data.message : SubBrokerLanguageContent.getContent(props.language ? props.language : 'en', 'otperror2', "Something went wrong, please try again later!"));
          }
      }).catch((error) => {
          hideLoader('verifyLoader');
          // console.log(error, "verifyOTPN error");
          setOTPErrors((error.data && error.data.message) ? error.data.message : SubBrokerLanguageContent.getContent(props.language ? props.language : 'en', 'otperror2', "Something went wrong, please try again later!"));
      });
  }
  },

  //Created verify OTP function for sub-broker-franchise form

  verifyOTP2:function(otp,setOTPErrors,showLoader,hideLoader,fetchQueryParams,handleOTPPopupClose,handleBrokerCreatedSuccessShow,resetBrokerForm,setShowThanku,otpSessionID,closeModal){
    if (!otp.length) {
      setOTPErrors(SubBrokerLanguageContent.getContent(props.language ? props.language : 'en', 'otperror1', 'OTP is required'));
  } else {
      showLoader('verifyLoader');
      let request = {
          session_id: otpSessionID.current,
          otp: otp
      }
      subBrokerService.verifyOTPNew(request).then((res) => {
          hideLoader('verifyLoader');
          // console.log(res, "verifyOTPN");
          if (res && res.data && res.data.status != 'error') {
              utils.pushDataLayerEvent({
                  'event': 'sub_broker_leads',
                  'page_path': window.location.pathname,
                  'page_url': window.location.href
              })
              fetchQueryParams();
              /**added these 3 methods which were in addnewlead */
              handleOTPPopupClose();
              handleBrokerCreatedSuccessShow();
              resetBrokerForm();
              setShowThanku(prevState => {
                  return { ...prevState, showModal: true,resText: res.data.Message? res.data.Message: 'Lead added successfully', closeMd: closeModal }
              });
              // addNewLead();
          } else {
              setOTPErrors((res.data && res.data.Message) ? res.data.Message : SubBrokerLanguageContent.getContent(props.language ? props.language : 'en', 'otperror2', "Something went wrong, please try again later!"));
          }
      }).catch((error) => {
          hideLoader('verifyLoader');
          setOTPErrors((error.response.data && error.response.data.Message) ? error.response.data.Message : SubBrokerLanguageContent.getContent(props.language ? props.language : 'en', 'otperror2', "Something went wrong, please try again later!"));
      });
  }
  },

  verifyOTPN: function (request) {
    let url = apiURL.getSubBrokerVerifyOtpUrl();
    return axios.post(url, request, { headers: OnbHeaders2 });
  },

  addNewLead: function (request) {
    let url = apiURL.getAddNewLeadURL();
    return axios.post(url, request, { headers: OnbHeaders });
  },

  /**New send otp for sub broker forms */
  sendOTPNew: function (request) {
    let url = apiURL.getSubBrokerNewSendOtpUrl();
    return axios.post(url, request, { headers: OnbHeaders2 });
  },

  /**New resend otp for sub broker forms */
  resendOTPNew: function (request) {
    let url = apiURL.getSubBrokerNewResendOtpURL();
    return axios.post(url, request, { headers: OnbHeaders2 });
  },

  verifyOTPNew: function (request) {
    let url = apiURL.getSubBrokerNewVerifyOtpURL();
    return axios.post(url, request, { headers: OnbHeaders2 });
  },
};
export default subBrokerService;
