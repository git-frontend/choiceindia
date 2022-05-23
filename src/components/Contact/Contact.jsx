
import React from "react";
import Contactbanner from './contactbanner';
import Contactdetail from './Contactdetail';
import ContactHeader from './ContactHeader';
import "../../assets/css/contact.scss";


function Contact() {

  return (
    <div class="contactbody">
       <ContactHeader />
       <Contactbanner />
       <Contactdetail />

    </div>
  );
}

export default Contact;
