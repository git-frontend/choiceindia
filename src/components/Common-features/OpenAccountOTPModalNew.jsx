import React, { useEffect, useState, useRef } from "react";
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import openAccountService from '../../Services/openAccountService';
// import OTPimage from '../../assets/images/otp.svg';
import enterOtp from '../../assets/images/enterotp.svg';
import "../Common-features/demat-form.scss";
import { Link } from "react-router-dom";
import OpenAccountLanguageContent from '../../Services/OpenAccountLanguageContent';
import Spinner from 'react-bootstrap/Spinner';
import Thankyoupopup from './Thanku-popup.jsx';
import Modal from 'react-bootstrap/Modal';
import { useSearchParams } from "react-router-dom";
import utils from "../../Services/utils";

function OpenAccountOTPModalNew({mobileNumber, otpSessionID, onClose, language, openInfoPopup, showPopup,onButtonClick,setIsActive,openAccount,setBlogPopUpForm,blogPop,isPopUp}) {
    // console.log('PPP',onClose.handleOTPClose());
    // props -> mobileNumber, otpSessionID
    const [loaders, setLoaders] = useState({});
    const [count, setCount] = useState(0);
    const [otp, setOtp] = useState('');
    const [OTPErrors, setOTPErrors] = useState('');
    const [OTPSendSuccessToaster, setOTPSendSuccessToaster] = useState({});
    var otpID = useRef(otpSessionID);
    const type2= "JF" ; //(window.location.pathname.indexOf('mutual-funds-investment') > -1) ? 'MF':"JF";
    const [show,setShow] = useState(true);
    const [searchParams, setSearchParams] = useSearchParams();
    // const [otpparam, setOtpparam] = useState('');
    const closeButton = useRef("");
    const [outCome,setOutCome]= useState();

     const otpVerify =useRef("");
    /**function to generate random probabity number for AB test */
    function generateRandomNumber(){
      var random = Math.random();
  
      if (random < 0.75) {
        setOutCome(() => 'A'); // Return a random number when the probability is less than 70%
      } else {
        setOutCome(() => 'B'); // Return a different number when the probability is greater than or equal to 70%
      }
    }

    const handleButtonClick = () => {
        onButtonClick(); 
      };
    // console.log('SSS',show);
    function handleClose(){
      //  console.log('Handleclose');
        setShow(() => false);
    }
  //  console.log('OOOO',showPopup);
    /**props object for Thankyou popup */
    const [showlead, setShowLead] = useState({ showModal: false, page: 'no-addlead' });
   // console.log('OOOO',showlead.showModal)

    /**to close the thankyou popup */
    function closeModal() {
        setShowLead(prevState => {
            return { ...prevState, showModal: false}
        });
        window.location.href = showlead.redirectLink;
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

    function handleOTP(e) {
        let value = e.target.value.replace(/\D/g, "");
        setOtp(value);
        if (!value.length) {
            setOTPErrors(OpenAccountLanguageContent.getContent(language ? language : 'en', 'otprequired'));
        } else {
            setOTPErrors('');
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (!count) {
                return () => clearInterval(interval);
            }
            setCount(seconds => seconds - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [count]);

    useEffect(() => {
        // setShow(() => true);
        console.log("Pop up "+isPopUp);
        if (window.location.pathname.includes('blog') === true && !isPopUp) {
            if (window.innerWidth <= 992) {
                closeButton.current.style.display = "block";
            }
        }
        else {
            closeButton.current.style.display = "none";
        }
        generateRandomNumber();
        setCount(30);
    }, []);



    useEffect(() => {
        onClose
    },[show])

    useEffect(() => {
        checkWebOTP();
    }, [loaders.resendOTPLoader]);

    function checkWebOTP() {
        if ('OTPCredential' in window) {
            const input = document.getElementById('openAccountOTP');
            if (!input) return;
            const ac = new AbortController();
            navigator.credentials.get({
                otp: { transport: ['sms'] },
                signal: ac.signal
            }).then(otp => {
                setOtp(otp.code);
            }).catch(err => {
               // console.log(err, "Error web otp");
            });
        }
    }

    // to verify the OTP 
    function verifyOTP() {
        if (!otp.length) {
            setOTPErrors(OpenAccountLanguageContent.getContent(language ? language : 'en', 'otprequired'));
        } else {
            showLoader('verifyLoader');
            let request = {
                otp: otp,
                session_id: otpID.current
            };

            openAccountService.verifyOTP(request, type2).then((res) => {
                hideLoader('verifyLoader');
                if (res && res.status === 200 && res.data && res.data.Body) {
                    utils.pushDataLayerEvent({
                        'event': 'otp_procced',
                        'page_path': window.location.pathname,
                        'page_url': window.location.href,
                        'lead_source':'choiceindia',
                        'userId': utils.generateSHA256Hash(mobileNumber.toString()),
                        'platform': window.innerWidth < 767 ? 'mobileweb' : 'desktopweb'
                    })
                    utils.pushDataLayerEvent({
                        'event': 'open_account_lead_submit',
                        'page_path': window.location.pathname,
                        'page_url': window.location.href,
                        'phone': utils.generateSHA256Hash(mobileNumber.toString()),
                        'lead_source':'choiceindia',
                        'userId': utils.generateSHA256Hash(mobileNumber.toString()),
                        'platform': window.innerWidth < 767 ? 'mobileweb' : 'desktopweb'
                    })
                   //  console.log('HANDLER',res);
                    // setOtpparam("Otp-success")
                   
                    // if (res.data.Body.isOnboardFlag === 'Y') {
                    //Your Onboarding has been completed
                    // } else if (res.data.Body.isOnboardFlag === 'C') {
                    // IsBackOffice should be Y, isCredentialGenerated = 1 , uccStatus='success',
                    // then redirect to Jiffy Login .
                    // else
                    // should display the popup with message provided in response  "Account Opening Application in Review. Please Contact Customer Support"
                    // } else {
                    if (res && res.data && res.data.Body && res.data.Body.url) {
                        // console.log('inside call',res.data.Message);
                        // setShowLead(prevState => {
                        //     return {...prevState, showModal: true, redirectLink: res.data.Body.url, closeOTP: onClose}
                        // });

                        let result = res.data.Body.url.match("respond-issue");
                        if(result && result.length && result[0] === 'respond-issue'){
                            openInfoPopup(res.data.Message);
                            onClose(res.data.Body.url);
                        }else{
                           // console.log('Else onboard');
                            onClose(res.data.Body.url,res.data.Message? res.data.Message:'',res.data.Body.isOnboardFlag? res.data.Body.isOnboardFlag:"");
                        }
                        
                        // console.log('inside call',showlead.showModal);
                        // window.location.href = res.data.Body.url;
                    } else {
                        if (res && res.data && res.data.Message) {
                            openInfoPopup(res.data.Message);
                            onClose();
                        } else {
                            // setShowLead(prevState => {
                            //     return { ...prevState, showModal: true, redirectLink: 'https://jiffy.choiceindia.com/auth/login'}
                            // });
                            if (type2 == 'MF') {
                                onClose("https://investica.com/auth/sign-in")
                            } else {
                                onClose("https://finx.choiceindia.com/auth/login");
                            }



                            // (type2=='MF' )? 
                            // window.location.href ="https://investica.com/auth/sign-in" 
                            //:
                            //window.location.href = "https://jiffy.choiceindia.com/auth/login";
                        }
                    }
                    // }
                } else {
                    setOTPErrors((res && res.data && res.data.Body && res.data.Body.Message) ? res.data.Body.Message : OpenAccountLanguageContent.getContent(language ? language : 'en', 'otperror'));
                }
            }).catch((error) => {
                hideLoader('verifyLoader');
                if (error && error.response && error.response.data && error.response.data.Message) {
                    setOTPErrors(error.response.data.Message);
                } else {
                    setOTPErrors(OpenAccountLanguageContent.getContent(language ? language : 'en', 'otperror'));
                }
            });
        }
    }

    //resend OTP ON SMS
    function resendOTP() {
       // console.log("check",otpID)
        if (!loaders.resendOTPLoader && !loaders.OTPOnCallLoader) {
            showLoader('resendOTPLoader');
            setOtp('');
            setOTPErrors('');
            
           
            let request = {

                "mobile_no": mobileNumber,
                "old_session_id": otpID.current,
                "request_source": "CHOICEINDIA",
                // "captcha":"f9A0RMq3vF7fPYkEiqZToKUKdneNzA2YWfMeKSHhkm"
            }
            let requestMF = {
                
                "old_session_id": otpID.current,
                // "captcha":"f9A0RMq3vF7fPYkEiqZToKUKdneNzA2YWfMeKSHhkm"
            }

            openAccountService.resendOTPAgain((type2=='MF' )? requestMF:request,type2).then((res) => {
                hideLoader('resendOTPLoader');
                setCount(30);
                if (res && res.status === 200 && res.data && res.data.Body) {
                    otpID.current = res.data.Body.session_id;
                    handleOTPResendSuccessToaster('otp');
                } else {
                    setOTPErrors((res.data.Body.Message) ? res.data.Body.Message : 'Something went wrong, please try again later!');
                }
            }).catch((error) => {
                hideLoader('resendOTPLoader');
                setCount(30);
                if (error && error.response && error.response.data && error.response.data.Message) {
                    setOTPErrors(error.response.data.Message);
                } else {
                    setOTPErrors("Something went wrong, please try again later!");
                }
            });
        }
    }

    //to get OTP ON CALL
    function getOTPOnCall() {
        if (!loaders.resendOTPLoader && !loaders.OTPOnCallLoader) {
            showLoader('OTPOnCallLoader');
            setOtp('');
            setOTPErrors('');
            let request = {
                "mobile_no": mobileNumber,
                "request_source": ((type2=='MF' )? "MF" : "CHOICEINDIA"),
                "session_id": otpID.current,
                // "captcha":"f9A0RMq3vF7fPYkEiqZToKUKdneNzA2YWfMeKSHhkm"
            }
            openAccountService.OTPOnCall(request,type2).then((res) => {
                hideLoader('OTPOnCallLoader');
                // setCount(30);
                if (res && res.status === 200 && res.data && res.data.Body) {
                    setCount(30);
                    otpID.current = res.data.Body.session_id;
                    handleOTPResendSuccessToaster('call');
                } else {
                    setOTPErrors((res.data.Body.Message) ? res.data.Body.Message : 'Something went wrong, please try again later!');
                }
            }).catch((error) => {
                hideLoader('OTPOnCallLoader');
                // setCount(30);
                if (error && error.response && error.response.data && error.response.data.Message) {
                    setOTPErrors(error.response.data.Message);
                } else {
                    setOTPErrors("Something went wrong, please try again later!");
                }
            });
        }
    }


    function handleOTPResendSuccessToaster(type){
        setOTPSendSuccessToaster({[type]: true});
        setTimeout(()=>{
            setOTPSendSuccessToaster({[type]: false});
        },5000)
    }

    

    function setotpdata(){
        
    }

    // useEffect(() => {
    //     setSearchParams((params) => {
    //         params.set('form', "Otp-success");
    //         return params;
    //       }); 
    // }, [otpparam]);
    
    return (
        <>
            {/* <div id="opt-box-id">
                <div className="modal-body opt-body">
                    A OTP has been sent to {'******' + mobileNumber.slice(6, 10)}
                    <Form.Control className="w-50 form-control form-control-lg mx-auto text-center" type="text" id="openAccountOTP" placeholder="Enter OTP" autoComplete="one-time-code" maxLength="6" isInvalid={OTPErrors} value={otp} onChange={(e) => handleOTP(e)} />
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
            </div> */}


            {/* <div className="exit-intent-sleekbox-overlay sleekbox-popup-active ">
                <div className="exit-intent-sleekbox-popup">
                    <div className="popup-sub-row">
                        <div className="close">
                            <a href="javascript:void(0)" onClick={onClose} className="closebtn" >&times;</a>
                        </div>
                        <div className="popup-sub-right">

                            <div>
                                <img src={OTPimage} />

                                <p className="heading">{OpenAccountLanguageContent.getContent(language ? language : 'en', 'otpmodalheader')}</p>
                                <p className="subheading">{OpenAccountLanguageContent.getContent(language ? language : 'en', 'otplbl')} {'******' + mobileNumber.slice(6, 10)}</p>
                                {
                                    count ?
                                        <p className="time">{OpenAccountLanguageContent.getContent(language ? language : 'en', 'otptime')}:<span > {count} {OpenAccountLanguageContent.getContent(language ? language : 'en', 'otpsec')}</span></p> : ''
                                }

                            </div>
                            <div>


                                <Form.Control className="w-50 form-control form-control-lg mx-auto text-center digit-otp" type="text" id="openAccountOTP" placeholder="Enter OTP" autoComplete="one-time-code" maxLength="6" isInvalid={OTPErrors} value={otp} onChange={(e) => handleOTP(e)} />
                                {
                                    OTPErrors ? <Form.Control.Feedback type="invalid">{OTPErrors}</Form.Control.Feedback> : ''
                                }
                            </div>

                            <div className="btnwrap">
                                <button className="btn-bg" disabled={loaders.verifyLoader} onClick={verifyOTP}>{loaders.verifyLoader ? <div className="dotLoaderB"></div> : OpenAccountLanguageContent.getContent(language ? language : 'en', 'otpverifybtn')}</button>
                            </div>
                            <div>
                                {
                                    !count ?
                                        <div>
                                            <button className="resend" onClick={resendOTP}>{loaders.resendOTPLoader ? <Spinner className="marginLoader" animation="border" role="status"><span className="visually-hidden">Loading123...</span></Spinner>
                                                // <div className="dotLoaderB colorB marginLoader"></div>
                                                : OpenAccountLanguageContent.getContent(language ? language : 'en', 'otpresend')}</button>
                                            <span className="ortext">{OpenAccountLanguageContent.getContent(language ? language : 'en', 'otportext')}</span>
                                            <button className="resend" onClick={getOTPOnCall}>{loaders.OTPOnCallLoader ? <Spinner className="marginLoader" animation="border" role="status"><span className="visually-hidden">Loading456...</span></Spinner>
                                                // <div className="dotLoaderB colorB marginLoader"></div>
                                                : OpenAccountLanguageContent.getContent(language ? language : 'en', 'otponcall')}</button></div> : ''
                                }
                            </div>
                            <div className="mt-2">
                                {
                                    (OTPSendSuccessToaster.otp || OTPSendSuccessToaster.call) ?
                                        <Alert key='success' variant='success' onClose={() => setOTPSendSuccessToaster({})} dismissible>
                                            {
                                                (OTPSendSuccessToaster.call) ? OpenAccountLanguageContent.getContent(language ? language : 'en', 'otpresendsuccess1') : OpenAccountLanguageContent.getContent(language ? language : 'en', 'otpresendsuccess2')
                                            }
                                        </Alert> : ''
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}


            {/* <Modal show={show} className="bt-strap-mdl otp-main-modal " onHide={onClose} backdrop='static' keyboard={false}>

                <Modal.Header className="border-0" closeButton>
                </Modal.Header>
                <Modal.Body className="border-0"> */}
                    {/* <div className="exit-intent-sleekbox-overlay sleekbox-popup-active"> */}
                        <div className="exit-intent-sleekbox-popup">
                            <div className="popup-sub-row">
                                {/* <div className="close">
                                    <a href="javascript:void(0)" onClick={onClose} className="closebtn" >&times;</a>
                                </div> */}
                    <div className="popup-sub-right">
                        {window.location.pathname.includes("blog") &&  <div className="otp-ver-sec" ref={otpVerify}>
                                <div className="otp-circle">
                                    <img src={enterOtp} className="img-fluid" height={52} width={52}/>

                                </div>
                                </div>}
                               
                                <p className="heading">{OpenAccountLanguageContent.getContent(language ? language : 'en', 'otpmodalheader')}</p>
                                    <div className="otpform-new" >
                                    {/* <div className="otpform-new  fade-in" > */}
                                        {/* <img src={OTPimage} /> */}

                                       <div className="d-flex otp-sent">
                                        <p className="subheading">{OpenAccountLanguageContent.getContent(language ? language : 'en', 'otplblnew')} {mobileNumber}</p>
                                        <button className="changenumbtn" onClick={handleButtonClick}>(Change)</button>
                                        </div>
                                  
                                    <div className="otp-mdl-input-chk">


                                        <Form.Control className="w-50 form-control form-control-lg mx-auto text-center digit-otp" type="tel" pattern="\d*"  id="openAccountOTP" placeholder="* * * * * *" autoComplete="off" maxLength="6"  isInvalid={OTPErrors} value={otp} onChange={(e) => handleOTP(e)} />

                                        {/* <div class="userInput w-50 form-control form-control-lg mx-auto text-center digit-otp"  isInvalid={OTPErrors} value={otp} onChange={(e) => handleOTP(e)}>
                                            <input type="text" id='ist' maxlength="1" placeholder="*" onkeyup="clickEvent(this,'sec')"/>
                                            <input type="text" id="sec" maxlength="1" placeholder="*" onkeyup="clickEvent(this,'third')"/>
                                            <input type="text" id="third" maxlength="1" placeholder="*" onkeyup="clickEvent(this,'fourth')"/>
                                            <input type="text" id="fourth" maxlength="1" placeholder="*" onkeyup="clickEvent(this,'fifth')"/>
                                            <input type="text" id="fifth" maxlength="1" placeholder="*" onkeyup="clickEvent(this,'sixth')"/>
                                            <input type="text" id="six" maxlength="1" placeholder="*"/>
                                        </div> */}

                                        {
                                            OTPErrors ? <Form.Control.Feedback type="invalid">{OTPErrors}</Form.Control.Feedback> : ''
                                        }
                                        {/* <div className="time-otp"> */}
                                        {
                                            count ?
                                                <p className="time">{OpenAccountLanguageContent.getContent(language ? language : 'en', 'otptime')}:<span > {count} {OpenAccountLanguageContent.getContent(language ? language : 'en', 'otpsec')}</span></p> : ''
                                        }
                                        {/* </div> */}
                                    </div>
 <div className="otp-pd">
                                        {
                                            !count ?
                                                <div className="d-flex align-items-center justify-content-between pt-3">
                                                    <button className="resend" onClick={resendOTP}>
                                                        {/* {loaders.resendOTPLoader ? <Spinner className="marginLoader" animation="border" role="status"><span className="visually-hidden">Loading123...</span></Spinner>
                                                        : OpenAccountLanguageContent.getContent(language ? language : 'en', 'otpresend')} */}
                                                        Get OTP <span className="bluetxt">SMS</span>
                                                        </button>

                                                    <span className="ortext">{OpenAccountLanguageContent.getContent(language ? language : 'en', 'otportext')}</span>

                                                    
                                                    <button className="resend" onClick={getOTPOnCall}>
                                                        {/* {loaders.OTPOnCallLoader ? <Spinner className="marginLoader" animation="border" role="status"><span className="visually-hidden">Loading456...</span></Spinner>
                                                        
                                                        : OpenAccountLanguageContent.getContent(language ? language : 'en', 'otponcall')} */}
                                                        Get OTP <span className="bluetxt">Call</span>
                                                        </button></div> : ''
                                        }
                                    </div>
                                    <div className="btnwrap">
                                        <button className={"btn-bg btn-bg-dark"}  id={(outCome == 'A')? 'otp-proceed-test' : 'otp-verify-test'} disabled={loaders.verifyLoader} onClick={verifyOTP}>{loaders.verifyLoader ? <div className="dotLoaderB"></div> : OpenAccountLanguageContent.getContent(language ? language : 'en', (outCome == 'A')? 'otpverifybtnNew' : 'otpverifybtn')}</button>
                                    </div>
                                    </div>
                                   
                                    <div className="mt-2 ">
                                        {
                                            (OTPSendSuccessToaster.otp || OTPSendSuccessToaster.call) ?
                                                <Alert className="alertmsg" key='success' variant='success' onClose={() => setOTPSendSuccessToaster({})} dismissible>
                                                    {
                                                        (OTPSendSuccessToaster.call) ? OpenAccountLanguageContent.getContent(language ? language : 'en', 'otpresendsuccess1') : OpenAccountLanguageContent.getContent(language ? language : 'en', 'otpresendsuccess2')
                                                    }
                                                </Alert> : ''
                                        }
                                    </div>
                                </div>
                    <span className="close-btn-mdl" ref={closeButton} onClick={() => {
                        setIsActive(false);
                        openAccount.current.style.zIndex = 9999999999;
                        setBlogPopUpForm("");
                        blogPop(false);
                                }}>&times;</span>
                            </div>
                        </div>
                    {/* </div> */}
                {/* </Modal.Body>
            </Modal> */}


           {/* {
            showlead.showModal? <Thankyoupopup isShow={showlead}/>:''
           } */}


        </>
    );
}

export default OpenAccountOTPModalNew;
