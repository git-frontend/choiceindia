
import React from "react";
import FlexiCreditBusinessBanner from './FlexiCreditBusinessBanner.jsx';
import TimelineStepsSlider from './TimelineStepsSlider.jsx';
import FlexiCreditBusinessDocument from './FlexiCreditBusinessDocument.jsx';
import FlexiCreditFeatures from './FlexiCreditFeatures.jsx';
import FlexiCreditWhyChoose from './FlexiCreditWhyChoose.jsx';
import AvailPurpose from './AvailPurpose.jsx';
import "./FlexiCreditBusinessDocument.scss";
import "../Invoice-Financing/nbfc-common.scss";

function FlexiCreditBusiness() {
  return (
    <div>
        <FlexiCreditBusinessBanner/>
        <AvailPurpose/>
        <TimelineStepsSlider/>
        <FlexiCreditBusinessDocument/>
        <FlexiCreditFeatures/>
        <FlexiCreditWhyChoose/>
    </div>
  );
}

export default FlexiCreditBusiness;
