
// import React from 'react';
import React from "react";
import { useState, useEffect } from 'react';
import '../Best-Stocks/best-stock.scss';
import Slider from 'react-slick';
import rest from "../../Services/rest";
import utils from "../../Services/utils";
import { API_URLS } from "../../Services/API-URLS";
import noDataimg from '../../assets/images/no-data.webp';
import loaderimg2 from '../../assets/vedio/loader2.mp4';
function ResearchCalls() {
  const [list, setlist] = useState();
  const [showLoader, setShowLoader] = useState(false);
  const [trigger, setTrigger] = useState(false);

  const [Data1, setData1] = useState();
  const [checkdevice, setcheckdevice] = useState();
  let tokenList = [{}]
  let multiValue = [];
  let AllFilesValue = {};
  let tokens = "";
  let storefile;
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
  function FandOstocks() {
    // setToggleState(2)
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
      "segment": "COM",
      "start_date": utils.formatDate(new Date(new Date().setFullYear(new Date().getFullYear() - 1)), "yyyy-MM-dd"),
      "status": "Target Achieved",
      "subcategory_id": "",
      "search": "",
      "id": "",
      "user_id": "",
      "timeline_enabled": 1,
      "category_id": 2
    }
   
    rest.fetchReportData(request,setShowLoader,setlist,Data1);
   
    // rest.expertReportData(request).then(

    //   res => {

    //     if (res) {
    //       // console.log("checkdd",res.response.research);
    //       storefile = res.response.research;
    //       // setlist(res.response.research);
    //       // console.log("storefile", storefile)
    //       res.response.research.forEach(ele => {

    //         tokenList.push({ 'SegmentId': ele.segment_id, 'Token': ele.token })
    //         ele['LTP'] = ele['LTP'] / 100;
    //       });

    //       setlist(res.response.research);
    //       let unique = []
    //       for (let i = 0; i < tokenList.length; i++) {
    //         unique.push(tokenList[i].SegmentId + "@" + tokenList[i].Token + ",");
    //       }
    //       unique.forEach(element => {
    //         if (!tokens.includes(element)) {
    //           tokens += element
    //         }
    //       });
    //       // console.log("SegmentId",tokens);
    //       // const tokens = this.utils.generateTokens(this.researchList, 'segment_id', 'token');
    //       const payload = {
    //         'UserId': 'guest',
    //         'SessionId': Data1,
    //         'MultipleTokens': tokens
    //       }

    //       rest.multipleTokensURLData(payload).then(
    //         res => {
    //           if (res && res.Response && res.Response.lMT && res.Response.lMT.length) {

    //             res.Response.lMT.forEach((ele, index) => {
    //               // console.log("ele", ele)
    //               ele['LTP'] = ele['LTP'] / 100;
    //               ele.PrevClose = ele.PC / 100;
    //               ele.Change = Number(ele.LTP) - Number(ele.PrevClose);
    //               ele.ChangePer = (ele.Change * 100) / Number(ele.PrevClose);
    //               // storefile.keys(Tok).find(key => Tok[key] === ele.Tok)
    //               for (let i = 0; i < storefile.length; i++) {

    //                 if (storefile[i].token == ele.Tok && storefile[i].segment_id == ele.Seg) {
    //                   AllFilesValue = Object.assign(storefile[i], ele);
    //                   multiValue.push(AllFilesValue)
    //                   setShowLoader(false)
    //                 } else {



    //                 }
    //               }
    //             })

    //             setlist(multiValue);

    //           }

    //        else {

    //             setShowLoader(false)

    //           }

    //         }).catch((error) => {

    //           setShowLoader(false)

              

    //         });
    //     }
    //   })

    //   .catch((error) => {
    //     setShowLoader(false)
    //     setlist([]);
    //   });
  }
  function generateSessionId() {
    let api = new API_URLS()
    fetch(api.getSessionUrl())
      .then(response => {
        return response.json();
      })
      .then(res => {
        if (res.Status == 'Success') {
          // IntraStocks(res.Response);
          setData1(res.Response);
        } else {
          // IntraStocks([])
        }
      }, err => {
        // IntraStocks([])
      })
  }
  useEffect(() => {

    setTrigger(true)

    if (trigger === true) {
      FandOstocks();
    }
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
  }, [trigger])
  const settings = {
    infinite: true,
    speed: 1500,
    slidesToShow: 2,
    arrows: false,
    autoplay: true,
    dots: false,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [

      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          dots: false,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        }
      }

    ]

  };
  useEffect(() => {
    let mediaQuery = window.matchMedia("(min-width: 767px)");
    mediaQuery.addListener(setView);
    // this is the cleanup function to remove the listener
    return () => mediaQuery.removeListener(setView);
  }, [])
  return (
    <>
      <section className="research-calls main-parent" id="showForm">
        <div className="container">
          <h2 className="title-first research-title">Our Recent Research Calls</h2>
          <div className="col-md-12">
            {
              view && !view.matches ?
                <div>
                  {
                    list && list.length ?
                      <Slider {...settings} className="research-calls-tab">
                        {
                          (list || []).slice(0, 2).map((response, index) => {
                            return (
                              // <div className="calls-tab-item col-xl-6" key={index}>
                              //   <div className="main-left">
                              //     <div className="top-section">
                              //       <div className="top-left">
                              //         <h6 className="top-text">Reco Date</h6>
                              //         <h6 className="top-date">15 November ,23</h6>
                              //       </div>
                              //       <div className="top-right"><button className="btn-buy">BUY, Add on Dips</button></div>
                              //     </div>
                              //     <div className="middle-section">
                              //       <div className="middle-left">
                              //         <h4 className="big-text">BANKBARODA</h4>
                              //         <span className="small-text">BANK OF BARODA</span>
                              //       </div>
                              //       <div className="middle-right">
                              //         <span className="right-big-text">165.65</span>
                              //         <h6 className="right-small-text text_color">6.95(4.37%)</h6>
                              //       </div>
                              //     </div>

                              //     <div className="bottom-section">
                              //       <div className="d-flex justify-content-between pt-3">
                              //         <div className="bottom fandores">
                              //           <h6 className="bottom_small_text">Entry Price</h6>
                              //           <h4 className="bottom_big_text">165.00</h4>
                              //         </div>
                              //         <div className="bottom fandores">
                              //           <h6 className="bottom_small_text">Potential Price</h6>
                              //           <h4 className="bottom_big_text" >182.00</h4>
                              //         </div>
                              //         <div className="bottom fandores">
                              //           <h6 className="bottom_small_text">Exp. Returns</h6>
                              //           <h4 className="bottom_big_text">15 Nov, 2023</h4>
                              //         </div>
                              //       </div>
                              //     </div>
                              //   </div>
                              // </div>
                              <div className="calls-tab-item col-xl-6" key={index}>
                                    <div className="main-left">
                                      <div className="top-section">
                                        <div className="top-left">
                                          <h6 className="top-text">Reco Date</h6>
                                          <h6 className="top-date">{response?.updated_datetime}</h6>
                                        </div>
                                        <div className="top-right"><button onClick={()=>{chapterScroll3('dematform')}} className={"btn-buy " + ((response.call_type == "Sell") ? " sellbtn" : " buybtn")} > {response?.call_type}</button></div>
                                      </div>
                                      <div className="middle-section">
                                        <div className="middle-left">
                                          <h4 className="big-text">{(response?.scrip_name).replace("|", " ")}</h4>
                                          <span className="small-text">{response?.scrip_sec_desc}</span>
                                        </div>
                                        <div className="middle-right">
                                          <span className="right-big-text">{response?.LTP?(parseFloat(response.LTP).toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ","):0.00.toFixed(2)}</span>
                                          <h6 className={"right-small-text " + ((response?.ChangePer < 0) ? 'text_red' : (response.ChangePer > 0) ? 'text_green' : '')}>
                                          {`${response?.ChangePer < 0 ? '-' : ''}${Math.abs(response.Change || 0).toFixed(2)} (${response?.ChangePer < 0 ? '-' : ''}${Math.abs(response?.ChangePer || 0).toFixed(2)}%)`}</h6>
                                        </div>
                                      </div>

                                      <div className="bottom-section">
                                        <div className="d-flex justify-content-between pt-3">
                                          <div className="bottom fandores">
                                            <h6 className="bottom_small_text">Stop Loss</h6>
                                            <h4 className="bottom_big_text">{(parseFloat((response?.datapoints || [])[2].value).toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h4>
                                          </div>
                                          <div className="bottom fandores">
                                            <h6 className="bottom_small_text">Entry Price</h6>
                                            <h4 className="bottom_big_text" >{(parseFloat((response?.datapoints || [])[0].value).toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h4>
                                          </div>
                                          <div className="bottom fandores">
                                            <h6 className="bottom_small_text">Target Price</h6>
                                            <h4 className="bottom_big_text">{(parseFloat((response?.datapoints || [])[1].value).toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h4>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                            )
                          })
                        }
                      </Slider>
                      : <div className="text-center">
                        <img src={noDataimg} className="img-fluid" alt='No Data Found' height={250} width={250} />
                      </div>}
                </div> :
                <div>
                  {showLoader ?
                    <div className="text-center">
                      <div>
                        {/* <img src={loaderimg2} className="img-fluid d-block mx-auto" alt='loading' height={250} width={250} />  */}
                        <video src={loaderimg2} autoPlay loop muted className='img-fluid d-block mx-auto' height={100} width={100} />
                      </div>
                    </div>
                    :
                    <div>
                      {
                        list && list.length ?
                          <div className="row gx-5">
                            {
                              (list || []).slice(0, 2).map((response, index) => {
                                return (
                                  <div className="calls-tab-item col-xl-6" key={index}>
                                    <div className="main-left">
                                      <div className="top-section">
                                        <div className="top-left">
                                          <h6 className="top-text">Reco Date</h6>
                                          <h6 className="top-date">{response?.updated_datetime}</h6>
                                        </div>
                                        <div className="top-right"><button onClick={()=>{chapterScroll3('dematform')}} className={"btn-buy " + ((response.call_type == "Sell") ? " sellbtn" : " buybtn")} > {response?.call_type}</button></div>
                                      </div>
                                      <div className="middle-section">
                                        <div className="middle-left">
                                          <h4 className="big-text">{(response?.scrip_name).replace("|", " ")}</h4>
                                          <span className="small-text">{response?.scrip_sec_desc}</span>
                                        </div>
                                        <div className="middle-right">
                                          <span className="right-big-text">{response?.LTP?(parseFloat(response.LTP).toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ","):0.00.toFixed(2)}</span>
                                          <h6 className={"right-small-text " + ((response?.ChangePer < 0) ? 'text_red' : (response.ChangePer > 0) ? 'text_green' : '')}>
                                          {`${response?.ChangePer < 0 ? '-' : ''}${Math.abs(response.Change || 0).toFixed(2)} (${response?.ChangePer < 0 ? '-' : ''}${Math.abs(response?.ChangePer || 0).toFixed(2)}%)`}</h6>
                                        </div>
                                      </div>

                                      <div className="bottom-section">
                                        <div className="d-flex justify-content-between pt-3">
                                          <div className="bottom fandores">
                                            <h6 className="bottom_small_text">Stop Loss</h6>
                                            <h4 className="bottom_big_text">{(parseFloat((response?.datapoints || [])[2].value).toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h4>
                                          </div>
                                          <div className="bottom fandores">
                                            <h6 className="bottom_small_text">Entry Price</h6>
                                            <h4 className="bottom_big_text" >{(parseFloat((response?.datapoints || [])[0].value).toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h4>
                                          </div>
                                          <div className="bottom fandores">
                                            <h6 className="bottom_small_text">Target Price</h6>
                                            <h4 className="bottom_big_text">{(parseFloat((response?.datapoints || [])[1].value).toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h4>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                )
                              })
                            }
                          </div>
                          :
                          <div className="text-center">
                            <img src={noDataimg} className="img-fluid" alt='No Data Found' height={250} width={250} />
                          </div>
                      }
                    </div>

                  }
                </div>
            }
          </div>
        </div>
      </section>
    </>
  );
};
export default ResearchCalls;