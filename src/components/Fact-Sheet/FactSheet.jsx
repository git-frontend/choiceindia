
import React from "react";
import Banner from '../Investors-info/Banner';
import FactSheetMenu from './FactSheetMenu';
import "../Investors-info/investorsinfo.scss";
import "../Corporate-Governance/corporate-governance.scss";
import "../Common-features/navbar.scss";
import Template1 from "../Common-features/Template1";
import { useState, useEffect } from 'react';
import ChoiceLTP from "../Common-features/ChoiceLTP";
import{ useLocation
} from 'react-router-dom';
import meta_tags from "../../Data/MetaTags";


function FactSheet() {

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
      document.getElementById('language').lang = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].lang : '';
      if(!(document.getElementById('link1')==null)){
      if(!(document.getElementById('link1').hreflang == "")){
        document.getElementById('link1').remove();
      document.getElementById('link2').remove();
      document.getElementById('link3').remove();
      document.getElementById('link4').remove();
      document.getElementById('link5').remove();
      document.getElementById('link6').remove();
      }
      }
    }
  }, [rendercount])

  return (
    <div>

      {
        skeleton ? <Template1 /> :
          <div className="code-conduct-parent investor-info-parent">
            <div className="mainwrapper">

              <Banner />

              <ChoiceLTP></ChoiceLTP>

              <FactSheetMenu />


            </div>
          </div>
      }

    </div>
  );
}

export default FactSheet;
