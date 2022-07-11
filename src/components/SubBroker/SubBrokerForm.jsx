import React, { useEffect, useState, useRef } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';
import "../Common-features/demat-form.scss"
import subBrokerService from '../../Services/subBrokerService';
import { useSearchParams } from "react-router-dom";
import OTPimage from '../../assets/images/otp.svg';

function DematAccountForm() {

    // words: /^([A-z-\s\'\.]*)*$/g,
    // email: /^[A-Za-z0-9._%+-@.]*$/g,
    /**Regex for Name*/
    const nameRegex = /^(?!.*[\s]{2,})(?!.*[\.]{2,})(?!.*[\']{2,})(?!.*[\-]{2,})(?=.{2,}$)(([A-Za-z\.\'\- ])\2?(?!\2))+$/;
    const mobileRegex = /^(6|9|8|7)([0-9]{9})$/i;
    const emailRegex = /^[A-Za-z0-9._%+-]{1,}@[a-zA-Z-]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})$/;
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
    const [OTPSendSuccessToaster, setOTPSendSuccessToaster] = useState(false);
    const [brokerCreatedSuccess, setBrokerCreatedSuccess] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    var otpSessionID = useRef('');
    var UTMCampaign = useRef('');
    var UTMMedium = useRef('');
    var UTMSource = useRef('');
    var refercode = useRef('');

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

    function handleBrokerCityBranch(e) {
        let value = e.target.value;
        setBrokerCityBranch(value);
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

    function handleBrokerState(e) {
        let value = e.target.value;
        setBrokerState(value);
        setErrors((prevError) => ({
            ...prevError,
            'brokerState': {}
        }));
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
            console.log("All Good");
            sendOTP(false);
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
        subBrokerService.getCities().then((res) => {
            console.log(res, "res cities");
            if (res && res.status === 200 && res.data && res.data.StatusCode === 200 && res.data.Body && res.data.Body.CityMasterList) {
                setCitiesDropdown(res.data.Body.CityMasterList);
            } else {
                setCitiesDropdown([]);
            }
        }).catch((error) => {
            console.log(error, "error cities");
            setCitiesDropdown([]);
        });
    }

    function fetchState() {
        subBrokerService.getStates().then((res) => {
            console.log(res, "res states");
            if (res && res.status === 200 && res.data && res.data.StatusCode === 200 && res.data.Body && res.data.Body.StateMasterList) {
                setStatesDropdown(res.data.Body.StateMasterList);
            } else {
                setStatesDropdown([]);
            }
        }).catch((error) => {
            console.log(error, "error states");
            setStatesDropdown([]);
        });
    }

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

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            let isBrokerNameValid = validateBrokerName(brokerName, true);
            let isBrokerMobileNumberValid = validateBrokerMobileNumber(brokerMobileNumber, true);
            let isBrokerEmailValid = validateBrokerEmail(brokerEmail, true);
            if (isBrokerNameValid && (isBrokerMobileNumberValid || isBrokerEmailValid)) {
                console.log(brokerName, "brokerName");
                checkExistence();
                // Send Axios request here
            }
        }, 700)
        return () => clearTimeout(delayDebounceFn)
    }, [brokerName]);

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            let isBrokerNameValid = validateBrokerName(brokerName, true);
            let isBrokerMobileNumberValid = validateBrokerMobileNumber(brokerMobileNumber, true);
            let isBrokerEmailValid = validateBrokerEmail(brokerEmail, true);
            if (isBrokerNameValid && (isBrokerMobileNumberValid || isBrokerEmailValid)) {
                console.log(brokerMobileNumber, "brokerMobileNumber");
                checkExistence();
                // Send Axios request here
            }
        }, 700)
        return () => clearTimeout(delayDebounceFn)
    }, [brokerMobileNumber]);

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            let isBrokerNameValid = validateBrokerName(brokerName, true);
            let isBrokerMobileNumberValid = validateBrokerMobileNumber(brokerMobileNumber, true);
            let isBrokerEmailValid = validateBrokerEmail(brokerEmail, true);
            if (isBrokerNameValid && (isBrokerMobileNumberValid || isBrokerEmailValid)) {
                console.log(brokerEmail, "brokerEmail");
                checkExistence();
                // Send Axios request here
            }
        }, 700);
        return () => clearTimeout(delayDebounceFn)
    }, [brokerEmail]);

    useEffect(() => {
        if ('OTPCredential' in window) {
            const input = document.getElementById('subBrokerOTP');
            if (!input) return;
            const ac = new AbortController();
            navigator.credentials.get({
                otp: { transport: ['sms'] },
                signal: ac.signal
            }).then(otp => {
                setOtp(otp.code);
                verifyOTP();
            }).catch(err => {
                console.log(err);
            });
        }
    }, []);

    function checkExistence() {
        let isBrokerMobileNumberValid = validateBrokerMobileNumber(brokerMobileNumber, true);
        let isBrokerEmailValid = validateBrokerEmail(brokerEmail, true);
        let request = {
            "serviceCode": "CBAEF",
            "firstName": brokerName,
            "mobileNum": brokerMobileNumber,
            "emailID": brokerEmail
        };
        if (!isBrokerMobileNumberValid)
            delete request.mobileNum;
        if (!isBrokerEmailValid)
            delete request.emailID;
        subBrokerService.checkExistence(request).then((res) => {
            console.log(res, "checkExistence");
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
            }
        }).catch((error) => {
            console.log(error, "checkExistence error");
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

    function sendOTP(isResend) {
        showLoader(isResend ? 'resendOTPLoader' : 'sendOTPLoader');
        subBrokerService.sendOTP(brokerMobileNumber).then((res) => {
            console.log(res, "sendOTP");
            hideLoader(isResend ? 'resendOTPLoader' : 'sendOTPLoader');
            if (res && res.data && !res.data.errorCode) {
                otpSessionID.current = res.data.id;
                // if (!isResend)
                    resetOTPPopup();
                if (!isResend)
                    handleOTPPopupShow();
                if(isResend)
                    handleOTPResendSuccessToaster();
            } else {
                if (isResend) {
                    setOTPErrors((res.data && res.data.message) ? res.data.message : "Something went wrong, please try again later!");
                } else {
                    setAPIError((res.data && res.data.message) ? res.data.message : "Something went wrong, please try again later!");
                    showAPIErrorToaster();
                }
            }
        }).catch((error) => {
            console.log(error, "sendOTP error");
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

    function verifyOTP() {
        if (!otp.length) {
            setOTPErrors('OTP is required');
        } else {
            showLoader('verifyLoader');
            subBrokerService.verifyOTPN(otp, otpSessionID.current).then((res) => {
                hideLoader('verifyLoader');
                console.log(res, "verifyOTPN");
                if (res && res.data && !res.data.errorCode) {
                    fetchQueryParams();
                    addNewLead();
                } else {
                    setOTPErrors((res.data && res.data.message) ? res.data.message : "Something went wrong, please try again later!");
                }
            }).catch((error) => {
                hideLoader('verifyLoader');
                console.log(error, "verifyOTPN error");
                setOTPErrors((error.data && error.data.message) ? error.data.message : "Something went wrong, please try again later!");
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
            "utm_term": null,
            "utm_custom": null,
            "utm_content": null
        };
        showLoader('addLeadLoader');
        subBrokerService.addNewLead(request).then((res) => {
            hideLoader('addLeadLoader');
            console.log(res, "addNewLead");
            if (res && res.data && !res.data.errorCode) {
                handleOTPPopupClose();
                handleBrokerCreatedSuccessShow();
                resetBrokerForm();
            } else {
                // setAPIError((res.data && res.data.message) ? res.data.message : "Something went wrong, please try again later!");
                // showAPIErrorToaster();
                setOTPErrors((res.data && res.data.message) ? res.data.message : "Something went wrong, please try again later!");
            }

        }).catch((error) => {
            hideLoader('addLeadLoader');
            console.log(error, "addNewLead error");
            // if (error && error.response && error.response.data && error.response.data.message) {
            //     setAPIError(error.response.data.message);
            // } else {
            //     setAPIError("Something went wrong, please try again later!");
            // }
            // showAPIErrorToaster();
            setOTPErrors((error.data && error.data.message) ? error.data.message : "Something went wrong, please try again later!");
        });
    }

    function handleOTPResendSuccessToaster(){
        setOTPSendSuccessToaster(true);
        setTimeout(()=>{
            setOTPSendSuccessToaster(false);
        },2000)
    }

    function resetBrokerForm() {
        setBrokerName('');
        setBrokerMobileNumber('');
        setBrokerEmail('');
        setBrokerCityBranch('');
        setBrokerState('');
        setShowState(false);
        setErrors({ 'brokerName': {}, 'brokerMobileNumber': {}, 'brokerEmail': {}, 'brokerCityBranch': {}, 'brokerState': {} });
        setLoaders({});
        setOtp('');
        setOTPErrors('');
    }

    return (
        <>
            <div className="demat-account-form">

                <h3 className="form-ttl">Become a Sub Broker</h3>
                <Form>
                    <Form.Group className="mb-3 formgrp">

                        <div className="sub-formgrp">
                            {/* <Form.Control type="text" name="brokerName" placeholder="Name" className="formcontrol formpadding" /> */}
                            <Form.Control type="text" name="brokerName" id="brokerName" placeholder="Name" className="formcontrol formpadding" autoComplete="off" isInvalid={errors.brokerName.invalid || errors.brokerName.required} value={brokerName} onChange={handleName} />
                            {
                                errors.brokerName.invalid ? <Form.Control.Feedback type="invalid">Invalid Name</Form.Control.Feedback> : ''
                            }
                            {
                                errors.brokerName.required ? <Form.Control.Feedback type="invalid">Name is Required</Form.Control.Feedback> : ''
                            }
                        </div>
                        <div className="sub-formgrp">
                            {/* <Form.Control type="number" name="brokerMobileNumber" placeholder="Mobile Number" className="formcontrol formpadding" /> */}
                            <Form.Control type="text" pattern="\d*" name="brokerMobileNumber" id="brokerMobileNumber" placeholder="Mobile Number" className="formcontrol formpadding" autoComplete="off" maxLength="10" isInvalid={errors.brokerMobileNumber.invalid || errors.brokerMobileNumber.required || errors.brokerMobileNumber.unique} value={brokerMobileNumber} onChange={handleMobileNumber} />
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
                            {/* <Form.Control type="text" name="brokerEmail" placeholder="Email Id" className="formcontrol formpadding" /> */}
                            <Form.Control type="text" name="brokerEmail" id="brokerEmail" placeholder="Email" className="formcontrol formpadding" autoComplete="off" isInvalid={errors.brokerEmail.invalid || errors.brokerEmail.required || errors.brokerEmail.unique} value={brokerEmail} onChange={handleEmail} />
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
                        <div className="sub-formgrp">
                            {/* <Form.Control type="text" name="brokerCityBranch" placeholder="Search Nearest City Branch" className="formcontrol formpadding" /> */}
                            <Form.Select placeholder="Search Nearest City Branch" className="formcontrol formpadding" isInvalid={errors.brokerCityBranch.required} value={brokerCityBranch} onChange={handleBrokerCityBranch}>
                                <option value="">Select Nearest City Branch</option>
                                {
                                    citiesDropdown.map((item) => {
                                        return <option key={item.id} value={item.leadCity}>{item.leadCity}</option>;
                                    })
                                }
                            </Form.Select>
                            {
                                errors.brokerCityBranch.required ? <Form.Control.Feedback type="invalid">Nearest City Branch is required</Form.Control.Feedback> : ''
                            }

                        </div>
                        {
                            showState ?
                                <div className="sub-formgrp">
                                    <Form.Select placeholder="Search State" className="formcontrol formpadding" isInvalid={errors.brokerState.required} value={brokerState} onChange={handleBrokerState}>
                                        <option value="">Select State</option>
                                        {
                                            statesDropdown.map((item) => {
                                                return <option key={item.id} value={item.stateName}>{item.stateName}</option>;
                                            })
                                        }
                                    </Form.Select>
                                    {
                                        errors.brokerState.required ? <Form.Control.Feedback type="invalid">State is required</Form.Control.Feedback> : ''
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
                                <Form.Check.Label>I agree that I have read &amp; accept the <a className="link-tc" onClick={handleTermsConditionShow}>Terms &amp; Conditions</a></Form.Check.Label>

                            </Form.Check>
                        </div>


                        <div className="sub-formgrp mt-5 mb-0">
                            <Button variant="primary"
                                type="button" className="btn-bg btn-bg-dark sendbtn" disabled={loaders.sendOTPLoader} onClick={handleSendOTP}>
                                {loaders.sendOTPLoader ? <div className="loaderB mx-auto"></div> : 'Send OTP'}
                            </Button>
                        </div>
                    </Form.Group>
                </Form>

            </div>
            {
                showOTPPopup ? 
                <div className="exit-intent-sleekbox-overlay sleekbox-popup-active">
                <div className="exit-intent-sleekbox-popup">
                    <div className="popup-sub-row">

                        <div className="popup-sub-right">

                            <div>
                                <img src={OTPimage} alt='OTP Image' />

                                <p className="heading">OTP Verification</p>
                                <p className="subheading">A OTP has been sent to {'******' + brokerMobileNumber.slice(6, 10)}</p>
                                {
                                    count ?
                                        <p className="time">Time remaining:<span> {count} seconds</span></p> : ''
                                }

                            </div>
                            <div>


                                <Form.Control className="w-50 form-control form-control-lg mx-auto text-center" type="text" id="subBrokerOTP" placeholder="Enter OTP" autoComplete="one-time-code" maxLength="6" isInvalid={OTPErrors} value={otp} onChange={(e) => handleOTP(e)} />
                                {
                                    OTPErrors ? <Form.Control.Feedback type="invalid">{OTPErrors}</Form.Control.Feedback> : ''
                                }
                            </div>

                            <div className="btnwrap">
                                <button className="btn-bg" disabled={loaders.verifyLoader || loaders.addLeadLoader} onClick={verifyOTP}>{(loaders.verifyLoader || loaders.addLeadLoader) ? <div className="dotLoaderB"></div> : 'verify'}</button>
                            </div>
                            <div className="">

                                {
                                    !count ?
                                        <button className="resend" onClick={() => sendOTP(true)}>{loaders.resendOTPLoader ? <div className="dotLoaderB colorB marginLoader"></div> : 'Resend OTP'}</button> : ''
                                }


                            </div>
                            <div className="mt-2">
                                {
                                    OTPSendSuccessToaster ?
                                        <Alert key='success' variant='success' onClose={() => setOTPSendSuccessToaster(false)} dismissible>
                                            OTP has been resent on given Mobile Number
                                        </Alert> : ''
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div> : ''
            }
            <Modal show={showTermsCondition} onHide={handleTermsConditionClose} backdrop="static"
                keyboard={false} centered>
                <Modal.Header>
                    <Modal.Title>Attention</Modal.Title>
                </Modal.Header>
                <Modal.Body>We are capturing this data for communication purpose only and it's stored securely. We protect your privacy like it's ours! By agreeing you are allowing us to send updates via SMS/WhatsApp/Email/Call which will also override & will not be termed as violation of DND.</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleTermsConditionClose}>
                        Okay
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={showErrorToaster} onHide={hideAPIErrorToaster} backdrop="static"
                keyboard={false} centered>
                <Modal.Header>
                    <Modal.Title>Error</Modal.Title>
                </Modal.Header>
                <Modal.Body>{APIError}</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={hideAPIErrorToaster}>
                        Okay
                    </Button>
                </Modal.Footer>
            </Modal>

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

            <Modal show={brokerCreatedSuccess} onHide={handleBrokerCreatedSuccessClose} backdrop="static"
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
            </Modal>

        </>
    );
}

export default DematAccountForm;
