import "../../assets/css/footer.scss"
import ImageFooter0 from '../../assets/images/choice-logo-white.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faLocationDot, faPhone, faEnvelope, faHeart, } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebookF, faLinkedinIn, faInstagram, faYoutube, faTelegramPlane } from '@fortawesome/free-brands-svg-icons'
import appstore from '../../assets/images/icons/app-store.svg';
import React from "react";
import LazyLoader from '../Common-features/LazyLoader';
import { Link, useNavigate, NavLink } from "react-router-dom";
import CommonModal from "./CommonModal";
import { useState } from "react";
import { useEffect } from "react";
import Marquee from 'react-fast-marquee';
function Footer() {
  let toggleModal = (val) => {
    setData1(val)
  }
  const [data, setData] = useState({
    "title": "Terms And Conditions",
    "content": "We are capturing this data for communication purpose only and it's stored securely. We protect your privacy like it's ours! By agreeing you are allowing us to send updates via SMS/WhatsApp/Email/Call which will also override & will not be termed as violation of DND.",
    "isShow": false,
    "toggleModal": toggleModal,
    "closebtn": "Close"
  });
  const [data1, setData1] = useState(false);

  function chapterScroll(id) {
    var element = document.getElementById(id);
    var headerOffset = 140;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }

  useEffect(() => {
  }, [data])

  function openModal() {
    setData1(true)
    let obj = data
    obj.isShow = true

    setData(obj);

  }
  function insuranceLink(){
    
     window.open("https://choiceinsurance.in/");   
  }

  return (
    <>
      <div className="Footer">
        <footer className="main-footer">
          <div className="footer-top-sec">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="top-sec-sub">
                    <div className="footer-logo">
                      <NavLink to="/"><LazyLoader src={ImageFooter0} className={"img-fluid"} width={"193"} height={"49"} alt="Choice Financial Services" /></NavLink>
                      {/* <img src={ImageFooter0} className=""  alt='Loading'/> */}
                    </div>
                  </div>
                  <div className="top-sec-quick-links">
                    <div className="row">
                      <div className="col-lg-8 col-md-12 col-sm-12">
                        <div className="quick-links-list">
                          <ul className="reset">
                            <li>
                              <h4>Services</h4>
                            </li>

                            <li>
                              <NavLink className="cursor-pointer" to="/equity-broking" >Broking &amp; Distribution</NavLink>
                            </li>
                            <li>
                              <NavLink className="cursor-pointer">Wealth Planning</NavLink>
                            </li>
                            <li>
                              <NavLink className="cursor-pointer"  onClick={insuranceLink}>Insurance</NavLink>
                            </li>
                            <li>
                              <NavLink className="cursor-pointer" to="/loan" >Loans</NavLink>
                            </li>
                            <li>
                              <NavLink className="cursor-pointer">Capital Advisory</NavLink>
                            </li>
                            <li>
                              <NavLink className="cursor-pointer">Management Consultancy</NavLink>
                            </li>
                            <li>
                              <NavLink className="cursor-pointer" to="/government-advisory" >Government Advisory</NavLink>
                            </li>
                            <li>
                              <NavLink className="cursor-pointer">Tax Advisory</NavLink>
                            </li>
                          </ul>
                          <ul className="reset quicklink2">
                            <li>
                              <h4>Company</h4>
                            </li>
                            <li>
                              <NavLink to="/about-us">Our Team</NavLink>
                            </li>
                            <li>
                              <NavLink to="/investors">Investors</NavLink>
                            </li>
                            {/* <li>
                              <NavLink to="/brokerage-charges">Pricing</NavLink>
                            </li> */}
                            <li>
                              <a href="https://finx.choiceindia.com/tools/brokerage-calculator" target="_blank">Calculator</a>
                            </li>
                            <li>
                              <NavLink to="/career">Careers</NavLink>
                            </li>
                            <li>
                              <NavLink to="/contact-us">Contact Us</NavLink>
                            </li>
                            <li>
                              <NavLink to="/refer-and-earn">Refer &amp; Earn</NavLink>
                            </li>
                            <li>
                              <NavLink to="/faq">FAQ’s</NavLink>
                            </li>
                          </ul>
                          <ul className="reset quicklink2">
                            <li>
                              <h4>Resources</h4>
                            </li>
                            <li>
                              <NavLink to="/research-listing" onClick={() => { chapterScroll('longterm-scroll') }} >Fundamental</NavLink>
                            </li>
                            <li>
                              <NavLink to="/research-listing" onClick={() => { chapterScroll('shortterm-scroll') }}>Technical</NavLink>
                            </li>
                            <li>
                              <NavLink to="/blog">Fables</NavLink>
                            </li>
                            <li>
                              <NavLink to="/brokerage-charges">Pricing</NavLink>
                            </li>
                            <li>
                              <NavLink to="/file-download">Downloads</NavLink>
                            </li>
                            <li>
                              <NavLink to="/news-media">News &amp; Media</NavLink>
                            </li>
                            <li>
                              <Link to="/offer-document">Offer Document</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-12 col-lg-4">
                        <div className="footer-cont-details">
                          <p>Choice International Limited , Sunil Patodia Tower, <br /> J B Nagar, Andheri(East), <br />Mumbai 400099. <FontAwesomeIcon icon={faLocationDot} /></p>
                          <p>Monday - Friday : 08:30 am - 7:00 pm <br />
                            Saturday : 10:00 am - 4:00 pm  <FontAwesomeIcon icon={faClock} /> </p>
                          <p><a href="tel:02267079999" target="_blank">+91-022-6707 9999</a>  <FontAwesomeIcon icon={faPhone} /> </p>
                          <p><a href="mailto:customercare@choiceindia.com" target="_blank">customercare@choiceindia.com</a>   <FontAwesomeIcon icon={faEnvelope} /> </p>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div className="top-social-extra-links">
                    <div className="row align-items-center">
                      <div className="col-md-7">
                        <div className="links-wrap-social">
                          <div className="wrap-app-links">

                            <a href="https://play.google.com/store/apps/details?id=com.choiceequitybroking.jiffy" target="_blank" >
                              <div className='link-nrl link-nrl-sm white'>
                                <svg width="25" height="25" viewBox="0 0 41 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M0.549316 4.31975C0.549316 3.28063 0.84049 2.49725 1.31842 1.99816L1.3579 1.96035L22.8228 23.0876V23.4841L1.3579 44.6114L1.31843 44.5736C0.840494 44.0745 0.549316 43.2911 0.549316 42.252V4.31975Z" fill="#13151A" stroke="#0066B3" strokeWidth="0.25" />
                                  <path d="M38.4983 25.5919L38.4983 25.5919L30.1199 30.2505L30.1199 30.2505L30.0386 30.2957L23.0737 23.4752V23.0907L30.042 16.2717L38.4982 20.9723C38.4982 20.9723 38.4983 20.9723 38.4983 20.9723C39.6724 21.6258 40.2283 22.4683 40.2283 23.2827C40.2283 24.0971 39.6724 24.9392 38.4983 25.5919Z" fill="#13151A" stroke="#0066B3" strokeWidth="0.25" />
                                  <path d="M1.62287 45.1122L22.8585 23.4627L29.9121 30.6537L4.95617 45.111C4.95616 45.111 4.95615 45.111 4.95613 45.111C3.56725 45.9149 2.36921 45.8304 1.62287 45.1122Z" fill="#13151A" stroke="#0066B3" strokeWidth="0.25" />
                                  <path d="M1.62287 1.45625C2.36922 0.738031 3.56727 0.653568 4.95617 1.4575L29.9121 15.9147L22.8585 23.1058L1.62287 1.45625Z" fill="#13151A" stroke="#0066B3" strokeWidth="0.25" />
                                </svg>

                                <span className='blackcolor' target="_blank">Google Play</span>
                              </div>
                            </a>

                            <a href="https://apps.apple.com/us/app/jiffy-mobile-trading-app/id1327801261?ls=1" target="_blank" >
                              <div className='link-nrl link-nrl-sm white'>
                                <img src={appstore} className="" alt={"App Store"} width="27" height="24" />

                                <span className='blackcolor' target="_blank">App Store</span>
                              </div>
                            </a>

                          </div>
                          
                            <div className="footer-social-links">
                            <a href="https://www.facebook.com/ChoiceHQ/" aria-label="Facebook" target="_blank">
                              <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                            <a href="https://twitter.com/ChoiceHQ_Social" aria-label="Twitter" target="_blank">
                              <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a href="https://www.linkedin.com/company/choice-broking/" aria-label="Linkedin" target="_blank">
                              <FontAwesomeIcon icon={faLinkedinIn} />
                            </a>
                            <a href="https://instagram.com/choicehq_social" aria-label="Instagram" target="_blank">
                              <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a href="https://www.youtube.com/c/ChoiceHQ" aria-label="Youtube" target="_blank">
                              <FontAwesomeIcon icon={faYoutube} />
                            </a>
                            <a href="https://t.me/CEBPL" aria-label="Telegram" target="_blank">
                              <FontAwesomeIcon icon={faTelegramPlane} />
                            </a>
                          </div>
                          
                        </div>
                      </div>
                      <div className="col-md-5">
                        <ul className="extra-links-right">
                          <li>
                            Made with  <FontAwesomeIcon icon={faHeart} />  in India
                          </li>
                          <li>
                            <NavLink to="/privacy-policy">Privacy Policy</NavLink>
                          </li>
                          <li className="cursor-pointer">
                            {/* <a onClick={()=>{openModal()}}>Terms &amp; Conditions</a> */}
                            <Link to="/terms-conditions">Terms &amp; Conditions</Link>
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
                    <p><strong>Choiceinternational. CIN - L67190MH1993PLC071117</strong><br />
                      <strong>Choice Equity Broking Private Limited</strong>: SEBI Reg No. Broking - INZ000160131 ( BSE - 3299 )  | ( NSE - 13773 ) | ( MSEI - 73200 ) | ( MCX - 40585 ) | ( NCDEX - 01006 ). <br /> Depository Participant SEBI Reg. No. - IN - DP - 84 - 2015 , DP ID CDSL - 12066900 , NSDL ID - IN301895. Research Analyst - INH000000222<br />
                      <strong>Choice Wealth Private Limited</strong>: AMFI - Registered Mutual Fund Distributor. Association of Mutual Funds in India Registeration Number - ARN - 78908. <br /> Pension Fund Regulatory and Development Authority (PFRDA) - POPSE52022022 | Affiliated with POP HDFC Pension Management Company.<br />
                      <strong>Choice Finserv Private Limited</strong>: NBFC Registration Number : N - 13.02216 <br />
                    </p>
                    <p>
                      <strong> Choice Insurance Broking Private Limited</strong>: IRDAI License No: 167, License Valid Till: 29-05-2024
                      | Category : Direct ( Life &amp; General )<br />
                      Registered Office:  Choice International Limited, Sunil Patodia Tower, J B Nagar, Andheri East, Mumbai, Maharashtra 400099.<br />
                      For any Grievances / Queries email at <a href="mailto:info@choiceindia.com">ig@choiceindia.com</a> &amp; <a href="mailto:customercare@choiceindia.com">customercare@choiceindia.com</a> <br /><br />
                     
                      Cautionary Message :
                      <ol style={{ marginleft: "-1rem" }} className="ol-p0">
                        <li>Sharing of trading credentials – login id &amp; passwords including OTP’s:- Keep Your Password/Pin and OTP’s private &amp; confidential to avoid any misuse or unauthorised trades. Please ensure that you do not share it with any one.</li>
                        <li>Trading in leveraged products like options without proper understanding, which could lead to losses</li>
                        <li>Writing/ selling options or trading in option strategies based on tips, without basic knowledge &amp; understanding of the product and its risks</li>
                        <li>Dealing in unsolicited tips through Whatsapp, Telegram, YouTube, Facebook, SMS, calls, etc.</li>
                        <li>Trading in “Options” based on recommendations from unauthorised / unregistered investment advisors and influencers</li>
                      </ol>

                      Disclaimer: <br />
                      1. *Investments in securities market are subject to market risks, read all the related documents carefully before investing.<br />
                      2. In addition to client based business, we are also doing proprietary trading. <br />
                      3. Brokerage will not exceed the SEBI prescribed limit.<br />

                      &copy; Choice International Limited. All Rights Reserved.

                    </p>
                  </div>
                  {/* <a className="moreless-button">Read more</a> */}
                </div>
                {/* <a className="moreless-button">Read more</a> */}
              </div>
            </div>
          </div>

          <div className="footer-marquee">
            <Marquee direction="left" speed={100} delay={1} pauseOnHover={true} pauseOnClick={true} className="client-list-slider career-list-slider">
              <p>Attention Investors: ( 1 ) Prevent unauthorized transactions in your trading account - Update your mobile numbers/email IDs with your stock broker(s). Receive information of your transactions directly from exchange on your mobile/email at the end of the day. ( 2 )  Prevent unauthorized transactions in your demat account - Update your mobile number with your Depository Participant, to receive alerts on your registered mobile number for all debit and other important transactions in your demat account directly from NSDL/CDSL on the same day. - Issued in the interest of the investors. ( 3 ) No need to issue Cheque by investors while subscribing to IPO. Just write the bank account number and sign in the application form to authorise your bank to make payment in case of allotment. ( 4 ) No worries for refund as the money remains in investor's account.( 5 ) AMFI Reg. No. ARN:126541 ( 6 ) Investors should be cautious on unsolicited emails and SMS advising to buy, sell or hold securities and trade only on the basis of informed decision. Investors are advised to invest after conducting appropriate analysis of respective companies and not to blindly follow unfounded rumours, tips etc. Further, you are also requested to share your knowledge or evidence of systemic wrongdoing, potential frauds or unethical behaviour through the anonymous portal facility provided on BSE & NSE website. Issued in the interest of the investors.  ( 7 ) KYC is one time exercise while dealing in securities markets - Once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund, etc.), you need not undergo the same process again when you approach another intermediary. </p>
              {/* Registration details: Choice Equity Broking Private Limited – BSE – TM Code – 3299, NSE – TM Code – 13773, MSEI - – TM Code – 73200, , MCX – TM Code – 40585, NCDEX – TM Code – 01006, ICEX TM Code -1274 ( 6 ) Depository Participant SEBI Reg. No. - IN-DP-84-2015, CDSL DP ID – 12066900. NSDL ID: IN301895  */}
            </Marquee>
          </div>
          <div className="quick-links-footer">
            <span className="btn-links">
              Quick Links
            </span>
            <ul className="links-footer-quick">
              <li>
                <Link to="/investor-awareness">Investor Awareness</Link>
              </li>
              <li>
                <a href="http://www.watchoutinvestors.com/" target="_blank">Watchout Investors</a>
              </li>
              <li>
                <a href="https://scores.gov.in/scores/Welcome.html" target="_blank">Scores</a>
              </li>
              <li>
                <Link to="/Investor-charter">Investor Charter</Link>
              </li>
              <li>
                <Link to="/Investor-complaints">Investor Complaints</Link>
              </li>
              <li>
                <Link to="/file-download">Downloads</Link>
              </li>
              <li>
                <Link to="/advisory-for-investors">Investor's Advisory</Link>
              </li>
              <li>
                <Link to="/disclaimer">Disclaimer</Link>
              </li>
              {/* <li>
                <Link to="/file-download">File Download</Link>
              </li> */}
              {/* <li>
                    <a href="/" target="_blank">Sitemap</a>CFPL Disclosures
                  </li> */}
              <li>
                <Link to="/cebpl-policies">CEBPL Policies</Link>
              </li>

              <li>
                <Link to="/cfpl-policies">CFPL Disclosures</Link>
              </li>
              <li>
                <a href="https://sachet.rbi.org.in/" target="_blank">Sachet Portal</a>
              </li>

            </ul>
          </div>


        </footer>
      </div>

      {
        data1 ?
          <CommonModal {...data} /> : ''
      }

    </>

  );
}

export default Footer;

