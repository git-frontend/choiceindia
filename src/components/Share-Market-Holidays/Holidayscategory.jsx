import React from "react";
import { useState } from "react";
import "../Best-Stocks/best-stock.scss";
import Template5 from '../Common-features/Template5';
import { Link } from "react-router-dom";
import "../Remisier/Remisier.scss";
import rest from "../../Services/rest";
import utils from "../../Services/utils";
import { API_URLS } from "../../Services/API-URLS";
import "../Remisier/Remisier.scss";
import BestStockOpenDematAccount from './BestStockOpenDematAccount';
import OpenDemateAccountStickyFooter from "../Common-features/OpenDemateAccountStickyFooter";
import loaderimg2 from '../../assets/vedio/loader2.mp4';
import noDataimg from '../../assets/images/no-data.webp';
import { useRef } from 'react';
import {
  useLocation,
} from 'react-router-dom';
import meta_tags from "../../Data/MetaTags";
import { useEffect } from "react";


function Holidayscategory() {

  let tokenList = [{}]
  let multiValue = [];
  let AllFilesValue = {};
  let tokens = "";
  let storefile;
  // let checkurl = (window.location.pathname == "/best-stocks-to-buy") ? "all-stock" : (window.location.pathname == "/best-intraday-stocks-to-buy") ? "intraday" : (window.location.pathname == "/best-short-term-stocks-to-buy") ? "short-term" : (window.location.pathname == "/best-stocks-for-long-term-investment") ? "long-term" : "";

  const [toggleState, setToggleState] = useState(0);
  const [list, setlist] = useState();
  const [Data1, setData1] = useState();
  const [rendercount, setRenderCount] = useState(() => false);
  const [skeleton, setSkeleton] = useState(() => true);
  /**Show loader */
  const [showLoader, setShowLoader] = useState(false)
  const [checkdevice, setcheckdevice] = useState();

  const toggleTab = (index) => {
    setToggleState(index);
  };
  function chapterScroll(id) {
    console.log("called", id)
    var element = document.getElementById(id);
    var headerOffset = 140;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
 
  setTimeout(() => {
    setSkeleton(() => false);
  }, 200)
  const location = useLocation();





  return (
    <div>
      {
        skeleton ? <Template5 /> :
          <div className="sub-broker-skeleton-parent">
            <section className="mainhead">
              <div className="container">
                <div className="row d-flex justify-content-center ">
                  <div className="col-md-12 ">
                    {
                      toggleState == 0 ?
                        <div>
                          <h2 className="title-secnd1">Share Market Holidays 2023</h2>
                          <p className="title_para res_para ">Here is the complete list of share markets  for the year 2023.</p>
                        </div> :
                        toggleState == 1 ?
                          <div>
                            <h2 className="title-secnd1">nsc  </h2>
                            <p className="title_para res_para ">Get the list of the best stocks to buy today for short-term investing.</p>
                          </div> :
                          toggleState == 2 ?
                            <div>
                              <h2 className="title-secnd1">bsc </h2>
                              <p className="title_para res_para ">Get a list of the best stocks to buy today for long-term investment.</p>
                            </div> :
                            toggleState == 3 ?
                              <div>
                                <h2 className="title-secnd1">mcx</h2>
                                <p className="title_para">Choose the best stocks to buy today according to the holding period.</p>
                              </div> :
                              ""
                    }



                  </div>
                  <div className="col-xl-8 col-md-12" id="best-stock">
                    <ul className="list-group list_group1">
                      <li className={toggleState === 0 ? "list-group-item list listsec " : "list-group-item list"} > <Link className="urllinks1" to="/All-Share-Market-Holidays"  > All</Link></li>
                      <li className={toggleState === 1 ? "list-group-item list listsec " : "list-group-item list"} ><Link className="urllinks1" to="/NSE-Holidays" >NSE Holidays</Link></li>
                      <li className={toggleState === 2 ? "list-group-item list listsec " : "list-group-item list"}><Link className="urllinks1" to="/BSE-Holidays" >BSE Holidays</Link></li>
                      <li className={toggleState === 3 ? "list-group-item list listsec " : "list-group-item list"}><Link className="urllinks1" to="/MCX-Holidays" >MCX Holidays</Link></li>
                    </ul>
                    <p>Trading Holidays in 2023</p>
                  </div>
                </div>
              </div>
            </section>


            <section className="main-parent">
              <div className="container">
                <div className="content-tabs best-stock-tabs-cont active-content">
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
                                <div className="row gx-5">
                                        <div className="container">
                                          {
                                            toggleState == 0 ?
                                            <div>hello 0</div>:
                                            toggleState == 1 ?
                                            <div>hello 1</div>:
                                            toggleState == 2 ?
                                            <div>hello 2</div>:
                                            toggleState == 3 ?
                                            <div>hello 3</div>:
                                            ""
                                          }
                                        </div>
                                      
                                   
                                  
                                </div>
                              
                            }

                          </div>
                        }
                      </div>

                    </div>
                  </div>


                </div>
              </div>
            </section>
            <OpenDemateAccountStickyFooter />
            <section className="readmoresection readmorecontent">
              <div className="container">

                {
                  toggleState == 0 ?
                    <div className="row">
                      <div className="col-md-12">
                        <h2 className="secttitle text-center">DFCdAXFCGet the Best Intraday Stocks to Buy Today with Choice</h2>
                      </div>
                      <div className="col-md-12">
                        <div className="para px-3">
                          <input type="checkbox" className="read-more-state" id="post-1" />
                          <span className="read-more-wrap restext"> Choice India , a part of Choice Group has excelled in providing various strategies
                            over a span of 25+ years serving the finance industry. In this section, we bring to you the best intraday stocks to buy
                            today with expert research recommendations from one of our features - Signal.
                            <span className="read-more-target restext">
                              Signal, an Automated Research Engine that provides research advisory with customised strategies for all types of Traders
                              has been back tested by our in-house advisory with a proven track record that has been in existence for almost a decade
                              now to provide the best intraday stocks to buy and sell.
                              <br />
                              <br />
                              Signal, as a feature, was designed  after continuous testing and analyzing for app users with no human intervention. Hence, the research calls are completely unbiased and are a projection of complete analysis
                              <br />
                              <br />
                              The feature is an initiative as a solution to the question’ which is the <Link to="/best-stocks-to-buy" onClick={() => setToggleState(0)}> best stock to buy </Link> in intraday’
                              as it is created to generate Intraday Research Calls for Intraday traders based on pattern breakout on a
                              multi-time frame along with volume criteria.
                              <br />
                              <br />
                              The USP of the Intraday stocks to buy today is they come with a Stop Loss as well as targets. However, there is no auto-execution system. It is upto the traders discretion to execute it or not.
                              <br />
                              <br />
                              The basket of stocks to buy today for intraday has been well researched by our expert Mr. Kkunal Parar who is also the developer of the feature. Therefore, the recommendations hold a high success ratio. Here, you can get a variety of stock recommendations that are subjective to intraday trades only.
                              <br />
                              <br />
                              For all stock recommendations for intra day trades, short-term trades and long-term trades , you can refer to the segment providing you with the latest research calls from the experts. <Link to="/open-free-demat-account"> Open a free demat account  </Link> with us to get the best intraday stocks to buy today in India.

                            </span></span> <label htmlFor="post-1" className="read-more-trigger moreless-button"></label>
                        </div>
                      </div>
                    </div> :
                    toggleState == 1 ?

                      <div className="row">
                        <div className="col-md-12">
                          <h2 className="secttitle text-center">C-Quant Offers the Best Stocks to Buy Today in India for Short Term</h2>
                        </div>
                        <div className="col-md-12">
                          <div className="para px-3">
                            <input type="checkbox" className="read-more-state" id="post-1" />
                            <span className="read-more-wrap restext "> Choice Group  introduced C-Quant to facilitate the reach of short-term research
                              calls for all those traders who wish to churn their holdings at a specific pace. Keeping in mind the perspective
                              of best stocks to buy in India for short-term trades, C-Quant was developed.
                              <span className="read-more-target restext">
                                C-Quant employs quantitative and statistical techniques to generate trading calls from the top 100 stocks listed on
                                the NSE ranked by market capitalization and average daily traded volume thus making it one of the desired features
                                for short term stocks to buy today aiming to provide short term trading strategy for traders looking at gains from 1%
                                and above within 5 trading days of trade execution.
                                <br />
                                <br />
                                The feature gives weekly calls in which the returns on each call are more than 1%. The risk to reward ratio
                                is 2:1. These calls have been thoroughly back-tested on historical market data and have a high probability
                                of achieving the target price. The concept has been back-tested for the last six years and has gained its
                                presence to outperform a simple buy-and-hold strategy.
                                <br />
                                <br />
                                The T+5 strategy of C-Quant is devised as a part of our larger offering to serve the requirements of weekly
                                stock recommendations, especially for stocks to buy today for short-term positions. It employs a combination
                                of momentum and correlation of the stock’s daily price to its historical price to forecast price targets.
                                <br />
                                <br />
                                With C-Quant you can  get access to short term trading ideas having a quantitative edge and receive live
                                recommendations here for best stocks to buy for short-term trades that shall enhance  trading/investment
                                experience and thereby, fulfil the requirement as per your trading style. You can also view the bundle of
                                <Link to="/best-stocks-to-buy" onClick={() => setToggleState(0)}> best stocks to buy </Link> today in the ‘All Stocks’ section.
                                <br />
                                <br />
                                Open your <Link to='/open-free-demat-account'>free demat account</Link> with Choice and get the best stocks to buy today in India for a short term time horizon.


                              </span></span> <label htmlFor="post-1" className="read-more-trigger moreless-button"></label>
                          </div>
                        </div>
                      </div> :
                      toggleState == 2 ?
                        <div className="row">
                          <div className="col-md-12">
                            <h2 className="secttitle text-center">Explore Best Stocks to Buy Today in India for Long Term</h2>
                          </div>
                          <div className="col-md-12">
                            <div className="para px-3">
                              <input type="checkbox" className="read-more-state" id="post-1" />
                              <span className="read-more-wrap restext "> Choice has been backed by a strong research cell since 25+years gaining investor confidence, hereby, providing fundamental and technical calls. It has been on the forefront to serve its investors in the best suitable way by giving enhanced trading experience through the app, hassle-free processes to register and expert research recommendations that would be beneficial to the trader.

                                <span className="read-more-target restext">
                                  In addition, it also sources research recommendations hereby bifurcating the universal data to put it in best use for every kind of positional traders that would support them to buy best stocks for intraday trades, best stocks to buy in short term trades and best stocks to buy in long-term trades. The ‘ All Stocks’ segment is the know-how of the stocks to buy in India today for sorts of  positional research recommendations under one roof.
                                  <br />
                                  <br />
                                  The end-to-end solutions as a service provider, the organisations Research section works day-in and day-out to put together the right research methodology to bridge the gap from being just a broking house to gauging maximum exposure on research recommendations.
                                  <br />
                                  <br />
                                  In order to reap the benefits, be ready with your demat and trading account at Choice and start getting the <Link to="/best-stocks-to-buy" onClick={() => setToggleState(0)}> best stocks to buy today </Link> in India for long term investment.

                                </span></span> <label htmlFor="post-1" className="read-more-trigger moreless-button"></label>
                            </div>
                          </div>
                        </div> :
                        toggleState == 3 ?
                          <div className="row">
                            <div className="col-md-12">
                              <h2 className="secttitle text-center">Best Stocks to Buy Today in India</h2>
                            </div>
                            <div className="col-md-12">
                              <div className="para px-3">
                                <input type="checkbox" className="read-more-state" id="post-1" />
                                <span className="read-more-wrap restext"> Choice Group, in the year 2018, invented <Link to="/online-trading-app">Choice FinX </Link> (formerly Jiffy), the trading app to facilitate
                                  the new gen trading needs. The platform was established to simplify the needs of the traders with regards to
                                  which stocks to buy today in India, where to find the right research recommendations etc.

                                  <span className="read-more-target restext">
                                    Research is the backbone of investing and a strong research requires experienced professionals,
                                    identifying the type of research, historical data analysis, performance tracking, addressing real-time
                                    situations, and most importantly, collation and apt analysis of data, thereby giving out research calls
                                    that can be fruitful, and that’s what we are known for. In this section, you can get a glimpse of the best
                                    stocks to buy in India today.
                                    <br />
                                    <br />
                                    We believe in providing investors with every kind of research information for all types of traders such as
                                    intraday traders, short term traders, and long term traders.
                                    <br />
                                    <br />
                                    <h2 className="font-bold">Get the Best Intraday Stocks to Buy Today</h2>
                                    Intraday is a part of our Signal feature in the ‘Research’ Section. Signal,  an Automated Research Engine that provides
                                    research advisory with customised strategies for all types of Traders
                                    with a multi time frame breakout strategy based on the pattern breakout without any human intervention.
                                    Subscribe and get the  <Link to="/best-intraday-stocks-to-buy" onClick={() => setToggleState(1)}>best intraday stocks to buy today.</Link>
                                    <br />
                                    <br />
                                    <h2 className="font-bold">Explore Best Short Term Stocks to Buy Today with C_Quant</h2>
                                    The short-term trades are provided by our C-Quant feature with T+5  short term trading ideas based on
                                    quantitative analysis and statistically tested trading strategy. C_Quant employs quantitative and statistical
                                    techniques to generate trading calls from the top 100 stocks listed on the NSE ranked by market capitalization
                                    and average daily traded volume. Follow our C_Quant strategies and get the <Link to="/best-short-term-stocks-to-buy" onClick={() => setToggleState(2)}> best stocks to buy today in India
                                      for the short term.</Link>
                                    <br />
                                    <br />
                                    <h2 className="font-bold">Get Best Stocks to Buy Today in India for Long Term</h2>
                                    If you're looking for the best stocks to buy today in India for the long-term, you are at the right place.
                                    This segment provides you with long-term research calls recommended by our Executive Director -Sumeet Bagadia.
                                    With his expert advice, one can find solutions for long-term financial goals in investing with targets and stop loss in place.
                                    Open a free demat account with Choice and get the <Link to="/best-stocks-for-long-term-investment" onClick={() => setToggleState(3)}> best stocks to buy today in India for long term investment.</Link>

                                  </span></span> <label htmlFor="post-1" className="read-more-trigger moreless-button"></label>
                              </div>
                            </div>
                          </div> :
                          ""
                }

              </div>
            </section>

          </div>


      }
    </div>
  );
}

export default Holidayscategory;
