
import React from "react";
import { useState, useEffect } from "react";
import ResearchService from "../../Services/ResearchService";
import loaderimg2 from '../../assets/vedio/loader2.mp4';
import noDataimg from '../../assets/images/no-data.webp';
import "../CodeConduct/code-conduct.scss";
import "../Corporate-Governance/corporate-governance.scss";
import associates from "../../assets/images/research/pdf/Details of Associates.pdf";
import Disclaimer from "../../assets/images/research/pdf/Disclaimer.pdf";
import Disciplinary from "../../assets/images/research/pdf/Details of Disciplinary Action.pdf";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaRegFilePdf } from 'react-icons/fa';
import { faEye } from '@fortawesome/free-solid-svg-icons';
function OurPerformance() {
  const [toggleState, setToggleState] = useState(1);
  const [data, setdata] = useState([]);
  const [list, setlist] = useState([]);
  const [count, setcount] = useState(1);
  const [trigger, setTrigger] = useState(false);
  const [isloading, setisloading] = useState(true);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  /** date calculation */

  var today = new Date();
  let month = today.getMonth() + 1;
  let day = today.getDate();

  // let finalmonth = (today.getMonth() - 2)
  let fiveday = ((today.getDate() - 5) < 0 ? (today.getDate() - 5) + 30 : today.getDate() - 5);
  let weekly = ((today.getDate() - 7) < 0 ? (today.getDate() - 7) + 30 : today.getDate() - 7)
  let monthly = today.getMonth();
  let finalmonth = (today.getDate() - 7 || today.getDate() - 5) < 0 ? today.getMonth() : today.getMonth() + 1


  if (month < 10) {
    month = "0" + month;
  }
  if (finalmonth < 10) {
    finalmonth = "0" + finalmonth;
  }

  if (day < 10) {
    day = "0" + day;
  }

  if (weekly < 10) {
    weekly = "0" + weekly;
  }
  if (fiveday < 10) {
    fiveday = "0" + fiveday;
  }

  if (monthly < 10) {
    monthly = "0" + monthly;
  }

  var startdate = day + '-' + month + '-' + today.getFullYear();
  var successFdate = today.getFullYear() + '-' + month + '-' + day;


  // var finaldate = day + '-' + finalmonth + '-' + today.getFullYear();
  var fivedate = fiveday + '-' + finalmonth + '-' + today.getFullYear();
  var counterwdate = weekly + '-' + finalmonth + '-' + today.getFullYear();
  var countermdate = day + '-' + monthly + '-' + today.getFullYear();



  var successSdate = today.getFullYear() + '-' + finalmonth + '-' + fiveday;
  var successWeek = today.getFullYear() + '-' + finalmonth + '-' + weekly;
  var successMonth = today.getFullYear() + '-' + monthly + '-' + day;

  function loadperformance(date) {

    let request = {
      count: 0,
      endDate: startdate,
      sessionId: "9CD8B0421F",
      start: 0,
      startDate: date,
      type: "EQ",
      userId: "guest"
    }
    ResearchService.performanceratio(request).then(
      res => {
        if (res) {
          setisloading(false);
          setdata(res.Response.EQ.SR);
        } else {
          setisloading(false);
          setdata([]);
        }


      }
    ).catch((error) => {
      setisloading(false);
      setdata([]);
    });
  };



  function loadsuccess(date) {

    let request = {
      end_date: successFdate,
      is_expert: 0,
      research_type: "",
      segment: "",
      start_date: date,
      status: "",
      user_id: "guest"

    }
    ResearchService.successratio(request).then(
      res => {
        if (res) {
          setisloading(false);
          setlist(res.response);

        } else {
          setisloading(false);
          setlist([]);
        }


      }
    ).catch((error) => {
      setisloading(false);
      setlist([]);
    });
  };




  // useEffect(() => {
  //   setTrigger(true)
  //   if (trigger === true) {
  //     loadsuccess(successSdate);
  //     loadperformance(fivedate);



  //   }

  // }, [trigger])




  return (
    <div>
      {/* <section className="our-performance">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="heading text-center">
                Our Performance
              </h3>
            </div>
          </div>
          <div className="row gx-5 mt-5 pt-5 d-none">
            <div className="col-xl-4 col-md-6">
              <div className="col-xl-7 col-md-6">
                
              </div>
            </div>
          </div>
          <div className="performance-new-sec">
            <div className="row justify-content-center">
              <div className="col-xl-11 col-md-12">
                <div className="new-sec-sub">
                  <div className="left-tb">
                    <ul className="reset">
                      <li className={((count == 1) ? "pr-tab cursor-pointer active" : "pr-tab cursor-pointer ")} onClick={() => { setcount(1); loadsuccess(successSdate); loadperformance(fivedate) }}>last 5 days </li>
                      <li className={((count == 2) ? "pr-tab cursor-pointer active" : "pr-tab cursor-pointer ")} onClick={() => { setcount(2); loadsuccess(successWeek); loadperformance(counterwdate) }}>last week </li>
                      <li className={((count == 3) ? "pr-tab cursor-pointer active" : "pr-tab cursor-pointer ")} onClick={() => { setcount(3); loadsuccess(successMonth); loadperformance(countermdate) }}>last month   </li>
                    </ul>
                  </div>

                  <div className="right-tb">
                    {
                      isloading ?
                        <div className="text-center">
                          <div>
                           
                            <video src={loaderimg2} autoPlay loop muted className='img-fluid d-block mx-auto' height={250} width={250} />
                            </div>
                        </div>
                        :
                        <div className="progress-bar-performance">
                          {
                            (list && list.length) || (data && data.length) ?
                              <div className="card">

                                <div className="percent">
                                  <svg className="sb-bar">
                                    <circle cx="165" cy="165" r="145"></circle>
                                    <circle cx="165" cy="165" r="145" style={{ '--percent': `${list.success_ratio_percentage || 0}` }}></circle>
                                  </svg>
                                  <div className="cont-perc">
                                    <h3>{Math.round(list.success_ratio_percentage) || 0}%</h3>
                                    <h4>SB desk</h4>
                                  </div>
                                </div>



                                <div className="percent">
                                  <svg className="jiffy-signal-bar">
                                    <circle cx="165" cy="165" r="145"></circle>
                                    <circle cx="165" cy="165" r="145" style={{ '--percent': `${Number(data) || 0}` }}></circle>
                                  </svg>
                                  <div className="cont-perc">
                                    <h3 className="sgnl-txt">{Math.round(data) || 0}%</h3>
                                    <h4>Choice FinX signal</h4>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="filedownloadfaq">
        <div className="container">
        <div className="code-mainwrapper  d-flex justify-content-between pb-3 pt-3 disclaimernew">
            <div>Disclaimer &amp; Disclosure</div>
                  <div><FaRegFilePdf onClick={() => { window.open(Disclaimer) }} className="cursor-pointer" /></div>
            </div>
          <div className="row code-mainwrapper cgmainwrap">
            <div className="col-md-12">
              <h3 className="head">Document</h3>

              <div className="subtext">

                <div className="border-bottom d-flex justify-content-between pb-3 pt-3" >
                  <div>Details of Associates</div>
                  <div><FontAwesomeIcon icon={faEye} onClick={() => { window.open(associates) }} className="cursor-pointer" /></div>
                </div>
                <div className="border-bottom d-flex justify-content-between pb-3 pt-3" >
                  <div>Details of Disciplinary Action</div>
                  <div><FontAwesomeIcon icon={faEye} onClick={() => { window.open(Disciplinary) }} className="cursor-pointer" /></div>

                </div>
              </div>
            </div>




          </div>
        </div>


      </section>



    </div>
  );
}

export default OurPerformance;
