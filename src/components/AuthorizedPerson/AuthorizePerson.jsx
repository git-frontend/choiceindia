
import React from "react";
import AuthorizeBanner from './AuthorizeBanner';
import AuthorizeBenifits from './AuthorizeBenifits';
import AuthorizeSellMore from './AuthorizeSellMore';
import WhyBecomeAuthorize from './WhyBecomeAuthorize';
import WhoEligibleToAuthorize from './WhoEligibleToAuthorize';
import AuthorizeMoreContent from './AuthorizeMoreContent';
import AuthorizeFaq from './AuthorizeFaq';

import { useState } from "react";
import Template5 from '../Common-features/Template5';
import "../SubBroker/subbroker.scss";
import "../Remisier/Remisier.scss"
import "./AuthorizePerson.scss";

function AuthorizePerson() {

  const [skeleton, setSkeleton] = useState(() => true);
  // const myTimeout = setTimeout(myGreeting, 900);
  // function myGreeting() {
  //   setSkeleton(() => false);
  // }

  setTimeout(() => {
    setSkeleton(() => false);
  }, 200)

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
