import React, { useEffect, useState, useRef } from "react";
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import openAccountService from '../../Services/openAccountService';
// import OTPimage from '../../assets/images/otp.svg';
import "../Common-features/demat-form.scss";
import { Link } from "react-router-dom";
import OpenAccountLanguageContent from '../../Services/OpenAccountLanguageContent';
import Spinner from 'react-bootstrap/Spinner';
import Thankyoupopup from './Thanku-popup.jsx';
import Modal from 'react-bootstrap/Modal';
import { useSearchParams } from "react-router-dom";


function OpenAccountOTPModalNew({ mobileNumber, otpSessionID, onClose, language, openInfoPopup, showPopup, setparam, onButtonClick }) {
    // console.log('PPP',onClose.handleOTPClose());
    // props -> mobileNumber, otpSessionID
    const [loaders, setLoaders] = useState({});
    const [count, setCount] = useState(0);
    const [otp, setOtp] = useState('');
    const [OTPErrors, setOTPErrors] = useState('');
    const [OTPSendSuccessToaster, setOTPSendSuccessToaster] = useState({});
    var otpID = useRef(otpSessionID);
    const type2 = "JF"; //(window.location.pathname.indexOf('mutual-funds-investment') > -1) ? 'MF':"JF";
    const [show, setShow] = useState(true);
    const [searchParams, setSearchParams] = useSearchParams();
    const [otpparam, setOtpparam] = useState('');
    // const otpInputRefs = Array(6).fill(0).map(() => useRef(null));
    const [otpValue, setOTPValue] = useState(['', '', '', '', '', '']);
    const inputRefs = useRef([]);


    const handleButtonClick = () => {
        onButtonClick();
    };

    function handleClose() {

        setShow(() => false);
    }
    //  console.log('OOOO',showPopup);
    /**props object for Thankyou popup */
    const [showlead, setShowLead] = useState({ showModal: false, page: 'no-addlead' });
    // console.log('OOOO',showlead.showModal)

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
    //to handle OTP Input
    const handleOTP = (e, index) => {
        const { value } = e.target;
        const newOTP = [...otpValue];

        if (value.length === 1) {
            newOTP[index] = value;
            setOTPValue(newOTP);


            if (index < otpValue.length - 1) {
                inputRefs.current[index + 1].focus();
            }
        } else if (value.length === 0) {
            newOTP[index] = '';
            setOTPValue(newOTP);


            if (index > 0) {
                inputRefs.current[index - 1].focus();
            }
        }
        if (!value.length) {
            setOTPErrors(OpenAccountLanguageContent.getContent(language ? language : 'en', 'otprequired'));
        } else {
            setOTPErrors('');
        }
        const joinedOTP = newOTP.join('');
        setOtp(joinedOTP);
    };

    const handleKeyUp = (e, index) => {
        if (e.keyCode === 8 && e.target.value.length === 0 && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };
    const handleEdit = (e, index) => {
        const { value } = e.target;
        const newOTP = [...otpValue];
        newOTP[index] = value;
        setOTPValue(newOTP);
    };
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
                session_id: otpID.current
            };

            openAccountService.verifyOTP(request, type2).then((res) => {
                hideLoader('verifyLoader');
                if (res && res.status === 200 && res.data && res.data.Body) {
                    //  console.log('HANDLER',res);
                    // setOtpparam("Otp-success")

                    // if (res.data.Body.isOnboardFlag === 'Y') {
                    //Your Onboarding has been completed
                    // } else if (res.data.Body.isOnboardFlag === 'C') {
                    // IsBackOffice should be Y, isCredentialGenerated = 1 , uccStatus='success',
                    // then redirect to Jiffy Login .
                    // else
                    // should display the popup with message provided in response  "Account Opening Application in Review. Please Contact Customer Support"
                    // } else {
                    if (res && res.data && res.data.Body && res.data.Body.url) {
                        // console.log('inside call',res.data.Message);
                        // setShowLead(prevState => {
                        //     return {...prevState, showModal: true, redirectLink: res.data.Body.url, closeOTP: onClose}
                        // });

                        let result = res.data.Body.url.match("respond-issue");
                        if (result && result.length && result[0] === 'respond-issue') {
                            openInfoPopup(res.data.Message);
                            onClose(res.data.Body.url);
                        } else {
                            // console.log('Else onboard');
                            onClose(res.data.Body.url, res.data.Message ? res.data.Message : '', res.data.Body.isOnboardFlag ? res.data.Body.isOnboardFlag : "");
                        }

                        // console.log('inside call',showlead.showModal);
                        // window.location.href = res.data.Body.url;
                    } else {
                        if (res && res.data && res.data.Message) {
                            openInfoPopup(res.data.Message);
                            onClose();
                        } else {
                            // setShowLead(prevState => {
                            //     return { ...prevState, showModal: true, redirectLink: 'https://jiffy.choiceindia.com/auth/login'}
                            // });
                            if (type2 == 'MF') {
                                onClose("https://investica.com/auth/sign-in")
                            } else {
                                onClose("https://finx.choiceindia.com/auth/login");
                            }



                            // (type2=='MF' )? 
                            // window.location.href ="https://investica.com/auth/sign-in" 
                            //:
                            //window.location.href = "https://jiffy.choiceindia.com/auth/login";
                        }
                    }
                    // }
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
        }
    }

    //resend OTP ON SMS
    function resendOTP() {
        // console.log("check",otpID)
        if (!loaders.resendOTPLoader && !loaders.OTPOnCallLoader) {
            showLoader('resendOTPLoader');
            setOtp('');
            setOTPErrors('');


            let request = {

                "mobile_no": mobileNumber,
                "old_session_id": otpID.current,
                "request_source": "CHOICEINDIA",
                // "captcha":"f9A0RMq3vF7fPYkEiqZToKUKdneNzA2YWfMeKSHhkm"
            }
            let requestMF = {

                "old_session_id": otpID.current,
                // "captcha":"f9A0RMq3vF7fPYkEiqZToKUKdneNzA2YWfMeKSHhkm"
            }

            openAccountService.resendOTPAgain((type2 == 'MF') ? requestMF : request, type2).then((res) => {
                hideLoader('resendOTPLoader');
                setCount(3);
                if (res && res.status === 200 && res.data && res.data.Body) {
                    otpID.current = res.data.Body.session_id;
                    handleOTPResendSuccessToaster('otp');
                } else {
                    setOTPErrors((res.data.Body.Message) ? res.data.Body.Message : 'Something went wrong, please try again later!');
                }
            }).catch((error) => {
                hideLoader('resendOTPLoader');
                setCount(30);
                if (error && error.response && error.response.data && error.response.data.Message) {
                    setOTPErrors(error.response.data.Message);
                } else {
                    setOTPErrors("Something went wrong, please try again later!");
                }
            });
        }
    }

    //to get OTP ON CALL
    function getOTPOnCall() {
        if (!loaders.resendOTPLoader && !loaders.OTPOnCallLoader) {
            showLoader('OTPOnCallLoader');
            setOtp('');
            setOTPErrors('');
            let request = {
                "mobile_no": mobileNumber,
                "request_source": ((type2 == 'MF') ? "MF" : "CHOICEINDIA"),
                "session_id": otpID.current,
                // "captcha":"f9A0RMq3vF7fPYkEiqZToKUKdneNzA2YWfMeKSHhkm"
            }
            openAccountService.OTPOnCall(request, type2).then((res) => {
                hideLoader('OTPOnCallLoader');
                // setCount(30);
                if (res && res.status === 200 && res.data && res.data.Body) {
                    setCount(30);
                    otpID.current = res.data.Body.session_id;
                    handleOTPResendSuccessToaster('call');
                } else {
                    setOTPErrors((res.data.Body.Message) ? res.data.Body.Message : 'Something went wrong, please try again later!');
                }
            }).catch((error) => {
                hideLoader('OTPOnCallLoader');
                // setCount(30);
                if (error && error.response && error.response.data && error.response.data.Message) {
                    setOTPErrors(error.response.data.Message);
                } else {
                    setOTPErrors("Something went wrong, please try again later!");
                }
            });
        }
    }


    function handleOTPResendSuccessToaster(type) {
        setOTPSendSuccessToaster({ [type]: true });
        setTimeout(() => {
            setOTPSendSuccessToaster({ [type]: false });
        }, 5000)
    }



    function setotpdata() {

    }

    // useEffect(() => {
    //     setSearchParams((params) => {
    //         params.set('form', "Otp-success");
    //         return params;
    //     });
    // }, [otpparam]);

    return (
        <>
            <div className="exit-intent-sleekbox-popup">
                <div className="popup-sub-row">
                    <div className="popup-sub-right">

                        <p className="heading">{OpenAccountLanguageContent.getContent(language ? language : 'en', 'otpmodalheader')}</p>
                        <div className="otpform-new  fade-in" >
                            <div className="d-flex">
                                <p className="subheading">{OpenAccountLanguageContent.getContent(language ? language : 'en', 'otplblnew')} {mobileNumber}</p>
                                <button className="changenumbtn" onClick={handleButtonClick}>(Change)</button>
                            </div>
                            <div className="digit-otp">
                                {otpValue.map((digit, index) => (
                                    <input
                                        key={index}
                                        ref={ref => (inputRefs.current[index] = ref)}
                                        className="newotpsend"
                                        type="tel"
                                        pattern="\d*"
                                        placeholder="*"
                                        autoComplete="off"
                                        maxLength="1"
                                        value={digit}
                                        onChange={e => handleOTP(e, index)}
                                        onKeyUp={e => handleKeyUp(e, index)}
                                        onFocus={e => e.target.select()}
                                        onBlur={e => handleEdit(e, index)}
                                    />
                                ))}
                            </div>
                            {
                                OTPErrors ? <div className="otperror">{OTPErrors}</div> : ''
                            }
                            {/* <Form.Control className="w-50 form-control form-control-lg mx-auto text-center digit-otp" type="tel" pattern="\d*"  id="openAccountOTP" placeholder="* * * * * *" autoComplete="off" maxLength="6"  isInvalid={OTPErrors} value={otp} onChange={(e) => handleOTP(e)} /> */}

                          

                            {
                                OTPErrors ? <Form.Control.Feedback type="invalid">{OTPErrors}</Form.Control.Feedback> : ''
                            }
                            
                            {
                                count ?
                                    <p className="time">{OpenAccountLanguageContent.getContent(language ? language : 'en', 'otptime')}:<span > {count} {OpenAccountLanguageContent.getContent(language ? language : 'en', 'otpsec')}</span></p> : ''
                            }
                          

                            <div>
                                {
                                    !count ?
                                        <div className="d-flex align-items-center justify-content-between pt-3">
                                            <button className="resend" onClick={resendOTP}>
                                                Get OTP <span className="bluetxt">SMS</span>
                                            </button>

                                            <span className="ortext">{OpenAccountLanguageContent.getContent(language ? language : 'en', 'otportext')}</span>


                                            <button className="resend" onClick={getOTPOnCall}>

                                                Get OTP <span className="bluetxt">Call</span>
                                            </button></div> : ''
                                }
                            </div>
                            <div className="btnwrap">
                                <button className="btn-bg btn-bg-dark" disabled={loaders.verifyLoader} onClick={verifyOTP}>{loaders.verifyLoader ? <div className="dotLoaderB"></div> : OpenAccountLanguageContent.getContent(language ? language : 'en', 'otpverifybtn')}</button>
                            </div>
                        </div>

                        <div className="mt-2 ">
                            {
                                (OTPSendSuccessToaster.otp || OTPSendSuccessToaster.call) ?
                                    <Alert className="alertmsg" key='success' variant='success' onClose={() => setOTPSendSuccessToaster({})} dismissible>
                                        {
                                            (OTPSendSuccessToaster.call) ? OpenAccountLanguageContent.getContent(language ? language : 'en', 'otpresendsuccess1') : OpenAccountLanguageContent.getContent(language ? language : 'en', 'otpresendsuccess2')
                                        }
                                    </Alert> : ''
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OpenAccountOTPModalNew;
