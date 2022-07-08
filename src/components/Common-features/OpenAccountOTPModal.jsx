import React, { useEffect, useState, useRef } from "react";
import Form from 'react-bootstrap/Form';
import openAccountService from '../../Services/openAccountService';
import "./OpenAccountOTPModal.scss";

function OpenAccountOTPModal({mobileNumber, otpSessionID}) {
    // props -> mobileNumber, otpSessionID
    const [loaders, setLoaders] = useState({});
    const [count, setCount] = useState(0);
    const [otp, setOtp] = useState('');
    const [OTPErrors, setOTPErrors] = useState('');
    var otpID = useRef(otpSessionID);

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
            setOTPErrors('OTP is required');
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
                console.log(err);
            });
        }
    }, []);

    // to verify the OTP 
    function verifyOTP() {
        if (!otp.length) {
            setOTPErrors('OTP is required');
        } else {
            showLoader('verifyLoader');
            let request = {
                otp: otp,
                session_id: otpID.current
            };

            openAccountService.verifyOTP(request).then((res) => {
                hideLoader('verifyLoader');
                if (res && res.status === 200 && res.data && res.data.Body) {
                    if (res.data.Body.url) {
                        window.location.href = res.data.Body.url;
                    } else {
                        window.location.href = "https://jiffy.choiceindia.com/auth/login"
                    }
                } else {
                    setOTPErrors((res && res.data && res.data.Body && res.data.Body.Message) ? res.data.Body.Message : 'Something went wrong, please try again later!');
                }
            }).catch((error) => {
                hideLoader('verifyLoader');
                if (error && error.response && error.response.data && error.response.data.Message) {
                    setOTPErrors(error.response.data.Message);
                } else {
                    setOTPErrors("Something went wrong, please try again later!");
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

    return (
        <>
            <div id="opt-box-id">
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
                </div>
            </div>

        </>
    );
}

export default OpenAccountOTPModal;