
import React from "react";
import TermLoansBanner from './TermLoansBanner.jsx'
import TimelineStepsSlider from './TimelineStepsSlider.jsx'
import TermLoansDocument from './TermLoansDocument.jsx'
import Features from './Features.jsx'
import WhyChoose from './WhyChoose.jsx'
import "../Invoice-Financing/nbfc-common.scss";
import "./term-loans.scss";

function TermLoans() {
  return (
    <div>
        <TermLoansBanner/>
        <TimelineStepsSlider/>
        <TermLoansDocument/>
        <Features/>
        <WhyChoose/>
    </div>
  );
}

export default TermLoans;
