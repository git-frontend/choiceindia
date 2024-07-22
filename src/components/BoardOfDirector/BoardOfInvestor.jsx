
import React from "react";
import Banner from './Banner';
// import InvestorInfoMenu from './InvestorInfoMenu';
// import Yeardetail from './Yeardetail';

import { AiFillCaretUp } from "react-icons/ai";
import "./boardofdirector.scss";

import Navbar from "../Common-features/Navbar";

import "../Common-features/navbar.scss";


import { useState,useEffect } from 'react';
import InvestorInfoMenu from './InvestorInfoMenu';
import ChoiceLTP from "../Common-features/ChoiceLTP";
import meta_tags from "../../Data/MetaTags";
function BoardOfInvestor() {

  const [rendercount, setRenderCount] = useState(() => false);

  useEffect(() => {
    setRenderCount(true)
    if (rendercount === true) {
      document.title = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].title : '';
      document.getElementById('meta-tags').content = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].content : '';
      document.getElementById('canonical-link').href = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].link : '';
      document.getElementById('language').lang = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].lang : '';
      if(!(document.getElementById('link1')==null)){
        document.getElementById('link1').remove();
      document.getElementById('link2').remove();
      document.getElementById('link3').remove();
      document.getElementById('link4').remove();
      document.getElementById('link5').remove();
      document.getElementById('link6').remove();
      
      }
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
