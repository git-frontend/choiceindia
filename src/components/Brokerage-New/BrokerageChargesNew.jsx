
import React from "react";
import { useState, useEffect } from "react";
import meta_tags from "../../Data/MetaTags";
import Banner from './Banner';
import CorporateCount from '../Corporate-Demat-Account/CorporateCount';
import BrokerageTabs from './BrokerageTabs';
import BrokerageCosts from "./BrokerageCosts";
import Applicablecharges from "./Applicablecharges";
import BrokerageFaq from "./BrokerageFaq";
import BrokeragSegments from "./BrokeragSegments";
import "./brokeragenew.scss"
import '../Corporate-Demat-Account/corporatedemat.scss';
import NewFormSection from '../Common-features/NewFormSection';
import comp from "../../assets/images/Brokerage-New/Best-brokerage-fees.svg";
import Advanced from "../../assets/images/Brokerage-New/Advanced-tools-with-lowest-charges.svg";
import expert from "../../assets/images/Brokerage-New/Expert_Research.svg";
import "../Common-features/common-demat-suppotive.scss";
import BrokeragBenefits from "./BrokeragBenefits";
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
function BrokerageCharges() {
  const [rendercount, setRenderCount] = useState(() => false);
  useEffect(() => {
    setRenderCount(true)
    if (rendercount === true) {
      let parser = new DOMParser();
      document.title = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].title : '';
      document.getElementById('meta-tags').content = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].content : '';
      document.getElementById('canonical-link').href = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].link : '';
      document.getElementById('language').lang = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].lang : '';
      if (!(document.getElementById('link1') == null)) {
        document.getElementById('link1').remove();
        document.getElementById('link2').remove();
        document.getElementById('link3').remove();
        if (document.getElementById('link4') !== null) {
          document.getElementById('link4').remove();
          document.getElementById('link5').remove();
          document.getElementById('link6').remove();
        }
      }
    }
  }, [rendercount])
  const data = [
    {
      count: ["25", "PAN", "9 Lakh"],
      sign: ["+", "", "+"],
      title: ["Year of Experience", "Indian Service", "Happy Customer"],
    },
  ];
  const sections = [
    {
      title: [
        'Why Traders & Investors Choose Us'
      ],
      images: [comp, Advanced, expert],
      subtitle: ['Competitive Pricing & Charges', 'Advanced Trading Platform', 'Expert Research & Analysis'],
      alt: ['Best brokerage fees', 'Advanced tools with lowest charges', 'Stock Research by Choice']
    },

  ];
  const data2 = [
    {
      title: [
        'Benefit from Our \n low brokerage account'
      ],
      images: [],
      subtitle: ['', '', ''],
      alt: ['', '', '', '']
    },

  ];
  return (
    <>
    <GoogleReCaptchaProvider reCaptchaKey="6Lc9qf4hAAAAABMa3-oFLk9BAkvihcEhVHnnS7Uz" >
      <div className="brokerage-charges-new Corporate-main">
        <Banner />
        <CorporateCount data={data} />
        <BrokeragBenefits/>
        <BrokerageTabs />
        <BrokerageCosts />
        <Applicablecharges />
        <NewFormSection sections={sections}  />
        <BrokerageFaq />
        <NewFormSection sections={data2}  />
        <BrokeragSegments />
      </div>
      </GoogleReCaptchaProvider>
    </>
  );
}

export default BrokerageCharges;
