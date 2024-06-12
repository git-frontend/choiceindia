import React from "react";
import LazyLoader from '../Common-features/LazyLoader';
import { useState, useEffect } from 'react';
import Slider from "react-slick";
import "../../components/Best-Stocks/best-stock.scss";
import rest from "../../Services/rest";
import utils from "../../Services/utils";
import { API_URLS } from "../../Services/API-URLS";
import loaderimg2 from '../../assets/vedio/loader2.mp4';
import noDataimg from '../../assets/images/no-data.webp';
function OurTrackRecordSaysAll() {

  const [toggleState, setToggleState] = useState(1);
  const [showLoader, setShowLoader] = useState(false);
  const [Data1, setData1] = useState();
  const [checkdevice, setcheckdevice] = useState();
  const [rendercount, setRenderCount] = useState(() => false);
  const [data, setData] = useState(0);
  const [list, setlist] = useState();
  let tokenList = [{}]
  let multiValue = [];
  let AllFilesValue = {};
  let tokens = "";
  let storefile;

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const [view, setView] = useState({
    matches: window.innerWidth < 767 ? false : true,
  });

  function chapterScroll3(id) {
    var element = document.getElementById(id);
    var headerOffset = 140;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }

  const settings = {
    infinite: true,
    speed: 1500,
    arrows: false,
    slidesToShow: 1,
    autoplay: true,
    dots: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,

  };


 


  //for session Id 
  function generateSessionId() {
    let api = new API_URLS()
    fetch(api.getSessionUrl())
      .then(response => {
        return response.json();
      })
      .then(res => {
        if (res.Status == 'Success') {
          IntradayNew(res.Response);
          setData1(res.Response);
        } else {
          IntradayNew([])
        }
      }, err => {
        IntradayNew([])
      })
  }
  //for Intra day
  function IntraStocks(session) {
    setToggleState(1)
    setlist([]);
    tokens = '';
    tokenList = [];
    storefile = '';
    setShowLoader(true)
    let request = {
      "Count": 10,
      "endDate": utils.formatDate(new Date(), "dd-MM-yyyy"),
      "SessionId": session,
      "Start": 0,
      "startDate": utils.formatDate(new Date(new Date().setFullYear(new Date().getFullYear() - 1)), "dd-MM-yyyy"),
      "status": "Book Profit",
      "type": "EQ",
      "UserId": "guest",
      "search": ""
    }
    rest.signalReportData(request).then(
      res => {

        if (res) {
          storefile = res.Response.Data;
          // console.log("storefile",storefile)

          res.Response.Data.forEach(ele => {
            setShowLoader(false)
            tokenList.push({ 'SegmentId': ele.Seg, 'Token': ele.Tok })
            let dateData = ele.TATime;
            if (dateData) {
              let len = dateData.split(" ")
              if (len.length) {
                ele.date = len[0];

              }
            }
            ele.published_date = utils.formatDate(new Date(ele.date.split('-')[2], (ele.date.split('-')[1] - 1), ele.date.split('-')[0]), "dd MMMM'yy")
            ele.call_type = ele.HLType ? (ele.HLType == 'High' ? 'BUY' : (ele.HLType == 'sell' || ele.HLType == 'Low') ? 'SELL' : '') : (ele.Side ? ((['B', 'BUY', 'Buy'].indexOf(ele.Side) > -1) ? 'BUY' : ['S', 'SELL', 'Sell'].indexOf(ele.Side) > -1 ? 'SELL' : '') : '')
            ele['LTP'] = ele['LTP'] / 100;
          });
          setlist(res.Response.Data);
          let unique = []
          for (let i = 0; i < tokenList.length; i++) {
            unique.push(tokenList[i].SegmentId + "@" + tokenList[i].Token + ",");
          }
          unique.forEach(element => {
            if (!tokens.includes(element)) {
              tokens += element
            }
          });
          // console.log("SegmentId",tokens);

          // const tokens = this.utils.generateTokens(this.researchList, 'segment_id', 'token');
          const payload = {
            'UserId': 'guest',
            'SessionId': session,
            'MultipleTokens': tokens
          }

          rest.multipleTokensURLData(payload).then(
            res => {

              if (res && res.Response && res.Response.lMT && res.Response.lMT.length) {
                res.Response.lMT.forEach((ele, index) => {

                  ele['LTP'] = ele['LTP'] / 100;
                  ele.PrevClose = ele.PC / 100;
                  ele.Change = Number(ele.LTP) - Number(ele.PrevClose);
                  ele.ChangePer = (ele.Change * 100) / Number(ele.PrevClose);
                  // storefile.keys(Tok).find(key => Tok[key] === ele.Tok)
                  for (let i = 0; i < storefile.length; i++) {

                    if (storefile[i].Tok == ele.Tok && storefile[i].Seg == ele.Seg) {
                      setShowLoader(false)
                      AllFilesValue = Object.assign(storefile[i], ele);
                      multiValue.push(AllFilesValue)
                    } 
                  }
                })

                setlist(multiValue);

              } else {
                setShowLoader(false)
              }
            }).catch((error) => {
              setShowLoader(false)
              
            });
        }
      }).catch((error) => {
        setShowLoader(false)
        
      });
  }
  //for F and O
  function FandOstocks() {
    setToggleState(2)
    // console.log("change",toggleState)
    setlist([]);
    tokens = '';
    tokenList = [];
    storefile = '';
    setShowLoader(true)
    let request = {

      "end_date": utils.formatDate(new Date(), "yyyy-MM-dd"),
      "is_expert": 0,
      "research_type": "",
      "limit": 10,
      "offset": 0,
      "segment": "FO",
      "start_date": utils.formatDate(new Date(new Date().setFullYear(new Date().getFullYear() - 1)), "yyyy-MM-dd"),
      "status": "Target Achieved",
      "subcategory_id": "",
      "search": "",
      "id": "",
      "user_id": "",
      "timeline_enabled": 1,
      "category_id": 2
    }
    rest.expertReportData(request).then(

      res => {

        if (res) {
          // console.log("checkdd",res.response.research);
          storefile = res.response.research;
          // setlist(res.response.research);

          res.response.research.forEach(ele => {

            tokenList.push({ 'SegmentId': ele.segment_id, 'Token': ele.token })
            ele['LTP'] = ele['LTP'] / 100;
          });

          setlist(res.response.research);
          let unique = []
          for (let i = 0; i < tokenList.length; i++) {
            unique.push(tokenList[i].SegmentId + "@" + tokenList[i].Token + ",");
          }
          unique.forEach(element => {
            if (!tokens.includes(element)) {
              tokens += element
            }
          });
          // console.log("SegmentId",tokens);
          // const tokens = this.utils.generateTokens(this.researchList, 'segment_id', 'token');
          const payload = {
            'UserId': 'guest',
            'SessionId': Data1,
            'MultipleTokens': tokens
          }

          rest.multipleTokensURLData(payload).then(
            res => {
              if (res && res.Response && res.Response.lMT && res.Response.lMT.length) {

                res.Response.lMT.forEach((ele, index) => {
                  // console.log("ele", ele)
                  ele['LTP'] = ele['LTP'] / 100;
                  ele.PrevClose = ele.PC / 100;
                  ele.Change = Number(ele.LTP) - Number(ele.PrevClose);
                  ele.ChangePer = (ele.Change * 100) / Number(ele.PrevClose);
                  // storefile.keys(Tok).find(key => Tok[key] === ele.Tok)
                  for (let i = 0; i < storefile.length; i++) {

                    if (storefile[i].token == ele.Tok && storefile[i].segment_id == ele.Seg) {
                      AllFilesValue = Object.assign(storefile[i], ele);
                      multiValue.push(AllFilesValue)
                      setShowLoader(false)
                    } 
                  }
                })

                setlist(multiValue);

              }
              else {
                setShowLoader(false)
              }
            }).catch((error) => {
              setShowLoader(false)
              
            });
        }
      })

      .catch((error) => {
        setShowLoader(false)
        
      });
  }
  //New 
  function IntradayNew() {
    setToggleState(1)
    // console.log("change",toggleState)
    setlist([]);
    tokens = '';
    tokenList = [];
    storefile = '';
    setShowLoader(true)
    let request = {
      "end_date": utils.formatDate(new Date(), "yyyy-MM-dd"),
      "is_expert": 1,
      "research_type": "intra_day",
      "limit": 10,
      "offset": 0,
      "segment": "",
      "start_date": utils.formatDate(new Date(new Date().setFullYear(new Date().getFullYear() - 1)), "yyyy-MM-dd"),
      "status": "Target Achieved",
      "subcategory_id": "",
      "search": "",
      "id": "",
      "user_id": "",
      "timeline_enabled": 1,
      "category_id": 2
    }
    rest.expertReportData(request).then(

      res => {

        if (res) {
          // console.log("checkdd",res.response.research);
          storefile = res.response.research;
          // setlist(res.response.research);

          res.response.research.forEach(ele => {

            tokenList.push({ 'SegmentId': ele.segment_id, 'Token': ele.token })
            ele['LTP'] = ele['LTP'] / 100;
          });

          setlist(res.response.research);
          let unique = []
          for (let i = 0; i < tokenList.length; i++) {
            unique.push(tokenList[i].SegmentId + "@" + tokenList[i].Token + ",");
          }
          unique.forEach(element => {
            if (!tokens.includes(element)) {
              tokens += element
            }
          });
          // console.log("SegmentId",tokens);
          // const tokens = this.utils.generateTokens(this.researchList, 'segment_id', 'token');
          const payload = {
            'UserId': 'guest',
            'SessionId': Data1,
            'MultipleTokens': tokens
          }

          rest.multipleTokensURLData(payload).then(
            res => {
              if (res && res.Response && res.Response.lMT && res.Response.lMT.length) {

                res.Response.lMT.forEach((ele, index) => {
                  // console.log("ele", ele)
                  ele['LTP'] = ele['LTP'] / 100;
                  ele.PrevClose = ele.PC / 100;
                  ele.Change = Number(ele.LTP) - Number(ele.PrevClose);
                  ele.ChangePer = (ele.Change * 100) / Number(ele.PrevClose);
                  // storefile.keys(Tok).find(key => Tok[key] === ele.Tok)
                  for (let i = 0; i < storefile.length; i++) {

                    if (storefile[i].token == ele.Tok && storefile[i].segment_id == ele.Seg) {
                      AllFilesValue = Object.assign(storefile[i], ele);
                      multiValue.push(AllFilesValue)
                      setShowLoader(false)
                    } 
                  }
                })

                setlist(multiValue);

              }
              else {
                setShowLoader(false)
              }
            }).catch((error) => {
              setShowLoader(false)
              
            });
        }
      })

      .catch((error) => {
        setShowLoader(false)
        
      });
  }

  useEffect(() => {
    setRenderCount(true)
    if (rendercount === true) {
      // generateSessionId()
      FandOstocks()
    }
  }, [rendercount])



  useEffect(() => {
   
   
    if (/Android|BlackBerry|IEMobile|IEMobile|Opera Mini|CriOS/i.test(navigator.userAgent)) {

      setcheckdevice('https://play.google.com/store/apps/details?id=com.choiceequitybroking.jiffy')

    } else if (/iPod|iPhone|iPad/i.test(navigator.userAgent)) {

      setcheckdevice('https://apps.apple.com/us/app/jiffy-mobile-trading-app/id1327801261?ls=1')

    } else if (/webOS|windows/i.test(navigator.userAgent)) {
      setcheckdevice('https://finx.choiceindia.com/auth/login')
    }
    else {
      setcheckdevice('https://finx.choiceindia.com/auth/login')

    }
  }, [])
  useEffect(() => {
    let mediaQuery = window.matchMedia("(min-width: 767px)");
    mediaQuery.addListener(setView);
    // this is the cleanup function to remove the listener
    return () => mediaQuery.removeListener(setView);
  }, [])
  return (
    <div>
      <div>
        <section className="track-record-sec">
          <div className="container">
            <div className="row d-flex justify-content-center ">
              <div className="col-md-12 ">
                <div>
                  <h2 className="title-first">Our Track Record Says It All</h2>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <ul className="list-group list_group1">
                  <li className={toggleState === 1 ? "list-group-item list listsec" : "list-group-item list"}
                    onClick={generateSessionId}> Intraday</li>
                  <li className={toggleState === 2 ? "list-group-item list listsec" : "list-group-item list"}
                    onClick={FandOstocks}>F&O </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="main-parent">
            <div className="container">
              <div className="content-tabs active-content content">
                <div
                  className="content">
                  <div className="row d-flex justify-content-center">
                    <div className="col-md-12">


                      {
                        view && !view.matches ?
                          <div>
                            {
                              list && list.length ?
                                <Slider {...settings} className='awarded-card'>
                                  {
                                    (list || []).slice(0, 6).map((response, index) => {
                                      return (
                                        <div className="col-xl-6" key={index}>
                                          <div className="main-left">
                                            <div className="top-section">
                                              <div className="top-left">
                                                <h6 className="top-text">Stop Loss</h6>
                                                {
                                                  toggleState == 1 ?
                                                    <div><h6 className="top-date">{utils.formatDate(new Date(response?.updated_datetime), "dd MMMM , yyyy")}</h6></div>
                                                    :
                                                    <div><h6 className="top-date">{(response?.updated_datetime)}</h6></div>
                                                }
                                              </div>
                                              {
                                                toggleState == 1 ?
                                                  <div className="top-right"><button onClick={()=>{chapterScroll3('dematform')}} className={"btn-buy " + ((response.call_type == "Sell") ? " sellbtn" : " buybtn")} > {response?.call_type}</button></div>
                                                  :
                                                  <div className="top-right"><button onClick={()=>{chapterScroll3('dematform')}} className={"btn-buy " + ((response.call_type == "Sell") ? " sellbtn" : " buybtn")} > {response?.call_type}</button></div>
                                              }


                                            </div>
                                            <div className="middle-section">
                                              <div className="middle-left">
                                                {
                                                  toggleState == 1 ?
                                                    <div><h4 className="big-text">{response?.scrip_symbol}</h4>
                                                      <span className="small-text">{response?.scrip_name}</span></div>
                                                    :
                                                    <div> <h4 className="big-text">{(response?.scrip_name).replace(/(\|\d{2}[A-Z]{3}\d{2})/, '')}</h4>
                                                      <span className="small-text">{response?.scrip_s_expiry}</span></div>
                                                }
                                              </div>
                                              <div className="middle-right">
                                                <span className="right-big-text">{response?.LTP ?((response?.LTP).toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ","):0.00.toFixed(2)}</span>
                                                <h6 className={"right-small-text " + ((response?.ChangePer < 0) ? 'text_red' : (response.ChangePer > 0) ? 'text_green' : '')}>
                                                  {`${response?.ChangePer < 0 ? '-' : ''}${Math.abs(response.Change || 0).toFixed(2)} (${response?.ChangePer < 0 ? '-' : ''}${Math.abs(response?.ChangePer || 0).toFixed(2)}%)`}</h6>
                                              </div>
                                            </div>
                                            {
                                              toggleState == 1 ?
                                                <div className="bottom-section">
                                                   <div className="bottom">
                                                        <h6 className="bottom_small_text">Stop Loss</h6>
                                                        <h4 className="bottom_big_text">{(parseFloat((response?.datapoints || [])[2].value))}</h4>
                                                      </div>
                                                      <div className="bottom">
                                                        <h6 className="bottom_small_text">Entry Price</h6>
                                                        <h4 className="bottom_big_text" >{(parseFloat((response?.datapoints || [])[0].value))}</h4>
                                                      </div>
                                                      <div className="bottom">
                                                        <h6 className="bottom_small_text">Target Price</h6>
                                                        <h4 className="bottom_big_text">{(parseFloat((response?.datapoints || [])[1].value))}</h4>
                                                      </div>
                                                  {/* <div className="bottom">
                                                    <h6 className="bottom_small_text">2nd Target Price</h6>
                                                    <h4 className="bottom_big_text">{((response?.TP2 / 100).toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h4>
                                                  </div>
                                                  <div className="bottom">
                                                    <h6 className="bottom_small_text">3rd Target Price</h6>
                                                    <h4 className="bottom_big_text">-</h4>
                                                  </div> */}
                                                </div>
                                                :
                                                <div className="bottom-section">
                                                  <div className="bottom">
                                                    <h6 className="bottom_small_text">Stop Loss</h6>
                                                    <h4 className="bottom_big_text">{(parseFloat((response?.datapoints || [])[2].value).toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h4>
                                                  </div>
                                                  <div className="bottom">
                                                    <h6 className="bottom_small_text">Entry Price</h6>
                                                    <h4 className="bottom_big_text" >{(parseFloat((response?.datapoints || [])[0].value).toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h4>
                                                  </div>
                                                  <div className="bottom">
                                                    <h6 className="bottom_small_text">Target Price</h6>
                                                    <h4 className="bottom_big_text">{(parseFloat((response?.datapoints || [])[1].value).toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h4>
                                                  </div>
                                                  {/* <div className="bottom">
                                              <h6 className="bottom_small_text">2nd Target Price</h6>
                                              <h4 className="bottom_big_text">{((response?.TP2 / 100).toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h4>
                                            </div>
                                            <div className="bottom">
                                              <h6 className="bottom_small_text">3rd Target Price</h6>
                                              <h4 className="bottom_big_text">-</h4>
                                            </div> */}
                                                </div>
                                            }

                                          </div>
                                        </div>
                                      )
                                    })
                                  }
                                </Slider>
                                : <div className="text-center">
                                  <video src={loaderimg2} autoPlay loop muted className='img-fluid d-block mx-auto' height={100} width={100} />
                                </div>}
                          </div>

                          :
                          <div>
                            {showLoader ?

                              <div className="text-center">
                                <div>
                                  {/* <img src={loaderimg2} className="img-fluid d-block mx-auto" alt='loading' height={250} width={250} />  */}
                                  <video src={loaderimg2} autoPlay loop muted className='img-fluid d-block mx-auto' height={100} width={100} />
                                </div>
                              </div> :
                              <div>
                                {
                                  list && list.length ?
                                    <div className="row gx-5">
                                      {
                                        (list || []).slice(0, 4).map((response, index) => {


                                          return (
                                            <div className="col-xl-6" key={index}>
                                              <div className="main-left">
                                                <div className="top-section">
                                                  <div className="top-left">
                                                    <h6 className="top-text">Stop Loss</h6>
                                                    {
                                                      toggleState == 1 ?
                                                        <div><h6 className="top-date">{utils.formatDate(new Date(response?.updated_datetime), "dd MMMM , yyyy")}</h6></div>
                                                        :
                                                        <div><h6 className="top-date">{(response?.updated_datetime)}</h6></div>
                                                    }
                                                  </div> 

                                                  {
                                                    toggleState == 1 ?
                                                      <div className="top-right"><button onClick={()=>{chapterScroll3('dematform')}} className={"btn-buy " + ((response.call_type == "SELL") ? " sellbtn" : " buybtn")} > {response?.call_type}</button></div>
                                                      :
                                                      <div className="top-right"><button  onClick={()=>{chapterScroll3('dematform')}} className={"btn-buy " + ((response.call_type == "Sell") ? " sellbtn" : " buybtn")} > {response?.call_type}</button></div>
                                                  }
                                                </div>
                                                <div className="middle-section">
                                                  <div className="middle-left">
                                                    {
                                                      toggleState == 1 ?
                                                        <div><h4 className="big-text">{response?.scrip_symbol}</h4>
                                                          <span className="small-text">{response?.scrip_name}</span></div>
                                                        :
                                                        <div> <h4 className="big-text">{(response?.scrip_name).replace(/(\|\d{2}[A-Z]{3}\d{2})/, '')}</h4>
                                                          <span className="small-text">{response?.scrip_s_expiry}</span></div>
                                                    }
                                                  </div>
                                                  <div className="middle-right">
                                                    <span className="right-big-text">{response?.LTP ?((response?.LTP).toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ","):0.00.toFixed(2)}</span>
                                                    <h6 className={"right-small-text " + ((response?.ChangePer < 0) ? 'text_red' : (response.ChangePer > 0) ? 'text_green' : '')}>
                                                      {`${response?.ChangePer < 0 ? '-' : ''}${Math.abs(response.Change || 0).toFixed(2)} (${response?.ChangePer < 0 ? '-' : ''}${Math.abs(response?.ChangePer || 0).toFixed(2)}%)`}</h6>
                                                  </div>
                                                </div>
                                                {
                                                  toggleState == 1 ?
                                                    <div className="bottom-section">
                                                      <div className="bottom">
                                                        <h6 className="bottom_small_text">Stop Loss</h6>
                                                        <h4 className="bottom_big_text">{(parseFloat((response?.datapoints || [])[2].value))}</h4>
                                                      </div>
                                                      <div className="bottom">
                                                        <h6 className="bottom_small_text">Entry Price</h6>
                                                        <h4 className="bottom_big_text" >{(parseFloat((response?.datapoints || [])[0].value))}</h4>
                                                      </div>
                                                      <div className="bottom">
                                                        <h6 className="bottom_small_text">Target Price</h6>
                                                        <h4 className="bottom_big_text">{(parseFloat((response?.datapoints || [])[1].value))}</h4>
                                                      </div>
                                                      {/* <div className="bottom">
                                                        <h6 className="bottom_small_text">2nd Target Price</h6>
                                                        <h4 className="bottom_big_text">{((response?.TP2 / 100).toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h4>
                                                      </div>
                                                      <div className="bottom">
                                                        <h6 className="bottom_small_text">3rd Target Price</h6>
                                                        <h4 className="bottom_big_text">-</h4>
                                                      </div> */}
                                                    </div>
                                                    :
                                                    <div className="bottom-section">
                                                      <div className="bottom">
                                                        <h6 className="bottom_small_text">Stop Loss</h6>
                                                        <h4 className="bottom_big_text">{(parseFloat((response?.datapoints || [])[2].value).toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h4>
                                                      </div>
                                                      <div className="bottom">
                                                        <h6 className="bottom_small_text">Entry Price</h6>
                                                        <h4 className="bottom_big_text" >{(parseFloat((response?.datapoints || [])[0].value).toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h4>
                                                      </div>
                                                      <div className="bottom">
                                                        <h6 className="bottom_small_text">Target Price</h6>
                                                        <h4 className="bottom_big_text">{(parseFloat((response?.datapoints || [])[1].value).toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h4>
                                                      </div>
                                                      {/* <div className="bottom">
                                                <h6 className="bottom_small_text">2nd Target Price</h6>
                                                <h4 className="bottom_big_text">{((response?.TP2 / 100).toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h4>
                                              </div>
                                              <div className="bottom">
                                                <h6 className="bottom_small_text">3rd Target Price</h6>
                                                <h4 className="bottom_big_text">-</h4>
                                              </div> */}
                                                    </div>
                                                }

                                              </div>
                                            </div>
                                          )
                                        })
                                      }
                                  
                                    </div>
                                    :
                                    <div className="text-center">
                                      <LazyLoader src={noDataimg} className="img-fluid" alt='No Data Found' height={250} width={250} />
                                    </div>
                                }
                              </div>
                            }

                          </div>}

                    </div>
                  </div>

                </div>
        

              </div>
            </div>
          </div>
        </section>



      </div>



    </div>
  );
}

export default OurTrackRecordSaysAll;
