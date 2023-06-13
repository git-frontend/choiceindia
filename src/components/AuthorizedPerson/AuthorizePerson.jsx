
import React from "react";
import AuthorizeBanner from './AuthorizeBanner';
import AuthorizeBenifits from './AuthorizeBenifits';
import AuthorizeSellMore from './AuthorizeSellMore';
import WhyBecomeAuthorize from './WhyBecomeAuthorize';
import WhoEligibleToAuthorize from './WhoEligibleToAuthorize';
import AuthorizeMoreContent from './AuthorizeMoreContent';
import AuthorizeFaq from './AuthorizeFaq';

import { useState, useEffect,useRef } from "react";
import Template5 from '../Common-features/Template5';
import "../SubBroker/subbroker.scss";
import "../Remisier/Remisier.scss"
import "./AuthorizePerson.scss";
import {
  useLocation,
} from 'react-router-dom';
import meta_tags from "../../Data/MetaTags";

function AuthorizePerson() {
  const [isCheck, setIsCheck] = useState(false);
  const [skeleton, setSkeleton] = useState(() => true);
  const [rendercount, setRenderCount] = useState(() => false);

  const location = useLocation();

  setTimeout(() => {
    setSkeleton(() => false);
  }, 200)

  useEffect(() => {
    setRenderCount(true)
    if (rendercount === true) {
      let parser = new DOMParser();
      let doc = parser.parseFromString(meta_tags['authorised-person'].faqscript, 'text/html');
      document.body.appendChild(doc.getElementsByTagName('script')[0]||[]? doc.getElementsByTagName('script')[0]||[]: '' );
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
  useEffect(() => {
    window.addEventListener('scroll', getPositionnew);
}, []);
  const getPositionnew = () => {
    const element = document.getElementById("branch1");
    if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top.toFixed() < 300) {
            setIsCheck(true);
        }

    }
}
const myRef1 = useRef(null);
  return (
    <div>

      {
        skeleton ? <Template5 /> :

          <div className="sub-broker-skeleton-parent">
          <div onScroll={getPositionnew} ref={myRef1} id="branch1" onMouseOver={() => setIsCheck(true)}>
          <AuthorizeBanner />
          </div>
            {
              isCheck ?
          <div> 
            <AuthorizeBenifits />
            <AuthorizeSellMore />
            <WhyBecomeAuthorize />
            <WhoEligibleToAuthorize />
            <AuthorizeFaq />
            <AuthorizeMoreContent />
            {/* <AuthorizeOffers /> */}
          </div>
          :
          ""
            }
          </div>
      }

    </div>
  );
}

export default AuthorizePerson;
