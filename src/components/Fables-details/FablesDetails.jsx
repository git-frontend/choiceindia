import "./fabledetails.scss"
import React from "react";

import FablesDetailsHeader from './FablesDetailsHeader.jsx';
import Fabdetailsbanner from './FabDetailsBanner.jsx';
import Recommendation from './Recommendation.jsx';
function Fablesdetails() {

  return (
    <div>
      <FablesDetailsHeader/>
      <Fabdetailsbanner />
      <Recommendation />
    
    </div>
  );
}

export default  Fablesdetails;
