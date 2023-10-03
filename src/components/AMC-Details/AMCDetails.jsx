import React from 'react'
import "./amc-details.scss";
import Banner from './Banner';
import SerachAMCDetails from './SerachAMCDetails';
import MoreContent from './MoreContent';
function AMCDetails() {
  return (
    <div>
        <Banner/>
        <SerachAMCDetails/>
        <MoreContent/>
    </div>
  )
}

export default AMCDetails