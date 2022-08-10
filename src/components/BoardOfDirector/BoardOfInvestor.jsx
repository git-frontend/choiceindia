
import React, { useEffect } from "react";
import Banner from './Banner';
// import InvestorInfoMenu from './InvestorInfoMenu';
// import Yeardetail from './Yeardetail';

import { AiFillCaretUp } from "react-icons/ai";
import "./boardofdirector.scss";
import "./navbar.scss";
import { useState } from 'react';
import InvestorInfoMenu from './InvestorInfoMenu';
import ChoiceLTP from "../Common-features/ChoiceLTP";
function BoardOfInvestor() {

  return (
    <div>

      {
        
          <div className="investor-info-parent">
           

              <Banner />
              <ChoiceLTP/>
              <InvestorInfoMenu />

              
            

            
          </div>
      }




    </div>
  );
}

export default BoardOfInvestor ;
