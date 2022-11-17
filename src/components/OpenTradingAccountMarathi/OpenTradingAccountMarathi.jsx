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
          if((document.getElementById('link1')==null)){
            let sitemap = document.createElement('link');
            sitemap.rel = 'alternate';
            sitemap.id = 'link1';
           sitemap.href = meta_tags[location.pathname.replace('/', "")].link1||'';
           sitemap.hreflang = meta_tags[location.pathname.replace('/', "")].href1||'';
            document.head.appendChild(sitemap);
      
            let sitemap1 = document.createElement('link');
            sitemap1.rel = 'alternate';
            sitemap1.id = 'link2';
            sitemap1.href = meta_tags[location.pathname.replace('/', "")].link2||'';
            sitemap1.hreflang = meta_tags[location.pathname.replace('/', "")].href2||'';
            document.head.appendChild(sitemap1);
      
            let sitemap2 = document.createElement('link');
            sitemap2.rel = 'alternate';
            sitemap2.id = 'link3';
           sitemap2.href = meta_tags[location.pathname.replace('/', "")].link3||'';
           sitemap2.hreflang = meta_tags[location.pathname.replace('/', "")].href3||'';
            document.head.appendChild(sitemap2);
            let sitemap3 = document.createElement('link');
            sitemap3.rel = 'alternate';
            sitemap3.id = 'link4';
           sitemap3.href = meta_tags[location.pathname.replace('/', "")].link4||'';
           sitemap3.hreflang = meta_tags[location.pathname.replace('/', "")].href4||'';
            document.head.appendChild(sitemap3);
            let sitemap4 = document.createElement('link');
            sitemap4.rel = 'alternat';
            sitemap4.id = 'link5';
           sitemap4.href = meta_tags[location.pathname.replace('/', "")].link5||'';
           sitemap4.hreflang = meta_tags[location.pathname.replace('/', "")].href5||'';
            document.head.appendChild(sitemap4);
            let sitemap5 = document.createElement('link');
            sitemap5.rel = 'alternate';
            sitemap5.id = 'link6';
           sitemap5.href = meta_tags[location.pathname.replace('/', "")].link6||'';
           sitemap5.hreflang = meta_tags[location.pathname.replace('/', "")].href6||'';
            document.head.appendChild(sitemap5);
            }

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
