import React from 'react'
import "../AMC-Details/amc-details.scss";
import "./elss-details.scss";
import Banner from './Banner';
import SerachELSSDetails from './SerachELSSDetails';
import MoreContent from './MoreContent';
import Faq from './Faqs';
import FixedSection from './FixedForm';
function ELSSDetails() {
  return (
    <div>
        <Banner/>
        <SerachELSSDetails/>
        <MoreContent/>
        <Faq/>
        {/* <FixedSection/> */}
    </div>
  )
}

export default ELSSDetails