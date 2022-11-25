
import React from "react";
import Banner from './Banner.jsx'
import AnchorSpoke from './AnchorSpokeChannelFin.jsx'
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
        <AnchorSpoke/>
        <TimelineStepsSlider/>
        <Documents/>
        <Features/>
        <WhyChoose/>
    </div>
  );
}

export default CommercialVehicleLoan;
