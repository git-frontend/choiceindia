import React, { useEffect, useState, useRef } from "react";
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import openAccountService from '../../Services/openAccountService';
import OTPimage from '../../assets/images/otp.svg';
import "../Common-features/demat-form.scss";
import { Link } from "react-router-dom";
import OpenAccountLanguageContent from '../../Services/OpenAccountLanguageContent';
import Spinner from 'react-bootstrap/Spinner';
import Thankyoupopup from './Thanku-popup.jsx';
import Modal from 'react-bootstrap/Modal'

function OpenAccountOTPModal({mobileNumber, otpSessionID, onClose, language, openInfoPopup, showPopup}) {
    // console.log('PPP',onClose.handleOTPClose());
    // props -> mobileNumber, otpSessionID
    const [loaders, setLoaders] = useState({});
    const [count, setCount] = useState(0);
    const [otp, setOtp] = useState('');
    const [OTPErrors, setOTPErrors] = useState('');
    const [OTPSendSuccessToaster, setOTPSendSuccessToaster] = useState({});
    var otpID = useRef(otpSessionID);
    const [show,setShow] = useState(true);
    // console.log('SSS',show);
    function handleClose(){
        console.log('Handleclose');
        setShow(() => false);
    }
    console.log('OOOO',showPopup);
    /**props object for Thankyou popup */
    const [showlead, setShowLead] = useState({ showModal: false, page: 'no-addlead' });
    console.log('OOOO',showlead.showModal)

    /**to close the thankyou popup */
    function closeModal() {
        setShowLead(prevState => {
            return { ...prevState, showModal: false}
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
    },[show])

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
                console.log(err, "Error web otp");
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

            openAccountService.verifyOTP(request).then((res) => {
                hideLoader('verifyLoader');
                if (res && res.status === 200 && res.data && res.data.Body) {
                    console.log('HANDLER',res);
                    // if (res.data.Body.isOnboardFlag === 'Y') {
                        //Your Onboarding has been completed
                    // } else if (res.data.Body.isOnboardFlag === 'C') {
                        // IsBackOffice should be Y, isCredentialGenerated = 1 , uccStatus='success',
                        // then redirect to Jiffy Login .
                        // else
                        // should display the popup with message provided in response  "Account Opening Application in Review. Please Contact Customer Support"
                    // } else {
                    if (res && res.data && res.data.Body && res.data.Body.url) {
                        // console.log('inside call');
                        // setShowLead(prevState => {
                        //     return {...prevState, showModal: true, redirectLink: res.data.Body.url, closeOTP: onClose}
                        // });
                        onClose(res.data.Body.url);
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

                            onClose("https://jiffy.choiceindia.com/auth/login");
                            // window.location.href = "https://jiffy.choiceindia.com/auth/login";
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
        if (!loaders.resendOTPLoader && !loaders.OTPOnCallLoader) {
            showLoader('resendOTPLoader');
            setOtp('');
            setOTPErrors('');
            let request = {
                "mobile_no": mobileNumber,
                "old_session_id": otpID.current,
                "request_source": "CHOICEINDIA"
            }

            openAccountService.resendOTPAgain(request).then((res) => {
                hideLoader('resendOTPLoader');
                setCount(30);
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
                "request_source": "CHOICEINDIA",
                "session_id": otpID.current,
            }
            openAccountService.OTPOnCall(request).then((res) => {
                hideLoader('OTPOnCallLoader');
                setCount(30);
                if (res && res.status === 200 && res.data && res.data.Body) {
                    otpID.current = res.data.Body.session_id;
                    handleOTPResendSuccessToaster('call');
                } else {
                    setOTPErrors((res.data.Body.Message) ? res.data.Body.Message : 'Something went wrong, please try again later!');
                }
            }).catch((error) => {
                hideLoader('OTPOnCallLoader');
                setCount(30);
                if (error && error.response && error.response.data && error.response.data.Message) {
                    setOTPErrors(error.response.data.Message);
                } else {
                    setOTPErrors("Something went wrong, please try again later!");
                }
            });
        }
    }


    function handleOTPResendSuccessToaster(type){
        setOTPSendSuccessToaster({[type]: true});
        setTimeout(()=>{
            setOTPSendSuccessToaster({[type]: false});
        },5000)
    }

    return (
        <>
            {/* <div id="opt-box-id">
                <div className="modal-body opt-body">
                    A OTP has been sent to {'******' + mobileNumber.slice(6, 10)}
                    <Form.Control className="w-50 form-control form-control-lg mx-auto text-center" type="text" id="openAccountOTP" placeholder="Enter OTP" autoComplete="one-time-code" maxLength="6" isInvalid={OTPErrors} value={otp} onChange={(e) => handleOTP(e)} />
                    {
                        OTPErrors ? <Form.Control.Feedback type="invalid">{OTPErrors}</Form.Control.Feedback> : ''
                    }
                    <div className="modal-footer otp-modal-footer">
                        <button className="btn btn-primary verify-btn" disabled={loaders.verifyLoader} onClick={verifyOTP}>{loaders.verifyLoader ? <div className="dotLoaderB"></div> : 'Verify'}</button>
                    </div>
                    <div className="modal-otp-links">
                        {
                            count ?
                                <p className="didnt-text">Didn't receive the OTP?<small className="timer-text">Resend in {count} seconds</small></p> :
                                <div className="btm-div">
                                    <p className="resend-text" onClick={resendOTP}>{loaders.resendOTPLoader ? <div className="dotLoaderB colorB marginLoader"></div> : 'Get OTP SMS'}</p>
                                    <p className="or-text">OR</p>
                                    <p className="resend-text" onClick={getOTPOnCall}>{loaders.OTPOnCallLoader ? <div className="dotLoaderB colorB marginLoader"></div> : 'Get OTP on Call'}</p>
                                </div>
                        }
                    </div>
                    {
                        (OTPSendSuccessToaster.otp || OTPSendSuccessToaster.call) ?
                            <Alert key='success' variant='success' onClose={() => setOTPSendSuccessToaster({})} dismissible>
                                {
                                    (OTPSendSuccessToaster.call) ? 'You will soon receive an automated call on given Mobile Number' : 'OTP has been resent on given Mobile Number'
                                }
                            </Alert> : ''
                    }
                </div>
            </div> */}


            {/* <div className="exit-intent-sleekbox-overlay sleekbox-popup-active ">
                <div className="exit-intent-sleekbox-popup">
                    <div className="popup-sub-row">
                        <div className="close">
                            <a href="javascript:void(0)" onClick={onClose} className="closebtn" >&times;</a>
                        </div>
                        <div className="popup-sub-right">

                            <div>
                                <img src={OTPimage} />

                                <p className="heading">{OpenAccountLanguageContent.getContent(language ? language : 'en', 'otpmodalheader')}</p>
                                <p className="subheading">{OpenAccountLanguageContent.getContent(language ? language : 'en', 'otplbl')} {'******' + mobileNumber.slice(6, 10)}</p>
                                {
                                    count ?
                                        <p className="time">{OpenAccountLanguageContent.getContent(language ? language : 'en', 'otptime')}:<span > {count} {OpenAccountLanguageContent.getContent(language ? language : 'en', 'otpsec')}</span></p> : ''
                                }

                            </div>
                            <div>


                                <Form.Control className="w-50 form-control form-control-lg mx-auto text-center digit-otp" type="text" id="openAccountOTP" placeholder="Enter OTP" autoComplete="one-time-code" maxLength="6" isInvalid={OTPErrors} value={otp} onChange={(e) => handleOTP(e)} />
                                {
                                    OTPErrors ? <Form.Control.Feedback type="invalid">{OTPErrors}</Form.Control.Feedback> : ''
                                }
                            </div>

                            <div className="btnwrap">
                                <button className="btn-bg" disabled={loaders.verifyLoader} onClick={verifyOTP}>{loaders.verifyLoader ? <div className="dotLoaderB"></div> : OpenAccountLanguageContent.getContent(language ? language : 'en', 'otpverifybtn')}</button>
                            </div>
                            <div>
                                {
                                    !count ?
                                        <div>
                                            <button className="resend" onClick={resendOTP}>{loaders.resendOTPLoader ? <Spinner className="marginLoader" animation="border" role="status"><span className="visually-hidden">Loading123...</span></Spinner>
                                                // <div className="dotLoaderB colorB marginLoader"></div>
                                                : OpenAccountLanguageContent.getContent(language ? language : 'en', 'otpresend')}</button>
                                            <span className="ortext">{OpenAccountLanguageContent.getContent(language ? language : 'en', 'otportext')}</span>
                                            <button className="resend" onClick={getOTPOnCall}>{loaders.OTPOnCallLoader ? <Spinner className="marginLoader" animation="border" role="status"><span className="visually-hidden">Loading456...</span></Spinner>
                                                // <div className="dotLoaderB colorB marginLoader"></div>
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
            </div> */}

<Modal show={show} className="bt-strap-mdl" onHide={onClose}>
                <Modal.Header className="border-0" closeButton>
                </Modal.Header>
                <Modal.Body className="border-0">
                    <div className="exit-intent-sleekbox-overlay sleekbox-popup-active">
                        <div className="exit-intent-sleekbox-popup">
                            <div className="popup-sub-row">
                                {/* <div className="close">
                                    <a href="javascript:void(0)" onClick={onClose} className="closebtn" >&times;</a>
                                </div> */}
                                <div className="popup-sub-right">

                                    <div>
                                        <img src={OTPimage} />

                                        <p className="heading">{OpenAccountLanguageContent.getContent(language ? language : 'en', 'otpmodalheader')}</p>
                                        <p className="subheading">{OpenAccountLanguageContent.getContent(language ? language : 'en', 'otplbl')} {'******' + mobileNumber.slice(6, 10)}</p>
                                        {
                                            count ?
                                                <p className="time">{OpenAccountLanguageContent.getContent(language ? language : 'en', 'otptime')}:<span > {count} {OpenAccountLanguageContent.getContent(language ? language : 'en', 'otpsec')}</span></p> : ''
                                        }

                                    </div>
                                    <div>


                                        <Form.Control className="w-50 form-control form-control-lg mx-auto text-center digit-otp" type="text" id="openAccountOTP" placeholder="Enter OTP" autoComplete="one-time-code" maxLength="6" isInvalid={OTPErrors} value={otp} onChange={(e) => handleOTP(e)} />
                                        {
                                            OTPErrors ? <Form.Control.Feedback type="invalid">{OTPErrors}</Form.Control.Feedback> : ''
                                        }
                                    </div>

                                    <div className="btnwrap">
                                        <button className="btn-bg" disabled={loaders.verifyLoader} onClick={verifyOTP}>{loaders.verifyLoader ? <div className="dotLoaderB"></div> : OpenAccountLanguageContent.getContent(language ? language : 'en', 'otpverifybtn')}</button>
                                    </div>
                                    <div>
                                        {
                                            !count ?
                                                <div>
                                                    <button className="resend" onClick={resendOTP}>{loaders.resendOTPLoader ? <Spinner className="marginLoader" animation="border" role="status"><span className="visually-hidden">Loading123...</span></Spinner>
                                                        // <div className="dotLoaderB colorB marginLoader"></div>
                                                        : OpenAccountLanguageContent.getContent(language ? language : 'en', 'otpresend')}</button>
                                                    <span className="ortext">{OpenAccountLanguageContent.getContent(language ? language : 'en', 'otportext')}</span>
                                                    <button className="resend" onClick={getOTPOnCall}>{loaders.OTPOnCallLoader ? <Spinner className="marginLoader" animation="border" role="status"><span className="visually-hidden">Loading456...</span></Spinner>
                                                        // <div className="dotLoaderB colorB marginLoader"></div>
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


           {/* {
            showlead.showModal? <Thankyoupopup isShow={showlead}/>:''
           } */}
        </>
    );
}

export default OpenAccountOTPModal;
