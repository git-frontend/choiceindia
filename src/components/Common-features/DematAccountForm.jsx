import React, { useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import openAccountService from '../../Services/openAccountService';
import { useSearchParams } from "react-router-dom";
import "./demat-form.scss"



function DematAccountForm() {

    const mobileRegex = /^(6|9|8|7)([0-9]{9})$/i;
    const [searchParams, setSearchParams] = useSearchParams();
    const [mobileNumber, setMobileNumber] = React.useState('');
    const [errors, setErrors] = React.useState({});
    const [showTermsCondition, setShowTermsCondition] = React.useState(false);
    const [showOTP, setShowOTP] = React.useState(false);
    const [loaders, setLoaders] = React.useState({});
    const [APIError, setAPIError] = React.useState();
    const [showErrorToaster, setShowErrorToaster] = React.useState(false);
    const [count, setCount] = React.useState(0);
    const [otp, setOtp] = React.useState('');
    const [OTPErrors, setOTPErrors] = React.useState('');
    var UTMCampaign = React.useRef('');
    var UTMMedium = React.useRef('');
    var UTMSource = React.useRef('');
    var refercode = React.useRef('');
    var otpSessionID = React.useRef('');
  
    function handleMobile(e) {
        let value = e.target.value.replace(/\D/g, "");
        // if (value) {
        //     setMobileNumber(value);
        //     setErrors({});
        // } else {
        //     setMobileNumber(value);
        //     setErrors({});
        // }
        setMobileNumber(value);
        setErrors({});
    }

    function handleTermsConditionShow() {
        setShowTermsCondition(true);
    }

    function handleTermsConditionClose() {
        setShowTermsCondition(false);
    }

    function handleOTPShow() {
        setShowOTP(true);
    }

    function handleOTPClose() {
        setShowOTP(false);
    }

    function handleSendOTP(e) {
        e.preventDefault();
        if (!mobileNumber.length) {
            setErrors((prevError) => ({
                'required': true
            }));
        } else if (mobileNumber.length < 10) {
            setErrors((prevError) => ({
                'invalidMobile': true
            }));
        } else if (mobileNumber.length === 10 && !mobileRegex.test(mobileNumber)) {
            setErrors((prevError) => ({
                'invalidMobile': true
            }));
        } else if (mobileNumber.length === 10 && mobileRegex.test(mobileNumber)) {
            sendOTP();
        }
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

    function showAPIErrorToaster() {
        setShowErrorToaster(true);
    }

    function hideAPIErrorToaster() {
        setShowErrorToaster(false);
    }

    function resetOTPPopup() {
        setOtp('');
        setOTPErrors('');
        setCount(30);
    }

    function sendOTP() {
        showLoader('sendOTPLoader');
        let request = {
            "mobile_number": mobileNumber,
            "product": "JIFFY",
            "request_source": "CHOICEINDIA",
            "source": "CHOICEINDIA",
            "user_consent": "1",
            "referred_id": refercode.current || null,
            "sub_ref": null,
            "utm_campaign": UTMCampaign.current || '',
            "utm_content": null,
            "utm_custom": null,
            "utm_medium": UTMMedium.current || '',
            "utm_source": UTMSource.current || '',
            "utm_term": null
        };
        openAccountService.sendOTP(request).then((res) => {
            hideLoader('sendOTPLoader');
            if (res && res.status === 200 && res.data && res.data.StatusCode === 200) {
                otpSessionID.current = res.data.Body.otp_session_id;
                fetchQueryParams();
                resetOTPPopup();
                handleOTPShow();
            } else {
                setAPIError("Something went wrong, please try again later!");
                showAPIErrorToaster();
            }
        }).catch((error) => {
            hideLoader('sendOTPLoader');
            if (error && error.response && error.response.data && error.response.data.Message) {
                setAPIError(error.response.data.Message);
                showAPIErrorToaster();
            } else {
                setAPIError("Something went wrong, please try again later!");
                showAPIErrorToaster();
            }
        });
    }

    function fetchQueryParams() {
        UTMCampaign.current = searchParams.get('utm_campaign') || '';
        UTMMedium.current = searchParams.get('utm_medium') || '';
        UTMSource.current = searchParams.get('utm_source') || '';
        refercode.current = (searchParams.get('refercode') && window.atob(searchParams.get('refercode'))) || '';
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
        fetchQueryParams();
    }, []);

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
        session_id: otpSessionID.current
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
                "old_session_id": otpSessionID.current,
                "request_source": "CHOICEINDIA"
            }

            openAccountService.resendOTPAgain(request).then((res) => {
                hideLoader('resendOTPLoader');
                setCount(30);
                if (res && res.status === 200 && res.data && res.data.Body) {
                    otpSessionID.current = res.data.Body.session_id;
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
                "session_id": otpSessionID.current,
            }
            openAccountService.OTPOnCall(request).then((res) => {
                hideLoader('OTPOnCallLoader');
                setCount(30);
                if (res && res.status === 200 && res.data && res.data.Body) {
                    otpSessionID.current = res.data.Body.session_id;
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
            <div className="demat-account-form">

                <h3 className="form-ttl">Open Free Account</h3>
                <Form>
                    <Form.Group className="mb-3 formgrp">
                        <div className="sub-formgrp">
                            <Form.Control isValid={!errors.invalidMobile || !errors.required} type="text" pattern="\d*" name="mobile_no" id="mobile_no" placeholder="Mobile Number" className="formcontrol" autoComplete="off" maxLength="10" isInvalid={errors.invalidMobile || errors.required} value={mobileNumber} onChange={handleMobile} />
                            {
                                errors.invalidMobile ? <Form.Control.Feedback type="invalid">Invalid Mobile Number</Form.Control.Feedback> : ''
                            }
                            {
                                errors.required ? <Form.Control.Feedback type="invalid">Mobile Number is Required</Form.Control.Feedback> : ''
                            }

                        </div>

                        <div key="inline-checkbox" className="sub-formgrp cust-checkbox">
                            <Form.Check
                                inline
                                name="terms_and_conditions"
                                type="checkbox"
                                id="terms_and_conditions"
                            >
                                <Form.Check.Input type="checkbox" checked readOnly />
                                <Form.Check.Label>I agree that I have read &amp; accept the <a className="link-tc" onClick={handleTermsConditionShow}>Terms &amp; Conditions</a></Form.Check.Label>

                            </Form.Check>
                            {/* <label className="lbl">I agree that I have read &amp; accept the <a className="link-tc">Terms &amp; Conditions</a></label> */}
                        </div>

                        <div className="sub-formgrp mt-5 mb-0">
                            {
                                <Button variant="primary"
                                type="submit" className="btn-bg btn-bg-dark sendbtn" onClick={handleSendOTP}>
                                {loaders.sendOTPLoader ? <div className="loaderB mx-auto"></div> : 'Send OTP'}</Button>
                            }
                        </div>
                    </Form.Group>
                </Form>

            </div>

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

            <Modal show={showOTP} onHide={handleOTPClose} backdrop="static"
                keyboard={false} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Enter OTP</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div id="opt-box-id">
                        <div className="modal-body opt-body">
                            A OTP has been sent to {'******' + mobileNumber.slice(6, 10)}
                            <Form.Control className="w-50 form-control form-control-lg mx-auto text-center" type="text" id="openAccountOTP" placeholder="Enter OTP" autoComplete="one-time-code" maxLength="6" isInvalid={OTPErrors} value={otp} onChange={(e) => handleOTP(e)}/>
                            {
                                OTPErrors ? <Form.Control.Feedback type="invalid">{OTPErrors}</Form.Control.Feedback> : ''
                            }
                            <div className="modal-footer otp-modal-footer">
                                <button className="btn btn-primary verify-btn" onClick={verifyOTP}>{loaders.verifyLoader ? <div className="dotLoaderB"></div> : 'Verify'}</button>
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


                </Modal.Body>
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
        </>
    );
}

export default DematAccountForm;
