
import React from "react";
import InvoiceFinancingBanner from './InvoiceFinancingBanner.jsx'
import AnchorSpoke from './AnchorSpoke.jsx'
import TimelineStepsSlider from './TimelineStepsSlider.jsx'
import InvoiceFinancingDocument from './InvoiceFinancingDocument.jsx'
import "./inv-financing.scss";
import "./inv-financing-sec.scss";
import "./nbfc-common.scss";

function InvoiceFinancing() {
  return (
    <div>
        <InvoiceFinancingBanner/>
        <AnchorSpoke/>
        <TimelineStepsSlider/>
        <InvoiceFinancingDocument/>
    </div>
  );
}

export default InvoiceFinancing;
