
import React from "react";
import { useState, useEffect } from "react";
import ResearchService from "../../Services/ResearchService";

function OurPerformance() {
  const [toggleState, setToggleState] = useState(1);
  const [data, setdata] = useState([]);
  const [list, setlist] = useState([]);
  const[count,setcount] = useState(1);
  const [trigger, setTrigger] = useState(false);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  /** date calculation */

  var today = new Date();
  let month = today.getMonth() + 1;
  let day = today.getDate();
 
  let finalmonth = (today.getMonth() - 2)
  let weekly = (today.getDate() < 10 ?(today.getDate() - 7) + 30:today.getDate() - 7)
  let monthly= (today.getDate() - 7) < 0 ? (today.getMonth()):today.getMonth()+1

console.log("date",weekly)
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

  if (monthly < 10) {
    monthly = "0" + monthly;
  }

  var startdate = day + '-' + month + '-' + today.getFullYear();
  var successFdate = today.getFullYear() + '-' + month + '-' + day;


  var finaldate = day + '-' + finalmonth + '-' + today.getFullYear();
  var counterwdate = weekly + '-' + monthly + '-' + today.getFullYear();
  var countermdate = day + '-' + monthly + '-' + today.getFullYear();



  var successSdate = today.getFullYear() + '-' + finalmonth + '-' + day;
  var successWeek = today.getFullYear() + '-' + monthly + '-' + weekly;
  var successMonth = today.getFullYear() + '-' + monthly + '-' + day;

  console.log("counterwdate",monthly);
  console.log("counterweek",weekly);




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
        console.log("signal",res.Response.EQ.SR);
        setdata(res.Response.EQ.SR);
        console.log("signal");
      }
    )
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
        setlist(res.response);
        console.log("signal2");
      }
    )
  };


 

  useEffect(() => {
    setTrigger(true)
    if (trigger === true) {

      loadperformance(counterwdate);
      loadsuccess(successWeek);
      


    }

  }, [trigger])




  return (
    <div>
      <section className="our-performance">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="heading text-center">
                Our Performance
              </h3>
            </div>
          </div>
          <div className="row gx-5 mt-5 pt-5 ">
            <div className="col-xl-4 col-md-6">

              <div className="progress-bar-performance">
                <div className="card">
                  <div className="percent">
                    <svg className="sb-bar">
                      <circle cx="150" cy="150" r="145"></circle>
                      <circle cx="150" cy="150" r="145" style={{ '--percent': `${list.success_ratio_percentage || 0}` }}></circle>
                    </svg>
                    {/**<svg className="c-quant-bar">
                      <circle cx="125" cy="125" r="120"></circle>
                      <circle cx="125" cy="125" r="120" style={{ '--percent': '55' }}></circle>
  </svg>*/}
                    <svg className="jiffy-signal-bar">
                      <circle cx="100" cy="100" r="95"></circle>
                      <circle cx="100" cy="100" r="95" style={{ '--percent': `${Number(data) || 0}` }}></circle>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-md-6">
              <div className="performance-tabs SB-bloc-tabs">
                <button
                  className={count == 1 ? "tabs active-tabs" : " tabs" }
                  onClick={() => {setcount(1);loadsuccess(successWeek);loadperformance(counterwdate)}}
                >
                  Weekly

                </button>
                <button
                  className={count == 2 ? "tabs active-tabs" :"tabs" }
                  onClick={() => {setcount(2);loadsuccess(successMonth);loadperformance(countermdate)}}
                >
                  Monthly

                </button>
                <button
                  className={count == 3 ? "tabs active-tabs" :"tabs" }
                  onClick={() => {setcount(3);loadsuccess(successSdate);loadperformance(finaldate)}}
                >
                  Quarterly

                </button>
              </div>
              <div className="heading-content-tabs ">
                <div className="content active-content">
                  <div className="wrapper">
                    <div className="wrap">
                      <div className="colorwrap blue"></div>
                      <div className="wrap-des">
                      <p className="subtext">Expert</p>
                        <p className="percentage">{list.success_ratio_percentage||0}</p>
                      </div>
                    </div>
                    {/**<div className="wrap">
                      <div className="colorwrap green"></div>
                      <div className="wrap-des">
                       
                        <p className="percentage">60%</p>
                      </div>
</div>*/}
                    <div className="wrap">
                      <div className="colorwrap yellow"></div>
                      <div className="wrap-des">
                        <p className="subtext">Jiffy Signal</p>
                        <p className="percentage">{Number(data)||0}</p>
                      </div>
                    </div>
                  </div>

                </div>

                {/**<div className={toggleState === 2 ? "content  active-content" : "content"}>
                  <div className="wrapper">

                    <div className="wrap">
                      <div className="colorwrap yellow"></div>
                      <div className="wrap-des">
                        <p className="subtext">Jiffy Signal</p>
                        <p className="percentage">{Number(data.SR)}</p>
                      </div>

                    </div>
                    <div className="wrap">
                      <div className="colorwrap blue"> </div>
                      <div className="wrap-des">
                      <p className="subtext">Expert</p>
                        <p className="percentage">{list.success_ratio_percentage}</p>
                      </div>

                    </div>
                       <div className="wrap">
                      <div className="colorwrap green"></div>
                      <div className="wrap-des">
                       
                        <p className="percentage">60%</p>
                      </div>
</div>

                  </div>
                </div>

                <div
                  className={toggleState === 3 ? "content  active-content" : "content"}>
                  <div className="wrapper">

                    <div className="wrap">
                      <div className="colorwrap yellow"> </div>
                      <div className="wrap-des">
                        <p className="subtext">Jiffy Signal</p>
                        <p className="percentage">{Number(data.SR)}</p>
                      </div>

                    </div>

                       <div className="wrap">
                      <div className="colorwrap green"></div>
                      <div className="wrap-des">
                       
                        <p className="percentage">60%</p>
                      </div>
</div>
                    <div className="wrap">
                      <div className="colorwrap blue"> </div>
                      <div className="wrap-des">
                      <p className="subtext">Expert</p>
                        <p className="percentage">{list.success_ratio_percentage}</p>
                      </div>

                    </div>

                  </div>
</div>*/}

              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}

export default OurPerformance;
