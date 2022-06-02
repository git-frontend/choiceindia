
import React from "react";
import Contactbanner from './contactbanner';
import Contactdetail from './Contactdetail';
import "./contact.scss";


function Contact() {

  return (
    <div className="contactbody">

      
       <Contactbanner />
       <Contactdetail />

    </div>
  );
}

export default Contact;
