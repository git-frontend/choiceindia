import React from 'react'
import "./top-funds-amc.scss";
import Banner from './Banner';
import SerachTopFundsAMC from './SerachTopFundsAMC';
import MoreContent from './MoreContent';
function TopFundsAMC() {
  return (
    <div>
        <Banner/>
        <SerachTopFundsAMC/>
        <MoreContent/>
    </div>
  )
}

export default TopFundsAMC