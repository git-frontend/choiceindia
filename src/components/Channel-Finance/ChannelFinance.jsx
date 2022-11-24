
import React from "react";
import ChannelFinanceBanner from './ChannelFinanceBanner.jsx'
import AnchorSpokeChannelFin from './AnchorSpokeChannelFin.jsx'
import TimelineStepsSlider from './TimelineStepsSlider.jsx'
import ChannelFinanceDocument from './ChannelFinanceDocument.jsx'
import "./channel-finance.scss";
import "./channel-finance-sec.scss";
import "./nbfc-common.scss";

function ChannelFinance() {
  return (
    <div>
        <ChannelFinanceBanner/>
        <AnchorSpokeChannelFin/>
        <TimelineStepsSlider/>
        <ChannelFinanceDocument/>
    </div>
  );
}

export default ChannelFinance;
