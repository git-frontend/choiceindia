import React, { useEffect, useState, useRef, useCallback } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';
import "../Common-features/demat-form.scss"
import subBrokerService from '../../Services/subBrokerService';
import { useSearchParams } from "react-router-dom";
import OTPimage from '../../assets/images/otp.svg';
import Select from 'react-dropdown-select';
import { Link } from "react-router-dom";
import SubBrokerLanguageContent from '../../Services/SubBrokerLanguageContent';
import { Ref } from "react";
import Thankyoupopup from "../Common-features/Thanku-popup";
import SubbrokerpopupForm from "../Common-features/Subbrokerpopupform";
import SubbrokerStickyFooter from "../Common-features/SubbrokerStickyFooter";
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import openAccountService from "../../Services/openAccountService";

function SubBrokerForm(props) {
    // words: /^([A-z-\s\'\.]*)*$/g,
    // email: /^[A-Za-z0-9._%+-@.]*$/g,
    /**Regex for Name*/
    // console.log(props,"props")
    const nameRegex = /^(?!.*[\s]{2,})(?!.*[\.]{2,})(?!.*[\']{2,})(?!.*[\-]{2,})(?=.{2,}$)(([A-Za-z\.\'\- ])\2?(?!\2))+$/;
    const mobileRegex = /^(6|9|8|7)([0-9]{9})$/i;
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})$/;
    const [brokerName, setBrokerName] = useState('');
    const [brokerMobileNumber, setBrokerMobileNumber] = useState('');
    const [brokerEmail, setBrokerEmail] = useState('');
    const [isOther, setIsOther] = useState(false);

    
    const [brokerCityBranch, setBrokerCityBranch] = useState([]);
    const [brokerState, setBrokerState] = useState('');
    const [showState, setShowState] = useState(false);
    const [errors, setErrors] = useState({ 'brokerName': {}, 'brokerMobileNumber': {}, 'brokerEmail': {}, 'brokerCityBranch': {}, 'brokerState': {} });
    const [showTermsCondition, setShowTermsCondition] = useState(false);
    const [loaders, setLoaders] = useState({});
    const [showOTPPopup, setShowOTPPopup] = useState(false);
    const [APIError, setAPIError] = useState('');
    const [showErrorToaster, setShowErrorToaster] = useState(false);
    const [citiesDropdown, setCitiesDropdown] = useState([]);
    const [statesDropdown, setStatesDropdown] = useState([]);
    const [otp, setOtp] = useState('');
    const [OTPErrors, setOTPErrors] = useState('');
    const [count, setCount] = useState(0);
    const [OTPSendSuccessToaster, setOTPSendSuccessToaster] = useState({});
    const [brokerCreatedSuccess, setBrokerCreatedSuccess] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const [show, setShow] = useState(true);
    const [showOpenAccountPopup, setShowOpenAccountPopup] = useState(false);
    const [fablesDetailTitleId, setFablesDetailTitleId] = useState(true);
   
    // const [value2, setValue2] = useState();
    var otpSessionID = useRef('');
    var UTMCampaign = useRef('');
    var UTMMedium = useRef('');
    var UTMSource = useRef('');
    var refercode = useRef('');
    var UTMTerm = useRef('');
    var UTMCustom = useRef('');
    var UTMContent = useRef('');
    var isMobile = useRef(isMobileDevice());
    const [showOTP, setShowOTP] = useState(false);
    const [isCheck, setisCheck] = useState(false);
    const [value, setValue] = useState('Details');
    const isBlog=(window.location.pathname.indexOf('blog') > -1)? 'yes':'';
    const [captchaToken, setCaptchaToken] = useState('');
    const { executeRecaptcha } = useGoogleReCaptcha();
    const noDataLabel ="City not found. Select 'Other'";
    const onlyblog=(window.location.pathname.indexOf('blog') > -1) ? 'yes':'';

    // console.log(`citiesDropdown : `,citiesDropdown)

    /** state to show thankyou popup default */
    const [showThanku, setShowThanku] = useState({ showModal: false, page: 'no-addlead', resText: '', isOnboarding: '' });

    function isMobileDevice() {
        return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    }

    function handleToggle(event) {
        // console.log('TTT',event);
    }

    function showOpenAccountAdPopup() {
        // console.log('SHOWW!!!!')
        
            setShowOpenAccountPopup(true);
        
    }

     /**function executes to close the ad popup */
     function hideOpenAccountAdPopup(showAdValues) {
        
        setShowOpenAccountPopup(false);
        // callOpenAccountAdPopupAgain();
    }

    // function callOpenAccountAdPopupAgain() {
    //     //after 15min
    //     setTimeout(() => {
    //         showOpenAccountAdPopup();
    //     }, 9000)
    // }

    // useEffect(() => {
    //     if (!isMobile.current && props.isPopupVisible) {
    //         setTimeout(() => {
    //             showOpenAccountAdPopup();
    //         }, 6000);
    //     }
    // }, []);

    function handleName(e) {
        let value = e.target.value.replace(/([^A-z-\s\'\.]*)*/g, "");
        setBrokerName(value);
        setErrors((prevError) => ({
            ...prevError,
            'brokerName': {}
        }));
    }

    function handleMobileNumber(e) {
        let value = e.target.value.replace(/\D/g, "");
        setBrokerMobileNumber(value);
        setErrors((prevError) => ({
            ...prevError,
            'brokerMobileNumber': {}
        }));
    }

    function handleEmail(e) {
        let value = e.target.value.replace(/[^A-Za-z0-9._%+-@.]*/g, "");
        setBrokerEmail(value);
        setErrors((prevError) => ({
            ...prevError,
            'brokerEmail': {}
        }));
    }

    useEffect(() => {
        if (props.isFromFableDetails) {
            window.addEventListener("scroll", onScroll);

            return () => {
                window.removeEventListener("scroll", onScroll);
            };
        }
    }, [props.isFromFableDetails]);
// console.log("check",document.documentElement.clientWidth)
    function onScroll() {
        let element = document.getElementById('fablesdetail-title');
        if (element) {
            const rect = element.getBoundingClientRect();
            setFablesDetailTitleId(
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }
    }
    
    

    function handleBrokerCityBranch(e) {
        if (e[0]) {
            let value = e[0].leadCity;
            setBrokerCityBranch([e[0]]);
            // console.log("cc",brokerCityBranch)
            setErrors((prevError) => ({
                ...prevError,
                'brokerCityBranch': {}
            }));
            if (value === 'OTHERS') {
                setBrokerState('');
                setShowState(true);
            } else {
                // console.log(`random value : `,value);
                setBrokerState('');
                setShowState(false);
            }
        }else{
        }
    }
    const renderNoDataLabel=(e)=>(
            <div className="p-2 nodatalebel" onClick={() =>{
                
               let otherData  = e.props.options.find(e=>{
                return e.leadCity=='OTHERS'
            })
              setTimeout(() => {
                setBrokerCityBranch([])
             setTimeout(() => {
                if(otherData){
                    // console.log("otherData",otherData)
                    //e.methods.clearAll()
                    // console.log("e.methods",e.methods)
                    setBrokerCityBranch([otherData])
                    setBrokerState('');
                    setShowState(true);
                    document.body.click()
  
                }
             }, 500);
              }, 1000);
               
        } }>
            {noDataLabel}
        </div>
        
      
    )
    

    function handleBrokerState(e) {
        if (e[0]) {
            let value = e[0].stateName;
            setBrokerState(value);
            setErrors((prevError) => ({
                ...prevError,
                'brokerState': {}
            }));
        }
    }

    function handleSendOTP(e) {
        e.preventDefault();
        if (errors.brokerMobileNumber.unique || errors.brokerEmail.unique) {
            return;
        }
        let isBrokerNameValid, isBrokerMobileNumberValid, isBrokerEmailValid, isBrokerCityBranchValid, isBrokerStateValid = false;
        //brokerName Validation
        isBrokerNameValid = validateBrokerName(brokerName, false);
        //brokerMobileNumber Validation
        isBrokerMobileNumberValid = validateBrokerMobileNumber(brokerMobileNumber, false);
        //brokerEmail Validation
        isBrokerEmailValid = validateBrokerEmail(brokerEmail, false);
        //brokerCityBranch Validation
        if (!brokerCityBranch.length) {
            setErrors((prevError) => ({
                ...prevError,
                'brokerCityBranch': { 'required': true }
            }));
        } else if (brokerCityBranch.length) {
            isBrokerCityBranchValid = true;
        }
        //brokerState Validation
        if (showState) {
            if (!brokerState.length) {
                setErrors((prevError) => ({
                    ...prevError,
                    'brokerState': { 'required': true }
                }));
            } else if (brokerState.length) {
                isBrokerStateValid = true;
            }
        } else {
            isBrokerStateValid = true;
        }
        if (isBrokerNameValid && isBrokerMobileNumberValid && isBrokerEmailValid && isBrokerCityBranchValid && isBrokerStateValid) {
            // sendOTP(false);
            handleReCaptchaVerify();
        }
    }

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

    function fetchQueryParams() {
        UTMCampaign.current = searchParams.get('utm_campaign') || '';
        UTMMedium.current = searchParams.get('utm_medium') || '';
        UTMSource.current = searchParams.get('utm_source') || '';
        UTMTerm.current = searchParams.get('utm_term') || '';
        UTMCustom.current = searchParams.get('utm_custom') || '';
        UTMContent.current = searchParams.get('utm_content') || '';

        refercode.current = (searchParams.get('refercode') && window.atob(searchParams.get('refercode'))) || '';
    }

    function handleTermsConditionShow() {
        setShowTermsCondition(true);
    }

    function handleTermsConditionClose() {
        setShowTermsCondition(false);
    }

    function handleOTPPopupShow() {
        setShowOTPPopup(true);
    }

    function handleOTPPopupClose() {
        setShowOTPPopup(false);
    }

    function handleBrokerCreatedSuccessShow() {
        setBrokerCreatedSuccess(true);
        setTimeout(() => {
            setBrokerCreatedSuccess(false);
        }, 200)
    }

    function handleBrokerCreatedSuccessClose() {
        setBrokerCreatedSuccess(false);
    }

    function showAPIErrorToaster() {
        setShowErrorToaster(true);
    }

    function hideAPIErrorToaster() {
        setShowErrorToaster(false);
    }

    function showLoader(type) {
        setLoaders((prevLoaders) => ({
            ...prevLoaders,
            [type]: true
        }));
    }

    function hideLoader(type) {
        setLoaders((prevLoaders) => ({
            ...prevLoaders,
            [type]: false
        }));
    }

    function fetchCities() {
        showLoader('citiesLoader');
        subBrokerService.getCities().then((res) => {
            // console.log(res, "res cities");
            hideLoader('citiesLoader');
            if (res && res.status === 200 && res.data && res.data.StatusCode === 200 && res.data.Body && res.data.Body.CityMasterList) {
                setCitiesDropdown(res.data.Body.CityMasterList);
                if(res.data.Body.CityMasterList.length ===0 ){
                    setCitiesDropdown([])
                }
            } else {
                
                setCitiesDropdown([]);
            }
        }).catch((error) => {
            // console.log(error, "error cities");
            hideLoader('citiesLoader');
            setCitiesDropdown([]);
        });
    }

    function fetchState() {
        showLoader('stateLoader');
        subBrokerService.getStates().then((res) => {
            // console.log(res, "res states");
            hideLoader('stateLoader');
            if (res && res.status === 200 && res.data && res.data.StatusCode === 200 && res.data.Body && res.data.Body.StateMasterList) {
                setStatesDropdown(res.data.Body.StateMasterList);
            } else {
                setStatesDropdown([]);
            }
        }).catch((error) => {
            // console.log(error, "error states");
            hideLoader('stateLoader');
            setStatesDropdown([]);
        });
    }

    // Create an event handler so you can call the verification on button click event or form submit
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

    useEffect(() => {
        fetchCities();
    }, []);

    useEffect(() => {
        if (showState) {
            fetchState();
        }
    }, [showState]);


    /**On change method for chekuniquert api name*/
    // useEffect(() => {
    //     const delayDebounceFn = setTimeout(() => {
    //         let isBrokerNameValid = validateBrokerName(brokerName, true);
    //         let isBrokerMobileNumberValid = validateBrokerMobileNumber(brokerMobileNumber, true);
    //         let isBrokerEmailValid = validateBrokerEmail(brokerEmail, true);
    //         if (isBrokerNameValid) {
    //             // console.log(brokerName, "brokerName");
    //             checkExistence('Name');
    //             // Send Axios request here
    //         }
    //     }, 300)
    //     return () => clearTimeout(delayDebounceFn)
    // }, [brokerName]);

    /**On change method for chekuniquert api for mobile number*/
    // useEffect(() => {
    //     const delayDebounceFn = setTimeout(() => {
    //         let isBrokerNameValid = validateBrokerName(brokerName, true);
    //         let isBrokerMobileNumberValid = validateBrokerMobileNumber(brokerMobileNumber, true);
    //         let isBrokerEmailValid = validateBrokerEmail(brokerEmail, true);
    //         if (isBrokerMobileNumberValid) {
    //             // console.log(brokerMobileNumber, "brokerMobileNumber");
    //             checkExistence('Mobile Number');
    //             // Send Axios request here
    //         }
    //     }, 300)
    //     return () => clearTimeout(delayDebounceFn)
    // }, [brokerMobileNumber]);

    /**On change method for chekuniquert api for emailid*/
    // useEffect(() => {
    //     const delayDebounceFn = setTimeout(() => {
    //         let isBrokerNameValid = validateBrokerName(brokerName, true);
    //         let isBrokerMobileNumberValid = validateBrokerMobileNumber(brokerMobileNumber, true);
    //         let isBrokerEmailValid = validateBrokerEmail(brokerEmail, true);
    //         if (isBrokerEmailValid) {
    //             // console.log(brokerEmail, "brokerEmail");
    //             checkExistence('Email');
    //             // Send Axios request here
    //         }
    //     }, 300);
    //     return () => clearTimeout(delayDebounceFn)
    // }, [brokerEmail]);

    useEffect(() => {
        checkWebOTP();
    }, [loaders.resendOTPLoader || loaders.sendOTPLoader]);

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

    // function checkExistence(value) {
    //     showLoader('sendOTPLoader');
    //     setValue(value);
    //     setisCheck(true);
    //     let isBrokerMobileNumberValid = validateBrokerMobileNumber(brokerMobileNumber, true);
    //     let isBrokerEmailValid = validateBrokerEmail(brokerEmail, true);
    //     let request = {
    //         "serviceCode": "CBAEF",
    //         "firstName": brokerName,
    //         "mobileNum": brokerMobileNumber,
    //         "emailID": brokerEmail
    //     };
    //     if (!isBrokerMobileNumberValid)
    //         delete request.mobileNum;
    //     if (!isBrokerEmailValid)
    //         delete request.emailID;
    //     subBrokerService.checkExistence(request).then((res) => {
    //         // console.log(res, "checkExistence");
    //         if (res && res.status === 200 && res.data && res.data.errorCode && res.data.errorCode === "0011") {
    //             setErrors((prevError) => ({
    //                 ...prevError,
    //                 'brokerMobileNumber': { 'unique': true, 'uniqueError': res.data.message }
    //             }));
    //         } else if (res && res.status === 200 && res.data && res.data.errorCode && res.data.errorCode === "0012") {
    //             setErrors((prevError) => ({
    //                 ...prevError,
    //                 'brokerEmail': { 'unique': true, 'uniqueError': res.data.message }
    //             }));
    //         } else if(res && res.status === 200 && res.data && res.data.errorCode && res.data.errorCode === "0008") {
    //             // setAPIError((res.data && res.data.message) ? res.data.message : "Something went wrong, please try again later!");
    //                 // showAPIErrorToaster();
    //         }
    //         setisCheck(false);
    //         hideLoader('sendOTPLoader');
    //     }).catch((error) => {
    //         hideLoader('sendOTPLoader');
    //         setisCheck(false);
    //         // console.log(error, "checkExistence error");
    //     });
    // }

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
            setOTPErrors(SubBrokerLanguageContent.getContent(props.language ? props.language : 'en', 'otperror1', 'OTP is required'));
        } else {
            setOTPErrors('');
        }
    }

    function sendOTP(isResend) {
        showLoader(isResend ? 'resendOTPLoader' : 'sendOTPLoader');
        let request = {
            "firstName": brokerName,
            "mobileNo1": brokerMobileNumber,
            "emailId1": brokerEmail,
            "leadCityName": brokerCityBranch[0].leadCity,
            "leadSource": "CHOICEINDIA",
            "leadState": brokerState,
            // "messgae": '',
            "referredId": refercode.current || null,
            "serviceCode": "CBAEF",
            "utm_source":isBlog =="yes" ? UTMSource.current || 'sb_lead_generation':UTMSource.current || null,
            "utm_medium":isBlog =="yes" ? UTMMedium.current || 'choice_blog':UTMMedium.current || null,
            "utm_campaign":isBlog =="yes" ? UTMCampaign.current || 'choice_blog_leads':UTMCampaign.current || null,
            "utm_term": UTMTerm.current || null,
            "utm_custom": UTMCustom.current || window.location.pathname.toString().replace('/',''),
            "utm_content": UTMContent.current || null,
            "whatsappConsent": true,
            "master_service_name":"CBA", 
            "captchaResp": captchaToken
        };
        subBrokerService.sendOTPNew(request).then((res) => {
            // console.log(res, "sendOTP");
            // console.log('SUBCP',res)
            hideLoader(isResend ? 'resendOTPLoader' : 'sendOTPLoader');
            if (res && res.data && res.data.Body && res.data.Body.session_id) {
                otpSessionID.current = res.data.Body.session_id;
                console.log("send otp session",otpSessionID.current)
                // if (!isResend)
                resetOTPPopup();
                if (!isResend)
                    handleOTPPopupShow();
                if (isResend)
                    handleOTPResendSuccessToaster();
            } else {
                if (isResend) {
                    setOTPErrors((res.data && res.data.Message) ? res.data.Message : SubBrokerLanguageContent.getContent(props.language ? props.language : 'en', 'otperror2', "Something went wrong, please try again later!"));
                } else {
                    setAPIError((res.data && res.data.Message) ? res.data.Message : "Something went wrong, please try again later!");
                    showAPIErrorToaster();
                }
            }
        }).catch((error) => {
            // console.log(error, "sendOTP error");
            hideLoader(isResend ? 'resendOTPLoader' : 'sendOTPLoader');
            if (isResend) {
                if (error && error.response && error.response.data && error.response.data.Message) {
                    setOTPErrors(error.response.data.Message);
                } else {
                    setOTPErrors(SubBrokerLanguageContent.getContent(props.language ? props.language : 'en', 'otperror2', "Something went wrong, please try again later!"));
                }
            } else {
                if (error && error.response && error.response.data && error.response.data.Message) {
                    setAPIError(error.response.data.Message);
                } else {
                    setAPIError("Something went wrong, please try again later!");
                }
                showAPIErrorToaster();
            }
        });
    }

    /**method to execute when resend OTP clicked */
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
                // console.log("resnd OTP otpSessionID",res.data.Body.session_id)
                resetOTPPopup();
                if (isResend)
                handleOTPResendSuccessToaster('otp');
            }else{
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
    }
//to get otp on call
function getOTPOnCall(){
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
}
    function verifyOTP() {
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
    }

    function addNewLead() {
        let request = {
            "firstName": brokerName,
            "mobileNo1": brokerMobileNumber,
            "emailId1": brokerEmail,
            "leadCityName": brokerCityBranch,
            "leadSource": "CHOICEINDIA",
            "leadState": brokerState,
            "referredId": refercode.current || null,
            "serviceCode": "CBAEF",
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
            } else {
                // setAPIError((res.data && res.data.message) ? res.data.message : "Something went wrong, please try again later!");
                // showAPIErrorToaster();
                setOTPErrors((res.data && res.data.message) ? res.data.message : SubBrokerLanguageContent.getContent(props.language ? props.language : 'en', 'otperror2', "Something went wrong, please try again later!"));
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
            setOTPErrors((error.data && error.data.message) ? error.data.message : SubBrokerLanguageContent.getContent(props.language ? props.language : 'en', 'otperror2', "Something went wrong, please try again later!"));
        });
    }

    /**to hide thank you popup */
    function closeModal() {
        setShowThanku(prevState => {
            return { ...prevState, showModal: false}
        });
    }

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
        setBrokerCityBranch([]);
        setBrokerState('');
        setShowState(false);
        setErrors({ 'brokerName': {}, 'brokerMobileNumber': {}, 'brokerEmail': {}, 'brokerCityBranch': {}, 'brokerState': {} });
        setLoaders({});
        setOtp('');
        setOTPErrors('');
    }
    function handleOTPShow() {
        setShowOTP(true);
    }
    useEffect(() => {
        if(onlyblog){
            setTimeout(() => {
                showOpenAccountAdPopup()
            }, 15000);
        }
       
    }, []);
    return (
        <>
         {
                showOpenAccountPopup ? <SubbrokerpopupForm hideComponent={hideOpenAccountAdPopup} openInfoPopup={(msg) => triggerOTPInfoPopup(msg)} ></SubbrokerpopupForm> : ''
            }
                 {
                (props.isFromFableDetails ? (props.isFooterVisible && !fablesDetailTitleId) : props.isFooterVisible) ? <SubbrokerStickyFooter SubbrokerpopupForm={showOpenAccountAdPopup} openInfoPopup={(msg) => triggerOTPInfoPopup(msg)}></SubbrokerStickyFooter> : ''
            }
            <div className="demat-account-form" id="sub-broker-form">


                {
                    (brokerCreatedSuccess) ?
                        <Alert key='success' variant='success' className={(window.location.pathname.indexOf('sub-broker-franchise') > -1) || (window.location.pathname.indexOf('authorised-person') > -1) || (window.location.pathname.indexOf('remisier') > -1) ? "sub-broker-success" : ""} onClose={handleBrokerCreatedSuccessClose} dismissible>{SubBrokerLanguageContent.getContent(props.language ? props.language : 'en', 'formsuccess', 'Successfully!')}</Alert> : ''
                }
                
                <h3 className="form-ttl">{SubBrokerLanguageContent.getContent(props.language ? props.language : 'en', 'title', 'Become a Sub Broker')}</h3>
                <Form>
                    <Form.Group className="mb-3 formgrp">

                        <div className="sub-formgrp">
                            {/* <Form.Control type="text" name="brokerName" placeholder="Name" className="formcontrol formpadding" /> */}
                            <Form.Control type="text" name="brokerName" id="brokerName" placeholder={SubBrokerLanguageContent.getContent(props.language ? props.language : 'en', 'namelbl', 'Name')} className="formcontrol formpadding" autoComplete="off" isInvalid={errors.brokerName.invalid || errors.brokerName.required} value={brokerName} onChange={handleName} />
                            {
                                errors.brokerName.invalid ? <Form.Control.Feedback type="invalid">{SubBrokerLanguageContent.getContent(props.language ? props.language : 'en', 'namelblerror1', 'Invalid Name')}</Form.Control.Feedback> : ''
                            }
                            {
                                errors.brokerName.required ? <Form.Control.Feedback type="invalid">{SubBrokerLanguageContent.getContent(props.language ? props.language : 'en', 'namelblerror2', 'Name is Required')}</Form.Control.Feedback> : ''
                            }
                        </div>
                        <div className="sub-formgrp">
                            {/* <Form.Control type="number" name="brokerMobileNumber" placeholder="Mobile Number" className="formcontrol formpadding" /> */}
                            <Form.Control type="tel" pattern="\d*" name="brokerMobileNumber" id="brokerMobileNumber" placeholder={SubBrokerLanguageContent.getContent(props.language ? props.language : 'en', 'moblbl', 'Mobile Number')} className="formcontrol formpadding" autoComplete="off" maxLength="10" isInvalid={errors.brokerMobileNumber.invalid || errors.brokerMobileNumber.required || errors.brokerMobileNumber.unique} value={brokerMobileNumber} onChange={handleMobileNumber} />
                            {
                                errors.brokerMobileNumber.invalid ? <Form.Control.Feedback type="invalid">{SubBrokerLanguageContent.getContent(props.language ? props.language : 'en', 'moblblerror1', 'Invalid Mobile Number')}</Form.Control.Feedback> : ''
                            }
                            {
                                errors.brokerMobileNumber.required ? <Form.Control.Feedback type="invalid">{SubBrokerLanguageContent.getContent(props.language ? props.language : 'en', 'moblblerror2', 'Mobile Number is Required')}</Form.Control.Feedback> : ''
                            }
                            {
                                errors.brokerMobileNumber.unique ? <Form.Control.Feedback type="invalid">{errors.brokerMobileNumber.uniqueError}</Form.Control.Feedback> : ''
                            }
                        </div>
                        <div className="sub-formgrp">
                            {/* <Form.Control type="text" name="brokerEmail" placeholder="Email Id" className="formcontrol formpadding" /> */}
                            <Form.Control type="text" name="brokerEmail" id="brokerEmail" placeholder={SubBrokerLanguageContent.getContent(props.language ? props.language : 'en', 'emaillbl', 'Email')} className="formcontrol formpadding" autoComplete="off" isInvalid={errors.brokerEmail.invalid || errors.brokerEmail.required || errors.brokerEmail.unique} value={brokerEmail} onChange={handleEmail} />
                            {
                                errors.brokerEmail.invalid ? <Form.Control.Feedback type="invalid">{SubBrokerLanguageContent.getContent(props.language ? props.language : 'en', 'emaillblerror1', 'Invalid Email')}</Form.Control.Feedback> : ''
                            }
                            {
                                errors.brokerEmail.required ? <Form.Control.Feedback type="invalid">{SubBrokerLanguageContent.getContent(props.language ? props.language : 'en', 'emaillblerror2', 'Email is Required')}</Form.Control.Feedback> : ''
                            }
                            {
                                errors.brokerEmail.unique ? <Form.Control.Feedback type="invalid">{errors.brokerEmail.uniqueError}</Form.Control.Feedback> : ''
                            }
                        </div>
                        <div className="sub-formgrp">
                            {/* <Form.Control type="text" name="brokerCityBranch" placeholder="Search Nearest City Branch" className="formcontrol formpadding" /> */}
                            {/* <Form.Select placeholder="Search Nearest City Branch" className="formcontrol formpadding" isInvalid={errors.brokerCityBranch.required} value={brokerCityBranch} onChange={handleBrokerCityBranch}>
                                <option value="">Select Nearest City Branch</option>
                                {
                                    citiesDropdown.map((item) => {
                                        return <option key={item.id} value={item.leadCity}>{item.leadCity}</option>;
                                    })
                                }
                            </Form.Select> */}
                            <Select ref={selectInputRef}
                                placeholder={SubBrokerLanguageContent.getContent(props.language ? props.language : 'en', 'citylbl', 'Search Nearest City Branch')} className="formcontrol formpadding" searchable={true} options={citiesDropdown} labelField="leadCity" valueField="leadCity" onChange={handleBrokerCityBranch} loading={loaders.citiesLoader} values={brokerCityBranch} style={{ 'fontSize': 'large' }} noDataLabel={noDataLabel} noDataRenderer={renderNoDataLabel} />
                            {
                                errors.brokerCityBranch.required ? <small className="text-danger">{SubBrokerLanguageContent.getContent(props.language ? props.language : 'en', 'citylblerror1', 'Nearest City Branch is required')}</small> : ''
                            }

                        </div>
                        {
                            showState ?
                                <div className="sub-formgrp">
                                    {/* <Form.Select placeholder="Search State" className="formcontrol formpadding" isInvalid={errors.brokerState.required} value={brokerState} onChange={handleBrokerState}>
                                        <option value="">Select State</option>
                                        {
                                            statesDropdown.map((item) => {
                                                return <option key={item.id} value={item.stateName}>{item.stateName}</option>;
                                            })
                                        }
                                    </Form.Select> */}
                                    <Select placeholder={SubBrokerLanguageContent.getContent(props.language ? props.language : 'en', 'statelbl', 'Search State')} className="formcontrol formpadding" searchable={true} options={statesDropdown} labelField="stateName" valueField="stateName" onChange={handleBrokerState} loading={loaders.stateLoader} value={brokerState} style={{ 'fontSize': 'large' }} />
                                    {
                                        errors.brokerState.required ? <small className="text-danger">{SubBrokerLanguageContent.getContent(props.language ? props.language : 'en', 'statelblerror1', 'State is required')}</small> : ''
                                    }
                                </div> : ''
                        }
                        <div className="sub-formgrp cust-checkbox">
                            <Form.Check
                                inline
                                name="terms_and_conditions"
                                type="checkbox"
                                id="terms_and_conditions"
                            >
                            
                                <Form.Check.Input type="checkbox" checked readOnly />
                                
                            <Form.Check.Label>{SubBrokerLanguageContent.getContent(props.language ? props.language : 'en', 'term1', 'I agree & accept ')} <a className="link-tc" onClick={handleTermsConditionShow}>{SubBrokerLanguageContent.getContent(props.language ? props.language : 'en', 'termconditionlink', 'T&C')}</a> {SubBrokerLanguageContent.getContent(props.language ? props.language : 'en', 'term2', '')} </Form.Check.Label>
                                
                            </Form.Check>
                        </div>


                        <div className="sub-formgrp mt-5 mb-0">
                            <Button variant="primary"
                                type="button" className="btn-bg btn-bg-dark sendbtn" disabled={loaders.sendOTPLoader} onClick={handleSendOTP}>
                                {loaders.sendOTPLoader ? <div className="loaderB mx-auto"></div> : SubBrokerLanguageContent.getContent(props.language ? props.language : 'en', 'sendotpbtn', 'Send OTP')}
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
                        </div>

                        
                    </Form.Group>
                </Form>

            </div>
            {
                showOTPPopup ?
                    //     <div className="exit-intent-sleekbox-overlay sleekbox-popup-active">
                    //     <div className="exit-intent-sleekbox-popup">
                    //         <div className="popup-sub-row">
                    //         <div className="close">
                    //                 <a href="javascript:void(0)" onClick={handleOTPPopupClose} className="closebtn" >&times;</a>
                    //                 </div>
                    //             <div className="popup-sub-right">

                    //                 <div>
                    //                     <img src={OTPimage} alt='OTP Image' />

                    //                     <p className="heading">{SubBrokerLanguageContent.getContent(props.language ? props.language : 'en', 'otppopuptitle', 'OTP Verification')}</p>
                    //                     <p className="subheading">{SubBrokerLanguageContent.getContent(props.language ? props.language : 'en', 'otppopupinfo', 'A OTP has been sent to')} {'******' + brokerMobileNumber.slice(6, 10)}</p>
                    //                     {
                    //                         count ?
                    //                             <p className="time">{SubBrokerLanguageContent.getContent(props.language ? props.language : 'en', 'otppopuptimeremaining', 'Time remaining:')}<span> {count} seconds</span></p> : ''
                    //                     }

                    //                 </div>
                    //                 <div>


                    //                     <Form.Control className=" form-control form-control-lg digit-otp text-center" type="text" id="subBrokerOTP" placeholder="Enter OTP" autoComplete="one-time-code" maxLength="4" isInvalid={OTPErrors} value={otp} onChange={(e) => handleOTP(e)} />
                    //                     {
                    //                         OTPErrors ? <Form.Control.Feedback type="invalid">{OTPErrors}</Form.Control.Feedback> : ''
                    //                     }
                    //                 </div>

                    //                 <div className="btnwrap">
                    //                     <button className="btn-bg" disabled={loaders.verifyLoader || loaders.addLeadLoader} onClick={verifyOTP}>{(loaders.verifyLoader || loaders.addLeadLoader) ? <div className="dotLoaderB"></div> : SubBrokerLanguageContent.getContent(props.language ? props.language : 'en', 'otppopupbtn', 'verify')}</button>
                    //                 </div>
                    //                 <div className="">

                    //                     {
                    //                         !count ?
                    //                             <button className="resend" onClick={() => sendOTP(true)}>{loaders.resendOTPLoader ? <div className="dotLoaderB colorB marginLoader"></div> : SubBrokerLanguageContent.getContent(props.language ? props.language : 'en', 'otppopupresend', 'Resend OTP')}</button> : ''
                    //                     }


                    //                 </div>
                    //                 <div className="mt-2">
                    //                     {
                    //                         OTPSendSuccessToaster ?
                    //                             <Alert key='success' variant='success' onClose={() => setOTPSendSuccessToaster(false)} dismissible>
                    //                                 {SubBrokerLanguageContent.getContent(props.language ? props.language : 'en', 'otptoastermsg', 'OTP has been resent on given Mobile Number')}
                    //                             </Alert> : ''
                    //                     }
                    //                 </div>
                    //             </div>
                    //         </div>
                    //     </div>
                    // </div> 

                    <Modal show={show} className="bt-strap-mdl " backdrop='static' keyboard={false} onHide={handleOTPPopupClose}>
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

                                                <p className="heading">{SubBrokerLanguageContent.getContent(props.language ? props.language : 'en', 'otppopuptitle', 'OTP Verification')}</p>
                                                <p className="subheading">{SubBrokerLanguageContent.getContent(props.language ? props.language : 'en', 'otppopupinfo', 'A OTP has been sent to')} {'******' + brokerMobileNumber.slice(6, 10)}</p>
                                                {
                                                    count ?
                                                        <p className="time">{SubBrokerLanguageContent.getContent(props.language ? props.language : 'en', 'otppopuptimeremaining', 'Resend OTP in:')}<span> {count} seconds</span></p> : ''
                                                }

                                            </div>
                                            <div>


                                                <Form.Control className=" form-control form-control-lg digit-otp text-center" type="tel" id="subBrokerOTP" placeholder="Enter OTP" autoComplete="one-time-code" maxLength="6" isInvalid={OTPErrors} value={otp} onChange={(e) => handleOTP(e)} />
                                                {
                                                    OTPErrors ? <Form.Control.Feedback type="invalid">{OTPErrors}</Form.Control.Feedback> : ''
                                                }
                                            </div>

                                            <div className="btnwrap">
                                                <button className="btn-bg" disabled={loaders.verifyLoader || loaders.addLeadLoader} onClick={verifyOTP}>{(loaders.verifyLoader || loaders.addLeadLoader) ? <div className="dotLoaderB"></div> : SubBrokerLanguageContent.getContent(props.language ? props.language : 'en', 'otppopupbtn', 'Verify')}</button>
                                            </div>
                                            <div className="">

                                                {
                                                    !count ?
                                                        <div className="d-flex align-items-center justify-content-center">
                                                            <button className="resend" onClick={() => resendOTP(true)}>{loaders.resendOTPLoader ? <div className="dotLoaderB colorB marginLoader"></div> : SubBrokerLanguageContent.getContent(props.language ? props.language : 'en', 'otppopupresend', 'Resend OTP')}</button>
                                                            <span className="ortext">{SubBrokerLanguageContent.getContent(props.language ? props.language : 'en', 'otppopupresend', 'OR')}</span>
                                                            <button className="resend" onClick={getOTPOnCall}>{loaders.callOtpLoader ? <div className="dotLoaderB colorB marginLoader"></div> : SubBrokerLanguageContent.getContent(props.language ? props.language : 'en', 'otponcall', 'Get OTP on Call')}</button>
                                                        </div>
                                                       : ''
                                                        
                                                }


                                            </div>
                                            <div className="mt-2">
                                                {
                                                    (OTPSendSuccessToaster.otp || OTPSendSuccessToaster.call)?
                                                        <Alert key='success' variant='success' onClose={() => setOTPSendSuccessToaster(false)} dismissible>
                                                            {/* {SubBrokerLanguageContent.getContent(props.language ? props.language : 'en', 'otptoastermsg', 'OTP has been resent on given Mobile Number')} */}
                                                            {
                                                            (OTPSendSuccessToaster.call)?  SubBrokerLanguageContent.getContent(props.language ? props.language : 'en', 'otpresendsuccess1', 'You will soon receive an automated call on given Mobile Number'):SubBrokerLanguageContent.getContent(props.language ? props.language : 'en', 'otptoastermsg', 'OTP has been resent on given Mobile Number')
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
            <Modal show={showTermsCondition} onHide={handleTermsConditionClose} backdrop="static"
                keyboard={false} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{SubBrokerLanguageContent.getContent(props.language ? props.language : 'en', 'termstitle', 'Attention')}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{SubBrokerLanguageContent.getContent(props.language ? props.language : 'en', 'termscontent', "We are capturing this data for communication purpose only and it's stored securely. We protect your privacy like it's ours! By agreeing you are allowing us to send updates via SMS/WhatsApp/Email/Call which will also override & will not be termed as violation of DND.")}</Modal.Body>
                {/* <Modal.Footer>
                    <Button variant="primary" onClick={handleTermsConditionClose}>
                    {SubBrokerLanguageContent.getContent(props.language ? props.language : 'en', 'termsbtn', 'Okay')}
                    </Button>
                </Modal.Footer> */}
            </Modal>
            <Modal show={showErrorToaster} onHide={hideAPIErrorToaster} backdrop="static"
                keyboard={false} centered>
                <Modal.Header>
                    <Modal.Title>Error</Modal.Title>
                </Modal.Header>
                <Modal.Body>{APIError}</Modal.Body>
                <Modal.Footer>
                    <Button variant="warning" onClick={hideAPIErrorToaster}>
                        Okay
                    </Button>
                </Modal.Footer>
            </Modal>

            {
                showThanku.showModal?<Thankyoupopup isShow={showThanku} isBlog={'blog'} />: ''
            }

            {/* <Modal show={showOTPPopup} onHide={handleOTPPopupClose} backdrop="static"
                keyboard={false} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Enter OTP</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div id="opt-box-id">
                        <div className="modal-body opt-body">
                            A OTP has been sent to {'******' + brokerMobileNumber.slice(6, 10)}
                            <Form.Control className="w-50 form-control form-control-lg mx-auto text-center" type="text" id="subBrokerOTP" placeholder="Enter OTP" autoComplete="one-time-code" maxLength="6" isInvalid={OTPErrors} value={otp} onChange={(e) => handleOTP(e)} />
                            {
                                OTPErrors ? <Form.Control.Feedback type="invalid">{OTPErrors}</Form.Control.Feedback> : ''
                            }
                            <div className="modal-footer otp-modal-footer">
                                <button className="btn btn-primary verify-btn" disabled={loaders.verifyLoader || loaders.addLeadLoader} onClick={verifyOTP}>{(loaders.verifyLoader || loaders.addLeadLoader) ? <div className="dotLoaderB"></div> : 'Verify'}</button>
                            </div>
                            <div className="modal-otp-links">
                                {
                                    count ?
                                        <p className="didnt-text">Didn't receive the OTP?<small className="timer-text">Resend in {count} seconds</small></p> :
                                        <div className="btm-div">
                                            <p className="resend-text" onClick={() => sendOTP(true)}>{loaders.resendOTPLoader ? <div className="dotLoaderB colorB marginLoader"></div> : 'Resend OTP'}</p>
                                        </div>
                                }


                            </div>
                            {
                                OTPSendSuccessToaster ? 
                                <Alert key='success' variant='success' onClose={() => setOTPSendSuccessToaster(false)} dismissible>
                                OTP has been resent on given Mobile Number
                            </Alert> : ''
                            }
                            
                        </div>
                    </div>
                </Modal.Body>
            </Modal> */}

            {/* <Modal show={brokerCreatedSuccess} onHide={handleBrokerCreatedSuccessClose} backdrop="static"
                keyboard={false} centered>
                <Modal.Header>
                    <Modal.Title>Success</Modal.Title>
                </Modal.Header>
                <Modal.Body>Created Successfully</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleBrokerCreatedSuccessClose}>
                        Okay
                    </Button>
                </Modal.Footer>
            </Modal> */}

        </>
    );
}

export default SubBrokerForm;
