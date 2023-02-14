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
import nseholidays from "../../assets/images/share-market-holidays/pdf/nse-holidays-2023.pdf";
import bseholidays from "../../assets/images/share-market-holidays/pdf/bse-holidays-2023.pdf";
import mcxncdexholidays from "../../assets/images/share-market-holidays/pdf/mcx-ncdex-holidays-2023.pdf";
import { FaRegFilePdf } from 'react-icons/fa';
import Dropdown from 'react-bootstrap/Dropdown';

import { useEffect } from "react";
import { MDBCheckbox } from 'mdb-react-ui-kit';

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
                            <p className="title_para res_para ">Here is the complete list of Indian stock market holidays for the year 2023.</p>
                          </div> :
                          toggleState == 2 ?
                            <div>
                              <h2 className=" title-secnd1">BSE Holidays 2023</h2>
                              <p className="title_para res_para ">Here is the complete list of Indian stock market holidays for the year 2023.</p>
                            </div> :
                            toggleState == 3 ?
                              <div>
                                <h2 className=" title-secnd1">MCX/NCDEX Holidays 2023</h2>
                                <p className="title_para">Here is the complete list of Indian stock market holidays for the year 2023.</p>
                              </div> :
                              ""
                    }



                  </div>
                  <div className="col-xl-9 col-md-12" id="best-stock">
                    <ul className="list-group list_group1  holiday-list">
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
                                                    <th width="15%">S.No </th>
                                                    <th>Holidays</th>
                                                    <th className="holidaydropdown">

                                                   <Dropdown className="drop_list">
                                                      <Dropdown.Toggle variant="success" id="dropdown-basic" className="drop-btn">
                                                        All
                                                      </Dropdown.Toggle>

                                                      <Dropdown.Menu>
                                                      <div className="months-custom">
                                                      <MDBCheckbox name='flexCheck' value='' id='check1' label='All' />
                                                      <MDBCheckbox name='flexCheck' value='' id='check2' label='January' />
                                                      <MDBCheckbox name='flexCheck' value='' id='check3' label='February' />
                                                      <MDBCheckbox name='flexCheck' value='' id='check4' label='March' />
                                                      <MDBCheckbox name='flexCheck' value='' id='check5' label='April' />
                                                      <MDBCheckbox name='flexCheck' value='' id='check6' label='May' />
                                                      <MDBCheckbox name='flexCheck' value='' id='check7' label='June' />
                                                      <MDBCheckbox name='flexCheck' value='' id='check8' label='July' />
                                                      <MDBCheckbox name='flexCheck' value='' id='check9' label='August' />
                                                      <MDBCheckbox name='flexCheck' value='' id='check10' label='September' />
                                                      <MDBCheckbox name='flexCheck' value='' id='check11' label='October' />
                                                      <MDBCheckbox name='flexCheck' value='' id='check12' label='November' />
                                                      <MDBCheckbox name='flexCheck' value='' id='check13' label='December' />
                                                      </div>
                                                      </Dropdown.Menu>
                                                    </Dropdown>
                                                    </th>
                                                    <th>Day</th>
                                                  </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td className="charges-heads">1</td>
                                                    <td>New Year Day</td>
                                                    <td>January 01, 2023</td>
                                                    <td>Sunday</td>
                                                  </tr>
                                                  <tr>
                                                    <td className="charges-heads">2</td>
                                                    <td>Republic Day</td>
                                                    <td>January 26, 2023</td>
                                                    <td>Thursday</td>
                                                  </tr>
                                                  <tr className="grey-back">
                                                    <td className="charges-heads">3</td>
                                                    <td>Mahashivratri</td>
                                                    <td>February  18, 2023</td>
                                                    <td>Saturday</td>
                                                  </tr>
                                                  <tr>
                                                    <td className="charges-heads">4</td>
                                                    <td>Holi</td>
                                                    <td>March 07, 2023</td>
                                                    <td>Wednesday</td>
                                                  </tr>
                                                  <tr>
                                                    <td className="charges-heads">5</td>
                                                    <td>Ram Navami</td>
                                                    <td>March 30, 2023</td>
                                                    <td>Thursday</td>
                                                  </tr>
                                                  <tr>
                                                    <td className="charges-heads">6</td>
                                                    <td>Mahavir Jayanti</td>
                                                    <td>April 04, 2023</td>
                                                    <td>Tuesday</td>
                                                  </tr>
                                                  <tr>
                                                    <td className="charges-heads">7</td>
                                                    <td>Good Friday</td>
                                                    <td>April 07, 2023</td>
                                                    <td>Friday</td>
                                                  </tr>
                                                  <tr>
                                                    <td className="charges-heads">8</td>
                                                    <td>Dr.Baba Saheb Ambedkar Jayanti</td>
                                                    <td>April 14, 2023</td>
                                                    <td>Friday</td>
                                                  </tr>
                                                  <tr>
                                                    <td className="charges-heads">9</td>
                                                    <td>Id-Ul-fitr (Ramzan Id)</td>
                                                    <td>April 22, 2023</td>
                                                    <td>Friday</td>
                                                  </tr>
                                                  <tr>
                                                    <td className="charges-heads">10</td>
                                                    <td>Maharashtra Day</td>
                                                    <td>May 01, 2023</td>
                                                    <td>Monday</td>
                                                  </tr>
                                                  <tr>
                                                    <td className="charges-heads">11</td>
                                                    <td>Bakri Eid</td>
                                                    <td>June 28, 2023</td>
                                                    <td>Wednesday</td>
                                                  </tr>
                                                  <tr>
                                                    <td className="charges-heads">12</td>
                                                    <td>Muharram</td>
                                                    <td>July 29, 2023</td>
                                                    <td>Saturday</td>
                                                  </tr>
                                                  <tr>
                                                    <td className="charges-heads">13</td>
                                                    <td>Independence Day</td>
                                                    <td>August 15, 2023</td>
                                                    <td>Tuesday</td>
                                                  </tr>
                                                  <tr>
                                                    <td className="charges-heads">14</td>
                                                    <td>Ganesh Chaturthi</td>
                                                    <td>September 19, 2023</td>
                                                    <td>Tuesday</td>
                                                  </tr>
                                                  <tr>
                                                    <td className="charges-heads">15</td>
                                                    <td>Mahatma Gandhi Jayanti</td>
                                                    <td>October 02, 2023</td>
                                                    <td>Monday</td>
                                                  </tr>
                                                  <tr>
                                                    <td className="charges-heads">16</td>
                                                    <td>Dussehra</td>
                                                    <td>October 24, 2023</td>
                                                    <td>Tuesday</td>
                                                  </tr>
                                                  <tr>
                                                    <td className="charges-heads">17</td>
                                                    <td>Diwali Laxmi Pujan</td>
                                                    <td>November 12, 2023</td>
                                                    <td>Sunday</td>
                                                  </tr>
                                                  <tr>
                                                    <td className="charges-heads">18</td>
                                                    <td>Diwali-Balipratipada</td>
                                                    <td>November 14, 2023</td>
                                                    <td>Tuesday</td>
                                                  </tr>
                                                  <tr>
                                                    <td className="charges-heads">19</td>
                                                    <td>Gurunanak Jayanti</td>
                                                    <td>November 27, 2023</td>
                                                    <td>Monday</td>
                                                  </tr>
                                                  <tr>
                                                    <td className="charges-heads">20</td>
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
                                            <div className="holiday-text download_text">Download<FaRegFilePdf onClick={() => { window.open(stockmarketholidays) }} className="cursor-pointer mr4" /></div>
                                          </div>
                                        </div>
                                      </div> :
                                      toggleState == 1 ?
                                      <div className="row">
                                      <div className="col-md-12">
                                        <div className="holidays-table">
                                          <div className="table-responsive wow fadeInUp">
                                            <table className="table table-hover table-striped ">
                                              <thead>
                                                <tr>
                                                  <th width="15%">S.No </th>
                                                  <th>Holidays</th>
                                                  <th className="holidaydropdown">

                                                 <Dropdown className="drop_list">
                                                    <Dropdown.Toggle variant="success" id="dropdown-basic" className="drop-btn">
                                                      All
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                    <div className="months-custom">
                                                    <MDBCheckbox name='flexCheck' value='' id='check1' label='All' />
                                                    <MDBCheckbox name='flexCheck' value='' id='check2' label='January' />
                                                    <MDBCheckbox name='flexCheck' value='' id='check3' label='February' />
                                                    <MDBCheckbox name='flexCheck' value='' id='check4' label='March' />
                                                    <MDBCheckbox name='flexCheck' value='' id='check5' label='April' />
                                                    <MDBCheckbox name='flexCheck' value='' id='check6' label='May' />
                                                    <MDBCheckbox name='flexCheck' value='' id='check7' label='June' />
                                                    <MDBCheckbox name='flexCheck' value='' id='check8' label='July' />
                                                    <MDBCheckbox name='flexCheck' value='' id='check9' label='August' />
                                                    <MDBCheckbox name='flexCheck' value='' id='check10' label='September' />
                                                    <MDBCheckbox name='flexCheck' value='' id='check11' label='October' />
                                                    <MDBCheckbox name='flexCheck' value='' id='check12' label='November' />
                                                    <MDBCheckbox name='flexCheck' value='' id='check13' label='December' />
                                                    </div>
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
                                                  <td>Maharashtra Day</td>
                                                  <td>May 01, 2023</td>
                                                  <td>Monday</td>
                                                </tr>
                                                <tr>
                                                  <td className="charges-heads">8</td>
                                                  <td>Bakri Eid</td>
                                                  <td>June 28, 2023</td>
                                                  <td>Wednesday</td>
                                                </tr>
                                                <tr>
                                                  <td className="charges-heads">9</td>
                                                  <td>Independence Day</td>
                                                  <td>August 15, 2023</td>
                                                  <td>Tuesday</td>
                                                </tr>
                                                <tr>
                                                  <td className="charges-heads">10</td>
                                                  <td>Ganesh Chaturthi</td>
                                                  <td>September 19, 2023</td>
                                                  <td>Tuesday</td>
                                                </tr>
                                                <tr>
                                                  <td className="charges-heads">11</td>
                                                  <td>Mahatma Gandhi Jayanti</td>
                                                  <td>October 02, 2023</td>
                                                  <td>Monday</td>
                                                </tr>
                                                <tr>
                                                  <td className="charges-heads">12</td>
                                                  <td>Dussehra</td>
                                                  <td>October 24, 2023</td>
                                                  <td>Tuesday</td>
                                                </tr>
                                                <tr>
                                                  <td className="charges-heads">13</td>
                                                  <td>Diwali-Balipratipada</td>
                                                  <td>November 14, 2023</td>
                                                  <td>Tuesday</td>
                                                </tr>
                                                <tr>
                                                  <td className="charges-heads">14</td>
                                                  <td>Gurunanak Jayanti</td>
                                                  <td>November 27, 2023</td>
                                                  <td>Monday</td>
                                                </tr>
                                                <tr>
                                                  <td className="charges-heads">15</td>
                                                  <td>Christmas</td>
                                                  <td>December 25, 2023</td>
                                                  <td>Monday</td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </div>
                                        </div>
                                        <div className="holiday-list d-flex justify-content-between ">
                                          <div className="holiday-text">NSE Holidays 2023 List PDF</div>
                                          <div className="holiday-text download_text">Download<FaRegFilePdf onClick={() => { window.open(nseholidays) }} className="cursor-pointer mr4" /></div>
                                        </div>
                                      </div>
                                    </div> :
                                        toggleState == 2 ?
                                        <div className="row">
                                        <div className="col-md-12">
                                          <div className="holidays-table">
                                            <div className="table-responsive wow fadeInUp">
                                              <table className="table table-hover table-striped ">
                                                <thead>
                                                  <tr>
                                                    <th width="15%">S.No </th>
                                                    <th>Holidays</th>
                                                    <th className="holidaydropdown">
  
                                                   <Dropdown className="drop_list">
                                                      <Dropdown.Toggle variant="success" id="dropdown-basic" className="drop-btn">
                                                        All
                                                      </Dropdown.Toggle>
  
                                                      <Dropdown.Menu>
                                                      <div className="months-custom">
                                                      <MDBCheckbox name='flexCheck' value='' id='check1' label='All' />
                                                      <MDBCheckbox name='flexCheck' value='' id='check2' label='January' />
                                                      <MDBCheckbox name='flexCheck' value='' id='check3' label='February' />
                                                      <MDBCheckbox name='flexCheck' value='' id='check4' label='March' />
                                                      <MDBCheckbox name='flexCheck' value='' id='check5' label='April' />
                                                      <MDBCheckbox name='flexCheck' value='' id='check6' label='May' />
                                                      <MDBCheckbox name='flexCheck' value='' id='check7' label='June' />
                                                      <MDBCheckbox name='flexCheck' value='' id='check8' label='July' />
                                                      <MDBCheckbox name='flexCheck' value='' id='check9' label='August' />
                                                      <MDBCheckbox name='flexCheck' value='' id='check10' label='September' />
                                                      <MDBCheckbox name='flexCheck' value='' id='check11' label='October' />
                                                      <MDBCheckbox name='flexCheck' value='' id='check12' label='November' />
                                                      <MDBCheckbox name='flexCheck' value='' id='check13' label='December' />
                                                      </div>
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
                                                    <td>Maharashtra Day</td>
                                                    <td>May 01, 2023</td>
                                                    <td>Monday</td>
                                                  </tr>
                                                  <tr>
                                                    <td className="charges-heads">8</td>
                                                    <td>Bakri Eid</td>
                                                    <td>June 28, 2023</td>
                                                    <td>Wednesday</td>
                                                  </tr>
                                                  <tr>
                                                    <td className="charges-heads">9</td>
                                                    <td>Independence Day</td>
                                                    <td>August 15, 2023</td>
                                                    <td>Tuesday</td>
                                                  </tr>
                                                  <tr>
                                                    <td className="charges-heads">10</td>
                                                    <td>Ganesh Chaturthi</td>
                                                    <td>September 19, 2023</td>
                                                    <td>Tuesday</td>
                                                  </tr>
                                                  <tr>
                                                    <td className="charges-heads">11</td>
                                                    <td>Mahatma Gandhi Jayanti</td>
                                                    <td>October 02, 2023</td>
                                                    <td>Monday</td>
                                                  </tr>
                                                  <tr>
                                                    <td className="charges-heads">12</td>
                                                    <td>Dussehra</td>
                                                    <td>October 24, 2023</td>
                                                    <td>Tuesday</td>
                                                  </tr>
                                                  <tr>
                                                    <td className="charges-heads">13</td>
                                                    <td>Diwali-Balipratipada</td>
                                                    <td>November 14, 2023</td>
                                                    <td>Tuesday</td>
                                                  </tr>
                                                  <tr>
                                                    <td className="charges-heads">14</td>
                                                    <td>Gurunanak Jayanti</td>
                                                    <td>November 27, 2023</td>
                                                    <td>Monday</td>
                                                  </tr>
                                                  <tr>
                                                    <td className="charges-heads">15</td>
                                                    <td>Christmas</td>
                                                    <td>December 25, 2023</td>
                                                    <td>Monday</td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </div>
                                          </div>
                                          <div className="holiday-list d-flex justify-content-between ">
                                            <div className="holiday-text">BSE Holidays 2023 List PDF</div>
                                            <div className="holiday-text download_text">Download<FaRegFilePdf onClick={() => { window.open(bseholidays) }} className="cursor-pointer mr4" /></div>
                                          </div>
                                        </div>
                                      </div> :
                                          toggleState == 3 ?
                                          <div className="row">
                                          <div className="col-md-12">
                                            <div className="holidays-table">
                                              <div className="table-responsive wow fadeInUp">
                                                <table className="table table-hover table-striped ">
                                                  <thead>
                                                    <tr>
                                                      <th width="15%">S.No </th>
                                                      <th>Holidays</th>
                                                      <th className="holidaydropdown">
    
                                                     <Dropdown className="drop_list">
                                                        <Dropdown.Toggle variant="success" id="dropdown-basic" className="drop-btn">
                                                          All
                                                        </Dropdown.Toggle>
    
                                                        <Dropdown.Menu>
                                                        <div className="months-custom">
                                                        <MDBCheckbox name='flexCheck' value='' id='check1' label='All' />
                                                        <MDBCheckbox name='flexCheck' value='' id='check2' label='January' />
                                                        <MDBCheckbox name='flexCheck' value='' id='check3' label='February' />
                                                        <MDBCheckbox name='flexCheck' value='' id='check4' label='March' />
                                                        <MDBCheckbox name='flexCheck' value='' id='check5' label='April' />
                                                        <MDBCheckbox name='flexCheck' value='' id='check6' label='May' />
                                                        <MDBCheckbox name='flexCheck' value='' id='check7' label='June' />
                                                        <MDBCheckbox name='flexCheck' value='' id='check8' label='July' />
                                                        <MDBCheckbox name='flexCheck' value='' id='check9' label='August' />
                                                        <MDBCheckbox name='flexCheck' value='' id='check10' label='September' />
                                                        <MDBCheckbox name='flexCheck' value='' id='check11' label='October' />
                                                        <MDBCheckbox name='flexCheck' value='' id='check12' label='November' />
                                                        <MDBCheckbox name='flexCheck' value='' id='check13' label='December' />
                                                        </div>
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
                                                      <td>Maharashtra Day</td>
                                                      <td>May 01, 2023</td>
                                                      <td>Monday</td>
                                                    </tr>
                                                    <tr>
                                                      <td className="charges-heads">8</td>
                                                      <td>Bakri Eid</td>
                                                      <td>June 28, 2023</td>
                                                      <td>Wednesday</td>
                                                    </tr>
                                                    <tr>
                                                      <td className="charges-heads">9</td>
                                                      <td>Independence Day</td>
                                                      <td>August 15, 2023</td>
                                                      <td>Tuesday</td>
                                                    </tr>
                                                    <tr>
                                                      <td className="charges-heads">10</td>
                                                      <td>Ganesh Chaturthi</td>
                                                      <td>September 19, 2023</td>
                                                      <td>Tuesday</td>
                                                    </tr>
                                                    <tr>
                                                      <td className="charges-heads">11</td>
                                                      <td>Mahatma Gandhi Jayanti</td>
                                                      <td>October 02, 2023</td>
                                                      <td>Monday</td>
                                                    </tr>
                                                    <tr>
                                                      <td className="charges-heads">12</td>
                                                      <td>Dussehra</td>
                                                      <td>October 24, 2023</td>
                                                      <td>Tuesday</td>
                                                    </tr>
                                                    <tr>
                                                      <td className="charges-heads">13</td>
                                                      <td>Diwali-Balipratipada</td>
                                                      <td>November 14, 2023</td>
                                                      <td>Tuesday</td>
                                                    </tr>
                                                    <tr>
                                                      <td className="charges-heads">14</td>
                                                      <td>Gurunanak Jayanti</td>
                                                      <td>November 27, 2023</td>
                                                      <td>Monday</td>
                                                    </tr>
                                                    <tr>
                                                      <td className="charges-heads">15</td>
                                                      <td>Christmas</td>
                                                      <td>December 25, 2023</td>
                                                      <td>Monday</td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </div>
                                            </div>
                                            <div className="holiday-list d-flex justify-content-between ">
                                              <div className="holiday-text">MCX/NCDEX Holidays 2023 List PDF</div>
                                              <div className="holiday-text download_text">Download<FaRegFilePdf onClick={() => { window.open(mcxncdexholidays) }} className="cursor-pointer mr4" /></div>
                                            </div>
                                          </div>
                                        </div> :
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
                   
                  </div> :
                      toggleState == 2 ?
                      <div className="row">
                      
                    </div> :
                        toggleState == 3 ?
                        <div className="row">
                       
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
