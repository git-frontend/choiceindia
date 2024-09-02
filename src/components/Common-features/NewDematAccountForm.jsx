import "./demat-form.scss";
import "./newdemat-form.scss";
import React, { useEffect, useState, useRef, useCallback } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import openAccountService from '../../Services/openAccountService';
import { Link, useSearchParams } from "react-router-dom";

import OpenAccountOTPModalNew from './OpenAccountOTPModalNew.jsx';
import OpenDemateAccountPopup from './OpenDemateAccountPopup.jsx';
import OpenDemateAccountStickyFooter from './OpenDemateAccountStickyFooter.jsx';
import OpenAccountLanguageContent from '../../Services/OpenAccountLanguageContent';
import Thankyoupopup from './Thanku-popup.jsx';
import infoimg from '../../assets/images/Info.svg';
import failureimg from '../../assets/images/failure.svg';
import './Thankyoupopup.scss';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import thumbsup from '../../assets/images/demat-images/thumbsup.gif';
import LazyLoader from "../Common-features/LazyLoader";
import { faAngleUp,faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    useLocation,
  } from 'react-router-dom';
function NewDematAccountForm(props) {
    // const location = useLocation();
    const isHomePage = window.location.pathname == "/";
    //console.log("props",props)
    const [highlightForm, setHighlightForm] = useState(false);
    const inputRef = useRef(null);
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
    const isBlog = (window.location.pathname.indexOf('blog')===1) ? 'yes' : '';
    const [referID, setReferID] = useState('');
    const webcheck = ((window.location.pathname.indexOf('/demat-account') > -1)||(window.location.pathname.indexOf('/what-is-trading-account') > -1) || (window.location.pathname.indexOf('/under25') > -1) ||(window.location.pathname.indexOf('/brokerage-charges') > -1) ? 'demat-web' : " ")
 
    const [view,setView]=useState({
		matches: window.innerWidth < 767 ? false : true ,
	  });

    const mfForm=(props.formName==='mf-form');
   
    const [blogForm, setblogForm] = useState("");
    const [blogFormOtp, setBlogFormOtp] = useState("");
    const [blogThankuPopup, setBlogThankuPopup] = useState("");
    const [blogPopUpForm, setBlogPopUpForm] = useState("");
    const otpVerify = useRef("");

    //Adding dynamic classes for brokerage-charges demat lead form
    const [brokerageForm,setBrokerageForm]=useState("");
    const [brokerageFormOtp,setBrokerageFormOtp] = useState("");
    const [BrokerageThankuPopup, setBrokerageThankuPopup] = useState("");

    /** state to show thankyou popup (add-lead) */
    const [showlead, setShowLead] = useState({ showModal: false, isFailure: false, titleText: 'Success', msgText: '' });

    /** state to show thankyou popup default */
    const [showThanku, setShowThanku] = useState({ showModal: false, page: 'no-addlead', resText: '', isOnboarding: '', isNewLead: null });

    const [ischeck, setIsCheck] = useState(false);
    const [OTPSendSuccessToaster, setOTPSendSuccessToaster] = useState({});
    var UTMCampaign = useRef('');
    var UTMMedium = useRef('');
    var UTMSource = useRef('');
    var referLink = useRef('');
    var otpLeadID = useRef('');
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
    //Creating a ref variable for blog pop up
    var blogPopUp=useRef('');
    const [showOpenAccountPopup, setShowOpenAccountPopup] = useState(false);
    const [fablesDetailTitleId, setFablesDetailTitleId] = useState(true);
    const [OTPInfoPopup, setOTPInfoPopup] = useState(false);
    const [OTPInfoPopupMsg, setOTPInfoPopupMsg] = useState('');
    const [IsIssue, setIsIssue] = useState('');
    const [captchaToken, setCaptchaToken] = useState('');
    const [showReferInput, setShowReferInput] = useState(() => false);
    //creating a state variable isPopUp for seeing whether the popup as come or not
    const [isPopUp, setIsPopUp] = useState(false);
    const [otpSessionID, setOTPSessionID] = useState(null)
    const [leadId, setLeadId] = useState();
    const [isToggle, setIsToggle] = useState(false);
    const [consent, setShowConsent] = useState(false);
    const [showRefMsg, setShowRefMsg] = useState();
    const [consentLoaders, setConsentLoaders] = useState({
        consentYesLoader: false,
        consentNoLoader: false
    });
    
    const [responseLink,setResponseLink]=useState();
      /**Error variable for consent */
      const [consentError, setConsentErrors] = useState();
    const { executeRecaptcha } = useGoogleReCaptcha();
    const toggleClass = () => {
        setIsToggle(!isToggle);
      };
    const handleButtonClick = () => {
        setShowOTP(false);
      };
   
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

    function addBLogPopUp() {
    if (window.innerWidth <= 992) {
        if(props.mobileForm.current.classList.contains('p-show')){
        setBlogPopUpForm('blog-pop-up-form'); 
        props.blogPop(false);
        setIsPopUp(true);
        } 
        else{
        setBlogPopUpForm('');
        props.blogPop(false);
        setIsPopUp(false);
        }
        //setIsPopUp(true);
        }
         
        
    }

    useEffect(() => {
        if (window.location.pathname.indexOf('blog') === 1 || window.location.pathname.indexOf('ipo') === 1) {
            setblogForm('blog-lead-form');
            if(window.location.pathname.indexOf('ipo')!==1){
            props.newDematForm(true);
            }
            setBlogFormOtp('blog-form-otp');
            setBlogThankuPopup('blog-thanku-popup');
            setTimeout(() => {
            addBLogPopUp();
            },20000)
        }
        else {
            setblogForm('');
            setBlogFormOtp('');
            setBlogThankuPopup('');
        }

        if(window.location.pathname.includes("brokerage-charges") && window.innerWidth<=992){
        setBrokerageForm("brokerage-lead-form");
        setblogForm('blog-lead-form');
        setBrokerageFormOtp("brokerage-form-otp");
        setBlogFormOtp("blog-form-otp");
        setBrokerageThankuPopup("brokerage-thanku-popup");
        setBlogThankuPopup('blog-thanku-popup');
        }
        else{
        setBrokerageForm("");
        setBrokerageFormOtp("");
        setBrokerageThankuPopup("");
        }

        if (!isMobile.current && props.isPopupVisible) {
            setTimeout(() => {
                showOpenAccountAdPopup();
            }, 60000);
        }
    }, []);
   

    useEffect(() => {
        let mediaQuery = window.matchMedia("(min-width: 767px)");
        mediaQuery.addListener(setView);
        // this is the cleanup function to remove the listener
        return () => mediaQuery.removeListener(setView);
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
            "utm_campaign": isBlog == "yes" ? UTMCampaign.current || 'choice_blog_leads' :(window.location.pathname.indexOf("/corporate-demat-account") > -1) ? 'DL_Corporate': UTMCampaign.current || null,
            "utm_content": isBlog == "yes" ? (view && !view.matches) ? (blogPopUp?.current?.classList?.contains("blog-pop-up-form"))? UTMContent.current || 'in_content_cta' :  UTMContent.current || 'mobile_sticky_cta' : UTMContent.current || 'desktop_sticky_cta' : UTMContent.current || null,
            "utm_custom": UTMCustom.current || window.location.pathname.toString().replace('/',''),
            "utm_medium": isBlog == "yes" ? UTMMedium.current || 'blog_leads' : UTMMedium.current || null,
            "utm_source": isBlog == "yes" ?(mfForm) ? UTMSource.current||"mf_lead_generation" : UTMSource.current || 'demat_lead_generation':(window.location.pathname.indexOf("/corporate-demat-account") > -1) ? 'DL_Corporate' :(window.location.pathname.indexOf("/mutual-funds-investment") > -1) ? 'choice-mf-web': UTMSource.current || null,
            "utm_term": UTMTerm.current || null,
            "account_type": type1 == 'MF' ? "" : "all",
        };
        openAccountService.sentOTPService(request,captchaToken,hideLoader,setLeadId,type1,setOTPSessionID,setShowThanku,fetchQueryParams,handleOTPShow,setAPIError,showAPIErrorToaster,props.dataLayerValues|| null,props.isActive,isPopUp)
       
    }

    function fetchQueryParams() {
        UTMCampaign.current = searchParams.get('utm_campaign') || '';
        UTMMedium.current = searchParams.get('utm_medium') || '';
        UTMSource.current = searchParams.get('utm_source') || '';
        UTMContent.current = searchParams.get('utm_content') || '';
        UTMCustom.current = searchParams.get('utm_custom') || '';
        UTMTerm.current = searchParams.get('utm_term') || '';
        refercode.current = ((searchParams.get('refercode') && window.atob(searchParams.get('refercode'))) || '') || ((searchParams.get('ref') && window.atob(searchParams.get('ref'))) || '') || '';
        refercodeInv.current = (searchParams.get('refercode') ? (searchParams.get('refercode')) : (searchParams.get('ref') || ''))// 
        refercode.current ? setReferID(refercode.current):"" 
        refercodeInv.current=(searchParams.get('refercode')?(searchParams.get('refercode')):(searchParams.get('ref')||''))// 
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
            sendOTP(type,captchaToken);
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



        useEffect(() => {
            setHighlightForm(props.highlight);
            //console.log("Highlight "+props.highlight);
            if(props.highlight){
            document.getElementById("mobile_no").focus();
            if(window.innerWidth<=992){
            //console.log("Pop up form is added");
            addBLogPopUp();
            }
            }
            
        }, [props.highlight]);
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

    // useEffect(() => {
    //     if(consent && consent === 'yes'){
    //         setShowConsent(false);
    //             handleOTPClose(responseLink,null,null,null,null)
    //     }else{
    //         setShowConsent(() => false);
    //         setMobileNumber("");
    //         setReferID("")
    //     }
    // },[consent])
    
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
                    <div className={isHomePage ?`invest-zero-ac ${blogPopUpForm}`:`${blogPopUpForm}`} ref={blogPopUp}>
                        {
                          isHomePage ?
                       
                    <div className={`invest-zero-fees ${isToggle ? "form-header":""}`}>
                    <div className="zero-fees-form">
                        <h3 className="form-ttl"><span className={`${isToggle ? "":"text-none"}`}>Open Choice Demat Account</span> Invest with ZERO Fees</h3>
                        <button className="btn-up-down" onClick={toggleClass}><FontAwesomeIcon icon={isToggle ? faAngleDown : faAngleUp} /></button>
                    </div>
                    <p className={`form-para ${isToggle ? "text-none":""}`}>NO Account Opening Fee, AMC for 1st Year, Zero Square-off Charges + Free Call & Trade.</p>
                    </div>
                    :""
                     }
                     <div className={`demat-account-form demat-account-form-new ${blogForm} ${brokerageForm} ${isHomePage ? (isToggle ? 'form-hide' : 'form-show') : ''}`} id="dematform">

                       {
                       
                        (window.location.pathname.indexOf("/mutual-funds-investment") > -1) ?
                        <h2 className="heading">Open Your Account</h2>:
                        (window.location.pathname.indexOf("/under25") > -1) ?
                        <div className="under-card-heading">
                            <h2 className="heading">Open your free trading account</h2>
                            <p>Take Control of Your Finances</p>
                        </div>
                        :(window.location.pathname.indexOf("/what-is-trading-account") > -1) ?
                           
                        <h2 className="heading">Open Trading Account</h2>
                       
                    :
                        (window.location.pathname.indexOf("open-trading-account")>-1)?
                        <h2 className="heading">Open Trading Account</h2>:
                        <h2 className="heading">Open Demat Account</h2>
                      }
                      {(window.location.pathname.indexOf("blog")===1 || window.location.pathname.indexOf("ipo")===1) ? 
                      (mfForm?
                        <div className="sticy-card-blog-new sub-new-small">
                        <h3 className="title-secnd">Start Investing in Mutual Funds Now !</h3>
                         <ul>
                         <li>
                             <span className="bx-icon">
                             <svg width="36" height="29" viewBox="0 0 36 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                             <rect x="1" y="8" width="34" height="8" rx="4" stroke="#FFCE02" stroke-width="2"/>
                             <path d="M6.32457 24.5459L5.14721 16H30.8528L29.6757 24.5458C29.403 26.5253 27.7113 28 25.7131 28H10.2871C8.28895 28 6.59728 26.5254 6.32457 24.5459Z" stroke="#FFCE02" stroke-width="2"/>
                             <line x1="13" y1="20" x2="13" y2="24" stroke="#FFCE02" stroke-width="2" stroke-linecap="round"/>
                             <line x1="4.75504" y1="6.96654" x2="8.31346" y2="1.88937" stroke="#FFCE02" stroke-width="2" stroke-linecap="round"/>
                             <line x1="1" y1="-1" x2="7.2" y2="-1" transform="matrix(-0.573938 -0.818898 -0.818898 0.573938 31.1741 8.35938)" stroke="#FFCE02" stroke-width="2" stroke-linecap="round"/>
                             <line x1="18" y1="19" x2="18" y2="25" stroke="#FFCE02" stroke-width="2" stroke-linecap="round"/>
                             <line x1="23" y1="20" x2="23" y2="24" stroke="#FFCE02" stroke-width="2" stroke-linecap="round"/>
                             </svg>

                             </span>
                             <span className="bx-text">Readymade Baskets</span>
                         </li>
                         <li>
                             <span className="bx-icon">
                             <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                             <path d="M27.6507 18.6492C28.301 20.2153 28.6598 21.9322 28.6598 23.7327C28.6598 31.0754 22.6918 37.0278 15.3299 37.0278C7.968 37.0278 2 31.0754 2 23.7327C2 16.3899 7.968 10.4375 15.3299 10.4375C19.1177 10.4375 22.5365 12.0132 24.9633 14.5434" stroke="#FFCE02" stroke-width="2"/>
                             <path d="M21.7244 18.1412L25.2399 14.6255M25.2399 14.6255L25.5376 6.77462C25.5471 6.52516 25.6495 6.28825 25.8248 6.11047L29.0967 2.79145C29.7319 2.14711 30.8281 2.61042 30.8086 3.51501L30.704 8.37379C30.6917 8.94472 31.1593 9.41 31.7301 9.39497L36.8129 9.26111C37.7127 9.23741 38.1833 10.3217 37.5513 10.9628L34.1076 14.456C33.9158 14.6506 33.6528 14.7582 33.3797 14.7539L25.2399 14.6255Z" stroke="#FFCE02" stroke-width="2"/>
                             <ellipse cx="15.0746" cy="23.9222" rx="8.35804" ry="8.33624" stroke="#FFCE02" stroke-width="2"/>
                             <path d="M11.8623 19.8672H14.2743M14.2743 19.8672C15.6063 19.8672 16.6862 20.9471 16.6862 22.2791C16.6862 23.6112 15.6063 24.6911 14.2743 24.6911H11.8623L15.6142 28.443M14.2743 19.8672H18.2942M11.8623 22.2791H18.2942" stroke="#FFCE02" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                             </svg>

             
                             </span>
                             <span className="bx-text">Goal Based Investment</span>
                         </li>
                         <li>
                             <span className="bx-icon">
                             <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                             <path d="M13.126 24.57L18.1852 21.9104L23.2426 24.57L22.2787 18.9376L26.3704 14.9474L20.7156 14.1246L18.1852 9L15.6565 14.1246L10 14.9474L14.0917 18.9376L13.126 24.57Z" stroke="#FFCE02" stroke-width="2" stroke-linejoin="round"/>
                             <path d="M17.761 2.05884L5.76098 5.01268C5.3141 5.12268 5 5.52348 5 5.9837V20.3628C5 22.9018 6.20522 25.29 8.24766 26.7983L18 34L27.7523 26.7983C29.7948 25.29 31 22.9018 31 20.3628V5.9837C31 5.52348 30.6859 5.12268 30.239 5.01268L18.239 2.05884C18.082 2.02019 17.918 2.02019 17.761 2.05884Z" stroke="#FFCE02" stroke-width="2" stroke-linejoin="round"/>
                             </svg>

             
                             </span>
                             <span className="bx-text">Choice Rated Schemes</span>
                         </li>
                         </ul>
                         {window.innerWidth<=992 &&  <span className="close-btn-mdl" onClick={() => {
                                 props.setIsActive(false);
                                 props.openAccount.current.style.zIndex = 9999999999;
                                 setBlogPopUpForm('');
                                 setIsPopUp(false);
                                 props.blogPop(false);  
                                 setHighlightForm(false);
                                 props.modifyHighLight(false);
                         }}>&times;</span>} 
                            
                        </div>
                        :
                      <div className="sticy-card-blog-new sub-new-small">
                      <h3 className="title-secnd">Free Demat Account Opening in 5 Mins</h3>
                       <ul>
                       <li>
                           <span className="bx-icon">
                           {window.location.pathname.indexOf('ipo')===1? 
                           <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M18.0011 26.8218L14.7611 17.1016H1.80078L5.04085 26.8218H18.0011ZM18.0011 26.8218H24.4813" stroke="#FFCE02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                           <path d="M29.3415 12.2401C29.3415 14.0296 27.8909 15.4801 26.1014 15.4801C24.3119 15.4801 22.8613 14.0296 22.8613 12.2401C22.8613 10.4506 24.3119 9 26.1014 9C27.8909 9 29.3415 10.4506 29.3415 12.2401Z" stroke="#FFCE02" stroke-width="2"/>
                           <path d="M21.2402 19.5312H30.9604C32.7499 19.5312 34.2005 20.9818 34.2005 22.7713V23.5813C34.2005 25.3708 32.7499 26.8214 30.9604 26.8214H29.3404" stroke="#FFCE02" stroke-width="2" stroke-linecap="round"/>
                           </svg>
                           :<svg className="svg-fill" width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                               <path d="M15.4076 28.2473C14.6197 28.2473 13.981 28.3642 13.981 29.1522C13.981 29.9401 14.6197 30.0571 15.4076 30.0571H21.1141C21.9021 30.0571 22.5408 29.9401 22.5408 29.1522C22.5408 28.3642 21.9021 28.2473 21.1141 28.2473H19.1658V18.2609C19.1658 17.4729 18.5271 16.8342 18.2609 16.8342H15.4076C15.1304 16.8342 14.5027 17.2174 14.5027 17.7391C14.5027 18.2609 15.1304 18.644 15.4076 18.644H17.356V28.2473H15.4076ZM35.0951 2.33152H30.5788V0.904891C30.5788 0.116963 29.9401 0 29.6739 0C29.4077 0 28.769 0.116963 28.769 0.904891V2.33152H19.1658V0.904891C19.1658 0.116963 18.5271 0 18.2609 0C17.9947 0 17.356 0.116963 17.356 0.904891V2.33152H7.75272V0.904891C7.75272 0.116963 7.11401 0 6.84783 0C6.58164 0 5.94293 0.116963 5.94293 0.904891V2.33152H1.42663C0.638702 2.33152 0 2.97022 0 3.75815V34.5734C0 35.3613 0.638702 36 1.42663 36H35.0951C35.883 36 36.5217 35.3613 36.5217 34.5734V3.75815C36.5217 2.97022 35.883 2.33152 35.0951 2.33152ZM34.1902 33.6685H2.33152V13.7446H34.1902V33.6685ZM34.1902 10.8913H2.33152V5.18478H5.94293V6.61141C5.94293 6.8776 6.0599 7.5163 6.84783 7.5163C7.63575 7.5163 7.75272 6.8776 7.75272 6.61141V5.18478H17.356V6.61141C17.356 6.8776 17.4729 7.5163 18.2609 7.5163C19.0488 7.5163 19.1658 6.8776 19.1658 6.61141V5.18478H28.769V6.61141C28.769 6.8776 28.886 7.5163 29.6739 7.5163C30.4618 7.5163 30.5788 6.8776 30.5788 6.61141V5.18478H34.1902V10.8913Z" fill="#FFCE02" />
                           </svg>}
                           </span>
                           <span className="bx-text">{window.location.pathname.indexOf('ipo')===1?"IPO Analysis by Experts"
                           :"No AMC Charges for First Year"}</span>
                       </li>
                       <li>
                           <span className="bx-icon">
                           {window.location.pathname.indexOf('ipo')===1?
                           <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M34.2008 34.1969H14.4008C8.46109 34.1969 5.49123 34.1969 3.64601 32.3517C1.80078 30.5063 1.80078 27.5365 1.80078 21.5969V1.79688" stroke="#FFCE02" stroke-width="2" stroke-linecap="round"/>
                           <path d="M9 3.59375H10.8" stroke="#FFCE02" stroke-width="2" stroke-linecap="round"/>
                           <path d="M9 9H16.2" stroke="#FFCE02" stroke-width="2" stroke-linecap="round"/>
                           <path d="M5.40234 32.3984C7.33002 28.8938 9.94337 19.8325 14.9537 19.8325C18.4165 19.8325 19.3133 24.2475 22.7068 24.2475C28.5453 24.2475 27.6989 14.3984 34.2023 14.3984" stroke="#FFCE02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                           </svg>
                           :
                           <svg className="svg-fill" width="37" height="38" viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                               <path d="M24.0062 25.6527C30.8146 25.6527 36.3325 20.1347 36.3325 13.3263C36.3325 6.51792 30.8146 1 24.0062 1C17.1978 1 11.6799 6.51792 11.6799 13.3263C11.6799 14.5723 11.9023 15.8183 12.2583 17.0198H11.4129V3.98146C11.4129 3.71446 11.3239 3.49197 11.1459 3.31397C10.9679 3.13597 10.7454 3.04697 10.4784 3.04697H6.20643C5.93943 3.04697 5.71693 3.13597 5.53894 3.31397C5.36094 3.49197 5.27194 3.71446 5.27194 3.98146V17.0198H1.93449C1.75649 17.0198 1.57849 17.0643 1.44499 17.1533C1.3115 17.2423 1.178 17.3758 1.089 17.5538C1 17.7318 1 17.9098 1 18.0878C1 18.2658 1.089 18.4438 1.2225 18.5773L7.63041 25.6972C7.71941 25.7862 7.80841 25.8752 7.9419 25.9197C8.0754 25.9642 8.2089 26.0087 8.3424 26.0087C8.4759 26.0087 8.60939 26.0087 8.74289 25.9197C8.87639 25.8752 8.96539 25.7862 9.05439 25.6972L13.9048 20.3127C14.1273 20.6242 14.3498 20.8912 14.5723 21.1582V28.0111H11.2349C11.0569 28.0111 10.8789 28.0556 10.7454 28.1446C10.6119 28.2336 10.4784 28.3671 10.3894 28.5451C10.3004 28.7231 10.3004 28.9011 10.3004 29.0791C10.3004 29.2571 10.3894 29.4351 10.5229 29.5686L16.9308 36.6885C17.0198 36.7775 17.1088 36.8665 17.2423 36.911C17.3758 36.9555 17.5093 37 17.6428 37C17.7763 37 17.9098 37 18.0433 36.911C18.1768 36.8665 18.2658 36.7775 18.3548 36.6885L24.7627 29.5686C24.8962 29.4351 24.9407 29.2571 24.9852 29.0791C24.9852 28.9011 24.9852 28.7231 24.8962 28.5451C24.8072 28.3671 24.7182 28.2336 24.5402 28.1446C24.4067 28.0556 24.2287 28.0111 24.0507 28.0111H20.7132V25.1632C21.7812 25.4747 22.8937 25.6082 24.0507 25.6082L24.0062 25.6527ZM16.3968 28.9901V23.0272C17.1533 23.6057 17.9543 24.0952 18.7998 24.4957V28.9901C18.7998 29.2571 18.8888 29.4796 19.0667 29.6576C19.2447 29.8356 19.4672 29.9246 19.7342 29.9246H21.9147L17.5983 34.7305L13.2818 29.9246H15.4623C15.7293 29.9246 15.9518 29.8356 16.1298 29.6576C16.3078 29.4796 16.3968 29.2571 16.3968 28.9901ZM15.4623 18.5773C15.5958 18.4438 15.6403 18.2658 15.6848 18.0878C15.6848 17.9098 15.6848 17.7318 15.5958 17.5538C15.5068 17.3758 15.4178 17.2423 15.2398 17.1533C15.1063 17.0643 14.9283 17.0198 14.7503 17.0198H14.2163C13.7713 15.8628 13.5488 14.6168 13.5488 13.3263C13.5488 11.2349 14.1718 9.23239 15.3288 7.49691C16.4858 5.76143 18.0878 4.42645 20.0012 3.62546C21.9147 2.82447 24.0062 2.64648 26.0532 3.04697C28.1001 3.44747 29.9246 4.42645 31.3931 5.89493C32.8616 7.36341 33.8405 9.23239 34.241 11.2349C34.6415 13.2818 34.419 15.3733 33.6625 17.2868C32.8616 19.2002 31.5266 20.8467 29.7911 21.9592C28.0556 23.1162 26.0532 23.7392 23.9617 23.7392C21.1582 23.7392 18.5328 22.6267 16.5748 20.6687C15.9963 20.0902 15.5513 19.5117 15.1063 18.8443L15.3733 18.5328L15.4623 18.5773ZM9.85538 18.5773C10.0334 18.7553 10.2559 18.8443 10.5229 18.8443H12.7033L8.3869 23.6502L4.07046 18.8443H6.25093C6.51792 18.8443 6.74042 18.7553 6.91842 18.5773C7.09642 18.3993 7.18541 18.1768 7.18541 17.9098V4.91595H9.58838V17.9543C9.58838 18.2213 9.67738 18.4438 9.85538 18.6218V18.5773Z" fill="#FFCE02" stroke="#221F20" stroke-width="0.1" />
                               <path d="M20.4908 10.7447C20.3128 10.9227 20.2238 11.1452 20.2238 11.4122C20.2238 11.6792 20.3128 11.9017 20.4908 12.0797C20.6688 12.2577 20.9358 12.3467 21.1583 12.3467H23.9617C23.9617 12.3467 23.9172 12.3912 23.8727 12.4357C23.7392 12.5692 23.5612 12.7027 23.3832 12.7472C23.2052 12.8362 23.0272 12.8807 22.8047 12.8362H21.1583C20.9803 12.8362 20.8023 12.8807 20.6243 13.0142C20.4463 13.1032 20.3573 13.2812 20.2683 13.4592C20.1793 13.6372 20.1793 13.8152 20.2238 14.0377C20.2238 14.2157 20.3573 14.3937 20.4908 14.5272L24.5847 18.4431C24.7627 18.6211 24.9852 18.7101 25.2522 18.7101C25.5192 18.7101 25.7417 18.5766 25.9197 18.3986C26.0977 18.2206 26.1867 17.9536 26.1867 17.7311C26.1867 17.4641 26.0532 17.2416 25.8752 17.0636L23.4277 14.7497C24.0952 14.6162 24.6737 14.3047 25.1632 13.8152C25.5637 13.4147 25.8307 12.9252 26.0087 12.3467H26.8097C27.0767 12.3467 27.2992 12.2577 27.4772 12.0797C27.6552 11.9017 27.7442 11.6792 27.7442 11.4122C27.7442 11.1452 27.6552 10.9227 27.4772 10.7447C27.2992 10.5667 27.0322 10.4777 26.8097 10.4777H26.0087C25.9642 10.2552 25.8752 10.0772 25.7862 9.89925H26.8097C27.0767 9.89925 27.2992 9.81025 27.4772 9.63225C27.6552 9.45425 27.7442 9.23176 27.7442 8.96476C27.7442 8.69776 27.6552 8.47527 27.4772 8.29727C27.2992 8.11927 27.0767 8.03027 26.8097 8.03027H21.0693C20.8023 8.03027 20.5798 8.11927 20.4018 8.29727C20.2238 8.47527 20.1348 8.69776 20.1348 8.96476C20.1348 9.23176 20.2238 9.45425 20.4018 9.63225C20.5798 9.81025 20.8468 9.89925 21.0693 9.89925H22.7157C23.1607 9.89925 23.6057 10.1217 23.8727 10.4777H21.0693C20.8023 10.4777 20.5798 10.5667 20.4018 10.7447H20.4908Z" fill="#FFCE02" stroke="#221F20" stroke-width="0.1" />
                           </svg>}
           
                           </span>
                           {window.location.pathname.indexOf('ipo')===1?
                           (<span className="bx-text">IPO Report To Take Decision</span>):
                           (<span className="bx-text">Low DP Charges <span className="fw-regular">(Rs. 10 only)</span></span>)}
                       </li>
                       <li>
                           <span className="bx-icon">

                           {window.location.pathname.indexOf('ipo')===1?
                           <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M21.2402 13.3203H27.7202" stroke="#FFCE02" stroke-width="2" stroke-linecap="round"/>
                           <path d="M21.2402 18.9922H26.1002" stroke="#FFCE02" stroke-width="2" stroke-linecap="round"/>
                           <path d="M26.1008 3.60156H9.90078C5.42727 3.60156 1.80078 7.22806 1.80078 11.7016V24.6616C1.80078 29.1351 5.42727 32.7616 9.90078 32.7616H26.1008C30.5743 32.7616 34.2008 29.1351 34.2008 24.6616V11.7016C34.2008 7.22806 30.5743 3.60156 26.1008 3.60156Z" stroke="#FFCE02" stroke-width="2" stroke-linejoin="round"/>
                           <path d="M6.66016 24.6619C8.61762 20.4805 15.9139 20.2054 18.0002 24.6619" stroke="#FFCE02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                           <path d="M15.5698 13.3181C15.5698 15.1076 14.1192 16.5581 12.3298 16.5581C10.5404 16.5581 9.08984 15.1076 9.08984 13.3181C9.08984 11.5287 10.5404 10.0781 12.3298 10.0781C14.1192 10.0781 15.5698 11.5287 15.5698 13.3181Z" stroke="#FFCE02" stroke-width="2"/>
                           </svg>                           
                           :
                           <svg className="svg-fill" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                               <path d="M27.0439 28.8113C26.5449 28.3123 26.1057 27.8731 25.6566 27.424C21.9438 30.4481 17.7021 31.6957 12.9314 30.8972C8.87932 30.2086 5.60571 28.1626 3.12056 24.889C-1.71002 18.5214 -0.841715 9.51894 5.0967 4.05959C10.9752 -1.33987 19.9976 -1.35983 26.0159 4.03963C32.0142 9.42912 33.0921 18.9306 27.4531 25.6175C27.9022 26.0667 28.3414 26.5058 28.8404 26.9949C29.04 26.7753 29.2895 26.4759 29.569 26.2164C30.0879 25.7173 30.7666 25.6974 31.2756 26.1964C32.5432 27.444 33.8306 28.6816 35.0383 29.989C36.9346 32.035 35.8667 35.2986 33.132 35.9075C31.9643 36.167 30.9064 35.8775 30.048 35.0791C28.7206 33.8415 27.4531 32.534 26.1756 31.2366C25.7065 30.7675 25.7364 30.0689 26.1955 29.5898C26.465 29.3004 26.7744 29.0508 27.0439 28.8113ZM15.5763 28.7414C22.8421 28.7414 28.7106 22.8829 28.7506 15.5971C28.7905 8.33126 22.882 2.40283 15.5962 2.39285C8.32041 2.38287 2.41194 8.28136 2.40196 15.5572C2.40196 22.833 8.29047 28.7414 15.5763 28.7414ZM30.4772 28.8412C29.9382 29.3802 29.3793 29.9391 28.8204 30.498C29.7187 31.3963 30.6369 32.3344 31.575 33.2526C32.0741 33.7417 32.7028 33.7117 33.2019 33.2327C33.6909 32.7636 33.7608 32.1049 33.3117 31.6358C32.3735 30.6677 31.3954 29.7295 30.4772 28.8313V28.8412Z" fill="#FFCE02" />
                               <path d="M21.4546 13.7405C20.9655 14.2395 20.4864 14.7385 19.9874 15.2276C18.8397 16.3853 17.6819 17.5331 16.5242 18.6809C15.8954 19.3096 15.2267 19.3096 14.5979 18.6809C14.1289 18.2118 13.6697 17.7427 13.1907 17.2536C13.0709 17.3634 12.9811 17.4532 12.8813 17.5431C11.6736 18.7507 10.466 19.9584 9.25835 21.156C8.80923 21.6051 8.3601 21.705 7.87106 21.4754C7.05265 21.0961 6.88299 20.148 7.53172 19.4993C8.62958 18.3914 9.72744 17.2936 10.8353 16.1957C11.3143 15.7166 11.7834 15.2376 12.2625 14.7685C12.8314 14.2196 13.52 14.2196 14.0789 14.7685C14.558 15.2376 15.0271 15.7166 15.5062 16.1857C15.5062 16.1857 15.5261 16.1957 15.4962 16.1857C16.9134 14.7685 18.3107 13.3712 19.708 11.9739C19.678 11.9739 19.5882 11.954 19.4984 11.954C18.9794 11.954 18.4504 11.954 17.9314 11.954C17.2528 11.934 16.7537 11.4549 16.7338 10.8262C16.7038 10.1675 17.1829 9.58859 17.8616 9.57861C19.5183 9.54867 21.1751 9.54867 22.8319 9.57861C23.5205 9.58859 23.9497 10.1375 23.9597 10.906C23.9597 12.2734 23.9597 13.6407 23.9597 15.018C23.9597 15.1877 23.9597 15.3673 23.9597 15.537C23.9297 16.2755 23.4207 16.7945 22.752 16.7945C22.0833 16.7945 21.5843 16.2556 21.5643 15.517C21.5544 14.9382 21.5643 14.3593 21.5643 13.7704C21.5344 13.7604 21.4945 13.7505 21.4645 13.7305L21.4546 13.7405Z" fill="#FFCE02" />
                           </svg>}
           
                           </span>

                           {window.location.pathname.indexOf('ipo')===1?
                           <span className="bx-text">Free IPO Investment Account</span>:
                           <span className="bx-text">Free Expert Research</span>}
                       </li>
                       </ul>
                       {window.innerWidth<=992 &&  <span className="close-btn-mdl" onClick={() => {
                               props.setIsActive(false);
                               props.openAccount.current.style.zIndex = 9999999999;
                               setBlogPopUpForm('');
                               setIsPopUp(false);
                               props.blogPop(false);  
                               setHighlightForm(false);
                               props.modifyHighLight(false);
                       }}>&times;</span>} 
                          
                      </div>) : ""}

                      {
                      (window.location.pathname.includes('brokerage-charges') &&
                    window.innerWidth<=992) &&
                      <span className="close-btn-mdl" onClick={() => {
                        props.setIsActive(false);
                        
                }}>&times;</span>
                      }
                        <Form>
                            <Form.Group className= "mb-3 formgrp formgrp-new">
                                <Form.Label>Mobile Number*</Form.Label>
                                <div className="sub-formgrp sub-formgrp-new">
                                    <Form.Control isValid={!errors.invalidMobile || !errors.required} type="tel" pattern="\d*" name="mobile_no" id="mobile_no" placeholder="0000000000" className={`formcontrol digit-otp ${highlightForm ? 'highlight' : ''}`} autoComplete="off" maxLength="10" isInvalid={errors.invalidMobile || errors.required} value={mobileNumber} onChange={handleMobile} />
                                    {
                                        errors.invalidMobile ? <Form.Control.Feedback type="invalid">{OpenAccountLanguageContent.getContent(props.language ? props.language : 'en', 'invalidmob')}</Form.Control.Feedback> : ''
                                    }
                                    {
                                        errors.required ? <Form.Control.Feedback type="invalid">{OpenAccountLanguageContent.getContent(props.language ? props.language : 'en', 'reqmob')}</Form.Control.Feedback> : ''
                                    }
                                    {/* <span className="state-code">+91</span> */}
                                </div>
                                {
                            webcheck == "demat-web" ?
                                ""
                                :
                                <div className="sub-formgrp new-sub-formgrp">
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

                                <div className="sub-formgrp mt-5 mb-0 send-otp-btn">
                                    {
                                        <Button variant="primary"
                                            type="submit" className="btn-bg btn-bg-dark sendbtn" disabled={loaders.sendOTPLoader} onClick={handleSendOTP}>
                                            {loaders.sendOTPLoader ? <div className="loaderB mx-auto"></div> : OpenAccountLanguageContent.getContent(props.language ? props.language : 'en', 'otpbtn',window.location.pathname.includes('blog'), isHomePage)}</Button>
                                    }
                                </div>
                            </Form.Group>
                        </Form>
                        <div className="slider-btns">
                        <Button variant="primary" type="submit" className={!showOTP ? "btn-bg-slider active-slide-tab":" btn-bg-slider"}></Button>
                        <Button variant="primary" type="submit" className={showOTP ? "btn-bg-slider active-slide-tab":" btn-bg-slider"}></Button>
                        </div>
                    </div>
                </div>
                )
            }
            {
                showThanku.showModal && (
               
                <div className={`${blogPopUpForm} ${(window.location.pathname.includes("open-free-demat-account") ||
                 window.location.pathname.includes("corporate-demat-account") ||
                 window.location.pathname.includes("demat-account")
                 || window.location.pathname.includes("mutual-funds-investment")) && 'demat-form-wrapper'}`}>
                  <div className={isHomePage ?`invest-zero-ac`:""}>
                   <div className={`demat-account-form demat-account-form-new custom-th-popup ${blogThankuPopup} ${BrokerageThankuPopup}`}>
                        <div className="thank-you-msg">
                            <div className="thank-logo">
                                <div className="blog-thnu-circle">
                                <LazyLoader src={thumbsup} className={'img-fluid'} width={"160"} height={"160"} alt="Loading" />
                                </div>
                            </div>
                           
                        <div className="thank-content">
                            <h2 className={(window.location.pathname.indexOf('campaign/free-demat-account') > -1) ||(window.location.pathname.indexOf('demat-account') > -1)  ||(window.location.pathname.indexOf('open-free-demat-account') > -1) || (window.location.pathname.indexOf('open-trading-account') > -1)? "thankyou-title campaign-success":"thankyou-title"}>Thank You!</h2>
                                <p className="subheading">{showThanku.resText? showThanku.resText: "You are being redirected to onboarding page!"}</p>
                        </div>
                        </div>
                        </div> 
                    </div>       
                </div>
                )

            }

            {
                showOTP && !showThanku.showModal && (
                    <div className={isHomePage ? `invest-zero-ac`:""}>
                        <div className={`invest-zero-fees ${isToggle ? "form-header":""}`}>
                            {
                                isHomePage ?
                        <div className="zero-fees-form">
                            <h3 className="form-ttl">OTP Verification</h3>
                            <button className="btn-up-down" onClick={toggleClass}><FontAwesomeIcon icon={isToggle ? faAngleDown : faAngleUp} /></button>
                        </div>
                        :"" }
                        </div>
                    <div className={`${blogPopUpForm}`}>
                      <div className={`demat-account-form demat-account-form-new ${blogFormOtp} ${brokerageFormOtp} ${isHomePage ? (isToggle ? 'form-hide' : 'form-show') : ''}`}>
                        <OpenAccountOTPModalNew mobileNumber={mobileNumber} otpSessionID={otpSessionID} onClose={handleOTPClose} language={props.language} openInfoPopup={(msg) => triggerOTPInfoPopup(msg)} showPopup={showOTP} onButtonClick={handleButtonClick} setIsActive={props.setIsActive} openAccount={props.openAccount} setBlogPopUpForm={setBlogPopUpForm} blogPop={props.blogPop} isPopUp={isPopUp}  updateType={updateType} ></OpenAccountOTPModalNew>
                        <div className="slider-btns">
                        <Button variant="primary" type="submit" className={!showOTP ? "btn-bg-slider active-slide-tab":" btn-bg-slider"}  ></Button>
                        <Button variant="primary" type="submit" className={showOTP ? "btn-bg-slider active-slide-tab":" btn-bg-slider"}></Button>
                        </div>
                    </div>
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

            <Modal className='common-modal-css common-modal-thankyou new-demat-modal'
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
                                        <button className="btn-bg referral-btn" onClick={() => { consentLoaders.consentYesLoader ? null : submitConsent('yes') ,setShowConsent(() => false);}} disabled={consentLoaders.consentNoLoader}>
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

export default NewDematAccountForm;
