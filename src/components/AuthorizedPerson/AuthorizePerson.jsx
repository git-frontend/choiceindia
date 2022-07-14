
import React from "react";
import AuthorizeBanner from './AuthorizeBanner';
import AuthorizeBenifits from './AuthorizeBenifits';
import AuthorizeSellMore from './AuthorizeSellMore';
import WhyBecomeAuthorize from './WhyBecomeAuthorize';
import WhoEligibleToAuthorize from './WhoEligibleToAuthorize';
import AuthorizeMoreContent from './AuthorizeMoreContent';
import AuthorizeFaq from './AuthorizeFaq';

import { useState, useEffect } from "react";
import Template5 from '../Common-features/Template5';
import "../SubBroker/subbroker.scss";
import "../Remisier/Remisier.scss"
import "./AuthorizePerson.scss";
import {
  useLocation,
} from 'react-router-dom';
import meta_tags from "../../Data/MetaTags";

function AuthorizePerson() {

  const [skeleton, setSkeleton] = useState(() => true);
  const [rendercount, setRenderCount] = useState(() => false);

  const location = useLocation();

  setTimeout(() => {
    setSkeleton(() => false);
  }, 200)

  useEffect(() => {
    setRenderCount(true)
    if (rendercount === true) {
      // let parser = new DOMParser();
      // let doc = parser.parseFromString(meta_tags['sub-broker'].faqscript, 'text/html');
      // document.body.appendChild(doc.getElementsByTagName('script')[0]? doc.getElementsByTagName('script')[0]: '' );
      document.title = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].title : '';
      // document.getElementById('meta-tags').name= meta_tags[location.pathname.replace('/',"")]? meta_tags[location.pathname.replace('/',"")].title : ''  ;
      document.getElementById('meta-tags').content = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].content : '';
      document.getElementById('canonical-link').href = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].link : '';
    }
  }, [rendercount])

  return (
    <div>

      {
        skeleton ? <Template5 /> :

          <div className="sub-broker-skeleton-parent">

            <AuthorizeBanner />
            <AuthorizeBenifits />
            <AuthorizeSellMore />
            <WhyBecomeAuthorize />
            <WhoEligibleToAuthorize />
            <AuthorizeFaq />
            <AuthorizeMoreContent />
            {/* <AuthorizeOffers /> */}
          </div>
      }

    </div>
  );
}

export default AuthorizePerson;
