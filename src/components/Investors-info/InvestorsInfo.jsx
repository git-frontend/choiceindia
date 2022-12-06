
import React, { useEffect } from "react";
import Banner from './Banner';
// import InvestorInfoMenu from './InvestorInfoMenu';
// import Yeardetail from './Yeardetail';
import "../Common-features/navbar.scss";
// import "../Corporate-Governance/corporate-governance.scss"
import Navbar from "../Common-features/Navbar";

import { useState } from 'react';
import Template1 from "../Common-features/Template1";
import ChoiceLTP from "../Common-features/ChoiceLTP";
import meta_tags from "../../Data/MetaTags";
import { Link } from "react-router-dom";
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
      // console.log("kkk");
 
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
                           
                          {/* <div className="menu visible menu-cust">
                          <h3 className="text-center"> <Link to="/investors" className="menu-itm-link-header ">Dissclosures under regulation 46 of the LODR</Link></h3>
              <div >
              <div className="d-flex investor-menu-wrap">
                <ul className="investor-info-menu-list">
                  <li className="menu-itm">
                    <Link to="/code-of-conduct" className="menu-itm-link">Code of Conduct</Link>
                  </li>
                  <li className="menu-itm">
                    <Link to="/corporate-governance" className="menu-itm-link">Corporate Goverannce</Link>
                  </li>
                  <li className="menu-itm">
                    <Link to="/news-announcement" className="menu-itm-link">News &amp; Announcements</Link>
                  </li>
                  <li className="menu-itm">
                    <Link to="/share-holding-pattern" className="menu-itm-link">Shareholding Pattern</Link>
                  </li>
                  <li className="menu-itm">
                    <Link to="/financial-info" className="menu-itm-link">Financial Info</Link>
                  </li>
                  <li className="menu-itm">
                    <Link to="/related-party-transaction" className="menu-itm-link">Related Party Transaction</Link>
                  </li>

                  <li className="menu-itm">
                    <Link to="/closure-of-trading-window" className="menu-itm-link">Closure of Trading Window</Link>
                  </li>

                  
                
                </ul>
                <ul className="investor-info-menu-list">
                 
                  <li className="menu-itm">
                    <Link to="/voting-results" className="menu-itm-link">Voting Results</Link>
                  </li>
                  <li className="menu-itm">
                    <Link to="/notices" className="menu-itm-link">Notices</Link>
                  </li>
                  <li className="menu-itm">
                    <Link to="/annual-report" className="menu-itm-link">Annual Report</Link>
                  </li>
                  <li className="menu-itm">
                    <Link to="/fact-sheet" className="menu-itm-link">Fact Sheet</Link>
                  </li>
                  <li className="menu-itm">
                    <Link to="/board-of-directors" className="menu-itm-link">Board of Directors</Link>
                  </li>
                  <li className="menu-itm">
                    <Link to="/investor-presentation" className="menu-itm-link">Investor Presentation</Link>
                  </li>
                </ul>
                </div>
            </div>
              </div> */}
                            
                        </div>
                    </div>
            </div>
          </div>
          
{/*               <section>
                <div className="container">
                <iframe src="https://app.churchgatepartners.com/AssignTemplate/BindTempleteview?ClientID=46" title='investor-iframe' style={{ width: '100%', height: '1350px'}} className='invest-iframe'>
                  Your browser doesn't support iframes
                </iframe>
                  </div>
              </section> */}
         

              
            {/* <InvestorInfoMenu />  */}
  {/* <Yeardetail /> */}

            </div>
          </div>
      }




    </div>
  );
}

export default React.memo(InvestorInfo) ;
