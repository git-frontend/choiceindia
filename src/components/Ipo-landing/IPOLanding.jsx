
import React from "react";
import Banner from "./Banner";
import IpoDetails from "./IpoDetails";
import "./ipo-landing.scss";
import Revenue from "./Revenue";
import InvesmentOpportunity from "./InvesmentOpportunity";

function IPOLanding() {

  return (
    <div>
      <Banner/>
      <IpoDetails/>
      <Revenue/>
      <InvesmentOpportunity/>
    </div>
  );
}

export default IPOLanding;
