
import React from "react";
import { useState, useEffect, useRef } from "react";
import meta_tags from "../../Data/MetaTags";
import "./free-demat-compaign.scss";
import "./../OpenDematAccount/DematPage.scss";
import Banner from './Banner';
import GetFreeResearchCall from "./GetFreeResearchCall";
import OurTrackRecordSaysAll from "./OurTrackRecordSaysAll";
import WhyOpenFreeDematAccount from "./WhyOpenFreeDematAccount";
import OneAccountFinancialNeeds from "./OneAccountFinancialNeeds";
import DocumentsRequiredDematAccountOpeningOnline from "./DocumentsRequiredDematAccountOpeningOnline";
import WhyChoiceOpenDematAccount from "./WhyChoiceOpenDematAccount";

import BChargesMoreContent from "./BChargesMoreContent";
import Faq from "./Faqs";
import OpenAccountEasySteps from "./OpenAccountEasySteps";
import { useSearchParams } from "react-router-dom";
import {
  useLocation,
} from 'react-router-dom';
function FreeDematCompaign() {
  const [ischeck, setIscheck] = useState(false);
  const [rendercount, setRenderCount] = useState(() => false);
  const myRef1 = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams(window.location.search);
  var isMobile = useRef(isMobileDevice());
  const location = useLocation();
  const getPositionnew = () => {
    const element = document.getElementById("branch1");

    if (element) {
      const rect = element.getBoundingClientRect();
      if (rect.top.toFixed() < 350) {
        setIscheck(true);
      }

    }
  }
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
      document.getElementById('meta-url').content = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].link : '';
      document.getElementById('meta-descr').content = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].content : '';
      document.getElementById('meta-title').content = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].title : '';;
      document.getElementById('meta-image').content = `https://choiceindia.com/logo192.png` ;

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
        sitemap3.hreflang = meta_tags[location.pathname.replace('/', "")].href4 || '';
        document.head.appendChild(sitemap3);
        }

    }
  }, [rendercount])

  useEffect(() => {
    if (searchParams.get('refercode') && isMobile.current) {
      let redirectUrl = `https://finx.choiceindia.com/open.html${location.search.replace('refercode', 'ref')}`
      window.open(redirectUrl, '_self')
      
    }
  }, [])

  function isMobileDevice() {
    return (/Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
  }

  return (
    <>
      {
        (searchParams && searchParams.get('refercode') && isMobile.current) ?
          <>
          </> :
          <>
            <div>

              <Banner />
              <OpenAccountEasySteps />
              <DocumentsRequiredDematAccountOpeningOnline />
              <WhyOpenFreeDematAccount />
              <OneAccountFinancialNeeds />
              <GetFreeResearchCall />
              <OurTrackRecordSaysAll />
              <WhyChoiceOpenDematAccount />
              <Faq />
              <BChargesMoreContent />
            </div>
          </>
      }
    </>
  );
}

export default FreeDematCompaign;
