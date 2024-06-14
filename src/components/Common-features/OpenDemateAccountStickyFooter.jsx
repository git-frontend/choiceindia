import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Link, useSearchParams } from "react-router-dom";
import openAccountService from '../../Services/openAccountService';
import Modal from 'react-bootstrap/Modal';
import './OpenDemateAccountStickyFooter.scss';
import OpenAccountOTPModal from './OpenAccountOTPModal.jsx';
import Thankyoupopup from './Thanku-popup.jsx';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import '../Common-features/demat-form.scss'
import utils from '../../Services/utils';

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
    const isBlog = (window.location.pathname.indexOf('blog') > -1) ? 'yes' : '';
    const [otpSessionID, setOTPSessionID] = useState(null)
    var source = useRef('');
    // var otpSessionID = useRef('');
    const webcheck = ((window.location.pathname.indexOf('best-stocks-to-buy') > -1) || (window.location.pathname.indexOf('best-intraday-stocks-to-buy') > -1) || (window.location.pathname.indexOf('best-stocks-for-long-term-investment') > -1) || (window.location.pathname.indexOf('best-short-term-stocks-to-buy') > -1) || (window.location.pathname.indexOf('nse-holidays') > -1) || (window.location.pathname.indexOf('bse-holidays') > -1) || (window.location.pathname.indexOf('mcx-ncdex-holidays') > -1) || (window.location.pathname.indexOf('stock-market-holidays') > -1) ||(window.location.pathname.indexOf('brokerage-charges') > -1) || (window.location.pathname.indexOf('upcoming-agm') > -1) || (window.location.pathname.indexOf('upcoming-board-meeting') > -1) || (window.location.pathname.indexOf('upcoming-bonus-shares') > -1) || (window.location.pathname.indexOf('upcoming-dividend-paying-stocks') > -1) || (window.location.pathname.indexOf('upcoming-stock-splits') > -1) || (window.location.pathname.indexOf('upcoming-rights-issue') > -1) || (window.location.pathname.indexOf('/corporate-demat-account') > -1)||(window.location.pathname.indexOf('sip-calculator') > -1)||(window.location.pathname.indexOf('mutual-fund-calculator') > -1)||(window.location.pathname.indexOf('margin-calculator') > -1)||(window.location.pathname.indexOf('brokerage-calculator') > -1)||(window.location.pathname.indexOf('futures-and-options-margin-calculator') > -1)||(window.location.pathname.indexOf('commodity-margin-calculator') > -1)||(window.location.pathname.indexOf('forex-margin-calculator') > -1)) ? 'Best-Stock' : "Blog";

    const UnlistBlog = (window.location.pathname.indexOf('/blog/unlisted-shares-price-list/') > -1) ? 'yes' : "";

    const additionalClass = (
        window.location.pathname.includes('stock-market-holidays') ||
        window.location.pathname.includes('nse-holidays') ||
        window.location.pathname.includes('bse-holidays') ||
        window.location.pathname.includes('mcx-ncdex-holidays') ||
        window.location.pathname.includes('best-stocks-to-buy') ||
        window.location.pathname.includes('best-intraday-stocks-to-buy') ||
        window.location.pathname.includes('best-short-term-stocks-to-buy') ||
        window.location.pathname.includes('best-stocks-for-long-term-investment') ||
        window.location.pathname.includes('sip-calculator') ||
        window.location.pathname.includes('mutual-fund-calculator') ||
        window.location.pathname.includes('margin-calculator') ||
        window.location.pathname.includes('brokerage-calculator') ||
        window.location.pathname.includes('futures-and-options-margin-calculator') ||
        window.location.pathname.includes('commodity-margin-calculator') ||
        window.location.pathname.includes('brokerage-charges') ||
        window.location.pathname.includes('forex-margin-calculator')
    ) ? 'New_form_main' : '';
    

  
    var otpLeadID = useRef('');
    var referLink = useRef('');
    const [captchaToken, setCaptchaToken] = useState('');
  
    /** state to show thankyou popup default */
    const [showThanku, setShowThanku] = useState({ showModal: false, page: 'no-addlead', resText: '' });

    const [showlead, setShowLead] = useState({ showModal: false });

    /**to show consent popup */
    const [consent, setShowConsent] = useState(false);

    const [otperror, setOTPErrors] = useState();

    /**variable for loaders */
    const [consentLoaders, setConsentLoaders] = useState({
        consentYesLoader: false,
        consentNoLoader: false
    });
    const [leadId, setLeadId] = useState();

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
    const [type, setType] = useState('send');
    // console.log("type",type)
    const updateType = (newType) => {
        setType(newType);
        handleReCaptchaVerify()
         // Call sendOTP with the updated type
    };
    function sendOTP(type, captchaToken) {
        showLoader('sendOTPLoader');
        const encodedMobileNumber = btoa(mobileNumber);
        let request = {
            "whatsapp_consent": true,
            // "service_code": "JF",
            "mobile_number": encodedMobileNumber,
            "type":type,
            // "product": "FINX",
            // "request_source": "CHOICEINDIA",
            // "source": source.current ? source.current : "CHOICEINDIA",//type1=='MF' ?"CHOICEINDIA":"CHOICEINDIA",
            "user_consent": "1",
            "referred_id": refercode.current || null,
            "sub_ref": subrefercode.current || null,
            /*  "lead_source":type1=='MF' ?"CHOICEINDIA":"", */
            // 'seo_demat_leads'
            "utm_campaign": isBlog == "yes" ? UTMCampaign.current || 'choice_blog_leads' :(window.location.pathname.indexOf("/corporate-demat-account") > -1) ? 'DL_Corporate': UTMCampaign.current || null,
            "utm_content": UTMContent.current || null,
            "utm_custom": UTMCustom.current || window.location.pathname.toString().replace('/', ''),
            // 'sidebar_seo_leads'
            "utm_medium": isBlog == "yes" ? UTMMedium.current || 'choice_blog' : UTMMedium.current || null,
            // 'blog_leads'
            "utm_source": isBlog == "yes" ? UTMSource.current || 'seo_demat_lead_generation' :(window.location.pathname.indexOf("/corporate-demat-account") > -1) ? 'DL_Corporate':  UTMSource.current || null,
            "utm_term": UTMTerm.current || null,
            // "captcha":"f9A0RMq3vF7fPYkEiqZToKUKdneNzA2YWfMeKSHhkm",
            // "captchaResp": captchaToken,
            "account_type": "all"
            // "captcha": "1"
        }

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
                setOTPSessionID( res.Body.otp_session_id)
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

    const { executeRecaptcha } = useGoogleReCaptcha();

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
                // console.log('Success', res);
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
                // setOTPErrors(error.response.data.Message);
                // setMobileNumber('')
            } else {
                // setOTPErrors('Something Went Wrong.');
            }
        });
    }

    function pushCustomEvents(){
        utils.pushDataLayerEvent({
            'event': 'open_free_account_click',
            'page_path': window.location.pathname,
            'page_url': window.location.href,
            'cta_source': 'bottom_banner',
            'platform': 'website'
        })
      }

    return (
        <>
            {
                webcheck == "Best-Stock" ?
                    // <section className="sendopt  beststockres holidayOTP">
                    <section className={`sendopt  beststockres holidayOTP ${additionalClass}`}>
                        <div className="container">
                            <div className="form_main">
                                {
                                    window.location.pathname.indexOf('best-stocks-for-long-term-investment') == 1
                                        ?
                                        <div className=" demat_text"><span className="form-ttl">Get the Stocks for Achieving<br /> Your Long Term Goals!</span>
                                        </div> :
                                        window.location.pathname.indexOf('best-stocks-to-buy') == 1
                                            ? <div className=" demat_text"><span className="form-ttl">Maximize your portfolio's potential<br /> with the best stocks handpicked <br /> by our expert analysts.</span>
                                            </div> :
                                            window.location.pathname.indexOf('best-intraday-stocks-to-buy') == 1
                                                ? <div className=" demat_text"><span className="form-ttl">Get Daily Intraday Stocks from<br /> Our Research Experts.</span>
                                                </div> :
                                                window.location.pathname.indexOf('best-short-term-stocks-to-buy') == 1
                                                    ? <div className=" demat_text"><span className="form-ttl">Accelerate your portfolio's growth<br /> today with our dynamic<br /> short-term stock picks!</span>
                                                    </div>
                                                    :
                                                    window.location.pathname.indexOf('corporate-demat-account') == 1
                                                        ? <div className=" demat_text"><span className="form-ttl">Open Corporate Demat Account</span>
                                                        </div>
                                                        :
                                                        <div className=" demat_text"><span className="form-ttl">Open a Free <span className="reshide"> Demat</span> Account <span className="reshide"><br />+ Free 1st Year AMC</span></span></div>
                                }
                                {
                                    window.location.pathname.indexOf('corporate-demat-account') == 1
                                        ?
                                        <div className="  Mobile_text">
                                            <input type="text" className="form-textbox" id="mobile_no" name="mobile_no" placeholder='Mobile Number' autoComplete="off" maxLength="10" value={mobileNumber} onChange={handleMobile} />
                                            {/* <label htmlFor="form-email" className="form-label" >Mobile Number</label> */}
                                            <div>
                                                <small id="mobile_no_error" className="errormsg text-danger">{errors.invalidMobile ? 'Invalid Mobile Number' : ''}</small>
                                            </div>
                                        </div>
                                        : <div className="  Mobile_text">
                                            <input type="text" className="form-textbox" id="mobile_no" name="mobile_no" placeholder='Mobile Number' autoComplete="off" maxLength="10" value={mobileNumber} onChange={handleMobile} />
                                            {/* <label htmlFor="form-email" className="form-label" >Mobile Number</label> */}
                                            <div>
                                                <small id="mobile_no_error" className="errormsg text-danger">{errors.invalidMobile ? 'Invalid Mobile Number' : ''}</small>
                                            </div>
                                        </div>

                                }
                                {
                                    window.location.pathname.indexOf('corporate-demat-account') == 1
                                        ?
                                        <div className="  cust_check">
                                            <input type="checkbox" className="form_check" id="terms_and_conditions" checked readOnly />
                                            <label className="form_check_text">I agree &amp; accept <a onClick={handleTermsConditionShow}><span className="link_tc">T&amp;C</span></a></label>
                                        </div>
                                        :
                                        <div className="  cust_check">
                                            <input type="checkbox" className="form_check" id="terms_and_conditions" checked readOnly />
                                            <label className="form_check_text">I agree that I have read and  accept<br /> the <a onClick={handleTermsConditionShow}><span className="link_tc">Terms and Conditions</span></a></label>
                                        </div>
                                }
                                <div className='api_errornew'>
                                    <button type="submit" className="form-btn  btn-bg-dark btn-bg" onClick={handleSendOTP}>{loaders.sendOTPLoader ? <div className="loaderB mx-auto"></div> : 'Send OTP'}</button>
                                    <div><small id="API_error" className="errormsg text-danger api-text-danger">{APIError || ''}</small></div>
                                </div>
                                {/* <button type="submit" className=" OPt_item sub_group btnsub"><span className="send_OPT_btn" >Send OTP</span></button> */}


                                {/* <div className=" OPt_item sub_group"><a href="/" ><span className="send_OPT_btn" >Send OTP</span></a></div> */}
                            </div>
                        </div>
                    </section>
                    :
                    UnlistBlog ?
                        <div>
                            <div className="d-flex justify-content-center btn-view-more-sticky  mt-5 btn-fixed">
                                <div></div>
                                <button className=" primary-orange-btn scroll-top-account btn-bg btn-bg-dark openbtn" onClick={openDemateAccountPopup}>Invest in Unlisted Shares</button>
                            </div>
                        </div> :
                        webcheck == "Blog" ?
                            <div>
                                <div className="d-flex justify-content-center btn-view-more-sticky  mt-5 btn-fixed">
                                    <div></div>
                                    {/* { */}
                                    {/* window.location.pathname.indexOf("demat-account") > -1 */}
                                    {/* ? */}
                                    {/* <button className=" primary-orange-btn scroll-top-account btn-bg btn-bg-dark openbtn" onClick={()=>{chapterScroll1  ('dematform')}}>Open Free Account</button> */}
                                    {/* : */}
                                    <button className=" primary-orange-btn scroll-top-account btn-bg btn-bg-dark openbtn" onClick={() => {openDemateAccountPopup; pushCustomEvents()}}>Open Free Account</button>
                                    {/* } */}
                                </div>
                                <section className="stickybottom">
                                    <div className="container mx-auto">
                                        <form className="d-flex justify-content-between align-items-center">
                                            <div className='form-group'>
                                                <h2 className="text">Open <span>100% Free</span> Demat Account + <br /><span>Free</span> First Year <span>AMC</span></h2>
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
                                                    <div> I agree &amp; accept <a className="tc" onClick={handleTermsConditionShow}>T&amp;C</a>
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

export default OpenDemateAccountStickyFooter;
