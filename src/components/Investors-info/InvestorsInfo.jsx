
import React from "react";
import Banner from './Banner';
// import InvestorInfoMenu from './InvestorInfoMenu';
// import Yeardetail from './Yeardetail';

import { AiFillCaretUp } from "react-icons/ai";
import "./investorsinfo.scss";
import "./navbar.scss";
function InvestorInfo() {

  return (
    <div>


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

        <iframe src="https://app.churchgatepartners.com/AssignTemplate/BindTempleteview?ClientID=46" title='investor-iframe' style={{width: '100%', height: '1200px', marginTop: '50px'}}>
          Your browser doesn't support iframes
        </iframe>

        {/* <InvestorInfoMenu />
          <Yeardetail /> */}

      </div>


    </div>
  );
}

export default InvestorInfo;
