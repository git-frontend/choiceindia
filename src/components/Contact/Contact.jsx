
import React from "react";
import Contactbanner from './contactbanner';
import Contactdetail from './Contactdetail';
import ContactTemplate from "../Common-features/ContactTemplate";
import Template3 from "../Common-features/Template3";
import { useState } from "react";
import "./contact.scss";


function Contact() {

  const [skeleton, setSkeleton] = useState(() => true);

  setTimeout(() => {
    setSkeleton(() => false);
  }, 200)

  return (
    <div className="contactbody">

      {
        skeleton ?
        <div className="contact-temp-skeleton">
          <ContactTemplate />
        </div> :
          <div>
            <Contactbanner />
            <Contactdetail />
          </div>
      }

    </div>
  );
}

export default Contact;
