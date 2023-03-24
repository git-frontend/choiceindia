import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Link, useSearchParams } from "react-router-dom";
import openAccountService from '../../Services/openAccountService';
import Modal from 'react-bootstrap/Modal';
import './OpenDemateAccountStickyFooter.scss';
import OpenAccountOTPModal from './OpenAccountOTPModal.jsx';
import Thankyoupopup from './Thanku-popup.jsx';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

function OpenDemateAccountStickyFooter({ openDemateAccountPopup, openInfoPopup }) {
    const mobileRegex = /^(6|9|8|7)([0-9]{9})$/i;
    const [searchParams, setSearchParams] = useSearchParams();
    const [mobileNumber, setMobileNumber] = useState('');
    const [errors, setErrors] = useState({});
    const [APIError, setAPIError] = useState();
    const [showTermsCondition, setShowTermsCondition] = useState(false);
    const [loaders, setLoaders] = useState({});
    const [showOTP, setShowOTP] = useState(false);
    var UTMCampaign = useRef('');
    var UTMMedium = useRef('');
    var UTMSource = useRef('');
    var UTMTerm = useRef('');
    var UTMCustom = useRef('');
    var UTMContent = useRef('');
    var refercode = useRef('');
    var subrefercode = useRef('');
    const isBlog=(window.location.pathname.indexOf('blog') > -1) ? 'yes':'';
    var source = useRef('');
    var otpSessionID = useRef('');
    const webcheck = ((window.location.pathname.indexOf('best-stocks-to-buy') > -1) ||(window.location.pathname.indexOf('best-intraday-stocks-to-buy') > -1) || (window.location.pathname.indexOf('best-stocks-for-long-term-investment') > -1)||(window.location.pathname.indexOf('best-short-term-stocks-to-buy') > -1) ||(window.location.pathname.indexOf('nse-holidays') > -1)||(window.location.pathname.indexOf('bse-holidays') > -1)||(window.location.pathname.indexOf('mcx-ncdex-holidays') > -1)||(window.location.pathname.indexOf('stock-market-holidays') > -1) ) ? 'Best-Stock' : "Blog";

    const [captchaToken, setCaptchaToken] = useState('');
    const { executeRecaptcha } = useGoogleReCaptcha();

    /** state to show thankyou popup default */
    const [showThanku, setShowThanku] = useState({ showModal: false, page: 'no-addlead', resText: '' });

    const [showlead, setShowLead] = useState({ showModal: false });

    function handleMobile(e) {
        let value = e.target.value.replace(/\D/g, "");
        setMobileNumber(value);
        if (value.length === 10 && !mobileRegex.test(value)) {
            setErrors({
                ...errors,
                'invalidMobile': true
            });
        } else if (value.length === 10 && mobileRegex.test(value)) {
            setErrors({
                ...errors,
                'invalidMobile': false
            });
        }

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

    function handleOTPClose(link, msg) {
        //   console.log('CCMMM', link, msg);
        setShowOTP(false);

        if (link) {

            let result = link.match("respond-issue");
            if (result && result.length && result[0] === 'respond-issue') {
                setIsIssue(() => link);
                setShowThanku(prevState => {
                    return { ...prevState, showModal: false, redirectionLink: '', resText: msg ? msg : '', closeMd: closeModal }
                });
            } else {
                if (link._reactName) {
                    setShowThanku(prevState => {
                        return { ...prevState, showModal: false, redirectionLink: link, resText: msg ? msg : '', closeMd: closeModal }
                    });
                } else {
                    setShowThanku(prevState => {
                        return { ...prevState, showModal: true, redirectionLink: link, resText: msg ? msg : '', closeMd: closeModal }
                    });
                }
            }
        } else {
            setShowThanku(prevState => {
                return { ...prevState, showModal: false, redirectionLink: '', resText: msg ? msg : '', closeMd: closeModal }
            });
        }
    }


    function closeModal(link) {
        setShowLead(prevState => {
            return { ...prevState, showModal: false }
        });

        if (link) {
            window.location.href = link;
        }
    }

    function fetchQueryParams() {
        UTMCampaign.current = searchParams.get('utm_campaign') || '';
        UTMMedium.current = searchParams.get('utm_medium') || '';
        UTMSource.current = searchParams.get('utm_source') || '';
        UTMContent.current = searchParams.get('utm_content') || '';
        UTMCustom.current = searchParams.get('utm_custom') || '';
        UTMTerm.current = searchParams.get('utm_term') || '';
        refercode.current = (searchParams.get('refercode') && window.atob(searchParams.get('refercode'))) || '';
        source.current = (searchParams.get('source') && window.atob(searchParams.get('source'))) || '';
        subrefercode.current = (searchParams.get('subref') && window.atob(searchParams.get('subref'))) || '';
    }

    function handleSendOTP(e) {
        if(document.getElementById("mobile_no").value == ""){
            setErrors({
                ...errors,
                'invalidMobile': true
            });

        }else{
             fetchQueryParams();
        // sendOTP();
        handleReCaptchaVerify();

        }
       
    }

    function sendOTP() {
        showLoader('sendOTPLoader');
        let request = {
            "whatsapp_consent":true,
            "service_code": "JF",
            "mobile_number": mobileNumber,
            "product": "FINX",
            "request_source": "CHOICEINDIA",
            "source": source.current?source.current:"CHOICEINDIA",//type1=='MF' ?"CHOICEINDIA":"CHOICEINDIA",
            "user_consent": "1",
            "referred_id": refercode.current || null,
            "sub_ref": subrefercode.current || null,
           /*  "lead_source":type1=='MF' ?"CHOICEINDIA":"", */
            // 'seo_demat_leads'
            "utm_campaign": isBlog =="yes" ? UTMCampaign.current || 'choice_blog_leads' : UTMCampaign.current || null,
            "utm_content": UTMContent.current || null,
            "utm_custom": UTMCustom.current || null,
            // 'sidebar_seo_leads'
            "utm_medium":isBlog =="yes" ? UTMMedium.current || 'choice_blog' : UTMMedium.current || null,
            // 'blog_leads'
            "utm_source": isBlog =="yes" ?UTMSource.current || 'seo_demat_lead_generation' : UTMSource.current || null,
            "utm_term": UTMTerm.current || null,
            // "captcha":"f9A0RMq3vF7fPYkEiqZToKUKdneNzA2YWfMeKSHhkm",
            "captchaResp": captchaToken,
            "account_type" :"all"
            // "captcha": "1"
        }
        openAccountService.sendOTP(request).then((res) => {
            hideLoader('sendOTPLoader');
            if (res && res.status === 200 && res.data && res.data.StatusCode === 200) {
                otpSessionID.current = res.data.Body.otp_session_id;
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

    return (
        <>
            {
                webcheck == "Best-Stock" ?
                    <section className="sendopt  beststockres holidayOTP">
                        <div className="container">
                            <div className="form_main ">
                                <div className=" demat_text"><span className="form-ttl">Open a Free <span className="reshide"> Demat</span> Account <span className="reshide"><br />+ Free 1st Year AMC</span></span></div>
                                <div className="  Mobile_text">
                                    <input type="text"  className="form-textbox" id="mobile_no" name="mobile_no" placeholder='Mobile Number' autoComplete="off" maxLength="10" value={mobileNumber} onChange={handleMobile} />
                                    {/* <label htmlFor="form-email" className="form-label" >Mobile Number</label> */}
                                    <div>
                                        <small id="mobile_no_error" className="errormsg text-danger">{errors.invalidMobile ? 'Invalid Mobile Number' : ''}</small>
                                    </div>
                                </div>
                                <div className="  cust_check">
                                    <input type="checkbox" className="form_check" id="terms_and_conditions" checked readOnly />
                                    <label className="form_check_text">I agree that I have read and  accept<br /> the <a  onClick={handleTermsConditionShow}><span className="link_tc">Terms and Conditions</span></a></label>
                                </div>
                                <div className='api_errornew'>
                                <button type="submit" className="form-btn  btn-bg-dark btn-bg"  onClick={handleSendOTP}>{loaders.sendOTPLoader ? <div className="loaderB mx-auto"></div> : 'Send OTP'}</button>
                                <div><small id="API_error" className="errormsg text-danger api-text-danger">{APIError || ''}</small></div>
                                </div>
                                {/* <button type="submit" className=" OPt_item sub_group btnsub"><span className="send_OPT_btn" >Send OTP</span></button> */}
                               
                                                
                                {/* <div className=" OPt_item sub_group"><a href="/" ><span className="send_OPT_btn" >Send OTP</span></a></div> */}
                            </div>
                        </div>
                    </section>
                    :
                    webcheck == "Blog" ?
                        <div>
                            <div className="d-flex justify-content-center btn-view-more-sticky  mt-5 btn-fixed">
                                <button className=" primary-orange-btn scroll-top-account btn-bg btn-bg-dark openbtn" onClick={openDemateAccountPopup}>Open Free Account</button>
                            </div>
                            <section className="stickybottom">
                                <div className="container mx-auto">
                                        <form className="d-flex justify-content-between align-items-center">
                                            <div className='form-group'>
                                                <h2 className="text"><span>Open Free</span> Demat Account</h2>
                                            </div>
                                            <div className="form-group ">
                                                <input type="text" className="form-control numberonly mobile write mobilewrite" id="mobile_no" name="mobile_no" placeholder="Mobile Number*" autoComplete="off" maxLength="10" value={mobileNumber} onChange={handleMobile} />

                                                <div>
                                                    <small id="mobile_no_error" className="errormsg text-danger">{errors.invalidMobile ? 'Invalid Mobile Number' : ''}</small>
                                                </div>
                                            </div>
                                            <div className="form-group tnc d-flex align-items-top align-items-top-check">
                                                <label>
                                                    <input type="checkbox" className="checkbox termcon" id="terms_and_conditions" checked readOnly />
                                                </label>
                                                <div className="termcon termcon1 ">
                                                    <div> I agree that <a className="tc" onClick={handleTermsConditionShow}> Terms &amp; Conditions</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <button type="submit" className="form-btn sendotp btn-bg btn-bg-dark" disabled={errors.invalidMobile || mobileNumber.length !== 10 || loaders.sendOTPLoader} onClick={handleSendOTP}>{loaders.sendOTPLoader ? <div className="loaderB mx-auto"></div> : 'Send OTP'}</button>
                                                
                                            </div>
                                        </form>
                                </div>

                            </section>
                        </div> :
                        ""
            }

            {
                showOTP ?
                    <OpenAccountOTPModal mobileNumber={mobileNumber} otpSessionID={otpSessionID.current} onClose={handleOTPClose} openInfoPopup={(msg) => openInfoPopup(msg)}></OpenAccountOTPModal> : ''
            }
            {/* <Modal show={showOTP} onHide={handleOTPClose} backdrop="static"
                keyboard={false} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Enter OTP</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <OpenAccountOTPModal mobileNumber={mobileNumber} otpSessionID={otpSessionID.current}></OpenAccountOTPModal>
                </Modal.Body>
            </Modal> */}
            <Modal show={showTermsCondition} onHide={handleTermsConditionClose} backdrop="static"
                keyboard={false} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Attention</Modal.Title>
                </Modal.Header>
                <Modal.Body>We are capturing this data for communication and account opening (Demat and Mutual Fund) purpose and it's stored securely. We protect your privacy like it's ours! By agreeing you are allowing us to send updates via SMS/WhatsApp/Email/Call which will also override &amp; will not be termed as violation of DND <Link to="/terms-conditions" target="_blank" className="term_link">Read Here.</Link></Modal.Body>
                {/* <Modal.Footer>
                    <button type="button" className="btn btn-primary btn-primary-terms" onClick={handleTermsConditionClose}>Okay</button>
                </Modal.Footer> */}
            </Modal>

            {
                showThanku.showModal ? <Thankyoupopup isShow={showThanku} /> : ''
            }
        </>
    )
}

export default OpenDemateAccountStickyFooter;
