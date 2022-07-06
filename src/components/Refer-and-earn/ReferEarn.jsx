import React from "react";
import "./refer-earn.scss"
import Banner from './Banner';
import HowChoice from './HowChoice';
import TermCondition from './TermCondition';
import EarnUp from './EarnUp';
import Template3 from '../Common-features/Template3';
import {useState} from 'react';

function ReferEarn() {

  const [skeleton, setSkeleton] = useState(() => true);

  setTimeout(() => {
    setSkeleton(() => false);
  }, 200)

  return (
    <div>

      {
        skeleton ? <Template3 /> :
          <div className="refer-and-earn-parent">
            <Banner />
            <HowChoice />
            <TermCondition />
            <EarnUp />
          </div>
      }

    </div>
  );
}

export default ReferEarn;
