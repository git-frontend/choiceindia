
import React from "react";
import InvoiceFinancingBanner from './InvoiceFinancingBanner.jsx'
import AnchorSpoke from './AnchorSpoke.jsx'
import TimelineStepsSlider from './TimelineStepsSlider.jsx'
import InvoiceFinancingDocument from './InvoiceFinancingDocument.jsx'
import Features from './Features.jsx'
import WhyChoose from './WhyChoose.jsx'
import "./inv-financing.scss";
import "./nbfc-common.scss";

function InvoiceFinancing() {
  return (
    <div>
        <InvoiceFinancingBanner/>
        <AnchorSpoke/>
        <TimelineStepsSlider/>
        <InvoiceFinancingDocument/>
        <Features/>
        <WhyChoose/>
    </div>
  );
}

export default InvoiceFinancing;
