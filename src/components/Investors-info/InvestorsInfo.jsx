
import React, { useEffect } from "react";
import Banner from './Banner';
// import InvestorInfoMenu from './InvestorInfoMenu';
// import Yeardetail from './Yeardetail';

import { AiFillCaretUp } from "react-icons/ai";
import "./investorsinfo.scss";
import "./navbar.scss";
import { useState } from 'react';
import Template1 from "../Common-features/Template1";
import ChoiceLTP from "../Common-features/ChoiceLTP";

function InvestorInfo() {

  const [skeleton, setSkeleton] = useState(() => true);

  


  useEffect(()=>{
    console.log("InvestorInfo")
    setTimeout(() => {
      setSkeleton(() => false);
    }, 200)
  },[])

  return (
    <div>

      {
        skeleton ? <Template1 /> :
          <div className="investor-info-parent">
            <div className="mainwrapper">

              <Banner />

            <ChoiceLTP/>

              <iframe src="https://app.churchgatepartners.com/AssignTemplate/BindTempleteview?ClientID=46" title='investor-iframe' style={{ width: '100%', height: '1200px', marginTop: '50px' }}>
                Your browser doesn't support iframes
              </iframe>

              {/* <InvestorInfoMenu />
  <Yeardetail /> */}

            </div>
          </div>
      }




    </div>
  );
}

export default React.memo(InvestorInfo) ;
