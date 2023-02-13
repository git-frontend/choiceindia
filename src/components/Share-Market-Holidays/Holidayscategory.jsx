import React from "react";
import { useState } from "react";
import Template5 from '../Common-features/Template5';
import { Link } from "react-router-dom";
import OpenDemateAccountStickyFooter from "../Common-features/OpenDemateAccountStickyFooter";
import loaderimg2 from '../../assets/vedio/loader2.mp4';
import {
  useLocation,
} from 'react-router-dom';
import stockmarketholidays from "../../assets/images/share-market-holidays/pdf/stock-market-holidays-2023.pdf";
import { FaRegFilePdf } from 'react-icons/fa';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import { useEffect } from "react";

function Holidayscategory() {

  
  let checkurl = (window.location.pathname == "/stock-market-holidays") ? "stock-market-holidays" : (window.location.pathname == "/nse-holidays") ? "nse-holidays" : (window.location.pathname == "/bse-holidays") ? "bse-holidays" : (window.location.pathname == "/mcx-ncdex-holidays") ? "mcx-ncdex-holidays" : "";

  const [toggleState, setToggleState] = useState(0);
  const [rendercount, setRenderCount] = useState(() => false);
  const [skeleton, setSkeleton] = useState(() => true);
  /**Show loader */
  const [showLoader, setShowLoader] = useState(false)
 

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
  useEffect(() => {
    setRenderCount(true)
    if (rendercount === true) {
      checkurl == 'stock-market-holidays' ;
      checkurl == 'nse-holidays';
      checkurl=='bse-holidays';
      checkurl=='mcx-ncdex-holidays';
    }
  }, [rendercount])




  return (
    <div>
      {
        skeleton ? <Template5 /> :
          <div className="sub-broker-skeleton-parent">
            <section className="mainhead holiday-main">
              <div className="container">
                <div className="row d-flex justify-content-center ">
                  <div className="col-md-12 ">
                    {
                      toggleState == 0 ?
                        <div>
                          <h2 className=" title-secnd1">Stock Market Holidays 2023</h2>
                          <p className="title_para res_para ">Here is the complete list of Indian stock market holidays for the year 2023.</p>
                        </div> :
                        toggleState == 1 ?
                          <div>
                            <h2 className=" title-secnd1">NSE Holidays 2023</h2>
                            <p className="title_para res_para ">Get the list of the best stocks to buy today for short-term investing.</p>
                          </div> :
                          toggleState == 2 ?
                            <div>
                              <h2 className=" title-secnd1">BSE Holidays 2023</h2>
                              <p className="title_para res_para ">Get a list of the best stocks to buy today for long-term investment.</p>
                            </div> :
                            toggleState == 3 ?
                              <div>
                                <h2 className=" title-secnd1">MCX/NCDEX Holidays 2023</h2>
                                <p className="title_para">Choose the best stocks to buy today according to the holding period.</p>
                              </div> :
                              ""
                    }



                  </div>
                  <div className="col-xl-9 col-md-12" id="best-stock">
                    <ul className="list-group list_group1">
                      <li className={toggleState === 0 ? "list-group-item list listsec " : "list-group-item list"} > <Link className="urllinks1" to="/stock-market-holidays" onClick={() => setToggleState(0) } > All</Link></li>
                      <li className={toggleState === 1 ? "list-group-item list listsec " : "list-group-item list"} ><Link className="urllinks1" to="/nse-holidays" onClick={() => setToggleState(1) } >NSE Holidays</Link></li>
                      <li className={toggleState === 2 ? "list-group-item list listsec " : "list-group-item list"}><Link className="urllinks1" to="/bse-holidays" onClick={() => setToggleState(2) } >BSE Holidays</Link></li>
                      <li className={toggleState === 3 ? "list-group-item list listsec " : "list-group-item list"}><Link className="urllinks1" to="/mcx-ncdex-holidays" onClick={() => setToggleState(3) } >MCX/NCDEX Holidays</Link></li>
                    </ul>

                  </div>
                  <div>
                    <p className="title_para title_para-second">Trading Holidays in 2023</p>
                  </div>
                </div>
              </div>
            </section>


            <section className="main-parent holiday-parent">
              <div className="container">
                <div className="content-tabs best-stock-tabs-cont active-content holiday-content">
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
                                      <div className="row">
                                        <div className="col-md-12">
                                          <div className="holidays-table">
                                            <div className="table-responsive wow fadeInUp">
                                              <table className="table table-hover table-striped ">
                                                <thead>
                                                  <tr>
                                                    <th width="20%">S.No </th>
                                                    <th>Holidays</th>
                                                    <th className="holidaydropdown">

                                                   <Dropdown className="drop_list">
                                                      <Dropdown.Toggle variant="success" id="dropdown-basic" className="drop-btn">
                                                        All
                                                      </Dropdown.Toggle>

                                                      <Dropdown.Menu>
                                                        <Form.Check type="checkbox" label="All" />
                                                        <Form.Check type="checkbox" label="January" />
                                                        <Form.Check type="checkbox" label="February" />
                                                        <Form.Check type="checkbox" label="March" /> 
                                                        <Form.Check type="checkbox" label="April" /> 
                                                        <Form.Check type="checkbox" label="May" /> 
                                                        <Form.Check type="checkbox" label="June" /> 
                                                        <Form.Check type="checkbox" label="July" /> 
                                                        <Form.Check type="checkbox" label="August" /> 
                                                        <Form.Check type="checkbox" label="September" />
                                                        <Form.Check type="checkbox" label="October" />
                                                        <Form.Check type="checkbox" label="November" />
                                                        <Form.Check type="checkbox" label="December" /> 

                                                      </Dropdown.Menu>
                                                    </Dropdown>
    

                                                    </th>
                                                    
                                                    <th>Day</th>
                                                  </tr>
                                                </thead>
                                                <tbody>
                                                  <tr>
                                                    <td className="charges-heads">1</td>
                                                    <td>Republic Day</td>
                                                    <td>January 26, 2023</td>
                                                    <td>Thursday</td>
                                                  </tr>
                                                  <tr className="grey-back">
                                                    <td className="charges-heads">2</td>
                                                    <td>Holi</td>
                                                    <td>March 07, 2023</td>
                                                    <td>Wednesday</td>
                                                  </tr>
                                                  <tr>
                                                    <td className="charges-heads">3</td>
                                                    <td>Ram Navami</td>
                                                    <td>March 30, 2023</td>
                                                    <td>Thursday</td>
                                                  </tr>
                                                  <tr>
                                                    <td className="charges-heads">4</td>
                                                    <td>Mahavir Jayanti</td>
                                                    <td>April 04, 2023</td>
                                                    <td>Tuesday</td>
                                                  </tr>
                                                  <tr>
                                                    <td className="charges-heads">5</td>
                                                    <td>Good Friday</td>
                                                    <td>April 07, 2023</td>
                                                    <td>Friday</td>
                                                  </tr>
                                                  <tr>
                                                    <td className="charges-heads">6</td>
                                                    <td>Dr.Baba Saheb Ambedkar Jayanti</td>
                                                    <td>April 14, 2023</td>
                                                    <td>Friday</td>
                                                  </tr>
                                                  <tr>
                                                    <td className="charges-heads">7</td>
                                                    <td>Id-ul-fitr (Ramzan Id)</td>
                                                    <td>April 21, 2023</td>
                                                    <td>Friday</td>
                                                  </tr>
                                                  <tr>
                                                    <td className="charges-heads">8</td>
                                                    <td>Maharashtra Day</td>
                                                    <td>May 01, 2023</td>
                                                    <td>Monday</td>
                                                  </tr>
                                                  <tr>
                                                    <td className="charges-heads">9</td>
                                                    <td>Id-ul-adha (Bakri Id)</td>
                                                    <td>June 28, 2023</td>
                                                    <td>Wednesday</td>
                                                  </tr>
                                                  <tr>
                                                    <td className="charges-heads">10</td>
                                                    <td>Independence Day</td>
                                                    <td>August 15, 2023</td>
                                                    <td>Tuesday</td>
                                                  </tr>
                                                  <tr>
                                                    <td className="charges-heads">11</td>
                                                    <td>Ganesh Chaturthi</td>
                                                    <td>September 19, 2023</td>
                                                    <td>Tuesday</td>
                                                  </tr>
                                                  <tr>
                                                    <td className="charges-heads">12</td>
                                                    <td>Mahatma Gandhi Jayanti</td>
                                                    <td>October 02, 2023</td>
                                                    <td>Monday</td>
                                                  </tr>
                                                  <tr>
                                                    <td className="charges-heads">13</td>
                                                    <td>Dussehra</td>
                                                    <td>October 24, 2023</td>
                                                    <td>Tuesday</td>
                                                  </tr>
                                                  <tr>
                                                    <td className="charges-heads">14</td>
                                                    <td>Diwali Balipratipada</td>
                                                    <td>November 14, 2023</td>
                                                    <td>Tuesday</td>
                                                  </tr>
                                                  <tr>
                                                    <td className="charges-heads">15</td>
                                                    <td>Gurunanak Jayanti</td>
                                                    <td>November 27, 2023</td>
                                                    <td>Monday</td>
                                                  </tr>
                                                  <tr>
                                                    <td className="charges-heads">16</td>
                                                    <td>Christmas</td>
                                                    <td>December 25, 2023</td>
                                                    <td>Monday</td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </div>
                                          </div>
                                          <div className="holiday-list d-flex justify-content-between ">
                                            <div className="holiday-text">Stock Market Holidays 2023 List PDF</div>
                                            <div className="holiday-text download_text">Download PDF<FaRegFilePdf onClick={() => { window.open(stockmarketholidays) }} className="cursor-pointer mr4" /></div>
                                          </div>
                                        </div>
                                      </div> :
                                      toggleState == 1 ?
                                        <div>hello 1</div> :
                                        toggleState == 2 ?
                                          <div>hello 2</div> :
                                          toggleState == 3 ?
                                            <div>hello 3</div> :
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
                        <h2 className="secttitle text-center">NSE & BSE HOLIDAYS 2023</h2>
                      </div>
                      <div className="col-md-12">
                        <div className="para px-3">
                          <input type="checkbox" className="read-more-state" id="post-1" />
                          <span className="read-more-wrap restext"> It’s important to know NSE/BSE holiday list 2023 in advance so that Traders/Investors can square off or carry-forward their positions.
                            <br />
                            <br />
                            <h2 className="font-bold">Share Market Holidays</h2>
                            <br />

                            The Holiday Calendar section will show you the entire list of Market Holidays 2023 that will be observed by all the exchanges including the primary, NSE and BSE. During Market Holidays the Share, Currency or Commodity Trading segments remain closed apart from weekends.
                            <br />
                            <br />
                            <h2 className="font-bold">Muhurat Trading 2023</h2>
                            <br />
                            Muhurat Trading shall be held on Thursday, November 04, 2023 (Diwali – Laxmi Pujan). Timings of Muhurat Trading shall be notified subsequently.
                            Please Note: The Exchange may alter/change any of the above Share Market Holidays for 2023, for which a separate circular shall be issued in advance. The Exchange may, however, close the market on days other than the above schedule holidays or may open the market on days originally declared as holidays. The Exchange may also extend, advance or reduce trading hours when it deems fit and necessary.
                            {/* <span className="read-more-target restext">
                              Signal, an Automated Research Engine that provides research advisory with customised strategies for all types of Traders
                              has been back tested by our in-house advisory with a proven track record that has been in existence for almost a decade
                              now to provide the best intraday stocks to buy and sell.
                              <br />
                              For all stock recommendations for intra day trades, short-term trades and long-term trades , you can refer to the segment providing you with the latest research calls from the experts. <Link to="/open-free-demat-account"> Open a free demat account  </Link> with us to get the best intraday stocks to buy today in India.
                            </span> */}
                            </span>
                             {/* <label htmlFor="post-1" className="read-more-trigger moreless-button"></label> */}
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


                              </span></span>
                               {/* <label htmlFor="post-1" className="read-more-trigger moreless-button"></label> */}
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
