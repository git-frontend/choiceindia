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
    const webcheck = ((window.location.pathname.indexOf('/demat-account') > -1) ? 'demat-web' : " ")
 



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
                    <div className="demat-account-form demat-account-form-new blog-lead-form" id="dematform">

                        <h2 className="heading">Open Demat Account</h2>
                       <div className="sticy-card-blog-new sub-new-small">
                       <h3 className="title-secnd">Free Demat Account Opening in 5 Mins</h3>
                        <ul>
                        <li>
                            <span className="bx-icon">
                            <svg className="svg-fill" width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.4076 28.2473C14.6197 28.2473 13.981 28.3642 13.981 29.1522C13.981 29.9401 14.6197 30.0571 15.4076 30.0571H21.1141C21.9021 30.0571 22.5408 29.9401 22.5408 29.1522C22.5408 28.3642 21.9021 28.2473 21.1141 28.2473H19.1658V18.2609C19.1658 17.4729 18.5271 16.8342 18.2609 16.8342H15.4076C15.1304 16.8342 14.5027 17.2174 14.5027 17.7391C14.5027 18.2609 15.1304 18.644 15.4076 18.644H17.356V28.2473H15.4076ZM35.0951 2.33152H30.5788V0.904891C30.5788 0.116963 29.9401 0 29.6739 0C29.4077 0 28.769 0.116963 28.769 0.904891V2.33152H19.1658V0.904891C19.1658 0.116963 18.5271 0 18.2609 0C17.9947 0 17.356 0.116963 17.356 0.904891V2.33152H7.75272V0.904891C7.75272 0.116963 7.11401 0 6.84783 0C6.58164 0 5.94293 0.116963 5.94293 0.904891V2.33152H1.42663C0.638702 2.33152 0 2.97022 0 3.75815V34.5734C0 35.3613 0.638702 36 1.42663 36H35.0951C35.883 36 36.5217 35.3613 36.5217 34.5734V3.75815C36.5217 2.97022 35.883 2.33152 35.0951 2.33152ZM34.1902 33.6685H2.33152V13.7446H34.1902V33.6685ZM34.1902 10.8913H2.33152V5.18478H5.94293V6.61141C5.94293 6.8776 6.0599 7.5163 6.84783 7.5163C7.63575 7.5163 7.75272 6.8776 7.75272 6.61141V5.18478H17.356V6.61141C17.356 6.8776 17.4729 7.5163 18.2609 7.5163C19.0488 7.5163 19.1658 6.8776 19.1658 6.61141V5.18478H28.769V6.61141C28.769 6.8776 28.886 7.5163 29.6739 7.5163C30.4618 7.5163 30.5788 6.8776 30.5788 6.61141V5.18478H34.1902V10.8913Z" fill="#FFCE02" />
                            </svg>
                            </span>
                            <span className="bx-text">No AMC Charges for First Year</span>
                        </li>
                        <li>
                            <span className="bx-icon">
                            <svg className="svg-fill" width="37" height="38" viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24.0062 25.6527C30.8146 25.6527 36.3325 20.1347 36.3325 13.3263C36.3325 6.51792 30.8146 1 24.0062 1C17.1978 1 11.6799 6.51792 11.6799 13.3263C11.6799 14.5723 11.9023 15.8183 12.2583 17.0198H11.4129V3.98146C11.4129 3.71446 11.3239 3.49197 11.1459 3.31397C10.9679 3.13597 10.7454 3.04697 10.4784 3.04697H6.20643C5.93943 3.04697 5.71693 3.13597 5.53894 3.31397C5.36094 3.49197 5.27194 3.71446 5.27194 3.98146V17.0198H1.93449C1.75649 17.0198 1.57849 17.0643 1.44499 17.1533C1.3115 17.2423 1.178 17.3758 1.089 17.5538C1 17.7318 1 17.9098 1 18.0878C1 18.2658 1.089 18.4438 1.2225 18.5773L7.63041 25.6972C7.71941 25.7862 7.80841 25.8752 7.9419 25.9197C8.0754 25.9642 8.2089 26.0087 8.3424 26.0087C8.4759 26.0087 8.60939 26.0087 8.74289 25.9197C8.87639 25.8752 8.96539 25.7862 9.05439 25.6972L13.9048 20.3127C14.1273 20.6242 14.3498 20.8912 14.5723 21.1582V28.0111H11.2349C11.0569 28.0111 10.8789 28.0556 10.7454 28.1446C10.6119 28.2336 10.4784 28.3671 10.3894 28.5451C10.3004 28.7231 10.3004 28.9011 10.3004 29.0791C10.3004 29.2571 10.3894 29.4351 10.5229 29.5686L16.9308 36.6885C17.0198 36.7775 17.1088 36.8665 17.2423 36.911C17.3758 36.9555 17.5093 37 17.6428 37C17.7763 37 17.9098 37 18.0433 36.911C18.1768 36.8665 18.2658 36.7775 18.3548 36.6885L24.7627 29.5686C24.8962 29.4351 24.9407 29.2571 24.9852 29.0791C24.9852 28.9011 24.9852 28.7231 24.8962 28.5451C24.8072 28.3671 24.7182 28.2336 24.5402 28.1446C24.4067 28.0556 24.2287 28.0111 24.0507 28.0111H20.7132V25.1632C21.7812 25.4747 22.8937 25.6082 24.0507 25.6082L24.0062 25.6527ZM16.3968 28.9901V23.0272C17.1533 23.6057 17.9543 24.0952 18.7998 24.4957V28.9901C18.7998 29.2571 18.8888 29.4796 19.0667 29.6576C19.2447 29.8356 19.4672 29.9246 19.7342 29.9246H21.9147L17.5983 34.7305L13.2818 29.9246H15.4623C15.7293 29.9246 15.9518 29.8356 16.1298 29.6576C16.3078 29.4796 16.3968 29.2571 16.3968 28.9901ZM15.4623 18.5773C15.5958 18.4438 15.6403 18.2658 15.6848 18.0878C15.6848 17.9098 15.6848 17.7318 15.5958 17.5538C15.5068 17.3758 15.4178 17.2423 15.2398 17.1533C15.1063 17.0643 14.9283 17.0198 14.7503 17.0198H14.2163C13.7713 15.8628 13.5488 14.6168 13.5488 13.3263C13.5488 11.2349 14.1718 9.23239 15.3288 7.49691C16.4858 5.76143 18.0878 4.42645 20.0012 3.62546C21.9147 2.82447 24.0062 2.64648 26.0532 3.04697C28.1001 3.44747 29.9246 4.42645 31.3931 5.89493C32.8616 7.36341 33.8405 9.23239 34.241 11.2349C34.6415 13.2818 34.419 15.3733 33.6625 17.2868C32.8616 19.2002 31.5266 20.8467 29.7911 21.9592C28.0556 23.1162 26.0532 23.7392 23.9617 23.7392C21.1582 23.7392 18.5328 22.6267 16.5748 20.6687C15.9963 20.0902 15.5513 19.5117 15.1063 18.8443L15.3733 18.5328L15.4623 18.5773ZM9.85538 18.5773C10.0334 18.7553 10.2559 18.8443 10.5229 18.8443H12.7033L8.3869 23.6502L4.07046 18.8443H6.25093C6.51792 18.8443 6.74042 18.7553 6.91842 18.5773C7.09642 18.3993 7.18541 18.1768 7.18541 17.9098V4.91595H9.58838V17.9543C9.58838 18.2213 9.67738 18.4438 9.85538 18.6218V18.5773Z" fill="#FFCE02" stroke="#221F20" stroke-width="0.1" />
                                <path d="M20.4908 10.7447C20.3128 10.9227 20.2238 11.1452 20.2238 11.4122C20.2238 11.6792 20.3128 11.9017 20.4908 12.0797C20.6688 12.2577 20.9358 12.3467 21.1583 12.3467H23.9617C23.9617 12.3467 23.9172 12.3912 23.8727 12.4357C23.7392 12.5692 23.5612 12.7027 23.3832 12.7472C23.2052 12.8362 23.0272 12.8807 22.8047 12.8362H21.1583C20.9803 12.8362 20.8023 12.8807 20.6243 13.0142C20.4463 13.1032 20.3573 13.2812 20.2683 13.4592C20.1793 13.6372 20.1793 13.8152 20.2238 14.0377C20.2238 14.2157 20.3573 14.3937 20.4908 14.5272L24.5847 18.4431C24.7627 18.6211 24.9852 18.7101 25.2522 18.7101C25.5192 18.7101 25.7417 18.5766 25.9197 18.3986C26.0977 18.2206 26.1867 17.9536 26.1867 17.7311C26.1867 17.4641 26.0532 17.2416 25.8752 17.0636L23.4277 14.7497C24.0952 14.6162 24.6737 14.3047 25.1632 13.8152C25.5637 13.4147 25.8307 12.9252 26.0087 12.3467H26.8097C27.0767 12.3467 27.2992 12.2577 27.4772 12.0797C27.6552 11.9017 27.7442 11.6792 27.7442 11.4122C27.7442 11.1452 27.6552 10.9227 27.4772 10.7447C27.2992 10.5667 27.0322 10.4777 26.8097 10.4777H26.0087C25.9642 10.2552 25.8752 10.0772 25.7862 9.89925H26.8097C27.0767 9.89925 27.2992 9.81025 27.4772 9.63225C27.6552 9.45425 27.7442 9.23176 27.7442 8.96476C27.7442 8.69776 27.6552 8.47527 27.4772 8.29727C27.2992 8.11927 27.0767 8.03027 26.8097 8.03027H21.0693C20.8023 8.03027 20.5798 8.11927 20.4018 8.29727C20.2238 8.47527 20.1348 8.69776 20.1348 8.96476C20.1348 9.23176 20.2238 9.45425 20.4018 9.63225C20.5798 9.81025 20.8468 9.89925 21.0693 9.89925H22.7157C23.1607 9.89925 23.6057 10.1217 23.8727 10.4777H21.0693C20.8023 10.4777 20.5798 10.5667 20.4018 10.7447H20.4908Z" fill="#FFCE02" stroke="#221F20" stroke-width="0.1" />
                            </svg>
            
                            </span>
                            <span className="bx-text">Low DP Charges <span className="fw-regular">(Rs. 10 only)</span></span>
                        </li>
                        <li>
                            <span className="bx-icon">
                            <svg className="svg-fill" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M27.0439 28.8113C26.5449 28.3123 26.1057 27.8731 25.6566 27.424C21.9438 30.4481 17.7021 31.6957 12.9314 30.8972C8.87932 30.2086 5.60571 28.1626 3.12056 24.889C-1.71002 18.5214 -0.841715 9.51894 5.0967 4.05959C10.9752 -1.33987 19.9976 -1.35983 26.0159 4.03963C32.0142 9.42912 33.0921 18.9306 27.4531 25.6175C27.9022 26.0667 28.3414 26.5058 28.8404 26.9949C29.04 26.7753 29.2895 26.4759 29.569 26.2164C30.0879 25.7173 30.7666 25.6974 31.2756 26.1964C32.5432 27.444 33.8306 28.6816 35.0383 29.989C36.9346 32.035 35.8667 35.2986 33.132 35.9075C31.9643 36.167 30.9064 35.8775 30.048 35.0791C28.7206 33.8415 27.4531 32.534 26.1756 31.2366C25.7065 30.7675 25.7364 30.0689 26.1955 29.5898C26.465 29.3004 26.7744 29.0508 27.0439 28.8113ZM15.5763 28.7414C22.8421 28.7414 28.7106 22.8829 28.7506 15.5971C28.7905 8.33126 22.882 2.40283 15.5962 2.39285C8.32041 2.38287 2.41194 8.28136 2.40196 15.5572C2.40196 22.833 8.29047 28.7414 15.5763 28.7414ZM30.4772 28.8412C29.9382 29.3802 29.3793 29.9391 28.8204 30.498C29.7187 31.3963 30.6369 32.3344 31.575 33.2526C32.0741 33.7417 32.7028 33.7117 33.2019 33.2327C33.6909 32.7636 33.7608 32.1049 33.3117 31.6358C32.3735 30.6677 31.3954 29.7295 30.4772 28.8313V28.8412Z" fill="#FFCE02" />
                                <path d="M21.4546 13.7405C20.9655 14.2395 20.4864 14.7385 19.9874 15.2276C18.8397 16.3853 17.6819 17.5331 16.5242 18.6809C15.8954 19.3096 15.2267 19.3096 14.5979 18.6809C14.1289 18.2118 13.6697 17.7427 13.1907 17.2536C13.0709 17.3634 12.9811 17.4532 12.8813 17.5431C11.6736 18.7507 10.466 19.9584 9.25835 21.156C8.80923 21.6051 8.3601 21.705 7.87106 21.4754C7.05265 21.0961 6.88299 20.148 7.53172 19.4993C8.62958 18.3914 9.72744 17.2936 10.8353 16.1957C11.3143 15.7166 11.7834 15.2376 12.2625 14.7685C12.8314 14.2196 13.52 14.2196 14.0789 14.7685C14.558 15.2376 15.0271 15.7166 15.5062 16.1857C15.5062 16.1857 15.5261 16.1957 15.4962 16.1857C16.9134 14.7685 18.3107 13.3712 19.708 11.9739C19.678 11.9739 19.5882 11.954 19.4984 11.954C18.9794 11.954 18.4504 11.954 17.9314 11.954C17.2528 11.934 16.7537 11.4549 16.7338 10.8262C16.7038 10.1675 17.1829 9.58859 17.8616 9.57861C19.5183 9.54867 21.1751 9.54867 22.8319 9.57861C23.5205 9.58859 23.9497 10.1375 23.9597 10.906C23.9597 12.2734 23.9597 13.6407 23.9597 15.018C23.9597 15.1877 23.9597 15.3673 23.9597 15.537C23.9297 16.2755 23.4207 16.7945 22.752 16.7945C22.0833 16.7945 21.5843 16.2556 21.5643 15.517C21.5544 14.9382 21.5643 14.3593 21.5643 13.7704C21.5344 13.7604 21.4945 13.7505 21.4645 13.7305L21.4546 13.7405Z" fill="#FFCE02" />
                            </svg>
            
                            </span>
                            <span className="bx-text">Free Research Advisory & Tools</span>
                        </li>
                        </ul>
                        <span className="close-btn-mdl">&times;</span>
                       </div>
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
                                    {/* <label className="lbl">I agree that I have read &amp; accept the <a className="link-tc">Terms &amp; Conditions</a></label> */}
                                </div>

                                <div className="sub-formgrp mt-5 mb-0 send-otp-btn">
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
            {/* {
                showThanku.showModal && ( */}
                    <div className="demat-account-form demat-account-form-new blog-thanku-popup">
                    <span className="close-btn-mdl">&times;</span>
                        <div className="thank-you-msg">
                            <div className="thank-logo">
                                <div className="blog-thnu-circle">
                                <LazyLoader src={thumbsup} className={'img-fluid'} width={"160"} height={"160"} alt="Loading" />
                                </div>
                            </div>
                           
                        <div className="thank-content">
                            <h2 className={(window.location.pathname.indexOf('campaign/free-demat-account') > -1) ||(window.location.pathname.indexOf('demat-account') > -1)  ||(window.location.pathname.indexOf('open-free-demat-account') > -1) ? "thankyou-title campaign-success":"thankyou-title"}>Thank You!</h2>
                                <p className="subheading">{showThanku.resText? showThanku.resText: "You are being redirected to onboarding page!"}</p>
                        </div>
                        </div>
                        
                    </div>
                {/* )

            } */}

            {
                showOTP && !showThanku.showModal && (
                    <div className="demat-account-form demat-account-form-new blog-form-otp">
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
