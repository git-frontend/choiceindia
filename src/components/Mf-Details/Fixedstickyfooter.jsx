import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Link, useSearchParams } from "react-router-dom";
import openAccountService from '../../Services/openAccountService';
import Modal from 'react-bootstrap/Modal';
// import './OpenDemateAccountStickyFooter.scss';
import '../Common-features/OpenDemateAccountStickyFooter'
import OpenAccountOTPModal from '../Common-features/OpenAccountOTPModal.jsx';
// import Thankyoupopup from '../Thanku-popup.jsx';
import Thankyoupopup from '../Common-features/Thanku-popup.jsx'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import '../Common-features/demat-form.scss'
import "./mf-details.scss";
import Form from 'react-bootstrap/Form';
import utils from '../../Services/utils';
function Fixedstickyfooter({ openDemateAccountPopup, openInfoPopup }) {
    const mobileRegex = /^(6|9|8|7)([0-9]{9})$/i;
    const [searchParams, setSearchParams] = useSearchParams();
    const [mobileNumber, setMobileNumber] = useState('');
    const [errors, setErrors] = useState({});
    const [APIError, setAPIError] = useState();
    const [showTermsCondition, setShowTermsCondition] = useState(false);
    const [loaders, setLoaders] = useState({});
    const [showOTP, setShowOTP] = useState(false);
    const [referID, setReferID] = useState('');
    var UTMCampaign = useRef('');
    var UTMMedium = useRef('');
    var UTMSource = useRef('');
    var UTMTerm = useRef('');
    var UTMCustom = useRef('');
    var UTMContent = useRef('');
    var refercode = useRef('');
    var subrefercode = useRef('');
    const isBlog = (window.location.pathname.indexOf('blog') > -1) ? 'yes' : '';
    var source = useRef('');
    const [otpSessionID, setOTPSessionID] = useState(null)
    const type1 = "";
    // var otpSessionID = useRef('');
    const webcheck = ((window.location.pathname.indexOf('best-stocks-to-buy') > -1) || (window.location.pathname.indexOf('best-intraday-stocks-to-buy') > -1) || (window.location.pathname.indexOf('best-stocks-for-long-term-investment') > -1) || (window.location.pathname.indexOf('best-short-term-stocks-to-buy') > -1) || (window.location.pathname.indexOf('nse-holidays') > -1) || (window.location.pathname.indexOf('bse-holidays') > -1) || (window.location.pathname.indexOf('mcx-ncdex-holidays') > -1) || (window.location.pathname.indexOf('stock-market-holidays') > -1) || (window.location.pathname.indexOf('upcoming-agm') > -1) || (window.location.pathname.indexOf('upcoming-board-meeting') > -1) || (window.location.pathname.indexOf('upcoming-bonus-shares') > -1) || (window.location.pathname.indexOf('upcoming-dividend-paying-stocks') > -1) || (window.location.pathname.indexOf('upcoming-stock-splits') > -1) || (window.location.pathname.indexOf('upcoming-rights-issue') > -1)) ? 'Best-Stock' : "Blog";
    const isMF = ((window.location.pathname.indexOf('scheme') > -1) ) ? 'yes' : '';
    // console.log("mf",isMF)
    var otpLeadID = useRef('');
    var referLink = useRef('');
    const [captchaToken, setCaptchaToken] = useState('');
    const { executeRecaptcha } = useGoogleReCaptcha();

    /** state to show thankyou popup default */
    const [showThanku, setShowThanku] = useState({ showModal: false, page: 'no-addlead', resText: '' });

    const [showlead, setShowLead] = useState({ showModal: false });

    /**to show consent popup */
    const [consent, setShowConsent] = useState(false);

    const [otperror, setOTPErrors] = useState();
    const [leadId, setLeadId] = useState();
    const [showErrorToaster, setShowErrorToaster] = useState(false);
    /**variable for loaders */
    const [consentLoaders, setConsentLoaders] = useState({
        consentYesLoader: false,
        consentNoLoader: false
    });

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
    function handleReferID(e) {
        let value = e.target.value.replace(/([^\w]+|\s+)/g, "");
        // if (value) {
        //     setMobileNumber(value);
        //     setErrors({});
        // } else {
        //     setMobileNumber(value);
        //     setErrors({});
        // }
        setReferID(value);
        // console.log('RID',referID);
        // console.log('RID2',refercode.current)
        setErrors({});
    }
    function chapterScroll1(id) {
        // console.log("check", id);
        var element = document.getElementById(id);
        var headerOffset = 140;
        var elementPosition = element.getBoundingClientRect().top;
        var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
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

    function handleOTPClose(link, msg, onboardFlag, actionType, leadID) {
        //   console.log('CCMMM', link, msg);
        setShowOTP(false);
        if (actionType != 'popup_and_no_update') {
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
        } else {
            referLink.current = link ? link : null;
            otpLeadID.current = leadID ? leadID : null;
            setShowConsent(() => true)
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
        if (mobileNumber && mobileNumber < 10 && !mobileRegex.test(mobileNumber)) {
            setErrors({
                ...errors,
                'invalidMobile': true
            });

        } else {
            fetchQueryParams();
            // sendOTP();
            handleReCaptchaVerify();

        }

    }
    function showAPIErrorToaster() {
        setShowErrorToaster(true);
    }

    function sendOTP(type, captchaToken) {
        showLoader('sendOTPLoader');
        const encodedMobileNumber = btoa(mobileNumber);
        let request = {
            "whatsapp_consent": true,
            // "service_code": "JF",
            "mobile_number": encodedMobileNumber,
            "type":type,
            "product": "FINX",
            "request_source": "CHOICEINDIA",
            "source": source.current ? source.current : "CHOICEINDIA",//type1=='MF' ?"CHOICEINDIA":"CHOICEINDIA",
            "user_consent": "1",
            "referred_id": refercode.current || referID || null,
            "sub_ref": subrefercode.current || null,
            /*  "lead_source":type1=='MF' ?"CHOICEINDIA":"", */
            // 'seo_demat_leads'
            "utm_campaign": UTMCampaign.current || null,
            "utm_content": UTMContent.current || null,
            "utm_custom": UTMCustom.current || window.location.pathname.toString().replace('/', ''),
            // 'sidebar_seo_leads'
            "utm_medium": UTMMedium.current || null,
            // 'blog_leads'
            "utm_source": isMF == "yes" ? UTMSource.current || 'choice-mf-web':UTMSource.current || null,
            "utm_term": UTMTerm.current || null,
            // "captcha":"f9A0RMq3vF7fPYkEiqZToKUKdneNzA2YWfMeKSHhkm",
            "captchaResp": captchaToken,
            "account_type": "all"
            // "captcha": "1"
        }
        openAccountService.sentOTPService(request,captchaToken,hideLoader,setLeadId,type1,setOTPSessionID,setShowThanku,fetchQueryParams,handleOTPShow,setAPIError,showAPIErrorToaster)
        // openAccountService.sendOTP(request).then((res) => {
        //     hideLoader('sendOTPLoader');
        //     if (res && res.status === 200 && res.data && res.data.StatusCode === 200) {
        //         setLeadId(res.data.Body.leadid);
        //         utils.pushDataLayerEvent({
        //             'event': 'ci_onboard_lead_initiated',
        //             'ObLeadReferenceId': refercode.current || referID || null,
        //             'page_path': window.location.pathname,
        //             'page_url': window.location.href,
        //             'lead_source': 'choiceindia',
        //             'userId': utils.generateSHA256Hash(mobileNumber.toString()),
        //             'leadId': res.Body.leadid,
        //             'platform': window.innerWidth < 767 ? 'mobileweb' : 'desktopweb'
        //         })
        //         otpSessionID.current = res.data.Body.otp_session_id;
        //         otpLeadID.current = res.data.Body.lid
        //         handleOTPShow();
        //     } else {
        //         setAPIError("Something went wrong, please try again later!");
        //     }
        // }).catch((error) => {
        //     hideLoader('sendOTPLoader');
        //     if (error && error.response && error.response.data && error.response.data.Message) {
        //         setAPIError(error.response.data.Message);
        //     } else {
        //         setAPIError("Something went wrong, please try again later!");
        //     }
        // });
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
    const [type, setType] = useState('send');
    // console.log("type",type)
    const updateType = (newType) => {
        setType(newType);
        handleReCaptchaVerify()
    };

    useEffect(() => {
        if (captchaToken) {
            sendOTP(type , captchaToken);
        }
    }, [captchaToken]);

    /**on click no consent */
    function submitConsent(consent) {

        setOTPErrors(null);
        if (consent == 'yes') {
            setConsentLoaders({ ...consentLoaders, consentYesLoader: true, consentNoLoader: false });
        } else {
            setConsentLoaders({ ...consentLoaders, consentYesLoader: false, consentNoLoader: true });
        }

        let request = {
            "mobile_number": null,
            otp: null,
            session_id: null,
            is_consent: consent ? consent : null,
            lid: otpLeadID.current ? otpLeadID.current : null
        };

        openAccountService.verifyOTP(request, "JF").then((res) => {
            if (res && res.status === 200 && res.data && res.data.Body) {
                utils.pushDataLayerEvent({
                    'event': 'ci_onboard_lead_generated',
                    'page_path': window.location.pathname,
                    'page_url': window.location.href,
                    'mobileNoEnc': utils.generateSHA256Hash(mobileNumber.toString()),
                    'leadId': leadId,
                    'lead_source':'choiceindia',
                    'userId': utils.generateSHA256Hash(mobileNumber.toString()),
                    'platform': window.innerWidth < 767 ? 'mobileweb' : 'desktopweb'
                })
                // utils.pushDataLayerEvent({
                //     'event': 'open_account_lead_submit',
                //     'page_path': window.location.pathname,
                //     'page_url': window.location.href,
                //     'phone': utils.generateSHA256Hash(mobileNumber.toString()),
                //     'lead_source':'choiceindia',
                //     'userId': utils.generateSHA256Hash(mobileNumber.toString()),
                //     'platform': window.innerWidth < 767 ? 'mobileweb' : 'desktopweb'
                // })
                setConsentLoaders({ ...consentLoaders, consentYesLoader: false, consentNoLoader: false });
                console.log('Success', res);
                if (consent == "yes") {
                    window.location.href = referLink ? referLink : null;
                } else {
                    setShowConsent(false)
                }
            } else {
                setConsentLoaders({ ...consentLoaders, consentYesLoader: false, consentNoLoader: false });
                // setOTPErrors((res && res.data && res.data.Body && res.data.Body.Message) ? res.data.Body.Message : 'Something Went Wrong');
            }
        }).catch((error) => {
            setConsentLoaders({ ...consentLoaders, consentYesLoader: false, consentNoLoader: false });
            if (error && error.response && error.response.data && error.response.data.Message) {

            } else {

            }
        });
    }


    return (
        <>
            
                    <section className="sendopt  beststockres holidayOTP fixed-form">
                        <div className="container">
                            <div className="form_main  form-section">
                                <div className='form-items'>
                                    <div className='shape-yellow'>
                                        <div className='cross-border'></div>
                                        <h6>Invest in Mutual Funds</h6>
                                    </div>
                                </div>
                               
                                <div className='form-items check-text-box'>
                                    <div className='form-grp'>
                                        <input type="text" className='form-control' placeholder='Enter Mobile Number' id="mobile_no" autoComplete="off" maxLength="10" value={mobileNumber} onChange={handleMobile} />
                                        <div>
                                            <small id="mobile_no_error" className="errormsg text-danger">{errors.invalidMobile ? 'Invalid Mobile Number' : ''}</small>
                                        </div>
                                    </div>
                                    <div className='form-grp2'>
                                        {/* <input type="text" className='form-control' placeholder='Referral Code (Optional)' /> */}
                                        <Form.Control pattern="[a-zA-Z0-9]*" name="refer_id" id="refer_id" placeholder='Referral Code (Optional)' className="form-control" autoComplete="off" value={referID} readOnly={refercode.current} onChange={handleReferID} />
                                    </div>
                                    <div className="cust-checkbox">
                                        <Form.Check inline name="terms_and_conditions" type="checkbox" >
                                            <Form.Check.Input type="checkbox" checked />
                                            <Form.Check.Label>I agree &amp; <br /> accept <a className="link-tc" onClick={handleTermsConditionShow}><span>T&C</span></a></Form.Check.Label>
                                        </Form.Check>


                                    </div>
                                </div>
                                <div className='mf-stickybtn api_errornew'>
                                    <button type="submit" className="form-btn  btn-bg-dark btn-bg" onClick={handleSendOTP}>{loaders.sendOTPLoader ? <div className="loaderB mx-auto"></div> : 'Send OTP'}</button>
                                    <div><small id="API_error" className="errormsg text-danger api-text-danger">{APIError || ''}</small></div>
                                </div>
                            </div>

                        </div>
                    </section>
                    


            {
                showOTP ?
                    <OpenAccountOTPModal mobileNumber={mobileNumber} otpSessionID={otpSessionID} otpLeadID={otpLeadID.current} onClose={handleOTPClose} openInfoPopup={(msg) => openInfoPopup(msg)} updateType={updateType}></OpenAccountOTPModal> : ''
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

            {/* for referral code */}
            <Modal className="bt-strap-mdl otp-main-modal Referral-code-model" show={consent} onHide={() => { setShowConsent(false) }} backdrop='static' keyboard={false}>
                <Modal.Header className="border-0" closeButton>
                </Modal.Header>
                <Modal.Body className="border-0">
                    <div className="exit-intent-sleekbox-overlay sleekbox-popup-active referral-overlay">
                        <div className="exit-intent-sleekbox-popup">
                            <div className="popup-sub-row">
                                <div className="popup-sub-right">
                                    <div>
                                        <p className="heading">Dear Investor</p>
                                        <p className="subheading mb-3 mb-sm-0">Your mobile number is already associated with another refercode. To proceed with your onboarding, please select one of the following options:</p>
                                    </div>
                                    <div className="btnwrap">
                                        <button className="btn-bg btn-bg-dark sendbtn btn btn-primary referral-btn referral-btn-hover" onClick={() => { consentLoaders.consentNoLoader ? null : submitConsent('no') }} disabled={consentLoaders.consentYesLoader}>
                                            {
                                                consentLoaders.consentNoLoader ?
                                                    <div className="loaderB mx-auto"></div> : <span>No, Cancel Onboarding and Connect RM</span>
                                            }
                                        </button>
                                        <button className="btn-bg referral-btn" onClick={() => { consentLoaders.consentYesLoader ? null : submitConsent('yes') }} disabled={consentLoaders.consentNoLoader}>
                                            {
                                                consentLoaders.consentYesLoader ?
                                                    <div className="loaderB mx-auto"></div> : <span>Yes, continue with Existing Referral Code</span>
                                            } </button>
                                    </div>
                                    {
                                        otperror ?
                                            <span class="text-danger">{otperror}</span> : ''
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Fixedstickyfooter;
