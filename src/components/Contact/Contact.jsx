
import React from "react";
import Contactbanner from './contactbanner';
import Contactdetail from './Contactdetail';
import { useState } from "react";

import "./contact.scss";
import Template3 from "../Common-features/Template3";


function Contact() {

  const [skeleton, setSkeleton] = useState(() => true);

  const myTimeout = setTimeout(myGreeting, 1000);

  function myGreeting() {
    setSkeleton(() => false);
  }

  return (
    <div>
      {
        skeleton ? <Template3 /> :
          <div className="contactbody">
            <Contactbanner />
            <Contactdetail />
          </div>
      }
    </div>

  );
}

export default Contact;
