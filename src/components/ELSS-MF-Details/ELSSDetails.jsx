import React from 'react'
import "../AMC-Details/amc-details.scss";
import "./elss-details.scss";
import Banner from './Banner';
import SerachELSSDetails from './SerachELSSDetails';
import MoreContent from './MoreContent';
import Faq from './Faqs';
function ELSSDetails() {
  return (
    <div>
        <Banner/>
        <SerachELSSDetails/>
        <MoreContent/>
        <Faq/>
    </div>
  )
}

export default ELSSDetails