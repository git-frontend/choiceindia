
import React from "react";
import Slider from 'react-slick';
import { API_URLS } from "../../Services/API-URLS";
import { useState, useEffect } from 'react';
import utils from "../../Services/utils";
import rest from "../../Services/rest";

function IntradayRecord() {
    const [list, setlist] = useState();
    const [Data1, setData1] = useState();
    const [showLoader, setShowLoader] = useState(false);
    const [rendercount, setRenderCount] = useState(() => false);

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
    let tokenList = [{}]
    let multiValue = [];
    let AllFilesValue = {};
    let tokens = "";
    let storefile;
    useEffect(() => {
        setRenderCount(true)
        if (rendercount === true) {
            generateSessionId()
            // FandORecords()
        }
    }, [rendercount])
    const settings = {
        infinite: true,
        speed: 2000,
        arrows: false,
        slidesToShow: 3,
        autoplay: true,
        margin:15,
        dots:true,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              adaptiveHeight: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
             
            },
          },
        ],
    };
    function generateSessionId() {
        let api = new API_URLS()
        fetch(api.getSessionUrl())
            .then(response => {
                return response.json();
            })
            .then(res => {
                if (res.Status == 'Success') {
                    IntraStocks(res.Response);
                    setData1(res.Response);
                } else {
                    IntraStocks([])
                }
            }, err => {
                IntraStocks([])
            })
    }
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
        <>
            <section className="fno-records">
                <div className="container">
                    <div className='row justify-content-center'>
                        <div className='col-md-8'>
                            <div className="heading-sec text-center">
                                <h2 className="title-secnd">Our Proven Track Record</h2>
                                <p>Intraday</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-md-12">
                            <div className="record-sliders">
                                <Slider {...settings} className="sliders-fno">
                                        <div className="">
                                            <div className="main-left">
                                                <div className="top-section">
                                                    <div className="top-left">
                                                    <h6 className="top-text">Stop Loss</h6>
                                                    <div>
                                                        <h6 className="top-date">05 December'23</h6>
                                                    </div>
                                                    </div>
                                                    <div className="top-right">
                                                    <button className="btn-buy  buybtn"> sell</button>
                                                    </div>
                                                </div>
                                                <div className="middle-section">
                                                    <div className="middle-left">
                                                    <div>
                                                        <h4 className="big-text">GRASIM</h4>
                                                        <span className="small-text">GRASIM INDUSTRIES LTD|</span>
                                                    </div>
                                                    </div>
                                                    <div className="middle-right">
                                                    <span className="right-big-text">2,072.35</span>
                                                    <h6 className="right-small-text text_green">19.40 (0.94%)</h6>
                                                    </div>
                                                </div>
                                                <div className="bottom-section">
                                                    <div className="d-flex justify-content-between pt-3">
                                                        <div className="bottom">
                                                            <h6 className="bottom_small_text">Stop Loss</h6>
                                                            <h4 className="bottom_big_text">2,043.25</h4>
                                                        </div>
                                                        <div className="bottom">
                                                            <h6 className="bottom_small_text">Entry Price</h6>
                                                            <h4 className="bottom_big_text">2,060.90</h4>
                                                        </div>
                                                        <div className="bottom">
                                                            <h6 className="bottom_small_text">Target Price</h6>
                                                            <h4 className="bottom_big_text">2,087.40</h4>
                                                        </div>
                                                        <div className="bottom">
                                                            <h6 className="bottom_small_text">2nd Target Price</h6>
                                                            <h4 className="bottom_big_text">2,105.05</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="">
                                            <div className="main-left">
                                                <div className="top-section">
                                                    <div className="top-left">
                                                    <h6 className="top-text">Stop Loss</h6>
                                                    <div>
                                                        <h6 className="top-date">05 December'23</h6>
                                                    </div>
                                                    </div>
                                                    <div className="top-right">
                                                    <button className="btn-buy  buybtn"> sell</button>
                                                    </div>
                                                </div>
                                                <div className="middle-section">
                                                    <div className="middle-left">
                                                    <div>
                                                        <h4 className="big-text">GRASIM</h4>
                                                        <span className="small-text">GRASIM INDUSTRIES LTD|</span>
                                                    </div>
                                                    </div>
                                                    <div className="middle-right">
                                                    <span className="right-big-text">2,072.35</span>
                                                    <h6 className="right-small-text text_green">19.40 (0.94%)</h6>
                                                    </div>
                                                </div>
                                                <div className="bottom-section">
                                                    <div className="d-flex justify-content-between pt-3">
                                                        <div className="bottom">
                                                            <h6 className="bottom_small_text">Stop Loss</h6>
                                                            <h4 className="bottom_big_text">2,043.25</h4>
                                                        </div>
                                                        <div className="bottom">
                                                            <h6 className="bottom_small_text">Entry Price</h6>
                                                            <h4 className="bottom_big_text">2,060.90</h4>
                                                        </div>
                                                        <div className="bottom">
                                                            <h6 className="bottom_small_text">Target Price</h6>
                                                            <h4 className="bottom_big_text">2,087.40</h4>
                                                        </div>
                                                        <div className="bottom">
                                                            <h6 className="bottom_small_text">2nd Target Price</h6>
                                                            <h4 className="bottom_big_text">2,105.05</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="">
                                            <div className="main-left">
                                                <div className="top-section">
                                                    <div className="top-left">
                                                    <h6 className="top-text">Stop Loss</h6>
                                                    <div>
                                                        <h6 className="top-date">05 December'23</h6>
                                                    </div>
                                                    </div>
                                                    <div className="top-right">
                                                    <button className="btn-buy  buybtn"> sell</button>
                                                    </div>
                                                </div>
                                                <div className="middle-section">
                                                    <div className="middle-left">
                                                    <div>
                                                        <h4 className="big-text">GRASIM</h4>
                                                        <span className="small-text">GRASIM INDUSTRIES LTD|</span>
                                                    </div>
                                                    </div>
                                                    <div className="middle-right">
                                                    <span className="right-big-text">2,072.35</span>
                                                    <h6 className="right-small-text text_green">19.40 (0.94%)</h6>
                                                    </div>
                                                </div>
                                                <div className="bottom-section">
                                                    <div className="d-flex justify-content-between pt-3">
                                                        <div className="bottom">
                                                            <h6 className="bottom_small_text">Stop Loss</h6>
                                                            <h4 className="bottom_big_text">2,043.25</h4>
                                                        </div>
                                                        <div className="bottom">
                                                            <h6 className="bottom_small_text">Entry Price</h6>
                                                            <h4 className="bottom_big_text">2,060.90</h4>
                                                        </div>
                                                        <div className="bottom">
                                                            <h6 className="bottom_small_text">Target Price</h6>
                                                            <h4 className="bottom_big_text">2,087.40</h4>
                                                        </div>
                                                        <div className="bottom">
                                                            <h6 className="bottom_small_text">2nd Target Price</h6>
                                                            <h4 className="bottom_big_text">2,105.05</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="">
                                            <div className="main-left">
                                                <div className="top-section">
                                                    <div className="top-left">
                                                    <h6 className="top-text">Stop Loss</h6>
                                                    <div>
                                                        <h6 className="top-date">05 December'23</h6>
                                                    </div>
                                                    </div>
                                                    <div className="top-right">
                                                    <button className="btn-buy  buybtn"> sell</button>
                                                    </div>
                                                </div>
                                                <div className="middle-section">
                                                    <div className="middle-left">
                                                    <div>
                                                        <h4 className="big-text">GRASIM</h4>
                                                        <span className="small-text">GRASIM INDUSTRIES LTD|</span>
                                                    </div>
                                                    </div>
                                                    <div className="middle-right">
                                                    <span className="right-big-text">2,072.35</span>
                                                    <h6 className="right-small-text text_green">19.40 (0.94%)</h6>
                                                    </div>
                                                </div>
                                                <div className="bottom-section">
                                                    <div className="d-flex justify-content-between pt-3">
                                                        <div className="bottom">
                                                            <h6 className="bottom_small_text">Stop Loss</h6>
                                                            <h4 className="bottom_big_text">2,043.25</h4>
                                                        </div>
                                                        <div className="bottom">
                                                            <h6 className="bottom_small_text">Entry Price</h6>
                                                            <h4 className="bottom_big_text">2,060.90</h4>
                                                        </div>
                                                        <div className="bottom">
                                                            <h6 className="bottom_small_text">Target Price</h6>
                                                            <h4 className="bottom_big_text">2,087.40</h4>
                                                        </div>
                                                        <div className="bottom">
                                                            <h6 className="bottom_small_text">2nd Target Price</h6>
                                                            <h4 className="bottom_big_text">2,105.05</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                </Slider>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            

        </>
    );
};
export default IntradayRecord;