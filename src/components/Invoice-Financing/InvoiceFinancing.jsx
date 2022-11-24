
import React from "react";
import InvoiceFinancingBanner from './InvoiceFinancingBanner.jsx'
import AnchorSpoke from './AnchorSpoke.jsx'
import StepsSlider from './StepsSlider.jsx'
import InvoiceFinancingDocument from './InvoiceFinancingDocument.jsx'
import "./inv-financing.scss";
import "./inv-financing-sec.scss";

function InvoiceFinancing() {
  return (
    <div>
        <InvoiceFinancingBanner/>
        <AnchorSpoke/>
        <StepsSlider/>
        <InvoiceFinancingDocument/>
    </div>
  );
}

export default InvoiceFinancing;
