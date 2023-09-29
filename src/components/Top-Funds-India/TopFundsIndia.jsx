import React from 'react'
import "../Top-Funds-AMC/top-funds-amc.scss";
import Banner from './Banner';
import SerachTopFundsIndia from './SerachTopFundsIndia';
import MoreContent from './MoreContent';
function TopFundsIndia() {
  return (
    <div>
        <Banner/>
        <SerachTopFundsIndia/>
        <MoreContent/>
    </div>
  )
}

export default TopFundsIndia