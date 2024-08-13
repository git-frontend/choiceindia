import React, { useEffect, useState, useRef, useCallback } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import openAccountService from '../../Services/openAccountService';
import { Link, useLocation, useSearchParams } from "react-router-dom";
import "./demat-form.scss"
import OpenAccountOTPModal from './OpenAccountOTPModal.jsx';
import OpenDemateAccountPopup from './OpenDemateAccountPopup.jsx';
import OpenDemateAccountStickyFooter from './OpenDemateAccountStickyFooter.jsx';
import OpenAccountLanguageContent from '../../Services/OpenAccountLanguageContent';
import Thankyoupopup from './Thanku-popup.jsx';
import infoimg from '../../assets/images/Info.svg';
import failureimg from '../../assets/images/failure.svg';
import './Thankyoupopup.scss';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import utils from "../../Services/utils";

function DematAccountForm(props) {
    const mobileRegex = /^(6|9|8|7)([0-9]{9})$/i;
    const [searchParams, setSearchParams] = useSearchParams();
    const [mobileNumber, setMobileNumber] = useState('');
    const [errors, setErrors] = useState({});
    const [showTermsCondition, setShowTermsCondition] = useState(false);
    const [showOTP, setShowOTP] = useState(false);
    const [loaders, setLoaders] = useState({});
    const [APIError, setAPIError] = useState();
    const [showErrorToaster, setShowErrorToaster] = useState(false);
    const type1 = "JF"; //(window.location.pathname.indexOf('mutual-funds-investment') > -1) ? 'MF':"JF";
    const isBlog = (window.location.pathname.indexOf('blog') > -1) ? 'yes' : '';
    const isMF = (window.location.pathname.indexOf('mutual-funds-investment') > -1) || (window.location.pathname.indexOf('top-funds') > -1) || (window.location.pathname.indexOf('amc') > -1) ? 'yes' : '';
    const [referID, setReferID] = useState('');

    const location = useLocation();


    const webcheck = ((window.location.pathname.indexOf('campaign/commodity-trading') > -1) || (window.location.pathname.indexOf('campaign/forex-trading') > -1)) || (window.location.pathname.indexOf('campaign/trading-strategies') > -1) || (window.location.pathname.indexOf('campaign/hindi/trading-strategies') > -1) || (window.location.pathname.indexOf('technical-analysis') > -1) || (window.location.pathname.indexOf('futures-options-trading') > -1) || (window.location.pathname.indexOf('/campaign/fno-trading') > -1) || (window.location.pathname.indexOf('/campaign/intraday-trading') > -1) || (window.location.pathname.indexOf('/blog/unlisted-shares-price-list/') > -1) ? 'campaign' : " ";

    /** state to show thankyou popup (add-lead) */
    const [showlead, setShowLead] = useState({ showModal: false, isFailure: false, titleText: 'Success', msgText: '' });

    /** state to show thankyou popup default */
    const [showThanku, setShowThanku] = useState({ showModal: false, page: 'no-addlead', resText: '', isOnboarding: '', isNewLead: null });

    const [ischeck, setIsCheck] = useState(false);
    const [OTPSendSuccessToaster, setOTPSendSuccessToaster] = useState({});
    const [otpSessionID, setOTPSessionID] = useState(null)
    var UTMCampaign = useRef('');
    var UTMMedium = useRef('');
    var UTMSource = useRef('');

    var UTMContent = useRef('');
    var UTMCustom = useRef('');
    var UTMTerm = useRef('');
    var refercode = useRef('');
    var refercodeInv = useRef('');
    var source = useRef('');
    var subrefercode = useRef('');
    var subrefercodeInv = useRef('');
    // var otpSessionID = useRef('');
    var isMobile = useRef(isMobileDevice());
    const [showOpenAccountPopup, setShowOpenAccountPopup] = useState(false);
    const [fablesDetailTitleId, setFablesDetailTitleId] = useState(true);
    const [OTPInfoPopup, setOTPInfoPopup] = useState(false);
    const [OTPInfoPopupMsg, setOTPInfoPopupMsg] = useState('');
    const [IsIssue, setIsIssue] = useState('');
    const [captchaToken, setCaptchaToken] = useState('');
    const [showReferInput, setShowReferInput] = useState(() => false);

    const { executeRecaptcha } = useGoogleReCaptcha();

    /**to show consent popup */
    const [consent, setShowConsent] = useState(false);

    /**variable for loaders */
    const [consentLoaders, setConsentLoaders] = useState({
        consentYesLoader: false,
        consentNoLoader: false
    });

    /**Error variable for consent */
    const [consentError, setConsentErrors] = useState();

    var otpLeadID = useRef('');
    var referLink = useRef('');

    const [showRefMsg, setShowRefMsg] = useState();
    const [leadId, setLeadId] = useState();
    const [responseLink,setResponseLink]=useState();
    /**on click no consent */
    function submitConsent(consent) {


        if (consent == 'yes') {
            handleOTPClose(responseLink)
            // setConsentLoaders({ ...consentLoaders, consentYesLoader: true, consentNoLoader: false });
        } else {
            setShowConsent(() => false);
            setMobileNumber("");
            setReferID("")
            // setConsentLoaders({ ...consentLoaders, consentYesLoader: false, consentNoLoader: true });

        }

        // let request = {
        //     "mobile_number": null,
        //     otp: null,
        //     session_id: otpSessionID,
        //     is_consent: consent ? consent : null,
        //     lid: otpLeadID.current ? otpLeadID.current : null
        // };
        // openAccountService.verifyOTPService(mobileNumber,request,captchaToken,hideLoader,handleOTPClose ,openOTPInfoPopup,setErrors)
        // openAccountService.verifyOTP(request, "JF").then((res) => {
        //     if (res && res.status === 200 && res.data && res.data.Body) {
        //         utils.pushDataLayerEvent({
        //             'event': 'ci_onboard_lead_generated',
        //             'page_path': window.location.pathname,
        //             'page_url': window.location.href,
        //             'mobileNoEnc': utils.generateSHA256Hash(mobileNumber.toString()),
        //             'leadId': leadId,
        //             'lead_source':'choiceindia',
        //             'userId': utils.generateSHA256Hash(mobileNumber.toString()),
        //             'platform': window.innerWidth < 767 ? 'mobileweb' : 'desktopweb'
        //         })
                
        //         setConsentLoaders({ ...consentLoaders, consentYesLoader: false, consentNoLoader: false });
        //         // console.log('Success', res);
        //         if (consent == "yes") {
        //             window.location.href = referLink.current ? referLink.current : null;
        //         } else {
        //             setShowConsent(() => false);
        //         }
        //         // }
        //     } else {
        //         setConsentLoaders({ ...consentLoaders, consentYesLoader: false, consentNoLoader: false });
        //         setConsentErrors((res && res.data && res.data.Body && res.data.Body.Message) ? res.data.Body.Message : 'Something Went Wrong');
        //     }
        // }).catch((error) => {
        //     setConsentLoaders({ ...consentLoaders, consentYesLoader: false, consentNoLoader: false });
        //     if (error && error.response && error.response.data && error.response.data.Message) {
        //         setConsentErrors(error.response.data.Message);
        //     } else {
        //         setConsentErrors('Something Went Wrong.');
        //     }
        // });
    }


    function isMobileDevice() {
        return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    }

    function showOpenAccountAdPopup() {
        if (!showOTP) {
            setShowOpenAccountPopup(true);
        } else {
            callOpenAccountAdPopupAgain();
        }
    }

    /**function executes to close the ad popup */
    function hideOpenAccountAdPopup(showAdValues) {

        if (showAdValues.actionType != 'popup_and_no_update') {
            if (showAdValues.link) {
                setShowThanku(prevState => {
                    return { ...prevState, showModal: true, redirectionLink: showAdValues?.link, resText: showAdValues?.msg, isOnboarding: showAdValues?.info, closeMd: closeModal }
                });
            }
            setShowOpenAccountPopup(false);
            callOpenAccountAdPopupAgain();
        } else {
            referLink.current = showAdValues.link ? showAdValues.link : null;
            otpLeadID.current = showAdValues.leadId ? showAdValues.leadId : null;
            setShowConsent(() => true)
        }
    }

    function callOpenAccountAdPopupAgain() {
        //after 15min
        setTimeout(() => {
            showOpenAccountAdPopup();
        }, 900000)
    }

    useEffect(() => {
        if(window.location.pathname.includes('blog') === true){
        props.newDematForm(false);
        }
        if (!isMobile.current && props.isPopupVisible) {
            setTimeout(() => {
                showOpenAccountAdPopup();
            }, 60000);
        }
    }, []);


    function handleMobile(e) {
        let value = e.target.value.replace(/\D/g, "");
        setMobileNumber(value);
        setErrors({});
    }

    function handleReferID(e) {
        let value = e.target.value.replace(/([^\w]+|\s+)/g, "");
        setReferID(value);
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

    function handleOTPClose(link, msg, info, actionType, leadID) {
        setShowOTP(false);
        setResponseLink(link || "")
        if (actionType != 'popup_and_no_update') {
            if (link) {

                let result = link.match("respond-issue");
                if (result && result.length && result[0] === 'respond-issue') {
                    setIsIssue(() => link);
                    setShowThanku(prevState => {
                        return { ...prevState, showModal: false, redirectionLink: '', resText: msg ? msg : '', isOnboarding: info ? info : "", closeMd: closeModal }
                    });
                } else {
                    if (link._reactName) {
                        setShowThanku(prevState => {
                            return { ...prevState, showModal: false, redirectionLink: link, resText: msg ? msg : '', isOnboarding: info ? info : "", closeMd: closeModal }
                        });
                    } else {
                        setShowThanku(prevState => {
                            return { ...prevState, showModal: true, redirectionLink: link, resText: msg ? msg : '', isOnboarding: info ? info : "", closeMd: closeModal }
                        });
                    }
                }
            } else {
                setShowThanku(prevState => {
                    return { ...prevState, showModal: false, redirectionLink: '', resText: msg ? msg : '', isOnboarding: info ? info : "", closeMd: closeModal }
                });
            }
        } else {
            referLink.current = link ? link : null;
            otpLeadID.current = leadID ? leadID : null;
            setShowRefMsg(() => msg ? msg : '');
            setShowConsent(() => true)
        }
        // closeModal(link);
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
            if (props.page == 'add-lead') {
                sendNewLeadOTP();
            } else {
                // sendOTP();
                handleReCaptchaVerify();
            }
            // sendOTP();
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

    function closeModal(link) {
        setShowLead(prevState => {
            return { ...prevState, showModal: false }
        });

        if (link) {
            window.location.href = link;
        }
    }

    function sendNewLeadOTP() {
        // showLoader('sendOTPLoader');
        let request = {
            "mobile_number": mobileNumber,
            "product": "FINX",
            "request_source": "CHOICEINDIA",
            "source": "CHOICEINDIA",
            "user_consent": "1",
            "referred_id": refercode.current || null,
            "sub_ref": null,
            "utm_campaign": UTMCampaign.current || 'seo_demat_leads',
            "utm_medium": UTMMedium.current || 'sidebar_seo_leads',
            "utm_source": UTMSource.current || 'blog_leads',
            "utm_term": UTMTerm.current || null,
            "utm_custom": UTMCustom.current || window.location.pathname.toString().replace('/', ''),
            "utm_content": UTMContent.current || null
        };

        openAccountService.addNewLead(request).then((res) => {

            if (res && res.status === 200) {
                setShowLead(prevState => {
                    return { ...prevState, showModal: true, isFailure: false, titleText: 'Success', msgText: res.data.Message, closeMd: closeModal }
                });
            } else {
                setShowLead(prevState => {
                    return { ...prevState, showModal: true, isFailure: true, titleText: 'Oops', msgText: res.data.Message, closeMd: closeModal }
                });
            }
        })
        setShowLead(true);
        hideLoader('sendOTPLoader');

    }
    const [type, setType] = useState('send');
    // console.log("type",type)
    const updateType = (newType) => {
        setType(newType);
        handleReCaptchaVerify()
    };

    function sendOTP(type, captchaToken) {
        showLoader('sendOTPLoader');
        const encodedMobileNumber = btoa(mobileNumber);
        let request = {
            "whatsapp_consent": true,
            "mobile_number": encodedMobileNumber,
            "type":type,
            "user_consent": type1 == 'MF' ? "true" : "1",
            "referred_id": refercode.current || referID || null,
            "sub_ref": subrefercode.current || null,
            "utm_campaign": isBlog == "yes" ? UTMCampaign.current || 'choice_blog_leads' : UTMCampaign.current ? UTMCampaign.current : (window.location.pathname.indexOf("/minor-demat-account") > -1) ? 'DL_Minor' : (window.location.pathname.indexOf("/nri-demat-account") > -1) ? 'DL_NRI' : (window.location.pathname.indexOf("/blog/unlisted-shares-price-list/") > -1) ? 'choice_blog_leads' : (window.location.pathname.indexOf("/corporate-demat-account") > -1) ? 'DL_Corporate' : null,
            "utm_content": (window.location.pathname.indexOf("/blog/unlisted-shares-price-list/") > -1) ? 'desktop_sticky_cta' : UTMContent.current || null,
            "utm_custom": UTMCustom.current || window.location.pathname.toString().replace('/', ''),
            "utm_medium": isBlog == "yes" ? UTMMedium.current || 'choice_blog' : (window.location.pathname.indexOf("/blog/unlisted-shares-price-list/") > -1) ? 'choice_blog' : UTMMedium.current || null,
            "utm_source": (window.location.pathname.indexOf("/unlisted-shares-price-list/") > -1) ? 'ul_leads' : isBlog == "yes" ? UTMSource.current || 'seo_demat_lead_generation' : isMF == "yes" ? UTMSource.current || 'choice-mf-web' : (window.location.pathname.indexOf("/corporate-demat-account") > -1) ? 'DL_Corporate' : UTMSource.current || null,
            "utm_term": UTMTerm.current || null,
            "account_type": type1 == 'MF' ? "" : "all",
        };
        openAccountService.sentOTPService(request,captchaToken,hideLoader,setLeadId,type1,setOTPSessionID,setShowThanku,fetchQueryParams,handleOTPShow,setAPIError,showAPIErrorToaster)
        
    }


    function fetchQueryParams() {
        UTMCampaign.current = searchParams.get('utm_campaign') || '';
        UTMMedium.current = searchParams.get('utm_medium') || '';
        UTMSource.current = searchParams.get('utm_source') || '';
        UTMContent.current = searchParams.get('utm_content') || '';
        UTMCustom.current = searchParams.get('utm_custom') || '';
        UTMTerm.current = searchParams.get('utm_term') || '';

        refercode.current = ((searchParams.get('refercode') && window.atob(searchParams.get('refercode'))) || '') || ((searchParams.get('ref') && window.atob(searchParams.get('ref'))) || '') || '';
        refercode.current ? setReferID(refercode.current) : ""
        refercodeInv.current = (searchParams.get('refercode') ? (searchParams.get('refercode')) : (searchParams.get('ref') || ''))// 
        subrefercode.current = (searchParams.get('subref') && window.atob(searchParams.get('subref'))) || '';
        source.current = (searchParams.get('source')) ? window.atob(searchParams.get('source')) : '';
        subrefercodeInv.current = (searchParams.get('subref')) || '';
    }


    useEffect(() => {
        fetchQueryParams();
    }, []);

    function showReferBlock() {
        setShowReferInput(() => true);
    }

    function showReferBlock2() {
        setReferID(() => '');
        setShowReferInput(() => false);
    }

    useEffect(() => {
        if (props.isFromFableDetails) {
            window.addEventListener("scroll", onScroll);

            return () => {
                window.removeEventListener("scroll", onScroll);
            };
        }
    }, [props.isFromFableDetails]);

    function onScroll() {
        let element = document.getElementById('fablesdetail-title');
        if (element) {
            const rect = element.getBoundingClientRect();
            setFablesDetailTitleId(
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }
    }

    function triggerOTPInfoPopup(msg) {
        setOTPInfoPopupMsg(msg);
        openOTPInfoPopup();
    }

    function openOTPInfoPopup() {
        setOTPInfoPopup(true);
    }

    function hideOTPInfoPopup() {
        if (IsIssue) {
            window.location.href = IsIssue;
        }
        setOTPInfoPopup(false);
    }

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
            sendOTP(type , captchaToken);
        }
    }, [captchaToken]);

    useEffect(() => {
        if (isBlog) {
            setTimeout(() => {
                showOpenAccountAdPopup()
            }, 15000);
        }

    }, []);
    return (
        <>
            {
                showOpenAccountPopup ? <OpenDemateAccountPopup hideComponent={hideOpenAccountAdPopup} openInfoPopup={(msg) => triggerOTPInfoPopup(msg)} ></OpenDemateAccountPopup> : ''
            }
            {
                (props.isFromFableDetails ? (props.isFooterVisible && !fablesDetailTitleId) : props.isFooterVisible) ? <OpenDemateAccountStickyFooter openDemateAccountPopup={showOpenAccountAdPopup} openInfoPopup={(msg) => triggerOTPInfoPopup(msg)}></OpenDemateAccountStickyFooter> : ''
            }
            <div className={window.location.pathname.indexOf('open-free-demat-account-app') > -1 ? 'demat-account-form app-dmt-page' : 'demat-account-form'} id="dematform">
                {
                    window.location.pathname.indexOf('blog/unlisted-shares-price-list/') == 1
                        ?
                        <h2 className="form-ttl">Invest In Unlisted Shares</h2> :
                        <h2 className="form-ttl">{OpenAccountLanguageContent.getContent(props.language ? props.language : 'en', 'title')}</h2>
                }
                <Form>
                    <Form.Group className="mb-3 formgrp">
                        <div className="sub-formgrp">
                            <Form.Control isValid={!errors.invalidMobile || !errors.required} type="tel" pattern="\d*" name="mobile_no" id="mobile_no" placeholder={OpenAccountLanguageContent.getContent(props.language ? props.language : 'en', 'moblbl')} className="formcontrol digit-otp" autoComplete="off" maxLength="10" isInvalid={errors.invalidMobile || errors.required} value={mobileNumber} onChange={handleMobile} />
                            {
                                errors.invalidMobile ? <Form.Control.Feedback type="invalid">{OpenAccountLanguageContent.getContent(props.language ? props.language : 'en', 'invalidmob')}</Form.Control.Feedback> : ''
                            }
                            {
                                errors.required ? <Form.Control.Feedback type="invalid">{OpenAccountLanguageContent.getContent(props.language ? props.language : 'en', 'reqmob')}</Form.Control.Feedback> : ''
                            }

                        </div>

                        {
                            webcheck == "campaign" ?
                                ""
                                :
                                <div className="sub-formgrp">
                                    <Form.Control pattern="[a-zA-Z0-9]*" name="refer_id" id="refer_id" placeholder={OpenAccountLanguageContent.getContent(props.language ? props.language : 'en', 'referPlaceholder')} className="formcontrol digit-otp" autoComplete="off" value={referID} readOnly={refercode.current} onChange={handleReferID} />
                                   

                                </div>
                        }
                      


                        <div key="inline-checkbox" className="sub-formgrp cust-checkbox">
                            <Form.Check
                                inline
                                name="terms_and_conditions"
                                type="checkbox"
                                id="terms_and_conditions"
                            >
                                <Form.Check.Input type="checkbox" checked readOnly />
                                {
                                    props.language === 'hindi' || props.language === 'hindimutualfund' ? <Form.Check.Label>मैं सहमत हूं कि मैंने <a onClick={handleTermsConditionShow}><span className="link-tc">नियम और शर्तों</span></a> को पढ़ और स्वीकार कर लिया है</Form.Check.Label> : props.language === 'marathi' ? <Form.Check.Label>आपल्या <a onClick={handleTermsConditionShow}><span className="link-tc">नियम आणि अटी </span></a>मी काळजीपूर्वक वाचल्या असून, त्या मला मान्य आहेत.</Form.Check.Label> : <Form.Check.Label>I agree &amp; accept <a onClick={handleTermsConditionShow}><span className="link-tc">T&C</span></a></Form.Check.Label>
                                }

                            </Form.Check>
                           
                        </div>

                        <div className="sub-formgrp mt-5 mb-0">
                            {
                                <Button variant="primary"
                                    type="submit" className="btn-bg btn-bg-dark sendbtn" disabled={loaders.sendOTPLoader} onClick={handleSendOTP}>
                                    {loaders.sendOTPLoader ? <div className="loaderB mx-auto"></div> : OpenAccountLanguageContent.getContent(props.language ? props.language : 'en', 'otpbtn')}</Button>
                            }
                        </div>
                    </Form.Group>
                </Form>

            </div>

            {
                showOTP ?
                    <OpenAccountOTPModal mobileNumber={mobileNumber} otpSessionID={otpSessionID} onClose={handleOTPClose} language={props.language} openInfoPopup={(msg) => triggerOTPInfoPopup(msg)} showPopup={showOTP} updateType={updateType}></OpenAccountOTPModal> : ''
            }

            <Modal show={showTermsCondition} onHide={handleTermsConditionClose} backdrop="static"
                keyboard={false} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{OpenAccountLanguageContent.getContent(props.language ? props.language : 'en', 'termsheader')}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{OpenAccountLanguageContent.getContent(props.language ? props.language : 'en', 'terms')} <Link to="/terms-conditions" target="_blank" className="term_link">{OpenAccountLanguageContent.getContent(props.language ? props.language : 'en', 'termlink')}</Link> </Modal.Body>
               
            </Modal>

            <Modal className='common-modal-css common-modal-thankyou'
                show={showErrorToaster}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                backdrop='static'
                keyboard={false}
                centered
                onHide={hideAPIErrorToaster}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">

                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        <img src={failureimg} height="80" width="80" alt='Failure' />
                    }
                    <h4>Oops</h4>
                    <h3>
                        {APIError}
                    </h3>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="warning" className='btn-yellow' onClick={hideAPIErrorToaster}>Ok</Button>
                </Modal.Footer>
            </Modal>

            <Modal show={OTPInfoPopup} onHide={hideOTPInfoPopup} backdrop="static"
                keyboard={false} centered>
                <Modal.Body className="info-mdl-pup"><img src={infoimg} width='52' height='52' alt="Info" /></Modal.Body>
                <Modal.Body>{OTPInfoPopupMsg}</Modal.Body>
                <Modal.Footer>
                    <Button variant="warning" onClick={hideOTPInfoPopup}>Okay</Button>
                </Modal.Footer>
            </Modal>
            
            {
                showlead.showModal ? <Thankyoupopup isShow={showlead} /> : ''
            }
           

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
                                        <p className="subheading mb-3 mb-sm-0">{showRefMsg ? showRefMsg : 'Your mobile number is already associated with another refercode. To proceed with your onboarding, please select one of the following options:'}</p>
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
                                        consentError ?
                                            <span class="text-danger">{consentError}</span> : ''
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default DematAccountForm;
