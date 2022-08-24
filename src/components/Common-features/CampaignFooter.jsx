import "../../assets/css/footer.scss"
import ImageFooter0 from '../../assets/images/choice-logo-white.svg';
import React from "react";
import LazyLoader from '../Common-features/LazyLoader';
import { NavLink } from "react-router-dom";
function Footer() {

  return (
    <>
      <div className="Footer">
        <footer className="main-footer">
          {/* <div className="footer-top-sec">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="top-sec-sub">
                    <div className="footer-logo">
                      <NavLink to="/"><LazyLoader src={ImageFooter0} className={"img-fluid"} width={"193"} height={"49"} alt="Loading" /></NavLink>
                    </div>
                  </div>
                  <div className="top-sec-quick-links">
                    <div className="row">
                      <div className="col-md-7">
                        
                      </div>
                      <div className="col-md-5">

                      </div>
                    </div>
                  </div>
                  <div className="top-social-extra-links">
                    <div className="row align-items-center">
                      <div className="col-md-7">
                        
                      </div>
                      <div className="col-md-5">
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          <div className="footer-bottom">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="article">
                    <p>&copy; Choiceinternational. CIN - U65999MH2010PTC198714. All Rights Reserved. <br />
                      Registered with the Securities and Exchange Board of India (SEBI) as a Non-Individual Investment Mutual Fund Distributor (ARN-78908) and with Pension Fund Regulatory and Development Authority (PFRDA) as NPS POP (POPSE52022022).<br />
                    </p>
                    <p>
                      SEBI Reg No. Broking - INZ000160131; Depository Participant - IN - DP - 416 - 2019 , Depository Participant Number: CDSL - 12088800, Trading and clearing member of NSE, NSEFO & NSECDS (13773), MCX (40585), NCDEX (1006) and BSE(3299).<br />
                      Registered Office:  Choice International Limited, Sunil Patodia Tower, J B Nagar, Andheri East, Mumbai, Maharashtra 400099.<br />

                      SEBI Regional Office: Plot No.C4-A, 'G' Block Bandra-Kurla Complex, Bandra (East), Mumbai - 400051, Maharashtra<br />
                      *0.20% brokerage on delivery trades<br />
                      &amp; 0.02% on Equity Intraday trades<br />
                      **Equity Futures: 0.02% per executed order &amp; Equity Options: Flat ₹25 per lot.<br />
                      ***Currency Futures: 0.02% per executed order &amp; Currency Options ₹20 per lot <br />
                      ****Commodity Futures: 0.02% per executed order &amp; Commodity Options ₹50 per lot<br />
                      Brokerage will not exceed the SEBI prescribed limit.<br />
                      Investments in securities markets are subject to market risks, read all the related documents carefully before investing.<br /><br />
                      Disclaimer: We are doing pro trading (Confirm with RMS/management, whether we avail pro trading or not) Refer SEBI Chapter/Master Circular_Section 9_Protrading.<br />
                      *Investment in securities market is subject to market risks, read all the related documents carefully before investing.<br />
                      &copy; Choice International Limited. All Rights Reserved.<br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>

  );
}

export default Footer;

