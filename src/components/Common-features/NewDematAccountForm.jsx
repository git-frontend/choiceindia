import React, { useEffect, useState, useRef, useCallback } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';
import openAccountService from '../../Services/openAccountService';
import { Link, useSearchParams } from "react-router-dom";
import "./demat-form.scss";
import "./newdemat-form.scss";
// import "./demat-form-new.scss";
import OpenAccountOTPModalNew from './OpenAccountOTPModalNew.jsx';
import OpenDemateAccountPopup from './OpenDemateAccountPopup.jsx';
import OpenDemateAccountStickyFooter from './OpenDemateAccountStickyFooter.jsx';
import OpenAccountLanguageContent from '../../Services/OpenAccountLanguageContent';
import check from '../Add-lead/check-small.jpg';
import cross from '../Add-lead/red cross.jpg';
import Thankyoupopup from './Thanku-popup.jsx';
import infoimg from '../../assets/images/Info.svg';
import failureimg from '../../assets/images/failure.svg';
import './Thankyoupopup.scss';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import backIcon from '../../assets/images/backspace.svg';
import thumbsup from '../../assets/images/demat-images/thumbsup.gif';
import LazyLoader from "../Common-features/LazyLoader";

function NewDematAccountForm(props) {
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
    const [referID, setReferID] = useState('');




    /** state to show thankyou popup (add-lead) */
    const [showlead, setShowLead] = useState({ showModal: false, isFailure: false, titleText: 'Success', msgText: '' });

    /** state to show thankyou popup default */
    const [showThanku, setShowThanku] = useState({ showModal: false, page: 'no-addlead', resText: '', isOnboarding: '', isNewLead: null });

    const [ischeck, setIsCheck] = useState(false);
    // const [count, setCount] = useState(0);
    // const [otp, setOtp] = useState('');
    // const [OTPErrors, setOTPErrors] = useState('');
    const [OTPSendSuccessToaster, setOTPSendSuccessToaster] = useState({});
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
    var otpSessionID = useRef('');
    var isMobile = useRef(isMobileDevice());
    const [showOpenAccountPopup, setShowOpenAccountPopup] = useState(false);
    const [fablesDetailTitleId, setFablesDetailTitleId] = useState(true);
    const [OTPInfoPopup, setOTPInfoPopup] = useState(false);
    const [OTPInfoPopupMsg, setOTPInfoPopupMsg] = useState('');
    const [IsIssue, setIsIssue] = useState('');
    const [captchaToken, setCaptchaToken] = useState('');
    const [showReferInput, setShowReferInput] = useState(() => false);
    // const[form, setForm]=useState("Open-demat-account")
    const { executeRecaptcha } = useGoogleReCaptcha();

    const handleButtonClick = () => {
        setShowOTP(false);
      };
    // useEffect(() => {
    //     console.log('PRR',props.language)
    // },[])

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
        if (showAdValues.link) {
            setShowThanku(prevState => {
                return { ...prevState, showModal: true, redirectionLink: showAdValues?.link, resText: showAdValues?.msg, isOnboarding: showAdValues?.info, closeMd: closeModal }
            });
        }
        setShowOpenAccountPopup(false);
        callOpenAccountAdPopupAgain();
    }

    function callOpenAccountAdPopupAgain() {
        //after 15min
        setTimeout(() => {
            showOpenAccountAdPopup();
        }, 900000)
    }

    useEffect(() => {
     
        if (!isMobile.current && props.isPopupVisible) {
            setTimeout(() => {
                showOpenAccountAdPopup();
            }, 60000);
        }
    }, []);
    // useEffect(()=>{
    //     setformdata()
    // },[form])

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

    function handleTermsConditionShow() {
        setShowTermsCondition(true);
    }

    function handleTermsConditionClose() {
        setShowTermsCondition(false);
    }

    function handleOTPShow() {
        setShowOTP(true);
    }

    function handleOTPClose(link, msg, info) {
        setShowOTP(false);

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

    // function resetOTPPopup() {
    //     setOtp('');
    //     setOTPErrors('');
    //     setCount(30);
    // }

    // function closeLeadModal(){
    //     setMobileNumber(() => '')
    //     setShowLead(() => false);
    // }

    function closeModal(link) {
        setShowLead(prevState => {
            return { ...prevState, showModal: false }
        });

        if (link) {
            window.location.href = link;
        }
    }

    function sendNewLeadOTP() {
        showLoader('sendOTPLoader');
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
            "utm_custom": UTMCustom.current || window.location.pathname.toString().replace('/',''),
            "utm_content": UTMContent.current || null
        };


        // setTimeout(() => {
        //     hideLoader('sendOTPLoader');
        // }, 4000);
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

        // setShowLead(prevState => {
        //     return { ...prevState, showModal: true, isFailure: true, titleText: 'Success', msgText: 'Oops', closeMd: closeModal }
        // });
    }

    function sendOTP() {
        showLoader('sendOTPLoader');
        let request = {
            "whatsapp_consent": true,
            "service_code": type1 == 'MF' ? "MF" : "JF",
            "mobile_number": mobileNumber,
            "product": type1 == 'MF' ? "INVESTICA" : "FINX",
            "request_source": "CHOICEINDIA",
            "source": source.current ? source.current : "CHOICEINDIA",//type1=='MF' ?"CHOICEINDIA":"CHOICEINDIA",
            "user_consent": type1 == 'MF' ? "true" : "1",
            "referred_id": refercode.current || referID || null,
            "sub_ref": subrefercode.current || null,
            /*  "lead_source":type1=='MF' ?"CHOICEINDIA":"", */
            // 'seo_demat_leads'
            "utm_campaign": isBlog == "yes" ? UTMCampaign.current || 'choice_blog_leads' : UTMCampaign.current || null,
            "utm_content": UTMContent.current || null,
            "utm_custom": UTMCustom.current || window.location.pathname.toString().replace('/',''),
            // 'sidebar_seo_leads'
            "utm_medium": isBlog == "yes" ? UTMMedium.current || 'choice_blog' : UTMMedium.current || null,
            // 'blog_leads'
            "utm_source": isBlog == "yes" ? UTMSource.current || 'seo_demat_lead_generation' : UTMSource.current || null,
            "utm_term": UTMTerm.current || null,
            // "captcha":"f9A0RMq3vF7fPYkEiqZToKUKdneNzA2YWfMeKSHhkm",
            "captchaResp": captchaToken,
            "account_type": type1 == 'MF' ? "" : "all"
            // "captcha": "1"

        };
        openAccountService.sendOTP(request, type1).then((res) => {
            hideLoader('sendOTPLoader');
            if (res && res.status === 200 && res.data && res.data.StatusCode === 200) {
                otpSessionID.current = (type1 == 'MF') ? res.data.Body.session_id : res.data.Body.otp_session_id;
                // setForm('sent-otp')
                // setformdata()
                setShowThanku(prevState => {
                    return { ...prevState, showModal: false, page: 'no-addlead', resText: '', isOnboarding: '', isNewLead: res.data.Body.new_lead ? res.data.Body.new_lead : false }
                });
             
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

    function fetchQueryParams() {
        UTMCampaign.current = searchParams.get('utm_campaign') || '';
        // UTMCampaign.current = setSearchParams.set('utm_campaign',"xyz") || '';

        UTMMedium.current = searchParams.get('utm_medium') || '';
        UTMSource.current = searchParams.get('utm_source') || '';
        UTMContent.current = searchParams.get('utm_content') || '';
        UTMCustom.current = searchParams.get('utm_custom') || '';
        UTMTerm.current = searchParams.get('utm_term') || '';
        // setSearchParams(new URLSearchParams('?utm_campaign=new-value'));
        // setSearchParams((params) => {
        //     params.set('form', 'sent-otp');
        //     params.set('form', 'verify-otp');
        //     params.set('form', 'otp-success');
        //     return params;
        //   });
        
        refercode.current = ((searchParams.get('refercode') && window.atob(searchParams.get('refercode'))) || '') || ((searchParams.get('ref') && window.atob(searchParams.get('ref'))) || '') || '';

        refercodeInv.current = (searchParams.get('refercode') ? (searchParams.get('refercode')) : (searchParams.get('ref') || ''))// 
        refercode.current ? setReferID(refercode.current):"" 
        refercodeInv.current=(searchParams.get('refercode')?(searchParams.get('refercode')):(searchParams.get('ref')||''))// 
        subrefercode.current = (searchParams.get('subref') && window.atob(searchParams.get('subref'))) || '';
        source.current = (searchParams.get('source')) ? window.atob(searchParams.get('source')) : '';
        subrefercodeInv.current = (searchParams.get('subref')) || '';

        // setReferID(() => ((searchParams.get('refercode') && window.atob(searchParams.get('refercode'))) || '') || ((searchParams.get('ref') && window.atob(searchParams.get('ref'))) || '') || '')
    
    }
    // function setformdata(){
    //     setSearchParams((params) => {
    //         params.set('form', form);
    //         return params;
    //       });
        
    // }

    // function handleOTP(e) {
    //     let value = e.target.value.replace(/\D/g, "");
    //     setOtp(value);
    //     if (!value.length) {
    //         setOTPErrors('OTP is required');
    //     } else {
    //         setOTPErrors('');
    //     }
    // }

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
            sendOTP();
        }
    }, [captchaToken]);

    useEffect(() => {
        //  console.log('Inside thanku',isShow)
        if(showThanku.showModal){
            if(showThanku.page != 'add-lead' && !showThanku.redirectionLink){
                setTimeout(() => {
                  if (showThanku.redirectionLink === null) {
                    showThanku.closeMd();
                  } else {
                    showThanku.closeMd(showThanku.redirectionLink);
                  }
                }, 15000)
              } else if (showThanku.page != 'add-lead' && showThanku.redirectionLink) {
                setTimeout(() => {
                  if (showThanku.redirectionLink === null) {
                    showThanku.closeMd();
                  } else {
                    showThanku.closeMd(showThanku.redirectionLink);
                  }
                }, 2000)
              }

        }
          
        }, [showThanku.showModal])

    return (
        <>
            {
                showOpenAccountPopup ? <OpenDemateAccountPopup hideComponent={hideOpenAccountAdPopup} openInfoPopup={(msg) => triggerOTPInfoPopup(msg)} ></OpenDemateAccountPopup> : ''
            }
            {
                (props.isFromFableDetails ? (props.isFooterVisible && !fablesDetailTitleId) : props.isFooterVisible) ? <OpenDemateAccountStickyFooter openDemateAccountPopup={showOpenAccountAdPopup} openInfoPopup={(msg) => triggerOTPInfoPopup(msg)}></OpenDemateAccountStickyFooter> : ''
            }
            {
                !showOTP && !showThanku.showModal && (
                    <div className="demat-account-form demat-account-form-new" id="dematform">

                        <h2 className="heading">Open Demat Account</h2>
                        <Form>
                            <Form.Group className="mb-3 formgrp formgrp-new">
                                <Form.Label>Mobile Number*</Form.Label>
                               
                                <div className="sub-formgrp sub-formgrp-new">
                               
                                    <Form.Control isValid={!errors.invalidMobile || !errors.required} type="tel" pattern="\d*" name="mobile_no" id="mobile_no" placeholder="0000000000" className="formcontrol digit-otp " autoComplete="off" maxLength="10" isInvalid={errors.invalidMobile || errors.required} value={mobileNumber} onChange={handleMobile} />
                                    
                                    {
                                        errors.invalidMobile ? <Form.Control.Feedback type="invalid">{OpenAccountLanguageContent.getContent(props.language ? props.language : 'en', 'invalidmob')}</Form.Control.Feedback> : ''
                                    }
                                    {
                                        errors.required ? <Form.Control.Feedback type="invalid">{OpenAccountLanguageContent.getContent(props.language ? props.language : 'en', 'reqmob')}</Form.Control.Feedback> : ''
                                    }
                                    {/* <span className="state-code">+91</span> */}
                                </div>
                                <div className="sub-formgrp new-sub-formgrp">
                                    <Form.Control pattern="[a-zA-Z0-9]*" name="refer_id" id="refer_id" placeholder={OpenAccountLanguageContent.getContent(props.language ? props.language : 'en', 'referPlaceholder')} className="formcontrol digit-otp" autoComplete="off" value={referID} readOnly={refercode.current} onChange={handleReferID} />
                                
                                </div>
                              
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
                                    {/* <label className="lbl">I agree that I have read &amp; accept the <a className="link-tc">Terms &amp; Conditions</a></label> */}
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
                        <div className="slider-btns">
                        <Button variant="primary" type="submit" className={!showOTP ? "btn-bg-slider active-slide-tab":" btn-bg-slider"}  ></Button>
                        <Button variant="primary" type="submit" className={showOTP ? "btn-bg-slider active-slide-tab":" btn-bg-slider"}></Button>
                        </div>
                    </div>
                )
            }
            {
                showThanku.showModal && (
                    <div className="demat-account-form demat-account-form-new">
                        <div className="thank-you-msg">
                        <LazyLoader src={thumbsup} className={'img-fluid'} width={"160"} height={"160"} alt="Loading" />
                            <h2 className={(window.location.pathname.indexOf('campaign/free-demat-account') > -1) ? " thankyou-title campaign-success":"thankyou-title"}>Thank You!</h2>
                            <p className="subheading">{showThanku.resText? showThanku.resText: "You are being redirected to onboarding page!"}</p>
                        </div>
                        
                    </div>
                )

            }

            {
                showOTP && !showThanku.showModal && (
                    <div className="demat-account-form demat-account-form-new">
                        <OpenAccountOTPModalNew mobileNumber={mobileNumber} otpSessionID={otpSessionID.current} onClose={handleOTPClose} language={props.language} openInfoPopup={(msg) => triggerOTPInfoPopup(msg)} showPopup={showOTP} onButtonClick={handleButtonClick} ></OpenAccountOTPModalNew>
                        <div className="slider-btns">
                        <Button variant="primary" type="submit" className={!showOTP ? "btn-bg-slider active-slide-tab":" btn-bg-slider"}  ></Button>
                        <Button variant="primary" type="submit" className={showOTP ? "btn-bg-slider active-slide-tab":" btn-bg-slider"}></Button>
                        </div>
                    </div>
                )}

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
            {/* <Thankyoupopup isShow={showlead} /> */}

            {/* { 
        showThanku.showModal ? <Thankyoupopup isShow={showThanku} /> : ''
            } */}
        </>
    );
}

export default NewDematAccountForm;
