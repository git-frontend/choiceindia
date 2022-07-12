
import React from "react";
import Banner from '../Investors-info/Banner';
import CodeConductMenu from './CodeConductMenu';
import Yeardetail from '../Investors-info/Yeardetail';

import { AiFillCaretUp } from "react-icons/ai";
import "../Investors-info/investorsinfo.scss";
import "../Investors-info/navbar.scss";
import Template1 from "../Common-features/Template1";
import { useState } from 'react';
import ChoiceLTP from "../Common-features/ChoiceLTP";
function CodeConduct() {

  const [skeleton, setSkeleton] = useState(() => true);

  setTimeout(() => {
    setSkeleton(() => false);
  }, 200)

  return (
    <div>

      {
        skeleton ? <Template1 /> :
          <div className="code-conduct-parent">
            <div className="mainwrapper">

              <Banner />

              <ChoiceLTP></ChoiceLTP>

              <CodeConductMenu />


            </div>
          </div>
      }

    </div>
  );
}

export default CodeConduct;
