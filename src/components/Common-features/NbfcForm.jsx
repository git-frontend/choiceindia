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
import NbfcService from "../../Services/NbfcService";
import failureimg from '../../assets/images/failure.svg';
function nbfcForm(props) {

    // words: /^([A-z-\s\'\.]*)*$/g,
    // email: /^[A-Za-z0-9._%+-@.]*$/g,
    /**Regex for Name*/
    const nameRegex = /^(?!.*[\s]{2,})(?!.*[\.]{2,})(?!.*[\']{2,})(?!.*[\-]{2,})(?=.{2,}$)(([A-Za-z\.\'\- ])\2?(?!\2))+$/;
    const mobileRegex = /^(6|9|8|7)([0-9]{9})$/i;
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})$/;
    const [brokerName, setBrokerName] = useState('');
    const [lastName, setLastName] = useState('');
    const [brokerMobileNumber, setBrokerMobileNumber] = useState('');
    const [brokerEmail, setBrokerEmail] = useState('');
    const [brokerCityBranch, setBrokerCityBranch] = useState('');
    const [brokerState, setBrokerState] = useState('');
    const [showState, setShowState] = useState(false);
    const [errors, setErrors] = useState({ 'brokerName': {}, 'brokerMobileNumber': {}, 'lastName': {}});
    const [showTermsCondition, setShowTermsCondition] = useState(false);
    const [loaders, setLoaders] = useState({});
    const [showOTPPopup, setShowOTPPopup] = useState(false);
    const [APIError, setAPIError] = useState('');
    const [showErrorToaster, setShowErrorToaster] = useState(false);
    const [citiesDropdown, setCitiesDropdown] = useState([]);
    const [msg, setmsg] = useState();
    const [otp, setOtp] = useState('');
    const [OTPErrors, setOTPErrors] = useState('');
    const [count, setCount] = useState(0);
    const [OTPSendSuccessToaster, setOTPSendSuccessToaster] = useState(false);
    const [brokerCreatedSuccess, setBrokerCreatedSuccess] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const [show, setShow] = useState(true);
    const [showOpenAccountPopup, setShowOpenAccountPopup] = useState(false);
    const [fablesDetailTitleId, setFablesDetailTitleId] = useState(true);
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
    const [captchaTokenre, setCaptchaTokenre] = useState('');
    const [captchaToken, setCaptchaToken] = useState('');
    const { executeRecaptcha } = useGoogleReCaptcha();
    let type=(window.location.pathname.indexOf('channel-financing') > -1) ? 'supply_chain':(window.location.pathname.indexOf('commercial-vehicle-loan') > -1) ? 'vehicle_loan':(window.location.pathname.indexOf('flexi-credit-loan') > -1) ? 'od_loan':(window.location.pathname.indexOf('invoice-financing') > -1) ? 'supply_chain':(window.location.pathname.indexOf('individual-loan') > -1) ? 'od_loan':(window.location.pathname.indexOf('business-loan') > -1) ? 'od_loan':(window.location.pathname.indexOf('term-business-loan') > -1) ? ' term_loan':"";

    /** state to show thankyou popup default */
    const [showThanku, setShowThanku] = useState({ showModal: false, page: 'no-addlead', resText: '', isOnboarding: '' });

    function isMobileDevice() {
        return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
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

    function handleLastName(e) {
        let value = e.target.value.replace(/([^A-z-\s\'\.]*)*/g, "");
        setLastName(value);
        setErrors((prevError) => ({
            ...prevError,
            'lastName': {}
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

    

 

    function handleSendOTP(e) {
       e == 'resend'? setmsg(e): e.preventDefault();
       
        
        console.log("check")

        let isBrokerNameValid, isBrokerMobileNumberValid,isBrokerLastNameValid = false;
        //brokerName Validation
        isBrokerNameValid = validateBrokerName(brokerName, false);
        //brokerMobileNumber Validation
        isBrokerMobileNumberValid = validateBrokerMobileNumber(brokerMobileNumber, false);
        //LastName Validation
        isBrokerLastNameValid = validateLastName(lastName, false);
        //brokerCityBranch Validation
       
        //brokerState Validation
       
        if (isBrokerNameValid && isBrokerMobileNumberValid && isBrokerLastNameValid) {
            // sendOTP(false);
            handleCaptchaVerify()
            setTimeout(()=>{
                handleReCaptchaVerify()
              },10)
            
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
    function validateLastName(lastName, fromUseEffect) {
        let isBrokerLastNameValid = false;
        if (!lastName.length) {
            if (!fromUseEffect) {
                setErrors((prevError) => ({
                    ...prevError,
                    'lastName': { 'required': true }
                }));
            }
        } else if (lastName.length && !nameRegex.test(lastName)) {
            if (!fromUseEffect) {
                setErrors((prevError) => ({
                    ...prevError,
                    'lastName': { 'invalid': true }
                }));
            }
        } else if (lastName.length && nameRegex.test(lastName)) {
            isBrokerLastNameValid = true;
        }
        return isBrokerLastNameValid;
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

     // Create an event handler so you can call the verification on button click event or form submit
     const handleCaptchaVerify = useCallback(async () => {
        if (!executeRecaptcha) {
            return;
        }
        showLoader('sendOTPLoader');
        const token = await executeRecaptcha('resendOTP');
        // Do whatever you want with the token
        // sendOTP();
        if (token) {
            setCaptchaTokenre(token);
            // alert("Token : "+token);
        }
      
    }, [executeRecaptcha]);

    

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
        
    }, [executeRecaptcha]);

    useEffect(() => {
        if (captchaToken) {
            msg == 'resend'?sendOTP(true):sendOTP(false);
            
        }
    }, [captchaToken]);

    useEffect(() => {
        fetchQueryParams();
    }, []);


    useEffect(() => {
        checkWebOTP();
    }, [loaders.resendOTPLoader || loaders.sendOTPLoader]);

    function checkWebOTP() {
        if ('OTPCredential' in window) {
            const input = document.getElementById('subBrokerOTP').value;
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
        isResend? nbfcResend(true) :nbfcsendOtp(false)
   
    }

    function nbfcsendOtp(){
        showLoader('sendOTPLoader');
        let request = {
            "product": 'NBFC',
            "name":brokerName+" "+lastName,
            "mobile_number": brokerMobileNumber,
            "captchaResp": captchaToken,
            
        };
        let request1 = {
            "product": 'NBFC',
            "user_name": brokerMobileNumber,
            "captchaResp": captchaTokenre,
            
        };

        
        NbfcService.mobileduplicate(brokerMobileNumber).then(res =>{
            
            if(res.data.Body.mobile_exist == true){
              
                NbfcService.login(request1).then(res =>{
           
                    
            if (res && res.data && res.data.Body) {
                hideLoader('sendOTPLoader');
                otpSessionID.current = res.data.Body.session_id;
                resetOTPPopup()
                handleOTPPopupShow();
               
            } else {
                hideLoader('sendOTPLoader');
                    setAPIError((res.data && res.data.Body && res.data.Body.message) ? res.data.Body.message : "Something went wrong, please try again later!");
                    showAPIErrorToaster();
                }
            
        }).catch((error) => {
            // console.log(error, "sendOTP error");
            hideLoader('sendOTPLoader');
        
                if (error && error.response && error.response.data && error.response.data.message) {
                    setAPIError(error.response.data.message);
                } else {
                    setAPIError("Something went wrong, please try again later!");
                }
                showAPIErrorToaster();
        
        });
    }else{
       
        NbfcService.register(request).then(res =>{
            
                NbfcService.login(request1).then(res =>{
                   
                    if (res && res.data && res.data.Body) {
                        hideLoader('sendOTPLoader');
                        otpSessionID.current = res.data.Body.session_id;
                        resetOTPPopup()
                        handleOTPPopupShow();
                        
                    } else {
                        hideLoader('sendOTPLoader');
                            setAPIError((res.data && res.data.Body && res.data.Body.message) ? res.data.Body.message : "Something went wrong, please try again later!");
                            showAPIErrorToaster();
                        
                    }
                }).catch((error) => {
                    // console.log(error, "sendOTP error");
                    hideLoader('sendOTPLoader');
                     
                        if (error && error.response && error.response.data && error.response.data.message) {
                            setAPIError(error.response.data.message);
                        } else {
                            setAPIError("Something went wrong, please try again later!");
                        }
                        showAPIErrorToaster();
                    
                });

            })
        
    }
})
    }

    function nbfcResend(){
        hideLoader('resendOTPLoader');
        let request = {
            "mobile_no":brokerMobileNumber,
            "old_session_id":otpSessionID.current,
            "captchaResp": captchaToken
            
        };
        NbfcService.resend(request).then(res =>{
            // console.log(res, "sendOTP");
            hideLoader('resendOTPLoader');
            if (res && res.data && res.data.Body) {
                otpSessionID.current = res.data.Body.session_id;
                resetOTPPopup()
                // if (!isResend)
                resetOTPPopup();
                
               
                    handleOTPResendSuccessToaster();
            } else {
               
                    setOTPErrors((res.data && res.data.Body && res.data.Body.message) ? res.data.Body.message: SubBrokerLanguageContent.getContent(props.language ? props.language : 'en', 'otperror2', "Something went wrong, please try again later!"));
                
            }
        }).catch((error) => {
            // console.log(error, "sendOTP error");
            hideLoader('resendOTPLoader');
           
                if (error && error.response && error.response.data && error.response.data.message) {
                    setOTPErrors(error.response.data.message);
                } else {
                    setOTPErrors(SubBrokerLanguageContent.getContent(props.language ? props.language : 'en', 'otperror2', "Something went wrong, please try again later!"));
                }
        
        });

    }

    function NbfcLead() {
        let request = {
            "data":{
            "firstName"  :brokerName,
            "middleName" :"",
            "lastName" :lastName,
            "phoneNo" :brokerMobileNumber,
            "emailId": "kprasadideal@gmail.com",
            "userId" : "",
            "userName" : "",
            "dsaId" : "113",
            "dsaName" : "abc"

            }
            
    
        };
        showLoader('addLeadLoader');
        NbfcService.nbfcLead(request,type).then((res) => {
            hideLoader('addLeadLoader');
            // console.log(res, "addNewLead");
            if (res && res.data && !res.data.errorCode) {
              //  console.log('TTT',res);
                handleOTPPopupClose();
                handleBrokerCreatedSuccessShow();
               
                setShowThanku(prevState => {
                    return { ...prevState, showModal: true,resText:'Lead added successfully', closeMd: closeModal }
                });
                resetBrokerForm();
            } else {
                // setAPIError((res.data && res.data.message) ? res.data.message : "Something went wrong, please try again later!");
                // showAPIErrorToaster();
                setOTPErrors((res.data && res.data.message) ? res.data.message : SubBrokerLanguageContent.getContent(props.language ? props.language : 'en', 'otperror2', "Something went wrong, please try again later!"));
                showAPIErrorToaster();
            }

        }).catch((error) => {
            hideLoader('addLeadLoader');
            console.log("error",error.response.data.message)
            handleOTPPopupClose();
            // // console.log(error, "addNewLead error");
            if (error && error.response && error.response.data && error.response.data.message) {
                setAPIError(error.response.data.message);
            } else {
                setAPIError("Something went wrong, please try again later!");
            }
            showAPIErrorToaster();
           
            // setOTPErrors((error && error.response && error.response.data && error.response.data.message) ? error.response.data.message : SubBrokerLanguageContent.getContent(props.language ? props.language : 'en', 'otperror2', "Something went wrong, please try again later!"));
            
            
        });
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
            NbfcService.nbfcVerifyOTP(request).then((res) => {
                hideLoader('verifyLoader');
             
                // console.log(res, "verifyOTPN");
                if (res && res.data) {
                    NbfcLead()
                 
                } else {
                    setOTPErrors((res.data && res.message) ? res.message : SubBrokerLanguageContent.getContent(props.language ? props.language : 'en', 'otperror2', "Something went wrong, please try again later!"));
                }
            }).catch((error) => {
               
                hideLoader('verifyLoader');
                console.log(error.response.data.Message, "verifyOTPN error");
                setOTPErrors((error && error.response && error.response.data && error.response.data.Message) ? error.response.data.Message : SubBrokerLanguageContent.getContent(props.language ? props.language : 'en', 'otperror2', "Something went wrong, please try again later!"));
            });
        }
    }


    /**to hide thank you popup */
    function closeModal() {
        setShowThanku(prevState => {
            return { ...prevState, showModal: false}
        });
    }

    function handleOTPResendSuccessToaster() {
        setOTPSendSuccessToaster(true);
        setTimeout(() => {
            setOTPSendSuccessToaster(false);
        }, 2000)
    }
    const selectInputRef = useRef();
    function resetBrokerForm() {
        setBrokerName('');
        setLastName('');
        setBrokerMobileNumber('');
        setBrokerEmail('');
        selectInputRef.current.clearAll();
        setBrokerCityBranch("");
        setBrokerState('');
        setShowState(false);
        setErrors({ 'brokerName': {}, 'brokerMobileNumber': {}, 'lastName': {} });
        setLoaders({});
        setOtp('');
        setOTPErrors('');
    }
    function handleOTPShow() {
        setShowOTP(true);
    }

    return (
        <>
         
            <div className="demat-account-form" id="nbfcform">


                {
                    (brokerCreatedSuccess) ?
                        <Alert key='success' variant='success' className={(window.location.pathname.indexOf('sub-broker-franchise') > -1) || (window.location.pathname.indexOf('authorised-person') > -1) || (window.location.pathname.indexOf('remisier') > -1) ? "sub-broker-success" : ""} onClose={handleBrokerCreatedSuccessClose} dismissible>{SubBrokerLanguageContent.getContent(props.language ? props.language : 'en', 'formsuccess', 'Successfully!')}</Alert> : ''
                }
                
                <h3 className="form-ttl">{SubBrokerLanguageContent.getContent(props.language ? props.language : 'en', 'title', 'Get a Call from us')}</h3>
                <Form>
                    <Form.Group className="mb-3 formgrp">

                        <div className="sub-formgrp">
                            {/* <Form.Control type="text" name="brokerName" placeholder="Name" className="formcontrol formpadding" /> */}
                            <Form.Control type="text" name="brokerName" id="brokerName" placeholder={SubBrokerLanguageContent.getContent(props.language ? props.language : 'en', 'namelbl', 'First Name')} className="formcontrol formpadding" autoComplete="off" isInvalid={errors.brokerName.invalid || errors.brokerName.required} value={brokerName} onChange={handleName} />
                            {
                                errors.brokerName.invalid ? <Form.Control.Feedback type="invalid">{SubBrokerLanguageContent.getContent(props.language ? props.language : 'en', 'namelblerror1', 'Invalid Name')}</Form.Control.Feedback> : ''
                            }
                            {
                                errors.brokerName.required ? <Form.Control.Feedback type="invalid">{SubBrokerLanguageContent.getContent(props.language ? props.language : 'en', 'namelblerror2', 'First Name is Required')}</Form.Control.Feedback> : ''
                            }
                        </div>
                        <div className="sub-formgrp">
                           
                            <Form.Control type="text" name="lastName" id="lastName" placeholder={SubBrokerLanguageContent.getContent(props.language ? props.language : 'en', 'namelbl', 'Last Name')} className="formcontrol formpadding" autoComplete="off" isInvalid={errors.lastName.invalid || errors.lastName.required} value={lastName} onChange={handleLastName} />
                            {
                                errors.lastName.invalid ? <Form.Control.Feedback type="invalid">{SubBrokerLanguageContent.getContent(props.language ? props.language : 'en', 'namelblerror1', 'Invalid Name')}</Form.Control.Feedback> : ''
                            }
                            {
                                errors.lastName.required ? <Form.Control.Feedback type="invalid">{SubBrokerLanguageContent.getContent(props.language ? props.language : 'en', 'namelblerror2', 'Last Name is Required')}</Form.Control.Feedback> : ''
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
                       
                        <div className="sub-formgrp cust-checkbox">
                            <Form.Check
                                inline
                                name="terms_and_conditions"
                                type="checkbox"
                                id="terms_and_conditions"
                            >
                            
                                <Form.Check.Input type="checkbox" checked readOnly />
                                
                            <Form.Check.Label>{SubBrokerLanguageContent.getContent(props.language ? props.language : 'en', 'term1', 'I agree that I have read & accept the ')} <a className="link-tc" onClick={handleTermsConditionShow}>{SubBrokerLanguageContent.getContent(props.language ? props.language : 'en', 'termconditionlink', 'Terms & Conditions')}</a> {SubBrokerLanguageContent.getContent(props.language ? props.language : 'en', 'term2', '')} </Form.Check.Label>
                                
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
                                                        <button className="resend" onClick={() => handleSendOTP('resend')}>{loaders.resendOTPLoader ? <div className="dotLoaderB colorB marginLoader"></div> : SubBrokerLanguageContent.getContent(props.language ? props.language : 'en', 'otppopupresend', 'Resend OTP')}</button> : ''
                                                }


                                            </div>
                                            <div className="mt-2">
                                                {
                                                    OTPSendSuccessToaster ?
                                                        <Alert key='success' variant='success' onClose={() => setOTPSendSuccessToaster(false)} dismissible>
                                                            {SubBrokerLanguageContent.getContent(props.language ? props.language : 'en', 'otptoastermsg', 'OTP has been resent on given Mobile Number')}
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
            <Modal className='common-modal-css common-modal-thankyou'
              show={showErrorToaster}
              size="md"
              aria-labelledby="contained-modal-title-vcenter"
              backdrop='static'
              keyboard={false}
              centered
              onHide={hideAPIErrorToaster}
            >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">

                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {
                  <img src={failureimg} height="80" width="80" alt='Failure' />
                }
                <h4>Oops</h4>
                <h3>
                  {APIError}
                </h3>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="warning" className='btn-yellow' onClick={hideAPIErrorToaster}>Ok</Button>
              </Modal.Footer>
            </Modal>

            {
                showThanku.showModal?<Thankyoupopup isShow={showThanku} />: ''
            }

            

        </>
    );
}

export default nbfcForm;
