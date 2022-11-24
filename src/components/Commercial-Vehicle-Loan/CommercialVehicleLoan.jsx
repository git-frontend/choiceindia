
import React from "react";
import ChannelFinanceBanner from './ChannelFinanceBanner.jsx'
import AnchorSpoke from './AnchorSpokeChannelFin.jsx'
import TimelineStepsSlider from './TimelineStepsSlider.jsx'
import ChannelFinanceDocument from './ChannelFinanceDocument.jsx'
import Features from './Features.jsx'
import WhyChoose from './WhyChoose.jsx'
import "../Invoice-Financing/nbfc-common.scss";
import "./channel-finance.scss";

function CommercialVehicleLoan() {
  return (
    <div>
        <ChannelFinanceBanner/>
        <AnchorSpoke/>
        <TimelineStepsSlider/>
        <ChannelFinanceDocument/>
        <Features/>
        <WhyChoose/>
    </div>
  );
}

export default CommercialVehicleLoan;
