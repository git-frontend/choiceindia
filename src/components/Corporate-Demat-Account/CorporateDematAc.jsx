// import React from 'react';
import React from "react";
import { useState, useEffect, useRef } from 'react';
import './corporatedemat.scss';
import meta_tags from "../../Data/MetaTags";
import CorporateBanner from "./CorporateBanner";
import CorporateCount from './CorporateCount';
import WhyCorporateDemat from './WhyCorporateDemat';
import TypesofCorporate from './TypesofCorporate';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import OpenDemateAccountStickyFooter from "../Common-features/OpenDemateAccountStickyFooter";
function CorporateDematAc() {
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
      document.getElementById('language').lang = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].lang : '';
      if (!(document.getElementById('link1') == null)) {
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
    <>
      <div className="Corporate-main">
        <CorporateBanner />
        <CorporateCount />
        <WhyCorporateDemat />
        <TypesofCorporate />
        <section className="corporate-sticky">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <div className="corporate-sticky-heading">Get Started with<span>Portfolio Management</span>
                </div>
              </div>
              <div className="col-md-5">
                <GoogleReCaptchaProvider reCaptchaKey="6Lc9qf4hAAAAABMa3-oFLk9BAkvihcEhVHnnS7Uz" >
                  <div id="dematformsticky">
                    <OpenDemateAccountStickyFooter />
                  </div>
                </GoogleReCaptchaProvider>
              </div>
            </div>
          </div>

        </section>

      </div>
    </>
  );
};
export default CorporateDematAc;