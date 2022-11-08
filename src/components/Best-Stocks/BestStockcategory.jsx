import React from "react";
import { useState } from "react";
import "./best-stock.scss";
import Template5 from '../Common-features/Template5';
import { Link } from "react-router-dom";
import "../Remisier/Remisier.scss";
import rest from "../../Services/rest";
import utils from "../../Services/utils";
import { API_URLS } from "../../Services/API-URLS";






import {
  useLocation,
} from 'react-router-dom';
import meta_tags from "../../Data/MetaTags";
import { useEffect } from "react";
function BestStockcategory() {
  const [toggleState, setToggleState] = useState(1);
  const [list, setlist] = useState();
  const [list1, setlist1] = useState();
  const [list2, setlist2] = useState();
  const [list3, setlist3] = useState();
  const [rendercount, setRenderCount] = useState(() => false);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  const [skeleton, setSkeleton] = useState(() => true);

  const [data, setData] = useState(false);
  /**Show loader */
  const [showLoader, setShowLoader] = useState(false)


  /**
   * Generate Session Id
   */
  function generateSessionId() {
    setShowLoader(true)
    let api = new API_URLS()
    fetch(api.getSessionUrl())
      .then(response => {
        return response.json();
      })
      .then(res => {
        if (res.Status == 'Success') {
          IntraStocks(res.Response);
          // multipletokens(res.Response);
        } else {
          IntraStocks()
        }

      }, err => {
        IntraStocks()
      })

  }
  // function multipletokens(session) {
  //   const tokens = utils.generateTokens(list, 'segment_id', 'token');
  //   let request = {
  //     MultipleTokens: tokens,
  //     SessionId: session,
  //     UserId: ""
  //   }
  //   rest.multipleTokensURLData(request).then(
  //     res => {
  //       if (res) {
  //         setShowLoader(false)
  //         // setlist1(res);
  //         console.log("called mutiple", res);

  //       } else {

  //         // setlist1([]);
  //       }


  //     }
  //   ).catch((error) => {
  //     setShowLoader(false)
  //     setlist1([]);
  //   });
  // };


  function AllStocks() {
    setShowLoader(true)
    let request = {

      "end_date": utils.formatDate(new Date(), "yyyy-MM-dd"),
      "is_expert": 0,
      "research_type": "Medium To Long Term",
      "limit": 10,
      "offset": 0,
      "segment": "",
      "start_date": utils.formatDate(new Date(new Date().setFullYear(new Date().getFullYear() - 1)), "yyyy-MM-dd"),
      "status": "target_achieved",
      "subcategory_id": "",
      "search": "",
      "id": "",
      "user_id": "",
      "timeline_enabled": 1,
      "category_id": 1



    }
    rest.expertReportData(request).then(
      res => {
        if (res) {
          setShowLoader(false)
          setlist1(res.response.research);
          // console.log("called", res.response.research);

        } else {

          setlist1([]);
        }


      }
    ).catch((error) => {
      setShowLoader(false)
      setlist1([]);
    });
  };
  function LongTermStocks() {
    setShowLoader(true)
    let request = {

      "end_date": utils.formatDate(new Date(), "yyyy-MM-dd"),
      "is_expert": 0,
      "research_type": "Medium To Long Term",
      "limit": 10,
      "offset": 0,
      "segment": "EQ",
      "start_date": utils.formatDate(new Date(new Date().setFullYear(new Date().getFullYear() - 1)), "yyyy-MM-dd"),
      "status": "target_achieved",
      "subcategory_id": "",
      "search": "",
      "id": "",
      "user_id": "",
      "timeline_enabled": 1,
      "category_id": 1



    }
    rest.expertReportData(request).then(
      res => {
        if (res) {
          setShowLoader(false)
          setlist2(res.response.research);
          // console.log("long term api called", res.response.research);

        } else {

          setlist2([]);
        }


      }
    ).catch((error) => {
      setShowLoader(false)
      setlist2([]);
    });
  };

  function ShortTermStocks() {
    setShowLoader(true)
    let request = {

      "end_date": utils.formatDate(new Date(), "yyyy-MM-dd"),
      "is_expert": 0,
      "research_type": "",
      "limit": 10,
      "offset": 0,
      "segment": "EQ",
      "start_date": utils.formatDate(new Date(new Date().setFullYear(new Date().getFullYear() - 1)), "yyyy-MM-dd"),
      "status": "target_achieved",
      "subcategory_id": "",
      "search": "",
      "id": "",
      "user_id": "",
      "timeline_enabled": 1,
      "category_id": 2
    }
    rest.expertReportData(request).then(

      res => {
        setShowLoader(false)
        if (res) {

          setlist3(res.response.research);
          // console.log("check api", res.response.research);


        } else {

          setlist3([]);
        }


      }
    ).catch((error) => {
      setShowLoader(false)
      setlist3([]);
    });
  }

  


  let IntraStocks = (session) => {
    setShowLoader(true)
    let request = {
      "Count": 10,
      "endDate": utils.formatDate(new Date(), "dd-MM-yyyy"),
      "SessionId": session,
      "Start": 0,
      "startDate": utils.formatDate(new Date(new Date().setFullYear(new Date().getFullYear() - 1)), "dd-MM-yyyy"),
      "status": "T1",
      "type": "EQ",
      "UserId": "guest",
      "search": ""
    }
    rest.signalReportData(request).then(
      res => {
        setShowLoader(false)
        if (res) {

          setlist(res.Response.Data);
          // console.log("check api", res.Response.Data);

        } else {

          setlist([]);
        }

      }
    ).catch((error) => {
      setShowLoader(false)
      setlist([]);
    });
  }




  setTimeout(() => {
    setSkeleton(() => false);
  }, 200)
  const location = useLocation();

  useEffect(() => {
    setRenderCount(true)
    if (rendercount === true) {

      document.title = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].title : '';
      // document.getElementById('meta-tags').name= meta_tags[location.pathname.replace('/',"")]? meta_tags[location.pathname.replace('/',"")].title : ''  ;
      document.getElementById('meta-tags').content = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].content : '';
      document.getElementById('canonical-link').href = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].link : '';

      generateSessionId();
      // IntraStocks();
      // multipletokens();
    }
  }, [rendercount])

  function redirectLink() {
    window.open("https://finx.choiceindia.com/market/latest-ipo-list");
  }




  return (
    <div>
      {
        skeleton ? <Template5 /> :
          <div className="sub-broker-skeleton-parent">
            <section className="mainhead">
              <div className="container">
                <div className="row d-flex justify-content-center ">
                  <div className="col-md-12 ">
                    <h2 className="title-secnd1">Best Stocks to Buy Today</h2>
                    <p className="title_para">Choose the best stocks to buy today according to the holding period.</p>
                    <p className="title_para res_para ">Get the list of best stocks to buy today for intraday trading!</p>
                  </div>
                  <div className="col-xl-8 col-md-12">
                    <ul className="list-group list_group1">
                      <li className={toggleState === 0 ? "list-group-item list listsec " : "list-group-item list"} onClick={() => { AllStocks(); toggleTab(0) }}>All Stocks</li>
                      <li className={toggleState === 1 ? "list-group-item list listsec " : "list-group-item list"} onClick={() => { generateSessionId(); toggleTab(1) }}>Intraday Stocks</li>
                      <li className={toggleState === 2 ? "list-group-item list listsec " : "list-group-item list"} onClick={() => { ShortTermStocks(); toggleTab(2) }}>Short Term Stocks</li>
                      <li className={toggleState === 3 ? "list-group-item list listsec " : "list-group-item list"} onClick={() => { LongTermStocks(); toggleTab(3) }}>Long Term Stocks</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="main">
              <div className="container">
                <div className="content-tabs best-stock-tabs-cont active-content">
                  <div className="row d-flex justify-content-center">
                    <div className="col-md-12">
                      {
                        toggleState === 0 ?
                          <div className="row gx-5">
                            {
                              (list1 || []).slice(0, 4).map((response, index) => {

                                return (


                                  <div className="col-md-6" key={index}>
                                    <div className="main-left">

                                      <div className="top-section" >
                                        <div className="top-left">
                                          <h6 className="top-text">Reco Date</h6>
                                          <h6 className="top-date">{utils.formatDate(new Date(response.reco_date), "dd MMMM , yyyy")}</h6>
                                        </div>
                                        <div className="top-right"><button className="btn-buy" onClick={() => redirectLink()}>buy</button></div>
                                      </div>
                                      <div className="middle-section">
                                        <div className="middle-left">
                                          <h4 className="big-text">{response.scrip_name}</h4>
                                          <span className="small-text">{response.scrip_sec_desc}</span>
                                        </div>
                                        <div className="middle-right">
                                          <span className="right-big-text">755.90</span>
                                          <h6 className="right-small-text text_color">-11.5 (1.50%)</h6>
                                        </div>
                                      </div>

                                      <div className="bottom-section">
                                        <div className="d-flex justify-content-between pt-3">
                                          <div className="bottom">
                                            <h6 className="bottom_small_text">Entry Price</h6>
                                            <h4 className="bottom_big_text">{(parseFloat(response.datapoints[0].value).toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h4>



                                          </div>
                                          <div className="bottom">
                                            <h6 className="bottom_small_text">Potential Price</h6>
                                            <h4 className="bottom_big_text" >{(parseFloat(response.datapoints[1].value).toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h4>
                                          </div>
                                          <div className="bottom">
                                            <h6 className="bottom_small_text">Exp. Returns</h6>
                                            <h4 className="bottom_big_text">7.16%</h4>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                )
                              })
                            }
                          </div> :
                          toggleState === 1 ?
                            <div className="row gx-5">
                              {
                                (list || []).slice(0, 4).map((response, index) => {

                                  return (


                                    <div className="col-md-6" key={index}>
                                      <div className="main-left">

                                        <div className="top-section" >
                                          <div className="top-left">
                                            <h6 className="top-text">Reco Date</h6>
                                            <h6 className="top-date">{utils.formatDate(new Date(response.ATime), "dd MMMM , yyyy")}</h6>
                                          </div>
                                          <div className="top-right"><button className="btn-buy" onClick={() => redirectLink()}>buy</button></div>
                                        </div>
                                        <div className="middle-section">
                                          <div className="middle-left">
                                            <h4 className="big-text">{response.Sym}</h4>
                                            <span className="small-text">{response.Name}</span>
                                          </div>
                                          <div className="middle-right">
                                            <span className="right-big-text">755.90</span>
                                            <h6 className="right-small-text text_color">-11.5 (1.50%)</h6>
                                          </div>
                                        </div>

                                        <div className="bottom-section">
                                          <div className="d-flex justify-content-between pt-3">
                                            <div className="bottom">
                                              <h6 className="bottom_small_text">Entry Price</h6>
                                              <h4 className="bottom_big_text">{((response.EP / 100).toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h4>
                                              {/* <h4 className="bottom_big_text">{(response.EP/100).toFixed(2)}</h4> */}
                                            </div>
                                            <div className="bottom">
                                              <h6 className="bottom_small_text">Potential Price</h6>
                                              <h4 className="bottom_big_text" >810.00</h4>
                                            </div>
                                            <div className="bottom">
                                              <h6 className="bottom_small_text">Exp. Returns</h6>
                                              <h4 className="bottom_big_text">7.16%</h4>
                                            </div>
                                            <div className="bottom">
                                              <h6 className="bottom_small_text">Exp. Returns</h6>
                                              <h4 className="bottom_big_text">7.16%</h4>
                                            </div>
                                            <div className="bottom">
                                              <h6 className="bottom_small_text">Exp. Returns</h6>
                                              <h4 className="bottom_big_text">7.16%</h4>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                  )
                                })
                              }
                            </div> :
                            toggleState === 2 ?
                              <div className="row gx-5">
                                {
                                  (list3 || []).slice(0, 4).map((response, index) => {

                                    return (


                                      <div className="col-md-6" key={index}>
                                        <div className="main-left">

                                          <div className="top-section" >
                                            <div className="top-left">
                                              <h6 className="top-text">Reco Date</h6>
                                              <h6 className="top-date">{utils.formatDate(new Date(response.updated_datetime), "dd MMMM , yyyy")}</h6>
                                            </div>
                                            <div className="top-right"><button className="btn-buy" onClick={() => redirectLink()}>buy</button></div>
                                          </div>
                                          <div className="middle-section">
                                            <div className="middle-left">
                                              <h4 className="big-text">{response.scrip_symbol}</h4>
                                              <span className="small-text">{response.scrip_sec_desc}</span>
                                            </div>
                                            <div className="middle-right">
                                              <span className="right-big-text">755.90</span>
                                              <h6 className="right-small-text text_color">-11.5 (1.50%)</h6>
                                            </div>
                                          </div>

                                          <div className="bottom-section">
                                            <div className="d-flex justify-content-between pt-3">
                                              <div className="bottom">
                                                <h6 className="bottom_small_text">Entry Price</h6>
                                                <h4 className="bottom_big_text">{parseFloat(response.datapoints[0].value).toFixed(2)}</h4>
                                              </div>
                                              <div className="bottom">
                                                <h6 className="bottom_small_text">Potential Price</h6>
                                                <h4 className="bottom_big_text" >810.00</h4>
                                              </div>
                                              <div className="bottom">
                                                <h6 className="bottom_small_text">Exp. Returns</h6>
                                                <h4 className="bottom_big_text">7.16%</h4>
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

                              toggleState === 3 ?
                                <div className="row gx-5">
                                  {
                                    (list2 || []).slice(0, 4).map((response, index) => {


                                      return (


                                        <div className="col-md-6" key={index}>
                                          <div className="main-left" >

                                            <div className="top-section" >
                                              <div className="top-left">
                                                <h6 className="top-text">Reco Date</h6>
                                                <h6 className="top-date">{utils.formatDate(new Date(response.reco_date), "dd MMMM , yyyy")}</h6>
                                              </div>
                                              <div className="top-right"><button className="btn-buy" onClick={() => redirectLink()}>buy</button></div>
                                            </div>
                                            <div className="middle-section">
                                              <div className="middle-left">
                                                <h4 className="big-text">{response.scrip_name}</h4>
                                                <span className="small-text">{response.scrip_sec_desc}</span>
                                              </div>
                                              <div className="middle-right">
                                                <span className="right-big-text">755.90</span>
                                                <h6 className="right-small-text text_color">-11.5 (1.50%)</h6>
                                              </div>
                                            </div>

                                            <div className="bottom-section">
                                              <div className="d-flex justify-content-between pt-3">
                                                <div className="bottom">
                                                  <h6 className="bottom_small_text">Entry Price</h6>
                                                  <h4 className="bottom_big_text">{(parseFloat(response.datapoints[0].value).toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h4>
                                                </div>
                                                <div className="bottom">
                                                  <h6 className="bottom_small_text">Potential Price</h6>
                                                  <h4 className="bottom_big_text" >{(parseFloat(response.datapoints[1].value).toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h4>
                                                </div>
                                                <div className="bottom">
                                                  <h6 className="bottom_small_text">Exp. Returns</h6>
                                                  <h4 className="bottom_big_text">7.16%</h4>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>


                                      )
                                    })
                                  }
                                </div> :
                                ""
                      }



                    </div>
                  </div>

                  {/* <div className="row d-flex justify-content-center">
                      <div className="col-md-12">
                        <div className="row gx-5">
                          <div className="col-md-6">
                            <div className="main-left">
                              <div className="top-section">
                                <div className="top-left">
                                  <h6 className="top-text">Reco Date</h6>
                                  <h6 className="top-date">12th Apr '22</h6>
                                </div>
                                <div className="top-right"><button className="btn-buy">buy</button></div>
                              </div>
                              <div className="middle-section">
                                <div className="middle-left">
                                  <h4 className="big-text">JSW Steel Ltd.</h4>
                                  <span className="small-text">BANDHANBANK</span>
                                </div>
                                <div className="middle-right">
                                  <span className="right-big-text">755.90</span>
                                  <h6 className="right-small-text text_color">-11.5 (1.50%)</h6>
                                </div>
                              </div>

                              <div className="bottom-section">
                                <div className="d-flex justify-content-between pt-3">
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Entry Price</h6>
                                    <h4 className="bottom_big_text">757.00</h4>
                                  </div>
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Potential Price</h6>
                                    <h4 className="bottom_big_text" >810.00</h4>
                                  </div>
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Exp. Returns</h6>
                                    <h4 className="bottom_big_text">7.16%</h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="main-left">
                              <div className="top-section">
                                <div className="top-left">
                                  <h6 className="top-text">Reco Date</h6>
                                  <h6 className="top-date">12th Apr '22</h6>
                                </div>
                                <div className="top-right"><button className="btn-buy">buy</button></div>
                              </div>
                              <div className="middle-section">
                                <div className="middle-left">
                                  <h4 className="big-text">Bandhan Bank Ltd</h4>
                                  <span className="small-text">BANDHANBANK</span>
                                </div>
                                <div className="middle-right">
                                  <span className="right-big-text">333.45</span>
                                  <h6 className="right-small-text">+10.6 (3.28%)</h6>
                                </div>
                              </div>

                              <div className="bottom-section">
                                <div className="d-flex justify-content-between pt-3">
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Entry Price</h6>
                                    <h4 className="bottom_big_text">327.30</h4>
                                  </div>
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Potential Price</h6>
                                    <h4 className="bottom_big_text" >350.00</h4>
                                  </div>
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Exp. Returns</h6>
                                    <h4 className="bottom_big_text">4.96%</h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> */}
                </div>
              </div>
            </section>
          </div>


      }
    </div>
  );
}

export default BestStockcategory;