import React, { useEffect, useState, useRef, useCallback } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';
import "../Common-features/demat-form.scss";
import subBrokerService from '../../Services/subBrokerService';
import { useSearchParams } from "react-router-dom";
import OTPimage from '../../assets/images/otp.svg';
import Select from 'react-dropdown-select';
import { Link } from "react-router-dom";
import SubBrokerLanguageContent from '../../Services/SubBrokerLanguageContent';
import { Ref } from "react";
import Thankyoupopup from "../Common-features/Thanku-popup";
import MutualFundStickyFooter from "../Mutual-Fund-Distributor/MutualFundStickyFooter";
import MutualFundpopupform from "../Common-features/MutualFundpopupform";
import openAccountService from "../../Services/openAccountService";
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

function SubBrokerForm(props) {
    // console.log("check",props)
    // words: /^([A-z-\s\'\.]*)*$/g,
    // email: /^[A-Za-z0-9._%+-@.]*$/g,
    /**Regex for Name*/
    const nameRegex = /^(?!.*[\s]{2,})(?!.*[\.]{2,})(?!.*[\']{2,})(?!.*[\-]{2,})(?=.{2,}$)(([A-Za-z\.\'\- ])\2?(?!\2))+$/;
    const mobileRegex = /^(6|9|8|7)([0-9]{9})$/i;
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})$/;
    const [brokerName, setBrokerName] = useState('');
    const [brokerMobileNumber, setBrokerMobileNumber] = useState('');
    const [brokerEmail, setBrokerEmail] = useState('');
    const [brokerCityBranch, setBrokerCityBranch] = useState('');
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
    const [captchaToken, setCaptchaToken] = useState('');
    const [show, setShow] = useState(true);
    const { executeRecaptcha } = useGoogleReCaptcha();
    var otpSessionID = useRef('');
    var UTMCampaign = useRef('');
    var UTMMedium = useRef('');
    var UTMSource = useRef('');
    var UTMTerm = useRef('');
    var UTMCustom = useRef('');
    var UTMContent = useRef('');
    var refercode = useRef('');
    const [isCheck, setisCheck] = useState(false);
    const [value, setValue] = useState('Details');
    const isBlog = (window.location.pathname.indexOf('blog') > -1) ? 'yes' : '';
    /** state to show thankyou popup default */
    const [showThanku, setShowThanku] = useState({ showModal: false, page: 'no-addlead', resText: '', isOnboarding: '' });
    const [fablesDetailTitleId, setFablesDetailTitleId] = useState(false);
    const [showOpenAccountPopup, setShowOpenAccountPopup] = useState(false);
    const onlyblog = (window.location.pathname.indexOf('blog') > -1) ? 'yes' : '';
    const [highlightForm, setHighlightForm] = useState(false);
    useEffect(() => {
        if(window.location.pathname.includes('blog') === true){
            props.newDematForm(false);
            }
        if (onlyblog) {
            setTimeout(() => {
                showOpenAccountAdPopup()
            }, 15000);
        }
    }, []);
    function showOpenAccountAdPopup() {
        // console.log('SHOWW!!!!')

        setShowOpenAccountPopup(true);

    }
    /**function executes to close the ad popup */
    function hideOpenAccountAdPopup(showAdValues) {

        setShowOpenAccountPopup(false);
        // callOpenAccountAdPopupAgain();
    }
    useEffect(() => {
        if (props.isFromFableDetails) {
            window.addEventListener("scroll", onScroll);

            return () => {
                window.removeEventListener("scroll", onScroll);
            };
        }
    }, [props.isFromFableDetails]);


    function onScroll() {
        let element = document.getElementById('fablesdetail-title');
        if (element) {

            const rect = element.getBoundingClientRect();

            setFablesDetailTitleId(
                rect.top < -300 &&//-609
                rect.left > 0 &&//109
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right < (window.innerWidth || document.documentElement.clientWidth) //1409
            );


        }

    }
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

    function handleBrokerCityBranch(e) {
        if (e[0]) {
            let value = e[0].leadCity;
            setBrokerCityBranch(value);
            // console.log("cc",brokerCityBranch)
            setErrors((prevError) => ({
                ...prevError,
                'brokerCityBranch': {}
            }));
            if (value === 'OTHERS') {
                setBrokerState('');
                setShowState(true);
            } else {
                setBrokerState('');
                setShowState(false);
            }
        }
    }

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
    //To send OTP
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

        if (isBrokerNameValid && isBrokerMobileNumberValid && isBrokerEmailValid) {
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
        }, 2000)
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

    function fetchCities() {
        showLoader('citiesLoader');
        subBrokerService.getCities().then((res) => {
            // console.log(res, "res cities");
            hideLoader('citiesLoader');
            if (res && res.status === 200 && res.data && res.data.StatusCode === 200 && res.data.Body && res.data.Body.CityMasterList) {
                setCitiesDropdown(res.data.Body.CityMasterList);
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
            } else if (res && res.status === 200 && res.data && res.data.errorCode && res.data.errorCode === "0008") {
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
            "leadCityName": 'OTHERS',
            "leadState": 'OTHERS', //FOR MF
            "leadSource": "CHOICEINDIA",
            // "messgae": '',
            "referredId": refercode.current || null,
            "serviceCode": "CBAMF",
            "utm_source": isBlog == "yes" ? UTMSource.current || 'mff_lead_generation' : UTMSource.current || null,
            "utm_medium": isBlog == "yes" ? UTMMedium.current || 'blog_leads' : UTMMedium.current || null,
            "utm_campaign": isBlog == "yes" ? UTMCampaign.current || 'choice_blog_leads' : UTMCampaign.current || null,
            "utm_term": UTMTerm.current || null,
            "utm_custom": UTMCustom.current || window.location.pathname.toString().replace('/', ''),
            "utm_content": isBlog == "yes" ? UTMContent.current || 'desktop_sticky_cta' : UTMContent.current || null,
            "whatsappConsent": true,
            "master_service_name": "CBA",
            "captchaResp": captchaToken
        };
        // console.log("new request",request)
        subBrokerService.sendOTPService(request,hideLoader,otpSessionID,resetOTPPopup,handleOTPPopupShow,handleOTPResendSuccessToaster,setOTPErrors,setAPIError,showAPIErrorToaster,isResend);
    }
 

    function addNewLead() {
        let request = {
            "firstName": brokerName,
            "mobileNo1": brokerMobileNumber,
            "emailId1": brokerEmail,
            "leadCityName": '',
            "leadSource": "CHOICEINDIA",
            "leadState": '',
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
                    return { ...prevState, showModal: true, resText: res.data.message ? res.data.message : 'Lead added successfully', closeMd: closeModal }
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
            return { ...prevState, showModal: false }
        });
        setHighlightForm(false)
    }
    //OTP resend success toaster
    function handleOTPResendSuccessToaster(type) {
        setOTPSendSuccessToaster({ [type]: true });
        setTimeout(() => {
            setOTPSendSuccessToaster({ [type]: false });
        }, 2000)
    }
    // const selectInputRef = useRef();
    function resetBrokerForm() {
        setBrokerName('');
        setBrokerMobileNumber('');
        setBrokerEmail('');
        // selectInputRef.current.clearAll();
        // setBrokerCityBranch("");
        // setBrokerState('');
        // setShowState(false);
        setErrors({ 'brokerName': {}, 'brokerMobileNumber': {}, 'brokerEmail': {}, 'brokerCityBranch': {}, 'brokerState': {} });
        setLoaders({});
        setOtp('');
        setOTPErrors('');
    }
    useEffect(() => {
        setHighlightForm(props.highlight);
        if(props.highlight && window.innerWidth > 992){
            document.getElementById("brokerName").focus();
        }
        else if (props.highlight && window.innerWidth <=992) {
            showOpenAccountAdPopup()
        }
    }, [props.highlight]);

return (
    <>
        {
            showOpenAccountPopup ? <MutualFundpopupform hideComponent={hideOpenAccountAdPopup} openInfoPopup={(msg) => triggerOTPInfoPopup(msg)} ></MutualFundpopupform> : ''
        }
        {
            (props.isFromFableDetails ? (props.isFooterVisible && fablesDetailTitleId) : props.isFooterVisible) ? <MutualFundStickyFooter MutualFundpopupform={showOpenAccountAdPopup} openInfoPopup={(msg) => triggerOTPInfoPopup(msg)} ></MutualFundStickyFooter> : ""
        }
        {
             (! props.isFromFableDetails  || window.innerWidth >= 992) && (
               
       
            <div id="sub-broker-form" className={`demat-account-form ${highlightForm ? 'newhighlight' : ''}`}>


            {
                (brokerCreatedSuccess) ?
                    <Alert key='success' variant='success' className={(window.location.pathname.indexOf('sub-broker-franchise') > -1) || (window.location.pathname.indexOf('authorised-person') > -1) || (window.location.pathname.indexOf('remisier') > -1) ? "sub-broker-success" : ""} onClose={handleBrokerCreatedSuccessClose} dismissible>{SubBrokerLanguageContent.getContent(props.language ? props.language : 'en', 'formsuccess', 'Successfully!')}</Alert> : ''
            }
            
            {/* <h3 className="form-ttl">Become a Mutual Fund Distributor</h3> */}
            
                <h3 className="form-ttl">{SubBrokerLanguageContent.getContent(props.language ? props.language : 'en', 'title', 'Become a MF Distributor')}</h3>
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
                    {/* <div className="sub-formgrp"> */}
                    {/* <Form.Control type="text" name="brokerCityBranch" placeholder="Search Nearest City Branch" className="formcontrol formpadding" /> */}
                    {/* <Form.Select placeholder="Search Nearest City Branch" className="formcontrol formpadding" isInvalid={errors.brokerCityBranch.required} value={brokerCityBranch} onChange={handleBrokerCityBranch}>
                                <option value="">Select Nearest City Branch</option>
                                {
                                    citiesDropdown.map((item) => {
                                        return <option key={item.id} value={item.leadCity}>{item.leadCity}</option>;
                                    })
                                }
                            </Form.Select> */}
                    {/* <Select ref={selectInputRef}
                                placeholder={SubBrokerLanguageContent.getContent(props.language ? props.language : 'en', 'citylbl', 'Search Nearest City Branch')} className="formcontrol formpadding" searchable={true} options={citiesDropdown} labelField="leadCity" valueField="leadCity" onChange={handleBrokerCityBranch} loading={loaders.citiesLoader} value={brokerCityBranch} style={{ 'fontSize': 'large' }} />
                            {
                                errors.brokerCityBranch.required ? <small className="text-danger">{SubBrokerLanguageContent.getContent(props.language ? props.language : 'en', 'citylblerror1', 'Nearest City Branch is required')}</small> : ''
                            }

                        </div> */}
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
                            <Form.Check.Label>{SubBrokerLanguageContent.getContent(props.language ? props.language : 'en', 'term1', 'I agree & accept ')} <a className="link-tc" onClick={handleTermsConditionShow}>{SubBrokerLanguageContent.getContent(props.language ? props.language : 'en', 'termconditionlink', 'T&C')}</a> {SubBrokerLanguageContent.getContent(props.language ? props.language : 'en', 'termconditionlink', '')} </Form.Check.Label>
                        </Form.Check>
                    </div>


                    <div className="sub-formgrp mt-3 mb-0">
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
                        </div>
                    </div>


                </Form.Group>
            </Form>
          
           

        </div>
          )
        }
        
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

                <Modal show={show} className="bt-strap-mdl otp-main-modal" backdrop='static' keyboard={false} onHide={handleOTPPopupClose}>
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
                                            <button className="btn-bg" disabled={loaders.verifyLoader || loaders.addLeadLoader} onClick={()=>{subBrokerService.verifyOTP1(otp,setOTPErrors,showLoader,hideLoader,fetchQueryParams,handleOTPPopupClose,handleBrokerCreatedSuccessShow,resetBrokerForm,setShowThanku,otpSessionID,closeModal,props)}}>{(loaders.verifyLoader || loaders.addLeadLoader) ? <div className="dotLoaderB"></div> : SubBrokerLanguageContent.getContent(props.language ? props.language : 'en', 'otppopupbtn', 'Verify')}</button>
                                        </div>
                                        <div className="">

                                            {
                                                !count ?

                                                    <div className="d-flex align-items-center justify-content-center">
                                                        <button className="resend" onClick={() => subBrokerService.resendOTPService(true,showLoader,hideLoader,otpSessionID,resetOTPPopup,handleOTPResendSuccessToaster,setOTPErrors,SubBrokerLanguageContent,props,brokerMobileNumber)}>{loaders.resendOTPLoader ? <div className="dotLoaderB colorB marginLoader"></div> : SubBrokerLanguageContent.getContent(props.language ? props.language : 'en', 'otppopupresend', 'Resend OTP')}</button>
                                                        <span className="ortext">{SubBrokerLanguageContent.getContent(props.language ? props.language : 'en', 'otppopupresend', 'OR')}</span>
                                                        <button className="resend" onClick={()=>{subBrokerService.getOTPOnCallService(showLoader,brokerMobileNumber,otpSessionID,openAccountService,hideLoader,resetOTPPopup,handleOTPResendSuccessToaster,setOTPErrors)}}>{loaders.callOtpLoader ? <div className="dotLoaderB colorB marginLoader"></div> : SubBrokerLanguageContent.getContent(props.language ? props.language : 'en', 'otponcall', 'Get OTP on Call')}</button>
                                                    </div> : ''
                                            }


                                        </div>
                                        <div className="mt-2">
                                            {
                                                (OTPSendSuccessToaster.otp || OTPSendSuccessToaster.call) ?
                                                    <Alert key='success' variant='success' onClose={() => setOTPSendSuccessToaster(false)} dismissible>
                                                        {
                                                            (OTPSendSuccessToaster.call) ? SubBrokerLanguageContent.getContent(props.language ? props.language : 'en', 'otpresendsuccess1', 'You will soon receive an automated call on given Mobile Number') : SubBrokerLanguageContent.getContent(props.language ? props.language : 'en', 'otptoastermsg', 'OTP has been resent on given Mobile Number')
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
            showThanku.showModal ? <Thankyoupopup isShow={showThanku} /> : ''
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
