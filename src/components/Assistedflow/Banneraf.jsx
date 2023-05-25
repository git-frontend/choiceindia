import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import LazyLoader from "../Common-features/LazyLoader";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import Redirect from "../../assets/images/aof/redirect-arrow.gif";
import ThumbUp from "../../assets/images/aof/thumb-up.gif";
import {faClose} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  BrowserRouter as Router,
  Link,
  useParams,
  useLocation,
} from "react-router-dom";

import AssistedFlowService from "../../Services/AssistedFlowService";
import Basket from "../Basket/Basket";
import loaderimg2 from "../../assets/vedio/loader2.mp4";
import utils from "../../Services/utils";
import Modal from "react-bootstrap/Modal";
import noDataimg from "../../assets/images/no-data.webp";
import IntraChargesBenifits from "../Intraday-Charges/IntraChargesBenifits";

function Banneraf() {
  const [showFirstButton, setShowFirstButton] = useState(true);
  const [showSecondDiv, setShowSecondDiv] = useState(false);
  const [showThirdDiv, setShowThirdDiv] = useState(false);
  const [name, setName] = useState("hideform");
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
  const [OtpValue, setOtpValue] = useState(null);

  /**variable for mobile number */
  const [mobileNumber, setMobileNumber] = useState(null);

  const [email, setEmail] = useState(null);

  /**variable for timer */
  const [count, setCount] = useState(0);

  /**variable for loaders */
  const [loaders, setLoaders] = useState({
    SendOtpLoader: false,
    reSendOtpLoader: false,
    verifyLoader: false
  });

  /**to get URL query params */
  const search = useLocation().search;

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

  /**Query Params Data */
  // const userDetails = { uniqueId: new URLSearchParams(search).get('order_unique_id').replaceAll(' ', '+').toString(), bucketId: new URLSearchParams(search).get('bucketId').replaceAll(' ', '+').toString(), clientId: new URLSearchParams(search).get('clientId').replaceAll(' ', '+').toString(), rmId: new URLSearchParams(search).get('rm_id') ? new URLSearchParams(search).get('rm_id').replaceAll(' ', '+').toString() : null, subjectId: new URLSearchParams(search).get('subid') ? new URLSearchParams(search).get('subid').replaceAll(' ', '+').toString() : null, };

  const details = new URLSearchParams(search).get("eid")
    ? JSON.parse(
        JSON.stringify(
          utils.decryptText(
            new URLSearchParams(search).get("eid").replaceAll(" ", "+")
          )
        )
      )
    : {};
  const [userDetails, setUserDetails] = useState(null);

  const [userStatus, setUserStatus] = useState(
    new URLSearchParams(search).get("status")
  );

//   const [verifyLoader, setVerifyLoader] = useState(false);

  const [dataNotFound, setDataNotFound] = useState(false);

  // const [isLast , setIsLast] = useState(0);

  // const [RefNo, setIsRefNo] = useState(() => null);

  let increment;

  let isLast = 0;

  /**to show client popup */
  useEffect(() => {
    // let status = new URLSearchParams(search).get('status');
    if (userStatus && userStatus == "success") {
      setShowPopUp(() => "ClientFlow");
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", getPosition);
  }, []);

  /**Basket Listing API call */
  useEffect(() => {
    // console.log('status',userStatus)
    setTrigger(true);
    setUserDetails(() => JSON.parse(details));
    console.log('userdetails', details)
    if (trigger) {
      setDataNotFound(() => false);
      let payload = {
        order_unique_id: userDetails.orderUniqueId
          ? userDetails.orderUniqueId
          : "",
        client_id: userDetails.clientId ? userDetails.clientId : "",
      };

      AssistedFlowService.BasketDetails(payload)
        .then((res) => {
          // console.log('deetails', res);
          if (res && res.data && res.data.Body && res.data.Body.data) {
            setDataNotFound(() => false);
            setBasketData(() => (res.data.Body.data ? res.data.Body.data : {}));
            refCallAPI();
          } else {
            setDataNotFound(() => true);
          }
        })
        .catch((error) => {
          console.log(error);
          setDataNotFound(() => true);
        });
    }
  }, [trigger]);

  function refCallAPI(bucketType, isOrder) {
    //Reference Number API Call
    AssistedFlowService.RefNo(
      utils.decryptText(userDetails.clientId).toString()
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
    setOtpValue(() => null);
    setisModalClose(() => true)

    if (isResend) {
      document.getElementById("partitioned").value = "";
      setLoaders({ ...loaders, reSendOtpLoader: false });
    } else {
      setLoaders({ ...loaders, SendOtpLoader: false });
    }

    sendOtp(isResend ? isResend : false);
  }

  /**function for send otp */
  function sendOtp(isResend) {
    setErrors(() => null);
    if (isResend) {
      setLoaders({ ...loaders, reSendOtpLoader: true });
    } else {
      setLoaders({ ...loaders, SendOtpLoader: true });
    }

    let payload = {
      ClientID: userDetails.clientId
        ? utils.decryptText(userDetails.clientId)
        : "",
      Source: "connect",
      DeviceOs: "Web",
      AppSignature: "",
      BasketId: userDetails.bucketId
        ? utils.decryptText(userDetails.bucketId)
        : "",
      SubID: "", // investica subscriptionId
      SubType: "Basket",
      Token: token ? token : new Date().getTime(),
      IsResend: isResend ? isResend : false,
      SubjectId: userDetails.subId ? utils.decryptText(userDetails.subId) : "",
      OrderUniqueID: userDetails.orderUniqueId
        ? utils.decryptText(userDetails.orderUniqueId)
        : "",
    };

    AssistedFlowService.SendOTP(payload)
      .then((response) => {
        if (response && response.data && response.data.Response) {
            setLoaders({...loaders, verifyLoader: false});
          if (isResend) {
            setLoaders({ ...loaders, reSendOtpLoader: false });
          } else {
            setLoaders({ ...loaders, SendOtpLoader: false });
          }
          setShowFirstButton(false);
          setShowSecondDiv(true);
          setCount(30);
        }
        let mobileNo;
        let emailId;
        let emailId2;
        let pattern = /[0-9]{8,10}/i;
        let pattern2 = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/i;
        let index ; 
        mobileNo = response.data.Response.toString();
        mobileNo = (mobileNo.match(pattern) && mobileNo.match(pattern).length > 0) ? mobileNo.match(pattern)[0].toString() : '';
        emailId =  (response.data.Response.match(pattern2) && response.data.Response.match(pattern2).length > 0) ? response.data.Response.match(pattern2)[0].toString() : '';
        index = emailId.indexOf('@');
        mobileNo = (mobileNo.length > 0) ? (mobileNo.charAt(0) + mobileNo.charAt(1) + '******' + mobileNo.charAt(8) + mobileNo.charAt(9)) : '';

        emailId2 = (emailId && emailId.length > 0) ? (emailId.charAt(0) + emailId.charAt(1)+ '*****' + emailId.charAt(index-2) + emailId.charAt(index-1) + emailId.substring(index)) : '';
        setMobileNumber(() => (mobileNo ? mobileNo : null));
        setEmail(() => emailId2? emailId2 : null);
      })
      .catch((error) => {
        if (isResend) {
          setLoaders({ ...loaders, reSendOtpLoader: false });
        } else {
          setLoaders({ ...loaders, SendOtpLoader: false });
        }
        setErrors(() =>
          error.message ? error.message : "Something Went Wrong"
        );
      });
  }

  /**Verify OTP */
  const submitOTP = () => {
    setErrors(() => null);
    setLoaders({...loaders, verifyLoader: true, SendOtpLoader: false, reSendOtpLoader: false});
    setCount(0);
    let payload = {
      ClientId: userDetails.clientId
        ? utils.decryptText(userDetails.clientId)
        : "",
      OTP: OtpValue ? OtpValue : "",
      Source: "connect",
      DeviceOs: "Web",
      BasketId: userDetails.bucketId
        ? utils.decryptText(userDetails.bucketId)
        : "",
      SubID: "",
      SubType: "Basket",
      Token: token ? token : new Date().getTime(),
      SubjectId: userDetails.subId ? utils.decryptText(userDetails.subId) : "",
      OrderUniqueID: userDetails.orderUniqueId
        ? utils.decryptText(userDetails.orderUniqueId)
        : "",
    };

    AssistedFlowService.VerifyOTP(payload)
      .then((response) => {
        // console.log('Verifyresponse', response);
        // setVerifyLoader(() => false);
        if (response && response.data && response.data.Response) {
          refCallAPI(BasketData.bucket_type, true);
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
          setLoaders({...loaders, verifyLoader: false});
          setErrors(() =>
            response.data.Reason ? response.data.Reason : "Something Went Wrong"
          );
        }
      })
      .catch((error) => {
        setLoaders({...loaders, verifyLoader: false});
        setErrors(() =>
          error.message ? error.message : "Something Went Wrong"
        );
        console.log(error);
      });
  };

  /**to place LumpSumOrder */
  function placeLumpSumOrder(refNo) {
    // console.log('funddata', fundData);
    increment = ("0000" + (parseInt(refNo) + 1)).slice(-5);
    // increment = parseInt(refNo + 1);
    let clientId = userDetails.clientId
      ? utils.decryptText(userDetails.clientId)
      : "";
    let payload = {
      TransCode: "NEW",
      TransNo: "",
      OrderId: "",
      Client: clientId,
      SchemeCD: BasketData.list_fund_data[isLast].BSESchemeCode,
      SchemeName: "",
      BS: "P",
      BSType: "FRESH",
      DPTxn: "P",
      Amt: parseInt(BasketData.list_fund_data[isLast].FundA),
      Qty: "",
      AllRedeem: "N",
      FolioNo: "",
      RefNo: increment,
      Remarks: "Web|" + BasketData.bucket_title,
      OrderStatus: "",
      Reason: "",
      TimeStamp: "",
      FinalStatus: "",
      ActualOrderId: "",
      SchemePlanCode: BasketData.list_fund_data[isLast].FundPlanCode,
      SubscriptionId: "wb" + clientId + new Date().getTime(),
      SubscriptionType: "Basket",
      Id: BasketData.bucket_id ? BasketData.bucket_id : "",
      Name: BasketData.bucket_title ? BasketData.bucket_title : "",
      OTP: OtpValue ? OtpValue : "",
      Token: token ? token : new Date().getTime(),
      RmBasketId: BasketData.bucket_id ? BasketData.bucket_id : "",
      RmBasketName: BasketData.bucket_title ? BasketData.bucket_title : "",
      SubjectId: userDetails.subId ? utils.decryptText(userDetails.subId) : "",
      Source: "connect",
      OrderUniqueID: userDetails.orderUniqueId
        ? utils.decryptText(userDetails.orderUniqueId)
        : "",
    };

    AssistedFlowService.Lumpsum(payload)
      .then((response) => {
        // console.log('Lumpsum', response)

        if (
          response &&
          response.data &&
          response.data.OrderStatus &&
          response.data.OrderStatus == "SUCCESS" &&
          isLast < BasketData.list_fund_data.length - 1
        ) {
          isLast = isLast + 1;
          // setIsLast(() => isLast + 1);
          placeLumpSumOrder(increment);
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
        else if (
          response &&
          response.data &&
          response.data.OrderStatus &&
          response.data.OrderStatus == "SUCCESS" &&
          isLast >= BasketData.list_fund_data.length - 1
        ) {
          generatePaymentLink();
        } else {
          setLoaders({...loaders, verifyLoader: false});
          setErrors(() =>
            response && response.data && response.data.Reason
              ? response.data.Reason
              : "Something Went Wrong"
          );
        }
      })
      .catch((error) => {
        console.log(error);
        setLoaders({...loaders, verifyLoader: false});
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

    const formattedToday = dd + "/" + mm + "/" + yyyy;

    // let refNo = parseInt(OrderMetaData.refNo);
    // refNo = refNo + 1;
    //  setIsRefNo(RefNo + 1);
    increment = ("0000" + (parseInt(refNo) + 1)).slice(-5);
    // increment = parseInt(refNo + 1);
    let clientId = userDetails.clientId
      ? utils.decryptText(userDetails.clientId)
      : "";

    let payload = {
      TransCode: "NEW",
      TransNo: "",
      OrderId: "",
      Client: clientId,
      SchemeCD: BasketData.list_fund_data[isLast].BSESchemeCode, // "SchemeCD": fundData.BSESchemeCode ? fundData.BSESchemeCode
      BS: "P",
      BSType: "FRESH",
      DPTxn: "P",
      Amt: BasketData.list_fund_data[isLast].FundA, //fundData.FundA ? parseInt(fundData.FundA): '',
      Qty: "",
      AllRedeem: "N",
      FolioNo: "",
      RefNo: increment,
      Remarks: "Web|" + BasketData.bucket_title,
      SchemeType: null,
      AMCCode: "",
      AMCName: "",
      Brokerage: "",
      Firstorderflag: "Y",
      Freq: "MONTHLY",
      IPAddress: "",
      ISIPMandateId: "",
      IsInflationAdjusted: "",
      NoOfInstallments: 999,
      RiskProfileID: "",
      StartDate: formattedToday,
      SubscriptionId: "wb" + clientId + new Date().getTime(),
      SubscriptionType: "Basket",
      Id: BasketData.bucket_id ? BasketData.bucket_id : "",
      Name: BasketData.bucket_title ? BasketData.bucket_title : "",
      TransMode: "P",
      XSIPMandateId: BasketData.mandate_id ? BasketData.mandate_id : "",
      Source: "connect",
      OTP: OtpValue ? OtpValue : "",
      Token: token ? token : new Date().getTime(),
      RmBasketId: BasketData.bucket_id ? BasketData.bucket_id : "",
      RmBasketName: BasketData.bucket_title ? BasketData.bucket_title : "",
      SubjectId: userDetails.subId ? utils.decryptText(userDetails.subId) : "",
      OrderUniqueID: userDetails.orderUniqueId
        ? utils.decryptText(userDetails.orderUniqueId)
        : "",
    };

    AssistedFlowService.XSIP(payload)
      .then((response) => {
        // console.log("XSIP respone", response);
        if (
          response &&
          response.data &&
          response.data.OrderStatus &&
          response.data.OrderStatus == "SUCCESS" &&
          isLast < BasketData.list_fund_data.length - 1
        ) {
          isLast = isLast + 1;
          // setIsLast(() => isLast + 1);
          placeSIPOrder(increment);
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
        else if (
          response &&
          response.data &&
          response.data.OrderStatus &&
          response.data.OrderStatus == "SUCCESS" &&
          isLast >= BasketData.list_fund_data.length - 1
        ) {
          generatePaymentLink();
        } else {
            setLoaders({...loaders, verifyLoader: false});
          setErrors(() =>
            response && response.data && response.data.Reason
              ? response.data.Reason
              : "Something Went Wrong"
          );
        }
      })
      .catch((error) => {
        console.log(error);
        setLoaders({...loaders, verifyLoader: false});
        setErrors(() => (error.message ? error.message : ""));
      });
  }

  /**api call for generate payment link */
  function generatePaymentLink() {
    let payload = {
      Client: userDetails.clientId
        ? utils.decryptText(userDetails.clientId).toString()
        : "",
      IsDirect: "N",
      // "LogoutURL": (window.location.origin + window.location.pathname + '?' + 'status=success').toString()
      LogoutURL: window.location.href + "&" + "status=success",
    };

    AssistedFlowService.PaymentLink(payload)
      .then((response) => {
        console.log("paymentlinkresponse", response);
        if (response && response.data && response.data.Response) {
          console.log("userdetails", userDetails);
          /**for RM if subId is present in URL */
          if (userDetails.subId) {
            setLoaders({...loaders, verifyLoader: false});
            setPaymentLink(() =>
              response.data.Response ? response.data.Response : ""
            );
            setShowPopUp(() => "RMFlow");
          } else {
             setLoaders({...loaders, verifyLoader: false});
            setPaymentLink(() =>
              response.data.Response ? response.data.Response : ""
            );
            // setShowPopUp(() => 'ClientFlow')
          }

          UpdateOrderStatus(response.data.Response);
        }
      })
      .catch((error) => {
        console.log(error);
        setLoaders({...loaders, verifyLoader: false});
        setErrors(() => (error.message ? error.message : ""));
      });
  }

  /**api call for order status update */
  function UpdateOrderStatus(paymntLink) {
    let payload = {
      order_unique_id: userDetails.orderUniqueId
        ? utils.decryptText(userDetails.orderUniqueId)
        : "",
      client_id: userDetails.clientId ? utils.decryptText(userDetails.clientId) : '',
      bucket_id: BasketData.bucket_id? BasketData.bucket_id : "",
      status: "payment_pending",
      order_date: "",
      payment_type: "Cash",
      link: paymntLink,
      action_by: "",
    };

    AssistedFlowService.OrderStatus(payload)
      .then((response) => {
        console.log("order status reponse", response);
        setLoaders({...loaders, verifyLoader: false});
        if (response && response.data && response.data.StatusCode == 200) {
          if (!userDetails.subId) {
            setShowSecondDiv(false);
            setShowThirdDiv(true);
            setTimeout(() => {
              window.open(paymntLink, "_self");
            }, 3000);
          }else{
            closesection();
          }
        } else {
          setLoaders({...loaders, verifyLoader: false});
          setErrors(() =>
            response.data.Message
              ? response.data.Message
              : "Something Went Wrong"
          );
        }
      })
      .catch((error) => {
        console.log(error);
        setLoaders({...loaders, verifyLoader: false});
        setErrors(() =>
          error.response.data.Message
            ? error.response.data.Message
            : "Something Went Wrong"
        );
      });
  }

  /**handle otp change */
  function handleOTP(event) {
    setOtpValue(() => (event.target.value ? event.target.value : null));
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
    selBox.value = msg + msg2 + paymentLink.toString() + msg3 ;
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
  
  function closesection(){
    setErrors(() => null);
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
                        {BasketData.bucket_title ? BasketData.bucket_title : "NA"}
                      </p>
                      <p className="profile">
                        {BasketData.bucket_type ? BasketData.bucket_type : "NA"}
                      </p>
                    </>
                    :
                    <>
                      <p className="subhead">
                        {BasketData.bucket_title ? BasketData.bucket_title : "NA"}
                      </p>
                      <p className="profile">
                        {userDetails.clientId
                          ? utils.decryptText(userDetails.clientId)
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
                      {BasketData.list_fund_data.map((item, index) => {
                        return (
                          <>
                            <div className="rowwrap" key={index}>
                              <div className="name">
                                {item.FundName ? item.FundName : "NA"}
                              </div>
                              <div className="textwrap">
                                <div className="numberwrap">
                                  <div className="number">
                                    {item.ThreeYrNavper ? parseInt(item.ThreeYrNavper).toFixed(2) : "NA"}
                                  </div>
                                  <p className="percent">3 yrs Returns %</p>
                                </div>
                                <div className="amount">
                                  <div className="rupee">
                                    ₹ {item.FundA ? item.FundA : "NA"}
                                  </div>
                                  <p className="text">Amount</p>
                                </div>
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
                                {userDetails.clientId
                                  ? utils.decryptText(userDetails.clientId)
                                  : "NA"}
                              </p>
                            </div>
                            <div className="amtwrap">
                              <p className="investmentamount">
                                Total Investment Amount
                              </p>
                              <p className="amountrs">
                                ₹{" "}
                                {BasketData.bucket_min_amt
                                  ? BasketData.bucket_min_amt
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
                                        userDetails.subId ? 
                                          <p className="subtext">
                                            Code sent to client’s registered
                                            mobile number +91 {mobileNumber} 
                                            {
                                              email? <span> and Email {email}</span> : ""
                                            }
                                          </p>
                                          :
                                          <p className="subtext">
                                            Code sent to your registered
                                            mobile number +91 {mobileNumber}
                                            {
                                              email? <span> and Email {email}</span> : ""
                                            }
                                          </p> 
                                    }                      

      
                              </div>

                              <div id="divOuter">
                                <div id="divInner">
                                  <input
                                    type="tel"
                                    formcontrolname="otpValue"
                                    id="partitioned"
                                    maxLength="6"
                                    onKeyPress={(event) => {
                                      if (!/[0-9]/.test(event.key)) {
                                        event.preventDefault();
                                      }
                                    }}
                                    onChange={(e) => handleOTP(e)}
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
                  <p className="subtext">
                    Copy &amp; Share link with Client - <b>{userDetails && userDetails.clientId
                                  ? utils.decryptText(userDetails.clientId)
                                  : ""}</b> to complete the payment.
                  </p>
                  <div className="rightbtn">
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
          </div>
        </section>
      </div>
    </>
  );
}

export default Banneraf;
