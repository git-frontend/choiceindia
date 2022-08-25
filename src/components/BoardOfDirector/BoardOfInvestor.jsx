
import React from "react";
import Banner from './Banner';
// import InvestorInfoMenu from './InvestorInfoMenu';
// import Yeardetail from './Yeardetail';

import { AiFillCaretUp } from "react-icons/ai";
import "./boardofdirector.scss";
import "./navbar.scss";
import { useState,useEffect } from 'react';
import InvestorInfoMenu from './InvestorInfoMenu';
import ChoiceLTP from "../Common-features/ChoiceLTP";
import meta_tags from "../../Data/MetaTags";
function BoardOfInvestor() {

  const [rendercount, setRenderCount] = useState(() => false);

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
