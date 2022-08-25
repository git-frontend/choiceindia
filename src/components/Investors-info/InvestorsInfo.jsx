
import React, { useEffect } from "react";
import Banner from './Banner';
// import InvestorInfoMenu from './InvestorInfoMenu';
// import Yeardetail from './Yeardetail';
import Navbar from './Navbar';
import "../Investors-info/navbar.scss";
import "./navbar.scss";

import { AiFillCaretUp } from "react-icons/ai";
import "./investorsinfo.scss";
import "./navbar.scss";
import { useState } from 'react';
import Template1 from "../Common-features/Template1";
import ChoiceLTP from "../Common-features/ChoiceLTP";
import meta_tags from "../../Data/MetaTags";
// import {
//   useLocation,
// } from 'react-router-dom';
// import meta_tags from "../../Data/MetaTags";

function InvestorInfo() {

  const [skeleton, setSkeleton] = useState(() => true);
  const[trigger,setTrigger]=useState(false);

  const [rendercount, setRenderCount] = useState(() => false);



  useEffect(()=>{
    //console.log("InvestorInfo")
    setTimeout(() => {
      setSkeleton(() => false);
    }, 200)
  },[])

 
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


  useEffect(() => {
    setTrigger(true)
    if (trigger === true) {
      // console.log("kkk");
 
    }
  }, [trigger])

  return (
    <div>

      {
        skeleton ? <Template1 /> :
          <div className="investor-info-parent">
            <div className="mainwrapper">

              <Banner />

            <ChoiceLTP/>
          <div className="Investormenu pb0">
            <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="title">Investors Relation</h2>
                            {/* <Navbar /> */}
                          
                            
                        </div>
                    </div>
            </div>
          </div>
              <section>
                <div className="container">
                <iframe src="https://app.churchgatepartners.com/AssignTemplate/BindTempleteview?ClientID=46" title='investor-iframe' style={{ width: '100%', height: '1350px'}} className='invest-iframe'>
                  Your browser doesn't support iframes
                </iframe>
                  </div>
              </section>

              
            {/* <InvestorInfoMenu />  */}
  {/* <Yeardetail /> */}

            </div>
          </div>
      }




    </div>
  );
}

export default React.memo(InvestorInfo) ;
