import './OpenDemateAccountPopup.scss';
import React, { useEffect, useState, useRef, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import openAccountService from '../../Services/openAccountService';
import Modal from 'react-bootstrap/Modal';
import OpenAccountOTPModal from './OpenAccountOTPModal.jsx';
import { Link } from "react-router-dom";
import Thankyoupopup from './Thanku-popup.jsx';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import utils from '../../Services/utils';

function OpenDemateAccountPopup({ hideComponent, openInfoPopup }) {

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
    var UTMContent = useRef('');
    var UTMCustom = useRef('');
    var UTMTerm = useRef('');
    var refercode = useRef('');
    var source = useRef('');
    // var otpSessionID = useRef('');
    var subrefercode = useRef('');
    const isBlog = (window.location.pathname.indexOf('blog') > -1) ? 'yes' : '';
    const [captchaToken, setCaptchaToken] = useState('');
    const { executeRecaptcha } = useGoogleReCaptcha();
    const blogcheck = ((window.location.pathname.indexOf('/blog/unlisted-shares-price-list/') > -1) ? 'yes' : " ")
    /** state to show thankyou popup default */
    // const [showAdPopUp, setshowAdPopUp] = useState({ showModal: false, page: 'no-addlead', resText: '',isOnboarding:'' });
    const [otpSessionID, setOTPSessionID] = useState(null)
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

    function handleOTPClose(link, msg, info, actionType, leadId) {
        // console.log('TTYTYTYTY',link,msg,info);
        setShowOTP(false);
        let obj = { "link": link, "msg": msg, "info": info, "actionType": actionType, "leadId": leadId };
        // if (link) {

        //     let result = link.match("respond-issue");
        //     if (result&&result.length&&result[0] === 'respond-issue') {
        //         setIsIssue(() => link);
        //         setShowThanku(prevState => {
        //             return { ...prevState, showModal: false, redirectionLink: '',resText: msg? msg:'',isOnboarding:info? info:"", closeMd: closeModal }
        //         });
        //     } else {
        //         if (link._reactName) {
        //             setShowThanku(prevState => {
        //                 return { ...prevState, showModal: false, redirectionLink: link,resText: msg? msg:'',isOnboarding:info? info:"", closeMd: closeModal }
        //             });
        //         } else {
        //             setShowThanku(prevState => {
        //                 return { ...prevState, showModal: true, redirectionLink: link,resText: msg? msg:'',isOnboarding:info? info:"", closeMd: closeModal }
        //             });
        //             console.log('SETTT',showThanku.showModal);
        //         }
        //     }
        // } else {
        //     setShowThanku(prevState => {
        //         return { ...prevState, showModal: false, redirectionLink: '',resText: msg? msg:'',isOnboarding:info? info:"", closeMd: closeModal }
        //     });
        // }
        hideComponent(obj);
    }

    function fetchQueryParams() {
        UTMCampaign.current = searchParams.get('utm_campaign') || '';
        UTMMedium.current = searchParams.get('utm_medium') || '';
        UTMSource.current = searchParams.get('utm_source') || '';
        UTMContent.current = searchParams.get('utm_content') || '';
        UTMCustom.current = searchParams.get('utm_custom') || '';
        UTMTerm.current = searchParams.get('utm_term') || '';
        refercode.current = (searchParams.get('refercode') && window.atob(searchParams.get('refercode'))) || '';
        subrefercode.current = (searchParams.get('subref') && window.atob(searchParams.get('subref'))) || '';
        source.current = (searchParams.get('source') && window.atob(searchParams.get('source'))) || '';
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
            // sendOTP();
            handleReCaptchaVerify();
        }
    }
    const [type, setType] = useState('send');
    // console.log("type",type)
    const updateType = (newType) => {
        setType(newType);
        handleReCaptchaVerify()
         // Call sendOTP with the updated type
    };
    function sendOTP() {
        showLoader('sendOTPLoader');
        const encodedMobileNumber = btoa(mobileNumber);
        let request = {
            "whatsapp_consent": true,
            // "service_code": "JF", // type1=='MF' ? "MF": "JF",
            "mobile_number": encodedMobileNumber,
            "type":type,
            // "product": "FINX", //type1=='MF' ? "INVESTICA":"FINX",
            // "request_source": "CHOICEINDIA",
            // "source": source.current ? source.current : "CHOICEINDIA",//type1=='MF' ?"CHOICEINDIA":"CHOICEINDIA",
            "user_consent": "1", // type1=='MF' ?"true":"1",
            "referred_id": refercode.current || null, //|| referID || null,
            "sub_ref": subrefercode.current || null,
            /*  "lead_source":type1=='MF' ?"CHOICEINDIA":"", */
            // 'seo_demat_leads'
            "utm_campaign": isBlog == "yes" ? UTMCampaign.current || 'choice_blog_leads' : UTMCampaign.current || null,
            "utm_content": (window.location.pathname.indexOf("/blog/unlisted-shares-price-list/") > -1) ? 'in_content_cta' : UTMContent.current || null,
            "utm_custom": UTMCustom.current || window.location.pathname.toString().replace('/', ''),
            // 'sidebar_seo_leads'
            "utm_medium": isBlog == "yes" ? UTMMedium.current || 'choice_blog' : UTMMedium.current || null,
            // 'blog_leads'
            "utm_source": (window.location.pathname.indexOf("/unlisted-shares-price-list/") > -1) ? 'ul_leads' : isBlog == "yes" ? UTMSource.current || 'seo_demat_lead_generation' : UTMSource.current || null,
            "utm_term": UTMTerm.current || null,
            // "captcha":"f9A0RMq3vF7fPYkEiqZToKUKdneNzA2YWfMeKSHhkm",
            // "captchaResp": captchaToken,
            "account_type": "all" // type1=='MF'?"":"all"
            // "captcha": "1"

        };
        // console.log("hghg", request)

        openAccountService.sendOTP(request,captchaToken ).then((res) => {
            hideLoader('sendOTPLoader');
            // console.log("res",res)
            if (res && res.StatusCode === 200 ) {
                utils.pushDataLayerEvent({
                    'event': 'ci_onboard_lead_initiated',
                    'page_path': window.location.pathname,
                    'page_url': window.location.href,
                    'lead_source': 'choiceindia',
                    'userId': utils.generateSHA256Hash(mobileNumber.toString()),
                    'leadId': res.Body.leadid,
                    'platform': window.innerWidth < 767 ? 'mobileweb' : 'desktopweb'
                })
                setOTPSessionID((type1 == 'MF') ? res.Body.session_id : res.Body.otp_session_id)
                // setForm('sent-otp')
                // setformdata()
                setShowThanku(prevState => {
                    return { ...prevState, showModal: false, page: 'no-addlead', resText: '', isOnboarding: '', isNewLead: res.Body.new_lead ? res.Body.new_lead : false }
                });
                fetchQueryParams();
                // resetOTPPopup();
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
            sendOTP(type,captchaToken);
        }
    }, [captchaToken]);

    return (
        <>
            {
                showOpenAccountPopup ?
                    <div className="exit-intent-sleekbox-overlay sleekbox-popup-active otp-main-modal demat-modal-sleekbox-overlay show-res">
                        <div className="exit-intent-sleekbox-popup">
                            <div className="close">
                                <a onClick={hideComponent} class="closebtn cursor-pointer" >&times;</a>
                            </div>
                            <div className="popup-sub-row">
                                {
                                    blogcheck ?
                                        <div></div> :
                                        <div className="leftwrap">
                                            <div className="popup-sub">
                                                <h4 >100% Free Demat Account  </h4>
                                                <h4 className="dsmblock">100% Free <span> Demat Account + 1st Year</span> Free AMC</h4>
                                                <ul>
                                                    <li><span> No </span> Account <span>Opening Fee</span></li>
                                                    <li><span> Lowest DP </span>  Charges (Rs.10 only)</li>
                                                    <li> <span>Zero Auto Square Off </span>Charges</li>
                                                    <li><span>Free Call</span>  for Trade Facility</li>
                                                </ul>
                                                {/* <p className="sleekbox-link remindMeLater"><a className="sleekbox-a" onClick={hideComponent}>Remind Me Later</a></p> */}
                                            </div>
                                        </div>
                                }
                                <div className="popup-sub-right">
                                    <div className="signal-form" id="form-banner">


                                        <form id="sso_form-pop" name="sso_form" className="mt-4 enq-form dmt_form" method="post">
                                            <input type="hidden" name="scode" id="scode" value="JFP" />
                                            <input type="hidden" id="source" name="source" value="CHOICEINDIA" />
                                            {
                                                blogcheck ?
                                                    <h4 className="desktophide">Let’s Invest In <span>Unlisted Shares</span></h4>
                                                     :
                                                    <h4 className="desktophide">+ 1st Year Free AMC </h4>
                                            }
                                            {
                                                blogcheck ?
                                                    <h4 className="desktopshow">Let’s Invest In <span>Unlisted Shares</span></h4>
                                                    :
                                                    <h4 className="desktopshow">100% Free <span> Demat Account + <br />1st Year</span> Free AMC</h4>
                                            }
                                            <div className="form-group">
                                                {/* <label htmlFor="mobile-number" hidden="">Mobile Number<span style={{ 'color': 'red' }}>*</span></label> */}
                                                <input type="text" pattern='\d*' autoComplete="off" maxLength="10" className="write numberonly input-type dmt" id="mobile_no" name="mobile_no" placeholder="Mobile Number" value={mobileNumber} onChange={handleMobile} />
                                                <div>
                                                    <small id="pop_mobile_no_error" className="errormsg pop_mobile_no_error text-danger">{errors.invalidMobile ? 'Invalid Mobile Number' : ''}</small>
                                                    <small id="pop_mobile_no_error" className="errormsg pop_mobile_no_error text-danger">{errors.required ? 'Mobile Number is Required' : ''}</small>
                                                </div>
                                            </div>
                                            <div className="form-check">
                                                <input type="checkbox" className="tick_by_def" data="JFP" id="terms_and_conditions" name="terms_and_conditions" checked readOnly />
                                                <label className="tc" target="_blank" htmlFor="exampleCheck1">I agree & accept <a className="termsPopup" onClick={handleTermsConditionShow}>T&C</a></label>
                                            </div>
                                            <button type="submit" id="dem_btn_submit" className="btn btn-primary w-100 btn-f-sm signal-same-btn" disabled={loaders.sendOTPLoader} onClick={handleSendOTP}>{loaders.sendOTPLoader ? <div className="loaderB mx-auto"></div> : 'Send OTP'}</button>
                                            <div style={{ textAlign: 'center' }}>
                                                <small id="pop_mobile_no_error" className="errormsg pop_mobile_no_error text-danger">{APIError || ''}</small>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> : ''
            }
            {
                showOTP ? <OpenAccountOTPModal mobileNumber={mobileNumber} otpSessionID={otpSessionID} onClose={handleOTPClose} openInfoPopup={(msg) => openInfoPopup(msg)} updateType={updateType}></OpenAccountOTPModal> : ''
            }
            <Modal show={showTermsCondition} onHide={handleTermsConditionClose} backdrop="static" className="termcondition"
                keyboard={false} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Attention</Modal.Title>
                </Modal.Header>
                <Modal.Body>We are capturing this data for communication and account opening (Demat and Mutual Fund) purpose and it's stored securely. We protect your privacy like it's ours! By agreeing you are allowing us to send updates via SMS/WhatsApp/Email/Call which will also override &amp; will not be termed as violation of DND <Link to="/terms-conditions" target="_blank" className="term_link">Read Here.</Link></Modal.Body>
                {/* <Modal.Footer>
                    <button type="button" className="btn btn-primary btn-primary-terms" onClick={handleTermsConditionClose}>Okay</button>
                </Modal.Footer> */}
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

            {/* {
                showThanku.showModal ? <Thankyoupopup isShow={showThanku} /> : console.log('LJKDJLKJDLFD')
            } */}
        </>
    );
}

export default OpenDemateAccountPopup;