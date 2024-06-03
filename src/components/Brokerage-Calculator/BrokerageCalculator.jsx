
import React from "react";
import "./brokerage-calculator.scss";
import Banner from "./Banner";
import NewFormSection from '../Common-features/NewFormSection';
import { useState,useEffect} from "react";
import meta_tags from "../../Data/MetaTags";
import MoreContent from "./MoreContent";
import FreeAmc from "../../assets/images/brokerage-calculator/Free_AMC_for_First_Year.svg";
import LowDP from "../../assets/images/brokerage-calculator/Low_DP_charges.svg";
import  NoAutoSquare from "../../assets/images/brokerage-calculator/No-Auto-Square.svg";
import FreeResearch from "../../assets/images/brokerage-calculator/Free_Research_Advisory.svg";
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
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
  const sections = [
    {
      title:['Open a',<span className="bold_text"> Free </span>, 'Demat\n Account in', <span className="bold_text"> 5 Mins.</span>],
      images: [FreeAmc, FreeResearch ,LowDP,NoAutoSquare],
      subtitle: ['Free AMC for First Year', 'Free Research Advisory', 'Low DP Charges (₹ 10)','No Auto Square Off Charges'],
      alt:['Demat account yearly AMC','open demat account with research advisory','DP Charges after Demat Account Opening','Free Demat Auto square off charges']
    },
   
  ];
  return (
    <div>
        <Banner />
        {/* <OpenFreeDematAccount/> */}
        <GoogleReCaptchaProvider reCaptchaKey="6Lc9qf4hAAAAABMa3-oFLk9BAkvihcEhVHnnS7Uz" >
       
        <NewFormSection sections={sections} />
        </GoogleReCaptchaProvider>
        <MoreContent/>
    </div>
  );
}

export default BrokerageCalculator;
