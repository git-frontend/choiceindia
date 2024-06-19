import { useState, useEffect, useCallback, useRef } from "react";
import Button from "react-bootstrap/Button";
import LazyLoader from "../Common-features/LazyLoader";
import Redirect from "../../assets/images/aof/redirect-arrow.gif";
import ThumbUp from "../../assets/images/aof/thumb-up.gif";
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  BrowserRouter as Router,
  Link,
  useLocation,
} from "react-router-dom";
import Moment from "react-moment";
import moment from 'moment';
import AssistedFlowService from "../../Services/AssistedFlowService";
import Basket from "../Basket/Basket";
import loaderimg2 from "../../assets/vedio/loader2.mp4";
import utils from "../../Services/utils";
import Modal from "react-bootstrap/Modal";
import noDataimg from "../../assets/images/no-data.webp";
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { useNavigate } from "react-router-dom";
import { useTransition } from "react";
import { filter } from "rxjs";
import OtpInput from "../Common-features/OtpInput";

function Banneraf() {
  const [showFirstButton, setShowFirstButton] = useState(true);
  const [showSecondDiv, setShowSecondDiv] = useState(false);
  const [showThirdDiv, setShowThirdDiv] = useState(false);
  const [name, setName] = useState("hideform");
  const navigate = useNavigate();
  const getPosition = () => {
    const element = document.getElementById("showForm");
    if (element) {
      const rect = element.getBoundingClientRect();

      if (rect.top.toFixed() < 259) {
        setName("visibleform");
      } else {
        setName("hideform");
      }
    }
  };
  const [trigger, setTrigger] = useState(false);
  const [BasketData, setBasketData] = useState(null);

  /**variable for otp */
  const [OtpValue, setOtpValue] = useState("");

  /**variable for mobile number */
  const [mobileNumber, setMobileNumber] = useState(null);

  const [email, setEmail] = useState(null);

  /**variable for timer */
  const [count, setCount] = useState(0);

  const [orderCancelledPopup, setOrderCancelledPopup] = useState(false);

  /**variable for loaders */
  const [loaders, setLoaders] = useState({
    SendOtpLoader: false,
    reSendOtpLoader: false,
    verifyLoader: false,
    DirectFlowLoader: false
  });

  /**to get URL query params */
  const search = useLocation().search;

  /**Order Scheme Details*/
  const [schemeDetails, setSchemeDetails] = useState({})

  /**failed order details */
  const [confirmedOrders, setConfirmedOrders] = useState({});

  /**show cancel order*/
  const [showCancelOrder, setShowCancelOrder] = useState(() => false);

  /**to store errors */
  const [errors, setErrors] = useState(null);

  /**date time token */
  const [token, setToken] = useState(() => new Date().getTime());

  /**Reference Number */
  const [OrderMetaData, setOrderMetaData] = useState({
    refNo: null,
    placeOrderMessage: null,
    serverDownMessage: null,
  });

  /**to store payment link */
  const [paymentLink, setPaymentLink] = useState();

  /**to show popup */
  const [showPopUp, setShowPopUp] = useState("");

  /**to show toast message */
  const [showToast, setShowToast] = useState(false);

  const [isModalClose, setisModalClose] = useState(false);
  const [captchaToken, setCaptchaToken] = useState('');

  const { executeRecaptcha } = useGoogleReCaptcha();

  let retryPaymentCounter = 0;
  const [isResendCheck, setisResendCheck] = useState(false);

  /**Query Params Data */
  // const userDetails = { uniqueId: new URLSearchParams(search).get('order_unique_id').replaceAll(' ', '+').toString(), bucketId: new URLSearchParams(search).get('bucketId').replaceAll(' ', '+').toString(), clientId: new URLSearchParams(search).get('clientId').replaceAll(' ', '+').toString(), rmId: new URLSearchParams(search).get('rm_id') ? new URLSearchParams(search).get('rm_id').replaceAll(' ', '+').toString() : null, subjectId: new URLSearchParams(search).get('subid') ? new URLSearchParams(search).get('subid').replaceAll(' ', '+').toString() : null, };
  // "mavamqy25Fjjpt2au4MwtZJlk8LfNSC3GZvT9OTPMeUzCLGX5AOV8KUll/7yQy6A&exp=MTY5NTA0NTg0MA=="
  // const detail2 = new URLSearchParams(search).get("oid");
  // const details = new URLSearchParams(search).get("oid")
  //   ? JSON.parse(
  //     JSON.stringify(
  //       utils.decryptText(
  //         new URLSearchParams(search).get("eid").replaceAll(" ", "+")
  //       )
  //     )
  //   )
  //   : {};

  // const details = new URLSearchParams(search).get("oid")? setUrlOid(URLSearchParams(search).get("oid")): {};
  const [userDetails, setUserDetails] = useState(null);

  /**to check callback status from bse */
  const [userStatus, setUserStatus] = useState(
    new URLSearchParams(search).get("status")
  );
  const [showExpired, setShowExpired] = useState(false);

  const uniID = new URLSearchParams(search).get("oid") ? new URLSearchParams(search).get("oid").replaceAll(" ", "+") : "";
  const subId = new URLSearchParams(search).get("sid") ? new URLSearchParams(search).get("sid").replaceAll(" ", "+") : "";
  const expId = new URLSearchParams(search).get("exp") ? window.atob(new URLSearchParams(search).get("exp").replaceAll(" ", "+")) : "";

  useEffect(() => {
    /**variable for link expired */
    let currentDate = new Date();
    let expiryDate = new Date(expId * 1000);

    if( (Math.floor(currentDate /8.64e7)) <= (Math.floor(expiryDate /8.64e7))){
        setShowExpired(false)
      } else {
        setShowExpired(true)
      }
  }, [expId])

  let client_id;
  const captchaCount = useRef(0);

  // Create an event handler so you can call the verification on button click event or form submit
  const handleReCaptchaVerify = useCallback(async () => {

    if (!executeRecaptcha) {
      return;
    }
    const token = await executeRecaptcha('sendOtp');
    // Do whatever you want with the token
    if (token) {
      captchaCount.current++;
      setCaptchaToken(token);
    }
    // hideLoader('sendOTPLoader');
  }, [executeRecaptcha]);

  useEffect(() => {
    if (captchaToken && captchaCount.current > 1) {
      sendOtp();
    }
  }, [captchaToken])

  const [dataNotFound, setDataNotFound] = useState(false);

  let increment;

  let isLast = 0;

  /**to calculate months */
  const [nextSipDate, setNextSipDate] = useState([]);
  let monthFactor = 1;
  const [orderDates, setOrderDates] = useState([]);

  /**to show client popup */
  useEffect(() => {
    if (userStatus && userStatus == "success") {
      setShowPopUp(() => "ClientFlow");
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", getPosition);
  }, []);

  /**Arrays for messages */
  const [messg, setShowMessg] = useState()

  /**to show status popup */
  const [showStatus, setshowStatus] = useState(false);

  /**show direct flow errors */
  const [directErrors, setDirectErrors] = useState('');

  const [sessionId, setSessionId] = useState(() => "");

  const [OrderPayload, setOrderPayload] = useState(() => { });

  /**Basket Listing API call */
  useEffect(() => {
    handleReCaptchaVerify();
  }, [handleReCaptchaVerify]);

  // useEffect(() => {
  //   console.log(OrderPayload, 'oRRRPP')
  // }, [OrderPayload])

  useEffect(() => {
    if (captchaToken && (captchaCount.current == 1)) {
      let payload = {
        order_unique_id: uniID
          ? uniID
          : "",
        captcha: captchaToken ? captchaToken : ""
        // client_id: userDetails.clientId ? userDetails.clientId : "",
      };

      AssistedFlowService.BasketDetails(payload)
        .then((res) => {
          if (res && res.data && res.data.Body) {
            setDataNotFound(() => false);
            setBasketData(() => (res.data.Body ? res.data.Body : {}));
            client_id = res.data.Body.client_id;
            // refCallAPI();
            if (res.data.Body.order_status == 'authentication_pending') {
              setshowStatus(() => false);
            } else if (res.data.Body.order_status == 'payment_pending') {

              if (res.data.Body.payment_url) {
                // setshowStatus(() => true);
                if (subId || (!subId && res.data.Body.is_first_order == "No")) {
                  setPaymentLink(() => res.data.Body.payment_url);
                  setshowStatus(() => false);
                  setShowPopUp(() => "RMFlow");
                } else {
                  setPaymentLink(() => res.data.Body.payment_url);
                  setshowStatus(() => true);
                  setTimeout(() => {
                    window.open(res.data.Body.payment_url, "_self");
                  }, 2000)
                  // setShowPopUp(() => 'ClientFlow')
                }

              }
              else {
                setshowStatus(() => true);
              }
            } else if (res.data.Body.order_status == 'approved') {
              setShowMessg(() => "Your Order has already been placed successfully");
              setshowStatus(() => true);
            } else if (res.data.Body.order_status == 'rejected') {
              setShowMessg(() => "Your Order was rejected. Kindly contact your RM");
              setshowStatus(() => true);
            } else if (res.data.Body.order_status == 'failed') {
              setShowMessg(() => "Your order was failed. Kindly contact your RM")
              setshowStatus(() => true);
            } else {
              setShowMessg(() => "Your order was already placed. Kindly contact your RM to know the order status")
              setshowStatus(() => true);
            }

            /**store the sip and lumpsum order payloads */
            if (res.data.Body.order_type != 'Lumpsum') {
              /**here if order type is SIP */
              if (res.data.Body.is_first_order == 'Yes') {
                /**here if first order yes */
                let tempObj = { Orders: [], Source: "connect", Client: res.data.Body.client_id };
                /**loop through each schemes in list */
                res.data.Body.scheme_data.forEach((item, indexNo) => {
                  let date = item.scheme_selected_date;
                  let nextDate;
                  let currentDate = new moment().startOf("day");
                  let assumedNextSipDate = new moment()
                    .add(monthFactor, "month")
                    .startOf("day")
                    .date(date);
                  let diffInDays = assumedNextSipDate.diff(currentDate, "days");
                  if (diffInDays < monthFactor * 30) {
                    assumedNextSipDate = assumedNextSipDate.add(1, "month");
                  }
                  nextDate = assumedNextSipDate;
                  setOrderDates(nextOrderDate => [nextDate.format("DD/MM/YYYY"), ...nextOrderDate])
                  setNextSipDate(nextSipDate => [nextDate.format('DD') + ' ' + nextDate.format('MMMM').substring(0, 3) + ', ' + nextDate.format('YYYY'), ...nextSipDate]);

                  let obj = {
                    "AllRedeem": "N",
                    "AMCCode": "",
                    "AMCName": "",
                    "Amt": parseInt(item.amount),
                    "BS": "P",
                    "BSType": item.folio_no ? "ADDITIONAL" : "FRESH",
                    "Brokerage": "",
                    "Client": res.data.Body.client_id,
                    "DPTxn": "P",
                    "Firstorderflag": (res.data.Body.is_first_order == "Yes") ? "Y" : "N",
                    "FolioNo": item.folio_no,
                    "Freq": "MONTHLY",
                    "IPAddress": "",
                    "ISIPMandateId": "",
                    "IsInflationAdjusted": "",
                    "Name": res.data.Body.basket_name ? res.data.Body.basket_name : "",
                    "NoOfInstallments": 999,
                    "OrderId": "",
                    "Qty": "0",
                    "RefNo": "",
                    "Remarks": "",
                    "RiskProfileID": "",
                    "SchemeCD": item.bse_scheme_code,
                    "SchemeType": "",
                    "Source": "connect",
                    "StartDate": new moment(nextDate).format("DD/MM/YYYY"),
                    "SubscriptionID": "wb" + res.data.Body.client_id + new Date().getTime(),
                    "SubscriptionType": "Basket",
                    "ID": res.data.Body.id,
                    "TransCode": "NEW",
                    "TransNo": "",
                    "TransMode": "P",
                    "XSIPMandateId": res.data.Body.mandate_id ? res.data.Body.mandate_id : ""
                  }

                  tempObj['Orders'].push(obj);
                })

                /**after looping through schemedata store processed data in order payload */
                setOrderPayload(tempObj);

              } else {
                /**here if first order is NO */
                let tempObj = { Orders: [], Source: "connect", Client: res.data.Body.client_id };
                res.data.Body.scheme_data.forEach((item, indexNo) => {
                  let date = item.scheme_selected_date;
                  let nextDate;
                  let currentDate = new moment().startOf("day");
                  let assumedNextSipDate = new moment()
                    .add(monthFactor, "month")
                    .startOf("day")
                    .date(date);
                  let diffInDays = assumedNextSipDate.diff(currentDate, "days");
                  if (diffInDays < monthFactor * 30) {
                    assumedNextSipDate = assumedNextSipDate.add(0, "month");
                    nextDate = assumedNextSipDate;
                    setOrderDates(nextOrderDate => [nextDate.format("DD/MM/YYYY"), ...nextOrderDate])
                    setNextSipDate(nextSipDate => [nextDate.format('DD') + ' ' + nextDate.format('MMMM').substring(0, 3) + ', ' + nextDate.format('YYYY'), ...nextSipDate]);

                    let obj = {
                      "AllRedeem": "N",
                      "AMCCode": "",
                      "AMCName": "",
                      "Amt": parseInt(item.amount),
                      "BS": "P",
                      "BSType": item.folio_no ? "ADDITIONAL" : "FRESH",
                      "Brokerage": "",
                      "Client": res.data.Body.client_id,
                      "DPTxn": "P",
                      "Firstorderflag": (res.data.Body.is_first_order == "Yes") ? "Y" : "N",
                      "FolioNo": item.folio_no,
                      "Freq": "MONTHLY",
                      "IPAddress": "",
                      "ISIPMandateId": "",
                      "IsInflationAdjusted": "",
                      "Name": res.data.Body.basket_name ? res.data.Body.basket_name : "",
                      "NoOfInstallments": 999,
                      "OrderId": "",
                      "Qty": "0",
                      "Remarks": "",
                      "RefNo": "",
                      "RiskProfileID": "",
                      "SchemeCD": item.bse_scheme_code,
                      "SchemeType": "",
                      "Source": "connect",
                      "StartDate": new moment(nextDate).format("DD/MM/YYYY"),
                      "SubscriptionID": "wb" + res.data.Body.client_id + new Date().getTime(),
                      "SubscriptionType": "Basket",
                      "ID": res.data.Body.id,
                      "TransCode": "NEW",
                      "TransMode": "P",
                      "TransNo": "",
                      "XSIPMandateId": res.data.Body.mandate_id ? res.data.Body.mandate_id : ""
                    }
                    tempObj['Orders'].push(obj)
                  } else {
                    const today = new moment();
                    // const today = new Date();
                    // const yyyy = today.getFullYear();
                    // let mm = today.getMonth() + 1;
                    // assumedNextSipDate = date.toString() + '/' + mm.toString() + "/" + yyyy.toString();
                    assumedNextSipDate = date.toString() + ' ' + today.format('MMMM').substring(0, 3) + ', ' + today.format('YYYY')
                    nextDate = assumedNextSipDate;
                    // orderDates.push(date.toString() + '/' + today.format('MM')+ '/' + today.format('YYYY'))
                    setOrderDates(nextOrderDate => [date.toString() + '/' + today.format('MM') + '/' + today.format('YYYY'), ...nextOrderDate])
                    setNextSipDate(nextSipDate => [nextDate, ...nextSipDate]);
                    let obj = {
                      "AllRedeem": "N",
                      "AMCCode": "",
                      "AMCName": "",
                      "Amt": parseInt(item.amount),
                      "BS": "P",
                      "BSType": item.folio_no ? "ADDITIONAL" : "FRESH",
                      "Brokerage": "",
                      "Client": res.data.Body.client_id,
                      "DPTxn": "P",
                      "Firstorderflag": (item.is_first_order == "Yes") ? "Y" : "N",
                      "FolioNo": item.folio_no,
                      "Freq": "MONTHLY",
                      "IPAddress": "",
                      "ISIPMandateId": "",
                      "IsInflationAdjusted": "",
                      "Name": item.basket_name ? item.basket_name : "",
                      "NoOfInstallments": 999,
                      "OrderId": "",
                      "Qty": "0",
                      "Remarks": "",
                      "RefNo": "",
                      "RiskProfileID": "",
                      "SchemeCD": item.bse_scheme_code,
                      "SchemeType": "",
                      "Source": "connect",
                      "StartDate": new moment(nextDate).format("DD/MM/YYYY"),
                      "SubscriptionID": "wb" + res.data.Body.client_id + new Date().getTime(),
                      "SubscriptionType": "Basket",
                      "ID": res.data.Body.id,
                      "TransCode": "NEW",
                      "TransMode": "P",
                      "TransNo": "",
                      "XSIPMandateId": res.data.Body.mandate_id ? res.data.Body.mandate_id : ""
                    }

                    tempObj['Orders'].push(obj);
                  }
                })

                /**set order payload into orderPayload for is first order no */
                setOrderPayload(tempObj);
              }
            } else {
              /** here if order type is lumpsum */
              let tempObj = { Orders: [], Source: "connect", Client: res.data.Body.client_id };
              res.data.Body.scheme_data.forEach((item) => {
                let obj = {
                  "AllRedeem": "N",
                  "AMCCode": "",
                  "AMCName": "",
                  "Amt": parseInt(item.amount),
                  "BS": "P",
                  "BSType": item.folio_no ? "ADDITIONAL" : "FRESH",
                  "Client": res.data.Body.client_id,
                  "DPTxn": "P",
                  "FolioNo": item.folio_no,
                  "IPAddress": "",
                  "ID": res.data.Body.id,
                  "Name": res.data.Body.basket_name ? res.data.Body.basket_name : "",
                  "OrderId": "",
                  "Qty": "0",
                  "Remarks": "",
                  "RefNo": "",
                  "SchemeCD": item.bse_scheme_code,
                  "SchemeType": "",
                  "SubscriptionID": "wb" + res.data.Body.client_id + new Date().getTime(),
                  "SubscriptionType": "Basket",
                  "TransCode": "NEW"
                }

                tempObj['Orders'].push(obj);
              })

              setOrderPayload(tempObj);
            }
          } else {
            setDataNotFound(() => true);
          }
        })
        .catch((error) => {
          setDataNotFound(() => true);
        });
    }

  }, [captchaToken])

  function refCallAPI(bucketType, isOrder) {
    //Reference Number API Call
    AssistedFlowService.RefNo(
      client_id
    )
      .then((response) => {
        if (response && response.data && response.data.Response) {
          setOrderMetaData({
            ...OrderMetaData,
            refNo: parseInt(response.data.Response.RefNumber),
            placeOrderMessage: response.data.Response.PlaceOrderMessage,
            serverDownMessage: response.data.Response.ServerDownMessage,
          });
          increment = parseInt(response.data.Response.RefNumber);
          // setIsRefNo(() => parseInt(response.data.Response.RefNumber))
          // setIsRefNo(RefNo + 1)
          if (isOrder) {
            if (bucketType != "SIP") {
              placeLumpSumOrder(increment);
            } else {
              placeSIPOrder(increment);
            }
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  /**to set the resend counter interval */
  useEffect(() => {
    const interval = setInterval(() => {
      if (!count) {
        return () => clearInterval(interval);
      }
      setCount((seconds) => seconds - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [count]);

  /**Invest Now Button Click Function */
  function handleFirstButtonClick(isResend) {
    setOtpValue("");
    setisModalClose(() => true)

    if (isResend) {
      setisResendCheck(true);
      setLoaders({ ...loaders, reSendOtpLoader: false });
    } else {
      setLoaders({ ...loaders, SendOtpLoader: false });
    }
    // sendOtp(isResend)
    handleReCaptchaVerify(isResend ? isResend : false);
  }

  const [otpResponse, setOtpResponse] = useState(() => { })

  /**function for send otp */
  function sendOtp(isResend) {
    setErrors(() => null);
    if (isResend) {
      setLoaders({ ...loaders, reSendOtpLoader: true });
    } else {
      setLoaders({ ...loaders, SendOtpLoader: true });
    }

    let payload = {
      // ClientID: userDetails.clientId
      //   ? utils.decryptText(userDetails.clientId)
      //   : "",
      Source: "connect",
      // DeviceOs: "Web",
      // AppSignature: "",
      // BasketId: userDetails.bucketId
      //   ? utils.decryptText(userDetails.bucketId)
      //   : "",
      // SubID: "", // investica subscriptionId
      // SubType: "Basket",
      // Token: token ? token : new Date().getTime(),
      is_resend: isResendCheck ? "Y" : "N",
      subject_id: subId,
      order_unique_id: uniID,
      captcha: captchaToken
    };
    AssistedFlowService.SendOTP(payload)
      .then((response) => {
        if (response && response.data.Body && response.data.Body.otp_session_id) {
          setOtpResponse(response.data)
          setLoaders({ ...loaders, verifyLoader: false });
          if (isResend) {
            setLoaders({ ...loaders, reSendOtpLoader: false });
          } else {
            setLoaders({ ...loaders, SendOtpLoader: false });
          }
          setSessionId(response.data.Body.otp_session_id)
          setShowFirstButton(false);
          setShowSecondDiv(true);
          setCount(30);
        }
        let mobileNo;
        let emailId;
        let emailId2;
        let pattern = /[0-9]{8,10}/i;
        let pattern2 = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/i;
        let index;
        // mobileNo = response.data.Response.toString();
        // mobileNo = (mobileNo.match(pattern) && mobileNo.match(pattern).length > 0) ? mobileNo.match(pattern)[0].toString() : '';
        // emailId = (response.data.Response.match(pattern2) && response.data.Response.match(pattern2).length > 0) ? response.data.Response.match(pattern2)[0].toString() : '';
        // index = emailId.indexOf('@');
        // mobileNo = (mobileNo.length > 0) ? (mobileNo.charAt(0) + mobileNo.charAt(1) + '******' + mobileNo.charAt(8) + mobileNo.charAt(9)) : '';

        // emailId2 = (emailId && emailId.length > 0) ? (emailId.charAt(0) + emailId.charAt(1) + '*****' + emailId.charAt(index - 2) + emailId.charAt(index - 1) + emailId.substring(index)) : '';
        setMobileNumber(() => (response.data.Message));
        // setEmail(() => emailId2 ? emailId2 : null);
      })
      .catch((error) => {
        if (isResend) {
          setLoaders({ ...loaders, reSendOtpLoader: false });
        } else {
          setLoaders({ ...loaders, SendOtpLoader: false });
        }
        setErrors(() =>
          error.response.data.Message ? error.response.data.Message : "Something Went Wrong"
        );
      });
  }

  /**Verify OTP */
  const submitOTP = () => {
    setErrors(() => null);
    setLoaders({ ...loaders, verifyLoader: true, SendOtpLoader: false, reSendOtpLoader: false });
    setCount(0);
    let payload = {
      // ClientId: BasketData.client_id
      //   ? BasketData.client_id
      //   : "",
      OTP: OtpValue ? OtpValue : "",
      // Source: "connect",
      // DeviceOs: "Web",
      // BasketId: userDetails.bucketId
      //   ? utils.decryptText(userDetails.bucketId)
      //   : "",
      // SubID: "",
      // SubType: "Basket",
      // Token: token ? token : new Date().getTime(),
      // SubjectId: userDetails.subId ? utils.decryptText(userDetails.subId) : "",
      // OrderUniqueID: userDetails.orderUniqueId
      //   ? utils.decryptText(userDetails.orderUniqueId)
      //   : "",
      session_id: otpResponse.Body.otp_session_id
    };

    AssistedFlowService.VerifyOTP(payload)
      .then((response) => {
        // console.log('Verifyresponse', response);
        // setVerifyLoader(() => false);
        if (response && response.data && (response.data.StatusCode == 200)) {
          // refCallAPI(BasketData.order_type, true);

          if (BasketData.order_type != "SIP") {
            placeLumpSumOrder(increment);
          } else {
            placeSIPOrder(increment);
          }
          // if (BasketData.BucketType && BasketData.BucketType != 'SIP') {

          //     // let refNo = parseInt(OrderMetaData.refNo);
          //     // BasketData.list_fund_data.forEach((element, index) => {

          //         // if (index == BasketData.list_fund_data.length - 1 && !errors) {
          //         //     refNo = refNo + 1;
          //             placeLumpSumOrder();
          //         // } else if(!errors) {
          //         //     refNo = refNo + 1;
          //         //     placeLumpSumOrder(element, false,refNo);
          //         // }

          //     // });
          // } else {
          //     // console.log('data',BasketData.list_fund_data)
          //     // let refNo = parseInt(OrderMetaData.refNo);
          //     // BasketData.list_fund_data.forEach((element, index) => {

          //         // if (index == BasketData.list_fund_data.length - 1) {
          //             // refNo = refNo + 1;
          //             placeSIPOrder();
          //         // } else if(!errors){
          //         //     refNo = refNo + 1;
          //         //     placeSIPOrder();
          //         // }

          //     // })
          // }
        } else {
          setLoaders({ ...loaders, verifyLoader: false });
          setErrors(() =>
            response.data.Reason ? response.data.Reason : "Something Went Wrong"
          );
        }
      })
      .catch((error) => {
        setLoaders({ ...loaders, verifyLoader: false });
        setErrors(() =>
          error.response.data.Message ? error.response.data.Message : "Something Went Wrong"
        );
        console.log(error);
      });
  };

  /**to place LumpSumOrder */
  function placeLumpSumOrder(refNo) {
    // console.log('funddata', fundData);
    // increment = ("0000" + (parseInt(refNo) + 1)).slice(-5);
    // increment = parseInt(refNo + 1);
    // let clientId = BasketData.client_id
    //   ? BasketData.client_id
    //   : "";
    let payload = {
      // TransCode: "NEW",
      // TransNo: "",
      // OrderId: "",
      // Client: clientId,
      // Source: "connect",
      // Orders:
      // SchemeCD: BasketData.scheme_data[isLast].BSESchemeCode,
      // SchemeName: "",
      // BS: "P",
      // BSType: BasketData.scheme_data[isLast].folioNo ? "ADDITIONAL" : "FRESH",
      // DPTxn: "P",
      // Amt: parseInt(BasketData.scheme_data[isLast].FundA),
      // Qty: "",
      // AllRedeem: "N",
      // FolioNo: BasketData.scheme_data[isLast].folioNo ? BasketData.scheme_data[isLast].folioNo : "",
      // RefNo: increment,
      // Remarks: "Web|" + BasketData.bucket_title,
      // OrderStatus: "",
      // Reason: "",
      // TimeStamp: "",
      // FinalStatus: "",
      // ActualOrderId: "",
      // SchemePlanCode: BasketData.scheme_data[isLast].FundPlanCode,
      // SubscriptionId: "wb" + clientId + new Date().getTime(),
      // SubscriptionType: "Basket",
      // Id: BasketData.basket_id ? BasketData.basket_id : "",
      // Name: BasketData.bucket_title ? BasketData.bucket_title : "",
      // OTP: OtpValue ? OtpValue : "",
      // Token: token ? token : new Date().getTime(),
      // RmBasketId: BasketData.basket_id ? BasketData.basket_id : "",
      // RmBasketName: BasketData.bucket_title ? BasketData.bucket_title : "",
      // SubjectId: urlSid ? urlSid : "",
      // Source: "connect",
      // OrderUniqueID: urlOid ? urlOid : "",
    };


    AssistedFlowService.Lumpsum(OrderPayload, otpResponse.Body.otp_session_id)
      .then((response) => {
        if (
          response &&
          response.data &&
          response.data.Status &&
          response.data.Status == "Success"
        ) {
          // isLast = isLast + 1;
          // setIsLast(() => isLast + 1);
          // placeLumpSumOrder(increment);
          // generatePaymentLink();
          let flag;
          let filteredData = response.data.Response.Orders.filter((item) => item.FinalStatus == "CONFIRMED")
          /**store all confirmed orders from response */
          setConfirmedOrders(filteredData);

          flag = response.data.Response.Orders.every((item) => {
            if (item.FinalStatus === "CONFIRMED") {
              return true;
            } else if (item.FinalStatus === "FAILED") {
              return false;
            } else if (item.OrderStatus === "CONFIRMED") {
              return true;
            } else return false;
          })

          /**store entire response or lumpsum order placed */
          setSchemeDetails(response.data.Response);
          setLoaders({ ...loaders, verifyLoader: false });
          setPaymentLink(() =>
            response.data.Response.PaymentLink ? response.data.Response.PaymentLink : ""
          );
          if (flag) {
            if (subId) {
              setShowPopUp("RMFlow");
            } else {
              if(response.data.Response && response.data.Response.PaymentLink){
                window.open(response.data.Response.PaymentLink, "_self");
              }else{
                setShowPopUp("ClientFlow")
              }
            }
          } else {
            setShowCancelOrder(true);
          }
        }

        /**api call for generate payment link */
        // else if (
        //   response &&
        //   response.data &&
        //   response.data.OrderStatus &&
        //   response.data.OrderStatus == "SUCCESS" &&
        //   isLast >= BasketData.scheme_data.length - 1
        // ) {
        //   generatePaymentLink();
        // }
        else {
          setLoaders({ ...loaders, verifyLoader: false });
          setErrors(() =>
            response && response.data && response.data.Reason
              ? response.data.Reason
              : "Something Went Wrong"
          );
        }
      })
      .catch((error) => {
        console.log(error);
        setLoaders({ ...loaders, verifyLoader: false });
        setErrors(() => (error.message ? error.message : ""));
      });
  }

  /**to place XSIP order */
  function placeSIPOrder(refNo) {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 2; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;

    // let day = BasketData.sip_date.split(',');

    // const formattedToday = (day[day.length -1]).toString() + "/" + mm + "/" + yyyy;
    const formattedToday = BasketData.scheme_data[isLast].scheme_selected_date.toString() + "/" + mm + "/" + yyyy;

    // let refNo = parseInt(OrderMetaData.refNo);
    // refNo = refNo + 1;
    //  setIsRefNo(RefNo + 1);
    // increment = ("0000" + (parseInt(refNo) + 1)).slice(-5);
    // increment = parseInt(refNo + 1);
    let clientId = BasketData.client_id
      ? BasketData.client_id
      : "";
    // let payload = {
    // TransCode: "NEW",
    // TransNo: "",
    // OrderId: "",
    // Client: clientId,
    // SchemeCD: BasketData.scheme_data[isLast].BSESchemeCode, // "SchemeCD": fundData.BSESchemeCode ? fundData.BSESchemeCode
    // BS: "P",
    // BSType: BasketData.scheme_data[isLast].folioNo ? "ADDITIONAL" : "FRESH",
    // DPTxn: "P",
    // Amt: BasketData.scheme_data[isLast].FundA, //fundData.FundA ? parseInt(fundData.FundA): '',
    // Qty: "",
    // AllRedeem: "N",
    // FolioNo: BasketData.scheme_data[isLast].folioNo ? BasketData.scheme_data[isLast].folioNo : "",
    // RefNo: increment,
    // Remarks: "Web|" + BasketData.bucket_title,
    // SchemeType: null,
    // AMCCode: "",
    // AMCName: "",
    // Brokerage: "",
    // Firstorderflag: (BasketData.is_first_order == "Yes") ? "Y" : "N",
    // Freq: "MONTHLY",
    // IPAddress: "",
    // ISIPMandateId: "",
    // IsInflationAdjusted: "",
    // NoOfInstallments: 999,
    // RiskProfileID: "",
    // StartDate: orderDates[(orderDates.length - 1) - isLast],
    // SubscriptionId: "wb" + clientId + new Date().getTime(),
    // SubscriptionType: "Basket",
    // Id: BasketData.basket_id ? BasketData.basket_id : "",
    // Name: BasketData.bucket_title ? BasketData.bucket_title : "",
    // TransMode: "P",
    // XSIPMandateId: BasketData.mandate_id ? BasketData.mandate_id : "",
    // Source: "connect",
    // OTP: OtpValue ? OtpValue : "",
    // Token: token ? token : new Date().getTime(),
    // RmBasketId: BasketData.basket_id ? BasketData.basket_id : "",
    // RmBasketName: BasketData.bucket_title ? BasketData.bucket_title : "",
    // SubjectId: userDetails.subId ? utils.decryptText(userDetails.subId) : "",
    // OrderUniqueID: userDetails.orderUniqueId
    //   ? utils.decryptText(userDetails.orderUniqueId)
    //   : "",
    // };

    AssistedFlowService.XSIP(OrderPayload, otpResponse.Body.otp_session_id)
      .then((response) => {
        // console.log("XSIP respone", response);
        if (
          response &&
          response.data &&
          response.data.Status &&
          response.data.Status == "Success"
          // isLast < BasketData.scheme_data.length - 1
        ) {
          // isLast = isLast + 1;
          // setIsLast(() => isLast + 1);
          // placeSIPOrder(increment);
          // generatePaymentLink();
          /**for RM if subId is present in URL */
          setSchemeDetails(response.data.Response.Orders);
          let flag;
          let filteredData = response.data.Response.Orders.filter((item) => item.FinalStatus == "CONFIRMED")
          /**store all confirmed orders from response */
          setConfirmedOrders(filteredData)

          flag = response.data.Response.Orders.every((item) => {
            if (item.FinalStatus === "CONFIRMED") {
              return true;
            } else if (item.FinalStatus === "FAILED") {
              return false;
            } else if (item.OrderStatus === "CONFIRMED") {
              return true;
            } else return false;
          })

          /**store entire response or SIP order placed */
          setSchemeDetails(response.data.Response);
          setLoaders({ ...loaders, verifyLoader: false });
          setPaymentLink(() =>
            response.data.Response.PaymentLink ? response.data.Response.PaymentLink : ""
          );
          if (subId) {
            setErrors(() => null);
            setShowSecondDiv(() => false);
            setShowFirstButton(() => true);
            setisModalClose(() => false)
            setShowThirdDiv(false);
            if (flag) {
              if (subId) {
                setShowPopUp("RMFlow");
              } else {
                setShowPopUp("ClientFlow")
              }
            } else {
              setShowCancelOrder(true);
            }
          } else {
            setPaymentLink(() =>
              response.data.Response.PaymentLink ? response.data.Response.PaymentLink : ""
            );

            if (flag) {
              // setTimeout(() => {
                window.open(response.data.Response.PaymentLink ? response.data.Response.PaymentLink : "", "_self");
              // }, 3000);
            } else {
              setShowCancelOrder(true);
            }
          }
        }
        // else {
        //   setVerifyLoader(() => false);
        //   setErrors(() =>
        //     response && response.data && response.data.Reason
        //       ? response.data.Reason
        //       : "Something Went Wrong"
        //   );
        // }

        /**api call for generate payment link */
        // else if (
        //   response &&
        //   response.data &&
        //   response.data.OrderStatus &&
        //   response.data.OrderStatus == "SUCCESS" &&
        //   isLast >= BasketData.scheme_data.length - 1
        // ) {
        //   generatePaymentLink();
        // } 
        else {
          setLoaders({ ...loaders, verifyLoader: false });
          setErrors(() =>
            response && response.data && response.data.Reason
              ? response.data.Reason
              : "Something Went Wrong"
          );
        }
      })
      .catch((error) => {
        console.log(error);
        setLoaders({ ...loaders, verifyLoader: false });
        setErrors(() => (error.message ? error.message : ""));
      });
  }

  /**for cancel order */
  function cancelOrder() {
    const payload = {
      Orders: confirmedOrders.map((order, index) => {
        return {
          "AllRedeem": order?.AllRedeem ?? "N",
          "Amt": order?.Amt ?? "",
          "BS": order?.BS ?? "P",
          "BSType": order?.BSType ?? "FRESH",
          "Brokerage": "",
          "Client": schemeDetails?.Client ?? "",
          "DPTxn": order?.DPTxn ?? "P",
          "Firstorderflag": "",
          "FolioNo": order?.FolioNo ?? "",
          "Freq": "",
          "IPAddress": order?.IPAddress ?? "",
          "ISIPMandateId": "",
          "NoOfInstallments": "",
          "OrderId": order?.OrderId ?? "",
          "Qty": order?.Qty ?? "",
          "RefNo": "",
          "Remarks": order?.Remarks ?? "",
          "SchemeCD": order?.SchemeCD ?? "",
          "Source": "connect",
          "StartDate": "",
          "TransCode": "CXL",
          "TransMode": "P",
          "TransNo": "",
          "XSIPMandateId": confirmedOrders?.[index]?.XSIPMandateId ?? ""
        }
      },
      ),
      Client: (schemeDetails?.Client && schemeDetails?.Client?.toUpperCase()) ?? "",
      Source: "connect"
    };

    if (BasketData.order_type == "Lumpsum") {
      AssistedFlowService.Lumpsum(payload, otpResponse.Body.otp_session_id).then((response) => {
        setOrderCancelledPopup(true);
        if (response.status === 200) {
          setShowCancelOrder(false);
          setTimeout(() => {
            navigate("/");
          }, 3000)
        }
      });
    } else {
      AssistedFlowService.XSIP(payload, otpResponse.Body.otp_session_id).then((response) => {
        setOrderCancelledPopup(true);
        if (response.status === 200) {
          setShowCancelOrder(false);
          setTimeout(() => {
            navigate("/");
          }, 3000)
        }
      });
    }
  }

  /**api call for generate payment link */
  function generatePaymentLink() {
    let payload = {
      Client: BasketData.client_id
        ? (BasketData.client_id)
        : "",
      IsDirect: "N",
      // "LogoutURL": (window.location.origin + window.location.pathname + '?' + 'status=success').toString()
      LogoutURL: window.location.href + "&" + "status=success",
    };

    AssistedFlowService.PaymentLink(payload)
      .then((response) => {
        if (response && response.data && response.data.Response) {
          /**for RM if subId is present in URL */
          if (subId) {
            setLoaders({ ...loaders, verifyLoader: false });
            setPaymentLink(() =>
              response.data.Response ? response.data.Response : ""
            );
            setShowPopUp(() => "RMFlow");
          } else {
            setShowSecondDiv(false);
            setShowThirdDiv(true);

            setLoaders({ ...loaders, verifyLoader: false });
            setPaymentLink(() =>
              response.data.Response ? response.data.Response : ""
            );
          }

          UpdateOrderStatus(response.data.Response);
        } else {
          if (retryPaymentCounter < 1) {
            retryPaymentCounter = retryPaymentCounter + 1;
            generatePaymentLink();
          } else {
            /**for RM if subId is present in URL */
            if (subId) {
              setLoaders({ ...loaders, verifyLoader: false });
              setPaymentLink(() => null);
              setShowPopUp(() => "RMFlow");
            } else {
              setLoaders({ ...loaders, verifyLoader: false });
              setPaymentLink(() => null
              );
            }
            UpdateOrderStatus();
          }
        }
      })
      .catch((error) => {
        setLoaders({ ...loaders, verifyLoader: false });
        setErrors(() => (error.message ? error.message : ""));
      });
  }

  /**api call for order status update */
  function UpdateOrderStatus(paymntLink) {
    let payload = {
      order_unique_id: uniID
        ? uniID
        : "",
      client_id: BasketData.client_id ? BasketData.client_id : '',
      bucket_id: BasketData.basket_id ? BasketData.basket_id : "",
      status: "payment_pending",
      order_date: "",
      payment_type: "Cash",
      link: paymntLink ? paymntLink : null,
      action_by: "",
    };

    AssistedFlowService.OrderStatus(payload)
      .then((response) => {
        setLoaders({ ...loaders, verifyLoader: false });
        if (response && response.data && response.data.StatusCode == 200) {
          if (!subId) {
            setShowSecondDiv(false);
            setShowThirdDiv(true);

            if (BasketData.is_first_order == "No") {
              setErrors(() => null);
              setShowSecondDiv(() => false);
              setShowFirstButton(() => true);
              setisModalClose(() => false)
              setShowThirdDiv(false);
              setShowPopUp(() => "RMFlow");
            } else {
              setTimeout(() => {
                window.open(paymntLink ? paymntLink : "", "_self");
              }, 3000);
            }
          } else {
            closesection();
          }
        } else {
          setLoaders({ ...loaders, verifyLoader: false });
          setErrors(() =>
            response.data.Message
              ? response.data.Message
              : "Something Went Wrong"
          );
        }
      })
      .catch((error) => {
        console.log(error);
        setLoaders({ ...loaders, verifyLoader: false });
        setErrors(() =>
          error.response.data.Message
            ? error.response.data.Message
            : "Something Went Wrong"
        );
      });
  }

  /**api call for generate payment link2 */
  function generatePaymentLink2() {
    let payload = {
      Client: userDetails.clientId
        ? utils.decryptText(userDetails.clientId).toString()
        : "",
      IsDirect: "N",
      // "LogoutURL": (window.location.origin + window.location.pathname + '?' + 'status=success').toString()
      LogoutURL: window.location.href + "&" + "status=success",
    };
    setLoaders({ ...loaders, DirectFlowLoader: true });
    AssistedFlowService.PaymentLink(payload)
      .then((response) => {
        if (response && response.data && response.data.Response) {
          /**for RM if subId is present in URL */
          if (subId) {
            setLoaders({ ...loaders, DirectFlowLoader: false });
            setPaymentLink(() =>
              response.data.Response ? response.data.Response : ""
            );
            setshowStatus(() => false);
            setShowPopUp(() => "RMFlow");
          } else {
            setLoaders({ ...loaders, DirectFlowLoader: false });
            setPaymentLink(() =>
              response.data.Response ? response.data.Response : ""
            );
            // setShowPopUp(() => 'ClientFlow')
          }

          UpdateOrderStatus2(response.data.Response);
        } else {
          if (retryPaymentCounter < 1) {
            retryPaymentCounter = retryPaymentCounter + 1;
            generatePaymentLink2();
          } else {
            /**for RM if subId is present in URL */
            if (subId) {
              setLoaders({ ...loaders, DirectFlowLoader: false });
              setPaymentLink(() => null);
              // setShowPopUp(() => "RMFlow");
            } else {
              setLoaders({ ...loaders, DirectFlowLoader: false });
              setPaymentLink(() => null
              );
              // setShowPopUp(() => 'ClientFlow')
            }
            UpdateOrderStatus2();
          }
        }
      })
      .catch((error) => {
        console.log(error);
        setLoaders({ ...loaders, DirectFlowLoader: false });
        setDirectErrors(() => (error.message ? error.message : ""));
      });
  }

  // useEffect(() => {
  //   console.log('SCHEHEHE', schemeDetails);
  // }, [schemeDetails])

  /**api call for orderstatus2 */
  function UpdateOrderStatus2(paymntLink) {
    let payload = {
      order_unique_id: urlOid
        ? urlOid
        : "",
      client_id: BasketData.client_id ? BasketData.client_id : '',
      bucket_id: BasketData.basket_id ? BasketData.basket_id : "",
      status: "payment_pending",
      order_date: "",
      payment_type: "Cash",
      link: paymntLink ? paymntLink : null,
      action_by: "",
    };

    AssistedFlowService.OrderStatus(payload)
      .then((response) => {
        setLoaders({ ...loaders, DirectFlowLoader: false });
        if (response && response.data && response.data.StatusCode == 200) {
          if (!subId) {
            // setShowSecondDiv(false);
            // setShowThirdDiv(true);

            if (BasketData.is_first_order == "No") {
              setDirectErrors(() => null);
              // setShowSecondDiv(() => false);
              // setShowFirstButton(() => true);
              setisModalClose(() => false)
              // setShowThirdDiv(false);
              setshowStatus(() => false);
              setShowPopUp(() => "RMFlow");
            } else {
              setTimeout(() => {
                window.open(paymntLink ? paymntLink : "", "_self");
              }, 3000);
            }
          } else {
            closesection();
          }
        } else {
          setLoaders({ ...loaders, verifyLoader: false });
          setErrors(() =>
            response.data.Message
              ? response.data.Message
              : "Something Went Wrong"
          );
        }
      })
      .catch((error) => {
        // console.log(error);
        setLoaders({ ...loaders, verifyLoader: false });
        setErrors(() =>
          error.response.data.Message
            ? error.response.data.Message
            : "Something Went Wrong"
        );
      });
  }

  /**copy payment link to clipboard */
  function copyToClipboard() {
    let msg = "Find a curated customized Mutual Fund basket that perfectly aligns with your investment goals."
    let msg2 = "\nTo complete your investment, please initiate payment by clicking on the following link:\n"
    let msg3 = "\nThe payment process is fast and simple. if you require any assistance, I am available to guide you through the process"

    const selBox = document.createElement("textarea");
    selBox.style.position = "fixed";
    selBox.style.left = "0";
    selBox.style.top = "0";
    selBox.style.opacity = "0";
    selBox.value = msg + msg2 + paymentLink.toString() + msg3;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand("copy");
    document.body.removeChild(selBox);
    setShowToast(() => true);

    setTimeout(() => {
      setShowToast(() => false);
    }, 2000);
  }
  function closesection() {
    setErrors(() => null);
    setDirectErrors(() => null);
    setShowSecondDiv(() => false);
    setShowFirstButton(() => true);
    setisModalClose(() => false)
  }

  return (
    <>
      <div>
        <section className="afsec">
          <div className="container">
            {BasketData ? (
              <div className="row">
                <h1 className="title-secnd pt-5">Investments for you!</h1>
                {/* <p className='subhead'>Funds for Children's Education</p> */}
                {
                  (name == 'visibleform') ?
                    <>
                      <p className="subhead">
                        {BasketData.basket_name ? BasketData.basket_name : "NA"}
                      </p>
                      <p className="profile">
                        {BasketData.order_type ? BasketData.order_type : "NA"}
                      </p>
                    </>
                    :
                    <>
                      <p className="subhead">
                        {BasketData.basket_name ? BasketData.basket_name : "NA"}
                      </p>
                      <p className="profile">
                        {BasketData.client_id
                          ? BasketData.client_id
                          : "NA"} | {BasketData.client_name
                            ? BasketData.client_name
                            : "NA"}
                      </p>
                    </>

                }

              </div>
            ) : (
              ""
            )}
            {BasketData ? (
              <>
                <div className="row">
                  <div className="left-sec">
                    <div className="table-sec">
                      {BasketData.scheme_data.map((item, index) => {
                        return (
                          <>
                            <div className="rowwrap" key={index}>
                              <div className="name">
                                {item.scheme_name ? item.scheme_name : "NA"}
                              </div>
                              <div className="textwrap">
                                <div className="numberwrap">
                                  <div className="number">
                                    {item.three_year_return_per ? parseInt(item.three_year_return_per).toFixed(2) : "NA"}
                                  </div>
                                  <p className="percent">3 yrs Returns %</p>
                                </div>
                                <div className="amount">
                                  <div className="rupee">
                                    ₹ {item.amount ? item.amount : "NA"}
                                  </div>
                                  <p className="text">Amount</p>
                                </div>
                                {
                                  (BasketData.order_type != 'Lumpsum') ?
                                    <div className="amount">
                                      <div className="rupee">
                                        {nextSipDate && nextSipDate[(nextSipDate.length - 1) - index] ? nextSipDate[(nextSipDate.length - 1) - index] : 'NA'}
                                      </div>
                                      <p className="text">Next SIP Payment</p>
                                    </div> : ''
                                }

                              </div>
                            </div>
                          </>
                        );
                      })}
                    </div>
                    {OrderMetaData.placeOrderMessage ||
                      OrderMetaData.serverDownMessage ? (
                      <div className="text-center order-message">
                        {OrderMetaData.placeOrderMessage
                          ? OrderMetaData.placeOrderMessage
                          : OrderMetaData.serverDownMessage
                            ? OrderMetaData.serverDownMessage
                            : ""}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="right-sec">
                    <div className="formwrapper">
                      {showFirstButton && (
                        <>
                          <div className="new-wrapp">
                            <div className="infowrap">
                              <p>
                                {BasketData.client_name
                                  ? BasketData.client_name
                                  : "NA"}
                              </p>
                              <p>
                                {BasketData.client_id
                                  ? BasketData.client_id
                                  : "NA"}
                              </p>
                            </div>
                            <div className="amtwrap">
                              <p className="investmentamount">
                                Total Investment Amount
                              </p>
                              <p className="amountrs">
                                ₹{" "}
                                {BasketData.order_amount
                                  ? BasketData.order_amount
                                  : "NA"}
                              </p>
                            </div>
                            <Button
                              className="btn-bg btn-bg-dark investnowbtn"
                              onClick={() => {
                                loaders.SendOtpLoader
                                  ? ""
                                  : handleFirstButtonClick(false);
                              }}
                              disabled={paymentLink}
                            >
                              {loaders.SendOtpLoader ? (
                                <div className="loaderB mx-auto"></div>
                              ) : (
                                <span>Invest Now</span>
                              )}
                            </Button>
                          </div>
                          {showFirstButton && errors ? (
                            <div className="text-center">
                              <span className="text-danger">{errors}</span>
                            </div>
                          ) : (
                            ""
                          )}
                        </>
                      )}
                      {showSecondDiv && isModalClose ?
                        <>
                          <div className="otpsec">
                            <div className="resdiv">
                              <Button className="closebtn cursor-pointer" onClick={closesection} ><FontAwesomeIcon icon={faClose} /></Button>

                              <div className="otpmodal">
                                <p className="otptext">
                                  Enter One Time
                                  <br /> Authentication Code
                                </p>
                                {
                                  subId ?
                                    <p className="subtext">
                                      {/* Code sent to client’s registered
                                      {
                                        mobileNumber ? <><span> mobile number +91 <span className="temp-text"> {mobileNumber} </span></span></> : ''
                                      }

                                      {
                                        (email && !mobileNumber) ? <><span>Email ID</span> <span className="temp-text">{email}</span></> : ''
                                      }

                                      {
                                        (email && mobileNumber) ? <><span>and Email ID</span> <span className="temp-text">{email}</span></> : ''
                                      } */}
                                      {mobileNumber ? mobileNumber : "NA"}
                                    </p>
                                    :
                                    <p className="subtext">
                                      {/* Code sent to your registered
                                      {
                                        mobileNumber ? <><span> mobile number +91 <span className="temp-text"> {mobileNumber} </span></span></> : ''
                                      }
                                      {
                                        (email && !mobileNumber) ? <><span>Email ID</span> <span className="temp-text">{email}</span></> : ''
                                      }

                                      {
                                        (email && mobileNumber) ? <><span>and Email ID</span> <span className="temp-text">{email}</span></> : ''
                                      } */}
                                      {mobileNumber ? mobileNumber : "NA"}
                                    </p>
                                }


                              </div>

                              <div id="divOuter width-unset">
                                <div id="divInner">
                                  <OtpInput
                                    value={OtpValue}
                                    onChange={(e) => {
                                      setOtpValue(e ?? "");
                                    }}
                                    className="common-otp"
                                  />
                                  <i className="bar"></i>
                                </div>
                              </div>

                              {count ? (
                                <p className="warning mb-4">
                                  Resend Code in {count} secs
                                </p>
                              ) : (
                                <p
                                  className="warning mb-4 resend-otp-mf"
                                  onClick={() => {
                                    handleFirstButtonClick(true);
                                  }}
                                >
                                  Resend Code
                                </p>
                              )}

                              {/* <div className="mb-4"><a href="#" className=" resend">Resend OTP</a></div> */}
                            </div>
                            <Button
                              className={
                                !OtpValue || OtpValue.toString().length < 6
                                  ? "btn-bg btn-bg-dark submitbtn disablebtn"
                                  : "btn-bg btn-bg-dark submitbtn"
                              }
                              onClick={loaders.verifyLoader ? null : submitOTP}
                              disabled={
                                !OtpValue || OtpValue.toString().length < 6
                              }
                            >
                              {loaders.verifyLoader ? (
                                <div className="loaderB mx-auto"></div>
                              ) : (
                                <span>Submit</span>
                              )}
                            </Button>
                          </div>
                          {errors && showSecondDiv ? (
                            <div className="text-center">
                              <span className="text-danger errormsg">
                                {errors}
                              </span>
                            </div>
                          ) : (
                            ""
                          )}
                        </> : ''
                      }
                      {showThirdDiv && (
                        <>
                          <div className="redirectwrap">
                            <LazyLoader
                              src={Redirect}
                              alt={""}
                              className={"img-fluid redirectimg"}
                              width={"74"}
                              height={"74"}
                            />
                            <p className="redirecttext">
                              Redirecting to Payment Page
                            </p>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                {!dataNotFound ? (
                  <div className="row text-center">
                    <div className="text-center">
                      <video
                        src={loaderimg2}
                        autoPlay
                        loop
                        muted
                        className="img-fluid d-block mx-auto"
                        height={250}
                        width={250}
                      />
                    </div>
                  </div>
                ) : (
                  ""
                )}

                {dataNotFound ? (
                  <div className="text-center">
                    <img
                      src={noDataimg}
                      className="img-fluid"
                      alt="No Data Found"
                      height={250}
                      width={250}
                    />
                  </div>
                ) : (
                  ""
                )}
              </>
            )}
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
            {/* Modal for RM flow */}
            <Modal
              className="ordermodal"
              show={showPopUp == "RMFlow"}
              onHide={false}
              size="md"
              aria-labelledby="contained-modal-title-vcenter"
              backdrop="static"
              keyboard={false}
              centered
            >
              <Modal.Body className="text-center">
                <div className="order-register">
                  <p className="sucesstext">Order Registered!</p>

                  {
                    BasketData ?
                      <>
                        {
                          (BasketData.is_first_order == "No") ?
                            <p className="subtext">
                              Keep your mandate authenticated as your 1st order will auto debit.
                            </p> :
                            <p className="subtext">
                              Copy &amp; Share link with Client - <b>{BasketData.client_id
                                ? BasketData.client_id
                                : ""}</b> to complete the payment.
                            </p>
                        }
                      </> : ''
                  }


                  <div className="rightbtn">
                    {
                      BasketData ?
                        <>
                          {
                            (BasketData.is_first_order == "No") ?
                              <Link
                                className="btn-bg btn-bg-dark copybtn"
                                to="/"
                              >Okay</Link> :
                              <Button
                                className="btn-bg btn-bg-dark copybtn"
                                onClick={copyToClipboard}
                              >
                                {showToast ? (
                                  <span>Link Copied</span>
                                ) : (
                                  <span>Copy Link</span>
                                )}
                              </Button>
                          }
                        </> : ''
                    }

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

            <Modal
              className="successfulmodal"
              show={showPopUp == "ClientFlow"}
              onHide={false}
              size="md"
              aria-labelledby="contained-modal-title-vcenter"
              backdrop="static"
              keyboard={false}
              centered
            >
              <Modal.Body className="text-center">
                <LazyLoader
                  src={ThumbUp}
                  alt={""}
                  className={"img-fluid redirectimg"}
                  width={"74"}
                  height={"74"}
                />
                <p className="sucesstext">Your order is successful!</p>
                <div className="rightbtn">
                  <Link
                    to="/"
                    className="btn-bg btn-bg-dark awesomebtn"
                    onClick=""
                  >
                    <span>Awesome!</span>{" "}
                  </Link>
                </div>
              </Modal.Body>
            </Modal>

            {/* Modal for Remaining actions */}
            <Modal
              className="successfulmodal"
              show={showStatus}
              onHide={false}
              size="md"
              aria-labelledby="contained-modal-title-vcenter"
              backdrop="static"
              keyboard={false}
              centered
            >
              <Modal.Body className="text-center">
                {
                  (BasketData && BasketData.order_status && BasketData.order_status == "payment_pending" && BasketData.payment_url) ?
                    <div className="redirectwrap">
                      <LazyLoader
                        src={Redirect}
                        alt={""}
                        className={"img-fluid redirectimg con-img"}
                        width={"74"}
                        height={"74"}
                      />
                      <p className="redirecttext sucesstext">
                        Redirecting to Payment Page
                      </p>
                    </div> :
                    (BasketData && BasketData.order_status && BasketData.order_status == "payment_pending" && !BasketData.payment_url) ?

                      <p className="subtext">Re-Fetch Payment Link</p> :
                      <p className="subtext">{messg}</p>
                }

                {
                  (BasketData && BasketData.order_status && BasketData.order_status == "payment_pending" && BasketData.payment_url) ?
                    "" :
                    (BasketData && BasketData.order_status && BasketData.order_status == "payment_pending" && BasketData.payment_url) ?
                      <div className="rightbtn">
                        <Button
                          className="btn-bg btn-bg-dark awesomebtn"
                          onClick={generatePaymentLink2}
                        >
                          <span>Fetch Payment Link</span>

                        </Button>
                      </div> :
                      <div className="rightbtn">
                        <Link
                          to="/"
                          className="btn-bg btn-bg-dark awesomebtn"
                          onClick=""
                        >
                          <span>Okay</span>

                        </Link>
                      </div>
                }

              </Modal.Body>
            </Modal>

            {/* Modal for cancel order action */}
            <Modal
              className="successfulmodal"
              // true for testing else "showCancelOrder" to show
              show={showCancelOrder}
              onHide={false}
              size="md"
              aria-labelledby="contained-modal-title-vcenter"
              backdrop="static"
              keyboard={false}
              centered
            >
              <Modal.Body>
                {
                  (!confirmedOrders.length)?
                  <h3 className="text-center text-danger">Your order got failed</h3>: <></>
                }
                
                <table class="table table-borderless">
                  <thead>
                    <tr>
                      <th scope="col">Scheme</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      schemeDetails && schemeDetails.Orders && schemeDetails.Orders.length && schemeDetails.Orders.map((order) => (
                        <tr>
                          <td>{order.SchemeName || ""} 
                            {
                             ((order.FinalStatus || order.OrderStatus) === "FAILED") ? 
                             <>
                             <br/><span className="reason">Reason:</span><span className="reason-desc">{order.Reason || ""}</span>
                             </>
                             : ""
                            }
                          </td>
                          <td>{order.FinalStatus || order.OrderStatus}
                          {/* {
                            ((order.FinalStatus || order.OrderStatus) === "FAILED") ?
                            <span className="status-txt" data-bs-toggle="tooltip" data-bs-placement="top" title={order.Reason || ""}>
                            <FontAwesomeIcon icon={faCircleInfo} />
                            </span> : ""
                          } */}
                          </td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
                {
                  (!confirmedOrders.length) ?
                  <></>:
                  <div className="c-note">Note: Click "Continue" to proceed with Confirmed Schemes or "Cancel" your complete order</div>
                }
                
              </Modal.Body>
              <Modal.Footer>
                <div className="d-flex-gap">
                  {
                    (confirmedOrders.length) ?
                      <>
                        <Button onClick={() => { window.open(paymentLink, '_self') }}>Continue</Button>
                        <Button className="btn btn-danger" onClick={confirmedOrders.length ? cancelOrder : () => { setShowCancelOrder(false) }}>Cancel</Button>
                      </>
                      :
                      <>
                      {(subId)? <span className="text-secondary">Note: Kindly contact your RM</span> : <></>}
                      <Button onClick={() => { window.open('/', '_self') }}>Okay</Button>
                      </>
                      
                  }
                </div>
              </Modal.Footer>
            </Modal>

            <Modal className="bt-strap-mdl otp-main-modal Referral-code-model" show={orderCancelledPopup} backdrop='static' keyboard={false}>
              <Modal.Body className="border-0">
                <div className="exit-intent-sleekbox-overlay sleekbox-popup-active referral-overlay">
                  Your order is cancelled. Please contact your RM to invest again
                </div>
              </Modal.Body>
            </Modal>
          </div>

          {/* Modal For Link expired */}
          <Modal
            className="successfulmodal"
            show={showExpired}
            onHide={false}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            backdrop="static"
            keyboard={false}
            centered
          >
            <Modal.Body className="text-center">
              <p>Your Link has been expired, please contact your RM.</p>
              <div className="rightbtn">
                <Link
                  to="/"
                  className="btn-bg btn-bg-dark awesomebtn"
                  onClick=""
                >
                  <span>Okay</span>

                </Link>
              </div>
            </Modal.Body>
          </Modal>
        </section>
      </div>
    </>
  );
}

export default Banneraf;
