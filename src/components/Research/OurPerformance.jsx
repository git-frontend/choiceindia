
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



  return (
    <div>

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
