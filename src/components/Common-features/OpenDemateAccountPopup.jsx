import './OpenDemateAccountPopup.scss';
import React, { useEffect, useState, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import openAccountService from '../../Services/openAccountService';
import Modal from 'react-bootstrap/Modal';
import OpenAccountOTPModal from './OpenAccountOTPModal.jsx';

function OpenDemateAccountPopup({hideComponent}) {

    const mobileRegex = /^(6|9|8|7)([0-9]{9})$/i;
    const [searchParams, setSearchParams] = useSearchParams();
    const [mobileNumber, setMobileNumber] = useState('');
    const [errors, setErrors] = useState({});
    const [APIError, setAPIError] = useState();
    const [showTermsCondition, setShowTermsCondition] = useState(false);
    const [loaders, setLoaders] = useState({});
    const [showOTP, setShowOTP] = useState(false);
    const [showOpenAccountPopup, setShowOpenAccountPopup] = useState(true);
    var UTMCampaign = useRef('');
    var UTMMedium = useRef('');
    var UTMSource = useRef('');
    var refercode = useRef('');
    var otpSessionID = useRef('');

    function handleMobile(e) {
        let value = e.target.value.replace(/\D/g, "");
        setMobileNumber(value);
        setErrors({});
    }

    function handleTermsConditionShow() {
        setShowTermsCondition(true);
    }

    function handleTermsConditionClose() {
        setShowTermsCondition(false);
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

    function handleOTPShow() {
        setShowOTP(true);
    }

    function handleOTPClose() {
        setShowOTP(false);
        hideComponent();
    }

    function fetchQueryParams() {
        UTMCampaign.current = searchParams.get('utm_campaign') || '';
        UTMMedium.current = searchParams.get('utm_medium') || '';
        UTMSource.current = searchParams.get('utm_source') || '';
        refercode.current = (searchParams.get('refercode') && window.atob(searchParams.get('refercode'))) || '';
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
            fetchQueryParams();
            sendOTP();
        }
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
            "utm_campaign": UTMCampaign.current || 'seo_demat_leads',
            "utm_content": null,
            "utm_custom": null,
            "utm_medium": UTMMedium.current || 'popup_seo_leads',
            "utm_source": UTMSource.current || 'blog_leads',
            "utm_term": null
        };
        openAccountService.sendOTP(request).then((res) => {
            hideLoader('sendOTPLoader');
            if (res && res.status === 200 && res.data && res.data.StatusCode === 200) {
                otpSessionID.current = res.data.Body.otp_session_id;
                setShowOpenAccountPopup(false);
                handleOTPShow();
            } else {
                setAPIError("Something went wrong, please try again later!");
            }
        }).catch((error) => {
            hideLoader('sendOTPLoader');
            if (error && error.response && error.response.data && error.response.data.Message) {
                setAPIError(error.response.data.Message);
            } else {
                setAPIError("Something went wrong, please try again later!");
            }
        });
    }

    useEffect(() => {
        fetchQueryParams();
    }, []);

    return (
        <>
        {
            showOpenAccountPopup ?
            <div className="exit-intent-sleekbox-overlay sleekbox-popup-active demat-modal-sleekbox-overlay">
                <div className="exit-intent-sleekbox-popup">
                    <div className="popup-sub-row">
                        <div className="leftwrap">
                            <div className="popup-sub">
                                <h4 >100% Free Demat Account  </h4>
                                <h4 className="dsmblock">100% Free <span> Demat Account + 1st Year</span> Free AMC</h4>
                                <ul>
                                    <li><span> No </span> Account <span>Opening Fee</span></li>
                                    <li><span> Lowest DP </span>  Charges (Rs.10 only)</li>
                                    <li> <span>Zero Auto Sqaure Off </span>Charges</li>
                                    <li><span>Free Call</span>  for Trade Facility</li>
                                </ul>
                                <p className="sleekbox-link remindMeLater"><a className="sleekbox-a" onClick={hideComponent}>Remind Me Later</a></p>
                            </div>
                        </div>
                        <div className="popup-sub-right">
                            <div className="signal-form" id="form-banner">
                                <form id="sso_form-pop" name="sso_form" className="mt-4 enq-form dmt_form" method="post">
                                    <input type="hidden" name="scode" id="scode" value="JFP" />
                                    <input type="hidden" id="source" name="source" value="CHOICEINDIA" />
                                    <h4 className="desktophide">+ 1st Year Free AMC </h4>
                                    <div className="form-group">
                                        <label htmlFor="mobile-number" hidden="">Mobile Number<span style={{ 'color': 'red' }}>*</span></label>
                                        <input type="text" autoComplete="off" maxLength="10" className="write numberonly input-type dmt" id="mobile_no" name="mobile_no" placeholder="Mobile Number" value={mobileNumber} onChange={handleMobile}/>
                                        <div>
                                            <small id="pop_mobile_no_error" className="errormsg pop_mobile_no_error text-danger">{errors.invalidMobile ? 'Invalid Mobile Number' : ''}</small>
                                            <small id="pop_mobile_no_error" className="errormsg pop_mobile_no_error text-danger">{errors.required ? 'Mobile Number is Required' : ''}</small>
                                        </div>
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" className="tick_by_def" data="JFP" id="terms_and_conditions" name="terms_and_conditions" checked readOnly />
                                        <label className="tc" target="_blank" htmlFor="exampleCheck1">I agree that I have read
                                            &amp; accept the <a className="termsPopup" onClick={handleTermsConditionShow}>Terms
                                                &amp; Conditions</a></label>
                                    </div>
                                    <button type="button" id="dem_btn_submit" className="btn btn-primary w-100 btn-f-sm signal-same-btn" disabled={loaders.sendOTPLoader} onClick={handleSendOTP}>{loaders.sendOTPLoader ? <div className="loaderB mx-auto"></div> : 'Send OTP'}</button>
                                    <div style={{ textAlign: 'center' }}>
                                        <small id="pop_mobile_no_error" className="errormsg pop_mobile_no_error text-danger">{APIError || ''}</small>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   : ''
        }
        {
            showOTP ? <OpenAccountOTPModal mobileNumber={mobileNumber} otpSessionID={otpSessionID.current} onClose={handleOTPClose}></OpenAccountOTPModal> : ''
        }
            <Modal show={showTermsCondition} onHide={handleTermsConditionClose} backdrop="static"
                keyboard={false} centered>
                <Modal.Header>
                    <Modal.Title>Attention</Modal.Title>
                </Modal.Header>
                <Modal.Body>We are capturing this data for communication purpose only and it's stored securely. We protect your privacy like it's ours! By agreeing you are allowing us to send updates via SMS/WhatsApp/Email/Call which will also override & will not be termed as violation of DND.</Modal.Body>
                <Modal.Footer>
                    <button type="button" className="btn btn-primary btn-primary-terms" onClick={handleTermsConditionClose}>Okay</button>
                </Modal.Footer>
            </Modal>

            {/* <Modal show={showOTP} onHide={handleOTPClose} backdrop="static"
                keyboard={false} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Enter OTP</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <OpenAccountOTPModal mobileNumber={mobileNumber} otpSessionID={otpSessionID.current}></OpenAccountOTPModal>
                </Modal.Body>
            </Modal> */}
        </>
    );
}

export default OpenDemateAccountPopup;