import React, { useEffect, useState, useRef, useCallback } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';
import openAccountService from '../../Services/openAccountService';
import { Link, useLocation, useSearchParams } from "react-router-dom";
import "./demat-form.scss"
import OpenAccountOTPModal from './OpenAccountOTPModal.jsx';
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
    // const [count, setCount] = useState(0);
    // const [otp, setOtp] = useState('');
    // const [OTPErrors, setOTPErrors] = useState('');
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

    /**on click no consent */
    function submitConsent(consent) {


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
                //     'mobileNoEnc': utils.generateSHA256Hash(mobileNumber.toString()),
                //     'leadId': leadId,
                //     'lead_source':'choiceindia',
                //     'userId': utils.generateSHA256Hash(mobileNumber.toString()),
                //     'platform': window.innerWidth < 767 ? 'mobileweb' : 'desktopweb'
                // })
                setConsentLoaders({ ...consentLoaders, consentYesLoader: false, consentNoLoader: false });
                // console.log('Success', res);
                if (consent == "yes") {
                    window.location.href = referLink.current ? referLink.current : null;
                } else {
                    setShowConsent(() => false);
                }
                // }
            } else {
                setConsentLoaders({ ...consentLoaders, consentYesLoader: false, consentNoLoader: false });
                setConsentErrors((res && res.data && res.data.Body && res.data.Body.Message) ? res.data.Body.Message : 'Something Went Wrong');
            }
        }).catch((error) => {
            setConsentLoaders({ ...consentLoaders, consentYesLoader: false, consentNoLoader: false });
            if (error && error.response && error.response.data && error.response.data.Message) {
                setConsentErrors(error.response.data.Message);
            } else {
                setConsentErrors('Something Went Wrong.');
            }
        });
    }

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

    function handleOTPClose(link, msg, info, actionType, leadID) {
        setShowOTP(false);

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
            // "service_code": type1 == 'MF' ? "MF" : "JF",
            "mobile_number": encodedMobileNumber,
            "type":type,
            // "product": type1 == 'MF' ? "INVESTICA" : "FINX",
            // "request_source": "CHOICEINDIA",
            // "source": source.current ? source.current : "CHOICEINDIA",//type1=='MF' ?"CHOICEINDIA":"CHOICEINDIA",
            "user_consent": type1 == 'MF' ? "true" : "1",
            "referred_id": refercode.current || referID || null,
            "sub_ref": subrefercode.current || null,
            /*  "lead_source":type1=='MF' ?"CHOICEINDIA":"", */
            // 'seo_demat_leads'
            "utm_campaign": isBlog == "yes" ? UTMCampaign.current || 'choice_blog_leads' : UTMCampaign.current ? UTMCampaign.current : (window.location.pathname.indexOf("/minor-demat-account") > -1) ? 'DL_Minor' : (window.location.pathname.indexOf("/nri-demat-account") > -1) ? 'DL_NRI' : (window.location.pathname.indexOf("/blog/unlisted-shares-price-list/") > -1) ? 'choice_blog_leads' : (window.location.pathname.indexOf("/corporate-demat-account") > -1) ? 'DL_Corporate' : null,
            "utm_content": (window.location.pathname.indexOf("/blog/unlisted-shares-price-list/") > -1) ? 'desktop_sticky_cta' : UTMContent.current || null,
            "utm_custom": UTMCustom.current || window.location.pathname.toString().replace('/', ''),
            // 'sidebar_seo_leads'
            "utm_medium": isBlog == "yes" ? UTMMedium.current || 'choice_blog' : (window.location.pathname.indexOf("/blog/unlisted-shares-price-list/") > -1) ? 'choice_blog' : UTMMedium.current || null,
            // 'blog_leads'
            "utm_source": (window.location.pathname.indexOf("/unlisted-shares-price-list/") > -1) ? 'ul_leads' : isBlog == "yes" ? UTMSource.current || 'seo_demat_lead_generation' : isMF == "yes" ? UTMSource.current || 'choice-mf-web' : (window.location.pathname.indexOf("/corporate-demat-account") > -1) ? 'DL_Corporate' : UTMSource.current || null,
            "utm_term": UTMTerm.current || null,
            // "captcha":"f9A0RMq3vF7fPYkEiqZToKUKdneNzA2YWfMeKSHhkm",
            // "captchaResp": captchaToken,
            "account_type": type1 == 'MF' ? "" : "all",
            // "captcha": "1"
           

        };
        // console.log("request", request)
        openAccountService.sendOTP(request,captchaToken ).then((res) => {
            hideLoader('sendOTPLoader');
            if (res && res.StatusCode === 200 ) {
                setLeadId(res.Body.leadid);
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

        // setReferID(() => ((searchParams.get('refercode') && window.atob(searchParams.get('refercode'))) || '') || ((searchParams.get('ref') && window.atob(searchParams.get('ref'))) || '') || '')
    }

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

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         if (!count) {
    //             return () => clearInterval(interval);
    //         }
    //         setCount(seconds => seconds - 1);
    //     }, 1000);
    //     return () => clearInterval(interval);
    // }, [count]);

    // useEffect(() => {
    //     if ('OTPCredential' in window) {
    //         const input = document.getElementById('openAccountOTP');
    //         if (!input) return;
    //         const ac = new AbortController();
    //         navigator.credentials.get({
    //             otp: { transport: ['sms'] },
    //             signal: ac.signal
    //         }).then(otp => {
    //             setOtp(otp.code);
    //             verifyOTP();
    //         }).catch(err => {
    //             console.log(err);
    //         });
    //     }
    // }, []);

    // to verify the OTP 
    //   function verifyOTP() {
    //     if (!otp.length) {
    //         setOTPErrors('OTP is required');
    //     } else {
    //         showLoader('verifyLoader');
    //       let request = {
    //         otp: otp,
    //         session_id: otpSessionID.current
    //       };

    //       openAccountService.verifyOTP(request).then((res) => {
    //           hideLoader('verifyLoader');
    //           if (res && res.status === 200 && res.data && res.data.Body) {
    //               if (res.data.Body.url) {
    //                   window.location.href = res.data.Body.url;
    //               } else {
    //                 window.location.href = "https://jiffy.choiceindia.com/auth/login"
    //               }
    //           } else {
    //               setOTPErrors((res && res.data && res.data.Body && res.data.Body.Message) ? res.data.Body.Message : 'Something went wrong, please try again later!');
    //           }
    //       }).catch((error) => {
    //         hideLoader('verifyLoader');
    //         if (error && error.response && error.response.data && error.response.data.Message) {
    //             setOTPErrors(error.response.data.Message);
    //         } else {
    //             setOTPErrors("Something went wrong, please try again later!");
    //         }
    //       });
    //     }
    //   }

    //     //resend OTP ON SMS
    //     function resendOTP() {
    //         if (!loaders.resendOTPLoader && !loaders.OTPOnCallLoader) {
    //             showLoader('resendOTPLoader');
    //             setOtp('');
    //             setOTPErrors('');
    //             let request = {
    //                 "mobile_no": mobileNumber,
    //                 "old_session_id": otpSessionID.current,
    //                 "request_source": "CHOICEINDIA"
    //             }

    //             openAccountService.resendOTPAgain(request).then((res) => {
    //                 hideLoader('resendOTPLoader');
    //                 setCount(30);
    //                 if (res && res.status === 200 && res.data && res.data.Body) {
    //                     otpSessionID.current = res.data.Body.session_id;
    //                     handleOTPResendSuccessToaster('otp');
    //                 } else {
    //                     setOTPErrors((res.data.Body.Message) ? res.data.Body.Message : 'Something went wrong, please try again later!');
    //                 }
    //             }).catch((error) => {
    //                 hideLoader('resendOTPLoader');
    //                 setCount(30);
    //                 if (error && error.response && error.response.data && error.response.data.Message) {
    //                     setOTPErrors(error.response.data.Message);
    //                 } else {
    //                     setOTPErrors("Something went wrong, please try again later!");
    //                 }
    //             });
    //         }
    //     }

    //     //to get OTP ON CALL
    //     function getOTPOnCall() {
    //         if (!loaders.resendOTPLoader && !loaders.OTPOnCallLoader) {
    //             showLoader('OTPOnCallLoader');
    //             setOtp('');
    //             setOTPErrors('');
    //             let request = {
    //                 "mobile_no": mobileNumber,
    //                 "request_source": "CHOICEINDIA",
    //                 "session_id": otpSessionID.current,
    //             }
    //             openAccountService.OTPOnCall(request).then((res) => {
    //                 hideLoader('OTPOnCallLoader');
    //                 setCount(30);
    //                 if (res && res.status === 200 && res.data && res.data.Body) {
    //                     otpSessionID.current = res.data.Body.session_id;
    //                     handleOTPResendSuccessToaster('call');
    //                 } else {
    //                     setOTPErrors((res.data.Body.Message) ? res.data.Body.Message : 'Something went wrong, please try again later!');
    //                 }
    //             }).catch((error) => {
    //                 hideLoader('OTPOnCallLoader');
    //                 setCount(30);
    //                 if (error && error.response && error.response.data && error.response.data.Message) {
    //                     setOTPErrors(error.response.data.Message);
    //                 } else {
    //                     setOTPErrors("Something went wrong, please try again later!");
    //                 }
    //             });
    //         }
    //     }

    // function handleOTPResendSuccessToaster(type){
    //     setOTPSendSuccessToaster({[type]: true});
    //     setTimeout(()=>{
    //         setOTPSendSuccessToaster({[type]: false});
    //     },2000)
    // }

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

                        {/* {
    refercode.current? '':
    <span className="referal-link" onClick={showReferBlock}>{OpenAccountLanguageContent.getContent(props.language ? props.language : 'en', 'referId')}</span>
} */}


                        {/* { */}
                        {/* (showReferInput)? */}
                        {
                            webcheck == "campaign" ?
                                ""
                                :
                                <div className="sub-formgrp">
                                    <Form.Control pattern="[a-zA-Z0-9]*" name="refer_id" id="refer_id" placeholder={OpenAccountLanguageContent.getContent(props.language ? props.language : 'en', 'referPlaceholder')} className="formcontrol digit-otp" autoComplete="off" value={referID} readOnly={refercode.current} onChange={handleReferID} />
                                    {/* {
                            refercode.current? '': 
                            <span className="cross-refer-img" onClick={showReferBlock2}><img src={backIcon}/></span>
                        } */}

                                </div>
                        }
                        {/* : '' */}
                        {/* } */}


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
                {/* <Modal.Footer>
                    <Button variant="warning" onClick={handleTermsConditionClose}>
                    {OpenAccountLanguageContent.getContent(props.language ? props.language : 'en', 'termsbtn')}
                    </Button>
                </Modal.Footer> */}
            </Modal>

            {/* <Modal show={showOTP} onHide={handleOTPClose} backdrop="static"
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
                    </div>

                    <OpenAccountOTPModal mobileNumber={mobileNumber} otpSessionID={otpSessionID.current}></OpenAccountOTPModal>
                </Modal.Body>
            </Modal> */}

            {/* <Modal show={showErrorToaster} onHide={hideAPIErrorToaster} backdrop="static"
                keyboard={false} centered>
                <Modal.Header>
                    <Modal.Title>Error</Modal.Title>
                </Modal.Header>
                <Modal.Body>{APIError}</Modal.Body>
                <Modal.Footer>
                    <Button variant="warning" onClick={hideAPIErrorToaster}>
                        Okay
                    </Button>
                </Modal.Footer>
            </Modal> */}

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
            {/* <Modal show={showlead} centered>
                <Modal.Header className="ad-ld-mdl-head">
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body className="ad-ld-mdl-bdy">
                    <div>
                        <img src={ischeck? check: cross} alt='alt-icon'/>
                        <p>{ischeck? 'Success': 'Oops'}</p>
                        <p>{ischeck? 'Lead Added Successfully': 'Something Went Wrong!'}</p>
                    </div>
                </Modal.Body>
                <Modal.Footer className="ad-ld-mdl-ftr">
                    <Button className="ad-ld-mdl-btn" onClick={closeLeadModal} >
                        OK
                    </Button>
                </Modal.Footer>
            </Modal> */}

            {
                showlead.showModal ? <Thankyoupopup isShow={showlead} /> : ''
            }
            {/* <Thankyoupopup isShow={showlead} /> */}

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
