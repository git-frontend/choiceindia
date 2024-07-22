import React, { useEffect, useState, useRef ,useCallback  } from "react";
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import openAccountService from '../../Services/openAccountService';
import OTPimage from '../../assets/images/otp.svg';
import "../Common-features/demat-form.scss";
import OpenAccountLanguageContent from '../../Services/OpenAccountLanguageContent';
import Spinner from 'react-bootstrap/Spinner';
import Modal from 'react-bootstrap/Modal'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

function OpenAccountOTPModal({ mobileNumber, otpSessionID,otpLeadID, onClose, language, openInfoPopup, showPopup,updateType }) {
   
    const [loaders, setLoaders] = useState({});
    const [count, setCount] = useState(0);
    const [otp, setOtp] = useState('');
    const [OTPErrors, setOTPErrors] = useState('');
    const [OTPSendSuccessToaster, setOTPSendSuccessToaster] = useState({});
    var otpID = useRef(otpSessionID);
    var otpLID = useRef(otpLeadID);
    const type2 = "JF"; //(window.location.pathname.indexOf('mutual-funds-investment') > -1) ? 'MF':"JF";
    const [show, setShow] = useState(true);
    const { executeRecaptcha } = useGoogleReCaptcha();
    const [captchaToken, setCaptchaToken] = useState('');
    
    function handleClose() {
        setShow(() => false);
    }
   
    const [showlead, setShowLead] = useState({ showModal: false, page: 'no-addlead' });
    const [leadId, setLeadId] = useState();
    const [redirectURL, setRedirectURL] = useState(() => null);

    /**to close the thankyou popup */
    function closeModal() {
        setShowLead(prevState => {
            return { ...prevState, showModal: false }
        });
        window.location.href = showlead.redirectLink;
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

    function handleOTP(e) {
        let value = e.target.value.replace(/\D/g, "");
        setOtp(value);
        if (!value.length) {
            setOTPErrors(OpenAccountLanguageContent.getContent(language ? language : 'en', 'otprequired'));
        } else {
            setOTPErrors('');
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

    useEffect(() => {
        // setShow(() => true);
        setCount(30);
    }, []);

    useEffect(() => {
        onClose
    }, [show])

    useEffect(() => {
        checkWebOTP();
    }, [loaders.resendOTPLoader]);

    function checkWebOTP() {
        if ('OTPCredential' in window) {
            const input = document.getElementById('openAccountOTP');
            if (!input) return;
            const ac = new AbortController();
            navigator.credentials.get({
                otp: { transport: ['sms'] },
                signal: ac.signal
            }).then(otp => {
                setOtp(otp.code);
            }).catch(err => {
                // console.log(err, "Error web otp");
            });
        }
    }

    // to verify the OTP 
    function verifyOTP() {
        if (!otp.length) {
            setOTPErrors(OpenAccountLanguageContent.getContent(language ? language : 'en', 'otprequired'));
        } else {
            showLoader('verifyLoader');
            let request = {
                otp: otp,
                session_id: otpSessionID
            };
            openAccountService.verifyOTPService(mobileNumber,request,captchaToken,hideLoader,onClose,openInfoPopup,setOTPErrors)
          
        }
    }
    
    const handleReCaptchaVerify = useCallback(async () => {
        if (!executeRecaptcha) {
            return;
        }
        showLoader('verifyLoader');
        const token = await executeRecaptcha('verifyOTP');
        // Do whatever you want with the token
        // sendOTP();
        if (token) {
            setCaptchaToken(token);
            // alert("Token : "+token);
        }
        hideLoader('verifyLoader');
    }, [executeRecaptcha]);

    useEffect(() => {
        if (captchaToken) {
            verifyOTP();
        }
    }, [captchaToken]);

    function handleOTPResendSuccessToaster(type) {
        setOTPSendSuccessToaster({ [type]: true });
        setTimeout(() => {
            setOTPSendSuccessToaster({ [type]: false });
        }, 5000)
    }

    const handleUpdateType = () => {
        updateType('resend');
        setCount(30);
        handleOTPResendSuccessToaster('otp');
    };
    const handleUpdateTypeCall = () => {
        updateType('otp-on-call');
        setCount(30);
        handleOTPResendSuccessToaster('call');
    };
    return (
        <>
            


            <Modal show={show} className="bt-strap-mdl otp-main-modal " onHide={onClose} backdrop='static' keyboard={false}>

                <Modal.Header className="border-0" closeButton>
                </Modal.Header>
                <Modal.Body className="border-0">
                    <div className="exit-intent-sleekbox-overlay sleekbox-popup-active">
                        <div className="exit-intent-sleekbox-popup">
                            <div className="popup-sub-row">
                                
                                <div className="popup-sub-right">

                                    <div>
                                        <img src={OTPimage} />

                                        <p className="heading">{OpenAccountLanguageContent.getContent(language ? language : 'en', 'otpmodalheader')}</p>
                                        <p className="subheading">{OpenAccountLanguageContent.getContent(language ? language : 'en', 'otplbl')} {'******' + (mobileNumber).slice(6, 10)}</p>
                                        {
                                            count ?
                                                <p className="time">{OpenAccountLanguageContent.getContent(language ? language : 'en', 'otptime')}:<span > {count} {OpenAccountLanguageContent.getContent(language ? language : 'en', 'otpsec')}</span></p> : ''
                                        }

                                    </div>
                                    <div className="otp-mdl-input-chk">


                                        <Form.Control className="w-50 form-control form-control-lg mx-auto text-center digit-otp" type="tel" pattern="\d*" id="openAccountOTP" placeholder="Enter OTP" autoComplete="off" maxLength="6" isInvalid={OTPErrors} value={otp} onChange={(e) => handleOTP(e)} />
                                        {
                                            OTPErrors ? <Form.Control.Feedback type="invalid">{OTPErrors}</Form.Control.Feedback> : ''
                                        }
                                    </div>

                                    <div className="btnwrap">
                                        <button className="btn-bg" disabled={loaders.verifyLoader} onClick={handleReCaptchaVerify}>{loaders.verifyLoader ? <div className="dotLoaderB"></div> : OpenAccountLanguageContent.getContent(language ? language : 'en', 'otpverifybtn')}</button>
                                    </div>
                                    <div>
                                        {
                                            !count ?
                                                <div className="d-flex align-items-center justify-content-center">
                                                    <button className="resend" onClick={handleUpdateType}>{loaders.resendOTPLoader ? <Spinner className="marginLoader" animation="border" role="status"><span className="visually-hidden">Loading123...</span></Spinner>
                                                        : OpenAccountLanguageContent.getContent(language ? language : 'en', 'otpresend')}</button>
                                                    <span className="ortext">{OpenAccountLanguageContent.getContent(language ? language : 'en', 'otportext')}</span>
                                                    <button className="resend" onClick={handleUpdateTypeCall}>{loaders.OTPOnCallLoader ? <Spinner className="marginLoader" animation="border" role="status"><span className="visually-hidden">Loading456...</span></Spinner>
                                                        : OpenAccountLanguageContent.getContent(language ? language : 'en', 'otponcall')}</button></div> : ''
                                        }
                                    </div>
                                    <div className="mt-2">
                                        {
                                            (OTPSendSuccessToaster.otp || OTPSendSuccessToaster.call) ?
                                                <Alert key='success' variant='success' onClose={() => setOTPSendSuccessToaster({})} dismissible>
                                                    {
                                                        (OTPSendSuccessToaster.call) ? OpenAccountLanguageContent.getContent(language ? language : 'en', 'otpresendsuccess1') : OpenAccountLanguageContent.getContent(language ? language : 'en', 'otpresendsuccess2')
                                                    }
                                                </Alert> : ''
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

        </>
    );
}

export default OpenAccountOTPModal;
