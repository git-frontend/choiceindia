import React, { useEffect, useState, useRef } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';
import openAccountService from '../../Services/openAccountService';
import { useSearchParams } from "react-router-dom";
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

function DematAccountForm(props) {
    // console.log('DDDDDDDD', props.page);
    const mobileRegex = /^(6|9|8|7)([0-9]{9})$/i;
    const [searchParams, setSearchParams] = useSearchParams();
    const [mobileNumber, setMobileNumber] = useState('');
    const [errors, setErrors] = useState({});
    const [showTermsCondition, setShowTermsCondition] = useState(false);
    const [showOTP, setShowOTP] = useState(false);
    const [loaders, setLoaders] = useState({});
    const [APIError, setAPIError] = useState();
    const [showErrorToaster, setShowErrorToaster] = useState(false);
    const type1=window.location.pathname =="/mutual-funds-investment" ? 'MF':"JF";


    /** state to show thankyou popup (add-lead) */
    const [showlead, setShowLead] = useState({ showModal: false, isFailure: false, titleText: 'Success', msgText: '' });

    /** state to show thankyou popup default */
    const [showThanku, setShowThanku] = useState({ showModal: false, page: 'no-addlead', resText: '',isOnboarding:'' });

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

    function hideOpenAccountAdPopup() {
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

    function handleTermsConditionShow() {
        setShowTermsCondition(true);
    }

    function handleTermsConditionClose() {
        setShowTermsCondition(false);
    }

    function handleOTPShow() {
        setShowOTP(true);
    }

    function handleOTPClose(link,msg,info) {
        // console.log('closeModal22',link,msg);
        setShowOTP(false);

        if (link) {

            let result = link.match("respond-issue");
            if (result&&result.length&&result[0] === 'respond-issue') {
                setIsIssue(() => link);
                setShowThanku(prevState => {
                    return { ...prevState, showModal: false, redirectionLink: '',resText: msg? msg:'',isOnboarding:info? info:"", closeMd: closeModal }
                });
            } else {
                if (link._reactName) {
                    setShowThanku(prevState => {
                        return { ...prevState, showModal: false, redirectionLink: link,resText: msg? msg:'',isOnboarding:info? info:"", closeMd: closeModal }
                    });
                } else {
                    setShowThanku(prevState => {
                        return { ...prevState, showModal: true, redirectionLink: link,resText: msg? msg:'',isOnboarding:info? info:"", closeMd: closeModal }
                    });
                }
            }
        } else {
            setShowThanku(prevState => {
                return { ...prevState, showModal: false, redirectionLink: '',resText: msg? msg:'',isOnboarding:info? info:"", closeMd: closeModal }
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
                // console.log('Addd lead page');
                sendNewLeadOTP();
            } else {
                sendOTP();
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
            return { ...prevState, showModal: false}
        });

        if(link){
            window.location.href = link;
        }
    }

    function sendNewLeadOTP() {
        // showLoader('sendOTPLoader');
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
            "utm_medium": UTMMedium.current || 'sidebar_seo_leads',
            "utm_source": UTMSource.current || 'blog_leads',
            "utm_term": null
        };

        // setTimeout(() => {
        //     hideLoader('sendOTPLoader');
        // }, 4000);
        openAccountService.addNewLead(request).then((res) => {

            if(res && res.status === 200){
                setShowLead(prevState => {
                    return {...prevState, showModal: true, isFailure: false, titleText: 'Success' ,msgText: res.data.Message, closeMd: closeModal}
                });
            }else{
                setShowLead(prevState => {
                    return {...prevState, showModal: true, isFailure: true, titleText: 'Oops' ,msgText: res.data.Message, closeMd: closeModal}
                });
            }
           // console.log('RRR',res);
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
            "whatsapp_consent":true,
            "service_code":type1=='MF' ? "MF": "JF",
            "mobile_number": mobileNumber,
            "product": type1=='MF' ? "INVESTICA":"JIFFY",
            "request_source": "CHOICEINDIA",
            "source": source.current?source.current:"CHOICEINDIA",//type1=='MF' ?"CHOICEINDIA":"CHOICEINDIA",
            "user_consent": type1=='MF' ?"true":"1",
            "referred_id": refercode.current || null,
            "sub_ref": subrefercode.current || null,
            "lead_source":type1=='MF' ?"CHOICEINDIA":"",
            // 'seo_demat_leads'
            "utm_campaign": UTMCampaign.current || null,
            "utm_content": UTMContent.current || null,
            "utm_custom": UTMCustom.current || null,
            // 'sidebar_seo_leads'
            "utm_medium": UTMMedium.current || null,
            // 'blog_leads'
            "utm_source": UTMSource.current || null,
            "utm_term": UTMTerm.current || null
        };
        openAccountService.sendOTP(request,type1).then((res) => {
            hideLoader('sendOTPLoader');
            if (res && res.status === 200 && res.data && res.data.StatusCode === 200) {
                otpSessionID.current =(type1=='MF') ? res.data.Body.session_id : res.data.Body.otp_session_id;
                
                
                fetchQueryParams();
                // resetOTPPopup();
                handleOTPShow();
                
            } else {
                setAPIError("Something went wrong, please try again later!");
               // console.log("check session",res.Body.session_id);
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
      
        refercodeInv.current=(searchParams.get('refercode')?(searchParams.get('refercode')):(searchParams.get('ref')||''))// 
        subrefercode.current = (searchParams.get('subref') && window.atob(searchParams.get('subref'))) || '';
        source.current = (searchParams.get('source'))?window.atob(searchParams.get('source')):'';
        subrefercodeInv.current = (searchParams.get('subref'))||'';
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
        if(IsIssue){
            window.location.href = IsIssue;
        }
        setOTPInfoPopup(false);
    }

    return (
        <>
            {
                showOpenAccountPopup ? <OpenDemateAccountPopup hideComponent={hideOpenAccountAdPopup} openInfoPopup={(msg) => triggerOTPInfoPopup(msg)} ></OpenDemateAccountPopup> : ''
            }
            {
                (props.isFromFableDetails ? (props.isFooterVisible && !fablesDetailTitleId) : props.isFooterVisible) ? <OpenDemateAccountStickyFooter openDemateAccountPopup={showOpenAccountAdPopup} openInfoPopup={(msg) => triggerOTPInfoPopup(msg)}></OpenDemateAccountStickyFooter> : ''
            }
            <div className="demat-account-form">

                <h3 className="form-ttl">{OpenAccountLanguageContent.getContent(props.language ? props.language : 'en', 'title')}</h3>
                <Form>
                    <Form.Group className="mb-3 formgrp">
                        <div className="sub-formgrp">
                            <Form.Control isValid={!errors.invalidMobile || !errors.required} type="text" pattern="\d*" name="mobile_no" id="mobile_no" placeholder={OpenAccountLanguageContent.getContent(props.language ? props.language : 'en', 'moblbl')} className="formcontrol digit-otp" autoComplete="off" maxLength="10" isInvalid={errors.invalidMobile || errors.required} value={mobileNumber} onChange={handleMobile} />
                            {
                                errors.invalidMobile ? <Form.Control.Feedback type="invalid">{OpenAccountLanguageContent.getContent(props.language ? props.language : 'en', 'invalidmob')}</Form.Control.Feedback> : ''
                            }
                            {
                                errors.required ? <Form.Control.Feedback type="invalid">{OpenAccountLanguageContent.getContent(props.language ? props.language : 'en', 'reqmob')}</Form.Control.Feedback> : ''
                            }

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
                                    props.language === 'hindi' ? <Form.Check.Label>मैं सहमत हूं कि मैंने <a  onClick={handleTermsConditionShow}><span className="link-tc">नियम और शर्तों</span></a> को पढ़ और स्वीकार कर लिया है</Form.Check.Label> : props.language === 'marathi' ? <Form.Check.Label>आपल्या <a  onClick={handleTermsConditionShow}><span className="link-tc">नियम आणि अटी </span></a>मी काळजीपूर्वक वाचल्या असून, त्या मला मान्य आहेत.</Form.Check.Label> : <Form.Check.Label>I agree that I have read &amp; accept the <a  onClick={handleTermsConditionShow}><span className="link-tc">Terms &amp; Conditions</span></a></Form.Check.Label>
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
                    <OpenAccountOTPModal mobileNumber={mobileNumber} otpSessionID={otpSessionID.current} onClose={handleOTPClose} language={props.language} openInfoPopup={(msg) => triggerOTPInfoPopup(msg)} showPopup={showOTP}></OpenAccountOTPModal> : ''
            }

            <Modal show={showTermsCondition} onHide={handleTermsConditionClose} backdrop="static"
                keyboard={false} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{OpenAccountLanguageContent.getContent(props.language ? props.language : 'en', 'termsheader')}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{OpenAccountLanguageContent.getContent(props.language ? props.language : 'en', 'terms')}</Modal.Body>
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
                <Modal.Body className="info-mdl-pup"><img src={infoimg} width='52' height='52' alt="Info"/></Modal.Body>
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
                showlead.showModal ? <Thankyoupopup isShow={showlead}/>: '' 
            }   
            {/* <Thankyoupopup isShow={showlead} /> */}

            {
                showThanku.showModal ? <Thankyoupopup isShow={showThanku} /> : ''
            }
        </>
    );
}

export default DematAccountForm;
