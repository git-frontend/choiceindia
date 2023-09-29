import React from 'react'
import "./mf-top-funds.scss";
import Banner from './Banner';
import SerachTopFunds from './SerachTopFunds';
import MoreContent from './MoreContent';
function MFTopFunds() {
  return (
    <div>
        <Banner/>
        <SerachTopFunds/>
        <MoreContent/>
    </div>
  )
}

export default MFTopFunds