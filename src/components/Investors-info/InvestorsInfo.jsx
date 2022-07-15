
import React from "react";
import Banner from './Banner';
// import InvestorInfoMenu from './InvestorInfoMenu';
// import Yeardetail from './Yeardetail';

import { AiFillCaretUp } from "react-icons/ai";
import "./investorsinfo.scss";
import "./navbar.scss";
import { useState,useEffect } from 'react';
import Template1 from "../Common-features/Template1";
// import {
//   useLocation,
// } from 'react-router-dom';
// import meta_tags from "../../Data/MetaTags";

function InvestorInfo() {

  const [skeleton, setSkeleton] = useState(() => true);
  const[trigger,setTrigger]=useState(false);

  setTimeout(() => {
    setSkeleton(() => false);
  }, 200)

 
    


  useEffect(() => {
    setTrigger(true)
    if (trigger === true) {
      // console.log("kkk");
 
    }
  }, [trigger])

  return (
    <div>

      {
        skeleton ? <Template1 /> :
          <div className="investor-info-parent">
            <div className="mainwrapper">

              <Banner />

              <section className="countsect">
                <div className="container">
                  <div className="row d-flex align-items-center">
                    <div className="col-md-6">
                      <h2 className="counttext">Choice International Limited</h2>
                    </div>
                    <div className="col-md-6">
                      <div className="count">

                        <div className="number"><span className="green"> 316.00</span> <div className="result"><AiFillCaretUp className="green" /> <div className="percentage"><span className="green">14.75</span> (4.90%)</div></div></div>


                      </div>
                      {/* <div className="subtextwrap d-flex">
              <div className="nse">
                <p className="subtext">NSE</p>
              </div>
              <div className="time">
                <p className="subtext">As on 11 Apr, 2022 | 14:12</p>
              </div>
            </div> */}
                    </div>
                  </div>
                  {/* style="width: 100%; height: 1200px; margin-top:50px;" */}
                </div>
              </section>

              <section>
                <div className="container">
                <iframe src="https://app.churchgatepartners.com/AssignTemplate/BindTempleteview?ClientID=46" title='investor-iframe' style={{ width: '100%', height: '1350px'}} className='invest-iframe'>
                  Your browser doesn't support iframes
                </iframe>
                  </div>
              </section>

              
              {/* <InvestorInfoMenu />
  <Yeardetail /> */}

            </div>
          </div>
      }




    </div>
  );
}

export default InvestorInfo;
