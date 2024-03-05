
import React from "react";
import "./brokerage-calculator.scss";
import Banner from "./Banner";
import { useState,useEffect} from "react";
import meta_tags from "../../Data/MetaTags";
import OpenFreeDematAccount from "./OpenFreeDematAccount";
import MoreContent from "./MoreContent";
import "../Common-features/common-demat-suppotive.scss";
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import FreeAmc from "../../assets/images/brokerage-calculator/Free_AMC_for_First_Year.svg";
import LowDP from "../../assets/images/brokerage-calculator/Low_DP_charges.svg";
import  NoAutoSquare from "../../assets/images/brokerage-calculator/No-Auto-Square.svg";
import FreeResearch from "../../assets/images/brokerage-calculator/Free_Research_Advisory.svg";
import OpenDemateAccountStickyFooter from "../Common-features/OpenDemateAccountStickyFooter";
function BrokerageCalculator() {
  const [rendercount, setRenderCount] = useState(() => false);
  useEffect(() => {
    setRenderCount(true)
    if (rendercount === true) {
      // let parser = new DOMParser();
      // let doc = parser.parseFromString(meta_tags[location.pathname.replace('/', "")].faqscript, 'text/html');
      // document.body.appendChild(doc.getElementsByTagName('script')[0]||[]? doc.getElementsByTagName('script')[0]||[]: '' );
      document.title = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].title : '';
      // document.getElementById('meta-tags').name= meta_tags[location.pathname.replace('/',"")]? meta_tags[location.pathname.replace('/',"")].title : ''  ;
      document.getElementById('meta-tags').content = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].content : '';
      document.getElementById('canonical-link').href = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].link : '';
      document.getElementById('language').lang = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].lang : '';
      if(!(document.getElementById('link1')==null)){
        document.getElementById('link1').remove();
      document.getElementById('link2').remove();
      document.getElementById('link3').remove();
      document.getElementById('link4').remove();
      document.getElementById('link5').remove();
      document.getElementById('link6').remove();
      
      }
    }
  }, [rendercount])
  return (
    <div>
        <Banner />
        {/* <OpenFreeDematAccount/> */}
        <section className="form-section-all form-section-margin">
                <div className="container">
                    <div className="best-stock-Newform">
                        <div className="best-stock-left">
                            <h3 className="best-stock-left-title" >Open a <span className="bold_text">Free</span>  Demat <br /> Account in <span className="bold_text">5 Mins.</span></h3>
                            <div className="list-section">
                                <div className="list-item">
                                    <span>
                                        <img src={FreeAmc} className={'img-fluid'} width={'56'} height={'56'} alt="Demat account yearly AMC"></img>
                                    </span>
                                    <h4 className="list-item-title">Free AMC
                                        <br/>
                                        <span className='font-weight-new'>for First Year</span></h4>
                                </div>
                                <div className="list-item">
                                    <span>
                                        <img src={FreeResearch} className={'img-fluid'} width={'56'} height={'56'} alt="open demat account with research advisory"></img>
                                    </span>
                                    <h4 className="list-item-title">Free Research<br/>
                                    <span className='font-weight-new'>Advisory</span></h4>
                                </div>
                                <div className="list-item ">
                                    <span>
                                        <img src={LowDP} className={'img-fluid'} width={'56'} height={'56'} alt="DP Charges after Demat Account Opening"></img>
                                    </span>
                                    <h4 className="list-item-title">Low DP<br/>
                                    <span className='font-weight-new'>Charges (₹ 10)</span></h4>
                                </div>
                                <div className="list-item ">
                                    <span>
                                        <img src={NoAutoSquare} className={'img-fluid'} width={'56'} height={'56'} alt="Free Demat Auto square off charges"></img>
                                    </span>
                                    <h4 className="list-item-title">No Auto Square
                                    Off <span className='font-weight-new'>Charges</span></h4>
                                </div>
                            </div>
                        </div>
                        <div className="best-stock-right">
                            <GoogleReCaptchaProvider reCaptchaKey="6Lc9qf4hAAAAABMa3-oFLk9BAkvihcEhVHnnS7Uz" >
                                <div id="dematformsticky">
                                    <OpenDemateAccountStickyFooter />
                                </div>
                            </GoogleReCaptchaProvider></div>
                    </div>
                </div>
            </section>
        <MoreContent/>
    </div>
  );
}

export default BrokerageCalculator;
