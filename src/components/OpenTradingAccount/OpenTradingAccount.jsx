import "../OpenDematAccount/DematPage"
import { useState, useEffect} from 'react';
import {
    useLocation,
  } from 'react-router-dom';
  import meta_tags from "../../Data/MetaTags";
  import "../Free-Demat-Campaign/free-demat-compaign.scss";
  import "./../OpenDematAccount/DematPage.scss";
  import { Link } from "react-router-dom";
  import Banner from "./Banner";
  import OpenAccountEasySteps from "./OpenAccountEasySteps";
  import DocumentsRequiredDematAccountOpeningOnline from "./DocumentsRequiredDematAccountOpeningOnline";
  import WhyOpenFreeDematAccount from "./WhyOpenFreeDematAccount";
  import OneAccountFinancialNeeds from "./OneAccountFinancialNeeds";
  import GetFreeResearchCall from "./GetFreeResearchCall";
  import WhyChoiceOpenDematAccount from "./WhyChoiceOpenDematAccount";
  import Faq from "./Faq";
import BChargesMoreContent from "./BChargesMoreContent";
function OpenTradingAccount() {
    const [rendercount, setRenderCount] = useState(() => false);
    const location = useLocation();
    useEffect(() => {
        setRenderCount(true)
        if (rendercount === true) {
          let parser = new DOMParser();
          let doc = parser.parseFromString(meta_tags[location.pathname.replace('/', "")].faqscript, 'text/html');
          document.body.appendChild(doc.getElementsByTagName('script')[0]||[]? doc.getElementsByTagName('script')[0]||[]: '' );
          document.title = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].title : '';
          document.getElementById('meta-tags').content = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].content : '';
          document.getElementById('canonical-link').href = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].link : '';
          document.getElementById('language').lang = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].lang : '';
       
        if (document.getElementById('link1') == null) {
        const sitemap1 = document.createElement('link');
        sitemap1.rel = "alternate";
        sitemap1.id = "link1";
        sitemap1.href = meta_tags[location.pathname.replace('/', "")].link1||'';
        sitemap1.hreflang = meta_tags[location.pathname.replace('/', "")].href1||'';
        document.head.appendChild(sitemap1);

        const sitemap2 = document.createElement('link');
        sitemap2.rel = "alternate";
        sitemap2.id = "link2";
        sitemap2.href = meta_tags[location.pathname.replace('/', "")].link2||'';
        sitemap2.hreflang = meta_tags[location.pathname.replace('/', "")].href2||'';
        document.head.appendChild(sitemap2);

        const sitemap3 = document.createElement('link');
        sitemap3.rel = "alternate";
        sitemap3.id = "link3";
        sitemap3.href = meta_tags[location.pathname.replace(`/`, "")].link3 || '';
        sitemap3.hreflang = meta_tags[location.pathname.replace('/', "")].href3 || '';
        document.head.appendChild(sitemap3);
        }
            
        }
      }, [rendercount])

    return (
        <>
           <Banner/>
           <OpenAccountEasySteps/>
           <DocumentsRequiredDematAccountOpeningOnline />
           <WhyOpenFreeDematAccount />
           <OneAccountFinancialNeeds/>
           <GetFreeResearchCall/>
           <WhyChoiceOpenDematAccount/>
           <Faq/>
           {/* SEO Content*/}
           <BChargesMoreContent/>
        </>
    );
}

export default OpenTradingAccount;
