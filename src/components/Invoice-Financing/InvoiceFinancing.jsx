
import React from "react";
import "./inv-financing.scss";
import InvoiceFinancingSec from './InvoiceFinancingSec.jsx'
import InvoiceFinancingBanner from './InvoiceFinancingBanner.jsx'
import StepsSlider from './StepsSlider.jsx'

function InvoiceFinancing() {
  return (
    <div>
        <InvoiceFinancingBanner/>
        <InvoiceFinancingSec/>
        <StepsSlider/>
    </div>
  );
}

export default InvoiceFinancing;
