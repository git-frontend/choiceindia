
import React from "react";
import Banner from '../Investors-info/Banner';
import VotingResultsMenu from './VotingResultsMenu';
import "../Investors-info/investorsinfo.scss";
import "../Corporate-Governance/corporate-governance.scss";
import "../Common-features/navbar.scss";
import Template1 from "../Common-features/Template1";
import { useState, useEffect } from 'react';

import ChoiceLTP from "../Common-features/ChoiceLTP";
import{ useLocation
} from 'react-router-dom';
import meta_tags from "../../Data/MetaTags";
import noDataimg from '../../assets/images/no-data.webp';

function FinancialInfo() {

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

              <VotingResultsMenu />


            </div>
          </div>
      }

    </div>
  );
}

export default FinancialInfo;
