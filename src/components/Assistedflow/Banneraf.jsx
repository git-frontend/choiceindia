import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import LazyLoader from "../Common-features/LazyLoader";
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import Redirect from '../../assets/images/aof/redirect-arrow.gif';
import ThumbUp from '../../assets/images/aof/thumb-up.png';
import {
    BrowserRouter as Router,
    Link,
    useParams,
    useLocation
} from "react-router-dom";

import AssistedFlowService from '../../Services/AssistedFlowService';
import Basket from '../Basket/Basket';
import loaderimg2 from '../../assets/vedio/loader2.mp4';
import utils from '../../Services/utils';
import Modal from 'react-bootstrap/Modal';
import noDataimg from '../../assets/images/no-data.webp';


function Banneraf() {

    const [showFirstButton, setShowFirstButton] = useState(true);
    const [showSecondDiv, setShowSecondDiv] = useState(false);
    const [showThirdDiv, setShowThirdDiv] = useState(false);
    const [name, setName] = useState('hideform');
    const getPosition = () => {
        const element = document.getElementById("showForm");
        if (element) {
            const rect = element.getBoundingClientRect();

            if (rect.top.toFixed() < 259) {
                setName('visibleform');
            } else {
                setName('hideform');
            }
        }
    };
    const [trigger, setTrigger] = useState(false);
    const [BasketData, setBasketData] = useState(null);

    /**variable for otp */
    const [OtpValue, setOtpValue] = useState(null);

    /**variable for mobile number */
    const [mobileNumber, setMobileNumber] = useState(null);

    /**variable for timer */
    const [count, setCount] = useState(0);

    /**variable for loaders */
    const [loaders, setLoaders] = useState({ "SendOtpLoader": false, "reSendOtpLoader": false });

    /**to get URL query params */
    const search = useLocation().search;

    /**to store errors */
    const [errors, setErrors] = useState(null);

    /**date time token */
    const [token, setToken] = useState(() => new Date().getTime());

    /**Reference Number */
    const [OrderMetaData, setOrderMetaData] = useState({ refNo: null, placeOrderMessage: null, serverDownMessage: null });

    /**to store payment link */
    const [paymentLink, setPaymentLink] = useState('end value has mixed support, consider using flex-end instead');

    /**to show popup */
    const [showPopUp, setShowPopUp] = useState('');

    /**to show toast message */
    const [showToast, setShowToast] = useState(false);
    
    /**Query Params Data */
    // const userDetails = { uniqueId: new URLSearchParams(search).get('order_unique_id').replaceAll(' ', '+').toString(), bucketId: new URLSearchParams(search).get('bucketId').replaceAll(' ', '+').toString(), clientId: new URLSearchParams(search).get('clientId').replaceAll(' ', '+').toString(), rmId: new URLSearchParams(search).get('rm_id') ? new URLSearchParams(search).get('rm_id').replaceAll(' ', '+').toString() : null, subjectId: new URLSearchParams(search).get('subid') ? new URLSearchParams(search).get('subid').replaceAll(' ', '+').toString() : null, };

    const details = new URLSearchParams(search).get('eid')? JSON.parse(JSON.stringify(utils.decryptText(new URLSearchParams(search).get('eid').replaceAll(' ', '+')))) : {};
    const [userDetails, setUserDetails] = useState(null);
    
    const [userStatus, setUserStatus] = useState(new URLSearchParams(search).get('status'));

    const [verifyLoader, setVerifyLoader] = useState(false);

    const [dataNotFound, setDataNotFound] = useState(false);

    /**to show client popup */
    useEffect(() => {
        // let status = new URLSearchParams(search).get('status');
        if(userStatus && userStatus == 'success'){
            setShowPopUp(() => 'ClientFlow')
        }
    },[])

    useEffect(() => {
        window.addEventListener('scroll', getPosition);
    }, []);

    /**Basket Listing API call */
    useEffect(() => {
            // console.log('status',userStatus)
            setTrigger(true)
            setUserDetails(() => JSON.parse(details))
            // console.log('userdetails', userDetails)
            if (trigger) {
                setDataNotFound(() =>  false);
                let payload = {
                    order_unique_id: userDetails.orderUniqueId ? userDetails.orderUniqueId : '',
                    client_id: userDetails.clientId ? userDetails.clientId : ''
                }
    
                AssistedFlowService.BasketDetails(payload).then((res) => {
                    // console.log('deetails', res);
                    if (res && res.data && res.data.Body && res.data.Body.data) {
                        setDataNotFound(() => false);
                        setBasketData(() => res.data.Body.data ? res.data.Body.data : {});
                    }else{
                        setDataNotFound(() => true);
                    }
    
                }).catch((error) => {
                    console.log(error);
                    setDataNotFound(() => true);
                })
    
                //Reference Number API Call
                AssistedFlowService.RefNo(utils.decryptText(userDetails.clientId).toString()).then((response) => {
                    if (response && response.data && response.data.Response) {
                        setOrderMetaData({ ...OrderMetaData, refNo: response.data.Response.RefNumber, placeOrderMessage: response.data.Response.PlaceOrderMessage, serverDownMessage: response.data.Response.ServerDownMessage });
                    }
                }).catch((error) => {
                    console.log(error);
                })
            }
    }, [trigger])

    /**to set the resend counter interval */
    useEffect(() => {
        const interval = setInterval(() => {
            if (!count) {
                return () => clearInterval(interval);
            }
            setCount(seconds => seconds - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [count]);

    /**Invest Now Button Click Function */
    function handleFirstButtonClick(isResend) {

        setOtpValue(() => null);
       
        if (isResend) {
            document.getElementById('partitioned').value= "";
            setLoaders({ ...loaders, reSendOtpLoader: false })
        } else {
            setLoaders({ ...loaders, SendOtpLoader: false })
        }

        sendOtp(isResend ? isResend : false);

    }

    /**function for send otp */
    function sendOtp(isResend) {

        setErrors(() => null);
        if (isResend) {
            setLoaders({ ...loaders, reSendOtpLoader: true })
        } else {
            setLoaders({ ...loaders, SendOtpLoader: true })
        }

        let payload = {
            "ClientID": userDetails.clientId ? utils.decryptText(userDetails.clientId) : '',
            "Source": "connect",
            "DeviceOs": "Web",
            "AppSignature": "",
            "BasketId": userDetails.bucketId ? utils.decryptText(userDetails.bucketId) : '',
            "SubID": "", // investica subscriptionId 
            "SubType": "Basket",
            "Token": token ? token : new Date().getTime(),
            "IsResend": isResend ? isResend : false,
            "SubjectId": userDetails.subId ? utils.decryptText(userDetails.subId) : '',
            "OrderUniqueID": userDetails.orderUniqueId ? utils.decryptText(userDetails.orderUniqueId) : ''
        }

        AssistedFlowService.SendOTP(payload).then((response) => {

            if (response && response.data && response.data.Response) {
                if (isResend) {
                    setLoaders({ ...loaders, reSendOtpLoader: false })
                } else {
                    setLoaders({ ...loaders, SendOtpLoader: false })
                }
                setShowFirstButton(false);
                setShowSecondDiv(true);
                setCount(30);
            }
            let mobileNo;
            let pattern = /[0-9]{8,10}/i;
            mobileNo = response.data.Response.toString();
            mobileNo = mobileNo.match(pattern)[0];
            setMobileNumber(() => mobileNo ? mobileNo : null)
        }).catch((error) => {

            if (isResend) {
                setLoaders({ ...loaders, reSendOtpLoader: false })
            } else {
                setLoaders({ ...loaders, SendOtpLoader: false })
            }
            setErrors(() => error.message ? error.message : 'Something Went Wrong')
        })
    }

    /**Verify OTP */
    const submitOTP = () => {

        setErrors(() => null);
        setVerifyLoader(() => true);
        let payload = {
            "ClientId": userDetails.clientId ? utils.decryptText(userDetails.clientId) : '',
            "OTP":  OtpValue ? OtpValue : '',
            "Source": "connect",
            "DeviceOs": "Web",
            "BasketId": userDetails.bucketId ? utils.decryptText(userDetails.bucketId) : '',
            "SubID": "",
            "SubType": "Basket",
            "Token":  token ? token : new Date().getTime(),
            "SubjectId": userDetails.subId ? utils.decryptText(userDetails.subId) : '',
            "OrderUniqueID": userDetails.orderUniqueId ? utils.decryptText(userDetails.orderUniqueId) : ''
        }

        AssistedFlowService.VerifyOTP(payload).then((response) => {
            // console.log('Verifyresponse', response);
            // setVerifyLoader(() => false);
            if (response && response.data && response.data.Response) {

                if (BasketData.BucketType && BasketData.BucketType != 'SIP') {

                    BasketData.list_fund_data.forEach((element, index) => {

                        if (index == BasketData.list_fund_data.length - 1) {
                            placeLumpSumOrder(element, true);
                        } else {
                            placeLumpSumOrder(element, false);
                        }

                    });
                } else {
                    // console.log('data',BasketData.list_fund_data)
                    BasketData.list_fund_data.forEach((element, index) => {

                        if (index == BasketData.list_fund_data.length - 1) {
                            placeSIPOrder(element, true);
                        } else {
                            placeSIPOrder(element, false);
                        }

                    })
                }

            }else{
                setErrors(() => response.data.Reason? response.data.Reason: 'Something Went Wrong');
            }
        }).catch((error) => {
            setVerifyLoader(() => false);
            setErrors(() => error.message ? error.message : 'Something Went Wrong')
            console.log(error)
        })


    };

    /**to place LumpSumOrder */
    function placeLumpSumOrder(fundData, isLast) {

        // console.log('funddata', fundData);

        let payload = {
            "TransCode": "NEW",
            "TransNo": "",
            "OrderId": "",
            "Client":  userDetails.clientId ? utils.decryptText(userDetails.clientId) : '',
            "SchemeCD": fundData.BSESchemeCode ? fundData.BSESchemeCode : '',
            "SchemeName": "",
            "BS": "P",
            "BSType": "FRESH",
            "DPTxn": "P",
            "Amt": fundData.FundA ? ParseInt(fundData.FundA) : '',
            "Qty": "",
            "AllRedeem": "N",
            "FolioNo": "",
            "RefNo": OrderMetaData.refNo ? OrderMetaData.refNo : '',
            "Remarks": "Web",
            "OrderStatus": "",
            "Reason": "",
            "TimeStamp": "",
            "FinalStatus": "",
            "MinRedeem": "",
            "ActualOrderId": "",
            "SchemePlanCode": fundData.FundPlanCode ? fundData.FundPlanCode : '',
            "SubscriptionId": null,
            "SubscriptionType": "Basket",
            "Id": null,
            "Name": null,
            "OTP": OtpValue ? OtpValue : '',
            "Token": token ? token : new Date().getTime(),
            "RmBasketId": BasketData.bucket_id ? BasketData.bucket_id : '',
            "RmBasketName": BasketData.bucket_title ? BasketData.bucket_title : '',
            "SubjectId": userDetails.subId ? utils.decryptText(userDetails.subId)  : '',
            "Source": "connect",
            "OrderUniqueID": userDetails.orderUniqueId ? utils.decryptText(userDetails.orderUniqueId) : ''
        }

        AssistedFlowService.Lumpsum(payload).then((response) => {
            // console.log('Lumpsum', response)

            /**api call for generate payment link */
            if (response && response.data && response.data.Status != "Fail" && isLast) {
                generatePaymentLink();
            }else{
                setVerifyLoader(() => false);
                setErrors(() => response.data.Reason? response.data.Reason : '')
            }

        }).catch((error) => {
            console.log(error);
            setVerifyLoader(() => false);
            setErrors(() => error.message? error.message : '')
        })
    }

    /**to place XSIP order */
    function placeSIPOrder(fundData, isLast) {

        const today = new Date();
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1; // Months start at 0!
        let dd = today.getDate();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;

        const formattedToday = dd + '/' + mm + '/' + yyyy;

        let payload = {
            "TransCode": "NEW",
            "TransNo": "",
            "OrderId": "",
            "Client":  userDetails.clientId ? utils.decryptText(userDetails.clientId) : '',
            "SchemeCD": fundData.BSESchemeCode ? fundData.BSESchemeCode : '',
            "BS": "P",
            "BSType": "FRESH",
            "DPTxn": "P",
            "Amt": fundData.FundA ? parseInt(fundData.FundA): '',
            "Qty": "0",
            "AllRedeem": "N",
            "FolioNo": "",
            "RefNo": OrderMetaData.refNo ? OrderMetaData.refNo : '',
            "Remarks": "Web",
            "SchemeType": null,
            "AMCCode": "",
            "AMCName": "",
            "Brokerage": "",
            "Firstorderflag": "Y",
            "Freq": "MONTHLY",
            "IPAddress": "",
            "ISIPMandateId": "",
            "IsInflationAdjusted": "",
            "NoOfInstallments": 999,
            "RiskProfileID": "",
            "StartDate": formattedToday,
            "SubscriptionID": "",//"wb"+"M06894"+ token, //? token : new Date().getTime().toString(),//null,
            "SubscriptionType": "Basket",
            "ID": null,
            "Name": null,
            "TransMode": "P",
            "XSIPMandateId": BasketData.mandate_id ? BasketData.mandate_id : '',
            "Source": "connect",
            "OTP": OtpValue ? OtpValue : '',
            "Token": token ? token : new Date().getTime(),
            "RmBasketId": BasketData.bucket_id ? BasketData.bucket_id : '',
            "RmBasketName": BasketData.bucket_title ? BasketData.bucket_title : '',
            "SubjectId": userDetails.subId ? utils.decryptText(userDetails.subId) : '',
            "OrderUniqueID": userDetails.orderUniqueId ? utils.decryptText(userDetails.orderUniqueId) : ''

        }

        AssistedFlowService.XSIP(payload).then((response) => {

            // console.log('XSIP respone', response);

            /**api call for generate payment link */
            if (response && response.data && response.data.Status != "Fail" && isLast) {
                generatePaymentLink();
            }else{
                setVerifyLoader(() => false);
                setErrors(() => response.data.Reason? response.data.Reason : '')
            }
        }).catch((error) => {
            console.log(error);
            setVerifyLoader(() => false);
            setErrors(() => error.message? error.message : '')
        })

    }

    /**api call for generate payment link */
    function generatePaymentLink(){

        let payload = {
            "Client": "M06894", //userDetails.clientId ? utils.decryptText(userDetails.clientId).toString() : '',
            "IsDirect": "N",
            // "LogoutURL": (window.location.origin + window.location.pathname + '?' + 'status=success').toString()
            "LogoutURL": window.location.href + '&' + 'status=success'
        }

        AssistedFlowService.PaymentLink(payload).then((response) => {
            console.log('paymentlinkresponse', response);
            if(response && response.data && response.data.response){

                /**for RM if subId is present in URL */
                if(userDetails.subId){
                    setPaymentLink(() => response.data.response? response.data.response : '')
                    // setShowPopUp(() => 'RMFlow')
                }else{
                    setVerifyLoader(() => false);
                    setPaymentLink(() => response.data.response? response.data.response : '')
                    // setShowPopUp(() => 'ClientFlow')
                }
                
                UpdateOrderStatus();
            }
        }).catch((error) => {
            console.log(error);
            setVerifyLoader(() => false);
            setErrors(() => error.message? error.message : '')
        })
    }

    /**api call for order status update */
    function UpdateOrderStatus(){

        let payload = {
            "order_unique_id": userDetails.orderUniqueId ? userDetails.orderUniqueId : '',
            "client_id": 'kjsdkjas',//userDetails.clientId ? userDetails.clientId : '',
            "bucket_id": userDetails.bucketId ? userDetails.bucketId : '',
            "status": "payment_pending",
            "order_date": "",
            "payment_type": "Cash",
            "link": "",
            "action_by": ""
        }

        AssistedFlowService.OrderStatus(payload).then((response) => {
            console.log('order status reponse',response);

            if(response && response.data && response.data.StatusCode == 200){

                if(!userDetails.subId){
                    setShowSecondDiv(false);
                    setShowThirdDiv(true);
                }
                
                setTimeout(() => {
                    window.open(paymentLink,"_self")
                },3000)
            }else{
                setErrors(() => response.data.Message? response.data.Message : 'Something Went Wrong')
            }

        }).catch((error) => {
            console.log(error);
            setErrors(() => error.response.data.Message? error.response.data.Message : 'Something Went Wrong')
        })
    }

    /**handle otp change */
    function handleOTP(event) {
        setOtpValue(() => event.target.value ? event.target.value : null);
    }

    /**copy payment link to clipboard */
    function copyToClipboard(){
        const selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = paymentLink;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
        setShowToast(() => true);

        setTimeout(() => {
            setShowToast(() => false);
        },2000) 
    }

    return (
        <>
        <div>
            <section className='afsec'>
                <div className="container">
                    {
                        BasketData ? <div className="row">
                            <h1 className="title-secnd pt-5">
                                Investments for you!
                            </h1>
                            {/* <p className='subhead'>Funds for Children's Education</p> */}
                            <p className='subhead'>{BasketData.bucket_title ? BasketData.bucket_title : 'NA'}</p>
                            <p className="profile">{BasketData.bucket_type ? BasketData.bucket_type : 'NA'}</p>
                        </div> : ''
                    }
                    {
                        BasketData ?
                            <>
                                <div className="row">

                                    <div className="left-sec">
                                        <div className="table-sec">
                                            {
                                                BasketData.list_fund_data.map((item, index) => {

                                                    return (<>
                                                        <div className="rowwrap" key={index}>
                                                            <div className="name">
                                                                {item.FundName ? item.FundName : 'NA'}
                                                            </div>
                                                            <div className="textwrap">
                                                                <div className="numberwrap">
                                                                    <div className="number">{item.FundPer ? item.FundPer : 'NA'}</div>
                                                                    <p className="percent">3 yrs Returns %</p>
                                                                </div>
                                                                <div className="amount">
                                                                    <div className="rupee">₹ {item.FundA ? item.FundA : 'NA'}</div>
                                                                    <p className="text">Amount</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </>)
                                                })
                                            }
                                        </div>
                                    </div>
                                    <div className="right-sec">
                                        <div className="formwrapper">
                                            {showFirstButton && (
                                                <>
                                                    <div className='new-wrapp'>
                                                        <div className="infowrap">
                                                            <p>{BasketData.client_name ? BasketData.client_name : 'NA'}</p>
                                                            <p>{userDetails.clientId ? utils.decryptText(userDetails.clientId) : 'NA'}</p>
                                                        </div>
                                                        <div className="amtwrap">
                                                            <p className="investmentamount">Total Investment Amount</p>
                                                            <p className="amountrs">₹ {BasketData.bucket_min_amt ? BasketData.bucket_min_amt : 'NA'}</p>
                                                        </div>
                                                        <Button className="btn-bg btn-bg-dark investnowbtn" onClick={() => { loaders.SendOtpLoader? '':handleFirstButtonClick(false) }}
                                                        //  disabled={OrderMetaData.placeOrderMessage || OrderMetaData.serverDownMessage}
                                                        >
                                                            {loaders.SendOtpLoader ? <div className="loaderB mx-auto"></div> : <span>Invest Now</span>}
                                                        </Button>
                                                    </div>
                                                    {
                                                        showFirstButton && errors ?
                                                            <div className='text-center'>
                                                                <span className='text-danger'>{errors}</span>
                                                            </div> : ''
                                                    }

                                                </>
                                            )}
                                            {showSecondDiv && (
                                                <>
                                                    <div className="otpsec">
                                                        <div className="resdiv">
                                                            <div className="otpmodal">
                                                                <p className="otptext">Enter One Time<br /> Authentication Code</p>
                                                                <p className="subtext">Code sent to your registered mobile number +91  {mobileNumber}</p>
                                                            </div>

                                                            <div id="divOuter">
                                                                <div id="divInner">
                                                                    <input type="tel" formcontrolname="otpValue" id="partitioned" maxLength="6"
                                                                        onKeyPress={(event) => {
                                                                            if (!/[0-9]/.test(event.key)) {
                                                                                event.preventDefault();
                                                                            }
                                                                        }} onChange={(e) => handleOTP(e)} />
                                                                    <i className="bar"></i>
                                                                </div>

                                                            </div>

                                                            {
                                                                count ? <p className="warning mb-4">Resend OTP in {count} sec</p> : <p className="warning mb-4 resend-otp-mf" onClick={() => { handleFirstButtonClick(true) }}>Resend OTP</p>
                                                            }


                                                            {/* <div className="mb-4"><a href="#" className=" resend">Resend OTP</a></div> */}
                                                        </div>
                                                        <Button className={(((!OtpValue || OtpValue.toString().length < 6) ? 'btn-bg btn-bg-dark submitbtn disablebtn' : 'btn-bg btn-bg-dark submitbtn'))} onClick={ loaders.verifyLoader? '': submitOTP} disabled={!OtpValue || OtpValue.toString().length < 6}>
                                                            {loaders.verifyLoader ? <div className="loaderB mx-auto"></div> : <span>Submit</span>}
                                                        </Button>

                                                    </div>
                                                    {
                                                        errors && showSecondDiv ?
                                                            <div className='text-center'>
                                                                <span className='text-danger'>{errors}</span>
                                                            </div> : ''
                                                    }
                                                </>

                                            )}
                                            {showThirdDiv && (
                                                <>
                                                    <div className="redirectwrap">
                                                        <LazyLoader src={Redirect} alt={""} className={"img-fluid redirectimg"} width={"74"} height={"74"} />
                                                        <p className="redirecttext">Redirecting to Payment Page</p>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </div>

                                </div>
                                {
                                    OrderMetaData.placeOrderMessage || OrderMetaData.serverDownMessage ?
                                    <span className='text-center order-message'>{OrderMetaData.placeOrderMessage ? OrderMetaData.placeOrderMessage : OrderMetaData.serverDownMessage? OrderMetaData.serverDownMessage : '' }</span>: ''
                                }
                            </>
                            :
                            <>
                                    {
                                        !dataNotFound ?
                                            <div className="row text-center">
                                                <div className='text-center'>
                                                    <video src={loaderimg2} autoPlay loop muted className='img-fluid d-block mx-auto' height={250} width={250} />
                                                </div>
                                            </div> : ''
                                    }


                                    {
                                        dataNotFound ?
                                            <div className="text-center">
                                                <img src={noDataimg} className="img-fluid" alt='No Data Found' height={250} width={250} />
                                            </div> : ''
                                    }
              
                            </>


                            
                    }
{/* 
                    {
                        showPopUp == 'RMFlow' ?
                            <div className="order-register">

                                <p className="sucesstext">Order Registered!</p>
                                <p className="subtext">Copy &amp; Share link with client to complete the payment.</p>
                                {
                                    showToast?
                                    <span>Link Copied</span> : ''
                                }
                                <div className="rightbtn">
                                    <Button className="btn-bg btn-bg-dark copybtn" onClick={copyToClipboard} ><span>Copy Link</span> </Button>
                                </div>
                            </div> : ''
                    } */}

                        <Modal show={showPopUp == 'RMFlow'} onHide={false}
                            size="md"
                            aria-labelledby="contained-modal-title-vcenter"
                            backdrop='static'
                            keyboard={false}
                            centered
                        >

                            <Modal.Body className='text-center'>
                                <div className="order-register">

                                    <p className="sucesstext">Order Registered!</p>
                                    <p className="subtext">Copy &amp; Share link with client to complete the payment.</p>
                                    {/* {
                                        showToast ?
                                            <span>Link Copied</span> : ''
                                    } */}
                                    <div className="rightbtn">
                                        <Button className="btn-bg btn-bg-dark copybtn" onClick={copyToClipboard} >
                                            {
                                                showToast ?
                                                <span>Link Copied</span> : <span>Copy Link</span> 
                                            }
                                             </Button>
                                    </div>
                                </div>
                            </Modal.Body>

                        </Modal>

                    {/* {
                        userStatus && userStatus == 'success' ?
                        <div className="successful">
                            <LazyLoader src={ThumbUp} alt={""} className={"img-fluid redirectimg"} width={"74"} height={"74"} />
                            <p className="sucesstext">Your order is successful!</p>
                            <div className="rightbtn">
                                <Link to="/" className="btn-bg btn-bg-dark awesomebtn" onClick=""><span>Awesome!</span> </Link>
                            </div>
                        </div> : '' 
                    } */}
                        
                        <Modal show={showPopUp == 'ClientFlow'} onHide={false}
                            size="md"
                            aria-labelledby="contained-modal-title-vcenter"
                            backdrop='static'
                            keyboard={false}
                            centered
                        >

                            <Modal.Body className='text-center'>
                            <LazyLoader src={ThumbUp} alt={""} className={"img-fluid redirectimg"} width={"74"} height={"74"} />
                            <p className="sucesstext">Your order is successful!</p>
                                <div className="rightbtn">
                                    <Link to="/" className="btn-bg btn-bg-dark awesomebtn" onClick=""><span>Awesome!</span> </Link>
                                </div>
                            </Modal.Body>

                        </Modal>

                </div>

            </section>

        </div>
        </>
        

    );
}

export default Banneraf;
