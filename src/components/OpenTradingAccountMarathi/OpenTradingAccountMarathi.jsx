// import "./opentradingaccountmarathi.scss";
// import DematAccountForm from '../Common-features/DematAccountForm';
import "../OpenDematAccount/DematPage"
import MarathiOpenFreeAccountBanner from "./MarathiOpenFreeAccountBanner";
import MarathiWhyOpenFreeDematAccount from "./MarathiWhyOpenFreeDematAccount";
import MarathiDematAccountOpeningProcess from "./MarathiDematAccountOpeningProcess";
import MarathiLowBrokerageDematAccount from "./MarathiLowBrokerageDematAccount";
import MarathiWhyChoice from "./MarathiWhyChoice";
import MarathiDematFaq from "./MarathiDematFaq";
import { useState, useEffect } from 'react';
import {
    useLocation,
  } from 'react-router-dom';
  import meta_tags from "../../Data/MetaTags";
function OpenTradingAccountMarathi() {

    const [rendercount, setRenderCount] = useState(() => false);

    const location = useLocation();

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

        }
      }, [rendercount])
    return (
        <>
            {/* <p>Open Trading Account Marathi</p>
            <DematAccountForm></DematAccountForm> */}
            <MarathiOpenFreeAccountBanner />
            <MarathiWhyOpenFreeDematAccount />
            <MarathiWhyChoice />
            <MarathiLowBrokerageDematAccount />
            <MarathiDematAccountOpeningProcess />
            <MarathiDematFaq />
           

        </>
    );
}

export default OpenTradingAccountMarathi;
