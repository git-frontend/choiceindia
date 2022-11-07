// import "./opentradingaccount.scss";
// import DematAccountForm from '../Common-features/DematAccountForm';
import "../OpenDematAccount/DematPage"
import FreeAmcAccountBanner from "./FreeAmcAccountBanner";
import WhyOpenFreeAmcAccount from "./WhyOpenFreeAmcAccount";
import AmcAccountOpeningProcess from "./AmcAccountOpeningProcess";
import LowBrokerageAMCAccount from "./LowBrokerageAMCAccount";
import WhyChoiceamc from "./WhyChoiceamc";
import AmcFaq from "./AmcFaq";
import meta_tags from "../../Data/MetaTags";
import { useState,useEffect } from "react";
function FreeAmcAccount() {
    const [rendercount, setRenderCount] = useState(() => false);

  useEffect(() => {
    setRenderCount(true)
    if (rendercount === true) {
      let parser = new DOMParser();
      let doc = parser.parseFromString(meta_tags[location.pathname.replace('/', "")].faqscript, 'text/html');
      document.body.appendChild(doc.getElementsByTagName('script')[0]? doc.getElementsByTagName('script')[0]: '' );
      document.title = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].title : '';
      // document.getElementById('meta-tags').name= meta_tags[location.pathname.replace('/',"")]? meta_tags[location.pathname.replace('/',"")].title : ''  ;
      document.getElementById('meta-tags').content = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].content : '';
      document.getElementById('canonical-link').href = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].link : '';
      document.getElementById('language').lang = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].lang : '';
    }
  }, [rendercount])

    return (
        <>
            {/* Open Trading Account
            <DematAccountForm></DematAccountForm> */}
            <FreeAmcAccountBanner />
            <WhyOpenFreeAmcAccount />
            <WhyChoiceamc />
            <LowBrokerageAMCAccount />
            <AmcAccountOpeningProcess />
            <AmcFaq />
          

        </>
    );
}

export default FreeAmcAccount;