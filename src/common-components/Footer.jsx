import "../assets/css/footer.scss"
import  ImageFooter0  from '../assets/images/footer-logo.svg';
import  ImageFooter1  from '../assets/images/icons/google-play.svg';
import  ImageFooter2  from '../assets/images/icons/app-store.svg';
import  ImageFooter3  from '../assets/images/sgbdownarrow.svg';
import  ImageFooter4  from '../assets/images/sgbuparrow.svg';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebookF, faLinkedinIn, faInstagram, faYoutube, faTelegramPlane} from '@fortawesome/free-brands-svg-icons'
import React from "react";
import $ from 'jquery';

$(document).ready(function () {

  $('.moreless-button').click(function() {
    $('.moretext').slideToggle();
    if ($('.moreless-button').text() == "Read more") {
      $(this).text("Read less")
    } else {
      $(this).text("Read more")
    }
  });
  
});

function Footer() {
    return (
      <div className="Footer">
                <footer className="main-footer">
            <div className="footer-top-sec">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="top-sec-sub">
                      <div className="footer-logo">
                        <img src={ImageFooter0} className="" />
                      </div>
                    </div>
                    <div className="top-sec-quick-links">
                      <div className="row">
                        <div className="col-md-7">
                          <div className="quick-links-list">
                            <ul className="reset"> 
                              <li>
                                <h4>Services</h4>
                              </li>
                              <li>
                                <a href="#">Equity Broking</a>
                              </li>
                              <li>
                                <a href="#">Wealth Mangement</a>
                              </li>
                              <li>
                                <a href="#">Insurance</a>
                              </li>
                              <li>
                                <a href="#">Loans</a>
                              </li>
                              <li>
                                <a href="#">Merchant Banking</a>
                              </li>
                              <li>
                                <a href="#">Management Consultancy</a>
                              </li>
                              <li>
                                <a href="#">Government Advisory</a>
                              </li>
                              <li>
                                <a href="#">Tax Advisory</a>
                              </li>
                            </ul>
                            <ul className="reset"> 
                              <li>
                                <h4>Company</h4>
                              </li>
                              <li>
                                <a href="#">Our Team</a>
                              </li>
                              <li>
                                <a href="#">Investors</a>
                              </li>
                              <li>
                                <a href="#">Pricing</a>
                              </li>
                              <li>
                                <a href="#">Careers</a>
                              </li>
                              <li>
                                <a href="#">Contact Us</a>
                              </li>
                              <li>
                                <a href="#">FAQ’s</a>
                              </li>
                            </ul>
                            <ul className="reset"> 
                              <li>
                                <h4>Research</h4>
                              </li>
                              <li>
                                <a href="#">Fundamental</a>
                              </li>
                              <li>
                                <a href="#">Technical</a>
                              </li>
                              <li>
                                <a href="#">Fables</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-md-5">
                          <div className="footer-cont-details">
                            <p>Choice International Limited, Sunil Patodia Tower, J B Nagar, Andheri East, Mumbai, Maharashtra 400099. <FontAwesomeIcon icon={faLocationDot} /></p>
                            <p>Monday - Friday : 08:30 am - 7:00 pm <br/>
                              Saturday : 10:00 am - 4:00 pm  <FontAwesomeIcon icon={faClock} /> </p>
                            <p><a href="tel:02267079999">+91-022-6707 9999</a>  <FontAwesomeIcon icon={faPhone} /> </p>
                            <p><a href="mailto:customercare@choiceindia.com">customercare@choiceindia.com</a>  <FontAwesomeIcon icon={faEnvelope} /> </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="top-social-extra-links">
                      <div className="row align-items-center">
                        <div className="col-md-6">
                          <div className="links-wrap-social">
                            <div className="wrap-app-links">
                              <a href="#" target="_blank">
                                <img src={ImageFooter1} className="img-fluid" />
                              </a>
                              <a href="#" target="_blank">
                                <img src={ImageFooter2} className="img-fluid" />
                              </a>
                            </div>
                            <div className="footer-social-links">
                              <a href="#" target="_blank">
                                <FontAwesomeIcon icon={faFacebookF} /> 
                              </a>
                              <a href="#" target="_blank">
                                <FontAwesomeIcon icon={faTwitter} />
                              </a>
                              <a href="#" target="_blank">
                              <FontAwesomeIcon icon={faLinkedinIn} />
                              </a>
                              <a href="#" target="_blank">
                              <FontAwesomeIcon icon={faInstagram} />
                              </a>
                              <a href="#" target="_blank">
                              <FontAwesomeIcon icon={faYoutube} />
                              </a>
                              <a href="#" target="_blank">
                              <FontAwesomeIcon icon={faTelegramPlane} />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <ul className="extra-links-right">
                            <li>
                              Made with <i className="fa fa-heart" aria-hidden="true"></i> in India
                            </li>
                            <li>
                              <a href="#">Privacy Policy</a>
                            </li>
                            <li>
                              <a href="#">Terms &amp; Conditions</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                        <div className="article">
                        <p>&copy; Choiceinternational. CIN - U65999MH2010PTC198714. All Rights Reserved. <br/>
Registered with the Securities and Exchange Board of India (SEBI) as a Non-Individual Investment Mutual Fund Distributor (ARN-78908) and with Pension Fund Regulatory and Development Authority (PFRDA) as NPS POP (POPSE52022022).<br/>
                        </p>
                        <p className="moretext">
                        SEBI Reg No. Broking - INZ000160131; Depository Participant - IN - DP - 416 - 2019 , Depository Participant Number: CDSL - 12088800, Trading and clearing member of NSE, NSEFO & NSECDS (13773), MCX (40585), NCDEX (1006) and BSE(3299).<br/>
Registered Office:  Choice International Limited, Sunil Patodia Tower, J B Nagar, Andheri East, Mumbai, Maharashtra 400099.<br/>
 
SEBI Regional Office: Plot No.C4-A, 'G' Block Bandra-Kurla Complex, Bandra (East), Mumbai - 400051, Maharashtra<br/>
*0.20% brokerage on delivery trades<br/>
&amp; 0.02% on Equity Intraday trades<br/>
**Equity Futures: 0.02% per executed order &amp; Equity Options: Flat ₹25 per lot.<br/>
***Currency Futures: 0.02% per executed order &amp; Currency Options ₹20 per lot <br/>
****Commodity Futures: 0.02% per executed order &amp; Commodity Options ₹50 per lot<br/>
Brokerage will not exceed the SEBI prescribed limit.<br/>
Investments in securities markets are subject to market risks, read all the related documents carefully before investing.<br/><br/>
Disclaimer: We are doing pro trading (Confirm with RMS/management, whether we avail pro trading or not) Refer SEBI Chapter/Master Circular_Section 9_Protrading.<br/>
*Investment in securities market is subject to market risks, read all the related documents carefully before investing.<br/>
&copy; Choice International Limited. All Rights Reserved.<br/>
                        </p>
                      </div>
                      <a className="moreless-button">Read more</a>
                        </div>
                    </div>
                </div>
            </div>
          </footer>
      </div>
    );
  }
  
  export default Footer;
  