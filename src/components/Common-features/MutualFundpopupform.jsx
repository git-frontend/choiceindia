


import './Subbrokerpopupform.scss';
import React, { useEffect, useState, useRef, useCallback  } from "react";
import { useSearchParams } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import OTPimage from '../../assets/images/otp.svg';
import Select from 'react-dropdown-select';
import { Link } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';
// import SubBrokerLanguageContent from '../../Services/SubBrokerLanguageContent';
import subBrokerService from '../../Services/subBrokerService';
import Thankyoupopup from './Thanku-popup';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import openAccountService from "../../Services/openAccountService";




function MutualFundpopupform({hideComponent, openInfoPopup, })  {
// props.language=props?props:'en'
const nameRegex = /^(?!.*[\s]{2,})(?!.*[\.]{2,})(?!.*[\']{2,})(?!.*[\-]{2,})(?=.{2,}$)(([A-Za-z\.\'\- ])\2?(?!\2))+$/;
const mobileRegex = /^(6|9|8|7)([0-9]{9})$/i;
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})$/;
const [brokerName, setBrokerName] = useState('');
const [brokerMobileNumber, setBrokerMobileNumber] = useState('');
const [brokerEmail, setBrokerEmail] = useState('');
// const [brokerCityBranch, setBrokerCityBranch] = useState('');
// const [brokerState, setBrokerState] = useState('');
// const [showState, setShowState] = useState(false);
const [errors, setErrors] = useState({ 'brokerName': {}, 'brokerMobileNumber': {}, 'brokerEmail': {} });
const [show, setShow] = useState(true);
const [showTermsCondition, setShowTermsCondition] = useState(false);
const [loaders, setLoaders] = useState({});
const [showOTPPopup, setShowOTPPopup] = useState(false);
const [APIError, setAPIError] = useState('');
const [showErrorToaster, setShowErrorToaster] = useState(false);
// const [citiesDropdown, setCitiesDropdown] = useState([]);
// const [statesDropdown, setStatesDropdown] = useState([]);
const [otp, setOtp] = useState('');
const [OTPErrors, setOTPErrors] = useState('');
const [count, setCount] = useState(0);
const [OTPSendSuccessToaster, setOTPSendSuccessToaster] = useState(false);
const [brokerCreatedSuccess, setBrokerCreatedSuccess] = useState(false);
const [searchParams, setSearchParams] = useSearchParams();
const [showOpenAccountPopup, setShowOpenAccountPopup] = useState(false);
const [fablesDetailTitleId, setFablesDetailTitleId] = useState(true);
const { executeRecaptcha } = useGoogleReCaptcha();
const [captchaToken, setCaptchaToken] = useState('');
var otpSessionID = useRef('');
var UTMCampaign = useRef('');
var UTMMedium = useRef('');
var UTMSource = useRef('');
var refercode = useRef('');
var UTMTerm = useRef('');
var UTMCustom = useRef('');
var UTMContent = useRef('');
const [showOTP, setShowOTP] = useState(false);
const [isCheck, setisCheck] = useState(false);
const [value, setValue] = useState('Details');
const isBlog=(window.location.pathname.indexOf('blog') > -1)? 'yes':'';
/** state to show thankyou popup default */
const [showThanku, setShowThanku] = useState({ showModal: false, page: 'no-addlead', resText: '', isOnboarding: '' });

//regular expression for  Name field
function handleName(e) {
let value = e.target.value.replace(/([^A-z-\s\'\.]*)*/g, "");
setBrokerName(value);
setErrors((prevError) => ({
    ...prevError,
    'brokerName': {}
}));
}
//regular expression for Mobile Number field
function handleMobileNumber(e) {
let value = e.target.value.replace(/\D/g, "");
setBrokerMobileNumber(value);
setErrors((prevError) => ({
    ...prevError,
    'brokerMobileNumber': {}
}));
}

//regular expression for mobile number
function handleEmail(e) {
let value = e.target.value.replace(/[^A-Za-z0-9._%+-@.]*/g, "");
setBrokerEmail(value);
setErrors((prevError) => ({
    ...prevError,
    'brokerEmail': {}
}));
}



// function handleBrokerCityBranch(e) {
// if (e[0]) {
//     let value = e[0].leadCity;
//     setBrokerCityBranch(value);
//     // console.log("cc",brokerCityBranch)
//     setErrors((prevError) => ({
//         ...prevError,
//         'brokerCityBranch': {}
//     }));
//     if (value === 'OTHERS') {
//         setBrokerState('');
//         setShowState(true);
//     } else {
//         setBrokerState('');
//         setShowState(false);
//     }
// }
// }

// function handleBrokerState(e) {
// if (e[0]) {
//     let value = e[0].stateName;
//     setBrokerState(value);
//     setErrors((prevError) => ({
//         ...prevError,
//         'brokerState': {}
//     }));
// }
// }

//To send OTP
function handleSendOTP(e) {
e.preventDefault();
if (errors.brokerMobileNumber.unique || errors.brokerEmail.unique) {
    return;
}
let isBrokerNameValid, isBrokerMobileNumberValid, isBrokerEmailValid = false;
//brokerName Validation
isBrokerNameValid = validateBrokerName(brokerName, false);
//brokerMobileNumber Validation
isBrokerMobileNumberValid = validateBrokerMobileNumber(brokerMobileNumber, false);
//brokerEmail Validation
isBrokerEmailValid = validateBrokerEmail(brokerEmail, false);

if (isBrokerNameValid && isBrokerMobileNumberValid && isBrokerEmailValid ) {
    // sendOTP(false);
    handleReCaptchaVerify();
}
}

//for validating Name field
function validateBrokerName(brokerName, fromUseEffect) {
let isBrokerNameValid = false;
if (!brokerName.length) {
    if (!fromUseEffect) {
        setErrors((prevError) => ({
            ...prevError,
            'brokerName': { 'required': true }
        }));
    }
} else if (brokerName.length && !nameRegex.test(brokerName)) {
    if (!fromUseEffect) {
        setErrors((prevError) => ({
            ...prevError,
            'brokerName': { 'invalid': true }
        }));
    }
} else if (brokerName.length && nameRegex.test(brokerName)) {
    isBrokerNameValid = true;
}
return isBrokerNameValid;
}

//for validating mobile number field
function validateBrokerMobileNumber(brokerMobileNumber, fromUseEffect) {
let isBrokerMobileNumberValid = false;
if (!brokerMobileNumber.length) {
    if (!fromUseEffect) {
        setErrors((prevError) => ({
            ...prevError,
            'brokerMobileNumber': { 'required': true }
        }));
    }
} else if (brokerMobileNumber.length < 10) {
    if (!fromUseEffect) {
        setErrors((prevError) => ({
            ...prevError,
            'brokerMobileNumber': { 'invalid': true }
        }));
    }
} else if (brokerMobileNumber.length === 10 && !mobileRegex.test(brokerMobileNumber)) {
    if (!fromUseEffect) {
        setErrors((prevError) => ({
            ...prevError,
            'brokerMobileNumber': { 'invalid': true }
        }));
    }
} else if (brokerMobileNumber.length === 10 && mobileRegex.test(brokerMobileNumber)) {
    isBrokerMobileNumberValid = true;
}
return isBrokerMobileNumberValid;
}

////for validating email id  field
function validateBrokerEmail(brokerEmail, fromUseEffect) {
let isBrokerEmailValid = false;
if (!brokerEmail.length) {
    if (!fromUseEffect) {
        setErrors((prevError) => ({
            ...prevError,
            'brokerEmail': { 'required': true }
        }));
    }
} else if (brokerEmail.length && !emailRegex.test(brokerEmail)) {
    if (!fromUseEffect) {
        setErrors((prevError) => ({
            ...prevError,
            'brokerEmail': { 'invalid': true }
        }));
    }
} else if (brokerEmail.length && emailRegex.test(brokerEmail)) {
    isBrokerEmailValid = true;
}
return isBrokerEmailValid;
}

function resetOTPPopup() {
setOtp('');
setOTPErrors('');
setCount(60);
}

//UTM Identifier
function fetchQueryParams() {
UTMCampaign.current = searchParams.get('utm_campaign') || '';
UTMMedium.current = searchParams.get('utm_medium') || '';
UTMSource.current = searchParams.get('utm_source') || '';
UTMTerm.current = searchParams.get('utm_term') || '';
UTMCustom.current = searchParams.get('utm_custom') || '';
UTMContent.current = searchParams.get('utm_content') || '';

refercode.current = (searchParams.get('refercode') && window.atob(searchParams.get('refercode'))) || '';
}

//to show loader
function showLoader(type) {
setLoaders((prevLoaders) => ({
    ...prevLoaders,
    [type]: true
}));
}

//to hide loader
function hideLoader(type) {
setLoaders((prevLoaders) => ({
    ...prevLoaders,
    [type]: false
}));
}

// function fetchCities() {
// showLoader('citiesLoader');
// subBrokerService.getCities().then((res) => {
//     // console.log(res, "res cities");
//     hideLoader('citiesLoader');
//     if (res && res.status === 200 && res.data && res.data.StatusCode === 200 && res.data.Body && res.data.Body.CityMasterList) {
//         setCitiesDropdown(res.data.Body.CityMasterList);
//     } else {
//         setCitiesDropdown([]);
//     }
// }).catch((error) => {
//     // console.log(error, "error cities");
//     hideLoader('citiesLoader');
//     setCitiesDropdown([]);
// });
// }

// function fetchState() {
// showLoader('stateLoader');
// subBrokerService.getStates().then((res) => {
//     // console.log(res, "res states");
//     hideLoader('stateLoader');
//     if (res && res.status === 200 && res.data && res.data.StatusCode === 200 && res.data.Body && res.data.Body.StateMasterList) {
//         setStatesDropdown(res.data.Body.StateMasterList);
//     } else {
//         setStatesDropdown([]);
//     }
// }).catch((error) => {
//     // console.log(error, "error states");
//     hideLoader('stateLoader');
//     setStatesDropdown([]);
// });
// }
const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) {
        return;
    }
    showLoader('sendOTPLoader');
    const token = await executeRecaptcha('sendOTP');
    // Do whatever you want with the token
    // sendOTP();
    if (token) {
        setCaptchaToken(token);
        // alert("Token : "+token);
    }
    hideLoader('sendOTPLoader');
}, [executeRecaptcha]);
useEffect(() => {
    if (captchaToken) {
        sendOTP();
    }
}, [captchaToken]);
useEffect(() => {
fetchQueryParams();
}, []);

// useEffect(() => {
// fetchCities();
// }, []);

// useEffect(() => {
// if (showState) {
//     fetchState();
// }
// }, [showState]);

// useEffect(() => {
// const delayDebounceFn = setTimeout(() => {
//     let isBrokerNameValid = validateBrokerName(brokerName, true);
//     let isBrokerMobileNumberValid = validateBrokerMobileNumber(brokerMobileNumber, true);
//     let isBrokerEmailValid = validateBrokerEmail(brokerEmail, true);
//     if (isBrokerNameValid) {
//         // console.log(brokerName, "brokerName");
//         checkExistence('Name');
//         // Send Axios request here
//     }
// }, 300)
// return () => clearTimeout(delayDebounceFn)
// }, [brokerName]);

// useEffect(() => {
// const delayDebounceFn = setTimeout(() => {
//     let isBrokerNameValid = validateBrokerName(brokerName, true);
//     let isBrokerMobileNumberValid = validateBrokerMobileNumber(brokerMobileNumber, true);
//     let isBrokerEmailValid = validateBrokerEmail(brokerEmail, true);
//     if (isBrokerMobileNumberValid) {
//         // console.log(brokerMobileNumber, "brokerMobileNumber");
//         checkExistence('Mobile Number');
//         // Send Axios request here
//     }
// }, 300)
// return () => clearTimeout(delayDebounceFn)
// }, [brokerMobileNumber]);

// useEffect(() => {
// const delayDebounceFn = setTimeout(() => {
//     let isBrokerNameValid = validateBrokerName(brokerName, true);
//     let isBrokerMobileNumberValid = validateBrokerMobileNumber(brokerMobileNumber, true);
//     let isBrokerEmailValid = validateBrokerEmail(brokerEmail, true);
//     if (isBrokerEmailValid) {
//         // console.log(brokerEmail, "brokerEmail");
//         checkExistence('Email');
//         // Send Axios request here
//     }
// }, 300);
// return () => clearTimeout(delayDebounceFn)
// }, [brokerEmail]);

useEffect(() => {
checkWebOTP();
}, [loaders.resendOTPLoader || loaders.sendOTPLoader]);


// for Mobile web OTP
function checkWebOTP() {
if ('OTPCredential' in window) {
    const input = document.getElementById('subBrokerOTP');
    if (!input) return;
    const ac = new AbortController();
    navigator.credentials.get({
        otp: { transport: ['sms'] },
        signal: ac.signal
    }).then(otp => {
        setOtp(otp.code);
    }).catch(err => {
        // console.log(err);
    });
}
}

//for checking Existance of user
function checkExistence(value) {
showLoader('sendOTPLoader');
setValue(value);
setisCheck(true);
let isBrokerMobileNumberValid = validateBrokerMobileNumber(brokerMobileNumber, true);
let isBrokerEmailValid = validateBrokerEmail(brokerEmail, true);
let request = {
    "serviceCode": "CBAMF",
    "firstName": brokerName,
    "mobileNum": brokerMobileNumber,
    "emailID": brokerEmail
};
if (!isBrokerMobileNumberValid)
    delete request.mobileNum;
if (!isBrokerEmailValid)
    delete request.emailID;
subBrokerService.checkExistence(request).then((res) => {
    // console.log(res, "checkExistence");
    if (res && res.status === 200 && res.data && res.data.errorCode && res.data.errorCode === "0011") {
        setErrors((prevError) => ({
            ...prevError,
            'brokerMobileNumber': { 'unique': true, 'uniqueError': res.data.message }
        }));
    } else if (res && res.status === 200 && res.data && res.data.errorCode && res.data.errorCode === "0012") {
        setErrors((prevError) => ({
            ...prevError,
            'brokerEmail': { 'unique': true, 'uniqueError': res.data.message }
        }));
    } else if(res && res.status === 200 && res.data && res.data.errorCode && res.data.errorCode === "0008") {
        // setAPIError((res.data && res.data.message) ? res.data.message : "Something went wrong, please try again later!");
            // showAPIErrorToaster();
    }
    setisCheck(false);
    hideLoader('sendOTPLoader');
}).catch((error) => {
    hideLoader('sendOTPLoader');
    setisCheck(false);
    // console.log(error, "checkExistence error");
});
}

useEffect(() => {
const interval = setInterval(() => {
    if (!count) {
        return () => clearInterval(interval);
    }
    setCount(seconds => seconds - 1);
}, 1000);
return () => clearInterval(interval);
}, [count]);

function handleOTP(e) {
let value = e.target.value.replace(/\D/g, "");
setOtp(value);
if (!value.length) {
    setOTPErrors('OTP is required');
} else {
    setOTPErrors('');
}
}


// for resend OTP
function sendOTP(isResend) {
showLoader(isResend ? 'resendOTPLoader' : 'sendOTPLoader');
let request = {
    "firstName": brokerName,
    "mobileNo1": brokerMobileNumber,
    "emailId1": brokerEmail,
    "leadCityName": 'OTHERS',
    "leadState":'OTHERS', //FOR MF
    "leadSource": "CHOICEINDIA",
    // "messgae": '',
    "referredId": refercode.current || null,
    "serviceCode": "CBAMF",
    "utm_source": isBlog =="yes" ? UTMSource.current ||'mff_lead_generation':UTMSource.current || null,
    "utm_medium":isBlog =="yes" ? UTMMedium.current || 'blog_leads':UTMMedium.current|| null,
    "utm_campaign": isBlog =="yes" ? UTMCampaign.current|| 'choice_blog_leads':UTMCampaign.current || null,
    "utm_term": UTMTerm.current || null,
    "utm_custom": UTMCustom.current || window.location.pathname.toString().replace('/',''),
    "utm_content": isBlog =="yes" ? UTMContent.current || 'mobile_sticky_cta': UTMContent.current || null,
    "whatsappConsent": true,
    "master_service_name":"CBA", 
    "captchaResp": captchaToken
};
// console.log("request",request)
subBrokerService.sendOTPNew(request).then((res) => {
    // console.log(res, "sendOTP");
    hideLoader(isResend ? 'resendOTPLoader' : 'sendOTPLoader');
    if (res && res.data && res.data.Body && res.data.Body.session_id) {
        otpSessionID.current = res.data.Body.session_id;
        // if (!isResend)
        resetOTPPopup();
        if (!isResend)
            handleOTPPopupShow();
        if (isResend)
            handleOTPResendSuccessToaster();
    } else {
        if (isResend) {
            setOTPErrors((res.data && res.data.message) ? res.data.message :"Something went wrong, please try again later!");
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
            setOTPErrors("Something went wrong, please try again later!");
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
}
function resendOTP(isResend) {
    showLoader(isResend ? 'resendOTPLoader' : 'sendOTPLoader');
    let request = {
        "mobile_no": brokerMobileNumber,
        "old_session_id":  otpSessionID.current? otpSessionID.current : null       
    };

    subBrokerService.resendOTPNew(request).then((res) => {

        hideLoader(isResend ? 'resendOTPLoader' : 'sendOTPLoader');
        if(res && res.data && res.data.Body && res.data.Body.session_id){

            otpSessionID.current = res.data.Body.session_id;
            resetOTPPopup();
            if (isResend)
            handleOTPResendSuccessToaster('otp');
        }else{
            if (isResend) {
                setOTPErrors((res.data && res.data.Message) ? res.data.Message :  "Something went wrong, please try again later!");
            }
        }
    }).catch((error) => {

        hideLoader(isResend ? 'resendOTPLoader' : 'sendOTPLoader');
        if (error && error.response && error.response.data && error.response.data.Message) {
            setOTPErrors(error.response.data.Message);
        } else {
            setOTPErrors("Something went wrong, please try again later!");
        }
    });
}
//To verify OTP on call
function getOTPOnCall(){
    // console.log("getOTPOnCall")
    showLoader('callOtpLoader2');
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
            resetOTPPopup();
            
            handleOTPResendSuccessToaster('call');
        }else{
            
                setOTPErrors((res.data && res.data.Message) ? res.data.Message :  "Something went wrong, please try again later!");
            
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
}
//To verify OTP
function verifyOTP() {
if (!otp.length) {
    setOTPErrors('OTP is required');
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
            // console.log("verify",res)
            fetchQueryParams();
            // addNewLead();
            handleOTPPopupClose();
                    handleBrokerCreatedSuccessShow();
                    resetBrokerForm();
                    setShowThanku(prevState => {
                        return { ...prevState, showModal: true, resText: res.data.Message? res.data.Message: 'Lead added successfully', closeMd: closeModal 
                    }
                    });
                    
        } else {
            setOTPErrors((res.data && res.data.message) ? res.data.message :  "Something went wrong, please try again later!");
        }
    }).catch((error) => {
        hideLoader('verifyLoader');
        // console.log(error, "verifyOTPN error");
        setOTPErrors((error.data && error.data.message) ? error.data.message : "Something went wrong, please try again later!");
    });
}
}

//lead api call
function addNewLead() {
let request = {
    "firstName": brokerName,
    "mobileNo1": brokerMobileNumber,
    "emailId1": brokerEmail,
    "leadSource": "CHOICEINDIA",
    "referredId": refercode.current || null,
    "serviceCode": "CBAMF",
    "utm_source": UTMSource.current || null,
    "utm_medium": UTMMedium.current || null,
    "utm_campaign": UTMCampaign.current || null,
    "utm_term": UTMTerm.current || null,
    "utm_custom": UTMCustom.current || null,
    "utm_content": UTMContent.current || null
};
showLoader('addLeadLoader');
subBrokerService.addNewLead(request).then((res) => {
    
    hideLoader('addLeadLoader');
    // console.log(res, "addNewLead");
    if (res && res.data && !res.data.errorCode) {
      //  console.log('TTT',res);
        handleOTPPopupClose();
        handleBrokerCreatedSuccessShow();
        resetBrokerForm();
        setShowThanku(prevState => {
            return { ...prevState, showModal: true,resText: res.data.message? res.data.message: 'Lead added successfully', closeMd: closeModal }
        });
        resetBrokerForm();
    } else {
        // setAPIError((res.data && res.data.message) ? res.data.message : "Something went wrong, please try again later!");
        // showAPIErrorToaster();
        setOTPErrors((res.data && res.data.message) ? res.data.message : "Something went wrong, please try again later!");
    }

}).catch((error) => {
    hideLoader('addLeadLoader');
    // console.log(error, "addNewLead error");
    // if (error && error.response && error.response.data && error.response.data.message) {
    //     setAPIError(error.response.data.message);
    // } else {
    //     setAPIError("Something went wrong, please try again later!");
    // }
    // showAPIErrorToaster();
    setOTPErrors((error.data && error.data.message) ? error.data.message : "Something went wrong, please try again later!");
});
}

/**to hide thank you popup */
function closeModal() {
setShowThanku(prevState => {
    return { ...prevState, showModal: false}
});
}

//OTP resend success toaster
function handleOTPResendSuccessToaster(type) {
setOTPSendSuccessToaster({[type]: true});
setTimeout(() => {
    setOTPSendSuccessToaster({[type]: false});
}, 2000)
}
const selectInputRef = useRef();
function resetBrokerForm() {
setBrokerName('');
setBrokerMobileNumber('');
setBrokerEmail('');
// selectInputRef.current.clearAll();
// setShowState(false);
setErrors({ 'brokerName': {}, 'brokerMobileNumber': {}, 'brokerEmail': {}});
setLoaders({});
setOtp('');
setOTPErrors('');
}
function handleOTPShow() {
setShowOTP(true);
}

//to show terms and condition
function handleTermsConditionShow() {
setShowTermsCondition(true);
}
//to close terms and condition
function handleTermsConditionClose() {
setShowTermsCondition(false);
}

//show broker success
function handleBrokerCreatedSuccessShow() {
setBrokerCreatedSuccess(true);
setTimeout(() => {
    setBrokerCreatedSuccess(false);
}, 200)
}

//close broker success
function handleBrokerCreatedSuccessClose() {
setBrokerCreatedSuccess(false);

}

//show OTP popup
function handleOTPPopupShow() {
setShowOTPPopup(true);
}

//close OTP popup
function handleOTPPopupClose() {
setShowOTPPopup(false);
}

// function handleBrokerCreatedSuccessShow() {
// setBrokerCreatedSuccess(true);
// setTimeout(() => {
//     setBrokerCreatedSuccess(false);
// }, 200)
// }

// function handleBrokerCreatedSuccessClose() {
// setBrokerCreatedSuccess(false);
// }

//show api toaster
function showAPIErrorToaster() {
setShowErrorToaster(true);
}

function hideAPIErrorToaster() {
setShowErrorToaster(false);
}

 



return (
<>
{
            (brokerCreatedSuccess) ?
                <Alert key='success' variant='success' className="sub-broker-success" onClose={handleBrokerCreatedSuccessClose} dismissible> Successfully! </Alert> : ''
        }

<div className={`exit-intent-sleekbox-overlay sleekbox-popup-active subbrokerpopup show-res ${showThanku.showModal?'dont-show':''}`}>
    <div className="exit-intent-sleekbox-popup">
    
        <div className="popup-sub-row-box">
            <div className="close">
                <a  onClick={hideComponent} class="closebtn" >&times;</a>
                </div> 
            <div className="popup-sub-right">
               
                <div className="signal-form subbroker-signal-form" id="form-banner">
                <h4>Be a <span>MF Distributor</span> &<br/>
                Earn High Commission</h4>
                <Form>
                    <Form.Group className="mb-3 formgrp">

                <div className="sub-formgrp">
                    
                    <Form.Control type="text" name="brokerName" id="brokerName" placeholder="Name" className="formcontrol formpadding" autoComplete="off" isInvalid={errors.brokerName.invalid || errors.brokerName.required} value={brokerName} onChange={handleName}/>
                    {
                        errors.brokerName.invalid ? <Form.Control.Feedback type="invalid">Invalid Name</Form.Control.Feedback> : ''
                    }
                    {
                        errors.brokerName.required ? <Form.Control.Feedback type="invalid">Name is Required</Form.Control.Feedback> : ''
                    }
                </div>
                <div className="sub-formgrp">
                   
                    <Form.Control type="tel" pattern="\d*" name="brokerMobileNumber" id="brokerMobileNumber" placeholder='Mobile Number' className="formcontrol formpadding" autoComplete="off" maxLength="10" isInvalid={errors.brokerMobileNumber.invalid || errors.brokerMobileNumber.required || errors.brokerMobileNumber.unique} value={brokerMobileNumber} onChange={handleMobileNumber} />

                    {
                        errors.brokerMobileNumber.invalid ? <Form.Control.Feedback type="invalid">Invalid Mobile Number</Form.Control.Feedback> : ''
                    }
                    {
                        errors.brokerMobileNumber.required ? <Form.Control.Feedback type="invalid">Mobile Number is Required</Form.Control.Feedback> : ''
                    }
                    {
                        errors.brokerMobileNumber.unique ? <Form.Control.Feedback type="invalid">{errors.brokerMobileNumber.uniqueError}</Form.Control.Feedback> : ''
                    }
                  
                </div>
                <div className="sub-formgrp">
                   
                    <Form.Control type="text" name="brokerEmail" id="brokerEmail" placeholder='Email' className="formcontrol formpadding" autoComplete="off" isInvalid={errors.brokerEmail.invalid || errors.brokerEmail.required || errors.brokerEmail.unique} value={brokerEmail} onChange={handleEmail} />

                    {
                        errors.brokerEmail.invalid ? <Form.Control.Feedback type="invalid">Invalid Email</Form.Control.Feedback> : ''
                    }
                    {
                        errors.brokerEmail.required ? <Form.Control.Feedback type="invalid">Email is Required</Form.Control.Feedback> : ''
                    }
                    {
                        errors.brokerEmail.unique ? <Form.Control.Feedback type="invalid">{errors.brokerEmail.uniqueError}</Form.Control.Feedback> : ''
                    }
                    
                </div>
                
                <div className="sub-formgrp cust-checkbox">
                    <Form.Check
                        inline
                        name="terms_and_conditions"
                        type="checkbox"
                        id="terms_and_conditions"
                    >
                        <Form.Check.Input type="checkbox" checked readOnly />
                        <Form.Check.Label> I agree &amp; accept
                            <a className="link-tc" onClick={handleTermsConditionShow}> T&amp;C</a>
                    </Form.Check.Label>
                    </Form.Check>
                </div>


                <div className="sub-formgrp  mb-0">
                <Button variant="primary"
                        type="button" className="btn-bg btn-bg-dark sendbtn" disabled={loaders.sendOTPLoader} onClick={handleSendOTP}>
                        {loaders.sendOTPLoader ? <div className="loaderB mx-auto"></div> :'Send OTP'}
                    </Button>
                    {/* <Button variant="primary"
                        type="button" className="btn-bg btn-bg-dark sendbtn" onClick={resetBrokerForm}>
                        Clear
                    </Button> */}

                    <div className="">
                        {
                            isCheck ? <p className="text-danger valid-ss">Validating {value}...</p> : ''
                        }
                        {/* {
                            <p className="text-danger valid-ss">Validating {value}...</p>
                        } */}
                    </div>
                    <br/>
                    {/* <p className="sleekbox-link remindMeLater"><a className="sleekbox-a" onClick={hideComponent}>Remind Me Later</a></p> */}
                </div>

                
            </Form.Group>
        </Form>
                </div>
            </div>
        </div>
    </div>
</div>
{
        showOTPPopup ?
        <Modal show={show} className="bt-strap-mdl sub-term" backdrop='static' keyboard={false} onHide={handleOTPPopupClose}>
        <Modal.Header className="border-0" closeButton>
        </Modal.Header>
        <Modal.Body className="border-0">
            <div className="exit-intent-sleekbox-overlay sleekbox-popup-active">
                <div className="exit-intent-sleekbox-popup">
                    <div className="popup-sub-row">
                        {/* <div className="close">
                            <a href="javascript:void(0)" onClick={handleOTPPopupClose} className="closebtn" >&times;</a>
                        </div> */}
                        <div className="popup-sub-right">

                            <div>
                                <img src={OTPimage} alt='OTP Image' />

                                <p className="heading">OTP Verification</p>
                                <p className="subheading">A OTP has been sent to' {'******' + brokerMobileNumber.slice(6, 10)}</p>
                                {
                                    count ?
                                        <p className="time">Resend OTP in:<span> {count} seconds</span></p> : ''
                                }

                            </div>
                            <div>


                                <Form.Control className=" form-control form-control-lg digit-otp text-center" type="tel" id="subBrokerOTP" placeholder="Enter OTP" autoComplete="one-time-code" maxLength="6" isInvalid={OTPErrors} value={otp} onChange={(e) => handleOTP(e)} />
                                {
                                    OTPErrors ? <Form.Control.Feedback type="invalid">{OTPErrors}</Form.Control.Feedback> : ''
                                }
                            </div>

                            <div className="btnwrap">
                                <button className="btn-bg" disabled={loaders.verifyLoader || loaders.addLeadLoader} onClick={verifyOTP}>{(loaders.verifyLoader || loaders.addLeadLoader) ? <div className="dotLoaderB"></div> : 'Verify' }</button>
                            </div>
                            <div className="">

                                {
                                    !count ?
                                        // <button className="resend" onClick={() => sendOTP(true)}>{loaders.resendOTPLoader ? <div className="dotLoaderB colorB marginLoader"></div> : 'Resend OTP'}</button> : ''
                                        <div className="d-flex align-items-center justify-content-center">
                                                            <button className="resend" onClick={() => resendOTP(true)}>{loaders.resendOTPLoader ? <div className="dotLoaderB colorB marginLoader"></div> : 'Resend OTP'}</button>
                                                            {/* <span className="ortext">{'OR'}</span>
                                                            <button className="resend" onClick={getOTPOnCall}>{loaders.callOtpLoader ? <div className="dotLoaderB colorB marginLoader"></div> :  'Get OTP on Call'}</button> */}
                                                        </div>:''
                                }


                            </div>
                            <div className="mt-2">
                                {
                                    
                                        (OTPSendSuccessToaster.otp || OTPSendSuccessToaster.call)?
                                            <Alert key='success' variant='success' onClose={() => setOTPSendSuccessToaster(false)} dismissible>
                                                {
                                                (OTPSendSuccessToaster.call)?   'You will soon receive an automated call on given Mobile Number': 'OTP has been resent on given Mobile Number'
}
                                            </Alert> : ''
                                    
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal.Body>
    </Modal> : ''
}

<Modal className="sub-term" show={showTermsCondition} onHide={handleTermsConditionClose} backdrop="static"
        keyboard={false} centered>
        <Modal.Header closeButton>
            <Modal.Title>Attention</Modal.Title>
        </Modal.Header>
        <Modal.Body>We are capturing this data for communication purpose only and it's stored securely. We protect your privacy like it's ours! By agreeing you are allowing us to send updates via SMS/WhatsApp/Email/Call which will also override &amp; will not be termed as violation of DND.</Modal.Body>
       
    </Modal>
    {
        showThanku.showModal?<Thankyoupopup isShow={showThanku} isBlog={'blog'} />: ''
    }





    

</>
);
}

export default MutualFundpopupform;