
import React, { useEffect } from "react";
import Banner from './Banner';
import "../Common-features/navbar.scss";
import Navbar from "../Common-features/Navbar";

import { useState } from 'react';
import Template1 from "../Common-features/Template1";
import ChoiceLTP from "../Common-features/ChoiceLTP";
import meta_tags from "../../Data/MetaTags";
import { Link } from "react-router-dom";

function InvestorInfo() {

  const [skeleton, setSkeleton] = useState(() => true);
  const[trigger,setTrigger]=useState(false);

  const [rendercount, setRenderCount] = useState(() => false);



  useEffect(()=>{
    setTimeout(() => {
      setSkeleton(() => false);
    }, 200)
  },[])

 
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


  useEffect(() => {
    setTrigger(true)
    if (trigger === true) {
 
    }
  }, [trigger])

  return (
    <div>

      {
        skeleton ? <Template1 /> :
          <div className="investor-info-parent investorinfo">
            <div className="mainwrapper">

              <Banner />

            <ChoiceLTP/>
          <div className="Investormenu pb0 page-height">
            <div className="container">
                    <div className="row">
                        <div className="col-md-12 menuposition">
                            <h2 className="title">Disclosures under regulation 46 of the LODR</h2>
                            <div className="check-menu-main">

                            <Navbar />
                            
                            </div>
                           
                            
                        </div>
                    </div>
            </div>
          </div>
          
         

              

            </div>
          </div>
      }




    </div>
  );
}

export default React.memo(InvestorInfo) ;
