
import React from "react";
import "./sip-calculator.scss";
import "../../components/Brokerage-Calculator/brokerage-calculator.scss";
import Banner from "./Banner";
import { useState, useEffect } from "react";
import meta_tags from "../../Data/MetaTags";
import MoreContent from "./MoreContent";
import Readymade_Baskets from '../../assets/images/sip-calculator/Readymade_Baskets.svg';
import Goal_Based_Investment from '../../assets/images/sip-calculator/Goal_Based_Investment.svg';
import Choice_Rated_Schemes from '../../assets/images/sip-calculator/Choice_Rated_Schemes.svg';
import NewFormSection from '../Common-features/NewFormSection';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
function SIPCalculator() {
  const [rendercount, setRenderCount] = useState(() => false);
  useEffect(() => {
    setRenderCount(true)
    if (rendercount === true) {
      document.title = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].title : '';
      document.getElementById('meta-tags').content = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].content : '';
      document.getElementById('canonical-link').href = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].link : '';
      document.getElementById('language').lang = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].lang : '';
      if (!(document.getElementById('link1') == null)) {
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
      title:['Start investing in \n', <span className="bold_text">Mutual Funds</span>, ' Now!'],
      images: [Readymade_Baskets, Goal_Based_Investment, Choice_Rated_Schemes],
      subtitle: ['Readymade Baskets', 'Goal Based Investment', 'Choice Rated Schemes'],
      alt:['Mutual Fund Baskets by Choice','Mutual Fund Goal based Investment','Choice Rated Mutual Fund Schemes']
    },
   
  ];
  return (
    <div>
      <Banner />
      <GoogleReCaptchaProvider reCaptchaKey="6Lc9qf4hAAAAABMa3-oFLk9BAkvihcEhVHnnS7Uz" >
      <NewFormSection sections={sections} />
      </GoogleReCaptchaProvider>
      <MoreContent />
    </div>
  );
}

export default SIPCalculator;
