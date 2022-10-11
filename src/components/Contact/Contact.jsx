
import React from "react";
import Contactbanner from './contactbanner';
import Contactdetail from './Contactdetail';
import ContactTemplate from "../Common-features/ContactTemplate";
import Template3 from "../Common-features/Template3";
import { useState, useEffect } from "react";
import "./contact.scss";
import {
  useLocation,
} from 'react-router-dom';
import meta_tags from "../../Data/MetaTags";

function Contact() {

  const [skeleton, setSkeleton] = useState(() => true);
  const [rendercount, setRenderCount] = useState(() => false);

  const location = useLocation();

  setTimeout(() => {
    setSkeleton(() => false);
  }, 200)


  useEffect(() => {
    setRenderCount(true)
    if (rendercount === true) {
      // let parser = new DOMParser();
      // let doc = parser.parseFromString(meta_tags['sub-broker'].faqscript, 'text/html');
      // document.body.appendChild(doc.getElementsByTagName('script')[0]? doc.getElementsByTagName('script')[0]: '' );
      document.title = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].title : '';
      // document.getElementById('meta-tags').name= meta_tags[location.pathname.replace('/',"")]? meta_tags[location.pathname.replace('/',"")].title : ''  ;
      document.getElementById('meta-tags').content = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].content : '';
      document.getElementById('canonical-link').href = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].link : '';
    }
  }, [rendercount])

  return (
    <div className="contactbody">
      {
        window.innerWidth < 770 ?
          <div>
            <Contactbanner />
            <Contactdetail />
          </div> :

          <div>
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
      }



    </div>
  );
}

export default Contact;
