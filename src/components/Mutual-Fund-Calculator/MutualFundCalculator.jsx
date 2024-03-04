
import React from "react";
import "../../components/Brokerage-Calculator/brokerage-calculator.scss";
import "../../components/SIP-Calculator/sip-calculator.scss";
import "../Common-features/common-demat-suppotive.scss";
import "./mutual-fund-calculator.scss";
import OpenDemateAccountStickyFooter from "../Common-features/OpenDemateAccountStickyFooter";
import Banner from "./Banner";
import { useState,useEffect} from "react";
import meta_tags from "../../Data/MetaTags";
import OpenFreeDematAccount from "./OpenFreeDematAccount";
import MoreContent from "./MoreContent";
import MutualFaq from "./MutualFaq";
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import Readymade_Baskets from '../../assets/images/sip-calculator/Readymade_Baskets.svg';
import Goal_Based_Investment from '../../assets/images/sip-calculator/Goal_Based_Investment.svg';
import Choice_Rated_Schemes from '../../assets/images/sip-calculator/Choice_Rated_Schemes.svg';
function MutualFundCalculator() {
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
        <section className="form-section-all">
        <div className="container">
          <div className="best-stock-Newform">
            <div className="best-stock-left">
              <h3 className="best-stock-left-title" >Start investing in <br/> <span className="bold_text">Mutual Funds</span> Now!</h3>
              <div className="list-section list-item-big">
                <div className="list-item">
                  <span>
                    <img src={Readymade_Baskets} className={'img-fluid'} width={'56'} height={'56'} alt="Mutual Fund Baskets by Choice"></img>
                  </span>
                  <h4 className="list-item-title">Readymade
                    <br />
                    Baskets</h4>
                </div>
                <div className="list-item list-item-big">
                  <span>
                    <img src={Goal_Based_Investment} className={'img-fluid'} width={'56'} height={'56'} alt="Mutual Fund Goal based Investment"></img>
                  </span>
                  <h4 className="list-item-title ">Goal Based<br />
                  Investment</h4>
                </div>
                <div className="list-item list-item-big">
                  <span>
                    <img src={Choice_Rated_Schemes} className={'img-fluid'} width={'56'} height={'56'} alt="Choice Rated Mutual Fund Schemes"></img>
                  </span>
                  <h4 className="list-item-title">Choice Rated <br />
                  Schemes</h4>
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
        <MutualFaq/>
    </div>
  );
}

export default MutualFundCalculator;
