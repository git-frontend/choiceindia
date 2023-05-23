import React from "react";
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



  const settings = {
    infinite: true,
    speed: 1500,
    arrows: false,
    slidesToShow: 1,
    autoplay: false,
    dots: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,

  };


  useEffect(() => {
    let mediaQuery = window.matchMedia("(min-width: 767px)");
    mediaQuery.addListener(setView);
    // this is the cleanup function to remove the listener
    return () => mediaQuery.removeListener(setView);
  }, []);


  //for session Id 
  function generateSessionId() {
    let api = new API_URLS()
    fetch(api.getSessionUrl())
      .then(response => {
        return response.json();
      })
      .then(res => {
        if (res.Status == 'Success') {
          IntraStocks(res.Response);
          // setData1(res.Response);
        } else {
          IntraStocks([])
        }
      }, err => {
        IntraStocks([])
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
      "status": "",
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

          });
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
                    } else {



                    }
                  }
                })

                setlist(multiValue);

              } else {
                setlist([])
              }
            })
        }
      })
      // )
      .catch((error) => {
        setShowLoader(false)
        setlist([]);
      });
  }
  return (
    <div>
      <div>
        <section className="track-record-sec">
          <div className="container">
            <div className="row d-flex justify-content-center ">
              <div className="col-md-12 ">
                <div>
                  <h1 className="title-first">Our Track Record Says It All</h1>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <ul className="list-group list_group1">
                  <li className={toggleState === 1 ? "list-group-item list listsec" : "list-group-item list"}
                    onClick={generateSessionId}> Intraday</li>
                  <li className={toggleState === 2 ? "list-group-item list listsec" : "list-group-item list"}
                    onClick={() => { toggleTab(2); setData(2) }}>F&O </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="main-parent">
            <div className="container">
              <div className="content-tabs active-content">
                <div
                  className={toggleState === 1 ? "content  active-content" : "content"}
                >
                  <div className="row d-flex justify-content-center">
                    <div className="col-md-12">
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
                              <div className="col-xl-6">
                                <div className="main-left">
                                  <div className="top-section">
                                    <div className="top-left">
                                      <h6 className="top-text">Stop Loss</h6>
                                      <h6 className="top-date">17 March’23</h6>
                                    </div>
                                    <div className="top-right"><button className="btn-buy">buy</button></div>
                                  </div>
                                  <div className="middle-section">
                                    <div className="middle-left">
                                      <h4 className="big-text">JUPL</h4>
                                      <span className="small-text">UPL LIMITED</span>
                                    </div>
                                    <div className="middle-right">
                                      <span className="right-big-text">715.65</span>
                                      <h6 className="right-small-text text_color">19.25(2.76%)</h6>
                                    </div>
                                  </div>

                                  <div className="bottom-section">
                                    <div className="bottom">
                                      <h6 className="bottom_small_text">Stop Loss</h6>
                                      <h4 className="bottom_big_text">697.40</h4>
                                    </div>
                                    <div className="bottom">
                                      <h6 className="bottom_small_text">Entry Price</h6>
                                      <h4 className="bottom_big_text" >704.00</h4>
                                    </div>
                                    <div className="bottom">
                                      <h6 className="bottom_small_text">Target Price</h6>
                                      <h4 className="bottom_big_text">713.90</h4>
                                    </div>
                                    <div className="bottom">
                                      <h6 className="bottom_small_text">2nd Target Price</h6>
                                      <h4 className="bottom_big_text">720.55</h4>
                                    </div>
                                    <div className="bottom">
                                      <h6 className="bottom_small_text">3rd Target Price</h6>
                                      <h4 className="bottom_big_text">--</h4>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-6">
                                <div className="main-left">
                                  <div className="top-section">
                                    <div className="top-left">
                                      <h6 className="top-text">Stop Loss</h6>
                                      <h6 className="top-date">17 March’23</h6>
                                    </div>
                                    <div className="top-right"><button className="btn-buy sellbtn">Sell</button></div>
                                  </div>
                                  <div className="middle-section">
                                    <div className="middle-left">
                                      <h4 className="big-text">NAVINFLOUR</h4>
                                      <span className="small-text">NAVIN FLOURINE INT. LTD.</span>
                                    </div>
                                    <div className="middle-right">
                                      <span className="right-big-text">715.65</span>
                                      <h6 className="right-small-text">19.25(2.76%)</h6>
                                    </div>
                                  </div>

                                  <div className="bottom-section">
                                    <div className="bottom">
                                      <h6 className="bottom_small_text">Stop Loss</h6>
                                      <h4 className="bottom_big_text">697.40</h4>
                                    </div>
                                    <div className="bottom">
                                      <h6 className="bottom_small_text">Entry Price</h6>
                                      <h4 className="bottom_big_text" >704.00</h4>
                                    </div>
                                    <div className="bottom">
                                      <h6 className="bottom_small_text">Target Price</h6>
                                      <h4 className="bottom_big_text">713.90</h4>
                                    </div>
                                    <div className="bottom">
                                      <h6 className="bottom_small_text">2nd Target Price</h6>
                                      <h4 className="bottom_big_text">720.55</h4>
                                    </div>
                                    <div className="bottom">
                                      <h6 className="bottom_small_text">3rd Target Price</h6>
                                      <h4 className="bottom_big_text">--</h4>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-6">
                                <div className="main-left">
                                  <div className="top-section">
                                    <div className="top-left">
                                      <h6 className="top-text">Stop Loss</h6>
                                      <h6 className="top-date">17 March’23</h6>
                                    </div>
                                    <div className="top-right"><button className="btn-buy  sellbtn">Sell</button></div>
                                  </div>
                                  <div className="middle-section">
                                    <div className="middle-left">
                                      <h4 className="big-text">NAVINFLOUR</h4>
                                      <span className="small-text">NAVIN FLOURINE INT. LTD.</span>
                                    </div>
                                    <div className="middle-right">
                                      <span className="right-big-text">715.65</span>
                                      <h6 className="right-small-text">19.25(2.76%)</h6>
                                    </div>
                                  </div>

                                  <div className="bottom-section">
                                    <div className="bottom">
                                      <h6 className="bottom_small_text">Stop Loss</h6>
                                      <h4 className="bottom_big_text">697.40</h4>
                                    </div>
                                    <div className="bottom">
                                      <h6 className="bottom_small_text">Entry Price</h6>
                                      <h4 className="bottom_big_text" >704.00</h4>
                                    </div>
                                    <div className="bottom">
                                      <h6 className="bottom_small_text">Target Price</h6>
                                      <h4 className="bottom_big_text">713.90</h4>
                                    </div>
                                    <div className="bottom">
                                      <h6 className="bottom_small_text">2nd Target Price</h6>
                                      <h4 className="bottom_big_text">720.55</h4>
                                    </div>
                                    <div className="bottom">
                                      <h6 className="bottom_small_text">3rd Target Price</h6>
                                      <h4 className="bottom_big_text">--</h4>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-6">
                                <div className="main-left">
                                  <div className="top-section">
                                    <div className="top-left">
                                      <h6 className="top-text">Stop Loss</h6>
                                      <h6 className="top-date">17 March’23</h6>
                                    </div>
                                    <div className="top-right"><button className="btn-buy">buy</button></div>
                                  </div>
                                  <div className="middle-section">
                                    <div className="middle-left">
                                      <h4 className="big-text">JUPL</h4>
                                      <span className="small-text">UPL LIMITED</span>
                                    </div>
                                    <div className="middle-right">
                                      <span className="right-big-text">715.65</span>
                                      <h6 className="right-small-text text_color">19.25(2.76%)</h6>
                                    </div>
                                  </div>

                                  <div className="bottom-section">
                                    <div className="bottom">
                                      <h6 className="bottom_small_text">Stop Loss</h6>
                                      <h4 className="bottom_big_text">697.40</h4>
                                    </div>
                                    <div className="bottom">
                                      <h6 className="bottom_small_text">Entry Price</h6>
                                      <h4 className="bottom_big_text" >704.00</h4>
                                    </div>
                                    <div className="bottom">
                                      <h6 className="bottom_small_text">Target Price</h6>
                                      <h4 className="bottom_big_text">713.90</h4>
                                    </div>
                                    <div className="bottom">
                                      <h6 className="bottom_small_text">2nd Target Price</h6>
                                      <h4 className="bottom_big_text">720.55</h4>
                                    </div>
                                    <div className="bottom">
                                      <h6 className="bottom_small_text">3rd Target Price</h6>
                                      <h4 className="bottom_big_text">--</h4>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            :
                            <div className="text-center">
                                  <img src={noDataimg} className="img-fluid" alt='No Data Found' height={250} width={250} />
                                </div>
}
                            </div>
                        }
                          
                      </div>
                      {/*                       
                          {
                            view && !view.matches ?

                              <Slider {...settings} className='awarded-card'>
                                <div className="col-xl-6">
                                  <div className="main-left">
                                    <div className="top-section">
                                      <div className="top-left">
                                        <h6 className="top-text">Stop Loss</h6>
                                        <h6 className="top-date">17 March’23</h6>
                                      </div>
                                      <div className="top-right"><button className="btn-buy">buy</button></div>
                                    </div>
                                    <div className="middle-section">
                                      <div className="middle-left">
                                        <h4 className="big-text">JUPL</h4>
                                        <span className="small-text">UPL LIMITED</span>
                                      </div>
                                      <div className="middle-right">
                                        <span className="right-big-text">715.65</span>
                                        <h6 className="right-small-text text_color">19.25(2.76%)</h6>
                                      </div>
                                    </div>

                                    <div className="bottom-section">
                                        <div className="bottom">
                                          <h6 className="bottom_small_text">Stop Loss</h6>
                                          <h4 className="bottom_big_text">697.40</h4>
                                        </div>
                                        <div className="bottom">
                                          <h6 className="bottom_small_text">Entry Price</h6>
                                          <h4 className="bottom_big_text" >704.00</h4>
                                        </div>
                                        <div className="bottom">
                                          <h6 className="bottom_small_text">Target Price</h6>
                                          <h4 className="bottom_big_text">713.90</h4>
                                        </div>
                                        <div className="bottom">
                                          <h6 className="bottom_small_text">2nd Target Price</h6>
                                          <h4 className="bottom_big_text">720.55</h4>
                                        </div>
                                        <div className="bottom">
                                          <h6 className="bottom_small_text">3rd Target Price</h6>
                                          <h4 className="bottom_big_text">--</h4>
                                        </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-xl-6">
                                  <div className="main-left">
                                    <div className="top-section">
                                      <div className="top-left">
                                        <h6 className="top-text">Stop Loss</h6>
                                        <h6 className="top-date">17 March’23</h6>
                                      </div>
                                      <div className="top-right"><button className="btn-buy sellbtn">Sell</button></div>
                                    </div>
                                    <div className="middle-section">
                                      <div className="middle-left">
                                        <h4 className="big-text">NAVINFLOUR</h4>
                                        <span className="small-text">NAVIN FLOURINE INT. LTD.</span>
                                      </div>
                                      <div className="middle-right">
                                        <span className="right-big-text">715.65</span>
                                        <h6 className="right-small-text">19.25(2.76%)</h6>
                                      </div>
                                    </div>

                                    <div className="bottom-section">
                                        <div className="bottom">
                                          <h6 className="bottom_small_text">Stop Loss</h6>
                                          <h4 className="bottom_big_text">697.40</h4>
                                        </div>
                                        <div className="bottom">
                                          <h6 className="bottom_small_text">Entry Price</h6>
                                          <h4 className="bottom_big_text" >704.00</h4>
                                        </div>
                                        <div className="bottom">
                                          <h6 className="bottom_small_text">Target Price</h6>
                                          <h4 className="bottom_big_text">713.90</h4>
                                        </div>
                                        <div className="bottom">
                                          <h6 className="bottom_small_text">2nd Target Price</h6>
                                          <h4 className="bottom_big_text">720.55</h4>
                                        </div>
                                        <div className="bottom">
                                          <h6 className="bottom_small_text">3rd Target Price</h6>
                                          <h4 className="bottom_big_text">--</h4>
                                        </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-xl-6">
                                  <div className="main-left">
                                    <div className="top-section">
                                      <div className="top-left">
                                        <h6 className="top-text">Stop Loss</h6>
                                        <h6 className="top-date">17 March’23</h6>
                                      </div>
                                      <div className="top-right"><button className="btn-buy  sellbtn">Sell</button></div>
                                    </div>
                                    <div className="middle-section">
                                      <div className="middle-left">
                                        <h4 className="big-text">NAVINFLOUR</h4>
                                        <span className="small-text">NAVIN FLOURINE INT. LTD.</span>
                                      </div>
                                      <div className="middle-right">
                                        <span className="right-big-text">715.65</span>
                                        <h6 className="right-small-text">19.25(2.76%)</h6>
                                      </div>
                                    </div>

                                    <div className="bottom-section">
                                        <div className="bottom">
                                          <h6 className="bottom_small_text">Stop Loss</h6>
                                          <h4 className="bottom_big_text">697.40</h4>
                                        </div>
                                        <div className="bottom">
                                          <h6 className="bottom_small_text">Entry Price</h6>
                                          <h4 className="bottom_big_text" >704.00</h4>
                                        </div>
                                        <div className="bottom">
                                          <h6 className="bottom_small_text">Target Price</h6>
                                          <h4 className="bottom_big_text">713.90</h4>
                                        </div>
                                        <div className="bottom">
                                          <h6 className="bottom_small_text">2nd Target Price</h6>
                                          <h4 className="bottom_big_text">720.55</h4>
                                        </div>
                                        <div className="bottom">
                                          <h6 className="bottom_small_text">3rd Target Price</h6>
                                          <h4 className="bottom_big_text">--</h4>
                                        </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-xl-6">
                                  <div className="main-left">
                                    <div className="top-section">
                                      <div className="top-left">
                                        <h6 className="top-text">Stop Loss</h6>
                                        <h6 className="top-date">17 March’23</h6>
                                      </div>
                                      <div className="top-right"><button className="btn-buy">buy</button></div>
                                    </div>
                                    <div className="middle-section">
                                      <div className="middle-left">
                                        <h4 className="big-text">JUPL</h4>
                                        <span className="small-text">UPL LIMITED</span>
                                      </div>
                                      <div className="middle-right">
                                        <span className="right-big-text">715.65</span>
                                        <h6 className="right-small-text text_color">19.25(2.76%)</h6>
                                      </div>
                                    </div>

                                    <div className="bottom-section">
                                        <div className="bottom">
                                          <h6 className="bottom_small_text">Stop Loss</h6>
                                          <h4 className="bottom_big_text">697.40</h4>
                                        </div>
                                        <div className="bottom">
                                          <h6 className="bottom_small_text">Entry Price</h6>
                                          <h4 className="bottom_big_text" >704.00</h4>
                                        </div>
                                        <div className="bottom">
                                          <h6 className="bottom_small_text">Target Price</h6>
                                          <h4 className="bottom_big_text">713.90</h4>
                                        </div>
                                        <div className="bottom">
                                          <h6 className="bottom_small_text">2nd Target Price</h6>
                                          <h4 className="bottom_big_text">720.55</h4>
                                        </div>
                                        <div className="bottom">
                                          <h6 className="bottom_small_text">3rd Target Price</h6>
                                          <h4 className="bottom_big_text">--</h4>
                                        </div>
                                    </div>
                                  </div>
                                </div>
                              </Slider> */}


                      {/* : */}
                              {/* // <div className="row gx-5">
                              //   <div className="col-xl-6">
                              //     <div className="main-left">
                              //       <div className="top-section">
                              //         <div className="top-left">
                              //           <h6 className="top-text">Stop Loss</h6>
                              //           <h6 className="top-date">17 March’23</h6>
                              //         </div>
                              //         <div className="top-right"><button className="btn-buy">buy</button></div>
                              //       </div>
                              //       <div className="middle-section">
                              //         <div className="middle-left">
                              //           <h4 className="big-text">JUPL</h4>
                              //           <span className="small-text">UPL LIMITED</span>
                              //         </div>
                              //         <div className="middle-right">
                              //           <span className="right-big-text">715.65</span>
                              //           <h6 className="right-small-text text_color">19.25(2.76%)</h6>
                              //         </div>
                              //       </div>

                              //       <div className="bottom-section">
                              //           <div className="bottom">
                              //             <h6 className="bottom_small_text">Stop Loss</h6>
                              //             <h4 className="bottom_big_text">697.40</h4>
                              //           </div>
                              //           <div className="bottom">
                              //             <h6 className="bottom_small_text">Entry Price</h6>
                              //             <h4 className="bottom_big_text" >704.00</h4>
                              //           </div>
                              //           <div className="bottom">
                              //             <h6 className="bottom_small_text">Target Price</h6>
                              //             <h4 className="bottom_big_text">713.90</h4>
                              //           </div>
                              //           <div className="bottom">
                              //             <h6 className="bottom_small_text">2nd Target Price</h6>
                              //             <h4 className="bottom_big_text">720.55</h4>
                              //           </div>
                              //           <div className="bottom">
                              //             <h6 className="bottom_small_text">3rd Target Price</h6>
                              //             <h4 className="bottom_big_text">--</h4>
                              //           </div>
                              //       </div>
                              //     </div>
                              //   </div>
                              //   <div className="col-xl-6">
                              //     <div className="main-left">
                              //       <div className="top-section">
                              //         <div className="top-left">
                              //           <h6 className="top-text">Stop Loss</h6>
                              //           <h6 className="top-date">17 March’23</h6>
                              //         </div>
                              //         <div className="top-right"><button className="btn-buy sellbtn">Sell</button></div>
                              //       </div>
                              //       <div className="middle-section">
                              //         <div className="middle-left">
                              //           <h4 className="big-text">NAVINFLOUR</h4>
                              //           <span className="small-text">NAVIN FLOURINE INT. LTD.</span>
                              //         </div>
                              //         <div className="middle-right">
                              //           <span className="right-big-text">715.65</span>
                              //           <h6 className="right-small-text">19.25(2.76%)</h6>
                              //         </div>
                              //       </div>

                              //       <div className="bottom-section">
                              //           <div className="bottom">
                              //             <h6 className="bottom_small_text">Stop Loss</h6>
                              //             <h4 className="bottom_big_text">697.40</h4>
                              //           </div>
                              //           <div className="bottom">
                              //             <h6 className="bottom_small_text">Entry Price</h6>
                              //             <h4 className="bottom_big_text" >704.00</h4>
                              //           </div>
                              //           <div className="bottom">
                              //             <h6 className="bottom_small_text">Target Price</h6>
                              //             <h4 className="bottom_big_text">713.90</h4>
                              //           </div>
                              //           <div className="bottom">
                              //             <h6 className="bottom_small_text">2nd Target Price</h6>
                              //             <h4 className="bottom_big_text">720.55</h4>
                              //           </div>
                              //           <div className="bottom">
                              //             <h6 className="bottom_small_text">3rd Target Price</h6>
                              //             <h4 className="bottom_big_text">--</h4>
                              //           </div>
                              //       </div>
                              //     </div>
                              //   </div>
                              //   <div className="col-xl-6">
                              //     <div className="main-left">
                              //       <div className="top-section">
                              //         <div className="top-left">
                              //           <h6 className="top-text">Stop Loss</h6>
                              //           <h6 className="top-date">17 March’23</h6>
                              //         </div>
                              //         <div className="top-right"><button className="btn-buy  sellbtn">Sell</button></div>
                              //       </div>
                              //       <div className="middle-section">
                              //         <div className="middle-left">
                              //           <h4 className="big-text">NAVINFLOUR</h4>
                              //           <span className="small-text">NAVIN FLOURINE INT. LTD.</span>
                              //         </div>
                              //         <div className="middle-right">
                              //           <span className="right-big-text">715.65</span>
                              //           <h6 className="right-small-text">19.25(2.76%)</h6>
                              //         </div>
                              //       </div>

                              //       <div className="bottom-section">
                              //           <div className="bottom">
                              //             <h6 className="bottom_small_text">Stop Loss</h6>
                              //             <h4 className="bottom_big_text">697.40</h4>
                              //           </div>
                              //           <div className="bottom">
                              //             <h6 className="bottom_small_text">Entry Price</h6>
                              //             <h4 className="bottom_big_text" >704.00</h4>
                              //           </div>
                              //           <div className="bottom">
                              //             <h6 className="bottom_small_text">Target Price</h6>
                              //             <h4 className="bottom_big_text">713.90</h4>
                              //           </div>
                              //           <div className="bottom">
                              //             <h6 className="bottom_small_text">2nd Target Price</h6>
                              //             <h4 className="bottom_big_text">720.55</h4>
                              //           </div>
                              //           <div className="bottom">
                              //             <h6 className="bottom_small_text">3rd Target Price</h6>
                              //             <h4 className="bottom_big_text">--</h4>
                              //           </div>
                              //       </div>
                              //     </div>
                              //   </div>
                              //   <div className="col-xl-6">
                              //     <div className="main-left">
                              //       <div className="top-section">
                              //         <div className="top-left">
                              //           <h6 className="top-text">Stop Loss</h6>
                              //           <h6 className="top-date">17 March’23</h6>
                              //         </div>
                              //         <div className="top-right"><button className="btn-buy">buy</button></div>
                              //       </div>
                              //       <div className="middle-section">
                              //         <div className="middle-left">
                              //           <h4 className="big-text">JUPL</h4>
                              //           <span className="small-text">UPL LIMITED</span>
                              //         </div>
                              //         <div className="middle-right">
                              //           <span className="right-big-text">715.65</span>
                              //           <h6 className="right-small-text text_color">19.25(2.76%)</h6>
                              //         </div>
                              //       </div>

                              //       <div className="bottom-section">
                              //           <div className="bottom">
                              //             <h6 className="bottom_small_text">Stop Loss</h6>
                              //             <h4 className="bottom_big_text">697.40</h4>
                              //           </div>
                              //           <div className="bottom">
                              //             <h6 className="bottom_small_text">Entry Price</h6>
                              //             <h4 className="bottom_big_text" >704.00</h4>
                              //           </div>
                              //           <div className="bottom">
                              //             <h6 className="bottom_small_text">Target Price</h6>
                              //             <h4 className="bottom_big_text">713.90</h4>
                              //           </div>
                              //           <div className="bottom">
                              //             <h6 className="bottom_small_text">2nd Target Price</h6>
                              //             <h4 className="bottom_big_text">720.55</h4>
                              //           </div>
                              //           <div className="bottom">
                              //             <h6 className="bottom_small_text">3rd Target Price</h6>
                              //             <h4 className="bottom_big_text">--</h4>
                              //           </div>
                              //       </div>
                              //     </div>
                              //   </div>
                              // </div> */}
                      {/* } */}
                    </div>
                  </div>

                </div>
                <div
                  className={toggleState === 2 ? "content  active-content" : "content"}
                >
                  <div className="row d-flex justify-content-center">
                    <div className="col-md-12">

                      {/* {
                            view && !view.matches ?

                              <Slider {...settings} className='awarded-card'>
                                <div className="col-xl-6">
                                  <div className="main-left">
                                    <div className="top-section">
                                      <div className="top-left">
                                        <h6 className="top-text">Stop Loss</h6>
                                        <h6 className="top-date">17 March’23</h6>
                                      </div>
                                      <div className="top-right"><button className="btn-buy">buy</button></div>
                                    </div>
                                    <div className="middle-section">
                                      <div className="middle-left">
                                        <h4 className="big-text">JUPL</h4>
                                        <span className="small-text">UPL LIMITED</span>
                                      </div>
                                      <div className="middle-right">
                                        <span className="right-big-text">715.65</span>
                                        <h6 className="right-small-text text_color">19.25(2.76%)</h6>
                                      </div>
                                    </div>

                                    <div className="bottom-section">
                                        <div className="bottom">
                                          <h6 className="bottom_small_text">Stop Loss</h6>
                                          <h4 className="bottom_big_text">697.40</h4>
                                        </div>
                                        <div className="bottom">
                                          <h6 className="bottom_small_text">Entry Price</h6>
                                          <h4 className="bottom_big_text" >704.00</h4>
                                        </div>
                                        <div className="bottom">
                                          <h6 className="bottom_small_text">Target Price</h6>
                                          <h4 className="bottom_big_text">713.90</h4>
                                        </div>
                                        <div className="bottom">
                                          <h6 className="bottom_small_text">2nd Target Price</h6>
                                          <h4 className="bottom_big_text">720.55</h4>
                                        </div>
                                        <div className="bottom">
                                          <h6 className="bottom_small_text">3rd Target Price</h6>
                                          <h4 className="bottom_big_text">--</h4>
                                        </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-xl-6">
                                  <div className="main-left">
                                    <div className="top-section">
                                      <div className="top-left">
                                        <h6 className="top-text">Stop Loss</h6>
                                        <h6 className="top-date">17 March’23</h6>
                                      </div>
                                      <div className="top-right"><button className="btn-buy sellbtn">Sell</button></div>
                                    </div>
                                    <div className="middle-section">
                                      <div className="middle-left">
                                        <h4 className="big-text">NAVINFLOUR</h4>
                                        <span className="small-text">NAVIN FLOURINE INT. LTD.</span>
                                      </div>
                                      <div className="middle-right">
                                        <span className="right-big-text">715.65</span>
                                        <h6 className="right-small-text">19.25(2.76%)</h6>
                                      </div>
                                    </div>

                                    <div className="bottom-section">
                                        <div className="bottom">
                                          <h6 className="bottom_small_text">Stop Loss</h6>
                                          <h4 className="bottom_big_text">697.40</h4>
                                        </div>
                                        <div className="bottom">
                                          <h6 className="bottom_small_text">Entry Price</h6>
                                          <h4 className="bottom_big_text" >704.00</h4>
                                        </div>
                                        <div className="bottom">
                                          <h6 className="bottom_small_text">Target Price</h6>
                                          <h4 className="bottom_big_text">713.90</h4>
                                        </div>
                                        <div className="bottom">
                                          <h6 className="bottom_small_text">2nd Target Price</h6>
                                          <h4 className="bottom_big_text">720.55</h4>
                                        </div>
                                        <div className="bottom">
                                          <h6 className="bottom_small_text">3rd Target Price</h6>
                                          <h4 className="bottom_big_text">--</h4>
                                        </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-xl-6">
                                  <div className="main-left">
                                    <div className="top-section">
                                      <div className="top-left">
                                        <h6 className="top-text">Stop Loss</h6>
                                        <h6 className="top-date">17 March’23</h6>
                                      </div>
                                      <div className="top-right"><button className="btn-buy  sellbtn">Sell</button></div>
                                    </div>
                                    <div className="middle-section">
                                      <div className="middle-left">
                                        <h4 className="big-text">NAVINFLOUR</h4>
                                        <span className="small-text">NAVIN FLOURINE INT. LTD.</span>
                                      </div>
                                      <div className="middle-right">
                                        <span className="right-big-text">715.65</span>
                                        <h6 className="right-small-text">19.25(2.76%)</h6>
                                      </div>
                                    </div>

                                    <div className="bottom-section">
                                        <div className="bottom">
                                          <h6 className="bottom_small_text">Stop Loss</h6>
                                          <h4 className="bottom_big_text">697.40</h4>
                                        </div>
                                        <div className="bottom">
                                          <h6 className="bottom_small_text">Entry Price</h6>
                                          <h4 className="bottom_big_text" >704.00</h4>
                                        </div>
                                        <div className="bottom">
                                          <h6 className="bottom_small_text">Target Price</h6>
                                          <h4 className="bottom_big_text">713.90</h4>
                                        </div>
                                        <div className="bottom">
                                          <h6 className="bottom_small_text">2nd Target Price</h6>
                                          <h4 className="bottom_big_text">720.55</h4>
                                        </div>
                                        <div className="bottom">
                                          <h6 className="bottom_small_text">3rd Target Price</h6>
                                          <h4 className="bottom_big_text">--</h4>
                                        </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-xl-6">
                                  <div className="main-left">
                                    <div className="top-section">
                                      <div className="top-left">
                                        <h6 className="top-text">Stop Loss</h6>
                                        <h6 className="top-date">17 March’23</h6>
                                      </div>
                                      <div className="top-right"><button className="btn-buy">buy</button></div>
                                    </div>
                                    <div className="middle-section">
                                      <div className="middle-left">
                                        <h4 className="big-text">JUPL</h4>
                                        <span className="small-text">UPL LIMITED</span>
                                      </div>
                                      <div className="middle-right">
                                        <span className="right-big-text">715.65</span>
                                        <h6 className="right-small-text text_color">19.25(2.76%)</h6>
                                      </div>
                                    </div>

                                    <div className="bottom-section">
                                        <div className="bottom">
                                          <h6 className="bottom_small_text">Stop Loss</h6>
                                          <h4 className="bottom_big_text">697.40</h4>
                                        </div>
                                        <div className="bottom">
                                          <h6 className="bottom_small_text">Entry Price</h6>
                                          <h4 className="bottom_big_text" >704.00</h4>
                                        </div>
                                        <div className="bottom">
                                          <h6 className="bottom_small_text">Target Price</h6>
                                          <h4 className="bottom_big_text">713.90</h4>
                                        </div>
                                        <div className="bottom">
                                          <h6 className="bottom_small_text">2nd Target Price</h6>
                                          <h4 className="bottom_big_text">720.55</h4>
                                        </div>
                                        <div className="bottom">
                                          <h6 className="bottom_small_text">3rd Target Price</h6>
                                          <h4 className="bottom_big_text">--</h4>
                                        </div>
                                    </div>
                                  </div>
                                </div>
                              </Slider>


                              : */}
                      <div className="row gx-5">
                        <div className="col-xl-6">
                          <div className="main-left">
                            <div className="top-section">
                              <div className="top-left">
                                <h6 className="top-text">Stop Loss</h6>
                                <h6 className="top-date">17 March’23</h6>
                              </div>
                              <div className="top-right"><button className="btn-buy">buy</button></div>
                            </div>
                            <div className="middle-section">
                              <div className="middle-left">
                                <h4 className="big-text">JUPL</h4>
                                <span className="small-text">UPL LIMITED</span>
                              </div>
                              <div className="middle-right">
                                <span className="right-big-text">715.65</span>
                                <h6 className="right-small-text text_color">19.25(2.76%)</h6>
                              </div>
                            </div>

                            <div className="bottom-section">
                              <div className="bottom">
                                <h6 className="bottom_small_text">Stop Loss</h6>
                                <h4 className="bottom_big_text">697.40</h4>
                              </div>
                              <div className="bottom">
                                <h6 className="bottom_small_text">Entry Price</h6>
                                <h4 className="bottom_big_text" >704.00</h4>
                              </div>
                              <div className="bottom">
                                <h6 className="bottom_small_text">Target Price</h6>
                                <h4 className="bottom_big_text">713.90</h4>
                              </div>
                              <div className="bottom">
                                <h6 className="bottom_small_text">2nd Target Price</h6>
                                <h4 className="bottom_big_text">720.55</h4>
                              </div>
                              <div className="bottom">
                                <h6 className="bottom_small_text">3rd Target Price</h6>
                                <h4 className="bottom_big_text">--</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-6">
                          <div className="main-left">
                            <div className="top-section">
                              <div className="top-left">
                                <h6 className="top-text">Stop Loss</h6>
                                <h6 className="top-date">17 March’23</h6>
                              </div>
                              <div className="top-right"><button className="btn-buy sellbtn">Sell</button></div>
                            </div>
                            <div className="middle-section">
                              <div className="middle-left">
                                <h4 className="big-text">NAVINFLOUR</h4>
                                <span className="small-text">NAVIN FLOURINE INT. LTD.</span>
                              </div>
                              <div className="middle-right">
                                <span className="right-big-text">715.65</span>
                                <h6 className="right-small-text">19.25(2.76%)</h6>
                              </div>
                            </div>

                            <div className="bottom-section">
                              <div className="bottom">
                                <h6 className="bottom_small_text">Stop Loss</h6>
                                <h4 className="bottom_big_text">697.40</h4>
                              </div>
                              <div className="bottom">
                                <h6 className="bottom_small_text">Entry Price</h6>
                                <h4 className="bottom_big_text" >704.00</h4>
                              </div>
                              <div className="bottom">
                                <h6 className="bottom_small_text">Target Price</h6>
                                <h4 className="bottom_big_text">713.90</h4>
                              </div>
                              <div className="bottom">
                                <h6 className="bottom_small_text">2nd Target Price</h6>
                                <h4 className="bottom_big_text">720.55</h4>
                              </div>
                              <div className="bottom">
                                <h6 className="bottom_small_text">3rd Target Price</h6>
                                <h4 className="bottom_big_text">--</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-6">
                          <div className="main-left">
                            <div className="top-section">
                              <div className="top-left">
                                <h6 className="top-text">Stop Loss</h6>
                                <h6 className="top-date">17 March’23</h6>
                              </div>
                              <div className="top-right"><button className="btn-buy  sellbtn">Sell</button></div>
                            </div>
                            <div className="middle-section">
                              <div className="middle-left">
                                <h4 className="big-text">NAVINFLOUR</h4>
                                <span className="small-text">NAVIN FLOURINE INT. LTD.</span>
                              </div>
                              <div className="middle-right">
                                <span className="right-big-text">715.65</span>
                                <h6 className="right-small-text">19.25(2.76%)</h6>
                              </div>
                            </div>

                            <div className="bottom-section">
                              <div className="bottom">
                                <h6 className="bottom_small_text">Stop Loss</h6>
                                <h4 className="bottom_big_text">697.40</h4>
                              </div>
                              <div className="bottom">
                                <h6 className="bottom_small_text">Entry Price</h6>
                                <h4 className="bottom_big_text" >704.00</h4>
                              </div>
                              <div className="bottom">
                                <h6 className="bottom_small_text">Target Price</h6>
                                <h4 className="bottom_big_text">713.90</h4>
                              </div>
                              <div className="bottom">
                                <h6 className="bottom_small_text">2nd Target Price</h6>
                                <h4 className="bottom_big_text">720.55</h4>
                              </div>
                              <div className="bottom">
                                <h6 className="bottom_small_text">3rd Target Price</h6>
                                <h4 className="bottom_big_text">--</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-6">
                          <div className="main-left">
                            <div className="top-section">
                              <div className="top-left">
                                <h6 className="top-text">Stop Loss</h6>
                                <h6 className="top-date">17 March’23</h6>
                              </div>
                              <div className="top-right"><button className="btn-buy">buy</button></div>
                            </div>
                            <div className="middle-section">
                              <div className="middle-left">
                                <h4 className="big-text">JUPL</h4>
                                <span className="small-text">UPL LIMITED</span>
                              </div>
                              <div className="middle-right">
                                <span className="right-big-text">715.65</span>
                                <h6 className="right-small-text text_color">19.25(2.76%)</h6>
                              </div>
                            </div>

                            <div className="bottom-section">
                              <div className="bottom">
                                <h6 className="bottom_small_text">Stop Loss</h6>
                                <h4 className="bottom_big_text">697.40</h4>
                              </div>
                              <div className="bottom">
                                <h6 className="bottom_small_text">Entry Price</h6>
                                <h4 className="bottom_big_text" >704.00</h4>
                              </div>
                              <div className="bottom">
                                <h6 className="bottom_small_text">Target Price</h6>
                                <h4 className="bottom_big_text">713.90</h4>
                              </div>
                              <div className="bottom">
                                <h6 className="bottom_small_text">2nd Target Price</h6>
                                <h4 className="bottom_big_text">720.55</h4>
                              </div>
                              <div className="bottom">
                                <h6 className="bottom_small_text">3rd Target Price</h6>
                                <h4 className="bottom_big_text">--</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* } */}
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
