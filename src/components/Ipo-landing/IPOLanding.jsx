
import React from "react";
import Banner from "./Banner";

import IpoDetails from "./IpoDetails";
import "./ipo-landing.scss";
import Revenue from "./Revenue";
import InvesmentOpportunity from "./InvesmentOpportunity";
import IpoSubscriptionBreakup from "./IpoSubscriptionBreakup";
import HowtoApplySteps from "./HowtoApplySteps";
import IpoFaq from "./IpoFaq";
import { useState, useEffect } from "react";
import meta_tags from "../../Data/MetaTags";

function IPOLanding() {

  return (
    <div>
      <Banner/>
      {/* <IpoDetails/>
      <Revenue/>
      <InvesmentOpportunity/>
      <IpoSubscriptionBreakup/>
      <HowtoApplySteps/>
      <IpoFaq/> */}
    </div>
  );
}

export default IPOLanding;
