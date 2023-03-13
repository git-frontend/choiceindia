
import React from "react";
import Banner from './Banner';
import Loantabs from './Loantabs';
import { useState, useEffect, useRef } from "react";
import meta_tags from "../../Data/MetaTags";

import "./nbfc-individual.scss";
import "./nbfc-vehicle.scss";
import "../Invoice-Financing/nbfc-common.scss";


function NBFCloan() {

  const [rendercount, setRenderCount] = useState(() => false);
  const [check, setcheck] = useState(() => false);

  const myRef1 = useRef(null);

  const getPosition = () => {
    const element = document.getElementById("branch1");
    if (element) {
      const rect = element.getBoundingClientRect();
      // console.log("checkmate", rect.top.toFixed())
      if (rect.top.toFixed() < 350) {
        setcheck(true);
        // console.log('inside name', name);
      }

    }
  }

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
      document.getElementById('language').lang = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].lang : '';
      window.addEventListener('scroll', getPosition);
    }
  }, [rendercount])

  return (
    <div onMouseOver={() => setcheck(true)} onScroll={getPosition}>
      <div ref={myRef1} id="branch1">
        {
          check ?
            <div className="mainwrapper">
         
              <Banner />
              <Loantabs />
            </div> :
            <div className="mainwrapper">
              <Banner />
            </div>
        }
      </div>
    </div>
  );
}

export default NBFCloan;
