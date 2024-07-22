import React, { useEffect, useState, useRef, useCallback } from "react";
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import openAccountService from '../../Services/openAccountService';
import enterOtp from '../../assets/images/enterotp.svg';
import "../Common-features/demat-form.scss";
import OpenAccountLanguageContent from '../../Services/OpenAccountLanguageContent';
import { useSearchParams } from "react-router-dom";
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
function OpenAccountOTPModalNew({mobileNumber, otpSessionID, onClose, language, openInfoPopup, showPopup,onButtonClick,setIsActive,openAccount,setBlogPopUpForm,blogPop,isPopUp, updateType }) {
    const [loaders, setLoaders] = useState({});
    const [count, setCount] = useState(0);
    const [otp, setOtp] = useState('');
    const [OTPErrors, setOTPErrors] = useState('');
    const [OTPSendSuccessToaster, setOTPSendSuccessToaster] = useState({});
    var otpID = useRef(otpSessionID);
    const type2= "JF" ; //(window.location.pathname.indexOf('mutual-funds-investment') > -1) ? 'MF':"JF";
    const [show,setShow] = useState(true);
    const [searchParams, setSearchParams] = useSearchParams();
    const [outCome,setOutCome]= useState();
    const { executeRecaptcha } = useGoogleReCaptcha();
    const [captchaToken, setCaptchaToken] = useState('');
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
   
    function handleClose(){
      //  console.log('Handleclose');
        setShow(() => false);
    }
 
    const [showlead, setShowLead] = useState({ showModal: false, page: 'no-addlead' });
  
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

    function verifyOTP() {
        if (!otp.length) {
            setOTPErrors(OpenAccountLanguageContent.getContent(language ? language : 'en', 'otprequired'));
        } else {
            showLoader('verifyLoader');
            let request = {
                otp: otp,
                session_id: otpSessionID
            };

            openAccountService.verifyOTPService(mobileNumber,request,captchaToken,hideLoader,onClose,openInfoPopup,setOTPErrors)
        }
    }
    
    const handleReCaptchaVerify = useCallback(async () => {
        if (!executeRecaptcha) {
            return;
        }
        showLoader('verifyLoader');
        const token = await executeRecaptcha('verifyOTP');
        // Do whatever you want with the token
        // sendOTP();
        if (token) {
            setCaptchaToken(token);
            // alert("Token : "+token);
        }
        hideLoader('verifyLoader');
    }, [executeRecaptcha]);

    useEffect(() => {
        if (captchaToken) {
            verifyOTP();
        }
    }, [captchaToken]);

    
    
    

  


    function handleOTPResendSuccessToaster(type){
        setOTPSendSuccessToaster({[type]: true});
        setTimeout(()=>{
            setOTPSendSuccessToaster({[type]: false});
        },5000)
    }

    

    const handleUpdateType = () => {
        updateType('resend');
        setCount(30);
        handleOTPResendSuccessToaster('otp');
    };
    const handleUpdateTypeCall = () => {
        updateType('otp-on-call');
        setCount(30);
        handleOTPResendSuccessToaster('call');
    };
    return (
        <>
            
                        <div className="exit-intent-sleekbox-popup">
                            <div className="popup-sub-row">
                               
                    <div className="popup-sub-right">
                        {window.location.pathname.includes("blog") ? <div className="otp-ver-sec" ref={otpVerify}>
                                <div className="otp-circle">
                                    <img src={enterOtp} className="img-fluid" height={52} width={52}/>

                                </div>
                                </div>:
                                window.location.pathname.indexOf('ipo')===1 &&
                                <div className="otp-ver-sec" ref={otpVerify}>
                                <div className="otp-circle">
                                    <img src={enterOtp} className="img-fluid" height={52} width={52}/>

                                </div>
                                </div>
                                }
                               
                                <p className="heading">{OpenAccountLanguageContent.getContent(language ? language : 'en', 'otpmodalheader')}</p>
                                    <div className="otpform-new" >
                                    
                                       <div className="d-flex otp-sent">
                                        <p className="subheading">{OpenAccountLanguageContent.getContent(language ? language : 'en', 'otplblnew')} {mobileNumber}</p>
                                        <button className="changenumbtn" onClick={handleButtonClick}>(Change)</button>
                                        </div>
                                  
                                    <div className="otp-mdl-input-chk">


                                        <Form.Control className="w-50 form-control form-control-lg mx-auto text-center digit-otp" type="tel" pattern="\d*"  id="openAccountOTP" placeholder="* * * * * *" autoComplete="off" maxLength="6"  isInvalid={OTPErrors} value={otp} onChange={(e) => handleOTP(e)} />

                                        

                                        {
                                            OTPErrors ? <Form.Control.Feedback type="invalid">{OTPErrors}</Form.Control.Feedback> : ''
                                        }
                                       
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
                                                    <button className="resend" onClick={handleUpdateType}>
                                                        
                                                        Get OTP <span className="bluetxt">SMS</span>
                                                        </button>

                                                    <span className="ortext">{OpenAccountLanguageContent.getContent(language ? language : 'en', 'otportext')}</span>

                                                    
                                                    <button className="resend" onClick={handleUpdateTypeCall}>
                                                        
                                                        Get OTP <span className="bluetxt">Call</span>
                                                        </button></div> : ''
                                        }
                                    </div>
                                    <div className="btnwrap">
                                        <button className={"btn-bg btn-bg-dark"}  id={(outCome == 'A')? 'otp-proceed-test' : 'otp-verify-test'} disabled={loaders.verifyLoader} onClick={handleReCaptchaVerify}>{loaders.verifyLoader ? <div className="dotLoaderB"></div> : OpenAccountLanguageContent.getContent(language ? language : 'en', (outCome == 'A')? 'otpverifybtnNew' : 'otpverifybtn')}</button>
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
                                
                            </div>
                        </div>
                    



        </>
    );
}

export default OpenAccountOTPModalNew;
