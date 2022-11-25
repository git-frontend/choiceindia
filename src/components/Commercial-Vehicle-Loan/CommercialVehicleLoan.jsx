
import React from "react";
import Banner from './Banner.jsx'
import BannerBottomSec from './BannerBottomSec.jsx'
import TypesOfCommercial from './TypesOfCommercial.jsx'
import TimelineStepsSlider from './TimelineStepsSlider.jsx'
import Documents from './Documents.jsx'
import Features from './Features.jsx'
import WhyChoose from './WhyChoose.jsx'
import "../Invoice-Financing/nbfc-common.scss";
import "./commercial-vehicle.scss";

function CommercialVehicleLoan() {
  return (
    <div>
        <Banner/>
        <BannerBottomSec/>
        <TypesOfCommercial/>
        <TimelineStepsSlider/>
        <Documents/>
        <Features/>
        <WhyChoose/>
    </div>
  );
}

export default CommercialVehicleLoan;
